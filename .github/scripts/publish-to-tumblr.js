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
  blogId: (process.env.TUMBLR_BLOG_ID && !process.env.TUMBLR_BLOG_ID.includes('.tumblr.com'))
    ? `${process.env.TUMBLR_BLOG_ID}.tumblr.com`
    : (process.env.TUMBLR_BLOG_ID || 'juniper-divination-and-witchery.tumblr.com'),
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
  const client = tumblr.createClient({
    consumer_key: config.consumerKey,
    consumer_secret: config.consumerSecret,
    token: config.token,
    token_secret: config.tokenSecret,
    returnPromises: true
  });

  // tumblr.js v3 swallows Tumblr's detailed error payload and only surfaces
  // "API error: 400 Bad Request" via error.message. Wrap the underlying
  // request library so we can dump the response body whenever Tumblr returns
  // a 4xx/5xx. This is the only way to see what the API actually objected to
  // (missing field, bad image, signature mismatch, etc.).
  const originalPost = client.request.post;
  client.request.post = function (options, callback) {
    return originalPost.call(this, options, function (err, response, body) {
      if (response && response.statusCode >= 400) {
        const url = (options && options.url) || '(unknown url)';
        console.error(`\n  ↳ Tumblr returned ${response.statusCode} for ${url}`);
        let parsed = body;
        if (typeof body === 'string') {
          try { parsed = JSON.parse(body); } catch (_) { /* leave as string */ }
        }
        const detail = JSON.stringify(parsed, null, 2);
        // Indent each line so the dump is visibly nested under the failure.
        console.error('     ' + detail.split('\n').join('\n     '));
        // Also surface the most useful nested fields explicitly, since
        // Tumblr puts the real error text in a few different places.
        if (parsed && typeof parsed === 'object') {
          const errors = parsed.errors
            || (parsed.response && parsed.response.errors)
            || null;
          if (Array.isArray(errors) && errors.length) {
            console.error('     → errors[]:');
            errors.forEach((e, i) => {
              console.error(`        [${i}] ${JSON.stringify(e)}`);
            });
          }
          if (parsed.meta && parsed.meta.msg) {
            console.error(`     → meta.msg: ${parsed.meta.msg}`);
          }
        }
      }
      if (callback) callback(err, response, body);
    });
  };

  return client;
}

// Parse Jekyll post file
async function parsePost(filePath) {
  try {
    // Resolve path relative to repository root (two directories up from .github/scripts)
    const repoRoot = path.resolve(__dirname, '../../');
    const absolutePath = path.resolve(repoRoot, filePath);

    const content = await fs.readFile(absolutePath, 'utf8');
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


// The Ko-fi callout include, rebuilt for Tumblr: plain markdown (Tumblr drops
// the wrapper div and inline styles) with utm_source=tumblr so clicks from
// Tumblr are attributed. Copy and link come from the include itself, so edits
// there carry over.
async function loadTumblrKofiCallout() {
  const repoRoot = path.resolve(__dirname, '../../');
  const includePath = path.resolve(repoRoot, '_includes/article-kofi-callout.html');
  try {
    const html = await fs.readFile(includePath, 'utf8');
    const text = (html.match(/<p>([\s\S]*?)<\/p>/) || [])[1];
    const href = (html.match(/href=['"]([^'"]+)['"]/) || [])[1];
    const alt = (html.match(/alt=['"]([^'"]+)['"]/) || [])[1] || 'Donate at ko-fi.com';
    if (!text || !href) {
      console.warn(`  Ko-fi callout not found in ${includePath}; leaving it out`);
      return '';
    }
    const message = text
      .replace(/<br\s*\/?>/gi, ' ')
      .replace(/<[^>]+>/g, '')
      .replace(/\s+/g, ' ')
      .trim();
    const url = href.replace(/utm_source=[^&]*/, 'utm_source=tumblr');
    return `${message}\n\n[${alt}](${url})`;
  } catch (error) {
    console.warn(`  Could not read Ko-fi callout (${error.message}); leaving it out`);
    return '';
  }
}

// Tumblr's markdown renderer doesn't know Jekyll/Kramdown extensions, so
// anything below would show up as literal text in the draft.
function sanitizeForTumblr(markdown, kofiCallout = '') {
  return markdown
    // Ko-fi callout include: swap in the Tumblr version
    .replace(/\{%-?\s*include\s+article-kofi-callout\.html\s*-?%\}/g, kofiCallout)
    // Ko-fi links written into the article body are tagged for the website
    .replace(/(https:\/\/ko-fi\.com\/[^\s)"']*?)utm_source=website/g, '$1utm_source=tumblr')
    // Liquid comment blocks: drop the block and its contents
    .replace(/\{%-?\s*comment\s*-?%\}[\s\S]*?\{%-?\s*endcomment\s*-?%\}/g, '')
    // Other Liquid tags: {% include ... %}, {% assign ... %}, etc.
    .replace(/\{%[\s\S]*?%\}/g, '')
    // Liquid output: {{ ... }}
    .replace(/\{\{[\s\S]*?\}\}/g, '')
    // Kramdown attribute lists and extensions:
    // {:target="_blank" rel="noopener noreferrer"}, {:.timeline}, {: #id}, {::options}
    .replace(/\{:[^}\n]*\}/g, '')
    // Root-relative links and images would resolve against tumblr.com
    .replace(/\]\(\//g, `](${config.siteUrl}/`)
    // Collapse blank-line runs left where whole lines were removed
    .replace(/\n{3,}/g, '\n\n')
    .trim();
}

// Create Tumblr post for 'article' layout
async function createArticlePost(client, post) {
  const { frontMatter, body } = post;
  const kofiCallout = await loadTumblrKofiCallout();

  // Use categories (comma-separated string) or tag field
  const tags = frontMatter.categories || frontMatter.tag || '';

  // Construct permalink (strip leading slash if present to avoid double slashes)
  const permalink = frontMatter.permalink
    ? `${config.siteUrl}/${frontMatter.permalink.replace(/^\//, '')}`
    : null;

  const postData = {
    type: 'text',
    state: 'draft',
    title: frontMatter.title || 'Untitled',
    body: sanitizeForTumblr(body, kofiCallout),
    format: 'markdown',
    tags: tags,
    source_url: permalink
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

  // Use categories (comma-separated string) or tag field
  const tags = frontMatter.categories || frontMatter.tag || '';

  if (!frontMatter.img) {
    console.error('No image found for tarot spread post');
    throw new Error('Tarot spread posts require an image');
  }

  // Read the image from disk and base64-encode it. This sidesteps the
  // public-URL fetch path (which has stricter size/dimension limits and
  // can race with GitHub Pages deploys) and lets Tumblr ingest the bytes
  // directly via the `data64` parameter on legacy photo posts.
  const repoRoot = path.resolve(__dirname, '../../');
  const imagePath = path.resolve(repoRoot, 'assets/img/free-tarot-spread', frontMatter.img);
  let imageData64;
  try {
    const imageBuffer = await fs.readFile(imagePath);
    imageData64 = imageBuffer.toString('base64');
    console.log(`  Loaded image (${(imageBuffer.length / 1024).toFixed(0)} KB) from ${imagePath}`);
  } catch (error) {
    console.error(`Failed to read image at ${imagePath}:`, error.message);
    throw new Error(`Tarot spread image not found: ${imagePath}`);
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
    source_url: permalink,
    data64: imageData64,
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
