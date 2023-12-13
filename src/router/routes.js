
const routes = [
  {
    path: '/',
    component: () => import('layouts/Main.vue'),
    children: [
      { path: '', component: () => import('layouts/Main_page.vue') },
      { path: '/Main', component: () => import('pages/Main.vue') },
      { path: '/Contact', component: () => import('pages/Contact.vue') },
      { path: '/Event', component: () => import('pages/Event.vue') },
      { path: '/Members', component: () => import('pages/Members.vue') },
      { path: '/Offers', component: () => import('pages/Offers.vue') },
      { path: '/Shop', component: () => import('pages/Shop.vue') }
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
