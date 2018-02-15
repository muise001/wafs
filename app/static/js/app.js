console.log("global-scope");
// IIFE
(function() {
  "strict mode"
  console.log("local-scope");
  // Initialize App
  var app = {
    search: function(){
      document.querySelector("button").addEventListener("click", function(){
        var search = document.querySelector("input").value;
        document.querySelector("#results").innerHTML = ""
        document.querySelector("#chosenOnes").innerHTML = ""
        app.request(search)
      })
    },
    request: function(search){
      var request = new XMLHttpRequest();
      request.open('GET', 'http://api.giphy.com/v1/gifs/search?q= '+ search +' &api_key=bMIPWUm5uWlqwJDmZPxDw4dKGzDZfGdd&limit=6', true);
      //bMIPWUm5uWlqwJDmZPxDw4dKGzDZfGdd

      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          // Success!
          var data = JSON.parse(request.responseText);
          console.log(data);
          for (var i = 0; i < data.data.length; i++) {
            if (data.data[i].username != "" ){
              var rest = "<h3>Creator</h3>  <ol> <li>uploadert : "+data.data[i].user.username+"</li><li> user-url : "+data.data[i].user.profile_url+"</li> <li>Twitter : "+data.data[i].user.twitter+"</li> </ol></section>";
            }
            else {
              var rest = ""
            }
            document.querySelector("#results").innerHTML += "<div><h3>"+data.data[i].title+"</h3><a href='#detail"+[i]+"'><img style='width:60%; min-width:8em;' src='" + data.data[i].images.original.url + "'></a></div>"
            document.querySelector("#chosenOnes").innerHTML += "<section class='none' id='detail"+[i]+"'> <h1>"+data.data[i].title+"</h1> <img style='width: 80%; margin: 1em 10%;' src= "+data.data[i].images.original.url+" alt=> <ol>  <li>rating : "+data.data[i].rating+"</li>  <li>Geupload op : "+data.data[i].import_datetime+"</li> </ol>"+rest;
          }

        } else {
          // We reached our target server, but it returned an error

        }
      };

      request.onerror = function() {
        // There was a connection error of some sort
      };

      request.send();
    },
    init: function() {
      routes.init()
      console.log("works, innit?");
      this.search()
      // global app stuff
    }
  }

  // Handle routes & State
  var routes = {
    init: function() {
      sections.toggle(window.location.hash)
      window.addEventListener("hashchange", function(event) {
        var route = location.hash
        sections.toggle(route)
      })
    }
  }

  // Render / toggle sections
  var sections = {
    toggle: function(route) {
      if (route == "") {
        route = "#start"
      }
      for (var i = 0; i < document.querySelectorAll("section").length; i++) {
        document.querySelectorAll("section")[i].classList.add("none")
      }
      document.querySelector(route).classList.remove("none")
      if (route == "#djKhaled") {
        var audio = new Audio('jewerly.mp3');
        audio.play();
      }
    }
  }

  // Start App
  app.init();
})()
