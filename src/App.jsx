import { useState } from 'react';
import { BrowserRouter, Routes, Route, useParams } from 'react-router-dom';
import Navbar from './components/Navbar';
import Cart from './components/Cart';
import Home from './pages/Home';
import CategoryPage from './pages/CategoryPage';
import ProductDetails from './components/ProductDetails';
import Footer from './components/Footer';
import { products } from './data/products';

function App() {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cart, setCart] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [likedProducts, setLikedProducts] = useState(new Set());

  const addToCart = (product) => {
    setCart([...cart, { ...product, cartId: Date.now() }]);
  };

  const removeFromCart = (cartId) => {
    setCart(cart.filter(item => item.cartId !== cartId));
  };

  const handleViewDetails = (product) => {
    const similarProducts = products
      .filter(p => p.category === product.category && p.id !== product.id)
      .slice(0, 4);
    setSelectedProduct({ ...product, similarProducts });
  };

  const toggleLike = (productId) => {
    setLikedProducts(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(productId)) {
        newLiked.delete(productId);
      } else {
        newLiked.add(productId);
      }
      return newLiked;
    });
  };

  const CategoryPageWrapper = () => {
    const { category } = useParams();
    return (
      <CategoryPage
        category={category}
        onAddToCart={addToCart}
        onViewDetails={handleViewDetails}
        likedProducts={likedProducts}
        onToggleLike={toggleLike}
      />
    );
  };

  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col">
        <Navbar cartCount={cart.length} onCartClick={() => setIsCartOpen(true)} />
        <main className="flex-grow">
          <Routes>
            <Route 
              path="/" 
              element={
                <Home 
                  onAddToCart={addToCart} 
                  onViewDetails={handleViewDetails}
                  likedProducts={likedProducts}
                  onToggleLike={toggleLike}
                />
              } 
            />
            <Route 
              path="/category/:category" 
              element={<CategoryPageWrapper />} 
            />
          </Routes>
        </main>
        <Footer />
        
        <Cart 
          isOpen={isCartOpen} 
          onClose={() => setIsCartOpen(false)}
          items={cart}
          onRemoveItem={removeFromCart}
        />
        
        {selectedProduct && (
          <ProductDetails
            product={selectedProduct}
            onAddToCart={addToCart}
            onClose={() => setSelectedProduct(null)}
            onViewDetails={handleViewDetails}
            similarProducts={selectedProduct.similarProducts}
            isLiked={likedProducts.has(selectedProduct.id)}
            onToggleLike={toggleLike}
          />
        )}
      </div>
    </BrowserRouter>
  );
}

export default App;