import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from '../reducers'


const initialState = {
    numberInputReducer: {
        numberInput: null
    },
    promptReducer: {
        visible: false,
        msg: ''
    },
    customTextInputReducer: {
        customTextInput: ''
    }
}

export const store = createStore(rootReducer, initialState, composeWithDevTools())