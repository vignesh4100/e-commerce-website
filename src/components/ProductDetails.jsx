import React from 'react';
import { FiStar, FiShoppingCart, FiHeart, FiX } from 'react-icons/fi';

function ProductDetails({ 
  product, 
  onAddToCart, 
  onClose, 
  onViewDetails,
  similarProducts, 
  isLiked,
  onToggleLike 
}) {
  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <FiStar
        key={index}
        className={`w-5 h-5 ${
          index < Math.floor(rating) ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50 overflow-y-auto">
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-white rounded-lg max-w-6xl w-full relative">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors"
          >
            <FiX className="w-6 h-6" />
          </button>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-8">
            {/* Product Image */}
            <div className="aspect-square rounded-lg overflow-hidden">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <h1 className="text-3xl font-bold text-gray-900">{product.name}</h1>
              <p className="text-gray-600">{product.description}</p>
              
              {/* Rating */}
              <div className="flex items-center space-x-2">
                <div className="flex">{renderStars(product.rating)}</div>
                <span className="text-gray-600">({product.rating} / 5)</span>
              </div>

              {/* Price and Actions */}
              <div className="space-y-4">
                <p className="text-3xl font-bold text-accent">${product.price}</p>
                <div className="flex space-x-4">
                  <button
                    onClick={() => onAddToCart(product)}
                    className="flex-1 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors flex items-center justify-center space-x-2"
                  >
                    <FiShoppingCart />
                    <span>Add to Cart</span>
                  </button>
                  <button 
                    onClick={() => onToggleLike(product.id)}
                    className={`p-3 border rounded-full transition-colors ${
                      isLiked 
                        ? 'bg-red-500 border-red-500 text-white hover:bg-red-600' 
                        : 'border-gray-200 hover:bg-gray-50'
                    }`}
                  >
                    <FiHeart className={`w-6 h-6 ${isLiked ? 'fill-current' : ''}`} />
                  </button>
                </div>
              </div>

              {/* Product Details */}
              {product.details && (
                <div className="space-y-4">
                  <h2 className="text-xl font-bold">Product Details</h2>
                  <div className="space-y-2">
                    <p><strong>Size:</strong> {product.details.size}</p>
                    <p><strong>Ingredients:</strong> {product.details.ingredients}</p>
                    <p><strong>How to Use:</strong> {product.details.howToUse}</p>
                    <div>
                      <strong>Benefits:</strong>
                      <ul className="list-disc list-inside ml-4">
                        {product.details.benefits?.map((benefit, index) => (
                          <li key={index}>{benefit}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Reviews Section */}
          <div className="border-t border-gray-200 p-8">
            <h2 className="text-2xl font-bold mb-6">Customer Reviews</h2>
            <div className="space-y-6">
              {product.reviews?.map((review) => (
                <div key={review.id} className="border-b border-gray-200 pb-6">
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center space-x-2">
                      <span className="font-medium">{review.user}</span>
                      <div className="flex">{renderStars(review.rating)}</div>
                    </div>
                    <span className="text-gray-500">{review.date}</span>
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Similar Products */}
          {similarProducts && similarProducts.length > 0 && (
            <div className="border-t border-gray-200 p-8">
              <h2 className="text-2xl font-bold mb-6">Similar Products</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {similarProducts.map((similarProduct) => (
                  <div 
                    key={similarProduct.id} 
                    className="space-y-2 cursor-pointer"
                    onClick={() => {
                      onClose();
                      onViewDetails(similarProduct);
                    }}
                  >
                    <img
                      src={similarProduct.image}
                      alt={similarProduct.name}
                      className="w-full aspect-square object-cover rounded-lg"
                    />
                    <h3 className="font-medium">{similarProduct.name}</h3>
                    <p className="text-accent font-bold">${similarProduct.price}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;