import React from 'react';
import { connect } from 'react-redux';

import modalActions from '../actions/modalActions';
import { TYPES as modalContentTypes } from '../components/modals';
import TopBar from '../components/topBar';


function mapStateToProps(state, ownProps) {
    return {

    };
}

function mapDispatchToProps(dispatch) {
    return {
        openModal: () => dispatch(modalActions.openModal(modalContentTypes.COMPANY_INFO))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TopBar);
