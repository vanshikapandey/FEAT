import "../styles.css";
import { useState } from "react";
import React from "react";
import $ from "jquery";
import Modal from "../components/Modal";
import { Link } from "react-router-dom";
export default function Navbar() {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  $(document).ready(function() {
    $(window).scroll(function() {
      var scroll = $(window).scrollTop();
      if (scroll > 100) {
        $(".navigation").css("background", "#ffffff");
      } else {
        $(".navigation").css("background", "#ffffff");
      }
    });
  });
  return (
    <nav className="navigation">
      <a href="/" className="brand-name">
        FEAT
      </a>
      <button
        className="hamburger"
        onClick={() => {
          setIsNavExpanded(!isNavExpanded);
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="white"
        >
          <path
            fillRule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z"
            clipRule="evenodd"
          />
        </svg>
      </button>
      <div
        className={
          isNavExpanded ? "navigation-menu expanded" : "navigation-menu"
        }
      >
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/coursespage">Courses</Link>
          </li>
          <li>
            <Modal />
          </li>
        </ul>
      </div>
    </nav>
  );
}
