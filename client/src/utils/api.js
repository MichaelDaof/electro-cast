export default function APIlocation(type, param) {
  const api = {
    search: "https://electro-cast-youtube.herokuapp.com/yt/",
    send: `${window.location.origin}/yt/`
  }
  return `${api[type]}${param}`
}