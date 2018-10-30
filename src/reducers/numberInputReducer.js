import { SET_NUMBER_INPUT } from '../actions/numberInputActions'

const initial = {
    numberInput: null
}

const numberInputReducer = (state = initial, action) => {
    switch (action.type) {
        case SET_NUMBER_INPUT:
            return { ...state, numberInput: action.value }
        default:
            return state;
    }
}

export default numberInputReducer