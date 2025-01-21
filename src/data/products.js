export const products = [
  // Skincare Products
  {
    id: 1,
    name: "Radiant Glow Serum",
    description: "Brightening vitamin C serum for radiant skin",
    price: 49.99,
    category: "skincare",
    image: "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=500",
    rating: 4.8,
    reviews: [
      { id: 1, user: "Sarah M.", rating: 5, comment: "Amazing results! My skin is glowing.", date: "2024-03-15" },
      { id: 2, user: "Emily R.", rating: 4.5, comment: "Great product, saw improvement in 2 weeks", date: "2024-03-10" }
    ],
    details: {
      size: "30ml",
      ingredients: "Vitamin C, Hyaluronic Acid, Niacinamide",
      howToUse: "Apply 2-3 drops morning and evening after cleansing",
      benefits: ["Brightens skin", "Reduces dark spots", "Boosts collagen"]
    }
  },
  {
    id: 2,
    name: "Hydrating Face Cream",
    description: "24-hour moisture for all skin types",
    price: 34.99,
    category: "skincare",
    image: "https://images.unsplash.com/photo-1611930022073-b7a4ba5fcccd?w=500",
    rating: 4.6,
    reviews: [
      { id: 3, user: "Lisa K.", rating: 5, comment: "Best moisturizer I've ever used!", date: "2024-03-12" }
    ]
  },
  // Add more skincare products...

  // Makeup Products
  {
    id: 7,
    name: "Matte Lipstick",
    description: "Long-lasting matte finish lipstick",
    price: 22.99,
    category: "makeup",
    image: "https://images.unsplash.com/photo-1586495777744-4413f21062fa?w=500",
    rating: 4.7,
    reviews: [
      { id: 4, user: "Jessica T.", rating: 5, comment: "Beautiful color and stays all day", date: "2024-03-14" }
    ]
  },
  // Add more makeup products...

  // Tools
  {
    id: 10,
    name: "Makeup Brush Set",
    description: "Professional quality brush set",
    price: 45.99,
    category: "tools",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500",
    rating: 4.9,
    reviews: [
      { id: 5, user: "Rachel B.", rating: 5, comment: "Professional quality brushes!", date: "2024-03-13" }
    ]
  },
  // Add 20+ more products for each category...
];