import React from "react";
import Carousels from "./Carousels";
import Grid from "./Grid";
export default function() {
  return (
    <div className="testimonials courses">
      <div className="testimonials-head container">
        <div className="courses-border"></div>
        <div>
          <h1>Testimonials</h1>
        </div>
      </div>
      <div>
        <Carousels />
      </div>
      <div className="bg container-fluid">
        <h3>
          Ready to unlock your potential? Read our students' reviews and join
          our success stories!
        </h3>
        <Grid />
      </div>
    </div>
  );
}
