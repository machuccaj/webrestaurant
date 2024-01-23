// src/App.js

import React from 'react';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import MainImage from './components/MainImage/MainImage';
import ActionButtons from './components/ActionButtons/ActionButtons';
import PlaceholderText from './components/PlaceholderText/PlaceholderText';
import SearchBar from './components/SearchBar/SearchBar';
import SideDishes from './components/SideDishes/SideDishes';

function App() {
  return (
    <div className="App">
      <NavBar />
      <MainImage />
      <ActionButtons />
      <PlaceholderText />
      <SearchBar />
      <SideDishes />
    </div>
  );
}

export default App;
