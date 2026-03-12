// Mock data for projects

// Helper: Vite's BASE_URL is '/' in dev and '/antigravity_port/' in production
const base = import.meta.env.BASE_URL;

// Dynamically import all images from gallery folders at build time
// Using { as: 'url' } gives us the correct resolved public URL at build time
const stockGalleryContext = import.meta.glob(
  '/public/images/projects/3x3_stock/3x3_stock_gallery/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, query: '?url', import: 'default' }
);
const stockGalleryImages = Object.values(stockGalleryContext);

const voidGalleryContext = import.meta.glob(
  '/public/images/projects/void2025/void2025_gallery/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, query: '?url', import: 'default' }
);
const voidGalleryImages = Object.values(voidGalleryContext);

const blumenballGalleryContext = import.meta.glob(
  '/public/images/projects/blumenball2026/blumenball2026_gallery/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, query: '?url', import: 'default' }
);
const blumenballGalleryImages = Object.values(blumenballGalleryContext);

export const projects = [
  {
    id: '3x3-austria-tour',
    title: '3x3 Austria Tour \u2014 Stockerau 2025',
    description: 'Complete coverage of the 3x3 Austria Tour finals in Stockerau. Fast-paced action shots and emotional player portraits.',
    tags: ['Sports', 'Events'],
    location: 'Lower Austria',
    coverImage: `${base}images/projects/3x3_stock/3x3_stock_gallery/P1224852-Enhanced-NR.jpg`,
    logoImage: `${base}images/projects/3x3_stock/logo/3x3_logo.png`,
    gallery: stockGalleryImages
  },
  {
    id: 'void-festival',
    title: 'VOID Festival 2025',
    description: 'Immersive visual coverage of the VOID Festival. Capturing the energy, light shows, and the massive crowd.',
    tags: ['Festivals', 'Events'],
    location: 'Austria',
    coverImage: `${base}images/projects/void2025/void2025_gallery/P1280259.jpg`,
    logoImage: `${base}images/projects/void2025/logo/void_logo.png`,
    gallery: voidGalleryImages
  },
  {
    id: 'blumenball',
    title: 'Blumenball Tulln 2026',
    description: 'Elegant event photography capturing the prestigious Blumenball in Tulln. A mix of portrait and atmosphere shots.',
    tags: ['Events'],
    location: 'Lower Austria',
    coverImage: `${base}images/projects/blumenball2026/blumenball2026_gallery/P1330548.jpg`,
    logoImage: `${base}images/projects/blumenball2026/logo/blumenball_logo.png`,
    gallery: blumenballGalleryImages
  },
  {
    id: 'vienna-marathon',
    title: 'Vienna City Marathon 2025',
    description: 'Energy on the streets of Vienna during the annual marathon.',
    tags: ['Sports'],
    location: 'Vienna',
    coverImage: 'https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070&auto=format&fit=crop',
    gallery: []
  },
  {
    id: 'summer-wedding',
    title: 'Anna & Marco Wedding',
    description: 'Intimate moments and grand celebrations captured during a beautiful summer wedding in Vienna.',
    tags: ['Wedding', 'Events'],
    location: 'Vienna',
    coverImage: 'https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070&auto=format&fit=crop',
    gallery: []
  }
];

export const services = [
  { id: 'sports', title: 'Sports Photography', image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?q=80&w=2070&auto=format&fit=crop' },
  { id: 'events', title: 'Event Photography', image: 'https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=2162&auto=format&fit=crop' },
  { id: 'festivals', title: 'Festival Coverage', image: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?q=80&w=1974&auto=format&fit=crop' },
  { id: 'brand', title: 'Brand Content', image: 'https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2053&auto=format&fit=crop' },
  { id: 'wedding', title: 'Wedding Photography', image: 'https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=2069&auto=format&fit=crop' },
  { id: 'video', title: 'Videography', image: 'https://images.unsplash.com/photo-1589882260714-2cde2f26038a?q=80&w=2070&auto=format&fit=crop' }
];
export const portraitImage = `${base}images/robin_1mb.jpg`;
