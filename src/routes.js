import User from './components/User.vue';
import Home from './components/Home.vue';

export const routes = [
  { path:'/user', component: User },
  { path: '/', component: Home }
]