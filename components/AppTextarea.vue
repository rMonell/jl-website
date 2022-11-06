<template>
  <app-input v-model="localValue" class="app-textarea" :label="label" :style="inputStyle">
    <template #input="{ on, attrs }">
      <textarea
        ref="textarea"
        v-model="localValue"
        :rows="rows"
        v-bind="attrs"
        v-on="on"
      />
    </template>
  </app-input>
</template>

<script>
const LINE_HEIGHT = 24

export default {
  name: "AppTextarea",
  props: {
    value: {
      type: String,
      default: null,
    },
    label: {
      type: String,
      default: null,
    },
    rows: {
      type: Number,
      default: 2,
    },
  },
  computed: {
    localValue: {
      get () {
        return this.value
      },
      set (value) {
        this.$emit("input", value)
      },
    },
    inputMinHeight () {
      return this.rows * LINE_HEIGHT
    },
    inputStyle () {
      return {
        minHeight: this.inputMinHeight + "px",
        height: "auto",
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.app-textarea {
  ::v-deep {
    .app-input__label {
      top: 0;
      transform: none;
    }
  }
}
</style>