import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Main from '@/components/Main'
Vue.use(VueRouter);

const routes = [
  {/* 首页登录页组件 */
    path: "/Main",
    name: "Main",
    component: Main,   
  },
  {
    path: "/",
    name: "Home",
    component: Home,
    /* home的子组件 */
    redirect:'/Main',
    children:[
      {
        path: "/course",
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
        path: "/tabs",
        name: "tabs",
        component: () =>
          import( "../components/tabs.vue"),
      },
    ]
  },
  
];

const router = new VueRouter({
  routes,
});

export default router;
