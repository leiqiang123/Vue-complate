<template>
    <div>
        <h1>
            我是详情页
        </h1>
        动态路由参数{{$route.params.id}}
    </div>
</template>

<script>
export default {
  name: 'about',
  created(){
      console.log(this.$route.params)
  }
}
</script>

<style>

</style>