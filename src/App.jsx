import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/HomePage";
import ViewStore from "./pages/ViewStore";
import Footer from "./components/Footer";
import { GlobalStateProvider } from "./context/GlobalStateContext";
import Header from "./components/Header";
import OrderForm from "./pages/OrderFormModal";
import ProductGrid from "./pages/ProductGrid";

function App() {
  return (
    <GlobalStateProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<ProductGrid />} />
        </Routes>
        <Footer />
      </Router>
    </GlobalStateProvider>
  );
}

export default App;
