import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useCart } from "../../../context/CartContext";

import {
    FaShoppingCart,
    FaHeart,
    FaEye,
    FaStar
} from "react-icons/fa";

import dogfood from "../../../assets/images/index/dog_food.webp";
import camera from "../../../assets/images/index/camera.webp";
import laptop from "../../../assets/images/index/laptop.webp";
import facewash from "../../../assets/images/index/facewash.webp";
import elec_car from "../../../assets/images/index/elec_car.webp";
import sports_shoes from "../../../assets/images/index/sports_shoes.webp";
import gamepad from "../../../assets/images/index/gaming_remote.webp";
import tablets from "../../../assets/images/index/tablets.webp";

const OurProducts = () => {
    const { addToCart, addToWishlist } = useCart();
    const [activeColor, setActiveColor] = useState({});

    const products = [
        {
            id: 1,
            title: "Breed Dry Dog Food",
            image: dogfood,
            price: 110,
            discount: "% 40",
            rating: 5,
            reviews: 90,
            slug: "doog_food",
            colors: [
                { name: "red", code: "#DB4444", image: dogfood },
                { name: "black", code: "#000000", image: dogfood },
            ],
        },
        {
            id: 2,
            title: "CANON EOS DSLR Camera",
            image: camera,
            price: 400,
            discount: "% 36",
            rating: 4,
            reviews: 65,
            slug: "camera",
            colors: [
                { name: "red", code: "#DB4444", image: dogfood },
                { name: "black", code: "#000000", image: dogfood },
            ],
        },
        {
            id: 3,
            title: "ASUS FHD Gaming Laptop",
            image: laptop,
            price: 200,
            discount: "New",
            rating: 5,
            reviews: 120,
            slug: "laptop",
            colors: [
                { name: "red", code: "#DB4444", image: dogfood },
                { name: "black", code: "#000000", image: dogfood },
            ],
        },
        {
            id: 4,
            title: "Curology Product Set ",
            image: facewash,
            price: 50,
            discount: "% 32",
            rating: 4,
            reviews: 58,
            slug: "facewash",
            colors: [
                { name: "red", code: "#DB4444", image: dogfood },
                { name: "black", code: "#000000", image: dogfood },
            ],
        }, {
            id: 5,
            title: "Top Latest Electric Car",
            image: elec_car,
            price: 2000,
            discount: "New",
            rating: 5,
            reviews: 90,
            slug: "elec_car",
            colors: [
                { name: "red", code: "#DB4444", image: dogfood },
                { name: "black", code: "#000000", image: dogfood },
            ],
        },
        {
            id: 6,
            title: "Jr. Zoom Soccer Cleats",
            image: sports_shoes,
            price: 60,
            discount: "% 36",
            rating: 4,
            reviews: 65,
            slug: "sports_shoes",
            colors: [
                { name: "red", code: "#DB4444", image: dogfood },
                { name: "black", code: "#000000", image: dogfood },
            ],
        },
        {
            id: 7,
            title: "GP11 Shooter USB Gamepad",
            image: gamepad,
            price: 150,
            discount: "% 36",
            rating: 4,
            reviews: 65,
            slug: "Gamepad",
            colors: [
                { name: "red", code: "#DB4444", image: dogfood },
                { name: "black", code: "#000000", image: dogfood },
            ],
        },
        {
            id: 8,
            title: "Best gaming and business Tabs",
            image: tablets,
            price: 350,
            discount: "New",
            rating: 4,
            reviews: 65,
            slug: "tablets",
            colors: [
                { name: "red", code: "#DB4444", image: dogfood },
                { name: "black", code: "#000000", image: dogfood },
            ],
        },
    ];
    return (
        <section className="products">
            <Container>
                <div className="flash-header">
                    <div className="d-flex flex-column gap-2">
                        <span className="today">Our Products</span>
                        <h2 className="flash-title">Explore Our Products</h2>
                    </div>
                </div>
                <Row>
                    {products.map((product) => (
                        <Col lg={3} md={4} sm={6} xs={6} key={product.id}>
                            <div className="product-card">
                                <figure>
                                    <img
                                        src={activeColor[product.id]?.image || product.image}
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
                                    {product.colors && (
                                        <div className="color-dots">
                                            {product.colors.map((color, index) => (
                                                <span
                                                    key={index} title={color.name}
                                                    className={`dot ${activeColor[product.id]?.name === color.name ? "active" : ""
                                                        }`}
                                                    style={{ backgroundColor: color.code }}
                                                    onClick={() =>
                                                        setActiveColor({
                                                            ...activeColor,
                                                            [product.id]: color,
                                                        })
                                                    }
                                                />
                                            ))}
                                        </div>
                                    )}
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

                                <span className="tag"> {product.discount}</span>

                                <div className="action-icons">
                                    <button className="icon-btn" onClick={() => addToCart(product)}>
                                        <FaShoppingCart />
                                    </button>
                                    <button className="icon-btn" onClick={() => addToWishlist(product)}>
                                        <FaHeart />
                                    </button>
                                    <button className="icon-btn">
                                        <FaEye />
                                    </button>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>

                <div className="hover_parent">
                    <Link to="/products" className="hover2">View All Products</Link>
                </div>
            </Container>
        </section>
    )
};

export default OurProducts;
