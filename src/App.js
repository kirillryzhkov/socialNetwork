import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header.js';
import Menu from './components/menu/Menu.js';
import Profile from './components/content/Profile.js';
import Messages from './components/content/messages/Messages.js'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

let post = [{text:'Розыгрышь 1млн долларов', id:1, like:1000}, {text:'Бургер макдокнак', id:2, like:569},
{text:'Учусь на паре', id:3, like:1234}]


function App() {
  return (
    <div className="MyApp">
      <BrowserRouter>
      <Header/>
      <Menu/>

      <Route exact path='/' render={()=><Profile/>}/>
      <Route path='/profile' render={()=><Profile posts={post}/>}/>
      <Route path='/messages' render={()=><Messages/>}/>

      </BrowserRouter>

    </div>
  );
}

export default App;
