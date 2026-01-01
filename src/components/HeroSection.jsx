'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-primary-50/30 to-purple-50/20">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-200"></div>
        <div className="absolute -bottom-20 left-1/3 w-80 h-80 bg-primary-300 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float animation-delay-400"></div>
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptMCAxMmMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptLTI0IDBjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6bTAgMTJjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6bTI0IDBjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6IiBzdHJva2U9IiMwZWE1ZTkiIHN0cm9rZS13aWR0aD0iMC41IiBvcGFjaXR5PSIwLjEiLz48L2c+PC9zdmc+')] opacity-40"></div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center">
        <div className={`space-y-8 ${mounted ? 'animate-fade-in' : 'opacity-0'}`}>
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/80 backdrop-blur-sm border border-primary-200 rounded-full shadow-lg animate-slide-down">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-medium text-dark-700">
              🎉 Just raised $100M Series B funding
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold font-display leading-tight animate-slide-up animate-delay-100">
            <span className="block text-dark-900 mb-2">Build the Future</span>
            <span className="block">
              <span className="text-shimmer">One Line at a Time</span>
            </span>
          </h1>

          {/* Subtitle */}
          <p className="max-w-3xl mx-auto text-xl md:text-2xl text-dark-600 leading-relaxed animate-slide-up animate-delay-200">
            We craft exceptional web and mobile experiences for ambitious startups and enterprises. 
            Trusted by innovators worldwide to transform visions into reality.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4 animate-slide-up animate-delay-300">
            <Link
              href="/contact"
              className="group px-8 py-4 bg-primary-600 text-white font-semibold rounded-lg hover:bg-primary-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-2xl flex items-center space-x-2"
            >
              <span>Start Your Project</span>
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform"
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
            </Link>
            <Link
              href="/#portfolio"
              className="px-8 py-4 bg-white border-2 border-primary-600 text-primary-600 font-semibold rounded-lg hover:bg-primary-50 transform hover:scale-105 transition-all duration-300 shadow-lg"
            >
              View Our Work
            </Link>
          </div>

          {/* Trust Indicators */}
          <div className="pt-16 animate-slide-up animate-delay-400">
            <p className="text-sm text-dark-500 mb-6 uppercase tracking-wider font-medium">
              Trusted by Industry Leaders
            </p>
            <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
              {['TechCorp', 'InnovateLabs', 'FutureStack', 'CloudNine', 'DataFlow'].map((company, index) => (
                <div
                  key={company}
                  className="text-2xl font-bold text-dark-400 hover:text-primary-600 transition-colors duration-300 cursor-pointer"
                  style={{ animationDelay: `${500 + index * 100}ms` }}
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-primary-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
}