<template>
  <BaseSegmentContainer>
    <BaseHeaderContainer tag="h3">
      <BaseLink
        v-if="formatHeaderLink"
        :link="linkFormatted"
        :text="headerFormatted"
      />
      <template v-else>
        {{ headerFormatted }}
      </template>
    </BaseHeaderContainer>
  </BaseSegmentContainer>
</template>

<script>
import BaseSegmentContainer from '@/containers/BaseSegmentContainer.vue'
import BaseHeaderContainer from '@/containers/BaseHeaderContainer.vue'
import BaseLink from '@/BaseLink.vue'

export default {
  name: 'HeaderSegment',
  components: {
    BaseSegmentContainer,
    BaseHeaderContainer,
    BaseLink
  },
  props: {
    headerTextKey: {
      type: String,
      required: true
    },
    formatHeaderLink: Function,
    artistName: String,
    trackTitle: String
  },
  computed: {
    headerFormatted () {
      return this.$t(
        `layout.navigation.${this.headerTextKey}`
      )
    },
    linkFormatted () {
      return this.formatHeaderLink({
        artistName: this.artistName,
        trackTitle: this.trackTitle
      })
    }
  }
}
</script>

<style lang="sass" scoped></style>
