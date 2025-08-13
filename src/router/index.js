import { createRouter, createWebHashHistory } from "vue-router";
import HelloWorld from "../components/HelloWorld.vue";
import HomePage from "@/components/Home.vue";
import StartPage from "@/components/start.vue";
import PhotographyPark from "../mainpark/摄影.vue"
import TechnologyPark from "../mainpark/技术.vue"
import BlogPark from "../mainpark/日志.vue"
import OtherPark from "../mainpark/其他.vue"
import NonePage from "@/components/none.vue"



                                                                          /* 博客网页部分 */

import p250801 from "@/mainpark/photo/p250801.vue";
import p250802 from "@/mainpark/photo/p250802.vue";
import p250518 from "@/mainpark/photo/p250518.vue";

const routes = [
  {
    path: "/helloworld",
    name: "hello",
    component: HelloWorld,
  },

  {
    path:"/Home",
    name:"home",
    component: HomePage,
  },

  {
    path:"/",
    name:"start",
    component:StartPage,
  },

  {
    path:"/photography",
    name:"摄影",
    component:PhotographyPark,
  },

  {
    path:"/technology",
    name:"技术",
    component:TechnologyPark,
  },

  {
    path:"/blog",
    name:"日志",
    component:BlogPark,
  },

  {
    path:"/other",
    name:"其他",
    component:OtherPark,
  },

  {
    path:"/NonePage",
    name:"NonePage",
    component:NonePage,
  },




                                                          /*博客网页部分 */


  {
    path:"/p250801",
    name:"p250801",
    component:p250801,
  },

  {
    path:"/p250802",
    name:"p250802",
    component:p250802,
  },

  {
    path:"/p250518",
    name:"p250518",
    component:p250518,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
