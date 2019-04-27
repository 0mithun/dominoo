import Vue from 'vue'
import  VueResource from 'vue-resource'
Vue.use(VueResource)
Vue.http.options.root= 'https://domnoo-e6a5b.firebaseio.com/'

import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import 'vue-material/dist/theme/default.css'
Vue.use(VueMaterial)

import VueCarousel from 'vue-carousel';
Vue.use(VueCarousel);

import VueScrollReveal from 'vue-scroll-reveal';
Vue.use(VueScrollReveal,{
  duration:800,
  scale:1,
  distance: '50px'
});


import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  el:'#app',
  render: h => h(App),
})
