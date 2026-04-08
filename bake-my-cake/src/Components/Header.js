import './Header.css';
import NavBar from './Navbar';
import { motion } from 'framer-motion';

export default function Header({ setFilteredProduct, cartCount, onCartOpen }) {
    return (
        <div className='Header'>
            <div className="header-top">
                <motion.div
                    className="logo-area"
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    <span className="logo-icon">🎂</span>
                    <div>
                        <h2 className="logo-title">Bake My Cake</h2>
                        <p className="logo-sub">Celebrate your moments</p>
                    </div>
                </motion.div>

                <motion.button
                    className="cart-btn"
                    onClick={onCartOpen}
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                >
                    🛒
                    {cartCount > 0 && (
                        <motion.span
                            className="cart-badge"
                            key={cartCount}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{ type: 'spring', stiffness: 400 }}
                        >
                            {cartCount}
                        </motion.span>
                    )}
                </motion.button>
            </div>
            <NavBar setFilteredProduct={setFilteredProduct} />
        </div>
    );
}
