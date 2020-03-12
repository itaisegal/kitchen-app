import { actionTypes } from '../types';

export const changeActiveList = (item) => ({
  type: actionTypes.CHANGE_ACTIVE_LIST,
  payload: item,
});
