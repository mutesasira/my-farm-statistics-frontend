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
import home from './layouts/home.vue';
import login from './components/login.vue';
import routes from './routes';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import BModal from 'bootstrap-vue/es/components/modal/modal';
import BModalDirective from 'bootstrap-vue/es/directives/modal/modal';
import VueMaterial from 'vue-material';
import 'vue-material/dist/vue-material.min.css';
import { MdButton, MdContent, MdTabs } from 'vue-material/dist/components';
import 'vue-material/dist/vue-material.min.css';
//import moment from 'moment'
//import displayAssociation from './components/displayAssociation';

Vue.component('home-layout', home);
Vue.component('login', login);
Vue.component('routes-layout', routes);
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

window.Popper = require('popper.js').default;
window.$ = window.jQuery = require('jquery');
//window.Form = Form;



Vue.config.productionTip = false;

const router = new VueRouter({ mode: 'history', routes: routes });

new Vue({
  render: h => h(App),
  router
}).$mount('#app')


//CSS FILES 
require("./assets/global/plugins/font-awesome/css/font-awesome.min.css")
require("./assets/global/plugins/simple-line-icons/simple-line-icons.min.css")
require("./assets/global/plugins/bootstrap/css/bootstrap.min.css")
require("./assets/global/plugins/bootstrap-switch/css/bootstrap-switch.min.css")
//require("./assets/global2/plugins/bootstrap-daterangepicker/daterangepicker.min.css")
require("./assets/global/plugins/morris/morris.css")
require("./assets/global/plugins/fullcalendar/fullcalendar.min.css")
require("./assets/global/plugins/jqvmap/jqvmap/jqvmap.css")
require("./assets/global/css/components.min.css")
require("./assets/layouts/layout4/css/layout.min.css")
require("./assets/layouts/layout4/css/themes/default.min.css")
require("./assets/layouts/layout4/css/custom.min.css")
require("./assets/customCss/mycss.css")

 //javascript files

 require("./assets/global/plugins/jquery.min.js").ensure;
require("./assets/global/plugins/bootstrap/js/bootstrap.min.js")
 require("./assets/global/plugins/js.cookie.min.js")
 require("./assets/global/plugins/jquery-slimscroll/jquery.slimscroll.min.js")
 require("./assets/global/plugins/jquery.blockui.min.js")
 //require("./assets/global/plugins/bootstrap-switch/js/bootstrap-switch.min.js")
 //require("./assets/global/plugins/moment.min.js")
 //require("./assets/global/plugins/bootstrap-daterangepicker/daterangepicker.min.js")
 require("./assets/global/plugins/morris/morris.min.js")
 //require("./assets/global/plugins/morris/raphael-min.js")
 //require("./assets/global/plugins/counterup/jquery.waypoints.min.js")
 require("./assets/global/plugins/counterup/jquery.counterup.min.js")
 //require("./assets/global/plugins/fullcalendar/fullcalendar.min.js")
 require("./assets/global/plugins/horizontal-timeline/horizontal-timeline.js")
 require("./assets/global/plugins/flot/jquery.flot.min.js")
 require("./assets/global/plugins/flot/jquery.flot.resize.min.js")
 require("./assets/global/plugins/flot/jquery.flot.categories.min.js")
 //require("./assets/global/plugins/jquery-easypiechart/jquery.easypiechart.min.js")
 require("./assets/global/plugins/jquery.sparkline.min.js")
 require("./assets/global/plugins/jqvmap/jqvmap/jquery.vmap.js")
 require("./assets/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.russia.js")
 require("./assets/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.world.js")
 require("./assets/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.europe.js")
 require("./assets/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.germany.js")
 require("./assets/global/plugins/jqvmap/jqvmap/maps/jquery.vmap.usa.js")
 require("./assets/global/plugins/jqvmap/jqvmap/data/jquery.vmap.sampledata.js")
 require("./assets/global/scripts/app.min.js")
 require("./assets/pages/scripts/dashboard.min.js")
 require("./assets/layouts/layout4/scripts/layout.min.js")
 require("./assets/layouts/layout4/scripts/demo.min.js")
 require("./assets/layouts/global/scripts/quick-sidebar.min.js")
 require("./assets/layouts/global/scripts/quick-nav.min.js")