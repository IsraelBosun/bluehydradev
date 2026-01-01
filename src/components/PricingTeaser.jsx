'use client';
import Link from 'next/link';

export default function PricingTeaser() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Pricing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-dark-900 mb-6">
            Plans That Fit Your <span className="gradient-text">Ambition</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-dark-600">
            Whether you're a startup or an enterprise, we have the perfect solution to bring your vision to life.
          </p>
        </div>

        {/* Quick Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Starter */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-primary-600 hover:shadow-xl transition-all duration-300">
            <div className="text-center">
              <h3 className="text-2xl font-bold font-display text-dark-900 mb-2">
                Starter
              </h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-primary-600">$25K</span>
                <span className="text-dark-600">/project</span>
              </div>
              <p className="text-dark-600 mb-6">
                Perfect for MVPs and small projects
              </p>
              <ul className="space-y-3 mb-8 text-left">
                {['5-10 page website', 'Custom design', 'Mobile optimized', '2 months support'].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-dark-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Professional */}
          <div className="relative bg-gradient-to-br from-primary-600 to-purple-600 rounded-2xl p-8 text-white shadow-2xl transform scale-105">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 px-4 py-1 bg-yellow-400 text-dark-900 text-xs font-bold rounded-full uppercase">
              Most Popular
            </div>
            <div className="text-center">
              <h3 className="text-2xl font-bold font-display mb-2">
                Professional
              </h3>
              <div className="mb-6">
                <span className="text-5xl font-bold">$75K</span>
                <span className="opacity-90">/project</span>
              </div>
              <p className="opacity-90 mb-6">
                Ideal for growing businesses
              </p>
              <ul className="space-y-3 mb-8 text-left">
                {['Full-stack application', 'User authentication', 'API development', '6 months support'].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Enterprise */}
          <div className="bg-white border-2 border-gray-200 rounded-2xl p-8 hover:border-primary-600 hover:shadow-xl transition-all duration-300">
            <div className="text-center">
              <h3 className="text-2xl font-bold font-display text-dark-900 mb-2">
                Enterprise
              </h3>
              <div className="mb-6">
                <span className="text-5xl font-bold text-primary-600">Custom</span>
              </div>
              <p className="text-dark-600 mb-6">
                For large-scale applications
              </p>
              <ul className="space-y-3 mb-8 text-left">
                {['Complex platform', 'Microservices', 'AI/ML capabilities', 'Dedicated team'].map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <svg className="w-5 h-5 text-primary-600 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-dark-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/pricing"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-dark-900 text-white font-semibold rounded-lg hover:bg-dark-800 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <span>View Detailed Pricing</span>
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}