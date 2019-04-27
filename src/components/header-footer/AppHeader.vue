<template>
    <header>
        <div class="container clear">
           <div class="logo">
               <img :src="LogoIcon" alt="">
           </div>
            <div class="nav">
                <img :src="MenuIcon" alt="" @click="showSidePanel= !showSidePanel">
            </div>
            <md-drawer class="side-drawer" :md-right="true" :md-active.sync="showSidePanel">

            </md-drawer>
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
                MenuIcon,
                showSidePanel:false
            }
        },
    }
</script>

<style scoped>

</style>