import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';
import { useEffect, useState } from 'react';
import { GALLERY } from '../constants';

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const active = activeIndex === null ? null : GALLERY[activeIndex];

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (activeIndex === null) return;
      if (event.key === 'Escape') setActiveIndex(null);
      if (event.key === 'ArrowRight') setActiveIndex((index) => index === null ? null : (index + 1) % GALLERY.length);
      if (event.key === 'ArrowLeft') setActiveIndex((index) => index === null ? null : (index - 1 + GALLERY.length) % GALLERY.length);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [activeIndex]);

  const previous = () => setActiveIndex((index) => index === null ? null : (index - 1 + GALLERY.length) % GALLERY.length);
  const next = () => setActiveIndex((index) => index === null ? null : (index + 1) % GALLERY.length);

  return (
    <section id="gallery" className="section gallery-section" aria-labelledby="gallery-title">
      <div className="gallery-topline"><span>02 / ПРОСТРАНСТВО</span><span>НАСТОЯЩИЕ КАДРЫ</span></div>
      <div className="gallery-heading">
        <div><p className="eyebrow">Наш барбершоп</p><h2 id="gallery-title">Внутри<br /><em>Хорошиста</em></h2></div>
        <p>Без постановки. Только настоящий рабочий ритм, разговоры у зеркала и моменты, из которых складывается атмосфера.</p>
      </div>

      <div className="gallery-grid">
        {GALLERY.map((item, index) => (
          <motion.button key={item.id} type="button" className={`gallery-tile gallery-${item.size}`} onClick={() => setActiveIndex(index)} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.12 }} transition={{ duration: 0.55, delay: (index % 4) * 0.07 }} aria-label={`Открыть фото: ${item.caption}`}>
            <img src={item.src} alt={item.alt} loading="lazy" />
            <span className="gallery-shade" aria-hidden="true" />
            <span className="gallery-index">/{String(index + 1).padStart(2, '0')}</span>
            <span className="gallery-caption"><i>Смотреть фото</i>{item.caption}</span>
          </motion.button>
        ))}
      </div>

      <AnimatePresence>
        {active && activeIndex !== null && (
          <motion.div className="lightbox" role="dialog" aria-modal="true" aria-label={`Фото ${activeIndex + 1} из ${GALLERY.length}`} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setActiveIndex(null)}>
            <button className="lightbox-close" type="button" onClick={() => setActiveIndex(null)} aria-label="Закрыть фото"><X /></button>
            <button className="lightbox-arrow lightbox-prev" type="button" onClick={(event) => { event.stopPropagation(); previous(); }} aria-label="Предыдущее фото"><ChevronLeft /></button>
            <motion.figure initial={{ scale: 0.95, y: 16 }} animate={{ scale: 1, y: 0 }} exit={{ scale: 0.96 }} onClick={(event) => event.stopPropagation()}>
              <img src={active.src} alt={active.alt} />
              <figcaption><span>{String(activeIndex + 1).padStart(2, '0')} / {String(GALLERY.length).padStart(2, '0')}</span>{active.caption}</figcaption>
            </motion.figure>
            <button className="lightbox-arrow lightbox-next" type="button" onClick={(event) => { event.stopPropagation(); next(); }} aria-label="Следующее фото"><ChevronRight /></button>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
