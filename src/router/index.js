import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProjectView from "../views/ProjectView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView
  },
  {
    path: "/projekt/:id",
    name: "project-view",
    component: ProjectView
  },
  {
    path: "/:pathMatch(.*)*",
    redirect: "/" // Redirect all unknown routes to the home page
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Scroll to the top only when navigating to ProjectView
    if (to.name === "project-view") {
      return { top: 0 };
    }
    // Use default behavior (no scroll) for other routes
    return savedPosition || {};
  }
});

export default router;
