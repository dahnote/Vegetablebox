import { createRouter, createWebHashHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('../views/Home.vue'),
    children: [
      {
        path: '/',
        name: '產品列表',
        component: () => import('../views/user/Products.vue'),
      },
      {
        path: 'login',
        name: '後台登入',
        component: () => import('../views/user/Login.vue'),
      },
      {
        path: 'cart',
        name: '購物車列表',
        component: () => import('../views/user/Cart.vue'),
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../views/errorPage.vue'),
      },
    ],
  },
  {
    path: '/admin',
    component: () => import('../views/Admin.vue'),
    children: [
      {
        path: 'products',
        name: '產品列表管理',
        component: () => import('../views/admin/Products.vue'),
      },
      {
        path: 'orders',
        name: '訂單管理',
        component: () => import('../views/admin/Order.vue'),
      },
      {
        path: 'coupons',
        name: '優惠券',
        component: () => import('../views/admin/Coupon.vue'),
      },
      {
        path: '/:pathMatch(.*)*',
        name: 'NotFound',
        component: () => import('../views/errorPage.vue'),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
