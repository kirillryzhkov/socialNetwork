import logo from './logo.svg';
import './App.css';
import Header from './components/header/Header.js';
import Menu from './components/menu/Menu.js';
import Content from './components/content/Content.js';

function App() {
  return (
    <div className="MyApp">
      <Header/>
      <Menu/>
      <Content/>

    </div>
  );
}

export default App;
