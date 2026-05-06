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

const zFitnessGalleryContext = import.meta.glob(
  '/public/images/projects/z_fitness/z_fitness_gallery/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, query: '?url', import: 'default' }
);
const zFitnessGalleryImages = Object.values(zFitnessGalleryContext);

const skischulaGalleryContext = import.meta.glob(
  '/public/images/projects/skischule_exklusiv1/shooting/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, query: '?url', import: 'default' }
);
const skischulaGalleryImages = Object.values(skischulaGalleryContext);

const sitzenbergGalleryContext = import.meta.glob(
  '/public/images/projects/sitzenberg_ball2025/sitzenberg_ball2025_gallery/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, query: '?url', import: 'default' }
);
const sitzenbergGalleryImages = Object.values(sitzenbergGalleryContext);

const weddingGalleryContext = import.meta.glob(
  '/public/images/projects/hochzeit_erwin_resi_2021/gallery/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, query: '?url', import: 'default' }
);
const weddingGalleryImages = Object.values(weddingGalleryContext);

const gfoehlGalleryContext = import.meta.glob(
  '/public/images/projects/volleyball_gfoehl/volleyball_gfoehl_gallery/*.{jpg,jpeg,png,webp,JPG,JPEG,PNG,WEBP}',
  { eager: true, query: '?url', import: 'default' }
);
const gfoehlGalleryImages = Object.values(gfoehlGalleryContext);

export const projects = [
  {
    id: 'uv-gfoehl',
    title: 'Union Volleyball Gf\u00f6hl',
    description: 'Dynamic sports photography for Union Volleyball Gf\u00f6hl. Capturing the intensity and teamwork on the court.',
    tags: ['Sports', 'Events'],
    location: 'Gf\u00f6hl - Austria',
    coverImage: `${base}images/projects/volleyball_gfoehl/volleyball_gfoehl_gallery/260420_gfoehl-1380235_COVER.jpg`,
    logoImage: `${base}images/projects/volleyball_gfoehl/logo/uv_gfoehl.png`,
    gallery: gfoehlGalleryImages
  },
  {
    id: '3x3-austria-tour',
    title: '3x3 Austria Tour \u2014 Stockerau 2025',
    description: 'Complete coverage of the 3x3 Austria Tour finals in Stockerau. Fast-paced action shots and emotional player portraits.',
    tags: ['Sports', 'Events'],
    location: 'Stockerau - Lower Austria',
    coverImage: `${base}images/projects/3x3_stock/3x3_stock_gallery/P1224852-Enhanced-NR.jpg`,
    logoImage: `${base}images/projects/3x3_stock/logo/3x3_logo.png`,
    gallery: stockGalleryImages
  },
  {
    id: 'void-festival',
    title: 'VOID Festival 2025',
    description: 'Immersive visual coverage of the VOID Festival. Capturing the energy, light shows, and the massive crowd.',
    tags: ['Festivals', 'Events'],
    location: 'Vienna - Austria',
    coverImage: `${base}images/projects/void2025/void2025_gallery/P1280259.jpg`,
    logoImage: `${base}images/projects/void2025/logo/void_logo.png`,
    gallery: voidGalleryImages
  },
  {
    id: 'blumenball',
    title: 'Blumenball Tulln 2026',
    description: 'Elegant event photography capturing the prestigious Blumenball in Tulln. A mix of portrait and atmosphere shots.',
    tags: ['Events'],
    location: 'Tulln - Lower Austria',
    coverImage: `${base}images/projects/blumenball2026/blumenball2026_gallery/P1330548.jpg`,
    logoImage: `${base}images/projects/blumenball2026/logo/blumenball_logo.png`,
    gallery: blumenballGalleryImages
  },
  {
    id: 'z-fitness',
    title: 'Z Fitness',
    description: 'Commercial and sports photography for Z Fitness. Dynamic training shots and vibrant brand visuals.',
    tags: ['Sports', 'Commercial'],
    location: 'Zwentendorf - Austria',
    coverImage: `${base}images/projects/z_fitness/z_fitness_gallery/P1329349.jpg`,
    logoImage: `${base}images/projects/z_fitness/logo/z-fitness.png`,
    gallery: zFitnessGalleryImages
  },
  {
    id: 'skischule-exklusiv',
    title: 'Skischule Exklusiv',
    description: 'High-altitude commercial photography for Skischule Exklusiv. Capturing the thrill of alpine skiing and mountain landscapes.',
    tags: ['Sports', 'Commercial'],
    location: 'Filzmoos - Austria',
    coverImage: `${base}images/projects/skischule_exklusiv1/shooting/260205_piste-1355165.jpg`,
    logoImage: `${base}images/projects/skischule_exklusiv1/logo/exklusiv_logo.png`,
    gallery: skischulaGalleryImages
  },
  {
    id: 'sitzenberg-ball',
    title: 'Sitzenberg Ball 2025',
    description: 'Elegant event photography from the Sitzenberg Ball. Portraits, atmosphere and the magic of a grand evening.',
    tags: ['Events'],
    location: 'Sitzenberg - Lower Austria',
    coverImage: `${base}images/projects/sitzenberg_ball2025/sitzenberg_ball2025_gallery/P1317491.jpg`,
    logoImage: `${base}images/projects/sitzenberg_ball2025/logo/sitzenberg_ball_logo.png`,
    gallery: sitzenbergGalleryImages
  },
  {
    id: 'hochzeit-erwin-resi',
    title: 'Hochzeit Erwin und Resi',
    description: 'Beautiful wedding photography capturing the special moments of Erwin and Resi. A cinematic and emotional documentation of their big day.',
    tags: ['Wedding', 'Events'],
    location: 'Austria',
    coverImage: `${base}images/projects/hochzeit_erwin_resi_2021/gallery/hochzeit_koestelbauer_P1036863_18-58_COVER.jpg`,
    logoImage: `${base}images/projects/hochzeit_erwin_resi_2021/logo/koestlbauer_logo.png`,
    gallery: weddingGalleryImages
  }
];

export const services = [
  { id: 'sports', title: 'Sports Photography', image: `${base}images/projects/3x3_stock/3x3_stock_gallery/P1181390.jpg` },
  { id: 'events', title: 'Event Photography', image: `${base}images/projects/blumenball2026/blumenball2026_gallery/P1330672.jpg` },
  { id: 'festivals', title: 'Festival Coverage', image: `${base}images/projects/void2025/void2025_gallery/P1280259.jpg` },
  { id: 'brand', title: 'Brand Content', image: `${base}images/projects/z_fitness/z_fitness_gallery/P1329349.jpg` },
  { id: 'wedding', title: 'Wedding Photography', image: `${base}images/projects/hochzeit_erwin_resi_2021/gallery/hochzeit_koestelbauer_P1036863_18-58_COVER.jpg` },
  { id: 'video', title: 'Videography', image: `${base}images/projects/sitzenberg_ball2025/sitzenberg_ball2025_gallery/P1317491.jpg` }
];
export const portraitImage = `${base}images/robin_1mb.jpg`;
