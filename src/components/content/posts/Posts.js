import React from "react";
import ava from '.././avatar.png';
import Post from './post/Post.js';

function Posts(){
    return (<div className="posts">
    <input placeholder="Напишите пост"/>
    <button>Добавить</button>
    <Post message='Привет подпищеки розыгрышь зхочу сделать на 1 миллион'/>
    <Post message='Кушаю макдодалд'/>
    <Post message='Кушаю бургер кингг'/>

</div>)
}

export default Posts;