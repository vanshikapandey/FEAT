import React from "react";
import squares from "../assets/Squares.png";
export default function Footer() {
  return (
    <footer>
      <div className="footer-head container">
        <h1>CONTACT US</h1>
        <img src={squares} />
      </div>
      <div className="footer-col">
        <div className="borderR">
          <div className="footer-column">
            <div className="contacts">
              <p style={{ fontWeight: "600" }}>Email</p>
              <p style={{ fontWeight: "500" }}>info@feateducation.in</p>
            </div>
            <div className="contacts">
              <p style={{ fontWeight: "600" }}>Phone no</p>
              <p style={{ fontWeight: "500" }}>7906128108</p>
            </div>
            <div className="contacts">
              <p style={{ fontWeight: "600" }}>Address</p>
              <p style={{ fontWeight: "500" }}> U26C/6, White town Houses,</p>
              <p style={{ fontWeight: "500" }}> U block, DLF Phase 3,</p>
              <p style={{ fontWeight: "500" }}> Meerut, Uttar Pradesh</p>
            </div>
          </div>
        </div>
        <div className="borderR">
          <div className="footer-column logo-col">
            <h3>Logo</h3>
            <p>
              Excellent Go-to Video Editing Partner Trusted by 20,000+ Customers
            </p>
            <div className="social">
              <ul>
                <li>
                  <a href="https://www.facebook.com/feateducation">
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://in.linkedin.com/company/feateducation">
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.instagram.com/feateducation/?hl=en">
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="borderL">
          <div className="footer-column">
            <ul>
              <li id="list-head">
                <a href="#">Utility Pages</a>
              </li>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Courses</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
