import React from "react";
import ava from '../../avatar.png';
import '.././Messages.css';

function Dialog(props){
    return(<div className="mes">
        <p>{props.message}</p>
    </div>)
}

export default Dialog;