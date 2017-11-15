import React from 'react';
import { connect } from 'react-redux';

import EmployeeSummary from '../components/employeeSummary';
import modalActions from '../actions/modalActions';
import { TYPES as modalContentTypes } from '../components/modals';

function mapStateToProps(state, ownProps) {
    return { // ideally, from passed id. currently employee object is in state

    };
}

function mapDispatchToProps(dispatch) {
    return {
        openModal: (employee) => dispatch(modalActions.openModal(modalContentTypes.EMPLOYEE_INFO, { employee }))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeSummary);
