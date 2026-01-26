import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Player from '../../../assets/images/index/player.png';

const Experience = () => {
    // Set target countdown date (example: 5 days from now)
    const targetDate = new Date();
    targetDate.setDate(targetDate.getDate() + 5);

    const calculateTimeLeft = () => {
        const difference = targetDate - new Date();
        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = { days: 0, hours: 0, minutes: 0, seconds: 0 };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <section className="experience">
            <Container>
                <Row>
                    <Col md={6}>
                        <div className="content">
                            <span className="mini_text">Categories</span>
                            <h2>Enhance Your Music Experience</h2>
                            <div className="pares">
                                <div className="box_text">
                                    <span className="numbs">{String(timeLeft.hours).padStart(2, "0")}</span>
                                    <span className="text">Hours</span>
                                </div>
                                <div className="box_text">
                                    <span className="numbs">{String(timeLeft.days).padStart(2, "0")}</span>
                                    <span className="text">Days</span>
                                </div>
                                <div className="box_text">
                                    <span className="numbs">{String(timeLeft.minutes).padStart(2, "0")}</span>
                                    <span className="text">Minutes</span>
                                </div>
                                <div className="box_text">
                                    <span className="numbs">{String(timeLeft.seconds).padStart(2, "0")}</span>
                                    <span className="text">Seconds</span>
                                </div>
                            </div>
                            <div>
                                <Link className="hover2">Buy Now</Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="img_wraper">
                            <figure>
                                <img
                                    src={Player}
                                    alt="Music Player"
                                    width="563"
                                    height="324"
                                    loading="eager"
                                />
                            </figure>
                            <div className="audio-waves">
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Experience;
