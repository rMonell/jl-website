<template>
  <app-icon-link :to="`mailto:${mailAddress}`" icon-name="email" :label="hideLabel ? null : mailAddress" />
</template>

<script>
export default {
  name: "AppMailLink",
  props: {
    hideLabel: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return { mailAddress: "jl.marty2607@gmail.com" }
  },
}
</script>