import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/activity',
    name: 'activity',
    component: () => import('../views/Activity.vue'),
  },
  {
    path: '/',
    name: 'tasks',
    component: () => import('../views/Tasks.vue'),
  },
  {
    path: '/kanban',
    name: 'kanban',
    component: () => import('../views/ComingSoon.vue'),
  },
  {
    path: '/calendar',
    name: 'calendar',
    component: () => import('../views/ComingSoon.vue'),
  },
  {
    path: '/files',
    name: 'files',
    component: () => import('../views/ComingSoon.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
