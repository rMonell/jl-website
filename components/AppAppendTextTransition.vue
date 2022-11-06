<template>
  <div class="app-append-text">
    <div ref="text">
      <slot />
    </div>
  </div>
</template>

<script>
import { gsap, Expo } from "gsap"

export default {
  name: "AppAppendTextTransition",
  props: {
    timeline: {
      type: Object,
      default: null,
    },
    ease: {
      type: Function,
      default: Expo.easeInOut,
    },
    duration: {
      type: Number,
      default: 1,
    },
  },
  mounted () {
    if (this.timeline) {
      this.timeline.add(
        gsap.fromTo(this.$refs.text, { y: "100%" }, { y: 0, ease: this.ease, duration: this.duration }),
        "<",
      )
      return
    }
    gsap.fromTo(this.$refs.text, { y: "100%" }, { y: 0, ease: this.ease, duration: this.duration })
  },
  methods: {},
}
</script>

<style scoped lang="scss">
.app-append-text {
  overflow: hidden;
}
</style>