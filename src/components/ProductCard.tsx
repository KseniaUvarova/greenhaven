import React from 'react';
import { Product } from '../types';
import { useCart } from '../context/CartContext';
import { ShoppingBag } from 'lucide-react';

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { addToCart, cartItems } = useCart();
  
  const isInCart = cartItems.some(item => item.id === product.id);
  
  const handleAddToCart = () => {
    if (!isInCart) {
      addToCart(product);
    }
  };

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 h-full flex flex-col">
      <div className="relative h-64 overflow-hidden group">
        <img 
          src={product.image} 
          alt={product.name} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <div className="flex-grow">
          <h3 className="text-lg font-serif font-semibold text-gray-800 mb-1">{product.name}</h3>
          <p className="text-green-700 font-medium mb-3">${product.price.toFixed(2)}</p>
          <p className="text-gray-600 text-sm mb-4">{product.description}</p>
        </div>
        <button
          onClick={handleAddToCart}
          disabled={isInCart}
          className={`flex items-center justify-center py-2 px-4 rounded font-medium transition-colors ${
            isInCart 
              ? 'bg-gray-200 text-gray-600 cursor-not-allowed'
              : 'bg-green-600 text-white hover:bg-green-700'
          }`}
        >
          <ShoppingBag className="w-4 h-4 mr-2" />
          {isInCart ? 'Added to Cart' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;