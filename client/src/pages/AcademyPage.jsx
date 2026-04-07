import LessonPreviewCard from '../components/LessonPreviewCard.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import { lessonTracks } from '../data/siteContent.js';

export default function AcademyPage() {
  return (
    <div className="px-2 py-10">
      <SectionTitle
        eyebrow="Academy"
        title="Teach The Process Behind Every Setup"
        description="This section frames SIMPLE TREND TRADER as a brand that educates, not just signals. Keep the tone clear, premium, and confidence-building."
      />
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {lessonTracks.map((lesson) => (
          <LessonPreviewCard key={lesson.title} lesson={lesson} />
        ))}
      </div>
    </div>
  );
}
