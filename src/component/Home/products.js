import React, { useEffect } from "react";
import { Col, Row, Container } from "react-bootstrap";
import AOS from "aos";
import "aos/dist/aos.css";
import Header from "../Header/header";
import jointcircle from "../../images/jointcircle.png";
import mortin from "../../images/mortin.png";
import lactic from "../../images/lactic.png";
import tylenol from "../../images/tylenol.png";
import Newsletter from "./Newsletter";
import Footer from "../Footer/footer";
import arrow_right from "../../images/arrowright.png";

const Products = () => {
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
        <h6>Products</h6>
        <h2>Our Products</h2>
        <p>
          At PacePharmaCare, we offers convenient pharmacy services with a focus
          on your health and safety. Whether you are a patient or you receive
          health care elsewhere, we make sure your medication is right for you.
        </p>
      </div>
      <div className="products_section_2">
        <Container>
          <Row>
            <Col md={12}>
            <h3 className="text_shade">Tablets</h3>
            </Col>
          </Row>
          <p className="products_content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            nisi egestas volutpat quam cursus malesuada a ac urna. Sed ac id nam
            accumsan, quamj kfm imperdiet sit. Fermentum, gravida neque tempor
            maecenas morbi urna libero amet, diam. Sed sed eget arcu leo, est
            tortor, auctor risus. Aenean vestibulum jg vulputate amet, a at
            iaculis. Ut morbi pellentesque et mattis tincidunt rhoncus purus
            quam arcu. Ornare facilisis quis molestie massa. Est urna, donec
            vitae kk mollis arcu. Elementum et et egestas tortor in neque,
            libero. Ullamcorper facilisi dignissim eu sodales. Dolor vulputate
            egestas congue sed aliquam scelerisque
          </p>
          <section className="product_cards">
            <div className="tablet_card">
              <div className="tablet_cardtop-section">
                <h3>Motrin</h3>
              </div>
              <div className="tablet_cardbottom-section">
                <img src={mortin} className="img-fluid" alt="img" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam nisi egestasjfn kf
                </p>
                <p className="product_card-price">N1,000</p>
                <span className="product_card-button">Buy Now</span>
              </div>
            </div>
            <div className="tablet_card">
              <div className="tablet_cardtop-section">
                <h3>Lactaid</h3>
              </div>
              <div className="tablet_cardbottom-section">
                <img src={lactic} className="img-fluid" alt="img" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam nisi egestasjfn kf
                </p>
                <p className="product_card-price">N1,000</p>
                <span className="product_card-button">Buy Now</span>
              </div>
            </div>
            <div className="tablet_card">
              <div className="tablet_cardtop-section">
                <h3>Tylenol</h3>
              </div>
              <div className="tablet_cardbottom-section">
                <img src={tylenol} className="img-fluid" alt="img" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam nisi egestasjfn kf
                </p>
                <p className="product_card-price">N1,000</p>
                <span className="product_card-button">Buy Now</span>
              </div>
            </div>
          </section>
          {/* <div>
            Scroll for more <img src={arrow_right} alt="pic" />
          </div> */}
        </Container>
      </div>
      <div className="products_section_2 bckgcolrchnge">
        <Container>
          <Row>
            <Col md={12} className="products_heading-primary">
            <h3 className="syrup text_shade ">Syrup</h3>
            </Col>
          </Row>
          <p className="products_content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            nisi egestas volutpat quam cursus malesuada a ac urna. Sed ac id nam
            accumsan, quamj kfm imperdiet sit. Fermentum, gravida neque tempor
            maecenas morbi urna libero amet, diam. Sed sed eget arcu leo, est
            tortor, auctor risus. Aenean vestibulum jg vulputate amet, a at
            iaculis. Ut morbi pellentesque et mattis tincidunt rhoncus purus
            quam arcu. Ornare facilisis quis molestie massa. Est urna, donec
            vitae kk mollis arcu. Elementum et et egestas tortor in neque,
            libero. Ullamcorper facilisi dignissim eu sodales. Dolor vulputate
            egestas congue sed aliquam scelerisque
          </p>
          <section className="product_cards">
            <div className="tablet_card">
              <div className="tablet_cardtop-section">
                <h3>Motrin</h3>
              </div>
              <div className="tablet_cardbottom-section">
                <img src={mortin} className="img-fluid" alt="img" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam nisi egestasjfn kf
                </p>
                <p className="product_card-price">N1,000</p>
                <span className="product_card-button">Buy Now</span>
              </div>
            </div>
            <div className="tablet_card">
              <div className="tablet_cardtop-section">
                <h3>Lactaid</h3>
              </div>
              <div className="tablet_cardbottom-section">
                <img src={lactic} className="img-fluid" alt="img" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam nisi egestasjfn kf
                </p>
                <p className="product_card-price">N1,000</p>
                <span className="product_card-button">Buy Now</span>
              </div>
            </div>
            <div className="tablet_card">
              <div className="tablet_cardtop-section">
                <h3>Tylenol</h3>
              </div>
              <div className="tablet_cardbottom-section">
                <img src={tylenol} className="img-fluid" alt="img" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam nisi egestasjfn kf
                </p>
                <p className="product_card-price">N1,000</p>
                <span className="product_card-button">Buy Now</span>
              </div>
            </div>
          </section>
          {/* <div>
            Scroll for more <img src={arrow_right} alt="pic" />
          </div> */}
        </Container>
      </div>
      <div className="products_section_2 ">
        <Container>
        <Row>
            <Col md={12} className="products_heading-primary">
            <h3 className="Supplements text_shade ">Supplements</h3>
            </Col>
          </Row>
          <p className="products_content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            nisi egestas volutpat quam cursus malesuada a ac urna. Sed ac id nam
            accumsan, quamj kfm imperdiet sit. Fermentum, gravida neque tempor
            maecenas morbi urna libero amet, diam. Sed sed eget arcu leo, est
            tortor, auctor risus. Aenean vestibulum jg vulputate amet, a at
            iaculis. Ut morbi pellentesque et mattis tincidunt rhoncus purus
            quam arcu. Ornare facilisis quis molestie massa. Est urna, donec
            vitae kk mollis arcu. Elementum et et egestas tortor in neque,
            libero. Ullamcorper facilisi dignissim eu sodales. Dolor vulputate
            egestas congue sed aliquam scelerisque
          </p>
          <section className="product_cards">
            <div className="tablet_card">
              <div className="tablet_cardtop-section">
                <h3>Motrin</h3>
              </div>
              <div className="tablet_cardbottom-section">
                <img src={mortin} className="img-fluid" alt="img" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam nisi egestasjfn kf
                </p>
                <p className="product_card-price">N1,000</p>
                <span className="product_card-button">Buy Now</span>
              </div>
            </div>
            <div className="tablet_card">
              <div className="tablet_cardtop-section">
                <h3>Lactaid</h3>
              </div>
              <div className="tablet_cardbottom-section">
                <img src={lactic} className="img-fluid" alt="img" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam nisi egestasjfn kf
                </p>
                <p className="product_card-price">N1,000</p>
                <span className="product_card-button">Buy Now</span>
              </div>
            </div>
            <div className="tablet_card">
              <div className="tablet_cardtop-section">
                <h3>Tylenol</h3>
              </div>
              <div className="tablet_cardbottom-section">
                <img src={tylenol} className="img-fluid" alt="img" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam nisi egestasjfn kf
                </p>
                <p className="product_card-price">N1,000</p>
                <span className="product_card-button">Buy Now</span>
              </div>
            </div>
          </section>
          {/* <div>
            Scroll for more <img src={arrow_right} alt="pic" />
          </div> */}
        </Container>
      </div>
      <div className="products_section_2 bckgcolrchnge">
        <Container>
        <Row>
            <Col md={12} className="products_heading-primary">
            <h3 className="Injection text_shade ">Injection</h3>
            </Col>
          </Row>
          <p className="products_content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            nisi egestas volutpat quam cursus malesuada a ac urna. Sed ac id nam
            accumsan, quamj kfm imperdiet sit. Fermentum, gravida neque tempor
            maecenas morbi urna libero amet, diam. Sed sed eget arcu leo, est
            tortor, auctor risus. Aenean vestibulum jg vulputate amet, a at
            iaculis. Ut morbi pellentesque et mattis tincidunt rhoncus purus
            quam arcu. Ornare facilisis quis molestie massa. Est urna, donec
            vitae kk mollis arcu. Elementum et et egestas tortor in neque,
            libero. Ullamcorper facilisi dignissim eu sodales. Dolor vulputate
            egestas congue sed aliquam scelerisque
          </p>
          <section className="product_cards">
            <div className="tablet_card">
              <div className="tablet_cardtop-section">
                <h3>Motrin</h3>
              </div>
              <div className="tablet_cardbottom-section">
                <img src={mortin} className="img-fluid" alt="img" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam nisi egestasjfn kf
                </p>
                <p className="product_card-price">N1,000</p>
                <span className="product_card-button">Buy Now</span>
              </div>
            </div>
            <div className="tablet_card">
              <div className="tablet_cardtop-section">
                <h3>Lactaid</h3>
              </div>
              <div className="tablet_cardbottom-section">
                <img src={lactic} className="img-fluid" alt="img" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam nisi egestasjfn kf
                </p>
                <p className="product_card-price">N1,000</p>
                <span className="product_card-button">Buy Now</span>
              </div>
            </div>
            <div className="tablet_card">
              <div className="tablet_cardtop-section">
                <h3>Tylenol</h3>
              </div>
              <div className="tablet_cardbottom-section">
                <img src={tylenol} className="img-fluid" alt="img" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam nisi egestasjfn kf
                </p>
                <p className="product_card-price">N1,000</p>
                <span className="product_card-button">Buy Now</span>
              </div>
            </div>
          </section>
          {/* <div>
            Scroll for more <img src={arrow_right} alt="pic" />
          </div> */}
        </Container>
      </div>
      <div className="products_section_2 ">
        <Container>
        <Row>
            <Col md={12} className="products_heading-primary">
            <h3 className="Capsule text_shade ">Capsule</h3>
            </Col>
          </Row>
          <p className="products_content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            nisi egestas volutpat quam cursus malesuada a ac urna. Sed ac id nam
            accumsan, quamj kfm imperdiet sit. Fermentum, gravida neque tempor
            maecenas morbi urna libero amet, diam. Sed sed eget arcu leo, est
            tortor, auctor risus. Aenean vestibulum jg vulputate amet, a at
            iaculis. Ut morbi pellentesque et mattis tincidunt rhoncus purus
            quam arcu. Ornare facilisis quis molestie massa. Est urna, donec
            vitae kk mollis arcu. Elementum et et egestas tortor in neque,
            libero. Ullamcorper facilisi dignissim eu sodales. Dolor vulputate
            egestas congue sed aliquam scelerisque
          </p>
          <section className="product_cards">
            <div className="tablet_card">
              <div className="tablet_cardtop-section">
                <h3>Motrin</h3>
              </div>
              <div className="tablet_cardbottom-section">
                <img src={mortin} className="img-fluid" alt="img" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam nisi egestasjfn kf
                </p>
                <p className="product_card-price">N1,000</p>
                <span className="product_card-button">Buy Now</span>
              </div>
            </div>
            <div className="tablet_card">
              <div className="tablet_cardtop-section">
                <h3>Lactaid</h3>
              </div>
              <div className="tablet_cardbottom-section">
                <img src={lactic} className="img-fluid" alt="img" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam nisi egestasjfn kf
                </p>
                <p className="product_card-price">N1,000</p>
                <span className="product_card-button">Buy Now</span>
              </div>
            </div>
            <div className="tablet_card">
              <div className="tablet_cardtop-section">
                <h3>Tylenol</h3>
              </div>
              <div className="tablet_cardbottom-section">
                <img src={tylenol} className="img-fluid" alt="img" />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Aliquam nisi egestasjfn kf
                </p>
                <p className="product_card-price">N1,000</p>
                <span className="product_card-button">Buy Now</span>
              </div>
            </div>
          </section>
          {/* <div>
            Scroll for more <img src={arrow_right} alt="pic" />
          </div> */}
        </Container>
      </div>
      <Newsletter/>
      <Footer />
    </div>
  );
};
export default Products;
