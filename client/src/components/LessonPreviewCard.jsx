export default function LessonPreviewCard({ lesson }) {
  const videoId = getYouTubeId(lesson.videoUrl);
  const thumbnail = videoId ? `https://img.youtube.com/vi/${videoId}/hqdefault.jpg` : '';

  return (
    <div className="glass-panel panel-depth rounded-[2rem] p-6 transition hover:-translate-y-1 hover:border-gold/25 hover:shadow-gold">
      {thumbnail && (
        <a href={lesson.videoUrl} target="_blank" rel="noreferrer" className="block overflow-hidden rounded-[1.4rem] border border-white/10">
          <img src={thumbnail} alt={lesson.title} className="h-44 w-full object-cover transition duration-300 hover:scale-[1.03]" />
        </a>
      )}
      <p className="text-xs uppercase tracking-[0.32em] text-gold">{lesson.category}</p>
      <h3 className="mt-4 font-display text-2xl text-white">{lesson.title}</h3>
      <p className="mt-4 text-sm leading-7 text-slate-300">{lesson.description}</p>
      <a
        href={lesson.videoUrl}
        target="_blank"
        rel="noreferrer"
        className="mt-5 inline-flex rounded-full border border-gold/20 bg-gold/10 px-4 py-2 text-sm font-medium text-gold"
      >
        Watch On YouTube
      </a>
    </div>
  );
}

function getYouTubeId(url = '') {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes('youtu.be')) {
      return parsed.pathname.replace('/', '');
    }

    if (parsed.hostname.includes('youtube.com')) {
      return parsed.searchParams.get('v') || '';
    }

    return '';
  } catch {
    return '';
  }
}
