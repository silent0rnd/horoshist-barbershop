import alexander from './assets/images/masters/alexander.png';
import artem from './assets/images/masters/artem.png';
import ilya from './assets/images/masters/ilya.png';
import photo01 from './assets/images/gallery/barbershop-01.png';
import photo02 from './assets/images/gallery/barbershop-02.png';
import photo03 from './assets/images/gallery/barbershop-03.png';
import photo04 from './assets/images/gallery/barbershop-04.png';
import photo05 from './assets/images/gallery/barbershop-05.png';
import photo06 from './assets/images/gallery/barbershop-06.png';
import photo08 from './assets/images/gallery/barbershop-08.png';
import photo09 from './assets/images/gallery/barbershop-09.png';
import type { Barber, GalleryItem } from './types';

export const BARBERS: Barber[] = [
  { id: 'alexander', name: 'Александр', role: 'Топ-барбер / Бренд-мастер', experience: '8 лет опыта', avatar: alexander },
  { id: 'artem', name: 'Артём', role: 'Старший мастер', experience: '5 лет опыта', avatar: artem },
  { id: 'ilya', name: 'Илья', role: 'Барбер-про', experience: '3 года опыта', avatar: ilya },
];

export const GALLERY: GalleryItem[] = [
  { id: '01', src: photo01, alt: 'Мастер сушит волосы клиенту', caption: 'Рабочий ритм', size: 'portrait' },
  { id: '02', src: photo02, alt: 'Барбер укладывает волосы клиенту', caption: 'Точная форма', size: 'wide' },
  { id: '03', src: photo03, alt: 'Барберская зона с мастером и гостями', caption: 'Внутри барбершопа', size: 'wide' },
  { id: '04', src: photo04, alt: 'Мастер работает с укладкой клиента', caption: 'Внимание к деталям', size: 'portrait' },
  { id: '05', src: photo05, alt: 'Сушка волос феном', caption: 'Финальный штрих', size: 'portrait' },
  { id: '06', src: photo06, alt: 'Мастер оформляет стрижку клиента', caption: 'Чистые линии', size: 'portrait' },
  { id: '08', src: photo08, alt: 'Барбер у зеркала', caption: 'Атмосфера зала', size: 'portrait' },
  { id: '09', src: photo09, alt: 'Мастер работает у зеркала', caption: 'Процесс', size: 'square' },
];

export const CONTACTS = {
  address: 'Ростов-на-Дону, ул. Суворова, 52а',
  phone: '+7 (863) 299-42-42',
  phoneHref: 'tel:+78632994242',
};
