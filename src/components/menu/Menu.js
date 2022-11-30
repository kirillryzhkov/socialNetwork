import React from "react";
import '../../App.css';
import './menu.css';
import {Link} from 'react-router-dom';

function Menu(){
    return (<div className="menu">
        <Link to='/profile'>Профиль</Link>
        <Link to='/messages'>Сообщения</Link>
        <Link to='/users'>Пользователи</Link>
        <h2 className="friends">Друзья</h2>
        <Link>Евгений</Link>
        <Link>Арсений</Link>
        <Link>Дмитрий</Link>
    </div>)

}

export default Menu;