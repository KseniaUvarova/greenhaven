import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ShoppingBag, ArrowLeft } from 'lucide-react';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';

const CartPage: React.FC = () => {
  const { cartItems, getTotalItems, getTotalPrice } = useCart();
  const navigate = useNavigate();
  const totalItems = getTotalItems();
  const totalPrice = getTotalPrice();
  
  const handleCheckout = () => {
    alert('Coming soon! This feature is under development.');
  };
  
  if (totalItems === 0) {
    return (
      <div className="min-h-screen bg-gray-50 pt-20 flex flex-col items-center justify-center px-4">
        <ShoppingBag className="w-16 h-16 text-gray-300 mb-4" />
        <h2 className="text-2xl font-medium text-gray-700 mb-2">Your cart is empty</h2>
        <p className="text-gray-500 mb-6">Looks like you haven't added any plants to your cart yet.</p>
        <button 
          onClick={() => navigate('/products')} 
          className="flex items-center bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-md transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Continue Shopping
        </button>
      </div>
    );
  }
  
  return (
    <div className="min-h-screen bg-gray-50 pt-20 pb-12">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-serif font-bold text-green-800 mb-6">Your Shopping Cart</h1>
        
        <div className="bg-white rounded-lg shadow-md overflow-hidden mb-6">
          <div className="p-4 border-b border-gray-200 bg-gray-50">
            <p className="font-medium">
              Total Items: <span className="text-green-700">{totalItems}</span>
            </p>
          </div>
          
          <div className="divide-y divide-gray-200">
            {cartItems.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          
          <div className="p-6 bg-gray-50">
            <div className="flex justify-between items-center mb-6">
              <span className="text-lg font-medium">Total:</span>
              <span className="text-2xl font-semibold text-green-700">${totalPrice.toFixed(2)}</span>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => navigate('/products')} 
                className="flex items-center justify-center py-2 px-4 border border-green-600 text-green-600 rounded-md hover:bg-green-50 transition-colors sm:flex-1"
              >
                <ArrowLeft className="w-4 h-4 mr-2" />
                Continue Shopping
              </button>
              
              <button 
                onClick={handleCheckout} 
                className="flex items-center justify-center py-2 px-4 bg-green-600 text-white rounded-md hover:bg-green-700 transition-colors sm:flex-1"
              >
                Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;