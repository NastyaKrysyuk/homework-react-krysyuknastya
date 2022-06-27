import React from 'react';
import Books from './books';
import Characters from './characters';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className='wrapper'>
      <Books />
      <Characters />
    </div >
  )

}
export default App;
