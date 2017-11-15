import React, { PureComponent } from 'react';

import CompanyInfo from '../containers/companyInfo';
import EmployeeInfo from '../containers/employeeInfo';

export const TYPES = {
    COMPANY_INFO: 'companyInfo',
    EMPLOYEE_INFO: 'employeeInfo',
};

const components = {
    [TYPES.COMPANY_INFO]: CompanyInfo,
    [TYPES.EMPLOYEE_INFO]: EmployeeInfo
};

class Modals extends PureComponent {

    displayName = 'modals';

    close = () => this.props.closeModal();

    render() {
        const { contentType, additionalProps } = this.props;
        const Component = components[contentType];
        const open = contentType && Component;
        return <div className={this.displayName}>
            <div className="modal" style={{
                display: open ? 'block' : 'none'
            }}>
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Modal title</h5>
                            <button type="button" className="close" onClick={this.close} aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            {open ? <Component {...additionalProps} /> : <div className="modalClosed"/>}
                        </div>
                    </div>
                </div>
            </div>
        </div>;
    }
}

export default Modals;