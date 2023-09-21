import React, { useState } from 'react';
import { ItemType } from '../../types/ItemType';
import './ItemForm.scss';

type Props = {
  setItems: React.Dispatch<React.SetStateAction<ItemType[]>>
};

export const ItemForm: React.FC<Props> = ({ setItems }) => {
  const [itemName, setItemName] = useState('');

  const generateRandomId = () => {
    const min = 10000000;
    const max = 99999999;
    const randomId = Math.floor(Math.random() * (max - min + 1)) + min;

    return randomId.toString();
  };

  const onChangeInput = (name: string) => setItemName(name);

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault();
    setItems(items => (
      [...items,
        { id: generateRandomId(), name: itemName, comments: [] },
      ]
    ));

    setItemName('');
  };

  return (
    <form className="item-form" onSubmit={e => onSubmitHandler(e)}>
      <input
        type="text"
        className="item-form__input"
        value={itemName}
        placeholder="Type name here..."
        onChange={e => onChangeInput(e.target.value)}
        required
      />
      <button
        type="submit"
        className="item-form__button"
      >
        Add New
      </button>
    </form>
  );
};
