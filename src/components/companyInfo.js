import React, { PureComponent } from 'react';

class CompanyInfo extends PureComponent {

    displayName = 'companyInfo';

    render() {
        return <div className={this.displayName}>
            comp info
        </div>;
    }
}

export default CompanyInfo;