import React from 'react';

type MenuItem = {
  name: string;
  description: string;
  price: string;
};

type MenuSectionProps = {
  title: string;
  items: MenuItem[];
};

export function MenuSection({ title, items }: MenuSectionProps) {
  return (
    <div className="mb-12">
      <h3 className="text-2xl font-bold mb-6 text-orange-500">{title}</h3>
      <div className="space-y-6">
        {items.map((item) => (
          <div key={item.name} className="flex justify-between items-start border-b border-gray-200 pb-4">
            <div>
              <h4 className="text-xl font-semibold mb-2">{item.name}</h4>
              <p className="text-gray-600">{item.description}</p>
            </div>
            <span className="text-xl font-bold ml-4">{item.price}</span>
          </div>
        ))}
      </div>
    </div>
  );
}