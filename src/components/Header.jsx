// src/components/Header.js
import React from "react";
import { Typography, Link } from "@mui/material";

const Header = () => (
  <header>
    <Typography variant="h3" component="h1" gutterBottom>
      Jacob perumattil
    </Typography>
    <Typography variant="body1">Phone: +91 8452872336</Typography>
    <Typography variant="body1">Email: <Link href="mailto:jacob7perumattil@gmail.com">jacob7perumattil@gmail.com</Link></Typography>
    <Typography variant="body1">
      
    </Typography>
  </header>
);

export default Header;
