import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export default function AfficheListeAliMenthe() {
  return (
    <Card sx={{ maxWidth: 345, height: "80vh" }}>
      <Link to="/ListePlante">
        <CardActionArea sx={{ height: "80vh" }}>
          <CardMedia
            component="img"
            height="85%"
            image="https://bouffe-action.org/wp-content/uploads/jardin-petit3-1.jpg"
            alt="Liste des éléments généraux "
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Liste générale
            </Typography>
            <Typography variant="body2" color="text.secondary">
              General list
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
