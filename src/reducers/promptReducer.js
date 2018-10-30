import { PROMPT_VISIBLE } from '../actions/numberInputActions';


const initial = {
    visible: false,
    msg: ''
}

const promptReducer = (state = initial, action) => {
    switch (action.type) {
        case PROMPT_VISIBLE:
            return { ...state, visible: action.value, msg: action.msg };
        default:
            return state;
    }
}

export default promptReducer;