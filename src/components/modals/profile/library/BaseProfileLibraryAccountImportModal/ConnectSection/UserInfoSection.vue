<template>
  <BaseListContainer class="user-info-section">
    <div class="item main-simple-list-item">
      <BaseImage
        class="circular bordered"
        :image="image"
      />

      <div class="content">
        <BaseHeader
          tag="h4"
          :text="nickname"
        />

        <div class="description main-small-container">
          <small>
            <i class="play icon"></i>
            <span>
              {{ playsCountFomatted }}
            </span>
          </small>
        </div>
      </div>
    </div>
  </BaseListContainer>
</template>

<script>
import BaseListContainer from '@/containers/BaseListContainer.vue'
import BaseImage from '@/BaseImage.vue'
import BaseHeader from '@/BaseHeader.vue'
import { number as formatNumber } from '#/formatters'

export default {
  name: 'UserInfoSection',
  components: {
    BaseListContainer,
    BaseImage,
    BaseHeader
  },
  props: {
    userData: {
      type: Object,
      required: true
    }
  },
  computed: {
    image () {
      return this.userData.image.small
    },
    nickname () {
      return this.userData.nickname
    },
    playsCountFomatted () {
      return formatNumber(
        this.playsCount
      )
    },
    playsCount () {
      return this.userData.plays_count
    }
  }
}
</script>

<style lang="sass" scoped>
.user-info-section
  @extend .no-margin
  margin-top: 1em !important
</style>
