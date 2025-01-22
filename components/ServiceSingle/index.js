import React, { useState, Fragment } from "react";
import { Dialog, Grid } from "@mui/material";
import Contact from "./contact";
import Services from "../../api/service";
import Image from "next/image";

const ServiceSingle = ({
  maxWidth,
  open,
  onClose,
  title,
  dImg,
  sImg1,
  sImg2
}) => {
  return (
    <Fragment>
      <Dialog
        open={open}
        onClose={onClose}
        className="modalWrapper quickview-dialog"
        maxWidth={maxWidth}
      >
        <Grid className="modalBody modal-body">
          <button className="modal-close" onClick={onClose}>
            <i className="fa fa-close"></i>
          </button>
          <div className="tp-service-single-area">
            <div className="container">
              <div className="row">
                <div className="col-lg-12 col-12">
                  <div className="tp-service-single-wrap">
                    <div className="tp-service-single-item">
                      <div className="tp-service-single-main-img">
                        <Image src={dImg} alt="" />
                      </div>
                      <div className="tp-service-single-title">
                        <h3>{title}</h3>
                      </div>
                      <p>
                        We take pride in offering top-notch services designed to
                        exceed your expectations. Our team is dedicated to
                        providing innovative solutions tailored to your unique
                        needs, ensuring you receive the best value.
                      </p>
                      <p>
                        Whether it’s website design, development, or
                        optimization, we combine expertise with cutting-edge
                        technology to deliver exceptional results. From seamless
                        user interfaces to robust functionality, every service
                        we offer is crafted with precision and attention to
                        detail.
                      </p>
                      <div className="row mt-4">
                        <div className="col-md-6 col-sm-6 col-12">
                          <div className="tp-p-details-img">
                            <Image src={sImg1} alt="" />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-12">
                          <div className="tp-p-details-img">
                            <Image src={sImg2} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tp-service-single-item list-widget">
                      <div className="tp-service-single-title">
                        <h3>Our Capabilities</h3>
                      </div>
                      <p>
                        We pride ourselves on our diverse expertise and ability
                        to deliver exceptional results across various domains.
                        Our capabilities are driven by innovation, precision,
                        and a commitment to excellence, ensuring that we meet
                        and exceed client expectations.
                      </p>
                      <ul>
                        <li>
                          Crafting visually stunning, responsive, and
                          user-friendly websites tailored to your unique needs.
                        </li>
                        <li>
                          Building robust online stores with seamless shopping
                          experiences and secure payment systems.
                        </li>
                        <li>
                          Enhancing website visibility with strategies that
                          drive traffic and improve search engine rankings.
                        </li>
                        <li>
                          Designing intuitive interfaces that prioritize user
                          experience and engagement.
                        </li>
                        <li>
                          Ensuring fast load times and optimal website
                          performance across all devices
                        </li>
                      </ul>
                    </div>
                    <div className="tp-service-single-item">
                      <div className="tp-service-single-title">
                        <h3>Our approach</h3>
                      </div>
                      <p>
                        We believe that the best services start with a deep
                        understanding of our clients' needs and goals. Our
                        approach combines innovation, collaboration, and
                        meticulous attention to detail to ensure exceptional
                        results. We begin by analyzing your requirements,
                        followed by crafting tailored strategies that align with
                        your objectives. Every project is executed with a
                        commitment to quality, leveraging the latest tools and
                        technologies to deliver top-tier solutions. By
                        maintaining clear communication and a client-focused
                        mindset, we ensure a seamless process from start to
                        finish. Our mission is to provide services that not only
                        meet but exceed expectations, helping your business
                        thrive.
                      </p>
                    </div>
                    <div className="tp-service-single-item list-widget">
                      <div className="tp-service-single-title">
                        <h3>Our Work Process</h3>
                      </div>
                      <ul>
                        <li>
                          We begin by engaging in detailed discussions to
                          understand your goals, preferences, and project
                          requirements.
                        </li>
                        <li>
                          Based on your inputs, we create a comprehensive plan
                          and strategy tailored to your objectives.
                        </li>
                        <li>
                          Our creative team develops visually appealing and
                          functional designs, followed by precise coding and
                          development.
                        </li>
                        <li>
                          Rigorous testing is conducted to ensure the project is
                          bug-free, responsive, and meets all quality standards.
                        </li>
                      </ul>
                    </div>
                    <div className="tp-service-single-item">
                      <div className="tp-service-single-title">
                        <h3>Related Service</h3>
                      </div>
                      <div className="tp-service-area">
                        <div className="row align-items-center">
                          {Services.slice(0, 3).map((service, srv) => (
                            <div className="col-lg-4 col-md-6 col-12" key={srv}>
                              <div className="tp-service-item">
                                <i className={`fi ${service.icon}`}></i>
                                <h2>{service.sTitle}</h2>
                                <p>
                                  Lacus, etiam sed est eu tempus need Temer diam
                                  congue.
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="tp-service-single-item">
                      <div className="tp-service-contact-area">
                        <div className="tp-contact-title">
                          <h2>Have project in mind? Let's discuss</h2>
                          <p>
                            Get in touch with us to see how we can help you with
                            your project
                          </p>
                        </div>
                        <div className="tp-contact-form-area">
                          <Contact />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Grid>
      </Dialog>
    </Fragment>
  );
};
export default ServiceSingle;
