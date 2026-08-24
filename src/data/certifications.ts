export type Certification = {
  title: string;
  issuer: string;
  file: string;
};

export const certifications: Certification[] = [
  {
    title: 'Technical SEO & AI Essentials',
    issuer: 'Semrush',
    file: '/certs/technical-seo-ai-essentials.pdf',
  },
  {
    title: 'SEO Foundations',
    issuer: 'Semrush',
    file: '/certs/seo-foundations.pdf',
  },
  {
    title: 'Advanced Content Marketing',
    issuer: 'Semrush',
    file: '/certs/advanced-content-marketing.pdf',
  },
  {
    title: 'AI Fluency for Students',
    issuer: 'Anthropic',
    file: '/certs/ai-fluency-for-students.pdf',
  },
  {
    title: 'AI Fluency Framework & Foundations',
    issuer: 'Anthropic',
    file: '/certs/ai-fluency-framework-foundations.pdf',
  },
];
