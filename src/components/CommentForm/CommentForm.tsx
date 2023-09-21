import React, { useState } from 'react';
import { ItemType } from '../../types/ItemType';
import './CommentForm.scss';

type Props = {
  activeItem: ItemType | null;
  setItems: React.Dispatch<React.SetStateAction<ItemType[]>>
  setActiveItem: React.Dispatch<React.SetStateAction<ItemType | null>>;
};

export const CommentForm: React.FC<Props> = ({ setItems, setActiveItem, activeItem }) => {
  const [color, setColor] = useState('#000000');
  const [body, setBody] = useState('');

  const onChangeColorHandler = (hexColor: string) => setColor(hexColor);
  const onChangeBodyHandler = (text: string) => setBody(text);
  const onSubmitFormHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newCommentId = `${activeItem?.id}-${activeItem?.comments.length}`;

    if (activeItem) {
      setActiveItem({
        ...activeItem,
        comments: [
          ...activeItem.comments,
          {
            id: newCommentId,
            body,
            color,
          },
        ],
      });
    }

    setItems(items => (
      items.map(item => (item.id === activeItem?.id
        ? {
          ...item,
          comments: [
            ...activeItem.comments,
            {
              id: newCommentId,
              body,
              color,
            },
          ],
        }
        : item))
    ));

    setBody('');
    setColor('#000000');
  };

  return (
    <form
      className="comment-form"
      onSubmit={e => onSubmitFormHandler(e)}
    >
      <input
        className="comment-form__color"
        type="color"
        value={color}
        onChange={e => onChangeColorHandler(e.target.value)}
        required
      />
      <textarea
        className="comment-form__body"
        value={body}
        onChange={e => onChangeBodyHandler(e.target.value)}
        required
      />
      <button
        className="comment-form__button"
        type="submit"
      >
        Add New
      </button>
    </form>
  );
};
