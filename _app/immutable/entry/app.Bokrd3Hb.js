const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["../nodes/0.CbrQOGna.js","../chunks/disclose-version.Cfp-rwoP.js","../chunks/utils.jAVDF0d8.js","../chunks/large.zmy2y6xi.js","../chunks/legacy.Ccq7PQRh.js","../chunks/base.Bz4BoCbx.js","../chunks/paths.BVo4FybB.js","../chunks/index-client.BSQKl7cS.js","../chunks/stores.BVrxpfWE.js","../chunks/button.Dq0b4G-Q.js","../chunks/misc.Dzvx5Zh0.js","../chunks/index.CmJjl5Oi.js","../chunks/index.DOVGwIql.js","../chunks/events.HRKBQ3CI.js","../chunks/Icon.CjhmIQPj.js","../chunks/action.DS_UQsBR.js","../chunks/separator.hPvgMeVx.js","../chunks/index.CQuzh-4q.js","../assets/0.Blcs4VZe.css","../nodes/1.BzfTjQ8M.js","../chunks/entry.zmblRAfR.js","../nodes/2.A6uAe1IV.js","../chunks/h1.DdSg_88w.js","../chunks/skills.YlO8Tf5u.js","../chunks/assets.ChDJGqAu.js","../nodes/3.XfztUQp2.js","../chunks/empty-result.CAcqLyKb.js","../chunks/fancy-card.bvoqN_FY.js","../chunks/titled-page.CYCGkwz5.js","../chunks/base-page.JIjin4i0.js","../assets/fancy-card.BleGwta9.css","../chunks/index.DDBfyhzG.js","../chunks/avatar-fallback.1BoweEd7.js","../chunks/index.Bjy3mYpe.js","../chunks/education.BcxOGJXo.js","../nodes/4.8d7CuYhK.js","../chunks/markdown.BTNokI61.js","../assets/markdown.C3j3e_Na.css","../chunks/screenshot-card.Ck9HhbTL.js","../chunks/card-footer.Bnu4S4Sa.js","../nodes/5.DEEekaUc.js","../chunks/skill-badge.CafXmfLS.js","../chunks/experience.D00lWNjr.js","../nodes/6.Ck8GeGnv.js","../nodes/7.CkkxfRWp.js","../chunks/projects.CM4C2BzA.js","../nodes/8.ChRk4hKG.js","../nodes/9.BPtRSaZ3.js","../nodes/10.DKAig0YB.js","../nodes/11.C7MAnF0_.js","../nodes/12.DaCklyeD.js"])))=>i.map(i=>d[i]);
var B=a=>{throw TypeError(a)};var F=(a,t,r)=>t.has(a)||B("Cannot "+r);var u=(a,t,r)=>(F(a,t,"read from private field"),r?r.call(a):t.get(a)),k=(a,t,r)=>t.has(a)?B("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(a):t.set(a,r),x=(a,t,r,o)=>(F(a,t,"write to private field"),o?o.call(a,r):t.set(a,r),r);import{m as U,V as H,h as J,E as K,j as Q,o as X,T as Z,g,a8 as M,b as L,aj as $,ak as tt,ah as et,p as rt,u as st,q as at,al as ot,f as A,a as nt,e as V,s as it,c as ct,t as ut,r as lt,d as w}from"../chunks/utils.jAVDF0d8.js";import{i as _t,m as mt,u as dt,e as D,a as b,b as N,t as ft,c as ht}from"../chunks/disclose-version.Cfp-rwoP.js";import{p as I,o as vt,a as gt,i as S,b as C}from"../chunks/index-client.BSQKl7cS.js";function j(a,t,r){U&&H();var o=a,n,c;J(()=>{n!==(n=t())&&(c&&(Z(c),c=null),n&&(c=Q(()=>r(o,n))))},K),U&&(o=X)}function Et(a){return class extends yt{constructor(t){super({component:a,...t})}}}var E,m;class yt{constructor(t){k(this,E);k(this,m);var c;var r=new Map,o=(s,e)=>{var d=et(e);return r.set(s,d),d};const n=new Proxy({...t.props||{},$$events:{}},{get(s,e){return g(r.get(e)??o(e,Reflect.get(s,e)))},has(s,e){return e===M?!0:(g(r.get(e)??o(e,Reflect.get(s,e))),Reflect.has(s,e))},set(s,e,d){return L(r.get(e)??o(e,d),d),Reflect.set(s,e,d)}});x(this,m,(t.hydrate?_t:mt)(t.component,{target:t.target,anchor:t.anchor,props:n,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((c=t==null?void 0:t.props)!=null&&c.$$host)||t.sync===!1)&&$(),x(this,E,n.$$events);for(const s of Object.keys(u(this,m)))s==="$set"||s==="$destroy"||s==="$on"||tt(this,s,{get(){return u(this,m)[s]},set(e){u(this,m)[s]=e},enumerable:!0});u(this,m).$set=s=>{Object.assign(n,s)},u(this,m).$destroy=()=>{dt(u(this,m))}}$set(t){u(this,m).$set(t)}$on(t,r){u(this,E)[t]=u(this,E)[t]||[];const o=(...n)=>r.call(this,...n);return u(this,E)[t].push(o),()=>{u(this,E)[t]=u(this,E)[t].filter(n=>n!==o)}}$destroy(){u(this,m).$destroy()}}E=new WeakMap,m=new WeakMap;const Pt="modulepreload",Rt=function(a,t){return new URL(a,t).href},G={},l=function(t,r,o){let n=Promise.resolve();if(r&&r.length>0){const s=document.getElementsByTagName("link"),e=document.querySelector("meta[property=csp-nonce]"),d=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));n=Promise.allSettled(r.map(_=>{if(_=Rt(_,o),_ in G)return;G[_]=!0;const y=_.endsWith(".css"),T=y?'[rel="stylesheet"]':"";if(!!o)for(let f=s.length-1;f>=0;f--){const v=s[f];if(v.href===_&&(!y||v.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${_}"]${T}`))return;const i=document.createElement("link");if(i.rel=y?"stylesheet":Pt,y||(i.as="script"),i.crossOrigin="",i.href=_,d&&i.setAttribute("nonce",d),document.head.appendChild(i),y)return new Promise((f,v)=>{i.addEventListener("load",f),i.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${_}`)))})}))}function c(s){const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=s,window.dispatchEvent(e),!e.defaultPrevented)throw s}return n.then(s=>{for(const e of s||[])e.status==="rejected"&&c(e.reason);return t().catch(c)})},Vt={};var bt=N('<div id="svelte-announcer" aria-live="assertive" aria-atomic="true" style="position: absolute; left: 0; top: 0; clip: rect(0 0 0 0); clip-path: inset(50%); overflow: hidden; white-space: nowrap; width: 1px; height: 1px"><!></div>'),pt=N("<!> <!>",1);function At(a,t){rt(t,!0);let r=I(t,"components",23,()=>[]),o=I(t,"data_0",3,null),n=I(t,"data_1",3,null);st(()=>t.stores.page.set(t.page)),at(()=>{t.stores,t.page,t.constructors,r(),t.form,o(),n(),t.stores.page.notify()});let c=V(!1),s=V(!1),e=V(null);vt(()=>{const P=t.stores.page.subscribe(()=>{g(c)&&(L(s,!0),ot().then(()=>{L(e,gt(document.title||"untitled page"))}))});return L(c,!0),P});const d=w(()=>t.constructors[1]);var _=pt(),y=A(_);S(y,()=>t.constructors[1],P=>{var i=D();const f=w(()=>t.constructors[0]);var v=A(i);j(v,()=>g(f),(R,O)=>{C(O(R,{get data(){return o()},get form(){return t.form},children:(h,Lt)=>{var q=D(),W=A(q);j(W,()=>g(d),(Y,z)=>{C(z(Y,{get data(){return n()},get form(){return t.form}}),p=>r()[1]=p,()=>{var p;return(p=r())==null?void 0:p[1]})}),b(h,q)},$$slots:{default:!0}}),h=>r()[0]=h,()=>{var h;return(h=r())==null?void 0:h[0]})}),b(P,i)},P=>{var i=D();const f=w(()=>t.constructors[0]);var v=A(i);j(v,()=>g(f),(R,O)=>{C(O(R,{get data(){return o()},get form(){return t.form}}),h=>r()[0]=h,()=>{var h;return(h=r())==null?void 0:h[0]})}),b(P,i)});var T=it(y,2);S(T,()=>g(c),P=>{var i=bt(),f=ct(i);S(f,()=>g(s),v=>{var R=ft();ut(()=>ht(R,g(e))),b(v,R)}),lt(i),b(P,i)}),b(a,_),nt()}const wt=Et(At),Dt=[()=>l(()=>import("../nodes/0.CbrQOGna.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18]),import.meta.url),()=>l(()=>import("../nodes/1.BzfTjQ8M.js"),__vite__mapDeps([19,1,2,4,20,6]),import.meta.url),()=>l(()=>import("../nodes/2.A6uAe1IV.js"),__vite__mapDeps([21,1,2,4,8,6,5,7,22,9,10,11,14,17,13,23,24]),import.meta.url),()=>l(()=>import("../nodes/3.XfztUQp2.js"),__vite__mapDeps([25,1,2,7,8,6,5,4,26,3,27,28,22,29,10,30,24,31,32,13,33,11,17,34]),import.meta.url),()=>l(()=>import("../nodes/4.8d7CuYhK.js"),__vite__mapDeps([35,34,24,6,2,1,7,8,5,4,29,22,26,3,36,37,38,9,10,11,39,12,13,14,15,16,33]),import.meta.url),()=>l(()=>import("../nodes/5.DEEekaUc.js"),__vite__mapDeps([40,1,2,7,8,6,5,4,26,3,27,28,22,29,10,30,24,31,41,9,11,17,13,32,33,42,23]),import.meta.url),()=>l(()=>import("../nodes/6.Ck8GeGnv.js"),__vite__mapDeps([43,42,24,6,2,23,1,7,8,5,4,29,22,26,3,36,37,38,9,10,11,39,12,13,14,15,16,33]),import.meta.url),()=>l(()=>import("../nodes/7.CkkxfRWp.js"),__vite__mapDeps([44,1,2,7,8,6,5,4,26,3,27,28,22,29,10,30,24,31,9,11,17,13,41,32,33,39,15,16,45,23]),import.meta.url),()=>l(()=>import("../nodes/8.ChRk4hKG.js"),__vite__mapDeps([46,45,24,6,2,23,1,7,8,5,4,29,22,26,3,36,37,38,9,10,11,39,12,13,14,15,16,33]),import.meta.url),()=>l(()=>import("../nodes/9.BPtRSaZ3.js"),__vite__mapDeps([47,1,2,4,5,6,7,28,22,29,9,10,11]),import.meta.url),()=>l(()=>import("../nodes/10.DKAig0YB.js"),__vite__mapDeps([48,1,2,7,8,6,5,4,26,3,27,28,22,29,10,30,32,13,16,17,24,34,42,23,45]),import.meta.url),()=>l(()=>import("../nodes/11.C7MAnF0_.js"),__vite__mapDeps([49,1,2,7,8,6,5,4,26,3,27,28,22,29,10,30,16,23,24]),import.meta.url),()=>l(()=>import("../nodes/12.DaCklyeD.js"),__vite__mapDeps([50,23,24,6,2,1,7,8,5,4,29,22,26,3,36,37,33,11,16,42,45]),import.meta.url)],It=[],St={"/":[2],"/education":[3],"/education/[slug]":[4],"/experience":[5],"/experience/[slug]":[6],"/projects":[7],"/projects/[slug]":[8],"/resume":[9],"/search":[10],"/skills":[11],"/skills/[slug]":[12]},Ct={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{St as dictionary,Ct as hooks,Vt as matchers,Dt as nodes,wt as root,It as server_loads};