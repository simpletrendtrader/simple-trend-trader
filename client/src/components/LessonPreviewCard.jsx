export default function LessonPreviewCard({ lesson }) {
  return (
    <div className="glass-panel rounded-[2rem] p-6 transition hover:-translate-y-1 hover:border-gold/25 hover:shadow-gold">
      <p className="text-xs uppercase tracking-[0.32em] text-gold">{lesson.category}</p>
      <h3 className="mt-4 font-display text-2xl text-white">{lesson.title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-300">{lesson.description}</p>
    </div>
  );
}
