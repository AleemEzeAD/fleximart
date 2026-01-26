import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
    FaShoppingCart,
    FaHeart,
    FaEye,
    FaStar,
    FaArrowLeft,
    FaArrowRight
} from "react-icons/fa";
import FlashTimer from "./FlashTimer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

import keyboard from "../../../assets/images/index/keyboard.webp";
import led from "../../../assets/images/index/led.webp";
import mouse from "../../../assets/images/index/mouse.webp";
import headset from "../../../assets/images/index/headset.webp";

const Products = () => {
    const flashSaleEnd = "2026-02-01T23:59:59";
    const products = [
        {
            id: 1,
            title: "Mechanical Gaming Keyboard",
            image: keyboard,
            price: 120,
            oldPrice: 160,
            discount: 40,
            rating: 5,
            reviews: 90,
            slug: "keyboard",
        },
        {
            id: 2,
            title: "Mechanical Gaming LED",
            image: led,
            price: 90,
            oldPrice: 140,
            discount: 36,
            rating: 4,
            reviews: 65,
            slug: "led",
        },
        {
            id: 3,
            title: "Wireless Gaming Mouse",
            image: mouse,
            price: 45,
            oldPrice: 70,
            discount: 35,
            rating: 5,
            reviews: 120,
            slug: "mouse",
        },
        {
            id: 4,
            title: "Gaming Headset Pro",
            image: headset,
            price: 75,
            oldPrice: 110,
            discount: 32,
            rating: 4,
            reviews: 58,
            slug: "headset",
        }, {
            id: 5,
            title: "Mechanical Gaming Keyboard",
            image: keyboard,
            price: 120,
            oldPrice: 160,
            discount: 40,
            rating: 5,
            reviews: 90,
            slug: "keyboard",
        },
        {
            id: 6,
            title: "Mechanical Gaming LED",
            image: led,
            price: 90,
            oldPrice: 140,
            discount: 36,
            rating: 4,
            reviews: 65,
            slug: "led",
        },
    ];
    return (
        <section className="products">
            <Container>
                <div className="flash-header">
                    <span className="today">Today’s</span>
                    <div className="flash-row">
                        <h2 className="flash-title">Flash Sales</h2>
                        <FlashTimer endDate={flashSaleEnd} />
                        <div className="slider-nav">
                            <button className="swiper-prev" aria-label="Previous">
                                <FaArrowLeft />
                            </button>
                            <button className="swiper-next" aria-label="Next">
                                <FaArrowRight />
                            </button>
                        </div>
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
                    }}
                    speed={800}
                    spaceBetween={24}
                    loop={true}
                    slidesPerView={4}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        350: { slidesPerView: 2 },
                        767: { slidesPerView: 3 },
                        992: { slidesPerView: 4 },
                    }}
                >
                    {products.map((product) => (
                        <SwiperSlide key={product.id}>
                            <div className="product-card">
                                <figure>
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        loading="lazy"
                                    />
                                </figure>

                                <Link
                                    className="title"
                                    to={`/product/${product.slug}`}
                                >
                                    {product.title}
                                </Link>

                                <div className="prices">
                                    <span className="current">${product.price}</span>
                                    <span className="expired">${product.oldPrice}</span>
                                </div>

                                <div className="rating">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className={i < product.rating ? "active" : ""}
                                        />
                                    ))}
                                    <span className="nums">({product.reviews})</span>
                                </div>

                                <span className="tag">- {product.discount}%</span>

                                <div className="action-icons">
                                    <button className="icon-btn">
                                        <FaShoppingCart />
                                    </button>
                                    <button className="icon-btn">
                                        <FaHeart />
                                    </button>
                                    <button className="icon-btn">
                                        <FaEye />
                                    </button>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <div className="hover_parent">
                    <Link to="/products" className="hover2">View All Products</Link>
                </div>
            </Container>
        </section>
    );
};

export default Products;
