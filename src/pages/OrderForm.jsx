import React, { useState } from "react";
import {
  TextField,
  Button,
  Container,
  Typography,
  Paper,
  Box,
  Stack,
  MenuItem,
  Select,
  FormControl,
  InputLabel,
} from "@mui/material";

const OrderForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    spice: "",
    quantity: "",
    notes: "",
  });

  const spices = [
    "Cardamom",
    "Vanilla",
    "Pepper",
    "Cinnamon",
    "Clove",
    "Nutmeg",
    "Turmeric",
    "Saffron",
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
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
        mode: "cors", // ✅ Fix CORS issue
      }
    );

    const result = await response.json();
    if (result.result === "success") {
      alert("Order submitted successfully!");
      setFormData({
        name: "",
        email: "",
        phone: "",
        address: "",
        spice: "",
        quantity: "",
        notes: "",
      });
    } else {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh", // Centers vertically
        backgroundColor: "#212121", // Dark background like in your screenshot
      }}
    >
      <Container maxWidth="md">
        {" "}
        {/* Increased width */}
        <Paper
          elevation={3}
          sx={{ padding: "30px", maxWidth: "600px", margin: "auto" }}
        >
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
              <TextField
                fullWidth
                label="Quantity"
                type="number"
                name="quantity"
                value={formData.quantity}
                onChange={handleChange}
                required
              />
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
        </Paper>
      </Container>
    </Box>
  );
};

export default OrderForm;
