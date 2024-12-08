import React from 'react';

export function Owners() {
  const owners = [
    {
      name: "Marco Rossi",
      role: "Master Pizzaiolo",
      image: "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Third-generation pizza maker from Naples"
    },
    {
      name: "Sofia Romano",
      role: "Executive Chef",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      description: "Culinary expert specializing in Southern Italian cuisine"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 font-serif">Meet Our Family</h2>
        <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {owners.map((owner) => (
            <div key={owner.name} className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={owner.image}
                alt={owner.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">{owner.name}</h3>
                <p className="text-orange-500 font-semibold mb-4">{owner.role}</p>
                <p className="text-gray-600">{owner.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}