<template>
  <div>
    <AppHeader></AppHeader>
    <div>
      content
    </div>
    <AppFooter></AppFooter>
  </div>
</template>

<script>
import AppHeader from  './components/header-footer/AppHeader'
import AppFooter from  './components/header-footer/AppFooter'
export default {
  components:{
    AppHeader,
    AppFooter
  }
}
</script>

<style>
  @import './assets/style.css';
</style>
