const USER_DATA = {
  kitchenInventory: {
    title: 'Kitchen Inventory',
    id: 1,
    items: [
      {
        id: 1,
        name: 'product 1',
        quantity: 25,
        expiryDate: '25/03/2020',
        daysToExpire: 0,
        shelf: 'freezer',
      },
      {
        id: 2,
        name: 'product 2',
        quantity: 22,
        expiryDate: '22/03/2020',
        daysToExpire: 0,
        shelf: 'dry',
      },
      {
        id: 3,
        name: 'product 3',
        quantity: 22,
        expiryDate: '27/03/2020',
        daysToExpire: 0,
        shelf: 'fridge',
      },
    ],
  },
  recipes: {
    title: 'Recipes',
    id: 2,
    items: [
      {
        id: 1,
        name: 'Recipe 1',
        ingredients: [],
        instructions: [],
      },
      {
        id: 2,
        name: 'Recipe 2',
        ingredients: [],
        instructions: [],
      },
      {
        id: 3,
        name: 'Recipe 3',
        ingredients: [],
        instructions: [],
      },
    ],
  },
  shoppingList: {
    title: 'Shopping List',
    id: 3,
    items: [
      {
        id: 1,
        name: 'Item 1',
        quantity: 0,
        expiryDate: '',
      },
      {
        id: 2,
        name: 'Item 2',
        quantity: 0,
        expiryDate: '',
      },
      {
        id: 3,
        name: 'Item 3',
        quantity: 0,
        expiryDate: '',
      },
    ],
  },
};

export default USER_DATA;
