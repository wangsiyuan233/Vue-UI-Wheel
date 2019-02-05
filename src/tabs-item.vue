<template>
    <div class="tabs-item" @click="xxx" :class="classes">
        <slot></slot>
    </div>
</template>
<script>
  export default {
    name: 'TabsItem',
    inject: ['eventBus'],
    data () {
      return {
        active: false
      }
    },
    // 如果你需要前端开发者传值，就用props,props就是你的弱餐
    props: {
      disabled: {
        type: Boolean,
        default: false
      },
      name: {
        type: String | Number,
        required: true
      }
    },
    computed: {
      classes () {
        return {
          active: this.active
        }
      }
    },
    created () {
      this.eventBus.$on('update:selected', (name) => {
        this.active = name === this.name;
      })
    },
    methods: {
      // click 事件的 xxx
      xxx () {
        this.eventBus.$emit('update:selected', this.name)
      }
    }
  }
</script>
<style lang="scss" scoped>
    .tabs-item {
        flex-shrink: 0;
        padding: 0 1em;
        &.active {
            background: red;
        }
    }
</style>