<template>
    <div class="row" :style="rowStyle">
        <slot></slot>
    </div>
</template>
<script>
  export default {
    name: 'Row',
    props: {
      gutter: {
        type: [Number, String]
      }},
    align: {
      type: String,
      validator (value) {
        return ['left', 'right', 'center'].indexOf(value) >= 0      }
    },
    computed: {
      rowStyle() {
        let {gutter} = this
        return {marginLeft: -gutter / 2 + 'px', marginRight: -gutter / 2 + 'px'}
      },
      rowClass () {
        let {align} = this
        return [align && `align-${align}`]
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
        flex-wrap: wrap;
        display: flex;
        &.align-left {
            justify-content: flex-start;
        }
        &.align-right {
            justify-content: flex-end;
        }
        &.align-center {
            justify-content: center;
        }
    }
</style>

