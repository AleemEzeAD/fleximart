import { Container, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FaShoppingCart, FaHeart, FaEye, FaStar } from "react-icons/fa";
import { useCart } from "../../../context/CartContext";

import shirts from "../../../assets/images/index/shirts.jpg";
import hand_bags from "../../../assets/images/index/hand_bags.jpg";
import cpucooler from "../../../assets/images/index/cpucooler.jpg";
import books from "../../../assets/images/index/books.jpg";
import boys_shoes from "../../../assets/images/index/boys_shoes.jpg";
import girls_shoes from "../../../assets/images/index/girls_shoes.jpg";
import furniture from "../../../assets/images/index/furniture.jpg";
import electronics from "../../../assets/images/index/electronics.jpg";

const BestProd = () => {
    const { addToCart, addToWishlist } = useCart();
    const products = [
        { id: 1, title: "Casual Cotton Shirt", image: shirts, price: 35, oldPrice: 50, discount: 30, rating: 4, reviews: 45, slug: "cotton-shirt" },
        { id: 2, title: "Designer Hand Bag", image: hand_bags, price: 80, oldPrice: 120, discount: 33, rating: 5, reviews: 60, slug: "hand-bag" },
        { id: 3, title: "CPU Cooler Fan", image: cpucooler, price: 60, oldPrice: 90, discount: 33, rating: 4, reviews: 30, slug: "cpu-cooler" },
        { id: 4, title: "Educational Books Set", image: books, price: 40, oldPrice: 65, discount: 38, rating: 5, reviews: 50, slug: "books-set" },
        { id: 5, title: "Boys Running Shoes", image: boys_shoes, price: 55, oldPrice: 85, discount: 35, rating: 4, reviews: 70, slug: "boys-shoes" },
        { id: 6, title: "Girls Stylish Shoes", image: girls_shoes, price: 60, oldPrice: 95, discount: 37, rating: 5, reviews: 80, slug: "girls-shoes" },
        { id: 7, title: "Modern Furniture Set", image: furniture, price: 250, oldPrice: 320, discount: 22, rating: 4, reviews: 25, slug: "furniture-set" },
        { id: 8, title: "Latest Electronics Combo", image: electronics, price: 300, oldPrice: 400, discount: 25, rating: 5, reviews: 40, slug: "electronics-combo" },
    ];

    return (
        <section className="products">
            <Container>
                <div className="flash-header d-flex flex-column align-items-start">
                    <span className="today">This Month</span>
                    <h2 className="flash-title">Best Selling Products</h2>
                </div>
                <Row>
                    {products.map(product => (
                        <Col key={product.id} xs={6} sm={6} md={4} lg={3}>
                            <div className="product-card h-100 d-flex flex-column">
                                <figure>
                                    <img src={product.image} alt={product.title} className="w-100" loading="lazy" />
                                </figure>

                                <Link className="title" to={`/product/${product.slug}`}>
                                    {product.title}
                                </Link>

                                <div className="prices">
                                    <span className="current">${product.price}</span>
                                    <span className="expired">${product.oldPrice}</span>
                                </div>

                                <div className="rating">
                                    {Array.from({ length: 5 }).map((_, i) => (
                                        <FaStar key={i} className={i < product.rating ? "active" : ""} />
                                    ))}
                                    <span className="nums">({product.reviews})</span>
                                </div>

                                <span className="tag">- {product.discount}%</span>

                                <div className="action-icons mt-auto d-flex gap-2">
                                    <button className="icon-btn" onClick={() => addToCart(product)}><FaShoppingCart /></button>
                                    <button className="icon-btn" onClick={() => addToWishlist(product)}><FaHeart /></button>
                                    <button className="icon-btn"><FaEye /></button>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>

                <div className="hover_parent mt-4 text-center">
                    <Link to="/products" className="hover2">View All Products</Link>
                </div>
            </Container>
        </section>
    );
};

export default BestProd;
