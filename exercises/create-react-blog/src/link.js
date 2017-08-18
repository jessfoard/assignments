import React from 'react';

class Link extends React.Component {
    render() {
        return (
            <a href=""><li calssName="navbar-item">{this.props.navLink}</li></a>
        )
    }
}

export default Link;