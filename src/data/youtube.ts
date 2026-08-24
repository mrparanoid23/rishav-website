export type Video = {
  /** The YouTube video ID, e.g. "dQw4w9WgXcQ" from youtube.com/watch?v=dQw4w9WgXcQ */
  id: string;
  title: string;
  description?: string;
};

// Once the channel is live, set channelUrl and add videos here —
// the homepage and /videos page will automatically switch from
// "coming soon" placeholders to real embedded videos.
export const channelUrl = '';

export const videos: Video[] = [];
