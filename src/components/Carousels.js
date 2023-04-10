import React from "react";
import Cirlce1 from "../assets/Ayushi Image.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
export default function Carousels() {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <Carousel responsive={responsive}>
      <div>
        <div className="t1">
          <div className="col-md-6 left-s">
            <img src={Cirlce1}></img>
          </div>
          <i class="fa fa-quote-left quotes" aria-hidden="true"></i>
          <div className="col-md-6" id="paper">
            <div id="pattern">
              <div id="content">
                FEAT coaching institute motivates students towards
                self-betterment and healthy competition. The faculty members are
                experienced and provide concise material notes and exam tips.
                Overall, FEAT provides an all-around experience that leads to
                academic success and personal growth.
                <br />
                <br />
                <span>
                  - Umang Balyan <br />
                  MEERUT RANK-1, 98.8% XII-PCM (2020)
                  <br /> AIR-6, 99% X (2018)
                </span>
              </div>
            </div>
          </div>
          <i className="fa fa-map-pin pin"></i>
        </div>
      </div>
      <div>
        <div className="t1 t2">
          <div className="col-md-6 left-s">
            <img src={Cirlce1}></img>
          </div>
          <i class="fa fa-quote-left quotes" aria-hidden="true"></i>
          <div className="col-md-6" id="paper">
            <div id="pattern">
              <div id="content">
                Learning here has always been interesting, fun, and never
                mechanical or boring. The faculty was available for me 24*7 to
                help me discover my capabilities and resolve all my problems.
                <br />
                <br />
                <span>
                  - Khushi Chaudhary
                  <br /> 100/100 Chemistry, 97.8 % PCB-XII (2022)
                </span>
              </div>
            </div>
          </div>

          <i className="fa fa-map-pin pin"></i>
        </div>
      </div>
      <div>
        <div className="t1">
          <div className="col-md-6 left-s">
            <img src={Cirlce1}></img>
          </div>
          <i class="fa fa-quote-left quotes" aria-hidden="true"></i>
          <div className="col-md-6" id="paper">
            <div id="pattern">
              <div id="content">
                FEAT coaching institute is outstanding! The faculty members are
                experienced and knowledgeable and mentor you academically and
                personally. The infrastructure is top-notch, and they focus on
                developing their students as individuals. Highly recommend it
                for JEE preparation.
                <br />
                <br />
                <span>
                  - Shreyash Singh Salv <br />
                  99.05%ile Chemistry, JEE-MAIN (2023) <br />
                  98.63%ile JEE-MAIN (2023)
                </span>
              </div>
            </div>
          </div>
          <i className="fa fa-map-pin pin"></i>
        </div>
      </div>
      <div>
        <div className="t1 t2">
          <div className="col-md-6 left-s">
            <img src={Cirlce1}></img>
          </div>
          <i class="fa fa-quote-left quotes" aria-hidden="true"></i>
          <div className="col-md-6" id="paper">
            <div id="pattern">
              <div id="content">
                This place is excellent for those who want to explore
                self-study. The teachers are supportive and teach not just the
                subjects but also effective self-study techniques. The
                self-study zone is unique, and teachers are available for 10-12
                hours. Ideal for IIT-JEE, NEET, or board preparation.
                <br />
                <br />
                <span>
                  -Sehej Jot Singh <br />
                  99.39%ile Chemistry JEE-MAIN, <br /> 98.13%ile JEE-MAIN, 2023
                </span>
              </div>
            </div>
          </div>

          <i className="fa fa-map-pin pin"></i>
        </div>
      </div>
      <div>
        <div className="t1">
          <div className="col-md-6 left-s">
            <img src={Cirlce1}></img>
          </div>
          <i class="fa fa-quote-left quotes" aria-hidden="true"></i>
          <div className="col-md-6" id="paper">
            <div id="pattern">
              <div id="content">
                I cannot express enough how this institute has completely
                transformed my life and helped me achieve my dreams. The
                knowledge and skills I gained here are priceless gifts I will
                always cherish. Undoubtedly, this institute has played a crucial
                role in making my dreams a reality.
                <br />
                <br />
                <span>
                  -Shivangi Ahalwat <br />
                  AIR-3824, JEE-Advanced 2021
                </span>
              </div>
            </div>
          </div>
          <i className="fa fa-map-pin pin"></i>
        </div>
      </div>
      <div>
        <div className="t1 t2">
          <div className="col-md-6 left-s">
            <img src={Cirlce1}></img>
          </div>
          <i class="fa fa-quote-left quotes" aria-hidden="true"></i>
          <div className="col-md-6" id="paper">
            <div id="pattern">
              <div id="content">
                FEAT coaching is a game-changer! The experienced faculty mentors
                you, offering academic and personal guidance. Top-notch
                infrastructure and emphasis on personal growth through time
                management, discipline, and workshops. Highest JEE qualifier
                percentage in the area. It is highly recommended for serious JEE
                preparation and personal development.
                <br />
                <br />
                <span>
                  -Aryan Balyan <br />
                  99.84%ile, JEE-MAIN 2019
                </span>
              </div>
            </div>
          </div>

          <i className="fa fa-map-pin pin"></i>
        </div>
      </div>
      <div>
        <div className=" t1">
          <div className="col-md-6 left-s">
            <img src={Cirlce1}></img>
          </div>
          <i class="fa fa-quote-left quotes" aria-hidden="true"></i>
          <div className="col-md-6" id="paper">
            <div id="pattern">
              <div id="content">
                If you prepare for IIT JEE, this institute can provide the best
                environment. The way of preparation is entirely different from
                other institutes; they have self-study zones in the center which
                can be beneficial as a student can self-study under the guidance
                of teachers. Other than that, they are meeting the parents
                monthly to discuss students and the problems parents face.
                <br />
                <br />
                <span>
                  -Aditya Ahlawat <br /> 97.01%ile JEE-MAIN (2023),
                </span>
              </div>
            </div>
          </div>
          <i className="fa fa-map-pin pin"></i>
        </div>
      </div>
      <div>
        <div className="t1 t2">
          <div className="col-md-6 left-s">
            <img src={Cirlce1}></img>
          </div>
          <i class="fa fa-quote-left quotes" aria-hidden="true"></i>
          <div className="col-md-6" id="paper">
            <div id="pattern">
              <div id="content">
                Gaurav sir's teachings at FEAT coaching institute go beyond
                academics. His emphasis on mental strength, self-analysis, and a
                healthy competition has helped me grow intellectually and
                emotionally. I've learned the importance of self-awareness and
                have developed the ability to handle challenging situations
                easily
                <br />
                <br />
                <span>
                  -Devansh Malik <br /> 96.50%ile, JEE-MAIN (2023)
                </span>
              </div>
            </div>
          </div>

          <i className="fa fa-map-pin pin"></i>
        </div>
      </div>
    </Carousel>
  );
}
