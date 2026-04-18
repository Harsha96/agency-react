export interface CaseStudy {
  id: string;
  title: string;
  description: string;
  tech_stack: string[];
  results: string;
  image_url: string;
  published: boolean;
  created_at: string;
  client?: string;
}

export interface Blog {
  id: string;
  title: string;
  slug: string;
  content: string;
  excerpt: string;
  author: string;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export const caseStudies: CaseStudy[] = [
  {
    id: '1',
    title: 'Aura Skincare Expansion',
    description: 'A complete digital transformation for an organic skincare brand, increasing online sales by 150%.',
    tech_stack: ['React', 'Node.js', 'Tailwind CSS'],
    results: '150% increase in conversion rate within 6 months.',
    image_url: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&q=80&w=800',
    published: true,
    created_at: new Date().toISOString(),
    client: 'Aura Naturals'
  },
  {
    id: '2',
    title: 'Nexus Fintech App',
    description: 'Redesigning the user experience for a leading fintech platform to improve retention and security.',
    tech_stack: ['Next.js', 'TypeScript', 'Framer Motion'],
    results: '40% reduction in user churn after launch.',
    image_url: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=800',
    published: true,
    created_at: new Date().toISOString(),
    client: 'Nexus Finance'
  },
  {
    id: '3',
    title: 'Vanguard Realty platform',
    description: 'Developing a custom real estate portal with AI-driven property matching capabilities.',
    tech_stack: ['React', 'Python', 'OpenAI API'],
    results: '3x more qualified leads delivered to agents.',
    image_url: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
    published: true,
    created_at: new Date().toISOString(),
    client: 'Vanguard Properties'
  },
  {
    id: '4',
    title: 'Lumina Energy Dashboard',
    description: 'A real-time data visualization platform for sustainable energy management.',
    tech_stack: ['D3.js', 'React', 'Firebase'],
    results: 'Optimized energy consumption by 22% across 50 facilities.',
    image_url: 'https://images.unsplash.com/photo-1551288049-bbbda536339a?auto=format&fit=crop&q=80&w=800',
    published: true,
    created_at: new Date().toISOString(),
    client: 'Lumina Group'
  }
];

export const blogs: Blog[] = [
  {
    id: '1',
    title: 'The Future of AI in Modern Design',
    slug: 'future-of-ai-design',
    excerpt: 'How artificial intelligence is reshaping the way we think about creativity and user interfaces.',
    content: `
      <p>Artificial intelligence is no longer just a buzzword; it's a fundamental part of the modern design toolkit...</p>
      <h2>The Shift to Generative Design</h2>
      <p>Generative design tools are allowing designers to explore thousands of variations in minutes...</p>
    `,
    author: 'Alex Rivers',
    published: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  },
  {
    id: '2',
    title: 'Maximizing Performance in React Applications',
    slug: 'react-performance-tips',
    excerpt: 'Essential techniques to ensure your React apps are fast, responsive, and efficient.',
    content: `
      <p>Performance optimization in React is often skipped until it's too late. Here are the top strategies...</p>
      <h2>Virtualization and Memoization</h2>
      <p>Using React.memo and virtualization for large lists can drastically reduce render times...</p>
    `,
    author: 'Sarah Chen',
    published: true,
    created_at: new Date().toISOString(),
    updated_at: new Date().toISOString()
  }
];
