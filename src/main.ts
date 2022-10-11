import { createApp } from "vue";
import "./style.css";

import { createRouter, createWebHashHistory } from "vue-router";

import Home from "./Pages/Home.vue";
import UserProfile from "./Pages/UserProfile.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/user/:id", component: UserProfile },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

import App from "./App.vue";

const app = createApp(App);
app.use(router);
app.mount("#app");
