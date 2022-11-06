<template>
  <button :class="buttonClassList" class="app-button px-5" @click="$emit('click')">
    <label class="app-button__label">{{ label }}</label>
  </button>
</template>

<script>
export default {
  name: "AppButton",
  props: {
    label: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "primary",
    },
  },
  computed: {
    buttonClassList () {
      return { [`bg-${this.color}`]: this.color }
    },
  },
}
</script>

<style scoped lang="scss">
.app-button {
  position: relative;
  height: 34px;
  border-radius: 5px;
  color: #fff;
  padding: 0 16px;
  text-align: center;
  cursor: pointer;

  &:hover {
    &:after {
      opacity: .1;
    }
  }

  &:active {
    &:after {
      opacity: .3;
    }
  }

  &:after {
    content: '';
    background-color: #000;
    opacity: 0;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    transition: opacity .2s ease;
    z-index: 0;
  }

  &__label {
    position: relative;
    z-index: 10;
  }
}
</style>