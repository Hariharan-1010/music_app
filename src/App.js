import React, {useState} from 'react';
import {Route, Routes} from 'react-router-dom';
import Header from './components/Header.jsx'
import Explore from './components/Explore.jsx';
import Search from './components/Search.jsx';
import Library from './components/Library.jsx';
import MyAccount from './components/MyAccount.jsx';

function App() {
  return (
    <div className='App'>
    <Header />
      <Routes>
        <Route path="/" element={<Explore />} />
        <Route path="/search" element={<Search />} />
        <Route path="/library" element={<Library />} />
        <Route path="/my_account" element={<MyAccount />} />
      </Routes>
    </div>
  );
}

export default App;
