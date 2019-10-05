const routes = [
  {
    path: "/",
    component: () => import("layouts/Layout"),
    children: [
      { path: "", component: () => import("pages/PageTodo") },
      { path: "/settings", component: () => import("pages/Settings") },
      { path: "/about", component: () => import("pages/About") }
    ]
  }
];

// Always leave this as last one
if (process.env.MODE !== "ssr") {
  routes.push({
    path: "*",
    component: () => import("pages/Error404")
  });
}

export default routes;
