import{B as k,k as l,y as m,C as q}from"./utils.jAVDF0d8.js";const c=[];function j(s,t){return{subscribe:x(s,t).subscribe}}function x(s,t=l){let n=null;const o=new Set;function u(r){if(q(s,r)&&(s=r,n)){const i=!c.length;for(const e of o)e[1](),c.push(e,s);if(i){for(let e=0;e<c.length;e+=2)c[e][0](c[e+1]);c.length=0}}}function b(r){u(r(s))}function f(r,i=l){const e=[r,i];return o.add(e),o.size===1&&(n=t(u,b)||l),r(s),()=>{o.delete(e),o.size===0&&n&&(n(),n=null)}}return{set:u,update:b,subscribe:f}}function B(s,t,n){const o=!Array.isArray(s),u=o?[s]:s;if(!u.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const b=t.length<2;return j(n,(f,r)=>{let i=!1;const e=[];let p=0,d=l;const g=()=>{if(p)return;d();const a=t(o?e[0]:e,f,r);b?f(a):d=typeof a=="function"?a:l},v=u.map((a,_)=>k(a,w=>{e[_]=w,p&=~(1<<_),i&&g()},()=>{p|=1<<_}));return i=!0,g(),function(){m(v),d(),i=!1}})}function T(s){return{subscribe:s.subscribe.bind(s)}}function C(s){let t;return k(s,n=>t=n)(),t}var y;const z=((y=globalThis.__sveltekit_ij1apf)==null?void 0:y.base)??"/slick-portfolio-svelte-5";var h;const E=((h=globalThis.__sveltekit_ij1apf)==null?void 0:h.assets)??z;export{j as a,z as b,E as c,B as d,C as g,T as r,x as w};
