if(!self.define){let s,e={};const r=(r,i)=>(r=new URL(r+".js",i).href,e[r]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=r,s.onload=e,document.head.appendChild(s)}else s=r,importScripts(r),e()})).then((()=>{let s=e[r];if(!s)throw new Error(`Module ${r} didn’t register its module`);return s})));self.define=(i,n)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let a={};const o=s=>r(s,l),t={module:{uri:l},exports:a,require:o};e[l]=Promise.all(i.map((s=>t[s]||o(s)))).then((s=>(n(...s),a)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/binaryen_wasm-08tgcfbo.js",revision:null},{url:"assets/binaryen_wasm-vg6aoQis.wasm",revision:null},{url:"assets/binaryen_wasm-vYOeYSHe.js",revision:null},{url:"assets/binaryen-worker-wNMH2Mls.js",revision:null},{url:"assets/file-handling-FRQQhFDZ.js",revision:null},{url:"assets/file-system-legacy-a9xyRQTO.js",revision:null},{url:"assets/file-system-observer-sctZQ2PY.js",revision:null},{url:"assets/file-system-uSz8CNLm.js",revision:null},{url:"assets/index-5tyMNrCW.js",revision:null},{url:"assets/index-Q8cJoy3P.js",revision:null},{url:"assets/index-TZXhtMxH.css",revision:null},{url:"assets/main-UZw-qpq8.js",revision:null},{url:"assets/merge-worker-E3A-M96p.js",revision:null},{url:"assets/virtual_pwa-register-kWgNnyAo.js",revision:null},{url:"assets/wasm-merge-ee8DJatC.wasm",revision:null},{url:"assets/wasm-merge-XJypaZaX.js",revision:null},{url:"assets/wasm-merge-zZ-7ha50.js",revision:null},{url:"assets/web-share-target-uNtQ88DD.js",revision:null},{url:"assets/workbox-window.prod.es5-prqDwDSL.js",revision:null},{url:"icon.png",revision:"6ccc68d8ea198758b158766f5a9b8f7c"},{url:"index.html",revision:"a3a5043ae3ea89609759b86c1db98599"},{url:"maskable-icon.png",revision:"505ab550035e060645545981c3f01b33"},{url:"screenshot-desktop-dark.png",revision:"0f21d9aad1c477412001f6b13ce28f9e"},{url:"screenshot-desktop-light.png",revision:"af7b4a24b8fb39418c849d506e167553"},{url:"screenshot-mobile-dark.png",revision:"0308f6323de67a502cc11e3c8f63634f"},{url:"screenshot-mobile-light.png",revision:"9f8cf3d21b19ef573479503995f78663"},{url:"sharetargetsw.js",revision:"d874c39e9aeea426e3b64f666e6fd550"},{url:"spinner.svg",revision:"068c25a9cdb15f2d3095a21aff1becc4"},{url:"wasm-icon.svg",revision:"dd206e361d35fd8a49d9375ad548b68c"},{url:"maskable-icon.png",revision:"505ab550035e060645545981c3f01b33"},{url:"icon.png",revision:"6ccc68d8ea198758b158766f5a9b8f7c"},{url:"manifest.webmanifest",revision:"e5bf6986dd9172022154701161ee1873"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
