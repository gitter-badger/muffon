<template>
  <div
    class="ui segments main-segment-container"
    ref="segment"
  >
    <HeaderSegment
      v-if="headerTextKey"
      :profileId="profileId"
      :albumId="albumId"
      :headerTextKey="headerTextKey"
      :formatHeaderLink="formatHeaderLink"
      :scope="scope"
    />

    <slot
      :isLoading="isLoading"
      :error="error"
      :libraryAlbumData="libraryAlbumData"
      :artistId="artistIdFetched"
      :artistName="artistNameFetched"
      :fetchData="fetchData"
      :handleRefresh="handleRefresh"
    ></slot>
  </div>
</template>

<script>
import HeaderSegment
  from './BaseProfileLibraryAlbumSegmentContainer/HeaderSegment.vue'
import fetchLibraryAlbumData
  from '#/actions/api/profile/library/album/fetchData'
import { focusOnSegment } from '#/actions/layout'

export default {
  name: 'BaseProfileLibraryAlbumSegmentContainer',
  components: {
    HeaderSegment
  },
  props: {
    profileId: {
      type: String,
      required: true
    },
    albumId: {
      type: String,
      required: true
    },
    responsePageLimit: Number,
    headerTextKey: String,
    formatHeaderLink: Function,
    scope: String
  },
  data () {
    return {
      error: null,
      profileData: null,
      isLoading: false
    }
  },
  computed: {
    libraryAlbumDataArgs () {
      return {
        profileId: this.profileId,
        albumId: this.albumId,
        scope: this.scope,
        limit: this.responsePageLimit
      }
    },
    libraryAlbumData () {
      return this.profileData?.library?.album
    },
    artistIdFetched () {
      return this.libraryAlbumArtistData?.id?.toString()
    },
    libraryAlbumArtistData () {
      return this.libraryAlbumData?.artist
    },
    artistNameFetched () {
      return this.libraryAlbumArtistData?.name
    }
  },
  methods: {
    handleRefresh (page) {
      this.fetchData(page)
    },
    fetchLibraryAlbumData,
    fetchData (page) {
      this.fetchLibraryAlbumData({
        ...this.libraryAlbumDataArgs,
        page
      })
    },
    focus () {
      this.$nextTick(() => {
        focusOnSegment(
          this.$refs.segment
        )
      })
    }
  },
  mounted () {
    this.fetchData()
  }
}
</script>

<style lang="sass" scoped></style>
