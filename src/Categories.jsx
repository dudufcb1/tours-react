import React from 'react';

const Categories = ({ allCategories, filterCategories }) => {
  return (
    <div className="btn-container">
      {allCategories.map((item) => {
        return (
          <button
            type="button"
            className="btn"
            key={item}
            onClick={() => {
              filterCategories(item);
            }}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
