import React from 'react';
import { products } from '../data/products';
import ProductCard from './ProductCard';

function ProductList({ onAddToCart, onViewDetails, likedProducts, onToggleLike, limit }) {
  const displayProducts = limit ? products.slice(0, limit) : products;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {displayProducts.map(product => (
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
  );
}

export default ProductList;