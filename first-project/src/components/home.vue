<template>
    <!-- <div>
        <h1>
            我是首页
        </h1>
        <router-link :to="{path:'/login',query:{userinfo:'name is shanmu'}}">跳转到登录页面</router-link>
        <button @click="handleJsonp">得到json数据</button>
        <button @click="handleNosimple">post非简单请求</button>
    </div> -->
    <div>
        <div style="border:1px solid #000; display:flex">
            <comA></comA>
            <comB></comB>
            <h1>单价：{{this.$store.state.price}}</h1>
        </div>
        <input type="text" v-model="payload">
        <button @click="CHANGE_COUNT(payload)">改变</button>
        <br>
        <button @click="handleAsync">异步改变</button>
    </div>
</template>

<script>
import comA from "./comA"
import comB from "./comB"
import axios from "axios"
import {mapMutations} from "vuex"
let axiosJsonp = require('axios-jsonp')

export default {
    data(){
        return {
            count:0,
            price:20,
            payload:""
        }
    },
    name: 'home',
    components:{
        comA,
        comB
    },
    methods:{
        handleJsonp(){
            //   var jsonp = document.createElement("script")
            //   jsonp.src = "http://localhost:3000/jsonp?callback=getData"
            //   document.body.appendChild(jsonp)
            axios({
                url:'http://localhost:3000/jsonp',
                adapter:axiosJsonp
            }).then(res=> {
                console.log(res)
            })
            // axios.get('http://localhost:3000/json').then(res => {
            //     console.log(res)
            // })
        },
        handleNosimple(){
            axios.post('http://localhost:3000/nosimple',{name:"yao"},{
                withCredentials:true
            }).then(res =>{
                console.log(res)
            })
        },
        ...mapMutations(['CHANGE_COUNT']),
        handleAsync(){
            // setTimeout(()=>{
            //     this.CHANGE_COUNT(this.payload)
            // },1000)
            this.$store.dispatch('handleAsyncAction',this.payload)
        }
    }
}
</script>

<style scoped>

</style>