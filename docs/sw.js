if(!self.define){let e,s={};const r=(r,i)=>(r=new URL(r+".js",i).href,s[r]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=s,document.head.appendChild(e)}else e=r,importScripts(r),s()})).then((()=>{let e=s[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(i,n)=>{const l=e||("document"in self?document.currentScript.src:"")||location.href;if(s[l])return;let o={};const a=e=>r(e,l),t={module:{uri:l},exports:o,require:a};s[l]=Promise.all(i.map((e=>t[e]||a(e)))).then((e=>(n(...e),o)))}}define(["./workbox-fa446783"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/binaryen_wasm-jWqOSAAT.js",revision:null},{url:"assets/binaryen_wasm-oRR6JeeR.js",revision:null},{url:"assets/binaryen_wasm-r8Q--SC0.wasm",revision:null},{url:"assets/binaryen-worker-vGG0wOcy.js",revision:null},{url:"assets/file-handling-O010qaA2.js",revision:null},{url:"assets/index-5JlHWayF.css",revision:null},{url:"assets/index-5tyMNrCW.js",revision:null},{url:"assets/index-J6OeaLJW.js",revision:null},{url:"assets/merge-worker-ib07Dost.js",revision:null},{url:"assets/virtual_pwa-register-jKqSgr2k.js",revision:null},{url:"assets/wasm-merge-7ok0ZlNP.js",revision:null},{url:"assets/wasm-merge-e5IqBEBc.wasm",revision:null},{url:"assets/wasm-merge-zZ-7ha50.js",revision:null},{url:"assets/web-share-target-wvGHF9t8.js",revision:null},{url:"assets/workbox-window.prod.es5-prqDwDSL.js",revision:null},{url:"icon.png",revision:"6ccc68d8ea198758b158766f5a9b8f7c"},{url:"index.html",revision:"da18895b21b74dd26e6c30b96b4251b7"},{url:"maskable-icon.png",revision:"505ab550035e060645545981c3f01b33"},{url:"screenshot-desktop-dark.png",revision:"ec79e7dc29483a5cafdc1bd8c5048ab4"},{url:"screenshot-desktop-light.png",revision:"f1662d767e06603d9cdaef5e2b3efb0e"},{url:"screenshot-mobile-dark.png",revision:"401fc7bf8aad4c544900dc754b8eb3bd"},{url:"screenshot-mobile-light.png",revision:"a477b6566418196a46b06f0764d9c6e2"},{url:"sharetargetsw.js",revision:"d874c39e9aeea426e3b64f666e6fd550"},{url:"spinner.svg",revision:"068c25a9cdb15f2d3095a21aff1becc4"},{url:"wasm-icon.svg",revision:"dd206e361d35fd8a49d9375ad548b68c"},{url:"maskable-icon.png",revision:"505ab550035e060645545981c3f01b33"},{url:"icon.png",revision:"6ccc68d8ea198758b158766f5a9b8f7c"},{url:"manifest.webmanifest",revision:"e5bf6986dd9172022154701161ee1873"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
