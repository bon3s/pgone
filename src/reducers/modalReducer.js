import { MODAL_VISIBLE } from '../actions/modalActions';

const initial = {
    visible: false,
}

const modalReducer = (state = initial, action) => {
    switch (action.type) {
        case MODAL_VISIBLE:
            return { ...state, visible: action.value };
        default:
            return state;
    }
}

export default modalReducer;