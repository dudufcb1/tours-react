import React from 'react';
import MenuItem from './MenuItem';

const Menu = ({ items }) => {
  return (
    <div className="section-center">
      {items.map((items) => {
        return <MenuItem key={items.id} {...items} />;
      })}
    </div>
  );
};

export default Menu;
