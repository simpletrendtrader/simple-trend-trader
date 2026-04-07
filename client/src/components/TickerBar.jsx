const tickerItems = [
  'BTCUSD +2.14%',
  'XAUUSD Trend Bullish',
  'EURUSD Sell Zone Active',
  'NASDAQ Breakout Watch',
  'VIP Setups Updated',
  'Risk Per Trade: 1%'
];

export default function TickerBar() {
  return (
    <div className="glass-panel mx-auto flex max-w-7xl overflow-hidden rounded-full border border-gold/15 px-0 py-3 shadow-gold">
      <div className="flex min-w-full animate-ticker gap-8 whitespace-nowrap px-6 text-sm text-slate-200">
        {[...tickerItems, ...tickerItems].map((item, index) => (
          <span key={`${item}-${index}`} className="tracking-[0.24em] text-xs uppercase">
            <span className="mr-3 text-neon">•</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
