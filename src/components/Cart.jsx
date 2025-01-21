import React from 'react';
import { BiCreditCard } from 'react-icons/bi';
import { FiX, FiTrash2, FiShoppingCart } from 'react-icons/fi';

function Cart({ isOpen, onClose, items, onRemoveItem }) {
  const subtotal = items.reduce((total, item) => total + item.price, 0);
  const shipping = subtotal > 100 ? 0 : 10;
  const total = subtotal + shipping;

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 z-50" onClick={onClose}>
      <div className="fixed right-0 top-0 h-full w-screen max-w-lg bg-white shadow-lg">
        <div className="p-6 flex flex-col h-full">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-lg font-medium text-gray-900">Shopping Cart</h2>
            <button
              onClick={onClose}
              className="ml-3 h-7 w-7 text-gray-400 hover:text-gray-500"
            >
              <FiX className="w-6 h-6" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto ">
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

          <div className="border-t border-gray-200 py-6 px-4 sm:px-6">
              <div className="space-y-2">
                <div className="flex justify-between text-base text-gray-500">
                  <p>Subtotal</p>
                  <p>${subtotal.toFixed(2)}</p>
                </div>
                <div className="flex justify-between text-base text-gray-500">
                  <p>Shipping</p>
                  <p>{shipping === 0 ? 'Free' : `$${shipping.toFixed(2)}`}</p>
                </div>
                {shipping > 0 && (
                  <p className="text-sm text-gray-500">
                    Free shipping on orders over $100
                  </p>
                )}
                <div className="flex justify-between text-base font-medium text-gray-900">
                  <p>Total</p>
                  <p>${total.toFixed(2)}</p>
                </div>
              </div>

            <button
                  className="w-full mt-10 flex items-center justify-center px-6 py-3 border border-transparent rounded-full shadow-sm text-base font-medium text-white bg-rose-600 hover:bg-rose-700"
                  onClick={() => alert('Checkout functionality coming soon!')}
                >
                  <BiCreditCard className="mr-2 h-5 w-5" />
                  Checkout
                </button>
                <div className="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or{' '}
                  <button
                    type="button"
                    className="font-medium text-rose-600 hover:text-rose-500"
                    onClick={onClose}
                  >
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </button>
                </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;