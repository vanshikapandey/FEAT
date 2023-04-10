import illustration from "../assets/Illustration.png";
import emoji from "../assets/Emoji.png";
import book from "../assets/Book.png";
import certi from "../assets/Certificate.png";
import React from "react";

export default function Landing() {
  return (
    <div className="container landing-section ">
      <div className="head-text col-md-5">
        <h1>Generate secure digital</h1>
        <h1 id="gradient">organisational</h1>
        <h1>certificates on-the-go.</h1>
        <p>
          Our certificate generator can be custom built for your needs powered
          by secure infrastructure to scale with your organisation.
        </p>
        <div className="landing-button">
          <button>
            <a href="#courses-section">COURSES</a>
          </button>
        </div>
      </div>

      <div className="landing-img col-md-7">
        <div className="semicirlce-1"></div>
        <div className="ellipse-1"></div>
        <div className="ellipse-2"></div>
        <div className="certi">
          <img src={certi} />
        </div>
        <div className="square-1">
          <img src={illustration} />
        </div>
        <div className="emoji">
          <img src={emoji} />
        </div>
        <div className="book">
          <img src={book} />
        </div>
        <div className="circle-1"></div>
        <div className="circle-2"></div>
        <div className="circle-3"></div>
        <div className="circle-4"></div>
        <div className="circle-5"></div>
      </div>
    </div>
  );
}
