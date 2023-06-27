import Navbar from "./Navbar";
import Footer from "./Footer";
import React from "react";
import Form from "./FormSubmission";
import aboutUsImg from "../assets/About-img.png";
import certi from "../assets/Certificate.svg";
import ContactForm from "./ContactForm";
import Document from "../assets/files/Document.pdf";

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
        <div className="course-box">
          <h4>Foundation Course</h4>
          <div className="card-head">
            <div className="headers">
              <div
                style={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                }}
              >
                <i class="fa-solid fa-book-open-reader"></i>
                <div style={{ textAlign: "left", paddingLeft: "1vh" }}>
                  <small>
                    For
                    <br />
                    Class 11 students
                  </small>
                </div>
              </div>
            </div>
            <div className="headers">
              <div
                style={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                }}
              >
                <i class="fa-solid fa-award"></i>
                <div style={{ textAlign: "left", paddingLeft: "1vh" }}>
                  <small>
                    For
                    <br />
                    Class 11 students
                  </small>
                </div>
              </div>
            </div>
            <div className="headers">
              <div
                style={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                }}
              >
                <i class="fa-solid fa-file-pdf"></i>
                <div style={{ textAlign: "left", paddingLeft: "1vh" }}>
                  <small>
                    <a href={Document} download="document" target="_blank">
                      Download Course Details
                    </a>
                  </small>
                </div>
              </div>
            </div>
          </div>

          <hr className="solid" />
          <div className="course-info">
            <div>
              <h6>
                {" "}
                <i class="fa-solid fa-stopwatch"></i>Frequency
              </h6>
              <ul>
                <li>3-4 days a week for weekdays</li>

                <li>2 days a week for weekends: Saturday & Sunday</li>

                <br />
              </ul>
            </div>
            <div>
              <h6>
                {" "}
                <i class="fa-solid fa-calendar-days"></i>Frequency
              </h6>
              <ul>
                <li>3-4 days a week for weekdays</li>

                <li>2 days a week for weekends: Saturday & Sunday</li>

                <br />
              </ul>
            </div>
            <div>
              <h6>
                {" "}
                <i class="fa-solid fa-calendar-days"></i>Frequency
              </h6>
              <ul>
                <li>3-4 days a week for weekdays</li>

                <li>2 days a week for weekends: Saturday & Sunday</li>

                <br />
              </ul>
            </div>
          </div>
          <div className="course-buttons">
            <a href="#callback">
              {" "}
              <button>Request a call back</button>
            </a>
            <a href="https://www.google.com/maps/place/FEAT:+THE+CAREER+INSTITUTE+-+IIT+JEE,+NEET,+Olympiads,+CBSE/@29.0517489,77.7132659,17z/data=!4m12!1m5!3m4!2zMjnCsDAzJzA2LjMiTiA3N8KwNDInNTUuNiJF!8m2!3d29.0517489!4d77.7154546!3m5!1s0x390c6f4927f90c5d:0x82059f3f0d07b03d!8m2!3d29.0516154!4d77.7154147!16s%2Fg%2F11jkbpy_5w?entry=ttu">
              {" "}
              <button>Find Center Location</button>
            </a>
          </div>
        </div>
        <div className="course-box">
          <h4>Foundation Course</h4>
          <div className="card-head">
            <div className="headers">
              <div
                style={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                }}
              >
                <i class="fa-solid fa-book-open-reader"></i>
                <div style={{ textAlign: "left", paddingLeft: "1vh" }}>
                  <small>
                    For
                    <br />
                    Class 11 students
                  </small>
                </div>
              </div>
            </div>
            <div className="headers">
              <div
                style={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                }}
              >
                <i class="fa-solid fa-award"></i>
                <div style={{ textAlign: "left", paddingLeft: "1vh" }}>
                  <small>
                    For
                    <br />
                    Class 11 students
                  </small>
                </div>
              </div>
            </div>
            <div className="headers">
              <div
                style={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                }}
              >
                <i class="fa-solid fa-file-pdf"></i>
                <div style={{ textAlign: "left", paddingLeft: "1vh" }}>
                  <small>
                    <a href={Document} download="document" target="_blank">
                      Download Course Details
                    </a>
                  </small>
                </div>
              </div>
            </div>
          </div>

          <hr className="solid" />
          <div className="course-info">
            <div>
              <h6>
                {" "}
                <i class="fa-solid fa-stopwatch"></i>Frequency
              </h6>
              <ul>
                <li>3-4 days a week for weekdays</li>

                <li>2 days a week for weekends: Saturday & Sunday</li>

                <br />
              </ul>
            </div>
            <div>
              <h6>
                {" "}
                <i class="fa-solid fa-calendar-days"></i>Frequency
              </h6>
              <ul>
                <li>3-4 days a week for weekdays</li>

                <li>2 days a week for weekends: Saturday & Sunday</li>

                <br />
              </ul>
            </div>
            <div>
              <h6>
                {" "}
                <i class="fa-solid fa-calendar-days"></i>Frequency
              </h6>
              <ul>
                <li>3-4 days a week for weekdays</li>

                <li>2 days a week for weekends: Saturday & Sunday</li>

                <br />
              </ul>
            </div>
          </div>
          <div className="course-buttons">
            <a href="#callback">
              {" "}
              <button>Request a call back</button>
            </a>
            <a href="https://www.google.com/maps/place/FEAT:+THE+CAREER+INSTITUTE+-+IIT+JEE,+NEET,+Olympiads,+CBSE/@29.0517489,77.7132659,17z/data=!4m12!1m5!3m4!2zMjnCsDAzJzA2LjMiTiA3N8KwNDInNTUuNiJF!8m2!3d29.0517489!4d77.7154546!3m5!1s0x390c6f4927f90c5d:0x82059f3f0d07b03d!8m2!3d29.0516154!4d77.7154147!16s%2Fg%2F11jkbpy_5w?entry=ttu">
              {" "}
              <button>Find Center Location</button>
            </a>
          </div>
        </div>
        <div className="course-box">
          <h4>Foundation Course</h4>
          <div className="card-head">
            <div className="headers">
              <div
                style={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                }}
              >
                <i class="fa-solid fa-book-open-reader"></i>
                <div style={{ textAlign: "left", paddingLeft: "1vh" }}>
                  <small>
                    For
                    <br />
                    Class 11 students
                  </small>
                </div>
              </div>
            </div>
            <div className="headers">
              <div
                style={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                }}
              >
                <i class="fa-solid fa-award"></i>
                <div style={{ textAlign: "left", paddingLeft: "1vh" }}>
                  <small>
                    For
                    <br />
                    Class 11 students
                  </small>
                </div>
              </div>
            </div>
            <div className="headers">
              <div
                style={{
                  display: "flex",
                  justifyContent: "left",
                  alignItems: "center",
                }}
              >
                <i class="fa-solid fa-file-pdf"></i>
                <div style={{ textAlign: "left", paddingLeft: "1vh" }}>
                  <small>
                    <a href={Document} download="document" target="_blank">
                      Download Course Details
                    </a>
                  </small>
                </div>
              </div>
            </div>
          </div>

          <hr className="solid" />
          <div className="course-info">
            <div>
              <h6>
                {" "}
                <i class="fa-solid fa-stopwatch"></i>Frequency
              </h6>
              <ul>
                <li>3-4 days a week for weekdays</li>

                <li>2 days a week for weekends: Saturday & Sunday</li>

                <br />
              </ul>
            </div>
            <div>
              <h6>
                {" "}
                <i class="fa-solid fa-calendar-days"></i>Frequency
              </h6>
              <ul>
                <li>3-4 days a week for weekdays</li>

                <li>2 days a week for weekends: Saturday & Sunday</li>

                <br />
              </ul>
            </div>
            <div>
              <h6>
                {" "}
                <i class="fa-solid fa-calendar-days"></i>Frequency
              </h6>
              <ul>
                <li>3-4 days a week for weekdays</li>

                <li>2 days a week for weekends: Saturday & Sunday</li>

                <br />
              </ul>
            </div>
          </div>
          <div className="course-buttons">
            <a href="#callback">
              <button>Request a call back</button>
            </a>
            <a href="https://www.google.com/maps/place/FEAT:+THE+CAREER+INSTITUTE+-+IIT+JEE,+NEET,+Olympiads,+CBSE/@29.0517489,77.7132659,17z/data=!4m12!1m5!3m4!2zMjnCsDAzJzA2LjMiTiA3N8KwNDInNTUuNiJF!8m2!3d29.0517489!4d77.7154546!3m5!1s0x390c6f4927f90c5d:0x82059f3f0d07b03d!8m2!3d29.0516154!4d77.7154147!16s%2Fg%2F11jkbpy_5w?entry=ttu">
              {" "}
              <button>Find Center Location</button>
            </a>
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
          {/* <img src={courses} /> */}
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
      <div className="talkFeature">
        <h2>Talk to our expert</h2>
        <button>
          <a href="tel:8882192787">
            <i class="fa-solid fa-phone"></i>Call now for free
          </a>
        </button>
        <br />
        <span>or</span>

        <h4>Request call back</h4>

        <i className="fa-solid fa-arrow-down arrow"></i>
      </div>

      <div id="callback">
        <ContactForm />
      </div>
      <Footer />
    </div>
  );
}
