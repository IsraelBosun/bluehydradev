'use client';
import { trustMetrics, testimonials } from '@/lib/data';

export default function TrustIndicators() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Trust Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {trustMetrics.map((metric, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <div className="text-5xl md:text-6xl font-bold text-primary-600 mb-2">
                {metric.value}
              </div>
              <div className="text-dark-600 font-medium">
                {metric.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Section */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Testimonials
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-dark-900 mb-6">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-primary-600"
            >
              {/* Stars */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <svg
                    key={i}
                    className="w-5 h-5 text-yellow-400"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>

              {/* Content */}
              <p className="text-lg text-dark-700 mb-6 leading-relaxed italic">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-primary-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                  {testimonial.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-dark-900">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-dark-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Awards & Certifications */}
        <div className="mt-20 text-center">
          <h3 className="text-2xl font-bold font-display text-dark-900 mb-8">
            Awards & Certifications
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-12">
            {['AWS Certified', 'Google Cloud Partner', 'Microsoft Azure', 'ISO 27001', 'SOC 2'].map((cert, index) => (
              <div
                key={index}
                className="px-6 py-3 bg-white rounded-lg shadow-md border border-gray-200 hover:border-primary-600 transition-colors duration-300"
              >
                <span className="text-dark-700 font-semibold">{cert}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}