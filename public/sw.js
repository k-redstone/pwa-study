if(!self.define){let e,s={};const a=(a,n)=>(a=new URL(a+".js",n).href,s[a]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=a,e.onload=s,document.head.appendChild(e)}else e=a,importScripts(a),s()})).then((()=>{let e=s[a];if(!e)throw new Error(`Module ${a} didn’t register its module`);return e})));self.define=(n,t)=>{const i=e||("document"in self?document.currentScript.src:"")||location.href;if(s[i])return;let c={};const o=e=>a(e,i),r={module:{uri:i},exports:c,require:o};s[i]=Promise.all(n.map((e=>r[e]||o(e)))).then((e=>(t(...e),c)))}}define(["./workbox-1bb06f5e"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"6741d367f596e247ba8d0092fc9dea61"},{url:"/_next/static/PePd3KC8oa8yu1IZohaSJ/_buildManifest.js",revision:"c155cce658e53418dec34664328b51ac"},{url:"/_next/static/PePd3KC8oa8yu1IZohaSJ/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/chunks/117-262e74e831d68762.js",revision:"PePd3KC8oa8yu1IZohaSJ"},{url:"/_next/static/chunks/420-29b30a9eda1b944c.js",revision:"PePd3KC8oa8yu1IZohaSJ"},{url:"/_next/static/chunks/app/_not-found/page-ccfa893b222483f3.js",revision:"PePd3KC8oa8yu1IZohaSJ"},{url:"/_next/static/chunks/app/fcm/page-9956ca256d41b2ff.js",revision:"PePd3KC8oa8yu1IZohaSJ"},{url:"/_next/static/chunks/app/layout-60b582a72bdeeafe.js",revision:"PePd3KC8oa8yu1IZohaSJ"},{url:"/_next/static/chunks/app/page-bf27225ea02f142e.js",revision:"PePd3KC8oa8yu1IZohaSJ"},{url:"/_next/static/chunks/fd9d1056-7d4e72c42d8031f7.js",revision:"PePd3KC8oa8yu1IZohaSJ"},{url:"/_next/static/chunks/framework-f66176bb897dc684.js",revision:"PePd3KC8oa8yu1IZohaSJ"},{url:"/_next/static/chunks/main-app-6a674f521cb85d7f.js",revision:"PePd3KC8oa8yu1IZohaSJ"},{url:"/_next/static/chunks/main-d74f2293dac314b7.js",revision:"PePd3KC8oa8yu1IZohaSJ"},{url:"/_next/static/chunks/pages/_app-72b849fbd24ac258.js",revision:"PePd3KC8oa8yu1IZohaSJ"},{url:"/_next/static/chunks/pages/_error-7ba65e1336b92748.js",revision:"PePd3KC8oa8yu1IZohaSJ"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-c7a9e188484bf6f5.js",revision:"PePd3KC8oa8yu1IZohaSJ"},{url:"/_next/static/css/6b050019bffa0caa.css",revision:"6b050019bffa0caa"},{url:"/_next/static/media/4473ecc91f70f139-s.p.woff",revision:"78e6fc13ea317b55ab0bd6dc4849c110"},{url:"/_next/static/media/463dafcda517f24f-s.p.woff",revision:"cbeb6d2d96eaa268b4b5beb0b46d9632"},{url:"/firebase-messaging-sw.js",revision:"2b28e0bd4b4b2b71ce814ccb1c9647ee"},{url:"/icons/icon512_maskable.png",revision:"28052a3d82c0d8d784ceca73a0e1ba9d"},{url:"/icons/icon512_rounded.png",revision:"b8d1c2eee765df1ab80ecf129f3b5986"},{url:"/manifest.webmanifest",revision:"9306e9eb8c8704b4c920081700cfa701"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:a,state:n})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
