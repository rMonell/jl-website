<template>
  <span :class="iconClassList">
    {{ name }}
  </span>
</template>

<script>

export default {
  name: "AppIcon",
  props: {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "content",
    },
    filled: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    iconClassList () {
      const materialClassName = ["material-icons", this.filled ? null : "outlined"].filter(item => !!item).join("-")
      const textClassName = `text-${this.color}`
      return `${materialClassName} ${textClassName}`
    },
  },
}
</script>