import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import React, { Fragment, useState, useEffect } from "react";
import axios from "axios";
import Box from "@mui/material/Box";

const AddMembre = () => {
  const [nom, setNom] = useState("");
  const [joursDeCulture, setJoursDeCulture] = useState("");
  const callSignUp = async (nom, joursDeCulture) => {
    try {
      const result = await axios({
        method: "post",
        url: "http://localhost:3000/addPlantes",
        data: {
          nom: nom,
          joursDeCulture: joursDeCulture,
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
        <label>Nom de la plante</label>
      </Box>
      <Box container justify="center">
        <TextField
          label="Nom de la plante / Plant name "
          onChange={(event) => setNom(event.target.value)}
        />
      </Box>
      <Box container justify="center">
        <label>Jours de culture</label>
      </Box>
      <Box container justify="center">
        <TextField
          label="Jours de culture / Days of culture"
          onChange={(event) => setJoursDeCulture(event.target.value)}
        />
      </Box>
      <Box container justify="center">
        <Button onClick={() => callSignUp(nom, parseInt(joursDeCulture))}>
          Ajouter Quête
        </Button>
      </Box>
    </Box>
  );
};

export default AddMembre;
