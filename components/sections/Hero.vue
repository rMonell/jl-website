<template>
  <section class="hero p-6">
    <div class="hero__content flex items-center gap-6">
      <div ref="logo" class="hero__logo">
        <app-logo class="w-100" data-scroll data-scroll-speed="1" />
      </div>
      <div class="hero__headings">
        <h1 class="hero__headings__title" data-scroll data-scroll-speed="1">
          <app-append-text-transition :timeline="timeline" v-bind="TIMELINE_PROPERTIES">
            La force venue d’ailleurs
          </app-append-text-transition>
        </h1>
        <hr ref="separator" class="hero__headings__separator my-10" data-scroll data-scroll-speed="2">
        <div>
          <p data-scroll data-scroll-speed="2">
            <app-append-text-transition :timeline="timeline" v-bind="TIMELINE_PROPERTIES">
              <strong>Pas de liste sans fin</strong> pour vous étonner
            </app-append-text-transition>
          </p>
          <p data-scroll data-scroll-speed="2">
            <app-append-text-transition :timeline="timeline" v-bind="TIMELINE_PROPERTIES">
              <strong>Pas de témoignages</strong> pour vous épater
            </app-append-text-transition>
          </p>
          <p class="hero__headings__big-text" data-scroll data-scroll-speed="2">
            <app-append-text-transition :timeline="timeline" v-bind="TIMELINE_PROPERTIES">
              <strong>Seuls les résultats comptent</strong>
            </app-append-text-transition>
          </p>
        </div>
      </div>
    </div>
    <div class="hero__background-image">
      <div ref="background-image" class="hero__background-image__inset">
        <img src="~/assets/img/hero-background.webp" data-scroll data-scroll-speed="1">
      </div>
    </div>
  </section>
</template>

<script>
import { gsap, Expo } from "gsap"

const TIMELINE_PROPERTIES = {
  ease: Expo.easeInOut,
  duration: 1.6,
}

export default {
  name: "SectionsHero",
  data () {
    return {
      TIMELINE_PROPERTIES,
      timeline: gsap.timeline({ paused: true }),
    }
  },
  mounted () {
    this.timeline.add(
      gsap.fromTo(this.$refs.logo, { y: "50%", alpha: 0 }, { y: 0, alpha: 1, ...TIMELINE_PROPERTIES }),
      "<",
    )
    this.timeline.add(
      gsap.fromTo(this.$refs["background-image"], {
        y: "20%",
        scale: "1.2",
        rotate: 10,
        alpha: 0,
      }, {
        y: 0,
        scale: 1,
        rotate: 0,
        alpha: 1,
        ...TIMELINE_PROPERTIES,
        duration: TIMELINE_PROPERTIES.duration * 1.2,
      }),
      "<",
    )
    this.timeline.add(
      gsap.fromTo(this.$refs.separator, { width: 0 }, { width: "50px", ...TIMELINE_PROPERTIES }),
      "<",
    )
    this.timeline.play()
  },
}
</script>

<style lang="scss" scoped>
  .hero {
    position: relative;
    height: calc(100vh - $header-size);
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    @include screen-sm {
      height: calc(100vh - $header-size-small);
    }

    &__background-image {
      overflow: hidden;
      position: relative;
      top: 0;
      right: 0;
      width: 80vw;
      max-width: 1250px;
      position: absolute;
      transform: rotate(-140deg) translate(-10%, 40%);
      z-index: -1;

      &:after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: radial-gradient(50% 50% at 50% 50%, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0) 0.01%, #FFFFFF 100%);
      }

      &__inset {
        border: 2px solid #fff;
        outline: 2px solid #ffffff
      }
    }

    &__logo {
      max-width: 700px;
      width: 50vw;

      @include screen-sm {
        width: 80%;
      }
    }

    &__content {
      @include screen-sm {
        flex-direction: column;
        gap: 80px;
      }
    }

    &__headings {
      font-size: clamp(16px, 2vw, 24px);

      @include screen-sm {
        text-align: center;
      }

      &__title {
        font-family: $font-display;
        font-size: clamp(36px, 5vw, 80px);
        line-height: 1em;
      }

      &__separator {
        height: 4px;
        background-color: $color-content;

        @include screen-sm {
          margin-left: auto;
          margin-right: auto;
        }
      }

      &__big-text {
        margin-top: 16px;
        font-size: clamp(20px, 2vw, 30px);
      }
    }
  }
</style>