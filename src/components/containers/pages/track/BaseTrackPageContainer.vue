<template>
  <BasePageContainer
    :isShowLoader="!trackData"
    :isLoading="isLoading"
    :isError="!trackData && !!error"
    :error="error"
    @refresh="handleRefresh"
  >
    <slot
      v-if="trackData"
      :isLoading="isLoading"
      :error="error"
      :trackData="trackData"
      :fetchData="fetchData"
      :handleRefresh="handleRefresh"
      :profileId="profileId"
    ></slot>
  </BasePageContainer>
</template>

<script>
import { mapState } from 'vuex'
import BasePageContainer from '@/containers/BasePageContainer.vue'
import navigationMixin from '*/mixins/navigationMixin'
import formatTrackPageNavigation from '#/formatters/navigation/track'
import formatTrackPageTab from '#/formatters/tabs/track'
import fetchTrackData from '#/actions/api/track/fetchData'
import fetchBandcampTrackIdData
  from '#/actions/api/track/id/bandcamp/fetchData'

export default {
  name: 'BaseTrackPageContainer',
  components: {
    BasePageContainer
  },
  mixins: [
    navigationMixin
  ],
  provide () {
    return {
      setRequestTrackData: this.setRequestTrackData,
      resetRequestTrackData: this.resetRequestTrackData
    }
  },
  props: {
    artistName: {
      type: String,
      required: true
    },
    trackTitle: {
      type: String,
      required: true
    },
    sourceParams: {
      type: Object,
      required: true
    },
    scope: String,
    responsePageLimit: Number,
    pageNameKey: String
  },
  data () {
    return {
      error: null,
      requestTrackData: null,
      trackData: null,
      isLoading: false
    }
  },
  computed: {
    ...mapState('profile', {
      profileInfo: 'info'
    }),
    profileId () {
      return this.profileInfo.id.toString()
    },
    navigationSections () {
      return formatTrackPageNavigation(
        this.navigationData
      )
    },
    navigationData () {
      return {
        artistName: this.artistNameFetched,
        trackTitle: this.trackTitleFetched,
        sourceParams: this.sourceParams,
        pageNameKey: this.pageNameKey
      }
    },
    tabData () {
      return formatTrackPageTab(
        this.navigationData
      )
    },
    artistNameFetched () {
      return this.trackData?.artist?.name
    },
    trackTitleFetched () {
      return this.trackData?.title
    },
    trackDataArgs () {
      return {
        ...this.requestTrackData,
        scope: this.scope,
        limit: this.responsePageLimit
      }
    }
  },
  watch: {
    requestTrackData: 'handleRequestTrackDataChange',
    trackData: 'handleNavigationDataChange'
  },
  mounted () {
    this.resetRequestTrackData()
  },
  methods: {
    handleRefresh (page) {
      this.fetchData(page)
    },
    handleRequestTrackDataChange () {
      this.fetchData()
    },
    fetchBandcampTrackIdData,
    fetchTrackData,
    resetRequestTrackData () {
      this.setRequestTrackData(
        this.sourceParams
      )
    },
    setRequestTrackData (value) {
      if (this.isFetchBandcampTrackIdData(value)) {
        this.fetchBandcampTrackIdData(value)
      } else {
        this.requestTrackData = value
      }
    },
    isFetchBandcampTrackIdData (value) {
      return (
        value.sourceId === 'bandcamp' &&
          !(
            value.trackId &&
              value.artistId
          )
      )
    },
    fetchData (page) {
      this.fetchTrackData({
        ...this.trackDataArgs,
        page
      })
    }
  }
}
</script>

<style lang="sass" scoped></style>
