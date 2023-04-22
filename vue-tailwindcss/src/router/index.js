import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import Contact from "../views/Contact.vue";
import Members from "../views/Members.vue";
import AddMember from "../views/members/addMember.vue";
import AddEmail from "../views/members/addEmail.vue";
import AddContact from "../views/members/addContact.vue";
import AddPersonalInfo from "../views/members/addPersonalInfo.vue";
import NotFoundPage from "../views/NotFoundPage.vue";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/about", name: "About", component: About },
  { path: "/contact", name: "Contact", component: Contact },
  {
    path: "/members/",
    name: "Members",
    component: Members,
    children: [
      {
        path: "",
        name: "AddMemberDefault",
        component: AddMember,
      },
      {
        path: "/members/addMember",
        name: "AddMember",
        component: AddMember,
      },
      {
        path: "/members/addEmail",
        name: "AddEmail",
        component: AddEmail,
      },
      {
        path: "/members/addContact",
        name: "AddContact",
        component: AddContact,
      },
      {
        path: "/members/addPersonalInfo",
        name: "AddPersonalInfo",
        component: AddPersonalInfo,
      },
    ],
  },
  {
    path: "/:pathMatch(.*)*",
    name: "NotFoundPage",
    component: NotFoundPage,
  },
];

const router = createRouter({
  history: createWebHistory(), 
  routes,
});
export default router;
