import React from "react";
import '../../App.css';
import ava from './avatar.png';
import './content.css';
import Posts from './posts/Posts.js';
import Content from './Content.js';



function Profile(props){
    return (<div className="prf">
        
        <Content/>
        <Posts posts={props.posts}/>
    </div>)
}

export default Profile;