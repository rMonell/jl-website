<template>
  <a class="app-icon-link flex items-center gap-3" :href="to" :class="{ 'app-icon-link--hide-label': ! label }">
    <app-icon :name="iconName" />
    <p v-if="label">{{ label }}</p>
  </a>
</template>

<script>
export default {
  name: "AppIconLink",
  props: {
    to: {
      type: String,
      required: true,
    },
    iconName: {
      type: String,
      required: true,
    },
    label: {
      type: String,
      default: null,
    },
  },
}
</script>

<style scoped lang="scss">
.app-icon-link {
  position: relative;
  z-index: 0;
  transition: color .2s ease;

  &:hover {
    color: $color-primary;
  }

  &--hide-label {
    &:hover:before {
      transform: translate(-50%, -50%) scale(1);
    }
    &:active:before {
      transform: translate(-50%, -50%) scale(0.8);
    }
    &:before {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%) scale(0);
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background-color: $color-content-clear;
      opacity: .4;
      z-index: -1;
      transition: transform .2s cubic-bezier(0.64, 0.57, 0.67, 1.53);
    }
  }
}
</style>