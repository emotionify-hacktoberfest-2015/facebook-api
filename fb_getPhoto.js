function getPhoto() {
  FB.api('/me/picture?type=normal', function(response) {
    var str="<br/><b>Pic</b> : <img src='"+response.data.url+"'/>";
      document.getElementById("status").innerHTML+=str;
  });
};
