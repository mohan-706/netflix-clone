import React from 'react';
import {Route , Routes} from 'react-router-dom';
import './App.css';
import HomeScreen from './HomeScreen';
import Series from './Series'; 
import Movie from './Movie';

function App() {
  return (
    <div className="app">
      <Routes>
        <Route path='/' element={<HomeScreen/>}/>
        <Route path='/Series' element={<Series/>}/>
        <Route path='/Movie' element={<Movie/>}/>
      </Routes>
      
    </div>
  );
}

export default App;
