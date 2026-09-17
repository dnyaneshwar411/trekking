export type Difficulty = 'Beginner' | 'Intermediate' | 'Advanced' | 'Expert';
export type Season = 'Spring' | 'Summer' | 'Autumn' | 'Winter';
export type Region = 'Himalayas' | 'Africa' | 'South America' | 'Europe' | 'North America';

export interface Trek {
  id: string;
  name: string;
  location: string;
  image: string;
  difficulty: Difficulty;
  duration: string;
  altitude: string;
  price: string;
  season: Season[];
  region: Region;
  rating: number;
  reviews: number;
  spots: number;
}

export const treks: Trek[] = [
  {
    id: 'everest-base-camp',
    name: 'Everest Base Camp',
    location: 'Khumbu, Nepal',
    image: 'https://images.pexels.com/photos/39008292/pexels-photo-39008292.jpeg?auto=compress&cs=tinysrgb&w=1200',
    difficulty: 'Advanced',
    duration: '14 Days',
    altitude: '5,364 m',
    price: '$2,890',
    season: ['Spring', 'Autumn'],
    region: 'Himalayas',
    rating: 4.9,
    reviews: 342,
    spots: 6,
  },
  {
    id: 'annapurna-circuit',
    name: 'Annapurna Circuit',
    location: 'Annapurna, Nepal',
    image: 'https://images.pexels.com/photos/19405393/pexels-photo-19405393.jpeg?auto=compress&cs=tinysrgb&w=1200',
    difficulty: 'Intermediate',
    duration: '12 Days',
    altitude: '5,416 m',
    price: '$1,950',
    season: ['Spring', 'Autumn'],
    region: 'Himalayas',
    rating: 4.8,
    reviews: 287,
    spots: 8,
  },
  {
    id: 'kilimanjaro',
    name: 'Mt. Kilimanjaro',
    location: 'Tanzania, Africa',
    image: 'https://images.pexels.com/photos/15994039/pexels-photo-15994039.jpeg?auto=compress&cs=tinysrgb&w=1200',
    difficulty: 'Intermediate',
    duration: '9 Days',
    altitude: '5,895 m',
    price: '$2,450',
    season: ['Summer', 'Autumn', 'Winter'],
    region: 'Africa',
    rating: 4.7,
    reviews: 198,
    spots: 10,
  },
  {
    id: 'ladakh-trail',
    name: 'Ladakh High Trail',
    location: 'Ladakh, India',
    image: 'https://images.pexels.com/photos/6002462/pexels-photo-6002462.jpeg?auto=compress&cs=tinysrgb&w=1200',
    difficulty: 'Advanced',
    duration: '11 Days',
    altitude: '5,600 m',
    price: '$2,180',
    season: ['Summer'],
    region: 'Himalayas',
    rating: 4.8,
    reviews: 156,
    spots: 5,
  },
  {
    id: 'dolomites-alta-via',
    name: 'Dolomites Alta Via',
    location: 'Dolomites, Italy',
    image: 'https://images.pexels.com/photos/28147290/pexels-photo-28147290.jpeg?auto=compress&cs=tinysrgb&w=1200',
    difficulty: 'Intermediate',
    duration: '8 Days',
    altitude: '3,343 m',
    price: '$1,690',
    season: ['Summer', 'Autumn'],
    region: 'Europe',
    rating: 4.6,
    reviews: 134,
    spots: 12,
  },
  {
    id: 'patagonia-circuit',
    name: 'Patagonia W Trek',
    location: 'Torres del Paine, Chile',
    image: 'https://images.pexels.com/photos/14583017/pexels-photo-14583017.jpeg?auto=compress&cs=tinysrgb&w=1200',
    difficulty: 'Beginner',
    duration: '7 Days',
    altitude: '1,200 m',
    price: '$1,890',
    season: ['Summer', 'Autumn'],
    region: 'South America',
    rating: 4.7,
    reviews: 221,
    spots: 9,
  },
  {
    id: 'etna-volcano',
    name: 'Mt. Etna Volcano Trek',
    location: 'Sicily, Italy',
    image: 'https://images.pexels.com/photos/19613588/pexels-photo-19613588.jpeg?auto=compress&cs=tinysrgb&w=1200',
    difficulty: 'Beginner',
    duration: '5 Days',
    altitude: '3,357 m',
    price: '$990',
    season: ['Spring', 'Summer', 'Autumn'],
    region: 'Europe',
    rating: 4.5,
    reviews: 89,
    spots: 14,
  },
  {
    id: 'cucho-mountain',
    name: 'Andes Summit Quest',
    location: 'Cusco, Peru',
    image: 'https://images.pexels.com/photos/14663219/pexels-photo-14663219.jpeg?auto=compress&cs=tinysrgb&w=1200',
    difficulty: 'Expert',
    duration: '16 Days',
    altitude: '6,372 m',
    price: '$3,450',
    season: ['Winter', 'Spring'],
    region: 'South America',
    rating: 4.9,
    reviews: 112,
    spots: 4,
  },
];

export const difficulties: Difficulty[] = ['Beginner', 'Intermediate', 'Advanced', 'Expert'];
export const seasons: Season[] = ['Spring', 'Summer', 'Autumn', 'Winter'];
export const regions: Region[] = ['Himalayas', 'Africa', 'South America', 'Europe', 'North America'];

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  avatar: string;
  rating: number;
  trek: string;
  quote: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 't1',
    name: 'Sarah Mitchell',
    location: 'Denver, USA',
    avatar: 'https://images.pexels.com/photos/3525907/pexels-photo-3525907.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    trek: 'Everest Base Camp',
    quote: 'The IFMGA-certified guides made me feel safe every step of the way. Reaching Base Camp at sunrise was the most profound moment of my life.',
  },
  {
    id: 't2',
    name: 'James Okonkwo',
    location: 'London, UK',
    avatar: 'https://images.pexels.com/photos/22776471/pexels-photo-22776471.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    trek: 'Mt. Kilimanjaro',
    quote: 'From the satellite tracking to the all-inclusive gear, everything was flawless. I summited Uhuru Peak without a single worry.',
  },
  {
    id: 't3',
    name: 'Mira Sharma',
    location: 'Mumbai, India',
    avatar: 'https://images.pexels.com/photos/3525908/pexels-photo-3525908.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    trek: 'Ladakh High Trail',
    quote: 'ApexTrails knows Ladakh like the back of their hand. The acclimatization plan was perfectly paced and the scenery was otherworldly.',
  },
  {
    id: 't4',
    name: 'Thomas Berger',
    location: 'Munich, Germany',
    avatar: 'https://images.pexels.com/photos/28214974/pexels-photo-28214974.jpeg?auto=compress&cs=tinysrgb&w=400',
    rating: 5,
    trek: 'Dolomites Alta Via',
    quote: 'A beautifully organized trek through the most stunning alpine terrain I have ever seen. The eco-tourism approach is genuinely impressive.',
  },
];

export interface Feature {
  id: string;
  title: string;
  description: string;
  icon: string;
  span: string;
}

export const features: Feature[] = [
  {
    id: 'guides',
    title: 'Certified IFMGA Guides',
    description: 'Every expedition is led by internationally certified mountain guides with decades of high-altitude experience across all seven continents.',
    icon: 'Award',
    span: 'md:col-span-2 md:row-span-2',
  },
  {
    id: 'tracking',
    title: '24/7 Satellite Tracking',
    description: 'Real-time GPS monitoring and emergency satellite comms on every trek.',
    icon: 'SatelliteDish',
    span: 'md:col-span-2',
  },
  {
    id: 'eco',
    title: 'Sustainable Eco-Tourism',
    description: 'Carbon-neutral expeditions supporting local communities.',
    icon: 'Leaf',
    span: '',
  },
  {
    id: 'gear',
    title: 'All-Inclusive Gear Support',
    description: 'Premium equipment provided, fitted, and maintained.',
    icon: 'Backpack',
    span: '',
  },
  {
    id: 'safety',
    title: 'Medical Support On-Trail',
    description: 'Wilderness-trained medics accompany every advanced expedition.',
    icon: 'HeartPulse',
    span: 'md:col-span-2',
  },
];
