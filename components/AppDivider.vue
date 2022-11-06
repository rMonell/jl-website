<template>
  <hr role="separator" class="app-divider" :class="dividerClassList">
</template>

<script>

export default {
  name: "AppDivider",
  props: {
    spacing: {
      type: [String, Number],
      required: true,
      default: 4,
    },
    vertical: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    dividerClassList () {
      const normalizedSpacing = parseInt(this.spacing)
      return {
        "app-divider--vertical": this.vertical,
        [`mx-${normalizedSpacing}`]: this.vertical,
        [`my-${normalizedSpacing}`]: !this.vertical,
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.app-divider {
  border-color: $color-content-clear;
  border-width: 1px;

  &:not(&--vertical) {
    width: 100%;
    border-top-style: solid;
  }

  &--vertical {
    height: 100%;
    width: auto;
    border-left-style: solid;
    align-self: stretch;
    display: inline-flex;
    height: inherit;
    min-height: 100%;
    max-height: 100%;
  }
}
</style>