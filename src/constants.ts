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
import type { Barber, FaqItem, GalleryItem, Product, Review, ServiceGroup, Stat } from './types';

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
  // Заглушки на основе рабочего номера - заменить на реальные аккаунты барбершопа.
  whatsapp: 'https://wa.me/78632994242',
  telegram: 'https://t.me/horoshist_rnd',
};

export const SERVICES: ServiceGroup[] = [
  {
    id: 'hair',
    title: 'Волосы',
    items: [
      { name: 'Мужская стрижка', price: '1 800 ₽', duration: '60 мин' },
      { name: 'Стрижка машинкой', price: '1 200 ₽', duration: '40 мин' },
      { name: 'Фейд / скин-фейд', price: '2 000 ₽', duration: '60 мин' },
      { name: 'Детская стрижка (до 12 лет)', price: '1 300 ₽', duration: '45 мин' },
      { name: 'Камуфляж седины', price: '1 500 ₽', duration: '40 мин' },
    ],
  },
  {
    id: 'beard',
    title: 'Борода',
    items: [
      { name: 'Моделирование бороды', price: '1 200 ₽', duration: '40 мин' },
      { name: 'Королевское бритьё', price: '1 600 ₽', duration: '50 мин' },
      { name: 'Бритьё головы', price: '1 400 ₽', duration: '40 мин' },
    ],
  },
  {
    id: 'combo',
    title: 'Комплекс',
    items: [
      { name: 'Стрижка + борода', price: '2 700 ₽', duration: '90 мин' },
      { name: 'Фейд + королевское бритьё', price: '3 200 ₽', duration: '100 мин' },
      { name: 'Отец + сын', price: '2 800 ₽', duration: '100 мин' },
    ],
  },
];

export const STATS: Stat[] = [
  { value: '8', label: 'лет на Суворова' },
  { value: '3', label: 'мастера в зале' },
  { value: '14K', label: 'стрижек за всё время' },
  { value: '4.9', label: 'рейтинг на картах' },
];

export const REVIEWS: Review[] = [
  {
    text: 'Хожу к Александру второй год. Ни разу не было такого, чтобы вышел и подумал «ну, отрастёт». Форму держит месяц, стрижёт молча, если не хочешь болтать - и это отдельный плюс.',
    author: 'Кирилл',
    source: 'Яндекс',
  },
  {
    text: 'Записался в первый раз за час до закрытия, приняли без вопросов. Артём разобрался с моим вихром на макушке, с которым до этого никто не справлялся. Теперь только сюда.',
    author: 'Дмитрий',
    source: '2ГИС',
  },
  {
    text: 'Нормальный мужской барбершоп без пафоса и без навязывания. Цены честные, кофе наливают, музыка не орёт. Привёл сюда сына - подстригли спокойно, без слёз.',
    author: 'Сергей',
    source: 'Яндекс',
  },
];

export const PRODUCTS: Product[] = [
  { name: 'Глина', note: 'матовая, сильная фиксация', price: '1 400 ₽' },
  { name: 'Паста', note: 'подвижная укладка', price: '1 300 ₽' },
  { name: 'Тоник для бороды', note: 'смягчает и укладывает', price: '1 100 ₽' },
  { name: 'Помада', note: 'глянец, зачёс назад', price: '1 500 ₽' },
];

export const FAQ: FaqItem[] = [
  {
    q: 'Нужно записываться заранее?',
    a: 'Желательно. В будни днём почти всегда есть свободное окно, но вечером и в выходные места разбирают за два-три дня. Позвоните или напишите в мессенджер - подберём время.',
  },
  {
    q: 'Сколько занимает стрижка?',
    a: 'Стрижка машинкой - около 40 минут, полноценная мужская стрижка - час, комплекс со стрижкой и бородой - полтора часа. Мы не ставим клиентов встык, поэтому вас не будут торопить.',
  },
  {
    q: 'Есть где припарковаться?',
    a: 'Да, вдоль Суворова бесплатная парковка, плюс небольшой карман во дворе дома. В час пик проще встать на соседней Соборной.',
  },
  {
    q: 'Стрижёте детей?',
    a: 'Стрижём с 5 лет. Есть отдельный тариф до 12 лет и вариант «отец + сын» - двоих подряд в одном кресле, так ребёнку спокойнее.',
  },
  {
    q: 'Можно оплатить картой?',
    a: 'Да: карта, наличные, перевод по СБП. Чек присылаем на телефон, если нужен.',
  },
  {
    q: 'А если мне не понравится результат?',
    a: 'Скажите об этом сразу в кресле - мастер поправит бесплатно. Если поняли уже дома, приходите в течение двух недель, доработаем без оплаты.',
  },
];
