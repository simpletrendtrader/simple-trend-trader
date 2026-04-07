// MAIN WEBSITE CONTENT
// Edit this file for general website text like hero text, contact links, featured ideas, and weekly note.

export const siteBrand = {
  name: 'SIMPLE TREND TRADER',
  tagline: 'Trade Smart. Trade Simple.',
  heroLabel: 'SIMPLE TREND TRADER',
  heroKicker: 'For traders who want calm, clean conviction.',
  heroTitle: 'A modern trading website for publishing market ideas with style, clarity, and premium presence.',
  heroDescription:
    'SIMPLE TREND TRADER is a polished educational trading brand built to share trade ideas, explain market logic, build trust, and introduce a future VIP path without unnecessary complexity first.'
};

export const contactInfo = {
  email: 'hello@simpletrendtrader.com',
  whatsapp: 'https://wa.me/910000000000',
  telegram: 'https://t.me/simpletrendtrader',
  instagram: 'https://instagram.com/simpletrendtrader',
  primaryCtaLabel: 'Join The Community',
  primaryCtaHref: 'https://t.me/simpletrendtrader',
  secondaryCtaLabel: 'Email Directly',
  secondaryCtaHref: 'mailto:hello@simpletrendtrader.com'
};

export const marketTapeFallback = [
  'EURUSD updating...',
  'GBPUSD updating...',
  'USDJPY updating...',
  'XAUUSD updating...',
  'BTCUSD updating...'
];

export const featuredIdeas = [
  {
    pair: 'XAUUSD',
    bias: 'Bullish Continuation',
    thesis:
      'Gold is holding premium demand after a clean impulse leg. I would only like longs above the higher-low zone with patient confirmation.',
    entryZone: '2358 - 2364',
    invalidation: 'Close below 2350',
    target: '2382 / 2396',
    timeframe: 'London + New York overlap'
  },
  {
    pair: 'BTCUSD',
    bias: 'Range Break Watch',
    thesis:
      'Bitcoin is compressing just under resistance. The idea is not to chase the first candle, but to wait for a pullback that proves acceptance.',
    entryZone: 'Reclaim 68.2k and hold',
    invalidation: 'Lose 67.1k',
    target: '70.4k / 71.6k',
    timeframe: '4H execution map'
  },
  {
    pair: 'EURUSD',
    bias: 'Sell Into Weakness',
    thesis:
      'If price continues to reject the intraday supply shelf, I prefer a cleaner short from weakness instead of predicting a top too early.',
    entryZone: '1.0832 - 1.0846',
    invalidation: 'Sustain above 1.0864',
    target: '1.0788 / 1.0765',
    timeframe: 'Intraday continuation'
  }
];

export const pillars = [
  {
    title: 'Clear Trade Narratives',
    description:
      'Every idea should explain why the market is attractive, where the risk is wrong, and what conditions invalidate the setup.'
  },
  {
    title: 'Education Before Noise',
    description:
      'The website teaches process first so your audience understands the logic behind the idea instead of blindly following levels.'
  },
  {
    title: 'Premium Brand Presence',
    description:
      'A polished visual identity builds trust. The site should feel intentional, modern, and worthy of serious traders.'
  }
];

export const stats = [
  { label: 'Trade Maps Weekly', value: '12+' },
  { label: 'Educational Modules', value: '24' },
  { label: 'Core Markets Tracked', value: 'FX • Gold • Crypto' },
  { label: 'Brand Style', value: 'Modern Editorial' }
];

export const manifesto = [
  'Trade ideas should teach the story behind the setup.',
  'A premium brand is built through clarity, not clutter.',
  'Execution gets simpler when the framework stays simple.'
];

export const memberships = [
  {
    name: 'Open Access',
    price: 'Free',
    subtitle: 'For audience growth',
    features: ['Public market commentary', 'Selected trade ideas', 'Foundational education notes']
  },
  {
    name: 'VIP Circle',
    price: 'Premium',
    subtitle: 'For your future premium tier',
    features: ['Detailed setup logic', 'Deep-dive lessons', 'Private member positioning']
  }
];

export const weeklyNote = {
  issue: 'Weekly Market Note / Issue 07',
  title: 'Patience is the edge when the market is forcing weak conviction.',
  summary:
    'This week the focus is not on chasing every move. It is on waiting for clean acceptance, respecting invalidation quickly, and treating trade selection like curation.',
  bullets: [
    'Gold remains strongest when higher lows hold with intent.',
    'Bitcoin still needs acceptance after the reclaim, not emotion.',
    'FX ideas should stay selective while momentum stays uneven.'
  ]
};
