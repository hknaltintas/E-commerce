import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componenets/Navbar";
import Signin from "./componenets/pages/Auth/Signin/Signin";
import Signup from "./componenets/pages/Auth/Signup/Signup";
import Products from "./componenets/pages/Products/index";
import ProductDetail from "./componenets/pages/ProductDetail/index";
function App() {
  return (
    <Router>
      <div>
        <Navbar />

        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/product/:product_id" element={<ProductDetail />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
