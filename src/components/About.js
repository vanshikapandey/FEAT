import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";
import rectangle from "../assets/Diagonal-Rect.png";
import aboutUsImg from "../assets/About-img.png";
import timeline from "../assets/timeline.png";
import Team from "../components/Team";
import certi from "../assets/Certificate.svg";

export default function About() {
  return (
    <div>
      <Navbar />
      <div
        id="aboutUs-section"
        className="container-fluid aboutUs landing-section"
      >
        <div className="head-text container">
          <h1 id="gradient">ABOUT US</h1>
          <div className="aboutUs-para">
            <p>
              FEAT is an IIT-JEE coaching institute founded by Mr. Gaurav Kumar,
              an experienced guide for young minds. The institute boasts a team
              of teachers and mentors from IIT, NIT, and IIIT who are committed
              to building connections with students and providing personalized
              guidance.{" "}
            </p>
          </div>
        </div>

        <div className="landing-img ">
          <div className="semicirlce-1"></div>
          <div className="ellipse-1"></div>
          <div className="ellipse-2"></div>
          <div className="ellipse-3"></div>
          <div className="ellipse-4"></div>
          <div className="ellipse-5"></div>
          <div className="certi">
            <img src={certi} />
          </div>
          <div className="person">
            <img src={aboutUsImg} />
          </div>
          <div className="circle-1"></div>
          <div className="circle-2"></div>
          <div className="circle-3"></div>
          <div className="circle-4"></div>
          <div className="circle-5"></div>
          <div className="circle-6"></div>
        </div>
      </div>
      <div className="aboutUs-rect">
        <img src={rectangle} />
        <div className="aboutUs-rect-text  col-md-9 col-sm-12">
          <div>
            <h2>ABOUT US</h2>
          </div>
          <div className="upper-half  ">
            <div className="col-md-6 col-sm-12 boxes">
              <div className="red"></div>
              <div className="yellow"></div>
              <div className="blue"></div>
            </div>
            <div className="col-md-5 col-sm-12 para">
              <p>
                Our journey, back in 2017, started with the determination of an
                individual who believed in the latent potential of a student and
                believed in the saying that “Success is a journey, not a
                destination.
              </p>
              <p>
                {" "}
                A bunch of 9th graders huddled together on chairs in a small
                room in his house, tackling quadratic equations and the
                fundamental ethics of life, learned about historical
                explorations, all the while consciously deciding to edge
                forward.
              </p>{" "}
            </div>
          </div>
          <div className="upper-half second-half ">
            <div className="col-md-7 col-sm-12 para">
              <p>
                They were willing to learn, and this mentor had decided to walk
                with them till the goal was in hand. And it wasn’t long before
                the hard work he and his students had put instart to bear
                fruitful results.
              </p>
              <p>
                {" "}
                FEAT is a professional coaching institute for IIT-JEE,founded
                four years ago by Mr. Gaurav Kumar, an experienced guide for
                young minds. The institute has a team of dedicated teachers and
                mentors from IIT, NIT, and IIIT who are committed to building
                connections with students and providing personalized guidance.
                One of the teachers is known for his unwavering dedication to
                his students.
              </p>{" "}
            </div>

            <div className="col-md-5 col-sm-12 boxes ">
              <div className="reds"></div>
              <div className="yellows" s></div>
              <div className="blues"></div>
            </div>
          </div>
        </div>
      </div>{" "}
      {/* <Team /> */}
      <Footer />
    </div>
  );
}
