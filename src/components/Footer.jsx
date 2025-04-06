import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import { Facebook, Twitter, YouTube, LinkedIn } from "@mui/icons-material";

const Footer = () => {
  return (
    <AppBar
      position="relative"
      sx={{
        position: "fixed",
        backgroundColor: "#F1FFFF",
        minHeight: "50px",
        top: "auto",
        bottom: 0,
        width: "100vw",
        padding: "10px 0",
      }}
    >
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ color: "black", textAlign: "center", fontSize: "0.9rem" }}
        >
          © 2025 Land Listing. All rights reserved.
        </Typography>
        <Box sx={{ ml: 2 }}>
          <IconButton
            sx={{ color: "#333", opacity: 0.6, "&:hover": { opacity: 1 } }}
          >
            <Facebook />
          </IconButton>
          <IconButton
            sx={{ color: "#333", opacity: 0.6, "&:hover": { opacity: 1 } }}
          >
            <Twitter />
          </IconButton>
          <IconButton
            sx={{ color: "#333", opacity: 0.6, "&:hover": { opacity: 1 } }}
          >
            <YouTube />
          </IconButton>
          <IconButton
            sx={{ color: "#333", opacity: 0.6, "&:hover": { opacity: 1 } }}
          >
            <LinkedIn />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
