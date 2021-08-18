import React, { useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../Header/header";
import jointcircle from "../../images/jointcircle.png";
import arrow_right from "../../images/arrow_right.png";
import arrowhead from "../../images/arrowhead.png";
import bullet from "../../images/bullet-circle.png";
import branding from "../../images/branding.png";
import video from "../../images/video.png";
import Footer from "../Footer/footer";
import Newsletter from "./Newsletter";
import tylenol from "../../images/tylenol2.png";

const Services = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500
    });
    AOS.refresh();
  }, []);

  return (
    <div>
      <Header />
      <div className="toppagepadding"></div>
      <div className="services_section-1">
        <img src={jointcircle} alt="img" />
        <h6>About Us</h6>
        <h2>Our Services</h2>
        <p>
          At PacePharmaCare, we offers convenient pharmacy services with a focus
          on your health and safety. Whether you are a patient or you receive
          health care elsewhere, we make sure your medication is right for you.
        </p>
      </div>
      <div className="servicepg_section2">
        <Container>
          <Row>
            <Col md={6}>
              <h6 className="heading_tertiary">PRODUCTS</h6>
              <h1 className="heading_secondary">
                Marketing and Sales of Pharmaceutical Products .{" "}
              </h1>
              <p>
                Pace Pharma Care represents major brands in Nigeria and across
                Africa. We explore partnerships that deliver utmost value to our
                customers. Our partnership starts from the point of securing
                regulatory approvals for the distribution of products through to
                positioning the products and ultimately ensuring that it is sold
                and distributed across all the 36 states of Nigeria and the
                Federal Capital. We have fit for purpose storage facilities that
                ensure that pharmaceutical products remain in their best and
                appropriate states all through their distribution cycle. Our
                relationship with local pharmaceutical and dispensary outlets
                ensure that new brands in our portfolio are made available to
                end users at the shortest possible time.
              </p>
              <span className=" section_3_col2btn">
                View our Products{" "}
                <span>
                  <img src={arrow_right} alt="pic" />
                  <img src={arrow_right} alt="pic" />
                </span>
              </span>
            </Col>
            <Col md={6}>
              <img src={tylenol} className="img-fluid" alt="img" /> 
            </Col>
          </Row>
        </Container>
      </div>
      <div className="service_section3">
        <Container>
          <Row>
            <Col md={6}>
              <div className="medicineplatewrap">
                <img src={arrowhead} alt="img" />
              </div>
            </Col>
            <Col md={6} className="section-about marketabout">
              <div className="section_3">
                <h6 className="heading_tertiary">RESEARCH</h6>
                <h1 className="heading_secondary">MARKET RESEARCH</h1>
                <p className="content_sf servicecontent_sf">
                  Leveraging on our extensive network and relationship with
                  major distribution outlets across Nigeria, we are able to
                  conduct market research for new products within a very short
                  period. Our team of experts with extensive experience in
                  retail sales and pharmaceuticals provides the bedrock for the
                  high success rates of our research outcomes. The Nigerian
                  market is a large space with multiple segments. We will help
                  you identify the sweet spot and minimise the costs associated
                  with an uninformed market entrance.
                </p>
                <ul className="section-3-list">
                  <li>
                    <span className="list_bullet">
                      <img src={bullet} />
                    </span>
                    Research customer’s behaviour and how to give them better
                    experience
                  </li>
                  <li>
                    <span className="list_bullet">
                      <img src={bullet} />
                    </span>
                    Know what our customers want and make it available
                  </li>
                  <li>
                    <span className="list_bullet">
                      <img src={bullet} />
                    </span>
                    Get notified when your drug is available
                  </li>
                </ul>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="service_section4">
        <Container>
          <Row>
            <Col md={6}>
              <div className="section_4_col1">
                <h6 className="heading_tertiary">PRODUCTS</h6>
                <h1 className="heading_secondary">Brand Representation</h1>
                <p className="content_sf servicecontent_sf">
                  Let Pace Pharma Care represent your brand in Nigeria. We
                  provide the full range of Brand representation services. This
                  can be customised depending on your unique requirement. We
                  focus on result and deliver according to your brand
                  aspirations for the Nigerian and African Market.
                </p>
              </div>
            </Col>
            <Col md={6}>
              <div className="text-center">
                <img src={branding} alt="img" className="img-fluid" />
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      {/* <div className="service_section5">
        <Container>
          <Row>
            <Col md={12} className="service_section5jointcircle">
              <img src={jointcircle} alt="img" />
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <div className="section_4_col1">
                <h1 className="heading_secondary serviceheading_secondary">
                  A message from our amazing team
                </h1>
                <p className="servicecontent_sf">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam nisi egestas volutpat quam cursus malesuada a ac urna.
                  Sed ac id nam accumsan, quam imperdiet sit. Fermentum, gravida
                  neque tempor maecenas morbi urna libero amet, diam. Sed sed
                  eget arcu leo, est tortor, auctor risus. Aenean vestibulum
                  vulputate amet, a at iaculis. Ut morbi pellentesque et mattis
                  tincidunt rhoncus purus quam arcu. Ornare facilisis quis
                  molestie massa. Est urna, donec vitae mollis arcu.Elementum et
                  et egestas tortor in neque, libero. Ullamcorper facilisi.
                </p>
              </div>
            </Col>
            <Col md={6} className="text-center">
               <div className="videoSection">
                <iframe
                  // src="https://www.youtube.com/embed/LQ_41yuGttA"
                  title="main_video"
                ></iframe>
              </div>
              <img src={video} alt="image" className="img-fluid" />
            </Col>
          </Row>
        </Container>
      </div> */}
      <Newsletter />
      <Footer />
    </div>
  );
};
export default Services;
