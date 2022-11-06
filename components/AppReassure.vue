<template>
  <article class="app-reassure">
    <div class="app-reassure__icon bg-primary">
      <app-icon :name="iconName" color="white" :filled="iconFilled" />
    </div>
    <div>
      <h2 class="app-reassure__title text-primary">
        <app-append-text-transition animate-on-scroll>
          {{ title }}
        </app-append-text-transition>
      </h2>
      <p class="app-reassure__text">
        <app-append-text-transition animate-on-scroll>
          {{ text }}
        </app-append-text-transition>
      </p>
    </div>
  </article>
</template>

<script>
export default {
  name: "AppReassure",
  props: {
    iconName: {
      type: String,
      required: true,
    },
    iconFilled: {
      type: Boolean,
      default: false,
    },
    title: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  data () {
    return { shouldTextAppend: false }
  },
}
</script>

<style lang="scss" scoped>
$icon-container-size: 50px;

.app-reassure {
  display: flex;
  gap: 20px;
  align-items: center;
  white-space: nowrap;

  &__icon {
    min-width: $icon-container-size;
    height: $icon-container-size;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
  }

  &__title {
    font-size: 24px;
    font-weight: 600;
  }

  &__text {
    opacity: .5;
  }
}
</style>