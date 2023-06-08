import React from 'react'
import { HashRouter, Route, Routes } from 'react-router-dom'


import './App.css';
import { Investments } from './pages/investments';
import { Main } from './pages/main';
import Portfolio from './pages/portfolio'


const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" Component={Main}/>
        <Route path="/portfolio" Component={Portfolio}/>
        <Route path="/investments" Component={Investments}/>
      </Routes>
    </HashRouter>
  )
}

export default App;
