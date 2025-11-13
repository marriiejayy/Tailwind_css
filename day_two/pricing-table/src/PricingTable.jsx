import React from 'react';
function PricingTable() {
  const plans = [
    {
      name: 'Basic',
      price: '5,000',
      description: 'Perfect for small businesses',
      features: ['50 products', 'Basic analytics', 'Email support', 'Mobile responsive'],
      popular: false
    },
    {
      name: 'Pro',
      price: '15,000',
      description: 'Best for growing businesses',
      features: ['500 products', 'Advanced analytics', 'Priority support', 'Custom domain', 'Marketing tools'],
      popular: true
    },
    {
      name: 'Enterprise',
      price: '50,000',
      description: 'For large-scale operations',
      features: ['Unlimited products', 'Real-time analytics', '24/7 support', 'Multiple stores', 'Custom integrations'],
      popular: false
    }
  ];
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Choose Your Plan</h2>
        </div>
        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={`bg-white rounded-lg shadow-lg p-6 ${
                plan.popular ? 'ring-2 ring-green-500 transform scale-105' : ''
              }`}
            >
              {/* Popular  */}
              {plan.popular && (
                <div className="bg-green-500 text-white text-center py-1 rounded-full mb-4">
                   Popular
                </div>
              )}
              {/* Plan Name & Price */}
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
              <p className="text-gray-600 mb-4">{plan.description}</p>
              <div className="mb-6">
                <span className="text-4xl font-bold text-gray-900">₦{plan.price}</span>
                <span className="text-gray-600">/month</span>
              </div>
              {/* Features List */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-2">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs">✓</span>
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              {/*  Button */}
              <button
                className={`w-full py-3 rounded-lg font-semibold ${
                  plan.popular
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
export default PricingTable;
