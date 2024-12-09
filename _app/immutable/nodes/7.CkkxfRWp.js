import{s as bt,e as ee,f as fe,a as b,d as ut,b as $,t as Ke,c as Se}from"../chunks/disclose-version.Cfp-rwoP.js";import{al as Mt,an as wn,am as ln,p as Oe,D as q,b as $e,z as V,g,F as It,f as K,t as Z,N as Tn,a as Pe,G as At,c as Te,r as pe,_ as ze,s as oe,n as je,H as Wt,d as mt,e as qt}from"../chunks/utils.jAVDF0d8.js";import{l as he,p as h,i as Ce,b as Ye,s as Vt,a as Dt,o as En}from"../chunks/index-client.BSQKl7cS.js";import{t as wt,c as un,r as cn,g as dn,o as Cn,I as Tt,e as Et,d as On}from"../chunks/stores.BVrxpfWE.js";import{M as pt,E as Pn}from"../chunks/empty-result.CAcqLyKb.js";import{F as An,a as In,C as Sn,S as Mn}from"../chunks/fancy-card.bvoqN_FY.js";import{l as it,q as _,w as ve,r as vt,E as fn,y as Ae,m as xe,n as _t,F as Dn,k as Ie,C as I,K as Yt,D as le,S as Rt,L as Be,M as Gt,z as ot,A as Fn,N as Ct,o as Ut,f as Rn,j as Ge,b as Le,a as ge,c as Nt,s as Ot,G as Nn,g as $t,d as Kn,h as jn}from"../chunks/base.Bz4BoCbx.js";import{A as Bn}from"../chunks/assets.ChDJGqAu.js";import{e as zn}from"../chunks/index.DDBfyhzG.js";import{i as We}from"../chunks/legacy.Ccq7PQRh.js";import{B as gn}from"../chunks/button.Dq0b4G-Q.js";import{u as Ln,g as Wn,R as mn,T as vn,a as hn}from"../chunks/index.CQuzh-4q.js";import{S as Vn}from"../chunks/skill-badge.CafXmfLS.js";import{A as Un,a as Hn,b as Xn}from"../chunks/avatar-fallback.1BoweEd7.js";import{B as Jt}from"../chunks/index.Bjy3mYpe.js";import{C as qn}from"../chunks/card-footer.Bnu4S4Sa.js";import{d as ht,w as de,g as Yn}from"../chunks/paths.BVo4FybB.js";import{u as bn,g as Qt,a as Zt,o as Pt,c as Kt,t as yt}from"../chunks/events.HRKBQ3CI.js";import{s as lt,w as Gn,c as $n,u as Jn,h as Qn,r as Zn}from"../chunks/action.DS_UQsBR.js";import{c as er,S as en}from"../chunks/separator.hPvgMeVx.js";import{b as Me}from"../chunks/misc.Dzvx5Zh0.js";import{c as tr}from"../chunks/index.CmJjl5Oi.js";import{P as zt}from"../chunks/projects.CM4C2BzA.js";import{S as nr}from"../chunks/skills.YlO8Tf5u.js";function rr(n){n.setAttribute("data-highlighted","")}function gt(n){n.removeAttribute("data-highlighted")}function sr(n,e=500){let o=null;return function(...a){const d=()=>{o=null,n(...a)};o&&clearTimeout(o),o=setTimeout(d,e)}}function tn(n){const{open:e,forceVisible:o,activeTrigger:a}=n;return ht([e,o,a],([d,c,s])=>(d||c)&&s!==null)}function me(n){it&&lt(1).then(()=>{const e=document.activeElement;!_(e)||e===n||(e.tabIndex=-1,n&&(n.tabIndex=0,n.focus()))})}function pn(){return Array.from(document.querySelectorAll('a[href]:not([tabindex="-1"]), button:not([disabled]):not([tabindex="-1"]), input:not([disabled]):not([tabindex="-1"]), select:not([disabled]):not([tabindex="-1"]), textarea:not([disabled]):not([tabindex="-1"]), [tabindex]:not([tabindex="-1"])'))}function or(n){const e=pn(),a=e.indexOf(n)+1,d=e[a];return a<e.length&&_(d)?d:null}function ar(n){const e=pn(),a=e.indexOf(n)-1,d=e[a];return a>=0&&_(d)?d:null}const ir=new Set(["Shift","Control","Alt","Meta","CapsLock","NumLock"]),lr={onMatch:me,getCurrentItem:()=>document.activeElement};function ur(n={}){const e={...lr,...n},o=ve(de([])),a=sr(()=>{o.update(()=>[])});return{typed:o,resetTyped:a,handleTypeaheadSearch:(c,s)=>{if(ir.has(c))return;const r=e.getCurrentItem(),l=Yn(o);if(!Array.isArray(l))return;l.push(c.toLowerCase()),o.set(l);const v=s.filter(m=>!(m.getAttribute("disabled")==="true"||m.getAttribute("aria-disabled")==="true"||m.hasAttribute("data-disabled"))),w=l.length>1&&l.every(m=>m===l[0])?l[0]:l.join(""),O=_(r)?v.indexOf(r):-1;let j=Gn(v,Math.max(O,0));w.length===1&&(j=j.filter(m=>m!==r));const U=j.find(m=>(m==null?void 0:m.innerText)&&m.innerText.toLowerCase().startsWith(w.toLowerCase()));_(U)&&U!==r&&e.onMatch(U),a()}}}const cr={floating:{},focusTrap:{},modal:{},escapeKeydown:{},portal:"body"},nn=(n,e)=>{n.dataset.escapee="";const{anchorElement:o,open:a,options:d}=e;if(!o||!a||!d)return{destroy:vt};const c={...cr,...d},s=[];if(c.portal!==null&&s.push(bn(n,c.portal).destroy),s.push(Ln(o,n,c.floating).destroy),c.focusTrap!==null){const{useFocusTrap:l}=$n({immediate:!0,escapeDeactivates:!1,allowOutsideClick:!0,returnFocusOnDeactivate:!1,fallbackFocus:n,...c.focusTrap});s.push(l(n).destroy)}c.modal!==null&&s.push(Jn(n,{onClose:()=>{_(o)&&(a.set(!1),o.focus())},shouldCloseOnInteractOutside:l=>!(l.defaultPrevented||_(o)&&o.contains(l.target)),...c.modal}).destroy),c.escapeKeydown!==null&&s.push(fn(n,{enabled:a,handler:()=>{a.set(!1)},...c.escapeKeydown}).destroy);const r=Ae(...s);return{destroy(){r()}}},dr={ltr:[...Rt,le.ARROW_RIGHT],rtl:[...Rt,le.ARROW_LEFT]},fr={ltr:[le.ARROW_LEFT],rtl:[le.ARROW_RIGHT]},rn=["menu","trigger"],gr={arrowSize:8,positioning:{placement:"bottom"},preventScroll:!0,closeOnEscape:!0,closeOnOutsideClick:!0,portal:void 0,loop:!1,dir:"ltr",defaultOpen:!1,typeahead:!0,closeOnItemClick:!0,onOutsideClick:void 0};function mr(n){const{name:e,selector:o}=Fn(n.selector),{preventScroll:a,arrowSize:d,positioning:c,closeOnEscape:s,closeOnOutsideClick:r,portal:l,forceVisible:v,typeahead:k,loop:w,closeFocus:O,disableFocusFirstItem:j,closeOnItemClick:S,onOutsideClick:U}=n.rootOptions,m=n.rootOpen,F=n.rootActiveTrigger,p=n.nextFocusable,B=n.prevFocusable,x=ve.writable(!1),M=ve(de(0)),z=ve(de(null)),H=ve(de("right")),C=ve(de(null)),Y=ve(ht([H,z],([t,i])=>u=>t===(i==null?void 0:i.side)&&vr(u,i==null?void 0:i.area))),{typed:L,handleTypeaheadSearch:X}=ur(),te=wt({...Qt(rn),...n.ids}),ue=tn({open:m,forceVisible:v,activeTrigger:F}),we=xe(e(),{stores:[ue,l,te.menu,te.trigger],returned:([t,i,u,f])=>({role:"menu",hidden:t?void 0:!0,style:_t({display:t?void 0:"none"}),id:u,"aria-labelledby":f,"data-state":t?"open":"closed","data-portal":Dn(i),tabindex:-1}),action:t=>{let i=vt;const u=Ie([ue,F,c,r,l,s],([T,J,ye,G,P,R])=>{i(),!(!T||!J)&&Mt().then(()=>{i(),xt(t,o),i=nn(t,{anchorElement:J,open:m,options:{floating:ye,modal:{closeOnInteractOutside:G,shouldCloseOnInteractOutside:E=>{var A;return(A=U.get())==null||A(E),!(E.defaultPrevented||_(J)&&J.contains(E.target))},onClose:()=>{m.set(!1),J.focus()},open:T},portal:Zt(t,P),escapeKeydown:R?void 0:null}}).destroy})}),f=Ae(I(t,"keydown",T=>{const J=T.target,ye=T.currentTarget;if(!_(J)||!_(ye)||!(J.closest('[role="menu"]')===ye))return;if(Yt.includes(T.key)&&on(T,w.get()??!1),T.key===le.TAB){T.preventDefault(),m.set(!1),sn(T,p,B);return}const P=T.key.length===1;!(T.ctrlKey||T.altKey||T.metaKey)&&P&&k.get()===!0&&X(T.key,at(ye))}));return{destroy(){u(),f(),i()}}}}),re=xe(e("trigger"),{stores:[m,te.menu,te.trigger],returned:([t,i,u])=>({"aria-controls":i,"aria-expanded":t,"data-state":t?"open":"closed",id:u,tabindex:0}),action:t=>(Ft(t),F.update(u=>u||t),{destroy:Ae(I(t,"click",u=>{const f=m.get(),T=u.currentTarget;_(T)&&(se(T),f||u.preventDefault())}),I(t,"keydown",u=>{const f=u.currentTarget;if(!_(f)||!(Rt.includes(u.key)||u.key===le.ARROW_DOWN))return;u.preventDefault(),se(f);const T=f.getAttribute("aria-controls");if(!T)return;const J=document.getElementById(T);if(!J)return;const ye=at(J);ye.length&&me(ye[0])}))})}),De=xe(e("arrow"),{stores:d,returned:t=>({"data-arrow":!0,style:_t({position:"absolute",width:`var(--arrow-size, ${t}px)`,height:`var(--arrow-size, ${t}px)`})})}),Ve=xe(e("overlay"),{stores:[ue],returned:([t])=>({hidden:t?void 0:!0,tabindex:-1,style:_t({display:t?void 0:"none"}),"aria-hidden":"true","data-state":pr(t)}),action:t=>{let i=vt;if(s.get()){const f=fn(t,{handler:()=>{m.set(!1);const T=F.get();T&&T.focus()}});f&&f.destroy&&(i=f.destroy)}const u=Ie([l],([f])=>{if(f===null)return vt;const T=Zt(t,f);return T===null?vt:bn(t,T).destroy});return{destroy(){i(),u()}}}}),Je=xe(e("item"),{returned:()=>({role:"menuitem",tabindex:-1,"data-orientation":"vertical"}),action:t=>(xt(t,o),Ft(t),{destroy:Ae(I(t,"pointerdown",u=>{const f=u.currentTarget;if(_(f)&&Be(f)){u.preventDefault();return}}),I(t,"click",u=>{const f=u.currentTarget;if(_(f)){if(Be(f)){u.preventDefault();return}if(u.defaultPrevented){me(f);return}S.get()&&lt(1).then(()=>{m.set(!1)})}}),I(t,"keydown",u=>{be(u)}),I(t,"pointermove",u=>{Xe(u)}),I(t,"pointerleave",u=>{rt(u)}),I(t,"focusin",u=>{Re(u)}),I(t,"focusout",u=>{Ne(u)}))})}),Qe=xe(e("group"),{returned:()=>t=>({role:"group","aria-labelledby":t})}),Ue=xe(e("group-label"),{returned:()=>t=>({id:t})}),Ee={defaultChecked:!1,disabled:!1},Ze=t=>{const i={...Ee,...t},u=i.checked??de(i.defaultChecked??null),f=Pt(u,i.onCheckedChange),T=de(i.disabled),J=xe(e("checkbox-item"),{stores:[f,T],returned:([P,R])=>({role:"menuitemcheckbox",tabindex:-1,"data-orientation":"vertical","aria-checked":ct(P)?"mixed":P?"true":"false","data-disabled":Ct(R),"data-state":Bt(P)}),action:P=>(xt(P,o),Ft(P),{destroy:Ae(I(P,"pointerdown",E=>{const A=E.currentTarget;if(_(A)&&Be(A)){E.preventDefault();return}}),I(P,"click",E=>{const A=E.currentTarget;if(_(A)){if(Be(A)){E.preventDefault();return}if(E.defaultPrevented){me(A);return}f.update(qe=>ct(qe)?!0:!qe),S.get()&&Mt().then(()=>{m.set(!1)})}}),I(P,"keydown",E=>{be(E)}),I(P,"pointermove",E=>{const A=E.currentTarget;if(_(A)){if(Be(A)){He(E);return}Xe(E,A)}}),I(P,"pointerleave",E=>{rt(E)}),I(P,"focusin",E=>{Re(E)}),I(P,"focusout",E=>{Ne(E)}))})}),ye=ht(f,P=>P===!0),G=ht(f,P=>P==="indeterminate");return{elements:{checkboxItem:J},states:{checked:f},helpers:{isChecked:ye,isIndeterminate:G},options:{disabled:T}}},et=(t={})=>{const i=t.value??de(t.defaultValue??null),u=Pt(i,t.onValueChange),f=xe(e("radio-group"),{returned:()=>({role:"group"})}),T={disabled:!1},J=xe(e("radio-item"),{stores:[u],returned:([G])=>P=>{const{value:R,disabled:E}={...T,...P},A=G===R;return{disabled:E,role:"menuitemradio","data-state":A?"checked":"unchecked","aria-checked":A,"data-disabled":Ct(E),"data-value":R,"data-orientation":"vertical",tabindex:-1}},action:G=>(xt(G,o),{destroy:Ae(I(G,"pointerdown",R=>{const E=R.currentTarget;if(!_(E))return;const A=G.dataset.value;if(G.dataset.disabled||A===void 0){R.preventDefault();return}}),I(G,"click",R=>{const E=R.currentTarget;if(!_(E))return;const A=G.dataset.value;if(G.dataset.disabled||A===void 0){R.preventDefault();return}if(R.defaultPrevented){if(!_(E))return;me(E);return}u.set(A),S.get()&&Mt().then(()=>{m.set(!1)})}),I(G,"keydown",R=>{be(R)}),I(G,"pointermove",R=>{const E=R.currentTarget;if(!_(E))return;const A=G.dataset.value;if(G.dataset.disabled||A===void 0){He(R);return}Xe(R,E)}),I(G,"pointerleave",R=>{rt(R)}),I(G,"focusin",R=>{Re(R)}),I(G,"focusout",R=>{Ne(R)}))})}),ye=ht(u,G=>P=>G===P);return{elements:{radioGroup:f,radioItem:J},states:{value:u},helpers:{isChecked:ye}}},{elements:{root:_e}}=er({orientation:"horizontal"}),Fe={...gr,disabled:!1,positioning:{placement:"right-start",gutter:8}},tt=t=>{const i={...Fe,...t},u=i.open??de(!1),f=Pt(u,i==null?void 0:i.onOpenChange),T=wt(Ut(i,"ids")),{positioning:J,arrowSize:ye,disabled:G}=T,P=ve(de(null)),R=ve(de(null)),E=ve(de(0)),A=wt({...Qt(rn),...i.ids});Gt(()=>{const D=document.getElementById(A.trigger.get());D&&P.set(D)});const qe=tn({open:f,forceVisible:v,activeTrigger:P}),yn=xe(e("submenu"),{stores:[qe,A.menu,A.trigger],returned:([D,ie,ke])=>({role:"menu",hidden:D?void 0:!0,style:_t({display:D?void 0:"none"}),id:ie,"aria-labelledby":ke,"data-state":D?"open":"closed","data-id":ie,tabindex:-1}),action:D=>{let ie=vt;const ke=Ie([qe,J],([y,W])=>{if(ie(),!y)return;const Q=P.get();Q&&Mt().then(()=>{ie();const ne=Ht(Q);ie=nn(D,{anchorElement:Q,open:f,options:{floating:W,portal:_(ne)?ne:void 0,modal:null,focusTrap:null,escapeKeydown:null}}).destroy})}),N=Ae(I(D,"keydown",y=>{if(y.key===le.ESCAPE)return;const W=y.target,Q=y.currentTarget;if(!_(W)||!_(Q)||!(W.closest('[role="menu"]')===Q))return;if(Yt.includes(y.key)){y.stopImmediatePropagation(),on(y,w.get()??!1);return}const dt=fr.ltr.includes(y.key),ft=y.ctrlKey||y.altKey||y.metaKey,St=y.key.length===1;if(dt){const Xt=P.get();y.preventDefault(),f.update(()=>(Xt&&me(Xt),!1));return}if(y.key===le.TAB){y.preventDefault(),m.set(!1),sn(y,p,B);return}!ft&&St&&k.get()===!0&&X(y.key,at(Q))}),I(D,"pointermove",y=>{ce(y)}),I(D,"focusout",y=>{const W=P.get();if(x.get()){const Q=y.target,ne=document.getElementById(A.menu.get());if(!_(ne)||!_(Q))return;!ne.contains(Q)&&Q!==W&&f.set(!1)}else{const Q=y.currentTarget,ne=y.relatedTarget;if(!_(ne)||!_(Q))return;!Q.contains(ne)&&ne!==W&&f.set(!1)}}));return{destroy(){ke(),ie(),N()}}}}),kn=xe(e("subtrigger"),{stores:[f,G,A.menu,A.trigger],returned:([D,ie,ke,N])=>({role:"menuitem",id:N,tabindex:-1,"aria-controls":ke,"aria-expanded":D,"data-state":D?"open":"closed","data-disabled":Ct(ie),"aria-haspopop":"menu"}),action:D=>{xt(D,o),Ft(D),P.update(N=>N||D);const ie=()=>{Lt(R),window.clearTimeout(E.get()),z.set(null)},ke=Ae(I(D,"click",N=>{if(N.defaultPrevented)return;const y=N.currentTarget;!_(y)||Be(y)||(me(y),f.get()||f.update(W=>W||(P.set(y),!W)))}),I(D,"keydown",N=>{const y=L.get(),W=N.currentTarget;if(!(!_(W)||Be(W)||y.length>0&&N.key===le.SPACE)&&dr.ltr.includes(N.key)){if(!f.get()){W.click(),N.preventDefault();return}const ne=W.getAttribute("aria-controls");if(!ne)return;const dt=document.getElementById(ne);if(!_(dt))return;const ft=at(dt)[0];me(ft)}}),I(D,"pointermove",N=>{if(!kt(N)||(ae(N),N.defaultPrevented))return;const y=N.currentTarget;if(!_(y))return;br(A.menu.get())||me(y);const W=R.get();!f.get()&&!W&&!Be(y)&&R.set(window.setTimeout(()=>{f.update(()=>(P.set(y),!0)),Lt(R)},100))}),I(D,"pointerleave",N=>{if(!kt(N))return;Lt(R);const y=document.getElementById(A.menu.get()),W=y==null?void 0:y.getBoundingClientRect();if(W){const Q=y==null?void 0:y.dataset.side,ne=Q==="right",dt=ne?-5:5,ft=W[ne?"left":"right"],St=W[ne?"right":"left"];z.set({area:[{x:N.clientX+dt,y:N.clientY},{x:ft,y:W.top},{x:St,y:W.top},{x:St,y:W.bottom},{x:ft,y:W.bottom}],side:Q}),window.clearTimeout(E.get()),E.set(window.setTimeout(()=>{z.set(null)},300))}else{if(nt(N),N.defaultPrevented)return;z.set(null)}}),I(D,"focusout",N=>{const y=N.currentTarget;if(!_(y))return;gt(y);const W=N.relatedTarget;if(!_(W))return;const Q=y.getAttribute("aria-controls");if(!Q)return;const ne=document.getElementById(Q);ne&&!ne.contains(W)&&f.set(!1)}),I(D,"focusin",N=>{Re(N)}));return{destroy(){ie(),ke()}}}}),xn=xe(e("subarrow"),{stores:ye,returned:D=>({"data-arrow":!0,style:_t({position:"absolute",width:`var(--arrow-size, ${D}px)`,height:`var(--arrow-size, ${D}px)`})})});return Ie([m],([D])=>{D||(P.set(null),f.set(!1))}),Ie([z],([D])=>{!it||D||window.clearTimeout(E.get())}),Ie([f],([D])=>{if(it&&(D&&x.get()&&lt(1).then(()=>{const ie=document.getElementById(A.menu.get());if(!ie)return;const ke=at(ie);ke.length&&me(ke[0])}),!D)){const ie=C.get(),ke=document.getElementById(A.trigger.get());if(ie&&lt(1).then(()=>{const N=document.getElementById(A.menu.get());N&&N.contains(ie)&&gt(ie)}),!ke||document.activeElement===ke)return;gt(ke)}}),{ids:A,elements:{subTrigger:kn,subMenu:yn,subArrow:xn},states:{subOpen:f},options:T}};Gt(()=>{const t=document.getElementById(te.trigger.get());_(t)&&m.get()&&F.set(t);const i=[],u=()=>x.set(!1),f=()=>{x.set(!0),i.push(Ae(ot(document,"pointerdown",u,{capture:!0,once:!0}),ot(document,"pointermove",u,{capture:!0,once:!0})))},T=J=>{if(J.key===le.ESCAPE&&s.get()){m.set(!1);return}};return i.push(ot(document,"keydown",f,{capture:!0})),i.push(ot(document,"keydown",T)),()=>{i.forEach(J=>J())}}),Ie([m,C],([t,i])=>{!t&&i&&gt(i)}),Ie([m],([t])=>{if(it&&!t){const i=F.get();if(!i)return;const u=O.get();!t&&i&&Qn({prop:u,defaultEl:i})}}),Ie([m,a],([t,i])=>{if(!it)return;const u=[];return t&&i&&u.push(Zn()),lt(1).then(()=>{const f=document.getElementById(te.menu.get());if(f&&t&&x.get()){if(j.get()){me(f);return}const T=at(f);if(!T.length)return;me(T[0])}}),()=>{u.forEach(f=>f())}}),Ie(m,t=>{if(!it)return;const i=()=>x.set(!1),u=f=>{if(x.set(!0),f.key===le.ESCAPE&&t&&s.get()){m.set(!1);return}};return Ae(ot(document,"pointerdown",i,{capture:!0,once:!0}),ot(document,"pointermove",i,{capture:!0,once:!0}),ot(document,"keydown",u,{capture:!0}))});function se(t){m.update(i=>{const u=!i;return u&&(p.set(or(t)),B.set(ar(t)),F.set(t)),u})}function Re(t){const i=t.currentTarget;if(!_(i))return;const u=C.get();u&&gt(u),rr(i),C.set(i)}function Ne(t){const i=t.currentTarget;_(i)&&gt(i)}function ae(t){st(t)&&t.preventDefault()}function He(t){if(st(t))return;const i=t.target;if(!_(i))return;const u=Ht(i);u&&me(u)}function nt(t){st(t)&&t.preventDefault()}function ce(t){if(!kt(t))return;const i=t.target,u=t.currentTarget;if(!_(u)||!_(i))return;const f=M.get(),T=f!==t.clientX;if(u.contains(i)&&T){const J=t.clientX>f?"right":"left";H.set(J),M.set(t.clientX)}}function Xe(t,i=null){if(!kt(t)||(ae(t),t.defaultPrevented))return;if(i){me(i);return}const u=t.currentTarget;_(u)&&me(u)}function rt(t){kt(t)&&He(t)}function be(t){if(L.get().length>0&&t.key===le.SPACE){t.preventDefault();return}if(Rt.includes(t.key)){t.preventDefault();const f=t.currentTarget;if(!_(f))return;f.click()}}function ct(t){return t==="indeterminate"}function Bt(t){return ct(t)?"indeterminate":t?"checked":"unchecked"}function st(t){return Y.get()(t)}function Ht(t){const i=t.closest('[role="menu"]');return _(i)?i:null}return{elements:{trigger:re,menu:we,overlay:Ve,item:Je,group:Qe,groupLabel:Ue,arrow:De,separator:_e},builders:{createCheckboxItem:Ze,createSubmenu:tt,createMenuRadioGroup:et},states:{open:m},helpers:{handleTypeaheadSearch:X},ids:te,options:n.rootOptions}}function sn(n,e,o){if(n.shiftKey){const a=o.get();a&&(n.preventDefault(),lt(1).then(()=>a.focus()),o.set(null))}else{const a=e.get();a&&(n.preventDefault(),lt(1).then(()=>a.focus()),e.set(null))}}function at(n){return Array.from(n.querySelectorAll(`[data-melt-menu-id="${n.id}"]`)).filter(e=>_(e))}function Ft(n){!n||!Be(n)||(n.setAttribute("data-disabled",""),n.setAttribute("aria-disabled","true"))}function Lt(n){if(!it)return;const e=n.get();e&&(window.clearTimeout(e),n.set(null))}function kt(n){return n.pointerType==="mouse"}function xt(n,e){if(!n)return;const o=n.closest(`${e()}, ${e("submenu")}`);_(o)&&n.setAttribute("data-melt-menu-id",o.id)}function on(n,e){n.preventDefault();const o=document.activeElement,a=n.currentTarget;if(!_(o)||!_(a))return;const d=at(a);if(!d.length)return;const c=d.filter(l=>!(l.hasAttribute("data-disabled")||l.getAttribute("disabled")==="true")),s=c.indexOf(o);let r;switch(n.key){case le.ARROW_DOWN:e?r=s<c.length-1?s+1:0:r=s<c.length-1?s+1:s;break;case le.ARROW_UP:e?r=s>0?s-1:c.length-1:r=s<0?c.length-1:s>0?s-1:0;break;case le.HOME:r=0;break;case le.END:r=c.length-1;break;default:return}me(c[r])}function vr(n,e){if(!e)return!1;const o={x:n.clientX,y:n.clientY};return hr(o,e)}function hr(n,e){const{x:o,y:a}=n;let d=!1;for(let c=0,s=e.length-1;c<e.length;s=c++){const r=e[c].x,l=e[c].y,v=e[s].x,k=e[s].y;l>a!=k>a&&o<(v-r)*(a-l)/(k-l)+r&&(d=!d)}return d}function br(n){const e=document.activeElement;if(!_(e))return!1;const o=e.closest(`[data-id="${n}"]`);return _(o)}function pr(n){return n?"open":"closed"}const _r={arrowSize:8,positioning:{placement:"bottom"},preventScroll:!0,closeOnEscape:!0,closeOnOutsideClick:!0,portal:void 0,loop:!1,dir:"ltr",defaultOpen:!1,forceVisible:!1,typeahead:!0,closeFocus:void 0,disableFocusFirstItem:!1,closeOnItemClick:!0,onOutsideClick:void 0};function yr(n){const e={..._r,...n},o=wt(Ut(e,"ids")),a=e.open??de(e.defaultOpen),d=Pt(a,e==null?void 0:e.onOpenChange),c=ve(de(null)),s=ve(de(null)),r=ve(de(null)),{elements:l,builders:v,ids:k,states:w,options:O}=mr({rootOptions:o,rootOpen:d,rootActiveTrigger:ve(c),nextFocusable:ve(s),prevFocusable:ve(r),selector:"dropdown-menu",removeScroll:!0,ids:e.ids});return{ids:k,elements:l,states:w,builders:v,options:O}}const kr={defaultPressed:!1,disabled:!1};function xr(n){const e={...kr,...n},o=wt(Ut(e,"pressed")),{disabled:a}=o,d=e.pressed??de(e.defaultPressed),c=Pt(d,e==null?void 0:e.onPressedChange);function s(){a.get()||c.update(v=>!v)}return{elements:{root:xe("toggle",{stores:[c,a],returned:([l,v])=>({"data-disabled":Ct(v),disabled:Ct(v),"data-state":l?"on":"off","aria-pressed":l,type:"button"}),action:l=>({destroy:Ae(I(l,"click",()=>{s()}),I(l,"keydown",k=>{k.key!==le.ENTER&&k.key!==le.SPACE||(k.preventDefault(),s())}))})})},states:{pressed:c},options:o}}function _n(){return{NAME:"menu",SUB_NAME:"menu-submenu",RADIO_GROUP_NAME:"menu-radiogroup",CHECKBOX_ITEM_NAME:"menu-checkboxitem",RADIO_ITEM_NAME:"menu-radioitem",GROUP_NAME:"menu-group",PARTS:["arrow","checkbox-indicator","checkbox-item","content","group","item","label","radio-group","radio-item","radio-indicator","separator","sub-content","sub-trigger","trigger"]}}function jt(){const{NAME:n}=_n();return wn(n)}function wr(n){const{NAME:e,PARTS:o}=_n(),a=un("menu",o),d={...yr({...cn(n),forceVisible:!0}),getAttrs:a};return ln(e,d),{...d,updateOption:dn(d.options)}}function Tr(n){const o={...{side:"bottom",align:"center"},...n},{options:{positioning:a}}=jt();Wn(a)(o)}function Er(n,e){const o=he(e,["children","$$slots","$$events","$$legacy"]),a=he(o,["href","asChild","disabled","el"]);Oe(e,!1);const d=bt(),c=()=>ut(O,"$item",d),s=At(),r=At();let l=h(e,"href",24,()=>{}),v=h(e,"asChild",8,!1),k=h(e,"disabled",8,!1),w=h(e,"el",28,()=>{});const{elements:{item:O},getAttrs:j}=jt(),S=Kt();q(()=>c(),()=>{$e(s,c())}),q(()=>V(k()),()=>{$e(r,{...j("item"),...Cn(k())})}),q(()=>(g(s),g(r)),()=>{Object.assign(g(s),g(r))}),It(),We();var U=ee(),m=K(U);Ce(m,v,F=>{var p=ee(),B=K(p);ge(B,e,"default",{get builder(){return g(s)}}),b(F,p)},F=>{var p=ee(),B=K(p);Rn(B,()=>l()?"a":"div",!1,(x,M)=>{Ye(x,Y=>w(Y),()=>w()),Ge(x,Y=>g(s).action(Y));let z;Z(()=>z=Le(x,z,{href:l(),...g(s),...a},void 0,x.namespaceURI===Tn,x.nodeName.includes("-"))),fe("m-click",x,S),fe("m-focusin",x,S),fe("m-focusout",x,S),fe("m-keydown",x,S),fe("m-pointerdown",x,S),fe("m-pointerleave",x,S),fe("m-pointermove",x,S),fe("pointerenter",x,function(Y){Me.call(this,e,Y)});var H=ee(),C=K(H);ge(C,e,"default",{get builder(){return g(s)}}),b(M,H)}),b(F,p)}),b(n,U),Pe()}function Cr(n,e){Oe(e,!1);const o=bt(),a=()=>ut(x,"$idValues",o);let d=h(e,"closeOnOutsideClick",24,()=>{}),c=h(e,"closeOnEscape",24,()=>{}),s=h(e,"portal",24,()=>{}),r=h(e,"open",28,()=>{}),l=h(e,"onOpenChange",24,()=>{}),v=h(e,"preventScroll",24,()=>{}),k=h(e,"loop",24,()=>{}),w=h(e,"dir",24,()=>{}),O=h(e,"typeahead",24,()=>{}),j=h(e,"closeFocus",24,()=>{}),S=h(e,"disableFocusFirstItem",24,()=>{}),U=h(e,"closeOnItemClick",24,()=>{}),m=h(e,"onOutsideClick",24,()=>{});const{states:{open:F},updateOption:p,ids:B}=wr({closeOnOutsideClick:d(),closeOnEscape:c(),portal:s(),forceVisible:!0,defaultOpen:r(),preventScroll:v(),loop:k(),dir:w(),typeahead:O(),closeFocus:j(),disableFocusFirstItem:S(),closeOnItemClick:U(),onOutsideClick:m(),onOpenChange:({next:H})=>{var C;return r()!==H&&((C=l())==null||C(H),r(H)),H}}),x=ht([B.menu,B.trigger],([H,C])=>({menu:H,trigger:C}));q(()=>V(r()),()=>{r()!==void 0&&F.set(r())}),q(()=>V(d()),()=>{p("closeOnOutsideClick",d())}),q(()=>V(c()),()=>{p("closeOnEscape",c())}),q(()=>V(s()),()=>{p("portal",s())}),q(()=>V(v()),()=>{p("preventScroll",v())}),q(()=>V(k()),()=>{p("loop",k())}),q(()=>V(w()),()=>{p("dir",w())}),q(()=>V(j()),()=>{p("closeFocus",j())}),q(()=>V(S()),()=>{p("disableFocusFirstItem",S())}),q(()=>V(O()),()=>{p("typeahead",O())}),q(()=>V(U()),()=>{p("closeOnItemClick",U())}),q(()=>V(m()),()=>{p("onOutsideClick",m())}),It(),We();var M=ee(),z=K(M);ge(z,e,"default",{get ids(){return a()}}),b(n,M),Pe()}var Or=$("<div><!></div>"),Pr=$("<div><!></div>"),Ar=$("<div><!></div>"),Ir=$("<div><!></div>"),Sr=$("<div><!></div>");function Mr(n,e){const o=he(e,["children","$$slots","$$events","$$legacy"]),a=he(o,["transition","transitionConfig","inTransition","inTransitionConfig","outTransition","outTransitionConfig","asChild","id","side","align","sideOffset","alignOffset","collisionPadding","avoidCollisions","collisionBoundary","sameWidth","fitViewport","strategy","overlap","el"]);Oe(e,!1);const d=bt(),c=()=>ut(te,"$menu",d),s=()=>ut(ue,"$open",d),r=At();let l=h(e,"transition",24,()=>{}),v=h(e,"transitionConfig",24,()=>{}),k=h(e,"inTransition",24,()=>{}),w=h(e,"inTransitionConfig",24,()=>{}),O=h(e,"outTransition",24,()=>{}),j=h(e,"outTransitionConfig",24,()=>{}),S=h(e,"asChild",8,!1),U=h(e,"id",24,()=>{}),m=h(e,"side",8,"bottom"),F=h(e,"align",8,"center"),p=h(e,"sideOffset",8,0),B=h(e,"alignOffset",8,0),x=h(e,"collisionPadding",8,8),M=h(e,"avoidCollisions",8,!0),z=h(e,"collisionBoundary",24,()=>{}),H=h(e,"sameWidth",8,!1),C=h(e,"fitViewport",8,!1),Y=h(e,"strategy",8,"absolute"),L=h(e,"overlap",8,!1),X=h(e,"el",28,()=>{});const{elements:{menu:te},states:{open:ue},ids:we,getAttrs:re}=jt(),De=Kt(),Ve=re("content");q(()=>V(U()),()=>{U()&&we.menu.set(U())}),q(()=>c(),()=>{$e(r,c())}),q(()=>g(r),()=>{Object.assign(g(r),Ve)}),q(()=>(s(),V(m()),V(F()),V(p()),V(B()),V(x()),V(M()),V(z()),V(H()),V(C()),V(Y()),V(L())),()=>{s()&&Tr({side:m(),align:F(),sideOffset:p(),alignOffset:B(),collisionPadding:x(),avoidCollisions:M(),collisionBoundary:z(),sameWidth:H(),fitViewport:C(),strategy:Y(),overlap:L()})}),It(),We();var Je=ee(),Qe=K(Je);Ce(Qe,()=>S()&&s(),Ue=>{var Ee=ee(),Ze=K(Ee);ge(Ze,e,"default",{get builder(){return g(r)}}),b(Ue,Ee)},Ue=>{var Ee=ee(),Ze=K(Ee);Ce(Ze,()=>l()&&s(),et=>{var _e=Or();let Fe;var tt=Te(_e);ge(tt,e,"default",{get builder(){return g(r)}}),pe(_e),Ye(_e,se=>X(se),()=>X()),Ge(_e,se=>g(r).action(se)),ze(()=>fe("m-keydown",_e,De)),Z(()=>Fe=Le(_e,Fe,{...g(r),...a})),yt(3,_e,l,v),b(et,_e)},et=>{var _e=ee(),Fe=K(_e);Ce(Fe,()=>k()&&O()&&s(),tt=>{var se=Pr();let Re;var Ne=Te(se);ge(Ne,e,"default",{get builder(){return g(r)}}),pe(se),Ye(se,ae=>X(ae),()=>X()),Ge(se,ae=>g(r).action(ae)),ze(()=>fe("m-keydown",se,De)),Z(()=>Re=Le(se,Re,{...g(r),...a})),yt(1,se,k,w),yt(2,se,O,j),b(tt,se)},tt=>{var se=ee(),Re=K(se);Ce(Re,()=>k()&&s(),Ne=>{var ae=Ar();let He;var nt=Te(ae);ge(nt,e,"default",{get builder(){return g(r)}}),pe(ae),Ye(ae,ce=>X(ce),()=>X()),Ge(ae,ce=>g(r).action(ce)),ze(()=>fe("m-keydown",ae,De)),Z(()=>He=Le(ae,He,{...g(r),...a})),yt(1,ae,k,w),b(Ne,ae)},Ne=>{var ae=ee(),He=K(ae);Ce(He,()=>O()&&s(),nt=>{var ce=Ir();let Xe;var rt=Te(ce);ge(rt,e,"default",{get builder(){return g(r)}}),pe(ce),Ye(ce,be=>X(be),()=>X()),Ge(ce,be=>g(r).action(be)),ze(()=>fe("m-keydown",ce,De)),Z(()=>Xe=Le(ce,Xe,{...g(r),...a})),yt(2,ce,O,j),b(nt,ce)},nt=>{var ce=ee(),Xe=K(ce);Ce(Xe,s,rt=>{var be=Sr();let ct;var Bt=Te(be);ge(Bt,e,"default",{get builder(){return g(r)}}),pe(be),Ye(be,st=>X(st),()=>X()),Ge(be,st=>g(r).action(st)),ze(()=>fe("m-keydown",be,De)),Z(()=>ct=Le(be,ct,{...g(r),...a})),b(rt,be)},null,!0),b(nt,ce)},!0),b(Ne,ae)},!0),b(tt,se)},!0),b(et,_e)},!0),b(Ue,Ee)}),b(n,Je),Pe()}var Dr=$("<button><!></button>");function Fr(n,e){const o=he(e,["children","$$slots","$$events","$$legacy"]),a=he(o,["asChild","id","el"]);Oe(e,!1);const d=bt(),c=()=>ut(k,"$trigger",d),s=At();let r=h(e,"asChild",8,!1),l=h(e,"id",24,()=>{}),v=h(e,"el",28,()=>{});const{elements:{trigger:k},ids:w,getAttrs:O}=jt(),j=Kt(),S=O("trigger");q(()=>V(l()),()=>{l()&&w.trigger.set(l())}),q(()=>c(),()=>{$e(s,c())}),q(()=>g(s),()=>{Object.assign(g(s),S)}),It(),We();var U=ee(),m=K(U);Ce(m,r,F=>{var p=ee(),B=K(p);ge(B,e,"default",{get builder(){return g(s)}}),b(F,p)},F=>{var p=Dr();let B;var x=Te(p);ge(x,e,"default",{get builder(){return g(s)}}),pe(p),Ye(p,M=>v(M),()=>v()),Ge(p,M=>g(s).action(M)),ze(()=>fe("m-keydown",p,j)),ze(()=>fe("m-pointerdown",p,j)),Z(()=>B=Le(p,B,{...g(s),type:"button",...a})),b(F,p)}),b(n,U),Pe()}function Rr(){return{NAME:"toggle",PARTS:["root","input"]}}function Nr(n){const{NAME:e,PARTS:o}=Rr(),a=un(e,o),d={...xr(cn(n)),getAttrs:a};return ln(e,d),{...d,updateOption:dn(d.options)}}var Kr=$("<button><!></button>");function jr(n,e){const o=he(e,["children","$$slots","$$events","$$legacy"]),a=he(o,["disabled","pressed","onPressedChange","asChild","el"]);Oe(e,!1);const d=bt(),c=()=>ut(O,"$root",d),s=At();let r=h(e,"disabled",24,()=>{}),l=h(e,"pressed",28,()=>{}),v=h(e,"onPressedChange",24,()=>{}),k=h(e,"asChild",8,!1),w=h(e,"el",28,()=>{});const{elements:{root:O},states:{pressed:j},updateOption:S,getAttrs:U}=Nr({disabled:r(),defaultPressed:l(),onPressedChange:({next:x})=>{var M;return l()!==x&&((M=v())==null||M(x),l(x)),x}}),m=Kt(),F=U("root");q(()=>V(l()),()=>{l()!==void 0&&j.set(l())}),q(()=>V(r()),()=>{S("disabled",r())}),q(()=>c(),()=>{$e(s,c())}),q(()=>g(s),()=>{Object.assign(g(s),F)}),It(),We();var p=ee(),B=K(p);Ce(B,k,x=>{var M=ee(),z=K(M);ge(z,e,"default",{get builder(){return g(s)}}),b(x,M)},x=>{var M=Kr();let z;var H=Te(M);ge(H,e,"default",{get builder(){return g(s)}}),pe(M),Ye(M,C=>w(C),()=>w()),Ge(M,C=>g(s).action(C)),ze(()=>fe("m-click",M,m)),ze(()=>fe("m-keydown",M,m)),Z(()=>z=Le(M,z,{...g(s),type:"button",...a})),b(x,M)}),b(n,p),Pe()}var Br=$("<div><!></div>");function zr(n,e){const o=he(e,["children","$$slots","$$events","$$legacy"]),a=he(o,["class"]);Oe(e,!1);let d=h(e,"class",8,void 0);We();var c=Br();let s;var r=Te(c);ge(r,e,"default",{}),pe(c),Z(()=>s=Le(c,s,{class:Nt("flex flex-col space-y-1.5 p-6 pb-0",d()),...a})),b(n,c),Pe()}var Lr=$("<!> <!>",1),Wr=$("<a><!></a>");function an(n,e){Oe(e,!0);var o=Wr(),a=Te(o);mn(a,{openDelay:300,children:(d,c)=>{var s=Lr(),r=K(s);vn(r,{children:(v,k)=>{gn(v,{size:"icon",variant:"outline",children:(w,O)=>{Tt(w,{icon:"i-carbon-link"})},$$slots:{default:!0}})},$$slots:{default:!0}});var l=oe(r,2);hn(l,{children:(v,k)=>{je();var w=Ke();Z(()=>Se(w,e.link.label)),b(v,w)},$$slots:{default:!0}}),b(d,s)},$$slots:{default:!0}}),pe(o),Z(()=>{Ot(o,"href",e.link.to),Ot(o,"target",e.link.newTab?"_blank":void 0)}),b(n,o),Pe()}function Vr(n,e){const o=he(e,["children","$$slots","$$events","$$legacy"]),a=he(o,["class","inset"]);Oe(e,!1);let d=h(e,"class",8,void 0),c=h(e,"inset",8,void 0);We();var s=Wt(()=>Nt("data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50",c()&&"pl-8",d()));Er(n,Vt({get class(){return g(s)}},()=>a,{$$events:{click(r){Me.call(this,e,r)},keydown(r){Me.call(this,e,r)},focusin(r){Me.call(this,e,r)},focusout(r){Me.call(this,e,r)},pointerdown(r){Me.call(this,e,r)},pointerleave(r){Me.call(this,e,r)},pointermove(r){Me.call(this,e,r)}},children:(r,l)=>{var v=ee(),k=K(v);ge(k,e,"default",{}),b(r,v)},$$slots:{default:!0}})),Pe()}function Ur(n,e){const o=he(e,["children","$$slots","$$events","$$legacy"]),a=he(o,["class","sideOffset","transition","transitionConfig"]);Oe(e,!1);let d=h(e,"class",8,void 0),c=h(e,"sideOffset",8,4),s=h(e,"transition",8,Nn),r=h(e,"transitionConfig",8,void 0);We();var l=Wt(()=>Nt("bg-popover text-popover-foreground z-50 min-w-[8rem] rounded-md border p-1 shadow-md focus:outline-none",d()));Mr(n,Vt({get transition(){return s()},get transitionConfig(){return r()},get sideOffset(){return c()},get class(){return g(l)}},()=>a,{$$events:{keydown(v){Me.call(this,e,v)}},children:(v,k)=>{var w=ee(),O=K(w);ge(O,e,"default",{}),b(v,w)},$$slots:{default:!0}})),Pe()}const Hr=Cr,Xr=Fr;var qr=$("<img>"),Yr=$("<!> <!>",1),Gr=$("<!> <!>",1),$r=$('<a target="_blank"><!></a>'),Jr=$("<!> <!>",1),Qr=$("<!> <!>",1),Zr=$('<!> <div class="flex w-full flex-row items-center gap-1 overflow-x-hidden"><!> <!></div> <!>',1),es=$("<!> <!>",1),ts=$("<!> <!>",1),ns=$('<!> <!> <!> <div class="flex w-full flex-row items-center justify-between"><!> <!></div> <!>',1),rs=$("<!> <!> <!>",1);function ss(n,e){Oe(e,!0);const o=bt(),a=()=>ut(On,"$mode",o);let d=mt(()=>$t(e.project.period.from)),c=mt(()=>$t(e.project.period.to)),s=mt(()=>Kn(e.project.period.from,e.project.period.to));var r=mt(()=>jn(`/projects/${e.project.slug}`));An(n,{get color(){return e.project.color},class:"flex h-full flex-col",get href(){return g(r)},children:(l,v)=>{var k=rs(),w=K(k);zr(w,{class:"flex w-full flex-col gap-4",children:(S,U)=>{var m=Zr(),F=K(m);Un(F,{children:(z,H)=>{var C=Yr(),Y=K(C);Hn(Y,{children:(te,ue)=>{var we=qr();Z(()=>{Ot(we,"src",Bn.Unknown.light),Ot(we,"alt",e.project.name)}),b(te,we)},$$slots:{default:!0}});var L=oe(Y,2),X=mt(()=>a()==="dark"?e.project.logo.dark:e.project.logo.light);Xn(L,{get src(){return g(X)}}),b(z,C)},$$slots:{default:!0}});var p=oe(F,2),B=Te(p);In(B,{class:"h-auto min-w-0 flex-1 overflow-x-hidden",children:(z,H)=>{mn(z,{children:(C,Y)=>{var L=Gr(),X=K(L);vn(X,{class:"w-full overflow-y-auto overflow-x-hidden truncate text-ellipsis text-nowrap text-left",children:(ue,we)=>{je();var re=Ke();Z(()=>Se(re,e.project.name)),b(ue,re)},$$slots:{default:!0}});var te=oe(X,2);hn(te,{children:(ue,we)=>{je();var re=Ke();Z(()=>Se(re,e.project.name)),b(ue,re)},$$slots:{default:!0}}),b(C,L)},$$slots:{default:!0}})},$$slots:{default:!0}});var x=oe(B,2);Ce(x,()=>e.project.links.length>2,z=>{var H=Qr(),C=K(H);an(C,{get link(){return e.project.links[0]}});var Y=oe(C,2);Hr(Y,{children:(L,X)=>{var te=Jr(),ue=K(te);Xr(ue,{children:(re,De)=>{gn(re,{size:"icon",variant:"outline",children:(Ve,Je)=>{Tt(Ve,{icon:"i-carbon-overflow-menu-vertical"})},$$slots:{default:!0}})},$$slots:{default:!0}});var we=oe(ue,2);Ur(we,{children:(re,De)=>{var Ve=ee(),Je=K(Ve);Et(Je,17,()=>e.project.links.slice(1),Qe=>Qe.to,(Qe,Ue)=>{var Ee=$r(),Ze=Te(Ee);Vr(Ze,{children:(et,_e)=>{je();var Fe=Ke();Z(()=>Se(Fe,g(Ue).label)),b(et,Fe)},$$slots:{default:!0}}),pe(Ee),Z(()=>Ot(Ee,"href",g(Ue).to)),b(Qe,Ee)}),b(re,Ve)},$$slots:{default:!0}}),b(L,te)},$$slots:{default:!0}}),b(z,H)},z=>{var H=ee(),C=K(H);Et(C,17,()=>e.project.links,Y=>Y.to,(Y,L)=>{an(Y,{get link(){return g(L)}})}),b(z,H)}),pe(p);var M=oe(p,2);en(M,{}),b(S,m)},$$slots:{default:!0}});var O=oe(w,2);Sn(O,{class:"flex flex-1 flex-col gap-4",children:(S,U)=>{var m=ns(),F=K(m);pt(F,{className:"flex flex-row gap-2 items-center",children:(C,Y)=>{var L=es(),X=K(L);Tt(X,{icon:"i-carbon-assembly-cluster"});var te=oe(X,2);pt(te,{children:(ue,we)=>{je();var re=Ke();Z(()=>Se(re,e.project.type)),b(ue,re)},$$slots:{default:!0}}),b(C,L)},$$slots:{default:!0}});var p=oe(F,2);pt(p,{className:"flex flex-row gap-2 items-center",children:(C,Y)=>{var L=ts(),X=K(L);Tt(X,{icon:"i-carbon-time"});var te=oe(X,2);pt(te,{children:(ue,we)=>{je();var re=Ke();Z(()=>Se(re,g(s))),b(ue,re)},$$slots:{default:!0}}),b(C,L)},$$slots:{default:!0}});var B=oe(p,2);pt(B,{className:"flex-1",children:(C,Y)=>{je();var L=Ke();Z(()=>Se(L,zn(e.project.shortDescription,100))),b(C,L)},$$slots:{default:!0}});var x=oe(B,2),M=Te(x);Jt(M,{variant:"outline",children:(C,Y)=>{je();var L=Ke();Z(()=>Se(L,g(d))),b(C,L)},$$slots:{default:!0}});var z=oe(M,2);Jt(z,{variant:"outline",children:(C,Y)=>{je();var L=Ke();Z(()=>Se(L,g(c))),b(C,L)},$$slots:{default:!0}}),pe(x);var H=oe(x,2);en(H,{}),b(S,m)},$$slots:{default:!0}});var j=oe(O,2);qn(j,{class:"flex flex-row flex-wrap items-center gap-2",children:(S,U)=>{var m=ee(),F=K(m);Et(F,17,()=>e.project.skills,p=>p.slug,(p,B)=>{Vn(p,{get skill(){return g(B)}})}),b(S,m)},$$slots:{default:!0}}),b(l,k)},$$slots:{default:!0}}),Pe()}const os=tr({base:"ring-offset-background hover:bg-muted hover:text-muted-foreground focus-visible:ring-ring data-[state=on]:bg-accent data-[state=on]:text-accent-foreground inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",variants:{variant:{default:"bg-transparent",outline:"border-input hover:bg-accent hover:text-accent-foreground border bg-transparent"},size:{default:"h-10 px-3",sm:"h-9 px-2.5",lg:"h-11 px-5"}},defaultVariants:{variant:"default",size:"default"}});function as(n,e){const o=he(e,["children","$$slots","$$events","$$legacy"]),a=he(o,["class","variant","size","pressed"]);Oe(e,!1);let d=h(e,"class",8,void 0),c=h(e,"variant",8,"default"),s=h(e,"size",8,"default"),r=h(e,"pressed",12,void 0);We();var l=Wt(()=>Nt(os({variant:c(),size:s(),className:d()})));jr(n,Vt({get pressed(){return r()},set pressed(v){r(v)},get class(){return g(l)}},()=>a,{$$events:{click(v){Me.call(this,e,v)}},children:(v,k)=>{var w=ee(),O=K(w);ge(O,e,"default",{}),b(v,w)},$$slots:{default:!0},$$legacy:!0})),Pe()}var is=$("<!> ",1),ls=$('<div class="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3"></div>'),us=$('<div class="flex flex-1 flex-col gap-8"><div class="flex flex-row flex-wrap gap-2"></div> <!></div>');function Fs(n,e){Oe(e,!0);let o=qt(Dt(nr.items.filter(r=>zt.items.some(l=>l.skills.some(v=>v.slug===r.slug))))),a=qt(""),d=mt(()=>zt.items.filter(r=>{const l=g(o).every(k=>!k.isSelected)||r.skills.some(k=>g(o).some(w=>w.isSelected&&w.slug===k.slug)),v=g(a).trim().length===0||r.name.trim().toLowerCase().includes(g(a).trim().toLowerCase());return l&&v}));const c=r=>{$e(o,Dt(g(o).map(l=>l.slug===r?{...l,isSelected:!l.isSelected}:l)))},s=r=>$e(a,Dt(r));En(()=>{if(location.search){const v=new URLSearchParams(location.search).get("item");v&&$e(a,Dt(v))}}),Mn(n,{get title(){return zt.title},onSearch:s,children:(r,l)=>{var v=us(),k=Te(v);Et(k,21,()=>g(o),O=>O.slug,(O,j)=>{as(O,{get pressed(){return g(j).isSelected},variant:"outline",class:"flex flex-row items-center gap-2 rounded-lg",$$events:{click:()=>c(g(j).slug)},children:(S,U)=>{var m=is(),F=K(m);Ce(F,()=>g(j).isSelected,B=>{Tt(B,{icon:"i-carbon-close"})});var p=oe(F);Z(()=>Se(p,` ${g(j).name??""}`)),b(S,m)},$$slots:{default:!0}})}),pe(k);var w=oe(k,2);Ce(w,()=>g(d).length===0,O=>{Pn(O)},O=>{var j=ls();Et(j,21,()=>g(d),S=>S.slug,(S,U)=>{ss(S,{get project(){return g(U)}})}),pe(j),b(O,j)}),pe(v),b(r,v)},$$slots:{default:!0}}),Pe()}export{Fs as component};