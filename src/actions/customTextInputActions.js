export const SET_CUSTOM_TEXT_INPUT = 'SET_CUSTOM_TEXT_INPUT';
export const SET_RESULT = 'SET_RESULT';

export const setCustomTextInput = (value) => ({
    type: SET_CUSTOM_TEXT_INPUT,
    value
});

export const setResult = (value) => ({
    type: SET_RESULT,
    value
}); 