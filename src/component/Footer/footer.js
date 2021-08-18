import React, { useEffect } from "react";
import "./footer.css";
import { Container, Row, Col } from "react-bootstrap";
import logo from "../../images/footer-logo.png";
import facebook from "../../images/facebook.png";
import instagram from "../../images/instagram.png";
import linkedin from "../../images/linkedin.png";
import twitter from "../../images/twitter.png";

const Footer = () => {
  return (
    <div>
      <div className="footer-section">
        <Container className="footer_conatiner" fluid>
          <div className="footer-wrapper">
            <div className="fter-cmpny-dscrtn">
              <div className="footer-logodv">
                <img src={logo} alt="molecularlogo" />
              </div>
              <p className="">
                We help give meaning to life by expanding your options for a healthy and pleasurable life
              </p>
            </div>
            <div>
              <h4 className="footer-title">Company</h4>
              <p className="footer-links">Home</p>
              <p className="footer-links">Our Products</p>
              <p className="footer-links">Our Products</p>
            </div>
            <div>
              <h4 className="footer-title">Services</h4>
              <p className="footer-links">Marketing & Sales</p>
              <p className="footer-links">Market Research</p>
              <p className="footer-links">Brand Representation</p>
            </div>
            <div className="footer_addreswrap">
              <h4 className="footer-title">Address</h4>
              <p className="footer-links">
              Prime Mall complex along Mega One Events Way (Orchid Hotel Road), Lekki Lagos
              </p>
              <p className="footer-links">+234-701 233 2332, +703 417 7688</p>
            </div>
            <div className="footer_socialwrap">
              <h4 className="footer-title">Socials</h4>
              <div className="footer-socialwrapper">
                <span>
                  <img src={facebook} alt="img" />
                </span>
                <span>
                  <img src={instagram} alt="img" />
                </span>
                <span>
                  <img src={twitter} alt="img" />
                </span>
                <span>
                  <img src={linkedin} alt="img" />
                </span>
              </div>
              <p className="footer-links">
                info@pacepharmacares.com 
              </p>
              <p className="footer-links">
               enquiries@pacepharmacares.com
              </p>
            </div>
          </div>
          <div className="copyrightwrap">
            <div className="reserves">
              ©2021 PacePharmaCare copyright, All rights Reserved.
            </div>
            <div className="terms">Terms & Conditions</div>
            <div className="privacy">Privacy Policy</div>
          </div>
        </Container>
      </div>
    </div>
  );
};
export default Footer;
