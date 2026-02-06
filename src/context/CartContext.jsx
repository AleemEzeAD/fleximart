import { createContext, useContext, useState, useEffect } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);
    const [wishlist, setWishlist] = useState([]);

    // Load from localStorage
    useEffect(() => {
        setCart(JSON.parse(localStorage.getItem("cart")) || []);
        setWishlist(JSON.parse(localStorage.getItem("wishlist")) || []);
    }, []);

    // Save to localStorage
    useEffect(() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart]);

    useEffect(() => {
        localStorage.setItem("wishlist", JSON.stringify(wishlist));
    }, [wishlist]);

    // Add to Cart
    const addToCart = (product) => {
        setCart((prev) => {
            const exist = prev.find((item) => item.id === product.id);
            if (exist) {
                return prev.map((item) =>
                    item.id === product.id
                        ? { ...item, qty: item.qty + 1 }
                        : item
                );
            }
            return [...prev, { ...product, qty: 1 }];
        });
    };

    const addToWishlist = (product) => {
        if (!wishlist.find((item) => item.id === product.id)) {
            setWishlist([...wishlist, product]);
        }
    };

    return (
        <CartContext.Provider
            value={{ cart, wishlist, addToCart, addToWishlist }}
        >
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);
