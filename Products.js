import React from 'react';

const Products = ({ products, selectedCategory, setSelectedCategory, addToCart }) => {
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Products</h1>
      {/* Dropdown for category */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden">
            {/* Product details */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
