import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function AfficheCartePlantes() {
  return (
    <Card sx={{ maxWidth: 345, height:"75vh"}}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://panier-legumes.bio/wp-content/uploads/2017/04/paniers-legumes-bio-768x511.jpg"
          alt="Liste Des Plantes "
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Liste des plantes
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Aller vers la page de la liste des plantes
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
