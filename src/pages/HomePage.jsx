// import fogCloud from "../assets/images/foggy.jpg";
import Header from "../components/Header";
import FeatureCard from "../components/FeatureCard";
import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import FeatureCardTwo from "../components/FeatureCardTwo";
import { useNavigate } from "react-router-dom";
import spiceIndicator from "../assets/images/pepper.jpg";

const Home = () => {
  return (
    <div
      className="w-full min-h-screen flex flex-col justify-center items-center"
      style={{
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url(${spiceIndicator})`,
        width: "100vw",
        height: "94vh", // Ensures full screen height
        overflow: "hidden", // Prevents scrolling
        overlay: "auto",
      }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg text-white text-center">
        <Header />
      </div>
      <div>
        <FeatureCardTwo />
      </div>
      {/* <div>
        <FeatureCard />
      </div> */}
    </div>
  );
};

export default Home;
