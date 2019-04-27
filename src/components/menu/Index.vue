<template>
    <div>
        <div class="container menu_container">
            <div class="top" v-scroll-reveal.reset>
                <h2>Menu</h2>
            </div>
            <div class="buttons" v-scroll-reveal.reset="{delay:250}">
                <md-button
                        class="md-dense md-raised"
                        v-for="(button, index) in buttons"
                        :key="index"
                        :class="button.active? 'md-active md-accent':''"
                        @click="changeMenu(button.name)"
                >{{ button.name }}</md-button>
            </div>
            <div class="products_items" v-scroll-reveal.reset="{delay:500}">
                <md-card
                        v-for="(product, index) in products"
                        :key="index"
                        v-if="product.type === activeProduct"
                >
                    <md-card-media md-ratio="16:9">
                        <img :src="require(`../../assets/images/products/${product.img}`)" alt="">
                    </md-card-media>
                    <md-card-header>
                        <div class="md-title">
                            <h3>
                                {{ product.name }}
                            </h3>
                        </div>
                        <div class="md-subhead">
                            <span>${{ product.price }}</span>
                        </div>
                    </md-card-header>
                    <md-card-content>{{ product.desc }}</md-card-content>
                </md-card>
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
                ],
                activeProduct: 'pizza',
                products: []
            }
        },
        methods: {
            changeMenu(value) {
                this.buttons.forEach(item =>{
                    if(item.name == value){
                        item.active =  true;
                        this.activeProduct = value;
                    }else{
                        item.active = false
                    }
                });
            }
        },
        created() {
            this.$http.get('products.json')
                .then(res=>res.json())
                .then(data=>{
                    let list = []
                    for(let key in data){
                        list.push({
                            ...data[key],
                            id:key
                        })
                    }
                    this.products = list
                })
        }
    }
</script>

<style scoped>
    .md-card{
        width: 32%;
        margin-bottom: 20px;
    }
    .products_items{
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }
</style>