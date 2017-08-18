export function crrentlyPlaying(id) {
  return {
    type: 'CURRENTLY_PLAYING',
    currentlyPlaying: id
  }
}

export function sendVideo(id) {
  return (dispatch, getState, api) => {
    return fetch(api('send', id))
      .then(res => {
        dispatch(crrentlyPlaying(id))
        console.log('shrug', res)
      })
  }
}