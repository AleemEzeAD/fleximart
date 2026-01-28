import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import playstation from "../../../assets/images/index/playstation.avif";
import speakers from "../../../assets/images/index/speakers.avif";

const Featured = () => {
    return (
        <section className="featured">
            <Container>
                <div className="d-flex flex-column text">
                    <span className="feature_text">Featured</span>
                    <h3>New Arrival</h3>
                </div>
                <Row>
                    <Col md={6}>
                        <div className="content">
                            <figure>
                                <img src={playstation} width={570} height={600} loading="lazy" alt="new arrival" />
                            </figure>
                            <div className="hoverdata">
                                <h4>PlayStation 5</h4>
                                <p>Black and White version of the PS5 coming out on sale.</p>
                                <Link className="shop_now" to="/">Shop Now</Link>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="content">
                            <figure>
                                <img src={speakers} width={570} height={600} loading="lazy" alt="new arrival" />
                            </figure>
                            <div className="hoverdata">
                                <h4>Speakers</h4>
                                <p>Amazon wireless speakers</p>
                                <Link className="shop_now" to="/">Shop Now</Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}
export default Featured;