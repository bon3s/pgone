import { SET_CUSTOM_TEXT_INPUT } from '../actions/customTextInputActions'

const initial = {
    customTextInput: ''
}

const customTextInputReducer = (state = initial, action) => {
    switch (action.type) {
        case SET_CUSTOM_TEXT_INPUT:
            return { ...state, customTextInput: action.value }
        default:
            return state;
    }
}

export default customTextInputReducer;