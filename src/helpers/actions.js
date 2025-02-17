import { ipcRenderer } from 'electron'
import store from '&/store'

export const updateStore = data => {
  return ipcRenderer.invoke(
    'update-store',
    JSON.stringify(data)
  )
}

export const updateTab = data => {
  const { tabId } = store.state.layout

  ipcRenderer.send(
    'update-tab',
    { tabId, data }
  )
}

export const setPlayerPlaying = value => {
  updateStore({
    'player.playing': value
  })

  const handleUpdateStore = () => {
    store.dispatch(
      'audio/setIsAutoplay',
      true
    )
  }

  updateStore({
    'audio.isAutoplay': false
  }).then(handleUpdateStore)
}
