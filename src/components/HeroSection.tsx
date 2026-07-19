import { ChevronDown, MapPin, Scissors } from 'lucide-react';
import { motion } from 'motion/react';

const features = ['МУЖСКОЙ СТИЛЬ', 'РОСТОВ-НА-ДОНУ', 'СУВОРОВА 52А', 'С 10:00 ДО 22:00'];

export default function HeroSection() {
  return (
    <section className="hero" aria-labelledby="hero-title">
      <div className="hero-image" aria-hidden="true" />
      <div className="hero-ember hero-ember-left" aria-hidden="true" />
      <div className="hero-ember hero-ember-right" aria-hidden="true" />
      <div className="hero-stripe hero-stripe-top" aria-hidden="true" />
      <div className="hero-stripe hero-stripe-bottom" aria-hidden="true" />

      <div className="hero-content">
        <motion.div initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65 }} className="hero-kicker">
          <span className="hero-kicker-line" /> ВЫКОВАНО В РОСТОВЕ <span className="hero-kicker-line" />
        </motion.div>
        <motion.h1 id="hero-title" initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1, type: 'spring', stiffness: 90 }}>
          ХОРОШИСТ
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.22 }} className="hero-subtitle">
          БАРБЕРШОП РОСТОВ
        </motion.p>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.7, delay: 0.35 }} className="hero-tagline">
          Сталь и пламя. Кузница мужского стиля.
        </motion.p>

        <motion.div initial={{ opacity: 0, scale: 0.94 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.55, delay: 0.48 }} className="hero-actions">
          <button type="button" className="booking-placeholder" disabled title="Онлайн-запись скоро откроется">
            <Scissors size={18} /> Онлайн-запись скоро откроется
          </button>
          <a href="#contacts" className="hero-location"><MapPin size={17} /> Как нас найти</a>
        </motion.div>

        <div className="hero-features" aria-label="Информация о барбершопе">
          {features.map((feature, index) => (
            <motion.div key={feature} initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.45, delay: 0.62 + index * 0.09 }}>
              <span>0{index + 1}</span>{feature}
            </motion.div>
          ))}
        </div>
      </div>

      <a className="scroll-cue" href="#masters"><span>ЛИСТАЙТЕ ВНИЗ</span><ChevronDown size={17} /></a>
    </section>
  );
}
