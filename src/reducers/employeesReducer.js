import { PENDING, FULFILLED, REJECTED } from 'redux-promise-middleware'
import { types } from '../actions/employeesActions';

const INITIAL_STATE = {
    list: [],
    loaded: false,
    loading: false,
    error: false
};

const handlers = {
    [types.LOAD + '_' + PENDING](state) {
        return {
            ...state,
            loading: true,
            loaded: false,
            error: false
        };
    },
    [types.LOAD + '_' + FULFILLED](state, action) {
        return {
            ...state,
            loading: false,
            loaded: true,
            error: false,
            list: action.payload.data
        };
    },
    [types.LOAD + '_' + REJECTED](state, action) {
        console.error('rejected', action);
        return {
            ...state,
            loaded: false,
            loading: false,
            error: true
        }
    }
};

export default function modalsReducer(state = INITIAL_STATE, action) {
    const handler = handlers[action.type];
    return handler ? handler(state, action) : state;
};