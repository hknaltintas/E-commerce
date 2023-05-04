import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

import { useAuth } from "../../contexts/AuthContext";
import { useBasket } from "../../contexts/BasketContext";
import { Button } from "@chakra-ui/react";

function Navbar() {
  const { loggedIn, user } = useAuth();
  const { baskets } = useBasket();

  return (
    <div>
      <nav className={styles.nav}>
        <div className={styles.left}>
          <div className={styles.logo}>
            <Link to="/">eCommerce</Link>
          </div>
          <ul className={styles.menu}>
            <li>
              <Link to="/">Products</Link>
            </li>
          </ul>
        </div>
        <div className={styles.right}>
          {!loggedIn && (
            <>
              <Link to="signin">
                <Button colorScheme="pink">Log in</Button>
              </Link>
              <Link to="signup">
                <Button colorScheme="pink">Register</Button>
              </Link>
            </>
          )}

          {loggedIn && (
            <>
              {baskets.length > 0 && (
                <Link to="/basket">
                  <Button colorScheme="pink" variant="outline">
                    Basket {baskets.length}{" "}
                  </Button>
                </Link>
              )}
              {user?.role === "admin" && (
                <Link to="/admin">
                  <Button colorScheme="pink" variant="ghost">
                    Admin
                  </Button>
                </Link>
              )}
              <Link to="profile">
                <Button colorScheme="pink">Profile</Button>
              </Link>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
