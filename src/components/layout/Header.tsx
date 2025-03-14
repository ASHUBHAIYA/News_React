
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import AnimatedLink from '../shared/AnimatedLink';

const navigation = [
  { name: 'News', href: '/category/news' },
  { name: 'Opinion', href: '/category/opinion' },
  { name: 'Business', href: '/category/business' },
  { name: 'Sport', href: '/category/sport' },
  { name: 'Entertainment', href: '/category/entertainment' },
  { name: 'Lifestyle', href: '/category/lifestyle' },
  { name: 'Technology', href: '/category/technology' },
  { name: 'Science', href: '/category/science' },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-white'
    }`}>
      {/* Top bar */}
      <div className="container mx-auto px-4 py-2 flex items-center justify-between border-b">
        <div className="flex items-center space-x-4">
          <Link to="/" className="text-2xl font-headline font-bold text-news-primary">
            The Daily
          </Link>
        </div>
        <div className="hidden md:flex items-center space-x-6">
          <button className="text-gray-600 hover:text-gray-900">
            <Search className="w-5 h-5" />
          </button>
          <Link
            to="/subscribe"
            className="bg-news-primary text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-news-accent transition-colors duration-300"
          >
            Subscribe
          </Link>
        </div>
        <button
          className="md:hidden text-gray-600"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Navigation */}
      <nav className="hidden md:block border-b">
        <div className="container mx-auto px-4">
          <ul className="flex items-center justify-between space-x-8 py-4">
            {navigation.map((item) => (
              <li key={item.name}>
                <AnimatedLink
                  href={item.href}
                  className="text-gray-600 hover:text-news-primary text-sm font-medium"
                >
                  {item.name}
                </AnimatedLink>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed inset-0 bg-white z-40 transition-transform duration-300 transform ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="container mx-auto px-4 py-6">
          <ul className="space-y-6">
            {navigation.map((item) => (
              <li key={item.name}>
                <AnimatedLink
                  href={item.href}
                  className="text-xl font-medium text-gray-900"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </AnimatedLink>
              </li>
            ))}
          </ul>
          <div className="mt-8 space-y-4">
            <button className="flex items-center space-x-2 text-gray-600">
              <Search className="w-5 h-5" />
              <span>Search</span>
            </button>
            <Link
              to="/subscribe"
              className="block w-full bg-news-primary text-white text-center px-4 py-2 rounded-full font-medium hover:bg-news-accent transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Subscribe
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
