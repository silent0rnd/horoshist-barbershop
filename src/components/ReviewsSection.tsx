import { Scissors, Star } from 'lucide-react';
import { motion } from 'motion/react';
import { REVIEWS, STATS } from '../constants';

export default function ReviewsSection() {
  return (
    <section id="reviews" className="section reviews-section" aria-labelledby="reviews-title">
      <div className="stats-strip">
        {STATS.map((stat, index) => (
          <motion.div
            key={stat.label}
            className="stat-cell"
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <strong>{stat.value}</strong>
            <span>{stat.label}</span>
          </motion.div>
        ))}
      </div>

      <div className="section-heading">
        <p className="eyebrow"><Scissors size={15} /> 05 / Отзывы</p>
        <h2 id="reviews-title">Что говорят<br /><em>после кресла.</em></h2>
        <p>Собрано с&nbsp;карт - мы&nbsp;их&nbsp;не&nbsp;редактируем и&nbsp;не&nbsp;заказываем.</p>
      </div>

      <div className="reviews-rail">
        {REVIEWS.map((review, index) => (
          <motion.blockquote
            key={review.author}
            className="review"
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.15 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <span className="review-quote" aria-hidden="true">&laquo;</span>
            <p>{review.text}</p>
            <footer>
              <span className="review-stars" aria-label="Оценка 5 из 5">
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} size={13} fill="currentColor" strokeWidth={0} aria-hidden="true" />
                ))}
              </span>
              <cite>{review.author}</cite>
              <span className="review-source">{review.source}</span>
            </footer>
          </motion.blockquote>
        ))}
      </div>
    </section>
  );
}
