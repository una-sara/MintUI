import Vue from 'vue'
import App from './App.vue'
import router from './router'
//1.引入第三方组件库mint-ui
//1.1完整引入所有组件
import MintUi from "mint-ui";
//1.2单独引入mint-ui样式文件
import "mint-ui/lib/style.css";
//1.3将mint-ui注册 Vue
Vue.use(MintUi);

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
