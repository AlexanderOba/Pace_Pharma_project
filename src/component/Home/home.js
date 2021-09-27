import React,{useEffect} from "react";
import "./home.css";
import { Container, Row, Col, Carousel } from "react-bootstrap";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import Newsletter from "./Newsletter";
import AOS from "aos";
import "aos/dist/aos.css";
// import PatnersSection from "./partenerSection";
import section2img from "../../images/section2img.png";
import medicineplate from "../../images/medicineplate.png";
import bullet from "../../images/bullet-circle.png";
import arrow_right from "../../images/arrow_right.png";
import model from "../../images/model.png";
import kuka from "../../images/kuka.png";



const Home = props => {

  useEffect(() => {
    window.scrollTo(-0, -0);
  }, []);
  console.log(props);

  return (
    <div>
      <div className="section-1">
        <Header />
        <Container>
          <Row>
            <Col sm={12} lg={12} md={6} className="column-1">
              <h2 className="heading-primary">
                The Future is Healthy with Pace Pharma Care
              </h2>
              <p className="heading-primary-descr">
                Living healthy into old age is not just a possibility but a
                matter of choice. We provide a variety of health options to make
                life and living a healthy and pleasurable experience
              </p>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="section-3">
        <Container>
          <Row>
            <Col md={6}>
              <h6 className="heading_tertiary">ABOUT US</h6>
              <h1 className="heading_secondary">
                We are a health and lifestyle company dedicated to improving the
                quality of life of individuals across Africa with immediate
                focus in Nigeria .{" "}
              </h1>
              <p className="content_sf">
                Pace Pharma Care is involved in market development for global
                pharmaceutical brands. We also provide storage and distribution
                facilities making us an emerging powerhouse for pharmaceutical
                product delivery in Nigeria. Pace Pharma Care has partnered with
                pharmaceutical manufacturers across the world to import, market
                and distribute essential medications across Africa with greater
                focus on Nigeria with 36 states of the federation. 
              </p>
                <p className="content_sf">
                We
                distribute our pharmaceutical / health products to pharmacies
                spread across Africa, Government and non-governmental agencies,
                public sector, etc. Our Successful performance includes dozens
                of approvals, certifications by Government agencies and
                pharmaceutical regulations and 100% success rate on sole agency
                / distributorship audit. From identification of medicines
                requirements shipment, marketing and distribution, our expert
                staffs take an interdisciplinary approach to deliver expectation
                – exceeding results. 
                </p>
                <p className="content_sf">
                Currently we have Sole distributorship with
                a major medicine manufacturer in Europe and marketing /
                distributing tens of thousands of their pharmaceutical products
                in Nigeria and some West African countries. We are also
                discussing with some other pharmaceutical companies in Middle
                East, USA and Canada for sole distributorship in West Africa /
                Nigeria. Our Leadership team came from multi nationality and
                diverse cultures with capacity and experiences in various
                production, managerial, Logistics and leadership expertise with
                over 100 years cumulative experience.
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
                All your pharmaceutical needs in one place {" "}
                </h1>
                <ul className="section-3-list">
                  <li>
                    <span className="list_bullet">
                      <img src={bullet} />
                    </span>
                    	Get the best quality Supplements 
                  </li>
                  <li>
                    <span className="list_bullet">
                      <img src={bullet} />
                    </span>
                    	Improve your Sexual life 
                  </li>
                  <li>
                    <span className="list_bullet">
                      <img src={bullet} />
                    </span>
                    Get notified of new products
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
      {/* <div className="section_4">
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
      </div> */}
      <Newsletter />
      <Footer />
    </div>
  );
};
export default Home;
