import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export default function ActionAreaCard() {
  return (
    <Card sx={{ maxWidth: 345, height: "80vh" }}>
      <Link to="/PagePlante">
        <CardActionArea sx={{ height: "80vh" }}>
          <CardMedia
            component="img"
            height="85%"
            image="https://panier-legumes.bio/wp-content/uploads/2017/04/paniers-legumes-bio-768x511.jpg"
            alt="Profile des jardiniers"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Ajout des plantes
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Ajout des plantes / Add plant
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
