console.log("global-scope");
// IIFE
(function(){
  "strict mode"
  console.log("local-scope");
  // Initialize App
  var app = {
    init:function(){
      routes.init()
      console.log("works, innit?");
      // global app stuff
    }
  }

  // Handle routes & State
  var routes = {
    init:function(){
      sections.toggle(window.location.hash)
      window.addEventListener("hashchange",function(event){
        var route = location.hash
        sections.toggle(route)
      })
    }
  }

  // Render / toggle sections
  var sections = {

    toggle:function(route){
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
