import React from 'react';
import { CartItem as CartItemType } from '../types';
import { Plus, Minus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

interface CartItemProps {
  item: CartItemType;
}

const CartItem: React.FC<CartItemProps> = ({ item }) => {
  const { increaseQuantity, decreaseQuantity, removeFromCart } = useCart();
  
  return (
    <div className="flex flex-col sm:flex-row items-center gap-4 p-4 border-b border-gray-200">
      <div className="w-20 h-20 rounded-md overflow-hidden flex-shrink-0">
        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
      </div>
      
      <div className="flex-grow text-center sm:text-left">
        <h3 className="font-medium text-gray-800">{item.name}</h3>
        <p className="text-green-700">${item.price.toFixed(2)}</p>
      </div>
      
      <div className="flex items-center gap-2">
        <button 
          onClick={() => decreaseQuantity(item.id)}
          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
          aria-label="Decrease quantity"
        >
          <Minus className="w-4 h-4 text-gray-600" />
        </button>
        
        <span className="w-8 text-center font-medium">{item.quantity}</span>
        
        <button 
          onClick={() => increaseQuantity(item.id)}
          className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-300 hover:bg-gray-100 transition-colors"
          aria-label="Increase quantity"
        >
          <Plus className="w-4 h-4 text-gray-600" />
        </button>
      </div>
      
      <div className="sm:w-24 text-right font-medium">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
      
      <button 
        onClick={() => removeFromCart(item.id)}
        className="text-red-500 hover:text-red-700 transition-colors"
        aria-label="Remove item"
      >
        <Trash2 className="w-5 h-5" />
      </button>
    </div>
  );
};

export default CartItem;