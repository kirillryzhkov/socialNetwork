import {rerender} from '.././render.js';


export let addPost = (textPost) =>{
    let newPost = {text: textPost, id: 4, like: 0}
    state.user.post.unshift(newPost);
    console.log(state);
    state.user.newTextPost = '';
    rerender(state);
}

export let addMes = (textMes) =>{
    let newMes = {name: textMes, id: 5}
    state.messages.me.push(newMes);
    console.log(state);
    rerender(state);
}

export let editPost = (text) =>{
    state.user.newTextPost = text;
    console.log(state);
    rerender(state);
}


let state = {
    user:{ post: [{text:'Розыгрышь 1млн долларов', id:1, like:1000}, {text:'Бургер макдокнак', id:2, like:569},
    {text:'Учусь на паре', id:3, like:1234}], newTextPost: ''},
    
    messages:{ mas: [{name:'Майк Тайсон', id:1}, {name:'Гульзира', id:2},
    {name:'Роберт Полсон', id:3},{name:'Рубен Гуд', id:4}],
     me: [{name:'Привет подпищеки1', id:1},{name:'Привет подпищеки2', id:2},
    {name:'Привет подпищеки3', id:3},{name:'Привет подпищеки4', id:4}]}}





export default state;