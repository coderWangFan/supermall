<template>
  <div>
    <router-view></router-view>
    <tab-bar>
      <tab-bar-item path="/Home">
        <img slot="tar-icon" src="../../assets/img/tabbar/home.svg">
        <img slot="tar-icon-active" src="../../assets/img/tabbar/home_active.svg">
        <div slot="tar-item">首页</div>
      </tab-bar-item>
      <tab-bar-item path="/Categroy">
        <img slot="tar-icon" src="../../assets/img/tabbar/category.svg">
        <img slot="tar-icon-active" src="../../assets/img/tabbar/category_active.svg">
        <div slot="tar-item">分类</div>
      </tab-bar-item>
      <tab-bar-item path="/Shop">
        <img slot="tar-icon" src="../../assets/img/tabbar/shopcart.svg">
        <img slot="tar-icon-active" src="../../assets/img/tabbar/shopcart_active.svg">
        <div slot="tar-item">购物车</div>
      </tab-bar-item>
      <tab-bar-item  path="/Profile">
        <img slot="tar-icon" src="../../assets/img/tabbar/profile.svg">
        <img slot="tar-icon-active" src="../../assets/img/tabbar/profile_active.svg">
        <div slot="tar-item">我的</div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
  import router from "@/router";
  import tabBar from "@/components/tabBar/TabBar";
  import tabBarItem from "@/components/tabBar/TabBarItem";

  export default {
    name: "MainTabBar",
    router,
    components:{
      tabBar,tabBarItem,
    }
  }
</script>

<style scoped>

</style>