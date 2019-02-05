<template>
    <div class="tabs">
        <slot></slot>
    </div>
</template>
<script>
  export default {
    name: 'Tabs',
    props: {
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
    created () {
      // index.html 里面的 <g-tabs :selected.sync="selectedTab" > 会触发：
      // this.$emit('update:selected', 'xxx')
    }
  }
</script>
<style>
    .tabs {
    }
</style>