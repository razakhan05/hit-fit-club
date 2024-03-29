import React from "react";
import { Box, Typography } from "@mui/material";

const Footer = () => (
  <Box mt="80px" bgcolor="black">
    <Typography
    className="footer"
      color={"gray"}
      variant="h5"
      sx={{ fontSize: { lg: "15px", xs: "8px" } }}
      mt="41px"
      textAlign="center"
      p="10px"
    >
      Made with ❤️ by Raza Khan
    </Typography>
  </Box>
);

export default Footer;
