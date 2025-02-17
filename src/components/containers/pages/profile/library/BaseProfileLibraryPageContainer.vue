<template>
  <BasePageContainer
    :isShowLoader="!libraryData"
    :isLoading="isLoading"
    :isError="!libraryData && !!error"
    :error="error"
    @refresh="handleRefresh"
  >
    <slot
      v-if="libraryData"
      :isLoading="isLoading"
      :error="error"
      :libraryData="libraryData"
      :profileId="profileId"
      :fetchData="fetchData"
      :handleRefresh="handleRefresh"
    ></slot>
  </BasePageContainer>
</template>

<script>
import BasePageContainer from '@/containers/BasePageContainer.vue'
import navigationMixin from '*/mixins/navigationMixin'
import formatProfileLibraryPageNavigation
  from '#/formatters/navigation/profile/library'
import formatProfileLibraryPageTab from '#/formatters/tabs/profile/library'
import fetchProfileLibraryData from '#/actions/api/profile/library/fetchData'
import fetchProfileLibrarySearchData
  from '#/actions/api/profile/library/search/fetchData'

export default {
  name: 'BaseProfileLibraryPageContainer',
  components: {
    BasePageContainer
  },
  mixins: [
    navigationMixin
  ],
  props: {
    profileId: {
      type: String,
      required: true
    },
    scope: String,
    responsePageLimit: Number,
    pageNameKey: String,
    query: String
  },
  data () {
    return {
      error: null,
      profileData: null,
      isLoading: false
    }
  },
  computed: {
    navigationSections () {
      return formatProfileLibraryPageNavigation(
        this.navigationData
      )
    },
    navigationData () {
      return {
        profileId: this.profileId,
        profileNickname: this.profileNicknameFetched,
        pageNameKey: this.pageNameKey
      }
    },
    tabData () {
      return formatProfileLibraryPageTab(
        this.navigationData
      )
    },
    profileNicknameFetched () {
      return this.profileData?.nickname
    },
    libraryDataArgs () {
      return {
        profileId: this.profileId,
        scope: this.scope,
        limit: this.responsePageLimit
      }
    },
    libraryData () {
      return this.profileData?.library
    }
  },
  watch: {
    profileData: 'handleNavigationDataChange',
    query: 'handleQueryChange'
  },
  mounted () {
    this.fetchData()
  },
  methods: {
    handleRefresh (page) {
      this.fetchData(page)
    },
    handleQueryChange () {
      this.fetchData()
    },
    fetchProfileLibraryData,
    fetchProfileLibrarySearchData,
    fetchData (page) {
      if (this.query) {
        this.fetchProfileLibrarySearchData({
          ...this.libraryDataArgs,
          query: this.query,
          page
        })
      } else {
        this.fetchProfileLibraryData({
          ...this.libraryDataArgs,
          page
        })
      }
    }
  }
}
</script>

<style lang="sass" scoped></style>
