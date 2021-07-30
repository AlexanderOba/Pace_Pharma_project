import React from "react";
import "./home.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import Newsletter from "./Newsletter";
import AOS from "aos";
import "aos/dist/aos.css";
import PatnersSection from "./partenerSection";
import section2img from "../../images/section2img.png";
import medicineplate from "../../images/medicineplate.png";
import bullet from "../../images/bullet-circle.png";
import arrow_right from "../../images/arrow_right.png";
import model from "../../images/model.png";
import kuka from "../../images/kuka.png"



const Home = props => {
  console.log(props);
  //   useEffect(() => {
  //     AOS.init({
  //       duration: 1500
  //     });
  //     AOS.refresh();
  //   }, []);

  return (
    <div>
      <div className="section-1">
        <Header />
        <Container>
          <Row>
            <Col sm={12} lg={12} md={6} className="column-1">
              <h2 className="heading-primary">
                We care about your Health & the Healing
              </h2>
              <p className="heading-primary-descr">
                Giving you the best quality and approve tablets and capsules you
                take to heal your ailment is our uttermost desire is our
                uttermost desire
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <PatnersSection />
      <div className="section-3">
        <Container>
          <Row>
            <Col md={6}>
              <h6 className="heading_tertiary">ABOUT US</h6>
              <h1 className="heading_secondary">
                We are a pharmaceutical company, serving you better .{" "}
              </h1>
              <p className="content_sf">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                nisi egestas volutpat quam cursus malesuada a ac urna. Sed ac id
                nam accumsan, quam imperdiet sit. Fermentum, gravida neque
                tempor maecenas morbi urna libero amet, diam. Sed sed eget arcu
                leo, est tortor, auctor risus. Aenean vestibulum vulputate amet,
                a at iaculis. Ut morbi pellentesque et mattis tincidunt rhoncus
                purus quam arcu. Ornare facilisis quis molestie massa. Est urna,
                donec vitae mollis arcu. Elementum et et egestas tortor in
                neque, libero. Ullamcorper facilisi dignissim eu sodales. Dolor
                vulputate egestas congue sed aliquam scelerisque convallis.{" "}
              </p>
              <div className="medicineplatewrap">
                <img src={medicineplate} className="img-fluid" alt="img" />
              </div>
            </Col>
            <Col md={6} className="section-about">
              <div className="section_3_img">
                <img src={section2img} className="img-fluid" alt="img" />
              </div>
              <div className="section_3 section_3_col2">
                <h6 className="heading_tertiary">ALL-IN-ONE</h6>
                <h1 className="heading_secondary">
                  All your Pharmaceutical needs in one place{" "}
                </h1>
                <ul className="section-3-list">
                  <li>
                    <span className="list_bullet">
                      <img src={bullet} />
                    </span>
                    Search and find all kind of drugs
                  </li>
                  <li>
                    <span className="list_bullet">
                      <img src={bullet} />
                    </span>
                    We have drugs for soecial case treatments
                  </li>
                  <li>
                    <span className="list_bullet">
                      <img src={bullet} />
                    </span>
                    Get notified when your drug is available
                  </li>
                </ul>
                <span className=" section_3_col2btn">
                  Get prescription{" "}
                  <span>
                    <img src={arrow_right} alt="pic" />
                    <img src={arrow_right} alt="pic" />
                  </span>
                </span>
                <div className="mobilemedicineplatewrap">
                <img src={medicineplate} className="img-fluid" alt="img" />
              </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section_4">
        <Container>
          <Row className="section_4row">
            <Col md={5}>
              <p className="heading_tertiary">TESTIMONIAL FROM OUR CUSTOMERS</p>
              <h2 className="heading_primary">
                Explore Stories from our customers
              </h2>
              <p className="content_sf">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
                nisi egestas volutpat quam cursus malesuada a ac urna. Sed ac id
                nam accumsan, quam imperdiet sit. Fermentum, gravida neque
                tempor maecenas morbi urna libero amet, diam. Sed sed eget arcu
                leo, est tortor, auctor risus. Aenean vestibulum vulputate amet,
                a at iaculis.
              </p>
            </Col>
            <Col md={6}>
              <Carousel>
                <Carousel.Item>
                  <Row>
                    <Col md={6}>
                      <div className="feedbackcontent">
                        <p>
                          “The ease of delivery is one that I depended on when I
                          was bedriden and couldn’t even walk. Their services is
                          awesome”
                        </p>
                        <div className="feddbkuserdetailswrap">
                          <span>
                            <img src={model} alt="pic" />
                          </span>
                          <div>
                            <h6 className="feedbkusername">Williams Church</h6>
                            <p className="feedbkuserwrk">Pharmacist</p>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="feedbackcontent secodusercontent">
                        <p>
                          “The ease of delivery is one that I depended on when I
                          was bedriden and couldn’t even walk. Their customer
                          services is awesome”
                        </p>
                        <div className="feddbkuserdetailswrap">
                          <span>
                            <img src={kuka} alt="pic" />
                          </span>
                          <div>
                            <h6 className="feedbkusername">Fidelia Kuka</h6>
                            <p className="feedbkuserwrk">Baykins Pharmacy</p>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Carousel.Item>
                <Carousel.Item>
                  <Row>
                    <Col md={6}>
                      <div className="feedbackcontent">
                        <p>
                          “The ease of delivery is one that I depended on when I
                          was bedriden and couldn’t even walk. Their services is
                          awesome”
                        </p>
                        <div className="feddbkuserdetailswrap">
                          <span>
                            <img src={model} alt="pic" />
                          </span>
                          <div>
                            <h6 className="feedbkusername">Williams Church</h6>
                            <p className="feedbkuserwrk">Pharmacist</p>
                          </div>
                        </div>
                      </div>
                    </Col>
                    <Col md={6}>
                      <div className="feedbackcontent secodusercontent">
                        <p>
                          “The ease of delivery is one that I depended on when I
                          was bedriden and couldn’t even walk. Their customer
                          services is awesome”
                        </p>
                        <div className="feddbkuserdetailswrap">
                          <span>
                            <img src={kuka} alt="pic" />
                          </span>
                          <div>
                            <h6 className="feedbkusername">Fidelia Kuka</h6>
                            <p className="feedbkuserwrk">Baykins Pharmacy</p>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Carousel.Item>
              </Carousel>
            </Col>
          </Row>
        </Container>
      </div>
      <Newsletter/>
      <Footer />
    </div>
  );
};
export default Home;
