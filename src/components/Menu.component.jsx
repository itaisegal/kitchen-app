import React from 'react';
import { connect } from 'react-redux';

import Logo from './Logo.component';
import User from './User.component';

function Menu() {
  const options = ['Kitchen Inventory', 'Recipes', 'Shopping List'];
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
                {option}
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
