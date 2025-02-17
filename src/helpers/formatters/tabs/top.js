import i18n from '&/i18n'
import {
  main as formatTopMainLink,
  artists as formatTopArtistsLink,
  tracks as formatTopTracksLink,
  tags as formatTopTagsLink
} from '#/formatters/links/top'

export default function ({ pageNameKey }) {
  const formatTitle = () => {
    if (pageNameKey) {
      return i18n.global.t(
        `layout.navigation.top.${pageNameKey}`
      )
    } else {
      return i18n.global.t(
        'layout.navigation.tops'
      )
    }
  }

  const formatPath = () => {
    switch (pageNameKey) {
      case 'artists':
        return formatTopArtistsLink().path
      case 'tracks':
        return formatTopTracksLink().path
      case 'tags':
        return formatTopTagsLink().path
      default:
        return formatTopMainLink().path
    }
  }

  return {
    icon: 'arrow alternate circle up',
    title: formatTitle(),
    path: formatPath()
  }
}
