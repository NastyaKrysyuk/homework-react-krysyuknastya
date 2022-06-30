import React from 'react';
import Books from './books';
import Characters from './characters';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import CharactersF from './characters/characters-f';


function App() {
  return (
    <div className='wrapper'>
      {/* <Books /> */}
      <CharactersF />
    </div >
  )

}
export default App;
