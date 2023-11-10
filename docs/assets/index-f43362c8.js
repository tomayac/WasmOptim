(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();const A="/wasm-clamp/spinner.svg",w=(()=>{if(typeof self>"u")return!1;if("top"in self&&self!==top)try{top.window.document._=0}catch{return!1}return"showOpenFilePicker"in self})(),q=w?Promise.resolve().then(function(){return M}):Promise.resolve().then(function(){return W});async function I(...e){return(await q).default(...e)}w?Promise.resolve().then(function(){return j}):Promise.resolve().then(function(){return Y});const N=w?Promise.resolve().then(function(){return R}):Promise.resolve().then(function(){return Z});async function z(...e){return(await N).default(...e)}const D=async e=>{const t=await e.getFile();return t.handle=e,t};var O=async(e=[{}])=>{Array.isArray(e)||(e=[e]);const t=[];e.forEach((i,s)=>{t[s]={description:i.description||"Files",accept:{}},i.mimeTypes?i.mimeTypes.map(a=>{t[s].accept[a]=i.extensions||[]}):t[s].accept["*/*"]=i.extensions||[]});const n=await window.showOpenFilePicker({id:e[0].id,startIn:e[0].startIn,types:t,multiple:e[0].multiple||!1,excludeAcceptAllOption:e[0].excludeAcceptAllOption||!1}),r=await Promise.all(n.map(D));return e[0].multiple?r:r[0]},M={__proto__:null,default:O};function b(e){function t(n){if(Object(n)!==n)return Promise.reject(new TypeError(n+" is not an object."));var r=n.done;return Promise.resolve(n.value).then(function(i){return{value:i,done:r}})}return b=function(n){this.s=n,this.n=n.next},b.prototype={s:null,n:null,next:function(){return t(this.n.apply(this.s,arguments))},return:function(n){var r=this.s.return;return r===void 0?Promise.resolve({value:n,done:!0}):t(r.apply(this.s,arguments))},throw:function(n){var r=this.s.return;return r===void 0?Promise.reject(n):t(r.apply(this.s,arguments))}},new b(e)}const B=async(e,t,n=e.name,r)=>{const i=[],s=[];var a,o=!1,c=!1;try{for(var d,m=function(l){var f,u,p,y=2;for(typeof Symbol<"u"&&(u=Symbol.asyncIterator,p=Symbol.iterator);y--;){if(u&&(f=l[u])!=null)return f.call(l);if(p&&(f=l[p])!=null)return new b(f.call(l));u="@@asyncIterator",p="@@iterator"}throw new TypeError("Object is not async iterable")}(e.values());o=!(d=await m.next()).done;o=!1){const l=d.value,f=`${n}/${l.name}`;l.kind==="file"?s.push(l.getFile().then(u=>(u.directoryHandle=e,u.handle=l,Object.defineProperty(u,"webkitRelativePath",{configurable:!0,enumerable:!0,get:()=>f})))):l.kind!=="directory"||!t||r&&r(l)||i.push(B(l,t,f,r))}}catch(l){c=!0,a=l}finally{try{o&&m.return!=null&&await m.return()}finally{if(c)throw a}}return[...(await Promise.all(i)).flat(),...await Promise.all(s)]};var U=async(e={})=>{e.recursive=e.recursive||!1,e.mode=e.mode||"read";const t=await window.showDirectoryPicker({id:e.id,startIn:e.startIn,mode:e.mode});return(await(await t.values()).next()).done?[t]:B(t,e.recursive,void 0,e.skipDirectory)},j={__proto__:null,default:U},C=async(e,t=[{}],n=null,r=!1,i=null)=>{Array.isArray(t)||(t=[t]),t[0].fileName=t[0].fileName||"Untitled";const s=[];let a=null;if(e instanceof Blob&&e.type?a=e.type:e.headers&&e.headers.get("content-type")&&(a=e.headers.get("content-type")),t.forEach((d,m)=>{s[m]={description:d.description||"Files",accept:{}},d.mimeTypes?(m===0&&a&&d.mimeTypes.push(a),d.mimeTypes.map(l=>{s[m].accept[l]=d.extensions||[]})):a?s[m].accept[a]=d.extensions||[]:s[m].accept["*/*"]=d.extensions||[]}),n)try{await n.getFile()}catch(d){if(n=null,r)throw d}const o=n||await window.showSaveFilePicker({suggestedName:t[0].fileName,id:t[0].id,startIn:t[0].startIn,types:s,excludeAcceptAllOption:t[0].excludeAcceptAllOption||!1});!n&&i&&i(o);const c=await o.createWritable();return"stream"in e?(await e.stream().pipeTo(c),o):"body"in e?(await e.body.pipeTo(c),o):(await c.write(await e),await c.close(),o)},R={__proto__:null,default:C},H=async(e=[{}])=>(Array.isArray(e)||(e=[e]),new Promise((t,n)=>{const r=document.createElement("input");r.type="file";const i=[...e.map(c=>c.mimeTypes||[]),...e.map(c=>c.extensions||[])].join();r.multiple=e[0].multiple||!1,r.accept=i||"",r.style.display="none",document.body.append(r);const s=c=>{typeof a=="function"&&a(),t(c)},a=e[0].legacySetup&&e[0].legacySetup(s,()=>a(n),r),o=()=>{window.removeEventListener("focus",o),r.remove()};r.addEventListener("click",()=>{window.addEventListener("focus",o)}),r.addEventListener("change",()=>{window.removeEventListener("focus",o),r.remove(),s(r.multiple?Array.from(r.files):r.files[0])}),"showPicker"in HTMLInputElement.prototype?r.showPicker():r.click()})),W={__proto__:null,default:H},$=async(e=[{}])=>(Array.isArray(e)||(e=[e]),e[0].recursive=e[0].recursive||!1,new Promise((t,n)=>{const r=document.createElement("input");r.type="file",r.webkitdirectory=!0;const i=a=>{typeof s=="function"&&s(),t(a)},s=e[0].legacySetup&&e[0].legacySetup(i,()=>s(n),r);r.addEventListener("change",()=>{let a=Array.from(r.files);e[0].recursive?e[0].recursive&&e[0].skipDirectory&&(a=a.filter(o=>o.webkitRelativePath.split("/").every(c=>!e[0].skipDirectory({name:c,kind:"directory"})))):a=a.filter(o=>o.webkitRelativePath.split("/").length===2),i(a)}),"showPicker"in HTMLInputElement.prototype?r.showPicker():r.click()})),Y={__proto__:null,default:$},G=async(e,t={})=>{Array.isArray(t)&&(t=t[0]);const n=document.createElement("a");let r=e;"body"in e&&(r=await async function(a,o){const c=a.getReader(),d=new ReadableStream({start:f=>async function u(){return c.read().then(({done:p,value:y})=>{if(!p)return f.enqueue(y),u();f.close()})}()}),m=new Response(d),l=await m.blob();return c.releaseLock(),new Blob([l],{type:o})}(e.body,e.headers.get("content-type"))),n.download=t.fileName||"Untitled",n.href=URL.createObjectURL(await r);const i=()=>{typeof s=="function"&&s()},s=t.legacySetup&&t.legacySetup(i,()=>s(),n);return n.addEventListener("click",()=>{setTimeout(()=>URL.revokeObjectURL(n.href),3e4),i()}),n.click(),null},Z={__proto__:null,default:G};const K=["B","kB","MB","GB","TB","PB","EB","ZB","YB"],Q=["B","KiB","MiB","GiB","TiB","PiB","EiB","ZiB","YiB"],X=["b","kbit","Mbit","Gbit","Tbit","Pbit","Ebit","Zbit","Ybit"],J=["b","kibit","Mibit","Gibit","Tibit","Pibit","Eibit","Zibit","Yibit"],E=(e,t,n)=>{let r=e;return typeof t=="string"||Array.isArray(t)?r=e.toLocaleString(t,n):(t===!0||n!==void 0)&&(r=e.toLocaleString(void 0,n)),r};function x(e,t){if(!Number.isFinite(e))throw new TypeError(`Expected a finite number, got ${typeof e}: ${e}`);t={bits:!1,binary:!1,space:!0,...t};const n=t.bits?t.binary?J:X:t.binary?Q:K,r=t.space?" ":"";if(t.signed&&e===0)return` 0${r}${n[0]}`;const i=e<0,s=i?"-":t.signed?"+":"";i&&(e=-e);let a;if(t.minimumFractionDigits!==void 0&&(a={minimumFractionDigits:t.minimumFractionDigits}),t.maximumFractionDigits!==void 0&&(a={maximumFractionDigits:t.maximumFractionDigits,...a}),e<1){const m=E(e,t.locale,a);return s+m+r+n[0]}const o=Math.min(Math.floor(t.binary?Math.log(e)/Math.log(1024):Math.log10(e)/3),n.length-1);e/=(t.binary?1024:1e3)**o,a||(e=e.toPrecision(3));const c=E(Number(e),t.locale,a),d=n[o];return s+c+r+d}const V=document.querySelector("#load-wasm");document.querySelector("#before-size");document.querySelector("#after-size");document.querySelector("#delta-size");const g=document.querySelector("#drop-area"),k=document.querySelector("#results-area"),ee=document.querySelector("#stats-template"),te=document.querySelector("#example-template"),re=document.querySelector("#stats-header"),h=document.querySelector("#overwrite-checkbox"),F=document.querySelector("#examples-list");async function ne(e,t){const n=[];async function r(s){for(const[a,o]of s)try{n[a]=await o()}catch(c){n[a]=new Error(`Failed with: ${c.message}`)}}const i=new Array(t).fill(e.entries()).map(r);return await Promise.allSettled(i),n}const ie=["https://unpkg.com/@mediapipe/tasks-vision@0.10.7/wasm/vision_wasm_internal.wasm","https://unpkg.com/@sqlite.org/sqlite-wasm@3.44.0-build1/sqlite-wasm/jswasm/sqlite3.wasm","https://unpkg.com/@tensorflow/tfjs-backend-wasm@4.13.0/wasm-out/tfjs-backend-wasm.wasm"],L="getAsFileSystemHandle"in DataTransferItem.prototype,T=new Map;L&&w&&(h.parentNode.hidden=!1,h.addEventListener("change",()=>{localStorage.setItem("overwrite",h.checked)}),localStorage.getItem("overwrite")!=="true"?h.checked=!1:h.checked=!0),ie.forEach(e=>{const t=te.content.cloneNode(!0),n=t.querySelector("code"),r=t.querySelector("a");n.textContent=e.replace("https://unpkg.com/","").replace(/@\d+(\.\d+)*/g,""),r.href=e,F.append(t)});document.addEventListener("paste",e=>{try{if(!e.clipboardData.files.length)return;const t=Array.from(e.clipboardData.files).filter(n=>n.type==="application/wasm"||n.name.endsWith(".wasm"));v(t)}catch(t){console.error(t.name,t.message)}});F.addEventListener("click",async e=>{if(!e.target.nodeName.toLowerCase()==="code")return;e.preventDefault();const t=e.target.closest("a"),n=t.href,r=t.parentNode.querySelector(".downloading");r.hidden=!1;const i=t.parentNode.querySelector("img");i.src=A;const s=await fetch(n).then(o=>o.blob());i.src="",r.hidden=!0;const a=new File([s],n.split("/").pop(),{type:"application/wasm"});a.handle=!1,v([a])});k.addEventListener("click",async e=>{if(!e.target.nodeName.toLowerCase()==="code")return;const t=e.target.closest("a");if(!t.classList.contains("file-name")||t.dataset.processing)return;e.preventDefault();const n=t.dataset.uuid,r=T.get(n);try{await z(r,{fileName:r.name,extensions:[".wasm"],mimeTypes:["application/wasm"]})}catch(i){if(i.name==="AbortError")return;console.error(i.name,i.message)}});V.addEventListener("click",async()=>{try{const e=await I({mimeTypes:["application/wasm"],extensions:[".wasm"],multiple:!0});if(!e||!e.length)return;v(e)}catch(e){if(e.name==="AbortError")return;console.error(e.name,e.message)}});g.addEventListener("dragover",e=>{e.preventDefault()});g.addEventListener("dragenter",e=>{g.classList.add("drag-hover")});g.addEventListener("dragleave",e=>{g.classList.remove("drag-hover")});g.addEventListener("drop",async e=>{e.preventDefault(),g.classList.remove("drag-hover");const t=[...e.dataTransfer.items].filter(r=>r.kind==="file").map(r=>L?r.getAsFileSystemHandle():r.getAsFile()),n=[];for await(const r of t){let i=r;r.kind==="file"&&(i=await r.getFile(),i.handle=r),!(i.type&&i.type!=="application/wasm"||!i.name.endsWith(".wasm"))&&n.push(i)}w&&w&&h.checked&&await _(n),v(n)});"launchQueue"in window&&"files"in LaunchParams.prototype&&launchQueue.setConsumer(async e=>{if(!e.files.length)return;const t=[];for(const n of e.files){const r=await n.getFile();r.handle=n,!(r.type&&r.type!=="application/wasm"||!r.name.endsWith(".wasm"))&&t.push(r)}w&&w&&h.checked&&await _(t),v(t)});const _=async e=>{for(const t of e)await t.handle.requestPermission({mode:"readwrite"})},v=async e=>{re.hidden=!1,k.closest("table").hidden=!1;const t=[];for(const n of e){const r=ee.content.cloneNode(!0),i=r.querySelector(".file-name"),s=r.querySelector(".before-size"),a=r.querySelector(".after-size"),o=r.querySelector(".delta-size"),c=r.querySelector(".spinner");c.src=A,i.querySelector("code").textContent=n.name,i.dataset.processing=!0,s.textContent=x(n.size),k.append(r),t.push(()=>new Promise((d,m)=>{const l=new Worker(new URL("/wasm-clamp/assets/worker-852eb24e.js",self.location));l.addEventListener("message",async f=>{l.terminate();const{wasmFileAfter:u,error:p}=f.data;if(p){m(p),i.classList.add("error"),a.classList.add("error"),o.classList.add("error"),a.textContent=p.name,o.textContent=p.message;return}a.textContent=x(u.size);const y=u.size-n.size;if(console.log(n.name,"→","Before:",n.size,"After:",u.size,"Delta:",y),o.textContent=`${Math.abs(100-u.size/n.size*100).toFixed(2)}% ${y<0?"smaller":"larger"}`,y<0?o.classList.add("size-smaller"):y>=0&&o.classList.add("size-larger"),y<0){const S=crypto.randomUUID();i.dataset.uuid=S,delete i.dataset.processing,T.set(S,u),L&&w&&h.checked&&n.handle&&await n.handle.createWritable().then(P=>{P.write(u),P.close()})}d()}),l.postMessage({wasmFileBefore:n})}))}await ne(t,"hardwareConcurrency"in navigator?Math.floor(navigator.hardwareConcurrency/2):4)};
