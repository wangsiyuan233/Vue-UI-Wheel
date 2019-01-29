
// 整个应用程序的入口就是 app.js

import Vue from 'vue'
import Button from './button'
import Icon from './icon'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)

new Vue({
    el:'#app',
})

