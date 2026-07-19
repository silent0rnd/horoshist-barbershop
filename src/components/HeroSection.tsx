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
        <motion.h1
          id="hero-title"
          initial={{ opacity: 0, y: 110, scale: 0.78, rotate: -2, filter: 'blur(14px)' }}
          animate={{
            opacity: 1,
            y: [110, -30, 17, -8, 0],
            scale: [0.78, 1.08, 0.96, 1.02, 1],
            rotate: [-2, 0.8, -0.35, 0.15, 0],
            filter: ['blur(14px)', 'blur(0px)'],
          }}
          transition={{ duration: 1.3, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
        >
          ХОРОШИСТ
        </motion.h1>
        <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7, delay: 0.22 }} className="hero-subtitle">
          БАРБЕРШОП РОСТОВ
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
