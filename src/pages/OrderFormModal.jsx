import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Box,
  Modal,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  IconButton,
} from "@mui/material";
import { Add, Remove, Close } from "@mui/icons-material";
import emailjs from "emailjs-com";

const OrderFormModal = ({ open, handleClose, selectedSpice }) => {
  const initialState = {
    name: "",
    email: "",
    phone: "",
    address: "",
    spice: "",
    quantity: "50",
    notes: "",
  };

  const [formData, setFormData] = useState(initialState);
  const [submitting, setSubmitting] = useState(false);

  const spices = ["Cardamom", "Vanilla", "Pepper"];

  useEffect(() => {
    if (selectedSpice) {
      setFormData((prev) => ({ ...prev, spice: selectedSpice }));
    }
  }, [selectedSpice]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleQuantityChange = (delta) => {
    setFormData((prev) => {
      const currentQty = parseInt(prev.quantity) || 0;
      const newQty = Math.max(currentQty + delta, 0);
      return { ...prev, quantity: String(newQty) };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);

    try {
      const result = await emailjs.send(
        "service_6gpcffd",     // replace with your actual service ID
        "template_cjb1phv",    // replace with your template ID
        formData,
        "YMACyfEoM_UuPQs1o"         // replace with your public key (API key)
      );

      console.log("EmailJS result:", result.text);
      alert("✅ Order sent successfully via Email!");
      setFormData(initialState);
      handleClose();
    } catch (error) {
      console.error("EmailJS error:", error);
      alert("❌ Failed to send order. Please try again later.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: { xs: "85%", sm: 450 },
          bgcolor: "background.paper",
          boxShadow: 24,
          borderRadius: 3,
          p: 4,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6" fontWeight="bold">
            Place Your Order
          </Typography>
          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </Box>

        <TextField required label="Name" name="name" value={formData.name} onChange={handleChange} />
        <TextField required label="Email" name="email" type="email" value={formData.email} onChange={handleChange} />
        <TextField required label="Phone" name="phone" value={formData.phone} onChange={handleChange} />
        <TextField required label="Address" name="address" value={formData.address} onChange={handleChange} multiline rows={2} />

        <FormControl fullWidth required>
          <InputLabel>Spice</InputLabel>
          <Select name="spice" value={formData.spice} onChange={handleChange} label="Spice">
            {spices.map((spice, i) => (
              <MenuItem key={i} value={spice}>{spice}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <Stack direction="row" alignItems="center" spacing={1}>
          <Typography>Quantity (g):</Typography>
          <IconButton onClick={() => handleQuantityChange(-10)}><Remove /></IconButton>
          <TextField
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            size="small"
            sx={{ width: 60 }}
            inputProps={{ inputMode: "numeric", pattern: "[0-9]*" }}
          />
          <IconButton onClick={() => handleQuantityChange(10)}><Add /></IconButton>
        </Stack>

        <TextField label="Additional Notes" name="notes" value={formData.notes} onChange={handleChange} multiline rows={2} />

        <Button
          variant="contained"
          type="submit"
          disabled={submitting}
          sx={{
            backgroundColor: "#4B0082",
            ":hover": { backgroundColor: "#5e0acc" },
          }}
        >
          {submitting ? "Submitting..." : "Submit Order"}
        </Button>
      </Box>
    </Modal>
  );
};

export default OrderFormModal;
