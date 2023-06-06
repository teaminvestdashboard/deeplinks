import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'


import './App.css';
import { Investments } from './pages/investments';
import Main from './pages/main'


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={Main}/>
        <Route path="/investments" Component={Investments}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App;
