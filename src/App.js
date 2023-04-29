import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "./componenets/Navbar";
import Signin from "./componenets/pages/Auth/Signin/Signin";
import Signup from "./componenets/pages/Auth/Signup/Signup";
import Products from "./componenets/pages/Products/index";
import ProductDetail from "./componenets/pages/ProductDetail/index";
import Profile from "./componenets/pages/Profile/index";
import Basket from "./componenets/pages/Basket/index";
import Eror404 from "./componenets/pages/Eror404/index";

import ProtectedRoute from "./componenets/pages/ProtectedRoute";
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
          <Route path="/basket" element={<Basket />} />

          <Route element={<ProtectedRoute />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<Eror404/>}/>
          
        </Routes>
      </div>
    </Router>
  );
}

export default App;
