export interface ServiceItem {
  id: string;
  slug: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  iconName: string;
  gradient: string;
  bgBadge: string;
  heroImage: string;
  benefits: { title: string; description: string }[];
  features: string[];
  process: { step: string; title: string; desc: string }[];
  faqs: { question: string; answer: string }[];
  technologies?: string[];
  deliverables?: string[];
  stats?: { label: string; value: string }[];
}

export interface PortfolioProject {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  client: string;
  duration: string;
  tags: string[];
  demoUrl?: string;
  liveUrl?: string;
  stats?: string;
  highlights?: string[];
  features?: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  highlight?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  coverImage: string;
  content: string[];
}

