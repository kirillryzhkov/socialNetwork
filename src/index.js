import state from './data/State.js';
// import { rerender } from './render.js';


// rerender(state);


import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import storage from './data/State.js';


export let rerender = (state) => {
  const root = ReactDOM.createRoot(document.getElementById('root'));
  root.render(
    <React.StrictMode>
      <App state={storage.getState()} dispatch={storage.dispatch.bind(storage)}/>
    </React.StrictMode>
  );
}
rerender(storage.getState());

storage.spec(rerender);
{/* <App state={storage.getState()} addPost={storage.addPost.bind(storage)} addMes={storage.addMes.bind(storage)} editPost={storage.editPost.bind(storage)}/> */}
// диспатч в остальные файлы

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();