import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import FormComponent from './components/form';
import CharactersF from './characters/characters-f';
import Books from "./books";
import Header from "./components/header";
import AppRouting from "./routing/routes";
import MyProvider from "./context/provider";
import { Button } from "react-bootstrap";



function App() {
  
  return (
      <div className='wrapper main'>
        <MyProvider>
          <BrowserRouter>
            <Header/>
            <AppRouting/>
          </BrowserRouter>
        </MyProvider>
      </div >
  )

}
export default App;
