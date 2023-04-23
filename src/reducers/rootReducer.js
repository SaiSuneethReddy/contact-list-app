import { combineReducers } from 'redux';
import contactReducer from './contactReducer';
import authReducer from './authReducer';


const rootReducer = combineReducers({
  contacts: contactReducer,
  auth: authReducer
});

export default rootReducer;
