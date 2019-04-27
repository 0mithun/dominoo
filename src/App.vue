<template>
  <div>
    <AppHeader></AppHeader>
    <div>
      <AppFeatured></AppFeatured>
      <FoodMenu></FoodMenu>
      <CallUs></CallUs>
      <NewsLetter></NewsLetter>
    </div>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from  './components/header-footer/AppHeader'
import AppFooter from  './components/header-footer/AppFooter'
import AppFeatured from './components/featured/Index'
import FoodMenu from './components/menu/Index'
import  CallUs from './components/callus/index'
import  NewsLetter from './components/mewsletter/Index'
export default {
  components:{
    AppHeader,
    AppFooter,
    AppFeatured,
    FoodMenu,
    CallUs,
    NewsLetter
  }
}
</script>

<style>
  @import './assets/style.css';

</style>
