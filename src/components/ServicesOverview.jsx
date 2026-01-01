'use client';
import { services } from '@/lib/data';
import { useState } from 'react';

export default function ServicesOverview() {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-dark-900 mb-6">
            Everything You Need to <span className="gradient-text">Succeed</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-dark-600">
            From concept to launch and beyond, we provide comprehensive development services tailored to your needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className={`group relative p-8 bg-white rounded-2xl border-2 transition-all duration-500 cursor-pointer ${
                hoveredIndex === index
                  ? 'border-primary-600 shadow-2xl transform scale-105'
                  : 'border-gray-200 hover:border-primary-300 shadow-lg'
              }`}
            >
              {/* Background Gradient on Hover */}
              <div
                className={`absolute inset-0 bg-gradient-to-br from-primary-50 to-purple-50 rounded-2xl transition-opacity duration-500 ${
                  hoveredIndex === index ? 'opacity-100' : 'opacity-0'
                }`}
              ></div>

              <div className="relative z-10">
                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-purple-600 rounded-xl flex items-center justify-center text-3xl mb-6 transform group-hover:rotate-6 group-hover:scale-110 transition-all duration-300">
                  {service.icon}
                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold font-display text-dark-900 mb-4">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-dark-600 mb-6 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-3">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <svg
                        className="w-5 h-5 text-primary-600 flex-shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-dark-700 font-medium">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Learn More Link */}
                <div className="mt-6 flex items-center space-x-2 text-primary-600 font-semibold group-hover:space-x-3 transition-all duration-300">
                  <span>Learn more</span>
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-dark-600 mb-6">
            Need a custom solution? We're here to help.
          </p>
          <a
            href="/contact"
            className="inline-block px-8 py-4 bg-dark-900 text-white font-semibold rounded-lg hover:bg-dark-800 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            Discuss Your Project
          </a>
        </div>
      </div>
    </section>
  );
}