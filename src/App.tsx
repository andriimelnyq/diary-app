import React, { useEffect, useState } from 'react';
import './App.scss';
import { Items } from './components/Items';
import { ItemType } from './types/ItemType';
import { Comments } from './components/Comments';

export const App = () => {
  const [items, setItems] = useState<ItemType[]>([]);
  const [activeItem, setActiveItem] = useState<ItemType | null>(null);

  useEffect(() => {
    const localeItems = localStorage.getItem('items');
    const localeActiveItem = localStorage.getItem('activeItem');

    if (localeItems) {
      setItems(JSON.parse(localeItems));
    }

    if (localeActiveItem) {
      setActiveItem(JSON.parse(localeActiveItem));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  useEffect(() => {
    localStorage.setItem('activeItem', JSON.stringify(activeItem));
  }, [activeItem]);

  return (
    <div className="app">
      <div className="app__info">
        <div className="app__title">DAYRY APP</div>
        <div className="app__subtitle">Comment whit no sense</div>
      </div>

      <main className="app__content">
        <Items
          items={items}
          setItems={setItems}
          activeItem={activeItem}
          setActiveItem={setActiveItem}
        />

        <Comments
          activeItem={activeItem}
          setItems={setItems}
          setActiveItem={setActiveItem}
        />
      </main>
    </div>
  );
};
