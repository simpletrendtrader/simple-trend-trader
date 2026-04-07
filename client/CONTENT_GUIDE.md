# SIMPLE TREND TRADER Content Guide

The fastest place to update your website content is:

- `client/src/data/siteContent.js`

## What to edit there

- `siteBrand`
  - main hero text
  - tagline
  - brand positioning copy

- `dailyTradeIdea`
  - today's featured setup
  - entry zone
  - invalidation
  - targets
  - execution note

- `featuredIdeas`
  - your additional trade ideas page cards

- `lessonTracks`
  - academy/education card content
  - YouTube video links

- `contactInfo`
  - email
  - WhatsApp link
  - Telegram link
  - Instagram link
  - join CTA labels and URLs

- `weeklyNote`
  - editorial market note content

## Typical update workflow

1. Edit `client/src/data/siteContent.js`
2. Save the file
3. Commit and push
4. Vercel redeploys automatically

## Most frequent daily update

If you only want to update one thing each day, edit:

- `dailyTradeIdea`

That section is designed to be your easiest recurring publishing block.

## How to add YouTube lessons

In `client/src/data/siteContent.js`, find:

- `lessonTracks`

Each lesson now supports:

- `category`
- `title`
- `description`
- `videoUrl`

Example:

```js
{
  category: 'Market Structure',
  title: 'How To Read The Trend Without Overthinking',
  description: 'Your lesson summary here',
  videoUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID'
}
```

After saving:

1. `git add client/src/data/siteContent.js`
2. `git commit -m "Update education videos"`
3. `git push origin main`

Vercel will redeploy automatically.
