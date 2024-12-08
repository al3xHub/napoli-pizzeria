import React from 'react';
import { ChefHat } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: 'url("https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>
      
      <div className="relative h-full flex flex-col items-center justify-center text-white px-4">
        <ChefHat className="w-16 h-16 mb-6" />
        <h1 className="text-6xl md:text-7xl font-bold mb-4 text-center font-serif">Napoli Autentica</h1>
        <p className="text-xl md:text-2xl text-center max-w-2xl mx-auto mb-8 italic">
          Experience the true taste of Naples in every bite
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg font-semibold transition-colors">
          Order Now
        </button>
      </div>
    </div>
  );
}