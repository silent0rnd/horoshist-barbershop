export interface Barber {
  id: string;
  name: string;
  role: string;
  experience: string;
  avatar: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  size: 'portrait' | 'wide' | 'square';
}

export interface Service {
  name: string;
  price: string;
  duration: string;
}

export interface ServiceGroup {
  id: string;
  title: string;
  items: Service[];
}

export interface Stat {
  value: string;
  label: string;
}

export interface Review {
  text: string;
  author: string;
  source: 'Яндекс' | '2ГИС' | 'Avito';
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface Product {
  name: string;
  note: string;
  price: string;
}
