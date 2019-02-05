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
      // this.$emit('update:selected', '这是 this $emit 出来的数据')
      this.eventBus.$emit('update:selected', this.selected)
      // // this.$emit('update:selected', 'xxx')
    }
  }
</script>
<style>
    .tabs {
    }
</style>