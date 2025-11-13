function ProductCard() {
  const products = [
    {
      id: 1,
      name: "Traditional Ankara Shirt",
      price: "₦15,000",
      originalPrice: "₦18,000",
      image: "https://m.media-amazon.com/images/I/81mVezNyyaL._AC_UY1000_.jpg",
      description: "African print shirt",
    },
    {
      id: 2,
      name: "Colorful Dashiki Shirt",
      price: "₦12,500",
      originalPrice: "₦15,000",
      image: "https://afrikanattire.com/cdn/shop/files/854890340c9b6bac029bd18f62517ec9.jpg?v=1683655862",
      description: "Traditional West African design",
    },
    {
      id: 3,
      name: "Kaftan Dress",
      price: "₦12,000",
      originalPrice: "₦16,000",
      category: "Women's Fashion",
      image: "https://www.buydfl.com/cdn/shop/files/1000106335-01.jpg?v=1699130223&width=1946",
      description: "Elegant and comfortable kaftan",
    },
    {
      id: 4,
      name: "Ankara Maxi Dress",
      price: "₦18,500",
      originalPrice: "₦22,200",
      category: "Women's Fashion",
      image: "https://kipfashion.com/wp-content/uploads/2020/06/Paulina-African-maxi-dress-2.jpg",
      description: "Beautiful long African dress",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      {/* Heading Section */}
      <div className="text-center mb-12 px-4">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          African Fashion Collection
        </h1>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-8 max-w-6xl mx-auto">
        {products.map((product) => (
          <div
            key={product.id}
            className="group bg-white rounded-xl shadow-lg hover:shadow-3xl transition-all duration-500 cursor-pointer overflow-hidden"
          >
            <div className="overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-150 object-cover group-hover:scale-110 transition-transform duration-500"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold text-gray-800 group-hover:text-blue-600 transition-colors">
                {product.name}
              </h3>
              <p className="text-gray-600 mt-2">{product.description}</p>

              <div className="mt-4 flex items-center justify-between">
                <div>
                  <span className="text-2xl font-bold text-blue-700">
                    {product.price}
                  </span>
                  <span className="text-sm text-gray-500 line-through ml-2">
                    {product.originalPrice}
                  </span>
                </div>
                <span className="bg-red-100 text-red-600 text-sm font-semibold px-2 py-1 rounded">
                  -20%
                </span>
              </div>

              <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 active:scale-95 text-white font-semibold py-3 rounded-lg transition-all duration-200 shadow hover:shadow-md">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;