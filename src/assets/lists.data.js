import { icons } from './icons';
import USER_DATA from '../components/user.data';

const ListData = {
  kitchenInventory: {
    name: 'Kitchen Inventory',
    icon: icons.Kitchen,
    color: '#000',
    data: USER_DATA.kitchenInventory
  },
  recipes: {
    name: 'Recipes',
    icon: icons.Recipes,
    color: '#000',
    data: USER_DATA.recipes
  },
  shoppingList: {
    name: 'Shopping List',
    icon: icons.Cart,
    color: '#000',
    data: USER_DATA.shoppingList
  }
};

export default ListData;
