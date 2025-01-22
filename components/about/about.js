import Image from "next/image";
import React from "react";
import aImg from "/public/images/about/myphoto.png";

const About = (props) => {
  return (
    <section className="tf-about-section section-padding">
      <div className="container">
        <div className="tf-about-wrap">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-12">
              <div className="tf-about-img">
                <Image src={aImg} alt="" />
                <div className="tf-about-img-text">
                  <div className="tf-about-icon">
                    <h3>2+</h3>
                    <span>Years Exprience</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-12">
              <div className="tf-about-text">
                <small>about Me</small>
                <h2>Passionate App & Web Developer</h2>
                <h5>
                  I have 2+ years of experiences in App & Web Development.
                </h5>
                <p>
                  I am Imran Wali, an App and Web Developer with a passion for
                  creating innovative and user-friendly solutions. With
                  expertise in modern technologies and a keen eye for design, I
                  strive to deliver high-quality applications and websites that
                  make a difference. My goal is to combine creativity and
                  functionality to build seamless digital experiences.
                </p>

                <div className="tf-funfact">
                  <div className="tf-funfact-item">
                    <h3>
                      <span>20</span>+
                    </h3>
                    <p>Projects Completed</p>
                  </div>
                  <div className="tf-funfact-item">
                    <h3>
                      <span>02</span>+
                    </h3>
                    <p>Awards Win</p>
                  </div>
                  <div className="tf-funfact-item">
                    <h3>
                      <span>2</span>M+
                    </h3>
                    <p>Happy clients</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="visible-rotate-text">
        <h1>About Me</h1>
      </div>
    </section>
  );
};

export default About;
