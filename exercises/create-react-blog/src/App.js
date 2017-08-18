import React from 'react';
import Header from "./header.js";
import Blog from "./blog.js";
import Footer from "./footer.js";

class App extends React.Component {
  constructor() {
    super();
    this.posts = [
     { 
      title: "Most Popular Pogs of 2017",
      subtitle: "Slammers, Jammers and Bammers",
      imgURL: "https://img0.etsystatic.com/102/0/8949283/il_340x270.933244082_ky0l.jpg",
      author: "@islampogs",
      content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestiae ducimus necessitatibus modi quo, obcaecati possimus, dolores impedit neque alias facere, consequuntur nihil! Repudiandae eum autem quam praesentium accusantium in consectetur?"
    },
     {
      title: "Worst Slammers of 2017",
      subtitle: "Avoid Porcelain Slammers",
      imgURL: "https://assets.catawiki.nl/assets/2012/9/20/4/a/7/4a71c150-e57f-012f-5a0e-005056945a4e.jpg",
      author: "@poggdogg",
      content: "Lorem ipsum"
    }
  ]
  }
  genPosts() {
    return this.posts.map((post)=>{
      return <Blog post ={post}/>
    })
  }
  render(){
    return (
      <div className="app-wrapper">
      <Header/>
      {this.genPosts()}
      <Footer/>
      </div>
    )
  }
}


export default App;
