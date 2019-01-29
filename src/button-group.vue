<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>

<script>
  export default {
    // 可以控制一下用户，不要让他们输入奇怪的标签，影响使用，只能用 button 标签
    mount() {
      for(let node of this.$el.children){
        if (node.nodeName.toLocaleLowerCase() !== 'button'){
            console.warn('傻了吧，button-group 里面的标签必须是 button')
        }

      }
    }
  }
</script>

<style lang="scss">
    .g-button-group {
        display: inline-flex;
        vertical-align: middle;

        > .g-button {
            border-radius: 0;

            /*重合部分合并*/
            &:not(first-child){
                margin-left: -1px;
            }
            /* 要让按钮的四条边框都浮现出来*/
            &:hover{
                position: relative;
                z-index: 1;
            }

            &:first-child {
                border-top-left-radius: var(--border-radius);
                border-bottom-left-radius: var(--border-radius);
            }

            &:last-child {
                border-top-right-radius: var(--border-radius);
                border-bottom-right-radius: var(--border-radius);
            }
        }
    }
</style>