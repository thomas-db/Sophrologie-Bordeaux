import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import stringsJson from './strings.json';
import '@/scss/tailwind.css'
import 'element-ui/lib/theme-chalk/index.css';
import ElementUI from 'element-ui';
import Meta from 'vue-meta';

Vue.use(Meta);
Vue.config.productionTip = false;
Vue.prototype.$languages = {
  country: "fr",
  strings: stringsJson
};

Vue.use(ElementUI);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
