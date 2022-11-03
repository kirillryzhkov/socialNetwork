import React from "react";
import ava from '../../avatar.png';
import '.././Messages.css';

function Message (props){
    return(    <div className="message">
    <div className="gl">
    <img className="prof" src={ava} alt='avatar'/>
    <span className="name">{props.name}</span>

    </div>

    <p className="mes">{props.message}</p>

</div>)
}

export default Message;