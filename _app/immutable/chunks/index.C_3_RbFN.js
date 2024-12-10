import{s as mt,e as F,a as _,d as ut,b as H,f as d}from"./disclose-version.CdL8R11T.js";import{i as lt}from"./legacy.DVkYpQEh.js";import{b as Bt,an as Ht,ao as qt,p as rt,H as N,I as bt,f as k,a as ct,C as it,g as o,a2 as u,t as p,J as Ct,c as ot,r as st,e as yt,K as It,s as xt,n as Gt}from"./utils.DRlNljE7.js";import{q as Lt,w as Ut,m as ft,p as wt,C as Tt,x as At,u as Ft,v as ht,D as Wt,E as pt,F as kt,o as vt,n as Jt,d as St,a as V,l as X,b as J,c as Pt,G as Xt}from"./utils.u9wr4E9e.js";import{p as h,l as I,i as U,b as Q,s as Et}from"./index-client.WDoBuakS.js";import{g as Qt,o as Yt,a as Zt,u as $t,c as Mt,t as tt}from"./events.DPoVpqpP.js";import{b as g}from"./misc.DT-OgPfT.js";import{f as te,I as ee}from"./Icon.DLwhSpxl.js";import{d as Rt,w as ne}from"./paths.BemCS2IU.js";import{u as ae,c as ie,r as oe}from"./action.T8_0rnP9.js";import{t as zt,c as se,r as le,g as re}from"./stores.CK9xLAi6.js";import{h as Nt}from"./focus.DfVR_Ahe.js";const{name:gt}=pt("dialog"),ce={preventScroll:!0,closeOnEscape:!0,closeOnOutsideClick:!0,role:"dialog",defaultOpen:!1,portal:void 0,forceVisible:!1,openFocus:void 0,closeFocus:void 0,onOutsideClick:void 0},de=["content","title","description"];function ue(O){const t={...ce,...O},T=zt(Lt(t,"ids")),{preventScroll:C,closeOnEscape:b,closeOnOutsideClick:y,role:n,portal:e,forceVisible:E,openFocus:q,closeFocus:x,onOutsideClick:z}=T,w=Ut.writable(null),P=zt({...Qt(de),...t.ids}),S=t.open??ne(t.defaultOpen),s=Yt(S,t==null?void 0:t.onOpenChange),l=Rt([s,E],([r,c])=>r||c);let A=vt;function M(r){const c=r.currentTarget,f=r.currentTarget;!St(c)||!St(f)||(s.set(!0),w.set(f))}function D(){s.set(!1),Nt({prop:x.get(),defaultEl:w.get()})}const W=ft(gt("trigger"),{stores:[s],returned:([r])=>({"aria-haspopup":"dialog","aria-expanded":r,type:"button"}),action:r=>({destroy:wt(Tt(r,"click",f=>{M(f)}),Tt(r,"keydown",f=>{f.key!==kt.ENTER&&f.key!==kt.SPACE||(f.preventDefault(),M(f))}))})}),et=ft(gt("overlay"),{stores:[l,s],returned:([r,c])=>({hidden:r?void 0:!0,tabindex:-1,style:At({display:r?void 0:"none"}),"aria-hidden":!0,"data-state":c?"open":"closed"}),action:r=>{let c=vt;if(b.get()){const f=Ft(r,{handler:()=>{D()}});f&&f.destroy&&(c=f.destroy)}return{destroy(){c()}}}}),dt=ft(gt("content"),{stores:[l,P.content,P.description,P.title,s],returned:([r,c,f,K,a])=>({id:c,role:n.get(),"aria-describedby":f,"aria-labelledby":K,"aria-modal":r?"true":void 0,"data-state":a?"open":"closed",tabindex:-1,hidden:r?void 0:!0,style:At({display:r?void 0:"none"})}),action:r=>{let c=vt,f=vt;const K=wt(ht([s,y,b],([a,R,L])=>{if(!a)return;const i=ie({immediate:!1,escapeDeactivates:L,clickOutsideDeactivates:R,allowOutsideClick:!0,returnFocusOnDeactivate:!1,fallbackFocus:r});c=i.activate,f=i.deactivate;const j=i.useFocusTrap(r);return j&&j.destroy?j.destroy:i.deactivate}),ht([y,s],([a,R])=>ae(r,{open:R,closeOnInteractOutside:a,onClose(){D()},shouldCloseOnInteractOutside(L){var i;return(i=z.get())==null||i(L),!L.defaultPrevented}}).destroy),ht([b],([a])=>a?Ft(r,{handler:D}).destroy:vt),ht([l],([a])=>{Bt().then(()=>{a?c():f()})}));return{destroy:()=>{A(),K()}}}}),nt=ft(gt("portalled"),{stores:e,returned:r=>({"data-portal":Wt(r)}),action:r=>{const c=ht([e],([f])=>{if(f===null)return vt;const K=Zt(r,f);return K===null?vt:$t(r,K).destroy});return{destroy(){c()}}}}),at=ft(gt("title"),{stores:[P.title],returned:([r])=>({id:r})}),Y=ft(gt("description"),{stores:[P.description],returned:([r])=>({id:r})}),G=ft(gt("close"),{returned:()=>({type:"button"}),action:r=>({destroy:wt(Tt(r,"click",()=>{D()}),Tt(r,"keydown",f=>{f.key!==kt.SPACE&&f.key!==kt.ENTER||(f.preventDefault(),D())}))})});return ht([s,C],([r,c])=>{if(Jt){if(c&&r&&(A=oe()),r){const f=document.getElementById(P.content.get());Nt({prop:q.get(),defaultEl:f})}return()=>{E.get()||A()}}}),{ids:P,elements:{content:dt,trigger:W,title:at,description:Y,overlay:et,close:G,portalled:nt},states:{open:s},options:T}}function jt(){return{NAME:"dialog",PARTS:["close","content","description","overlay","portal","title","trigger"]}}function fe(O){const{NAME:t,PARTS:T}=jt(),C=se(t,T),b={...ue({...le(O),role:"dialog",forceVisible:!0}),getAttrs:C};return Ht(t,b),{...b,updateOption:re(b.options)}}function Ot(){const{NAME:O}=jt();return qt(O)}function ve(O,t){rt(t,!1);const T=mt(),C=()=>ut(l,"$idValues",T);let b=h(t,"preventScroll",24,()=>{}),y=h(t,"closeOnEscape",24,()=>{}),n=h(t,"closeOnOutsideClick",24,()=>{}),e=h(t,"portal",24,()=>{}),E=h(t,"open",28,()=>{}),q=h(t,"onOpenChange",24,()=>{}),x=h(t,"openFocus",24,()=>{}),z=h(t,"closeFocus",24,()=>{}),w=h(t,"onOutsideClick",24,()=>{});const{states:{open:P},updateOption:S,ids:s}=fe({closeOnEscape:y(),preventScroll:b(),closeOnOutsideClick:n(),portal:e(),forceVisible:!0,defaultOpen:E(),openFocus:x(),closeFocus:z(),onOutsideClick:w(),onOpenChange:({next:D})=>{var W;return E()!==D&&((W=q())==null||W(D),E(D)),D}}),l=Rt([s.content,s.description,s.title],([D,W,et])=>({content:D,description:W,title:et}));N(()=>it(E()),()=>{E()!==void 0&&P.set(E())}),N(()=>it(b()),()=>{S("preventScroll",b())}),N(()=>it(y()),()=>{S("closeOnEscape",y())}),N(()=>it(n()),()=>{S("closeOnOutsideClick",n())}),N(()=>it(e()),()=>{S("portal",e())}),N(()=>it(x()),()=>{S("openFocus",x())}),N(()=>it(z()),()=>{S("closeFocus",z())}),N(()=>it(w()),()=>{S("onOutsideClick",w())}),bt(),lt();var A=F(),M=k(A);V(M,t,"default",{get ids(){return C()}},null),_(O,A),ct()}var ge=H("<button><!></button>");function Vt(O,t){const T=I(t,["children","$$slots","$$events","$$legacy"]),C=I(T,["asChild","el"]);rt(t,!1);const b=mt(),y=()=>ut(q,"$close",b),n=Ct();let e=h(t,"asChild",8,!1),E=h(t,"el",28,()=>{});const{elements:{close:q},getAttrs:x}=Ot(),z=Mt(),w=x("close");N(()=>y(),()=>{yt(n,y())}),N(()=>o(n),()=>{Object.assign(o(n),w)}),bt(),lt();var P=F(),S=k(P);U(S,e,s=>{var l=F(),A=k(l);V(A,t,"default",{get builder(){return o(n)}},null),_(s,l)},s=>{var l=ge();let A;var M=ot(l);V(M,t,"default",{get builder(){return o(n)}},null),st(l),Q(l,D=>E(D),()=>E()),X(l,D=>o(n).action(D)),u(()=>d("m-click",l,z)),u(()=>d("m-keydown",l,z)),p(()=>A=J(l,A,{...o(n),type:"button",...C})),_(s,l)}),_(O,P),ct()}var _e=H("<div><!></div>");function he(O,t){const T=I(t,["children","$$slots","$$events","$$legacy"]),C=I(T,["asChild","el"]);rt(t,!1);const b=mt(),y=()=>ut(q,"$portalled",b),n=Ct();let e=h(t,"asChild",8,!1),E=h(t,"el",28,()=>{});const{elements:{portalled:q},getAttrs:x}=Ot(),z=x("portal");N(()=>y(),()=>{yt(n,y())}),N(()=>o(n),()=>{Object.assign(o(n),z)}),bt(),lt();var w=F(),P=k(w);U(P,e,S=>{var s=F(),l=k(s);V(l,t,"default",{get builder(){return o(n)}},null),_(S,s)},S=>{var s=_e();let l;var A=ot(s);V(A,t,"default",{get builder(){return o(n)}},null),st(s),Q(s,M=>E(M),()=>E()),X(s,M=>o(n).action(M)),p(()=>l=J(s,l,{...o(n),...C})),_(S,s)}),_(O,w),ct()}var me=H("<div><!></div>"),be=H("<div><!></div>"),Ce=H("<div><!></div>"),ye=H("<div><!></div>"),Oe=H("<div><!></div>");function Te(O,t){const T=I(t,["children","$$slots","$$events","$$legacy"]),C=I(T,["transition","transitionConfig","inTransition","inTransitionConfig","outTransition","outTransitionConfig","asChild","id","el"]);rt(t,!1);const b=mt(),y=()=>ut(A,"$content",b),n=()=>ut(M,"$open",b),e=Ct();let E=h(t,"transition",24,()=>{}),q=h(t,"transitionConfig",24,()=>{}),x=h(t,"inTransition",24,()=>{}),z=h(t,"inTransitionConfig",24,()=>{}),w=h(t,"outTransition",24,()=>{}),P=h(t,"outTransitionConfig",24,()=>{}),S=h(t,"asChild",8,!1),s=h(t,"id",24,()=>{}),l=h(t,"el",28,()=>{});const{elements:{content:A},states:{open:M},ids:D,getAttrs:W}=Ot(),et=W("content");N(()=>it(s()),()=>{s()&&D.content.set(s())}),N(()=>y(),()=>{yt(e,y())}),N(()=>o(e),()=>{Object.assign(o(e),et)}),bt(),lt();var dt=F(),nt=k(dt);U(nt,()=>S()&&n(),at=>{var Y=F(),G=k(Y);V(G,t,"default",{get builder(){return o(e)}},null),_(at,Y)},at=>{var Y=F(),G=k(Y);U(G,()=>E()&&n(),r=>{var c=me();let f;var K=ot(c);V(K,t,"default",{get builder(){return o(e)}},null),st(c),Q(c,a=>l(a),()=>l()),X(c,a=>o(e).action(a)),u(()=>d("pointerdown",c,function(a){g.call(this,t,a)})),u(()=>d("pointermove",c,function(a){g.call(this,t,a)})),u(()=>d("pointerup",c,function(a){g.call(this,t,a)})),u(()=>d("touchcancel",c,function(a){g.call(this,t,a)})),u(()=>d("touchend",c,function(a){g.call(this,t,a)})),u(()=>d("touchmove",c,function(a){g.call(this,t,a)},void 0,!1)),u(()=>d("touchstart",c,function(a){g.call(this,t,a)},void 0,!1)),p(()=>f=J(c,f,{...o(e),...C})),tt(3,c,E,q),_(r,c)},r=>{var c=F(),f=k(c);U(f,()=>x()&&w()&&n(),K=>{var a=be();let R;var L=ot(a);V(L,t,"default",{get builder(){return o(e)}},null),st(a),Q(a,i=>l(i),()=>l()),X(a,i=>o(e).action(i)),u(()=>d("pointerdown",a,function(i){g.call(this,t,i)})),u(()=>d("pointermove",a,function(i){g.call(this,t,i)})),u(()=>d("pointerup",a,function(i){g.call(this,t,i)})),u(()=>d("touchcancel",a,function(i){g.call(this,t,i)})),u(()=>d("touchend",a,function(i){g.call(this,t,i)})),u(()=>d("touchmove",a,function(i){g.call(this,t,i)},void 0,!1)),u(()=>d("touchstart",a,function(i){g.call(this,t,i)},void 0,!1)),p(()=>R=J(a,R,{...o(e),...C})),tt(1,a,x,z),tt(2,a,w,P),_(K,a)},K=>{var a=F(),R=k(a);U(R,()=>x()&&n(),L=>{var i=Ce();let j;var Z=ot(i);V(Z,t,"default",{get builder(){return o(e)}},null),st(i),Q(i,v=>l(v),()=>l()),X(i,v=>o(e).action(v)),u(()=>d("pointerdown",i,function(v){g.call(this,t,v)})),u(()=>d("pointermove",i,function(v){g.call(this,t,v)})),u(()=>d("pointerup",i,function(v){g.call(this,t,v)})),u(()=>d("touchcancel",i,function(v){g.call(this,t,v)})),u(()=>d("touchend",i,function(v){g.call(this,t,v)})),u(()=>d("touchmove",i,function(v){g.call(this,t,v)},void 0,!1)),u(()=>d("touchstart",i,function(v){g.call(this,t,v)},void 0,!1)),p(()=>j=J(i,j,{...o(e),...C})),tt(1,i,x,z),_(L,i)},L=>{var i=F(),j=k(i);U(j,()=>w()&&n(),Z=>{var v=ye();let $;var _t=ot(v);V(_t,t,"default",{get builder(){return o(e)}},null),st(v),Q(v,m=>l(m),()=>l()),X(v,m=>o(e).action(m)),u(()=>d("pointerdown",v,function(m){g.call(this,t,m)})),u(()=>d("pointermove",v,function(m){g.call(this,t,m)})),u(()=>d("pointerup",v,function(m){g.call(this,t,m)})),u(()=>d("touchcancel",v,function(m){g.call(this,t,m)})),u(()=>d("touchend",v,function(m){g.call(this,t,m)})),u(()=>d("touchmove",v,function(m){g.call(this,t,m)},void 0,!1)),u(()=>d("touchstart",v,function(m){g.call(this,t,m)},void 0,!1)),p(()=>$=J(v,$,{...o(e),...C})),tt(2,v,w,P),_(Z,v)},Z=>{var v=F(),$=k(v);U($,n,_t=>{var m=Oe();let Dt;var Kt=ot(m);V(Kt,t,"default",{get builder(){return o(e)}},null),st(m),Q(m,B=>l(B),()=>l()),X(m,B=>o(e).action(B)),u(()=>d("pointerdown",m,function(B){g.call(this,t,B)})),u(()=>d("pointermove",m,function(B){g.call(this,t,B)})),u(()=>d("pointerup",m,function(B){g.call(this,t,B)})),u(()=>d("touchcancel",m,function(B){g.call(this,t,B)})),u(()=>d("touchend",m,function(B){g.call(this,t,B)})),u(()=>d("touchmove",m,function(B){g.call(this,t,B)},void 0,!1)),u(()=>d("touchstart",m,function(B){g.call(this,t,B)},void 0,!1)),p(()=>Dt=J(m,Dt,{...o(e),...C})),_(_t,m)},null,!0),_(Z,v)},!0),_(L,i)},!0),_(K,a)},!0),_(r,c)},!0),_(at,Y)}),_(O,dt),ct()}var ke=H("<div></div>"),Ee=H("<div></div>"),we=H("<div></div>"),Pe=H("<div></div>"),De=H("<div></div>");function xe(O,t){const T=I(t,["children","$$slots","$$events","$$legacy"]),C=I(T,["transition","transitionConfig","inTransition","inTransitionConfig","outTransition","outTransitionConfig","asChild","el"]);rt(t,!1);const b=mt(),y=()=>ut(l,"$overlay",b),n=()=>ut(A,"$open",b),e=Ct();let E=h(t,"transition",24,()=>{}),q=h(t,"transitionConfig",24,()=>{}),x=h(t,"inTransition",24,()=>{}),z=h(t,"inTransitionConfig",24,()=>{}),w=h(t,"outTransition",24,()=>{}),P=h(t,"outTransitionConfig",24,()=>{}),S=h(t,"asChild",8,!1),s=h(t,"el",28,()=>{});const{elements:{overlay:l},states:{open:A},getAttrs:M}=Ot(),D=M("overlay");N(()=>y(),()=>{yt(e,y())}),N(()=>o(e),()=>{Object.assign(o(e),D)}),bt(),lt();var W=F(),et=k(W);U(et,()=>S()&&n(),dt=>{var nt=F(),at=k(nt);V(at,t,"default",{get builder(){return o(e)}},null),_(dt,nt)},dt=>{var nt=F(),at=k(nt);U(at,()=>E()&&n(),Y=>{var G=ke();let r;u(()=>d("mouseup",G,function(c){g.call(this,t,c)})),Q(G,c=>s(c),()=>s()),X(G,c=>o(e).action(c)),p(()=>r=J(G,r,{...o(e),...C})),tt(3,G,E,q),_(Y,G)},Y=>{var G=F(),r=k(G);U(r,()=>x()&&w()&&n(),c=>{var f=Ee();let K;Q(f,a=>s(a),()=>s()),X(f,a=>o(e).action(a)),u(()=>d("mouseup",f,function(a){g.call(this,t,a)})),p(()=>K=J(f,K,{...o(e),...C})),tt(1,f,x,z),tt(2,f,w,P),_(c,f)},c=>{var f=F(),K=k(f);U(K,()=>x()&&n(),a=>{var R=we();let L;Q(R,i=>s(i),()=>s()),X(R,i=>o(e).action(i)),u(()=>d("mouseup",R,function(i){g.call(this,t,i)})),p(()=>L=J(R,L,{...o(e),...C})),tt(1,R,x,z),_(a,R)},a=>{var R=F(),L=k(R);U(L,()=>w()&&n(),i=>{var j=Pe();let Z;Q(j,v=>s(v),()=>s()),X(j,v=>o(e).action(v)),u(()=>d("mouseup",j,function(v){g.call(this,t,v)})),p(()=>Z=J(j,Z,{...o(e),...C})),tt(2,j,w,P),_(i,j)},i=>{var j=F(),Z=k(j);U(Z,n,v=>{var $=De();let _t;Q($,m=>s(m),()=>s()),X($,m=>o(e).action(m)),u(()=>d("mouseup",$,function(m){g.call(this,t,m)})),p(()=>_t=J($,_t,{...o(e),...C})),_(v,$)},null,!0),_(i,j)},!0),_(a,R)},!0),_(c,f)},!0),_(Y,G)},!0),_(dt,nt)}),_(O,W),ct()}var Ae=H("<button><!></button>");function Fe(O,t){const T=I(t,["children","$$slots","$$events","$$legacy"]),C=I(T,["asChild","el"]);rt(t,!1);const b=mt(),y=()=>ut(q,"$trigger",b),n=Ct();let e=h(t,"asChild",8,!1),E=h(t,"el",28,()=>{});const{elements:{trigger:q},getAttrs:x}=Ot(),z=Mt(),w=x("trigger");N(()=>y(),()=>{yt(n,y())}),N(()=>o(n),()=>{Object.assign(o(n),w)}),bt(),lt();var P=F(),S=k(P);U(S,e,s=>{var l=F(),A=k(l);V(A,t,"default",{get builder(){return o(n)}},null),_(s,l)},s=>{var l=Ae();let A;var M=ot(l);V(M,t,"default",{get builder(){return o(n)}},null),st(l),Q(l,D=>E(D),()=>E()),X(l,D=>o(n).action(D)),u(()=>d("m-click",l,z)),u(()=>d("m-keydown",l,z)),p(()=>A=J(l,A,{...o(n),type:"button",...C})),_(s,l)}),_(O,P),ct()}function Se(O,t){const T=I(t,["children","$$slots","$$events","$$legacy"]),C=I(T,[]);he(O,Et(()=>C,{children:(b,y)=>{var n=F(),e=k(n);V(e,t,"default",{},null),_(b,n)},$$slots:{default:!0}}))}var ze=H("<div><!></div>");function Qe(O,t){const T=I(t,["children","$$slots","$$events","$$legacy"]),C=I(T,["class"]);rt(t,!1);let b=h(t,"class",8,void 0);lt();var y=ze();let n;var e=ot(y);V(e,t,"default",{},null),st(y),p(()=>n=J(y,n,{class:Pt("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2",b()),...C})),_(O,y),ct()}function Ne(O,t){const T=I(t,["children","$$slots","$$events","$$legacy"]),C=I(T,["class","transition","transitionConfig"]);rt(t,!1);let b=h(t,"class",8,void 0),y=h(t,"transition",8,te),n=h(t,"transitionConfig",24,()=>({duration:150}));lt();var e=It(()=>Pt("bg-background/80 fixed inset-0 z-50 backdrop-blur-sm",b()));xe(O,Et({get transition(){return y()},get transitionConfig(){return n()},get class(){return o(e)}},()=>C)),ct()}function Ie(O,t){const T=I(t,["children","$$slots","$$events","$$legacy"]);ee(O,Et({name:"x"},()=>T,{iconNode:[["path",{d:"M18 6 6 18"}],["path",{d:"m6 6 12 12"}]],children:(b,y)=>{var n=F(),e=k(n);V(e,t,"default",{},null),_(b,n)},$$slots:{default:!0}}))}var Me=H('<!> <span class="sr-only">Close</span>',1),Re=H("<!> <!>",1),je=H("<!> <!>",1);function Ye(O,t){const T=I(t,["children","$$slots","$$events","$$legacy"]),C=I(T,["class","transition","transitionConfig"]);rt(t,!1);let b=h(t,"class",8,void 0),y=h(t,"transition",8,Xt),n=h(t,"transitionConfig",24,()=>({duration:200}));lt(),Se(O,{children:(e,E)=>{var q=je(),x=k(q);Ne(x,{});var z=xt(x,2),w=It(()=>Pt("bg-background fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border p-6 shadow-lg sm:rounded-lg md:w-full",b()));Te(z,Et({get transition(){return y()},get transitionConfig(){return n()},get class(){return o(w)}},()=>C,{children:(P,S)=>{var s=Re(),l=k(s);V(l,t,"default",{},null);var A=xt(l,2);Vt(A,{class:"ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute right-4 top-4 rounded-sm opacity-70 transition-opacity hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:pointer-events-none",children:(M,D)=>{var W=Me(),et=k(W);Ie(et,{class:"h-4 w-4"}),Gt(2),_(M,W)},$$slots:{default:!0}}),_(P,s)},$$slots:{default:!0}})),_(e,q)},$$slots:{default:!0}}),ct()}const Ze=ve,$e=Fe,tn=Vt;export{tn as C,Ye as D,Ze as R,$e as T,Qe as a,Ot as g};
