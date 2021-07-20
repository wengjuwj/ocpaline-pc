import Vue from 'vue'
import App from './App.vue'
import { Button } from 'ant-design-vue'
import { VueAxios } from './utils/request'

// mock
// WARNING: `mockjs` NOT SUPPORT `IE` PLEASE DO NOT USE IN `production` ENV.
import './mock'

Vue.component(Button.name, Button)

Vue.config.productionTip = false
// mount axios to `Vue.$http` and `this.$http`
Vue.use(VueAxios)

new Vue({
  render: h => h(App),
}).$mount('#app')
