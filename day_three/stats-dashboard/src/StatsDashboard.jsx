function StatsDashboard() {
  const stats = [
    { 
      title: "Total Sales", 
      value: "₦2.5M", 
      change: "+12%", 
      trend: "up", 
      icon: "💰",
      color: "bg-blue-500",
      textColor: "text-blue-600"
    },
    { 
      title: "Orders", 
      value: "1,234", 
      change: "+8%", 
      trend: "up", 
      icon: "📦",
      color: "bg-green-500",
      textColor: "text-green-600"
    },
    { 
      title: "Customers", 
      value: "567", 
      change: "+23%", 
      trend: "up", 
      icon: "👥",
      color: "bg-purple-500",
      textColor: "text-purple-600"
    },
    { 
      title: "Revenue", 
      value: "₦4.2M", 
      change: "+15%", 
      trend: "up", 
      icon: "💳",
      color: "bg-orange-500",
      textColor: "text-orange-600"
    }
  ];

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-gray-900 mb-8">Business Dashboard</h1>
      
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div 
            key={index}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer border-l-4"
            style={{ borderLeftColor: stat.color.replace('bg-', '') }}
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`w-12 h-12 ${stat.color} rounded-lg flex items-center justify-center text-white text-xl`}>
                {stat.icon}
              </div>
              <span className={`text-sm font-semibold ${stat.trend === 'up' ? 'text-green-600' : 'text-red-600'} bg-green-50 px-2 py-1 rounded-full`}>
                {stat.change} {stat.trend === 'up' ? '↑' : '↓'}
              </span>
            </div>
            
            <h3 className="text-gray-600 text-sm font-medium">{stat.title}</h3>
            <p className="text-2xl font-bold text-gray-900 mt-1">{stat.value}</p>
            
            <div className="mt-4 flex items-center text-sm text-gray-500">
              <span className="text-green-500 mr-1">↑</span>
              Increased from last month
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}