import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header.js';
import Menu from './components/menu/Menu.js';
import Content from './components/content/Content.js';
import Messages from './components/content/messages/Messages.js'
import {BrowserRouter, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <div className="MyApp">
      <BrowserRouter>
      <Header/>
      <Menu/>

      <Route path='/profile' component={Content}/>
      <Route path='/messages' component={Messages}/>

      </BrowserRouter>

    </div>
  );
}

export default App;
