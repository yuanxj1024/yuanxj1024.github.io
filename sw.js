// service worker 主文件

const mainCacheName = 'yuanxj1024-chache';

this.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.open(mainCacheName).then((cache) => {
      return cache.addAll([
        '/',
        'index.html',
        'index.js'
      ]);
    })
  );
});
