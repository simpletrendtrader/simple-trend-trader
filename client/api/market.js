const SYMBOLS = [
  { symbol: 'EUR/USD', label: 'EURUSD' },
  { symbol: 'GBP/USD', label: 'GBPUSD' },
  { symbol: 'USD/JPY', label: 'USDJPY' },
  { symbol: 'XAU/USD', label: 'XAUUSD' },
  { symbol: 'BTC/USD', label: 'BTCUSD' }
];

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
          display: Number(data.price).toLocaleString(undefined, {
            minimumFractionDigits: label === 'BTCUSD' ? 0 : 2,
            maximumFractionDigits: label === 'BTCUSD' ? 0 : 3
          }),
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
