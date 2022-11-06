<template>
  <section class="default-layout">
    <the-header ref="header" class="default-layout__header" />
    <main ref="scroll" class="default-layout__content">
      <nuxt />
    </main>
  </section>
</template>

<script>
import { gsap, Expo } from "gsap"

export default {
  name: "DefaultLayout",
  mounted () {
    this.$locomotive.init(this.$refs.scroll)
    gsap.fromTo(this.$refs.header.$el, { y: "-100%" }, {
      y: 0,
      ease: Expo.easeInOut,
      duration: 1.5,
    })
  },
}
</script>

<style lang="scss" scoped>
.default-layout {
  display: flex;
  flex-direction: column;

  &__header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
  }

  &__content {
    height: 100%;
    overflow: auto;
    padding-top: $header-size;

    @include screen-sm {
      padding-top: $header-size-small;
    }
  }
}
</style>