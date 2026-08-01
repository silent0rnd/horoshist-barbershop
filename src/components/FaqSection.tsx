import { Scissors } from 'lucide-react';
import { FAQ } from '../constants';

export default function FaqSection() {
  return (
    <section id="faq" className="section faq-section" aria-labelledby="faq-title">
      <div className="section-heading">
        <p className="eyebrow"><Scissors size={15} /> 07 / Вопросы</p>
        <h2 id="faq-title">Коротко<br /><em>по делу.</em></h2>
        <p>Если чего-то не нашли - просто позвоните.</p>
      </div>

      {/* Нативные details/summary: доступность с клавиатуры и разметка из коробки, ноль JS. */}
      <div className="faq-list">
        {FAQ.map((item) => (
          <details key={item.q}>
            <summary>{item.q}</summary>
            <p>{item.a}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
