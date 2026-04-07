import { useEffect, useState } from 'react';
import { marketTapeFallback } from '../data/siteContent.js';

export default function LiveTicker() {
  const [quotes, setQuotes] = useState([]);

  useEffect(() => {
    let active = true;

    const loadQuotes = async () => {
      try {
        const response = await fetch('/api/market');
        const data = await response.json();

        if (!response.ok || !active) {
          return;
        }

        setQuotes(data.quotes || []);
      } catch (_error) {
        if (active) {
          setQuotes([]);
        }
      }
    };

    loadQuotes();
    const interval = setInterval(loadQuotes, 60000);

    return () => {
      active = false;
      clearInterval(interval);
    };
  }, []);

  const tapeItems =
    quotes.length > 0
      ? quotes.map((quote) => `${quote.symbol} ${quote.display}`)
      : marketTapeFallback;

  return (
    <div className="glass-panel overflow-hidden rounded-full border-gold/15 py-3 shadow-gold">
      <div className="flex min-w-full animate-ticker gap-8 whitespace-nowrap px-6 text-xs uppercase tracking-[0.28em] text-slate-200">
        {[...tapeItems, ...tapeItems].map((item, index) => (
          <span key={`${item}-${index}`}>
            <span className="mr-3 text-neon">•</span>
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
