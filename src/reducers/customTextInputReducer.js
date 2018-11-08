import { SET_CUSTOM_TEXT_INPUT, SET_RESULT } from '../actions/customTextInputActions';

const initial = {
    customTextInput: '',
    result: ''
}

const customTextInputReducer = (state = initial, action) => {
    switch (action.type) {
        case SET_CUSTOM_TEXT_INPUT:
            return { ...state, customTextInput: action.value }
        case SET_RESULT:
            return { ...state, result: action.value }
        default:
            return state;
    }
}

export default customTextInputReducer;