import React from 'react';
import Link from "./link.js";

class Navbar extends React.Component{
    constructor() {
        super();
        this.navLinks = ["Home", "About Me", "Some Stuff"];
    }
    genLinks() {
        return this.navLinks.map((item)=>{
            return <Link key = {item} name = {item}/>
        })
    }
    render(){
        return(
            <div className="navbar-wrapper">
                <ul className="navbar-item">
                {this.genLinks()}
                </ul>
            </div>
        )
    }
}

export default Navbar;