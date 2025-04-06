import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import { motion } from "framer-motion";
import spiceIndicator from "../assets/images/spices_grainy.jpg";

const FeatureCardTwo = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true }}
    >
      <Card
        sx={{
          display: "flex",
          flexDirection: { xs: "column-reverse", md: "row" },
          alignItems: "center",
          padding: 2,
          boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
          maxWidth: "1000px",
          margin: "auto",
          marginTop: "177px",
          borderRadius: "10px",
          backgroundColor: "#F2F2FF",
        }}
      >
        {/* Right Side: Text Content */}
        <CardContent
          sx={{
            flex: 1,
            paddingLeft: { md: 4 },
            paddingTop: { xs: 3, md: 0 },
          }}
        >
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="h6"
              fontWeight="bold"
              gutterBottom
              sx={{ textAlign: { xs: "center", md: "left" } }}
            >
              The Heritage of Spices – A Taste of Tradition
            </Typography>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ marginBottom: 2 }}
            >
              From the lush hills of the Western Ghats, our spices are more than
              just ingredients—they're a legacy. Discover the rich history and
              unrivaled quality of our cardamom, black pepper, and vanilla.
              Explore our handpicked collection of high-quality spices, carefully
              sourced and packed to preserve freshness and aroma. From aromatic
              cardamom to bold black pepper – we bring nature’s finest to your
              kitchen.
            </Typography>

            <Typography variant="body2" sx={{ marginBottom: 1 }}>
              <strong>Cardamom:</strong> The “Queen of Spices,” known for its bold
              aroma and healing properties. Grown naturally and hand-picked with
              care.
            </Typography>

            <Typography variant="body2" sx={{ marginBottom: 1 }}>
              <strong>Black Pepper:</strong> Our sun-dried peppercorns offer a warm,
              intense flavor – once valued more than gold.
            </Typography>

            <Typography variant="body2" sx={{ marginBottom: 2 }}>
              <strong>Vanilla:</strong> Cultivated with patience, our vanilla beans
              are rich, aromatic, and free of additives – perfect for connoisseurs.
            </Typography>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ display: "flex", justifyContent: "center", marginTop: 16 }}
          >
            <Button
              variant="contained"
              onClick={() => (window.location.href = "/shop")}
              sx={{
                display: "block",
                mx: { xs: "auto", md: "0" },
              }}
            >
              Explore Our Spices
            </Button>
          </motion.div>
        </CardContent>

        {/* Left Side: Image */}
        <CardMedia
          component="img"
          image={spiceIndicator}
          alt="Spices Display"
          sx={{
            width: { xs: "100%", md: 400 },
            height: 350,
            borderRadius: 2,
            objectFit: "cover",
          }}
        />
      </Card>
    </motion.div>
  );
};

export default FeatureCardTwo;
