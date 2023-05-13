import React from 'react';
import { Route , Routes } from 'react-router-dom';
import './App.css';
import Soil from './Componets/Soil';
import Home from './Componets/Home';
import Water from './Componets/Water';
import Air from './Componets/Air';
import Noise from './Componets/Noise';
function App() {
  return (
    <>
    <Routes>
    <Route path='/' Component={Home}/>
    <Route path='/soil' Component={Soil}/>
    <Route path='/water' Component={Water}/>
    <Route path='/air' Component={Air}/>
    <Route path='/noise' Component={Noise}/>

    </Routes>
    </>
  );
}

export default App;
