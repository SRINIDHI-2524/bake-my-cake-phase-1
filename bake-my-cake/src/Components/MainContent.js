import { motion } from 'framer-motion';
import './MainContent.css';
import MainList from './MainList';

export default function MainContent({ fillterData, onAddToCart }) {
    return (
        <div className='Display'>
            {/* Hero */}
            <div className='Hero'>
                <motion.div
                    className='HeroText'
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7 }}
                >
                    <span className="hero-tag">🎉 Fresh & Handcrafted</span>
                    <h1>Birthday Cake<br />Delivery 👨‍🍳</h1>
                    <p>Same Day &amp; Midnight Delivery</p>
                    <motion.button
                        className="hero-btn"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.97 }}
                        onClick={() => document.getElementById('products').scrollIntoView({ behavior: 'smooth' })}
                    >
                        Shop Now →
                    </motion.button>
                </motion.div>

                <motion.div
                    className="HeroImg"
                    initial={{ opacity: 0, scale: 0.85 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    <img src="./images/Classic Cheesecake.jpg" alt="Classic Cheesecake" />
                </motion.div>
            </div>

            {/* Products */}
            <div id="products" className='ProductSection'>
                <h2 className="section-title">Our Delights</h2>
                <div className='ProductGrid'>
                    {fillterData.length === 0 ? (
                        <p className="no-results">No items found in this category.</p>
                    ) : (
                        fillterData.map((c, i) => (
                            <motion.div
                                key={c.id}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.05 }}
                            >
                                <MainList abc={c} onAddToCart={onAddToCart} />
                            </motion.div>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}
