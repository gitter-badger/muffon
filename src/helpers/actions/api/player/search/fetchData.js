import axios from 'axios'
import store from '&/store'
import { collection as formatCollection } from '#/formatters'
import { updateStore } from '#/actions'

export default function ({ query }) {
  const sourceId = store.state.player.sourceId
  const url = `/${sourceId}/search/tracks`

  const limit = 20
  const params = { query, limit }

  const handleSuccess = response => {
    const { tracks } = response.data.search

    const variantsFormatted = formatCollection(
      tracks.slice(0, limit)
    )

    store.dispatch(
      'player/setVariants',
      variantsFormatted
    )

    updateStore({
      'player.variants': variantsFormatted
    })
  }

  return axios
    .get(url, { params })
    .then(handleSuccess)
}
