import React from 'react';
import { Link } from 'react-router-dom';
import { FiInstagram, FiFacebook, FiTwitter, FiYoutube } from 'react-icons/fi';

function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* About */}
          <div>
            <h3 className="text-lg font-bold mb-4">About LUXE</h3>
            <p className="text-white/80 text-sm">
              Discover premium beauty products for your daily routine. We bring you the best in skincare, makeup, and more.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-white/80 hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/80 hover:text-white transition-colors">Contact</Link>
              </li>
              <li>
                <Link to="/faq" className="text-white/80 hover:text-white transition-colors">FAQ</Link>
              </li>
              <li>
                <Link to="/shipping" className="text-white/80 hover:text-white transition-colors">Shipping Info</Link>
              </li>
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-lg font-bold mb-4">Categories</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/skincare" className="text-white/80 hover:text-white transition-colors">Skincare</Link>
              </li>
              <li>
                <Link to="/makeup" className="text-white/80 hover:text-white transition-colors">Makeup</Link>
              </li>
              <li>
                <Link to="/tools" className="text-white/80 hover:text-white transition-colors">Tools</Link>
              </li>
              <li>
                <Link to="/supplements" className="text-white/80 hover:text-white transition-colors">Supplements</Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <FiInstagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <FiFacebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <FiTwitter className="w-6 h-6" />
              </a>
              <a href="#" className="text-white/80 hover:text-white transition-colors">
                <FiYoutube className="w-6 h-6" />
              </a>
            </div>
            <div className="mt-4">
              <h4 className="font-medium mb-2">Download Our App</h4>
              <div className="flex space-x-2">
                <img src="https://via.placeholder.com/120x40" alt="App Store" className="h-10" />
                <img src="https://via.placeholder.com/120x40" alt="Play Store" className="h-10" />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">
              © 2024 LUXE Beauty. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy" className="text-white/60 hover:text-white text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-white/60 hover:text-white text-sm transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;