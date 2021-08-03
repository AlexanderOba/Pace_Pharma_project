import React, { useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import Header from "../Header/header";
import AOS from "aos";
import "aos/dist/aos.css";
import sales from "../../images/sales.png";
import market from "../../images/market.png";
import brand from "../../images/brand.png";
import alex from "../../images/alex.png";
import ahara from "../../images/ahara.png";
import chris from "../../images/chris.png";
import arrowright from "../../images/arrowright.png";
import arrowleft from "../../images/arrowleft.png";
import Footer from "../Footer/footer";
import kingsley from "../../images/kingsley.png";
import mercy from "../../images/mercy.png";
import tolu from "../../images/tolu.png";
import emeka from "../../images/emeka.png";
import oye from "../../images/oye.png";
import perela from "../../images/perela.png";
import igwe from "../../images/igwe.png";
import lawal from "../../images/lawal.png";



const Company = () => {
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
      <div className="company_section-1">
        <h6>About Us</h6>
        <h2>Our Company</h2>
        <p>
          At PacePharmaCare, we offers convenient pharmacy services with a focus
          on your health and safety. Whether you are a patient or you receive
          health care elsewhere, we make sure your medication is right for you.
        </p>
      </div>
      <Container fluid className="cmpnypgcontainer">
        <div className="compny_section-2">
          <h6 className="heading_tertiary">MISSION</h6>
          <h1 className="heading_secondary">
            Our Mission is to Meet you Healthy .{" "}
          </h1>
          <p className="compnypgcontent">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            nisi egestas volutpat quam cursus malesuada a ac urna. Sed ac id nam
            accumsan, quamdhj hh imperdiet sit. Fermentum, gravida neque tempor
            maecenas morbi urna libero amet, diam. Sed sed eget arcu leo, est
            tortor, auctor risus. Aenean vestibulum ui vulputate amet, a at
            iaculis. Ut morbi pellentesque et mattis tincidunt rhoncus purus
            quam arcu. Ornare facilisis quis molestie massa. Est urna, donec
            vitae oip mollis arcu. Elementum et et egestas tortor in neque,
            libero. Ullamcorper facilisi dignissim eu sodales. Dolor vulputate
            egestas congue sed aliquam scelerisque convallis. Elementum et et
            egestas tortor in neque, libero. Ullamcorper facilisi dignissim eu
            sodales. Dolor vulp hjutate egestas congue sed aliquam scelerisque
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            nisi egestas volutpat quam cursus malesuada a ac urna. Sed ac id nam
            accumsan, quamdhj hh imperdiet sit. Fermentum, gravida neque tempor
            maecenas morbi urna libero amet, diam. Sed sed eget arcu leo, est
            tortor, auctor risus. Aenean vestibulum ui
          </p>
          <div className="company-offers">
            <div>
              <img src={sales} className="img-fluid" alt="img" />
            </div>
            <div>
              <img src={market} className="img-fluid" alt="img" />
            </div>
            <div>
              <img src={brand} className="img-fluid" alt="img" />
            </div>
          </div>
        </div>
        <h6 className="heading_tertiary">OUR TEAM </h6>
        <div className="companyteamwrap">
          <div className="companyteamtitle">
            <h1 className="heading_secondary">
              One Team, One Spirit, One Win!
            </h1>
          </div>
          <div className="companyteamcontentwrap">
            <p className="compnypgcontent">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
              nisi egestas volutpat quam cursus jf malesuada a ac urna. Sed ac
              id nam accumsan, quam imperdiet sit. Fermentum, gravida neque
              purus tempor maecenas morbi urna libero amet, diam. Sed sed eget
              arcu leo, est tortor, auctor risus. purusd Aenean vestibulum
              vulputate amet, a at iaculis. Ut morbi pellentesque et mattis
              tincidunt rhoncus ios
            </p>
          </div>
        </div>
        <h6 className="heading_tertiary">BOARD OF DIRECTORS</h6>
        <div className="compnypgdirectorswrap">
          <div className="compnydirectorcards">
            <img src={alex} className="img-fluid" alt="img" />
            <p className="cmpnydirectorname">
              <img src={arrowright} /> Anthony <img src={arrowleft} />
            </p>
            <p className="directorpostion">Executive Director</p>
          </div>
          <div className="compnydirectorcards">
            <img src={ahara} className="img-fluid" alt="img" />
            <p className="cmpnydirectorname">
              <img src={arrowright} /> Engr.(DR). Kevin Onuchukwu <img src={arrowleft} />
            </p>
            <p className="directorpostion">Managing Director</p>
          </div>
          <div className="compnydirectorcards">
            <img src={chris} className="img-fluid" alt="img" />
            <p className="cmpnydirectorname">
              <img src={arrowright} /> Pharm Ruth Chibuzor Izu-Okoro<img src={arrowleft} />
            </p>
            <p className="directorpostion"> Managing Director</p>
          </div>
        </div>
        <div className="team_section">
          <h6 className="heading_tertiary">
            <img src={arrowright} /> TEAM MEMBERS <img src={arrowleft} />{" "}
          </h6>
          <div className="teamwrapper">
              <div>
                  <img src={kingsley} className="offsetimg img-fluid" alt="img"/>
              </div>
              <div>
                  <img src={mercy} className=" img-fluid" alt="img"/>
              </div>
              <div>
                  <img src={tolu} className="offsetimg img-fluid" alt="img"/>
              </div>
              <div>
                  <img src={emeka} className=" img-fluid"  alt="img"/>
              </div>
          </div>
          <div className="teamwrapper">
              <div>
                  <img src={oye} className="offsetimg img-fluid" alt="img"/>
              </div>
              <div>
                  <img src={igwe} className=" img-fluid"  alt="img"/>
              </div>
              <div>
                  <img src={perela} className="offsetimg img-fluid" alt="img"/>
              </div>
              <div>
                  <img src={lawal} className=" img-fluid"  alt="img"/>
              </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};
export default Company;
