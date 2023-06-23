import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    carrito: []
  },
  mutations: {
    agregarAlCarrito(state, item) {
      state.carrito.push(item);
    },
    limpiarCarrito(state) {
      state.carrito = [];
    }
  },
  actions: {
    agregarAlCarrito({ commit }, item) {
      commit('agregarAlCarrito', item);
    },
    limpiarCarrito({ commit }) {
      commit('limpiarCarrito');
    }
  },
  getters: {
    carrito(state) {
      return state.carrito;
    },
    totalCarrito(state) {
      let total = 0;
      for (let item of state.carrito) {
        total += parseFloat(item.precio);
      }
      return total.toFixed(2);
    }
  }
});
