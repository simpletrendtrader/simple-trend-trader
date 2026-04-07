import { motion } from 'framer-motion';

export default function StatCard({ label, value, accent = 'neon' }) {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      className={`glass-panel rounded-3xl p-5 transition ${
        accent === 'gold' ? 'shadow-gold hover:border-gold/30' : 'shadow-glow hover:border-neon/30'
      }`}
    >
      <p className="text-sm text-slate-400">{label}</p>
      <p className={`mt-3 text-3xl font-bold ${accent === 'gold' ? 'text-gold' : 'text-neon'}`}>{value}</p>
    </motion.div>
  );
}
