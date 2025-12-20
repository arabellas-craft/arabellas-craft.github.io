#!/usr/bin/env node

/**
 * Publishes new Jekyll posts to Tumblr
 *
 * This script is called by the GitHub Action workflow when new posts are detected.
 * It reads the post front matter and content, then creates appropriate Tumblr posts.
 */

const fs = require('fs').promises;
const path = require('path');
const tumblr = require('tumblr.js');
const matter = require('gray-matter');

// Configuration from environment variables
const config = {
  consumerKey: process.env.TUMBLR_CONSUMER_KEY,
  consumerSecret: process.env.TUMBLR_CONSUMER_SECRET,
  token: process.env.TUMBLR_OAUTH_TOKEN,
  tokenSecret: process.env.TUMBLR_OAUTH_TOKEN_SECRET,
  blogId: process.env.TUMBLR_BLOG_ID || 'juniperdivination',
  siteUrl: 'https://juniperdivination.com',
  postFiles: process.env.POST_FILES || ''
};

// Validate configuration
function validateConfig() {
  const required = ['consumerKey', 'consumerSecret', 'token', 'tokenSecret'];
  const missing = required.filter(key => !config[key]);

  if (missing.length > 0) {
    console.error('Missing required configuration:');
    missing.forEach(key => console.error(`  - ${key}`));
    process.exit(1);
  }
}

// Create Tumblr client
function createClient() {
  return tumblr.createClient({
    consumer_key: config.consumerKey,
    consumer_secret: config.consumerSecret,
    token: config.token,
    token_secret: config.tokenSecret,
    returnPromises: true
  });
}

// Parse Jekyll post file
async function parsePost(filePath) {
  try {
    const content = await fs.readFile(filePath, 'utf8');
    const { data: frontMatter, content: body } = matter(content);

    return {
      frontMatter,
      body,
      filePath
    };
  } catch (error) {
    console.error(`Error reading file ${filePath}:`, error.message);
    return null;
  }
}


// Create Tumblr post for 'article' layout
async function createArticlePost(client, post) {
  const { frontMatter, body } = post;

  // Build tags array from categories field (comma-separated string)
  let tags = [];
  if (frontMatter.categories) {
    // Split comma-separated categories and trim whitespace
    tags = frontMatter.categories
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);
  } else if (frontMatter.tag) {
    // Fallback to tag field if no categories
    tags = [frontMatter.tag];
  }

  const postData = {
    type: 'text',
    state: 'draft',
    title: frontMatter.title || 'Untitled',
    body: body,
    format: 'markdown',
    tags: tags
  };

  console.log(`Creating text post: "${postData.title}"`);

  try {
    const response = await client.createPost(config.blogId, postData);
    console.log(`✓ Successfully created text post (ID: ${response.id})`);
    return response;
  } catch (error) {
    console.error(`✗ Failed to create text post:`, error.message);
    throw error;
  }
}

// Create Tumblr post for 'free-tarot-spread' layout
async function createTarotSpreadPost(client, post) {
  const { frontMatter } = post;

  // Build tags array from categories field (comma-separated string)
  let tags = [];
  if (frontMatter.categories) {
    // Split comma-separated categories and trim whitespace
    tags = frontMatter.categories
      .split(',')
      .map(tag => tag.trim())
      .filter(tag => tag.length > 0);
  } else if (frontMatter.tag) {
    // Fallback to tag field if no categories
    tags = [frontMatter.tag];
  }

  // Construct image URL
  const imageUrl = frontMatter.img
    ? `${config.siteUrl}/assets/img/free-tarot-spread/${frontMatter.img}`
    : null;

  if (!imageUrl) {
    console.error('No image found for tarot spread post');
    throw new Error('Tarot spread posts require an image');
  }

  // Construct permalink (strip leading slash if present to avoid double slashes)
  const permalink = frontMatter.permalink
    ? `${config.siteUrl}/${frontMatter.permalink.replace(/^\//, '')}`
    : null;

  // Create caption with description and link
  let caption = '';
  if (frontMatter['short-description']) {
    caption += `<p>${frontMatter['short-description']}</p>`;
  }
  if (permalink) {
    caption += `<p><a href="${permalink}">Read more →</a></p>`;
  }

  const postData = {
    type: 'photo',
    state: 'draft',
    caption: caption,
    link: permalink,
    source: imageUrl,
    tags: tags
  };

  console.log(`Creating photo post: "${frontMatter.title}"`);

  try {
    const response = await client.createPost(config.blogId, postData);
    console.log(`✓ Successfully created photo post (ID: ${response.id})`);
    return response;
  } catch (error) {
    console.error(`✗ Failed to create photo post:`, error.message);
    throw error;
  }
}

// Process a single post file
async function processPost(client, filePath) {
  console.log(`\nProcessing: ${filePath}`);

  const post = await parsePost(filePath);
  if (!post) {
    console.log('  Skipped: Could not parse post');
    return null;
  }

  const layout = post.frontMatter.layout;
  console.log(`  Layout: ${layout}`);

  // Only process specific layouts
  if (layout === 'article') {
    return await createArticlePost(client, post);
  } else if (layout === 'free-tarot-spread') {
    return await createTarotSpreadPost(client, post);
  } else {
    console.log(`  Skipped: Layout '${layout}' not configured for Tumblr`);
    return null;
  }
}

// Main execution
async function main() {
  console.log('=== Tumblr Auto-Publisher ===\n');

  validateConfig();

  if (!config.postFiles) {
    console.log('No post files specified. Nothing to do.');
    return;
  }

  const client = createClient();
  const files = config.postFiles.split(',').filter(f => f.trim());

  console.log(`Processing ${files.length} file(s)...\n`);

  let successCount = 0;
  let skipCount = 0;
  let errorCount = 0;

  for (const file of files) {
    try {
      const result = await processPost(client, file.trim());
      if (result) {
        successCount++;
      } else {
        skipCount++;
      }
    } catch (error) {
      console.error(`Error processing ${file}:`, error.message);
      errorCount++;
    }
  }

  console.log('\n=== Summary ===');
  console.log(`✓ Successfully posted: ${successCount}`);
  console.log(`- Skipped: ${skipCount}`);
  console.log(`✗ Errors: ${errorCount}`);

  if (errorCount > 0) {
    process.exit(1);
  }
}

main().catch(error => {
  console.error('Fatal error:', error);
  process.exit(1);
});
