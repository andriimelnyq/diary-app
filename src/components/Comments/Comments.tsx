import React from 'react';
import { ItemType } from '../../types/ItemType';
import { CommentForm } from '../CommentForm';
import { Comment } from '../Comment';

type Props = {
  activeItem: ItemType | null;
  setItems: React.Dispatch<React.SetStateAction<ItemType[]>>
  setActiveItem: React.Dispatch<React.SetStateAction<ItemType | null>>;
};

export const Comments: React.FC<Props> = ({ activeItem, setItems, setActiveItem }) => {
  return (
    <section className="main-container">
      <div className="main-container__title">
        {activeItem
          ? `Comments #${activeItem?.id}`
          : "The item hasn't been selected yet!"}
      </div>

      {activeItem && (
        <>
          <li className="main-container__list">
            {activeItem?.comments.map(comment => (
              <Comment comment={comment} key={comment.id} />
            ))}
          </li>

          <CommentForm
            activeItem={activeItem}
            setItems={setItems}
            setActiveItem={setActiveItem}
          />
        </>
      )}
    </section>
  );
};
