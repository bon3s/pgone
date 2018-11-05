import { PROMPT_VISIBLE } from '../actions/promptActions';


const initial = {
    visible: false,
    msg: '',
    success: false,
}

const promptReducer = (state = initial, action) => {
    switch (action.type) {
        case PROMPT_VISIBLE:
            return { ...state, visible: action.value, msg: action.msg, success: action.success };
        default:
            return state;
    }
}

export default promptReducer;