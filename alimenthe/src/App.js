import logo from './logo.svg';
import './App.css';
import React, {Fragment, useState }from "react"
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import axios from "axios"; 
import ButtonAppBar from './components/Appbar.js';
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import ToolBar from "@mui/material/Toolbar"
import Table from "@mui/material/Table"
import Home from "./places/HomePage.js"
import ProfilJardinier from "./places/ProfilJardinier.js"

const App = () =>  {
  return (
    <div className="App">
      <Router>
        <main>
          <nav>
            <AppBar>
              <ToolBar>
                <Button to="/" component={Link}>Home</Button>
                <Button to="/ProfilJardinier" component={Link}>
                  Profile des membres
                </Button>
              </ToolBar>
            </AppBar>
          </nav>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/ProfilJardinier" element={<ProfilJardinier/>}/>
          </Routes>
        </main>
      </Router>
    </div>
  );
}


export default App;
