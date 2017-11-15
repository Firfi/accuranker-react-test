import React, { PureComponent } from 'react';

import Topbar from '../containers/topBar';
import Employees from '../containers/employees';
import Modals from '../containers/modals';

class HomePage extends PureComponent {

    displayName = 'homePage';

    render() {
        return <div className={this.displayName}>
            <Topbar/>
            <Employees/>
            <Modals/>
        </div>;
    }
}

export default HomePage;