import React, { Fragment } from "react";
import { Dialog, Grid } from "@mui/material";
import Contact from "./contact";
import RelatedProject from "./related";
import Image from "next/image";

const ProjectSingle = ({
  maxWidth,
  open,
  onClose,
  title,
  pImg,
  psub1img1,
  psub1img2
}) => {
  return (
    <Fragment>
      <Dialog
        open={open}
        onClose={onClose}
        className="modalWrapper quickview-dialog"
        maxWidth={maxWidth}
      >
        <Grid className="modalBody modal-body project-modal">
          <button className="modal-close" onClick={onClose}>
            <i className="fa fa-close"></i>
          </button>
          <div className="tp-project-single-area">
            <div className="container">
              <div className="row justify-content-center">
                <div className="col-lg-12 col-12">
                  <div className="tp-project-single-wrap">
                    <div className="tp-project-single-item">
                      <div className="row align-items-center mb-5">
                        <div className="col-lg-7">
                          <div className="tp-project-single-title">
                            <h3>{title} Project</h3>
                          </div>
                          <p>
                            Explore our latest project, a testament to our
                            creativity, innovation, and attention to detail.
                            Designed to meet the highest standards, this project
                            showcases our ability to turn ideas into impactful
                            solutions.
                          </p>
                          <p>
                            With a focus on user experience, modern aesthetics,
                            and cutting-edge technology, our latest work
                            highlights our commitment to excellence. Each
                            element is carefully crafted to reflect the client’s
                            vision and achieve their business goals.
                          </p>
                        </div>
                        <div className="col-lg-5">
                          <div className="tp-project-single-content-des-right">
                            <ul>
                              <li>
                                Location :<span>7 Lake Street,London</span>
                              </li>
                              <li>
                                Client :<span>wpOceans</span>
                              </li>
                              <li>
                                Consult :<span>Harry Johnson</span>
                              </li>
                              <li>
                                Project Type :<span>Tonu React</span>
                              </li>
                              <li>
                                Duration :<span>6 Month</span>
                              </li>
                              <li>
                                Completion :<span>15 Apr 2023</span>
                              </li>
                              <li>
                                Share :<span>Creative, Portfolio</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                      <div className="tp-project-single-main-img">
                        <Image src={pImg} alt="" />
                      </div>
                    </div>
                    <div className="tp-project-single-item list-widget">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="tp-project-single-title">
                            <h3>Our Strategies</h3>
                          </div>
                          <p>
                            To ensure the success of our latest project, we
                            implemented a set of well-defined strategies focused
                            on quality, innovation, and efficiency:
                          </p>
                          <ul>
                            <li>
                              Conducted extensive research to understand the
                              client’s requirements, target audience, and
                              industry trends.
                            </li>
                            <li>
                              Prioritized creating an intuitive, responsive, and
                              visually appealing interface for optimal user
                              experience.
                            </li>
                            <li>
                              Adopted an agile workflow for flexibility, quick
                              iterations, and seamless collaboration throughout
                              the project.
                            </li>
                            <li>
                              Leveraged the latest tools and frameworks to build
                              a scalable, secure, and high-performing solution.
                            </li>
                            <li>
                              Integrated rigorous testing phases to identify and
                              address potential issues, ensuring a flawless
                              final product.
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-6">
                          <div className="tp-project-single-item-quote">
                            <p>
                              "Amazing looking theme and instantly turns your
                              application into a great looking one. Really shows
                              that pro_ fessionals built this theme up. Very
                              happy with the way the theme looks ."
                            </p>
                            <span>
                              Robert - <span>Yellow Theme</span>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tp-project-single-item">
                      <div className="tp-project-single-title">
                        <h3>Our approach</h3>
                      </div>
                      <p>
                        In our latest project, we adopted a user-centric
                        approach, starting with a deep understanding of the
                        client’s vision and goals. By combining creativity with
                        functionality, we ensured the design not only captures
                        attention but also delivers a seamless user experience.
                        Our process involved meticulous planning, wireframing,
                        and iterative design to align every detail with the
                        project’s objectives. Leveraging the latest technologies
                        and design trends, we created a solution that is both
                        visually striking and highly functional. From concept to
                        completion, our approach focused on collaboration,
                        precision, and delivering a project that truly stands
                        out.
                      </p>
                    </div>
                    <div className="tp-project-single-gallery">
                      <div className="row mt-4">
                        <div className="col-md-6 col-sm-6 col-12">
                          <div className="tp-p-details-img">
                            <Image src={psub1img1} alt="" />
                          </div>
                        </div>
                        <div className="col-md-6 col-sm-6 col-12">
                          <div className="tp-p-details-img">
                            <Image src={psub1img2} alt="" />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="tp-project-single-item list-widget">
                      <div className="row">
                        <div className="col-lg-6">
                          <div className="tp-project-single-title">
                            <h3>Resieved goals</h3>
                          </div>
                          <ul>
                            <li>
                              Delivered an intuitive and seamless interface that
                              improves user engagement and satisfaction.
                            </li>
                            <li>
                              Created a fully responsive layout, ensuring
                              optimal functionality across all devices and
                              screen sizes.
                            </li>
                            <li>
                              Successfully reflected the client’s brand identity
                              through custom design elements and styling.
                            </li>
                            <li>
                              Implemented efficient coding practices to achieve
                              fast loading speeds and smooth performance.
                            </li>
                          </ul>
                        </div>
                        <div className="col-lg-6 list-widget-s">
                          <div className="tp-project-single-title">
                            <h3>Results</h3>
                          </div>
                          <ul>
                            <li>
                              The optimized design and SEO-friendly structure
                              led to a noticeable rise in organic traffic.
                            </li>
                            <li>
                              Enhanced user experience resulted in longer
                              session durations and improved interaction with
                              key features.
                            </li>
                            <li>
                              The seamless design and functionality contributed
                              to higher lead generation and customer
                              conversions.
                            </li>
                            <li>
                              A fully responsive design ensured consistent
                              performance across desktops, tablets, and
                              smartphones.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <RelatedProject />
                    <div className="tp-project-single-item">
                      <div className="tp-project-contact-area">
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
export default ProjectSingle;
