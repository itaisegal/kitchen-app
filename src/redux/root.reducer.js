import { combineReducers } from 'redux';
//import controllerReducer from './reducers/controller.reducer';
import userReducer from './reducers/user.reducer';

export default combineReducers({
	user: userReducer
});
