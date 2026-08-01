import { Phone, Scissors } from 'lucide-react';
import { motion } from 'motion/react';
import { CONTACTS, GALLERY, SERVICES } from '../constants';

// ponytail: слот под собственное фото прайса, пока переиспользуем кадр из галереи
const priceShot = GALLERY.find(({ id }) => id === '06') ?? GALLERY[0];

export default function PriceSection() {
  return (
    <section id="prices" className="section price-section" aria-labelledby="prices-title">
      <div className="section-heading">
        <p className="eyebrow"><Scissors size={15} /> 03 / Прайс</p>
        <h2 id="prices-title">Сколько<br /><em>стоит.</em></h2>
        <p>Без скрытых доплат за мытьё, укладку и «сложные волосы».</p>
      </div>

      <div className="price-layout">
        <motion.figure
          className="price-shot"
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          <img src={priceShot.src} alt={priceShot.alt} loading="lazy" />
          <figcaption>Цена включает мытьё, укладку и совет по уходу</figcaption>
        </motion.figure>

        <div className="price-lists">
          {SERVICES.map((group, groupIndex) => (
            <motion.div
              key={group.id}
              className="price-group"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.5, delay: groupIndex * 0.1 }}
            >
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item.name} className="price-row">
                    <span className="price-name">{item.name}</span>
                    <span className="price-leader" aria-hidden="true" />
                    <span className="price-duration">{item.duration}</span>
                    <span className="price-value">{item.price}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}

          <a className="price-cta" href={CONTACTS.phoneHref}>
            <Phone size={17} /> Записаться на {CONTACTS.phone}
          </a>
        </div>
      </div>
    </section>
  );
}
