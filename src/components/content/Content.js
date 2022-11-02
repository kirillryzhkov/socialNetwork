import React from "react";
import '../../App.css';
import ava from './avatar.png';
import './content.css';
import Posts from './posts/Posts.js';

function Content(){
    return (<div className="content">
        <div className="about"><img src={ava} alt='аватар'/>
        <p className="Nf">Павел Павел</p>
        </div>
        <Posts/>
    </div>)

}

export default Content;