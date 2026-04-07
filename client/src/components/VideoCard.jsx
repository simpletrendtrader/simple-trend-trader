import { Lock, PlayCircle } from 'lucide-react';

export default function VideoCard({ video }) {
  return (
    <div className="glass-panel rounded-3xl p-4 transition hover:-translate-y-1 hover:border-gold/30 hover:shadow-gold">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-neon/15 via-white/5 to-gold/20 p-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.15),transparent_45%)]" />
        <PlayCircle className="relative text-neon" size={48} />
      </div>
      <div className="mt-4 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.3em] text-gold">{video.category}</p>
          <h3 className="mt-2 text-lg font-semibold">{video.title}</h3>
        </div>
        {video.locked && <Lock size={18} className="text-gold" />}
      </div>
      <p className="mt-3 text-sm text-slate-400">{video.description}</p>
      <a
        href={video.locked ? '#' : video.videoUrl}
        target="_blank"
        rel="noreferrer"
        className={`mt-4 inline-flex rounded-full px-4 py-2 text-sm ${
          video.locked
            ? 'cursor-not-allowed border border-gold/20 bg-gold/10 text-gold'
            : 'border border-neon/20 bg-neon/10 text-neon hover:shadow-glow'
        }`}
      >
        {video.locked ? 'VIP Locked' : 'Watch Lesson'}
      </a>
    </div>
  );
}
