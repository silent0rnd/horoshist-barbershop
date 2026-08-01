import { ArrowUpRight, Scissors } from 'lucide-react';
import { motion } from 'motion/react';
import { CONTACTS, PRODUCTS } from '../constants';

const nominals = ['2 000 ₽', '3 000 ₽', '5 000 ₽'];

export default function GiftSection() {
  return (
    <section id="shop" className="section gift-section" aria-labelledby="gift-title">
      <div className="section-heading">
        <p className="eyebrow"><Scissors size={15} /> 06 / Сертификат и уход</p>
        <h2 id="gift-title">Забрать<br /><em>с собой.</em></h2>
        <p>Подарок, который точно подойдёт по размеру.</p>
      </div>

      <div className="gift-layout">
        <motion.div
          className="gift-card-block"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55 }}
        >
          {/* Сертификат нарисован стилями, а не фото: под брутализм так честнее и не грузит лишний PNG. */}
          <div className="gift-card" aria-hidden="true">
            <span className="gift-card-brand">ХОРОШИСТ</span>
            <span className="gift-card-title">Подарочный<br />сертификат</span>
            <span className="gift-card-foot">БАРБЕРШОП / РОСТОВ-НА-ДОНУ</span>
          </div>
          <div className="gift-card-body">
            <h3>Сертификат на любую сумму</h3>
            <p>Действует год, номинал не сгорает. Отдаём на плотном картоне или присылаем в мессенджер за пять минут.</p>
            <ul className="gift-nominals">
              {nominals.map((nominal) => <li key={nominal}>{nominal}</li>)}
            </ul>
            <a className="gift-cta" href={CONTACTS.whatsapp} target="_blank" rel="noreferrer">
              Заказать сертификат <ArrowUpRight size={17} />
            </a>
          </div>
        </motion.div>

        <motion.div
          className="products-block"
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.55, delay: 0.1 }}
        >
          <h3>Чем мы укладываем</h3>
          <p>Те же средства, что стоят у кресла. Мастер покажет, сколько брать и как наносить.</p>
          <ul className="products-list">
            {PRODUCTS.map((product, index) => (
              <li key={product.name}>
                <span className="product-index">0{index + 1}</span>
                <span className="product-name">{product.name}<small>{product.note}</small></span>
                <span className="product-price">{product.price}</span>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
