import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/HomePage.vue";
import AddNotePage from "../pages/AddNotePage.vue";

const routes = [
  { path: "/", component: HomePage },
  { path: "/add", component: AddNotePage },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
