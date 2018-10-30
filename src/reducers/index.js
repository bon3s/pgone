import { combineReducers } from 'redux';
import numberInputReducer from './numberInputReducer';
import promptReducer from './promptReducer';


export default combineReducers({
    numberInputReducer,
    promptReducer
});