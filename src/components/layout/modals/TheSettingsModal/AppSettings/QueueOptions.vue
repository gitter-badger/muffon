<template>
  <div class="main-settings-options-block">
    <BaseDivider
      :text="headerFormatted"
      isHorizontal
    />

    <AutoplayOption />
  </div>
</template>

<script>
import BaseDivider from '@/BaseDivider.vue'
import AutoplayOption from './QueueOptions/AutoplayOption.vue'

export default {
  name: 'QueueOptions',
  components: {
    BaseDivider,
    AutoplayOption
  },
  computed: {
    headerFormatted () {
      return this.$t(
        'layout.settings.sections.app.queue'
      )
    }
  }
}
</script>

<style lang="sass" scoped></style>
