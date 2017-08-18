import React, { Component } from 'react';

class App extends Component {
    render() {
        console.log(this.props);
        return (
            <div>
                <h1>
                {this.props.title}
                </h1>
                <p>{this.props.andNowforSomethingCompletelyDifferent}</p>
            </div>
        )
    }
}

export default App;