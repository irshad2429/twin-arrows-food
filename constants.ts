import { RestaurantData } from './types';

export const LAZY_PANDA_DATA: RestaurantData = {
  id: 'lazyPanda',
  name: 'Lazy Panda',
  tagline: 'Indo-Chinese Street Feast',
  rating: 4.9,
  reviewCount: 65,
  priceRange: '₹200–400',
  type: 'Chinese takeaway',
  address: 'Shop 7, Karaimarina foodstreet, near beach, Karaikal, Puducherry 609602',
  phone: '075022 80580',
  hours: 'Opens 4:00 PM',
  isOpen: false, // Based on input "Closed - Opens 4pm"
  updatedAt: 'Updated 4 weeks ago',
  description: 'Experience the unique taste of Chinese and Indo-Chinese cuisine right by the beach. Located in the ship-shaped food court, we offer a memorable dining experience with a view.',
  ownerMessage: {
    date: 'Sep 29, 2025',
    text: 'We are excited to announce the grand opening of Lazy Panda (Chinese & Indo-Chinese) on Sunday, Oct 12th at the ship-shaped food court, Beach Road, Karaikal. Join us for delicious food, exclusive offers, and an unforgettable dining experience with a beach view.'
  },
  features: ['Dine-in', 'Drive-through', 'Delivery', 'Beach View', 'Ship-shaped Court'],
  reviews: [
    { 
      author: 'Happy Customer', 
      rating: 5, 
      text: 'The honey chicken was finger licking gooooodddd',
      userAvatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80'
    },
    { 
      author: 'Local Guide', 
      rating: 5, 
      text: 'Very Nice Place & Special unique dishes so tasty yummy 😋😋😋',
      userAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80'
    },
    { 
      author: 'Reviewer', 
      rating: 5, 
      text: 'Good food Good service Good atmosphere',
      userAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80'
    },
  ],
  theme: {
    primary: 'bg-red-600',
    primaryText: 'text-red-500',
    background: 'bg-neutral-950',
    cardBg: 'bg-neutral-900',
    textMain: 'text-white',
    textSecondary: 'text-neutral-400',
    buttonText: 'text-white',
    borderColor: 'border-white/10',
    actionHover: 'hover:bg-red-500/10'
  },
  images: {
    hero: 'https://images.unsplash.com/photo-1617622141675-d227d6d04a05?auto=format&fit=crop&w=1200&q=80', // Indo-Chinese Chilli Chicken/Manchurian style
    gallery: [
      'https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80', // Dim Sum
      'https://images.unsplash.com/photo-1603133872878-684f10842740?auto=format&fit=crop&w=800&q=80', // Fried Rice
      'https://images.unsplash.com/photo-1544681280-d2dc0c1a6e3e?auto=format&fit=crop&w=800&q=80', // Spring Rolls
      'https://images.unsplash.com/photo-1582878826629-29b7ad1cdc43?auto=format&fit=crop&w=800&q=80', // Elegant Plated Noodles
      'https://images.unsplash.com/photo-1525755662778-989d0524087e?auto=format&fit=crop&w=800&q=80' // Kung Pao
    ]
  }
};

export const GRILL_EMPIRE_DATA: RestaurantData = {
  id: 'grillEmpire',
  name: 'Grill Empire',
  tagline: 'The Royal Taste of Street Food',
  rating: 5.0,
  reviewCount: 4,
  priceRange: '₹200–400',
  type: 'Shawarma restaurant',
  address: 'Shop 7, Karaimarina Foodstreet, Beach Rd, Karaikal, Puducherry 609602',
  hours: 'Opens 6:00 PM',
  isOpen: false,
  updatedAt: 'Updated 9 weeks ago',
  description: 'Succulent, flame-grilled shawarmas and authentic flavors. A bold taste experience located in the heart of the Karaimarina Foodstreet.',
  features: ['Dine-in', 'Takeaway', 'Delivery', 'LGBTQ+ friendly'],
  reviews: [
    { 
      author: 'Santhosh Appu', 
      rating: 5, 
      text: 'Must try - Shawarma - worth the money!', 
      date: '2 months ago', 
      details: 'Dine in',
      userAvatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80'
    },
    { 
      author: 'RIGHT CHOICE', 
      rating: 5, 
      text: 'Very good food and tasty..', 
      date: '2 months ago', 
      details: 'Price per person ₹200–400',
      userAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&w=150&q=80'
    },
  ],
  theme: {
    primary: 'bg-orange-500',
    primaryText: 'text-orange-400',
    background: 'bg-slate-950',
    cardBg: 'bg-slate-900',
    textMain: 'text-white',
    textSecondary: 'text-slate-400',
    buttonText: 'text-white',
    borderColor: 'border-white/10',
    actionHover: 'hover:bg-orange-500/10'
  },
  images: {
    hero: 'https://images.unsplash.com/photo-1561651823-34feb02250e4?auto=format&fit=crop&w=1200&q=80', // Shawarma
    gallery: [
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80', // BBQ/Grill
      'https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80', // Meat Skewer
      'https://images.unsplash.com/photo-1619860860774-1e2e17343432?auto=format&fit=crop&w=800&q=80', // Shawarma Roll
      'https://images.unsplash.com/photo-1577906096429-f736f9f3b969?auto=format&fit=crop&w=800&q=80', // Hummus Spread
      'https://images.unsplash.com/photo-1520072959219-c595dc3f3a1f?auto=format&fit=crop&w=800&q=80' // Steak/Grill
    ]
  }
};

export const FRUITZILLA_DATA: RestaurantData = {
  id: 'fruitzilla',
  name: 'Fruitzilla',
  tagline: 'Tasty & Refreshing Juices',
  rating: 4.8,
  reviewCount: 32,
  priceRange: '₹100–300',
  type: 'Juice Bar',
  address: 'Shop 7, Karaimarina Foodstreet, Beach Rd, Karaikal, Puducherry 609602',
  hours: 'Opens 10:00 AM',
  isOpen: true,
  updatedAt: 'Updated 1 week ago',
  description: 'Beat the heat with our freshly squeezed juices, smoothies, and exotic fruit bowls. The perfect refreshing companion to your beach visit.',
  features: ['Fresh Juice', 'Smoothies', 'No Added Sugar Options', 'Fruit Bowls'],
  reviews: [
    { 
      author: 'Beach Lover', 
      rating: 5, 
      text: 'The watermelon crush is a lifesaver in this heat!',
      userAvatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&fit=crop&w=150&q=80'
    },
    { 
      author: 'Health Nut', 
      rating: 5, 
      text: 'Love that they have zero sugar options. Very fresh.',
      userAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80'
    },
  ],
  theme: {
    primary: 'bg-emerald-500',
    primaryText: 'text-emerald-400',
    background: 'bg-gray-950',
    cardBg: 'bg-gray-900',
    textMain: 'text-white',
    textSecondary: 'text-gray-400',
    buttonText: 'text-white',
    borderColor: 'border-white/10',
    actionHover: 'hover:bg-emerald-500/10'
  },
  images: {
    hero: 'https://images.unsplash.com/photo-1610970881699-44a5587cabec?auto=format&fit=crop&w=1200&q=80', // Juice Splash
    gallery: [
      'https://images.unsplash.com/photo-1600271886742-f049cd451bba?auto=format&fit=crop&w=800&q=80', // Orange Juice
      'https://images.unsplash.com/photo-1553530666-ba11a90694f3?auto=format&fit=crop&w=800&q=80', // Smoothies
      'https://images.unsplash.com/photo-1490474418585-ba9bad8fd0ea?auto=format&fit=crop&w=800&q=80', // Fruit Bowl
      'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?auto=format&fit=crop&w=800&q=80', // Avocado Toast
      'https://images.unsplash.com/photo-1546173159-315724a31696?auto=format&fit=crop&w=800&q=80' // Fresh Smoothie Glass
    ]
  }
};