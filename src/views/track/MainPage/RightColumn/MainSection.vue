<template>
  <BaseTrackHorizontalCardContainer
    class="track-card"
  >
    <TrackMainInfo
      :trackTitle="trackTitle"
      :artistName="artistName"
      :albumData="albumData"
    />

    <BaseTrackPlayerPanel
      :trackData="trackData"
    />
  </BaseTrackHorizontalCardContainer>
</template>

<script>
import BaseTrackHorizontalCardContainer
  from '@/containers/track/BaseTrackHorizontalCardContainer.vue'
import TrackMainInfo from './MainSection/TrackMainInfo.vue'
import BaseTrackPlayerPanel from '@/models/track/BaseTrackPlayerPanel.vue'

export default {
  name: 'MainSection',
  components: {
    BaseTrackHorizontalCardContainer,
    TrackMainInfo,
    BaseTrackPlayerPanel
  },
  props: {
    trackData: {
      type: Object,
      required: true
    }
  },
  computed: {
    trackTitle () {
      return this.trackData.title
    },
    artistName () {
      return this.trackData.artist.name
    },
    albumData () {
      return this.trackData.albums?.[0]
    }
  }
}
</script>

<style lang="sass" scoped>
::v-deep(.content)
  @extend .no-padding, .flex-column
</style>
