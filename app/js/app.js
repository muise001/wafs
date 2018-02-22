import routes from "./routes.js"
import cookie from "./cookie.js"
import loader from "./loader.js"
import error from "./errorafhandeling.js"

// IIFE
const app = (function() {

  // Initialize App
  var app = {
    init: function() {
      routes.init()
      // Kijk of er al een file in localstorage zit
      cookie.eat()

      document.querySelector("form").addEventListener("submit", function(e){
        //preventDefault zodat de pagina niet refreshed
        e.preventDefault()
        var zoekOpdracht = document.querySelector("input").value;
        // geef value van input mee als zoekOpdracht
        app.request(zoekOpdracht)
        loader.show()
      })
    },
    request: function(zoekOpdracht){
      //vraag giphy api op met zoekOpdracht
      var request = new XMLHttpRequest();
      request.open('GET', 'http://api.giphy.com/v1/gifs/search?q= '+ zoekOpdracht +' &api_key=bMIPWUm5uWlqwJDmZPxDw4dKGzDZfGdd&limit=6', true);

      request.onload = function() {
        if (request.status >= 200 && request.status < 400) {
          var data = JSON.parse(request.responseText);
          //geef data aan fillHome, zodat hij zichtbaar wordt in de site
          if (data.data.length != 0) {
            app.fillHome(data)
            //zet alle data in de localStorage
            cookie.bake(zoekOpdracht, data)
            document.getElementById("error").classList.add("none")
          }
          else {
            error.afhandeling(1)
          }
        }
        else {
          error.afhandeling(2)
          }
      };

      request.onerror = function() {
        error.afhandeling(3)
      }
      request.send();
    },
    fillHome : function(data){
      // Gebruik handlebars template tool om data in pagina te zetten
      var rawTemplate = document.getElementById("gifTemplate").innerHTML
      var compiledTemplate = Handlebars.compile(rawTemplate)
      var ourGeneratedHTML = compiledTemplate(data)

      var resultContainer = document.getElementById("results")
      resultContainer.innerHTML = ourGeneratedHTML

      this.fillDetail(data)
    },
    fillDetail : function(data){
      // Gebruik handlebars template tool om data in pagina te zetten
      var rawDetailTemplate = document.getElementById("gifDetailTemplate").innerHTML
      var compiledDetailTemplate = Handlebars.compile(rawDetailTemplate)
      var ourGeneratedDetailHTML = compiledDetailTemplate(data)

      var resultDetailContainer = document.getElementById("chosenOnes")
      resultDetailContainer.innerHTML = ourGeneratedDetailHTML

      loader.hide()
    }
  }
  // Start App
  app.init();

  return app
})()

export default app
