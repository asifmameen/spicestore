import { Search } from "@mui/icons-material";
import {
  AppBar,
  Avatar,
  Box,
  Button,
  CardMedia,
  IconButton,
  InputBase,
  Menu,
  Toolbar,
  Typography,
} from "@mui/material";
import mainLogo from "../assets/images/logomain4.png";
import { useGlobalState } from "../context/GlobalStateContext";
import ContactModal from "../pages/ContactModal";

const Header = () => {
  const { openContactModal, setOpenContactModal } = useGlobalState();
  return (
    <>
      <AppBar
        position="fixed"
        sx={{ backgroundColor: "#58554b", boxShadow: 1, paddingY: 1 }}
      >
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <CardMedia
            sx={{
              width: 800,
              height: 60,
              borderRadius: 3,
              backgroundSize: "contain",
              objectFit: "contain",
              backgroundImage: `url(${mainLogo})`,
              marginLeft: "-307px",
            }}
            alt="Spices"
          />

          {/* Right: Buttons and Avatar */}
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <Button
              variant="outlined"
              sx={{
                textTransform: "none",
                color: "black",
                borderColor: "gray",
              }}
              onClick={() => setOpenContactModal(true)}
            >
              Contact Us
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <ContactModal
        open={openContactModal}
        handleClose={() => setOpenContactModal(false)}
      />
    </>
  );
};

export default Header;
