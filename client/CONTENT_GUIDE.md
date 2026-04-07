# SIMPLE TREND TRADER Content Guide

You now have 3 simpler files:

## 1. Daily trade update

- `client/src/data/dailyTradeIdea.js`

Use this when you want to update today's main trade idea.

## 2. YouTube education videos

- `client/src/data/youtubeLessons.js`

Use this when you want to add or edit education videos.

## 3. General website content

- `client/src/data/siteContent.js`

Use this for:
- hero text
- contact links
- featured trade ideas
- weekly note
- pricing text
- general website copy

## Easiest daily workflow

If you only want to update today's setup:

1. Open:
   - `client/src/data/dailyTradeIdea.js`
2. Edit the text
3. Save
4. Run:

```bash
git add client/src/data/dailyTradeIdea.js
git commit -m "Update daily trade idea"
git push origin main
```

## How to update YouTube lessons

Open:

- `client/src/data/youtubeLessons.js`

Each lesson supports:

- `category`
- `title`
- `description`
- `videoUrl`

Example:

```js
{
  category: 'Gold Trading',
  title: 'How I Analyse XAUUSD Structure',
  description: 'Simple breakdown of trend and confirmation.',
  videoUrl: 'https://www.youtube.com/watch?v=YOUR_VIDEO_ID'
}
```

Then run:

```bash
git add client/src/data/youtubeLessons.js
git commit -m "Update YouTube lessons"
git push origin main
```

## When to use siteContent.js

Open:

- `client/src/data/siteContent.js`

Use this for less frequent updates such as:
- brand text
- contact links
- featured ideas
- weekly note

## After every update

After `git push origin main`:

- wait 1 to 2 minutes
- refresh the website

Vercel will redeploy automatically.
