<template>
  <BaseTransitionContainer
    class="transition hidden track-full-title"
    :scrollable="scrollable"
  >
    <BaseHeader
      tag="h4"
      :text="trackTitle"
    />

    <BaseLink
      :link="artistMainLinkFormatted"
      :text="artistName"
    />

    <BaseLinkContainer
      v-if="albumTitle"
      :link="albumMainLinkFormatted"
    >
      <div class="link main-small-container">
        <small>
          {{ albumTitle }}
        </small>
      </div>
    </BaseLinkContainer>
  </BaseTransitionContainer>
</template>

<script>
import BaseTransitionContainer from '@/containers/BaseTransitionContainer.vue'
import BaseHeader from '@/BaseHeader.vue'
import BaseLink from '@/BaseLink.vue'
import BaseLinkContainer from '@/containers/BaseLinkContainer.vue'
import { main as formatArtistMainLink } from '#/formatters/links/artist'
import { main as formatAlbumMainLink } from '#/formatters/links/album'
import formatAlbumSourceParams
  from '#/actions/api/album/formatters/requestData'

export default {
  name: 'TrackHeader',
  components: {
    BaseTransitionContainer,
    BaseHeader,
    BaseLink,
    BaseLinkContainer
  },
  props: {
    trackData: {
      type: Object,
      required: true
    },
    scrollable: HTMLDivElement
  },
  computed: {
    trackTitle () {
      return this.trackData.title
    },
    artistName () {
      return this.trackData.artist.name
    },
    albumTitle () {
      return this.albumData?.title
    },
    albumData () {
      return this.trackData.albums?.[0]
    },
    artistMainLinkFormatted () {
      return formatArtistMainLink({
        artistName: this.artistName
      })
    },
    albumMainLinkFormatted () {
      return formatAlbumMainLink({
        artistName: this.artistName,
        albumTitle: this.albumTitle,
        sourceParams: this.sourceParams
      })
    },
    sourceParams () {
      return formatAlbumSourceParams({
        sourceId: this.albumData.source_id,
        albumData: this.albumData,
        artistName: this.artistName
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.track-full-title
  @extend .text-align-center
</style>
