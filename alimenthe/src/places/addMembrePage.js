import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { Fragment, useState } from "react";
import axios from "axios";

import Box from "@mui/material/Box";

const AddMembre = () => {
  const [nom, setNom] = useState("");
  const [prenom, setPrenom] = useState("");
  const [adresse, setAdresse] = useState("");
  const [password, setPassword] = useState("");
  const callSignUp = async (prenom, nom, adresse, password) => {
    try {
      const result = await axios({
        method: "post",
        url: "http://localhost:3000/addMembres",
        data: {
          prenom: prenom,
          nom: nom,
          adresse: adresse,
          motDePasse: password,
        },
      });
      console.log(result.status);
    } catch (e) {
      alert("Cela ne marche pas ");
      console.log(e);
    }
  };

  const deleteMembre = async (idMembre) => {
    try {
      const result = await axios({
        method: "post",
        url: "http://localhost/DeleteMembre",
        data: {
          idMembre,
        },
      });
    } catch (e) {
      alert("Cela ne marche pas");
      console.log(e);
    }
  };
  return (
    <Box sx={{ mt: "30vh" }}>
      <Box container justify="center">
        <label>Prénom du membre</label>
      </Box>
      <Box container justify="center">
        <TextField
          label="Prénom / prename"
          onChange={(event) => setPrenom(event.target.value)}
        />
      </Box>
      <Box container justify="center">
        <label>Nom du membre</label>
      </Box>
      <Box container justify="center">
        <TextField
          label="Nom / Name"
          onChange={(event) => setNom(event.target.value)}
        />
      </Box>
      <Box container justify="center">
        <label>Adresse du membre</label>
      </Box>
      <Box container justify="center">
        <TextField
          label="adresse / address"
          onChange={(event) => setAdresse(event.target.value)}
        />
      </Box>
      <Box container justify="center">
        <label>Mot de Passe</label>
      </Box>
      <Box container justify="center">
        <TextField
          label="Mot de passe / Password"
          onChange={(event) => setPassword(event.target.value)}
        />
      </Box>
      <Box container justify="center">
        <Button onClick={() => callSignUp(prenom, nom, adresse, password)}>
          Ajouter Membre
        </Button>
      </Box>
    </Box>
  );
};

export default AddMembre;
