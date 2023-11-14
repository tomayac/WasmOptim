(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))n(a);new MutationObserver(a=>{for(const s of a)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function r(a){const s={};return a.integrity&&(s.integrity=a.integrity),a.referrerPolicy&&(s.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?s.credentials="include":a.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(a){if(a.ep)return;a.ep=!0;const s=r(a);fetch(a.href,s)}})();const M="modulepreload",U=function(e){return"/wasm-clamp/"+e},k={},w=function(t,r,n){if(!r||r.length===0)return t();const a=document.getElementsByTagName("link");return Promise.all(r.map(s=>{if(s=U(s),s in k)return;k[s]=!0;const i=s.endsWith(".css"),o=i?'[rel="stylesheet"]':"";if(!!n)for(let u=a.length-1;u>=0;u--){const d=a[u];if(d.href===s&&(!i||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${s}"]${o}`))return;const l=document.createElement("link");if(l.rel=i?"stylesheet":M,i||(l.as="script",l.crossOrigin=""),l.href=s,document.head.appendChild(l),i)return new Promise((u,d)=>{l.addEventListener("load",u),l.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>t()).catch(s=>{const i=new Event("vite:preloadError",{cancelable:!0});if(i.payload=s,window.dispatchEvent(i),!i.defaultPrevented)throw s})};const g=(()=>{if(typeof self>"u")return!1;if("top"in self&&self!==top)try{top.window.document._=0}catch{return!1}return"showOpenFilePicker"in self})(),$=g?Promise.resolve().then(function(){return K}):Promise.resolve().then(function(){return re});async function j(...e){return(await $).default(...e)}const W=g?Promise.resolve().then(function(){return Q}):Promise.resolve().then(function(){return ie});async function Z(...e){return(await W).default(...e)}const V=g?Promise.resolve().then(function(){return ee}):Promise.resolve().then(function(){return se});async function H(...e){return(await V).default(...e)}const G=async e=>{const t=await e.getFile();return t.handle=e,t};var Y=async(e=[{}])=>{Array.isArray(e)||(e=[e]);const t=[];e.forEach((a,s)=>{t[s]={description:a.description||"Files",accept:{}},a.mimeTypes?a.mimeTypes.map(i=>{t[s].accept[i]=a.extensions||[]}):t[s].accept["*/*"]=a.extensions||[]});const r=await window.showOpenFilePicker({id:e[0].id,startIn:e[0].startIn,types:t,multiple:e[0].multiple||!1,excludeAcceptAllOption:e[0].excludeAcceptAllOption||!1}),n=await Promise.all(r.map(G));return e[0].multiple?n:n[0]},K={__proto__:null,default:Y};function _(e){function t(r){if(Object(r)!==r)return Promise.reject(new TypeError(r+" is not an object."));var n=r.done;return Promise.resolve(r.value).then(function(a){return{value:a,done:n}})}return _=function(r){this.s=r,this.n=r.next},_.prototype={s:null,n:null,next:function(){return t(this.n.apply(this.s,arguments))},return:function(r){var n=this.s.return;return n===void 0?Promise.resolve({value:r,done:!0}):t(n.apply(this.s,arguments))},throw:function(r){var n=this.s.return;return n===void 0?Promise.reject(r):t(n.apply(this.s,arguments))}},new _(e)}const F=async(e,t,r=e.name,n)=>{const a=[],s=[];var i,o=!1,c=!1;try{for(var l,u=function(d){var f,m,p,y=2;for(typeof Symbol<"u"&&(m=Symbol.asyncIterator,p=Symbol.iterator);y--;){if(m&&(f=d[m])!=null)return f.call(d);if(p&&(f=d[p])!=null)return new _(f.call(d));m="@@asyncIterator",p="@@iterator"}throw new TypeError("Object is not async iterable")}(e.values());o=!(l=await u.next()).done;o=!1){const d=l.value,f=`${r}/${d.name}`;d.kind==="file"?s.push(d.getFile().then(m=>(m.directoryHandle=e,m.handle=d,Object.defineProperty(m,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>f})))):d.kind!=="directory"||!t||n&&n(d)||a.push(F(d,t,f,n))}}catch(d){c=!0,i=d}finally{try{o&&u.return!=null&&await u.return()}finally{if(c)throw i}}return[...(await Promise.all(a)).flat(),...await Promise.all(s)]};var X=async(e={})=>{e.recursive=e.recursive||!1,e.mode=e.mode||"read";const t=await window.showDirectoryPicker({id:e.id,startIn:e.startIn,mode:e.mode});return(await(await t.values()).next()).done?[t]:F(t,e.recursive,void 0,e.skipDirectory)},Q={__proto__:null,default:X},J=async(e,t=[{}],r=null,n=!1,a=null)=>{Array.isArray(t)||(t=[t]),t[0].fileName=t[0].fileName||"Untitled";const s=[];let i=null;if(e instanceof Blob&&e.type?i=e.type:e.headers&&e.headers.get("content-type")&&(i=e.headers.get("content-type")),t.forEach((l,u)=>{s[u]={description:l.description||"Files",accept:{}},l.mimeTypes?(u===0&&i&&l.mimeTypes.push(i),l.mimeTypes.map(d=>{s[u].accept[d]=l.extensions||[]})):i?s[u].accept[i]=l.extensions||[]:s[u].accept["*/*"]=l.extensions||[]}),r)try{await r.getFile()}catch(l){if(r=null,n)throw l}const o=r||await window.showSaveFilePicker({suggestedName:t[0].fileName,id:t[0].id,startIn:t[0].startIn,types:s,excludeAcceptAllOption:t[0].excludeAcceptAllOption||!1});!r&&a&&a(o);const c=await o.createWritable();return"stream"in e?(await e.stream().pipeTo(c),o):"body"in e?(await e.body.pipeTo(c),o):(await c.write(await e),await c.close(),o)},ee={__proto__:null,default:J},te=async(e=[{}])=>(Array.isArray(e)||(e=[e]),new Promise((t,r)=>{const n=document.createElement("input");n.type="file";const a=[...e.map(c=>c.mimeTypes||[]),...e.map(c=>c.extensions||[])].join();n.multiple=e[0].multiple||!1,n.accept=a||"",n.style.display="none",document.body.append(n);const s=c=>{typeof i=="function"&&i(),t(c)},i=e[0].legacySetup&&e[0].legacySetup(s,()=>i(r),n),o=()=>{window.removeEventListener("focus",o),n.remove()};n.addEventListener("click",()=>{window.addEventListener("focus",o)}),n.addEventListener("change",()=>{window.removeEventListener("focus",o),n.remove(),s(n.multiple?Array.from(n.files):n.files[0])}),"showPicker"in HTMLInputElement.prototype?n.showPicker():n.click()})),re={__proto__:null,default:te},ne=async(e=[{}])=>(Array.isArray(e)||(e=[e]),e[0].recursive=e[0].recursive||!1,new Promise((t,r)=>{const n=document.createElement("input");n.type="file",n.webkitdirectory=!0;const a=i=>{typeof s=="function"&&s(),t(i)},s=e[0].legacySetup&&e[0].legacySetup(a,()=>s(r),n);n.addEventListener("change",()=>{let i=Array.from(n.files);e[0].recursive?e[0].recursive&&e[0].skipDirectory&&(i=i.filter(o=>o.webkitRelativePath.split("/").every(c=>!e[0].skipDirectory({name:c,kind:"directory"})))):i=i.filter(o=>o.webkitRelativePath.split("/").length===2),a(i)}),"showPicker"in HTMLInputElement.prototype?n.showPicker():n.click()})),ie={__proto__:null,default:ne},ae=async(e,t={})=>{Array.isArray(t)&&(t=t[0]);const r=document.createElement("a");let n=e;"body"in e&&(n=await async function(i,o){const c=i.getReader(),l=new ReadableStream({start:f=>async function m(){return c.read().then(({done:p,value:y})=>{if(!p)return f.enqueue(y),m();f.close()})}()}),u=new Response(l),d=await u.blob();return c.releaseLock(),new Blob([d],{type:o})}(e.body,e.headers.get("content-type"))),r.download=t.fileName||"Untitled",r.href=URL.createObjectURL(await n);const a=()=>{typeof s=="function"&&s()},s=t.legacySetup&&t.legacySetup(a,()=>s(),r);return r.addEventListener("click",()=>{setTimeout(()=>URL.revokeObjectURL(r.href),3e4),a()}),r.click(),null},se={__proto__:null,default:ae};const B="/wasm-clamp/spinner.svg",oe=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],ce=["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],le=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],de=["b","kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],A=(e,t,r)=>{let n=e;return typeof t=="string"||Array.isArray(t)?n=e.toLocaleString(t,r):(t===!0||r!==void 0)&&(n=e.toLocaleString(void 0,r)),n};function T(e,t){if(!Number.isFinite(e))throw new TypeError(`Expected a finite number, got ${typeof e}: ${e}`);t={bits:!1,binary:!1,space:!0,...t};const r=t.bits?t.binary?de:le:t.binary?ce:oe,n=t.space?" ":"";if(t.signed&&e===0)return` 0${n}${r[0]}`;const a=e<0,s=a?"-":t.signed?"+":"";a&&(e=-e);let i;if(t.minimumFractionDigits!==void 0&&(i={minimumFractionDigits:t.minimumFractionDigits}),t.maximumFractionDigits!==void 0&&(i={maximumFractionDigits:t.maximumFractionDigits,...i}),e<1){const u=A(e,t.locale,i);return s+u+n+r[0]}const o=Math.min(Math.floor(t.binary?Math.log(e)/Math.log(1024):Math.log10(e)/3),r.length-1);e/=(t.binary?1024:1e3)**o,i||(e=e.toPrecision(3));const c=A(Number(e),t.locale,i),l=r[o];return s+c+n+l}const O="getUniqueId"in FileSystemHandle.prototype,q=async(e,t)=>{const r=[];async function n(s){for(const[i,o]of s)try{r[i]=await o()}catch(c){r[i]=new Error(`Failed with: ${c.message}`)}}const a=new Array(t).fill(e.entries()).map(n);return await Promise.allSettled(a),r},ue=(e,t)=>{let r;return function(...a){const s=()=>{clearTimeout(r),e(...a)};clearTimeout(r),r=setTimeout(s,t)}},me=async e=>{const t=[];async function r(a){const s=await new Promise(i=>a.readEntries(i));await Promise.all(s.map(async i=>{i.isDirectory?await r(i.createReader()):t.push(i)}))}const n=e.createReader();return await r(n),t},D=async(e,t,r=e.name,n)=>{const a=[],s=[];for await(const i of e.values()){const o=`${r}/${i.name}`;i.kind==="file"?s.push(i.getFile().then(c=>(c.directoryHandle=e,c.handle=i,Object.defineProperty(c,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>o})))):i.kind==="directory"&&t&&a.push(D(i,t,o))}return[...(await Promise.all(a)).flat(),...await Promise.all(s)]},x=Object.freeze(Object.defineProperty({__proto__:null,debounce:ue,limit:q,readDirectory:D,readDirectoryLegacy:me,supportsGetUniqueId:O},Symbol.toStringTag,{value:"Module"})),fe=document.querySelector("#load-wasm"),pe=document.querySelector("#load-directory");document.querySelector("#before-size");document.querySelector("#after-size");document.querySelector("#delta-size");const v=document.querySelector("#drop-area"),E=document.querySelector("#results-area"),ye=document.querySelector("#stats-template"),we=document.querySelector("#example-template"),he=document.querySelector("#stats-header"),I=document.querySelector("#overwrite-checkbox"),ge=document.querySelector("#observe-changes-checkbox"),R=document.querySelector("#examples-list"),z=new Map,b=async e=>{he.hidden=!1,E.closest("table").hidden=!1;const t=[];for(const r of e){const n=ye.content.cloneNode(!0),a=n.querySelector(".file-name"),s=n.querySelector(".before-size"),i=n.querySelector(".after-size"),o=n.querySelector(".delta-size"),c=n.querySelector(".spinner");c.src=B,a.querySelector("code").textContent=r.name,a.classList.add("processing"),s.textContent=T(r.size),E.append(n),t.push(()=>new Promise((l,u)=>{const d=new Worker(new URL("/wasm-clamp/assets/binaryen-worker-4ccba523.js",self.location));d.addEventListener("message",async f=>{d.terminate(),a.classList.remove("processing");const{wasmFileAfter:m,error:p}=f.data;if(p){u(p),a.classList.add("error"),i.classList.add("error"),o.classList.add("error"),i.textContent=p.name,o.textContent=p.message;return}i.textContent=T(m.size);const y=m.size-r.size;console.log(`${r.name} processed → Before: ${r.size} After: ${m.size} Delta: ${y}`);const L=Math.abs(100-m.size/r.size*100).toFixed(2);o.textContent=Number(L)===0?"no change":`${L}% ${y<0?"smaller":"larger"}`,o.classList.add(y<0?"size-smaller":"size-larger");const P=O&&r.handle?await r.handle.getUniqueId():r.name;if(a.dataset.uuid=P,z.set(P,{file:m,handle:r.handle}),y<0&&S&&g&&I.checked&&r.handle)try{const h=await r.handle.createWritable();await h.write(m),await h.close()}catch(h){console.error(h.name,h.message)}if(C&&ge.checked&&r.handle){const{getFileSystemChangeObserver:h}=await w(()=>import("./file-system-observer-98ad6deb.js"),[]);h().observe(r.handle),console.log(`${r.name} → Observing changes`)}l()}),d.postMessage({wasmFileBefore:r})}))}await q(t,"hardwareConcurrency"in navigator?Math.floor(navigator.hardwareConcurrency/2):4)},ve=async e=>{for(const t of e)await t.handle.requestPermission({mode:"readwrite"})},be=["https://unpkg.com/canvaskit-wasm@0.39.1/bin/canvaskit.wasm","https://unpkg.com/zxing-wasm@1.0.0-rc.4/dist/full/zxing_full.wasm","https://unpkg.com/@sqlite.org/sqlite-wasm@3.44.0-build1/sqlite-wasm/jswasm/sqlite3.wasm","https://unpkg.com/@tensorflow/tfjs-backend-wasm@4.13.0/wasm-out/tfjs-backend-wasm.wasm"],_e=/@(0|[1-9]\d*)\.(0|[1-9]\d*)\.(0|[1-9]\d*)(?:-((?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*)(?:\.(?:0|[1-9]\d*|\d*[a-zA-Z-][0-9a-zA-Z-]*))*))?(?:\+([0-9a-zA-Z-]+(?:\.[0-9a-zA-Z-]+)*))?/;be.forEach(e=>{const t=we.content.cloneNode(!0),r=t.querySelector("code"),n=t.querySelector("a");r.textContent=e.replace("https://unpkg.com/","").replace(_e,""),n.href=e,R.append(t)});R.addEventListener("click",async e=>{if(e.target.nodeName.toLowerCase()!=="code")return;e.preventDefault();const t=e.target.closest("a"),r=t.href,n=t.parentNode.querySelector(".downloading");n.hidden=!1;const a=t.parentNode.querySelector("img");a.src=B;const s=await fetch(r).then(o=>o.blob());a.removeAttribute("src"),n.hidden=!0;const i=new File([s],r.split("/").pop(),{type:"application/wasm"});i.handle=!1,b([i])});document.addEventListener("paste",e=>{try{if(!e.clipboardData.files.length)return;const t=Array.from(e.clipboardData.files).filter(r=>r.type==="application/wasm"||r.name.endsWith(".wasm"));b(t)}catch(t){console.error(t.name,t.message)}});E.addEventListener("click",async e=>{if(e.preventDefault(),e.target.nodeName.toLowerCase()!=="code")return;const t=e.target.closest("a");if(!t.classList.contains("file-name")||t.classList.contains("error")||t.classList.contains("processing"))return;const r=t.dataset.uuid,{file:n}=z.get(r);try{await H(n,{fileName:n.name,extensions:[".wasm"],mimeTypes:["application/wasm"]})}catch(a){if(a.name==="AbortError")return;console.error(a.name,a.message)}});pe.addEventListener("click",async()=>{try{const t=(await Z({recursive:!0,mode:"readwrite"})).filter(r=>r.type==="application/wasm"||r.name.endsWith(".wasm"));b(t)}catch(e){if(e.name==="AbortError")return;console.error(e.name,e.message)}});fe.addEventListener("click",async()=>{try{const e=await j({mimeTypes:["application/wasm"],extensions:[".wasm"],multiple:!0});if(!e||!e.length)return;b(e)}catch(e){if(e.name==="AbortError")return;console.error(e.name,e.message)}});v.addEventListener("dragover",e=>{e.preventDefault()});v.addEventListener("dragenter",e=>{v.classList.add("drag-hover")});v.addEventListener("dragleave",e=>{v.classList.remove("drag-hover")});v.addEventListener("drop",async e=>{e.preventDefault(),v.classList.remove("drag-hover");const t=[...e.dataTransfer.items].filter(n=>n.kind==="file").map(n=>S?n.getAsFileSystemHandle():n.webkitGetAsEntry()),r=[];for await(const n of t){if(n.kind==="directory"){const{readDirectory:s}=await w(()=>Promise.resolve().then(()=>x),void 0);let i=await s(n,!0);i=i.filter(o=>o.type==="application/wasm"||o.name.endsWith(".wasm")),r.push(...i);continue}else if(n.isDirectory){const{readDirectoryLegacy:s}=await w(()=>Promise.resolve().then(()=>x),void 0);let i=await s(n);i=i.filter(o=>o.name.endsWith(".wasm")),r.push(...await Promise.all(i.map(async o=>new Promise(c=>o.file(c)))));continue}let a;n.kind==="file"?(a=await n.getFile(),a.handle=n):n.isFile&&(a=await new Promise(s=>n.file(i=>s(i)))),!(a.type&&a.type!=="application/wasm"||!a.name.endsWith(".wasm"))&&r.push(a)}g&&g&&I.checked&&await ve(r),b(r)});const N=e=>{const t=document.querySelector("meta[name=theme-color]");if(e.matches){t.content="Canvas";return}};matchMedia("(prefers-color-scheme: dark)").addEventListener("change",N);N(matchMedia("(prefers-color-scheme: dark)"));const S="getAsFileSystemHandle"in DataTransferItem.prototype,C="FileSystemObserver"in window;(async()=>{if(C&&w(()=>import("./file-system-observer-98ad6deb.js"),[]),S&&g&&w(()=>import("./drag-and-drop-c62d89f9.js"),[]),"launchQueue"in window&&"files"in LaunchParams.prototype&&w(()=>import("./file-handling-3795eb25.js"),[]),"serviceWorker"in navigator){const{registerSW:e}=await w(()=>import("./virtual_pwa-register-1a226de6.js"),[]);e({onOfflineReady(){},onNeedRefresh(){location.reload()}})(),w(()=>import("./web-share-target-9a2263c9.js"),[])}})();export{w as _,b as a,I as b,ve as c,ue as d,g as e,ge as o,O as s,z as u};
