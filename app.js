import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Products from './components/Products';
import Cart from './components/Cart';
import Login from './components/Login';

const productsData = [ /* Your product data */ ];

const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [cart, setCart] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (product) => setCart(cart.filter(item => item.id !== product.id));
  const handleLogin = () => setIsLoggedIn(true);

  const renderContent = () => {
    switch (currentPage) {
      case 'home': return <Home />;
      case 'about': return <About />;
      case 'contact': return <Contact />;
      case 'products': return <Products {...{ products: productsData, selectedCategory, setSelectedCategory, addToCart }} />;
      case 'cart': return <Cart {...{ cart, removeFromCart }} />;
      case 'login': return <Login handleLogin={handleLogin} />;
      default: return null;
    }
  };

  return (
    <div>
      <Header {...{ cartLength: cart.length, isLoggedIn, setCurrentPage, handleLogout: () => setIsLoggedIn(false) }} />
      <main className="container mx-auto px-6 py-8">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
