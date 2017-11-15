import { combineReducers } from 'redux';

import modalsReducer from './modalsReducer';
import employeesReducer from './employeesReducer';

const rootReducer = combineReducers({
    modals: modalsReducer,
    employees: employeesReducer
});

export default rootReducer;