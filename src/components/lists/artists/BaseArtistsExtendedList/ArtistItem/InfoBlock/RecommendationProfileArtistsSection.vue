<template>
  <BaseDivider />

  <BaseHeader
    tag="h4"
    :text="headerFormatted"
  />

  <BasePaginatedContainer
    class="profile-artists-list"
    scope="artists"
    :responsePageLimit="limit"
    :clientPageLimit="limit"
    :responseData="profileArtistsData"
  >
    <template #default="slotProps">
      <BaseArtistsSimpleList
        :artists="slotProps.artists"
        :profileId="profileId"
        isImageSmall
        isLinkToLibrary
      />
    </template>
  </BasePaginatedContainer>

  <div
    v-if="isMore"
    class="more-container"
  >
    <strong
      class="main-link"
      @click="handleMoreClick"
    >
      {{ moreFormatted }}
    </strong>

    <BaseRecommendationProfileArtistsModal
      ref="modal"
      :recommendationId="recommendationId"
      :profileId="profileId"
    />
  </div>
</template>

<script>
import BaseDivider from '@/BaseDivider.vue'
import BaseHeader from '@/BaseHeader.vue'
import BasePaginatedContainer from '@/containers/BasePaginatedContainer.vue'
import BaseArtistsSimpleList from '@/lists/artists/BaseArtistsSimpleList.vue'
import BaseRecommendationProfileArtistsModal
  from '@/modals/recommendation/BaseRecommendationProfileArtistsModal.vue'

export default {
  name: 'RecommendationProfileArtistsSection',
  components: {
    BaseDivider,
    BaseHeader,
    BasePaginatedContainer,
    BaseArtistsSimpleList,
    BaseRecommendationProfileArtistsModal
  },
  props: {
    recommendationData: {
      type: Object,
      required: true
    },
    profileId: String
  },
  data () {
    return {
      limit: 5
    }
  },
  computed: {
    headerFormatted () {
      return this.$t(
        'shared.recommendation.similar',
        { count: this.profileArtistsCount }
      )
    },
    profileArtistsCount () {
      return this.recommendationData.profile_artists_count
    },
    profileArtistsData () {
      return {
        page: 1,
        total_pages: 1,
        artists: this.profileArtists
      }
    },
    profileArtists () {
      return this.recommendationData.profile_artists
    },
    isMore () {
      return this.profileArtistsCount > 5
    },
    moreFormatted () {
      return this.$t(
        'shared.more'
      )
    },
    recommendationId () {
      return this.recommendationData.id.toString()
    }
  },
  methods: {
    handleMoreClick () {
      this.$refs.modal.show()
    }
  }
}
</script>

<style lang="sass" scoped>
.profile-artists-list
  margin-top: 0.5em

.more-container
  text-align: right
</style>
