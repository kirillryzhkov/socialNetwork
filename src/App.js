import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header.js';
import Menu from './components/menu/Menu.js';
import Profile from './components/content/Profile.js';
import Messages from './components/content/messages/Messages.js'
import {BrowserRouter, Route, Routes} from 'react-router-dom';

let post = [{text:'Розыгрышь 1млн долларов', id:1, like:1000}, {text:'Бургер макдокнак', id:2, like:569},
{text:'Учусь на паре', id:3, like:1234}]

let mas = [{name:'Майк Тайсон', id:1}, {name:'Гульзира', id:2},
{name:'Роберт Полсон', id:3},{name:'Рубен Гуд', id:4}]
let me = [{name:'Привет подпищеки1', id:1},{name:'Привет подпищеки2', id:2},
{name:'Привет подпищеки3', id:3},{name:'Привет подпищеки4', id:4}]



function App(props) {
  return (
    <div className="MyApp">
      <BrowserRouter>
      <Header/>
      <Menu/>

    <Routes>
      {/* <Route exact path='/' element={()=><Profile posts={post} />}/>
      <Route path='/profile' element={()=><Profile posts={post}/>}/>
      <Route path='/messages' element={()=><Messages messages={me} dialog={mas}/>}/> */}
    <Route exact path='/' element={<Profile newTextPost={props.state.user.newTextPost} editPost={props.editPost} addPost={props.addPost} posts={props.state.user.post} />}/>
    <Route path='/profile' element={<Profile newTextPost={props.state.user.newTextPost} editPost={props.editPost} addPost={props.addPost} posts={props.state.user.post}/>}/>
    <Route path='/messages' element={<Messages addMes={props.addMes} dialog={props.state.messages.mas} messages={props.state.messages.me}/>}/>
    </Routes>


       </BrowserRouter>

    </div>
  );
}

export default App;
