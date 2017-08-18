import React from 'react';
import Header from './header.js';
import Body from './body.js';
import Footer from './footer.js';

class App extends React.Component{
  constructor() {
    super();
    this.posts = [
        {
            title: "Intro",
            writer: "Steven Tyler, Joe Perry, Jim Vallance",
        },
        {
            title: "Eat The Rich",
            writer: "Tyler, Perry, Vallance",
        },
        {
            title: "Get A Grip",
            writer: "Tyler, Perry, Vallance",
        },
        {
            title: "Fever",
            writer: "Tyler, Perry",
        },
        {
            title: "Livin' On The Edge",
            writer: "Tyler, Perry, Mark Hudson",
        }
    ]
}
genPosts() {
  return this.posts.map((post)=>{
      return <Body post ={post}/>
  })
}
  render(){
      return (
        <div>
        <Header/>
        {this.genPosts()}
        <Footer/>
        </div>
      )
    }
}
export default App;