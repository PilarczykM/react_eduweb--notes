export interface CardProps {
  id: string;
  title: string;
  created: string;
  twitterName?: string;
  articleUrl?: string;
  content: string;
  removeItem: (id: string) => void;
}
