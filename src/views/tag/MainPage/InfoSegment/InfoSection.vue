<template>
  <div>
    <div class="tag-header-container">
      <BaseHeaderContainer
        tag="h1"
        class="inverted tag-header"
        icon="tag"
      >
        {{ tagName }}
      </BaseHeaderContainer>
    </div>

    <BaseCounters
      :taggersCount="taggersCount"
      :taggingsCount="taggingsCount"
    />

    <SimilarSection :tagName="tagName" />

    <template v-if="description">
      <BaseDivider isInverted />

      <BaseTagDescription
        class="tag-description"
        :description="description"
        :tagName="tagName"
        :isMore="isMoreDescription"
      />
    </template>
  </div>
</template>

<script>
import BaseHeaderContainer from '@/containers/BaseHeaderContainer.vue'
import SimilarSection from './InfoSection/SimilarSection.vue'
import BaseCounters from '@/BaseCounters.vue'
import BaseDivider from '@/BaseDivider.vue'
import BaseTagDescription from '@/models/tag/BaseTagDescription.vue'

export default {
  name: 'InfoSection',
  components: {
    BaseHeaderContainer,
    SimilarSection,
    BaseCounters,
    BaseDivider,
    BaseTagDescription
  },
  props: {
    tagData: {
      type: Object,
      required: true
    }
  },
  computed: {
    tagName () {
      return this.tagData.name
    },
    taggersCount () {
      return this.tagData.taggers_count
    },
    taggingsCount () {
      return this.tagData.taggings_count
    },
    description () {
      return this.tagData.description
    },
    isMoreDescription () {
      return this.tagData.with_more.description
    }
  }
}
</script>

<style lang="sass" scoped>
.tag-header-container
  margin-bottom: 1.5em

.tag-header
  font-size: 2.5rem !important
  ::v-deep(.icon)
    font-size: 0.75em !important

::v-deep(.tag-description)
  @extend .text-color-white
</style>
