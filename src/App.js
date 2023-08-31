import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import FormValidation from './login';
import Dash from './Dash';

export default function App(){
  return(<>
  <BrowserRouter>
  <Routes>
    <Route path='/'/>
    <Route index element={<FormValidation/>}/>
    <Route path='/dash' element={<Dash/>}/>
  </Routes>
  </BrowserRouter>
  </>)
  
}