<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>
<script>

  import Vue from 'vue'

  export default {
    name: 'Tabs',
    props: {
      // 双向同步
      selected: {
        type: String,
        required: true
      },
      direction: {
        type: String,
        // 默认是水平方向
        default: 'horizontal',
        // 做一下验证
        validator (value) {
          return ['horizontal', 'vertical'].indexOf(value) >= 0
        }
      }
    },
    data () {
      return {
        eventBus: new Vue()
      }
    },
    // 提供一个事件中心
    provide () {
      return {
        eventBus: this.eventBus
      }
    },
    mounted () {
      if (this.$children.length === 0) {
        console && console.warn &&
        console.warn('tabs的子组件应该是tabs-head和tabs-nav，但你没有写子组件')
      }
      this.$children.forEach((vm) => {
        if (vm.$options.name === 'GuluTabsHead') {
          vm.$children.forEach((childVm) => {
            if (childVm.$options.name === 'GuluTabsItem'
                && childVm.name === this.selected) {
              this.eventBus.$emit('update:selected', this.selected, childVm)
            }
          })
        }
      })
    }
  }
</script>
<style>
    .tabs {
    }
</style>