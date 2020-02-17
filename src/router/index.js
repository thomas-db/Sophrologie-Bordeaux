import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";
import WhoAmI from "../views/WhoAmI/WhoAmI.vue";
import WhatIsSophrology from "../views/WhatIsSophrology/WhatIsSophrology.vue";
import ContactAndPrices from "../views/ContactAndPrices/ContactAndPrices";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/qui-suis-je",
    name: "WhoAmI",
    component: WhoAmI
  },
  {
    path: "/qu-est-ce-que-la-sophrologie",
    name: "WhatIsSophrology",
    component: WhatIsSophrology
  },
  {
    path: "/contact-et-tarifs",
    name: "ContactAndPrices",
    component: ContactAndPrices
  },
  {
    path: '*',
    redirect: '/'
  }
];

const router = new VueRouter({
  routes
});

export default router;
