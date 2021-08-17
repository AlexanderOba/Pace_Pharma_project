import React, { useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import chevron from "../../images/chevronright.png";
import Header from "../Header/header";
import Footer from "../Footer/footer";
import AOS from "aos";
import jointcircle from "../../images/jointcircle.png";
import "aos/dist/aos.css";
import facebook from "../../images/facebook_white.png";
import twitter from "../../images/twitter_white.png";
import instagram from "../../images/instagram_white.png";
import mail from "../../images/mail.png";
import phone from "../../images/phone.png";
import address from "../../images/address.png";

const Contact_page = () => {
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
      <div></div>
      <Container fluid>
        <Row>
          <Col md={6}>
            <div className="contact_jointcircle">
              <img src={jointcircle} alt="img" />
            </div>
            <div className="contact_form-wrap">
              <form className="contact_form">
                <h2>Contact US</h2>
                <p>
                  Feel free to contact anytime, we’ll get back to you as soon as
                  possible.
                </p>
                <label>
                  Name
                  <input type="text" className="form-control cntinput" />
                </label>
                <label>
                  Email
                  <input type="text" className="form-control cntinput" />
                </label>
                <label>
                  Message
                  <input type="text" className="form-control cntinput" />
                </label>
                <span className="formbtn">SEND</span>
              </form>
            </div>
          </Col>
          <Col md={6} className="contactpgcol2">
            <div className="cntctpg_socialicons">
              <span className="cntactpg_logos">
                <img src={facebook} className="img-fluid" />
              </span>
              <span className="cntactpg_logos">
                <img src={twitter} className="img-fluid" />
              </span>
              <span className="cntactpg_logos">
                <img src={instagram} className="img-fluid" />
              </span>
            </div>
          
          </Col>
        </Row>
        <Row>
            <Col md={6}></Col>
            <Col md={6}  className="infowrapcol">
            <div className="infowrap">
              <h2 className="info">Info</h2>
              <ul className="section-3-list">
                <li className="listflex">
                  <span className="list_bullet">
                    <img src={mail} />
                  </span>
                  <span>
                  info@pacepharmacares.com 
               </span>
                  </li>
                <li className="listflex">
                  <span className="list_bullet">
                    <img src={phone} />
                  </span>
                  +234-701 233 2332, +703 417 7688
                </li>
                <li className="listflex">
                  <span className="list_bullet">
                    <img src={address} />
                  </span>
                  <span>
                  Prime Mall complex along Mega One Events Way (Orchid Hotel Road), Lekki Lagos
                  </span>
                </li>
              </ul>
            </div>
            </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};
export default Contact_page;
