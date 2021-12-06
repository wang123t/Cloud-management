import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from '../components/Login'
Vue.use(VueRouter);

const routes = [
  {/* 首页登录页组件 */
    path: "/Login",
    name: "Login",
    component: Login,   
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    /* home的子组件 */
    redirect:'/Login',
    children:[
      {
        path: "course",
        name: "course",
        component: () =>
          import( "../components/course.vue"),
      },
      {
        path: "/management",
        name: "management",
        component: () =>
          import( "../components/management.vue"),
      },
      {
        path: "/note",
        name: "note",
        component: () =>
          import( "../components/note.vue"),
      },
      {
        path: "/share",
        name: "share",
        component: () =>
          import( "../components/share.vue"),
      },
      {
        path: "/teaching",
        name: "teaching",
        component: () =>
          import( "../components/teaching.vue"),
      },
      {
        path: "/doing",
        name: "doing",
        component: () =>
          import( "../components/doing.vue"),
      },
      {
        path: "/practice",
        name: "practice",
        component: () =>
          import( "../components/practice.vue"),
      },
      {
        path: "/Tabs",
        name: "Tabs",
        component: () =>
          import( "../components/Tabs.vue"),
      },
    ]
  },
  
];

const router = new VueRouter({
  routes,
});

router.beforeEach((to,from,next) => {
  if(to.path == '/Login'){
    next()
  }else{
    const token = window.sessionStorage.getItem('token')
    if(!token){
      next('/Login')
    }
    else{
      next()
    }
  }
})

export default router