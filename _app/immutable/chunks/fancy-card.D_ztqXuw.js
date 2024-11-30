import{l as be,f as u,a as y,b as R,e as L}from"./disclose-version.Cfp-rwoP.js";import{av as ye,a0 as ve,m as pe,p as C,t as S,a as w,q as T,b as W,f as I,g,e as Ee,s as De,c as Q,r as Z,N as $,k as Ce,d as B}from"./utils.jAVDF0d8.js";import{s as ee}from"./large.ByyYWDDF.js";import{l as p,p as h,o as we,a as j,b as Ae,r as Be}from"./index-client.BSQKl7cS.js";import{T as ke}from"./titled-page.yxPzeLrH.js";import{i as O}from"./legacy.Ccq7PQRh.js";import{u as _e,b as H,c as M,a as te,f as re}from"./base.CpooS240.js";import{b as c}from"./misc.Dzvx5Zh0.js";function xe(e,t,l=t){var a=ye();be(e,"input",()=>{var n=K(e)?J(e.value):e.value;l(n),a&&n!==(n=t())&&(e.value=n??"")}),ve(()=>{var n=t();if(pe&&e.defaultValue!==e.value){l(e.value);return}K(e)&&n===J(e.value)||e.type==="date"&&!n&&!e.value||n!==e.value&&(e.value=n??"")})}function K(e){var t=e.type;return t==="number"||t==="range"}function J(e){return e===""?null:+e}const m=(e,t,l)=>e<=t&&t<=l,v=e=>e.trim().length===0,k="hex",_="hsl",x="rgb",ne="unknown";function Pe(e,t,l,a=1){if(!m(0,e,360))throw'[Utils] Unexpected Input: "h" should be a number between 0 and 360';if(!m(0,l,100))throw'[Utils] Unexpected Input: "l" should be a number between 0 and 100';if(!m(0,t,100))throw'[Utils] Unexpected Input: "s" should be a number between 0 and 100';if(!m(0,a,1))throw'[Utils] Unexpected Input: "a" should be a number between 0 and 1';return`hsla(${e}deg ${t}% ${l}% / ${a})`}const Ie=/^hsl\((\d{1,3})(\.\d+){0,1}deg (\d{1,3})(\.\d+){0,1}% (\d{1,3})(\.\d+){0,1}%\)$/,Ue=/^hsla\((\d{1,3})(\.\d+){0,1}deg (\d{1,3})(\.\d+){0,1}% (\d{1,3})(\.\d+){0,1}%( \/ (\d{1,3})(\.\d+){0,1}){0,1}\)$/;function ae(e){return v(e)?!1:Ie.test(e)}function se(e){return v(e)?!1:Ue.test(e)}function U(e){if(se(e))return e.slice(5,-1).replace("%","").replace("deg","").replace("/","").replace("  "," ").split(" ").map(t=>parseFloat(t.trim()));if(ae(e))return e.slice(4,-1).replace("%","").replace("deg","").replace("/","").split(" ").map(t=>parseFloat(t.trim()));throw"[Utils] Unexpected Input: (color) is not of a HSL/HSLA form."}function Re(e){if(v(e))return!1;if(ae(e)){const[t,l,a]=U(e);return!(360<t||t<0||100<l||l<0||100<a||a<0)}else if(se(e)){const[t,l,a,n]=U(e);return!(360<t||t<0||100<l||l<0||100<a||a<0||n!==void 0&&(1<n||n<0))}return!1}function Se(e,t,l){t/=100,l/=100,e=e%360;const a=(1-Math.abs(2*l-1))*t,n=a*(1-Math.abs(e/60%2-1)),s=l-a/2;let i=0,r=0,d=0;return 0<=e&&e<60?(i=a,r=n,d=0):60<=e&&e<120?(i=n,r=a,d=0):120<=e&&e<180?(i=0,r=a,d=n):180<=e&&e<240?(i=0,r=n,d=a):240<=e&&e<300?(i=n,r=0,d=a):300<=e&&e<360&&(i=a,r=0,d=n),i=Math.round((i+s)*255),r=Math.round((r+s)*255),d=Math.round((d+s)*255),[i,r,d]}function He(e,t,l){e/=255,t/=255,l/=255;const a=Math.min(e,t,l),n=Math.max(e,t,l),s=n-a;let i=0,r=0,d=0;return s==0?i=0:n==e?i=(t-l)/s%6:n==t?i=(l-e)/s+2:i=(e-t)/s+4,i=Math.round(i*60),i<0&&(i+=360),d=(n+a)/2,r=s==0?0:s/(1-Math.abs(2*d-1)),r=+(r*100).toFixed(2),d=+(d*100).toFixed(2),[P(i),P(r),P(d)]}function le(e){return oe(e)?k:Re(e)?_:Ge(e)?x:ne}function Me(e,t,l,a=1){function n(s){const i=Math.round(s).toString(16);return i.length==1?"0"+i:i}return"#"+n(e)+n(t)+n(l)+n(a*255)}const P=e=>Math.round(e*100)/100;function ie(e,t){const l=le(e);if(l===ne||![k,_,x].includes(t)||t===l)return e;let[a,n,s,i]=[0,0,0,1];if(l===k){const r=e.substring(1),d=r.length;d===3?(a=parseInt(r[0]+r[0],16),n=parseInt(r[1]+r[1],16),s=parseInt(r[2]+r[2],16)):d>=6&&(a=parseInt(r.substring(0,2),16),n=parseInt(r.substring(2,4),16),s=parseInt(r.substring(4,6),16),d===8&&(i=P(parseInt(r.substring(6),16)/256)))}else if(l===_){const[r,d,o,f]=U(e);f!==void 0&&(i=f),[a,n,s]=Se(r,d,o)}else if(l===x){const[r,d,o,f]=X(e);f!==void 0&&(i=f),[a,n,s]=[r,d,o]}if(t===x)return`rgba(${a},${n},${s},${i})`;if(t===_){const[r,d,o]=He(a,n,s);return`hsla(${r}deg ${d}% ${o}% / ${i})`}else if(t===k)return Me(a,n,s,i);return e}function oe(e){if(v(e))return!1;const t=/^#[0-9|a|A|b|B|c|C|d|D|e|E|f|F]{3}$/,l=/^#[0-9|a|A|b|B|c|C|d|D|e|E|f|F]{6}$/,a=/^#[0-9|a|A|b|B|c|C|d|D|e|E|f|F]{8}$/;return t.test(e)||l.test(e)||a.test(e)}const qe=/^rgb\((\d{1,3})(\.\d+){0,1},( ){0,1}(\d{1,3})(\.\d+){0,1},( ){0,1}(\d{1,3})(\.\d+){0,1}\)$/,Ne=/^rgba\((\d{1,3})(\.\d+){0,1},( ){0,1}(\d{1,3})(\.\d+){0,1},( ){0,1}(\d{1,3})(\.\d+){0,1}(,( ){0,1}(\d{1})(\.\d+){0,1}){0,1}\)$/;function de(e){return v(e)?!1:qe.test(e)}function ue(e){return v(e)?!1:Ne.test(e)}function X(e){if(ue(e))return e.slice(5,-1).split(",").map(t=>parseFloat(t.trim()));if(de(e))return e.slice(4,-1).split(",").map(t=>parseFloat(t.trim()));throw"[Utils] Unexpected Input: (color) is not of a RGB/RGBA form."}function Ge(e){if(v(e))return!1;if(de(e)){const[t,l,a]=X(e);for(const n of[t,l,a])if(!m(0,n,256))return!1;return!0}else if(ue(e)){const[t,l,a,n]=X(e);for(const s of[t,l,a])if(!m(0,s,256))return!1;return!(n!==void 0&&!m(0,n,1))}return!1}function Le(e){const t=ie(e,"hsl");if(le(t)==="unknown")throw"[Utils] Unexpected Input: unable to specify (color) type, maybe it is badly formatted ?";return t}function G(e,t,l){const a=Le(e);if(!m(0,t,1))throw"[Utils] Unexpected Input: opacity should be a number between 0 and 1";const[n,s,i]=U(a);return ie(Pe(n,s,i,t),"hex")}var Te=R("<input>");function Xe(e,t){const l=p(t,["children","$$slots","$$events","$$legacy"]),a=p(l,["class","value","readonly"]);C(t,!1);let n=h(t,"class",8,void 0),s=h(t,"value",12,void 0),i=h(t,"readonly",8,void 0);O();var r=Te();_e(r);let d;S(()=>d=H(r,d,{class:M("border-input bg-background ring-offset-background placeholder:text-muted-foreground focus-visible:ring-ring flex h-10 w-full rounded-md border px-3 py-2 text-sm file:border-0 file:bg-transparent file:text-sm file:font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",n()),readonly:i(),...a})),xe(r,s),u("blur",r,function(o){c.call(this,t,o)}),u("change",r,function(o){c.call(this,t,o)}),u("click",r,function(o){c.call(this,t,o)}),u("focus",r,function(o){c.call(this,t,o)}),u("focusin",r,function(o){c.call(this,t,o)}),u("focusout",r,function(o){c.call(this,t,o)}),u("keydown",r,function(o){c.call(this,t,o)}),u("keypress",r,function(o){c.call(this,t,o)}),u("keyup",r,function(o){c.call(this,t,o)}),u("mouseover",r,function(o){c.call(this,t,o)}),u("mouseenter",r,function(o){c.call(this,t,o)}),u("mouseleave",r,function(o){c.call(this,t,o)}),u("mousemove",r,function(o){c.call(this,t,o)}),u("paste",r,function(o){c.call(this,t,o)}),u("input",r,function(o){c.call(this,t,o)}),u("wheel",r,function(o){c.call(this,t,o)},void 0,!0),y(e,r),w()}var ze=R("<!> <!>",1);function tt(e,t){C(t,!0);let l=h(t,"title",3,"Untitled"),a=Ee("");T(()=>{{let n=new URLSearchParams(window.location.search);n.set("q",g(a));const s=`${window.location.protocol}//${window.location.host}${window.location.pathname}?${n.toString()}`,i=window.history.state;window.history.replaceState(i,"",s),t.onSearch(g(a))}}),we(()=>{let n=new URLSearchParams(window.location.search);W(a,j(n.get("q")??""))}),ke(e,{get title(){return l()},children:(n,s)=>{var i=ze(),r=I(i);Xe(r,{placeholder:"Search...",get value(){return g(a)},set value(o){W(a,j(o))}});var d=De(r,2);ee(d,()=>t.children),y(n,i)},$$slots:{default:!0}}),w()}var Oe=R("<div><!></div>");function rt(e,t){const l=p(t,["children","$$slots","$$events","$$legacy"]),a=p(l,["class"]);C(t,!1);let n=h(t,"class",8,void 0);O();var s=Oe();let i;var r=Q(s);te(r,t,"default",{}),Z(s),S(()=>i=H(s,i,{class:M("p-6",n()),...a})),y(e,s),w()}function nt(e,t){const l=p(t,["children","$$slots","$$events","$$legacy"]),a=p(l,["class","tag"]);C(t,!1);let n=h(t,"class",8,void 0),s=h(t,"tag",8,"h3");O();var i=L(),r=I(i);re(r,s,!1,(d,o)=>{let f;S(()=>f=H(d,f,{class:M("text-lg font-semibold leading-none tracking-tight",n()),...a},void 0,d.namespaceURI===$,d.nodeName.includes("-")));var E=L(),q=I(E);te(q,t,"default",{}),y(o,E)}),y(e,i),w()}const z={aliceblue:"#F0F8FF",antiquewhite:"#FAEBD7",aqua:"#00FFFF",aquamarine:"#7FFFD4",azure:"#F0FFFF",beige:"#F5F5DC",bisque:"#FFE4C4",black:"#000000",blanchedalmond:"#FFEBCD",blue:"#0000FF",blueviolet:"#8A2BE2",brown:"#A52A2A",burlywood:"#DEB887",cadetblue:"#5F9EA0",chartreuse:"#7FFF00",chocolate:"#D2691E",coral:"#FF7F50",cornflowerblue:"#6495ED",cornsilk:"#FFF8DC",crimson:"#DC143C",cyan:"#00FFFF",darkblue:"#00008B",darkcyan:"#008B8B",darkgoldenrod:"#B8860B",darkgray:"#A9A9A9",darkgreen:"#006400",darkgrey:"#A9A9A9",darkkhaki:"#BDB76B",darkmagenta:"#8B008B",darkolivegreen:"#556B2F",darkorange:"#FF8C00",darkorchid:"#9932CC",darkred:"#8B0000",darksalmon:"#E9967A",darkseagreen:"#8FBC8F",darkslateblue:"#483D8B",darkslategray:"#2F4F4F",darkslategrey:"#2F4F4F",darkturquoise:"#00CED1",darkviolet:"#9400D3",deeppink:"#FF1493",deepskyblue:"#00BFFF",dimgray:"#696969",dimgrey:"#696969",dodgerblue:"#1E90FF",firebrick:"#B22222",floralwhite:"#FFFAF0",forestgreen:"#228B22",fuchsia:"#FF00FF",gainsboro:"#DCDCDC",ghostwhite:"#F8F8FF",gold:"#FFD700",goldenrod:"#DAA520",gray:"#808080",green:"#008000",greenyellow:"#ADFF2F",grey:"#808080",honeydew:"#F0FFF0",hotpink:"#FF69B4",indianred:"#CD5C5C",indigo:"#4B0082",ivory:"#FFFFF0",khaki:"#F0E68C",lavender:"#E6E6FA",lavenderblush:"#FFF0F5",lawngreen:"#7CFC00",lemonchiffon:"#FFFACD",lightblue:"#ADD8E6",lightcoral:"#F08080",lightcyan:"#E0FFFF",lightgoldenrodyellow:"#FAFAD2",lightgray:"#D3D3D3",lightgreen:"#90EE90",lightgrey:"#D3D3D3",lightpink:"#FFB6C1",lightsalmon:"#FFA07A",lightseagreen:"#20B2AA",lightskyblue:"#87CEFA",lightslategray:"#778899",lightslategrey:"#778899",lightsteelblue:"#B0C4DE",lightyellow:"#FFFFE0",lime:"#00FF00",limegreen:"#32CD32",linen:"#FAF0E6",magenta:"#FF00FF",maroon:"#800000",mediumaquamarine:"#66CDAA",mediumblue:"#0000CD",mediumorchid:"#BA55D3",mediumpurple:"#9370DB",mediumseagreen:"#3CB371",mediumslateblue:"#7B68EE",mediumspringgreen:"#00FA9A",mediumturquoise:"#48D1CC",mediumvioletred:"#C71585",midnightblue:"#191970",mintcream:"#F5FFFA",mistyrose:"#FFE4E1",moccasin:"#FFE4B5",navajowhite:"#FFDEAD",navy:"#000080",oldlace:"#FDF5E6",olive:"#808000",olivedrab:"#6B8E23",orange:"#FFA500",orangered:"#FF4500",orchid:"#DA70D6",palegoldenrod:"#EEE8AA",palegreen:"#98FB98",paleturquoise:"#AFEEEE",palevioletred:"#DB7093",papayawhip:"#FFEFD5",peachpuff:"#FFDAB9",peru:"#CD853F",pink:"#FFC0CB",plum:"#DDA0DD",powderblue:"#B0E0E6",purple:"#800080",red:"#FF0000",rosybrown:"#BC8F8F",royalblue:"#4169E1",saddlebrown:"#8B4513",salmon:"#FA8072",sandybrown:"#F4A460",seagreen:"#2E8B57",seashell:"#FFF5EE",sienna:"#A0522D",silver:"#C0C0C0",skyblue:"#87CEEB",slateblue:"#6A5ACD",slategray:"#708090",slategrey:"#708090",snow:"#FFFAFA",springgreen:"#00FF7F",steelblue:"#4682B4",tan:"#D2B48C",teal:"#008080",thistle:"#D8BFD8",tomato:"#FF6347",turquoise:"#40E0D0",violet:"#EE82EE",wheat:"#F5DEB3",white:"#FFFFFF",whitesmoke:"#F5F5F5",yellow:"#FFFF00",yellowgreen:"#9ACD32"},Ye=e=>{const t=z[e];return t||z.white};var Ve=R('<div class="card-color flex flex-1 flex-col svelte-1kl7305"><!></div>');function at(e,t){C(t,!0);const l=h(t,"color",19,()=>z.gray),a=h(t,"tilt",3,5),n=Be(t,["$$slots","$$events","$$legacy","color","href","bgImg","tilt","class","children"]);let s,i=B(()=>oe(l())?l():Ye(l())),r=B(()=>G(g(i),.3)),d=B(()=>G(g(i),.15)),o=B(()=>G(g(i),.01));const f=F=>{if(!a())return;const b=F.currentTarget.getBoundingClientRect(),D=F.clientX-b.left,N=F.clientY-b.top;s.style.setProperty("--drop-x",`${D}px`),s.style.setProperty("--drop-y",`${N}px`);const A=s.offsetWidth,V=s.offsetHeight,ce=b.x+A/2,fe=b.y+V/2,Fe=F.clientX-ce,ge=F.clientY-fe,he=(a()*Fe/(A/2)).toFixed(2),me=(-1*(a()*ge)/(V/2)).toFixed(2);s.style.setProperty("--rot-x",`${me}deg`),s.style.setProperty("--rot-y",`${he}deg`)};T(()=>{s&&(s.style.setProperty("--border-color",g(r)),s.style.setProperty("--drop-color",g(d)),s.style.setProperty("--bg-color",g(o)),t.bgImg&&s.style.setProperty("--bg-img",`url("${t.bgImg}")`),a()&&(s.style.setProperty("--drop-x","0"),s.style.setProperty("--drop-y","0"),s.style.setProperty("--rot-x","0"),s.style.setProperty("--rot-y","0")))}),T(()=>{s.style.setProperty("--card-color","hsl(var(--card) / 1)"),s.style.setProperty("--card-color-60","hsl(var(--card) / 0.6)"),s.style.setProperty("--card-color-30","hsl(var(--card) / 0.3)")});var E=L(),q=I(E);re(q,()=>t.href?"a":"div",!1,(F,Y)=>{Ae(F,A=>s=A,()=>s);let b;S(()=>b=H(F,b,{href:t.href,class:M("card rounded-lg border bg-card text-card-foreground shadow-sm",t.class),...n,onmousemove:f},"svelte-1kl7305",F.namespaceURI===$,F.nodeName.includes("-")));var D=Ve(),N=Q(D);ee(N,()=>t.children??Ce),Z(D),y(Y,D)}),y(e,E),w()}export{rt as C,at as F,z as N,tt as S,nt as a};
