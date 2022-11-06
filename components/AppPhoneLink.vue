<template>
  <app-icon-link :to="`tel:${phoneNumber}`" icon-name="phone" :label="hideLabel ? null : phoneNumber" />
</template>

<script>
export default {
  name: "AppPhoneLink",
  props: {
    hideLabel: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return { phoneNumber: "06 58 99 54 92" }
  },
}
</script>