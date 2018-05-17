var playlist = {malone: "rockstar"}

function updatePlaylist(obj, artist, song) {
  obj[artist] = song
  return obj
}

function removeFromPlaylist(obj,artist) {
  obj.delete(artist)
  return obj
}