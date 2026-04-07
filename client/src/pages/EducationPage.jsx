import SectionTitle from '../components/SectionTitle.jsx';
import VideoCard from '../components/VideoCard.jsx';
import { useFetch } from '../hooks/useFetch.js';

export default function EducationPage() {
  const { data, loading, error } = useFetch('/education');
  const videos = data.videos || [];

  return (
    <div>
      <SectionTitle
        eyebrow="Education"
        title="Trading Video Library"
        description="Organize free and VIP videos by category so your members can learn the exact system behind the signals."
      />
      {loading && <p className="text-sm text-slate-400">Loading lessons...</p>}
      {error && <p className="text-sm text-rose-300">{error}</p>}
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {videos.map((video) => (
          <VideoCard key={video._id} video={video} />
        ))}
      </div>
    </div>
  );
}
