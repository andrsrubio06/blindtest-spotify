/*global swal*/

import React, { useEffect, useLayoutEffect } from 'react';
import logo from './logo.svg';
import loading from './loading.svg';
import './App.css';
import Sound from 'react-sound';
import Button from './Button';

import { useState } from 'react';

const apiToken = 'aqui el token';

function shuffleArray(array) {
  let counter = array.length;

  while (counter > 0) {
    let index = getRandomNumber(counter);
    counter--;
    let temp = array[counter];
    array[counter] = array[index];
    array[index] = temp;
  }

  return array;
}

/* Return a random number between 0 included and x excluded */
function getRandomNumber(x) {
  return Math.floor(Math.random() * x);
}

const App = () => {
  
  const [text, setText] = useState('');
  
  //useEffect(()=> setText('Bonjour'))

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">Welcome to my Blindtest</h1>
      </header>
      <div className="App-images">
           <p>Il va falloir modifier le code pour faire un vrai Blindtest !</p> 
           <button onClick={() => setText('Cliqué !')}>CLiquez moi !</button>
           <p>{text}</p>  
      </div>
      <div className="App-buttons">
      </div>
    </div>
  );
}

export default App;
