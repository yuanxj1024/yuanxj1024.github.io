// service worker 主文件

const mainCacheName = 'yuanxj1024-chache';

this.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(mainCacheName).then((cache) => {
      return cache.add([
        '/',
        'index.html',
        'index.js'
      ]);
    })
  );
});
