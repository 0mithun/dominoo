<template>
   <footer>
       <div class="container">
           <div>
               <img :src="LogoIcon" alt="">
               <div class="contact">
                   <div>Call Us</div>
                   <div>8801828307745</div>
               </div>
           </div>
       </div>
   </footer>
</template>

<script>
    import LogoIcon from '../../assets/images/logo.png'
    export default {
        data() {
            return {
                LogoIcon
            }
        },
    }
</script>

<style scoped>

</style>