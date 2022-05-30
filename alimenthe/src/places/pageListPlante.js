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
  const [plantes, setPlante] = useState([""]);
  const callSignUp = async () => {
    try {
      const result = await axios({
        method: "get",
        url: "http://localhost:3000/afficherPlantes",
      });
      setPlante(result.data);
    } catch (e) {
      console.log(e);
    }
  };
  const deletePlante = async (idPlante) => {
    try {
      const result = await axios({
        method: "delete",
        url: "http://localhost:3000/DeletePlante",
        header: {
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Methods":
            "GET, POST, PATCH, PUT, DELETE, OPTIONS",
          "Access-Control-Allow-Headers":
            "Origin, Content-Type, X-Auth-Token, Accept",
        },
        data: {
          idPlante,
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
    <Box container justify="center " sx={{ display: "flex", height: "100vh" }}>
      <Box sx={{ ml: "75vh", mt: "10%" }}>
        <Typography>Liste des Plantes</Typography>
        {Object.values(plantes).map((unePlante) => (
          <Paper sx={{ maxWidth: 345, mt: "10%", ml: "5%", height: "20vh" }}>
            <Card sx={{ position: "relative", height: "20vh" }}>
              <CardContent>
                <Typography>Nom: {unePlante.nom}</Typography>
                <Typography>
                  Jours de culture: {unePlante.joursDeCulture}
                </Typography>
                <Typography>{unePlante.idPlante}</Typography>
              </CardContent>
            </Card>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};
export default Ok;
