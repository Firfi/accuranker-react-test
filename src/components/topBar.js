import React, { PureComponent } from 'react';

class TopBar extends PureComponent {

    displayName = 'topBar';

    openModal = () => this.props.openModal();

    render() {
        return <div className={this.displayName}>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Logo</a>
                <div className="ml-auto">
                    <a href="#" onClick={this.openModal}>Info</a>
                </div>
            </nav>
        </div>
    }
}

export default TopBar;