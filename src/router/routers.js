export default [
  {
    path: "/",
    name: "Root",
    redirect: "/test-vant",
  },
  {
    path: "/test-vant",
    name: "TestVant",
    component: () => import(/* webpackChunkName: "test" */ "@views/TestVant"),
  },
];
