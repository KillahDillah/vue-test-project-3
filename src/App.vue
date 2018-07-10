<!-- src/App.vue -->
<template>
  <!-- when using a component in a template Vue.js expects the DOM element to be
  lowercased and dasherized. e.g. ProductList -> product-list -->
  <!-- <product-list></product-list> -->
  <!-- <manage-products></manage-products> -->

  <div>
    <header class="app-header">
      <app-nav></app-nav>
    </header>
    <main class="container">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
// import ProductList from './components/ProductList'
// import ManageProducts from './components/ManageProducts'
// import SaveProductForm from './components/SaveProductForm'
import AppNav from './components/AppNav'

export default {
    components: {
    AppNav
  }
  // components: {
  //   // With ES6 we can use the Object Literal Shorthand Syntax to save us some
  //   // keystrokes
  //   ProductList,
  //   ManageProducts,
  //   SaveProductForm
  // }
}
</script>

<style lang="scss">
@import './node_modules/bootstrap/scss/bootstrap.scss';
</style>
