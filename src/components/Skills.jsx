// src/components/Skills.js
import React from "react";
import { Typography, Box, List, ListItem } from "@mui/material";

const Skills = () => (
  <Box sx={{ marginBottom: "20px" }}>
    <Typography variant="h5" component="h2" gutterBottom>
      Technical Skills
    </Typography>
    <List>
      <ListItem>proteus</ListItem>
      <ListItem>Kicad</ListItem>
      <ListItem>C++ basics</ListItem>
    </List>
  </Box>
);

export default Skills;
