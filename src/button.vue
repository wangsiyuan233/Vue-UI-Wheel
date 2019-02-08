<!--通过 parcel ，我们知道了 单文件组件-->
<template>
    <!--:class="{[iconPosition]:true} 控制 icon 在左边还是在右边-->
    <button :class="{[`icon-${iconPosition}`]:true}" @click="$emit('click')"
            class="g-button">
        <!-- :name 是变量，是绑定JS的，是可以改变的； name 是字符串-->
        <g-icon :name="icon" class="icon" v-if="icon && !loading"></g-icon>
        <g-icon class="loading icon" name="loading" v-if="loading"></g-icon>
        <div class="g-button-content">            <!-- 神奇的地方：控制台里 “设置”两字 在 slot 的位置-->
            <slot></slot>
        </div>
    </button>
</template>

<script>
  import Icon from './icon'
  export default {
      components:{
        'g-icon':Icon
      },
    // props: ['icon', 'iconPosition']
    // 上面这种写法会生成 icon-undefined
    // 采用下面的写法，默认 icon 在左边
    props:{
      icon:{},
      loading:{
        type: Boolean,
        default: false
      },
      iconPosition:{
        type: String,
        default: 'left',
        // 属性检查器，防止奇怪需求
        validator(value){
          if(value !== 'left' && 'right'){
            return false
          }else{
            return true
          }
        }
      }
    }
  }

</script>

<style lang="scss" scoped>
    @import "var";
    .g-button { font-size: $font-size; height: $button-height; padding: 0 1em;
        border-radius: $border-radius; border: 1px solid $border-color;
        background: $button-bg;
        display: inline-flex; justify-content: center; align-items: center;
        vertical-align: middle;

        &:hover { border-color: $border-color-hover; }
        &:active { background-color: $button-active-bg; }
        &:focus {outline: none;}

        /*默认的 icon 位置*/
        > .icon { order: 1; margin-right: 0.1em}
        > .g-button-content { order: 2; }

        /*出现 icon-right 时的 icon 位置*/
        &.icon-right {
            > .g-button-content { order: 1; }
            > .icon {order: 2;margin-right: 0em;margin-left: 0.1em}
        }
    }

        /*loading 的样式*/
        @keyframes spin {
            0%{transform: rotate(0deg);}
            100%{transform: rotate(360deg);}
        }

        /*loading 动画*/
        .loading{
            animation: spin 2s infinite linear;
        }

        /*前进后退 button-group */


</style>