// service worker demo
'use strict';

if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/sw.js', {scope:'/'})
      .then((registration) => {
        console.log('register', registration);
      }).catch((err) => {
        console.log('err', err);
      });
  });
}
