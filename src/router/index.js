import Vue from 'vue'
import Router from 'vue-router'
import Product from '@/views/product'
import ProductDetail from '@/views/productDetail'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'product',
      component: Product
    },
    {
      path: '/productDetail/:id',
      name: 'productDetail',
      component: ProductDetail
    },
  ]
})
