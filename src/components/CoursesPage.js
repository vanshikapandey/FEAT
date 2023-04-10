import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";
import rectangle from "../assets/Diagonal-Rect.png";
import aboutUsImg from "../assets/About-img.png";
import certi from "../assets/Certificate.png";
import courses from "../assets/Courses.png";

export default function CoursesPage() {
  return (
    <div>
      <Navbar />
      <div
        id="aboutUs-section"
        className="container-fluid aboutUs landing-section"
      >
        <div className="head-text container">
          <h1 id="gradient">COURSES</h1>
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
      <div className="container coursespage-section">
        <div className="courses-section-head">
          <h3>Engage With The Best Experience Program</h3>
        </div>
        <div className="container blocks">
          <div className="block1">
            <div className="yellow-circle col-md-6 col-sm-12"></div>
            <div className="yellow-circle-para">
              <p>Foundation Courses (Class VIII-X)</p>
            </div>
            <div className="courses-para col-md-6 col-sm-12">
              <p>Number of Days : 6 days in a week.</p>
              <p> Subjects: Mathematics, Science, SST and English.</p>
              <p> Number of classes per day: 4</p>{" "}
              <p>Total Class Duration: 3 hours</p>{" "}
              <p>Class duration of each class: 45 minutes</p>
              <p>Practice sessions in classrooms: 6</p>
              <p> Number of Tests: 3 tests per week</p>
              <p> Timing for summer: 3:00- 6:00 PM </p>
            </div>
          </div>
          <div className="block1 fl">
            <div className=" left-para col-md-6 col-sm-12">
              <p>Number of Days : 7 days in a week.</p>
              <p>Number of classes per week: 3</p>{" "}
              <p>Practice sessions under invigilation: 3</p>
              <p> Class Duration: 4 hours</p>{" "}
              <p> Test: 1 + 1 (CBSE & IIT-JEE/NEET) </p>
              <p> Timing: 2:30-6:30 PM </p>
            </div>
            <div className="yellow-circle right-circle col-md-6 col-sm-12">
              <div className="yellow-circle-para-right">
                <p>1-Year Program (Class XI-CBSE, IIT-JEE and NEET)</p>
              </div>
            </div>
          </div>
          <div className="block1 nfl">
            <div className="yellow-circle col-md-6 col-sm-12"></div>
            <div className="yellow-circle-para">
              <p>1-Year Program (Class XI-CBSE, IIT-JEE and NEET)</p>
            </div>
            <div className="courses-para col-md-6 col-sm-12">
              <p>Number of Days : 7 days in a week.</p>
              <p>Number of classes per week: 3</p>{" "}
              <p>Practice sessions under invigilation: 3</p>
              <p> Class Duration: 4 hours</p>{" "}
              <p> Test: 1 + 1 (CBSE & IIT-JEE/NEET) </p>
              <p> Timing: 2:30-6:30 PM </p>
            </div>
          </div>
          <div className="block1">
            <div className="yellow-circle col-md-6 col-sm-12"></div>
            <div className="yellow-circle-para">
              <p>2-Year Program (Class XII-CBSE, IIT-JEE and NEET)</p>
            </div>
            <div className="courses-para col-md-6 col-sm-12">
              <p>Number of Days : 7 days in a week.</p>
              <p>Number of classes per week: 3</p>{" "}
              <p>Practice sessions under invigilation: 3</p>
              <p> Class Duration: 4 hours</p>{" "}
              <p> Test: 1 + 1 (CBSE & IIT-JEE/NEET) </p>
              <p> Timing: 2:30-6:30 PM </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="container courses-feature-head">
          <h1>Online Exclusive Classroom</h1>
          <span>4-YOU</span>
          <h3>The Exclusive Classroom That Gurantees Success</h3>
        </div>

        <div className="container feature-block">
          <h3>Features</h3>
          <img src={courses} />
          <p>ONLY ONLINE CLASSROOM WITH REAL ONE-TO-ONE INTERACTION</p>
          <p>CLASSROOM WILL NOT HAVE MORE THAN 4 STUDENTS.</p>
          <p>GET YOURSELF PERSONAL MENTORS</p>
          <p>
            GET TESTS SERIES, DPPS, PRACTICE SESSIONS WITH TEACHER INTERACTION
          </p>
          <p>TEACHERS WILL ONLY FOCUS ON YOU AND NO OTHER STUDENT</p>
          <button>ENROLL NOW</button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
