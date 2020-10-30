import Vue from 'vue'
import App from './App.vue'
import { GridStack, $ } from "gridstack";
import 'gridstack/dist/gridstack.css';

window['$'] = $
Vue.config.productionTip = false
Vue.prototype.$GridStack = GridStack;
Vue.prototype.$jQuery = $;

new Vue({
  render: h => h(App),
}).$mount('#app')
