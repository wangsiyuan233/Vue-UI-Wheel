<template>
    <!-- v-if 是用来判断有没有 svg 的，如果没有 svg，字样就是居中的-->
    <svg class="g-icon">
        <!--第一个 : 是 v-bind 的缩写；反引号表示里面的内容是 js 字符串-->
        <!--结合 index.html 我们可以知道：用户只用输入 settings ，我们就匹配了 icon-->
        <use :xlink:href=`#i-${name}`></use>
    </svg>
</template>

<script>
  export default {
    props: ['name']
  }
</script>

<style lang="scss" scoped>
    .g-icon {
        width: 1em;
        height: 1em;
    }
</style>