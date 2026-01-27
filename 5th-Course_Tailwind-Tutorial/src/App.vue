<script setup>
import { ref } from 'vue'
import ProductDisplay from './components/ProductDisplay.vue'

const cart = ref([])
const premium = ref(true)
  
function updateCart(id) {
  cart.value.push(id)
}
</script>

<template>
  <div class="h-[60px] mb-[25px] bg-gradient-to-r from-ocean to-leaf"></div>

  <div class="my-[25px] mx-[100px] p-[30px] mist-border-1 bg-cloud float-right">Cart({{ cart.length }})</div>
  <product-display :premium="premium" @add-to-cart="updateCart"></product-display>
</template>

<style scoped>

</style>
