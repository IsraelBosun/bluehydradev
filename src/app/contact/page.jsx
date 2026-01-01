'use client';
import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: 'web',
    budget: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  };

  const contactInfo = [
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
      title: 'Email Us',
      content: 'bluehydra@gmail.com.com',
      link: 'mailto:bluehydra@gmail.com',
    },
    {
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      title: 'Call Us',
      content: '+234 9063 863 042',
      link: 'tel:+2349063863042',
    },
  ];

  return (
    <div className="min-h-screen bg-white pt-24">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-primary-600 to-purple-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">
            Let's Build Something <span className="text-yellow-300">Extraordinary</span>
          </h1>
          <p className="text-xl md:text-2xl max-w-3xl mx-auto opacity-90">
            Ready to transform your vision into reality? Get in touch with our team and let's create magic together.
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div>
            <h2 className="text-3xl font-bold font-display text-dark-900 mb-4">
              Start Your Project
            </h2>
            <p className="text-dark-600 mb-8">
              Fill out the form below and we'll get back to you within 24 hours.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-dark-900 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none transition-colors"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-dark-900 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none transition-colors"
                  placeholder="john@company.com"
                />
              </div>

              {/* Company */}
              <div>
                <label htmlFor="company" className="block text-sm font-semibold text-dark-900 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none transition-colors"
                  placeholder="Your Company"
                />
              </div>

              {/* Project Type */}
              <div>
                <label htmlFor="projectType" className="block text-sm font-semibold text-dark-900 mb-2">
                  Project Type *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none transition-colors"
                >
                  <option value="web">Web Development</option>
                  <option value="mobile">Mobile App</option>
                  <option value="both">Web + Mobile</option>
                  <option value="design">UI/UX Design</option>
                  <option value="consulting">Consulting</option>
                  <option value="other">Other</option>
                </select>
              </div>

              {/* Budget */}
              <div>
                <label htmlFor="budget" className="block text-sm font-semibold text-dark-900 mb-2">
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none transition-colors"
                >
                  <option value="">Select a range</option>
                  <option value="<25k">Less than $25,000</option>
                  <option value="25k-50k">$25,000 - $50,000</option>
                  <option value="50k-100k">$50,000 - $100,000</option>
                  <option value="100k+">$100,000+</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-dark-900 mb-2">
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary-600 focus:outline-none transition-colors resize-none"
                  placeholder="Tell us about your project, goals, and timeline..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                Send Message
              </button>

              {/* Success Message */}
              {submitted && (
                <div className="p-4 bg-green-100 border-2 border-green-600 rounded-lg text-green-800 font-semibold text-center animate-slide-down">
                  ✓ Message sent successfully! We'll be in touch soon.
                </div>
              )}
            </form>
          </div>

          {/* Contact Info & Map */}
          <div>
            <h2 className="text-3xl font-bold font-display text-dark-900 mb-8">
              Get In Touch
            </h2>

            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-12">
              {contactInfo.map((info, index) => (
                <a
                  key={index}
                  href={info.link}
                  className="group bg-gray-50 rounded-2xl p-6 hover:bg-primary-50 hover:border-primary-600 border-2 border-transparent transition-all duration-300 transform hover:scale-105"
                >
                  <div className="text-primary-600 mb-4 transform group-hover:scale-110 transition-transform duration-300">
                    {info.icon}
                  </div>
                  <h3 className="font-semibold text-dark-900 mb-2">
                    {info.title}
                  </h3>
                  <p className="text-dark-600 text-sm">
                    {info.content}
                  </p>
                </a>
              ))}
            </div>

            {/* Map Placeholder */}
                <div className="relative h-80 bg-gray-200 rounded-2xl overflow-hidden shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600/20 to-purple-600/20 flex items-center justify-center">
                    <div className="text-center px-6 space-y-4">
                    
                    {/* WhatsApp Icon */}
                    <svg
                        className="mx-auto h-16 w-16 text-green-500"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 32 32"
                        fill="currentColor"
                    >
                        <path d="M16.003 2.003c-7.732 0-14 6.268-14 14 0 2.733.789 5.285 2.152 7.44L2 30l6.73-2.13A13.94 13.94 0 0 0 16.003 30c7.732 0 14-6.268 14-14s-6.268-13.997-14-13.997zm0 25.497a11.42 11.42 0 0 1-5.815-1.59l-.416-.247-3.994 1.265 1.305-3.89-.27-.402a11.445 11.445 0 1 1 9.19 4.864zm6.63-8.52c-.362-.181-2.144-1.057-2.476-1.176-.332-.12-.573-.18-.814.181-.24.361-.934 1.176-1.146 1.418-.21.24-.422.27-.784.09-.362-.181-1.528-.563-2.91-1.797-1.075-.96-1.801-2.146-2.013-2.507-.21-.361-.023-.556.158-.736.162-.161.361-.422.542-.633.181-.21.241-.361.361-.602.12-.241.06-.452-.03-.633-.09-.181-.814-1.96-1.116-2.686-.294-.706-.593-.61-.814-.61-.21 0-.452-.03-.694-.03-.24 0-.633.09-.965.452-.332.361-1.266 1.236-1.266 3.015s1.296 3.496 1.477 3.737c.181.241 2.553 3.9 6.186 5.469.864.372 1.538.594 2.064.76.867.276 1.657.237 2.28.144.695-.103 2.144-.874 2.446-1.717.302-.844.302-1.567.21-1.717-.09-.151-.332-.241-.694-.422z" />
                    </svg>

                    {/* Text */}
                    <p className="text-gray-700 font-medium">
                        Fastest way to reach us is via WhatsApp
                    </p>

                    {/* Clickable WhatsApp link */}
                    <a
                        href="https://wa.me/2349063863042"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center rounded-xl bg-green-500 px-5 py-2.5 text-white font-semibold hover:bg-green-600 transition"
                    >
                        Message us on WhatsApp
                    </a>

                    </div>
                </div>
                </div>


            {/* Social Links */}
            <div className="mt-8">
              <h3 className="font-semibold text-dark-900 mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {[
                { name: 'Instagram', icon: '📸', link: 'https://www.instagram.com/bluehydradev/' },
            //   { name: 'LinkedIn', icon: 'in' },
            //   { name: 'GitHub', icon: '⌘' },
            //   { name: 'Dribbble', icon: '⛹' },
                ].map((social, index) => (
                  <a
                    key={index}
                    href={social.link || '#'}
                    target='_blank'
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-dark-900 text-white rounded-lg flex items-center justify-center hover:bg-primary-600 transition-all duration-300 transform hover:scale-110"
                  >
                    <span className="text-lg">{social.icon}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-br from-dark-900 via-dark-950 to-dark-900 text-white py-20">
        <div className="max-w-4xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold font-display mb-6">
            Prefer to Talk First?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Schedule a free 30-minute consultation to discuss your project.
          </p>
          <a
            href="#"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span>Book a Meeting</span>
          </a>
        </div>
      </div>
    </div>
  );
}