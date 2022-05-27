import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import {Link} from 'react-router-dom'

export default function AfficheListeAliMenthe() {
  return (
    <Card sx={{ maxWidth: 345 }}>
        <Link to="/GestPlante"></Link>
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image="https://bouffe-action.org/wp-content/uploads/jardin-petit3-1.jpg"
          alt="Liste des éléments généraux "
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Liste des membres et produits AliMenthe
          </Typography>
          <Typography variant="body2" color="text.secondary">
            Aller à la page de liste de AliMenthe
          </Typography>
        </CardContent>
      </CardActionArea>
        </Link>
    </Card>
  );
}
