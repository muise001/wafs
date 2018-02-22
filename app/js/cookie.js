import app from "./app.js"

var cookie = {
  bake: function(zoekOpdracht, data) {
    // zet data-elementen in localStorage
    localStorage.setItem('oudeZoekopdracht', zoekOpdracht)
    localStorage.setItem('gifSearchHistory',JSON.stringify(data))
    this.addToIntestinalFlora()

  },
  eat: function() {
    // als je Zoekgeschiedenis niet leeg is, ga naar de volgende functie
    if (JSON.parse(localStorage.getItem("gifSearchHistory")) != null) {
      this.addToIntestinalFlora()
    }
    else {
      console.log("geen bestaande cookie");
    }
  },
  addToIntestinalFlora: function() {
    // vraag data-elementen op uit local storage.
    var savedSearch = localStorage.getItem("oudeZoekopdracht")
    var savedData = JSON.parse(localStorage.getItem("gifSearchHistory"))
    // zet de oude zoekopdracht in de Zoekgeschiedenis pagina
    document.getElementById("oudeZoekOpdracht").innerHTML = savedSearch
    // als je klikt op de oude zoekopdracht, vul dan de oude (opgeslagen-)data in
    document.getElementById("oudeZoekOpdracht").addEventListener("click", function(){
      app.fillHome(savedData)
    })
  },
  shitCrumbles : function(){

  }
}

export default cookie
