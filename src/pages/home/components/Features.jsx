import { Container, Row, Col } from "react-bootstrap";
import {
  FaTruck,
  FaHeadphonesAlt,
  FaShieldAlt
} from "react-icons/fa";

const Features = () => {
  return (
    <section className="features pt-0">
      <Container>
        <Row>
          <Col md={4} sm={6}>
            <div className="feature_box">
              <div className="feature_icon">
                <FaTruck />
              </div>
              <h6>FREE AND FAST DELIVERY</h6>
              <p>Free delivery for all orders over $140</p>
            </div>
          </Col>

          <Col md={4} sm={6}>
            <div className="feature_box">
              <div className="feature_icon">
                <FaHeadphonesAlt />
              </div>
              <h6>24/7 CUSTOMER SERVICE</h6>
              <p>Friendly 24/7 customer support</p>
            </div>
          </Col>

          <Col md={4} sm={6}>
            <div className="feature_box">
              <div className="feature_icon">
                <FaShieldAlt />
              </div>
              <h6>MONEY BACK GUARANTEE</h6>
              <p>We return money within 30 days</p>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Features;
