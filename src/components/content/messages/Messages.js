import React from "react";
import Message from './message/Message.js';
import Dialog from './message/Dialog.js';

let mas = [{name:'Майк Тайсон', id:1}, {name:'Гульзира', id:2},
{name:'Роберт Полсон', id:3},{name:'Рубен Гуд', id:4}]
let me = [{name:'Привет подпищеки1', id:1},{name:'Привет подпищеки2', id:2},
{name:'Привет подпищеки3', id:3},{name:'Привет подпищеки4', id:4}]


function Messages(){
    return (<div className="messages">
    <div className="dialog">
        {/* <Message id={mas[0].id} name={mas[0].name}/>
        <Message id={mas[1].id} name={mas[1].name}/>
        <Message id={mas[2].id} name={mas[2].name}/> */}
        {mas.map((e)=><Message id={e.id} name={e.name}/>)}
    </div>

    <div className="text-mes">
        {/* <Dialog id={me[0].id} message={me[0].name}></Dialog>
        <Dialog id={me[1].id} message={me[1].name}></Dialog>
        <Dialog id={me[2].id} message={me[2].name}></Dialog>
        <Dialog id={me[3].id} message={me[3].name}></Dialog> */}
        {me.map((e)=><Dialog id={e.id} message={e.name}/>)}

        <div className="send">
            <input placeholder="Написать сообщение"/>
            <button className="sendbtn">Отправить</button>
        </div>
    </div>






</div>)
}

export default Messages;