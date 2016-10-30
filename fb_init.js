window.fbAsyncInit = function() {
    // Read configuration file then populate the FB init script with the read configuration.
    var url = "app.json";
    var getJSONConfig = function (path, callback) {
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function () {
          if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
              var data = JSON.parse(xmlhttp.responseText);
              if (callback) callback(data);
          }
      };
      xmlhttp.open("GET", path, true);
      xmlhttp.send();
    };

    // Initialize Application
    var init = function (config) {
      // Login Application to Facebook
      FB.init({
          appId      : config.facebook.appId, // App ID
          status     : config.facebook.status, // check login status
          cookie     : config.facebook.cookie, // enable cookies to allow the server to access the session
          xfbml      : config.facebook.xfbml  // parse XFBML
      });

      // Subscribe to Authentication Events
      FB.Event.subscribe('auth.authResponseChange', function(response) {
          console.log("Received response from Facebook Server.");
          // SUCCESS
          if (response.status === 'connected') {
              console.log("Response was successful.")
              document.getElementById("message").innerHTML +=  "<br>Connected to Facebook";
          } else 
          // FAILURE
          if (response.status === 'not_authorized') {
            console.log("Failure authorizing! Check configuration file and try again!");
            document.getElementById("message").innerHTML +=  "<br>Failed to Connect";
          } else { 
          // UNKNOWN ERROR
            console.log("Unknown error occurred! Check configuration file and try again!");
            document.getElementById("message").innerHTML +=  "<br>Logged Out";
          }
      });
    };

    // Get JSON Config File
  var getJSONConfig(url, function(config) {
    // Config file was loaded
    console.log("Application configuration file loaded. Preparing initialization...");
    
    // Initialize Application
    init(config);
  });
};

