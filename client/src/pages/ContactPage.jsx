import { Mail, MessageSquareMore, Send } from 'lucide-react';
import SectionTitle from '../components/SectionTitle.jsx';

const contactBlocks = [
  {
    title: 'Email Enquiries',
    copy: 'Use this block for collaborations, mentorship interest, or premium access requests.',
    icon: Mail
  },
  {
    title: 'Community Requests',
    copy: 'Invite your audience to ask for market breakdowns, education topics, or session-specific analysis.',
    icon: MessageSquareMore
  },
  {
    title: 'Join The VIP Waitlist',
    copy: 'A premium CTA area that can later be connected to forms, newsletters, or payment flows.',
    icon: Send
  }
];

export default function ContactPage() {
  return (
    <div className="px-2 py-10">
      <SectionTitle
        eyebrow="Contact"
        title="Turn The Website Into Your Publishing Hub"
        description="Use this page as the polished entry point for enquiries, premium access requests, and community growth."
      />
      <div className="grid gap-5 lg:grid-cols-[0.9fr,1.1fr]">
        <div className="glass-panel rounded-[2rem] p-8 shadow-glow">
          <p className="text-xs uppercase tracking-[0.35em] text-neon">Suggested contact setup</p>
          <h3 className="mt-4 font-display text-4xl text-white">hello@simpletrendtrader.com</h3>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Replace this with your real email, WhatsApp link, Telegram community link, or newsletter form when
            you are ready to receive traffic from the website.
          </p>
          <div className="mt-8 rounded-[1.6rem] border border-gold/20 bg-gold/10 p-5 text-sm text-gold">
            Current recommendation: launch the website first, grow audience trust, then connect forms and premium
            access flows in the next phase.
          </div>
        </div>
        <div className="grid gap-4">
          {contactBlocks.map((block) => {
            const Icon = block.icon;

            return (
              <div key={block.title} className="glass-panel rounded-[1.8rem] p-6">
                <Icon className="text-gold" />
                <h4 className="mt-4 text-xl font-semibold text-white">{block.title}</h4>
                <p className="mt-3 text-sm text-slate-400">{block.copy}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
