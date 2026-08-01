import { Scissors } from 'lucide-react';
import { motion } from 'motion/react';
import { GALLERY } from '../constants';

const processFrames = GALLERY.filter(({ id }) => ['02', '05', '08'].includes(id));

export default function ProcessSection() {
  return (
    <section className="section process-section" aria-labelledby="process-title">
      <div className="process-heading">
        <p className="eyebrow"><Scissors size={15} /> 02 / Рабочий ритм</p>
        <h2 id="process-title">В кресле<br /><em>по делу.</em></h2>
        <p>Точная форма, внимание к деталям и финальный штрих.</p>
      </div>

      <div className="process-stage">
        {processFrames.map((frame, index) => (
          <motion.figure key={frame.id} className={`process-frame process-frame-${index + 1}`} initial={{ opacity: 0, y: 32 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.2 }} transition={{ duration: 0.55, delay: index * 0.1 }}>
            <img src={frame.src} alt={frame.alt} loading="lazy" />
            <figcaption><span>0{index + 1}</span>{frame.caption}</figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
