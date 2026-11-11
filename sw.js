/* Hydrosan service worker — app shell offline + cache library CDN */
const VER = 'hydrosan-v6';
const SHARE = 'hydrosan-share';
const SHELL = ['./', './index.html', './manifest.json', './icons/icon-192.png', './icons/icon-512.png', './icons/apple-touch-icon.png'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(VER).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== VER && k !== SHARE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const req = e.request;
  const url = new URL(req.url);
  /* File dibagikan dari aplikasi lain (WhatsApp, File Manager, dll.) → simpan lalu buka di app */
  if (req.method === 'POST' && /\/share-target\/?$/.test(url.pathname)) {
    e.respondWith((async () => {
      try {
        const fd = await req.formData();
        const f = fd.getAll('file').find(x => x && typeof x.text === 'function');
        const c = await caches.open(SHARE);
        if (f) await c.put('./__shared__', new Response(await f.text(), { headers: { 'Content-Type': 'text/plain; charset=utf-8', 'X-File-Name': encodeURIComponent(f.name || 'proyek.hydromine') } }));
        else await c.delete('./__shared__');
      } catch (err) { }
      return Response.redirect('./index.html?shared=1', 303);
    })());
    return;
  }
  if (req.method !== 'GET') return;
  const sameOrigin = url.origin === location.origin;
  const isDoc = req.mode === 'navigate' || (sameOrigin && /\/(index\.html)?$/.test(url.pathname));
  if (isDoc) {                       // halaman: jaringan dulu (agar update cepat), cadangan dari cache
    e.respondWith(fetch(req).then(r => { const cp = r.clone(); caches.open(VER).then(c => c.put('./index.html', cp)); return r; })
      .catch(() => caches.match('./index.html', { ignoreSearch: true })));
    return;
  }
  // aset lain & pustaka CDN (Chart.js, docx, font): cache dulu, lalu perbarui di latar belakang
  e.respondWith(caches.match(req).then(hit => {
    const net = fetch(req).then(r => { if (r && (r.ok || r.type === 'opaque')) { const cp = r.clone(); caches.open(VER).then(c => c.put(req, cp)); } return r; }).catch(() => hit);
    return hit || net;
  }));
});
