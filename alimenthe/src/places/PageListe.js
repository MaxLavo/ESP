import * as React from "react";
import { Box } from "@mui/material";
import AfficheCartePlantes from "../components/CardListPlante.js";
import AfficherCarteListJardin from "../components/CardListJardin.js";
import AfficheListeAliMenthe from "../components/CardListe";
import ActionAreaCard from "../components/CardProfileJardinier.js";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: "5%",
        height: "80vh",
      }}
    >
      <AfficheCartePlantes></AfficheCartePlantes>
      <AfficherCarteListJardin></AfficherCarteListJardin>
    </Box>
  );
};

export default Home;
