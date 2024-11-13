// src/components/Projects.js
import React from "react";
import { Typography, Box, List, ListItem } from "@mui/material";

const Projects = () => (
  <Box sx={{ marginBottom: "20px" }}>
    <Typography variant="h5" component="h2" gutterBottom>
      Projects
    </Typography>
    <List>
      <ListItem><strong>Smart blind stick </strong></ListItem>
      <ListItem><strong>HIGH VOLTAGE INDICATOR CIRCUIT </strong></ListItem>
    </List>
  </Box>
);

export default Projects;
