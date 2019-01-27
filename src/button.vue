<!--通过 parcel ，我们知道了 单文件组件-->
<template>
    <!--:class="{[iconPosition]:true} 控制 icon 在左边还是在右边-->
    <button :class="{[`icon-${iconPosition}`]:true}" class="g-button">
        <!-- v-if 是用来判断有没有 svg 的，如果没有 svg，字样就是居中的-->
        <svg class="icon" v-if="icon">
            <!--第一个 : 是 v-bind 的缩写；反引号表示里面的内容是 js 字符串-->
            <!--结合 index.html 我们可以知道：用户只用输入 settings ，我们就匹配了 icon-->
            <use :xlink:href=`#i-${icon}`></use>
        </svg>
        <div class="content">
            <!-- 神奇的地方：控制台里 “设置”两字 在 slot 的位置-->
            <slot></slot>
        </div>
    </button>
</template>

<script>
  export default {
    props: ['icon', 'iconPosition']
  }

</script>

<style lang="scss">
    .g-button {
        font-size: var(--front-size);
        height: var(--botton-height);
        padding: 0 1em;
        border-radius: var(--border-radius);
        border: 1px solid var(--border-color);
        background: var(--button-bg);

        &:hover {
            border-color: var(--border-color-hover);
        }

        &:active {
            background-color: var(--button-active-bg);
        }

        &:focus {
            outline: none;
        }

        display: inline-flex;
        justify-content: center;
        align-items: center;
        vertical-align: middle;

        /*默认的 icon 位置*/
        > .icon { order: 1; margin-right: 0.1em}
        > .content {order: 2;}

        /*出现 icon-right 时的 icon 位置*/
        &.icon-right {
            > .icon {order: 2;margin-right: 0em;margin-left: 0.1em}
            > .content{order:1;}
        }
    }

</style>