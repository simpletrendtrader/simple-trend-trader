import IdeaSpotlightCard from '../components/IdeaSpotlightCard.jsx';
import SectionTitle from '../components/SectionTitle.jsx';
import { featuredIdeas } from '../data/siteContent.js';

export default function TradeIdeasPage() {
  return (
    <div className="px-2 py-10">
      <SectionTitle
        eyebrow="Trade Ideas"
        title="Share Market Context In A Clean, Premium Format"
        description="Use this page as your publishing surface for trade ideas, directional bias, educational disclaimers, and session-based execution notes."
      />
      <div className="grid gap-5 xl:grid-cols-3">
        {featuredIdeas.map((idea) => (
          <IdeaSpotlightCard key={idea.pair} idea={idea} />
        ))}
      </div>
    </div>
  );
}
