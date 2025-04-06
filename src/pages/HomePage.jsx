import Header from "../components/Header";
import FeatureCardTwo from "../components/FeatureCardTwo";
import spiceIndicator from "../assets/images/pepper.jpg";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <Box
      sx={{
        width: "100vw",
        minHeight: "100vh",
        backgroundImage: `url(${spiceIndicator})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start", // allow content to grow downward
        px: { xs: 2, sm: 4 },
        py: { xs: 4, sm: 6 },
      }}
    >
      <Box
        sx={{
          width: "100%",
          maxWidth: "1200px",
          backgroundColor: "rgba(0, 0, 0, 0.5)",
          color: "white",
          p: { xs: 2, sm: 4 },
          borderRadius: 2,
          mb: 4,
        }}
      >
        <Header />
      </Box>

      <Box sx={{ width: "100%", maxWidth: "1200px" }}>
        <FeatureCardTwo />
      </Box>
    </Box>
  );
};

export default Home;
