'use client';
import { techStack } from '@/lib/data';
import { useState } from 'react';

export default function TechStack() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const categories = ['All', 'Frontend', 'Mobile', 'Backend', 'Database', 'Cloud', 'DevOps'];

  const filteredStack = selectedCategory === 'All' 
    ? techStack 
    : techStack.filter(tech => tech.category === selectedCategory);

  return (
    <section className="py-24 bg-gradient-to-br from-dark-950 via-dark-900 to-dark-950 text-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 bg-primary-600/20 text-primary-400 rounded-full text-sm font-semibold mb-4 border border-primary-600/30">
            Technology Stack
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display mb-6">
            Powered by <span className="text-shimmer">Cutting-Edge Tech</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-gray-400">
            We leverage the most powerful and reliable technologies to build exceptional digital products.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                selectedCategory === category
                  ? 'bg-primary-600 text-white shadow-lg shadow-primary-600/50 scale-105'
                  : 'bg-dark-800 text-gray-400 hover:bg-dark-700 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Tech Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredStack.map((tech, index) => (
            <div
              key={index}
              className="group relative bg-dark-800/50 backdrop-blur-sm border border-dark-700 rounded-2xl p-8 hover:border-primary-600 transition-all duration-300 cursor-pointer transform hover:scale-105"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              {/* Glow Effect on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary-600/0 to-purple-600/0 group-hover:from-primary-600/10 group-hover:to-purple-600/10 rounded-2xl transition-all duration-500"></div>

              <div className="relative z-10 text-center">
                {/* Logo */}
                <div className="text-5xl mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                  {tech.logo}
                </div>

                {/* Name */}
                <h3 className="text-lg font-semibold text-white mb-2">
                  {tech.name}
                </h3>

                {/* Category Badge */}
                <span className="inline-block px-3 py-1 bg-primary-600/20 text-primary-400 text-xs rounded-full border border-primary-600/30">
                  {tech.category}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '50+', label: 'Technologies Mastered' },
            { value: '1000+', label: 'Projects Built' },
            { value: '99.9%', label: 'Uptime Guarantee' },
            { value: '24/7', label: 'Support Available' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary-400 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-10 w-64 h-64 bg-primary-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-float"></div>
        <div className="absolute bottom-1/4 right-10 w-80 h-80 bg-purple-600 rounded-full mix-blend-soft-light filter blur-3xl opacity-10 animate-float animation-delay-300"></div>
      </div>
    </section>
  );
}