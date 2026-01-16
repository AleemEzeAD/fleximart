import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";

import {
    FaMobileAlt,
    FaLaptop,
    FaRegClock,
    FaCamera,
    FaHeadphones,
    FaGamepad,
    FaArrowLeft,
    FaArrowRight
} from "react-icons/fa";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Categories = () => {
    const categories = [
        { id: 1, title: "Mobile", icon: <FaMobileAlt /> },
        { id: 2, title: "Computer", icon: <FaLaptop /> },
        { id: 3, title: "Watch", icon: <FaRegClock /> },
        { id: 4, title: "Camera", icon: <FaCamera /> },
        { id: 5, title: "Headphones", icon: <FaHeadphones /> },
        { id: 6, title: "Gaming", icon: <FaGamepad /> },
        { id: 7, title: "Mobile", icon: <FaMobileAlt /> },
        { id: 8, title: "Computer", icon: <FaLaptop /> }
    ];

    return (
        <section className="categories">
            <Container>
                <div className="category_header">
                    <div className="category_header_text">
                        <span className="today">Categories</span>
                        <h3>Browse By Category</h3>
                    </div>
                    <div className="slider-nav">
                        <button className="swiper-prev" aria-label="Previous">
                            <FaArrowLeft />
                        </button>
                        <button className="swiper-next" aria-label="Next">
                            <FaArrowRight />
                        </button>
                    </div>
                </div>
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation={{
                        prevEl: ".swiper-prev",
                        nextEl: ".swiper-next",
                    }}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true,
                        reverseDirection: true,
                    }}
                    speed={800}
                    spaceBetween={20}
                    loop={true}
                    slidesPerView={2}
                    breakpoints={{
                        576: { slidesPerView: 3 },
                        768: { slidesPerView: 4 },
                        992: { slidesPerView: 5 },
                        1200: { slidesPerView: 6 }
                    }}
                >
                    {categories.map((cat) => (
                        <SwiperSlide key={cat.id}>
                            <Link to="/" className="category_card">
                                <div className="category_icon">{cat.icon}</div>
                                <h4 className="category_title">{cat.title}</h4>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Container>
        </section>
    );
};

export default Categories;
