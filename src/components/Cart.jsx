import React from 'react';
import { FiX, FiTrash2 } from 'react-icons/fi';

function Cart({ isOpen, onClose, items, onRemoveItem }) {
  const total = items.reduce((sum, item) => sum + item.price, 0);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="fixed right-0 top-0 h-full w-full max-w-md bg-white shadow-lg">
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Shopping Cart</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <FiX className="w-6 h-6" />
            </button>
          </div>
          
          <div className="flex-1 overflow-y-auto">
            {items.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-full text-gray-500">
                <FiShoppingCart className="w-16 h-16 mb-4" />
                <p className="text-lg">Your cart is empty</p>
              </div>
            ) : (
              <div className="space-y-6">
                {items.map(item => (
                  <div
                    key={item.cartId}
                    className="flex gap-4 border-b border-gray-200 pb-6"
                  >
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-24 h-24 object-cover rounded-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-medium text-gray-900">{item.name}</h3>
                      <p className="text-sm text-gray-500 mb-2">{item.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-accent">${item.price}</span>
                        <button
                          onClick={() => onRemoveItem(item.cartId)}
                          className="text-red-500 hover:text-red-600 transition-colors"
                        >
                          <FiTrash2 className="w-5 h-5" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
          
          <div className="mt-6 space-y-4">
            <div className="flex items-center justify-between py-4 border-t border-gray-200">
              <span className="text-lg font-medium text-gray-900">Total</span>
              <span className="text-2xl font-bold text-accent">
                ${total.toFixed(2)}
              </span>
            </div>
            <button
              className="w-full py-4 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
              onClick={() => alert('Checkout functionality coming soon!')}
            >
              Proceed to Checkout
            </button>
            <button
              onClick={onClose}
              className="w-full py-4 bg-gray-100 text-gray-900 rounded-full hover:bg-gray-200 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;