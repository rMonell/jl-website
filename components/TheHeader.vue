<template>
  <header class="the-header">
    <div class="the-header__container px-6 py-4">
      <section class="the-header__container__col the-header__appointment-container">
        <app-button label="Prendre rendez-vous" color="primary" />
      </section>
      <div class="the-header__container__col flex">
        <app-logo class="the-header__logo" />
      </div>
      <div v-if="isScreenLarge" class="the-header__container__col flex items-center">
        <div class="flex items-center">
          <app-phone-link hide-label />
          <app-divider :spacing="6" vertical />
          <app-mail-link hide-label />
        </div>
      </div>
    </div>
  </header>
</template>

<script>
const SMALL_SCREEN_BREAKPOINT = 720

export default {
  name: "TheHeader",
  data () {
    return { screenWidth: 0 }
  },
  computed: {
    isScreenLarge () {
      return this.screenWidth >= SMALL_SCREEN_BREAKPOINT
    },
  },
  mounted () {
    this.onWindowResize()
    window.addEventListener("resize", this.onWindowResize)
  },
  methods: {
    onWindowResize () {
      this.screenWidth = window.innerWidth
    },
  },
}
</script>

<style lang="scss" scoped>
.the-header {
  display: flex;
  justify-content: center;
  height: $header-size;
  border-bottom: 1px solid $color-content-clear;
  background-color: #fff;

  @include screen-sm {
    height: $header-size-small;
  }

  &__logo {
    height: 100%;
  }

  &__container {
    max-width: $container-lg;
    width: 100%;
    display: flex;
    align-items: center;
    height: 100%;

    @include screen-sm {
      padding-top: 8px;
      padding-bottom: 8px;
      flex-direction: row-reverse;
    }

    &__col {
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: calc(100% / 3);
      width: 100%;
      height: 100%;

      @include screen-sm {
        max-width: 100%;
      }

      &:first-child {
        justify-content: flex-start;

        @include screen-sm {
          justify-content: flex-end;
        }
      }
      &:last-child {
        justify-content: flex-end;

        @include screen-sm {
          justify-content: flex-start;
          flex: 0 0 60px;
        }
      }
    }
  }
}
</style>