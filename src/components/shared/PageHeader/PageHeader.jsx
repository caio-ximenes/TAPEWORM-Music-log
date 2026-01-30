import React from "react";
import { Link } from "react-router-dom";
import Styles from "./PageHeader.module.scss";
import logo from "../../../assets/images/icons/tapeworm-logo-desktop.jpg";
import { useState } from "react";

function PageHeader() {
  // State to control the visibility of the mobile menu
  const [opens, setOpens] = useState(false);

  // Toggles the mobile menu open/close state
  const menuOpen = () => {
    setOpens(!opens);
  };

  // Dynamic class for mobile navigation animation
  const menuOpenClass = opens
    ? Styles["header--mobile__nav"]
    : Styles["header--mobile__nav--close"];

  return (
    <header>
      <div className={Styles["logo-container"]}>
        <img
          src={logo}
          alt="tapeworm logo"
          className={Styles["logo-container__logo"]}
        />
      </div>

      {/* Mobile Navigation */}
      <nav className={menuOpenClass}>
        <div
          className={Styles["header--mobile__nav__close"]}
          onClick={menuOpen}
        ></div>
        <div className={Styles["header--mobile__nav__logo"]}></div>
        <Link to="/profile" className={Styles["header--mobile__nav__link"]}>
          PROFILE
        </Link>
        <Link to="/best" className={Styles["header--mobile__nav__link"]}>
          BEST
        </Link>
        <Link to="/explore" className={Styles["header--mobile__nav__link"]}>
          EXPLORE
        </Link>
        <Link to="/genres" className={Styles["header--mobile__nav__link"]}>
          GENRES
        </Link>
      </nav>

      {/* Hamburger Menu Icon */}
      <div className={Styles["header--mobile__menu"]} onClick={menuOpen}></div>

      {/* Desktop Navigation */}
      <nav className={Styles["header--desktop__nav"]}>
        <Link to="/profile" className={Styles["header--desktop__nav__link"]}>
          PROFILE
        </Link>
        <Link to="/best" className={Styles["header--desktop__nav__link"]}>
          BEST
        </Link>
        <Link to="/explore" className={Styles["header--desktop__nav__link"]}>
          EXPLORE
        </Link>
        <Link to="/genres" className={Styles["header--desktop__nav__link"]}>
          GENRES
        </Link>
      </nav>
    </header>
  );
}

export default PageHeader;
