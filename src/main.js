import Vue from 'vue';
import DashboardPlugin from './plugins/dashboard-plugin';
import App from './App.vue';
import axios from 'axios';

// const axios = require('axios').default;
Vue.use(DashboardPlugin);
Vue.prototype.$API_URL = 'http://localhost:8080/api'
// Vue.prototype.$API_URL = '/api'
// Vue.prototype.$API_URL = 'http://localhost:3000/api'

import store from './routes/store';
import router from './routes/router';

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  render: h => h(App),
  router,
});
