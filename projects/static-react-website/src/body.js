import React from 'react';

class Body extends React.Component{
    
    
    
    render() {
        return (
            <div className="body-wrapper">
            <h2>{this.props.post.title}</h2>
            <p>{this.props.post.writer}</p>

            </div>
        )
    }
}

export default Body;