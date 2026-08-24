export type Video = {
  /** The YouTube video ID, e.g. "dQw4w9WgXcQ" from youtube.com/watch?v=dQw4w9WgXcQ */
  id: string;
  title: string;
  description?: string;
};

// Once the channel is live, set channelUrl and add videos here —
// the homepage and /videos page will automatically switch from
// "coming soon" placeholders to real embedded videos.
export const channelUrl = 'https://www.youtube.com/@decode_rishav';

export const videos: Video[] = [
  {
    id: 'zWkI-UgsldA',
    title: 'Google Gave Me 100?? | DecodeRishav',
    description: 'A quick PageSpeed Insights test — 100 on desktop, 96 on mobile, 100 SEO.',
  },
  {
    id: 'oJJ2_QcPWME',
    title: 'Connect Your Instagram to Google Search Console | New 2026 Update',
    description: "Step-by-step walkthrough of Google Search Console's new social profile connection feature.",
  },
  {
    id: '9y6D8f_o77M',
    title: 'FREE Google Tools That Can Grow Your Business | DecodeRishav',
    description: '5 free Google tools every business owner should be using — GBP, Search Console, Analytics, Trends, and PageSpeed Insights.',
  },
];
