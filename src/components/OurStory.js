import ourstory from "../assets/OurStory.png";
import React from "react";
export default function() {
  return (
    <div id="ourstory" className="whatWeDo">
      {/* <div className="col-md-1"></div> */}
      <div className="col-md-4 col-sm-12 whatWeDo-img">
        <img src={ourstory} alt="" />
        <div className="borderU"></div>
        <h1>Our Story</h1>
      </div>
      <div className="col-md-7 col-sm-12 text ourstory-text">
        <p>
          FEAT is a coaching institute for IIT-JEE established by Mr. Gaurav
          Kumar, who has years of experience in guiding young minds. The
          institute has a dedicated team of teachers and mentors from IIT, NIT,
          IIIT. The institute aims to build connections with students and guide
          them according to their needs. The journey of FEAT started with a
          bunch of 9th graders willing to learn and a mentor willing to walk
          with them till the goal was in hand.
        </p>
      </div>
    </div>
  );
}
