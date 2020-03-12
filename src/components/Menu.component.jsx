import React from 'react';
import { connect } from 'react-redux';

import Logo from './Logo.component';
import User from './User.component';

import { ReactComponent as Cart } from '../assets/images/cart.svg';
import { ReactComponent as Kitchen } from '../assets/images/kitchen.svg';
import { ReactComponent as Recipes } from '../assets/images/recipes.svg';

function Menu() {
	const options = ['Kitchen Inventory', 'Recipes', 'Shopping List'];
	const icons = [<Kitchen className='svgIcon'/>, <Recipes className='svgIcon'/>, <Cart className='svgIcon'/>];
  const toggle = (event) => {
    event.currentTarget.classList.toggle('active');
  };

  return (
    <div className='mainMenu'>
      <Logo />
      <User />
      <ul>
        {options.map((option, index) => {
          return (
            <li className='mainMenu_option' key={index}>
							<button className='button' onClick={(event) => toggle(event)}>
								{icons[index]}
                <span>{option}</span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

const mapStateToProps = (state) => ({});
const mapDispatchToProps = (state) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
