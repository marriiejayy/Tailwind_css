import React from 'react';

function BlogPost() {
  const relatedPosts = [
    { 
      id: 1, 
      title: 'Nigerian Cuisine History', 
      date: 'Nov 12, 2025',
      image: '/images/blog/nigerian-cuisine.jpg'
    },
    { 
      id: 2, 
      title: 'Traditional Fashion Trends', 
      date: 'Nov 12, 2025',
      image: '/images/blog/fashion-trends.jpg'
    },
    { 
      id: 3, 
      title: 'Local Business Spotlight', 
      date: 'Nov 12, 2025',
      image: '/images/blog/business-spotlight.jpg'
    },
    { 
      id: 4, 
      title: 'E-commerce growth', 
      date: 'Nov 12, 2025',
      image: '/images/blog/ecommerce-growth.jpg'
    },
    { 
      id: 5, 
      title: 'Digital payment', 
      date: 'Nov 12, 2025',
      image: '/images/blog/digital-payment.jpg'
    },

    { 
      id: 6, 
      title: 'Local Business Spotlight', 
      date: 'Nov 12, 2025',
      image: '/images/blog/market-growth-rate.jpg'
    },
    { 
      id: 7, 
      title: 'Author', 
      date: 'Nov 12, 2025',
      image: '/images/authors/author-adebayo.jpg'
    },
  ];

  return (
    <div className="min-h-screen bg-grey-50 py-12">
      <div className="max-w-6xl mx-auto px-4">
        {/* Featured Image */}
        <div className="relative h-100 rounded-2xl mb-8 overflow-hidden">
          <img 
            src="/images/blog/ecommerce-growth.jpg"
            alt="Nigerian E-commerce Growth"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white text-center px-4">
              The Rise of Nigerian E-commerce
            </h1>
          </div>
        </div>

        {/* Article Header */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            The Rise of Nigerian E-commerce: A Digital Revolution
          </h1>
          <div className="flex flex-wrap items-center gap-6 text-gray-600">
            <div className="flex items-center gap-3">
              <img 
                src="/images/authors/author-adebayo.jpg"
                alt="Adebayo Mary"
                className="w-10 h-10 rounded-full object-cover"
              />
              <span>By Adebayo Mary</span>
            </div>
            <span>November 12, 2025</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                The Nigerian e-commerce landscape has undergone a remarkable transformation 
                in recent years, driven by increasing internet penetration and a growing 
                middle class embracing digital solutions. With over 100 million internet users, 
                Nigeria represents one of Africa's most promising digital markets.
              </p>
              
              {/* Content Image 1 */}
              <div className="my-8">
                <img 
                  src="/images/blog/market-growth.jpg"
                  alt="Nigerian Market Growth"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <p className="text-sm text-gray-500 mt-2 text-center">
                  Local markets embracing digital transformation
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Market Growth</h2>
              <p className="text-gray-700 leading-relaxed mb-6">
                Local entrepreneurs are leveraging this opportunity to create platforms that 
                cater specifically to Nigerian consumers' unique needs and preferences. From 
                food delivery to fashion retail, Nigerian e-commerce is booming.
              </p>

              {/* Content Image 2 */}
              <div className="my-8">
                <img 
                  src="/images/blog/digital-payment.jpg"
                  alt="Digital Payment Solutions"
                  className="w-full h-64 object-cover rounded-lg"
                />
                <p className="text-sm text-gray-500 mt-2 text-center">
                  Innovative payment solutions driving e-commerce growth
                </p>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mb-4">Future Outlook</h2>
              <p className="text-gray-700 leading-relaxed">
                The future looks bright for Nigerian e-commerce, with innovations in 
                payment systems, logistics, and mobile technology driving further growth. 
                As more consumers embrace online shopping, we can expect to see even more 
                creative solutions emerging from this vibrant market.
              </p>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Related Posts</h3>
              <div className="space-y-6">
                {relatedPosts.map(post => (
                  <div key={post.id} className="group cursor-pointer">
                    <img 
                      src={post.image}
                      alt={post.title}
                      className="w-full h-32 object-cover rounded-lg mb-3 group-hover:opacity-90 transition-opacity"
                    />
                    <div className="border-l-4 border-green-600 pl-4">
                      <h4 className="font-semibold text-gray-900 group-hover:text-green-600 transition-colors">
                        {post.title}
                      </h4>
                      <p className="text-sm text-gray-600">{post.date}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Newsletter Section */}
              <div className="mt-8 p-4 bg-green-50 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">Newsletter</h4>
                <p className="text-sm text-gray-600 mb-4">
                  Get the latest updates on Nigerian business and technology.
                </p>
                <input 
                  type="email" 
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg mb-2 focus:outline-none focus:ring-2 focus:ring-green-500"
                />
                <button className="w-full bg-green-600 text-white py-2 rounded-lg font-medium hover:bg-green-700 transition-colors">
                  Subscribe
                </button>
              </div>

              {/* Author Bio */}
              <div className="mt-8 p-4 bg-gray-50 rounded-lg">
                <div className="flex items-center gap-3 mb-3">
                  <img 
                    src="/images/authors/author-adebayo.jpg"
                    alt="Adebayo Mary"
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h5 className="font-bold text-gray-900">Adebayo Mary</h5>
                    <p className="text-sm text-gray-600">Tech Journalist</p>
                  </div>
                </div>
                <p className="text-sm text-gray-700">
                  Covering African tech innovation and digital transformation stories for over 5 years.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BlogPost;