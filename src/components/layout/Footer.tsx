
import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';
import AnimatedLink from '../shared/AnimatedLink';

const Footer = () => {
  return (
    <footer className="bg-gray-50 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div>
            <Link to="/" className="text-2xl font-headline font-bold text-news-primary mb-4 block">
              The Daily
            </Link>
            <p className="text-gray-600 mb-4">
              Delivering trusted news and award-winning journalism since 1924.
            </p>
            <div className="flex space-x-4">
              <AnimatedLink href="https://facebook.com" external className="text-gray-400 hover:text-news-primary">
                <Facebook className="w-5 h-5" />
              </AnimatedLink>
              <AnimatedLink href="https://twitter.com" external className="text-gray-400 hover:text-news-primary">
                <Twitter className="w-5 h-5" />
              </AnimatedLink>
              <AnimatedLink href="https://instagram.com" external className="text-gray-400 hover:text-news-primary">
                <Instagram className="w-5 h-5" />
              </AnimatedLink>
              <AnimatedLink href="https://youtube.com" external className="text-gray-400 hover:text-news-primary">
                <Youtube className="w-5 h-5" />
              </AnimatedLink>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <AnimatedLink href="/category/news" className="text-gray-600 hover:text-news-primary">
                  News
                </AnimatedLink>
              </li>
              <li>
                <AnimatedLink href="/category/opinion" className="text-gray-600 hover:text-news-primary">
                  Opinion
                </AnimatedLink>
              </li>
              <li>
                <AnimatedLink href="/category/business" className="text-gray-600 hover:text-news-primary">
                  Business
                </AnimatedLink>
              </li>
              <li>
                <AnimatedLink href="/category/sport" className="text-gray-600 hover:text-news-primary">
                  Sport
                </AnimatedLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-2">
              <li>
                <AnimatedLink href="/about" className="text-gray-600 hover:text-news-primary">
                  About Us
                </AnimatedLink>
              </li>
              <li>
                <AnimatedLink href="/careers" className="text-gray-600 hover:text-news-primary">
                  Careers
                </AnimatedLink>
              </li>
              <li>
                <AnimatedLink href="/contact" className="text-gray-600 hover:text-news-primary">
                  Contact
                </AnimatedLink>
              </li>
              <li>
                <AnimatedLink href="/advertise" className="text-gray-600 hover:text-news-primary">
                  Advertise
                </AnimatedLink>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <AnimatedLink href="/privacy" className="text-gray-600 hover:text-news-primary">
                  Privacy Policy
                </AnimatedLink>
              </li>
              <li>
                <AnimatedLink href="/terms" className="text-gray-600 hover:text-news-primary">
                  Terms of Service
                </AnimatedLink>
              </li>
              <li>
                <AnimatedLink href="/cookie-policy" className="text-gray-600 hover:text-news-primary">
                  Cookie Policy
                </AnimatedLink>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-200 pt-8">
          <div className="text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} The Daily. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
