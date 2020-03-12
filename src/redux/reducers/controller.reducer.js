import { actionTypes } from '../types';

const INITIAL_STATE = {
  activeList: [],
};

const controllerReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.CHANGE_ACTIVE_LIST:
      return 0;
		default:
			return state;
  }
};

export default controllerReducer;
