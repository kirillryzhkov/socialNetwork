import React from "react";
import ava from '../.././avatar.png';


function Post (props){
    return(    <div className="post">
    <img src={ava} alt='avatar'/>
    <span>Павел Павел</span>
    <p>{props.message}</p>
    <span>{props.like}</span>

</div>)
}

export default Post;