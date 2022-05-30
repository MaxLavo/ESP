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

const Ok = () => {
  const [profile, setProfile] = useState([""]);
  const callSignUp = async () => {
    try {
      const result = await axios({
        method: "get",
        url: "http://localhost:3000/afficherMembres",
      });
      setProfile(result.data);
    } catch (e) {
      console.log(e);
    }
  };
  const deleteMembre = async (idMembre) => {
    try {
      const result = await axios({
        method: "delete",
        url: "http://localhost:3000/DeleteMembre",
        header: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods":
            "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers":
            "Origin, Content-Type, X-Auth-Token, Accept",
        },
        data: {
          idMembre,
        },
      });
    } catch (e) {
      alert("Cela ne marche pas");
      console.log(e);
    }
  };

  useEffect(() => {
    callSignUp();
  });

  return (
    <Box sx={{ display: "flex", height: "100vh" }}>
      <Link to="/AddMembre">
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
                Inscription des membres
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Ajouter des membres
              </Typography>
              <Icon>
                <AddIcon></AddIcon>
              </Icon>
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
      <Box sx={{ mt: "10%" }}>
        {Object.values(profile).map((unMembre) => (
          <Paper sx={{ maxWidth: 345, mt: "10%", ml: "5%", height: "20vh" }}>
            <Card sx={{ position: "relative", height: "20vh" }}>
              <CardContent>
                <Typography>Nom: {unMembre.prenom}</Typography>
                <Typography>Prénom: {unMembre.nom}</Typography>
                <Typography>Adresse: {unMembre.adresse}</Typography>
              </CardContent>
              <Button onClick={() => deleteMembre(unMembre.idMembre)}>
                Retirer le membre
              </Button>
            </Card>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};
// NE PAS OUBLIER FAIRE LE <WeatherBoards/>

export default Ok;
