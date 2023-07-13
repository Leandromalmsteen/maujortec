import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Topo from "./components/Topo";
import Home from './components/Home';
import Frontend from './components/Frontend';
import Programacao from './components/Programacao';
import Design from './components/Design';
import Catalogo from './components/Catalogo';
import './index.css';

class App extends Component {
  render() {
    return (
      <Router>
        <>
          <Topo />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/frontend" element={<Frontend />} />
            <Route path="/programacao" element={<Programacao />} />
            <Route path="/design" element={<Design />} />
            <Route path="/catalogo" element={<Catalogo />} />
          </Routes>
        </>
      </Router>
    )
  }
}

export default App;