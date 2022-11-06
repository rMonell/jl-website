<template>
  <section class="default-layout">
    <the-header ref="header" class="default-layout__header" />
    <main>
      <nuxt />
    </main>
  </section>
</template>

<script>
import { gsap, Expo } from "gsap"

export default {
  name: "DefaultLayout",
  mounted () {
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
  &__header {
    position: sticky;
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