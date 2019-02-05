<template>
    <div class="tabs-body">
        <slot></slot>
    </div>
</template>
<script>
  export default {
    name: 'TabsBody',
    // 儿子辈的 eventBus
    inject: ['eventBus'],
    created(){
    }
  }
</script>
<style>
    .tabs-body {
    }
</style>