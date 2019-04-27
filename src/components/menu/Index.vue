<template>
    <div>
        <div class="container menu_container">
            <div class="top">
                <h2>Menu</h2>
            </div>
            <div class="buttons">
                <md-button
                        class="md-dense md-raised"
                        v-for="(button, index) in buttons"
                        :key="index"
                        :class="button.active? 'md-active md-accent':''"
                        @click="changeMenu(button.name)"
                >{{ button.name }}</md-button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                buttons: [
                    {name:'pizza', active:true},
                    {name:'burgers', active:false},
                    {name:'salat', active:false},
                    {name:'dessert', active:false},
                ]
            }
        },
        methods: {
            changeMenu(value) {
                this.buttons.forEach(item =>{
                    if(item.name == value){
                        item.active =  true;
                    }else{
                        item.active = false
                    }

                });
            }
        },
    }
</script>

<style scoped>

</style>