import React, { useState } from 'react';
import { products, categories } from '../data/products';
import ProductCard from './ProductCard';

const ProductsPage: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const filteredProducts = activeCategory 
    ? products.filter(product => product.category === activeCategory)
    : products;

  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-serif font-bold text-green-800 mb-2 text-center">Our Plants</h1>
        <p className="text-gray-600 text-center max-w-2xl mx-auto mb-8">
          Discover our collection of beautiful, carefully nurtured houseplants to bring nature into your home.
        </p>
        
        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          <button
            onClick={() => setActiveCategory(null)}
            className={`px-4 py-2 rounded-full transition-colors ${
              activeCategory === null 
                ? 'bg-green-600 text-white' 
                : 'bg-white text-green-600 hover:bg-green-50'
            }`}
          >
            All Plants
          </button>
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category 
                  ? 'bg-green-600 text-white' 
                  : 'bg-white text-green-600 hover:bg-green-50'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;