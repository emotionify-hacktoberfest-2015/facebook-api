 function getUserInfo() {
	    FB.api('/me', function(response) {

	  var str="<b>Name</b> : "+response.name+"<br>";
	  	  str +="<b>Link: </b>"+response.link+"<br>";
	  	  str +="<b>Username:</b> "+response.username+"<br>";
	  	  str +="<b>id: </b>"+response.id+"<br>";
	  	  str +="<b>Email:</b> "+response.email+"<br>";
		  str +="<input type='button' value='Get Gallery' onclick='getGallery();'/>";
	  	  //str +="<input type='button' value='Get Photo' onclick='getPhoto();'/>"; issues with getGallery TODO
	  	  str +="<input type='button' value='Logout' onclick='Logout();'/>";
	  	  document.getElementById("status").innerHTML=str;
	  	  	    
    });
}
