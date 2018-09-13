<template>
    <div>
        <h1>小计 {{this.$store.getters.totalPrice}}</h1>
        {{msg}}
    </div>
</template>

<script>
    import bus from "../bus"
    export default {
        // computed:{
        //     total(){
        //         return this.$store.state.count * this.$store.state.price
        //     }
        // }
        data(){
            return {
                msg:""
            }
        },
        created(){
            this.$bus.$on('toData',(msg)=>{
                this.msg = msg
            })
        }
    }
</script>

<style scoped>

</style>