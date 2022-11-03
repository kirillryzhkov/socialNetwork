import React from "react";
import Message from './message/Message.js';


function Messages(){
    return (<div className="messages">
    <Message message='привет как дела?' name='Майк Тайсон'/>
    <Message message='марс' name='Гульзира'/>
    <Message message='Кушаю кифси' name='Роберт Полсон'/>



</div>)
}

export default Messages;