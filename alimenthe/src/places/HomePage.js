import * as React from 'react';
import { Box } from '@mui/material';
import AfficheCartePlantes from '../components/CardPlantesDisponibles.js'
import AfficherCarteJardin from '../components/CardJardins.js'
import AfficheListeAliMenthe from '../components/CardListe';
import ActionAreaCard from '../components/CardProfileJardinier.js'
const Home = () => {
    return(
    <Box sx={{ display: 'flex', justifyContent: 'center', mt:"5%",height:"80vh" } }>
            <ActionAreaCard></ActionAreaCard>
            <AfficheCartePlantes></AfficheCartePlantes>
            <AfficherCarteJardin></AfficherCarteJardin>
            <AfficheListeAliMenthe></AfficheListeAliMenthe>
    </Box>
    );
    }

export default Home 