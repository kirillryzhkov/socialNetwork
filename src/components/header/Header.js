import React from "react";
import '../../App.css';
import './header.css';
import logo from './logo.jpg';

function Header(){
    return (<div className="header">
        <img src={logo} />
    </div>)

}

export default Header;