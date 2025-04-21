import { Product } from '../types';

export const products: Product[] = [
  {
    id: 1,
    name: "Monstera Deliciosa",
    price: 39.99,
    image: "https://images.pexels.com/photos/3097770/pexels-photo-3097770.jpeg",
    category: "Large Plants",
    description: "The Swiss Cheese Plant, known for its unique leaf holes and easy care."
  },
  {
    id: 2,
    name: "Fiddle Leaf Fig",
    price: 49.99,
    image: "https://images.pexels.com/photos/2123482/pexels-photo-2123482.jpeg",
    category: "Large Plants",
    description: "Trendy houseplant with violin-shaped leaves that adds elegance to any room."
  },
  {
    id: 3,
    name: "Snake Plant",
    price: 24.99,
    image: "https://images.pexels.com/photos/2132227/pexels-photo-2132227.jpeg",
    category: "Low Maintenance",
    description: "Nearly indestructible plant that purifies air and thrives on neglect."
  },
  {
    id: 4,
    name: "Pothos",
    price: 19.99,
    image: "https://images.pexels.com/photos/1084199/pexels-photo-1084199.jpeg",
    category: "Low Maintenance",
    description: "Fast-growing vine with heart-shaped leaves perfect for beginners."
  },
  {
    id: 5,
    name: "Pink Calathea",
    price: 34.99,
    image: "https://images.pexels.com/photos/4751977/pexels-photo-4751977.jpeg",
    category: "Decorative",
    description: "Prayer plant with stunning pink-striped leaves that move throughout the day."
  },
  {
    id: 6,
    name: "String of Pearls",
    price: 22.99,
    image: "https://images.pexels.com/photos/1906439/pexels-photo-1906439.jpeg",
    category: "Decorative",
    description: "Succulent with cascading bead-like leaves, perfect for hanging baskets."
  }
];

export const categories = Array.from(new Set(products.map(product => product.category)));