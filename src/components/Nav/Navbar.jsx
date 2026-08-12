import "./Navbar.css";
import { Link } from "react-router-dom";
import { useState } from "react";

import logo from "../../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>

      {/* ================= LOGO ================= */}

      <Link
        to="/"
        className="logo"
        onClick={() => setMenuOpen(false)}
      >
        <img src={logo} alt="Logo" />
      </Link>


      {/* ================= NAVIGATION ================= */}

      <nav className={menuOpen ? "nav active" : "nav"}>

        <Link
          to="/"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          Home
        </Link>

        <Link
          to="/shop"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          Shop
        </Link>
                <Link
          to="/about"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          About
        </Link>
        
        <Link
          to="/contact"
          className="nav-link"
          onClick={() => setMenuOpen(false)}
        >
          Contact
        </Link>

      </nav>


      {/* ================= ICONS ================= */}

      <div className="icons">

        <Link to="/profile">
          <i className="fa-regular fa-user"></i>
        </Link>

        <Link to="/search">
          <i className="fa-solid fa-magnifying-glass"></i>
        </Link>

        <Link to="/wishlist">
          <i className="fa-regular fa-heart"></i>
        </Link>

        <Link to="/cart">
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>

      </div>


      {/* ================= MOBILE MENU ================= */}

      <div
        className="menu"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </div>

    </header>
  );
};

export default Navbar;