import React from "react";
import Navbar from "./navbar";

class Header extends React.Component{
    render(){
        return (
            <div className="header-wrapper">
                <h1 className="header-title">Pog Blog</h1>
                    <Navbar/>
            </div>
        )
    }
}

export default Header;