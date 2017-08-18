import React from "react";

class Blog extends React.Component{
    
    render(){
        return (
            <div className="blog-wrapper">
            <h3>{this.props.post.title}</h3>
            <h4>{this.props.post.subtitles}</h4>
            
            <div className="image-wrapper">
            <img src={this.props.post.imgURL} alt="Big Joe Slammer"></img>
            <span>{this.props.post.author}</span>
            </div>
            <p>{this.props.post.content}</p>
            </div>
        )
    }
}

export default Blog;