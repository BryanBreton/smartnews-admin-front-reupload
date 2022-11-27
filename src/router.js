import Vue from "vue"
import Router from "vue-router"
Vue.use(Router)

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/administration",
      name: "Administration",
      component: () => import("./views/Administration.vue")
    },
    {
      path: "/appairage",
      name: "Appairage",
      component: () => import("./views/Appairage.vue")
    },
    {
      path: "/page",
      name: "page",
      component: () => import("./views/Page.vue")
    },
    {
      path: "*",
      redirect: "administration"
    }
  ]
})
