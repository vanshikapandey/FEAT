import whatwedo from "../assets/Avatar.svg";
import React from "react";
export default function() {
  return (
    <div className="whatWeDo">
      <div>
        <img src={whatwedo} />
        <div
          className="feature-box"
          style={{
            top: "50px",
            right: "250px",
            backgroundColor: "rgb(38,164,153)",
          }}
        >
          <h6>Box 1</h6>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
        </div>
        <div
          className="feature-box"
          style={{
            top: "520px",
            right: "300px",
            backgroundColor: "rgb(125,179,67)",
          }}
        >
          <h6>Box 2</h6>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
        </div>
        <div
          className="feature-box"
          style={{
            top: "610px",
            left: "400px",
            backgroundColor: "rgb(253,191,46)",
          }}
        >
          <h6>Box 3</h6>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
        </div>
        <div
          className="feature-box"
          style={{
            top: "280px",
            left: "220px",
            backgroundColor: "rgb(245,81,28)",
          }}
        >
          <h6>Box 4</h6>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
        </div>
        <div
          className="feature-box"
          style={{
            top: "-120px",
            left: "460px",
            backgroundColor: "rgb(176,180,43)",
          }}
        >
          <h6>Box 5</h6>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
        </div>
      </div>
    </div>
  );
}
