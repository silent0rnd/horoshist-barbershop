import { ArrowUpRight, Scissors } from 'lucide-react';
import { motion } from 'motion/react';
import { BARBERS } from '../constants';

export default function BarbersTeam() {
  return (
    <section id="masters" className="section team-section" aria-labelledby="masters-title">
      <div className="section-heading">
        <p className="eyebrow"><Scissors size={15} /> Команда</p>
        <h2 id="masters-title">Наши мастера</h2>
        <p>Три характера, один подход - точность в каждой детали.</p>
      </div>

      <div className="team-grid">
        {BARBERS.map((barber, index) => (
          <motion.article key={barber.id} className="barber-card" initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.25 }} transition={{ duration: 0.55, delay: index * 0.1 }}>
            <div className="barber-photo-wrap">
              <img src={barber.avatar} alt={`Барбер ${barber.name}`} className="barber-photo" />
              <span className="barber-number">0{index + 1}</span>
              <span className="barber-corner" aria-hidden="true" />
            </div>
            <div className="barber-info">
              <div><p>{barber.role}</p><h3>{barber.name}</h3></div>
              <ArrowUpRight size={21} aria-hidden="true" />
            </div>
            <span className="barber-experience">{barber.experience}</span>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
