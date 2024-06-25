import { createRouter, createWebHistory } from "vue-router";

/* ------------------ App Components ------------------- */
import App from "@/views/app/include/App.vue";
import Home from "@/views/app/pages/home/Index.vue";
import Stories from "@/views/app/pages/home/stories/stories/Index.vue";
import Profile from "@/views/app/pages/profile/Index.vue";
import EditProfile from "@/views/app/pages/edit-profile/Index.vue";
import Followers from "@/views/app/pages/followers/Index.vue";
import Following from "@/views/app/pages/following/Index.vue";
import People from "@/views/app/pages/people/Index.vue";
import Messages from "@/views/app/pages/messages/Index.vue";
import Explore from "@/views/app/pages/explore/Index.vue";
import Setting from "@/views/app/pages/setting/Index.vue";

/* Just for Testing */
import Test from "@/components/Test.vue";

/* ------------------ Auth Components ------------------ */
import Auth from "@/views/auth/include/Auth.vue";
import Register from "@/views/auth/Register.vue";
import Login from "@/views/auth/Login.vue";

const routes = [
  /* ------------------- App Routes -------------------- */
  {
    path: "/",
    name: "app",
    redirect: "/",
    component: App,
    children: [
      { path: "/", name: "app.index", component: Home },
      { path: "/profile", name: "app.profile", component: Profile, meta: { title: "My Profile" } },
      {
        path: "/profile/:slug",
        name: "app.profile.people",
        component: Profile,
        meta: { title: "People Profile" },
      },
      {
        path: "/profile/saved",
        name: "app.profile.saved",
        component: Profile,
        meta: { title: "Saved" },
      },
      {
        path: "/profile/edit",
        name: "app.profile.edit",
        component: EditProfile,
        meta: { title: "Edit Profile" },
      },
      {
        path: "/followers",
        name: "app.followers",
        component: Followers,
        meta: { title: "Followers" },
      },
      {
        path: "/following",
        name: "app.following",
        component: Following,
        meta: { title: "Following" },
      },
      { path: "/people", name: "app.people", component: People, meta: { title: "People" } },
      { path: "/explore", name: "app.explore", component: Explore, meta: { title: "Explore" } },
      { path: "/messages", name: "app.messages", component: Messages, meta: { title: "Chats" } },
      {
        path: "/messages/:slug",
        name: "app.messages.people",
        component: Messages,
        meta: { title: "Chats" },
      },
      { path: "/setting", name: "app.setting", component: Setting, meta: { title: "Setting" } },

      /* Just for Testing */
      { path: "/test", name: "app.test", component: Test },
    ],
  },

  /* ------------------ Auth Routes ------------------- */
  {
    path: "/auth",
    name: "auth",
    redirect: "/login",
    component: Auth,
    children: [
      {
        path: "/register",
        name: "auth.register",
        component: Register,
        meta: { title: "Register" },
      },
      { path: "/login", name: "auth.login", component: Login, meta: { title: "Login" } },
    ],
  },

  /* ------------------ Other Routes ------------------ */
  {
    path: "/stories/:slug",
    name: "stories",
    component: Stories,
    meta: { title: "Stories" },
  },
  {
    path: "/public/about",
    name: "about",
    component: () => import("@/components/other-routes/About.vue"),
    meta: { title: "About" },
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFound",
    component: () => import("@/components/other-routes/NotFound.vue"),
    meta: { title: "Not Found" },
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
  scrollBehavior() {
    /* Scroll directly to pages/profile/SavedImages.vue */
    return { el: "#savedImages" };
  },
});

router.beforeEach((to) => {
  /* Change title according to own-page */
  document.title = to.meta?.title ? `${to.meta.title} • Instagram` : `Instagram`;
});

export default router;
