function NewsCard() {
   return (
    <div className="max-w-sm mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
      
      {/* Category Badge  */}
      <div className="p-6 pb-0">
        <span className="inline-block bg-purple-600 text-white text-xs font-bold uppercase px-4 py-2 rounded-full">
          Entertainment
        </span>
      </div>
      
      {/* image */}
      <div className="px-6 pt-4">
        <img 
          src="https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=600&h=400&fit=crop" 
          alt="Fashion"
          className="h-48 w-full object-cover rounded-lg"
        />
      </div>
      
      {/* Article Content */}
      <div className="p-6">
        
        {/* Headline */}
        <h3 className="text-2xl font-bold text-gray-900 leading-tight">
           Nigerian Designers Take Global Fashion Week by Storm
        </h3>
        
        {/* Excerpt*/}
        <p className="text-gray-700 mt-3 text-sm leading-relaxed">
            Lagos-based fashion houses are revolutionizing the international fashion scene with their vibrant Ankara prints and contemporary designs.Top models showcased the stunning creations on runways in Paris and Milan, receiving standing ovations from fashion critics worldwide.The success marks a significant moment for African fashion, establishing Nigeria as a major player in the global luxury market
        </p>
        
        {/* Metadata Section */}
        <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
          
          {/* Author Info */}
          <div className="flex items-center space-x-3">
            {/* Author Avatar */}
            <div className="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
              AM
            </div>
            
            {/* Author Name and Date */}
            <div>
              <p className="text-sm font-semibold text-gray-900">Adesina Mariam</p>
              <p className="text-xs text-gray-500">Nov 11, 2025</p>
            </div>
          </div>

        </div>
        
        {/* Read More Link */}
        <a href="#" className="inline-block mt-5 text-green-600 font-semibold text-sm hover:text-green-700">
          Read full article →
        </a>
        
      </div>
    </div>
  );
}
export default NewsCard