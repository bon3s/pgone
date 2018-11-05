export const PROMPT_VISIBLE = 'PROMPT_VISIBLE';

export const promptVisible = (value, msg, success) => {
    return {
        type: PROMPT_VISIBLE,
        value,
        msg,
        success
    };

};