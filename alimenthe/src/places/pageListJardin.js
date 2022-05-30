import React, { useEffect, useState } from "react";
import { create } from "@mui/material/styles/createTransitions";
import { Box, ThemeProvider, createTheme } from "@mui/system";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Icon from "@mui/material/Icon";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";
import ModifyIcon from "@mui/icons-material/Build";
import { CardActionArea, IconButton, Paper } from "@mui/material";
import Delete from "@mui/icons-material/Delete";
import axios from "axios";
import { Link } from "react-router-dom";
import { TextField } from "@mui/material";

const Ok = () => {
  const [jardin, setJardin] = useState([""]);
  const callSignUp = async () => {
    try {
      const result = await axios({
        method: "get",
        url: "http://localhost:3000/afficherJardin",
      });
      setJardin(result.data);
    } catch (e) {
      console.log(e);
    }
  };
  const deleteJardin = async (idJardin) => {
    try {
      const result = await axios({
        method: "delete",
        url: "http://localhost:3000/DeleteJardin",
        header: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods":
            "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers":
            "Origin, Content-Type, X-Auth-Token, Accept",
        },
        data: {
          idJardin,
        },
      });
    } catch (e) {
      alert("Cela ne marche pas");
      console.log(e);
    }
  };
  const [nom, setNom] = useState("");
  const [capacite, setCapacite] = useState("");
  const [idJardin, setIdJardin] = useState("");
  const addLot = async (nom, capacite, idJardin) => {
    try {
      const result = await axios({
        method: "post",
        url: "http://localhost:3000/addLot",
        data: {
          nom: nom,
          capacite: capacite,
          idJardin: idJardin,
        },
      });
      console.log(result.status);
    } catch (e) {
      alert("Cela ne marche pas ");
      console.log(e);
    }
  };

  useEffect(() => {
    callSignUp();
  });
  return (
    <Box container justify="center " sx={{ display: "flex", height: "100vh" }}>
      <Box sx={{ ml: "65vh", mt: "10%" }}>
        <Typography>Liste des Jardins</Typography>
        {Object.values(jardin).map((unJardin) => (
          <Paper sx={{ maxWidth: 345, ml: "5%", height: "20vh" }}>
            <Card sx={{ position: "relative", height: "35vh", mt: "17vh" }}>
              <CardContent>
                <Typography>Nom du Jardin: {unJardin.nom}</Typography>
                <Typography>Adresse du Jardin: {unJardin.adresse}</Typography>
                <label>Nom du lot à ajouter</label>
                <TextField
                  label="Nom du lot / Lot Name"
                  onChange={(event) => setNom(event.target.value)}
                />
                <br></br>
                <label>Capacité de membre du lot</label>
                <TextField
                  label="Capacité du lot / Lot capacity"
                  onChange={(event) => setCapacite(event.target.value)}
                  type="text"
                  inputProps={{
                    inputMode: "numeric",
                    pattern: "/^-?d+(?:.d+)?$/g",
                  }}
                ></TextField>
                <Button
                  onClick={() => {
                    setIdJardin(jardin.idJardin);
                    addLot(nom, capacite, idJardin);
                  }}
                >
                  Ajouter un lot
                </Button>
                <Button
                  onClick={() => {
                    deleteJardin(unJardin.idJardin);
                  }}
                >
                  Détruire le jardin
                </Button>
              </CardContent>
            </Card>
            <br></br>
          </Paper>
        ))}
      </Box>
      <Link to="/ListLot">
        <Card sx={{ maxWidth: 345, mt: "10%", ml: "25%", height: "80vh" }}>
          <CardActionArea sx={{ position: "relative", height: "75vh" }}>
            <CardMedia
              component="img"
              height="90%"
              image="https://img.freepik.com/photos-gratuite/jeune-jardinier-male-barbu-attrayant-joyeux-t-shirt-bleu-pantalon-sport-noir-souriant-travaillant-dans-jardin-plantant-pousses-pelle_176420-19955.jpg?w=2000"
              alt="Profile des jardiniers"
            />
            <CardContent
              sx={{ position: "relative", backgroundColor: "transparent" }}
            >
              <Typography gutterBottom variant="h5" component="div">
                Lister les lots
              </Typography>
              <Typography variant="body2" color="text.secondary">
                list the lots
              </Typography>
              <Icon>
                <AddIcon></AddIcon>
              </Icon>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Box>
  );
};
export default Ok;
