<template>
  <div>
    <h2>首页</h2>
    <h1>-----------------</h1>
    <h1>{{resl.data}}</h1>
  </div>
</template>

<script>
  import axios from "axios";
  export default {
    name: "Home",
    data(){
      return{
        resl:''
      }
    },
    created(){
      axios({
        url:'http://123.207.32.32:8000/home/multidata'
      }).then( res =>this.resl=res)
    }
  }
</script>

<style scoped>

</style>