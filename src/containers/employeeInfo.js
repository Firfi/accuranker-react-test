import React from 'react';
import { connect } from 'react-redux';

import EmployeeInfo from '../components/employeeInfo';

function mapStateToProps(state, ownProps) {
    return {
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // can be 'modal close' action
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmployeeInfo);
