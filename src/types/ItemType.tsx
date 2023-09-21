import { CommentType } from './CommentType';

export interface ItemType {
  id: string,
  name: string,
  comments: CommentType[],
}
