import React from "react";
import styles from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = () => (
  <header className={styles.header}>
    <NavLink to="/">
      <div className={styles.logo}>
        <img src="/assets/images/logo.png" alt="logo" />
      </div>
    </NavLink>
    <ul className={styles.navLinks}>
      <li>
        <NavLink to="/documents">Документы</NavLink>
      </li>
      <li>
        <NavLink to="/route2">Route 2</NavLink>
      </li>
      <li>
        <NavLink to="/route3">Route 3</NavLink>
      </li>
    </ul>
  </header>
);

export default Header;
