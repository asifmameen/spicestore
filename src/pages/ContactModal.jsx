import { Modal, Box, Typography, Button } from "@mui/material";
import { Phone } from "@mui/icons-material";
import { motion } from "framer-motion";

const ContactModal = ({ open, handleClose }) => {
  return (
    <Modal open={open} onClose={handleClose}>
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={open ? { opacity: 1, scale: 1 } : {}}
        exit={{ opacity: 0, scale: 0.85 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        style={{
          position: "absolute",
          top: "30%",
          left: "40%",
          transform: "translate(-50%, -50%)",
          width: "90%",
          maxWidth: "400px",
        }}
      >
        <Box
          sx={{
            bgcolor: "#fff",
            boxShadow: "0 8px 30px rgba(0,0,0,0.2)",
            p: 4,
            borderRadius: 3,
            textAlign: "center",
          }}
        >
          <Typography
            variant="h5"
            fontWeight="bold"
            sx={{ mb: 2, color: "#4B0082" }}
          >
            Contact Us
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 2,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              fontSize: "16px",
              color: "#333",
            }}
          >
            📧 Email:{" "}
            <strong style={{ color: "#000" }}>
              support@tranquilterrains.com
            </strong>
          </Typography>

          <Typography
            variant="body1"
            sx={{
              mb: 3,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 1,
              fontSize: "16px",
              color: "#333",
            }}
          >
            <Phone sx={{ fontSize: 22, color: "#4B0082" }} />
            Phone: <strong style={{ color: "#000" }}>+91 6238591308</strong>
          </Typography>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ display: "inline-block" }}
          >
            <Button
              variant="contained"
              color="primary"
              onClick={handleClose}
              sx={{
                px: 4,
                py: 1,
                borderRadius: 2,
                fontWeight: "bold",
              }}
            >
              Close
            </Button>
          </motion.div>
        </Box>
      </motion.div>
    </Modal>
  );
};

export default ContactModal;
