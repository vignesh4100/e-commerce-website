import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiShoppingCart, FiHeart, FiUser, FiSearch } from 'react-icons/fi';
import { BiMenu } from 'react-icons/bi';

function Navbar({ cartCount, onCartClick }) {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const navigate = useNavigate();

  const categories = [
    'NEW IN',
    'SKINCARE',
    'MAKEUP',
    'TOOLS',
  ];

  return (
    <header className="fixed z-50 w-full bg-white border-b border-gray-200">
      {/* Main Navigation */}
      <div className="container  mx-auto px-4">
        <div className="flex items-center justify-between h-20">
        <BiMenu className="h-6 w-6 text-gray-500 sm:hidden" />
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-primary">LUXE</Link>

          {/* Search Bar */}
          {/* <div className="hidden md:flex flex-1 max-w-xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products..."
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:outline-none focus:border-accent"
              />
              <FiSearch className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
          </div> */}

        {/* Category Navigation */}
        <nav className="hidden md:flex items-center justify-center space-x-8 py-2">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/category/${category.toLowerCase().replace(' ', '-')}`}
              className="text-sm font-medium text-gray-700 hover:text-accent transition-colors"
            >
              {category}
            </Link>
          ))}
        </nav>
        
          {/* Navigation Icons */}
          <div className="flex items-center space-x-6">
            <button className="hidden md:flex items-center text-gray-600 hover:text-accent">
              <FiUser className="h-5 w-5" />
            </button>
            <button className="hidden md:flex items-center text-gray-600 hover:text-accent">
              <FiHeart className="h-5 w-5" />
            </button>
            <button
              onClick={onCartClick}
              className="relative text-gray-600 hover:text-accent"
            >
              <FiShoppingCart className="h-5 w-5" />
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

      </div>
    </header>
  );
}

export default Navbar;