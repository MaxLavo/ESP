import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';


export default function AfficherCarteJardin() {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://www.gammvert.fr/conseils/sites/default/files/styles/main_image/public/2019-02/AdobeStock_87742416-potager.jpg?itok=JE7RJwb7"
          alt="Liste des Jardins  "
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Liste des jardins 
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Aller vers la page de la liste des jardins
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
