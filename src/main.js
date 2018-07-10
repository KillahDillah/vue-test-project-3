import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './App'
import ProductCatalog from './components/ProductCatalog'
import ManageProducts from './components/ManageProducts'

Vue.use(VueRouter)

const routes = [
  { path: '/home', alias: '/', component: ManageProducts },
  { path: '/product-catalog', component: ProductCatalog }
]

// Create the router instance and pass the `routes` option
const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
