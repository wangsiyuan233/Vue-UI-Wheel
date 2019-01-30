
// 整个应用程序的入口就是 app.js

import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)

new Vue({
    el:'#app',
    data:{loading1:false}
})


// 单元测试

import chai from 'chai'
import spies from 'chai-spies'

chai.use(spise)

const expect = chai.expect
try{
    {
        // 第一个 测试按钮含有 icon
        const Constructor= Vue.extend(Button)
        const vm = new Constructor({
            propsData:{
                icon:'settings'
            }
        })

        vm.$mount()
            let useElement = vm.$el.querySelector('use')
            let href = useElement.getAttribute('xlink:href')
            expect(href).to.eq('#i-settings')
            vm.$el.remove()
            vm.$destory()
    }

    {
        // 第二个 传入loading，就会显示小菊花
        const Constructor= Vue.extend(Button)
        const vm = new Constructor({
            propsData:{
                icon:'settings',
                loading:true
            }
        })

        vm.$mount()
        let useElement = vm.$el.querySelector('use')
        let href = useElement.getAttribute('xlink:href')
        expect(href).to.eq('#i-loading')
        vm.$el.remove()
        vm.$destory()
    }

    {
        // 第三个
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor= Vue.extend(Button)
        const vm = new Constructor({
            propsData:{
                icon:'settings'
            }
        })

        vm.$mount(div)
        let svg = vm.$el.querySelector('svg')
        let {order} =window.getComputedStyle(svg)
        expect(order).to.eq('1')
        vm.$el.remove()
        vm.$destory()
    }

    {
        // 第四个
        const div = document.createElement('div')
        document.body.appendChild(div)
        const Constructor= Vue.extend(Button)
        const vm = new Constructor({
            propsData:{
                icon:'settings',
                iconPosition: right
            }
        })

        vm.$mount(div)
        let svg = vm.$el.querySelector('svg')
        let {order} =window.getComputedStyle(svg)
        expect(order).to.eq('2')
        vm.$el.remove()
        vm.$destory()
    }

    {
        // 第五个 mock

        const Constructor = Vue.extend(Button)
        const vm = new Constructor({
            propsData: {
                icon: 'settings',
            }
        })

        vm.$mount()
        let spy = chai.spy(function () {
        })

        vm.$on('click', spy)

        // 希望这个函数被执行
        let button = vm.$el
        button.click()
        expect(spy).to.have.been.called()
    }
} catch(error){
    window.errors = [error]
} finally{
    window.errors && window.errors.forEach((error) =>{
        console.error(error.message)
    })
}
