
// 整个应用程序的入口就是 app.js

import Vue from 'vue'
import Button from './button'

Vue.component('g-button',Button)

new Vue({
    el:'#app',
})

