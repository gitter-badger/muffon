<template>
  <div class="the-visible-area-container">
    <div
      class="the-visible-area"
      ref="visible"
    ></div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'TheVisibleArea',
  mounted () {
    this.setVisibleContext(
      this.$refs.visible
    )
  },
  methods: {
    ...mapActions('layout', [
      'setVisibleContext'
    ])
  }
}
</script>

<style lang="sass" scoped>
.the-visible-area-container
  @extend .w-100, .fixed, .pointer-events-none
  height: calc(100vh - #{$navbarHeight} - #{$playerPanelHeight})
  top: $navbarHeight
  z-index: 10

.the-visible-area
  @extend .w-100, .h-100, .relative
</style>
