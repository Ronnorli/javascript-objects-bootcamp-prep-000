var playlist = {
  usher: 'confession',
  linkinpark: 'in the end',
  eminem: 'rap god'
}

function updatePlaylist(thePlaylist, artist, song) {
return object.assign({},thePlaylist{[artist]:song})
}

updatedPlaylist(playlist, 'chainsmoker', 'dreaming'

// var playlist = {
//   artist1: "song1",
//   artist2: "song2",
//   artist3: "song3"
// };

// function updatePlaylist(thePlaylist, artistName, songTitle) {
//   return Object.assign({}, thePlaylist, { [artistName]: songTitle});
// }

// updatePlaylist(playlist, "artist4", "song4");

// function removeFromPlaylist(thePlaylist, artistName) {
//   delete thePlaylist[artistName];
//   return thePlaylist;
// }

// removeFromPlaylist(playlist, "artist2");
