<template>
    <div class="g-button-group">
        <slot></slot>
    </div>
</template>

<script>
  export default {}
</script>

<style lang="scss" scoped>
    .g-button-group {
        display: inline-flex;
        vertical-align: middle;

        > .g-button {
            border-radius: 0;

            /*重合部分合并*/
            margin-left: -1px;
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