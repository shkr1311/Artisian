import React from 'react';

const Header = ({ cartLength, isLoggedIn, setCurrentPage, handleLogout }) => (
  <header className="bg-white shadow">
    <div className="container mx-auto px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="text-2xl font-bold text-gray-800">Artisan Marketplace</div>
        <nav className="flex space-x-4">
          <button onClick={() => setCurrentPage('home')} className="text-gray-800 hover:text-gray-600">Home</button>
          <button onClick={() => setCurrentPage('products')} className="text-gray-800 hover:text-gray-600">Products</button>
          <button onClick={() => setCurrentPage('about')} className="text-gray-800 hover:text-gray-600">About</button>
          <button onClick={() => setCurrentPage('contact')} className="text-gray-800 hover:text-gray-600">Contact</button>
          <button onClick={() => setCurrentPage('cart')} className="text-gray-800 hover:text-gray-600">Cart ({cartLength})</button>
          {isLoggedIn ? (
            <button onClick={handleLogout} className="text-gray-800 hover:text-gray-600">Logout</button>
          ) : (
            <button onClick={() => setCurrentPage('login')} className="text-gray-800 hover:text-gray-600">Login</button>
          )}
        </nav>
      </div>
    </div>
  </header>
);

export default Header;
