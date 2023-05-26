const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/user/Home.vue")
      },
      {
        path: "stadium",
        component: () => import("pages/user/Stadium.vue")
      },
      {
        path: "stadium/:id",
        component: () => import("pages/user/StadiumDetail.vue")
      },
      {
        path: "help",
        component: () => import("pages/user/Help.vue")
      },
      {
        path: "admin",
        component: () => import("pages/admin/Admin.vue")
      },
      {
        path: "super",
        component: () => import("pages/admin/SuperAdmin.vue")
      }
    ]
  },
  {
    path: "/auth",
    component: () => import("layouts/AuthLayout.vue"),
    children: [
      {
        path: "",
        component: () => import("pages/auth/Login.vue")
      }
    ]
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue")
  }
];

export default routes;
