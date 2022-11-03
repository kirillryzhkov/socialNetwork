import React from "react";
import '../../App.css';
import './menu.css';
import {NavLink} from 'react-router-dom';

function Menu(){
    return (<div className="menu">
        <NavLink to='/profile'>Профиль</NavLink>
        <NavLink to='/messages'>Сообщения</NavLink>
        <NavLink to='/users'>Пользователи</NavLink>
    </div>)

}

export default Menu;