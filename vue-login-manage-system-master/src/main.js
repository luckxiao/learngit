import Vue from 'vue';
import App from './App';
import router from './router';
import axios from 'axios';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-default/index.css';    // 默认主题
// import '../static/css/theme-green/index.css';       // 浅绿色主题
import SIdentify from './components/page/Identify';    //自定义组件
import "babel-polyfill";
import echarts from 'echarts'

Vue.prototype.$echarts = echarts

Vue.component("SIdentify",SIdentify);
Vue.use(ElementUI);
Vue.prototype.$http=axios;
window.axios = require('axios');
window.axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
Vue.prototype.$http = window.axios
//axios.defaults.baseURL='http://localhost'
// Vue.use(axios);
new Vue({
    router,
    render: h => h(App)
}).$mount('#app');