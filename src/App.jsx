import { useState } from 'react';
import Title from './Title';
import menu from './data';
import Menu from './Menu';
import Categories from './Categories';

/* const tempCategories = menu.map((items) => items.category);
console.log(tempCategories);
const uniqueCategories = new Set(tempCategories);
console.log(uniqueCategories);
const categories = ['all', ...uniqueCategories];
console.log(categories); */

//Uso de set
const allCategories = ['all', ...new Set(menu.map((item) => item.category))];

const App = () => {
  const [categories, setCategories] = useState(allCategories);
  const [menuItems, setMenuItems] = useState(menu);
  const filterCategories = (category) => {
    if (category === 'all') {
      setMenuItems(menu);
      return;
    }
    const newItems = menu.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <>
      <main>
        <section className="menu">
          <Categories
            allCategories={allCategories}
            filterCategories={filterCategories}
          />
          <Title text={'our menu'} />
          <Menu items={menuItems} />
        </section>
      </main>
      <a
        href="https://dudufcb.netlify.app/"
        target=""
        style={{ textAlign: 'center', display: 'inline-block' }}
      >
        Trabajo realizado por Luis González | Volver Al Portafolio
      </a>
    </>
  );
};
export default App;
