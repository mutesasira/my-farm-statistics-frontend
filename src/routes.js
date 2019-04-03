//import Vue from 'vue';
//import VueRouter from 'vue-router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/nprogress/nprogress.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/vue-material.min.css';
import home from './layouts/home';
import association from './components/association';


export default[
  {
  path: '/',
  redirect: '/home'
},
    {
      path: "",
      name: 'home',
      component: home,

      children:[
        {
        path:"/association",
        name:'association',
        component: association
        }
      ]
    }
    //put other routes here
  ]


  