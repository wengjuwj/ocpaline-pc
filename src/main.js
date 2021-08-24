import Vue from 'vue'
import router from './router/index'
import ElementUI from 'element-ui';
import Vant from 'vant';
import 'lib-flexible/flexible'
import { VueAxios } from './utils/request'
import 'element-ui/lib/theme-chalk/index.css';
import 'vant/lib/index.css';
import '@/styles/reset.less';
import '@/styles/common.less';
import App from './App.vue'

// mock
// WARNING: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.
Vue.use(ElementUI);
Vue.use(Vant);

Vue.config.productionTip = false
// mount axios to `Vue.$http` and `this.$http`
Vue.use(VueAxios)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
