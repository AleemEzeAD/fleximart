import { Container, Row, Col } from "react-bootstrap";
import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn
} from "react-icons/fa";

import Logo from "../assets/images/footer-logo.png";

const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="footer_main">
                    <Col lg={3} md={6} sm={12}>
                        <div className="footer_box">
                            <a href="#" className="footer_logo">
                                <img src={Logo} alt="brand icon" />
                            </a>
                            <p>
                                Your trusted marketplace for quality products, great prices,
                                and a smooth shopping experience.
                            </p>

                            <div className="footer_social">
                                <a href="#"><FaFacebookF /></a>
                                <a href="#"><FaInstagram /></a>
                                <a href="#"><FaLinkedinIn /></a>
                            </div>

                        </div>
                    </Col>

                    <Col lg={3} md={6} sm={6} xs={6}>
                        <div className="footer_box">
                            <h4>Shop</h4>
                            <ul>
                                <li><a href="#">All Products</a></li>
                                <li><a href="#">Categories</a></li>
                                <li><a href="#">Deals</a></li>
                                <li><a href="#">New Arrivals</a></li>
                            </ul>
                        </div>
                    </Col>

                    <Col lg={3} md={6} sm={6} xs={6}>
                        <div className="footer_box">
                            <h4>Company</h4>
                            <ul>
                                <li><a href="#">About Us</a></li>
                                <li><a href="#">Careers</a></li>
                                <li><a href="#">Blog</a></li>
                                <li><a href="#">Contact</a></li>
                            </ul>
                        </div>
                    </Col>

                    <Col lg={3} md={6} sm={12}>
                        <div className="footer_box">
                            <h4>Support</h4>
                            <ul>
                                <li>
                                    <a href="#">122 Bijoy sarani, Dhaka,  DH 1222, Pakistan.</a>
                                </li>
                                <li>
                                    <a href="#">fleximart@gmail.com</a>
                                </li>
                                <li>
                                    <a href="#">+99025-99967-7878</a>
                                </li>
                            </ul>
                        </div>
                    </Col>
                </Row>

                <div className="footer_bottom">
                    <p>© {new Date().getFullYear()} FlexiMart. All rights reserved.</p>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
