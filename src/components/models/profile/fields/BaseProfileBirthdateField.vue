<template>
  <div class="field">
    <div
      class="ui calendar"
      ref="calendar"
    >
      <div class="ui input left icon">
        <i class="calendar icon"></i>
        <input
          type="text"
          name="birthdate"
          :placeholder="placeholderFormatted"
        >
      </div>
    </div>
  </div>
</template>

<script>
import { setCalendar, setCalendarDate } from '#/actions/plugins/semantic'
import { birthdateCalendarOptions } from '#/data/plugins/semantic'

export default {
  name: 'BaseProfileBirthdateField',
  props: {
    value: String
  },
  computed: {
    placeholderFormatted () {
      return this.$t(
        'shared.profile.form.fields.birthdate'
      )
    }
  },
  mounted () {
    setCalendarDate(
      this.$refs.calendar,
      this.value
    )

    this.$nextTick(() => {
      setCalendar(
        this.$refs.calendar,
        birthdateCalendarOptions()
      )
    })
  }
}
</script>

<style lang="sass" scoped></style>
