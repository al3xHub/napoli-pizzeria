import React from 'react';
import { MapPin } from 'lucide-react';

export function Locations() {
  const locations = [
    {
      name: "Little Italy",
      address: "234 Mulberry Street",
      city: "New York, NY 10012",
      phone: "(212) 555-0123",
      hours: "Mon-Sun: 11:30AM - 10PM"
    },
    {
      name: "North End",
      address: "123 Hanover Street",
      city: "Boston, MA 02113",
      phone: "(617) 555-0123",
      hours: "Mon-Sun: 11:30AM - 10PM"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 font-serif">Our Locations</h2>
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {locations.map((location) => (
            <div key={location.name} className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-center gap-2 mb-4">
                <MapPin className="w-5 h-5 text-orange-500" />
                <h3 className="text-2xl font-bold">{location.name}</h3>
              </div>
              <div className="text-gray-600">
                <p>{location.address}</p>
                <p>{location.city}</p>
                <p className="mt-4">{location.phone}</p>
                <p className="mt-2">{location.hours}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}