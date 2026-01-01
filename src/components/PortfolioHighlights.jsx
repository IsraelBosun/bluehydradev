'use client';
import { portfolioProjects } from '@/lib/data';
import { useState } from 'react';
import Image from 'next/image';

export default function PortfolioHighlights() {
  const [activeTab, setActiveTab] = useState('all');

  const tabs = [
    { id: 'all', label: 'All Projects', count: portfolioProjects.length },
    { id: 'web', label: 'Web', count: portfolioProjects.filter(p => p.category === 'web').length },
    { id: 'mobile', label: 'Mobile', count: portfolioProjects.filter(p => p.category === 'mobile').length },
  ];

  const filteredProjects = activeTab === 'all' 
    ? portfolioProjects 
    : portfolioProjects.filter(project => project.category === activeTab);

  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold mb-4">
            Portfolio
          </span>
          <h2 className="text-4xl md:text-5xl font-bold font-display text-dark-900 mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="max-w-2xl mx-auto text-xl text-dark-600">
            Discover how we've helped companies transform their digital presence and achieve remarkable results.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-gray-100 rounded-xl p-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-white text-primary-600 shadow-md'
                    : 'text-dark-600 hover:text-dark-900'
                }`}
              >
                {tab.label}
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  activeTab === tab.id
                    ? 'bg-primary-100 text-primary-700'
                    : 'bg-gray-200 text-dark-600'
                }`}>
                  {tab.count}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group relative bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:scale-105 border border-gray-100"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden bg-gray-200">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                {/* Category Badge */}
                <div className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-primary-600 uppercase">
                  {project.category}
                </div>
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-dark-900 via-dark-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                  <a
                    href={project.link}
                    className="px-6 py-3 bg-white text-dark-900 font-semibold rounded-lg transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500"
                  >
                    View Details
                  </a>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h3 className="text-2xl font-bold font-display text-dark-900 mb-3">
                  {project.title}
                </h3>
                <p className="text-dark-600 mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-100">
                  {Object.entries(project.stats).map(([key, value], statIndex) => (
                    <div key={statIndex} className="text-center">
                      <div className="text-lg font-bold text-primary-600">
                        {value}
                      </div>
                      <div className="text-xs text-dark-500 capitalize">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <p className="text-dark-600 mb-6 text-lg">
            Want to see more of our work?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-dark-900 text-white font-semibold rounded-lg hover:bg-dark-800 transform hover:scale-105 transition-all duration-300 shadow-lg"
          >
            <span>View Full Portfolio</span>
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
          </a>
        </div>
      </div>
    </section>
  );
}