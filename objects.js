var playlist = {
  usher: 'confession',
  linkinpark: 'in the end',
  eminem: 'rap god'
}

function updatePlaylist(thePlaylist, artist, song) {
return object.assign({},thePlaylist{[artist]:song})
}

updatedPlaylist(playlist, 'chainsmoker', 'dreaming'