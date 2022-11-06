<template>
  <div class="app-input px-3" :class="inputClassList">
    <label v-if="showLabel" class="app-input__label p-3">{{ label }}</label>
    <slot name="input" v-bind="{ on: inputEvents, attrs: inputAttrs }">
      <input
        v-model="localValue"
        v-bind="inputAttrs"
        v-on="inputEvents"
      >
    </slot>
  </div>
</template>

<script>

export default {
  name: "AppInput",
  props: {
    value: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
  },
  data () {
    return { focused: false, onError: false }
  },
  computed: {
    showLabel () {
      return !this.value?.length
    },
    localValue: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit("input", value)
      },
    },
    inputClassList () {
      return {
        "app-input--focused": this.focused,
        "app-input--error": this.onError,
      }
    },
    inputStyle () {
      return {
        width: "100%",
        height: "100%",
        padding: "12px",
        margin: "0 -12px",
      }
    },
    inputAttrs () {
      return { style: this.inputStyle }
    },
    inputEvents () {
      return {
        focus: this.handleFocus,
        blur: this.handleBlur,
      }
    },
  },
  methods: {
    handleFocus () {
      this.focused = true
    },
    handleBlur () {
      this.focused = false
    },
  },
}
</script>

<style lang="scss" scoped>
.app-input {
  line-height: 24px;
  position: relative;
  background-color: rgba(228, 227, 238, .15);
  border: 1px solid $color-content-clear;
  height: 40px;
  border-radius: 10px;
  box-shadow: 0 0 0 1px $color-content-clear;
  transition: box-shadow .25s ease-in-out;

  &--focused {
    box-shadow: 0 0 0 2px $color-primary;
  }

  &__label {
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    opacity: .5;
    pointer-events: none;
  }
}
</style>