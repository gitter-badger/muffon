<template>
  <div class="post-image-container">
    <BaseImage
      :image="imageUrl"
    />

    <BaseButton
      class="red basic compact small delete-button"
      icon="close"
      :text="deleteFormatted"
      @click="handleDeleteButtonClick"
    />
  </div>
</template>

<script>
import BaseImage from '@/BaseImage.vue'
import BaseButton from '@/buttons/BaseButton.vue'

export default {
  name: 'ImageItem',
  components: {
    BaseImage,
    BaseButton
  },
  props: {
    imageData: {
      type: Object,
      required: true
    }
  },
  emits: [
    'deleteButtonClick'
  ],
  computed: {
    imageUrl () {
      return this.imageData.url
    },
    deleteFormatted () {
      return this.$t(
        'buttons.delete'
      )
    },
    uuid () {
      return this.imageData.uuid
    }
  },
  methods: {
    handleDeleteButtonClick () {
      this.$emit(
        'deleteButtonClick',
        { uuid: this.uuid }
      )
    }
  }
}
</script>

<style lang="sass" scoped>
.post-image-container
  @extend .text-align-center, .d-inline-block
  margin-right: 0.5em
  margin-bottom: 0.5em
  & > .image
    max-height: 100px
    margin-bottom: 0.5em

.delete-button
  @extend .no-margin
</style>
