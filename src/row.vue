<template>
    <div class="row" :style="rowStyle">
        <slot></slot>
    </div>
</template>
<script>
  export default {
    name: 'GuluRow',
    props: {
      gutter: {
        type: [Number, String]
      }},
    align: {
      type: String,
      validator (value) {
        return ['left', 'right', 'center'].includes(value)
      }
    },
    computed: {
      rowStyle() {
        let {gutter} = this
        return {marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px'}
      }
    },
    // mounted 创建后放进组件里了
    mounted () {
      this.$children.forEach((vm) => {
        vm.gutter = this.gutter
      })
    }
  }
</script>
<style scoped lang="scss">
    .row{
        display: flex;
    }
</style>

