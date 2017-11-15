import { types } from '../actions/modalActions';

const INITIAL_STATE = {
    contentType: undefined,
    additionalProps: {}
};

const handlers = {
    [types.OPEN_MODAL](state, { contentType, additionalProps }) {
        return {
            ...state,
            contentType,
            additionalProps
        };
    },
    [types.CLOSE_MODAL](state) {
        return {
            ...state,
            contentType: undefined,
            additionalProps: {}
        }
    }
};

export default function modalsReducer(state = INITIAL_STATE, action) {
    const handler = handlers[action.type];
    return handler ? handler(state, action) : state;
};