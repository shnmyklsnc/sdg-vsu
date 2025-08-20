export interface SDG {
  id: number;
  title: string;
  description: string;
  icon: string;
  color: string;
  documents: Document[];
  articles: Article[];
  stats: {
    publications: number;
    projects: number;
    partnerships: number;
  };
}

export interface Document {
  id: string;
  title: string;
  description: string;
  type: "pdf" | "docx";
  url: string;
  date: string;
  category: string;
}

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  sdgIds: number[];
  featuredImage?: string;
  tags: string[];
}
