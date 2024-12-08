import React from 'react';
import { MenuSection } from './menu/MenuSection';
import { menuData } from './menu/menuData';

export function Menu() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 font-serif">Our Menu</h2>
        <div className="max-w-4xl mx-auto">
          <MenuSection title={menuData.starters.title} items={menuData.starters.items} />
          <MenuSection title={menuData.pizzas.title} items={menuData.pizzas.items} />
          <MenuSection title={menuData.wines.title} items={menuData.wines.items} />
          <MenuSection title={menuData.beers.title} items={menuData.beers.items} />
          <MenuSection title={menuData.beverages.title} items={menuData.beverages.items} />
        </div>
      </div>
    </section>
  );
}