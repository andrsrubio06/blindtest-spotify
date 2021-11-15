/*global swal*/

import React, { useEffect, useLayoutEffect } from 'react';
import logo from './logo.svg';
import loading from './loading.svg';
import './App.css';
import Sound from 'react-sound';
import Button from './Button';

import { useState } from 'react';

const apiToken = 'BQCtwX14ffiicl845TkUMo7EuBmHCDWF7pIN-9bN3DBiUlh15YDI2a93lihgn77w2tEoh9v1iW3vm9ykCDW-mfNfnCG2orCIjBheaC42y6TtSexfaFoovz6FiV_qV2C_ZiEMKy1M2CZ5NC6GgZsI7tJUgfFo7y8COH08I1C0Kpm8';

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
  
  const [text, setText] = useState('Click here');
  
  const [textConsole, setTextConsole] = useState('Réponse reçue ! Voilà ce que j\'ai reçu :');
  //useEffect(()=> setText('Bonjour'))



  fetch('https://api.spotify.com/v1/me/tracks', {
  method: 'GET',
  headers: {
   Authorization: 'Bearer ' + apiToken,
  },
  })
  .then(response => response.json())
  .then((data) => {
    console.log(textConsole, data);
  })


  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo"/>
        <h1 className="App-title">Welcome to my Blindtest</h1>
      </header>
      <div className="App-images">
           <p>Il va falloir modifier le code pour faire un vrai Blindtest !</p> 
           <button onClick={()=> setTextConsole('someone clicked')}>CLiquez moi !</button> 
           <p>{text}</p>  
      </div>
      <div className="App-buttons">
      </div>
    </div>
  );
}

export default App;
