import React from 'react';
import { CommentType } from '../../types/CommentType';
import './Comment.scss';

type Props = {
  comment: CommentType;
};

export const Comment: React.FC<Props> = ({ comment }) => {
  return (
    <div className="comment">
      <div className="comment__color" style={{ backgroundColor: comment.color }}></div>
      <div className="comment__body">{comment.body}</div>
    </div>
  );
};
