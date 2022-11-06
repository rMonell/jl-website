<template>
  <div class="app-append-text" v-bind="appendTextAttrs">
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
    animateOnScroll: {
      type: Boolean,
      default: false,
    },
  },
  data () {
    return { animated: false }
  },
  computed: {
    appendTextAttrs () {
      if (this.animateOnScroll) {
        return {
          "data-scroll": true,
          "data-scroll-call": this._uid,
        }
      }
      return {}
    },
  },
  mounted () {
    const animate = () => {
      if (this.animated) {
        return
      }
      this.animated = true
      const playAnimation = () => gsap.fromTo(this.$refs.text, { y: "100%" }, { y: 0, ease: this.ease, duration: this.duration })
      this.timeline ? this.timeline.add(playAnimation(), "<") : playAnimation()
    }
    if (this.animateOnScroll) {
      this.$locomotive.onInit(scroll => scroll.on("call", (componentUid) => {
        if (parseInt(componentUid) === this._uid) {
          animate()
        }
      }))
      return
    }
    animate()
  },
  methods: {},
}
</script>

<style scoped lang="scss">
.app-append-text {
  overflow: hidden;
}
</style>