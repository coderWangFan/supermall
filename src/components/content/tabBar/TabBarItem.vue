<template>
  <div id="tabBar-item" @click="itemClick">
    <div v-if="!isActive">
      <slot name="tar-icon"></slot>
    </div>
    <div v-else>
      <slot name="tar-icon-active"></slot>
    </div>
    <div :class="{active:isActive}">
      <slot name="tar-item"></slot>
    </div>
  </div>
</template>

<script>
  export default {
    name: "TabBarItem",
    props:{
      path:String
    },
    data(){
      return{

      }
    },
    computed:{
      isActive(){
        return this.$route.path.indexOf(this.path)!== -1;
      }
    },
    methods:{
      itemClick(){
        // this.isActive=!this.isActive;
        this.$router.push(this.path);
      }
    }
  }
</script>

<style scoped>

  .active{
    color: #e33333;
  }
  #tabBar-item{
    text-align: center;
    font-weight: 800;
  }
#tabBar-item img{
  height: 24px;
}
</style>