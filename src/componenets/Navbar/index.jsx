import React from "react";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";

import { loggedIn, useAuth } from "../../contexts/AuthContext";

function Navbar() {
const {loggedIn}=useAuth();


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
          {!loggedIn && <><Link to="signin">
            <button >Log in</button>
          </Link>
          <Link to="signup">
            <button>Register</button>
          </Link></>}

          {loggedIn && <><Link to="profile">
            <button >Profile</button>
          </Link>
          </>}
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
