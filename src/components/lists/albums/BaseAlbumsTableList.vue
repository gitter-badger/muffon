<template>
  <div :class="[
    'ui',
    columnWidth,
    'column grid'
  ]">
    <div
      v-for="albumData in albumsFormatted"
      class="column"
      :key="albumData.uuid"
    >
      <AlbumItem
        :albumData="albumData"
        :artistName="artistName"
        :isWithArtistName="isWithArtistName"
        :isWithListenersCount="isWithListenersCount"
        :isWithTracksCount="isWithTracksCount"
        :isLinkToLibrary="isLinkToLibrary"
        :profileId="profileId"
        :isWithLibraryOption="isWithLibraryOption"
        :isWithFavoriteOption="isWithFavoriteOption"
        :isWithBookmarkOption="isWithBookmarkOption"
        :isWithListenedOption="isWithListenedOption"
        :isWithDeleteOption="isWithDeleteOption"
      />
    </div>
  </div>
</template>

<script>
import AlbumItem from './BaseAlbumsTableList/AlbumItem.vue'
import { collection as formatCollection } from '#/formatters'
import { numberToColumnWidth } from '#/actions/plugins/semantic'

export default {
  name: 'BaseAlbumsTableList',
  components: {
    AlbumItem
  },
  props: {
    itemsInRow: {
      type: Number,
      required: true
    },
    albums: {
      type: Array,
      default () {
        return []
      }
    },
    artistName: String,
    isWithArtistName: Boolean,
    isWithListenersCount: Boolean,
    isWithTracksCount: Boolean,
    isLinkToLibrary: Boolean,
    profileId: String,
    isWithLibraryOption: Boolean,
    isWithFavoriteOption: Boolean,
    isWithBookmarkOption: Boolean,
    isWithListenedOption: Boolean,
    isWithDeleteOption: Boolean
  },
  computed: {
    albumsFormatted () {
      return formatCollection(this.albums)
    },
    columnWidth () {
      return numberToColumnWidth(this.itemsInRow)
    }
  }
}
</script>

<style lang="sass" scoped></style>
