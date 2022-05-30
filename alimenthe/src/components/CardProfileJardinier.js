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
      <Link to="/ProfilJardinier">
        <CardActionArea sx={{ height: "80vh" }}>
          <CardMedia
            component="img"
            height="85%"
            image="https://img.freepik.com/photos-gratuite/jeune-jardinier-male-barbu-attrayant-joyeux-t-shirt-bleu-pantalon-sport-noir-souriant-travaillant-dans-jardin-plantant-pousses-pelle_176420-19955.jpg?w=2000"
            alt="Profile des jardiniers"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Profil des Jardiniers
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Aller vers la page de profil des jardiniers
            </Typography>
          </CardContent>
        </CardActionArea>
      </Link>
    </Card>
  );
}
