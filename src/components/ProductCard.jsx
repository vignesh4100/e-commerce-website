import React from 'react';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';

function ProductCard({ product, onAddToCart, onViewDetails, isLiked, onToggleLike }) {
  return (
    <div className="group relative bg-white shadow-md rounded-lg overflow-hidden">
      {/* Image */}
      <div 
        className="relative aspect-square overflow-hidden cursor-pointer"
        onClick={() => onViewDetails(product)}
      >
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        {/* Quick Actions */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2 opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="p-3 bg-white rounded-full shadow-lg hover:bg-accent hover:text-white transition-colors"
          >
            <FiShoppingCart className="w-5 h-5" />
          </button>
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onToggleLike(product.id);
            }}
            className={`p-3 rounded-full shadow-lg transition-colors ${
              isLiked 
                ? 'bg-red-500 text-white hover:bg-red-600' 
                : 'bg-white hover:bg-accent hover:text-white'
            }`}
          >
            <FiHeart className={`w-5 h-5 ${isLiked ? 'fill-current' : ''}`} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 
          className="text-lg font-medium text-gray-900 mb-1 cursor-pointer hover:text-accent"
          onClick={() => onViewDetails(product)}
        >
          {product.name}
        </h3>
        <p className="text-sm text-gray-500 mb-2">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-lg font-bold text-accent">${product.price}</span>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(product);
            }}
            className="text-sm text-primary hover:text-accent transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;