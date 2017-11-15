import React from 'react';
import { connect } from 'react-redux';

import Modals from '../components/modals';
import actions from '../actions/modalActions';

function mapStateToProps(state, ownProps) {
    return {
        contentType: state.modals.contentType,
        additionalProps: state.modals.additionalProps // comment about it in other place
    };
}

function mapDispatchToProps(dispatch) {
    return {
        closeModal: () => dispatch(actions.closeModal())
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Modals);
