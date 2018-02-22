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

De data sla ik op in de local storage

**Visual Flow**

![visual flow schets](https://github.com/muise001/wafs/blob/master/visualflow.jpg "visual flow schets")

## Week 2

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


>Emiel Muis
