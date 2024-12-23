import React from 'react';
import { ChevronRight } from 'lucide-react';
import nasgor from '../assets/nasgor.png';
import esTeh from '../assets/esteh.png';

const ProductGrid = () => {
  const deals = [
    {
      title: 'Nasi Goreng',
      price: 20,
      originalPrice: 25,
      image: nasgor,
    },
    {
      title: 'Es Teh',
      price: 3,
      originalPrice: 5,
      image: esTeh,
    },
    {
      title: 'Ayam Bakar',
      price: 25,
      originalPrice: 30,
      image: 'https://png.pngtree.com/png-vector/20240827/ourmid/pngtree-chicken-dish-ayam-bakar-png-image_13641015.png',
    },
    {
      title: 'Jus Alpukat',
      price: 10,
      originalPrice: 13,
      image: 'https://i.gojekapi.com/darkroom/gofood-indonesia/v2/images/uploads/ac9b901e-0df1-4497-b395-1f29d53c6465_Go-Biz_20201124_145157.jpeg',
    },
  ];

  return (
    <div className='mb-7 mx-5'>
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-xl font-semibold">Sedang Diskon</h2>
        
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {deals.map((deal) => (
          <div 
            key={deal.title} 
            className="border rounded-lg shadow-sm overflow-hidden bg-white hover:shadow-md transition-shadow"
          >
            <div className="p-4">
              <img
                src={deal.image}
                alt={deal.title}
                className="w-full h-40 object-contain mb-4"
              />
              <h3 className="font-medium mb-2">{deal.title}</h3>
              <div className="flex gap-2 items-center">
                <span className="text-lg font-bold">{deal.price}k</span>
                <span className="text-sm text-gray-400 line-through">
                  {deal.originalPrice}k
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;