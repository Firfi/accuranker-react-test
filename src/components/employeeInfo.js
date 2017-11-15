import React, { PureComponent } from 'react';

class EmployeeInfo extends PureComponent {

    displayName = 'employeeInfo';

    render() {
        const { employee } = this.props;
        return <div className={this.displayName}>
            emp info TODO

            {JSON.stringify(employee)}
        </div>;
    }
}

export default EmployeeInfo;