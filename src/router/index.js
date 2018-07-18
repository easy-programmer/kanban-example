import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home';
import Backlog from '@/components/Backlog';
import KanbanBoard from '@/components/KanbanBoard';


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/backlog',
      component: Backlog
    },
    {
      path: '/board',
      component: KanbanBoard
    },
    {
      path: '/home',
      component: Home
    },
    {
      path: '*',
      redirect: '/home',
    }
  ]
})
