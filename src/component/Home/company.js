import React, { useEffect, useState } from "react";
import { Col, Row, Container, Modal } from "react-bootstrap";
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
import building from "../../images/building.jpg";
import white_board from "../../images/white_board.jpg";
import primall from "../../images/primall.jpg";
import tree from "../../images/tree.jpg";
import chair from "../../images/chair.jpg";
import tv from "../../images/tv.jpg";
import chinedu from "../../images/chinedu.jpg";
import sharique from "../../images/sharique.jpg";
import closeimg from "../../images/closeimg.png";

const Company = () => {
  useEffect(() => {
    AOS.init({
      duration: 1500
    });
    AOS.refresh();
  }, []);
  const [state, setState] = useState({
    terminateWorkModal: false,
    ruthWorkModal: false,
    anothonysWorkModal: false,
    chinedusWorkModal: false,
    shariqueWorkModal: false
  });
  const {
    terminateWorkModal,
    ruthWorkModal,
    anothonysWorkModal,
    chinedusWorkModal,
    shariqueWorkModal
  } = state;
  const workModal = () => {
    setState({
      ...state,
      terminateWorkModal: true
    });
  };
  const closeworkModal = () => {
    setState({
      ...state,
      terminateWorkModal: false
    });
  };
  const ruthsModal = () => {
    setState({
      ...state,
      ruthWorkModal: true
    });
  };
  const closeruthkModal = () => {
    setState({
      ...state,
      ruthWorkModal: false
    });
  };
  const anthonysModal = () => {
    setState({
      ...state,
      anothonysWorkModal: true
    });
  };
  const closeanthonyskModal = () => {
    setState({
      ...state,
      anothonysWorkModal: false
    });
  };
  const chinedusModal = () => {
    setState({
      ...state,
      chinedusWorkModal: true
    });
  };
  const closechineduModal = () => {
    setState({
      ...state,
      chinedusWorkModal: false
    });
  };
  const shariqueModal = () => {
    setState({
      ...state,
      shariqueWorkModal: true
    });
  };
  const closeshariqueModal = () => {
    setState({
      ...state,
      shariqueWorkModal: false
    });
  };
  return (
    <div>
      <Header />
      <div className="toppagepadding"></div>
      <div className="company_section-1">
        <h6>About Us</h6>
        <h2>Our Company</h2>
        <p>
          At PacePharmaCare, we deliver solutions that make life and living a pleasurable experience. We provide 
          products that cover every age and gender.
        </p>
      </div>
      <Container fluid className="cmpnypgcontainer">
        <div className="compny_section-2">
          <h6 className="heading_tertiary">MISSION</h6>
          <h1 className="heading_secondary">
            Our Mission is to deliver healthcare products that make life and living a pleasurable experience .{" "}
          </h1>
          <p className="compnypgcontent">
            We partner with global pharmaceutical companies to provide
            medicines that improve the quality of life of people across Africa
            and at an affordable cost. We recognise that the journey to healthy
            living starts with daily choices. Our goal is to provide
            pharmaceutical options that make quality living a reality to people
            across Africa. Our intervention point starts from preventive care
            through our broad range of Supplements. We also provide healthy
            options for an improved sexual life for both men and women. Beyond
            these, we are constantly scouting the world to establish
            partnerships that deliver medicines to the people of Africa. This is
            our journey, and we are just getting started
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
             PacePharmaCare is led by a group of seasoned professionals with experience in healthcare
             and other diverse fields of human endeavour. The diversity of the leadership team ensures
            that we are able to address every aspect of our business with balanced inputs and decisions
            </p>
          </div>
        </div>
        <Modal
          centered={true}
          onHide={closeworkModal}
          show={terminateWorkModal}
          className="cmpnmodal"
        >
          <div className="modalbody">
            <div className="terminateworkmodalimg">
              <img src={closeimg} alt="close" onClick={closeworkModal} />
            </div>
            <div className="modalheadersection">
              <div className="modalheadersection_col1">
                <img src={ahara} className="img-fluid" />
              </div>
              <div className="modalheadersection_col2">
                <p>
                  <strong>Engr. (DR). Kevin Onuchukwu</strong> graduated from
                  University of Port Harcourt where he obtained a Bachelor of
                  Engineering Degree (B.ENG) in Chemical Engineering in 1995. He
                  also obtained a Post Graduate Diploma in Business
                  Administration and a Master’s Degree in Business
                  Administration (MBA) from University of Calabar in 2012 and
                  Doctor of Engineering (D.Eng. Honoris Causa) from
                </p>c
              </div>
            </div>
            <p className="modalparagph">
              University of Uyo in 2017. DR. Kevin started his career in the Oil and Gas industry as 
              a Facilities Engineer in 1997. He
              held several technical, Planning, Supervisory, production
              operations, Maintenance managerial, Safety and leadership
              positions in Novas Scotia Canada, Houston Texas USA and other
              African countries covering Angola, Equatorial Guinea, Nigeria and
              Chad. Kevin is a member and Fellow of various professional bodies;
              Fellow, Nigerian Society of Engineers and member of the Council
              for the Regulation of Engineering in Nigeria Fellow, Institute of
              Safety Professionals of Nigeria (ISPON) Member, Nigerian Society
              of Petroleum Engineers (SPE) Kevin has served the Nigeria Society
              of Engineers (NSE) under several capacities both at the National,
              Divisional and Branch levels including Vice Chairman of the NSE
              organizing committees.
            </p>
          </div>
        </Modal>
        <Modal
          centered={true}
          onHide={closeruthkModal}
          show={ruthWorkModal}
          style={{
            paddingLeft: "8px",
            paddingRight: "8px"
          }}
        >
          <div className="modalbody">
            <div className="terminateworkmodalimg">
              <img src={closeimg} alt="close" onClick={closeruthkModal} />
            </div>
            <div className="modalheadersection">
              <div className="modalheadersection_col1">
                <img src={chris} className="img-fluid" />
              </div>
              <div className="modalheadersection_col2">
                <p>
                  <strong>Pharm. Chibuzor Ruth Izu-Okoro</strong> is a graduate
                  from Olabisi Onabanjo University (2007) where she obtained a
                  Bachelor of Pharmacy degree. She completed her internship
                  program in Federal Medical Centre Owerri in 2008 where she had
                  extensive training in Pharmaceutical care and supported
                  actively the nascent HIV patient care program during this
                  period.
                </p>
              </div>
            </div>
            <p className="modalparagph">
              She proceeded to deployment in Asaba for NYSC (2009) where she
              promoted actively, the free maternal and child care program
              already in place by the Delta state government in General Hospital
              Okwe. She proceeded to obtain MBA degree (2012) from Lagos
              Business School creating opportunities to provide consultation for
              small Businesses and various community pharmacies as well as
              acquiring skills in negotiation, analysis of business problems and
              She started her career as a Medical Sales representative in
              Novartis (2012) from whence she took up Team lead roles and
              further been promoted to a First line Manager in the Generic arm
              of the company (Sandoz) in 2016. In furtherance to drive
              excellence, she took a career detour to the FMCG industry where
              she currently serves as the Area Sales (Commercialization,
              innovation and retail execution) Manager in Diageo (2019). She is
              a member of the Pharmacist Society of Nigeria, Association of Lady
              Pharmacists and an active member of the LBSAA (Lagos Business
              Scholl Alumni Association).
            </p>
          </div>
        </Modal>
        <Modal
          centered={true}
          onHide={closeanthonyskModal}
          show={anothonysWorkModal}
          style={{
            paddingLeft: "8px",
            paddingRight: "8px"
          }}
        >
          <div className="modalbody">
            <div className="terminateworkmodalimg">
              <img src={closeimg} alt="close" onClick={closeanthonyskModal} />
            </div>
            <div className="modalheadersection">
              <div className="modalheadersection_col1">
                <img src={alex} className="img-fluid" />
              </div>
              <div className="modalheadersection_col2">
                <p>
                  <strong>Anthony Shishler</strong> is multi-skilled in
                  business, finance and technical matters, with extensive
                  management expertise internationally. He has demonstrated
                  success in meeting pre-determined targets and operational
                  goals with highly developed organizational skills that include
                  controlling and managing large operations from development
                  companies,
                </p>
              </div>
            </div>
            <p className="modalparagph">
              that include controlling and managing large operations from
              development companies, hotel management companies, cruise ships,
              large commercial organizations. Involved in the development and
              the launch of hotels and cruise ships, small-scale privately-owned
              developments to large scale investments houses and consortiums in
              hospitality and real estate, with various consulting roles from
              project management to operational over-sight and product delivery
              enhancement. A consummate professional passionate with over 23
              years experience across the globe.
            </p>
            <p className="modalparagph">
              Passions encompass design, corporate finance, education, loyalty
              franchise programs for lifestyle products, day to day management
              of portfolios along with third party asset management. A pure
              strategist and developer. His Business management footprint
              encompasses full P&L structure, bank negotiations, feasibility and
              product development including complex mergers or acquisitions
              corporate restructures, bond issuance, corporate capital raising,
              cash management and structured finance. A process driven
              professional with vast experience in deal structuring and
              negotiation. Anthony started his career working with top hotel
              brands and cruise line operators heading up special projects for
              Carnival Cruise Lines from ship launch to new product and
              deployment across the eighty-six-ship fleet. Moving into
              hospitality and real estate.
            </p>
            <p className="modalparagph">
              Anthony has been pivotal in securing funding and coordinating
              projects from construction to full operations. A strong leader
              with exceptional communication and an exceptional talent to lead
              and mentor large teams while possessing strong business and
              financial management skills with specialized focus on financial
              structure and control. Anthony studied in Austria at the
              prestigious Salzburg University where he achieved his Honors in
              Business Administration then furthered his studies at the Johnson
              & Wells Campus in Miami where he specialized in hospitality and
              financial management. Anthony brings to the table a vast
              international Network of Financial institutions, Investment funds
              and impact funds well versed in traditional capital raising and
              Islamic financing instruments with strong networks both locally in
              Nigeria and Internationally.
            </p>
          </div>
        </Modal>
        <Modal
          centered={true}
          onHide={closechineduModal}
          show={chinedusWorkModal}
        >
          <div className="modalbody">
            <div className="terminateworkmodalimg">
              <img src={closeimg} alt="close" onClick={closechineduModal} />
            </div>
            <div className="modalheadersection">
              <div className="modalheadersection_col1">
                <img src={chinedu} className="img-fluid" />
              </div>
              <div className="modalheadersection_col2">
                <p>
                  <strong>Chinedu Onuoha</strong> is the Executive Director
                  Operations at Pace Pharma Care. He is a project management
                  consultant, an innovator, and a digital financial technology
                  expert with deep experience in nurturing start-ups and
                  delivering complex projects. Before joining Pace Pharma Care,
                  Chinedu spent over 20 years in technology consulting and
                  banking where he rose to a general management position.
                </p>
              </div>
            </div>
            <p className="modalparagph">
              He is an alumnus of the Haas School of Business, University of
              California at Berkeley (US) and of the Edinburgh Business School
              (UK) where he obtained the Certificate of Business Excellence
              (COBE) and a Master of Business Administration (MBA) degree,
              respectively. He obtained his first degree in Mathematics and
              Computer Science from the Federal University of Technology Owerri,
              Nigeria. He is a Chartered Banker, a Certified International Cards
              and Payments Professional and qualified as a Project Management
              Professional in 2006. Chinedu has interests in promoting access to
              finance and healthcare in Nigeria. He has contributed to the
              growth of the Digital and Financial Inclusion ecosystem in Nigeria
              through his previous roles as Chairman of the Association of
              Licensed Mobile Payment Operators (ALMPO) and former member of the
              Nigeria National Financial Inclusion Steering Committee. Through
              his work at Pace Pharma Care, Chinedu hopes to bring his passion
              to play as he promotes access to healthcare in Nigeria and other
              African Countries.
            </p>
          </div>
        </Modal>
        <Modal
          centered={true}
          onHide={closeshariqueModal}
          show={shariqueWorkModal}
          style={{
            paddingLeft: "8px",
            paddingRight: "8px"
          }}
        >
          <div className="modalbody">
            <div className="terminateworkmodalimg">
              <img src={closeimg} alt="close" onClick={closeshariqueModal} />
            </div>
            <div className="modalheadersection">
              <div className="modalheadersection_col1">
                <img src={sharique} className="img-fluid" />
              </div>
              <div className="modalheadersection_col2">
                <p>
                  <strong> Sharique Aftab </strong> is an Independent  Director
                  at Pace Pharma Care. He has over 15 years of global, emerging
                  market and multicultural experience in Complex
                  Commercial Transaction across United Kingdom, South East Asia,
                  and Africa. Sharique worked with Various Multinational Oil and
                  Gas companies for 15 years holding various senior roles in
                  commercial
                </p>
              </div>
            </div>
            <p className="modalparagph">
              department serving 9 years in Africa plus 4 years in Thailand &
              Vietnam and 2 years in United Kingdom. Sharique is
              a German Resident, holds a Bachelor of Engineering degree
              in Mechanical, India, and Master in Business Administration,
              United Kingdom and is a Chartered Engineer and Associate Member
               of the Institute of Engineers, India
            </p>
          </div>
        </Modal>
        <h6 className="heading_tertiary">BOARD OF DIRECTORS</h6>
        <div className="compnypgdirectorswrap">
          <div className="compnydirectorcards">
            <img src={ahara} className="img-fluid" alt="img" />
            <p className="cmpnydirectorname" onClick={workModal}>
              <img src={arrowright} /> Engr.(DR). Kevin Onuchukwu{" "}
              <img src={arrowleft} />
            </p>
            <p className="directorpostion">Board Chairman</p>
          </div>
          <div className="compnydirectorcards">
            <img src={chris} className="img-fluid" alt="img" />
            <p className="cmpnydirectorname" onClick={ruthsModal}>
              <img src={arrowright} /> Pharm Ruth Chibuzor Izu-Okoro <img src={arrowleft} />
            
            </p>
            <p className="directorpostion"> Managing Director</p>
          </div>
          <div className="compnydirectorcards">
            <img src={alex} className="img-fluid" alt="img" />
            <p className="cmpnydirectorname" onClick={anthonysModal}>
              <img src={arrowright} /> Anthony Shishler <img src={arrowleft} />
            </p>
            <p className="directorpostion">Executive Director</p>
          </div>
        </div>
        <div className="compnypgdirectorswrap2">
          <div className="compnydirectorcards cmpwrapper2dv">
            <img src={chinedu} className="img-fluid dirtorimg" alt="img" />
            <p className="cmpnydirectorname" onClick={chinedusModal}>
              <img src={arrowright} /> Chinedu Onuoha <img src={arrowleft} />
            </p>
            <p className="directorpostion">Executive Director</p>
          </div>
          <div className="compnydirectorcards">
            <img src={sharique} className="img-fluid dirtorimg" alt="img" />
            <p className="cmpnydirectorname" onClick={shariqueModal}>
              <img src={arrowright} /> Sharique Aftab <img src={arrowleft} />
            </p>
            <p className="directorpostion">Independent Director</p>
          </div>
        </div>
        <div className="team_section">
          <h6 className="heading_tertiary">
            <img src={arrowright} /> Our Office in Pictures <img src={arrowleft} />{" "}
          </h6>
          <div className="teamwrapper">
            <div>
              <img src={primall} className="officepic img-fluid" alt="img" />
            </div>
            <div>
              <img src={chair} className="officepic img-fluid" alt="img" />
            </div>
            <div>
              <img src={tv} className="officepic img-fluid" alt="img" />
            </div> 
          </div>
          <div className="teamwrapper">
          <div>
              <img src={tree} className="officepic img-fluid" alt="img" />
            </div>
            <div>
              <img src={white_board} className="officepic img-fluid" alt="img" />
            </div>
            <div>
              <img src={building} className="officepic img-fluid" alt="img" />
            </div>
          </div>
        </div>
      </Container>
      <Footer />
    </div>
  );
};
export default Company;
