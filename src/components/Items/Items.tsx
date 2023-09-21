import React from 'react';
import { ItemType } from '../../types/ItemType';
import { ItemForm } from '../ItemForm';
import { Item } from '../Item';

type Props = {
  items: ItemType[];
  setItems: React.Dispatch<React.SetStateAction<ItemType[]>>;
  activeItem: ItemType | null;
  setActiveItem: React.Dispatch<React.SetStateAction<ItemType | null>>;
};

export const Items: React.FC<Props> = ({
  items, setItems, activeItem, setActiveItem,
}) => {
  return (
    <section className="main-container">
      <div className="main-container__title">Items</div>
      <ItemForm setItems={setItems} />

      {items.length > 0
        ? (
          <div>
            {items.map(item => (
              <Item
                item={item}
                isSelected={item.id === activeItem?.id}
                setActiveItem={setActiveItem}
                setItems={setItems}
                key={item.id}
              />
            ))}
          </div>
        )
        : (<p>Add items</p>)}
    </section>
  );
};
