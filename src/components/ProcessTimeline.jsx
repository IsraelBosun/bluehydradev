'use client';
import { processSteps } from '@/lib/data';

export default function ProcessTimeline() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Our Process
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-dark-900 mb-6">
            From Idea to <span className="gradient-text">Reality</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-dark-600">
            Our proven methodology ensures your project is delivered on time, within budget, and exceeds expectations.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary-600 via-purple-600 to-primary-600"></div>

          {/* Steps */}
          <div className="space-y-16">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col md:flex-row items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Content Card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                  <div className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border-2 border-transparent hover:border-primary-600 transform hover:scale-105">
                    <div className={`flex items-center gap-4 mb-4 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      <div className="text-5xl font-bold text-primary-600 opacity-20">
                        {step.step}
                      </div>
                      <h3 className="text-2xl font-bold font-display text-dark-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="text-dark-600 leading-relaxed mb-4">
                      {step.description}
                    </p>
                    <div className={`inline-flex items-center space-x-2 px-4 py-2 bg-primary-50 rounded-lg ${index % 2 === 0 ? 'md:ml-auto' : ''}`}>
                      <svg
                        className="w-5 h-5 text-primary-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-primary-700 font-semibold text-sm">
                        {step.duration}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Center Circle */}
                <div className="relative flex items-center justify-center w-full md:w-2/12 my-8 md:my-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-lg z-10 animate-pulse">
                    {index + 1}
                  </div>
                </div>

                {/* Placeholder for alternating layout */}
                <div className="hidden md:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center">
          <div className="bg-gradient-to-r from-primary-600 to-purple-600 rounded-2xl p-12 text-white">
            <h3 className="text-3xl font-bold font-display mb-4">
              Ready to Start Your Journey?
            </h3>
            <p className="text-xl mb-8 opacity-90">
              Let's discuss your project and create something amazing together.
            </p>
            <a
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}