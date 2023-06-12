// import whatwedo from "../assets/whatwedo.png";
import React from "react";
export default function() {
  return (
    <div className="whatWeDo">
      <div className="col-md-7 col-sm-12 text">
        <p>
          FEAT acknowledges the uniqueness of every child and strives to mold
          them into a person true to their character. The institute understands
          the value of the process of learning and makes the journey
          knowledge-centric, challenging the result-centric approach of the
          Indian education system. At FEAT, they guide students to be
          knowledge-oriented rather than result-oriented, encouraging them to
          make the process of attaining knowledge a joyful journey that lasts a
          lifetime.
        </p>
      </div>
      {/* <div className="col-md-1"></div> */}
      <div className="col-md-4 col-sm-12 whatWeDo-img">
        {/* <img src={whatwedo} alt="" /> */}
        <div className="borderU"></div>
        <h1>What we do?</h1>
      </div>
    </div>
  );
}
