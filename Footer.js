import React from 'react';

const Footer = () => (
  <footer className="bg-white shadow mt-8">
    <div className="container mx-auto px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="text-gray-800">&copy; 2023 Artisan Marketplace</div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-800 hover:text-gray-600"><i className="fab fa-facebook"></i></a>
          <a href="#" className="text-gray-800 hover:text-gray-600"><i className="fab fa-twitter"></i></a>
          <a href="#" className="text-gray-800 hover:text-gray-600"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
