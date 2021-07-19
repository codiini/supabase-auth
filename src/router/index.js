import { createRouter, createWebHistory } from 'vue-router';
import { supabase } from '../supabase';

function loadPage(view) {
  return () =>
    import(
      /* webpackChunkName: "view-[request]" */ `@/views/${view}.vue`
    );
}

const routes = [
  {
    path: '/',
    name: 'Dashboard',
    component: loadPage("Dashboard"),
    meta: {
      requiresAuth: true,
    }
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: loadPage("SignUp")
  },
  {
    path: '/sign-in',
    name: 'SignIn',
    component: loadPage("SignIn")
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

router.beforeEach((to, from, next) => {
  const currentUser = supabase.auth.user();
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth);

  if(requiresAuth && !currentUser) next('sign-in');
  else if(!requiresAuth && currentUser) next("/");
  else next();
})

export default router
