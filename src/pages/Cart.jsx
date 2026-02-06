import { useCart } from "../context/CartContext";

const Cart = () => {
    const { cart } = useCart();

    return (
        <>
            <h2>My Cart</h2>

            {cart.length === 0 && <p>Cart is empty</p>}

            {cart.map((item) => (
                <div key={item.id}>
                    {item.name} × {item.qty}
                </div>
            ))}
        </>
    );
};

export default Cart;
