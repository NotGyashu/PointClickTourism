import { create } from "zustand";

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
            item.infant === tour.infant
        );

        if (existingTour) {
          // Update quantity of the existing tour
          updatedCart = updatedCart.map((item) =>
            item.packageName === tour.packageName &&
            item.tourDate === tour.tourDate &&
            item.transferOption === tour.transferOption &&
            item.adult === tour.adult &&
            item.child === tour.child &&
            item.infant === tour.infant
              ? { ...item, quantity: item.quantity + 1 }
              : item
          );
        } else {
          // Add new tour to cart
          updatedCart.push({ ...tour, quantity: 1 });
        }
      });

      saveCartToLocalStorage(updatedCart); // Save updated cart to localStorage
      return { cart: updatedCart };
    }),

  removeFromCart: (tourId) =>
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== tourId);
      saveCartToLocalStorage(updatedCart); // Save updated cart to localStorage
      return { cart: updatedCart };
    }),

  updateQuantity: (tourId, quantity) =>
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === tourId ? { ...item, quantity } : item
      );
      saveCartToLocalStorage(updatedCart); // Save updated cart to localStorage
      return { cart: updatedCart };
    }),

  updateCart: (updatedItem) =>
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === updatedItem.id ? updatedItem : item
      );
      saveCartToLocalStorage(updatedCart); // Save updated cart to localStorage
      return { cart: updatedCart };
    }),

  clearCart: () => {
    saveCartToLocalStorage([]); // Clear cart in localStorage
    return set({ cart: [] });
  },

  total: () => {
    const { cart } = get();
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  },
}));

export default useCartStore;
