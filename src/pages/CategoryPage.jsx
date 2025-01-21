import React, { useState, useMemo } from 'react';
import { products } from '../data/products';
import ProductCard from '../components/ProductCard';

function CategoryPage({ category, onAddToCart, onViewDetails, likedProducts, onToggleLike }) {
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');
  
  const filteredProducts = useMemo(() => {
    let filtered = products.filter(product => product.category === category);
    
    // Apply price filter
    if (priceRange !== 'all') {
      const [min, max] = priceRange.split('-').map(Number);
      filtered = filtered.filter(product => 
        product.price >= min && (max ? product.price <= max : true)
      );
    }
    
    // Apply sorting
    switch (sortBy) {
      case 'price-low':
        return [...filtered].sort((a, b) => a.price - b.price);
      case 'price-high':
        return [...filtered].sort((a, b) => b.price - a.price);
      case 'name':
        return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
      default:
        return filtered;
    }
  }, [category, sortBy, priceRange]);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8 capitalize">{category}</h1>
      
      {/* Filters and Sort */}
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-8">
        <div className="flex gap-4">
          <select
            value={priceRange}
            onChange={(e) => setPriceRange(e.target.value)}
            className="px-4 py-2 border rounded-md focus:outline-none focus:border-primary"
          >
            <option value="all">All Prices</option>
            <option value="0-25">Under $25</option>
            <option value="25-50">$25 - $50</option>
            <option value="50-100">$50 - $100</option>
            <option value="100">$100 & Above</option>
          </select>
        </div>
        
        <select
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
          className="px-4 py-2 border rounded-md focus:outline-none focus:border-primary"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="name">Name</option>
        </select>
      </div>
      
      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map(product => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={() => onAddToCart(product)}
            onViewDetails={onViewDetails}
            isLiked={likedProducts?.has(product.id)}
            onToggleLike={onToggleLike}
          />
        ))}
      </div>
    </div>
  );
}

export default CategoryPage;