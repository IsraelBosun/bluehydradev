'use client';
import { pricingPlans } from '@/lib/data';
import { useState } from 'react';

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState('project');
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-primary-50/30 to-purple-50/20 pt-24">
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 text-center">
        <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-6">
          Transparent Pricing
        </span>
        <h1 className="text-5xl md:text-6xl font-bold font-display text-dark-900 mb-6">
          Choose Your <span className="gradient-text">Perfect Plan</span>
        </h1>
        <p className="max-w-2xl mx-auto text-xl text-dark-600 mb-8">
          No hidden fees. No surprises. Just world-class development at transparent prices.
        </p>

        {/* Billing Toggle */}
        <div className="inline-flex bg-white rounded-xl p-2 shadow-lg border border-gray-200">
          <button
            onClick={() => setBillingCycle('project')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              billingCycle === 'project'
                ? 'bg-primary-600 text-white shadow-md'
                : 'text-dark-600 hover:text-dark-900'
            }`}
          >
            Per Project
          </button>
          <button
            onClick={() => setBillingCycle('retainer')}
            className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
              billingCycle === 'retainer'
                ? 'bg-primary-600 text-white shadow-md'
                : 'text-dark-600 hover:text-dark-900'
            }`}
          >
            Monthly Retainer
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div
              key={index}
              onMouseEnter={() => setSelectedPlan(index)}
              onMouseLeave={() => setSelectedPlan(null)}
              className={`relative bg-white rounded-3xl overflow-hidden transition-all duration-500 ${
                plan.popular
                  ? 'border-4 border-primary-600 shadow-2xl transform scale-105'
                  : 'border-2 border-gray-200 shadow-xl hover:border-primary-300 hover:shadow-2xl'
              } ${selectedPlan === index ? 'transform scale-105' : ''}`}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-gradient-to-r from-primary-600 to-purple-600 text-white px-6 py-2 rounded-bl-2xl font-semibold text-sm">
                  Most Popular
                </div>
              )}

              <div className="p-8 md:p-10">
                {/* Plan Name */}
                <h3 className="text-3xl font-bold font-display text-dark-900 mb-4">
                  {plan.name}
                </h3>

                {/* Price */}
                <div className="mb-6">
                  <span className="text-5xl md:text-6xl font-bold text-primary-600">
                    {plan.price}
                  </span>
                  {plan.price !== 'Custom' && billingCycle === 'project' && (
                    <span className="text-dark-600 text-lg"> /project</span>
                  )}
                </div>

                {/* Description */}
                <p className="text-dark-600 mb-8 text-lg">
                  {plan.description}
                </p>

                {/* CTA Button */}
                <a
                  href="/contact"
                  className={`block w-full text-center px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 mb-8 ${
                    plan.popular
                      ? 'bg-primary-600 text-white hover:bg-primary-700 shadow-lg'
                      : 'bg-dark-900 text-white hover:bg-dark-800 shadow-lg'
                  }`}
                >
                  {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                </a>

                {/* Features List */}
                <div className="space-y-4">
                  <p className="text-sm font-semibold text-dark-900 uppercase tracking-wider mb-4">
                    What's Included:
                  </p>
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start space-x-3">
                      <svg
                        className="w-6 h-6 text-primary-600 flex-shrink-0 mt-0.5"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <span className="text-dark-700 leading-relaxed">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center">
          <p className="text-dark-600 mb-4">
            All plans include free initial consultation and ongoing support.
          </p>
          <p className="text-sm text-dark-500">
            Need a custom solution? <a href="/contact" className="text-primary-600 font-semibold hover:underline">Contact our team</a> for a personalized quote.
          </p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-white py-24">
        <div className="max-w-4xl mx-auto px-6 lg:px-8">
          <h2 className="text-4xl font-bold font-display text-dark-900 text-center mb-12">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <div className="space-y-6">
            {[
              {
                q: 'What payment methods do you accept?',
                a: 'We accept all major credit cards, wire transfers, and ACH payments. Payment plans are available for larger projects.',
              },
              {
                q: 'How long does a typical project take?',
                a: 'Project timelines vary based on complexity. Starter projects typically take 6-8 weeks, Professional 10-14 weeks, and Enterprise projects 16+ weeks.',
              },
              {
                q: 'Do you offer post-launch support?',
                a: 'Yes! All plans include dedicated support. Starter includes 2 months, Professional includes 6 months, and Enterprise includes 12+ months of support.',
              },
              {
                q: 'Can I upgrade my plan later?',
                a: 'Absolutely! You can upgrade your plan at any time. We\'ll credit your previous payment towards the new plan.',
              },
              {
                q: 'What if I need custom features?',
                a: 'Our Enterprise plan is fully customizable. Contact us to discuss your specific requirements and get a tailored quote.',
              },
            ].map((faq, index) => (
              <details
                key={index}
                className="group bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-all duration-300"
              >
                <summary className="flex justify-between items-center cursor-pointer list-none">
                  <span className="text-lg font-semibold text-dark-900">
                    {faq.q}
                  </span>
                  <svg
                    className="w-6 h-6 text-primary-600 transform group-open:rotate-180 transition-transform duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </summary>
                <p className="mt-4 text-dark-600 leading-relaxed">
                  {faq.a}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA */}
      <div className="bg-gradient-to-r from-primary-600 to-purple-600 py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center text-white">
          <h2 className="text-4xl font-bold font-display mb-6">
            Ready to Build Something Amazing?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Let's discuss your project and create a custom plan that fits your needs perfectly.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="/contact"
              className="px-8 py-4 bg-white text-primary-600 font-semibold rounded-lg hover:bg-gray-100 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              Schedule a Call
            </a>
            <a
              href="/#portfolio"
              className="px-8 py-4 bg-transparent border-2 border-white text-white font-semibold rounded-lg hover:bg-white hover:text-primary-600 transform hover:scale-105 transition-all duration-300"
            >
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}