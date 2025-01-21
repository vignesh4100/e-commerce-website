import React from 'react';
import { Link } from 'react-router-dom';
import ProductList from '../components/ProductList';
import { FiArrowRight, FiTruck, FiRefreshCw, FiShield } from 'react-icons/fi';

function Home({ onAddToCart, onViewDetails, likedProducts, onToggleLike }) {
  return (
    <div>
      {/* Hero Banner */}
      <section className="relative">
        <div className="relative h-[600px] overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=1600"
            alt="Hero"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent">
            <div className="container mx-auto px-4 h-full flex items-center">
              <div className="max-w-xl text-white">
                <h1 className="text-6xl font-bold mb-6">New Season New You</h1>
                <p className="text-xl mb-8">Discover luxury beauty essentials for your daily routine</p>
                <Link
                  to="/category/new-in"
                  className="inline-flex items-center bg-accent text-white px-8 py-4 rounded-full font-medium hover:bg-accent/90 transition-colors"
                >
                  Shop New Arrivals <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-neutral">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-center justify-center text-center p-6">
              <div>
                <FiTruck className="w-8 h-8 mx-auto mb-4 text-accent" />
                <h3 className="font-medium mb-2">Free Shipping</h3>
                <p className="text-sm text-gray-600">On orders over $50</p>
              </div>
            </div>
            <div className="flex items-center justify-center text-center p-6">
              <div>
                <FiRefreshCw className="w-8 h-8 mx-auto mb-4 text-accent" />
                <h3 className="font-medium mb-2">Easy Returns</h3>
                <p className="text-sm text-gray-600">30-day return policy</p>
              </div>
            </div>
            <div className="flex items-center justify-center text-center p-6">
              <div>
                <FiShield className="w-8 h-8 mx-auto mb-4 text-accent" />
                <h3 className="font-medium mb-2">Secure Shopping</h3>
                <p className="text-sm text-gray-600">100% secure checkout</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trending Categories */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Trending Categories</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {['Skincare', 'Makeup', 'Tools'].map((category) => (
              <Link
                key={category}
                to={`/category/${category.toLowerCase()}`}
                className="group relative overflow-hidden rounded-lg aspect-[3/4]"
              >
                <img
                  src={`https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500`}
                  alt={category}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent flex items-end p-8">
                  <div>
                    <h3 className="text-white text-2xl font-bold mb-2">{category}</h3>
                    <span className="text-white/80 group-hover:text-white transition-colors">
                      Shop Now <FiArrowRight className="inline ml-2" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="py-16 bg-neutral">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-12">
            <h2 className="text-3xl font-bold">New Arrivals</h2>
            <Link to="/category/new-in" className="text-accent hover:text-accent/80 transition-colors">
              View All <FiArrowRight className="inline ml-1" />
            </Link>
          </div>
          <ProductList 
            onAddToCart={onAddToCart} 
            onViewDetails={onViewDetails}
            likedProducts={likedProducts}
            onToggleLike={onToggleLike} 
            limit={4} 
          />
        </div>
      </section>

      {/* Featured Brands
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Featured Brands</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Brand 1', 'Brand 2', 'Brand 3', 'Brand 4'].map((brand) => (
              <div key={brand} className="flex items-center justify-center p-8 bg-white border border-gray-200 rounded-lg">
                <span className="text-xl font-semibold text-gray-400">{brand}</span>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Newsletter */}
      {/* <section className="py-20 bg-pink-100 text-black">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Newsletter</h2>
          <p className="text-gray-500/80 mb-8 max-w-xl mx-auto">
            Subscribe to get special offers, free giveaways, and exclusive deals.
          </p>
          <form className="max-w-md mx-auto flex gap-4 sm:flex-col">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full bg-white/10 border border-white/20 text-black placeholder-white/60 focus:outline-none focus:border-black"
            />
            <button
              type="submit"
              className="px-8 py-3 bg-accent text-white rounded-full hover:bg-accent/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section> */}
      <div className="my-16 mx-10 bg-rose-50 rounded-2xl p-8 text-center">
            <h2 className="text-2xl font-serif font-bold text-gray-900">Join Our Beauty Community</h2>
            <p className="mt-4 text-gray-600">Subscribe to receive exclusive offers and beauty tips</p>
            <div className="mt-6 max-w-md mx-auto flex gap-4">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 rounded-full px-6 py-3 border-gray-300 focus:border-rose-500 focus:ring-rose-500"
              />
              <button className="bg-rose-600 text-white px-8 py-3 rounded-full hover:bg-rose-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
    </div>
  );
}

export default Home;