<template>
  <app-input v-model="localValue" :label="label" />
</template>

<script>
export default {
  name: "AppTextField",
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
  computed: {
    localValue: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit("input", value)
      },
    },
  },
}
</script>