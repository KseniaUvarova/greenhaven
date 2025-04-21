import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center" 
        style={{ 
          backgroundImage: 'url(https://images.pexels.com/photos/1470171/pexels-photo-1470171.jpeg)',
          filter: 'brightness(0.7)'
        }}
      ></div>
      
      {/* Content Overlay */}
      <div className="container mx-auto px-4 relative z-10 py-20 md:py-0">
        <div className="max-w-xl bg-black/30 backdrop-blur-sm p-8 md:p-12 rounded-lg">
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white mb-6">
            GreenOasis
          </h1>
          <p className="text-xl text-white mb-8 leading-relaxed">
            Bring nature indoors with our carefully curated collection of beautiful houseplants. 
            Each plant is hand-selected for quality and sustainability, making your home greener 
            and your life brighter.
          </p>
          <button 
            onClick={() => navigate('/products')} 
            className="bg-green-700 hover:bg-green-800 text-white py-3 px-8 rounded-md font-medium flex items-center group transition-all duration-300"
          >
            <span>Get Started</span>
            <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;