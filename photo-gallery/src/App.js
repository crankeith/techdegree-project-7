import React from 'react';
import './App.css';

import SearchForm from './components/SearchForm'
import Nav from './components/Nav'
import Gallery from './components/Gallery'

function App() {
  return (
    <div className="container">
      <SearchForm />
      <Nav />
      <Gallery />
    </div>
  );
}

export default App;
