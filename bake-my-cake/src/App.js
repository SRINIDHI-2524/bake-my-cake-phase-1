import './App.css';
import Header from './Components/Header';
import axios from 'axios';
import { useState, useEffect } from 'react';
import MainContent from './Components/MainContent';
import Footer from './Components/Footer';
import Cart from './Components/Cart';

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [filteredProduct, setFilteredProduct] = useState('');
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  useEffect(() => {
    axios.get('http://localhost:5000/cakes')
      .then(res => setProducts(res.data))
      .catch(err => { console.error(err); setError(err); });
  }, []);

  const displayedProducts = filteredProduct
    ? products.filter(item => item.category.toLowerCase().includes(filteredProduct.toLowerCase()))
    : products;

  const addToCart = (item) => {
    setCartItems(prev => {
      const existing = prev.find(c => c.id === item.id);
      if (existing) return prev.map(c => c.id === item.id ? { ...c, qty: c.qty + 1 } : c);
      return [...prev, { ...item, qty: 1 }];
    });
    setCartOpen(true);
  };

  const removeFromCart = (item) => {
    setCartItems(prev =>
      prev.map(c => c.id === item.id ? { ...c, qty: c.qty - 1 } : c).filter(c => c.qty > 0)
    );
  };

  const deleteFromCart = (item) => {
    setCartItems(prev => prev.filter(c => c.id !== item.id));
  };

  const clearCart = () => setCartItems([]);

  const cartCount = cartItems.reduce((sum, c) => sum + c.qty, 0);

  return (
    <div className="App">
      {error ? (
        <div className="error-msg">⚠️ Error fetching data: {error.message}</div>
      ) : (
        <>
          <Header
            setFilteredProduct={setFilteredProduct}
            cartCount={cartCount}
            onCartOpen={() => setCartOpen(true)}
          />
          <MainContent fillterData={displayedProducts} onAddToCart={addToCart} />
          <Footer />
          {cartOpen && (
            <Cart
              cartItems={cartItems}
              onClose={() => setCartOpen(false)}
              onAdd={addToCart}
              onRemove={removeFromCart}
              onDelete={deleteFromCart}
              onClearCart={clearCart}
            />
          )}
        </>
      )}
    </div>
  );
}

export default App;
