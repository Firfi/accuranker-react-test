import React, { PureComponent } from 'react';

import EmployeeSummary from '../containers/employeeSummary';

class Employees extends PureComponent {

    initialLoad = () => {
        this.props.loadEmployees();
    };

    componentDidMount() {
        this.initialLoad();
    }

    displayName = 'employees';

    render() {
        const { loading, loaded, list, error } = this.props.employees;
        return <div className={this.displayName}>
            {loading ? <div>Loading</div> : <div className="employees-content row justify-content-center">
                {list.map(employee => <EmployeeSummary key={employee.name/*TODO .id*/} employee={employee}/>)}
            </div>}
        </div>;
    }
}

export default Employees;