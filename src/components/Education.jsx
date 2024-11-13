// src/components/Education.js
import React from "react";
import { Typography, Box, List, ListItem } from "@mui/material";

const Education = () => (
  <Box sx={{ marginBottom: "20px" }}>
    <Typography variant="h5" component="h2" gutterBottom>
      Education
    </Typography>
    <List>
      <ListItem>Secondary School Certificate, don bosco high school, 2020</ListItem>
      <ListItem>N.L college of higher secondary eucation, 2020-2022</ListItem>
      <ListItem>B.Sc. in Electronics and Computer Science, Fr. Conceicao Rodrigues College of Engineering, 2022-2026</ListItem>
    </List>
  </Box>
);

export default Education;
