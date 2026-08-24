export type SkillCategory = {
  category: string;
  skills: { name: string; level: number }[];
};

export const skillCategories: SkillCategory[] = [
  {
    category: 'Marketing & SEO',
    skills: [
      { name: 'Technical SEO', level: 92 },
      { name: 'SEMrush', level: 88 },
      { name: 'Google Business Profile', level: 90 },
      { name: 'Content Marketing', level: 85 },
      { name: 'Google Ads', level: 75 },
      { name: 'Social Media Management', level: 82 },
    ],
  },
  {
    category: 'Data & Analytics',
    skills: [
      { name: 'Google Analytics 4', level: 90 },
      { name: 'Search Console', level: 88 },
      { name: 'Looker Studio', level: 80 },
      { name: 'Excel', level: 85 },
      { name: 'Python', level: 70 },
      { name: 'Market Research', level: 80 },
    ],
  },
  {
    category: 'Tools & Design',
    skills: [
      { name: 'GitHub', level: 75 },
      { name: 'AI Automation', level: 85 },
      { name: 'Figma', level: 65 },
      { name: 'Canva', level: 90 },
      { name: 'Illustrator', level: 60 },
      { name: 'Photoshop', level: 65 },
    ],
  },
];
