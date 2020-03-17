import React from 'react';

import { ReactComponent as Cart } from './images/cart.svg';
import { ReactComponent as Kitchen } from './images/kitchen.svg';
import { ReactComponent as Recipes } from './images/recipes.svg';
import { ReactComponent as Chef } from './images/chef.svg';
import { ReactComponent as Google } from './images/google.svg';

export const icons = {
  Kitchen: <Kitchen className='svgIcon' />,
  Recipes: <Recipes className='svgIcon' />,
  Cart: <Cart className='svgIcon' />,
  Chef: <Chef className='svgIcon' />,
  Google: <Google className='svgIcon' />
};
