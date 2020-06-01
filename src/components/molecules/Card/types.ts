export interface Props {
  id: string | number;
  pageContext: 'notes' | 'twitters' | 'articles';
  title: string;
  created: string;
  twitterName?: string | undefined;
  articleUrl?: string | undefined;
  content: string;
  removeItem: Function;
}

export interface StyledProps {
  theme?: any;
  activeColor?: string;
  flex?: boolean;
}
