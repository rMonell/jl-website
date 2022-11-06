<template>
  <form class="contact-form gap-6" @submit.prevent="handleSubmit">
    <div class="contact-form__row gap-6">
      <app-text-field v-model="emailAddress" label="Adresse e-mail" class="contact-form__row__item" />
      <app-text-field v-model="object" label="Objet" class="contact-form__row__item" />
    </div>
    <app-textarea v-model="message" :rows="6" label="Message" />
    <app-button color="primary" label="Envoyez votre message" class="w-100" />
  </form>
</template>

<script>
export default {
  name: "AppContactForm",
  data () {
    return { emailAddress: null, object: null, message: null }
  },
  computed: {
    buttonClassList () {
      return { [`bg-${this.color}`]: this.color }
    },
  },
  methods: {
    handleSubmit () {

    },
  },
}
</script>

<style scoped lang="scss">
.contact-form {
  display: flex;
  flex-direction: column;

  &__row {
    display: flex;
    width: 100%;

    @include screen-sm {
      flex-direction: column;
    }

    &__item {
      max-width: 50%;
      width: 100%;
      min-width: 250px;

     @include screen-sm {
        max-width: 100%;
      }
    }
  }
}
</style>