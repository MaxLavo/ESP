
import * as React from 'react';
import { create } from "@mui/material/styles/createTransitions"
import {Box, ThemeProvider, createTheme} from "@mui/system"
import Button from "@mui/material/Button";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Icon from "@mui/material/Icon";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete"
import { CardActionArea, IconButton, Paper } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import WeatherBoards from "../components/weather.js"
import Delete from '@mui/icons-material/Delete';

 const ok = () => {
     return(
    <Box sx={{display: 'flex', height:"100vh"}}>

            <Card sx={{ maxWidth: 345, mt:"10%", ml:"5%" ,height:"80vh"}}>
                <CardActionArea sx={{position: "relative", height:"75vh"}}>
                <CardMedia
                    component="img"
                    height="90%"
                    image="https://img.freepik.com/photos-gratuite/jeune-jardinier-male-barbu-attrayant-joyeux-t-shirt-bleu-pantalon-sport-noir-souriant-travaillant-dans-jardin-plantant-pousses-pelle_176420-19955.jpg?w=2000"
                    alt="Profile des jardiniers"
                    />
                    <CardContent sx={{position:"relative", backgroundColor:"transparent"}}>
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
            <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', mt:"10%", ml: "5%"}}>
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Brunch this weekend?"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Ali Connors
              </Typography>
              <IconButton>
                <DeleteIcon/>
              </IconButton>
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemText
          primary="Summer BBQ"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                to Scott, Alex, Jennifer
              </Typography>
              <IconButton>
                  <DeleteIcon/>
              </IconButton>
            </React.Fragment>
          }
        />
        </ListItem>
        <Divider variant="inset" component="li" />
            <ListItem alignItems="flex-start">
        <ListItemText
          primary="Oui Oui"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Sandra Adams
              </Typography>
              <IconButton>
                <DeleteIcon/>
              </IconButton>
            </React.Fragment>
          }
        />
        </ListItem>
        </List>
        <Button>
          ok
        </Button>
        <Button>
          non
        </Button>
    </Box>)
}
// NE PAS OUBLIER FAIRE LE <WeatherBoards/> 

export default ok