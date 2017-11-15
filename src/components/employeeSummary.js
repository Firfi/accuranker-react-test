

import React, { PureComponent } from 'react';

class EmployeeSummary extends PureComponent {

    displayName = 'employeeSummary';

    openModal = () => this.props.openModal(this.props.employee);

    render() {
        const { employee } = this.props;
        return <div className="employee-summary col-lg-3" onClick={this.openModal}>
            <div className="employee-image row justify-content-center">
                <div className="col-lg-8">
                    <div className="square-container">
                        <div className="square-content" style={{backgroundImage: `url(${employee.image})`}}></div>
                    </div>
                </div>
            </div>
            <div className="employee-summary row justify-content-center">
                <div className="employee-name col-lg-12">
                    {employee.name}
                </div>
                <div className="employee-role col-lg-12">
                    {employee.role}
                </div>
            </div>
        </div>
    }
}

export default EmployeeSummary;