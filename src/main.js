import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import stringsJson from './strings.json';
import '@/scss/tailwind.css'

Vue.config.productionTip = false;
Vue.prototype.$languages = {
  country: "fr",
  strings: stringsJson
};


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
