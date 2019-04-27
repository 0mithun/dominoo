<template>
    <header>
        <div class="container clear">
           <div class="logo">
               <img :src="LogoIcon" alt="">
           </div>
            <div class="nav">
                <img :src="MenuIcon" alt="">
            </div>
        </div>
    </header>
</template>

<script>
    import  LogoIcon from '../../assets/images/logo.png'
    import  MenuIcon from '../../assets/images/menu.png'
    export default {
        data() {
            return {
                LogoIcon,
                MenuIcon
            }
        },
    }
</script>

<style scoped>

</style>