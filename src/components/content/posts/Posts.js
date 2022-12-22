import React from "react";
import ava from '.././avatar.png';
import Post from './post/Post.js';
import {editPostAC, addPostAC} from '../../../data/reduceProfile.js';


let textPost = React.createRef();


// let crPost = () =>{
//     console.log(textPost.current.value);
// }


function Posts(props){
    let putPost = () => {
        props.dispatch(addPostAC());

    }
    let editPost = () => {
        props.dispatch(editPostAC(textPost.current.value));
        // props.editPost(textPost.current.value)
    }
    return (<div className="posts">
    <input ref={textPost} placeholder="Напишите пост" value={props.newTextPost} onChange={editPost}/>
    <button onClick={putPost} >Добавить</button>
    {/* <Post message='Привет подпищеки розыгрышь хочу сделать на 1 миллион'/>
    <Post message='Кушаю макдодалд'/>
    <Post message='Кушаю бургер кингг'/> */}

    {props.posts.map((e)=><Post id={e.id} message={e.text} like={e.like}/>)}
    {/* props.dispatch({type:'addPost'}); */}
</div>)
}

export default Posts;