import { Menu, MessageCircle, Phone, Scissors, X } from 'lucide-react';
import { MotionConfig } from 'motion/react';
import { useEffect, useState } from 'react';
import HeroSection from './components/HeroSection';
import BarbersTeam from './components/BarbersTeam';
import ProcessSection from './components/ProcessSection';
import PriceSection from './components/PriceSection';
import GallerySection from './components/GallerySection';
import ReviewsSection from './components/ReviewsSection';
import GiftSection from './components/GiftSection';
import FaqSection from './components/FaqSection';
import Footer from './components/Footer';
import { CONTACTS } from './constants';

const navigation = [
  { href: '#masters', label: 'Мастера' },
  { href: '#prices', label: 'Цены' },
  { href: '#gallery', label: 'Барбершоп' },
  { href: '#contacts', label: 'Контакты' },
];

const marqueeWords = ['ФЕЙД', 'БОРОДА', 'КАМУФЛЯЖ СЕДИНЫ', 'КОРОЛЕВСКОЕ БРИТЬЁ', 'ДЕТСКАЯ СТРИЖКА', 'ОТЕЦ И СЫН'];
const marqueeLine = marqueeWords.map((word) => `${word} · `).join('');

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  // Браузер ищет якорь раньше, чем React отрисовал разделы. Прокручиваем сами.
  // Отступ под шапкой даёт scroll-padding-top в index.css.
  useEffect(() => {
    if (location.hash.length > 1) {
      document.querySelector(location.hash)?.scrollIntoView({ behavior: 'instant' });
    }
  }, []);

  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen overflow-x-hidden bg-[#0d0d0e] text-white selection:bg-orange-500 selection:text-black">
      <header className="site-header">
        <a href="#top" className="brand-mark" aria-label="Хорошист - на главную">
          <span className="brand-icon"><Scissors size={17} strokeWidth={2.4} /></span>
          <span>ХОРОШИСТ</span>
        </a>

        <nav className="desktop-nav" aria-label="Основная навигация">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>

        <a className="header-phone" href={CONTACTS.phoneHref}>{CONTACTS.phone}</a>
        <button className="menu-button" type="button" onClick={() => setIsMenuOpen((open) => !open)} aria-expanded={isMenuOpen} aria-label="Открыть меню">
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {isMenuOpen && (
          <nav className="mobile-nav" aria-label="Мобильная навигация">
            {navigation.map((item) => <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>)}
            <a href={CONTACTS.phoneHref} onClick={closeMenu}>Позвонить</a>
          </nav>
        )}
      </header>

      <main id="top">
        <HeroSection />

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            <span>{marqueeLine}</span>
            <span>{marqueeLine}</span>
          </div>
        </div>

        <BarbersTeam />
        <ProcessSection />
        <PriceSection />
        <GallerySection />
        <ReviewsSection />
        <GiftSection />
        <FaqSection />
      </main>
      <Footer />

      <div className="mobile-cta-bar">
        <a href={CONTACTS.phoneHref}><Phone size={16} /> Позвонить</a>
        <a href={CONTACTS.whatsapp} target="_blank" rel="noreferrer"><MessageCircle size={16} /> WhatsApp</a>
      </div>
      </div>
    </MotionConfig>
  );
}
