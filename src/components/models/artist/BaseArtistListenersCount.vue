<template>
  <div
    v-if="isLoading"
    class="ui active mini inline loader"
  ></div>
  <div
    v-else
    class="main-small-container"
  >
    <small>
      <i class="user icon"></i>
      <span>
        {{ listenersCountFormatted }}
      </span>
    </small>
  </div>
</template>

<script>
import fetchArtistData from '#/actions/api/artist/fetchData'
import { number as formatNumber } from '#/formatters'

export default {
  name: 'BaseArtistListenersCount',
  props: {
    artistName: {
      type: String,
      required: true
    },
    listenersCount: Number
  },
  emits: [
    'loadEnd'
  ],
  data () {
    return {
      isLoading: false,
      error: null,
      artistData: null
    }
  },
  computed: {
    listenersCountFetched () {
      return (
        this.listenersCount ||
          this.artistData?.listeners_count ||
            0
      )
    },
    listenersCountFormatted () {
      return formatNumber(
        this.listenersCountFetched
      )
    },
    artistDataArgs () {
      return {
        artistName: this.artistName,
        scope: 'listeners_count'
      }
    }
  },
  watch: {
    listenersCountFetched: 'handleListenersCountFetchedChange'
  },
  mounted () {
    if (!this.listenersCount) {
      this.fetchData()
    }
  },
  methods: {
    handleListenersCountFetchedChange (value) {
      this.$emit('loadEnd', value)
    },
    fetchArtistData,
    fetchData () {
      this.fetchArtistData(
        this.artistDataArgs
      )
    }
  }
}
</script>

<style lang="sass" scoped></style>
