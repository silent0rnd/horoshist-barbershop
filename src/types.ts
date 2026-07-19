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
