#!/usr/bin/env node

/**
 * Helper script to get Tumblr OAuth tokens
 * Run this locally ONCE to get your OAuth Token and OAuth Token Secret
 *
 * Usage:
 * 1. npm install oauth
 * 2. Set environment variables: TUMBLR_CONSUMER_KEY and TUMBLR_CONSUMER_SECRET
 * 3. Run: node .github/scripts/get-tumblr-tokens.js
 */

const OAuth = require('oauth').OAuth;
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const consumerKey = process.env.TUMBLR_CONSUMER_KEY;
const consumerSecret = process.env.TUMBLR_CONSUMER_SECRET;

if (!consumerKey || !consumerSecret) {
  console.error('Error: Missing required environment variables');
  console.error('Please set TUMBLR_CONSUMER_KEY and TUMBLR_CONSUMER_SECRET');
  console.error('\nExample:');
  console.error('export TUMBLR_CONSUMER_KEY="your-key"');
  console.error('export TUMBLR_CONSUMER_SECRET="your-secret"');
  console.error('node .github/scripts/get-tumblr-tokens.js');
  process.exit(1);
}

const oauth = new OAuth(
  'https://www.tumblr.com/oauth/request_token',
  'https://www.tumblr.com/oauth/access_token',
  consumerKey,
  consumerSecret,
  '1.0A',
  'https://juniperdivination.com',
  'HMAC-SHA1'
);

console.log('\n=== Tumblr OAuth Token Generator ===\n');

oauth.getOAuthRequestToken((error, oauthToken, oauthTokenSecret, results) => {
  if (error) {
    console.error('Error getting request token:', error);
    process.exit(1);
  }

  const authorizeUrl = `https://www.tumblr.com/oauth/authorize?oauth_token=${oauthToken}`;

  console.log('Step 1: Visit this URL to authorize the application:');
  console.log(authorizeUrl);
  console.log('\nStep 2: After authorizing, you\'ll be redirected. Copy the oauth_verifier from the URL.');

  rl.question('\nEnter the oauth_verifier: ', (verifier) => {
    const cleanVerifier = verifier.trim();

    if (!cleanVerifier) {
      console.error('Error: oauth_verifier cannot be empty');
      rl.close();
      process.exit(1);
    }

    console.log(`\nUsing verifier: ${cleanVerifier}`);

    oauth.getOAuthAccessToken(
      oauthToken,
      oauthTokenSecret,
      cleanVerifier,
      (error, oauthAccessToken, oauthAccessTokenSecret, results) => {
        if (error) {
          console.error('Error getting access token:', error);
          console.error('\nTroubleshooting tips:');
          console.error('1. Make sure you copied the entire oauth_verifier value from the URL');
          console.error('2. The verifier should look like: oauth_verifier=XXXXXXXXXXXXX');
          console.error('3. Copy only the part after "oauth_verifier=" (without quotes)');
          console.error('4. Make sure the authorization token hasn\'t expired - try the process again from the start');
          rl.close();
          process.exit(1);
        }

        console.log('\n=== SUCCESS! ===');
        console.log('\nAdd these to your GitHub Secrets:');
        console.log(`TUMBLR_OAUTH_TOKEN: ${oauthAccessToken}`);
        console.log(`TUMBLR_OAUTH_TOKEN_SECRET: ${oauthAccessTokenSecret}`);
        console.log('\nKeep these values secure and never commit them to your repository!');
        rl.close();
      }
    );
  });
});
