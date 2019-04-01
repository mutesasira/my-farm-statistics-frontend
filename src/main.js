import Vue from 'vue';
import VueRouter from 'vue-router';
import VueAxios from 'vue-axios';
import axios from 'axios';
import BootstrapVue from 'bootstrap-vue';
import { Modal } from 'bootstrap-vue/es/components';
import { Layout } from 'bootstrap-vue/es/components';
import { Card } from 'bootstrap-vue/es/components'
import { Scrollspy } from 'bootstrap-vue/es/directives'

import App from './App.vue';
import Create from './components/Create.vue';
import Edit from './components/Edit.vue';
import Index from './components/Index.vue';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/nprogress/nprogress.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BModal from 'bootstrap-vue/es/components/modal/modal';
import BModalDirective from 'bootstrap-vue/es/directives/modal/modal';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';

Vue.use(VueRouter);
Vue.use(VueAxios, axios);
Vue.use(BootstrapVue);
Vue.component('b-modal', BModal);
Vue.directive('b-modal', BModalDirective);
Vue.use(Layout);
Vue.use(Modal);
Vue.use(Card);
Vue.use(Scrollspy);
Vue.use(VueMaterial);
Vue.use(MdButton);
Vue.use(MdContent);
Vue.use(MdTabs);



Vue.config.productionTip = false;

const routes = [
  {
    name: 'Create',
    path: '/create',
    component: Create
  },
  {
    name: 'Edit',
    path: '/edit',
    component: Edit
  },
  {
    name: 'Index',
    path: '/index',
    component: Index
  },
];

const router = new VueRouter({ mode: 'history', routes: routes });

new Vue({
  render: h => h(App),


  
  router
}).$mount('#app')
