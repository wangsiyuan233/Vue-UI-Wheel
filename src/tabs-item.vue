<template>
    <div class="tabs-item" @click="onClick" :class="classes"  :data-name="name">
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
          active: this.active,
          disabled: this.disabled
        }
      }
    },
    created () {
      if (this.eventBus) {
        this.eventBus.$on('update:selected', (name) => {
          this.active = name === this.name;
        })
      }
    },
    methods: {
      // click 事件的 xxx
      onClick () {
        if (this.disabled) { return }
        this.eventBus && this.eventBus.$emit('update:selected', this.name, this)
        this.$emit('click', this)
      }
    }
  }
</script>
<style lang="scss" scoped>
    .tabs-item {
        $blue: blue;
        $disabled-text-color: grey;
        flex-shrink: 0;
        padding: 0 1em;
        cursor: pointer;
        height: 100%;
        display: flex;
        align-items: center;
        &.active {
            color: $blue;
            font-weight: bold;
        }
        &.disabled {
            color: $disabled-text-color;
            cursor: not-allowed;
        }
    }
</style>