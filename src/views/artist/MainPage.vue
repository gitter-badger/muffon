<template>
  <BaseArtistPageContainer
    class="page-container"
    :artistName="artistName"
    @init="handleContainerInit"
  >
    <template #default="slotProps">
      <LeftColumn
        :artistData="slotProps.artistData"
        :scrollable="container"
      />
      <RightColumn
        :artistData="slotProps.artistData"
      />
    </template>
  </BaseArtistPageContainer>
</template>

<script>
import BaseArtistPageContainer
  from '@/containers/pages/artist/BaseArtistPageContainer.vue'
import LeftColumn from './MainPage/LeftColumn.vue'
import RightColumn from './MainPage/RightColumn.vue'

export default {
  name: 'MainPage',
  components: {
    BaseArtistPageContainer,
    LeftColumn,
    RightColumn
  },
  props: {
    artistName: String
  },
  data () {
    return {
      container: null
    }
  },
  methods: {
    handleContainerInit (el) {
      this.container = el
    }
  }
}
</script>

<style lang="sass" scoped>
.page-container
  @extend .d-flex
</style>
