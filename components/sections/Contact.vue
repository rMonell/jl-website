<template>
  <section class="contact p-6">
    <div class="contact__container">
      <div class="contact__headings">
        <h2 class="contact__headings__title">
          <app-append-text-transition animate-on-scroll>
            Contactez-moi
          </app-append-text-transition>
        </h2>
        <p class="contact__headings__text">
          <app-append-text-transition animate-on-scroll>
            Une question, une interrogation ?
          </app-append-text-transition>
        </p>
        <p class="contact__headings__text">
          <app-append-text-transition animate-on-scroll>
            N’hésitez pas à me contacter
          </app-append-text-transition>
        </p>
      </div>
      <app-divider :spacing="0" />
      <app-contact-form class="w-100" />
      <div class="contact__contact-links py-6 w-100">
        <app-phone-link class="contact__contact-links__link" />
        <app-mail-link class="contact__contact-links__link" />
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
}
</script>

<style scoped lang="scss">
.contact {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  &__container {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 80px;
    max-width: 980px;
    width: 100%;

    @include screen-sm {
      gap: 40px;
    }
  }

  &__headings {
    text-align: center;
    font-size: clamp(16px, 2vw, 20px);

    &__title {
      font-size: clamp(30px, 5vw, 60px);
      font-family: $font-display;
    }

    &__text {
      opacity: .5;
      width: 100%;
    }
  }

  &__contact-links {
    display: flex;
    align-items: center;
    border-top: 1px solid $color-content-clear;
    border-bottom: 1px solid $color-content-clear;
    gap: 12px;

    @include screen-sm {
      flex-direction: column;
    }

    &__link {
      max-width: 50%;
      width: 100%;
      display: flex;
      justify-content: center;

      @include screen-sm {
        max-width: 100%;
      }
    }
  }
}
</style>