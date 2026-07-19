import { Menu, Scissors, X } from 'lucide-react';
import { useState } from 'react';
import HeroSection from './components/HeroSection';
import BarbersTeam from './components/BarbersTeam';
import GallerySection from './components/GallerySection';
import Footer from './components/Footer';

const navigation = [
  { href: '#masters', label: 'Мастера' },
  { href: '#gallery', label: 'Барбершоп' },
  { href: '#contacts', label: 'Контакты' },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#0d0d0e] text-white selection:bg-orange-500 selection:text-black">
      <header className="site-header">
        <a href="#top" className="brand-mark" aria-label="Хорошист - на главную">
          <span className="brand-icon"><Scissors size={17} strokeWidth={2.4} /></span>
          <span>ХОРОШИСТ</span>
        </a>

        <nav className="desktop-nav" aria-label="Основная навигация">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>

        <a className="header-phone" href="tel:+78632994242">+7 (863) 299-42-42</a>
        <button className="menu-button" type="button" onClick={() => setIsMenuOpen((open) => !open)} aria-expanded={isMenuOpen} aria-label="Открыть меню">
          {isMenuOpen ? <X /> : <Menu />}
        </button>

        {isMenuOpen && (
          <nav className="mobile-nav" aria-label="Мобильная навигация">
            {navigation.map((item) => <a key={item.href} href={item.href} onClick={closeMenu}>{item.label}</a>)}
            <a href="tel:+78632994242" onClick={closeMenu}>Позвонить</a>
          </nav>
        )}
      </header>

      <main id="top">
        <HeroSection />
        <BarbersTeam />
        <GallerySection />
      </main>
      <Footer />
    </div>
  );
}
