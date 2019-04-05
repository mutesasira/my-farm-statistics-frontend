//import Vue from 'vue';
//import VueRouter from 'vue-router';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/nprogress/nprogress.css';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
import 'vue-material/dist/vue-material.min.css';
import 'vue-material/dist/vue-material.min.css';
import home from './layouts/home';
import displayAssociation from './components/displayAssociation';
import login from './components/login';
import testTable from './components/testTable';



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
        
      ]
    },
    {
      path:"/testTable",
      component: testTable
    },
    {
      path:"/displayAssociation",
      component: displayAssociation
    },
    {
      path:"/login",
      component:login
    }
    //put other routes here
  ]


  