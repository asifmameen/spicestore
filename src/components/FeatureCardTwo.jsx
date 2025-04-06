import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
} from "@mui/material";
import spiceIndicator from "../assets/images/pepper.jpg";

const FeatureCardTwo = () => {
  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        alignItems: "center",
        padding: 1,
        boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
        maxWidth: "1000px",
        margin: "auto",
        marginTop: "87px",
        borderRadius: "12px",
        backgroundColor: "#ffffff",
      }}
    >
      {/* Left Side: Image */}
      <CardMedia
        alt="Spices Display"
        sx={{
          width: { xs: "100%", md: 400 },
          height: 300,
          borderRadius: 2,
          objectFit: "cover",
          backgroundImage: `url(${spiceIndicator})`,
        }}
      />

      {/* Right Side: Text Content */}
      <CardContent
        sx={{ flex: 1, paddingLeft: { md: 4 }, paddingTop: { xs: 3, md: 0 } }}
      >
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          The Heritage of Spices – A Taste of Tradition
        </Typography>

        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginBottom: 2 }}
        >
          From the lush hills of the Western Ghats, our spices are more than
          just ingredients—they're a legacy. Discover the rich history and
          unrivaled quality of our cardamom, black pepper, and vanilla.
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

        <Button
          variant="contained"
          onClick={() => (window.location.href = "/shop")}
        >
          Explore Our Spices
        </Button>
      </CardContent>
    </Card>
  );
};

export default FeatureCardTwo;
