import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/activity',
    name: 'activity',
    component: () => import('../components/Activity.vue'),
  },
  {
    path: '/',
    name: 'tasks',
    component: () => import('../components/Tasks.vue'),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
