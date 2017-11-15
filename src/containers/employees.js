import React from 'react';
import { connect } from 'react-redux';

import Employees from '../components/employees';
import employeesActions from '../actions/employeesActions';

function mapStateToProps(state, ownProps) {
    return {
        employees: state.employees
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadEmployees: () => dispatch(employeesActions.load())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Employees);
