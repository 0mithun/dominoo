<template>
    <div class="container newsl_container">
        <h2>Join To Our Newsletter</h2>
        <div class="form">
            <input type="text" v-model="email">
            <button @click.prevent="submitHandler">Subscribe</button>
        </div>
        <div class="error_label">
            <div>
                {{  error }}
            </div>
        </div>
        <div class="success_label">
            <div>
               {{ success }}
            </div>
        </div>
        <div class="small">
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur officiis quibusdam quod sint
                voluptatem. Accusamus alias corporis cum deserunt facilis fugit laboriosam non odit, officiis saepe sed,
                ut vitae voluptatum.</p>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                email: '',
                error:'',
                success: ''
            }
        },
        methods: {
            submitHandler() {
              let valid =  this.validate(this.email)
                if(valid[0]){
                    this.error = ''
                    this.addEmail(this.email)
                }else{
                    this.error = valid[1]
                }
            },
            validate(value){
                let valid = [true,'']

                if(value === ''){
                  return  valid = [false, 'Its empty']
                }
                if(!/\S+@\S+\.\S+/.test(value)){
                  return  valid = [false, 'Enter a valid email']
                }
                return valid
            },
            addEmail(email){
                this.$http.get(`users.json?orderBy=\"email\"&&equalTo=\"${email}\"`)
                    .then(res=>{
                        if(Object.getOwnPropertyNames(res.data).length ==0){
                           this.$http.post('users.json',{email: this.email})
                               .then(res=>{
                                   this.email = ''
                                   this.success = "Thanks for subscribing"
                               })
                        }else{
                            this.success = 'Already in the lists'
                        }
                    })
                this.clearSuccess()
            },
            clearSuccess(){
                setTimeout(()=>{
                    this.success = ''
                },5000)
            }
        },
    }
</script>

<style scoped>

</style>