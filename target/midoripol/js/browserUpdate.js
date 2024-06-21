// Ottieni il nome del browser e la sua versione
var userAgent = window.navigator.userAgent;
var browserName = '';
var browserVersion = '';

// Verifica se il browser è Chrome
if (userAgent.indexOf('Chrome') > -1) {
  browserName = 'Google Chrome';
  browserVersion = userAgent.match(/Chrome\/(\d+)/)[1];
}
// Verifica se il browser è Firefox
else if (userAgent.indexOf('Firefox') > -1) {
  browserName = 'Mozilla Firefox';
  browserVersion = userAgent.match(/Firefox\/(\d+)/)[1];
}
// Verifica se il browser è Edge (basato su Chromium)
else if (userAgent.indexOf('Edg') > -1) {
  browserName = 'Microsoft Edge';
  browserVersion = userAgent.match(/Edg\/(\d+)/)[1];
}
// Verifica se il browser è Internet Explorer
else if (userAgent.indexOf('Trident') > -1) {
  browserName = 'Internet Explorer';
  browserVersion = userAgent.match(/rv:(\d+)/)[1];
}
// Verifica se il browser è Opera
else if (userAgent.indexOf('Opera') > -1 || userAgent.indexOf('OPR') > -1) {
  browserName = 'Opera';
  browserVersion = userAgent.match(/(?:Opera|OPR)\/(\d+)/)[1];
}
// Verifica se il browser è Safari
else if (userAgent.indexOf('Safari') > -1) {
  browserName = 'Safari';
  browserVersion = userAgent.match(/Version\/(\d+)/)[1];
}
// Verifica se il browser è Maxthon
else if (userAgent.indexOf('Maxthon') > -1) {
  browserName = 'Maxthon';
  browserVersion = userAgent.match(/Maxthon\/(\d+)/)[1];
}
// Verifica se il browser è Samsung Browser
else if (userAgent.indexOf('SamsungBrowser') > -1) {
  browserName = 'Samsung Browser';
  browserVersion = userAgent.match(/SamsungBrowser\/(\d+)/)[1];
}
// Altro browser non riconosciuto
else {
  browserName = 'Altro';
}

// Verifica se il browser è aggiornato
var isBrowserUpdated = false;
var minimumVersions = {
  'Google Chrome': 90,
  'Mozilla Firefox': 88,
  'Microsoft Edge': 18,
  'Internet Explorer': 11,
  'Opera': 80,
  'Safari': 14,
  'Maxthon': 6,
  'Samsung Browser': 14
};

if (minimumVersions.hasOwnProperty(browserName)) {
  var minimumVersion = minimumVersions[browserName];
  if (parseInt(browserVersion) >= minimumVersion) {
    isBrowserUpdated = true;
  }
}

// Stampa il risultato
if (isBrowserUpdated) {
  console.log('Il tuo browser', browserName, 'è aggiornato.');
} else {
  alert('Il tuo browser', browserName, 'non è aggiornato. Si consiglia di aggiornarlo per una migliore esperienza di navigazione.');
}