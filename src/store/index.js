import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    productList: [],
    products: {},

    cart: [
      //{productID: 37, amount: 1},
    ]
  },
  mutations: {
    LOAD_PRODUCTS(state){      
      state.products = {
        34: {id: 34, title: "Tjofläsk", price: 10},
        37: {id: 37, title: "Tjoflöjt", price: 11},
        137: {id: 137, title: "Tjoflöj1312t", price: 16},
        3437: {id: 3437, title: "Tjoflöjt3213213", price: 12},
      }
      state.productList = Object.values(state.products)
    },
    ADD_PRODUCT_TO_CART(state, productID){
      const cartItem = state.cart.find(cartItem => cartItem.productID == productID)
      if(cartItem){ cartItem.amount++ }
      else{ state.cart.push({productID, amount: 1})}
    }
  },

  getters: {
    cart: state => state.cart.map( cartItem => ({
      ...state.products[cartItem.productID],
      amount: cartItem.amount
    })),
  }

})
