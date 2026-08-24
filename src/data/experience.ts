export type ExperienceEntry = {
  role: string;
  company: string;
  companyUrl?: string;
  start: string;
  end: string;
  bullets: string[];
  tools: string[];
};

export const experience: ExperienceEntry[] = [
  {
    role: 'Founder & CEO',
    company: 'Compile and Commit Pvt. Ltd.',
    companyUrl: 'https://compileandcommit.com',
    start: 'Oct 2025',
    end: 'Present',
    bullets: [
      'Founded and incorporated a company offering software development, AI automation, digital marketing, and IT consulting.',
      'Lead strategy, client delivery, and technical direction across all four service verticals.',
    ],
    tools: ['AI Automation', 'Web Development', 'Digital Marketing', 'IT Consulting'],
  },
  {
    role: 'Marketing Specialist & Digital Marketing Analyst',
    company: 'Megatech Group Pvt. Ltd.',
    start: 'Jul 2025',
    end: 'Present',
    bullets: [
      'Delivered +50% growth in organic website traffic through technical and content SEO.',
      'Grew Google Business Profile reach by +40% via listing optimization and local SEO.',
      'Increased Daraz e-commerce sales by +15% through campaign and listing optimization.',
    ],
    tools: ['GA4', 'Search Console', 'Technical SEO', 'GBP', 'Daraz'],
  },
  {
    role: 'Digital Marketing Analyst',
    company: 'MAX International',
    start: 'Oct 2023',
    end: 'Jun 2025',
    bullets: [
      'Managed SEO, analytics reporting, and social media for the brand across channels.',
      'Built recurring performance reports translating raw analytics into business decisions.',
    ],
    tools: ['SEO', 'Google Analytics', 'Social Media', 'Reporting'],
  },
  {
    role: 'Audit Intern',
    company: 'Tapasya Business Management',
    start: 'Dec 2022',
    end: 'Jun 2023',
    bullets: [
      'Supported financial audit engagements, building a foundation in data accuracy and analytical rigor.',
    ],
    tools: ['Excel', 'Financial Analysis'],
  },
];
