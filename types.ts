export interface Entity {
  id: string;
  name: string;
  type: 'person' | 'company' | 'person_group';
  slope: string[];
  twitter: string | null;
  twitter_url: string | null;
  blog: string | null;
  rss: string | null;
  youtube: string | null;
  github: string | null;
  podcast: string | null;
  intro_zh: string;
  intro_en: string;
}

export type SlopeCategory = string;

export interface TimelineChapter {
  id: number;
  title: string;
  description: string; // The "Mom Science" part
  imageUrl: string | null;
  category: 'universe' | 'life' | 'civilization' | 'tech';
}
