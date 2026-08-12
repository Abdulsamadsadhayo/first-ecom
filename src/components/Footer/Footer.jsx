import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        {/* Left */}
        <div className="footer-col">
          <h2 className="logo">Funiro.</h2>

          <p>
            400 University Drive Suite 200 Coral Gables,
            <br />
            FL 33134 USA
          </p>
        </div>

        {/* Links */}
        <div className="footer-col">
          <h4>Links</h4>

          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </div>

        {/* Help */}
        <div className="footer-col">
          <h4>Help</h4>

          <ul>
            <li><a href="#">Payment Options</a></li>
            <li><a href="#">Returns</a></li>
            <li><a href="#">Privacy Policies</a></li>
          </ul>
        </div>

        {/* Newsletter */}
        <div className="footer-col">
          <h4>Newsletter</h4>

          <form className="newsletter">
            <input
              type="email"
              placeholder="Enter Your Email Address"
            />

            <button type="submit">SUBSCRIBE</button>
          </form>
        </div>

      </div>

      <hr />

      <div className="footer-bottom">
        <p>2023 Funiro. All rights reserved.</p>

        <p className="developer">
          Made with ❤️ by <span>Abdul Samad Sadhayo</span>
        </p>
      </div>

    </footer>
  );
}

export default Footer;