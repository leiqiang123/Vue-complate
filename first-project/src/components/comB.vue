<template>
    <div>
        <button @click="reduce">-</button>
        <strong>{{count}}</strong>
        <button @click="add">+</button>
        <button @click="handleClick">兄弟组件传值</button>
    </div>
</template>

<script>
    import bus from "../bus"
    import {mapState} from "vuex"
    export default {
        data(){
            return {
                msg:"来自兄弟组件B的内容"
            }
        },
        methods:{
            reduce(){
                this.$store.commit('REDUCE_COUNT')
            },
            add(){
                this.$store.commit('ADD_COUNT')
            },
            handleClick(){
                this.$bus.$emit('toData',this.msg)
            }
        },
        computed:{
            ...mapState(['count'])
        }
    }
</script>

<style scoped>
 button{
     height: 50px;
     width: 50px;
 }
</style>