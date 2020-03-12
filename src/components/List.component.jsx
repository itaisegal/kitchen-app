import React from 'react';
import { ReactComponent as Cart } from '../assets/images/cart.svg';
import { ReactComponent as Kitchen } from '../assets/images/kitchen.svg';
import { ReactComponent as Recipes } from '../assets/images/recipes.svg';

function List(props) {
  let icon = '';
  switch (props.type) {
    case 'kitchen':
      icon = <Kitchen />;
      break;
    case 'recipes':
      icon = <Recipes />;
      break;
    case 'shopping':
      icon = <Cart />;
      break;
    default:
      break;
  }
  return (
    <div className='list'>
      <div className='list__Header'>{icon}</div>
      <div className='list__content'>
        <div className='list__item'>item1</div>
        <div className='list__item'>item2</div>
        <div className='list__item'>item3</div>
        <div className='list__item'>item4</div>
      </div>
    </div>
  );
}

export default List;
