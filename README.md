[link naar site](https://muise001.github.io/wafs/app "Link naar de site")

# Eindproduct
### De Site.
Dit is de nieuwe Giphy website. Op deze website kan je gifjes zoeken en als je klikt op zo'n gifje, dan krijg je meer info over het gifje waar je op hebt geklikt. Als je dit eenmaal hebt gedaan, dan wordt je laatste zoekopdracht opgeslagen op je computer. Hierdoor kan je altijd je laatste zoekopdracht blijven bekijken, zelfs als je geen internetverbinding hebt.

![Site screenshot](https://github.com/muise001/wafs/blob/master/app.png "screenshot van de app")

### De API
**De api zelf**
Als api heb ik giphy gebruikt. Dit is een website waar allemaal gifjes op staan. De API zorgt ervoor dat je die gifjes zelf ook op kan halen en de bijbehorende data.

**Hoe gebruik ik de api?**
Ik heb een website gemaakt waarop de gebruiker zelf kan zoeken naar een gifje. Als hij deze eenmaal heeft gevonden, kan hij erop klikken en krijgt hij info over het gifje. 
Deze info bestaat uit :
* De titel
* De rating
* De opload-datum
* De maker
* Zijn giphy pagina
* Zijn twitter

De data sla ik op in de local storage.

De data die ik wel gebruik, maar niet zichtbaar maak is het ID van de gifjes. Het ID gebruik ik om de foto te kunnen laten doorverwijzen naar een detail-pagina. `<a href=#detail {{ID}} >`. Dit brengt je naar de detailpagina die de extra info over de gif laat zien.

### Leuke functies
**Error afhandeling**
Er zijn een aantal manieren waardoor mijn website niet optimaal gebruikt kan worden. Dit noemen we een error. In het begin was het zo, dat als je geen resultaat kreeg na je zoekopdracht, dan bleef de loader spinnen. Hierdoor zou de gebruiker het idee kunnen krijgen dat het gewoon lang duurt, terwijl al duidelijk is dat er geen resultaat is voor de zoekopdracht. Hierdoor heb ik een error-afhandeling gemaakt voor alle mogelijke errors. Er zijn drie errors die je kan krijgen :
1. Na het zoeken is er geen resultaat
2. Kan wel verbinden met de server, maar er gaat iets fout bij Giphy
3. Er is geen internetverbinding

**Loader**
Ik heb een loader toegevoegd zodat je ziet dat het soms even duurt om je zoekopdracht op te vragen. Deze wordt aangeroepen zodra je op zoek klikt en wordt verwijdert als je data is ingeladen en ingevult.

**Templating Tool**
Eerst vulde ik mijn pagina in door een hele lange onleesbare string te posten via innerHTML +=. Daarna ben ik Handlebars gaan gebruiken. Hier kon ik veel overzichtelijker mijn pagina invullen

**Audio**
Als bonus-pagina heb ik "DJ Khaled". Deze voegt eigenlijk vrij weinig toe aan de website. Ik vond het grappig om deze toe te voegen tijdens de routes-opdracht. Deze heb ik later niet meer verwijdert omdat deze een audiofragment afspeelt. Zie deze pagina ook als grapje en neem het niet serieus

**Filter Map Sort Reduce**
 * Filter
   * Ik check of de gifjes die binnenkomen een user-account hebben op giphy. Zo niet, dan filter ik ze eruit. Hierdoor heb je geen anonieme gif-uploaders.
 * Map
   * Met de Map functie zorg ik ervoor dat de titel van de gif wordt samengevoegd aan het twitteraccount van de gebruiker. Hierdoor krijg je bijvoorbeeld "drunk beer GIF by Bayerischer Rundfunk (@BR_Presse)". De titel die wordt samengevoegd zet ik neer bij de geschiedenis-pagina. Hierdoor kan je je beter herinneren wat je laatste zoekopdracht was.
 * Sort
   * Ik sorteer mijn gifjes op uploaddatum van nieuwste (bovenaan de pagina) naar oudste (onderaan de pagina).
 * Reduce
   * Met Reduce reken ik uit hoeveel dagen er zitten tussen de upload-datum van het oudste en nieuwste filmpje. 
   
[Handige bron die ik gebruikt heb bij het begrijpen van map, filter, sort, reduce](https://www.youtube.com/watch?v=rRgD1yVwIvE "Handige Bron")  

### Visual Flow

![visual flow schets](https://github.com/muise001/wafs/blob/master/visualflow.jpg "visual flow schets")


# Week 2

**Voortgang WAFS**
Afgelopen Maadag was ik ziek, dus ik had helaas de eerste les gemist. Afgelopen woensdag heb ik de Giphy-API in m'n code gezet met een beetje hulp van Dennis omdat er iets mis was met m'n api-key. Aan het eind van de dag werkte die gek genoeg eindelijk. De volgende dag opende ik de code weer om te kijken of ik verder kon werken. Toen eenmaal het kwartje viel, heb ik de code in een ruk uit kunnen typen. Ik had wat moeite om de detail-pagina's te laten werken. Maar uiteindelijk is dat ook gelukt. Ik heb geen gebruik gemaakt van een templating tool, maar alles werkt goed.

**Hoe werkt de site?**
De site werkt als volgt. Als in de zoekbalk (op #start) iets invult en daarna op "zoek" **klikt**, dan worden er gifjes ingeladen met bijbehorende titel. Als je daarna op de afbeelding klikt, kom je op een detail-pagina. Daar staat in ieder geval de rating en de upload-datum. Als de auteur niet anoniem is, dan staat zijn info er ook bij. 

## Pro’s and cons JavaScript libraries / frameworks

**Javascript libraries**
	A library is a JavaScript file that contains a bunch of functions, and those functions  	accomplish some useful task for 
  your webpage.

	Bron: https://www.khanacademy.org/computing/computer-programming/html-css-js/using-js-libraries-in-your-webpage/a/whats-a-js-library

<br/>

**Javascript frameworks**
	A JavaScript framework is an application framework written in JavaScript. It differs from a  	JavaScript library in its 
  control flow a library offers functions to be called by its parent  	code, whereas a framework defines the entire 
  application design.

	Bron : https://en.wikipedia.org/wiki/JavaScript_framework


  || Library / Frameworks Pro’s        | Library / Frameworks Cons           |   |
|:-| ---------- |----------| -:|
||It’s easier to write a specific type of code.     | It takes up more memory, because al the functions of the library have to load in. |  |
|| It's made custom for the kind of problem you’re trying to solve.     | It slows down the webpage you’re creating.     |   |
|| Projects that would use much code, now can be written much faster, with pre-build structures and patterns. | You need to learn about a library or framework first,  before you’re able to read and write code in it.     |    | 
|| The community will recognize a problem faster, because they use the same library or framework for a specific task. | Libraries and Frameworks will get out-dated.     |    | 
|| If you’re a beginner, frameworks will be your best friend, because you don't have to learn how to solve the problem in vanilla javascript | You don’t learn how to solve the problem in vanilla javascript.     |    | 
||  | A library is mostly used to achieve one particular task and will not be useful after      |    | 
||  | Every problem you’re trying to solve using a library can be solved with vanilla javascript    |    | 


### Voorbeelden van Frameworks

**Angular** — I’s not alphabetical, but here’s Angular (1.5). It’s one of the most popular frameworks out there, developed by Google and used by throngs of companies for web applications. It’s an MVC type framework that works best for complex front end application that need just one modular framework for everything.

**React** — yes, yet another very popular frameworks that everybody seems to be using. It’s not a full on MVC framework so it’s used in a combo with other frameworks like the aforementioned Angular or Ember (that will be mentioned later). React is a great View layer that works well in an isomorphic web framework.

**Ember** — another MVC framework, works just like Angular, without so much flexibility. Great for making things work on a deadline.

**Babylon** — this one is quite different, it’s a 3D game engine based on WebGL and JavaScript, perfect for, well, building video games or complex 3D scenes.

**Karma** — is the perfect tool to run tests against different browsers. If you want to make sure your app works on all browsers this is the framework for you.

**jQuery** — is used by just about everybody, some say it’s the most used JavaScript library in the world. So when should you use it? Just about anytime.

**PhantomJS** — it helps you in the testing department. It enables you to run tests, monitor network requests and manipulate pages.


### Bronnen

https://www.noupe.com/development/javascript-frameworks-94897.html

https://blog.hellojs.org/javascript-frameworks-why-and-when-to-use-them-43af33d0608d

https://hsheikhm.wordpress.com/2016/02/07/js-frameworks-pros-cons/


## Pro's and cons single page web app

We kennen ze allemaal websites die er precies uitzien en werken als apps. De laatste jaren schieten ze als paddenstoelen uit de grond. Kijk naar de mobiele website van Facebook. Na een bepaalde update had je opeens een balkje aan de onderkant van je scherm. Hiermee kon je door de pagina heen navigeren. Dit pattern kende we natuurlijk al, maar niet in een website. Hoe kan het dat steeds meer websites de UI van een app overnemen? en wat zijn nou de voor- en nadelen?

Een single page web-app is niets meer dan website waarop op de achtergrond al je content al voor je is geladen. Deze content kan je doormiddel van buttons of linkjes ontsluiten. Een groot nadeel aan dit soort websites is daardoor ook meteen dat het significant langer duurt om zo'n website te laden. Je kan hier natuurlijk service-workers voor gebruiken, maar niet alle sites doen dat.

Ik heb een aantaal voor en nadelen op een rijtje gezet:


||Voordelen van een webapp|Nadelen van een webapp||
|:-| ---------- |----------| -:|
||De gebruiker kan snel door de site navigeren, zonder dat er een nieuwe pagina wordt geladen|De laadtijd van de website is langer||
||De webapp ziet er beter uit dan een normale website op je smartphone|Het is voor sommige gebruikers lastig omdat ze de webapp niet in een Appstore kunnen vinden||
||Webapps kunnen zo gebouwd worden dat ze werken op alle devices|**De bouwtijd en het onderhoud van een webapp is veel hoger dan voor een normale mobiele website**||
||Je kan ervoor kiezen om sommige dingen voor het ene device wel te supporten en voor andere niet|Je moet rekening houden met het aantal content omdat alles in een keer ingeladen wordt ||
||Je kan het op een android smartphone voor zorgen dat het lijkt op een native android app terwijl een iphone weer andere styling heeft|||

Het lijkt nu alsof er meer voordelen dan nadelen zijn aan het maken van een web-app. Maar er is een nadeel waardoor je heel goed moet overwegen of je wel of geen webapp gaat bouwen. Dit nadeel (dikgedrukt in het tabel) is niet alleen dat de bouwtijd en het onderhoud hoger is, omdat er elke dag nieuwe devices uitkomen en je app daar optimaal voor moet werken, maar ook budget. Als je kijkt naar wat het kost om een "normale responsive" website te bouwen tegenover een webapp, dan zit je zo op het tienvoudige. Voor een bedrijf als Google en Facebook is dat natuurlijk geen probleem. Maar voor kleine bedrijfjes soms de reden waarom ze het niet doen en misschien wel niet doorbreken. 

	bron : https://www.lifewire.com/pros-and-cons-of-native-apps-and-mobile-web-apps-2373173

>Emiel Muis
