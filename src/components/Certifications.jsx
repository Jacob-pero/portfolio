// src/components/Certifications.js
import React from "react";
import { Typography, Box, List, ListItem } from "@mui/material";

const Certifications = () => (
  <Box sx={{ marginBottom: "20px" }}>
    <Typography variant="h5" component="h2" gutterBottom>
      Certifications
    </Typography>
    <List>
      <ListItem>Battery simscape onramp (Matlab, 2024)</ListItem>
      <ListItem>Fundamentals of EV (UDEMY, 2024)</ListItem>
      <ListItem>ESO training level 3E ( 2024)</ListItem>
    </List>
  </Box>
);

export default Certifications;
