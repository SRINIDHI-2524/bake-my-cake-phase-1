import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Cart.css';
import Checkout from './Checkout';

export default function Cart({ cartItems, onClose, onAdd, onRemove, onDelete, onClearCart }) {
    const [checkoutOpen, setCheckoutOpen] = useState(false);
    const total = cartItems.reduce((sum, item) => sum + item.price * item.qty, 0);

    return (
        <AnimatePresence>
            <motion.div
                className="cart-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            />
            <motion.div
                className="cart-drawer"
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
                <div className="cart-header">
                    <h2>🛒 Your Cart</h2>
                    <button className="cart-close" onClick={onClose}>✕</button>
                </div>

                {cartItems.length === 0 ? (
                    <div className="cart-empty">
                        <span>🎂</span>
                        <p>Your cart is empty</p>
                    </div>
                ) : (
                    <>
                        <div className="cart-items">
                            {cartItems.map(item => (
                                <motion.div
                                    key={item.id}
                                    className="cart-item"
                                    layout
                                    initial={{ opacity: 0, x: 40 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: 40 }}
                                >
                                    <img src={item.image} alt={item.name} />
                                    <div className="cart-item-info">
                                        <p className="cart-item-name">{item.name}</p>
                                        <p className="cart-item-price">₹{item.price}</p>
                                        <div className="cart-qty">
                                            <button onClick={() => onRemove(item)}>−</button>
                                            <span>{item.qty}</span>
                                            <button onClick={() => onAdd(item)}>+</button>
                                        </div>
                                    </div>
                                    <button className="cart-delete" onClick={() => onDelete(item)}>🗑</button>
                                </motion.div>
                            ))}
                        </div>
                        <div className="cart-footer">
                            <div className="cart-total">
                                <span>Total</span>
                                <span>₹{total}</span>
                            </div>
                            <motion.button
                                className="checkout-btn"
                                whileHover={{ scale: 1.03 }}
                                whileTap={{ scale: 0.97 }}
                                onClick={() => setCheckoutOpen(true)}
                            >
                                Proceed to Checkout
                            </motion.button>
                        </div>
                    </>
                )}
            </motion.div>
            {checkoutOpen && (
                <Checkout
                    cartItems={cartItems}
                    total={total}
                    onClose={() => setCheckoutOpen(false)}
                    onSuccess={() => { setCheckoutOpen(false); onClearCart(); onClose(); }}
                />
            )}
        </AnimatePresence>
    );
}
