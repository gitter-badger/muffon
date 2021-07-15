export const messages = {
  en: {
    layout: {
      navigation: {
        start: 'Start',
        artists: 'Artists',
        tags: 'Tags',
        videos: 'Video',
        artist: {
          images: 'Images',
          tracks: 'Tracks',
          albums: 'Albums',
          similar: 'Similar'
        },
        track: {
          similar: 'Similar'
        },
        tag: {
          artists: 'Artists',
          albums: 'Albums',
          tracks: 'Tracks'
        },
        video: {
          channel: {
            videos: 'Videos'
          }
        }
      },
      search: {
        input: {
          placeholder: 'Enter something...'
        },
        tabs: {
          artists: 'Artists',
          albums: 'Albums',
          tracks: 'Tracks',
          tags: 'Tags'
        }
      },
      player: {
        variants: 'Variants ({number})'
      }
    },
    errors: {
      badRequest: {
        header: 'Bad request',
        content: 'Please make a request with valid data.'
      },
      notFound: {
        header: 'Nothing was found',
        content: 'Please try looking for something else.'
      },
      internalServer: {
        header: 'Internal server error',
        content: 'Please contact us for information.'
      },
      badGateway: {
        header: 'Remote server error',
        content: 'Please try again in a moment.'
      },
      gatewayTimeout: {
        header: 'Remote server timeout',
        content: 'Please try again in a moment.'
      },
      connection: {
        header: 'Connection lost',
        content: 'Please try again in a moment.'
      },
      client: {
        header: 'Client error',
        content: 'Please contact us for information.'
      }
    },
    settings: {
      headers: {
        view: 'View',
        player: 'Player',
        queue: 'Queue'
      },
      view: {
        darkMode: 'Dark mode'
      },
      player: {
        audioSource: 'Audio source'
      },
      queue: {
        autoplay: 'Autoplay'
      }
    },
    pages: {
      start: {
        keys: {
          search: 'Search',
          openInTab: 'Open link in new tab',
          closeTab: 'Close tab'
        }
      },
      artist: {
        segments: {
          tracks: 'Top tracks',
          albums: 'Top albums',
          similar: 'Similar'
        }
      },
      track: {
        videos: {
          loading: 'Loading videos...',
          error: 'Error.',
          empty: 'No videos.'
        },
        lyrics: {
          loading: 'Loading lyrics...',
          error: 'Error.',
          empty: 'No lyrics.'
        },
        segments: {
          similar: 'Similar'
        }
      },
      tag: {
        segments: {
          similar: 'Similar:',
          artists: 'Top artists',
          albums: 'Top albums',
          tracks: 'Top tracks'
        }
      }
    },
    shared: {
      more: 'More...',
      loading: 'Loading...',
      listener: '{number} listener | {number} listeners',
      tracks: '{number} track | {number} tracks',
      sources: {
        select: {
          source: 'Select source:',
          type: 'Select type:',
          album: 'Select album:',
          albumVarious: 'Select V/A album:',
          group: 'Select album group:',
          artist: 'Select artist:',
          track: 'Select track:'
        },
        streamable: 'Streamable',
        other: 'Other',
        albumTypes: {
          album: 'Album',
          albumVarious: 'V/A album',
          group: 'Album group',
          track: 'Track'
        },
        albumsTypes: {
          album: 'Albums',
          single: 'Singles',
          single_ep: 'Singles / EPs',
          compilation: 'Compilations',
          video: 'Videos',
          misc: 'Miscellaneous',
          appearance: 'Appearances'
        }
      }
    },
    track: {
      source: {
        via: 'Via {source}'
      }
    },
    paginated: {
      noCollection: {
        header: 'No {collection}',
        content: 'Looks like there are no {collection}.'
      }
    }
  }
}
