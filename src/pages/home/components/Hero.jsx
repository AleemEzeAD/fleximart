import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import slide1 from "../../../assets/images/index/bann1.jpg";
import slide2 from "../../../assets/images/index/bann2.jpg";
import slide3 from "../../../assets/images/index/bann3.jpg";

const heroLinks = [
    { name: "Mens Fashion", path: "/mens" },
    { name: "Womens Fashion", path: "/womens" },
    { name: "Electronics", path: "/electronics" },
    { name: "Sports", path: "/sports" },
    { name: "Fresh Fruits", path: "/freshfruits" },
    { name: "Fresh Vegetables", path: "/groceries" },
    { name: "Dry Fruits", path: "/dryfruits" },
    { name: "Chocolates", path: "/choclates" },
];

const heroSlides = [
    {
        image: slide1,
        h1: "Latest Collections",
        h2: "Up to 50% Off",
        alt: "Slide 1",
    },
    {
        image: slide2,
        h1: "New Arrivals",
        h2: "Trending Products",
        alt: "Slide 2",
    },
    {
        image: slide3,
        h1: "Best Deals",
        h2: "Shop Now",
        alt: "Slide 3",
    },
];

const HeroSection = () => {
    const links = heroLinks || [];
    const slides = heroSlides || [];

    return (
        <section className="hero">
            <Container>
                <Row>
                    <Col lg={2} md={3}>
                        {links.length > 0 && (
                            <ul className="hero-links">
                                {links.map((link, index) => (
                                    <li key={index}>
                                        <Link to={link.path || "#"} className="hero-btns">
                                            {link.name || "Link"}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </Col>

                    <Col lg={10} md={9}>
                        {slides.length > 0 && (
                            <Swiper
                                modules={[Autoplay, Pagination]}
                                loop={true}
                                slidesPerView={1}
                                spaceBetween={0}
                                autoplay={{
                                    delay: 0,
                                    disableOnInteraction: false,
                                    pauseOnMouseEnter: true,
                                }}
                                speed={4000}
                                freeMode={true}
                                allowTouchMove={true}
                                pagination={{ clickable: true }}
                                className="hero-swiper"
                            >
                                {slides.map((slide, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="hero-slide">
                                            {slide.image && (
                                                <img
                                                    src={slide.image}
                                                    alt={slide.alt || "Hero Slide"}
                                                    loading="lazy"
                                                />
                                            )}
                                            <div className="hero-content">
                                                <h1>{slide.h1 || ""}</h1>
                                                <h2>{slide.h2 || ""}</h2>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        )}
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default HeroSection;
