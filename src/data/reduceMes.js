let reduceMes = (action, state)=>{
    if(action.type == 'addMes'){
        let newMes = {name: state.newTextMes, id: 5}
        state.me.unshift(newMes);
        state.newTextMes = '';
    }
    else if(action.type == 'editMes'){
        state.newTextMes = action.text;
    }

    return state
}

export let addMesAC = () =>{
    return{
        type:'addMes',
        id:1
    }
}

export let editMesAC = (me) =>{
    return{
        type:'editMes',
        text:me
    }
}

export default reduceMes