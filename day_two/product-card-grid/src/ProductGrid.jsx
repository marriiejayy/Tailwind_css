import React from 'react';

function ProductGrid() {
  const products = [
    { 
      id: 1, 
      name: 'Jollof Rice', 
      price: '1,500', 
      image: '/images/products/jollof-rice.jpg',
      category: 'Food' 
    },
    { 
      id: 2, 
      name: 'Ankara Fabric', 
      price: '5,000', 
      image: '/images/products/ankara-fabric.png',
      category: 'Fashion' 
    },
    { 
      id: 3, 
      name: 'Suya Spice', 
      price: '800', 
      image: '/images/products/suya-spice.webp',
      category: 'Food' 
    },
    { 
      id: 4, 
      name: 'Aso-Ebi', 
      price: '15,000', 
      image: '/images/products/aso-ebi.jpg',
      category: 'Fashion' 
    },
    { 
      id: 5, 
      name: 'Palm Wine', 
      price: '1,200', 
      image: '/images/products/palm-wine.webp',
      category: 'Drinks' 
    },
    { 
      id: 6, 
      name: 'Agbada', 
      price: '25,000', 
      image: '/images/products/agbada.webp',
      category: 'Fashion' 
    },
    { 
      id: 7, 
      name: 'Chin Chin', 
      price: '500', 
      image: '/images/products/chinchin.jpeg',
      category: 'Snacks' 
    },
    { 
      id: 8, 
      name: 'Puff Puff', 
      price: '300', 
      image: '/images/products/puff-puff.webp',
      category: 'Snacks' 
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Nigerian Products
        </h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
              {/* Product Image */}
              <div className="h-120 bg-gray-200 overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
              
              <div className="p-6">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{product.name}</h3>
                  <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">
                    {product.category}
                  </span>
                </div>
                
                <p className="text-2xl font-bold text-grey-900 mb-4">
                  ₦{product.price}
                </p>
                
                <button className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-500 transition-colors">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductGrid;