<template>
  <div class="main-library-modal-complete-section">
    <template v-if="isError">
      <RetrySection
        v-if="errorTracks.length"
        :errorTracks="errorTracks"
        @retry="handleRetryButtonClick"
      />
    </template>

    <BaseMessage
      v-else
      class="success"
      :icons="['check']"
      :header="successMessageHeaderFormatted"
    />
  </div>
</template>

<script>
import RetrySection from './CompleteSection/RetrySection.vue'
import BaseMessage from '@/BaseMessage.vue'
import { number as formatNumber } from '#/formatters'

export default {
  name: 'CompleteSection',
  components: {
    RetrySection,
    BaseMessage
  },
  props: {
    isError: Boolean,
    totalCount: Number,
    errorTracks: Array
  },
  emits: [
    'retry'
  ],
  computed: {
    successMessageHeaderFormatted () {
      return this.$t(
        'shared.add.save.success.tracks',
        { count: this.totalCountFormatted }
      )
    },
    totalCountFormatted () {
      return formatNumber(
        this.totalCount
      )
    }
  },
  methods: {
    handleRetryButtonClick () {
      this.$emit('retry')
    }
  }
}
</script>

<style lang="sass" scoped></style>
