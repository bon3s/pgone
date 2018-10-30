import { createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from '../reducers'
import promptReducer from "../reducers/promptReducer";

const initialState = {
    numberInputReducer: {
        numberInput: null
    },
    promptReducer: {
        visible: false,
        msg: ''
    }
}

export const store = createStore(rootReducer, initialState, composeWithDevTools())