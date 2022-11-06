<template>
  <section class="reassures p-6">
    <div class="reassures__container">
      <app-reassure
        class="reassures__item"
        icon-name="handshake"
        title="Un don à votre service"
        text="Que vous soyez humain ou animal"
      />
      <app-reassure
        class="reassures__item"
        icon-name="laptop"
        title="Je peux vous aider"
        text="En direct ou à distance"
      />
    </div>
  </section>
</template>

<script>
export default { name: "SectionsReassures" }
</script>

<style lang="scss" scoped>
.reassures {
  display: flex;
  justify-content: center;
  background-color: #FAF9FC;

  &__container {
    max-width: 980px;
    width: 100%;
    display: flex;
    justify-content: center;

    @include screen-sm {
      flex-direction: column;
      gap: 16px;
      align-items: center;
    }
  }
  &__item {
    max-width: 50%;
    width: 100%;
    display: flex;
    justify-content: center;

    @include screen-sm {
      max-width: 100%;
    }
  }
}
</style>