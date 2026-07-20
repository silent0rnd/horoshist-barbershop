import { ArrowUpRight, Clock3, MapPin, Phone, Scissors } from 'lucide-react';
import { CONTACTS } from '../constants';

export default function Footer() {
  return (
    <footer id="contacts" className="footer" aria-labelledby="contacts-title">
      <div className="footer-main">
        <div className="footer-brand"><p className="eyebrow"><Scissors size={15} /> Хорошист</p><h2 id="contacts-title">Заходи<br />на <em>форму.</em></h2><p>Мужская парикмахерская в центре Ростова-на-Дону.</p></div>
        <div className="contact-list">
          <a href="https://www.google.com/maps/search/?api=1&query=%D0%A0%D0%BE%D1%81%D1%82%D0%BE%D0%B2-%D0%BD%D0%B0-%D0%94%D0%BE%D0%BD%D1%83%2C%20%D1%83%D0%BB.%20%D0%A1%D1%83%D0%B2%D0%BE%D1%80%D0%BE%D0%B2%D0%B0%2C%2052%D0%B0" target="_blank" rel="noreferrer"><MapPin /><span><small>Адрес</small>{CONTACTS.address}</span><ArrowUpRight /></a>
          <a href={CONTACTS.phoneHref}><Phone /><span><small>Телефон</small>{CONTACTS.phone}</span><ArrowUpRight /></a>
          <div><Clock3 /><span><small>Режим работы</small>Ежедневно, 10:00 - 22:00</span></div>
        </div>
      </div>
      <div className="map-wrap"><iframe title="Карта барбершопа Хорошист" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2709.2891963283287!2d39.7214441!3d47.2230111!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40e3b970634629cb%3A0x8684d092fbbe4c34!2z0YPQuy4g0KHRg9Cy0L7RgNC-0LLQsCwgNTIsINCg0L7RgdGC0L7Qsi3QvdCwLdCU0L7QvdGDLCDQoNC-0YHRgtC-0LLRgdC60LDRjyDQvtCx0LsuLCAzNDQwMDY!5e0!3m2!1sru!2sru!4v1721300000000!5m2!1sru!2sru" /> </div>
      <div className="footer-bottom"><span>© {new Date().getFullYear()} ХОРОШИСТ</span><span>РОСТОВ-НА-ДОНУ / СУВОРОВА 52А</span><a href="#top">НАВЕРХ ↑</a></div>
      <div className="site-author" style={{ padding: '17px 0 19px', borderTop: '1px solid rgba(24,21,19,.38)', color: '#411e10', fontFamily: "'DM Mono', monospace", fontSize: '8px', letterSpacing: '.09em' }}>Сайт разработан <a href="https://naklikay.ru/" target="_blank" rel="noopener" style={{ color: '#21130c', borderBottom: '1px solid rgba(33,19,12,.45)', textDecoration: 'none' }}>Максимом Мирошниковым</a></div>
    </footer>
  );
}
