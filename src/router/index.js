import { createRouter,createHistory } from "@posva/vue-router-next"
import Page1 from "../views/page.vue";
import Page2 from "../views/page2.vue";

const routes = [
  {
    path:'/page1',
    name:'page1',
    component:Page1
  },{
    path:'/page2',
    name:'page2',
    component:Page2
  }
]
export const routerHistory = createHistory()
export const  router = createRouter({
  history:routerHistory,
  base:process.env.BASE_URL,
  routes
})
router.beforeEach((to,from,next)=>{
  console.log('beforeEach',to.name);
  next()
})
export default router;