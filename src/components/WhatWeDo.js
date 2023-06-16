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
            top: "70px",
            right: "300px",
            backgroundColor: "rgb(38,164,153)",
          }}
        >
          <h6>Lorem Ipsum</h6>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
        </div>
        <div
          className="feature-box"
          style={{
            top: "480px",
            right: "300px",
            backgroundColor: "rgb(125,179,67)",
          }}
        >
          <h6>Lorem Ipsum</h6>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
        </div>
        <div
          className="feature-box"
          style={{
            top: "600px",
            left: "440px",
            backgroundColor: "rgb(253,191,46)",
          }}
        >
          <h6>Lorem Ipsum</h6>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
        </div>
        <div
          className="feature-box"
          style={{
            top: "300px",
            left: "260px",
            backgroundColor: "rgb(245,81,28)",
          }}
        >
          <h6>Lorem Ipsum</h6>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
        </div>
        <div
          className="feature-box"
          style={{
            top: "-80px",
            left: "500px",
            backgroundColor: "rgb(176,180,43)",
          }}
        >
          <h6>Lorem Ipsum</h6>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
        </div>
      </div>
    </div>
  );
}
