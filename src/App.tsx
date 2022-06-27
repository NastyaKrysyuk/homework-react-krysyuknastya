import React from 'react';
import Books from './books';
import Characters from './characters';
import './App.css';
import { Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <div className='wrapper'>
      <Books />
    <Characters/>
    <Button >GET</Button>
    </div >
  )
}

export default App;
