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
  const [lots, setLot] = useState([""]);
  const callSignUp = async () => {
    try {
      const result = await axios({
        method: "get",
        url: "http://localhost:3000/afficherLots",
      });
      setLot(result.data);
    } catch (e) {
      console.log(e);
    }
  };
  useEffect(() => {
    callSignUp();
  });
  const deleteLot = async (idLot) => {
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
          idLot,
        },
      });
    } catch (e) {
      alert("Cela ne marche pas");
      console.log(e);
    }
  };
  return (
    <Box container justify="center " sx={{ display: "flex", height: "100vh" }}>
      <Box sx={{ ml: "75vh", mt: "10%" }}>
        <Typography>Liste des lots</Typography>
        {Object.values(lots).map((unLot) => (
          <Paper sx={{ maxWidth: 345, mt: "10%", ml: "5%", height: "20vh" }}>
            <Card sx={{ position: "relative", height: "30vh", mt: "14vh" }}>
              <CardContent>
                <Typography>Nom: {unLot.nom}</Typography>
                <Typography>capacite: {unLot.capacite}</Typography>
              </CardContent>
            </Card>
          </Paper>
        ))}
      </Box>
    </Box>
  );
};
export default Ok;
