function ProductGrid() {
  const products = [
    { id: 1, name: 'Jollof Rice', price: '1,500', image: '🍚' },
    { id: 2, name: 'Ankara Fabric', price: '5,000', image: '🧣' },
    { id: 3, name: 'Suya', price: '1,000', image: '🍢' },
    { id: 4, name: 'Aso-Ebi', price: '15,000', image: '👘' },
    { id: 5, name: 'Palm Wine', price: '1,200', image: '🍶' },
    { id: 6, name: 'Agbada', price: '25,000', image: '👘' },
    { id: 7, name: 'Chin Chin', price: '500', image: '🍪' },
    { id: 8, name: 'Puff Puff', price: '300', image: '🥯' },
  ];

  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-7xl mx-auto">
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <div key={product.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <div className="h-48 bg-gradient-to-br from-blue-400 to-navyblue-600 flex items-center justify-center text-6xl">
                {product.image}
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-2xl font-bold text-black-600 mb-4">₦{product.price}</p>
                
                <button className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
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