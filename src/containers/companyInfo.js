import React from 'react';
import { connect } from 'react-redux';

import CompanyInfo from '../components/companyInfo';

function mapStateToProps(state, ownProps) {
    return {
        // contentType: state.modals.contentType
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // can be 'modal close' action
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CompanyInfo);
