# Gruppe 47 - Prosjekt 2

Nettsiden gir brukeren mulighet til å se utstillinger satt sammen av bilde, tekst og lyd. Brukeren kan velge mellom tre ulike kategorier innenfor hver mediatype. For hver kombinasjon av valg blir det tilgjengelig fire utstillinger. Bruker kan bytte mellom disse fire ved hjelp av faner. Ved bytte av kategori vil fire nye utstillinger genereres.

## React
React er et JavaScript-bibliotek for å bygge brukergrensesnitt. React er spesielt nyttig for å interaktive brukergrensesnitt, der input fra bruker blir gjennspeilet umiddelbart, uten å laste siden på nytt. Dette er mulig ved at oppdatering av tilstanden til en komponent trigger en ny tegning av komponenten.

- Nettsiden er bygget med React, og hver enkelt komponent er skrevet ved hjelp av JSX som blir kompilert til HTML ved lasting av siden. 

- UI-komponentene er standard XML-tagger med tilhørende className som har blitt stylet med CSS.

- App.js holder state om hvilke kategorier og hvilken utstilling (exhibition) som er valgt. ResourceComponent initieres av App.js med properties om hvilke valg som er gjort basert på App sin state. 

- ResourceComponent holder styr på lasting av ressurser. Når ResourceComponent får nye props fordi App har endret state, sjekker ResourceComponent om den allerede har lasta inn den etterspurte ressursen. Hvis den ikke er lastet tidligere, lastes ressursen asynkront med axios, og ResourceComponent oppdateres når lastingen har skjedd. ResourceComponent initierer Picture og TextComponent med kildekoden til ressursene. 

- App.js initierer også SoundContainer med props om valgt lydkategori og utstilling (fra App sin state). SoundContainer inneholder et todimensjonalt array med stiene til lydfilene i de forskjellige kategoriene. SoundContainer initierer SoundPlayer med stien til den valgte lydfilen som prop.

- Categories initieres med informasjon om de forskjellige kategoriene og hvilken medietype kategorivalget styrer, samt en callback-funksjon fra App.js. På samme måte initieres Tabs, men denne får kun inn en callback-funksjon. Når noe endres i enten Categories eller Tabs, avfyres deres respektive callback-funksjoner, og App.js oppdaterer deretter sin state.

Kilde: https://react.js


### Komponentstruktur:
![alt text](https://i.imgur.com/aQl2BXx.png "Komponentstruktur")

## AJAX

AJAX (Asynchronous JavaScript And XML) er en metode som kombinerer et nettleser-innebygget XMLHttpRequest-objekt, for å be om data fra en web-server, og enten JavaScript eller HTML DOM for å henholdsvis bruke eller vise dataene. Denne teknikken gjør det mulig å utføre en rekke operasjoner som med standard HTML ville ha krevd at siden ble lastet på nytt; oppdatering av innhold og å be om, sende og motta data fra server.

Kilde: https://www.w3schools.com/xml/ajax_intro.asp

### Lasting av bilder med AJAX.

Vi har brukt Axios for å laste bilder og tekst dynamisk med AJAX. Axios er en promise-basert HTTP-klient for JavaScript. Promise gir oss mulighet til skrive asynkrone metoder slik som synkrone metoder, tanken er at verdien til metoden blir returnert senere (asynkront) når vi henter dataen inn fra en ekstern server.

Kilde: https://medium.com/codingthesmartway-com-blog/getting-started-with-axios-166cb0035237
Kilde: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise

### Caching av bilder og tekst.

Bildene og tekstene er lagret på server og blir først kallet med Axios når disse blir etterspurt av bruker. En liste over hostname til alle filene er lagret ResourceComponent. Her blir også filene lagret, for eventuell senere bruk, etter at de har blitt lastet fra server første gang. På denne måten trenger siden verken å hente innhold fra server som ikke blir brukt, eller å hente samme innhold flere ganger. 

### Implementering av lyd.

Lyd håndteres med audio-tag fra HTML5 som blir generert med mp3-filer som hentes fra server basert på status til siden.

## Mediakilder

- Lydene er hentet fra freesound.org.
- Tekstene er dikt hentet fra poets.org.
- De fleste bildene er hentet fra svgsilh.com eller ved søk gjennom google med merket for gjenbruk.

## Responsive Web Design

- Viewport er allerede implementert i meta taggen til index.html fra før gjennom create-react-app.
- Media-queries: 992px er det som skiller skjermen fra under og over skjermstørrelsen til laptop/desktop.
- Bilder som skalerer: her er bredden til bildet satt til auto i CSS både over og under 992px.
- Flytende/fleksibel layout: avhengig hvor stor skjermstørrelsen er (se media-queries) har vi under satt skjermstørrelse brukt CSS-flexbox, mens når vi er over bruker vi CSS-Grid.

## Samarbeid, bruk av Git, koding

### Kodestruktur.

Vi har navngitt variabler og komponenter i henhold til hva de gjør og med etablerte konvensjoner, dette gjør at det lettere for oss å manipulere DOMen, velge de rette elementene for å style i CSS og gjør ting mer lesbart.


### Bruk av Git.

I utviklingen har vi brukt git for å fordele arbeidsoppgaver. Vi har dekomponert utviklingen i tasks som vi har beskrevet med en kort issue. Vi har også benyttet oss av branches for å skille arbeid med forskjellinge issues fra hverandre. I tillegg har commits blitt markert med med nummeret til issuet de bidrar til eller løser. Når en branch har løst en issue har vi merget den inn i develop-branchen. Denne har blitt brukt som utgangspunkt for nye brancher, og for teste om ulike deler av koden fungerer sammen.  

## Krav til testing.

### Testing på ulike enheter

Testingen av siden har blitt delt i to deler; kontinuerlig testing av funksjonalitet i bygging av siden og testing av hele siden med fokus utsende til slutt. Den siste delen bestod av å laste production build av siden på mobil enhet, både horisontal og vertikal orientering, og på en stor pc-skjerm. Fokuset i testing har vært at siden ser bra ut og fungerer som den skal på alle enhetene. 

### Hvor vi har test og hva vi har dokumentert.

Vi har testet siden gjennom de forskjellige mobile enhetene våre(Huawei Honor og P10 lite, Nexus Experia), samt Mac, Windows og Linux, ved å ta screenshots av hvordan siden ser ut på skjermen. Nettleserene Google Chrome, Opera, FireFox, Internet Explorer, Safari og Microsoft Edge er brukt i kombinasjon med de ulike enhetene. Av rent praktiske hensyn har vi ikke tatt screenshots av alt, men et utvalg, som ligger under dette avsnittet.


### Chrome Android (Huawei Honor 8)
![alt text](https://i.imgur.com/ReiFceE.png "Chrome Android 1")
![alt text](https://i.imgur.com/3pGSUQB.png "Chrome Android 2")

### Chrome MacOS
![alt text](https://i.imgur.com/qyskg1s.jpg "Chrome MacOS")

### Firefox MacOS
![alt text](https://i.imgur.com/HGTm3Ky.jpg "Firefoc MacOS")

### Safari MacOS
![alt text](https://i.imgur.com/03glVe3.jpg "Safari MacOS")

### Opera Ubuntu
![alt text](https://i.imgur.com/XlvTapa.png "Opera Ubuntu 1")
![alt text](https://i.imgur.com/kmPp0d4.png "Opera Ubuntu 2")

### Chrome Windows
![alt text](https://i.imgur.com/5n5kkvw.png "Chrome Windows 1")
![alt text](https://i.imgur.com/5vqk014.png "Chrome Windows 1")
![alt text](https://i.imgur.com/CKuMZda.png "Chrome Windows 1")
