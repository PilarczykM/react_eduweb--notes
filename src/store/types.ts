import { Article } from './articles/types';
import { Note } from './notes/types';
import { Twitter } from './twitters/types';
import { User } from './user/types';

export interface State {
  articles: Article[];
  notes: Note[];
  twitters: Twitter[];
  user: User;
}
