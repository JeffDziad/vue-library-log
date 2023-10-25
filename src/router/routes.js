
const routes = [
  {
    path: '/',
    component: () => import('pages/LibraryLog.vue'),
  },
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
];

export default routes;
