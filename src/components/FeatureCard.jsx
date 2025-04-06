import {
  Card,
  CardMedia,
  CardContent,
  Typography,   
  Button,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import spiceIndicator from "../assets/images/spices_grainy.jpg";

const FeatureCard = () => {
  const navigate = useNavigate();
  const handleShopNow = () => {
    navigate("/shop");
  };

  return (
    <Card
      sx={{
        display: "flex",
        alignItems: "center",
        padding: 3,
        boxShadow: "0px 10px 30px rgba(0,0,0,0.1)",
        maxWidth: "850px",
        margin: "auto",
        marginTop: "100px",
        borderRadius: "12px",
        backgroundColor: "#ffffff",
      }}
    >
      <CardMedia
        sx={{
          width: 200,
          height: 200,
          borderRadius: 2,
          objectFit: "cover",
          backgroundImage: `url(${spiceIndicator})`,
        }}
        alt="Spices"
      />
      <CardContent sx={{ flex: 1, paddingLeft: 3 }}>
        <Typography variant="h5" fontWeight="bold">
          Discover Premium Spices Straight from the Highlands
        </Typography>
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ marginTop: 1 }}
        >
          Explore our handpicked collection of high-quality spices, carefully
          sourced and packed to preserve freshness and aroma. From aromatic
          cardamom to bold black pepper – we bring nature’s finest to your
          kitchen.
        </Typography>
        <Typography
          variant="body1"
          fontWeight="bold"
          sx={{ marginTop: 2, color: "#333" }}
        >
          Whether you're a home chef or a food enthusiast, our spices will
          elevate your cooking. Shop directly from us and experience the true
          taste of the high ranges.
        </Typography>
        <Button
          variant="contained"
          sx={{ marginLeft: "40px", marginTop: 2 }}
          onClick={handleShopNow}
        >
          Shop Now
        </Button>
      </CardContent>
    </Card>
  );
};

export default FeatureCard;
