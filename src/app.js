
// 整个应用程序的入口就是 app.js

import Vue from 'vue/dist/vue.js'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'
import Toast from './toast'
import plugin from './plugin'


Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-layout', Layout)
Vue.component('g-header', Header)
Vue.component('g-content', Content)
Vue.component('g-footer', Footer)
Vue.component('g-sider', Sider)
Vue.component('g-toast', Toast)
// 用户自己要求使用 plugin 插件
Vue.use(plugin)
import createElement from 'vue'
const h = createElement


new Vue({
    el:'#app',
    data:{loading1:false},
    created(){
        this.$toast('文字', {
            enableHtml: false
        })
    },
    methods:{
        showToast(){
        }
    }
})
