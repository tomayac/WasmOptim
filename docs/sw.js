if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let t={};const o=e=>r(e,l),a={module:{uri:l},exports:t,require:o};s[l]=Promise.all(i.map((e=>a[e]||o(e)))).then((e=>(n(...e),t)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/__vite-browser-external-4ed993c7.js",revision:null},{url:"assets/binaryen-worker-4ccba523.js",revision:null},{url:"assets/file-handle-drag-and-drop-2d317f3b.js",revision:null},{url:"assets/file-handling-b0978831.js",revision:null},{url:"assets/index-28ea88aa.css",revision:null},{url:"assets/index-d98240c6.js",revision:null},{url:"assets/virtual_pwa-register-ab2d0bb0.js",revision:null},{url:"assets/web-share-target-351381ab.js",revision:null},{url:"assets/workbox-window.prod.es5-a7b12eab.js",revision:null},{url:"index.html",revision:"6b50f0929b24fc34bc2d315ba9e4a83d"},{url:"sharetargetsw.js",revision:"1eb991de4194acc22ea3b23157d71a8d"},{url:"maskable-icon.png",revision:"505ab550035e060645545981c3f01b33"},{url:"icon.png",revision:"6ccc68d8ea198758b158766f5a9b8f7c"},{url:"manifest.webmanifest",revision:"54f3efef3784508b57df1e45db1ae3c4"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
