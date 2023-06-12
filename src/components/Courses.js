import foundation from "../assets/Offline classes.svg";
import online from "../assets/Online classes.svg";
import React from "react";

export default function Courses() {
  return (
    <section id="courses-section">
      <div className="courses container">
        <div className="courses-border"></div>
        <h1>Courses</h1>
        <div className="course-cards">
          <div
            className="card col-md-4 col-sm-12"
            style={{ backgroundColor: "#EE7B77" }}
          >
            <h4>Foundation Courses</h4>
            <img src={foundation} alt="" />
            <button style={{ backgroundColor: "#F4CA76" }}>Know More</button>
          </div>
          <div
            className="card col-md-4 col-sm-12"
            style={{ backgroundColor: "#EE7B77" }}
          >
            <h4>Online Courses</h4>
            <img src={online} alt="" />
            <button style={{ backgroundColor: "#F4CA76" }}>Know More</button>
          </div>
        </div>
      </div>
    </section>
  );
}
