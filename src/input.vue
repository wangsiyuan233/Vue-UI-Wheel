<template>
    <div class="wrapper" :class="{error}">
        <!--监听原生input的change事件触发了自己的（$event)的 change事件-->
        <!--$emit(事件名，传给事件接受者的第一个参数，传给事件接受者的第二个参数)-->
        <input :value="value" type="text" :disabled="disabled" :readonly="readonly"
        @change="$emit('change',$event.target.value)" @input="$emit('change',$event.target.value)"
        @focus="$emit('change',$event.target.value)" @blur="$emit('change',$event.target.value)">
        <template v-if="error">
            <icon name="error" class="icon-error"></icon>
            <span class="errorMessage">{{error}}</span>
        </template>
    </div>
</template>
<script>
  import Icon from './icon'
  export default {
    components: {Icon},
    name: 'Input',
    props: {
      value: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      },
      error: {
        type: String
      }
    }
  }
</script>
<style lang="scss" scoped>
    @import "var";
    .wrapper { font-size: $font-size; display: inline-flex;
        align-items: center;
        > :not(:last-child) {margin-right: .5em; }
        > input { height: 32px; border: 1px solid $border-color; border-radius: 4px; padding: 0 8px; font-size: inherit;
            &:hover { border-color: $border-color-hover; }
            &:focus { box-shadow: inset 0 1px 3px $box-shadow-color; outline: none; }
            &[disabled], &[readonly] {border-color: #bbb;color: #bbb;cursor: not-allowed; }
        }
        &.error {
            > input { border-color: $red; }
        }
        .icon-error { fill: $red; }
        .errorMessage { color: $red; }
    }
</style>