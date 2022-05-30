import logo from "./logo.svg";
import "./App.css";
import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import axios from "axios";
import ButtonAppBar from "./components/Appbar.js";
import AppBar from "@mui/material/AppBar";
import Button from "@mui/material/Button";
import ToolBar from "@mui/material/Toolbar";
import Table from "@mui/material/Table";
import Home from "./places/HomePage.js";
import ProfilJardinier from "./places/ProfilJardinier.js";
import AddMembre from "./places/addMembrePage.js";
import PagePlante from "./places/PagePlante.js";
import PageJardin from "./places/PageJardin.js";
import PageListe from "./places/PageListe.js";
import PageListPlante from "./places/pageListPlante.js";
import PageListJardin from "./places/pageListJardin.js";
import PageListLot from "./places/pageListLot.js";
const App = () => {
  return (
    <div className="App">
      <Router>
        <main>
          <nav>
            <AppBar>
              <ToolBar>
                <Button
                  to="/"
                  component={Link}
                  color="inherit"
                  sx={{ ml: "50vh" }}
                >
                  Home
                </Button>
                <Button to="/ProfilJardinier" component={Link} color="inherit">
                  Profile des membres
                </Button>
                <Button to="/PagePlante" component={Link} color="inherit">
                  Ajout Plante
                </Button>
                <Button to="/PageJardin" component={Link} color="inherit">
                  Ajout Jardins
                </Button>
                <Button to="/ListePlante" component={Link} color="inherit">
                  Liste générale alimenthe
                </Button>
              </ToolBar>
            </AppBar>
          </nav>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/ProfilJardinier" element={<ProfilJardinier />} />
            <Route path="/AddMembre" element={<AddMembre />} />
            <Route path="/PagePlante" element={<PagePlante />} />
            <Route path="/PageJardin" element={<PageJardin />} />
            <Route path="/ListePlante" element={<PageListe />} />
            <Route path="/PageListPlante" element={<PageListPlante />} />
            <Route path="/PageListJardin" element={<PageListJardin />} />
            <Route path="/Listlot" element={<PageListLot />} />
          </Routes>
        </main>
      </Router>
    </div>
  );
};

export default App;
