import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Home.vue";
import About from "../components/About.vue";
import Contacts from "../components/Contacts.vue";
import Login from "../components/Login.vue";
import Signup from "../components/Signup.vue";

const routes = [
	{
		path: "/",
		component: Home,
	},
	{
		path: "/about",
		component: About,
	},
	{
		path: "/contacts",
		component: Contacts,
	},
	{
		path: "/login",
		component: Login,
	},
	{
		path: "/signup",
		component: Signup,
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes,
});

export default router;
