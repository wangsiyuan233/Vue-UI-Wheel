<!--通过 parcel ，我们知道了 单文件组件-->

<template>
    <button class="g-button">按钮</button>

</template>

<script>
    export default {
        // name: "button.vue"
    }

</script>

<style lang="scss">
    *{margin:0;padding:0;box-sizing: border-box;}
    /*root 的兼容性问题 ： 网址caniuse，root 其实就是 html */
    :root{
        --botton-height:32px;
        --front-size:14px;
        --button-bg: white;
        --button-active-bg: #eee;
        --border-radius: 4px;
        --color: #333;
        --border-color: #999;
        --border-color-hover: #666;
    }
    #app {
        margin: 20px;
    }
    body {
        font-size: var(--font-size);
    }

    .g-button{
        font-size:var(--front-size);
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
    }

</style>