import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home/Home.vue";
import WhoAmI from "../views/WhoAmI/WhoAmI.vue";
import WhatIsSophrology from "../views/WhatIsSophrology/WhatIsSophrology.vue";
import Sessions from "../views/Sessions/Sessions.vue";
import SophrologyForBusiness from "../views/SophrologyForBusiness/SophrologyForBusiness.vue";
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
    path: "/sophrologie-en-entreprise",
    name: "SophrologyForBusiness",
    component: SophrologyForBusiness
  },
  {
    path: "/seances",
    name: "Sessions",
    component: Sessions
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
  // mode: 'history',
  routes,
  scrollBehavior (to, from, savedPosition) {
    return { x: 0, y: 0 }
  }
});

export default router;
