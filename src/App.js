import React, { useState } from 'react';
import './App.css';
import Header from './components/Header';
import Search from './components/Search';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import Results from './components/Results';
function App() {
  const [searchTerm, setSearchTerm] = useState('');
  return (
    <div>
      <Header />
      <Search setSearchTerm={setSearchTerm} />
      <Results searchTerm={searchTerm} />
    </div>
  );
}
export default App;
