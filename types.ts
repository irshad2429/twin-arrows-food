export interface Review {
  author: string;
  rating: number;
  text: string;
  date?: string;
  details?: string;
  userAvatar?: string;
}

export interface MenuItem {
  name: string;
  description?: string;
  price?: string;
  isPopular?: boolean;
  image: string;
}

export interface ThemeColors {
  primary: string; // Tailwind class like 'bg-red-600'
  primaryText: string; // 'text-red-600'
  background: string; // 'bg-slate-50'
  cardBg: string; // 'bg-white'
  textMain: string; // 'text-gray-900'
  textSecondary: string; // 'text-gray-600'
  buttonText: string;
  borderColor: string; // 'border-gray-200' or 'border-white/10'
  actionHover: string; // Tailwind hover class e.g., 'hover:bg-red-50'
}

export interface RestaurantData {
  id: 'lazyPanda' | 'grillEmpire' | 'fruitzilla';
  name: string;
  tagline: string;
  rating: number;
  reviewCount: number;
  priceRange: string;
  type: string;
  address: string;
  phone?: string;
  hours: string;
  isOpen: boolean; // Logic to check time could be added, static for now
  updatedAt: string;
  description: string;
  ownerMessage?: {
    date: string;
    text: string;
  };
  features: string[];
  reviews: Review[];
  theme: ThemeColors;
  images: {
    hero: string;
    gallery: string[];
  };
}