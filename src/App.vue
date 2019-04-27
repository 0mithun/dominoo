<template>
  <div>
    <AppHeader></AppHeader>
    <div>
    <AppFeatured></AppFeatured>
    </div>
    <div>
      <FoodMenu></FoodMenu>
    </div>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from  './components/header-footer/AppHeader'
import AppFooter from  './components/header-footer/AppFooter'
import AppFeatured from './components/featured/Index'
import FoodMenu from './components/menu/Index'
export default {
  components:{
    AppHeader,
    AppFooter,
    AppFeatured,
    FoodMenu
  }
}
</script>

<style>
  @import './assets/style.css';

</style>
