import { defineStore } from "pinia";

export const userCartStore = defineStore("cart", {
  state: () => ({
    cartItems: JSON.parse(localStorage.getItem("cart")) || [],
  }),
  actions: {
    addToCart(servicio) {
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      const existingServicioIndex = cartItems.findIndex(
        (item) => item.id === servicio.id
      );

      if (existingServicioIndex >= 0) {
        cartItems[existingServicioIndex].quantity++;
      } else {
        cartItems.push({ ...servicio, quantity: 1 });
      }
      localStorage.setItem("cart", JSON.stringify(cartItems));
      this.cartItems = cartItems;
    },
    removeToCart(servicioId) {
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      const existingServicioIndex = cartItems.findIndex(
        (item) => item.id === servicioId
      );

      if (existingServicioIndex >= 0) {
        cartItems.splice(existingServicioIndex, 1);
      }

      localStorage.setItem("cart", JSON.stringify(cartItems));
      this.cartItems = cartItems;
    },
    updateQuantity(servicioId, newQuantity) {
      const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
      const existingServicioIndex = cartItems.findIndex(
        (item) => item.id === servicioId
      );

      if (existingServicioIndex >= 0) {
        cartItems[existingServicioIndex].quantity = newQuantity;
      }
      localStorage.setItem("cart", JSON.stringify(cartItems));
      this.cartItems = cartItems;
    },
    clearCart() {
      localStorage.removeItem("cart");
      this.cartItems = [];
    },
  },
  getters: {
    totalItems() {
      return this.cartItems.reduce((total, item) => total + item.quantity, 0);
    },
  },
});
