<template>
  <span v-if="index">, </span>

  <BaseLink
    :link="artistMainLinkFormatted"
    :text="artistName"
    @click="handleClick"
  />
</template>

<script>
import BaseLink from '@/BaseLink.vue'
import { main as formatArtistMainLink } from '#/formatters/links/artist'
import {
  main as formatProfileLibraryArtistMainLink
} from '#/formatters/links/profile/library/artist'

export default {
  name: 'ArtistLink',
  components: {
    BaseLink
  },
  props: {
    artistData: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    },
    isLinkToLibrary: Boolean,
    profileId: String,
    artistId: String
  },
  emits: [
    'linkClick'
  ],
  computed: {
    artistMainLinkFormatted () {
      if (this.isLinkToLibrary) {
        return formatProfileLibraryArtistMainLink({
          profileId: this.profileId,
          artistId: this.artistId
        })
      } else {
        return formatArtistMainLink({
          artistName: this.artistName
        })
      }
    },
    artistName () {
      return this.artistData.name
    }
  },
  methods: {
    handleClick () {
      this.$emit('linkClick')
    }
  }
}
</script>

<style lang="sass" scoped></style>
