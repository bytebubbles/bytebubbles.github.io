const Fl=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))i(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const l of r.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerpolicy&&(r.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?r.credentials="include":o.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(o){if(o.ep)return;o.ep=!0;const r=n(o);fetch(o.href,r)}};Fl();function Oo(e,t){const n=Object.create(null),i=e.split(",");for(let o=0;o<i.length;o++)n[i[o]]=!0;return t?o=>!!n[o.toLowerCase()]:o=>!!n[o]}const D1={},ot=[],oe=()=>{},$l=()=>!1,Rl=/^on[^a-z]/,li=e=>Rl.test(e),zo=e=>e.startsWith("onUpdate:"),A1=Object.assign,Bo=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},Pl=Object.prototype.hasOwnProperty,M1=(e,t)=>Pl.call(e,t),x1=Array.isArray,Ft=e=>si(e)==="[object Map]",Ul=e=>si(e)==="[object Set]",L1=e=>typeof e=="function",j1=e=>typeof e=="string",Fo=e=>typeof e=="symbol",N1=e=>e!==null&&typeof e=="object",Er=e=>N1(e)&&L1(e.then)&&L1(e.catch),Ql=Object.prototype.toString,si=e=>Ql.call(e),ql=e=>si(e).slice(8,-1),Wl=e=>si(e)==="[object Object]",$o=e=>j1(e)&&e!=="NaN"&&e[0]!=="-"&&""+parseInt(e,10)===e,Nn=Oo(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),ai=e=>{const t=Object.create(null);return n=>t[n]||(t[n]=e(n))},Kl=/-(\w)/g,ue=ai(e=>e.replace(Kl,(t,n)=>n?n.toUpperCase():"")),Yl=/\B([A-Z])/g,Mt=ai(e=>e.replace(Yl,"-$1").toLowerCase()),ci=ai(e=>e.charAt(0).toUpperCase()+e.slice(1)),Vi=ai(e=>e?`on${ci(e)}`:""),Gt=(e,t)=>!Object.is(e,t),Ti=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},Bn=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},Gl=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let V2;const Xi=()=>V2||(V2=typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:typeof global!="undefined"?global:{});function di(e){if(x1(e)){const t={};for(let n=0;n<e.length;n++){const i=e[n],o=j1(i)?t3(i):di(i);if(o)for(const r in o)t[r]=o[r]}return t}else{if(j1(e))return e;if(N1(e))return e}}const Xl=/;(?![^(]*\))/g,Jl=/:([^]+)/,e3=new RegExp("\\/\\*.*?\\*\\/","gs");function t3(e){const t={};return e.replace(e3,"").split(Xl).forEach(n=>{if(n){const i=n.split(Jl);i.length>1&&(t[i[0].trim()]=i[1].trim())}}),t}function Ro(e){let t="";if(j1(e))t=e;else if(x1(e))for(let n=0;n<e.length;n++){const i=Ro(e[n]);i&&(t+=i+" ")}else if(N1(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}const n3="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",i3=Oo(n3);function Nr(e){return!!e||e===""}let te;class o3{constructor(t=!1){this.detached=t,this._active=!0,this.effects=[],this.cleanups=[],this.parent=te,!t&&te&&(this.index=(te.scopes||(te.scopes=[])).push(this)-1)}get active(){return this._active}run(t){if(this._active){const n=te;try{return te=this,t()}finally{te=n}}}on(){te=this}off(){te=this.parent}stop(t){if(this._active){let n,i;for(n=0,i=this.effects.length;n<i;n++)this.effects[n].stop();for(n=0,i=this.cleanups.length;n<i;n++)this.cleanups[n]();if(this.scopes)for(n=0,i=this.scopes.length;n<i;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!t){const o=this.parent.scopes.pop();o&&o!==this&&(this.parent.scopes[this.index]=o,o.index=this.index)}this.parent=void 0,this._active=!1}}}function r3(e,t=te){t&&t.active&&t.effects.push(e)}function l3(){return te}const Po=e=>{const t=new Set(e);return t.w=0,t.n=0,t},Ar=e=>(e.w&Ae)>0,Sr=e=>(e.n&Ae)>0,s3=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=Ae},a3=e=>{const{deps:t}=e;if(t.length){let n=0;for(let i=0;i<t.length;i++){const o=t[i];Ar(o)&&!Sr(o)?o.delete(e):t[n++]=o,o.w&=~Ae,o.n&=~Ae}t.length=n}},Ji=new WeakMap;let St=0,Ae=1;const eo=30;let ne;const Ue=Symbol(""),to=Symbol("");class Uo{constructor(t,n=null,i){this.fn=t,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,r3(this,i)}run(){if(!this.active)return this.fn();let t=ne,n=De;for(;t;){if(t===this)return;t=t.parent}try{return this.parent=ne,ne=this,De=!0,Ae=1<<++St,St<=eo?s3(this):T2(this),this.fn()}finally{St<=eo&&a3(this),Ae=1<<--St,ne=this.parent,De=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){ne===this?this.deferStop=!0:this.active&&(T2(this),this.onStop&&this.onStop(),this.active=!1)}}function T2(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let De=!0;const Ir=[];function _t(){Ir.push(De),De=!1}function Ht(){const e=Ir.pop();De=e===void 0?!0:e}function U1(e,t,n){if(De&&ne){let i=Ji.get(e);i||Ji.set(e,i=new Map);let o=i.get(n);o||i.set(n,o=Po()),jr(o)}}function jr(e,t){let n=!1;St<=eo?Sr(e)||(e.n|=Ae,n=!Ar(e)):n=!e.has(ne),n&&(e.add(ne),ne.deps.push(e))}function xe(e,t,n,i,o,r){const l=Ji.get(e);if(!l)return;let s=[];if(t==="clear")s=[...l.values()];else if(n==="length"&&x1(e)){const a=Number(i);l.forEach((d,c)=>{(c==="length"||c>=a)&&s.push(d)})}else switch(n!==void 0&&s.push(l.get(n)),t){case"add":x1(e)?$o(n)&&s.push(l.get("length")):(s.push(l.get(Ue)),Ft(e)&&s.push(l.get(to)));break;case"delete":x1(e)||(s.push(l.get(Ue)),Ft(e)&&s.push(l.get(to)));break;case"set":Ft(e)&&s.push(l.get(Ue));break}if(s.length===1)s[0]&&no(s[0]);else{const a=[];for(const d of s)d&&a.push(...d);no(Po(a))}}function no(e,t){const n=x1(e)?e:[...e];for(const i of n)i.computed&&k2(i);for(const i of n)i.computed||k2(i)}function k2(e,t){(e!==ne||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const c3=Oo("__proto__,__v_isRef,__isVue"),Or=new Set(Object.getOwnPropertyNames(Symbol).filter(e=>e!=="arguments"&&e!=="caller").map(e=>Symbol[e]).filter(Fo)),d3=Qo(),p3=Qo(!1,!0),u3=Qo(!0),Z2=f3();function f3(){const e={};return["includes","indexOf","lastIndexOf"].forEach(t=>{e[t]=function(...n){const i=H1(this);for(let r=0,l=this.length;r<l;r++)U1(i,"get",r+"");const o=i[t](...n);return o===-1||o===!1?i[t](...n.map(H1)):o}}),["push","pop","shift","unshift","splice"].forEach(t=>{e[t]=function(...n){_t();const i=H1(this)[t].apply(this,n);return Ht(),i}}),e}function g3(e){const t=H1(this);return U1(t,"has",e),t.hasOwnProperty(e)}function Qo(e=!1,t=!1){return function(i,o,r){if(o==="__v_isReactive")return!e;if(o==="__v_isReadonly")return e;if(o==="__v_isShallow")return t;if(o==="__v_raw"&&r===(e?t?Z3:Rr:t?$r:Fr).get(i))return i;const l=x1(i);if(!e){if(l&&M1(Z2,o))return Reflect.get(Z2,o,r);if(o==="hasOwnProperty")return g3}const s=Reflect.get(i,o,r);return(Fo(o)?Or.has(o):c3(o))||(e||U1(i,"get",o),t)?s:z1(s)?l&&$o(o)?s:s.value:N1(s)?e?Pr(s):un(s):s}}const h3=zr(),v3=zr(!0);function zr(e=!1){return function(n,i,o,r){let l=n[i];if(ct(l)&&z1(l)&&!z1(o))return!1;if(!e&&(!Fn(o)&&!ct(o)&&(l=H1(l),o=H1(o)),!x1(n)&&z1(l)&&!z1(o)))return l.value=o,!0;const s=x1(n)&&$o(i)?Number(i)<n.length:M1(n,i),a=Reflect.set(n,i,o,r);return n===H1(r)&&(s?Gt(o,l)&&xe(n,"set",i,o):xe(n,"add",i,o)),a}}function m3(e,t){const n=M1(e,t);e[t];const i=Reflect.deleteProperty(e,t);return i&&n&&xe(e,"delete",t,void 0),i}function C3(e,t){const n=Reflect.has(e,t);return(!Fo(t)||!Or.has(t))&&U1(e,"has",t),n}function w3(e){return U1(e,"iterate",x1(e)?"length":Ue),Reflect.ownKeys(e)}const Br={get:d3,set:h3,deleteProperty:m3,has:C3,ownKeys:w3},y3={get:u3,set(e,t){return!0},deleteProperty(e,t){return!0}},x3=A1({},Br,{get:p3,set:v3}),qo=e=>e,pi=e=>Reflect.getPrototypeOf(e);function mn(e,t,n=!1,i=!1){e=e.__v_raw;const o=H1(e),r=H1(t);n||(t!==r&&U1(o,"get",t),U1(o,"get",r));const{has:l}=pi(o),s=i?qo:n?Yo:Xt;if(l.call(o,t))return s(e.get(t));if(l.call(o,r))return s(e.get(r));e!==o&&e.get(t)}function Cn(e,t=!1){const n=this.__v_raw,i=H1(n),o=H1(e);return t||(e!==o&&U1(i,"has",e),U1(i,"has",o)),e===o?n.has(e):n.has(e)||n.has(o)}function wn(e,t=!1){return e=e.__v_raw,!t&&U1(H1(e),"iterate",Ue),Reflect.get(e,"size",e)}function D2(e){e=H1(e);const t=H1(this);return pi(t).has.call(t,e)||(t.add(e),xe(t,"add",e,e)),this}function E2(e,t){t=H1(t);const n=H1(this),{has:i,get:o}=pi(n);let r=i.call(n,e);r||(e=H1(e),r=i.call(n,e));const l=o.call(n,e);return n.set(e,t),r?Gt(t,l)&&xe(n,"set",e,t):xe(n,"add",e,t),this}function N2(e){const t=H1(this),{has:n,get:i}=pi(t);let o=n.call(t,e);o||(e=H1(e),o=n.call(t,e)),i&&i.call(t,e);const r=t.delete(e);return o&&xe(t,"delete",e,void 0),r}function A2(){const e=H1(this),t=e.size!==0,n=e.clear();return t&&xe(e,"clear",void 0,void 0),n}function yn(e,t){return function(i,o){const r=this,l=r.__v_raw,s=H1(l),a=t?qo:e?Yo:Xt;return!e&&U1(s,"iterate",Ue),l.forEach((d,c)=>i.call(o,a(d),a(c),r))}}function xn(e,t,n){return function(...i){const o=this.__v_raw,r=H1(o),l=Ft(r),s=e==="entries"||e===Symbol.iterator&&l,a=e==="keys"&&l,d=o[e](...i),c=n?qo:t?Yo:Xt;return!t&&U1(r,"iterate",a?to:Ue),{next(){const{value:u,done:h}=d.next();return h?{value:u,done:h}:{value:s?[c(u[0]),c(u[1])]:c(u),done:h}},[Symbol.iterator](){return this}}}}function _e(e){return function(...t){return e==="delete"?!1:this}}function L3(){const e={get(r){return mn(this,r)},get size(){return wn(this)},has:Cn,add:D2,set:E2,delete:N2,clear:A2,forEach:yn(!1,!1)},t={get(r){return mn(this,r,!1,!0)},get size(){return wn(this)},has:Cn,add:D2,set:E2,delete:N2,clear:A2,forEach:yn(!1,!0)},n={get(r){return mn(this,r,!0)},get size(){return wn(this,!0)},has(r){return Cn.call(this,r,!0)},add:_e("add"),set:_e("set"),delete:_e("delete"),clear:_e("clear"),forEach:yn(!0,!1)},i={get(r){return mn(this,r,!0,!0)},get size(){return wn(this,!0)},has(r){return Cn.call(this,r,!0)},add:_e("add"),set:_e("set"),delete:_e("delete"),clear:_e("clear"),forEach:yn(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(r=>{e[r]=xn(r,!1,!1),n[r]=xn(r,!0,!1),t[r]=xn(r,!1,!0),i[r]=xn(r,!0,!0)}),[e,n,t,i]}const[b3,M3,_3,H3]=L3();function Wo(e,t){const n=t?e?H3:_3:e?M3:b3;return(i,o,r)=>o==="__v_isReactive"?!e:o==="__v_isReadonly"?e:o==="__v_raw"?i:Reflect.get(M1(n,o)&&o in i?n:i,o,r)}const V3={get:Wo(!1,!1)},T3={get:Wo(!1,!0)},k3={get:Wo(!0,!1)},Fr=new WeakMap,$r=new WeakMap,Rr=new WeakMap,Z3=new WeakMap;function D3(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function E3(e){return e.__v_skip||!Object.isExtensible(e)?0:D3(ql(e))}function un(e){return ct(e)?e:Ko(e,!1,Br,V3,Fr)}function N3(e){return Ko(e,!1,x3,T3,$r)}function Pr(e){return Ko(e,!0,y3,k3,Rr)}function Ko(e,t,n,i,o){if(!N1(e)||e.__v_raw&&!(t&&e.__v_isReactive))return e;const r=o.get(e);if(r)return r;const l=E3(e);if(l===0)return e;const s=new Proxy(e,l===2?i:n);return o.set(e,s),s}function rt(e){return ct(e)?rt(e.__v_raw):!!(e&&e.__v_isReactive)}function ct(e){return!!(e&&e.__v_isReadonly)}function Fn(e){return!!(e&&e.__v_isShallow)}function Ur(e){return rt(e)||ct(e)}function H1(e){const t=e&&e.__v_raw;return t?H1(t):e}function Qr(e){return Bn(e,"__v_skip",!0),e}const Xt=e=>N1(e)?un(e):e,Yo=e=>N1(e)?Pr(e):e;function qr(e){De&&ne&&(e=H1(e),jr(e.dep||(e.dep=Po())))}function Wr(e,t){e=H1(e);const n=e.dep;n&&no(n)}function z1(e){return!!(e&&e.__v_isRef===!0)}function A3(e){return Kr(e,!1)}function S3(e){return Kr(e,!0)}function Kr(e,t){return z1(e)?e:new I3(e,t)}class I3{constructor(t,n){this.__v_isShallow=n,this.dep=void 0,this.__v_isRef=!0,this._rawValue=n?t:H1(t),this._value=n?t:Xt(t)}get value(){return qr(this),this._value}set value(t){const n=this.__v_isShallow||Fn(t)||ct(t);t=n?t:H1(t),Gt(t,this._rawValue)&&(this._rawValue=t,this._value=n?t:Xt(t),Wr(this))}}function lt(e){return z1(e)?e.value:e}const j3={get:(e,t,n)=>lt(Reflect.get(e,t,n)),set:(e,t,n,i)=>{const o=e[t];return z1(o)&&!z1(n)?(o.value=n,!0):Reflect.set(e,t,n,i)}};function Yr(e){return rt(e)?e:new Proxy(e,j3)}class O3{constructor(t,n,i,o){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this.__v_isReadonly=!1,this._dirty=!0,this.effect=new Uo(t,()=>{this._dirty||(this._dirty=!0,Wr(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!o,this.__v_isReadonly=i}get value(){const t=H1(this);return qr(t),(t._dirty||!t._cacheable)&&(t._dirty=!1,t._value=t.effect.run()),t._value}set value(t){this._setter(t)}}function z3(e,t,n=!1){let i,o;const r=L1(e);return r?(i=e,o=oe):(i=e.get,o=e.set),new O3(i,o,r||!o,n)}function Ee(e,t,n,i){let o;try{o=i?e(...i):e()}catch(r){ui(r,t,n)}return o}function re(e,t,n,i){if(L1(e)){const r=Ee(e,t,n,i);return r&&Er(r)&&r.catch(l=>{ui(l,t,n)}),r}const o=[];for(let r=0;r<e.length;r++)o.push(re(e[r],t,n,i));return o}function ui(e,t,n,i=!0){const o=t?t.vnode:null;if(t){let r=t.parent;const l=t.proxy,s=n;for(;r;){const d=r.ec;if(d){for(let c=0;c<d.length;c++)if(d[c](e,l,s)===!1)return}r=r.parent}const a=t.appContext.config.errorHandler;if(a){Ee(a,null,10,[e,l,s]);return}}B3(e,n,o,i)}function B3(e,t,n,i=!0){console.error(e)}let Jt=!1,io=!1;const O1=[];let de=0;const st=[];let me=null,Be=0;const Gr=Promise.resolve();let Go=null;function Xr(e){const t=Go||Gr;return e?t.then(this?e.bind(this):e):t}function F3(e){let t=de+1,n=O1.length;for(;t<n;){const i=t+n>>>1;en(O1[i])<e?t=i+1:n=i}return t}function Xo(e){(!O1.length||!O1.includes(e,Jt&&e.allowRecurse?de+1:de))&&(e.id==null?O1.push(e):O1.splice(F3(e.id),0,e),Jr())}function Jr(){!Jt&&!io&&(io=!0,Go=Gr.then(t5))}function $3(e){const t=O1.indexOf(e);t>de&&O1.splice(t,1)}function R3(e){x1(e)?st.push(...e):(!me||!me.includes(e,e.allowRecurse?Be+1:Be))&&st.push(e),Jr()}function S2(e,t=Jt?de+1:0){for(;t<O1.length;t++){const n=O1[t];n&&n.pre&&(O1.splice(t,1),t--,n())}}function e5(e){if(st.length){const t=[...new Set(st)];if(st.length=0,me){me.push(...t);return}for(me=t,me.sort((n,i)=>en(n)-en(i)),Be=0;Be<me.length;Be++)me[Be]();me=null,Be=0}}const en=e=>e.id==null?1/0:e.id,P3=(e,t)=>{const n=en(e)-en(t);if(n===0){if(e.pre&&!t.pre)return-1;if(t.pre&&!e.pre)return 1}return n};function t5(e){io=!1,Jt=!0,O1.sort(P3);const t=oe;try{for(de=0;de<O1.length;de++){const n=O1[de];n&&n.active!==!1&&Ee(n,null,14)}}finally{de=0,O1.length=0,e5(),Jt=!1,Go=null,(O1.length||st.length)&&t5()}}function U3(e,t,...n){if(e.isUnmounted)return;const i=e.vnode.props||D1;let o=n;const r=t.startsWith("update:"),l=r&&t.slice(7);if(l&&l in i){const c=`${l==="modelValue"?"model":l}Modifiers`,{number:u,trim:h}=i[c]||D1;h&&(o=n.map(C=>j1(C)?C.trim():C)),u&&(o=n.map(Gl))}let s,a=i[s=Vi(t)]||i[s=Vi(ue(t))];!a&&r&&(a=i[s=Vi(Mt(t))]),a&&re(a,e,6,o);const d=i[s+"Once"];if(d){if(!e.emitted)e.emitted={};else if(e.emitted[s])return;e.emitted[s]=!0,re(d,e,6,o)}}function n5(e,t,n=!1){const i=t.emitsCache,o=i.get(e);if(o!==void 0)return o;const r=e.emits;let l={},s=!1;if(!L1(e)){const a=d=>{const c=n5(d,t,!0);c&&(s=!0,A1(l,c))};!n&&t.mixins.length&&t.mixins.forEach(a),e.extends&&a(e.extends),e.mixins&&e.mixins.forEach(a)}return!r&&!s?(N1(e)&&i.set(e,null),null):(x1(r)?r.forEach(a=>l[a]=null):A1(l,r),N1(e)&&i.set(e,l),l)}function fi(e,t){return!e||!li(t)?!1:(t=t.slice(2).replace(/Once$/,""),M1(e,t[0].toLowerCase()+t.slice(1))||M1(e,Mt(t))||M1(e,t))}let G1=null,i5=null;function $n(e){const t=G1;return G1=e,i5=e&&e.type.__scopeId||null,t}function Q3(e,t=G1,n){if(!t||e._n)return e;const i=(...o)=>{i._d&&Q2(-1);const r=$n(t);let l;try{l=e(...o)}finally{$n(r),i._d&&Q2(1)}return l};return i._n=!0,i._c=!0,i._d=!0,i}function ki(e){const{type:t,vnode:n,proxy:i,withProxy:o,props:r,propsOptions:[l],slots:s,attrs:a,emit:d,render:c,renderCache:u,data:h,setupState:C,ctx:f,inheritAttrs:p}=e;let g,m;const v=$n(e);try{if(n.shapeFlag&4){const x=o||i;g=ce(c.call(x,x,u,r,C,h,f)),m=a}else{const x=t;g=ce(x.length>1?x(r,{attrs:a,slots:s,emit:d}):x(r,null)),m=t.props?a:q3(a)}}catch(x){Rt.length=0,ui(x,e,1),g=$1(We)}let y=g;if(m&&p!==!1){const x=Object.keys(m),{shapeFlag:L}=y;x.length&&L&7&&(l&&x.some(zo)&&(m=W3(m,l)),y=dt(y,m))}return n.dirs&&(y=dt(y),y.dirs=y.dirs?y.dirs.concat(n.dirs):n.dirs),n.transition&&(y.transition=n.transition),g=y,$n(v),g}const q3=e=>{let t;for(const n in e)(n==="class"||n==="style"||li(n))&&((t||(t={}))[n]=e[n]);return t},W3=(e,t)=>{const n={};for(const i in e)(!zo(i)||!(i.slice(9)in t))&&(n[i]=e[i]);return n};function K3(e,t,n){const{props:i,children:o,component:r}=e,{props:l,children:s,patchFlag:a}=t,d=r.emitsOptions;if(t.dirs||t.transition)return!0;if(n&&a>=0){if(a&1024)return!0;if(a&16)return i?I2(i,l,d):!!l;if(a&8){const c=t.dynamicProps;for(let u=0;u<c.length;u++){const h=c[u];if(l[h]!==i[h]&&!fi(d,h))return!0}}}else return(o||s)&&(!s||!s.$stable)?!0:i===l?!1:i?l?I2(i,l,d):!0:!!l;return!1}function I2(e,t,n){const i=Object.keys(t);if(i.length!==Object.keys(e).length)return!0;for(let o=0;o<i.length;o++){const r=i[o];if(t[r]!==e[r]&&!fi(n,r))return!0}return!1}function Y3({vnode:e,parent:t},n){for(;t&&t.subTree===e;)(e=t.vnode).el=n,t=t.parent}const G3=e=>e.__isSuspense;function X3(e,t){t&&t.pendingBranch?x1(e)?t.effects.push(...e):t.effects.push(e):R3(e)}const Ln={};function An(e,t,n){return o5(e,t,n)}function o5(e,t,{immediate:n,deep:i,flush:o,onTrack:r,onTrigger:l}=D1){var s;const a=l3()===((s=I1)==null?void 0:s.scope)?I1:null;let d,c=!1,u=!1;if(z1(e)?(d=()=>e.value,c=Fn(e)):rt(e)?(d=()=>e,i=!0):x1(e)?(u=!0,c=e.some(x=>rt(x)||Fn(x)),d=()=>e.map(x=>{if(z1(x))return x.value;if(rt(x))return $e(x);if(L1(x))return Ee(x,a,2)})):L1(e)?t?d=()=>Ee(e,a,2):d=()=>{if(!(a&&a.isUnmounted))return h&&h(),re(e,a,3,[C])}:d=oe,t&&i){const x=d;d=()=>$e(x())}let h,C=x=>{h=v.onStop=()=>{Ee(x,a,4)}},f;if(nn)if(C=oe,t?n&&re(t,a,3,[d(),u?[]:void 0,C]):d(),o==="sync"){const x=Ks();f=x.__watcherHandles||(x.__watcherHandles=[])}else return oe;let p=u?new Array(e.length).fill(Ln):Ln;const g=()=>{if(!!v.active)if(t){const x=v.run();(i||c||(u?x.some((L,H)=>Gt(L,p[H])):Gt(x,p)))&&(h&&h(),re(t,a,3,[x,p===Ln?void 0:u&&p[0]===Ln?[]:p,C]),p=x)}else v.run()};g.allowRecurse=!!t;let m;o==="sync"?m=g:o==="post"?m=()=>F1(g,a&&a.suspense):(g.pre=!0,a&&(g.id=a.uid),m=()=>Xo(g));const v=new Uo(d,m);t?n?g():p=v.run():o==="post"?F1(v.run.bind(v),a&&a.suspense):v.run();const y=()=>{v.stop(),a&&a.scope&&Bo(a.scope.effects,v)};return f&&f.push(y),y}function J3(e,t,n){const i=this.proxy,o=j1(e)?e.includes(".")?r5(i,e):()=>i[e]:e.bind(i,i);let r;L1(t)?r=t:(r=t.handler,n=t);const l=I1;pt(this);const s=o5(o,r.bind(i),n);return l?pt(l):Qe(),s}function r5(e,t){const n=t.split(".");return()=>{let i=e;for(let o=0;o<n.length&&i;o++)i=i[n[o]];return i}}function $e(e,t){if(!N1(e)||e.__v_skip||(t=t||new Set,t.has(e)))return e;if(t.add(e),z1(e))$e(e.value,t);else if(x1(e))for(let n=0;n<e.length;n++)$e(e[n],t);else if(Ul(e)||Ft(e))e.forEach(n=>{$e(n,t)});else if(Wl(e))for(const n in e)$e(e[n],t);return e}function wd(e,t){const n=G1;if(n===null)return e;const i=mi(n)||n.proxy,o=e.dirs||(e.dirs=[]);for(let r=0;r<t.length;r++){let[l,s,a,d=D1]=t[r];l&&(L1(l)&&(l={mounted:l,updated:l}),l.deep&&$e(s),o.push({dir:l,instance:i,value:s,oldValue:void 0,arg:a,modifiers:d}))}return e}function Oe(e,t,n,i){const o=e.dirs,r=t&&t.dirs;for(let l=0;l<o.length;l++){const s=o[l];r&&(s.oldValue=r[l].value);let a=s.dir[i];a&&(_t(),re(a,n,8,[e.el,s,e,t]),Ht())}}function Jo(e,t){return L1(e)?(()=>A1({name:e.name},t,{setup:e}))():e}const Sn=e=>!!e.type.__asyncLoader,l5=e=>e.type.__isKeepAlive;function es(e,t){s5(e,"a",t)}function ts(e,t){s5(e,"da",t)}function s5(e,t,n=I1){const i=e.__wdc||(e.__wdc=()=>{let o=n;for(;o;){if(o.isDeactivated)return;o=o.parent}return e()});if(gi(t,i,n),n){let o=n.parent;for(;o&&o.parent;)l5(o.parent.vnode)&&ns(i,t,n,o),o=o.parent}}function ns(e,t,n,i){const o=gi(t,e,i,!0);a5(()=>{Bo(i[t],o)},n)}function gi(e,t,n=I1,i=!1){if(n){const o=n[e]||(n[e]=[]),r=t.__weh||(t.__weh=(...l)=>{if(n.isUnmounted)return;_t(),pt(n);const s=re(t,n,e,l);return Qe(),Ht(),s});return i?o.unshift(r):o.push(r),r}}const Me=e=>(t,n=I1)=>(!nn||e==="sp")&&gi(e,(...i)=>t(...i),n),is=Me("bm"),os=Me("m"),rs=Me("bu"),ls=Me("u"),ss=Me("bum"),a5=Me("um"),as=Me("sp"),cs=Me("rtg"),ds=Me("rtc");function ps(e,t=I1){gi("ec",e,t)}const c5="components";function us(e,t){return gs(c5,e,!0,t)||e}const fs=Symbol.for("v-ndc");function gs(e,t,n=!0,i=!1){const o=G1||I1;if(o){const r=o.type;if(e===c5){const s=Qs(r,!1);if(s&&(s===t||s===ue(t)||s===ci(ue(t))))return r}const l=j2(o[e]||r[e],t)||j2(o.appContext[e],t);return!l&&i?r:l}}function j2(e,t){return e&&(e[t]||e[ue(t)]||e[ci(ue(t))])}const oo=e=>e?x5(e)?mi(e)||e.proxy:oo(e.parent):null,$t=A1(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>oo(e.parent),$root:e=>oo(e.root),$emit:e=>e.emit,$options:e=>e2(e),$forceUpdate:e=>e.f||(e.f=()=>Xo(e.update)),$nextTick:e=>e.n||(e.n=Xr.bind(e.proxy)),$watch:e=>J3.bind(e)}),Zi=(e,t)=>e!==D1&&!e.__isScriptSetup&&M1(e,t),hs={get({_:e},t){const{ctx:n,setupState:i,data:o,props:r,accessCache:l,type:s,appContext:a}=e;let d;if(t[0]!=="$"){const C=l[t];if(C!==void 0)switch(C){case 1:return i[t];case 2:return o[t];case 4:return n[t];case 3:return r[t]}else{if(Zi(i,t))return l[t]=1,i[t];if(o!==D1&&M1(o,t))return l[t]=2,o[t];if((d=e.propsOptions[0])&&M1(d,t))return l[t]=3,r[t];if(n!==D1&&M1(n,t))return l[t]=4,n[t];ro&&(l[t]=0)}}const c=$t[t];let u,h;if(c)return t==="$attrs"&&U1(e,"get",t),c(e);if((u=s.__cssModules)&&(u=u[t]))return u;if(n!==D1&&M1(n,t))return l[t]=4,n[t];if(h=a.config.globalProperties,M1(h,t))return h[t]},set({_:e},t,n){const{data:i,setupState:o,ctx:r}=e;return Zi(o,t)?(o[t]=n,!0):i!==D1&&M1(i,t)?(i[t]=n,!0):M1(e.props,t)||t[0]==="$"&&t.slice(1)in e?!1:(r[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:i,appContext:o,propsOptions:r}},l){let s;return!!n[l]||e!==D1&&M1(e,l)||Zi(t,l)||(s=r[0])&&M1(s,l)||M1(i,l)||M1($t,l)||M1(o.config.globalProperties,l)},defineProperty(e,t,n){return n.get!=null?e._.accessCache[t]=0:M1(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};function O2(e){return x1(e)?e.reduce((t,n)=>(t[n]=null,t),{}):e}let ro=!0;function vs(e){const t=e2(e),n=e.proxy,i=e.ctx;ro=!1,t.beforeCreate&&z2(t.beforeCreate,e,"bc");const{data:o,computed:r,methods:l,watch:s,provide:a,inject:d,created:c,beforeMount:u,mounted:h,beforeUpdate:C,updated:f,activated:p,deactivated:g,beforeDestroy:m,beforeUnmount:v,destroyed:y,unmounted:x,render:L,renderTracked:H,renderTriggered:Z,errorCaptured:N,serverPrefetch:A,expose:_,inheritAttrs:S,components:B,directives:D,filters:j}=t;if(d&&ms(d,i,null),l)for(const F in l){const G=l[F];L1(G)&&(i[F]=G.bind(n))}if(o){const F=o.call(n,n);N1(F)&&(e.data=un(F))}if(ro=!0,r)for(const F in r){const G=r[F],d1=L1(G)?G.bind(n,n):L1(G.get)?G.get.bind(n,n):oe,p1=!L1(G)&&L1(G.set)?G.set.bind(n):oe,a1=Y1({get:d1,set:p1});Object.defineProperty(i,F,{enumerable:!0,configurable:!0,get:()=>a1.value,set:c1=>a1.value=c1})}if(s)for(const F in s)d5(s[F],i,n,F);if(a){const F=L1(a)?a.call(n):a;Reflect.ownKeys(F).forEach(G=>{In(G,F[G])})}c&&z2(c,e,"c");function P(F,G){x1(G)?G.forEach(d1=>F(d1.bind(n))):G&&F(G.bind(n))}if(P(is,u),P(os,h),P(rs,C),P(ls,f),P(es,p),P(ts,g),P(ps,N),P(ds,H),P(cs,Z),P(ss,v),P(a5,x),P(as,A),x1(_))if(_.length){const F=e.exposed||(e.exposed={});_.forEach(G=>{Object.defineProperty(F,G,{get:()=>n[G],set:d1=>n[G]=d1})})}else e.exposed||(e.exposed={});L&&e.render===oe&&(e.render=L),S!=null&&(e.inheritAttrs=S),B&&(e.components=B),D&&(e.directives=D)}function ms(e,t,n=oe){x1(e)&&(e=lo(e));for(const i in e){const o=e[i];let r;N1(o)?"default"in o?r=we(o.from||i,o.default,!0):r=we(o.from||i):r=we(o),z1(r)?Object.defineProperty(t,i,{enumerable:!0,configurable:!0,get:()=>r.value,set:l=>r.value=l}):t[i]=r}}function z2(e,t,n){re(x1(e)?e.map(i=>i.bind(t.proxy)):e.bind(t.proxy),t,n)}function d5(e,t,n,i){const o=i.includes(".")?r5(n,i):()=>n[i];if(j1(e)){const r=t[e];L1(r)&&An(o,r)}else if(L1(e))An(o,e.bind(n));else if(N1(e))if(x1(e))e.forEach(r=>d5(r,t,n,i));else{const r=L1(e.handler)?e.handler.bind(n):t[e.handler];L1(r)&&An(o,r,e)}}function e2(e){const t=e.type,{mixins:n,extends:i}=t,{mixins:o,optionsCache:r,config:{optionMergeStrategies:l}}=e.appContext,s=r.get(t);let a;return s?a=s:!o.length&&!n&&!i?a=t:(a={},o.length&&o.forEach(d=>Rn(a,d,l,!0)),Rn(a,t,l)),N1(t)&&r.set(t,a),a}function Rn(e,t,n,i=!1){const{mixins:o,extends:r}=t;r&&Rn(e,r,n,!0),o&&o.forEach(l=>Rn(e,l,n,!0));for(const l in t)if(!(i&&l==="expose")){const s=Cs[l]||n&&n[l];e[l]=s?s(e[l],t[l]):t[l]}return e}const Cs={data:B2,props:F2,emits:F2,methods:It,computed:It,beforeCreate:B1,created:B1,beforeMount:B1,mounted:B1,beforeUpdate:B1,updated:B1,beforeDestroy:B1,beforeUnmount:B1,destroyed:B1,unmounted:B1,activated:B1,deactivated:B1,errorCaptured:B1,serverPrefetch:B1,components:It,directives:It,watch:ys,provide:B2,inject:ws};function B2(e,t){return t?e?function(){return A1(L1(e)?e.call(this,this):e,L1(t)?t.call(this,this):t)}:t:e}function ws(e,t){return It(lo(e),lo(t))}function lo(e){if(x1(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function B1(e,t){return e?[...new Set([].concat(e,t))]:t}function It(e,t){return e?A1(Object.create(null),e,t):t}function F2(e,t){return e?x1(e)&&x1(t)?[...new Set([...e,...t])]:A1(Object.create(null),O2(e),O2(t!=null?t:{})):t}function ys(e,t){if(!e)return t;if(!t)return e;const n=A1(Object.create(null),e);for(const i in t)n[i]=B1(e[i],t[i]);return n}function p5(){return{app:null,config:{isNativeTag:$l,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let xs=0;function Ls(e,t){return function(i,o=null){L1(i)||(i=A1({},i)),o!=null&&!N1(o)&&(o=null);const r=p5(),l=new Set;let s=!1;const a=r.app={_uid:xs++,_component:i,_props:o,_container:null,_context:r,_instance:null,version:Ys,get config(){return r.config},set config(d){},use(d,...c){return l.has(d)||(d&&L1(d.install)?(l.add(d),d.install(a,...c)):L1(d)&&(l.add(d),d(a,...c))),a},mixin(d){return r.mixins.includes(d)||r.mixins.push(d),a},component(d,c){return c?(r.components[d]=c,a):r.components[d]},directive(d,c){return c?(r.directives[d]=c,a):r.directives[d]},mount(d,c,u){if(!s){const h=$1(i,o);return h.appContext=r,c&&t?t(h,d):e(h,d,u),s=!0,a._container=d,d.__vue_app__=a,mi(h.component)||h.component.proxy}},unmount(){s&&(e(null,a._container),delete a._container.__vue_app__)},provide(d,c){return r.provides[d]=c,a},runWithContext(d){Pn=a;try{return d()}finally{Pn=null}}};return a}}let Pn=null;function In(e,t){if(I1){let n=I1.provides;const i=I1.parent&&I1.parent.provides;i===n&&(n=I1.provides=Object.create(i)),n[e]=t}}function we(e,t,n=!1){const i=I1||G1;if(i||Pn){const o=i?i.parent==null?i.vnode.appContext&&i.vnode.appContext.provides:i.parent.provides:Pn._context.provides;if(o&&e in o)return o[e];if(arguments.length>1)return n&&L1(t)?t.call(i&&i.proxy):t}}function bs(e,t,n,i=!1){const o={},r={};Bn(r,vi,1),e.propsDefaults=Object.create(null),u5(e,t,o,r);for(const l in e.propsOptions[0])l in o||(o[l]=void 0);n?e.props=i?o:N3(o):e.type.props?e.props=o:e.props=r,e.attrs=r}function Ms(e,t,n,i){const{props:o,attrs:r,vnode:{patchFlag:l}}=e,s=H1(o),[a]=e.propsOptions;let d=!1;if((i||l>0)&&!(l&16)){if(l&8){const c=e.vnode.dynamicProps;for(let u=0;u<c.length;u++){let h=c[u];if(fi(e.emitsOptions,h))continue;const C=t[h];if(a)if(M1(r,h))C!==r[h]&&(r[h]=C,d=!0);else{const f=ue(h);o[f]=so(a,s,f,C,e,!1)}else C!==r[h]&&(r[h]=C,d=!0)}}}else{u5(e,t,o,r)&&(d=!0);let c;for(const u in s)(!t||!M1(t,u)&&((c=Mt(u))===u||!M1(t,c)))&&(a?n&&(n[u]!==void 0||n[c]!==void 0)&&(o[u]=so(a,s,u,void 0,e,!0)):delete o[u]);if(r!==s)for(const u in r)(!t||!M1(t,u)&&!0)&&(delete r[u],d=!0)}d&&xe(e,"set","$attrs")}function u5(e,t,n,i){const[o,r]=e.propsOptions;let l=!1,s;if(t)for(let a in t){if(Nn(a))continue;const d=t[a];let c;o&&M1(o,c=ue(a))?!r||!r.includes(c)?n[c]=d:(s||(s={}))[c]=d:fi(e.emitsOptions,a)||(!(a in i)||d!==i[a])&&(i[a]=d,l=!0)}if(r){const a=H1(n),d=s||D1;for(let c=0;c<r.length;c++){const u=r[c];n[u]=so(o,a,u,d[u],e,!M1(d,u))}}return l}function so(e,t,n,i,o,r){const l=e[n];if(l!=null){const s=M1(l,"default");if(s&&i===void 0){const a=l.default;if(l.type!==Function&&!l.skipFactory&&L1(a)){const{propsDefaults:d}=o;n in d?i=d[n]:(pt(o),i=d[n]=a.call(null,t),Qe())}else i=a}l[0]&&(r&&!s?i=!1:l[1]&&(i===""||i===Mt(n))&&(i=!0))}return i}function f5(e,t,n=!1){const i=t.propsCache,o=i.get(e);if(o)return o;const r=e.props,l={},s=[];let a=!1;if(!L1(e)){const c=u=>{a=!0;const[h,C]=f5(u,t,!0);A1(l,h),C&&s.push(...C)};!n&&t.mixins.length&&t.mixins.forEach(c),e.extends&&c(e.extends),e.mixins&&e.mixins.forEach(c)}if(!r&&!a)return N1(e)&&i.set(e,ot),ot;if(x1(r))for(let c=0;c<r.length;c++){const u=ue(r[c]);$2(u)&&(l[u]=D1)}else if(r)for(const c in r){const u=ue(c);if($2(u)){const h=r[c],C=l[u]=x1(h)||L1(h)?{type:h}:A1({},h);if(C){const f=U2(Boolean,C.type),p=U2(String,C.type);C[0]=f>-1,C[1]=p<0||f<p,(f>-1||M1(C,"default"))&&s.push(u)}}}const d=[l,s];return N1(e)&&i.set(e,d),d}function $2(e){return e[0]!=="$"}function R2(e){const t=e&&e.toString().match(/^\s*(function|class) (\w+)/);return t?t[2]:e===null?"null":""}function P2(e,t){return R2(e)===R2(t)}function U2(e,t){return x1(t)?t.findIndex(n=>P2(n,e)):L1(t)&&P2(t,e)?0:-1}const g5=e=>e[0]==="_"||e==="$stable",t2=e=>x1(e)?e.map(ce):[ce(e)],_s=(e,t,n)=>{if(t._n)return t;const i=Q3((...o)=>t2(t(...o)),n);return i._c=!1,i},h5=(e,t,n)=>{const i=e._ctx;for(const o in e){if(g5(o))continue;const r=e[o];if(L1(r))t[o]=_s(o,r,i);else if(r!=null){const l=t2(r);t[o]=()=>l}}},v5=(e,t)=>{const n=t2(t);e.slots.default=()=>n},Hs=(e,t)=>{if(e.vnode.shapeFlag&32){const n=t._;n?(e.slots=H1(t),Bn(t,"_",n)):h5(t,e.slots={})}else e.slots={},t&&v5(e,t);Bn(e.slots,vi,1)},Vs=(e,t,n)=>{const{vnode:i,slots:o}=e;let r=!0,l=D1;if(i.shapeFlag&32){const s=t._;s?n&&s===1?r=!1:(A1(o,t),!n&&s===1&&delete o._):(r=!t.$stable,h5(t,o)),l=t}else t&&(v5(e,t),l={default:1});if(r)for(const s in o)!g5(s)&&!(s in l)&&delete o[s]};function ao(e,t,n,i,o=!1){if(x1(e)){e.forEach((h,C)=>ao(h,t&&(x1(t)?t[C]:t),n,i,o));return}if(Sn(i)&&!o)return;const r=i.shapeFlag&4?mi(i.component)||i.component.proxy:i.el,l=o?null:r,{i:s,r:a}=e,d=t&&t.r,c=s.refs===D1?s.refs={}:s.refs,u=s.setupState;if(d!=null&&d!==a&&(j1(d)?(c[d]=null,M1(u,d)&&(u[d]=null)):z1(d)&&(d.value=null)),L1(a))Ee(a,s,12,[l,c]);else{const h=j1(a),C=z1(a);if(h||C){const f=()=>{if(e.f){const p=h?M1(u,a)?u[a]:c[a]:a.value;o?x1(p)&&Bo(p,r):x1(p)?p.includes(r)||p.push(r):h?(c[a]=[r],M1(u,a)&&(u[a]=c[a])):(a.value=[r],e.k&&(c[e.k]=a.value))}else h?(c[a]=l,M1(u,a)&&(u[a]=l)):C&&(a.value=l,e.k&&(c[e.k]=l))};l?(f.id=-1,F1(f,n)):f()}}}const F1=X3;function Ts(e){return ks(e)}function ks(e,t){const n=Xi();n.__VUE__=!0;const{insert:i,remove:o,patchProp:r,createElement:l,createText:s,createComment:a,setText:d,setElementText:c,parentNode:u,nextSibling:h,setScopeId:C=oe,insertStaticContent:f}=e,p=(M,k,I,R=null,U=null,q=null,l1=!1,e1=null,i1=!!k.dynamicChildren)=>{if(M===k)return;M&&!Vt(M,k)&&(R=O(M),c1(M,U,q,!0),M=null),k.patchFlag===-2&&(i1=!1,k.dynamicChildren=null);const{type:Y,ref:w,shapeFlag:b}=k;switch(Y){case hi:g(M,k,I,R);break;case We:m(M,k,I,R);break;case Di:M==null&&v(k,I,R,l1);break;case Ce:B(M,k,I,R,U,q,l1,e1,i1);break;default:b&1?L(M,k,I,R,U,q,l1,e1,i1):b&6?D(M,k,I,R,U,q,l1,e1,i1):(b&64||b&128)&&Y.process(M,k,I,R,U,q,l1,e1,i1,J)}w!=null&&U&&ao(w,M&&M.ref,q,k||M,!k)},g=(M,k,I,R)=>{if(M==null)i(k.el=s(k.children),I,R);else{const U=k.el=M.el;k.children!==M.children&&d(U,k.children)}},m=(M,k,I,R)=>{M==null?i(k.el=a(k.children||""),I,R):k.el=M.el},v=(M,k,I,R)=>{[M.el,M.anchor]=f(M.children,k,I,R,M.el,M.anchor)},y=({el:M,anchor:k},I,R)=>{let U;for(;M&&M!==k;)U=h(M),i(M,I,R),M=U;i(k,I,R)},x=({el:M,anchor:k})=>{let I;for(;M&&M!==k;)I=h(M),o(M),M=I;o(k)},L=(M,k,I,R,U,q,l1,e1,i1)=>{l1=l1||k.type==="svg",M==null?H(k,I,R,U,q,l1,e1,i1):A(M,k,U,q,l1,e1,i1)},H=(M,k,I,R,U,q,l1,e1)=>{let i1,Y;const{type:w,props:b,shapeFlag:E,transition:$,dirs:o1}=M;if(i1=M.el=l(M.type,q,b&&b.is,b),E&8?c(i1,M.children):E&16&&N(M.children,i1,null,R,U,q&&w!=="foreignObject",l1,e1),o1&&Oe(M,null,R,"created"),Z(i1,M,M.scopeId,l1,R),b){for(const C1 in b)C1!=="value"&&!Nn(C1)&&r(i1,C1,null,b[C1],q,M.children,R,U,v1);"value"in b&&r(i1,"value",null,b.value),(Y=b.onVnodeBeforeMount)&&ae(Y,R,M)}o1&&Oe(M,null,R,"beforeMount");const t1=(!U||U&&!U.pendingBranch)&&$&&!$.persisted;t1&&$.beforeEnter(i1),i(i1,k,I),((Y=b&&b.onVnodeMounted)||t1||o1)&&F1(()=>{Y&&ae(Y,R,M),t1&&$.enter(i1),o1&&Oe(M,null,R,"mounted")},U)},Z=(M,k,I,R,U)=>{if(I&&C(M,I),R)for(let q=0;q<R.length;q++)C(M,R[q]);if(U){let q=U.subTree;if(k===q){const l1=U.vnode;Z(M,l1,l1.scopeId,l1.slotScopeIds,U.parent)}}},N=(M,k,I,R,U,q,l1,e1,i1=0)=>{for(let Y=i1;Y<M.length;Y++){const w=M[Y]=e1?Ve(M[Y]):ce(M[Y]);p(null,w,k,I,R,U,q,l1,e1)}},A=(M,k,I,R,U,q,l1)=>{const e1=k.el=M.el;let{patchFlag:i1,dynamicChildren:Y,dirs:w}=k;i1|=M.patchFlag&16;const b=M.props||D1,E=k.props||D1;let $;I&&ze(I,!1),($=E.onVnodeBeforeUpdate)&&ae($,I,k,M),w&&Oe(k,M,I,"beforeUpdate"),I&&ze(I,!0);const o1=U&&k.type!=="foreignObject";if(Y?_(M.dynamicChildren,Y,e1,I,R,o1,q):l1||G(M,k,e1,null,I,R,o1,q,!1),i1>0){if(i1&16)S(e1,k,b,E,I,R,U);else if(i1&2&&b.class!==E.class&&r(e1,"class",null,E.class,U),i1&4&&r(e1,"style",b.style,E.style,U),i1&8){const t1=k.dynamicProps;for(let C1=0;C1<t1.length;C1++){const z=t1[C1],W=b[z],n1=E[z];(n1!==W||z==="value")&&r(e1,z,W,n1,U,M.children,I,R,v1)}}i1&1&&M.children!==k.children&&c(e1,k.children)}else!l1&&Y==null&&S(e1,k,b,E,I,R,U);(($=E.onVnodeUpdated)||w)&&F1(()=>{$&&ae($,I,k,M),w&&Oe(k,M,I,"updated")},R)},_=(M,k,I,R,U,q,l1)=>{for(let e1=0;e1<k.length;e1++){const i1=M[e1],Y=k[e1],w=i1.el&&(i1.type===Ce||!Vt(i1,Y)||i1.shapeFlag&70)?u(i1.el):I;p(i1,Y,w,null,R,U,q,l1,!0)}},S=(M,k,I,R,U,q,l1)=>{if(I!==R){if(I!==D1)for(const e1 in I)!Nn(e1)&&!(e1 in R)&&r(M,e1,I[e1],null,l1,k.children,U,q,v1);for(const e1 in R){if(Nn(e1))continue;const i1=R[e1],Y=I[e1];i1!==Y&&e1!=="value"&&r(M,e1,Y,i1,l1,k.children,U,q,v1)}"value"in R&&r(M,"value",I.value,R.value)}},B=(M,k,I,R,U,q,l1,e1,i1)=>{const Y=k.el=M?M.el:s(""),w=k.anchor=M?M.anchor:s("");let{patchFlag:b,dynamicChildren:E,slotScopeIds:$}=k;$&&(e1=e1?e1.concat($):$),M==null?(i(Y,I,R),i(w,I,R),N(k.children,I,w,U,q,l1,e1,i1)):b>0&&b&64&&E&&M.dynamicChildren?(_(M.dynamicChildren,E,I,U,q,l1,e1),(k.key!=null||U&&k===U.subTree)&&m5(M,k,!0)):G(M,k,I,w,U,q,l1,e1,i1)},D=(M,k,I,R,U,q,l1,e1,i1)=>{k.slotScopeIds=e1,M==null?k.shapeFlag&512?U.ctx.activate(k,I,R,l1,i1):j(k,I,R,U,q,l1,i1):Q(M,k,i1)},j=(M,k,I,R,U,q,l1)=>{const e1=M.component=Fs(M,R,U);if(l5(M)&&(e1.ctx.renderer=J),$s(e1),e1.asyncDep){if(U&&U.registerDep(e1,P),!M.el){const i1=e1.subTree=$1(We);m(null,i1,k,I)}return}P(e1,M,k,I,U,q,l1)},Q=(M,k,I)=>{const R=k.component=M.component;if(K3(M,k,I))if(R.asyncDep&&!R.asyncResolved){F(R,k,I);return}else R.next=k,$3(R.update),R.update();else k.el=M.el,R.vnode=k},P=(M,k,I,R,U,q,l1)=>{const e1=()=>{if(M.isMounted){let{next:w,bu:b,u:E,parent:$,vnode:o1}=M,t1=w,C1;ze(M,!1),w?(w.el=o1.el,F(M,w,l1)):w=o1,b&&Ti(b),(C1=w.props&&w.props.onVnodeBeforeUpdate)&&ae(C1,$,w,o1),ze(M,!0);const z=ki(M),W=M.subTree;M.subTree=z,p(W,z,u(W.el),O(W),M,U,q),w.el=z.el,t1===null&&Y3(M,z.el),E&&F1(E,U),(C1=w.props&&w.props.onVnodeUpdated)&&F1(()=>ae(C1,$,w,o1),U)}else{let w;const{el:b,props:E}=k,{bm:$,m:o1,parent:t1}=M,C1=Sn(k);if(ze(M,!1),$&&Ti($),!C1&&(w=E&&E.onVnodeBeforeMount)&&ae(w,t1,k),ze(M,!0),b&&s1){const z=()=>{M.subTree=ki(M),s1(b,M.subTree,M,U,null)};C1?k.type.__asyncLoader().then(()=>!M.isUnmounted&&z()):z()}else{const z=M.subTree=ki(M);p(null,z,I,R,M,U,q),k.el=z.el}if(o1&&F1(o1,U),!C1&&(w=E&&E.onVnodeMounted)){const z=k;F1(()=>ae(w,t1,z),U)}(k.shapeFlag&256||t1&&Sn(t1.vnode)&&t1.vnode.shapeFlag&256)&&M.a&&F1(M.a,U),M.isMounted=!0,k=I=R=null}},i1=M.effect=new Uo(e1,()=>Xo(Y),M.scope),Y=M.update=()=>i1.run();Y.id=M.uid,ze(M,!0),Y()},F=(M,k,I)=>{k.component=M;const R=M.vnode.props;M.vnode=k,M.next=null,Ms(M,k.props,R,I),Vs(M,k.children,I),_t(),S2(),Ht()},G=(M,k,I,R,U,q,l1,e1,i1=!1)=>{const Y=M&&M.children,w=M?M.shapeFlag:0,b=k.children,{patchFlag:E,shapeFlag:$}=k;if(E>0){if(E&128){p1(Y,b,I,R,U,q,l1,e1,i1);return}else if(E&256){d1(Y,b,I,R,U,q,l1,e1,i1);return}}$&8?(w&16&&v1(Y,U,q),b!==Y&&c(I,b)):w&16?$&16?p1(Y,b,I,R,U,q,l1,e1,i1):v1(Y,U,q,!0):(w&8&&c(I,""),$&16&&N(b,I,R,U,q,l1,e1,i1))},d1=(M,k,I,R,U,q,l1,e1,i1)=>{M=M||ot,k=k||ot;const Y=M.length,w=k.length,b=Math.min(Y,w);let E;for(E=0;E<b;E++){const $=k[E]=i1?Ve(k[E]):ce(k[E]);p(M[E],$,I,null,U,q,l1,e1,i1)}Y>w?v1(M,U,q,!0,!1,b):N(k,I,R,U,q,l1,e1,i1,b)},p1=(M,k,I,R,U,q,l1,e1,i1)=>{let Y=0;const w=k.length;let b=M.length-1,E=w-1;for(;Y<=b&&Y<=E;){const $=M[Y],o1=k[Y]=i1?Ve(k[Y]):ce(k[Y]);if(Vt($,o1))p($,o1,I,null,U,q,l1,e1,i1);else break;Y++}for(;Y<=b&&Y<=E;){const $=M[b],o1=k[E]=i1?Ve(k[E]):ce(k[E]);if(Vt($,o1))p($,o1,I,null,U,q,l1,e1,i1);else break;b--,E--}if(Y>b){if(Y<=E){const $=E+1,o1=$<w?k[$].el:R;for(;Y<=E;)p(null,k[Y]=i1?Ve(k[Y]):ce(k[Y]),I,o1,U,q,l1,e1,i1),Y++}}else if(Y>E)for(;Y<=b;)c1(M[Y],U,q,!0),Y++;else{const $=Y,o1=Y,t1=new Map;for(Y=o1;Y<=E;Y++){const _1=k[Y]=i1?Ve(k[Y]):ce(k[Y]);_1.key!=null&&t1.set(_1.key,Y)}let C1,z=0;const W=E-o1+1;let n1=!1,f1=0;const h1=new Array(W);for(Y=0;Y<W;Y++)h1[Y]=0;for(Y=$;Y<=b;Y++){const _1=M[Y];if(z>=W){c1(_1,U,q,!0);continue}let S1;if(_1.key!=null)S1=t1.get(_1.key);else for(C1=o1;C1<=E;C1++)if(h1[C1-o1]===0&&Vt(_1,k[C1])){S1=C1;break}S1===void 0?c1(_1,U,q,!0):(h1[S1-o1]=Y+1,S1>=f1?f1=S1:n1=!0,p(_1,k[S1],I,null,U,q,l1,e1,i1),z++)}const m1=n1?Zs(h1):ot;for(C1=m1.length-1,Y=W-1;Y>=0;Y--){const _1=o1+Y,S1=k[_1],je=_1+1<w?k[_1+1].el:R;h1[Y]===0?p(null,S1,I,je,U,q,l1,e1,i1):n1&&(C1<0||Y!==m1[C1]?a1(S1,I,je,2):C1--)}}},a1=(M,k,I,R,U=null)=>{const{el:q,type:l1,transition:e1,children:i1,shapeFlag:Y}=M;if(Y&6){a1(M.component.subTree,k,I,R);return}if(Y&128){M.suspense.move(k,I,R);return}if(Y&64){l1.move(M,k,I,J);return}if(l1===Ce){i(q,k,I);for(let b=0;b<i1.length;b++)a1(i1[b],k,I,R);i(M.anchor,k,I);return}if(l1===Di){y(M,k,I);return}if(R!==2&&Y&1&&e1)if(R===0)e1.beforeEnter(q),i(q,k,I),F1(()=>e1.enter(q),U);else{const{leave:b,delayLeave:E,afterLeave:$}=e1,o1=()=>i(q,k,I),t1=()=>{b(q,()=>{o1(),$&&$()})};E?E(q,o1,t1):t1()}else i(q,k,I)},c1=(M,k,I,R=!1,U=!1)=>{const{type:q,props:l1,ref:e1,children:i1,dynamicChildren:Y,shapeFlag:w,patchFlag:b,dirs:E}=M;if(e1!=null&&ao(e1,null,I,M,!0),w&256){k.ctx.deactivate(M);return}const $=w&1&&E,o1=!Sn(M);let t1;if(o1&&(t1=l1&&l1.onVnodeBeforeUnmount)&&ae(t1,k,M),w&6)g1(M.component,I,R);else{if(w&128){M.suspense.unmount(I,R);return}$&&Oe(M,null,k,"beforeUnmount"),w&64?M.type.remove(M,k,I,U,J,R):Y&&(q!==Ce||b>0&&b&64)?v1(Y,k,I,!1,!0):(q===Ce&&b&384||!U&&w&16)&&v1(i1,k,I),R&&u1(M)}(o1&&(t1=l1&&l1.onVnodeUnmounted)||$)&&F1(()=>{t1&&ae(t1,k,M),$&&Oe(M,null,k,"unmounted")},I)},u1=M=>{const{type:k,el:I,anchor:R,transition:U}=M;if(k===Ce){y1(I,R);return}if(k===Di){x(M);return}const q=()=>{o(I),U&&!U.persisted&&U.afterLeave&&U.afterLeave()};if(M.shapeFlag&1&&U&&!U.persisted){const{leave:l1,delayLeave:e1}=U,i1=()=>l1(I,q);e1?e1(M.el,q,i1):i1()}else q()},y1=(M,k)=>{let I;for(;M!==k;)I=h(M),o(M),M=I;o(k)},g1=(M,k,I)=>{const{bum:R,scope:U,update:q,subTree:l1,um:e1}=M;R&&Ti(R),U.stop(),q&&(q.active=!1,c1(l1,M,k,I)),e1&&F1(e1,k),F1(()=>{M.isUnmounted=!0},k),k&&k.pendingBranch&&!k.isUnmounted&&M.asyncDep&&!M.asyncResolved&&M.suspenseId===k.pendingId&&(k.deps--,k.deps===0&&k.resolve())},v1=(M,k,I,R=!1,U=!1,q=0)=>{for(let l1=q;l1<M.length;l1++)c1(M[l1],k,I,R,U)},O=M=>M.shapeFlag&6?O(M.component.subTree):M.shapeFlag&128?M.suspense.next():h(M.anchor||M.el),X=(M,k,I)=>{M==null?k._vnode&&c1(k._vnode,null,null,!0):p(k._vnode||null,M,k,null,null,null,I),S2(),e5(),k._vnode=M},J={p,um:c1,m:a1,r:u1,mt:j,mc:N,pc:G,pbc:_,n:O,o:e};let r1,s1;return t&&([r1,s1]=t(J)),{render:X,hydrate:r1,createApp:Ls(X,r1)}}function ze({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function m5(e,t,n=!1){const i=e.children,o=t.children;if(x1(i)&&x1(o))for(let r=0;r<i.length;r++){const l=i[r];let s=o[r];s.shapeFlag&1&&!s.dynamicChildren&&((s.patchFlag<=0||s.patchFlag===32)&&(s=o[r]=Ve(o[r]),s.el=l.el),n||m5(l,s)),s.type===hi&&(s.el=l.el)}}function Zs(e){const t=e.slice(),n=[0];let i,o,r,l,s;const a=e.length;for(i=0;i<a;i++){const d=e[i];if(d!==0){if(o=n[n.length-1],e[o]<d){t[i]=o,n.push(i);continue}for(r=0,l=n.length-1;r<l;)s=r+l>>1,e[n[s]]<d?r=s+1:l=s;d<e[n[r]]&&(r>0&&(t[i]=n[r-1]),n[r]=i)}}for(r=n.length,l=n[r-1];r-- >0;)n[r]=l,l=t[l];return n}const Ds=e=>e.__isTeleport,Ce=Symbol.for("v-fgt"),hi=Symbol.for("v-txt"),We=Symbol.for("v-cmt"),Di=Symbol.for("v-stc"),Rt=[];let ie=null;function C5(e=!1){Rt.push(ie=e?null:[])}function Es(){Rt.pop(),ie=Rt[Rt.length-1]||null}let tn=1;function Q2(e){tn+=e}function w5(e){return e.dynamicChildren=tn>0?ie||ot:null,Es(),tn>0&&ie&&ie.push(e),e}function Ns(e,t,n,i,o,r){return w5(Pt(e,t,n,i,o,r,!0))}function As(e,t,n,i,o){return w5($1(e,t,n,i,o,!0))}function co(e){return e?e.__v_isVNode===!0:!1}function Vt(e,t){return e.type===t.type&&e.key===t.key}const vi="__vInternal",y5=({key:e})=>e!=null?e:null,jn=({ref:e,ref_key:t,ref_for:n})=>(typeof e=="number"&&(e=""+e),e!=null?j1(e)||z1(e)||L1(e)?{i:G1,r:e,k:t,f:!!n}:e:null);function Pt(e,t=null,n=null,i=0,o=null,r=e===Ce?0:1,l=!1,s=!1){const a={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&y5(t),ref:t&&jn(t),scopeId:i5,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:r,patchFlag:i,dynamicProps:o,dynamicChildren:null,appContext:null,ctx:G1};return s?(n2(a,n),r&128&&e.normalize(a)):n&&(a.shapeFlag|=j1(n)?8:16),tn>0&&!l&&ie&&(a.patchFlag>0||r&6)&&a.patchFlag!==32&&ie.push(a),a}const $1=Ss;function Ss(e,t=null,n=null,i=0,o=null,r=!1){if((!e||e===fs)&&(e=We),co(e)){const s=dt(e,t,!0);return n&&n2(s,n),tn>0&&!r&&ie&&(s.shapeFlag&6?ie[ie.indexOf(e)]=s:ie.push(s)),s.patchFlag|=-2,s}if(qs(e)&&(e=e.__vccOpts),t){t=Is(t);let{class:s,style:a}=t;s&&!j1(s)&&(t.class=Ro(s)),N1(a)&&(Ur(a)&&!x1(a)&&(a=A1({},a)),t.style=di(a))}const l=j1(e)?1:G3(e)?128:Ds(e)?64:N1(e)?4:L1(e)?2:0;return Pt(e,t,n,i,o,l,r,!0)}function Is(e){return e?Ur(e)||vi in e?A1({},e):e:null}function dt(e,t,n=!1){const{props:i,ref:o,patchFlag:r,children:l}=e,s=t?Os(i||{},t):i;return{__v_isVNode:!0,__v_skip:!0,type:e.type,props:s,key:s&&y5(s),ref:t&&t.ref?n&&o?x1(o)?o.concat(jn(t)):[o,jn(t)]:jn(t):o,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:l,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ce?r===-1?16:r|16:r,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&dt(e.ssContent),ssFallback:e.ssFallback&&dt(e.ssFallback),el:e.el,anchor:e.anchor,ctx:e.ctx,ce:e.ce}}function js(e=" ",t=0){return $1(hi,null,e,t)}function yd(e="",t=!1){return t?(C5(),As(We,null,e)):$1(We,null,e)}function ce(e){return e==null||typeof e=="boolean"?$1(We):x1(e)?$1(Ce,null,e.slice()):typeof e=="object"?Ve(e):$1(hi,null,String(e))}function Ve(e){return e.el===null&&e.patchFlag!==-1||e.memo?e:dt(e)}function n2(e,t){let n=0;const{shapeFlag:i}=e;if(t==null)t=null;else if(x1(t))n=16;else if(typeof t=="object")if(i&65){const o=t.default;o&&(o._c&&(o._d=!1),n2(e,o()),o._c&&(o._d=!0));return}else{n=32;const o=t._;!o&&!(vi in t)?t._ctx=G1:o===3&&G1&&(G1.slots._===1?t._=1:(t._=2,e.patchFlag|=1024))}else L1(t)?(t={default:t,_ctx:G1},n=32):(t=String(t),i&64?(n=16,t=[js(t)]):n=8);e.children=t,e.shapeFlag|=n}function Os(...e){const t={};for(let n=0;n<e.length;n++){const i=e[n];for(const o in i)if(o==="class")t.class!==i.class&&(t.class=Ro([t.class,i.class]));else if(o==="style")t.style=di([t.style,i.style]);else if(li(o)){const r=t[o],l=i[o];l&&r!==l&&!(x1(r)&&r.includes(l))&&(t[o]=r?[].concat(r,l):l)}else o!==""&&(t[o]=i[o])}return t}function ae(e,t,n,i=null){re(e,t,7,[n,i])}const zs=p5();let Bs=0;function Fs(e,t,n){const i=e.type,o=(t?t.appContext:e.appContext)||zs,r={uid:Bs++,vnode:e,type:i,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new o3(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:f5(i,o),emitsOptions:n5(i,o),emit:null,emitted:null,propsDefaults:D1,inheritAttrs:i.inheritAttrs,ctx:D1,data:D1,props:D1,attrs:D1,slots:D1,refs:D1,setupState:D1,setupContext:null,attrsProxy:null,slotsProxy:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return r.ctx={_:r},r.root=t?t.root:r,r.emit=U3.bind(null,r),e.ce&&e.ce(r),r}let I1=null,i2,et,q2="__VUE_INSTANCE_SETTERS__";(et=Xi()[q2])||(et=Xi()[q2]=[]),et.push(e=>I1=e),i2=e=>{et.length>1?et.forEach(t=>t(e)):et[0](e)};const pt=e=>{i2(e),e.scope.on()},Qe=()=>{I1&&I1.scope.off(),i2(null)};function x5(e){return e.vnode.shapeFlag&4}let nn=!1;function $s(e,t=!1){nn=t;const{props:n,children:i}=e.vnode,o=x5(e);bs(e,n,o,t),Hs(e,i);const r=o?Rs(e,t):void 0;return nn=!1,r}function Rs(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=Qr(new Proxy(e.ctx,hs));const{setup:i}=n;if(i){const o=e.setupContext=i.length>1?Us(e):null;pt(e),_t();const r=Ee(i,e,0,[e.props,o]);if(Ht(),Qe(),Er(r)){if(r.then(Qe,Qe),t)return r.then(l=>{W2(e,l,t)}).catch(l=>{ui(l,e,0)});e.asyncDep=r}else W2(e,r,t)}else L5(e,t)}function W2(e,t,n){L1(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:N1(t)&&(e.setupState=Yr(t)),L5(e,n)}let K2;function L5(e,t,n){const i=e.type;if(!e.render){if(!t&&K2&&!i.render){const o=i.template||e2(e).template;if(o){const{isCustomElement:r,compilerOptions:l}=e.appContext.config,{delimiters:s,compilerOptions:a}=i,d=A1(A1({isCustomElement:r,delimiters:s},l),a);i.render=K2(o,d)}}e.render=i.render||oe}pt(e),_t(),vs(e),Ht(),Qe()}function Ps(e){return e.attrsProxy||(e.attrsProxy=new Proxy(e.attrs,{get(t,n){return U1(e,"get","$attrs"),t[n]}}))}function Us(e){const t=n=>{e.exposed=n||{}};return{get attrs(){return Ps(e)},slots:e.slots,emit:e.emit,expose:t}}function mi(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy(Yr(Qr(e.exposed)),{get(t,n){if(n in t)return t[n];if(n in $t)return $t[n](e)},has(t,n){return n in t||n in $t}}))}function Qs(e,t=!0){return L1(e)?e.displayName||e.name:e.name||t&&e.__name}function qs(e){return L1(e)&&"__vccOpts"in e}const Y1=(e,t)=>z3(e,t,nn);function b5(e,t,n){const i=arguments.length;return i===2?N1(t)&&!x1(t)?co(t)?$1(e,null,[t]):$1(e,t):$1(e,null,t):(i>3?n=Array.prototype.slice.call(arguments,2):i===3&&co(n)&&(n=[n]),$1(e,t,n))}const Ws=Symbol.for("v-scx"),Ks=()=>we(Ws),Ys="3.3.2",Gs="http://www.w3.org/2000/svg",Fe=typeof document!="undefined"?document:null,Y2=Fe&&Fe.createElement("template"),Xs={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,i)=>{const o=t?Fe.createElementNS(Gs,e):Fe.createElement(e,n?{is:n}:void 0);return e==="select"&&i&&i.multiple!=null&&o.setAttribute("multiple",i.multiple),o},createText:e=>Fe.createTextNode(e),createComment:e=>Fe.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>Fe.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},insertStaticContent(e,t,n,i,o,r){const l=n?n.previousSibling:t.lastChild;if(o&&(o===r||o.nextSibling))for(;t.insertBefore(o.cloneNode(!0),n),!(o===r||!(o=o.nextSibling)););else{Y2.innerHTML=i?`<svg>${e}</svg>`:e;const s=Y2.content;if(i){const a=s.firstChild;for(;a.firstChild;)s.appendChild(a.firstChild);s.removeChild(a)}t.insertBefore(s,n)}return[l?l.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function Js(e,t,n){const i=e._vtc;i&&(t=(t?[t,...i]:[...i]).join(" ")),t==null?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function e4(e,t,n){const i=e.style,o=j1(n);if(n&&!o){if(t&&!j1(t))for(const r in t)n[r]==null&&po(i,r,"");for(const r in n)po(i,r,n[r])}else{const r=i.display;o?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const G2=/\s*!important$/;function po(e,t,n){if(x1(n))n.forEach(i=>po(e,t,i));else if(n==null&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=t4(e,t);G2.test(n)?e.setProperty(Mt(i),n.replace(G2,""),"important"):e[i]=n}}const X2=["Webkit","Moz","ms"],Ei={};function t4(e,t){const n=Ei[t];if(n)return n;let i=ue(t);if(i!=="filter"&&i in e)return Ei[t]=i;i=ci(i);for(let o=0;o<X2.length;o++){const r=X2[o]+i;if(r in e)return Ei[t]=r}return t}const J2="http://www.w3.org/1999/xlink";function n4(e,t,n,i,o){if(i&&t.startsWith("xlink:"))n==null?e.removeAttributeNS(J2,t.slice(6,t.length)):e.setAttributeNS(J2,t,n);else{const r=i3(t);n==null||r&&!Nr(n)?e.removeAttribute(t):e.setAttribute(t,r?"":n)}}function i4(e,t,n,i,o,r,l){if(t==="innerHTML"||t==="textContent"){i&&l(i,o,r),e[t]=n==null?"":n;return}const s=e.tagName;if(t==="value"&&s!=="PROGRESS"&&!s.includes("-")){e._value=n;const d=s==="OPTION"?e.getAttribute("value"):e.value,c=n==null?"":n;d!==c&&(e.value=c),n==null&&e.removeAttribute(t);return}let a=!1;if(n===""||n==null){const d=typeof e[t];d==="boolean"?n=Nr(n):n==null&&d==="string"?(n="",a=!0):d==="number"&&(n=0,a=!0)}try{e[t]=n}catch{}a&&e.removeAttribute(t)}function o4(e,t,n,i){e.addEventListener(t,n,i)}function r4(e,t,n,i){e.removeEventListener(t,n,i)}function l4(e,t,n,i,o=null){const r=e._vei||(e._vei={}),l=r[t];if(i&&l)l.value=i;else{const[s,a]=s4(t);if(i){const d=r[t]=d4(i,o);o4(e,s,d,a)}else l&&(r4(e,s,l,a),r[t]=void 0)}}const e0=/(?:Once|Passive|Capture)$/;function s4(e){let t;if(e0.test(e)){t={};let i;for(;i=e.match(e0);)e=e.slice(0,e.length-i[0].length),t[i[0].toLowerCase()]=!0}return[e[2]===":"?e.slice(3):Mt(e.slice(2)),t]}let Ni=0;const a4=Promise.resolve(),c4=()=>Ni||(a4.then(()=>Ni=0),Ni=Date.now());function d4(e,t){const n=i=>{if(!i._vts)i._vts=Date.now();else if(i._vts<=n.attached)return;re(p4(i,n.value),t,5,[i])};return n.value=e,n.attached=c4(),n}function p4(e,t){if(x1(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map(i=>o=>!o._stopped&&i&&i(o))}else return t}const t0=/^on[a-z]/,u4=(e,t,n,i,o=!1,r,l,s,a)=>{t==="class"?Js(e,i,o):t==="style"?e4(e,n,i):li(t)?zo(t)||l4(e,t,n,i,l):(t[0]==="."?(t=t.slice(1),!0):t[0]==="^"?(t=t.slice(1),!1):f4(e,t,i,o))?i4(e,t,i,r,l,s,a):(t==="true-value"?e._trueValue=i:t==="false-value"&&(e._falseValue=i),n4(e,t,i,o))};function f4(e,t,n,i){return i?!!(t==="innerHTML"||t==="textContent"||t in e&&t0.test(t)&&L1(n)):t==="spellcheck"||t==="draggable"||t==="translate"||t==="form"||t==="list"&&e.tagName==="INPUT"||t==="type"&&e.tagName==="TEXTAREA"||t0.test(t)&&j1(n)?!1:t in e}const xd={beforeMount(e,{value:t},{transition:n}){e._vod=e.style.display==="none"?"":e.style.display,n&&t?n.beforeEnter(e):Tt(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:i}){!t!=!n&&(i?t?(i.beforeEnter(e),Tt(e,!0),i.enter(e)):i.leave(e,()=>{Tt(e,!1)}):Tt(e,t))},beforeUnmount(e,{value:t}){Tt(e,t)}};function Tt(e,t){e.style.display=t?e._vod:"none"}const g4=A1({patchProp:u4},Xs);let n0;function h4(){return n0||(n0=Ts(g4))}const v4=(...e)=>{const t=h4().createApp(...e),{mount:n}=t;return t.mount=i=>{const o=m4(i);if(!o)return;const r=t._component;!L1(r)&&!r.render&&!r.template&&(r.template=o.innerHTML),o.innerHTML="";const l=n(o,!1,o instanceof SVGElement);return o instanceof Element&&(o.removeAttribute("v-cloak"),o.setAttribute("data-v-app","")),l},t};function m4(e){return j1(e)?document.querySelector(e):e}const C4="modulepreload",i0={},w4="/",w1=function(t,n){return!n||n.length===0?t():Promise.all(n.map(i=>{if(i=`${w4}${i}`,i in i0)return;i0[i]=!0;const o=i.endsWith(".css"),r=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${i}"]${r}`))return;const l=document.createElement("link");if(l.rel=o?"stylesheet":C4,o||(l.as="script",l.crossOrigin=""),l.href=i,document.head.appendChild(l),o)return new Promise((s,a)=>{l.addEventListener("load",s),l.addEventListener("error",()=>a(new Error(`Unable to preload CSS for ${i}`)))})})).then(()=>t())};var M5={docs:[{title:"\u5F00\u59CB",type:"document",children:[{title:"\u5FEB\u901F\u5F00\u59CB",name:"getting-started",meta:{docType:"explain"},path:"/flutter/getting-started",component:()=>w1(()=>import("./getting-started.170f254e.js"),["assets/getting-started.170f254e.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])},{title:"\u8D21\u732E\u6307\u5357",name:"develop",meta:{docType:"explain"},path:"/flutter/develop",component:()=>w1(()=>import("./CONTRIBUTING.33c0b625.js"),["assets/CONTRIBUTING.33c0b625.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])},{title:"\u66F4\u65B0\u65E5\u5FD7",name:"changelog",meta:{docType:"explain"},path:"/flutter/changelog",component:()=>w1(()=>import("./CHANGELOG.f3498deb.js"),["assets/CHANGELOG.f3498deb.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])},{title:"\u7EC4\u4EF6\u6982\u89C8",name:"overview",meta:{docType:"explain"},path:"/flutter/overview",component:()=>w1(()=>import("./overview.4f4c070c.js"),["assets/overview.4f4c070c.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])}]},{title:"\u57FA\u7840",type:"component",children:[{title:"Button \u6309\u94AE",name:"button",meta:{docType:"base"},path:"/flutter/components/button",component:()=>w1(()=>import("./README.c4e773bd.js"),["assets/README.c4e773bd.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])},{title:"Divider \u5206\u5272\u7EBF",name:"divider",meta:{docType:"data"},path:"/flutter/components/divider",component:()=>w1(()=>import("./README.5cc1ac9f.js"),["assets/README.5cc1ac9f.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])},{title:"Fab \u60AC\u6D6E\u6309\u94AE",name:"fab",meta:{docType:"form"},path:"/flutter/components/fab",component:()=>w1(()=>import("./README.36a4d046.js"),["assets/README.36a4d046.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])},{title:"Icon \u56FE\u6807",name:"icon",meta:{docType:"base"},path:"/flutter/components/icon",component:()=>w1(()=>import("./README.e9ceaf71.js"),["assets/README.e9ceaf71.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])},{title:"Link \u94FE\u63A5",name:"link",meta:{docType:"base"},path:"/flutter/components/link",component:()=>w1(()=>import("./README.cc5bde3e.js"),["assets/README.cc5bde3e.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])},{title:"Text \u6587\u672C",name:"text",meta:{docType:"base"},path:"/flutter/components/text",component:()=>w1(()=>import("./README.80725b7b.js"),["assets/README.80725b7b.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])}]},{title:"\u5BFC\u822A",type:"component",children:[{title:"BackTop \u8FD4\u56DE\u9876\u90E8",name:"back-top",meta:{docType:"navigation"},path:"/flutter/components/back-top",component:()=>w1(()=>import("./README.5f6598a1.js"),["assets/README.5f6598a1.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])},{title:"Drawer \u62BD\u5C49",name:"drawer",meta:{docType:"navigation"},path:"/flutter/components/drawer",component:()=>w1(()=>import("./README.0492bf2b.js"),["assets/README.0492bf2b.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])},{title:"Navbar \u5BFC\u822A\u680F",name:"navbar",meta:{docType:"navigation"},path:"/flutter/components/navbar",component:()=>w1(()=>import("./README.f8c6163b.js"),["assets/README.f8c6163b.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])},{title:"SideBar \u4FA7\u8FB9\u680F",name:"side-bar",meta:{docType:"navigation"},path:"/flutter/components/side-bar",component:()=>w1(()=>import("./README.78820873.js"),["assets/README.78820873.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])},{title:"Steps \u6B65\u9AA4\u6761",name:"steps",meta:{docType:"navigation"},path:"/flutter/components/steps",component:()=>w1(()=>import("./README.a2f54cb8.js"),["assets/README.a2f54cb8.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])},{title:"TabBar \u6807\u7B7E\u680F",name:"tab-bar",meta:{docType:"navigation"},path:"/flutter/components/tab-bar",component:()=>w1(()=>import("./README.7dd0c6ee.js"),["assets/README.7dd0c6ee.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])},{title:"Tabs \u9009\u9879\u5361",name:"tabs",meta:{docType:"navigation"},path:"/flutter/components/tabs",component:()=>w1(()=>import("./README.f05d4003.js"),["assets/README.f05d4003.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])}]},{title:"\u8F93\u5165",type:"component",children:[{title:"Cascader \u7EA7\u8054\u9009\u62E9\u5668",name:"cascader",meta:{docType:"form"},path:"/flutter/components/cascader",component:()=>w1(()=>import("./README.aebfcb7e.js"),["assets/README.aebfcb7e.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])},{title:"CheckBox \u591A\u9009\u6846",name:"checkbox",meta:{docType:"form"},path:"/flutter/components/checkbox",component:()=>w1(()=>import("./README.928dbebb.js"),["assets/README.928dbebb.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])},{title:"DateTimePicker \u65F6\u95F4\u9009\u62E9\u5668",name:"date-time-picker",meta:{docType:"form"},path:"/flutter/components/date-time-picker",component:()=>w1(()=>import("./README.0b58d783.js"),["assets/README.0b58d783.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])},{title:"Input \u8F93\u5165\u6846",name:"input",meta:{docType:"form"},path:"/flutter/components/input",component:()=>w1(()=>import("./README.7ca95987.js"),["assets/README.7ca95987.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])},{title:"Picker \u9009\u62E9\u5668",name:"picker",meta:{docType:"form"},path:"/flutter/components/picker",component:()=>w1(()=>import("./README.bf3e9269.js"),["assets/README.bf3e9269.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])},{title:"Radio \u5355\u9009\u6846",name:"radio",meta:{docType:"form"},path:"/flutter/components/radio",component:()=>w1(()=>import("./README.a90f8366.js"),["assets/README.a90f8366.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])},{title:"Search \u641C\u7D22\u6846",name:"search",meta:{docType:"form"},path:"/flutter/components/search",component:()=>w1(()=>import("./README.6b3b4b79.js"),["assets/README.6b3b4b79.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])},{title:"Slider \u6ED1\u52A8\u9009\u62E9\u5668",name:"slider",meta:{docType:"form"},path:"/flutter/components/slider",component:()=>w1(()=>import("./README.673df28a.js"),["assets/README.673df28a.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])},{title:"Stepper \u6B65\u8FDB\u5668",name:"stepper",meta:{docType:"form"},path:"/flutter/components/stepper",component:()=>w1(()=>import("./README.ca784496.js"),["assets/README.ca784496.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])},{title:"Switch \u5F00\u5173",name:"switch",meta:{docType:"form"},path:"/flutter/components/switch",component:()=>w1(()=>import("./README.8b553165.js"),["assets/README.8b553165.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])},{title:"Textarea \u591A\u884C\u6587\u672C\u6846",name:"textarea",meta:{docType:"form"},path:"/flutter/components/textarea",component:()=>w1(()=>import("./README.fa882f6f.js"),["assets/README.fa882f6f.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])},{title:"TreeSelect \u6811\u5F62\u9009\u62E9",name:"treeSelect",meta:{docType:"form"},path:"/flutter/components/tree-select",component:()=>w1(()=>import("./README.e474b1c0.js"),["assets/README.e474b1c0.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])}]},{title:"\u6570\u636E\u5C55\u793A",type:"component",children:[{title:"Avatar \u5934\u50CF",name:"avatar",meta:{docType:"data"},path:"/flutter/components/avatar",component:()=>w1(()=>import("./README.b5e2f689.js"),["assets/README.b5e2f689.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])},{title:"Badge \u5FBD\u6807",name:"badge",meta:{docType:"data"},path:"/flutter/components/badge",component:()=>w1(()=>import("./README.35c54259.js"),["assets/README.35c54259.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])},{title:"Cell \u5355\u5143\u683C",name:"cell",meta:{docType:"data"},path:"/flutter/components/cell",component:()=>w1(()=>import("./README.3f391ce0.js"),["assets/README.3f391ce0.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])},{title:"Collapse \u6298\u53E0\u9762\u677F",name:"collapse",meta:{docType:"data"},path:"/flutter/components/collapse",component:()=>w1(()=>import("./README.d9c99df4.js"),["assets/README.d9c99df4.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])},{title:"CountDown \u5012\u8BA1\u65F6",name:"countdown",meta:{docType:"data"},path:"/flutter/components/count-down",component:()=>w1(()=>import("./README.1b3ba92c.js"),["assets/README.1b3ba92c.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])},{title:"Empty \u7A7A\u72B6\u6001",name:"empty",meta:{docType:"data"},path:"/flutter/components/empty",component:()=>w1(()=>import("./README.81cbac49.js"),["assets/README.81cbac49.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])},{title:"Image \u56FE\u7247",name:"image",meta:{docType:"data"},path:"/flutter/components/image",component:()=>w1(()=>import("./README.db417c9a.js"),["assets/README.db417c9a.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])},{title:"ImageViewer \u56FE\u7247\u9884\u89C8",name:"image-viewer",meta:{docType:"data"},path:"/flutter/components/image-viewer",component:()=>w1(()=>import("./README.c2469921.js"),["assets/README.c2469921.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])},{title:"Swiper \u8F6E\u64AD\u56FE",name:"swiper",meta:{docType:"data"},path:"/flutter/components/swiper",component:()=>w1(()=>import("./README.1903848f.js"),["assets/README.1903848f.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])},{title:"Tag \u6807\u7B7E",name:"tag",meta:{docType:"data"},path:"/flutter/components/tag",component:()=>w1(()=>import("./README.a5dc295b.js"),["assets/README.a5dc295b.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])}]},{title:"\u53CD\u9988",type:"component",children:[{title:"Dialog \u5BF9\u8BDD\u6846",name:"dialog",meta:{docType:"message"},path:"/flutter/components/dialog",component:()=>w1(()=>import("./README.69ebef84.js"),["assets/README.69ebef84.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])},{title:"DropdownMenu \u4E0B\u62C9\u83DC\u5355",name:"dropdown-menu",meta:{docType:"navigation"},path:"/flutter/components/dropdown-menu",component:()=>w1(()=>import("./README.b3aadf2d.js"),["assets/README.b3aadf2d.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])},{title:"Loading \u52A0\u8F7D",name:"loading",meta:{docType:"message"},path:"/flutter/components/loading",component:()=>w1(()=>import("./README.6a63c071.js"),["assets/README.6a63c071.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])},{title:"Popup \u5F39\u51FA\u5C42",name:"popup",meta:{docType:"message"},path:"/flutter/components/popup",component:()=>w1(()=>import("./README.0e547c81.js"),["assets/README.0e547c81.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])},{title:"PullDownRefresh \u4E0B\u62C9\u5237\u65B0",name:"pull-down-refresh",meta:{docType:"message"},path:"/flutter/components/pull-down-refresh",component:()=>w1(()=>import("./README.80e0c6d2.js"),["assets/README.80e0c6d2.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])},{title:"SwipeCell \u6ED1\u52A8\u64CD\u4F5C",name:"swipeCell",meta:{docType:"message"},path:"/flutter/components/swipe-cell",component:()=>w1(()=>import("./README.53f1c506.js"),["assets/README.53f1c506.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])},{title:"Toast \u8F7B\u63D0\u793A",name:"toast",meta:{docType:"message"},path:"/flutter/components/toast",component:()=>w1(()=>import("./README.6a80ea94.js"),["assets/README.6a80ea94.js","assets/component.6878da95.js","assets/component.2b0f6321.css"])}]}]},y4=(e,t)=>{const n=e.__vccOpts||e;for(const[i,o]of t)n[i]=o;return n};const{docs:_5}=JSON.parse(JSON.stringify(M5).replace(/component:.+/g,""));_5.forEach(e=>{e.type==="component"&&(e.children=e.children.sort((t,n)=>{const i=t.name.toUpperCase(),o=n.name.toUpperCase();return i<o?-1:i>o?1:0}))});const x4=Jo({data(){return{docType:"",loaded:!1}},computed:{contentStyle(){const{loaded:e}=this;return{visibility:e?"visible":"hidden"}}},mounted(){this.docType=this.$route.meta.docType,this.$refs.tdHeader.framework="flutter",this.$refs.tdDocAside.routerList=_5,this.$refs.tdDocAside.onchange=({detail:e})=>{console.log("detail: "+JSON.stringify(e)),this.$route.path!==e&&(this.loaded=!1,this.$router.push({path:e}),window.scrollTo(0,0))},this.$refs.tdDocSearch.docsearchInfo={indexName:"tdesign_doc_flutter"}},watch:{$route(e){!e.meta.docType||(this.docType=e.meta.docType)}},methods:{contentLoaded(e){requestAnimationFrame(()=>{this.loaded=!0,e()})}}}),L4={ref:"tdHeader",slot:"header"},b4={slot:"search",ref:"tdDocSearch"},M4={ref:"tdDocAside",title:"Flutter"};function _4(e,t,n,i,o,r){const l=us("router-view");return C5(),Ns("td-doc-layout",null,[Pt("td-header",L4,[Pt("td-doc-search",b4,null,512)],512),Pt("td-doc-aside",M4,null,512),$1(l,{style:di(e.contentStyle),onLoaded:e.contentLoaded,docType:e.docType},null,8,["style","onLoaded","docType"])])}var H4=y4(x4,[["render",_4]]);/*!
  * vue-router v4.2.0
  * (c) 2023 Eduardo San Martin Morote
  * @license MIT
  */const nt=typeof window!="undefined";function V4(e){return e.__esModule||e[Symbol.toStringTag]==="Module"}const T1=Object.assign;function Ai(e,t){const n={};for(const i in t){const o=t[i];n[i]=le(o)?o.map(e):e(o)}return n}const Ut=()=>{},le=Array.isArray,T4=/\/$/,k4=e=>e.replace(T4,"");function Si(e,t,n="/"){let i,o={},r="",l="";const s=t.indexOf("#");let a=t.indexOf("?");return s<a&&s>=0&&(a=-1),a>-1&&(i=t.slice(0,a),r=t.slice(a+1,s>-1?s:t.length),o=e(r)),s>-1&&(i=i||t.slice(0,s),l=t.slice(s,t.length)),i=N4(i!=null?i:t,n),{fullPath:i+(r&&"?")+r+l,path:i,query:o,hash:l}}function Z4(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function o0(e,t){return!t||!e.toLowerCase().startsWith(t.toLowerCase())?e:e.slice(t.length)||"/"}function D4(e,t,n){const i=t.matched.length-1,o=n.matched.length-1;return i>-1&&i===o&&ut(t.matched[i],n.matched[o])&&H5(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function ut(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function H5(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!E4(e[n],t[n]))return!1;return!0}function E4(e,t){return le(e)?r0(e,t):le(t)?r0(t,e):e===t}function r0(e,t){return le(t)?e.length===t.length&&e.every((n,i)=>n===t[i]):e.length===1&&e[0]===t}function N4(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),i=e.split("/"),o=i[i.length-1];(o===".."||o===".")&&i.push("");let r=n.length-1,l,s;for(l=0;l<i.length;l++)if(s=i[l],s!==".")if(s==="..")r>1&&r--;else break;return n.slice(0,r).join("/")+"/"+i.slice(l-(l===i.length?1:0)).join("/")}var on;(function(e){e.pop="pop",e.push="push"})(on||(on={}));var Qt;(function(e){e.back="back",e.forward="forward",e.unknown=""})(Qt||(Qt={}));function A4(e){if(!e)if(nt){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return e[0]!=="/"&&e[0]!=="#"&&(e="/"+e),k4(e)}const S4=/^[^#]+#/;function I4(e,t){return e.replace(S4,"#")+t}function j4(e,t){const n=document.documentElement.getBoundingClientRect(),i=e.getBoundingClientRect();return{behavior:t.behavior,left:i.left-n.left-(t.left||0),top:i.top-n.top-(t.top||0)}}const Ci=()=>({left:window.pageXOffset,top:window.pageYOffset});function O4(e){let t;if("el"in e){const n=e.el,i=typeof n=="string"&&n.startsWith("#"),o=typeof n=="string"?i?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!o)return;t=j4(o,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(t.left!=null?t.left:window.pageXOffset,t.top!=null?t.top:window.pageYOffset)}function l0(e,t){return(history.state?history.state.position-t:-1)+e}const uo=new Map;function z4(e,t){uo.set(e,t)}function B4(e){const t=uo.get(e);return uo.delete(e),t}let F4=()=>location.protocol+"//"+location.host;function V5(e,t){const{pathname:n,search:i,hash:o}=t,r=e.indexOf("#");if(r>-1){let s=o.includes(e.slice(r))?e.slice(r).length:1,a=o.slice(s);return a[0]!=="/"&&(a="/"+a),o0(a,"")}return o0(n,e)+i+o}function $4(e,t,n,i){let o=[],r=[],l=null;const s=({state:h})=>{const C=V5(e,location),f=n.value,p=t.value;let g=0;if(h){if(n.value=C,t.value=h,l&&l===f){l=null;return}g=p?h.position-p.position:0}else i(C);o.forEach(m=>{m(n.value,f,{delta:g,type:on.pop,direction:g?g>0?Qt.forward:Qt.back:Qt.unknown})})};function a(){l=n.value}function d(h){o.push(h);const C=()=>{const f=o.indexOf(h);f>-1&&o.splice(f,1)};return r.push(C),C}function c(){const{history:h}=window;!h.state||h.replaceState(T1({},h.state,{scroll:Ci()}),"")}function u(){for(const h of r)h();r=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",c)}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:a,listen:d,destroy:u}}function s0(e,t,n,i=!1,o=!1){return{back:e,current:t,forward:n,replaced:i,position:window.history.length,scroll:o?Ci():null}}function R4(e){const{history:t,location:n}=window,i={value:V5(e,n)},o={value:t.state};o.value||r(i.value,{back:null,current:i.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0);function r(a,d,c){const u=e.indexOf("#"),h=u>-1?(n.host&&document.querySelector("base")?e:e.slice(u))+a:F4()+e+a;try{t[c?"replaceState":"pushState"](d,"",h),o.value=d}catch(C){console.error(C),n[c?"replace":"assign"](h)}}function l(a,d){const c=T1({},t.state,s0(o.value.back,a,o.value.forward,!0),d,{position:o.value.position});r(a,c,!0),i.value=a}function s(a,d){const c=T1({},o.value,t.state,{forward:a,scroll:Ci()});r(c.current,c,!0);const u=T1({},s0(i.value,a,null),{position:c.position+1},d);r(a,u,!1),i.value=a}return{location:i,state:o,push:s,replace:l}}function P4(e){e=A4(e);const t=R4(e),n=$4(e,t.state,t.location,t.replace);function i(r,l=!0){l||n.pauseListeners(),history.go(r)}const o=T1({location:"",base:e,go:i,createHref:I4.bind(null,e)},t,n);return Object.defineProperty(o,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(o,"state",{enumerable:!0,get:()=>t.state.value}),o}function U4(e){return typeof e=="string"||e&&typeof e=="object"}function T5(e){return typeof e=="string"||typeof e=="symbol"}const He={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},k5=Symbol("");var a0;(function(e){e[e.aborted=4]="aborted",e[e.cancelled=8]="cancelled",e[e.duplicated=16]="duplicated"})(a0||(a0={}));function ft(e,t){return T1(new Error,{type:e,[k5]:!0},t)}function ve(e,t){return e instanceof Error&&k5 in e&&(t==null||!!(e.type&t))}const c0="[^/]+?",Q4={sensitive:!1,strict:!1,start:!0,end:!0},q4=/[.+*?^${}()[\]/\\]/g;function W4(e,t){const n=T1({},Q4,t),i=[];let o=n.start?"^":"";const r=[];for(const d of e){const c=d.length?[]:[90];n.strict&&!d.length&&(o+="/");for(let u=0;u<d.length;u++){const h=d[u];let C=40+(n.sensitive?.25:0);if(h.type===0)u||(o+="/"),o+=h.value.replace(q4,"\\$&"),C+=40;else if(h.type===1){const{value:f,repeatable:p,optional:g,regexp:m}=h;r.push({name:f,repeatable:p,optional:g});const v=m||c0;if(v!==c0){C+=10;try{new RegExp(`(${v})`)}catch(x){throw new Error(`Invalid custom RegExp for param "${f}" (${v}): `+x.message)}}let y=p?`((?:${v})(?:/(?:${v}))*)`:`(${v})`;u||(y=g&&d.length<2?`(?:/${y})`:"/"+y),g&&(y+="?"),o+=y,C+=20,g&&(C+=-8),p&&(C+=-20),v===".*"&&(C+=-50)}c.push(C)}i.push(c)}if(n.strict&&n.end){const d=i.length-1;i[d][i[d].length-1]+=.7000000000000001}n.strict||(o+="/?"),n.end?o+="$":n.strict&&(o+="(?:/|$)");const l=new RegExp(o,n.sensitive?"":"i");function s(d){const c=d.match(l),u={};if(!c)return null;for(let h=1;h<c.length;h++){const C=c[h]||"",f=r[h-1];u[f.name]=C&&f.repeatable?C.split("/"):C}return u}function a(d){let c="",u=!1;for(const h of e){(!u||!c.endsWith("/"))&&(c+="/"),u=!1;for(const C of h)if(C.type===0)c+=C.value;else if(C.type===1){const{value:f,repeatable:p,optional:g}=C,m=f in d?d[f]:"";if(le(m)&&!p)throw new Error(`Provided param "${f}" is an array but it is not repeatable (* or + modifiers)`);const v=le(m)?m.join("/"):m;if(!v)if(g)h.length<2&&(c.endsWith("/")?c=c.slice(0,-1):u=!0);else throw new Error(`Missing required param "${f}"`);c+=v}}return c||"/"}return{re:l,score:i,keys:r,parse:s,stringify:a}}function K4(e,t){let n=0;for(;n<e.length&&n<t.length;){const i=t[n]-e[n];if(i)return i;n++}return e.length<t.length?e.length===1&&e[0]===40+40?-1:1:e.length>t.length?t.length===1&&t[0]===40+40?1:-1:0}function Y4(e,t){let n=0;const i=e.score,o=t.score;for(;n<i.length&&n<o.length;){const r=K4(i[n],o[n]);if(r)return r;n++}if(Math.abs(o.length-i.length)===1){if(d0(i))return 1;if(d0(o))return-1}return o.length-i.length}function d0(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const G4={type:0,value:""},X4=/[a-zA-Z0-9_]/;function J4(e){if(!e)return[[]];if(e==="/")return[[G4]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(C){throw new Error(`ERR (${n})/"${d}": ${C}`)}let n=0,i=n;const o=[];let r;function l(){r&&o.push(r),r=[]}let s=0,a,d="",c="";function u(){!d||(n===0?r.push({type:0,value:d}):n===1||n===2||n===3?(r.length>1&&(a==="*"||a==="+")&&t(`A repeatable param (${d}) must be alone in its segment. eg: '/:ids+.`),r.push({type:1,value:d,regexp:c,repeatable:a==="*"||a==="+",optional:a==="*"||a==="?"})):t("Invalid state to consume buffer"),d="")}function h(){d+=a}for(;s<e.length;){if(a=e[s++],a==="\\"&&n!==2){i=n,n=4;continue}switch(n){case 0:a==="/"?(d&&u(),l()):a===":"?(u(),n=1):h();break;case 4:h(),n=i;break;case 1:a==="("?n=2:X4.test(a)?h():(u(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&s--);break;case 2:a===")"?c[c.length-1]=="\\"?c=c.slice(0,-1)+a:n=3:c+=a;break;case 3:u(),n=0,a!=="*"&&a!=="?"&&a!=="+"&&s--,c="";break;default:t("Unknown state");break}}return n===2&&t(`Unfinished custom RegExp for param "${d}"`),u(),l(),o}function e9(e,t,n){const i=W4(J4(e.path),n),o=T1(i,{record:e,parent:t,children:[],alias:[]});return t&&!o.record.aliasOf==!t.record.aliasOf&&t.children.push(o),o}function t9(e,t){const n=[],i=new Map;t=f0({strict:!1,end:!0,sensitive:!1},t);function o(c){return i.get(c)}function r(c,u,h){const C=!h,f=n9(c);f.aliasOf=h&&h.record;const p=f0(t,c),g=[f];if("alias"in c){const y=typeof c.alias=="string"?[c.alias]:c.alias;for(const x of y)g.push(T1({},f,{components:h?h.record.components:f.components,path:x,aliasOf:h?h.record:f}))}let m,v;for(const y of g){const{path:x}=y;if(u&&x[0]!=="/"){const L=u.record.path,H=L[L.length-1]==="/"?"":"/";y.path=u.record.path+(x&&H+x)}if(m=e9(y,u,p),h?h.alias.push(m):(v=v||m,v!==m&&v.alias.push(m),C&&c.name&&!u0(m)&&l(c.name)),f.children){const L=f.children;for(let H=0;H<L.length;H++)r(L[H],m,h&&h.children[H])}h=h||m,(m.record.components&&Object.keys(m.record.components).length||m.record.name||m.record.redirect)&&a(m)}return v?()=>{l(v)}:Ut}function l(c){if(T5(c)){const u=i.get(c);u&&(i.delete(c),n.splice(n.indexOf(u),1),u.children.forEach(l),u.alias.forEach(l))}else{const u=n.indexOf(c);u>-1&&(n.splice(u,1),c.record.name&&i.delete(c.record.name),c.children.forEach(l),c.alias.forEach(l))}}function s(){return n}function a(c){let u=0;for(;u<n.length&&Y4(c,n[u])>=0&&(c.record.path!==n[u].record.path||!Z5(c,n[u]));)u++;n.splice(u,0,c),c.record.name&&!u0(c)&&i.set(c.record.name,c)}function d(c,u){let h,C={},f,p;if("name"in c&&c.name){if(h=i.get(c.name),!h)throw ft(1,{location:c});p=h.record.name,C=T1(p0(u.params,h.keys.filter(v=>!v.optional).map(v=>v.name)),c.params&&p0(c.params,h.keys.map(v=>v.name))),f=h.stringify(C)}else if("path"in c)f=c.path,h=n.find(v=>v.re.test(f)),h&&(C=h.parse(f),p=h.record.name);else{if(h=u.name?i.get(u.name):n.find(v=>v.re.test(u.path)),!h)throw ft(1,{location:c,currentLocation:u});p=h.record.name,C=T1({},u.params,c.params),f=h.stringify(C)}const g=[];let m=h;for(;m;)g.unshift(m.record),m=m.parent;return{name:p,path:f,params:C,matched:g,meta:o9(g)}}return e.forEach(c=>r(c)),{addRoute:r,resolve:d,removeRoute:l,getRoutes:s,getRecordMatcher:o}}function p0(e,t){const n={};for(const i of t)i in e&&(n[i]=e[i]);return n}function n9(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:i9(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function i9(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const i in e.components)t[i]=typeof n=="boolean"?n:n[i];return t}function u0(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function o9(e){return e.reduce((t,n)=>T1(t,n.meta),{})}function f0(e,t){const n={};for(const i in e)n[i]=i in t?t[i]:e[i];return n}function Z5(e,t){return t.children.some(n=>n===e||Z5(e,n))}const D5=/#/g,r9=/&/g,l9=/\//g,s9=/=/g,a9=/\?/g,E5=/\+/g,c9=/%5B/g,d9=/%5D/g,N5=/%5E/g,p9=/%60/g,A5=/%7B/g,u9=/%7C/g,S5=/%7D/g,f9=/%20/g;function o2(e){return encodeURI(""+e).replace(u9,"|").replace(c9,"[").replace(d9,"]")}function g9(e){return o2(e).replace(A5,"{").replace(S5,"}").replace(N5,"^")}function fo(e){return o2(e).replace(E5,"%2B").replace(f9,"+").replace(D5,"%23").replace(r9,"%26").replace(p9,"`").replace(A5,"{").replace(S5,"}").replace(N5,"^")}function h9(e){return fo(e).replace(s9,"%3D")}function v9(e){return o2(e).replace(D5,"%23").replace(a9,"%3F")}function m9(e){return e==null?"":v9(e).replace(l9,"%2F")}function Un(e){try{return decodeURIComponent(""+e)}catch{}return""+e}function C9(e){const t={};if(e===""||e==="?")return t;const i=(e[0]==="?"?e.slice(1):e).split("&");for(let o=0;o<i.length;++o){const r=i[o].replace(E5," "),l=r.indexOf("="),s=Un(l<0?r:r.slice(0,l)),a=l<0?null:Un(r.slice(l+1));if(s in t){let d=t[s];le(d)||(d=t[s]=[d]),d.push(a)}else t[s]=a}return t}function g0(e){let t="";for(let n in e){const i=e[n];if(n=h9(n),i==null){i!==void 0&&(t+=(t.length?"&":"")+n);continue}(le(i)?i.map(r=>r&&fo(r)):[i&&fo(i)]).forEach(r=>{r!==void 0&&(t+=(t.length?"&":"")+n,r!=null&&(t+="="+r))})}return t}function w9(e){const t={};for(const n in e){const i=e[n];i!==void 0&&(t[n]=le(i)?i.map(o=>o==null?null:""+o):i==null?i:""+i)}return t}const y9=Symbol(""),h0=Symbol(""),r2=Symbol(""),I5=Symbol(""),go=Symbol("");function kt(){let e=[];function t(i){return e.push(i),()=>{const o=e.indexOf(i);o>-1&&e.splice(o,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Te(e,t,n,i,o){const r=i&&(i.enterCallbacks[o]=i.enterCallbacks[o]||[]);return()=>new Promise((l,s)=>{const a=u=>{u===!1?s(ft(4,{from:n,to:t})):u instanceof Error?s(u):U4(u)?s(ft(2,{from:t,to:u})):(r&&i.enterCallbacks[o]===r&&typeof u=="function"&&r.push(u),l())},d=e.call(i&&i.instances[o],t,n,a);let c=Promise.resolve(d);e.length<3&&(c=c.then(a)),c.catch(u=>s(u))})}function Ii(e,t,n,i){const o=[];for(const r of e)for(const l in r.components){let s=r.components[l];if(!(t!=="beforeRouteEnter"&&!r.instances[l]))if(x9(s)){const d=(s.__vccOpts||s)[t];d&&o.push(Te(d,n,i,r,l))}else{let a=s();o.push(()=>a.then(d=>{if(!d)return Promise.reject(new Error(`Couldn't resolve component "${l}" at "${r.path}"`));const c=V4(d)?d.default:d;r.components[l]=c;const h=(c.__vccOpts||c)[t];return h&&Te(h,n,i,r,l)()}))}}return o}function x9(e){return typeof e=="object"||"displayName"in e||"props"in e||"__vccOpts"in e}function v0(e){const t=we(r2),n=we(I5),i=Y1(()=>t.resolve(lt(e.to))),o=Y1(()=>{const{matched:a}=i.value,{length:d}=a,c=a[d-1],u=n.matched;if(!c||!u.length)return-1;const h=u.findIndex(ut.bind(null,c));if(h>-1)return h;const C=m0(a[d-2]);return d>1&&m0(c)===C&&u[u.length-1].path!==C?u.findIndex(ut.bind(null,a[d-2])):h}),r=Y1(()=>o.value>-1&&_9(n.params,i.value.params)),l=Y1(()=>o.value>-1&&o.value===n.matched.length-1&&H5(n.params,i.value.params));function s(a={}){return M9(a)?t[lt(e.replace)?"replace":"push"](lt(e.to)).catch(Ut):Promise.resolve()}return{route:i,href:Y1(()=>i.value.href),isActive:r,isExactActive:l,navigate:s}}const L9=Jo({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:v0,setup(e,{slots:t}){const n=un(v0(e)),{options:i}=we(r2),o=Y1(()=>({[C0(e.activeClass,i.linkActiveClass,"router-link-active")]:n.isActive,[C0(e.exactActiveClass,i.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{const r=t.default&&t.default(n);return e.custom?r:b5("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},r)}}}),b9=L9;function M9(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&!(e.button!==void 0&&e.button!==0)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function _9(e,t){for(const n in t){const i=t[n],o=e[n];if(typeof i=="string"){if(i!==o)return!1}else if(!le(o)||o.length!==i.length||i.some((r,l)=>r!==o[l]))return!1}return!0}function m0(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const C0=(e,t,n)=>e!=null?e:t!=null?t:n,H9=Jo({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const i=we(go),o=Y1(()=>e.route||i.value),r=we(h0,0),l=Y1(()=>{let d=lt(r);const{matched:c}=o.value;let u;for(;(u=c[d])&&!u.components;)d++;return d}),s=Y1(()=>o.value.matched[l.value]);In(h0,Y1(()=>l.value+1)),In(y9,s),In(go,o);const a=A3();return An(()=>[a.value,s.value,e.name],([d,c,u],[h,C,f])=>{c&&(c.instances[u]=d,C&&C!==c&&d&&d===h&&(c.leaveGuards.size||(c.leaveGuards=C.leaveGuards),c.updateGuards.size||(c.updateGuards=C.updateGuards))),d&&c&&(!C||!ut(c,C)||!h)&&(c.enterCallbacks[u]||[]).forEach(p=>p(d))},{flush:"post"}),()=>{const d=o.value,c=e.name,u=s.value,h=u&&u.components[c];if(!h)return w0(n.default,{Component:h,route:d});const C=u.props[c],f=C?C===!0?d.params:typeof C=="function"?C(d):C:null,g=b5(h,T1({},f,t,{onVnodeUnmounted:m=>{m.component.isUnmounted&&(u.instances[c]=null)},ref:a}));return w0(n.default,{Component:g,route:d})||g}}});function w0(e,t){if(!e)return null;const n=e(t);return n.length===1?n[0]:n}const V9=H9;function T9(e){const t=t9(e.routes,e),n=e.parseQuery||C9,i=e.stringifyQuery||g0,o=e.history,r=kt(),l=kt(),s=kt(),a=S3(He);let d=He;nt&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const c=Ai.bind(null,O=>""+O),u=Ai.bind(null,m9),h=Ai.bind(null,Un);function C(O,X){let J,r1;return T5(O)?(J=t.getRecordMatcher(O),r1=X):r1=O,t.addRoute(r1,J)}function f(O){const X=t.getRecordMatcher(O);X&&t.removeRoute(X)}function p(){return t.getRoutes().map(O=>O.record)}function g(O){return!!t.getRecordMatcher(O)}function m(O,X){if(X=T1({},X||a.value),typeof O=="string"){const I=Si(n,O,X.path),R=t.resolve({path:I.path},X),U=o.createHref(I.fullPath);return T1(I,R,{params:h(R.params),hash:Un(I.hash),redirectedFrom:void 0,href:U})}let J;if("path"in O)J=T1({},O,{path:Si(n,O.path,X.path).path});else{const I=T1({},O.params);for(const R in I)I[R]==null&&delete I[R];J=T1({},O,{params:u(I)}),X.params=u(X.params)}const r1=t.resolve(J,X),s1=O.hash||"";r1.params=c(h(r1.params));const M=Z4(i,T1({},O,{hash:g9(s1),path:r1.path})),k=o.createHref(M);return T1({fullPath:M,hash:s1,query:i===g0?w9(O.query):O.query||{}},r1,{redirectedFrom:void 0,href:k})}function v(O){return typeof O=="string"?Si(n,O,a.value.path):T1({},O)}function y(O,X){if(d!==O)return ft(8,{from:X,to:O})}function x(O){return Z(O)}function L(O){return x(T1(v(O),{replace:!0}))}function H(O){const X=O.matched[O.matched.length-1];if(X&&X.redirect){const{redirect:J}=X;let r1=typeof J=="function"?J(O):J;return typeof r1=="string"&&(r1=r1.includes("?")||r1.includes("#")?r1=v(r1):{path:r1},r1.params={}),T1({query:O.query,hash:O.hash,params:"path"in r1?{}:O.params},r1)}}function Z(O,X){const J=d=m(O),r1=a.value,s1=O.state,M=O.force,k=O.replace===!0,I=H(J);if(I)return Z(T1(v(I),{state:typeof I=="object"?T1({},s1,I.state):s1,force:M,replace:k}),X||J);const R=J;R.redirectedFrom=X;let U;return!M&&D4(i,r1,J)&&(U=ft(16,{to:R,from:r1}),a1(r1,r1,!0,!1)),(U?Promise.resolve(U):_(R,r1)).catch(q=>ve(q)?ve(q,2)?q:p1(q):G(q,R,r1)).then(q=>{if(q){if(ve(q,2))return Z(T1({replace:k},v(q.to),{state:typeof q.to=="object"?T1({},s1,q.to.state):s1,force:M}),X||R)}else q=B(R,r1,!0,k,s1);return S(R,r1,q),q})}function N(O,X){const J=y(O,X);return J?Promise.reject(J):Promise.resolve()}function A(O){const X=y1.values().next().value;return X&&typeof X.runWithContext=="function"?X.runWithContext(O):O()}function _(O,X){let J;const[r1,s1,M]=k9(O,X);J=Ii(r1.reverse(),"beforeRouteLeave",O,X);for(const I of r1)I.leaveGuards.forEach(R=>{J.push(Te(R,O,X))});const k=N.bind(null,O,X);return J.push(k),v1(J).then(()=>{J=[];for(const I of r.list())J.push(Te(I,O,X));return J.push(k),v1(J)}).then(()=>{J=Ii(s1,"beforeRouteUpdate",O,X);for(const I of s1)I.updateGuards.forEach(R=>{J.push(Te(R,O,X))});return J.push(k),v1(J)}).then(()=>{J=[];for(const I of O.matched)if(I.beforeEnter&&!X.matched.includes(I))if(le(I.beforeEnter))for(const R of I.beforeEnter)J.push(Te(R,O,X));else J.push(Te(I.beforeEnter,O,X));return J.push(k),v1(J)}).then(()=>(O.matched.forEach(I=>I.enterCallbacks={}),J=Ii(M,"beforeRouteEnter",O,X),J.push(k),v1(J))).then(()=>{J=[];for(const I of l.list())J.push(Te(I,O,X));return J.push(k),v1(J)}).catch(I=>ve(I,8)?I:Promise.reject(I))}function S(O,X,J){for(const r1 of s.list())A(()=>r1(O,X,J))}function B(O,X,J,r1,s1){const M=y(O,X);if(M)return M;const k=X===He,I=nt?history.state:{};J&&(r1||k?o.replace(O.fullPath,T1({scroll:k&&I&&I.scroll},s1)):o.push(O.fullPath,s1)),a.value=O,a1(O,X,J,k),p1()}let D;function j(){D||(D=o.listen((O,X,J)=>{if(!g1.listening)return;const r1=m(O),s1=H(r1);if(s1){Z(T1(s1,{replace:!0}),r1).catch(Ut);return}d=r1;const M=a.value;nt&&z4(l0(M.fullPath,J.delta),Ci()),_(r1,M).catch(k=>ve(k,12)?k:ve(k,2)?(Z(k.to,r1).then(I=>{ve(I,20)&&!J.delta&&J.type===on.pop&&o.go(-1,!1)}).catch(Ut),Promise.reject()):(J.delta&&o.go(-J.delta,!1),G(k,r1,M))).then(k=>{k=k||B(r1,M,!1),k&&(J.delta&&!ve(k,8)?o.go(-J.delta,!1):J.type===on.pop&&ve(k,20)&&o.go(-1,!1)),S(r1,M,k)}).catch(Ut)}))}let Q=kt(),P=kt(),F;function G(O,X,J){p1(O);const r1=P.list();return r1.length?r1.forEach(s1=>s1(O,X,J)):console.error(O),Promise.reject(O)}function d1(){return F&&a.value!==He?Promise.resolve():new Promise((O,X)=>{Q.add([O,X])})}function p1(O){return F||(F=!O,j(),Q.list().forEach(([X,J])=>O?J(O):X()),Q.reset()),O}function a1(O,X,J,r1){const{scrollBehavior:s1}=e;if(!nt||!s1)return Promise.resolve();const M=!J&&B4(l0(O.fullPath,0))||(r1||!J)&&history.state&&history.state.scroll||null;return Xr().then(()=>s1(O,X,M)).then(k=>k&&O4(k)).catch(k=>G(k,O,X))}const c1=O=>o.go(O);let u1;const y1=new Set,g1={currentRoute:a,listening:!0,addRoute:C,removeRoute:f,hasRoute:g,getRoutes:p,resolve:m,options:e,push:x,replace:L,go:c1,back:()=>c1(-1),forward:()=>c1(1),beforeEach:r.add,beforeResolve:l.add,afterEach:s.add,onError:P.add,isReady:d1,install(O){const X=this;O.component("RouterLink",b9),O.component("RouterView",V9),O.config.globalProperties.$router=X,Object.defineProperty(O.config.globalProperties,"$route",{enumerable:!0,get:()=>lt(a)}),nt&&!u1&&a.value===He&&(u1=!0,x(o.location).catch(s1=>{}));const J={};for(const s1 in He)J[s1]=Y1(()=>a.value[s1]);O.provide(r2,X),O.provide(I5,un(J)),O.provide(go,a);const r1=O.unmount;y1.add(O),O.unmount=function(){y1.delete(O),y1.size<1&&(d=He,D&&D(),D=null,a.value=He,u1=!1,F=!1),r1()}}};function v1(O){return O.reduce((X,J)=>X.then(()=>A(J)),Promise.resolve())}return g1}function k9(e,t){const n=[],i=[],o=[],r=Math.max(t.matched.length,e.matched.length);for(let l=0;l<r;l++){const s=t.matched[l];s&&(e.matched.find(d=>ut(d,s))?i.push(s):n.push(s));const a=e.matched[l];a&&(t.matched.find(d=>ut(d,a))||o.push(a))}return[n,i,o]}const{docs:y0}=M5,ho=(e,t)=>{let n=[];return e.forEach(i=>{const o=i.type||t;if(o===t){const{children:r}=i;r?n=n.concat(ho(r,o)):n.push({path:i.path,name:i.name,meta:i.meta||{},component:i.component})}}),n},Z9=[{path:"/",redirect:"/flutter/overview"},{path:"/:catchAll(.*)",redirect:"/flutter/overview"},{path:"/flutter/overview",redirect:"/flutter/components/icon"},...ho(y0,"document"),...ho(y0,"component")],D9={routes:Z9,history:P4("/")},l2=T9(D9);l2.beforeEach((e,t,n)=>{typeof NProgress!="undefined"&&window.NProgress&&window.NProgress.start(),n()});l2.afterEach(()=>{var e,t;window.NProgress&&window.NProgress.done(),(t=(e=document.querySelector("td-stats"))==null?void 0:e.track)==null||t.call(e)});const x0=new Map;function fn(e){let t=x0.get(e);return t===void 0&&(t=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),x0.set(e,t)),t}function se(e,t,n={}){return e.dispatchEvent(new globalThis.CustomEvent(t,{bubbles:!1,...n}))}function Qn(e){return`<${String(e.tagName).toLowerCase()}>`}function qn(e,t){e.nodeType===globalThis.Node.ELEMENT_NODE&&(t(e),e.shadowRoot&&qn(e.shadowRoot,t));const n=globalThis.document.createTreeWalker(e,globalThis.NodeFilter.SHOW_ELEMENT,null,!1);for(;n.nextNode();){const i=n.currentNode;t(i),i.shadowRoot&&qn(i.shadowRoot,t)}}const s2=Promise.resolve(),E9=new WeakMap,vo=qn.name==="walkInShadow",rn=new Set;function j5(e){rn.size||s2.then(A9),rn.add(e)}function N9(e){rn.delete(e)}function A9(){for(const e of rn)try{e()}catch(t){console.error(t)}rn.clear()}const Wn=new WeakMap,jt=new Set;function O5(e){const t=new Set,n=t.values();for(;e;){if(e.resolved=!1,e.deps){for(const i of e.deps)i.contexts.delete(e);e.deps.clear()}if(e.contexts)for(const i of e.contexts)jt.has(i)||(t.add(i),e.contexts.delete(i));e.observe&&j5(e.observe),e=n.next().value}}function wi(e,t){let n=Wn.get(e);n||(n=new Map,Wn.set(e,n));let i=n.get(t);return i||(i={key:t,target:e,value:void 0,lastValue:void 0,resolved:!1,contexts:void 0,deps:void 0,observe:void 0},n.set(t,i)),i}let W1=null;function z5(e,t,n){const i=wi(e,t);if(W1&&(i.contexts||(i.contexts=new Set),W1.deps||(W1.deps=new Set),i.contexts.add(W1),W1.deps.add(i)),i.resolved)return i.value;const o=W1;try{if(jt.has(i))throw Error(`Circular get invocation is forbidden: '${t}'`);W1=i,jt.add(i),i.value=n(e,i.value),i.resolved=!0,W1=o,jt.delete(i)}catch(r){throw W1=o,jt.delete(i),W1&&(W1.deps.delete(i),i.contexts.delete(W1)),r}return i.value}function S9(e,t,n,i){const o=wi(e,t),r=n(e,i,o.value);r!==o.value&&(o.value=r,O5(o))}function I9(e,t,n,i){const o=wi(e,t);o.observe=()=>{const r=z5(e,t,n);r!==o.lastValue&&(i(e,r,o.lastValue),o.lastValue=r)};try{o.observe()}catch(r){console.error(r)}return()=>{N9(o.observe),o.observe=void 0,o.lastValue=void 0}}const bn=new Set;function j9(e){bn.size||setTimeout(()=>{for(const t of bn)if(!t.contexts||t.contexts.size===0){if(t.deps)for(const i of t.deps)i.contexts.delete(t);Wn.get(t.target).delete(t.key)}bn.clear()}),bn.add(e)}function B5(e,t){O5(e),t.clearValue&&(e.value=void 0,e.lastValue=void 0),t.deleteEntry&&j9(e)}function F5(e,t,n={}){const i=wi(e,t);B5(i,n)}function O9(e,t={}){const n=Wn.get(e);if(n)for(const i of n.values())B5(i,t)}function L0(e,t){return{get:t?n=>{const i=e(n),o=n.shadowRoot||n.attachShadow({mode:"open",delegatesFocus:e.delegatesFocus||!1});return()=>(i(n,o),o)}:n=>{const i=e(n);return()=>(i(n,n),n)},observe(n,i){i()}}}const $5={string:(e,t,n)=>{const i=t?String(t):"";return i?e.setAttribute(n,i):e.removeAttribute(n),i},number:(e,t,n)=>{const i=Number(t);return e.setAttribute(n,i),i},boolean:(e,t,n)=>{const i=Boolean(t);return i?e.setAttribute(n,""):e.removeAttribute(n),i},undefined:(e,t,n)=>{const i=typeof t,o=i!=="undefined"&&$5[i];return o?o(e,t,n):(e.hasAttribute(n)&&e.removeAttribute(n),t)}},z9={string:(e,t)=>e.getAttribute(t),number:(e,t)=>Number(e.getAttribute(t))||0,boolean:(e,t)=>e.hasAttribute(t),undefined:(e,t)=>e.getAttribute(t)};function B9(e,t){const n=typeof t.value,i=$5[n],o=z9[n];if(!i)throw TypeError(`Invalid default value for '${e}' property - it must be a string, number, boolean or undefined: ${n}`);const r=fn(e);return{get:(l,s)=>s===void 0?o(l,r)||t.value:s,set:(l,s)=>i(l,s,r),connect:n!=="undefined"?(l,s,a)=>(!l.hasAttribute(r)&&l[s]===t.value&&(l[s]=i(l,t.value,r)),t.connect&&t.connect(l,s,a)):t.connect,observe:t.observe}}const ln=new WeakMap,Mn=new WeakMap;function mo(e,t){if(t){const r=ln.get(t);if(e===r)return t;for(const l of Object.keys(r))l!=="tag"&&delete t.prototype[l]}else t=class extends globalThis.HTMLElement{connectedCallback(){for(const l of t.settable){if(!hasOwnProperty.call(this,l))continue;const s=this[l];delete this[l],this[l]=s}const r=new Set;Mn.set(this,r),j5(()=>{if(r===Mn.get(this)){for(const l of t.connects)r.add(l(this));for(const l of t.observers)r.add(l(this))}})}disconnectedCallback(){const r=Mn.get(this);for(const l of r)l&&l();Mn.delete(this),O9(this)}};ln.set(t,Object.freeze(e));const n=new Set,i=new Set,o=new Set;for(const r of Object.keys(e)){if(r==="tag")continue;let l=e[r];const s=typeof l;if(s==="function")r==="render"?l=L0(l,!0):r==="content"?l=L0(l):l={get:l};else if(s!=="object"||l===null)l={value:l};else if(l.set){if(hasOwnProperty.call(l,"value"))throw TypeError(`Invalid property descriptor for '${r}' property - it must not have 'value' and 'set' properties at the same time.`);const a=fn(r),d=l.get||((c,u)=>u);l.get=(c,u)=>(u===void 0&&(u=l.set(c,c.getAttribute(a)||u)),d(c,u))}if(hasOwnProperty.call(l,"value"))l=B9(r,l);else if(!l.get)throw TypeError(`Invalid descriptor for '${r}' property - it must contain 'value' or 'get' option`);l.set&&o.add(r),Object.defineProperty(t.prototype,r,{get:function(){return z5(this,r,l.get)},set:l.set&&function(d){S9(this,r,l.set,d)},enumerable:!0,configurable:!0}),l.connect&&n.add(a=>l.connect(a,r,()=>{F5(a,r)})),l.observe&&i.add(a=>I9(a,r,l.get,l.observe))}return t.connects=n,t.observers=i,t.settable=o,t}const Zt=new Map;function F9(e){Zt.size||s2.then(()=>{qn(globalThis.document.body,t=>{if(Zt.has(t.constructor)){const n=Zt.get(t.constructor),i=ln.get(t.constructor);t.disconnectedCallback();for(const o of Object.keys(i)){const r=typeof i[o],l=r!=="object"&&r!=="function"&&i[o]!==n[o];l&&t.removeAttribute(fn(o)),F5(t,o,{clearValue:l})}t.connectedCallback()}}),Zt.clear()}),Zt.set(e,ln.get(e))}function R5(e){if(!e.tag)throw TypeError("Error while defining hybrids: 'tag' property with dashed tag name is required");const t=globalThis.customElements.get(e.tag);if(t){if(ln.get(t))return F9(t),mo(e,t),e;throw TypeError(`Custom element with '${e.tag}' tag name already defined outside of the hybrids context`)}return globalThis.customElements.define(e.tag,mo(e)),e}function $9(e,{root:t="",prefix:n}={}){for(const i of Object.keys(e)){const o=e[i];if(!o.tag){const r=fn([].concat(t).reduce((l,s)=>l.replace(s,""),i).replace(/^[./]+/,"").replace(/\//g,"-").replace(/\.[a-zA-Z]+$/,""));o.tag=n?`${n}-${r}`:r}R5(o)}return e}var V1=Object.freeze(Object.assign(R5,{compile:e=>mo(e),from:$9}));const qt=new WeakMap;function Ne(e){let t=qt.get(e);return t||(qt.set(e,t={}),t)}function yi(e){let t;for(;e&&(t=Ne(e))&&t.endNode;)e=t.endNode;return e}function sn(e){if(e.nodeType===globalThis.Node.TEXT_NODE){const t=qt.get(e);if(t&&t.startNode){const n=yi(t.endNode);let i=t.startNode;const o=n.nextSibling;for(;i;){const r=i.nextSibling;i.parentNode.removeChild(i),i=r!==o&&r}qt.set(e,{})}}else{let t=e.childNodes[0];for(;t;)e.removeChild(t),t=e.childNodes[0];qt.set(e,{})}}const R9=Date.now(),Le=(e=0)=>`H-${R9}-${e}`,a2=!!(globalThis.document&&globalThis.document.adoptedStyleSheets),ji=/^\d+$/,P9={block:(e,t)=>({display:"block","text-align":t}),inline:({display:e})=>({display:`inline${e?`-${e}`:""}`}),contents:{display:"contents"},hidden:{display:"none"},...["row","row-reverse","column","column-reverse"].reduce((e,t)=>(e[t]=(n,i="nowrap")=>({display:"flex","flex-flow":`${t} ${i}`}),e),{}),grow:(e,t=1)=>({"flex-grow":t}),shrink:(e,t=1)=>({"flex-shrink":t}),basis:(e,t)=>({"flex-basis":k1(t)}),order:(e,t=0)=>({order:t}),grid:(e,t="1",n="",i="",o="")=>({display:"grid",...["columns","rows"].reduce((r,l)=>{const s=l==="columns"?t:n;return r[`grid-template-${l}`]=s&&s.split("|").map(a=>a.match(ji)?`repeat(${a}, minmax(0, 1fr))`:k1(a)).join(" "),r},{}),"grid-auto-flow":`${i} ${o&&"dense"}`}),area:(e,t="",n="")=>({"grid-column":t.match(ji)?`span ${t}`:t,"grid-row":n.match(ji)?`span ${n}`:n}),gap:(e,t=1,n="")=>({"column-gap":k1(t),"row-gap":k1(n||t)}),items:(e,t="start",n="")=>({"place-items":`${t} ${n}`}),content:(e,t="start",n="")=>({"place-content":`${t} ${n}`}),self:(e,t="start",n="")=>({"place-self":`${t} ${n}`}),center:{"place-items":"center","place-content":"center"},size:(e,t,n=t)=>({width:k1(t),height:k1(n),"box-sizing":"border-box"}),width:(e,t,n,i)=>({width:k1(t),"min-width":k1(n),"max-width":k1(i),"box-sizing":"border-box"}),height:(e,t,n,i)=>({height:k1(t),"min-height":k1(n),"max-height":k1(i),"box-sizing":"border-box"}),ratio:(e,t)=>({"aspect-ratio":t}),overflow:(e,t="hidden",n="")=>{const i=n?`-${t}`:"",o=n||t;return{[`overflow${i}`]:o,...o==="scroll"?{"flex-grow":e["flex-grow"]||1,"flex-basis":0,"overscroll-behavior":"contain","--webkit-overflow-scrolling":"touch"}:{}}},margin:(e,t="1",n,i,o)=>t.match(/top|bottom|left|right/)?{[`margin-${t}`]:k1(n||"1")}:{margin:`${k1(t)} ${k1(n)} ${k1(i)} ${k1(o)}`},padding:(e,t="1",n,i,o)=>t.match(/top|bottom|left|right/)?{[`padding-${t}`]:k1(n||"1")}:{padding:`${k1(t)} ${k1(n)} ${k1(i)} ${k1(o)}`},absolute:{position:"absolute"},relative:{position:"relative"},fixed:{position:"fixed"},sticky:{position:"sticky"},static:{position:"static"},inset:(e,t=0)=>{const n=k1(t);return{top:n,right:n,bottom:n,left:n}},top:(e,t=0)=>({top:k1(t)}),bottom:(e,t=0)=>({bottom:k1(t)}),left:(e,t=0)=>({left:k1(t)}),right:(e,t=0)=>({right:k1(t)}),layer:(e,t=1)=>({"z-index":t}),"":(e,t,...n)=>{if(n.length<2)throw new Error("Generic rule '::' requires at least two arguments, eg.: ::[property]:[name]");return{[n[n.length-2]]:`var(--${n.join("-")})`}},view:(e,t)=>({"view-transition-name":t})},U9={min:"min-content",max:"max-content",fit:"fit-content",full:"100%"},Q9={portrait:"orientation: portrait",landscape:"orientation: landscape"};function k1(e){return e=U9[e]||e,/^-?\d+(\.\d+)*$/.test(String(e))?`${e*8}px`:e||""}let tt;function P5(){if(tt)return tt;if(a2)tt=new globalThis.CSSStyleSheet;else{const e=globalThis.document.createElement("style");e.appendChild(globalThis.document.createTextNode("")),globalThis.document.head.appendChild(e),tt=e.sheet}return tt.insertRule(":host([hidden]) { display: none; }"),tt}const b0=new WeakMap;let Co=new WeakSet;function q9(e){const t=e.getRootNode();if(Co.has(t))return;const n=P5();if(a2)t.adoptedStyleSheets=[...t.adoptedStyleSheets,n];else{if(t===globalThis.document)return;let i=b0.get(t);i||(i=globalThis.document.createElement("style"),t.appendChild(i),b0.set(t,i));let o="";for(let r=0;r<n.cssRules.length;r++)o+=n.cssRules[r].cssText;i.textContent=o}Co.add(t)}const M0=new Map;function _0(e,t,n,i){let o=M0.get(e);o||(o=`l-${Math.random().toString(36).substr(2,5)}`,M0.set(e,o)),a2||(Co=new WeakSet);const r=P5(),[l,s=""]=t.split("@"),a=Object.entries(n.replace(/\s+/g," ").trim().split(" ").reduce((c,u)=>{const[h,...C]=u.split(":"),f=P9[h];if(!f)throw TypeError(`Unsupported layout rule: '${h}'`);return Object.assign(c,typeof f=="function"?f(c,...C.map(p=>p.match(/--.*/)?`var(${p})`:p)):f)},{})).reduce((c,[u,h])=>h!==void 0&&h!==""?c+`${u}: ${h};`:c,""),d=s.split(":").reduce((c,u)=>u===""?c:c+` and (${Q9[u]||`min-width: ${u}`})`,"@media screen");if(i){const c=`:host(.${o}-s${l})`,u=`:where(.${o}-c${l})`;[c,u].forEach(h=>{r.insertRule(s?`${d} { ${h} { ${a} } }`:`${h} { ${a} }`,r.cssRules.length-1)})}else{const c=`.${o}${l}`;r.insertRule(s?`${d} { ${c} { ${a} } }`:`${c} { ${a} }`,r.cssRules.length-1)}return o}const wo=new WeakMap;function W9(e,t){const n=Ne(e),i=n.startNode,o=yi(n.endNode);t.parentNode.insertBefore(e,t.nextSibling);let r=e,l=i;for(;l;){const s=l.nextSibling;r.parentNode.insertBefore(l,r.nextSibling),r=l,l=s!==o.nextSibling&&s}}function K9(e,t,n,i,o){let r=wo.get(t);const l=n.map((c,u)=>({id:hasOwnProperty.call(c,"id")?c.id:u,value:c,placeholder:null,available:!0}));if(wo.set(t,l),r){const c=new Set;for(const u of l)c.add(u.id);r=r.filter(u=>c.has(u.id)?!0:(sn(u.placeholder),u.placeholder.parentNode.removeChild(u.placeholder),!1))}let s=t;const a=n.length-1,d=Ne(t);for(let c=0;c<l.length;c+=1){const u=l[c];let h;if(r){for(let C=0;C<r.length;C+=1)if(r[C].available&&r[C].id===u.id){h=r[C];break}}h?(h.available=!1,u.placeholder=h.placeholder,u.placeholder.previousSibling!==s&&W9(u.placeholder,s),h.value!==u.value&&i(e,u.placeholder,u.value,h.value,o)):(u.placeholder=globalThis.document.createTextNode(""),s.parentNode.insertBefore(u.placeholder,s.nextSibling),i(e,u.placeholder,u.value,void 0,o)),s=yi(Ne(u.placeholder).endNode||u.placeholder),c===0&&(d.startNode=u.placeholder),c===a&&(d.endNode=s)}if(r)for(const c of r)c.available&&(sn(c.placeholder),c.placeholder.parentNode.removeChild(c.placeholder))}function Y9(e,t,n){sn(t);const i=Ne(t);i.startNode=i.endNode=n,t.parentNode.insertBefore(n,t.nextSibling)}function H0(e){const t=typeof e;if(t==="object"){if(Array.isArray(e))return"array";if(e instanceof globalThis.Node)return"node"}return t}function an(e,t,n,i,o){const r=H0(n),l=H0(i);switch(l!=="undefined"&&r!==l&&(r!=="function"&&sn(t),l==="array"?wo.delete(t):l!=="node"&&l!=="function"&&(t.textContent="")),r){case"array":K9(e,t,n,an,o);break;case"node":Y9(e,t,n);break;case"function":o&&(n.useLayout=!0),n(e,t);break;default:t.textContent=r==="number"||n?n:""}}const Oi=new WeakMap;function G9(e){return(t,n,i,o)=>{if(o){const r=Oi.get(n);n.removeEventListener(e,r.get(o),o.options!==void 0?o.options:!1)}if(i){if(typeof i!="function")throw Error(`Event listener must be a function: ${typeof i}`);let r=Oi.get(n);r||(r=new WeakMap,Oi.set(n,r));const l=i.bind(null,t);r.set(i,l),n.addEventListener(e,l,i.options!==void 0?i.options:!1)}}}function X9(e,t=new Set){if(Array.isArray(e))for(const n of e)n&&t.add(n);else if(e!==null&&typeof e=="object")for(const[n,i]of Object.entries(e))n&&i&&t.add(n);else e&&t.add(e);return t}const V0=new WeakMap;function J9(e,t,n){const i=V0.get(t)||new Set,o=X9(n);V0.set(t,o);for(const r of o)t.classList.add(r),i.delete(r);for(const r of i)t.classList.remove(r)}const T0=new WeakMap;function ea(e,t,n){if(n===null||typeof n!="object")throw TypeError(`Style value must be an object in ${Qn(t)}:`,n);const i=T0.get(t)||new Map,o=new Map;for(const r of Object.keys(n)){const l=fn(r),s=n[r];!s&&s!==0?t.style.removeProperty(l):t.style.setProperty(l,s),o.set(l,s),i.delete(l)}for(const r of i.keys())t.style[r]="";T0.set(t,o)}function ta(e,t,n){if(t.substr(0,2)==="on"){const i=t.substr(2);return G9(i)}switch(e){case"class":return J9;case"style":return ea;default:{let i=!1;return(o,r,l)=>{if(i=i||!n&&!(r instanceof globalThis.SVGElement)&&t in r,i)r[t]=l;else if(l===!1||l===void 0||l===null)r.removeAttribute(e);else{const s=l===!0?"":String(l);r.setAttribute(e,s)}}}}}const U5=Le("(\\d+)"),Dt=new RegExp(`^${U5}$`),it=new RegExp(U5,"g"),na=/^[^A-Za-z]+$/;function ia(e){let t=e[0],n=!1;for(let i=1;i<e.length;i+=1)n=n||e[i-1].match(/<\s*(table|tr|thead|tbody|tfoot|colgroup)([^<>]|"[^"]*"|'[^']*')*>\s*$/),t+=(n?`<!--${Le(i-1)}-->`:Le(i-1))+e[i],n=n&&!e[i].match(/<\/\s*(table|tr|thead|tbody|tfoot|colgroup)\s*>/);return t}function oa(e){return e.replace(/\s*=\s*['"]*$/g,"").split(/\s+/).pop()}function k0(e){return globalThis.document.createTreeWalker(e,globalThis.NodeFilter.SHOW_ELEMENT|globalThis.NodeFilter.SHOW_TEXT|globalThis.NodeFilter.SHOW_COMMENT,null,!1)}function ra(e,t=0){e=e.replace(/(^[\n\s\t ]+)|([\n\s\t ]+$)+/g,"");let n=e.indexOf(`
`);if(n>-1){let i=0-t-2;for(n+=1;e[n]===" "&&n<e.length;n+=1)i+=1;return e.replace(/\n +/g,o=>o.substr(0,Math.max(o.length-i,1)))}return e}function Z0(e,t){const n=Le(t);return`${ra(e).split(`
`).filter(o=>o).map(o=>{const r=o.indexOf(n);return r>-1?`| ${o}
--${"-".repeat(r)}${"^".repeat(6)}`:`| ${o}`}).join(`
`).replace(it,"${...}")}`}const D0=new Map,E0=new WeakMap;function la(e,t){const n=E0.get(e);if(!n&&!t)return;const i=t&&t.map(r=>{let l=r;return l instanceof globalThis.CSSStyleSheet||(l=D0.get(r),l||(l=new globalThis.CSSStyleSheet,l.replaceSync(r),D0.set(r,l))),l});let o;if(n){if(i&&i.length===n.length&&i.every((r,l)=>r===n[l]))return;o=e.adoptedStyleSheets.filter(r=>!n.includes(r))}i&&(o=(o||e.adoptedStyleSheets).concat(i)),e.adoptedStyleSheets=o,E0.set(e,i)}const zi=new WeakMap;function Q5(e,t){let n=zi.get(e);if(t){(!n||n.parentNode!==e)&&(n=globalThis.document.createElement("style"),zi.set(e,n),e=yi(e),e.nodeType===globalThis.Node.TEXT_NODE?e.parentNode.insertBefore(n,e.nextSibling):e.appendChild(n));const i=[...t].join(`
/*------*/
`);n.textContent!==i&&(n.textContent=i)}else n&&(n.parentNode.removeChild(n),zi.set(e,null))}const N0=new WeakMap;function sa(e,t){let n=N0.get(e);n||(n=e.adoptedStyleSheets?la:Q5,N0.set(e,n)),n(e,t)}function aa(e,t,n,i){let o=globalThis.document.createElement("template");const r={},l=n?e:ia(e);if(o.innerHTML=t?`<svg>${l}</svg>`:l,t){const f=o.content.firstChild;o.content.removeChild(f);for(const p of Array.from(f.childNodes))o.content.appendChild(p)}let s;const a=o.content.children[0];if(a instanceof globalThis.HTMLTemplateElement){for(const f of Array.from(a.attributes)){const p=f.value.trim();if(p&&f.name.startsWith("layout")){if(p.match(it))throw Error("Layout attribute cannot contain expressions");s=_0(a,f.name.substr(6),p,!0)}}if(s!==void 0&&o.content.children.length>1)throw Error("Template, which uses layout system must have only the '<template>' root element");i=s||a.hasAttribute("layout"),o=a}const d=k0(o.content),c=[];let u=0,h=null;for(;d.nextNode();){let f=d.currentNode;if(h&&!h.contains(f)&&(h=null),f.nodeType===globalThis.Node.COMMENT_NODE&&Dt.test(f.textContent)&&(f.parentNode.insertBefore(globalThis.document.createTextNode(f.textContent),f.nextSibling),d.nextNode(),f.parentNode.removeChild(f),f=d.currentNode),f.nodeType===globalThis.Node.TEXT_NODE){let p=f.textContent;const g=p.match(Dt);if(g)f.textContent="",r[g[1]]=[u,an];else{if(Ha()&&!n&&!h&&!p.match(/^\s*$/)){let v;const y=p.trim(),x=y.replace(/\s+/g," ").replace(it,(L,H)=>(H=Number(H),v===void 0&&(v=H),`\${${H-v}}`));if(!x.match(na)){let L=f.previousSibling&&f.previousSibling.nodeType===globalThis.Node.COMMENT_NODE?f.previousSibling:"";L&&(L.parentNode.removeChild(L),u-=1,L=(L.textContent.split("|")[1]||"").trim().replace(/\s+/g," "));const H=Va(x,L).replace(/\${(\d+)}/g,(Z,N)=>Le(Number(N)+v));p=p.replace(y,H),f.textContent=p}}const m=p.match(it);if(m){let v=f;m.reduce((y,x)=>{const[L,H]=y.pop().split(x);return L&&y.push(L),y.push(x),H&&y.push(H),y},[p]).forEach((y,x)=>{x===0?v.textContent=y:(v=v.parentNode.insertBefore(globalThis.document.createTextNode(y),v.nextSibling),d.currentNode=v,u+=1);const L=v.textContent.match(Dt);L&&(v.textContent="",r[L[1]]=[u,an])})}}}else if(f.nodeType===globalThis.Node.ELEMENT_NODE){if(!h&&(f.getAttribute("translate")==="no"||f.tagName.toLowerCase()==="script"||f.tagName.toLowerCase()==="style")&&(h=f),vo){const p=f.tagName.toLowerCase();p.match(/.+-.+/)&&!globalThis.customElements.get(p)&&!c.includes(p)&&c.push(p)}for(const p of Array.from(f.attributes)){const g=p.value.trim(),m=p.name;if(i&&m.startsWith("layout")&&g){if(g.match(it))throw Error("Layout attribute cannot contain expressions");const y=_0(f,m.substr(6),g);f.removeAttribute(m),f.classList.add(y);continue}const v=g.match(Dt);if(v){const y=oa(e[v[1]]);r[v[1]]=[u,ta(m,y,t)],f.removeAttribute(p.name)}else{const y=g.match(it);if(y){const x=`attr__${m}`;for(const[L,H]of y.entries()){const[,Z]=H.match(Dt);let N=!1;r[Z]=[u,(A,_,S)=>{const B=Ne(_);B[x]=(B[x]||g).replace(H,S==null?"":S),(y.length===1||L+1===y.length)&&(N=N||!t&&!(_ instanceof globalThis.SVGElement)&&m in _,N?_[m]=B[x]:_.setAttribute(m,B[x]),B[x]=void 0)}]}p.value=""}}}}u+=1}vo&&c.length&&console.warn(`Not defined ${c.map(f=>`<${f}>`).join(", ")} element${c.length>1?"s":""} found in the template:
${Z0(l,-1)}`);const C=Object.keys(r);return function(p,g,m,{styleSheets:v}){let y=Ne(g);if(o!==y.template){const x=globalThis.document.importNode(o.content,!0),L=k0(x),H=[];let Z=0,N=0,A=r[C[N]];for(;L.nextNode();){const _=L.currentNode;for(;A&&A[0]===Z;)H.push({index:C[N],node:_,fn:A[1]}),N+=1,A=r[C[N]];Z+=1}if(y.hostLayout&&p.classList.remove(y.hostLayout),sn(g),y=Ne(g),y.template=o,y.markers=H,g.nodeType===globalThis.Node.TEXT_NODE){Q5(g),y.startNode=x.childNodes[0],y.endNode=x.childNodes[x.childNodes.length-1];let _=g,S=x.childNodes[0];for(;S;)g.parentNode.insertBefore(S,_.nextSibling),_=S,S=x.childNodes[0]}else{if(i){const _=`${s}-${p===g?"c":"s"}`;p.classList.add(_),y.hostLayout=_}g.appendChild(x)}i&&q9(g)}sa(g,v);for(const x of y.markers){const L=m[x.index],H=y.prevArgs&&y.prevArgs[x.index];if(!(y.prevArgs&&L===H))try{x.fn(p,x.node,L,H,i)}catch(Z){throw console.error(`Error while updating template expression in ${Qn(p)}:
${Z0(l,x.index)}`),Z}}y.prevArgs=m}}const Bi=new WeakMap;function ca(e,t,n=200){return function i(o,r){const l=i.useLayout;let s;t&&(s=setTimeout(()=>{s=void 0,an(o,r,t,void 0,l)},n)),Bi.set(r,e),e.then(a=>{s&&clearTimeout(s),Bi.get(r)===e&&(an(o,r,a,t&&!s?t:void 0,l),Bi.set(r,null))})}}function A0({target:e,detail:t},n){let i;switch(e.type){case"radio":case"checkbox":i=e.checked&&e.value;break;case"file":i=e.files;break;default:i=t&&hasOwnProperty.call(t,"value")?t.value:e.value}n(i)}function da(e,t){return e.split(".").reverse().reduce((n,i)=>n?{[i]:n}:{[i]:t},null)}const S0=new Map;function pa(e,t){if(!e)throw Error(`The first argument must be a property name or an object instance: ${e}`);if(typeof e=="object"){if(t===void 0)throw Error("For model instance property the second argument must be defined");const i=E9.get(e);if(!i)throw Error("Provided object must be a model instance of the store");return t===null?()=>{i.set(e,null)}:(o,r)=>{A0(r,l=>{i.set(e,da(t,l))})}}if(arguments.length===2)return i=>{i[e]=t};let n=S0.get(e);return n||(n=(i,o)=>{A0(o,r=>{i[e]=r})},S0.set(e,n)),n}let _n;var ua=globalThis.document&&globalThis.document.startViewTransition!==void 0&&function(t){return function n(i,o){if(_n){console.warn(`${Qn(i)}: view transition already started in ${Qn(_n)}`),t(i,o);return}t.useLayout=n.useLayout,_n=i,globalThis.document.startViewTransition(()=>(t(i,o),s2.then(()=>{_n=void 0})))}}||(e=>e),fa=Object.freeze(Object.defineProperty({__proto__:null,resolve:ca,set:pa,transition:ua},Symbol.toStringTag,{value:"Module"}));function ga(e){return this.id=e,this}function ha(...e){return this.styleSheets=this.styleSheets||[],this.styleSheets.push(...e),this}function va(e,...t){this.styleSheets=this.styleSheets||[];let n=e[0];for(let i=1;i<e.length;i++)n+=(t[i-1]!==void 0?t[i-1]:"")+e[i];return this.styleSheets.push(n),this}function ma(e){return this.plugins=this.plugins||[],this.plugins.push(e),this}var Ca=Object.freeze(Object.defineProperty({__proto__:null,key:ga,style:ha,css:va,use:ma},Symbol.toStringTag,{value:"Module"}));const wa=Le(),ya=Le("svg"),xa=Le("msg"),La=Le("layout"),I0=new Map;function ba(e,t,n,i){function o(r,l=r){let s=i?e+xa:e.join(wa);n&&(s+=ya);const a=o.useLayout;a&&(s+=La);let d=I0.get(s);d||(d=aa(e,n,i,a),I0.set(s,d)),o.plugins?o.plugins.reduce((c,u)=>u(c),()=>d(r,l,t,o))(r,l):d(r,l,t,o)}return Object.assign(o,Ca)}function K(e,...t){return ba(e,t,!1,!1)}Object.freeze(Object.assign(K,fa));const On=new Map,j0=new Map;let Ma=null;const _a=(()=>{let e;try{e=globalThis.navigator.languages||[globalThis.navigator.language]}catch{e=[]}return e.reduce((t,n)=>{const i=n.split("-")[0];return t.add(n),n!==i&&t.add(i),t},new Set)})();function Ha(){return On.size}const O0=new Map;function Va(e,t,n=[]){e=e.trim().replace(/\s+/g," "),t=t.trim();const i=`${e} | ${t}`;let o=j0.get(i);if(!o){if(On.size)for(const r of _a){const l=On.get(r);if(l&&(o=l[i]||l[e],o)){if(o=o.message,typeof o=="object"){let s=O0.get(r);s||(s=new Intl.PluralRules(r),O0.set(r,s));const a=o;o=d=>d===0&&a.zero||a[s.select(d)]||a.other||""}break}}o||o||(o=e,(On.size||Ma)&&vo&&console.warn(`Missing translation: "${e}"${t?` [${t}]`:""}`)),j0.set(i,o)}return typeof o=="function"?o(n[0]):o}var Ta=`:host{position:relative;--header-inner-max-width: 100%;--header-inner-padding: 0 24px;--search-display: block}@media screen and (max-width: 1200px){:host{--search-display: none}}.TDesign-header-notice{width:100%;height:32px;padding:8px 24px;box-sizing:border-box;display:flex;align-items:center;justify-content:center;position:relative}.TDesign-header-notice.primary{background-color:var(--brand-main)}.TDesign-header-notice__content{cursor:pointer;color:#ffffffe6;transition:all .2s}.TDesign-header-notice__content:hover{color:#fff}.TDesign-header-notice__close{display:inline-flex;align-items:center;position:absolute;right:24px;top:8px;cursor:pointer;transition:all .2s;color:#ffffffe6}.TDesign-header-notice__close:hover{color:#fff}.TDesign-header-notice__close svg{width:16px;height:16px}.TDesign-header{height:var(--header-height);background-color:var(--bg-color-container);color:var(--text-secondary);position:relative;z-index:1400;box-shadow:var(--header-box-shadow)}.TDesign-header-inner{padding:var(--header-inner-padding);height:100%;display:flex;justify-content:space-between;align-items:center;box-sizing:border-box;max-width:var(--header-inner-max-width);margin:auto;transition:all .25s var(--anim-time-fn-easing)}.TDesign-header-left{display:flex;align-items:center}.TDesign-header .slot-search{display:var(--search-display)}.TDesign-header-nav{display:flex;align-items:center;justify-content:flex-start;column-gap:8px}.TDesign-header-nav__link{cursor:pointer;padding:4px 16px;box-sizing:border-box;height:32px;line-height:24px;color:var(--text-primary);text-decoration:none;border-radius:var(--border-radius);transition:all .1s;display:inline-block;vertical-align:middle;word-break:keep-all;flex-shrink:0}.TDesign-header-nav__link:hover{background:var(--bg-color-container-hover)}.TDesign-header-nav__link:hover .icon svg path{d:path("M3.75 10.2002L7.99274 5.7998L12.2361 10.0425")}.TDesign-header-nav__link.active{color:var(--text-primary);background:var(--bg-color-container-select)}.TDesign-header-nav__link .icon{width:16px;height:16px;display:inline-block;vertical-align:middle;margin-top:-4px;margin-left:4px}.TDesign-header-nav__link .icon svg path{transition:d .2s;stroke:currentColor}.TDesign-header-nav__git,.TDesign-header-nav__translate{display:inline-flex;color:var(--text-primary);border-radius:var(--border-radius);transition:all .2s linear;width:32px;height:32px;align-items:center;justify-content:center;cursor:pointer}.TDesign-header-nav__git:hover,.TDesign-header-nav__translate:hover{background:var(--bg-color-container-hover)}.TDesign-header-nav__git-icon,.TDesign-header-nav__translate-icon{width:24px;height:24px;display:inline-block}.TDesign-header-nav td-theme-tabs{margin-left:8px}
`,ka=`@media screen and (max-width: 960px){.TDesign-base-components-links{display:none}}.TDesign-base-components-links{display:flex;flex-direction:column;padding:16px;width:832px;box-sizing:border-box;row-gap:16px}.TDesign-base-components-links__web,.TDesign-base-components-links__mobile{display:flex;flex-direction:column;row-gap:8px}.TDesign-base-components-links__list{display:flex;flex-wrap:wrap;gap:4px}.TDesign-base-components-links .title{color:var(--text-placeholder);margin:0 8px;font-size:14px;line-height:22px}.TDesign-base-components-links .link{border-radius:6px;transition:all .2s linear;color:var(--text-secondary);text-decoration:none;padding:8px;display:inline-flex;align-items:center;width:264px;box-sizing:border-box}.TDesign-base-components-links .link:not(.disabled):hover{color:var(--text-primary);background:var(--bg-color-container-hover)}.TDesign-base-components-links .link .details{display:flex;flex-direction:column}.TDesign-base-components-links .link .name{font-size:14px;line-height:24px;height:24px}.TDesign-base-components-links .link .version{font-size:14px;line-height:22px;color:var(--text-placeholder)}.TDesign-base-components-links .link .icon{max-width:40px;max-height:40px;margin-right:8px}.TDesign-base-components-links .link.active{color:var(--text-primary);background:var(--bg-color-container-select)}.TDesign-base-components-links .link.disabled{cursor:no-drop}.TDesign-base-components-links .link .disable-tag,.TDesign-base-components-links .link .alpha-tag,.TDesign-base-components-links .link .beta-tag,.TDesign-base-components-links .link .rc-tag,.TDesign-base-components-links .link .stable-tag{font-size:12px;border-radius:var(--border-radius);padding:2px 4px;margin-left:4px;vertical-align:bottom}.TDesign-base-components-links .link .disable-tag{color:var(--text-secondary);background:var(--bg-color-tag)}.TDesign-base-components-links .link .alpha-tag{color:var(--brand-main);background:var(--brand-main-light);font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace}.TDesign-base-components-links .link .beta-tag,.TDesign-base-components-links .link .rc-tag{color:var(--success-main);background:var(--success-main-light);font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace}.TDesign-base-components-links .link .stable-tag{color:#029cd4;background:rgba(2,156,212,.1);font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace}
`,Za=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" clip-rule="evenodd"
    d="M12 2.23999C6.475 2.23999 2 6.71499 2 12.24C2 16.665 4.8625 20.4025 8.8375 21.7275C9.3375 21.815 9.525 21.515 9.525 21.2525C9.525 21.015 9.5125 20.2275 9.5125 19.39C7 19.8525 6.35 18.7775 6.15 18.215C6.0375 17.9275 5.55 17.04 5.125 16.8025C4.775 16.615 4.275 16.1525 5.1125 16.14C5.9 16.1275 6.4625 16.865 6.65 17.165C7.55 18.6775 8.9875 18.2525 9.5625 17.99C9.65 17.34 9.9125 16.9025 10.2 16.6525C7.975 16.4025 5.65 15.54 5.65 11.715C5.65 10.6275 6.0375 9.72749 6.675 9.02749C6.575 8.77749 6.225 7.75249 6.775 6.37749C6.775 6.37749 7.6125 6.11499 9.525 7.40249C10.325 7.17749 11.175 7.06499 12.025 7.06499C12.875 7.06499 13.725 7.17749 14.525 7.40249C16.4375 6.10249 17.275 6.37749 17.275 6.37749C17.825 7.75249 17.475 8.77749 17.375 9.02749C18.0125 9.72749 18.4 10.615 18.4 11.715C18.4 15.5525 16.0625 16.4025 13.8375 16.6525C14.2 16.965 14.5125 17.565 14.5125 18.5025C14.5125 19.84 14.5 20.915 14.5 21.2525C14.5 21.515 14.6875 21.8275 15.1875 21.7275C17.1727 21.0573 18.8977 19.7815 20.1198 18.0795C21.3419 16.3776 21.9995 14.3352 22 12.24C22 6.71499 17.525 2.23999 12 2.23999Z"
    fill="currentColor" />
</svg>`,q5=`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.75 5.7998L7.99274 10.0425L12.2361 5.79921" stroke="currentColor" />
</svg>
`,Da=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 5C2 3.34315 3.34315 2 5 2H7C8.65685 2 10 3.34315 10 5V11H8V8.5H4V11H2V5ZM4 6.5H8V5C8 4.44772 7.55228 4 7 4H5C4.44772 4 4 4.44772 4 5V6.5ZM12 3.5H18C19.6569 3.5 21 4.84315 21 6.5V9H19V6.5C19 5.94772 18.5523 5.5 18 5.5H12V3.5ZM18 11.5V13H22V15H20.9381C20.7182 16.7638 19.9241 18.3492 18.7488 19.5634C19.4441 19.845 20.2041 20 21 20H22V22H21C19.5425 22 18.1765 21.6102 17.0001 20.9297C15.8234 21.6104 14.4572 22 13 22H12V20H13C13.7962 20 14.5562 19.8449 15.2514 19.5633C14.6487 18.9407 14.1463 18.2205 13.7704 17.4291L13.3413 16.5258L15.1478 15.6676L15.5769 16.5709C15.9219 17.2971 16.4081 17.9427 16.9999 18.4723C17.9921 17.5843 18.687 16.371 18.917 15H12V13H16V11.5H18ZM6 13V19C6 19.5523 6.44772 20 7 20H9.5V22H7C5.34315 22 4 20.6569 4 19V13H6Z" fill="currentColor"/>
</svg>
`;function W5(e){if(!e)return;function t(){requestAnimationFrame(()=>{if(!e||!e.shadowRoot||e.patchDom)return;const n=document.createElement("div");n.setAttribute("slot","__render_content__"),n.innerHTML=e.shadowRoot.innerHTML,e.appendChild(n)})}return window.addEventListener("load",t),()=>window.removeEventListener("load",t)}const c2={get:(e,t)=>t||{},set:(e,t)=>t,connect:(e,t)=>{const n=()=>{const i={};if(e.platform==="mobile"){const o=/\/components\//.test(location.pathname);window.innerWidth<960?i.paddingRight="0px":i.paddingRight=o?"400px":""}e.mobileBodyStyle=i};return n(),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}}};function ye(){return location.host.includes("oa.com")}function K5(e=()=>{}){const t=document.documentElement,n={attributes:!0},i=r=>{for(const l of r)if(l.attributeName==="theme-mode"){const s=l.target.getAttribute("theme-mode")||"light";s&&e(s)}},o=new MutationObserver(i);return o.observe(t,n),o}function Xe(){return/-en$/.test(location.pathname)?"en":"zh"}var Y5=`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M16 17.8385L22.1518 23.9903L23.9903 22.1518L17.8385 16L23.9903 9.84817L22.1518 8.0097L16 14.1615L9.84812 8.00964L8.00964 9.84812L14.1615 16L8.00964 22.1518L9.84812 23.9903L16 17.8385Z"
    fill="currentColor" />
</svg>`,at="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTI0LjAxMzMgNS4wNjY0MUwxOS45ODMzIDEyLjA0NjVMMTUuOTUzNSA1LjA2NjQxSDIuNTMzMkwxOS45ODM1IDM1LjI5MTVMMzcuNDMzNyA1LjA2NjQxSDI0LjAxMzNaIiBmaWxsPSIjNDJCOTgzIi8+CjxwYXRoIGQ9Ik0yNC4wMTM3IDUuMDY2NDFMMTkuOTgzNyAxMi4wNDY1TDE1Ljk1MzggNS4wNjY0MUg5LjUxMzY3TDE5Ljk4MzggMjMuMjAxMUwzMC40NTM5IDUuMDY2NDFIMjQuMDEzN1oiIGZpbGw9IiMzNTQ5NUUiLz4KPC9zdmc+Cg==",Kn="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0yOC4xMTc1IDUuOTE4OTVDMjguNTIxIDYuMTUxOTIgMjguOTAxOCA2LjY1MjE3IDI5LjEwOTIgNy42MjE2QzI5LjMxNjUgOC41OTA4NyAyOS4zMTYgOS44OTcwNiAyOS4wNjIxIDExLjQ4MThDMjguOTgzMSAxMS45NzQ5IDI4Ljg4MDUgMTIuNDg4OCAyOC43NTQ4IDEzLjAyMDVDMjcuMzk1MSAxMi43Mjk1IDI1LjkzNCAxMi41MDUyIDI0LjQwMDUgMTIuMzU2OUMyMy41MDUzIDExLjEwMyAyMi41ODA1IDkuOTQ5ODcgMjEuNjQ4NyA4LjkxNzc4QzIyLjA0NjIgOC41NDMwNyAyMi40NCA4LjE5NzMzIDIyLjgyNzYgNy44ODIzM0MyNC4wNzMxIDYuODcwMDcgMjUuMjA0IDYuMjE2NTQgMjYuMTQ3MSA1LjkxMTQ1QzI3LjA5MDMgNS42MDYzMSAyNy43MTM5IDUuNjg1OTcgMjguMTE3NSA1LjkxODk1Wk0xOC4zMjcyIDguOTE3NzhDMTcuOTI5NyA4LjU0MzA3IDE3LjUzNTkgOC4xOTczNCAxNy4xNDgzIDcuODgyMzVDMTUuOTAyOSA2Ljg3MDA5IDE0Ljc3MTkgNi4yMTY1NiAxMy44Mjg4IDUuOTExNDdDMTIuODg1NiA1LjYwNjMzIDEyLjI2MiA1LjY4NTk5IDExLjg1ODUgNS45MTg5NkMxMS40NTQ5IDYuMTUxOTQgMTEuMDc0MSA2LjY1MjE5IDEwLjg2NjggNy42MjE2MkMxMC42NTk1IDguNTkwODggMTAuNjYgOS44OTcwOCAxMC45MTM4IDExLjQ4MThDMTAuOTkyOSAxMS45NzUgMTEuMDk1NCAxMi40ODg4IDExLjIyMTEgMTMuMDIwNUMxMi41ODA5IDEyLjcyOTUgMTQuMDQxOSAxMi41MDUyIDE1LjU3NTUgMTIuMzU2OUMxNi40NzA2IDExLjEwMyAxNy4zOTU0IDkuOTQ5ODcgMTguMzI3MiA4LjkxNzc4Wk0xOS45ODggNy4yMTM0NUMxOS41Mzk0IDYuNzg5MzggMTkuMDkyMiA2LjM5NjEyIDE4LjY0OSA2LjAzNTkxQzE3LjI3MTYgNC45MTY0MiAxNS44ODE2IDQuMDc0NzkgMTQuNTYxMiAzLjY0NzYyQzEzLjI0MDkgMy4yMjA1IDExLjg1ODUgMy4xNzE0OCAxMC42Njg4IDMuODU4MzdDOS40NzkwNSA0LjU0NTI2IDguODMwMjcgNS43NjcwMSA4LjU0MDAzIDcuMTIzOTVDOC4yNDk3NiA4LjQ4MTA2IDguMjgzNjUgMTAuMTA1NiA4LjU2NDQ0IDExLjg1ODJDOC42NTQ3OSAxMi40MjIyIDguNzcxOCAxMy4wMDYgOC45MTQ3NSAxMy42MDY1QzguMzIzMjIgMTMuNzgzIDcuNzU5MDggMTMuOTczNiA3LjIyNTU0IDE0LjE3NzNDNS41NjczMiAxNC44MTA0IDQuMTQzNDcgMTUuNTkzNCAzLjExMzMyIDE2LjUyMzNDMi4wODMyOSAxNy40NTMxIDEuMzQ5NjEgMTguNjI1OSAxLjM0OTYxIDE5Ljk5OTZDMS4zNDk2MSAyMS4zNzM0IDIuMDgzMjkgMjIuNTQ2MSAzLjExMzMyIDIzLjQ3NkM0LjE0MzQ3IDI0LjQwNTkgNS41NjczMiAyNS4xODg4IDcuMjI1NTQgMjUuODIyQzcuNzU5MDkgMjYuMDI1NyA4LjMyMzI0IDI2LjIxNjMgOC45MTQ3OCAyNi4zOTI3QzguNzcxODIgMjYuOTkzMyA4LjY1NDgxIDI3LjU3NzIgOC41NjQ0NSAyOC4xNDExQzguMjgzNjYgMjkuODkzNyA4LjI0OTc2IDMxLjUxODMgOC41NDAwNCAzMi44NzU0QzguODMwMjggMzQuMjMyMyA5LjQ3OTA1IDM1LjQ1NDEgMTAuNjY4OCAzNi4xNDFDMTEuODU4NSAzNi44Mjc5IDEzLjI0MSAzNi43Nzg4IDE0LjU2MTIgMzYuMzUxN0MxNS44ODE2IDM1LjkyNDYgMTcuMjcxNiAzNS4wODI5IDE4LjY0OSAzMy45NjM0QzE5LjA5MjIgMzMuNjAzMiAxOS41Mzk0IDMzLjIxIDE5Ljk4OCAzMi43ODU5QzIwLjQzNjUgMzMuMjEgMjAuODgzNyAzMy42MDMyIDIxLjMyNjkgMzMuOTYzNUMyMi43MDQzIDM1LjA4MjkgMjQuMDk0MyAzNS45MjQ2IDI1LjQxNDcgMzYuMzUxN0MyNi43MzUgMzYuNzc4OSAyOC4xMTc0IDM2LjgyNzkgMjkuMzA3MSAzNi4xNDFDMzAuNDk2OSAzNS40NTQxIDMxLjE0NTYgMzQuMjMyNCAzMS40MzU5IDMyLjg3NTRDMzEuNzI2MiAzMS41MTgzIDMxLjY5MjMgMjkuODkzNyAzMS40MTE1IDI4LjE0MTFDMzEuMzIxMSAyNy41NzcyIDMxLjIwNDEgMjYuOTkzMyAzMS4wNjExIDI2LjM5MjhDMzEuNjUyNyAyNi4yMTYzIDMyLjIxNjkgMjYuMDI1NyAzMi43NTA0IDI1LjgyMkMzNC40MDg3IDI1LjE4ODggMzUuODMyNSAyNC40MDU5IDM2Ljg2MjcgMjMuNDc2QzM3Ljg5MjcgMjIuNTQ2MSAzOC42MjY0IDIxLjM3MzQgMzguNjI2NCAxOS45OTk2QzM4LjYyNjQgMTguNjI1OSAzNy44OTI3IDE3LjQ1MzEgMzYuODYyNyAxNi41MjMzQzM1LjgzMjUgMTUuNTkzNCAzNC40MDg3IDE0LjgxMDQgMzIuNzUwNCAxNC4xNzczQzMyLjIxNjkgMTMuOTczNiAzMS42NTI3IDEzLjc4MyAzMS4wNjEyIDEzLjYwNjVDMzEuMjA0MSAxMy4wMDYgMzEuMzIxMSAxMi40MjIxIDMxLjQxMTUgMTEuODU4MkMzMS42OTIzIDEwLjEwNTYgMzEuNzI2MiA4LjQ4MTA0IDMxLjQzNTkgNy4xMjM5M0MzMS4xNDU3IDUuNzY2OTkgMzAuNDk2OSA0LjU0NTI0IDI5LjMwNzIgMy44NTgzNUMyOC4xMTc0IDMuMTcxNDcgMjYuNzM1IDMuMjIwNDkgMjUuNDE0NyAzLjY0NzZDMjQuMDk0MyA0LjA3NDc3IDIyLjcwNDMgNC45MTY0IDIxLjMyNjkgNi4wMzU4OUMyMC44ODM3IDYuMzk2MSAyMC40MzY1IDYuNzg5MzggMTkuOTg4IDcuMjEzNDVaTTI4LjEwMjcgMTUuMzE0NkMyNy40Njk1IDE1LjE4MjQgMjYuODA5NyAxNS4wNjQ5IDI2LjEyNjggMTQuOTYzN0MyNi4zNTA0IDE1LjMyNzcgMjYuNTcwOSAxNS42OTc5IDI2Ljc4NzkgMTYuMDczN0MyNy4wMDQ5IDE2LjQ0OTYgMjcuMjE1MiAxNi44MjU2IDI3LjQxODYgMTcuMjAxM0MyNy42NzI0IDE2LjU1OTIgMjcuOTAwNiAxNS45MjkxIDI4LjEwMjcgMTUuMzE0NlpNMjguODEzIDE5Ljk5OTdDMjkuNDUxNCAxOC41OTc0IDI5Ljk4NzYgMTcuMjIgMzAuNDE1NSAxNS44OTY5QzMwLjkzODggMTYuMDUzOCAzMS40MzUxIDE2LjIyMiAzMS45MDE3IDE2LjQwMDFDMzMuNDAxMSAxNi45NzI2IDM0LjUzMjYgMTcuNjI1MyAzNS4yNjgzIDE4LjI4OTVDMzYuMDA0MiAxOC45NTM4IDM2LjI0NyAxOS41MzM3IDM2LjI0NyAxOS45OTk2QzM2LjI0NyAyMC40NjU2IDM2LjAwNDIgMjEuMDQ1NSAzNS4yNjgzIDIxLjcwOThDMzQuNTMyNiAyMi4zNzQgMzMuNDAxMSAyMy4wMjY2IDMxLjkwMTcgMjMuNTk5MUMzMS40MzUxIDIzLjc3NzMgMzAuOTM4OCAyMy45NDU0IDMwLjQxNTUgMjQuMTAyNEMyOS45ODc2IDIyLjc3OTMgMjkuNDUxMyAyMS40MDE5IDI4LjgxMyAxOS45OTk3Wk0yNi4xODMgMTkuOTk5N0MyNS43NDMxIDE5LjA5NyAyNS4yNTc2IDE4LjE4MTkgMjQuNzI3MyAxNy4yNjM0QzI0LjE5NyAxNi4zNDQ5IDIzLjY0NzMgMTUuNDY2OSAyMy4wODU0IDE0LjYzNDZDMjIuMDgzNyAxNC41NjQxIDIxLjA0ODUgMTQuNTI3MSAxOS45ODggMTQuNTI3MUMxOC45Mjc0IDE0LjUyNzEgMTcuODkyMiAxNC41NjQxIDE2Ljg5MDUgMTQuNjM0NkMxNi4zMjg2IDE1LjQ2NjkgMTUuNzc4OSAxNi4zNDQ5IDE1LjI0ODYgMTcuMjYzNEMxNC43MTgzIDE4LjE4MTkgMTQuMjMyOCAxOS4wOTY5IDEzLjc5MjkgMTkuOTk5N0MxNC4yMzI4IDIwLjkwMjQgMTQuNzE4MyAyMS44MTc1IDE1LjI0ODYgMjIuNzM2QzE1Ljc3ODkgMjMuNjU0NCAxNi4zMjg2IDI0LjUzMjQgMTYuODkwNCAyNS4zNjQ3QzE3Ljg5MjEgMjUuNDM1MSAxOC45Mjc0IDI1LjQ3MjIgMTkuOTg4IDI1LjQ3MjJDMjEuMDQ4NSAyNS40NzIyIDIyLjA4MzggMjUuNDM1MSAyMy4wODU1IDI1LjM2NDdDMjMuNjQ3NCAyNC41MzI0IDI0LjE5NzEgMjMuNjU0NCAyNC43MjczIDIyLjczNTlDMjUuMjU3NiAyMS44MTc1IDI1Ljc0MzEgMjAuOTAyNCAyNi4xODMgMTkuOTk5N1pNMjYuMTI2OCAyNS4wMzU2QzI2LjM1MDQgMjQuNjcxNiAyNi41NzA5IDI0LjMwMTUgMjYuNzg3OSAyMy45MjU2QzI3LjAwNDkgMjMuNTQ5OCAyNy4yMTUyIDIzLjE3MzggMjcuNDE4NiAyMi43OTgxQzI3LjY3MjQgMjMuNDQwMSAyNy45MDA2IDI0LjA3MDIgMjguMTAyNyAyNC42ODQ3QzI3LjQ2OTUgMjQuODE2OSAyNi44MDk3IDI0LjkzNDMgMjYuMTI2OCAyNS4wMzU2Wk0yMS4yNzk4IDI3LjgzNEMyMC44NTI4IDI3Ljg0NTYgMjAuNDIyIDI3Ljg1MTUgMTkuOTg4IDI3Ljg1MTVDMTkuNTU0IDI3Ljg1MTUgMTkuMTIzMiAyNy44NDU2IDE4LjY5NjEgMjcuODM0QzE5LjEyNTIgMjguMzc0OCAxOS41NTY4IDI4Ljg4NzUgMTkuOTg4IDI5LjM2OThDMjAuNDE5MSAyOC44ODc1IDIwLjg1MDcgMjguMzc0OCAyMS4yNzk4IDI3LjgzNFpNMjEuNjQ4NyAzMS4wODE2QzIyLjU4MDUgMzAuMDQ5NSAyMy41MDUzIDI4Ljg5NjMgMjQuNDAwNSAyNy42NDI0QzI1LjkzNCAyNy40OTQxIDI3LjM5NTEgMjcuMjY5OCAyOC43NTQ4IDI2Ljk3ODhDMjguODgwNSAyNy41MTA1IDI4Ljk4MzEgMjguMDI0NCAyOS4wNjIxIDI4LjUxNzVDMjkuMzE2IDMwLjEwMjMgMjkuMzE2NSAzMS40MDg1IDI5LjEwOTEgMzIuMzc3N0MyOC45MDE4IDMzLjM0NzIgMjguNTIxIDMzLjg0NzQgMjguMTE3NSAzNC4wODA0QzI3LjcxMzkgMzQuMzEzNCAyNy4wOTAzIDM0LjM5MyAyNi4xNDcxIDM0LjA4NzlDMjUuMjA0IDMzLjc4MjggMjQuMDczMSAzMy4xMjkzIDIyLjgyNzYgMzIuMTE3QzIyLjQ0IDMxLjgwMiAyMi4wNDYyIDMxLjQ1NjMgMjEuNjQ4NyAzMS4wODE2Wk0xOC4zMjcyIDMxLjA4MTZDMTcuMzk1NCAzMC4wNDk1IDE2LjQ3MDYgMjguODk2MyAxNS41NzU0IDI3LjY0MjRDMTQuMDQxOSAyNy40OTQgMTIuNTgwOSAyNy4yNjk4IDExLjIyMTEgMjYuOTc4OEMxMS4wOTU0IDI3LjUxMDUgMTAuOTkyOSAyOC4wMjQ0IDEwLjkxMzkgMjguNTE3NUMxMC42NiAzMC4xMDIzIDEwLjY1OTUgMzEuNDA4NSAxMC44NjY4IDMyLjM3NzdDMTEuMDc0MSAzMy4zNDcyIDExLjQ1NDkgMzMuODQ3NCAxMS44NTg1IDM0LjA4MDRDMTIuMjYyIDM0LjMxMzQgMTIuODg1NiAzNC4zOTMgMTMuODI4OCAzNC4wODc5QzE0Ljc3MTkgMzMuNzgyOCAxNS45MDI5IDMzLjEyOTMgMTcuMTQ4MyAzMi4xMTdDMTcuNTM1OSAzMS44MDIgMTcuOTI5NyAzMS40NTYzIDE4LjMyNzIgMzEuMDgxNlpNMTEuODczMiAyNC42ODQ3QzEyLjUwNjQgMjQuODE2OSAxMy4xNjYyIDI0LjkzNDMgMTMuODQ5MSAyNS4wMzU2QzEzLjYyNTUgMjQuNjcxNiAxMy40MDUgMjQuMzAxNSAxMy4xODggMjMuOTI1NkMxMi45NzEgMjMuNTQ5OCAxMi43NjA3IDIzLjE3MzggMTIuNTU3MyAyMi43OTgxQzEyLjMwMzUgMjMuNDQwMSAxMi4wNzU0IDI0LjA3MDIgMTEuODczMiAyNC42ODQ3Wk0xMi41NTczIDE3LjIwMTJDMTIuNzYwNyAxNi44MjU2IDEyLjk3MSAxNi40NDk2IDEzLjE4OCAxNi4wNzM3QzEzLjQwNSAxNS42OTc4IDEzLjYyNTUgMTUuMzI3NyAxMy44NDkxIDE0Ljk2MzdDMTMuMTY2MiAxNS4wNjQ5IDEyLjUwNjQgMTUuMTgyNCAxMS44NzMyIDE1LjMxNDZDMTIuMDc1MyAxNS45MjkxIDEyLjMwMzUgMTYuNTU5MiAxMi41NTczIDE3LjIwMTJaTTExLjE2MjkgMTkuOTk5N0MxMC41MjQ2IDIxLjQwMTkgOS45ODgzMSAyMi43NzkzIDkuNTYwNDIgMjQuMTAyM0M5LjAzNzEzIDIzLjk0NTQgOC41NDA4MyAyMy43NzczIDguMDc0MjYgMjMuNTk5MUM2LjU3NDg4IDIzLjAyNjYgNS40NDM0MyAyMi4zNzQgNC43MDc2OCAyMS43MDk4QzMuOTcxOCAyMS4wNDU1IDMuNzI4OTggMjAuNDY1NiAzLjcyODk4IDE5Ljk5OTZDMy43Mjg5OCAxOS41MzM3IDMuOTcxOCAxOC45NTM4IDQuNzA3NjggMTguMjg5NUM1LjQ0MzQzIDE3LjYyNTMgNi41NzQ4OCAxNi45NzI2IDguMDc0MjYgMTYuNDAwMUM4LjU0MDgyIDE2LjIyMiA5LjAzNzExIDE2LjA1MzkgOS41NjAzOCAxNS44OTY5QzkuOTg4MjggMTcuMjIgMTAuNTI0NiAxOC41OTc0IDExLjE2MjkgMTkuOTk5N1pNMTguNjk2MiAxMi4xNjUzQzE5LjEyMzIgMTIuMTUzNiAxOS41NTQgMTIuMTQ3NyAxOS45ODggMTIuMTQ3N0MyMC40MjIgMTIuMTQ3NyAyMC44NTI3IDEyLjE1MzYgMjEuMjc5NyAxMi4xNjUyQzIwLjg1MDYgMTEuNjI0NSAyMC40MTkgMTEuMTExOSAxOS45ODggMTAuNjI5NUMxOS41NTY5IDExLjExMTkgMTkuMTI1MyAxMS42MjQ1IDE4LjY5NjIgMTIuMTY1M1pNMjMuMjM5MyAxOS45OTk3QzIzLjIzOTMgMjEuNzk1NiAyMS43ODM0IDIzLjI1MTUgMTkuOTg3NSAyMy4yNTE1QzE4LjE5MTYgMjMuMjUxNSAxNi43MzU3IDIxLjc5NTYgMTYuNzM1NyAxOS45OTk3QzE2LjczNTcgMTguMjAzOCAxOC4xOTE2IDE2Ljc0NzkgMTkuOTg3NSAxNi43NDc5QzIxLjc4MzQgMTYuNzQ3OSAyMy4yMzkzIDE4LjIwMzggMjMuMjM5MyAxOS45OTk3WiIgZmlsbD0iIzYxREFGQiIvPgo8L3N2Zz4K",Yn="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPG1hc2sgaWQ9Im1hc2swXzIyNTM5XzEzOTYzNyIgc3R5bGU9Im1hc2stdHlwZTphbHBoYSIgbWFza1VuaXRzPSJ1c2VyU3BhY2VPblVzZSIgeD0iMCIgeT0iMCIgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSJ3aGl0ZSIvPgo8L21hc2s+CjxnIG1hc2s9InVybCgjbWFzazBfMjI1MzlfMTM5NjM3KSI+CjxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMzIuNDk3MiA0Ljk1NDM0QzM1LjE0ODYgNi4yNTMwNiAzNi43OTUxIDguODE0NzUgMzcuMzc3NyAxMi4xOTM0QzM3Ljk0MzIgMTUuNDczIDM2LjQ3ODIgMTguMDg5NyAzNC44MTU3IDE5LjgxNzFDMzMuMTkwNyAyMS41MDU1IDMxLjE0MDEgMjIuNjE4OCAyOS43MDQgMjMuMDUwNkMyOC4zODE4IDIzLjQ0ODIgMjYuOTg3NiAyMi42OTg3IDI2LjU5IDIxLjM3NjRDMjYuMTkyNCAyMC4wNTQyIDI2Ljk0MiAxOC42NiAyOC4yNjQyIDE4LjI2MjRDMjguODk2NyAxOC4wNzIyIDMwLjE5NzEgMTcuNDA1NiAzMS4yMTMxIDE2LjM0OTlDMzIuMTkxNSAxNS4zMzMzIDMyLjY1NzIgMTQuMjQxOSAzMi40NTA0IDEzLjA0M0MzMi4wNjc3IDEwLjgyMzUgMzEuMTYyOSA5Ljg2ODM5IDMwLjI5NzggOS40NDQ2QzI5LjMyOTggOC45NzA0NyAyNy44MTUxIDguODY4MTEgMjUuNzYyMiA5LjUzOTY3QzIzLjIwMjkgMTAuMzc2OSAyMi43MjYyIDEyLjEwNzQgMjIuNjU4NSAxMi43MjYzVjI4LjMyNzFMMjIuNjI0NiAyOC41MzA4QzIyLjMwOTYgMzAuNDI1NiAyMS4wMDYyIDMyLjc5MDUgMTguOTE0NSAzNC40MzUzQzE2LjY4ODMgMzYuMTg1NyAxMy41Mjg5IDM3LjE0NjEgOS43NTU0NCAzNS45NjAzQzUuOTY0IDM0Ljc2ODkgMy45ODAwNyAzMi4xNjY2IDMuMjM0NzggMjkuNDQwOEMyLjUzNzEzIDI2Ljg4OTIgMi45MjU1NyAyNC4yNjkxIDMuNjg0MDcgMjIuNjI0MUM0LjE0MzYzIDIxLjYyNzQgNS4xMzcxNiAyMC4zMzQxIDYuMzk4NDggMTkuMjcxOEM3LjY3NDk0IDE4LjE5NjggOS41MzY2OCAxNy4wOTY4IDExLjc4NzYgMTcuMDEwMUMxMy4xNjczIDE2Ljk1NjkgMTQuMzI4OSAxOC4wMzIyIDE0LjM4MjEgMTkuNDExOUMxNC40MzUzIDIwLjc5MTYgMTMuMzU5OSAyMS45NTMyIDExLjk4MDIgMjIuMDA2M0MxMS4yNTIzIDIyLjAzNDQgMTAuNDI1MSAyMi40MTc3IDkuNjE5MzUgMjMuMDk2MkM4Ljc5ODQ5IDIzLjc4NzYgOC4zMTY2NCAyNC41MTgyIDguMjI0NjQgMjQuNzE3N0M3Ljk0MTI2IDI1LjMzMjMgNy42ODE0NCAyNi43NDU4IDguMDU3NzYgMjguMTIyMUM4LjM4NjQ0IDI5LjMyNDMgOS4xOTg3MSAzMC41NDQzIDExLjI1NDMgMzEuMTkwM0MxMy4zMjc5IDMxLjg0MTkgMTQuNzg4NSAzMS4zMTkgMTUuODIzOSAzMC41MDQ4QzE2Ljg5OTEgMjkuNjU5NCAxNy40OTI4IDI4LjUwOSAxNy42NTg1IDI3Ljg2NzdWMTIuNTI5M0wxNy42NjQ4IDEyLjQ0MDdDMTcuODA5NyAxMC40MDQyIDE5LjE0NzYgNi40NDI4MSAyNC4yMDc2IDQuNzg3NUMyNi45ODE0IDMuODgwMSAyOS45NDg2IDMuNzA1OTYgMzIuNDk3MiA0Ljk1NDM0WiIgZmlsbD0iIzAwQTg3MCIvPgo8L2c+Cjwvc3ZnPgo=",G5="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTIzLjE4NjEgMy4zMzMwMUw2LjUgMTkuOTk5N0wxMS42Mzg5IDI1LjEzODZMMzMuNDIyMiAzLjM0OTY3SDIzLjIwNDJMMjMuMTg2MSAzLjMzMzAxWk0yMy4yMDU2IDE4LjcxMDhMMTQuMjE4MSAyNy42Nzg4TDIzLjIwNDIgMzYuNjY1SDMzLjQ0NDRMMjQuNDcyMiAyNy42ODE2TDMzLjQ0NDQgMTguNzA5NEwyMy4yMDU2IDE4LjcxMDhaIiBmaWxsPSIjNDREMUZEIi8+Cjwvc3ZnPgo=";function Z1(e){return Xe()==="en"?`${e}-en`:e}Z1("/design"),Z1("/source"),Z1("/about");Z1("/vue/overview"),Z1("/vue-next/overview"),Z1("/react/overview"),Z1("/mobile-vue/overview"),Z1("/mobile-react/overview"),Z1("/flutter/overview"),Z1("/miniprogram/overview"),Z1("/qq-miniprogram/overview");const Ea=()=>{const e=ye(),n=Xe()==="en",i=[{name:n?"Design":"\u8BBE\u8BA1",path:Z1("/design"),type:"main",target:"_self"},{name:n?"Components":"\u57FA\u7840\u7EC4\u4EF6",path:Z1("/vue/overview"),type:"base",target:"_self"},e?{name:n?"Industry component":"\u884C\u4E1A\u7EC4\u4EF6",path:"/trade",type:"main",target:"_self"}:null,{name:n?"Templates":"\u9875\u9762\u6A21\u677F",path:"https://tdesign.tencent.com/starter/",type:"main",target:"_self"},{name:n?"Resources":"\u8D44\u6E90",path:Z1("/source"),type:"main",target:"_self"},{name:n?"About":"\u5173\u4E8E",path:Z1("/about/introduce"),type:"main",target:"_self"}].filter(l=>l),o={web:{name:n?"Web PC":"Web \u684C\u9762\u7AEF",links:[{name:"Vue",icon:at,path:Z1("/vue/overview"),npm:"tdesign-vue",status:1},{name:"Vue Next",icon:at,path:Z1("/vue-next/overview"),npm:"tdesign-vue-next",status:1},{name:"React",icon:Kn,path:Z1("/react/overview"),npm:"tdesign-react",status:1}]},mobile:{name:n?"Mobile":"Mobile \u79FB\u52A8\u7AEF",links:[{name:"Vue Next",icon:at,path:Z1("/mobile-vue/overview"),npm:"tdesign-mobile-vue",status:1},{name:"React",icon:Kn,path:Z1("/mobile-react/overview"),npm:"tdesign-mobile-react",status:2},{name:"Flutter",icon:G5,path:Z1("/flutter/overview"),npm:"tdesign-flutter",status:2},{name:n?"WeChat-Miniprogram":"\u5FAE\u4FE1\u5C0F\u7A0B\u5E8F",icon:Yn,path:Z1("/miniprogram/overview"),npm:"tdesign-miniprogram",status:1},{name:n?"QQ-Miniprogram":"QQ \u5C0F\u7A0B\u5E8F",icon:Yn,path:Z1("/qq-miniprogram/overview"),npm:"tdesign-qq-miniprogram",status:2}]}};return{headerList:i,baseComponentsLinks:o,baseComponentPrefix:["vue","react","mobile-vue","mobile-react","vue-next","flutter","miniprogram"]}},Na=Ea(),{headerList:z0,baseComponentsLinks:Re,baseComponentPrefix:Aa}=Na,Sa=[...Re.web.links.filter(e=>e.status).map(e=>e.npm),...Re.mobile.links.filter(e=>e.status).map(e=>e.npm)];function Gn(e,t,n){t.preventDefault(),n.status&&(location.href=n.path)}function Xn(e){if(e===0)return K`<span class="disable-tag">待上线</span>`;if(e===1)return K`<span class="stable-tag">Stable</span>`;if(e===2)return K`<span class="alpha-tag">Alpha</span>`;if(e===3)return K`<span class="beta-tag">Beta</span>`;if(e===4)return K`<span class="rc-tag">Rc</span>`}function yo(e){return/^https?:/.test(e)?location.href.includes(e):location.pathname.includes(e)}function Ia(e){if(location.host!=="tdesign.tencent.com"&&!localStorage.getItem("TDesign_notice"))return K``;const{notice:t}=e;let n=location.pathname.split("/")[1]||"site";["design","source","about"].includes(n)&&(n="site");let i=t[n];if(i!=null&&i.title||(i=t.all),!(i!=null&&i.title))return K``;if(localStorage.getItem("TDesign_notice_closed")===(i==null?void 0:i.title))return K``;const o=(s="96px")=>{const a=document.querySelector("td-doc-aside");a&&(a.style.setProperty("--aside-top",s),a.shadowRoot.querySelector(".TDesign-doc-aside").style.top=s)},r=()=>{!e.shadowRoot||(e.shadowRoot.querySelector(".TDesign-header-notice").style.display="none",o("64px"),localStorage.setItem("TDesign_notice_closed",i==null?void 0:i.title))},l=()=>{!(i!=null&&i.actionUrl)||(location.href=i.actionUrl)};return o(),K`
    <div class="TDesign-header-notice ${i.type}">
      <div class="TDesign-header-notice__content" onclick="${l}">${i.title}</div>
      ${i.closeable&&K`<i class="TDesign-header-notice__close" innerHTML="${Y5}" onclick="${r}"></i>`}
    </div>
  `}function ja(e,t){return K`
    <td-doc-popup placement="bottom" portalStyle="${ka}">
      ${t}
      <div slot="content" class="TDesign-base-components-links">
        <div class="TDesign-base-components-links__web">
          <p class="title">${Re.web.name}</p>
          <div class="TDesign-base-components-links__list">
            ${Re.web.links.map(n=>K`
                <a
                  href="${n.path}"
                  class="link ${yo(n.path)?"active":""} ${n.status?"":"disabled"}"
                  onclick=${(i,o)=>Gn(i,o,n)}
                >
                  <img class="icon" src="${n.icon}" />
                  <div class="details">
                    <span class="name"> ${n.name} ${Xn(n.status)} </span>
                    <span class="version">
                      ${n.status?`Version\uFF1A${e.npmVersions[n.npm]}`:"\u656C\u8BF7\u671F\u5F85"}
                    </span>
                  </div>
                </a>
              `)}
          </div>
        </div>

        <div class="TDesign-base-components-links__mobile">
          <p class="title">${Re.mobile.name}</p>
          <div class="TDesign-base-components-links__list">
            ${Re.mobile.links.map(n=>K`
                <a
                  href="${n.path}"
                  class="link ${yo(n.path)?"active":""} ${n.status?"":"disabled"}"
                  onclick=${(i,o)=>Gn(i,o,n)}
                >
                  <img class="icon" src="${n.icon}" />
                  <div class="details">
                    <span class="name"> ${n.name} ${Xn(n.status)} </span>
                    <span class="version">
                      ${n.status?`Version\uFF1A${e.npmVersions[n.npm]||"alpha"}`:"\u656C\u8BF7\u671F\u5F85"}
                    </span>
                  </div>
                </a>
              `)}
          </div>
        </div>
      </div>
    </td-doc-popup>
  `}function X5(e,t){if(/starter/.test(location.pathname)){const[,i]=location.pathname.match(/starter\/docs\/([\w-]+)/)||[];return i?`https://github.com/Tencent/tdesign-${i}-starter`:"https://github.com/Tencent/?q=tdesign+starter"}return t==="site"?"https://github.com/Tencent/tdesign":e==="mobile"?`https://github.com/Tencent/tdesign-${e}-${t}`:`https://github.com/Tencent/tdesign-${t}`}function Oa(e,t,n,i){const o=K`
    <a class="TDesign-header-nav__git" href="${X5(n,i)}" id="${n}" target="_blank">
      <span class="TDesign-header-nav__git-icon" innerHTML="${Za}"></span>
    </a>
  `;function r(){const d=Xe()==="zh"?"en":"zh";document.dispatchEvent(new CustomEvent("tdesign_site_lang",{detail:d}))}const l=e.enabledLocale?K`
        <div class="TDesign-header-nav__translate" onclick="${r}">
          <span class="TDesign-header-nav__translate-icon" innerHTML="${Da}"></span>
        </div>
      `:K``,s=()=>{const[,a]=location.pathname.split("/");return Aa.includes(a)};return t.map(a=>{if(a.type==="base"){const d=K`
          <span class="TDesign-header-nav__link ${s()?"active":""}">
            ${a.name} <i class="icon" innerHTML="${q5}"></i>
          </span>
        `;return ja(e,d)}return K`
        <a
          class="TDesign-header-nav__link ${yo(a.path)?"active":""}"
          href="${a.path}"
          target="${a.target}"
          >${a.name}</a
        >
      `}).concat(l).concat(o)}V1({tag:"td-header",platform:"web",framework:"vue",disabledTheme:!1,enabledLocale:!0,notice:{get:(e,t)=>t||{},set:(e,t)=>t,connect:e=>{fetch("https://tdesign-site-services.surge.sh/notice.json").then(t=>t.json()).then(t=>{e.notice=t}).catch(console.error)}},npmVersions:{get:(e,t)=>t||{},set:(e,t)=>t,connect:e=>{Sa.forEach(t=>{fetch(`https://mirrors.tencent.com/npm/${t}`).then(n=>n.json()).then(n=>{var i;const o=(i=n==null?void 0:n["dist-tags"])==null?void 0:i.latest;e.npmVersions={...e.npmVersions,[t]:o}}).catch(console.error)})}},collapseMenu:{get:(e,t)=>t||!1,set:(e,t)=>t,connect:(e,t)=>{function n(){const i=window.innerWidth<960;Object.assign(e,{[t]:i})}return requestAnimationFrame(()=>n()),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}}},render:e=>{const{platform:t,framework:n,disabledTheme:i,collapseMenu:o}=e;return K`
      ${Ia(e)}
      <header class="TDesign-header">
        <div class="TDesign-header-inner">
          <div class="TDesign-header-left">
            <td-logo></td-logo>
          </div>
          <div class="TDesign-header-nav">
            ${o?K`
                  <td-collapse-menu
                    disabledTheme="${i}"
                    platform="${t}"
                    framework="${n}"
                    headerList="${z0}"
                    baseComponentsLinks="${Re}"
                  >
                  </td-collapse-menu>
                `:K`
                  <div class="slot-search">
                    <slot name="search"></slot>
                  </div>
                  ${Oa(e,z0,t,n)}
                  ${i?K``:K`<td-theme-tabs></td-theme-tabs>`}
                `}
          </div>
        </div>
      </header>
    `.css`${Ta}`}});var za=`.TDesign-collapse-menu{position:relative;display:flex;align-items:center;height:var(--header-height)}.TDesign-collapse-menu .collapse-icon{width:24px;height:24px;cursor:pointer}.TDesign-collapse-menu .collapse-icon svg{color:var(--text-primary)}
`,Ba=`.TDesign-collapse-menu__list{min-height:32px;-webkit-backdrop-filter:blur(6px);backdrop-filter:blur(6px);display:flex;padding:8px;width:254px;box-sizing:border-box;flex-direction:column;transition:all .2s var(--anim-time-fn-easing)}.TDesign-collapse-menu__list .link+.link{margin-top:4px}.TDesign-collapse-menu__list .link{display:flex;align-items:center;height:32px;box-sizing:border-box;padding:8px;text-decoration:none;color:var(--text-secondary);font-size:14px;border-radius:3px;transition:all .2s linear}.TDesign-collapse-menu__list .link:hover{color:var(--text-primary);background:var(--bg-color-container-hover)}.TDesign-collapse-menu__list .link .icon{max-width:16px;max-height:16px;margin-right:8px}.TDesign-collapse-menu__list .link svg{width:16px;height:16px}.TDesign-collapse-menu__list .link.active{color:var(--text-primary);background:var(--bg-color-container-select)}.TDesign-collapse-menu__list .link.disabled{cursor:no-drop}.TDesign-collapse-menu__list .link .disable-tag,.TDesign-collapse-menu__list .link .alpha-tag,.TDesign-collapse-menu__list .link .beta-tag,.TDesign-collapse-menu__list .link .stable-tag{font-size:12px;border-radius:var(--border-radius);padding:2px 4px;margin-left:8px}.TDesign-collapse-menu__list .link .disable-tag{color:var(--text-secondary);background:var(--bg-color-tag)}.TDesign-collapse-menu__list .link .alpha-tag{color:var(--brand-main);background:var(--brand-main-light);font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace}.TDesign-collapse-menu__list .link .beta-tag{color:var(--success-main);background:var(--success-main-light);font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace}.TDesign-collapse-menu__list .link .stable-tag{color:#029cd4;background:rgba(2,156,212,.1);font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace}.TDesign-collapse-menu__list .divider{width:100%;height:1px;margin:8px 0;background-color:var(--component-stroke)}.TDesign-collapse-menu__list .divider+.title{margin-top:0}.TDesign-collapse-menu__list .title{font-size:12px;margin:8px 8px 4px;color:var(--text-placeholder)}.TDesign-collapse-menu__list td-theme-tabs{margin-top:4px}
`,Fa=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M21.0001 4.50004L7.50007 4.5L7.50006 6L21.0001 6.00004V4.50004Z" fill="currentColor" />
  <path d="M5.25007 4.5L3.00098 4.5L3.00098 6L5.25007 6V4.5Z" fill="currentColor" />
  <path d="M7.50007 11.2501L21.0001 11.2501V12.7501L7.50006 12.7501L7.50007 11.2501Z" fill="currentColor" />
  <path d="M3.00098 11.2501H5.25007V12.7501H3.00098L3.00098 11.2501Z" fill="currentColor" />
  <path d="M7.50007 18L21.0001 18V19.5L7.50006 19.5L7.50007 18Z" fill="currentColor" />
  <path d="M3.00098 18H5.25007V19.5H3.00098L3.00098 18Z" fill="currentColor" />
</svg>`;function $a({headerList:e,baseComponentsLinks:t,platform:n,framework:i}){const o=K`
    <a class="link" href="${X5(n,i)}" id="${n}" target="_blank">
      <span>${ye()?"\u5DE5\u8702":"Github"}</span>
    </a>
  `,r=a=>location.pathname.includes(a);let l=[K`<div class="divider"></div>`];const s=e.map(a=>{if(a.type==="base"){const d=t.web.links.map(u=>K`
        <a
          href="${u.path}"
          class="link ${r(u.path)?"active":""}"
          onclick=${(h,C)=>Gn(h,C,u)}
        >
          <img class="icon" src="${u.icon}" />
          ${u.name}
          ${Xn(u.status)}
        </a>
      `);l.push(K`<div class="title">Web 桌面端组件</div>`),l.push(...d);const c=t.mobile.links.map(u=>K`
        <a
          href="${u.path}"
          class="link ${r(u.path)?"active":""}"
          onclick=${(h,C)=>Gn(h,C,u)}
        >
          <img class="icon" src="${u.icon}" />
          ${u.name}
          ${Xn(u.status)}
        </a>
      `);return l.push(K`<div class="title">Mobile 移动端组件</div>`),l.push(...c),l.push(K`<div class="divider"></div>`),K``}return K`<a class="link ${r(a.path)?"active":""}" href="${a.path}">${a.name}</a>`}).concat(o);return s.splice(1,0,...l),s}V1({tag:"td-collapse-menu",headerList:{get:(e,t)=>t||[],set:(e,t)=>t},baseComponentsLinks:{get:(e,t)=>t||[],set:(e,t)=>t},platform:"web",framework:"vue",disabledTheme:!1,render:e=>K`
    <div class="TDesign-collapse-menu">
      <td-doc-popup portalStyle="${Ba}" trigger-type="click">
        <div class="collapse-icon" innerHTML="${Fa}"></div>
        <div slot="content" class="TDesign-collapse-menu__list">
          ${$a(e)}
          ${e.disabledTheme?K``:K`<td-theme-tabs></td-theme-tabs>`}
        </div>
      </td-doc-popup>
    </div>
  `.css`${za}`});var Ra=`<svg width="122" height="32" viewBox="0 0 122 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_16025_26913)">
    <path
      d="M42.1876 8.78706H37.2302L34.1354 26.2045H30.52L33.5916 8.78706H28.6111L29.1491 5.79641H42.7256L42.1876 8.78706Z"
      fill="currentColor" />
    <path
      d="M58.4307 10.9505C58.4187 12.1155 58.3026 13.277 58.0837 14.4213L57.5052 17.8458C56.2789 24.8278 54.3815 26.2045 48.9787 26.2045H40.6777L44.2642 5.80798H51.3504C56.4929 5.80798 58.4307 7.09795 58.4307 10.9505ZM54.8211 11.4943C54.8211 9.18041 53.7163 8.79863 50.8066 8.79863H47.3358L44.8253 23.2139H48.2498C52.299 23.2139 53.1262 22.4041 53.9072 17.8516L54.4856 14.4271C54.6807 13.4608 54.793 12.4796 54.8211 11.4943Z"
      fill="currentColor" />
    <path
      d="M72.2269 13.756C72.2256 14.1538 72.1889 14.5507 72.117 14.9419L71.7352 17.0706C71.3071 19.4655 70.4163 20.3042 68.1777 20.3042H62.26L62.1212 21.1372C62.047 21.5188 62.0025 21.9056 61.9881 22.2941C61.9881 23.237 62.474 23.4511 64.0359 23.4511H69.4503L68.3454 26.1756H63.388C59.9172 26.1756 58.6504 25.2848 58.6504 23.104C58.664 22.4716 58.7259 21.8412 58.8355 21.2182L59.8883 15.1791C60.5362 11.4653 62.098 10.7076 66.0547 10.7076H67.8884C70.7171 10.7365 72.2269 11.4943 72.2269 13.756ZM68.8602 14.242C68.8602 13.5941 68.4553 13.4321 67.2174 13.4321H65.3027C64.0648 13.4321 63.469 13.5941 63.174 15.208L62.7459 17.6896H67.3215C67.4654 17.7123 67.6125 17.7034 67.7526 17.6634C67.8927 17.6234 68.0223 17.5533 68.1325 17.458C68.2427 17.3627 68.3307 17.2445 68.3905 17.1116C68.4502 16.9788 68.4803 16.8345 68.4785 16.6888L68.7735 14.9535C68.8153 14.7185 68.8386 14.4806 68.8429 14.242H68.8602Z"
      fill="currentColor" />
    <path
      d="M72.4121 23.48H78.7752C79.828 23.48 80.0189 23.318 80.204 22.271L80.4469 20.8422C80.4911 20.6385 80.5182 20.4315 80.5279 20.2233C80.5279 19.8704 80.337 19.8183 79.7181 19.8183H76.6233C74.2516 19.8183 73.4707 19.3613 73.4707 17.8226C73.496 17.0722 73.585 16.3252 73.7368 15.5898L73.9566 14.375C74.4946 11.2744 75.2986 10.9042 78.3471 10.9042H85.1614L84.0045 13.623H78.324C77.2712 13.623 77.0803 13.785 76.8952 14.8378L76.6812 16.0468C76.6341 16.25 76.607 16.4573 76.6002 16.6657C76.6002 17.0186 76.7853 17.0706 77.4042 17.0706H80.6378C83.0095 17.0706 83.7905 17.5276 83.7905 19.0663C83.7648 19.8187 83.6758 20.5676 83.5244 21.305L83.2236 22.9999C82.7434 25.7996 81.9336 26.1814 78.7521 26.1814H72.8922L72.4121 23.48Z"
      fill="currentColor" />
    <path
      d="M87.9843 10.9274H91.3278L88.6611 26.2045H85.3176L87.9843 10.9274ZM88.9851 4.97499H92.4559L91.8369 8.44576H88.3661L88.9851 4.97499Z"
      fill="currentColor" />
    <path
      d="M105.986 14.2651C105.946 15.2371 105.828 16.2043 105.633 17.1574L103.961 26.6037C103.313 30.2711 101.729 31 98.6279 31H92.8086L92.3227 28.2465H97.8759C99.9758 28.2465 100.381 28.0903 100.768 25.7186L100.953 24.6658H97.0777C93.6532 24.6658 92.2244 23.7229 92.2244 21.1372C92.2638 20.1652 92.3818 19.1979 92.5772 18.2449L92.9821 16.0063C93.7631 11.6967 94.758 10.7249 99.2585 10.7249H101.115C104.557 10.7365 105.986 11.6794 105.986 14.2651ZM101.457 21.9471L102.29 17.1227C102.462 16.3618 102.571 15.5878 102.614 14.8088C102.614 13.6519 102.035 13.4379 100.3 13.4379H99.0907C97.043 13.4379 96.719 14.0568 96.3662 16.0236L95.9612 18.2623C95.7993 19.025 95.691 19.7982 95.6373 20.5761C95.6373 21.733 96.2158 21.9529 97.9859 21.9529L101.457 21.9471Z"
      fill="currentColor" />
    <path
      d="M121.367 13.6751C121.306 14.7796 121.161 15.878 120.934 16.9607L119.32 26.2161H115.976L117.619 16.9607C117.766 16.2594 117.857 15.5476 117.891 14.832C117.891 13.8891 117.486 13.6751 116.219 13.6751H112.286L110.105 26.1814H106.767L109.434 10.9042H116.855C120.286 10.9274 121.367 11.7314 121.367 13.6751Z"
      fill="currentColor" />
    <path
      d="M7.97158 26.1814H3.28026C3.20254 26.1813 3.12575 26.1646 3.05505 26.1323C2.98435 26.1001 2.92139 26.053 2.87041 25.9944C2.81943 25.9357 2.78162 25.8668 2.75952 25.7923C2.73741 25.7178 2.73154 25.6394 2.74229 25.5625L3.65626 20.4026H9.44088L8.49798 25.7476C8.47291 25.8691 8.40703 25.9784 8.31127 26.0573C8.21552 26.1362 8.09566 26.18 7.97158 26.1814V26.1814Z"
      fill="#009BFF" />
    <path
      d="M21.1779 8.78706H5.69824L6.71634 3.00244H21.9877C22.0714 2.99445 22.1557 3.00616 22.234 3.03663C22.3123 3.06709 22.3823 3.11547 22.4386 3.17789C22.4948 3.2403 22.5356 3.31502 22.5578 3.39605C22.58 3.47709 22.5828 3.56219 22.5662 3.64453L21.7101 8.35321C21.6869 8.47672 21.6207 8.58803 21.5233 8.66744C21.4259 8.74684 21.3035 8.78922 21.1779 8.78706Z"
      fill="url(#paint0_linear_16025_26913)" />
    <path
      d="M5.69814 8.78706H0.549824C0.471061 8.78794 0.393048 8.77169 0.321181 8.73945C0.249315 8.70721 0.185311 8.65974 0.133598 8.60033C0.081885 8.54091 0.0436979 8.47097 0.0216786 8.39534C-0.000340748 8.31972 -0.00566652 8.24021 0.00606973 8.16232L0.84484 3.44785C0.867754 3.32323 0.933469 3.21053 1.03064 3.12921C1.1278 3.04788 1.25032 3.00304 1.37702 3.00244H6.71623L5.69814 8.78706Z"
      fill="#0064FF" />
    <path d="M9.44658 20.3852H3.65039L5.69815 8.79863H11.4943L9.44658 20.3852Z"
      fill="url(#paint1_linear_16025_26913)" />
  </g>
  <defs>
    <linearGradient id="paint0_linear_16025_26913" x1="6.19468" y1="5.90053" x2="21.6312" y2="8.6791"
      gradientUnits="userSpaceOnUse">
      <stop offset="0.03" stop-color="#E9FFFF" />
      <stop offset="0.17" stop-color="#C4FAC9" />
      <stop offset="0.33" stop-color="#A0F694" />
      <stop offset="0.48" stop-color="#82F269" />
      <stop offset="0.63" stop-color="#6AEF47" />
      <stop offset="0.76" stop-color="#5AED2F" />
      <stop offset="0.89" stop-color="#4FEB20" />
      <stop offset="1" stop-color="#4CEB1B" />
    </linearGradient>
    <linearGradient id="paint1_linear_16025_26913" x1="8.58918" y1="8.37635" x2="8.69869" y2="19.278"
      gradientUnits="userSpaceOnUse">
      <stop stop-color="#009BFF" />
      <stop offset="0.35" stop-color="#0081FE" />
      <stop offset="0.75" stop-color="#006AFD" />
      <stop offset="1" stop-color="#0062FD" />
    </linearGradient>
    <clipPath id="clip0_16025_26913">
      <rect width="121.367" height="32" fill="white" />
    </clipPath>
  </defs>
</svg>`,Pa=`<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 4.5C6 5.32846 5.32846 6 4.5 6C3.67154 6 3 5.32846 3 4.5C3 3.67154 3.67154 3 4.5 3C5.32846 3 6 3.67154 6 4.5Z" fill="currentColor" />
<path d="M6 12C6 12.8285 5.32846 13.5 4.5 13.5C3.67154 13.5 3 12.8285 3 12C3 11.1715 3.67154 10.5 4.5 10.5C5.32846 10.5 6 11.1715 6 12Z" fill="currentColor" />
<path d="M4.5 21C5.32846 21 6 20.3285 6 19.5C6 18.6715 5.32846 18 4.5 18C3.67154 18 3 18.6715 3 19.5C3 20.3285 3.67154 21 4.5 21Z" fill="currentColor" />
<path d="M13.5 4.5C13.5 5.32846 12.8285 6 12 6C11.1715 6 10.5 5.32846 10.5 4.5C10.5 3.67154 11.1715 3 12 3C12.8285 3 13.5 3.67154 13.5 4.5Z" fill="currentColor" />
<path d="M12 13.5C12.8285 13.5 13.5 12.8285 13.5 12C13.5 11.1715 12.8285 10.5 12 10.5C11.1715 10.5 10.5 11.1715 10.5 12C10.5 12.8285 11.1715 13.5 12 13.5Z" fill="currentColor" />
<path d="M13.5 19.5C13.5 20.3285 12.8285 21 12 21C11.1715 21 10.5 20.3285 10.5 19.5C10.5 18.6715 11.1715 18 12 18C12.8285 18 13.5 18.6715 13.5 19.5Z" fill="currentColor" />
<path d="M19.5 6C20.3285 6 21 5.32846 21 4.5C21 3.67154 20.3285 3 19.5 3C18.6715 3 18 3.67154 18 4.5C18 5.32846 18.6715 6 19.5 6Z" fill="currentColor" />
<path d="M21 12C21 12.8285 20.3285 13.5 19.5 13.5C18.6715 13.5 18 12.8285 18 12C18 11.1715 18.6715 10.5 19.5 10.5C20.3285 10.5 21 11.1715 21 12Z" fill="currentColor" />
<path d="M19.5 21C20.3285 21 21 20.3285 21 19.5C21 18.6715 20.3285 18 19.5 18C18.6715 18 18 18.6715 18 19.5C18 20.3285 18.6715 21 19.5 21Z" fill="currentColor" />
</svg>
`,Ua=`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.46042 12.4592L5.54119 11.54L9.08157 7.99961L5.54119 4.45923L6.46042 3.53999L10.92 7.99961L6.46042 12.4592Z" fill="currentColor" />
</svg>
`;const Qa="https://cdc.cdn-go.cn/tdc/latest/menu.json",qa="https://cdc.cdn-go.cn/tdc/latest/menu.woa.json",Wa="https://cdc.cdn-go.cn/tdc/latest/images";var Ka=`.TDesign-header-logo{height:32px;display:inline-flex;align-items:center}.TDesign-header-logo .home{color:var(--text-primary);text-decoration:none}.TDesign-header-logo .home svg{display:block;height:32px}.TDesign-header-logo .divider{width:1px;height:16px;background:var(--component-stroke);margin:0 16px}.TDesign-header-logo__menu{height:32px;cursor:pointer}.TDesign-header-logo__menu svg{border-radius:var(--border-radius);padding:4px;width:32px;height:32px;box-sizing:border-box;transition:all .2s linear;color:var(--text-secondary)}.TDesign-header-logo__menu svg:hover{background-color:var(--bg-color-container-hover)}
`,Ya=`.TDesign-header-logo__content{--menu-list-width: 400px;--list-direction: row;padding:16px;border-radius:6px;width:var(--menu-list-width);box-sizing:border-box}@media screen and (max-width: 750px){.TDesign-header-logo__content{--list-direction: column;--menu-list-width: 212px}}.TDesign-header-logo__content span.title:hover{cursor:auto;color:var(--text-primary);font-family:TencentSansW7}.TDesign-header-logo__content .title{color:var(--text-primary);display:inline-flex;align-items:flex-end;margin:0 16px 8px;line-height:22px;transition:color .2s linear;text-decoration:none;font-family:TencentSansW7}.TDesign-header-logo__content .title:hover{color:var(--brand-main)}.TDesign-header-logo__content .title i{width:16px;height:16px;margin-left:4px;margin-bottom:2px}.TDesign-header-logo__content .list{display:flex;flex-wrap:wrap;flex-direction:var(--list-direction);row-gap:8px;column-gap:8px}.TDesign-header-logo__content .list .item{text-decoration:none;padding:8px;width:180px;border-radius:var(--border-radius);box-sizing:border-box;display:flex;align-items:center;row-gap:8px;column-gap:8px;transition:all .2s linear}.TDesign-header-logo__content .list .item:hover{color:var(--text-primary);background:var(--bg-color-container-hover)}.TDesign-header-logo__content .list .item.active{color:var(--text-primary);background:var(--bg-color-container-select)}.TDesign-header-logo__content .list .item .icon{width:40px;height:40px}.TDesign-header-logo__content .list .item .details{display:flex;justify-content:center;flex-direction:column}.TDesign-header-logo__content .list .item .details .name{color:var(--text-primary);font-family:TencentSansW7}.TDesign-header-logo__content .list .item .details .desc{font-size:12px;line-height:20px;color:var(--text-secondary)}.TDesign-header-logo__content .line{width:100%;height:1px;margin:16px 0;background-color:var(--component-stroke)}
`;const Ga=Xe()==="en";function Xa(e=[]){return K` <div class="list">
    ${e.map(t=>K` <a class="item" href="${t.url}" target="${t.target}">
          <img class="icon" src="${Wa}/${t.key}.svg" />
          <div class="details">
            <span class="name">${t.title}</span>
            <span class="desc">${t.desc}</span>
          </div>
        </a>`)}
  </div>`}function Ja(e){const t=e.length;return e.map((n,i)=>K`
      ${n.category_url?K`
            <a href="${n.category_url}" class="title" target="${n.target}">
              ${n.category_title} <i innerHTML="${Ua}"></i>
            </a>
          `:K` <span class="title"> ${n.category_title} </span> `}
      ${Xa(n.children)} ${i<t-1?K`<div class="line"></div>`:K``}
    `)}V1({tag:"td-logo",menuList:{get:(e,t)=>t||[],set:(e,t)=>t},isIntranet:{get:()=>ye(),set:e=>e,connect:e=>{const t=ye()?qa:Qa;fetch(t).then(n=>n.json()).then(n=>{n.forEach(i=>{i.target="_blank",i.children.forEach(o=>{o.url.includes("tdesign")?o.target="_self":o.target="_blank"})}),Object.assign(e,{menuList:n})})}},render:({menuList:e})=>K`
    <style>
      ${Ka}
    </style>

    <div class="TDesign-header-logo">
      <td-doc-popup portalStyle="${Ya}" placement="bottom-start">
        <div class="TDesign-header-logo__menu" innerHTML=${Pa}></div>
        <div slot="content" class="TDesign-header-logo__content">${Ja(e)}</div>
      </td-doc-popup>
      <span class="divider"></span>
      <a class="home" href="${Ga?"/index-en":"/"}" title="TDesign" innerHTML=${Ra}></a>
    </div>
  `});var e6=`:host{position:fixed;right:24px;bottom:80px;z-index:300}:host .TDesign-backtop{width:48px;height:48px;display:flex;justify-content:center;align-items:center;border-radius:6px;box-sizing:border-box;backdrop-filter:blur(10px);background-color:var(--component-border);cursor:pointer;transition:all .2s ease;opacity:0;visibility:hidden;color:var(--text-secondary)}:host .TDesign-backtop.show{opacity:1;visibility:visible}:host .TDesign-backtop:hover{color:var(--text-primary)}:host .TDesign-backtop:hover .TDesign-backtop__inner{transform:scale(.95)}:host .TDesign-backtop__inner{width:calc(100% - 2px);height:calc(100% - 2px);border-radius:5px;display:flex;justify-content:center;align-items:center;background-color:var(--bg-color-container-transparent);box-sizing:border-box;transition:all .2s ease}:host .TDesign-backtop__inner svg{width:20px;height:20px}
`,t6=`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill="currentColor" d="M1.73734 0.5V1.75H14.2373V0.5H1.73734Z" />
  <path fill="currentColor" d="M15.0669 8.86364L14.1831 9.74752L8.62087 4.18534V15.5426H7.37087V4.18534L1.80869 9.74752L0.924805 8.86364L7.99587 1.79257L15.0669 8.86364Z" />
</svg>`;function n6(){window.scrollTo({top:0,behavior:"smooth"})}V1({tag:"td-backtop",backtopShow:{get:(e,t)=>t||!1,set:(e,t)=>t,connect:(e,t,n)=>{function i(){const{scrollTop:o}=document.documentElement;o>0?Object.assign(e,{[t]:!0}):Object.assign(e,{[t]:!1}),n()}return document.addEventListener("scroll",i),()=>document.removeEventListener("scroll",i)}},render:({backtopShow:e})=>K`
    <div class="TDesign-backtop ${e?"show":""}" onclick="${n6}">
      <div class="TDesign-backtop__inner" innerHTML=${t6}></div>
    </div>
  `.css`${e6}`});var i6=`.TDesign-avatar{margin-right:8px;display:inline-flex;align-items:center;justify-content:center}.TDesign-avatar .avatar{width:40px;height:40px;display:inline-block}.TDesign-avatar .avatar img{width:40px;height:40px;border-radius:100%}
`;V1({tag:"td-avatar",content:"",username:"",src:"",href:"",render:({content:e,username:t,src:n,href:i})=>{const o=`https://avatars.githubusercontent.com/${t}`,r=`https://github.com/${t}`;return K`
      <div class="TDesign-avatar">
        <td-tooltip trigger-type="hover">
          <a class="avatar" target="_blank" href="${i||r}">
            <img src="${n||o}" />
          </a>
          <div slot="content">${e||t}</div>
        </td-tooltip>
      </div>
    `.css`${i6}`}});var o6=`.TDesign-contributors .title{font-weight:700;font-size:20px;line-height:28px;margin:48px 0 16px}.TDesign-contributors__content{display:flex;flex-wrap:wrap}.TDesign-contributors__content td-tooltip{margin-right:8px}.TDesign-contributors__content img{width:40px;height:40px;border-radius:100%}.TDesign-contributors__content .avatar{width:40px;height:40px;display:inline-block}
`;const r6="https://service-edbzjd6y-1257786608.hk.apigw.tencentcs.com/release/github-contributors/list";function l6(e){if(!e.length)return K``;const t=e.filter(n=>typeof n=="object"&&n!==null);return K`
    <section class="TDesign-contributors">
      <h3 class="title">Contributors</h3>
      <div class="TDesign-contributors__content">
        ${t.map(n=>K`
          <td-avatar username="${n==null?void 0:n.username}" content="${n==null?void 0:n.roleNames} ${n==null?void 0:n.username}"></td-avatar>
        `)}
      </div>
    </section>
  `}function s6(e,t,n,i){const o=new RegExp(`api|interaction|design|ui|^${t}$|${t}-test`);if(!e||!t||!n||!i[e])return[];const r=i[e].find(a=>a.name===n);if(!r)return[];let{tasks:l}=r;l=l.filter(a=>a.name.search(o)!==-1&&a.contributors.length>0);const s={};return l.forEach(a=>{["contributors","pmcs"].forEach(d=>{a[d].forEach(c=>{s[c]?(s[c].role.push(a.name),s[c].roleName.push(a.fullName)):s[c]={role:[a.name],roleName:[a.fullName]}})})}),Object.keys(s).map(a=>({username:a,roleNames:[...new Set(s[a].roleName)].join("/"),...s[a]}))}V1({tag:"td-contributors",platform:"",framework:"",componentName:"",contributorsData:{get:(e,t)=>t||{},set:(e,t)=>t,connect:(e,t,n)=>{const i=sessionStorage.getItem("__tdesign_contributors__");if(i){const o=JSON.parse(i);Object.assign(e,{[t]:o}),n()}else fetch(r6).then(o=>o.json()).then(o=>{Object.assign(e,{[t]:o}),sessionStorage.setItem("__tdesign_contributors__",JSON.stringify(o)),n()}).catch(o=>{console.error(o)})}},render:e=>{const{platform:t,framework:n,componentName:i}=e,o=s6(t,n,i,e.contributorsData);return l6(o).css`${o6}`}});var a6=`.TDesign-tooltip{position:relative}.TDesign-tooltip[data-placement=top] .TDesign-tooltip__popup{top:-36px}.TDesign-tooltip[data-placement=top] .TDesign-tooltip__popup:after{bottom:-12px;border-top-color:var(--bg-color-container)}.TDesign-tooltip[data-placement=bottom] .TDesign-tooltip__popup{bottom:-36px}.TDesign-tooltip[data-placement=bottom] .TDesign-tooltip__popup:after{top:-12px;border-bottom-color:var(--bg-color-container)}.TDesign-tooltip__popup{position:absolute;left:50%;transform:translate(-50%);color:var(--text-primary);border-radius:var(--border-radius);padding:4px 8px;white-space:nowrap;line-height:22px;visibility:hidden;opacity:0;z-index:900;transition:all .2s linear;background-color:var(--bg-color-container);box-shadow:0 3px 14px 2px #0000000d,0 8px 10px 1px #0000000f,0 5px 5px -3px #0000001a}.TDesign-tooltip__popup:after{content:"";z-index:2;width:0;height:0;border-style:solid;border-width:6px;border-color:transparent;left:50%;position:absolute;margin-left:-6px}.TDesign-tooltip__popup.show{opacity:1;visibility:visible}
`;function c6(e){e.triggerType==="click"&&(Object.assign(e,{showTip:!0}),setTimeout(()=>Object.assign(e,{showTip:!1}),e.duration))}function B0(e){e.triggerType==="hover"&&Object.assign(e,{showTip:!0})}function F0(e){e.triggerType==="hover"&&Object.assign(e,{showTip:!1})}V1({tag:"td-tooltip",placement:"top",showTip:!1,duration:1800,triggerType:"click",render:e=>{const{showTip:t,placement:n}=e;return K`
      <div class="TDesign-tooltip" data-placement="${n}">
        <div onmouseover=${B0} onmouseout=${F0} onclick=${c6}>
          <slot></slot>
        </div>
        <div class="TDesign-tooltip__popup ${t?"show":""}" onmouseover=${B0} onmouseout=${F0}>
          <slot name="content"></slot>
        </div>
      </div>
    `.css`${a6}`}});var d6=`:host{flex-shrink:0}.TDesign-theme-tabs{min-width:60px;width:100%;height:32px;padding:2px;box-sizing:border-box;border-radius:var(--border-radius);background:var(--bg-color-component);position:relative;display:flex;justify-content:space-between}.TDesign-theme-tabs__block{background-color:var(--bg-color-tab-select);box-shadow:0 2px 4px #00000026;position:absolute;height:calc(100% - 4px);transition:all var(--anim-time-fn-easing) var(--anim-duration-moderate);border-radius:var(--border-radius)}.TDesign-theme-tabs .item{width:50%;height:28px;padding:4px;display:inline-flex;justify-content:center;align-items:center;box-sizing:border-box;color:var(--text-disabled);position:relative;cursor:pointer}.TDesign-theme-tabs .item svg{width:16px;height:16px;pointer-events:none;transition:all .2s linear}.TDesign-theme-tabs .item:hover:not(.active){color:var(--text-secondary)}.TDesign-theme-tabs .item.active.sun{color:#ffbd2e}.TDesign-theme-tabs .item.active.moon{color:#fff}
`,p6=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill="currentColor" d="M9.99993 3.12494C6.20294 3.12494 3.12488 6.203 3.12488 10C3.12488 13.797 6.20294 16.8751 9.99993 16.8751C13.7969 16.8751 16.875 13.797 16.875 10C16.875 9.52352 16.8264 9.0577 16.7337 8.6075C16.6752 8.32295 16.4282 8.11628 16.1378 8.10872C15.8474 8.10117 15.5901 8.29473 15.5168 8.57585C15.1411 10.0167 13.8302 11.0795 12.2727 11.0795C10.4212 11.0795 8.92039 9.57869 8.92039 7.72726C8.92039 6.16969 9.98319 4.85879 11.4241 4.48312C11.7052 4.40983 11.8988 4.15249 11.8912 3.86207C11.8836 3.57165 11.677 3.32473 11.3924 3.26616C10.9422 3.1735 10.4764 3.12494 9.99993 3.12494Z" />
</svg>
`,u6=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill="currentColor" d="M9.99996 3.15217C10.5252 3.15217 10.951 2.72636 10.951 2.20109C10.951 1.67582 10.5252 1.25 9.99996 1.25C9.47469 1.25 9.04887 1.67582 9.04887 2.20109C9.04887 2.72636 9.47469 3.15217 9.99996 3.15217Z" />
  <path fill="currentColor" d="M9.99992 4.29348C6.84829 4.29348 4.2934 6.84838 4.2934 10C4.2934 13.1516 6.84829 15.7065 9.99992 15.7065C13.1515 15.7065 15.7064 13.1516 15.7064 10C15.7064 6.84838 13.1515 4.29348 9.99992 4.29348Z" />
  <path fill="currentColor" d="M16.4673 4.4837C16.4673 5.00896 16.0415 5.43478 15.5162 5.43478C14.991 5.43478 14.5652 5.00896 14.5652 4.4837C14.5652 3.95843 14.991 3.53261 15.5162 3.53261C16.0415 3.53261 16.4673 3.95843 16.4673 4.4837Z" />
  <path fill="currentColor" d="M17.7989 10.9511C18.3241 10.9511 18.75 10.5253 18.75 10C18.75 9.47474 18.3241 9.04891 17.7989 9.04891C17.2736 9.04891 16.8478 9.47474 16.8478 10C16.8478 10.5253 17.2736 10.9511 17.7989 10.9511Z" />
  <path fill="currentColor" d="M16.4673 15.5163C16.4673 16.0416 16.0415 16.4674 15.5162 16.4674C14.991 16.4674 14.5652 16.0416 14.5652 15.5163C14.5652 14.991 14.991 14.5652 15.5162 14.5652C16.0415 14.5652 16.4673 14.991 16.4673 15.5163Z" />
  <path fill="currentColor" d="M9.99996 18.75C10.5252 18.75 10.951 18.3242 10.951 17.7989C10.951 17.2736 10.5252 16.8478 9.99996 16.8478C9.47469 16.8478 9.04887 17.2736 9.04887 17.7989C9.04887 18.3242 9.47469 18.75 9.99996 18.75Z" />
  <path fill="currentColor" d="M5.43469 15.5163C5.43469 16.0416 5.00887 16.4674 4.4836 16.4674C3.95833 16.4674 3.53252 16.0416 3.53252 15.5163C3.53252 14.991 3.95833 14.5652 4.4836 14.5652C5.00887 14.5652 5.43469 14.991 5.43469 15.5163Z" />
  <path fill="currentColor" d="M2.20096 10.9511C2.72623 10.9511 3.15205 10.5253 3.15205 10C3.15205 9.47474 2.72623 9.04891 2.20096 9.04891C1.67569 9.04891 1.24988 9.47474 1.24988 10C1.24988 10.5253 1.67569 10.9511 2.20096 10.9511Z" />
  <path fill="currentColor" d="M5.43469 4.4837C5.43469 5.00896 5.00887 5.43478 4.4836 5.43478C3.95833 5.43478 3.53252 5.00896 3.53252 4.4837C3.53252 3.95843 3.95833 3.53261 4.4836 3.53261C5.00887 3.53261 5.43469 3.95843 5.43469 4.4837Z" />
</svg>
`;const f6=new CustomEvent("storageChange");function $0(e,t){document.documentElement.removeAttribute("theme-mode"),Object.assign(e,{theme:t}),document.documentElement.setAttribute("theme-mode",t)}function g6(e){requestAnimationFrame(()=>{const{shadowRoot:t}=e,n=t.querySelectorAll(".item");let i={};n.forEach(o=>{if(!o.offsetWidth)i=null;else{const{theme:r}=o.dataset;i[r]={width:`${o.offsetWidth}px`,left:`${o.offsetLeft}px`}}}),Object.assign(e,{blockStyleMap:i})})}V1({tag:"td-theme-tabs",theme:{get:(e,t)=>t||"light",set:(e,t)=>(t&&(sessionStorage.setItem("--tdesign-theme",t),window.dispatchEvent(f6)),t),connect:(e,t,n)=>{const i=sessionStorage.getItem("--tdesign-theme");i&&(document.documentElement.removeAttribute("theme-mode"),Object.assign(e,{[t]:i}),document.documentElement.setAttribute("theme-mode",i),n());const o=K5(r=>Object.assign(e,{[t]:r}));return()=>o.disconnect()}},blockStyleMap:{get:(e,t)=>t||void 0,set:(e,t)=>t},render:e=>{const{theme:t,blockStyleMap:n}=e;n||g6(e);const i=n?n[t]:{};return K`
      <div class="TDesign-theme-tabs">
        <div class="TDesign-theme-tabs__block" style=${i||{}}></div>
        <div onclick=${o=>$0(o,"light")} data-theme="light" class="item sun ${t==="light"?"active":""}" innerHTML=${u6}></div>
        <div onclick=${o=>$0(o,"dark")} data-theme="dark" class="item moon ${t==="dark"?"active":""}" innerHTML=${p6}></div>
      </div>
    `.css`${d6}`}});var xo=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},J5={exports:{}};/* NProgress, (c) 2013, 2014 Rico Sta. Cruz - http://ricostacruz.com/nprogress
 * @license MIT */(function(e,t){(function(n,i){e.exports=i()})(xo,function(){var n={};n.version="0.2.0";var i=n.settings={minimum:.08,easing:"ease",positionUsing:"",speed:200,trickle:!0,trickleRate:.02,trickleSpeed:800,showSpinner:!0,barSelector:'[role="bar"]',spinnerSelector:'[role="spinner"]',parent:"body",template:'<div class="bar" role="bar"><div class="peg"></div></div><div class="spinner" role="spinner"><div class="spinner-icon"></div></div>'};n.configure=function(f){var p,g;for(p in f)g=f[p],g!==void 0&&f.hasOwnProperty(p)&&(i[p]=g);return this},n.status=null,n.set=function(f){var p=n.isStarted();f=o(f,i.minimum,1),n.status=f===1?null:f;var g=n.render(!p),m=g.querySelector(i.barSelector),v=i.speed,y=i.easing;return g.offsetWidth,s(function(x){i.positionUsing===""&&(i.positionUsing=n.getPositioningCSS()),a(m,l(f,v,y)),f===1?(a(g,{transition:"none",opacity:1}),g.offsetWidth,setTimeout(function(){a(g,{transition:"all "+v+"ms linear",opacity:0}),setTimeout(function(){n.remove(),x()},v)},v)):setTimeout(x,v)}),this},n.isStarted=function(){return typeof n.status=="number"},n.start=function(){n.status||n.set(0);var f=function(){setTimeout(function(){!n.status||(n.trickle(),f())},i.trickleSpeed)};return i.trickle&&f(),this},n.done=function(f){return!f&&!n.status?this:n.inc(.3+.5*Math.random()).set(1)},n.inc=function(f){var p=n.status;return p?(typeof f!="number"&&(f=(1-p)*o(Math.random()*p,.1,.95)),p=o(p+f,0,.994),n.set(p)):n.start()},n.trickle=function(){return n.inc(Math.random()*i.trickleRate)},function(){var f=0,p=0;n.promise=function(g){return!g||g.state()==="resolved"?this:(p===0&&n.start(),f++,p++,g.always(function(){p--,p===0?(f=0,n.done()):n.set((f-p)/f)}),this)}}(),n.render=function(f){if(n.isRendered())return document.getElementById("nprogress");c(document.documentElement,"nprogress-busy");var p=document.createElement("div");p.id="nprogress",p.innerHTML=i.template;var g=p.querySelector(i.barSelector),m=f?"-100":r(n.status||0),v=document.querySelector(i.parent),y;return a(g,{transition:"all 0 linear",transform:"translate3d("+m+"%,0,0)"}),i.showSpinner||(y=p.querySelector(i.spinnerSelector),y&&C(y)),v!=document.body&&c(v,"nprogress-custom-parent"),v.appendChild(p),p},n.remove=function(){u(document.documentElement,"nprogress-busy"),u(document.querySelector(i.parent),"nprogress-custom-parent");var f=document.getElementById("nprogress");f&&C(f)},n.isRendered=function(){return!!document.getElementById("nprogress")},n.getPositioningCSS=function(){var f=document.body.style,p="WebkitTransform"in f?"Webkit":"MozTransform"in f?"Moz":"msTransform"in f?"ms":"OTransform"in f?"O":"";return p+"Perspective"in f?"translate3d":p+"Transform"in f?"translate":"margin"};function o(f,p,g){return f<p?p:f>g?g:f}function r(f){return(-1+f)*100}function l(f,p,g){var m;return i.positionUsing==="translate3d"?m={transform:"translate3d("+r(f)+"%,0,0)"}:i.positionUsing==="translate"?m={transform:"translate("+r(f)+"%,0)"}:m={"margin-left":r(f)+"%"},m.transition="all "+p+"ms "+g,m}var s=function(){var f=[];function p(){var g=f.shift();g&&g(p)}return function(g){f.push(g),f.length==1&&p()}}(),a=function(){var f=["Webkit","O","Moz","ms"],p={};function g(x){return x.replace(/^-ms-/,"ms-").replace(/-([\da-z])/gi,function(L,H){return H.toUpperCase()})}function m(x){var L=document.body.style;if(x in L)return x;for(var H=f.length,Z=x.charAt(0).toUpperCase()+x.slice(1),N;H--;)if(N=f[H]+Z,N in L)return N;return x}function v(x){return x=g(x),p[x]||(p[x]=m(x))}function y(x,L,H){L=v(L),x.style[L]=H}return function(x,L){var H=arguments,Z,N;if(H.length==2)for(Z in L)N=L[Z],N!==void 0&&L.hasOwnProperty(Z)&&y(x,Z,N);else y(x,H[1],H[2])}}();function d(f,p){var g=typeof f=="string"?f:h(f);return g.indexOf(" "+p+" ")>=0}function c(f,p){var g=h(f),m=g+p;d(g,p)||(f.className=m.substring(1))}function u(f,p){var g=h(f),m;!d(f,p)||(m=g.replace(" "+p+" "," "),f.className=m.substring(1,m.length-1))}function h(f){return(" "+(f.className||"")+" ").replace(/\s+/gi," ")}function C(f){f&&f.parentNode&&f.parentNode.removeChild(f)}return n})})(J5);var Hn=J5.exports,h6=`:host{--content-margin-left: var(--aside-width)}@media screen and (max-width: 1200px){:host{--content-margin-left: 0}}.TDesign-page-doc{min-height:100vh;max-width:100vw;overflow-x:hidden}.TDesign-page-doc .TDesign-body{min-height:100vh;transition:all .2s var(--anim-time-fn-easing)}.TDesign-page-doc .TDesign-body.row{margin-left:var(--content-margin-left)}
`;V1({tag:"td-doc-layout",loaded:{get:(e,t)=>t||!1,set:(e,t)=>t,connect:(e,t)=>{function n(){Object.assign(e,{[t]:!0}),Hn.done()}return setTimeout(()=>Hn.done(),3500),window.NProgress=Hn,window.addEventListener("load",n),!e.loaded&&Hn.start(),()=>window.removeEventListener("load",n)}},direction:"row",render:({direction:e})=>K`
      <div class="TDesign-page-doc">
        <slot name="header"></slot>
        <div class="TDesign-body ${e}">
          <slot></slot>
        </div>
      </div>
    `.css`${h6}`});var v6=`:host{--collapse-display: none;--aside-top: 64px}@media screen and (max-width: 1200px){:host{--collapse-display: flex}}.TDesign-doc-aside{position:absolute;left:0;top:var(--aside-top);height:100vh;width:var(--aside-width, 260px);z-index:1300;box-sizing:border-box;padding-bottom:32px;background-color:var(--bg-color-container);color:var(--text-secondary);box-shadow:var(--aside-box-shadow);transition:transform .2s var(--anim-time-fn-easing),outline .2s var(--anim-time-fn-easing);outline:9999px solid transparent}.TDesign-doc-aside.hide{transform:translate3d(calc(-1 * var(--aside-width)),0,0)}.TDesign-doc-aside.show{transform:translateZ(0);outline-color:var(--text-disabled)}.TDesign-doc-aside.show+.TDesign-doc-aside-mask{display:block}.TDesign-doc-aside:after{content:"";width:100%;height:100px;position:absolute;left:0;bottom:-100px;background-color:var(--bg-color-container)}.TDesign-doc-aside__title{margin:8px 12px;font-size:16px;height:40px;line-height:40px;font-family:TencentSansW7}.TDesign-doc-aside__extra{max-width:calc(var(--aside-width) - 24px);position:relative;padding:0 12px;display:block}.TDesign-doc-aside-mask{content:"";position:fixed;left:0;top:0;width:100%;height:100%;z-index:600;display:none}.TDesign-doc-aside-collapse{position:fixed;left:var(--aside-width);top:160px;border-radius:0 3px 3px 0;box-shadow:2px 0 8px #00000042;width:40px;height:40px;align-items:center;justify-content:center;background-color:var(--bg-color-container);transition:all .2s var(--anim-time-fn-easing);display:var(--collapse-display)}.TDesign-doc-aside-collapse .icon svg{width:24px;height:24px;color:var(--text-primary)}.TDesign-doc-sidenav{height:100%;padding:0 0 0 12px;overflow:auto}.TDesign-doc-sidenav:hover::-webkit-scrollbar-thumb{background-color:var(--bg-color-scroll)}.TDesign-doc-sidenav::-webkit-scrollbar{width:12px;background:transparent}.TDesign-doc-sidenav::-webkit-scrollbar-thumb{border-radius:6px;border:4px solid transparent;background-clip:content-box;background-color:transparent}.TDesign-doc-sidenav-group__title{display:flex;align-items:center;font-size:12px;color:var(--text-placeholder);padding:14px 12px 4px;height:40px;box-sizing:border-box;position:relative;margin-top:8px;border-radius:var(--border-radius)}.TDesign-doc-sidenav-group__children{overflow:hidden}.TDesign-doc-sidenav-item{position:relative;margin-top:4px;max-width:calc(var(--aside-width) - 24px)}.TDesign-doc-sidenav-item .TDesign-doc-sidenav-link{display:block;height:40px;padding:0 12px;line-height:40px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:var(--text-secondary);text-decoration:none;border-radius:var(--border-radius);transition:all .2s linear;gap:8px}.TDesign-doc-sidenav-item .TDesign-doc-sidenav-link:hover{color:var(--text-primary);background:var(--bg-color-container-hover)}.TDesign-doc-sidenav-item .TDesign-doc-sidenav-link.active{color:var(--text-anti);background-color:var(--brand-main)}.TDesign-doc-sidenav-item .TDesign-doc-sidenav-link.active .TDesign-doc-sidenav-link__tag{background:rgba(255,255,255,.22);color:#ffffff8c}.TDesign-doc-sidenav-item .TDesign-doc-sidenav-link__tag{font-size:12px;padding:2px 4px;color:#f5ba18;border-radius:3px;transition:.2s linear;background:rgba(245,186,24,.1)}
`,m6=`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M3.99902 7.97265L27.9978 8.00026L28.0001 6.00026L4.00132 5.97266L3.99902 7.97265Z" fill="currentColor" />
  <path d="M15.0002 17.0003H27.999V15.0003H15.0002V17.0003Z" fill="currentColor" />
  <path d="M3.99902 25.9727L27.9978 26.0003L28.0001 24.0003L4.00132 23.9727L3.99902 25.9727Z" fill="currentColor" />
  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9335 15.1864C12.4668 15.5864 12.4668 16.3864 11.9335 16.7864L5.60017 21.5364C4.94094 22.0308 4.00017 21.5604 4.00017 20.7364L4.00017 11.2364C4.00017 10.4124 4.94094 9.94197 5.60017 10.4364L11.9335 15.1864ZM6.00017 13.2364L9.66684 15.9864L6.00017 18.7364L6.00017 13.2364Z" fill="currentColor" />
</svg>
`,C6=`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M28.0011 24.0276L4.0023 24L4 26L27.9988 26.0276L28.0011 24.0276Z" fill="currentColor" />
  <path d="M16.9999 15L4.00115 15L4.00115 17L16.9999 17V15Z" fill="currentColor" />
  <path d="M28.0011 6.02761L4.0023 6L4 8L27.9988 8.02761L28.0011 6.02761Z" fill="currentColor" />
  <path fill-rule="evenodd" clip-rule="evenodd" d="M20.0666 16.8139C19.5333 16.4139 19.5333 15.6139 20.0666 15.2139L26.3999 10.4639C27.0592 9.96944 27.9999 10.4398 27.9999 11.2639L27.9999 20.7639C27.9999 21.5879 27.0592 22.0583 26.3999 21.5639L20.0666 16.8139ZM25.9999 18.7639L22.3333 16.0139L25.9999 13.2639L25.9999 18.7639Z" fill="currentColor" />
</svg>`;const w6=new CustomEvent("replaceState"),y6=window.history.replaceState;window.history.replaceState=(...e)=>{y6.apply(window.history,e),window.dispatchEvent(w6)};function x6(e,t,n){var i;t.preventDefault();const o=t.target.getRootNode(),r=(i=t.target.classList)!=null&&i.contains("TDesign-doc-sidenav-link")?t.target:t.target.parentNode;o.querySelectorAll(".active").forEach(s=>s.classList.remove("active")),r.classList.toggle("active"),requestAnimationFrame(()=>se(e,"change",{detail:n}))}function Lo(e,t,n=0){if(Array.isArray(t))return t.map(r=>Lo(e,r,n));const i=location.pathname===t.path||location.hash.slice(1)===t.path,o=()=>{const r=location.pathname.split("/")[1];if(!r)return!1;const{updateNotice:l}=e,{[r]:s}=l;return s?s.some(a=>t.title.includes(a)):!1};return t.children?K`
      <div class="TDesign-doc-sidenav-group TDesign-doc-sidenav-group--deep${n}">
        <span class="TDesign-doc-sidenav-group__title">${t.title}</span>
        <div class="TDesign-doc-sidenav-group__children">${Lo(e,t.children,n+1)}</div>
      </div>
    `:K`
    <div class="TDesign-doc-sidenav-item">
      <a
        href="${t.path}"
        class="TDesign-doc-sidenav-link ${i?"active":""}"
        onclick=${(r,l)=>x6(r,l,t.path)}
      >
        ${t.title} ${o()?K`<span class="TDesign-doc-sidenav-link__tag">Update</span>`:null}
      </a>
    </div>
  `}function R0(e){if(!e.shadowRoot)return;const t=e.shadowRoot.querySelector(".TDesign-doc-aside").classList;t.contains("hide")?(t.remove("hide"),t.add("show")):(t.remove("show"),t.add("hide")),Object.assign(e,{collapse:!e.collapse})}V1({tag:"td-doc-aside",routerList:{get:(e,t)=>t||[],set:(e,t)=>t},title:"",patchDom:{get:(e,t)=>t||!1,set:(e,t)=>t,connect:W5},updateNotice:{get:(e,t)=>t||{},set:(e,t)=>t,connect:e=>{fetch("https://tdesign-site-services.surge.sh/components-notice.json").then(t=>t.json()).then(t=>{e.updateNotice=t}).catch(console.error)}},asideStyle:{get:(e,t)=>t||void 0,set:(e,t)=>t,connect:e=>{function t(){if(!e.shadowRoot)return;const{shadowRoot:r}=e,{scrollTop:l}=document.documentElement,s=r.querySelector(".TDesign-doc-aside")||{style:{}},a=getComputedStyle(e).getPropertyValue("--aside-top")||"64px";l>=parseFloat(a)?Object.assign(s.style,{position:"fixed",top:"0"}):Object.assign(s.style,{position:"absolute",top:a})}function n(){if(!e.shadowRoot)return;const r=window.innerWidth<1200,l=e.shadowRoot.querySelector(".TDesign-doc-aside").classList;if(r){if(l.contains("show"))return;l.remove("show"),l.remove("hide"),l.add("hide")}else l.remove("hide"),l.remove("show")}function i(){Object.assign(e,{routerList:e.routerList.slice()})}function o(){if(!e.shadowRoot)return;const{shadowRoot:r}=e;requestAnimationFrame(()=>{let l=location.pathname;location.pathname==="/"&&location.hash&&(l=location.hash.slice(1));const s=Array.from(r.querySelectorAll(".TDesign-doc-sidenav-link")),a=Array.from(r.querySelectorAll(".TDesign-doc-sidenav-link.active")),d=s.find(c=>{const u=new URL(c.href);return u.host===location.host&&u.pathname===l});!d||a.length===1&&a.some(c=>c.href===d.href)||(a.forEach(c=>c.classList.remove("active")),d.classList.toggle("active"))})}return requestAnimationFrame(()=>{n()}),window.addEventListener("load",i),window.addEventListener("resize",n),document.addEventListener("scroll",t),window.addEventListener("popstate",o),window.addEventListener("pushState",o),window.addEventListener("replaceState",o),()=>{window.removeEventListener("load",i),window.removeEventListener("resize",n),document.removeEventListener("scroll",t),window.removeEventListener("popstate",o),window.removeEventListener("pushState",o),window.removeEventListener("replaceState",o)}}},collapse:!1,render:e=>{const{routerList:t,title:n,collapse:i}=e;return K`
      <aside class="TDesign-doc-aside">
        <div class="TDesign-doc-aside-collapse" onclick="${R0}">
          <i class="icon" innerHTML="${i?C6:m6}"></i>
        </div>
        <div class="TDesign-doc-sidenav">
          ${n&&K`<h2 class="TDesign-doc-aside__title">${n}</h2>`}
          <slot class="TDesign-doc-aside__extra" name="extra"></slot>
          ${Lo(e,t)}
        </div>
      </aside>
      <div class="TDesign-doc-aside-mask" onclick="${R0}"></div>
    `.css`${v6}`}});var L6=`.TDesign-doc-search{position:relative;width:200px;height:32px;box-sizing:border-box;display:inline-flex;align-items:center}.TDesign-doc-search__icon{position:absolute;right:8px;top:50%;width:20px;height:20px;margin-top:-10px;color:var(--text-secondary)}.TDesign-doc-search__inner{width:100%;height:100%;padding:4px 36px 4px 8px;box-sizing:border-box;color:var(--text-secondary);border-radius:var(--border-radius);line-height:22px;font-size:14px;border:1px solid var(--component-border);transition:all .2s linear;outline:none;background:transparent}.TDesign-doc-search__inner::placeholder{line-height:22px}.TDesign-doc-search__inner:hover{border-color:var(--brand-main)}.TDesign-doc-search__inner:focus{border-color:var(--brand-main);box-shadow:0 0 0 2px var(--brand-main-focus)}
`,b6=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M8.125 2.5C5.0184 2.5 2.5 5.0184 2.5 8.125C2.5 11.2316 5.0184 13.75 8.125 13.75C9.22568 13.75 10.2525 13.4339 11.1197 12.8874L15.8839 17.6517L16.7678 16.7678L12.1025 12.1025C13.1204 11.0846 13.75 9.6783 13.75 8.125C13.75 5.0184 11.2316 2.5 8.125 2.5ZM8.125 3.75C10.5412 3.75 12.5 5.70875 12.5 8.125C12.5 10.5412 10.5412 12.5 8.125 12.5C5.70875 12.5 3.75 10.5412 3.75 8.125C3.75 5.70875 5.70875 3.75 8.125 3.75Z" />
</svg>
`;(function(t,n){typeof exports=="object"&&typeof module=="object"?module.exports=n():typeof define=="function"&&define.amd?define([],n):typeof exports=="object"&&(exports.docsearch=n()),t.docsearch=n()})(typeof window!="undefined"?window:globalThis,function(){return function(e){var t={};function n(i){if(t[i])return t[i].exports;var o=t[i]={i,l:!1,exports:{}};return e[i].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(i,o,r){n.o(i,o)||Object.defineProperty(i,o,{configurable:!1,enumerable:!0,get:r})},n.n=function(i){var o=i&&i.__esModule?function(){return i.default}:function(){return i};return n.d(o,"a",o),o},n.o=function(i,o){return Object.prototype.hasOwnProperty.call(i,o)},n.p="",n(n.s=22)}([function(e,t,n){var i=n(1);function o(r){return r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}e.exports={isArray:null,isFunction:null,isObject:null,bind:null,each:null,map:null,mixin:null,isMsie:function(r){if(r===void 0&&(r=navigator.userAgent),/(msie|trident)/i.test(r)){var l=r.match(/(msie |rv:)(\d+(.\d+)?)/i);if(l)return l[2]}return!1},escapeRegExChars:function(r){return r.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")},isNumber:function(r){return typeof r=="number"},toStr:function(l){return l==null?"":l+""},cloneDeep:function(l){var s=this.mixin({},l),a=this;return this.each(s,function(d,c){d&&(a.isArray(d)?s[c]=[].concat(d):a.isObject(d)&&(s[c]=a.cloneDeep(d)))}),s},error:function(r){throw new Error(r)},every:function(r,l){var s=!0;return r?(this.each(r,function(a,d){s&&(s=l.call(null,a,d,r)&&s)}),!!s):s},any:function(r,l){var s=!1;return r&&this.each(r,function(a,d){if(l.call(null,a,d,r))return s=!0,!1}),s},getUniqueId:function(){var r=0;return function(){return r++}}(),templatify:function(l){if(this.isFunction(l))return l;var s=i.element(l);return s.prop("tagName")==="SCRIPT"?function(){return s.text()}:function(){return String(l)}},defer:function(r){setTimeout(r,0)},noop:function(){},formatPrefix:function(r,l){return l?"":r+"-"},className:function(r,l,s){return(s?"":".")+r+l},escapeHighlightedString:function(r,l,s){l=l||"<em>";var a=document.createElement("div");a.appendChild(document.createTextNode(l)),s=s||"</em>";var d=document.createElement("div");d.appendChild(document.createTextNode(s));var c=document.createElement("div");return c.appendChild(document.createTextNode(r)),c.innerHTML.replace(RegExp(o(a.innerHTML),"g"),l).replace(RegExp(o(d.innerHTML),"g"),s)}}},function(e,t,n){e.exports={element:null}},function(e,t){var n=Object.prototype.hasOwnProperty,i=Object.prototype.toString;e.exports=function(r,l,s){if(i.call(l)!=="[object Function]")throw new TypeError("iterator must be a function");var a=r.length;if(a===+a)for(var d=0;d<a;d++)l.call(s,r[d],d,r);else for(var c in r)n.call(r,c)&&l.call(s,r[c],c,r)}},function(e,t){e.exports=function(i){return JSON.parse(JSON.stringify(i))}},function(e,t){var n;n=function(){return this}();try{n=n||Function("return this")()||(0,eval)("this")}catch{typeof window=="object"&&(n=window)}e.exports=n},function(e,t,n){var i=n(12);function o(l,s){var a=n(2),d=this;typeof Error.captureStackTrace=="function"?Error.captureStackTrace(this,this.constructor):d.stack=new Error().stack||"Cannot get a stacktrace, browser is too old",this.name="AlgoliaSearchError",this.message=l||"Unknown error",s&&a(s,function(u,h){d[h]=u})}i(o,Error);function r(l,s){function a(){var d=Array.prototype.slice.call(arguments,0);typeof d[0]!="string"&&d.unshift(s),o.apply(this,d),this.name="AlgoliaSearch"+l+"Error"}return i(a,o),a}e.exports={AlgoliaSearchError:o,UnparsableJSON:r("UnparsableJSON","Could not parse the incoming response as JSON, see err.more for details"),RequestTimeout:r("RequestTimeout","Request timedout before getting a response"),Network:r("Network","Network issue, see err.more for details"),JSONPScriptFail:r("JSONPScriptFail","<script> was loaded but did not call our provided callback"),JSONPScriptError:r("JSONPScriptError","<script> unable to load due to an `error` event on it"),Unknown:r("Unknown","Unknown error occurred")}},function(e,t){var n={}.toString;e.exports=Array.isArray||function(i){return n.call(i)=="[object Array]"}},function(e,t,n){var i=n(2);e.exports=function(r,l){var s=[];return i(r,function(a,d){s.push(l(a,d,r))}),s}},function(e,t,n){(function(i){t=e.exports=n(39),t.log=l,t.formatArgs=r,t.save=s,t.load=a,t.useColors=o,t.storage=typeof chrome!="undefined"&&typeof chrome.storage!="undefined"?chrome.storage.local:d(),t.colors=["lightseagreen","forestgreen","goldenrod","dodgerblue","darkorchid","crimson"];function o(){return typeof window!="undefined"&&window.process&&window.process.type==="renderer"?!0:typeof document!="undefined"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window!="undefined"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator!="undefined"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)}t.formatters.j=function(c){try{return JSON.stringify(c)}catch(u){return"[UnexpectedJSONParseError]: "+u.message}};function r(c){var u=this.useColors;if(c[0]=(u?"%c":"")+this.namespace+(u?" %c":" ")+c[0]+(u?"%c ":" ")+"+"+t.humanize(this.diff),!!u){var h="color: "+this.color;c.splice(1,0,h,"color: inherit");var C=0,f=0;c[0].replace(/%[a-zA-Z%]/g,function(p){p!=="%%"&&(C++,p==="%c"&&(f=C))}),c.splice(f,0,h)}}function l(){return typeof console=="object"&&console.log&&Function.prototype.apply.call(console.log,console,arguments)}function s(c){try{c==null?t.storage.removeItem("debug"):t.storage.debug=c}catch{}}function a(){var c;try{c=t.storage.debug}catch{}return!c&&typeof i!="undefined"&&"env"in i&&(c=Object({NODE_ENV:"production"}).DEBUG),c}t.enable(a());function d(){try{return window.localStorage}catch{}}}).call(t,n(9))},function(e,t){var n=e.exports={},i,o;function r(){throw new Error("setTimeout has not been defined")}function l(){throw new Error("clearTimeout has not been defined")}(function(){try{typeof setTimeout=="function"?i=setTimeout:i=r}catch{i=r}try{typeof clearTimeout=="function"?o=clearTimeout:o=l}catch{o=l}})();function s(m){if(i===setTimeout)return setTimeout(m,0);if((i===r||!i)&&setTimeout)return i=setTimeout,setTimeout(m,0);try{return i(m,0)}catch{try{return i.call(null,m,0)}catch{return i.call(this,m,0)}}}function a(m){if(o===clearTimeout)return clearTimeout(m);if((o===l||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(m);try{return o(m)}catch{try{return o.call(null,m)}catch{return o.call(this,m)}}}var d=[],c=!1,u,h=-1;function C(){!c||!u||(c=!1,u.length?d=u.concat(d):h=-1,d.length&&f())}function f(){if(!c){var m=s(C);c=!0;for(var v=d.length;v;){for(u=d,d=[];++h<v;)u&&u[h].run();h=-1,v=d.length}u=null,c=!1,a(m)}}n.nextTick=function(m){var v=new Array(arguments.length-1);if(arguments.length>1)for(var y=1;y<arguments.length;y++)v[y-1]=arguments[y];d.push(new p(m,v)),d.length===1&&!c&&s(f)};function p(m,v){this.fun=m,this.array=v}p.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.browser=!0,n.env={},n.argv=[],n.version="",n.versions={};function g(){}n.on=g,n.addListener=g,n.once=g,n.off=g,n.removeListener=g,n.removeAllListeners=g,n.emit=g,n.prependListener=g,n.prependOnceListener=g,n.listeners=function(m){return[]},n.binding=function(m){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(m){throw new Error("process.chdir is not supported")},n.umask=function(){return 0}},function(e,t,n){var i=n(53),o=/\s+/;e.exports={onSync:s,onAsync:l,off:a,trigger:d};function r(h,C,f,p){var g;if(!f)return this;for(C=C.split(o),f=p?u(f,p):f,this._callbacks=this._callbacks||{};g=C.shift();)this._callbacks[g]=this._callbacks[g]||{sync:[],async:[]},this._callbacks[g][h].push(f);return this}function l(h,C,f){return r.call(this,"async",h,C,f)}function s(h,C,f){return r.call(this,"sync",h,C,f)}function a(h){var C;if(!this._callbacks)return this;for(h=h.split(o);C=h.shift();)delete this._callbacks[C];return this}function d(h){var C,f,p,g,m;if(!this._callbacks)return this;for(h=h.split(o),p=[].slice.call(arguments,1);(C=h.shift())&&(f=this._callbacks[C]);)g=c(f.sync,this,[C].concat(p)),m=c(f.async,this,[C].concat(p)),g()&&i(m);return this}function c(h,C,f){return p;function p(){for(var g,m=0,v=h.length;!g&&m<v;m+=1)g=h[m].apply(C,f)===!1;return!g}}function u(h,C){return h.bind?h.bind(C):function(){h.apply(C,[].slice.call(arguments,0))}}},function(e,t,n){var i=n(0),o={wrapper:{position:"relative",display:"inline-block"},hint:{position:"absolute",top:"0",left:"0",borderColor:"transparent",boxShadow:"none",opacity:"1"},input:{position:"relative",verticalAlign:"top",backgroundColor:"transparent"},inputWithNoHint:{position:"relative",verticalAlign:"top"},dropdown:{position:"absolute",top:"100%",left:"0",zIndex:"100",display:"none"},suggestions:{display:"block"},suggestion:{whiteSpace:"nowrap",cursor:"pointer"},suggestionChild:{whiteSpace:"normal"},ltr:{left:"0",right:"auto"},rtl:{left:"auto",right:"0"},defaultClasses:{root:"algolia-autocomplete",prefix:"aa",noPrefix:!1,dropdownMenu:"dropdown-menu",input:"input",hint:"hint",suggestions:"suggestions",suggestion:"suggestion",cursor:"cursor",dataset:"dataset",empty:"empty"},appendTo:{wrapper:{position:"absolute",zIndex:"100",display:"none"},input:{},inputWithNoHint:{},dropdown:{display:"block"}}};i.isMsie()&&i.mixin(o.input,{backgroundImage:"url(data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7)"}),i.isMsie()&&i.isMsie()<=7&&i.mixin(o.input,{marginTop:"-1px"}),e.exports=o},function(e,t){typeof Object.create=="function"?e.exports=function(i,o){i.super_=o,i.prototype=Object.create(o.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}})}:e.exports=function(i,o){i.super_=o;var r=function(){};r.prototype=o.prototype,i.prototype=new r,i.prototype.constructor=i}},function(e,t,n){e.exports=o;var i=n(5);function o(r,l){return function(a,d,c){if(typeof a=="function"&&typeof d=="object"||typeof c=="object")throw new i.AlgoliaSearchError("index.search usage is index.search(query, params, cb)");arguments.length===0||typeof a=="function"?(c=a,a=""):(arguments.length===1||typeof d=="function")&&(c=d,d=void 0),typeof a=="object"&&a!==null?(d=a,a=void 0):a==null&&(a="");var u="";a!==void 0&&(u+=r+"="+encodeURIComponent(a));var h;return d!==void 0&&(d.additionalUA&&(h=d.additionalUA,delete d.additionalUA),u=this.as._getSearchParams(d,u)),this._search(u,l,c,h)}}},function(e,t,n){e.exports=function(o,r){var l=n(36),s=n(2),a={};return s(l(o),function(c){r(c)!==!0&&(a[c]=o[c])}),a}},function(e,t){(function(n,i){e.exports=i(n)})(window,function(n){var i=function(){var o,r,l,s,a=[],d=a.concat,c=a.filter,u=a.slice,h=n.document,C={},f={},p={"column-count":1,columns:1,"font-weight":1,"line-height":1,opacity:1,"z-index":1,zoom:1},g=/^\s*<(\w+|!)[^>]*>/,m=/^<(\w+)\s*\/?>(?:<\/\1>|)$/,v=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi,y=/^(?:body|html)$/i,x=/([A-Z])/g,L=["val","css","html","text","data","width","height","offset"],H=["after","prepend","before","append"],Z=h.createElement("table"),N=h.createElement("tr"),A={tr:h.createElement("tbody"),tbody:Z,thead:Z,tfoot:Z,td:N,th:N,"*":h.createElement("div")},_=/complete|loaded|interactive/,S=/^[\w-]*$/,B={},D=B.toString,j={},Q,P,F=h.createElement("div"),G={tabindex:"tabIndex",readonly:"readOnly",for:"htmlFor",class:"className",maxlength:"maxLength",cellspacing:"cellSpacing",cellpadding:"cellPadding",rowspan:"rowSpan",colspan:"colSpan",usemap:"useMap",frameborder:"frameBorder",contenteditable:"contentEditable"},d1=Array.isArray||function(w){return w instanceof Array};j.matches=function(w,b){if(!b||!w||w.nodeType!==1)return!1;var E=w.matches||w.webkitMatchesSelector||w.mozMatchesSelector||w.oMatchesSelector||w.matchesSelector;if(E)return E.call(w,b);var $,o1=w.parentNode,t1=!o1;return t1&&(o1=F).appendChild(w),$=~j.qsa(o1,b).indexOf(w),t1&&F.removeChild(w),$};function p1(w){return w==null?String(w):B[D.call(w)]||"object"}function a1(w){return p1(w)=="function"}function c1(w){return w!=null&&w==w.window}function u1(w){return w!=null&&w.nodeType==w.DOCUMENT_NODE}function y1(w){return p1(w)=="object"}function g1(w){return y1(w)&&!c1(w)&&Object.getPrototypeOf(w)==Object.prototype}function v1(w){var b=!!w&&"length"in w&&w.length,E=l.type(w);return E!="function"&&!c1(w)&&(E=="array"||b===0||typeof b=="number"&&b>0&&b-1 in w)}function O(w){return c.call(w,function(b){return b!=null})}function X(w){return w.length>0?l.fn.concat.apply([],w):w}Q=function(w){return w.replace(/-+(.)?/g,function(b,E){return E?E.toUpperCase():""})};function J(w){return w.replace(/::/g,"/").replace(/([A-Z]+)([A-Z][a-z])/g,"$1_$2").replace(/([a-z\d])([A-Z])/g,"$1_$2").replace(/_/g,"-").toLowerCase()}P=function(w){return c.call(w,function(b,E){return w.indexOf(b)==E})};function r1(w){return w in f?f[w]:f[w]=new RegExp("(^|\\s)"+w+"(\\s|$)")}function s1(w,b){return typeof b=="number"&&!p[J(w)]?b+"px":b}function M(w){var b,E;return C[w]||(b=h.createElement(w),h.body.appendChild(b),E=getComputedStyle(b,"").getPropertyValue("display"),b.parentNode.removeChild(b),E=="none"&&(E="block"),C[w]=E),C[w]}function k(w){return"children"in w?u.call(w.children):l.map(w.childNodes,function(b){if(b.nodeType==1)return b})}function I(w,b){var E,$=w?w.length:0;for(E=0;E<$;E++)this[E]=w[E];this.length=$,this.selector=b||""}j.fragment=function(w,b,E){var $,o1,t1;return m.test(w)&&($=l(h.createElement(RegExp.$1))),$||(w.replace&&(w=w.replace(v,"<$1></$2>")),b===o&&(b=g.test(w)&&RegExp.$1),b in A||(b="*"),t1=A[b],t1.innerHTML=""+w,$=l.each(u.call(t1.childNodes),function(){t1.removeChild(this)})),g1(E)&&(o1=l($),l.each(E,function(C1,z){L.indexOf(C1)>-1?o1[C1](z):o1.attr(C1,z)})),$},j.Z=function(w,b){return new I(w,b)},j.isZ=function(w){return w instanceof j.Z},j.init=function(w,b){var E;if(w)if(typeof w=="string")if(w=w.trim(),w[0]=="<"&&g.test(w))E=j.fragment(w,RegExp.$1,b),w=null;else{if(b!==o)return l(b).find(w);E=j.qsa(h,w)}else{if(a1(w))return l(h).ready(w);if(j.isZ(w))return w;if(d1(w))E=O(w);else if(y1(w))E=[w],w=null;else if(g.test(w))E=j.fragment(w.trim(),RegExp.$1,b),w=null;else{if(b!==o)return l(b).find(w);E=j.qsa(h,w)}}else return j.Z();return j.Z(E,w)},l=function(w,b){return j.init(w,b)};function R(w,b,E){for(r in b)E&&(g1(b[r])||d1(b[r]))?(g1(b[r])&&!g1(w[r])&&(w[r]={}),d1(b[r])&&!d1(w[r])&&(w[r]=[]),R(w[r],b[r],E)):b[r]!==o&&(w[r]=b[r])}l.extend=function(w){var b,E=u.call(arguments,1);return typeof w=="boolean"&&(b=w,w=E.shift()),E.forEach(function($){R(w,$,b)}),w},j.qsa=function(w,b){var E,$=b[0]=="#",o1=!$&&b[0]==".",t1=$||o1?b.slice(1):b,C1=S.test(t1);return w.getElementById&&C1&&$?(E=w.getElementById(t1))?[E]:[]:w.nodeType!==1&&w.nodeType!==9&&w.nodeType!==11?[]:u.call(C1&&!$&&w.getElementsByClassName?o1?w.getElementsByClassName(t1):w.getElementsByTagName(b):w.querySelectorAll(b))};function U(w,b){return b==null?l(w):l(w).filter(b)}l.contains=h.documentElement.contains?function(w,b){return w!==b&&w.contains(b)}:function(w,b){for(;b&&(b=b.parentNode);)if(b===w)return!0;return!1};function q(w,b,E,$){return a1(b)?b.call(w,E,$):b}function l1(w,b,E){E==null?w.removeAttribute(b):w.setAttribute(b,E)}function e1(w,b){var E=w.className||"",$=E&&E.baseVal!==o;if(b===o)return $?E.baseVal:E;$?E.baseVal=b:w.className=b}function i1(w){try{return w&&(w=="true"||(w=="false"?!1:w=="null"?null:+w+""==w?+w:/^[\[\{]/.test(w)?l.parseJSON(w):w))}catch{return w}}l.type=p1,l.isFunction=a1,l.isWindow=c1,l.isArray=d1,l.isPlainObject=g1,l.isEmptyObject=function(w){var b;for(b in w)return!1;return!0},l.isNumeric=function(w){var b=Number(w),E=typeof w;return w!=null&&E!="boolean"&&(E!="string"||w.length)&&!isNaN(b)&&isFinite(b)||!1},l.inArray=function(w,b,E){return a.indexOf.call(b,w,E)},l.camelCase=Q,l.trim=function(w){return w==null?"":String.prototype.trim.call(w)},l.uuid=0,l.support={},l.expr={},l.noop=function(){},l.map=function(w,b){var E,$=[],o1,t1;if(v1(w))for(o1=0;o1<w.length;o1++)E=b(w[o1],o1),E!=null&&$.push(E);else for(t1 in w)E=b(w[t1],t1),E!=null&&$.push(E);return X($)},l.each=function(w,b){var E,$;if(v1(w)){for(E=0;E<w.length;E++)if(b.call(w[E],E,w[E])===!1)return w}else for($ in w)if(b.call(w[$],$,w[$])===!1)return w;return w},l.grep=function(w,b){return c.call(w,b)},n.JSON&&(l.parseJSON=JSON.parse),l.each("Boolean Number String Function Array Date RegExp Object Error".split(" "),function(w,b){B["[object "+b+"]"]=b.toLowerCase()}),l.fn={constructor:j.Z,length:0,forEach:a.forEach,reduce:a.reduce,push:a.push,sort:a.sort,splice:a.splice,indexOf:a.indexOf,concat:function(){var w,b,E=[];for(w=0;w<arguments.length;w++)b=arguments[w],E[w]=j.isZ(b)?b.toArray():b;return d.apply(j.isZ(this)?this.toArray():this,E)},map:function(w){return l(l.map(this,function(b,E){return w.call(b,E,b)}))},slice:function(){return l(u.apply(this,arguments))},ready:function(w){return _.test(h.readyState)&&h.body?w(l):h.addEventListener("DOMContentLoaded",function(){w(l)},!1),this},get:function(w){return w===o?u.call(this):this[w>=0?w:w+this.length]},toArray:function(){return this.get()},size:function(){return this.length},remove:function(){return this.each(function(){this.parentNode!=null&&this.parentNode.removeChild(this)})},each:function(w){return a.every.call(this,function(b,E){return w.call(b,E,b)!==!1}),this},filter:function(w){return a1(w)?this.not(this.not(w)):l(c.call(this,function(b){return j.matches(b,w)}))},add:function(w,b){return l(P(this.concat(l(w,b))))},is:function(w){return this.length>0&&j.matches(this[0],w)},not:function(w){var b=[];if(a1(w)&&w.call!==o)this.each(function($){w.call(this,$)||b.push(this)});else{var E=typeof w=="string"?this.filter(w):v1(w)&&a1(w.item)?u.call(w):l(w);this.forEach(function($){E.indexOf($)<0&&b.push($)})}return l(b)},has:function(w){return this.filter(function(){return y1(w)?l.contains(this,w):l(this).find(w).size()})},eq:function(w){return w===-1?this.slice(w):this.slice(w,+w+1)},first:function(){var w=this[0];return w&&!y1(w)?w:l(w)},last:function(){var w=this[this.length-1];return w&&!y1(w)?w:l(w)},find:function(w){var b,E=this;return w?typeof w=="object"?b=l(w).filter(function(){var $=this;return a.some.call(E,function(o1){return l.contains(o1,$)})}):this.length==1?b=l(j.qsa(this[0],w)):b=this.map(function(){return j.qsa(this,w)}):b=l(),b},closest:function(w,b){var E=[],$=typeof w=="object"&&l(w);return this.each(function(o1,t1){for(;t1&&!($?$.indexOf(t1)>=0:j.matches(t1,w));)t1=t1!==b&&!u1(t1)&&t1.parentNode;t1&&E.indexOf(t1)<0&&E.push(t1)}),l(E)},parents:function(w){for(var b=[],E=this;E.length>0;)E=l.map(E,function($){if(($=$.parentNode)&&!u1($)&&b.indexOf($)<0)return b.push($),$});return U(b,w)},parent:function(w){return U(P(this.pluck("parentNode")),w)},children:function(w){return U(this.map(function(){return k(this)}),w)},contents:function(){return this.map(function(){return this.contentDocument||u.call(this.childNodes)})},siblings:function(w){return U(this.map(function(b,E){return c.call(k(E.parentNode),function($){return $!==E})}),w)},empty:function(){return this.each(function(){this.innerHTML=""})},pluck:function(w){return l.map(this,function(b){return b[w]})},show:function(){return this.each(function(){this.style.display=="none"&&(this.style.display=""),getComputedStyle(this,"").getPropertyValue("display")=="none"&&(this.style.display=M(this.nodeName))})},replaceWith:function(w){return this.before(w).remove()},wrap:function(w){var b=a1(w);if(this[0]&&!b)var E=l(w).get(0),$=E.parentNode||this.length>1;return this.each(function(o1){l(this).wrapAll(b?w.call(this,o1):$?E.cloneNode(!0):E)})},wrapAll:function(w){if(this[0]){l(this[0]).before(w=l(w));for(var b;(b=w.children()).length;)w=b.first();l(w).append(this)}return this},wrapInner:function(w){var b=a1(w);return this.each(function(E){var $=l(this),o1=$.contents(),t1=b?w.call(this,E):w;o1.length?o1.wrapAll(t1):$.append(t1)})},unwrap:function(){return this.parent().each(function(){l(this).replaceWith(l(this).children())}),this},clone:function(){return this.map(function(){return this.cloneNode(!0)})},hide:function(){return this.css("display","none")},toggle:function(w){return this.each(function(){var b=l(this);(w===o?b.css("display")=="none":w)?b.show():b.hide()})},prev:function(w){return l(this.pluck("previousElementSibling")).filter(w||"*")},next:function(w){return l(this.pluck("nextElementSibling")).filter(w||"*")},html:function(w){return 0 in arguments?this.each(function(b){var E=this.innerHTML;l(this).empty().append(q(this,w,b,E))}):0 in this?this[0].innerHTML:null},text:function(w){return 0 in arguments?this.each(function(b){var E=q(this,w,b,this.textContent);this.textContent=E==null?"":""+E}):0 in this?this.pluck("textContent").join(""):null},attr:function(w,b){var E;return typeof w=="string"&&!(1 in arguments)?0 in this&&this[0].nodeType==1&&(E=this[0].getAttribute(w))!=null?E:o:this.each(function($){if(this.nodeType===1)if(y1(w))for(r in w)l1(this,r,w[r]);else l1(this,w,q(this,b,$,this.getAttribute(w)))})},removeAttr:function(w){return this.each(function(){this.nodeType===1&&w.split(" ").forEach(function(b){l1(this,b)},this)})},prop:function(w,b){return w=G[w]||w,1 in arguments?this.each(function(E){this[w]=q(this,b,E,this[w])}):this[0]&&this[0][w]},removeProp:function(w){return w=G[w]||w,this.each(function(){delete this[w]})},data:function(w,b){var E="data-"+w.replace(x,"-$1").toLowerCase(),$=1 in arguments?this.attr(E,b):this.attr(E);return $!==null?i1($):o},val:function(w){return 0 in arguments?(w==null&&(w=""),this.each(function(b){this.value=q(this,w,b,this.value)})):this[0]&&(this[0].multiple?l(this[0]).find("option").filter(function(){return this.selected}).pluck("value"):this[0].value)},offset:function(w){if(w)return this.each(function(E){var $=l(this),o1=q(this,w,E,$.offset()),t1=$.offsetParent().offset(),C1={top:o1.top-t1.top,left:o1.left-t1.left};$.css("position")=="static"&&(C1.position="relative"),$.css(C1)});if(!this.length)return null;if(h.documentElement!==this[0]&&!l.contains(h.documentElement,this[0]))return{top:0,left:0};var b=this[0].getBoundingClientRect();return{left:b.left+n.pageXOffset,top:b.top+n.pageYOffset,width:Math.round(b.width),height:Math.round(b.height)}},css:function(w,b){if(arguments.length<2){var E=this[0];if(typeof w=="string")return E?E.style[Q(w)]||getComputedStyle(E,"").getPropertyValue(w):void 0;if(d1(w)){if(!E)return;var $={},o1=getComputedStyle(E,"");return l.each(w,function(C1,z){$[z]=E.style[Q(z)]||o1.getPropertyValue(z)}),$}}var t1="";if(p1(w)=="string")!b&&b!==0?this.each(function(){this.style.removeProperty(J(w))}):t1=J(w)+":"+s1(w,b);else for(r in w)!w[r]&&w[r]!==0?this.each(function(){this.style.removeProperty(J(r))}):t1+=J(r)+":"+s1(r,w[r])+";";return this.each(function(){this.style.cssText+=";"+t1})},index:function(w){return w?this.indexOf(l(w)[0]):this.parent().children().indexOf(this[0])},hasClass:function(w){return w?a.some.call(this,function(b){return this.test(e1(b))},r1(w)):!1},addClass:function(w){return w?this.each(function(b){if("className"in this){s=[];var E=e1(this),$=q(this,w,b,E);$.split(/\s+/g).forEach(function(o1){l(this).hasClass(o1)||s.push(o1)},this),s.length&&e1(this,E+(E?" ":"")+s.join(" "))}}):this},removeClass:function(w){return this.each(function(b){if("className"in this){if(w===o)return e1(this,"");s=e1(this),q(this,w,b,s).split(/\s+/g).forEach(function(E){s=s.replace(r1(E)," ")}),e1(this,s.trim())}})},toggleClass:function(w,b){return w?this.each(function(E){var $=l(this),o1=q(this,w,E,e1(this));o1.split(/\s+/g).forEach(function(t1){(b===o?!$.hasClass(t1):b)?$.addClass(t1):$.removeClass(t1)})}):this},scrollTop:function(w){if(!!this.length){var b="scrollTop"in this[0];return w===o?b?this[0].scrollTop:this[0].pageYOffset:this.each(b?function(){this.scrollTop=w}:function(){this.scrollTo(this.scrollX,w)})}},scrollLeft:function(w){if(!!this.length){var b="scrollLeft"in this[0];return w===o?b?this[0].scrollLeft:this[0].pageXOffset:this.each(b?function(){this.scrollLeft=w}:function(){this.scrollTo(w,this.scrollY)})}},position:function(){if(!!this.length){var w=this[0],b=this.offsetParent(),E=this.offset(),$=y.test(b[0].nodeName)?{top:0,left:0}:b.offset();return E.top-=parseFloat(l(w).css("margin-top"))||0,E.left-=parseFloat(l(w).css("margin-left"))||0,$.top+=parseFloat(l(b[0]).css("border-top-width"))||0,$.left+=parseFloat(l(b[0]).css("border-left-width"))||0,{top:E.top-$.top,left:E.left-$.left}}},offsetParent:function(){return this.map(function(){for(var w=this.offsetParent||h.body;w&&!y.test(w.nodeName)&&l(w).css("position")=="static";)w=w.offsetParent;return w})}},l.fn.detach=l.fn.remove,["width","height"].forEach(function(w){var b=w.replace(/./,function(E){return E[0].toUpperCase()});l.fn[w]=function(E){var $,o1=this[0];return E===o?c1(o1)?o1["inner"+b]:u1(o1)?o1.documentElement["scroll"+b]:($=this.offset())&&$[w]:this.each(function(t1){o1=l(this),o1.css(w,q(this,E,t1,o1[w]()))})}});function Y(w,b){b(w);for(var E=0,$=w.childNodes.length;E<$;E++)Y(w.childNodes[E],b)}return H.forEach(function(w,b){var E=b%2;l.fn[w]=function(){var $,o1=l.map(arguments,function(z){var W=[];return $=p1(z),$=="array"?(z.forEach(function(n1){if(n1.nodeType!==o)return W.push(n1);if(l.zepto.isZ(n1))return W=W.concat(n1.get());W=W.concat(j.fragment(n1))}),W):$=="object"||z==null?z:j.fragment(z)}),t1,C1=this.length>1;return o1.length<1?this:this.each(function(z,W){t1=E?W:W.parentNode,W=b==0?W.nextSibling:b==1?W.firstChild:b==2?W:null;var n1=l.contains(h.documentElement,t1);o1.forEach(function(f1){if(C1)f1=f1.cloneNode(!0);else if(!t1)return l(f1).remove();t1.insertBefore(f1,W),n1&&Y(f1,function(h1){if(h1.nodeName!=null&&h1.nodeName.toUpperCase()==="SCRIPT"&&(!h1.type||h1.type==="text/javascript")&&!h1.src){var m1=h1.ownerDocument?h1.ownerDocument.defaultView:n;m1.eval.call(m1,h1.innerHTML)}})})})},l.fn[E?w+"To":"insert"+(b?"Before":"After")]=function($){return l($)[w](this),this}}),j.Z.prototype=I.prototype=l.fn,j.uniq=P,j.deserializeValue=i1,l.zepto=j,l}();return function(o){var r=1,l,s=Array.prototype.slice,a=o.isFunction,d=function(D){return typeof D=="string"},c={},u={},h="onfocusin"in n,C={focus:"focusin",blur:"focusout"},f={mouseenter:"mouseover",mouseleave:"mouseout"};u.click=u.mousedown=u.mouseup=u.mousemove="MouseEvents";function p(D){return D._zid||(D._zid=r++)}function g(D,j,Q,P){if(j=m(j),j.ns)var F=v(j.ns);return(c[p(D)]||[]).filter(function(G){return G&&(!j.e||G.e==j.e)&&(!j.ns||F.test(G.ns))&&(!Q||p(G.fn)===p(Q))&&(!P||G.sel==P)})}function m(D){var j=(""+D).split(".");return{e:j[0],ns:j.slice(1).sort().join(" ")}}function v(D){return new RegExp("(?:^| )"+D.replace(" "," .* ?")+"(?: |$)")}function y(D,j){return D.del&&!h&&D.e in C||!!j}function x(D){return f[D]||h&&C[D]||D}function L(D,j,Q,P,F,G,d1){var p1=p(D),a1=c[p1]||(c[p1]=[]);j.split(/\s/).forEach(function(c1){if(c1=="ready")return o(document).ready(Q);var u1=m(c1);u1.fn=Q,u1.sel=F,u1.e in f&&(Q=function(g1){var v1=g1.relatedTarget;if(!v1||v1!==this&&!o.contains(this,v1))return u1.fn.apply(this,arguments)}),u1.del=G;var y1=G||Q;u1.proxy=function(g1){if(g1=S(g1),!g1.isImmediatePropagationStopped()){try{var v1=Object.getOwnPropertyDescriptor(g1,"data");(!v1||v1.writable)&&(g1.data=P)}catch{}var O=y1.apply(D,g1._args==l?[g1]:[g1].concat(g1._args));return O===!1&&(g1.preventDefault(),g1.stopPropagation()),O}},u1.i=a1.length,a1.push(u1),"addEventListener"in D&&D.addEventListener(x(u1.e),u1.proxy,y(u1,d1))})}function H(D,j,Q,P,F){var G=p(D);(j||"").split(/\s/).forEach(function(d1){g(D,d1,Q,P).forEach(function(p1){delete c[G][p1.i],"removeEventListener"in D&&D.removeEventListener(x(p1.e),p1.proxy,y(p1,F))})})}o.event={add:L,remove:H},o.proxy=function(D,j){var Q=2 in arguments&&s.call(arguments,2);if(a(D)){var P=function(){return D.apply(j,Q?Q.concat(s.call(arguments)):arguments)};return P._zid=p(D),P}else{if(d(j))return Q?(Q.unshift(D[j],D),o.proxy.apply(null,Q)):o.proxy(D[j],D);throw new TypeError("expected function")}},o.fn.bind=function(D,j,Q){return this.on(D,j,Q)},o.fn.unbind=function(D,j){return this.off(D,j)},o.fn.one=function(D,j,Q,P){return this.on(D,j,Q,P,1)};var Z=function(){return!0},N=function(){return!1},A=/^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,_={preventDefault:"isDefaultPrevented",stopImmediatePropagation:"isImmediatePropagationStopped",stopPropagation:"isPropagationStopped"};function S(D,j){return(j||!D.isDefaultPrevented)&&(j||(j=D),o.each(_,function(Q,P){var F=j[Q];D[Q]=function(){return this[P]=Z,F&&F.apply(j,arguments)},D[P]=N}),D.timeStamp||(D.timeStamp=Date.now()),(j.defaultPrevented!==l?j.defaultPrevented:"returnValue"in j?j.returnValue===!1:j.getPreventDefault&&j.getPreventDefault())&&(D.isDefaultPrevented=Z)),D}function B(D){var j,Q={originalEvent:D};for(j in D)!A.test(j)&&D[j]!==l&&(Q[j]=D[j]);return S(Q,D)}o.fn.delegate=function(D,j,Q){return this.on(j,D,Q)},o.fn.undelegate=function(D,j,Q){return this.off(j,D,Q)},o.fn.live=function(D,j){return o(document.body).delegate(this.selector,D,j),this},o.fn.die=function(D,j){return o(document.body).undelegate(this.selector,D,j),this},o.fn.on=function(D,j,Q,P,F){var G,d1,p1=this;return D&&!d(D)?(o.each(D,function(a1,c1){p1.on(a1,j,Q,c1,F)}),p1):(!d(j)&&!a(P)&&P!==!1&&(P=Q,Q=j,j=l),(P===l||Q===!1)&&(P=Q,Q=l),P===!1&&(P=N),p1.each(function(a1,c1){F&&(G=function(u1){return H(c1,u1.type,P),P.apply(this,arguments)}),j&&(d1=function(u1){var y1,g1=o(u1.target).closest(j,c1).get(0);if(g1&&g1!==c1)return y1=o.extend(B(u1),{currentTarget:g1,liveFired:c1}),(G||P).apply(g1,[y1].concat(s.call(arguments,1)))}),L(c1,D,P,Q,j,d1||G)}))},o.fn.off=function(D,j,Q){var P=this;return D&&!d(D)?(o.each(D,function(F,G){P.off(F,j,G)}),P):(!d(j)&&!a(Q)&&Q!==!1&&(Q=j,j=l),Q===!1&&(Q=N),P.each(function(){H(this,D,Q,j)}))},o.fn.trigger=function(D,j){return D=d(D)||o.isPlainObject(D)?o.Event(D):S(D),D._args=j,this.each(function(){D.type in C&&typeof this[D.type]=="function"?this[D.type]():"dispatchEvent"in this?this.dispatchEvent(D):o(this).triggerHandler(D,j)})},o.fn.triggerHandler=function(D,j){var Q,P;return this.each(function(F,G){Q=B(d(D)?o.Event(D):D),Q._args=j,Q.target=G,o.each(g(G,D.type||D),function(d1,p1){if(P=p1.proxy(Q),Q.isImmediatePropagationStopped())return!1})}),P},"focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(D){o.fn[D]=function(j){return 0 in arguments?this.bind(D,j):this.trigger(D)}}),o.Event=function(D,j){d(D)||(j=D,D=j.type);var Q=document.createEvent(u[D]||"Events"),P=!0;if(j)for(var F in j)F=="bubbles"?P=!!j[F]:Q[F]=j[F];return Q.initEvent(D,P,!0),S(Q)}}(i),function(o){var r=[],l;o.fn.remove=function(){return this.each(function(){this.parentNode&&(this.tagName==="IMG"&&(r.push(this),this.src="data:image/gif;base64,R0lGODlhAQABAAD/ACwAAAAAAQABAAACADs=",l&&clearTimeout(l),l=setTimeout(function(){r=[]},6e4)),this.parentNode.removeChild(this))})}}(i),function(o){var r={},l=o.fn.data,s=o.camelCase,a=o.expando="Zepto"+ +new Date,d=[];function c(C,f){var p=C[a],g=p&&r[p];if(f===void 0)return g||u(C);if(g){if(f in g)return g[f];var m=s(f);if(m in g)return g[m]}return l.call(o(C),f)}function u(C,f,p){var g=C[a]||(C[a]=++o.uuid),m=r[g]||(r[g]=h(C));return f!==void 0&&(m[s(f)]=p),m}function h(C){var f={};return o.each(C.attributes||d,function(p,g){g.name.indexOf("data-")==0&&(f[s(g.name.replace("data-",""))]=o.zepto.deserializeValue(g.value))}),f}o.fn.data=function(C,f){return f===void 0?o.isPlainObject(C)?this.each(function(p,g){o.each(C,function(m,v){u(g,m,v)})}):0 in this?c(this[0],C):void 0:this.each(function(){u(this,C,f)})},o.data=function(C,f,p){return o(C).data(f,p)},o.hasData=function(C){var f=C[a],p=f&&r[f];return p?!o.isEmptyObject(p):!1},o.fn.removeData=function(C){return typeof C=="string"&&(C=C.split(/\s+/)),this.each(function(){var f=this[a],p=f&&r[f];p&&o.each(C||p,function(g){delete p[C?s(this):g]})})},["remove","empty"].forEach(function(C){var f=o.fn[C];o.fn[C]=function(){var p=this.find("*");return C==="remove"&&(p=p.add(this)),p.removeData(),f.call(this)}})}(i),i})},function(e,t,n){var i="autocomplete:",o=n(0),r=n(1);function l(s){(!s||!s.el)&&o.error("EventBus initialized without el"),this.$el=r.element(s.el)}o.mixin(l.prototype,{trigger:function(s,a,d,c){var u=o.Event(i+s);return this.$el.trigger(u,[a,d,c]),u}}),e.exports=l},function(e,t,n){e.exports={wrapper:'<span class="%ROOT%"></span>',dropdown:'<span class="%PREFIX%%DROPDOWN_MENU%"></span>',dataset:'<div class="%PREFIX%%DATASET%-%CLASS%"></div>',suggestions:'<span class="%PREFIX%%SUGGESTIONS%"></span>',suggestion:'<div class="%PREFIX%%SUGGESTION%"></div>'}},function(e,t){e.exports="0.36.0"},function(e,t,n){e.exports=function(o){var r=o.match(/Algolia for vanilla JavaScript (\d+\.)(\d+\.)(\d+)/);if(r)return[r[1],r[2],r[3]]}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var i=n(15),o=r(i);function r(l){return l&&l.__esModule?l:{default:l}}t.default=o.default},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0}),t.default="2.6.3"},function(e,t,n){var i=n(23),o=r(i);function r(l){return l&&l.__esModule?l:{default:l}}e.exports=o.default},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var i=n(24),o=d(i),r=n(25),l=d(r),s=n(21),a=d(s);function d(u){return u&&u.__esModule?u:{default:u}}var c=(0,o.default)(l.default);c.version=a.default,t.default=c},function(e,t,n){var i=Function.prototype.bind;function o(r){var l=function(){for(var a=arguments.length,d=Array(a),c=0;c<a;c++)d[c]=arguments[c];return new(i.apply(r,[null].concat(d)))};return l.__proto__=r,l.prototype=r.prototype,l}e.exports=o},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var i=Object.assign||function(Z){for(var N=1;N<arguments.length;N++){var A=arguments[N];for(var _ in A)Object.prototype.hasOwnProperty.call(A,_)&&(Z[_]=A[_])}return Z},o=function(){function Z(N,A){for(var _=0;_<A.length;_++){var S=A[_];S.enumerable=S.enumerable||!1,S.configurable=!0,"value"in S&&(S.writable=!0),Object.defineProperty(N,S.key,S)}}return function(N,A,_){return A&&Z(N.prototype,A),_&&Z(N,_),N}}(),r=n(26),l=y(r),s=n(29),a=y(s),d=n(49),c=y(d),u=n(64),h=y(u),C=n(65),f=y(C),p=n(21),g=y(p),m=n(20),v=y(m);function y(Z){return Z&&Z.__esModule?Z:{default:Z}}function x(Z,N){if(!(Z instanceof N))throw new TypeError("Cannot call a class as a function")}var L=`Usage:
  documentationSearch({
  apiKey,
  indexName,
  inputSelector,
  [ appId ],
  [ algoliaOptions.{hitsPerPage} ]
  [ autocompleteOptions.{hint,debug} ]
})`,H=function(){function Z(N){var A=N.apiKey,_=N.indexName,S=N.inputSelector,B=N.appId,D=B===void 0?"BH4D9OD16A":B,j=N.debug,Q=j===void 0?!1:j,P=N.algoliaOptions,F=P===void 0?{}:P,G=N.queryDataCallback,d1=G===void 0?null:G,p1=N.autocompleteOptions,a1=p1===void 0?{debug:!1,hint:!1,autoselect:!0}:p1,c1=N.transformData,u1=c1===void 0?!1:c1,y1=N.queryHook,g1=y1===void 0?!1:y1,v1=N.handleSelected,O=v1===void 0?!1:v1,X=N.enhancedSearchInput,J=X===void 0?!1:X,r1=N.layout,s1=r1===void 0?"collumns":r1;x(this,Z),Z.checkArguments({apiKey:A,indexName:_,inputSelector:S,debug:Q,algoliaOptions:F,queryDataCallback:d1,autocompleteOptions:a1,transformData:u1,queryHook:g1,handleSelected:O,enhancedSearchInput:J,layout:s1}),this.apiKey=A,this.appId=D,this.indexName=_,this.input=Z.getInputFromSelector(S),this.algoliaOptions=i({hitsPerPage:5},F),this.queryDataCallback=d1||null;var M=a1&&a1.debug?a1.debug:!1;a1.debug=Q||M,this.autocompleteOptions=a1,this.autocompleteOptions.cssClasses=this.autocompleteOptions.cssClasses||{},this.autocompleteOptions.cssClasses.prefix=this.autocompleteOptions.cssClasses.prefix||"ds";var k=this.input&&typeof this.input.attr=="function"&&this.input.attr("aria-label");this.autocompleteOptions.ariaLabel=this.autocompleteOptions.ariaLabel||k||"search input",this.isSimpleLayout=s1==="simple",this.client=(0,a.default)(this.appId,this.apiKey),this.client.addAlgoliaAgent("docsearch.js "+g.default),J&&(this.input=Z.injectSearchBox(this.input)),this.autocomplete=(0,c.default)(this.input,a1,[{source:this.getAutocompleteSource(u1,g1),templates:{suggestion:Z.getSuggestionTemplate(this.isSimpleLayout),footer:h.default.footer,empty:Z.getEmptyTemplate()}}]);var I=O;this.handleSelected=I||this.handleSelected,I&&(0,v.default)(".algolia-autocomplete").on("click",".ds-suggestions a",function(R){R.preventDefault()}),this.autocomplete.on("autocomplete:selected",this.handleSelected.bind(null,this.autocomplete.autocomplete)),this.autocomplete.on("autocomplete:shown",this.handleShown.bind(null,this.input)),J&&Z.bindSearchBoxEvent()}return o(Z,[{key:"getAutocompleteSource",value:function(A,_){var S=this;return function(B,D){_&&(B=_(B)||B),S.client.search([{indexName:S.indexName,query:B,params:S.algoliaOptions}]).then(function(j){S.queryDataCallback&&typeof S.queryDataCallback=="function"&&S.queryDataCallback(j);var Q=j.results[0].hits;A&&(Q=A(Q)||Q),D(Z.formatHits(Q))})}}},{key:"handleSelected",value:function(A,_,S,B){var D=arguments.length>4&&arguments[4]!==void 0?arguments[4]:{};D.selectionMethod!=="click"&&(A.setVal(""),window.location.assign(S.url))}},{key:"handleShown",value:function(A){var _=A.offset().left+A.width()/2,S=(0,v.default)(document).width()/2;isNaN(S)&&(S=900);var B=_-S>=0?"algolia-autocomplete-right":"algolia-autocomplete-left",D=_-S<0?"algolia-autocomplete-right":"algolia-autocomplete-left",j=(0,v.default)(".algolia-autocomplete");j.hasClass(B)||j.addClass(B),j.hasClass(D)&&j.removeClass(D)}}],[{key:"checkArguments",value:function(A){if(!A.apiKey||!A.indexName)throw new Error(L);if(typeof A.inputSelector!="string")throw new Error("Error: inputSelector:"+A.inputSelector+"  must be a string. Each selector must match only one element and separated by ','");if(!Z.getInputFromSelector(A.inputSelector))throw new Error("Error: No input element in the page matches "+A.inputSelector)}},{key:"injectSearchBox",value:function(A){A.before(h.default.searchBox);var _=A.prev().prev().find("input");return A.remove(),_}},{key:"bindSearchBoxEvent",value:function(){(0,v.default)('.searchbox [type="reset"]').on("click",function(){(0,v.default)("input#docsearch").focus(),(0,v.default)(this).addClass("hide"),c.default.autocomplete.setVal("")}),(0,v.default)("input#docsearch").on("keyup",function(){var A=document.querySelector("input#docsearch"),_=document.querySelector('.searchbox [type="reset"]');_.className="searchbox__reset",A.value.length===0&&(_.className+=" hide")})}},{key:"getInputFromSelector",value:function(A){var _=(0,v.default)(A).filter("input");return _.length?(0,v.default)(_[0]):null}},{key:"formatHits",value:function(A){var _=f.default.deepClone(A),S=_.map(function(D){return D._highlightResult&&(D._highlightResult=f.default.mergeKeyWithParent(D._highlightResult,"hierarchy")),f.default.mergeKeyWithParent(D,"hierarchy")}),B=f.default.groupBy(S,"lvl0");return v.default.each(B,function(D,j){var Q=f.default.groupBy(j,"lvl1"),P=f.default.flattenAndFlagFirst(Q,"isSubCategoryHeader");B[D]=P}),B=f.default.flattenAndFlagFirst(B,"isCategoryHeader"),B.map(function(D){var j=Z.formatURL(D),Q=f.default.getHighlightedValue(D,"lvl0"),P=f.default.getHighlightedValue(D,"lvl1")||Q,F=f.default.compact([f.default.getHighlightedValue(D,"lvl2")||P,f.default.getHighlightedValue(D,"lvl3"),f.default.getHighlightedValue(D,"lvl4"),f.default.getHighlightedValue(D,"lvl5"),f.default.getHighlightedValue(D,"lvl6")]).join('<span class="aa-suggestion-title-separator" aria-hidden="true"> \u203A </span>'),G=f.default.getSnippetedValue(D,"content"),d1=P&&P!==""||F&&F!=="",p1=!P||P===""||P===Q,a1=F&&F!==""&&F!==P,c1=!a1&&P&&P!==""&&P!==Q,u1=!c1&&!a1;return{isLvl0:u1,isLvl1:c1,isLvl2:a1,isLvl1EmptyOrDuplicate:p1,isCategoryHeader:D.isCategoryHeader,isSubCategoryHeader:D.isSubCategoryHeader,isTextOrSubcategoryNonEmpty:d1,category:Q,subcategory:P,title:F,text:G,url:j}})}},{key:"formatURL",value:function(A){var _=A.url,S=A.anchor;if(_){var B=_.indexOf("#")!==-1;return B?_:S?A.url+"#"+A.anchor:_}else if(S)return"#"+A.anchor;return console.warn("no anchor nor url for : ",JSON.stringify(A)),null}},{key:"getEmptyTemplate",value:function(){return function(A){return l.default.compile(h.default.empty).render(A)}}},{key:"getSuggestionTemplate",value:function(A){var _=A?h.default.suggestionSimple:h.default.suggestion,S=l.default.compile(_);return function(B){return S.render(B)}}}]),Z}();t.default=H},function(e,t,n){var i=n(27);i.Template=n(28).Template,i.template=i.Template,e.exports=i},function(e,t,n){(function(i){var o=/\S/,r=/\"/g,l=/\n/g,s=/\r/g,a=/\\/g,d=/\u2028/,c=/\u2029/;i.tags={"#":1,"^":2,"<":3,$:4,"/":5,"!":6,">":7,"=":8,_v:9,"{":10,"&":11,_t:12},i.scan=function(S,B){var D=S.length,j=0,Q=1,P=2,F=j,G=null,d1=null,p1="",a1=[],c1=!1,u1=0,y1=0,g1="{{",v1="}}";function O(){p1.length>0&&(a1.push({tag:"_t",text:new String(p1)}),p1="")}function X(){for(var s1=!0,M=y1;M<a1.length;M++)if(s1=i.tags[a1[M].tag]<i.tags._v||a1[M].tag=="_t"&&a1[M].text.match(o)===null,!s1)return!1;return s1}function J(s1,M){if(O(),s1&&X())for(var k=y1,I;k<a1.length;k++)a1[k].text&&((I=a1[k+1])&&I.tag==">"&&(I.indent=a1[k].text.toString()),a1.splice(k,1));else M||a1.push({tag:`
`});c1=!1,y1=a1.length}function r1(s1,M){var k="="+v1,I=s1.indexOf(k,M),R=h(s1.substring(s1.indexOf("=",M)+1,I)).split(" ");return g1=R[0],v1=R[R.length-1],I+k.length-1}for(B&&(B=B.split(" "),g1=B[0],v1=B[1]),u1=0;u1<D;u1++)F==j?C(g1,S,u1)?(--u1,O(),F=Q):S.charAt(u1)==`
`?J(c1):p1+=S.charAt(u1):F==Q?(u1+=g1.length-1,d1=i.tags[S.charAt(u1+1)],G=d1?S.charAt(u1+1):"_v",G=="="?(u1=r1(S,u1),F=j):(d1&&u1++,F=P),c1=u1):C(v1,S,u1)?(a1.push({tag:G,n:h(p1),otag:g1,ctag:v1,i:G=="/"?c1-g1.length:u1+v1.length}),p1="",u1+=v1.length-1,F=j,G=="{"&&(v1=="}}"?u1++:u(a1[a1.length-1]))):p1+=S.charAt(u1);return J(c1,!0),a1};function u(_){_.n.substr(_.n.length-1)==="}"&&(_.n=_.n.substring(0,_.n.length-1))}function h(_){return _.trim?_.trim():_.replace(/^\s*|\s*$/g,"")}function C(_,S,B){if(S.charAt(B)!=_.charAt(0))return!1;for(var D=1,j=_.length;D<j;D++)if(S.charAt(B+D)!=_.charAt(D))return!1;return!0}var f={_t:!0,"\n":!0,$:!0,"/":!0};function p(_,S,B,D){var j=[],Q=null,P=null,F=null;for(P=B[B.length-1];_.length>0;){if(F=_.shift(),P&&P.tag=="<"&&!(F.tag in f))throw new Error("Illegal content in < super tag.");if(i.tags[F.tag]<=i.tags.$||g(F,D))B.push(F),F.nodes=p(_,F.tag,B,D);else if(F.tag=="/"){if(B.length===0)throw new Error("Closing tag without opener: /"+F.n);if(Q=B.pop(),F.n!=Q.n&&!m(F.n,Q.n,D))throw new Error("Nesting error: "+Q.n+" vs. "+F.n);return Q.end=F.i,j}else F.tag==`
`&&(F.last=_.length==0||_[0].tag==`
`);j.push(F)}if(B.length>0)throw new Error("missing closing tag: "+B.pop().n);return j}function g(_,S){for(var B=0,D=S.length;B<D;B++)if(S[B].o==_.n)return _.tag="#",!0}function m(_,S,B){for(var D=0,j=B.length;D<j;D++)if(B[D].c==_&&B[D].o==S)return!0}function v(_){var S=[];for(var B in _)S.push('"'+L(B)+'": function(c,p,t,i) {'+_[B]+"}");return"{ "+S.join(",")+" }"}function y(_){var S=[];for(var B in _.partials)S.push('"'+L(B)+'":{name:"'+L(_.partials[B].name)+'", '+y(_.partials[B])+"}");return"partials: {"+S.join(",")+"}, subs: "+v(_.subs)}i.stringify=function(_,S,B){return"{code: function (c,p,i) { "+i.wrapMain(_.code)+" },"+y(_)+"}"};var x=0;i.generate=function(_,S,B){x=0;var D={code:"",subs:{},partials:{}};return i.walk(_,D),B.asString?this.stringify(D,S,B):this.makeTemplate(D,S,B)},i.wrapMain=function(_){return'var t=this;t.b(i=i||"");'+_+"return t.fl();"},i.template=i.Template,i.makeTemplate=function(_,S,B){var D=this.makePartials(_);return D.code=new Function("c","p","i",this.wrapMain(_.code)),new this.template(D,S,this,B)},i.makePartials=function(_){var S,B={subs:{},partials:_.partials,name:_.name};for(S in B.partials)B.partials[S]=this.makePartials(B.partials[S]);for(S in _.subs)B.subs[S]=new Function("c","p","t","i",_.subs[S]);return B};function L(_){return _.replace(a,"\\\\").replace(r,'\\"').replace(l,"\\n").replace(s,"\\r").replace(d,"\\u2028").replace(c,"\\u2029")}function H(_){return~_.indexOf(".")?"d":"f"}function Z(_,S){var B="<"+(S.prefix||""),D=B+_.n+x++;return S.partials[D]={name:_.n,partials:{}},S.code+='t.b(t.rp("'+L(D)+'",c,p,"'+(_.indent||"")+'"));',D}i.codegen={"#":function(_,S){S.code+="if(t.s(t."+H(_.n)+'("'+L(_.n)+'",c,p,1),c,p,0,'+_.i+","+_.end+',"'+_.otag+" "+_.ctag+'")){t.rs(c,p,function(c,p,t){',i.walk(_.nodes,S),S.code+="});c.pop();}"},"^":function(_,S){S.code+="if(!t.s(t."+H(_.n)+'("'+L(_.n)+'",c,p,1),c,p,1,0,0,"")){',i.walk(_.nodes,S),S.code+="};"},">":Z,"<":function(_,S){var B={partials:{},code:"",subs:{},inPartial:!0};i.walk(_.nodes,B);var D=S.partials[Z(_,S)];D.subs=B.subs,D.partials=B.partials},$:function(_,S){var B={subs:{},code:"",partials:S.partials,prefix:_.n};i.walk(_.nodes,B),S.subs[_.n]=B.code,S.inPartial||(S.code+='t.sub("'+L(_.n)+'",c,p,i);')},"\n":function(_,S){S.code+=A('"\\n"'+(_.last?"":" + i"))},_v:function(_,S){S.code+="t.b(t.v(t."+H(_.n)+'("'+L(_.n)+'",c,p,0)));'},_t:function(_,S){S.code+=A('"'+L(_.text)+'"')},"{":N,"&":N};function N(_,S){S.code+="t.b(t.t(t."+H(_.n)+'("'+L(_.n)+'",c,p,0)));'}function A(_){return"t.b("+_+");"}i.walk=function(_,S){for(var B,D=0,j=_.length;D<j;D++)B=i.codegen[_[D].tag],B&&B(_[D],S);return S},i.parse=function(_,S,B){return B=B||{},p(_,"",[],B.sectionTags||[])},i.cache={},i.cacheKey=function(_,S){return[_,!!S.asString,!!S.disableLambda,S.delimiters,!!S.modelGet].join("||")},i.compile=function(_,S){S=S||{};var B=i.cacheKey(_,S),D=this.cache[B];if(D){var j=D.partials;for(var Q in j)delete j[Q].instance;return D}return D=this.generate(this.parse(this.scan(_,S.delimiters),_,S),_,S),this.cache[B]=D}})(t)},function(e,t,n){(function(i){i.Template=function(p,g,m,v){p=p||{},this.r=p.code||this.r,this.c=m,this.options=v||{},this.text=g||"",this.partials=p.partials||{},this.subs=p.subs||{},this.buf=""},i.Template.prototype={r:function(p,g,m){return""},v:C,t:h,render:function(g,m,v){return this.ri([g],m||{},v)},ri:function(p,g,m){return this.r(p,g,m)},ep:function(p,g){var m=this.partials[p],v=g[m.name];if(m.instance&&m.base==v)return m.instance;if(typeof v=="string"){if(!this.c)throw new Error("No compiler available.");v=this.c.compile(v,this.options)}if(!v)return null;if(this.partials[p].base=v,m.subs){g.stackText||(g.stackText={});for(key in m.subs)g.stackText[key]||(g.stackText[key]=this.activeSub!==void 0&&g.stackText[this.activeSub]?g.stackText[this.activeSub]:this.text);v=r(v,m.subs,m.partials,this.stackSubs,this.stackPartials,g.stackText)}return this.partials[p].instance=v,v},rp:function(p,g,m,v){var y=this.ep(p,m);return y?y.ri(g,m,v):""},rs:function(p,g,m){var v=p[p.length-1];if(!f(v)){m(p,g,this);return}for(var y=0;y<v.length;y++)p.push(v[y]),m(p,g,this),p.pop()},s:function(p,g,m,v,y,x,L){var H;return f(p)&&p.length===0?!1:(typeof p=="function"&&(p=this.ms(p,g,m,v,y,x,L)),H=!!p,!v&&H&&g&&g.push(typeof p=="object"?p:g[g.length-1]),H)},d:function(p,g,m,v){var y,x=p.split("."),L=this.f(x[0],g,m,v),H=this.options.modelGet,Z=null;if(p==="."&&f(g[g.length-2]))L=g[g.length-1];else for(var N=1;N<x.length;N++)y=o(x[N],L,H),y!==void 0?(Z=L,L=y):L="";return v&&!L?!1:(!v&&typeof L=="function"&&(g.push(Z),L=this.mv(L,g,m),g.pop()),L)},f:function(p,g,m,v){for(var y=!1,x=null,L=!1,H=this.options.modelGet,Z=g.length-1;Z>=0;Z--)if(x=g[Z],y=o(p,x,H),y!==void 0){L=!0;break}return L?(!v&&typeof y=="function"&&(y=this.mv(y,g,m)),y):v?!1:""},ls:function(p,g,m,v,y){var x=this.options.delimiters;return this.options.delimiters=y,this.b(this.ct(h(p.call(g,v)),g,m)),this.options.delimiters=x,!1},ct:function(p,g,m){if(this.options.disableLambda)throw new Error("Lambda features disabled.");return this.c.compile(p,this.options).render(g,m)},b:function(p){this.buf+=p},fl:function(){var p=this.buf;return this.buf="",p},ms:function(p,g,m,v,y,x,L){var H,Z=g[g.length-1],N=p.call(Z);return typeof N=="function"?v?!0:(H=this.activeSub&&this.subsText&&this.subsText[this.activeSub]?this.subsText[this.activeSub]:this.text,this.ls(N,Z,m,H.substring(y,x),L)):N},mv:function(p,g,m){var v=g[g.length-1],y=p.call(v);return typeof y=="function"?this.ct(h(y.call(v)),v,m):y},sub:function(p,g,m,v){var y=this.subs[p];y&&(this.activeSub=p,y(g,m,this,v),this.activeSub=!1)}};function o(p,g,m){var v;return g&&typeof g=="object"&&(g[p]!==void 0?v=g[p]:m&&g.get&&typeof g.get=="function"&&(v=g.get(p))),v}function r(p,g,m,v,y,x){function L(){}L.prototype=p;function H(){}H.prototype=p.subs;var Z,N=new L;N.subs=new H,N.subsText={},N.buf="",v=v||{},N.stackSubs=v,N.subsText=x;for(Z in g)v[Z]||(v[Z]=g[Z]);for(Z in v)N.subs[Z]=v[Z];y=y||{},N.stackPartials=y;for(Z in m)y[Z]||(y[Z]=m[Z]);for(Z in y)N.partials[Z]=y[Z];return N}var l=/&/g,s=/</g,a=/>/g,d=/\'/g,c=/\"/g,u=/[&<>\"\']/;function h(p){return String(p==null?"":p)}function C(p){return p=h(p),u.test(p)?p.replace(l,"&amp;").replace(s,"&lt;").replace(a,"&gt;").replace(d,"&#39;").replace(c,"&quot;"):p}var f=Array.isArray||function(p){return Object.prototype.toString.call(p)==="[object Array]"}})(t)},function(e,t,n){var i=n(30),o=n(41);e.exports=o(i,"(lite) ")},function(e,t,n){e.exports=d;var i=n(5),o=n(31),r=n(32),l=n(38),s=500,a=Object({NODE_ENV:"production"}).RESET_APP_DATA_TIMER&&parseInt(Object({NODE_ENV:"production"}).RESET_APP_DATA_TIMER,10)||60*2*1e3;function d(f,p,g){var m=n(8)("algoliasearch"),v=n(3),y=n(6),x=n(7),L="Usage: algoliasearch(applicationID, apiKey, opts)";if(g._allowEmptyCredentials!==!0&&!f)throw new i.AlgoliaSearchError("Please provide an application ID. "+L);if(g._allowEmptyCredentials!==!0&&!p)throw new i.AlgoliaSearchError("Please provide an API key. "+L);this.applicationID=f,this.apiKey=p,this.hosts={read:[],write:[]},g=g||{},this._timeouts=g.timeouts||{connect:1*1e3,read:2*1e3,write:30*1e3},g.timeout&&(this._timeouts.connect=this._timeouts.read=this._timeouts.write=g.timeout);var H=g.protocol||"https:";if(/:$/.test(H)||(H=H+":"),H!=="http:"&&H!=="https:")throw new i.AlgoliaSearchError("protocol must be `http:` or `https:` (was `"+g.protocol+"`)");if(this._checkAppIdData(),g.hosts)y(g.hosts)?(this.hosts.read=v(g.hosts),this.hosts.write=v(g.hosts)):(this.hosts.read=v(g.hosts.read),this.hosts.write=v(g.hosts.write));else{var Z=x(this._shuffleResult,function(A){return f+"-"+A+".algolianet.com"}),N=(g.dsn===!1?"":"-dsn")+".algolia.net";this.hosts.read=[this.applicationID+N].concat(Z),this.hosts.write=[this.applicationID+".algolia.net"].concat(Z)}this.hosts.read=x(this.hosts.read,c(H)),this.hosts.write=x(this.hosts.write,c(H)),this.extraHeaders={},this.cache=g._cache||{},this._ua=g._ua,this._useCache=g._useCache===void 0||g._cache?!0:g._useCache,this._useRequestCache=this._useCache&&g._useRequestCache,this._useFallback=g.useFallback===void 0?!0:g.useFallback,this._setTimeout=g._setTimeout,m("init done, %j",this)}d.prototype.initIndex=function(f){return new r(this,f)},d.prototype.setExtraHeader=function(f,p){this.extraHeaders[f.toLowerCase()]=p},d.prototype.getExtraHeader=function(f){return this.extraHeaders[f.toLowerCase()]},d.prototype.unsetExtraHeader=function(f){delete this.extraHeaders[f.toLowerCase()]},d.prototype.addAlgoliaAgent=function(f){this._ua.indexOf(";"+f)===-1&&(this._ua+=";"+f)},d.prototype._jsonRequest=function(f){this._checkAppIdData();var p=n(8)("algoliasearch:"+f.url),g,m,v=f.additionalUA||"",y=f.cache,x=this,L=0,H=!1,Z=x._useFallback&&x._request.fallback&&f.fallback,N;this.apiKey.length>s&&f.body!==void 0&&(f.body.params!==void 0||f.body.requests!==void 0)?(f.body.apiKey=this.apiKey,N=this._computeRequestHeaders({additionalUA:v,withApiKey:!1,headers:f.headers})):N=this._computeRequestHeaders({additionalUA:v,headers:f.headers}),f.body!==void 0&&(g=u(f.body)),p("request start");var A=[];function _(P,F){x._checkAppIdData();var G=new Date;if(x._useCache&&!x._useRequestCache&&(m=f.url),x._useCache&&!x._useRequestCache&&g&&(m+="_body_"+F.body),S(!x._useRequestCache,y,m)){p("serving response from cache");var d1=y[m];return x._promise.resolve({body:JSON.parse(d1),responseText:d1})}if(L>=x.hosts[f.hostType].length)return!Z||H?(p("could not get any response"),x._promise.reject(new i.AlgoliaSearchError("Cannot connect to the AlgoliaSearch API. Send an email to support@algolia.com to report and resolve the issue. Application id was: "+x.applicationID,{debugData:A}))):(p("switching to fallback"),L=0,F.method=f.fallback.method,F.url=f.fallback.url,F.jsonBody=f.fallback.body,F.jsonBody&&(F.body=u(F.jsonBody)),N=x._computeRequestHeaders({additionalUA:v,headers:f.headers}),F.timeouts=x._getTimeoutsForRequest(f.hostType),x._setHostIndexByType(0,f.hostType),H=!0,_(x._request.fallback,F));var p1=x._getHostByType(f.hostType),a1=p1+F.url,c1={body:F.body,jsonBody:F.jsonBody,method:F.method,headers:N,timeouts:F.timeouts,debug:p,forceAuthHeaders:F.forceAuthHeaders};return p("method: %s, url: %s, headers: %j, timeouts: %d",c1.method,a1,c1.headers,c1.timeouts),P===x._request.fallback&&p("using fallback"),P.call(x,a1,c1).then(u1,y1);function u1(O){var X=O&&O.body&&O.body.message&&O.body.status||O.statusCode||O&&O.body&&200;p("received response: statusCode: %s, computed statusCode: %d, headers: %j",O.statusCode,X,O.headers);var J=Math.floor(X/100)===2,r1=new Date;if(A.push({currentHost:p1,headers:C(N),content:g||null,contentLength:g!==void 0?g.length:null,method:F.method,timeouts:F.timeouts,url:F.url,startTime:G,endTime:r1,duration:r1-G,statusCode:X}),J)return x._useCache&&!x._useRequestCache&&y&&(y[m]=O.responseText),{responseText:O.responseText,body:O.body};var s1=Math.floor(X/100)!==4;if(s1)return L+=1,g1();p("unrecoverable error");var M=new i.AlgoliaSearchError(O.body&&O.body.message,{debugData:A,statusCode:X});return x._promise.reject(M)}function y1(O){p("error: %s, stack: %s",O.message,O.stack);var X=new Date;return A.push({currentHost:p1,headers:C(N),content:g||null,contentLength:g!==void 0?g.length:null,method:F.method,timeouts:F.timeouts,url:F.url,startTime:G,endTime:X,duration:X-G}),O instanceof i.AlgoliaSearchError||(O=new i.Unknown(O&&O.message,O)),L+=1,O instanceof i.Unknown||O instanceof i.UnparsableJSON||L>=x.hosts[f.hostType].length&&(H||!Z)?(O.debugData=A,x._promise.reject(O)):O instanceof i.RequestTimeout?v1():g1()}function g1(){return p("retrying request"),x._incrementHostIndex(f.hostType),_(P,F)}function v1(){return p("retrying request with higher timeout"),x._incrementHostIndex(f.hostType),x._incrementTimeoutMultipler(),F.timeouts=x._getTimeoutsForRequest(f.hostType),_(P,F)}}function S(P,F,G){return x._useCache&&P&&F&&F[G]!==void 0}function B(P,F){if(S(x._useRequestCache,y,m)&&P.catch(function(){delete y[m]}),typeof f.callback=="function")P.then(function(d1){o(function(){f.callback(null,F(d1))},x._setTimeout||setTimeout)},function(d1){o(function(){f.callback(d1)},x._setTimeout||setTimeout)});else return P.then(F)}if(x._useCache&&x._useRequestCache&&(m=f.url),x._useCache&&x._useRequestCache&&g&&(m+="_body_"+g),S(x._useRequestCache,y,m)){p("serving request from cache");var D=y[m],j=typeof D.then!="function"?x._promise.resolve({responseText:D}):D;return B(j,function(P){return JSON.parse(P.responseText)})}var Q=_(x._request,{url:f.url,method:f.method,body:g,jsonBody:f.body,timeouts:x._getTimeoutsForRequest(f.hostType),forceAuthHeaders:f.forceAuthHeaders});return x._useCache&&x._useRequestCache&&y&&(y[m]=Q),B(Q,function(P){return P.body})},d.prototype._getSearchParams=function(f,p){if(f==null)return p;for(var g in f)g!==null&&f[g]!==void 0&&f.hasOwnProperty(g)&&(p+=p===""?"":"&",p+=g+"="+encodeURIComponent(Object.prototype.toString.call(f[g])==="[object Array]"?u(f[g]):f[g]));return p},d.prototype._computeRequestHeaders=function(f){var p=n(2),g=f.additionalUA?this._ua+";"+f.additionalUA:this._ua,m={"x-algolia-agent":g,"x-algolia-application-id":this.applicationID};return f.withApiKey!==!1&&(m["x-algolia-api-key"]=this.apiKey),this.userToken&&(m["x-algolia-usertoken"]=this.userToken),this.securityTags&&(m["x-algolia-tagfilters"]=this.securityTags),p(this.extraHeaders,function(y,x){m[x]=y}),f.headers&&p(f.headers,function(y,x){m[x]=y}),m},d.prototype.search=function(f,p,g){var m=n(6),v=n(7),y="Usage: client.search(arrayOfQueries[, callback])";if(!m(f))throw new Error(y);typeof p=="function"?(g=p,p={}):p===void 0&&(p={});var x=this,L={requests:v(f,function(A){var _="";return A.query!==void 0&&(_+="query="+encodeURIComponent(A.query)),{indexName:A.indexName,params:x._getSearchParams(A.params,_)}})},H=v(L.requests,function(A,_){return _+"="+encodeURIComponent("/1/indexes/"+encodeURIComponent(A.indexName)+"?"+A.params)}).join("&"),Z="/1/indexes/*/queries";return p.strategy!==void 0&&(L.strategy=p.strategy),this._jsonRequest({cache:this.cache,method:"POST",url:Z,body:L,hostType:"read",fallback:{method:"GET",url:"/1/indexes/*",body:{params:H}},callback:g})},d.prototype.searchForFacetValues=function(f){var p=n(6),g=n(7),m="Usage: client.searchForFacetValues([{indexName, params: {facetName, facetQuery, ...params}}, ...queries])";if(!p(f))throw new Error(m);var v=this;return v._promise.all(g(f,function(x){if(!x||x.indexName===void 0||x.params.facetName===void 0||x.params.facetQuery===void 0)throw new Error(m);var L=n(3),H=n(14),Z=x.indexName,N=x.params,A=N.facetName,_=H(L(N),function(B){return B==="facetName"}),S=v._getSearchParams(_,"");return v._jsonRequest({cache:v.cache,method:"POST",url:"/1/indexes/"+encodeURIComponent(Z)+"/facets/"+encodeURIComponent(A)+"/query",hostType:"read",body:{params:S}})}))},d.prototype.setSecurityTags=function(f){if(Object.prototype.toString.call(f)==="[object Array]"){for(var p=[],g=0;g<f.length;++g)if(Object.prototype.toString.call(f[g])==="[object Array]"){for(var m=[],v=0;v<f[g].length;++v)m.push(f[g][v]);p.push("("+m.join(",")+")")}else p.push(f[g]);f=p.join(",")}this.securityTags=f},d.prototype.setUserToken=function(f){this.userToken=f},d.prototype.clearCache=function(){this.cache={}},d.prototype.setRequestTimeout=function(f){f&&(this._timeouts.connect=this._timeouts.read=this._timeouts.write=f)},d.prototype.setTimeouts=function(f){this._timeouts=f},d.prototype.getTimeouts=function(){return this._timeouts},d.prototype._getAppIdData=function(){var f=l.get(this.applicationID);return f!==null&&this._cacheAppIdData(f),f},d.prototype._setAppIdData=function(f){return f.lastChange=new Date().getTime(),this._cacheAppIdData(f),l.set(this.applicationID,f)},d.prototype._checkAppIdData=function(){var f=this._getAppIdData(),p=new Date().getTime();return f===null||p-f.lastChange>a?this._resetInitialAppIdData(f):f},d.prototype._resetInitialAppIdData=function(f){var p=f||{};return p.hostIndexes={read:0,write:0},p.timeoutMultiplier=1,p.shuffleResult=p.shuffleResult||h([1,2,3]),this._setAppIdData(p)},d.prototype._cacheAppIdData=function(f){this._hostIndexes=f.hostIndexes,this._timeoutMultiplier=f.timeoutMultiplier,this._shuffleResult=f.shuffleResult},d.prototype._partialAppIdDataUpdate=function(f){var p=n(2),g=this._getAppIdData();return p(f,function(m,v){g[v]=m}),this._setAppIdData(g)},d.prototype._getHostByType=function(f){return this.hosts[f][this._getHostIndexByType(f)]},d.prototype._getTimeoutMultiplier=function(){return this._timeoutMultiplier},d.prototype._getHostIndexByType=function(f){return this._hostIndexes[f]},d.prototype._setHostIndexByType=function(f,p){var g=n(3),m=g(this._hostIndexes);return m[p]=f,this._partialAppIdDataUpdate({hostIndexes:m}),f},d.prototype._incrementHostIndex=function(f){return this._setHostIndexByType((this._getHostIndexByType(f)+1)%this.hosts[f].length,f)},d.prototype._incrementTimeoutMultipler=function(){var f=Math.max(this._timeoutMultiplier+1,4);return this._partialAppIdDataUpdate({timeoutMultiplier:f})},d.prototype._getTimeoutsForRequest=function(f){return{connect:this._timeouts.connect*this._timeoutMultiplier,complete:this._timeouts[f]*this._timeoutMultiplier}};function c(f){return function(g){return f+"//"+g.toLowerCase()}}function u(f){if(Array.prototype.toJSON===void 0)return JSON.stringify(f);var p=Array.prototype.toJSON;delete Array.prototype.toJSON;var g=JSON.stringify(f);return Array.prototype.toJSON=p,g}function h(f){for(var p=f.length,g,m;p!==0;)m=Math.floor(Math.random()*p),p-=1,g=f[p],f[p]=f[m],f[m]=g;return f}function C(f){var p={};for(var g in f)if(Object.prototype.hasOwnProperty.call(f,g)){var m;g==="x-algolia-api-key"||g==="x-algolia-application-id"?m="**hidden for security purposes**":m=f[g],p[g]=m}return p}},function(e,t){e.exports=function(i,o){o(i,0)}},function(e,t,n){var i=n(13),o=n(33),r=n(34);e.exports=l;function l(s,a){this.indexName=a,this.as=s,this.typeAheadArgs=null,this.typeAheadValueOption=null,this.cache={}}l.prototype.clearCache=function(){this.cache={}},l.prototype.search=i("query"),l.prototype.similarSearch=i("similarQuery"),l.prototype.browse=function(s,a,d){var c=n(35),u=this,h,C;arguments.length===0||arguments.length===1&&typeof arguments[0]=="function"?(h=0,d=arguments[0],s=void 0):typeof arguments[0]=="number"?(h=arguments[0],typeof arguments[1]=="number"?C=arguments[1]:typeof arguments[1]=="function"&&(d=arguments[1],C=void 0),s=void 0,a=void 0):typeof arguments[0]=="object"?(typeof arguments[1]=="function"&&(d=arguments[1]),a=arguments[0],s=void 0):typeof arguments[0]=="string"&&typeof arguments[1]=="function"&&(d=arguments[1],a=void 0),a=c({},a||{},{page:h,hitsPerPage:C,query:s});var f=this.as._getSearchParams(a,"");return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(u.indexName)+"/browse",body:{params:f},hostType:"read",callback:d})},l.prototype.browseFrom=function(s,a){return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/browse",body:{cursor:s},hostType:"read",callback:a})},l.prototype.searchForFacetValues=function(s,a){var d=n(3),c=n(14),u="Usage: index.searchForFacetValues({facetName, facetQuery, ...params}[, callback])";if(s.facetName===void 0||s.facetQuery===void 0)throw new Error(u);var h=s.facetName,C=c(d(s),function(p){return p==="facetName"}),f=this.as._getSearchParams(C,"");return this.as._jsonRequest({method:"POST",url:"/1/indexes/"+encodeURIComponent(this.indexName)+"/facets/"+encodeURIComponent(h)+"/query",hostType:"read",body:{params:f},callback:a})},l.prototype.searchFacet=o(function(s,a){return this.searchForFacetValues(s,a)},r("index.searchFacet(params[, callback])","index.searchForFacetValues(params[, callback])")),l.prototype._search=function(s,a,d,c){return this.as._jsonRequest({cache:this.cache,method:"POST",url:a||"/1/indexes/"+encodeURIComponent(this.indexName)+"/query",body:{params:s},hostType:"read",fallback:{method:"GET",url:"/1/indexes/"+encodeURIComponent(this.indexName),body:{params:s}},callback:d,additionalUA:c})},l.prototype.getObject=function(s,a,d){var c=this;(arguments.length===1||typeof a=="function")&&(d=a,a=void 0);var u="";if(a!==void 0){u="?attributes=";for(var h=0;h<a.length;++h)h!==0&&(u+=","),u+=a[h]}return this.as._jsonRequest({method:"GET",url:"/1/indexes/"+encodeURIComponent(c.indexName)+"/"+encodeURIComponent(s)+u,hostType:"read",callback:d})},l.prototype.getObjects=function(s,a,d){var c=n(6),u=n(7),h="Usage: index.getObjects(arrayOfObjectIDs[, callback])";if(!c(s))throw new Error(h);var C=this;(arguments.length===1||typeof a=="function")&&(d=a,a=void 0);var f={requests:u(s,function(g){var m={indexName:C.indexName,objectID:g};return a&&(m.attributesToRetrieve=a.join(",")),m})};return this.as._jsonRequest({method:"POST",url:"/1/indexes/*/objects",hostType:"read",body:f,callback:d})},l.prototype.as=null,l.prototype.indexName=null,l.prototype.typeAheadArgs=null,l.prototype.typeAheadValueOption=null},function(e,t){e.exports=function(i,o){var r=!1;function l(){return r||(console.warn(o),r=!0),i.apply(this,arguments)}return l}},function(e,t){e.exports=function(i,o){var r=i.toLowerCase().replace(/[\.\(\)]/g,"");return"algoliasearch: `"+i+"` was replaced by `"+o+"`. Please see https://github.com/algolia/algoliasearch-client-javascript/wiki/Deprecated#"+r}},function(e,t,n){var i=n(2);e.exports=function o(r){var l=Array.prototype.slice.call(arguments);return i(l,function(s){for(var a in s)s.hasOwnProperty(a)&&(typeof r[a]=="object"&&typeof s[a]=="object"?r[a]=o({},r[a],s[a]):s[a]!==void 0&&(r[a]=s[a]))}),r}},function(e,t,n){var i=Object.prototype.hasOwnProperty,o=Object.prototype.toString,r=Array.prototype.slice,l=n(37),s=Object.prototype.propertyIsEnumerable,a=!s.call({toString:null},"toString"),d=s.call(function(){},"prototype"),c=["toString","toLocaleString","valueOf","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","constructor"],u=function(g){var m=g.constructor;return m&&m.prototype===g},h={$applicationCache:!0,$console:!0,$external:!0,$frame:!0,$frameElement:!0,$frames:!0,$innerHeight:!0,$innerWidth:!0,$outerHeight:!0,$outerWidth:!0,$pageXOffset:!0,$pageYOffset:!0,$parent:!0,$scrollLeft:!0,$scrollTop:!0,$scrollX:!0,$scrollY:!0,$self:!0,$webkitIndexedDB:!0,$webkitStorageInfo:!0,$window:!0},C=function(){if(typeof window=="undefined")return!1;for(var g in window)try{if(!h["$"+g]&&i.call(window,g)&&window[g]!==null&&typeof window[g]=="object")try{u(window[g])}catch{return!0}}catch{return!0}return!1}(),f=function(g){if(typeof window=="undefined"||!C)return u(g);try{return u(g)}catch{return!1}},p=function(m){var v=m!==null&&typeof m=="object",y=o.call(m)==="[object Function]",x=l(m),L=v&&o.call(m)==="[object String]",H=[];if(!v&&!y&&!x)throw new TypeError("Object.keys called on a non-object");var Z=d&&y;if(L&&m.length>0&&!i.call(m,0))for(var N=0;N<m.length;++N)H.push(String(N));if(x&&m.length>0)for(var A=0;A<m.length;++A)H.push(String(A));else for(var _ in m)!(Z&&_==="prototype")&&i.call(m,_)&&H.push(String(_));if(a)for(var S=f(m),B=0;B<c.length;++B)!(S&&c[B]==="constructor")&&i.call(m,c[B])&&H.push(c[B]);return H};p.shim=function(){if(Object.keys){var m=function(){return(Object.keys(arguments)||"").length===2}(1,2);if(!m){var v=Object.keys;Object.keys=function(x){return l(x)?v(r.call(x)):v(x)}}}else Object.keys=p;return Object.keys||p},e.exports=p},function(e,t,n){var i=Object.prototype.toString;e.exports=function(r){var l=i.call(r),s=l==="[object Arguments]";return s||(s=l!=="[object Array]"&&r!==null&&typeof r=="object"&&typeof r.length=="number"&&r.length>=0&&i.call(r.callee)==="[object Function]"),s}},function(e,t,n){(function(i){var o=n(8)("algoliasearch:src/hostIndexState.js"),r="algoliasearch-client-js",l,s={state:{},set:function(C,f){return this.state[C]=f,this.state[C]},get:function(C){return this.state[C]||null}},a={set:function(C,f){s.set(C,f);try{var p=JSON.parse(i.localStorage[r]);return p[C]=f,i.localStorage[r]=JSON.stringify(p),p[C]}catch(g){return d(C,g)}},get:function(C){try{return JSON.parse(i.localStorage[r])[C]||null}catch(f){return d(C,f)}}};function d(C,f){return o("localStorage failed with",f),h(),l=s,l.get(C)}l=u()?a:s,e.exports={get:c,set:c,supportsLocalStorage:u};function c(C,f){return arguments.length===1?l.get(C):l.set(C,f)}function u(){try{return"localStorage"in i&&i.localStorage!==null?(i.localStorage[r]||i.localStorage.setItem(r,JSON.stringify({})),!0):!1}catch{return!1}}function h(){try{i.localStorage.removeItem(r)}catch{}}}).call(t,n(4))},function(e,t,n){t=e.exports=r.debug=r.default=r,t.coerce=d,t.disable=s,t.enable=l,t.enabled=a,t.humanize=n(40),t.names=[],t.skips=[],t.formatters={};var i;function o(c){var u=0,h;for(h in c)u=(u<<5)-u+c.charCodeAt(h),u|=0;return t.colors[Math.abs(u)%t.colors.length]}function r(c){function u(){if(!!u.enabled){var h=u,C=+new Date,f=C-(i||C);h.diff=f,h.prev=i,h.curr=C,i=C;for(var p=new Array(arguments.length),g=0;g<p.length;g++)p[g]=arguments[g];p[0]=t.coerce(p[0]),typeof p[0]!="string"&&p.unshift("%O");var m=0;p[0]=p[0].replace(/%([a-zA-Z%])/g,function(y,x){if(y==="%%")return y;m++;var L=t.formatters[x];if(typeof L=="function"){var H=p[m];y=L.call(h,H),p.splice(m,1),m--}return y}),t.formatArgs.call(h,p);var v=u.log||t.log||console.log.bind(console);v.apply(h,p)}}return u.namespace=c,u.enabled=t.enabled(c),u.useColors=t.useColors(),u.color=o(c),typeof t.init=="function"&&t.init(u),u}function l(c){t.save(c),t.names=[],t.skips=[];for(var u=(typeof c=="string"?c:"").split(/[\s,]+/),h=u.length,C=0;C<h;C++)!u[C]||(c=u[C].replace(/\*/g,".*?"),c[0]==="-"?t.skips.push(new RegExp("^"+c.substr(1)+"$")):t.names.push(new RegExp("^"+c+"$")))}function s(){t.enable("")}function a(c){var u,h;for(u=0,h=t.skips.length;u<h;u++)if(t.skips[u].test(c))return!1;for(u=0,h=t.names.length;u<h;u++)if(t.names[u].test(c))return!0;return!1}function d(c){return c instanceof Error?c.stack||c.message:c}},function(e,t){var n=1e3,i=n*60,o=i*60,r=o*24,l=r*365.25;e.exports=function(u,h){h=h||{};var C=typeof u;if(C==="string"&&u.length>0)return s(u);if(C==="number"&&isNaN(u)===!1)return h.long?d(u):a(u);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(u))};function s(u){if(u=String(u),!(u.length>100)){var h=/^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(u);if(!!h){var C=parseFloat(h[1]),f=(h[2]||"ms").toLowerCase();switch(f){case"years":case"year":case"yrs":case"yr":case"y":return C*l;case"days":case"day":case"d":return C*r;case"hours":case"hour":case"hrs":case"hr":case"h":return C*o;case"minutes":case"minute":case"mins":case"min":case"m":return C*i;case"seconds":case"second":case"secs":case"sec":case"s":return C*n;case"milliseconds":case"millisecond":case"msecs":case"msec":case"ms":return C;default:return}}}}function a(u){return u>=r?Math.round(u/r)+"d":u>=o?Math.round(u/o)+"h":u>=i?Math.round(u/i)+"m":u>=n?Math.round(u/n)+"s":u+"ms"}function d(u){return c(u,r,"day")||c(u,o,"hour")||c(u,i,"minute")||c(u,n,"second")||u+" ms"}function c(u,h,C){if(!(u<h))return u<h*1.5?Math.floor(u/h)+" "+C:Math.ceil(u/h)+" "+C+"s"}},function(e,t,n){var i=n(42),o=i.Promise||n(43).Promise;e.exports=function(l,s){var a=n(12),d=n(5),c=n(44),u=n(46),h=n(47);s=s||"";function C(g,m,v){var y=n(3);return v=y(v||{}),v._ua=v._ua||C.ua,new p(g,m,v)}C.version=n(48),C.ua="Algolia for vanilla JavaScript "+s+C.version,C.initPlaces=h(C),i.__algolia={debug:n(8),algoliasearch:C};var f={hasXMLHttpRequest:"XMLHttpRequest"in i,hasXDomainRequest:"XDomainRequest"in i};f.hasXMLHttpRequest&&(f.cors="withCredentials"in new XMLHttpRequest);function p(){l.apply(this,arguments)}return a(p,l),p.prototype._request=function(m,v){return new o(function(x,L){if(!f.cors&&!f.hasXDomainRequest){L(new d.Network("CORS not supported"));return}m=c(m,v.headers);var H=v.body,Z=f.cors?new XMLHttpRequest:new XDomainRequest,N,A,_=!1;N=setTimeout(D,v.timeouts.connect),Z.onprogress=Q,"onreadystatechange"in Z&&(Z.onreadystatechange=P),Z.onload=S,Z.onerror=B,Z instanceof XMLHttpRequest?(Z.open(v.method,m,!0),v.forceAuthHeaders&&(Z.setRequestHeader("x-algolia-application-id",v.headers["x-algolia-application-id"]),Z.setRequestHeader("x-algolia-api-key",v.headers["x-algolia-api-key"]))):Z.open(v.method,m),f.cors&&(H&&(v.method==="POST"?Z.setRequestHeader("content-type","application/x-www-form-urlencoded"):Z.setRequestHeader("content-type","application/json")),Z.setRequestHeader("accept","application/json")),H?Z.send(H):Z.send();function S(){if(!A){clearTimeout(N);var F;try{F={body:JSON.parse(Z.responseText),responseText:Z.responseText,statusCode:Z.status,headers:Z.getAllResponseHeaders&&Z.getAllResponseHeaders()||{}}}catch{F=new d.UnparsableJSON({more:Z.responseText})}F instanceof d.UnparsableJSON?L(F):x(F)}}function B(F){A||(clearTimeout(N),L(new d.Network({more:F})))}function D(){A=!0,Z.abort(),L(new d.RequestTimeout)}function j(){_=!0,clearTimeout(N),N=setTimeout(D,v.timeouts.complete)}function Q(){_||j()}function P(){!_&&Z.readyState>1&&j()}})},p.prototype._request.fallback=function(m,v){return m=c(m,v.headers),new o(function(x,L){u(m,v,function(Z,N){if(Z){L(Z);return}x(N)})})},p.prototype._promise={reject:function(m){return o.reject(m)},resolve:function(m){return o.resolve(m)},delay:function(m){return new o(function(y){setTimeout(y,m)})},all:function(m){return o.all(m)}},C}},function(e,t,n){(function(i){var o;typeof window!="undefined"?o=window:typeof i!="undefined"?o=i:typeof self!="undefined"?o=self:o={},e.exports=o}).call(t,n(4))},function(e,t,n){(function(i,o){(function(r,l){e.exports=l()})(this,function(){function r(z){var W=typeof z;return z!==null&&(W==="object"||W==="function")}function l(z){return typeof z=="function"}var s=void 0;Array.isArray?s=Array.isArray:s=function(z){return Object.prototype.toString.call(z)==="[object Array]"};var a=s,d=0,c=void 0,u=void 0,h=function(W,n1){A[d]=W,A[d+1]=n1,d+=2,d===2&&(u?u(_):B())};function C(z){u=z}function f(z){h=z}var p=typeof window!="undefined"?window:void 0,g=p||{},m=g.MutationObserver||g.WebKitMutationObserver,v=typeof self=="undefined"&&typeof i!="undefined"&&{}.toString.call(i)==="[object process]",y=typeof Uint8ClampedArray!="undefined"&&typeof importScripts!="undefined"&&typeof MessageChannel!="undefined";function x(){return function(){return i.nextTick(_)}}function L(){return typeof c!="undefined"?function(){c(_)}:N()}function H(){var z=0,W=new m(_),n1=document.createTextNode("");return W.observe(n1,{characterData:!0}),function(){n1.data=z=++z%2}}function Z(){var z=new MessageChannel;return z.port1.onmessage=_,function(){return z.port2.postMessage(0)}}function N(){var z=setTimeout;return function(){return z(_,1)}}var A=new Array(1e3);function _(){for(var z=0;z<d;z+=2){var W=A[z],n1=A[z+1];W(n1),A[z]=void 0,A[z+1]=void 0}d=0}function S(){try{var z=Function("return this")().require("vertx");return c=z.runOnLoop||z.runOnContext,L()}catch{return N()}}var B=void 0;v?B=x():m?B=H():y?B=Z():p===void 0?B=S():B=N();function D(z,W){var n1=this,f1=new this.constructor(P);f1[Q]===void 0&&e1(f1);var h1=n1._state;if(h1){var m1=arguments[h1-1];h(function(){return R(h1,f1,m1,n1._result)})}else M(n1,f1,z,W);return f1}function j(z){var W=this;if(z&&typeof z=="object"&&z.constructor===W)return z;var n1=new W(P);return X(n1,z),n1}var Q=Math.random().toString(36).substring(2);function P(){}var F=void 0,G=1,d1=2,p1={error:null};function a1(){return new TypeError("You cannot resolve a promise with itself")}function c1(){return new TypeError("A promises callback cannot return that same promise.")}function u1(z){try{return z.then}catch(W){return p1.error=W,p1}}function y1(z,W,n1,f1){try{z.call(W,n1,f1)}catch(h1){return h1}}function g1(z,W,n1){h(function(f1){var h1=!1,m1=y1(n1,W,function(_1){h1||(h1=!0,W!==_1?X(f1,_1):r1(f1,_1))},function(_1){h1||(h1=!0,s1(f1,_1))},"Settle: "+(f1._label||" unknown promise"));!h1&&m1&&(h1=!0,s1(f1,m1))},z)}function v1(z,W){W._state===G?r1(z,W._result):W._state===d1?s1(z,W._result):M(W,void 0,function(n1){return X(z,n1)},function(n1){return s1(z,n1)})}function O(z,W,n1){W.constructor===z.constructor&&n1===D&&W.constructor.resolve===j?v1(z,W):n1===p1?(s1(z,p1.error),p1.error=null):n1===void 0?r1(z,W):l(n1)?g1(z,W,n1):r1(z,W)}function X(z,W){z===W?s1(z,a1()):r(W)?O(z,W,u1(W)):r1(z,W)}function J(z){z._onerror&&z._onerror(z._result),k(z)}function r1(z,W){z._state===F&&(z._result=W,z._state=G,z._subscribers.length!==0&&h(k,z))}function s1(z,W){z._state===F&&(z._state=d1,z._result=W,h(J,z))}function M(z,W,n1,f1){var h1=z._subscribers,m1=h1.length;z._onerror=null,h1[m1]=W,h1[m1+G]=n1,h1[m1+d1]=f1,m1===0&&z._state&&h(k,z)}function k(z){var W=z._subscribers,n1=z._state;if(W.length!==0){for(var f1=void 0,h1=void 0,m1=z._result,_1=0;_1<W.length;_1+=3)f1=W[_1],h1=W[_1+n1],f1?R(n1,f1,h1,m1):h1(m1);z._subscribers.length=0}}function I(z,W){try{return z(W)}catch(n1){return p1.error=n1,p1}}function R(z,W,n1,f1){var h1=l(n1),m1=void 0,_1=void 0,S1=void 0,je=void 0;if(h1){if(m1=I(n1,f1),m1===p1?(je=!0,_1=m1.error,m1.error=null):S1=!0,W===m1){s1(W,c1());return}}else m1=f1,S1=!0;W._state!==F||(h1&&S1?X(W,m1):je?s1(W,_1):z===G?r1(W,m1):z===d1&&s1(W,m1))}function U(z,W){try{W(function(f1){X(z,f1)},function(f1){s1(z,f1)})}catch(n1){s1(z,n1)}}var q=0;function l1(){return q++}function e1(z){z[Q]=q++,z._state=void 0,z._result=void 0,z._subscribers=[]}function i1(){return new Error("Array Methods must be provided an Array")}var Y=function(){function z(W,n1){this._instanceConstructor=W,this.promise=new W(P),this.promise[Q]||e1(this.promise),a(n1)?(this.length=n1.length,this._remaining=n1.length,this._result=new Array(this.length),this.length===0?r1(this.promise,this._result):(this.length=this.length||0,this._enumerate(n1),this._remaining===0&&r1(this.promise,this._result))):s1(this.promise,i1())}return z.prototype._enumerate=function(n1){for(var f1=0;this._state===F&&f1<n1.length;f1++)this._eachEntry(n1[f1],f1)},z.prototype._eachEntry=function(n1,f1){var h1=this._instanceConstructor,m1=h1.resolve;if(m1===j){var _1=u1(n1);if(_1===D&&n1._state!==F)this._settledAt(n1._state,f1,n1._result);else if(typeof _1!="function")this._remaining--,this._result[f1]=n1;else if(h1===t1){var S1=new h1(P);O(S1,n1,_1),this._willSettleAt(S1,f1)}else this._willSettleAt(new h1(function(je){return je(n1)}),f1)}else this._willSettleAt(m1(n1),f1)},z.prototype._settledAt=function(n1,f1,h1){var m1=this.promise;m1._state===F&&(this._remaining--,n1===d1?s1(m1,h1):this._result[f1]=h1),this._remaining===0&&r1(m1,this._result)},z.prototype._willSettleAt=function(n1,f1){var h1=this;M(n1,void 0,function(m1){return h1._settledAt(G,f1,m1)},function(m1){return h1._settledAt(d1,f1,m1)})},z}();function w(z){return new Y(this,z).promise}function b(z){var W=this;return a(z)?new W(function(n1,f1){for(var h1=z.length,m1=0;m1<h1;m1++)W.resolve(z[m1]).then(n1,f1)}):new W(function(n1,f1){return f1(new TypeError("You must pass an array to race."))})}function E(z){var W=this,n1=new W(P);return s1(n1,z),n1}function $(){throw new TypeError("You must pass a resolver function as the first argument to the promise constructor")}function o1(){throw new TypeError("Failed to construct 'Promise': Please use the 'new' operator, this object constructor cannot be called as a function.")}var t1=function(){function z(W){this[Q]=l1(),this._result=this._state=void 0,this._subscribers=[],P!==W&&(typeof W!="function"&&$(),this instanceof z?U(this,W):o1())}return z.prototype.catch=function(n1){return this.then(null,n1)},z.prototype.finally=function(n1){var f1=this,h1=f1.constructor;return f1.then(function(m1){return h1.resolve(n1()).then(function(){return m1})},function(m1){return h1.resolve(n1()).then(function(){throw m1})})},z}();t1.prototype.then=D,t1.all=w,t1.race=b,t1.resolve=j,t1.reject=E,t1._setScheduler=C,t1._setAsap=f,t1._asap=h;function C1(){var z=void 0;if(typeof o!="undefined")z=o;else if(typeof self!="undefined")z=self;else try{z=Function("return this")()}catch{throw new Error("polyfill failed because global object is unavailable in this environment")}var W=z.Promise;if(W){var n1=null;try{n1=Object.prototype.toString.call(W.resolve())}catch{}if(n1==="[object Promise]"&&!W.cast)return}z.Promise=t1}return t1.polyfill=C1,t1.Promise=t1,t1})}).call(t,n(9),n(4))},function(e,t,n){e.exports=o;var i=n(45);function o(r,l){return/\?/.test(r)?r+="&":r+="?",r+i(l)}},function(e,t,n){var i=function(s){switch(typeof s){case"string":return s;case"boolean":return s?"true":"false";case"number":return isFinite(s)?s:"";default:return""}};e.exports=function(s,a,d,c){return a=a||"&",d=d||"=",s===null&&(s=void 0),typeof s=="object"?r(l(s),function(u){var h=encodeURIComponent(i(u))+d;return o(s[u])?r(s[u],function(C){return h+encodeURIComponent(i(C))}).join(a):h+encodeURIComponent(i(s[u]))}).join(a):c?encodeURIComponent(i(c))+d+encodeURIComponent(i(s)):""};var o=Array.isArray||function(s){return Object.prototype.toString.call(s)==="[object Array]"};function r(s,a){if(s.map)return s.map(a);for(var d=[],c=0;c<s.length;c++)d.push(a(s[c],c));return d}var l=Object.keys||function(s){var a=[];for(var d in s)Object.prototype.hasOwnProperty.call(s,d)&&a.push(d);return a}},function(e,t,n){e.exports=r;var i=n(5),o=0;function r(l,s,a){if(s.method!=="GET"){a(new Error("Method "+s.method+" "+l+" is not supported by JSONP."));return}s.debug("JSONP: start");var d=!1,c=!1;o+=1;var u=document.getElementsByTagName("head")[0],h=document.createElement("script"),C="algoliaJSONP_"+o,f=!1;window[C]=function(H){if(y(),c){s.debug("JSONP: Late answer, ignoring");return}d=!0,v(),a(null,{body:H,responseText:JSON.stringify(H)})},l+="&callback="+C,s.jsonBody&&s.jsonBody.params&&(l+="&"+s.jsonBody.params);var p=setTimeout(x,s.timeouts.complete);h.onreadystatechange=m,h.onload=g,h.onerror=L,h.async=!0,h.defer=!0,h.src=l,u.appendChild(h);function g(){s.debug("JSONP: success"),!(f||c)&&(f=!0,d||(s.debug("JSONP: Fail. Script loaded but did not call the callback"),v(),a(new i.JSONPScriptFail)))}function m(){(this.readyState==="loaded"||this.readyState==="complete")&&g()}function v(){clearTimeout(p),h.onload=null,h.onreadystatechange=null,h.onerror=null,u.removeChild(h)}function y(){try{delete window[C],delete window[C+"_loaded"]}catch{window[C]=window[C+"_loaded"]=void 0}}function x(){s.debug("JSONP: Script timeout"),c=!0,v(),a(new i.RequestTimeout)}function L(){s.debug("JSONP: Script error"),!(f||c)&&(v(),a(new i.JSONPScriptError))}}},function(e,t,n){e.exports=o;var i=n(13);function o(r){return function(s,a,d){var c=n(3);d=d&&c(d)||{},d.hosts=d.hosts||["places-dsn.algolia.net","places-1.algolianet.com","places-2.algolianet.com","places-3.algolianet.com"],(arguments.length===0||typeof s=="object"||s===void 0)&&(s="",a="",d._allowEmptyCredentials=!0);var u=r(s,a,d),h=u.initIndex("places");return h.search=i("query","/1/places/query"),h.getObject=function(C,f){return this.as._jsonRequest({method:"GET",url:"/1/places/"+encodeURIComponent(C),hostType:"read",callback:f})},h}}},function(e,t,n){e.exports="3.30.0"},function(e,t,n){e.exports=n(50)},function(e,t,n){var i=n(15),o=n(1);o.element=i;var r=n(0);r.isArray=i.isArray,r.isFunction=i.isFunction,r.isObject=i.isPlainObject,r.bind=i.proxy,r.each=function(h,C){i.each(h,f);function f(p,g){return C(g,p)}},r.map=i.map,r.mixin=i.extend,r.Event=i.Event;var l="aaAutocomplete",s=n(51),a=n(16);function d(h,C,f,p){f=r.isArray(f)?f:[].slice.call(arguments,2);var g=i(h).each(function(m,v){var y=i(v),x=new a({el:y}),L=p||new s({input:y,eventBus:x,dropdownMenuContainer:C.dropdownMenuContainer,hint:C.hint===void 0?!0:!!C.hint,minLength:C.minLength,autoselect:C.autoselect,autoselectOnBlur:C.autoselectOnBlur,tabAutocomplete:C.tabAutocomplete,openOnFocus:C.openOnFocus,templates:C.templates,debug:C.debug,clearOnSelected:C.clearOnSelected,cssClasses:C.cssClasses,datasets:f,keyboardShortcuts:C.keyboardShortcuts,appendTo:C.appendTo,autoWidth:C.autoWidth,ariaLabel:C.ariaLabel||v.getAttribute("aria-label")});y.data(l,L)});return g.autocomplete={},r.each(["open","close","getVal","setVal","destroy","getWrapper"],function(m){g.autocomplete[m]=function(){var v=arguments,y;return g.each(function(x,L){var H=i(L).data(l);y=H[m].apply(H,v)}),y}}),g}d.sources=s.sources,d.escapeHighlightedString=r.escapeHighlightedString;var c="autocomplete"in window,u=window.autocomplete;d.noConflict=function(){return c?window.autocomplete=u:delete window.autocomplete,d},e.exports=d},function(e,t,n){var i="aaAttrs",o=n(0),r=n(1),l=n(16),s=n(52),a=n(59),d=n(17),c=n(11);function u(p){var g,m;if(p=p||{},p.input||o.error("missing input"),this.isActivated=!1,this.debug=!!p.debug,this.autoselect=!!p.autoselect,this.autoselectOnBlur=!!p.autoselectOnBlur,this.openOnFocus=!!p.openOnFocus,this.minLength=o.isNumber(p.minLength)?p.minLength:1,this.autoWidth=p.autoWidth===void 0?!0:!!p.autoWidth,this.clearOnSelected=!!p.clearOnSelected,this.tabAutocomplete=p.tabAutocomplete===void 0?!0:!!p.tabAutocomplete,p.hint=!!p.hint,p.hint&&p.appendTo)throw new Error("[autocomplete.js] hint and appendTo options can't be used at the same time");this.css=p.css=o.mixin({},c,p.appendTo?c.appendTo:{}),this.cssClasses=p.cssClasses=o.mixin({},c.defaultClasses,p.cssClasses||{}),this.cssClasses.prefix=p.cssClasses.formattedPrefix=o.formatPrefix(this.cssClasses.prefix,this.cssClasses.noPrefix),this.listboxId=p.listboxId=[this.cssClasses.root,"listbox",o.getUniqueId()].join("-");var v=h(p);this.$node=v.wrapper;var y=this.$input=v.input;g=v.menu,m=v.hint,p.dropdownMenuContainer&&r.element(p.dropdownMenuContainer).css("position","relative").append(g.css("top","0")),y.on("blur.aa",function(x){var L=document.activeElement;o.isMsie()&&(g[0]===L||g[0].contains(L))&&(x.preventDefault(),x.stopImmediatePropagation(),o.defer(function(){y.focus()}))}),g.on("mousedown.aa",function(x){x.preventDefault()}),this.eventBus=p.eventBus||new l({el:y}),this.dropdown=new u.Dropdown({appendTo:p.appendTo,wrapper:this.$node,menu:g,datasets:p.datasets,templates:p.templates,cssClasses:p.cssClasses,minLength:this.minLength}).onSync("suggestionClicked",this._onSuggestionClicked,this).onSync("cursorMoved",this._onCursorMoved,this).onSync("cursorRemoved",this._onCursorRemoved,this).onSync("opened",this._onOpened,this).onSync("closed",this._onClosed,this).onSync("shown",this._onShown,this).onSync("empty",this._onEmpty,this).onSync("redrawn",this._onRedrawn,this).onAsync("datasetRendered",this._onDatasetRendered,this),this.input=new u.Input({input:y,hint:m}).onSync("focused",this._onFocused,this).onSync("blurred",this._onBlurred,this).onSync("enterKeyed",this._onEnterKeyed,this).onSync("tabKeyed",this._onTabKeyed,this).onSync("escKeyed",this._onEscKeyed,this).onSync("upKeyed",this._onUpKeyed,this).onSync("downKeyed",this._onDownKeyed,this).onSync("leftKeyed",this._onLeftKeyed,this).onSync("rightKeyed",this._onRightKeyed,this).onSync("queryChanged",this._onQueryChanged,this).onSync("whitespaceChanged",this._onWhitespaceChanged,this),this._bindKeyboardShortcuts(p),this._setLanguageDirection()}o.mixin(u.prototype,{_bindKeyboardShortcuts:function(p){if(!!p.keyboardShortcuts){var g=this.$input,m=[];o.each(p.keyboardShortcuts,function(v){typeof v=="string"&&(v=v.toUpperCase().charCodeAt(0)),m.push(v)}),r.element(document).keydown(function(v){var y=v.target||v.srcElement,x=y.tagName;if(!(y.isContentEditable||x==="INPUT"||x==="SELECT"||x==="TEXTAREA")){var L=v.which||v.keyCode;m.indexOf(L)!==-1&&(g.focus(),v.stopPropagation(),v.preventDefault())}})}},_onSuggestionClicked:function(g,m){var v,y={selectionMethod:"click"};(v=this.dropdown.getDatumForSuggestion(m))&&this._select(v,y)},_onCursorMoved:function(g,m){var v=this.dropdown.getDatumForCursor(),y=this.dropdown.getCurrentCursor().attr("id");this.input.setActiveDescendant(y),v&&(m&&this.input.setInputValue(v.value,!0),this.eventBus.trigger("cursorchanged",v.raw,v.datasetName))},_onCursorRemoved:function(){this.input.resetInputValue(),this._updateHint(),this.eventBus.trigger("cursorremoved")},_onDatasetRendered:function(){this._updateHint(),this.eventBus.trigger("updated")},_onOpened:function(){this._updateHint(),this.input.expand(),this.eventBus.trigger("opened")},_onEmpty:function(){this.eventBus.trigger("empty")},_onRedrawn:function(){this.$node.css("top",0+"px"),this.$node.css("left",0+"px");var g=this.$input[0].getBoundingClientRect();this.autoWidth&&this.$node.css("width",g.width+"px");var m=this.$node[0].getBoundingClientRect(),v=g.bottom-m.top;this.$node.css("top",v+"px");var y=g.left-m.left;this.$node.css("left",y+"px"),this.eventBus.trigger("redrawn")},_onShown:function(){this.eventBus.trigger("shown"),this.autoselect&&this.dropdown.cursorTopSuggestion()},_onClosed:function(){this.input.clearHint(),this.input.removeActiveDescendant(),this.input.collapse(),this.eventBus.trigger("closed")},_onFocused:function(){if(this.isActivated=!0,this.openOnFocus){var g=this.input.getQuery();g.length>=this.minLength?this.dropdown.update(g):this.dropdown.empty(),this.dropdown.open()}},_onBlurred:function(){var g,m;g=this.dropdown.getDatumForCursor(),m=this.dropdown.getDatumForTopSuggestion();var v={selectionMethod:"blur"};this.debug||(this.autoselectOnBlur&&g?this._select(g,v):this.autoselectOnBlur&&m?this._select(m,v):(this.isActivated=!1,this.dropdown.empty(),this.dropdown.close()))},_onEnterKeyed:function(g,m){var v,y;v=this.dropdown.getDatumForCursor(),y=this.dropdown.getDatumForTopSuggestion();var x={selectionMethod:"enterKey"};v?(this._select(v,x),m.preventDefault()):this.autoselect&&y&&(this._select(y,x),m.preventDefault())},_onTabKeyed:function(g,m){if(!this.tabAutocomplete){this.dropdown.close();return}var v,y={selectionMethod:"tabKey"};(v=this.dropdown.getDatumForCursor())?(this._select(v,y),m.preventDefault()):this._autocomplete(!0)},_onEscKeyed:function(){this.dropdown.close(),this.input.resetInputValue()},_onUpKeyed:function(){var g=this.input.getQuery();this.dropdown.isEmpty&&g.length>=this.minLength?this.dropdown.update(g):this.dropdown.moveCursorUp(),this.dropdown.open()},_onDownKeyed:function(){var g=this.input.getQuery();this.dropdown.isEmpty&&g.length>=this.minLength?this.dropdown.update(g):this.dropdown.moveCursorDown(),this.dropdown.open()},_onLeftKeyed:function(){this.dir==="rtl"&&this._autocomplete()},_onRightKeyed:function(){this.dir==="ltr"&&this._autocomplete()},_onQueryChanged:function(g,m){this.input.clearHintIfInvalid(),m.length>=this.minLength?this.dropdown.update(m):this.dropdown.empty(),this.dropdown.open(),this._setLanguageDirection()},_onWhitespaceChanged:function(){this._updateHint(),this.dropdown.open()},_setLanguageDirection:function(){var g=this.input.getLanguageDirection();this.dir!==g&&(this.dir=g,this.$node.css("direction",g),this.dropdown.setLanguageDirection(g))},_updateHint:function(){var g,m,v,y,x,L;g=this.dropdown.getDatumForTopSuggestion(),g&&this.dropdown.isVisible()&&!this.input.hasOverflow()?(m=this.input.getInputValue(),v=s.normalizeQuery(m),y=o.escapeRegExChars(v),x=new RegExp("^(?:"+y+")(.+$)","i"),L=x.exec(g.value),L?this.input.setHint(m+L[1]):this.input.clearHint()):this.input.clearHint()},_autocomplete:function(g){var m,v,y,x;m=this.input.getHint(),v=this.input.getQuery(),y=g||this.input.isCursorAtEnd(),m&&v!==m&&y&&(x=this.dropdown.getDatumForTopSuggestion(),x&&this.input.setInputValue(x.value),this.eventBus.trigger("autocompleted",x.raw,x.datasetName))},_select:function(g,m){typeof g.value!="undefined"&&this.input.setQuery(g.value),this.clearOnSelected?this.setVal(""):this.input.setInputValue(g.value,!0),this._setLanguageDirection();var v=this.eventBus.trigger("selected",g.raw,g.datasetName,m);v.isDefaultPrevented()===!1&&(this.dropdown.close(),o.defer(o.bind(this.dropdown.empty,this.dropdown)))},open:function(){if(!this.isActivated){var g=this.input.getInputValue();g.length>=this.minLength?this.dropdown.update(g):this.dropdown.empty()}this.dropdown.open()},close:function(){this.dropdown.close()},setVal:function(g){g=o.toStr(g),this.isActivated?this.input.setInputValue(g):(this.input.setQuery(g),this.input.setInputValue(g,!0)),this._setLanguageDirection()},getVal:function(){return this.input.getQuery()},destroy:function(){this.input.destroy(),this.dropdown.destroy(),f(this.$node,this.cssClasses),this.$node=null},getWrapper:function(){return this.dropdown.$container[0]}});function h(p){var g,m,v,y;g=r.element(p.input),m=r.element(d.wrapper.replace("%ROOT%",p.cssClasses.root)).css(p.css.wrapper),!p.appendTo&&g.css("display")==="block"&&g.parent().css("display")==="table"&&m.css("display","table-cell");var x=d.dropdown.replace("%PREFIX%",p.cssClasses.prefix).replace("%DROPDOWN_MENU%",p.cssClasses.dropdownMenu);v=r.element(x).css(p.css.dropdown).attr({role:"listbox",id:p.listboxId}),p.templates&&p.templates.dropdownMenu&&v.html(o.templatify(p.templates.dropdownMenu)()),y=g.clone().css(p.css.hint).css(C(g)),y.val("").addClass(o.className(p.cssClasses.prefix,p.cssClasses.hint,!0)).removeAttr("id name placeholder required").prop("readonly",!0).attr({"aria-hidden":"true",autocomplete:"off",spellcheck:"false",tabindex:-1}),y.removeData&&y.removeData(),g.data(i,{"aria-autocomplete":g.attr("aria-autocomplete"),"aria-expanded":g.attr("aria-expanded"),"aria-owns":g.attr("aria-owns"),autocomplete:g.attr("autocomplete"),dir:g.attr("dir"),role:g.attr("role"),spellcheck:g.attr("spellcheck"),style:g.attr("style"),type:g.attr("type")}),g.addClass(o.className(p.cssClasses.prefix,p.cssClasses.input,!0)).attr({autocomplete:"off",spellcheck:!1,role:"combobox","aria-autocomplete":p.datasets&&p.datasets[0]&&p.datasets[0].displayKey?"both":"list","aria-expanded":"false","aria-label":p.ariaLabel,"aria-owns":p.listboxId}).css(p.hint?p.css.input:p.css.inputWithNoHint);try{g.attr("dir")||g.attr("dir","auto")}catch{}return m=p.appendTo?m.appendTo(r.element(p.appendTo).eq(0)).eq(0):g.wrap(m).parent(),m.prepend(p.hint?y:null).append(v),{wrapper:m,input:g,hint:y,menu:v}}function C(p){return{backgroundAttachment:p.css("background-attachment"),backgroundClip:p.css("background-clip"),backgroundColor:p.css("background-color"),backgroundImage:p.css("background-image"),backgroundOrigin:p.css("background-origin"),backgroundPosition:p.css("background-position"),backgroundRepeat:p.css("background-repeat"),backgroundSize:p.css("background-size")}}function f(p,g){var m=p.find(o.className(g.prefix,g.input));o.each(m.data(i),function(v,y){v===void 0?m.removeAttr(y):m.attr(y,v)}),m.detach().removeClass(o.className(g.prefix,g.input,!0)).insertAfter(p),m.removeData&&m.removeData(i),p.remove()}u.Dropdown=a,u.Input=s,u.sources=n(61),e.exports=u},function(e,t,n){var i;i={9:"tab",27:"esc",37:"left",39:"right",13:"enter",38:"up",40:"down"};var o=n(0),r=n(1),l=n(10);function s(u){var h=this,C,f,p,g;u=u||{},u.input||o.error("input is missing"),C=o.bind(this._onBlur,this),f=o.bind(this._onFocus,this),p=o.bind(this._onKeydown,this),g=o.bind(this._onInput,this),this.$hint=r.element(u.hint),this.$input=r.element(u.input).on("blur.aa",C).on("focus.aa",f).on("keydown.aa",p),this.$hint.length===0&&(this.setHint=this.getHint=this.clearHint=this.clearHintIfInvalid=o.noop),o.isMsie()?this.$input.on("keydown.aa keypress.aa cut.aa paste.aa",function(m){i[m.which||m.keyCode]||o.defer(o.bind(h._onInput,h,m))}):this.$input.on("input.aa",g),this.query=this.$input.val(),this.$overflowHelper=a(this.$input)}s.normalizeQuery=function(u){return(u||"").replace(/^\s*/g,"").replace(/\s{2,}/g," ")},o.mixin(s.prototype,l,{_onBlur:function(){this.resetInputValue(),this.$input.removeAttr("aria-activedescendant"),this.trigger("blurred")},_onFocus:function(){this.trigger("focused")},_onKeydown:function(h){var C=i[h.which||h.keyCode];this._managePreventDefault(C,h),C&&this._shouldTrigger(C,h)&&this.trigger(C+"Keyed",h)},_onInput:function(){this._checkInputValue()},_managePreventDefault:function(h,C){var f,p,g;switch(h){case"tab":p=this.getHint(),g=this.getInputValue(),f=p&&p!==g&&!c(C);break;case"up":case"down":f=!c(C);break;default:f=!1}f&&C.preventDefault()},_shouldTrigger:function(h,C){var f;switch(h){case"tab":f=!c(C);break;default:f=!0}return f},_checkInputValue:function(){var h,C,f;h=this.getInputValue(),C=d(h,this.query),f=C&&this.query?this.query.length!==h.length:!1,this.query=h,C?f&&this.trigger("whitespaceChanged",this.query):this.trigger("queryChanged",this.query)},focus:function(){this.$input.focus()},blur:function(){this.$input.blur()},getQuery:function(){return this.query},setQuery:function(h){this.query=h},getInputValue:function(){return this.$input.val()},setInputValue:function(h,C){typeof h=="undefined"&&(h=this.query),this.$input.val(h),C?this.clearHint():this._checkInputValue()},expand:function(){this.$input.attr("aria-expanded","true")},collapse:function(){this.$input.attr("aria-expanded","false")},setActiveDescendant:function(h){this.$input.attr("aria-activedescendant",h)},removeActiveDescendant:function(){this.$input.removeAttr("aria-activedescendant")},resetInputValue:function(){this.setInputValue(this.query,!0)},getHint:function(){return this.$hint.val()},setHint:function(h){this.$hint.val(h)},clearHint:function(){this.setHint("")},clearHintIfInvalid:function(){var h,C,f,p;h=this.getInputValue(),C=this.getHint(),f=h!==C&&C.indexOf(h)===0,p=h!==""&&f&&!this.hasOverflow(),p||this.clearHint()},getLanguageDirection:function(){return(this.$input.css("direction")||"ltr").toLowerCase()},hasOverflow:function(){var h=this.$input.width()-2;return this.$overflowHelper.text(this.getInputValue()),this.$overflowHelper.width()>=h},isCursorAtEnd:function(){var u,h,C;return u=this.$input.val().length,h=this.$input[0].selectionStart,o.isNumber(h)?h===u:document.selection?(C=document.selection.createRange(),C.moveStart("character",-u),u===C.text.length):!0},destroy:function(){this.$hint.off(".aa"),this.$input.off(".aa"),this.$hint=this.$input=this.$overflowHelper=null}});function a(u){return r.element('<pre aria-hidden="true"></pre>').css({position:"absolute",visibility:"hidden",whiteSpace:"pre",fontFamily:u.css("font-family"),fontSize:u.css("font-size"),fontStyle:u.css("font-style"),fontVariant:u.css("font-variant"),fontWeight:u.css("font-weight"),wordSpacing:u.css("word-spacing"),letterSpacing:u.css("letter-spacing"),textIndent:u.css("text-indent"),textRendering:u.css("text-rendering"),textTransform:u.css("text-transform")}).insertAfter(u)}function d(u,h){return s.normalizeQuery(u)===s.normalizeQuery(h)}function c(u){return u.altKey||u.ctrlKey||u.metaKey||u.shiftKey}e.exports=s},function(e,t,n){var i=[n(54),n(55),n(56),n(57),n(58)],o,r,l=-1,s=[],a=!1;function d(){!o||!r||(o=!1,r.length?s=r.concat(s):l=-1,s.length&&c())}function c(){if(!o){a=!1,o=!0;for(var g=s.length,m=setTimeout(d);g;){for(r=s,s=[];r&&++l<g;)r[l].run();l=-1,g=s.length}r=null,l=-1,o=!1,clearTimeout(m)}}for(var u,h=-1,C=i.length;++h<C;)if(i[h]&&i[h].test&&i[h].test()){u=i[h].install(c);break}function f(g,m){this.fun=g,this.array=m}f.prototype.run=function(){var g=this.fun,m=this.array;switch(m.length){case 0:return g();case 1:return g(m[0]);case 2:return g(m[0],m[1]);case 3:return g(m[0],m[1],m[2]);default:return g.apply(null,m)}},e.exports=p;function p(g){var m=new Array(arguments.length-1);if(arguments.length>1)for(var v=1;v<arguments.length;v++)m[v-1]=arguments[v];s.push(new f(g,m)),!a&&!o&&(a=!0,u())}},function(e,t,n){(function(i){t.test=function(){return typeof i!="undefined"&&!i.browser},t.install=function(o){return function(){i.nextTick(o)}}}).call(t,n(9))},function(e,t,n){(function(i){var o=i.MutationObserver||i.WebKitMutationObserver;t.test=function(){return o},t.install=function(r){var l=0,s=new o(r),a=i.document.createTextNode("");return s.observe(a,{characterData:!0}),function(){a.data=l=++l%2}}}).call(t,n(4))},function(e,t,n){(function(i){t.test=function(){return i.setImmediate?!1:typeof i.MessageChannel!="undefined"},t.install=function(o){var r=new i.MessageChannel;return r.port1.onmessage=o,function(){r.port2.postMessage(0)}}}).call(t,n(4))},function(e,t,n){(function(i){t.test=function(){return"document"in i&&"onreadystatechange"in i.document.createElement("script")},t.install=function(o){return function(){var r=i.document.createElement("script");return r.onreadystatechange=function(){o(),r.onreadystatechange=null,r.parentNode.removeChild(r),r=null},i.document.documentElement.appendChild(r),o}}}).call(t,n(4))},function(e,t,n){t.test=function(){return!0},t.install=function(i){return function(){setTimeout(i,0)}}},function(e,t,n){var i=n(0),o=n(1),r=n(10),l=n(60),s=n(11);function a(c){var u=this,h,C,f;c=c||{},c.menu||i.error("menu is required"),!i.isArray(c.datasets)&&!i.isObject(c.datasets)&&i.error("1 or more datasets required"),c.datasets||i.error("datasets is required"),this.isOpen=!1,this.isEmpty=!0,this.minLength=c.minLength||0,this.templates={},this.appendTo=c.appendTo||!1,this.css=i.mixin({},s,c.appendTo?s.appendTo:{}),this.cssClasses=c.cssClasses=i.mixin({},s.defaultClasses,c.cssClasses||{}),this.cssClasses.prefix=c.cssClasses.formattedPrefix||i.formatPrefix(this.cssClasses.prefix,this.cssClasses.noPrefix),h=i.bind(this._onSuggestionClick,this),C=i.bind(this._onSuggestionMouseEnter,this),f=i.bind(this._onSuggestionMouseLeave,this);var p=i.className(this.cssClasses.prefix,this.cssClasses.suggestion);this.$menu=o.element(c.menu).on("mouseenter.aa",p,C).on("mouseleave.aa",p,f).on("click.aa",p,h),this.$container=c.appendTo?c.wrapper:this.$menu,c.templates&&c.templates.header&&(this.templates.header=i.templatify(c.templates.header),this.$menu.prepend(this.templates.header())),c.templates&&c.templates.empty&&(this.templates.empty=i.templatify(c.templates.empty),this.$empty=o.element('<div class="'+i.className(this.cssClasses.prefix,this.cssClasses.empty,!0)+'"></div>'),this.$menu.append(this.$empty),this.$empty.hide()),this.datasets=i.map(c.datasets,function(m){return d(u.$menu,m,c.cssClasses)}),i.each(this.datasets,function(m){var v=m.getRoot();v&&v.parent().length===0&&u.$menu.append(v),m.onSync("rendered",u._onRendered,u)}),c.templates&&c.templates.footer&&(this.templates.footer=i.templatify(c.templates.footer),this.$menu.append(this.templates.footer()));var g=this;o.element(window).resize(function(){g._redraw()})}i.mixin(a.prototype,r,{_onSuggestionClick:function(u){this.trigger("suggestionClicked",o.element(u.currentTarget))},_onSuggestionMouseEnter:function(u){var h=o.element(u.currentTarget);if(!h.hasClass(i.className(this.cssClasses.prefix,this.cssClasses.cursor,!0))){this._removeCursor();var C=this;setTimeout(function(){C._setCursor(h,!1)},0)}},_onSuggestionMouseLeave:function(u){if(u.relatedTarget){var h=o.element(u.relatedTarget);if(h.closest("."+i.className(this.cssClasses.prefix,this.cssClasses.cursor,!0)).length>0)return}this._removeCursor(),this.trigger("cursorRemoved")},_onRendered:function(u,h){if(this.isEmpty=i.every(this.datasets,f),this.isEmpty)if(h.length>=this.minLength&&this.trigger("empty"),this.$empty)if(h.length<this.minLength)this._hide();else{var C=this.templates.empty({query:this.datasets[0]&&this.datasets[0].query});this.$empty.html(C),this.$empty.show(),this._show()}else i.any(this.datasets,p)?h.length<this.minLength?this._hide():this._show():this._hide();else this.isOpen&&(this.$empty&&(this.$empty.empty(),this.$empty.hide()),h.length>=this.minLength?this._show():this._hide());this.trigger("datasetRendered");function f(g){return g.isEmpty()}function p(g){return g.templates&&g.templates.empty}},_hide:function(){this.$container.hide()},_show:function(){this.$container.css("display","block"),this._redraw(),this.trigger("shown")},_redraw:function(){!this.isOpen||!this.appendTo||this.trigger("redrawn")},_getSuggestions:function(){return this.$menu.find(i.className(this.cssClasses.prefix,this.cssClasses.suggestion))},_getCursor:function(){return this.$menu.find(i.className(this.cssClasses.prefix,this.cssClasses.cursor)).first()},_setCursor:function(u,h){u.first().addClass(i.className(this.cssClasses.prefix,this.cssClasses.cursor,!0)).attr("aria-selected","true"),this.trigger("cursorMoved",h)},_removeCursor:function(){this._getCursor().removeClass(i.className(this.cssClasses.prefix,this.cssClasses.cursor,!0)).removeAttr("aria-selected")},_moveCursor:function(u){var h,C,f,p;if(!!this.isOpen){if(C=this._getCursor(),h=this._getSuggestions(),this._removeCursor(),f=h.index(C)+u,f=(f+1)%(h.length+1)-1,f===-1){this.trigger("cursorRemoved");return}else f<-1&&(f=h.length-1);this._setCursor(p=h.eq(f),!0),this._ensureVisible(p)}},_ensureVisible:function(u){var h,C,f,p;h=u.position().top,C=h+u.height()+parseInt(u.css("margin-top"),10)+parseInt(u.css("margin-bottom"),10),f=this.$menu.scrollTop(),p=this.$menu.height()+parseInt(this.$menu.css("padding-top"),10)+parseInt(this.$menu.css("padding-bottom"),10),h<0?this.$menu.scrollTop(f+h):p<C&&this.$menu.scrollTop(f+(C-p))},close:function(){this.isOpen&&(this.isOpen=!1,this._removeCursor(),this._hide(),this.trigger("closed"))},open:function(){this.isOpen||(this.isOpen=!0,this.isEmpty||this._show(),this.trigger("opened"))},setLanguageDirection:function(u){this.$menu.css(u==="ltr"?this.css.ltr:this.css.rtl)},moveCursorUp:function(){this._moveCursor(-1)},moveCursorDown:function(){this._moveCursor(1)},getDatumForSuggestion:function(u){var h=null;return u.length&&(h={raw:l.extractDatum(u),value:l.extractValue(u),datasetName:l.extractDatasetName(u)}),h},getCurrentCursor:function(){return this._getCursor().first()},getDatumForCursor:function(){return this.getDatumForSuggestion(this._getCursor().first())},getDatumForTopSuggestion:function(){return this.getDatumForSuggestion(this._getSuggestions().first())},cursorTopSuggestion:function(){this._setCursor(this._getSuggestions().first(),!1)},update:function(u){i.each(this.datasets,h);function h(C){C.update(u)}},empty:function(){i.each(this.datasets,u),this.isEmpty=!0;function u(h){h.clear()}},isVisible:function(){return this.isOpen&&!this.isEmpty},destroy:function(){this.$menu.off(".aa"),this.$menu=null,i.each(this.datasets,u);function u(h){h.destroy()}}}),a.Dataset=l;function d(c,u,h){return new a.Dataset(i.mixin({$menu:c,cssClasses:h},u))}e.exports=a},function(e,t,n){var i="aaDataset",o="aaValue",r="aaDatum",l=n(0),s=n(1),a=n(17),d=n(11),c=n(10);function u(p){p=p||{},p.templates=p.templates||{},p.source||l.error("missing source"),p.name&&!f(p.name)&&l.error("invalid dataset name: "+p.name),this.query=null,this._isEmpty=!0,this.highlight=!!p.highlight,this.name=typeof p.name=="undefined"||p.name===null?l.getUniqueId():p.name,this.source=p.source,this.displayFn=h(p.display||p.displayKey),this.debounce=p.debounce,this.cache=p.cache!==!1,this.templates=C(p.templates,this.displayFn),this.css=l.mixin({},d,p.appendTo?d.appendTo:{}),this.cssClasses=p.cssClasses=l.mixin({},d.defaultClasses,p.cssClasses||{}),this.cssClasses.prefix=p.cssClasses.formattedPrefix||l.formatPrefix(this.cssClasses.prefix,this.cssClasses.noPrefix);var g=l.className(this.cssClasses.prefix,this.cssClasses.dataset);this.$el=p.$menu&&p.$menu.find(g+"-"+this.name).length>0?s.element(p.$menu.find(g+"-"+this.name)[0]):s.element(a.dataset.replace("%CLASS%",this.name).replace("%PREFIX%",this.cssClasses.prefix).replace("%DATASET%",this.cssClasses.dataset)),this.$menu=p.$menu,this.clearCachedSuggestions()}u.extractDatasetName=function(g){return s.element(g).data(i)},u.extractValue=function(g){return s.element(g).data(o)},u.extractDatum=function(g){var m=s.element(g).data(r);return typeof m=="string"&&(m=JSON.parse(m)),m},l.mixin(u.prototype,c,{_render:function(g,m){if(!this.$el)return;var v=this,y,x=[].slice.call(arguments,2);if(this.$el.empty(),y=m&&m.length,this._isEmpty=!y,!y&&this.templates.empty)this.$el.html(L.apply(this,x)).prepend(v.templates.header?Z.apply(this,x):null).append(v.templates.footer?N.apply(this,x):null);else if(y)this.$el.html(H.apply(this,x)).prepend(v.templates.header?Z.apply(this,x):null).append(v.templates.footer?N.apply(this,x):null);else if(m&&!Array.isArray(m))throw new TypeError("suggestions must be an array");this.$menu&&this.$menu.addClass(this.cssClasses.prefix+(y?"with":"without")+"-"+this.name).removeClass(this.cssClasses.prefix+(y?"without":"with")+"-"+this.name),this.trigger("rendered",g);function L(){var A=[].slice.call(arguments,0);return A=[{query:g,isEmpty:!0}].concat(A),v.templates.empty.apply(this,A)}function H(){var A=[].slice.call(arguments,0),_,S,B=this,D=a.suggestions.replace("%PREFIX%",this.cssClasses.prefix).replace("%SUGGESTIONS%",this.cssClasses.suggestions);return _=s.element(D).css(this.css.suggestions),S=l.map(m,j),_.append.apply(_,S),_;function j(Q){var P,F=a.suggestion.replace("%PREFIX%",B.cssClasses.prefix).replace("%SUGGESTION%",B.cssClasses.suggestion);return P=s.element(F).attr({role:"option",id:["option",Math.floor(Math.random()*1e8)].join("-")}).append(v.templates.suggestion.apply(this,[Q].concat(A))),P.data(i,v.name),P.data(o,v.displayFn(Q)||void 0),P.data(r,JSON.stringify(Q)),P.children().each(function(){s.element(this).css(B.css.suggestionChild)}),P}}function Z(){var A=[].slice.call(arguments,0);return A=[{query:g,isEmpty:!y}].concat(A),v.templates.header.apply(this,A)}function N(){var A=[].slice.call(arguments,0);return A=[{query:g,isEmpty:!y}].concat(A),v.templates.footer.apply(this,A)}},getRoot:function(){return this.$el},update:function(g){function m(L){if(!this.canceled&&g===this.query){var H=[].slice.call(arguments,1);this.cacheSuggestions(g,L,H),this._render.apply(this,[g,L].concat(H))}}if(this.query=g,this.canceled=!1,this.shouldFetchFromCache(g))m.apply(this,[this.cachedSuggestions].concat(this.cachedRenderExtraArgs));else{var v=this,y=function(){v.canceled||v.source(g,m.bind(v))};if(this.debounce){var x=function(){v.debounceTimeout=null,y()};clearTimeout(this.debounceTimeout),this.debounceTimeout=setTimeout(x,this.debounce)}else y()}},cacheSuggestions:function(g,m,v){this.cachedQuery=g,this.cachedSuggestions=m,this.cachedRenderExtraArgs=v},shouldFetchFromCache:function(g){return this.cache&&this.cachedQuery===g&&this.cachedSuggestions&&this.cachedSuggestions.length},clearCachedSuggestions:function(){delete this.cachedQuery,delete this.cachedSuggestions,delete this.cachedRenderExtraArgs},cancel:function(){this.canceled=!0},clear:function(){this.cancel(),this.$el.empty(),this.trigger("rendered","")},isEmpty:function(){return this._isEmpty},destroy:function(){this.clearCachedSuggestions(),this.$el=null}});function h(p){return p=p||"value",l.isFunction(p)?p:g;function g(m){return m[p]}}function C(p,g){return{empty:p.empty&&l.templatify(p.empty),header:p.header&&l.templatify(p.header),footer:p.footer&&l.templatify(p.footer),suggestion:p.suggestion||m};function m(v){return"<p>"+g(v)+"</p>"}}function f(p){return/^[_a-zA-Z0-9-]+$/.test(p)}e.exports=u},function(e,t,n){e.exports={hits:n(62),popularIn:n(63)}},function(e,t,n){var i=n(0),o=n(18),r=n(19);e.exports=function(s,a){var d=r(s.as._ua);return d&&d[0]>=3&&d[1]>20&&(a=a||{},a.additionalUA="autocomplete.js "+o),c;function c(u,h){s.search(u,a,function(C,f){if(C){i.error(C.message);return}h(f.hits,f)})}}},function(e,t,n){var i=n(0),o=n(18),r=n(19);e.exports=function(s,a,d,c){var u=r(s.as._ua);if(u&&u[0]>=3&&u[1]>20&&(a=a||{},a.additionalUA="autocomplete.js "+o),!d.source)return i.error("Missing 'source' key");var h=i.isFunction(d.source)?d.source:function(p){return p[d.source]};if(!d.index)return i.error("Missing 'index' key");var C=d.index;return c=c||{},f;function f(p,g){s.search(p,a,function(m,v){if(m){i.error(m.message);return}if(v.hits.length>0){var y=v.hits[0],x=i.mixin({hitsPerPage:0},d);delete x.source,delete x.index;var L=r(C.as._ua);L&&L[0]>=3&&L[1]>20&&(a.additionalUA="autocomplete.js "+o),C.search(h(y),x,function(H,Z){if(H){i.error(H.message);return}var N=[];if(c.includeAll){var A=c.allTitle||"All departments";N.push(i.mixin({facet:{value:A,count:Z.nbHits}},i.cloneDeep(y)))}i.each(Z.facets,function(S,B){i.each(S,function(D,j){N.push(i.mixin({facet:{facet:B,value:j,count:D}},i.cloneDeep(y)))})});for(var _=1;_<v.hits.length;++_)N.push(v.hits[_]);g(N,v)});return}g([])})}}},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var i="algolia-docsearch",o=i+"-suggestion",r=i+"-footer",l={suggestion:`
  <a class="`+o+`
    {{#isCategoryHeader}}`+o+`__main{{/isCategoryHeader}}
    {{#isSubCategoryHeader}}`+o+`__secondary{{/isSubCategoryHeader}}
    "
    aria-label="Link to the result"
    href="{{{url}}}"
    >
    <div class="`+o+`--category-header">
        <span class="`+o+`--category-header-lvl0">{{{category}}}</span>
    </div>
    <div class="`+o+`--wrapper">
      <div class="`+o+`--subcategory-column">
        <span class="`+o+`--subcategory-column-text">{{{subcategory}}}</span>
      </div>
      {{#isTextOrSubcategoryNonEmpty}}
      <div class="`+o+`--content">
        <div class="`+o+`--subcategory-inline">{{{subcategory}}}</div>
        <div class="`+o+`--title">{{{title}}}</div>
        {{#text}}<div class="`+o+`--text">{{{text}}}</div>{{/text}}
      </div>
      {{/isTextOrSubcategoryNonEmpty}}
    </div>
  </a>
  `,suggestionSimple:`
  <div class="`+o+`
    {{#isCategoryHeader}}`+o+`__main{{/isCategoryHeader}}
    {{#isSubCategoryHeader}}`+o+`__secondary{{/isSubCategoryHeader}}
    suggestion-layout-simple
  ">
    <div class="`+o+`--category-header">
        {{^isLvl0}}
        <span class="`+o+"--category-header-lvl0 "+o+`--category-header-item">{{{category}}}</span>
          {{^isLvl1}}
          {{^isLvl1EmptyOrDuplicate}}
          <span class="`+o+"--category-header-lvl1 "+o+`--category-header-item">
              {{{subcategory}}}
          </span>
          {{/isLvl1EmptyOrDuplicate}}
          {{/isLvl1}}
        {{/isLvl0}}
        <div class="`+o+"--title "+o+`--category-header-item">
            {{#isLvl2}}
                {{{title}}}
            {{/isLvl2}}
            {{#isLvl1}}
                {{{subcategory}}}
            {{/isLvl1}}
            {{#isLvl0}}
                {{{category}}}
            {{/isLvl0}}
        </div>
    </div>
    <div class="`+o+`--wrapper">
      {{#text}}
      <div class="`+o+`--content">
        <div class="`+o+`--text">{{{text}}}</div>
      </div>
      {{/text}}
    </div>
  </div>
  `,footer:`
    <div class="`+r+`">
      Search by <a class="`+r+`--logo" href="https://www.algolia.com/docsearch">Algolia</a>
    </div>
  `,empty:`
  <div class="`+o+`">
    <div class="`+o+`--wrapper">
        <div class="`+o+"--content "+o+`--no-results">
            <div class="`+o+`--title">
                <div class="`+o+`--text">
                    No results found for query <b>"{{query}}"</b>
                </div>
            </div>
        </div>
    </div>
  </div>
  `,searchBox:`
  <form novalidate="novalidate" onsubmit="return false;" class="searchbox">
    <div role="search" class="searchbox__wrapper">
      <input id="docsearch" type="search" name="search" placeholder="Search the docs" autocomplete="off" required="required" class="searchbox__input"/>
      <button type="submit" title="Submit your search query." class="searchbox__submit" >
        <svg width=12 height=12 role="img" aria-label="Search">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sbx-icon-search-13"></use>
        </svg>
      </button>
      <button type="reset" title="Clear the search query." class="searchbox__reset hide">
        <svg width=12 height=12 role="img" aria-label="Reset">
          <use xmlns:xlink="http://www.w3.org/1999/xlink" xlink:href="#sbx-icon-clear-3"></use>
        </svg>
      </button>
    </div>
</form>

<div class="svg-icons" style="height: 0; width: 0; position: absolute; visibility: hidden">
  <svg xmlns="http://www.w3.org/2000/svg">
    <symbol id="sbx-icon-clear-3" viewBox="0 0 40 40"><path d="M16.228 20L1.886 5.657 0 3.772 3.772 0l1.885 1.886L20 16.228 34.343 1.886 36.228 0 40 3.772l-1.886 1.885L23.772 20l14.342 14.343L40 36.228 36.228 40l-1.885-1.886L20 23.772 5.657 38.114 3.772 40 0 36.228l1.886-1.885L16.228 20z" fill-rule="evenodd"></symbol>
    <symbol id="sbx-icon-search-13" viewBox="0 0 40 40"><path d="M26.806 29.012a16.312 16.312 0 0 1-10.427 3.746C7.332 32.758 0 25.425 0 16.378 0 7.334 7.333 0 16.38 0c9.045 0 16.378 7.333 16.378 16.38 0 3.96-1.406 7.593-3.746 10.426L39.547 37.34c.607.608.61 1.59-.004 2.203a1.56 1.56 0 0 1-2.202.004L26.807 29.012zm-10.427.627c7.322 0 13.26-5.938 13.26-13.26 0-7.324-5.938-13.26-13.26-13.26-7.324 0-13.26 5.936-13.26 13.26 0 7.322 5.936 13.26 13.26 13.26z" fill-rule="evenodd"></symbol>
  </svg>
</div>
  `};t.default=l},function(e,t,n){Object.defineProperty(t,"__esModule",{value:!0});var i=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(a){return typeof a}:function(a){return a&&typeof Symbol=="function"&&a.constructor===Symbol&&a!==Symbol.prototype?"symbol":typeof a},o=n(20),r=l(o);function l(a){return a&&a.__esModule?a:{default:a}}var s={mergeKeyWithParent:function(d,c){if(d[c]===void 0||i(d[c])!=="object")return d;var u=r.default.extend({},d,d[c]);return delete u[c],u},groupBy:function(d,c){var u={};return r.default.each(d,function(h,C){if(C[c]===void 0)throw new Error("[groupBy]: Object has no key "+c);var f=C[c];typeof f=="string"&&(f=f.toLowerCase()),Object.prototype.hasOwnProperty.call(u,f)||(u[f]=[]),u[f].push(C)}),u},values:function(d){return Object.keys(d).map(function(c){return d[c]})},flatten:function(d){var c=[];return d.forEach(function(u){if(!Array.isArray(u)){c.push(u);return}u.forEach(function(h){c.push(h)})}),c},flattenAndFlagFirst:function(d,c){var u=this.values(d).map(function(h){return h.map(function(C,f){return C[c]=f===0,C})});return this.flatten(u)},compact:function(d){var c=[];return d.forEach(function(u){!u||c.push(u)}),c},getHighlightedValue:function(d,c){return d._highlightResult&&d._highlightResult.hierarchy_camel&&d._highlightResult.hierarchy_camel[c]&&d._highlightResult.hierarchy_camel[c].matchLevel&&d._highlightResult.hierarchy_camel[c].matchLevel!=="none"&&d._highlightResult.hierarchy_camel[c].value?d._highlightResult.hierarchy_camel[c].value:d._highlightResult&&d._highlightResult&&d._highlightResult[c]&&d._highlightResult[c].value?d._highlightResult[c].value:d[c]},getSnippetedValue:function(d,c){if(!d._snippetResult||!d._snippetResult[c]||!d._snippetResult[c].value)return d[c];var u=d._snippetResult[c].value;return u[0]!==u[0].toUpperCase()&&(u="\u2026"+u),[".","!","?"].indexOf(u[u.length-1])===-1&&(u=u+"\u2026"),u},deepClone:function(d){return JSON.parse(JSON.stringify(d))}};t.default=s}])});var M6=`.algolia-autocomplete{width:100%;height:100%}.algolia-autocomplete .ds-dropdown-menu{width:480px;top:-6px;border-radius:6px;margin:8px 0 0;padding:0;text-align:left;height:auto;position:relative;border:0;z-index:999;max-width:600px;min-width:500px;box-shadow:var(--popup-box-shadow);backdrop-filter:blur(10px);background-color:var(--bg-color-container-transparent)}.algolia-autocomplete .ds-dropdown-menu .ds-suggestions{position:relative;z-index:1000;border-bottom:1px solid var(--component-stroke);padding:8px}.algolia-autocomplete .ds-dropdown-menu [class^=ds-dataset-]{position:relative;border-radius:6px;overflow:auto;border:1px solid var(--component-border)}.algolia-autocomplete .ds-dropdown-menu *{box-sizing:border-box}.algolia-autocomplete .algolia-docsearch-suggestion{display:block;position:relative;color:var(--text-primary);overflow:hidden}.algolia-autocomplete .algolia-docsearch-suggestion--category-header{display:none}.algolia-autocomplete .algolia-docsearch-suggestion--subcategory-column{float:left;width:30%;text-align:right;position:relative;padding:8px;color:var(--text-secondary);font-size:14px;word-wrap:break-word}.algolia-autocomplete .algolia-docsearch-suggestion--content{display:block;float:right;width:70%;position:relative;padding:8px 16px;cursor:pointer;border-radius:0 3px 3px 0}.algolia-autocomplete .algolia-docsearch-suggestion--content .algolia-docsearch-suggestion--subcategory-inline{display:none}.algolia-autocomplete .algolia-docsearch-suggestion--content:before{content:"";position:absolute;display:block;top:0;height:100%;width:1px;background:var(--component-border);left:-1px}.algolia-autocomplete .ds-dropdown-menu .ds-suggestion.ds-cursor .algolia-docsearch-suggestion.suggestion-layout-simple,.algolia-autocomplete .ds-dropdown-menu .ds-suggestion.ds-cursor .algolia-docsearch-suggestion:not(.suggestion-layout-simple) .algolia-docsearch-suggestion--content{background:var(--bg-color-container-hover);transition:all .2s linear}.algolia-autocomplete .algolia-docsearch-suggestion--title{font-weight:700;color:var(--text-primary);margin-bottom:0;font-size:16px;line-height:24px}.algolia-autocomplete .algolia-docsearch-suggestion--title+.algolia-docsearch-suggestion--text{margin-top:4px}.algolia-autocomplete .algolia-docsearch-suggestion--text{font-size:14px;line-height:22px;color:var(--text-secondary)}.algolia-autocomplete .algolia-docsearch-suggestion--highlight{padding:1px 4px;border-radius:3px;color:var(--brand-main);background-color:var(--brand-main-light);text-decoration:underline;text-decoration-color:var(--brand-main)}.algolia-autocomplete .algolia-docsearch-suggestion--no-results{width:100%;padding:8px 0;text-align:center;font-size:14px}.algolia-autocomplete .algolia-docsearch-footer{width:134px;height:26px;z-index:2000;margin:4px 8px;float:right;font-size:0;line-height:0}.algolia-autocomplete .algolia-docsearch-footer--logo{background-image:url("data:image/svg+xml;charset=utf-8,%3Csvg width='168' height='24' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cpath d='M78.988.938h16.594a2.968 2.968 0 0 1 2.966 2.966V20.5a2.967 2.967 0 0 1-2.966 2.964H78.988a2.967 2.967 0 0 1-2.966-2.964V3.897A2.961 2.961 0 0 1 78.988.938zm41.937 17.866c-4.386.02-4.386-3.54-4.386-4.106l-.007-13.336 2.675-.424v13.254c0 .322 0 2.358 1.718 2.364v2.248zm-10.846-2.18c.821 0 1.43-.047 1.855-.129v-2.719a6.334 6.334 0 0 0-1.574-.199 5.7 5.7 0 0 0-.897.069 2.699 2.699 0 0 0-.814.24c-.24.116-.439.28-.582.491-.15.212-.219.335-.219.656 0 .628.219.991.616 1.23s.938.362 1.615.362zm-.233-9.7c.883 0 1.629.109 2.231.328.602.218 1.088.525 1.444.915.363.396.609.922.76 1.483.157.56.232 1.175.232 1.85v6.874a32.5 32.5 0 0 1-1.868.314c-.834.123-1.772.185-2.813.185-.69 0-1.327-.069-1.895-.198a4.001 4.001 0 0 1-1.471-.636 3.085 3.085 0 0 1-.951-1.134c-.226-.465-.343-1.12-.343-1.803 0-.656.13-1.073.384-1.525a3.24 3.24 0 0 1 1.047-1.106c.445-.287.95-.492 1.532-.615a8.8 8.8 0 0 1 1.82-.185 8.404 8.404 0 0 1 1.972.24v-.438c0-.307-.035-.6-.11-.874a1.88 1.88 0 0 0-.384-.73 1.784 1.784 0 0 0-.724-.493 3.164 3.164 0 0 0-1.143-.205c-.616 0-1.177.075-1.69.164a7.735 7.735 0 0 0-1.26.307l-.321-2.192c.335-.117.834-.233 1.478-.349a10.98 10.98 0 0 1 2.073-.178zm52.842 9.626c.822 0 1.43-.048 1.854-.13V13.7a6.347 6.347 0 0 0-1.574-.199c-.294 0-.595.021-.896.069a2.7 2.7 0 0 0-.814.24 1.46 1.46 0 0 0-.582.491c-.15.212-.218.335-.218.656 0 .628.218.991.615 1.23.404.245.938.362 1.615.362zm-.226-9.694c.883 0 1.629.108 2.231.327.602.219 1.088.526 1.444.915.355.39.609.923.759 1.483a6.8 6.8 0 0 1 .233 1.852v6.873c-.41.088-1.034.19-1.868.314-.834.123-1.772.184-2.813.184-.69 0-1.327-.068-1.895-.198a4.001 4.001 0 0 1-1.471-.635 3.085 3.085 0 0 1-.951-1.134c-.226-.465-.343-1.12-.343-1.804 0-.656.13-1.073.384-1.524.26-.45.608-.82 1.047-1.107.445-.286.95-.491 1.532-.614a8.803 8.803 0 0 1 2.751-.13c.329.034.671.096 1.04.185v-.437a3.3 3.3 0 0 0-.109-.875 1.873 1.873 0 0 0-.384-.731 1.784 1.784 0 0 0-.724-.492 3.165 3.165 0 0 0-1.143-.205c-.616 0-1.177.075-1.69.164a7.75 7.75 0 0 0-1.26.307l-.321-2.193c.335-.116.834-.232 1.478-.348a11.633 11.633 0 0 1 2.073-.177zm-8.034-1.271a1.626 1.626 0 0 1-1.628-1.62c0-.895.725-1.62 1.628-1.62.904 0 1.63.725 1.63 1.62 0 .895-.733 1.62-1.63 1.62zm1.348 13.22h-2.689V7.27l2.69-.423v11.956zm-4.714 0c-4.386.02-4.386-3.54-4.386-4.107l-.008-13.336 2.676-.424v13.254c0 .322 0 2.358 1.718 2.364v2.248zm-8.698-5.903c0-1.156-.253-2.119-.746-2.788-.493-.677-1.183-1.01-2.067-1.01-.882 0-1.574.333-2.065 1.01-.493.676-.733 1.632-.733 2.788 0 1.168.246 1.953.74 2.63.492.683 1.183 1.018 2.066 1.018.882 0 1.574-.342 2.067-1.019.492-.683.738-1.46.738-2.63zm2.737-.007c0 .902-.13 1.584-.397 2.33a5.52 5.52 0 0 1-1.128 1.906 4.986 4.986 0 0 1-1.752 1.223c-.685.286-1.739.45-2.265.45-.528-.006-1.574-.157-2.252-.45a5.096 5.096 0 0 1-1.744-1.223c-.487-.527-.863-1.162-1.137-1.906a6.345 6.345 0 0 1-.41-2.33c0-.902.123-1.77.397-2.508a5.554 5.554 0 0 1 1.15-1.892 5.133 5.133 0 0 1 1.75-1.216c.679-.287 1.425-.423 2.232-.423.808 0 1.553.142 2.237.423a4.88 4.88 0 0 1 1.753 1.216 5.644 5.644 0 0 1 1.135 1.892c.287.738.431 1.606.431 2.508zm-20.138 0c0 1.12.246 2.363.738 2.882.493.52 1.13.78 1.91.78.424 0 .828-.062 1.204-.178.377-.116.677-.253.917-.417V9.33a10.476 10.476 0 0 0-1.766-.226c-.971-.028-1.71.37-2.23 1.004-.513.636-.773 1.75-.773 2.788zm7.438 5.274c0 1.824-.466 3.156-1.404 4.004-.936.846-2.367 1.27-4.296 1.27-.705 0-2.17-.137-3.34-.396l.431-2.118c.98.205 2.272.26 2.95.26 1.074 0 1.84-.219 2.299-.656.459-.437.684-1.086.684-1.948v-.437a8.07 8.07 0 0 1-1.047.397c-.43.13-.93.198-1.492.198-.739 0-1.41-.116-2.018-.349a4.206 4.206 0 0 1-1.567-1.025c-.431-.45-.774-1.017-1.013-1.694-.24-.677-.363-1.885-.363-2.773 0-.834.13-1.88.384-2.577.26-.696.629-1.298 1.129-1.796.493-.498 1.095-.881 1.8-1.162a6.605 6.605 0 0 1 2.428-.457c.87 0 1.67.109 2.45.24.78.129 1.444.265 1.985.415V18.17z' fill='%235468FF'/%3E%3Cpath d='M6.972 6.677v1.627c-.712-.446-1.52-.67-2.425-.67-.585 0-1.045.13-1.38.391a1.24 1.24 0 0 0-.502 1.03c0 .425.164.765.494 1.02.33.256.835.532 1.516.83.447.192.795.356 1.045.495.25.138.537.332.862.582.324.25.563.548.718.894.154.345.23.741.23 1.188 0 .947-.334 1.691-1.004 2.234-.67.542-1.537.814-2.601.814-1.18 0-2.16-.229-2.936-.686v-1.708c.84.628 1.814.942 2.92.942.585 0 1.048-.136 1.388-.407.34-.271.51-.646.51-1.125 0-.287-.1-.55-.302-.79-.203-.24-.42-.42-.655-.542-.234-.123-.585-.29-1.053-.503a61.27 61.27 0 0 1-.582-.271 13.67 13.67 0 0 1-.55-.287 4.275 4.275 0 0 1-.567-.351 6.92 6.92 0 0 1-.455-.4c-.18-.17-.31-.34-.39-.51-.08-.17-.155-.37-.224-.598a2.553 2.553 0 0 1-.104-.742c0-.915.333-1.638.998-2.17.664-.532 1.523-.798 2.576-.798.968 0 1.793.17 2.473.51zm7.468 5.696v-.287c-.022-.607-.187-1.088-.495-1.444-.309-.357-.75-.535-1.324-.535-.532 0-.99.194-1.373.583-.382.388-.622.949-.717 1.683h3.909zm1.005 2.792v1.404c-.596.34-1.383.51-2.362.51-1.255 0-2.255-.377-3-1.132-.744-.755-1.116-1.744-1.116-2.968 0-1.297.34-2.316 1.021-3.055.68-.74 1.548-1.11 2.6-1.11 1.033 0 1.852.323 2.458.966.606.644.91 1.572.91 2.784 0 .33-.033.676-.096 1.038h-5.314c.107.702.405 1.239.894 1.611.49.372 1.106.558 1.85.558.862 0 1.58-.202 2.155-.606zm6.605-1.77h-1.212c-.596 0-1.045.116-1.349.35-.303.234-.454.532-.454.894 0 .372.117.664.35.877.235.213.575.32 1.022.32.51 0 .912-.142 1.204-.424.293-.281.44-.651.44-1.108v-.91zm-4.068-2.554V9.325c.627-.361 1.457-.542 2.489-.542 2.116 0 3.175 1.026 3.175 3.08V17h-1.548v-.957c-.415.68-1.143 1.02-2.186 1.02-.766 0-1.38-.22-1.843-.661-.462-.442-.694-1.003-.694-1.684 0-.776.293-1.38.878-1.81.585-.431 1.404-.647 2.457-.647h1.34V11.8c0-.554-.133-.971-.399-1.253-.266-.282-.707-.423-1.324-.423a4.07 4.07 0 0 0-2.345.718zm9.333-1.93v1.42c.394-1 1.101-1.5 2.123-1.5.148 0 .313.016.494.048v1.531a1.885 1.885 0 0 0-.75-.143c-.542 0-.989.24-1.34.718-.351.479-.527 1.048-.527 1.707V17h-1.563V8.91h1.563zm5.01 4.084c.022.82.272 1.492.75 2.019.479.526 1.15.79 2.01.79.639 0 1.235-.176 1.788-.527v1.404c-.521.319-1.186.479-1.995.479-1.265 0-2.276-.4-3.031-1.197-.755-.798-1.133-1.792-1.133-2.984 0-1.16.38-2.151 1.14-2.975.761-.825 1.79-1.237 3.088-1.237.702 0 1.346.149 1.93.447v1.436a3.242 3.242 0 0 0-1.77-.495c-.84 0-1.513.266-2.019.798-.505.532-.758 1.213-.758 2.042zM40.24 5.72v4.579c.458-1 1.293-1.5 2.505-1.5.787 0 1.42.245 1.899.734.479.49.718 1.17.718 2.042V17h-1.564v-5.106c0-.553-.14-.98-.422-1.284-.282-.303-.652-.455-1.11-.455-.531 0-1.002.202-1.411.606-.41.405-.615 1.022-.615 1.851V17h-1.563V5.72h1.563zm14.966 10.02c.596 0 1.096-.253 1.5-.758.404-.506.606-1.157.606-1.955 0-.915-.202-1.62-.606-2.114-.404-.495-.92-.742-1.548-.742-.553 0-1.05.224-1.491.67-.442.447-.662 1.133-.662 2.058 0 .958.212 1.67.638 2.138.425.469.946.703 1.563.703zM53.004 5.72v4.42c.574-.894 1.388-1.341 2.44-1.341 1.022 0 1.857.383 2.506 1.149.649.766.973 1.781.973 3.047 0 1.138-.309 2.109-.925 2.912-.617.803-1.463 1.205-2.537 1.205-1.075 0-1.894-.447-2.457-1.34V17h-1.58V5.72h1.58zm9.908 11.104l-3.223-7.913h1.739l1.005 2.632 1.26 3.415c.096-.32.48-1.458 1.15-3.415l.909-2.632h1.66l-2.92 7.866c-.777 2.074-1.963 3.11-3.559 3.11a2.92 2.92 0 0 1-.734-.079v-1.34c.17.042.351.064.543.064 1.032 0 1.755-.57 2.17-1.708z' fill='%235D6494'/%3E%3Cpath d='M89.632 5.967v-.772a.978.978 0 0 0-.978-.977h-2.28a.978.978 0 0 0-.978.977v.793c0 .088.082.15.171.13a7.127 7.127 0 0 1 1.984-.28c.65 0 1.295.088 1.917.259.082.02.164-.04.164-.13m-6.248 1.01l-.39-.389a.977.977 0 0 0-1.382 0l-.465.465a.973.973 0 0 0 0 1.38l.383.383c.062.061.15.047.205-.014.226-.307.472-.601.746-.874.281-.28.568-.526.883-.751.068-.042.075-.137.02-.2m4.16 2.453v3.341c0 .096.104.165.192.117l2.97-1.537c.068-.034.089-.117.055-.184a3.695 3.695 0 0 0-3.08-1.866c-.068 0-.136.054-.136.13m0 8.048a4.489 4.489 0 0 1-4.49-4.482 4.488 4.488 0 0 1 4.49-4.482 4.488 4.488 0 0 1 4.489 4.482 4.484 4.484 0 0 1-4.49 4.482m0-10.85a6.363 6.363 0 1 0 0 12.729 6.37 6.37 0 0 0 6.372-6.368 6.358 6.358 0 0 0-6.371-6.36' fill='%23FFF'/%3E%3C/g%3E%3C/svg%3E");background-repeat:no-repeat;background-position:50%;background-size:100%;overflow:hidden;text-indent:-9000px;width:100%;height:100%;display:block}
`;function _6(e){if(!e.indexName)return;const t=Object.assign({apiKey:"b27ded009670a12d2f36303309a7f50a",appId:"FK4VWYRY3Q",inputSelector:"#TDSearch",debug:!1},e);window.docsearch(t)}V1({tag:"td-doc-search",docsearchInfo:{get:(e,t)=>t||{},set:(e,t)=>t,connect:e=>{const t=`
        <style>${L6}</style>
        <style>${M6}</style>
        <div class="TDesign-doc-search">
          <input id="TDSearch" class="TDesign-doc-search__inner" placeholder="\u641C\u7D22" type="text" />
          <span class="TDesign-doc-search__icon">${b6}</span>
        </div>
      `;Object.assign(e,{innerHTML:t})},observe(e,t){_6(t)}},render:()=>K`
    <div>
      <slot></slot>
    </div>
  `});var H6=`.TDesign-doc-content{display:flex;flex-direction:column;position:relative;background:var(--bg-color-docpage)}.TDesign-doc-content.hidden{opacity:0;visibility:hidden}.TDesign-doc-content.show{opacity:1;visibility:visible;transition:all .2s linear}.TDesign-doc-content .TDesign-doc-body{min-height:calc(100vh - var(--footer-height));color:var(--text-primary);padding-right:var(--content-padding-right)}.TDesign-doc-content .TDesign-doc-body__inner{width:100%;padding:64px var(--content-padding-left-right) 120px var(--content-padding-left-right);margin:0 auto;box-sizing:border-box;min-width:320px;max-width:var(--content-max-width)}.TDesign-doc-content__backtop{width:40px;height:40px;position:fixed;right:24px;bottom:40px;display:flex;justify-content:center;align-items:center;background-color:var(--bg-color-scroll);border-radius:100%;cursor:pointer;transition:all .2s linear;opacity:0;visibility:hidden;color:var(--text-secondary)}.TDesign-doc-content__backtop.show{opacity:1;visibility:visible}.TDesign-doc-content__backtop:hover{color:var(--text-primary);background-color:var(--text-disabled)}
`;const V6=228;function T6(){const e=['div[name="DEMO"]','div[name="API"]','div[name="DESIGN"]','div[name="DOC"]'];function t(i){return i.map(r=>{const[,l]=decodeURIComponent(r.href).split("#");return document.getElementById(l)}).map(r=>{if(!r)return 0;const{top:l}=r.getBoundingClientRect();return l+document.documentElement.scrollTop})}function n(i,o){const{scrollTop:r}=document.documentElement;for(let l=0;l<o.length;l++)if(r<=o[l]){if(i[l].classList.contains("active"))break;i.forEach(s=>s.classList.remove("active")),i[l].classList.add("active");break}}e.forEach(i=>{const o=document.querySelector(i);if(!o)return;const r=Array.from(o.querySelectorAll(".tdesign-toc_list_item_a"))||[],l=t(r);n(r,l)})}V1({tag:"td-doc-content",platform:"web",pageStatus:"show",mobileBodyStyle:c2,fixedAnchor:{get:(e,t)=>t||void 0,set:(e,t)=>t,connect:()=>{function e(){const{scrollTop:i}=document.documentElement,o=document.querySelectorAll(".tdesign-toc_container");i>V6?o.forEach(r=>{Object.assign(r.style,{position:"fixed",top:"152px"})}):o.forEach(r=>{Object.assign(r.style,{position:"absolute",top:"316px"})}),T6()}function t(i){if(i.target.tagName!=="A")return;const{target:o}=i,r=decodeURIComponent(o.href);if(!r.includes("#"))return;const[,l=""]=r.split("#");if(o.classList.contains("tdesign-header-anchor")||o.classList.contains("tdesign-toc_list_item_a")){const s=document.getElementById(l);if(!s)return;const{top:a}=s.getBoundingClientRect(),d=a+document.documentElement.scrollTop;requestAnimationFrame(()=>window.scrollTo({top:d-120,left:0}))}}function n(){const i=decodeURIComponent(location.href);if(!i.includes("#"))return;const[,o=""]=i.split("#"),r=document.getElementById(o);if(!r)return;const{top:l}=r.getBoundingClientRect(),s=l+document.documentElement.scrollTop;requestAnimationFrame(()=>window.scrollTo({top:s-120,left:0}))}return document.addEventListener("scroll",e),document.addEventListener("click",t),window.addEventListener("load",n),()=>{document.removeEventListener("scroll",e),document.removeEventListener("click",t),window.removeEventListener("load",n)}}},render:e=>K`
      <style>${H6}</style>
      <div class="TDesign-doc-content ${e.pageStatus}">
        <slot name="doc-header"></slot>

        <div class="TDesign-doc-body" style=${e.mobileBodyStyle}>
          <div class="TDesign-doc-body__inner">
            <slot></slot>
          </div>
        </div>

        <slot name="doc-footer"></slot>

        <td-backtop></td-backtop>
      </div>
    `});const E1="https://tdesign.gtimg.com/site";var bo={explain:`${E1}/spline/explain/index.html`,source:`${E1}/spline/source/index.html`,base:`${E1}/spline/base/index.html`,data:`${E1}/spline/data/index.html`,form:`${E1}/spline/form/index.html`,layout:`${E1}/spline/layout/index.html`,message:`${E1}/spline/message/index.html`,navigation:`${E1}/spline/navigation/index.html`,"design-mode":`${E1}/spline/design/mode_light/index.html`,"design-mode-dark":`${E1}/spline/design/mode_dark/index.html`,"design-layout":`${E1}/spline/design/layout_light/index.html`,"design-layout-dark":`${E1}/spline/design/layout_dark/index.html`,"design-motion":`${E1}/spline/design/motion_light/index.html`,"design-motion-dark":`${E1}/spline/design/motion_dark/index.html`,"design-color":`${E1}/spline/design/color_light/index.html`,"design-color-dark":`${E1}/spline/design/color_dark/index.html`,"design-value":`${E1}/spline/design/value_light/index.html`,"design-value-dark":`${E1}/spline/design/value_dark/index.html`,"design-icon":`${E1}/spline/design/icon_light/index.html`,"design-icon-dark":`${E1}/spline/design/icon_dark/index.html`,"design-font":`${E1}/spline/design/font_light/index.html`,"design-font-dark":`${E1}/spline/design/font_dark/index.html`},k6=`:host{width:100%;background-color:var(--bg-color-container);box-shadow:var(--header-box-shadow);position:relative}@media screen and (max-width: 960px){:host{--spline-visible: hidden;--issue-display: none;--title-font-size: 32px}}.TDesign-doc-header{height:var(--doc-header-height);padding-right:var(--content-padding-right)}.TDesign-doc-header__inner{padding:48px var(--content-padding-left-right);box-sizing:border-box;position:relative;display:flex;flex-direction:column;width:100%;height:100%;min-width:320px;max-width:var(--content-max-width);margin:0 auto}.TDesign-doc-header__thumb{position:absolute;height:calc(100% - 1px);width:1200px;max-width:100%;right:0;top:0;border:0;z-index:450;visibility:var(--spline-visible)}.TDesign-doc-header__thumb.light{display:var(--theme-block-light-display)}.TDesign-doc-header__thumb.dark{display:var(--theme-block-dark-display)}.TDesign-doc-header__badge{max-width:100%;display:flex}.TDesign-doc-header__badge img{margin-right:8px}.TDesign-doc-header__background{width:100%;position:absolute;left:0;bottom:0;height:88px;z-index:400;background:var(--bg-color-container);box-shadow:var(--header-box-shadow)}.TDesign-doc-header__content{display:flex;justify-content:flex-end;flex-direction:column;align-items:flex-end;margin-top:130px;flex:1;position:relative;z-index:500}.TDesign-doc-header__info{position:absolute;bottom:0;left:0}.TDesign-doc-header__info-title{font-size:var(--title-font-size, 48px);color:var(--text-primary);text-align:left;line-height:56px;margin:0;transition:top .2s var(--anim-time-fn-easing),opacity .2s linear,visibility .2s linear}.TDesign-doc-header__info-describe{margin-top:16px;font-size:14px;color:var(--text-secondary);line-height:22px;width:100%;box-sizing:border-box;transition:all .2s linear}
`;let Mo=null,P0=null;function U0(e,t){if(!t.shadowRoot)return;const n=t.shadowRoot.getElementById("__iframe__");let i="";e==="dark"?i=bo[`${t.spline}-dark`]:i=bo[t.spline],n&&i&&i!==n.src&&(clearTimeout(Mo),n.style="max-height: 0;",n.src=i)}function Z6(e){if(!e.shadowRoot)return;const t=e.shadowRoot.getElementById("__iframe__");clearTimeout(Mo),Mo=setTimeout(()=>{t&&(t.style=`
      max-height: 280px;
      transition: max-height .25s .2s var(--anim-time-fn-easing);
      -webkit-transition: max-height .25s .2s var(--anim-time-fn-easing);
    `)},600)}V1({tag:"td-doc-header",spline:{get:(e,t)=>t||"",set:(e,t)=>t,connect:e=>{const t=K5(n=>U0(n,e));return()=>t.disconnect()},observe:e=>{clearTimeout(P0);const t=document.documentElement.getAttribute("theme-mode")||"light";P0=setTimeout(()=>{U0(t,e)},600)}},platform:"web",mobileBodyStyle:c2,docInfo:{get:(e,t)=>t||void 0,set:(e,t)=>t,observe:(e,t)=>{if(document.getElementById("__td_doc_title__")||!t)return;const n=document.createElement("h1");n.id="__td_doc_title__",n.innerText=t.title,e.appendChild(n)}},fixedTitle:{get:(e,t)=>t||void 0,set:(e,t)=>t,connect:e=>{function t(){if(!e.shadowRoot)return;const{shadowRoot:n}=e,{scrollTop:i}=document.documentElement,o=n.querySelector(".TDesign-doc-header__background")||{style:{}},r=n.querySelector(".TDesign-doc-header__info-title")||{style:{}},l=n.querySelector(".TDesign-doc-header__info-describe")||{style:{}},s=n.querySelector(".TDesign-doc-header__thumb")||{style:{}},a=n.querySelector("td-doc-issue")||{style:{}},d=document.querySelector("td-doc-tabs"),u=window.innerWidth<1200?0:"260px";i>=228?r.style.position!=="fixed"&&(Object.assign(r.style,{position:"fixed",top:d?"16px":"28px",fontSize:"24px",lineHeight:"32px",opacity:1,visibility:"visible"}),Object.assign(o.style,{position:"fixed",top:"0",left:u}),d&&Object.assign(d.style,{position:"fixed",top:"64px",zIndex:500}),Object.assign(a.style,{position:"fixed",top:"24px",right:"24px"})):i>192&&i<228?r.style.visibility!=="hidden"&&(Object.assign(r.style,{opacity:0,visibility:"hidden"}),Object.assign(s.style,{opacity:0,visibility:"hidden"}),Object.assign(l.style,{opacity:0,visibility:"hidden"}),Object.assign(o.style,{position:"absolute",top:"unset",left:"0"}),d&&Object.assign(d.style,{position:"absolute",top:"228px"}),Object.assign(a.style,{position:"absolute",top:"calc(100% - 48px - 12px)"})):(r.style.position==="fixed"||r.style.visibility==="hidden")&&(Object.assign(r.style,{position:"unset",fontSize:"48px",lineHeight:"56px",opacity:1,visibility:"visible"}),Object.assign(l.style,{opacity:1,visibility:"visible"}),Object.assign(o.style,{position:"absolute",top:"unset",left:"0"}),d&&Object.assign(d.style,{position:"absolute",top:"228px"}),Object.assign(a.style,{position:"absolute",top:"calc(100% - 48px - 12px)"}),Object.assign(s.style,{opacity:1,visibility:"visible"}))}return document.addEventListener("scroll",t),()=>document.removeEventListener("scroll",t)}},render:e=>{const{docInfo:t,spline:n}=e,i={...e.mobileBodyStyle},o=bo[n];return K`
      ${o?K`
        <iframe id="__iframe__"
          class="TDesign-doc-header__thumb"
          onload="${Z6}"
        ></iframe>`:K``}
      <div class="TDesign-doc-header" style="${i}">
        <div class="TDesign-doc-header__inner">
          <div class="TDesign-doc-header__badge">
            <slot name="badge"></slot>
          </div>
          <div class="TDesign-doc-header__content">
            <div class="TDesign-doc-header__info">
              ${t?K`
                <h1 class="TDesign-doc-header__info-title">${t.title}</h1>
                <div class="TDesign-doc-header__info-describe">
                  <div innerHTML="${t.desc}"></div>
                </div>
              `:K``}
            </div>
          </div>
        </div>
      </div>
      <div class="TDesign-doc-header__background"></div>
      <td-doc-issue></td-doc-issue>
    `.css`${k6}`}});var D6=`:host{position:absolute;right:24px;top:calc(100% - 60px);z-index:500}@media screen and (max-width: 750px){:host{--issue-display: none}}.TDesign-component-issue{display:var(--issue-display, flex);padding:4px;height:32px;background:var(--bg-color-component-transparent);backdrop-filter:blur(10px);border-radius:6px;color:var(--text-primary);align-items:center;box-shadow:var(--popup-box-shadow)}.TDesign-component-issue .item{border-radius:var(--border-radius);transition:all .2s;display:flex;align-items:center;padding:5px 8px;line-height:22px;color:var(--text-primary);cursor:pointer;text-decoration:none}.TDesign-component-issue .item:hover{background:var(--bg-color-component-hover)}.TDesign-component-issue i{width:16px;height:16px;margin-right:8px}
`,E6=`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill="currentColor" d="M8.5 10.5V11.5H7.5V10.5H8.5Z" />
  <path fill="currentColor" d="M8.5 9.5V4.5H7.5V9.5H8.5Z" />
  <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M14.5 8C14.5 4.41015 11.5899 1.5 8 1.5C4.41015 1.5 1.5 4.41015 1.5 8C1.5 11.5899 4.41015 14.5 8 14.5C11.5899 14.5 14.5 11.5899 14.5 8ZM2.5 8C2.5 4.96243 4.96243 2.5 8 2.5C11.0376 2.5 13.5 4.96243 13.5 8C13.5 11.0376 11.0376 13.5 8 13.5C4.96243 13.5 2.5 11.0376 2.5 8Z" />
</svg>
`,N6=`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill="currentColor" d="M5.6577 11.8701L1.80908 8.01387L2.51619 7.30677L6.00156 10.799L12.9479 3.86154L13.655 4.56865L6.44074 11.7737C6.42006 11.8082 6.39487 11.8407 6.36516 11.8704C6.16976 12.0658 5.85291 12.0657 5.6577 11.8701Z" />
</svg>
`,A6=`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill="currentColor" d="M7.34998 8.64998V12.5H8.64998V8.64998H12.5V7.34998H8.64998V3.5H7.34998V7.34998H3.5V8.64998H7.34998Z" />
</svg>
`;const S6=e=>`https://github.com/Tencent/tdesign-${e}/issues/new/choose`,Et={vue:"https://github.com/Tencent/tdesign-vue/issues",react:"https://github.com/Tencent/tdesign-react/issues","vue-next":"https://github.com/Tencent/tdesign-vue-next/issues","mobile-vue":"https://github.com/Tencent/tdesign-mobile-vue/issues","mobile-react":"https://github.com/Tencent/tdesign-mobile-react/issues",miniprogram:"https://github.com/Tencent/tdesign-miniprogram/issues",flutter:"https://github.com/Tencent/tdesing-flutter/issues"};function Jn(){let e=location.pathname;return location.pathname==="/"&&location.hash&&(e=location.hash.slice(1)),e.match(/([\w-]+)\/components\/([\w-]+)/)||[]}function I6(){const[,e,t]=Jn();return{newUrl:ye()?`${Et[e]}/new`:S6(e),openUrl:ye()?`${Et[e]}?issue_search=${t}`:`${Et[e]}?q=is:issue+is:open+${t}`,closedUrl:ye()?`${Et[e]}?state=closed&issue_search=${t}`:`${Et[e]}?q=is:issue+is:closed+${t}`}}function Fi(e,t,n){e.preventDefault();const i=t[`${n}Url`];window.open(i,"_blank")}function j6(e){const{openNum:t,closedNum:n}=e,[,,i]=Jn(),o={openNum:t,closedNum:n,componentName:i,...I6()};return i?K`
    <section id="issue" class="TDesign-component-issue">
      <a onclick="${(r,l)=>Fi(l,o,"new")}" class="item">
        <i innerHTML=${A6}></i>
        <span>Issue</span>
      </a>
      <a onclick="${(r,l)=>Fi(l,o,"open")}" class="item">
        <i innerHTML=${E6}></i>
        <span>${(o==null?void 0:o.openNum)||""} Open</span>
      </a>
      <a onclick="${(r,l)=>Fi(l,o,"closed")}" class="item">
        <i innerHTML=${N6}></i>
        <span>${(o==null?void 0:o.closedNum)||""} Closed</span>
      </a>
    </section>
  `:K``}const O6=(e,t="open",n)=>`https://api.github.com/search/issues?q=is:issue+is:${t}+${e}+repo:Tencent/${n}`;function Q0(e,t,n="open",i){const o=O6(t,n,`tdesign-${i}`),r=`__tdesign_${i}_${t}_${n}__`,l=sessionStorage.getItem(r);if(l){const s=JSON.parse(l);Object.assign(e,{[`${n}Num`]:s.total_count})}else fetch(o).then(s=>s.json()).then(s=>{Object.assign(e,{[`${n}Num`]:s.total_count}),sessionStorage.setItem(r,JSON.stringify(s))}).catch(s=>{console.error(s)})}V1({tag:"td-doc-issue",openNum:{get:(e,t)=>t||"",set:(e,t)=>t,connect:e=>{const[,t,n]=Jn();!n||Q0(e,n,"open",t)}},closedNum:{get:(e,t)=>t||"",set:(e,t)=>t,connect:e=>{const[,t,n]=Jn();!n||Q0(e,n,"closed",t)}},render:e=>K`${j6(e)}`.css`${D6}`});const z6=()=>{const t=Xe()==="en";return[{title:t?"Resource":"\u8D44\u6E90",links:[{name:t?"Design Resource":"\u8BBE\u8BA1\u8D44\u6E90",url:Z1("/source"),target:"_self"},{name:"TDesign Starter",url:Z1("https://tdesign.tencent.com/starter/"),target:"_self"}]},{title:t?"Tencent Design":"\u817E\u8BAF\u8BBE\u8BA1",links:[{name:"CoDesign",url:"https://codesign.qq.com/",target:"_blank"},{name:"ProWork",url:"https://prowork.qq.com/",target:"_blank"},{name:"TDesign",url:`https://tdesign.${ye()?"woa":"tencent"}.com`,target:"_self"},ye()?{name:"TVision",url:"https://tvision.oa.com/",target:"_blank"}:null].filter(i=>i)},{title:t?"About":"\u5173\u4E8E",links:[{name:t?"About us":"\u5173\u4E8E\u6211\u4EEC",url:Z1("/about/introduce"),target:"_self"},{name:t?"Contact us":"\u8054\u7CFB\u6211\u4EEC",url:Z1("/about/contact"),target:"_self"},{name:t?"Feedback":"\u610F\u89C1\u53CD\u9988",url:"//support.qq.com/products/293854",target:"_blank"}]}]},B6=()=>{const e=Xe();return{zh:{footer:{copyright:"\u817E\u8BAF\u516C\u53F8 \u7248\u6743\u6240\u6709",weComGroup:"\u4F01\u4E1A\u5FAE\u4FE1\u7FA4",weComGroupDesc:"\u6B22\u8FCE\u5FAE\u4FE1\u626B\u7801\u8054\u7CFB\u6211\u4EEC"}},en:{footer:{copyright:"Tencent Copyright",weComGroup:"WeCom Group",weComGroupDesc:"Welcome to contact us"}}}[e]};var F6=`:host{font-size:14px;color:var(--text-secondary);min-height:var(--footer-height);box-sizing:border-box;--footer-logo-position: absolute;--footer-inner-position: static}.TDesign-doc-footer{position:relative;height:calc(var(--footer-height) - 56px);padding-right:var(--content-padding-right);background-color:var(--bg-color-footer);box-shadow:var(--footer-box-shadow)}.TDesign-doc-footer__inner{position:var(--footer-inner-position);margin:0 auto;padding:40px var(--content-padding-left-right);height:100%;box-sizing:border-box;display:flex;justify-content:space-between;max-width:var(--content-max-width)}.TDesign-doc-footer__content{display:flex;flex-direction:row;column-gap:24px;width:100%}.TDesign-doc-footer__content-block{display:flex;flex-direction:column;min-width:120px}.TDesign-doc-footer__content-block .title{font-size:14px;font-weight:400;line-height:22px;margin-top:0;margin-bottom:24px;color:var(--text-placeholder)}.TDesign-doc-footer__content-block .link{cursor:pointer;text-decoration:none;color:var(--text-primary);font-size:14px;line-height:22px;margin-bottom:16px;transition:all var(--anim-duration-base) linear}.TDesign-doc-footer__content-block .link:hover{color:var(--text-interactive)}.TDesign-doc-footer__logos{display:inline-flex;align-items:center;row-gap:32px;column-gap:32px}.TDesign-doc-footer__qrcode{width:192px;padding:24px;box-sizing:border-box;border-radius:9px;background:var(--bg-color-code);border:1px solid var(--component-border);display:flex;flex-direction:column;align-items:center;position:absolute;right:48px;top:40px}.TDesign-doc-footer__qrcode-title{margin:0 0 4px;font-size:16px;line-height:24px;font-weight:700;color:var(--text-primary)}.TDesign-doc-footer__qrcode-desc{margin:0;font-size:14px;line-height:22px;color:var(--text-secondary)}.TDesign-doc-footer__bottom{height:56px;overflow:hidden;color:var(--text-placeholder);padding-right:var(--content-padding-right);background:var(--bg-color-secondaryfooter)}.TDesign-doc-footer__bottom .TDesign-doc-footer__inner{padding:0 var(--content-padding-left-right);align-items:center;column-gap:24px}.TDesign-doc-footer__bottom .TDesign-doc-footer__logos{position:var(--footer-logo-position);right:48px;bottom:0;height:56px}.TDesign-doc-footer__bottom .logo{height:34px;display:inline-flex;align-items:center}.TDesign-doc-footer__bottom .logo svg{transition:color .2s linear;color:var(--text-placeholder)}.TDesign-doc-footer__bottom .logo:not(i):hover svg{color:var(--text-secondary)}.TDesign-doc-footer__bottom .copyright{margin:0}@media screen and (max-width: 960px){.TDesign-doc-footer{height:auto}.TDesign-doc-footer__qrcode{position:unset}.TDesign-doc-footer__content{flex-direction:column;align-items:center;text-align:center;row-gap:24px}.TDesign-doc-footer__content .title{color:var(--text-primary);margin-bottom:12px}.TDesign-doc-footer__content .link{color:var(--text-placeholder)}.TDesign-doc-footer__bottom{height:112px}.TDesign-doc-footer__bottom .TDesign-doc-footer__inner{flex-direction:column-reverse;padding-top:16px;padding-bottom:16px}.TDesign-doc-footer__bottom .TDesign-doc-footer__logos{position:unset;height:auto}.TDesign-doc-footer__bottom .copyright{text-align:center}}
`,$6=`<svg width="105" height="28" viewBox="0 0 105 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_65_182)">
    <path
      d="M82.8701 4.73254H71.4558V6.38476H74.8911V12.4065H70.9536V14.0573H74.8911V24.1623H76.708V14.0573H81.0532V23.945H84.4832V22.2914H82.8634L82.8701 4.73254ZM76.708 12.4065V6.38476H81.0532V12.4065H76.708Z"
      fill="currentColor" />
    <path d="M60.2114 19.5378H51.2066V21.1901H60.2114V19.5378Z" fill="currentColor" />
    <path
      d="M45.0702 16.4803C45.0702 19.4838 44.8272 21.7637 44.3278 23.7844C44.2751 23.9707 44.3278 24.0206 44.4304 24.0206H46.0866C46.5188 21.7971 46.7313 19.5365 46.7211 17.2714H49.0361V22.4008H47.3919C47.3123 22.4008 47.257 22.4521 47.2921 22.5668L47.7443 24.0517H50.6842V4.77441H45.0702V16.4803ZM46.7224 15.7933V11.8341H49.0361V15.7933H46.7224ZM49.0361 6.43338V10.348H46.7224V6.43338H49.0361Z"
      fill="currentColor" />
    <path
      d="M60.85 11.4737H63.0678V9.98888H56.606C56.8095 9.48642 56.9866 8.97368 57.1365 8.45274H62.6615V6.96791H61.0416C61.3116 6.05001 61.6288 4.96607 61.6477 4.90398C61.6801 4.79329 61.6221 4.75145 61.5505 4.75145H60.1467L59.4947 6.96791H57.5037C57.69 6.1094 57.8506 5.15775 57.9977 4.08867C58.0153 3.96583 57.9491 3.94019 57.8627 3.94019H56.2686C56.1052 5.07541 55.9338 6.05406 55.7151 6.96791H54.7392L54.0872 4.75145H52.682C52.6105 4.75145 52.547 4.79329 52.5848 4.90398C52.6037 4.96607 52.9209 6.05001 53.1909 6.96791H51.6143V8.45274H55.2953C55.1238 8.9761 54.9218 9.48902 54.6906 9.98888H51.2093V11.4737H53.824C53.133 12.4726 52.2359 13.3118 51.1931 13.9345V15.6353C51.1931 15.7204 51.2606 15.8108 51.5306 15.6583C52.0629 15.3631 52.5768 15.0358 53.0694 14.6783H59.2207L59.168 16.9042H54.3086L54.3815 15.5732C54.382 15.5599 54.3798 15.5466 54.375 15.5341C54.3702 15.5217 54.3629 15.5104 54.3535 15.5009C54.3442 15.4914 54.333 15.4839 54.3206 15.4789C54.3082 15.474 54.2949 15.4716 54.2816 15.472H52.7319L52.5754 18.2891C52.5748 18.3026 52.577 18.316 52.5819 18.3285C52.5868 18.3411 52.5942 18.3525 52.6037 18.362C52.6133 18.3715 52.6246 18.3789 52.6372 18.3838C52.6497 18.3887 52.6632 18.3909 52.6766 18.3904H61.0551V22.4075H57.2756C57.1959 22.4075 57.1338 22.4602 57.177 22.5749L57.6292 24.0597H62.8693V16.9055H60.8176L60.8864 14.0141C61.5709 14.6491 62.328 15.2009 63.142 15.6583C63.412 15.8108 63.4781 15.7204 63.4781 15.6353V13.9304C62.4371 13.3081 61.541 12.4705 60.85 11.4737ZM58.8252 11.4737C59.1941 12.082 59.616 12.6566 60.0859 13.1907H54.6865C55.1417 12.6596 55.5428 12.0844 55.8839 11.4737H58.8252Z"
      fill="currentColor" />
    <path
      d="M72.6072 18.3891L69.543 20.7109V9.97278H65.2991V11.7897H67.7396V22.0783L66.7637 22.8126L67.7599 24.13L72.7705 20.3329V18.4674C72.7707 18.4484 72.7655 18.4297 72.7554 18.4135C72.7454 18.3974 72.731 18.3844 72.7138 18.3762C72.6966 18.368 72.6775 18.3648 72.6586 18.3671C72.6397 18.3694 72.6219 18.377 72.6072 18.3891Z"
      fill="currentColor" />
    <path
      d="M67.9786 8.34619H69.9642C69.9822 8.34637 70 8.34167 70.0156 8.33259C70.0311 8.32351 70.0439 8.31039 70.0527 8.29462C70.0614 8.27884 70.0657 8.26101 70.0651 8.24299C70.0645 8.22498 70.059 8.20747 70.0493 8.1923L67.5453 4.36682H65.5596C65.542 4.36677 65.5247 4.37131 65.5094 4.37999C65.4941 4.38867 65.4813 4.40119 65.4723 4.41632C65.4634 4.43145 65.4585 4.44865 65.4581 4.46625C65.4578 4.48384 65.4621 4.50122 65.4706 4.51666L67.9786 8.34619Z"
      fill="currentColor" />
    <path d="M102.663 5.17407H88.3249V6.99097H102.663V5.17407Z" fill="currentColor" />
    <path
      d="M93.5245 13.8562H104.682V12.0393H86.3055V13.8562H91.4039C90.351 16.6221 87.708 23.5603 87.6904 23.6102C87.6841 23.6253 87.6816 23.6417 87.6833 23.658C87.6849 23.6743 87.6907 23.6898 87.6999 23.7033C87.7092 23.7168 87.7218 23.7277 87.7364 23.735C87.751 23.7423 87.7672 23.7458 87.7836 23.7452H103.633C103.651 23.7453 103.667 23.741 103.682 23.7328C103.697 23.7246 103.71 23.7127 103.719 23.6983C103.728 23.6839 103.734 23.6674 103.735 23.6503C103.736 23.6333 103.733 23.6162 103.725 23.6008C103.708 23.5576 101.362 17.3915 101.362 17.3915H99.3882C99.3721 17.3916 99.3563 17.3956 99.342 17.4031C99.3277 17.4106 99.3155 17.4214 99.3062 17.4347C99.297 17.4479 99.291 17.4631 99.2889 17.479C99.2867 17.495 99.2884 17.5113 99.2937 17.5265C99.3194 17.5913 100.966 21.9283 100.966 21.9283H90.4563L93.5245 13.8562Z"
      fill="currentColor" />
    <path
      d="M36.1274 12.7332C35.2963 11.8813 34.3031 11.2043 33.2063 10.742C32.1096 10.2798 30.9314 10.0416 29.7412 10.0416C27.572 10.0416 25.7038 10.788 24.0719 12.1163C23.3605 12.6954 22.6154 13.3879 21.6772 14.299C21.3654 14.6027 15.2182 20.5677 11.1808 24.4836C10.6192 24.4836 9.81201 24.4742 9.09524 24.4499C7.07856 24.3811 5.8556 23.6076 5.16042 22.9259C4.38377 22.1682 3.85042 21.1963 3.62842 20.1342C3.40641 19.0721 3.50581 17.9679 3.91393 16.9625C4.32205 15.9571 5.02039 15.0961 5.91988 14.4893C6.81938 13.8824 7.87925 13.5572 8.96431 13.5552C9.9092 13.5552 11.2078 13.8252 12.667 15.0401C13.3635 15.6178 14.9104 16.9785 15.5894 17.5899C15.6048 17.6053 15.6257 17.6139 15.6474 17.6139C15.6692 17.6139 15.69 17.6053 15.7055 17.5899L18.1028 15.2534C18.1127 15.2451 18.1207 15.2348 18.1262 15.2231C18.1316 15.2115 18.1345 15.1987 18.1345 15.1859C18.1345 15.173 18.1316 15.1602 18.1262 15.1486C18.1207 15.1369 18.1127 15.1266 18.1028 15.1184C16.9514 14.0776 15.3181 12.6211 14.3354 11.8895C13.3401 11.1273 12.1981 10.5791 10.981 10.2791H11.0188C11.3852 8.52687 12.2952 6.93492 13.6193 5.73007C14.9433 4.52523 16.6138 3.76894 18.3928 3.56895C20.1717 3.36896 21.9685 3.73547 23.527 4.61626C25.0855 5.49706 26.3263 6.84721 27.0726 8.47439C27.0785 8.49358 27.0917 8.5097 27.1094 8.51928C27.127 8.52887 27.1477 8.53116 27.1671 8.52569C28.2707 8.21981 29.4177 8.10073 30.5606 8.17337C30.6753 8.18147 30.7199 8.11668 30.6821 8.01274C29.7894 5.48899 28.08 3.3353 25.8248 1.89291C23.5697 0.450524 20.8977 -0.198078 18.2322 0.0498744C15.5667 0.297826 13.0602 1.42815 11.1097 3.26176C9.15931 5.09537 7.87652 7.52739 7.46462 10.1725H7.47272C5.84132 10.4504 4.31849 11.1739 3.07241 12.2629C1.82634 13.3519 0.905516 14.7642 0.411655 16.3437C-0.0822067 17.9232 -0.129889 19.6084 0.273874 21.2133C0.677638 22.8182 1.51713 24.2802 2.69964 25.438C4.05827 26.7686 5.81442 27.619 7.70084 27.8596C8.54769 27.9568 9.3997 28.0018 10.2521 27.9946C11.062 27.9946 26.5853 27.9946 27.2359 27.9946C28.5439 27.9946 29.3957 27.9946 30.3082 27.9258C32.4045 27.7732 34.3847 27.0038 35.987 25.4326C36.8304 24.6081 37.503 23.6256 37.9666 22.541C38.4301 21.4565 38.6754 20.2913 38.6884 19.112C38.7014 17.9326 38.482 16.7623 38.0425 15.6678C37.6031 14.5733 36.9523 13.5761 36.1274 12.7332ZM33.5303 22.9259C32.8419 23.6008 31.6135 24.3811 29.5955 24.4499C28.6627 24.4809 27.5707 24.485 27.0753 24.485H16.236L24.0098 16.9339C24.3675 16.587 25.172 15.8176 25.8645 15.1926C27.3885 13.8225 28.7586 13.5458 29.7277 13.5552C30.8127 13.5575 31.8724 13.8829 32.7717 14.4898C33.6709 15.0968 34.3691 15.9578 34.777 16.9631C35.185 17.9685 35.2843 19.0725 35.0622 20.1345C34.8402 21.1965 34.3069 22.1683 33.5303 22.9259Z"
      fill="currentColor" />
  </g>
  <defs>
    <clipPath id="clip0_65_182">
      <rect width="104.682" height="28" fill="currentColor" />
    </clipPath>
  </defs>
</svg>`,R6=`<svg width="169" height="34" viewBox="0 0 169 34" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M50.6977 5.8872L48.0412 20.4756H46.233L47.2822 14.8947H46.0545C45.6415 16.9485 45.1615 18.8683 44.6927 20.4756H42.8845C43.4203 18.7232 43.9002 16.8257 44.3132 14.7608C45.0387 11.2672 45.608 7.91864 46.1103 4.84916H49.4588C50.4298 4.84916 50.7759 5.00543 50.6977 5.8872ZM48.1305 10.5416H46.9027C46.7353 11.4904 46.5567 12.4726 46.3781 13.399H47.5948L48.1305 10.5416ZM48.4654 6.36716H47.5724L47.1148 9.09062H48.3426L48.7891 6.71317C48.8449 6.42297 48.7444 6.36716 48.4654 6.36716ZM55.7428 18.3214H49.5816L49.336 16.9261H56.033L55.7428 18.3214ZM60.5312 12.2717L60.0624 13.8455C59.2652 13.6668 58.5082 13.3413 57.8301 12.8856L57.3948 14.7943H58.2765C58.9016 14.7943 59.3369 14.9059 59.203 15.6537C58.9909 17.0154 58.6672 18.8794 58.3658 20.4756H53.4993L53.1756 19.0804H56.6581C56.8367 18.2879 57.0264 17.3615 57.1604 16.6136C57.1604 16.3569 57.1604 16.2676 56.9036 16.2676H50.6977L51.2558 13.3544C50.7037 13.5968 50.1276 13.7801 49.5369 13.9013L49.9164 12.1154C51.036 11.819 52.069 11.2604 52.9301 10.4858H50.2624L50.5526 9.09062H53.9011C54.0409 8.82317 54.1639 8.54732 54.2695 8.26465H50.6977L50.9768 6.80247H52.2157L51.8139 4.68174H53.7002C53.823 5.39609 53.9681 6.06579 54.1244 6.83595H54.7383C54.9326 6.03014 55.0521 5.20814 55.0954 4.38037H56.9929C56.9377 5.1973 56.8107 6.00779 56.6134 6.80247H57.3948C57.6949 6.11083 57.9558 5.40279 58.1761 4.68174H60.0513C59.7914 5.40561 59.4895 6.11373 59.1472 6.80247H60.4642L60.1294 8.23117H56.2116C56.1 8.49905 55.9884 8.78925 55.8656 9.05713H60.7433L60.3973 10.4523H57.5845C58.3406 11.371 59.3814 12.0113 60.5424 12.2717H60.5312ZM55.5531 14.7943L55.8433 13.4995C55.8433 13.2539 55.8433 13.1646 55.5977 13.1646H52.2492L53.0863 13.7339L52.8743 14.8501L55.5531 14.7943ZM55.0508 10.4858C54.6613 10.9647 54.2237 11.4023 53.7449 11.7918H56.5576C56.2115 11.4011 55.9256 10.9609 55.7093 10.4858H55.0508Z"
    fill="currentColor" />
  <path
    d="M65.3532 16.7144C66.0898 16.1787 66.9381 15.4978 67.7194 14.8727L67.2953 17.1944C65.815 18.3602 64.2643 19.4338 62.652 20.409L64.4602 10.6424H62.6185L62.8864 9.03516H66.7149L65.3532 16.7144ZM65.3532 8.1199L64.6834 4.3584H66.5475L67.3065 8.1199H65.3532ZM77.8878 6.03266C77.1511 10.129 76.3475 14.75 75.6554 18.8128H77.8878L77.2516 20.4759H73.3226C73.8584 17.373 74.3272 14.6607 74.7625 12.2944H71.9051L70.4764 20.4759H68.4896L69.9183 12.2944H67.4404L67.7418 10.7764H70.1527L70.8336 6.93676L72.5748 8.23152L72.1283 10.7764H75.0304C75.2759 9.32537 75.5103 8.01944 75.7224 6.90327C75.8117 6.43448 75.6108 6.38983 75.209 6.38983H68.5566L68.1994 4.81603H76.7381C77.8766 4.81603 78.0552 5.12856 77.8878 6.03266Z"
    fill="currentColor" />
  <path
    d="M84.1831 13.9229L83.279 20.4748H79.8188L79.3389 18.901H81.5712L82.1516 14.6149L80.3992 15.1507L79.5956 13.6773C80.522 13.4318 81.4708 13.1639 82.4083 12.896L82.8883 9.36888H80.522L80.7564 7.79508H83.1227L83.5692 4.56934H85.4778L85.0313 7.79508H86.7726L86.5382 9.36888H84.8193L84.4063 12.2709C85.0871 12.0477 85.7569 11.8356 86.3596 11.6236L86.114 13.2532C85.5225 13.4987 84.8751 13.6885 84.1831 13.9229ZM92.5878 8.56524L92.2641 11.0543H94.8983C95.4899 11.0543 95.6127 11.2552 95.6127 11.6347C95.6249 12.1644 95.4685 12.6842 95.1662 13.1192C94.1971 14.4731 93.0733 15.7093 91.8177 16.8026C92.9405 18.0871 94.129 19.3128 95.3783 20.4748H92.532C91.7882 19.6921 91.0841 18.8725 90.4225 18.0192C89.3241 18.9177 88.1641 19.7383 86.9512 20.4748H83.9598C85.8541 19.3306 87.6633 18.0511 89.3733 16.6463C88.5808 15.5302 87.8106 14.414 87.1409 13.2978H89.2058C89.6784 14.0478 90.1926 14.7708 90.7461 15.4632C91.6784 14.663 92.5138 13.7565 93.2352 12.762C93.3022 12.6504 93.2352 12.6169 93.1571 12.6169H86.7168L86.9512 11.0766H90.2997L90.6234 8.58756H87.0963L87.3307 7.01376H90.802L91.1368 4.49121H93.1124L92.7776 7.01376H96.7288L96.5168 8.58756L92.5878 8.56524Z"
    fill="currentColor" />
  <path
    d="M103.895 10.151C102.736 13.2402 101.321 16.2271 99.6643 19.0804H97.0859C99.0203 16.3072 100.61 13.3086 101.819 10.151H103.895ZM114.666 7.56146L114.42 9.29153H107.544L106.015 20.4979H103.85L105.39 9.24688H98.6932L98.9723 7.51682H105.669L106.105 4.38037H108.214L107.79 7.51682L114.666 7.56146ZM110.603 10.151C111.351 13.1739 112.26 16.1546 113.326 19.0804H110.971C110.402 17.4619 109.051 12.0931 108.661 10.151H110.603ZM110.837 7.33823C110.58 6.62388 110.301 5.57468 110.067 4.63709H111.786C112.082 5.55597 112.428 6.45773 112.824 7.33823H110.837Z"
    fill="currentColor" />
  <path
    d="M123.997 13.4214H131.565L131.375 14.9059H128.54C127.324 16.0119 126.033 17.0337 124.678 17.9642C126.732 18.8013 129.064 19.6943 131.141 20.4867H126.486C125.191 19.9621 124.064 19.3706 122.892 18.9241C121.776 19.4487 120.503 20.0403 119.309 20.4867H114.621C116.731 19.7836 118.874 19.0357 120.827 18.1763L117.858 16.982C118.639 16.2788 119.376 15.5979 120.09 14.917H115.994L116.206 13.4325H121.597C122.01 13.0195 122.401 12.6066 122.78 12.1936H125.147C124.745 12.6289 124.365 13.0307 123.997 13.4214ZM119.276 12.3833H116.117C117.609 11.5364 119.001 10.5256 120.269 9.36966H122.725C121.658 10.4652 120.504 11.473 119.276 12.3833ZM132.179 7.51682L131.967 8.91203H125.537L125.091 11.8476H123.026L123.517 8.91203H117.032L117.233 7.51682H123.752L123.964 6.25554C122.1 6.33367 120.146 6.40064 118.383 6.43413L118.572 5.00543C123.037 4.91613 127.792 4.70406 131.319 4.38037L131.062 5.8872C129.701 5.98766 127.904 6.09928 125.95 6.18857L125.761 7.51682H132.179ZM122.546 14.9059C121.999 15.4751 121.497 16.022 120.995 16.4797C121.363 16.6471 122.01 16.9261 122.725 17.2164C123.834 16.5215 124.893 15.7494 125.895 14.9059H122.546ZM131.888 12.3833H129.21C128.328 11.5685 127.234 10.4412 126.274 9.36966H128.596C129.633 10.4386 130.732 11.445 131.888 12.3833Z"
    fill="currentColor" />
  <path
    d="M145.238 20.4754C143.879 19.5623 142.575 18.571 141.331 17.5064C140.125 18.8248 138.626 19.8417 136.956 20.4754H132.714C135.438 19.5601 139.166 18.098 140.17 15.821C140.466 15.0772 140.676 14.302 140.795 13.5105H142.872C142.743 14.6743 142.415 15.8072 141.9 16.859H143.017C144.868 18.2462 146.844 19.457 148.921 20.4754H145.238ZM137.213 17.5734H135.081L136.052 10.7759H146.934C148.051 10.7759 148.352 11.1777 148.184 12.1711L147.448 17.5734H145.327L146.041 12.6176C146.041 12.439 146.041 12.3497 145.807 12.3497H137.916L137.213 17.5734ZM147.827 9.76016H136.8L137.536 4.67041H147.202C148.318 4.67041 148.508 5.02758 148.318 6.14376L147.827 9.76016ZM146.019 6.22189H139.322L139.054 8.231H145.952L146.198 6.51209C146.254 6.33351 146.22 6.22189 146.019 6.22189Z"
    fill="currentColor" />
  <path
    d="M154.636 11.1441H151.712C153.853 9.16979 155.769 6.965 157.426 4.56982H163.498C164.157 4.56982 164.358 4.89351 164.614 5.42928C165.732 7.4117 166.969 9.32392 168.32 11.1552H165.664C164.701 9.62053 163.818 8.03718 163.018 6.41151C162.929 6.23292 162.784 6.19944 162.572 6.19944H158.632C157.393 7.91834 155.853 9.78235 154.636 11.1441ZM152.404 12.9523H167.048L166.78 14.6154H159.235C158.175 15.9953 157.035 17.311 155.819 18.5555H162.46C161.869 17.5509 161.277 16.4905 160.719 15.4413H162.951C163.965 17.1783 165.083 18.852 166.3 20.453H163.543L162.773 19.2028L162.215 20.319H151.723C153.561 18.5724 155.239 16.6634 156.734 14.6154H152.169L152.404 12.9523ZM156.623 9.03451H164.179L163.978 10.6641H156.422L156.623 9.03451Z"
    fill="currentColor" />
  <path
    d="M46.6572 24.6613H45.2731L44.4137 29.539H43.398L44.2574 24.6613H42.8845L43.0296 23.8242H46.8358L46.6572 24.6613Z"
    fill="currentColor" />
  <path
    d="M50.8654 26.1012C50.8748 26.2126 50.8748 26.3246 50.8654 26.436L50.7649 27.0276C50.6421 27.6973 50.3854 27.9317 49.7603 27.9317H48.0749V28.1661C48.0655 28.2775 48.0655 28.3895 48.0749 28.5009C48.0749 28.7577 48.2089 28.8246 48.6442 28.8246H50.1622L49.8496 29.5836H48.3875C47.4052 29.5836 47.0592 29.3381 47.0592 28.7242C47.0439 28.5496 47.0439 28.3741 47.0592 28.1996L47.3494 26.503C47.3882 26.148 47.5409 25.8151 47.7847 25.5542C48.1674 25.3046 48.6259 25.1979 49.0795 25.2529H49.5929C50.4412 25.2529 50.8654 25.465 50.8654 26.1012ZM49.9166 26.2463C49.9166 26.0565 49.805 26.0119 49.459 26.0119H48.9232C48.5772 26.0119 48.4098 26.0119 48.3316 26.503L48.2089 27.195H49.4925C49.7045 27.195 49.7827 27.1169 49.8162 26.916L49.8943 26.436C49.9114 26.3743 49.9189 26.3103 49.9166 26.2463Z"
    fill="currentColor" />
  <path
    d="M56.0111 26.0797C55.9946 26.3876 55.9536 26.6937 55.8883 26.995L55.4418 29.5845H54.5043L54.9507 27.062C54.9953 26.8447 55.0251 26.6247 55.04 26.4034C55.04 26.169 54.9172 26.0797 54.415 26.0797H53.4662L52.8635 29.5845H51.9259L52.6737 25.3096H54.7275C55.6762 25.3096 56.0111 25.5216 56.0111 26.0797Z"
    fill="currentColor" />
  <path
    d="M57.395 28.5899C57.4029 28.3201 57.4328 28.0513 57.4843 27.7863L57.6629 26.8041C57.6792 26.3677 57.8447 25.95 58.1317 25.6209C58.5105 25.3618 58.9712 25.2506 59.4265 25.3084H60.8217L60.5091 26.0674H59.393C59.2942 26.0537 59.1937 26.0605 59.0976 26.0874C59.0016 26.1143 58.9122 26.1606 58.8349 26.2236C58.7148 26.387 58.6415 26.5799 58.6228 26.7817L58.4442 27.7863C58.3992 27.9997 58.3693 28.216 58.3549 28.4337C58.3549 28.7574 58.5224 28.8243 59.0246 28.8243H60.3417L60.018 29.5833H58.7679C57.808 29.5833 57.395 29.3154 57.395 28.5899Z"
    fill="currentColor" />
  <path
    d="M65.6547 26.1011C65.6641 26.2126 65.6641 26.3246 65.6547 26.436L65.5542 27.0276C65.4314 27.6973 65.1859 27.9317 64.5608 27.9317H62.8642V28.1661C62.8555 28.2775 62.8555 28.3895 62.8642 28.5009C62.8642 28.7576 62.9982 28.8246 63.4446 28.8246H64.8733L64.572 29.5836H63.1768C62.1945 29.5836 61.8485 29.338 61.8485 28.7241C61.8332 28.5496 61.8332 28.3741 61.8485 28.1995L62.1387 26.503C62.1765 26.1455 62.3338 25.8112 62.5852 25.5542C62.9629 25.3026 63.4186 25.1956 63.8688 25.2529H64.3822C65.2082 25.2529 65.6547 25.4649 65.6547 26.1011ZM64.7059 26.2462C64.7059 26.0565 64.5943 26.0118 64.2483 26.0118H63.7125C63.3665 26.0118 63.1991 26.0118 63.121 26.503L62.9982 27.195H64.2818C64.4938 27.195 64.572 27.1169 64.6055 26.9159L64.6836 26.436C64.7007 26.3743 64.7082 26.3103 64.7059 26.2462Z"
    fill="currentColor" />
  <path
    d="M70.789 26.0797C70.7716 26.3869 70.7343 26.6926 70.6774 26.995L70.2198 29.5845H69.2822L69.7287 27.062C69.779 26.8457 69.8089 26.6252 69.818 26.4034C69.818 26.169 69.6952 26.0797 69.1929 26.0797H68.2553L67.6414 29.5845H66.7039L67.4405 25.3096H69.4943C70.4765 25.3096 70.789 25.5216 70.789 26.0797Z"
    fill="currentColor" />
  <path
    d="M73.5348 27.7855C73.4759 28.0273 73.4385 28.2738 73.4232 28.5222C73.4232 28.8124 73.6129 28.8235 74.1041 28.8235H74.6175L74.2938 29.5825H73.7469C72.8986 29.5825 72.4745 29.3593 72.4745 28.7008C72.4923 28.393 72.5333 28.0871 72.5972 27.7855L72.8986 26.0666H72.3293L72.4745 25.3076H73.0214L73.2446 24.0352H74.1822L73.959 25.3076H75.1533L75.0193 26.0666H73.8362L73.5348 27.7855Z"
    fill="currentColor" />
  <path
    d="M83.0671 24.6613H81.6496L80.8348 29.5837H79.8191L80.6339 24.6613H79.2386L79.3949 23.8242H83.1899L83.0671 24.6613Z"
    fill="currentColor" />
  <path
    d="M87.2415 26.1011C87.2509 26.2126 87.2509 26.3246 87.2415 26.436L87.141 27.0276C87.0182 27.6973 86.7727 27.9317 86.1476 27.9317H84.451V28.1661C84.4423 28.2775 84.4423 28.3895 84.451 28.5009C84.451 28.7576 84.585 28.8246 85.0314 28.8246H86.4155L86.1141 29.5836H84.7635C83.7813 29.5836 83.4353 29.338 83.4353 28.7241C83.42 28.5496 83.42 28.3741 83.4353 28.1995L83.7255 26.503C83.7632 26.1455 83.9206 25.8112 84.172 25.5542C84.5497 25.3026 85.0054 25.1956 85.4556 25.2529H85.969C86.8173 25.2529 87.2415 25.4649 87.2415 26.1011ZM86.2927 26.2462C86.2927 26.0565 86.1811 26.0118 85.8351 26.0118H85.2993C84.9533 26.0118 84.7859 26.0118 84.7077 26.503L84.585 27.195H85.8686C86.0806 27.195 86.1588 27.1169 86.1923 26.9159L86.2704 26.436C86.2875 26.3743 86.295 26.3103 86.2927 26.2462Z"
    fill="currentColor" />
  <path
    d="M88.3909 28.5908C88.4042 28.3208 88.4377 28.0522 88.4913 27.7872L88.6699 26.805C88.6816 26.3676 88.8477 25.9485 89.1387 25.6218C89.5166 25.3608 89.9781 25.2494 90.4335 25.3093H91.8287L91.505 26.0683H90.3888C90.29 26.0539 90.1893 26.0604 90.0932 26.0873C89.9971 26.1142 89.9077 26.161 89.8307 26.2246C89.7107 26.3879 89.6374 26.5808 89.6187 26.7826L89.4401 27.7872C89.3893 27.9996 89.3594 28.2164 89.3508 28.4346C89.3508 28.7583 89.507 28.8252 90.0093 28.8252H91.3264L91.0027 29.5842H89.7638C88.7927 29.5842 88.3909 29.3164 88.3909 28.5908Z"
    fill="currentColor" />
  <path
    d="M96.8742 26.0796C96.8577 26.3875 96.8167 26.6935 96.7514 26.9949L96.2938 29.5844H95.345L95.7915 27.0618C95.8419 26.8456 95.8718 26.6251 95.8808 26.4033C95.8808 26.1689 95.7692 26.0796 95.2557 26.0796H94.307L93.6931 29.5844H92.7778L93.827 23.5459H94.7646L94.4521 25.2871H95.5683C96.5393 25.3095 96.8742 25.5215 96.8742 26.0796Z"
    fill="currentColor" />
  <path
    d="M102.287 26.0797C102.265 26.3871 102.224 26.6927 102.165 26.995L101.707 29.5845H100.769L101.216 27.062C101.266 26.8457 101.296 26.6252 101.305 26.4034C101.305 26.169 101.182 26.0797 100.68 26.0797H99.7425L99.1286 29.5845H98.191L98.9389 25.3096H100.993C101.953 25.3096 102.287 25.5216 102.287 26.0797Z"
    fill="currentColor" />
  <path
    d="M104.341 25.3091H105.279L104.531 29.584H103.604L104.341 25.3091ZM104.62 23.646H105.591L105.39 24.6617H104.43L104.62 23.646Z"
    fill="currentColor" />
  <path
    d="M106.506 28.5905C106.52 28.3205 106.553 28.0519 106.607 27.7869L106.774 26.8046C106.794 26.3669 106.963 25.9491 107.254 25.6215C107.628 25.3602 108.086 25.2486 108.538 25.309H109.933L109.62 26.068H108.504C108.406 26.0536 108.305 26.0601 108.209 26.087C108.113 26.1139 108.023 26.1606 107.946 26.2242C107.826 26.3876 107.753 26.5805 107.734 26.7823L107.556 27.7869C107.503 27.9992 107.469 28.2159 107.455 28.4343C107.455 28.7579 107.623 28.8249 108.125 28.8249H109.442L109.118 29.5839H107.879C106.919 29.5839 106.506 29.316 106.506 28.5905Z"
    fill="currentColor" />
  <path
    d="M114.777 26.0782C114.765 26.3292 114.735 26.5791 114.688 26.8261L114.197 29.583H111.965C111.474 29.583 110.994 29.4379 110.994 28.8463C111.005 28.6063 111.035 28.3674 111.083 28.132V27.8753C111.195 27.2949 111.362 27.0605 111.73 26.96C112.017 26.9018 112.309 26.8793 112.601 26.893H113.717C113.759 26.7246 113.785 26.5527 113.795 26.3796C113.795 26.1564 113.661 26.0782 113.237 26.0782H111.719L111.596 25.3192H113.55C114.454 25.3081 114.777 25.5425 114.777 26.0782ZM113.427 28.824L113.639 27.6185H112.456C112.154 27.6185 112.054 27.7078 112.009 27.9869V28.1431C112.009 28.3887 111.942 28.5785 111.942 28.6454C111.942 28.7124 112.032 28.824 112.221 28.824H113.427Z"
    fill="currentColor" />
  <path
    d="M116.195 28.7469C116.206 28.4245 116.244 28.1035 116.307 27.787L117.054 23.5679H117.992L117.244 27.787C117.193 28.0299 117.16 28.2761 117.144 28.5237C117.144 28.8139 117.333 28.825 117.825 28.825H118.26L117.936 29.584H117.4C116.552 29.584 116.195 29.3831 116.195 28.7469Z"
    fill="currentColor" />
  <path
    d="M122.323 28.4565C122.329 28.1453 122.363 27.8353 122.423 27.53L122.814 25.2977C122.825 25.0599 122.885 24.827 122.991 24.6138C123.096 24.4005 123.245 24.2115 123.428 24.0587C123.766 23.8652 124.156 23.7832 124.544 23.8243H126.43L126.084 24.6615H124.667C124.064 24.6615 123.952 24.907 123.818 25.6549L123.55 27.1617C123.474 27.5111 123.422 27.8654 123.394 28.2221C123.394 28.635 123.662 28.702 124.287 28.702H125.693L125.336 29.5391H123.874C122.769 29.5838 122.323 29.2936 122.323 28.4565Z"
    fill="currentColor" />
  <path
    d="M127.19 28.6465C127.197 28.3766 127.227 28.1078 127.279 27.8428L127.48 26.7267C127.499 26.2908 127.664 25.874 127.949 25.5435C128.331 25.2939 128.79 25.1872 129.243 25.2421H129.768C130.717 25.2421 131.119 25.51 131.119 26.2355C131.105 26.5056 131.072 26.7742 131.018 27.0392L130.828 28.1553C130.806 28.5892 130.637 29.0027 130.348 29.3273C129.975 29.5887 129.517 29.7002 129.065 29.6399H128.54C127.58 29.6399 127.19 29.372 127.19 28.6465ZM129.132 28.8697C129.388 28.8697 129.567 28.8697 129.679 28.7246C129.794 28.5545 129.867 28.3593 129.891 28.1553L130.092 27.0392C130.135 26.8258 130.161 26.6093 130.17 26.3918C130.17 26.0681 130.002 26.0011 129.511 26.0011H129.188C129.09 25.9872 128.99 25.9928 128.894 26.0177C128.798 26.0426 128.708 26.0863 128.629 26.1462C128.5 26.313 128.426 26.5159 128.417 26.7267L128.216 27.8428C128.171 28.0562 128.142 28.2726 128.127 28.4902C128.127 28.8139 128.295 28.8697 128.786 28.8697H129.132Z"
    fill="currentColor" />
  <path
    d="M138.742 26.0797C138.725 26.3876 138.684 26.6937 138.619 26.995L138.161 29.5845H137.224L137.67 27.062C137.722 26.8457 137.756 26.6254 137.771 26.4034C137.771 26.169 137.637 26.0797 137.146 26.0797H136.286L135.672 29.5845H134.735L135.349 26.0797H133.897L133.295 29.5845H132.357L133.105 25.3096H137.458C138.418 25.3096 138.742 25.5216 138.742 26.0797Z"
    fill="currentColor" />
  <path
    d="M146.443 26.0797C146.431 26.3874 146.394 26.6935 146.332 26.995L145.863 29.5845H144.936L145.383 27.062C145.427 26.8447 145.457 26.6247 145.472 26.4034C145.472 26.169 145.349 26.0797 144.847 26.0797H143.988L143.34 29.5845H142.403L143.005 26.0797H141.566L140.952 29.5845H140.014L140.762 25.3096H145.126C146.12 25.3096 146.443 25.5216 146.443 26.0797Z"
    fill="currentColor" />
  <path
    d="M148.508 25.3091H149.446L148.698 29.584H147.805L148.508 25.3091ZM148.798 23.646H149.758L149.58 24.6059H148.62L148.798 23.646Z"
    fill="currentColor" />
  <path
    d="M152.024 27.7855C151.965 28.0273 151.928 28.2738 151.913 28.5222C151.913 28.8124 152.102 28.8235 152.593 28.8235H153.107L152.783 29.5825H152.27C151.433 29.5825 151.008 29.3593 151.008 28.7008C151.026 28.393 151.067 28.0871 151.131 27.7855L151.433 26.0666H150.863L150.997 25.3076H151.567L151.79 24.0352H152.727L152.504 25.3076H153.698L153.553 26.0666H152.37L152.024 27.7855Z"
    fill="currentColor" />
  <path
    d="M155.842 27.7855C155.791 28.0284 155.757 28.2745 155.741 28.5222C155.741 28.8124 155.92 28.8235 156.411 28.8235H156.924L156.601 29.5825H156.054C155.205 29.5825 154.781 29.3593 154.781 28.7008C154.799 28.393 154.84 28.0871 154.904 27.7855L155.205 26.0666H154.647L154.781 25.3076H155.339L155.574 24.0352H156.5L156.277 25.3076H157.482L157.337 26.0666H156.143L155.842 27.7855Z"
    fill="currentColor" />
  <path
    d="M162.226 26.101C162.236 26.2124 162.236 26.3245 162.226 26.4359L162.114 27.0275C161.992 27.6972 161.746 27.9316 161.121 27.9316H159.458V28.166C159.448 28.2774 159.448 28.3894 159.458 28.5008C159.458 28.7575 159.592 28.8245 160.027 28.8245H161.545L161.233 29.5835H159.849C158.866 29.5835 158.52 29.3379 158.52 28.724C158.51 28.5493 158.51 28.3742 158.52 28.1994L158.822 26.5029C158.851 26.1453 159.005 25.8095 159.257 25.5541C159.639 25.3027 160.098 25.1958 160.552 25.2527H161.054C161.802 25.2527 162.226 25.4648 162.226 26.101ZM161.288 26.2461C161.288 26.0564 161.177 26.0117 160.831 26.0117H160.295C159.949 26.0117 159.782 26.0117 159.692 26.5029L159.569 27.1949H160.853C161.065 27.1949 161.154 27.1167 161.177 26.9158L161.266 26.4359C161.278 26.3732 161.285 26.3098 161.288 26.2461Z"
    fill="currentColor" />
  <path
    d="M167.17 26.1012C167.18 26.2126 167.18 26.3246 167.17 26.436L167.07 27.0276C166.947 27.6973 166.691 27.9317 166.065 27.9317H164.414V28.1661C164.404 28.2775 164.404 28.3895 164.414 28.5009C164.414 28.7577 164.547 28.8246 164.983 28.8246H166.501L166.188 29.5836H164.804C163.822 29.5836 163.476 29.3381 163.476 28.7242C163.479 28.548 163.498 28.3725 163.532 28.1996L163.822 26.503C163.861 26.148 164.013 25.8151 164.257 25.5542C164.64 25.3046 165.098 25.1979 165.552 25.2529H166.065C166.78 25.2529 167.17 25.465 167.17 26.1012ZM166.222 26.2463C166.222 26.0565 166.11 26.0119 165.764 26.0119H165.228C164.882 26.0119 164.715 26.0119 164.637 26.503L164.514 27.195H165.798C166.01 27.195 166.088 27.1169 166.121 26.916L166.199 26.436C166.217 26.3743 166.224 26.3103 166.222 26.2463Z"
    fill="currentColor" />
  <path
    d="M33.4438 13.8888C33.3843 13.5911 33.3248 13.2935 33.2553 12.9959L33.1958 12.7776C33.1363 12.5494 33.0767 12.3212 33.0073 12.093L32.9478 11.9045C32.8684 11.6664 32.799 11.4382 32.7097 11.2001L32.6501 11.0513C32.5729 10.8186 32.4835 10.5901 32.3823 10.3667L23.1256 20.4667H26.4592L26.3005 20.8238L26.2211 20.9826C26.0155 21.4666 25.7734 21.9342 25.4968 22.3815C25.4569 22.4388 25.4204 22.4984 25.3877 22.5601L25.1793 22.8875C23.8216 24.9861 21.9405 26.6947 19.7215 27.845C17.5024 28.9953 15.0219 29.5476 12.5245 29.4474C10.027 29.3473 7.59868 28.5982 5.47884 27.2739C3.359 25.9496 1.62077 24.0959 0.435425 21.8953C0.439521 21.9316 0.439521 21.9682 0.435425 22.0045C0.554481 22.4013 0.693381 22.7982 0.842201 23.1851V23.2546C0.991022 23.6514 1.16961 24.0384 1.35811 24.4253L1.45733 24.6237C1.63591 24.9908 1.83434 25.348 2.04269 25.7051L2.17167 25.9036C2.38994 26.2607 2.61813 26.608 2.86616 26.9453C2.88693 26.98 2.91014 27.0132 2.93561 27.0445C3.18365 27.3719 3.43168 27.6993 3.69956 28.0367L3.79877 28.1557C4.07657 28.4732 4.36429 28.7709 4.66193 29.0685C4.72146 29.128 4.78099 29.1776 4.83059 29.2372C5.13816 29.5249 5.44572 29.8027 5.7632 30.0706L5.93187 30.1995C6.26919 30.4773 6.62636 30.7452 6.98353 31.0032C10.6964 33.5576 15.2711 34.5346 19.7036 33.7199C24.136 32.9052 28.0643 30.3653 30.6262 26.6576C31.9221 24.824 32.8389 22.75 33.3228 20.5574C33.8066 18.3647 33.8478 16.0975 33.4438 13.8888Z"
    fill="currentColor" />
  <path
    d="M30.5072 7.05256V6.99303C30.3385 6.76484 30.16 6.54657 29.9814 6.31838C29.8028 6.09019 29.8325 6.12987 29.7631 6.04058C28.6422 4.73506 27.3351 3.60178 25.8838 2.67723C22.2316 0.336465 17.8204 -0.513599 13.5599 0.302329C9.2993 1.11826 5.51428 3.53796 2.9853 7.06248C1.06626 9.93676 0.126718 13.3539 0.306526 16.8053C0.566232 19.9909 2.03246 22.9571 4.40566 25.0979C6.77886 27.2388 9.87993 28.3927 13.0753 28.324C14.9161 28.3233 16.7356 27.931 18.413 27.1731C17.8495 27.2714 17.2786 27.3212 16.7066 27.3219C15.3082 27.3161 13.9255 27.0274 12.6416 26.4732C11.3577 25.9191 10.1992 25.111 9.23577 24.0975C8.38807 23.2127 7.71487 22.176 7.25149 21.0417C6.64995 19.6188 6.37461 18.0793 6.44569 16.5362C6.51676 14.993 6.93244 13.4853 7.66222 12.1237C8.392 10.7622 9.41736 9.58129 10.6631 8.66772C11.9088 7.75414 13.3432 7.13107 14.8612 6.84421C16.7984 6.48705 18.7977 6.70076 20.6156 7.45934C20.6156 7.45934 21.3895 7.80658 21.7565 8.00501H21.826L22.2625 8.26297L22.461 8.40187L22.7487 8.6003L23.0265 8.80864C23.0969 8.85603 23.1632 8.90912 23.2249 8.96739L23.5424 9.23526C23.5933 9.27296 23.6399 9.31622 23.6813 9.36424L23.969 9.63212L24.0385 9.71149C24.1674 9.84047 24.2964 9.96945 24.4155 10.1083C24.5345 10.2472 24.5345 10.2373 24.5841 10.3068L24.7826 10.5449C25.4846 11.4426 26.0374 12.4477 26.4196 13.5213L31.291 8.21336C31.0628 7.84627 30.785 7.43949 30.5072 7.05256Z"
    fill="currentColor" />
</svg>`,P6=`<svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg"
  xmlns:xlink="http://www.w3.org/1999/xlink">
  <g filter="url(#filter0_d_20061_58885)">
    <rect x="8" width="144" height="144" rx="6" fill="white" />
    <rect x="10" y="2" width="140" height="140" rx="4" stroke="url(#paint0_linear_20061_58885)" stroke-width="4" />
  </g>
  <rect x="20" y="12" width="120" height="120" fill="url(#pattern0)" />
  <rect x="68" y="60" width="24" height="24" rx="3" fill="white" />
  <path
    d="M77.6496 80.214H74.3249C74.2698 80.214 74.2154 80.2021 74.1653 80.1792C74.1152 80.1564 74.0706 80.123 74.0344 80.0815C73.9983 80.0399 73.9715 79.9911 73.9559 79.9383C73.9402 79.8855 73.936 79.8299 73.9436 79.7754L74.5914 76.1187H78.6908L78.0226 79.9066C78.0048 79.9927 77.9582 80.0701 77.8903 80.1261C77.8224 80.182 77.7375 80.213 77.6496 80.214Z"
    fill="#009BFF" />
  <path
    d="M87.0085 67.8868H76.0383L76.7598 63.7874H87.5824C87.6417 63.7817 87.7015 63.79 87.7569 63.8116C87.8124 63.8332 87.8621 63.8675 87.9019 63.9117C87.9418 63.9559 87.9707 64.0089 87.9864 64.0663C88.0021 64.1237 88.0042 64.1841 87.9924 64.2424L87.3857 67.5794C87.3692 67.6669 87.3223 67.7458 87.2533 67.8021C87.1843 67.8583 87.0975 67.8884 87.0085 67.8868Z"
    fill="url(#paint1_linear_20061_58885)" />
  <path
    d="M76.0384 67.8861H72.3899C72.3341 67.8867 72.2788 67.8752 72.2279 67.8523C72.1769 67.8295 72.1316 67.7959 72.0949 67.7538C72.0583 67.7116 72.0312 67.6621 72.0156 67.6085C72 67.5549 71.9962 67.4985 72.0045 67.4433L72.599 64.1023C72.6152 64.014 72.6618 63.9341 72.7306 63.8765C72.7995 63.8188 72.8863 63.7871 72.9761 63.7866H76.7599L76.0384 67.8861Z"
    fill="#0064FF" />
  <path d="M78.6951 76.1062H74.5874L76.0386 67.895H80.1463L78.6951 76.1062Z" fill="url(#paint2_linear_20061_58885)" />
  <defs>
    <filter id="filter0_d_20061_58885" x="0" y="0" width="160" height="160" filterUnits="userSpaceOnUse"
      color-interpolation-filters="sRGB">
      <feFlood flood-opacity="0" result="BackgroundImageFix" />
      <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        result="hardAlpha" />
      <feOffset dy="8" />
      <feGaussianBlur stdDeviation="4" />
      <feComposite in2="hardAlpha" operator="out" />
      <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0" />
      <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_20061_58885" />
      <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_20061_58885" result="shape" />
    </filter>
    <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
      <use xlink:href="#image0_20061_58885" transform="scale(0.00384615)" />
    </pattern>
    <linearGradient id="paint0_linear_20061_58885" x1="80" y1="-9" x2="80" y2="150" gradientUnits="userSpaceOnUse">
      <stop stop-color="#4282EC" />
      <stop offset="1" stop-color="#0052D9" />
    </linearGradient>
    <linearGradient id="paint1_linear_20061_58885" x1="76.3901" y1="65.8412" x2="87.3297" y2="67.8103"
      gradientUnits="userSpaceOnUse">
      <stop offset="0.03" stop-color="#E9FFFF" />
      <stop offset="0.17" stop-color="#C4FAC9" />
      <stop offset="0.33" stop-color="#A0F694" />
      <stop offset="0.48" stop-color="#82F269" />
      <stop offset="0.63" stop-color="#6AEF47" />
      <stop offset="0.76" stop-color="#5AED2F" />
      <stop offset="0.89" stop-color="#4FEB20" />
      <stop offset="1" stop-color="#4CEB1B" />
    </linearGradient>
    <linearGradient id="paint2_linear_20061_58885" x1="78.0874" y1="67.5958" x2="78.1651" y2="75.3216"
      gradientUnits="userSpaceOnUse">
      <stop stop-color="#009BFF" />
      <stop offset="0.35" stop-color="#0081FE" />
      <stop offset="0.75" stop-color="#006AFD" />
      <stop offset="1" stop-color="#0062FD" />
    </linearGradient>
    <image id="image0_20061_58885" width="260" height="260"
      xlink:href="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQQAAAEECAYAAADOCEoKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAACK+SURBVHhe7dTRiiVJlizR/v+fnovSM819WBq0YuaeXkkIyNORreaRBfWv//nll19++V9+/4fwyy+//Iff/yH88ssv/+H3fwi//PLLf/j9H8Ivv/zyH/g/hH/961+fVahrNtQ2hbpbCnXNxmnbFOqiUHfLU7QZhbqv2OAvGviKQl2zobYp1N1SqGs2TtumUBeFulueos0o1H3FBn/RwFcU6poNtU2h7pZCXbNx2jaFuijU3fIUbUah7is2+IsGvqJQ12yobQp1txTqmo3TtinURaHulqdoMwp1X7HBXzTwFYW6ZkNtU6i7pVDXbJy2TaEuCnW3PEWbUaj7ig3+ooGvKNQ1G2qbQt0thbpm47RtCnVRqLvlKdqMQt1XbPAXDcQ30ftx4Yn7ZkNtPEWbcWG5f7NdfYrTt3Qf30TvxwZ/0UB8E70fF564bzbUxlO0GReW+zfb1ac4fUv38U30fmzwFw3EN9H7ceGJ+2ZDbTxFm3FhuX+zXX2K07d0H99E78cGf9FAfBO9HxeeuG821MZTtBkXlvs329WnOH1L9/FN9H5s8BcNxDfR+3HhiftmQ208RZtxYbl/s119itO3dB/fRO/HBn/RQBTqVoW6uLDcq20KdfEGy+7SLiy7apsLuo9CXbOxtEL3UahbFepig79oIAp1q0JdXFju1TaFuniDZXdpF5Zdtc0F3UehrtlYWqH7KNStCnWxwV80EIW6VaEuLiz3aptCXbzBsru0C8uu2uaC7qNQ12wsrdB9FOpWhbrY4C8aiELdqlAXF5Z7tU2hLt5g2V3ahWVXbXNB91GoazaWVug+CnWrQl1s8BcNRKFuVaiLC8u92qZQF2+w7C7twrKrtrmg+yjUNRtLK3QfhbpVoS42+IsGolC3KtTFheVebVOoizdYdpd2YdlV21zQfRTqmo2lFbqPQt2qUBcb/EUDUahbFeqiULe6oPsv21jahTd3o1DXbKhtCnVRqFsV6mKDv2ggCnWrQl0U6lYXdP9lG0u78OZuFOqaDbVNoS4KdatCXWzwFw1EoW5VqItC3eqC7r9sY2kX3tyNQl2zobYp1EWhblWoiw3+ooEo1K0KdVGoW13Q/ZdtLO3Cm7tRqGs21DaFuijUrQp1scFfNBCFulWhLgp1qwu6/7KNpV14czcKdc2G2qZQF4W6VaEuNviLBqJQtyrUxX8a+hviKdp826fQWz95ijZXhboo1K0KdbHBXzQQhbpVoS7+09DfEE/R5ts+hd76yVO0uSrURaFuVaiLDf6igSjUrQp18Z+G/oZ4ijbf9in01k+eos1VoS4KdatCXWzwFw1EoW5VqIv/NPQ3xFO0+bZPobd+8hRtrgp1UahbFepig79oIAp1q0Jd/KehvyGeos23fQq99ZOnaHNVqItC3apQFxv8RQNRqFsV6uI/Df0N8RRtvu1T6K2fPEWbq0JdFOpWhbrY4C8aiG+i9+NTnL6l+7ig+7hwet/Q7lcU6uKb6P34Jno/NviLBuKb6P34FKdv6T4u6D4unN43tPsVhbr4Jno/vonejw3+ooH4Jno/PsXpW7qPC7qPC6f3De1+RaEuvonej2+i92ODv2ggvonej09x+pbu44Lu48LpfUO7X1Goi2+i9+Ob6P3Y4C8aiG+i9+NTnL6l+7ig+7hwet/Q7lcU6uKb6P34Jno/NviLBr6iUBeFuijURaEuNn7bf3PaRqEuCnVRqItC3Vds8BcNfEWhLgp1UaiLQl1s/Lb/5rSNQl0U6qJQF4W6r9jgLxr4ikJdFOqiUBeFutj4bf/NaRuFuijURaEuCnVfscFfNPAVhboo1EWhLgp1sfHb/pvTNgp1UaiLQl0U6r5ig79o4CsKdVGoi0JdFOpi47f9N6dtFOqiUBeFuijUfcUGf9HAVxTqolAXhboo1MXGb/tvTtso1EWhLgp1Uaj7io3+y1+K/nG+4oLumzfQblOoazbUxlO0ufq38Pf8Jf8l+o/5FRd037yBdptCXbOhNp6izdW/hb/nL/kv0X/Mr7ig++YNtNsU6poNtfEUba7+Lfw9f8l/if5jfsUF3TdvoN2mUNdsqI2naHP1b+Hv+Uv+S/Qf8ysu6L55A+02hbpmQ208RZurfwvHf4n+caJQtyrU3XBB97GhtinUfdkF3ceG2sUF3TdvcLqr+9g4/mo9FoW6VaHuhgu6jw21TaHuyy7oPjbULi7ovnmD013dx8bxV+uxKNStCnU3XNB9bKhtCnVfdkH3saF2cUH3zRuc7uo+No6/Wo9FoW5VqLvhgu5jQ21TqPuyC7qPDbWLC7pv3uB0V/excfzVeiwKdatC3Q0XdB8baptC3Zdd0H1sqF1c0H3zBqe7uo+N46/WY1GoWxXqbrig+9hQ2xTqvuyC7mND7eKC7ps3ON3VfWwcf7Ueu+FT6K3mDbTbbCyt0P2qUHfDhtpm4822uaD75g2OV/RhN3wKvdW8gXabjaUVul8V6m7YUNtsvNk2F3TfvMHxij7shk+ht5o30G6zsbRC96tC3Q0bapuNN9vmgu6bNzhe0Yfd8Cn0VvMG2m02llboflWou2FDbbPxZttc0H3zBscr+rAbPoXeat5Au83G0grdrwp1N2yobTbebJsLum/egCt6LAp1TyrUNRtLu6DdKNStCnVxQfdNoS4+hd6Kp2izeQPtNm/AFT0WhbonFeqajaVd0G4U6laFurig+6ZQF59Cb8VTtNm8gXabN+CKHotC3ZMKdc3G0i5oNwp1q0JdXNB9U6iLT6G34inabN5Au80bcEWPRaHuSYW6ZmNpF7QbhbpVoS4u6L4p1MWn0FvxFG02b6Dd5g24oseiUPekQl2zsbQL2o1C3apQFxd03xTq4lPorXiKNps30G7zBlzRY1Goe1KhrtlY2gXtRqFuVaiLC7pvCnXxKfRWPEWbzRtot3kDruixGzaWdkG7TaEuvs3pN+g+Luh+cUH3P/kFlu86bZs34Ioeu2FjaRe02xTq4tucfoPu44LuFxd0/5NfYPmu07Z5A67osRs2lnZBu02hLr7N6TfoPi7ofnFB9z/5BZbvOm2bN+CKHrthY2kXtNsU6uLbnH6D7uOC7hcXdP+TX2D5rtO2eQOu6LEbNpZ2QbtNoS6+zek36D4u6H5xQfc/+QWW7zptmzfgih5rPoXeikLdDRtqm43T9oanaDMu6L65oPtmY2mF7uOX4dfpj2g+hd6KQt0NG2qbjdP2hqdoMy7ovrmg+2ZjaYXu45fh1+mPaD6F3opC3Q0bapuN0/aGp2gzLui+uaD7ZmNphe7jl+HX6Y9oPoXeikLdDRtqm43T9oanaDMu6L65oPtmY2mF7uOX4dfpj2g+hd6KQt0NG2qbjdP2hqdoMy7ovrmg+2ZjaYXu45fh1+mPaD6F3opC3Q0bapuN0/aGp2gzLui+uaD7ZmNphe7jl+HX6Y9oNtQuNtTecEH3zbc5/QbdR6FuVaiLjaVdeGp3Qd9wwwZ/0UCzoXaxofaGC7pvvs3pN+g+CnWrQl1sLO3CU7sL+oYbNviLBpoNtYsNtTdc0H3zbU6/QfdRqFsV6mJjaRee2l3QN9ywwV800GyoXWyoveGC7ptvc/oNuo9C3apQFxtLu/DU7oK+4YYN/qKBZkPtYkPtDRd033yb02/QfRTqVoW62Fjahad2F/QNN2xMf+EyLHQfhbpVoS4KdX9Coe5JhbonXdB9fIo//VYU6mJj+uplWOg+CnWrQl0U6v6EQt2TCnVPuqD7+BR/+q0o1MXG9NXLsNB9FOpWhboo1P0JhbonFeqedEH38Sn+9FtRqIuN6auXYaH7KNStCnVRqPsTCnVPKtQ96YLu41P86beiUBcb01cvw0L3UahbFeqiUPcnFOqeVKh70gXdx6f4029FoS42pq9ehoXuo1C3KtRFoe5PKNQ9qVD3pAu6j0/xp9+KQl1s8BcNRKEuPsXyltqmUPcnPEWbUahr3kC7zYbaxcabbfNt+KI+LAp18SmWt9Q2hbo/4SnajEJd8wbabTbULjbebJtvwxf1YVGoi0+xvKW2KdT9CU/RZhTqmjfQbrOhdrHxZtt8G76oD4tCXXyK5S21TaHuT3iKNqNQ17yBdpsNtYuNN9vm2/BFfVgU6uJTLG+pbQp1f8JTtBmFuuYNtNtsqF1svNk234Yv6sOiUBefYnlLbVOo+xOeos0o1DVvoN1mQ+1i4822+Tbvv/hfon+c5oLu48JyrzYKdc3GF9qF//t73nJhuVf7lI2lbdz5r/oA+uOaC7qPC8u92ijUNRtfaBe0+6QLy73ap2wsbePOf9UH0B/XXNB9XFju1Uahrtn4Qrug3SddWO7VPmVjaRt3/qs+gP645oLu48JyrzYKdc3GF9oF7T7pwnKv9ikbS9u481/1AfTHNRd0HxeWe7VRqGs2vtAuaPdJF5Z7tU/ZWNoGLzS8urDcq20KdasLuo9CXRTq4inajEJdXNB9s6F28Qvou6JQt9rgLxpYXVju1TaFutUF3UehLgp18RRtRqEuLui+2VC7+AX0XVGoW23wFw2sLiz3aptC3eqC7qNQF4W6eIo2o1AXF3TfbKhd/AL6rijUrTb4iwZWF5Z7tU2hbnVB91Goi0JdPEWbUaiLC7pvNtQufgF9VxTqVhv8RQOrC8u92qZQt7qg+yjURaEunqLNKNTFBd03G2oXv4C+Kwp1qw3+ooHVheVebVOoW13QfRTqolAXT9FmFOrigu6bDbWLX0DfFYW61cZj/xr6iKZQt3qKNpsNtatCXXNB9/EUbUahbrWxtAvL7mnbFOpi486/BtBHNIW61VO02WyoXRXqmgu6j6doMwp1q42lXVh2T9umUBcbd/41gD6iKdStnqLNZkPtqlDXXNB9PEWbUahbbSztwrJ72jaFuti4868B9BFNoW71FG02G2pXhbrmgu7jKdqMQt1qY2kXlt3TtinUxcadfw2gj2gKdaunaLPZULsq1DUXdB9P0WYU6lYbS7uw7J62TaEuNviLBpoLum8u6D4KdVGoazbURqEuLiz3aptCXXwKvbV6ijbjgu6bp2gzNviLBpoLum8u6D4KdVGoazbURqEuLiz3aptCXXwKvbV6ijbjgu6bp2gzNviLBpoLum8u6D4KdVGoazbURqEuLiz3aptCXXwKvbV6ijbjgu6bp2gzNviLBpoLum8u6D4KdVGoazbURqEuLiz3aptCXXwKvbV6ijbjgu6bp2gzNviLBpoLum8u6D4KdVGoazbURqEuLiz3aptCXXwKvbV6ijbjgu6bp2gzNviLBpoLum8u6D4KdVGoazbURqEuLiz3aptCXXwKvbV6ijbjgu6bp2gzNviLBpoLun/SN9H78Qba/Ztd0cYNhbonXTi9D7zQcHNB90/6Jno/3kC7f7Mr2rihUPekC6f3gRcabi7o/knfRO/HG2j3b3ZFGzcU6p504fQ+8ELDzQXdP+mb6P14A+3+za5o44ZC3ZMunN4HXmi4uaD7J30TvR9voN2/2RVt3FCoe9KF0/swXejBplAXT9Fms6G2eQPtPuUNlt0327jwxH08RZtRqFttTH+JhptCXTxFm82G2uYNtPuUN1h232zjwhP38RRtRqFutTH9JRpuCnXxFG02G2qbN9DuU95g2X2zjQtP3MdTtBmFutXG9JdouCnUxVO02Wyobd5Au095g2X3zTYuPHEfT9FmFOpWG9NfouGmUBdP0WazobZ5A+0+5Q2W3Tfbn3rxfzf/vwu6j6doMwp1q43pL9FwU6iLp2iz2VDbvIF2n/IGy+6bbVx44j6eos0o1K02pr9kGkbbFOqiUHfDhtpmQ21TqGs23mwXG2pXhboo1EWhLgp1zYbaZqP/AqZhtE2hLgp1N2yobTbUNoW6ZuPNdrGhdlWoi0JdFOqiUNdsqG02+i9gGkbbFOqiUHfDhtpmQ21TqGs23mwXG2pXhboo1EWhLgp1zYbaZqP/AqZhtE2hLgp1N2yobTbUNoW6ZuPNdrGhdlWoi0JdFOqiUNdsqG02+i9gGkbbFOqiUHfDhtpmQ21TqGs23mwXG2pXhboo1EWhLgp1zYbaZqP/ApZhoft4ijajUBeFungD7S42lnbhzd1m47S94SnajKdoMzamF5dhoft4ijajUBeFungD7S42lnbhzd1m47S94SnajKdoMzamF5dhoft4ijajUBeFungD7S42lnbhzd1m47S94SnajKdoMzamF5dhoft4ijajUBeFungD7S42lnbhzd1m47S94SnajKdoMzamF5dhoft4ijajUBeFungD7S42lnbhzd1m47S94SnajKdoMzamF5dhoft4ijajUBeFungD7S42lnbhzd1m47S94SnajKdoMzamFzX8T3NB93FB91Goiwu6f8qG2uZT6K1Voe5JT9FmbEwvavif5oLu44Luo1AXF3T/lA21zafQW6tC3ZOeos3YmF7U8D/NBd3HBd1HoS4u6P4pG2qbT6G3VoW6Jz1Fm7Exvajhf5oLuo8Luo9CXVzQ/VM21DafQm+tCnVPeoo2Y2N6UcP/NBd0Hxd0H4W6uKD7p2yobT6F3loV6p70FG3GBn/RQPNtlm9Q2xTqmg21N2yctk2hbnVB982G2ubC6f0NbnwDLzTcfJvlG9Q2hbpmQ+0NG6dtU6hbXdB9s6G2uXB6f4Mb38ALDTffZvkGtU2hrtlQe8PGadsU6lYXdN9sqG0unN7f4MY38ELDzbdZvkFtU6hrNtTesHHaNoW61QXdNxtqmwun9ze48Q280HDzbZZvUNsU6poNtTdsnLZNoW51QffNhtrmwun9DW58Ay803Hyb5RvUNoW6ZkPtDRunbVOoW13QfbOhtrlwen+DG9/ACw03F3T/pEJd/DJPfe+yq3ZxQfc/KdTdcEH3UahbFepig79ooLmg+ycV6uKXeep7l121iwu6/0mh7oYLuo9C3apQFxv8RQPNBd0/qVAXv8xT37vsql1c0P1PCnU3XNB9FOpWhbrY4C8aaC7o/kmFuvhlnvreZVft4oLuf1Kou+GC7qNQtyrUxQZ/0UBzQfdPKtTFL/PU9y67ahcXdP+TQt0NF3QfhbpVoS42+IsGmg21i42vtm/bUNsU6qJQF4W61YbaplDXXND9DRd0Hxv8RQPNhtrFxlfbt22obQp1UaiLQt1qQ21TqGsu6P6GC7qPDf6igWZD7WLjq+3bNtQ2hboo1EWhbrWhtinUNRd0f8MF3ccGf9FAs6F2sfHV9m0baptCXRTqolC32lDbFOqaC7q/4YLuY4O/aKDZULvY+Gr7tg21TaEuCnVRqFttqG0Kdc0F3d9wQfexwV800GyoXWx8tX3bhtqmUBeFuijUrTbUNoW65oLub7ig+9jgLxqIC7pvCnWrQl08RZtxQfdRqIsLy/1p2xTq4g2W3S+0QvdRqIsN/qKBuKD7plC3KtTFU7QZF3Qfhbq4sNyftk2hLt5g2f1CK3QfhbrY4C8aiAu6bwp1q0JdPEWbcUH3UaiLC8v9adsU6uINlt0vtEL3UaiLDf6igbig+6ZQtyrUxVO0GRd0H4W6uLDcn7ZNoS7eYNn9Qit0H4W62OAvGogLum8KdatCXTxFm3FB91GoiwvL/WnbFOriDZbdL7RC91Goi43pS5bhN9F3rQp1Uaj7yQXdN4W6KNTdsLG0b7N8m9rmwnK/tI3p4saDT6DvWhXqolD3kwu6bwp1Uai7YWNp32b5NrXNheV+aRvTxY0Hn0DftSrURaHuJxd03xTqolB3w8bSvs3ybWqbC8v90jamixsPPoG+a1Woi0LdTy7ovinURaHuho2lfZvl29Q2F5b7pW1MFzcefAJ916pQF4W6n1zQfVOoi0LdDRtL+zbLt6ltLiz3S9uYLm48+AT6rlWhLgp1P7mg+6ZQF4W6GzaW9m2Wb1PbXFjul7bBCw3fsKH2hgtP3P+kUNf8MvreJxXq4oLum0JdFOpWhbrY4C8auGFD7Q0Xnrj/SaGu+WX0vU8q1MUF3TeFuijUrQp1scFfNHDDhtobLjxx/5NCXfPL6HufVKiLC7pvCnVRqFsV6mKDv2jghg21N1x44v4nhbrml9H3PqlQFxd03xTqolC3KtTFBn/RwA0bam+48MT9Twp1zS+j731SoS4u6L4p1EWhblWoiw3+ooEbNtTecOGJ+58U6ppfRt/7pEJdXNB9U6iLQt2qUBcb27/QB9Afd8O3eeobtHvDBd03hbqfPEWbq0+htxZXnvtLHkJ/9A3f5qlv0O4NF3TfFOp+8hRtrj6F3lpcee4veQj90Td8m6e+Qbs3XNB9U6j7yVO0ufoUemtx5bm/5CH0R9/wbZ76Bu3ecEH3TaHuJ0/R5upT6K3Flef+kofQH33Dt3nqG7R7wwXdN4W6nzxFm6tPobcWV3ih4SjURaEuCnXxKfTWYkNtFOriU5y+pfsnXdB98yn01uqC7psN/qKBKNRFoS4KdfEp9NZiQ20U6uJTnL6l+ydd0H3zKfTW6oLumw3+ooEo1EWhLgp18Sn01mJDbRTq4lOcvqX7J13QffMp9Nbqgu6bDf6igSjURaEuCnXxKfTWYkNtFOriU5y+pfsnXdB98yn01uqC7psN/qKBKNRFoS4KdfEp9NZiQ20U6uJTnL6l+ydd0H3zKfTW6oLumw3+ooEo1EWhLgp18Sn01mJDbRTq4lOcvqX7J13QffMp9Nbqgu6bjenFZXjhzd3mwnKvdvUp9FZTqGs21N7wBqe7um/eQLvNxvQly/DCm7vNheVe7epT6K2mUNdsqL3hDU53dd+8gXabjelLluGFN3ebC8u92tWn0FtNoa7ZUHvDG5zu6r55A+02G9OXLMMLb+42F5Z7tatPobeaQl2zofaGNzjd1X3zBtptNqYvWYYX3txtLiz3alefQm81hbpmQ+0Nb3C6q/vmDbTbbNz5kv8SfVgU6laFurhweh+00RTqmjc43dV9FOpiQ21zQfdNoa65oPvVxvYlh+jDolC3KtTFhdP7oI2mUNe8wemu7qNQFxtqmwu6bwp1zQXdrza2LzlEHxaFulWhLi6c3gdtNIW65g1Od3UfhbrYUNtc0H1TqGsu6H61sX3JIfqwKNStCnVx4fQ+aKMp1DVvcLqr+yjUxYba5oLum0Jdc0H3q43tSw7Rh0WhblWoiwun90EbTaGueYPTXd1HoS421DYXdN8U6poLul9tbF9yiD4sCnWrQl1cOL0P2mgKdc0bnO7qPgp1saG2uaD7plDXXND9amP6Eg3f8BRtNr+Cvu0pG0u7sOwubUMbiwu6v+FT6K3YmL5Ewzc8RZvNr6Bve8rG0i4su0vb0Mbigu5v+BR6KzamL9HwDU/RZvMr6NuesrG0C8vu0ja0sbig+xs+hd6KjelLNHzDU7TZ/Ar6tqdsLO3Csru0DW0sLuj+hk+ht2Jj+hIN3/AUbTa/gr7tKRtLu7DsLm1DG4sLur/hU+it2OAvGogLum8KdVGoi19A3/W3eAPtrgp18RRtvm1jaRu80HBc0H1TqItCXfwC+q6/xRtod1Woi6do820bS9vghYbjgu6bQl0U6uIX0Hf9Ld5Au6tCXTxFm2/bWNoGLzQcF3TfFOqiUBe/gL7rb/EG2l0V6uIp2nzbxtI2eKHhuKD7plAXhbr4BfRdf4s30O6qUBdP0ebbNpa2wQsNxwXdN4W6KNTFL6Dv+lu8gXZXhbp4ijbftrG0jTv/Vf8w+odoPoXeWm081S6c7uo+CnU/+SZ6P56izWZDbbPx7r/mQ+gPbj6F3lptPNUunO7qPgp1P/kmej+eos1mQ22z8e6/5kPoD24+hd5abTzVLpzu6j4KdT/5Jno/nqLNZkNts/Huv+ZD6A9uPoXeWm081S6c7uo+CnU/+SZ6P56izWZDbbPx7r/mQ+gPbj6F3lptPNUunO7qPgp1P/kmej+eos1mQ22zwV808BUXlnu1iw21UaiLQl2zcdouNpZ2QbvxFG1GoS4Kdc2G2maDv2jgKy4s92oXG2qjUBeFumbjtF1sLO2CduMp2oxCXRTqmg21zQZ/0cBXXFju1S421EahLgp1zcZpu9hY2gXtxlO0GYW6KNQ1G2qbDf6iga+4sNyrXWyojUJdFOqajdN2sbG0C9qNp2gzCnVRqGs21DYb/EUDX3FhuVe72FAbhboo1DUbp+1iY2kXtBtP0WYU6qJQ12yobTb4iwa+4sJyr3axoTYKdVGoazZO28XG0i5oN56izSjURaGu2VDbbPAXDcQ30ftRqGu+jb4hCnVRqGveQLtNoS4KdU+6oPt4ijbjKdqMDf6igfgmej8Kdc230TdEoS4Kdc0baLcp1EWh7kkXdB9P0WY8RZuxwV80EN9E70ehrvk2+oYo1EWhrnkD7TaFuijUPemC7uMp2oynaDM2+IsG4pvo/SjUNd9G3xCFuijUNW+g3aZQF4W6J13QfTxFm/EUbcYGf9FAfBO9H4W65tvoG6JQF4W65g202xTqolD3pAu6j6doM56izdjgLxqIQt2qUBeFuuaC7uOC7puN0/YLPoneawp1Uah70rfhi/qwKNStCnVRqGsu6D4u6L7ZOG2/4JPovaZQF4W6J30bvqgPi0LdqlAXhbrmgu7jgu6bjdP2Cz6J3msKdVGoe9K34Yv6sCjUrQp1UahrLug+Lui+2Thtv+CT6L2mUBeFuid9G76oD4tC3apQF4W65oLu44Lum43T9gs+id5rCnVRqHvSt+GL+rAo1K0KdVGoay7oPi7ovtk4bb/gk+i9plAXhbonfRu+qA+LQt2qUBdP0eaqUPeTQl08RZvxFG3GU7QZG2oXG2oX30bf0GzwFw1EoW5VqIunaHNVqPtJoS6eos14ijbjKdqMDbWLDbWLb6NvaDb4iwaiULcq1MVTtLkq1P2kUBdP0WY8RZvxFG3GhtrFhtrFt9E3NBv8RQNRqFsV6uIp2lwV6n5SqIunaDOeos14ijZjQ+1iQ+3i2+gbmg3+ooEo1K0KdfEUba4KdT8p1MVTtBlP0WY8RZuxoXaxoXbxbfQNzQZ/0UAU6laFuijUNRd0v9pQ2zxFm/EplrfU3nBB91GoazaeaoXuY4O/aCAKdatCXRTqmgu6X22obZ6izfgUy1tqb7ig+yjUNRtPtUL3scFfNBCFulWhLgp1zQXdrzbUNk/RZnyK5S21N1zQfRTqmo2nWqH72OAvGohC3apQF4W65oLuVxtqm6doMz7F8pbaGy7oPgp1zcZTrdB9bPAXDUShblWoi0Jdc0H3qw21zVO0GZ9ieUvtDRd0H4W6ZuOpVug+NviLBqJQtyrURaGuuaD71Yba5inajE+xvKX2hgu6j0Jds/FUK3QfG/xFA/FN9H48RZs3bKhdXXjivtk4bZsNtYuNv7lt8ELD8U30fjxFmzdsqF1deOK+2Thtmw21i42/uW3wQsPxTfR+PEWbN2yoXV144r7ZOG2bDbWLjb+5bfBCw/FN9H48RZs3bKhdXXjivtk4bZsNtYuNv7lt8ELD8U30fjxFmzdsqF1deOK+2Thtmw21i42/uW3wQsNfcUH3T9lQG4W6KNQ1F3QfF5b70zYKdc2G2sUF3ccF3Tcb/EUDX3FB90/ZUBuFuijUNRd0HxeW+9M2CnXNhtrFBd3HBd03G/xFA19xQfdP2VAbhboo1DUXdB8XlvvTNgp1zYbaxQXdxwXdNxv8RQNfcUH3T9lQG4W6KNQ1F3QfF5b707b1//fbf2ND7eKC7uOC7psN/qKBr7ig+6dsqI1CXRTqmgu6jwvL/WkbhbpmQ+3igu7jgu6bDf6iga+4oPunbKiNQl0U6poLuo8Ly/1pG4W6ZkPt4oLu44Lum43txV9++eWv5vd/CL/88st/+P0fwi+//PIffv+H8Msvv/yH3/8h/PLLL//h938Iv/zyy//yP//z/wBvuQIOwkCgXwAAAABJRU5ErkJggg==" />
  </defs>
</svg>`;const U6=z6(),$i=B6();V1({tag:"td-doc-footer",mobileBodyStyle:c2,platform:"web",patchDom:{get:(e,t)=>t||!1,set:(e,t)=>t,connect:W5},render:e=>{const t={...e.mobileBodyStyle};return K`
      <div class="TDesign-doc-footer" style="${t}">
        <div class="TDesign-doc-footer__inner">
          <div class="TDesign-doc-footer__content">
            <div class="TDesign-doc-footer__qrcode">
              <i innerHTML="${P6}"></i>
              <h4 class="TDesign-doc-footer__qrcode-title">${$i.footer.weComGroup}</h4>
              <p class="TDesign-doc-footer__qrcode-desc">${$i.footer.weComGroupDesc}</p>
            </div>

            ${U6.map(n=>K`
              <div class="TDesign-doc-footer__content-block">
                <p class="title">${n.title}</p>
                ${n.links.map(i=>K`
                  <a class="link" href="${i.url}" target="${i.target}">
                    <span>${i.name}</span>
                  </a>
                `)}
              </div>
            `)}
          </div>
        </div>
      </div>
      <div class="TDesign-doc-footer__bottom" style="${t}">
        <div class="TDesign-doc-footer__inner">
          <p class="copyright">Copyright &copy; 1998 - 2023 Tencent. All Rights Reserved. ${$i.footer.copyright}</p>
          <div class="TDesign-doc-footer__logos">
            <i class="logo" innerHTML="${R6}"></i>
            <a class="logo" href="https://cloud.tencent.com/" target="_blank" innerHTML="${$6}"></a>
          </div>
        </div>
      </div>
    `.css`${F6}`}});var Q6=`.TDesign-doc-popup{flex-shrink:0;box-sizing:border-box}
`,R1="top",J1="bottom",ee="right",P1="left",d2="auto",gn=[R1,J1,ee,P1],gt="start",cn="end",q6="clippingParents",el="viewport",Nt="popper",W6="reference",q0=gn.reduce(function(e,t){return e.concat([t+"-"+gt,t+"-"+cn])},[]),tl=[].concat(gn,[d2]).reduce(function(e,t){return e.concat([t,t+"-"+gt,t+"-"+cn])},[]),K6="beforeRead",Y6="read",G6="afterRead",X6="beforeMain",J6="main",e7="afterMain",t7="beforeWrite",n7="write",i7="afterWrite",o7=[K6,Y6,G6,X6,J6,e7,t7,n7,i7];function fe(e){return e?(e.nodeName||"").toLowerCase():null}function Q1(e){if(e==null)return window;if(e.toString()!=="[object Window]"){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function Ke(e){var t=Q1(e).Element;return e instanceof t||e instanceof Element}function X1(e){var t=Q1(e).HTMLElement;return e instanceof t||e instanceof HTMLElement}function p2(e){if(typeof ShadowRoot=="undefined")return!1;var t=Q1(e).ShadowRoot;return e instanceof t||e instanceof ShadowRoot}function r7(e){var t=e.state;Object.keys(t.elements).forEach(function(n){var i=t.styles[n]||{},o=t.attributes[n]||{},r=t.elements[n];!X1(r)||!fe(r)||(Object.assign(r.style,i),Object.keys(o).forEach(function(l){var s=o[l];s===!1?r.removeAttribute(l):r.setAttribute(l,s===!0?"":s)}))})}function l7(e){var t=e.state,n={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,n.popper),t.styles=n,t.elements.arrow&&Object.assign(t.elements.arrow.style,n.arrow),function(){Object.keys(t.elements).forEach(function(i){var o=t.elements[i],r=t.attributes[i]||{},l=Object.keys(t.styles.hasOwnProperty(i)?t.styles[i]:n[i]),s=l.reduce(function(a,d){return a[d]="",a},{});!X1(o)||!fe(o)||(Object.assign(o.style,s),Object.keys(r).forEach(function(a){o.removeAttribute(a)}))})}}var s7={name:"applyStyles",enabled:!0,phase:"write",fn:r7,effect:l7,requires:["computeStyles"]};function pe(e){return e.split("-")[0]}var qe=Math.max,ei=Math.min,ht=Math.round;function _o(){var e=navigator.userAgentData;return e!=null&&e.brands&&Array.isArray(e.brands)?e.brands.map(function(t){return t.brand+"/"+t.version}).join(" "):navigator.userAgent}function nl(){return!/^((?!chrome|android).)*safari/i.test(_o())}function vt(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!1);var i=e.getBoundingClientRect(),o=1,r=1;t&&X1(e)&&(o=e.offsetWidth>0&&ht(i.width)/e.offsetWidth||1,r=e.offsetHeight>0&&ht(i.height)/e.offsetHeight||1);var l=Ke(e)?Q1(e):window,s=l.visualViewport,a=!nl()&&n,d=(i.left+(a&&s?s.offsetLeft:0))/o,c=(i.top+(a&&s?s.offsetTop:0))/r,u=i.width/o,h=i.height/r;return{width:u,height:h,top:c,right:d+u,bottom:c+h,left:d,x:d,y:c}}function u2(e){var t=vt(e),n=e.offsetWidth,i=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-i)<=1&&(i=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:i}}function il(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&p2(n)){var i=t;do{if(i&&e.isSameNode(i))return!0;i=i.parentNode||i.host}while(i)}return!1}function be(e){return Q1(e).getComputedStyle(e)}function a7(e){return["table","td","th"].indexOf(fe(e))>=0}function Se(e){return((Ke(e)?e.ownerDocument:e.document)||window.document).documentElement}function xi(e){return fe(e)==="html"?e:e.assignedSlot||e.parentNode||(p2(e)?e.host:null)||Se(e)}function W0(e){return!X1(e)||be(e).position==="fixed"?null:e.offsetParent}function c7(e){var t=/firefox/i.test(_o()),n=/Trident/i.test(_o());if(n&&X1(e)){var i=be(e);if(i.position==="fixed")return null}var o=xi(e);for(p2(o)&&(o=o.host);X1(o)&&["html","body"].indexOf(fe(o))<0;){var r=be(o);if(r.transform!=="none"||r.perspective!=="none"||r.contain==="paint"||["transform","perspective"].indexOf(r.willChange)!==-1||t&&r.willChange==="filter"||t&&r.filter&&r.filter!=="none")return o;o=o.parentNode}return null}function hn(e){for(var t=Q1(e),n=W0(e);n&&a7(n)&&be(n).position==="static";)n=W0(n);return n&&(fe(n)==="html"||fe(n)==="body"&&be(n).position==="static")?t:n||c7(e)||t}function f2(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function Wt(e,t,n){return qe(e,ei(t,n))}function d7(e,t,n){var i=Wt(e,t,n);return i>n?n:i}function ol(){return{top:0,right:0,bottom:0,left:0}}function rl(e){return Object.assign({},ol(),e)}function ll(e,t){return t.reduce(function(n,i){return n[i]=e,n},{})}var p7=function(t,n){return t=typeof t=="function"?t(Object.assign({},n.rects,{placement:n.placement})):t,rl(typeof t!="number"?t:ll(t,gn))};function u7(e){var t,n=e.state,i=e.name,o=e.options,r=n.elements.arrow,l=n.modifiersData.popperOffsets,s=pe(n.placement),a=f2(s),d=[P1,ee].indexOf(s)>=0,c=d?"height":"width";if(!(!r||!l)){var u=p7(o.padding,n),h=u2(r),C=a==="y"?R1:P1,f=a==="y"?J1:ee,p=n.rects.reference[c]+n.rects.reference[a]-l[a]-n.rects.popper[c],g=l[a]-n.rects.reference[a],m=hn(r),v=m?a==="y"?m.clientHeight||0:m.clientWidth||0:0,y=p/2-g/2,x=u[C],L=v-h[c]-u[f],H=v/2-h[c]/2+y,Z=Wt(x,H,L),N=a;n.modifiersData[i]=(t={},t[N]=Z,t.centerOffset=Z-H,t)}}function f7(e){var t=e.state,n=e.options,i=n.element,o=i===void 0?"[data-popper-arrow]":i;o!=null&&(typeof o=="string"&&(o=t.elements.popper.querySelector(o),!o)||!il(t.elements.popper,o)||(t.elements.arrow=o))}var g7={name:"arrow",enabled:!0,phase:"main",fn:u7,effect:f7,requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function mt(e){return e.split("-")[1]}var h7={top:"auto",right:"auto",bottom:"auto",left:"auto"};function v7(e,t){var n=e.x,i=e.y,o=t.devicePixelRatio||1;return{x:ht(n*o)/o||0,y:ht(i*o)/o||0}}function K0(e){var t,n=e.popper,i=e.popperRect,o=e.placement,r=e.variation,l=e.offsets,s=e.position,a=e.gpuAcceleration,d=e.adaptive,c=e.roundOffsets,u=e.isFixed,h=l.x,C=h===void 0?0:h,f=l.y,p=f===void 0?0:f,g=typeof c=="function"?c({x:C,y:p}):{x:C,y:p};C=g.x,p=g.y;var m=l.hasOwnProperty("x"),v=l.hasOwnProperty("y"),y=P1,x=R1,L=window;if(d){var H=hn(n),Z="clientHeight",N="clientWidth";if(H===Q1(n)&&(H=Se(n),be(H).position!=="static"&&s==="absolute"&&(Z="scrollHeight",N="scrollWidth")),H=H,o===R1||(o===P1||o===ee)&&r===cn){x=J1;var A=u&&H===L&&L.visualViewport?L.visualViewport.height:H[Z];p-=A-i.height,p*=a?1:-1}if(o===P1||(o===R1||o===J1)&&r===cn){y=ee;var _=u&&H===L&&L.visualViewport?L.visualViewport.width:H[N];C-=_-i.width,C*=a?1:-1}}var S=Object.assign({position:s},d&&h7),B=c===!0?v7({x:C,y:p},Q1(n)):{x:C,y:p};if(C=B.x,p=B.y,a){var D;return Object.assign({},S,(D={},D[x]=v?"0":"",D[y]=m?"0":"",D.transform=(L.devicePixelRatio||1)<=1?"translate("+C+"px, "+p+"px)":"translate3d("+C+"px, "+p+"px, 0)",D))}return Object.assign({},S,(t={},t[x]=v?p+"px":"",t[y]=m?C+"px":"",t.transform="",t))}function m7(e){var t=e.state,n=e.options,i=n.gpuAcceleration,o=i===void 0?!0:i,r=n.adaptive,l=r===void 0?!0:r,s=n.roundOffsets,a=s===void 0?!0:s,d={placement:pe(t.placement),variation:mt(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:t.options.strategy==="fixed"};t.modifiersData.popperOffsets!=null&&(t.styles.popper=Object.assign({},t.styles.popper,K0(Object.assign({},d,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:l,roundOffsets:a})))),t.modifiersData.arrow!=null&&(t.styles.arrow=Object.assign({},t.styles.arrow,K0(Object.assign({},d,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:a})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})}var C7={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:m7,data:{}},Vn={passive:!0};function w7(e){var t=e.state,n=e.instance,i=e.options,o=i.scroll,r=o===void 0?!0:o,l=i.resize,s=l===void 0?!0:l,a=Q1(t.elements.popper),d=[].concat(t.scrollParents.reference,t.scrollParents.popper);return r&&d.forEach(function(c){c.addEventListener("scroll",n.update,Vn)}),s&&a.addEventListener("resize",n.update,Vn),function(){r&&d.forEach(function(c){c.removeEventListener("scroll",n.update,Vn)}),s&&a.removeEventListener("resize",n.update,Vn)}}var y7={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:w7,data:{}},x7={left:"right",right:"left",bottom:"top",top:"bottom"};function zn(e){return e.replace(/left|right|bottom|top/g,function(t){return x7[t]})}var L7={start:"end",end:"start"};function Y0(e){return e.replace(/start|end/g,function(t){return L7[t]})}function g2(e){var t=Q1(e),n=t.pageXOffset,i=t.pageYOffset;return{scrollLeft:n,scrollTop:i}}function h2(e){return vt(Se(e)).left+g2(e).scrollLeft}function b7(e,t){var n=Q1(e),i=Se(e),o=n.visualViewport,r=i.clientWidth,l=i.clientHeight,s=0,a=0;if(o){r=o.width,l=o.height;var d=nl();(d||!d&&t==="fixed")&&(s=o.offsetLeft,a=o.offsetTop)}return{width:r,height:l,x:s+h2(e),y:a}}function M7(e){var t,n=Se(e),i=g2(e),o=(t=e.ownerDocument)==null?void 0:t.body,r=qe(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),l=qe(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-i.scrollLeft+h2(e),a=-i.scrollTop;return be(o||n).direction==="rtl"&&(s+=qe(n.clientWidth,o?o.clientWidth:0)-r),{width:r,height:l,x:s,y:a}}function v2(e){var t=be(e),n=t.overflow,i=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+i)}function sl(e){return["html","body","#document"].indexOf(fe(e))>=0?e.ownerDocument.body:X1(e)&&v2(e)?e:sl(xi(e))}function Kt(e,t){var n;t===void 0&&(t=[]);var i=sl(e),o=i===((n=e.ownerDocument)==null?void 0:n.body),r=Q1(i),l=o?[r].concat(r.visualViewport||[],v2(i)?i:[]):i,s=t.concat(l);return o?s:s.concat(Kt(xi(l)))}function Ho(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function _7(e,t){var n=vt(e,!1,t==="fixed");return n.top=n.top+e.clientTop,n.left=n.left+e.clientLeft,n.bottom=n.top+e.clientHeight,n.right=n.left+e.clientWidth,n.width=e.clientWidth,n.height=e.clientHeight,n.x=n.left,n.y=n.top,n}function G0(e,t,n){return t===el?Ho(b7(e,n)):Ke(t)?_7(t,n):Ho(M7(Se(e)))}function H7(e){var t=Kt(xi(e)),n=["absolute","fixed"].indexOf(be(e).position)>=0,i=n&&X1(e)?hn(e):e;return Ke(i)?t.filter(function(o){return Ke(o)&&il(o,i)&&fe(o)!=="body"}):[]}function V7(e,t,n,i){var o=t==="clippingParents"?H7(e):[].concat(t),r=[].concat(o,[n]),l=r[0],s=r.reduce(function(a,d){var c=G0(e,d,i);return a.top=qe(c.top,a.top),a.right=ei(c.right,a.right),a.bottom=ei(c.bottom,a.bottom),a.left=qe(c.left,a.left),a},G0(e,l,i));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function al(e){var t=e.reference,n=e.element,i=e.placement,o=i?pe(i):null,r=i?mt(i):null,l=t.x+t.width/2-n.width/2,s=t.y+t.height/2-n.height/2,a;switch(o){case R1:a={x:l,y:t.y-n.height};break;case J1:a={x:l,y:t.y+t.height};break;case ee:a={x:t.x+t.width,y:s};break;case P1:a={x:t.x-n.width,y:s};break;default:a={x:t.x,y:t.y}}var d=o?f2(o):null;if(d!=null){var c=d==="y"?"height":"width";switch(r){case gt:a[d]=a[d]-(t[c]/2-n[c]/2);break;case cn:a[d]=a[d]+(t[c]/2-n[c]/2);break}}return a}function dn(e,t){t===void 0&&(t={});var n=t,i=n.placement,o=i===void 0?e.placement:i,r=n.strategy,l=r===void 0?e.strategy:r,s=n.boundary,a=s===void 0?q6:s,d=n.rootBoundary,c=d===void 0?el:d,u=n.elementContext,h=u===void 0?Nt:u,C=n.altBoundary,f=C===void 0?!1:C,p=n.padding,g=p===void 0?0:p,m=rl(typeof g!="number"?g:ll(g,gn)),v=h===Nt?W6:Nt,y=e.rects.popper,x=e.elements[f?v:h],L=V7(Ke(x)?x:x.contextElement||Se(e.elements.popper),a,c,l),H=vt(e.elements.reference),Z=al({reference:H,element:y,strategy:"absolute",placement:o}),N=Ho(Object.assign({},y,Z)),A=h===Nt?N:H,_={top:L.top-A.top+m.top,bottom:A.bottom-L.bottom+m.bottom,left:L.left-A.left+m.left,right:A.right-L.right+m.right},S=e.modifiersData.offset;if(h===Nt&&S){var B=S[o];Object.keys(_).forEach(function(D){var j=[ee,J1].indexOf(D)>=0?1:-1,Q=[R1,J1].indexOf(D)>=0?"y":"x";_[D]+=B[Q]*j})}return _}function T7(e,t){t===void 0&&(t={});var n=t,i=n.placement,o=n.boundary,r=n.rootBoundary,l=n.padding,s=n.flipVariations,a=n.allowedAutoPlacements,d=a===void 0?tl:a,c=mt(i),u=c?s?q0:q0.filter(function(f){return mt(f)===c}):gn,h=u.filter(function(f){return d.indexOf(f)>=0});h.length===0&&(h=u);var C=h.reduce(function(f,p){return f[p]=dn(e,{placement:p,boundary:o,rootBoundary:r,padding:l})[pe(p)],f},{});return Object.keys(C).sort(function(f,p){return C[f]-C[p]})}function k7(e){if(pe(e)===d2)return[];var t=zn(e);return[Y0(e),t,Y0(t)]}function Z7(e){var t=e.state,n=e.options,i=e.name;if(!t.modifiersData[i]._skip){for(var o=n.mainAxis,r=o===void 0?!0:o,l=n.altAxis,s=l===void 0?!0:l,a=n.fallbackPlacements,d=n.padding,c=n.boundary,u=n.rootBoundary,h=n.altBoundary,C=n.flipVariations,f=C===void 0?!0:C,p=n.allowedAutoPlacements,g=t.options.placement,m=pe(g),v=m===g,y=a||(v||!f?[zn(g)]:k7(g)),x=[g].concat(y).reduce(function(y1,g1){return y1.concat(pe(g1)===d2?T7(t,{placement:g1,boundary:c,rootBoundary:u,padding:d,flipVariations:f,allowedAutoPlacements:p}):g1)},[]),L=t.rects.reference,H=t.rects.popper,Z=new Map,N=!0,A=x[0],_=0;_<x.length;_++){var S=x[_],B=pe(S),D=mt(S)===gt,j=[R1,J1].indexOf(B)>=0,Q=j?"width":"height",P=dn(t,{placement:S,boundary:c,rootBoundary:u,altBoundary:h,padding:d}),F=j?D?ee:P1:D?J1:R1;L[Q]>H[Q]&&(F=zn(F));var G=zn(F),d1=[];if(r&&d1.push(P[B]<=0),s&&d1.push(P[F]<=0,P[G]<=0),d1.every(function(y1){return y1})){A=S,N=!1;break}Z.set(S,d1)}if(N)for(var p1=f?3:1,a1=function(g1){var v1=x.find(function(O){var X=Z.get(O);if(X)return X.slice(0,g1).every(function(J){return J})});if(v1)return A=v1,"break"},c1=p1;c1>0;c1--){var u1=a1(c1);if(u1==="break")break}t.placement!==A&&(t.modifiersData[i]._skip=!0,t.placement=A,t.reset=!0)}}var D7={name:"flip",enabled:!0,phase:"main",fn:Z7,requiresIfExists:["offset"],data:{_skip:!1}};function X0(e,t,n){return n===void 0&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function J0(e){return[R1,ee,J1,P1].some(function(t){return e[t]>=0})}function E7(e){var t=e.state,n=e.name,i=t.rects.reference,o=t.rects.popper,r=t.modifiersData.preventOverflow,l=dn(t,{elementContext:"reference"}),s=dn(t,{altBoundary:!0}),a=X0(l,i),d=X0(s,o,r),c=J0(a),u=J0(d);t.modifiersData[n]={referenceClippingOffsets:a,popperEscapeOffsets:d,isReferenceHidden:c,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":c,"data-popper-escaped":u})}var N7={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:E7};function A7(e,t,n){var i=pe(e),o=[P1,R1].indexOf(i)>=0?-1:1,r=typeof n=="function"?n(Object.assign({},t,{placement:e})):n,l=r[0],s=r[1];return l=l||0,s=(s||0)*o,[P1,ee].indexOf(i)>=0?{x:s,y:l}:{x:l,y:s}}function S7(e){var t=e.state,n=e.options,i=e.name,o=n.offset,r=o===void 0?[0,0]:o,l=tl.reduce(function(c,u){return c[u]=A7(u,t.rects,r),c},{}),s=l[t.placement],a=s.x,d=s.y;t.modifiersData.popperOffsets!=null&&(t.modifiersData.popperOffsets.x+=a,t.modifiersData.popperOffsets.y+=d),t.modifiersData[i]=l}var I7={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:S7};function j7(e){var t=e.state,n=e.name;t.modifiersData[n]=al({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})}var O7={name:"popperOffsets",enabled:!0,phase:"read",fn:j7,data:{}};function z7(e){return e==="x"?"y":"x"}function B7(e){var t=e.state,n=e.options,i=e.name,o=n.mainAxis,r=o===void 0?!0:o,l=n.altAxis,s=l===void 0?!1:l,a=n.boundary,d=n.rootBoundary,c=n.altBoundary,u=n.padding,h=n.tether,C=h===void 0?!0:h,f=n.tetherOffset,p=f===void 0?0:f,g=dn(t,{boundary:a,rootBoundary:d,padding:u,altBoundary:c}),m=pe(t.placement),v=mt(t.placement),y=!v,x=f2(m),L=z7(x),H=t.modifiersData.popperOffsets,Z=t.rects.reference,N=t.rects.popper,A=typeof p=="function"?p(Object.assign({},t.rects,{placement:t.placement})):p,_=typeof A=="number"?{mainAxis:A,altAxis:A}:Object.assign({mainAxis:0,altAxis:0},A),S=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,B={x:0,y:0};if(!!H){if(r){var D,j=x==="y"?R1:P1,Q=x==="y"?J1:ee,P=x==="y"?"height":"width",F=H[x],G=F+g[j],d1=F-g[Q],p1=C?-N[P]/2:0,a1=v===gt?Z[P]:N[P],c1=v===gt?-N[P]:-Z[P],u1=t.elements.arrow,y1=C&&u1?u2(u1):{width:0,height:0},g1=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:ol(),v1=g1[j],O=g1[Q],X=Wt(0,Z[P],y1[P]),J=y?Z[P]/2-p1-X-v1-_.mainAxis:a1-X-v1-_.mainAxis,r1=y?-Z[P]/2+p1+X+O+_.mainAxis:c1+X+O+_.mainAxis,s1=t.elements.arrow&&hn(t.elements.arrow),M=s1?x==="y"?s1.clientTop||0:s1.clientLeft||0:0,k=(D=S==null?void 0:S[x])!=null?D:0,I=F+J-k-M,R=F+r1-k,U=Wt(C?ei(G,I):G,F,C?qe(d1,R):d1);H[x]=U,B[x]=U-F}if(s){var q,l1=x==="x"?R1:P1,e1=x==="x"?J1:ee,i1=H[L],Y=L==="y"?"height":"width",w=i1+g[l1],b=i1-g[e1],E=[R1,P1].indexOf(m)!==-1,$=(q=S==null?void 0:S[L])!=null?q:0,o1=E?w:i1-Z[Y]-N[Y]-$+_.altAxis,t1=E?i1+Z[Y]+N[Y]-$-_.altAxis:b,C1=C&&E?d7(o1,i1,t1):Wt(C?o1:w,i1,C?t1:b);H[L]=C1,B[L]=C1-i1}t.modifiersData[i]=B}}var F7={name:"preventOverflow",enabled:!0,phase:"main",fn:B7,requiresIfExists:["offset"]};function $7(e){return{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}}function R7(e){return e===Q1(e)||!X1(e)?g2(e):$7(e)}function P7(e){var t=e.getBoundingClientRect(),n=ht(t.width)/e.offsetWidth||1,i=ht(t.height)/e.offsetHeight||1;return n!==1||i!==1}function U7(e,t,n){n===void 0&&(n=!1);var i=X1(t),o=X1(t)&&P7(t),r=Se(t),l=vt(e,o,n),s={scrollLeft:0,scrollTop:0},a={x:0,y:0};return(i||!i&&!n)&&((fe(t)!=="body"||v2(r))&&(s=R7(t)),X1(t)?(a=vt(t,!0),a.x+=t.clientLeft,a.y+=t.clientTop):r&&(a.x=h2(r))),{x:l.left+s.scrollLeft-a.x,y:l.top+s.scrollTop-a.y,width:l.width,height:l.height}}function Q7(e){var t=new Map,n=new Set,i=[];e.forEach(function(r){t.set(r.name,r)});function o(r){n.add(r.name);var l=[].concat(r.requires||[],r.requiresIfExists||[]);l.forEach(function(s){if(!n.has(s)){var a=t.get(s);a&&o(a)}}),i.push(r)}return e.forEach(function(r){n.has(r.name)||o(r)}),i}function q7(e){var t=Q7(e);return o7.reduce(function(n,i){return n.concat(t.filter(function(o){return o.phase===i}))},[])}function W7(e){var t;return function(){return t||(t=new Promise(function(n){Promise.resolve().then(function(){t=void 0,n(e())})})),t}}function K7(e){var t=e.reduce(function(n,i){var o=n[i.name];return n[i.name]=o?Object.assign({},o,i,{options:Object.assign({},o.options,i.options),data:Object.assign({},o.data,i.data)}):i,n},{});return Object.keys(t).map(function(n){return t[n]})}var er={placement:"bottom",modifiers:[],strategy:"absolute"};function tr(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some(function(i){return!(i&&typeof i.getBoundingClientRect=="function")})}function Y7(e){e===void 0&&(e={});var t=e,n=t.defaultModifiers,i=n===void 0?[]:n,o=t.defaultOptions,r=o===void 0?er:o;return function(s,a,d){d===void 0&&(d=r);var c={placement:"bottom",orderedModifiers:[],options:Object.assign({},er,r),modifiersData:{},elements:{reference:s,popper:a},attributes:{},styles:{}},u=[],h=!1,C={state:c,setOptions:function(m){var v=typeof m=="function"?m(c.options):m;p(),c.options=Object.assign({},r,c.options,v),c.scrollParents={reference:Ke(s)?Kt(s):s.contextElement?Kt(s.contextElement):[],popper:Kt(a)};var y=q7(K7([].concat(i,c.options.modifiers)));return c.orderedModifiers=y.filter(function(x){return x.enabled}),f(),C.update()},forceUpdate:function(){if(!h){var m=c.elements,v=m.reference,y=m.popper;if(!!tr(v,y)){c.rects={reference:U7(v,hn(y),c.options.strategy==="fixed"),popper:u2(y)},c.reset=!1,c.placement=c.options.placement,c.orderedModifiers.forEach(function(_){return c.modifiersData[_.name]=Object.assign({},_.data)});for(var x=0;x<c.orderedModifiers.length;x++){if(c.reset===!0){c.reset=!1,x=-1;continue}var L=c.orderedModifiers[x],H=L.fn,Z=L.options,N=Z===void 0?{}:Z,A=L.name;typeof H=="function"&&(c=H({state:c,options:N,name:A,instance:C})||c)}}}},update:W7(function(){return new Promise(function(g){C.forceUpdate(),g(c)})}),destroy:function(){p(),h=!0}};if(!tr(s,a))return C;C.setOptions(d).then(function(g){!h&&d.onFirstUpdate&&d.onFirstUpdate(g)});function f(){c.orderedModifiers.forEach(function(g){var m=g.name,v=g.options,y=v===void 0?{}:v,x=g.effect;if(typeof x=="function"){var L=x({state:c,name:m,instance:C,options:y}),H=function(){};u.push(L||H)}})}function p(){u.forEach(function(g){return g()}),u=[]}return C}}var G7=[y7,O7,C7,s7,I7,D7,F7,g7,N7],X7=Y7({defaultModifiers:G7});function Tn(e,t){e.triggerType==="hover"&&(t==="enter"?e.visible=!0:e.visible=!1,se(e,"visible-change",{detail:{visible:e.visible}}))}function nr(e,t){e.triggerType==="click"&&(e.visible=!e.visible,se(e,"visible-change",{detail:{visible:e.visible}}))}V1({tag:"td-doc-popup",reference:({render:e})=>e().querySelector(".TDesign-doc-popup"),portalClass:"",portalStyle:"",placement:"bottom-end",triggerType:"hover",visible:{get:(e,t)=>t||!1,set:(e,t)=>t,connect:e=>{const{reference:t,placement:n}=e;requestAnimationFrame(()=>{e.portals=document.getElementById("__td_portals__"),e.portals||(e.portals=document.createElement("div"),e.portals.id="__td_portals__",document.body.appendChild(e.portals));const o=e.querySelector('[slot="content"]'),r=`<style>${e.portalStyle}</style>`;e.portal=document.createElement("td-portal"),e.portal.className=e.portalClass,e.portal.innerHTML=r,e.portal.appendChild(o),e.portal.addEventListener("click",l=>nr(e)),e.portal.addEventListener("mouseenter",()=>Tn(e,"enter")),e.portal.addEventListener("mouseleave",()=>Tn(e,"leave")),e.portals.appendChild(e.portal),requestAnimationFrame(()=>{const l=["top","bottom"].some(s=>n.includes(s));e.popper=X7(t,e.portal,{placement:n,modifiers:[{name:"offset",options:{offset:l?[0,8]:[0,16]}}]}),l&&(e.popper.state.styles.popper.minWidth=`${t.offsetWidth}px`)})});function i(o){var r;const l=((r=o.composedPath)==null?void 0:r.call(o))||o.path||[];!t||e.contains(l[0])||(e.visible=!1,se(e,"visible-change",{detail:{visible:e.visible}}))}return document.addEventListener("click",i),()=>{var o,r;(r=(o=e.portals)==null?void 0:o.removeChild)==null||r.call(o,e.portal),document.removeEventListener("click",i)}},observe:(e,t)=>{var n,i;!e.portal||(e.portal.visible=t,(i=(n=e.popper)==null?void 0:n.update)==null||i.call(n))}},render:e=>{const{placement:t}=e;return K`
      <div
        class="TDesign-doc-popup"
        data-placement="${t}"
        onclick="${nr}"
        onmouseenter="${n=>Tn(n,"enter")}"
        onmouseleave="${n=>Tn(n,"leave")}"
      >
        <slot></slot>
      </div>
    `.css`${Q6}`}});var J7=`.TDesign-doc-badge{position:relative;z-index:500}
`;function e8(e){const t=e&&parseFloat(e);return t>=90?"brightgreen":t>=70?"yellow":"red"}V1({tag:"td-doc-badge",label:"coverage",message:"0%",color:"",render:e=>{const{label:t,message:n,color:i}=e;let o=i;o||(o=e8(n));const r=encodeURI(`https://img.shields.io/badge/${t}-${n}-${o}`);return K`
      <img class="TDesign-doc-badge" src="${r}" />
    `.css`${J7}`}});var Ct={},t8=function(){return typeof Promise=="function"&&Promise.prototype&&Promise.prototype.then},cl={},q1={};let m2;const n8=[0,26,44,70,100,134,172,196,242,292,346,404,466,532,581,655,733,815,901,991,1085,1156,1258,1364,1474,1588,1706,1828,1921,2051,2185,2323,2465,2611,2761,2876,3034,3196,3362,3532,3706];q1.getSymbolSize=function(t){if(!t)throw new Error('"version" cannot be null or undefined');if(t<1||t>40)throw new Error('"version" should be in range from 1 to 40');return t*4+17};q1.getSymbolTotalCodewords=function(t){return n8[t]};q1.getBCHDigit=function(e){let t=0;for(;e!==0;)t++,e>>>=1;return t};q1.setToSJISFunction=function(t){if(typeof t!="function")throw new Error('"toSJISFunc" is not a valid function.');m2=t};q1.isKanjiModeEnabled=function(){return typeof m2!="undefined"};q1.toSJIS=function(t){return m2(t)};var Li={};(function(e){e.L={bit:1},e.M={bit:0},e.Q={bit:3},e.H={bit:2};function t(n){if(typeof n!="string")throw new Error("Param is not a string");switch(n.toLowerCase()){case"l":case"low":return e.L;case"m":case"medium":return e.M;case"q":case"quartile":return e.Q;case"h":case"high":return e.H;default:throw new Error("Unknown EC Level: "+n)}}e.isValid=function(i){return i&&typeof i.bit!="undefined"&&i.bit>=0&&i.bit<4},e.from=function(i,o){if(e.isValid(i))return i;try{return t(i)}catch{return o}}})(Li);function dl(){this.buffer=[],this.length=0}dl.prototype={get:function(e){const t=Math.floor(e/8);return(this.buffer[t]>>>7-e%8&1)===1},put:function(e,t){for(let n=0;n<t;n++)this.putBit((e>>>t-n-1&1)===1)},getLengthInBits:function(){return this.length},putBit:function(e){const t=Math.floor(this.length/8);this.buffer.length<=t&&this.buffer.push(0),e&&(this.buffer[t]|=128>>>this.length%8),this.length++}};var i8=dl;function vn(e){if(!e||e<1)throw new Error("BitMatrix size must be defined and greater than 0");this.size=e,this.data=new Uint8Array(e*e),this.reservedBit=new Uint8Array(e*e)}vn.prototype.set=function(e,t,n,i){const o=e*this.size+t;this.data[o]=n,i&&(this.reservedBit[o]=!0)};vn.prototype.get=function(e,t){return this.data[e*this.size+t]};vn.prototype.xor=function(e,t,n){this.data[e*this.size+t]^=n};vn.prototype.isReserved=function(e,t){return this.reservedBit[e*this.size+t]};var o8=vn,pl={};(function(e){const t=q1.getSymbolSize;e.getRowColCoords=function(i){if(i===1)return[];const o=Math.floor(i/7)+2,r=t(i),l=r===145?26:Math.ceil((r-13)/(2*o-2))*2,s=[r-7];for(let a=1;a<o-1;a++)s[a]=s[a-1]-l;return s.push(6),s.reverse()},e.getPositions=function(i){const o=[],r=e.getRowColCoords(i),l=r.length;for(let s=0;s<l;s++)for(let a=0;a<l;a++)s===0&&a===0||s===0&&a===l-1||s===l-1&&a===0||o.push([r[s],r[a]]);return o}})(pl);var ul={};const r8=q1.getSymbolSize,ir=7;ul.getPositions=function(t){const n=r8(t);return[[0,0],[n-ir,0],[0,n-ir]]};var fl={};(function(e){e.Patterns={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7};const t={N1:3,N2:3,N3:40,N4:10};e.isValid=function(o){return o!=null&&o!==""&&!isNaN(o)&&o>=0&&o<=7},e.from=function(o){return e.isValid(o)?parseInt(o,10):void 0},e.getPenaltyN1=function(o){const r=o.size;let l=0,s=0,a=0,d=null,c=null;for(let u=0;u<r;u++){s=a=0,d=c=null;for(let h=0;h<r;h++){let C=o.get(u,h);C===d?s++:(s>=5&&(l+=t.N1+(s-5)),d=C,s=1),C=o.get(h,u),C===c?a++:(a>=5&&(l+=t.N1+(a-5)),c=C,a=1)}s>=5&&(l+=t.N1+(s-5)),a>=5&&(l+=t.N1+(a-5))}return l},e.getPenaltyN2=function(o){const r=o.size;let l=0;for(let s=0;s<r-1;s++)for(let a=0;a<r-1;a++){const d=o.get(s,a)+o.get(s,a+1)+o.get(s+1,a)+o.get(s+1,a+1);(d===4||d===0)&&l++}return l*t.N2},e.getPenaltyN3=function(o){const r=o.size;let l=0,s=0,a=0;for(let d=0;d<r;d++){s=a=0;for(let c=0;c<r;c++)s=s<<1&2047|o.get(d,c),c>=10&&(s===1488||s===93)&&l++,a=a<<1&2047|o.get(c,d),c>=10&&(a===1488||a===93)&&l++}return l*t.N3},e.getPenaltyN4=function(o){let r=0;const l=o.data.length;for(let a=0;a<l;a++)r+=o.data[a];return Math.abs(Math.ceil(r*100/l/5)-10)*t.N4};function n(i,o,r){switch(i){case e.Patterns.PATTERN000:return(o+r)%2===0;case e.Patterns.PATTERN001:return o%2===0;case e.Patterns.PATTERN010:return r%3===0;case e.Patterns.PATTERN011:return(o+r)%3===0;case e.Patterns.PATTERN100:return(Math.floor(o/2)+Math.floor(r/3))%2===0;case e.Patterns.PATTERN101:return o*r%2+o*r%3===0;case e.Patterns.PATTERN110:return(o*r%2+o*r%3)%2===0;case e.Patterns.PATTERN111:return(o*r%3+(o+r)%2)%2===0;default:throw new Error("bad maskPattern:"+i)}}e.applyMask=function(o,r){const l=r.size;for(let s=0;s<l;s++)for(let a=0;a<l;a++)r.isReserved(a,s)||r.xor(a,s,n(o,a,s))},e.getBestMask=function(o,r){const l=Object.keys(e.Patterns).length;let s=0,a=1/0;for(let d=0;d<l;d++){r(d),e.applyMask(d,o);const c=e.getPenaltyN1(o)+e.getPenaltyN2(o)+e.getPenaltyN3(o)+e.getPenaltyN4(o);e.applyMask(d,o),c<a&&(a=c,s=d)}return s}})(fl);var bi={};const ke=Li,kn=[1,1,1,1,1,1,1,1,1,1,2,2,1,2,2,4,1,2,4,4,2,4,4,4,2,4,6,5,2,4,6,6,2,5,8,8,4,5,8,8,4,5,8,11,4,8,10,11,4,9,12,16,4,9,16,16,6,10,12,18,6,10,17,16,6,11,16,19,6,13,18,21,7,14,21,25,8,16,20,25,8,17,23,25,9,17,23,34,9,18,25,30,10,20,27,32,12,21,29,35,12,23,34,37,12,25,34,40,13,26,35,42,14,28,38,45,15,29,40,48,16,31,43,51,17,33,45,54,18,35,48,57,19,37,51,60,19,38,53,63,20,40,56,66,21,43,59,70,22,45,62,74,24,47,65,77,25,49,68,81],Zn=[7,10,13,17,10,16,22,28,15,26,36,44,20,36,52,64,26,48,72,88,36,64,96,112,40,72,108,130,48,88,132,156,60,110,160,192,72,130,192,224,80,150,224,264,96,176,260,308,104,198,288,352,120,216,320,384,132,240,360,432,144,280,408,480,168,308,448,532,180,338,504,588,196,364,546,650,224,416,600,700,224,442,644,750,252,476,690,816,270,504,750,900,300,560,810,960,312,588,870,1050,336,644,952,1110,360,700,1020,1200,390,728,1050,1260,420,784,1140,1350,450,812,1200,1440,480,868,1290,1530,510,924,1350,1620,540,980,1440,1710,570,1036,1530,1800,570,1064,1590,1890,600,1120,1680,1980,630,1204,1770,2100,660,1260,1860,2220,720,1316,1950,2310,750,1372,2040,2430];bi.getBlocksCount=function(t,n){switch(n){case ke.L:return kn[(t-1)*4+0];case ke.M:return kn[(t-1)*4+1];case ke.Q:return kn[(t-1)*4+2];case ke.H:return kn[(t-1)*4+3];default:return}};bi.getTotalCodewordsCount=function(t,n){switch(n){case ke.L:return Zn[(t-1)*4+0];case ke.M:return Zn[(t-1)*4+1];case ke.Q:return Zn[(t-1)*4+2];case ke.H:return Zn[(t-1)*4+3];default:return}};var gl={},Mi={};const Yt=new Uint8Array(512),ti=new Uint8Array(256);(function(){let t=1;for(let n=0;n<255;n++)Yt[n]=t,ti[t]=n,t<<=1,t&256&&(t^=285);for(let n=255;n<512;n++)Yt[n]=Yt[n-255]})();Mi.log=function(t){if(t<1)throw new Error("log("+t+")");return ti[t]};Mi.exp=function(t){return Yt[t]};Mi.mul=function(t,n){return t===0||n===0?0:Yt[ti[t]+ti[n]]};(function(e){const t=Mi;e.mul=function(i,o){const r=new Uint8Array(i.length+o.length-1);for(let l=0;l<i.length;l++)for(let s=0;s<o.length;s++)r[l+s]^=t.mul(i[l],o[s]);return r},e.mod=function(i,o){let r=new Uint8Array(i);for(;r.length-o.length>=0;){const l=r[0];for(let a=0;a<o.length;a++)r[a]^=t.mul(o[a],l);let s=0;for(;s<r.length&&r[s]===0;)s++;r=r.slice(s)}return r},e.generateECPolynomial=function(i){let o=new Uint8Array([1]);for(let r=0;r<i;r++)o=e.mul(o,new Uint8Array([1,t.exp(r)]));return o}})(gl);const hl=gl;function C2(e){this.genPoly=void 0,this.degree=e,this.degree&&this.initialize(this.degree)}C2.prototype.initialize=function(t){this.degree=t,this.genPoly=hl.generateECPolynomial(this.degree)};C2.prototype.encode=function(t){if(!this.genPoly)throw new Error("Encoder not initialized");const n=new Uint8Array(t.length+this.degree);n.set(t);const i=hl.mod(n,this.genPoly),o=this.degree-i.length;if(o>0){const r=new Uint8Array(this.degree);return r.set(i,o),r}return i};var l8=C2,vl={},Ie={},w2={};w2.isValid=function(t){return!isNaN(t)&&t>=1&&t<=40};var he={};const ml="[0-9]+",s8="[A-Z $%*+\\-./:]+";let pn="(?:[u3000-u303F]|[u3040-u309F]|[u30A0-u30FF]|[uFF00-uFFEF]|[u4E00-u9FAF]|[u2605-u2606]|[u2190-u2195]|u203B|[u2010u2015u2018u2019u2025u2026u201Cu201Du2225u2260]|[u0391-u0451]|[u00A7u00A8u00B1u00B4u00D7u00F7])+";pn=pn.replace(/u/g,"\\u");const a8="(?:(?![A-Z0-9 $%*+\\-./:]|"+pn+`)(?:.|[\r
]))+`;he.KANJI=new RegExp(pn,"g");he.BYTE_KANJI=new RegExp("[^A-Z0-9 $%*+\\-./:]+","g");he.BYTE=new RegExp(a8,"g");he.NUMERIC=new RegExp(ml,"g");he.ALPHANUMERIC=new RegExp(s8,"g");const c8=new RegExp("^"+pn+"$"),d8=new RegExp("^"+ml+"$"),p8=new RegExp("^[A-Z0-9 $%*+\\-./:]+$");he.testKanji=function(t){return c8.test(t)};he.testNumeric=function(t){return d8.test(t)};he.testAlphanumeric=function(t){return p8.test(t)};(function(e){const t=w2,n=he;e.NUMERIC={id:"Numeric",bit:1<<0,ccBits:[10,12,14]},e.ALPHANUMERIC={id:"Alphanumeric",bit:1<<1,ccBits:[9,11,13]},e.BYTE={id:"Byte",bit:1<<2,ccBits:[8,16,16]},e.KANJI={id:"Kanji",bit:1<<3,ccBits:[8,10,12]},e.MIXED={bit:-1},e.getCharCountIndicator=function(r,l){if(!r.ccBits)throw new Error("Invalid mode: "+r);if(!t.isValid(l))throw new Error("Invalid version: "+l);return l>=1&&l<10?r.ccBits[0]:l<27?r.ccBits[1]:r.ccBits[2]},e.getBestModeForData=function(r){return n.testNumeric(r)?e.NUMERIC:n.testAlphanumeric(r)?e.ALPHANUMERIC:n.testKanji(r)?e.KANJI:e.BYTE},e.toString=function(r){if(r&&r.id)return r.id;throw new Error("Invalid mode")},e.isValid=function(r){return r&&r.bit&&r.ccBits};function i(o){if(typeof o!="string")throw new Error("Param is not a string");switch(o.toLowerCase()){case"numeric":return e.NUMERIC;case"alphanumeric":return e.ALPHANUMERIC;case"kanji":return e.KANJI;case"byte":return e.BYTE;default:throw new Error("Unknown mode: "+o)}}e.from=function(r,l){if(e.isValid(r))return r;try{return i(r)}catch{return l}}})(Ie);(function(e){const t=q1,n=bi,i=Li,o=Ie,r=w2,l=1<<12|1<<11|1<<10|1<<9|1<<8|1<<5|1<<2|1<<0,s=t.getBCHDigit(l);function a(h,C,f){for(let p=1;p<=40;p++)if(C<=e.getCapacity(p,f,h))return p}function d(h,C){return o.getCharCountIndicator(h,C)+4}function c(h,C){let f=0;return h.forEach(function(p){f+=d(p.mode,C)+p.getBitsLength()}),f}function u(h,C){for(let f=1;f<=40;f++)if(c(h,f)<=e.getCapacity(f,C,o.MIXED))return f}e.from=function(C,f){return r.isValid(C)?parseInt(C,10):f},e.getCapacity=function(C,f,p){if(!r.isValid(C))throw new Error("Invalid QR Code version");typeof p=="undefined"&&(p=o.BYTE);const g=t.getSymbolTotalCodewords(C),m=n.getTotalCodewordsCount(C,f),v=(g-m)*8;if(p===o.MIXED)return v;const y=v-d(p,C);switch(p){case o.NUMERIC:return Math.floor(y/10*3);case o.ALPHANUMERIC:return Math.floor(y/11*2);case o.KANJI:return Math.floor(y/13);case o.BYTE:default:return Math.floor(y/8)}},e.getBestVersionForData=function(C,f){let p;const g=i.from(f,i.M);if(Array.isArray(C)){if(C.length>1)return u(C,g);if(C.length===0)return 1;p=C[0]}else p=C;return a(p.mode,p.getLength(),g)},e.getEncodedBits=function(C){if(!r.isValid(C)||C<7)throw new Error("Invalid QR Code version");let f=C<<12;for(;t.getBCHDigit(f)-s>=0;)f^=l<<t.getBCHDigit(f)-s;return C<<12|f}})(vl);var Cl={};const Vo=q1,wl=1<<10|1<<8|1<<5|1<<4|1<<2|1<<1|1<<0,u8=1<<14|1<<12|1<<10|1<<4|1<<1,or=Vo.getBCHDigit(wl);Cl.getEncodedBits=function(t,n){const i=t.bit<<3|n;let o=i<<10;for(;Vo.getBCHDigit(o)-or>=0;)o^=wl<<Vo.getBCHDigit(o)-or;return(i<<10|o)^u8};var yl={};const f8=Ie;function wt(e){this.mode=f8.NUMERIC,this.data=e.toString()}wt.getBitsLength=function(t){return 10*Math.floor(t/3)+(t%3?t%3*3+1:0)};wt.prototype.getLength=function(){return this.data.length};wt.prototype.getBitsLength=function(){return wt.getBitsLength(this.data.length)};wt.prototype.write=function(t){let n,i,o;for(n=0;n+3<=this.data.length;n+=3)i=this.data.substr(n,3),o=parseInt(i,10),t.put(o,10);const r=this.data.length-n;r>0&&(i=this.data.substr(n),o=parseInt(i,10),t.put(o,r*3+1))};var g8=wt;const h8=Ie,Ri=["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"," ","$","%","*","+","-",".","/",":"];function yt(e){this.mode=h8.ALPHANUMERIC,this.data=e}yt.getBitsLength=function(t){return 11*Math.floor(t/2)+6*(t%2)};yt.prototype.getLength=function(){return this.data.length};yt.prototype.getBitsLength=function(){return yt.getBitsLength(this.data.length)};yt.prototype.write=function(t){let n;for(n=0;n+2<=this.data.length;n+=2){let i=Ri.indexOf(this.data[n])*45;i+=Ri.indexOf(this.data[n+1]),t.put(i,11)}this.data.length%2&&t.put(Ri.indexOf(this.data[n]),6)};var v8=yt,m8=function(t){for(var n=[],i=t.length,o=0;o<i;o++){var r=t.charCodeAt(o);if(r>=55296&&r<=56319&&i>o+1){var l=t.charCodeAt(o+1);l>=56320&&l<=57343&&(r=(r-55296)*1024+l-56320+65536,o+=1)}if(r<128){n.push(r);continue}if(r<2048){n.push(r>>6|192),n.push(r&63|128);continue}if(r<55296||r>=57344&&r<65536){n.push(r>>12|224),n.push(r>>6&63|128),n.push(r&63|128);continue}if(r>=65536&&r<=1114111){n.push(r>>18|240),n.push(r>>12&63|128),n.push(r>>6&63|128),n.push(r&63|128);continue}n.push(239,191,189)}return new Uint8Array(n).buffer};const C8=m8,w8=Ie;function xt(e){this.mode=w8.BYTE,typeof e=="string"&&(e=C8(e)),this.data=new Uint8Array(e)}xt.getBitsLength=function(t){return t*8};xt.prototype.getLength=function(){return this.data.length};xt.prototype.getBitsLength=function(){return xt.getBitsLength(this.data.length)};xt.prototype.write=function(e){for(let t=0,n=this.data.length;t<n;t++)e.put(this.data[t],8)};var y8=xt;const x8=Ie,L8=q1;function Lt(e){this.mode=x8.KANJI,this.data=e}Lt.getBitsLength=function(t){return t*13};Lt.prototype.getLength=function(){return this.data.length};Lt.prototype.getBitsLength=function(){return Lt.getBitsLength(this.data.length)};Lt.prototype.write=function(e){let t;for(t=0;t<this.data.length;t++){let n=L8.toSJIS(this.data[t]);if(n>=33088&&n<=40956)n-=33088;else if(n>=57408&&n<=60351)n-=49472;else throw new Error("Invalid SJIS character: "+this.data[t]+`
Make sure your charset is UTF-8`);n=(n>>>8&255)*192+(n&255),e.put(n,13)}};var b8=Lt,xl={exports:{}};(function(e){var t={single_source_shortest_paths:function(n,i,o){var r={},l={};l[i]=0;var s=t.PriorityQueue.make();s.push(i,0);for(var a,d,c,u,h,C,f,p,g;!s.empty();){a=s.pop(),d=a.value,u=a.cost,h=n[d]||{};for(c in h)h.hasOwnProperty(c)&&(C=h[c],f=u+C,p=l[c],g=typeof l[c]=="undefined",(g||p>f)&&(l[c]=f,s.push(c,f),r[c]=d))}if(typeof o!="undefined"&&typeof l[o]=="undefined"){var m=["Could not find a path from ",i," to ",o,"."].join("");throw new Error(m)}return r},extract_shortest_path_from_predecessor_list:function(n,i){for(var o=[],r=i;r;)o.push(r),n[r],r=n[r];return o.reverse(),o},find_path:function(n,i,o){var r=t.single_source_shortest_paths(n,i,o);return t.extract_shortest_path_from_predecessor_list(r,o)},PriorityQueue:{make:function(n){var i=t.PriorityQueue,o={},r;n=n||{};for(r in i)i.hasOwnProperty(r)&&(o[r]=i[r]);return o.queue=[],o.sorter=n.sorter||i.default_sorter,o},default_sorter:function(n,i){return n.cost-i.cost},push:function(n,i){var o={value:n,cost:i};this.queue.push(o),this.queue.sort(this.sorter)},pop:function(){return this.queue.shift()},empty:function(){return this.queue.length===0}}};e.exports=t})(xl);(function(e){const t=Ie,n=g8,i=v8,o=y8,r=b8,l=he,s=q1,a=xl.exports;function d(m){return unescape(encodeURIComponent(m)).length}function c(m,v,y){const x=[];let L;for(;(L=m.exec(y))!==null;)x.push({data:L[0],index:L.index,mode:v,length:L[0].length});return x}function u(m){const v=c(l.NUMERIC,t.NUMERIC,m),y=c(l.ALPHANUMERIC,t.ALPHANUMERIC,m);let x,L;return s.isKanjiModeEnabled()?(x=c(l.BYTE,t.BYTE,m),L=c(l.KANJI,t.KANJI,m)):(x=c(l.BYTE_KANJI,t.BYTE,m),L=[]),v.concat(y,x,L).sort(function(Z,N){return Z.index-N.index}).map(function(Z){return{data:Z.data,mode:Z.mode,length:Z.length}})}function h(m,v){switch(v){case t.NUMERIC:return n.getBitsLength(m);case t.ALPHANUMERIC:return i.getBitsLength(m);case t.KANJI:return r.getBitsLength(m);case t.BYTE:return o.getBitsLength(m)}}function C(m){return m.reduce(function(v,y){const x=v.length-1>=0?v[v.length-1]:null;return x&&x.mode===y.mode?(v[v.length-1].data+=y.data,v):(v.push(y),v)},[])}function f(m){const v=[];for(let y=0;y<m.length;y++){const x=m[y];switch(x.mode){case t.NUMERIC:v.push([x,{data:x.data,mode:t.ALPHANUMERIC,length:x.length},{data:x.data,mode:t.BYTE,length:x.length}]);break;case t.ALPHANUMERIC:v.push([x,{data:x.data,mode:t.BYTE,length:x.length}]);break;case t.KANJI:v.push([x,{data:x.data,mode:t.BYTE,length:d(x.data)}]);break;case t.BYTE:v.push([{data:x.data,mode:t.BYTE,length:d(x.data)}])}}return v}function p(m,v){const y={},x={start:{}};let L=["start"];for(let H=0;H<m.length;H++){const Z=m[H],N=[];for(let A=0;A<Z.length;A++){const _=Z[A],S=""+H+A;N.push(S),y[S]={node:_,lastCount:0},x[S]={};for(let B=0;B<L.length;B++){const D=L[B];y[D]&&y[D].node.mode===_.mode?(x[D][S]=h(y[D].lastCount+_.length,_.mode)-h(y[D].lastCount,_.mode),y[D].lastCount+=_.length):(y[D]&&(y[D].lastCount=_.length),x[D][S]=h(_.length,_.mode)+4+t.getCharCountIndicator(_.mode,v))}}L=N}for(let H=0;H<L.length;H++)x[L[H]].end=0;return{map:x,table:y}}function g(m,v){let y;const x=t.getBestModeForData(m);if(y=t.from(v,x),y!==t.BYTE&&y.bit<x.bit)throw new Error('"'+m+'" cannot be encoded with mode '+t.toString(y)+`.
 Suggested mode is: `+t.toString(x));switch(y===t.KANJI&&!s.isKanjiModeEnabled()&&(y=t.BYTE),y){case t.NUMERIC:return new n(m);case t.ALPHANUMERIC:return new i(m);case t.KANJI:return new r(m);case t.BYTE:return new o(m)}}e.fromArray=function(v){return v.reduce(function(y,x){return typeof x=="string"?y.push(g(x,null)):x.data&&y.push(g(x.data,x.mode)),y},[])},e.fromString=function(v,y){const x=u(v,s.isKanjiModeEnabled()),L=f(x),H=p(L,y),Z=a.find_path(H.map,"start","end"),N=[];for(let A=1;A<Z.length-1;A++)N.push(H.table[Z[A]].node);return e.fromArray(C(N))},e.rawSplit=function(v){return e.fromArray(u(v,s.isKanjiModeEnabled()))}})(yl);const _i=q1,Pi=Li,M8=i8,_8=o8,H8=pl,V8=ul,To=fl,ko=bi,T8=l8,ni=vl,k8=Cl,Z8=Ie,Ui=yl;function D8(e,t){const n=e.size,i=V8.getPositions(t);for(let o=0;o<i.length;o++){const r=i[o][0],l=i[o][1];for(let s=-1;s<=7;s++)if(!(r+s<=-1||n<=r+s))for(let a=-1;a<=7;a++)l+a<=-1||n<=l+a||(s>=0&&s<=6&&(a===0||a===6)||a>=0&&a<=6&&(s===0||s===6)||s>=2&&s<=4&&a>=2&&a<=4?e.set(r+s,l+a,!0,!0):e.set(r+s,l+a,!1,!0))}}function E8(e){const t=e.size;for(let n=8;n<t-8;n++){const i=n%2===0;e.set(n,6,i,!0),e.set(6,n,i,!0)}}function N8(e,t){const n=H8.getPositions(t);for(let i=0;i<n.length;i++){const o=n[i][0],r=n[i][1];for(let l=-2;l<=2;l++)for(let s=-2;s<=2;s++)l===-2||l===2||s===-2||s===2||l===0&&s===0?e.set(o+l,r+s,!0,!0):e.set(o+l,r+s,!1,!0)}}function A8(e,t){const n=e.size,i=ni.getEncodedBits(t);let o,r,l;for(let s=0;s<18;s++)o=Math.floor(s/3),r=s%3+n-8-3,l=(i>>s&1)===1,e.set(o,r,l,!0),e.set(r,o,l,!0)}function Qi(e,t,n){const i=e.size,o=k8.getEncodedBits(t,n);let r,l;for(r=0;r<15;r++)l=(o>>r&1)===1,r<6?e.set(r,8,l,!0):r<8?e.set(r+1,8,l,!0):e.set(i-15+r,8,l,!0),r<8?e.set(8,i-r-1,l,!0):r<9?e.set(8,15-r-1+1,l,!0):e.set(8,15-r-1,l,!0);e.set(i-8,8,1,!0)}function S8(e,t){const n=e.size;let i=-1,o=n-1,r=7,l=0;for(let s=n-1;s>0;s-=2)for(s===6&&s--;;){for(let a=0;a<2;a++)if(!e.isReserved(o,s-a)){let d=!1;l<t.length&&(d=(t[l]>>>r&1)===1),e.set(o,s-a,d),r--,r===-1&&(l++,r=7)}if(o+=i,o<0||n<=o){o-=i,i=-i;break}}}function I8(e,t,n){const i=new M8;n.forEach(function(a){i.put(a.mode.bit,4),i.put(a.getLength(),Z8.getCharCountIndicator(a.mode,e)),a.write(i)});const o=_i.getSymbolTotalCodewords(e),r=ko.getTotalCodewordsCount(e,t),l=(o-r)*8;for(i.getLengthInBits()+4<=l&&i.put(0,4);i.getLengthInBits()%8!==0;)i.putBit(0);const s=(l-i.getLengthInBits())/8;for(let a=0;a<s;a++)i.put(a%2?17:236,8);return j8(i,e,t)}function j8(e,t,n){const i=_i.getSymbolTotalCodewords(t),o=ko.getTotalCodewordsCount(t,n),r=i-o,l=ko.getBlocksCount(t,n),s=i%l,a=l-s,d=Math.floor(i/l),c=Math.floor(r/l),u=c+1,h=d-c,C=new T8(h);let f=0;const p=new Array(l),g=new Array(l);let m=0;const v=new Uint8Array(e.buffer);for(let Z=0;Z<l;Z++){const N=Z<a?c:u;p[Z]=v.slice(f,f+N),g[Z]=C.encode(p[Z]),f+=N,m=Math.max(m,N)}const y=new Uint8Array(i);let x=0,L,H;for(L=0;L<m;L++)for(H=0;H<l;H++)L<p[H].length&&(y[x++]=p[H][L]);for(L=0;L<h;L++)for(H=0;H<l;H++)y[x++]=g[H][L];return y}function O8(e,t,n,i){let o;if(Array.isArray(e))o=Ui.fromArray(e);else if(typeof e=="string"){let d=t;if(!d){const c=Ui.rawSplit(e);d=ni.getBestVersionForData(c,n)}o=Ui.fromString(e,d||40)}else throw new Error("Invalid data");const r=ni.getBestVersionForData(o,n);if(!r)throw new Error("The amount of data is too big to be stored in a QR Code");if(!t)t=r;else if(t<r)throw new Error(`
The chosen QR Code version cannot contain this amount of data.
Minimum version required to store current data is: `+r+`.
`);const l=I8(t,n,o),s=_i.getSymbolSize(t),a=new _8(s);return D8(a,t),E8(a),N8(a,t),Qi(a,n,0),t>=7&&A8(a,t),S8(a,l),isNaN(i)&&(i=To.getBestMask(a,Qi.bind(null,a,n))),To.applyMask(i,a),Qi(a,n,i),{modules:a,version:t,errorCorrectionLevel:n,maskPattern:i,segments:o}}cl.create=function(t,n){if(typeof t=="undefined"||t==="")throw new Error("No input text");let i=Pi.M,o,r;return typeof n!="undefined"&&(i=Pi.from(n.errorCorrectionLevel,Pi.M),o=ni.from(n.version),r=To.from(n.maskPattern),n.toSJISFunc&&_i.setToSJISFunction(n.toSJISFunc)),O8(t,o,i,r)};var Ll={},y2={};(function(e){function t(n){if(typeof n=="number"&&(n=n.toString()),typeof n!="string")throw new Error("Color should be defined as hex string");let i=n.slice().replace("#","").split("");if(i.length<3||i.length===5||i.length>8)throw new Error("Invalid hex color: "+n);(i.length===3||i.length===4)&&(i=Array.prototype.concat.apply([],i.map(function(r){return[r,r]}))),i.length===6&&i.push("F","F");const o=parseInt(i.join(""),16);return{r:o>>24&255,g:o>>16&255,b:o>>8&255,a:o&255,hex:"#"+i.slice(0,6).join("")}}e.getOptions=function(i){i||(i={}),i.color||(i.color={});const o=typeof i.margin=="undefined"||i.margin===null||i.margin<0?4:i.margin,r=i.width&&i.width>=21?i.width:void 0,l=i.scale||4;return{width:r,scale:r?4:l,margin:o,color:{dark:t(i.color.dark||"#000000ff"),light:t(i.color.light||"#ffffffff")},type:i.type,rendererOpts:i.rendererOpts||{}}},e.getScale=function(i,o){return o.width&&o.width>=i+o.margin*2?o.width/(i+o.margin*2):o.scale},e.getImageWidth=function(i,o){const r=e.getScale(i,o);return Math.floor((i+o.margin*2)*r)},e.qrToImageData=function(i,o,r){const l=o.modules.size,s=o.modules.data,a=e.getScale(l,r),d=Math.floor((l+r.margin*2)*a),c=r.margin*a,u=[r.color.light,r.color.dark];for(let h=0;h<d;h++)for(let C=0;C<d;C++){let f=(h*d+C)*4,p=r.color.light;if(h>=c&&C>=c&&h<d-c&&C<d-c){const g=Math.floor((h-c)/a),m=Math.floor((C-c)/a);p=u[s[g*l+m]?1:0]}i[f++]=p.r,i[f++]=p.g,i[f++]=p.b,i[f]=p.a}}})(y2);(function(e){const t=y2;function n(o,r,l){o.clearRect(0,0,r.width,r.height),r.style||(r.style={}),r.height=l,r.width=l,r.style.height=l+"px",r.style.width=l+"px"}function i(){try{return document.createElement("canvas")}catch{throw new Error("You need to specify a canvas element")}}e.render=function(r,l,s){let a=s,d=l;typeof a=="undefined"&&(!l||!l.getContext)&&(a=l,l=void 0),l||(d=i()),a=t.getOptions(a);const c=t.getImageWidth(r.modules.size,a),u=d.getContext("2d"),h=u.createImageData(c,c);return t.qrToImageData(h.data,r,a),n(u,d,c),u.putImageData(h,0,0),d},e.renderToDataURL=function(r,l,s){let a=s;typeof a=="undefined"&&(!l||!l.getContext)&&(a=l,l=void 0),a||(a={});const d=e.render(r,l,a),c=a.type||"image/png",u=a.rendererOpts||{};return d.toDataURL(c,u.quality)}})(Ll);var bl={};const z8=y2;function rr(e,t){const n=e.a/255,i=t+'="'+e.hex+'"';return n<1?i+" "+t+'-opacity="'+n.toFixed(2).slice(1)+'"':i}function qi(e,t,n){let i=e+t;return typeof n!="undefined"&&(i+=" "+n),i}function B8(e,t,n){let i="",o=0,r=!1,l=0;for(let s=0;s<e.length;s++){const a=Math.floor(s%t),d=Math.floor(s/t);!a&&!r&&(r=!0),e[s]?(l++,s>0&&a>0&&e[s-1]||(i+=r?qi("M",a+n,.5+d+n):qi("m",o,0),o=0,r=!1),a+1<t&&e[s+1]||(i+=qi("h",l),l=0)):o++}return i}bl.render=function(t,n,i){const o=z8.getOptions(n),r=t.modules.size,l=t.modules.data,s=r+o.margin*2,a=o.color.light.a?"<path "+rr(o.color.light,"fill")+' d="M0 0h'+s+"v"+s+'H0z"/>':"",d="<path "+rr(o.color.dark,"stroke")+' d="'+B8(l,r,o.margin)+'"/>',c='viewBox="0 0 '+s+" "+s+'"',u=o.width?'width="'+o.width+'" height="'+o.width+'" ':"",h='<svg xmlns="http://www.w3.org/2000/svg" '+u+c+' shape-rendering="crispEdges">'+a+d+`</svg>
`;return typeof i=="function"&&i(null,h),h};const F8=t8,Zo=cl,Ml=Ll,$8=bl;function x2(e,t,n,i,o){const r=[].slice.call(arguments,1),l=r.length,s=typeof r[l-1]=="function";if(!s&&!F8())throw new Error("Callback required as last argument");if(s){if(l<2)throw new Error("Too few arguments provided");l===2?(o=n,n=t,t=i=void 0):l===3&&(t.getContext&&typeof o=="undefined"?(o=i,i=void 0):(o=i,i=n,n=t,t=void 0))}else{if(l<1)throw new Error("Too few arguments provided");return l===1?(n=t,t=i=void 0):l===2&&!t.getContext&&(i=n,n=t,t=void 0),new Promise(function(a,d){try{const c=Zo.create(n,i);a(e(c,t,i))}catch(c){d(c)}})}try{const a=Zo.create(n,i);o(null,e(a,t,i))}catch(a){o(a)}}Ct.create=Zo.create;Ct.toCanvas=x2.bind(null,Ml.render);Ct.toDataURL=x2.bind(null,Ml.renderToDataURL);Ct.toString=x2.bind(null,function(e,t,n){return $8.render(e,n)});var R8=`:host{--phone-display: block;--phone-collapse-display: none;--phone-header-height: 48px;--phone-body-height: 667px}@media screen and (max-width: 960px){:host{--phone-display: none;--phone-collapse-display: flex}}.TDesign-doc-phone{width:375px;width:min(75vw,375px);border-radius:6px;border:1px solid var(--component-border);outline:9999px solid transparent;position:absolute;top:316px;right:24px;display:var(--phone-display)}.TDesign-doc-phone__close{width:40px;height:40px;display:flex;justify-content:center;align-items:center;border:1px solid var(--component-border);border-radius:0 6px 6px 0;position:absolute;right:-42px;top:42px;background-color:var(--bg-color-container);visibility:hidden;opacity:0;transition:all .2s linear}.TDesign-doc-phone__close svg{color:var(--text-primary);width:24px;height:24px}.TDesign-doc-phone__header{height:var(--phone-header-height);padding:8px;border-radius:6px 6px 0 0;box-sizing:border-box;background:var(--bg-color-demo)}.TDesign-doc-phone__header-icons{display:flex;height:100%}.TDesign-doc-phone__header-icons .icon{width:32px;height:32px;border-radius:var(--border-radius);transition:all .1s;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;color:var(--text-secondary)}.TDesign-doc-phone__header-icons .icon:hover{color:var(--text-primary);background-color:var(--bg-color-demo-hover)}.TDesign-doc-phone__header-icons .icon.active{color:var(--text-primary);background-color:var(--bg-color-demo-select)}.TDesign-doc-phone__header-icons .qrcode-wrapper{display:flex;justify-content:center;align-items:center;border-radius:3px;overflow:hidden;max-width:200px;max-height:200px}.TDesign-doc-phone__body{width:100%;height:var(--phone-body-height);border-radius:0 0 6px 6px;background-color:var(--bg-color-demo)}.TDesign-doc-phone-mask{content:"";position:fixed;left:0;top:0;width:100%;height:100%;z-index:2500;display:none}.TDesign-doc-phone-mask.show{display:block}.TDesign-doc-phone-mask.hide+.TDesign-doc-phone{visibility:hidden;opacity:0}.TDesign-doc-phone-mask.show+.TDesign-doc-phone{position:fixed;left:50%;top:50%!important;transform:translate3d(-50%,-50%,0);outline-color:var(--text-disabled);transition:transform .2s var(--anim-time-fn-easing),opacity .2s linear,visibility .2s linear;visibility:visible;opacity:1;z-index:2500;display:block}.TDesign-doc-phone-mask.show+.TDesign-doc-phone .TDesign-doc-phone__close{opacity:1;visibility:visible;cursor:pointer}.TDesign-doc-phone-collapse{position:fixed;right:0;top:400px;z-index:400;border-radius:3px 0 0 3px;box-shadow:2px 0 8px #00000042;width:40px;height:40px;align-items:center;justify-content:center;background-color:var(--bg-color-container);transition:all .2s var(--anim-time-fn-easing);display:var(--phone-collapse-display);cursor:pointer}.TDesign-doc-phone-collapse .icon svg{width:24px;height:24px;color:var(--text-primary)}
`,P8=`<svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M8.75 5H5V8.75H8.75V5Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M10 2.5C10.6904 2.5 11.25 3.05964 11.25 3.75V10C11.25 10.6904 10.6904 11.25 10 11.25H3.75C3.05964 11.25 2.5 10.6904 2.5 10V3.75C2.5 3.05964 3.05964 2.5 3.75 2.5H10ZM10 3.75H3.75V10H10V3.75Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 3.75C17.5 3.05964 16.9404 2.5 16.25 2.5H13.75C13.0596 2.5 12.5 3.05964 12.5 3.75V6.25C12.5 6.94036 13.0596 7.5 13.75 7.5H16.25C16.9404 7.5 17.5 6.94036 17.5 6.25V3.75ZM13.75 3.75H16.25V6.25H13.75V3.75Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.25 12.5C6.94036 12.5 7.5 13.0596 7.5 13.75V16.25C7.5 16.9404 6.94036 17.5 6.25 17.5H3.75C3.05964 17.5 2.5 16.9404 2.5 16.25V13.75C2.5 13.0596 3.05964 12.5 3.75 12.5H6.25ZM6.25 16.25V13.75H3.75V16.25H6.25Z" fill="currentColor"/>
  <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 13.75C17.5 13.0596 16.9404 12.5 16.25 12.5H13.75C13.0596 12.5 12.5 13.0596 12.5 13.75V16.25C12.5 16.9404 13.0596 17.5 13.75 17.5H16.25C16.9404 17.5 17.5 16.9404 17.5 16.25V13.75ZM13.75 16.25V13.75H16.25V16.25H13.75Z" fill="currentColor"/>
  <path d="M12.5 9.35091H13.75V10.6009H12.5V9.35091Z" fill="currentColor"/>
  <path d="M15 9.35091H17.5V10.6009H15V9.35091Z" fill="currentColor"/>
  <path d="M10.6301 15.0165H9.38007V17.5165H10.6301V15.0165Z" fill="currentColor"/>
  <path d="M9.38007 12.5H10.6301V13.75H9.38007V12.5Z" fill="currentColor"/>
</svg>
`,U8=`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M13 26H19V24H13V26Z" fill="currentColor" />
  <path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.89543 7.89543 3 9 3H23C24.1046 3 25 3.89543 25 5V28C25 29.1046 24.1046 30 23 30H9C7.89543 30 7 29.1046 7 28V5ZM9 5H23V28H9L9 5Z" fill="currentColor" />
</svg>`,Q8=`<svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill="currentColor" d="M3 21V3h7.1v2H5v14h14v-5.1h2V21H3zm7.59-9l7-7H13V3h8v8h-2V6.41l-7 7L10.59 12z"></path>
</svg>`;function Wi(e){if(!e.shadowRoot)return;const t=e.shadowRoot.querySelector(".TDesign-doc-phone-mask").classList;t.contains("hide")?(t.remove("hide"),t.add("show")):(t.remove("show"),t.add("hide"))}V1({tag:"td-doc-phone",headless:!1,href:"",QRCode:()=>Ct,qrCanvas:({render:e})=>e().querySelector("#qrcode"),qrcodeUrl:{get:(e,t)=>t,set:(e,t)=>t,connect:e=>{requestAnimationFrame(()=>{const t=e.querySelector('[slot="qrcode"]'),n=e.shadowRoot.querySelector('[slot="content"]');!t||!n||(n.innerHTML=t.outerHTML)})},observe:(e,t)=>{!e.qrCanvas||Ct.toCanvas(e.qrCanvas,t,{width:96,height:96})}},fixedStyle:{get:(e,t)=>t||{},set:(e,t)=>t,connect:(e,t)=>{function n(){if(window.innerWidth<960)return;const{scrollTop:r,scrollHeight:l,clientHeight:s}=document.documentElement,a=parseFloat(getComputedStyle(document.documentElement).getPropertyValue("--footer-height")),d=parseFloat(getComputedStyle(e).getPropertyValue("--phone-body-height")),c=64,u=l-a-d-c-64,h=s<=a+d+64;r>=228?r+88>=u&&h?Object.assign(e,{[t]:{...e.fixedStyle,position:"absolute",top:`${u}px`}}):Object.assign(e,{[t]:{...e.fixedStyle,position:"fixed",top:"152px"}}):Object.assign(e,{[t]:{...e.fixedStyle,position:"absolute",top:"316px"}})}function i(){if(!e.shadowRoot)return;const o=window.innerWidth<960,r=e.shadowRoot.querySelector(".TDesign-doc-phone-mask");o?(r.classList.remove("show"),r.classList.add("hide")):(r.classList.remove("show"),r.classList.remove("hide"))}return document.addEventListener("scroll",n),window.addEventListener("resize",i),window.addEventListener("load",i),()=>{document.removeEventListener("scroll",n),window.removeEventListener("resize",i),window.removeEventListener("load",i)}}},render:({fixedStyle:e,headless:t,href:n})=>K`
      <div class="TDesign-doc-phone-mask" onclick="${Wi}"></div>
      <div class="TDesign-doc-phone" style=${e}>
        ${t?K``:K`
              <div class="TDesign-doc-phone__header">
                <div class="TDesign-doc-phone__header-icons">
                  <td-doc-popup placement="left-start">
                    <span class="icon qrcode" innerHTML=${P8}></span>
                    <div slot="content" class="qrcode-wrapper">
                      <slot name="qrcode">
                        <canvas id="qrcode"></canvas>
                      </slot>
                    </div>
                  </td-doc-popup>
                  ${n&&K`<a href="${n}" target="_blank"><span class="icon" innerHTML="${Q8}"></span></a>`}
                </div>
              </div>
            `}
        <div class="TDesign-doc-phone__body">
          <slot></slot>
        </div>
        <div class="TDesign-doc-phone__close" innerHTML="${Y5}" onclick="${Wi}"></div>
      </div>
      <div class="TDesign-doc-phone-collapse" onclick="${Wi}">
        <i class="icon" innerHTML="${U8}"></i>
      </div>
    `.css`${R8}`});var q8=`:host{--block-base-width: 16px;position:absolute;top:228px;z-index:500}@media screen and (max-width: 960px){:host{--block-base-width: 14px}}.TDesign-doc-tabs{display:flex;align-items:center;justify-content:center;border-radius:6px;background:var(--bg-color-tab);height:calc(var(--block-base-width) * 3);box-sizing:border-box;cursor:pointer;border:1px solid var(--component-border)}.TDesign-doc-tabs__block{background-color:var(--bg-color-tab-select);box-shadow:0 2px 4px #00000026;position:absolute;height:calc(100% - 8px);left:4px;transition:all var(--anim-time-fn-easing) var(--anim-duration-moderate);border-radius:var(--border-radius)}.TDesign-doc-tabs .item+.item{margin-left:8px}.TDesign-doc-tabs .item{margin:4px;padding:8px calc(var(--block-base-width) * 1.5);font-size:var(--block-base-width);box-sizing:border-box;transition:all var(--anim-time-fn-easing) var(--anim-duration-moderate);border-radius:var(--border-radius);color:var(--text-secondary);position:relative;word-break:keep-all;white-space:nowrap}.TDesign-doc-tabs .item:hover,.TDesign-doc-tabs .item.active{color:var(--text-primary)}
`;const lr=Xe();function W8(e,t){e.tabScrollMap[e.tab]=document.documentElement.scrollTop;const{tab:n}=t.target.dataset;Object.assign(e,{tab:n}),se(e,"change",{detail:n}),e.autoScroll&&requestAnimationFrame(()=>{window.scrollTo({left:0,top:e.tabScrollMap[n],behavior:"smooth"})})}const K8=[{tab:"demo",name:lr==="zh"?"\u793A\u4F8B":"Demo"},{tab:"api",name:"API"},{tab:"design",name:lr==="zh"?"\u6307\u5357":"Guide"}];V1({tag:"td-doc-tabs",tab:"demo",autoScroll:!0,tabScrollMap:{get:(e,t)=>{const n={};return e.tabs.forEach(({tab:i})=>{n[i]=0}),t||n},set:(e,t)=>t},tabs:{get:(e,t)=>t||K8,set:(e,t)=>t},blockStyleMap:{get:(e,t)=>t||void 0,set:(e,t)=>t,connect:(e,t)=>{function n(){if(!e.shadowRoot){setTimeout(n,300);return}const i=e.shadowRoot.querySelectorAll(".item");let o={};i.forEach(r=>{if(!r.offsetWidth)o=null;else{const{tab:l}=r.dataset;o[l]={width:`${r.offsetWidth}px`,transform:`translate3d(${r.offsetLeft-4}px, 0, 0)`}}}),Object.assign(e,{[t]:o})}return requestAnimationFrame(n),window.addEventListener("resize",n),()=>{window.removeEventListener("resize",n)}}},render:e=>{const{tab:t,tabs:n,blockStyleMap:i}=e,o=i?i[t]:{};return n.length?K`
      <div class="TDesign-doc-tabs">
        <span class="TDesign-doc-tabs__block" style="${o}"></span>
        ${n.map(r=>K`
            <div
              data-tab=${r.tab}
              onclick="${W8}"
              class="item ${r.tab===t?"active":""}"
            >
              ${r.name}
            </div>
          `)}
      </div>
    `.css`${q8}`:K``}});var _l={exports:{}};(function(e){var t=typeof window!="undefined"?window:typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope?self:{};/**
 * Prism: Lightweight, robust, elegant syntax highlighting
 *
 * @license MIT <https://opensource.org/licenses/MIT>
 * @author Lea Verou <https://lea.verou.me>
 * @namespace
 * @public
 */var n=function(i){var o=/(?:^|\s)lang(?:uage)?-([\w-]+)(?=\s|$)/i,r=0,l={},s={manual:i.Prism&&i.Prism.manual,disableWorkerMessageHandler:i.Prism&&i.Prism.disableWorkerMessageHandler,util:{encode:function v(y){return y instanceof a?new a(y.type,v(y.content),y.alias):Array.isArray(y)?y.map(v):y.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(v){return Object.prototype.toString.call(v).slice(8,-1)},objId:function(v){return v.__id||Object.defineProperty(v,"__id",{value:++r}),v.__id},clone:function v(y,x){x=x||{};var L,H;switch(s.util.type(y)){case"Object":if(H=s.util.objId(y),x[H])return x[H];L={},x[H]=L;for(var Z in y)y.hasOwnProperty(Z)&&(L[Z]=v(y[Z],x));return L;case"Array":return H=s.util.objId(y),x[H]?x[H]:(L=[],x[H]=L,y.forEach(function(N,A){L[A]=v(N,x)}),L);default:return y}},getLanguage:function(v){for(;v;){var y=o.exec(v.className);if(y)return y[1].toLowerCase();v=v.parentElement}return"none"},setLanguage:function(v,y){v.className=v.className.replace(RegExp(o,"gi"),""),v.classList.add("language-"+y)},currentScript:function(){if(typeof document=="undefined")return null;if("currentScript"in document&&1<2)return document.currentScript;try{throw new Error}catch(L){var v=(/at [^(\r\n]*\((.*):[^:]+:[^:]+\)$/i.exec(L.stack)||[])[1];if(v){var y=document.getElementsByTagName("script");for(var x in y)if(y[x].src==v)return y[x]}return null}},isActive:function(v,y,x){for(var L="no-"+y;v;){var H=v.classList;if(H.contains(y))return!0;if(H.contains(L))return!1;v=v.parentElement}return!!x}},languages:{plain:l,plaintext:l,text:l,txt:l,extend:function(v,y){var x=s.util.clone(s.languages[v]);for(var L in y)x[L]=y[L];return x},insertBefore:function(v,y,x,L){L=L||s.languages;var H=L[v],Z={};for(var N in H)if(H.hasOwnProperty(N)){if(N==y)for(var A in x)x.hasOwnProperty(A)&&(Z[A]=x[A]);x.hasOwnProperty(N)||(Z[N]=H[N])}var _=L[v];return L[v]=Z,s.languages.DFS(s.languages,function(S,B){B===_&&S!=v&&(this[S]=Z)}),Z},DFS:function v(y,x,L,H){H=H||{};var Z=s.util.objId;for(var N in y)if(y.hasOwnProperty(N)){x.call(y,N,y[N],L||N);var A=y[N],_=s.util.type(A);_==="Object"&&!H[Z(A)]?(H[Z(A)]=!0,v(A,x,null,H)):_==="Array"&&!H[Z(A)]&&(H[Z(A)]=!0,v(A,x,N,H))}}},plugins:{},highlightAll:function(v,y){s.highlightAllUnder(document,v,y)},highlightAllUnder:function(v,y,x){var L={callback:x,container:v,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};s.hooks.run("before-highlightall",L),L.elements=Array.prototype.slice.apply(L.container.querySelectorAll(L.selector)),s.hooks.run("before-all-elements-highlight",L);for(var H=0,Z;Z=L.elements[H++];)s.highlightElement(Z,y===!0,L.callback)},highlightElement:function(v,y,x){var L=s.util.getLanguage(v),H=s.languages[L];s.util.setLanguage(v,L);var Z=v.parentElement;Z&&Z.nodeName.toLowerCase()==="pre"&&s.util.setLanguage(Z,L);var N=v.textContent,A={element:v,language:L,grammar:H,code:N};function _(B){A.highlightedCode=B,s.hooks.run("before-insert",A),A.element.innerHTML=A.highlightedCode,s.hooks.run("after-highlight",A),s.hooks.run("complete",A),x&&x.call(A.element)}if(s.hooks.run("before-sanity-check",A),Z=A.element.parentElement,Z&&Z.nodeName.toLowerCase()==="pre"&&!Z.hasAttribute("tabindex")&&Z.setAttribute("tabindex","0"),!A.code){s.hooks.run("complete",A),x&&x.call(A.element);return}if(s.hooks.run("before-highlight",A),!A.grammar){_(s.util.encode(A.code));return}if(y&&i.Worker){var S=new Worker(s.filename);S.onmessage=function(B){_(B.data)},S.postMessage(JSON.stringify({language:A.language,code:A.code,immediateClose:!0}))}else _(s.highlight(A.code,A.grammar,A.language))},highlight:function(v,y,x){var L={code:v,grammar:y,language:x};if(s.hooks.run("before-tokenize",L),!L.grammar)throw new Error('The language "'+L.language+'" has no grammar.');return L.tokens=s.tokenize(L.code,L.grammar),s.hooks.run("after-tokenize",L),a.stringify(s.util.encode(L.tokens),L.language)},tokenize:function(v,y){var x=y.rest;if(x){for(var L in x)y[L]=x[L];delete y.rest}var H=new u;return h(H,H.head,v),c(v,H,y,H.head,0),f(H)},hooks:{all:{},add:function(v,y){var x=s.hooks.all;x[v]=x[v]||[],x[v].push(y)},run:function(v,y){var x=s.hooks.all[v];if(!(!x||!x.length))for(var L=0,H;H=x[L++];)H(y)}},Token:a};i.Prism=s;function a(v,y,x,L){this.type=v,this.content=y,this.alias=x,this.length=(L||"").length|0}a.stringify=function v(y,x){if(typeof y=="string")return y;if(Array.isArray(y)){var L="";return y.forEach(function(_){L+=v(_,x)}),L}var H={type:y.type,content:v(y.content,x),tag:"span",classes:["token",y.type],attributes:{},language:x},Z=y.alias;Z&&(Array.isArray(Z)?Array.prototype.push.apply(H.classes,Z):H.classes.push(Z)),s.hooks.run("wrap",H);var N="";for(var A in H.attributes)N+=" "+A+'="'+(H.attributes[A]||"").replace(/"/g,"&quot;")+'"';return"<"+H.tag+' class="'+H.classes.join(" ")+'"'+N+">"+H.content+"</"+H.tag+">"};function d(v,y,x,L){v.lastIndex=y;var H=v.exec(x);if(H&&L&&H[1]){var Z=H[1].length;H.index+=Z,H[0]=H[0].slice(Z)}return H}function c(v,y,x,L,H,Z){for(var N in x)if(!(!x.hasOwnProperty(N)||!x[N])){var A=x[N];A=Array.isArray(A)?A:[A];for(var _=0;_<A.length;++_){if(Z&&Z.cause==N+","+_)return;var S=A[_],B=S.inside,D=!!S.lookbehind,j=!!S.greedy,Q=S.alias;if(j&&!S.pattern.global){var P=S.pattern.toString().match(/[imsuy]*$/)[0];S.pattern=RegExp(S.pattern.source,P+"g")}for(var F=S.pattern||S,G=L.next,d1=H;G!==y.tail&&!(Z&&d1>=Z.reach);d1+=G.value.length,G=G.next){var p1=G.value;if(y.length>v.length)return;if(!(p1 instanceof a)){var a1=1,c1;if(j){if(c1=d(F,d1,v,D),!c1||c1.index>=v.length)break;var v1=c1.index,u1=c1.index+c1[0].length,y1=d1;for(y1+=G.value.length;v1>=y1;)G=G.next,y1+=G.value.length;if(y1-=G.value.length,d1=y1,G.value instanceof a)continue;for(var g1=G;g1!==y.tail&&(y1<u1||typeof g1.value=="string");g1=g1.next)a1++,y1+=g1.value.length;a1--,p1=v.slice(d1,y1),c1.index-=d1}else if(c1=d(F,0,p1,D),!c1)continue;var v1=c1.index,O=c1[0],X=p1.slice(0,v1),J=p1.slice(v1+O.length),r1=d1+p1.length;Z&&r1>Z.reach&&(Z.reach=r1);var s1=G.prev;X&&(s1=h(y,s1,X),d1+=X.length),C(y,s1,a1);var M=new a(N,B?s.tokenize(O,B):O,Q,O);if(G=h(y,s1,M),J&&h(y,G,J),a1>1){var k={cause:N+","+_,reach:r1};c(v,y,x,G.prev,d1,k),Z&&k.reach>Z.reach&&(Z.reach=k.reach)}}}}}}function u(){var v={value:null,prev:null,next:null},y={value:null,prev:v,next:null};v.next=y,this.head=v,this.tail=y,this.length=0}function h(v,y,x){var L=y.next,H={value:x,prev:y,next:L};return y.next=H,L.prev=H,v.length++,H}function C(v,y,x){for(var L=y.next,H=0;H<x&&L!==v.tail;H++)L=L.next;y.next=L,L.prev=y,v.length-=H}function f(v){for(var y=[],x=v.head.next;x!==v.tail;)y.push(x.value),x=x.next;return y}if(!i.document)return i.addEventListener&&(s.disableWorkerMessageHandler||i.addEventListener("message",function(v){var y=JSON.parse(v.data),x=y.language,L=y.code,H=y.immediateClose;i.postMessage(s.highlight(L,s.languages[x],x)),H&&i.close()},!1)),s;var p=s.util.currentScript();p&&(s.filename=p.src,p.hasAttribute("data-manual")&&(s.manual=!0));function g(){s.manual||s.highlightAll()}if(!s.manual){var m=document.readyState;m==="loading"||m==="interactive"&&p&&p.defer?document.addEventListener("DOMContentLoaded",g):window.requestAnimationFrame?window.requestAnimationFrame(g):window.setTimeout(g,16)}return s}(t);e.exports&&(e.exports=n),typeof xo!="undefined"&&(xo.Prism=n),n.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]},n.languages.markup.tag.inside["attr-value"].inside.entity=n.languages.markup.entity,n.languages.markup.doctype.inside["internal-subset"].inside=n.languages.markup,n.hooks.add("wrap",function(i){i.type==="entity"&&(i.attributes.title=i.content.replace(/&amp;/,"&"))}),Object.defineProperty(n.languages.markup.tag,"addInlined",{value:function(o,r){var l={};l["language-"+r]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:n.languages[r]},l.cdata=/^<!\[CDATA\[|\]\]>$/i;var s={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:l}};s["language-"+r]={pattern:/[\s\S]+/,inside:n.languages[r]};var a={};a[o]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return o}),"i"),lookbehind:!0,greedy:!0,inside:s},n.languages.insertBefore("markup","cdata",a)}}),Object.defineProperty(n.languages.markup.tag,"addAttribute",{value:function(i,o){n.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+i+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[o,"language-"+o],inside:n.languages[o]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}}),n.languages.html=n.languages.markup,n.languages.mathml=n.languages.markup,n.languages.svg=n.languages.markup,n.languages.xml=n.languages.extend("markup",{}),n.languages.ssml=n.languages.xml,n.languages.atom=n.languages.xml,n.languages.rss=n.languages.xml,function(i){var o=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;i.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+o.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+o.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+o.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+o.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:o,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},i.languages.css.atrule.inside.rest=i.languages.css;var r=i.languages.markup;r&&(r.tag.addInlined("style","css"),r.tag.addAttribute("style","css"))}(n),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0,greedy:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|trait)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:break|catch|continue|do|else|finally|for|function|if|in|instanceof|new|null|return|throw|try|while)\b/,boolean:/\b(?:false|true)\b/,function:/\b\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+(?:\.\d*)?|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{"class-name":[n.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/}),n.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/,n.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:n.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:n.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:n.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:n.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:n.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),n.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:n.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}}),n.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}}),n.languages.markup&&(n.languages.markup.tag.addInlined("script","javascript"),n.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript")),n.languages.js=n.languages.javascript,function(){if(typeof n=="undefined"||typeof document=="undefined")return;Element.prototype.matches||(Element.prototype.matches=Element.prototype.msMatchesSelector||Element.prototype.webkitMatchesSelector);var i="Loading\u2026",o=function(p,g){return"\u2716 Error "+p+" while fetching file: "+g},r="\u2716 Error: File does not exist or is empty",l={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"},s="data-src-status",a="loading",d="loaded",c="failed",u="pre[data-src]:not(["+s+'="'+d+'"]):not(['+s+'="'+a+'"])';function h(p,g,m){var v=new XMLHttpRequest;v.open("GET",p,!0),v.onreadystatechange=function(){v.readyState==4&&(v.status<400&&v.responseText?g(v.responseText):v.status>=400?m(o(v.status,v.statusText)):m(r))},v.send(null)}function C(p){var g=/^\s*(\d+)\s*(?:(,)\s*(?:(\d+)\s*)?)?$/.exec(p||"");if(g){var m=Number(g[1]),v=g[2],y=g[3];return v?y?[m,Number(y)]:[m,void 0]:[m,m]}}n.hooks.add("before-highlightall",function(p){p.selector+=", "+u}),n.hooks.add("before-sanity-check",function(p){var g=p.element;if(g.matches(u)){p.code="",g.setAttribute(s,a);var m=g.appendChild(document.createElement("CODE"));m.textContent=i;var v=g.getAttribute("data-src"),y=p.language;if(y==="none"){var x=(/\.(\w+)$/.exec(v)||[,"none"])[1];y=l[x]||x}n.util.setLanguage(m,y),n.util.setLanguage(g,y);var L=n.plugins.autoloader;L&&L.loadLanguages(y),h(v,function(H){g.setAttribute(s,d);var Z=C(g.getAttribute("data-range"));if(Z){var N=H.split(/\r\n?|\n/g),A=Z[0],_=Z[1]==null?N.length:Z[1];A<0&&(A+=N.length),A=Math.max(0,Math.min(A-1,N.length)),_<0&&(_+=N.length),_=Math.max(0,Math.min(_,N.length)),H=N.slice(A,_).join(`
`),g.hasAttribute("data-start")||g.setAttribute("data-start",String(A+1))}m.textContent=H,n.highlightElement(m)},function(H){g.setAttribute(s,c),m.textContent=H})}}),n.plugins.fileHighlight={highlight:function(g){for(var m=(g||document).querySelectorAll(u),v=0,y;y=m[v++];)n.highlightElement(y)}};var f=!1;n.fileHighlight=function(){f||(console.warn("Prism.fileHighlight is deprecated. Use `Prism.plugins.fileHighlight.highlight` instead."),f=!0),n.plugins.fileHighlight.highlight.apply(this,arguments)}}()})(_l);var bt=_l.exports,Y8=`code[class*=language-],pre[class*=language-]{text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;font-size:1em;line-height:1.5em;tab-size:4;hyphens:none}code[class*=language-]::selection,pre[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-] ::selection{background:#d6dbe3;color:#263238}:not(pre)>code[class*=language-]{white-space:normal;border-radius:.2em;padding:.1em}pre[class*=language-]{overflow:auto;position:relative}.language-css>code,.language-sass>code,.language-scss>code{color:#c24c08}[class*=language-] .namespace{opacity:.7}.token.atrule{color:#6d3bac}.token.attr-name{color:#007edf}.token.attr-value,.token.attribute{color:#d29c00}.token.boolean{color:#6d3bac}.token.builtin,.token.cdata,.token.char,.token.class{color:#007edf}.token.class-name{color:#003cbf}.token.comment{color:#97a3b7}.token.constant{color:#6d3bac}.token.deleted{color:#b01531}.token.doctype{color:#97a3b7}.token.entity{color:#b01531}.token.function{color:#6d3bac}.token.hexcode{color:#c24c08}.token.id,.token.important{color:#6d3bac;font-weight:700}.token.inserted{color:#007edf}.token.keyword{color:#6d3bac}.token.number{color:#c24c08}.token.operator{color:#007edf}.token.prolog{color:#97a3b7}.token.property{color:#007edf}.token.pseudo-class,.token.pseudo-element{color:#d29c00}.token.punctuation{color:#007edf}.token.regex{color:#003cbf}.token.selector{color:#b01531}.token.string{color:#d29c00}.token.symbol{color:#6d3bac}.token.tag{color:#b01531}.token.unit{color:#c24c08}.token.url,.token.variable{color:#b01531}:root[theme-mode=dark] code[class*=language-],:root[theme-mode=dark] pre[class*=language-]{text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;font-size:1em;line-height:1.5em;tab-size:4;hyphens:none}:root[theme-mode=dark] code[class*=language-]::selection,:root[theme-mode=dark] pre[class*=language-]::selection,:root[theme-mode=dark] code[class*=language-] ::selection,:root[theme-mode=dark] pre[class*=language-] ::selection{background:#d6dbe3;color:#263238}:root[theme-mode=dark] :not(pre)>code[class*=language-]{white-space:normal;border-radius:.2em;padding:.1em}:root[theme-mode=dark] pre[class*=language-]{overflow:auto;position:relative}:root[theme-mode=dark] .language-css>code,:root[theme-mode=dark] .language-sass>code,:root[theme-mode=dark] .language-scss>code{color:#f2995f}:root[theme-mode=dark] [class*=language-] .namespace{opacity:.7}:root[theme-mode=dark] .token.atrule{color:#ae78f0}:root[theme-mode=dark] .token.attr-name{color:#3280ff}:root[theme-mode=dark] .token.attr-value{color:#fbca25}:root[theme-mode=dark] .token.attribute{color:#fbca25}:root[theme-mode=dark] .token.boolean{color:#ae78f0}:root[theme-mode=dark] .token.builtin{color:#3280ff}:root[theme-mode=dark] .token.cdata{color:#3280ff}:root[theme-mode=dark] .token.char{color:#3280ff}:root[theme-mode=dark] .token.class{color:#3280ff}:root[theme-mode=dark] .token.class-name{color:#5cc5fc}:root[theme-mode=dark] .token.comment{color:#97a3b7}:root[theme-mode=dark] .token.constant{color:#ae78f0}:root[theme-mode=dark] .token.deleted{color:#48c79c}:root[theme-mode=dark] .token.doctype{color:#97a3b7}:root[theme-mode=dark] .token.entity{color:#48c79c}:root[theme-mode=dark] .token.function{color:#ae78f0}:root[theme-mode=dark] .token.hexcode{color:#f2995f}:root[theme-mode=dark] .token.id{color:#ae78f0;font-weight:700}:root[theme-mode=dark] .token.important{color:#f6c;font-weight:700}:root[theme-mode=dark] .token.inserted{color:#3280ff}:root[theme-mode=dark] .token.keyword{color:#f6c}:root[theme-mode=dark] .token.number{color:#f2995f}:root[theme-mode=dark] .token.operator{color:#3280ff}:root[theme-mode=dark] .token.prolog{color:#97a3b7}:root[theme-mode=dark] .token.property{color:#3280ff}:root[theme-mode=dark] .token.pseudo-class{color:#fbca25}:root[theme-mode=dark] .token.pseudo-element{color:#fbca25}:root[theme-mode=dark] .token.punctuation{color:#3280ff}:root[theme-mode=dark] .token.regex{color:#5cc5fc}:root[theme-mode=dark] .token.selector{color:#f36d78}:root[theme-mode=dark] .token.string{color:#fbca25}:root[theme-mode=dark] .token.symbol{color:#f6c}:root[theme-mode=dark] .token.tag{color:#48c79c}:root[theme-mode=dark] .token.unit{color:#f2995f}:root[theme-mode=dark] .token.url{color:#48c79c}:root[theme-mode=dark] .token.variable{color:#48c79c}.TDesign-doc-demo{margin:24px 0 48px;background-color:var(--bg-color-demo);color:var(--text-primary);border:1px solid var(--component-border);border-radius:6px}.TDesign-doc-demo.open{background:var(--bg-color-code)}.TDesign-doc-demo.open .TDesign-doc-demo__footer{border-radius:6px}.TDesign-doc-demo.open .TDesign-doc-demo__btns{position:relative}.TDesign-doc-demo.open .TDesign-doc-demo__btns:after{content:"";width:100%;height:20px;position:absolute;top:100%;left:0;z-index:1;background:var(--bg-color-code-linear)}.TDesign-doc-demo.open .TDesign-doc-demo__btns .action:hover{background-color:var(--bg-color-component-hover)}.TDesign-doc-demo__footer{border-radius:0 0 5px 5px}.TDesign-doc-demo__btns{height:48px;padding:8px;display:flex;justify-content:flex-end;column-gap:8px;align-items:center;box-sizing:border-box}.TDesign-doc-demo__btns .action{height:32px;width:32px;padding:8px;box-sizing:border-box;border-radius:var(--border-radius);cursor:pointer;user-select:none;transition:all .1s;display:inline-flex;color:var(--text-secondary)}.TDesign-doc-demo__btns .action:hover{color:var(--text-primary);background-color:var(--bg-color-demo-hover)}.TDesign-doc-demo__btns .action.active{color:var(--text-primary);background-color:var(--bg-color-demo-select)}.TDesign-doc-demo__code{border-radius:0 0 6px 6px;overflow:hidden;max-height:560px}.TDesign-doc-demo__code pre{margin:0;padding:20px 24px;max-height:560px;box-sizing:border-box;overflow:auto;background:var(--bg-color-code);color:var(--text-primary);border-top:1px solid var(--component-border)}.TDesign-doc-demo__code pre:hover::-webkit-scrollbar-thumb{background-color:var(--bg-color-scroll)}.TDesign-doc-demo__code pre::-webkit-scrollbar{width:12px;height:12px;background:transparent}.TDesign-doc-demo__code pre::-webkit-scrollbar-corner{width:0}.TDesign-doc-demo__code pre::-webkit-scrollbar-thumb{border-radius:6px;border:4px solid transparent;background-clip:content-box;background-color:transparent}
`,Hl=`<svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill="currentColor" d="M10.3736 0.498413L11.581 0.821937L7.69869 15.3108L6.49128 14.9873L10.3736 0.498413Z" />
  <path fill="currentColor" d="M13.687 2.66028L17.3046 6.79909C17.8786 7.45583 17.9195 8.41353 17.4255 9.11321L17.3115 9.25899L13.6894 13.4505L12.7436 12.6332C12.7436 12.6332 16.645 8.25979 16.5103 8.0325L12.7459 3.4829L13.687 2.66028Z" />
  <path fill="currentColor" d="M0.667582 6.90809L3.84161 2.67255L4.8419 3.42215L1.51505 7.99998C1.41314 8.20784 4.8419 12.6428 4.8419 12.6428L3.84161 13.3924L0.667582 9.1569L0.5612 8.99891C0.171134 8.35104 0.206595 7.52325 0.667582 6.90809Z" />
</svg>
`;Prism.languages.markup={comment:{pattern:/<!--(?:(?!<!--)[\s\S])*?-->/,greedy:!0},prolog:{pattern:/<\?[\s\S]+?\?>/,greedy:!0},doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:[^<"'\]]|"[^"]*"|'[^']*'|<(?!!--)|<!--(?:[^-]|-(?!->))*-->)*\]\s*)?>/i,greedy:!0,inside:{"internal-subset":{pattern:/(^[^\[]*\[)[\s\S]+(?=\]>$)/,lookbehind:!0,greedy:!0,inside:null},string:{pattern:/"[^"]*"|'[^']*'/,greedy:!0},punctuation:/^<!|>$|[[\]]/,"doctype-tag":/^DOCTYPE/i,name:/[^\s<>'"]+/}},cdata:{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,greedy:!0},tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"special-attr":[],"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/,inside:{punctuation:[{pattern:/^=/,alias:"attr-equals"},{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:[{pattern:/&[\da-z]{1,8};/i,alias:"named-entity"},/&#x?[\da-f]{1,8};/i]};Prism.languages.markup.tag.inside["attr-value"].inside.entity=Prism.languages.markup.entity;Prism.languages.markup.doctype.inside["internal-subset"].inside=Prism.languages.markup;Prism.hooks.add("wrap",function(e){e.type==="entity"&&(e.attributes.title=e.content.replace(/&amp;/,"&"))});Object.defineProperty(Prism.languages.markup.tag,"addInlined",{value:function(t,n){var i={};i["language-"+n]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:Prism.languages[n]},i.cdata=/^<!\[CDATA\[|\]\]>$/i;var o={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:i}};o["language-"+n]={pattern:/[\s\S]+/,inside:Prism.languages[n]};var r={};r[t]={pattern:RegExp(/(<__[^>]*>)(?:<!\[CDATA\[(?:[^\]]|\](?!\]>))*\]\]>|(?!<!\[CDATA\[)[\s\S])*?(?=<\/__>)/.source.replace(/__/g,function(){return t}),"i"),lookbehind:!0,greedy:!0,inside:o},Prism.languages.insertBefore("markup","cdata",r)}});Object.defineProperty(Prism.languages.markup.tag,"addAttribute",{value:function(e,t){Prism.languages.markup.tag.inside["special-attr"].push({pattern:RegExp(/(^|["'\s])/.source+"(?:"+e+")"+/\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))/.source,"i"),lookbehind:!0,inside:{"attr-name":/^[^\s=]+/,"attr-value":{pattern:/=[\s\S]+/,inside:{value:{pattern:/(^=\s*(["']|(?!["'])))\S[\s\S]*(?=\2$)/,lookbehind:!0,alias:[t,"language-"+t],inside:Prism.languages[t]},punctuation:[{pattern:/^=/,alias:"attr-equals"},/"|'/]}}}})}});Prism.languages.html=Prism.languages.markup;Prism.languages.mathml=Prism.languages.markup;Prism.languages.svg=Prism.languages.markup;Prism.languages.xml=Prism.languages.extend("markup",{});Prism.languages.ssml=Prism.languages.xml;Prism.languages.atom=Prism.languages.xml;Prism.languages.rss=Prism.languages.xml;(function(e){var t=/(?:"(?:\\(?:\r\n|[\s\S])|[^"\\\r\n])*"|'(?:\\(?:\r\n|[\s\S])|[^'\\\r\n])*')/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:RegExp("@[\\w-](?:"+/[^;{\s"']|\s+(?!\s)/.source+"|"+t.source+")*?"+/(?:;|(?=\s*\{))/.source),inside:{rule:/^@[\w-]+/,"selector-function-argument":{pattern:/(\bselector\s*\(\s*(?![\s)]))(?:[^()\s]|\s+(?![\s)])|\((?:[^()]|\([^()]*\))*\))+(?=\s*\))/,lookbehind:!0,alias:"selector"},keyword:{pattern:/(^|[^\w-])(?:and|not|only|or)(?![\w-])/,lookbehind:!0}}},url:{pattern:RegExp("\\burl\\((?:"+t.source+"|"+/(?:[^\\\r\n()"']|\\[\s\S])*/.source+")\\)","i"),greedy:!0,inside:{function:/^url/i,punctuation:/^\(|\)$/,string:{pattern:RegExp("^"+t.source+"$"),alias:"url"}}},selector:{pattern:RegExp(`(^|[{}\\s])[^{}\\s](?:[^{};"'\\s]|\\s+(?![\\s{])|`+t.source+")*(?=\\s*\\{)"),lookbehind:!0},string:{pattern:t,greedy:!0},property:{pattern:/(^|[^-\w\xA0-\uFFFF])(?!\s)[-_a-z\xA0-\uFFFF](?:(?!\s)[-\w\xA0-\uFFFF])*(?=\s*:)/i,lookbehind:!0},important:/!important\b/i,function:{pattern:/(^|[^-a-z0-9])[-a-z0-9]+(?=\()/i,lookbehind:!0},punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),n.tag.addAttribute("style","css"))})(Prism);(function(e){var t=e.util.clone(e.languages.javascript),n=/(?:\s|\/\/.*(?!.)|\/\*(?:[^*]|\*(?!\/))\*\/)/.source,i=/(?:\{(?:\{(?:\{[^{}]*\}|[^{}])*\}|[^{}])*\})/.source,o=/(?:\{<S>*\.{3}(?:[^{}]|<BRACES>)*\})/.source;function r(a,d){return a=a.replace(/<S>/g,function(){return n}).replace(/<BRACES>/g,function(){return i}).replace(/<SPREAD>/g,function(){return o}),RegExp(a,d)}o=r(o).source,e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=r(/<\/?(?:[\w.:-]+(?:<S>+(?:[\w.:$-]+(?:=(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s{'"/>=]+|<BRACES>))?|<SPREAD>))*<S>*\/?)?>/.source),e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:"(?:\\[\s\S]|[^\\"])*"|'(?:\\[\s\S]|[^\\'])*'|[^\s'">]+)/,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.jsx.tag.inside.comment=t.comment,e.languages.insertBefore("inside","attr-name",{spread:{pattern:r(/<SPREAD>/.source),inside:e.languages.jsx}},e.languages.jsx.tag),e.languages.insertBefore("inside","special-attr",{script:{pattern:r(/=<BRACES>/.source),alias:"language-javascript",inside:{"script-punctuation":{pattern:/^=(?=\{)/,alias:"punctuation"},rest:e.languages.jsx}}},e.languages.jsx.tag);var l=function(a){return a?typeof a=="string"?a:typeof a.content=="string"?a.content:a.content.map(l).join(""):""},s=function(a){for(var d=[],c=0;c<a.length;c++){var u=a[c],h=!1;if(typeof u!="string"&&(u.type==="tag"&&u.content[0]&&u.content[0].type==="tag"?u.content[0].content[0].content==="</"?d.length>0&&d[d.length-1].tagName===l(u.content[0].content[1])&&d.pop():u.content[u.content.length-1].content==="/>"||d.push({tagName:l(u.content[0].content[1]),openedBraces:0}):d.length>0&&u.type==="punctuation"&&u.content==="{"?d[d.length-1].openedBraces++:d.length>0&&d[d.length-1].openedBraces>0&&u.type==="punctuation"&&u.content==="}"?d[d.length-1].openedBraces--:h=!0),(h||typeof u=="string")&&d.length>0&&d[d.length-1].openedBraces===0){var C=l(u);c<a.length-1&&(typeof a[c+1]=="string"||a[c+1].type==="plain-text")&&(C+=l(a[c+1]),a.splice(c+1,1)),c>0&&(typeof a[c-1]=="string"||a[c-1].type==="plain-text")&&(C=l(a[c-1])+C,a.splice(c-1,1),c--),a[c]=new e.Token("plain-text",C,null,C)}u.content&&typeof u.content!="string"&&s(u.content)}};e.hooks.add("after-tokenize",function(a){a.language!=="jsx"&&a.language!=="tsx"||s(a.tokens)})})(Prism);Prism.languages.javascript=Prism.languages.extend("clike",{"class-name":[Prism.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$A-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\.(?:constructor|prototype))/,lookbehind:!0}],keyword:[{pattern:/((?:^|\})\s*)catch\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|assert(?=\s*\{)|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally(?=\s*(?:\{|$))|for|from(?=\s*(?:['"]|$))|function|(?:get|set)(?=\s*(?:[#\[$\w\xA0-\uFFFF]|$))|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],function:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,number:{pattern:RegExp(/(^|[^\w$])/.source+"(?:"+(/NaN|Infinity/.source+"|"+/0[bB][01]+(?:_[01]+)*n?/.source+"|"+/0[oO][0-7]+(?:_[0-7]+)*n?/.source+"|"+/0[xX][\dA-Fa-f]+(?:_[\dA-Fa-f]+)*n?/.source+"|"+/\d+(?:_\d+)*n/.source+"|"+/(?:\d+(?:_\d+)*(?:\.(?:\d+(?:_\d+)*)?)?|\.\d+(?:_\d+)*)(?:[Ee][+-]?\d+(?:_\d+)*)?/.source)+")"+/(?![\w$])/.source),lookbehind:!0},operator:/--|\+\+|\*\*=?|=>|&&=?|\|\|=?|[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?\?=?|\?\.?|[~:]/});Prism.languages.javascript["class-name"][0].pattern=/(\b(?:class|extends|implements|instanceof|interface|new)\s+)[\w.\\]+/;Prism.languages.insertBefore("javascript","keyword",{regex:{pattern:RegExp(/((?:^|[^$\w\xA0-\uFFFF."'\])\s]|\b(?:return|yield))\s*)/.source+/\//.source+"(?:"+/(?:\[(?:[^\]\\\r\n]|\\.)*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}/.source+"|"+/(?:\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.|\[(?:[^[\]\\\r\n]|\\.)*\])*\])*\]|\\.|[^/\\\[\r\n])+\/[dgimyus]{0,7}v[dgimyus]{0,7}/.source+")"+/(?=(?:\s|\/\*(?:[^*]|\*(?!\/))*\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/.source),lookbehind:!0,greedy:!0,inside:{"regex-source":{pattern:/^(\/)[\s\S]+(?=\/[a-z]*$)/,lookbehind:!0,alias:"language-regex",inside:Prism.languages.regex},"regex-delimiter":/^\/|\/$/,"regex-flags":/^[a-z]+$/}},"function-variable":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*)?\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\))/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(^|[^$\w\xA0-\uFFFF])(?!\s)[_$a-z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*=>)/i,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*=>)/,lookbehind:!0,inside:Prism.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*)\(\s*|\]\s*\(\s*)(?!\s)(?:[^()\s]|\s+(?![\s)])|\([^()]*\))+(?=\s*\)\s*\{)/,lookbehind:!0,inside:Prism.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/});Prism.languages.insertBefore("javascript","string",{hashbang:{pattern:/^#!.*/,greedy:!0,alias:"comment"},"template-string":{pattern:/`(?:\\[\s\S]|\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}|(?!\$\{)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\$\{(?:[^{}]|\{(?:[^{}]|\{[^}]*\})*\})+\}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\$\{|\}$/,alias:"punctuation"},rest:Prism.languages.javascript}},string:/[\s\S]+/}},"string-property":{pattern:/((?:^|[,{])[ \t]*)(["'])(?:\\(?:\r\n|[\s\S])|(?!\2)[^\\\r\n])*\2(?=\s*:)/m,lookbehind:!0,greedy:!0,alias:"property"}});Prism.languages.insertBefore("javascript","operator",{"literal-property":{pattern:/((?:^|[,{])[ \t]*)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?=\s*:)/m,lookbehind:!0,alias:"property"}});Prism.languages.markup&&(Prism.languages.markup.tag.addInlined("script","javascript"),Prism.languages.markup.tag.addAttribute(/on(?:abort|blur|change|click|composition(?:end|start|update)|dblclick|error|focus(?:in|out)?|key(?:down|up)|load|mouse(?:down|enter|leave|move|out|over|up)|reset|resize|scroll|select|slotchange|submit|unload|wheel)/.source,"javascript"));Prism.languages.js=Prism.languages.javascript;(function(e){e.languages.typescript=e.languages.extend("javascript",{"class-name":{pattern:/(\b(?:class|extends|implements|instanceof|interface|new|type)\s+)(?!keyof\b)(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*(?:\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>)?/,lookbehind:!0,greedy:!0,inside:null},builtin:/\b(?:Array|Function|Promise|any|boolean|console|never|number|string|symbol|unknown)\b/}),e.languages.typescript.keyword.push(/\b(?:abstract|declare|is|keyof|readonly|require)\b/,/\b(?:asserts|infer|interface|module|namespace|type)\b(?=\s*(?:[{_$a-zA-Z\xA0-\uFFFF]|$))/,/\btype\b(?=\s*(?:[\{*]|$))/),delete e.languages.typescript.parameter,delete e.languages.typescript["literal-property"];var t=e.languages.extend("typescript",{});delete t["class-name"],e.languages.typescript["class-name"].inside=t,e.languages.insertBefore("typescript","function",{decorator:{pattern:/@[$\w\xA0-\uFFFF]+/,inside:{at:{pattern:/^@/,alias:"operator"},function:/^[\s\S]+/}},"generic-function":{pattern:/#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*\s*<(?:[^<>]|<(?:[^<>]|<[^<>]*>)*>)*>(?=\s*\()/,greedy:!0,inside:{function:/^#?(?!\s)[_$a-zA-Z\xA0-\uFFFF](?:(?!\s)[$\w\xA0-\uFFFF])*/,generic:{pattern:/<[\s\S]+/,alias:"class-name",inside:t}}}}),e.languages.ts=e.languages.typescript})(Prism);V1({tag:"td-doc-demo",code:"",language:"jsx",showCode:!1,mode:"auto",theme:{get:(e,t)=>t||sessionStorage.getItem("--tdesign-theme")||"light",set:(e,t)=>t,connect(e,t,n){function i(){const o=sessionStorage.getItem("--tdesign-theme");Object.assign(e,{[t]:o}),n()}return window.addEventListener("storageChange",i),()=>window.removeEventListener("storageChange",i)}},render:e=>{const{code:t,language:n,showCode:i,mode:o,theme:r}=e,l=bt.highlight(t,bt.languages[n],n),s={transitionDuration:".2s",maxHeight:i?"560px":0,transitionTimingFunction:i?"cubic-bezier(.82, 0, 1, .9)":"ease"};return K`
      <div class="TDesign-doc-demo ${o}">
        <slot></slot>
        <div class="TDesign-doc-demo__footer">
          <div class="TDesign-doc-demo__btns">
            <slot name="action"></slot>
            <td-doc-copy code=${t} theme=${o==="open"?"dark":"light"}></td-doc-copy>
            ${o==="open"?K``:K`<span class="action code ${i?"active":""}" onclick=${K.set("showCode",!i)} innerHTML=${Hl}></span>`}
          </div>
          <div class="TDesign-doc-demo__code ${r}" style="${s}">
            <pre class="language-${n}"><code class="language-${n}" innerHTML="${l}"></code></pre>
          </div>
        </div>
      </div>
    `.css`${Y8}`}});var G8=`.TDesign-doc-copy{height:32px;position:relative}.TDesign-doc-copy.dark .TDesign-doc-copy__inner:hover{background-color:var(--bg-color-component-hover)}.TDesign-doc-copy__inner{height:32px;width:32px;padding:8px;box-sizing:border-box;border-radius:var(--border-radius);cursor:pointer;user-select:none;transition:all .1s;display:inline-flex;color:var(--text-secondary)}.TDesign-doc-copy__inner:hover{color:var(--text-primary);background-color:var(--bg-color-demo-hover)}.TDesign-doc-copy__popup{position:absolute;top:-36px;left:-12px;color:var(--text-primary);border-radius:var(--border-radius);padding:4px 8px;word-break:keep-all;line-height:22px;visibility:hidden;opacity:0;transition:all .2s linear;background-color:var(--bg-color-container);box-shadow:0 3px 14px 2px #0000000d,0 8px 10px 1px #0000000f,0 5px 5px -3px #0000001a}.TDesign-doc-copy__popup:after{content:"";z-index:2;width:0;height:0;border-style:solid;border-width:6px;border-color:transparent;border-top-color:var(--bg-color-container);bottom:-12px;left:50%;position:absolute;margin-left:-6px;font-size:12px}.TDesign-doc-copy__popup.show{opacity:1;visibility:visible}
`,X8=`<svg width="16" height="16" viewBox="0 0 16 18" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path fill="currentColor" fill-rule="evenodd" clip-rule="evenodd" d="M4.24985 0.249871C3.55956 0.249951 3 0.809572 3 1.49987V14C3 14.6904 3.55964 15.25 4.25 15.25H14.25C14.9404 15.25 15.5 14.6904 15.5 14V5.2489C15.5 4.91698 15.368 4.59868 15.1331 4.36419L11.3763 0.61444C11.1419 0.380487 10.8243 0.249107 10.4931 0.249146L4.24985 0.249871ZM10.4933 1.49915L4.25 1.49987V14H14.25V6.50002L9.25 6.50001V1.50001L10.4933 1.49915ZM10.5 5.25002H14.25L10.5 1.50587V5.25002Z" />
  <path fill="currentColor" d="M0.5 5.25001V16.5C0.5 17.1904 1.05964 17.75 1.75 17.75L14.25 17.75V16.5L1.88889 16.5V5.25001H0.5Z" />
</svg>`;function J8(e){if("clipboard"in navigator){navigator.clipboard.writeText(e.code).then(()=>{Object.assign(e,{showTip:!0}),setTimeout(()=>Object.assign(e,{showTip:!1}),800),se(e,"copy",{detail:e.code})});return}const t=document.createElement("textarea");t.textContent=e.code,t.style.width=0,t.style.height=0,document.body.appendChild(t);const n=document.getSelection(),i=document.createRange();i.selectNode(t),n.removeAllRanges(),n.addRange(i),document.execCommand("copy"),n.removeAllRanges(),document.body.removeChild(t),se(e,"copy",{detail:e.code})}V1({tag:"td-doc-copy",code:"",render:()=>K`
    <td-tooltip duration="800">
      <div class="TDesign-doc-copy__inner" innerHTML=${X8} onclick=${J8}></div>
      <span slot="content">已复制</span>
    </td-tooltip>
  `.css`${G8}`});var ec=`.TDesign-doc-empty .light{display:var(--theme-block-light-display)}.TDesign-doc-empty .dark{display:var(--theme-block-dark-display)}.TDesign-doc-empty__design{display:flex;justify-content:center;align-items:center;padding:48px;border:1px solid var(--component-border);border-radius:6px}.TDesign-doc-empty__design img{width:50%;height:auto;min-width:240px}
`;function tc(e){if(e==="design")return K`
      <div class="TDesign-doc-empty__design">
        <img class="light" src="https://tdesign.gtimg.com/site/webcomponents/empty-light.png" />
        <img class="dark" src="https://tdesign.gtimg.com/site/webcomponents/empty-dark.png" />
      </div>
    `}V1({tag:"td-doc-empty",type:"design",render:e=>{const{type:t}=e;return K`
      <div class="TDesign-doc-empty">
        ${tc(t)}
      </div>
    `.css`${ec}`}});var nc=`:host{font-size:14px;line-height:24px}.TDesign-doc-history{padding:7px 12px;border-radius:6px;display:inline-flex;align-items:center;justify-content:center;color:var(--text-primary);background-color:var(--bg-color-code);border:1px solid var(--component-border)}.TDesign-doc-history .icon{margin-right:8px;display:inline-flex}.TDesign-doc-history .icon svg{color:var(--text-placeholder)}.TDesign-doc-history .text{margin-right:4px;color:var(--text-secondary)}
`,ic=`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path
    d="M7.90582 2.79363C10.8499 2.79364 13.2095 5.14029 13.2095 8.00195C13.2095 10.8636 10.8499 13.2103 7.90581 13.2103C5.44426 13.2103 3.39128 11.5698 2.78447 9.35939L1.75098 9.52803C2.44243 12.2422 4.93584 14.252 7.90581 14.252C11.4103 14.252 14.2512 11.4537 14.2512 8.00196C14.2512 4.55018 11.4103 1.75195 7.90582 1.75195C5.80622 1.75195 3.9448 2.75638 2.78981 4.304L2.78981 2.6451H1.75098V5.7916C1.75098 6.06774 1.97483 6.2916 2.25098 6.2916L5.37759 6.2916V5.24707H3.40454C4.33896 3.77709 5.99992 2.79363 7.90582 2.79363Z"
    fill="currentColor" />
  <path d="M6.99951 5.50024V8.38917L9.64596 11.0356L10.3531 10.3285L7.99951 7.97496V5.50024H6.99951Z" fill="currentColor" />
</svg>`;function oc(e){let t=e;return/^\d+$/.test(e)&&(t=new Date(parseFloat(e)).toLocaleString("en-US")),t}V1({tag:"td-doc-history",time:"",content:"",render:({time:e,content:t})=>K`
      <div class="TDesign-doc-history">
        <i class="icon" innerHTML="${ic}"></i>
        ${t||K`
          <span class="text">Last Update: </span>
          ${oc(e)}
        `}
      </div>
    `.css`${nc}`});var rc=`code[class*=language-],pre[class*=language-]{text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;font-size:1em;line-height:1.5em;tab-size:4;hyphens:none}code[class*=language-]::selection,pre[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-] ::selection{background:#d6dbe3;color:#263238}:not(pre)>code[class*=language-]{white-space:normal;border-radius:.2em;padding:.1em}pre[class*=language-]{overflow:auto;position:relative}.language-css>code,.language-sass>code,.language-scss>code{color:#c24c08}[class*=language-] .namespace{opacity:.7}.token.atrule{color:#6d3bac}.token.attr-name{color:#007edf}.token.attr-value,.token.attribute{color:#d29c00}.token.boolean{color:#6d3bac}.token.builtin,.token.cdata,.token.char,.token.class{color:#007edf}.token.class-name{color:#003cbf}.token.comment{color:#97a3b7}.token.constant{color:#6d3bac}.token.deleted{color:#b01531}.token.doctype{color:#97a3b7}.token.entity{color:#b01531}.token.function{color:#6d3bac}.token.hexcode{color:#c24c08}.token.id,.token.important{color:#6d3bac;font-weight:700}.token.inserted{color:#007edf}.token.keyword{color:#6d3bac}.token.number{color:#c24c08}.token.operator{color:#007edf}.token.prolog{color:#97a3b7}.token.property{color:#007edf}.token.pseudo-class,.token.pseudo-element{color:#d29c00}.token.punctuation{color:#007edf}.token.regex{color:#003cbf}.token.selector{color:#b01531}.token.string{color:#d29c00}.token.symbol{color:#6d3bac}.token.tag{color:#b01531}.token.unit{color:#c24c08}.token.url,.token.variable{color:#b01531}:root[theme-mode=dark] code[class*=language-],:root[theme-mode=dark] pre[class*=language-]{text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;font-size:1em;line-height:1.5em;tab-size:4;hyphens:none}:root[theme-mode=dark] code[class*=language-]::selection,:root[theme-mode=dark] pre[class*=language-]::selection,:root[theme-mode=dark] code[class*=language-] ::selection,:root[theme-mode=dark] pre[class*=language-] ::selection{background:#d6dbe3;color:#263238}:root[theme-mode=dark] :not(pre)>code[class*=language-]{white-space:normal;border-radius:.2em;padding:.1em}:root[theme-mode=dark] pre[class*=language-]{overflow:auto;position:relative}:root[theme-mode=dark] .language-css>code,:root[theme-mode=dark] .language-sass>code,:root[theme-mode=dark] .language-scss>code{color:#f2995f}:root[theme-mode=dark] [class*=language-] .namespace{opacity:.7}:root[theme-mode=dark] .token.atrule{color:#ae78f0}:root[theme-mode=dark] .token.attr-name{color:#3280ff}:root[theme-mode=dark] .token.attr-value{color:#fbca25}:root[theme-mode=dark] .token.attribute{color:#fbca25}:root[theme-mode=dark] .token.boolean{color:#ae78f0}:root[theme-mode=dark] .token.builtin{color:#3280ff}:root[theme-mode=dark] .token.cdata{color:#3280ff}:root[theme-mode=dark] .token.char{color:#3280ff}:root[theme-mode=dark] .token.class{color:#3280ff}:root[theme-mode=dark] .token.class-name{color:#5cc5fc}:root[theme-mode=dark] .token.comment{color:#97a3b7}:root[theme-mode=dark] .token.constant{color:#ae78f0}:root[theme-mode=dark] .token.deleted{color:#48c79c}:root[theme-mode=dark] .token.doctype{color:#97a3b7}:root[theme-mode=dark] .token.entity{color:#48c79c}:root[theme-mode=dark] .token.function{color:#ae78f0}:root[theme-mode=dark] .token.hexcode{color:#f2995f}:root[theme-mode=dark] .token.id{color:#ae78f0;font-weight:700}:root[theme-mode=dark] .token.important{color:#f6c;font-weight:700}:root[theme-mode=dark] .token.inserted{color:#3280ff}:root[theme-mode=dark] .token.keyword{color:#f6c}:root[theme-mode=dark] .token.number{color:#f2995f}:root[theme-mode=dark] .token.operator{color:#3280ff}:root[theme-mode=dark] .token.prolog{color:#97a3b7}:root[theme-mode=dark] .token.property{color:#3280ff}:root[theme-mode=dark] .token.pseudo-class{color:#fbca25}:root[theme-mode=dark] .token.pseudo-element{color:#fbca25}:root[theme-mode=dark] .token.punctuation{color:#3280ff}:root[theme-mode=dark] .token.regex{color:#5cc5fc}:root[theme-mode=dark] .token.selector{color:#f36d78}:root[theme-mode=dark] .token.string{color:#fbca25}:root[theme-mode=dark] .token.symbol{color:#f6c}:root[theme-mode=dark] .token.tag{color:#48c79c}:root[theme-mode=dark] .token.unit{color:#f2995f}:root[theme-mode=dark] .token.url{color:#48c79c}:root[theme-mode=dark] .token.variable{color:#48c79c}:host{--context-max-height: 400px}:host td-select{--input-width: 120px}.TDesign-doc-usage{border-radius:6px;border:1px solid var(--component-border);overflow:auto}.TDesign-doc-usage__content{height:var(--context-max-height);background:var(--bg-color-demo);display:flex;justify-content:space-between}.TDesign-doc-usage__render{display:flex;flex:1;flex-direction:column;justify-content:space-between;max-width:calc(100% - 240px)}.TDesign-doc-usage__render-slot{overflow:auto;display:flex;flex-wrap:wrap;justify-content:center;align-items:center;padding:16px;gap:8px;height:100%}.TDesign-doc-usage__render-slot::-webkit-scrollbar-corner{width:0}.TDesign-doc-usage__render-slot::-webkit-scrollbar{width:12px;height:12px;background:transparent}.TDesign-doc-usage__render-slot::-webkit-scrollbar-thumb{border-radius:6px;border:4px solid transparent;background-clip:content-box;background-color:var(--bg-color-scroll)}.TDesign-doc-usage__render-header{min-height:48px;display:flex;box-sizing:border-box;box-shadow:var(--header-box-shadow);overflow:auto hidden;position:relative}.TDesign-doc-usage__render-header .header-panel{padding:8px;display:inline-flex;align-items:center;justify-content:center;cursor:pointer}.TDesign-doc-usage__render-header .header-panel:hover .panel-inner{background:var(--bg-color-container-hover)}.TDesign-doc-usage__render-header .header-panel .panel-inner{padding:8px;transition:all .2s linear;border-radius:3px}.TDesign-doc-usage__render-header .header-panel .panel-inner.active{color:var(--brand-main)}.TDesign-doc-usage__render-header .active-line{height:1px;position:absolute;left:0;bottom:0px;z-index:10;background:var(--brand-main);transition:all .2s var(--anim-time-fn-easing)}.TDesign-doc-usage__render-footer{height:48px;display:flex;padding:0 8px;flex-shrink:0;justify-content:flex-end;gap:8px;align-items:center;box-sizing:border-box}.TDesign-doc-usage__render-footer .action{height:32px;width:32px;padding:8px;box-sizing:border-box;border-radius:var(--border-radius);cursor:pointer;user-select:none;transition:all .1s;display:inline-flex;color:var(--text-secondary)}.TDesign-doc-usage__render-footer .action:hover{color:var(--text-primary);background-color:var(--bg-color-demo-hover)}.TDesign-doc-usage__render-footer .action.active{color:var(--text-primary);background-color:var(--bg-color-demo-select)}.TDesign-doc-usage__config{width:240px;box-sizing:border-box;flex-shrink:0;border-left:1px solid var(--component-stroke)}.TDesign-doc-usage__config-title{display:flex;height:48px;gap:4px;align-items:center;padding:12px 16px;box-sizing:border-box;border-bottom:1px solid var(--component-stroke)}.TDesign-doc-usage__config-title span{font-size:14px;line-height:24px;color:var(--text-primary)}.TDesign-doc-usage__config-title i{display:inline-flex}.TDesign-doc-usage__config-content{padding:16px;overflow:hidden auto;display:flex;flex-direction:column;gap:12px;max-height:352px;box-sizing:border-box}.TDesign-doc-usage__config-content::-webkit-scrollbar-corner{width:0}.TDesign-doc-usage__config-content::-webkit-scrollbar{width:12px;height:12px;background:transparent}.TDesign-doc-usage__config-content::-webkit-scrollbar-thumb{border-radius:6px;border:4px solid transparent;background-clip:content-box;background-color:var(--bg-color-scroll)}.TDesign-doc-usage__config-divider{width:100%;border-top:1px solid var(--component-stroke)}.TDesign-doc-usage__config-list{display:flex;flex-direction:column;gap:4px;list-style:none;margin:0;padding:0}.TDesign-doc-usage__config-list .item{display:inline-flex;align-items:center;height:32px;justify-content:space-between}.TDesign-doc-usage__config-list .item .name{width:90%;overflow:hidden;text-overflow:ellipsis;color:var(--text-secondary)}.TDesign-doc-usage__code{border-radius:0 0 6px 6px;overflow:hidden;max-height:240px}.TDesign-doc-usage__code pre{margin:0;padding:20px 24px;max-height:240px;box-sizing:border-box;overflow:auto;background:var(--bg-color-code);color:var(--text-primary)}.TDesign-doc-usage__code pre:hover::-webkit-scrollbar-thumb{background-color:var(--bg-color-scroll)}.TDesign-doc-usage__code pre::-webkit-scrollbar{width:12px;height:12px;background:transparent}.TDesign-doc-usage__code pre::-webkit-scrollbar-corner{width:0}.TDesign-doc-usage__code pre::-webkit-scrollbar-thumb{border-radius:6px;border:4px solid transparent;background-clip:content-box;background-color:transparent}
`,lc=`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1C6.6247 1 5.36829 1.5546 4.46644 2.46644C3.5546 3.36829 3 4.6247 3 6C3 7.37457 3.554 8.63036 4.46498 9.53211C4.77388 9.84935 5.12363 10.1126 5.5 10.3289V12C5.5 12.5523 5.94772 13 6.5 13H9.5C10.0523 13 10.5 12.5523 10.5 12V10.3289C10.8764 10.1126 11.2261 9.84935 11.535 9.5321C12.446 8.63036 13 7.37456 13 6C13 3.23386 10.7661 1 8 1Z" fill="#FFBD2E"/>
<path d="M6 14C5.72386 14 5.5 14.2239 5.5 14.5C5.5 14.7761 5.72386 15 6 15H10C10.2761 15 10.5 14.7761 10.5 14.5C10.5 14.2239 10.2761 14 10 14H6Z" fill="#FFBD2E"/>
</svg>
`;function sc(e){const{panelList:t,panel:n}=e,i=t.findIndex(s=>s.value===n);if(i===-1||!e.shadowRoot)return"";const o=e.shadowRoot.querySelectorAll(".header-panel"),{offsetLeft:r,offsetWidth:l}=o[i];return`width: ${l}px; left: ${r}px`}function sr(e,t,n){const{detail:i}=t;se(e,"ConfigChange",{detail:{value:i.value,name:n.name,type:n.type}})}function ac(e=[]){const t=[],n=[];return e.forEach(i=>{/boolean/i.test(i.type)&&t.push(i),/enum/i.test(i.type)&&n.push(i)}),K`
    ${t.length?K`
          <ul class="TDesign-doc-usage__config-list">
            ${t.map(i=>K`
                <li class="item">
                  <span class="name" title="${i.name}">${i.name}</span>
                  <td-switch
                    size="small"
                    value="${i.defaultValue}"
                    onchange="${(o,r)=>sr(o,r,i)}"
                  ></td-switch>
                </li>
              `)}
          </ul>
        `:""}
    ${n.length?K`
          ${t.length?K`<div class="TDesign-doc-usage__config-divider"></div>`:""}
          <ul class="TDesign-doc-usage__config-list">
            ${n.map(i=>K`
                <li class="item">
                  <span class="name" title="${i.name}">${i.name}</span>
                  <td-select
                    borderless
                    value="${i.defaultValue}"
                    options="${i.options}"
                    onchange="${(o,r)=>sr(o,r,i)}"
                  ></td-select>
                </li>
              `)}
          </ul>
        `:""}
  `}V1({tag:"td-doc-usage",code:"",showCode:!1,language:"markup",panel:{set:(e,t,n)=>(t&&n!==t&&se(e,"PanelChange",{detail:{value:t}}),t),get:(e,t)=>{var n;return t||((n=e.panelList[0])==null?void 0:n.value)},observe:e=>{if(!e.shadowRoot)return;const t=e.shadowRoot.querySelector(".active-line");t.style=sc(e)}},panelList:{get:(e,t)=>t||[],set:(e,t)=>t},configList:{get:(e,t)=>t||[],set:(e,t)=>t},render:e=>{const{code:t,language:n,showCode:i,configList:o,panelList:r,panel:l}=e,s=bt.highlight(t,bt.languages[n],n),a={transitionDuration:".2s",maxHeight:i?"240px":0,transitionTimingFunction:i?"cubic-bezier(.82, 0, 1, .9)":"ease"};return K`
      <div class="TDesign-doc-usage">
        <div class="TDesign-doc-usage__content">
          <div class="TDesign-doc-usage__render">
            <div class="TDesign-doc-usage__render-header">
              ${r.map(d=>K`
                <div class="header-panel" onclick="${K.set("panel",d.value)}">
                  <span class="panel-inner ${l===d.value?"active":""}">${d.label}</span>
                </div>
              `)}

              <span class="active-line"></span>
            </div>

            <slot name="${l}" class="TDesign-doc-usage__render-slot"></slot>

            <div class="TDesign-doc-usage__render-footer">
              <slot name="action"></slot>
              <td-doc-copy code=${t}></td-doc-copy>
              <span
                class="action code ${i?"active":""}"
                onclick=${K.set("showCode",!i)}
                innerHTML=${Hl}
              ></span>
            </div>
          </div>

          <div class="TDesign-doc-usage__config">
            <div class="TDesign-doc-usage__config-title">
              <i innerHTML="${lc}"></i>
              <span>配置</span>
            </div>

            <div class="TDesign-doc-usage__config-content">
              ${ac(o)}
            </div>

          </div>
        </div>
        <div class="TDesign-doc-usage__code" style="${a}">
          <pre
            class="language-${n}"
          ><code class="language-${n}" innerHTML="${s}"></code></pre>
        </div>
      </div>
    `.css`${rc}`}});var cc=`:host{display:inline;line-height:calc(100% + 8px);font-size:12px;margin:0 2px;padding:2px 6px;border-radius:3px;color:var(--error-8);background:var(--error-1)}.TDesign-code{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace}
`;V1({tag:"td-code",text:"",render:({text:e})=>K`
    <code class="TDesign-code">${e}</code>
  `.css`${cc}`});var dc=`code[class*=language-],pre[class*=language-]{text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;font-size:1em;line-height:1.5em;tab-size:4;hyphens:none}code[class*=language-]::selection,pre[class*=language-]::selection,code[class*=language-] ::selection,pre[class*=language-] ::selection{background:#d6dbe3;color:#263238}:not(pre)>code[class*=language-]{white-space:normal;border-radius:.2em;padding:.1em}pre[class*=language-]{overflow:auto;position:relative}.language-css>code,.language-sass>code,.language-scss>code{color:#c24c08}[class*=language-] .namespace{opacity:.7}.token.atrule{color:#6d3bac}.token.attr-name{color:#007edf}.token.attr-value,.token.attribute{color:#d29c00}.token.boolean{color:#6d3bac}.token.builtin,.token.cdata,.token.char,.token.class{color:#007edf}.token.class-name{color:#003cbf}.token.comment{color:#97a3b7}.token.constant{color:#6d3bac}.token.deleted{color:#b01531}.token.doctype{color:#97a3b7}.token.entity{color:#b01531}.token.function{color:#6d3bac}.token.hexcode{color:#c24c08}.token.id,.token.important{color:#6d3bac;font-weight:700}.token.inserted{color:#007edf}.token.keyword{color:#6d3bac}.token.number{color:#c24c08}.token.operator{color:#007edf}.token.prolog{color:#97a3b7}.token.property{color:#007edf}.token.pseudo-class,.token.pseudo-element{color:#d29c00}.token.punctuation{color:#007edf}.token.regex{color:#003cbf}.token.selector{color:#b01531}.token.string{color:#d29c00}.token.symbol{color:#6d3bac}.token.tag{color:#b01531}.token.unit{color:#c24c08}.token.url,.token.variable{color:#b01531}:root[theme-mode=dark] code[class*=language-],:root[theme-mode=dark] pre[class*=language-]{text-align:left;white-space:pre;word-spacing:normal;word-break:normal;word-wrap:normal;font-family:ui-monospace,SFMono-Regular,SF Mono,Menlo,Consolas,Liberation Mono,monospace;font-size:1em;line-height:1.5em;tab-size:4;hyphens:none}:root[theme-mode=dark] code[class*=language-]::selection,:root[theme-mode=dark] pre[class*=language-]::selection,:root[theme-mode=dark] code[class*=language-] ::selection,:root[theme-mode=dark] pre[class*=language-] ::selection{background:#d6dbe3;color:#263238}:root[theme-mode=dark] :not(pre)>code[class*=language-]{white-space:normal;border-radius:.2em;padding:.1em}:root[theme-mode=dark] pre[class*=language-]{overflow:auto;position:relative}:root[theme-mode=dark] .language-css>code,:root[theme-mode=dark] .language-sass>code,:root[theme-mode=dark] .language-scss>code{color:#f2995f}:root[theme-mode=dark] [class*=language-] .namespace{opacity:.7}:root[theme-mode=dark] .token.atrule{color:#ae78f0}:root[theme-mode=dark] .token.attr-name{color:#3280ff}:root[theme-mode=dark] .token.attr-value{color:#fbca25}:root[theme-mode=dark] .token.attribute{color:#fbca25}:root[theme-mode=dark] .token.boolean{color:#ae78f0}:root[theme-mode=dark] .token.builtin{color:#3280ff}:root[theme-mode=dark] .token.cdata{color:#3280ff}:root[theme-mode=dark] .token.char{color:#3280ff}:root[theme-mode=dark] .token.class{color:#3280ff}:root[theme-mode=dark] .token.class-name{color:#5cc5fc}:root[theme-mode=dark] .token.comment{color:#97a3b7}:root[theme-mode=dark] .token.constant{color:#ae78f0}:root[theme-mode=dark] .token.deleted{color:#48c79c}:root[theme-mode=dark] .token.doctype{color:#97a3b7}:root[theme-mode=dark] .token.entity{color:#48c79c}:root[theme-mode=dark] .token.function{color:#ae78f0}:root[theme-mode=dark] .token.hexcode{color:#f2995f}:root[theme-mode=dark] .token.id{color:#ae78f0;font-weight:700}:root[theme-mode=dark] .token.important{color:#f6c;font-weight:700}:root[theme-mode=dark] .token.inserted{color:#3280ff}:root[theme-mode=dark] .token.keyword{color:#f6c}:root[theme-mode=dark] .token.number{color:#f2995f}:root[theme-mode=dark] .token.operator{color:#3280ff}:root[theme-mode=dark] .token.prolog{color:#97a3b7}:root[theme-mode=dark] .token.property{color:#3280ff}:root[theme-mode=dark] .token.pseudo-class{color:#fbca25}:root[theme-mode=dark] .token.pseudo-element{color:#fbca25}:root[theme-mode=dark] .token.punctuation{color:#3280ff}:root[theme-mode=dark] .token.regex{color:#5cc5fc}:root[theme-mode=dark] .token.selector{color:#f36d78}:root[theme-mode=dark] .token.string{color:#fbca25}:root[theme-mode=dark] .token.symbol{color:#f6c}:root[theme-mode=dark] .token.tag{color:#48c79c}:root[theme-mode=dark] .token.unit{color:#f2995f}:root[theme-mode=dark] .token.url{color:#48c79c}:root[theme-mode=dark] .token.variable{color:#48c79c}:host{display:block}.TDesign-code-block{font-family:SFMono-Regular,Consolas,Liberation Mono,Menlo,monospace;border-radius:6px;border:1px solid var(--component-border);position:relative}.TDesign-code-block td-doc-copy{position:absolute;right:8px;top:8px;z-index:10}.TDesign-code-block__header{min-height:48px;display:flex;box-sizing:border-box;box-shadow:var(--header-box-shadow);overflow:auto hidden;position:relative}.TDesign-code-block__header .header-panel{padding:8px;display:inline-flex;align-items:center;justify-content:center;cursor:pointer}.TDesign-code-block__header .header-panel:hover .panel-inner{background:var(--bg-color-container-hover)}.TDesign-code-block__header .header-panel .panel-inner{padding:8px;transition:all .2s linear;border-radius:3px}.TDesign-code-block__header .header-panel .panel-inner.active{color:var(--brand-main)}.TDesign-code-block__header .active-line{height:1px;position:absolute;left:0;bottom:0px;z-index:10;background:var(--brand-main);transition:all .2s var(--anim-time-fn-easing)}.TDesign-code-block__body{max-height:334px;box-sizing:border-box;background-color:var(--bg-color-code)}.TDesign-code-block__body pre{margin:0;padding:24px;max-height:334px;box-sizing:border-box;overflow:auto;background:var(--bg-color-code);color:var(--text-primary)}.TDesign-code-block__body pre:hover::-webkit-scrollbar-thumb{background-color:var(--bg-color-scroll)}.TDesign-code-block__body pre::-webkit-scrollbar{width:12px;height:12px;background:transparent}.TDesign-code-block__body pre::-webkit-scrollbar-corner{width:0}.TDesign-code-block__body pre::-webkit-scrollbar-thumb{border-radius:6px;border:4px solid transparent;background-clip:content-box;background-color:transparent}
`;function pc(e){const{slotsName:t,panel:n}=e,i=(t==null?void 0:t.findIndex(s=>s===n))||0;if(i===-1||!e.shadowRoot)return"";const o=e.shadowRoot.querySelectorAll(".header-panel"),{offsetLeft:r,offsetWidth:l}=o[i];return`width: ${l}px; left: ${r}px`}function uc(e){const t=Array.from(e.querySelectorAll("td-code-block > [slot]")),n=[],i={};return t.forEach(o=>{n.push(o.slot),i[o.slot]={name:o.slot,lang:o.lang,content:decodeURIComponent(o.innerHTML)}}),e.slotsName=n,{slotsEl:t,slotsName:n,slotsContentMap:i}}V1({tag:"td-code-block",panel:{get:(e,t)=>t||"",set:(e,t)=>t,observe:e=>{if(!e.shadowRoot)return;const t=e.shadowRoot.querySelector(".active-line");t.style=pc(e)}},render:e=>{const{panel:t}=e,{slotsName:n,slotsContentMap:i}=uc(e),o=i[t],r=bt.highlight(o.content,bt.languages[o.lang],o.lang);return K`
      <div class="TDesign-code-block">
        <td-doc-copy code="${o.content}"></td-doc-copy>
        <div class="TDesign-code-block__header">
          ${n.map(l=>K`
            <div class="header-panel" onclick="${K.set("panel",l)}">
              <span class="panel-inner ${t===l?"active":""}">${l}</span>
            </div>
          `)}

          <span class="active-line"></span>
        </div>

        <div class="TDesign-code-block__body">
          <pre class="language-${o.lang}" innerHTML="${r}"></pre>
        </div>
      </div>
    `.css`${dc}`}});function ar(e,t,n){if(document.getElementById(e))return;const i=document.createElement("script");i.async=!0,i.id=e,i.type="text/javascript",Object.keys(t).forEach(o=>{i.setAttribute(o,t[o])}),i.onload=()=>{n&&n()},document.head.appendChild(i)}V1({tag:"td-stats",dataAccount:"tdesign",track:{get(){return()=>{window._horizon&&window._horizon.track()}}},stats:{get:(e,t)=>t||void 0,set:(e,t)=>t,connect:e=>{function t(){ar("horizon-tracker",{"data-account":e.dataAccount,src:"https://horizon-assets.qq.com/analytics.js"}),ar("__td_tcss__",{src:"https://pingjs.qq.com/tcss.ping.https.js"},()=>{window.pgvMain&&window.pgvMain()})}function n(){requestAnimationFrame(()=>{window._horizon&&window._horizon.track()})}return window.addEventListener("load",t),window.addEventListener("popstate",n),()=>{window.removeEventListener("load",t),window.removeEventListener("popstate",n)}}},render:()=>K`<style>
      :host {
        display: none;
      }
    </style>`});var fc='<svg xmlns="http://www.w3.org/2000/svg" fill="none" view-box="0 0 16 16" width="1em" height="1em" class="t-icon t-icon-info-circle-filled"><path fill="currentColor" d="M8 15A7 7 0 108 1a7 7 0 000 14zM7.4 4h1.2v1.2H7.4V4zm.1 2.5h1V12h-1V6.5z" fill-opacity="0.9"></path></svg>',gc='<svg xmlns="http://www.w3.org/2000/svg" fill="none" view-box="0 0 16 16" width="1em" height="1em" class="t-icon t-icon-error-circle-filled"><path fill="currentColor" d="M15 8A7 7 0 101 8a7 7 0 0014 0zM8.5 4v5.5h-1V4h1zm-1.1 7h1.2v1.2H7.4V11z" fill-opacity="0.9"></path></svg>',hc='<svg xmlns="http://www.w3.org/2000/svg" fill="none" view-box="0 0 16 16" width="1em" height="1em" class="t-icon t-icon-check-circle-filled"><path fill="currentColor" d="M8 15A7 7 0 108 1a7 7 0 000 14zM4.5 8.2l.7-.7L7 9.3l3.8-3.8.7.7L7 10.7 4.5 8.2z" fill-opacity="0.9"></path></svg>',vc='<svg xmlns="http://www.w3.org/2000/svg" fill="none" view-box="0 0 16 16" width="1em" height="1em" class="t-icon t-icon-help-circle-filled"><path fill="currentColor" d="M15 8A7 7 0 101 8a7 7 0 0014 0zM5.8 6.63a2.2 2.2 0 014.39 0c0 .97-.75 1.72-1.49 2.02a.34.34 0 00-.2.32v.8h-1v-.8c0-.56.33-1.04.82-1.24.5-.2.87-.66.87-1.1a1.2 1.2 0 00-2.39 0h-1zm1.67 4.54a.53.53 0 111.05 0 .53.53 0 01-1.05 0z" fill-opacity="0.9"></path></svg>',mc=`.TDesign-message .t-message{width:fit-content;font-size:14px;outline:0;border-radius:3px;background-color:var(--bg-color-container);box-shadow:var(--shadow-3),var(--shadow-inset-top),var(--shadow-inset-right),var(--shadow-inset-bottom),var(--shadow-inset-left);box-sizing:border-box;align-items:center;color:var(--text-primary);line-height:22px;padding:13px 16px;position:fixed;top:0;left:50%;display:flex;transform:translate(-50%);transition:top .2s}.TDesign-message .t-message.t-message-enter{top:32px}.TDesign-message .t-message.t-message-leave{top:-100px}.TDesign-message .t-message>.t-icon{color:var(--brand-main);margin-right:8px;font-size:16px}.TDesign-message .t-message.t-is-success>.t-icon{color:var(--success-main)}.TDesign-message .t-message.t-is-warning>.t-icon{color:var(--warning-main)}.TDesign-message .t-message.t-is-error>.t-icon{color:var(--error-main)}
`;function Cc(e){if(e==="info")return fc;if(e==="success")return hc;if(["warning","error"].includes(e))return gc;if(e==="question")return vc}V1({tag:"td-message",theme:"info",duration:3e3,zIndex:5e3,content:"",showMessage:!1,show:e=>({content:t,theme:n,duration:i})=>{Object.assign(e,{showMessage:!0,content:t,theme:n||e.theme}),setTimeout(()=>{Object.assign(e,{showMessage:!1})},i||e.duration)},render:e=>{const{theme:t,zIndex:n,content:i,showMessage:o}=e,l=`${Cc(t)}${i}`,s={zIndex:n},a=["t-message",`t-is-${t}`].concat(o?"t-message-enter":"t-message-leave");return K`
      <div class="TDesign-message">
        <div
          style=${s}
          class="${a}"
          innerHTML=${l}
        ></div>
      </div>
    `.css`${mc}`}});window.showTdMessage=function({content:e,duration:t,theme:n}){const i="__tdesign_message__";if(!document.getElementById(i)){const o=document.createElement("td-message");o.setAttribute("id",i),document.body.appendChild(o)}setTimeout(()=>{document.getElementById(i).show({content:e,duration:t,theme:n})})};var wc=`:host{--portal-border-radius: 9px;--portal-filter: blur(6px);--portal-background: var(--bg-color-container-transparent);position:absolute;z-index:3000;opacity:0;visibility:hidden;transition:clip-path .25s var(--anim-time-fn-easing),opacity .25s linear,visibility .25s linear;clip-path:polygon(-10% -10%,110% -10%,110% -10%,-10% -10%)}:host([visible]){opacity:1;visibility:visible;clip-path:polygon(-10% -10%,110% 0%,110% 110%,-10% 110%)}.TDesign-portal{padding:var(--portal-padding, 2px);box-shadow:var(--portal-box-shadow);border-radius:var(--portal-border-radius);background-color:var(--portal-background);backdrop-filter:var(--portal-filter);-webkit-backdrop-filter:var(--portal-filter);box-sizing:border-box;display:block}
`;V1({tag:"td-portal",visible:!1,portalStyle:"",render:e=>K`
      ${e.portalStyle?K`<style>${e.portalStyle}</style>`:""}
      <slot class="TDesign-portal" name="content"></slot>
    `.css`${wc}`});var yc=`:host{--input-width: 210px}.TDesign-select-input{width:var(--input-width, 100%);display:inline-flex;align-items:center;gap:8px;border:1px solid var(--component-border);border-radius:3px;padding:0 8px;transition:all .2s linear;box-sizing:border-box;height:32px;line-height:32px}.TDesign-select-input:hover{border-color:var(--brand-main)}.TDesign-select-input.focus{border-color:var(--brand-main);box-shadow:0 0 0 2px var(--brand-main-focus)}.TDesign-select-input--borderless{border-color:transparent}.TDesign-select-input--borderless:hover{border-color:var(--component-border)}.TDesign-select-input--borderless.focus{border-color:var(--brand-main);box-shadow:0 0 0 2px var(--brand-main-focus)}.TDesign-select-input__inner{flex:1;border:none;outline:none;padding:0;max-width:100%;min-width:0;color:var(--text-primary);height:100%;background-color:transparent}.TDesign-select-input__inner:read-only{cursor:pointer}.TDesign-select-input .suffix-icon{display:inline-flex}.TDesign-select-input .suffix-icon svg path{transition:d .2s;stroke:currentColor}.TDesign-select-input .suffix-icon.up svg path{d:path("M3.75 10.2002L7.99274 5.7998L12.2361 10.0425")}
`,xc=`.td-select-portal{--portal-padding: 0;--portal-filter: none;--portal-border-radius: 3px;--portal-box-shadow: none;--portal-background: var(--bg-color-container)}.TDesign-select-dropdown{width:var(--input-width, 100%);max-height:300px;box-shadow:var(--shadow-1);border-radius:3px;box-sizing:border-box;padding:6px;overflow:auto}.TDesign-select-dropdown::-webkit-scrollbar{width:12px;background:transparent}.TDesign-select-dropdown::-webkit-scrollbar-thumb{border-radius:6px;border:4px solid transparent;background-clip:content-box;background-color:var(--bg-color-scroll)}.TDesign-select-list{margin:0;padding:0;list-style:none;display:flex;flex-direction:column;gap:4px}.TDesign-select-list__item{list-style:none;cursor:pointer;margin:0;padding:4px 8px;height:28px;line-height:20px;box-sizing:border-box;border-radius:3px;transition:all .2s var(--anim-time-fn-easing)}.TDesign-select-list__item:hover{background:var(--bg-color-container-hover)}.TDesign-select-list__item.is-active{color:var(--brand-main);background-color:var(--brand-main-light)}
`;function Lc(e){const{options:t=[]}=e;function n(i,o){i.value=o.value,requestAnimationFrame(()=>{i.visible=!1}),se(i,"change",{detail:{value:i.value}})}return K`
    <ul class="TDesign-select-list">
      ${t.map(i=>{const o=i.value==e.value;return K`
          <li
            onclick="${r=>n(r,i)}"
            class="TDesign-select-list__item ${o?"is-active":""}"
          >
            ${i.label}
          </li>
        `})}
    </ul>
  `}V1({tag:"td-select",borderless:!1,value:"",visible:!1,options:{get:(e,t)=>t||[],set:(e,t)=>t},render:e=>{const{options:t,value:n,visible:i,borderless:o}=e,l=(t.find(a=>a.value==n)||{}).label||"";return K`
      <td-doc-popup
        visible="${i}"
        placement="bottom-start"
        trigger-type="click"
        portal-class="td-select-portal"
        portalStyle="${xc}"
        onvisible-change="${(a,d)=>a.visible=d.detail.visible}"
      >
        <div class="${{focus:i,"TDesign-select-input":!0,"TDesign-select-input--borderless":o}}">
          <input
            class="TDesign-select-input__inner"
            readonly
            value="${l}"
          />
          <i
            class="suffix-icon ${i?"up":""}"
            innerHTML="${q5}"
          ></i>
        </div>
        <div slot="content" class="TDesign-select-dropdown">${Lc(e)}</div>
      </td-doc-popup>
    `.css`${yc}`}});var bc=`.TDesign-switch{position:relative;display:inline-flex;vertical-align:middle;align-items:center;outline:none;border:0;padding:0;height:20px;border-radius:10px;min-width:36px;transition:all .2s var(--anim-time-fn-ease-out);background-color:var(--bg-color-thead);cursor:pointer;user-select:none}.TDesign-switch.size-small{min-width:28px;height:16px;line-height:16px;border-radius:8px}.TDesign-switch.size-small .TDesign-switch__handle{width:12px;height:12px}.TDesign-switch.size-large{min-width:44px;height:24px;line-height:24px;border-radius:12px}.TDesign-switch.size-large .TDesign-switch__handle{width:20px;height:20px}.TDesign-switch.is-checked{background-color:var(--brand-main)}.TDesign-switch.is-checked .TDesign-switch__handle{left:calc(100% - 2px);transform:translate(-100%)}.TDesign-switch__handle{position:absolute;display:flex;align-items:center;justify-content:center;top:2px;left:2px;width:16px;height:16px;border-radius:12px;transition:all .2s var(--anim-time-fn-easing)}.TDesign-switch__handle:before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;border-radius:12px;background-color:var(--text-anti);transition:all .2s var(--anim-time-fn-easing)}.TDesign-switch:active:not(.is-disabled) .TDesign-switch__handle:before{left:0;right:-6px}.TDesign-switch:active:not(.is-disabled).is-checked .TDesign-switch__handle:before{right:0;left:-6px}.TDesign-switch:active:not(.is-disabled) .TDesign-switch__content{opacity:0}
`;function Mc(e){e.value=!e.value,se(e,"change",{detail:{value:e.value}})}V1({tag:"td-switch",value:!1,size:"medium",render:e=>{const{value:t,size:n}=e,i={"TDesign-switch":!0,"is-checked":t,[`size-${n}`]:n};return K`
      <button
        type="button"
        class="${i}"
        onclick="${Mc}"
      >
        <span class="TDesign-switch__handle"></span>
      </button>
    `.css`${bc}`}});function _c(e){return e=Object.create(e),"requestAnimationFrame"in e||Object.defineProperty(e,"requestAnimationFrame",{value:function(n){return setTimeout(n,0)}}),"HTMLElement"in e||Object.defineProperty(e,"HTMLElement",{value:class{constructor(){throw Error("Current context does not support defining custom elements")}}}),e}var b1=typeof window=="object"?window:_c(globalThis);const ii=new WeakMap,Pe=new Set;function Vl(){try{Pe.forEach(e=>{try{ii.get(e)(),Pe.delete(e)}catch(t){throw Pe.delete(e),t}})}catch(e){throw Pe.size&&Vl(),e}}function Tl(e){ii.has(e)&&(Pe.size||b1.requestAnimationFrame(Vl),Pe.add(e))}function Hc(e,t){return ii.set(e,t),Tl(e),function(){Pe.delete(e),ii.delete(e)}}const Do=new WeakMap,Ze=new WeakSet;function Hi(e,t){let n=Do.get(e);n||(n=new Map,Do.set(e,n));let i=n.get(t);return i||(i={target:e,key:t,value:void 0,lastValue:void 0,contexts:new Set,deps:new Set,state:0,depState:0,resolved:!1},n.set(t,i)),i}function L2(e){e.contexts.forEach(t=>{Ze.has(t.target)&&(Object.assign(t,{depState:0,resolved:!1}),e.contexts.delete(t),L2(t))})}function b2(e){e.resolved=!1,Ze.has(e.target)||Tl(e),L2(e),e.contexts.forEach(b2)}let K1=null;const Ot=new Set;function kl(e,t,n){const i=Hi(e,t);if(K1&&!Ze.has(K1.target)&&(K1.deps.add(i),i.contexts.add(K1)),!Ze.has(e)){if(L2(i),i.resolved)return i.value;if(i.depState>i.state){let r=i.state;for(const l of i.deps){if(l.target[l.key],!l.resolved){r=!1;break}r+=l.state}if(r&&r===i.depState)return i.resolved=!0,i.value}}const o=K1;try{if(Ot.has(i))throw Error(`Circular get invocation is forbidden: '${t}'`);i.deps.forEach(s=>{s.contexts.delete(i)}),i.deps.clear(),K1=i,Ot.add(i);const r=n(e,i.value);K1=o,r!==i.value&&(i.value=r,i.state+=1);let l=i.state;i.deps.forEach(s=>{l+=s.state}),i.depState=l,i.resolved=!Ze.has(e),Ot.delete(i)}catch(r){throw K1=o,Ot.delete(i),i.resolved=!1,K1&&!Ze.has(K1)&&(K1.deps.delete(i),i.contexts.delete(K1)),r}return i.value}function Vc(e,t,n,i){const o=Hi(e,t),r=n(e,i,o.value);r!==o.value&&(o.value=r,o.state+=1,o.depState=0,b2(o))}const Dn=new Set;function Tc(e){Dn.size||b1.requestAnimationFrame(()=>{Dn.forEach(t=>{t.contexts.size===0&&(t.deps.forEach(i=>{i.contexts.delete(t)}),Do.get(t.target).delete(t.key))}),Dn.clear()}),Dn.add(e)}function kc(e,t){e.depState=0,b2(e),t.clearValue&&(e.value=void 0,e.lastValue=void 0),t.deleteEntry&&Tc(e),t.force&&(e.state+=1)}function Zl(e,t,n={}){if(Ot.size)throw Error(`Invalidating property in chain of get calls is forbidden: '${t}'`);const i=Hi(e,t);kc(i,n)}function Zc(e,t,n,i){const o=Hi(e,t);return Hc(o,()=>{const r=kl(e,t,n);r!==o.lastValue&&(i(e,r,o.lastValue),o.lastValue=r)})}function cr(e){Ze.add(e)}function Dc(e){Ze.delete(e)}const dr=new Map;function M2(e){let t=dr.get(e);return t===void 0&&(t=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),dr.set(e,t)),t}function Dl(e,t){const n=b1.ShadyCSS;return n&&!n.nativeShadow?e(n):t}function El(e){return`<${String(e.tagName).toLowerCase()}>`}function oi(e,t){e.nodeType===b1.Node.ELEMENT_NODE&&(t(e),e.shadowRoot&&oi(e.shadowRoot,t));const n=b1.document.createTreeWalker(e,b1.NodeFilter.SHOW_ELEMENT,null,!1);for(;n.nextNode();){const i=n.currentNode;t(i),i.shadowRoot&&oi(i.shadowRoot,t)}}const Ec=Promise.resolve(),Nc=new WeakMap,pr=oi.name==="walkInShadow",Eo=new WeakMap,ur=new WeakMap,Nl=new WeakMap;class Ac extends b1.HTMLElement{constructor(){super();const t=Eo.get(this.constructor);for(let n=0;n<t.length;n+=1){const i=t[n];if(hasOwnProperty.call(this,i)){const o=this[i];delete this[i],this[i]=o}}cr(this)}connectedCallback(){Dc(this);const t=Nl.get(this.constructor),n=[];for(let i=0;i<t.length;i+=1){const o=t[i](this);o&&n.push(o)}ur.set(this,n)}disconnectedCallback(){cr(this);const t=ur.get(this);for(let n=0;n<t.length;n+=1)t[n]()}}function fr(e,t){return{get:t?n=>{const i=e(n),o=n.shadowRoot||n.attachShadow({mode:"open",delegatesFocus:e.delegatesFocus||!1});return()=>(i(n,o),o)}:n=>{const i=e(n);return()=>(i(n,n),n)},observe(n,i){i()}}}const Sc={string:String,number:Number,boolean:Boolean,undefined:e=>e};function Ic(e,t){const n=typeof t.value,i=Sc[n];if(!i)throw TypeError(`Invalid default value for '${e}' property - it must be a string, number, boolean or undefined: ${n}`);const o=t.value,r=M2(e),l=(s,a)=>(!a&&a!==0||typeof a=="object"&&a.toString()===void 0?s.removeAttribute(r):s.setAttribute(r,n==="boolean"?"":a),a);return{get:(s,a)=>{if(a===void 0)if(s.hasAttribute(r))a=i(n==="boolean"||s.getAttribute(r));else return o;return a},set:n!=="undefined"?(s,a)=>l(s,i(a)):(s,a)=>a,connect:n!=="undefined"?(s,a,d)=>(!s.hasAttribute(r)&&s[e]===o&&l(s,o),t.connect&&t.connect(s,a,d)):t.connect,observe:t.observe}}function No(e,t){if(t){if(e===t.hybrids)return t;Eo.get(t).forEach(o=>{delete t.prototype[o]})}else t=class extends Ac{};t.hybrids=e;const n=[],i=Object.keys(e);return Nl.set(t,n),Eo.set(t,i),i.forEach(o=>{if(o==="tag")return;let r=e[o];const l=typeof r;if(l==="function")o==="render"?r=fr(r,!0):o==="content"?r=fr(r):r={get:r};else if(l!=="object"||r===null)r={value:r};else if(r.set){const s=M2(o),a=r.get||((d,c)=>c);r.get=(d,c)=>(c===void 0&&(c=r.set(d,d.getAttribute(s)||c)),a(d,c))}if(hasOwnProperty.call(r,"value"))r=Ic(o,r);else if(!r.get)throw TypeError(`Invalid descriptor for '${o}' property - it must contain 'value' or 'get' option`);Object.defineProperty(t.prototype,o,{get:function(){return kl(this,o,r.get)},set:r.set&&function(a){Vc(this,o,r.set,a)},enumerable:!0,configurable:!0}),r.observe&&n.unshift(s=>Zc(s,o,r.get,r.observe)),r.connect&&n.push(s=>{function a(d){Zl(s,o,{force:typeof d=="object"&&d.force===!0})}return r.connect(s,o,a)})}),t}const At=new Map;function jc(e){At.size||Ec.then(()=>{oi(b1.document.body,t=>{if(At.has(t.constructor)){const n=At.get(t.constructor),i=t.constructor.hybrids;t.disconnectedCallback(),Object.keys(i).forEach(o=>{const r=typeof i[o],l=r!=="object"&&r!=="function"&&i[o]!==n[o];Zl(t,o,{clearValue:l})}),t.connectedCallback()}}),At.clear()}),At.set(e,e.hybrids)}function Oc(e){if(!e.tag)throw TypeError("Error while defining hybrids: 'tag' property with dashed tag name is required");const t=b1.customElements.get(e.tag);if(t){if(t.hybrids)return jc(t),No(e,t),Object.freeze(e);throw TypeError(`Custom element with '${e.tag}' tag name already defined outside of the hybrids context`)}return b1.customElements.define(e.tag,No(e)),Object.freeze(e)}var zc=Object.freeze(Object.assign(Oc,{compile:e=>No(e)}));const Ki=new WeakMap,ge={get(e,t){const n=Ki.get(e);return n||(t&&Ki.set(e,t),t)},set(e,t){return Ki.set(e,t),t}};function _2(e){let t;for(;e&&(t=ge.get(e))&&t.endNode;)e=t.endNode;return e}function ri(e){if(e.nodeType!==b1.Node.TEXT_NODE){let t=e.childNodes[0];for(;t;)e.removeChild(t),t=e.childNodes[0]}else{const t=ge.get(e);if(t.startNode){const n=_2(t.endNode);let i=t.startNode;const o=n.nextSibling;for(;i;){const r=i.nextSibling;i.parentNode.removeChild(i),i=r!==o&&r}}}}const Ao=new WeakMap;function Bc(e,t){const n=ge.get(e),i=n.startNode,o=_2(n.endNode);t.parentNode.insertBefore(e,t.nextSibling);let r=e,l=i;for(;l;){const s=l.nextSibling;r.parentNode.insertBefore(l,r.nextSibling),r=l,l=s!==o.nextSibling&&s}}function Fc(e,t,n,i){let o=Ao.get(t);const r=n.map((d,c)=>({id:hasOwnProperty.call(d,"id")?d.id:c,value:d,placeholder:null,available:!0}));if(Ao.set(t,r),o){const d=new Set;r.forEach(c=>d.add(c.id)),o=o.filter(c=>d.has(c.id)?!0:(ri(c.placeholder),c.placeholder.parentNode.removeChild(c.placeholder),!1))}let l=t;const s=n.length-1,a=ge.get(t);for(let d=0;d<r.length;d+=1){const c=r[d];let u;if(o){for(let h=0;h<o.length;h+=1)if(o[h].available&&o[h].id===c.id){u=o[h];break}}u?(u.available=!1,c.placeholder=u.placeholder,c.placeholder.previousSibling!==l&&Bc(c.placeholder,l),u.value!==c.value&&i(e,c.placeholder,c.value,u.value)):(c.placeholder=b1.document.createTextNode(""),l.parentNode.insertBefore(c.placeholder,l.nextSibling),i(e,c.placeholder,c.value)),l=_2(ge.get(c.placeholder).endNode||c.placeholder),d===0&&(a.startNode=c.placeholder),d===s&&(a.endNode=l)}o&&o.forEach(d=>{d.available&&(ri(d.placeholder),d.placeholder.parentNode.removeChild(d.placeholder))})}function $c(e,t,n,i){const o=ge.get(t,{});i&&i.parentNode.removeChild(i),o.startNode=n,o.endNode=n,t.parentNode.insertBefore(n,t.nextSibling)}function H2(e,t,n,i){let o=typeof n;Array.isArray(n)?o="array":n instanceof b1.Node&&(o="node");let r=ge.get(t,{});switch(r.type!==o&&(ri(t),o==="array"&&Ao.delete(t),r=ge.set(t,{type:o}),t.textContent!==""&&(t.textContent="")),o){case"function":n(e,t);break;case"array":Fc(e,t,n,H2);break;case"node":$c(e,t,n,i);break;default:t.textContent=o==="number"||n?n:""}}const Yi=new WeakMap;function Rc(e){return(t,n,i,o)=>{if(o){const r=Yi.get(n);r&&n.removeEventListener(e,r.get(o),o.options!==void 0?o.options:!1)}if(i){if(typeof i!="function")throw Error(`Event listener must be a function: ${typeof i}`);let r=Yi.get(n);r||(r=new WeakMap,Yi.set(n,r));const l=i.bind(null,t);r.set(i,l),n.addEventListener(e,l,i.options!==void 0?i.options:!1)}}}function Pc(e,t=new Set){return Array.isArray(e)?e.forEach(n=>t.add(n)):e!==null&&typeof e=="object"?Object.keys(e).forEach(n=>e[n]&&t.add(n)):t.add(e),t}const gr=new WeakMap;function Uc(e,t,n){const i=gr.get(t)||new Set,o=Pc(n);gr.set(t,o),o.forEach(r=>{t.classList.add(r),i.delete(r)}),i.forEach(r=>{t.classList.remove(r)})}const hr=new WeakMap;function Qc(e,t,n){if(n===null||typeof n!="object")throw TypeError(`Style value must be an object in ${El(t)}:`,n);const i=hr.get(t)||new Map,o=Object.keys(n).reduce((r,l)=>{const s=M2(l),a=n[l];return!a&&a!==0?t.style.removeProperty(s):t.style.setProperty(s,a),r.set(s,a),i.delete(s),r},new Map);i.forEach((r,l)=>{t.style[l]=""}),hr.set(t,o)}function qc(e,t,n){if(t.substr(0,2)==="on"){const i=t.substr(2);return Rc(i)}switch(e){case"class":return Uc;case"style":return Qc;default:{let i=!1;return(o,r,l)=>{if(i=i||!n&&!(r instanceof b1.SVGElement)&&t in r,i)r[t]=l;else if(l===!1||l===void 0||l===null)r.removeAttribute(e);else{const s=l===!0?"":String(l);r.setAttribute(e,s)}}}}}const Wc=Date.now(),Ye=(e=0)=>`{{h-${Wc}-${e}}}`,Al=Ye("(\\d+)"),zt=new RegExp(`^${Al}$`),So=new RegExp(Al,"g"),vr=new WeakMap;function Kc(e,t){return t?Dl(n=>{let i=vr.get(e);i||(i=new Map,vr.set(e,i));let o=i.get(t);if(!o){o=b1.document.createElement("template"),o.content.appendChild(e.content.cloneNode(!0)),i.set(t,o);const r=o.content.querySelectorAll("style");Array.from(r).forEach(l=>{const s=l.childNodes.length+1;for(let a=0;a<s;a+=1)l.parentNode.insertBefore(b1.document.createTextNode(Ye()),l)}),n.prepareTemplate(o,t.toLowerCase())}return o},e):e}function Yc(e,t){let n=e.reduce((i,o,r)=>r===0?o:e.slice(r).join("").match(/^\s*<\/\s*(table|tr|thead|tbody|tfoot|colgroup)>/)?`${i}<!--${Ye(r-1)}-->${o}`:i+Ye(r-1)+o,"");return t&&(n+=`<style>
${t.join(`
/*------*/
`)}
</style>`),n}function Gc(e){return e.replace(/\s*=\s*['"]*$/g,"").split(/\s+/).pop()}function Xc(e){const t=b1.document.createNodeIterator(e,b1.NodeFilter.SHOW_COMMENT,null,!1);let n;for(;n=t.nextNode();)zt.test(n.textContent)&&(n.parentNode.insertBefore(b1.document.createTextNode(n.textContent),n),n.parentNode.removeChild(n))}function Jc(e){let t;return{get currentNode(){return t},nextNode(){if(t===void 0)t=e.childNodes[0];else if(t.childNodes.length)t=t.childNodes[0];else if(t.nextSibling)t=t.nextSibling;else{let n=t.parentNode;for(t=n.nextSibling;!t&&n!==e;)n=n.parentNode,t=n.nextSibling}return!!t}}}function ed(e){return b1.document.createTreeWalker(e,b1.NodeFilter.SHOW_ELEMENT|b1.NodeFilter.SHOW_TEXT,null,!1)}const mr=typeof b1.ShadyDOM=="object"&&b1.ShadyDOM.inUse?Jc:ed,Cr=new Map;function td(e,t=0){e=e.replace(/(^[\n\s\t ]+)|([\n\s\t ]+$)+/g,"");let n=e.indexOf(`
`);if(n>-1){let i=0-t-2;for(n+=1;e[n]===" "&&n<e.length;n+=1)i+=1;return e.replace(/\n +/g,o=>o.substr(0,Math.max(o.length-i,1)))}return e}function wr(e,t){const n=Ye(t);return`${td(e).split(`
`).filter(o=>o).map(o=>{const r=o.indexOf(n);return r>-1?`| ${o}
--${"-".repeat(r)}${"^".repeat(6)}`:`| ${o}`}).join(`
`).replace(So,"${...}")}`}function nd(e,t,n){const i=b1.document.createElement("template"),o=[],r=Yc(e,n);if(i.innerHTML=t?`<svg>${r}</svg>`:r,t){const d=i.content.firstChild;i.content.removeChild(d),Array.from(d.childNodes).forEach(c=>i.content.appendChild(c))}Xc(i.content);const l=mr(i.content),s=[];let a=0;for(;l.nextNode();){const d=l.currentNode;if(d.nodeType===b1.Node.TEXT_NODE){const c=d.textContent;if(!c.match(zt)){const h=c.match(So);if(h){let C=d;h.reduce((f,p)=>{const[g,m]=f.pop().split(p);return g&&f.push(g),f.push(p),m&&f.push(m),f},[c]).forEach((f,p)=>{p===0?C.textContent=f:C=C.parentNode.insertBefore(b1.document.createTextNode(f),C.nextSibling)})}}const u=d.textContent.match(zt);u&&(d.textContent="",o[u[1]]=[a,H2])}else if(d.nodeType===b1.Node.ELEMENT_NODE){if(pr){const c=d.tagName.toLowerCase();c.match(/.+-.+/)&&!b1.customElements.get(c)&&!s.includes(c)&&s.push(c)}Array.from(d.attributes).forEach(c=>{const u=c.value.trim(),h=c.name,C=u.match(zt);if(C){const f=Gc(e[C[1]]);o[C[1]]=[a,qc(h,f,t)],d.removeAttribute(c.name)}else{const f=u.match(So);if(f){const p=`attr__${h}`;f.forEach((g,m)=>{const[,v]=g.match(zt);let y=!1;o[v]=[a,(x,L,H)=>{const Z=ge.get(L,{});Z[p]=(Z[p]||u).replace(g,H==null?"":H),(f.length===1||m+1===f.length)&&(y=y||!t&&!(L instanceof b1.SVGElement)&&h in L,y?L[h]=Z[p]:L.setAttribute(h,Z[p]),Z[p]=void 0)}]}),c.value=""}}})}a+=1}return pr&&s.length&&console.warn(`Not defined ${s.map(d=>`<${d}>`).join(", ")} element${s.length>1?"s":""} found in the template:
${wr(r,-1)}`),function(c,u,h,C){const f=ge.get(u,{type:"function"});if(i!==f.template){(f.template||u.nodeType!==b1.Node.TEXT_NODE)&&ri(u),f.prevArgs=null;const m=b1.document.importNode(Kc(i,c.tagName).content,!0),v=mr(m),y=o.slice(0);let x=0,L=y.shift();const H=[];for(f.template=i,f.markers=H;v.nextNode();){const Z=v.currentNode;for(;L&&L[0]===x;)H.push([Z,L[1]]),L=y.shift();x+=1}if(u.nodeType===b1.Node.TEXT_NODE){f.startNode=m.childNodes[0],f.endNode=m.childNodes[m.childNodes.length-1];let Z=u,N=m.childNodes[0];for(;N;)u.parentNode.insertBefore(N,Z.nextSibling),Z=N,N=m.childNodes[0]}else u.appendChild(m)}const p=u.adoptedStyleSheets;if(C){let m=!1;if(C=C.map(v=>{if(v instanceof b1.CSSStyleSheet)return v;let y=Cr.get(v);return y||(y=new b1.CSSStyleSheet,y.replaceSync(v),Cr.set(v,y)),y}),C.length===p.length){m=!0;for(let v=0;v<C.length;v+=1)if(C[v]!==p[v]){m=!1;break}}m||(u.adoptedStyleSheets=C)}else p&&p.length&&(u.adoptedStyleSheets=[]);const g=f.prevArgs;f.prevArgs=h;for(let m=0;m<f.markers.length;m+=1){if(g&&g[m]===h[m])continue;const[v,y]=f.markers[m];try{y(c,v,h[m],g&&g[m])}catch(x){throw console.error(`Following error was thrown when updating a template expression in ${El(c)}
${wr(r,m)}`),x}}u.nodeType!==b1.Node.TEXT_NODE&&Dl(m=>{c.shadowRoot&&(g?m.styleSubtree(c):m.styleElement(c))})}}function yr({target:e,detail:t},n){let i;switch(e.type){case"radio":case"checkbox":i=e.checked&&e.value;break;case"file":i=e.files;break;default:i=t&&hasOwnProperty.call(t,"value")?t.value:e.value}n(i)}function id(e,t){return e.split(".").reverse().reduce((n,i)=>n?{[i]:n}:{[i]:t},null)}const xr=new Map,En=new WeakMap;function od(e,t){if(!e)throw Error(`The first argument must be a property name or an object instance: ${e}`);if(typeof e=="object"){if(t===void 0)throw Error("For model instance property the second argument must be defined");const i=Nc.get(e);if(!i)throw Error("Provided object must be a model instance of the store");return t===null?()=>{i.set(e,null)}:(o,r)=>{yr(r,l=>{const s=En.get(e);s||b1.requestAnimationFrame(()=>{const a=En.get(e);En.delete(e),i.set(e,a).catch(()=>{})}),En.set(e,{...s,...id(t,l)})})}}if(arguments.length===2)return i=>{i[e]=t};let n=xr.get(e);return n||(n=(i,o)=>{yr(o,r=>{i[e]=r})},xr.set(e,n)),n}const Gi=new WeakMap;function rd(e,t,n=200){return(i,o)=>{let r;t&&(r=setTimeout(()=>{r=void 0,b1.requestAnimationFrame(()=>{t(i,o)})},n)),Gi.set(o,e),e.then(l=>{r&&clearTimeout(r),Gi.get(o)===e&&(H2(i,o,l),Gi.set(o,null))})}}var Sl=Object.freeze(Object.defineProperty({__proto__:null,set:od,resolve:rd},Symbol.toStringTag,{value:"Module"}));const Lr=Ye(),ld=Ye("svg"),sd=/@import/,br=new Map,Bt=new WeakMap,ad={key(e){return this.id=e,this},style(...e){return Bt.set(this,(Bt.get(this)||[]).concat(e.filter(t=>t))),this},css(e,...t){return Bt.set(this,(Bt.get(this)||[]).concat(e.reduce((n,i,o)=>`${n}${i}${t[o]||""}`,""))),this}};function Il(e,t,n){const i=(o,r=o)=>{const l=Bt.get(i);let s,a=e.join(Lr);if(l){const c=l.join(Lr);s=!!r.adoptedStyleSheets&&!sd.test(c),s||(a+=c)}n&&(a+=ld);let d=br.get(a);d||(d=nd(e,n,!s&&l),br.set(a,d)),d(o,r,t,s&&l)};return Object.assign(i,ad)}function Je(e,...t){return Il(e,t)}function cd(e,...t){return Il(e,t,!0)}Object.assign(Je,Sl);Object.assign(cd,Sl);function dd(e){const t=document.createElement("pre");return t.style.width="1px",t.style.height="1px",t.style.position="fixed",t.style.top="5px",t.textContent=e,t}function jl(e){if("clipboard"in navigator)return navigator.clipboard.writeText(e.textContent);const t=getSelection();if(t==null)return Promise.reject(new Error);t.removeAllRanges();const n=document.createRange();return n.selectNodeContents(e),t.addRange(n),document.execCommand("copy"),t.removeAllRanges(),Promise.resolve()}function Io(e){if("clipboard"in navigator)return navigator.clipboard.writeText(e);const t=document.body;if(!t)return Promise.reject(new Error);const n=dd(e);return t.appendChild(n),jl(n),t.removeChild(n),Promise.resolve()}function Ol(e){const t=e.getAttribute("for"),n=e.getAttribute("value");function i(){e.dispatchEvent(new CustomEvent("clipboard-copy",{bubbles:!0}))}if(n)Io(n).then(i);else if(t){const o="getRootNode"in Element.prototype?e.getRootNode():e.ownerDocument;if(!(o instanceof Document||"ShadowRoot"in window&&o instanceof ShadowRoot))return;const r=o.getElementById(t);r&&pd(r).then(i)}}function pd(e){return e instanceof HTMLInputElement||e instanceof HTMLTextAreaElement?Io(e.value):e instanceof HTMLAnchorElement&&e.hasAttribute("href")?Io(e.href):jl(e)}function ud(e){const t=e.currentTarget;t instanceof HTMLElement&&Ol(t)}function zl(e){if(e.key===" "||e.key==="Enter"){const t=e.currentTarget;t instanceof HTMLElement&&(e.preventDefault(),Ol(t))}}function fd(e){e.currentTarget.addEventListener("keydown",zl)}function gd(e){e.currentTarget.removeEventListener("keydown",zl)}class Mr extends HTMLElement{constructor(){super(),this.addEventListener("click",ud),this.addEventListener("focus",fd),this.addEventListener("blur",gd)}connectedCallback(){this.hasAttribute("tabindex")||this.setAttribute("tabindex","0"),this.hasAttribute("role")||this.setAttribute("role","button")}get value(){return this.getAttribute("value")||""}set value(t){this.setAttribute("value",t)}}window.customElements.get("clipboard-copy")||(window.ClipboardCopyElement=Mr,window.customElements.define("clipboard-copy",Mr));function Ge(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var _r,Hr,Vr,Tr,kr,Zr,Dr;function hd(e,t){var n=new Blob([t],{type:"image/svg+xml"}),i=URL.createObjectURL(n),o=document.createElement("a");o.download="".concat(e,".svg"),o.target="_blank",o.href=i,o.click()}function jo(){window.showTdMessage&&window.showTdMessage({content:"\u590D\u5236\u6210\u529F",theme:"success",duration:1e3})}var vd=`
  .t-icons-view__wrapper { 
    width: calc(1 / 6 * 100%);
    height: 100px;
    font-size: 12px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    cursor: pointer; 
    border-radius: 6px;
    position: relative;
  }
  .t-icons-view__wrapper:hover { background:var(--bg-color-demo-hover)}
  .t-icons-view__wrapper:hover > .t-icons-view__name {
    opacity: 0;
    visibility: hidden;
  }
  .t-icons-view__wrapper:hover > .t-icons-view__actions {
    opacity: 1;
    visibility: visible;
  }
  .t-icons-view__actions {
    position: absolute;
    bottom: 20px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 16px;
    opacity: 0;
    visibility: hidden;
    transition: all .1s linear;
  }
  .t-icons-view__actions-divider {
    border-left: 1px solid var(--component-border);
    border-top: 0;
    display: inline-block;
    height: 0.9em;
    margin: 0 8px;
    vertical-align: middle;
  }

  .t-icons-view__actions span {
    display: inline-flex;
    align-items: center;
    cursor: pointer;
    transition: all .2s linear;
    color: var(--text-secondary);
  }

  .t-icons-view__actions span:hover {
    color: var(--text-primary);
  }
`,md=Je(_r||(_r=Ge(['<svg xmlns="http://www.w3.org/2000/svg" fill="none" view-box="0 0 16 16" width="1em" height="1em" class="t-icon t-icon-download"><path fill="currentColor" d="M12.26 5.81L8.5 9.58V.5h-1v9.08L3.74 5.8l-.71.71 4.62 4.62c.2.2.5.2.7 0l4.62-4.62-.7-.7z" fill-opacity="0.9"></path><path fill="currentColor" d="M2 11v2a1 1 0 001 1h10a1 1 0 001-1v-2h-1v2H3v-2H2z" fill-opacity="0.9"></path></svg>']))),Cd=Je(Hr||(Hr=Ge([`<svg xmlns="http://www.w3.org/2000/svg" fill="none" view-box="0 0 16 16" width="1em" height="1em" class="t-icon t-icon-file-icon"><path d="M3.5 2V14H11.2336V15H3.49534C3.02005 15 2.5 14.6627 2.5 14.0781V1.92191C2.5 1.33727 3.02005 1 3.49534 1H8.86589C9.13442 1 9.39167 1.108 9.57972 1.29969L13.2138 5.004C13.3973 5.19096 13.5 5.44241 13.5 5.70431V7.5H12.5V6.01275H8.50008V2H3.5ZM9.50008 5.01275H11.8215L9.50008 2.64645V5.01275Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M4.48145 9H6.48145V9.8H5.88145V12.2H6.48145V13H4.48145V12.2H5.08145V9.8H4.48145V9Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8.99999 9H7.79246C7.35479 9 6.99999 9.35817 6.99999 9.8V12.2C6.99999 12.6418 7.35479 13 7.79246 13H8.99999V12.2H7.79246V9.8H8.99999V9Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M13.7972 9.8L13.7972 13H13L13 9H14.7434C15.1837 9 15.5406 9.35817 15.5406 9.8V13H14.7434V9.8H13.7972Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M9.5 9.80928L9.5 12.201C9.5 12.6413 9.85693 12.9982 10.2972 12.9982H11.4931C11.9334 12.9982 12.2903 12.6413 12.2903 12.201V9.80928C12.2903 9.36899 11.9334 9.01205 11.4931 9.01205H10.2972C9.85693 9.01205 9.5 9.36899 9.5 9.80928ZM10.2972 12.201L10.2972 9.80928H11.4931V12.201H10.2972Z" fill="currentColor" fill-opacity="0.9"/>
</svg>`]))),Bl=Je(Vr||(Vr=Ge(['<svg xmlns="http://www.w3.org/2000/svg" fill="none" view-box="0 0 16 16" width="1em" height="1em" class="t-icon t-icon-file-copy"><path fill="currentColor" d="M4 1.92C4 1.34 4.52 1 5 1h4.37a1 1 0 01.71.3L13.71 5a1 1 0 01.29.7v6.38c0 .58-.52.92-1 .92H5c-.48 0-1-.34-1-.92V1.92zM5 2v10h8V6.01H9V2H5zm5 .65V5h2.32L10 2.65z" fill-opacity="0.9"></path><path fill="currentColor" d="M2 5v9.01a1 1 0 001 1h8v-1H3V5H2z" fill-opacity="0.9"></path></svg>']))),V=function(t,n){return Je(Tr||(Tr=Ge([`
<clipboard-copy value='`,`'>
  <span onclick=`,">",`</span>
</clipboard-copy>
<div class="t-icons-view__actions-divider"></div>
<clipboard-copy value='<`,`Icon />'>
  <span onclick=`,">",`</span>
</clipboard-copy>
`])),t,jo,Bl,n,jo,Cd)},T=function(t,n){return Je(kr||(kr=Ge(["<clipboard-copy value='",`'>
  <span onclick=`,">",`</span>
</clipboard-copy>
<div class="t-icons-view__actions-divider"></div>
<span onclick=`,">","</span>"])),n,jo,Bl,function(){return hd(t,n)},md)};zc({tag:"td-icons-view",showType:"develop",render:function(t){var n=t.showType;return Je(Dr||(Dr=Ge([`<div style="display:flex;flex-wrap:wrap"><div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 8.5H4.5V7.5H7.5V4.5H8.5V7.5H11.5V8.5H8.5V11.5H7.5V8.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">add-circle</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 11V8.5H5V7.5H7.5V5H8.5V7.5H11V8.5H8.5V11H7.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M3 14C2.44772 14 2 13.5523 2 13V3C2 2.44771 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3L14 13C14 13.5523 13.5523 14 13 14L3 14ZM3 13L13 13L13 3L3 3L3 13Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">add-rectangle</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.34998 8.64998V12.5H8.64998V8.64998H12.5V7.34998H8.64998V3.5H7.34998V7.34998H3.5V8.64998H7.34998Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">add</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.25 1.75C9.59315 1.75 8.25 3.09315 8.25 4.75C8.25 6.40685 9.59315 7.75 11.25 7.75C12.9069 7.75 14.25 6.40685 14.25 4.75C14.25 3.09315 12.9069 1.75 11.25 1.75ZM9.25 4.75C9.25 3.64543 10.1454 2.75 11.25 2.75C12.3546 2.75 13.25 3.64543 13.25 4.75C13.25 5.85457 12.3546 6.75 11.25 6.75C10.1454 6.75 9.25 5.85457 9.25 4.75Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2 3C2 2.44772 2.44772 2 3 2H6.5C7.05228 2 7.5 2.44772 7.5 3V6.5C7.5 7.05228 7.05228 7.5 6.5 7.5H3C2.44772 7.5 2 7.05228 2 6.5V3ZM3 3V6.5H6.5V3H3Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2 9.5C2 8.94772 2.44772 8.5 3 8.5H6.5C7.05228 8.5 7.5 8.94772 7.5 9.5V13C7.5 13.5523 7.05228 14 6.5 14H3C2.44772 14 2 13.5523 2 13V9.5ZM3 9.5V13H6.5V9.5H3Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8.5 9.5C8.5 8.94772 8.94772 8.5 9.5 8.5H13C13.5523 8.5 14 8.94772 14 9.5V13C14 13.5523 13.5523 14 13 14H9.5C8.94772 14 8.5 13.5523 8.5 13V9.5ZM9.5 13H13V9.5H9.5V13Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">app</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7458 7.54711L8.5 9.79289L8.5 4.5L7.5 4.5L7.5 9.79289L5.25422 7.54711L4.54711 8.25422L8 11.7071L11.4529 8.25422L10.7458 7.54711Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M3 14C2.44772 14 2 13.5523 2 13V3C2 2.44771 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3L14 13C14 13.5523 13.5523 14 13 14L3 14ZM3 13L13 13L13 3L3 3L3 13Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">arrow-down-rectangle</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.50009 2.00014L8.49992 12.0858L12.1462 8.4395L12.8533 9.14661L8.21203 13.7879C8.09488 13.9051 7.90493 13.9051 7.78777 13.7879L3.14648 9.14661L3.85359 8.4395L7.49992 12.0858L7.50009 2.00012L8.50009 2.00014Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">arrow-down</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.91423 8.49963L7.56053 12.1459L6.85342 12.853L2.21213 8.21174C2.09497 8.09458 2.09497 7.90463 2.21213 7.78748L6.85342 3.14619L7.56053 3.8533L3.91419 7.49963L13.9999 7.4998L13.9999 8.4998L3.91423 8.49963Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">arrow-left</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0857 7.50013L8.43938 3.85384L9.14649 3.14673L13.7878 7.78802C13.9049 7.90517 13.9049 8.09512 13.7878 8.21228L9.14649 12.8536L8.43938 12.1465L12.0857 8.50013L2 8.49996L2.00002 7.49996L12.0857 7.50013Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">arrow-right</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 8.00008H13L8 14.6667L3 8.00008H6V1.33342H10V8.00008Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">arrow-triangle-down-filled</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 8.00008H3L8 14.6667L13 8.00008H10V1.33342H6V8.00008ZM5.66667 9.33342H7.33333V2.66675H8.66667V9.33342H10.3333L8 12.4445L5.66667 9.33342Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">arrow-triangle-down</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 8.00004H13L8 1.33337L3 8.00004H6V14.6667H10V8.00004Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">arrow-triangle-up-filled</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 8.00004V14.6667H10V8.00004H13L8 1.33337L3 8.00004H6ZM5.66667 6.66671L8 3.5556L10.3333 6.66671H8.66667V13.3334H7.33333V6.66671H5.66667Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">arrow-triangle-up</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.49988 3.91436L3.85359 7.56065L3.14648 6.85354L7.78777 2.21226C7.90493 2.0951 8.09488 2.0951 8.21204 2.21226L12.8533 6.85354L12.1462 7.56065L8.49988 3.91432L8.49971 14L7.49971 14L7.49988 3.91436Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">arrow-up</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1269 3.85578C11.3379 3.07643 10.0678 3.08032 9.28361 3.86448L2.07405 11.074L1.36694 10.3669L8.57651 3.15737C9.74951 1.98437 11.6495 1.97856 12.8297 3.14436C14.0201 4.32029 14.0259 6.24042 12.8427 7.42361L7.00276 13.2636C6.26721 13.9991 5.07466 13.9991 4.33912 13.2636C3.60357 12.5281 3.60357 11.3355 4.33912 10.6L10.0131 4.92602L10.7202 5.63313L5.04622 11.3071C4.7012 11.6521 4.7012 12.2115 5.04622 12.5565C5.39124 12.9015 5.95063 12.9015 6.29565 12.5565L12.1356 6.7165C12.9266 5.92553 12.9227 4.6419 12.1269 3.85578Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">attach</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.49755 8.19542L5.9441 9.72019L5.2282 9.02199L8.00185 6.29956L10.8007 9.02923L10.087 9.72972L8.50841 8.19011L8.50847 11.9988L7.49761 11.9989L7.49755 8.19542Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M4.49903 5.4989H11.499V4.4989H4.49903V5.4989Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2.99903 1.9989C2.44674 1.9989 1.99903 2.44662 1.99903 2.9989L1.99902 12.9989C1.99902 13.5512 2.44674 13.9989 2.99902 13.9989L12.999 13.9989C13.5513 13.9989 13.999 13.5512 13.999 12.9989L13.999 2.9989C13.999 2.44662 13.5513 1.9989 12.999 1.9989L2.99903 1.9989ZM12.999 2.9989L12.999 12.9989L2.99902 12.9989L2.99903 2.9989L12.999 2.9989Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">backtop-rectangle</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.99902 2.9989H13.999V1.9989H1.99902V2.9989Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M3.37689 10.2293L7.48663 6.19544L7.48666 14.8438L8.49751 14.8437L8.49748 6.1901L12.6779 10.2672L13.3915 9.56668L8.34115 4.64112C8.14651 4.45129 7.83584 4.45178 7.64181 4.64224L2.661 9.53108L3.37689 10.2293Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">backtop</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.242 8.39077C0.991274 8.1906 0.991274 7.80944 1.242 7.60927L6.87938 3.1086C7.20684 2.84717 7.69133 3.08033 7.69133 3.49935L7.69133 7.76543C7.72075 7.71 7.76134 7.65903 7.81309 7.6159L13.1795 3.14379C13.5052 2.8724 13.9996 3.10398 13.9996 3.5279L13.9996 12.4721C13.9996 12.896 13.5052 13.1276 13.1795 12.8562L7.81309 8.38412C7.76134 8.34099 7.72075 8.29002 7.69133 8.23459L7.69133 12.5007C7.69133 12.9197 7.20684 13.1529 6.87937 12.8914L1.242 8.39077ZM6.69133 11.4617L6.69133 4.53833L2.35535 8.00002L6.69133 11.4617ZM12.9996 11.4046L12.9996 4.59544L8.9142 8.00001L12.9996 11.4046Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">backward</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 2V14H2V2H4ZM14 2V14H12V2H14ZM11 2V14H10V2H11ZM9 2V14H7V2H9ZM6 2V14H5V2H6Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">barcode</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99902 9.27825L3.99902 12.0782V2.9989H11.999V12.0782L7.99902 9.27825ZM7.99902 10.4989L12.2123 13.4482C12.5437 13.6802 12.999 13.4431 12.999 13.0386V2.9989C12.999 2.44662 12.5513 1.9989 11.999 1.9989H3.99902C3.44674 1.9989 2.99902 2.44662 2.99902 2.9989V13.0386C2.99902 13.4431 3.45437 13.6802 3.78576 13.4482L7.99902 10.4989Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">books</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7732 11.9803L12.1465 13.3535L12.8535 12.6464L3.14969 2.94257L2.44266 3.64972L3.65332 4.86032C2.60522 5.58542 1.72754 6.57559 1.11694 7.76987L1 7.99985L1.11694 8.22983C2.46143 10.8698 5.10156 12.4998 8.00488 12.4998C8.96875 12.4998 9.9043 12.319 10.7732 11.9803ZM9.99121 11.1982C9.35718 11.3957 8.68921 11.4998 8.00488 11.4998C5.5498 11.4998 3.3186 10.1698 2.1106 7.99985C2.66992 6.99502 3.44873 6.17038 4.36743 5.57443L5.45093 6.65799C5.2395 7.05868 5.11987 7.51529 5.11987 7.99985C5.11987 9.59036 6.40918 10.8797 7.99976 10.8797C8.48438 10.8797 8.94092 10.76 9.34155 10.5487L9.99121 11.1982ZM6.21143 7.41855L8.58105 9.78811C8.39795 9.84756 8.20264 9.87973 7.99976 9.87973C6.96143 9.87973 6.11987 9.03805 6.11987 7.99985C6.11987 7.79696 6.15186 7.60159 6.21143 7.41855Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M14.8831 8.22983L15 7.99985L14.8831 7.76987C13.5386 5.13986 10.8984 3.49985 8.00488 3.49985C7.14868 3.49985 6.31519 3.64248 5.53125 3.91116L6.3313 4.71133C6.87012 4.57242 7.4314 4.49985 8.00488 4.49985C10.4502 4.49985 12.6814 5.82986 13.8992 7.99985C13.3894 8.91531 12.696 9.6813 11.8809 10.261L12.5894 10.9693C13.53 10.2635 14.3201 9.33523 14.8831 8.22983Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M10.8796 7.99985C10.8796 8.37375 10.8083 8.73099 10.6787 9.05874L9.86401 8.24399C9.87427 8.16409 9.87964 8.08255 9.87964 7.99985C9.87964 6.96164 9.03784 6.12002 7.99976 6.12002C7.91699 6.12002 7.83545 6.12533 7.75562 6.13571L6.94092 5.32089C7.26855 5.19125 7.62598 5.12002 7.99976 5.12002C9.59033 5.12002 10.8796 6.40939 10.8796 7.99985Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">browse-off</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.8796 7.99988C10.8796 9.59039 9.59033 10.8798 7.99976 10.8798C6.40918 10.8798 5.11987 9.59039 5.11987 7.99988C5.11987 6.40942 6.40918 5.12006 7.99976 5.12006C9.59033 5.12006 10.8796 6.40942 10.8796 7.99988ZM9.87964 7.99988C9.87964 6.96167 9.03784 6.12006 7.99976 6.12006C6.96143 6.12006 6.11987 6.96167 6.11987 7.99988C6.11987 9.03809 6.96143 9.87976 7.99976 9.87976C9.03784 9.87976 9.87964 9.03809 9.87964 7.99988Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M1.11694 8.22986C2.46143 10.8699 5.10156 12.4999 8.00488 12.4999C10.8984 12.4999 13.5386 10.8699 14.8831 8.22986L15 7.99988L14.8831 7.7699C13.5386 5.13989 10.8984 3.49988 8.00488 3.49988C5.10156 3.49988 2.46143 5.13989 1.11694 7.7699L1 7.99988L1.11694 8.22986ZM8.00488 11.4999C5.5498 11.4999 3.3186 10.1699 2.1106 7.99988C3.3186 5.8299 5.5498 4.49988 8.00488 4.49988C10.4502 4.49988 12.6814 5.8299 13.8992 7.99988C12.6909 10.1699 10.4502 11.4999 8.00488 11.4999Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">browse</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.9999 3.00002L4.99988 3L4.99988 4L13.9999 4.00002V3.00002Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M3.49988 3L2.00049 3L2.00049 4L3.49988 4V3Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M4.99988 7.50006L13.9999 7.50009V8.50009L4.99988 8.50006L4.99988 7.50006Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2.00049 7.50006H3.49988V8.50006H2.00049L2.00049 7.50006Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M4.99988 12L13.9999 12V13L4.99988 13L4.99988 12Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2.00049 12H3.49988V13H2.00049L2.00049 12Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">bulletpoint</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 3H6L6 1.5H5L5 3H3C2.44772 3 2 3.44771 2 4V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V4C14 3.44772 13.5523 3 13 3H11V1.5H10L10 3ZM5 5L6 5L6 4H10L10 5L11 5V4H13V6H3V4H5L5 5ZM3 7H13V13H3L3 7Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">calendar</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.9996 11.0571C14.0094 11.656 13.8406 12.3013 13.4825 12.8172L13.3562 12.9841C13.1203 13.3295 12.7802 13.5823 12.3763 13.7333C12.0957 13.8382 11.92 13.8686 11.467 13.9206C9.51866 14.1028 7.38954 13.1934 5.28719 11.3231C3.8828 10.0711 2.83116 8.50511 2.32479 6.90415C2.11109 6.22714 1.99984 5.57675 1.99984 4.9881C1.99984 4.28226 2.15924 3.67085 2.47982 3.21159C2.78397 2.79386 3.36194 2.44687 4.23086 2.1189C4.65696 1.95807 5.13791 2.10548 5.40072 2.47746L7.06606 4.83489C7.34085 5.22387 7.30316 5.75267 6.97604 6.09879L6.7593 6.32024L6.49703 6.57443C6.43153 6.62982 6.33187 6.76339 6.33187 6.76339C6.30907 7.07011 6.63615 7.70117 7.58846 8.67568L7.87185 8.9415C8.75003 9.75141 8.98642 9.81638 9.25619 9.62851L9.34609 9.55508C9.44154 9.48247 9.69138 9.30859 10.2242 8.94226C10.5298 8.73213 10.9267 8.70843 11.2551 8.88068L11.4976 9.00892C13.1606 9.8967 13.9203 10.431 13.9937 10.9791L13.9996 11.0571ZM12.9997 11.0731C13.001 11.1553 12.8854 11.0287 12.6447 10.8549C12.2936 10.6014 11.7532 10.279 11.0283 9.89197L10.7907 9.7663L10.0027 10.3101C9.98437 10.322 9.97594 10.3268 9.97927 10.323C9.11992 10.9979 8.37978 10.8086 6.88619 9.38735C5.74004 8.21495 5.28626 7.33947 5.33425 6.69456C5.35666 6.34167 5.59986 6.0185 5.8359 5.82509C5.9363 5.72853 6.03513 5.63144 6.12417 5.54118L6.24929 5.41186L4.58401 3.05447C3.88251 3.31925 3.4487 3.57965 3.29391 3.79216C3.10764 4.05918 2.99984 4.47289 2.99984 4.9881C2.99984 5.46852 3.09399 6.01883 3.27834 6.60286C3.72853 8.02618 4.67843 9.44076 5.95223 10.5764C7.86462 12.2776 9.73829 13.0779 11.3635 12.926L11.621 12.8939C11.799 12.8686 11.8995 12.8439 12.0261 12.7966C12.2452 12.7147 12.4181 12.5862 12.5589 12.382C12.8261 12.0557 12.9688 11.6382 12.9954 11.2418L12.9997 11.0731Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">call</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 6H5L8 10.5L11 6Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">caret-down-small</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99958 10.3334L3.99958 5.00002L11.9996 5.00002L7.99958 10.3334ZM7.59958 11.4667C7.79958 11.7334 8.19958 11.7334 8.39958 11.4667L13.3996 4.80002C13.6468 4.4704 13.4116 4.00002 12.9996 4.00002L2.99958 4.00002C2.58756 4.00002 2.35237 4.4704 2.59958 4.80002L7.59958 11.4667Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">caret-down</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 5L10.5 11L6 8L10.5 5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">caret-left-small</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.66683 7.99976L10.0002 3.99976L10.0002 11.9998L4.66683 7.99976ZM3.5335 7.59976C3.26683 7.79976 3.26683 8.19976 3.5335 8.39976L10.2002 13.3998C10.5298 13.647 11.0002 13.4118 11.0002 12.9998L11.0002 2.99976C11.0002 2.58774 10.5298 2.35255 10.2002 2.59976L3.5335 7.59976Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">caret-left</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 5L6 11L10.5 8L6 5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">caret-right-small</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3337 7.99999L6.00032 12L6.00033 3.99999L11.3337 7.99999ZM12.467 8.39999C12.7337 8.19999 12.7337 7.79999 12.467 7.59999L5.80033 2.59999C5.47071 2.35278 5.00033 2.58797 5.00033 2.99999L5.00032 13C5.00032 13.412 5.4707 13.6472 5.80032 13.4L12.467 8.39999Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">caret-right</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 10.5H5L8 6L11 10.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">caret-up-small</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00042 5.66665L12.0004 11L4.00042 11L8.00042 5.66665ZM8.40042 4.53331C8.20042 4.26665 7.80042 4.26665 7.60042 4.53331L2.60042 11.2C2.35321 11.5296 2.5884 12 3.00042 12L13.0004 12C13.4124 12 13.6476 11.5296 13.4004 11.2L8.40042 4.53331Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">caret-up</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 3H2.57644L3.96502 11.3315C4.02931 11.7173 4.36307 12 4.75414 12H14V11H4.92356L4.59023 9H13.2239C13.591 9 13.911 8.75016 14 8.39403L14.85 4.99403C14.9762 4.48911 14.5943 4 14.0739 4H3.7569L3.53498 2.66848C3.47069 2.28273 3.13693 2 2.74586 2H1V3ZM13.0677 8H4.42356L3.92356 5H13.8177L13.0677 8Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M4.75 14.5C5.16421 14.5 5.5 14.1642 5.5 13.75C5.5 13.3358 5.16421 13 4.75 13C4.33579 13 4 13.3358 4 13.75C4 14.1642 4.33579 14.5 4.75 14.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M12.813 14.5C13.2272 14.5 13.563 14.1642 13.563 13.75C13.563 13.3358 13.2272 13 12.813 13C12.3987 13 12.063 13.3358 12.063 13.75C12.063 14.1642 12.3987 14.5 12.813 14.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">cart</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 2L7.5 14H8.5L8.5 2H7.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2.5 6V14H3.5L3.5 6H2.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M12.5 14L12.5 10H13.5L13.5 14H12.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">chart-bar</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5.5C9 7.15686 7.65674 8.5 6 8.5C4.34326 8.5 3 7.15686 3 5.5C3 3.84314 4.34326 2.5 6 2.5C7.65674 2.5 9 3.84314 9 5.5ZM8 5.5C8 4.39543 7.10449 3.5 6 3.5C4.89551 3.5 4 4.39543 4 5.5C4 6.60457 4.89551 7.5 6 7.5C7.10449 7.5 8 6.60457 8 5.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M14 10C14 11.3807 12.8806 12.5 11.5 12.5C10.1194 12.5 9 11.3807 9 10C9 8.61929 10.1194 7.5 11.5 7.5C12.8806 7.5 14 8.61929 14 10ZM13 10C13 9.17157 12.3284 8.5 11.5 8.5C10.6716 8.5 10 9.17157 10 10C10 10.8284 10.6716 11.5 11.5 11.5C12.3284 11.5 13 10.8284 13 10Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M5 12C5 12.8284 4.32837 13.5 3.5 13.5C2.67163 13.5 2 12.8284 2 12C2 11.1716 2.67163 10.5 3.5 10.5C4.32837 10.5 5 11.1716 5 12Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M13 4.5C13.5522 4.5 14 4.05229 14 3.5C14 2.94771 13.5522 2.5 13 2.5C12.4478 2.5 12 2.94771 12 3.5C12 4.05229 12.4478 4.5 13 4.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">chart-bubble</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM13.9795 8.5H7.5V2.02054C4.42023 2.27461 2 4.85467 2 8C2 11.3137 4.68629 14 8 14C11.1453 14 13.7254 11.5798 13.9795 8.5ZM13.9795 7.5C13.739 4.5851 11.4149 2.26101 8.5 2.02054V7.5H13.9795Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">chart-pie</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.49999 12L4.5 7.49994L5.5 7.49994L5.49999 12H4.49999Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M7.5 4.5L7.5 12H8.5L8.5 4.5H7.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M10.5 12L10.5 9L11.5 9L11.5 12H10.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2 3C2 2.44771 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3L14 13C14 13.5523 13.5523 14 13 14L3 14C2.44771 14 2 13.5523 2 13V3ZM3 3L3 13L13 13L13 3L3 3Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">chart</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.63795 10.5H13V4H3V11.865L4.63795 10.5ZM2.49205 13.59C2.29666 13.7528 2 13.6138 2 13.3595V4C2 3.44771 2.44772 3 3 3H13C13.5523 3 14 3.44772 14 4V10.5C14 11.0523 13.5523 11.5 13 11.5H5L2.49205 13.59Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">chat</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM4.5 8.2065L5.2065 7.5L7 9.293L10.7925 5.5L11.5 6.2075L7 10.707L4.5 8.2065Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">check-circle-filled</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 8.2065L7 10.707L11.5 6.2075L10.7925 5.5L7 9.293L5.2065 7.5L4.5 8.2065Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M4.11101 2.17971C5.26216 1.41054 6.61553 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.38447 14.5895 10.7378 13.8203 11.889C13.0511 13.0401 11.9579 13.9373 10.6788 14.4672C9.3997 14.997 7.99224 15.1356 6.63437 14.8655C5.2765 14.5954 4.02922 13.9287 3.05026 12.9497C2.07129 11.9708 1.4046 10.7235 1.13451 9.36563C0.86441 8.00776 1.00303 6.6003 1.53285 5.32122C2.06266 4.04213 2.95987 2.94888 4.11101 2.17971ZM4.66658 12.9888C5.65328 13.6481 6.81332 14 8 14C9.5913 14 11.1174 13.3679 12.2426 12.2426C13.3679 11.1174 14 9.5913 14 8C14 6.81331 13.6481 5.65327 12.9888 4.66658C12.3295 3.67988 11.3925 2.91085 10.2961 2.45672C9.19975 2.0026 7.99335 1.88378 6.82946 2.11529C5.66558 2.3468 4.59648 2.91824 3.75736 3.75736C2.91825 4.59647 2.3468 5.66557 2.11529 6.82946C1.88378 7.99334 2.0026 9.19974 2.45673 10.2961C2.91085 11.3925 3.67989 12.3295 4.66658 12.9888Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">check-circle</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 13C2 13.5523 2.44772 14 3 14L13 14C13.5523 14 14 13.5523 14 13L14 3C14 2.44772 13.5523 2 13 2H3C2.44772 2 2 2.44771 2 3V13ZM6.99997 9.35708L10.7748 5.58229L11.4819 6.28941L6.99999 10.7712L4.51343 8.28491L5.2205 7.57777L6.99997 9.35708Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">check-rectangle-filled</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7748 5.58229L6.99995 9.35708L5.22048 7.57777L4.51341 8.28491L6.99997 10.7712L11.4819 6.28941L10.7748 5.58229Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M3 14C2.44772 14 2 13.5523 2 13V3C2 2.44771 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3L14 13C14 13.5523 13.5523 14 13 14L3 14ZM3 13L13 13L13 3L3 3L3 13Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">check-rectangle</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.43348 9.92151L12.6561 3.69885L13.5754 4.61809L6.43348 11.76L1.97412 7.30063L2.89336 6.38139L6.43348 9.92151Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">check</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7929 6.20707L7.99996 9L5.20704 6.20707L4.49993 6.91418L7.99996 10.4142L11.5 6.91418L10.7929 6.20707Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M1 8C1 4.13401 4.13401 0.999999 8 0.999999C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8ZM2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">chevron-down-circle</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7929 6.20711L7.99999 9L5.20711 6.20711L4.5 6.91421L7.99999 10.4142L11.5 6.91421L10.7929 6.20711Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M14 13C14 13.5523 13.5523 14 13 14L3 14C2.44771 14 2 13.5523 2 13L2 3C2 2.44771 2.44772 2 3 2L13 2C13.5523 2 14 2.44772 14 3L14 13ZM13 13L13 3L3 3L3 13L13 13Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">chevron-down-rectangle</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.54028 6.45964L4.45952 5.54041L7.9999 9.08079L11.5403 5.54041L12.4595 6.45964L7.9999 10.9193L3.54028 6.45964Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">chevron-down</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.79293 10.7929L7 7.99996L9.79293 5.20703L9.08582 4.49993L5.58579 7.99996L9.08582 11.5L9.79293 10.7929Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">chevron-left-circle</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.0404 4.45952L12.1212 3.54028L7.66155 7.9999L12.1212 12.4595L13.0404 11.5403L9.50003 7.9999L13.0404 4.45952Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8.04048 4.45952L7.12124 3.54028L2.66162 7.9999L7.12124 12.4595L8.04048 11.5403L4.5001 7.9999L8.04048 4.45952Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">chevron-left-double</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.79289 10.7929L7 7.99999L9.79289 5.20711L9.08579 4.5L5.58579 7.99999L9.08579 11.5L9.79289 10.7929Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M3 14C2.44772 14 2 13.5523 2 13L2 3C2 2.44771 2.44772 2 3 2L13 2C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H3ZM3 13H13V3L3 3L3 13Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">chevron-left-rectangle</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5397 3.53998L10.4589 4.45922L6.91856 7.9996L10.4589 11.54L9.5397 12.4592L5.08008 7.9996L9.5397 3.53998Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">chevron-left</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.20707 5.20711L9 8.00004L6.20707 10.793L6.91418 11.5001L10.4142 8.00004L6.91418 4.5L6.20707 5.20711Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">chevron-right-circle</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.95972 11.5405L3.87896 12.4597L8.33858 8.0001L3.87896 3.54048L2.95972 4.45972L6.5001 8.0001L2.95972 11.5405ZM7.95965 11.5405L8.87889 12.4597L13.3385 8.0001L8.87889 3.54048L7.95965 4.45972L11.5 8.0001L7.95965 11.5405Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">chevron-right-double</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.20711 5.20711L9 8.00001L6.20711 10.7929L6.91421 11.5L10.4142 8.00001L6.91421 4.5L6.20711 5.20711Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M13 2C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H3C2.44771 14 2 13.5523 2 13L2 3C2 2.44772 2.44772 2 3 2L13 2ZM13 3L3 3L3 13H13V3Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">chevron-right-rectangle</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.4603 12.4592L5.54106 11.54L9.08144 7.99961L5.54106 4.45923L6.4603 3.53999L10.9199 7.99961L6.4603 12.4592Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">chevron-right</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.20711 9.79293L8.00004 7L10.793 9.79293L11.5001 9.08582L8.00004 5.58579L4.5 9.08582L5.20711 9.79293Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">chevron-up-circle</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.20711 9.79289L8.00001 7L10.7929 9.79289L11.5 9.08579L8.00001 5.58579L4.5 9.08579L5.20711 9.79289Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2 3C2 2.44772 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V3ZM3 3L3 13H13V3H3Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">chevron-up-rectangle</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4595 9.54074L11.5403 10.46L7.9999 6.91959L4.45952 10.46L3.54028 9.54073L7.9999 5.08112L12.4595 9.54074Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">chevron-up</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.134 15 0.999998 11.866 1 8C1 4.134 4.13401 0.999998 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z" fill="currentColor" fill-opacity="0.9"/>
</g>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">circle</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 4H9V2H7V4ZM10 2V4H13C13.5523 4 14 4.44772 14 5V7C14 7.50427 13.6267 7.92137 13.1414 7.99007L13.8369 12.8586C13.923 13.461 13.4555 14 12.847 14H3.15301C2.54446 14 2.077 13.461 2.16306 12.8586L2.85856 7.99007C2.37326 7.92137 2 7.50427 2 7V5C2 4.44772 2.44772 4 3 4H6V2C6 1.44772 6.44772 1 7 1H9C9.55228 1 10 1.44772 10 2ZM12.1327 7H13V5H9H7H3L3 7H3.8673H12.1327ZM12.1327 8H3.8673L3.15301 13H5V11H6V13H7.5V11H8.5V13H10V11H11V13H12.847L12.1327 8Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">clear</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 8C15 4.13401 11.866 1 8 1C4.13401 0.999998 1 4.134 1 8C0.999998 11.866 4.134 15 8 15C11.866 15 15 11.866 15 8ZM5.67091 4.94754L8.00001 7.29075L10.3291 4.94754L11.0384 5.65251L8.70499 8L11.0383 10.3475L10.3291 11.0525L8.00001 8.70925L5.67092 11.0525L4.96168 10.3475L7.29503 8L4.96167 5.65251L5.67091 4.94754Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">close-circle-filled</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.98094 10.3119L7.29289 7.99995L4.98104 5.6881L5.68814 4.98099L8 7.29284L10.3119 4.98099L11.019 5.6881L8.7071 7.99995L11.0191 10.3119L10.3119 11.019L8 8.70706L5.68805 11.019L4.98094 10.3119Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.134 15 0.999998 11.866 1 8C1 4.134 4.13401 0.999998 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">close-circle</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.818 10.4748L7.29291 7.99994L4.81812 5.52515L5.52522 4.81804L8.00001 7.29283L10.4749 4.81799L11.182 5.5251L8.70712 7.99994L11.1821 10.4749L10.475 11.182L8.00001 8.70705L5.52511 11.182L4.818 10.4748Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M3 14C2.44772 14 2 13.5523 2 13V3C2 2.44771 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3L14 13C14 13.5523 13.5523 14 13 14L3 14ZM3 13L13 13L13 3L3 3L3 13Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">close-rectangle</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00005 8.91923L11.076 11.9951L11.9952 11.0759L8.91929 7.99999L11.9952 4.92409L11.076 4.00485L8.00005 7.08075L4.92412 4.00482L4.00488 4.92406L7.08081 7.99999L4.00488 11.0759L4.92412 11.9952L8.00005 8.91923Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">close</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.7309 6.26257L4.0185 6.34565C2.89613 6.47654 2 7.45287 2 8.66667C2 9.8761 2.89038 10.848 4 10.9838V11.989C2.32292 11.8501 1 10.4132 1 8.66667C1 6.95238 2.26933 5.54286 3.90267 5.35238C4.31333 3.42857 5.99333 2 8 2C10.0067 2 11.6867 3.42857 12.0973 5.35238C13.7307 5.54286 15 6.95238 15 8.66667C15 10.4132 13.6771 11.8501 12 11.989V10.9838C13.1096 10.848 14 9.8761 14 8.66667C14 7.45287 13.1039 6.47654 11.9815 6.34565L11.2691 6.26257L11.1194 5.56114C10.8032 4.08009 9.51599 3 8 3C6.48401 3 5.19679 4.08009 4.88063 5.56114L4.7309 6.26257Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M9.79665 11.2999L8.50332 12.589L8.50338 7.99696L7.50172 7.99694L7.50165 12.589L6.20828 11.2999L5.5 12.0058L7.6495 14.1482C7.84463 14.3427 8.16031 14.3427 8.35543 14.1482L10.5049 12.0058L9.79665 11.2999Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">cloud-download</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.7309 6.26257L4.0185 6.34565C2.89613 6.47654 2 7.45287 2 8.66667C2 9.8761 2.89038 10.848 4 10.9838V11.989C2.32292 11.8501 1 10.4132 1 8.66667C1 6.95238 2.26933 5.54286 3.90267 5.35238C4.31333 3.42857 5.99333 2 8 2C10.0067 2 11.6867 3.42857 12.0973 5.35238C13.7307 5.54286 15 6.95238 15 8.66667C15 10.4132 13.6771 11.8501 12 11.989V10.9838C13.1096 10.848 14 9.8761 14 8.66667C14 7.45287 13.1039 6.47654 11.9815 6.34565L11.2691 6.26257L11.1194 5.56114C10.8032 4.08009 9.51599 3 8 3C6.48401 3 5.19679 4.08009 4.88063 5.56114L4.7309 6.26257Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M6.14062 10.7202L7.49824 9.38764L7.53164 14.5069L8.54247 14.5L8.5092 9.39884L9.88196 10.7377L10.5956 10.0372L8.34437 7.84156C8.14972 7.65173 7.83906 7.65223 7.64502 7.84268L5.42472 10.022L6.14062 10.7202Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">cloud-upload</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.7309 7.26147L4.88063 6.56004C5.19679 5.07899 6.48401 3.9989 8 3.9989C9.51599 3.9989 10.8032 5.07899 11.1194 6.56004L11.2691 7.26147L11.9815 7.34455C13.1039 7.47544 14 8.45177 14 9.66557C14 10.9705 12.9634 11.9989 11.7333 11.9989H4.26667C3.03657 11.9989 2 10.9705 2 9.66557C2 8.45177 2.89613 7.47544 4.0185 7.34455L4.7309 7.26147ZM12.0973 6.35128C11.6867 4.42747 10.0067 2.9989 8 2.9989C5.99333 2.9989 4.31333 4.42747 3.90267 6.35128C2.26933 6.54176 1 7.95128 1 9.66557C1 11.5037 2.46533 12.9989 4.26667 12.9989H11.7333C13.5347 12.9989 15 11.5037 15 9.66557C15 7.95128 13.7307 6.54176 12.0973 6.35128Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">cloud</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.94034 2.55798L6.09333 13.1832L7.05925 13.442L9.90626 2.8168L8.94034 2.55798Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2.14982 8.00001L5.57495 11.4251L4.86784 12.1323L1.15987 8.42428C0.925551 8.18996 0.925553 7.81006 1.15987 7.57575L4.86784 3.86777L5.57495 4.57488L2.14982 8.00001Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M13.846 8.00001L10.4054 11.4016L11.1085 12.1127L14.8368 8.42668C15.0744 8.19183 15.0744 7.80819 14.8368 7.57333L11.1085 3.88732L10.4054 4.59845L13.846 8.00001Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">code</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.4953 4.24999L8.46882 0.770621C8.17876 0.603152 7.82139 0.603152 7.53132 0.770621L1.50488 4.24999V11.2087C1.50488 11.5437 1.68357 11.8532 1.97363 12.0206L8.00007 15.5L14.0265 12.0206C14.3166 11.8532 14.4953 11.5437 14.4953 11.2087V4.24999ZM7.99907 7.42199L3.00419 4.53826L8.00007 1.65399L12.9954 4.53845L7.99907 7.42199ZM8.50007 8.28866L13.4951 5.4048V11.172L8.50007 14.0554V8.28866ZM7.50007 8.28866V14.0554L2.50407 11.172V5.40422L7.50007 8.28866Z" fill="currentColor"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">control-platform</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 11H6.5V10H3.5V11Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M15 12V4C15 3.44772 14.5523 3 14 3H2C1.44772 3 1 3.44772 1 4V12C1 12.5523 1.44772 13 2 13H14C14.5523 13 15 12.5523 15 12ZM14 4V5.5H2V4H14ZM2 12V6.5H14V12H2Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">creditcard</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M13.8745 4.90662L9.37556 9.40553L8.66845 8.69843L13.1674 4.19951L13.8745 4.90662Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8.02203 11.052C7.46974 11.052 7.02203 10.6043 7.02203 10.052C7.02203 9.49972 7.46974 9.052 8.02203 9.052C8.57431 9.052 9.02203 9.49972 9.02203 10.052C9.02203 10.6043 8.57431 11.052 8.02203 11.052ZM8.02203 12.052C9.1266 12.052 10.022 11.1566 10.022 10.052C10.022 8.94743 9.1266 8.052 8.02203 8.052C6.91746 8.052 6.02203 8.94743 6.02203 10.052C6.02203 11.1566 6.91746 12.052 8.02203 12.052Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8 3.5C4.41015 3.5 1.5 6.41015 1.5 10C1.5 11.3817 1.93054 12.6613 2.66478 13.714L1.8446 14.286C0.997092 13.071 0.5 11.5928 0.5 10C0.5 5.85786 3.85786 2.5 8 2.5C9.2547 2.5 10.4388 2.8085 11.4792 3.35421L11.0147 4.23978C10.1142 3.76743 9.08905 3.5 8 3.5ZM14.5 10C14.5 8.91685 14.2355 7.89696 13.7679 6.99999L14.6547 6.53776C15.1948 7.57405 15.5 8.75212 15.5 10C15.5 11.5928 15.0029 13.071 14.1554 14.286L13.3352 13.714C14.0695 12.6613 14.5 11.3817 14.5 10Z" fill="currentColor" fill-opacity="0.9"/>
</g>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">dashboard</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 12V6H7V12H6Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M9 6V12H10V6H9Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M10.5 3H14V4H13V14C13 14.5523 12.5523 15 12 15H4C3.44772 15 3 14.5523 3 14V4H2V3H5.5L5.5 1.8C5.5 1.35817 5.85817 1 6.3 1H9.7C10.1418 1 10.5 1.35817 10.5 1.8V3ZM6.5 3H9.5L9.5 2L6.5 2V3ZM4 4V14H12V4H4Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">delete</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 11H7.5V13H3V14H13V13H8.5V11H13.5C14.0523 11 14.5 10.5523 14.5 10V3C14.5 2.44772 14.0523 2 13.5 2H2.5C1.94771 2 1.5 2.44772 1.5 3V10C1.5 10.5523 1.94772 11 2.5 11ZM2.5 3L13.5 3V10L2.5 10L2.5 3Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">desktop</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.98714 5.32938C7.44495 5.78719 7.44495 6.52946 6.98714 6.98728C6.52932 7.4451 5.78705 7.4451 5.32923 6.98728C4.87141 6.52946 4.87141 5.78719 5.32923 5.32938C5.78705 4.87156 6.52932 4.87156 6.98714 5.32938Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2 7.72999C1.99999 7.99522 2.10535 8.24958 2.29289 8.43713L8.20507 14.3493C8.5956 14.7398 9.22876 14.7398 9.61929 14.3493L14.3493 9.6193C14.7398 9.22877 14.7399 8.59561 14.3493 8.20508L8.43714 2.29289C8.2496 2.10535 7.99524 2 7.73002 2L2.00017 2.00005L2 7.72999ZM7.69424 4.62227C8.54259 5.47061 8.54259 6.84605 7.69424 7.69439C6.8459 8.54273 5.47047 8.54273 4.62212 7.69439C3.77378 6.84605 3.77378 5.47061 4.62212 4.62227C5.47047 3.77393 6.8459 3.77393 7.69424 4.62227Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">discount-filled</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.83885 5.01035C7.0578 4.2293 5.79147 4.2293 5.01042 5.01035C4.22937 5.7914 4.22937 7.05773 5.01042 7.83877C5.79147 8.61982 7.0578 8.61982 7.83885 7.83877C8.6199 7.05773 8.6199 5.7914 7.83885 5.01035ZM7.13174 5.71745C7.52227 6.10798 7.52227 6.74114 7.13174 7.13167C6.74122 7.52219 6.10805 7.52219 5.71753 7.13167C5.32701 6.74114 5.32701 6.10798 5.71753 5.71745C6.10805 5.32693 6.74122 5.32693 7.13174 5.71745Z" fill="currentColor" fill-opacity="0.9"/>
    <path d="M2 7.94985L2.00002 2L7.94975 2.0001C8.21497 2.0001 8.46931 2.10546 8.65685 2.29299L14.7903 8.42646C15.1808 8.81698 15.1808 9.45014 14.7903 9.84067L9.84057 14.7904C9.45004 15.1809 8.81688 15.1809 8.42635 14.7904L2.29289 8.65696C2.10536 8.46942 2 8.21507 2 7.94985ZM7.94974 3.0001L3.00002 3.00002L3 7.94985L9.13346 14.0833L14.0832 9.13356L7.94974 3.0001Z" fill="currentColor" fill-opacity="0.9"/>
</svg>
    
    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">discount</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.2636 5.81387L8.5 9.57746L8.49998 0.5L7.49998 0.500002L7.5 9.57746L3.73641 5.81387L3.02931 6.52098L7.64645 11.1381C7.84171 11.3334 8.15829 11.3334 8.35355 11.1381L12.9707 6.52098L12.2636 5.81387Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2 11V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V11H13V13H3V11H2Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">download</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M14.1321 4.95049L10.8888 1.70711L11.5959 1L14.8393 4.24338L14.1321 4.95049Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M5.97196 13.1108L2.359 13.8334C2.14909 13.8754 1.96401 13.6903 2.00599 13.4804L2.72858 9.86742L10.0262 2.56982L13.2696 5.8132L5.97196 13.1108ZM11.8554 5.8132L10.0262 3.98403L3.64979 10.3604L3.19249 12.6469L5.47895 12.1896L11.8554 5.8132Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M15 11H11V12H15V11Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M15 13H8.5V14H15V13Z" fill="currentColor" fill-opacity="0.9"/>
</g>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">edit-1</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.8819 1.73695L14.1253 4.98033L14.8324 4.27322L11.589 1.02985L10.8819 1.73695Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2.35217 13.8632L5.96513 13.1406L13.2627 5.84304L10.0194 2.59966L2.72175 9.89727L1.99916 13.5102C1.95717 13.7201 2.14225 13.9052 2.35217 13.8632ZM10.0194 4.01388L11.8485 5.84304L5.47212 12.2194L3.18566 12.6767L3.64295 10.3903L10.0194 4.01388Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">edit</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 9C2.44775 9 2 8.55228 2 8C2 7.44772 2.44775 7 3 7C3.55225 7 4 7.44772 4 8C4 8.55228 3.55225 9 3 9Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M7 8C7 8.55228 7.44775 9 8 9C8.55225 9 9 8.55228 9 8C9 7.44772 8.55225 7 8 7C7.44775 7 7 7.44772 7 8Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M12 8C12 8.55228 12.4478 9 13 9C13.5522 9 14 8.55228 14 8C14 7.44772 13.5522 7 13 7C12.4478 7 12 7.44772 12 8Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">ellipsis</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.0001 4V10H4.20718L5.85363 8.35355L5.14652 7.64645L2.64652 10.1464C2.45126 10.3417 2.45126 10.6583 2.64652 10.8536L5.14652 13.3536L5.85363 12.6464L4.20718 11H13.0001C13.5524 11 14.0001 10.5523 14.0001 10V4H13.0001Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">enter</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 8C15 4.13401 11.866 1 8 1C4.13401 0.999998 1 4.134 1 8C0.999998 11.866 4.134 15 8 15C11.866 15 15 11.866 15 8ZM8.5 4.0003V9.49999H7.5V4.0003H8.5ZM7.39429 11H8.59429V12.2H7.39429V11Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">error-circle-filled</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 4.00037V9.5H7.5V4.00037H8.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8.59424 10.5H7.39429V11.7H8.59424V10.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M15 8C15 4.13403 11.866 1 8 1C4.13403 1 1 4.13403 1 8C1 11.866 4.13403 15 8 15C11.866 15 15 11.866 15 8ZM14 8C14 11.3137 11.3137 14 8 14C4.68628 14 2 11.3137 2 8C2 4.68628 4.68628 2 8 2C11.3137 2 14 4.68628 14 8Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">error-circle</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.49975 2H7.49975V11H8.49975V2ZM8.60137 12.8H7.40137V14H8.60137V12.8Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">error</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 1C3.44386 1 3 1.44386 3 2V13C3 13.5561 3.44386 14 4 14H8.53613V13H4V2H8V6H12V8.48438H13V5.70711C13 5.44189 12.8946 5.18754 12.7071 5L12.6246 4.91753L12.6236 4.91644L8.91355 1.20645C8.82878 1.12167 8.72835 1.07544 8.62863 1.05804C8.52186 1.01999 8.40841 1 8.29289 1H4ZM11.2929 5H9V2.70711L11.2929 5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M12 15V13H10V12H12V10H13V12H15V13H13V15H12Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">file-add</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.99995 1.92191C3.99995 1.33727 4.52001 1 4.9953 1H9.36584C9.63437 1 9.89162 1.108 10.0797 1.29969L13.7139 5.00415C13.8972 5.19093 13.9999 5.44209 14.0001 5.70375L14.0046 12.0777C14.0046 12.6624 13.4846 13 13.0093 13H4.99995C4.52472 13 4.00474 12.6628 4.00461 12.0783L3.99995 1.92191ZM4.99999 2L5.00457 12H13.0046L13.0003 6.01275H9.00004V2H4.99999ZM10 2.64645V5.01275H12.3215L10 2.64645Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2 5.00001V14.0128C2 14.565 2.44772 15.0128 3 15.0128H11V14.0128L3 14.0128V5.00001H2Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">file-copy</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 1.99988V13.9999H8V14.9999H3.49534C3.02005 14.9999 2.5 14.6626 2.5 14.078V1.92179C2.5 1.33715 3.02005 0.999878 3.49534 0.999878H8.86589C9.13442 0.999878 9.39167 1.10788 9.57972 1.29957L13.2138 5.00388C13.3973 5.19083 13.5 5.44229 13.5 5.70419V7.49988H12.5V6.01263H8.50008V1.99988H3.5ZM9.50008 2.64633V5.01263H11.8215L9.50008 2.64633Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M10.3363 9.79198L10.3363 8.95227L9.3363 8.95228L9.33631 9.79198C9.33631 10.05 9.42442 10.3004 9.58607 10.5015L10.7767 11.9832L9.58607 13.4649C9.42442 13.666 9.33631 13.9164 9.33631 14.1744L9.33631 15.0141L10.3363 15.0141L10.3363 14.1744C10.3363 14.1442 10.3466 14.1148 10.3656 14.0913L11.4181 12.7814L12.4707 14.0913C12.4896 14.1148 12.5 14.1442 12.5 14.1744V15.0141H13.5V14.1744C13.5 13.9164 13.4119 13.666 13.2502 13.4649L12.0596 11.9832L13.2502 10.5015C13.4119 10.3004 13.5 10.05 13.5 9.79198V8.95227H12.5V9.79198C12.5 9.82222 12.4896 9.85155 12.4707 9.87512L11.4181 11.185L10.3656 9.87512C10.3466 9.85155 10.3363 9.82222 10.3363 9.79198Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">file-excel</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 2V14H11.2336V15H3.49534C3.02005 15 2.5 14.6627 2.5 14.0781V1.92191C2.5 1.33727 3.02005 1 3.49534 1H8.86589C9.13442 1 9.39167 1.108 9.57972 1.29969L13.2138 5.004C13.3973 5.19096 13.5 5.44241 13.5 5.70431V7.5H12.5V6.01275H8.50008V2H3.5ZM9.50008 5.01275H11.8215L9.50008 2.64645V5.01275Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M4.48145 9H6.48145V9.8H5.88145V12.2H6.48145V13H4.48145V12.2H5.08145V9.8H4.48145V9Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8.99999 9H7.79246C7.35479 9 6.99999 9.35817 6.99999 9.8V12.2C6.99999 12.6418 7.35479 13 7.79246 13H8.99999V12.2H7.79246V9.8H8.99999V9Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M13.7972 9.8L13.7972 13H13L13 9H14.7434C15.1837 9 15.5406 9.35817 15.5406 9.8V13H14.7434V9.8H13.7972Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M9.5 9.80928L9.5 12.201C9.5 12.6413 9.85693 12.9982 10.2972 12.9982H11.4931C11.9334 12.9982 12.2903 12.6413 12.2903 12.201V9.80928C12.2903 9.36899 11.9334 9.01205 11.4931 9.01205H10.2972C9.85693 9.01205 9.5 9.36899 9.5 9.80928ZM10.2972 12.201L10.2972 9.80928H11.4931V12.201H10.2972Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">file-icon</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.57127 1C3.09598 1 2.57593 1.33727 2.57593 1.92191V14.0781C2.57593 14.6627 3.09598 15 3.57127 15H12.5048C12.9801 15 13.5001 14.6627 13.5001 14.0781V5.70431C13.5001 5.44241 13.3974 5.19096 13.214 5.004L9.57985 1.29969C9.3918 1.108 9.13455 1 8.86601 1H3.57127ZM3.57593 11.3636V2H8.57604V6.0092H12.5001V10.2878L10.5759 8.3636L7.57593 11.3636L5.57593 9.3636L3.57593 11.3636ZM3.57593 12.6364L5.57593 10.6364L6.93953 12L4.93953 14H3.57593V12.6364ZM10.5759 9.6364L12.5001 11.5606V14H6.21232L10.5759 9.6364ZM11.8182 5.0092H9.57604V2.72374L11.8182 5.0092Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">file-image</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 11.5H5V12.5H11V11.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2.5 1.92191C2.5 1.33727 3.02005 1 3.49534 1L8.7929 1.00007C9.05812 1.00007 9.31246 1.10543 9.5 1.29296L13.2071 5.00007C13.3946 5.18761 13.5 5.44196 13.5 5.70718V14.0782C13.5 14.6628 12.9799 15.0001 12.5047 15.0001L3.49534 15C3.02005 15 2.5 14.6627 2.5 14.0781V1.92191ZM3.5 2V14L12.5 14.0001V6.01283H8.50005V2.00007L3.5 2ZM9.50005 5.01283H11.8056L9.50005 2.70722V5.01283Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">file-paste</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 14V2H8.50008V6.01275H12.5V7.5H13.5V5.70431C13.5 5.44241 13.3973 5.19096 13.2138 5.004L9.57972 1.29969C9.39167 1.108 9.13442 1 8.86589 1H3.49534C3.02005 1 2.5 1.33727 2.5 1.92191V14.0781C2.5 14.6627 3.02005 15 3.49534 15H12V14H3.5ZM11.8215 5.01275H9.50008V2.64645L11.8215 5.01275Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8.37695 9H10.2384C10.7216 9 11.1134 9.39175 11.1134 9.875V12.1064C11.1134 12.5897 10.7216 12.9814 10.2384 12.9814H8.37695V9ZM9.12695 9.75V12.2314H10.2384C10.3074 12.2314 10.3634 12.1755 10.3634 12.1064L10.3634 9.875C10.3634 9.80596 10.3074 9.75 10.2384 9.75H9.12695Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M5 9.00593H6.86142C7.34467 9.00593 7.73642 9.39768 7.73642 9.88093V10.9327C7.73642 11.416 7.34467 11.8077 6.86142 11.8077H5.75V12.9977H5V9.00593ZM5.75 11.0577H6.86142C6.93046 11.0577 6.98642 11.0017 6.98642 10.9327V9.88093C6.98642 9.81189 6.93046 9.75593 6.86142 9.75593H5.75V11.0577Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M11.7539 12.9977H12.5039V11.4166H14.1153V10.6666H12.5039V9.75005H14.1153V9.00005H11.7539V12.9977Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">file-pdf</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 2V14H8V15H3.49534C3.02005 15 2.5 14.6627 2.5 14.0781V1.92191C2.5 1.33727 3.02005 1 3.49534 1H8.86589C9.13442 1 9.39167 1.108 9.57972 1.29969L13.2138 5.004C13.3973 5.19096 13.5 5.44241 13.5 5.70431V7.5H12.5V6.01275H8.50008V2H3.5ZM9.50008 2.64645V5.01275H11.8215L9.50008 2.64645Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M12.5 8.5H9.5V15H10.5V12.5H12.5C13.0523 12.5 13.5 12.0523 13.5 11.5V9.5C13.5 8.94772 13.0523 8.5 12.5 8.5ZM12.5 11.5H10.5V9.5H12.5V11.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">file-powerpoint</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 2V14H9V15H3.49534C3.02005 15 2.5 14.6627 2.5 14.0781V1.92191C2.5 1.33727 3.02005 1 3.49534 1H8.78616C9.05469 1 9.31194 1.108 9.5 1.29969L13.1341 5.004C13.3175 5.19096 13.4203 5.44241 13.4203 5.70431V7.5H12.4203V6.01275H8.42036V2H3.5ZM9.42036 2.64645V5.01275H11.7418L9.42036 2.64645Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M11.4203 8.42065C10.3495 8.42065 9.42028 9.24178 9.42028 10.3222H10.4203C10.4203 9.85692 10.8368 9.42065 11.4203 9.42065C12.0038 9.42065 12.4203 9.85692 12.4203 10.3222C12.4203 10.6216 12.1402 10.9812 11.7014 11.1477L11.699 11.1487C11.2559 11.3196 10.9203 11.7405 10.9203 12.2599V12.9207H11.9203V12.2599C11.9203 12.1949 11.9616 12.1195 12.0579 12.0821C12.7159 11.8317 13.4203 11.1914 13.4203 10.3222C13.4203 9.24178 12.491 8.42065 11.4203 8.42065Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M11.4202 13.8C11.0888 13.8 10.8202 14.0686 10.8202 14.4C10.8202 14.7314 11.0888 15 11.4202 15C11.7515 15 12.0202 14.7314 12.0202 14.4C12.0202 14.0686 11.7515 13.8 11.4202 13.8Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">file-unknown</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 2.00006V14.0001H6.5V15.0001H3.49534C3.02005 15.0001 2.5 14.6628 2.5 14.0781V1.92197C2.5 1.33733 3.02005 1.00006 3.49534 1.00006L8.8658 1C9.13433 1 9.39158 1.108 9.57964 1.29969L13.2138 5.004C13.3972 5.19096 13.4999 5.44241 13.4999 5.70431V8H12.4999V6.01275H8.5V2L3.5 2.00006ZM9.5 2.64645V5.01275H11.8215L9.5 2.64645Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M9 14L9 9.5H8L8 14C8 14.5523 8.44772 15 9 15H12.5C13.0523 15 13.5 14.5523 13.5 14V9.5H12.5L12.5 14H11.25L11.25 9.5H10.25L10.25 14H9Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">file-word</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.49534 1C3.02005 1 2.5 1.33727 2.5 1.92191V14.0781C2.5 14.6627 3.02005 15 3.49534 15L12.5047 15.0001C12.9799 15.0001 13.5 14.6628 13.5 14.0782V5.70718C13.5 5.44196 13.3946 5.18761 13.2071 5.00007L9.5 1.29296C9.31246 1.10543 9.05812 1.00007 8.7929 1.00007L3.49534 1ZM8.50005 2.00007V6.01283H12.5V14.0001L3.5 14V2L8.50005 2.00007ZM9.50005 2.70722L11.8056 5.01283H9.50005V2.70722Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">file</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.00293 2H10.9975C11.5498 2 11.9975 2.44772 11.9975 3C11.9975 3.27469 11.8845 3.53729 11.685 3.72615L8.00004 7.214V12.75L5.00004 15L4.99904 7.214L1.31537 3.72612C0.945188 3.3756 0.902004 2.80934 1.19622 2.40887L1.27681 2.31243C1.46567 2.11298 1.72825 2 2.00293 2ZM10.9975 3H2.00293L6.00004 6.78486L5.99904 12.999L7.00004 12.249V6.78485L10.9975 3Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M10.7071 10L12.1214 11.4143L13.5357 10L14.2428 10.7071L12.8285 12.1214L14.2426 13.5355L13.5355 14.2426L12.1214 12.8285L10.7073 14.2426L10.0002 13.5355L11.4143 12.1214L10 10.7071L10.7071 10Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">filter-clear</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3C2 2.44772 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3V4.78597L9.75 7.28597V14H6.25V7.28597L2 4.78597V3ZM13 3H3V4.21403L7.25 6.71403V13H8.75V6.71403L13 4.21403V3Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">filter</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 2H13.46C13.7582 2 14 2.24177 14 2.54V9.46C14 9.75823 13.7582 10 13.46 10H4V15H3V10L3 2ZM4 3V9H13V3H4Z" fill="currentColor" fill-opacity="0.9"/>
</svg>
    
    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">flag</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 3C1.5 2.44772 1.94772 2 2.5 2H6.0906L8.16202 3.5H13C13.5523 3.5 14 3.94772 14 4.5V8.5H13V4.5H7.83798L5.76655 3L2.5 3V12H8.5V13H2.5C1.94772 13 1.5 12.5523 1.5 12V3Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M12 15V13H10V12H12V10H13V12H15V13H13V15H12Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">folder-add</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 2.74396H6.42857L8.5 4.39468H13.5V3.39468H8.84972L6.77829 1.74396L2.5 1.74396V2.74396Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2.5 4.39466C1.94772 4.39466 1.5 4.84237 1.5 5.39466V13C1.5 13.5523 1.94772 14 2.5 14L13.5 14C14.0523 14 14.5 13.5523 14.5 13V7.04537C14.5 6.49309 14.0523 6.04537 13.5 6.04537H8.17486L6.10343 4.39465L2.5 4.39466ZM2.5 5.39466L5.75371 5.39465L7.82514 7.04537H13.5V13L2.5 13V5.39466Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">folder-open</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 3.5C1.5 2.94771 1.94772 2.5 2.5 2.5H5.42857H5.5906L5.72183 2.59503L7.66202 4H13.5C14.0523 4 14.5 4.44772 14.5 5V13C14.5 13.5523 14.0523 14 13.5 14H2.5C1.94772 14 1.5 13.5523 1.5 13L1.5 3.5ZM5.26655 3.5L2.5 3.5V13H13.5V5H7.5H7.33798L7.20675 4.90497L5.26655 3.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">folder</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 2.5C6 2.22386 6.22386 2 6.5 2H9.5C9.77614 2 10 2.22386 10 2.5V5.5C10 5.77614 9.77614 6 9.5 6H8.5V8H11.5C12.0523 8 12.5 8.44772 12.5 9V10H13.5C13.7761 10 14 10.2239 14 10.5V13.5C14 13.7761 13.7761 14 13.5 14H10.5C10.2239 14 10 13.7761 10 13.5V10.5C10 10.2239 10.2239 10 10.5 10H11.5V9H4.5V10H5.5C5.77614 10 6 10.2239 6 10.5V13.5C6 13.7761 5.77614 14 5.5 14H2.5C2.22386 14 2 13.7761 2 13.5V10.5C2 10.2239 2.22386 10 2.5 10H3.5V9C3.5 8.44772 3.94772 8 4.5 8H7.5V6H6.5C6.22386 6 6 5.77614 6 5.5V2.5ZM7 5H9V3H7V5ZM3 11V13H5V11H3ZM11 11V13H13V11H11Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">fork</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 14L13 2H14L14 14H13Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M10.5 14V6H9.5V14H10.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M3.5 6L3.5 14H2.5V6H3.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M6 14L6 2H7L7 14H6Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">format-horizontal-align-bottom</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 14L13 2H14L14 14H13Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M10.5 12V4H9.5V12H10.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M3.5 4L3.5 12H2.5V4H3.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M6 14L6 2H7L7 14H6Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">format-horizontal-align-center</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 2L2.5 11H3.5L3.5 2H2.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M9.5 11L9.5 2H10.5L10.5 11H9.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M13 14L13 2H14L14 14H13Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M6 14L6 2H7L7 14H6Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">format-horizontal-align-top</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3H14V2H2V3Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M4 6.5H12V5.5H4V6.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M12 13.5H4V12.5H12V13.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2 10H14V9H2V10Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">format-vertical-align-center</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3H14V2H2V3Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2 6.5H11V5.5H2V6.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M11 13.5H2V12.5H11V13.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2 10H14V9H2V10Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">format-vertical-align-left</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3H14V2H2V3ZM5 6.5H14V5.5H5V6.5ZM14 13.5H5V12.5H14V13.5ZM2 10H14V9H2V10Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">format-vertical-align-right</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7579 7.60926C15.0086 7.80943 15.0086 8.19058 14.7579 8.39075L9.12049 12.8914C8.79303 13.1529 8.30854 12.9197 8.30854 12.5007L8.30854 8.23459C8.27912 8.29002 8.23853 8.341 8.18678 8.38412L2.82034 12.8562C2.49468 13.1276 2.00024 12.896 2.00024 12.4721L2.00025 3.5279C2.00025 3.10398 2.49468 2.87241 2.82034 3.1438L8.18678 7.61591C8.23853 7.65903 8.27912 7.71 8.30854 7.76544L8.30854 3.49935C8.30854 3.08033 8.79303 2.84717 9.12049 3.1086L14.7579 7.60926ZM9.30854 4.53833L9.30854 11.4617L13.6445 8.00001L9.30854 4.53833ZM3.00025 4.59544L3.00024 11.4046L7.08567 8.00001L3.00025 4.59544Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">forward</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.50004 5.79293V3.00004L7.50004 3.00004V7.00004C7.50004 7.27618 7.27618 7.50004 7.00004 7.50004L3.00004 7.50004L3.00004 6.50004L5.79293 6.50004L2.14648 2.85359L2.85359 2.14648L6.50004 5.79293Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M9.50004 10.2071V13H8.50004V9.00004C8.50004 8.7239 8.7239 8.50004 9.00004 8.50004H13V9.50004H10.2071L13.8536 13.1465L13.1465 13.8536L9.50004 10.2071Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">fullscreen-exit</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 4.20711V7H2.5V3C2.5 2.72386 2.72386 2.5 3 2.5L7 2.5V3.5H4.2071L7.35355 6.64646L6.64645 7.35357L3.5 4.20711Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M12.5 11.7929V9H13.5V13C13.5 13.2761 13.2761 13.5 13 13.5L9 13.5L9 12.5H11.7929L8.64645 9.35353L9.35355 8.64643L12.5 11.7929Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">fullscreen</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1.67828C6.067 1.67828 4.5 3.24529 4.5 5.17828C4.5 6.94604 5.81055 8.4077 7.51306 8.64468L7.51311 10.0021H5.51315V11.0021H7.51315L7.51329 14.502L8.51329 14.502L8.51315 11.0021H10.5132V10.0021H8.51311L8.51306 8.64095C10.2028 8.39273 11.5 6.93699 11.5 5.17828C11.5 3.24529 9.933 1.67828 8 1.67828ZM8 2.67828C9.38071 2.67828 10.5 3.79757 10.5 5.17828C10.5 6.559 9.38071 7.67828 8 7.67828C6.61929 7.67828 5.5 6.559 5.5 5.17828C5.5 3.79757 6.61929 2.67828 8 2.67828Z" fill="currentColor"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">gender-female</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.9997 3.6C12.9997 3.26863 12.7311 3 12.3997 3H8.99975V4L11.3825 4L7.67208 7.7104C6.29899 6.64114 4.31234 6.73766 3.05003 7.99998C1.68319 9.36682 1.68319 11.5829 3.05003 12.9497C4.41686 14.3166 6.63294 14.3166 7.99978 12.9497C9.23096 11.7185 9.35315 9.79831 8.36634 8.43036L11.9997 4.79693V7H12.9997V3.6ZM3.75714 12.2426C2.78082 11.2663 2.78082 9.6834 3.75714 8.70709C4.73345 7.73078 6.31636 7.73078 7.29267 8.70709C8.26898 9.6834 8.26898 11.2663 7.29267 12.2426C6.31636 13.2189 4.73345 13.2189 3.75714 12.2426Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">gender-male</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 4C3.5 4.5628 3.68597 5.08217 3.99982 5.5H2.5C2.22386 5.5 2 5.72386 2 6V14C2 14.2761 2.22386 14.5 2.5 14.5H13.5C13.7761 14.5 14 14.2761 14 14V6C14 5.72386 13.7761 5.5 13.5 5.5H12.0002C12.314 5.08217 12.5 4.5628 12.5 4C12.5 2.61929 11.3807 1.5 10 1.5C9.1822 1.5 8.45611 1.89267 8 2.49976C7.54388 1.89267 6.8178 1.5 6 1.5C4.61929 1.5 3.5 2.61929 3.5 4ZM11.5 4C11.5 4.82843 10.8284 5.5 10 5.5H8.5V4C8.5 3.17157 9.17157 2.5 10 2.5C10.8284 2.5 11.5 3.17157 11.5 4ZM7.5 6.5V11H8.5V6.5H13V13.5H3V6.5H7.5ZM7.5 5.5H6C5.17157 5.5 4.5 4.82843 4.5 4C4.5 3.17157 5.17157 2.5 6 2.5C6.82843 2.5 7.5 3.17157 7.5 4V5.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">gift</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 6.61283C2 3.69894 5.46385 2.17518 7.61184 4.14417L8 4.49999L8.38816 4.14418C10.5362 2.17518 14 3.69893 14 6.61283C14 7.50101 13.6472 8.35282 13.0191 8.98086L8.14571 13.8543C8.06523 13.9348 7.93477 13.9348 7.85429 13.8543L2.98087 8.98086C2.35283 8.35282 2 7.50101 2 6.61283Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">heart-filled</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 5.85656L9.06389 4.88133C10.5705 3.50029 13 4.56904 13 6.61283C13 7.2358 12.7525 7.83325 12.312 8.27375L8 12.5858L3.68798 8.27376C3.24747 7.83325 3 7.2358 3 6.61283C3 4.56904 5.42952 3.50029 6.93611 4.88133L8 5.85656ZM7.61184 4.14417C5.46385 2.17518 2 3.69894 2 6.61283C2 7.50101 2.35283 8.35282 2.98087 8.98086L7.85429 13.8543C7.93477 13.9348 8.06523 13.9348 8.14571 13.8543L13.0191 8.98086C13.6472 8.35282 14 7.50101 14 6.61283C14 3.69893 10.5362 2.17518 8.38816 4.14418L8 4.49999L7.61184 4.14417Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">heart</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.9944 8C14.9944 4.13401 11.8604 1 7.99439 1C4.12839 0.999998 0.994386 4.134 0.994385 8C0.994383 11.866 4.12839 15 7.99438 15C11.8604 15 14.9944 11.866 14.9944 8ZM5.80273 6.6315C5.80273 5.42262 6.78535 4.44 7.99424 4.44C9.20312 4.44 10.1857 5.42262 10.1857 6.6315C10.1857 7.60163 9.44315 8.35248 8.70124 8.65455C8.58029 8.70488 8.49428 8.82451 8.49428 8.97008V9.7675H7.49428V8.97008C7.49428 8.41041 7.83313 7.931 8.32065 7.7298L8.3232 7.72875C8.81796 7.52775 9.18574 7.07185 9.18574 6.6315C9.18574 5.9749 8.65084 5.44 7.99424 5.44C7.33764 5.44 6.80273 5.9749 6.80273 6.6315H5.80273ZM7.46697 11.1734C7.46697 10.8823 7.70302 10.6462 7.99419 10.6462C8.28537 10.6462 8.52141 10.8823 8.52141 11.1734C8.52141 11.4646 8.28537 11.7007 7.99419 11.7007C7.70302 11.7007 7.46697 11.4646 7.46697 11.1734Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">help-circle-filled</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.39404 11.6C7.39404 11.2686 7.66267 11 7.99404 11C8.32541 11 8.59404 11.2686 8.59404 11.6C8.59404 11.9314 8.32541 12.2 7.99404 12.2C7.66267 12.2 7.39404 11.9314 7.39404 11.6Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M7.99409 4.0061C6.65645 4.0061 5.56909 5.09346 5.56909 6.4311H6.56909C6.56909 5.64574 7.20873 5.0061 7.99409 5.0061C8.77945 5.0061 9.41909 5.64574 9.41909 6.4311C9.41909 6.96885 8.9746 7.50808 8.39445 7.74376L8.3919 7.74481C7.86235 7.96335 7.49414 8.48413 7.49414 9.0925V10H8.49414V9.0925C8.49414 8.89828 8.60945 8.73731 8.77236 8.66961C9.59969 8.33289 10.4191 7.49869 10.4191 6.4311C10.4191 5.09346 9.33173 4.0061 7.99409 4.0061Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M14.9941 8C14.9941 4.13401 11.8601 1 7.99414 1C4.12815 0.999998 0.994142 4.134 0.994141 8C0.994138 11.866 4.12815 15 7.99414 15C11.8601 15 14.9941 11.866 14.9941 8ZM13.9941 8C13.9941 11.3137 11.3078 14 7.99414 14C4.68043 14 1.99414 11.3137 1.99414 8C1.99414 4.68629 4.68043 2 7.99414 2C11.3079 2 13.9941 4.68629 13.9941 8Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">help-circle</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2.5C6.10262 2.5 4.5 3.94793 4.5 5.8H5.5C5.5 4.56407 6.58881 3.5 8 3.5C9.41119 3.5 10.5 4.56407 10.5 5.8C10.5 6.68407 9.72532 7.55083 8.73987 7.92448L8.73742 7.92542C8.02449 8.20003 7.5 8.86853 7.5 9.68V11H8.5V9.68C8.5 9.32382 8.72935 9.0006 9.09579 8.859C10.3042 8.40029 11.5 7.25137 11.5 5.8C11.5 3.94793 9.89738 2.5 8 2.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8 12C7.58579 12 7.25 12.3358 7.25 12.75C7.25 13.1642 7.58579 13.5 8 13.5C8.41421 13.5 8.75 13.1642 8.75 12.75C8.75 12.3358 8.41421 12 8 12Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">help</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.90582 2.79339C10.8499 2.79339 13.2095 5.14005 13.2095 8.00171C13.2095 10.8634 10.8499 13.21 7.90581 13.21C5.44426 13.21 3.39128 11.5695 2.78447 9.35914L1.75098 9.52779C2.44243 12.2419 4.93584 14.2517 7.90581 14.2517C11.4103 14.2517 14.2512 11.4535 14.2512 8.00171C14.2512 4.54993 11.4103 1.75171 7.90582 1.75171C5.80622 1.75171 3.9448 2.75613 2.78981 4.30376L2.78981 2.64486H1.75098V5.79135C1.75098 6.0675 1.97483 6.29135 2.25098 6.29135L5.37759 6.29135V5.24683H3.40454C4.33896 3.77685 5.99992 2.79339 7.90582 2.79339Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M6.99951 5.5V8.38893L9.64596 11.0354L10.3531 10.3283L7.99951 7.97471V5.5H6.99951Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">history</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00004 11V12H10V11H6.00004Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M7.64648 1.64646C7.84175 1.4512 8.15833 1.4512 8.35359 1.64646L14.8536 8.14646L14.1465 8.85357L13 7.70712V13.5C13 14.0523 12.5523 14.5 12 14.5H4.00004C3.44775 14.5 3.00004 14.0523 3.00004 13.5V7.70712L1.85359 8.85357L1.14648 8.14646L7.64648 1.64646ZM8.00004 2.70712L4.00004 6.70712V13.5H12V6.70712L8.00004 2.70712Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">home</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99992 7.11557L12 3.79931V2.5H4V3.79932L7.99992 7.11557ZM3 4.26923V2.5C3 1.94771 3.44772 1.5 4 1.5H12C12.5523 1.5 13 1.94772 13 2.5V4.26923L8.49992 8.00002L13 11.7308V13.5C13 14.0523 12.5523 14.5 12 14.5H4C3.44772 14.5 3 14.0523 3 13.5V11.7308L7.49992 8.00002L3 4.26923ZM4 12.2007V13.5H12V12.2007L7.99992 8.88447L4 12.2007Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">hourglass</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 13V8H3L3 10.2929L6 7.29289L11.7071 13H13L13 3L8 3V2H13C13.5523 2 14 2.44772 14 3L14 13C14 13.5523 13.5523 14 13 14L3 14C2.44772 14 2 13.5523 2 13ZM6 8.70711L3 11.7071L3 13L10.2929 13L6 8.70711Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M12 6C12 7.10457 11.1046 8 10 8C8.89543 8 8 7.10457 8 6C8 4.89543 8.89543 4 10 4C11.1046 4 12 4.89543 12 6ZM11 6C11 5.44772 10.5523 5 10 5C9.44772 5 9 5.44772 9 6C9 6.55228 9.44772 7 10 7C10.5523 7 11 6.55228 11 6Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M6.28208 5.55923L5.57497 6.26634L4.16076 4.85213L2.74654 6.26634L2.03943 5.55923L3.45365 4.14502L2.03943 2.73081L2.74654 2.0237L4.16076 3.43791L5.57497 2.0237L6.28208 2.73081L4.86786 4.14502L6.28208 5.55923Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">image-error</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 8C11.1046 8 12 7.10457 12 6C12 4.89543 11.1046 4 10 4C8.89543 4 8 4.89543 8 6C8 7.10457 8.89543 8 10 8ZM10 7C10.5523 7 11 6.55228 11 6C11 5.44772 10.5523 5 10 5C9.44772 5 9 5.44772 9 6C9 6.55228 9.44772 7 10 7Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2 13C2 13.5523 2.44772 14 3 14L13 14C13.5523 14 14 13.5523 14 13L14 3C14 2.44772 13.5523 2 13 2H3C2.44772 2 2 2.44771 2 3V13ZM3 11.7071L6 8.70711L10.2929 13L3 13L3 11.7071ZM3 10.2929L3 3L13 3L13 13H11.7071L6 7.29289L3 10.2929Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">image</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM7.3999 4H8.59985V5.19995H7.3999V4ZM7.50562 6.5H8.50562V11.9998H7.50562V6.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">info-circle-filled</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.50562 11.9998V6.5H8.50562V11.9998H7.50562Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8.59985 4H7.3999V5.19995H8.59985V4Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M1 8C1 11.866 4.13403 15 8 15C11.866 15 15 11.866 15 8C15 4.13403 11.866 1 8 1C4.13403 1 1 4.13403 1 8ZM2 8C2 4.68628 4.68628 2 8 2C11.3137 2 14 4.68628 14 8C14 11.3137 11.3137 14 8 14C4.68628 14 2 11.3137 2 8Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">info-circle</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.1001 7.9C1.1001 4.08927 4.18928 1.00005 8 1C11.8108 1 14.9001 4.08923 14.9001 7.9V8.1C14.9001 11.9108 11.8109 15 8.0001 15C4.18938 14.9999 1.1001 11.9107 1.1001 8.1V7.9ZM13.8868 8.5H10.8869C10.7905 10.419 10.1384 12.3152 8.93067 13.927C11.6183 13.5012 13.7019 11.2606 13.8868 8.5ZM10.8869 7.5H13.8868C13.7019 4.73941 11.6183 2.4988 8.93067 2.07297C10.1384 3.68475 10.7905 5.58102 10.8869 7.5ZM9.88552 7.5C9.78624 5.72473 9.15773 3.97354 8 2.50303C6.84227 3.97354 6.21376 5.72473 6.11448 7.5H9.88552ZM5.11307 8.5H2.11344C2.29825 11.2605 4.38178 13.5011 7.06931 13.927C5.8616 12.3152 5.20952 10.419 5.11307 8.5ZM5.11307 7.5C5.20952 5.58103 5.86159 3.68478 7.06931 2.07301C4.38177 2.49893 2.29825 4.73949 2.11344 7.5H5.11307ZM9.88552 8.5H6.11448C6.21376 10.2753 6.84227 12.0265 8 13.497C9.15773 12.0265 9.78624 10.2753 9.88552 8.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">internet</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.29329 13.7067C2.48075 13.8942 2.73489 13.9996 3 14H13C13.2651 13.9996 13.5193 13.8942 13.7067 13.7067C13.8942 13.5193 13.9996 13.2651 14 13V8.5H13V13H3V3H7.5V2H3C2.73489 2.00036 2.48075 2.10583 2.29329 2.29329C2.10583 2.48075 2.00036 2.73489 2 3V13C2.00036 13.2651 2.10583 13.5193 2.29329 13.7067Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M9 3V2H13.5C13.7761 2 14 2.22386 14 2.5V7H13V3.707L8.707 8L8 7.293L12.293 3H9Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">jump</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 12C1.94771 12 1.5 11.5523 1.5 11V4C1.5 3.44772 1.94772 3 2.5 3L13.5 3C14.0523 3 14.5 3.44772 14.5 4V11C14.5 11.5523 14.0523 12 13.5 12H2.5ZM2.5 11L13.5 11V4L2.5 4V11Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M15 13H1V14H15V13Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">laptop</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0731 4.97791L7.99976 7.50841L1.92641 4.97791C1.51598 4.8069 1.51598 4.20041 1.92641 4.0294L7.99976 1.4989L14.0731 4.0294C14.4835 4.20041 14.4835 4.8069 14.0731 4.97791ZM3.42727 4.50366L7.99976 6.40881L12.5722 4.50366L7.99976 2.5985L3.42727 4.50366Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M1.49902 7.02665V8.25379L8.00001 11.1119L14.499 8.25466V7.02752L8.00001 9.8848L1.49902 7.02665Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M1.49902 10.4194V11.6466L8.00011 14.5048L14.499 11.6475V10.4204L8.00011 13.2776L1.49902 10.4194Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">layers</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 1.99994L6 3.99994L7 3.99994V1.99994H6Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8.1767 9.59098L5.8786 11.8891C5.39045 12.3772 4.59899 12.3772 4.11084 11.8891C3.62268 11.4009 3.62268 10.6095 4.11084 10.1213L6.40893 7.82321L5.70183 7.11611L3.40373 9.4142C2.52505 10.2929 2.52505 11.7175 3.40373 12.5962C4.28241 13.4749 5.70703 13.4749 6.58571 12.5962L8.88381 10.2981L8.1767 9.59098Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M9.59091 8.17677L10.298 8.88387L12.5961 6.58578C13.4748 5.7071 13.4748 4.28248 12.5961 3.4038C11.7174 2.52512 10.2928 2.52512 9.41414 3.4038L7.11604 5.70189L7.82315 6.409L10.1212 4.1109C10.6094 3.62275 11.4009 3.62275 11.889 4.1109C12.3772 4.59906 12.3772 5.39051 11.889 5.87867L9.59091 8.17677Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M12 8.99988H14V9.99988H12V8.99988Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2 6.99994H4V5.99994H2V6.99994Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M10 11.9999V13.9999H9L9 11.9999H10Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M11.7322 11.025L13.3536 12.6463L12.6464 13.3534L11.0251 11.7321L11.7322 11.025Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2.64645 3.35343L4.26777 4.97475L4.97487 4.26765L3.35355 2.64632L2.64645 3.35343Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">link-unlink</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.23229 11.8891L8.35361 9.76776L9.06072 10.4749L6.9394 12.5962C5.96309 13.5725 4.38017 13.5725 3.40386 12.5962C2.42755 11.6199 2.42755 10.037 3.40386 9.06066L5.52518 6.93934L6.23229 7.64644L4.11097 9.76776C3.52518 10.3536 3.52518 11.3033 4.11097 11.8891C4.69676 12.4749 5.6465 12.4749 6.23229 11.8891Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M10.4749 9.06066L9.76783 8.35355L11.8891 6.23223C12.4749 5.64644 12.4749 4.6967 11.8891 4.11091C11.3034 3.52512 10.3536 3.52512 9.76782 4.11091L7.6465 6.23223L6.9394 5.52512L9.06072 3.4038C10.037 2.42749 11.6199 2.42749 12.5963 3.4038C13.5726 4.38011 13.5726 5.96303 12.5963 6.93934L10.4749 9.06066Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M9.06087 6.23225L6.23244 9.06068L6.93955 9.76778L9.76798 6.93936L9.06087 6.23225Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">link</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1.5C4.41038 1.5 1.5 4.41038 1.5 8C1.5 11.5896 4.41038 14.5 8 14.5V12.875C5.30761 12.875 3.125 10.6924 3.125 8C3.125 5.30761 5.30761 3.125 8 3.125C10.6924 3.125 12.875 5.30761 12.875 8H14.5C14.5 4.41038 11.5896 1.5 8 1.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">loading</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5001 5.99999C10.5001 7.3807 9.3808 8.49999 8.00009 8.49999C6.61938 8.49999 5.50009 7.3807 5.50009 5.99999C5.50009 4.61928 6.61938 3.49999 8.00009 3.49999C9.3808 3.49999 10.5001 4.61928 10.5001 5.99999ZM9.50009 5.99999C9.50009 5.17156 8.82852 4.49999 8.00009 4.49999C7.17166 4.49999 6.50009 5.17156 6.50009 5.99999C6.50009 6.82842 7.17166 7.49999 8.00009 7.49999C8.82852 7.49999 9.50009 6.82842 9.50009 5.99999Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8.36196 14.4684C8.18821 14.7236 7.81196 14.7236 7.63822 14.4684L3.85557 8.91174C2.50041 6.92103 2.75204 4.24804 4.45488 2.54519C6.41284 0.587231 9.58733 0.58723 11.5453 2.54519C13.2481 4.24804 13.4998 6.92103 12.1446 8.91174L8.36196 14.4684ZM11.318 8.34901C12.4028 6.75536 12.2014 4.61551 10.8382 3.2523C9.27075 1.68486 6.72943 1.68486 5.16199 3.2523C3.79878 4.61551 3.59735 6.75536 4.68221 8.34901L8.00009 13.2229L11.318 8.34901Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">location</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 11V10H10V11H6Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M4.5 6V5C4.5 3.067 6.067 1.5 8 1.5C9.933 1.5 11.5 3.067 11.5 5H10.5C10.5 3.61929 9.38071 2.5 8 2.5C6.61929 2.5 5.5 3.61929 5.5 5V6H13C13.2761 6 13.5 6.22386 13.5 6.5V13.5C13.5 13.7761 13.2761 14 13 14H3C2.72386 14 2.5 13.7761 2.5 13.5V6.5C2.5 6.22386 2.72386 6 3 6H4.5ZM3.5 13H12.5V7H3.5V13Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">lock-off</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9.99999V11H10V9.99999H6Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M4.5 4.99084V5.99998H3C2.72386 5.99998 2.5 6.22384 2.5 6.49998V13.5C2.5 13.7761 2.72386 14 3 14H13C13.2761 14 13.5 13.7761 13.5 13.5V6.49998C13.5 6.22384 13.2761 5.99998 13 5.99998H11.5V4.99084C11.5 3.05785 9.933 1.49084 8 1.49084C6.067 1.49084 4.5 3.05785 4.5 4.99084ZM10.5 5.99998H5.5V4.99084C5.5 3.61013 6.61929 2.49084 8 2.49084C9.38071 2.49084 10.5 3.61013 10.5 4.99084V5.99998ZM3.5 6.99998H12.5V13H3.5V6.99998Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">lock-on</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.47744 7.49999L6.23166 5.25421L6.93877 4.5471L10.0381 7.64644C10.2334 7.8417 10.2334 8.15828 10.0381 8.35355L6.93877 11.4529L6.23166 10.7458L8.47745 8.49999L1 8.49998L1 7.49997L8.47744 7.49999Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M4.00006 5V3H12.0001V13H4.00006V11H3.00006V13.5C3.00006 13.7761 3.22391 14 3.50006 14H12.5001C12.7762 14 13.0001 13.7761 13.0001 13.5V2.5C13.0001 2.22386 12.7762 2 12.5001 2H3.50006C3.22391 2 3.00006 2.22386 3.00006 2.5V5H4.00006Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">login</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.31701 8.37857C5.31701 8.00808 5.61735 7.70773 5.98784 7.70773C6.35833 7.70773 6.65868 8.00808 6.65868 8.37857C6.65868 8.74906 6.35833 9.0494 5.98784 9.0494C5.61735 9.0494 5.31701 8.74906 5.31701 8.37857Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M10.0129 7.70773C9.64236 7.70773 9.34202 8.00808 9.34202 8.37857C9.34202 8.74906 9.64236 9.0494 10.0129 9.0494C10.3833 9.0494 10.6837 8.74906 10.6837 8.37857C10.6837 8.00808 10.3833 7.70773 10.0129 7.70773Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2.31638 4L3.9958 5.67942C5.11346 4.84654 6.49933 4.35355 8.00035 4.35355C9.50137 4.35355 10.8872 4.84654 12.0049 5.67942L13.6843 4L14.3914 4.70711L12.762 6.33656C13.8933 7.47647 14.618 9.02038 14.7008 10.7327C14.706 10.8418 14.7087 10.9515 14.7087 11.0619V11.7327H1.29199V11.0619C1.29199 10.9515 1.29466 10.8418 1.29993 10.7327C1.38266 9.02038 2.10744 7.47647 3.23872 6.33656L1.60927 4.70711L2.31638 4ZM2.30132 10.7327H13.6994C13.5288 7.73328 11.0425 5.35355 8.00035 5.35355C4.95819 5.35355 2.47185 7.73328 2.30132 10.7327Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">logo-android</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6858 1C10.7724 1.78958 10.4538 2.58273 9.98364 3.15353C9.51181 3.72324 8.73978 4.1671 7.98282 4.10843C7.88056 3.33311 8.26219 2.52735 8.69865 2.02125C9.18583 1.45099 10.0072 1.02742 10.6858 1Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M13.1277 5.60474C12.9822 5.69544 11.6658 6.51624 11.6822 8.16735C11.7001 10.1607 13.3917 10.8541 13.4878 10.8935C13.4901 10.8945 13.4919 10.8952 13.4919 10.8952C13.491 10.8979 13.4893 10.9033 13.4868 10.9115C13.4444 11.0464 13.1713 11.9167 12.5576 12.8138C11.9956 13.6358 11.413 14.4533 10.494 14.47C10.0522 14.4785 9.75708 14.3508 9.45018 14.218C9.1291 14.0791 8.79514 13.9346 8.26696 13.9346C7.71347 13.9346 7.36398 14.0836 7.02734 14.2271C6.73567 14.3514 6.45365 14.4716 6.05696 14.4873C5.17032 14.521 4.49451 13.5998 3.92782 12.7812C2.76867 11.1063 1.88341 8.04809 3.07299 5.98448C3.66244 4.95912 4.71823 4.30991 5.86367 4.29291C6.35713 4.28421 6.83526 4.47406 7.25372 4.64022C7.57365 4.76725 7.8587 4.88043 8.08903 4.88043C8.29595 4.88043 8.57336 4.77102 8.89682 4.64344C9.40607 4.44259 10.0295 4.19671 10.6716 4.26193C11.1111 4.28002 12.3459 4.43904 13.1385 5.59791C13.1364 5.59931 13.1328 5.60158 13.1277 5.60474Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">logo-apple-filled</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.29006 4.00804C8.39216 4.00804 8.49363 4.00196 8.59399 3.99C9.16299 3.92218 9.69626 3.66534 10.1056 3.25603C10.5149 2.84672 10.7717 2.31345 10.8395 1.74445C10.8515 1.64409 10.8576 1.54262 10.8576 1.44052V1H10.4171C10.315 1 10.2135 1.00608 10.1131 1.01804C9.54414 1.08586 9.01086 1.3427 8.60155 1.75201C8.19224 2.16132 7.9354 2.69459 7.86759 3.26359C7.85565 3.36373 7.84957 3.46497 7.84954 3.56684V4.00804H8.29006ZM9.57917 2.72962C9.3173 2.99149 8.98397 3.16546 8.62502 3.23256C8.69212 2.87361 8.86609 2.54028 9.12796 2.27842C9.38982 2.01655 9.72315 1.84258 10.0821 1.77548C10.015 2.13443 9.84103 2.46776 9.57917 2.72962Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M12.6931 5.08954C12.9171 5.26573 13.133 5.48579 13.3255 5.76088C13.3038 5.77264 13.1447 5.86243 12.9359 6.03364C12.4712 6.41459 11.7606 7.19865 11.7714 8.42318C11.7947 10.547 13.6752 11.2524 13.6985 11.26C13.6952 11.2714 13.6793 11.3244 13.6496 11.4103C13.5986 11.5579 13.5068 11.8027 13.3675 12.1011C13.2101 12.4383 12.992 12.8439 12.7039 13.2548C12.1055 14.1119 11.4839 14.9614 10.5047 14.9765C10.0319 14.9877 9.71618 14.8546 9.38781 14.7161C9.04705 14.5723 8.69261 14.4228 8.13464 14.4228C7.54173 14.4228 7.16869 14.5783 6.80938 14.7281C6.49998 14.857 6.20075 14.9817 5.78009 14.9993C4.83205 15.0296 4.11714 14.0739 3.51102 13.2244C2.27546 11.4799 1.33519 8.30941 2.60183 6.16288C3.23127 5.09341 4.35026 4.41836 5.57028 4.40319C6.09584 4.39025 6.60635 4.58803 7.05329 4.76118C7.39273 4.89268 7.69551 5.00998 7.94037 5.00998C8.15548 5.00998 8.43608 4.90234 8.76801 4.77501C9.29941 4.57115 9.96241 4.31682 10.699 4.37285C11.0542 4.39635 11.9224 4.48359 12.6931 5.08954ZM10.6393 5.27485L10.6304 5.27426C10.2284 5.24369 9.82647 5.34827 9.38919 5.507C9.32293 5.53106 9.22662 5.56773 9.12493 5.60646C8.98504 5.65974 8.83454 5.71706 8.73726 5.75104C8.53876 5.82038 8.24562 5.91396 7.94037 5.91396C7.64946 5.91396 7.37621 5.83645 7.1757 5.76982C7.02455 5.71959 6.85603 5.65429 6.70724 5.59663C6.65817 5.57762 6.61125 5.55943 6.5678 5.5429C6.16487 5.38953 5.86112 5.30028 5.59251 5.30689L5.58152 5.30709C4.6936 5.31813 3.85761 5.81141 3.38037 6.62229C2.89586 7.44337 2.79895 8.5289 3.00766 9.68362C3.21513 10.8314 3.70666 11.9362 4.24784 12.7007C4.55663 13.1335 4.83541 13.5075 5.1276 13.7749C5.41383 14.0368 5.60819 14.0992 5.74752 14.0959C6.00039 14.0845 6.16227 14.0175 6.49116 13.8813L6.53909 13.8615C6.91849 13.7046 7.40861 13.5189 8.13464 13.5189C8.87008 13.5189 9.35948 13.7231 9.72037 13.8752C10.0534 14.0156 10.2133 14.0792 10.4834 14.0728L10.4907 14.0727C10.6923 14.0696 10.8904 13.9891 11.1381 13.7633C11.4046 13.5204 11.6555 13.1772 11.9626 12.7373L11.9638 12.7357C12.2313 12.3543 12.4318 11.9746 12.5733 11.6646C12.4273 11.5619 12.273 11.4401 12.1192 11.297C11.5041 10.7248 10.8824 9.79485 10.8674 8.43311L10.8674 8.4311C10.8572 7.26653 11.3496 6.40488 11.8343 5.84749C11.8825 5.79208 11.9308 5.73937 11.9789 5.68934C11.4696 5.35557 10.9236 5.29366 10.6393 5.27485Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">logo-apple</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0228 4.43168C14.0438 4.46717 14.0442 4.51119 14.0238 4.54704C14.0034 4.58294 13.9653 4.60507 13.9241 4.60507H8.30612C8.30286 4.60507 8.29955 4.60493 8.2963 4.60461C8.19614 4.59607 8.09649 4.59166 8 4.59166C6.44508 4.59166 5.08772 5.64321 4.69917 7.14885C4.68751 7.19397 4.64973 7.22758 4.60355 7.23387C4.59837 7.23456 4.59313 7.23492 4.58799 7.23492C4.54742 7.23492 4.50932 7.21335 4.48866 7.17754L2.5181 3.76427C2.49447 3.72337 2.49832 3.67218 2.52784 3.63527C3.86532 1.96052 5.85984 1 8 1C9.23664 1 10.4522 1.32694 11.515 1.94551C12.5462 2.54562 13.4134 3.40534 14.0228 4.43168Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8 10.6167C6.55745 10.6167 5.38388 9.4431 5.38388 8.00048C5.38388 6.55787 6.55745 5.38421 8 5.38421C9.44246 5.38421 10.6159 6.55787 10.6159 8.00048C10.6159 9.44305 9.44246 10.6167 8 10.6167Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M9.03439 11.3252C9.00589 11.2883 8.95806 11.2725 8.91294 11.2849C8.61655 11.3675 8.30942 11.4093 8 11.4093C6.68533 11.4093 5.47367 10.6382 4.91307 9.44484C4.91169 9.4419 4.91018 9.43906 4.90857 9.43621L2.09755 4.56715C2.07708 4.53157 2.03917 4.50977 1.99818 4.50977C1.95696 4.51 1.9184 4.53226 1.8982 4.56816C1.31062 5.61089 1 6.79777 1 8.00048C1 9.68772 1.60866 11.3175 2.71383 12.5896C3.80803 13.849 5.31443 14.6778 6.95565 14.9234C6.96134 14.9243 6.96703 14.9246 6.97268 14.9246C7.01321 14.9246 7.05131 14.903 7.07201 14.8672L9.04307 11.4529C9.06639 11.4125 9.06294 11.362 9.03439 11.3252Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M10.465 5.37081H14.4113C14.4585 5.37081 14.5009 5.39968 14.5181 5.44366C14.8379 6.25811 15 7.11832 15 8.00048C15 9.85642 14.2811 11.605 12.9757 12.9241C11.6714 14.2421 9.93246 14.9793 8.07941 15H8.07812C8.03741 15 7.99968 14.9784 7.97907 14.9432C7.95828 14.9076 7.95814 14.8636 7.97875 14.8279L10.7946 9.95035C10.7962 9.94755 10.7979 9.94484 10.7998 9.94218C11.1981 9.36956 11.4086 8.69815 11.4086 8.00048C11.4086 7.07889 11.0449 6.21487 10.3846 5.56751C10.3514 5.53492 10.3411 5.48534 10.3587 5.44219C10.3763 5.39904 10.4183 5.37081 10.465 5.37081Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">logo-chrome-filled</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.50019 1.93783C7.84824 0.00483471 12.1294 1.15196 14.0624 4.50001C15.9954 7.84806 14.8482 12.1292 11.5002 14.0622C8.15214 15.9952 3.87101 14.8481 1.93801 11.5C0.00501782 8.15196 1.15214 3.87083 4.50019 1.93783ZM13.4542 5.49839L10.452 5.49837C11.5424 6.56769 11.8338 8.26397 11.078 9.66049L11.0792 9.66116L8.59007 13.9724C9.41475 13.8915 10.2358 13.6375 11.0002 13.1962C13.7062 11.6338 14.7349 8.28186 13.4542 5.49839ZM7.43459 13.9738L8.93933 11.3675C8.81644 11.4017 8.6917 11.4293 8.56571 11.4501C8.31959 11.4917 8.07155 11.5064 7.8258 11.4953C6.5146 11.4407 5.38974 10.6647 4.83771 9.55389L2.52418 5.54674C1.76575 7.24342 1.80376 9.26747 2.80404 11C3.81294 12.7475 5.56813 13.7954 7.43459 13.9738ZM5.00019 2.80386C4.22219 3.25304 3.58283 3.85015 3.09715 4.53915L4.58571 7.11742C4.94941 5.71465 6.16124 4.65352 7.64124 4.51397L7.68118 4.51033C7.83386 4.49628 7.98779 4.4922 8.14195 4.49837L12.873 4.49839C11.0969 2.0206 7.69573 1.24759 5.00019 2.80386ZM7.97256 5.49837C7.91118 5.4984 7.85031 5.50065 7.79004 5.50503L7.75173 5.50823C6.97838 5.58575 6.25223 6.02168 5.83395 6.74616C5.14359 7.94189 5.55328 9.47087 6.74901 10.1612C7.20527 10.4246 7.71005 10.5279 8.19824 10.4884C9.47385 10.375 10.4739 9.30347 10.4739 7.99837C10.4739 6.61811 9.35535 5.4991 7.97526 5.49837H7.97256Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">logo-chrome</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.53218 5.5873C1.36714 5.70019 1.29592 5.88732 1.31854 6.06428L1.31854 9.93573C1.29592 10.1127 1.36714 10.2998 1.53218 10.4127L7.71758 14.6433C7.88776 14.7597 8.11195 14.7597 8.28213 14.6433L14.4675 10.4127C14.6286 10.3026 14.7003 10.1217 14.6826 9.94852V6.05151C14.7003 5.87837 14.6286 5.69748 14.4675 5.58731L8.28212 1.35671C8.11194 1.24031 7.88776 1.24031 7.71757 1.35671L1.53218 5.5873ZM2.43442 6.00001L7.57485 2.48413V5.45433L4.60573 7.48511L2.43442 6.00001ZM8.42485 5.45433V2.48413L13.5653 6.00001L11.394 7.48511L8.42485 5.45433ZM3.85291 8.00001L2.16854 9.15206V6.84796L3.85291 8.00001ZM13.8326 6.84696V9.15307L12.1468 8.00001L13.8326 6.84696ZM11.394 8.51492L13.5653 10L8.42485 13.5159V10.5457L11.394 8.51492ZM7.57485 10.5457V13.5159L2.43442 10L4.60573 8.51491L7.57485 10.5457ZM10.6412 8.00001L7.99985 9.80657L5.35855 8.00001L7.99985 6.19345L10.6412 8.00001Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">logo-codepen</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1C4.13483 1 1 4.21349 1 8.17696C1 11.348 3.0055 14.0381 5.78742 14.9873C6.13683 15.0537 6.25 14.8312 6.25 14.6422V13.3061C4.30283 13.7403 3.89742 12.4592 3.89742 12.4592C3.57892 11.6297 3.11983 11.409 3.11983 11.409C2.48458 10.9634 3.16825 10.973 3.16825 10.973C3.87117 11.0232 4.241 11.7128 4.241 11.7128C4.86517 12.8097 5.87842 12.4927 6.278 12.3091C6.34042 11.8456 6.52183 11.5286 6.7225 11.3498C5.16792 11.1674 3.53342 10.5519 3.53342 7.80256C3.53342 7.01848 3.807 6.37854 4.25442 5.87615C4.18208 5.69493 3.94233 4.96467 4.32267 3.97664C4.32267 3.97664 4.91067 3.78406 6.24825 4.71228C6.8065 4.55319 7.405 4.47365 8 4.47066C8.595 4.47365 9.19408 4.55319 9.7535 4.71228C11.0899 3.78406 11.6768 3.97664 11.6768 3.97664C12.0577 4.96527 11.8179 5.69553 11.7456 5.87615C12.1947 6.37854 12.466 7.01908 12.466 7.80256C12.466 10.5591 10.8286 11.1662 9.26992 11.3438C9.52075 11.5663 9.75 12.0029 9.75 12.6727V14.6422C9.75 14.833 9.862 15.0573 10.2172 14.9867C12.9968 14.0364 15 11.3468 15 8.17696C15 4.21349 11.8658 1 8 1Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">logo-github-filled</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.50039 14.5V12.6941H4.59414C3.87089 12.6941 3.28457 12.1078 3.28455 11.3846C3.28455 11.1308 3.07878 10.925 2.82496 10.925H2.09473V10.075H2.82496C2.88111 10.075 2.93644 10.0785 2.99073 10.0854C3.02585 10.0898 3.06053 10.0957 3.09473 10.1028C3.51724 10.1913 3.86489 10.4834 4.03033 10.8718C4.09742 11.0293 4.13455 11.2026 4.13455 11.3846C4.13456 11.6063 4.29153 11.7913 4.50039 11.8346C4.53066 11.8409 4.56201 11.8441 4.59414 11.8441H5.50039V11.4628C5.50039 11.3371 5.51221 11.2129 5.53515 11.0915C5.57033 10.9053 5.63168 10.7258 5.71663 10.5583C5.39228 10.4479 5.08476 10.3144 4.79775 10.1606L4.77682 10.1493C4.27921 9.88006 3.84399 9.54951 3.49058 9.17236C2.86084 8.5003 2.49093 7.68026 2.49093 6.79514C2.49093 5.95029 2.82795 5.16473 3.40626 4.51055L3.36157 4.29107C3.16545 3.32799 3.36011 2.32645 3.90269 1.50695C4.88369 1.44681 5.84838 1.779 6.58437 2.43038L6.93558 2.74123C7.27093 2.69292 7.61713 2.66764 7.97116 2.66764C8.36121 2.66764 8.74174 2.69833 9.10872 2.75668L9.47732 2.43045C10.2133 1.77907 11.178 1.44688 12.159 1.50701C12.7016 2.32652 12.8962 3.32806 12.7001 4.29114L12.6324 4.6235C13.1516 5.25433 13.4514 5.99837 13.4514 6.79514C13.4514 8.17549 12.5517 9.39757 11.17 10.1469C10.8833 10.3024 10.5759 10.4375 10.2515 10.5494C10.3621 10.7498 10.4379 10.9685 10.4747 11.1962C10.4917 11.3011 10.5004 11.4079 10.5004 11.5156V14.5H5.50039ZM7.07815 3.73101L6.61969 3.79705L5.92162 3.17922C5.51701 2.82113 5.01772 2.59517 4.48997 2.52415C4.2876 3.01671 4.23364 3.56208 4.34146 4.09153L4.48561 4.79943L4.15547 5.17288C3.71402 5.67224 3.49093 6.22919 3.49093 6.79514C3.49093 7.89333 4.38156 9.04753 6.03885 9.61164L7.12962 9.98291L6.60851 11.0106C6.53829 11.149 6.50039 11.3035 6.50039 11.4628V13.5H9.50039V11.5156C9.50039 11.3448 9.45674 11.179 9.37594 11.0325L8.80183 9.99188L9.9253 9.60416C11.5692 9.03682 12.4514 7.88849 12.4514 6.79514C12.4514 6.26048 12.2527 5.73566 11.8603 5.25899L11.5574 4.89099L11.7202 4.0916C11.828 3.56215 11.7741 3.01677 11.5717 2.52422C11.044 2.59524 10.5447 2.82119 10.1401 3.17929L9.41795 3.8184L8.9517 3.74427C8.63682 3.69421 8.3088 3.66764 7.97116 3.66764C7.6647 3.66764 7.36615 3.68953 7.07815 3.73101Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">logo-github</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5662 9.0391H14.9633C14.9895 8.81289 15 8.58172 15 8.34541C15 7.23681 14.69 6.19698 14.1491 5.30153C14.7086 3.8739 14.6887 2.66224 13.9396 1.93809C13.2273 1.25711 11.3162 1.36766 9.15576 2.28633C8.99595 2.27472 8.8346 2.26875 8.67172 2.26875C5.70638 2.26875 3.21841 4.22822 2.53076 6.86845C3.46096 5.72486 4.43959 4.89573 5.74691 4.29191C5.62804 4.39887 4.93446 5.06098 4.8178 5.17308C1.37033 8.48243 0.283168 12.8054 1.45294 13.9289C2.34213 14.7826 3.95356 14.6384 5.80456 13.7679C6.66526 14.1888 7.63947 14.4262 8.67162 14.4262C11.451 14.4262 13.8065 12.7082 14.6598 10.3157H11.2365C10.7654 11.1501 9.8442 11.718 8.78689 11.718C7.72958 11.718 6.80825 11.1501 6.33721 10.3157C6.12782 9.93872 6.00744 9.50652 6.00744 9.04905V9.0391H11.5662ZM6.01254 7.43574C6.09106 6.09377 7.25309 5.02314 8.67162 5.02314C10.0901 5.02314 11.2522 6.09374 11.3307 7.43574H6.01254ZM13.9086 2.61293C14.3911 3.08112 14.3791 3.9425 13.9664 5.01774C13.2593 3.98258 12.2319 3.16688 11.0191 2.70112C12.3159 2.16718 13.3708 2.09645 13.9086 2.61293ZM2.34533 13.7158C1.72963 13.1245 1.91523 11.8832 2.7084 10.3878C3.20214 11.7182 4.16419 12.835 5.40444 13.5545C4.03109 14.1531 2.907 14.2547 2.34533 13.7158Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">logo-ie-filled</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.34101 7.31389C5.61303 7.00343 5.90178 6.69471 6.20618 6.39031L6.21573 6.38077H9.82136C9.61419 5.57584 8.8835 4.98109 8.01391 4.98109C7.92741 4.98109 7.8423 4.98697 7.75893 4.99836C8.13148 4.70069 8.50405 4.42796 8.87221 4.182C9.99838 4.54437 10.8133 5.60067 10.8133 6.84733V7.31389H5.34101Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M3.74372 14.9996C3.02134 15.0093 2.28332 14.8198 1.73174 14.2683C1.18016 13.7167 0.990659 12.9787 1.00035 12.2563C1.00999 11.538 1.21364 10.757 1.53993 9.97391C1.58589 9.86359 1.63467 9.75234 1.68618 9.64027C1.55291 9.12028 1.48205 8.57528 1.48205 8.01373C1.48205 4.40629 4.40646 1.48188 8.01391 1.48188C8.5755 1.48188 9.12054 1.55276 9.64057 1.68605C9.75254 1.63458 9.86369 1.58585 9.97391 1.53993C10.757 1.21364 11.538 1.00999 12.2563 1.00035C12.9787 0.990659 13.7167 1.18016 14.2683 1.73174C14.8198 2.28332 15.0093 3.02134 14.9996 3.74372C14.99 4.46198 14.7864 5.243 14.4601 6.02609C14.418 6.12698 14.3736 6.22866 14.327 6.33102C14.4697 6.86789 14.5458 7.43193 14.5458 8.01373C14.5458 8.35498 14.5196 8.69041 14.469 9.01805L14.4079 9.41342H6.20646C6.41363 10.2184 7.14431 10.8131 8.01391 10.8131C8.62418 10.8131 9.16601 10.5207 9.50728 10.0663L9.64726 9.87998H14.3144L14.045 10.5261C13.061 12.8857 10.7318 14.5456 8.01391 14.5456C7.43215 14.5456 6.86815 14.4695 6.33132 14.3268C6.22886 14.3736 6.12708 14.418 6.02609 14.4601C5.243 14.7864 4.46198 14.99 3.74372 14.9996ZM5.03857 13.8301C4.08492 13.3413 3.26722 12.6249 2.6572 11.7525C2.76124 11.4064 2.90313 11.0414 3.08047 10.6631C4.02537 12.4189 5.88026 13.6125 8.01391 13.6125C10.0856 13.6125 11.8954 12.4871 12.8637 10.8131H10.1004C9.58841 11.3852 8.84327 11.7462 8.01391 11.7462C6.46787 11.7462 5.21454 10.4929 5.21454 8.94686V8.4803H13.5935C13.6062 8.32653 13.6126 8.17093 13.6126 8.01373C13.6126 5.92145 12.4649 4.09723 10.7648 3.13627C11.1581 2.9676 11.535 2.83943 11.8885 2.75462C12.6994 3.35308 13.367 4.13463 13.8302 5.03826C14.1954 3.88522 14.1504 2.9335 13.6084 2.39156C12.333 1.11613 8.7881 2.59318 5.69064 5.69064C2.59318 8.7881 1.11613 12.333 2.39156 13.6084C2.93355 14.1504 3.88539 14.1954 5.03857 13.8301ZM8.28136 2.42128C8.19273 2.41711 8.10357 2.415 8.01391 2.415C4.92181 2.415 2.41517 4.92164 2.41517 8.01373C2.41517 8.10336 2.41728 8.1925 2.42145 8.28109C3.09224 7.19746 3.97858 6.08307 5.03082 5.03082C6.08316 3.97849 7.19765 3.09209 8.28136 2.42128Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">logo-ie</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.4763 9.77042C13.3516 9.3686 13.1814 8.89989 13.0085 8.45074L12.3787 6.87895C12.3787 6.8603 12.3873 6.55085 12.3873 6.39113C12.3873 3.70171 11.1177 1 7.99644 1C4.87517 1 3.606 3.70171 3.606 6.39022C3.606 6.54994 3.61419 6.85939 3.61464 6.87804L2.98438 8.44983C2.81191 8.89989 2.64172 9.3686 2.51658 9.76951C1.92136 11.6849 2.1143 12.4776 2.26129 12.4953C2.57619 12.5336 3.48996 11.0532 3.48996 11.0532C3.48996 11.9106 3.93137 13.0291 4.88609 13.8369C4.52887 13.947 4.09155 14.1163 3.80987 14.3238C3.55731 14.5108 3.58871 14.701 3.63421 14.7788C3.83444 15.116 7.06629 14.9941 7.99917 14.889C8.93251 14.9941 12.1644 15.1165 12.3641 14.7788C12.4096 14.7019 12.4415 14.5117 12.1885 14.3238C11.9072 14.1163 11.469 13.947 11.1118 13.8369C12.0674 13.0291 12.5079 11.9106 12.5079 11.0532C12.5079 11.0532 13.4181 12.5336 13.7343 12.4953C13.879 12.4785 14.072 11.6858 13.4763 9.77042Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">logo-qq</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1 6.55014C1 4.20298 3.26552 2.30005 6.06021 2.30005C8.58473 2.30005 10.6089 3.85282 10.99 5.88329C10.9678 5.88221 10.9496 5.88122 10.9334 5.88034C10.8834 5.87761 10.8529 5.87594 10.7832 5.87594C8.23432 5.87594 6.16822 7.61153 6.16822 9.75217C6.16822 10.1132 6.22806 10.4623 6.3381 10.7939C6.24606 10.798 6.15351 10.8005 6.06021 10.8005C5.48273 10.8005 4.92529 10.7173 4.40842 10.5675C4.36138 10.553 4.31156 10.5453 4.25971 10.5453C4.16247 10.5453 4.07436 10.5751 3.99119 10.6234L2.88316 11.268C2.85235 11.2861 2.82256 11.2996 2.78579 11.2996C2.69261 11.2996 2.61718 11.2237 2.61718 11.1297C2.61718 11.098 2.62656 11.0663 2.63575 11.0354C2.63873 11.0254 2.64169 11.0154 2.64431 11.0055C2.64974 10.985 2.75058 10.6058 2.83294 10.2961L2.87225 10.1482C2.88214 10.112 2.89013 10.0776 2.89013 10.04C2.89013 9.92547 2.83409 9.82443 2.74839 9.76282C1.68168 8.98377 1 7.83098 1 6.55014ZM3.77516 5.1902C3.77516 5.52312 4.04305 5.79315 4.37368 5.79315C4.70381 5.79315 4.97169 5.52312 4.97169 5.1902C4.97169 4.85715 4.70381 4.58725 4.37368 4.58725C4.04305 4.58725 3.77516 4.85715 3.77516 5.1902ZM7.14872 5.1902C7.14872 5.52312 7.4166 5.79303 7.74698 5.79303C8.07736 5.79303 8.34525 5.52312 8.34525 5.1902C8.34525 4.85715 8.07736 4.58725 7.74698 4.58725C7.4166 4.58725 7.14872 4.85715 7.14872 5.1902Z" fill="currentColor" fill-opacity="0.9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 9.7521C15 10.8193 14.432 11.7799 13.5431 12.4293C13.4716 12.4806 13.4249 12.565 13.4249 12.6601C13.4249 12.6914 13.4316 12.7203 13.4397 12.7504C13.5109 13.0173 13.6245 13.4448 13.6298 13.4648C13.632 13.4734 13.6346 13.482 13.6372 13.4908C13.6447 13.5162 13.6525 13.5422 13.6525 13.5685C13.6525 13.6466 13.5896 13.7101 13.5119 13.7101C13.4813 13.7101 13.4564 13.6984 13.4305 13.6837L12.5075 13.1464C12.4381 13.106 12.3645 13.0812 12.2837 13.0812C12.2404 13.0812 12.1988 13.0879 12.1597 13.0999C11.7289 13.2247 11.2642 13.294 10.7831 13.294C8.45434 13.294 6.56624 11.7083 6.56624 9.7521C6.56624 7.79592 8.45434 6.21044 10.7831 6.21044C13.1122 6.21044 15 7.79592 15 9.7521ZM8.85103 8.61884C8.85103 8.91182 9.08683 9.14927 9.37754 9.14927C9.66836 9.14927 9.90404 8.91182 9.90404 8.61884C9.90404 8.32573 9.66836 8.08815 9.37754 8.08815C9.08683 8.08815 8.85103 8.32573 8.85103 8.61884ZM11.6626 8.61884C11.6626 8.91182 11.898 9.14927 12.1888 9.14927C12.4797 9.14927 12.7153 8.91182 12.7153 8.61884C12.7153 8.32573 12.4797 8.08815 12.1888 8.08815C11.898 8.08815 11.6626 8.32573 11.6626 8.61884Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">logo-wechat</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.2529 3.95905C11.623 4.34224 11.9247 4.77013 12.149 5.23125C12.4506 5.85106 12.6036 6.50835 12.6036 7.18432C12.6036 7.29806 12.5985 7.41153 12.5897 7.52475C12.5862 7.5206 12.5827 7.51641 12.5792 7.51223C12.5706 7.50189 12.562 7.49158 12.5524 7.48186C12.2833 7.21292 11.8727 7.17569 11.5621 7.36581C11.5626 7.35453 11.5632 7.34324 11.5638 7.33195C11.566 7.2882 11.5682 7.2444 11.5682 7.20068C11.5682 6.66962 11.4476 6.15259 11.2098 5.66365C11.0305 5.2954 10.7886 4.95239 10.4908 4.64429C9.72201 3.84918 8.63902 3.33615 7.44127 3.2C7.22372 3.17527 7.00861 3.16278 6.80201 3.16278C6.6052 3.16278 6.39924 3.17437 6.18993 3.19717C4.98651 3.32791 3.89721 3.83823 3.12244 4.63412C2.82336 4.94144 2.58018 5.28381 2.39959 5.65116C2.15783 6.14332 2.0352 6.66459 2.0352 7.20068C2.0352 7.89133 2.24709 8.57464 2.64767 9.1768C2.81782 9.43274 3.0203 9.67141 3.25099 9.89025C3.33317 9.96818 3.41844 10.0438 3.5077 10.1164C3.56579 10.1638 3.62118 10.2067 3.67669 10.2479C3.78579 10.3273 3.85122 10.4565 3.85122 10.5933C3.85122 10.6427 3.84079 10.6869 3.83036 10.7236C3.80575 10.8179 3.77664 10.9291 3.74766 11.0392C3.7385 11.0741 3.72936 11.1089 3.7204 11.1431C3.70378 11.2064 3.68778 11.2673 3.67347 11.322C3.66198 11.3661 3.65166 11.4053 3.64287 11.4387C3.63737 11.4596 3.63247 11.4783 3.62826 11.4944L3.58885 11.6532C3.58885 11.692 3.61924 11.7235 3.6566 11.7235C3.66793 11.7235 3.68043 11.7188 3.70245 11.7059L3.70361 11.7052L4.76612 11.079C4.77326 11.0748 4.7804 11.0713 4.78753 11.0679C4.79212 11.0656 4.7967 11.0634 4.80129 11.061C4.89145 11.0143 4.98058 10.9899 5.07242 10.9899C5.13115 10.9899 5.18873 10.9987 5.24283 11.0161C5.50907 11.0939 5.78458 11.1509 6.06319 11.188C6.07587 11.1897 6.08855 11.1914 6.10123 11.1932C6.13079 11.1973 6.16036 11.2015 6.18993 11.2047C6.39293 11.2271 6.59876 11.2385 6.80201 11.2385C7.00887 11.2385 7.22385 11.2258 7.44127 11.2011C7.79947 11.1604 8.14609 11.0848 8.47789 10.9794C8.44865 11.2853 8.59574 11.5945 8.87989 11.757C8.92755 11.7842 8.97688 11.806 9.02711 11.8226C8.56277 11.9893 8.07357 12.1065 7.56492 12.1644C7.30641 12.1937 7.04957 12.2086 6.80201 12.2086C6.55908 12.2086 6.31307 12.1952 6.07066 12.1685C5.6979 12.1275 5.34407 12.0622 4.98767 11.9599L3.33162 12.7911C3.32536 12.7955 3.31886 12.7992 3.31232 12.8029C3.30931 12.8046 3.30629 12.8063 3.30329 12.8081C3.30166 12.809 3.29994 12.8097 3.29828 12.8106C3.29784 12.8108 3.2974 12.811 3.29698 12.8113C3.23167 12.8488 3.15709 12.8718 3.07646 12.8718C2.84526 12.8718 2.65733 12.6952 2.6344 12.4702C2.6339 12.4648 2.63318 12.4595 2.63247 12.4541C2.63118 12.4445 2.6299 12.435 2.6299 12.4253C2.6299 12.4164 2.63107 12.4078 2.63225 12.3993C2.63298 12.394 2.6337 12.3887 2.63415 12.3834C2.63443 12.3804 2.63471 12.3775 2.63499 12.3745C2.63643 12.359 2.63786 12.3436 2.6411 12.3287C2.64507 12.3108 2.65148 12.294 2.65792 12.2771C2.65858 12.2753 2.65925 12.2736 2.65991 12.2719L2.83392 10.9028V10.902C2.44841 10.5602 2.02954 10.075 1.77334 9.6897C1.2674 8.92911 1 8.0629 1 7.18432C1 6.50204 1.1556 5.8396 1.46215 5.21554C1.68795 4.75571 1.99102 4.32872 2.36301 3.94643C3.30535 2.97833 4.62238 2.35826 6.07156 2.20087C6.32054 2.17369 6.56617 2.16003 6.80201 2.16003C7.04931 2.16003 7.30589 2.17498 7.56492 2.20434C9.00753 2.36831 10.3172 2.9916 11.2529 3.95905Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M11.3472 9.0505C11.0323 8.73544 11.0323 8.2246 11.3472 7.90955C11.6622 7.59449 12.1731 7.59449 12.4881 7.90955C12.5909 8.01246 12.66 8.13611 12.6958 8.26698C12.7034 8.29519 12.7095 8.32365 12.7141 8.35225C12.7183 8.37814 12.7211 8.40428 12.7227 8.43056C12.8158 8.89632 13.0426 9.34057 13.4038 9.70161C13.4222 9.72002 13.4408 9.73793 13.4596 9.75557C13.4691 9.76214 13.4781 9.76936 13.4866 9.77786C13.4914 9.78275 13.4959 9.78778 13.5 9.79306C13.5615 9.86879 13.557 9.98021 13.4866 10.0507C13.4111 10.126 13.2892 10.126 13.2137 10.0507C13.1884 10.0232 13.1627 9.99592 13.136 9.96939C12.7667 9.60011 12.3105 9.37122 11.833 9.28222C11.8168 9.28054 11.8006 9.27822 11.7843 9.27552C11.7682 9.27281 11.7521 9.26972 11.7362 9.26599C11.5937 9.23314 11.4582 9.16153 11.3472 9.0505Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M14.7637 10.1909C14.4488 9.87587 13.9378 9.87587 13.6228 10.1909C13.5117 10.302 13.4401 10.4373 13.4073 10.5799C13.4037 10.5959 13.4004 10.612 13.3977 10.6281C13.3952 10.6443 13.3927 10.6605 13.391 10.6766C13.302 11.1541 13.0731 11.6105 12.7037 11.9798C12.6772 12.0064 12.65 12.0322 12.6226 12.0572L12.6227 12.0574C12.5472 12.1327 12.5472 12.2548 12.6227 12.3301C12.693 12.4006 12.8045 12.4051 12.8803 12.3438C12.8853 12.3396 12.8905 12.335 12.8955 12.3301C12.9039 12.3217 12.9111 12.3127 12.9178 12.3032C12.9353 12.2845 12.9532 12.2658 12.9716 12.2474C13.3327 11.8864 13.7769 11.6594 14.2428 11.5666C14.269 11.5649 14.2951 11.5621 14.321 11.5577C14.3497 11.5533 14.3781 11.547 14.4063 11.5394C14.5373 11.5036 14.6611 11.4345 14.7637 11.3319C15.0788 11.0168 15.0788 10.506 14.7637 10.1909Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M10.3432 11.4664C10.2726 11.5367 10.2682 11.6481 10.3295 11.7239C10.3336 11.7291 10.3381 11.7342 10.3432 11.7392C10.3515 11.7476 10.3607 11.7548 10.3701 11.7615C10.3889 11.7789 10.4076 11.7971 10.4259 11.8153C10.7869 12.1765 11.0139 12.6207 11.107 13.0865C11.1085 13.1126 11.1114 13.1388 11.1157 13.1648C11.1202 13.1933 11.1263 13.2217 11.1339 13.2499C11.1696 13.3809 11.2387 13.5044 11.3415 13.6074C11.6566 13.9224 12.1674 13.9224 12.4824 13.6074C12.7974 13.2923 12.7974 12.7815 12.4824 12.4664C12.3713 12.3554 12.2358 12.2838 12.0934 12.2509C12.0775 12.2473 12.0614 12.2441 12.0453 12.2414C12.0292 12.2387 12.013 12.2365 11.9965 12.2347C11.5192 12.1458 11.0628 11.9168 10.6936 11.5475C10.667 11.521 10.6411 11.4938 10.6161 11.4662L10.616 11.4664C10.5782 11.4286 10.5289 11.4098 10.4796 11.4098C10.4301 11.4098 10.3808 11.4286 10.3432 11.4664Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M10.4318 10.889C10.4345 10.8727 10.4367 10.8565 10.4385 10.8402C10.5277 10.363 10.7566 9.90652 11.1257 9.53723C11.1524 9.5107 11.1796 9.48481 11.2071 9.45969L11.207 9.45956C11.2823 9.38421 11.2823 9.26211 11.207 9.18676C11.1365 9.1163 11.025 9.11179 10.9494 9.17323C10.9441 9.17748 10.9391 9.18186 10.9342 9.18676C10.9258 9.19526 10.9185 9.20427 10.9119 9.21368C10.8943 9.23261 10.8763 9.25103 10.8579 9.26958C10.497 9.63049 10.0526 9.85744 9.58675 9.95057C9.56074 9.95211 9.53459 9.95495 9.50844 9.9592C9.47985 9.96371 9.45138 9.96989 9.42343 9.97762C9.29244 10.0133 9.16865 10.0823 9.06587 10.1851C8.75068 10.5002 8.75068 11.011 9.06587 11.3262C9.38092 11.6413 9.89176 11.6413 10.2068 11.3262C10.3178 11.215 10.3896 11.0795 10.4224 10.9372C10.426 10.9212 10.4293 10.9051 10.4318 10.889Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">logo-wecom</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 2.50403H2.5V7.50403H7.5V2.50403Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M13.5 2.50403H8.5V7.50403H13.5V2.50403Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8.5 8.50403H13.5V13.504H8.5V8.50403Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M7.5 8.50403H2.5V13.504H7.5V8.50403Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">logo-windows-filled</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V3C2 2.44772 2.44772 2 3 2H13ZM7.5 3H3L3 7.5H7.5V3ZM8.5 13H13V8.5H8.5V13ZM7.5 8.5H3L3 13H7.5V8.5ZM8.5 7.5H13V3H8.5V7.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">logo-windows</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 3V5H10V2.5C10 2.22386 9.77614 2 9.5 2H1.5C1.22386 2 1 2.22386 1 2.5V13.5C1 13.7761 1.22386 14 1.5 14H9.5C9.77614 14 10 13.7761 10 13.5V11H9V13H2V3H9Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M11.2316 5.25423L13.4774 7.50001L5.99994 7.49999L5.99994 8.49999L13.4774 8.50001L11.2316 10.7458L11.9387 11.4529L15.038 8.35356C15.2333 8.1583 15.2333 7.84172 15.038 7.64646L11.9387 4.54712L11.2316 5.25423Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">logout</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.49902 3.9989C1.49902 3.44662 1.94674 2.9989 2.49902 2.9989H13.499C14.0513 2.9989 14.499 3.44662 14.499 3.9989V11.9989C14.499 12.5512 14.0513 12.9989 13.499 12.9989H2.49902C1.94674 12.9989 1.49902 12.5512 1.49902 11.9989V3.9989ZM13.0976 3.9989H2.90041L7.99902 7.39798L13.0976 3.9989ZM2.49902 4.93316L2.49902 11.9989H13.499V4.93316L7.99902 8.59983L2.49902 4.93316Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">mail</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.99951 3.98621L13.9989 4.00001L14.0001 3.00001L2.00066 2.98621L1.99951 3.98621Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M7.50009 8.50001H13.9995V7.50001H7.50009V8.50001Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M1.99951 12.9862L13.9989 13L14.0001 12L2.00066 11.9862L1.99951 12.9862Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M5.96675 7.59308C6.23342 7.79308 6.23342 8.19308 5.96675 8.39308L2.80009 10.7681C2.47047 11.0153 2.00009 10.7801 2.00009 10.3681L2.00009 5.61808C2.00009 5.20605 2.47047 4.97086 2.80009 5.21808L5.96675 7.59308ZM3.00009 6.61808L3.00009 9.36808L4.83342 7.99308L3.00009 6.61808Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">menu-fold</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0005 12.0138L2.00115 12L2 13L13.9994 13.0138L14.0005 12.0138Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8.49997 7.5L2.00058 7.5L2.00058 8.5L8.49997 8.5V7.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M14.0005 3.0138L2.00115 3L2 4L13.9994 4.0138L14.0005 3.0138Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M10.0333 8.40693C9.76663 8.20693 9.76663 7.80693 10.0333 7.60693L13.2 5.23193C13.5296 4.98472 14 5.21991 14 5.63193L14 10.3819C14 10.794 13.5296 11.0291 13.2 10.7819L10.0333 8.40693ZM13 9.38193L13 6.63193L11.1666 8.00693L13 9.38193Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">menu-unfold</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM11.5 8.5H4.5V7.5H11.5V8.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">minus-circle-filled</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 8.5H11.5V7.5H4.5V8.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">minus-circle</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 13C2 13.5523 2.44772 14 3 14L13 14C13.5523 14 14 13.5523 14 13L14 3C14 2.44772 13.5523 2 13 2H3C2.44772 2 2 2.44771 2 3V13ZM11 8.5H5V7.5H11V8.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">minus-rectangle-filled</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 8.5H11V7.5H5V8.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M3 14C2.44772 14 2 13.5523 2 13V3C2 2.44771 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3L14 13C14 13.5523 13.5523 14 13 14L3 14ZM3 13L13 13L13 3L3 3L3 13Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">minus-rectangle</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.50024 1H8.50024V15H7.50024V1Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M14.7196 12.4367C14.7504 12.6777 14.6034 12.906 14.3712 12.9777C14.2991 13 14.1963 13 13.9907 13H10.6501C10.5106 13 10.4409 13 10.3834 12.9862C10.2006 12.9423 10.0578 12.7995 10.0139 12.6167C10.0001 12.5592 10.0001 12.4895 10.0001 12.35V5.0008C10.0001 4.47031 10.0001 4.20506 10.041 4.11027C10.1768 3.79537 10.5821 3.70757 10.8361 3.93804C10.9126 4.00742 11.0223 4.24889 11.2418 4.73183L14.5824 12.081C14.6675 12.2682 14.71 12.3618 14.7196 12.4367ZM11.0001 12H13.4471L11.0001 6.61661V12Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M1.62907 12.9777C1.70117 13 1.80398 13 2.00959 13H5.35014C5.48959 13 5.55932 13 5.61686 12.9862C5.79969 12.9423 5.94243 12.7995 5.98633 12.6167C6.00014 12.5592 6.00014 12.4895 6.00014 12.35V5.0008C6.00014 4.47031 6.00014 4.20506 5.95925 4.11027C5.82341 3.79537 5.4181 3.70757 5.16413 3.93804C5.08768 4.00742 4.97792 4.24889 4.7584 4.73183L1.41786 12.081C1.33277 12.2682 1.29023 12.3618 1.28067 12.4367C1.24989 12.6777 1.39688 12.906 1.62907 12.9777ZM5.00014 6.61661V12H2.55315L5.00014 6.61661Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">mirror</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 13H9.5V12H6.5V13Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M5 1.5C4.44772 1.5 4 1.94772 4 2.5V14C4 14.5523 4.44772 15 5 15H11C11.5523 15 12 14.5523 12 14V2.5C12 1.94772 11.5523 1.5 11 1.5H5ZM11 2.5V14H5V2.5H11Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2 4V13H3V4H2Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M13 4V13H14V4H13Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">mobile-vibrate</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 13H9.5V12H6.5V13Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M3.5 2.5C3.5 1.94772 3.94772 1.5 4.5 1.5H11.5C12.0523 1.5 12.5 1.94772 12.5 2.5V14C12.5 14.5523 12.0523 15 11.5 15H4.5C3.94772 15 3.5 14.5523 3.5 14V2.5ZM4.5 2.5L4.5 14H11.5V2.5H4.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">mobile</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 7.5H8.5V8.5H10.5V9.5H8.5V12H7.5V9.5H5.5V8.5H7.5V7.5H5.5V6.5H6.95969L5.60956 4.81235L6.39043 4.18765L8 6.19961L9.60956 4.18765L10.3904 4.81235L9.04031 6.5H10.5V7.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M15 8C15 4.13401 11.866 1 8 1C4.13401 0.999998 1 4.134 1 8C0.999998 11.866 4.134 15 8 15C11.866 15 15 11.866 15 8ZM14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">money-circle</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 4C8.55225 4 9 3.55228 9 3C9 2.44772 8.55225 2 8 2C7.44775 2 7 2.44772 7 3C7 3.55228 7.44775 4 8 4Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8 9C8.55225 9 9 8.55228 9 8C9 7.44772 8.55225 7 8 7C7.44775 7 7 7.44772 7 8C7 8.55228 7.44775 9 8 9Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M9 13C9 13.5523 8.55225 14 8 14C7.44775 14 7 13.5523 7 13C7 12.4477 7.44775 12 8 12C8.55225 12 9 12.4477 9 13Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">more</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 1C4.44772 1 4 1.44772 4 2C4 2.55228 4.44772 3 5 3C5.55228 3 6 2.55228 6 2C6 1.44772 5.55228 1 5 1Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M11 1C10.4477 1 10 1.44772 10 2C10 2.55228 10.4477 3 11 3C11.5523 3 12 2.55228 12 2C12 1.44772 11.5523 1 11 1Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M4 6C4 5.44772 4.44772 5 5 5C5.55228 5 6 5.44772 6 6C6 6.55228 5.55228 7 5 7C4.44772 7 4 6.55228 4 6Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M11 5C10.4477 5 10 5.44772 10 6C10 6.55228 10.4477 7 11 7C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M4 10C4 9.44771 4.44772 9 5 9C5.55228 9 6 9.44771 6 10C6 10.5523 5.55228 11 5 11C4.44772 11 4 10.5523 4 10Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M5 13C4.44772 13 4 13.4477 4 14C4 14.5523 4.44772 15 5 15C5.55228 15 6 14.5523 6 14C6 13.4477 5.55228 13 5 13Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M10 10C10 9.44771 10.4477 9 11 9C11.5523 9 12 9.44771 12 10C12 10.5523 11.5523 11 11 11C10.4477 11 10 10.5523 10 10Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M11 13C10.4477 13 10 13.4477 10 14C10 14.5523 10.4477 15 11 15C11.5523 15 12 14.5523 12 14C12 13.4477 11.5523 13 11 13Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">move</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2H13L13 14H12L12 2Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M10.8512 7.58022C11.1557 7.77724 11.1557 8.22276 10.8512 8.41979L3.77162 13.0007C3.43894 13.216 3 12.9772 3 12.5809V3.41907C3 3.02282 3.43895 2.78402 3.77163 2.99929L10.8512 7.58022ZM4 4.33814L4 11.6619L9.65923 8L4 4.33814Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">next</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.49993 2.02746V1H7.49993V2.02746C5.24996 2.27619 3.49993 4.18372 3.49993 6.5V11L2.59993 12.2C2.35272 12.5296 2.58791 13 2.99993 13H5.54994C5.78158 14.1411 6.79045 15 7.99993 15C9.20941 15 10.2183 14.1411 10.4499 13H12.9999C13.412 13 13.6471 12.5296 13.3999 12.2L12.4999 11V6.5C12.4999 4.18372 10.7499 2.27619 8.49993 2.02746Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">notification-filled</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.49993 2.02746V1H7.49993V2.02746C5.24996 2.27619 3.49993 4.18372 3.49993 6.5V11L2.59993 12.2C2.35272 12.5296 2.58791 13 2.99993 13H5.54994C5.78158 14.1411 6.79045 15 7.99993 15C9.20941 15 10.2183 14.1411 10.4499 13H12.9999C13.412 13 13.6471 12.5296 13.3999 12.2L12.4999 11V6.5C12.4999 4.18372 10.7499 2.27619 8.49993 2.02746ZM4.49993 11.3333V6.5C4.49993 4.567 6.06693 3 7.99993 3C9.93293 3 11.4999 4.567 11.4999 6.5V11.3333L11.9999 12H3.99993L4.49993 11.3333ZM7.99993 14C7.34682 14 6.7912 13.5826 6.58528 13H9.41458C9.20866 13.5826 8.65304 14 7.99993 14Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">notification</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 8.49999V15H8.5V8.5L13.1566 8.5L11.4651 10.1915L12.1722 10.8986L14.7172 8.35356C14.9125 8.15829 14.9125 7.84171 14.7172 7.64645L12.1722 5.10141L11.4651 5.80852L13.1566 7.5L8.5 7.5V1H7.5V7.49999L2.84586 7.5L4.53734 5.80852L3.83023 5.10141L1.28519 7.64645C1.08993 7.84171 1.08993 8.15829 1.28519 8.35355L3.83023 10.8986L4.53734 10.1915L2.84585 8.5L7.5 8.49999Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">order-adjustment-column</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 13.5L12 3.70712L14.1464 5.85357L14.8535 5.14646L11.9048 2.19768C11.5709 1.8638 11 2.10026 11 2.57244L11 13.5H12Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M9.5 13.5L2 13.5V12.5L9.5 12.5V13.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2 8.50002L9.5 8.50002V7.50002L2 7.50002V8.50002Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M9.5 3.50002L2 3.50002V2.50002L9.5 2.50002V3.50002Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">order-ascending</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 2.5H2V3.5L9.5 3.5V2.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M12 2.5L12 12.2929L14.1464 10.1464L14.8535 10.8536L11.9048 13.8023C11.5709 14.1362 11 13.8998 11 13.4276L11 2.5H12Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2 7.5H9.5V8.5H2V7.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M9.5 12.5H2V13.5H9.5V12.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">order-descending</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4053 4.45952L11.486 3.54028L7.02642 7.9999L11.486 12.4595L12.4053 11.5403L8.86489 7.9999L12.4053 4.45952ZM4.79568 4L4.79568 12L6.09568 12L6.09568 4L4.79568 4Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">page-first</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.59473 11.5405L4.51397 12.4597L8.97358 8.00009L4.51397 3.54047L3.59473 4.45971L7.13511 8.00009L3.59473 11.5405ZM11.2046 12L11.2046 3.99999L9.90459 3.99999L9.90459 12H11.2046Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">page-last</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM6 5V11H7V5H6ZM10 5.00001H9V11H10V5.00001Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">pause-circle-filled</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8ZM10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10C9.10457 10 10 9.10457 10 8Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M6.05352 2C5.85291 2 5.66557 2.10026 5.55429 2.26718L4.73241 3.5H2.01C1.72834 3.5 1.5 3.72833 1.5 4.01V12.49C1.5 12.7717 1.72833 13 2.01 13H13.99C14.2716 13 14.5 12.7717 14.5 12.49V4.01C14.5 3.72834 14.2717 3.5 13.99 3.5H11.2676L10.4457 2.26718C10.3344 2.10026 10.1471 2 9.94648 2H6.05352ZM6.26759 3H9.73241L10.7324 4.5H13.5V12H2.5V4.5H5.26759L6.26759 3Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">photo</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5179 1.33919C12.2975 1.11875 11.9449 1.10385 11.7067 1.30492L7.66167 4.71867L6.89055 3.94755C6.65623 3.71324 6.27633 3.71324 6.04202 3.94755L3.93734 6.05223C3.70302 6.28655 3.70302 6.66645 3.93734 6.90076L6.16478 9.12821L2.05713 13.2359L2.76424 13.943L6.87189 9.83532L9.09922 12.0626C9.33353 12.297 9.71343 12.297 9.94774 12.0626L12.0524 9.95796C12.2867 9.72364 12.2867 9.34375 12.0524 9.10943L11.2813 8.33831L14.6951 4.29331C14.8961 4.05506 14.8812 3.70252 14.6608 3.48208L12.5179 1.33919Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">pin-filled</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5179 1.33919C12.2975 1.11875 11.9449 1.10385 11.7067 1.30492L7.66167 4.71867L6.89055 3.94755C6.65623 3.71324 6.27633 3.71324 6.04202 3.94755L3.93734 6.05223C3.70302 6.28655 3.70302 6.66645 3.93734 6.90076L6.16478 9.12821L2.05713 13.2359L2.76424 13.943L6.87189 9.83532L9.09922 12.0626C9.33353 12.297 9.71343 12.297 9.94774 12.0626L12.0524 9.95796C12.2867 9.72364 12.2867 9.34375 12.0524 9.10943L11.2813 8.33831L14.6951 4.29331C14.8961 4.05506 14.8812 3.70252 14.6608 3.48208L12.5179 1.33919ZM12.0707 2.30621L13.6938 3.92927L9.92441 8.39563L11.0625 9.53369L9.52348 11.0727L4.92729 6.4765L6.46628 4.9375L7.60435 6.07557L12.0707 2.30621Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">pin</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 8C15 4.13401 11.866 1 8 1C4.13401 0.999998 1 4.134 1 8C0.999998 11.866 4.134 15 8 15C11.866 15 15 11.866 15 8ZM10.9844 8.22791L6.51038 10.811C6.33493 10.9123 6.11561 10.7857 6.11561 10.5831L6.11561 5.41691C6.11561 5.21432 6.33493 5.0877 6.51038 5.18899L10.9844 7.77207C11.1599 7.87337 11.1599 8.12661 10.9844 8.22791Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">play-circle-filled</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M11.55 7.74017C11.75 7.85564 11.75 8.14432 11.55 8.25979L6.45 11.2043C6.25 11.3198 6 11.1754 6 10.9445L6 5.0555C6 4.82456 6.25 4.68022 6.45 4.79569L11.55 7.74017ZM7 6.26793V9.73204L10 7.99998L7 6.26793Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.134 15 0.999998 11.866 1 8C1 4.134 4.13401 0.999998 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z" fill="currentColor" fill-opacity="0.9"/>
</g>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">play-circle-stroke</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M11.55 7.74017C11.75 7.85564 11.75 8.14432 11.55 8.25979L6.45 11.2043C6.25 11.3198 6 11.1754 6 10.9445L6 5.0555C6 4.82456 6.25 4.68022 6.45 4.79569L11.55 7.74017Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.134 15 0.999998 11.866 1 8C1 4.134 4.13401 0.999998 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z" fill="currentColor" fill-opacity="0.9"/>
</g>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">play-circle</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.55 7.74018C11.75 7.85565 11.75 8.14433 11.55 8.2598L6.45 11.2043C6.25 11.3198 6 11.1754 6 10.9445V5.05551C6 4.82457 6.25 4.68024 6.45 4.79571L11.55 7.74018Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">play</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 1V8H8.5V1H7.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M1.5 8.50007C1.5 6.00518 2.90561 3.83859 4.96813 2.74901L5.46865 3.61594C3.70487 4.53193 2.5 6.3753 2.5 8.50008C2.5 11.5376 4.96243 14.0001 8 14.0001C11.0376 14.0001 13.5 11.5376 13.5 8.50008C13.5 6.37522 12.295 4.53179 10.5311 3.61583L11.0317 2.7489C13.0943 3.83844 14.5 6.0051 14.5 8.50008C14.5 12.0899 11.5898 15.0001 8 15.0001C4.41015 15.0001 1.5 12.0899 1.5 8.50007Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">poweroff</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M7.5 1.5V5H8.5V1.5H7.5ZM6.23223 5.52513L2.6967 1.98959L1.98959 2.6967L5.52513 6.23223L6.23223 5.52513ZM9.76777 5.52513L13.3033 1.98959L14.0104 2.6967L10.4749 6.23223L9.76777 5.52513ZM9 8C9 8.55229 8.55229 9 8 9C7.62986 9 7.30669 8.7989 7.13378 8.5H1.5V7.5H7.13378C7.30669 7.2011 7.62986 7 8 7C8.55229 7 9 7.44772 9 8ZM5.52513 9.76777L1.98959 13.3033L2.6967 14.0104L6.23223 10.4749L5.52513 9.76777ZM10.4749 9.76777L14.0104 13.3033L13.3033 14.0104L9.76777 10.4749L10.4749 9.76777ZM14.5 7.5H11V8.5H14.5V7.5ZM7.5 14.5V11H8.5V14.5H7.5Z" fill="currentColor"/>
</g>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">precise-monitor</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14H3V2H4L4 14Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M5.14876 8.41978C4.84426 8.22276 4.84426 7.77724 5.14876 7.58021L12.2284 2.99929C12.5611 2.78402 13 3.02282 13 3.41907V12.5809C13 12.9772 12.5611 13.216 12.2284 13.0007L5.14876 8.41978ZM12 11.6619V4.33814L6.34077 8L12 11.6619Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">previous</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.99902 1.9989V3.9989H2.99902C2.44288 3.9989 1.99902 4.44276 1.99902 4.9989V9.9989C1.99902 10.555 2.44288 10.9989 2.99902 10.9989H3.99902V13.9989H11.999V10.9989H12.999C13.5552 10.9989 13.999 10.555 13.999 9.9989V4.9989C13.999 4.44276 13.5552 3.9989 12.999 3.9989H11.999V1.9989H3.99902ZM10.999 3.9989H4.99902V2.9989H10.999V3.9989ZM2.99902 4.9989H12.999V9.9989H11.999V7.9989H3.99902V9.9989H2.99902V4.9989ZM4.99902 12.9989V8.9989H10.999V12.9989H4.99902Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">print</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 4H4V6H6V4Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2.5 2C2.22386 2 2 2.22386 2 2.5V7.5C2 7.77614 2.22386 8 2.5 8H7.5C7.77614 8 8 7.77614 8 7.5V2.5C8 2.22386 7.77614 2 7.5 2H2.5ZM3 3H7V7H3V3Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M10.5 2C10.2239 2 10 2.22386 10 2.5V5.5C10 5.77614 10.2239 6 10.5 6H13.5C13.7761 6 14 5.77614 14 5.5V2.5C14 2.22386 13.7761 2 13.5 2H10.5ZM11 5V3H13V5H11Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M10 10.5C10 10.2239 10.2239 10 10.5 10H13.5C13.7761 10 14 10.2239 14 10.5V13.5C14 13.7761 13.7761 14 13.5 14H10.5C10.2239 14 10 13.7761 10 13.5V10.5ZM11 13H13V11H11V13Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2.5 10C2.22386 10 2 10.2239 2 10.5V13.5C2 13.7761 2.22386 14 2.5 14H5.5C5.77614 14 6 13.7761 6 13.5V10.5C6 10.2239 5.77614 10 5.5 10H2.5ZM3 11H5V13H3V11Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M14 7.5L10 7.5V8.5L14 8.5V7.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8.5 11V14H7.5V11H8.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8.5 10V9H7.5V10H8.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">qrcode</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 3H13V12H14V3C14 2.44772 13.5523 2 13 2H4V3Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M6.58325 9.41669V12.3334L7.58325 12.3334V9.41669H10.3334V8.41669H7.58325V5.66669H6.58325V8.41669H3.66675V9.41669H6.58325Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2 13C2 13.5523 2.44772 14 3 14L11 14C11.5523 14 12 13.5523 12 13L12 5C12 4.44772 11.5523 4 11 4H3C2.44772 4 2 4.44772 2 5V13ZM3 5L11 5L11 13L3 13L3 5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">queue</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 14L13 14C13.5523 14 14 13.5523 14 13L14 3C14 2.44772 13.5523 2 13 2H3C2.44772 2 2 2.44771 2 3V13C2 13.5523 2.44772 14 3 14ZM3 13L3 3L13 3L13 13L3 13Z" fill="currentColor" fill-opacity="0.9"/>
</svg>
    
    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">rectangle</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00016 2.71134C10.8965 2.71134 13.2534 5.0736 13.2534 7.99868H14.2148C14.2148 4.54763 11.4324 1.75 8.00016 1.75C5.76382 1.75 3.80336 2.93771 2.7087 4.72001L2.7087 2.64252H1.75V5.74894C1.75 6.02508 1.97386 6.24894 2.25 6.24894L5.33676 6.24894V5.28498L3.49045 5.28498C4.40906 3.74211 6.08692 2.71134 8.00016 2.71134Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M1.78554 7.99863H2.74687C2.74687 10.9237 5.10379 13.286 8.00015 13.286C9.91339 13.286 11.5912 12.2553 12.5099 10.7124H10.6632V9.74843H13.75C14.0261 9.74843 14.25 9.97228 14.25 10.2484V13.3548H13.2913V11.2779C12.1966 13.0599 10.2363 14.2474 8.00015 14.2474C4.56792 14.2474 1.78554 11.4497 1.78554 7.99863Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">refresh</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.5 5.5H2.5C1.94772 5.5 1.5 5.94772 1.5 6.5V13.5C1.5 14.0523 1.94772 14.5 2.5 14.5H9.5C10.0523 14.5 10.5 14.0523 10.5 13.5V10.5H13.5C14.0523 10.5 14.5 10.0523 14.5 9.5V2.5C14.5 1.94772 14.0523 1.5 13.5 1.5H6.5C5.94772 1.5 5.5 1.94772 5.5 2.5V5.5ZM6.5 2.5H13.5V9.5H10.5V6.5C10.5 5.94772 10.0523 5.5 9.5 5.5H6.5V2.5ZM9.5 10.5V13.5H2.5V6.5H5.5V9.5C5.5 10.0523 5.94772 10.5 6.5 10.5H9.5ZM9.5 9.5H6.5V6.5H9.5V9.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>
    
    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">relativity</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 7.34998H12.5V8.64998H3.5V7.34998Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">remove</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.20718 5.00004L5.85363 3.35359L5.14652 2.64648L2.64652 5.14648C2.45126 5.34175 2.45126 5.65833 2.64652 5.85359L5.14652 8.35359L5.85363 7.64648L4.20718 6.00004H10.0001C11.6569 6.00004 13.0001 7.34318 13.0001 9.00004C13.0001 10.6569 11.6569 12 10.0001 12H5.00008V13H10.0001C12.2092 13 14.0001 11.2092 14.0001 9.00004C14.0001 6.7909 12.2092 5.00004 10.0001 5.00004H4.20718Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">rollback</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0859 5.00004L10.4394 3.35359L11.1465 2.64648L13.6465 5.14648C13.8418 5.34175 13.8418 5.65833 13.6465 5.85359L11.1465 8.35359L10.4394 7.64648L12.0859 6.00004H6.29297C4.63611 6.00004 3.29297 7.34318 3.29297 9.00004C3.29297 10.6569 4.63611 12 6.29297 12H11.293V13H6.29297C4.08383 13 2.29297 11.2092 2.29297 9.00004C2.29297 6.7909 4.08383 5.00004 6.29297 5.00004H12.0859Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">rollfront</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M4.5 5H11.5V6H4.5V5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M9 7.5H4.5V8.5H9V7.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M3 2C2.44772 2 2 2.44771 2 3V13C2 13.5523 2.44771 14 3 14H13C13.5523 14 14 13.5523 14 13V3C14 2.44772 13.5523 2 13 2H3ZM13 3V13H3L3 3H13Z" fill="currentColor" fill-opacity="0.9"/>
</g>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">root-list</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2H3V8.08296C5.5125 8.50448 7.49552 10.4875 7.91704 13H14V14H3C2.44772 14 2 13.5523 2 13V2ZM6.89998 13C6.5023 11.0409 4.95913 9.4977 3 9.10002V13L6.89998 13Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">rotation</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 11.5C6.067 11.5 4.5 9.933 4.5 8C4.5 6.067 6.067 4.5 8 4.5C9.933 4.5 11.5 6.067 11.5 8C11.5 9.933 9.933 11.5 8 11.5ZM8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3C5.23858 3 3 5.23858 3 8C3 10.7614 5.23858 13 8 13Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">round</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 2L14 5V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V3C2 2.44772 2.44772 2 3 2H11ZM10 3L6 3V4.5H10V3ZM11 3.41421V5.5H5V3L3 3L3 13H5V8H11V13H13V5.41421L11 3.41421ZM10 13V9H6V13H10Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">save</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3.5H4V6.5H3V3.5C3 2.94769 3.44775 2.5 4 2.5H12C12.5522 2.5 13 2.94769 13 3.5V6.5H12V3.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M3 9.5H4V12.5H12V9.5H13V12.5C13 13.0523 12.5522 13.5 12 13.5H4C3.44775 13.5 3 13.0523 3 12.5V9.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M14 7.5H2V8.5H14V7.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">scan</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.51033 10.2186C8.69189 10.8814 7.64943 11.2784 6.51424 11.2784C3.88302 11.2784 1.75 9.14541 1.75 6.51421C1.75 3.88301 3.88302 1.75 6.51424 1.75C9.14545 1.75 11.2785 3.88301 11.2785 6.51421C11.2785 7.64942 10.8814 8.69189 10.2186 9.51034L13.75 13.0417L13.0417 13.75L9.51033 10.2186ZM10.2768 6.51421C10.2768 4.43623 8.59224 2.75168 6.51424 2.75168C4.43623 2.75168 2.75168 4.43623 2.75168 6.51421C2.75168 8.59219 4.43623 10.2767 6.51424 10.2767C8.59224 10.2767 10.2768 8.59219 10.2768 6.51421Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">search</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.3894 9.92886L10.9644 6.35379L10.2573 5.64669L7.38939 8.51464L5.74265 6.8679L5.03555 7.57501L7.3894 9.92886Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2.50003 2L2.5 9.00005C2.5 10.4165 3.24315 11.729 4.45772 12.4578L7.99979 14.5831L11.5423 12.4578C12.7569 11.729 13.5 10.4165 13.5 9.00005L13.5001 2H2.50003ZM3.5 9.00005L3.50002 3H12.5001L12.5 9.00005C12.5 10.0652 11.9412 11.0523 11.0278 11.6003L7.99982 13.417L4.97223 11.6003C4.05886 11.0523 3.5 10.0652 3.5 9.00005Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">secured</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 5.25H4V4.25H7V5.25Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M1.50024 2.50014C1.50017 2.22394 1.72405 2 2.00024 2H14.0002C14.2763 2 14.5002 2.22377 14.5002 2.49986L14.5012 6.99988C14.5013 7.27608 14.2774 7.50002 14.0012 7.50002H2.00119C1.7251 7.50002 1.50127 7.27624 1.50119 7.00015L1.50024 2.50014ZM2.50106 6.50002H13.5011L13.5004 3H2.50038L2.50106 6.50002Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M4.00011 11.75H7.00011V10.75H4.00011V11.75Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M1.50133 9.00001C1.50133 8.72387 1.72519 8.50001 2.00133 8.50001H14.0013C14.2775 8.50001 14.5013 8.72387 14.5013 9.00001V13.5C14.5013 13.7761 14.2775 14 14.0013 14H2.00133C1.72519 14 1.50133 13.7761 1.50133 13.5V9.00001ZM2.50133 13H13.5013V9.50001H2.50133V13Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">server</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.51604 6.37387C2.73216 3.5341 5.10482 1.29718 7.99995 1.29718C10.8949 1.29718 13.2674 3.5338 13.4838 6.37328C13.4944 6.41375 13.5 6.45622 13.5 6.5V10.5C13.5 10.5506 13.4925 10.5995 13.4785 10.6455C13.2561 12.923 11.3359 14.7028 9 14.7028H8V13.7028H9C10.6587 13.7028 12.048 12.5489 12.4088 11H10.5C10.2239 11 10 10.7761 10 10.5V6.5C10 6.22386 10.2239 6 10.5 6H12.4295C12.0532 3.89498 10.2132 2.29718 7.99995 2.29718C5.78672 2.29718 3.94667 3.89498 3.57038 6H5.5C5.77614 6 6 6.22386 6 6.5V10.5C6 10.7761 5.77614 11 5.5 11H3C2.72386 11 2.5 10.7761 2.5 10.5V6.5C2.5 6.45643 2.50557 6.41416 2.51604 6.37387ZM12.4999 7H11V10H12.5L12.4999 7ZM3.5 7V10H5V7H3.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">service</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.0002 8C11.0002 9.65685 9.65702 11 8.00017 11C6.34331 11 5.00017 9.65685 5.00017 8C5.00017 6.34315 6.34331 5 8.00017 5C9.65702 5 11.0002 6.34315 11.0002 8ZM10.0002 8C10.0002 6.89543 9.10474 6 8.00017 6C6.8956 6 6.00017 6.89543 6.00017 8C6.00017 9.10457 6.8956 10 8.00017 10C9.10474 10 10.0002 9.10457 10.0002 8Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8.00017 1.25L14.0623 4.625V11.375L8.00017 14.75L1.93799 11.375V4.625L8.00017 1.25ZM2.93799 5.2128V10.7872L8.00017 13.6055L13.0623 10.7872V5.2128L8.00017 2.39453L2.93799 5.2128Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">setting</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.93164 5.35774C10.355 5.81616 10.9612 6.10324 11.6344 6.10324C12.9142 6.10324 13.9517 5.06575 13.9517 3.78594C13.9517 2.50612 12.9142 1.46863 11.6344 1.46863C10.3546 1.46863 9.3171 2.50612 9.3171 3.78594C9.3171 4.03296 9.35575 4.27096 9.42734 4.49422L6.06804 6.45463C5.64466 5.99613 5.03844 5.709 4.36516 5.709C3.08535 5.709 2.04785 6.74649 2.04785 8.02631C2.04785 9.30612 3.08535 10.3436 4.36516 10.3436C5.03854 10.3436 5.64484 10.0564 6.06822 9.59778L9.4282 11.5557C9.35606 11.7797 9.3171 12.0187 9.3171 12.2667C9.3171 13.5465 10.3546 14.584 11.6344 14.584C12.9142 14.584 13.9517 13.5465 13.9517 12.2667C13.9517 10.9869 12.9142 9.94937 11.6344 9.94937C10.9622 9.94937 10.3568 10.2356 9.93356 10.6928L6.57236 8.73416C6.64386 8.51103 6.68247 8.27318 6.68247 8.02631C6.68247 7.77934 6.64383 7.5414 6.57228 7.31819L9.93164 5.35774ZM11.6344 2.46863C12.3619 2.46863 12.9517 3.05841 12.9517 3.78594C12.9517 4.51346 12.3619 5.10324 11.6344 5.10324C11.1607 5.10324 10.7454 4.85324 10.5133 4.47798C10.5084 4.4681 10.5031 4.45831 10.4974 4.44864C10.4918 4.43887 10.4858 4.42937 10.4795 4.42015C10.376 4.23201 10.3171 4.01585 10.3171 3.78594C10.3171 3.05841 10.9069 2.46863 11.6344 2.46863ZM5.48783 7.33682C5.49239 7.34584 5.49725 7.35478 5.50242 7.36363C5.50761 7.37253 5.51305 7.38122 5.5187 7.38968C5.62306 7.57838 5.68247 7.79541 5.68247 8.02631C5.68247 8.25725 5.62304 8.47431 5.51864 8.66304C5.51295 8.67156 5.50748 8.68031 5.50226 8.68928C5.49717 8.698 5.49239 8.70681 5.48789 8.7157C5.25607 9.09243 4.83995 9.34361 4.36516 9.34361C3.63763 9.34361 3.04785 8.75383 3.04785 8.02631C3.04785 7.29878 3.63763 6.709 4.36516 6.709C4.83991 6.709 5.256 6.96014 5.48783 7.33682ZM10.3171 12.2667C10.3171 12.0491 10.3699 11.8438 10.4633 11.663C10.4779 11.6445 10.4914 11.6247 10.5037 11.6037C10.5154 11.5835 10.5256 11.5628 10.5343 11.5418C10.77 11.1849 11.1747 10.9494 11.6344 10.9494C12.3619 10.9494 12.9517 11.5391 12.9517 12.2667C12.9517 12.9942 12.3619 13.584 11.6344 13.584C10.9069 13.584 10.3171 12.9942 10.3171 12.2667Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">share</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1C6.61929 1 5.5 2.11929 5.5 3.5V5H3.5C3.22386 5 3 5.22386 3 5.5V14.5C3 14.7761 3.22386 15 3.5 15H12.5C12.7761 15 13 14.7761 13 14.5V5.5C13 5.22386 12.7761 5 12.5 5H10.5V3.5C10.5 2.11929 9.38071 1 8 1ZM9.5 6V8H10.5V6H12V14H4V6H5.5V8H6.5V6H9.5ZM9.5 5H6.5V3.5C6.5 2.67157 7.17157 2 8 2C8.82843 2 9.5 2.67157 9.5 3.5V5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">shop</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.06689 13.8122L11.0669 1.68787L11.9329 2.18787L4.93292 14.3122L4.06689 13.8122Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">slash</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.99991 11L8.24266 13.5457C8.57592 13.7456 8.99991 13.5056 8.99991 13.1169V2.8831C8.99991 2.49445 8.57592 2.25439 8.24266 2.45435L3.99991 5H2.10473C1.77358 5 1.50504 5.26829 1.50473 5.59944L1.50024 10.3994C1.49993 10.731 1.76865 11 2.10024 11H3.99991ZM4.99991 5.56619L7.99991 3.76619V12.2338L4.99991 10.4338V5.56619ZM3.99991 10H2.50062L2.50435 6H3.99991V10Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M13.515 5.72686C13.194 5.00368 12.7215 4.34191 12.1209 3.78131L12.8032 3.05025C13.4996 3.70026 14.0521 4.47194 14.429 5.32122C14.8059 6.1705 14.9999 7.08075 14.9999 8C14.9999 8.91925 14.8059 9.8295 14.429 10.6788C14.0521 11.5281 13.4996 12.2997 12.8032 12.9497L12.1209 12.2187C12.7215 11.6581 13.194 10.9963 13.515 10.2731C13.8358 9.55017 13.9999 8.77797 13.9999 8C13.9999 7.22203 13.8358 6.44984 13.515 5.72686Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M11.5 8.00027C11.5007 7.12735 11.1403 6.24663 10.4274 5.54638L11.1282 4.83301C12.023 5.71203 12.501 6.84639 12.5 8.00113C12.499 9.15589 12.0191 10.2897 11.1227 11.1675L10.423 10.453C11.1372 9.75363 11.4992 8.87324 11.5 8.00027Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">sound</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.59756 1.81764C7.76262 1.48318 8.23955 1.48318 8.40462 1.81764L10.2053 5.46619L14.2317 6.05126C14.6008 6.10489 14.7482 6.55848 14.4811 6.81882L11.5675 9.65881L12.2553 13.6689C12.3184 14.0366 11.9325 14.3169 11.6024 14.1433L8.00109 12.25L4.39976 14.1433C4.06963 14.3169 3.68378 14.0366 3.74683 13.669L4.43463 9.65881L1.52109 6.81882C1.25401 6.55848 1.40139 6.10489 1.77049 6.05126L5.79689 5.46619L7.59756 1.81764Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">star-filled</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.54158 6.3802L8.00145 3.25955L6.46132 6.3802L3.01749 6.88062L5.50947 9.3097L4.9212 12.7396L8.00145 11.1202L11.0817 12.7396L10.4934 9.3097L12.9854 6.88062L9.54158 6.3802ZM14.5328 6.09497C14.7789 6.13072 14.8771 6.43311 14.6991 6.60667L11.5679 9.65882L12.3071 13.9685C12.3491 14.2136 12.0919 14.4005 11.8718 14.2848L8.00145 12.25L4.13111 14.2848C3.91102 14.4005 3.65379 14.2136 3.69582 13.9685L4.43499 9.65882L1.30382 6.60667C1.12576 6.43311 1.22401 6.13072 1.47008 6.09497L5.79726 5.46619L7.73243 1.5451C7.84248 1.32212 8.16043 1.32213 8.27047 1.5451L10.2056 5.46619L14.5328 6.09497Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">star</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.49796 5.49805H10.502V10.5021H5.49796V5.49805Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8 1C6.61553 1 5.26216 1.41054 4.11101 2.17971C2.95987 2.94888 2.06266 4.04213 1.53285 5.32122C1.00303 6.6003 0.86441 8.00776 1.13451 9.36563C1.4046 10.7235 2.07129 11.9708 3.05026 12.9497C4.02922 13.9287 5.2765 14.5954 6.63437 14.8655C7.99224 15.1356 9.3997 14.997 10.6788 14.4672C11.9579 13.9373 13.0511 13.0401 13.8203 11.889C14.5895 10.7378 15 9.38447 15 8C15 6.14348 14.2625 4.36301 12.9497 3.05025C11.637 1.7375 9.85652 1 8 1ZM8 2C9.18669 2 10.3467 2.35189 11.3334 3.01118C12.3201 3.67047 13.0892 4.60754 13.5433 5.7039C13.9974 6.80026 14.1162 8.00666 13.8847 9.17054C13.6532 10.3344 13.0818 11.4035 12.2426 12.2426C11.4035 13.0818 10.3344 13.6532 9.17054 13.8847C8.00666 14.1162 6.80026 13.9974 5.7039 13.5433C4.60755 13.0892 3.67047 12.3201 3.01119 11.3334C2.3519 10.3467 2 9.18669 2 8C2 6.4087 2.63214 4.88258 3.75736 3.75736C4.88258 2.63214 6.4087 2 8 2Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">stop-circle-1</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.11101 2.17971C5.26216 1.41054 6.61553 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.38447 14.5895 10.7378 13.8203 11.889C13.0511 13.0401 11.9579 13.9373 10.6788 14.4672C9.3997 14.997 7.99224 15.1356 6.63437 14.8655C5.2765 14.5954 4.02922 13.9287 3.05026 12.9497C2.07129 11.9708 1.4046 10.7235 1.13451 9.36563C0.86441 8.00776 1.00303 6.6003 1.53285 5.32122C2.06266 4.04213 2.95987 2.94888 4.11101 2.17971ZM5.49991 5.49995V10.5001H10.5001V5.49995H5.49991Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">stop-circle-filled</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 5H6V11H7V5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M10 5H9V11H10V5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M4.11101 2.17971C5.26216 1.41054 6.61553 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.38447 14.5895 10.7378 13.8203 11.889C13.0511 13.0401 11.9579 13.9373 10.6788 14.4672C9.3997 14.997 7.99224 15.1356 6.63437 14.8655C5.2765 14.5954 4.02922 13.9287 3.05026 12.9497C2.07129 11.9708 1.4046 10.7235 1.13451 9.36563C0.86441 8.00776 1.00303 6.6003 1.53285 5.32122C2.06266 4.04213 2.95987 2.94888 4.11101 2.17971ZM11.3334 3.01118C10.3467 2.35189 9.18669 2 8 2C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8C2 9.18669 2.3519 10.3467 3.01119 11.3334C3.67047 12.3201 4.60755 13.0892 5.7039 13.5433C6.80026 13.9974 8.00666 14.1162 9.17054 13.8847C10.3344 13.6532 11.4035 13.0818 12.2426 12.2426C13.0818 11.4035 13.6532 10.3344 13.8847 9.17054C14.1162 8.00666 13.9974 6.80026 13.5433 5.7039C13.0892 4.60754 12.3201 3.67047 11.3334 3.01118Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">stop-circle</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 5H6V11H7V5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M10 5H9V11H10V5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">stop</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.20739 8.99975L15.0002 8.99976L15.0002 9.99976L2.07267 9.99975C1.60049 9.99975 1.36402 9.42885 1.69792 9.09497L5.6467 5.14637L6.35379 5.85349L3.20739 8.99975Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">swap-left</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.7931 8.99975L1.00024 8.99976L1.00024 9.99976L13.9278 9.99975C14.4 9.99975 14.6365 9.42884 14.3026 9.09497L10.3538 5.14637L9.6467 5.8535L12.7931 8.99975Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">swap-right</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.25024 6.00005L13.0082 6.00005L9.16404 2.25121L9.86221 1.53528L14.5334 6.09061C14.8738 6.4225 14.6388 7.00005 14.1634 7.00005L1.25024 7.00005V6.00005Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M14.75 10.0001L3.02026 10.0001L6.83053 13.6005L6.14372 14.3273L1.47454 9.91528C1.1261 9.58601 1.35906 9.00005 1.83855 9.00005L14.75 9.00005V10.0001Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">swap</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 9.771H13.2192C13.8698 9.771 14.3472 9.15961 14.1894 8.52846L12.6894 2.52846C12.5781 2.08329 12.1781 1.771 11.7192 1.771L3 1.771C2.44772 1.771 2 2.21871 2 2.771L2 7.771C2 8.32328 2.44772 8.771 3 8.771L5 8.771L7 13.771H9C9.55229 13.771 10 13.3233 10 12.771V9.771ZM6 8.57841L6 2.771L11.7192 2.771L13.2192 8.771H9L9 12.771H7.67703L6 8.57841ZM5 7.771L3 7.771L3 2.771L5 2.771L5 7.771Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">thumb-down</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 6H13.2192C13.8698 6 14.3472 6.61139 14.1894 7.24254L12.6894 13.2425C12.5781 13.6877 12.1781 14 11.7192 14H3C2.44772 14 2 13.5523 2 13V8C2 7.44772 2.44772 7 3 7H5L7 2H9C9.55228 2 10 2.44772 10 3V6ZM6 7.19258V13H11.7192L13.2192 7H9V3H7.67703L6 7.19258ZM5 8H3V13H5V8Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">thumb-up</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM7.5 5H8.5V7.97471L11.3538 10.8285L10.6467 11.5356L7.5 8.38892V5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">time-filled</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 4V8.38892L10.0002 11L10.7074 10.2929L8.5 7.97471V4H7.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">time</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1C6.6247 1 5.36829 1.5546 4.46644 2.46644C3.5546 3.36829 3 4.6247 3 6C3 7.37457 3.554 8.63036 4.46498 9.53211C4.77388 9.84935 5.12363 10.1126 5.5 10.3289V12C5.5 12.5523 5.94772 13 6.5 13H9.5C10.0523 13 10.5 12.5523 10.5 12V10.3289C10.8764 10.1126 11.2261 9.84935 11.535 9.5321C12.446 8.63036 13 7.37456 13 6C13 3.23386 10.7661 1 8 1ZM5.17572 3.17138C5.89371 2.44452 6.8964 2 8 2C10.2139 2 12 3.78614 12 6C12 7.1036 11.5555 8.10629 10.8286 8.82428L10.8214 8.83161C10.5255 9.13619 10.173 9.3845 9.77639 9.58279L9.5 9.72098V12H6.5V9.72098L6.22361 9.58279C5.82703 9.3845 5.47452 9.13619 5.17864 8.83161L5.17138 8.82428C4.44452 8.10629 4 7.1036 4 6C4 4.8964 4.44452 3.89371 5.17138 3.17572L5.17572 3.17138Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M5.5 14V15H10.5V14H5.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">tips</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.75056 8.24943L10.3118 8.40417C11.3109 8.67963 12.3996 8.42901 13.1581 7.67052C13.8303 6.99831 14.1035 6.06341 13.9654 5.16621L12.909 6.22262C12.3232 6.80839 11.3735 6.80841 10.7877 6.22265L10.3634 5.7984C9.77758 5.21262 9.77757 4.26285 10.3634 3.67705L11.4198 2.62058C10.5226 2.48241 9.58765 2.75565 8.91542 3.42788C8.15697 4.18632 7.90634 5.27494 8.18172 6.27395L8.33641 6.83516L2.53207 12.6395L3.94628 14.0537L9.75056 8.24943ZM12.2439 1.7965C12.5739 1.90785 12.893 2.06333 13.1918 2.26284L11.0705 4.38415C10.8752 4.57942 10.8752 4.89601 11.0705 5.09127L11.4948 5.51552C11.69 5.71077 12.0066 5.71077 12.2019 5.51551L14.3231 3.39423C14.5227 3.69303 14.6781 4.01209 14.7895 4.34211C15.255 5.72209 14.9491 7.29373 13.8652 8.37763C12.8375 9.40526 11.3715 9.73365 10.046 9.3682L4.65339 14.7608C4.26287 15.1513 3.6297 15.1513 3.23918 14.7608L1.82496 13.3466C1.43444 12.9561 1.43444 12.3229 1.82496 11.9324L7.21767 6.53969C6.85233 5.21428 7.18074 3.74834 8.20831 2.72077C9.29223 1.63686 10.8639 1.33087 12.2439 1.7965Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">tools</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.33339 1.33337V3.00004H1.33339V4.33337H6.30653C5.9584 5.21602 5.48812 6.03754 4.91647 6.77698C4.54688 6.29884 4.21964 5.78634 3.94041 5.24514L3.63472 4.65269L2.44981 5.26405L2.75549 5.8565C3.11085 6.54523 3.53467 7.19278 4.01796 7.79018C3.41506 8.38424 2.73707 8.90247 1.9995 9.32926L1.42247 9.66315L2.09025 10.8172L2.66728 10.4833C3.48744 10.0087 4.24271 9.4343 4.91641 8.77655C5.59021 9.43444 6.34569 10.009 7.16626 10.4836L7.74334 10.8174L8.41094 9.66328L7.83386 9.32948C7.09618 8.90279 6.41802 8.3845 5.81493 7.79022C6.64084 6.76947 7.29317 5.60227 7.72685 4.33337H8.66672V3.00004H5.66672V1.33337H4.33339ZM11.0001 6.10939L7.11217 14.3171L8.31716 14.8879L9.05352 13.3334H12.9466L13.683 14.8879L14.8879 14.3171L11.0001 6.10939ZM12.315 12H9.6851L11.0001 9.22403L12.315 12Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">translate-1</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.33325 3.33337C1.33325 2.2288 2.22868 1.33337 3.33325 1.33337H4.66659C5.77115 1.33337 6.66658 2.2288 6.66658 3.33337V7.33337H5.33325V5.66671H2.66659V7.33337H1.33325V3.33337ZM2.66659 4.33337H5.33325V3.33337C5.33325 2.96518 5.03477 2.66671 4.66659 2.66671H3.33325C2.96506 2.66671 2.66659 2.96518 2.66659 3.33337V4.33337ZM7.99992 2.33337H11.9999C13.1045 2.33337 13.9999 3.2288 13.9999 4.33337V6.00004H12.6666V4.33337C12.6666 3.96518 12.3681 3.66671 11.9999 3.66671H7.99992V2.33337ZM11.9999 7.66671V8.66671H14.6666V10H13.9587C13.812 11.1759 13.2826 12.2328 12.4991 13.0423C12.9626 13.2301 13.4693 13.3334 13.9999 13.3334H14.6666V14.6667H13.9999C13.0283 14.6667 12.1176 14.4069 11.3333 13.9532C10.5488 14.407 9.63805 14.6667 8.66658 14.6667H7.99992V13.3334H8.66658C9.19738 13.3334 9.70403 13.23 10.1675 13.0422C9.76569 12.6271 9.43081 12.1471 9.18017 11.6194L8.8941 11.0173L10.0985 10.4451L10.3845 11.0473C10.6145 11.5314 10.9386 11.9618 11.3332 12.3149C11.9946 11.7229 12.4579 10.914 12.6113 10H7.99992V8.66671H10.6666V7.66671H11.9999ZM3.99992 8.66671V12.6667C3.99992 13.0349 4.2984 13.3334 4.66659 13.3334H6.33325V14.6667H4.66659C3.56202 14.6667 2.66659 13.7713 2.66659 12.6667V8.66671H3.99992Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">translate</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.3556 2.12549L8.00004 5.81174L11.6445 2.12549L12.3556 2.82855L8.42672 6.80251C8.19187 7.04006 7.80822 7.04006 7.57337 6.80251L3.64447 2.82855L4.3556 2.12549Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M4.30769 13.8306L8.00003 10.1382L11.6924 13.8306L12.3995 13.1235L8.42429 9.14829C8.18998 8.91397 7.81008 8.91397 7.57577 9.14829L3.60059 13.1235L4.30769 13.8306Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">unfold-less</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.6445 6.84005L8.00001 3.1538L4.35559 6.84005L3.64446 6.13699L7.57334 2.16303C7.80819 1.92548 8.19183 1.92548 8.42669 2.16303L12.3556 6.13699L11.6445 6.84005Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M11.6924 9.15791L8.00003 12.8503L4.30769 9.15791L3.60059 9.86502L7.57576 13.8402C7.81008 14.0745 8.18998 14.0745 8.42429 13.8402L12.3995 9.86502L11.6924 9.15791Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">unfold-more</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.73759 6.6778L7.50118 2.91421L7.5012 11.5L8.5012 11.5L8.50118 2.91422L12.2648 6.6778L12.9719 5.97069L8.35473 1.35355C8.15947 1.15829 7.84289 1.15829 7.64762 1.35355L3.03048 5.9707L3.73759 6.6778Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2 11V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V11H13V13H3V11H2Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">upload</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 6H5.5V5H7.5V6Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M8.5 6H10.5V5H8.5V6Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M4 8V2.5C4 2.22386 4.22386 2 4.5 2H11.5C11.7761 2 12 2.22386 12 2.5V8C12.5523 8 13 8.44772 13 9V14C13 14.5523 12.5523 15 12 15H4C3.44772 15 3 14.5523 3 14V9C3 8.44772 3.44772 8 4 8ZM5 8H11V3H5V8ZM4 9V14H12V9H4Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">usb</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 8.5C9.933 8.5 11.5 6.933 11.5 5C11.5 3.067 9.933 1.5 8 1.5C6.067 1.5 4.5 3.067 4.5 5C4.5 6.933 6.067 8.5 8 8.5ZM8 7.5C6.61929 7.5 5.5 6.38071 5.5 5C5.5 3.61929 6.61929 2.5 8 2.5C9.38071 2.5 10.5 3.61929 10.5 5C10.5 6.38071 9.38071 7.5 8 7.5Z" fill="currentColor"/>
<path d="M11.5 10.9864C10.3864 10.6698 9.21367 10.5 8 10.5C6.0334 10.5 4.17435 10.9457 2.5 11.7398V13.5H9.5V14.5H2C1.72386 14.5 1.5 14.2761 1.5 14V11.7246C1.5 11.3547 1.70302 11.0122 2.03686 10.8528C3.8494 9.98708 5.86651 9.5 8 9.5C9.20942 9.5 10.3814 9.65652 11.5 9.9498V10.9864Z" fill="currentColor"/>
<path d="M12.75 13.75V16H13.75V13.75H16V12.75H13.75V10.5H12.75V12.75H10.5V13.75H12.75Z" fill="currentColor"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">user-add</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 10.5C9.24124 10.5 10.4221 10.8126 11.5 11.3795V12.5L12.5 12.5V11.3584C12.5 11.0106 12.3213 10.6842 12.0145 10.5204C10.7893 9.86653 9.43252 9.5 8 9.5C6.56748 9.5 5.21075 9.86653 3.9855 10.5204C3.67873 10.6842 3.5 11.0106 3.5 11.3584V12.5H4.5V11.3795C5.57794 10.8126 6.75876 10.5 8 10.5Z" fill="currentColor"/>
<path d="M10.5 6C10.5 7.38071 9.38071 8.5 8 8.5C6.61929 8.5 5.5 7.38071 5.5 6C5.5 4.61929 6.61929 3.5 8 3.5C9.38071 3.5 10.5 4.61929 10.5 6ZM9.5 6C9.5 5.17157 8.82843 4.5 8 4.5C7.17157 4.5 6.5 5.17157 6.5 6C6.5 6.82843 7.17157 7.5 8 7.5C8.82843 7.5 9.5 6.82843 9.5 6Z" fill="currentColor"/>
<path d="M2.5 1.5C1.94772 1.5 1.5 1.94772 1.5 2.5V13.5C1.5 14.0523 1.94772 14.5 2.5 14.5H13.5C14.0523 14.5 14.5 14.0523 14.5 13.5V2.5C14.5 1.94772 14.0523 1.5 13.5 1.5H2.5ZM13.5 2.5V13.5H2.5L2.5 2.5H13.5Z" fill="currentColor"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">user-avatar</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M8 9C9.53535 9 10.78 7.75535 10.78 6.22C10.78 4.68465 9.53535 3.44 8 3.44C6.46465 3.44 5.22 4.68465 5.22 6.22C5.22 7.75535 6.46465 9 8 9ZM8 8C7.01693 8 6.22 7.20307 6.22 6.22C6.22 5.23693 7.01693 4.44 8 4.44C8.98307 4.44 9.78 5.23693 9.78 6.22C9.78 7.20307 8.98307 8 8 8Z" fill="currentColor"/>
<path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM12.9955 11.3246C11.4748 10.4765 9.78555 10 7.99998 10C6.21441 10 4.52519 10.4765 3.00451 11.3246C2.36991 10.3729 2 9.22966 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.22966 13.6301 10.3729 12.9955 11.3246ZM12.3632 12.1185C11.2693 13.277 9.71909 14 8 14C6.2809 14 4.73066 13.277 3.63675 12.1185C4.9805 11.3976 6.45282 11 7.99998 11C9.54714 11 11.0195 11.3976 12.3632 12.1185Z" fill="currentColor"/>
</g>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">user-circle</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 8.5C9.933 8.5 11.5 6.933 11.5 5C11.5 3.067 9.933 1.5 8 1.5C6.067 1.5 4.5 3.067 4.5 5C4.5 6.933 6.067 8.5 8 8.5ZM8 7.5C6.61929 7.5 5.5 6.38071 5.5 5C5.5 3.61929 6.61929 2.5 8 2.5C9.38071 2.5 10.5 3.61929 10.5 5C10.5 6.38071 9.38071 7.5 8 7.5Z" fill="currentColor"/>
<path d="M10.5 10.7452C9.69127 10.5844 8.85582 10.5 8 10.5C6.0334 10.5 4.17435 10.9457 2.5 11.7398V13.5H10.5V14.5H2C1.72386 14.5 1.5 14.2761 1.5 14V11.7246C1.5 11.3547 1.70302 11.0122 2.03686 10.8528C3.8494 9.98708 5.86651 9.5 8 9.5C8.85386 9.5 9.68908 9.57802 10.5 9.7271V10.7452Z" fill="currentColor"/>
<path d="M11.4038 14.2929L12.9947 12.702L11.4037 11.1109L12.1108 10.4038L13.7018 11.9949L15.2929 10.4038L16 11.1109L14.4089 12.702L15.9999 14.2929L15.2928 15L13.7018 13.4091L12.1109 15L11.4038 14.2929Z" fill="currentColor"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">user-clear</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3284 7.82844C14.8905 6.26634 14.8905 3.73368 13.3284 2.17158L14.0355 1.46448C15.9881 3.4171 15.9881 6.58292 14.0355 8.53555L13.3284 7.82844Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M11 5C11 6.933 9.433 8.5 7.5 8.5C5.567 8.5 4 6.933 4 5C4 3.067 5.567 1.5 7.5 1.5C9.433 1.5 11 3.067 11 5ZM10 5C10 3.61929 8.88071 2.5 7.5 2.5C6.11929 2.5 5 3.61929 5 5C5 6.38071 6.11929 7.5 7.5 7.5C8.88071 7.5 10 6.38071 10 5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M13.4631 10.8528C13.797 11.0122 14 11.3547 14 11.7246L14 14C14 14.2761 13.7761 14.5 13.5 14.5L1.5 14.5C1.22386 14.5 1 14.2761 1 14V11.7246C1 11.3547 1.20302 11.0122 1.53686 10.8528C3.3494 9.98707 5.36651 9.5 7.5 9.5C9.63349 9.5 11.6506 9.98708 13.4631 10.8528ZM7.5 10.5C5.5334 10.5 3.67434 10.9457 2 11.7398L2 13.5H13V11.7398C11.3257 10.9457 9.4666 10.5 7.5 10.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M11.9142 3.58577C12.6953 4.36682 12.6953 5.63315 11.9142 6.4142L12.6213 7.1213C13.7929 5.94973 13.7929 4.05023 12.6213 2.87866L11.9142 3.58577Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">user-talk</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 5C11.5 6.933 9.933 8.5 8 8.5C6.067 8.5 4.5 6.933 4.5 5C4.5 3.067 6.067 1.5 8 1.5C9.933 1.5 11.5 3.067 11.5 5ZM10.5 5C10.5 3.61929 9.38071 2.5 8 2.5C6.61929 2.5 5.5 3.61929 5.5 5C5.5 6.38071 6.61929 7.5 8 7.5C9.38071 7.5 10.5 6.38071 10.5 5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M13.9631 10.8528C14.297 11.0122 14.5 11.3547 14.5 11.7246V14C14.5 14.2761 14.2761 14.5 14 14.5H2C1.72386 14.5 1.5 14.2761 1.5 14V11.7246C1.5 11.3547 1.70302 11.0122 2.03686 10.8528C3.8494 9.98708 5.86651 9.5 8 9.5C10.1335 9.5 12.1506 9.98708 13.9631 10.8528ZM8 10.5C6.0334 10.5 4.17435 10.9457 2.5 11.7398V13.5H13.5V11.7398C11.8257 10.9457 9.9666 10.5 8 10.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">user</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.2349 12.75V14.5H14.2349V12.75H15.9849V11.75H14.2349V10H13.2349V11.75H11.4849V12.75H13.2349Z" fill="currentColor"/>
<path d="M7.46171 1.34645C7.02232 1.12482 6.52575 1 6.00003 1C4.2051 1 2.75003 2.45507 2.75003 4.25C2.75003 6.02947 4.18015 7.47491 5.95373 7.49968V6.49953C4.73246 6.47488 3.75003 5.47717 3.75003 4.25C3.75003 3.00736 4.75739 2 6.00003 2C6.2937 2 6.57424 2.05626 6.83144 2.1586L7.46171 1.34645Z" fill="currentColor"/>
<path d="M5.95373 8.22094C4.01922 8.22779 2.18917 8.66419 0.540929 9.43593C0.204537 9.59344 0 9.9372 0 10.3086V12.5C0 12.7761 0.223857 13 0.5 13H2.85709V12H1V10.3252C2.51071 9.62379 4.18421 9.22774 5.95373 9.22095V8.22094Z" fill="currentColor"/>
<path d="M13.2499 5.06354C13.2499 6.85846 11.7948 8.31354 9.99992 8.31354C8.20499 8.31354 6.74992 6.85846 6.74992 5.06354C6.74992 3.26861 8.20499 1.81354 9.99992 1.81354C11.7948 1.81354 13.2499 3.26861 13.2499 5.06354ZM12.2499 5.06354C12.2499 3.8209 11.2426 2.81354 9.99992 2.81354C8.75728 2.81354 7.74992 3.8209 7.74992 5.06354C7.74992 6.30618 8.75728 7.31354 9.99992 7.31354C11.2426 7.31354 12.2499 6.30618 12.2499 5.06354Z" fill="currentColor"/>
<path d="M12 10.5988C11.35 10.4879 10.6821 10.43 9.99997 10.43C8.21334 10.43 6.52384 10.8269 4.99996 11.5344V13.5H12V14.5H4.49996C4.22382 14.5 3.99996 14.2761 3.99996 14V11.5178C3.99996 11.1464 4.2045 10.8026 4.54089 10.6451C6.20227 9.86723 8.04837 9.43005 9.99997 9.43005C10.6806 9.43005 11.3484 9.48322 12 9.58548V10.5988Z" fill="currentColor"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">usergroup-add</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.46171 1.34645C7.02232 1.12482 6.52575 1 6.00003 1C4.2051 1 2.75003 2.45507 2.75003 4.25C2.75003 6.02947 4.18015 7.47491 5.95373 7.49968V6.49953C4.73246 6.47488 3.75003 5.47717 3.75003 4.25C3.75003 3.00736 4.75739 2 6.00003 2C6.2937 2 6.57424 2.05626 6.83144 2.1586L7.46171 1.34645Z" fill="currentColor"/>
<path d="M5.95373 8.22094C4.01922 8.22779 2.18917 8.66419 0.540929 9.43593C0.204537 9.59344 0 9.9372 0 10.3086V12.5C0 12.7761 0.223857 13 0.5 13H2.85709V12H1V10.3252C2.51071 9.62379 4.18421 9.22774 5.95373 9.22095V8.22094Z" fill="currentColor"/>
<path d="M13.2499 5.06354C13.2499 6.85846 11.7948 8.31354 9.99992 8.31354C8.20499 8.31354 6.74992 6.85846 6.74992 5.06354C6.74992 3.26861 8.20499 1.81354 9.99992 1.81354C11.7948 1.81354 13.2499 3.26861 13.2499 5.06354ZM12.2499 5.06354C12.2499 3.8209 11.2426 2.81354 9.99992 2.81354C8.75728 2.81354 7.74992 3.8209 7.74992 5.06354C7.74992 6.30618 8.75728 7.31354 9.99992 7.31354C11.2426 7.31354 12.2499 6.30618 12.2499 5.06354Z" fill="currentColor"/>
<path d="M11 10.4718C10.6704 10.4442 10.3369 10.43 9.99997 10.43C8.21334 10.43 6.52384 10.8269 4.99996 11.5344V13.5H10.5V14.5H4.49996C4.22382 14.5 3.99996 14.2761 3.99996 14V11.5178C3.99996 11.1464 4.2045 10.8026 4.54089 10.6451C6.20227 9.86723 8.04837 9.43005 9.99997 9.43005C10.3366 9.43005 10.6701 9.44305 11 9.46857V10.4718Z" fill="currentColor"/>
<path d="M13.1369 12.344L11.6881 13.7929L12.3952 14.5L13.844 13.0512L15.2929 14.5L16 13.7929L14.5512 12.344L16.0001 10.8951L15.293 10.188L13.844 11.6369L12.3951 10.188L11.688 10.8951L13.1369 12.344Z" fill="currentColor"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">usergroup-clear</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00003 1C6.52575 1 7.02232 1.12482 7.46171 1.34645L6.83144 2.1586C6.57424 2.05626 6.2937 2 6.00003 2C4.75739 2 3.75003 3.00736 3.75003 4.25C3.75003 5.47717 4.73246 6.47488 5.95373 6.49953V7.49968C4.18015 7.47491 2.75003 6.02947 2.75003 4.25C2.75003 2.45507 4.2051 1 6.00003 1Z" fill="currentColor"/>
<path d="M0.540929 9.43593C2.18917 8.66419 4.01922 8.22779 5.95373 8.22094V9.22095C4.18421 9.22774 2.51071 9.62379 1 10.3252V12H2.85709V13H0.5C0.223857 13 0 12.7761 0 12.5V10.3086C0 9.9372 0.204537 9.59344 0.540929 9.43593Z" fill="currentColor"/>
<path d="M9.99992 8.31354C8.20499 8.31354 6.74992 6.85846 6.74992 5.06354C6.74992 3.26861 8.20499 1.81354 9.99992 1.81354C11.7948 1.81354 13.2499 3.26861 13.2499 5.06354C13.2499 6.85846 11.7948 8.31354 9.99992 8.31354ZM9.99992 7.31354C11.2426 7.31354 12.2499 6.30618 12.2499 5.06354C12.2499 3.8209 11.2426 2.81354 9.99992 2.81354C8.75728 2.81354 7.74992 3.8209 7.74992 5.06354C7.74992 6.30618 8.75728 7.31354 9.99992 7.31354Z" fill="currentColor"/>
<path d="M16 11.5178C16 11.1464 15.7954 10.8026 15.459 10.6451C13.7977 9.86723 11.9516 9.43005 9.99997 9.43005C8.04837 9.43005 6.20227 9.86723 4.54089 10.6451C4.2045 10.8026 3.99996 11.1464 3.99996 11.5178V14C3.99996 14.2761 4.22382 14.5 4.49996 14.5H15.5C15.7761 14.5 16 14.2761 16 14V11.5178ZM15 11.5344V13.5H4.99996V11.5344C6.52384 10.8269 8.21334 10.43 9.99997 10.43C11.7866 10.43 13.4761 10.8269 15 11.5344Z" fill="currentColor"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">usergroup</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.05 7.74017C11.25 7.85564 11.25 8.14432 11.05 8.25979L5.95 11.2043C5.75 11.3198 5.5 11.1754 5.5 10.9445L5.5 5.0555C5.5 4.82456 5.75 4.68023 5.95 4.7957L11.05 7.74017ZM6.5 6.26794V9.73204L9.5 7.99998L6.5 6.26794Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2 3C2 2.44772 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V3ZM3 3L3 13H13V3H3Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">video</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 2V14H4.5L4.5 2H3.5ZM7.5 14L7.5 2H8.5L8.5 14H7.5ZM11.5 14L11.5 2H12.5L12.5 14H11.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">view-column</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 4.5H2V3.5H14V4.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M14 8.5H2V7.5H14V8.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2 12.5H14V11.5H2V12.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">view-list</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 7.5L11 7.5V8.5L4 8.5V7.5Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M10 10L4 10V11H10V10Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M2 3C2 2.44772 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V3ZM3 3L3 5H13V3H3ZM3 6L3 13H13V6H3Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">view-module</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 4.5L13.5 4.5C14.0523 4.5 14.5 4.94772 14.5 5.5V12C14.5 12.5523 14.0523 13 13.5 13H2.5C1.94772 13 1.5 12.5523 1.5 12V3C1.5 2.44771 1.94772 2 2.5 2H10.5C11.0523 2 11.5 2.44771 11.5 3V4.5ZM10.5 3L2.5 3V4.5L10.5 4.5V3ZM13.5 5.5H2.5L2.5 12H13.5V5.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">wallet</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.1536 10.7038L10.8516 9.98785C10.0271 9.14905 9.02319 8.68872 7.98486 8.68872C6.95923 8.68872 5.96704 9.13806 5.14819 9.9577L5.84595 10.6735C6.50903 10.0049 7.26538 9.68872 7.98486 9.68872C8.71533 9.68872 9.4834 10.0145 10.1536 10.7038Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M12.1785 8.6272L12.8767 7.91101C11.5029 6.49567 9.77637 5.71283 7.9856 5.71283C6.20728 5.71283 4.49219 6.48474 3.12329 7.88123L3.82153 8.59729C5.02856 7.35767 6.50391 6.71283 7.9856 6.71283C9.479 6.71283 10.9658 7.36804 12.1785 8.6272Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M14.1331 6.62256L14.8315 5.90631C12.9297 3.94031 10.5042 2.8493 7.98584 2.8493C5.47998 2.8493 3.06616 3.92938 1.1687 5.87677L1.86694 6.59296C3.59912 4.80591 5.77148 3.8493 7.98584 3.8493C10.2124 3.8493 12.3962 4.81647 14.1331 6.62256Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M9 12.5C9 13.0523 8.55225 13.5 8 13.5C7.44775 13.5 7 13.0523 7 12.5C7 11.9477 7.44775 11.5 8 11.5C8.55225 11.5 9 11.9477 9 12.5Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">wifi</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 7V9H7V7H9V6H7V4H6V6H4V7H6Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M9.51099 10.2181C8.69245 10.8812 7.64973 11.2784 6.51424 11.2784C3.88302 11.2784 1.75 9.14541 1.75 6.51421C1.75 3.88301 3.88302 1.75 6.51424 1.75C9.14545 1.75 11.2785 3.88301 11.2785 6.51421C11.2785 7.64972 10.8812 8.69245 10.2181 9.511L13.7494 13.0423L13.0423 13.7494L9.51099 10.2181ZM10.2785 6.51421C10.2785 4.4353 8.59317 2.75 6.51424 2.75C4.4353 2.75 2.75 4.4353 2.75 6.51421C2.75 8.59312 4.4353 10.2784 6.51424 10.2784C8.59317 10.2784 10.2785 8.59312 10.2785 6.51421Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">zoom-in</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div>
<div class="t-icons-view__wrapper">
    <svg width="2em" height="2em" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 7H4V6H9V7Z" fill="currentColor" fill-opacity="0.9"/>
<path d="M9.51099 10.2181C8.69245 10.8812 7.64973 11.2784 6.51424 11.2784C3.88302 11.2784 1.75 9.14541 1.75 6.51421C1.75 3.88301 3.88302 1.75 6.51424 1.75C9.14545 1.75 11.2785 3.88301 11.2785 6.51421C11.2785 7.64972 10.8812 8.69245 10.2181 9.511L13.7494 13.0423L13.0423 13.7494L9.51099 10.2181ZM10.2785 6.51421C10.2785 4.4353 8.59317 2.75 6.51424 2.75C4.4353 2.75 2.75 4.4353 2.75 6.51421C2.75 8.59312 4.4353 10.2784 6.51424 10.2784C8.59317 10.2784 10.2785 8.59312 10.2785 6.51421Z" fill="currentColor" fill-opacity="0.9"/>
</svg>

    <div class="t-icons-view__name" style="margin-top: 12px; text-align:center">zoom-out</div>
    <div class="t-icons-view__actions" style="margin-top: 12px; text-align:center">
      `,`
    </div>
  </div></div>`])),n==="develop"?V("add-circle","AddCircle"):T("add-circle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 8.5H4.5V7.5H7.5V4.5H8.5V7.5H11.5V8.5H8.5V11.5H7.5V8.5Z" fill="black" fill-opacity="0.9"/>
<path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 11.3137 11.3137 14 8 14Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("add-rectangle","AddRectangle"):T("add-rectangle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 11V8.5H5V7.5H7.5V5H8.5V7.5H11V8.5H8.5V11H7.5Z" fill="black" fill-opacity="0.9"/>
<path d="M3 14C2.44772 14 2 13.5523 2 13V3C2 2.44771 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3L14 13C14 13.5523 13.5523 14 13 14L3 14ZM3 13L13 13L13 3L3 3L3 13Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("add","Add"):T("add",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.34998 8.64998V12.5H8.64998V8.64998H12.5V7.34998H8.64998V3.5H7.34998V7.34998H3.5V8.64998H7.34998Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("app","App"):T("app",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.25 1.75C9.59315 1.75 8.25 3.09315 8.25 4.75C8.25 6.40685 9.59315 7.75 11.25 7.75C12.9069 7.75 14.25 6.40685 14.25 4.75C14.25 3.09315 12.9069 1.75 11.25 1.75ZM9.25 4.75C9.25 3.64543 10.1454 2.75 11.25 2.75C12.3546 2.75 13.25 3.64543 13.25 4.75C13.25 5.85457 12.3546 6.75 11.25 6.75C10.1454 6.75 9.25 5.85457 9.25 4.75Z" fill="black" fill-opacity="0.9"/>
<path d="M2 3C2 2.44772 2.44772 2 3 2H6.5C7.05228 2 7.5 2.44772 7.5 3V6.5C7.5 7.05228 7.05228 7.5 6.5 7.5H3C2.44772 7.5 2 7.05228 2 6.5V3ZM3 3V6.5H6.5V3H3Z" fill="black" fill-opacity="0.9"/>
<path d="M2 9.5C2 8.94772 2.44772 8.5 3 8.5H6.5C7.05228 8.5 7.5 8.94772 7.5 9.5V13C7.5 13.5523 7.05228 14 6.5 14H3C2.44772 14 2 13.5523 2 13V9.5ZM3 9.5V13H6.5V9.5H3Z" fill="black" fill-opacity="0.9"/>
<path d="M8.5 9.5C8.5 8.94772 8.94772 8.5 9.5 8.5H13C13.5523 8.5 14 8.94772 14 9.5V13C14 13.5523 13.5523 14 13 14H9.5C8.94772 14 8.5 13.5523 8.5 13V9.5ZM9.5 13H13V9.5H9.5V13Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("arrow-down-rectangle","ArrowDownRectangle"):T("arrow-down-rectangle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7458 7.54711L8.5 9.79289L8.5 4.5L7.5 4.5L7.5 9.79289L5.25422 7.54711L4.54711 8.25422L8 11.7071L11.4529 8.25422L10.7458 7.54711Z" fill="black" fill-opacity="0.9"/>
<path d="M3 14C2.44772 14 2 13.5523 2 13V3C2 2.44771 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3L14 13C14 13.5523 13.5523 14 13 14L3 14ZM3 13L13 13L13 3L3 3L3 13Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("arrow-down","ArrowDown"):T("arrow-down",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.50009 2.00014L8.49992 12.0858L12.1462 8.4395L12.8533 9.14661L8.21203 13.7879C8.09488 13.9051 7.90493 13.9051 7.78777 13.7879L3.14648 9.14661L3.85359 8.4395L7.49992 12.0858L7.50009 2.00012L8.50009 2.00014Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("arrow-left","ArrowLeft"):T("arrow-left",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.91423 8.49963L7.56053 12.1459L6.85342 12.853L2.21213 8.21174C2.09497 8.09458 2.09497 7.90463 2.21213 7.78748L6.85342 3.14619L7.56053 3.8533L3.91419 7.49963L13.9999 7.4998L13.9999 8.4998L3.91423 8.49963Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("arrow-right","ArrowRight"):T("arrow-right",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0857 7.50013L8.43938 3.85384L9.14649 3.14673L13.7878 7.78802C13.9049 7.90517 13.9049 8.09512 13.7878 8.21228L9.14649 12.8536L8.43938 12.1465L12.0857 8.50013L2 8.49996L2.00002 7.49996L12.0857 7.50013Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("arrow-triangle-down-filled","ArrowTriangleDownFilled"):T("arrow-triangle-down-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 8.00008H13L8 14.6667L3 8.00008H6V1.33342H10V8.00008Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("arrow-triangle-down","ArrowTriangleDown"):T("arrow-triangle-down",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 8.00008H3L8 14.6667L13 8.00008H10V1.33342H6V8.00008ZM5.66667 9.33342H7.33333V2.66675H8.66667V9.33342H10.3333L8 12.4445L5.66667 9.33342Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("arrow-triangle-up-filled","ArrowTriangleUpFilled"):T("arrow-triangle-up-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 8.00004H13L8 1.33337L3 8.00004H6V14.6667H10V8.00004Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("arrow-triangle-up","ArrowTriangleUp"):T("arrow-triangle-up",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 8.00004V14.6667H10V8.00004H13L8 1.33337L3 8.00004H6ZM5.66667 6.66671L8 3.5556L10.3333 6.66671H8.66667V13.3334H7.33333V6.66671H5.66667Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("arrow-up","ArrowUp"):T("arrow-up",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.49988 3.91436L3.85359 7.56065L3.14648 6.85354L7.78777 2.21226C7.90493 2.0951 8.09488 2.0951 8.21204 2.21226L12.8533 6.85354L12.1462 7.56065L8.49988 3.91432L8.49971 14L7.49971 14L7.49988 3.91436Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("attach","Attach"):T("attach",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.1269 3.85578C11.3379 3.07643 10.0678 3.08032 9.28361 3.86448L2.07405 11.074L1.36694 10.3669L8.57651 3.15737C9.74951 1.98437 11.6495 1.97856 12.8297 3.14436C14.0201 4.32029 14.0259 6.24042 12.8427 7.42361L7.00276 13.2636C6.26721 13.9991 5.07466 13.9991 4.33912 13.2636C3.60357 12.5281 3.60357 11.3355 4.33912 10.6L10.0131 4.92602L10.7202 5.63313L5.04622 11.3071C4.7012 11.6521 4.7012 12.2115 5.04622 12.5565C5.39124 12.9015 5.95063 12.9015 6.29565 12.5565L12.1356 6.7165C12.9266 5.92553 12.9227 4.6419 12.1269 3.85578Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("backtop-rectangle","BacktopRectangle"):T("backtop-rectangle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.49755 8.19542L5.9441 9.72019L5.2282 9.02199L8.00185 6.29956L10.8007 9.02923L10.087 9.72972L8.50841 8.19011L8.50847 11.9988L7.49761 11.9989L7.49755 8.19542Z" fill="black" fill-opacity="0.9"/>
<path d="M4.49903 5.4989H11.499V4.4989H4.49903V5.4989Z" fill="black" fill-opacity="0.9"/>
<path d="M2.99903 1.9989C2.44674 1.9989 1.99903 2.44662 1.99903 2.9989L1.99902 12.9989C1.99902 13.5512 2.44674 13.9989 2.99902 13.9989L12.999 13.9989C13.5513 13.9989 13.999 13.5512 13.999 12.9989L13.999 2.9989C13.999 2.44662 13.5513 1.9989 12.999 1.9989L2.99903 1.9989ZM12.999 2.9989L12.999 12.9989L2.99902 12.9989L2.99903 2.9989L12.999 2.9989Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("backtop","Backtop"):T("backtop",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.99902 2.9989H13.999V1.9989H1.99902V2.9989Z" fill="black" fill-opacity="0.9"/>
<path d="M3.37689 10.2293L7.48663 6.19544L7.48666 14.8438L8.49751 14.8437L8.49748 6.1901L12.6779 10.2672L13.3915 9.56668L8.34115 4.64112C8.14651 4.45129 7.83584 4.45178 7.64181 4.64224L2.661 9.53108L3.37689 10.2293Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("backward","Backward"):T("backward",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.242 8.39077C0.991274 8.1906 0.991274 7.80944 1.242 7.60927L6.87938 3.1086C7.20684 2.84717 7.69133 3.08033 7.69133 3.49935L7.69133 7.76543C7.72075 7.71 7.76134 7.65903 7.81309 7.6159L13.1795 3.14379C13.5052 2.8724 13.9996 3.10398 13.9996 3.5279L13.9996 12.4721C13.9996 12.896 13.5052 13.1276 13.1795 12.8562L7.81309 8.38412C7.76134 8.34099 7.72075 8.29002 7.69133 8.23459L7.69133 12.5007C7.69133 12.9197 7.20684 13.1529 6.87937 12.8914L1.242 8.39077ZM6.69133 11.4617L6.69133 4.53833L2.35535 8.00002L6.69133 11.4617ZM12.9996 11.4046L12.9996 4.59544L8.9142 8.00001L12.9996 11.4046Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("barcode","Barcode"):T("barcode",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 2V14H2V2H4ZM14 2V14H12V2H14ZM11 2V14H10V2H11ZM9 2V14H7V2H9ZM6 2V14H5V2H6Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("books","Books"):T("books",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99902 9.27825L3.99902 12.0782V2.9989H11.999V12.0782L7.99902 9.27825ZM7.99902 10.4989L12.2123 13.4482C12.5437 13.6802 12.999 13.4431 12.999 13.0386V2.9989C12.999 2.44662 12.5513 1.9989 11.999 1.9989H3.99902C3.44674 1.9989 2.99902 2.44662 2.99902 2.9989V13.0386C2.99902 13.4431 3.45437 13.6802 3.78576 13.4482L7.99902 10.4989Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("browse-off","BrowseOff"):T("browse-off",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7732 11.9803L12.1465 13.3535L12.8535 12.6464L3.14969 2.94257L2.44266 3.64972L3.65332 4.86032C2.60522 5.58542 1.72754 6.57559 1.11694 7.76987L1 7.99985L1.11694 8.22983C2.46143 10.8698 5.10156 12.4998 8.00488 12.4998C8.96875 12.4998 9.9043 12.319 10.7732 11.9803ZM9.99121 11.1982C9.35718 11.3957 8.68921 11.4998 8.00488 11.4998C5.5498 11.4998 3.3186 10.1698 2.1106 7.99985C2.66992 6.99502 3.44873 6.17038 4.36743 5.57443L5.45093 6.65799C5.2395 7.05868 5.11987 7.51529 5.11987 7.99985C5.11987 9.59036 6.40918 10.8797 7.99976 10.8797C8.48438 10.8797 8.94092 10.76 9.34155 10.5487L9.99121 11.1982ZM6.21143 7.41855L8.58105 9.78811C8.39795 9.84756 8.20264 9.87973 7.99976 9.87973C6.96143 9.87973 6.11987 9.03805 6.11987 7.99985C6.11987 7.79696 6.15186 7.60159 6.21143 7.41855Z" fill="black" fill-opacity="0.9"/>
<path d="M14.8831 8.22983L15 7.99985L14.8831 7.76987C13.5386 5.13986 10.8984 3.49985 8.00488 3.49985C7.14868 3.49985 6.31519 3.64248 5.53125 3.91116L6.3313 4.71133C6.87012 4.57242 7.4314 4.49985 8.00488 4.49985C10.4502 4.49985 12.6814 5.82986 13.8992 7.99985C13.3894 8.91531 12.696 9.6813 11.8809 10.261L12.5894 10.9693C13.53 10.2635 14.3201 9.33523 14.8831 8.22983Z" fill="black" fill-opacity="0.9"/>
<path d="M10.8796 7.99985C10.8796 8.37375 10.8083 8.73099 10.6787 9.05874L9.86401 8.24399C9.87427 8.16409 9.87964 8.08255 9.87964 7.99985C9.87964 6.96164 9.03784 6.12002 7.99976 6.12002C7.91699 6.12002 7.83545 6.12533 7.75562 6.13571L6.94092 5.32089C7.26855 5.19125 7.62598 5.12002 7.99976 5.12002C9.59033 5.12002 10.8796 6.40939 10.8796 7.99985Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("browse","Browse"):T("browse",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.8796 7.99988C10.8796 9.59039 9.59033 10.8798 7.99976 10.8798C6.40918 10.8798 5.11987 9.59039 5.11987 7.99988C5.11987 6.40942 6.40918 5.12006 7.99976 5.12006C9.59033 5.12006 10.8796 6.40942 10.8796 7.99988ZM9.87964 7.99988C9.87964 6.96167 9.03784 6.12006 7.99976 6.12006C6.96143 6.12006 6.11987 6.96167 6.11987 7.99988C6.11987 9.03809 6.96143 9.87976 7.99976 9.87976C9.03784 9.87976 9.87964 9.03809 9.87964 7.99988Z" fill="black" fill-opacity="0.9"/>
<path d="M1.11694 8.22986C2.46143 10.8699 5.10156 12.4999 8.00488 12.4999C10.8984 12.4999 13.5386 10.8699 14.8831 8.22986L15 7.99988L14.8831 7.7699C13.5386 5.13989 10.8984 3.49988 8.00488 3.49988C5.10156 3.49988 2.46143 5.13989 1.11694 7.7699L1 7.99988L1.11694 8.22986ZM8.00488 11.4999C5.5498 11.4999 3.3186 10.1699 2.1106 7.99988C3.3186 5.8299 5.5498 4.49988 8.00488 4.49988C10.4502 4.49988 12.6814 5.8299 13.8992 7.99988C12.6909 10.1699 10.4502 11.4999 8.00488 11.4999Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("bulletpoint","Bulletpoint"):T("bulletpoint",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.9999 3.00002L4.99988 3L4.99988 4L13.9999 4.00002V3.00002Z" fill="black" fill-opacity="0.9"/>
<path d="M3.49988 3L2.00049 3L2.00049 4L3.49988 4V3Z" fill="black" fill-opacity="0.9"/>
<path d="M4.99988 7.50006L13.9999 7.50009V8.50009L4.99988 8.50006L4.99988 7.50006Z" fill="black" fill-opacity="0.9"/>
<path d="M2.00049 7.50006H3.49988V8.50006H2.00049L2.00049 7.50006Z" fill="black" fill-opacity="0.9"/>
<path d="M4.99988 12L13.9999 12V13L4.99988 13L4.99988 12Z" fill="black" fill-opacity="0.9"/>
<path d="M2.00049 12H3.49988V13H2.00049L2.00049 12Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("calendar","Calendar"):T("calendar",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 3H6L6 1.5H5L5 3H3C2.44772 3 2 3.44771 2 4V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V4C14 3.44772 13.5523 3 13 3H11V1.5H10L10 3ZM5 5L6 5L6 4H10L10 5L11 5V4H13V6H3V4H5L5 5ZM3 7H13V13H3L3 7Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("call","Call"):T("call",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.9996 11.0571C14.0094 11.656 13.8406 12.3013 13.4825 12.8172L13.3562 12.9841C13.1203 13.3295 12.7802 13.5823 12.3763 13.7333C12.0957 13.8382 11.92 13.8686 11.467 13.9206C9.51866 14.1028 7.38954 13.1934 5.28719 11.3231C3.8828 10.0711 2.83116 8.50511 2.32479 6.90415C2.11109 6.22714 1.99984 5.57675 1.99984 4.9881C1.99984 4.28226 2.15924 3.67085 2.47982 3.21159C2.78397 2.79386 3.36194 2.44687 4.23086 2.1189C4.65696 1.95807 5.13791 2.10548 5.40072 2.47746L7.06606 4.83489C7.34085 5.22387 7.30316 5.75267 6.97604 6.09879L6.7593 6.32024L6.49703 6.57443C6.43153 6.62982 6.33187 6.76339 6.33187 6.76339C6.30907 7.07011 6.63615 7.70117 7.58846 8.67568L7.87185 8.9415C8.75003 9.75141 8.98642 9.81638 9.25619 9.62851L9.34609 9.55508C9.44154 9.48247 9.69138 9.30859 10.2242 8.94226C10.5298 8.73213 10.9267 8.70843 11.2551 8.88068L11.4976 9.00892C13.1606 9.8967 13.9203 10.431 13.9937 10.9791L13.9996 11.0571ZM12.9997 11.0731C13.001 11.1553 12.8854 11.0287 12.6447 10.8549C12.2936 10.6014 11.7532 10.279 11.0283 9.89197L10.7907 9.7663L10.0027 10.3101C9.98437 10.322 9.97594 10.3268 9.97927 10.323C9.11992 10.9979 8.37978 10.8086 6.88619 9.38735C5.74004 8.21495 5.28626 7.33947 5.33425 6.69456C5.35666 6.34167 5.59986 6.0185 5.8359 5.82509C5.9363 5.72853 6.03513 5.63144 6.12417 5.54118L6.24929 5.41186L4.58401 3.05447C3.88251 3.31925 3.4487 3.57965 3.29391 3.79216C3.10764 4.05918 2.99984 4.47289 2.99984 4.9881C2.99984 5.46852 3.09399 6.01883 3.27834 6.60286C3.72853 8.02618 4.67843 9.44076 5.95223 10.5764C7.86462 12.2776 9.73829 13.0779 11.3635 12.926L11.621 12.8939C11.799 12.8686 11.8995 12.8439 12.0261 12.7966C12.2452 12.7147 12.4181 12.5862 12.5589 12.382C12.8261 12.0557 12.9688 11.6382 12.9954 11.2418L12.9997 11.0731Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("caret-down-small","CaretDownSmall"):T("caret-down-small",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 6H5L8 10.5L11 6Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("caret-down","CaretDown"):T("caret-down",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99958 10.3334L3.99958 5.00002L11.9996 5.00002L7.99958 10.3334ZM7.59958 11.4667C7.79958 11.7334 8.19958 11.7334 8.39958 11.4667L13.3996 4.80002C13.6468 4.4704 13.4116 4.00002 12.9996 4.00002L2.99958 4.00002C2.58756 4.00002 2.35237 4.4704 2.59958 4.80002L7.59958 11.4667Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("caret-left-small","CaretLeftSmall"):T("caret-left-small",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 5L10.5 11L6 8L10.5 5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("caret-left","CaretLeft"):T("caret-left",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.66683 7.99976L10.0002 3.99976L10.0002 11.9998L4.66683 7.99976ZM3.5335 7.59976C3.26683 7.79976 3.26683 8.19976 3.5335 8.39976L10.2002 13.3998C10.5298 13.647 11.0002 13.4118 11.0002 12.9998L11.0002 2.99976C11.0002 2.58774 10.5298 2.35255 10.2002 2.59976L3.5335 7.59976Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("caret-right-small","CaretRightSmall"):T("caret-right-small",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 5L6 11L10.5 8L6 5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("caret-right","CaretRight"):T("caret-right",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.3337 7.99999L6.00032 12L6.00033 3.99999L11.3337 7.99999ZM12.467 8.39999C12.7337 8.19999 12.7337 7.79999 12.467 7.59999L5.80033 2.59999C5.47071 2.35278 5.00033 2.58797 5.00033 2.99999L5.00032 13C5.00032 13.412 5.4707 13.6472 5.80032 13.4L12.467 8.39999Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("caret-up-small","CaretUpSmall"):T("caret-up-small",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 10.5H5L8 6L11 10.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("caret-up","CaretUp"):T("caret-up",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00042 5.66665L12.0004 11L4.00042 11L8.00042 5.66665ZM8.40042 4.53331C8.20042 4.26665 7.80042 4.26665 7.60042 4.53331L2.60042 11.2C2.35321 11.5296 2.5884 12 3.00042 12L13.0004 12C13.4124 12 13.6476 11.5296 13.4004 11.2L8.40042 4.53331Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("cart","Cart"):T("cart",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 3H2.57644L3.96502 11.3315C4.02931 11.7173 4.36307 12 4.75414 12H14V11H4.92356L4.59023 9H13.2239C13.591 9 13.911 8.75016 14 8.39403L14.85 4.99403C14.9762 4.48911 14.5943 4 14.0739 4H3.7569L3.53498 2.66848C3.47069 2.28273 3.13693 2 2.74586 2H1V3ZM13.0677 8H4.42356L3.92356 5H13.8177L13.0677 8Z" fill="black" fill-opacity="0.9"/>
<path d="M4.75 14.5C5.16421 14.5 5.5 14.1642 5.5 13.75C5.5 13.3358 5.16421 13 4.75 13C4.33579 13 4 13.3358 4 13.75C4 14.1642 4.33579 14.5 4.75 14.5Z" fill="black" fill-opacity="0.9"/>
<path d="M12.813 14.5C13.2272 14.5 13.563 14.1642 13.563 13.75C13.563 13.3358 13.2272 13 12.813 13C12.3987 13 12.063 13.3358 12.063 13.75C12.063 14.1642 12.3987 14.5 12.813 14.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("chart-bar","ChartBar"):T("chart-bar",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 2L7.5 14H8.5L8.5 2H7.5Z" fill="black" fill-opacity="0.9"/>
<path d="M2.5 6V14H3.5L3.5 6H2.5Z" fill="black" fill-opacity="0.9"/>
<path d="M12.5 14L12.5 10H13.5L13.5 14H12.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("chart-bubble","ChartBubble"):T("chart-bubble",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 5.5C9 7.15686 7.65674 8.5 6 8.5C4.34326 8.5 3 7.15686 3 5.5C3 3.84314 4.34326 2.5 6 2.5C7.65674 2.5 9 3.84314 9 5.5ZM8 5.5C8 4.39543 7.10449 3.5 6 3.5C4.89551 3.5 4 4.39543 4 5.5C4 6.60457 4.89551 7.5 6 7.5C7.10449 7.5 8 6.60457 8 5.5Z" fill="black" fill-opacity="0.9"/>
<path d="M14 10C14 11.3807 12.8806 12.5 11.5 12.5C10.1194 12.5 9 11.3807 9 10C9 8.61929 10.1194 7.5 11.5 7.5C12.8806 7.5 14 8.61929 14 10ZM13 10C13 9.17157 12.3284 8.5 11.5 8.5C10.6716 8.5 10 9.17157 10 10C10 10.8284 10.6716 11.5 11.5 11.5C12.3284 11.5 13 10.8284 13 10Z" fill="black" fill-opacity="0.9"/>
<path d="M5 12C5 12.8284 4.32837 13.5 3.5 13.5C2.67163 13.5 2 12.8284 2 12C2 11.1716 2.67163 10.5 3.5 10.5C4.32837 10.5 5 11.1716 5 12Z" fill="black" fill-opacity="0.9"/>
<path d="M13 4.5C13.5522 4.5 14 4.05229 14 3.5C14 2.94771 13.5522 2.5 13 2.5C12.4478 2.5 12 2.94771 12 3.5C12 4.05229 12.4478 4.5 13 4.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("chart-pie","ChartPie"):T("chart-pie",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM13.9795 8.5H7.5V2.02054C4.42023 2.27461 2 4.85467 2 8C2 11.3137 4.68629 14 8 14C11.1453 14 13.7254 11.5798 13.9795 8.5ZM13.9795 7.5C13.739 4.5851 11.4149 2.26101 8.5 2.02054V7.5H13.9795Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("chart","Chart"):T("chart",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.49999 12L4.5 7.49994L5.5 7.49994L5.49999 12H4.49999Z" fill="black" fill-opacity="0.9"/>
<path d="M7.5 4.5L7.5 12H8.5L8.5 4.5H7.5Z" fill="black" fill-opacity="0.9"/>
<path d="M10.5 12L10.5 9L11.5 9L11.5 12H10.5Z" fill="black" fill-opacity="0.9"/>
<path d="M2 3C2 2.44771 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3L14 13C14 13.5523 13.5523 14 13 14L3 14C2.44771 14 2 13.5523 2 13V3ZM3 3L3 13L13 13L13 3L3 3Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("chat","Chat"):T("chat",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.63795 10.5H13V4H3V11.865L4.63795 10.5ZM2.49205 13.59C2.29666 13.7528 2 13.6138 2 13.3595V4C2 3.44771 2.44772 3 3 3H13C13.5523 3 14 3.44772 14 4V10.5C14 11.0523 13.5523 11.5 13 11.5H5L2.49205 13.59Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("check-circle-filled","CheckCircleFilled"):T("check-circle-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM4.5 8.2065L5.2065 7.5L7 9.293L10.7925 5.5L11.5 6.2075L7 10.707L4.5 8.2065Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("check-circle","CheckCircle"):T("check-circle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 8.2065L7 10.707L11.5 6.2075L10.7925 5.5L7 9.293L5.2065 7.5L4.5 8.2065Z" fill="black" fill-opacity="0.9"/>
<path d="M4.11101 2.17971C5.26216 1.41054 6.61553 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.38447 14.5895 10.7378 13.8203 11.889C13.0511 13.0401 11.9579 13.9373 10.6788 14.4672C9.3997 14.997 7.99224 15.1356 6.63437 14.8655C5.2765 14.5954 4.02922 13.9287 3.05026 12.9497C2.07129 11.9708 1.4046 10.7235 1.13451 9.36563C0.86441 8.00776 1.00303 6.6003 1.53285 5.32122C2.06266 4.04213 2.95987 2.94888 4.11101 2.17971ZM4.66658 12.9888C5.65328 13.6481 6.81332 14 8 14C9.5913 14 11.1174 13.3679 12.2426 12.2426C13.3679 11.1174 14 9.5913 14 8C14 6.81331 13.6481 5.65327 12.9888 4.66658C12.3295 3.67988 11.3925 2.91085 10.2961 2.45672C9.19975 2.0026 7.99335 1.88378 6.82946 2.11529C5.66558 2.3468 4.59648 2.91824 3.75736 3.75736C2.91825 4.59647 2.3468 5.66557 2.11529 6.82946C1.88378 7.99334 2.0026 9.19974 2.45673 10.2961C2.91085 11.3925 3.67989 12.3295 4.66658 12.9888Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("check-rectangle-filled","CheckRectangleFilled"):T("check-rectangle-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 13C2 13.5523 2.44772 14 3 14L13 14C13.5523 14 14 13.5523 14 13L14 3C14 2.44772 13.5523 2 13 2H3C2.44772 2 2 2.44771 2 3V13ZM6.99997 9.35708L10.7748 5.58229L11.4819 6.28941L6.99999 10.7712L4.51343 8.28491L5.2205 7.57777L6.99997 9.35708Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("check-rectangle","CheckRectangle"):T("check-rectangle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7748 5.58229L6.99995 9.35708L5.22048 7.57777L4.51341 8.28491L6.99997 10.7712L11.4819 6.28941L10.7748 5.58229Z" fill="black" fill-opacity="0.9"/>
<path d="M3 14C2.44772 14 2 13.5523 2 13V3C2 2.44771 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3L14 13C14 13.5523 13.5523 14 13 14L3 14ZM3 13L13 13L13 3L3 3L3 13Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("check","Check"):T("check",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.43348 9.92151L12.6561 3.69885L13.5754 4.61809L6.43348 11.76L1.97412 7.30063L2.89336 6.38139L6.43348 9.92151Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("chevron-down-circle","ChevronDownCircle"):T("chevron-down-circle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7929 6.20707L7.99996 9L5.20704 6.20707L4.49993 6.91418L7.99996 10.4142L11.5 6.91418L10.7929 6.20707Z" fill="black" fill-opacity="0.9"/>
<path d="M1 8C1 4.13401 4.13401 0.999999 8 0.999999C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8ZM2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("chevron-down-rectangle","ChevronDownRectangle"):T("chevron-down-rectangle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.7929 6.20711L7.99999 9L5.20711 6.20711L4.5 6.91421L7.99999 10.4142L11.5 6.91421L10.7929 6.20711Z" fill="black" fill-opacity="0.9"/>
<path d="M14 13C14 13.5523 13.5523 14 13 14L3 14C2.44771 14 2 13.5523 2 13L2 3C2 2.44771 2.44772 2 3 2L13 2C13.5523 2 14 2.44772 14 3L14 13ZM13 13L13 3L3 3L3 13L13 13Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("chevron-down","ChevronDown"):T("chevron-down",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.54028 6.45964L4.45952 5.54041L7.9999 9.08079L11.5403 5.54041L12.4595 6.45964L7.9999 10.9193L3.54028 6.45964Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("chevron-left-circle","ChevronLeftCircle"):T("chevron-left-circle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.79293 10.7929L7 7.99996L9.79293 5.20703L9.08582 4.49993L5.58579 7.99996L9.08582 11.5L9.79293 10.7929Z" fill="black" fill-opacity="0.9"/>
<path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("chevron-left-double","ChevronLeftDouble"):T("chevron-left-double",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.0404 4.45952L12.1212 3.54028L7.66155 7.9999L12.1212 12.4595L13.0404 11.5403L9.50003 7.9999L13.0404 4.45952Z" fill="black" fill-opacity="0.9"/>
<path d="M8.04048 4.45952L7.12124 3.54028L2.66162 7.9999L7.12124 12.4595L8.04048 11.5403L4.5001 7.9999L8.04048 4.45952Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("chevron-left-rectangle","ChevronLeftRectangle"):T("chevron-left-rectangle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.79289 10.7929L7 7.99999L9.79289 5.20711L9.08579 4.5L5.58579 7.99999L9.08579 11.5L9.79289 10.7929Z" fill="black" fill-opacity="0.9"/>
<path d="M3 14C2.44772 14 2 13.5523 2 13L2 3C2 2.44771 2.44772 2 3 2L13 2C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H3ZM3 13H13V3L3 3L3 13Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("chevron-left","ChevronLeft"):T("chevron-left",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5397 3.53998L10.4589 4.45922L6.91856 7.9996L10.4589 11.54L9.5397 12.4592L5.08008 7.9996L9.5397 3.53998Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("chevron-right-circle","ChevronRightCircle"):T("chevron-right-circle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.20707 5.20711L9 8.00004L6.20707 10.793L6.91418 11.5001L10.4142 8.00004L6.91418 4.5L6.20707 5.20711Z" fill="black" fill-opacity="0.9"/>
<path d="M8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15ZM8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("chevron-right-double","ChevronRightDouble"):T("chevron-right-double",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.95972 11.5405L3.87896 12.4597L8.33858 8.0001L3.87896 3.54048L2.95972 4.45972L6.5001 8.0001L2.95972 11.5405ZM7.95965 11.5405L8.87889 12.4597L13.3385 8.0001L8.87889 3.54048L7.95965 4.45972L11.5 8.0001L7.95965 11.5405Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("chevron-right-rectangle","ChevronRightRectangle"):T("chevron-right-rectangle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.20711 5.20711L9 8.00001L6.20711 10.7929L6.91421 11.5L10.4142 8.00001L6.91421 4.5L6.20711 5.20711Z" fill="black" fill-opacity="0.9"/>
<path d="M13 2C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H3C2.44771 14 2 13.5523 2 13L2 3C2 2.44772 2.44772 2 3 2L13 2ZM13 3L3 3L3 13H13V3Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("chevron-right","ChevronRight"):T("chevron-right",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.4603 12.4592L5.54106 11.54L9.08144 7.99961L5.54106 4.45923L6.4603 3.53999L10.9199 7.99961L6.4603 12.4592Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("chevron-up-circle","ChevronUpCircle"):T("chevron-up-circle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.20711 9.79293L8.00004 7L10.793 9.79293L11.5001 9.08582L8.00004 5.58579L4.5 9.08582L5.20711 9.79293Z" fill="black" fill-opacity="0.9"/>
<path d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("chevron-up-rectangle","ChevronUpRectangle"):T("chevron-up-rectangle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.20711 9.79289L8.00001 7L10.7929 9.79289L11.5 9.08579L8.00001 5.58579L4.5 9.08579L5.20711 9.79289Z" fill="black" fill-opacity="0.9"/>
<path d="M2 3C2 2.44772 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V3ZM3 3L3 13H13V3H3Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("chevron-up","ChevronUp"):T("chevron-up",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4595 9.54074L11.5403 10.46L7.9999 6.91959L4.45952 10.46L3.54028 9.54073L7.9999 5.08112L12.4595 9.54074Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("circle","Circle"):T("circle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.134 15 0.999998 11.866 1 8C1 4.134 4.13401 0.999998 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z" fill="black" fill-opacity="0.9"/>
</g>
</svg>
`),n==="develop"?V("clear","Clear"):T("clear",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 4H9V2H7V4ZM10 2V4H13C13.5523 4 14 4.44772 14 5V7C14 7.50427 13.6267 7.92137 13.1414 7.99007L13.8369 12.8586C13.923 13.461 13.4555 14 12.847 14H3.15301C2.54446 14 2.077 13.461 2.16306 12.8586L2.85856 7.99007C2.37326 7.92137 2 7.50427 2 7V5C2 4.44772 2.44772 4 3 4H6V2C6 1.44772 6.44772 1 7 1H9C9.55228 1 10 1.44772 10 2ZM12.1327 7H13V5H9H7H3L3 7H3.8673H12.1327ZM12.1327 8H3.8673L3.15301 13H5V11H6V13H7.5V11H8.5V13H10V11H11V13H12.847L12.1327 8Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("close-circle-filled","CloseCircleFilled"):T("close-circle-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 8C15 4.13401 11.866 1 8 1C4.13401 0.999998 1 4.134 1 8C0.999998 11.866 4.134 15 8 15C11.866 15 15 11.866 15 8ZM5.67091 4.94754L8.00001 7.29075L10.3291 4.94754L11.0384 5.65251L8.70499 8L11.0383 10.3475L10.3291 11.0525L8.00001 8.70925L5.67092 11.0525L4.96168 10.3475L7.29503 8L4.96167 5.65251L5.67091 4.94754Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("close-circle","CloseCircle"):T("close-circle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.98094 10.3119L7.29289 7.99995L4.98104 5.6881L5.68814 4.98099L8 7.29284L10.3119 4.98099L11.019 5.6881L8.7071 7.99995L11.0191 10.3119L10.3119 11.019L8 8.70706L5.68805 11.019L4.98094 10.3119Z" fill="black" fill-opacity="0.9"/>
<path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.134 15 0.999998 11.866 1 8C1 4.134 4.13401 0.999998 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("close-rectangle","CloseRectangle"):T("close-rectangle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.818 10.4748L7.29291 7.99994L4.81812 5.52515L5.52522 4.81804L8.00001 7.29283L10.4749 4.81799L11.182 5.5251L8.70712 7.99994L11.1821 10.4749L10.475 11.182L8.00001 8.70705L5.52511 11.182L4.818 10.4748Z" fill="black" fill-opacity="0.9"/>
<path d="M3 14C2.44772 14 2 13.5523 2 13V3C2 2.44771 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3L14 13C14 13.5523 13.5523 14 13 14L3 14ZM3 13L13 13L13 3L3 3L3 13Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("close","Close"):T("close",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00005 8.91923L11.076 11.9951L11.9952 11.0759L8.91929 7.99999L11.9952 4.92409L11.076 4.00485L8.00005 7.08075L4.92412 4.00482L4.00488 4.92406L7.08081 7.99999L4.00488 11.0759L4.92412 11.9952L8.00005 8.91923Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("cloud-download","CloudDownload"):T("cloud-download",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.7309 6.26257L4.0185 6.34565C2.89613 6.47654 2 7.45287 2 8.66667C2 9.8761 2.89038 10.848 4 10.9838V11.989C2.32292 11.8501 1 10.4132 1 8.66667C1 6.95238 2.26933 5.54286 3.90267 5.35238C4.31333 3.42857 5.99333 2 8 2C10.0067 2 11.6867 3.42857 12.0973 5.35238C13.7307 5.54286 15 6.95238 15 8.66667C15 10.4132 13.6771 11.8501 12 11.989V10.9838C13.1096 10.848 14 9.8761 14 8.66667C14 7.45287 13.1039 6.47654 11.9815 6.34565L11.2691 6.26257L11.1194 5.56114C10.8032 4.08009 9.51599 3 8 3C6.48401 3 5.19679 4.08009 4.88063 5.56114L4.7309 6.26257Z" fill="black" fill-opacity="0.9"/>
<path d="M9.79665 11.2999L8.50332 12.589L8.50338 7.99696L7.50172 7.99694L7.50165 12.589L6.20828 11.2999L5.5 12.0058L7.6495 14.1482C7.84463 14.3427 8.16031 14.3427 8.35543 14.1482L10.5049 12.0058L9.79665 11.2999Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("cloud-upload","CloudUpload"):T("cloud-upload",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.7309 6.26257L4.0185 6.34565C2.89613 6.47654 2 7.45287 2 8.66667C2 9.8761 2.89038 10.848 4 10.9838V11.989C2.32292 11.8501 1 10.4132 1 8.66667C1 6.95238 2.26933 5.54286 3.90267 5.35238C4.31333 3.42857 5.99333 2 8 2C10.0067 2 11.6867 3.42857 12.0973 5.35238C13.7307 5.54286 15 6.95238 15 8.66667C15 10.4132 13.6771 11.8501 12 11.989V10.9838C13.1096 10.848 14 9.8761 14 8.66667C14 7.45287 13.1039 6.47654 11.9815 6.34565L11.2691 6.26257L11.1194 5.56114C10.8032 4.08009 9.51599 3 8 3C6.48401 3 5.19679 4.08009 4.88063 5.56114L4.7309 6.26257Z" fill="black" fill-opacity="0.9"/>
<path d="M6.14062 10.7202L7.49824 9.38764L7.53164 14.5069L8.54247 14.5L8.5092 9.39884L9.88196 10.7377L10.5956 10.0372L8.34437 7.84156C8.14972 7.65173 7.83906 7.65223 7.64502 7.84268L5.42472 10.022L6.14062 10.7202Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("cloud","Cloud"):T("cloud",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.7309 7.26147L4.88063 6.56004C5.19679 5.07899 6.48401 3.9989 8 3.9989C9.51599 3.9989 10.8032 5.07899 11.1194 6.56004L11.2691 7.26147L11.9815 7.34455C13.1039 7.47544 14 8.45177 14 9.66557C14 10.9705 12.9634 11.9989 11.7333 11.9989H4.26667C3.03657 11.9989 2 10.9705 2 9.66557C2 8.45177 2.89613 7.47544 4.0185 7.34455L4.7309 7.26147ZM12.0973 6.35128C11.6867 4.42747 10.0067 2.9989 8 2.9989C5.99333 2.9989 4.31333 4.42747 3.90267 6.35128C2.26933 6.54176 1 7.95128 1 9.66557C1 11.5037 2.46533 12.9989 4.26667 12.9989H11.7333C13.5347 12.9989 15 11.5037 15 9.66557C15 7.95128 13.7307 6.54176 12.0973 6.35128Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("code","Code"):T("code",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.94034 2.55798L6.09333 13.1832L7.05925 13.442L9.90626 2.8168L8.94034 2.55798Z" fill="black" fill-opacity="0.9"/>
<path d="M2.14982 8.00001L5.57495 11.4251L4.86784 12.1323L1.15987 8.42428C0.925551 8.18996 0.925553 7.81006 1.15987 7.57575L4.86784 3.86777L5.57495 4.57488L2.14982 8.00001Z" fill="black" fill-opacity="0.9"/>
<path d="M13.846 8.00001L10.4054 11.4016L11.1085 12.1127L14.8368 8.42668C15.0744 8.19183 15.0744 7.80819 14.8368 7.57333L11.1085 3.88732L10.4054 4.59845L13.846 8.00001Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("control-platform","ControlPlatform"):T("control-platform",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M14.4953 4.24999L8.46882 0.770621C8.17876 0.603152 7.82139 0.603152 7.53132 0.770621L1.50488 4.24999V11.2087C1.50488 11.5437 1.68357 11.8532 1.97363 12.0206L8.00007 15.5L14.0265 12.0206C14.3166 11.8532 14.4953 11.5437 14.4953 11.2087V4.24999ZM7.99907 7.42199L3.00419 4.53826L8.00007 1.65399L12.9954 4.53845L7.99907 7.42199ZM8.50007 8.28866L13.4951 5.4048V11.172L8.50007 14.0554V8.28866ZM7.50007 8.28866V14.0554L2.50407 11.172V5.40422L7.50007 8.28866Z" fill="black"/>
</svg>
`),n==="develop"?V("creditcard","Creditcard"):T("creditcard",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 11H6.5V10H3.5V11Z" fill="black" fill-opacity="0.9"/>
<path d="M15 12V4C15 3.44772 14.5523 3 14 3H2C1.44772 3 1 3.44772 1 4V12C1 12.5523 1.44772 13 2 13H14C14.5523 13 15 12.5523 15 12ZM14 4V5.5H2V4H14ZM2 12V6.5H14V12H2Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("dashboard","Dashboard"):T("dashboard",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M13.8745 4.90662L9.37556 9.40553L8.66845 8.69843L13.1674 4.19951L13.8745 4.90662Z" fill="black" fill-opacity="0.9"/>
<path d="M8.02203 11.052C7.46974 11.052 7.02203 10.6043 7.02203 10.052C7.02203 9.49972 7.46974 9.052 8.02203 9.052C8.57431 9.052 9.02203 9.49972 9.02203 10.052C9.02203 10.6043 8.57431 11.052 8.02203 11.052ZM8.02203 12.052C9.1266 12.052 10.022 11.1566 10.022 10.052C10.022 8.94743 9.1266 8.052 8.02203 8.052C6.91746 8.052 6.02203 8.94743 6.02203 10.052C6.02203 11.1566 6.91746 12.052 8.02203 12.052Z" fill="black" fill-opacity="0.9"/>
<path d="M8 3.5C4.41015 3.5 1.5 6.41015 1.5 10C1.5 11.3817 1.93054 12.6613 2.66478 13.714L1.8446 14.286C0.997092 13.071 0.5 11.5928 0.5 10C0.5 5.85786 3.85786 2.5 8 2.5C9.2547 2.5 10.4388 2.8085 11.4792 3.35421L11.0147 4.23978C10.1142 3.76743 9.08905 3.5 8 3.5ZM14.5 10C14.5 8.91685 14.2355 7.89696 13.7679 6.99999L14.6547 6.53776C15.1948 7.57405 15.5 8.75212 15.5 10C15.5 11.5928 15.0029 13.071 14.1554 14.286L13.3352 13.714C14.0695 12.6613 14.5 11.3817 14.5 10Z" fill="black" fill-opacity="0.9"/>
</g>
</svg>
`),n==="develop"?V("delete","Delete"):T("delete",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 12V6H7V12H6Z" fill="black" fill-opacity="0.9"/>
<path d="M9 6V12H10V6H9Z" fill="black" fill-opacity="0.9"/>
<path d="M10.5 3H14V4H13V14C13 14.5523 12.5523 15 12 15H4C3.44772 15 3 14.5523 3 14V4H2V3H5.5L5.5 1.8C5.5 1.35817 5.85817 1 6.3 1H9.7C10.1418 1 10.5 1.35817 10.5 1.8V3ZM6.5 3H9.5L9.5 2L6.5 2V3ZM4 4V14H12V4H4Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("desktop","Desktop"):T("desktop",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 11H7.5V13H3V14H13V13H8.5V11H13.5C14.0523 11 14.5 10.5523 14.5 10V3C14.5 2.44772 14.0523 2 13.5 2H2.5C1.94771 2 1.5 2.44772 1.5 3V10C1.5 10.5523 1.94772 11 2.5 11ZM2.5 3L13.5 3V10L2.5 10L2.5 3Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("discount-filled","DiscountFilled"):T("discount-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.98714 5.32938C7.44495 5.78719 7.44495 6.52946 6.98714 6.98728C6.52932 7.4451 5.78705 7.4451 5.32923 6.98728C4.87141 6.52946 4.87141 5.78719 5.32923 5.32938C5.78705 4.87156 6.52932 4.87156 6.98714 5.32938Z" fill="black" fill-opacity="0.9"/>
<path d="M2 7.72999C1.99999 7.99522 2.10535 8.24958 2.29289 8.43713L8.20507 14.3493C8.5956 14.7398 9.22876 14.7398 9.61929 14.3493L14.3493 9.6193C14.7398 9.22877 14.7399 8.59561 14.3493 8.20508L8.43714 2.29289C8.2496 2.10535 7.99524 2 7.73002 2L2.00017 2.00005L2 7.72999ZM7.69424 4.62227C8.54259 5.47061 8.54259 6.84605 7.69424 7.69439C6.8459 8.54273 5.47047 8.54273 4.62212 7.69439C3.77378 6.84605 3.77378 5.47061 4.62212 4.62227C5.47047 3.77393 6.8459 3.77393 7.69424 4.62227Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("discount","Discount"):T("discount",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M7.83885 5.01035C7.0578 4.2293 5.79147 4.2293 5.01042 5.01035C4.22937 5.7914 4.22937 7.05773 5.01042 7.83877C5.79147 8.61982 7.0578 8.61982 7.83885 7.83877C8.6199 7.05773 8.6199 5.7914 7.83885 5.01035ZM7.13174 5.71745C7.52227 6.10798 7.52227 6.74114 7.13174 7.13167C6.74122 7.52219 6.10805 7.52219 5.71753 7.13167C5.32701 6.74114 5.32701 6.10798 5.71753 5.71745C6.10805 5.32693 6.74122 5.32693 7.13174 5.71745Z" fill="black" fill-opacity="0.9"/>
    <path d="M2 7.94985L2.00002 2L7.94975 2.0001C8.21497 2.0001 8.46931 2.10546 8.65685 2.29299L14.7903 8.42646C15.1808 8.81698 15.1808 9.45014 14.7903 9.84067L9.84057 14.7904C9.45004 15.1809 8.81688 15.1809 8.42635 14.7904L2.29289 8.65696C2.10536 8.46942 2 8.21507 2 7.94985ZM7.94974 3.0001L3.00002 3.00002L3 7.94985L9.13346 14.0833L14.0832 9.13356L7.94974 3.0001Z" fill="black" fill-opacity="0.9"/>
</svg>
    `),n==="develop"?V("download","Download"):T("download",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.2636 5.81387L8.5 9.57746L8.49998 0.5L7.49998 0.500002L7.5 9.57746L3.73641 5.81387L3.02931 6.52098L7.64645 11.1381C7.84171 11.3334 8.15829 11.3334 8.35355 11.1381L12.9707 6.52098L12.2636 5.81387Z" fill="black" fill-opacity="0.9"/>
<path d="M2 11V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V11H13V13H3V11H2Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("edit-1","Edit1"):T("edit-1",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M14.1321 4.95049L10.8888 1.70711L11.5959 1L14.8393 4.24338L14.1321 4.95049Z" fill="black" fill-opacity="0.9"/>
<path d="M5.97196 13.1108L2.359 13.8334C2.14909 13.8754 1.96401 13.6903 2.00599 13.4804L2.72858 9.86742L10.0262 2.56982L13.2696 5.8132L5.97196 13.1108ZM11.8554 5.8132L10.0262 3.98403L3.64979 10.3604L3.19249 12.6469L5.47895 12.1896L11.8554 5.8132Z" fill="black" fill-opacity="0.9"/>
<path d="M15 11H11V12H15V11Z" fill="black" fill-opacity="0.9"/>
<path d="M15 13H8.5V14H15V13Z" fill="black" fill-opacity="0.9"/>
</g>
</svg>
`),n==="develop"?V("edit","Edit"):T("edit",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.8819 1.73695L14.1253 4.98033L14.8324 4.27322L11.589 1.02985L10.8819 1.73695Z" fill="black" fill-opacity="0.9"/>
<path d="M2.35217 13.8632L5.96513 13.1406L13.2627 5.84304L10.0194 2.59966L2.72175 9.89727L1.99916 13.5102C1.95717 13.7201 2.14225 13.9052 2.35217 13.8632ZM10.0194 4.01388L11.8485 5.84304L5.47212 12.2194L3.18566 12.6767L3.64295 10.3903L10.0194 4.01388Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("ellipsis","Ellipsis"):T("ellipsis",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 9C2.44775 9 2 8.55228 2 8C2 7.44772 2.44775 7 3 7C3.55225 7 4 7.44772 4 8C4 8.55228 3.55225 9 3 9Z" fill="black" fill-opacity="0.9"/>
<path d="M7 8C7 8.55228 7.44775 9 8 9C8.55225 9 9 8.55228 9 8C9 7.44772 8.55225 7 8 7C7.44775 7 7 7.44772 7 8Z" fill="black" fill-opacity="0.9"/>
<path d="M12 8C12 8.55228 12.4478 9 13 9C13.5522 9 14 8.55228 14 8C14 7.44772 13.5522 7 13 7C12.4478 7 12 7.44772 12 8Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("enter","Enter"):T("enter",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.0001 4V10H4.20718L5.85363 8.35355L5.14652 7.64645L2.64652 10.1464C2.45126 10.3417 2.45126 10.6583 2.64652 10.8536L5.14652 13.3536L5.85363 12.6464L4.20718 11H13.0001C13.5524 11 14.0001 10.5523 14.0001 10V4H13.0001Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("error-circle-filled","ErrorCircleFilled"):T("error-circle-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 8C15 4.13401 11.866 1 8 1C4.13401 0.999998 1 4.134 1 8C0.999998 11.866 4.134 15 8 15C11.866 15 15 11.866 15 8ZM8.5 4.0003V9.49999H7.5V4.0003H8.5ZM7.39429 11H8.59429V12.2H7.39429V11Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("error-circle","ErrorCircle"):T("error-circle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.5 4.00037V9.5H7.5V4.00037H8.5Z" fill="black" fill-opacity="0.9"/>
<path d="M8.59424 10.5H7.39429V11.7H8.59424V10.5Z" fill="black" fill-opacity="0.9"/>
<path d="M15 8C15 4.13403 11.866 1 8 1C4.13403 1 1 4.13403 1 8C1 11.866 4.13403 15 8 15C11.866 15 15 11.866 15 8ZM14 8C14 11.3137 11.3137 14 8 14C4.68628 14 2 11.3137 2 8C2 4.68628 4.68628 2 8 2C11.3137 2 14 4.68628 14 8Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("error","Error"):T("error",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.49975 2H7.49975V11H8.49975V2ZM8.60137 12.8H7.40137V14H8.60137V12.8Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("file-add","FileAdd"):T("file-add",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 1C3.44386 1 3 1.44386 3 2V13C3 13.5561 3.44386 14 4 14H8.53613V13H4V2H8V6H12V8.48438H13V5.70711C13 5.44189 12.8946 5.18754 12.7071 5L12.6246 4.91753L12.6236 4.91644L8.91355 1.20645C8.82878 1.12167 8.72835 1.07544 8.62863 1.05804C8.52186 1.01999 8.40841 1 8.29289 1H4ZM11.2929 5H9V2.70711L11.2929 5Z" fill="black" fill-opacity="0.9"/>
<path d="M12 15V13H10V12H12V10H13V12H15V13H13V15H12Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("file-copy","FileCopy"):T("file-copy",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.99995 1.92191C3.99995 1.33727 4.52001 1 4.9953 1H9.36584C9.63437 1 9.89162 1.108 10.0797 1.29969L13.7139 5.00415C13.8972 5.19093 13.9999 5.44209 14.0001 5.70375L14.0046 12.0777C14.0046 12.6624 13.4846 13 13.0093 13H4.99995C4.52472 13 4.00474 12.6628 4.00461 12.0783L3.99995 1.92191ZM4.99999 2L5.00457 12H13.0046L13.0003 6.01275H9.00004V2H4.99999ZM10 2.64645V5.01275H12.3215L10 2.64645Z" fill="black" fill-opacity="0.9"/>
<path d="M2 5.00001V14.0128C2 14.565 2.44772 15.0128 3 15.0128H11V14.0128L3 14.0128V5.00001H2Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("file-excel","FileExcel"):T("file-excel",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 1.99988V13.9999H8V14.9999H3.49534C3.02005 14.9999 2.5 14.6626 2.5 14.078V1.92179C2.5 1.33715 3.02005 0.999878 3.49534 0.999878H8.86589C9.13442 0.999878 9.39167 1.10788 9.57972 1.29957L13.2138 5.00388C13.3973 5.19083 13.5 5.44229 13.5 5.70419V7.49988H12.5V6.01263H8.50008V1.99988H3.5ZM9.50008 2.64633V5.01263H11.8215L9.50008 2.64633Z" fill="black" fill-opacity="0.9"/>
<path d="M10.3363 9.79198L10.3363 8.95227L9.3363 8.95228L9.33631 9.79198C9.33631 10.05 9.42442 10.3004 9.58607 10.5015L10.7767 11.9832L9.58607 13.4649C9.42442 13.666 9.33631 13.9164 9.33631 14.1744L9.33631 15.0141L10.3363 15.0141L10.3363 14.1744C10.3363 14.1442 10.3466 14.1148 10.3656 14.0913L11.4181 12.7814L12.4707 14.0913C12.4896 14.1148 12.5 14.1442 12.5 14.1744V15.0141H13.5V14.1744C13.5 13.9164 13.4119 13.666 13.2502 13.4649L12.0596 11.9832L13.2502 10.5015C13.4119 10.3004 13.5 10.05 13.5 9.79198V8.95227H12.5V9.79198C12.5 9.82222 12.4896 9.85155 12.4707 9.87512L11.4181 11.185L10.3656 9.87512C10.3466 9.85155 10.3363 9.82222 10.3363 9.79198Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("file-icon","FileIcon"):T("file-icon",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 2V14H11.2336V15H3.49534C3.02005 15 2.5 14.6627 2.5 14.0781V1.92191C2.5 1.33727 3.02005 1 3.49534 1H8.86589C9.13442 1 9.39167 1.108 9.57972 1.29969L13.2138 5.004C13.3973 5.19096 13.5 5.44241 13.5 5.70431V7.5H12.5V6.01275H8.50008V2H3.5ZM9.50008 5.01275H11.8215L9.50008 2.64645V5.01275Z" fill="black" fill-opacity="0.9"/>
<path d="M4.48145 9H6.48145V9.8H5.88145V12.2H6.48145V13H4.48145V12.2H5.08145V9.8H4.48145V9Z" fill="black" fill-opacity="0.9"/>
<path d="M8.99999 9H7.79246C7.35479 9 6.99999 9.35817 6.99999 9.8V12.2C6.99999 12.6418 7.35479 13 7.79246 13H8.99999V12.2H7.79246V9.8H8.99999V9Z" fill="black" fill-opacity="0.9"/>
<path d="M13.7972 9.8L13.7972 13H13L13 9H14.7434C15.1837 9 15.5406 9.35817 15.5406 9.8V13H14.7434V9.8H13.7972Z" fill="black" fill-opacity="0.9"/>
<path d="M9.5 9.80928L9.5 12.201C9.5 12.6413 9.85693 12.9982 10.2972 12.9982H11.4931C11.9334 12.9982 12.2903 12.6413 12.2903 12.201V9.80928C12.2903 9.36899 11.9334 9.01205 11.4931 9.01205H10.2972C9.85693 9.01205 9.5 9.36899 9.5 9.80928ZM10.2972 12.201L10.2972 9.80928H11.4931V12.201H10.2972Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("file-image","FileImage"):T("file-image",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.57127 1C3.09598 1 2.57593 1.33727 2.57593 1.92191V14.0781C2.57593 14.6627 3.09598 15 3.57127 15H12.5048C12.9801 15 13.5001 14.6627 13.5001 14.0781V5.70431C13.5001 5.44241 13.3974 5.19096 13.214 5.004L9.57985 1.29969C9.3918 1.108 9.13455 1 8.86601 1H3.57127ZM3.57593 11.3636V2H8.57604V6.0092H12.5001V10.2878L10.5759 8.3636L7.57593 11.3636L5.57593 9.3636L3.57593 11.3636ZM3.57593 12.6364L5.57593 10.6364L6.93953 12L4.93953 14H3.57593V12.6364ZM10.5759 9.6364L12.5001 11.5606V14H6.21232L10.5759 9.6364ZM11.8182 5.0092H9.57604V2.72374L11.8182 5.0092Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("file-paste","FilePaste"):T("file-paste",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 11.5H5V12.5H11V11.5Z" fill="black" fill-opacity="0.9"/>
<path d="M2.5 1.92191C2.5 1.33727 3.02005 1 3.49534 1L8.7929 1.00007C9.05812 1.00007 9.31246 1.10543 9.5 1.29296L13.2071 5.00007C13.3946 5.18761 13.5 5.44196 13.5 5.70718V14.0782C13.5 14.6628 12.9799 15.0001 12.5047 15.0001L3.49534 15C3.02005 15 2.5 14.6627 2.5 14.0781V1.92191ZM3.5 2V14L12.5 14.0001V6.01283H8.50005V2.00007L3.5 2ZM9.50005 5.01283H11.8056L9.50005 2.70722V5.01283Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("file-pdf","FilePdf"):T("file-pdf",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 14V2H8.50008V6.01275H12.5V7.5H13.5V5.70431C13.5 5.44241 13.3973 5.19096 13.2138 5.004L9.57972 1.29969C9.39167 1.108 9.13442 1 8.86589 1H3.49534C3.02005 1 2.5 1.33727 2.5 1.92191V14.0781C2.5 14.6627 3.02005 15 3.49534 15H12V14H3.5ZM11.8215 5.01275H9.50008V2.64645L11.8215 5.01275Z" fill="black" fill-opacity="0.9"/>
<path d="M8.37695 9H10.2384C10.7216 9 11.1134 9.39175 11.1134 9.875V12.1064C11.1134 12.5897 10.7216 12.9814 10.2384 12.9814H8.37695V9ZM9.12695 9.75V12.2314H10.2384C10.3074 12.2314 10.3634 12.1755 10.3634 12.1064L10.3634 9.875C10.3634 9.80596 10.3074 9.75 10.2384 9.75H9.12695Z" fill="black" fill-opacity="0.9"/>
<path d="M5 9.00593H6.86142C7.34467 9.00593 7.73642 9.39768 7.73642 9.88093V10.9327C7.73642 11.416 7.34467 11.8077 6.86142 11.8077H5.75V12.9977H5V9.00593ZM5.75 11.0577H6.86142C6.93046 11.0577 6.98642 11.0017 6.98642 10.9327V9.88093C6.98642 9.81189 6.93046 9.75593 6.86142 9.75593H5.75V11.0577Z" fill="black" fill-opacity="0.9"/>
<path d="M11.7539 12.9977H12.5039V11.4166H14.1153V10.6666H12.5039V9.75005H14.1153V9.00005H11.7539V12.9977Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("file-powerpoint","FilePowerpoint"):T("file-powerpoint",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 2V14H8V15H3.49534C3.02005 15 2.5 14.6627 2.5 14.0781V1.92191C2.5 1.33727 3.02005 1 3.49534 1H8.86589C9.13442 1 9.39167 1.108 9.57972 1.29969L13.2138 5.004C13.3973 5.19096 13.5 5.44241 13.5 5.70431V7.5H12.5V6.01275H8.50008V2H3.5ZM9.50008 2.64645V5.01275H11.8215L9.50008 2.64645Z" fill="black" fill-opacity="0.9"/>
<path d="M12.5 8.5H9.5V15H10.5V12.5H12.5C13.0523 12.5 13.5 12.0523 13.5 11.5V9.5C13.5 8.94772 13.0523 8.5 12.5 8.5ZM12.5 11.5H10.5V9.5H12.5V11.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("file-unknown","FileUnknown"):T("file-unknown",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 2V14H9V15H3.49534C3.02005 15 2.5 14.6627 2.5 14.0781V1.92191C2.5 1.33727 3.02005 1 3.49534 1H8.78616C9.05469 1 9.31194 1.108 9.5 1.29969L13.1341 5.004C13.3175 5.19096 13.4203 5.44241 13.4203 5.70431V7.5H12.4203V6.01275H8.42036V2H3.5ZM9.42036 2.64645V5.01275H11.7418L9.42036 2.64645Z" fill="black" fill-opacity="0.9"/>
<path d="M11.4203 8.42065C10.3495 8.42065 9.42028 9.24178 9.42028 10.3222H10.4203C10.4203 9.85692 10.8368 9.42065 11.4203 9.42065C12.0038 9.42065 12.4203 9.85692 12.4203 10.3222C12.4203 10.6216 12.1402 10.9812 11.7014 11.1477L11.699 11.1487C11.2559 11.3196 10.9203 11.7405 10.9203 12.2599V12.9207H11.9203V12.2599C11.9203 12.1949 11.9616 12.1195 12.0579 12.0821C12.7159 11.8317 13.4203 11.1914 13.4203 10.3222C13.4203 9.24178 12.491 8.42065 11.4203 8.42065Z" fill="black" fill-opacity="0.9"/>
<path d="M11.4202 13.8C11.0888 13.8 10.8202 14.0686 10.8202 14.4C10.8202 14.7314 11.0888 15 11.4202 15C11.7515 15 12.0202 14.7314 12.0202 14.4C12.0202 14.0686 11.7515 13.8 11.4202 13.8Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("file-word","FileWord"):T("file-word",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 2.00006V14.0001H6.5V15.0001H3.49534C3.02005 15.0001 2.5 14.6628 2.5 14.0781V1.92197C2.5 1.33733 3.02005 1.00006 3.49534 1.00006L8.8658 1C9.13433 1 9.39158 1.108 9.57964 1.29969L13.2138 5.004C13.3972 5.19096 13.4999 5.44241 13.4999 5.70431V8H12.4999V6.01275H8.5V2L3.5 2.00006ZM9.5 2.64645V5.01275H11.8215L9.5 2.64645Z" fill="black" fill-opacity="0.9"/>
<path d="M9 14L9 9.5H8L8 14C8 14.5523 8.44772 15 9 15H12.5C13.0523 15 13.5 14.5523 13.5 14V9.5H12.5L12.5 14H11.25L11.25 9.5H10.25L10.25 14H9Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("file","File"):T("file",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.49534 1C3.02005 1 2.5 1.33727 2.5 1.92191V14.0781C2.5 14.6627 3.02005 15 3.49534 15L12.5047 15.0001C12.9799 15.0001 13.5 14.6628 13.5 14.0782V5.70718C13.5 5.44196 13.3946 5.18761 13.2071 5.00007L9.5 1.29296C9.31246 1.10543 9.05812 1.00007 8.7929 1.00007L3.49534 1ZM8.50005 2.00007V6.01283H12.5V14.0001L3.5 14V2L8.50005 2.00007ZM9.50005 2.70722L11.8056 5.01283H9.50005V2.70722Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("filter-clear","FilterClear"):T("filter-clear",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.00293 2H10.9975C11.5498 2 11.9975 2.44772 11.9975 3C11.9975 3.27469 11.8845 3.53729 11.685 3.72615L8.00004 7.214V12.75L5.00004 15L4.99904 7.214L1.31537 3.72612C0.945188 3.3756 0.902004 2.80934 1.19622 2.40887L1.27681 2.31243C1.46567 2.11298 1.72825 2 2.00293 2ZM10.9975 3H2.00293L6.00004 6.78486L5.99904 12.999L7.00004 12.249V6.78485L10.9975 3Z" fill="black" fill-opacity="0.9"/>
<path d="M10.7071 10L12.1214 11.4143L13.5357 10L14.2428 10.7071L12.8285 12.1214L14.2426 13.5355L13.5355 14.2426L12.1214 12.8285L10.7073 14.2426L10.0002 13.5355L11.4143 12.1214L10 10.7071L10.7071 10Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("filter","Filter"):T("filter",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3C2 2.44772 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3V4.78597L9.75 7.28597V14H6.25V7.28597L2 4.78597V3ZM13 3H3V4.21403L7.25 6.71403V13H8.75V6.71403L13 4.21403V3Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("flag","Flag"):T("flag",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 2H13.46C13.7582 2 14 2.24177 14 2.54V9.46C14 9.75823 13.7582 10 13.46 10H4V15H3V10L3 2ZM4 3V9H13V3H4Z" fill="black" fill-opacity="0.9"/>
</svg>
    `),n==="develop"?V("folder-add","FolderAdd"):T("folder-add",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 3C1.5 2.44772 1.94772 2 2.5 2H6.0906L8.16202 3.5H13C13.5523 3.5 14 3.94772 14 4.5V8.5H13V4.5H7.83798L5.76655 3L2.5 3V12H8.5V13H2.5C1.94772 13 1.5 12.5523 1.5 12V3Z" fill="black" fill-opacity="0.9"/>
<path d="M12 15V13H10V12H12V10H13V12H15V13H13V15H12Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("folder-open","FolderOpen"):T("folder-open",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 2.74396H6.42857L8.5 4.39468H13.5V3.39468H8.84972L6.77829 1.74396L2.5 1.74396V2.74396Z" fill="black" fill-opacity="0.9"/>
<path d="M2.5 4.39466C1.94772 4.39466 1.5 4.84237 1.5 5.39466V13C1.5 13.5523 1.94772 14 2.5 14L13.5 14C14.0523 14 14.5 13.5523 14.5 13V7.04537C14.5 6.49309 14.0523 6.04537 13.5 6.04537H8.17486L6.10343 4.39465L2.5 4.39466ZM2.5 5.39466L5.75371 5.39465L7.82514 7.04537H13.5V13L2.5 13V5.39466Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("folder","Folder"):T("folder",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 3.5C1.5 2.94771 1.94772 2.5 2.5 2.5H5.42857H5.5906L5.72183 2.59503L7.66202 4H13.5C14.0523 4 14.5 4.44772 14.5 5V13C14.5 13.5523 14.0523 14 13.5 14H2.5C1.94772 14 1.5 13.5523 1.5 13L1.5 3.5ZM5.26655 3.5L2.5 3.5V13H13.5V5H7.5H7.33798L7.20675 4.90497L5.26655 3.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("fork","Fork"):T("fork",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 2.5C6 2.22386 6.22386 2 6.5 2H9.5C9.77614 2 10 2.22386 10 2.5V5.5C10 5.77614 9.77614 6 9.5 6H8.5V8H11.5C12.0523 8 12.5 8.44772 12.5 9V10H13.5C13.7761 10 14 10.2239 14 10.5V13.5C14 13.7761 13.7761 14 13.5 14H10.5C10.2239 14 10 13.7761 10 13.5V10.5C10 10.2239 10.2239 10 10.5 10H11.5V9H4.5V10H5.5C5.77614 10 6 10.2239 6 10.5V13.5C6 13.7761 5.77614 14 5.5 14H2.5C2.22386 14 2 13.7761 2 13.5V10.5C2 10.2239 2.22386 10 2.5 10H3.5V9C3.5 8.44772 3.94772 8 4.5 8H7.5V6H6.5C6.22386 6 6 5.77614 6 5.5V2.5ZM7 5H9V3H7V5ZM3 11V13H5V11H3ZM11 11V13H13V11H11Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("format-horizontal-align-bottom","FormatHorizontalAlignBottom"):T("format-horizontal-align-bottom",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 14L13 2H14L14 14H13Z" fill="black" fill-opacity="0.9"/>
<path d="M10.5 14V6H9.5V14H10.5Z" fill="black" fill-opacity="0.9"/>
<path d="M3.5 6L3.5 14H2.5V6H3.5Z" fill="black" fill-opacity="0.9"/>
<path d="M6 14L6 2H7L7 14H6Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("format-horizontal-align-center","FormatHorizontalAlignCenter"):T("format-horizontal-align-center",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 14L13 2H14L14 14H13Z" fill="black" fill-opacity="0.9"/>
<path d="M10.5 12V4H9.5V12H10.5Z" fill="black" fill-opacity="0.9"/>
<path d="M3.5 4L3.5 12H2.5V4H3.5Z" fill="black" fill-opacity="0.9"/>
<path d="M6 14L6 2H7L7 14H6Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("format-horizontal-align-top","FormatHorizontalAlignTop"):T("format-horizontal-align-top",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 2L2.5 11H3.5L3.5 2H2.5Z" fill="black" fill-opacity="0.9"/>
<path d="M9.5 11L9.5 2H10.5L10.5 11H9.5Z" fill="black" fill-opacity="0.9"/>
<path d="M13 14L13 2H14L14 14H13Z" fill="black" fill-opacity="0.9"/>
<path d="M6 14L6 2H7L7 14H6Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("format-vertical-align-center","FormatVerticalAlignCenter"):T("format-vertical-align-center",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3H14V2H2V3Z" fill="black" fill-opacity="0.9"/>
<path d="M4 6.5H12V5.5H4V6.5Z" fill="black" fill-opacity="0.9"/>
<path d="M12 13.5H4V12.5H12V13.5Z" fill="black" fill-opacity="0.9"/>
<path d="M2 10H14V9H2V10Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("format-vertical-align-left","FormatVerticalAlignLeft"):T("format-vertical-align-left",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3H14V2H2V3Z" fill="black" fill-opacity="0.9"/>
<path d="M2 6.5H11V5.5H2V6.5Z" fill="black" fill-opacity="0.9"/>
<path d="M11 13.5H2V12.5H11V13.5Z" fill="black" fill-opacity="0.9"/>
<path d="M2 10H14V9H2V10Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("format-vertical-align-right","FormatVerticalAlignRight"):T("format-vertical-align-right",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 3H14V2H2V3ZM5 6.5H14V5.5H5V6.5ZM14 13.5H5V12.5H14V13.5ZM2 10H14V9H2V10Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("forward","Forward"):T("forward",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7579 7.60926C15.0086 7.80943 15.0086 8.19058 14.7579 8.39075L9.12049 12.8914C8.79303 13.1529 8.30854 12.9197 8.30854 12.5007L8.30854 8.23459C8.27912 8.29002 8.23853 8.341 8.18678 8.38412L2.82034 12.8562C2.49468 13.1276 2.00024 12.896 2.00024 12.4721L2.00025 3.5279C2.00025 3.10398 2.49468 2.87241 2.82034 3.1438L8.18678 7.61591C8.23853 7.65903 8.27912 7.71 8.30854 7.76544L8.30854 3.49935C8.30854 3.08033 8.79303 2.84717 9.12049 3.1086L14.7579 7.60926ZM9.30854 4.53833L9.30854 11.4617L13.6445 8.00001L9.30854 4.53833ZM3.00025 4.59544L3.00024 11.4046L7.08567 8.00001L3.00025 4.59544Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("fullscreen-exit","FullscreenExit"):T("fullscreen-exit",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.50004 5.79293V3.00004L7.50004 3.00004V7.00004C7.50004 7.27618 7.27618 7.50004 7.00004 7.50004L3.00004 7.50004L3.00004 6.50004L5.79293 6.50004L2.14648 2.85359L2.85359 2.14648L6.50004 5.79293Z" fill="black" fill-opacity="0.9"/>
<path d="M9.50004 10.2071V13H8.50004V9.00004C8.50004 8.7239 8.7239 8.50004 9.00004 8.50004H13V9.50004H10.2071L13.8536 13.1465L13.1465 13.8536L9.50004 10.2071Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("fullscreen","Fullscreen"):T("fullscreen",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 4.20711V7H2.5V3C2.5 2.72386 2.72386 2.5 3 2.5L7 2.5V3.5H4.2071L7.35355 6.64646L6.64645 7.35357L3.5 4.20711Z" fill="black" fill-opacity="0.9"/>
<path d="M12.5 11.7929V9H13.5V13C13.5 13.2761 13.2761 13.5 13 13.5L9 13.5L9 12.5H11.7929L8.64645 9.35353L9.35355 8.64643L12.5 11.7929Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("gender-female","GenderFemale"):T("gender-female",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1.67828C6.067 1.67828 4.5 3.24529 4.5 5.17828C4.5 6.94604 5.81055 8.4077 7.51306 8.64468L7.51311 10.0021H5.51315V11.0021H7.51315L7.51329 14.502L8.51329 14.502L8.51315 11.0021H10.5132V10.0021H8.51311L8.51306 8.64095C10.2028 8.39273 11.5 6.93699 11.5 5.17828C11.5 3.24529 9.933 1.67828 8 1.67828ZM8 2.67828C9.38071 2.67828 10.5 3.79757 10.5 5.17828C10.5 6.559 9.38071 7.67828 8 7.67828C6.61929 7.67828 5.5 6.559 5.5 5.17828C5.5 3.79757 6.61929 2.67828 8 2.67828Z" fill="black"/>
</svg>
`),n==="develop"?V("gender-male","GenderMale"):T("gender-male",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.9997 3.6C12.9997 3.26863 12.7311 3 12.3997 3H8.99975V4L11.3825 4L7.67208 7.7104C6.29899 6.64114 4.31234 6.73766 3.05003 7.99998C1.68319 9.36682 1.68319 11.5829 3.05003 12.9497C4.41686 14.3166 6.63294 14.3166 7.99978 12.9497C9.23096 11.7185 9.35315 9.79831 8.36634 8.43036L11.9997 4.79693V7H12.9997V3.6ZM3.75714 12.2426C2.78082 11.2663 2.78082 9.6834 3.75714 8.70709C4.73345 7.73078 6.31636 7.73078 7.29267 8.70709C8.26898 9.6834 8.26898 11.2663 7.29267 12.2426C6.31636 13.2189 4.73345 13.2189 3.75714 12.2426Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("gift","Gift"):T("gift",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 4C3.5 4.5628 3.68597 5.08217 3.99982 5.5H2.5C2.22386 5.5 2 5.72386 2 6V14C2 14.2761 2.22386 14.5 2.5 14.5H13.5C13.7761 14.5 14 14.2761 14 14V6C14 5.72386 13.7761 5.5 13.5 5.5H12.0002C12.314 5.08217 12.5 4.5628 12.5 4C12.5 2.61929 11.3807 1.5 10 1.5C9.1822 1.5 8.45611 1.89267 8 2.49976C7.54388 1.89267 6.8178 1.5 6 1.5C4.61929 1.5 3.5 2.61929 3.5 4ZM11.5 4C11.5 4.82843 10.8284 5.5 10 5.5H8.5V4C8.5 3.17157 9.17157 2.5 10 2.5C10.8284 2.5 11.5 3.17157 11.5 4ZM7.5 6.5V11H8.5V6.5H13V13.5H3V6.5H7.5ZM7.5 5.5H6C5.17157 5.5 4.5 4.82843 4.5 4C4.5 3.17157 5.17157 2.5 6 2.5C6.82843 2.5 7.5 3.17157 7.5 4V5.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("heart-filled","HeartFilled"):T("heart-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 6.61283C2 3.69894 5.46385 2.17518 7.61184 4.14417L8 4.49999L8.38816 4.14418C10.5362 2.17518 14 3.69893 14 6.61283C14 7.50101 13.6472 8.35282 13.0191 8.98086L8.14571 13.8543C8.06523 13.9348 7.93477 13.9348 7.85429 13.8543L2.98087 8.98086C2.35283 8.35282 2 7.50101 2 6.61283Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("heart","Heart"):T("heart",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 5.85656L9.06389 4.88133C10.5705 3.50029 13 4.56904 13 6.61283C13 7.2358 12.7525 7.83325 12.312 8.27375L8 12.5858L3.68798 8.27376C3.24747 7.83325 3 7.2358 3 6.61283C3 4.56904 5.42952 3.50029 6.93611 4.88133L8 5.85656ZM7.61184 4.14417C5.46385 2.17518 2 3.69894 2 6.61283C2 7.50101 2.35283 8.35282 2.98087 8.98086L7.85429 13.8543C7.93477 13.9348 8.06523 13.9348 8.14571 13.8543L13.0191 8.98086C13.6472 8.35282 14 7.50101 14 6.61283C14 3.69893 10.5362 2.17518 8.38816 4.14418L8 4.49999L7.61184 4.14417Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("help-circle-filled","HelpCircleFilled"):T("help-circle-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.9944 8C14.9944 4.13401 11.8604 1 7.99439 1C4.12839 0.999998 0.994386 4.134 0.994385 8C0.994383 11.866 4.12839 15 7.99438 15C11.8604 15 14.9944 11.866 14.9944 8ZM5.80273 6.6315C5.80273 5.42262 6.78535 4.44 7.99424 4.44C9.20312 4.44 10.1857 5.42262 10.1857 6.6315C10.1857 7.60163 9.44315 8.35248 8.70124 8.65455C8.58029 8.70488 8.49428 8.82451 8.49428 8.97008V9.7675H7.49428V8.97008C7.49428 8.41041 7.83313 7.931 8.32065 7.7298L8.3232 7.72875C8.81796 7.52775 9.18574 7.07185 9.18574 6.6315C9.18574 5.9749 8.65084 5.44 7.99424 5.44C7.33764 5.44 6.80273 5.9749 6.80273 6.6315H5.80273ZM7.46697 11.1734C7.46697 10.8823 7.70302 10.6462 7.99419 10.6462C8.28537 10.6462 8.52141 10.8823 8.52141 11.1734C8.52141 11.4646 8.28537 11.7007 7.99419 11.7007C7.70302 11.7007 7.46697 11.4646 7.46697 11.1734Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("help-circle","HelpCircle"):T("help-circle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.39404 11.6C7.39404 11.2686 7.66267 11 7.99404 11C8.32541 11 8.59404 11.2686 8.59404 11.6C8.59404 11.9314 8.32541 12.2 7.99404 12.2C7.66267 12.2 7.39404 11.9314 7.39404 11.6Z" fill="black" fill-opacity="0.9"/>
<path d="M7.99409 4.0061C6.65645 4.0061 5.56909 5.09346 5.56909 6.4311H6.56909C6.56909 5.64574 7.20873 5.0061 7.99409 5.0061C8.77945 5.0061 9.41909 5.64574 9.41909 6.4311C9.41909 6.96885 8.9746 7.50808 8.39445 7.74376L8.3919 7.74481C7.86235 7.96335 7.49414 8.48413 7.49414 9.0925V10H8.49414V9.0925C8.49414 8.89828 8.60945 8.73731 8.77236 8.66961C9.59969 8.33289 10.4191 7.49869 10.4191 6.4311C10.4191 5.09346 9.33173 4.0061 7.99409 4.0061Z" fill="black" fill-opacity="0.9"/>
<path d="M14.9941 8C14.9941 4.13401 11.8601 1 7.99414 1C4.12815 0.999998 0.994142 4.134 0.994141 8C0.994138 11.866 4.12815 15 7.99414 15C11.8601 15 14.9941 11.866 14.9941 8ZM13.9941 8C13.9941 11.3137 11.3078 14 7.99414 14C4.68043 14 1.99414 11.3137 1.99414 8C1.99414 4.68629 4.68043 2 7.99414 2C11.3079 2 13.9941 4.68629 13.9941 8Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("help","Help"):T("help",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 2.5C6.10262 2.5 4.5 3.94793 4.5 5.8H5.5C5.5 4.56407 6.58881 3.5 8 3.5C9.41119 3.5 10.5 4.56407 10.5 5.8C10.5 6.68407 9.72532 7.55083 8.73987 7.92448L8.73742 7.92542C8.02449 8.20003 7.5 8.86853 7.5 9.68V11H8.5V9.68C8.5 9.32382 8.72935 9.0006 9.09579 8.859C10.3042 8.40029 11.5 7.25137 11.5 5.8C11.5 3.94793 9.89738 2.5 8 2.5Z" fill="black" fill-opacity="0.9"/>
<path d="M8 12C7.58579 12 7.25 12.3358 7.25 12.75C7.25 13.1642 7.58579 13.5 8 13.5C8.41421 13.5 8.75 13.1642 8.75 12.75C8.75 12.3358 8.41421 12 8 12Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("history","History"):T("history",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.90582 2.79339C10.8499 2.79339 13.2095 5.14005 13.2095 8.00171C13.2095 10.8634 10.8499 13.21 7.90581 13.21C5.44426 13.21 3.39128 11.5695 2.78447 9.35914L1.75098 9.52779C2.44243 12.2419 4.93584 14.2517 7.90581 14.2517C11.4103 14.2517 14.2512 11.4535 14.2512 8.00171C14.2512 4.54993 11.4103 1.75171 7.90582 1.75171C5.80622 1.75171 3.9448 2.75613 2.78981 4.30376L2.78981 2.64486H1.75098V5.79135C1.75098 6.0675 1.97483 6.29135 2.25098 6.29135L5.37759 6.29135V5.24683H3.40454C4.33896 3.77685 5.99992 2.79339 7.90582 2.79339Z" fill="black" fill-opacity="0.9"/>
<path d="M6.99951 5.5V8.38893L9.64596 11.0354L10.3531 10.3283L7.99951 7.97471V5.5H6.99951Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("home","Home"):T("home",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00004 11V12H10V11H6.00004Z" fill="black" fill-opacity="0.9"/>
<path d="M7.64648 1.64646C7.84175 1.4512 8.15833 1.4512 8.35359 1.64646L14.8536 8.14646L14.1465 8.85357L13 7.70712V13.5C13 14.0523 12.5523 14.5 12 14.5H4.00004C3.44775 14.5 3.00004 14.0523 3.00004 13.5V7.70712L1.85359 8.85357L1.14648 8.14646L7.64648 1.64646ZM8.00004 2.70712L4.00004 6.70712V13.5H12V6.70712L8.00004 2.70712Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("hourglass","Hourglass"):T("hourglass",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.99992 7.11557L12 3.79931V2.5H4V3.79932L7.99992 7.11557ZM3 4.26923V2.5C3 1.94771 3.44772 1.5 4 1.5H12C12.5523 1.5 13 1.94772 13 2.5V4.26923L8.49992 8.00002L13 11.7308V13.5C13 14.0523 12.5523 14.5 12 14.5H4C3.44772 14.5 3 14.0523 3 13.5V11.7308L7.49992 8.00002L3 4.26923ZM4 12.2007V13.5H12V12.2007L7.99992 8.88447L4 12.2007Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("image-error","ImageError"):T("image-error",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 13V8H3L3 10.2929L6 7.29289L11.7071 13H13L13 3L8 3V2H13C13.5523 2 14 2.44772 14 3L14 13C14 13.5523 13.5523 14 13 14L3 14C2.44772 14 2 13.5523 2 13ZM6 8.70711L3 11.7071L3 13L10.2929 13L6 8.70711Z" fill="black" fill-opacity="0.9"/>
<path d="M12 6C12 7.10457 11.1046 8 10 8C8.89543 8 8 7.10457 8 6C8 4.89543 8.89543 4 10 4C11.1046 4 12 4.89543 12 6ZM11 6C11 5.44772 10.5523 5 10 5C9.44772 5 9 5.44772 9 6C9 6.55228 9.44772 7 10 7C10.5523 7 11 6.55228 11 6Z" fill="black" fill-opacity="0.9"/>
<path d="M6.28208 5.55923L5.57497 6.26634L4.16076 4.85213L2.74654 6.26634L2.03943 5.55923L3.45365 4.14502L2.03943 2.73081L2.74654 2.0237L4.16076 3.43791L5.57497 2.0237L6.28208 2.73081L4.86786 4.14502L6.28208 5.55923Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("image","Image"):T("image",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M10 8C11.1046 8 12 7.10457 12 6C12 4.89543 11.1046 4 10 4C8.89543 4 8 4.89543 8 6C8 7.10457 8.89543 8 10 8ZM10 7C10.5523 7 11 6.55228 11 6C11 5.44772 10.5523 5 10 5C9.44772 5 9 5.44772 9 6C9 6.55228 9.44772 7 10 7Z" fill="black" fill-opacity="0.9"/>
<path d="M2 13C2 13.5523 2.44772 14 3 14L13 14C13.5523 14 14 13.5523 14 13L14 3C14 2.44772 13.5523 2 13 2H3C2.44772 2 2 2.44771 2 3V13ZM3 11.7071L6 8.70711L10.2929 13L3 13L3 11.7071ZM3 10.2929L3 3L13 3L13 13H11.7071L6 7.29289L3 10.2929Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("info-circle-filled","InfoCircleFilled"):T("info-circle-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM7.3999 4H8.59985V5.19995H7.3999V4ZM7.50562 6.5H8.50562V11.9998H7.50562V6.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("info-circle","InfoCircle"):T("info-circle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.50562 11.9998V6.5H8.50562V11.9998H7.50562Z" fill="black" fill-opacity="0.9"/>
<path d="M8.59985 4H7.3999V5.19995H8.59985V4Z" fill="black" fill-opacity="0.9"/>
<path d="M1 8C1 11.866 4.13403 15 8 15C11.866 15 15 11.866 15 8C15 4.13403 11.866 1 8 1C4.13403 1 1 4.13403 1 8ZM2 8C2 4.68628 4.68628 2 8 2C11.3137 2 14 4.68628 14 8C14 11.3137 11.3137 14 8 14C4.68628 14 2 11.3137 2 8Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("internet","Internet"):T("internet",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.1001 7.9C1.1001 4.08927 4.18928 1.00005 8 1C11.8108 1 14.9001 4.08923 14.9001 7.9V8.1C14.9001 11.9108 11.8109 15 8.0001 15C4.18938 14.9999 1.1001 11.9107 1.1001 8.1V7.9ZM13.8868 8.5H10.8869C10.7905 10.419 10.1384 12.3152 8.93067 13.927C11.6183 13.5012 13.7019 11.2606 13.8868 8.5ZM10.8869 7.5H13.8868C13.7019 4.73941 11.6183 2.4988 8.93067 2.07297C10.1384 3.68475 10.7905 5.58102 10.8869 7.5ZM9.88552 7.5C9.78624 5.72473 9.15773 3.97354 8 2.50303C6.84227 3.97354 6.21376 5.72473 6.11448 7.5H9.88552ZM5.11307 8.5H2.11344C2.29825 11.2605 4.38178 13.5011 7.06931 13.927C5.8616 12.3152 5.20952 10.419 5.11307 8.5ZM5.11307 7.5C5.20952 5.58103 5.86159 3.68478 7.06931 2.07301C4.38177 2.49893 2.29825 4.73949 2.11344 7.5H5.11307ZM9.88552 8.5H6.11448C6.21376 10.2753 6.84227 12.0265 8 13.497C9.15773 12.0265 9.78624 10.2753 9.88552 8.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("jump","Jump"):T("jump",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.29329 13.7067C2.48075 13.8942 2.73489 13.9996 3 14H13C13.2651 13.9996 13.5193 13.8942 13.7067 13.7067C13.8942 13.5193 13.9996 13.2651 14 13V8.5H13V13H3V3H7.5V2H3C2.73489 2.00036 2.48075 2.10583 2.29329 2.29329C2.10583 2.48075 2.00036 2.73489 2 3V13C2.00036 13.2651 2.10583 13.5193 2.29329 13.7067Z" fill="black" fill-opacity="0.9"/>
<path d="M9 3V2H13.5C13.7761 2 14 2.22386 14 2.5V7H13V3.707L8.707 8L8 7.293L12.293 3H9Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("laptop","Laptop"):T("laptop",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.5 12C1.94771 12 1.5 11.5523 1.5 11V4C1.5 3.44772 1.94772 3 2.5 3L13.5 3C14.0523 3 14.5 3.44772 14.5 4V11C14.5 11.5523 14.0523 12 13.5 12H2.5ZM2.5 11L13.5 11V4L2.5 4V11Z" fill="black" fill-opacity="0.9"/>
<path d="M15 13H1V14H15V13Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("layers","Layers"):T("layers",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0731 4.97791L7.99976 7.50841L1.92641 4.97791C1.51598 4.8069 1.51598 4.20041 1.92641 4.0294L7.99976 1.4989L14.0731 4.0294C14.4835 4.20041 14.4835 4.8069 14.0731 4.97791ZM3.42727 4.50366L7.99976 6.40881L12.5722 4.50366L7.99976 2.5985L3.42727 4.50366Z" fill="black" fill-opacity="0.9"/>
<path d="M1.49902 7.02665V8.25379L8.00001 11.1119L14.499 8.25466V7.02752L8.00001 9.8848L1.49902 7.02665Z" fill="black" fill-opacity="0.9"/>
<path d="M1.49902 10.4194V11.6466L8.00011 14.5048L14.499 11.6475V10.4204L8.00011 13.2776L1.49902 10.4194Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("link-unlink","LinkUnlink"):T("link-unlink",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 1.99994L6 3.99994L7 3.99994V1.99994H6Z" fill="black" fill-opacity="0.9"/>
<path d="M8.1767 9.59098L5.8786 11.8891C5.39045 12.3772 4.59899 12.3772 4.11084 11.8891C3.62268 11.4009 3.62268 10.6095 4.11084 10.1213L6.40893 7.82321L5.70183 7.11611L3.40373 9.4142C2.52505 10.2929 2.52505 11.7175 3.40373 12.5962C4.28241 13.4749 5.70703 13.4749 6.58571 12.5962L8.88381 10.2981L8.1767 9.59098Z" fill="black" fill-opacity="0.9"/>
<path d="M9.59091 8.17677L10.298 8.88387L12.5961 6.58578C13.4748 5.7071 13.4748 4.28248 12.5961 3.4038C11.7174 2.52512 10.2928 2.52512 9.41414 3.4038L7.11604 5.70189L7.82315 6.409L10.1212 4.1109C10.6094 3.62275 11.4009 3.62275 11.889 4.1109C12.3772 4.59906 12.3772 5.39051 11.889 5.87867L9.59091 8.17677Z" fill="black" fill-opacity="0.9"/>
<path d="M12 8.99988H14V9.99988H12V8.99988Z" fill="black" fill-opacity="0.9"/>
<path d="M2 6.99994H4V5.99994H2V6.99994Z" fill="black" fill-opacity="0.9"/>
<path d="M10 11.9999V13.9999H9L9 11.9999H10Z" fill="black" fill-opacity="0.9"/>
<path d="M11.7322 11.025L13.3536 12.6463L12.6464 13.3534L11.0251 11.7321L11.7322 11.025Z" fill="black" fill-opacity="0.9"/>
<path d="M2.64645 3.35343L4.26777 4.97475L4.97487 4.26765L3.35355 2.64632L2.64645 3.35343Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("link","Link"):T("link",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.23229 11.8891L8.35361 9.76776L9.06072 10.4749L6.9394 12.5962C5.96309 13.5725 4.38017 13.5725 3.40386 12.5962C2.42755 11.6199 2.42755 10.037 3.40386 9.06066L5.52518 6.93934L6.23229 7.64644L4.11097 9.76776C3.52518 10.3536 3.52518 11.3033 4.11097 11.8891C4.69676 12.4749 5.6465 12.4749 6.23229 11.8891Z" fill="black" fill-opacity="0.9"/>
<path d="M10.4749 9.06066L9.76783 8.35355L11.8891 6.23223C12.4749 5.64644 12.4749 4.6967 11.8891 4.11091C11.3034 3.52512 10.3536 3.52512 9.76782 4.11091L7.6465 6.23223L6.9394 5.52512L9.06072 3.4038C10.037 2.42749 11.6199 2.42749 12.5963 3.4038C13.5726 4.38011 13.5726 5.96303 12.5963 6.93934L10.4749 9.06066Z" fill="black" fill-opacity="0.9"/>
<path d="M9.06087 6.23225L6.23244 9.06068L6.93955 9.76778L9.76798 6.93936L9.06087 6.23225Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("loading","Loading"):T("loading",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1.5C4.41038 1.5 1.5 4.41038 1.5 8C1.5 11.5896 4.41038 14.5 8 14.5V12.875C5.30761 12.875 3.125 10.6924 3.125 8C3.125 5.30761 5.30761 3.125 8 3.125C10.6924 3.125 12.875 5.30761 12.875 8H14.5C14.5 4.41038 11.5896 1.5 8 1.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("location","Location"):T("location",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5001 5.99999C10.5001 7.3807 9.3808 8.49999 8.00009 8.49999C6.61938 8.49999 5.50009 7.3807 5.50009 5.99999C5.50009 4.61928 6.61938 3.49999 8.00009 3.49999C9.3808 3.49999 10.5001 4.61928 10.5001 5.99999ZM9.50009 5.99999C9.50009 5.17156 8.82852 4.49999 8.00009 4.49999C7.17166 4.49999 6.50009 5.17156 6.50009 5.99999C6.50009 6.82842 7.17166 7.49999 8.00009 7.49999C8.82852 7.49999 9.50009 6.82842 9.50009 5.99999Z" fill="black" fill-opacity="0.9"/>
<path d="M8.36196 14.4684C8.18821 14.7236 7.81196 14.7236 7.63822 14.4684L3.85557 8.91174C2.50041 6.92103 2.75204 4.24804 4.45488 2.54519C6.41284 0.587231 9.58733 0.58723 11.5453 2.54519C13.2481 4.24804 13.4998 6.92103 12.1446 8.91174L8.36196 14.4684ZM11.318 8.34901C12.4028 6.75536 12.2014 4.61551 10.8382 3.2523C9.27075 1.68486 6.72943 1.68486 5.16199 3.2523C3.79878 4.61551 3.59735 6.75536 4.68221 8.34901L8.00009 13.2229L11.318 8.34901Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("lock-off","LockOff"):T("lock-off",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 11V10H10V11H6Z" fill="black" fill-opacity="0.9"/>
<path d="M4.5 6V5C4.5 3.067 6.067 1.5 8 1.5C9.933 1.5 11.5 3.067 11.5 5H10.5C10.5 3.61929 9.38071 2.5 8 2.5C6.61929 2.5 5.5 3.61929 5.5 5V6H13C13.2761 6 13.5 6.22386 13.5 6.5V13.5C13.5 13.7761 13.2761 14 13 14H3C2.72386 14 2.5 13.7761 2.5 13.5V6.5C2.5 6.22386 2.72386 6 3 6H4.5ZM3.5 13H12.5V7H3.5V13Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("lock-on","LockOn"):T("lock-on",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9.99999V11H10V9.99999H6Z" fill="black" fill-opacity="0.9"/>
<path d="M4.5 4.99084V5.99998H3C2.72386 5.99998 2.5 6.22384 2.5 6.49998V13.5C2.5 13.7761 2.72386 14 3 14H13C13.2761 14 13.5 13.7761 13.5 13.5V6.49998C13.5 6.22384 13.2761 5.99998 13 5.99998H11.5V4.99084C11.5 3.05785 9.933 1.49084 8 1.49084C6.067 1.49084 4.5 3.05785 4.5 4.99084ZM10.5 5.99998H5.5V4.99084C5.5 3.61013 6.61929 2.49084 8 2.49084C9.38071 2.49084 10.5 3.61013 10.5 4.99084V5.99998ZM3.5 6.99998H12.5V13H3.5V6.99998Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("login","Login"):T("login",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.47744 7.49999L6.23166 5.25421L6.93877 4.5471L10.0381 7.64644C10.2334 7.8417 10.2334 8.15828 10.0381 8.35355L6.93877 11.4529L6.23166 10.7458L8.47745 8.49999L1 8.49998L1 7.49997L8.47744 7.49999Z" fill="black" fill-opacity="0.9"/>
<path d="M4.00006 5V3H12.0001V13H4.00006V11H3.00006V13.5C3.00006 13.7761 3.22391 14 3.50006 14H12.5001C12.7762 14 13.0001 13.7761 13.0001 13.5V2.5C13.0001 2.22386 12.7762 2 12.5001 2H3.50006C3.22391 2 3.00006 2.22386 3.00006 2.5V5H4.00006Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("logo-android","LogoAndroid"):T("logo-android",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.31701 8.37857C5.31701 8.00808 5.61735 7.70773 5.98784 7.70773C6.35833 7.70773 6.65868 8.00808 6.65868 8.37857C6.65868 8.74906 6.35833 9.0494 5.98784 9.0494C5.61735 9.0494 5.31701 8.74906 5.31701 8.37857Z" fill="black" fill-opacity="0.9"/>
<path d="M10.0129 7.70773C9.64236 7.70773 9.34202 8.00808 9.34202 8.37857C9.34202 8.74906 9.64236 9.0494 10.0129 9.0494C10.3833 9.0494 10.6837 8.74906 10.6837 8.37857C10.6837 8.00808 10.3833 7.70773 10.0129 7.70773Z" fill="black" fill-opacity="0.9"/>
<path d="M2.31638 4L3.9958 5.67942C5.11346 4.84654 6.49933 4.35355 8.00035 4.35355C9.50137 4.35355 10.8872 4.84654 12.0049 5.67942L13.6843 4L14.3914 4.70711L12.762 6.33656C13.8933 7.47647 14.618 9.02038 14.7008 10.7327C14.706 10.8418 14.7087 10.9515 14.7087 11.0619V11.7327H1.29199V11.0619C1.29199 10.9515 1.29466 10.8418 1.29993 10.7327C1.38266 9.02038 2.10744 7.47647 3.23872 6.33656L1.60927 4.70711L2.31638 4ZM2.30132 10.7327H13.6994C13.5288 7.73328 11.0425 5.35355 8.00035 5.35355C4.95819 5.35355 2.47185 7.73328 2.30132 10.7327Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("logo-apple-filled","LogoAppleFilled"):T("logo-apple-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.6858 1C10.7724 1.78958 10.4538 2.58273 9.98364 3.15353C9.51181 3.72324 8.73978 4.1671 7.98282 4.10843C7.88056 3.33311 8.26219 2.52735 8.69865 2.02125C9.18583 1.45099 10.0072 1.02742 10.6858 1Z" fill="black" fill-opacity="0.9"/>
<path d="M13.1277 5.60474C12.9822 5.69544 11.6658 6.51624 11.6822 8.16735C11.7001 10.1607 13.3917 10.8541 13.4878 10.8935C13.4901 10.8945 13.4919 10.8952 13.4919 10.8952C13.491 10.8979 13.4893 10.9033 13.4868 10.9115C13.4444 11.0464 13.1713 11.9167 12.5576 12.8138C11.9956 13.6358 11.413 14.4533 10.494 14.47C10.0522 14.4785 9.75708 14.3508 9.45018 14.218C9.1291 14.0791 8.79514 13.9346 8.26696 13.9346C7.71347 13.9346 7.36398 14.0836 7.02734 14.2271C6.73567 14.3514 6.45365 14.4716 6.05696 14.4873C5.17032 14.521 4.49451 13.5998 3.92782 12.7812C2.76867 11.1063 1.88341 8.04809 3.07299 5.98448C3.66244 4.95912 4.71823 4.30991 5.86367 4.29291C6.35713 4.28421 6.83526 4.47406 7.25372 4.64022C7.57365 4.76725 7.8587 4.88043 8.08903 4.88043C8.29595 4.88043 8.57336 4.77102 8.89682 4.64344C9.40607 4.44259 10.0295 4.19671 10.6716 4.26193C11.1111 4.28002 12.3459 4.43904 13.1385 5.59791C13.1364 5.59931 13.1328 5.60158 13.1277 5.60474Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("logo-apple","LogoApple"):T("logo-apple",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.29006 4.00804C8.39216 4.00804 8.49363 4.00196 8.59399 3.99C9.16299 3.92218 9.69626 3.66534 10.1056 3.25603C10.5149 2.84672 10.7717 2.31345 10.8395 1.74445C10.8515 1.64409 10.8576 1.54262 10.8576 1.44052V1H10.4171C10.315 1 10.2135 1.00608 10.1131 1.01804C9.54414 1.08586 9.01086 1.3427 8.60155 1.75201C8.19224 2.16132 7.9354 2.69459 7.86759 3.26359C7.85565 3.36373 7.84957 3.46497 7.84954 3.56684V4.00804H8.29006ZM9.57917 2.72962C9.3173 2.99149 8.98397 3.16546 8.62502 3.23256C8.69212 2.87361 8.86609 2.54028 9.12796 2.27842C9.38982 2.01655 9.72315 1.84258 10.0821 1.77548C10.015 2.13443 9.84103 2.46776 9.57917 2.72962Z" fill="black" fill-opacity="0.9"/>
<path d="M12.6931 5.08954C12.9171 5.26573 13.133 5.48579 13.3255 5.76088C13.3038 5.77264 13.1447 5.86243 12.9359 6.03364C12.4712 6.41459 11.7606 7.19865 11.7714 8.42318C11.7947 10.547 13.6752 11.2524 13.6985 11.26C13.6952 11.2714 13.6793 11.3244 13.6496 11.4103C13.5986 11.5579 13.5068 11.8027 13.3675 12.1011C13.2101 12.4383 12.992 12.8439 12.7039 13.2548C12.1055 14.1119 11.4839 14.9614 10.5047 14.9765C10.0319 14.9877 9.71618 14.8546 9.38781 14.7161C9.04705 14.5723 8.69261 14.4228 8.13464 14.4228C7.54173 14.4228 7.16869 14.5783 6.80938 14.7281C6.49998 14.857 6.20075 14.9817 5.78009 14.9993C4.83205 15.0296 4.11714 14.0739 3.51102 13.2244C2.27546 11.4799 1.33519 8.30941 2.60183 6.16288C3.23127 5.09341 4.35026 4.41836 5.57028 4.40319C6.09584 4.39025 6.60635 4.58803 7.05329 4.76118C7.39273 4.89268 7.69551 5.00998 7.94037 5.00998C8.15548 5.00998 8.43608 4.90234 8.76801 4.77501C9.29941 4.57115 9.96241 4.31682 10.699 4.37285C11.0542 4.39635 11.9224 4.48359 12.6931 5.08954ZM10.6393 5.27485L10.6304 5.27426C10.2284 5.24369 9.82647 5.34827 9.38919 5.507C9.32293 5.53106 9.22662 5.56773 9.12493 5.60646C8.98504 5.65974 8.83454 5.71706 8.73726 5.75104C8.53876 5.82038 8.24562 5.91396 7.94037 5.91396C7.64946 5.91396 7.37621 5.83645 7.1757 5.76982C7.02455 5.71959 6.85603 5.65429 6.70724 5.59663C6.65817 5.57762 6.61125 5.55943 6.5678 5.5429C6.16487 5.38953 5.86112 5.30028 5.59251 5.30689L5.58152 5.30709C4.6936 5.31813 3.85761 5.81141 3.38037 6.62229C2.89586 7.44337 2.79895 8.5289 3.00766 9.68362C3.21513 10.8314 3.70666 11.9362 4.24784 12.7007C4.55663 13.1335 4.83541 13.5075 5.1276 13.7749C5.41383 14.0368 5.60819 14.0992 5.74752 14.0959C6.00039 14.0845 6.16227 14.0175 6.49116 13.8813L6.53909 13.8615C6.91849 13.7046 7.40861 13.5189 8.13464 13.5189C8.87008 13.5189 9.35948 13.7231 9.72037 13.8752C10.0534 14.0156 10.2133 14.0792 10.4834 14.0728L10.4907 14.0727C10.6923 14.0696 10.8904 13.9891 11.1381 13.7633C11.4046 13.5204 11.6555 13.1772 11.9626 12.7373L11.9638 12.7357C12.2313 12.3543 12.4318 11.9746 12.5733 11.6646C12.4273 11.5619 12.273 11.4401 12.1192 11.297C11.5041 10.7248 10.8824 9.79485 10.8674 8.43311L10.8674 8.4311C10.8572 7.26653 11.3496 6.40488 11.8343 5.84749C11.8825 5.79208 11.9308 5.73937 11.9789 5.68934C11.4696 5.35557 10.9236 5.29366 10.6393 5.27485Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("logo-chrome-filled","LogoChromeFilled"):T("logo-chrome-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0228 4.43168C14.0438 4.46717 14.0442 4.51119 14.0238 4.54704C14.0034 4.58294 13.9653 4.60507 13.9241 4.60507H8.30612C8.30286 4.60507 8.29955 4.60493 8.2963 4.60461C8.19614 4.59607 8.09649 4.59166 8 4.59166C6.44508 4.59166 5.08772 5.64321 4.69917 7.14885C4.68751 7.19397 4.64973 7.22758 4.60355 7.23387C4.59837 7.23456 4.59313 7.23492 4.58799 7.23492C4.54742 7.23492 4.50932 7.21335 4.48866 7.17754L2.5181 3.76427C2.49447 3.72337 2.49832 3.67218 2.52784 3.63527C3.86532 1.96052 5.85984 1 8 1C9.23664 1 10.4522 1.32694 11.515 1.94551C12.5462 2.54562 13.4134 3.40534 14.0228 4.43168Z" fill="black" fill-opacity="0.9"/>
<path d="M8 10.6167C6.55745 10.6167 5.38388 9.4431 5.38388 8.00048C5.38388 6.55787 6.55745 5.38421 8 5.38421C9.44246 5.38421 10.6159 6.55787 10.6159 8.00048C10.6159 9.44305 9.44246 10.6167 8 10.6167Z" fill="black" fill-opacity="0.9"/>
<path d="M9.03439 11.3252C9.00589 11.2883 8.95806 11.2725 8.91294 11.2849C8.61655 11.3675 8.30942 11.4093 8 11.4093C6.68533 11.4093 5.47367 10.6382 4.91307 9.44484C4.91169 9.4419 4.91018 9.43906 4.90857 9.43621L2.09755 4.56715C2.07708 4.53157 2.03917 4.50977 1.99818 4.50977C1.95696 4.51 1.9184 4.53226 1.8982 4.56816C1.31062 5.61089 1 6.79777 1 8.00048C1 9.68772 1.60866 11.3175 2.71383 12.5896C3.80803 13.849 5.31443 14.6778 6.95565 14.9234C6.96134 14.9243 6.96703 14.9246 6.97268 14.9246C7.01321 14.9246 7.05131 14.903 7.07201 14.8672L9.04307 11.4529C9.06639 11.4125 9.06294 11.362 9.03439 11.3252Z" fill="black" fill-opacity="0.9"/>
<path d="M10.465 5.37081H14.4113C14.4585 5.37081 14.5009 5.39968 14.5181 5.44366C14.8379 6.25811 15 7.11832 15 8.00048C15 9.85642 14.2811 11.605 12.9757 12.9241C11.6714 14.2421 9.93246 14.9793 8.07941 15H8.07812C8.03741 15 7.99968 14.9784 7.97907 14.9432C7.95828 14.9076 7.95814 14.8636 7.97875 14.8279L10.7946 9.95035C10.7962 9.94755 10.7979 9.94484 10.7998 9.94218C11.1981 9.36956 11.4086 8.69815 11.4086 8.00048C11.4086 7.07889 11.0449 6.21487 10.3846 5.56751C10.3514 5.53492 10.3411 5.48534 10.3587 5.44219C10.3763 5.39904 10.4183 5.37081 10.465 5.37081Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("logo-chrome","LogoChrome"):T("logo-chrome",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.50019 1.93783C7.84824 0.00483471 12.1294 1.15196 14.0624 4.50001C15.9954 7.84806 14.8482 12.1292 11.5002 14.0622C8.15214 15.9952 3.87101 14.8481 1.93801 11.5C0.00501782 8.15196 1.15214 3.87083 4.50019 1.93783ZM13.4542 5.49839L10.452 5.49837C11.5424 6.56769 11.8338 8.26397 11.078 9.66049L11.0792 9.66116L8.59007 13.9724C9.41475 13.8915 10.2358 13.6375 11.0002 13.1962C13.7062 11.6338 14.7349 8.28186 13.4542 5.49839ZM7.43459 13.9738L8.93933 11.3675C8.81644 11.4017 8.6917 11.4293 8.56571 11.4501C8.31959 11.4917 8.07155 11.5064 7.8258 11.4953C6.5146 11.4407 5.38974 10.6647 4.83771 9.55389L2.52418 5.54674C1.76575 7.24342 1.80376 9.26747 2.80404 11C3.81294 12.7475 5.56813 13.7954 7.43459 13.9738ZM5.00019 2.80386C4.22219 3.25304 3.58283 3.85015 3.09715 4.53915L4.58571 7.11742C4.94941 5.71465 6.16124 4.65352 7.64124 4.51397L7.68118 4.51033C7.83386 4.49628 7.98779 4.4922 8.14195 4.49837L12.873 4.49839C11.0969 2.0206 7.69573 1.24759 5.00019 2.80386ZM7.97256 5.49837C7.91118 5.4984 7.85031 5.50065 7.79004 5.50503L7.75173 5.50823C6.97838 5.58575 6.25223 6.02168 5.83395 6.74616C5.14359 7.94189 5.55328 9.47087 6.74901 10.1612C7.20527 10.4246 7.71005 10.5279 8.19824 10.4884C9.47385 10.375 10.4739 9.30347 10.4739 7.99837C10.4739 6.61811 9.35535 5.4991 7.97526 5.49837H7.97256Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("logo-codepen","LogoCodepen"):T("logo-codepen",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.53218 5.5873C1.36714 5.70019 1.29592 5.88732 1.31854 6.06428L1.31854 9.93573C1.29592 10.1127 1.36714 10.2998 1.53218 10.4127L7.71758 14.6433C7.88776 14.7597 8.11195 14.7597 8.28213 14.6433L14.4675 10.4127C14.6286 10.3026 14.7003 10.1217 14.6826 9.94852V6.05151C14.7003 5.87837 14.6286 5.69748 14.4675 5.58731L8.28212 1.35671C8.11194 1.24031 7.88776 1.24031 7.71757 1.35671L1.53218 5.5873ZM2.43442 6.00001L7.57485 2.48413V5.45433L4.60573 7.48511L2.43442 6.00001ZM8.42485 5.45433V2.48413L13.5653 6.00001L11.394 7.48511L8.42485 5.45433ZM3.85291 8.00001L2.16854 9.15206V6.84796L3.85291 8.00001ZM13.8326 6.84696V9.15307L12.1468 8.00001L13.8326 6.84696ZM11.394 8.51492L13.5653 10L8.42485 13.5159V10.5457L11.394 8.51492ZM7.57485 10.5457V13.5159L2.43442 10L4.60573 8.51491L7.57485 10.5457ZM10.6412 8.00001L7.99985 9.80657L5.35855 8.00001L7.99985 6.19345L10.6412 8.00001Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("logo-github-filled","LogoGithubFilled"):T("logo-github-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1C4.13483 1 1 4.21349 1 8.17696C1 11.348 3.0055 14.0381 5.78742 14.9873C6.13683 15.0537 6.25 14.8312 6.25 14.6422V13.3061C4.30283 13.7403 3.89742 12.4592 3.89742 12.4592C3.57892 11.6297 3.11983 11.409 3.11983 11.409C2.48458 10.9634 3.16825 10.973 3.16825 10.973C3.87117 11.0232 4.241 11.7128 4.241 11.7128C4.86517 12.8097 5.87842 12.4927 6.278 12.3091C6.34042 11.8456 6.52183 11.5286 6.7225 11.3498C5.16792 11.1674 3.53342 10.5519 3.53342 7.80256C3.53342 7.01848 3.807 6.37854 4.25442 5.87615C4.18208 5.69493 3.94233 4.96467 4.32267 3.97664C4.32267 3.97664 4.91067 3.78406 6.24825 4.71228C6.8065 4.55319 7.405 4.47365 8 4.47066C8.595 4.47365 9.19408 4.55319 9.7535 4.71228C11.0899 3.78406 11.6768 3.97664 11.6768 3.97664C12.0577 4.96527 11.8179 5.69553 11.7456 5.87615C12.1947 6.37854 12.466 7.01908 12.466 7.80256C12.466 10.5591 10.8286 11.1662 9.26992 11.3438C9.52075 11.5663 9.75 12.0029 9.75 12.6727V14.6422C9.75 14.833 9.862 15.0573 10.2172 14.9867C12.9968 14.0364 15 11.3468 15 8.17696C15 4.21349 11.8658 1 8 1Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("logo-github","LogoGithub"):T("logo-github",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.50039 14.5V12.6941H4.59414C3.87089 12.6941 3.28457 12.1078 3.28455 11.3846C3.28455 11.1308 3.07878 10.925 2.82496 10.925H2.09473V10.075H2.82496C2.88111 10.075 2.93644 10.0785 2.99073 10.0854C3.02585 10.0898 3.06053 10.0957 3.09473 10.1028C3.51724 10.1913 3.86489 10.4834 4.03033 10.8718C4.09742 11.0293 4.13455 11.2026 4.13455 11.3846C4.13456 11.6063 4.29153 11.7913 4.50039 11.8346C4.53066 11.8409 4.56201 11.8441 4.59414 11.8441H5.50039V11.4628C5.50039 11.3371 5.51221 11.2129 5.53515 11.0915C5.57033 10.9053 5.63168 10.7258 5.71663 10.5583C5.39228 10.4479 5.08476 10.3144 4.79775 10.1606L4.77682 10.1493C4.27921 9.88006 3.84399 9.54951 3.49058 9.17236C2.86084 8.5003 2.49093 7.68026 2.49093 6.79514C2.49093 5.95029 2.82795 5.16473 3.40626 4.51055L3.36157 4.29107C3.16545 3.32799 3.36011 2.32645 3.90269 1.50695C4.88369 1.44681 5.84838 1.779 6.58437 2.43038L6.93558 2.74123C7.27093 2.69292 7.61713 2.66764 7.97116 2.66764C8.36121 2.66764 8.74174 2.69833 9.10872 2.75668L9.47732 2.43045C10.2133 1.77907 11.178 1.44688 12.159 1.50701C12.7016 2.32652 12.8962 3.32806 12.7001 4.29114L12.6324 4.6235C13.1516 5.25433 13.4514 5.99837 13.4514 6.79514C13.4514 8.17549 12.5517 9.39757 11.17 10.1469C10.8833 10.3024 10.5759 10.4375 10.2515 10.5494C10.3621 10.7498 10.4379 10.9685 10.4747 11.1962C10.4917 11.3011 10.5004 11.4079 10.5004 11.5156V14.5H5.50039ZM7.07815 3.73101L6.61969 3.79705L5.92162 3.17922C5.51701 2.82113 5.01772 2.59517 4.48997 2.52415C4.2876 3.01671 4.23364 3.56208 4.34146 4.09153L4.48561 4.79943L4.15547 5.17288C3.71402 5.67224 3.49093 6.22919 3.49093 6.79514C3.49093 7.89333 4.38156 9.04753 6.03885 9.61164L7.12962 9.98291L6.60851 11.0106C6.53829 11.149 6.50039 11.3035 6.50039 11.4628V13.5H9.50039V11.5156C9.50039 11.3448 9.45674 11.179 9.37594 11.0325L8.80183 9.99188L9.9253 9.60416C11.5692 9.03682 12.4514 7.88849 12.4514 6.79514C12.4514 6.26048 12.2527 5.73566 11.8603 5.25899L11.5574 4.89099L11.7202 4.0916C11.828 3.56215 11.7741 3.01677 11.5717 2.52422C11.044 2.59524 10.5447 2.82119 10.1401 3.17929L9.41795 3.8184L8.9517 3.74427C8.63682 3.69421 8.3088 3.66764 7.97116 3.66764C7.6647 3.66764 7.36615 3.68953 7.07815 3.73101Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("logo-ie-filled","LogoIeFilled"):T("logo-ie-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5662 9.0391H14.9633C14.9895 8.81289 15 8.58172 15 8.34541C15 7.23681 14.69 6.19698 14.1491 5.30153C14.7086 3.8739 14.6887 2.66224 13.9396 1.93809C13.2273 1.25711 11.3162 1.36766 9.15576 2.28633C8.99595 2.27472 8.8346 2.26875 8.67172 2.26875C5.70638 2.26875 3.21841 4.22822 2.53076 6.86845C3.46096 5.72486 4.43959 4.89573 5.74691 4.29191C5.62804 4.39887 4.93446 5.06098 4.8178 5.17308C1.37033 8.48243 0.283168 12.8054 1.45294 13.9289C2.34213 14.7826 3.95356 14.6384 5.80456 13.7679C6.66526 14.1888 7.63947 14.4262 8.67162 14.4262C11.451 14.4262 13.8065 12.7082 14.6598 10.3157H11.2365C10.7654 11.1501 9.8442 11.718 8.78689 11.718C7.72958 11.718 6.80825 11.1501 6.33721 10.3157C6.12782 9.93872 6.00744 9.50652 6.00744 9.04905V9.0391H11.5662ZM6.01254 7.43574C6.09106 6.09377 7.25309 5.02314 8.67162 5.02314C10.0901 5.02314 11.2522 6.09374 11.3307 7.43574H6.01254ZM13.9086 2.61293C14.3911 3.08112 14.3791 3.9425 13.9664 5.01774C13.2593 3.98258 12.2319 3.16688 11.0191 2.70112C12.3159 2.16718 13.3708 2.09645 13.9086 2.61293ZM2.34533 13.7158C1.72963 13.1245 1.91523 11.8832 2.7084 10.3878C3.20214 11.7182 4.16419 12.835 5.40444 13.5545C4.03109 14.1531 2.907 14.2547 2.34533 13.7158Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("logo-ie","LogoIe"):T("logo-ie",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.34101 7.31389C5.61303 7.00343 5.90178 6.69471 6.20618 6.39031L6.21573 6.38077H9.82136C9.61419 5.57584 8.8835 4.98109 8.01391 4.98109C7.92741 4.98109 7.8423 4.98697 7.75893 4.99836C8.13148 4.70069 8.50405 4.42796 8.87221 4.182C9.99838 4.54437 10.8133 5.60067 10.8133 6.84733V7.31389H5.34101Z" fill="black" fill-opacity="0.9"/>
<path d="M3.74372 14.9996C3.02134 15.0093 2.28332 14.8198 1.73174 14.2683C1.18016 13.7167 0.990659 12.9787 1.00035 12.2563C1.00999 11.538 1.21364 10.757 1.53993 9.97391C1.58589 9.86359 1.63467 9.75234 1.68618 9.64027C1.55291 9.12028 1.48205 8.57528 1.48205 8.01373C1.48205 4.40629 4.40646 1.48188 8.01391 1.48188C8.5755 1.48188 9.12054 1.55276 9.64057 1.68605C9.75254 1.63458 9.86369 1.58585 9.97391 1.53993C10.757 1.21364 11.538 1.00999 12.2563 1.00035C12.9787 0.990659 13.7167 1.18016 14.2683 1.73174C14.8198 2.28332 15.0093 3.02134 14.9996 3.74372C14.99 4.46198 14.7864 5.243 14.4601 6.02609C14.418 6.12698 14.3736 6.22866 14.327 6.33102C14.4697 6.86789 14.5458 7.43193 14.5458 8.01373C14.5458 8.35498 14.5196 8.69041 14.469 9.01805L14.4079 9.41342H6.20646C6.41363 10.2184 7.14431 10.8131 8.01391 10.8131C8.62418 10.8131 9.16601 10.5207 9.50728 10.0663L9.64726 9.87998H14.3144L14.045 10.5261C13.061 12.8857 10.7318 14.5456 8.01391 14.5456C7.43215 14.5456 6.86815 14.4695 6.33132 14.3268C6.22886 14.3736 6.12708 14.418 6.02609 14.4601C5.243 14.7864 4.46198 14.99 3.74372 14.9996ZM5.03857 13.8301C4.08492 13.3413 3.26722 12.6249 2.6572 11.7525C2.76124 11.4064 2.90313 11.0414 3.08047 10.6631C4.02537 12.4189 5.88026 13.6125 8.01391 13.6125C10.0856 13.6125 11.8954 12.4871 12.8637 10.8131H10.1004C9.58841 11.3852 8.84327 11.7462 8.01391 11.7462C6.46787 11.7462 5.21454 10.4929 5.21454 8.94686V8.4803H13.5935C13.6062 8.32653 13.6126 8.17093 13.6126 8.01373C13.6126 5.92145 12.4649 4.09723 10.7648 3.13627C11.1581 2.9676 11.535 2.83943 11.8885 2.75462C12.6994 3.35308 13.367 4.13463 13.8302 5.03826C14.1954 3.88522 14.1504 2.9335 13.6084 2.39156C12.333 1.11613 8.7881 2.59318 5.69064 5.69064C2.59318 8.7881 1.11613 12.333 2.39156 13.6084C2.93355 14.1504 3.88539 14.1954 5.03857 13.8301ZM8.28136 2.42128C8.19273 2.41711 8.10357 2.415 8.01391 2.415C4.92181 2.415 2.41517 4.92164 2.41517 8.01373C2.41517 8.10336 2.41728 8.1925 2.42145 8.28109C3.09224 7.19746 3.97858 6.08307 5.03082 5.03082C6.08316 3.97849 7.19765 3.09209 8.28136 2.42128Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("logo-qq","LogoQq"):T("logo-qq",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.4763 9.77042C13.3516 9.3686 13.1814 8.89989 13.0085 8.45074L12.3787 6.87895C12.3787 6.8603 12.3873 6.55085 12.3873 6.39113C12.3873 3.70171 11.1177 1 7.99644 1C4.87517 1 3.606 3.70171 3.606 6.39022C3.606 6.54994 3.61419 6.85939 3.61464 6.87804L2.98438 8.44983C2.81191 8.89989 2.64172 9.3686 2.51658 9.76951C1.92136 11.6849 2.1143 12.4776 2.26129 12.4953C2.57619 12.5336 3.48996 11.0532 3.48996 11.0532C3.48996 11.9106 3.93137 13.0291 4.88609 13.8369C4.52887 13.947 4.09155 14.1163 3.80987 14.3238C3.55731 14.5108 3.58871 14.701 3.63421 14.7788C3.83444 15.116 7.06629 14.9941 7.99917 14.889C8.93251 14.9941 12.1644 15.1165 12.3641 14.7788C12.4096 14.7019 12.4415 14.5117 12.1885 14.3238C11.9072 14.1163 11.469 13.947 11.1118 13.8369C12.0674 13.0291 12.5079 11.9106 12.5079 11.0532C12.5079 11.0532 13.4181 12.5336 13.7343 12.4953C13.879 12.4785 14.072 11.6858 13.4763 9.77042Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("logo-wechat","LogoWechat"):T("logo-wechat",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M1 6.55014C1 4.20298 3.26552 2.30005 6.06021 2.30005C8.58473 2.30005 10.6089 3.85282 10.99 5.88329C10.9678 5.88221 10.9496 5.88122 10.9334 5.88034C10.8834 5.87761 10.8529 5.87594 10.7832 5.87594C8.23432 5.87594 6.16822 7.61153 6.16822 9.75217C6.16822 10.1132 6.22806 10.4623 6.3381 10.7939C6.24606 10.798 6.15351 10.8005 6.06021 10.8005C5.48273 10.8005 4.92529 10.7173 4.40842 10.5675C4.36138 10.553 4.31156 10.5453 4.25971 10.5453C4.16247 10.5453 4.07436 10.5751 3.99119 10.6234L2.88316 11.268C2.85235 11.2861 2.82256 11.2996 2.78579 11.2996C2.69261 11.2996 2.61718 11.2237 2.61718 11.1297C2.61718 11.098 2.62656 11.0663 2.63575 11.0354C2.63873 11.0254 2.64169 11.0154 2.64431 11.0055C2.64974 10.985 2.75058 10.6058 2.83294 10.2961L2.87225 10.1482C2.88214 10.112 2.89013 10.0776 2.89013 10.04C2.89013 9.92547 2.83409 9.82443 2.74839 9.76282C1.68168 8.98377 1 7.83098 1 6.55014ZM3.77516 5.1902C3.77516 5.52312 4.04305 5.79315 4.37368 5.79315C4.70381 5.79315 4.97169 5.52312 4.97169 5.1902C4.97169 4.85715 4.70381 4.58725 4.37368 4.58725C4.04305 4.58725 3.77516 4.85715 3.77516 5.1902ZM7.14872 5.1902C7.14872 5.52312 7.4166 5.79303 7.74698 5.79303C8.07736 5.79303 8.34525 5.52312 8.34525 5.1902C8.34525 4.85715 8.07736 4.58725 7.74698 4.58725C7.4166 4.58725 7.14872 4.85715 7.14872 5.1902Z" fill="black" fill-opacity="0.9"/>
<path fill-rule="evenodd" clip-rule="evenodd" d="M15 9.7521C15 10.8193 14.432 11.7799 13.5431 12.4293C13.4716 12.4806 13.4249 12.565 13.4249 12.6601C13.4249 12.6914 13.4316 12.7203 13.4397 12.7504C13.5109 13.0173 13.6245 13.4448 13.6298 13.4648C13.632 13.4734 13.6346 13.482 13.6372 13.4908C13.6447 13.5162 13.6525 13.5422 13.6525 13.5685C13.6525 13.6466 13.5896 13.7101 13.5119 13.7101C13.4813 13.7101 13.4564 13.6984 13.4305 13.6837L12.5075 13.1464C12.4381 13.106 12.3645 13.0812 12.2837 13.0812C12.2404 13.0812 12.1988 13.0879 12.1597 13.0999C11.7289 13.2247 11.2642 13.294 10.7831 13.294C8.45434 13.294 6.56624 11.7083 6.56624 9.7521C6.56624 7.79592 8.45434 6.21044 10.7831 6.21044C13.1122 6.21044 15 7.79592 15 9.7521ZM8.85103 8.61884C8.85103 8.91182 9.08683 9.14927 9.37754 9.14927C9.66836 9.14927 9.90404 8.91182 9.90404 8.61884C9.90404 8.32573 9.66836 8.08815 9.37754 8.08815C9.08683 8.08815 8.85103 8.32573 8.85103 8.61884ZM11.6626 8.61884C11.6626 8.91182 11.898 9.14927 12.1888 9.14927C12.4797 9.14927 12.7153 8.91182 12.7153 8.61884C12.7153 8.32573 12.4797 8.08815 12.1888 8.08815C11.898 8.08815 11.6626 8.32573 11.6626 8.61884Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("logo-wecom","LogoWecom"):T("logo-wecom",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.2529 3.95905C11.623 4.34224 11.9247 4.77013 12.149 5.23125C12.4506 5.85106 12.6036 6.50835 12.6036 7.18432C12.6036 7.29806 12.5985 7.41153 12.5897 7.52475C12.5862 7.5206 12.5827 7.51641 12.5792 7.51223C12.5706 7.50189 12.562 7.49158 12.5524 7.48186C12.2833 7.21292 11.8727 7.17569 11.5621 7.36581C11.5626 7.35453 11.5632 7.34324 11.5638 7.33195C11.566 7.2882 11.5682 7.2444 11.5682 7.20068C11.5682 6.66962 11.4476 6.15259 11.2098 5.66365C11.0305 5.2954 10.7886 4.95239 10.4908 4.64429C9.72201 3.84918 8.63902 3.33615 7.44127 3.2C7.22372 3.17527 7.00861 3.16278 6.80201 3.16278C6.6052 3.16278 6.39924 3.17437 6.18993 3.19717C4.98651 3.32791 3.89721 3.83823 3.12244 4.63412C2.82336 4.94144 2.58018 5.28381 2.39959 5.65116C2.15783 6.14332 2.0352 6.66459 2.0352 7.20068C2.0352 7.89133 2.24709 8.57464 2.64767 9.1768C2.81782 9.43274 3.0203 9.67141 3.25099 9.89025C3.33317 9.96818 3.41844 10.0438 3.5077 10.1164C3.56579 10.1638 3.62118 10.2067 3.67669 10.2479C3.78579 10.3273 3.85122 10.4565 3.85122 10.5933C3.85122 10.6427 3.84079 10.6869 3.83036 10.7236C3.80575 10.8179 3.77664 10.9291 3.74766 11.0392C3.7385 11.0741 3.72936 11.1089 3.7204 11.1431C3.70378 11.2064 3.68778 11.2673 3.67347 11.322C3.66198 11.3661 3.65166 11.4053 3.64287 11.4387C3.63737 11.4596 3.63247 11.4783 3.62826 11.4944L3.58885 11.6532C3.58885 11.692 3.61924 11.7235 3.6566 11.7235C3.66793 11.7235 3.68043 11.7188 3.70245 11.7059L3.70361 11.7052L4.76612 11.079C4.77326 11.0748 4.7804 11.0713 4.78753 11.0679C4.79212 11.0656 4.7967 11.0634 4.80129 11.061C4.89145 11.0143 4.98058 10.9899 5.07242 10.9899C5.13115 10.9899 5.18873 10.9987 5.24283 11.0161C5.50907 11.0939 5.78458 11.1509 6.06319 11.188C6.07587 11.1897 6.08855 11.1914 6.10123 11.1932C6.13079 11.1973 6.16036 11.2015 6.18993 11.2047C6.39293 11.2271 6.59876 11.2385 6.80201 11.2385C7.00887 11.2385 7.22385 11.2258 7.44127 11.2011C7.79947 11.1604 8.14609 11.0848 8.47789 10.9794C8.44865 11.2853 8.59574 11.5945 8.87989 11.757C8.92755 11.7842 8.97688 11.806 9.02711 11.8226C8.56277 11.9893 8.07357 12.1065 7.56492 12.1644C7.30641 12.1937 7.04957 12.2086 6.80201 12.2086C6.55908 12.2086 6.31307 12.1952 6.07066 12.1685C5.6979 12.1275 5.34407 12.0622 4.98767 11.9599L3.33162 12.7911C3.32536 12.7955 3.31886 12.7992 3.31232 12.8029C3.30931 12.8046 3.30629 12.8063 3.30329 12.8081C3.30166 12.809 3.29994 12.8097 3.29828 12.8106C3.29784 12.8108 3.2974 12.811 3.29698 12.8113C3.23167 12.8488 3.15709 12.8718 3.07646 12.8718C2.84526 12.8718 2.65733 12.6952 2.6344 12.4702C2.6339 12.4648 2.63318 12.4595 2.63247 12.4541C2.63118 12.4445 2.6299 12.435 2.6299 12.4253C2.6299 12.4164 2.63107 12.4078 2.63225 12.3993C2.63298 12.394 2.6337 12.3887 2.63415 12.3834C2.63443 12.3804 2.63471 12.3775 2.63499 12.3745C2.63643 12.359 2.63786 12.3436 2.6411 12.3287C2.64507 12.3108 2.65148 12.294 2.65792 12.2771C2.65858 12.2753 2.65925 12.2736 2.65991 12.2719L2.83392 10.9028V10.902C2.44841 10.5602 2.02954 10.075 1.77334 9.6897C1.2674 8.92911 1 8.0629 1 7.18432C1 6.50204 1.1556 5.8396 1.46215 5.21554C1.68795 4.75571 1.99102 4.32872 2.36301 3.94643C3.30535 2.97833 4.62238 2.35826 6.07156 2.20087C6.32054 2.17369 6.56617 2.16003 6.80201 2.16003C7.04931 2.16003 7.30589 2.17498 7.56492 2.20434C9.00753 2.36831 10.3172 2.9916 11.2529 3.95905Z" fill="black" fill-opacity="0.9"/>
<path d="M11.3472 9.0505C11.0323 8.73544 11.0323 8.2246 11.3472 7.90955C11.6622 7.59449 12.1731 7.59449 12.4881 7.90955C12.5909 8.01246 12.66 8.13611 12.6958 8.26698C12.7034 8.29519 12.7095 8.32365 12.7141 8.35225C12.7183 8.37814 12.7211 8.40428 12.7227 8.43056C12.8158 8.89632 13.0426 9.34057 13.4038 9.70161C13.4222 9.72002 13.4408 9.73793 13.4596 9.75557C13.4691 9.76214 13.4781 9.76936 13.4866 9.77786C13.4914 9.78275 13.4959 9.78778 13.5 9.79306C13.5615 9.86879 13.557 9.98021 13.4866 10.0507C13.4111 10.126 13.2892 10.126 13.2137 10.0507C13.1884 10.0232 13.1627 9.99592 13.136 9.96939C12.7667 9.60011 12.3105 9.37122 11.833 9.28222C11.8168 9.28054 11.8006 9.27822 11.7843 9.27552C11.7682 9.27281 11.7521 9.26972 11.7362 9.26599C11.5937 9.23314 11.4582 9.16153 11.3472 9.0505Z" fill="black" fill-opacity="0.9"/>
<path d="M14.7637 10.1909C14.4488 9.87587 13.9378 9.87587 13.6228 10.1909C13.5117 10.302 13.4401 10.4373 13.4073 10.5799C13.4037 10.5959 13.4004 10.612 13.3977 10.6281C13.3952 10.6443 13.3927 10.6605 13.391 10.6766C13.302 11.1541 13.0731 11.6105 12.7037 11.9798C12.6772 12.0064 12.65 12.0322 12.6226 12.0572L12.6227 12.0574C12.5472 12.1327 12.5472 12.2548 12.6227 12.3301C12.693 12.4006 12.8045 12.4051 12.8803 12.3438C12.8853 12.3396 12.8905 12.335 12.8955 12.3301C12.9039 12.3217 12.9111 12.3127 12.9178 12.3032C12.9353 12.2845 12.9532 12.2658 12.9716 12.2474C13.3327 11.8864 13.7769 11.6594 14.2428 11.5666C14.269 11.5649 14.2951 11.5621 14.321 11.5577C14.3497 11.5533 14.3781 11.547 14.4063 11.5394C14.5373 11.5036 14.6611 11.4345 14.7637 11.3319C15.0788 11.0168 15.0788 10.506 14.7637 10.1909Z" fill="black" fill-opacity="0.9"/>
<path d="M10.3432 11.4664C10.2726 11.5367 10.2682 11.6481 10.3295 11.7239C10.3336 11.7291 10.3381 11.7342 10.3432 11.7392C10.3515 11.7476 10.3607 11.7548 10.3701 11.7615C10.3889 11.7789 10.4076 11.7971 10.4259 11.8153C10.7869 12.1765 11.0139 12.6207 11.107 13.0865C11.1085 13.1126 11.1114 13.1388 11.1157 13.1648C11.1202 13.1933 11.1263 13.2217 11.1339 13.2499C11.1696 13.3809 11.2387 13.5044 11.3415 13.6074C11.6566 13.9224 12.1674 13.9224 12.4824 13.6074C12.7974 13.2923 12.7974 12.7815 12.4824 12.4664C12.3713 12.3554 12.2358 12.2838 12.0934 12.2509C12.0775 12.2473 12.0614 12.2441 12.0453 12.2414C12.0292 12.2387 12.013 12.2365 11.9965 12.2347C11.5192 12.1458 11.0628 11.9168 10.6936 11.5475C10.667 11.521 10.6411 11.4938 10.6161 11.4662L10.616 11.4664C10.5782 11.4286 10.5289 11.4098 10.4796 11.4098C10.4301 11.4098 10.3808 11.4286 10.3432 11.4664Z" fill="black" fill-opacity="0.9"/>
<path d="M10.4318 10.889C10.4345 10.8727 10.4367 10.8565 10.4385 10.8402C10.5277 10.363 10.7566 9.90652 11.1257 9.53723C11.1524 9.5107 11.1796 9.48481 11.2071 9.45969L11.207 9.45956C11.2823 9.38421 11.2823 9.26211 11.207 9.18676C11.1365 9.1163 11.025 9.11179 10.9494 9.17323C10.9441 9.17748 10.9391 9.18186 10.9342 9.18676C10.9258 9.19526 10.9185 9.20427 10.9119 9.21368C10.8943 9.23261 10.8763 9.25103 10.8579 9.26958C10.497 9.63049 10.0526 9.85744 9.58675 9.95057C9.56074 9.95211 9.53459 9.95495 9.50844 9.9592C9.47985 9.96371 9.45138 9.96989 9.42343 9.97762C9.29244 10.0133 9.16865 10.0823 9.06587 10.1851C8.75068 10.5002 8.75068 11.011 9.06587 11.3262C9.38092 11.6413 9.89176 11.6413 10.2068 11.3262C10.3178 11.215 10.3896 11.0795 10.4224 10.9372C10.426 10.9212 10.4293 10.9051 10.4318 10.889Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("logo-windows-filled","LogoWindowsFilled"):T("logo-windows-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 2.50403H2.5V7.50403H7.5V2.50403Z" fill="black" fill-opacity="0.9"/>
<path d="M13.5 2.50403H8.5V7.50403H13.5V2.50403Z" fill="black" fill-opacity="0.9"/>
<path d="M8.5 8.50403H13.5V13.504H8.5V8.50403Z" fill="black" fill-opacity="0.9"/>
<path d="M7.5 8.50403H2.5V13.504H7.5V8.50403Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("logo-windows","LogoWindows"):T("logo-windows",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13 2C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V3C2 2.44772 2.44772 2 3 2H13ZM7.5 3H3L3 7.5H7.5V3ZM8.5 13H13V8.5H8.5V13ZM7.5 8.5H3L3 13H7.5V8.5ZM8.5 7.5H13V3H8.5V7.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("logout","Logout"):T("logout",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 3V5H10V2.5C10 2.22386 9.77614 2 9.5 2H1.5C1.22386 2 1 2.22386 1 2.5V13.5C1 13.7761 1.22386 14 1.5 14H9.5C9.77614 14 10 13.7761 10 13.5V11H9V13H2V3H9Z" fill="black" fill-opacity="0.9"/>
<path d="M11.2316 5.25423L13.4774 7.50001L5.99994 7.49999L5.99994 8.49999L13.4774 8.50001L11.2316 10.7458L11.9387 11.4529L15.038 8.35356C15.2333 8.1583 15.2333 7.84172 15.038 7.64646L11.9387 4.54712L11.2316 5.25423Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("mail","Mail"):T("mail",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.49902 3.9989C1.49902 3.44662 1.94674 2.9989 2.49902 2.9989H13.499C14.0513 2.9989 14.499 3.44662 14.499 3.9989V11.9989C14.499 12.5512 14.0513 12.9989 13.499 12.9989H2.49902C1.94674 12.9989 1.49902 12.5512 1.49902 11.9989V3.9989ZM13.0976 3.9989H2.90041L7.99902 7.39798L13.0976 3.9989ZM2.49902 4.93316L2.49902 11.9989H13.499V4.93316L7.99902 8.59983L2.49902 4.93316Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("menu-fold","MenuFold"):T("menu-fold",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.99951 3.98621L13.9989 4.00001L14.0001 3.00001L2.00066 2.98621L1.99951 3.98621Z" fill="black" fill-opacity="0.9"/>
<path d="M7.50009 8.50001H13.9995V7.50001H7.50009V8.50001Z" fill="black" fill-opacity="0.9"/>
<path d="M1.99951 12.9862L13.9989 13L14.0001 12L2.00066 11.9862L1.99951 12.9862Z" fill="black" fill-opacity="0.9"/>
<path d="M5.96675 7.59308C6.23342 7.79308 6.23342 8.19308 5.96675 8.39308L2.80009 10.7681C2.47047 11.0153 2.00009 10.7801 2.00009 10.3681L2.00009 5.61808C2.00009 5.20605 2.47047 4.97086 2.80009 5.21808L5.96675 7.59308ZM3.00009 6.61808L3.00009 9.36808L4.83342 7.99308L3.00009 6.61808Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("menu-unfold","MenuUnfold"):T("menu-unfold",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.0005 12.0138L2.00115 12L2 13L13.9994 13.0138L14.0005 12.0138Z" fill="black" fill-opacity="0.9"/>
<path d="M8.49997 7.5L2.00058 7.5L2.00058 8.5L8.49997 8.5V7.5Z" fill="black" fill-opacity="0.9"/>
<path d="M14.0005 3.0138L2.00115 3L2 4L13.9994 4.0138L14.0005 3.0138Z" fill="black" fill-opacity="0.9"/>
<path d="M10.0333 8.40693C9.76663 8.20693 9.76663 7.80693 10.0333 7.60693L13.2 5.23193C13.5296 4.98472 14 5.21991 14 5.63193L14 10.3819C14 10.794 13.5296 11.0291 13.2 10.7819L10.0333 8.40693ZM13 9.38193L13 6.63193L11.1666 8.00693L13 9.38193Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("minus-circle-filled","MinusCircleFilled"):T("minus-circle-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM11.5 8.5H4.5V7.5H11.5V8.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("minus-circle","MinusCircle"):T("minus-circle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.5 8.5H11.5V7.5H4.5V8.5Z" fill="black" fill-opacity="0.9"/>
<path d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("minus-rectangle-filled","MinusRectangleFilled"):T("minus-rectangle-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 13C2 13.5523 2.44772 14 3 14L13 14C13.5523 14 14 13.5523 14 13L14 3C14 2.44772 13.5523 2 13 2H3C2.44772 2 2 2.44771 2 3V13ZM11 8.5H5V7.5H11V8.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("minus-rectangle","MinusRectangle"):T("minus-rectangle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 8.5H11V7.5H5V8.5Z" fill="black" fill-opacity="0.9"/>
<path d="M3 14C2.44772 14 2 13.5523 2 13V3C2 2.44771 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3L14 13C14 13.5523 13.5523 14 13 14L3 14ZM3 13L13 13L13 3L3 3L3 13Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("mirror","Mirror"):T("mirror",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.50024 1H8.50024V15H7.50024V1Z" fill="black" fill-opacity="0.9"/>
<path d="M14.7196 12.4367C14.7504 12.6777 14.6034 12.906 14.3712 12.9777C14.2991 13 14.1963 13 13.9907 13H10.6501C10.5106 13 10.4409 13 10.3834 12.9862C10.2006 12.9423 10.0578 12.7995 10.0139 12.6167C10.0001 12.5592 10.0001 12.4895 10.0001 12.35V5.0008C10.0001 4.47031 10.0001 4.20506 10.041 4.11027C10.1768 3.79537 10.5821 3.70757 10.8361 3.93804C10.9126 4.00742 11.0223 4.24889 11.2418 4.73183L14.5824 12.081C14.6675 12.2682 14.71 12.3618 14.7196 12.4367ZM11.0001 12H13.4471L11.0001 6.61661V12Z" fill="black" fill-opacity="0.9"/>
<path d="M1.62907 12.9777C1.70117 13 1.80398 13 2.00959 13H5.35014C5.48959 13 5.55932 13 5.61686 12.9862C5.79969 12.9423 5.94243 12.7995 5.98633 12.6167C6.00014 12.5592 6.00014 12.4895 6.00014 12.35V5.0008C6.00014 4.47031 6.00014 4.20506 5.95925 4.11027C5.82341 3.79537 5.4181 3.70757 5.16413 3.93804C5.08768 4.00742 4.97792 4.24889 4.7584 4.73183L1.41786 12.081C1.33277 12.2682 1.29023 12.3618 1.28067 12.4367C1.24989 12.6777 1.39688 12.906 1.62907 12.9777ZM5.00014 6.61661V12H2.55315L5.00014 6.61661Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("mobile-vibrate","MobileVibrate"):T("mobile-vibrate",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 13H9.5V12H6.5V13Z" fill="black" fill-opacity="0.9"/>
<path d="M5 1.5C4.44772 1.5 4 1.94772 4 2.5V14C4 14.5523 4.44772 15 5 15H11C11.5523 15 12 14.5523 12 14V2.5C12 1.94772 11.5523 1.5 11 1.5H5ZM11 2.5V14H5V2.5H11Z" fill="black" fill-opacity="0.9"/>
<path d="M2 4V13H3V4H2Z" fill="black" fill-opacity="0.9"/>
<path d="M13 4V13H14V4H13Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("mobile","Mobile"):T("mobile",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.5 13H9.5V12H6.5V13Z" fill="black" fill-opacity="0.9"/>
<path d="M3.5 2.5C3.5 1.94772 3.94772 1.5 4.5 1.5H11.5C12.0523 1.5 12.5 1.94772 12.5 2.5V14C12.5 14.5523 12.0523 15 11.5 15H4.5C3.94772 15 3.5 14.5523 3.5 14V2.5ZM4.5 2.5L4.5 14H11.5V2.5H4.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("money-circle","MoneyCircle"):T("money-circle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.5 7.5H8.5V8.5H10.5V9.5H8.5V12H7.5V9.5H5.5V8.5H7.5V7.5H5.5V6.5H6.95969L5.60956 4.81235L6.39043 4.18765L8 6.19961L9.60956 4.18765L10.3904 4.81235L9.04031 6.5H10.5V7.5Z" fill="black" fill-opacity="0.9"/>
<path d="M15 8C15 4.13401 11.866 1 8 1C4.13401 0.999998 1 4.134 1 8C0.999998 11.866 4.134 15 8 15C11.866 15 15 11.866 15 8ZM14 8C14 11.3137 11.3137 14 8 14C4.68629 14 2 11.3137 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("more","More"):T("more",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 4C8.55225 4 9 3.55228 9 3C9 2.44772 8.55225 2 8 2C7.44775 2 7 2.44772 7 3C7 3.55228 7.44775 4 8 4Z" fill="black" fill-opacity="0.9"/>
<path d="M8 9C8.55225 9 9 8.55228 9 8C9 7.44772 8.55225 7 8 7C7.44775 7 7 7.44772 7 8C7 8.55228 7.44775 9 8 9Z" fill="black" fill-opacity="0.9"/>
<path d="M9 13C9 13.5523 8.55225 14 8 14C7.44775 14 7 13.5523 7 13C7 12.4477 7.44775 12 8 12C8.55225 12 9 12.4477 9 13Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("move","Move"):T("move",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5 1C4.44772 1 4 1.44772 4 2C4 2.55228 4.44772 3 5 3C5.55228 3 6 2.55228 6 2C6 1.44772 5.55228 1 5 1Z" fill="black" fill-opacity="0.9"/>
<path d="M11 1C10.4477 1 10 1.44772 10 2C10 2.55228 10.4477 3 11 3C11.5523 3 12 2.55228 12 2C12 1.44772 11.5523 1 11 1Z" fill="black" fill-opacity="0.9"/>
<path d="M4 6C4 5.44772 4.44772 5 5 5C5.55228 5 6 5.44772 6 6C6 6.55228 5.55228 7 5 7C4.44772 7 4 6.55228 4 6Z" fill="black" fill-opacity="0.9"/>
<path d="M11 5C10.4477 5 10 5.44772 10 6C10 6.55228 10.4477 7 11 7C11.5523 7 12 6.55228 12 6C12 5.44772 11.5523 5 11 5Z" fill="black" fill-opacity="0.9"/>
<path d="M4 10C4 9.44771 4.44772 9 5 9C5.55228 9 6 9.44771 6 10C6 10.5523 5.55228 11 5 11C4.44772 11 4 10.5523 4 10Z" fill="black" fill-opacity="0.9"/>
<path d="M5 13C4.44772 13 4 13.4477 4 14C4 14.5523 4.44772 15 5 15C5.55228 15 6 14.5523 6 14C6 13.4477 5.55228 13 5 13Z" fill="black" fill-opacity="0.9"/>
<path d="M10 10C10 9.44771 10.4477 9 11 9C11.5523 9 12 9.44771 12 10C12 10.5523 11.5523 11 11 11C10.4477 11 10 10.5523 10 10Z" fill="black" fill-opacity="0.9"/>
<path d="M11 13C10.4477 13 10 13.4477 10 14C10 14.5523 10.4477 15 11 15C11.5523 15 12 14.5523 12 14C12 13.4477 11.5523 13 11 13Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("next","Next"):T("next",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2H13L13 14H12L12 2Z" fill="black" fill-opacity="0.9"/>
<path d="M10.8512 7.58022C11.1557 7.77724 11.1557 8.22276 10.8512 8.41979L3.77162 13.0007C3.43894 13.216 3 12.9772 3 12.5809V3.41907C3 3.02282 3.43895 2.78402 3.77163 2.99929L10.8512 7.58022ZM4 4.33814L4 11.6619L9.65923 8L4 4.33814Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("notification-filled","NotificationFilled"):T("notification-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.49993 2.02746V1H7.49993V2.02746C5.24996 2.27619 3.49993 4.18372 3.49993 6.5V11L2.59993 12.2C2.35272 12.5296 2.58791 13 2.99993 13H5.54994C5.78158 14.1411 6.79045 15 7.99993 15C9.20941 15 10.2183 14.1411 10.4499 13H12.9999C13.412 13 13.6471 12.5296 13.3999 12.2L12.4999 11V6.5C12.4999 4.18372 10.7499 2.27619 8.49993 2.02746Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("notification","Notification"):T("notification",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.49993 2.02746V1H7.49993V2.02746C5.24996 2.27619 3.49993 4.18372 3.49993 6.5V11L2.59993 12.2C2.35272 12.5296 2.58791 13 2.99993 13H5.54994C5.78158 14.1411 6.79045 15 7.99993 15C9.20941 15 10.2183 14.1411 10.4499 13H12.9999C13.412 13 13.6471 12.5296 13.3999 12.2L12.4999 11V6.5C12.4999 4.18372 10.7499 2.27619 8.49993 2.02746ZM4.49993 11.3333V6.5C4.49993 4.567 6.06693 3 7.99993 3C9.93293 3 11.4999 4.567 11.4999 6.5V11.3333L11.9999 12H3.99993L4.49993 11.3333ZM7.99993 14C7.34682 14 6.7912 13.5826 6.58528 13H9.41458C9.20866 13.5826 8.65304 14 7.99993 14Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("order-adjustment-column","OrderAdjustmentColumn"):T("order-adjustment-column",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 8.49999V15H8.5V8.5L13.1566 8.5L11.4651 10.1915L12.1722 10.8986L14.7172 8.35356C14.9125 8.15829 14.9125 7.84171 14.7172 7.64645L12.1722 5.10141L11.4651 5.80852L13.1566 7.5L8.5 7.5V1H7.5V7.49999L2.84586 7.5L4.53734 5.80852L3.83023 5.10141L1.28519 7.64645C1.08993 7.84171 1.08993 8.15829 1.28519 8.35355L3.83023 10.8986L4.53734 10.1915L2.84585 8.5L7.5 8.49999Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("order-ascending","OrderAscending"):T("order-ascending",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 13.5L12 3.70712L14.1464 5.85357L14.8535 5.14646L11.9048 2.19768C11.5709 1.8638 11 2.10026 11 2.57244L11 13.5H12Z" fill="black" fill-opacity="0.9"/>
<path d="M9.5 13.5L2 13.5V12.5L9.5 12.5V13.5Z" fill="black" fill-opacity="0.9"/>
<path d="M2 8.50002L9.5 8.50002V7.50002L2 7.50002V8.50002Z" fill="black" fill-opacity="0.9"/>
<path d="M9.5 3.50002L2 3.50002V2.50002L9.5 2.50002V3.50002Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("order-descending","OrderDescending"):T("order-descending",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.5 2.5H2V3.5L9.5 3.5V2.5Z" fill="black" fill-opacity="0.9"/>
<path d="M12 2.5L12 12.2929L14.1464 10.1464L14.8535 10.8536L11.9048 13.8023C11.5709 14.1362 11 13.8998 11 13.4276L11 2.5H12Z" fill="black" fill-opacity="0.9"/>
<path d="M2 7.5H9.5V8.5H2V7.5Z" fill="black" fill-opacity="0.9"/>
<path d="M9.5 12.5H2V13.5H9.5V12.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("page-first","PageFirst"):T("page-first",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.4053 4.45952L11.486 3.54028L7.02642 7.9999L11.486 12.4595L12.4053 11.5403L8.86489 7.9999L12.4053 4.45952ZM4.79568 4L4.79568 12L6.09568 12L6.09568 4L4.79568 4Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("page-last","PageLast"):T("page-last",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.59473 11.5405L4.51397 12.4597L8.97358 8.00009L4.51397 3.54047L3.59473 4.45971L7.13511 8.00009L3.59473 11.5405ZM11.2046 12L11.2046 3.99999L9.90459 3.99999L9.90459 12H11.2046Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("pause-circle-filled","PauseCircleFilled"):T("pause-circle-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM6 5V11H7V5H6ZM10 5.00001H9V11H10V5.00001Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("photo","Photo"):T("photo",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 8C11 9.65685 9.65685 11 8 11C6.34315 11 5 9.65685 5 8C5 6.34315 6.34315 5 8 5C9.65685 5 11 6.34315 11 8ZM10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10C9.10457 10 10 9.10457 10 8Z" fill="black" fill-opacity="0.9"/>
<path d="M6.05352 2C5.85291 2 5.66557 2.10026 5.55429 2.26718L4.73241 3.5H2.01C1.72834 3.5 1.5 3.72833 1.5 4.01V12.49C1.5 12.7717 1.72833 13 2.01 13H13.99C14.2716 13 14.5 12.7717 14.5 12.49V4.01C14.5 3.72834 14.2717 3.5 13.99 3.5H11.2676L10.4457 2.26718C10.3344 2.10026 10.1471 2 9.94648 2H6.05352ZM6.26759 3H9.73241L10.7324 4.5H13.5V12H2.5V4.5H5.26759L6.26759 3Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("pin-filled","PinFilled"):T("pin-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5179 1.33919C12.2975 1.11875 11.9449 1.10385 11.7067 1.30492L7.66167 4.71867L6.89055 3.94755C6.65623 3.71324 6.27633 3.71324 6.04202 3.94755L3.93734 6.05223C3.70302 6.28655 3.70302 6.66645 3.93734 6.90076L6.16478 9.12821L2.05713 13.2359L2.76424 13.943L6.87189 9.83532L9.09922 12.0626C9.33353 12.297 9.71343 12.297 9.94774 12.0626L12.0524 9.95796C12.2867 9.72364 12.2867 9.34375 12.0524 9.10943L11.2813 8.33831L14.6951 4.29331C14.8961 4.05506 14.8812 3.70252 14.6608 3.48208L12.5179 1.33919Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("pin","Pin"):T("pin",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5179 1.33919C12.2975 1.11875 11.9449 1.10385 11.7067 1.30492L7.66167 4.71867L6.89055 3.94755C6.65623 3.71324 6.27633 3.71324 6.04202 3.94755L3.93734 6.05223C3.70302 6.28655 3.70302 6.66645 3.93734 6.90076L6.16478 9.12821L2.05713 13.2359L2.76424 13.943L6.87189 9.83532L9.09922 12.0626C9.33353 12.297 9.71343 12.297 9.94774 12.0626L12.0524 9.95796C12.2867 9.72364 12.2867 9.34375 12.0524 9.10943L11.2813 8.33831L14.6951 4.29331C14.8961 4.05506 14.8812 3.70252 14.6608 3.48208L12.5179 1.33919ZM12.0707 2.30621L13.6938 3.92927L9.92441 8.39563L11.0625 9.53369L9.52348 11.0727L4.92729 6.4765L6.46628 4.9375L7.60435 6.07557L12.0707 2.30621Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("play-circle-filled","PlayCircleFilled"):T("play-circle-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M15 8C15 4.13401 11.866 1 8 1C4.13401 0.999998 1 4.134 1 8C0.999998 11.866 4.134 15 8 15C11.866 15 15 11.866 15 8ZM10.9844 8.22791L6.51038 10.811C6.33493 10.9123 6.11561 10.7857 6.11561 10.5831L6.11561 5.41691C6.11561 5.21432 6.33493 5.0877 6.51038 5.18899L10.9844 7.77207C11.1599 7.87337 11.1599 8.12661 10.9844 8.22791Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("play-circle-stroke","PlayCircleStroke"):T("play-circle-stroke",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M11.55 7.74017C11.75 7.85564 11.75 8.14432 11.55 8.25979L6.45 11.2043C6.25 11.3198 6 11.1754 6 10.9445L6 5.0555C6 4.82456 6.25 4.68022 6.45 4.79569L11.55 7.74017ZM7 6.26793V9.73204L10 7.99998L7 6.26793Z" fill="black" fill-opacity="0.9"/>
<path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.134 15 0.999998 11.866 1 8C1 4.134 4.13401 0.999998 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z" fill="black" fill-opacity="0.9"/>
</g>
</svg>
`),n==="develop"?V("play-circle","PlayCircle"):T("play-circle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M11.55 7.74017C11.75 7.85564 11.75 8.14432 11.55 8.25979L6.45 11.2043C6.25 11.3198 6 11.1754 6 10.9445L6 5.0555C6 4.82456 6.25 4.68022 6.45 4.79569L11.55 7.74017Z" fill="black" fill-opacity="0.9"/>
<path d="M8 1C11.866 1 15 4.13401 15 8C15 11.866 11.866 15 8 15C4.134 15 0.999998 11.866 1 8C1 4.134 4.13401 0.999998 8 1ZM8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8C14 4.68629 11.3137 2 8 2Z" fill="black" fill-opacity="0.9"/>
</g>
</svg>
`),n==="develop"?V("play","Play"):T("play",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.55 7.74018C11.75 7.85565 11.75 8.14433 11.55 8.2598L6.45 11.2043C6.25 11.3198 6 11.1754 6 10.9445V5.05551C6 4.82457 6.25 4.68024 6.45 4.79571L11.55 7.74018Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("poweroff","Poweroff"):T("poweroff",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 1V8H8.5V1H7.5Z" fill="black" fill-opacity="0.9"/>
<path d="M1.5 8.50007C1.5 6.00518 2.90561 3.83859 4.96813 2.74901L5.46865 3.61594C3.70487 4.53193 2.5 6.3753 2.5 8.50008C2.5 11.5376 4.96243 14.0001 8 14.0001C11.0376 14.0001 13.5 11.5376 13.5 8.50008C13.5 6.37522 12.295 4.53179 10.5311 3.61583L11.0317 2.7489C13.0943 3.83844 14.5 6.0051 14.5 8.50008C14.5 12.0899 11.5898 15.0001 8 15.0001C4.41015 15.0001 1.5 12.0899 1.5 8.50007Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("precise-monitor","PreciseMonitor"):T("precise-monitor",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M7.5 1.5V5H8.5V1.5H7.5ZM6.23223 5.52513L2.6967 1.98959L1.98959 2.6967L5.52513 6.23223L6.23223 5.52513ZM9.76777 5.52513L13.3033 1.98959L14.0104 2.6967L10.4749 6.23223L9.76777 5.52513ZM9 8C9 8.55229 8.55229 9 8 9C7.62986 9 7.30669 8.7989 7.13378 8.5H1.5V7.5H7.13378C7.30669 7.2011 7.62986 7 8 7C8.55229 7 9 7.44772 9 8ZM5.52513 9.76777L1.98959 13.3033L2.6967 14.0104L6.23223 10.4749L5.52513 9.76777ZM10.4749 9.76777L14.0104 13.3033L13.3033 14.0104L9.76777 10.4749L10.4749 9.76777ZM14.5 7.5H11V8.5H14.5V7.5ZM7.5 14.5V11H8.5V14.5H7.5Z" fill="black"/>
</g>
</svg>
`),n==="develop"?V("previous","Previous"):T("previous",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 14H3V2H4L4 14Z" fill="black" fill-opacity="0.9"/>
<path d="M5.14876 8.41978C4.84426 8.22276 4.84426 7.77724 5.14876 7.58021L12.2284 2.99929C12.5611 2.78402 13 3.02282 13 3.41907V12.5809C13 12.9772 12.5611 13.216 12.2284 13.0007L5.14876 8.41978ZM12 11.6619V4.33814L6.34077 8L12 11.6619Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("print","Print"):T("print",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.99902 1.9989V3.9989H2.99902C2.44288 3.9989 1.99902 4.44276 1.99902 4.9989V9.9989C1.99902 10.555 2.44288 10.9989 2.99902 10.9989H3.99902V13.9989H11.999V10.9989H12.999C13.5552 10.9989 13.999 10.555 13.999 9.9989V4.9989C13.999 4.44276 13.5552 3.9989 12.999 3.9989H11.999V1.9989H3.99902ZM10.999 3.9989H4.99902V2.9989H10.999V3.9989ZM2.99902 4.9989H12.999V9.9989H11.999V7.9989H3.99902V9.9989H2.99902V4.9989ZM4.99902 12.9989V8.9989H10.999V12.9989H4.99902Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("qrcode","Qrcode"):T("qrcode",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 4H4V6H6V4Z" fill="black" fill-opacity="0.9"/>
<path d="M2.5 2C2.22386 2 2 2.22386 2 2.5V7.5C2 7.77614 2.22386 8 2.5 8H7.5C7.77614 8 8 7.77614 8 7.5V2.5C8 2.22386 7.77614 2 7.5 2H2.5ZM3 3H7V7H3V3Z" fill="black" fill-opacity="0.9"/>
<path d="M10.5 2C10.2239 2 10 2.22386 10 2.5V5.5C10 5.77614 10.2239 6 10.5 6H13.5C13.7761 6 14 5.77614 14 5.5V2.5C14 2.22386 13.7761 2 13.5 2H10.5ZM11 5V3H13V5H11Z" fill="black" fill-opacity="0.9"/>
<path d="M10 10.5C10 10.2239 10.2239 10 10.5 10H13.5C13.7761 10 14 10.2239 14 10.5V13.5C14 13.7761 13.7761 14 13.5 14H10.5C10.2239 14 10 13.7761 10 13.5V10.5ZM11 13H13V11H11V13Z" fill="black" fill-opacity="0.9"/>
<path d="M2.5 10C2.22386 10 2 10.2239 2 10.5V13.5C2 13.7761 2.22386 14 2.5 14H5.5C5.77614 14 6 13.7761 6 13.5V10.5C6 10.2239 5.77614 10 5.5 10H2.5ZM3 11H5V13H3V11Z" fill="black" fill-opacity="0.9"/>
<path d="M14 7.5L10 7.5V8.5L14 8.5V7.5Z" fill="black" fill-opacity="0.9"/>
<path d="M8.5 11V14H7.5V11H8.5Z" fill="black" fill-opacity="0.9"/>
<path d="M8.5 10V9H7.5V10H8.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("queue","Queue"):T("queue",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 3H13V12H14V3C14 2.44772 13.5523 2 13 2H4V3Z" fill="black" fill-opacity="0.9"/>
<path d="M6.58325 9.41669V12.3334L7.58325 12.3334V9.41669H10.3334V8.41669H7.58325V5.66669H6.58325V8.41669H3.66675V9.41669H6.58325Z" fill="black" fill-opacity="0.9"/>
<path d="M2 13C2 13.5523 2.44772 14 3 14L11 14C11.5523 14 12 13.5523 12 13L12 5C12 4.44772 11.5523 4 11 4H3C2.44772 4 2 4.44772 2 5V13ZM3 5L11 5L11 13L3 13L3 5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("rectangle","Rectangle"):T("rectangle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M3 14L13 14C13.5523 14 14 13.5523 14 13L14 3C14 2.44772 13.5523 2 13 2H3C2.44772 2 2 2.44771 2 3V13C2 13.5523 2.44772 14 3 14ZM3 13L3 3L13 3L13 13L3 13Z" fill="black" fill-opacity="0.9"/>
</svg>
    `),n==="develop"?V("refresh","Refresh"):T("refresh",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.00016 2.71134C10.8965 2.71134 13.2534 5.0736 13.2534 7.99868H14.2148C14.2148 4.54763 11.4324 1.75 8.00016 1.75C5.76382 1.75 3.80336 2.93771 2.7087 4.72001L2.7087 2.64252H1.75V5.74894C1.75 6.02508 1.97386 6.24894 2.25 6.24894L5.33676 6.24894V5.28498L3.49045 5.28498C4.40906 3.74211 6.08692 2.71134 8.00016 2.71134Z" fill="black" fill-opacity="0.9"/>
<path d="M1.78554 7.99863H2.74687C2.74687 10.9237 5.10379 13.286 8.00015 13.286C9.91339 13.286 11.5912 12.2553 12.5099 10.7124H10.6632V9.74843H13.75C14.0261 9.74843 14.25 9.97228 14.25 10.2484V13.3548H13.2913V11.2779C12.1966 13.0599 10.2363 14.2474 8.00015 14.2474C4.56792 14.2474 1.78554 11.4497 1.78554 7.99863Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("relativity","Relativity"):T("relativity",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M5.5 5.5H2.5C1.94772 5.5 1.5 5.94772 1.5 6.5V13.5C1.5 14.0523 1.94772 14.5 2.5 14.5H9.5C10.0523 14.5 10.5 14.0523 10.5 13.5V10.5H13.5C14.0523 10.5 14.5 10.0523 14.5 9.5V2.5C14.5 1.94772 14.0523 1.5 13.5 1.5H6.5C5.94772 1.5 5.5 1.94772 5.5 2.5V5.5ZM6.5 2.5H13.5V9.5H10.5V6.5C10.5 5.94772 10.0523 5.5 9.5 5.5H6.5V2.5ZM9.5 10.5V13.5H2.5V6.5H5.5V9.5C5.5 10.0523 5.94772 10.5 6.5 10.5H9.5ZM9.5 9.5H6.5V6.5H9.5V9.5Z" fill="black" fill-opacity="0.9"/>
</svg>
    `),n==="develop"?V("remove","Remove"):T("remove",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 7.34998H12.5V8.64998H3.5V7.34998Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("rollback","Rollback"):T("rollback",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.20718 5.00004L5.85363 3.35359L5.14652 2.64648L2.64652 5.14648C2.45126 5.34175 2.45126 5.65833 2.64652 5.85359L5.14652 8.35359L5.85363 7.64648L4.20718 6.00004H10.0001C11.6569 6.00004 13.0001 7.34318 13.0001 9.00004C13.0001 10.6569 11.6569 12 10.0001 12H5.00008V13H10.0001C12.2092 13 14.0001 11.2092 14.0001 9.00004C14.0001 6.7909 12.2092 5.00004 10.0001 5.00004H4.20718Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("rollfront","Rollfront"):T("rollfront",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.0859 5.00004L10.4394 3.35359L11.1465 2.64648L13.6465 5.14648C13.8418 5.34175 13.8418 5.65833 13.6465 5.85359L11.1465 8.35359L10.4394 7.64648L12.0859 6.00004H6.29297C4.63611 6.00004 3.29297 7.34318 3.29297 9.00004C3.29297 10.6569 4.63611 12 6.29297 12H11.293V13H6.29297C4.08383 13 2.29297 11.2092 2.29297 9.00004C2.29297 6.7909 4.08383 5.00004 6.29297 5.00004H12.0859Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("root-list","RootList"):T("root-list",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M4.5 5H11.5V6H4.5V5Z" fill="black" fill-opacity="0.9"/>
<path d="M9 7.5H4.5V8.5H9V7.5Z" fill="black" fill-opacity="0.9"/>
<path d="M3 2C2.44772 2 2 2.44771 2 3V13C2 13.5523 2.44771 14 3 14H13C13.5523 14 14 13.5523 14 13V3C14 2.44772 13.5523 2 13 2H3ZM13 3V13H3L3 3H13Z" fill="black" fill-opacity="0.9"/>
</g>
</svg>
`),n==="develop"?V("rotation","Rotation"):T("rotation",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 2H3V8.08296C5.5125 8.50448 7.49552 10.4875 7.91704 13H14V14H3C2.44772 14 2 13.5523 2 13V2ZM6.89998 13C6.5023 11.0409 4.95913 9.4977 3 9.10002V13L6.89998 13Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("round","Round"):T("round",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 11.5C6.067 11.5 4.5 9.933 4.5 8C4.5 6.067 6.067 4.5 8 4.5C9.933 4.5 11.5 6.067 11.5 8C11.5 9.933 9.933 11.5 8 11.5ZM8 13C10.7614 13 13 10.7614 13 8C13 5.23858 10.7614 3 8 3C5.23858 3 3 5.23858 3 8C3 10.7614 5.23858 13 8 13Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("save","Save"):T("save",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11 2L14 5V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V3C2 2.44772 2.44772 2 3 2H11ZM10 3L6 3V4.5H10V3ZM11 3.41421V5.5H5V3L3 3L3 13H5V8H11V13H13V5.41421L11 3.41421ZM10 13V9H6V13H10Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("scan","Scan"):T("scan",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 3.5H4V6.5H3V3.5C3 2.94769 3.44775 2.5 4 2.5H12C12.5522 2.5 13 2.94769 13 3.5V6.5H12V3.5Z" fill="black" fill-opacity="0.9"/>
<path d="M3 9.5H4V12.5H12V9.5H13V12.5C13 13.0523 12.5522 13.5 12 13.5H4C3.44775 13.5 3 13.0523 3 12.5V9.5Z" fill="black" fill-opacity="0.9"/>
<path d="M14 7.5H2V8.5H14V7.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("search","Search"):T("search",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.51033 10.2186C8.69189 10.8814 7.64943 11.2784 6.51424 11.2784C3.88302 11.2784 1.75 9.14541 1.75 6.51421C1.75 3.88301 3.88302 1.75 6.51424 1.75C9.14545 1.75 11.2785 3.88301 11.2785 6.51421C11.2785 7.64942 10.8814 8.69189 10.2186 9.51034L13.75 13.0417L13.0417 13.75L9.51033 10.2186ZM10.2768 6.51421C10.2768 4.43623 8.59224 2.75168 6.51424 2.75168C4.43623 2.75168 2.75168 4.43623 2.75168 6.51421C2.75168 8.59219 4.43623 10.2767 6.51424 10.2767C8.59224 10.2767 10.2768 8.59219 10.2768 6.51421Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("secured","Secured"):T("secured",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.3894 9.92886L10.9644 6.35379L10.2573 5.64669L7.38939 8.51464L5.74265 6.8679L5.03555 7.57501L7.3894 9.92886Z" fill="black" fill-opacity="0.9"/>
<path d="M2.50003 2L2.5 9.00005C2.5 10.4165 3.24315 11.729 4.45772 12.4578L7.99979 14.5831L11.5423 12.4578C12.7569 11.729 13.5 10.4165 13.5 9.00005L13.5001 2H2.50003ZM3.5 9.00005L3.50002 3H12.5001L12.5 9.00005C12.5 10.0652 11.9412 11.0523 11.0278 11.6003L7.99982 13.417L4.97223 11.6003C4.05886 11.0523 3.5 10.0652 3.5 9.00005Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("server","Server"):T("server",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 5.25H4V4.25H7V5.25Z" fill="black" fill-opacity="0.9"/>
<path d="M1.50024 2.50014C1.50017 2.22394 1.72405 2 2.00024 2H14.0002C14.2763 2 14.5002 2.22377 14.5002 2.49986L14.5012 6.99988C14.5013 7.27608 14.2774 7.50002 14.0012 7.50002H2.00119C1.7251 7.50002 1.50127 7.27624 1.50119 7.00015L1.50024 2.50014ZM2.50106 6.50002H13.5011L13.5004 3H2.50038L2.50106 6.50002Z" fill="black" fill-opacity="0.9"/>
<path d="M4.00011 11.75H7.00011V10.75H4.00011V11.75Z" fill="black" fill-opacity="0.9"/>
<path d="M1.50133 9.00001C1.50133 8.72387 1.72519 8.50001 2.00133 8.50001H14.0013C14.2775 8.50001 14.5013 8.72387 14.5013 9.00001V13.5C14.5013 13.7761 14.2775 14 14.0013 14H2.00133C1.72519 14 1.50133 13.7761 1.50133 13.5V9.00001ZM2.50133 13H13.5013V9.50001H2.50133V13Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("service","Service"):T("service",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2.51604 6.37387C2.73216 3.5341 5.10482 1.29718 7.99995 1.29718C10.8949 1.29718 13.2674 3.5338 13.4838 6.37328C13.4944 6.41375 13.5 6.45622 13.5 6.5V10.5C13.5 10.5506 13.4925 10.5995 13.4785 10.6455C13.2561 12.923 11.3359 14.7028 9 14.7028H8V13.7028H9C10.6587 13.7028 12.048 12.5489 12.4088 11H10.5C10.2239 11 10 10.7761 10 10.5V6.5C10 6.22386 10.2239 6 10.5 6H12.4295C12.0532 3.89498 10.2132 2.29718 7.99995 2.29718C5.78672 2.29718 3.94667 3.89498 3.57038 6H5.5C5.77614 6 6 6.22386 6 6.5V10.5C6 10.7761 5.77614 11 5.5 11H3C2.72386 11 2.5 10.7761 2.5 10.5V6.5C2.5 6.45643 2.50557 6.41416 2.51604 6.37387ZM12.4999 7H11V10H12.5L12.4999 7ZM3.5 7V10H5V7H3.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("setting","Setting"):T("setting",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.0002 8C11.0002 9.65685 9.65702 11 8.00017 11C6.34331 11 5.00017 9.65685 5.00017 8C5.00017 6.34315 6.34331 5 8.00017 5C9.65702 5 11.0002 6.34315 11.0002 8ZM10.0002 8C10.0002 6.89543 9.10474 6 8.00017 6C6.8956 6 6.00017 6.89543 6.00017 8C6.00017 9.10457 6.8956 10 8.00017 10C9.10474 10 10.0002 9.10457 10.0002 8Z" fill="black" fill-opacity="0.9"/>
<path d="M8.00017 1.25L14.0623 4.625V11.375L8.00017 14.75L1.93799 11.375V4.625L8.00017 1.25ZM2.93799 5.2128V10.7872L8.00017 13.6055L13.0623 10.7872V5.2128L8.00017 2.39453L2.93799 5.2128Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("share","Share"):T("share",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.93164 5.35774C10.355 5.81616 10.9612 6.10324 11.6344 6.10324C12.9142 6.10324 13.9517 5.06575 13.9517 3.78594C13.9517 2.50612 12.9142 1.46863 11.6344 1.46863C10.3546 1.46863 9.3171 2.50612 9.3171 3.78594C9.3171 4.03296 9.35575 4.27096 9.42734 4.49422L6.06804 6.45463C5.64466 5.99613 5.03844 5.709 4.36516 5.709C3.08535 5.709 2.04785 6.74649 2.04785 8.02631C2.04785 9.30612 3.08535 10.3436 4.36516 10.3436C5.03854 10.3436 5.64484 10.0564 6.06822 9.59778L9.4282 11.5557C9.35606 11.7797 9.3171 12.0187 9.3171 12.2667C9.3171 13.5465 10.3546 14.584 11.6344 14.584C12.9142 14.584 13.9517 13.5465 13.9517 12.2667C13.9517 10.9869 12.9142 9.94937 11.6344 9.94937C10.9622 9.94937 10.3568 10.2356 9.93356 10.6928L6.57236 8.73416C6.64386 8.51103 6.68247 8.27318 6.68247 8.02631C6.68247 7.77934 6.64383 7.5414 6.57228 7.31819L9.93164 5.35774ZM11.6344 2.46863C12.3619 2.46863 12.9517 3.05841 12.9517 3.78594C12.9517 4.51346 12.3619 5.10324 11.6344 5.10324C11.1607 5.10324 10.7454 4.85324 10.5133 4.47798C10.5084 4.4681 10.5031 4.45831 10.4974 4.44864C10.4918 4.43887 10.4858 4.42937 10.4795 4.42015C10.376 4.23201 10.3171 4.01585 10.3171 3.78594C10.3171 3.05841 10.9069 2.46863 11.6344 2.46863ZM5.48783 7.33682C5.49239 7.34584 5.49725 7.35478 5.50242 7.36363C5.50761 7.37253 5.51305 7.38122 5.5187 7.38968C5.62306 7.57838 5.68247 7.79541 5.68247 8.02631C5.68247 8.25725 5.62304 8.47431 5.51864 8.66304C5.51295 8.67156 5.50748 8.68031 5.50226 8.68928C5.49717 8.698 5.49239 8.70681 5.48789 8.7157C5.25607 9.09243 4.83995 9.34361 4.36516 9.34361C3.63763 9.34361 3.04785 8.75383 3.04785 8.02631C3.04785 7.29878 3.63763 6.709 4.36516 6.709C4.83991 6.709 5.256 6.96014 5.48783 7.33682ZM10.3171 12.2667C10.3171 12.0491 10.3699 11.8438 10.4633 11.663C10.4779 11.6445 10.4914 11.6247 10.5037 11.6037C10.5154 11.5835 10.5256 11.5628 10.5343 11.5418C10.77 11.1849 11.1747 10.9494 11.6344 10.9494C12.3619 10.9494 12.9517 11.5391 12.9517 12.2667C12.9517 12.9942 12.3619 13.584 11.6344 13.584C10.9069 13.584 10.3171 12.9942 10.3171 12.2667Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("shop","Shop"):T("shop",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1C6.61929 1 5.5 2.11929 5.5 3.5V5H3.5C3.22386 5 3 5.22386 3 5.5V14.5C3 14.7761 3.22386 15 3.5 15H12.5C12.7761 15 13 14.7761 13 14.5V5.5C13 5.22386 12.7761 5 12.5 5H10.5V3.5C10.5 2.11929 9.38071 1 8 1ZM9.5 6V8H10.5V6H12V14H4V6H5.5V8H6.5V6H9.5ZM9.5 5H6.5V3.5C6.5 2.67157 7.17157 2 8 2C8.82843 2 9.5 2.67157 9.5 3.5V5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("slash","Slash"):T("slash",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.06689 13.8122L11.0669 1.68787L11.9329 2.18787L4.93292 14.3122L4.06689 13.8122Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("sound","Sound"):T("sound",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.99991 11L8.24266 13.5457C8.57592 13.7456 8.99991 13.5056 8.99991 13.1169V2.8831C8.99991 2.49445 8.57592 2.25439 8.24266 2.45435L3.99991 5H2.10473C1.77358 5 1.50504 5.26829 1.50473 5.59944L1.50024 10.3994C1.49993 10.731 1.76865 11 2.10024 11H3.99991ZM4.99991 5.56619L7.99991 3.76619V12.2338L4.99991 10.4338V5.56619ZM3.99991 10H2.50062L2.50435 6H3.99991V10Z" fill="black" fill-opacity="0.9"/>
<path d="M13.515 5.72686C13.194 5.00368 12.7215 4.34191 12.1209 3.78131L12.8032 3.05025C13.4996 3.70026 14.0521 4.47194 14.429 5.32122C14.8059 6.1705 14.9999 7.08075 14.9999 8C14.9999 8.91925 14.8059 9.8295 14.429 10.6788C14.0521 11.5281 13.4996 12.2997 12.8032 12.9497L12.1209 12.2187C12.7215 11.6581 13.194 10.9963 13.515 10.2731C13.8358 9.55017 13.9999 8.77797 13.9999 8C13.9999 7.22203 13.8358 6.44984 13.515 5.72686Z" fill="black" fill-opacity="0.9"/>
<path d="M11.5 8.00027C11.5007 7.12735 11.1403 6.24663 10.4274 5.54638L11.1282 4.83301C12.023 5.71203 12.501 6.84639 12.5 8.00113C12.499 9.15589 12.0191 10.2897 11.1227 11.1675L10.423 10.453C11.1372 9.75363 11.4992 8.87324 11.5 8.00027Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("star-filled","StarFilled"):T("star-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.59756 1.81764C7.76262 1.48318 8.23955 1.48318 8.40462 1.81764L10.2053 5.46619L14.2317 6.05126C14.6008 6.10489 14.7482 6.55848 14.4811 6.81882L11.5675 9.65881L12.2553 13.6689C12.3184 14.0366 11.9325 14.3169 11.6024 14.1433L8.00109 12.25L4.39976 14.1433C4.06963 14.3169 3.68378 14.0366 3.74683 13.669L4.43463 9.65881L1.52109 6.81882C1.25401 6.55848 1.40139 6.10489 1.77049 6.05126L5.79689 5.46619L7.59756 1.81764Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("star","Star"):T("star",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.54158 6.3802L8.00145 3.25955L6.46132 6.3802L3.01749 6.88062L5.50947 9.3097L4.9212 12.7396L8.00145 11.1202L11.0817 12.7396L10.4934 9.3097L12.9854 6.88062L9.54158 6.3802ZM14.5328 6.09497C14.7789 6.13072 14.8771 6.43311 14.6991 6.60667L11.5679 9.65882L12.3071 13.9685C12.3491 14.2136 12.0919 14.4005 11.8718 14.2848L8.00145 12.25L4.13111 14.2848C3.91102 14.4005 3.65379 14.2136 3.69582 13.9685L4.43499 9.65882L1.30382 6.60667C1.12576 6.43311 1.22401 6.13072 1.47008 6.09497L5.79726 5.46619L7.73243 1.5451C7.84248 1.32212 8.16043 1.32213 8.27047 1.5451L10.2056 5.46619L14.5328 6.09497Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("stop-circle-1","StopCircle1"):T("stop-circle-1",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.49796 5.49805H10.502V10.5021H5.49796V5.49805Z" fill="black" fill-opacity="0.9"/>
<path d="M8 1C6.61553 1 5.26216 1.41054 4.11101 2.17971C2.95987 2.94888 2.06266 4.04213 1.53285 5.32122C1.00303 6.6003 0.86441 8.00776 1.13451 9.36563C1.4046 10.7235 2.07129 11.9708 3.05026 12.9497C4.02922 13.9287 5.2765 14.5954 6.63437 14.8655C7.99224 15.1356 9.3997 14.997 10.6788 14.4672C11.9579 13.9373 13.0511 13.0401 13.8203 11.889C14.5895 10.7378 15 9.38447 15 8C15 6.14348 14.2625 4.36301 12.9497 3.05025C11.637 1.7375 9.85652 1 8 1ZM8 2C9.18669 2 10.3467 2.35189 11.3334 3.01118C12.3201 3.67047 13.0892 4.60754 13.5433 5.7039C13.9974 6.80026 14.1162 8.00666 13.8847 9.17054C13.6532 10.3344 13.0818 11.4035 12.2426 12.2426C11.4035 13.0818 10.3344 13.6532 9.17054 13.8847C8.00666 14.1162 6.80026 13.9974 5.7039 13.5433C4.60755 13.0892 3.67047 12.3201 3.01119 11.3334C2.3519 10.3467 2 9.18669 2 8C2 6.4087 2.63214 4.88258 3.75736 3.75736C4.88258 2.63214 6.4087 2 8 2Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("stop-circle-filled","StopCircleFilled"):T("stop-circle-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.11101 2.17971C5.26216 1.41054 6.61553 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.38447 14.5895 10.7378 13.8203 11.889C13.0511 13.0401 11.9579 13.9373 10.6788 14.4672C9.3997 14.997 7.99224 15.1356 6.63437 14.8655C5.2765 14.5954 4.02922 13.9287 3.05026 12.9497C2.07129 11.9708 1.4046 10.7235 1.13451 9.36563C0.86441 8.00776 1.00303 6.6003 1.53285 5.32122C2.06266 4.04213 2.95987 2.94888 4.11101 2.17971ZM5.49991 5.49995V10.5001H10.5001V5.49995H5.49991Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("stop-circle","StopCircle"):T("stop-circle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 5H6V11H7V5Z" fill="black" fill-opacity="0.9"/>
<path d="M10 5H9V11H10V5Z" fill="black" fill-opacity="0.9"/>
<path d="M4.11101 2.17971C5.26216 1.41054 6.61553 1 8 1C9.85652 1 11.637 1.7375 12.9497 3.05025C14.2625 4.36301 15 6.14348 15 8C15 9.38447 14.5895 10.7378 13.8203 11.889C13.0511 13.0401 11.9579 13.9373 10.6788 14.4672C9.3997 14.997 7.99224 15.1356 6.63437 14.8655C5.2765 14.5954 4.02922 13.9287 3.05026 12.9497C2.07129 11.9708 1.4046 10.7235 1.13451 9.36563C0.86441 8.00776 1.00303 6.6003 1.53285 5.32122C2.06266 4.04213 2.95987 2.94888 4.11101 2.17971ZM11.3334 3.01118C10.3467 2.35189 9.18669 2 8 2C6.4087 2 4.88258 2.63214 3.75736 3.75736C2.63214 4.88258 2 6.4087 2 8C2 9.18669 2.3519 10.3467 3.01119 11.3334C3.67047 12.3201 4.60755 13.0892 5.7039 13.5433C6.80026 13.9974 8.00666 14.1162 9.17054 13.8847C10.3344 13.6532 11.4035 13.0818 12.2426 12.2426C13.0818 11.4035 13.6532 10.3344 13.8847 9.17054C14.1162 8.00666 13.9974 6.80026 13.5433 5.7039C13.0892 4.60754 12.3201 3.67047 11.3334 3.01118Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("stop","Stop"):T("stop",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7 5H6V11H7V5Z" fill="black" fill-opacity="0.9"/>
<path d="M10 5H9V11H10V5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("swap-left","SwapLeft"):T("swap-left",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.20739 8.99975L15.0002 8.99976L15.0002 9.99976L2.07267 9.99975C1.60049 9.99975 1.36402 9.42885 1.69792 9.09497L5.6467 5.14637L6.35379 5.85349L3.20739 8.99975Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("swap-right","SwapRight"):T("swap-right",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.7931 8.99975L1.00024 8.99976L1.00024 9.99976L13.9278 9.99975C14.4 9.99975 14.6365 9.42884 14.3026 9.09497L10.3538 5.14637L9.6467 5.8535L12.7931 8.99975Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("swap","Swap"):T("swap",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.25024 6.00005L13.0082 6.00005L9.16404 2.25121L9.86221 1.53528L14.5334 6.09061C14.8738 6.4225 14.6388 7.00005 14.1634 7.00005L1.25024 7.00005V6.00005Z" fill="black" fill-opacity="0.9"/>
<path d="M14.75 10.0001L3.02026 10.0001L6.83053 13.6005L6.14372 14.3273L1.47454 9.91528C1.1261 9.58601 1.35906 9.00005 1.83855 9.00005L14.75 9.00005V10.0001Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("thumb-down","ThumbDown"):T("thumb-down",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 9.771H13.2192C13.8698 9.771 14.3472 9.15961 14.1894 8.52846L12.6894 2.52846C12.5781 2.08329 12.1781 1.771 11.7192 1.771L3 1.771C2.44772 1.771 2 2.21871 2 2.771L2 7.771C2 8.32328 2.44772 8.771 3 8.771L5 8.771L7 13.771H9C9.55229 13.771 10 13.3233 10 12.771V9.771ZM6 8.57841L6 2.771L11.7192 2.771L13.2192 8.771H9L9 12.771H7.67703L6 8.57841ZM5 7.771L3 7.771L3 2.771L5 2.771L5 7.771Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("thumb-up","ThumbUp"):T("thumb-up",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10 6H13.2192C13.8698 6 14.3472 6.61139 14.1894 7.24254L12.6894 13.2425C12.5781 13.6877 12.1781 14 11.7192 14H3C2.44772 14 2 13.5523 2 13V8C2 7.44772 2.44772 7 3 7H5L7 2H9C9.55228 2 10 2.44772 10 3V6ZM6 7.19258V13H11.7192L13.2192 7H9V3H7.67703L6 7.19258ZM5 8H3V13H5V8Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("time-filled","TimeFilled"):T("time-filled",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM7.5 5H8.5V7.97471L11.3538 10.8285L10.6467 11.5356L7.5 8.38892V5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("time","Time"):T("time",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 4V8.38892L10.0002 11L10.7074 10.2929L8.5 7.97471V4H7.5Z" fill="black" fill-opacity="0.9"/>
<path d="M15 8C15 11.866 11.866 15 8 15C4.13401 15 1 11.866 1 8C1 4.13401 4.13401 1 8 1C11.866 1 15 4.13401 15 8ZM14 8C14 4.68629 11.3137 2 8 2C4.68629 2 2 4.68629 2 8C2 11.3137 4.68629 14 8 14C11.3137 14 14 11.3137 14 8Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("tips","Tips"):T("tips",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 1C6.6247 1 5.36829 1.5546 4.46644 2.46644C3.5546 3.36829 3 4.6247 3 6C3 7.37457 3.554 8.63036 4.46498 9.53211C4.77388 9.84935 5.12363 10.1126 5.5 10.3289V12C5.5 12.5523 5.94772 13 6.5 13H9.5C10.0523 13 10.5 12.5523 10.5 12V10.3289C10.8764 10.1126 11.2261 9.84935 11.535 9.5321C12.446 8.63036 13 7.37456 13 6C13 3.23386 10.7661 1 8 1ZM5.17572 3.17138C5.89371 2.44452 6.8964 2 8 2C10.2139 2 12 3.78614 12 6C12 7.1036 11.5555 8.10629 10.8286 8.82428L10.8214 8.83161C10.5255 9.13619 10.173 9.3845 9.77639 9.58279L9.5 9.72098V12H6.5V9.72098L6.22361 9.58279C5.82703 9.3845 5.47452 9.13619 5.17864 8.83161L5.17138 8.82428C4.44452 8.10629 4 7.1036 4 6C4 4.8964 4.44452 3.89371 5.17138 3.17572L5.17572 3.17138Z" fill="black" fill-opacity="0.9"/>
<path d="M5.5 14V15H10.5V14H5.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("tools","Tools"):T("tools",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.75056 8.24943L10.3118 8.40417C11.3109 8.67963 12.3996 8.42901 13.1581 7.67052C13.8303 6.99831 14.1035 6.06341 13.9654 5.16621L12.909 6.22262C12.3232 6.80839 11.3735 6.80841 10.7877 6.22265L10.3634 5.7984C9.77758 5.21262 9.77757 4.26285 10.3634 3.67705L11.4198 2.62058C10.5226 2.48241 9.58765 2.75565 8.91542 3.42788C8.15697 4.18632 7.90634 5.27494 8.18172 6.27395L8.33641 6.83516L2.53207 12.6395L3.94628 14.0537L9.75056 8.24943ZM12.2439 1.7965C12.5739 1.90785 12.893 2.06333 13.1918 2.26284L11.0705 4.38415C10.8752 4.57942 10.8752 4.89601 11.0705 5.09127L11.4948 5.51552C11.69 5.71077 12.0066 5.71077 12.2019 5.51551L14.3231 3.39423C14.5227 3.69303 14.6781 4.01209 14.7895 4.34211C15.255 5.72209 14.9491 7.29373 13.8652 8.37763C12.8375 9.40526 11.3715 9.73365 10.046 9.3682L4.65339 14.7608C4.26287 15.1513 3.6297 15.1513 3.23918 14.7608L1.82496 13.3466C1.43444 12.9561 1.43444 12.3229 1.82496 11.9324L7.21767 6.53969C6.85233 5.21428 7.18074 3.74834 8.20831 2.72077C9.29223 1.63686 10.8639 1.33087 12.2439 1.7965Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("translate-1","Translate1"):T("translate-1",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.33339 1.33337V3.00004H1.33339V4.33337H6.30653C5.9584 5.21602 5.48812 6.03754 4.91647 6.77698C4.54688 6.29884 4.21964 5.78634 3.94041 5.24514L3.63472 4.65269L2.44981 5.26405L2.75549 5.8565C3.11085 6.54523 3.53467 7.19278 4.01796 7.79018C3.41506 8.38424 2.73707 8.90247 1.9995 9.32926L1.42247 9.66315L2.09025 10.8172L2.66728 10.4833C3.48744 10.0087 4.24271 9.4343 4.91641 8.77655C5.59021 9.43444 6.34569 10.009 7.16626 10.4836L7.74334 10.8174L8.41094 9.66328L7.83386 9.32948C7.09618 8.90279 6.41802 8.3845 5.81493 7.79022C6.64084 6.76947 7.29317 5.60227 7.72685 4.33337H8.66672V3.00004H5.66672V1.33337H4.33339ZM11.0001 6.10939L7.11217 14.3171L8.31716 14.8879L9.05352 13.3334H12.9466L13.683 14.8879L14.8879 14.3171L11.0001 6.10939ZM12.315 12H9.6851L11.0001 9.22403L12.315 12Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("translate","Translate"):T("translate",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.33325 3.33337C1.33325 2.2288 2.22868 1.33337 3.33325 1.33337H4.66659C5.77115 1.33337 6.66658 2.2288 6.66658 3.33337V7.33337H5.33325V5.66671H2.66659V7.33337H1.33325V3.33337ZM2.66659 4.33337H5.33325V3.33337C5.33325 2.96518 5.03477 2.66671 4.66659 2.66671H3.33325C2.96506 2.66671 2.66659 2.96518 2.66659 3.33337V4.33337ZM7.99992 2.33337H11.9999C13.1045 2.33337 13.9999 3.2288 13.9999 4.33337V6.00004H12.6666V4.33337C12.6666 3.96518 12.3681 3.66671 11.9999 3.66671H7.99992V2.33337ZM11.9999 7.66671V8.66671H14.6666V10H13.9587C13.812 11.1759 13.2826 12.2328 12.4991 13.0423C12.9626 13.2301 13.4693 13.3334 13.9999 13.3334H14.6666V14.6667H13.9999C13.0283 14.6667 12.1176 14.4069 11.3333 13.9532C10.5488 14.407 9.63805 14.6667 8.66658 14.6667H7.99992V13.3334H8.66658C9.19738 13.3334 9.70403 13.23 10.1675 13.0422C9.76569 12.6271 9.43081 12.1471 9.18017 11.6194L8.8941 11.0173L10.0985 10.4451L10.3845 11.0473C10.6145 11.5314 10.9386 11.9618 11.3332 12.3149C11.9946 11.7229 12.4579 10.914 12.6113 10H7.99992V8.66671H10.6666V7.66671H11.9999ZM3.99992 8.66671V12.6667C3.99992 13.0349 4.2984 13.3334 4.66659 13.3334H6.33325V14.6667H4.66659C3.56202 14.6667 2.66659 13.7713 2.66659 12.6667V8.66671H3.99992Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("unfold-less","UnfoldLess"):T("unfold-less",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.3556 2.12549L8.00004 5.81174L11.6445 2.12549L12.3556 2.82855L8.42672 6.80251C8.19187 7.04006 7.80822 7.04006 7.57337 6.80251L3.64447 2.82855L4.3556 2.12549Z" fill="black" fill-opacity="0.9"/>
<path d="M4.30769 13.8306L8.00003 10.1382L11.6924 13.8306L12.3995 13.1235L8.42429 9.14829C8.18998 8.91397 7.81008 8.91397 7.57577 9.14829L3.60059 13.1235L4.30769 13.8306Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("unfold-more","UnfoldMore"):T("unfold-more",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.6445 6.84005L8.00001 3.1538L4.35559 6.84005L3.64446 6.13699L7.57334 2.16303C7.80819 1.92548 8.19183 1.92548 8.42669 2.16303L12.3556 6.13699L11.6445 6.84005Z" fill="black" fill-opacity="0.9"/>
<path d="M11.6924 9.15791L8.00003 12.8503L4.30769 9.15791L3.60059 9.86502L7.57576 13.8402C7.81008 14.0745 8.18998 14.0745 8.42429 13.8402L12.3995 9.86502L11.6924 9.15791Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("upload","Upload"):T("upload",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.73759 6.6778L7.50118 2.91421L7.5012 11.5L8.5012 11.5L8.50118 2.91422L12.2648 6.6778L12.9719 5.97069L8.35473 1.35355C8.15947 1.15829 7.84289 1.15829 7.64762 1.35355L3.03048 5.9707L3.73759 6.6778Z" fill="black" fill-opacity="0.9"/>
<path d="M2 11V13C2 13.5523 2.44772 14 3 14H13C13.5523 14 14 13.5523 14 13V11H13V13H3V11H2Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("usb","Usb"):T("usb",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.5 6H5.5V5H7.5V6Z" fill="black" fill-opacity="0.9"/>
<path d="M8.5 6H10.5V5H8.5V6Z" fill="black" fill-opacity="0.9"/>
<path d="M4 8V2.5C4 2.22386 4.22386 2 4.5 2H11.5C11.7761 2 12 2.22386 12 2.5V8C12.5523 8 13 8.44772 13 9V14C13 14.5523 12.5523 15 12 15H4C3.44772 15 3 14.5523 3 14V9C3 8.44772 3.44772 8 4 8ZM5 8H11V3H5V8ZM4 9V14H12V9H4Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("user-add","UserAdd"):T("user-add",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 8.5C9.933 8.5 11.5 6.933 11.5 5C11.5 3.067 9.933 1.5 8 1.5C6.067 1.5 4.5 3.067 4.5 5C4.5 6.933 6.067 8.5 8 8.5ZM8 7.5C6.61929 7.5 5.5 6.38071 5.5 5C5.5 3.61929 6.61929 2.5 8 2.5C9.38071 2.5 10.5 3.61929 10.5 5C10.5 6.38071 9.38071 7.5 8 7.5Z" fill="black"/>
<path d="M11.5 10.9864C10.3864 10.6698 9.21367 10.5 8 10.5C6.0334 10.5 4.17435 10.9457 2.5 11.7398V13.5H9.5V14.5H2C1.72386 14.5 1.5 14.2761 1.5 14V11.7246C1.5 11.3547 1.70302 11.0122 2.03686 10.8528C3.8494 9.98708 5.86651 9.5 8 9.5C9.20942 9.5 10.3814 9.65652 11.5 9.9498V10.9864Z" fill="black"/>
<path d="M12.75 13.75V16H13.75V13.75H16V12.75H13.75V10.5H12.75V12.75H10.5V13.75H12.75Z" fill="black"/>
</svg>
`),n==="develop"?V("user-avatar","UserAvatar"):T("user-avatar",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 10.5C9.24124 10.5 10.4221 10.8126 11.5 11.3795V12.5L12.5 12.5V11.3584C12.5 11.0106 12.3213 10.6842 12.0145 10.5204C10.7893 9.86653 9.43252 9.5 8 9.5C6.56748 9.5 5.21075 9.86653 3.9855 10.5204C3.67873 10.6842 3.5 11.0106 3.5 11.3584V12.5H4.5V11.3795C5.57794 10.8126 6.75876 10.5 8 10.5Z" fill="black"/>
<path d="M10.5 6C10.5 7.38071 9.38071 8.5 8 8.5C6.61929 8.5 5.5 7.38071 5.5 6C5.5 4.61929 6.61929 3.5 8 3.5C9.38071 3.5 10.5 4.61929 10.5 6ZM9.5 6C9.5 5.17157 8.82843 4.5 8 4.5C7.17157 4.5 6.5 5.17157 6.5 6C6.5 6.82843 7.17157 7.5 8 7.5C8.82843 7.5 9.5 6.82843 9.5 6Z" fill="black"/>
<path d="M2.5 1.5C1.94772 1.5 1.5 1.94772 1.5 2.5V13.5C1.5 14.0523 1.94772 14.5 2.5 14.5H13.5C14.0523 14.5 14.5 14.0523 14.5 13.5V2.5C14.5 1.94772 14.0523 1.5 13.5 1.5H2.5ZM13.5 2.5V13.5H2.5L2.5 2.5H13.5Z" fill="black"/>
</svg>
`),n==="develop"?V("user-circle","UserCircle"):T("user-circle",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<g opacity="0.9">
<path d="M8 9C9.53535 9 10.78 7.75535 10.78 6.22C10.78 4.68465 9.53535 3.44 8 3.44C6.46465 3.44 5.22 4.68465 5.22 6.22C5.22 7.75535 6.46465 9 8 9ZM8 8C7.01693 8 6.22 7.20307 6.22 6.22C6.22 5.23693 7.01693 4.44 8 4.44C8.98307 4.44 9.78 5.23693 9.78 6.22C9.78 7.20307 8.98307 8 8 8Z" fill="black"/>
<path d="M8 15C11.866 15 15 11.866 15 8C15 4.13401 11.866 1 8 1C4.13401 1 1 4.13401 1 8C1 11.866 4.13401 15 8 15ZM12.9955 11.3246C11.4748 10.4765 9.78555 10 7.99998 10C6.21441 10 4.52519 10.4765 3.00451 11.3246C2.36991 10.3729 2 9.22966 2 8C2 4.68629 4.68629 2 8 2C11.3137 2 14 4.68629 14 8C14 9.22966 13.6301 10.3729 12.9955 11.3246ZM12.3632 12.1185C11.2693 13.277 9.71909 14 8 14C6.2809 14 4.73066 13.277 3.63675 12.1185C4.9805 11.3976 6.45282 11 7.99998 11C9.54714 11 11.0195 11.3976 12.3632 12.1185Z" fill="black"/>
</g>
</svg>
`),n==="develop"?V("user-clear","UserClear"):T("user-clear",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8 8.5C9.933 8.5 11.5 6.933 11.5 5C11.5 3.067 9.933 1.5 8 1.5C6.067 1.5 4.5 3.067 4.5 5C4.5 6.933 6.067 8.5 8 8.5ZM8 7.5C6.61929 7.5 5.5 6.38071 5.5 5C5.5 3.61929 6.61929 2.5 8 2.5C9.38071 2.5 10.5 3.61929 10.5 5C10.5 6.38071 9.38071 7.5 8 7.5Z" fill="black"/>
<path d="M10.5 10.7452C9.69127 10.5844 8.85582 10.5 8 10.5C6.0334 10.5 4.17435 10.9457 2.5 11.7398V13.5H10.5V14.5H2C1.72386 14.5 1.5 14.2761 1.5 14V11.7246C1.5 11.3547 1.70302 11.0122 2.03686 10.8528C3.8494 9.98708 5.86651 9.5 8 9.5C8.85386 9.5 9.68908 9.57802 10.5 9.7271V10.7452Z" fill="black"/>
<path d="M11.4038 14.2929L12.9947 12.702L11.4037 11.1109L12.1108 10.4038L13.7018 11.9949L15.2929 10.4038L16 11.1109L14.4089 12.702L15.9999 14.2929L15.2928 15L13.7018 13.4091L12.1109 15L11.4038 14.2929Z" fill="black"/>
</svg>
`),n==="develop"?V("user-talk","UserTalk"):T("user-talk",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.3284 7.82844C14.8905 6.26634 14.8905 3.73368 13.3284 2.17158L14.0355 1.46448C15.9881 3.4171 15.9881 6.58292 14.0355 8.53555L13.3284 7.82844Z" fill="black" fill-opacity="0.9"/>
<path d="M11 5C11 6.933 9.433 8.5 7.5 8.5C5.567 8.5 4 6.933 4 5C4 3.067 5.567 1.5 7.5 1.5C9.433 1.5 11 3.067 11 5ZM10 5C10 3.61929 8.88071 2.5 7.5 2.5C6.11929 2.5 5 3.61929 5 5C5 6.38071 6.11929 7.5 7.5 7.5C8.88071 7.5 10 6.38071 10 5Z" fill="black" fill-opacity="0.9"/>
<path d="M13.4631 10.8528C13.797 11.0122 14 11.3547 14 11.7246L14 14C14 14.2761 13.7761 14.5 13.5 14.5L1.5 14.5C1.22386 14.5 1 14.2761 1 14V11.7246C1 11.3547 1.20302 11.0122 1.53686 10.8528C3.3494 9.98707 5.36651 9.5 7.5 9.5C9.63349 9.5 11.6506 9.98708 13.4631 10.8528ZM7.5 10.5C5.5334 10.5 3.67434 10.9457 2 11.7398L2 13.5H13V11.7398C11.3257 10.9457 9.4666 10.5 7.5 10.5Z" fill="black" fill-opacity="0.9"/>
<path d="M11.9142 3.58577C12.6953 4.36682 12.6953 5.63315 11.9142 6.4142L12.6213 7.1213C13.7929 5.94973 13.7929 4.05023 12.6213 2.87866L11.9142 3.58577Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("user","User"):T("user",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 5C11.5 6.933 9.933 8.5 8 8.5C6.067 8.5 4.5 6.933 4.5 5C4.5 3.067 6.067 1.5 8 1.5C9.933 1.5 11.5 3.067 11.5 5ZM10.5 5C10.5 3.61929 9.38071 2.5 8 2.5C6.61929 2.5 5.5 3.61929 5.5 5C5.5 6.38071 6.61929 7.5 8 7.5C9.38071 7.5 10.5 6.38071 10.5 5Z" fill="black" fill-opacity="0.9"/>
<path d="M13.9631 10.8528C14.297 11.0122 14.5 11.3547 14.5 11.7246V14C14.5 14.2761 14.2761 14.5 14 14.5H2C1.72386 14.5 1.5 14.2761 1.5 14V11.7246C1.5 11.3547 1.70302 11.0122 2.03686 10.8528C3.8494 9.98708 5.86651 9.5 8 9.5C10.1335 9.5 12.1506 9.98708 13.9631 10.8528ZM8 10.5C6.0334 10.5 4.17435 10.9457 2.5 11.7398V13.5H13.5V11.7398C11.8257 10.9457 9.9666 10.5 8 10.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("usergroup-add","UsergroupAdd"):T("usergroup-add",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.2349 12.75V14.5H14.2349V12.75H15.9849V11.75H14.2349V10H13.2349V11.75H11.4849V12.75H13.2349Z" fill="black"/>
<path d="M7.46171 1.34645C7.02232 1.12482 6.52575 1 6.00003 1C4.2051 1 2.75003 2.45507 2.75003 4.25C2.75003 6.02947 4.18015 7.47491 5.95373 7.49968V6.49953C4.73246 6.47488 3.75003 5.47717 3.75003 4.25C3.75003 3.00736 4.75739 2 6.00003 2C6.2937 2 6.57424 2.05626 6.83144 2.1586L7.46171 1.34645Z" fill="black"/>
<path d="M5.95373 8.22094C4.01922 8.22779 2.18917 8.66419 0.540929 9.43593C0.204537 9.59344 0 9.9372 0 10.3086V12.5C0 12.7761 0.223857 13 0.5 13H2.85709V12H1V10.3252C2.51071 9.62379 4.18421 9.22774 5.95373 9.22095V8.22094Z" fill="black"/>
<path d="M13.2499 5.06354C13.2499 6.85846 11.7948 8.31354 9.99992 8.31354C8.20499 8.31354 6.74992 6.85846 6.74992 5.06354C6.74992 3.26861 8.20499 1.81354 9.99992 1.81354C11.7948 1.81354 13.2499 3.26861 13.2499 5.06354ZM12.2499 5.06354C12.2499 3.8209 11.2426 2.81354 9.99992 2.81354C8.75728 2.81354 7.74992 3.8209 7.74992 5.06354C7.74992 6.30618 8.75728 7.31354 9.99992 7.31354C11.2426 7.31354 12.2499 6.30618 12.2499 5.06354Z" fill="black"/>
<path d="M12 10.5988C11.35 10.4879 10.6821 10.43 9.99997 10.43C8.21334 10.43 6.52384 10.8269 4.99996 11.5344V13.5H12V14.5H4.49996C4.22382 14.5 3.99996 14.2761 3.99996 14V11.5178C3.99996 11.1464 4.2045 10.8026 4.54089 10.6451C6.20227 9.86723 8.04837 9.43005 9.99997 9.43005C10.6806 9.43005 11.3484 9.48322 12 9.58548V10.5988Z" fill="black"/>
</svg>
`),n==="develop"?V("usergroup-clear","UsergroupClear"):T("usergroup-clear",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M7.46171 1.34645C7.02232 1.12482 6.52575 1 6.00003 1C4.2051 1 2.75003 2.45507 2.75003 4.25C2.75003 6.02947 4.18015 7.47491 5.95373 7.49968V6.49953C4.73246 6.47488 3.75003 5.47717 3.75003 4.25C3.75003 3.00736 4.75739 2 6.00003 2C6.2937 2 6.57424 2.05626 6.83144 2.1586L7.46171 1.34645Z" fill="black"/>
<path d="M5.95373 8.22094C4.01922 8.22779 2.18917 8.66419 0.540929 9.43593C0.204537 9.59344 0 9.9372 0 10.3086V12.5C0 12.7761 0.223857 13 0.5 13H2.85709V12H1V10.3252C2.51071 9.62379 4.18421 9.22774 5.95373 9.22095V8.22094Z" fill="black"/>
<path d="M13.2499 5.06354C13.2499 6.85846 11.7948 8.31354 9.99992 8.31354C8.20499 8.31354 6.74992 6.85846 6.74992 5.06354C6.74992 3.26861 8.20499 1.81354 9.99992 1.81354C11.7948 1.81354 13.2499 3.26861 13.2499 5.06354ZM12.2499 5.06354C12.2499 3.8209 11.2426 2.81354 9.99992 2.81354C8.75728 2.81354 7.74992 3.8209 7.74992 5.06354C7.74992 6.30618 8.75728 7.31354 9.99992 7.31354C11.2426 7.31354 12.2499 6.30618 12.2499 5.06354Z" fill="black"/>
<path d="M11 10.4718C10.6704 10.4442 10.3369 10.43 9.99997 10.43C8.21334 10.43 6.52384 10.8269 4.99996 11.5344V13.5H10.5V14.5H4.49996C4.22382 14.5 3.99996 14.2761 3.99996 14V11.5178C3.99996 11.1464 4.2045 10.8026 4.54089 10.6451C6.20227 9.86723 8.04837 9.43005 9.99997 9.43005C10.3366 9.43005 10.6701 9.44305 11 9.46857V10.4718Z" fill="black"/>
<path d="M13.1369 12.344L11.6881 13.7929L12.3952 14.5L13.844 13.0512L15.2929 14.5L16 13.7929L14.5512 12.344L16.0001 10.8951L15.293 10.188L13.844 11.6369L12.3951 10.188L11.688 10.8951L13.1369 12.344Z" fill="black"/>
</svg>
`),n==="develop"?V("usergroup","Usergroup"):T("usergroup",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6.00003 1C6.52575 1 7.02232 1.12482 7.46171 1.34645L6.83144 2.1586C6.57424 2.05626 6.2937 2 6.00003 2C4.75739 2 3.75003 3.00736 3.75003 4.25C3.75003 5.47717 4.73246 6.47488 5.95373 6.49953V7.49968C4.18015 7.47491 2.75003 6.02947 2.75003 4.25C2.75003 2.45507 4.2051 1 6.00003 1Z" fill="black"/>
<path d="M0.540929 9.43593C2.18917 8.66419 4.01922 8.22779 5.95373 8.22094V9.22095C4.18421 9.22774 2.51071 9.62379 1 10.3252V12H2.85709V13H0.5C0.223857 13 0 12.7761 0 12.5V10.3086C0 9.9372 0.204537 9.59344 0.540929 9.43593Z" fill="black"/>
<path d="M9.99992 8.31354C8.20499 8.31354 6.74992 6.85846 6.74992 5.06354C6.74992 3.26861 8.20499 1.81354 9.99992 1.81354C11.7948 1.81354 13.2499 3.26861 13.2499 5.06354C13.2499 6.85846 11.7948 8.31354 9.99992 8.31354ZM9.99992 7.31354C11.2426 7.31354 12.2499 6.30618 12.2499 5.06354C12.2499 3.8209 11.2426 2.81354 9.99992 2.81354C8.75728 2.81354 7.74992 3.8209 7.74992 5.06354C7.74992 6.30618 8.75728 7.31354 9.99992 7.31354Z" fill="black"/>
<path d="M16 11.5178C16 11.1464 15.7954 10.8026 15.459 10.6451C13.7977 9.86723 11.9516 9.43005 9.99997 9.43005C8.04837 9.43005 6.20227 9.86723 4.54089 10.6451C4.2045 10.8026 3.99996 11.1464 3.99996 11.5178V14C3.99996 14.2761 4.22382 14.5 4.49996 14.5H15.5C15.7761 14.5 16 14.2761 16 14V11.5178ZM15 11.5344V13.5H4.99996V11.5344C6.52384 10.8269 8.21334 10.43 9.99997 10.43C11.7866 10.43 13.4761 10.8269 15 11.5344Z" fill="black"/>
</svg>
`),n==="develop"?V("video","Video"):T("video",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.05 7.74017C11.25 7.85564 11.25 8.14432 11.05 8.25979L5.95 11.2043C5.75 11.3198 5.5 11.1754 5.5 10.9445L5.5 5.0555C5.5 4.82456 5.75 4.68023 5.95 4.7957L11.05 7.74017ZM6.5 6.26794V9.73204L9.5 7.99998L6.5 6.26794Z" fill="black" fill-opacity="0.9"/>
<path d="M2 3C2 2.44772 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V3ZM3 3L3 13H13V3H3Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("view-column","ViewColumn"):T("view-column",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3.5 2V14H4.5L4.5 2H3.5ZM7.5 14L7.5 2H8.5L8.5 14H7.5ZM11.5 14L11.5 2H12.5L12.5 14H11.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("view-list","ViewList"):T("view-list",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14 4.5H2V3.5H14V4.5Z" fill="black" fill-opacity="0.9"/>
<path d="M14 8.5H2V7.5H14V8.5Z" fill="black" fill-opacity="0.9"/>
<path d="M2 12.5H14V11.5H2V12.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("view-module","ViewModule"):T("view-module",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4 7.5L11 7.5V8.5L4 8.5V7.5Z" fill="black" fill-opacity="0.9"/>
<path d="M10 10L4 10V11H10V10Z" fill="black" fill-opacity="0.9"/>
<path d="M2 3C2 2.44772 2.44772 2 3 2H13C13.5523 2 14 2.44772 14 3V13C14 13.5523 13.5523 14 13 14H3C2.44772 14 2 13.5523 2 13V3ZM3 3L3 5H13V3H3ZM3 6L3 13H13V6H3Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("wallet","Wallet"):T("wallet",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M11.5 4.5L13.5 4.5C14.0523 4.5 14.5 4.94772 14.5 5.5V12C14.5 12.5523 14.0523 13 13.5 13H2.5C1.94772 13 1.5 12.5523 1.5 12V3C1.5 2.44771 1.94772 2 2.5 2H10.5C11.0523 2 11.5 2.44771 11.5 3V4.5ZM10.5 3L2.5 3V4.5L10.5 4.5V3ZM13.5 5.5H2.5L2.5 12H13.5V5.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("wifi","Wifi"):T("wifi",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M10.1536 10.7038L10.8516 9.98785C10.0271 9.14905 9.02319 8.68872 7.98486 8.68872C6.95923 8.68872 5.96704 9.13806 5.14819 9.9577L5.84595 10.6735C6.50903 10.0049 7.26538 9.68872 7.98486 9.68872C8.71533 9.68872 9.4834 10.0145 10.1536 10.7038Z" fill="black" fill-opacity="0.9"/>
<path d="M12.1785 8.6272L12.8767 7.91101C11.5029 6.49567 9.77637 5.71283 7.9856 5.71283C6.20728 5.71283 4.49219 6.48474 3.12329 7.88123L3.82153 8.59729C5.02856 7.35767 6.50391 6.71283 7.9856 6.71283C9.479 6.71283 10.9658 7.36804 12.1785 8.6272Z" fill="black" fill-opacity="0.9"/>
<path d="M14.1331 6.62256L14.8315 5.90631C12.9297 3.94031 10.5042 2.8493 7.98584 2.8493C5.47998 2.8493 3.06616 3.92938 1.1687 5.87677L1.86694 6.59296C3.59912 4.80591 5.77148 3.8493 7.98584 3.8493C10.2124 3.8493 12.3962 4.81647 14.1331 6.62256Z" fill="black" fill-opacity="0.9"/>
<path d="M9 12.5C9 13.0523 8.55225 13.5 8 13.5C7.44775 13.5 7 13.0523 7 12.5C7 11.9477 7.44775 11.5 8 11.5C8.55225 11.5 9 11.9477 9 12.5Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("zoom-in","ZoomIn"):T("zoom-in",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 7V9H7V7H9V6H7V4H6V6H4V7H6Z" fill="black" fill-opacity="0.9"/>
<path d="M9.51099 10.2181C8.69245 10.8812 7.64973 11.2784 6.51424 11.2784C3.88302 11.2784 1.75 9.14541 1.75 6.51421C1.75 3.88301 3.88302 1.75 6.51424 1.75C9.14545 1.75 11.2785 3.88301 11.2785 6.51421C11.2785 7.64972 10.8812 8.69245 10.2181 9.511L13.7494 13.0423L13.0423 13.7494L9.51099 10.2181ZM10.2785 6.51421C10.2785 4.4353 8.59317 2.75 6.51424 2.75C4.4353 2.75 2.75 4.4353 2.75 6.51421C2.75 8.59312 4.4353 10.2784 6.51424 10.2784C8.59317 10.2784 10.2785 8.59312 10.2785 6.51421Z" fill="black" fill-opacity="0.9"/>
</svg>
`),n==="develop"?V("zoom-out","ZoomOut"):T("zoom-out",`<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9 7H4V6H9V7Z" fill="black" fill-opacity="0.9"/>
<path d="M9.51099 10.2181C8.69245 10.8812 7.64973 11.2784 6.51424 11.2784C3.88302 11.2784 1.75 9.14541 1.75 6.51421C1.75 3.88301 3.88302 1.75 6.51424 1.75C9.14545 1.75 11.2785 3.88301 11.2785 6.51421C11.2785 7.64972 10.8812 8.69245 10.2181 9.511L13.7494 13.0423L13.0423 13.7494L9.51099 10.2181ZM10.2785 6.51421C10.2785 4.4353 8.59317 2.75 6.51424 2.75C4.4353 2.75 2.75 4.4353 2.75 6.51421C2.75 8.59312 4.4353 10.2784 6.51424 10.2784C8.59317 10.2784 10.2785 8.59312 10.2785 6.51421Z" fill="black" fill-opacity="0.9"/>
</svg>
`)).css(Zr||(Zr=Ge(["",""])),vd)}});v4(H4).use(l2).mount("#app");export{Ce as F,y4 as _,A3 as a,un as b,As as c,Jo as d,Y1 as e,os as f,a5 as g,Ns as h,Pt as i,di as j,yd as k,js as l,Ro as n,C5 as o,us as r,xd as v,wd as w};
