import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
} from "@mui/material";
import { motion } from "framer-motion";
import { useGlobalState } from "../context/GlobalStateContext";
import OrderForm from "./OrderFormModal";
import { useState } from "react";
import OrderFormModal from "./OrderFormModal";
import cardamom from "../assets/images/cardamom.jpg";
import blackPepper from "../assets/images/blackpepper.jpg";
import cinammonRoll from "../assets/images/cinnamon.jpg";

// Sample product data
const products = [
  {
    name: "Cardamom",
    price: "₹450 / 100g",
    image: cardamom,
  },
  {
    name: "Black Pepper",
    price: "₹250 / 100g",
    image: blackPepper,
  },
  {
    name: "Cinnamon",
    price: "₹800 / 50g",
    image: cinammonRoll,
  },
];

const ProductGrid = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedSpice, setSelectedSpice] = useState("");

  const handleAddToCart = (spiceName) => {
    setSelectedSpice(spiceName);
    setModalOpen(true);
  };
  return (
    <>
      <Box
        sx={{
          py: { xs: 6, md: 19 },
          px: { xs: 2, sm: 4, md: 41 },
          minHeight: "50vh",
          backgroundColor: "#f2f2f2", // Or background image
        }}
      >
        <Typography
          variant="h4"
          fontWeight="bold"
          align="center"
          sx={{ mb: 6, color: "#4B0082" }}
        >
          Our Premium Spices
        </Typography>

        {/* Fixed-width container to constrain layout */}
        <Box
          sx={{
            maxWidth: "1200px",
            mx: "auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: 4,
          }}
        >
          {products.map((product, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              transition={{ duration: 0.3 }}
              style={{
                flex: "1 1 calc(33.333% - 32px)", // 3 per row with spacing
                minWidth: "280px",
                maxWidth: "380px",
              }}
            >
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  borderRadius: 3,
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.1)",
                }}
              >
                <CardMedia
                  component="img"
                  height="180"
                  image={product.image}
                  alt={product.name}
                  sx={{ objectFit: "cover" }}
                />
                <CardContent
                  sx={{
                    flexGrow: 1,
                    textAlign: "center",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    p: 2,
                  }}
                >
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {product.name}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ mb: 2 }}
                  >
                    {product.price}
                  </Typography>
                  <Button
                    variant="contained"
                    fullWidth
                    sx={{
                      mt: "auto",
                      backgroundColor: "#4B0082",
                      borderRadius: 2,
                      ":hover": { backgroundColor: "#5e0acc" },
                    }}
                    onClick={() => handleAddToCart(product.name)}
                  >
                    Add to Cart
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </Box>
      </Box>
      <OrderFormModal
        open={modalOpen}
        handleClose={() => setModalOpen(false)}
        selectedSpice={selectedSpice}
      />
    </>
  );
};

export default ProductGrid;
