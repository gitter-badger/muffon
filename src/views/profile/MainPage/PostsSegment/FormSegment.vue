<template>
  <BaseSegmentContainer>
    <BaseCreatePostContainer
      class="main-post-form"
      :profileId="profileId"
      :tracks="tracks"
      :images="images"
      @postDataChange="handlePostDataChange"
    >
      <BasePostContentField
        ref="input"
      />

      <BasePostImagesSection
        :images="images"
        @imagesChange="handleImagesChange"
      />

      <BasePostTracksSection
        :tracks="tracks"
        @tracksChange="handleTracksChange"
      />

      <div class="buttons-container">
        <BasePostAddButtonsSection
          :tracks="tracks"
          :images="images"
          @tracksChange="handleTracksChange"
          @imagesChange="handleImagesChange"
        />

        <BasePostSubmitButton
          class="submit-button"
        />
      </div>
    </BaseCreatePostContainer>
  </BaseSegmentContainer>
</template>

<script>
import BaseSegmentContainer from '@/containers/BaseSegmentContainer.vue'
import BaseCreatePostContainer
  from '@/containers/post/BaseCreatePostContainer.vue'
import BasePostContentField from '@/models/post/BasePostContentField.vue'
import BasePostImagesSection from '@/models/post/BasePostImagesSection.vue'
import BasePostTracksSection from '@/models/post/BasePostTracksSection.vue'
import BasePostAddButtonsSection
  from '@/models/post/BasePostAddButtonsSection.vue'
import BasePostSubmitButton from '@/models/post/BasePostSubmitButton.vue'

export default {
  name: 'FormSegment',
  components: {
    BaseSegmentContainer,
    BaseCreatePostContainer,
    BasePostContentField,
    BasePostImagesSection,
    BasePostTracksSection,
    BasePostAddButtonsSection,
    BasePostSubmitButton
  },
  props: {
    profileId: String
  },
  data () {
    return {
      tracks: [],
      images: []
    }
  },
  methods: {
    handlePostDataChange () {
      this.$refs.input.reset()

      this.tracks = []
      this.images = []

      this.$emit('add')
    },
    handleTracksChange (value) {
      this.tracks = value
    },
    handleImagesChange (value) {
      this.images = value
    }
  }
}
</script>

<style lang="sass" scoped></style>
