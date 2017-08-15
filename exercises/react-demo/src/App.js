import React from 'react';

function SubComp () {
    return <h1>This is a sub-component</h1>
}

class App extends React.Component {
    render () {
        return (
            <div>
                <SubComp />
                <Name />
            <h1>This is a component!</h1>
        </div>
        )
    }
}



export default App;