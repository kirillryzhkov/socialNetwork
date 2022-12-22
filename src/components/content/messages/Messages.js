import React from "react";
import Message from './message/Message.js';
import Dialog from './message/Dialog.js';
import {editMesAC, addMesAC} from '../../../data/reduceMes.js';

let mas = [{name:'Майк Тайсон', id:1}, {name:'Гульзира', id:2},
{name:'Роберт Полсон', id:3},{name:'Рубен Гуд', id:4}]
let me = [{name:'Привет подпищеки1', id:1},{name:'Привет подпищеки2', id:2},
{name:'Привет подпищеки3', id:3},{name:'Привет подпищеки4', id:4}]

let textMes = React.createRef();


function Messages(props){
    
    let putMes = () => {
        props.dispatch(addMesAC());
        // props.addMes(textMes.current.value);
    }
    let editMes = () => {
        props.dispatch(editMesAC(textMes.current.value));
    }
    return (<div className="messages">
    <div className="dialog">
        {/* <Message id={mas[0].id} name={mas[0].name}/>
        <Message id={mas[1].id} name={mas[1].name}/>
        <Message id={mas[2].id} name={mas[2].name}/> */}
        {props.messages.mas.map((e)=>{
            console.log(props.id);
            if(props.id == 0){
                return(<Message id={e.id} name={e.name}/>)
            }
            else{
                if(e.id == props.id){
                    return(<Message id={e.id} name={e.name}/>)
                }
            }
        })}
        

    </div>

    <div className="text-mes">
        {/* <Dialog id={me[0].id} message={me[0].name}></Dialog>
        <Dialog id={me[1].id} message={me[1].name}></Dialog>
        <Dialog id={me[2].id} message={me[2].name}></Dialog>
        <Dialog id={me[3].id} message={me[3].name}></Dialog> */}


        <div className="send">
            <input ref={textMes} placeholder="Написать сообщение" value={props.newTextMes} onChange={editMes}/>
            <button onClick={putMes} className="sendbtn">Отправить</button>
        </div>

            {props.messages.me.map((e)=>{
            if(props.id == 0){
                return(<Dialog id={e.id} message={e.name}/>)
            }
            else{
                if(e.id == props.id){
                    return(<Dialog id={e.id} message={e.name}/>)
                }
            }
        })}
        
    </div>
    






</div>)
}

export default Messages;