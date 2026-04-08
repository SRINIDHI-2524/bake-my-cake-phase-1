import { useState } from 'react';
import { motion } from 'framer-motion';
import './Navbar.css';

const categories = [
    { label: 'ALL', value: '' },
    { label: 'CAKES', value: 'cakes' },
    { label: 'CUPCAKES', value: 'cup cakes' },
    { label: 'COOKIES', value: 'cookies' },
    { label: 'BROWNIES', value: 'brownies' },
    { label: 'CHOCOLATES', value: 'chocolates' },
    { label: 'MUFFINS', value: 'muffins' },
    { label: 'CHEESECAKES', value: 'cheese cakes' },
];

export default function Navbar({ setFilteredProduct }) {
    const [active, setActive] = useState('');

    const handleClick = (value) => {
        setActive(value);
        setFilteredProduct(value);
    };

    return (
        <nav className='Navbar'>
            {categories.map(cat => (
                <button
                    key={cat.value}
                    className={`nav-btn ${active === cat.value ? 'nav-btn-active' : ''}`}
                    onClick={() => handleClick(cat.value)}
                >
                    {cat.label}
                    {active === cat.value && (
                        <motion.div
                            className="nav-underline"
                            layoutId="underline"
                            transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                        />
                    )}
                </button>
            ))}
        </nav>
    );
}
