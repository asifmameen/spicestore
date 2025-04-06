import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Box,
  Stack,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
  Modal,
  IconButton,
} from "@mui/material";
import { Add, Remove, Close } from "@mui/icons-material";

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

  const closeModalAndReset = () => {
    setFormData(initialState);
    handleClose();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbznsehiO9sKOLX3_eIVj3PkOfbAMez3TvEguRLFDpx0Ds66ZFPOrFmlxmsEarKkS7xF/exec",
      {
        method: "POST",
        body: JSON.stringify(formData),
        headers: {
          "Content-Type": "application/json",
        },
        mode: "cors",
      }
    );

    const result = await response.json();
    if (result.result === "success") {
      alert("Order submitted successfully!");
      setFormData(initialState);
      handleClose();
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <Modal
      open={open}
      onClose={() => {}} // disable default close behavior
      disableEscapeKeyDown
    >
      <Box
        sx={{
          position: "relative",
          mt: "5vh",
          mx: "auto",
          maxWidth: "600px",
          bgcolor: "#fff",
          borderRadius: 2,
          boxShadow: 24,
          p: 4,
          overflowY: "auto",
          maxHeight: "90vh",
        }}
      >
        {/* Close Button */}
        <IconButton
          onClick={closeModalAndReset}
          sx={{ position: "absolute", top: 12, right: 12 }}
        >
          <Close />
        </IconButton>

        <Typography variant="h5" align="center" gutterBottom>
          Spice Order Form
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack spacing={2}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              label="Phone"
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
            <TextField
              fullWidth
              label="Address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              multiline
              rows={2}
            />

            <FormControl fullWidth required>
              <InputLabel>Spice</InputLabel>
              <Select
                name="spice"
                value={formData.spice}
                onChange={handleChange}
              >
                {spices.map((spice) => (
                  <MenuItem key={spice} value={spice}>
                    {spice}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            <Box display="flex" alignItems="center" gap={2}>
              <Typography sx={{ color: "black", marginLeft: "10px" }}>
                Quantity (grams):
              </Typography>
              <IconButton
                onClick={() => handleQuantityChange(-50)}
                color="primary"
              >
                <Remove />
              </IconButton>
              <TextField
                value={formData.quantity}
                name="quantity"
                sx={{ width: "100px" }}
                inputProps={{ readOnly: true }}
              />
              <IconButton
                onClick={() => handleQuantityChange(50)}
                color="primary"
              >
                <Add />
              </IconButton>
            </Box>

            <TextField
              fullWidth
              label="Additional Notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              multiline
              rows={3}
            />

            <Box display="flex" justifyContent="center">
              <Button type="submit" variant="contained" color="primary">
                Submit Order
              </Button>
            </Box>
          </Stack>
        </form>
      </Box>
    </Modal>
  );
};

export default OrderFormModal;
