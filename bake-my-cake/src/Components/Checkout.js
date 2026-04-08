import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Checkout.css';

export default function Checkout({ cartItems, total, onClose, onSuccess }) {
    const [step, setStep] = useState('form'); // 'form' | 'success'
    const [loading, setLoading] = useState(false);
    const [orderId] = useState('BMC' + Math.floor(100000 + Math.random() * 900000));
    const [form, setForm] = useState({
        name: '', email: '', phone: '', address: '',
        city: '', pincode: '', cardNumber: '', expiry: '', cvv: '', cardName: ''
    });

    const handle = (e) => setForm(f => ({ ...f, [e.target.name]: e.target.value }));

    const formatCard = (val) => val.replace(/\D/g, '').slice(0, 16).replace(/(.{4})/g, '$1 ').trim();
    const formatExpiry = (val) => {
        const v = val.replace(/\D/g, '').slice(0, 4);
        return v.length >= 3 ? v.slice(0, 2) + '/' + v.slice(2) : v;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setStep('success');
        }, 1800);
    };

    return (
        <motion.div className="checkout-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
            <motion.div
                className="checkout-modal"
                initial={{ scale: 0.85, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.85, opacity: 0 }}
                transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            >
                <AnimatePresence mode="wait">
                    {step === 'form' ? (
                        <motion.div key="form" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                            <button className="checkout-close" onClick={onClose}>✕</button>
                            <h2>🛍️ Checkout</h2>

                            <form onSubmit={handleSubmit}>
                                <div className="checkout-section">
                                    <h3>Delivery Details</h3>
                                    <div className="checkout-row">
                                        <div className="checkout-field">
                                            <label>Full Name</label>
                                            <input name="name" value={form.name} onChange={handle} placeholder="John Doe" required />
                                        </div>
                                        <div className="checkout-field">
                                            <label>Phone</label>
                                            <input name="phone" value={form.phone} onChange={handle} placeholder="9876543210" maxLength={10} required />
                                        </div>
                                    </div>
                                    <div className="checkout-field" style={{ marginTop: 12 }}>
                                        <label>Email</label>
                                        <input name="email" type="email" value={form.email} onChange={handle} placeholder="you@email.com" required />
                                    </div>
                                    <div className="checkout-field" style={{ marginTop: 12 }}>
                                        <label>Address</label>
                                        <input name="address" value={form.address} onChange={handle} placeholder="House No, Street, Area" required />
                                    </div>
                                    <div className="checkout-row" style={{ marginTop: 12 }}>
                                        <div className="checkout-field">
                                            <label>City</label>
                                            <input name="city" value={form.city} onChange={handle} placeholder="Mumbai" required />
                                        </div>
                                        <div className="checkout-field">
                                            <label>Pincode</label>
                                            <input name="pincode" value={form.pincode} onChange={handle} placeholder="400001" maxLength={6} required />
                                        </div>
                                    </div>
                                </div>

                                <hr className="checkout-divider" />

                                <div className="checkout-section">
                                    <h3>💳 Payment Details</h3>
                                    <div className="checkout-field">
                                        <label>Card Number</label>
                                        <input
                                            name="cardNumber"
                                            value={form.cardNumber}
                                            onChange={e => setForm(f => ({ ...f, cardNumber: formatCard(e.target.value) }))}
                                            placeholder="1234 5678 9012 3456"
                                            required
                                        />
                                    </div>
                                    <div className="checkout-field" style={{ marginTop: 12 }}>
                                        <label>Name on Card</label>
                                        <input name="cardName" value={form.cardName} onChange={handle} placeholder="John Doe" required />
                                    </div>
                                    <div className="checkout-row" style={{ marginTop: 12 }}>
                                        <div className="checkout-field">
                                            <label>Expiry (MM/YY)</label>
                                            <input
                                                name="expiry"
                                                value={form.expiry}
                                                onChange={e => setForm(f => ({ ...f, expiry: formatExpiry(e.target.value) }))}
                                                placeholder="MM/YY"
                                                required
                                            />
                                        </div>
                                        <div className="checkout-field">
                                            <label>CVV</label>
                                            <input name="cvv" value={form.cvv} onChange={handle} placeholder="•••" maxLength={3} required />
                                        </div>
                                    </div>
                                </div>

                                <hr className="checkout-divider" />

                                <div className="order-summary">
                                    {cartItems.map(item => (
                                        <div className="order-summary-row" key={item.id}>
                                            <span>{item.name} × {item.qty}</span>
                                            <span>₹{item.price * item.qty}</span>
                                        </div>
                                    ))}
                                    <div className="order-summary-total">
                                        <span>Total</span>
                                        <span>₹{total}</span>
                                    </div>
                                </div>

                                <button className="pay-btn" type="submit" disabled={loading}>
                                    {loading ? '⏳ Processing...' : `Pay ₹${total}`}
                                </button>
                            </form>
                        </motion.div>
                    ) : (
                        <motion.div key="success" className="success-screen" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
                            <div className="success-icon">🎉</div>
                            <h2>Order Placed!</h2>
                            <p>Your delicious treats are on their way 🎂</p>
                            <div className="order-id">Order ID: {orderId}</div>
                            <p style={{ fontSize: '0.85rem', color: '#999' }}>Estimated delivery: 2–3 hours</p>
                            <button className="success-continue-btn" onClick={onSuccess}>Continue Shopping</button>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.div>
        </motion.div>
    );
}
