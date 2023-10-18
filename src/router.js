import { createRouter, createWebHistory } from 'vue-router';
import SoalA from './components/SoalA.vue';
import SoalB from './components/SoalB.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: SoalA,
    },
    {
      path: '/soalb',
      component: SoalB,
    },
  ],
});
