export default function APIlocation(type, param) {
  const api = {
    search: "https://electro-cast-youtube.herokuapp.com/yt/"
  }
  return `${api[type]}${param}`
}