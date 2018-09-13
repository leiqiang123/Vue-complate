<template>
    <div>
        <button @click="reduce">-</button>
        <strong>{{$store.state.count}}</strong>
        <button @click="add">+</button>
    </div>
</template>

<script>
    export default {
        methods:{
            add(){
                this.$store.commit('ADD_COUNT')
            },
            reduce(){
                this.$store.commit('REDUCE_COUNT')
            }
        }
    }
</script>

<style scoped>
 button{
     height: 50px;
     width: 50px;
 }
</style>