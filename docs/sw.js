if(!self.define){let s,e={};const r=(r,i)=>(r=new URL(r+".js",i).href,e[r]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=r,s.onload=e,document.head.appendChild(s)}else s=r,importScripts(r),e()})).then((()=>{let s=e[r];if(!s)throw new Error(`Module ${r} didn’t register its module`);return s})));self.define=(i,n)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let o={};const t=s=>r(s,l),u={module:{uri:l},exports:o,require:t};e[l]=Promise.all(i.map((s=>u[s]||t(s)))).then((s=>(n(...s),o)))}}define(["./workbox-fa446783"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/__vite-browser-external-w40geAFS.js",revision:null},{url:"assets/binaryen-911hAc2d.js",revision:null},{url:"assets/binaryen-P2Tsh51H.js",revision:null},{url:"assets/binaryen-worker-pxXWGQDy.js",revision:null},{url:"assets/drag-and-drop-hF6Ymy03.js",revision:null},{url:"assets/file-handling-P_CIA7MT.js",revision:null},{url:"assets/file-system-observer-DDVDATSj.js",revision:null},{url:"assets/index-gg7apVQu.css",revision:null},{url:"assets/index-p8IUD2Qf.js",revision:null},{url:"assets/merge-worker-lmoN3mnQ.js",revision:null},{url:"assets/virtual_pwa-register-CbKcvDXT.js",revision:null},{url:"assets/wasm-merge-lCF_iJz2.js",revision:null},{url:"assets/wasm-merge-zZ-7ha50.js",revision:null},{url:"assets/web-share-target-xKNVYcir.js",revision:null},{url:"assets/workbox-window.prod.es5-prqDwDSL.js",revision:null},{url:"index.html",revision:"37aa561dd41da724a60deb216975edb6"},{url:"sharetargetsw.js",revision:"d874c39e9aeea426e3b64f666e6fd550"},{url:"maskable-icon.png",revision:"505ab550035e060645545981c3f01b33"},{url:"icon.png",revision:"6ccc68d8ea198758b158766f5a9b8f7c"},{url:"manifest.webmanifest",revision:"9a33f8d2d26b1dbfaa85ed597f74226f"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
