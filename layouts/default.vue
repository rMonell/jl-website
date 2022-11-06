<template>
  <section class="default-layout">
    <the-header class="default-layout__header" />
    <main>
      <nuxt />
    </main>
  </section>
</template>

<script>
export default { name: "DefaultLayout" }
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