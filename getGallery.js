function getGallery(){

            FB.api('/me/albums',  function(resp) {
                //Log.info('Albums', resp);
                var ul = document.getElementById('albums/photos');
                for (var i=0, l=resp.data.length; i<l; i++){
                    var
                        album = resp.data[i],
                        li = document.createElement('li'),
                        a = document.createElement('a');
                    a.innerHTML = album.name;
                    a.href = album.link;
                    li.appendChild(a);
                    ul.appendChild(li);
                }
            });
        }
