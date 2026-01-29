import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Signupimg from "../../assets/images/signup/signup.webp";

const Signup = () => {
    const [formData, setFormData] = useState({
        name: "",
        emailOrPhone: "",
        password: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <section className="signup">
            <Container>
                <Row>
                    <Col md={7}>
                        <figure>
                            <img src={Signupimg} alt="signup fleximart" />
                        </figure>
                    </Col>
                    <Col md={5}>
                        <div className="signup_box">
                            <h3>Log in to Exclusive</h3>
                            <p>Enter your details below</p>
                            <form onSubmit={handleSubmit}>
                                <div className="inputs">
                                    <input
                                        type="text"
                                        name="emailOrPhone"
                                        placeholder="Email or Phone Number"
                                        value={formData.emailOrPhone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <div className="inputs">
                                    <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <button type="submit" className="hover2">
                                    Sign In
                                </button>
                                <button type="button" className="btn-google">
                                    Sign In with Google
                                </button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}

export default Signup;
