<template>
  <div class="content">
    <p
      v-html="goingFormatted"
    ></p>

    <p>
      <strong>
        {{ undoFormatted }}
      </strong>
    </p>

    <p>
      {{ sureFormatted }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'TextSection',
  props: {
    modelName: {
      type: String,
      required: true
    }
  },
  computed: {
    goingFormatted () {
      return this.$t(
        'shared.favorite.delete.going',
        { modelName: this.modelNameFormatted }
      )
    },
    modelNameFormatted () {
      return `<strong>${this.modelName}</strong>`
    },
    undoFormatted () {
      return this.$t(
        'modals.undo'
      )
    },
    sureFormatted () {
      return this.$t(
        'modals.sure'
      )
    }
  }
}
</script>

<style lang="sass" scoped></style>
