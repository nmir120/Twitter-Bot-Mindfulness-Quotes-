A node.js project that uses the Twitter API (using the 'twitter-api-v2' package) to tweet a random mindfulness quote, every 60 minutes.
I used Heroku to deploy this bot.
Check out the Twitter bot at twitter.com/bot_mindfulness.

## Setup

Credentials are read from the environment, not from the source. Set these four before running:

```
TWITTER_CONSUMER_KEY
TWITTER_CONSUMER_SECRET
TWITTER_ACCESS_TOKEN
TWITTER_ACCESS_TOKEN_SECRET
```

Then:

```
npm install
node index.js
```
