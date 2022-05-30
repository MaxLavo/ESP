import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { Fragment, useState } from "react";
import axios from "axios";
import Box from "@mui/material/Box";

const AddJardin = () => {
  const [nom, setNom] = useState("");
  const [adresse, setAdresse] = useState("");
  const callSignUp = async (nom, adresse) => {
    try {
      const result = await axios({
        method: "post",
        url: "http://localhost:3000/addJardin",
        data: {
          nom: nom,
          adresse: adresse,
        },
      });
      console.log(result.status);
    } catch (e) {
      alert("Cela ne marche pas ");
      console.log(e);
    }
  };

  return (
    <Box sx={{ mt: "30vh" }}>
      <Box container justify="center">
        <label>Nom du jardin</label>
      </Box>
      <Box container justify="center">
        <TextField
          label="Nom du jardin / Garden name "
          onChange={(event) => setNom(event.target.value)}
        />
      </Box>
      <Box container justify="center">
        <label>Adresse du jardin</label>
      </Box>
      <Box container justify="center">
        <TextField
          label="Adresse du jardin / Garden address"
          onChange={(event) => setAdresse(event.target.value)}
        />
      </Box>
      <Box container justify="center">
        <Button onClick={() => callSignUp(nom, adresse)}>
          Ajouter un jardin
        </Button>
      </Box>
    </Box>
  );
};

export default AddJardin;
