
const routes = [
  {
    path: '/',
    component: () => import('layouts/Main_l.vue'),
    children: [
      { path: '', component: () => import('pages/Main_p.vue') },
      { path: '/Contact', component: () => import('../pages/Contact_p.vue') },
      { path: '/Event', component: () => import('../pages/Event_p.vue') },
      { path: '/Members', component: () => import('../pages/Members_p.vue') },
      { path: '/Offers', component: () => import('../pages/Offers_p.vue') },
      { path: '/Shop', component: () => import('../pages/Shop_p.vue') }
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
