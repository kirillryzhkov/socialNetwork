import React from "react";
import '../../App.css';
import ava from './avatar.png';
import './content.css';
import Posts from './posts/Posts.js';
import Content from './Content.js';


let post = [{text:'Розыгрышь 1млн долларов', id:1, like:1000}, {text:'Бургер макдокнак', id:2, like:569},
{text:'Учусь на паре', id:3, like:1234}]

function Profile(props){
    return (<div className="prf">
        
        <Content/>
        <Posts newTextPost={props.newTextPost} editPost={props.editPost} addPost={props.addPost} posts={props.posts}/>
    </div>)
}

export default Profile;