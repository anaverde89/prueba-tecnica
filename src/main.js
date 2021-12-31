import Vue from "vue";
import App from "./App.vue";
import router from "./router";
// import VueFire from "vuefire";
import BootstrapVue from "bootstrap-vue";
import VueCurrencyInput from "vue-currency-input";
import Default from "./layout/wrappers/baseLayout.vue";
import Pages from "./layout/wrappers/pagesLayout.vue";

Vue.config.productionTip = false;
// Vue.use(VueFire);
Vue.use(BootstrapVue);
Vue.component("default-layout", Default);
Vue.component("userpages-layout", Pages);
Vue.use(VueCurrencyInput);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
