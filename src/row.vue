<template>
    <div class="row" :style="{marginLeft: -gutter/2+'px', marginRight: -gutter/2+'px'}">        <slot></slot>
    </div>
</template>
<script>
  export default {
    name: 'GuluRow',
    props: {
      gutter: {
        type: [Number, String]
      }
    },
    // created 只是创建没有放进组件
    created () {
      console.log('row created')
    },
    // mounted 创建后放进组件里了
    mounted () {
      console.log('row mounted')
      console.log(this.$children)
      this.$children.forEach((vm) => {
        vm.gutter = this.gutter
      })
    }
  }
  var div = document.createElement('div') // created 创建父亲
  var childDiv = document.createElement('div') // child created 创建儿子
  div.appendChild(childDiv) // child mounted 儿子放进父亲
  document.body.appendChild(div) // mounted 父亲带着儿子在body
</script>
<style scoped lang="scss">
    .row{
        display: flex;
    }
</style>

