if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const o=e=>r(e,l),a={module:{uri:l},exports:t,require:o};s[l]=Promise.all(i.map((e=>a[e]||o(e)))).then((e=>(n(...e),t)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/__vite-browser-external-4ed993c7.js",revision:null},{url:"assets/binaryen-worker-4ccba523.js",revision:null},{url:"assets/drag-and-drop-ec65100c.js",revision:null},{url:"assets/file-handling-ba962f0a.js",revision:null},{url:"assets/file-system-observer-a3eeb52c.js",revision:null},{url:"assets/index-5b10ca56.css",revision:null},{url:"assets/index-fc2b9428.js",revision:null},{url:"assets/virtual_pwa-register-fc75df79.js",revision:null},{url:"assets/web-share-target-ea5151a9.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"index.html",revision:"6698eeeb80624c780e4c1232f573a08c"},{url:"sharetargetsw.js",revision:"d874c39e9aeea426e3b64f666e6fd550"},{url:"maskable-icon.png",revision:"505ab550035e060645545981c3f01b33"},{url:"icon.png",revision:"6ccc68d8ea198758b158766f5a9b8f7c"},{url:"manifest.webmanifest",revision:"54f3efef3784508b57df1e45db1ae3c4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
