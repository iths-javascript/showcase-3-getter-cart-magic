<template>
  <div id="app">
    <section class="products">
      <h1>Products</h1>
      <ul>
        <li v-for="product in products" :key="product" @click="add(product.id)">{{product.title}}</li>
      </ul>

    </section>
    <section class="state-cart">
      <h1>State Cart</h1>
      <ul>
        <li v-for="cartItem in stateCart" :key="cartItem.productID">{{cartItem}}</li>
      </ul>
    </section>
    <section class="getter-cart">
      <h1>Getter Cart</h1>
      <ul>
        <li v-for="cartItem in getterCart" :key="cartItem.productID">{{cartItem}}</li>
      </ul>
    </section>
  </div>
</template>

<script>

export default {
  name: 'App',

  created(){
    this.$store.commit('LOAD_PRODUCTS')
  },
  computed: {
    products(){ return this.$store.state.productList},

    getterCart(){
      return this.$store.getters.cart
    },
    stateCart(){
      return this.$store.state.cart
    },
  },
  methods: {
    add(productID){
      this.$store.commit('ADD_PRODUCT_TO_CART', productID)
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  min-height: 100vh;
}

ul{ list-style: none }
li{
  padding: 1rem;
}
li:nth-of-type(2n){
  background-color: lightgrey;
}
.products li{
  cursor: pointer;
}  
.products li:hover{ background-color: grey}
</style>
