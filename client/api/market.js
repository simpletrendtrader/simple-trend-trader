const SYMBOLS = [
  { symbol: 'EUR/USD', label: 'EURUSD' },
  { symbol: 'GBP/USD', label: 'GBPUSD' },
  { symbol: 'USD/JPY', label: 'USDJPY' },
  { symbol: 'XAU/USD', label: 'XAUUSD' },
  { symbol: 'BTC/USD', label: 'BTCUSD' }
];

const formatPrice = (label, value) => {
  if (label === 'EURUSD' || label === 'GBPUSD') {
    return value.toFixed(4);
  }

  if (label === 'USDJPY') {
    return value.toFixed(2);
  }

  if (label === 'XAUUSD') {
    return value.toFixed(2);
  }

  if (label === 'BTCUSD') {
    return Math.round(value).toLocaleString();
  }

  return value.toFixed(2);
};

export default async function handler(_req, res) {
  const apiKey = process.env.TWELVE_DATA_API_KEY;

  if (!apiKey) {
    return res.status(500).json({ message: 'TWELVE_DATA_API_KEY is not configured' });
  }

  try {
    const quotes = await Promise.all(
      SYMBOLS.map(async ({ symbol, label }) => {
        const url = `https://api.twelvedata.com/price?symbol=${encodeURIComponent(symbol)}&apikey=${apiKey}`;
        const response = await fetch(url);
        const data = await response.json();

        if (!response.ok || data.status === 'error' || !data.price) {
          throw new Error(data.message || `Failed to fetch ${symbol}`);
        }

        return {
          symbol: label,
          display: formatPrice(label, Number(data.price)),
          raw: Number(data.price)
        };
      })
    );

    res.setHeader('Cache-Control', 's-maxage=30, stale-while-revalidate=60');
    return res.status(200).json({ quotes, updatedAt: new Date().toISOString() });
  } catch (error) {
    return res.status(500).json({ message: error.message || 'Ticker fetch failed' });
  }
}
