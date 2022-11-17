import React from "react";
import ava from '.././avatar.png';
import Post from './post/Post.js';




function Posts(props){
    return (<div className="posts">
    <input placeholder="Напишите пост"/>
    <button>Добавить</button>
    {/* <Post message='Привет подпищеки розыгрышь хочу сделать на 1 миллион'/>
    <Post message='Кушаю макдодалд'/>
    <Post message='Кушаю бургер кингг'/> */}

    {props.posts.map((e)=><Post id={e.id} message={e.text} like={e.like}/>)}

</div>)
}

export default Posts;