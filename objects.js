var playlist = {
  usher: 'confession',
  linkinpark: 'in the end',
  eminem: 'rap god'
}

function updatePlaylist(thePlaylist, artistName, songTitle
return object.assign({},thePlaylist, { [artist]: songTitle})
}

updatedPlaylist(playlist, 'chainsmoker', 'dreaming'

function removeFromPlaylist(thePlaylist, artist) {
  delete thePlaylist.artist
  return thePlaylist;
}

removeFromPlaylist(playlist, 'linkinpark');

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
