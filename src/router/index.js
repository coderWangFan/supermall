import Vue from "vue";
import VueRouter from "vue-router";


Vue.use(VueRouter);

const routes=[
  {
    path:'',
    redirect:'/Home'
  },
  {
    path:'/Home',
    component:()=>import("../views/home/Home")
  },
  {
    path:'/Categroy',
    component:()=>import("../views/categroy/Categroy")
  },
  {
    path:'/Shop',
    component:()=>import("../views/shop/Shop")
  },
  {
    path:'/Profile',
    component:()=>import("../views/profile/Profile")
  }
]
const router = new VueRouter({
  routes,
  mode:'history'
});
export default router