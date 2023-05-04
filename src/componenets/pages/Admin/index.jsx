import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import Home from "./Home/index";
import Products from "./Products/index";
import Orders from "./Orders/index";

import "./style.css";

function Admin() {
 
  

  return (
    <div>
      <nav>
        <ul className="admin-menu">
          <li>
            <Link to="/admin">Home</Link>
          </li>
          <li>
            <Link to="orders">Orders</Link>
          </li>
          <li>
            <Link to="products">Products</Link>
          </li>
        </ul>
      </nav>

      <Box mt="10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="orders" element={<Orders />} />
          <Route path="products" element={<Products />} />
        </Routes>
      </Box>
    </div>
  );
}

export default React.memo(Admin);
