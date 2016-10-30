function getGallery() {
  FB.api('/me/albums',  function(resp) {
    //Log.info('Albums', resp);
    var ul = document.getElementById('albums/photos');
    var album = null;
    var li;
    var a;
    for (var i=0, l=resp.data.length; i<l; i++){
      album = resp.data[i];
      // Create HTML Elements to be appended
      li = document.createElement('li');
      a = document.createElement('a');
      // Populate with data
      a.innerHTML = album.name;
      a.href = album.link;
      // Append Elements to List
      li.appendChild(a);
      ul.appendChild(li);
    }
  });
}
