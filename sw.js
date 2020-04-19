/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v3.5.0/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v3.5.0"});

workbox.core.setCacheNameDetails({prefix: "gatsby-plugin-offline"});

workbox.skipWaiting();
workbox.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "webpack-runtime-3faff5c8aaecaec9b77e.js"
  },
  {
    "url": "app.8da33d5040c4e6c2706c.css"
  },
  {
    "url": "app-eeb94b9db1b2d7f910e5.js"
  },
  {
    "url": "component---node-modules-gatsby-plugin-offline-app-shell-js-8a8b1d750f900886e076.js"
  },
  {
    "url": "index.html",
    "revision": "a32a60b07f39a5fed9972591c2b6a4ee"
  },
  {
    "url": "offline-plugin-app-shell-fallback/index.html",
    "revision": "08ff0782cb061b43773d3890e73c052f"
  },
  {
    "url": "google-fonts/s/bungeeinline/v5/Gg8zN58UcgnlCweMrih332VuPGV_-Q.woff2",
    "revision": "c663421af663812592901cfd1c4986f1"
  },
  {
    "url": "google-fonts/s/bungeeshade/v5/DtVkJxarWL0t2KdzK3oI_jkc6SjT.woff2",
    "revision": "93569efcabf27c9230e9b94f6dd9e338"
  },
  {
    "url": "google-fonts/s/monoton/v9/5h1aiZUrOngCibe4TkHLQg.woff2",
    "revision": "a159af3f5a12afbfa89e24f94586b10b"
  },
  {
    "url": "google-fonts/s/montserrat/v14/JTUSjIg1_i6t8kCHKm459Wlhyw.woff2",
    "revision": "bc3aa95dca08f5fee5291e34959c27bc"
  },
  {
    "url": "google-fonts/s/pressstart2p/v8/e3t4euO8T-267oIAQAu6jDQyK3nVivM.woff2",
    "revision": "18682aa5b1ee731888e193ab98bffe2b"
  },
  {
    "url": "google-fonts/s/robotomono/v7/L0x5DF4xlVMF-BfR8bXMIjhLq38.woff2",
    "revision": "0c94e034ca06357576c2d03d623e1fcd"
  },
  {
    "url": "component---src-pages-index-js-78dd394ce793110d23b1.js"
  },
  {
    "url": "static/d/173/path---index-6a9-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "component---src-pages-404-js-8272245a4eb9b5173260.js"
  },
  {
    "url": "static/d/164/path---404-html-516-62a-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  },
  {
    "url": "static/d/84/path---offline-plugin-app-shell-fallback-549-4b4-NZuapzHg3X9TaN1iIixfv1W23E.json",
    "revision": "c2508676a2f33ea9f1f0bf472997f9a0"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerNavigationRoute("/talk-early-arcade-games/offline-plugin-app-shell-fallback/index.html", {
  whitelist: [/^[^?]*([^.?]{5}|\.html)(\?.*)?$/],
  blacklist: [/\?(.+&)?no-cache=1$/],
});

workbox.routing.registerRoute(/\.(?:png|jpg|jpeg|webp|svg|gif|tiff|js|woff|woff2|json|css)$/, workbox.strategies.staleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https:/, workbox.strategies.networkFirst(), 'GET');
"use strict";

/* global workbox */
self.addEventListener("message", function (event) {
  var api = event.data.api;

  if (api === "gatsby-runtime-cache") {
    var resources = event.data.resources;
    var cacheName = workbox.core.cacheNames.runtime;
    event.waitUntil(caches.open(cacheName).then(function (cache) {
      return Promise.all(resources.map(function (resource) {
        return cache.add(resource).catch(function (e) {
          // ignore TypeErrors - these are usually due to
          // external resources which don't allow CORS
          if (!(e instanceof TypeError)) throw e;
        });
      }));
    }));
  }
});