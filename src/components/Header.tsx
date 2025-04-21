import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingCart, Menu, X } from 'lucide-react';
import { useCart } from '../context/CartContext';

const Header: React.FC = () => {
  const { getTotalItems } = useCart();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const totalItems = getTotalItems();
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isLandingPage = location.pathname === '/';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled || !isLandingPage ? 'bg-white shadow-md py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link 
          to="/" 
          className={`font-serif text-2xl font-bold tracking-tight ${
            isScrolled || !isLandingPage ? 'text-green-800' : 'text-white'
          }`}
        >
          GreenOasis
        </Link>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link 
            to="/" 
            className={`font-medium transition-colors hover:text-green-600 ${
              isScrolled || !isLandingPage ? 'text-green-800' : 'text-white'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/products" 
            className={`font-medium transition-colors hover:text-green-600 ${
              isScrolled || !isLandingPage ? 'text-green-800' : 'text-white'
            }`}
          >
            Products
          </Link>
          <Link to="/cart" className="relative">
            <ShoppingCart 
              className={`w-6 h-6 transition-colors hover:text-green-600 ${
                isScrolled || !isLandingPage ? 'text-green-800' : 'text-white'
              }`} 
            />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
        </nav>
        
        {/* Mobile Menu Button */}
        <div className="flex items-center space-x-4 md:hidden">
          <Link to="/cart" className="relative">
            <ShoppingCart 
              className={`w-6 h-6 ${
                isScrolled || !isLandingPage ? 'text-green-800' : 'text-white'
              }`} 
            />
            {totalItems > 0 && (
              <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </Link>
          <button 
            onClick={toggleMenu}
            className={`${isScrolled || !isLandingPage ? 'text-green-800' : 'text-white'}`}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-white pt-20">
          <div className="container mx-auto px-4 py-5 flex flex-col space-y-6">
            <Link 
              to="/" 
              className="text-green-800 text-2xl font-medium border-b border-gray-200 pb-2"
            >
              Home
            </Link>
            <Link 
              to="/products" 
              className="text-green-800 text-2xl font-medium border-b border-gray-200 pb-2"
            >
              Products
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;