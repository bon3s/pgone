import { combineReducers } from 'redux';
import numberInputReducer from './numberInputReducer';
import promptReducer from './promptReducer';
import customTextInputReducer from './promptReducer';


export default combineReducers({
    numberInputReducer,
    promptReducer,
    customTextInputReducer
});