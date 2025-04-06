import { Modal, Box, Typography, Button } from "@mui/material";
import { Phone } from "@mui/icons-material";
import { useState } from "react";

const ContactModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 500,
          bgcolor: "white",
          boxShadow: 24,
          p: 4,
          borderRadius: 2,
          textAlign: "center",
        }}
      >
        <Typography variant="h5" fontWeight="bold" sx={{ mb: 2 }}>
          Contact Us
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1 }}
        >
          📧 Email: <strong>sunstarconnect@gmail.com</strong>
        </Typography>
        <Typography
          variant="body1"
          sx={{ mb: 2, display: "flex", alignItems: "center", gap: 1 }}
        >
          <Phone sx={{ fontSize: 24, color: "black" }} />
          <span>
            Phone: <strong>+916238591308</strong>
          </span>
        </Typography>
        <Button variant="contained" color="primary" onClick={handleClose}>
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default ContactModal;
