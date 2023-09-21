import React from 'react';
import { ItemType } from '../../types/ItemType';
import './Item.scss';

type Props = {
  item: ItemType;
  isSelected: boolean;
  setActiveItem: React.Dispatch<React.SetStateAction<ItemType | null>>;
  setItems: React.Dispatch<React.SetStateAction<ItemType[]>>;
};

export const Item: React.FC<Props> = ({
  item, setActiveItem, isSelected, setItems,
}) => {
  const onClickItemHandler = () => {
    setActiveItem(item);
  };

  const onDeleteItem = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();

    if (isSelected) {
      setActiveItem(null);
    }

    setItems(items => (
      items.filter(currentItem => currentItem.id !== item.id)
    ));
  };

  return (
    <div
      className={`item ${isSelected ? 'item--selected' : ''}`}
      onClick={onClickItemHandler}
      onKeyDown={onClickItemHandler}
      role="button"
      tabIndex={0}
    >
      {item.name}

      <div className="item__container">
        <div className="item__comments-length">
          {item.comments.length}
        </div>
        <button
          className="item__button"
          type="button"
          onClick={e => onDeleteItem(e)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
