<template>
    <div>
        <carousel
                :per-page="1"
                :mouse-drag="true"
                :pagination-enabled="false"
        >
            <slide v-for="slide in slides">
               <div class="slider_bck" :style="{'background':`url(${slide.bck})`}">
                    <div class="container slider-container">
                        <div class="text">
                            {{slide.text}}
                        </div>
                        <div class="img">
                            <img :src="slide.img" alt="">
                        </div>
                    </div>
               </div>
            </slide>
        </carousel>
    </div>
</template>

<script>
    import SlideBck from '../../assets/images/slide_bck.jpg'
    import SlideBck2 from '../../assets/images/slide_bck2.jpg'
    import  PizzaOne from '../../assets/images/pizza_one.png'
    import  PizzaTwo from '../../assets/images/pizza_two.png'
    import  PizzaThree from '../../assets/images/pizza_three.png'
    export default {
        data() {
            return {
                slides: [
                    {text:"20% Off ON ALL PIZZAs", bck:SlideBck, img:PizzaOne},
                    {text:"BUY 2 GET 1 FREE", bck:SlideBck2, img:PizzaTwo},
                    // {text:"Slide 3", bck:'nothing', img:''},
                    // {text:"Slide 4", bck:'nothing', img:''},
                ]
            }
        },
    }
</script>

<style scoped>
    .img {
        margin-top: 210px;
    }
</style>