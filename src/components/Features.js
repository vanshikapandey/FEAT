import feature1 from "../assets/feature-1.png";
import feature2 from "../assets/feature-2.png";
import feature3 from "../assets/feature-3.png";
import feature4 from "../assets/feature-4.png";
import feature5 from "../assets/feature-5.png";
import React from "react";

export default function() {
  return (
    <div className="features container">
      <h1>Everything Student Can Ask For!</h1>
      <div className="feature-cards">
        <div className="col-md-2 col-sm-12 feat">
          <img src={feature1} alt="" />
          <h4>Interactive</h4>
          <p>Small groups for max student teacher interaction</p>
        </div>
        <div className="col-md-2 col-sm-12 feat">
          <img src={feature2} alt="" />
          <h4>Project-Based</h4>
          <p>Apply your learnings to solve real-world problems</p>
        </div>
        <div className="col-md-2 col-sm-12 feat">
          <img src={feature3} alt="" />
          <h4>Fun</h4>
          <p>Learn through videos, games and activities</p>
        </div>
      </div>
      <div className="feature-cards">
        <div className="col-md-2 col-sm-12 feat">
          <img src={feature4} alt="" />
          <h4>Personalised</h4>
          <p>Personalised advice because of small groups</p>
        </div>
        <div className="col-md-2 col-sm-12 feat">
          <img src={feature5} alt="" />
          <h4>Expert Teachers</h4>
          <p>Learn from top-notch teachers with years of experience</p>
        </div>
      </div>
    </div>
  );
}
