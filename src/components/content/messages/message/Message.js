import React from "react";
import ava from '../../avatar.png';
import '.././Messages.css';
import {Link} from 'react-router-dom';
import Dialog from './Dialog.js';

function Message (props){
    return(    <div className="message">
    <div className="gl">
    <img className="prof" src={ava} alt='avatar'/>
    <Link to={`/dialog/${props.id}`}><span className="name">{props.name}</span></Link>

        {/* <Dialog message={'Привет подпищеки1'}></Dialog>
        <Dialog message={'Привет подпищеки2'}></Dialog>
        <Dialog message={'Привет подпищеки3'}></Dialog>
        <Dialog message={'Привет подпищеки4'}></Dialog> */}

    </div>

    {/* <p className="mes">{props.message}</p> */}

</div>)
}

export default Message;