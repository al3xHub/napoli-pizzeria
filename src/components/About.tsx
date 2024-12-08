import React from 'react';
import { Flame } from 'lucide-react';

export function About() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <div className="md:w-1/2">
            <img
              src="https://images.unsplash.com/photo-1541745537411-b8046dc6d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
              alt="Wood-fired pizza oven"
              className="rounded-lg shadow-xl"
            />
          </div>
          <div className="md:w-1/2">
            <div className="flex items-center gap-2 mb-4">
              <Flame className="w-6 h-6 text-orange-500" />
              <h2 className="text-3xl font-bold font-serif">Our Story</h2>
            </div>
            <p className="text-gray-600 mb-6">
              Since 1947, Napoli Autentica has been crafting authentic Neapolitan pizzas using traditional methods passed down through generations. Our dough ferments for 72 hours, creating the perfect chewy yet crispy crust that Naples is famous for.
            </p>
            <p className="text-gray-600">
              Every pizza is cooked in our imported wood-fired ovens at 900°F for exactly 90 seconds, resulting in the characteristic leopard-spotted crust that pizza connoisseurs crave. We use only the finest ingredients, including San Marzano tomatoes and Buffalo mozzarella imported directly from Campania.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}