import React from "react";
import Cirlce1 from "../assets/CircleImage.png";
import squares from "../assets/Squares.png";
import circles from "../assets/Circles.png";
export default function Team() {
  return (
    <div className="team">
      <div className="team-heading container">
        <h1>MEET THE TEAM</h1>
        <img src={squares} className="h-square" />
        <img src={circles} className="h-circle" />
      </div>

      <div className="container team-card">
        <div class="parent col-md-4 col-sm-12">
          <img class="image1" src={Cirlce1} />
          <div class="image2">
            <div className="member">
              <h5>Harsh Kohli</h5>
              <small>Mathematics</small>

              <ul>
                <li>
                  <a>
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li>
                  <a>
                    {" "}
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a>
                    {" "}
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="parent col-md-4 col-sm-12">
          <img class="image1" src={Cirlce1} />
          <div class="image2 red">
            <div className="member">
              <h5>Harsh Kohli</h5>
              <small>Mathematics</small>

              <ul>
                <li>
                  <i className="fa fa-instagram"></i>
                </li>
                <li>
                  <i className="fa fa-facebook"></i>
                </li>
                <li>
                  <i className="fa fa-linkedin"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div class="parent col-md-4 col-sm-12">
          <img class="image1" src={Cirlce1} />
          <div class="image2 yellow">
            <div className="member">
              <h5>Harsh Kohli</h5>

              <small>Mathematics</small>

              <ul>
                <li>
                  <i className="fa fa-instagram"></i>
                </li>
                <li>
                  <i className="fa fa-facebook"></i>
                </li>
                <li>
                  <i className="fa fa-linkedin"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="circles ">
        <img src={circles} />
      </div>
    </div>
  );
}
