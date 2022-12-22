let reduceProfile = (action, state)=>{
    if(action.type == 'addPost'){
        let newPost = {text: state.newTextPost, id: 4, like: 0}
        state.post.unshift(newPost);
        state.newTextPost = '';

    }
    else if(action.type == 'editPost'){
        state.newTextPost = action.text;

    }

    return state
}

export let addPostAC = () =>{
    return{
        type:'addPost',
        id:1
    }
}

export let editPostAC = (text) =>{
    return{
        type:'editPost',
        text:text
    }
}

export default reduceProfile