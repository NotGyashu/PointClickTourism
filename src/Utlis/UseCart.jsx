import { create } from "zustand";
import { v4 as uuidv4 } from "uuid"; // Import UUID for unique ID generation

// Function to save cart to localStorage
const saveCartToLocalStorage = (cart) => {
  localStorage.setItem("cart", JSON.stringify(cart));
};

// Function to load cart from localStorage
const loadCartFromLocalStorage = () => {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

const useCartStore = create((set, get) => ({
  cart: loadCartFromLocalStorage(), // Initialize cart from localStorage

  // Add multiple tours to the cart
  addToCart: (tours) =>
    set((state) => {
      let updatedCart = [...state.cart];

      // Process each tour
      tours.forEach((tour) => {
        const existingTour = updatedCart.find(
          (item) =>
            item.packageName === tour.packageName &&
            item.tourDate === tour.tourDate &&
            item.transferOption === tour.transferOption &&
            item.adult === tour.adult &&
            item.child === tour.child &&
            item.infant === tour.infant&&
            item.activityId === tour.activityId
        );

        
          // Add new tour to cart with a unique ID
          updatedCart.push({ ...tour, cartId: uuidv4(), quantity: 1 });
        
      });

      saveCartToLocalStorage(updatedCart); // Save updated cart to localStorage
      return { cart: updatedCart };
    }),

  removeFromCart: (cartId) =>
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.cartId !== cartId);
      saveCartToLocalStorage(updatedCart); // Save updated cart to localStorage
      return { cart: updatedCart };
    }),

  

  updateCart: (updatedItem) =>
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.cartId === updatedItem.cartId ? updatedItem : item
      );
      saveCartToLocalStorage(updatedCart); // Save updated cart to localStorage
      return { cart: updatedCart };
    }),

  clearCart: () => {
    saveCartToLocalStorage([]); // Clear cart in localStorage
    return set({ cart: [] });
  },

 
}));

export default useCartStore;
