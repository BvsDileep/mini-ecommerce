import React from 'react';
import useCart from '../../context/useCart'; // Use custom hook
import './Cart.css';

const Cart = () => {
    const { cart, removeFromCart, getTotalPrice } = useCart(); // Use Cart Context

    if (cart.length === 0) {
        return <div className="empty-cart">Your cart is empty.</div>;
    }

    return (
        <div className="cart-container">
            <h2>Shopping Cart</h2>
            <div className="cart-items">
                {cart.map((product) => (
                    <div key={product.id} className="cart-item">
                        <img src={product.image} alt={product.title} className="cart-item-image" />
                        <div className="cart-item-details">
                            <p className="cart-item-title">{product.title}</p>
                            <p className="cart-item-price">${product.price.toFixed(2)}</p>
                            <button
                                className="remove-item-btn"
                                onClick={() => removeFromCart(product.id)}
                            >
                                Remove
                            </button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-total">
                <h3>Total: ${getTotalPrice()}</h3>
            </div>
        </div>
    );
};

export default Cart;
