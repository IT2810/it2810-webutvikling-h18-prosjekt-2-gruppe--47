# Gruppe 47 - Prosjekt 2

Nettsiden gir brukeren mulighet til å se utstillinger satt sammen av bilde, tekst og lyd. Brukeren kan velge mellom tre ulike kategorier innenfor hver mediatype. For hver kombinasjon av valg blir det tilgjengelig fire utstillinger. Bruker kanne bytte mellom disse fire ved hjelp av faner. Ved bytte av kategori vil fire nye utstillinger genereres.

## REACT
React er et JavaScript-bibliotek for å bygge brukergrensesnitt. React er spesielt nyttig for å interaktive brukergrensesnitt, der input fra bruker blir gjennspeilet umiddelbart, uten å laste siden på nytt. Dette er mulig ved at oppdatering av tilstanden til en komponent trigger en ny tegning av komponenten.

Kilde: https://react.js

### Løsningen skal baseres på React (og JSX).

Nettsiden er bygget med React, og hver enkelt komponent er skrevet ved hjelp av JSX som blir kompilert til HTML ved lasting av siden. 

### Bruk ES6 (Javascript) og implementer komponentene med class, og implementere en hesiktsmessig komponentstruktur.

ResourceComponent holder styr på filplassering og gir beskjed til andre komponenter når endringer skjer.

### Bruk kun de ordinære mekanismene i React for å lagre håndtere og lagre data (du skal mao ikke bruke løsninger som redux, mobx eller andre bibliotek for å håndtere tilstand).

Tilstanden til hele siden er også til sen hver tid holdt styr på av ResourceComponent. Kun komponentene for valg av kategorier og valg av utstilling har kunnskap om egen status, siden dette må vises i komponenten. 

### UI-komponentene skal implementeres fra bunne av (uten bruk av tredjeparts komponenter).
UI-komponentene er standard HTML som har blitt stylet med CSS.

## AJAX

AJAX (Asynchronous JavaScript And XML) er en metode som kombinerer et nettleser-innebygget XMLHttpRequest-objekt, for be om data fra en nett-server, og enten JavaScript eller HTML DOM, for å henholdsvis bruke eller vise dataene. Denne teknikken gjør det mulig å utføre en rekke operasjoner som med standard HTML ville ha krevd at siden ble lastet på nytt; oppdatering av innhold og å be om, sende og motta data fra server.

Kilde: https://www.w3schools.com/xml/ajax_intro.asp

### Bildene (i svg) og teksten (i json) skal lastes dynamisk med AJAX (Asynchronous JavaScript And XML). Du står fritt i valg av tredjeparts javascript-bibliotek for dette.

Vi har brukt Axios for å laste bilder og tekst dynamisk med AJAX. Axios er en promise-basert HTTP-klient for JavaScript. Promise vil si at 

Kilde: https://medium.com/codingthesmartway-com-blog/getting-started-with-axios-166cb0035237

### Filene skal lastes kun hvis de benyttes. Dvs. at filer brukt i en kombinasjon først lastes når denne kombinasjonen vises (eksempelvis når en bruker velger denne tabben). Når filen først er lest, så skal innholdet lagres på klienten slik at de ikke blir å lastes flere ganger hvis en bruker blar frem og tilbake i en utstilling.

Bildene og tekstene er lagret på server og blir først kallet med Axios når disse blir etterspurt av bruker. En liste over nett-adressene til alle filene er lagret ResourceComponent. Her blir også filene lagret, for eventuell senere bruk, etter at de har blitt lastet fra server første gang. På denne måten trenger siden verken å hente innhold fra server som ikke blir brukt, eller å hente samme innhold flere ganger. 

### Lyd håndterer du med audio-taggen fra HTML5 og da trenger du ikke implementere noe spesifikt for å laste data (noen lurer sikker på hvorfor vi ikke bare bruker <img> for svg bildene, men målet med oppgaven er å gi erfaring i ajax-call og hente inn både xml- og json-data).

## RESPONSIVE WEB DESIGN

### Løsningen skal implementeres med responsiv design som tilpasser seg skjermens størrelse og orientering, og plattform.

### Skal skifte layout mellom breddeformat (f.eks. bilde og tekst ved siden av hverandre) og høydeformat (bilde med teksten under f.eks.). Bredde vs. høyde kan også demonstreres med andre elementer enn tekst og bilde.


Følgende elementer skal være med i løsningen (eventuelt begrunnet i dokumentasjonen hvis det ikke er tatt med)
Viewport
Media-queries
Bilder som skalerer
Flytende/fleksibel layout
Dette skal implementeres fra bunnen av uten bruk av eksterne CSS-rammeverk ea.
SAMARBEID, BRUK AV GIT, KODING, LEVERANSE
Koden i prosjektet skal være ryddig strukturert, ha fornuftig kommentering og ha navngiving av komponenter, variabler og funksjoner i tråd med anbefalinger (best practise).
Gruppa skal bruke git i utviklingen (lenke til repository i github classroom kommer når gruppene er bestemt). Utviklingen skal dekomponeres i task som hver beskrives kort med en issue. Commits markeres med hvilken issue de bidrar til/løser. 
Ved innleveringsfristen vil github classroom automtisk lagre en snapshot av prosjektet som blir den formelle innleveringen. 
På evalueringsdagen 24/9 skal siste versjon av systemet være tilgjengelig på den virtuelle maskinen som gruppa har fått tildelt. Prosjektet gjøres tilgjenglig som xxxx.idi.ntnu.no/prosjekt1. Lag en production build som legges under Apache web serveren som lytter på port 80. 
Node.js og NPM

Installer Node.js (inkluderer npm node package manager) på egen maskin
Bruk pakken create-react-app for å komme i gang (bruk kommandoen "npx create-react-app mittprosjektnavn"
Krav til testing
Testing i denne prosjektet har fokus på brukegrensensitt og repsonsiv web design. 

Gruppa skal dokumentere testing på minimum 3 forskjellige enheter hvor det må inngå en mobil (lite skjerm/horisontal + vertikal orientering og en ordinær pc (stor skjerm). 
Test brukergrensesnitt systematisk og dokumenter hvordan dere har test.
