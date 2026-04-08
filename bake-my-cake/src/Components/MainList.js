import { useState } from 'react';
import { motion } from 'framer-motion';
import './MainList.css';

export default function MainList({ abc, onAddToCart }) {
    const [flipped, setFlipped] = useState(false);

    return (
        <div className="card-wrapper" onMouseEnter={() => setFlipped(true)} onMouseLeave={() => setFlipped(false)}>
            <motion.div
                className="card-inner"
                animate={{ rotateY: flipped ? 180 : 0 }}
                transition={{ duration: 0.6, type: 'spring', stiffness: 120 }}
                style={{ transformStyle: 'preserve-3d' }}
            >
                {/* Front */}
                <div className="card-face card-front">
                    <div className="card-img-wrap">
                        <img className="card-img" src={abc.image} alt={abc.name} />
                        <span className="card-rating">⭐ {abc.rating}</span>
                    </div>
                    <div className="card-body">
                        <h4 className="card-name">{abc.name}</h4>
                        <p className="card-price">₹{abc.price}</p>
                        <p className="card-weight">{abc.weight} kg</p>
                    </div>
                </div>

                {/* Back */}
                <div className="card-face card-back">
                    <h4 className="card-name">{abc.name}</h4>
                    <p className="card-desc">{abc.description}</p>
                    <p className="card-price-back">₹{abc.price}</p>
                    <motion.button
                        className="add-to-cart-btn"
                        whileTap={{ scale: 0.93 }}
                        onClick={(e) => { e.stopPropagation(); onAddToCart(abc); }}
                    >
                        🛒 Add to Cart
                    </motion.button>
                </div>
            </motion.div>
        </div>
    );
}
