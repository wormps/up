(()=>{var A5=Object.defineProperty;var E5=Object.defineProperties;var P5=Object.getOwnPropertyDescriptors;var Mu=Object.getOwnPropertySymbols;var R5=Object.prototype.hasOwnProperty;var M5=Object.prototype.propertyIsEnumerable;var Cu=(a,e,t)=>e in a?A5(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var Ou=(a,e)=>{for(var t in e||(e={}))if(R5.call(e,t)){Cu(a,t,e[t])}
if(Mu){for(var t of Mu(e))if(M5.call(e,t)){Cu(a,t,e[t])}}
return a};var C5=(a,e)=>E5(a,P5(e));var I=(a=>(a.Application="application",a.WebGLPipes="webgl-pipes",a.WebGLPipesAdaptor="webgl-pipes-adaptor",a.WebGLSystem="webgl-system",a.WebGPUPipes="webgpu-pipes",a.WebGPUPipesAdaptor="webgpu-pipes-adaptor",a.WebGPUSystem="webgpu-system",a.CanvasSystem="canvas-system",a.CanvasPipesAdaptor="canvas-pipes-adaptor",a.CanvasPipes="canvas-pipes",a.Asset="asset",a.LoadParser="load-parser",a.ResolveParser="resolve-parser",a.CacheParser="cache-parser",a.DetectionParser="detection-parser",a.MaskEffect="mask-effect",a.BlendMode="blend-mode",a.TextureSource="texture-source",a.Environment="environment",a.ShapeBuilder="shape-builder",a.Batcher="batcher",a))(I||{});var vd=a=>{if(typeof a=="function"||typeof a=="object"&&a.extension){let e=typeof a.extension!="object"?{type:a.extension}:a.extension;a=C5(Ou({},e),{ref:a})}
if(typeof a=="object"){a=Ou({},a)}else{throw new Error("Invalid extension type")}
if(typeof a.type=="string"){a.type=[a.type]}
return a};var cr=(a,e)=>{var t;return(t=vd(a).priority)!=null?t:e};var fe={_addHandlers:{},_removeHandlers:{},_queue:{},remove(...a){a.map(vd).forEach(e=>{e.type.forEach(t=>{var i;var s;return(s=(i=this._removeHandlers)[t])==null?undefined:s.call(i,e)})});return this},add(...a){a.map(vd).forEach(e=>{e.type.forEach(t=>{var i;var s;let r=this._addHandlers;let n=this._queue;if(r[t]){if(!((s=r[t])==null)){s.call(r,e)}}else{n[t]=n[t]||[];if(!((i=n[t])==null)){i.push(e)}}})});return this},handle(a,e,t){var i;let s=this._addHandlers;let r=this._removeHandlers;s[a]=e;r[a]=t;let n=this._queue;if(n[a]){if(!((i=n[a])==null)){i.forEach(d=>e(d))}
delete n[a]}
return this},handleByMap(a,e){return this.handle(a,t=>{if(t.name){e[t.name]=t.ref}},t=>{if(t.name){delete e[t.name]}})},handleByNamedList(a,e,t=-1){return this.handle(a,i=>{if(!(e.findIndex(s=>s.name===i.name)>=0)){e.push({name:i.name,value:i.ref});e.sort((s,r)=>cr(r.value,t)-cr(s.value,t))}},i=>{let s=e.findIndex(r=>r.name===i.name);if(s!==-1){e.splice(s,1)}})},handleByList(a,e,t=-1){return this.handle(a,i=>{if(!e.includes(i.ref)){e.push(i.ref);e.sort((s,r)=>cr(r,t)-cr(s,t))}},i=>{let s=e.indexOf(i.ref);if(s!==-1){e.splice(s,1)}})}};function hl(a){return a&&a.__esModule&&Object.prototype.hasOwnProperty.call(a,"default")?a.default:a}
var ll={exports:{}};(function(a){"use strict";var e=Object.prototype.hasOwnProperty;var t="~";function i(){}
if(Object.create){i.prototype=Object.create(null);if(!new i().__proto__){t=!1}}
function s(h,l,f){this.fn=h;this.context=l;this.once=f||!1}
function r(h,l,f,p,_){if(typeof f!="function"){throw new TypeError("The listener must be a function")}
var m=new s(f,p||h,_);var v=t?t+l:l;if(h._events[v]){if(h._events[v].fn){h._events[v]=[h._events[v],m]}else{h._events[v].push(m)}}else{h._events[v]=m;h._eventsCount++}
return h}
function n(h,l){if(--h._eventsCount===0){h._events=new i()}else{delete h._events[l]}}
function d(){this._events=new i();this._eventsCount=0}
d.prototype.eventNames=function(){var h=[];var l;var f;if(this._eventsCount===0){return h}
for(f in l=this._events)if(e.call(l,f)){h.push(t?f.slice(1):f)}
return Object.getOwnPropertySymbols?h.concat(Object.getOwnPropertySymbols(l)):h};d.prototype.listeners=function(h){var l=t?t+h:h;var f=this._events[l];if(!f){return[]}
if(f.fn){return[f.fn]}
var p=0;var _=f.length;for(var m=new Array(_);p<_;p++){m[p]=f[p].fn}
return m};d.prototype.listenerCount=function(h){var l=t?t+h:h;var f=this._events[l];return f?f.fn?1:f.length:0};d.prototype.emit=function(h,l,f,p,_,m){var v=t?t+h:h;if(!this._events[v]){return!1}
var T=this._events[v];var w=arguments.length;var P;var C;if(T.fn){if(T.once){this.removeListener(h,T.fn,undefined,!0)}
switch(w){case 1:T.fn.call(T.context);return!0;case 2:T.fn.call(T.context,l);return!0;case 3:T.fn.call(T.context,l,f);return!0;case 4:T.fn.call(T.context,l,f,p);return!0;case 5:T.fn.call(T.context,l,f,p,_);return!0;case 6:T.fn.call(T.context,l,f,p,_,m);return!0}
C=1;for(P=new Array(w-1);C<w;C++){P[C-1]=arguments[C]}
T.fn.apply(T.context,P)}else{var B=T.length;var D;for(C=0;C<B;C++){if(T[C].once){this.removeListener(h,T[C].fn,undefined,!0)}
switch(w){case 1:T[C].fn.call(T[C].context);break;case 2:T[C].fn.call(T[C].context,l);break;case 3:T[C].fn.call(T[C].context,l,f);break;case 4:T[C].fn.call(T[C].context,l,f,p);break;default:if(!P){D=1;for(P=new Array(w-1);D<w;D++){P[D-1]=arguments[D]}}
T[C].fn.apply(T[C].context,P)}}}
return!0};d.prototype.on=function(h,l,f){return r(this,h,l,f,!1)};d.prototype.once=function(h,l,f){return r(this,h,l,f,!0)};d.prototype.removeListener=function(h,l,f,p){var _=t?t+h:h;if(!this._events[_]){return this}
if(!l){n(this,_);return this}
var m=this._events[_];if(m.fn){if(m.fn===l&&(!p||m.once)&&(!f||m.context===f)){n(this,_)}}else{var v=0;var T=[];for(var w=m.length;v<w;v++){if(m[v].fn!==l||p&&!m[v].once||f&&m[v].context!==f){T.push(m[v])}}
if(T.length){this._events[_]=T.length===1?T[0]:T}else{n(this,_)}}
return this};d.prototype.removeAllListeners=function(h){var l;if(h){l=t?t+h:h;if(this._events[l]){n(this,l)}}else{this._events=new i();this._eventsCount=0}
return this};d.prototype.off=d.prototype.removeListener;d.prototype.addListener=d.prototype.on;d.prefixed=t;d.EventEmitter=d;a.exports=d})(ll);var O5=ll.exports;var xt=hl(O5);var I5={grad:.9,turn:360,rad:360/(2*Math.PI)};var sa=function(a){return typeof a=="string"?a.length>0:typeof a=="number"};var qe=function(a,e,t){if(e===undefined){e=0}
if(t===undefined){t=Math.pow(10,e)}
return Math.round(t*a)/t+0};var Et=function(a,e,t){if(e===undefined){e=0}
if(t===undefined){t=1}
return a>t?t:a>e?a:e};var ip=function(a){return(a=isFinite(a)?a%360:0)>0?a:a+360};var Iu=function(a){return{r:Et(a.r,0,255),g:Et(a.g,0,255),b:Et(a.b,0,255),a:Et(a.a)}};var vc=function(a){return{r:qe(a.r),g:qe(a.g),b:qe(a.b),a:qe(a.a,3)}};var G5=/^#([0-9a-f]{3,8})$/i;var dr=function(a){var e=a.toString(16);return e.length<2?"0"+e:e};var sp=function(a){var e=a.r;var t=a.g;var i=a.b;var s=a.a;var r=Math.max(e,t,i);var n=r-Math.min(e,t,i);var d=n?r===e?(t-i)/n:r===t?2+(i-e)/n:4+(e-t)/n:0;return{h:60*(d<0?d+6:d),s:r?n/r*100:0,v:r/255*100,a:s}};var rp=function(a){var e=a.h;var t=a.s;var i=a.v;var s=a.a;e=e/360*6;t/=100;i/=100;var r=Math.floor(e);var n=i*(1-t);var d=i*(1-(e-r)*t);var h=i*(1-(1-e+r)*t);var l=r%6;return{r:255*[i,d,n,n,h,i][l],g:255*[h,i,i,d,n,n][l],b:255*[n,n,h,i,i,d][l],a:s}};var Gu=function(a){return{h:ip(a.h),s:Et(a.s,0,100),l:Et(a.l,0,100),a:Et(a.a)}};var Bu=function(a){return{h:qe(a.h),s:qe(a.s),l:qe(a.l),a:qe(a.a,3)}};var Fu=function(a){t=a.s;return rp({h:a.h,s:(t*=((i=a.l)<50?i:100-i)/100)>0?2*t/(i+t)*100:0,v:i+t,a:a.a});var t;var i};var gs=function(a){return{h:(e=sp(a)).h,s:(s=(200-(t=e.s))*(i=e.v)/100)>0&&s<200?t*i/100/(s<=100?s:200-s)*100:0,l:s/2,a:e.a};var e;var t;var i;var s};var B5=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s*,\s*([+-]?\d*\.?\d+)%\s*,\s*([+-]?\d*\.?\d+)%\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;var F5=/^hsla?\(\s*([+-]?\d*\.?\d+)(deg|rad|grad|turn)?\s+([+-]?\d*\.?\d+)%\s+([+-]?\d*\.?\d+)%\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;var D5=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*,\s*([+-]?\d*\.?\d+)(%)?\s*(?:,\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;var k5=/^rgba?\(\s*([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s+([+-]?\d*\.?\d+)(%)?\s*(?:\/\s*([+-]?\d*\.?\d+)(%)?\s*)?\)$/i;var Td={string:[[function(a){var e=G5.exec(a);return e?(a=e[1]).length<=4?{r:parseInt(a[0]+a[0],16),g:parseInt(a[1]+a[1],16),b:parseInt(a[2]+a[2],16),a:a.length===4?qe(parseInt(a[3]+a[3],16)/255,2):1}:a.length===6||a.length===8?{r:parseInt(a.substr(0,2),16),g:parseInt(a.substr(2,2),16),b:parseInt(a.substr(4,2),16),a:a.length===8?qe(parseInt(a.substr(6,2),16)/255,2):1}:null:null},"hex"],[function(a){var e=D5.exec(a)||k5.exec(a);return e?e[2]!==e[4]||e[4]!==e[6]?null:Iu({r:Number(e[1])/(e[2]?0.39215686274509803:1),g:Number(e[3])/(e[4]?0.39215686274509803:1),b:Number(e[5])/(e[6]?0.39215686274509803:1),a:e[7]===undefined?1:Number(e[7])/(e[8]?100:1)}):null},"rgb"],[function(a){var e=B5.exec(a)||F5.exec(a);if(!e){return null}
var t;var i;t=e[1];i=e[2];if(i===undefined){i="deg"}
var s=Gu({h:Number(t)*(I5[i]||1),s:Number(e[3]),l:Number(e[4]),a:e[5]===undefined?1:Number(e[5])/(e[6]?100:1)});return Fu(s)},"hsl"]],object:[[function(a){var e=a.r;var t=a.g;var i=a.b;var s=a.a;var r=s===undefined?1:s;return sa(e)&&sa(t)&&sa(i)?Iu({r:Number(e),g:Number(t),b:Number(i),a:Number(r)}):null},"rgb"],[function(a){var e=a.h;var t=a.s;var i=a.l;var s=a.a;var r=s===undefined?1:s;if(!sa(e)||!sa(t)||!sa(i)){return null}
var n=Gu({h:Number(e),s:Number(t),l:Number(i),a:Number(r)});return Fu(n)},"hsl"],[function(a){var e=a.h;var t=a.s;var i=a.v;var s=a.a;var r=s===undefined?1:s;if(!sa(e)||!sa(t)||!sa(i)){return null}
var n=function(d){return{h:ip(d.h),s:Et(d.s,0,100),v:Et(d.v,0,100),a:Et(d.a)}}({h:Number(e),s:Number(t),v:Number(i),a:Number(r)});return rp(n)},"hsv"]]};var Du=function(a,e){for(var t=0;t<e.length;t++){var i=e[t][0](a);if(i){return[i,e[t][1]]}}
return[null,undefined]};var U5=function(a){return typeof a=="string"?Du(a.trim(),Td.string):typeof a=="object"&&a!==null?Du(a,Td.object):[null,undefined]};var Tc=function(a,e){var t=gs(a);return{h:t.h,s:Et(t.s+100*e,0,100),l:t.l,a:t.a}};var Sc=function(a){return(299*a.r+587*a.g+114*a.b)/1e3/255};var ku=function(a,e){var t=gs(a);return{h:t.h,s:t.s,l:Et(t.l+100*e,0,100),a:t.a}};var Sd=function(){function a(e){this.parsed=U5(e)[0];this.rgba=this.parsed||{r:0,g:0,b:0,a:1}}
a.prototype.isValid=function(){return this.parsed!==null};a.prototype.brightness=function(){return qe(Sc(this.rgba),2)};a.prototype.isDark=function(){return Sc(this.rgba)<.5};a.prototype.isLight=function(){return Sc(this.rgba)>=.5};a.prototype.toHex=function(){e=vc(this.rgba);t=e.r;i=e.g;s=e.b;n=(r=e.a)<1?dr(qe(255*r)):"";return"#"+dr(t)+dr(i)+dr(s)+n;var e;var t;var i;var s;var r;var n};a.prototype.toRgb=function(){return vc(this.rgba)};a.prototype.toRgbString=function(){e=vc(this.rgba);t=e.r;i=e.g;s=e.b;return(r=e.a)<1?"rgba("+t+", "+i+", "+s+", "+r+")":"rgb("+t+", "+i+", "+s+")";var e;var t;var i;var s;var r};a.prototype.toHsl=function(){return Bu(gs(this.rgba))};a.prototype.toHslString=function(){e=Bu(gs(this.rgba));t=e.h;i=e.s;s=e.l;return(r=e.a)<1?"hsla("+t+", "+i+"%, "+s+"%, "+r+")":"hsl("+t+", "+i+"%, "+s+"%)";var e;var t;var i;var s;var r};a.prototype.toHsv=function(){e=sp(this.rgba);return{h:qe(e.h),s:qe(e.s),v:qe(e.v),a:qe(e.a,3)};var e};a.prototype.invert=function(){return{r:255-(e=this.rgba).r,g:255-e.g,b:255-e.b,a:e.a}instanceof Sd?{r:255-(e=this.rgba).r,g:255-e.g,b:255-e.b,a:e.a}:new Sd({r:255-(e=this.rgba).r,g:255-e.g,b:255-e.b,a:e.a});var e};a.prototype.saturate=function(e){if(e===undefined){e=.1}
return Tc(this.rgba,e)instanceof Sd?Tc(this.rgba,e):new Sd(Tc(this.rgba,e))};a.prototype.desaturate=function(e){if(e===undefined){e=.1}
return Tc(this.rgba,-e)instanceof Sd?Tc(this.rgba,-e):new Sd(Tc(this.rgba,-e))};a.prototype.grayscale=function(){return Tc(this.rgba,-1)instanceof Sd?Tc(this.rgba,-1):new Sd(Tc(this.rgba,-1))};a.prototype.lighten=function(e){if(e===undefined){e=.1}
return ku(this.rgba,e)instanceof Sd?ku(this.rgba,e):new Sd(ku(this.rgba,e))};a.prototype.darken=function(e){if(e===undefined){e=.1}
return ku(this.rgba,-e)instanceof Sd?ku(this.rgba,-e):new Sd(ku(this.rgba,-e))};a.prototype.rotate=function(e){if(e===undefined){e=15}
return this.hue(this.hue()+e)};a.prototype.alpha=function(e){return typeof e=="number"?{r:(t=this.rgba).r,g:t.g,b:t.b,a:e}instanceof Sd?{r:(t=this.rgba).r,g:t.g,b:t.b,a:e}:new Sd({r:(t=this.rgba).r,g:t.g,b:t.b,a:e}):qe(this.rgba.a,3);var t};a.prototype.hue=function(e){var t=gs(this.rgba);return typeof e=="number"?{h:e,s:t.s,l:t.l,a:t.a}instanceof Sd?{h:e,s:t.s,l:t.l,a:t.a}:new Sd({h:e,s:t.s,l:t.l,a:t.a}):qe(t.h)};a.prototype.isEqual=function(e){return this.toHex()===(e instanceof Sd?e:new Sd(e)).toHex()};return a}();var Uu=[];var L5=function(a){a.forEach(function(e){if(Uu.indexOf(e)<0){e(Sd,Td);Uu.push(e)}})};function N5(a,e){var t={white:"#ffffff",bisque:"#ffe4c4",blue:"#0000ff",cadetblue:"#5f9ea0",chartreuse:"#7fff00",chocolate:"#d2691e",coral:"#ff7f50",antiquewhite:"#faebd7",aqua:"#00ffff",azure:"#f0ffff",whitesmoke:"#f5f5f5",papayawhip:"#ffefd5",plum:"#dda0dd",blanchedalmond:"#ffebcd",black:"#000000",gold:"#ffd700",goldenrod:"#daa520",gainsboro:"#dcdcdc",cornsilk:"#fff8dc",cornflowerblue:"#6495ed",burlywood:"#deb887",aquamarine:"#7fffd4",beige:"#f5f5dc",crimson:"#dc143c",cyan:"#00ffff",darkblue:"#00008b",darkcyan:"#008b8b",darkgoldenrod:"#b8860b",darkkhaki:"#bdb76b",darkgray:"#a9a9a9",darkgreen:"#006400",darkgrey:"#a9a9a9",peachpuff:"#ffdab9",darkmagenta:"#8b008b",darkred:"#8b0000",darkorchid:"#9932cc",darkorange:"#ff8c00",darkslateblue:"#483d8b",gray:"#808080",darkslategray:"#2f4f4f",darkslategrey:"#2f4f4f",deeppink:"#ff1493",deepskyblue:"#00bfff",wheat:"#f5deb3",firebrick:"#b22222",floralwhite:"#fffaf0",ghostwhite:"#f8f8ff",darkviolet:"#9400d3",magenta:"#ff00ff",green:"#008000",dodgerblue:"#1e90ff",grey:"#808080",honeydew:"#f0fff0",hotpink:"#ff69b4",blueviolet:"#8a2be2",forestgreen:"#228b22",lawngreen:"#7cfc00",indianred:"#cd5c5c",indigo:"#4b0082",fuchsia:"#ff00ff",brown:"#a52a2a",maroon:"#800000",mediumblue:"#0000cd",lightcoral:"#f08080",darkturquoise:"#00ced1",lightcyan:"#e0ffff",ivory:"#fffff0",lightyellow:"#ffffe0",lightsalmon:"#ffa07a",lightseagreen:"#20b2aa",linen:"#faf0e6",mediumaquamarine:"#66cdaa",lemonchiffon:"#fffacd",lime:"#00ff00",khaki:"#f0e68c",mediumseagreen:"#3cb371",limegreen:"#32cd32",mediumspringgreen:"#00fa9a",lightskyblue:"#87cefa",lightblue:"#add8e6",midnightblue:"#191970",lightpink:"#ffb6c1",mistyrose:"#ffe4e1",moccasin:"#ffe4b5",mintcream:"#f5fffa",lightslategray:"#778899",lightslategrey:"#778899",navajowhite:"#ffdead",navy:"#000080",mediumvioletred:"#c71585",powderblue:"#b0e0e6",palegoldenrod:"#eee8aa",oldlace:"#fdf5e6",paleturquoise:"#afeeee",mediumturquoise:"#48d1cc",mediumorchid:"#ba55d3",rebeccapurple:"#663399",lightsteelblue:"#b0c4de",mediumslateblue:"#7b68ee",thistle:"#d8bfd8",tan:"#d2b48c",orchid:"#da70d6",mediumpurple:"#9370db",purple:"#800080",pink:"#ffc0cb",skyblue:"#87ceeb",springgreen:"#00ff7f",palegreen:"#98fb98",red:"#ff0000",yellow:"#ffff00",slateblue:"#6a5acd",lavenderblush:"#fff0f5",peru:"#cd853f",palevioletred:"#db7093",violet:"#ee82ee",teal:"#008080",slategray:"#708090",slategrey:"#708090",aliceblue:"#f0f8ff",darkseagreen:"#8fbc8f",darkolivegreen:"#556b2f",greenyellow:"#adff2f",seagreen:"#2e8b57",seashell:"#fff5ee",tomato:"#ff6347",silver:"#c0c0c0",sienna:"#a0522d",lavender:"#e6e6fa",lightgreen:"#90ee90",orange:"#ffa500",orangered:"#ff4500",steelblue:"#4682b4",royalblue:"#4169e1",turquoise:"#40e0d0",yellowgreen:"#9acd32",salmon:"#fa8072",saddlebrown:"#8b4513",sandybrown:"#f4a460",rosybrown:"#bc8f8f",darksalmon:"#e9967a",lightgoldenrodyellow:"#fafad2",snow:"#fffafa",lightgrey:"#d3d3d3",lightgray:"#d3d3d3",dimgray:"#696969",dimgrey:"#696969",olivedrab:"#6b8e23",olive:"#808000"};var i={};for(var s in t)i[t[s]]=s;var r={};a.prototype.toName=function(n){if(!(this.rgba.a||this.rgba.r||this.rgba.g||this.rgba.b)){return"transparent"}
var d;var h;var l=i[this.toHex()];if(l){return l}
if(n!=null&&n.closest){var f=this.toRgb();var p=Infinity;var _="black";if(!r.length){for(var m in t)r[m]=new a(t[m]).toRgb();}
for(var v in t){d=f;h=r[v];var T=Math.pow(d.r-h.r,2)+Math.pow(d.g-h.g,2)+Math.pow(d.b-h.b,2);if(T<p){p=T;_=v}}
return _}};e.string.push([function(n){var d=n.toLowerCase();var h=d==="transparent"?"#0000":t[d];return h?new a(h).toRgb():null},"name"])}
var j5=Object.defineProperty;var Lu=Object.getOwnPropertySymbols;var X5=Object.prototype.hasOwnProperty;var H5=Object.prototype.propertyIsEnumerable;var Nu=(a,e,t)=>e in a?j5(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var z5=(a,e)=>{for(var t in e||(e={}))if(X5.call(e,t)){Nu(a,t,e[t])}
if(Lu){for(var t of Lu(e))if(H5.call(e,t)){Nu(a,t,e[t])}}
return a};L5([N5]);var gi=class fs{constructor(e=16777215){this._value=null;this._components=new Float32Array(4);this._components.fill(1);this._int=16777215;this.value=e}
get red(){return this._components[0]}
get green(){return this._components[1]}
get blue(){return this._components[2]}
get alpha(){return this._components[3]}
setValue(e){this.value=e;return this}
set value(e){if(e instanceof fs){this._value=this._cloneSource(e._value);this._int=e._int;this._components.set(e._components)}else{if(e===null){throw new Error("Cannot set Color#value to null")}
if(this._value===null||!this._isSourceEqual(this._value,e)){this._value=this._cloneSource(e);this._normalize(this._value)}}}
get value(){return this._value}
_cloneSource(e){return typeof e=="string"||typeof e=="number"||e instanceof Number||e===null?e:Array.isArray(e)||ArrayBuffer.isView(e)?e.slice(0):typeof e=="object"&&e!==null?z5({},e):e}
_isSourceEqual(e,t){let i=typeof e;if(i!==typeof t){return!1}
if(i==="number"||i==="string"||e instanceof Number){return e===t}
if(Array.isArray(e)&&Array.isArray(t)||ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){return e.length!==t.length?!1:e.every((s,r)=>s===t[r])}
if(e!==null&&t!==null){let s=Object.keys(e);let r=Object.keys(t);return s.length!==r.length?!1:s.every(n=>e[n]===t[n])}
return e===t}
toRgba(){let[e,t,i,s]=this._components;return{r:e,g:t,b:i,a:s}}
toRgb(){let[e,t,i]=this._components;return{r:e,g:t,b:i}}
toRgbaString(){let[e,t,i]=this.toUint8RgbArray();return `rgba(${e},${t},${i},${this.alpha})`}
toUint8RgbArray(e){let[t,i,s]=this._components;if(!this._arrayRgb){this._arrayRgb=[]}
if(!e){e=this._arrayRgb}
e[0]=Math.round(t*255);e[1]=Math.round(i*255);e[2]=Math.round(s*255);return e}
toArray(e){if(!this._arrayRgba){this._arrayRgba=[]}
if(!e){e=this._arrayRgba}
let[t,i,s,r]=this._components;e[0]=t;e[1]=i;e[2]=s;e[3]=r;return e}
toRgbArray(e){if(!this._arrayRgb){this._arrayRgb=[]}
if(!e){e=this._arrayRgb}
let[t,i,s]=this._components;e[0]=t;e[1]=i;e[2]=s;return e}
toNumber(){return this._int}
toBgrNumber(){let[e,t,i]=this.toUint8RgbArray();return(i<<16)+(t<<8)+e}
toLittleEndianNumber(){let e=this._int;return(e>>16)+(e&65280)+((e&255)<<16)}
multiply(e){let[t,i,s,r]=fs._temp.setValue(e)._components;this._components[0]*=t;this._components[1]*=i;this._components[2]*=s;this._components[3]*=r;this._refreshInt();this._value=null;return this}
premultiply(e,t=!0){if(t){this._components[0]*=e;this._components[1]*=e;this._components[2]*=e}
this._components[3]=e;this._refreshInt();this._value=null;return this}
toPremultiplied(e,t=!0){if(e===1){return-16777216+this._int}
if(e===0){return t?0:this._int}
let i=this._int>>16&255;let s=this._int>>8&255;let r=this._int&255;if(t){i=i*e+.5|0;s=s*e+.5|0;r=r*e+.5|0}
return(e*255<<24)+(i<<16)+(s<<8)+r}
toHex(){let e=this._int.toString(16);return `#${"000000".substring(0, 6 - e.length) + e}`}
toHexa(){let e=Math.round(this._components[3]*255).toString(16);return this.toHex()+"00".substring(0,2-e.length)+e}
setAlpha(e){this._components[3]=this._clamp(e);return this}
_normalize(e){let t;let i;let s;let r;if((typeof e=="number"||e instanceof Number)&&e>=0&&e<=16777215){let n=e;t=(n>>16&255)/255;i=(n>>8&255)/255;s=(n&255)/255;r=1}else if((Array.isArray(e)||e instanceof Float32Array)&&e.length>=3&&e.length<=4){e=this._clamp(e);[t,i,s,r=1]=e}else if((e instanceof Uint8Array||e instanceof Uint8ClampedArray)&&e.length>=3&&e.length<=4){e=this._clamp(e,0,255);[t,i,s,r=255]=e;t/=255;i/=255;s/=255;r/=255}else if(typeof e=="string"||typeof e=="object"){if(typeof e=="string"){let d=fs.HEX_PATTERN.exec(e);if(d){e=`#${d[2]}`}}
let n=e instanceof Sd?e:new Sd(e);if(n.isValid()){({r:t,g:i,b:s,a:r}=n.rgba);t/=255;i/=255;s/=255}}
if(t!==undefined){this._components[0]=t;this._components[1]=i;this._components[2]=s;this._components[3]=r;this._refreshInt()}else{throw new Error(`Unable to convert color ${e}`)}}
_refreshInt(){this._clamp(this._components);let[e,t,i]=this._components;this._int=(e*255<<16)+(t*255<<8)+(i*255|0)}
_clamp(e,t=0,i=1){return typeof e=="number"?Math.min(Math.max(e,t),i):(e.forEach((s,r)=>{e[r]=Math.min(Math.max(s,t),i)}),e)}
static isColorLike(e){return typeof e=="number"||typeof e=="string"||e instanceof Number||e instanceof fs||Array.isArray(e)||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Float32Array||e.r!==undefined&&e.g!==undefined&&e.b!==undefined||e.r!==undefined&&e.g!==undefined&&e.b!==undefined&&e.a!==undefined||e.h!==undefined&&e.s!==undefined&&e.l!==undefined||e.h!==undefined&&e.s!==undefined&&e.l!==undefined&&e.a!==undefined||e.h!==undefined&&e.s!==undefined&&e.v!==undefined||e.h!==undefined&&e.s!==undefined&&e.v!==undefined&&e.a!==undefined}};gi.shared=new gi();gi._temp=new gi();gi.HEX_PATTERN=/^(#|0x)?(([a-f0-9]{3}){1,2}([a-f0-9]{2})?)$/i;var V5={cullArea:null,cullable:!1,cullableChildren:!0};var W5=Math.PI*2;var Y5=180/Math.PI;var $5=Math.PI/180;var Pe=class a{constructor(e=0,t=0){this.x=0;this.y=0;this.x=e;this.y=t}
clone(){return new a(this.x,this.y)}
copyFrom(e){this.set(e.x,e.y);return this}
copyTo(e){e.set(this.x,this.y);return e}
equals(e){return e.x===this.x&&e.y===this.y}
set(e=0,t=e){this.x=e;this.y=t;return this}
static get shared(){wc.x=0;wc.y=0;return wc}};var wc=new Pe();var ae=class a{constructor(e=1,t=0,i=0,s=1,r=0,n=0){this.array=null;this.a=e;this.b=t;this.c=i;this.d=s;this.tx=r;this.ty=n}
fromArray(e){this.a=e[0];this.b=e[1];this.c=e[3];this.d=e[4];this.tx=e[2];this.ty=e[5]}
set(e,t,i,s,r,n){this.a=e;this.b=t;this.c=i;this.d=s;this.tx=r;this.ty=n;return this}
toArray(e,t){if(!this.array){this.array=new Float32Array(9)}
let i=t||this.array;if(e){i[0]=this.a;i[1]=this.b;i[2]=0;i[3]=this.c;i[4]=this.d;i[5]=0;i[6]=this.tx;i[7]=this.ty;i[8]=1}else{i[0]=this.a;i[1]=this.c;i[2]=this.tx;i[3]=this.b;i[4]=this.d;i[5]=this.ty;i[6]=0;i[7]=0;i[8]=1}
return i}
apply(e,t){t=t||new Pe();let i=e.x;let s=e.y;t.x=this.a*i+this.c*s+this.tx;t.y=this.b*i+this.d*s+this.ty;return t}
applyInverse(e,t){t=t||new Pe();let i=this.a;let s=this.b;let r=this.c;let n=this.d;let d=this.tx;let h=this.ty;let l=1/(i*n+r*-s);let f=e.x;let p=e.y;t.x=n*l*f+ -r*l*p+(h*r-d*n)*l;t.y=i*l*p+ -s*l*f+(-h*i+d*s)*l;return t}
translate(e,t){this.tx+=e;this.ty+=t;return this}
scale(e,t){this.a*=e;this.d*=t;this.c*=e;this.b*=t;this.tx*=e;this.ty*=t;return this}
rotate(e){let t=Math.cos(e);let i=Math.sin(e);let s=this.a;let r=this.c;let n=this.tx;this.a=s*t-this.b*i;this.b=s*i+this.b*t;this.c=r*t-this.d*i;this.d=r*i+this.d*t;this.tx=n*t-this.ty*i;this.ty=n*i+this.ty*t;return this}
append(e){let t=this.a;let i=this.b;let s=this.c;let r=this.d;this.a=e.a*t+e.b*s;this.b=e.a*i+e.b*r;this.c=e.c*t+e.d*s;this.d=e.c*i+e.d*r;this.tx=e.tx*t+e.ty*s+this.tx;this.ty=e.tx*i+e.ty*r+this.ty;return this}
appendFrom(e,t){let i=e.a;let s=e.b;let r=e.c;let n=e.d;let d=e.tx;let h=e.ty;let l=t.a;let f=t.b;let p=t.c;let _=t.d;this.a=i*l+s*p;this.b=i*f+s*_;this.c=r*l+n*p;this.d=r*f+n*_;this.tx=d*l+h*p+t.tx;this.ty=d*f+h*_+t.ty;return this}
setTransform(e,t,i,s,r,n,d,h,l){this.a=Math.cos(d+l)*r;this.b=Math.sin(d+l)*r;this.c=-Math.sin(d-h)*n;this.d=Math.cos(d-h)*n;this.tx=e-(i*this.a+s*this.c);this.ty=t-(i*this.b+s*this.d);return this}
prepend(e){let t=this.tx;if(e.a!==1||e.b!==0||e.c!==0||e.d!==1){let i=this.a;let s=this.c;this.a=i*e.a+this.b*e.c;this.b=i*e.b+this.b*e.d;this.c=s*e.a+this.d*e.c;this.d=s*e.b+this.d*e.d}
this.tx=t*e.a+this.ty*e.c+e.tx;this.ty=t*e.b+this.ty*e.d+e.ty;return this}
decompose(e){let t=this.a;let i=this.b;let s=this.c;let r=this.d;let n=e.pivot;let d=-Math.atan2(-s,r);let h=Math.atan2(i,t);let l=Math.abs(d+h);if(l<1e-5||Math.abs(W5-l)<1e-5){e.rotation=h;e.skew.x=e.skew.y=0}else{e.rotation=0;e.skew.x=d;e.skew.y=h}
e.scale.x=Math.sqrt(t*t+i*i);e.scale.y=Math.sqrt(s*s+r*r);e.position.x=this.tx+(n.x*t+n.y*s);e.position.y=this.ty+(n.x*i+n.y*r);return e}
invert(){let e=this.a;let t=this.b;let i=this.c;let s=this.d;let r=this.tx;let n=e*s-t*i;this.a=s/n;this.b=-t/n;this.c=-i/n;this.d=e/n;this.tx=(i*this.ty-s*r)/n;this.ty=-(e*this.ty-t*r)/n;return this}
isIdentity(){return this.a===1&&this.b===0&&this.c===0&&this.d===1&&this.tx===0&&this.ty===0}
identity(){this.a=1;this.b=0;this.c=0;this.d=1;this.tx=0;this.ty=0;return this}
clone(){let e=new a();e.a=this.a;e.b=this.b;e.c=this.c;e.d=this.d;e.tx=this.tx;e.ty=this.ty;return e}
copyTo(e){e.a=this.a;e.b=this.b;e.c=this.c;e.d=this.d;e.tx=this.tx;e.ty=this.ty;return e}
copyFrom(e){this.a=e.a;this.b=e.b;this.c=e.c;this.d=e.d;this.tx=e.tx;this.ty=e.ty;return this}
equals(e){return e.a===this.a&&e.b===this.b&&e.c===this.c&&e.d===this.d&&e.tx===this.tx&&e.ty===this.ty}
static get IDENTITY(){return q5.identity()}
static get shared(){return K5.identity()}};var K5=new ae();var q5=new ae();var We=class a{constructor(e,t,i){this._x=t||0;this._y=i||0;this._observer=e}
clone(e){return new a(e??this._observer,this._x,this._y)}
set(e=0,t=e){if(this._x!==e||this._y!==t){this._x=e;this._y=t;this._observer._onUpdate(this)}
return this}
copyFrom(e){if(this._x!==e.x||this._y!==e.y){this._x=e.x;this._y=e.y;this._observer._onUpdate(this)}
return this}
copyTo(e){e.set(this._x,this._y);return e}
equals(e){return e.x===this._x&&e.y===this._y}
get x(){return this._x}
set x(e){if(this._x!==e){this._x=e;this._observer._onUpdate(this)}}
get y(){return this._y}
set y(e){if(this._y!==e){this._y=e;this._observer._onUpdate(this)}}};var Ac={default:-1};function Ie(a="default"){if(Ac[a]===undefined){Ac[a]=-1}
return++Ac[a]}
var As=class{constructor(e,t){this._pool=[];this._count=0;this._index=0;this._classType=e;if(t){this.prepopulate(t)}}
prepopulate(e){for(let t=0;t<e;t++){this._pool[this._index++]=new this._classType()}
this._count+=e}
get(e){var t;let i;if(this._index>0){i=this._pool[--this._index]}else{i=new this._classType()}
if(!((t=i.init)==null)){t.call(i,e)}
return i}
return(e){var t;if(!((t=e.reset)==null)){t.call(e)}
this._pool[this._index++]=e}
get totalSize(){return this._count}
get totalFree(){return this._index}
get totalUsed(){return this._count-this._index}
clear(){this._pool.length=0;this._index=0}};var wd=class{constructor(){this._poolsByClass=new Map()}
prepopulate(e,t){this.getPool(e).prepopulate(t)}
get(e,t){return this.getPool(e).get(t)}
return(e){this.getPool(e.constructor).return(e)}
getPool(e){if(!this._poolsByClass.has(e)){this._poolsByClass.set(e,new As(e))}
return this._poolsByClass.get(e)}
stats(){let e={};this._poolsByClass.forEach(t=>{let i=e[t._classType.name]?t._classType.name+t._classType.ID:t._classType.name;e[i]={free:t.totalFree,used:t.totalUsed,size:t.totalSize}});return e}};var me=new wd();var Z5={get isCachedAsTexture(){var a;return!!((a=this.renderGroup)!=null&&a.isCachedAsTexture)},cacheAsTexture(a){if(typeof a=="boolean"&&a===!1){this.disableRenderGroup()}else{this.enableRenderGroup();this.renderGroup.enableCacheAsTexture(a===!0?{}:a)}},updateCacheTexture(){var a;if(!((a=this.renderGroup)==null)){a.updateCacheTexture()}},get cacheAsBitmap(){return this.isCachedAsTexture},set cacheAsBitmap(a){this.cacheAsTexture(a)}};function np(a,e,t){let i=a.length;let s;if(e>=i||t===0){return}
t=e+t>i?i-e:t;let r=i-t;for(s=e;s<r;++s){a[s]=a[s+t]}
a.length=r}
var Q5={allowChildren:!0,removeChildren(a=0,e){let t=e??this.children.length;let i=t-a;let s=[];if(i>0&&i<=t){for(let n=t-1;n>=a;n--){let d=this.children[n];if(d){s.push(d);d.parent=null}}
np(this.children,a,t);let r=this.renderGroup||this.parentRenderGroup;if(r){r.removeChildren(s)}
for(let n=0;n<s.length;++n){this.emit("childRemoved",s[n],this,n);s[n].emit("removed",this)}
return s}else if(i===0&&this.children.length===0){return s}
throw new RangeError("removeChildren: numeric values are outside the acceptable range.")},removeChildAt(a){let e=this.getChildAt(a);return this.removeChild(e)},getChildAt(a){if(a<0||a>=this.children.length){throw new Error(`getChildAt: Index (${a}) does not exist.`)}
return this.children[a]},setChildIndex(a,e){if(e<0||e>=this.children.length){throw new Error(`The index ${e} supplied is out of bounds ${this.children.length}`)}
this.getChildIndex(a);this.addChildAt(a,e)},getChildIndex(a){let e=this.children.indexOf(a);if(e===-1){throw new Error("The supplied Container must be a child of the caller")}
return e},addChildAt(a,e){let{children:t}=this;if(e<0||e>t.length){throw new Error(`${a}addChildAt: The index ${e} supplied is out of bounds ${t.length}`)}
if(a.parent){let s=a.parent.children.indexOf(a);if(a.parent===this&&s===e){return a}
if(s!==-1){a.parent.children.splice(s,1)}}
if(e===t.length){t.push(a)}else{t.splice(e,0,a)}
a.parent=this;a.didChange=!0;a._updateFlags=15;let i=this.renderGroup||this.parentRenderGroup;if(i){i.addChild(a)}
if(this.sortableChildren){this.sortDirty=!0}
this.emit("childAdded",a,this,e);a.emit("added",this);return a},swapChildren(a,e){if(a===e){return}
let t=this.getChildIndex(a);let i=this.getChildIndex(e);this.children[t]=e;this.children[i]=a;let s=this.renderGroup||this.parentRenderGroup;if(s){s.structureDidChange=!0}
this._didContainerChangeTick++},removeFromParent(){var a;if(!((a=this.parent)==null)){a.removeChild(this)}},reparentChild(...a){return a.length===1?this.reparentChildAt(a[0],this.children.length):(a.forEach(e=>this.reparentChildAt(e,this.children.length)),a[0])},reparentChildAt(a,e){if(a.parent===this){this.setChildIndex(a,e);return a}
let t=a.worldTransform.clone();a.removeFromParent();this.addChildAt(a,e);let i=this.worldTransform.clone();i.invert();t.prepend(i);a.setFromMatrix(t);return a}};var J5={collectRenderables(a,e,t){if(!(this.parentRenderLayer&&this.parentRenderLayer!==t||this.globalDisplayStatus<7||!this.includeInBuild)){if(this.sortableChildren){this.sortChildren()}
if(this.isSimple){this.collectRenderablesSimple(a,e,t)}else if(this.renderGroup){e.renderPipes.renderGroup.addRenderGroup(this.renderGroup,a)}else{this.collectRenderablesWithEffects(a,e,t)}}},collectRenderablesSimple(a,e,t){let i=this.children;let s=i.length;for(let r=0;r<s;r++){i[r].collectRenderables(a,e,t)}},collectRenderablesWithEffects(a,e,t){let{renderPipes:i}=e;for(let s=0;s<this.effects.length;s++){let r=this.effects[s];i[r.pipe].push(r,this,a)}
this.collectRenderablesSimple(a,e,t);for(let s=this.effects.length-1;s>=0;s--){let r=this.effects[s];i[r.pipe].pop(r,this,a)}}};var Si=class{constructor(){this.pipe="filter";this.priority=1}
destroy(){for(let e=0;e<this.filters.length;e++){this.filters[e].destroy()}
this.filters=null;this.filterArea=null}};var Ad=class{constructor(){this._effectClasses=[];this._tests=[];this._initialized=!1}
init(){if(!this._initialized){this._initialized=!0;this._effectClasses.forEach(e=>{this.add({test:e.test,maskClass:e})})}}
add(e){this._tests.push(e)}
getMaskEffect(e){if(!this._initialized){this.init()}
for(let t=0;t<this._tests.length;t++){let i=this._tests[t];if(i.test(e)){return me.get(i.maskClass,e)}}
return e}
returnMaskEffect(e){me.return(e)}};var Ed=new Ad();fe.handleByList(I.MaskEffect,Ed._effectClasses);var e4=Object.defineProperty;var ju=Object.getOwnPropertySymbols;var t4=Object.prototype.hasOwnProperty;var a4=Object.prototype.propertyIsEnumerable;var Xu=(a,e,t)=>e in a?e4(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var Hu=(a,e)=>{for(var t in e||(e={}))if(t4.call(e,t)){Xu(a,t,e[t])}
if(ju){for(var t of ju(e))if(a4.call(e,t)){Xu(a,t,e[t])}}
return a};var i4={_maskEffect:null,_maskOptions:{inverse:!1},_filterEffect:null,effects:[],_markStructureAsChanged(){let a=this.renderGroup||this.parentRenderGroup;if(a){a.structureDidChange=!0}},addEffect(a){if(this.effects.indexOf(a)===-1){this.effects.push(a);this.effects.sort((e,t)=>e.priority-t.priority);this._markStructureAsChanged();this._updateIsSimple()}},removeEffect(a){let e=this.effects.indexOf(a);if(e!==-1){this.effects.splice(e,1);this._markStructureAsChanged();this._updateIsSimple()}},set mask(a){let e=this._maskEffect;if(e?.mask!==a){if(e){this.removeEffect(e);Ed.returnMaskEffect(e);this._maskEffect=null}
if(a!=null){this._maskEffect=Ed.getMaskEffect(a);this.addEffect(this._maskEffect)}}},setMask(a){this._maskOptions=Hu(Hu({},this._maskOptions),a);if(a.mask){this.mask=a.mask}
this._markStructureAsChanged()},get mask(){var a;return(a=this._maskEffect)==null?undefined:a.mask},set filters(a){var e;if(!Array.isArray(a)&&a){a=[a]}
let t=this._filterEffect||(this._filterEffect=new Si());a=a;let i=a?.length>0;let s=((e=t.filters)==null?undefined:e.length)>0;let r=i!==s;a=Array.isArray(a)?a.slice(0):a;t.filters=Object.freeze(a);if(r){if(i){this.addEffect(t)}else{this.removeEffect(t);t.filters=a??null}}},get filters(){var a;return(a=this._filterEffect)==null?undefined:a.filters},set filterArea(a){if(!this._filterEffect){this._filterEffect=new Si()}
this._filterEffect.filterArea=a},get filterArea(){var a;return(a=this._filterEffect)==null?undefined:a.filterArea}};var s4={label:null,get name(){return this.label},set name(a){this.label=a},getChildByName(a,e=!1){return this.getChildByLabel(a,e)},getChildByLabel(a,e=!1){let t=this.children;for(let i=0;i<t.length;i++){let s=t[i];if(s.label===a||a instanceof RegExp&&a.test(s.label)){return s}}
if(e){for(let i=0;i<t.length;i++){let s=t[i].getChildByLabel(a,!0);if(s){return s}}}
return null},getChildrenByLabel(a,e=!1,t=[]){let i=this.children;for(let s=0;s<i.length;s++){let r=i[s];if(r.label===a||a instanceof RegExp&&a.test(r.label)){t.push(r)}}
if(e){for(let s=0;s<i.length;s++){i[s].getChildrenByLabel(a,!0,t)}}
return t}};var hr=[new Pe(),new Pe(),new Pe(),new Pe()];var we=class a{constructor(e=0,t=0,i=0,s=0){this.type="rectangle";this.x=Number(e);this.y=Number(t);this.width=Number(i);this.height=Number(s)}
get left(){return this.x}
get right(){return this.x+this.width}
get top(){return this.y}
get bottom(){return this.y+this.height}
isEmpty(){return this.left===this.right||this.top===this.bottom}
static get EMPTY(){return new a(0,0,0,0)}
clone(){return new a(this.x,this.y,this.width,this.height)}
copyFromBounds(e){this.x=e.minX;this.y=e.minY;this.width=e.maxX-e.minX;this.height=e.maxY-e.minY;return this}
copyFrom(e){this.x=e.x;this.y=e.y;this.width=e.width;this.height=e.height;return this}
copyTo(e){e.copyFrom(this);return e}
contains(e,t){return this.width<=0||this.height<=0?!1:e>=this.x&&e<this.x+this.width&&t>=this.y&&t<this.y+this.height}
strokeContains(e,t,i,s=.5){let{width:r,height:n}=this;if(r<=0||n<=0){return!1}
let d=this.x;let h=this.y;let l=i*(1-s);let f=i-l;let p=d-l;let _=d+r+l;let m=h-l;let v=h+n+l;let T=d+f;let w=d+r-f;let P=h+f;let C=h+n-f;return e>=p&&e<=_&&t>=m&&t<=v&&!(e>T&&e<w&&t>P&&t<C)}
intersects(e,t){if(!t){let ie=this.x<e.x?e.x:this.x;if((this.right>e.right?e.right:this.right)<=ie){return!1}
let ne=this.y<e.y?e.y:this.y;return(this.bottom>e.bottom?e.bottom:this.bottom)>ne}
let i=this.left;let s=this.right;let r=this.top;let n=this.bottom;if(s<=i||n<=r){return!1}
let d=hr[0].set(e.left,e.top);let h=hr[1].set(e.left,e.bottom);let l=hr[2].set(e.right,e.top);let f=hr[3].set(e.right,e.bottom);if(l.x<=d.x||h.y<=d.y){return!1}
let p=Math.sign(t.a*t.d-t.b*t.c);if(p===0||(t.apply(d,d),t.apply(h,h),t.apply(l,l),t.apply(f,f),Math.max(d.x,h.x,l.x,f.x)<=i||Math.min(d.x,h.x,l.x,f.x)>=s||Math.max(d.y,h.y,l.y,f.y)<=r||Math.min(d.y,h.y,l.y,f.y)>=n)){return!1}
let _=p*(h.y-d.y);let m=p*(d.x-h.x);let v=_*i+m*r;let T=_*s+m*r;let w=_*i+m*n;let P=_*s+m*n;if(Math.max(v,T,w,P)<=_*d.x+m*d.y||Math.min(v,T,w,P)>=_*f.x+m*f.y){return!1}
let C=p*(d.y-l.y);let B=p*(l.x-d.x);let D=C*i+B*r;let X=C*s+B*r;let U=C*i+B*n;let L=C*s+B*n;return!(Math.max(D,X,U,L)<=C*d.x+B*d.y||Math.min(D,X,U,L)>=C*f.x+B*f.y)}
pad(e=0,t=e){this.x-=e;this.y-=t;this.width+=e*2;this.height+=t*2;return this}
fit(e){let t=Math.max(this.x,e.x);let i=Math.min(this.x+this.width,e.x+e.width);let s=Math.max(this.y,e.y);let r=Math.min(this.y+this.height,e.y+e.height);this.x=t;this.width=Math.max(i-t,0);this.y=s;this.height=Math.max(r-s,0);return this}
ceil(e=1,t=.001){let i=Math.ceil((this.x+this.width-t)*e)/e;let s=Math.ceil((this.y+this.height-t)*e)/e;this.x=Math.floor((this.x+t)*e)/e;this.y=Math.floor((this.y+t)*e)/e;this.width=i-this.x;this.height=s-this.y;return this}
enlarge(e){let t=Math.min(this.x,e.x);let i=Math.max(this.x+this.width,e.x+e.width);let s=Math.min(this.y,e.y);let r=Math.max(this.y+this.height,e.y+e.height);this.x=t;this.width=i-t;this.y=s;this.height=r-s;return this}
getBounds(e){if(!e){e=new a()}
e.copyFrom(this);return e}};var zu=new ae();var Ze=class a{constructor(e=Infinity,t=Infinity,i=-Infinity,s=-Infinity){this.minX=Infinity;this.minY=Infinity;this.maxX=-Infinity;this.maxY=-Infinity;this.matrix=zu;this.minX=e;this.minY=t;this.maxX=i;this.maxY=s}
isEmpty(){return this.minX>this.maxX||this.minY>this.maxY}
get rectangle(){if(!this._rectangle){this._rectangle=new we()}
let e=this._rectangle;if(this.minX>this.maxX||this.minY>this.maxY){e.x=0;e.y=0;e.width=0;e.height=0}else{e.copyFromBounds(this)}
return e}
clear(){this.minX=Infinity;this.minY=Infinity;this.maxX=-Infinity;this.maxY=-Infinity;this.matrix=zu;return this}
set(e,t,i,s){this.minX=e;this.minY=t;this.maxX=i;this.maxY=s}
addFrame(e,t,i,s,r){if(!r){r=this.matrix}
let n=r.a;let d=r.b;let h=r.c;let l=r.d;let f=r.tx;let p=r.ty;let _=this.minX;let m=this.minY;let v=this.maxX;let T=this.maxY;let w=n*e+h*t+f;let P=d*e+l*t+p;if(w<_){_=w}
if(P<m){m=P}
if(w>v){v=w}
if(P>T){T=P}
w=n*i+h*t+f;P=d*i+l*t+p;if(w<_){_=w}
if(P<m){m=P}
if(w>v){v=w}
if(P>T){T=P}
w=n*e+h*s+f;P=d*e+l*s+p;if(w<_){_=w}
if(P<m){m=P}
if(w>v){v=w}
if(P>T){T=P}
w=n*i+h*s+f;P=d*i+l*s+p;if(w<_){_=w}
if(P<m){m=P}
if(w>v){v=w}
if(P>T){T=P}
this.minX=_;this.minY=m;this.maxX=v;this.maxY=T}
addRect(e,t){this.addFrame(e.x,e.y,e.x+e.width,e.y+e.height,t)}
addBounds(e,t){this.addFrame(e.minX,e.minY,e.maxX,e.maxY,t)}
addBoundsMask(e){this.minX=this.minX>e.minX?this.minX:e.minX;this.minY=this.minY>e.minY?this.minY:e.minY;this.maxX=this.maxX<e.maxX?this.maxX:e.maxX;this.maxY=this.maxY<e.maxY?this.maxY:e.maxY}
applyMatrix(e){let t=this.minX;let i=this.minY;let s=this.maxX;let r=this.maxY;let{a:n,b:d,c:h,d:l,tx:f,ty:p}=e;let _=n*t+h*i+f;let m=d*t+l*i+p;this.minX=_;this.minY=m;this.maxX=_;this.maxY=m;_=n*s+h*i+f;m=d*s+l*i+p;this.minX=_<this.minX?_:this.minX;this.minY=m<this.minY?m:this.minY;this.maxX=_>this.maxX?_:this.maxX;this.maxY=m>this.maxY?m:this.maxY;_=n*t+h*r+f;m=d*t+l*r+p;this.minX=_<this.minX?_:this.minX;this.minY=m<this.minY?m:this.minY;this.maxX=_>this.maxX?_:this.maxX;this.maxY=m>this.maxY?m:this.maxY;_=n*s+h*r+f;m=d*s+l*r+p;this.minX=_<this.minX?_:this.minX;this.minY=m<this.minY?m:this.minY;this.maxX=_>this.maxX?_:this.maxX;this.maxY=m>this.maxY?m:this.maxY}
fit(e){if(this.minX<e.left){this.minX=e.left}
if(this.maxX>e.right){this.maxX=e.right}
if(this.minY<e.top){this.minY=e.top}
if(this.maxY>e.bottom){this.maxY=e.bottom}
return this}
fitBounds(e,t,i,s){if(this.minX<e){this.minX=e}
if(this.maxX>t){this.maxX=t}
if(this.minY<i){this.minY=i}
if(this.maxY>s){this.maxY=s}
return this}
pad(e,t=e){this.minX-=e;this.maxX+=e;this.minY-=t;this.maxY+=t;return this}
ceil(){this.minX=Math.floor(this.minX);this.minY=Math.floor(this.minY);this.maxX=Math.ceil(this.maxX);this.maxY=Math.ceil(this.maxY);return this}
clone(){return new a(this.minX,this.minY,this.maxX,this.maxY)}
scale(e,t=e){this.minX*=e;this.minY*=t;this.maxX*=e;this.maxY*=t;return this}
get x(){return this.minX}
set x(e){let t=this.maxX-this.minX;this.minX=e;this.maxX=e+t}
get y(){return this.minY}
set y(e){let t=this.maxY-this.minY;this.minY=e;this.maxY=e+t}
get width(){return this.maxX-this.minX}
set width(e){this.maxX=this.minX+e}
get height(){return this.maxY-this.minY}
set height(e){this.maxY=this.minY+e}
get left(){return this.minX}
get right(){return this.maxX}
get top(){return this.minY}
get bottom(){return this.maxY}
get isPositive(){return this.maxX-this.minX>0&&this.maxY-this.minY>0}
get isValid(){return this.minX+this.minY!==Infinity}
addVertexData(e,t,i,s){let r=this.minX;let n=this.minY;let d=this.maxX;let h=this.maxY;if(!s){s=this.matrix}
let l=s.a;let f=s.b;let p=s.c;let _=s.d;let m=s.tx;let v=s.ty;for(let T=t;T<i;T+=2){let w=e[T];let P=e[T+1];let C=l*w+p*P+m;let B=f*w+_*P+v;r=C<r?C:r;n=B<n?B:n;d=C>d?C:d;h=B>h?B:h}
this.minX=r;this.minY=n;this.maxX=d;this.maxY=h}
containsPoint(e,t){return this.minX<=e&&this.minY<=t&&this.maxX>=e&&this.maxY>=t}
toString(){return `[pixi.js:Bounds minX=${this.minX} minY=${this.minY} maxX=${this.maxX} maxY=${this.maxY} width=${this.width} height=${this.height}]`}
copyFrom(e){this.minX=e.minX;this.minY=e.minY;this.maxX=e.maxX;this.maxY=e.maxY;return this}};var it=new As(ae);var oa=new As(Ze);var r4=new ae();var n4={getFastGlobalBounds(a,e){if(!e){e=new Ze()}
e.clear();this._getGlobalBoundsRecursive(!!a,e,this.parentRenderLayer);if(!e.isValid){e.set(0,0,0,0)}
let t=this.renderGroup||this.parentRenderGroup;e.applyMatrix(t.worldTransform);return e},_getGlobalBoundsRecursive(a,e,t){let i=e;if(a&&this.parentRenderLayer!==t||this.localDisplayStatus!==7||!this.measurable){return}
let s=!!this.effects.length;if(this.renderGroup||s){i=oa.get().clear()}
if(this.boundsArea){e.addRect(this.boundsArea,this.worldTransform)}else{if(this.renderPipeId){let n=this.bounds;i.addFrame(n.minX,n.minY,n.maxX,n.maxY,this.groupTransform)}
let r=this.children;for(let n=0;n<r.length;n++){r[n]._getGlobalBoundsRecursive(a,i,t)}}
if(s){let r=!1;let n=this.renderGroup||this.parentRenderGroup;for(let d=0;d<this.effects.length;d++){if(this.effects[d].addBounds){if(!r){r=!0;i.applyMatrix(n.worldTransform)}
this.effects[d].addBounds(i,!0)}}
if(r){i.applyMatrix(n.worldTransform.copyTo(r4).invert());e.addBounds(i,this.relativeGroupTransform)}
e.addBounds(i);oa.return(i)}else if(this.renderGroup){e.addBounds(i,this.relativeGroupTransform);oa.return(i)}}};function Co(a,e,t){t.clear();let i;let s;if(a.parent){if(e){i=a.parent.worldTransform}else{s=it.get().identity();i=ul(a,s)}}else{i=ae.IDENTITY}
op(a,t,i,e);if(s){it.return(s)}
if(!t.isValid){t.set(0,0,0,0)}
return t}
function op(a,e,t,i){var s;var r;if(!a.visible||!a.measurable){return}
let n;if(i){n=a.worldTransform}else{a.updateLocalTransform();n=it.get();n.appendFrom(a.localTransform,t)}
let d=e;let h=!!a.effects.length;if(h){e=oa.get().clear()}
if(a.boundsArea){e.addRect(a.boundsArea,n)}else{if(a.bounds){e.matrix=n;e.addBounds(a.bounds)}
for(let l=0;l<a.children.length;l++){op(a.children[l],e,n,i)}}
if(h){for(let l=0;l<a.effects.length;l++){if(!((r=(s=a.effects[l]).addBounds)==null)){r.call(s,e)}}
d.addBounds(e,ae.IDENTITY);oa.return(e)}
if(!i){it.return(n)}}
function ul(a,e){let t=a.parent;if(t){ul(t,e);t.updateLocalTransform();e.append(t.localTransform)}
return e}
function cp(a,e){if(a===16777215||!e){return e}
if(e===16777215||!a){return a}
let t=a>>16&255;let i=a>>8&255;let s=a&255;let r=e>>16&255;let n=e>>8&255;let d=e&255;let h=t*r/255|0;let l=i*n/255|0;let f=s*d/255|0;return(h<<16)+(l<<8)+f}
var o4={getGlobalAlpha(a){if(a){return this.renderGroup?this.renderGroup.worldAlpha:this.parentRenderGroup?this.parentRenderGroup.worldAlpha*this.alpha:this.alpha}
let e=this.alpha;let t=this.parent;for(;t;){e*=t.alpha;t=t.parent}
return e},getGlobalTransform(a,e){if(e){return a.copyFrom(this.worldTransform)}
this.updateLocalTransform();let t=ul(this,it.get().identity());a.appendFrom(this.localTransform,t);it.return(t);return a},getGlobalTint(a){if(a){return this.renderGroup?((this.renderGroup.worldColor&255)<<16)+(this.renderGroup.worldColor&65280)+(this.renderGroup.worldColor>>16&255):this.parentRenderGroup?(((this.localColor===16777215?this.parentRenderGroup.worldColor:this.parentRenderGroup.worldColor===16777215?this.localColor:cp(this.localColor,this.parentRenderGroup.worldColor))&255)<<16)+((this.localColor===16777215?this.parentRenderGroup.worldColor:this.parentRenderGroup.worldColor===16777215?this.localColor:cp(this.localColor,this.parentRenderGroup.worldColor))&65280)+((this.localColor===16777215?this.parentRenderGroup.worldColor:this.parentRenderGroup.worldColor===16777215?this.localColor:cp(this.localColor,this.parentRenderGroup.worldColor))>>16&255):this.tint}
let e=this.localColor;let t=this.parent;for(;t;){e=e===16777215?t.localColor:t.localColor===16777215?e:cp(e,t.localColor);t=t.parent}
return((e&255)<<16)+(e&65280)+(e>>16&255)}};function fl(a,e,t){e.clear();if(!t){t=ae.IDENTITY}
dp(a,e,t,a,!0);if(!e.isValid){e.set(0,0,0,0)}
return e}
function dp(a,e,t,i,s){var r;var n;let d;if(s){d=it.get();d=t.copyTo(d)}else{if(!a.visible||!a.measurable){return}
a.updateLocalTransform();let f=a.localTransform;d=it.get();d.appendFrom(f,t)}
let h=e;let l=!!a.effects.length;if(l){e=oa.get().clear()}
if(a.boundsArea){e.addRect(a.boundsArea,d)}else{if(a.renderPipeId){e.matrix=d;e.addBounds(a.bounds)}
let f=a.children;for(let p=0;p<f.length;p++){dp(f[p],e,d,i,!1)}}
if(l){for(let f=0;f<a.effects.length;f++){if(!((n=(r=a.effects[f]).addLocalBounds)==null)){n.call(r,e,i)}}
h.addBounds(e,ae.IDENTITY);oa.return(e)}
it.return(d)}
function hp(a,e){let t=a.children;for(let i=0;i<t.length;i++){let s=t[i];let r=s.uid;let n=(s._didViewChangeTick&65535)<<16|s._didContainerChangeTick&65535;let d=e.index;if(e.data[d]!==r||e.data[d+1]!==n){e.data[e.index]=r;e.data[e.index+1]=n;e.didChange=!0}
e.index=d+2;if(s.children.length){hp(s,e)}}
return e.didChange}
var c4=new ae();var d4={_localBoundsCacheId:-1,_localBoundsCacheData:null,_setWidth(a,e){let t=Math.sign(this.scale.x)||1;if(e!==0){this.scale.x=a/e*t}else{this.scale.x=t}},_setHeight(a,e){let t=Math.sign(this.scale.y)||1;if(e!==0){this.scale.y=a/e*t}else{this.scale.y=t}},getLocalBounds(){if(!this._localBoundsCacheData){this._localBoundsCacheData={data:[],index:1,didChange:!1,localBounds:new Ze()}}
let a=this._localBoundsCacheData;a.index=1;a.didChange=!1;if(a.data[0]!==this._didViewChangeTick){a.didChange=!0;a.data[0]=this._didViewChangeTick}
hp(this,a);if(a.didChange){fl(this,a.localBounds,c4)}
return a.localBounds},getBounds(a,e){return Co(this,a,e||new Ze())}};var h4={_onRender:null,set onRender(a){let e=this.renderGroup||this.parentRenderGroup;if(!a){if(this._onRender){e?.removeOnRender(this)}
this._onRender=null;return}
if(!(this._onRender||e==null)){e.addOnRender(this)}
this._onRender=a},get onRender(){return this._onRender}};var l4={_zIndex:0,sortDirty:!1,sortableChildren:!1,get zIndex(){return this._zIndex},set zIndex(a){if(this._zIndex!==a){this._zIndex=a;this.depthOfChildModified()}},depthOfChildModified(){if(this.parent){this.parent.sortableChildren=!0;this.parent.sortDirty=!0}
if(this.parentRenderGroup){this.parentRenderGroup.structureDidChange=!0}},sortChildren(){if(this.sortDirty){this.sortDirty=!1;this.children.sort(u4)}}};function u4(a,e){return a._zIndex-e._zIndex}
var f4={getGlobalPosition(a=new Pe(),e=!1){if(this.parent){this.parent.toGlobal(this._position,a,e)}else{a.x=this._position.x;a.y=this._position.y}
return a},toGlobal(a,e,t=!1){let i=this.getGlobalTransform(it.get(),t);e=i.apply(a,e);it.return(i);return e},toLocal(a,e,t,i){if(e){a=e.toGlobal(a,t,i)}
let s=this.getGlobalTransform(it.get(),i);t=s.applyInverse(a,t);it.return(s);return t}};var Nr=class{constructor(){this.uid=Ie("instructionSet");this.instructions=[];this.instructionSize=0;this.renderables=[];this.gcTick=0}
reset(){this.instructionSize=0}
add(e){this.instructions[this.instructionSize++]=e}
log(){this.instructions.length=this.instructionSize}};function wi(a){a+=a===0?1:0;--a;a|=a>>>1;a|=a>>>2;a|=a>>>4;a|=a>>>8;a|=a>>>16;return a+1}
function Es(a){let e={};for(let t in a)if(a[t]!==undefined){e[t]=a[t]}
return e}
var b4=Object.defineProperty;var Yu=Object.getOwnPropertySymbols;var p4=Object.prototype.hasOwnProperty;var g4=Object.prototype.propertyIsEnumerable;var $u=(a,e,t)=>e in a?b4(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var Ku=(a,e)=>{for(var t in e||(e={}))if(p4.call(e,t)){$u(a,t,e[t])}
if(Yu){for(var t of Yu(e))if(g4.call(e,t)){$u(a,t,e[t])}}
return a};var qu=Object.create(null);function m4(a){let e=qu[a];if(e===undefined){qu[a]=Ie("resource")}
return e}
var lp=class up extends xt{constructor(e={}){var t;var i;var s;var r;var n;var d;var h;super();this._resourceType="textureSampler";this._touched=0;this._maxAnisotropy=1;this.destroyed=!1;e=Ku(Ku({},up.defaultOptions),e);this.addressMode=e.addressMode;this.addressModeU=(t=e.addressModeU)!=null?t:this.addressModeU;this.addressModeV=(i=e.addressModeV)!=null?i:this.addressModeV;this.addressModeW=(s=e.addressModeW)!=null?s:this.addressModeW;this.scaleMode=e.scaleMode;this.magFilter=(r=e.magFilter)!=null?r:this.magFilter;this.minFilter=(n=e.minFilter)!=null?n:this.minFilter;this.mipmapFilter=(d=e.mipmapFilter)!=null?d:this.mipmapFilter;this.lodMinClamp=e.lodMinClamp;this.lodMaxClamp=e.lodMaxClamp;this.compare=e.compare;this.maxAnisotropy=(h=e.maxAnisotropy)!=null?h:1}
set addressMode(e){this.addressModeU=e;this.addressModeV=e;this.addressModeW=e}
get addressMode(){return this.addressModeU}
set wrapMode(e){this.addressMode=e}
get wrapMode(){return this.addressMode}
set scaleMode(e){this.magFilter=e;this.minFilter=e;this.mipmapFilter=e}
get scaleMode(){return this.magFilter}
set maxAnisotropy(e){this._maxAnisotropy=Math.min(e,16);if(this._maxAnisotropy>1){this.scaleMode="linear"}}
get maxAnisotropy(){return this._maxAnisotropy}
get _resourceId(){return this._sharedResourceId||this._generateResourceId()}
update(){this.emit("change",this);this._sharedResourceId=null}
_generateResourceId(){this._sharedResourceId=m4(`${this.addressModeU}-${this.addressModeV}-${this.addressModeW}-${this.magFilter}-${this.minFilter}-${this.mipmapFilter}-${this.lodMinClamp}-${this.lodMaxClamp}-${this.compare}-${this._maxAnisotropy}`);return this._resourceId}
destroy(){this.destroyed=!0;this.emit("destroy",this);this.emit("change",this);this.removeAllListeners()}};lp.defaultOptions={addressMode:"clamp-to-edge",scaleMode:"linear"};var _4=Object.defineProperty;var Zu=Object.getOwnPropertySymbols;var y4=Object.prototype.hasOwnProperty;var x4=Object.prototype.propertyIsEnumerable;var Qu=(a,e,t)=>e in a?_4(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var Ju=(a,e)=>{for(var t in e||(e={}))if(y4.call(e,t)){Qu(a,t,e[t])}
if(Zu){for(var t of Zu(e))if(x4.call(e,t)){Qu(a,t,e[t])}}
return a};var bp=class pp extends xt{constructor(e={}){var t;var i;var s;super();this.options=e;this.uid=Ie("textureSource");this._resourceType="textureSource";this._resourceId=Ie("resource");this.uploadMethodId="unknown";this._resolution=1;this.pixelWidth=1;this.pixelHeight=1;this.width=1;this.height=1;this.sampleCount=1;this.mipLevelCount=1;this.autoGenerateMipmaps=!1;this.format="rgba8unorm";this.dimension="2d";this.antialias=!1;this._touched=0;this._batchTick=-1;this._textureBindLocation=-1;e=Ju(Ju({},pp.defaultOptions),e);this.label=(t=e.label)!=null?t:"";this.resource=e.resource;this.autoGarbageCollect=e.autoGarbageCollect;this._resolution=e.resolution;if(e.width){this.pixelWidth=e.width*this._resolution}else{this.pixelWidth=this.resource&&(i=this.resourceWidth)!=null?i:1}
if(e.height){this.pixelHeight=e.height*this._resolution}else{this.pixelHeight=this.resource&&(s=this.resourceHeight)!=null?s:1}
this.width=this.pixelWidth/this._resolution;this.height=this.pixelHeight/this._resolution;this.format=e.format;this.dimension=e.dimensions;this.mipLevelCount=e.mipLevelCount;this.autoGenerateMipmaps=e.autoGenerateMipmaps;this.sampleCount=e.sampleCount;this.antialias=e.antialias;this.alphaMode=e.alphaMode;this.style=new lp(Es(e));this.destroyed=!1;this._refreshPOT()}
get source(){return this}
get style(){return this._style}
set style(e){var t;var i;if(this.style!==e){if(!((t=this._style)==null)){t.off("change",this._onStyleChange,this)}
this._style=e;if(!((i=this._style)==null)){i.on("change",this._onStyleChange,this)}
this._onStyleChange()}}
get addressMode(){return this._style.addressMode}
set addressMode(e){this._style.addressMode=e}
get repeatMode(){return this._style.addressMode}
set repeatMode(e){this._style.addressMode=e}
get magFilter(){return this._style.magFilter}
set magFilter(e){this._style.magFilter=e}
get minFilter(){return this._style.minFilter}
set minFilter(e){this._style.minFilter=e}
get mipmapFilter(){return this._style.mipmapFilter}
set mipmapFilter(e){this._style.mipmapFilter=e}
get lodMinClamp(){return this._style.lodMinClamp}
set lodMinClamp(e){this._style.lodMinClamp=e}
get lodMaxClamp(){return this._style.lodMaxClamp}
set lodMaxClamp(e){this._style.lodMaxClamp=e}
_onStyleChange(){this.emit("styleChange",this)}
update(){if(this.resource){let e=this._resolution;if(this.resize(this.resourceWidth/e,this.resourceHeight/e)){return}}
this.emit("update",this)}
destroy(){this.destroyed=!0;this.emit("destroy",this);this.emit("change",this);if(this._style){this._style.destroy();this._style=null}
this.uploadMethodId=null;this.resource=null;this.removeAllListeners()}
unload(){this._resourceId=Ie("resource");this.emit("change",this);this.emit("unload",this)}
get resourceWidth(){let{resource:e}=this;return e.naturalWidth||e.videoWidth||e.displayWidth||e.width}
get resourceHeight(){let{resource:e}=this;return e.naturalHeight||e.videoHeight||e.displayHeight||e.height}
get resolution(){return this._resolution}
set resolution(e){if(this._resolution!==e){this._resolution=e;this.width=this.pixelWidth/e;this.height=this.pixelHeight/e}}
resize(e,t,i){if(!i){i=this._resolution}
if(!e){e=this.width}
if(!t){t=this.height}
let s=Math.round(e*i);let r=Math.round(t*i);this.width=s/i;this.height=r/i;this._resolution=i;return this.pixelWidth===s&&this.pixelHeight===r?!1:(this._refreshPOT(),this.pixelWidth=s,this.pixelHeight=r,this.emit("resize",this),this._resourceId=Ie("resource"),this.emit("change",this),!0)}
updateMipmaps(){if(this.autoGenerateMipmaps&&this.mipLevelCount>1){this.emit("updateMipmaps",this)}}
set wrapMode(e){this._style.wrapMode=e}
get wrapMode(){return this._style.wrapMode}
set scaleMode(e){this._style.scaleMode=e}
get scaleMode(){return this._style.scaleMode}
_refreshPOT(){this.isPowerOfTwo=!(this.pixelWidth&this.pixelWidth-1)&&!!this.pixelWidth&&!(this.pixelHeight&this.pixelHeight-1)&&!!this.pixelHeight}
static test(e){throw new Error("Unimplemented")}};bp.defaultOptions={resolution:1,format:"bgra8unorm",alphaMode:"premultiply-alpha-on-upload",dimensions:"2d",mipLevelCount:1,autoGenerateMipmaps:!1,sampleCount:1,antialias:!1,autoGarbageCollect:!1};var Na=[1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1,0,1];var ja=[0,1,1,1,0,-1,-1,-1,0,1,1,1,0,-1,-1,-1];var Xa=[0,-1,-1,-1,0,1,1,1,0,1,1,1,0,-1,-1,-1];var Ha=[1,1,0,-1,-1,-1,0,1,-1,-1,0,1,1,1,0,-1];var Pd=[];var gp=[];var lr=Math.sign;function v4(){for(let a=0;a<16;a++){let e=[];Pd.push(e);for(let t=0;t<16;t++){let i=lr(Na[a]*Na[t]+Xa[a]*ja[t]);let s=lr(ja[a]*Na[t]+Ha[a]*ja[t]);let r=lr(Na[a]*Xa[t]+Xa[a]*Ha[t]);let n=lr(ja[a]*Xa[t]+Ha[a]*Ha[t]);for(let d=0;d<16;d++){if(Na[d]===i&&ja[d]===s&&Xa[d]===r&&Ha[d]===n){e.push(d);break}}}}
for(let a=0;a<16;a++){let e=new ae();e.set(Na[a],ja[a],Xa[a],Ha[a],0,0);gp.push(e)}}
v4();var ef=()=>{};var T4=Object.defineProperty;var S4=Object.defineProperties;var w4=Object.getOwnPropertyDescriptors;var tf=Object.getOwnPropertySymbols;var A4=Object.prototype.hasOwnProperty;var E4=Object.prototype.propertyIsEnumerable;var af=(a,e,t)=>e in a?T4(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var P4=(a,e)=>{for(var t in e||(e={}))if(A4.call(e,t)){af(a,t,e[t])}
if(tf){for(var t of tf(e))if(E4.call(e,t)){af(a,t,e[t])}}
return a};var Ps=class extends bp{constructor(e){let t=e.resource||new Float32Array(e.width*e.height*4);let i=e.format;if(!i){if(t instanceof Float32Array){i="rgba32float"}else if(t instanceof Int32Array||t instanceof Uint32Array){i="rgba32uint"}else if(t instanceof Int16Array||t instanceof Uint16Array){i="rgba16uint"}else{t instanceof Int8Array;i="bgra8unorm"}}
super(S4(P4({},e),w4({resource:t,format:i})));this.uploadMethodId="buffer"}
static test(e){return e instanceof Int8Array||e instanceof Uint8Array||e instanceof Uint8ClampedArray||e instanceof Int16Array||e instanceof Uint16Array||e instanceof Int32Array||e instanceof Uint32Array||e instanceof Float32Array}};Ps.extension=I.TextureSource;var sf=new ae();var jr=class{constructor(e,t){this.mapCoord=new ae();this.uClampFrame=new Float32Array(4);this.uClampOffset=new Float32Array(2);this._textureID=-1;this._updateID=0;this.clampOffset=0;if(typeof t>"u"){this.clampMargin=e.width<10?0:.5}else{this.clampMargin=t}
this.isSimple=!1;this.texture=e}
get texture(){return this._texture}
set texture(e){var t;if(this.texture!==e){if(!((t=this._texture)==null)){t.removeListener("update",this.update,this)}
this._texture=e;this._texture.addListener("update",this.update,this);this.update()}}
multiplyUvs(e,t){if(t===undefined){t=e}
let i=this.mapCoord;for(let s=0;s<e.length;s+=2){let r=e[s];let n=e[s+1];t[s]=r*i.a+n*i.c+i.tx;t[s+1]=r*i.b+n*i.d+i.ty}
return t}
update(){let e=this._texture;this._updateID++;let t=e.uvs;this.mapCoord.set(t.x1-t.x0,t.y1-t.y0,t.x3-t.x0,t.y3-t.y0,t.x0,t.y0);let i=e.orig;let s=e.trim;if(s){sf.set(i.width/s.width,0,0,i.height/s.height,-s.x/s.width,-s.y/s.height);this.mapCoord.append(sf)}
let r=e.source;let n=this.uClampFrame;let d=this.clampMargin/r._resolution;let h=this.clampOffset/r._resolution;n[0]=(e.frame.x+d+h)/r.width;n[1]=(e.frame.y+d+h)/r.height;n[2]=(e.frame.x+e.frame.width-d+h)/r.width;n[3]=(e.frame.y+e.frame.height-d+h)/r.height;this.uClampOffset[0]=this.clampOffset/r.pixelWidth;this.uClampOffset[1]=this.clampOffset/r.pixelHeight;this.isSimple=e.frame.width===r.width&&e.frame.height===r.height&&e.rotate===0;return!0}};var W=class extends xt{constructor({source:e,label:t,frame:i,orig:s,trim:r,defaultAnchor:n,defaultBorders:d,rotate:h,dynamic:l}={}){var f;super();this.uid=Ie("texture");this.uvs={x0:0,y0:0,x1:0,y1:0,x2:0,y2:0,x3:0,y3:0};this.frame=new we();this.noFrame=!1;this.dynamic=!1;this.isTexture=!0;this.label=t;this.source=(f=e?.source)!=null?f:new bp();this.noFrame=!i;if(i){this.frame.copyFrom(i)}else{let{width:p,height:_}=this._source;this.frame.width=p;this.frame.height=_}
this.orig=s||this.frame;this.trim=r;this.rotate=h??0;this.defaultAnchor=n;this.defaultBorders=d;this.destroyed=!1;this.dynamic=l||!1;this.updateUvs()}
set source(e){if(this._source){this._source.off("resize",this.update,this)}
this._source=e;e.on("resize",this.update,this);this.emit("update",this)}
get source(){return this._source}
get textureMatrix(){if(!this._textureMatrix){this._textureMatrix=new jr(this)}
return this._textureMatrix}
get width(){return this.orig.width}
get height(){return this.orig.height}
updateUvs(){let{uvs:e,frame:t}=this;let{width:i,height:s}=this._source;let r=t.x/i;let n=t.y/s;let d=t.width/i;let h=t.height/s;let l=this.rotate;if(l){let f=d/2;let p=h/2;let _=r+f;let m=n+p;l=Pd[a][5];e.x0=_+f*Na[l];e.y0=m+p*ja[l];l=Pd[a][2];e.x1=_+f*Na[l];e.y1=m+p*ja[l];l=Pd[a][2];e.x2=_+f*Na[l];e.y2=m+p*ja[l];l=Pd[a][2];e.x3=_+f*Na[l];e.y3=m+p*ja[l]}else{e.x0=r;e.y0=n;e.x1=r+d;e.y1=n;e.x2=r+d;e.y2=n+h;e.x3=r;e.y3=n+h}}
destroy(e=!1){if(this._source&&e){this._source.destroy();this._source=null}
this._textureMatrix=null;this.destroyed=!0;this.emit("destroy",this);this.removeAllListeners()}
update(){if(this.noFrame){this.frame.width=this._source.width;this.frame.height=this._source.height}
this.updateUvs();this.emit("update",this)}
get baseTexture(){return this._source}};W.EMPTY=new W({label:"EMPTY",source:new bp({label:"EMPTY"})});W.EMPTY.destroy=ef;W.WHITE=new W({source:new Ps({resource:new Uint8Array([255,255,255,255]),width:1,height:1,alphaMode:"premultiply-alpha-on-upload",label:"WHITE"}),label:"WHITE"});W.WHITE.destroy=ef;var M4=Object.defineProperty;var C4=Object.defineProperties;var O4=Object.getOwnPropertyDescriptors;var rf=Object.getOwnPropertySymbols;var I4=Object.prototype.hasOwnProperty;var G4=Object.prototype.propertyIsEnumerable;var nf=(a,e,t)=>e in a?M4(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var B4=(a,e)=>{for(var t in e||(e={}))if(I4.call(e,t)){nf(a,t,e[t])}
if(rf){for(var t of rf(e))if(G4.call(e,t)){nf(a,t,e[t])}}
return a};var D4=0;var Rd=class{constructor(e){this._poolKeyHash=Object.create(null);this._texturePool={};this.textureOptions=e||{};this.enableFullScreen=!1}
createTexture(e,t,i){let s=new bp(C4(B4({},this.textureOptions),O4({width:e,height:t,resolution:1,antialias:i,autoGarbageCollect:!1})));return new W({source:s,label:`texturePool_${D4++}`})}
getOptimalTexture(e,t,i=1,s){let r=Math.ceil(e*i-1e-6);let n=Math.ceil(t*i-1e-6);r=wi(r);n=wi(n);let d=(r<<17)+(n<<1)+(s?1:0);if(!this._texturePool[d]){this._texturePool[d]=[]}
let h=this._texturePool[d].pop();if(!h){h=this.createTexture(r,n,s)}
h.source._resolution=i;h.source.width=r/i;h.source.height=n/i;h.source.pixelWidth=r;h.source.pixelHeight=n;h.frame.x=0;h.frame.y=0;h.frame.width=e;h.frame.height=t;h.updateUvs();this._poolKeyHash[h.uid]=d;return h}
getSameSizeTexture(e,t=!1){let i=e.source;return this.getOptimalTexture(e.width,e.height,i._resolution,t)}
returnTexture(e){let t=this._poolKeyHash[e.uid];this._texturePool[t].push(e)}
clear(e){e=e!==!1;if(e){for(let t in this._texturePool){let i=this._texturePool[t];if(i){for(let s=0;s<i.length;s++){i[s].destroy(!0)}}}}
this._texturePool={}}};var Ve=new Rd();var Md=class{constructor(){this.renderPipeId="renderGroup";this.root=null;this.canBundle=!1;this.renderGroupParent=null;this.renderGroupChildren=[];this.worldTransform=new ae();this.worldColorAlpha=4294967295;this.worldColor=16777215;this.worldAlpha=1;this.childrenToUpdate=Object.create(null);this.updateTick=0;this.gcTick=0;this.childrenRenderablesToUpdate={list:[],index:0};this.structureDidChange=!0;this.instructionSet=new Nr();this._onRenderContainers=[];this.textureNeedsUpdate=!0;this.isCachedAsTexture=!1;this._matrixDirty=7}
init(e){this.root=e;if(e._onRender){this.addOnRender(e)}
e.didChange=!0;let t=e.children;for(let i=0;i<t.length;i++){let s=t[i];s._updateFlags=15;this.addChild(s)}}
enableCacheAsTexture(e={}){this.textureOptions=e;this.isCachedAsTexture=!0;this.textureNeedsUpdate=!0}
disableCacheAsTexture(){this.isCachedAsTexture=!1;if(this.texture){Ve.returnTexture(this.texture);this.texture=null}}
updateCacheTexture(){this.textureNeedsUpdate=!0}
reset(){this.renderGroupChildren.length=0;for(let e in this.childrenToUpdate){let t=this.childrenToUpdate[e];t.list.fill(null);t.index=0}
this.childrenRenderablesToUpdate.index=0;this.childrenRenderablesToUpdate.list.fill(null);this.root=null;this.updateTick=0;this.structureDidChange=!0;this._onRenderContainers.length=0;this.renderGroupParent=null;this.disableCacheAsTexture()}
get localTransform(){return this.root.localTransform}
addRenderGroupChild(e){if(e.renderGroupParent){e.renderGroupParent._removeRenderGroupChild(e)}
e.renderGroupParent=this;this.renderGroupChildren.push(e)}
_removeRenderGroupChild(e){let t=this.renderGroupChildren.indexOf(e);if(t>-1){this.renderGroupChildren.splice(t,1)}
e.renderGroupParent=null}
addChild(e){this.structureDidChange=!0;e.parentRenderGroup=this;e.updateTick=-1;if(e.parent===this.root){e.relativeRenderGroupDepth=1}else{e.relativeRenderGroupDepth=e.parent.relativeRenderGroupDepth+1}
e.didChange=!0;this.onChildUpdate(e);if(e.renderGroup){this.addRenderGroupChild(e.renderGroup);return}
if(e._onRender){this.addOnRender(e)}
let t=e.children;for(let i=0;i<t.length;i++){this.addChild(t[i])}}
removeChild(e){this.structureDidChange=!0;if(e._onRender){if(!e.renderGroup){this.removeOnRender(e)}}
e.parentRenderGroup=null;if(e.renderGroup){this._removeRenderGroupChild(e.renderGroup);return}
let t=e.children;for(let i=0;i<t.length;i++){this.removeChild(t[i])}}
removeChildren(e){for(let t=0;t<e.length;t++){this.removeChild(e[t])}}
onChildUpdate(e){let t=this.childrenToUpdate[e.relativeRenderGroupDepth];if(!t){t=this.childrenToUpdate[e.relativeRenderGroupDepth]={index:0,list:[]}}
t.list[t.index++]=e}
updateRenderable(e){if(!(e.globalDisplayStatus<7)){this.instructionSet.renderPipes[e.renderPipeId].updateRenderable(e);e.didViewUpdate=!1}}
onChildViewUpdate(e){this.childrenRenderablesToUpdate.list[this.childrenRenderablesToUpdate.index++]=e}
get isRenderable(){return this.root.localDisplayStatus===7&&this.worldAlpha>0}
addOnRender(e){this._onRenderContainers.push(e)}
removeOnRender(e){this._onRenderContainers.splice(this._onRenderContainers.indexOf(e),1)}
runOnRender(e){for(let t=0;t<this._onRenderContainers.length;t++){this._onRenderContainers[t]._onRender(e)}}
destroy(){this.disableCacheAsTexture();this.renderGroupParent=null;this.root=null;this.childrenRenderablesToUpdate=null;this.childrenToUpdate=null;this.renderGroupChildren=null;this._onRenderContainers=null;this.instructionSet=null}
getChildren(e=[]){let t=this.root.children;for(let i=0;i<t.length;i++){this._getChildren(t[i],e)}
return e}
_getChildren(e,t=[]){t.push(e);if(e.renderGroup){return t}
let i=e.children;for(let s=0;s<i.length;s++){this._getChildren(i[s],t)}
return t}
invalidateMatrices(){this._matrixDirty=7}
get inverseWorldTransform(){return this._matrixDirty&1?(this._matrixDirty&=-2,this._inverseWorldTransform||(this._inverseWorldTransform=new ae()),this._inverseWorldTransform.copyFrom(this.worldTransform).invert()):this._inverseWorldTransform}
get textureOffsetInverseTransform(){return this._matrixDirty&2?(this._matrixDirty&=-3,this._textureOffsetInverseTransform||(this._textureOffsetInverseTransform=new ae()),this._textureOffsetInverseTransform.copyFrom(this.inverseWorldTransform).translate(-this._textureBounds.x,-this._textureBounds.y)):this._textureOffsetInverseTransform}
get inverseParentTextureTransform(){if(!(this._matrixDirty&4)){return this._inverseParentTextureTransform}
this._matrixDirty&=-5;let e=this._parentCacheAsTextureRenderGroup;return e?(this._inverseParentTextureTransform||(this._inverseParentTextureTransform=new ae()),this._inverseParentTextureTransform.copyFrom(this.worldTransform).prepend(e.inverseWorldTransform).translate(-e._textureBounds.x,-e._textureBounds.y)):this.worldTransform}
get cacheToLocalTransform(){return this._parentCacheAsTextureRenderGroup?this._parentCacheAsTextureRenderGroup.textureOffsetInverseTransform:null}};function Cd(a,e,t={}){for(let i in e)if(!t[i]&&e[i]!==undefined){a[i]=e[i]}}
var Ec=new We(null);var Pc=new We(null);var Rc=new We(null,1,1);var de=class a extends xt{constructor(e={}){var t;var i;super();this.uid=Ie("renderable");this._updateFlags=15;this.renderGroup=null;this.parentRenderGroup=null;this.parentRenderGroupIndex=0;this.didChange=!1;this.didViewUpdate=!1;this.relativeRenderGroupDepth=0;this.children=[];this.parent=null;this.includeInBuild=!0;this.measurable=!0;this.isSimple=!0;this.updateTick=-1;this.localTransform=new ae();this.relativeGroupTransform=new ae();this.groupTransform=this.relativeGroupTransform;this.destroyed=!1;this._position=new We(this,0,0);this._scale=Rc;this._pivot=Pc;this._skew=Ec;this._cx=1;this._sx=0;this._cy=0;this._sy=1;this._rotation=0;this.localColor=16777215;this.localAlpha=1;this.groupAlpha=1;this.groupColor=16777215;this.groupColorAlpha=4294967295;this.localBlendMode="inherit";this.groupBlendMode="normal";this.localDisplayStatus=7;this.globalDisplayStatus=7;this._didContainerChangeTick=0;this._didViewChangeTick=0;this._didLocalTransformChangeId=-1;this.effects=[];Cd(this,e,{children:!0,parent:!0,effects:!0});if(!((t=e.children)==null)){t.forEach(s=>this.addChild(s))}
if(!((i=e.parent)==null)){i.addChild(this)}}
static mixin(e){Object.defineProperties(a.prototype,Object.getOwnPropertyDescriptors(e))}
set _didChangeId(e){this._didViewChangeTick=e>>12&4095;this._didContainerChangeTick=e&4095}
get _didChangeId(){return this._didContainerChangeTick&4095|(this._didViewChangeTick&4095)<<12}
addChild(...e){if(e.length>1){for(let s=0;s<e.length;s++){this.addChild(e[s])}
return e[0]}
let t=e[0];let i=this.renderGroup||this.parentRenderGroup;return t.parent===this?(this.children.splice(this.children.indexOf(t),1),this.children.push(t),i&&(i.structureDidChange=!0),t):(t.parent&&t.parent.removeChild(t),this.children.push(t),this.sortableChildren&&(this.sortDirty=!0),t.parent=this,t.didChange=!0,t._updateFlags=15,i&&i.addChild(t),this.emit("childAdded",t,this,this.children.length-1),t.emit("added",this),this._didViewChangeTick++,t._zIndex!==0&&t.depthOfChildModified(),t)}
removeChild(...e){if(e.length>1){for(let s=0;s<e.length;s++){this.removeChild(e[s])}
return e[0]}
let t=e[0];let i=this.children.indexOf(t);if(i>-1){this._didViewChangeTick++;this.children.splice(i,1);if(this.renderGroup){this.renderGroup.removeChild(t)}else if(this.parentRenderGroup){this.parentRenderGroup.removeChild(t)}
if(t.parentRenderLayer){t.parentRenderLayer.detach(t)}
t.parent=null;this.emit("childRemoved",t,this,i);t.emit("removed",this)}
return t}
_onUpdate(e){if(e&&e===this._skew){this._updateSkew()}
this._didContainerChangeTick++;if(!this.didChange){this.didChange=!0;if(this.parentRenderGroup){this.parentRenderGroup.onChildUpdate(this)}}}
set isRenderGroup(e){if(!!this.renderGroup!==e){if(e){this.enableRenderGroup()}else{this.disableRenderGroup()}}}
get isRenderGroup(){return!!this.renderGroup}
enableRenderGroup(){if(this.renderGroup){return}
let e=this.parentRenderGroup;e?.removeChild(this);this.renderGroup=me.get(Md,this);this.groupTransform=ae.IDENTITY;e?.addChild(this);this._updateIsSimple()}
disableRenderGroup(){if(!this.renderGroup){return}
let e=this.parentRenderGroup;e?.removeChild(this);me.return(this.renderGroup);this.renderGroup=null;this.groupTransform=this.relativeGroupTransform;e?.addChild(this);this._updateIsSimple()}
_updateIsSimple(){this.isSimple=!this.renderGroup&&this.effects.length===0}
get worldTransform(){if(!this._worldTransform){this._worldTransform=new ae()}
if(this.renderGroup){this._worldTransform.copyFrom(this.renderGroup.worldTransform)}else if(this.parentRenderGroup){this._worldTransform.appendFrom(this.relativeGroupTransform,this.parentRenderGroup.worldTransform)}
return this._worldTransform}
get x(){return this._position.x}
set x(e){this._position.x=e}
get y(){return this._position.y}
set y(e){this._position.y=e}
get position(){return this._position}
set position(e){this._position.copyFrom(e)}
get rotation(){return this._rotation}
set rotation(e){if(this._rotation!==e){this._rotation=e;this._onUpdate(this._skew)}}
get angle(){return this.rotation*Y5}
set angle(e){this.rotation=e*$5}
get pivot(){if(this._pivot===Pc){this._pivot=new We(this,0,0)}
return this._pivot}
set pivot(e){if(this._pivot===Pc){this._pivot=new We(this,0,0)}
if(typeof e=="number"){this._pivot.set(e)}else{this._pivot.copyFrom(e)}}
get skew(){if(this._skew===Ec){this._skew=new We(this,0,0)}
return this._skew}
set skew(e){if(this._skew===Ec){this._skew=new We(this,0,0)}
this._skew.copyFrom(e)}
get scale(){if(this._scale===Rc){this._scale=new We(this,1,1)}
return this._scale}
set scale(e){if(this._scale===Rc){this._scale=new We(this,0,0)}
if(typeof e=="number"){this._scale.set(e)}else{this._scale.copyFrom(e)}}
get width(){return Math.abs(this.scale.x*this.getLocalBounds().width)}
set width(e){let t=this.getLocalBounds().width;this._setWidth(e,t)}
get height(){return Math.abs(this.scale.y*this.getLocalBounds().height)}
set height(e){let t=this.getLocalBounds().height;this._setHeight(e,t)}
getSize(e){if(!e){e={}}
let t=this.getLocalBounds();e.width=Math.abs(this.scale.x*t.width);e.height=Math.abs(this.scale.y*t.height);return e}
setSize(e,t){var i;let s=this.getLocalBounds();if(typeof e=="object"){t=(i=e.height)!=null?i:e.width;e=e.width}else if(!(t!=null)){t=e}
if(e!==undefined){this._setWidth(e,s.width)}
if(t!==undefined){this._setHeight(t,s.height)}}
_updateSkew(){let e=this._rotation;let t=this._skew;this._cx=Math.cos(e+t._y);this._sx=Math.sin(e+t._y);this._cy=-Math.sin(e-t._x);this._sy=Math.cos(e-t._x)}
updateTransform(e){this.position.set(typeof e.x=="number"?e.x:this.position.x,typeof e.y=="number"?e.y:this.position.y);this.scale.set(typeof e.scaleX=="number"?e.scaleX||1:this.scale.x,typeof e.scaleY=="number"?e.scaleY||1:this.scale.y);this.rotation=typeof e.rotation=="number"?e.rotation:this.rotation;this.skew.set(typeof e.skewX=="number"?e.skewX:this.skew.x,typeof e.skewY=="number"?e.skewY:this.skew.y);this.pivot.set(typeof e.pivotX=="number"?e.pivotX:this.pivot.x,typeof e.pivotY=="number"?e.pivotY:this.pivot.y);return this}
setFromMatrix(e){e.decompose(this)}
updateLocalTransform(){let e=this._didContainerChangeTick;if(this._didLocalTransformChangeId===e){return}
this._didLocalTransformChangeId=e;let t=this.localTransform;let i=this._scale;let s=this._pivot;let r=this._position;let n=i._x;let d=i._y;let h=s._x;let l=s._y;t.a=this._cx*n;t.b=this._sx*n;t.c=this._cy*d;t.d=this._sy*d;t.tx=r._x-(h*t.a+l*t.c);t.ty=r._y-(h*t.b+l*t.d)}
set alpha(e){if(e!==this.localAlpha){this.localAlpha=e;this._updateFlags|=1;this._onUpdate()}}
get alpha(){return this.localAlpha}
set tint(e){let t=gi.shared.setValue(e??16777215).toBgrNumber();if(t!==this.localColor){this.localColor=t;this._updateFlags|=1;this._onUpdate()}}
get tint(){return((this.localColor&255)<<16)+(this.localColor&65280)+(this.localColor>>16&255)}
set blendMode(e){if(this.localBlendMode!==e){if(this.parentRenderGroup){this.parentRenderGroup.structureDidChange=!0}
this._updateFlags|=2;this.localBlendMode=e;this._onUpdate()}}
get blendMode(){return this.localBlendMode}
get visible(){return!!(this.localDisplayStatus&2)}
set visible(e){let t=e?2:0;if((this.localDisplayStatus&2)!==t){if(this.parentRenderGroup){this.parentRenderGroup.structureDidChange=!0}
this._updateFlags|=4;this.localDisplayStatus^=2;this._onUpdate()}}
get culled(){return!(this.localDisplayStatus&4)}
set culled(e){let t=e?0:4;if((this.localDisplayStatus&4)!==t){if(this.parentRenderGroup){this.parentRenderGroup.structureDidChange=!0}
this._updateFlags|=4;this.localDisplayStatus^=4;this._onUpdate()}}
get renderable(){return!!(this.localDisplayStatus&1)}
set renderable(e){let t=e?1:0;if((this.localDisplayStatus&1)!==t){this._updateFlags|=4;this.localDisplayStatus^=1;if(this.parentRenderGroup){this.parentRenderGroup.structureDidChange=!0}
this._onUpdate()}}
get isRenderable(){return this.localDisplayStatus===7&&this.groupAlpha>0}
destroy(e=!1){var t;if(this.destroyed){return}
this.destroyed=!0;let i;if(this.children.length){i=this.removeChildren(0,this.children.length)}
this.removeFromParent();this.parent=null;this._maskEffect=null;this._filterEffect=null;this.effects=null;this._position=null;this._scale=null;this._pivot=null;this._skew=null;this.emit("destroyed",this);this.removeAllListeners();if((typeof e=="boolean"?e:e?.children)&&i){for(let s=0;s<i.length;++s){i[s].destroy(e)}}
if(!((t=this.renderGroup)==null)){t.destroy()}
this.renderGroup=null}};de.mixin(Q5);de.mixin(n4);de.mixin(f4);de.mixin(h4);de.mixin(d4);de.mixin(i4);de.mixin(s4);de.mixin(l4);de.mixin(V5);de.mixin(Z5);de.mixin(o4);de.mixin(J5);var Rs=class a{constructor(e){this.bubbles=!0;this.cancelBubble=!0;this.cancelable=!1;this.composed=!1;this.defaultPrevented=!1;this.eventPhase=a.prototype.NONE;this.propagationStopped=!1;this.propagationImmediatelyStopped=!1;this.layer=new Pe();this.page=new Pe();this.NONE=0;this.CAPTURING_PHASE=1;this.AT_TARGET=2;this.BUBBLING_PHASE=3;this.manager=e}
get layerX(){return this.layer.x}
get layerY(){return this.layer.y}
get pageX(){return this.page.x}
get pageY(){return this.page.y}
get data(){return this}
composedPath(){if(this.manager&&(!this.path||this.path[this.path.length-1]!==this.target)){this.path=this.target?this.manager.propagationPath(this.target):[]}
return this.path}
initEvent(e,t,i){throw new Error("initEvent() is a legacy DOM API. It is not implemented in the Federated Events API.")}
initUIEvent(e,t,i,s,r){throw new Error("initUIEvent() is a legacy DOM API. It is not implemented in the Federated Events API.")}
preventDefault(){if(this.nativeEvent instanceof Event&&this.nativeEvent.cancelable){this.nativeEvent.preventDefault()}
this.defaultPrevented=!0}
stopImmediatePropagation(){this.propagationImmediatelyStopped=!0}
stopPropagation(){this.propagationStopped=!0}};var Mc=/iPhone/i;var of=/iPod/i;var cf=/iPad/i;var df=/\biOS-universal(?:.+)Mac\b/i;var Cc=/\bAndroid(?:.+)Mobile\b/i;var hf=/Android/i;var di=/(?:SD4930UR|\bSilk(?:.+)Mobile\b)/i;var ur=/Silk/i;var ra=/Windows Phone/i;var lf=/\bWindows(?:.+)ARM\b/i;var uf=/BlackBerry/i;var ff=/BB10/i;var bf=/Opera Mini/i;var pf=/\b(CriOS|Chrome)(?:.+)Mobile/i;var gf=/Mobile(?:.+)Firefox\b/i;function k4(a){return function(e){return e.test(a)}}
function _f(a){var e={userAgent:"",platform:"",maxTouchPoints:0};if(!a&&typeof navigator<"u"){e={userAgent:navigator.userAgent,platform:navigator.platform,maxTouchPoints:navigator.maxTouchPoints||0}}else if(typeof a=="string"){e.userAgent=a}else if(a&&a.userAgent){e={userAgent:a.userAgent,platform:a.platform,maxTouchPoints:a.maxTouchPoints||0}}
var t=e.userAgent;var i=t.split("[FBAN");if(typeof i[1]<"u"){t=i[0]}
i=t.split("Twitter");if(typeof i[1]<"u"){t=i[0]}
var s=k4(t);var r={apple:{phone:s(Mc)&&!s(ra),ipod:s(of),tablet:!s(Mc)&&(s(cf)||typeof e<"u"&&e.platform==="MacIntel"&&typeof e.maxTouchPoints=="number"&&e.maxTouchPoints>1&&typeof MSStream>"u")&&!s(ra),universal:s(df),device:(s(Mc)||s(of)||s(cf)||s(df)||typeof e<"u"&&e.platform==="MacIntel"&&typeof e.maxTouchPoints=="number"&&e.maxTouchPoints>1&&typeof MSStream>"u")&&!s(ra)},amazon:{phone:s(di),tablet:!s(di)&&s(ur),device:s(di)||s(ur)},android:{phone:!s(ra)&&s(di)||!s(ra)&&s(Cc),tablet:!s(ra)&&!s(di)&&!s(Cc)&&(s(ur)||s(hf)),device:!s(ra)&&(s(di)||s(ur)||s(Cc)||s(hf))||s(/\bokhttp\b/i)},windows:{phone:s(ra),tablet:s(lf),device:s(ra)||s(lf)},other:{blackberry:s(uf),blackberry10:s(ff),opera:s(bf),firefox:s(gf),chrome:s(pf),device:s(uf)||s(ff)||s(bf)||s(gf)||s(pf)},any:!1,phone:!1,tablet:!1};r.any=r.apple.device||r.android.device||r.windows.device||r.other.device;r.phone=r.apple.phone||r.android.phone||r.windows.phone;r.tablet=r.apple.tablet||r.android.tablet||r.windows.tablet;return r}
var yf;var U4=(yf=_f.default)!=null?yf:_f;var qa=U4(globalThis.navigator);var L4=Object.defineProperty;var xf=Object.getOwnPropertySymbols;var N4=Object.prototype.hasOwnProperty;var j4=Object.prototype.propertyIsEnumerable;var vf=(a,e,t)=>e in a?L4(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var Tf=(a,e)=>{for(var t in e||(e={}))if(N4.call(e,t)){vf(a,t,e[t])}
if(xf){for(var t of xf(e))if(j4.call(e,t)){vf(a,t,e[t])}}
return a};var V4=-1e3;var W4=-1e3;var Od=class mp{constructor(e,t=qa){this._mobileInfo=t;this.debug=!1;this._activateOnTab=!0;this._deactivateOnMouseMove=!0;this._isActive=!1;this._isMobileAccessibility=!1;this._div=null;this._pool=[];this._renderId=0;this._children=[];this._androidUpdateCount=0;this._androidUpdateFrequency=500;this._hookDiv=null;if(t.tablet||t.phone){this._createTouchHook()}
this._renderer=e}
get isActive(){return this._isActive}
get isMobileAccessibility(){return this._isMobileAccessibility}
get hookDiv(){return this._hookDiv}
_createTouchHook(){let e=document.createElement("button");e.style.width=`${1}px`;e.style.height=`${1}px`;e.style.position="absolute";e.style.top=`${V4}px`;e.style.left=`${W4}px`;e.style.zIndex=2 .toString();e.style.backgroundColor="#FF0000";e.title="select to enable accessibility for this content";e.addEventListener("focus",()=>{this._isMobileAccessibility=!0;this._activate();this._destroyTouchHook()});document.body.appendChild(e);this._hookDiv=e}
_destroyTouchHook(){if(this._hookDiv){document.body.removeChild(this._hookDiv);this._hookDiv=null}}
_activate(){if(this._isActive){return}
this._isActive=!0;if(!this._div){this._div=document.createElement("div");this._div.style.width=`${100}px`;this._div.style.height=`${100}px`;this._div.style.position="absolute";this._div.style.top=`${0}px`;this._div.style.left=`${0}px`;this._div.style.zIndex=2 .toString();this._div.style.pointerEvents="none"}
if(this._activateOnTab){this._onKeyDown=this._onKeyDown.bind(this);globalThis.addEventListener("keydown",this._onKeyDown,!1)}
if(this._deactivateOnMouseMove){this._onMouseMove=this._onMouseMove.bind(this);globalThis.document.addEventListener("mousemove",this._onMouseMove,!0)}
let e=this._renderer.view.canvas;if(e.parentNode){e.parentNode.appendChild(this._div);this._initAccessibilitySetup()}else{let t=new MutationObserver(()=>{if(e.parentNode){e.parentNode.appendChild(this._div);t.disconnect();this._initAccessibilitySetup()}});t.observe(document.body,{childList:!0,subtree:!0})}}
_initAccessibilitySetup(){this._renderer.runners.postrender.add(this);if(this._renderer.lastObjectRendered){this._updateAccessibleObjects(this._renderer.lastObjectRendered)}}
_deactivate(){if(!(!this._isActive||this._isMobileAccessibility)){this._isActive=!1;globalThis.document.removeEventListener("mousemove",this._onMouseMove,!0);if(this._activateOnTab){globalThis.addEventListener("keydown",this._onKeyDown,!1)}
this._renderer.runners.postrender.remove(this);for(let e of this._children){if(e._accessibleDiv&&e._accessibleDiv.parentNode){e._accessibleDiv.parentNode.removeChild(e._accessibleDiv);e._accessibleDiv=null}
e._accessibleActive=!1}
this._pool.forEach(e=>{if(e.parentNode){e.parentNode.removeChild(e)}});if(this._div&&this._div.parentNode){this._div.parentNode.removeChild(this._div)}
this._pool=[];this._children=[]}}
_updateAccessibleObjects(e){if(!e.visible||!e.accessibleChildren){return}
if(e.accessible){if(!e._accessibleActive){this._addChild(e)}
e._renderId=this._renderId}
let t=e.children;if(t){for(let i=0;i<t.length;i++){this._updateAccessibleObjects(t[i])}}}
init(e){let t=mp.defaultOptions;let i={accessibilityOptions:Tf(Tf({},t),e?.accessibilityOptions||{})};this.debug=i.accessibilityOptions.debug;this._activateOnTab=i.accessibilityOptions.activateOnTab;this._deactivateOnMouseMove=i.accessibilityOptions.deactivateOnMouseMove;if(i.accessibilityOptions.enabledByDefault){this._activate()}else if(this._activateOnTab){this._onKeyDown=this._onKeyDown.bind(this);globalThis.addEventListener("keydown",this._onKeyDown,!1)}
this._renderer.runners.postrender.remove(this)}
postrender(){let e=performance.now();if(this._mobileInfo.android.device&&e<this._androidUpdateCount||(this._androidUpdateCount=e+this._androidUpdateFrequency,!this._renderer.renderingToScreen||!this._renderer.view.canvas)){return}
let t=new Set();if(this._renderer.lastObjectRendered){this._updateAccessibleObjects(this._renderer.lastObjectRendered);for(let i of this._children)if(i._renderId===this._renderId){t.add(this._children.indexOf(i))}}
for(let i=this._children.length-1;i>=0;i--){let s=this._children[i];if(!t.has(i)){if(s._accessibleDiv&&s._accessibleDiv.parentNode){s._accessibleDiv.parentNode.removeChild(s._accessibleDiv);this._pool.push(s._accessibleDiv);s._accessibleDiv=null}
s._accessibleActive=!1;np(this._children,i,1)}}
if(this._renderer.renderingToScreen){let{x:i,y:s,width:r,height:n}=this._renderer.screen;let d=this._div;d.style.left=`${i}px`;d.style.top=`${s}px`;d.style.width=`${r}px`;d.style.height=`${n}px`}
for(let i=0;i<this._children.length;i++){let s=this._children[i];if(!s._accessibleActive||!s._accessibleDiv){continue}
let r=s._accessibleDiv;let n=s.hitArea||s.getBounds().rectangle;if(s.hitArea){let d=s.worldTransform;let h=this._renderer.resolution;let l=this._renderer.resolution;r.style.left=`${(d.tx + n.x * d.a) * h}px`;r.style.top=`${(d.ty + n.y * d.d) * l}px`;r.style.width=`${n.width * d.a * h}px`;r.style.height=`${n.height * d.d * l}px`}else{this._capHitArea(n);let d=this._renderer.resolution;let h=this._renderer.resolution;r.style.left=`${n.x * d}px`;r.style.top=`${n.y * h}px`;r.style.width=`${n.width * d}px`;r.style.height=`${n.height * h}px`}}
this._renderId++}
_updateDebugHTML(e){e.innerHTML=`type: ${e.type}</br> title : ${e.title}</br> tabIndex: ${e.tabIndex}`}
_capHitArea(e){if(e.x<0){e.width+=e.x;e.x=0}
if(e.y<0){e.height+=e.y;e.y=0}
let{width:t,height:i}=this._renderer;if(e.x+e.width>t){e.width=t-e.x}
if(e.y+e.height>i){e.height=i-e.y}}
_addChild(e){let t=this._pool.pop();if(!t){if(e.accessibleType==="button"){t=document.createElement("button")}else{t=document.createElement(e.accessibleType);t.style.cssText=`
    color: transparent;
    pointer-events: none;
    padding: 0;
    margin: 0;
    border: 0;
    outline: 0;
    background: transparent;
    box-sizing: border-box;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
`;if(e.accessibleText){t.innerText=e.accessibleText}}
t.style.width=`${100}px`;t.style.height=`${100}px`;t.style.backgroundColor=this.debug?"rgba(255,255,255,0.5)":"transparent";t.style.position="absolute";t.style.zIndex=2 .toString();t.style.borderStyle="none";if(navigator.userAgent.toLowerCase().includes("chrome")){t.setAttribute("aria-live","off")}else{t.setAttribute("aria-live","polite")}
if(navigator.userAgent.match(/rv:.*Gecko\//)){t.setAttribute("aria-relevant","additions")}else{t.setAttribute("aria-relevant","text")}
t.addEventListener("click",this._onClick.bind(this));t.addEventListener("focus",this._onFocus.bind(this));t.addEventListener("focusout",this._onFocusOut.bind(this))}
t.style.pointerEvents=e.accessiblePointerEvents;t.type=e.accessibleType;if(e.accessibleTitle&&e.accessibleTitle!==null){t.title=e.accessibleTitle}else if(!e.accessibleHint||e.accessibleHint===null){t.title=`container ${e.tabIndex}`}
if(e.accessibleHint&&e.accessibleHint!==null){t.setAttribute("aria-label",e.accessibleHint)}
if(this.debug){this._updateDebugHTML(t)}
e._accessibleActive=!0;e._accessibleDiv=t;t.container=e;this._children.push(e);this._div.appendChild(e._accessibleDiv);if(e.interactive){e._accessibleDiv.tabIndex=e.tabIndex}}
_dispatchEvent(e,t){let{container:i}=e.target;let s=this._renderer.events.rootBoundary;let r=Object.assign(new Rs(s),{target:i});s.rootTarget=this._renderer.lastObjectRendered;t.forEach(n=>s.dispatchEvent(r,n))}
_onClick(e){this._dispatchEvent(e,["click","pointertap","tap"])}
_onFocus(e){if(!e.target.getAttribute("aria-live")){e.target.setAttribute("aria-live","assertive")}
this._dispatchEvent(e,["mouseover"])}
_onFocusOut(e){if(!e.target.getAttribute("aria-live")){e.target.setAttribute("aria-live","polite")}
this._dispatchEvent(e,["mouseout"])}
_onKeyDown(e){if(!(e.keyCode!==9||!this._activateOnTab)){this._activate()}}
_onMouseMove(e){if(!(e.movementX===0&&e.movementY===0)){this._deactivate()}}
destroy(){this._deactivate();this._destroyTouchHook();this._div=null;this._pool=null;this._children=null;this._renderer=null;if(this._activateOnTab){globalThis.removeEventListener("keydown",this._onKeyDown)}}
setAccessibilityEnabled(e){if(e){this._activate()}else{this._deactivate()}}};Od.extension={type:[I.WebGLSystem,I.WebGPUSystem],name:"accessibility"};Od.defaultOptions={enabledByDefault:!1,debug:!1,activateOnTab:!0,deactivateOnMouseMove:!0};var K4={accessible:!1,accessibleTitle:null,accessibleHint:null,tabIndex:0,_accessibleActive:!1,_accessibleDiv:null,accessibleType:"button",accessibleText:null,accessiblePointerEvents:"auto",accessibleChildren:!0,_renderId:-1};fe.add(Od);de.mixin(K4);var Hr=class{static init(e){Object.defineProperty(this,"resizeTo",{set(t){globalThis.removeEventListener("resize",this.queueResize);this._resizeTo=t;if(t){globalThis.addEventListener("resize",this.queueResize);this.resize()}},get(){return this._resizeTo}});this.queueResize=()=>{if(this._resizeTo){this._cancelResize();this._resizeId=requestAnimationFrame(()=>this.resize())}};this._cancelResize=()=>{if(this._resizeId){cancelAnimationFrame(this._resizeId);this._resizeId=null}};this.resize=()=>{if(!this._resizeTo){return}
this._cancelResize();let t;let i;if(this._resizeTo===globalThis.window){t=globalThis.innerWidth;i=globalThis.innerHeight}else{let{clientWidth:s,clientHeight:r}=this._resizeTo;t=s;i=r}
this.renderer.resize(t,i);this.render()};this._resizeId=null;this._resizeTo=null;this.resizeTo=e.resizeTo||null}
static destroy(){globalThis.removeEventListener("resize",this.queueResize);this._cancelResize();this._cancelResize=null;this.queueResize=null;this.resizeTo=null;this.resize=null}};Hr.extension=I.Application;var Ra=(a=>(a[a.INTERACTION=50]="INTERACTION",a[a.HIGH=25]="HIGH",a[a.NORMAL=0]="NORMAL",a[a.LOW=-25]="LOW",a[a.UTILITY=-50]="UTILITY",a))(Ra||{});var ys=class{constructor(e,t=null,i=0,s=!1){this.next=null;this.previous=null;this._destroyed=!1;this._fn=e;this._context=t;this.priority=i;this._once=s}
match(e,t=null){return this._fn===e&&this._context===t}
emit(e){if(this._fn){if(this._context){this._fn.call(this._context,e)}else{this._fn(e)}}
let t=this.next;if(this._once){this.destroy(!0)}
if(this._destroyed){this.next=null}
return t}
connect(e){this.previous=e;if(e.next){e.next.previous=this}
this.next=e.next;e.next=this}
destroy(e=!1){this._destroyed=!0;this._fn=null;this._context=null;if(this.previous){this.previous.next=this.next}
if(this.next){this.next.previous=this.previous}
let t=this.next;this.next=e?null:t;this.previous=null;return t}};var _p=class ut{constructor(){this.autoStart=!1;this.deltaTime=1;this.lastTime=-1;this.speed=1;this.started=!1;this._requestId=null;this._maxElapsedMS=100;this._minElapsedMS=0;this._protected=!1;this._lastFrame=-1;this._head=new ys(null,null,Infinity);this.deltaMS=1/ut.targetFPMS;this.elapsedMS=1/ut.targetFPMS;this._tick=e=>{this._requestId=null;if(this.started){this.update(e);if(this.started&&this._requestId===null&&this._head.next){this._requestId=requestAnimationFrame(this._tick)}}}}
_requestIfNeeded(){if(this._requestId===null&&this._head.next){this.lastTime=performance.now();this._lastFrame=this.lastTime;this._requestId=requestAnimationFrame(this._tick)}}
_cancelIfNeeded(){if(this._requestId!==null){cancelAnimationFrame(this._requestId);this._requestId=null}}
_startIfPossible(){if(this.started){this._requestIfNeeded()}else if(this.autoStart){this.start()}}
add(e,t,i=Ra.NORMAL){return this._addListener(new ys(e,t,i))}
addOnce(e,t,i=Ra.NORMAL){return this._addListener(new ys(e,t,i,!0))}
_addListener(e){let t=this._head.next;let i=this._head;if(!t){e.connect(i)}else{for(;t;){if(e.priority>t.priority){e.connect(i);break}
i=t;t=t.next}
if(!e.previous){e.connect(i)}}
this._startIfPossible();return this}
remove(e,t){let i=this._head.next;for(;i;){if(i.match(e,t)){i=i.destroy()}else{i=i.next}}
if(!this._head.next){this._cancelIfNeeded()}
return this}
get count(){if(!this._head){return 0}
let e=0;let t=this._head;for(;t=t.next;){e++}
return e}
start(){if(!this.started){this.started=!0;this._requestIfNeeded()}}
stop(){if(this.started){this.started=!1;this._cancelIfNeeded()}}
destroy(){if(!this._protected){this.stop();let e=this._head.next;for(;e;){e=e.destroy(!0)}
this._head.destroy();this._head=null}}
update(e=performance.now()){let t;if(e>this.lastTime){t=this.elapsedMS=e-this.lastTime;if(t>this._maxElapsedMS){t=this._maxElapsedMS}
t*=this.speed;if(this._minElapsedMS){let r=e-this._lastFrame|0;if(r<this._minElapsedMS){return}
this._lastFrame=e-r%this._minElapsedMS}
this.deltaMS=t;this.deltaTime=this.deltaMS*ut.targetFPMS;let i=this._head;let s=i.next;for(;s;){s=s.emit(this)}
if(!i.next){this._cancelIfNeeded()}}else{this.deltaTime=this.deltaMS=this.elapsedMS=0}
this.lastTime=e}
get FPS(){return 1e3/this.elapsedMS}
get minFPS(){return 1e3/this._maxElapsedMS}
set minFPS(e){let t=Math.min(this.maxFPS,e);let i=Math.min(Math.max(0,t)/1e3,ut.targetFPMS);this._maxElapsedMS=1/i}
get maxFPS(){return this._minElapsedMS?Math.round(1e3/this._minElapsedMS):0}
set maxFPS(e){if(e===0){this._minElapsedMS=0}else{let t=Math.max(this.minFPS,e);this._minElapsedMS=1/(t/1e3)}}
static get shared(){if(!ut._shared){let e=ut._shared=new ut();e.autoStart=!0;e._protected=!0}
return ut._shared}
static get system(){if(!ut._system){let e=ut._system=new ut();e.autoStart=!0;e._protected=!0}
return ut._system}};_p.targetFPMS=.06;var zr=class{static init(e){e=Object.assign({autoStart:!0,sharedTicker:!1},e);Object.defineProperty(this,"ticker",{set(t){if(this._ticker){this._ticker.remove(this.render,this)}
this._ticker=t;if(t){t.add(this.render,this,Ra.LOW)}},get(){return this._ticker}});this.stop=()=>{this._ticker.stop()};this.start=()=>{this._ticker.start()};this._ticker=null;this.ticker=e.sharedTicker?_p.shared:new _p();if(e.autoStart){this.start()}}
static destroy(){if(this._ticker){let e=this._ticker;this.ticker=null;e.destroy()}}};zr.extension=I.Application;fe.add(Hr);fe.add(zr);var q4=class{constructor(){this.interactionFrequency=10;this._deltaTime=0;this._didMove=!1;this._tickerAdded=!1;this._pauseUpdate=!0}
init(a){this.removeTickerListener();this.events=a;this.interactionFrequency=10;this._deltaTime=0;this._didMove=!1;this._tickerAdded=!1;this._pauseUpdate=!0}
get pauseUpdate(){return this._pauseUpdate}
set pauseUpdate(a){this._pauseUpdate=a}
addTickerListener(){if(!(this._tickerAdded||!this.domElement)){_p.system.add(this._tickerUpdate,this,Ra.INTERACTION);this._tickerAdded=!0}}
removeTickerListener(){if(this._tickerAdded){_p.system.remove(this._tickerUpdate,this);this._tickerAdded=!1}}
pointerMoved(){this._didMove=!0}
_update(){if(!this.domElement||this._pauseUpdate){return}
if(this._didMove){this._didMove=!1;return}
let a=this.events._rootPointerEvent;if(!(this.events.supportsTouchEvents&&a.pointerType==="touch")){globalThis.document.dispatchEvent(new PointerEvent("pointermove",{clientX:a.clientX,clientY:a.clientY,pointerType:a.pointerType,pointerId:a.pointerId}))}}
_tickerUpdate(a){this._deltaTime+=a.deltaTime;if(!(this._deltaTime<this.interactionFrequency)){this._deltaTime=0;this._update()}}};var Aa=new q4();var Ai=class extends Rs{constructor(){super(...arguments);this.client=new Pe();this.movement=new Pe();this.offset=new Pe();this.global=new Pe();this.screen=new Pe()}
get clientX(){return this.client.x}
get clientY(){return this.client.y}
get x(){return this.clientX}
get y(){return this.clientY}
get movementX(){return this.movement.x}
get movementY(){return this.movement.y}
get offsetX(){return this.offset.x}
get offsetY(){return this.offset.y}
get globalX(){return this.global.x}
get globalY(){return this.global.y}
get screenX(){return this.screen.x}
get screenY(){return this.screen.y}
getLocalPosition(e,t,i){return e.worldTransform.applyInverse(i||this.global,t)}
getModifierState(e){return"getModifierState" in this.nativeEvent&&this.nativeEvent.getModifierState(e)}
initMouseEvent(e,t,i,s,r,n,d,h,l,f,p,_,m,v,T){throw new Error("Method not implemented.")}};var gt=class extends Ai{constructor(){super(...arguments);this.width=0;this.height=0;this.isPrimary=!1}
getCoalescedEvents(){return this.type==="pointermove"||this.type==="mousemove"||this.type==="touchmove"?[this]:[]}
getPredictedEvents(){throw new Error("getPredictedEvents is not supported!")}};var Pa=class extends Ai{constructor(){super(...arguments);this.DOM_DELTA_PIXEL=0;this.DOM_DELTA_LINE=1;this.DOM_DELTA_PAGE=2}};Pa.DOM_DELTA_PIXEL=0;Pa.DOM_DELTA_LINE=1;Pa.DOM_DELTA_PAGE=2;var Q4=new Pe();var ts=new Pe();var Id=class{constructor(e){this.dispatch=new xt();this.moveOnAll=!1;this.enableGlobalMoveEvents=!0;this.mappingState={trackingData:{}};this.eventPool=new Map();this._allInteractiveElements=[];this._hitElements=[];this._isPointerMoveEvent=!1;this.rootTarget=e;this.hitPruneFn=this.hitPruneFn.bind(this);this.hitTestFn=this.hitTestFn.bind(this);this.mapPointerDown=this.mapPointerDown.bind(this);this.mapPointerMove=this.mapPointerMove.bind(this);this.mapPointerOut=this.mapPointerOut.bind(this);this.mapPointerOver=this.mapPointerOver.bind(this);this.mapPointerUp=this.mapPointerUp.bind(this);this.mapPointerUpOutside=this.mapPointerUpOutside.bind(this);this.mapWheel=this.mapWheel.bind(this);this.mappingTable={};this.addEventMapping("pointerdown",this.mapPointerDown);this.addEventMapping("pointermove",this.mapPointerMove);this.addEventMapping("pointerout",this.mapPointerOut);this.addEventMapping("pointerleave",this.mapPointerOut);this.addEventMapping("pointerover",this.mapPointerOver);this.addEventMapping("pointerup",this.mapPointerUp);this.addEventMapping("pointerupoutside",this.mapPointerUpOutside);this.addEventMapping("wheel",this.mapWheel)}
addEventMapping(e,t){if(!this.mappingTable[e]){this.mappingTable[e]=[]}
this.mappingTable[e].push({fn:t,priority:0});this.mappingTable[e].sort((i,s)=>i.priority-s.priority)}
dispatchEvent(e,t){e.propagationStopped=!1;e.propagationImmediatelyStopped=!1;this.propagate(e,t);this.dispatch.emit(t||e.type,e)}
mapEvent(e){if(!this.rootTarget){return}
let t=this.mappingTable[e.type];if(t){let i=0;for(let s=t.length;i<s;i++){t[i].fn(e)}}}
hitTest(e,t){Aa.pauseUpdate=!0;let i=this._isPointerMoveEvent&&this.enableGlobalMoveEvents?"hitTestMoveRecursive":"hitTestRecursive";let s=this[i](this.rootTarget,this.rootTarget.eventMode,Q4.set(e,t),this.hitTestFn,this.hitPruneFn);return s&&s[0]}
propagate(e,t){if(!e.target){return}
let i=e.composedPath();e.eventPhase=e.CAPTURING_PHASE;let s=0;for(let r=i.length-1;s<r;s++){e.currentTarget=i[s];this.notifyTarget(e,t);if(e.propagationStopped||e.propagationImmediatelyStopped){return}}
e.eventPhase=e.AT_TARGET;e.currentTarget=e.target;this.notifyTarget(e,t);if(!(e.propagationStopped||e.propagationImmediatelyStopped)){e.eventPhase=e.BUBBLING_PHASE;for(let s=i.length-2;s>=0;s--){e.currentTarget=i[s];this.notifyTarget(e,t);if(e.propagationStopped||e.propagationImmediatelyStopped){return}}}}
all(e,t,i=this._allInteractiveElements){if(i.length===0){return}
e.eventPhase=e.BUBBLING_PHASE;let s=Array.isArray(t)?t:[t];for(let r=i.length-1;r>=0;r--){s.forEach(n=>{e.currentTarget=i[r];this.notifyTarget(e,n)})}}
propagationPath(e){let t=[e];for(let i=0;i<2048&&e!==this.rootTarget&&e.parent;i++){if(!e.parent){throw new Error("Cannot find propagation path to disconnected target")}
t.push(e.parent);e=e.parent}
t.reverse();return t}
hitTestMoveRecursive(e,t,i,s,r,n=!1){let d=!1;if(this._interactivePrune(e)){return null}
if(e.eventMode==="dynamic"||t==="dynamic"){Aa.pauseUpdate=!1}
if(e.interactiveChildren&&e.children){let f=e.children;for(let p=f.length-1;p>=0;p--){let _=f[p];let m=this.hitTestMoveRecursive(_,this._isInteractive(t)?t:_.eventMode,i,s,r,n||r(e,i));if(m){if(m.length>0&&!m[m.length-1].parent){continue}
let v=e.isInteractive();if(m.length>0||v){if(v){this._allInteractiveElements.push(e)}
m.push(e)}
if(this._hitElements.length===0){this._hitElements=m}
d=!0}}}
let h=this._isInteractive(t);let l=e.isInteractive();if(l&&l){this._allInteractiveElements.push(e)}
return n||this._hitElements.length>0?null:d?this._hitElements:h&&!r(e,i)&&s(e,i)?l?[e]:[]:null}
hitTestRecursive(e,t,i,s,r){if(this._interactivePrune(e)||r(e,i)){return null}
if(e.eventMode==="dynamic"||t==="dynamic"){Aa.pauseUpdate=!1}
if(e.interactiveChildren&&e.children){let h=e.children;for(let f=h.length-1;f>=0;f--){let p=h[f];let _=this.hitTestRecursive(p,this._isInteractive(t)?t:p.eventMode,i,s,r);if(_){if(_.length>0&&!_[_.length-1].parent){continue}
let m=e.isInteractive();if(_.length>0||m){_.push(e)}
return _}}}
let n=this._isInteractive(t);let d=e.isInteractive();return n&&s(e,i)?d?[e]:[]:null}
_isInteractive(e){return e==="static"||e==="dynamic"}
_interactivePrune(e){return!e||!e.visible||!e.renderable||!e.measurable||e.eventMode==="none"||e.eventMode==="passive"&&!e.interactiveChildren}
hitPruneFn(e,t){if(e.hitArea&&(e.worldTransform.applyInverse(t,ts),!e.hitArea.contains(ts.x,ts.y))){return!0}
if(e.effects&&e.effects.length){for(let i=0;i<e.effects.length;i++){let s=e.effects[i];if(s.containsPoint&&!s.containsPoint(t,this.hitTestFn)){return!0}}}
return!1}
hitTestFn(e,t){return e.hitArea?!0:e!=null&&e.containsPoint?(e.worldTransform.applyInverse(t,ts),e.containsPoint(ts)):!1}
notifyTarget(e,t){var i;var s;if(!e.currentTarget.isInteractive()){return}
if(!(t!=null)){t=e.type}
if(!((s=(i=e.currentTarget)[`on${t}`])==null)){s.call(i,e)}
let n=e.eventPhase===e.CAPTURING_PHASE||e.eventPhase===e.AT_TARGET?`${t}capture`:t;this._notifyListeners(e,n);if(e.eventPhase===e.AT_TARGET){this._notifyListeners(e,t)}}
mapPointerDown(e){if(!(e instanceof gt)){return}
let t=this.createPointerEvent(e);this.dispatchEvent(t,"pointerdown");if(t.pointerType==="touch"){this.dispatchEvent(t,"touchstart")}else if(t.pointerType==="mouse"||t.pointerType==="pen"){let s=t.button===2;this.dispatchEvent(t,s?"rightdown":"mousedown")}
let i=this.trackingData(e.pointerId);i.pressTargetsByButton[e.button]=t.composedPath();this.freeEvent(t)}
mapPointerMove(e){var t;var i;var s;if(!(e instanceof gt)){return}
this._allInteractiveElements.length=0;this._hitElements.length=0;this._isPointerMoveEvent=!0;let r=this.createPointerEvent(e);this._isPointerMoveEvent=!1;let n=r.pointerType==="mouse"||r.pointerType==="pen";let d=this.trackingData(e.pointerId);let h=this.findMountedTarget(d.overTargets);if(((t=d.overTargets)==null?undefined:t.length)>0&&h!==r.target){let p=e.type==="mousemove"?"mouseout":"pointerout";let _=this.createPointerEvent(e,p,h);this.dispatchEvent(_,"pointerout");if(n){this.dispatchEvent(_,"mouseout")}
if(!r.composedPath().includes(h)){let m=this.createPointerEvent(e,"pointerleave",h);for(m.eventPhase=m.AT_TARGET;m.target&&!r.composedPath().includes(m.target);){m.currentTarget=m.target;this.notifyTarget(m);if(n){this.notifyTarget(m,"mouseleave")}
m.target=m.target.parent}
this.freeEvent(m)}
this.freeEvent(_)}
if(h!==r.target){let p=e.type==="mousemove"?"mouseover":"pointerover";let _=this.clonePointerEvent(r,p);this.dispatchEvent(_,"pointerover");if(n){this.dispatchEvent(_,"mouseover")}
let m=h?.parent;for(;m&&m!==this.rootTarget.parent&&m!==r.target;){m=m.parent}
if(!m||m===this.rootTarget.parent){let v=this.clonePointerEvent(r,"pointerenter");for(v.eventPhase=v.AT_TARGET;v.target&&v.target!==h&&v.target!==this.rootTarget.parent;){v.currentTarget=v.target;this.notifyTarget(v);if(n){this.notifyTarget(v,"mouseenter")}
v.target=v.target.parent}
this.freeEvent(v)}
this.freeEvent(_)}
let l=[];let f=(i=this.enableGlobalMoveEvents)!=null?i:!0;if(this.moveOnAll){l.push("pointermove")}else{this.dispatchEvent(r,"pointermove")}
if(f){l.push("globalpointermove")}
if(r.pointerType==="touch"){if(this.moveOnAll){l.splice(1,0,"touchmove")}else{this.dispatchEvent(r,"touchmove")}
if(f){l.push("globaltouchmove")}}
if(n){if(this.moveOnAll){l.splice(1,0,"mousemove")}else{this.dispatchEvent(r,"mousemove")}
if(f){l.push("globalmousemove")}
this.cursor=(s=r.target)==null?undefined:s.cursor}
if(l.length>0){this.all(r,l)}
this._allInteractiveElements.length=0;this._hitElements.length=0;d.overTargets=r.composedPath();this.freeEvent(r)}
mapPointerOver(e){var t;if(!(e instanceof gt)){return}
let i=this.trackingData(e.pointerId);let s=this.createPointerEvent(e);let r=s.pointerType==="mouse"||s.pointerType==="pen";this.dispatchEvent(s,"pointerover");if(r){this.dispatchEvent(s,"mouseover")}
if(s.pointerType==="mouse"){this.cursor=(t=s.target)==null?undefined:t.cursor}
let n=this.clonePointerEvent(s,"pointerenter");for(n.eventPhase=n.AT_TARGET;n.target&&n.target!==this.rootTarget.parent;){n.currentTarget=n.target;this.notifyTarget(n);if(r){this.notifyTarget(n,"mouseenter")}
n.target=n.target.parent}
i.overTargets=s.composedPath();this.freeEvent(s);this.freeEvent(n)}
mapPointerOut(e){if(!(e instanceof gt)){return}
let t=this.trackingData(e.pointerId);if(t.overTargets){let i=e.pointerType==="mouse"||e.pointerType==="pen";let s=this.findMountedTarget(t.overTargets);let r=this.createPointerEvent(e,"pointerout",s);this.dispatchEvent(r);if(i){this.dispatchEvent(r,"mouseout")}
let n=this.createPointerEvent(e,"pointerleave",s);for(n.eventPhase=n.AT_TARGET;n.target&&n.target!==this.rootTarget.parent;){n.currentTarget=n.target;this.notifyTarget(n);if(i){this.notifyTarget(n,"mouseleave")}
n.target=n.target.parent}
t.overTargets=null;this.freeEvent(r);this.freeEvent(n)}
this.cursor=null}
mapPointerUp(e){if(!(e instanceof gt)){return}
let t=performance.now();let i=this.createPointerEvent(e);this.dispatchEvent(i,"pointerup");if(i.pointerType==="touch"){this.dispatchEvent(i,"touchend")}else if(i.pointerType==="mouse"||i.pointerType==="pen"){let d=i.button===2;this.dispatchEvent(i,d?"rightup":"mouseup")}
let s=this.trackingData(e.pointerId);let r=this.findMountedTarget(s.pressTargetsByButton[e.button]);let n=r;if(r&&!i.composedPath().includes(r)){let d=r;for(;d&&!i.composedPath().includes(d);){i.currentTarget=d;this.notifyTarget(i,"pointerupoutside");if(i.pointerType==="touch"){this.notifyTarget(i,"touchendoutside")}else if(i.pointerType==="mouse"||i.pointerType==="pen"){let h=i.button===2;this.notifyTarget(i,h?"rightupoutside":"mouseupoutside")}
d=d.parent}
delete s.pressTargetsByButton[e.button];n=d}
if(n){let d=this.clonePointerEvent(i,"click");d.target=n;d.path=null;if(!s.clicksByButton[e.button]){s.clicksByButton[e.button]={clickCount:0,target:d.target,timeStamp:t}}
let h=s.clicksByButton[e.button];if(h.target===d.target&&t-h.timeStamp<200){++h.clickCount}else{h.clickCount=1}
h.target=d.target;h.timeStamp=t;d.detail=h.clickCount;if(d.pointerType==="mouse"){let l=d.button===2;this.dispatchEvent(d,l?"rightclick":"click")}else if(d.pointerType==="touch"){this.dispatchEvent(d,"tap")}
this.dispatchEvent(d,"pointertap");this.freeEvent(d)}
this.freeEvent(i)}
mapPointerUpOutside(e){if(!(e instanceof gt)){return}
let t=this.trackingData(e.pointerId);let i=this.findMountedTarget(t.pressTargetsByButton[e.button]);let s=this.createPointerEvent(e);if(i){let r=i;for(;r;){s.currentTarget=r;this.notifyTarget(s,"pointerupoutside");if(s.pointerType==="touch"){this.notifyTarget(s,"touchendoutside")}else if(s.pointerType==="mouse"||s.pointerType==="pen"){this.notifyTarget(s,s.button===2?"rightupoutside":"mouseupoutside")}
r=r.parent}
delete t.pressTargetsByButton[e.button]}
this.freeEvent(s)}
mapWheel(e){if(!(e instanceof Pa)){return}
let t=this.createWheelEvent(e);this.dispatchEvent(t);this.freeEvent(t)}
findMountedTarget(e){if(!e){return null}
let t=e[0];for(let i=1;i<e.length&&e[i].parent===t;i++){t=e[i]}
return t}
createPointerEvent(e,t,i){var s;let r=this.allocateEvent(gt);this.copyPointerData(e,r);this.copyMouseData(e,r);this.copyData(e,r);r.nativeEvent=e.nativeEvent;r.originalEvent=e;r.target=(s=i??this.hitTest(r.global.x,r.global.y))!=null?s:this._hitElements[0];if(typeof t=="string"){r.type=t}
return r}
createWheelEvent(e){let t=this.allocateEvent(Pa);this.copyWheelData(e,t);this.copyMouseData(e,t);this.copyData(e,t);t.nativeEvent=e.nativeEvent;t.originalEvent=e;t.target=this.hitTest(t.global.x,t.global.y);return t}
clonePointerEvent(e,t){let i=this.allocateEvent(gt);i.nativeEvent=e.nativeEvent;i.originalEvent=e.originalEvent;this.copyPointerData(e,i);this.copyMouseData(e,i);this.copyData(e,i);i.target=e.target;i.path=e.composedPath().slice();i.type=t??i.type;return i}
copyWheelData(e,t){t.deltaMode=e.deltaMode;t.deltaX=e.deltaX;t.deltaY=e.deltaY;t.deltaZ=e.deltaZ}
copyPointerData(e,t){if(e instanceof gt&&t instanceof gt){t.pointerId=e.pointerId;t.width=e.width;t.height=e.height;t.isPrimary=e.isPrimary;t.pointerType=e.pointerType;t.pressure=e.pressure;t.tangentialPressure=e.tangentialPressure;t.tiltX=e.tiltX;t.tiltY=e.tiltY;t.twist=e.twist}}
copyMouseData(e,t){if(e instanceof Ai&&t instanceof Ai){t.altKey=e.altKey;t.button=e.button;t.buttons=e.buttons;t.client.copyFrom(e.client);t.ctrlKey=e.ctrlKey;t.metaKey=e.metaKey;t.movement.copyFrom(e.movement);t.screen.copyFrom(e.screen);t.shiftKey=e.shiftKey;t.global.copyFrom(e.global)}}
copyData(e,t){t.isTrusted=e.isTrusted;t.srcElement=e.srcElement;t.timeStamp=performance.now();t.type=e.type;t.detail=e.detail;t.view=e.view;t.which=e.which;t.layer.copyFrom(e.layer);t.page.copyFrom(e.page)}
trackingData(e){if(!this.mappingState.trackingData[e]){this.mappingState.trackingData[e]={pressTargetsByButton:{},clicksByButton:{},overTarget:null}}
return this.mappingState.trackingData[e]}
allocateEvent(e){if(!this.eventPool.has(e)){this.eventPool.set(e,[])}
let t=this.eventPool.get(e).pop()||new e(this);t.eventPhase=t.NONE;t.currentTarget=null;t.defaultPrevented=!1;t.path=null;t.target=null;return t}
freeEvent(e){if(e.manager!==this){throw new Error("It is illegal to free an event not managed by this EventBoundary!")}
let t=e.constructor;if(!this.eventPool.has(t)){this.eventPool.set(t,[])}
this.eventPool.get(t).push(e)}
_notifyListeners(e,t){let i=e.currentTarget._events[t];if(i){if("fn" in i){if(i.once){e.currentTarget.removeListener(t,i.fn,undefined,!0)}
i.fn.call(i.context,e)}else{let s=0;for(let r=i.length;s<r&&!e.propagationImmediatelyStopped;s++){if(i[s].once){e.currentTarget.removeListener(t,i[s].fn,undefined,!0)}
i[s].fn.call(i[s].context,e)}}}}};var J4=Object.defineProperty;var Af=Object.getOwnPropertySymbols;var e8=Object.prototype.hasOwnProperty;var t8=Object.prototype.propertyIsEnumerable;var Ef=(a,e,t)=>e in a?J4(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var a8=(a,e)=>{for(var t in e||(e={}))if(e8.call(e,t)){Ef(a,t,e[t])}
if(Af){for(var t of Af(e))if(t8.call(e,t)){Ef(a,t,e[t])}}
return a};var s8={touchstart:"pointerdown",touchend:"pointerup",touchendoutside:"pointerupoutside",touchmove:"pointermove",touchcancel:"pointercancel"};var Gd=class Bd{constructor(e){this.supportsTouchEvents="ontouchstart" in globalThis;this.supportsPointerEvents=!!globalThis.PointerEvent;this.domElement=null;this.resolution=1;this.renderer=e;this.rootBoundary=new Id(null);Aa.init(this);this.autoPreventDefault=!0;this._eventsAdded=!1;this._rootPointerEvent=new gt(null);this._rootWheelEvent=new Pa(null);this.cursorStyles={default:"inherit",pointer:"pointer"};this.features=new Proxy(a8({},Bd.defaultEventFeatures),{set:(t,i,s)=>(i==="globalMove"&&(this.rootBoundary.enableGlobalMoveEvents=s),t[i]=s,!0)});this._onPointerDown=this._onPointerDown.bind(this);this._onPointerMove=this._onPointerMove.bind(this);this._onPointerUp=this._onPointerUp.bind(this);this._onPointerOverOut=this._onPointerOverOut.bind(this);this.onWheel=this.onWheel.bind(this)}
static get defaultEventMode(){return this._defaultEventMode}
init(e){var t;var i;let{canvas:s,resolution:r}=this.renderer;this.setTargetElement(s);this.resolution=r;Bd._defaultEventMode=(t=e.eventMode)!=null?t:"passive";Object.assign(this.features,(i=e.eventFeatures)!=null?i:{});this.rootBoundary.enableGlobalMoveEvents=this.features.globalMove}
resolutionChange(e){this.resolution=e}
destroy(){this.setTargetElement(null);this.renderer=null;this._currentCursor=null}
setCursor(e){if(!e){e="default"}
let t=!0;if(globalThis.OffscreenCanvas&&this.domElement instanceof OffscreenCanvas){t=!1}
if(this._currentCursor===e){return}
this._currentCursor=e;let i=this.cursorStyles[e];if(i){switch(typeof i){case "string":if(t){this.domElement.style.cursor=i}
break;case "function":i(e);break;case "object":if(t){Object.assign(this.domElement.style,i)}
break}}else if(t&&typeof e=="string"&&!Object.prototype.hasOwnProperty.call(this.cursorStyles,e)){this.domElement.style.cursor=e}}
get pointer(){return this._rootPointerEvent}
_onPointerDown(e){if(!this.features.click){return}
this.rootBoundary.rootTarget=this.renderer.lastObjectRendered;let t=this._normalizeToPointerData(e);if(this.autoPreventDefault&&t[0].isNormalized&&(e.cancelable||!("cancelable" in e))){e.preventDefault()}
let i=0;for(let s=t.length;i<s;i++){let r=t[i];let n=this._bootstrapEvent(this._rootPointerEvent,r);this.rootBoundary.mapEvent(n)}
this.setCursor(this.rootBoundary.cursor)}
_onPointerMove(e){if(!this.features.move){return}
this.rootBoundary.rootTarget=this.renderer.lastObjectRendered;Aa.pointerMoved();let t=this._normalizeToPointerData(e);let i=0;for(let s=t.length;i<s;i++){let r=this._bootstrapEvent(this._rootPointerEvent,t[i]);this.rootBoundary.mapEvent(r)}
this.setCursor(this.rootBoundary.cursor)}
_onPointerUp(e){if(!this.features.click){return}
this.rootBoundary.rootTarget=this.renderer.lastObjectRendered;let t=e.target;if(e.composedPath&&e.composedPath().length>0){t=e.composedPath()[0]}
let i=t!==this.domElement?"outside":"";let s=this._normalizeToPointerData(e);let r=0;for(let n=s.length;r<n;r++){let d=this._bootstrapEvent(this._rootPointerEvent,s[r]);d.type+=i;this.rootBoundary.mapEvent(d)}
this.setCursor(this.rootBoundary.cursor)}
_onPointerOverOut(e){if(!this.features.click){return}
this.rootBoundary.rootTarget=this.renderer.lastObjectRendered;let t=this._normalizeToPointerData(e);let i=0;for(let s=t.length;i<s;i++){let r=this._bootstrapEvent(this._rootPointerEvent,t[i]);this.rootBoundary.mapEvent(r)}
this.setCursor(this.rootBoundary.cursor)}
onWheel(e){if(!this.features.wheel){return}
let t=this.normalizeWheelEvent(e);this.rootBoundary.rootTarget=this.renderer.lastObjectRendered;this.rootBoundary.mapEvent(t)}
setTargetElement(e){this._removeEvents();this.domElement=e;Aa.domElement=e;this._addEvents()}
_addEvents(){if(this._eventsAdded||!this.domElement){return}
Aa.addTickerListener();let e=this.domElement.style;if(e){if(globalThis.navigator.msPointerEnabled){e.msContentZooming="none";e.msTouchAction="none"}else if(this.supportsPointerEvents){e.touchAction="none"}}
if(this.supportsPointerEvents){globalThis.document.addEventListener("pointermove",this._onPointerMove,!0);this.domElement.addEventListener("pointerdown",this._onPointerDown,!0);this.domElement.addEventListener("pointerleave",this._onPointerOverOut,!0);this.domElement.addEventListener("pointerover",this._onPointerOverOut,!0);globalThis.addEventListener("pointerup",this._onPointerUp,!0)}else{globalThis.document.addEventListener("mousemove",this._onPointerMove,!0);this.domElement.addEventListener("mousedown",this._onPointerDown,!0);this.domElement.addEventListener("mouseout",this._onPointerOverOut,!0);this.domElement.addEventListener("mouseover",this._onPointerOverOut,!0);globalThis.addEventListener("mouseup",this._onPointerUp,!0);if(this.supportsTouchEvents){this.domElement.addEventListener("touchstart",this._onPointerDown,!0);this.domElement.addEventListener("touchend",this._onPointerUp,!0);this.domElement.addEventListener("touchmove",this._onPointerMove,!0)}}
this.domElement.addEventListener("wheel",this.onWheel,{passive:!0,capture:!0});this._eventsAdded=!0}
_removeEvents(){if(!this._eventsAdded||!this.domElement){return}
Aa.removeTickerListener();let e=this.domElement.style;if(e){if(globalThis.navigator.msPointerEnabled){e.msContentZooming="";e.msTouchAction=""}else if(this.supportsPointerEvents){e.touchAction=""}}
if(this.supportsPointerEvents){globalThis.document.removeEventListener("pointermove",this._onPointerMove,!0);this.domElement.removeEventListener("pointerdown",this._onPointerDown,!0);this.domElement.removeEventListener("pointerleave",this._onPointerOverOut,!0);this.domElement.removeEventListener("pointerover",this._onPointerOverOut,!0);globalThis.removeEventListener("pointerup",this._onPointerUp,!0)}else{globalThis.document.removeEventListener("mousemove",this._onPointerMove,!0);this.domElement.removeEventListener("mousedown",this._onPointerDown,!0);this.domElement.removeEventListener("mouseout",this._onPointerOverOut,!0);this.domElement.removeEventListener("mouseover",this._onPointerOverOut,!0);globalThis.removeEventListener("mouseup",this._onPointerUp,!0);if(this.supportsTouchEvents){this.domElement.removeEventListener("touchstart",this._onPointerDown,!0);this.domElement.removeEventListener("touchend",this._onPointerUp,!0);this.domElement.removeEventListener("touchmove",this._onPointerMove,!0)}}
this.domElement.removeEventListener("wheel",this.onWheel,!0);this.domElement=null;this._eventsAdded=!1}
mapPositionToPoint(e,t,i){let s=this.domElement.isConnected?this.domElement.getBoundingClientRect():{x:0,y:0,width:this.domElement.width,height:this.domElement.height,left:0,top:0};let r=1/this.resolution;e.x=(t-s.left)*(this.domElement.width/s.width)*r;e.y=(i-s.top)*(this.domElement.height/s.height)*r}
_normalizeToPointerData(e){let t=[];if(this.supportsTouchEvents&&e instanceof TouchEvent){let i=0;for(let s=e.changedTouches.length;i<s;i++){let r=e.changedTouches[i];if(typeof r.button>"u"){r.button=0}
if(typeof r.buttons>"u"){r.buttons=1}
if(typeof r.isPrimary>"u"){r.isPrimary=e.touches.length===1&&e.type==="touchstart"}
if(typeof r.width>"u"){r.width=r.radiusX||1}
if(typeof r.height>"u"){r.height=r.radiusY||1}
if(typeof r.tiltX>"u"){r.tiltX=0}
if(typeof r.tiltY>"u"){r.tiltY=0}
if(typeof r.pointerType>"u"){r.pointerType="touch"}
if(typeof r.pointerId>"u"){r.pointerId=r.identifier||0}
if(typeof r.pressure>"u"){r.pressure=r.force||.5}
if(typeof r.twist>"u"){r.twist=0}
if(typeof r.tangentialPressure>"u"){r.tangentialPressure=0}
if(typeof r.layerX>"u"){r.layerX=r.offsetX=r.clientX}
if(typeof r.layerY>"u"){r.layerY=r.offsetY=r.clientY}
r.isNormalized=!0;r.type=e.type;t.push(r)}}else if(!globalThis.MouseEvent||e instanceof MouseEvent&&(!this.supportsPointerEvents||!(e instanceof globalThis.PointerEvent))){if(typeof e.isPrimary>"u"){e.isPrimary=!0}
if(typeof e.width>"u"){e.width=1}
if(typeof e.height>"u"){e.height=1}
if(typeof e.tiltX>"u"){e.tiltX=0}
if(typeof e.tiltY>"u"){e.tiltY=0}
if(typeof e.pointerType>"u"){e.pointerType="mouse"}
if(typeof e.pointerId>"u"){e.pointerId=1}
if(typeof e.pressure>"u"){e.pressure=.5}
if(typeof e.twist>"u"){e.twist=0}
if(typeof e.tangentialPressure>"u"){e.tangentialPressure=0}
e.isNormalized=!0;t.push(e)}else{t.push(e)}
return t}
normalizeWheelEvent(e){let t=this._rootWheelEvent;this._transferMouseData(t,e);t.deltaX=e.deltaX;t.deltaY=e.deltaY;t.deltaZ=e.deltaZ;t.deltaMode=e.deltaMode;this.mapPositionToPoint(t.screen,e.clientX,e.clientY);t.global.copyFrom(t.screen);t.offset.copyFrom(t.screen);t.nativeEvent=e;t.type=e.type;return t}
_bootstrapEvent(e,t){e.originalEvent=null;e.nativeEvent=t;e.pointerId=t.pointerId;e.width=t.width;e.height=t.height;e.isPrimary=t.isPrimary;e.pointerType=t.pointerType;e.pressure=t.pressure;e.tangentialPressure=t.tangentialPressure;e.tiltX=t.tiltX;e.tiltY=t.tiltY;e.twist=t.twist;this._transferMouseData(e,t);this.mapPositionToPoint(e.screen,t.clientX,t.clientY);e.global.copyFrom(e.screen);e.offset.copyFrom(e.screen);e.isTrusted=t.isTrusted;if(e.type==="pointerleave"){e.type="pointerout"}
if(e.type.startsWith("mouse")){e.type=e.type.replace("mouse","pointer")}
if(e.type.startsWith("touch")){e.type=s8[e.type]||e.type}
return e}
_transferMouseData(e,t){e.isTrusted=t.isTrusted;e.srcElement=t.srcElement;e.timeStamp=performance.now();e.type=t.type;e.altKey=t.altKey;e.button=t.button;e.buttons=t.buttons;e.client.x=t.clientX;e.client.y=t.clientY;e.ctrlKey=t.ctrlKey;e.metaKey=t.metaKey;e.movement.x=t.movementX;e.movement.y=t.movementY;e.page.x=t.pageX;e.page.y=t.pageY;e.relatedTarget=null;e.shiftKey=t.shiftKey}};Gd.extension={name:"events",type:[I.WebGLSystem,I.CanvasSystem,I.WebGPUSystem],priority:-1};Gd.defaultEventFeatures={move:!0,globalMove:!0,click:!0,wheel:!0};var r8={onclick:null,onmousedown:null,onmouseenter:null,onmouseleave:null,onmousemove:null,onglobalmousemove:null,onmouseout:null,onmouseover:null,onmouseup:null,onmouseupoutside:null,onpointercancel:null,onpointerdown:null,onpointerenter:null,onpointerleave:null,onpointermove:null,onglobalpointermove:null,onpointerout:null,onpointerover:null,onpointertap:null,onpointerup:null,onpointerupoutside:null,onrightclick:null,onrightdown:null,onrightup:null,onrightupoutside:null,ontap:null,ontouchcancel:null,ontouchend:null,ontouchendoutside:null,ontouchmove:null,onglobaltouchmove:null,ontouchstart:null,onwheel:null,get interactive(){return this.eventMode==="dynamic"||this.eventMode==="static"},set interactive(a){this.eventMode=a?"static":"passive"},_internalEventMode:undefined,get eventMode(){var a;return(a=this._internalEventMode)!=null?a:Gd.defaultEventMode},set eventMode(a){this._internalEventMode=a},isInteractive(){return this.eventMode==="static"||this.eventMode==="dynamic"},interactiveChildren:!0,hitArea:null,addEventListener(a,e,t){let i=typeof t=="boolean"&&t||typeof t=="object"&&t.capture;let s=typeof t=="object"?t.signal:undefined;let r=typeof t=="object"?t.once===!0:!1;let n=typeof e=="function"?undefined:e;a=i?`${a}capture`:a;let d=typeof e=="function"?e:e.handleEvent;let h=this;if(s){s.addEventListener("abort",()=>{h.off(a,d,n)})}
if(r){h.once(a,d,n)}else{h.on(a,d,n)}},removeEventListener(a,e,t){let i=typeof t=="boolean"&&t||typeof t=="object"&&t.capture;let s=typeof e=="function"?undefined:e;a=i?`${a}capture`:a;e=typeof e=="function"?e:e.handleEvent;this.off(a,e,s)},dispatchEvent(a){if(!(a instanceof Rs)){throw new Error("Container cannot propagate events outside of the Federated Events API")}
a.defaultPrevented=!1;a.path=null;a.target=this;a.manager.dispatchEvent(a);return!a.defaultPrevented}};fe.add(Gd);de.mixin(r8);var Mt=(a=>(a[a.Low=0]="Low",a[a.Normal=1]="Normal",a[a.High=2]="High",a))(Mt||{});var n8={createCanvas:(a,e)=>{let t=document.createElement("canvas");t.width=a;t.height=e;return t},getCanvasRenderingContext2D:()=>CanvasRenderingContext2D,getWebGLRenderingContext:()=>WebGLRenderingContext,getNavigator:()=>navigator,getBaseUrl:()=>{var a;return(a=document.baseURI)!=null?a:window.location.href},getFontFaceSet:()=>document.fonts,fetch:(a,e)=>fetch(a,e),parseXML:a=>new DOMParser().parseFromString(a,"text/xml")};function Nt(a){if(typeof a!="string"){throw new TypeError(`Path must be a string. Received ${JSON.stringify(a)}`)}}
function d8(a,e){let t="";let i=0;let s=-1;let r=0;let n=-1;for(let d=0;d<=a.length;++d){if(d<a.length){n=a.charCodeAt(d)}else{if(n===47){break}
n=47}
if(n===47){if(!(s===d-1||r===1)){if(s!==d-1&&r===2){if(t.length<2||i!==2||t.charCodeAt(t.length-1)!==46||t.charCodeAt(t.length-2)!==46){if(t.length>2){let h=t.lastIndexOf("/");if(h!==t.length-1){if(h===-1){t="";i=0}else{t=t.slice(0,h);i=t.length-1-t.lastIndexOf("/")}
s=d;r=0;continue}}else if(t.length===2||t.length===1){t="";i=0;s=d;r=0;continue}}
if(e){if(t.length>0){t+="/.."}else{t=".."}
i=2}}else{if(t.length>0){t+=`/${a.slice(s + 1, d)}`}else{t=a.slice(s+1,d)}
i=d-s-1}}
s=d;r=0}else if(n===46&&r!==-1){++r}else{r=-1}}
return t}
var _t={toPosix(a){return a.replace(new RegExp("\\".replace(/[.*+?^${}()|[\]\\]/g,"\\$&"),"g"),"/")},isUrl(a){return/^https?:/.test(this.toPosix(a))},isDataUrl(a){return/^data:([a-z]+\/[a-z0-9-+.]+(;[a-z0-9-.!#$%*+.{}|~`]+=[a-z0-9-.!#$%*+.{}()_|~`]+)*)?(;base64)?,([a-z0-9!$&',()*+;=\-._~:@\/?%\s<>]*?)$/i.test(a)},isBlobUrl(a){return a.startsWith("blob:")},hasProtocol(a){return/^[^/:]+:/.test(this.toPosix(a))},getProtocol(a){Nt(a);a=this.toPosix(a);let e=/^file:\/\/\//.exec(a);if(e){return e[0]}
let t=/^[^/:]+:\/{0,2}/.exec(a);return t?t[0]:""},toAbsolute(a,e,t){Nt(a);if(this.isDataUrl(a)||this.isBlobUrl(a)){return a}
let i=this.toPosix(e??n8.getBaseUrl()).split("?")[0].split("#")[0];let s=this.toPosix(t??this.rootname(i)).split("?")[0].split("#")[0];a=this.toPosix(a);return a.startsWith("/")?_t.join(s,a.slice(1)):this.isAbsolute(a)?a:this.join(i,a)},normalize(a){Nt(a);if(a.length===0){return"."}
if(this.isDataUrl(a)||this.isBlobUrl(a)){return a}
a=this.toPosix(a);let e="";let t=a.startsWith("/");if(this.hasProtocol(a)){e=this.rootname(a);a=a.slice(e.length)}
let i=a.endsWith("/");a=d8(a,!1);if(a.length>0&&i){a+="/"}
return t?`/${a}`:e+a},isAbsolute(a){Nt(a);a=this.toPosix(a);return this.hasProtocol(a)?!0:a.startsWith("/")},join(...a){var e;if(a.length===0){return"."}
let t;for(let i=0;i<a.length;++i){let s=a[i];Nt(s);if(s.length>0){if(t===undefined){t=s}else{let r=(e=a[i-1])!=null?e:"";if(this.joinExtensions.includes(this.extname(r).toLowerCase())){t+=`/../${s}`}else{t+=`/${s}`}}}}
return t===undefined?".":this.normalize(t)},dirname(a){Nt(a);if(a.length===0){return"."}
a=this.toPosix(a);let e=a.charCodeAt(0);let t=e===47;let i=-1;let s=!0;let r=this.getProtocol(a);let n=a;a=a.slice(r.length);for(let d=a.length-1;d>=1;--d){e=a.charCodeAt(d);if(e===47){if(!s){i=d;break}}else{s=!1}}
return i===-1?t?"/":this.isUrl(n)?r+a:r:t&&i===1?"//":r+a.slice(0,i)},rootname(a){Nt(a);a=this.toPosix(a);let e="";if(a.startsWith("/")){e="/"}else{e=this.getProtocol(a)}
if(this.isUrl(a)){let t=a.indexOf("/",e.length);if(t!==-1){e=a.slice(0,t)}else{e=a}
if(!e.endsWith("/")){e+="/"}}
return e},basename(a,e){Nt(a);if(e){Nt(e)}
a=this.toPosix(a).split("?")[0].split("#")[0];let t=0;let i=-1;let s=!0;let r;if(e!==undefined&&e.length>0&&e.length<=a.length){if(e.length===a.length&&e===a){return""}
let n=e.length-1;let d=-1;for(r=a.length-1;r>=0;--r){let h=a.charCodeAt(r);if(h===47){if(!s){t=r+1;break}}else{if(d===-1){s=!1;d=r+1}
if(n>=0){if(h===e.charCodeAt(n)){if(--n===-1){i=r}}else{n=-1;i=d}}}}
if(t===i){i=d}else if(i===-1){i=a.length}
return a.slice(t,i)}
for(r=a.length-1;r>=0;--r){if(a.charCodeAt(r)===47){if(!s){t=r+1;break}}else if(i===-1){s=!1;i=r+1}}
return i===-1?"":a.slice(t,i)},extname(a){Nt(a);a=this.toPosix(a).split("?")[0].split("#")[0];let e=-1;let t=0;let i=-1;let s=!0;let r=0;for(let n=a.length-1;n>=0;--n){let d=a.charCodeAt(n);if(d===47){if(!s){t=n+1;break}
continue}
if(i===-1){s=!1;i=n+1}
if(d===46){if(e===-1){e=n}else if(r!==1){r=1}}else if(e!==-1){r=-1}}
return e===-1||i===-1||r===0||r===1&&e===i-1&&e===t+1?"":a.slice(e,i)},parse(a){Nt(a);let e={root:"",dir:"",base:"",ext:"",name:""};if(a.length===0){return e}
a=this.toPosix(a).split("?")[0].split("#")[0];let t=a.charCodeAt(0);let i=this.isAbsolute(a);let s;e.root=this.rootname(a);if(i||this.hasProtocol(a)){s=1}else{s=0}
let n=-1;let d=0;let h=-1;let l=!0;let f=a.length-1;let p=0;for(;f>=s;--f){t=a.charCodeAt(f);if(t===47){if(!l){d=f+1;break}
continue}
if(h===-1){l=!1;h=f+1}
if(t===46){if(n===-1){n=f}else if(p!==1){p=1}}else if(n!==-1){p=-1}}
if(n===-1||h===-1||p===0||p===1&&n===h-1&&n===d+1){if(h!==-1){if(d===0&&i){e.base=e.name=a.slice(1,h)}else{e.base=e.name=a.slice(d,h)}}}else{if(d===0&&i){e.name=a.slice(1,n);e.base=a.slice(1,h)}else{e.name=a.slice(d,n);e.base=a.slice(d,h)}
e.ext=a.slice(n,h)}
e.dir=this.dirname(a);return e},sep:"/",delimiter:":",joinExtensions:[".html"]};var Xt=(a,e,t=!1)=>(Array.isArray(a)||(a=[a]),e?a.map(i=>typeof i=="string"||t?e(i):i):a);function xp(a,e,t,i,s){let r=e[t];for(let n=0;n<r.length;n++){let d=r[n];if(t<e.length-1){xp(a.replace(i[t],d),e,t+1,i,s)}else{s.push(a.replace(i[t],d))}}}
function h8(a){let e=/\{(.*?)\}/g;let t=a.match(e);let i=[];if(t){let s=[];t.forEach(r=>{let n=r.substring(1,r.length-1).split(",");s.push(n)});xp(a,s,0,t,i)}else{i.push(a)}
return i}
var l8=Object.defineProperty;var u8=Object.defineProperties;var f8=Object.getOwnPropertyDescriptors;var Rf=Object.getOwnPropertySymbols;var b8=Object.prototype.hasOwnProperty;var p8=Object.prototype.propertyIsEnumerable;var Mf=(a,e,t)=>e in a?l8(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var hi=(a,e)=>{for(var t in e||(e={}))if(b8.call(e,t)){Mf(a,t,e[t])}
if(Rf){for(var t of Rf(e))if(p8.call(e,t)){Mf(a,t,e[t])}}
return a};var da=class{constructor(){this._defaultBundleIdentifierOptions={connector:"-",createBundleAssetId:(e,t)=>`${e}${this._bundleIdConnector}${t}`,extractAssetIdFromBundle:(e,t)=>t.replace(`${e}${this._bundleIdConnector}`,"")};this._bundleIdConnector=this._defaultBundleIdentifierOptions.connector;this._createBundleAssetId=this._defaultBundleIdentifierOptions.createBundleAssetId;this._extractAssetIdFromBundle=this._defaultBundleIdentifierOptions.extractAssetIdFromBundle;this._assetMap={};this._preferredOrder=[];this._parsers=[];this._resolverHash={};this._bundles={}}
setBundleIdentifier(e){var t;var i;var s;this._bundleIdConnector=(t=e.connector)!=null?t:this._bundleIdConnector;this._createBundleAssetId=(i=e.createBundleAssetId)!=null?i:this._createBundleAssetId;this._extractAssetIdFromBundle=(s=e.extractAssetIdFromBundle)!=null?s:this._extractAssetIdFromBundle;if(this._extractAssetIdFromBundle("foo",this._createBundleAssetId("foo","bar"))!=="bar"){throw new Error("[Resolver] GenerateBundleAssetId are not working correctly")}}
prefer(...e){e.forEach(t=>{this._preferredOrder.push(t);if(!t.priority){t.priority=Object.keys(t.params)}});this._resolverHash={}}
set basePath(e){this._basePath=e}
get basePath(){return this._basePath}
set rootPath(e){this._rootPath=e}
get rootPath(){return this._rootPath}
get parsers(){return this._parsers}
reset(){this.setBundleIdentifier(this._defaultBundleIdentifierOptions);this._assetMap={};this._preferredOrder=[];this._resolverHash={};this._rootPath=null;this._basePath=null;this._manifest=null;this._bundles={};this._defaultSearchParams=null}
setDefaultSearchParams(e){if(typeof e=="string"){this._defaultSearchParams=e}else{this._defaultSearchParams=Object.keys(e).map(i=>`${encodeURIComponent(i)}=${encodeURIComponent(e[i])}`).join("&")}}
getAlias(e){let{alias:t,src:i}=e;return Xt(t||i,s=>typeof s=="string"?s:Array.isArray(s)?s.map(r=>{var n;return(n=r?.src)!=null?n:r}):s!=null&&s.src?s.src:s,!0)}
addManifest(e){this._manifest;this._manifest=e;e.bundles.forEach(t=>{this.addBundle(t.name,t.assets)})}
addBundle(e,t){let i=[];let s=t;if(!Array.isArray(t)){s=Object.entries(t).map(([r,n])=>typeof n=="string"||Array.isArray(n)?{alias:r,src:n}:hi({alias:r},n))}
s.forEach(r=>{let n=r.src;let d=r.alias;let h;if(typeof d=="string"){let l=this._createBundleAssetId(e,d);i.push(l);h=[d,l]}else{let l=d.map(f=>this._createBundleAssetId(e,f));i.push(...l);h=[...d,...l]}
this.add(u8(hi({},r),f8({alias:h,src:n})))});this._bundles[e]=i}
add(e){let t=[];if(Array.isArray(e)){t.push(...e)}else{t.push(e)}
Xt(t).forEach(s=>{let{src:r}=s;let{data:n,format:d,loadParser:h}=s;let l=Xt(r).map(_=>typeof _=="string"?h8(_):Array.isArray(_)?_:[_]);let f=this.getAlias(s);let p=[];l.forEach(_=>{_.forEach(m=>{var v;var T;var w;let P={};if(typeof m!="object"){P.src=m;for(let C=0;C<this._parsers.length;C++){let B=this._parsers[C];if(B.test(m)){P=B.parse(m);break}}}else{n=(v=m.data)!=null?v:n;d=(T=m.format)!=null?T:d;h=(w=m.loadParser)!=null?w:h;P=hi(hi({},P),m)}
if(!f){throw new Error(`[Resolver] alias is undefined for this asset: ${P.src}`)}
P=this._buildResolvedAsset(P,{aliases:f,data:n,format:d,loadParser:h});p.push(P)})});f.forEach(_=>{this._assetMap[_]=p})})}
resolveBundle(e){let t=!Array.isArray(e);e=Xt(e);let i={};e.forEach(s=>{let r=this._bundles[s];if(r){let n=this.resolve(r);let d={};for(let h in n){let l=n[h];d[this._extractAssetIdFromBundle(s,h)]=l}
i[s]=d}});return t?i[e[0]]:i}
resolveUrl(e){let t=this.resolve(e);if(typeof e!="string"){let i={};for(let s in t)i[s]=t[s].src;return i}
return t.src}
resolve(e){let t=!Array.isArray(e);e=Xt(e);let i={};e.forEach(s=>{if(!this._resolverHash[s]){if(this._assetMap[s]){let r=this._assetMap[s];let n=this._getPreferredOrder(r);n?.priority.forEach(d=>{n.params[d].forEach(h=>{let l=r.filter(f=>f[d]?f[d]===h:!1);if(l.length){r=l}})});this._resolverHash[s]=r[0]}else{this._resolverHash[s]=this._buildResolvedAsset({alias:[s],src:s},{})}}
i[s]=this._resolverHash[s]});return t?i[e[0]]:i}
hasKey(e){return!!this._assetMap[e]}
hasBundle(e){return!!this._bundles[e]}
_getPreferredOrder(e){for(let t=0;t<e.length;t++){let i=e[t];let s=this._preferredOrder.find(r=>r.params.format.includes(i.format));if(s){return s}}
return this._preferredOrder[0]}
_appendDefaultSearchParams(e){if(!this._defaultSearchParams){return e}
let t=/\?/.test(e)?"&":"?";return `${e}${t}${this._defaultSearchParams}`}
_buildResolvedAsset(e,t){var i;var s;let{aliases:r,data:n,loadParser:d,format:h}=t;if(this._basePath||this._rootPath){e.src=_t.toAbsolute(e.src,this._basePath,this._rootPath)}
e.alias=(i=r??e.alias)!=null?i:[e.src];e.src=this._appendDefaultSearchParams(e.src);e.data=hi(hi({},n||{}),e.data);e.loadParser=d??e.loadParser;e.format=(s=h??e.format)!=null?s:e.src.split(".").pop().split("?").shift().split("#").shift();return e}};da.RETINA_PREFIX=/@([0-9\.]+)x/;var Fd=(a,e)=>{let t=e.split("?")[1];if(t){a+=`?${t}`}
return a};var vp=class bs{constructor(e,t){this.linkedSheets=[];this._texture=e instanceof W?e:null;this.textureSource=e.source;this.textures={};this.animations={};this.data=t;let i=parseFloat(t.meta.scale);if(i){this.resolution=i;e.source.resolution=this.resolution}else{this.resolution=e.source._resolution}
this._frames=this.data.frames;this._frameKeys=Object.keys(this._frames);this._batchIndex=0;this._callback=null}
parse(){return new Promise(e=>{this._callback=e;this._batchIndex=0;if(this._frameKeys.length<=bs.BATCH_SIZE){this._processFrames(0);this._processAnimations();this._parseComplete()}else{this._nextBatch()}})}
_processFrames(e){let t=e;let i=bs.BATCH_SIZE;for(;t-e<i&&t<this._frameKeys.length;){let s=this._frameKeys[t];let r=this._frames[s];let n=r.frame;if(n){let d=null;let h=null;let l=r.trimmed!==!1&&r.sourceSize?r.sourceSize:r.frame;let f=new we(0,0,Math.floor(l.w)/this.resolution,Math.floor(l.h)/this.resolution);if(r.rotated){d=new we(Math.floor(n.x)/this.resolution,Math.floor(n.y)/this.resolution,Math.floor(n.h)/this.resolution,Math.floor(n.w)/this.resolution)}else{d=new we(Math.floor(n.x)/this.resolution,Math.floor(n.y)/this.resolution,Math.floor(n.w)/this.resolution,Math.floor(n.h)/this.resolution)}
if(r.trimmed!==!1&&r.spriteSourceSize){h=new we(Math.floor(r.spriteSourceSize.x)/this.resolution,Math.floor(r.spriteSourceSize.y)/this.resolution,Math.floor(n.w)/this.resolution,Math.floor(n.h)/this.resolution)}
this.textures[s]=new W({source:this.textureSource,frame:d,orig:f,trim:h,rotate:r.rotated?2:0,defaultAnchor:r.anchor,defaultBorders:r.borders,label:s.toString()})}
t++}}
_processAnimations(){let e=this.data.animations||{};for(let t in e){this.animations[t]=[];for(let i=0;i<e[t].length;i++){let s=e[t][i];this.animations[t].push(this.textures[s])}}}
_parseComplete(){let e=this._callback;this._callback=null;this._batchIndex=0;e.call(this,this.textures)}
_nextBatch(){this._processFrames(this._batchIndex*bs.BATCH_SIZE);this._batchIndex++;setTimeout(()=>{if(this._batchIndex*bs.BATCH_SIZE<this._frameKeys.length){this._nextBatch()}else{this._processAnimations();this._parseComplete()}},0)}
destroy(e=!1){var t;for(let i in this.textures)this.textures[i].destroy();this._frames=null;this._frameKeys=null;this.data=null;this.textures=null;if(e){if(!((t=this._texture)==null)){t.destroy()}
this.textureSource.destroy()}
this._texture=null;this.textureSource=null;this.linkedSheets=[]}};vp.BATCH_SIZE=1e3;var _8=["jpg","png","jpeg","avif","webp","basis","etc2","bc7","bc6h","bc5","bc4","bc3","bc2","bc1","eac","astc"];function Tp(a,e,t){let i={};a.forEach(s=>{i[s]=e});Object.keys(e.textures).forEach(s=>{i[s]=e.textures[s]});if(!t){let s=_t.dirname(a[0]);e.linkedSheets.forEach((r,n)=>{let d=Tp([`${s}/${e.data.meta.related_multi_packs[n]}`],r,!0);Object.assign(i,d)})}
return i}
var y8={extension:I.Asset,cache:{test:a=>a instanceof vp,getCacheableAssets:(a,e)=>Tp(a,e,!1)},resolver:{extension:{type:I.ResolveParser,name:"resolveSpritesheet"},test:a=>{let e=a.split("?")[0].split(".");let t=e.pop();let i=e.pop();return t==="json"&&_8.includes(i)},parse:a=>{var e;var t;let i=a.split(".");return{resolution:parseFloat((t=(e=da.RETINA_PREFIX.exec(a))==null?undefined:e[1])!=null?t:"1"),format:i[i.length-2],src:a}}},loader:{name:"spritesheetLoader",extension:{type:I.LoadParser,priority:Mt.Normal,name:"spritesheetLoader"},async testParse(a,e){return _t.extname(e.src).toLowerCase()===".json"&&!!a.frames},async parse(a,e,t){var i;var s;var r;let{texture:n,imageFilename:d,textureOptions:h}=(i=e?.data)!=null?i:{};let l=_t.dirname(e.src);if(l&&l.lastIndexOf("/")!==l.length-1){l+="/"}
let f;if(n instanceof W){f=n}else{let m=Fd(l+(d??a.meta.image),e.src);f=(await t.load([{src:m,data:h}]))[m]}
let p=new vp(f.source,a);await p.parse();let _=(s=a?.meta)==null?undefined:s.related_multi_packs;if(Array.isArray(_)){let m=[];for(let T of _){if(typeof T!="string"){continue}
let w=l+T;if(!((r=e.data)!=null&&r.ignoreMultiPack)){w=Fd(w,e.src);m.push(t.load({src:w,data:{ignoreMultiPack:!0}}))}}
let v=await Promise.all(m);p.linkedSheets=v;v.forEach(T=>{T.linkedSheets=[p].concat(p.linkedSheets.filter(w=>w!==T))})}
return p},async unload(a,e,t){await t.unload(a.textureSource._sourceOrigin);a.destroy(!1)}}};fe.add(y8);function Sp(a,e,t){let{width:i,height:s}=t.orig;let r=t.trim;if(r){let n=r.width;let d=r.height;a.minX=r.x-e._x*i;a.maxX=a.minX+n;a.minY=r.y-e._y*s;a.maxY=a.minY+d}else{a.minX=-e._x*i;a.maxX=a.minX+i;a.minY=-e._y*s;a.maxY=a.minY+s}}
var ha=class extends de{constructor(){super(...arguments);this.canBundle=!0;this.allowChildren=!1;this._roundPixels=0;this._lastUsed=-1;this._bounds=new Ze(0,1,0,0);this._boundsDirty=!0}
get bounds(){return this._boundsDirty?(this.updateBounds(),this._boundsDirty=!1,this._bounds):this._bounds}
get roundPixels(){return!!this._roundPixels}
set roundPixels(e){this._roundPixels=e?1:0}
containsPoint(e){let t=this.bounds;let{x:i,y:s}=e;return i>=t.minX&&i<=t.maxX&&s>=t.minY&&s<=t.maxY}
onViewUpdate(){this._didViewChangeTick++;this._boundsDirty=!0;if(this.didViewUpdate){return}
this.didViewUpdate=!0;let e=this.renderGroup||this.parentRenderGroup;if(e){e.onChildViewUpdate(this)}}
destroy(e){super.destroy(e);this._bounds=null}
collectRenderablesSimple(e,t,i){let{renderPipes:s,renderableGC:r}=t;s.blendMode.setBlendMode(this,this.groupBlendMode,e);s[this.renderPipeId].addRenderable(this,e);r.addRenderable(this);this.didViewUpdate=!1;let n=this.children;let d=n.length;for(let h=0;h<d;h++){n[h].collectRenderables(e,t,i)}}};var x8=Object.defineProperty;var Wr=Object.getOwnPropertySymbols;var wp=Object.prototype.hasOwnProperty;var Ap=Object.prototype.propertyIsEnumerable;var Of=(a,e,t)=>e in a?x8(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var v8=(a,e)=>{for(var t in e||(e={}))if(wp.call(e,t)){Of(a,t,e[t])}
if(Wr){for(var t of Wr(e))if(Ap.call(e,t)){Of(a,t,e[t])}}
return a};var T8=(a,e)=>{var t={};for(var i in a)if(wp.call(a,i)&&e.indexOf(i)<0){t[i]=a[i]}
if(a!=null&&Wr){for(var i of Wr(a))if(e.indexOf(i)<0&&Ap.call(a,i)){t[i]=a[i]}}
return t};var Ae=class a extends ha{constructor(e=W.EMPTY){if(e instanceof W){e={texture:e}}
let t=e;let{texture:i=W.EMPTY,anchor:s,roundPixels:r,width:n,height:d}=t;let h=T8(t,["texture","anchor","roundPixels","width","height"]);super(v8({label:"Sprite"},h));this.renderPipeId="sprite";this.batched=!0;this._visualBounds={minX:0,maxX:1,minY:0,maxY:0};this._anchor=new We({_onUpdate:()=>{this.onViewUpdate()}});if(s){this.anchor=s}else if(i.defaultAnchor){this.anchor=i.defaultAnchor}
this.texture=i;this.allowChildren=!1;this.roundPixels=r??!1;if(n!==undefined){this.width=n}
if(d!==undefined){this.height=d}}
static from(e,t=!1){return e instanceof W?new a(e):new a(W.from(e,t))}
set texture(e){if(!e){e=W.EMPTY}
let t=this._texture;if(t!==e){if(t&&t.dynamic){t.off("update",this.onViewUpdate,this)}
if(e.dynamic){e.on("update",this.onViewUpdate,this)}
this._texture=e;if(this._width){this._setWidth(this._width,this._texture.orig.width)}
if(this._height){this._setHeight(this._height,this._texture.orig.height)}
this.onViewUpdate()}}
get texture(){return this._texture}
get visualBounds(){Sp(this._visualBounds,this._anchor,this._texture);return this._visualBounds}
get sourceBounds(){return this.visualBounds}
updateBounds(){let e=this._anchor;let t=this._texture;let i=this._bounds;let{width:s,height:r}=t.orig;i.minX=-e._x*s;i.maxX=i.minX+s;i.minY=-e._y*r;i.maxY=i.minY+r}
destroy(e=!1){super.destroy(e);if(typeof e=="boolean"?e:e?.texture){let t=typeof e=="boolean"?e:e?.textureSource;this._texture.destroy(t)}
this._texture=null;this._visualBounds=null;this._bounds=null;this._anchor=null}
get anchor(){return this._anchor}
set anchor(e){if(typeof e=="number"){this._anchor.set(e)}else{this._anchor.copyFrom(e)}}
get width(){return Math.abs(this.scale.x)*this._texture.orig.width}
set width(e){this._setWidth(e,this._texture.orig.width);this._width=e}
get height(){return Math.abs(this.scale.y)*this._texture.orig.height}
set height(e){this._setHeight(e,this._texture.orig.height);this._height=e}
getSize(e){if(!e){e={}}
e.width=Math.abs(this.scale.x)*this._texture.orig.width;e.height=Math.abs(this.scale.y)*this._texture.orig.height;return e}
setSize(e,t){var i;if(typeof e=="object"){t=(i=e.height)!=null?i:e.width;e=e.width}else if(!(t!=null)){t=e}
if(e!==undefined){this._setWidth(e,this._texture.orig.width)}
if(t!==undefined){this._setHeight(t,this._texture.orig.height)}}};var S8=new Ze();function Ep(a,e,t){a.measurable=!0;Co(a,t,S8);e.addBoundsMask(S8);a.measurable=!1}
function Pp(a,e,t){let i=oa.get();a.measurable=!0;let s=it.get().identity();let r=Rp(a,t,s);fl(a,i,r);a.measurable=!1;e.addBoundsMask(i);it.return(s);oa.return(i)}
function Rp(a,e,t){if(a&&a!==e){Rp(a.parent,e,t);a.updateLocalTransform();t.append(a.localTransform)}
return t}
var Yr=class{constructor(e){this.priority=0;this.inverse=!1;this.pipe="alphaMask";if(e!=null&&e.mask){this.init(e.mask)}}
init(e){this.mask=e;this.renderMaskToTexture=!(e instanceof Ae);this.mask.renderable=this.renderMaskToTexture;this.mask.includeInBuild=!this.renderMaskToTexture;this.mask.measurable=!1}
reset(){this.mask.measurable=!0;this.mask=null}
addBounds(e,t){if(!this.inverse){Ep(this.mask,e,t)}}
addLocalBounds(e,t){Pp(this.mask,e,t)}
containsPoint(e,t){let i=this.mask;return t(i,e)}
destroy(){this.reset()}
static test(e){return e instanceof Ae}};Yr.extension=I.MaskEffect;var $r=class{constructor(e){this.priority=0;this.pipe="colorMask";if(e!=null&&e.mask){this.init(e.mask)}}
init(e){this.mask=e}
destroy(){}
static test(e){return typeof e=="number"}};$r.extension=I.MaskEffect;var Kr=class{constructor(e){this.priority=0;this.pipe="stencilMask";if(e!=null&&e.mask){this.init(e.mask)}}
init(e){this.mask=e;this.mask.includeInBuild=!1;this.mask.measurable=!1}
reset(){this.mask.measurable=!0;this.mask.includeInBuild=!0;this.mask=null}
addBounds(e,t){Ep(this.mask,e,t)}
addLocalBounds(e,t){Pp(this.mask,e,t)}
containsPoint(e,t){let i=this.mask;return t(i,e)}
destroy(){this.reset()}
static test(e){return e instanceof de}};Kr.extension=I.MaskEffect;var Kt=class extends bp{constructor(e){if(!e.resource){e.resource=n8.createCanvas()}
if(!e.width){e.width=e.resource.width;if(!e.autoDensity){e.width/=e.resolution}}
if(!e.height){e.height=e.resource.height;if(!e.autoDensity){e.height/=e.resolution}}
super(e);this.uploadMethodId="image";this.autoDensity=e.autoDensity;this.resizeCanvas();this.transparent=!!e.transparent}
resizeCanvas(){if(this.autoDensity){this.resource.style.width=`${this.width}px`;this.resource.style.height=`${this.height}px`}
if(this.resource.width!==this.pixelWidth||this.resource.height!==this.pixelHeight){this.resource.width=this.pixelWidth;this.resource.height=this.pixelHeight}}
resize(e=this.width,t=this.height,i=this._resolution){let s=super.resize(e,t,i);if(s){this.resizeCanvas()}
return s}
static test(e){return globalThis.HTMLCanvasElement&&e instanceof HTMLCanvasElement||globalThis.OffscreenCanvas&&e instanceof OffscreenCanvas}
get context2D(){return this._context2D||(this._context2D=this.resource.getContext("2d"))}};Kt.extension=I.TextureSource;var Ma=class extends bp{constructor(e){if(e.resource&&globalThis.HTMLImageElement&&e.resource instanceof HTMLImageElement){let t=n8.createCanvas(e.resource.width,e.resource.height);t.getContext("2d").drawImage(e.resource,0,0,e.resource.width,e.resource.height);e.resource=t}
super(e);this.uploadMethodId="image";this.autoGarbageCollect=!0}
static test(e){return globalThis.HTMLImageElement&&e instanceof HTMLImageElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap||globalThis.VideoFrame&&e instanceof VideoFrame}};Ma.extension=I.TextureSource;var Oc;async function Mp(){if(!(Oc!=null)){Oc=(async()=>{var a;let e=document.createElement("canvas").getContext("webgl");if(!e){return"premultiply-alpha-on-upload"}
let t=await new Promise(n=>{let d=document.createElement("video");d.onloadeddata=()=>n(d);d.onerror=()=>n(null);d.autoplay=!1;d.crossOrigin="anonymous";d.preload="auto";d.src="data:video/webm;base64,GkXfo59ChoEBQveBAULygQRC84EIQoKEd2VibUKHgQJChYECGFOAZwEAAAAAAAHTEU2bdLpNu4tTq4QVSalmU6yBoU27i1OrhBZUrmtTrIHGTbuMU6uEElTDZ1OsggEXTbuMU6uEHFO7a1OsggG97AEAAAAAAABZAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAVSalmoCrXsYMPQkBNgIRMYXZmV0GETGF2ZkSJiEBEAAAAAAAAFlSua8yuAQAAAAAAAEPXgQFzxYgAAAAAAAAAAZyBACK1nIN1bmSIgQCGhVZfVlA5g4EBI+ODhAJiWgDglLCBArqBApqBAlPAgQFVsIRVuYEBElTDZ9Vzc9JjwItjxYgAAAAAAAAAAWfInEWjh0VOQ09ERVJEh49MYXZjIGxpYnZweC12cDlnyKJFo4hEVVJBVElPTkSHlDAwOjAwOjAwLjA0MDAwMDAwMAAAH0O2dcfngQCgwqGggQAAAIJJg0IAABAAFgA4JBwYSgAAICAAEb///4r+AAB1oZ2mm+6BAaWWgkmDQgAAEAAWADgkHBhKAAAgIABIQBxTu2uRu4+zgQC3iveBAfGCAXHwgQM=";d.load()});if(!t){return"premultiply-alpha-on-upload"}
let i=e.createTexture();e.bindTexture(e.TEXTURE_2D,i);let s=e.createFramebuffer();e.bindFramebuffer(e.FRAMEBUFFER,s);e.framebufferTexture2D(e.FRAMEBUFFER,e.COLOR_ATTACHMENT0,e.TEXTURE_2D,i,0);e.pixelStorei(e.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1);e.pixelStorei(e.UNPACK_COLORSPACE_CONVERSION_WEBGL,e.NONE);e.texImage2D(e.TEXTURE_2D,0,e.RGBA,e.RGBA,e.UNSIGNED_BYTE,t);let r=new Uint8Array(4);e.readPixels(0,0,1,1,e.RGBA,e.UNSIGNED_BYTE,r);e.deleteFramebuffer(s);e.deleteTexture(i);if(!((a=e.getExtension("WEBGL_lose_context"))==null)){a.loseContext()}
return r[0]<=r[3]?"premultiplied-alpha":"premultiply-alpha-on-upload"})()}
return Oc}
var w8=Object.defineProperty;var A8=Object.defineProperties;var E8=Object.getOwnPropertyDescriptors;var If=Object.getOwnPropertySymbols;var P8=Object.prototype.hasOwnProperty;var R8=Object.prototype.propertyIsEnumerable;var Gf=(a,e,t)=>e in a?w8(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var Dd=(a,e)=>{for(var t in e||(e={}))if(P8.call(e,t)){Gf(a,t,e[t])}
if(If){for(var t of If(e))if(R8.call(e,t)){Gf(a,t,e[t])}}
return a};var Gr=class Cp extends bp{constructor(e){var t;super(e);this.isReady=!1;this.uploadMethodId="video";e=Dd(Dd({},Cp.defaultOptions),e);this._autoUpdate=!0;this._isConnectedToTicker=!1;this._updateFPS=e.updateFPS||0;this._msToNextUpdate=0;this.autoPlay=e.autoPlay!==!1;this.alphaMode=(t=e.alphaMode)!=null?t:"premultiply-alpha-on-upload";this._videoFrameRequestCallback=this._videoFrameRequestCallback.bind(this);this._videoFrameRequestCallbackHandle=null;this._load=null;this._resolve=null;this._reject=null;this._onCanPlay=this._onCanPlay.bind(this);this._onCanPlayThrough=this._onCanPlayThrough.bind(this);this._onError=this._onError.bind(this);this._onPlayStart=this._onPlayStart.bind(this);this._onPlayStop=this._onPlayStop.bind(this);this._onSeeked=this._onSeeked.bind(this);if(e.autoLoad!==!1){this.load()}}
updateFrame(){if(!this.destroyed){if(this._updateFPS){let e=_p.shared.elapsedMS*this.resource.playbackRate;this._msToNextUpdate=Math.floor(this._msToNextUpdate-e)}
if(!this._updateFPS||this._msToNextUpdate<=0){this._msToNextUpdate=this._updateFPS?Math.floor(1e3/this._updateFPS):0}
if(this.isValid){this.update()}}}
_videoFrameRequestCallback(){this.updateFrame();if(this.destroyed){this._videoFrameRequestCallbackHandle=null}else{this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback)}}
get isValid(){return!!this.resource.videoWidth&&!!this.resource.videoHeight}
async load(){if(this._load){return this._load}
let e=this.resource;let t=this.options;if((e.readyState===e.HAVE_ENOUGH_DATA||e.readyState===e.HAVE_FUTURE_DATA)&&e.width&&e.height){e.complete=!0}
e.addEventListener("play",this._onPlayStart);e.addEventListener("pause",this._onPlayStop);e.addEventListener("seeked",this._onSeeked);if(this._isSourceReady()){this._mediaReady()}else{if(!t.preload){e.addEventListener("canplay",this._onCanPlay)}
e.addEventListener("canplaythrough",this._onCanPlayThrough);e.addEventListener("error",this._onError,!0)}
this.alphaMode=await Mp();this._load=new Promise((i,s)=>{if(this.isValid){i(this)}else{this._resolve=i;this._reject=s;if(t.preloadTimeoutMs!==undefined){this._preloadTimeout=setTimeout(()=>{this._onError(new ErrorEvent(`Preload exceeded timeout of ${t.preloadTimeoutMs}ms`))})}
e.load()}});return this._load}
_onError(e){this.resource.removeEventListener("error",this._onError,!0);this.emit("error",e);if(this._reject){this._reject(e);this._reject=null;this._resolve=null}}
_isSourcePlaying(){let e=this.resource;return!e.paused&&!e.ended}
_isSourceReady(){return this.resource.readyState>2}
_onPlayStart(){if(!this.isValid){this._mediaReady()}
this._configureAutoUpdate()}
_onPlayStop(){this._configureAutoUpdate()}
_onSeeked(){if(this._autoUpdate&&!this._isSourcePlaying()){this._msToNextUpdate=0;this.updateFrame();this._msToNextUpdate=0}}
_onCanPlay(){this.resource.removeEventListener("canplay",this._onCanPlay);this._mediaReady()}
_onCanPlayThrough(){this.resource.removeEventListener("canplaythrough",this._onCanPlay);if(this._preloadTimeout){clearTimeout(this._preloadTimeout);this._preloadTimeout=undefined}
this._mediaReady()}
_mediaReady(){let e=this.resource;if(this.isValid){this.isReady=!0;this.resize(e.videoWidth,e.videoHeight)}
this._msToNextUpdate=0;this.updateFrame();this._msToNextUpdate=0;if(this._resolve){this._resolve(this);this._resolve=null;this._reject=null}
if(this._isSourcePlaying()){this._onPlayStart()}else if(this.autoPlay){this.resource.play()}}
destroy(){this._configureAutoUpdate();let e=this.resource;if(e){e.removeEventListener("play",this._onPlayStart);e.removeEventListener("pause",this._onPlayStop);e.removeEventListener("seeked",this._onSeeked);e.removeEventListener("canplay",this._onCanPlay);e.removeEventListener("canplaythrough",this._onCanPlayThrough);e.removeEventListener("error",this._onError,!0);e.pause();e.src="";e.load()}
super.destroy()}
get autoUpdate(){return this._autoUpdate}
set autoUpdate(e){if(e!==this._autoUpdate){this._autoUpdate=e;this._configureAutoUpdate()}}
get updateFPS(){return this._updateFPS}
set updateFPS(e){if(e!==this._updateFPS){this._updateFPS=e;this._configureAutoUpdate()}}
_configureAutoUpdate(){if(this._autoUpdate&&this._isSourcePlaying()){if(!this._updateFPS&&this.resource.requestVideoFrameCallback){if(this._isConnectedToTicker){_p.shared.remove(this.updateFrame,this);this._isConnectedToTicker=!1;this._msToNextUpdate=0}
if(this._videoFrameRequestCallbackHandle===null){this._videoFrameRequestCallbackHandle=this.resource.requestVideoFrameCallback(this._videoFrameRequestCallback)}}else{if(this._videoFrameRequestCallbackHandle!==null){this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle);this._videoFrameRequestCallbackHandle=null}
if(!this._isConnectedToTicker){_p.shared.add(this.updateFrame,this);this._isConnectedToTicker=!0;this._msToNextUpdate=0}}}else{if(this._videoFrameRequestCallbackHandle!==null){this.resource.cancelVideoFrameCallback(this._videoFrameRequestCallbackHandle);this._videoFrameRequestCallbackHandle=null}
if(this._isConnectedToTicker){_p.shared.remove(this.updateFrame,this);this._isConnectedToTicker=!1;this._msToNextUpdate=0}}}
static test(e){return globalThis.HTMLVideoElement&&e instanceof HTMLVideoElement}};Gr.extension=I.TextureSource;Gr.defaultOptions=A8(Dd({},bp.defaultOptions),E8({autoLoad:!0,autoPlay:!0,updateFPS:0,crossorigin:!0,loop:!1,muted:!0,playsinline:!0,preload:!1}));Gr.MIME_TYPES={ogv:"video/ogg",mov:"video/quicktime",m4v:"video/mp4"};var C8=class{constructor(){this._parsers=[];this._cache=new Map();this._cacheMap=new Map()}
reset(){this._cacheMap.clear();this._cache.clear()}
has(a){return this._cache.has(a)}
get(a){return this._cache.get(a)}
set(a,e){let t=Xt(a);let i;for(let d=0;d<this.parsers.length;d++){let h=this.parsers[d];if(h.test(e)){i=h.getCacheableAssets(t,e);break}}
let s=new Map(Object.entries(i||{}));if(!i){t.forEach(d=>{s.set(d,e)})}
let r=[...s.keys()];let n={cacheKeys:r,keys:t};t.forEach(d=>{this._cacheMap.set(d,n)});r.forEach(d=>{if(this._cache.has(d)){this._cache.get(d)}
this._cache.set(d,s.get(d))})}
remove(a){if(!this._cacheMap.has(a)){return}
let e=this._cacheMap.get(a);e.cacheKeys.forEach(t=>{this._cache.delete(t)});e.keys.forEach(t=>{this._cacheMap.delete(t)})}
get parsers(){return this._parsers}};var Me=new C8();var kd=[];fe.handleByList(I.TextureSource,kd);function Op(a={}){let e=a&&a.resource;let t=e?a.resource:a;let i=e?a:{resource:a};for(let s=0;s<kd.length;s++){let r=kd[s];if(r.test(t)){return new r(i)}}
throw new Error(`Could not find a source type for resource: ${i.resource}`)}
function O8(a={},e=!1){let t=a&&a.resource;let i=t?a.resource:a;let s=t?a:{resource:a};if(!e&&Me.has(i)){return Me.get(i)}
let r=new W({source:Op(s)});r.on("destroy",()=>{if(Me.has(i)){Me.remove(i)}});if(!e){Me.set(i,r)}
return r}
function I8(a,e=!1){return typeof a=="string"?Me.get(a):a instanceof bp?new W({source:a}):O8(a,e)}
W.from=I8;bp.from=Op;fe.add(Yr,$r,Kr,Gr,Ma,Kt,Ps);var Ht=class{constructor(e){this.resources=Object.create(null);this._dirty=!0;let t=0;for(let i in e){let s=e[i];this.setResource(s,t++)}
this._updateKey()}
_updateKey(){if(!this._dirty){return}
this._dirty=!1;let e=[];let t=0;for(let i in this.resources)e[t++]=this.resources[i]._resourceId;this._key=e.join("|")}
setResource(e,t){var i;var s;let r=this.resources[t];if(e!==r){if(r){if(!((i=e.off)==null)){i.call(e,"change",this.onResourceChange,this)}}
if(!((s=e.on)==null)){s.call(e,"change",this.onResourceChange,this)}
this.resources[t]=e;this._dirty=!0}}
getResource(e){return this.resources[e]}
_touch(e){let t=this.resources;for(let i in t)t[i]._touched=e}
destroy(){var e;let t=this.resources;for(let i in t){let s=t[i];if(!((e=s.off)==null)){e.call(s,"change",this.onResourceChange,this)}}
this.resources=null}
onResourceChange(e){this._dirty=!0;if(e.destroyed){let t=this.resources;for(let i in t)if(t[i]===e){t[i]=null}}else{this._updateKey()}}};var is;function Ip(){if(!is||is!=null&&is.isContextLost()){is=n8.createCanvas().getContext("webgl",{})}
return is}
var G8=["precision mediump float;","void main(void){","float test = 0.1;","%forloop%","gl_FragColor = vec4(0.0);","}"].join(`
`);function B8(a){let e="";for(let t=0;t<a;++t){if(t>0){e+=`
else `}
if(t<a-1){e+=`if(test == ${t}.0){}`}}
return e}
function F8(a,e){if(a===0){throw new Error("Invalid value of `0` passed to `checkMaxIfStatementsInShader`")}
let t=e.createShader(e.FRAGMENT_SHADER);try{for(;;){let i=G8.replace(/%forloop%/gi,B8(a));e.shaderSource(t,i);e.compileShader(t);if(!e.getShaderParameter(t,e.COMPILE_STATUS)){a=a/2|0}else{break}}}finally{e.deleteShader(t)}
return a}
var li=null;function Ci(){var a;if(li){return li}
let e=Ip();li=e.getParameter(e.MAX_TEXTURE_IMAGE_UNITS);li=F8(li,e);if(!((a=e.getExtension("WEBGL_lose_context"))==null)){a.loseContext()}
return li}
var Gp={};function pl(a,e){let t=2166136261;for(let i=0;i<e;i++){t^=a[i].uid;t=Math.imul(t,16777619);t>>>=0}
return Gp[t]||D8(a,e,t)}
var Ic=0;function D8(a,e,t){let i={};let s=0;if(!Ic){Ic=Ci()}
for(let n=0;n<Ic;n++){let d=n<e?a[n]:W.EMPTY.source;i[s++]=d.source;i[s++]=d.style}
let r=new Ht(i);Gp[t]=r;return r}
var Ea=class{constructor(e){if(typeof e=="number"){this.rawBinaryData=new ArrayBuffer(e)}else if(e instanceof Uint8Array){this.rawBinaryData=e.buffer}else{this.rawBinaryData=e}
this.uint32View=new Uint32Array(this.rawBinaryData);this.float32View=new Float32Array(this.rawBinaryData);this.size=this.rawBinaryData.byteLength}
get int8View(){if(!this._int8View){this._int8View=new Int8Array(this.rawBinaryData)}
return this._int8View}
get uint8View(){if(!this._uint8View){this._uint8View=new Uint8Array(this.rawBinaryData)}
return this._uint8View}
get int16View(){if(!this._int16View){this._int16View=new Int16Array(this.rawBinaryData)}
return this._int16View}
get int32View(){if(!this._int32View){this._int32View=new Int32Array(this.rawBinaryData)}
return this._int32View}
get float64View(){if(!this._float64Array){this._float64Array=new Float64Array(this.rawBinaryData)}
return this._float64Array}
get bigUint64View(){if(!this._bigUint64Array){this._bigUint64Array=new BigUint64Array(this.rawBinaryData)}
return this._bigUint64Array}
view(e){return this[`${e}View`]}
destroy(){this.rawBinaryData=null;this._int8View=null;this._uint8View=null;this._int16View=null;this.uint16View=null;this._int32View=null;this.uint32View=null;this.float32View=null}
static sizeOf(e){switch(e){case "int8":case "uint8":return 1;case "int16":case "uint16":return 2;case "int32":case "uint32":case "float32":return 4;default:throw new Error(`${e} isn't a valid view type`)}}};function Ud(a,e){let t=a.byteLength/8|0;let i=new Float64Array(a,0,t);new Float64Array(e,0,t).set(i);let s=a.byteLength-t*8;if(s>0){let r=new Uint8Array(a,t*8,s);new Uint8Array(e,t*8,s).set(r)}}
var k8={normal:"normal-npm",add:"add-npm",screen:"screen-npm"};var Le=(a=>(a[a.DISABLED=0]="DISABLED",a[a.RENDERING_MASK_ADD=1]="RENDERING_MASK_ADD",a[a.MASK_ACTIVE=2]="MASK_ACTIVE",a[a.INVERSE_MASK_ACTIVE=3]="INVERSE_MASK_ACTIVE",a[a.RENDERING_MASK_REMOVE=4]="RENDERING_MASK_REMOVE",a[a.NONE=5]="NONE",a))(Le||{});var Ld=class{constructor(){this.ids=Object.create(null);this.textures=[];this.count=0}
clear(){for(let e=0;e<this.count;e++){let t=this.textures[e];this.textures[e]=null;this.ids[t.uid]=null}
this.count=0}};var U8=Object.defineProperty;var Bf=Object.getOwnPropertySymbols;var L8=Object.prototype.hasOwnProperty;var N8=Object.prototype.propertyIsEnumerable;var Ff=(a,e,t)=>e in a?U8(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var Df=(a,e)=>{for(var t in e||(e={}))if(L8.call(e,t)){Ff(a,t,e[t])}
if(Bf){for(var t of Bf(e))if(N8.call(e,t)){Ff(a,t,e[t])}}
return a};var Nd=class{constructor(){this.renderPipeId="batch";this.action="startBatch";this.start=0;this.size=0;this.textures=new Ld();this.blendMode="normal";this.topology="triangle-strip";this.canBundle=!0}
destroy(){this.textures=null;this.gpuBindGroup=null;this.bindGroup=null;this.batcher=null}};var Bp=[];var jd=0;function Uf(a){Bp[jd++]=a}
var ss=0;var Fp=class Fr{constructor(e={}){this.uid=Ie("batcher");this.dirty=!0;this.batchIndex=0;this.batches=[];this._elements=[];var t;Fr.defaultOptions.maxTextures=(t=Fr.defaultOptions.maxTextures)!=null?t:Ci();e=Df(Df({},Fr.defaultOptions),e);let{maxTextures:i,attributesInitialSize:s,indicesInitialSize:r}=e;this.attributeBuffer=new Ea(s*4);this.indexBuffer=new Uint16Array(r);this.maxTextures=i}
begin(){this.elementSize=0;this.elementStart=0;this.indexSize=0;this.attributeSize=0;for(let e=0;e<this.batchIndex;e++){Uf(this.batches[e])}
this.batchIndex=0;this._batchIndexStart=0;this._batchIndexSize=0;this.dirty=!0}
add(e){this._elements[this.elementSize++]=e;e._indexStart=this.indexSize;e._attributeStart=this.attributeSize;e._batcher=this;this.indexSize+=e.indexSize;this.attributeSize+=e.attributeSize*this.vertexSize}
checkAndUpdateTexture(e,t){let i=e._batch.textures.ids[t._source.uid];return!i&&i!==0?!1:(e._textureId=i,e.texture=t,!0)}
updateElement(e){this.dirty=!0;let t=this.attributeBuffer;if(e.packAsQuad){this.packQuadAttributes(e,t.float32View,t.uint32View,e._attributeStart,e._textureId)}else{this.packAttributes(e,t.float32View,t.uint32View,e._attributeStart,e._textureId)}}
break(e){let t=this._elements;if(!t[this.elementStart]){return}
let i=jd>0?Bp[--jd]:new Nd();let s=i.textures;s.clear();let r=t[this.elementStart];let n=r.texture._source.alphaMode==="no-premultiply-alpha"&&k8[a]||r.blendMode;let d=r.topology;if(this.attributeSize*4>this.attributeBuffer.size){this._resizeAttributeBuffer(this.attributeSize*4)}
if(this.indexSize>this.indexBuffer.length){this._resizeIndexBuffer(this.indexSize)}
let h=this.attributeBuffer.float32View;let l=this.attributeBuffer.uint32View;let f=this.indexBuffer;let p=this._batchIndexSize;let _=this._batchIndexStart;let m="startBatch";let v=this.maxTextures;for(let T=this.elementStart;T<this.elementSize;++T){let w=t[T];t[T]=null;let P=w.texture._source;let C=P.alphaMode==="no-premultiply-alpha"&&k8[a]||w.blendMode;let B=n!==C||d!==w.topology;if(P._batchTick===ss&&!B){w._textureId=P._textureBindLocation;p+=w.indexSize;if(w.packAsQuad){this.packQuadAttributes(w,h,l,w._attributeStart,w._textureId);this.packQuadIndex(f,w._indexStart,w._attributeStart/this.vertexSize)}else{this.packAttributes(w,h,l,w._attributeStart,w._textureId);this.packIndex(w,f,w._indexStart,w._attributeStart/this.vertexSize)}
w._batch=i;continue}
P._batchTick=ss;if(s.count>=v||B){this._finishBatch(i,_,p-_,s,n,d,e,m);m="renderBatch";_=p;n=C;d=w.topology;i=jd>0?Bp[--jd]:new Nd();s=i.textures;s.clear();++ss}
w._textureId=P._textureBindLocation=s.count;s.ids[P.uid]=s.count;s.textures[s.count++]=P;w._batch=i;p+=w.indexSize;if(w.packAsQuad){this.packQuadAttributes(w,h,l,w._attributeStart,w._textureId);this.packQuadIndex(f,w._indexStart,w._attributeStart/this.vertexSize)}else{this.packAttributes(w,h,l,w._attributeStart,w._textureId);this.packIndex(w,f,w._indexStart,w._attributeStart/this.vertexSize)}}
if(s.count>0){this._finishBatch(i,_,p-_,s,n,d,e,m);_=p;++ss}
this.elementStart=this.elementSize;this._batchIndexStart=_;this._batchIndexSize=p}
_finishBatch(e,t,i,s,r,n,d,h){e.gpuBindGroup=null;e.bindGroup=null;e.action=h;e.batcher=this;e.textures=s;e.blendMode=r;e.topology=n;e.start=t;e.size=i;++ss;this.batches[this.batchIndex++]=e;d.add(e)}
finish(e){this.break(e)}
ensureAttributeBuffer(e){if(!(e*4<=this.attributeBuffer.size)){this._resizeAttributeBuffer(e*4)}}
ensureIndexBuffer(e){if(!(e<=this.indexBuffer.length)){this._resizeIndexBuffer(e)}}
_resizeAttributeBuffer(e){let t=Math.max(e,this.attributeBuffer.size*2);let i=new Ea(t);Ud(this.attributeBuffer.rawBinaryData,i.rawBinaryData);this.attributeBuffer=i}
_resizeIndexBuffer(e){let t=this.indexBuffer;let i=Math.max(e,t.length*1.5);i+=i%2;let s=i>65535?new Uint32Array(i):new Uint16Array(i);if(s.BYTES_PER_ELEMENT!==t.BYTES_PER_ELEMENT){for(let r=0;r<t.length;r++){s[r]=t[r]}}else{Ud(t.buffer,s.buffer)}
this.indexBuffer=s}
packQuadIndex(e,t,i){e[t]=i+0;e[t+1]=i+1;e[t+2]=i+2;e[t+3]=i+0;e[t+4]=i+2;e[t+5]=i+3}
packIndex(e,t,i,s){let r=e.indices;let n=e.indexSize;let d=e.indexOffset;let h=e.attributeOffset;for(let l=0;l<n;l++){t[i++]=s+r[l+d]-h}}
destroy(){for(let e=0;e<this.batches.length;e++){Uf(this.batches[e])}
this.batches=null;for(let e=0;e<this._elements.length;e++){this._elements[e]._batch=null}
this._elements=null;this.indexBuffer=null;this.attributeBuffer.destroy();this.attributeBuffer=null}};Fp.defaultOptions={maxTextures:null,attributesInitialSize:4,indicesInitialSize:6};var ye=(a=>(a[a.MAP_READ=1]="MAP_READ",a[a.MAP_WRITE=2]="MAP_WRITE",a[a.COPY_SRC=4]="COPY_SRC",a[a.COPY_DST=8]="COPY_DST",a[a.INDEX=16]="INDEX",a[a.VERTEX=32]="VERTEX",a[a.UNIFORM=64]="UNIFORM",a[a.STORAGE=128]="STORAGE",a[a.INDIRECT=256]="INDIRECT",a[a.QUERY_RESOLVE=512]="QUERY_RESOLVE",a[a.STATIC=1024]="STATIC",a))(ye||{});var st=class extends xt{constructor(e){let{data:t,size:i}=e;let{usage:s,label:r,shrinkToFit:n}=e;super();this.uid=Ie("buffer");this._resourceType="buffer";this._resourceId=Ie("resource");this._touched=0;this._updateID=1;this._dataInt32=null;this.shrinkToFit=!0;this.destroyed=!1;if(t instanceof Array){t=new Float32Array(t)}
this._data=t;if(!(i!=null)){i=t?.byteLength}
let d=!!t;this.descriptor={size:i,usage:s,mappedAtCreation:d,label:r};this.shrinkToFit=n??!0}
get data(){return this._data}
set data(e){this.setDataWithSize(e,e.length,!0)}
get dataInt32(){if(!this._dataInt32){this._dataInt32=new Int32Array(this.data.buffer)}
return this._dataInt32}
get static(){return!!(this.descriptor.usage&ye.STATIC)}
set static(e){if(e){this.descriptor.usage|=ye.STATIC}else{this.descriptor.usage&=~ye.STATIC}}
setDataWithSize(e,t,i){this._updateID++;this._updateSize=t*e.BYTES_PER_ELEMENT;if(this._data===e){if(i){this.emit("update",this)}
return}
let s=this._data;this._data=e;this._dataInt32=null;if(!s||s.length!==e.length){if(!this.shrinkToFit&&s&&e.byteLength<s.byteLength){if(i){this.emit("update",this)}}else{this.descriptor.size=e.byteLength;this._resourceId=Ie("resource");this.emit("change",this)}
return}
if(i){this.emit("update",this)}}
update(e){this._updateSize=e??this._updateSize;this._updateID++;this.emit("update",this)}
destroy(){this.destroyed=!0;this.emit("destroy",this);this.emit("change",this);this._data=null;this.descriptor=null;this.removeAllListeners()}};function Dp(a,e){if(!(a instanceof st)){let t=e?ye.INDEX:ye.VERTEX;if(a instanceof Array){if(e){a=new Uint32Array(a);t=ye.INDEX|ye.COPY_DST}else{a=new Float32Array(a);t=ye.VERTEX|ye.COPY_DST}}
a=new st({data:a,label:e?"index-mesh-buffer":"vertex-mesh-buffer",usage:t})}
return a}
function X8(a,e,t){let i=a.getAttribute(e);if(!i){t.minX=0;t.minY=0;t.maxX=0;t.maxY=0;return t}
let s=i.buffer.data;let r=Infinity;let n=Infinity;let d=-Infinity;let h=-Infinity;let l=s.BYTES_PER_ELEMENT;let f=(i.offset||0)/l;let p=(i.stride||8)/l;for(let _=f;_<s.length;_+=p){let m=s[_];let v=s[_+1];if(m>d){d=m}
if(v>h){h=v}
if(m<r){r=m}
if(v<n){n=v}}
t.minX=r;t.minY=n;t.maxX=d;t.maxY=h;return t}
function H8(a){if(a instanceof st||Array.isArray(a)||a.BYTES_PER_ELEMENT){a={buffer:a}}
a.buffer=Dp(a.buffer,!1);return a}
var qt=class extends xt{constructor(e={}){var t;super();this.uid=Ie("geometry");this._layoutKey=0;this.instanceCount=1;this._bounds=new Ze();this._boundsDirty=!0;let{attributes:i,indexBuffer:s,topology:r}=e;this.buffers=[];this.attributes={};if(i){for(let n in i)this.addAttribute(n,i[n]);}
this.instanceCount=(t=e.instanceCount)!=null?t:1;if(s){this.addIndex(s)}
this.topology=r||"triangle-list"}
onBufferUpdate(){this._boundsDirty=!0;this.emit("update",this)}
getAttribute(e){return this.attributes[e]}
getIndex(){return this.indexBuffer}
getBuffer(e){return this.getAttribute(e).buffer}
getSize(){for(let e in this.attributes){let t=this.attributes[e];return t.buffer.data.length/(t.stride/4||t.size)}
return 0}
addAttribute(e,t){let i=H8(t);if(this.buffers.indexOf(i.buffer)===-1){this.buffers.push(i.buffer);i.buffer.on("update",this.onBufferUpdate,this);i.buffer.on("change",this.onBufferUpdate,this)}
this.attributes[e]=i}
addIndex(e){this.indexBuffer=Dp(e,!0);this.buffers.push(this.indexBuffer)}
get bounds(){return this._boundsDirty?(this._boundsDirty=!1,X8(this,"aPosition",this._bounds)):this._bounds}
destroy(e=!1){this.emit("destroy",this);this.removeAllListeners();if(e){this.buffers.forEach(t=>t.destroy())}
this.attributes=null;this.buffers=null;this.indexBuffer=null;this._bounds=null}};var z8=new Float32Array(1);var V8=new Uint32Array(1);var Xd=class extends qt{constructor(){let e=new st({data:z8,label:"attribute-batch-buffer",usage:ye.VERTEX|ye.COPY_DST,shrinkToFit:!1});let t=new st({data:V8,label:"index-batch-buffer",usage:ye.INDEX|ye.COPY_DST,shrinkToFit:!1});super({attributes:{aPosition:{buffer:e,format:"float32x2",stride:24,offset:0},aUV:{buffer:e,format:"float32x2",stride:24,offset:8},aColor:{buffer:e,format:"unorm8x4",stride:24,offset:16},aTextureIdAndRound:{buffer:e,format:"uint16x2",stride:24,offset:20}},indexBuffer:t})}};var Gc=Object.create(null);var Lf=Object.create(null);function Cs(a,e){let t=Lf[a];if(t===undefined){if(Gc[e]===undefined){Gc[e]=1}
Lf[a]=t=Gc[e]++}
return t}
var br;function W8(){if(!br){br="mediump";let a=Ip();if(a&&a.getShaderPrecisionFormat){br=a.getShaderPrecisionFormat(a.FRAGMENT_SHADER,a.HIGH_FLOAT).precision?"highp":"mediump"}}
return br}
function Y8(a,e,t){return e?a:t?(a=a.replace("out vec4 finalColor;",""),`

#ifdef GL_ES // This checks if it is WebGL1
#define in varying
#define finalColor gl_FragColor
#define texture texture2D
#endif
${a}
`):`

#ifdef GL_ES // This checks if it is WebGL1
#define in attribute
#define out varying
#endif
${a}
`}
function $8(a,e,t){let i=t?e.maxSupportedFragmentPrecision:e.maxSupportedVertexPrecision;if(a.substring(0,9)!=="precision"){let s=t?e.requestedFragmentPrecision:e.requestedVertexPrecision;if(s==="highp"&&i!=="highp"){s="mediump"}
return `precision ${s} float;
${a}`}else if(i!=="highp"&&a.substring(0,15)==="precision highp"){return a.replace("precision highp","precision mediump")}
return a}
function K8(a,e){return e?`#version 300 es
${a}`:a}
var q8={};var Z8={};function Q8(a,{name:e="pixi-program"},t=!0){e=e.replace(/\s+/g,"-");e+=t?"-fragment":"-vertex";let i=t?q8:Z8;if(i[e]){i[e]++;e+=`-${i[e]}`}else{i[e]=1}
return a.indexOf("#define SHADER_NAME")!==-1?a:`${`#define SHADER_NAME ${e}`}
${a}`}
function J8(a,e){return e?a.replace("#version 300 es",""):a}
var e6=Object.defineProperty;var Nf=Object.getOwnPropertySymbols;var t6=Object.prototype.hasOwnProperty;var a6=Object.prototype.propertyIsEnumerable;var jf=(a,e,t)=>e in a?e6(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var Xf=(a,e)=>{for(var t in e||(e={}))if(t6.call(e,t)){jf(a,t,e[t])}
if(Nf){for(var t of Nf(e))if(a6.call(e,t)){jf(a,t,e[t])}}
return a};var Bc={stripVersion:J8,ensurePrecision:$8,addProgramDefines:Y8,setProgramName:Q8,insertVersion:K8};var Fc=Object.create(null);var kp=class Hd{constructor(e){e=Xf(Xf({},Hd.defaultOptions),e);let t=e.fragment.indexOf("#version 300 es")!==-1;let i={stripVersion:t,ensurePrecision:{requestedFragmentPrecision:e.preferredFragmentPrecision,requestedVertexPrecision:e.preferredVertexPrecision,maxSupportedVertexPrecision:"highp",maxSupportedFragmentPrecision:W8()},setProgramName:{name:e.name},addProgramDefines:t,insertVersion:t};let s=e.fragment;let r=e.vertex;Object.keys(Bc).forEach(n=>{let d=i[n];s=Bc[n](s,d,!0);r=Bc[n](r,d,!1)});this.fragment=s;this.vertex=r;this.transformFeedbackVaryings=e.transformFeedbackVaryings;this._key=Cs(`${this.vertex}:${this.fragment}`,"gl-program")}
destroy(){this.fragment=null;this.vertex=null;this._attributeData=null;this._uniformData=null;this._uniformBlockData=null;this.transformFeedbackVaryings=null}
static from(e){if(!Fc[`${e.vertex}:${e.fragment}`]){Fc[`${e.vertex}:${e.fragment}`]=new Hd(e)}
return Fc[`${e.vertex}:${e.fragment}`]}};kp.defaultOptions={preferredVertexPrecision:"highp",preferredFragmentPrecision:"mediump"};var Hf={uint8x2:{size:2,stride:2,normalised:!1},uint8x4:{size:4,stride:4,normalised:!1},sint8x2:{size:2,stride:2,normalised:!1},sint8x4:{size:4,stride:4,normalised:!1},unorm8x2:{size:2,stride:2,normalised:!0},unorm8x4:{size:4,stride:4,normalised:!0},snorm8x2:{size:2,stride:2,normalised:!0},snorm8x4:{size:4,stride:4,normalised:!0},uint16x2:{size:2,stride:4,normalised:!1},uint16x4:{size:4,stride:8,normalised:!1},sint16x2:{size:2,stride:4,normalised:!1},sint16x4:{size:4,stride:8,normalised:!1},unorm16x2:{size:2,stride:4,normalised:!0},unorm16x4:{size:4,stride:8,normalised:!0},snorm16x2:{size:2,stride:4,normalised:!0},snorm16x4:{size:4,stride:8,normalised:!0},float16x2:{size:2,stride:4,normalised:!1},float16x4:{size:4,stride:8,normalised:!1},float32:{size:1,stride:4,normalised:!1},float32x2:{size:2,stride:8,normalised:!1},float32x3:{size:3,stride:12,normalised:!1},float32x4:{size:4,stride:16,normalised:!1},uint32:{size:1,stride:4,normalised:!1},uint32x2:{size:2,stride:8,normalised:!1},uint32x3:{size:3,stride:12,normalised:!1},uint32x4:{size:4,stride:16,normalised:!1},sint32:{size:1,stride:4,normalised:!1},sint32x2:{size:2,stride:8,normalised:!1},sint32x3:{size:3,stride:12,normalised:!1},sint32x4:{size:4,stride:16,normalised:!1}};function Ca(a){var e;return(e=Hf[a])!=null?e:Hf.float32}
var i6={f32:"float32","vec2<f32>":"float32x2","vec3<f32>":"float32x3","vec4<f32>":"float32x4",vec2f:"float32x2",vec3f:"float32x3",vec4f:"float32x4",i32:"sint32","vec2<i32>":"sint32x2","vec3<i32>":"sint32x3","vec4<i32>":"sint32x4",u32:"uint32","vec2<u32>":"uint32x2","vec3<u32>":"uint32x3","vec4<u32>":"uint32x4",bool:"uint32","vec2<bool>":"uint32x2","vec3<bool>":"uint32x3","vec4<bool>":"uint32x4"};function s6({source:a,entryPoint:e}){var t;let i={};let s=a.indexOf(`fn ${e}`);if(s!==-1){let r=a.indexOf("->",s);if(r!==-1){let n=a.substring(s,r);let d=/@location\((\d+)\)\s+([a-zA-Z0-9_]+)\s*:\s*([a-zA-Z0-9_<>]+)(?:,|\s|$)/g;let h;for(;(h=d.exec(n))!==null;){let l=(t=i6[h[3]])!=null?t:"float32";i[h[2]]={location:parseInt(h[1],10),format:l,stride:Ca(l).stride,offset:0,instance:!1,start:0}}}}
return i}
function Dc(a){var e;var t;var i;let s=/(^|[^/])@(group|binding)\(\d+\)[^;]+;/g;let r=/@group\((\d+)\)/;let n=/@binding\((\d+)\)/;let d=/var(<[^>]+>)? (\w+)/;let h=/:\s*(\w+)/;let l=/struct\s+(\w+)\s*{([^}]+)}/g;let f=/(\w+)\s*:\s*([\w\<\>]+)/g;let p=/struct\s+(\w+)/;let _=(e=a.match(s))==null?undefined:e.map(v=>({group:parseInt(v.match(r)[1],10),binding:parseInt(v.match(n)[1],10),name:v.match(d)[2],isUniform:v.match(d)[1]==="<uniform>",type:v.match(h)[1]}));if(!_){return{groups:[],structs:[]}}
let m=(i=(t=a.match(l))==null?undefined:t.map(v=>{let T=v.match(p)[1];let w=v.match(f).reduce((P,C)=>{let[B,D]=C.split(":");P[B.trim()]=D.trim();return P},{});return w?{name:T,members:w}:null}).filter(({name:v})=>_.some(T=>T.type===v)))!=null?i:[];return{groups:_,structs:m}}
var ps=(a=>(a[a.VERTEX=1]="VERTEX",a[a.FRAGMENT=2]="FRAGMENT",a[a.COMPUTE=4]="COMPUTE",a))(ps||{});function r6({groups:a}){let e=[];for(let t=0;t<a.length;t++){let i=a[t];if(!e[i.group]){e[i.group]=[]}
if(i.isUniform){e[i.group].push({binding:i.binding,visibility:ps.VERTEX|ps.FRAGMENT,buffer:{type:"uniform"}})}else if(i.type==="sampler"){e[i.group].push({binding:i.binding,visibility:ps.FRAGMENT,sampler:{type:"filtering"}})}else if(i.type==="texture_2d"){e[i.group].push({binding:i.binding,visibility:ps.FRAGMENT,texture:{sampleType:"float",viewDimension:"2d",multisampled:!1}})}}
return e}
function n6({groups:a}){let e=[];for(let t=0;t<a.length;t++){let i=a[t];if(!e[i.group]){e[i.group]={}}
e[i.group][i.name]=i.binding}
return e}
function o6(a,e){let t=new Set();let i=new Set();let s=[...a.structs,...e.structs].filter(n=>t.has(n.name)?!1:(t.add(n.name),!0));let r=[...a.groups,...e.groups].filter(n=>{return i.has(`${n.name}-${n.binding}`)?!1:(i.add(`${n.name}-${n.binding}`),!0)});return{structs:s,groups:r}}
var kc=Object.create(null);var Zt=class a{constructor(e){this._layoutKey=0;this._attributeLocationsKey=0;var t;var i;let{fragment:s,vertex:r,layout:n,gpuLayout:d,name:h}=e;this.name=h;this.fragment=s;this.vertex=r;if(s.source===r.source){let l=Dc(s.source);this.structsAndGroups=l}else{let l=Dc(r.source);let f=Dc(s.source);this.structsAndGroups=o6(l,f)}
this.layout=n??n6(this.structsAndGroups);this.gpuLayout=d??r6(this.structsAndGroups);this.autoAssignGlobalUniforms=((t=this.layout[0])==null?undefined:t.globalUniforms)!==undefined;this.autoAssignLocalUniforms=((i=this.layout[1])==null?undefined:i.localUniforms)!==undefined;this._generateProgramKey()}
_generateProgramKey(){let{vertex:e,fragment:t}=this;let i=e.source+t.source+e.entryPoint+t.entryPoint;this._layoutKey=Cs(i,"program")}
get attributeData(){var e;if(!((e=this._attributeData)!=null)){this._attributeData=s6(this.vertex)}
return this._attributeData}
destroy(){this.gpuLayout=null;this.layout=null;this.structsAndGroups=null;this.fragment=null;this.vertex=null}
static from(e){if(!kc[`${e.vertex.source}:${e.fragment.source}:${e.fragment.entryPoint}:${e.vertex.entryPoint}`]){kc[`${e.vertex.source}:${e.fragment.source}:${e.fragment.entryPoint}:${e.vertex.entryPoint}`]=new a(e)}
return kc[`${e.vertex.source}:${e.fragment.source}:${e.fragment.entryPoint}:${e.vertex.entryPoint}`]}};function zf(a,e,t){if(a){for(let i in a){let s=i.toLocaleLowerCase();let r=e[s];if(r){let n=a[i];if(i==="header"){n=n.replace(/@in\s+[^;]+;\s*/g,"").replace(/@out\s+[^;]+;\s*/g,"")}
if(t){r.push(`//----${t}----//`)}
r.push(n)}}}}
var c6=/\{\{(.*?)\}\}/g;function Vf(a){var e;var t;let i={};((t=(e=a.match(c6))==null?undefined:e.map(s=>s.replace(/[{()}]/g,"")))!=null?t:[]).forEach(s=>{i[s]=[]});return i}
function Wf(a,e){let t;let i=/@in\s+([^;]+);/g;for(;(t=i.exec(a))!==null;){e.push(t[1])}}
function Yf(a,e,t=!1){let i=[];Wf(e,i);a.forEach(d=>{if(d.header){Wf(d.header,i)}});if(t){i.sort()}
let r=i.map((d,h)=>`       @location(${h}) ${d},`).join(`
`);let n=e.replace(/@in\s+[^;]+;\s*/g,"");n=n.replace("{{in}}",`
${r}
`);return n}
function $f(a,e){let t;let i=/@out\s+([^;]+);/g;for(;(t=i.exec(a))!==null;){e.push(t[1])}}
function d6(a){let e=/\b(\w+)\s*:/g.exec(a);return e?e[1]:""}
function h6(a){let e=/@.*?\s+/g;return a.replace(e,"")}
function l6(a,e){let t=[];$f(e,t);a.forEach(h=>{if(h.header){$f(h.header,t)}});let i=0;let s=t.sort().map(h=>h.indexOf("builtin")>-1?h:`@location(${i++}) ${h}`).join(`,
`);let r=t.sort().map(h=>`       var ${h6(h)};`).join(`
`);let d=e.replace(/@out\s+[^;]+;\s*/g,"");d=d.replace("{{struct}}",`
${s}
`);d=d.replace("{{start}}",`
${r}
`);d=d.replace("{{return}}",`
${`return VSOutput(${t.sort().map(h=>` ${d6(h)}`).join(`,
`)});`}
`);return d}
function Kf(a,e){let t=a;for(let i in e){let s=e[i];if(s.join(`
`).length){t=t.replace(`{{${i}}}`,`//-----${i} START-----//
${s.join(`
`)}
//----${i} FINISH----//`)}else{t=t.replace(`{{${i}}}`,"")}}
return t}
var Va=Object.create(null);var Uc=new Map();var u6=0;function f6({template:a,bits:e}){let t=Up(a,e);if(Va[t]){return Va[t]}
let{vertex:i,fragment:s}=p6(a,e);Va[t]=Lp(i,s,e);return Va[t]}
function b6({template:a,bits:e}){let t=Up(a,e);if(!Va[t]){Va[t]=Lp(a.vertex,a.fragment,e)}
return Va[t]}
function p6(a,e){let t=e.map(n=>n.vertex).filter(n=>!!n);let i=e.map(n=>n.fragment).filter(n=>!!n);let s=Yf(t,a.vertex,!0);s=l6(t,s);let r=Yf(i,a.fragment,!0);return{vertex:s,fragment:r}}
function Up(a,e){return e.map(t=>(Uc.has(t)||Uc.set(t,u6++),Uc.get(t))).sort((t,i)=>t-i).join("-")+a.vertex+a.fragment}
function Lp(a,e,t){let i=Vf(a);let s=Vf(e);t.forEach(r=>{zf(r.vertex,i,r.name);zf(r.fragment,s,r.name)});return{vertex:Kf(a,i),fragment:Kf(e,s)}}
var x6={name:"global-uniforms-bit",vertex:{header:`
struct GlobalUniforms {
uProjectionMatrix:mat3x3<f32>,
uWorldTransformMatrix:mat3x3<f32>,
uWorldColorAlpha: vec4<f32>,
uResolution: vec2<f32>,
}

@group(0) @binding(0) var<uniform> globalUniforms : GlobalUniforms;
`}};var v6={name:"global-uniforms-bit",vertex:{header:`
uniform mat3 uProjectionMatrix;
uniform mat3 uWorldTransformMatrix;
uniform vec4 uWorldColorAlpha;
uniform vec2 uResolution;
`}};var T6=Object.defineProperty;var qf=Object.getOwnPropertySymbols;var S6=Object.prototype.hasOwnProperty;var w6=Object.prototype.propertyIsEnumerable;var Zf=(a,e,t)=>e in a?T6(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var A6=(a,e)=>{for(var t in e||(e={}))if(S6.call(e,t)){Zf(a,t,e[t])}
if(qf){for(var t of qf(e))if(w6.call(e,t)){Zf(a,t,e[t])}}
return a};function Xs({bits:a,name:e}){let t=f6({template:{fragment:`
@in vUV : vec2<f32>;
@in vColor : vec4<f32>;

{{header}}

@fragment
fn main(
{{in}}
) -> @location(0) vec4<f32> {

{{start}}

var outColor:vec4<f32>;

{{main}}

var finalColor:vec4<f32> = outColor * vColor;

{{end}}

return finalColor;
};
`,vertex:`
@in aPosition: vec2<f32>;
@in aUV: vec2<f32>;

@out @builtin(position) vPosition: vec4<f32>;
@out vUV : vec2<f32>;
@out vColor : vec4<f32>;

{{header}}

struct VSOutput {
{{struct}}
};

@vertex
fn main( {{in}} ) -> VSOutput {

var worldTransformMatrix = globalUniforms.uWorldTransformMatrix;
var modelMatrix = mat3x3<f32>(
1.0, 0.0, 0.0,
0.0, 1.0, 0.0,
0.0, 0.0, 1.0
);
var position = aPosition;
var uv = aUV;

{{start}}

vColor = vec4<f32>(1., 1., 1., 1.);

{{main}}

vUV = uv;

var modelViewProjectionMatrix = globalUniforms.uProjectionMatrix * worldTransformMatrix * modelMatrix;

vPosition =  vec4<f32>((modelViewProjectionMatrix *  vec3<f32>(position, 1.0)).xy, 0.0, 1.0);

vColor *= globalUniforms.uWorldColorAlpha;

{{end}}

{{return}}
};
`},bits:[x6,...a]});return Zt.from({name:e,vertex:{source:t.vertex,entryPoint:"main"},fragment:{source:t.fragment,entryPoint:"main"}})}
function Hs({bits:a,name:e}){return new kp(A6({name:e},b6({template:{vertex:`
in vec2 aPosition;
in vec2 aUV;

out vec4 vColor;
out vec2 vUV;

{{header}}

void main(void){

mat3 worldTransformMatrix = uWorldTransformMatrix;
mat3 modelMatrix = mat3(
1.0, 0.0, 0.0,
0.0, 1.0, 0.0,
0.0, 0.0, 1.0
);
vec2 position = aPosition;
vec2 uv = aUV;

{{start}}

vColor = vec4(1.);

{{main}}

vUV = uv;

mat3 modelViewProjectionMatrix = uProjectionMatrix * worldTransformMatrix * modelMatrix;

gl_Position = vec4((modelViewProjectionMatrix * vec3(position, 1.0)).xy, 0.0, 1.0);

vColor *= uWorldColorAlpha;

{{end}}
}
`,fragment:`

in vec4 vColor;
in vec2 vUV;

out vec4 finalColor;

{{header}}

void main(void) {

{{start}}

vec4 outColor;

{{main}}

finalColor = outColor * vColor;

{{end}}
}
`},bits:[v6,...a]})))}
var gl={name:"color-bit",vertex:{header:`
@in aColor: vec4<f32>;
`,main:`
vColor *= vec4<f32>(aColor.rgb * aColor.a, aColor.a);
`}};var ml={name:"color-bit",vertex:{header:`
in vec4 aColor;
`,main:`
vColor *= vec4(aColor.rgb * aColor.a, aColor.a);
`}};var Lc={};function E6(a){let e=[];if(a===1){e.push("@group(1) @binding(0) var textureSource1: texture_2d<f32>;");e.push("@group(1) @binding(1) var textureSampler1: sampler;")}else{let t=0;for(let i=0;i<a;i++){e.push(`@group(1) @binding(${t++}) var textureSource${i + 1}: texture_2d<f32>;`);e.push(`@group(1) @binding(${t++}) var textureSampler${i + 1}: sampler;`)}}
return e.join(`
`)}
function P6(a){let e=[];if(a===1){e.push("outColor = textureSampleGrad(textureSource1, textureSampler1, vUV, uvDx, uvDy);")}else{e.push("switch vTextureId {");for(let t=0;t<a;t++){if(t===a-1){e.push("  default:{")}else{e.push(`  case ${t}:{`)}
e.push(`      outColor = textureSampleGrad(textureSource${t + 1}, textureSampler${t + 1}, vUV, uvDx, uvDy);`);e.push("      break;}")}
e.push("}")}
return e.join(`
`)}
function _l(a){if(!Lc[a]){Lc[a]={name:"texture-batch-bit",vertex:{header:`
@in aTextureIdAndRound: vec2<u32>;
@out @interpolate(flat) vTextureId : u32;
`,main:`
vTextureId = aTextureIdAndRound.y;
`,end:`
if(aTextureIdAndRound.x == 1)
{
vPosition = vec4<f32>(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
}
`},fragment:{header:`
@in @interpolate(flat) vTextureId: u32;

${E6(a)}
`,main:`
var uvDx = dpdx(vUV);
var uvDy = dpdy(vUV);

${P6(a)}
`}}}
return Lc[a]}
var Nc={};function R6(a){let e=[];for(let t=0;t<a;t++){if(t>0){e.push("else")}
if(t<a-1){e.push(`if(vTextureId < ${t}.5)`)}
e.push("{");e.push(`	outColor = texture(uTextures[${t}], vUV);`);e.push("}")}
return e.join(`
`)}
function yl(a){if(!Nc[a]){Nc[a]={name:"texture-batch-bit",vertex:{header:`
in vec2 aTextureIdAndRound;
out float vTextureId;

`,main:`
vTextureId = aTextureIdAndRound.y;
`,end:`
if(aTextureIdAndRound.x == 1.)
{
gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
}
`},fragment:{header:`
in float vTextureId;

uniform sampler2D uTextures[${a}];

`,main:`

${R6(a)}
`}}}
return Nc[a]}
var zs={name:"round-pixels-bit",vertex:{header:`
fn roundPixels(position: vec2<f32>, targetSize: vec2<f32>) -> vec2<f32> 
{
return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
}
`}};var Vs={name:"round-pixels-bit",vertex:{header:`   
vec2 roundPixels(vec2 position, vec2 targetSize)
{       
return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
}
`}};var Np=["f32","i32","vec2<f32>","vec3<f32>","vec4<f32>","mat2x2<f32>","mat3x3<f32>","mat4x4<f32>","mat3x2<f32>","mat4x2<f32>","mat2x3<f32>","mat4x3<f32>","mat2x4<f32>","mat3x4<f32>","vec2<i32>","vec3<i32>","vec4<i32>"];var M6=Np.reduce((a,e)=>(a[e]=!0,a),{});function C6(a,e){switch(a){case "f32":return 0;case "vec2<f32>":return new Float32Array(2*e);case "vec3<f32>":return new Float32Array(3*e);case "vec4<f32>":return new Float32Array(4*e);case "mat2x2<f32>":return new Float32Array([1,0,0,1]);case "mat3x3<f32>":return new Float32Array([1,0,0,0,1,0,0,0,1]);case "mat4x4<f32>":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}
return null}
var O6=Object.defineProperty;var Qf=Object.getOwnPropertySymbols;var I6=Object.prototype.hasOwnProperty;var G6=Object.prototype.propertyIsEnumerable;var Jf=(a,e,t)=>e in a?O6(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var e0=(a,e)=>{for(var t in e||(e={}))if(I6.call(e,t)){Jf(a,t,e[t])}
if(Qf){for(var t of Qf(e))if(G6.call(e,t)){Jf(a,t,e[t])}}
return a};var jp=class Xp{constructor(e,t){this._touched=0;this.uid=Ie("uniform");this._resourceType="uniformGroup";this._resourceId=Ie("resource");this.isUniformGroup=!0;this._dirtyId=0;this.destroyed=!1;var i;var s;t=e0(e0({},Xp.defaultOptions),t);this.uniformStructures=e;let r={};for(let n in e){let d=e[n];d.name=n;d.size=(i=d.size)!=null?i:1;if(!M6[d.type]){throw new Error(`Uniform type ${d.type} is not supported. Supported uniform types are: ${Np.join(", ")}`)}
if(!((s=d.value)!=null)){d.value=C6(d.type,d.size)}
r[n]=d.value}
this.uniforms=r;this._dirtyId=1;this.ubo=t.ubo;this.isStatic=t.isStatic;this._signature=Cs(Object.keys(r).map(n=>`${n}-${e[n].type}`).join("-"),"uniform-group")}
update(){this._dirtyId++}};jp.defaultOptions={ubo:!1,isStatic:!1};var t0={};function xl(a){let e=t0[a];if(e){return e}
let t=new Int32Array(a);for(let i=0;i<a;i++){t[i]=i}
e=t0[a]=new jp({uTextures:{value:t,type:"i32",size:a}},{isStatic:!0});return e}
var yt=(a=>(a[a.WEBGL=1]="WEBGL",a[a.WEBGPU=2]="WEBGPU",a[a.BOTH=3]="BOTH",a))(yt||{});var B6=Object.defineProperty;var qr=Object.getOwnPropertySymbols;var Hp=Object.prototype.hasOwnProperty;var zp=Object.prototype.propertyIsEnumerable;var a0=(a,e,t)=>e in a?B6(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var F6=(a,e)=>{for(var t in e||(e={}))if(Hp.call(e,t)){a0(a,t,e[t])}
if(qr){for(var t of qr(e))if(zp.call(e,t)){a0(a,t,e[t])}}
return a};var D6=(a,e)=>{var t={};for(var i in a)if(Hp.call(a,i)&&e.indexOf(i)<0){t[i]=a[i]}
if(a!=null&&qr){for(var i of qr(a))if(e.indexOf(i)<0&&zp.call(a,i)){t[i]=a[i]}}
return t};var ht=class a extends xt{constructor(e){super();this.uid=Ie("shader");this._uniformBindMap=Object.create(null);this._ownedBindGroups=[];let{gpuProgram:t,glProgram:i,groups:s,resources:r,compatibleRenderers:n,groupMap:d}=e;this.gpuProgram=t;this.glProgram=i;if(n===undefined){n=0;if(t){n|=yt.WEBGPU}
if(i){n|=yt.WEBGL}}
this.compatibleRenderers=n;let h={};if(!r&&!s){r={}}
if(r&&s){throw new Error("[Shader] Cannot have both resources and groups")}
if(!t&&s&&!d){throw new Error("[Shader] No group map or WebGPU shader provided - consider using resources instead.")}
if(!t&&s&&d){for(let l in d)for(let f in d[l]){let p=d[l][f];h[p]={group:l,binding:f,name:p}}}else if(t&&s&&!d){let l=t.structsAndGroups.groups;d={};l.forEach(f=>{d[f.group]=d[f.group]||{};d[f.group][f.binding]=f.name;h[f.name]=f})}else if(r){s={};d={};if(t){t.structsAndGroups.groups.forEach(f=>{d[f.group]=d[f.group]||{};d[f.group][f.binding]=f.name;h[f.name]=f})}
let l=0;for(let f in r)if(!h[f]){if(!s[99]){s[99]=new Ht();this._ownedBindGroups.push(s[99])}
h[f]={group:99,binding:l,name:f};d[99]=d[99]||{};d[99][l]=f;l++}
for(let f in r){let _=r[f];if(!_.source&&!_._resourceType){_=new jp(_)}
let m=h[f];if(m){if(!s[m.group]){s[m.group]=new Ht();this._ownedBindGroups.push(s[m.group])}
s[m.group].setResource(_,m.binding)}}}
this.groups=s;this._uniformBindMap=d;this.resources=this._buildResourceAccessor(s,h)}
addResource(e,t,i){var s;var r;if(!(s=this._uniformBindMap)[t]){s[t]={}}
if(!(r=this._uniformBindMap[t])[i]){r[i]=e}
if(!this.groups[t]){this.groups[t]=new Ht();this._ownedBindGroups.push(this.groups[t])}}
_buildResourceAccessor(e,t){let i={};for(let s in t){let r=t[s];Object.defineProperty(i,r.name,{get(){return e[r.group].getResource(r.binding)},set(n){e[r.group].setResource(n,r.binding)}})}
return i}
destroy(e=!1){var t;var i;this.emit("destroy",this);if(e){if(!((t=this.gpuProgram)==null)){t.destroy()}
if(!((i=this.glProgram)==null)){i.destroy()}}
this.gpuProgram=null;this.glProgram=null;this.removeAllListeners();this._uniformBindMap=null;this._ownedBindGroups.forEach(s=>{s.destroy()});this._ownedBindGroups=null;this.resources=null;this.groups=null}
static from(e){let{gpu:i,gl:s}=e;let r=D6(e,["gpu","gl"]);let n;let d;if(i){n=Zt.from(i)}
if(s){d=kp.from(s)}
return new a(F6({gpuProgram:n,glProgram:d},r))}};var zd=class extends ht{constructor(e){let t=Hs({name:"batch",bits:[ml,yl(e),Vs]});let i=Xs({name:"batch",bits:[gl,_l(e),zs]});super({glProgram:t,gpuProgram:i,resources:{batchSamplers:xl(e)}})}};var i0=null;var Vp=class Wp extends Fp{constructor(){super(...arguments);this.geometry=new Xd();this.shader=i0||(i0=new zd(this.maxTextures));this.name=Wp.extension.name;this.vertexSize=6}
packAttributes(e,t,i,s,r){let n=r<<16|e.roundPixels&65535;let d=e.transform;let h=d.a;let l=d.b;let f=d.c;let p=d.d;let _=d.tx;let m=d.ty;let{positions:v,uvs:T}=e;let w=e.color;let P=e.attributeOffset;let C=P+e.attributeSize;for(let B=P;B<C;B++){let D=B*2;let X=v[D];let U=v[D+1];t[s++]=h*X+f*U+_;t[s++]=p*U+l*X+m;t[s++]=T[D];t[s++]=T[D+1];i[s++]=w;i[s++]=n}}
packQuadAttributes(e,t,i,s,r){let n=e.texture;let d=e.transform;let h=d.a;let l=d.b;let f=d.c;let p=d.d;let _=d.tx;let m=d.ty;let v=e.bounds;let T=v.maxX;let w=v.minX;let P=v.maxY;let C=v.minY;let B=n.uvs;let D=e.color;let X=r<<16|e.roundPixels&65535;t[s+0]=h*w+f*C+_;t[s+1]=p*C+l*w+m;t[s+2]=B.x0;t[s+3]=B.y0;i[s+4]=D;i[s+5]=X;t[s+6]=h*T+f*C+_;t[s+7]=p*C+l*T+m;t[s+8]=B.x1;t[s+9]=B.y1;i[s+10]=D;i[s+11]=X;t[s+12]=h*T+f*P+_;t[s+13]=p*P+l*T+m;t[s+14]=B.x2;t[s+15]=B.y2;i[s+16]=D;i[s+17]=X;t[s+18]=h*w+f*P+_;t[s+19]=p*P+l*w+m;t[s+20]=B.x3;t[s+21]=B.y3;i[s+22]=D;i[s+23]=X}};Vp.extension={type:[I.Batcher],name:"default"};function k6(a,e,t,i,s,r,n,d=null){let h=0;t*=e;s*=r;let l=d.a;let f=d.b;let p=d.c;let _=d.d;let m=d.tx;let v=d.ty;for(;h<n;){let T=a[t];let w=a[t+1];i[s]=l*T+p*w+m;i[s+1]=f*T+_*w+v;s+=r;t+=e;h++}}
function U6(a,e,t,i){let s=0;for(e*=t;s<i;){a[e]=0;a[e+1]=0;e+=t;s++}}
function Yp(a,e,t,i,s){let r=e.a;let n=e.b;let d=e.c;let h=e.d;let l=e.tx;let f=e.ty;if(!t){t=0}
if(!i){i=2}
if(!s){s=a.length/i-t}
let p=t*i;for(let _=0;_<s;_++){let m=a[p];let v=a[p+1];a[p]=r*m+d*v+l;a[p+1]=n*m+h*v+f;p+=i}}
var L6=new ae();var Os=class{constructor(){this.packAsQuad=!1;this.batcherName="default";this.topology="triangle-list";this.applyTransform=!0;this.roundPixels=0;this._batcher=null;this._batch=null}
get uvs(){return this.geometryData.uvs}
get positions(){return this.geometryData.vertices}
get indices(){return this.geometryData.indices}
get blendMode(){return this.applyTransform?this.renderable.groupBlendMode:"normal"}
get color(){let e=this.baseColor;let t=e>>16|e&65280|(e&255)<<16;let i=this.renderable;return i?cp(t,i.groupColor)+(this.alpha*i.groupAlpha*255<<24):t+(this.alpha*255<<24)}
get transform(){var e;return((e=this.renderable)==null?undefined:e.groupTransform)||L6}
copyTo(e){e.indexOffset=this.indexOffset;e.indexSize=this.indexSize;e.attributeOffset=this.attributeOffset;e.attributeSize=this.attributeSize;e.baseColor=this.baseColor;e.alpha=this.alpha;e.texture=this.texture;e.geometryData=this.geometryData;e.topology=this.topology}
reset(){this.applyTransform=!0;this.renderable=null;this.topology="triangle-list"}};var N6=Object.defineProperty;var j6=Object.defineProperties;var X6=Object.getOwnPropertyDescriptors;var s0=Object.getOwnPropertySymbols;var H6=Object.prototype.hasOwnProperty;var z6=Object.prototype.propertyIsEnumerable;var r0=(a,e,t)=>e in a?N6(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var Zr=(a,e)=>{for(var t in e||(e={}))if(H6.call(e,t)){r0(a,t,e[t])}
if(s0){for(var t of s0(e))if(z6.call(e,t)){r0(a,t,e[t])}}
return a};var Is={extension:{type:I.ShapeBuilder,name:"circle"},build(a,e){let t;let i;let s;let r;let n;let d;if(a.type==="circle"){t=a.x;i=a.y;n=d=a.radius;s=r=0}else if(a.type==="ellipse"){t=a.x;i=a.y;n=a.halfWidth;d=a.halfHeight;s=r=0}else{let X=a.width/2;let U=a.height/2;t=a.x+X;i=a.y+U;n=d=Math.max(0,Math.min(a.radius,Math.min(X,U)));s=X-n;r=U-d}
if(!(n>=0&&d>=0&&s>=0&&r>=0)){return e}
let h=Math.ceil(2.3*Math.sqrt(n+d));let l=h*8+(s?4:0)+(r?4:0);if(l===0){return e}
if(h===0){e[0]=e[6]=t+s;e[1]=e[3]=i+r;e[2]=e[4]=t-s;e[5]=e[7]=i-r;return e}
let f=0;let p=h*4+(s?2:0)+2;let _=p;let m=l;let v=s+n;let T=r;let w=t+v;let P=t-v;let C=i+T;e[f++]=w;e[f++]=C;e[--p]=C;e[--p]=P;if(r){let D=i-T;e[_++]=P;e[_++]=D;e[--m]=D;e[--m]=w}
for(let D=1;D<h;D++){let X=Math.PI/2*(D/h);let U=s+Math.cos(X)*n;let L=r+Math.sin(X)*d;let ie=t+U;let ne=t-U;let q=i+L;let Y=i-L;e[f++]=ie;e[f++]=q;e[--p]=q;e[--p]=ne;e[_++]=ne;e[_++]=Y;e[--m]=Y;e[--m]=ie}
v=s;T=r+d;w=t+v;P=t-v;C=i+T;let B=i-T;e[f++]=w;e[f++]=C;e[--m]=B;e[--m]=w;if(s){e[f++]=P;e[f++]=C;e[--m]=B;e[--m]=P}
return e},triangulate(a,e,t,i,s,r){if(a.length===0){return}
let n=0;let d=0;for(let f=0;f<a.length;f+=2){n+=a[f];d+=a[f+1]}
n/=a.length/2;d/=a.length/2;let h=i;e[h*t]=n;e[h*t+1]=d;let l=h++;for(let f=0;f<a.length;f+=2){e[h*t]=a[f];e[h*t+1]=a[f+1];if(f>0){s[r++]=h;s[r++]=l;s[r++]=h-1}
h++}
s[r++]=l+1;s[r++]=l;s[r++]=h-1}};var V6=j6(Zr({},Is),X6({extension:j6(Zr({},Is.extension),X6({name:"ellipse"}))}));var W6=j6(Zr({},Is),X6({extension:j6(Zr({},Is.extension),X6({name:"roundedRectangle"}))}));function Y6(a){let e=a.length;if(e<6){return 1}
let t=0;let i=0;let s=a[e-2];for(let r=a[e-1];i<e;i+=2){let n=a[i];let d=a[i+1];t+=(n-s)*(d+r);s=n;r=d}
return t<0?-1:1}
function o0(a,e,t,i,s,r,n,d){let h=a-t*s;let l=e-i*s;let f=a+t*r;let p=e+i*r;let _;let m;if(n){_=i;m=-t}else{_=-i;m=t}
let v=h+_;let T=l+m;let w=f+_;let P=p+m;d.push(v,T);d.push(w,P);return 2}
function ka(a,e,t,i,s,r,n,d){let h=t-a;let l=i-e;let f=Math.atan2(h,l);let p=Math.atan2(s-a,r-e);if(d&&f<p){f+=Math.PI*2}else if(!d&&f>p){p+=Math.PI*2}
let _=f;let m=p-f;let v=Math.abs(m);let T=Math.sqrt(h*h+l*l);let w=(15*v*Math.sqrt(T)/Math.PI>>0)+1;let P=m/w;_+=P;if(d){n.push(a,e);n.push(t,i);let C=1;for(let B=_;C<w;C++,B+=P){n.push(a,e);n.push(a+Math.sin(B)*T,e+Math.cos(B)*T)}
n.push(a,e);n.push(s,r)}else{n.push(t,i);n.push(a,e);let C=1;for(let B=_;C<w;C++,B+=P){n.push(a+Math.sin(B)*T,e+Math.cos(B)*T);n.push(a,e)}
n.push(s,r);n.push(a,e)}
return w*2}
function $6(a,e,t,i,s,r){if(a.length===0){return}
let h=e.alignment;if(e.alignment!==.5){let ve=Y6(a);if(t){ve*=-1}
h=(h-.5)*ve+.5}
let l=new Pe(a[0],a[1]);let f=new Pe(a[a.length-2],a[a.length-1]);let _=Math.abs(l.x-f.x)<1e-4&&Math.abs(l.y-f.y)<1e-4;if(i){a=a.slice();if(_){a.pop();a.pop();f.set(a[a.length-2],a[a.length-1])}
let ve=(l.x+f.x)*.5;let It=(f.y+l.y)*.5;a.unshift(ve,It);a.push(ve,It)}
let v=a.length/2;let T=a.length;let w=s.length/2;let P=e.width/2;let C=P*P;let B=e.miterLimit*e.miterLimit;let D=a[0];let X=a[1];let U=a[2];let L=a[3];let ie=0;let ne=0;let q=-(X-L);let Y=D-U;let se=0;let ee=0;let Ce=Math.sqrt(q*q+Y*Y);q/=Ce;Y/=Ce;q*=P;Y*=P;let Tt=h;let re=(1-Tt)*2;let oe=Tt*2;if(!i){if(e.cap==="round"){T+=ka(D-q*(re-oe)*.5,X-Y*(re-oe)*.5,D-q*re,X-Y*re,D+q*oe,X+Y*oe,s,!0)+2}else if(e.cap==="square"){T+=o0(D,X,q,Y,re,oe,!0,s)}}
s.push(D-q*re,X-Y*re);s.push(D+q*oe,X+Y*oe);for(let ve=1;ve<v-1;++ve){D=a[(ve-1)*2];X=a[(ve-1)*2+1];U=a[ve*2];L=a[ve*2+1];ie=a[(ve+1)*2];ne=a[(ve+1)*2+1];q=-(X-L);Y=D-U;Ce=Math.sqrt(q*q+Y*Y);q/=Ce;Y/=Ce;q*=P;Y*=P;se=-(L-ne);ee=U-ie;Ce=Math.sqrt(se*se+ee*ee);se/=Ce;ee/=Ce;se*=P;ee*=P;let It=U-D;let pa=X-L;let ea=U-ie;let ga=ne-L;let Ui=It*ea+pa*ga;let Vt=pa*ea-ga*It;let ma=Vt<0;if(Math.abs(Vt)<.001*Math.abs(Ui)){s.push(U-q*re,L-Y*re);s.push(U+q*oe,L+Y*oe);if(Ui>=0){if(e.join==="round"){T+=ka(U,L,U-q*re,L-Y*re,U-se*re,L-ee*re,s,!1)+4}else{T+=2}
s.push(U-se*oe,L-ee*oe);s.push(U+se*re,L+ee*re)}
continue}
let _a=(-q+D)*(-Y+L)-(-q+U)*(-Y+X);let Ga=(-se+ie)*(-ee+L)-(-se+U)*(-ee+ne);let ya=(It*Ga-ea*_a)/Vt;let xa=(ga*_a-pa*Ga)/Vt;let Ba=(ya-U)*(ya-U)+(xa-L)*(xa-L);let Gt=U+(ya-U)*re;let Bt=L+(xa-L)*re;let Ft=U-(ya-U)*oe;let Dt=L-(xa-L)*oe;let Li=Math.min(It*It+pa*pa,ea*ea+ga*ga);let ai=ma?re:oe;let ii=Li+ai*ai*C;if(Ba<=ii){if(e.join==="bevel"||Ba/C>B){if(ma){s.push(Gt,Bt);s.push(U+q*oe,L+Y*oe);s.push(Gt,Bt);s.push(U+se*oe,L+ee*oe)}else{s.push(U-q*re,L-Y*re);s.push(Ft,Dt);s.push(U-se*re,L-ee*re);s.push(Ft,Dt)}
T+=2}else if(e.join==="round"){if(ma){s.push(Gt,Bt);s.push(U+q*oe,L+Y*oe);T+=ka(U,L,U+q*oe,L+Y*oe,U+se*oe,L+ee*oe,s,!0)+4;s.push(Gt,Bt);s.push(U+se*oe,L+ee*oe)}else{s.push(U-q*re,L-Y*re);s.push(Ft,Dt);T+=ka(U,L,U-q*re,L-Y*re,U-se*re,L-ee*re,s,!1)+4;s.push(U-se*re,L-ee*re);s.push(Ft,Dt)}}else{s.push(Gt,Bt);s.push(Ft,Dt)}}else{s.push(U-q*re,L-Y*re);s.push(U+q*oe,L+Y*oe);if(e.join==="round"){if(ma){T+=ka(U,L,U+q*oe,L+Y*oe,U+se*oe,L+ee*oe,s,!0)+2}else{T+=ka(U,L,U-q*re,L-Y*re,U-se*re,L-ee*re,s,!1)+2}}else if(e.join==="miter"&&Ba/C<=B){if(ma){s.push(Ft,Dt);s.push(Ft,Dt)}else{s.push(Gt,Bt);s.push(Gt,Bt)}
T+=2}
s.push(U-se*re,L-ee*re);s.push(U+se*oe,L+ee*oe);T+=2}}
D=a[(v-2)*2];X=a[(v-2)*2+1];U=a[(v-1)*2];L=a[(v-1)*2+1];q=-(X-L);Y=D-U;Ce=Math.sqrt(q*q+Y*Y);q/=Ce;Y/=Ce;q*=P;Y*=P;s.push(U-q*re,L-Y*re);s.push(U+q*oe,L+Y*oe);if(!i){if(e.cap==="round"){T+=ka(U-q*(re-oe)*.5,L-Y*(re-oe)*.5,U-q*re,L-Y*re,U+q*oe,L+Y*oe,s,!1)+2}else if(e.cap==="square"){T+=o0(U,L,q,Y,re,oe,!1,s)}}
for(let ve=w;ve<T+w-2;++ve){D=s[ve*2];X=s[ve*2+1];U=s[(ve+1)*2];L=s[(ve+1)*2+1];ie=s[(ve+2)*2];ne=s[(ve+2)*2+1];if(!(Math.abs(D*(L-ne)+U*(ne-X)+ie*(X-L))<1e-8)){r.push(ve,ve+1,ve+2)}}}
function K6(a,e,t,i){if(a.length===0){return}
let r=a[0];let n=a[1];let d=a[a.length-2];let h=a[a.length-1];let l=e||Math.abs(r-d)<1e-4&&Math.abs(n-h)<1e-4;let p=a.length/2;let _=t.length/2;for(let m=0;m<p;m++){t.push(a[m*2]);t.push(a[m*2+1])}
for(let m=0;m<p-1;m++){i.push(_+m,_+m+1)}
if(l){i.push(_+p-1,_)}}
var Oo={exports:{}};Oo.exports=Io;function Io(a,e,t){t=t||2;var i=e&&e.length;var s=i?e[0]*t:a.length;var r=Kp(a,0,s,t,!0);var n=[];if(!r||r.next===r.prev){return n}
var d;var h;var l;var f;var p;var _;var m;if(i){r=eg(a,e,r,t)}
if(a.length>80*t){d=l=a[0];h=f=a[1];for(var v=t;v<s;v+=t){p=a[v];_=a[v+1];if(p<d){d=p}
if(_<h){h=_}
if(p>l){l=p}
if(_>f){f=_}}
m=Math.max(l-d,f-h);m=m!==0?32767/m:0}
Gs(r,n,t,d,h,m,0);return n}
function Kp(a,e,t,i,s){var r;var n;if(s===Yd(a,e,t,i)>0){for(r=e;r<t;r+=i){n=c0(r,a[r],a[r+1],n)}}else{for(r=t-i;r>=e;r-=i){n=c0(r,a[r],a[r+1],n)}}
if(n&&n.x===n.next.x&&n.y===n.next.y){Fs(n);n=n.next}
return n}
function $a(a,e){if(!a){return a}
if(!e){e=a}
var t=a;var i;do{i=!1;if(!t.steiner&&(t.x===t.next.x&&t.y===t.next.y||(t.y-t.prev.y)*(t.next.x-t.x)-(t.x-t.prev.x)*(t.next.y-t.y)===0)){Fs(t);t=e=t.prev;if(t===t.next){break}
i=!0}else{t=t.next}}while(i||t!==e);return e}
function Gs(a,e,t,i,s,r,n){if(a){if(!n&&r){rg(a,i,s,r)}
var d=a;var h;for(var l;a.prev!==a.next;){h=a.prev;l=a.next;if(r?Z6(a,i,s,r):q6(a)){e.push(h.i/t|0);e.push(a.i/t|0);e.push(l.i/t|0);Fs(a);a=l.next;d=l.next;continue}
a=l;if(a===d){if(n){if(n===1){a=Q6($a(a),e,t);Gs(a,e,t,i,s,r,2)}else if(n===2){J6(a,e,t,i,s,r)}}else{Gs($a(a),e,t,i,s,r,1)}
break}}}}
function q6(a){var e=a.prev;var i=a.next;if((a.y-e.y)*(i.x-a.x)-(a.x-e.x)*(i.y-a.y)>=0){return!1}
var s=e.x;var r=a.x;var n=i.x;var d=e.y;var h=a.y;var l=i.y;var f=s<r?s<n?s:n:r<n?r:n;var p=d<h?d<l?d:l:h<l?h:l;var _=s>r?s>n?s:n:r>n?r:n;var m=d>h?d>l?d:l:h>l?h:l;for(var v=i.next;v!==e;){if(v.x>=f&&v.x<=_&&v.y>=p&&v.y<=m&&(n-v.x)*(d-v.y)>=(s-v.x)*(l-v.y)&&(s-v.x)*(h-v.y)>=(r-v.x)*(d-v.y)&&(r-v.x)*(l-v.y)>=(n-v.x)*(h-v.y)&&(v.y-v.prev.y)*(v.next.x-v.x)-(v.x-v.prev.x)*(v.next.y-v.y)>=0){return!1}
v=v.next}
return!0}
function Z6(a,e,t,i){var s=a.prev;var n=a.next;if((a.y-s.y)*(n.x-a.x)-(a.x-s.x)*(n.y-a.y)>=0){return!1}
var d=s.x;var h=a.x;var l=n.x;var f=s.y;var p=a.y;var _=n.y;var m=d<h?d<l?d:l:h<l?h:l;var v=f<p?f<_?f:_:p<_?p:_;var T=d>h?d>l?d:l:h>l?h:l;var w=f>p?f>_?f:_:p>_?p:_;var P=Vd(m,v,e,t,i);var C=Vd(T,w,e,t,i);var B=a.prevZ;for(var D=a.nextZ;B&&B.z>=P&&D&&D.z<=C;){if(B.x>=m&&B.x<=T&&B.y>=v&&B.y<=w&&B!==s&&B!==n&&(l-B.x)*(f-B.y)>=(d-B.x)*(_-B.y)&&(d-B.x)*(p-B.y)>=(h-B.x)*(f-B.y)&&(h-B.x)*(_-B.y)>=(l-B.x)*(p-B.y)&&(B.y-B.prev.y)*(B.next.x-B.x)-(B.x-B.prev.x)*(B.next.y-B.y)>=0||(B=B.prevZ,D.x>=m&&D.x<=T&&D.y>=v&&D.y<=w&&D!==s&&D!==n&&(l-D.x)*(f-D.y)>=(d-D.x)*(_-D.y)&&(d-D.x)*(p-D.y)>=(h-D.x)*(f-D.y)&&(h-D.x)*(_-D.y)>=(l-D.x)*(p-D.y)&&(D.y-D.prev.y)*(D.next.x-D.x)-(D.x-D.prev.x)*(D.next.y-D.y)>=0)){return!1}
D=D.nextZ}
for(;B&&B.z>=P;){if(B.x>=m&&B.x<=T&&B.y>=v&&B.y<=w&&B!==s&&B!==n&&(l-B.x)*(f-B.y)>=(d-B.x)*(_-B.y)&&(d-B.x)*(p-B.y)>=(h-B.x)*(f-B.y)&&(h-B.x)*(_-B.y)>=(l-B.x)*(p-B.y)&&(B.y-B.prev.y)*(B.next.x-B.x)-(B.x-B.prev.x)*(B.next.y-B.y)>=0){return!1}
B=B.prevZ}
for(;D&&D.z<=C;){if(D.x>=m&&D.x<=T&&D.y>=v&&D.y<=w&&D!==s&&D!==n&&(l-D.x)*(f-D.y)>=(d-D.x)*(_-D.y)&&(d-D.x)*(p-D.y)>=(h-D.x)*(f-D.y)&&(h-D.x)*(_-D.y)>=(l-D.x)*(p-D.y)&&(D.y-D.prev.y)*(D.next.x-D.x)-(D.x-D.prev.x)*(D.next.y-D.y)>=0){return!1}
D=D.nextZ}
return!0}
function Q6(a,e,t){var i=a;do{var s=i.prev;var r=i.next.next;if(!(s.x===r.x&&s.y===r.y)&&qp(s,i,i.next,r)&&((s.y-s.prev.y)*(s.next.x-s.x)-(s.x-s.prev.x)*(s.next.y-s.y)<0?(r.y-s.y)*(s.next.x-r.x)-(r.x-s.x)*(s.next.y-r.y)>=0&&(s.prev.y-s.y)*(r.x-s.prev.x)-(s.prev.x-s.x)*(r.y-s.prev.y)>=0:(r.y-s.y)*(s.prev.x-r.x)-(r.x-s.x)*(s.prev.y-r.y)<0||(s.next.y-s.y)*(r.x-s.next.x)-(s.next.x-s.x)*(r.y-s.next.y)<0)&&((r.y-r.prev.y)*(r.next.x-r.x)-(r.x-r.prev.x)*(r.next.y-r.y)<0?(s.y-r.y)*(r.next.x-s.x)-(s.x-r.x)*(r.next.y-s.y)>=0&&(r.prev.y-r.y)*(s.x-r.prev.x)-(r.prev.x-r.x)*(s.y-r.prev.y)>=0:(s.y-r.y)*(r.prev.x-s.x)-(s.x-r.x)*(r.prev.y-s.y)<0||(r.next.y-r.y)*(s.x-r.next.x)-(r.next.x-r.x)*(s.y-r.next.y)<0)){e.push(s.i/t|0);e.push(i.i/t|0);e.push(r.i/t|0);Fs(i);Fs(i.next);i=a=r}
i=i.next}while(i!==a);return $a(i)}
function J6(a,e,t,i,s,r){var n=a;do{for(var d=n.next.next;d!==n.prev;){if(n.i!==d.i&&n.next.i!==d.i&&n.prev.i!==d.i&&!dg(n,d)&&(((n.y-n.prev.y)*(n.next.x-n.x)-(n.x-n.prev.x)*(n.next.y-n.y)<0?(d.y-n.y)*(n.next.x-d.x)-(d.x-n.x)*(n.next.y-d.y)>=0&&(n.prev.y-n.y)*(d.x-n.prev.x)-(n.prev.x-n.x)*(d.y-n.prev.y)>=0:(d.y-n.y)*(n.prev.x-d.x)-(d.x-n.x)*(n.prev.y-d.y)<0||(n.next.y-n.y)*(d.x-n.next.x)-(n.next.x-n.x)*(d.y-n.next.y)<0)&&((d.y-d.prev.y)*(d.next.x-d.x)-(d.x-d.prev.x)*(d.next.y-d.y)<0?(n.y-d.y)*(d.next.x-n.x)-(n.x-d.x)*(d.next.y-n.y)>=0&&(d.prev.y-d.y)*(n.x-d.prev.x)-(d.prev.x-d.x)*(n.y-d.prev.y)>=0:(n.y-d.y)*(d.prev.x-n.x)-(n.x-d.x)*(d.prev.y-n.y)<0||(d.next.y-d.y)*(n.x-d.next.x)-(d.next.x-d.x)*(n.y-d.next.y)<0)&&hg(n,d)&&((n.y-n.prev.y)*(d.prev.x-n.x)-(n.x-n.prev.x)*(d.prev.y-n.y)||(d.prev.y-n.y)*(d.x-d.prev.x)-(d.prev.x-n.x)*(d.y-d.prev.y))||n.x===d.x&&n.y===d.y&&(n.y-n.prev.y)*(n.next.x-n.x)-(n.x-n.prev.x)*(n.next.y-n.y)>0&&(d.y-d.prev.y)*(d.next.x-d.x)-(d.x-d.prev.x)*(d.next.y-d.y)>0)){var h=Zp(n,d);n=$a(n,n.next);h=$a(h,h.next);Gs(n,e,t,i,s,r,0);Gs(h,e,t,i,s,r,0);return}
d=d.next}
n=n.next}while(n!==a);}
function eg(a,e,t,i){var s=[];var r;var n;var d;var h;var l;r=0;for(n=e.length;r<n;r++){d=e[r]*i;h=r<n-1?e[r+1]*i:a.length;l=Kp(a,d,h,i,!1);if(l===l.next){l.steiner=!0}
s.push(og(l))}
s.sort(tg);for(r=0;r<s.length;r++){t=ag(s[r],t)}
return t}
function tg(a,e){return a.x-e.x}
function ag(a,e){var t=ig(a,e);if(!t){return e}
var i=Zp(t,a);$a(i,i.next);return $a(t,t.next)}
function ig(a,e){var t=e;var i=a.x;var s=a.y;var r=-Infinity;var n;do{if(s<=t.y&&s>=t.next.y&&t.next.y!==t.y){var d=t.x+(s-t.y)*(t.next.x-t.x)/(t.next.y-t.y);if(d<=i&&d>r&&(r=d,n=t.x<t.next.x?t:t.next,d===i)){return n}}
t=t.next}while(t!==e);if(!n){return null}
var h=n;var l=n.x;var f=n.y;var p=Infinity;var _;t=n;do{if(i>=t.x&&t.x>=l&&i!==t.x&&((s<f?r:i)-t.x)*(s-t.y)>=((s<f?i:r)-t.x)*(s-t.y)&&((s<f?i:r)-t.x)*(f-t.y)>=(l-t.x)*(s-t.y)&&(l-t.x)*(s-t.y)>=((s<f?r:i)-t.x)*(f-t.y)){_=Math.abs(s-t.y)/(i-t.x);if(((t.y-t.prev.y)*(t.next.x-t.x)-(t.x-t.prev.x)*(t.next.y-t.y)<0?(a.y-t.y)*(t.next.x-a.x)-(a.x-t.x)*(t.next.y-a.y)>=0&&(t.prev.y-t.y)*(a.x-t.prev.x)-(t.prev.x-t.x)*(a.y-t.prev.y)>=0:(a.y-t.y)*(t.prev.x-a.x)-(a.x-t.x)*(t.prev.y-a.y)<0||(t.next.y-t.y)*(a.x-t.next.x)-(t.next.x-t.x)*(a.y-t.next.y)<0)&&(_<p||_===p&&(t.x>n.x||t.x===n.x&&(n.y-n.prev.y)*(t.prev.x-n.x)-(n.x-n.prev.x)*(t.prev.y-n.y)<0&&(n.y-t.next.y)*(n.next.x-n.x)-(n.x-t.next.x)*(n.next.y-n.y)<0))){n=t;p=_}}
t=t.next}while(t!==h);return n}
function rg(a,e,t,i){var s=a;do{if(s.z===0){s.z=Vd(s.x,s.y,e,t,i)}
s.prevZ=s.prev;s.nextZ=s.next;s=s.next}while(s!==a);s.prevZ.nextZ=null;s.prevZ=null;ng(s)}
function ng(a){var e;var t;var i;var s;var r;var n;var d;var h;var l=1;do{t=a;a=null;r=null;for(n=0;t;){n++;i=t;d=0;for(e=0;e<l&&(d++,i=i.nextZ,!!i);e++){}
for(h=l;d>0||h>0&&i;){if(d!==0&&(h===0||!i||t.z<=i.z)){s=t;t=t.nextZ;d--}else{s=i;i=i.nextZ;h--}
if(r){r.nextZ=s}else{a=s}
s.prevZ=r;r=s}
t=i}
r.nextZ=null;l*=2}while(n>1);return a}
function Vd(a,e,t,i,s){a=(a-t)*s|0;e=(e-i)*s|0;a=(a|a<<8)&16711935;a=(a|a<<4)&252645135;a=(a|a<<2)&858993459;a=(a|a<<1)&1431655765;e=(e|e<<8)&16711935;e=(e|e<<4)&252645135;e=(e|e<<2)&858993459;e=(e|e<<1)&1431655765;return a|e<<1}
function og(a){var e=a;var t=a;do{if(e.x<t.x||e.x===t.x&&e.y<t.y){t=e}
e=e.next}while(e!==a);return t}
function qp(a,e,t,i){var s=(e.y-a.y)*(t.x-e.x)-(e.x-a.x)*(t.y-e.y)>0?1:(e.y-a.y)*(t.x-e.x)-(e.x-a.x)*(t.y-e.y)<0?-1:0;var r=(e.y-a.y)*(i.x-e.x)-(e.x-a.x)*(i.y-e.y)>0?1:(e.y-a.y)*(i.x-e.x)-(e.x-a.x)*(i.y-e.y)<0?-1:0;var n=(i.y-t.y)*(a.x-i.x)-(i.x-t.x)*(a.y-i.y)>0?1:(i.y-t.y)*(a.x-i.x)-(i.x-t.x)*(a.y-i.y)<0?-1:0;var d=(i.y-t.y)*(e.x-i.x)-(i.x-t.x)*(e.y-i.y)>0?1:(i.y-t.y)*(e.x-i.x)-(i.x-t.x)*(e.y-i.y)<0?-1:0;return!!(s!==r&&n!==d||s===0&&t.x<=Math.max(a.x,e.x)&&t.x>=Math.min(a.x,e.x)&&t.y<=Math.max(a.y,e.y)&&t.y>=Math.min(a.y,e.y)||r===0&&i.x<=Math.max(a.x,e.x)&&i.x>=Math.min(a.x,e.x)&&i.y<=Math.max(a.y,e.y)&&i.y>=Math.min(a.y,e.y)||n===0&&a.x<=Math.max(t.x,i.x)&&a.x>=Math.min(t.x,i.x)&&a.y<=Math.max(t.y,i.y)&&a.y>=Math.min(t.y,i.y)||d===0&&e.x<=Math.max(t.x,i.x)&&e.x>=Math.min(t.x,i.x)&&e.y<=Math.max(t.y,i.y)&&e.y>=Math.min(t.y,i.y))}
function dg(a,e){var t=a;do{if(t.i!==a.i&&t.next.i!==a.i&&t.i!==e.i&&t.next.i!==e.i&&qp(t,t.next,a,e)){return!0}
t=t.next}while(t!==a);return!1}
function hg(a,e){var t=a;var i=!1;var s=(a.x+e.x)/2;var r=(a.y+e.y)/2;do{if(t.y>r!=t.next.y>r&&t.next.y!==t.y&&s<(t.next.x-t.x)*(r-t.y)/(t.next.y-t.y)+t.x){i=!i}
t=t.next}while(t!==a);return i}
function Zp(a,e){var t=new Wd(a.i,a.x,a.y);var i=new Wd(e.i,e.x,e.y);var s=a.next;var r=e.prev;a.next=e;e.prev=a;t.next=s;s.prev=t;i.next=t;t.prev=i;r.next=i;i.prev=r;return i}
function c0(a,e,t,i){var s=new Wd(a,e,t);if(i){s.next=i.next;s.prev=i;i.next.prev=s;i.next=s}else{s.prev=s;s.next=s}
return s}
function Fs(a){a.next.prev=a.prev;a.prev.next=a.next;if(a.prevZ){a.prevZ.nextZ=a.nextZ}
if(a.nextZ){a.nextZ.prevZ=a.prevZ}}
function Wd(a,e,t){this.i=a;this.x=e;this.y=t;this.prev=null;this.next=null;this.z=0;this.prevZ=null;this.nextZ=null;this.steiner=!1}
Io.deviation=function(a,e,t,i){var s=e&&e.length;var r=s?e[0]*t:a.length;var n=Math.abs(Yd(a,0,r,t));if(s){var d=0;for(var h=e.length;d<h;d++){var l=e[d]*t;var f=d<h-1?e[d+1]*t:a.length;n-=Math.abs(Yd(a,l,f,t))}}
var p=0;for(d=0;d<i.length;d+=3){var _=i[d]*t;var m=i[d+1]*t;var v=i[d+2]*t;p+=Math.abs((a[_]-a[v])*(a[m+1]-a[_+1])-(a[_]-a[m])*(a[v+1]-a[_+1]))}
return n===0&&p===0?0:Math.abs((p-n)/n)};function Yd(a,e,t,i){var s=0;var r=e;for(var n=t-i;r<t;r+=i){s+=(a[n]-a[r])*(a[r+1]+a[n+1]);n=r}
return s}
Io.flatten=function(a){var e=a[0][0].length;var t={vertices:[],holes:[],dimensions:e};var i=0;for(var s=0;s<a.length;s++){for(var r=0;r<a[s].length;r++){for(var n=0;n<e;n++){t.vertices.push(a[s][r][n])}}
if(s>0){i+=a[s-1].length;t.holes.push(i)}}
return t};var lg=Oo.exports;var ug=lg&&lg.__esModule&&Object.prototype.hasOwnProperty.call(lg,"default")?lg.default:lg;function Qp(a,e,t,i,s,r,n){let d=ug(a,e,2);if(!d){return}
for(let l=0;l<d.length;l+=3){r[n++]=d[l]+s;r[n++]=d[l+1]+s;r[n++]=d[l+2]+s}
let h=s*i;for(let l=0;l<a.length;l+=2){t[h]=a[l];t[h+1]=a[l+1];h+=i}}
var fg=[];var bg={extension:{type:I.ShapeBuilder,name:"polygon"},build(a,e){for(let t=0;t<a.points.length;t++){e[t]=a.points[t]}
return e},triangulate(a,e,t,i,s,r){Qp(a,fg,e,t,i,s,r)}};var pg={extension:{type:I.ShapeBuilder,name:"rectangle"},build(a,e){let i=a.x;let s=a.y;let r=a.width;let n=a.height;if(r>=0&&n>=0){e[0]=i;e[1]=s;e[2]=i+r;e[3]=s;e[4]=i+r;e[5]=s+n;e[6]=i;e[7]=s+n}
return e},triangulate(a,e,t,i,s,r){let n=0;i*=t;e[i+n]=a[0];e[i+n+1]=a[1];n+=t;e[i+n]=a[2];e[i+n+1]=a[3];n+=t;e[i+n]=a[6];e[i+n+1]=a[7];n+=t;e[i+n]=a[4];e[i+n+1]=a[5];n+=t;let d=i/t;s[r++]=d;s[r++]=d+1;s[r++]=d+2;s[r++]=d+1;s[r++]=d+3;s[r++]=d+2}};var gg={extension:{type:I.ShapeBuilder,name:"triangle"},build(a,e){e[0]=a.x;e[1]=a.y;e[2]=a.x2;e[3]=a.y2;e[4]=a.x3;e[5]=a.y3;return e},triangulate(a,e,t,i,s,r){let n=0;i*=t;e[i+n]=a[0];e[i+n+1]=a[1];n+=t;e[i+n]=a[2];e[i+n+1]=a[3];n+=t;e[i+n]=a[4];e[i+n+1]=a[5];let d=i/t;s[r++]=d;s[r++]=d+1;s[r++]=d+2}};var Bo={};fe.handleByMap(I.ShapeBuilder,Bo);fe.add(pg,bg,gg,Is,V6,W6);var mg=new we();function _g(a,e){let{geometryData:t,batches:i}=e;i.length=0;t.indices.length=0;t.vertices.length=0;t.uvs.length=0;for(let s=0;s<a.instructions.length;s++){let r=a.instructions[s];if(r.action==="texture"){yg(r.data,i,t)}else if(r.action==="fill"||r.action==="stroke"){let n=r.action==="stroke";let d=r.data.path.shapePath;let h=r.data.style;let l=r.data.hole;if(n&&l){d0(l.shapePath,h,null,!0,i,t)}
d0(d,h,l,n,i,t)}}}
function yg(a,e,t){let{vertices:i,uvs:s,indices:r}=t;let n=r.length;let d=i.length/2;let h=[];let l=Bo.rectangle;let p=a.image;mg.x=a.dx;mg.y=a.dy;mg.width=a.dw;mg.height=a.dh;let _=a.transform;l.build(mg,h);if(_){Yp(h,_)}
l.triangulate(h,i,2,d,r,n);let m=p.uvs;s.push(m.x0,m.y0,m.x1,m.y1,m.x3,m.y3,m.x2,m.y2);let v=me.get(Os);v.indexOffset=n;v.indexSize=r.length-n;v.attributeOffset=d;v.attributeSize=i.length/2-d;v.baseColor=a.style;v.alpha=a.alpha;v.texture=p;v.geometryData=t;e.push(v)}
function d0(a,e,t,i,s,r){let{vertices:n,uvs:d,indices:h}=r;let l=a.shapePrimitives.length-1;a.shapePrimitives.forEach(({shape:f,transform:p},_)=>{var m;let v=h.length;let T=n.length/2;let w=[];let P=Bo[f.type];let C="triangle-list";P.build(f,w);if(p){Yp(w,p)}
if(i){let U=(m=f.closePath)!=null?m:!0;if(e.pixelLine){K6(w,U,n,h);C="line-list"}else{$6(w,e,!1,U,n,h)}}else if(t&&l===_){let U=[];let L=w.slice();xg(t.shapePath).forEach(ie=>{U.push(L.length/2);L.push(...ie)});Qp(L,U,n,2,T,h,v)}else{P.triangulate(w,n,2,T,h,v)}
let B=d.length/2;let D=e.texture;if(D!==W.WHITE){let U=e.matrix;if(U){if(p){U.append(p.clone().invert())}
k6(n,2,T,d,B,2,n.length/2-T,U)}}else{U6(d,B,2,n.length/2-T)}
let X=me.get(Os);X.indexOffset=v;X.indexSize=h.length-v;X.attributeOffset=T;X.attributeSize=n.length/2-T;X.baseColor=e.color;X.alpha=e.alpha;X.texture=D;X.geometryData=r;X.topology=C;s.push(X)})}
function xg(a){if(!a){return[]}
let e=a.shapePrimitives;let t=[];for(let i=0;i<e.length;i++){let s=e[i].shape;let r=[];Bo[s.type].build(s,r);t.push(r)}
return t}
var $d=class{constructor(){this.batches=[];this.geometryData={vertices:[],uvs:[],indices:[]}}};var Kd=class{constructor(){this.batcher=new Vp();this.instructions=new Nr()}
init(){this.instructions.reset()}
get geometry(){return this.batcher.geometry}};var qd=class Zd{constructor(e){this._gpuContextHash={};this._graphicsDataContextHash=Object.create(null);e.renderableGC.addManagedHash(this,"_gpuContextHash");e.renderableGC.addManagedHash(this,"_graphicsDataContextHash")}
init(e){var t;Zd.defaultOptions.bezierSmoothness=(t=e?.bezierSmoothness)!=null?t:Zd.defaultOptions.bezierSmoothness}
getContextRenderData(e){return this._graphicsDataContextHash[e.uid]||this._initContextRenderData(e)}
updateGpuContext(e){let t=this._gpuContextHash[e.uid]||this._initContext(e);if(e.dirty){if(t){this._cleanGraphicsContextData(e)}else{t=this._initContext(e)}
_g(e,t);let i=e.batchMode;if(e.customShader||i==="no-batch"){t.isBatchable=!1}else if(i==="auto"){t.isBatchable=t.geometryData.vertices.length<400}
e.dirty=!1}
return t}
getGpuContext(e){return this._gpuContextHash[e.uid]||this._initContext(e)}
_initContextRenderData(e){let t=me.get(Kd);let{batches:i,geometryData:s}=this._gpuContextHash[e.uid];let r=s.vertices.length;let n=s.indices.length;for(let f=0;f<i.length;f++){i[f].applyTransform=!1}
let d=t.batcher;d.ensureAttributeBuffer(r);d.ensureIndexBuffer(n);d.begin();for(let f=0;f<i.length;f++){let p=i[f];d.add(p)}
d.finish(t.instructions);let h=d.geometry;h.indexBuffer.setDataWithSize(d.indexBuffer,d.indexSize,!0);h.buffers[0].setDataWithSize(d.attributeBuffer.float32View,d.attributeSize,!0);let l=d.batches;for(let f=0;f<l.length;f++){let p=l[f];p.bindGroup=pl(p.textures.textures,p.textures.count)}
this._graphicsDataContextHash[e.uid]=t;return t}
_initContext(e){let t=new $d();t.context=e;this._gpuContextHash[e.uid]=t;e.on("destroy",this.onGraphicsContextDestroy,this);return this._gpuContextHash[e.uid]}
onGraphicsContextDestroy(e){this._cleanGraphicsContextData(e);e.off("destroy",this.onGraphicsContextDestroy,this);this._gpuContextHash[e.uid]=null}
_cleanGraphicsContextData(e){let t=this._gpuContextHash[e.uid];if(!t.isBatchable){if(this._graphicsDataContextHash[e.uid]){me.return(this.getContextRenderData(e));this._graphicsDataContextHash[e.uid]=null}}
if(t.batches){t.batches.forEach(i=>{me.return(i)})}}
destroy(){for(let e in this._gpuContextHash)if(this._gpuContextHash[e]){this.onGraphicsContextDestroy(this._gpuContextHash[e].context)}}};qd.extension={type:[I.WebGLSystem,I.WebGPUSystem,I.CanvasSystem],name:"graphicsContext"};qd.defaultOptions={bezierSmoothness:.5};var vg={normal:0,add:1,multiply:2,screen:3,overlay:4,erase:5,"normal-npm":6,"add-npm":7,"screen-npm":8,min:9,max:10};var Qd=class Jp{constructor(){this.data=0;this.blendMode="normal";this.polygonOffset=0;this.blend=!0;this.depthMask=!0}
get blend(){return!!(this.data&1)}
set blend(e){if(!!(this.data&1)!==e){this.data^=1}}
get offsets(){return!!(this.data&2)}
set offsets(e){if(!!(this.data&2)!==e){this.data^=2}}
set cullMode(e){if(e==="none"){this.culling=!1;return}
this.culling=!0;this.clockwiseFrontFace=e==="front"}
get cullMode(){return this.culling?this.clockwiseFrontFace?"front":"back":"none"}
get culling(){return!!(this.data&4)}
set culling(e){if(!!(this.data&4)!==e){this.data^=4}}
get depthTest(){return!!(this.data&8)}
set depthTest(e){if(!!(this.data&8)!==e){this.data^=8}}
get depthMask(){return!!(this.data&32)}
set depthMask(e){if(!!(this.data&32)!==e){this.data^=32}}
get clockwiseFrontFace(){return!!(this.data&16)}
set clockwiseFrontFace(e){if(!!(this.data&16)!==e){this.data^=16}}
get blendMode(){return this._blendMode}
set blendMode(e){this.blend=e!=="none";this._blendMode=e;this._blendModeId=vg[e]||0}
get polygonOffset(){return this._polygonOffset}
set polygonOffset(e){this.offsets=!!e;this._polygonOffset=e}
static for2d(){let e=new Jp();e.depthTest=!1;e.blend=!0;return e}};Qd.default2d=Qd.for2d();function Ws(a,e,t){let i=(a>>24&255)/255;e[t++]=(a&255)/255*i;e[t++]=(a>>8&255)/255*i;e[t++]=(a>>16&255)/255*i;e[t++]=i}
var Jr=class{constructor(e,t){this.state=Qd.for2d();this._graphicsBatchesHash=Object.create(null);this._destroyRenderableBound=this.destroyRenderable.bind(this);this.renderer=e;this._adaptor=t;this._adaptor.init();this.renderer.renderableGC.addManagedHash(this,"_graphicsBatchesHash")}
validateRenderable(e){let t=e.context;let i=!!this._graphicsBatchesHash[e.uid];let s=this.renderer.graphicsContext.updateGpuContext(t);return!!(s.isBatchable||i!==s.isBatchable)}
addRenderable(e,t){let i=this.renderer.graphicsContext.updateGpuContext(e.context);if(e.didViewUpdate){this._rebuild(e)}
if(i.isBatchable){this._addToBatcher(e,t)}else{this.renderer.renderPipes.batch.break(t);t.add(e)}}
updateRenderable(e){let t=this._graphicsBatchesHash[e.uid];if(t){for(let i=0;i<t.length;i++){let s=t[i];s._batcher.updateElement(s)}}}
destroyRenderable(e){if(this._graphicsBatchesHash[e.uid]){this._removeBatchForRenderable(e.uid)}
e.off("destroyed",this._destroyRenderableBound)}
execute(e){if(!e.isRenderable){return}
let t=this.renderer;let i=e.context;if(!t.graphicsContext.getGpuContext(i).batches.length){return}
let s=i.customShader||this._adaptor.shader;this.state.blendMode=e.groupBlendMode;let r=s.resources.localUniforms.uniforms;r.uTransformMatrix=e.groupTransform;r.uRound=t._roundPixels|e._roundPixels;Ws(e.groupColorAlpha,r.uColor,0);this._adaptor.execute(this,e)}
_rebuild(e){let t=!!this._graphicsBatchesHash[e.uid];let i=this.renderer.graphicsContext.updateGpuContext(e.context);if(t){this._removeBatchForRenderable(e.uid)}
if(i.isBatchable){this._initBatchesForRenderable(e)}
e.batched=i.isBatchable}
_addToBatcher(e,t){let i=this.renderer.renderPipes.batch;let s=this._getBatchesForRenderable(e);for(let r=0;r<s.length;r++){let n=s[r];i.addToBatch(n,t)}}
_getBatchesForRenderable(e){return this._graphicsBatchesHash[e.uid]||this._initBatchesForRenderable(e)}
_initBatchesForRenderable(e){let t=e.context;let i=this.renderer.graphicsContext.getGpuContext(t);let s=this.renderer._roundPixels|e._roundPixels;let r=i.batches.map(n=>{let d=me.get(Os);n.copyTo(d);d.renderable=e;d.roundPixels=s;return d});if(this._graphicsBatchesHash[e.uid]===undefined){e.on("destroyed",this._destroyRenderableBound)}
this._graphicsBatchesHash[e.uid]=r;return r}
_removeBatchForRenderable(e){this._graphicsBatchesHash[e].forEach(t=>{me.return(t)});this._graphicsBatchesHash[e]=null}
destroy(){this.renderer=null;this._adaptor.destroy();this._adaptor=null;this.state=null;for(let e in this._graphicsBatchesHash)this._removeBatchForRenderable(e);this._graphicsBatchesHash=null}};Jr.extension={type:[I.WebGLPipes,I.WebGPUPipes,I.CanvasPipes],name:"graphics"};fe.add(Jr);fe.add(qd);var Ds=class{constructor(){this.batcherName="default";this.packAsQuad=!1;this.indexOffset=0;this.attributeOffset=0;this.roundPixels=0;this._batcher=null;this._batch=null;this._uvUpdateId=-1;this._textureMatrixUpdateId=-1}
get blendMode(){return this.renderable.groupBlendMode}
get topology(){return this._topology||this.geometry.topology}
set topology(e){this._topology=e}
reset(){this.renderable=null;this.texture=null;this._batcher=null;this._batch=null;this.geometry=null;this._uvUpdateId=-1;this._textureMatrixUpdateId=-1}
setTexture(e){if(this.texture!==e){this.texture=e;this._textureMatrixUpdateId=-1}}
get uvs(){let e=this.geometry.getBuffer("aUV");let t=e.data;let i=t;let s=this.texture.textureMatrix;if(!s.isSimple){i=this._transformedUvs;if(this._textureMatrixUpdateId!==s._updateID||this._uvUpdateId!==e._updateID){if(!i||i.length<t.length){i=this._transformedUvs=new Float32Array(t.length)}
this._textureMatrixUpdateId=s._updateID;this._uvUpdateId=e._updateID;s.multiplyUvs(t,i)}}
return i}
get positions(){return this.geometry.positions}
get indices(){return this.geometry.indices}
get color(){return this.renderable.groupColorAlpha}
get groupTransform(){return this.renderable.groupTransform}
get attributeSize(){return this.geometry.positions.length/2}
get indexSize(){return this.geometry.indices.length}};var en=class{constructor(e,t){this.localUniforms=new jp({uTransformMatrix:{value:new ae(),type:"mat3x3<f32>"},uColor:{value:new Float32Array([1,1,1,1]),type:"vec4<f32>"},uRound:{value:0,type:"f32"}});this.localUniformsBindGroup=new Ht({0:this.localUniforms});this._meshDataHash=Object.create(null);this._gpuBatchableMeshHash=Object.create(null);this._destroyRenderableBound=this.destroyRenderable.bind(this);this.renderer=e;this._adaptor=t;this._adaptor.init();e.renderableGC.addManagedHash(this,"_gpuBatchableMeshHash");e.renderableGC.addManagedHash(this,"_meshDataHash")}
validateRenderable(e){let t=this._getMeshData(e);let i=t.batched;let s=e.batched;t.batched=s;if(i!==s){return!0}
if(s){let r=e._geometry;if(r.indices.length!==t.indexSize||r.positions.length!==t.vertexSize){t.indexSize=r.indices.length;t.vertexSize=r.positions.length;return!0}
let n=this._getBatchableMesh(e);return!n._batcher.checkAndUpdateTexture(n,e.texture)}
return!1}
addRenderable(e,t){let i=this.renderer.renderPipes.batch;let{batched:s}=this._getMeshData(e);if(s){let r=this._getBatchableMesh(e);r.texture=e._texture;r.geometry=e._geometry;i.addToBatch(r,t)}else{i.break(t);t.add(e)}}
updateRenderable(e){if(e.batched){let t=this._gpuBatchableMeshHash[e.uid];t.setTexture(e._texture);t.geometry=e._geometry;t._batcher.updateElement(t)}}
destroyRenderable(e){this._meshDataHash[e.uid]=null;let t=this._gpuBatchableMeshHash[e.uid];if(t){me.return(t);this._gpuBatchableMeshHash[e.uid]=null}
e.off("destroyed",this._destroyRenderableBound)}
execute(e){if(!e.isRenderable){return}
e.state.blendMode=e.texture._source.alphaMode==="no-premultiply-alpha"&&k8[a]||e.groupBlendMode;let t=this.localUniforms;t.uniforms.uTransformMatrix=e.groupTransform;t.uniforms.uRound=this.renderer._roundPixels|e._roundPixels;t.update();Ws(e.groupColorAlpha,t.uniforms.uColor,0);this._adaptor.execute(this,e)}
_getMeshData(e){return this._meshDataHash[e.uid]||this._initMeshData(e)}
_initMeshData(e){var t;var i;this._meshDataHash[e.uid]={batched:e.batched,indexSize:(t=e._geometry.indices)==null?undefined:t.length,vertexSize:(i=e._geometry.positions)==null?undefined:i.length};e.on("destroyed",this._destroyRenderableBound);return this._meshDataHash[e.uid]}
_getBatchableMesh(e){return this._gpuBatchableMeshHash[e.uid]||this._initBatchableMesh(e)}
_initBatchableMesh(e){let t=me.get(Ds);t.renderable=e;t.texture=e._texture;t.transform=e.groupTransform;t.roundPixels=this.renderer._roundPixels|e._roundPixels;this._gpuBatchableMeshHash[e.uid]=t;return t}
destroy(){for(let e in this._gpuBatchableMeshHash)if(this._gpuBatchableMeshHash[e]){me.return(this._gpuBatchableMeshHash[e])}
this._gpuBatchableMeshHash=null;this._meshDataHash=null;this.localUniforms=null;this.localUniformsBindGroup=null;this._adaptor.destroy();this._adaptor=null;this.renderer=null}};en.extension={type:[I.WebGLPipes,I.WebGPUPipes,I.CanvasPipes],name:"mesh"};fe.add(en);var Jd=class{execute(e,t){let i=e.state;let s=e.renderer;let r=t.shader||e.defaultShader;r.resources.uTexture=t.texture._source;r.resources.uniforms=e.localUniforms;let n=s.gl;let d=e.getBuffers(t);s.shader.bind(r);s.state.set(i);s.geometry.bind(d.geometry,r.glProgram);let h=d.geometry.indexBuffer.data.BYTES_PER_ELEMENT===2?n.UNSIGNED_SHORT:n.UNSIGNED_INT;n.drawElements(n.TRIANGLES,t.particleChildren.length*6,h,0)}};function h0(a,e=null){let t=a*6;if(t>65535){if(!e){e=new Uint32Array(t)}}else if(!e){e=new Uint16Array(t)}
if(e.length!==t){throw new Error(`Out buffer length is incorrect, got ${e.length} and expected ${t}`)}
let i=0;for(let s=0;i<t;i+=6,s+=4){e[i+0]=s+0;e[i+1]=s+1;e[i+2]=s+2;e[i+3]=s+0;e[i+4]=s+2;e[i+5]=s+3}
return e}
function l0(a,e){let t=[];t.push(`

var index = 0;

for (let i = 0; i < ps.length; ++i)
{
const p = ps[i];

`);let i=0;for(let r in a){let n=a[r];if(e!==n.dynamic){continue}
t.push(`offset = index + ${i}`);t.push(n.code);let d=Ca(n.format);i+=d.stride/4}
t.push(`
index += stride * 4;
}
`);t.unshift(`
var stride = ${i};
`);let s=t.join(`
`);return new Function("ps","f32v","u32v",s)}
var eh=class{constructor(e){this._size=0;this._generateParticleUpdateCache={};var t;let i=this._size=(t=e.size)!=null?t:1e3;let s=e.properties;let r=0;let n=0;for(let p in s){let _=s[p];let m=Ca(_.format);if(_.dynamic){n+=m.stride}else{r+=m.stride}}
this._dynamicStride=n/4;this._staticStride=r/4;this.staticAttributeBuffer=new Ea(i*4*r);this.dynamicAttributeBuffer=new Ea(i*4*n);this.indexBuffer=h0(i);let d=new qt();let h=0;let l=0;this._staticBuffer=new st({data:new Float32Array(1),label:"static-particle-buffer",shrinkToFit:!1,usage:ye.VERTEX|ye.COPY_DST});this._dynamicBuffer=new st({data:new Float32Array(1),label:"dynamic-particle-buffer",shrinkToFit:!1,usage:ye.VERTEX|ye.COPY_DST});for(let p in s){let _=s[p];let m=Ca(_.format);if(_.dynamic){d.addAttribute(_.attributeName,{buffer:this._dynamicBuffer,stride:this._dynamicStride*4,offset:h*4,format:_.format});h+=m.size}else{d.addAttribute(_.attributeName,{buffer:this._staticBuffer,stride:this._staticStride*4,offset:l*4,format:_.format});l+=m.size}}
d.addIndex(this.indexBuffer);let f=this.getParticleUpdate(s);this._dynamicUpload=f.dynamicUpdate;this._staticUpload=f.staticUpdate;this.geometry=d}
getParticleUpdate(e){let t=Sg(e);return this._generateParticleUpdateCache[t]?this._generateParticleUpdateCache[t]:(this._generateParticleUpdateCache[t]=this.generateParticleUpdate(e),this._generateParticleUpdateCache[t])}
generateParticleUpdate(e){return{dynamicUpdate:l0(e,!0),staticUpdate:l0(e,!1)}}
update(e,t){if(e.length>this._size){t=!0;this._size=Math.max(e.length,this._size*1.5|0);this.staticAttributeBuffer=new Ea(this._size*this._staticStride*4*4);this.dynamicAttributeBuffer=new Ea(this._size*this._dynamicStride*4*4);this.indexBuffer=h0(this._size);this.geometry.indexBuffer.setDataWithSize(this.indexBuffer,this.indexBuffer.byteLength,!0)}
let i=this.dynamicAttributeBuffer;this._dynamicUpload(e,i.float32View,i.uint32View);this._dynamicBuffer.setDataWithSize(this.dynamicAttributeBuffer.float32View,e.length*this._dynamicStride*4,!0);if(t){let s=this.staticAttributeBuffer;this._staticUpload(e,s.float32View,s.uint32View);this._staticBuffer.setDataWithSize(s.float32View,e.length*this._staticStride*4,!0)}}
destroy(){this._staticBuffer.destroy();this._dynamicBuffer.destroy();this.geometry.destroy()}};function Sg(a){let e=[];for(let t in a){let i=a[t];e.push(t,i.code,i.dynamic?"d":"s")}
return e.join("_")}
var th=class extends ht{constructor(){let e=kp.from({vertex:`attribute vec2 aVertex;
attribute vec2 aUV;
attribute vec4 aColor;

attribute vec2 aPosition;
attribute float aRotation;

uniform mat3 uTranslationMatrix;
uniform float uRound;
uniform vec2 uResolution;
uniform vec4 uColor;

varying vec2 vUV;
varying vec4 vColor;

vec2 roundPixels(vec2 position, vec2 targetSize)
{       
return (floor(((position * 0.5 + 0.5) * targetSize) + 0.5) / targetSize) * 2.0 - 1.0;
}

void main(void){
float cosRotation = cos(aRotation);
float sinRotation = sin(aRotation);
float x = aVertex.x * cosRotation - aVertex.y * sinRotation;
float y = aVertex.x * sinRotation + aVertex.y * cosRotation;

vec2 v = vec2(x, y);
v = v + aPosition;

gl_Position = vec4((uTranslationMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

if(uRound == 1.0)
{
gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
}

vUV = aUV;
vColor = vec4(aColor.rgb * aColor.a, aColor.a) * uColor;
}
`,fragment:`varying vec2 vUV;
varying vec4 vColor;

uniform sampler2D uTexture;

void main(void){
vec4 color = texture2D(uTexture, vUV) * vColor;
gl_FragColor = color;
}`});let t=Zt.from({fragment:{source:`
struct ParticleUniforms {
uProjectionMatrix:mat3x3<f32>,
uColor:vec4<f32>,
uResolution:vec2<f32>,
uRoundPixels:f32,
};

@group(0) @binding(0) var<uniform> uniforms: ParticleUniforms;

@group(1) @binding(0) var uTexture: texture_2d<f32>;
@group(1) @binding(1) var uSampler : sampler;

struct VSOutput {
@builtin(position) position: vec4<f32>,
@location(0) uv : vec2<f32>,
@location(1) color : vec4<f32>,
};
@vertex
fn mainVertex(
@location(0) aVertex: vec2<f32>,
@location(1) aPosition: vec2<f32>,
@location(2) aUV: vec2<f32>,
@location(3) aColor: vec4<f32>,
@location(4) aRotation: f32,
) -> VSOutput {

let v = vec2(
aVertex.x * cos(aRotation) - aVertex.y * sin(aRotation),
aVertex.x * sin(aRotation) + aVertex.y * cos(aRotation)
) + aPosition;

let position = vec4((uniforms.uProjectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

let vColor = vec4(aColor.rgb * aColor.a, aColor.a) * uniforms.uColor;

return VSOutput(
position,
aUV,
vColor,
);
}

@fragment
fn mainFragment(
@location(0) uv: vec2<f32>,
@location(1) color: vec4<f32>,
@builtin(position) position: vec4<f32>,
) -> @location(0) vec4<f32> {

var sample = textureSample(uTexture, uSampler, uv) * color;

return sample;
}`,entryPoint:"mainFragment"},vertex:{source:`
struct ParticleUniforms {
uProjectionMatrix:mat3x3<f32>,
uColor:vec4<f32>,
uResolution:vec2<f32>,
uRoundPixels:f32,
};

@group(0) @binding(0) var<uniform> uniforms: ParticleUniforms;

@group(1) @binding(0) var uTexture: texture_2d<f32>;
@group(1) @binding(1) var uSampler : sampler;

struct VSOutput {
@builtin(position) position: vec4<f32>,
@location(0) uv : vec2<f32>,
@location(1) color : vec4<f32>,
};
@vertex
fn mainVertex(
@location(0) aVertex: vec2<f32>,
@location(1) aPosition: vec2<f32>,
@location(2) aUV: vec2<f32>,
@location(3) aColor: vec4<f32>,
@location(4) aRotation: f32,
) -> VSOutput {

let v = vec2(
aVertex.x * cos(aRotation) - aVertex.y * sin(aRotation),
aVertex.x * sin(aRotation) + aVertex.y * cos(aRotation)
) + aPosition;

let position = vec4((uniforms.uProjectionMatrix * vec3(v, 1.0)).xy, 0.0, 1.0);

let vColor = vec4(aColor.rgb * aColor.a, aColor.a) * uniforms.uColor;

return VSOutput(
position,
aUV,
vColor,
);
}

@fragment
fn mainFragment(
@location(0) uv: vec2<f32>,
@location(1) color: vec4<f32>,
@builtin(position) position: vec4<f32>,
) -> @location(0) vec4<f32> {

var sample = textureSample(uTexture, uSampler, uv) * color;

return sample;
}`,entryPoint:"mainVertex"}});super({glProgram:e,gpuProgram:t,resources:{uTexture:W.WHITE.source,uSampler:new lp({}),uniforms:{uTranslationMatrix:{value:new ae(),type:"mat3x3<f32>"},uColor:{value:new gi(16777215),type:"vec4<f32>"},uRound:{value:1,type:"f32"},uResolution:{value:[0,0],type:"vec2<f32>"}}}})}};var tn=class{constructor(e,t){this.state=Qd.for2d();this._gpuBufferHash=Object.create(null);this._destroyRenderableBound=this.destroyRenderable.bind(this);this.localUniforms=new jp({uTranslationMatrix:{value:new ae(),type:"mat3x3<f32>"},uColor:{value:new Float32Array(4),type:"vec4<f32>"},uRound:{value:1,type:"f32"},uResolution:{value:[0,0],type:"vec2<f32>"}});this.renderer=e;this.adaptor=t;this.defaultShader=new th();this.state=Qd.for2d()}
validateRenderable(e){return!1}
addRenderable(e,t){this.renderer.renderPipes.batch.break(t);t.add(e)}
getBuffers(e){return this._gpuBufferHash[e.uid]||this._initBuffer(e)}
_initBuffer(e){this._gpuBufferHash[e.uid]=new eh({size:e.particleChildren.length,properties:e._properties});e.on("destroyed",this._destroyRenderableBound);return this._gpuBufferHash[e.uid]}
updateRenderable(e){}
destroyRenderable(e){this._gpuBufferHash[e.uid].destroy();this._gpuBufferHash[e.uid]=null;e.off("destroyed",this._destroyRenderableBound)}
execute(e){let t=e.particleChildren;if(t.length===0){return}
let i=this.renderer;let s=this.getBuffers(e);if(!e.texture){e.texture=t[0].texture}
let r=this.state;s.update(t,e._childrenDirty);e._childrenDirty=!1;r.blendMode=e.texture._source.alphaMode==="no-premultiply-alpha"&&k8[a]||e.blendMode;let n=this.localUniforms.uniforms;let d=n.uTranslationMatrix;e.worldTransform.copyTo(d);d.prepend(i.globalUniforms.globalUniformData.projectionMatrix);n.uResolution=i.globalUniforms.globalUniformData.resolution;n.uRound=i._roundPixels|e._roundPixels;Ws(e.groupColorAlpha,n.uColor,0);this.adaptor.execute(this,e)}
destroy(){if(this.defaultShader){this.defaultShader.destroy();this.defaultShader=null}}};var an=class extends tn{constructor(e){super(e,new Jd())}};an.extension={type:[I.WebGLPipes],name:"particle"};var ah=class{execute(e,t){let i=e.renderer;let s=t.shader||e.defaultShader;s.groups[0]=i.renderPipes.uniformBatch.getUniformBindGroup(e.localUniforms,!0);s.groups[1]=i.texture.getTextureBindGroup(t.texture);let r=e.state;let n=e.getBuffers(t);i.encoder.draw({geometry:n.geometry,shader:t.shader||e.defaultShader,state:r,size:t.particleChildren.length*6})}};var sn=class extends tn{constructor(e){super(e,new ah())}};sn.extension={type:[I.WebGPUPipes],name:"particle"};fe.add(an);fe.add(sn);var Ei=class{constructor(){this.batcherName="default";this.topology="triangle-list";this.attributeSize=4;this.indexSize=6;this.packAsQuad=!0;this.roundPixels=0;this._attributeStart=0;this._batcher=null;this._batch=null}
get blendMode(){return this.renderable.groupBlendMode}
get color(){return this.renderable.groupColorAlpha}
reset(){this.renderable=null;this.texture=null;this._batcher=null;this._batch=null;this.bounds=null}};function ih(a,e){let{texture:t,bounds:i}=a;Sp(i,e._anchor,t);let s=e._style.padding;i.minX-=s;i.minY-=s;i.maxX-=s;i.maxY-=s}
var rn=class{constructor(e){this._gpuText=Object.create(null);this._destroyRenderableBound=this.destroyRenderable.bind(this);this._renderer=e;this._renderer.runners.resolutionChange.add(this);this._renderer.renderableGC.addManagedHash(this,"_gpuText")}
resolutionChange(){for(let e in this._gpuText){let t=this._gpuText[e];if(!t){continue}
let i=t.batchableSprite.renderable;if(i._autoResolution){i._resolution=this._renderer.resolution;i.onViewUpdate()}}}
validateRenderable(e){let t=this._getGpuText(e);let i=e._getKey();return t.currentKey!==i}
addRenderable(e,t){let i=this._getGpuText(e).batchableSprite;if(e._didTextUpdate){this._updateText(e)}
this._renderer.renderPipes.batch.addToBatch(i,t)}
updateRenderable(e){let t=this._getGpuText(e).batchableSprite;if(e._didTextUpdate){this._updateText(e)}
t._batcher.updateElement(t)}
destroyRenderable(e){e.off("destroyed",this._destroyRenderableBound);this._destroyRenderableById(e.uid)}
_destroyRenderableById(e){let t=this._gpuText[e];this._renderer.canvasText.decreaseReferenceCount(t.currentKey);me.return(t.batchableSprite);this._gpuText[e]=null}
_updateText(e){let t=e._getKey();let i=this._getGpuText(e);let s=i.batchableSprite;if(i.currentKey!==t){this._updateGpuText(e)}
e._didTextUpdate=!1;ih(s,e)}
_updateGpuText(e){let t=this._getGpuText(e);let i=t.batchableSprite;if(t.texture){this._renderer.canvasText.decreaseReferenceCount(t.currentKey)}
t.texture=i.texture=this._renderer.canvasText.getManagedTexture(e);t.currentKey=e._getKey();i.texture=t.texture}
_getGpuText(e){return this._gpuText[e.uid]||this.initGpuText(e)}
initGpuText(e){let t={texture:null,currentKey:"--",batchableSprite:me.get(Ei)};t.batchableSprite.renderable=e;t.batchableSprite.transform=e.groupTransform;t.batchableSprite.bounds={minX:0,maxX:1,minY:0,maxY:0};t.batchableSprite.roundPixels=this._renderer._roundPixels|e._roundPixels;this._gpuText[e.uid]=t;e._resolution=e._autoResolution?this._renderer.resolution:e.resolution;this._updateText(e);e.on("destroyed",this._destroyRenderableBound);return t}
destroy(){for(let e in this._gpuText)this._destroyRenderableById(e);this._gpuText=null;this._renderer=null}};rn.extension={type:[I.WebGLPipes,I.WebGPUPipes,I.CanvasPipes],name:"text"};var sh=class{constructor(e){this._canvasPool=Object.create(null);this.canvasOptions=e||{};this.enableFullScreen=!1}
_createCanvasAndContext(e,t){let i=n8.createCanvas();i.width=e;i.height=t;let s=i.getContext("2d");return{canvas:i,context:s}}
getOptimalCanvasAndContext(e,t,i=1){e=Math.ceil(e*i-1e-6);t=Math.ceil(t*i-1e-6);e=wi(e);t=wi(t);let s=(e<<17)+(t<<1);if(!this._canvasPool[s]){this._canvasPool[s]=[]}
let r=this._canvasPool[s].pop();if(!r){r=this._createCanvasAndContext(e,t)}
return r}
returnCanvasAndContext(e){let t=e.canvas;let{width:i,height:s}=t;let r=(i<<17)+(s<<1);e.context.clearRect(0,0,i,s);this._canvasPool[r].push(e)}
clear(){this._canvasPool={}}};var ca=new sh();function f0(a,e,t){let i=0;for(let s=4*t*e;i<e;++i,s+=4){if(a[s+3]!==0){return!1}}
return!0}
function b0(a,e,t,i,s){let r=4*e;let n=i;for(let d=i*r+4*t;n<=s;++n,d+=r){if(a[d+3]!==0){return!1}}
return!0}
function Eg(a,e=1){let{width:t,height:i}=a;let s=a.getContext("2d",{willReadFrequently:!0});if(s===null){throw new TypeError("Failed to get canvas 2D context")}
let r=s.getImageData(0,0,t,i).data;let n=0;let d=0;let h=t-1;let l=i-1;for(;d<i&&f0(r,t,d);){++d}
if(d===i){return we.EMPTY}
for(;f0(r,t,l);){--l}
for(;b0(r,t,n,d,l);){++n}
for(;b0(r,t,h,d,l);){--h}
++h;++l;return new we(n/e,d/e,(h-n)/e,(l-d)/e)}
var e2=class rh{constructor(e,t,i,s){this.uid=Ie("fillGradient");this.type="linear";this.gradientStops=[];this._styleKey=null;this.x0=e;this.y0=t;this.x1=i;this.y1=s}
addColorStop(e,t){this.gradientStops.push({offset:e,color:gi.shared.setValue(t).toHexa()});this._styleKey=null;return this}
buildLinearGradient(){if(this.texture){return}
let e=rh.defaultTextureSize;let{gradientStops:t}=this;let i=n8.createCanvas();i.width=e;i.height=e;let s=i.getContext("2d");let r=s.createLinearGradient(0,0,rh.defaultTextureSize,1);for(let T=0;T<t.length;T++){let w=t[T];r.addColorStop(w.offset,w.color)}
s.fillStyle=r;s.fillRect(0,0,e,e);this.texture=new W({source:new Ma({resource:i,addressModeU:"clamp-to-edge",addressModeV:"repeat"})});let{x0:n,y0:d,x1:h,y1:l}=this;let f=new ae();let p=h-n;let _=l-d;let m=Math.sqrt(p*p+_*_);let v=Math.atan2(_,p);f.translate(-n,-d);f.scale(1/e,1/e);f.rotate(-v);f.scale(256/m,1);this.transform=f;this._styleKey=null}
get styleKey(){if(this._styleKey){return this._styleKey}
let e=this.gradientStops.map(s=>`${s.offset}-${s.color}`).join("-");let t=this.texture.uid;let i=this.transform.toArray().join("-");return `fill-gradient-${this.uid}-${e}-${t}-${i}-${this.x0}-${this.y0}-${this.x1}-${this.y1}`}};e2.defaultTextureSize=256;var p0={repeat:{addressModeU:"repeat",addressModeV:"repeat"},"repeat-x":{addressModeU:"repeat",addressModeV:"clamp-to-edge"},"repeat-y":{addressModeU:"clamp-to-edge",addressModeV:"repeat"},"no-repeat":{addressModeU:"clamp-to-edge",addressModeV:"clamp-to-edge"}};var Pi=class{constructor(e,t){this.uid=Ie("fillPattern");this.transform=new ae();this._styleKey=null;this.texture=e;this.transform.scale(1/e.frame.width,1/e.frame.height);if(t){e.source.style.addressModeU=p0[t].addressModeU;e.source.style.addressModeV=p0[t].addressModeV}}
setTransform(e){let t=this.texture;this.transform.copyFrom(e);this.transform.invert();this.transform.scale(1/t.frame.width,1/t.frame.height);this._styleKey=null}
get styleKey(){return this._styleKey?this._styleKey:(this._styleKey=`fill-pattern-${this.uid}-${this.texture.uid}-${this.transform.toArray().join("-")}`,this._styleKey)}};var Yc={a:7,c:6,h:1,l:2,m:2,q:4,s:4,t:2,v:1,z:0};var Rg=/([astvzqmhlc])([^astvzqmhlc]*)/ig;function Mg(a){var e=[];a.replace(Rg,function(t,i,s){var r=i.toLowerCase();s=Og(s);for(r=="m"&&s.length>2&&(e.push([i].concat(s.splice(0,2))),r="l",i=i=="m"?"l":"L");;){if(s.length==Yc[r]){s.unshift(i);return e.push(s)}
if(s.length<Yc[r]){throw new Error("malformed path data")}
e.push([i].concat(s.splice(0,Yc[r])))}});return e}
var Cg=/-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig;function Og(a){var e=a.match(Cg);return e?e.map(Number):[]}
var Ig=Mg&&Mg.__esModule&&Object.prototype.hasOwnProperty.call(Mg,"default")?Mg.default:Mg;function Gg(a,e){let t=Ig(a);let i=[];let s=null;let r=0;let n=0;for(let d=0;d<t.length;d++){let h=t[d];let l=h[0];switch(l){case "M":r=h[1];n=h[2];e.moveTo(r,n);break;case "m":r+=h[1];n+=h[2];e.moveTo(r,n);break;case "H":r=h[1];e.lineTo(r,n);break;case "h":r+=h[1];e.lineTo(r,n);break;case "V":n=h[1];e.lineTo(r,n);break;case "v":n+=h[1];e.lineTo(r,n);break;case "L":r=h[1];n=h[2];e.lineTo(r,n);break;case "l":r+=h[1];n+=h[2];e.lineTo(r,n);break;case "C":r=h[5];n=h[6];e.bezierCurveTo(h[1],h[2],h[3],h[4],r,n);break;case "c":e.bezierCurveTo(r+h[1],n+h[2],r+h[3],n+h[4],r+h[5],n+h[6]);r+=h[5];n+=h[6];break;case "S":r=h[3];n=h[4];e.bezierCurveToShort(h[1],h[2],r,n);break;case "s":e.bezierCurveToShort(r+h[1],n+h[2],r+h[3],n+h[4]);r+=h[3];n+=h[4];break;case "Q":r=h[3];n=h[4];e.quadraticCurveTo(h[1],h[2],r,n);break;case "q":e.quadraticCurveTo(r+h[1],n+h[2],r+h[3],n+h[4]);r+=h[3];n+=h[4];break;case "T":r=h[1];n=h[2];e.quadraticCurveToShort(r,n);break;case "t":r+=h[1];n+=h[2];e.quadraticCurveToShort(r,n);break;case "A":r=h[6];n=h[7];e.arcToSvg(h[1],h[2],h[3],h[4],h[5],r,n);break;case "a":r+=h[6];n+=h[7];e.arcToSvg(h[1],h[2],h[3],h[4],h[5],r,n);break;case "Z":case "z":e.closePath();if(i.length>0){s=i.pop();if(s){r=s.startX;n=s.startY}else{r=0;n=0}}
s=null;break;default:}
if(l!=="Z"&&l!=="z"&&s===null){s={startX:r,startY:n};i.push(s)}}
return e}
var nh=class a{constructor(e=0,t=0,i=0){this.type="circle";this.x=e;this.y=t;this.radius=i}
clone(){return new a(this.x,this.y,this.radius)}
contains(e,t){if(this.radius<=0){return!1}
let i=this.radius*this.radius;let s=this.x-e;let r=this.y-t;s*=s;r*=r;return s+r<=i}
strokeContains(e,t,i,s=.5){if(this.radius===0){return!1}
let r=this.x-e;let n=this.y-t;let d=this.radius;let h=(1-s)*i;let l=Math.sqrt(r*r+n*n);return l<=d+h&&l>d-(i-h)}
getBounds(e){if(!e){e=new we()}
e.x=this.x-this.radius;e.y=this.y-this.radius;e.width=this.radius*2;e.height=this.radius*2;return e}
copyFrom(e){this.x=e.x;this.y=e.y;this.radius=e.radius;return this}
copyTo(e){e.copyFrom(this);return e}};var oh=class a{constructor(e=0,t=0,i=0,s=0){this.type="ellipse";this.x=e;this.y=t;this.halfWidth=i;this.halfHeight=s}
clone(){return new a(this.x,this.y,this.halfWidth,this.halfHeight)}
contains(e,t){if(this.halfWidth<=0||this.halfHeight<=0){return!1}
let i=(e-this.x)/this.halfWidth;let s=(t-this.y)/this.halfHeight;i*=i;s*=s;return i+s<=1}
strokeContains(e,t,i,s=.5){let{halfWidth:r,halfHeight:n}=this;if(r<=0||n<=0){return!1}
let d=i*(1-s);let h=i-d;let l=r-h;let f=n-h;let p=r+d;let _=n+d;let m=e-this.x;let v=t-this.y;let T=m*m/(l*l)+v*v/(f*f);let w=m*m/(p*p)+v*v/(_*_);return T>1&&w<=1}
getBounds(e){if(!e){e=new we()}
e.x=this.x-this.halfWidth;e.y=this.y-this.halfHeight;e.width=this.halfWidth*2;e.height=this.halfHeight*2;return e}
copyFrom(e){this.x=e.x;this.y=e.y;this.halfWidth=e.halfWidth;this.halfHeight=e.halfHeight;return this}
copyTo(e){e.copyFrom(this);return e}};function Bg(a,e,t,i,s,r){let n=a-t;let d=e-i;let h=s-t;let l=r-i;let f=n*h+d*l;let p=h*h+l*l;let _=-1;if(p!==0){_=f/p}
let m;let v;if(_<0){m=t;v=i}else if(_>1){m=s;v=r}else{m=t+_*h;v=i+_*l}
let T=a-m;let w=e-v;return T*T+w*w}
var xs=class a{constructor(...e){this.type="polygon";let t=Array.isArray(e[0])?e[0]:e;if(typeof t[0]!="number"){let i=[];let s=0;for(let r=t.length;s<r;s++){i.push(t[s].x,t[s].y)}
t=i}
this.points=t;this.closePath=!0}
clone(){let e=this.points.slice();let t=new a(e);t.closePath=this.closePath;return t}
contains(e,t){let i=!1;let s=this.points.length/2;let r=0;for(let n=s-1;r<s;n=r++){let d=this.points[r*2];let h=this.points[r*2+1];let l=this.points[n*2];let f=this.points[n*2+1];if(h>t!=f>t&&e<(l-d)*((t-h)/(f-h))+d){i=!i}}
return i}
strokeContains(e,t,i,s=.5){let r=i*i;let n=r*(1-s);let d=r-n;let{points:h}=this;let l=h.length-(this.closePath?0:2);for(let f=0;f<l;f+=2){let p=h[f];let _=h[f+1];let m=h[(f+2)%h.length];let v=h[(f+3)%h.length];let T=Bg(e,t,p,_,m,v);let w=Math.sign((m-p)*(t-_)-(v-_)*(e-p));if(T<=(w<0?d:n)){return!0}}
return!1}
getBounds(e){if(!e){e=new we()}
let t=this.points;let i=Infinity;let s=-Infinity;let r=Infinity;let n=-Infinity;let d=0;for(let h=t.length;d<h;d+=2){let l=t[d];let f=t[d+1];i=l<i?l:i;s=l>s?l:s;r=f<r?f:r;n=f>n?f:n}
e.x=i;e.width=s-i;e.y=r;e.height=n-r;return e}
copyFrom(e){this.points=e.points.slice();this.closePath=e.closePath;return this}
copyTo(e){e.copyFrom(this);return e}
get lastX(){return this.points[this.points.length-2]}
get lastY(){return this.points[this.points.length-1]}
get x(){return this.points[this.points.length-2]}
get y(){return this.points[this.points.length-1]}};var mr=(a,e,t,i,s,r,n)=>{let d=a-t;let h=e-i;let l=Math.sqrt(d*d+h*h);return l>=s-r&&l<=s+n};var ch=class a{constructor(e=0,t=0,i=0,s=0,r=20){this.type="roundedRectangle";this.x=e;this.y=t;this.width=i;this.height=s;this.radius=r}
getBounds(e){if(!e){e=new we()}
e.x=this.x;e.y=this.y;e.width=this.width;e.height=this.height;return e}
clone(){return new a(this.x,this.y,this.width,this.height,this.radius)}
copyFrom(e){this.x=e.x;this.y=e.y;this.width=e.width;this.height=e.height;return this}
copyTo(e){e.copyFrom(this);return e}
contains(e,t){if(this.width<=0||this.height<=0){return!1}
if(e>=this.x&&e<=this.x+this.width&&t>=this.y&&t<=this.y+this.height){let i=Math.max(0,Math.min(this.radius,Math.min(this.width,this.height)/2));if(t>=this.y+i&&t<=this.y+this.height-i||e>=this.x+i&&e<=this.x+this.width-i){return!0}
let s=e-(this.x+i);let r=t-(this.y+i);let n=i*i;if(s*s+r*r<=n||(s=e-(this.x+this.width-i),s*s+r*r<=n)||(r=t-(this.y+this.height-i),s*s+r*r<=n)||(s=e-(this.x+i),s*s+r*r<=n)){return!0}}
return!1}
strokeContains(e,t,i,s=.5){let{x:r,y:n,width:d,height:h,radius:l}=this;let f=i*(1-s);let p=i-f;let _=r+l;let m=n+l;let v=d-l*2;let T=h-l*2;let w=r+d;let P=n+h;return(e>=r-f&&e<=r+p||e>=w-p&&e<=w+f)&&t>=m&&t<=m+T||(t>=n-f&&t<=n+p||t>=P-p&&t<=P+f)&&e>=_&&e<=_+v?!0:e<_&&t<m&&mr(e,t,_,m,l,p,f)||e>w-l&&t<m&&mr(e,t,w-l,m,l,p,f)||e>w-l&&t>P-l&&mr(e,t,w-l,P-l,l,p,f)||e<_&&t>P-l&&mr(e,t,_,P-l,l,p,f)}};function t2(a,e,t,i,s,r,n,d,h,l){let f=Math.min(.99,Math.max(0,l??qd.defaultOptions.bezierSmoothness));let p=(1-f)/1;p*=p;kg(e,t,i,s,r,n,d,h,a,p);return a}
function kg(a,e,t,i,s,r,n,d,h,l){dh(a,e,t,i,s,r,n,d,h,l,0);h.push(n,d)}
function dh(a,e,t,i,s,r,n,d,h,l,f){if(f>8){return}
let p=Math.PI;let _=(a+t)/2;let m=(e+i)/2;let v=(t+s)/2;let T=(i+r)/2;let w=(s+n)/2;let P=(r+d)/2;let C=(_+v)/2;let B=(m+T)/2;let D=(v+w)/2;let X=(T+P)/2;let U=(C+D)/2;let L=(B+X)/2;if(f>0){let ie=n-a;let ne=d-e;let q=Math.abs((t-n)*ne-(i-d)*ie);let Y=Math.abs((s-n)*ne-(r-d)*ie);let se;let ee;if(q>11920929e-14&&Y>11920929e-14){if((q+Y)*(q+Y)<=l*(ie*ie+ne*ne)){h.push(U,L);return;let Ce=Math.atan2(r-i,s-t);se=Math.abs(Ce-Math.atan2(i-e,t-a));ee=Math.abs(Math.atan2(d-r,n-s)-Ce);if(se>=p){se=2*p-se}
if(ee>=p){ee=2*p-ee}
if(se+ee<0){h.push(U,L);return}}}else if(q>11920929e-14){if(q*q<=l*(ie*ie+ne*ne)){h.push(U,L);return;se=Math.abs(Math.atan2(r-i,s-t)-Math.atan2(i-e,t-a));if(se>=p){se=2*p-se}
if(se<0){h.push(t,i);h.push(s,r);return}
if(!1&&se>0){h.push(t,i);return}}}else if(Y>11920929e-14){if(Y*Y<=l*(ie*ie+ne*ne)){h.push(U,L);return;se=Math.abs(Math.atan2(d-r,n-s)-Math.atan2(r-i,s-t));if(se>=p){se=2*p-se}
if(se<0){h.push(t,i);h.push(s,r);return}
if(!1&&se>0){h.push(s,r);return}}}else{ie=U-(a+n)/2;ne=L-(e+d)/2;if(ie*ie+ne*ne<=l){h.push(U,L);return}}}
dh(a,e,_,m,C,B,U,L,h,l,f+1);dh(U,L,D,X,w,P,n,d,h,l,f+1)}
function Xg(a,e,t,i,s,r,n,d){let h=Math.min(.99,Math.max(0,d??qd.defaultOptions.bezierSmoothness));let l=(1-h)/1;l*=l;Hg(e,t,i,s,r,n,a,l);return a}
function Hg(a,e,t,i,s,r,n,d){hh(n,a,e,t,i,s,r,d,0);n.push(s,r)}
function hh(a,e,t,i,s,r,n,d,h){if(h>8){return}
let l=Math.PI;let f=(e+i)/2;let p=(t+s)/2;let _=(i+r)/2;let m=(s+n)/2;let v=(f+_)/2;let T=(p+m)/2;let w=r-e;let P=n-t;let C=Math.abs((i-r)*P-(s-n)*w);if(C>11920929e-14){if(C*C<=d*(w*w+P*P)){a.push(v,T);return;let B=Math.abs(Math.atan2(n-s,r-i)-Math.atan2(s-t,i-e));if(B>=l){B=2*l-B}
if(B<0){a.push(v,T);return}}}else{w=v-(e+r)/2;P=T-(t+n)/2;if(w*w+P*P<=d){a.push(v,T);return}}
hh(a,e,t,f,p,v,T,d,h+1);hh(a,v,T,_,m,r,n,d,h+1)}
function a2(a,e,t,i,s,r,n,d){let h=Math.abs(s-r);if(!n&&s>r||n&&r>s){h=2*Math.PI-h}
if(!d){d=Math.max(6,Math.floor(6*Math.pow(i,0.3333333333333333)*(h/Math.PI)))}
d=Math.max(d,3);let l=h/d;let f=s;l*=n?-1:1;for(let p=0;p<d+1;p++){let _=Math.cos(f);let m=Math.sin(f);let v=e+_*i;let T=t+m*i;a.push(v,T);f+=l}}
function zg(a,e,t,i,s,r){let n=a[a.length-2];let d=a[a.length-1]-t;let h=n-e;let l=s-t;let f=i-e;let p=Math.abs(d*f-h*l);if(p<1e-8||r===0){if(a[a.length-2]!==e||a[a.length-1]!==t){a.push(e,t)}
return}
let _=d*d+h*h;let m=l*l+f*f;let v=d*l+h*f;let T=r*Math.sqrt(_)/p;let w=r*Math.sqrt(m)/p;let P=T*v/_;let C=w*v/m;let B=T*f+w*h;let D=T*l+w*d;let X=h*(w+P);let U=d*(w+P);let L=f*(T+C);let ie=l*(T+C);let ne=Math.atan2(U-D,X-B);let q=Math.atan2(ie-D,L-B);a2(a,B+e,D+t,r,ne,q,h*l>f*d)}
var vs=Math.PI*2;var Kc={centerX:0,centerY:0,ang1:0,ang2:0};var qc=({x:a,y:e},t,i,s,r,n,d,h)=>{a*=t;e*=i;let l=s*a-r*e;let f=r*a+s*e;h.x=l+n;h.y=f+d;return h};function Vg(a,e){let t=e===-1.5707963267948966?-.551915024494:1.3333333333333333*Math.tan(e/4);let i=e===1.5707963267948966?.551915024494:t;let s=Math.cos(a);let r=Math.sin(a);let n=Math.cos(a+e);let d=Math.sin(a+e);return[{x:s-r*i,y:r+s*i},{x:n+d*i,y:d-n*i},{x:n,y:d}]}
var m0=(a,e,t,i)=>{let s=a*i-e*t<0?-1:1;let r=a*t+e*i;if(r>1){r=1}
if(r<-1){r=-1}
return s*Math.acos(r)};var Wg=(a,e,t,i,s,r,n,d,h,l,f,p,_)=>{let m=Math.pow(s,2);let v=Math.pow(r,2);let T=Math.pow(f,2);let w=Math.pow(p,2);let P=m*v-m*w-v*T;if(P<0){P=0}
P/=m*w+v*T;P=Math.sqrt(P)*(n===d?-1:1);let C=P*s/r*p;let B=P*-r/s*f;let D=l*C-h*B+(a+t)/2;let X=h*C+l*B+(e+i)/2;let U=(f-C)/s;let L=(p-B)/r;let ie=(-f-C)/s;let ne=(-p-B)/r;let q=m0(1,0,U,L);let Y=m0(U,L,ie,ne);if(d===0&&Y>0){Y-=vs}
if(d===1&&Y<0){Y+=vs}
_.centerX=D;_.centerY=X;_.ang1=q;_.ang2=Y};function Yg(a,e,t,i,s,r,n,d=0,h=0,l=0){if(r===0||n===0){return}
let f=Math.sin(d*vs/360);let p=Math.cos(d*vs/360);let _=p*(e-i)/2+f*(t-s)/2;let m=-f*(e-i)/2+p*(t-s)/2;if(_===0&&m===0){return}
r=Math.abs(r);n=Math.abs(n);let v=Math.pow(_,2)/Math.pow(r,2)+Math.pow(m,2)/Math.pow(n,2);if(v>1){r*=Math.sqrt(v);n*=Math.sqrt(v)}
Wg(e,t,i,s,r,n,h,l,f,p,_,m,Kc);let{ang1:T,ang2:w}=Kc;let{centerX:P,centerY:C}=Kc;let B=Math.abs(w)/(vs/4);if(Math.abs(1-B)<1e-7){B=1}
let D=Math.max(Math.ceil(B),1);w/=D;let X=a[a.length-2];let U=a[a.length-1];let L={x:0,y:0};for(let ie=0;ie<D;ie++){let ne=Vg(T,w);let{x:q,y:Y}=qc(ne[0],r,n,p,f,P,C,L);let{x:se,y:ee}=qc(ne[1],r,n,p,f,P,C,L);let{x:Ce,y:Tt}=qc(ne[2],r,n,p,f,P,C,L);t2(a,X,U,q,Y,se,ee,Ce,Tt);X=Ce;U=Tt;T+=w}}
function $g(a,e,t){var i;let s=(d,h)=>{let l=h.x-d.x;let f=h.y-d.y;let p=Math.sqrt(l*l+f*f);let _=l/p;let m=f/p;return{len:p,nx:_,ny:m}};let r=(d,h)=>{if(d===0){a.moveTo(h.x,h.y)}else{a.lineTo(h.x,h.y)}};let n=e[e.length-1];for(let d=0;d<e.length;d++){let h=e[d%e.length];let l=(i=h.radius)!=null?i:t;if(l<=0){r(d,h);n=h;continue}
let f=e[(d+1)%e.length];let p=s(h,n);let _=s(h,f);if(p.len<1e-4||_.len<1e-4){r(d,h);n=h;continue}
let m=Math.asin(p.nx*_.ny-p.ny*_.nx);let v=1;let T=!1;if(p.nx*_.nx-p.ny*-_.ny<0){if(m<0){m=Math.PI+m}else{m=Math.PI-m;v=-1;T=!0}}else if(m>0){v=-1;T=!0}
let w=m/2;let P;let C=Math.abs(Math.cos(w)*l/Math.sin(w));if(C>Math.min(p.len/2,_.len/2)){C=Math.min(p.len/2,_.len/2);P=Math.abs(C*Math.sin(w)/Math.cos(w))}else{P=l}
let B=h.x+_.nx*C+ -_.ny*P*v;let D=h.y+_.ny*C+_.nx*P*v;let X=Math.atan2(p.ny,p.nx)+Math.PI/2*v;let U=Math.atan2(_.ny,_.nx)-Math.PI/2*v;if(d===0){a.moveTo(B+Math.cos(X)*P,D+Math.sin(X)*P)}
a.arc(B,D,P,X,U,T);n=h}}
function Kg(a,e,t,i){var s;let d=e.length;for(let h=0;h<d;h++){let l=e[(h+1)%d];let f=(s=l.radius)!=null?s:t;if(f<=0){if(h===0){a.moveTo(l.x,l.y)}else{a.lineTo(l.x,l.y)}
continue}
let p=e[h];let _=e[(h+2)%d];let m=Math.sqrt((p.x-l.x)**2+(p.y-l.y)**2);let v;if(m<1e-4){v=l}else{let P=Math.min(m/2,f);v={x:l.x+(p.x-l.x)*(P/m),y:l.y+(p.y-l.y)*(P/m)}}
let T=Math.sqrt((_.x-l.x)**2+(_.y-l.y)**2);let w;if(T<1e-4){w=l}else{let P=Math.min(T/2,f);w={x:l.x+(_.x-l.x)*(P/T),y:l.y+(_.y-l.y)*(P/T)}}
if(h===0){a.moveTo(v.x,v.y)}else{a.lineTo(v.x,v.y)}
a.quadraticCurveTo(l.x,l.y,w.x,w.y,i)}}
var qg=new we();var lh=class{constructor(e){this.shapePrimitives=[];this._currentPoly=null;this._bounds=new Ze();this._graphicsPath2D=e}
moveTo(e,t){this.startPoly(e,t);return this}
lineTo(e,t){this._ensurePoly();let i=this._currentPoly.points;let s=i[i.length-2];let r=i[i.length-1];if(s!==e||r!==t){i.push(e,t)}
return this}
arc(e,t,i,s,r,n){this._ensurePoly(!1);let d=this._currentPoly.points;a2(d,e,t,i,s,r,n);return this}
arcTo(e,t,i,s,r){this._ensurePoly();let n=this._currentPoly.points;zg(n,e,t,i,s,r);return this}
arcToSvg(e,t,i,s,r,n,d){let h=this._currentPoly.points;Yg(h,this._currentPoly.lastX,this._currentPoly.lastY,n,d,e,t,i,s,r);return this}
bezierCurveTo(e,t,i,s,r,n,d){this._ensurePoly();let h=this._currentPoly;t2(this._currentPoly.points,h.lastX,h.lastY,e,t,i,s,r,n,d);return this}
quadraticCurveTo(e,t,i,s,r){this._ensurePoly();let n=this._currentPoly;Xg(this._currentPoly.points,n.lastX,n.lastY,e,t,i,s,r);return this}
closePath(){this.endPoly(!0);return this}
addPath(e,t){this.endPoly();if(t&&!t.isIdentity()){e=e.clone(!0);e.transform(t)}
for(let i=0;i<e.instructions.length;i++){let s=e.instructions[i];this[s.action](...s.data)}
return this}
finish(e=!1){this.endPoly(e)}
rect(e,t,i,s,r){this.drawShape(new we(e,t,i,s),r);return this}
circle(e,t,i,s){this.drawShape(new nh(e,t,i),s);return this}
poly(e,t,i){let s=new xs(e);s.closePath=t;this.drawShape(s,i);return this}
regularPoly(e,t,i,s,r=0,n){s=Math.max(s|0,3);let d=-1*Math.PI/2+r;let h=Math.PI*2/s;let l=[];for(let f=0;f<s;f++){let p=d-f*h;l.push(e+i*Math.cos(p),t+i*Math.sin(p))}
this.poly(l,!0,n);return this}
roundPoly(e,t,i,s,r,n=0,d){s=Math.max(s|0,3);if(r<=0){return this.regularPoly(e,t,i,s,n)}
let h=i*Math.sin(Math.PI/s)-.001;r=Math.min(r,h);let l=-1*Math.PI/2+n;let f=Math.PI*2/s;let p=(s-2)*Math.PI/s/2;for(let _=0;_<s;_++){let m=_*f+l;let v=e+i*Math.cos(m);let T=t+i*Math.sin(m);let w=m+Math.PI+p;let P=m-Math.PI-p;let C=v+r*Math.cos(w);let B=T+r*Math.sin(w);let D=v+r*Math.cos(P);let X=T+r*Math.sin(P);if(_===0){this.moveTo(C,B)}else{this.lineTo(C,B)}
this.quadraticCurveTo(v,T,D,X,d)}
return this.closePath()}
roundShape(e,t,i=!1,s){return e.length<3?this:(i?Kg(this,e,t,s):$g(this,e,t),this.closePath())}
filletRect(e,t,i,s,r){if(r===0){return this.rect(e,t,i,s)}
let n=Math.min(i,s)/2;let d=Math.min(n,Math.max(-n,r));let h=e+i;let l=t+s;let f=d<0?-d:0;let p=Math.abs(d);return this.moveTo(e,t+p).arcTo(e+f,t+f,e+p,t,p).lineTo(h-p,t).arcTo(h-f,t+f,h,t+p,p).lineTo(h,l-p).arcTo(h-f,l-f,e+i-p,l,p).lineTo(e+p,l).arcTo(e+f,l-f,e,l-p,p).closePath()}
chamferRect(e,t,i,s,r,n){if(r<=0){return this.rect(e,t,i,s)}
let d=Math.min(r,Math.min(i,s)/2);let h=e+i;let l=t+s;let f=[e+d,t,h-d,t,h,t+d,h,l-d,h-d,l,e+d,l,e,l-d,e,t+d];for(let p=f.length-1;p>=2;p-=2){if(f[p]===f[p-2]&&f[p-1]===f[p-3]){f.splice(p-1,2)}}
return this.poly(f,!0,n)}
ellipse(e,t,i,s,r){this.drawShape(new oh(e,t,i,s),r);return this}
roundRect(e,t,i,s,r,n){this.drawShape(new ch(e,t,i,s,r),n);return this}
drawShape(e,t){this.endPoly();this.shapePrimitives.push({shape:e,transform:t});return this}
startPoly(e,t){let i=this._currentPoly;if(i){this.endPoly()}
i=new xs();i.points.push(e,t);this._currentPoly=i;return this}
endPoly(e=!1){let t=this._currentPoly;if(t&&t.points.length>2){t.closePath=e;this.shapePrimitives.push({shape:t})}
this._currentPoly=null;return this}
_ensurePoly(e=!0){if(!this._currentPoly&&(this._currentPoly=new xs(),e)){let t=this.shapePrimitives[this.shapePrimitives.length-1];if(t){let i=t.shape.x;let s=t.shape.y;if(t.transform&&!t.transform.isIdentity()){let r=t.transform;let n=i;i=r.a*i+r.c*s+r.tx;s=r.b*n+r.d*s+r.ty}
this._currentPoly.points.push(i,s)}else{this._currentPoly.points.push(0,0)}}}
buildPath(){let e=this._graphicsPath2D;this.shapePrimitives.length=0;this._currentPoly=null;for(let t=0;t<e.instructions.length;t++){let i=e.instructions[t];this[i.action](...i.data)}
this.finish()}
get bounds(){let e=this._bounds;e.clear();let t=this.shapePrimitives;for(let i=0;i<t.length;i++){let s=t[i];let r=s.shape.getBounds(qg);if(s.transform){e.addRect(r,s.transform)}else{e.addRect(r)}}
return e}};var Ri=class a{constructor(e){this.instructions=[];this.uid=Ie("graphicsPath");this._dirty=!0;var t;if(typeof e=="string"){Gg(e,this)}else{this.instructions=(t=e?.slice())!=null?t:[]}}
get shapePath(){if(!this._shapePath){this._shapePath=new lh(this)}
if(this._dirty){this._dirty=!1;this._shapePath.buildPath()}
return this._shapePath}
addPath(e,t){e=e.clone();this.instructions.push({action:"addPath",data:[e,t]});this._dirty=!0;return this}
arc(...e){this.instructions.push({action:"arc",data:e});this._dirty=!0;return this}
arcTo(...e){this.instructions.push({action:"arcTo",data:e});this._dirty=!0;return this}
arcToSvg(...e){this.instructions.push({action:"arcToSvg",data:e});this._dirty=!0;return this}
bezierCurveTo(...e){this.instructions.push({action:"bezierCurveTo",data:e});this._dirty=!0;return this}
bezierCurveToShort(e,t,i,s,r){let n=this.instructions[this.instructions.length-1];let d=this.getLastPoint(Pe.shared);let h=0;let l=0;if(!n||n.action!=="bezierCurveTo"){h=d.x;l=d.y}else{h=n.data[2];l=n.data[3];let f=d.x;let p=d.y;h=f+(f-h);l=p+(p-l)}
this.instructions.push({action:"bezierCurveTo",data:[h,l,e,t,i,s,r]});this._dirty=!0;return this}
closePath(){this.instructions.push({action:"closePath",data:[]});this._dirty=!0;return this}
ellipse(...e){this.instructions.push({action:"ellipse",data:e});this._dirty=!0;return this}
lineTo(...e){this.instructions.push({action:"lineTo",data:e});this._dirty=!0;return this}
moveTo(...e){this.instructions.push({action:"moveTo",data:e});return this}
quadraticCurveTo(...e){this.instructions.push({action:"quadraticCurveTo",data:e});this._dirty=!0;return this}
quadraticCurveToShort(e,t,i){let s=this.instructions[this.instructions.length-1];let r=this.getLastPoint(Pe.shared);let n=0;let d=0;if(!s||s.action!=="quadraticCurveTo"){n=r.x;d=r.y}else{n=s.data[0];d=s.data[1];let h=r.x;let l=r.y;n=h+(h-n);d=l+(l-d)}
this.instructions.push({action:"quadraticCurveTo",data:[n,d,e,t,i]});this._dirty=!0;return this}
rect(e,t,i,s,r){this.instructions.push({action:"rect",data:[e,t,i,s,r]});this._dirty=!0;return this}
circle(e,t,i,s){this.instructions.push({action:"circle",data:[e,t,i,s]});this._dirty=!0;return this}
roundRect(...e){this.instructions.push({action:"roundRect",data:e});this._dirty=!0;return this}
poly(...e){this.instructions.push({action:"poly",data:e});this._dirty=!0;return this}
regularPoly(...e){this.instructions.push({action:"regularPoly",data:e});this._dirty=!0;return this}
roundPoly(...e){this.instructions.push({action:"roundPoly",data:e});this._dirty=!0;return this}
roundShape(...e){this.instructions.push({action:"roundShape",data:e});this._dirty=!0;return this}
filletRect(...e){this.instructions.push({action:"filletRect",data:e});this._dirty=!0;return this}
chamferRect(...e){this.instructions.push({action:"chamferRect",data:e});this._dirty=!0;return this}
star(e,t,i,s,r,n,d){if(!r){r=s/2}
let h=-1*Math.PI/2+n;let l=i*2;let f=Math.PI*2/l;let p=[];for(let _=0;_<l;_++){let m=_%2?r:s;let v=_*f+h;p.push(e+m*Math.cos(v),t+m*Math.sin(v))}
this.poly(p,!0,d);return this}
clone(e=!1){let t=new a();if(!e){t.instructions=this.instructions.slice()}else{for(let i=0;i<this.instructions.length;i++){let s=this.instructions[i];t.instructions.push({action:s.action,data:s.data.slice()})}}
return t}
clear(){this.instructions.length=0;this._dirty=!0;return this}
transform(e){if(e.isIdentity()){return this}
let t=e.a;let i=e.b;let s=e.c;let r=e.d;let n=e.tx;let d=e.ty;let h=0;let l=0;let f=0;let p=0;let _=0;let m=0;let v=0;let T=0;for(let w=0;w<this.instructions.length;w++){let P=this.instructions[w];let C=P.data;switch(P.action){case "moveTo":case "lineTo":h=C[0];l=C[1];C[0]=t*h+s*l+n;C[1]=i*h+r*l+d;break;case "bezierCurveTo":f=C[0];p=C[1];_=C[2];m=C[3];h=C[4];l=C[5];C[0]=t*f+s*p+n;C[1]=i*f+r*p+d;C[2]=t*_+s*m+n;C[3]=i*_+r*m+d;C[4]=t*h+s*l+n;C[5]=i*h+r*l+d;break;case "quadraticCurveTo":f=C[0];p=C[1];h=C[2];l=C[3];C[0]=t*f+s*p+n;C[1]=i*f+r*p+d;C[2]=t*h+s*l+n;C[3]=i*h+r*l+d;break;case "arcToSvg":h=C[5];l=C[6];v=C[0];T=C[1];C[0]=t*v+s*T;C[1]=i*v+r*T;C[5]=t*h+s*l+n;C[6]=i*h+r*l+d;break;case "circle":C[4]=C[3]?C[3].prepend(e):e.clone();break;case "rect":C[4]=C[4]?C[4].prepend(e):e.clone();break;case "ellipse":C[8]=C[8]?C[8].prepend(e):e.clone();break;case "roundRect":C[5]=C[5]?C[5].prepend(e):e.clone();break;case "addPath":C[0].transform(e);break;case "poly":C[2]=C[2]?C[2].prepend(e):e.clone();break;default:break}}
this._dirty=!0;return this}
get bounds(){return this.shapePath.bounds}
getLastPoint(e){let t=this.instructions.length-1;let i=this.instructions[t];if(!i){e.x=0;e.y=0;return e}
for(;i.action==="closePath";){t--;if(t<0){e.x=0;e.y=0;return e}
i=this.instructions[t]}
switch(i.action){case "moveTo":case "lineTo":e.x=i.data[0];e.y=i.data[1];break;case "quadraticCurveTo":e.x=i.data[2];e.y=i.data[3];break;case "bezierCurveTo":e.x=i.data[4];e.y=i.data[5];break;case "arc":case "arcToSvg":e.x=i.data[5];e.y=i.data[6];break;case "addPath":i.data[0].getLastPoint(e);break}
return e}};var Zg=Object.defineProperty;var _0=Object.getOwnPropertySymbols;var Qg=Object.prototype.hasOwnProperty;var Jg=Object.prototype.propertyIsEnumerable;var y0=(a,e,t)=>e in a?Zg(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var yr=(a,e)=>{for(var t in e||(e={}))if(Qg.call(e,t)){y0(a,t,e[t])}
if(_0){for(var t of _0(e))if(Jg.call(e,t)){y0(a,t,e[t])}}
return a};function em(a,e){if(typeof a=="string"){let i=document.createElement("div");i.innerHTML=a.trim();a=i.querySelector("svg")}
let t={context:e,path:new Ri()};i2(a,t,null,null);return e}
function i2(a,e,t,i){let s=a.children;let{fillStyle:r,strokeStyle:n}=tm(a);if(r&&t){t=yr(yr({},t),r)}else if(r){t=r}
if(n&&i){i=yr(yr({},i),n)}else if(n){i=n}
e.context.fillStyle=t;e.context.strokeStyle=i;let d;let h;let l;let f;let p;let _;let m;let v;let T;let w;let P;let C;let B;let D;let X;let U;let L;switch(a.nodeName.toLowerCase()){case "path":D=a.getAttribute("d");X=new Ri(D);e.context.path(X);if(t){e.context.fill()}
if(i){e.context.stroke()}
break;case "circle":m=Ke(a,"cx",0);v=Ke(a,"cy",0);T=Ke(a,"r",0);e.context.ellipse(m,v,T,T);if(t){e.context.fill()}
if(i){e.context.stroke()}
break;case "rect":d=Ke(a,"x",0);h=Ke(a,"y",0);U=Ke(a,"width",0);L=Ke(a,"height",0);w=Ke(a,"rx",0);P=Ke(a,"ry",0);if(w||P){e.context.roundRect(d,h,U,L,w||P)}else{e.context.rect(d,h,U,L)}
if(t){e.context.fill()}
if(i){e.context.stroke()}
break;case "ellipse":m=Ke(a,"cx",0);v=Ke(a,"cy",0);w=Ke(a,"rx",0);P=Ke(a,"ry",0);e.context.beginPath();e.context.ellipse(m,v,w,P);if(t){e.context.fill()}
if(i){e.context.stroke()}
break;case "line":l=Ke(a,"x1",0);f=Ke(a,"y1",0);p=Ke(a,"x2",0);_=Ke(a,"y2",0);e.context.beginPath();e.context.moveTo(l,f);e.context.lineTo(p,_);if(i){e.context.stroke()}
break;case "polygon":B=a.getAttribute("points");C=B.match(/\d+/g).map(ie=>parseInt(ie,10));e.context.poly(C,!0);if(t){e.context.fill()}
if(i){e.context.stroke()}
break;case "polyline":B=a.getAttribute("points");C=B.match(/\d+/g).map(ie=>parseInt(ie,10));e.context.poly(C,!1);if(i){e.context.stroke()}
break;case "g":case "svg":break;default:break}
for(let ie=0;ie<s.length;ie++){i2(s[ie],e,t,i)}}
function Ke(a,e,t){let i=a.getAttribute(e);return i?Number(i):t}
function tm(a){let e=a.getAttribute("style");let t={};let i={};let s=!1;let r=!1;if(e){let n=e.split(";");for(let d=0;d<n.length;d++){let h=n[d];let[l,f]=h.split(":");switch(l){case "stroke":if(f!=="none"){t.color=gi.shared.setValue(f).toNumber();r=!0}
break;case "stroke-width":t.width=Number(f);break;case "fill":if(f!=="none"){s=!0;i.color=gi.shared.setValue(f).toNumber()}
break;case "fill-opacity":i.alpha=Number(f);break;case "stroke-opacity":t.alpha=Number(f);break;case "opacity":i.alpha=Number(f);t.alpha=Number(f);break}}}else{let n=a.getAttribute("stroke");if(n&&n!=="none"){r=!0;t.color=gi.shared.setValue(n).toNumber();t.width=Ke(a,"stroke-width",1)}
let d=a.getAttribute("fill");if(d&&d!=="none"){s=!0;i.color=gi.shared.setValue(d).toNumber()}}
return{strokeStyle:r?t:null,fillStyle:s?i:null}}
var am=Object.defineProperty;var nn=Object.getOwnPropertySymbols;var s2=Object.prototype.hasOwnProperty;var r2=Object.prototype.propertyIsEnumerable;var x0=(a,e,t)=>e in a?am(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var la=(a,e)=>{for(var t in e||(e={}))if(s2.call(e,t)){x0(a,t,e[t])}
if(nn){for(var t of nn(e))if(r2.call(e,t)){x0(a,t,e[t])}}
return a};var im=(a,e)=>{var t={};for(var i in a)if(s2.call(a,i)&&e.indexOf(i)<0){t[i]=a[i]}
if(a!=null&&nn){for(var i of nn(a))if(e.indexOf(i)<0&&r2.call(a,i)){t[i]=a[i]}}
return t};function rm(a,e,t){let i=gi.shared.setValue(e??0);a.color=i.toNumber();a.alpha=i.alpha===1?t.alpha:i.alpha;a.texture=W.WHITE;return la(la({},t),a)}
function S0(a,e,t){a.fill=e;a.color=16777215;a.texture=e.texture;a.matrix=e.transform;return la(la({},t),a)}
function w0(a,e,t){e.buildLinearGradient();a.fill=e;a.color=16777215;a.texture=e.texture;a.matrix=e.transform;return la(la({},t),a)}
function nm(a,e){var t;let i=la(la({},e),a);if(i.texture){if(i.texture!==W.WHITE){let n=((t=i.matrix)==null?undefined:t.clone().invert())||new ae();n.translate(i.texture.frame.x,i.texture.frame.y);n.scale(1/i.texture.source.width,1/i.texture.source.height);i.matrix=n}
let r=i.texture.source.style;if(r.addressMode==="clamp-to-edge"){r.addressMode="repeat";r.update()}}
let s=gi.shared.setValue(i.color);i.alpha*=s.alpha;i.color=s.toNumber();i.matrix=i.matrix?i.matrix.clone():null;return i}
function Wa(a,e){if(a==null){return null}
let t={};return gi.isColorLike(a)?rm(t,a,e):a instanceof Pi?S0(t,a,e):a instanceof e2?w0(t,a,e):a.fill&&a.fill instanceof Pi?S0(a,a.fill,e):a.fill&&a.fill instanceof e2?w0(a,a.fill,e):nm(a,e)}
function on(a,e){let{width:i,alignment:s,miterLimit:r,cap:n,join:d,pixelLine:h}=e;let l=im(e,["width","alignment","miterLimit","cap","join","pixelLine"]);let f=Wa(a,l);return f?la({width:i,alignment:s,miterLimit:r,cap:n,join:d,pixelLine:h},f):null}
var om=Object.defineProperty;var A0=Object.getOwnPropertySymbols;var cm=Object.prototype.hasOwnProperty;var dm=Object.prototype.propertyIsEnumerable;var E0=(a,e,t)=>e in a?om(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var fi=(a,e)=>{for(var t in e||(e={}))if(cm.call(e,t)){E0(a,t,e[t])}
if(A0){for(var t of A0(e))if(dm.call(e,t)){E0(a,t,e[t])}}
return a};var hm=new Pe();var P0=new ae();var uh=class $t extends xt{constructor(){super(...arguments);this.uid=Ie("graphicsContext");this.dirty=!0;this.batchMode="auto";this.instructions=[];this._activePath=new Ri();this._transform=new ae();this._fillStyle=fi({},$t.defaultFillStyle);this._strokeStyle=fi({},$t.defaultStrokeStyle);this._stateStack=[];this._tick=0;this._bounds=new Ze();this._boundsDirty=!0}
clone(){let e=new $t();e.batchMode=this.batchMode;e.instructions=this.instructions.slice();e._activePath=this._activePath.clone();e._transform=this._transform.clone();e._fillStyle=fi({},this._fillStyle);e._strokeStyle=fi({},this._strokeStyle);e._stateStack=this._stateStack.slice();e._bounds=this._bounds.clone();e._boundsDirty=!0;return e}
get fillStyle(){return this._fillStyle}
set fillStyle(e){this._fillStyle=Wa(e,$t.defaultFillStyle)}
get strokeStyle(){return this._strokeStyle}
set strokeStyle(e){this._strokeStyle=on(e,$t.defaultStrokeStyle)}
setFillStyle(e){this._fillStyle=Wa(e,$t.defaultFillStyle);return this}
setStrokeStyle(e){this._strokeStyle=Wa(e,$t.defaultStrokeStyle);return this}
texture(e,t,i,s,r,n){this.instructions.push({action:"texture",data:{image:e,dx:i||0,dy:s||0,dw:r||e.frame.width,dh:n||e.frame.height,transform:this._transform.clone(),alpha:this._fillStyle.alpha,style:t?gi.shared.setValue(t).toNumber():16777215}});this.onUpdate();return this}
beginPath(){this._activePath=new Ri();return this}
fill(e,t){let i;let s=this.instructions[this.instructions.length-1];if(this._tick===0&&s&&s.action==="stroke"){i=s.data.path}else{i=this._activePath.clone()}
return i?(e!=null&&(t!==undefined&&typeof e=="number"&&(e={color:e,alpha:t}),this._fillStyle=Wa(e,$t.defaultFillStyle)),this.instructions.push({action:"fill",data:{style:this.fillStyle,path:i}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}
_initNextPathLocation(){let{x:e,y:t}=this._activePath.getLastPoint(Pe.shared);this._activePath.clear();this._activePath.moveTo(e,t)}
stroke(e){let t;let i=this.instructions[this.instructions.length-1];if(this._tick===0&&i&&i.action==="fill"){t=i.data.path}else{t=this._activePath.clone()}
return t?(e!=null&&(this._strokeStyle=on(e,$t.defaultStrokeStyle)),this.instructions.push({action:"stroke",data:{style:this.strokeStyle,path:t}}),this.onUpdate(),this._initNextPathLocation(),this._tick=0,this):this}
cut(){for(let e=0;e<2;e++){let t=this.instructions[this.instructions.length-1-e];let i=this._activePath.clone();if(t&&(t.action==="stroke"||t.action==="fill")){if(t.data.hole){t.data.hole.addPath(i)}else{t.data.hole=i;break}}}
this._initNextPathLocation();return this}
arc(e,t,i,s,r,n){this._tick++;let d=this._transform;this._activePath.arc(d.a*e+d.c*t+d.tx,d.b*e+d.d*t+d.ty,i,s,r,n);return this}
arcTo(e,t,i,s,r){this._tick++;let n=this._transform;this._activePath.arcTo(n.a*e+n.c*t+n.tx,n.b*e+n.d*t+n.ty,n.a*i+n.c*s+n.tx,n.b*i+n.d*s+n.ty,r);return this}
arcToSvg(e,t,i,s,r,n,d){this._tick++;let h=this._transform;this._activePath.arcToSvg(e,t,i,s,r,h.a*n+h.c*d+h.tx,h.b*n+h.d*d+h.ty);return this}
bezierCurveTo(e,t,i,s,r,n,d){this._tick++;let h=this._transform;this._activePath.bezierCurveTo(h.a*e+h.c*t+h.tx,h.b*e+h.d*t+h.ty,h.a*i+h.c*s+h.tx,h.b*i+h.d*s+h.ty,h.a*r+h.c*n+h.tx,h.b*r+h.d*n+h.ty,d);return this}
closePath(){var e;this._tick++;if(!((e=this._activePath)==null)){e.closePath()}
return this}
ellipse(e,t,i,s){this._tick++;this._activePath.ellipse(e,t,i,s,this._transform.clone());return this}
circle(e,t,i){this._tick++;this._activePath.circle(e,t,i,this._transform.clone());return this}
path(e){this._tick++;this._activePath.addPath(e,this._transform.clone());return this}
lineTo(e,t){this._tick++;let i=this._transform;this._activePath.lineTo(i.a*e+i.c*t+i.tx,i.b*e+i.d*t+i.ty);return this}
moveTo(e,t){this._tick++;let i=this._transform;let s=this._activePath.instructions;let r=i.a*e+i.c*t+i.tx;let n=i.b*e+i.d*t+i.ty;return s.length===1&&s[0].action==="moveTo"?(s[0].data[0]=r,s[0].data[1]=n,this):(this._activePath.moveTo(r,n),this)}
quadraticCurveTo(e,t,i,s,r){this._tick++;let n=this._transform;this._activePath.quadraticCurveTo(n.a*e+n.c*t+n.tx,n.b*e+n.d*t+n.ty,n.a*i+n.c*s+n.tx,n.b*i+n.d*s+n.ty,r);return this}
rect(e,t,i,s){this._tick++;this._activePath.rect(e,t,i,s,this._transform.clone());return this}
roundRect(e,t,i,s,r){this._tick++;this._activePath.roundRect(e,t,i,s,r,this._transform.clone());return this}
poly(e,t){this._tick++;this._activePath.poly(e,t,this._transform.clone());return this}
regularPoly(e,t,i,s,r=0,n){this._tick++;this._activePath.regularPoly(e,t,i,s,r,n);return this}
roundPoly(e,t,i,s,r,n){this._tick++;this._activePath.roundPoly(e,t,i,s,r,n);return this}
roundShape(e,t,i,s){this._tick++;this._activePath.roundShape(e,t,i,s);return this}
filletRect(e,t,i,s,r){this._tick++;this._activePath.filletRect(e,t,i,s,r);return this}
chamferRect(e,t,i,s,r,n){this._tick++;this._activePath.chamferRect(e,t,i,s,r,n);return this}
star(e,t,i,s,r=0,n=0){this._tick++;this._activePath.star(e,t,i,s,r,n,this._transform.clone());return this}
svg(e){this._tick++;em(e,this);return this}
restore(){let e=this._stateStack.pop();if(e){this._transform=e.transform;this._fillStyle=e.fillStyle;this._strokeStyle=e.strokeStyle}
return this}
save(){this._stateStack.push({transform:this._transform.clone(),fillStyle:fi({},this._fillStyle),strokeStyle:fi({},this._strokeStyle)});return this}
getTransform(){return this._transform}
resetTransform(){this._transform.identity();return this}
rotate(e){this._transform.rotate(e);return this}
scale(e,t=e){this._transform.scale(e,t);return this}
setTransform(e,t,i,s,r,n){return e instanceof ae?(this._transform.set(e.a,e.b,e.c,e.d,e.tx,e.ty),this):(this._transform.set(e,t,i,s,r,n),this)}
transform(e,t,i,s,r,n){return e instanceof ae?(this._transform.append(e),this):(P0.set(e,t,i,s,r,n),this._transform.append(P0),this)}
translate(e,t=e){this._transform.translate(e,t);return this}
clear(){this._activePath.clear();this.instructions.length=0;this.resetTransform();this.onUpdate();return this}
onUpdate(){if(!this.dirty){this.emit("update",this,16);this.dirty=!0;this._boundsDirty=!0}}
get bounds(){if(!this._boundsDirty){return this._bounds}
let e=this._bounds;e.clear();for(let t=0;t<this.instructions.length;t++){let i=this.instructions[t];let s=i.action;if(s==="fill"){let r=i.data;e.addBounds(r.path.bounds)}else if(s==="texture"){let r=i.data;e.addFrame(r.dx,r.dy,r.dx+r.dw,r.dy+r.dh,r.transform)}
if(s==="stroke"){let r=i.data;let n=r.style.alignment;let d=r.style.width*(1-n);let h=r.path.bounds;e.addFrame(h.minX-d,h.minY-d,h.maxX+d,h.maxY+d)}}
return e}
containsPoint(e){var t;if(!this.bounds.containsPoint(e.x,e.y)){return!1}
let i=this.instructions;let s=!1;for(let r=0;r<i.length;r++){let n=i[r];let d=n.data;let h=d.path;if(!n.action||!h){continue}
let l=d.style;let f=h.shapePath.shapePrimitives;for(let p=0;p<f.length;p++){let _=f[p].shape;if(!l||!_){continue}
let m=f[p].transform;let v=m?m.applyInverse(e,hm):e;if(n.action==="fill"){s=_.contains(v.x,v.y)}else{s=_.strokeContains(v.x,v.y,l.width,l.alignment)}
let T=d.hole;if(T){let w=(t=T.shapePath)==null?undefined:t.shapePrimitives;if(w){for(let P=0;P<w.length;P++){if(w[P].shape.contains(v.x,v.y)){s=!1}}}}
if(s){return!0}}}
return s}
destroy(e=!1){this._stateStack.length=0;this._transform=null;this.emit("destroy",this);this.removeAllListeners();if(typeof e=="boolean"?e:e?.texture){let t=typeof e=="boolean"?e:e?.textureSource;if(this._fillStyle.texture){this._fillStyle.texture.destroy(t)}
if(this._strokeStyle.texture){this._strokeStyle.texture.destroy(t)}}
this._fillStyle=null;this._strokeStyle=null;this.instructions=null;this._activePath=null;this._bounds=null;this._stateStack=null;this.customShader=null;this._transform=null}};uh.defaultFillStyle={color:16777215,alpha:1,texture:W.WHITE,matrix:null,fill:null};uh.defaultStrokeStyle={width:1,color:16777215,alpha:1,alignment:.5,miterLimit:10,cap:"butt",join:"miter",texture:W.WHITE,matrix:null,fill:null,pixelLine:!1};var R0=["align","breakWords","cssOverrides","fontVariant","fontWeight","leading","letterSpacing","lineHeight","padding","textBaseline","trim","whiteSpace","wordWrap","wordWrapWidth","fontFamily","fontStyle","fontSize"];function n2(a){let e=[];let t=0;for(let i=0;i<R0.length;i++){e[t++]=a[`_${R0[i]}`]}
t=o2(a._fill,e,t);t=lm(a._stroke,e,t);t=um(a.dropShadow,e,t);return e.join("-")}
function o2(a,e,t){var i;if(a){e[t++]=a.color;e[t++]=a.alpha;e[t++]=(i=a.fill)==null?undefined:i.styleKey}
return t}
function lm(a,e,t){if(a){t=o2(a,e,t);e[t++]=a.width;e[t++]=a.alignment;e[t++]=a.cap;e[t++]=a.join;e[t++]=a.miterLimit}
return t}
function um(a,e,t){if(a){e[t++]=a.alpha;e[t++]=a.angle;e[t++]=a.blur;e[t++]=a.distance;e[t++]=gi.shared.setValue(a.color).toNumber()}
return t}
var fm=Object.defineProperty;var bm=Object.defineProperties;var pm=Object.getOwnPropertyDescriptors;var M0=Object.getOwnPropertySymbols;var gm=Object.prototype.hasOwnProperty;var mm=Object.prototype.propertyIsEnumerable;var C0=(a,e,t)=>e in a?fm(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var ft=(a,e)=>{for(var t in e||(e={}))if(gm.call(e,t)){C0(a,t,e[t])}
if(M0){for(var t of M0(e))if(mm.call(e,t)){C0(a,t,e[t])}}
return a};var fh=class mi extends xt{constructor(e={}){super();ym(e);let t=ft(ft({},mi.defaultTextStyle),e);for(let i in t){this[i]=t[i]}
this.update()}
get align(){return this._align}
set align(e){this._align=e;this.update()}
get breakWords(){return this._breakWords}
set breakWords(e){this._breakWords=e;this.update()}
get dropShadow(){return this._dropShadow}
set dropShadow(e){if(e!==null&&typeof e=="object"){this._dropShadow=this._createProxy(ft(ft({},mi.defaultDropShadow),e))}else{this._dropShadow=e?this._createProxy(ft({},mi.defaultDropShadow)):null}
this.update()}
get fontFamily(){return this._fontFamily}
set fontFamily(e){this._fontFamily=e;this.update()}
get fontSize(){return this._fontSize}
set fontSize(e){if(typeof e=="string"){this._fontSize=parseInt(e,10)}else{this._fontSize=e}
this.update()}
get fontStyle(){return this._fontStyle}
set fontStyle(e){this._fontStyle=e.toLowerCase();this.update()}
get fontVariant(){return this._fontVariant}
set fontVariant(e){this._fontVariant=e;this.update()}
get fontWeight(){return this._fontWeight}
set fontWeight(e){this._fontWeight=e;this.update()}
get leading(){return this._leading}
set leading(e){this._leading=e;this.update()}
get letterSpacing(){return this._letterSpacing}
set letterSpacing(e){this._letterSpacing=e;this.update()}
get lineHeight(){return this._lineHeight}
set lineHeight(e){this._lineHeight=e;this.update()}
get padding(){return this._padding}
set padding(e){this._padding=e;this.update()}
get trim(){return this._trim}
set trim(e){this._trim=e;this.update()}
get textBaseline(){return this._textBaseline}
set textBaseline(e){this._textBaseline=e;this.update()}
get whiteSpace(){return this._whiteSpace}
set whiteSpace(e){this._whiteSpace=e;this.update()}
get wordWrap(){return this._wordWrap}
set wordWrap(e){this._wordWrap=e;this.update()}
get wordWrapWidth(){return this._wordWrapWidth}
set wordWrapWidth(e){this._wordWrapWidth=e;this.update()}
get fill(){return this._originalFill}
set fill(e){if(e!==this._originalFill){this._originalFill=e;if(this._isFillStyle(e)){this._originalFill=this._createProxy(ft(ft({},uh.defaultFillStyle),e),()=>{this._fill=Wa(ft({},this._originalFill),uh.defaultFillStyle)})}
this._fill=Wa(e===0?"black":e,uh.defaultFillStyle);this.update()}}
get stroke(){return this._originalStroke}
set stroke(e){if(e!==this._originalStroke){this._originalStroke=e;if(this._isFillStyle(e)){this._originalStroke=this._createProxy(ft(ft({},uh.defaultStrokeStyle),e),()=>{this._stroke=on(ft({},this._originalStroke),uh.defaultStrokeStyle)})}
this._stroke=on(e,uh.defaultStrokeStyle);this.update()}}
_generateKey(){this._styleKey=n2(this);return this._styleKey}
update(){this._styleKey=null;this.emit("update",this)}
reset(){let e=mi.defaultTextStyle;for(let t in e)this[t]=e[t]}
get styleKey(){return this._styleKey||this._generateKey()}
clone(){return new mi({align:this.align,breakWords:this.breakWords,dropShadow:this._dropShadow?ft({},this._dropShadow):null,fill:this._fill,fontFamily:this.fontFamily,fontSize:this.fontSize,fontStyle:this.fontStyle,fontVariant:this.fontVariant,fontWeight:this.fontWeight,leading:this.leading,letterSpacing:this.letterSpacing,lineHeight:this.lineHeight,padding:this.padding,stroke:this._stroke,textBaseline:this.textBaseline,whiteSpace:this.whiteSpace,wordWrap:this.wordWrap,wordWrapWidth:this.wordWrapWidth})}
destroy(e=!1){var t;var i;var s;var r;this.removeAllListeners();if(typeof e=="boolean"?e:e?.texture){let n=typeof e=="boolean"?e:e?.textureSource;if((t=this._fill)!=null&&t.texture){this._fill.texture.destroy(n)}
if((i=this._originalFill)!=null&&i.texture){this._originalFill.texture.destroy(n)}
if((s=this._stroke)!=null&&s.texture){this._stroke.texture.destroy(n)}
if((r=this._originalStroke)!=null&&r.texture){this._originalStroke.texture.destroy(n)}}
this._fill=null;this._stroke=null;this.dropShadow=null;this._originalStroke=null;this._originalFill=null}
_createProxy(e,t){return new Proxy(e,{set:(i,s,r)=>(i[s]=r,t?.(s,r),this.update(),!0)})}
_isFillStyle(e){return(e??null)!==null&&!(gi.isColorLike(e)||e instanceof e2||e instanceof Pi)}};fh.defaultDropShadow={alpha:1,angle:Math.PI/6,blur:0,color:"black",distance:5};fh.defaultTextStyle={align:"left",breakWords:!1,dropShadow:null,fill:"black",fontFamily:"Arial",fontSize:26,fontStyle:"normal",fontVariant:"normal",fontWeight:"normal",leading:0,letterSpacing:0,lineHeight:0,padding:0,stroke:null,textBaseline:"alphabetic",trim:!1,whiteSpace:"pre",wordWrap:!1,wordWrapWidth:100};function ym(a){var e;var t;var i;var s;var r;if(typeof a.dropShadow=="boolean"&&a.dropShadow){let d=fh.defaultDropShadow;a.dropShadow={alpha:(e=a.dropShadowAlpha)!=null?e:d.alpha,angle:(t=a.dropShadowAngle)!=null?t:d.angle,blur:(i=a.dropShadowBlur)!=null?i:d.blur,color:(s=a.dropShadowColor)!=null?s:d.color,distance:(r=a.dropShadowDistance)!=null?r:d.distance}}
if(a.strokeThickness!==undefined){let d=a.stroke;let h={};if(gi.isColorLike(d)){h.color=d}else if(d instanceof e2||d instanceof Pi){h.fill=d}else if(Object.hasOwnProperty.call(d,"color")||Object.hasOwnProperty.call(d,"fill")){h=d}else{throw new Error("Invalid stroke value.")}
a.stroke=bm(ft({},h),pm({width:a.strokeThickness}))}
if(Array.isArray(a.fillGradientStops)){let d;if(a.fontSize==null){a.fontSize=fh.defaultTextStyle.fontSize}else if(typeof a.fontSize=="string"){d=parseInt(a.fontSize,10)}else{d=a.fontSize}
let h=new e2(0,0,0,d*1.7);let l=a.fillGradientStops.map(f=>gi.shared.setValue(f).toNumber());l.forEach((f,p)=>{let _=p/(l.length-1);h.addColorStop(_,f)});a.fill={fill:h}}}
var xm=new Ze();function c2(a,e,t,i){xm.minX=0;xm.minY=0;xm.maxX=a.width/i|0;xm.maxY=a.height/i|0;let r=Ve.getOptimalTexture(xm.width,xm.height,i,!1);r.source.uploadMethodId="image";r.source.resource=a;r.source.alphaMode="premultiply-alpha-on-upload";r.frame.width=e/i;r.frame.height=t/i;r.source.emit("update",r.source);r.updateUvs();return r}
var vm=["serif","sans-serif","monospace","cursive","fantasy","system-ui"];function cn(a){let e=typeof a.fontSize=="number"?`${a.fontSize}px`:a.fontSize;let t=a.fontFamily;if(!Array.isArray(a.fontFamily)){t=a.fontFamily.split(",")}
for(let i=t.length-1;i>=0;i--){let s=t[i].trim();if(!/([\"\'])[^\'\"]+\1/.test(s)&&!vm.includes(s)){s=`"${s}"`}
t[i]=s}
return `${a.fontStyle} ${a.fontVariant} ${a.fontWeight} ${e} ${t.join(",")}`}
var Zc={willReadFrequently:!0};var jt=class J{static get experimentalLetterSpacingSupported(){let e=J._experimentalLetterSpacingSupported;if(e!==undefined){let t=CanvasRenderingContext2D.prototype;e=J._experimentalLetterSpacingSupported="letterSpacing" in t||"textLetterSpacing" in t}
return e}
constructor(e,t,i,s,r,n,d,h,l){this.text=e;this.style=t;this.width=i;this.height=s;this.lines=r;this.lineWidths=n;this.lineHeight=d;this.maxLineWidth=h;this.fontProperties=l}
static measureText(e=" ",t,i=J._canvas,s=t.wordWrap){var r;if(J._measurementCache[`${e}:${t.styleKey}`]){return J._measurementCache[`${e}:${t.styleKey}`]}
let d=cn(t);let h=J.measureFont(d);if(h.fontSize===0){h.fontSize=t.fontSize;h.ascent=t.fontSize}
let l=J.__context;l.font=d;let f=(s?J._wordWrap(e,t,i):e).split(/(?:\r\n|\r|\n)/);let p=new Array(f.length);let _=0;for(let P=0;P<f.length;P++){let C=J._measureText(f[P],t.letterSpacing,l);p[P]=C;_=Math.max(_,C)}
let m=((r=t._stroke)==null?undefined:r.width)||0;let v=_+m;if(t.dropShadow){v+=t.dropShadow.distance}
let T=t.lineHeight||h.fontSize;let w=Math.max(T,h.fontSize+m)+(f.length-1)*(T+t.leading);if(t.dropShadow){w+=t.dropShadow.distance}
return new J(e,t,v,w,f,p,T+t.leading,_,h)}
static _measureText(e,t,i){let s=!1;if(J.experimentalLetterSpacingSupported){if(J.experimentalLetterSpacing){i.letterSpacing=`${t}px`;i.textLetterSpacing=`${t}px`;s=!0}else{i.letterSpacing="0px";i.textLetterSpacing="0px"}}
let r=i.measureText(e);let n=r.width;let d=-r.actualBoundingBoxLeft;let h=r.actualBoundingBoxRight-d;if(n>0){if(s){n-=t;h-=t}else{let l=(J.graphemeSegmenter(e).length-1)*t;n+=l;h+=l}}
return Math.max(n,h)}
static _wordWrap(e,t,i=J._canvas){let s=i.getContext("2d",Zc);let r=0;let n="";let d="";let h=Object.create(null);let{letterSpacing:l,whiteSpace:f}=t;let p=J._collapseSpaces(f);let _=J._collapseNewlines(f);let m=!p;let v=t.wordWrapWidth+l;let T=J._tokenize(e);for(let w=0;w<T.length;w++){let P=T[w];if(J._isNewline(P)){if(!_){d+=J._addLine(n);m=!p;n="";r=0;continue}
P=" "}
if(p){let B=J.isBreakingSpace(P);let D=J.isBreakingSpace(n[n.length-1]);if(B&&D){continue}}
let C=J._getFromCache(P,l,h,s);if(C>v){if(n!==""){d+=J._addLine(n);n="";r=0}
if(J.canBreakWords(P,t.breakWords)){let B=J.wordWrapSplit(P);for(let D=0;D<B.length;D++){let X=B[D];let U=X;let L=1;for(;B[D+L];){let ne=B[D+L];if(!J.canBreakChars(U,ne,P,D,t.breakWords)){X+=ne}else{break}
U=ne;L++}
D+=L-1;let ie=J._getFromCache(X,l,h,s);if(ie+r>v){d+=J._addLine(n);m=!1;n="";r=0}
n+=X;r+=ie}}else{if(n.length>0){d+=J._addLine(n);n="";r=0}
let B=w===T.length-1;d+=J._addLine(P,!B);m=!1;n="";r=0}}else{if(C+r>v){m=!1;d+=J._addLine(n);n="";r=0}
if(n.length>0||!J.isBreakingSpace(P)||m){n+=P;r+=C}}}
d+=J._addLine(n,!1);return d}
static _addLine(e,t=!0){e=J._trimRight(e);e=t?`${e}
`:e;return e}
static _getFromCache(e,t,i,s){let r=i[e];if(typeof r!="number"){r=J._measureText(e,t,s)+t;i[e]=r}
return r}
static _collapseSpaces(e){return e==="normal"||e==="pre-line"}
static _collapseNewlines(e){return e==="normal"}
static _trimRight(e){if(typeof e!="string"){return""}
for(let t=e.length-1;t>=0;t--){let i=e[t];if(!J.isBreakingSpace(i)){break}
e=e.slice(0,-1)}
return e}
static _isNewline(e){return typeof e!="string"?!1:J._newlines.includes(e.charCodeAt(0))}
static isBreakingSpace(e,t){return typeof e!="string"?!1:J._breakingSpaces.includes(e.charCodeAt(0))}
static _tokenize(e){let t=[];let i="";if(typeof e!="string"){return t}
for(let s=0;s<e.length;s++){let r=e[s];let n=e[s+1];if(J.isBreakingSpace(r,n)||J._isNewline(r)){if(i!==""){t.push(i);i=""}
t.push(r);continue}
i+=r}
if(i!==""){t.push(i)}
return t}
static canBreakWords(e,t){return t}
static canBreakChars(e,t,i,s,r){return!0}
static wordWrapSplit(e){return J.graphemeSegmenter(e)}
static measureFont(e){if(J._fonts[e]){return J._fonts[e]}
let t=J._context;t.font=e;let i=t.measureText(J.METRICS_STRING+J.BASELINE_SYMBOL);let s={ascent:i.actualBoundingBoxAscent,descent:i.actualBoundingBoxDescent,fontSize:i.actualBoundingBoxAscent+i.actualBoundingBoxDescent};J._fonts[e]=s;return s}
static clearMetrics(e=""){if(e){delete J._fonts[e]}else{J._fonts={}}}
static get _canvas(){if(!J.__canvas){let e;try{let t=new OffscreenCanvas(0,0);let i=t.getContext("2d",Zc);if(i!=null&&i.measureText){J.__canvas=t;return t}
e=n8.createCanvas()}catch{e=n8.createCanvas()}
e.width=e.height=10;J.__canvas=e}
return J.__canvas}
static get _context(){if(!J.__context){J.__context=J._canvas.getContext("2d",Zc)}
return J.__context}};jt.METRICS_STRING="|ÉqÅ";jt.BASELINE_SYMBOL="M";jt.BASELINE_MULTIPLIER=1.4;jt.HEIGHT_MULTIPLIER=2;jt.graphemeSegmenter=(()=>{if(typeof Intl?.Segmenter=="function"){let a=new Intl.Segmenter();return e=>[...a.segment(e)].map(t=>t.segment)}
return a=>[...a]})();jt.experimentalLetterSpacing=!1;jt._fonts={};jt._newlines=[10,13];jt._breakingSpaces=[9,32,8192,8193,8194,8195,8196,8197,8198,8200,8201,8202,8287,12288];jt._measurementCache={};function dn(a,e){var t;if(a.texture===W.WHITE&&!a.fill){return gi.shared.setValue(a.color).setAlpha((t=a.alpha)!=null?t:1).toHexa()}
if(a.fill){if(a.fill instanceof Pi){let i=a.fill;let s=e.createPattern(i.texture.source.resource,"repeat");let r=i.transform.copyTo(ae.shared);r.scale(i.texture.frame.width,i.texture.frame.height);s.setTransform(r);return s}else if(a.fill instanceof e2){let i=a.fill;if(i.type==="linear"){let s=e.createLinearGradient(i.x0,i.y0,i.x1,i.y1);i.gradientStops.forEach(r=>{s.addColorStop(r.offset,gi.shared.setValue(r.color).toHex())});return s}}}else{let i=e.createPattern(a.texture.source.resource,"repeat");let s=a.matrix.copyTo(ae.shared);s.scale(a.texture.frame.width,a.texture.frame.height);i.setTransform(s);return i}
return"red"}
var hn=class{constructor(e){this._activeTextures={};this._renderer=e}
getTextureSize(e,t,i){let s=jt.measureText(e||" ",i);let r=Math.ceil(Math.ceil(Math.max(1,s.width)+i.padding*2)*t);let n=Math.ceil(Math.ceil(Math.max(1,s.height)+i.padding*2)*t);r=Math.ceil(r-1e-6);n=Math.ceil(n-1e-6);r=wi(r);n=wi(n);return{width:r,height:n}}
getTexture(e,t,i,s){if(typeof e=="string"){e={text:e,style:i,resolution:t}}
if(!(e.style instanceof fh)){e.style=new fh(e.style)}
let{texture:r,canvasAndContext:n}=this.createTextureAndCanvas(e);this._renderer.texture.initSource(r._source);ca.returnCanvasAndContext(n);return r}
createTextureAndCanvas(e){var t;let{text:i,style:s}=e;let r=(t=e.resolution)!=null?t:this._renderer.resolution;let n=jt.measureText(i||" ",s);let d=Math.ceil(Math.ceil(Math.max(1,n.width)+s.padding*2)*r);let h=Math.ceil(Math.ceil(Math.max(1,n.height)+s.padding*2)*r);let l=ca.getOptimalCanvasAndContext(d,h);let{canvas:f}=l;this.renderTextToCanvas(i,s,r,l);let p=c2(f,d,h,r);if(s.trim){let _=Eg(f,r);p.frame.copyFrom(_);p.updateUvs()}
return{texture:p,canvasAndContext:l}}
getManagedTexture(e){e._resolution=e._autoResolution?this._renderer.resolution:e.resolution;let t=e._getKey();if(this._activeTextures[t]){this._increaseReferenceCount(t);return this._activeTextures[t].texture}
let{texture:i,canvasAndContext:s}=this.createTextureAndCanvas(e);this._activeTextures[t]={canvasAndContext:s,texture:i,usageCount:1};return i}
_increaseReferenceCount(e){this._activeTextures[e].usageCount++}
decreaseReferenceCount(e){let t=this._activeTextures[e];t.usageCount--;if(t.usageCount===0){ca.returnCanvasAndContext(t.canvasAndContext);Ve.returnTexture(t.texture);let i=t.texture.source;i.resource=null;i.uploadMethodId="unknown";i.alphaMode="no-premultiply-alpha";this._activeTextures[e]=null}}
getReferenceCount(e){return this._activeTextures[e].usageCount}
renderTextToCanvas(e,t,i,s){var r;var n;var d;var h;var l;let{canvas:f,context:p}=s;let _=cn(t);let m=jt.measureText(e||" ",t);let v=m.lines;let T=m.lineHeight;let w=m.lineWidths;let P=m.maxLineWidth;let C=m.fontProperties;let B=f.height;p.resetTransform();p.scale(i,i);p.textBaseline=t.textBaseline;if((r=t._stroke)!=null&&r.width){let L=t._stroke;p.lineWidth=L.width;p.miterLimit=L.miterLimit;p.lineJoin=L.join;p.lineCap=L.cap}
p.font=_;let D;let X;let U=t.dropShadow?2:1;for(let L=0;L<U;++L){let ie=t.dropShadow&&L===0;let ne=ie?Math.ceil(Math.max(1,B)+t.padding*2):0;let q=ne*i;if(ie){p.fillStyle="black";p.strokeStyle="black";let ee=t.dropShadow;let Ce=ee.color;let Tt=ee.alpha;p.shadowColor=gi.shared.setValue(Ce).setAlpha(Tt).toRgbaString();let re=ee.blur*i;let oe=ee.distance*i;p.shadowBlur=re;p.shadowOffsetX=Math.cos(ee.angle)*oe;p.shadowOffsetY=Math.sin(ee.angle)*oe+q}else{p.fillStyle=t._fill?dn(t._fill,p):null;if((n=t._stroke)!=null&&n.width){p.strokeStyle=dn(t._stroke,p)}
p.shadowColor="black"}
let Y=(T-C.fontSize)/2;if(T-C.fontSize<0){Y=0}
let se=(h=(d=t._stroke)==null?undefined:d.width)!=null?h:0;for(let ee=0;ee<v.length;ee++){D=se/2;X=se/2+ee*T+C.ascent+Y;if(t.align==="right"){D+=P-w[ee]}else if(t.align==="center"){D+=(P-w[ee])/2}
if((l=t._stroke)!=null&&l.width){this._drawLetterSpacing(v[ee],t,s,D+t.padding,X+t.padding-ne,!0)}
if(t._fill!==undefined){this._drawLetterSpacing(v[ee],t,s,D+t.padding,X+t.padding-ne)}}}}
_drawLetterSpacing(e,t,i,s,r,n=!1){let{context:d}=i;let h=t.letterSpacing;let l=!1;if(jt.experimentalLetterSpacingSupported){if(jt.experimentalLetterSpacing){d.letterSpacing=`${h}px`;d.textLetterSpacing=`${h}px`;l=!0}else{d.letterSpacing="0px";d.textLetterSpacing="0px"}}
if(h===0||l){if(n){d.strokeText(e,s,r)}else{d.fillText(e,s,r)}
return}
let f=s;let p=jt.graphemeSegmenter(e);let _=d.measureText(e).width;let m=0;for(let v=0;v<p.length;++v){let T=p[v];if(n){d.strokeText(T,f,r)}else{d.fillText(T,f,r)}
let w="";for(let P=v+1;P<p.length;++P){w+=p[P]}
m=d.measureText(w).width;f+=_-m+h;_=m}}
destroy(){this._activeTextures=null}};hn.extension={type:[I.WebGLSystem,I.WebGPUSystem,I.CanvasSystem],name:"canvasText"};fe.add(hn);fe.add(rn);var Tm=Object.defineProperty;var ln=Object.getOwnPropertySymbols;var d2=Object.prototype.hasOwnProperty;var h2=Object.prototype.propertyIsEnumerable;var O0=(a,e,t)=>e in a?Tm(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var Sm=(a,e)=>{for(var t in e||(e={}))if(d2.call(e,t)){O0(a,t,e[t])}
if(ln){for(var t of ln(e))if(h2.call(e,t)){O0(a,t,e[t])}}
return a};var wm=(a,e)=>{var t={};for(var i in a)if(d2.call(a,i)&&e.indexOf(i)<0){t[i]=a[i]}
if(a!=null&&ln){for(var i of ln(a))if(e.indexOf(i)<0&&h2.call(a,i)){t[i]=a[i]}}
return t};var Ye=class a extends ha{constructor(e){if(e instanceof uh){e={context:e}}
let t=e||{};let{context:i,roundPixels:s}=t;let r=wm(t,["context","roundPixels"]);super(Sm({label:"Graphics"},r));this.renderPipeId="graphics";if(i){this._context=i}else{this._context=this._ownedContext=new uh()}
this._context.on("update",this.onViewUpdate,this);this.allowChildren=!1;this.roundPixels=s??!1}
set context(e){if(e!==this._context){this._context.off("update",this.onViewUpdate,this);this._context=e;this._context.on("update",this.onViewUpdate,this);this.onViewUpdate()}}
get context(){return this._context}
get bounds(){return this._context.bounds}
updateBounds(){}
containsPoint(e){return this._context.containsPoint(e)}
destroy(e){if(this._ownedContext&&!e){this._ownedContext.destroy(e)}else if(e===!0||e?.context===!0){this._context.destroy(e)}
this._ownedContext=null;this._context=null;super.destroy(e)}
_callContextMethod(e,t){this.context[e](...t);return this}
setFillStyle(...e){return this._callContextMethod("setFillStyle",e)}
setStrokeStyle(...e){return this._callContextMethod("setStrokeStyle",e)}
fill(...e){return this._callContextMethod("fill",e)}
stroke(...e){return this._callContextMethod("stroke",e)}
texture(...e){return this._callContextMethod("texture",e)}
beginPath(){return this._callContextMethod("beginPath",[])}
cut(){return this._callContextMethod("cut",[])}
arc(...e){return this._callContextMethod("arc",e)}
arcTo(...e){return this._callContextMethod("arcTo",e)}
arcToSvg(...e){return this._callContextMethod("arcToSvg",e)}
bezierCurveTo(...e){return this._callContextMethod("bezierCurveTo",e)}
closePath(){return this._callContextMethod("closePath",[])}
ellipse(...e){return this._callContextMethod("ellipse",e)}
circle(...e){return this._callContextMethod("circle",e)}
path(...e){return this._callContextMethod("path",e)}
lineTo(...e){return this._callContextMethod("lineTo",e)}
moveTo(...e){return this._callContextMethod("moveTo",e)}
quadraticCurveTo(...e){return this._callContextMethod("quadraticCurveTo",e)}
rect(...e){return this._callContextMethod("rect",e)}
roundRect(...e){return this._callContextMethod("roundRect",e)}
poly(...e){return this._callContextMethod("poly",e)}
regularPoly(...e){return this._callContextMethod("regularPoly",e)}
roundPoly(...e){return this._callContextMethod("roundPoly",e)}
roundShape(...e){return this._callContextMethod("roundShape",e)}
filletRect(...e){return this._callContextMethod("filletRect",e)}
chamferRect(...e){return this._callContextMethod("chamferRect",e)}
star(...e){return this._callContextMethod("star",e)}
svg(...e){return this._callContextMethod("svg",e)}
restore(...e){return this._callContextMethod("restore",e)}
save(){return this._callContextMethod("save",[])}
getTransform(){return this.context.getTransform()}
resetTransform(){return this._callContextMethod("resetTransform",[])}
rotateTransform(...e){return this._callContextMethod("rotate",e)}
scaleTransform(...e){return this._callContextMethod("scale",e)}
setTransform(...e){return this._callContextMethod("setTransform",e)}
transform(...e){return this._callContextMethod("transform",e)}
translateTransform(...e){return this._callContextMethod("translate",e)}
clear(){return this._callContextMethod("clear",[])}
get fillStyle(){return this._context.fillStyle}
set fillStyle(e){this._context.fillStyle=e}
get strokeStyle(){return this._context.strokeStyle}
set strokeStyle(e){this._context.strokeStyle=e}
clone(e=!1){return e?new a(this._context.clone()):(this._ownedContext=null,new a(this._context))}
lineStyle(e,t,i){let s={};if(e){s.width=e}
if(t){s.color=t}
if(i){s.alpha=i}
this.context.strokeStyle=s;return this}
beginFill(e,t){let i={};if(e!==undefined){i.color=e}
if(t!==undefined){i.alpha=t}
this.context.fillStyle=i;return this}
endFill(){this.context.fill();let e=this.context.strokeStyle;if(e.width!==uh.defaultStrokeStyle.width||e.color!==uh.defaultStrokeStyle.color||e.alpha!==uh.defaultStrokeStyle.alpha){this.context.stroke()}
return this}
drawCircle(...e){return this._callContextMethod("circle",e)}
drawEllipse(...e){return this._callContextMethod("ellipse",e)}
drawPolygon(...e){return this._callContextMethod("poly",e)}
drawRect(...e){return this._callContextMethod("rect",e)}
drawRoundedRect(...e){return this._callContextMethod("roundRect",e)}
drawStar(...e){return this._callContextMethod("star",e)}};var Am={name:"local-uniform-msdf-bit",vertex:{header:`
struct LocalUniforms {
uColor:vec4<f32>,
uTransformMatrix:mat3x3<f32>,
uDistance: f32,
uRound:f32,
}

@group(2) @binding(0) var<uniform> localUniforms : LocalUniforms;
`,main:`
vColor *= localUniforms.uColor;
modelMatrix *= localUniforms.uTransformMatrix;
`,end:`
if(localUniforms.uRound == 1)
{
vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
}
`},fragment:{header:`
struct LocalUniforms {
uColor:vec4<f32>,
uTransformMatrix:mat3x3<f32>,
uDistance: f32
}

@group(2) @binding(0) var<uniform> localUniforms : LocalUniforms;
`,main:` 
outColor = vec4<f32>(calculateMSDFAlpha(outColor, localUniforms.uColor, localUniforms.uDistance));
`}};var Em={name:"local-uniform-msdf-bit",vertex:{header:`
uniform mat3 uTransformMatrix;
uniform vec4 uColor;
uniform float uRound;
`,main:`
vColor *= uColor;
modelMatrix *= uTransformMatrix;
`,end:`
if(uRound == 1.)
{
gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
}
`},fragment:{header:`
uniform float uDistance;
`,main:` 
outColor = vec4(calculateMSDFAlpha(outColor, vColor, uDistance));
`}};var Pm={name:"msdf-bit",fragment:{header:`
fn calculateMSDFAlpha(msdfColor:vec4<f32>, shapeColor:vec4<f32>, distance:f32) -> f32 {

// MSDF
var median = msdfColor.r + msdfColor.g + msdfColor.b -
min(msdfColor.r, min(msdfColor.g, msdfColor.b)) -
max(msdfColor.r, max(msdfColor.g, msdfColor.b));

// SDF
median = min(median, msdfColor.a);

var screenPxDistance = distance * (median - 0.5);
var alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);
if (median < 0.01) {
alpha = 0.0;
} else if (median > 0.99) {
alpha = 1.0;
}

// Gamma correction for coverage-like alpha
var luma: f32 = dot(shapeColor.rgb, vec3<f32>(0.299, 0.587, 0.114));
var gamma: f32 = mix(1.0, 1.0 / 2.2, luma);
var coverage: f32 = pow(shapeColor.a * alpha, gamma);

return coverage;

}
`}};var Rm={name:"msdf-bit",fragment:{header:`
float calculateMSDFAlpha(vec4 msdfColor, vec4 shapeColor, float distance) {

// MSDF
float median = msdfColor.r + msdfColor.g + msdfColor.b -
            min(msdfColor.r, min(msdfColor.g, msdfColor.b)) -
            max(msdfColor.r, max(msdfColor.g, msdfColor.b));

// SDF
median = min(median, msdfColor.a);

float screenPxDistance = distance * (median - 0.5);
float alpha = clamp(screenPxDistance + 0.5, 0.0, 1.0);

if (median < 0.01) {
alpha = 0.0;
} else if (median > 0.99) {
alpha = 1.0;
}

// Gamma correction for coverage-like alpha
float luma = dot(shapeColor.rgb, vec3(0.299, 0.587, 0.114));
float gamma = mix(1.0, 1.0 / 2.2, luma);
float coverage = pow(shapeColor.a * alpha, gamma);  

return coverage;
}
`}};var Qc;var Jc;var bh=class extends ht{constructor(){let e=new jp({uColor:{value:new Float32Array([1,1,1,1]),type:"vec4<f32>"},uTransformMatrix:{value:new ae(),type:"mat3x3<f32>"},uDistance:{value:4,type:"f32"},uRound:{value:0,type:"f32"}});let t=Ci();if(!(Qc!=null)){Qc=Xs({name:"sdf-shader",bits:[gl,_l(t),Am,Pm,zs]})}
if(!(Jc!=null)){Jc=Hs({name:"sdf-shader",bits:[ml,yl(t),Em,Rm,Vs]})}
super({glProgram:Jc,gpuProgram:Qc,resources:{localUniforms:e,batchSamplers:xl(t)}})}};var ed=0;function Qt(...a){if(ed!==500){ed++}}
var un=class extends xt{constructor(){super(...arguments);this.chars=Object.create(null);this.lineHeight=0;this.fontFamily="";this.fontMetrics={fontSize:0,ascent:0,descent:0};this.baseLineOffset=0;this.distanceField={type:"none",range:0};this.pages=[];this.applyFillAsTint=!0;this.baseMeasurementFontSize=100;this.baseRenderedFontSize=100}
get font(){return this.fontFamily}
get pageTextures(){return this.pages}
get size(){return this.fontMetrics.fontSize}
get distanceFieldRange(){return this.distanceField.range}
get distanceFieldType(){return this.distanceField.type}
destroy(e=!1){var t;this.emit("destroy",this);this.removeAllListeners();for(let i in this.chars)if(!((t=this.chars[i].texture)==null)){t.destroy()}
this.chars=null;if(e){this.pages.forEach(i=>i.texture.destroy(!0));this.pages=null}}};function l2(a){if(a===""){return[]}
if(typeof a=="string"){a=[a]}
let e=[];let t=0;for(let i=a.length;t<i;t++){let s=a[t];if(Array.isArray(s)){if(s.length!==2){throw new Error(`[BitmapFont]: Invalid character range length, expecting 2 got ${s.length}.`)}
if(s[0].length===0||s[1].length===0){throw new Error("[BitmapFont]: Invalid character delimiter.")}
let r=s[0].charCodeAt(0);let n=s[1].charCodeAt(0);if(n<r){throw new Error("[BitmapFont]: Invalid character range.")}
for(let d=r;d<=n;d++){e.push(String.fromCharCode(d))}}else{e.push(...Array.from(s))}}
if(e.length===0){throw new Error("[BitmapFont]: Empty set when resolving characters.")}
return e}
var Mm=Object.defineProperty;var G0=Object.getOwnPropertySymbols;var Cm=Object.prototype.hasOwnProperty;var Om=Object.prototype.propertyIsEnumerable;var B0=(a,e,t)=>e in a?Mm(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var F0=(a,e)=>{for(var t in e||(e={}))if(Cm.call(e,t)){B0(a,t,e[t])}
if(G0){for(var t of G0(e))if(Om.call(e,t)){B0(a,t,e[t])}}
return a};var u2=class f2 extends un{constructor(e){var t;var i;var s;super();this.resolution=1;this.pages=[];this._padding=0;this._measureCache=Object.create(null);this._currentChars=[];this._currentX=0;this._currentY=0;this._currentPageIndex=-1;this._skipKerning=!1;let r=F0(F0({},f2.defaultOptions),e);this._textureSize=r.textureSize;this._mipmap=r.mipmap;let n=r.style.clone();if(r.overrideFill){n._fill.color=16777215;n._fill.alpha=1;n._fill.texture=W.WHITE;n._fill.fill=null}
this.applyFillAsTint=r.overrideFill;let d=n.fontSize;n.fontSize=this.baseMeasurementFontSize;let h=cn(n);if(r.overrideSize){if(n._stroke){n._stroke.width*=this.baseRenderedFontSize/d}}else{n.fontSize=this.baseRenderedFontSize=d}
this._style=n;this._skipKerning=(t=r.skipKerning)!=null?t:!1;this.resolution=(i=r.resolution)!=null?i:1;this._padding=(s=r.padding)!=null?s:4;this.fontMetrics=jt.measureFont(h);this.lineHeight=n.lineHeight||this.fontMetrics.fontSize||n.fontSize}
ensureCharacters(e){var t;var i;var s;var r;let n=l2(e).filter(D=>!this._currentChars.includes(D)).filter((D,X,U)=>U.indexOf(D)===X);if(!n.length){return}
this._currentChars=[...this._currentChars,...n];let d;if(this._currentPageIndex===-1){d=this._nextPage()}else{d=this.pages[this._currentPageIndex]}
let{canvas:h,context:l}=d.canvasAndContext;let f=d.texture.source;let p=this._style;let _=this._currentX;let m=this._currentY;let v=this.baseRenderedFontSize/this.baseMeasurementFontSize;let T=this._padding*v;let w=0;let P=!1;let C=h.width/this.resolution;let B=h.height/this.resolution;for(let D=0;D<n.length;D++){let X=n[D];let U=jt.measureText(X,p,h,!1);U.lineHeight=U.height;let L=U.width*v;let ie=Math.ceil((p.fontStyle==="italic"?2:1)*L);let ne=U.height*v;let q=ie+T*2;let Y=ne+T*2;P=!1;if(X!==`
`&&X!=="\r"&&X!=="	"&&X!==" "){P=!0;w=Math.ceil(Math.max(Y,w))}
if(_+q>C&&(m+=w,w=Y,_=0,m+w>B)){f.update();let ee=this._nextPage();h=ee.canvasAndContext.canvas;l=ee.canvasAndContext.context;f=ee.texture.source;m=0}
let se=L/v-((i=(t=p.dropShadow)==null?undefined:t.distance)!=null?i:0)-((r=(s=p._stroke)==null?undefined:s.width)!=null?r:0);this.chars[X]={id:X.codePointAt(0),xOffset:-this._padding,yOffset:-this._padding,xAdvance:se,kerning:{}};if(P){this._drawGlyph(l,U,_+T,m+T,v,p);let ee=f.width*v;let Ce=f.height*v;let Tt=new we(_/ee*f.width,m/Ce*f.height,q/ee*f.width,Y/Ce*f.height);this.chars[X].texture=new W({source:f,frame:Tt});_+=Math.ceil(q)}}
f.update();this._currentX=_;this._currentY=m;if(this._skipKerning){this._applyKerning(n,l)}}
get pageTextures(){return this.pages}
_applyKerning(e,t){let i=this._measureCache;for(let s=0;s<e.length;s++){let r=e[s];for(let n=0;n<this._currentChars.length;n++){let d=this._currentChars[n];let h=i[r];if(!h){h=i[r]=t.measureText(r).width}
let l=i[d];if(!l){l=i[d]=t.measureText(d).width}
let f=t.measureText(r+d).width;let p=f-(h+l);if(p){this.chars[r].kerning[d]=p}
f=t.measureText(r+d).width;p=f-(h+l);if(p){this.chars[d].kerning[r]=p}}}}
_nextPage(){this._currentPageIndex++;let e=this.resolution;let t=ca.getOptimalCanvasAndContext(this._textureSize,this._textureSize,e);this._setupContext(t.context,this._style,e);let i=e*(this.baseRenderedFontSize/this.baseMeasurementFontSize);let s=new W({source:new Ma({resource:t.canvas,resolution:i,alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:this._mipmap})});let r={canvasAndContext:t,texture:s};this.pages[this._currentPageIndex]=r;return r}
_setupContext(e,t,i){var s;t.fontSize=this.baseRenderedFontSize;e.scale(i,i);e.font=cn(t);t.fontSize=this.baseMeasurementFontSize;e.textBaseline=t.textBaseline;let r=t._stroke;let n=(s=r?.width)!=null?s:0;if(r){e.lineWidth=n;e.lineJoin=r.join;e.miterLimit=r.miterLimit;e.strokeStyle=dn(r,e)}
if(t._fill){e.fillStyle=dn(t._fill,e)}
if(t.dropShadow){let d=t.dropShadow;let h=gi.shared.setValue(d.color).toArray();let l=d.blur*i;let f=d.distance*i;e.shadowColor=`rgba(${h[0] * 255},${h[1] * 255},${h[2] * 255},${d.alpha})`;e.shadowBlur=l;e.shadowOffsetX=Math.cos(d.angle)*f;e.shadowOffsetY=Math.sin(d.angle)*f}else{e.shadowColor="black";e.shadowBlur=0;e.shadowOffsetX=0;e.shadowOffsetY=0}}
_drawGlyph(e,t,i,s,r,n){var d;let h=t.text;let l=t.fontProperties;let f=n._stroke;let p=((d=f?.width)!=null?d:0)*r;let _=i+p/2;let m=s-p/2;let v=l.descent*r;let T=t.lineHeight*r;if(n.stroke&&p){e.strokeText(h,_,m+T-v)}
if(n._fill){e.fillText(h,_,m+T-v)}}
destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){let{canvasAndContext:t,texture:i}=this.pages[e];ca.returnCanvasAndContext(t);i.destroy(!0)}
this.pages=null}};u2.defaultOptions={textureSize:512,style:new fh(),mipmap:!0};function b2(a,e,t,i){let s={width:0,height:0,offsetY:0,scale:e.fontSize/t.baseMeasurementFontSize,lines:[{width:0,charPositions:[],spaceWidth:0,spacesIndex:[],chars:[]}]};s.offsetY=t.baseLineOffset;let r=s.lines[0];let n=null;let d=!0;let h={spaceWord:!1,width:0,start:0,index:0,positions:[],chars:[]};let l=v=>{let T=r.width;for(let w=0;w<0;w++){let P=v.positions[w];r.chars.push(v.chars[w]);r.charPositions.push(P+T)}
r.width+=v.width;d=!1;h.width=0;h.index=0;h.chars.length=0};let f=()=>{let v=r.chars.length-1;if(i){let T=r.chars[v];for(;T===" ";){r.width-=t.chars[T].xAdvance;T=r.chars[--v]}}
s.width=Math.max(0,r.width);r={width:0,charPositions:[],chars:[],spaceWidth:0,spacesIndex:[]};d=!0;s.lines.push(r);s.height+=t.lineHeight};let p=t.baseMeasurementFontSize/e.fontSize;let _=e.letterSpacing*p;let m=e.wordWrapWidth*p;for(let v=0;v<a.length+1;v++){let T;let w=v===a.length;if(!w){T=a[v]}
let P=t.chars[T]||t.chars[" "];if(/(?:\s)/.test(T)||T==="\r"||T===`
`||w){if(!d&&e.wordWrap&&r.width+0-_>m){f();l(h);if(!w){r.charPositions.push(0)}}else{h.start=r.width;l(h);if(!w){r.charPositions.push(0)}}
if(T==="\r"||T===`
`){if(r.width!==0){f()}}else if(!w){let C=P.xAdvance+(P.kerning[n]||0)+_;r.width+=C;r.spaceWidth=C;r.spacesIndex.push(r.charPositions.length);r.chars.push(T)}}else{let C=P.kerning[n]||0;let B=P.xAdvance+C+_;h.positions[0++]=0+C;h.chars.push(T);h.width+=B}
n=T}
f();if(e.align==="center"){Im(s)}else if(e.align==="right"){Gm(s)}else if(e.align==="justify"){Bm(s)}
return s}
function Im(a){for(let e=0;e<a.lines.length;e++){let t=a.lines[e];let i=a.width/2-t.width/2;for(let s=0;s<t.charPositions.length;s++){t.charPositions[s]+=i}}}
function Gm(a){for(let e=0;e<a.lines.length;e++){let t=a.lines[e];let i=a.width-t.width;for(let s=0;s<t.charPositions.length;s++){t.charPositions[s]+=i}}}
function Bm(a){let e=a.width;for(let t=0;t<a.lines.length;t++){let i=a.lines[t];let s=0;let r=i.spacesIndex[s++];let n=0;let d=i.spacesIndex.length;let h=(e-i.width)/d;for(let l=0;l<i.charPositions.length;l++){if(l===r){r=i.spacesIndex[s++];n+=h}
i.charPositions[l]+=n}}}
var Fm=Object.defineProperty;var k0=Object.getOwnPropertySymbols;var Dm=Object.prototype.hasOwnProperty;var km=Object.prototype.propertyIsEnumerable;var U0=(a,e,t)=>e in a?Fm(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var td=(a,e)=>{for(var t in e||(e={}))if(Dm.call(e,t)){U0(a,t,e[t])}
if(k0){for(var t of k0(e))if(km.call(e,t)){U0(a,t,e[t])}}
return a};var xr=0;var Um=class{constructor(){this.ALPHA=[["a","z"],["A","Z"]," "];this.NUMERIC=[["0","9"]];this.ALPHANUMERIC=[["a","z"],["A","Z"],["0","9"]," "];this.ASCII=[[" ","~"]];this.defaultOptions={chars:this.ALPHANUMERIC,resolution:1,padding:4,skipKerning:!1}}
getFont(a,e){var t;let i=`${e.fontFamily}-bitmap`;let s=!0;if(e._fill.fill&&!e._stroke){i+=e._fill.fill.styleKey;s=!1}else if(e._stroke||e.dropShadow){let n=e.styleKey;n=n.substring(0,n.lastIndexOf("-"));i=`${n}-bitmap`;s=!1}
if(!Me.has(i)){let n=new u2(td({style:e,overrideFill:s,overrideSize:!0},this.defaultOptions));xr++;if(xr>50){Qt("BitmapText",`You have dynamically created ${xr} bitmap fonts, this can be inefficient. Try pre installing your font styles using \`BitmapFont.install({name:"style1", style})\``)}
n.once("destroy",()=>{xr--;Me.remove(i)});Me.set(i,n)}
let r=Me.get(i);if(!((t=r.ensureCharacters)==null)){t.call(r,a)}
return r}
getLayout(a,e,t=!0){let i=this.getFont(a,e);return b2([...a],e,i,t)}
measureText(a,e,t=!0){return this.getLayout(a,e,t)}
install(...a){var e;var t;var i;var s;let r=a[0];if(typeof r=="string"){r={name:r,style:a[1],chars:(e=a[2])==null?undefined:e.chars,resolution:(t=a[2])==null?undefined:t.resolution,padding:(i=a[2])==null?undefined:i.padding,skipKerning:(s=a[2])==null?undefined:s.skipKerning}}
let n=r?.name;if(!n){throw new Error("[BitmapFontManager] Property `name` is required.")}
r=td(td({},this.defaultOptions),r);let d=r.style;let h=d instanceof fh?d:new fh(d);let l=h._fill.fill!==null&&h._fill.fill!==undefined;let f=new u2({style:h,overrideFill:l,skipKerning:r.skipKerning,padding:r.padding,resolution:r.resolution,overrideSize:!1});let p=l2(r.chars);f.ensureCharacters(p.join(""));Me.set(`${n}-bitmap`,f);f.once("destroy",()=>Me.remove(`${n}-bitmap`));return f}
uninstall(a){let t=Me.get(`${a}-bitmap`);if(t){t.destroy()}}};var fn=new Um();var bn=class{constructor(e){this._gpuBitmapText={};this._destroyRenderableBound=this.destroyRenderable.bind(this);this._renderer=e;this._renderer.renderableGC.addManagedHash(this,"_gpuBitmapText")}
validateRenderable(e){let t=this._getGpuBitmapText(e);if(e._didTextUpdate){e._didTextUpdate=!1;this._updateContext(e,t)}
return this._renderer.renderPipes.graphics.validateRenderable(t)}
addRenderable(e,t){let i=this._getGpuBitmapText(e);L0(e,i);if(e._didTextUpdate){e._didTextUpdate=!1;this._updateContext(e,i)}
this._renderer.renderPipes.graphics.addRenderable(i,t);if(i.context.customShader){this._updateDistanceField(e)}}
destroyRenderable(e){e.off("destroyed",this._destroyRenderableBound);this._destroyRenderableByUid(e.uid)}
_destroyRenderableByUid(e){let t=this._gpuBitmapText[e].context;if(t.customShader){me.return(t.customShader);t.customShader=null}
me.return(this._gpuBitmapText[e]);this._gpuBitmapText[e]=null}
updateRenderable(e){let t=this._getGpuBitmapText(e);L0(e,t);this._renderer.renderPipes.graphics.updateRenderable(t);if(t.context.customShader){this._updateDistanceField(e)}}
_updateContext(e,t){let{context:i}=t;let s=fn.getFont(e.text,e._style);i.clear();if(s.distanceField.type!=="none"){if(!i.customShader){i.customShader=me.get(bh)}}
let r=Array.from(e.text);let n=e._style;let d=s.baseLineOffset;let h=b2(r,n,s,!0);let l=0;let f=n.padding;let p=h.scale;let _=h.width;let m=h.height+h.offsetY;if(n._stroke){_+=n._stroke.width/p;m+=n._stroke.width/p}
i.translate(-e._anchor._x*_-f,-e._anchor._y*m-f).scale(p,p);let v=s.applyFillAsTint?n._fill.color:16777215;for(let T=0;T<h.lines.length;T++){let w=h.lines[T];for(let P=0;P<w.charPositions.length;P++){let C=r[l++];let B=s.chars[C];if(B!=null&&B.texture){i.texture(B.texture,v||"black",Math.round(w.charPositions[P]+B.xOffset),Math.round(d+B.yOffset))}}
d+=s.lineHeight}}
_getGpuBitmapText(e){return this._gpuBitmapText[e.uid]||this.initGpuText(e)}
initGpuText(e){let t=me.get(Ye);this._gpuBitmapText[e.uid]=t;this._updateContext(e,t);e.on("destroyed",this._destroyRenderableBound);return this._gpuBitmapText[e.uid]}
_updateDistanceField(e){let t=this._getGpuBitmapText(e).context;let i=e._style.fontFamily;let s=Me.get(`${i}-bitmap`);let{a:r,b:n,c:d,d:h}=e.groupTransform;let l=Math.sqrt(r*r+n*n);let f=Math.sqrt(d*d+h*h);let p=(Math.abs(l)+Math.abs(f))/2;let _=s.baseRenderedFontSize/e._style.fontSize;let m=p*s.distanceField.range*(1/_);t.customShader.resources.localUniforms.uniforms.uDistance=m}
destroy(){for(let e in this._gpuBitmapText)this._destroyRenderableByUid(e);this._gpuBitmapText=null;this._renderer=null}};bn.extension={type:[I.WebGLPipes,I.WebGPUPipes,I.CanvasPipes],name:"bitmapText"};function L0(a,e){e.groupTransform=a.groupTransform;e.groupColorAlpha=a.groupColorAlpha;e.groupColor=a.groupColor;e.groupBlendMode=a.groupBlendMode;e.globalDisplayStatus=a.globalDisplayStatus;e.groupTransform=a.groupTransform;e.localDisplayStatus=a.localDisplayStatus;e.groupAlpha=a.groupAlpha;e._roundPixels=a._roundPixels}
fe.add(bn);var pn=class{constructor(e){this._gpuText=Object.create(null);this._destroyRenderableBound=this.destroyRenderable.bind(this);this._renderer=e;this._renderer.runners.resolutionChange.add(this);this._renderer.renderableGC.addManagedHash(this,"_gpuText")}
resolutionChange(){for(let e in this._gpuText){let t=this._gpuText[e];if(!t){continue}
let i=t.batchableSprite.renderable;if(i._autoResolution){i._resolution=this._renderer.resolution;i.onViewUpdate()}}}
validateRenderable(e){let t=this._getGpuText(e);let i=e._getKey();return t.textureNeedsUploading?(t.textureNeedsUploading=!1,!0):t.currentKey!==i}
addRenderable(e,t){let i=this._getGpuText(e).batchableSprite;if(e._didTextUpdate){this._updateText(e)}
this._renderer.renderPipes.batch.addToBatch(i,t)}
updateRenderable(e){let t=this._getGpuText(e).batchableSprite;if(e._didTextUpdate){this._updateText(e)}
t._batcher.updateElement(t)}
destroyRenderable(e){e.off("destroyed",this._destroyRenderableBound);this._destroyRenderableById(e.uid)}
_destroyRenderableById(e){let t=this._gpuText[e];this._renderer.htmlText.decreaseReferenceCount(t.currentKey);me.return(t.batchableSprite);this._gpuText[e]=null}
_updateText(e){let t=e._getKey();let i=this._getGpuText(e);let s=i.batchableSprite;if(i.currentKey!==t){this._updateGpuText(e).catch(r=>{})}
e._didTextUpdate=!1;ih(s,e)}
async _updateGpuText(e){var t;e._didTextUpdate=!1;let i=this._getGpuText(e);if(i.generatingTexture){return}
let s=e._getKey();this._renderer.htmlText.decreaseReferenceCount(i.currentKey);i.generatingTexture=!0;i.currentKey=s;let r=(t=e.resolution)!=null?t:this._renderer.resolution;let n=await this._renderer.htmlText.getManagedTexture(e.text,r,e._style,e._getKey());let d=i.batchableSprite;d.texture=i.texture=n;i.generatingTexture=!1;i.textureNeedsUploading=!0;e.onViewUpdate();ih(d,e)}
_getGpuText(e){return this._gpuText[e.uid]||this.initGpuText(e)}
initGpuText(e){let t={texture:W.EMPTY,currentKey:"--",batchableSprite:me.get(Ei),textureNeedsUploading:!1,generatingTexture:!1};let i=t.batchableSprite;i.renderable=e;i.transform=e.groupTransform;i.texture=W.EMPTY;i.bounds={minX:0,maxX:1,minY:0,maxY:0};i.roundPixels=this._renderer._roundPixels|e._roundPixels;e._resolution=e._autoResolution?this._renderer.resolution:e.resolution;this._gpuText[e.uid]=t;e.on("destroyed",this._destroyRenderableBound);return t}
destroy(){for(let e in this._gpuText)this._destroyRenderableById(e);this._gpuText=null;this._renderer=null}};pn.extension={type:[I.WebGLPipes,I.WebGPUPipes,I.CanvasPipes],name:"htmlText"};function Lm(){let{userAgent:a}=navigator;return/^((?!chrome|android).)*safari/i.test(a)}
var gn=class{constructor(){this.svgRoot=document.createElementNS("http://www.w3.org/2000/svg","svg");this.foreignObject=document.createElementNS("http://www.w3.org/2000/svg","foreignObject");this.domElement=document.createElementNS("http://www.w3.org/1999/xhtml","div");this.styleElement=document.createElementNS("http://www.w3.org/1999/xhtml","style");this.image=new Image();let{foreignObject:e,svgRoot:t,styleElement:i,domElement:s}=this;e.setAttribute("width","10000");e.setAttribute("height","10000");e.style.overflow="hidden";t.appendChild(e);e.appendChild(i);e.appendChild(s)}};function Nm(a){let e=a._stroke;let t=a._fill;let i=[`div { ${[`color:${gi.shared.setValue(t.color).toHex()}`, `font-size:${a.fontSize}px`, `font-family:${a.fontFamily}`, `font-weight:${a.fontWeight}`, `font-style:${a.fontStyle}`, `font-variant:${a.fontVariant}`, `letter-spacing:${a.letterSpacing}px`, `text-align:${a.align}`, `padding:${a.padding}px`, `white-space:${a.whiteSpace==="pre"&&a.wordWrap?"pre-wrap":a.whiteSpace}`, ...(a.lineHeight ? [`line-height:${a.lineHeight}px`] : []), ...(a.wordWrap ? [`word-wrap:${a.breakWords?"break-all":"break-word"}`, `max-width:${a.wordWrapWidth}px`] : []), ...(e ? [[`-webkit-text-stroke-width:${e.width}px`, `-webkit-text-stroke-color:${gi.shared.setValue(e.color).toHex()}`, `text-stroke-width:${e.width}px`, `text-stroke-color:${gi.shared.setValue(e.color).toHex()}`, "paint-order: stroke"].join(";")] : []), ...(a.dropShadow ? [p2(a.dropShadow)] : []), ...a.cssOverrides].join(";")} }`];jm(a.tagStyles,i);return i.join(" ")}
function p2(a){let e=gi.shared.setValue(a.color).setAlpha(a.alpha).toHexa();let t=Math.round(Math.cos(a.angle)*a.distance);let i=Math.round(Math.sin(a.angle)*a.distance);return a.blur>0?`text-shadow: ${`${t}px ${i}px`} ${a.blur}px ${e}`:`text-shadow: ${`${t}px ${i}px`} ${e}`}
function g2(a){return[`-webkit-text-stroke-width: ${a.width}px`,`-webkit-text-stroke-color: ${gi.shared.setValue(a.color).toHex()}`,`text-stroke-width: ${a.width}px`,`text-stroke-color: ${gi.shared.setValue(a.color).toHex()}`,"paint-order: stroke"].join(";")}
var X0={fontSize:"font-size: {{VALUE}}px",fontFamily:"font-family: {{VALUE}}",fontWeight:"font-weight: {{VALUE}}",fontStyle:"font-style: {{VALUE}}",fontVariant:"font-variant: {{VALUE}}",letterSpacing:"letter-spacing: {{VALUE}}px",align:"text-align: {{VALUE}}",padding:"padding: {{VALUE}}px",whiteSpace:"white-space: {{VALUE}}",lineHeight:"line-height: {{VALUE}}px",wordWrapWidth:"max-width: {{VALUE}}px"};var H0={fill:a=>`color: ${gi.shared.setValue(a).toHex()}`,breakWords:a=>`word-wrap: ${a ? "break-all" : "break-word"}`,stroke:g2,dropShadow:p2};function jm(a,e){for(let t in a){let i=a[t];let s=[];for(let r in i)if(H0[r]){s.push(H0[r](i[r]))}else if(X0[r]){s.push(X0[r].replace("{{VALUE}}",i[r]))}
e.push(`${t} { ${s.join(";")} }`)}}
var Xm=Object.defineProperty;var z0=Object.getOwnPropertySymbols;var Hm=Object.prototype.hasOwnProperty;var zm=Object.prototype.propertyIsEnumerable;var V0=(a,e,t)=>e in a?Xm(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var Vm=(a,e)=>{for(var t in e||(e={}))if(Hm.call(e,t)){V0(a,t,e[t])}
if(z0){for(var t of z0(e))if(zm.call(e,t)){V0(a,t,e[t])}}
return a};var mn=class a extends fh{constructor(e={}){var t;var i;super(e);this._cssOverrides=[];if(!((t=this.cssOverrides)!=null)){this.cssOverrides=e.cssOverrides}
this.tagStyles=(i=e.tagStyles)!=null?i:{}}
set cssOverrides(e){this._cssOverrides=e instanceof Array?e:[e];this.update()}
get cssOverrides(){return this._cssOverrides}
_generateKey(){this._styleKey=n2(this)+this._cssOverrides.join("-");return this._styleKey}
update(){this._cssStyle=null;super.update()}
clone(){return new a({align:this.align,breakWords:this.breakWords,dropShadow:this.dropShadow?Vm({},this.dropShadow):null,fill:this._fill,fontFamily:this.fontFamily,fontSize:this.fontSize,fontStyle:this.fontStyle,fontVariant:this.fontVariant,fontWeight:this.fontWeight,letterSpacing:this.letterSpacing,lineHeight:this.lineHeight,padding:this.padding,stroke:this._stroke,whiteSpace:this.whiteSpace,wordWrap:this.wordWrap,wordWrapWidth:this.wordWrapWidth,cssOverrides:this.cssOverrides})}
get cssStyle(){if(!this._cssStyle){this._cssStyle=Nm(this)}
return this._cssStyle}
addOverride(...e){let t=e.filter(i=>!this.cssOverrides.includes(i));if(t.length>0){this.cssOverrides.push(...t);this.update()}}
removeOverride(...e){let t=e.filter(i=>this.cssOverrides.includes(i));if(t.length>0){this.cssOverrides=this.cssOverrides.filter(i=>!t.includes(i));this.update()}}
set fill(e){super.fill=e}
set stroke(e){super.stroke=e}};function Wm(a,e){let t=e.fontFamily;let i=[];let s={};let r=/font-family:([^;"\s]+)/g;let n=a.match(r);function d(h){if(!s[h]){i.push(h);s[h]=!0}}
if(Array.isArray(t)){for(let h=0;h<t.length;h++){d(t[h])}}else{d(t)}
if(n){n.forEach(h=>{let l=h.split(":")[1].trim();d(l)})}
for(let h in e.tagStyles){let l=e.tagStyles[h].fontFamily;d(l)}
return i}
async function Ym(a){let e=await(await fetch(a,undefined)).blob();let t=new FileReader();return await new Promise((i,s)=>{t.onloadend=()=>i(t.result);t.onerror=s;t.readAsDataURL(e)})}
async function W0(a,e){let t=await Ym(e);return `@font-face {
font-family: "${a.fontFamily}";
src: url('${t}');
font-weight: ${a.fontWeight};
font-style: ${a.fontStyle};
}`}
var vr=new Map();async function $m(a,e,t){let i=a.filter(s=>Me.has(`${s}-and-url`)).map((s,r)=>{if(!vr.has(s)){let{url:n}=Me.get(`${s}-and-url`);if(r===0){vr.set(s,W0({fontWeight:e.fontWeight,fontStyle:e.fontStyle,fontFamily:s},n))}else{vr.set(s,W0({fontWeight:t.fontWeight,fontStyle:t.fontStyle,fontFamily:s},n))}}
return vr.get(s)});return(await Promise.all(i)).join(`
`)}
function Km(a,e,t,i,s){let{domElement:r,styleElement:n,svgRoot:d}=s;r.innerHTML=`<style>${e.cssStyle}</style><div style='padding:0;'>${a}</div>`;r.setAttribute("style",`transform: scale(${t});transform-origin: top left; display: inline-block`);n.textContent=i;let{width:h,height:l}=s.image;d.setAttribute("width",h.toString());d.setAttribute("height",l.toString());return new XMLSerializer().serializeToString(d)}
function qm(a,e){let t=ca.getOptimalCanvasAndContext(a.width,a.height,e);let{context:i}=t;i.clearRect(0,0,a.width,a.height);i.drawImage(a,0,0);return t}
function Zm(a,e,t){return new Promise(async i=>{if(t){await new Promise(s=>setTimeout(s,100))}
a.onload=()=>{i()};a.src=`data:image/svg+xml;charset=utf8,${encodeURIComponent(e)}`;a.crossOrigin="anonymous"})}
var Y0;function m2(a,e,t,i){if(!i){i=Y0||(Y0=new gn())}
let{domElement:s,styleElement:r,svgRoot:n}=i;s.innerHTML=`<style>${e.cssStyle};</style><div style='padding:0'>${a}</div>`;s.setAttribute("style","transform-origin: top left; display: inline-block");if(t){r.textContent=t}
document.body.appendChild(n);let d=s.getBoundingClientRect();n.remove();let h=e.padding*2;return{width:d.width-h,height:d.height-h}}
var Ts=class{constructor(e){this._activeTextures={};this._renderer=e;this._createCanvas=e.type===yt.WEBGPU}
getTexture(e){return this._buildTexturePromise(e.text,e.resolution,e.style)}
getManagedTexture(e,t,i,s){if(this._activeTextures[s]){this._increaseReferenceCount(s);return this._activeTextures[s].promise}
let r=this._buildTexturePromise(e,t,i).then(n=>(this._activeTextures[s].texture=n,n));this._activeTextures[s]={texture:null,promise:r,usageCount:1};return r}
async _buildTexturePromise(e,t,i){let s=me.get(gn);let r=Wm(e,i);let n=await $m(r,i,mn.defaultTextStyle);let d=m2(e,i,n,s);let h=Math.ceil(Math.ceil(Math.max(1,d.width)+i.padding*2)*t);let l=Math.ceil(Math.ceil(Math.max(1,d.height)+i.padding*2)*t);let f=s.image;f.width=(h|0)+2;f.height=(l|0)+2;let _=Km(e,i,t,n,s);await Zm(f,_,Lm()&&r.length>0);let v;if(this._createCanvas){v=qm(f,t)}
let T=c2(v?v.canvas:f,f.width-2,f.height-2,t);if(this._createCanvas){this._renderer.texture.initSource(T.source);ca.returnCanvasAndContext(v)}
me.return(s);return T}
_increaseReferenceCount(e){this._activeTextures[e].usageCount++}
decreaseReferenceCount(e){let t=this._activeTextures[e];if(t){t.usageCount--;if(t.usageCount===0){if(t.texture){this._cleanUp(t)}else{t.promise.then(i=>{t.texture=i;this._cleanUp(t)}).catch(()=>{})}
this._activeTextures[e]=null}}}
_cleanUp(e){Ve.returnTexture(e.texture);e.texture.source.resource=null;e.texture.source.uploadMethodId="unknown"}
getReferenceCount(e){return this._activeTextures[e].usageCount}
destroy(){this._activeTextures=null}};Ts.extension={type:[I.WebGLSystem,I.WebGPUSystem,I.CanvasSystem],name:"htmlText"};Ts.defaultFontOptions={fontFamily:"Arial",fontStyle:"normal",fontWeight:"normal"};fe.add(Ts);fe.add(pn);var Qm=Object.defineProperty;var $0=Object.getOwnPropertySymbols;var Jm=Object.prototype.hasOwnProperty;var e7=Object.prototype.propertyIsEnumerable;var K0=(a,e,t)=>e in a?Qm(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var q0=(a,e)=>{for(var t in e||(e={}))if(Jm.call(e,t)){K0(a,t,e[t])}
if($0){for(var t of $0(e))if(e7.call(e,t)){K0(a,t,e[t])}}
return a};var _2=class y2 extends qt{constructor(...e){var t;let i=(t=e[0])!=null?t:{};if(i instanceof Float32Array){i={positions:i,uvs:e[1],indices:e[2]}}
i=q0(q0({},y2.defaultOptions),i);let s=i.positions||new Float32Array([0,0,1,0,1,1,0,1]);let r=i.uvs;if(!r){if(i.positions){r=new Float32Array(s.length)}else{r=new Float32Array([0,0,1,0,1,1,0,1])}}
let n=i.indices||new Uint32Array([0,1,2,0,2,3]);let d=i.shrinkBuffersToFit;let h=new st({data:s,label:"attribute-mesh-positions",shrinkToFit:d,usage:ye.VERTEX|ye.COPY_DST});let l=new st({data:r,label:"attribute-mesh-uvs",shrinkToFit:d,usage:ye.VERTEX|ye.COPY_DST});let f=new st({data:n,label:"index-mesh-buffer",shrinkToFit:d,usage:ye.INDEX|ye.COPY_DST});super({attributes:{aPosition:{buffer:h,format:"float32x2",stride:8,offset:0},aUV:{buffer:l,format:"float32x2",stride:8,offset:0}},indexBuffer:f,topology:i.topology});this.batchMode="auto"}
get positions(){return this.attributes.aPosition.buffer.data}
set positions(e){this.attributes.aPosition.buffer.data=e}
get uvs(){return this.attributes.aUV.buffer.data}
set uvs(e){this.attributes.aUV.buffer.data=e}
get indices(){return this.indexBuffer.data}
set indices(e){this.indexBuffer.data=e}};_2.defaultOptions={topology:"triangle-list",shrinkBuffersToFit:!1};var t7=Object.defineProperty;var a7=Object.defineProperties;var i7=Object.getOwnPropertyDescriptors;var Z0=Object.getOwnPropertySymbols;var s7=Object.prototype.hasOwnProperty;var r7=Object.prototype.propertyIsEnumerable;var Q0=(a,e,t)=>e in a?t7(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var J0=(a,e)=>{for(var t in e||(e={}))if(s7.call(e,t)){Q0(a,t,e[t])}
if(Z0){for(var t of Z0(e))if(r7.call(e,t)){Q0(a,t,e[t])}}
return a};var Ss={name:"local-uniform-bit",vertex:{header:`

struct LocalUniforms {
uTransformMatrix:mat3x3<f32>,
uColor:vec4<f32>,
uRound:f32,
}

@group(1) @binding(0) var<uniform> localUniforms : LocalUniforms;
`,main:`
vColor *= localUniforms.uColor;
modelMatrix *= localUniforms.uTransformMatrix;
`,end:`
if(localUniforms.uRound == 1)
{
vPosition = vec4(roundPixels(vPosition.xy, globalUniforms.uResolution), vPosition.zw);
}
`}};var n7=a7(J0({},Ss),i7({vertex:a7(J0({},Ss.vertex),i7({header:Ss.vertex.header.replace("group(1)","group(2)")}))}));var Sl={name:"local-uniform-bit",vertex:{header:`

uniform mat3 uTransformMatrix;
uniform vec4 uColor;
uniform float uRound;
`,main:`
vColor *= uColor;
modelMatrix = uTransformMatrix;
`,end:`
if(uRound == 1.)
{
gl_Position.xy = roundPixels(gl_Position.xy, uResolution);
}
`}};var o7={name:"tiling-bit",vertex:{header:`
struct TilingUniforms {
uMapCoord:mat3x3<f32>,
uClampFrame:vec4<f32>,
uClampOffset:vec2<f32>,
uTextureTransform:mat3x3<f32>,
uSizeAnchor:vec4<f32>
};

@group(2) @binding(0) var<uniform> tilingUniforms: TilingUniforms;
@group(2) @binding(1) var uTexture: texture_2d<f32>;
@group(2) @binding(2) var uSampler: sampler;
`,main:`
uv = (tilingUniforms.uTextureTransform * vec3(uv, 1.0)).xy;

position = (position - tilingUniforms.uSizeAnchor.zw) * tilingUniforms.uSizeAnchor.xy;
`},fragment:{header:`
struct TilingUniforms {
uMapCoord:mat3x3<f32>,
uClampFrame:vec4<f32>,
uClampOffset:vec2<f32>,
uTextureTransform:mat3x3<f32>,
uSizeAnchor:vec4<f32>
};

@group(2) @binding(0) var<uniform> tilingUniforms: TilingUniforms;
@group(2) @binding(1) var uTexture: texture_2d<f32>;
@group(2) @binding(2) var uSampler: sampler;
`,main:`

var coord = vUV + ceil(tilingUniforms.uClampOffset - vUV);
coord = (tilingUniforms.uMapCoord * vec3(coord, 1.0)).xy;
var unclamped = coord;
coord = clamp(coord, tilingUniforms.uClampFrame.xy, tilingUniforms.uClampFrame.zw);

var bias = 0.;

if(unclamped.x == coord.x && unclamped.y == coord.y)
{
bias = -32.;
} 

outColor = textureSampleBias(uTexture, uSampler, coord, bias);
`}};var c7={name:"tiling-bit",vertex:{header:`
uniform mat3 uTextureTransform;
uniform vec4 uSizeAnchor;

`,main:`
uv = (uTextureTransform * vec3(aUV, 1.0)).xy;

position = (position - uSizeAnchor.zw) * uSizeAnchor.xy;
`},fragment:{header:`
uniform sampler2D uTexture;
uniform mat3 uMapCoord;
uniform vec4 uClampFrame;
uniform vec2 uClampOffset;
`,main:`

vec2 coord = vUV + ceil(uClampOffset - vUV);
coord = (uMapCoord * vec3(coord, 1.0)).xy;
vec2 unclamped = coord;
coord = clamp(coord, uClampFrame.xy, uClampFrame.zw);

outColor = texture(uTexture, coord, unclamped == coord ? 0.0 : -32.0);// lod-bias very negative to force lod 0

`}};var ad;var id;var ph=class extends ht{constructor(){if(!(ad!=null)){ad=Xs({name:"tiling-sprite-shader",bits:[Ss,o7,zs]})}
if(!(id!=null)){id=Hs({name:"tiling-sprite-shader",bits:[Sl,c7,Vs]})}
let e=new jp({uMapCoord:{value:new ae(),type:"mat3x3<f32>"},uClampFrame:{value:new Float32Array([0,0,1,1]),type:"vec4<f32>"},uClampOffset:{value:new Float32Array([0,0]),type:"vec2<f32>"},uTextureTransform:{value:new ae(),type:"mat3x3<f32>"},uSizeAnchor:{value:new Float32Array([100,100,.5,.5]),type:"vec4<f32>"}});super({glProgram:id,gpuProgram:ad,resources:{localUniforms:new jp({uTransformMatrix:{value:new ae(),type:"mat3x3<f32>"},uColor:{value:new Float32Array([1,1,1,1]),type:"vec4<f32>"},uRound:{value:0,type:"f32"}}),tilingUniforms:e,uTexture:W.EMPTY.source,uSampler:W.EMPTY.source.style}})}
updateUniforms(e,t,i,s,r,n){let d=this.resources.tilingUniforms;let h=n.width;let l=n.height;let f=n.textureMatrix;let p=d.uniforms.uTextureTransform;p.set(i.a*h/e,i.b*h/t,i.c*l/e,i.d*l/t,i.tx/e,i.ty/t);p.invert();d.uniforms.uMapCoord=f.mapCoord;d.uniforms.uClampFrame=f.uClampFrame;d.uniforms.uClampOffset=f.uClampOffset;d.uniforms.uTextureTransform=p;d.uniforms.uSizeAnchor[0]=e;d.uniforms.uSizeAnchor[1]=t;d.uniforms.uSizeAnchor[2]=s;d.uniforms.uSizeAnchor[3]=r;if(n){this.resources.uTexture=n.source;this.resources.uSampler=n.source.style}}};var gh=class extends _2{constructor(){super({positions:new Float32Array([0,0,1,0,1,1,0,1]),uvs:new Float32Array([0,0,1,0,1,1,0,1]),indices:new Uint32Array([0,1,2,0,2,3])})}};function d7(a,e){let t=a.anchor.x;let i=a.anchor.y;e[0]=-t*a.width;e[1]=-i*a.height;e[2]=(1-t)*a.width;e[3]=-i*a.height;e[4]=(1-t)*a.width;e[5]=(1-i)*a.height;e[6]=-t*a.width;e[7]=(1-i)*a.height}
function h7(a,e,t,i){let s=0;let r=a.length/(e||2);let n=i.a;let d=i.b;let h=i.c;let l=i.d;let f=i.tx;let p=i.ty;for(t*=e;s<r;){let _=a[t];let m=a[t+1];a[t]=n*_+h*m+f;a[t+1]=d*_+l*m+p;t+=e;s++}}
function l7(a,e){let t=a.texture;let i=t.frame.width;let s=t.frame.height;let r=0;let n=0;if(a.applyAnchorToTexture){r=a.anchor.x;n=a.anchor.y}
e[0]=e[6]=-r;e[2]=e[4]=1-r;e[1]=e[3]=-n;e[5]=e[7]=1-n;let d=ae.shared;d.copyFrom(a._tileTransform.matrix);d.tx/=a.width;d.ty/=a.height;d.invert();d.scale(a.width/i,a.height/s);h7(e,2,0,d)}
var Tr=new gh();var _n=class{constructor(e){this._state=Qd.default2d;this._tilingSpriteDataHash=Object.create(null);this._destroyRenderableBound=this.destroyRenderable.bind(this);this._renderer=e;this._renderer.renderableGC.addManagedHash(this,"_tilingSpriteDataHash")}
validateRenderable(e){let t=this._getTilingSpriteData(e);let i=t.canBatch;this._updateCanBatch(e);let s=t.canBatch;if(s&&s===i){let{batchableMesh:r}=t;return!r._batcher.checkAndUpdateTexture(r,e.texture)}
return i!==s}
addRenderable(e,t){let i=this._renderer.renderPipes.batch;this._updateCanBatch(e);let s=this._getTilingSpriteData(e);let{geometry:r,canBatch:n}=s;if(n){if(!s.batchableMesh){s.batchableMesh=new Ds()}
let d=s.batchableMesh;if(e.didViewUpdate){this._updateBatchableMesh(e);d.geometry=r;d.renderable=e;d.transform=e.groupTransform;d.setTexture(e._texture)}
d.roundPixels=this._renderer._roundPixels|e._roundPixels;i.addToBatch(d,t)}else{i.break(t);if(!s.shader){s.shader=new ph()}
this.updateRenderable(e);t.add(e)}}
execute(e){let{shader:t}=this._tilingSpriteDataHash[e.uid];t.groups[0]=this._renderer.globalUniforms.bindGroup;let i=t.resources.localUniforms.uniforms;i.uTransformMatrix=e.groupTransform;i.uRound=this._renderer._roundPixels|e._roundPixels;Ws(e.groupColorAlpha,i.uColor,0);this._state.blendMode=e.texture._source.alphaMode==="no-premultiply-alpha"&&k8[a]||e.groupBlendMode;this._renderer.encoder.draw({geometry:Tr,shader:t,state:this._state})}
updateRenderable(e){let t=this._getTilingSpriteData(e);let{canBatch:i}=t;if(i){let{batchableMesh:s}=t;if(e.didViewUpdate){this._updateBatchableMesh(e)}
s._batcher.updateElement(s)}else if(e.didViewUpdate){let{shader:s}=t;s.updateUniforms(e.width,e.height,e._tileTransform.matrix,e.anchor.x,e.anchor.y,e.texture)}}
destroyRenderable(e){var t;let i=this._getTilingSpriteData(e);i.batchableMesh=null;if(!((t=i.shader)==null)){t.destroy()}
this._tilingSpriteDataHash[e.uid]=null;e.off("destroyed",this._destroyRenderableBound)}
_getTilingSpriteData(e){return this._tilingSpriteDataHash[e.uid]||this._initTilingSpriteData(e)}
_initTilingSpriteData(e){let t=new _2({indices:Tr.indices,positions:Tr.positions.slice(),uvs:Tr.uvs.slice()});this._tilingSpriteDataHash[e.uid]={canBatch:!0,renderable:e,geometry:t};e.on("destroyed",this._destroyRenderableBound);return this._tilingSpriteDataHash[e.uid]}
_updateBatchableMesh(e){let t=this._getTilingSpriteData(e);let{geometry:i}=t;let s=e.texture.source.style;if(s.addressMode!=="repeat"){s.addressMode="repeat";s.update()}
l7(e,i.uvs);d7(e,i.positions)}
destroy(){for(let e in this._tilingSpriteDataHash)this.destroyRenderable(this._tilingSpriteDataHash[e].renderable);this._tilingSpriteDataHash=null;this._renderer=null}
_updateCanBatch(e){let t=this._getTilingSpriteData(e);let i=e.texture;let s=!0;if(this._renderer.type===yt.WEBGL){s=this._renderer.context.supports.nonPowOf2wrapping}
t.canBatch=i.textureMatrix.isSimple&&(s||i.source.isPowerOfTwo);return t.canBatch}};_n.extension={type:[I.WebGLPipes,I.WebGPUPipes,I.CanvasPipes],name:"tilingSprite"};fe.add(_n);var u7=Object.defineProperty;var tb=Object.getOwnPropertySymbols;var f7=Object.prototype.hasOwnProperty;var b7=Object.prototype.propertyIsEnumerable;var ab=(a,e,t)=>e in a?u7(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var ib=(a,e)=>{for(var t in e||(e={}))if(f7.call(e,t)){ab(a,t,e[t])}
if(tb){for(var t of tb(e))if(b7.call(e,t)){ab(a,t,e[t])}}
return a};var x2=class v2 extends _2{constructor(...e){var t;super({});let i=(t=e[0])!=null?t:{};if(typeof i=="number"){i={width:i,height:e[1],verticesX:e[2],verticesY:e[3]}}
this.build(i)}
build(e){var t;var i;var s;var r;e=ib(ib({},v2.defaultOptions),e);this.verticesX=(t=this.verticesX)!=null?t:e.verticesX;this.verticesY=(i=this.verticesY)!=null?i:e.verticesY;this.width=(s=this.width)!=null?s:e.width;this.height=(r=this.height)!=null?r:e.height;let n=this.verticesX*this.verticesY;let d=[];let h=[];let l=[];let f=this.verticesX-1;let p=this.verticesY-1;let _=this.width/f;let m=this.height/p;for(let T=0;T<n;T++){let w=T%this.verticesX;let P=T/this.verticesX|0;d.push(w*_,P*m);h.push(w/f,P/p)}
let v=f*p;for(let T=0;T<v;T++){let w=T%f;let P=T/f|0;let C=P*this.verticesX+w;let B=P*this.verticesX+w+1;let D=(P+1)*this.verticesX+w;let X=(P+1)*this.verticesX+w+1;l.push(C,B,D,B,X,D)}
this.buffers[0].data=new Float32Array(d);this.buffers[1].data=new Float32Array(h);this.indexBuffer.data=new Uint32Array(l);this.buffers[0].update();this.buffers[1].update();this.indexBuffer.update()}};x2.defaultOptions={width:100,height:100,verticesX:10,verticesY:10};var p7=Object.defineProperty;var sb=Object.getOwnPropertySymbols;var g7=Object.prototype.hasOwnProperty;var m7=Object.prototype.propertyIsEnumerable;var rb=(a,e,t)=>e in a?p7(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var nb=(a,e)=>{for(var t in e||(e={}))if(g7.call(e,t)){rb(a,t,e[t])}
if(sb){for(var t of sb(e))if(m7.call(e,t)){rb(a,t,e[t])}}
return a};var S2=class w2 extends x2{constructor(e={}){e=nb(nb({},w2.defaultOptions),e);super({width:e.width,height:e.height,verticesX:4,verticesY:4});this.update(e)}
update(e){var t;var i;var s;var r;var n;var d;var h;var l;this.width=(t=e.width)!=null?t:this.width;this.height=(i=e.height)!=null?i:this.height;this._originalWidth=(s=e.originalWidth)!=null?s:this._originalWidth;this._originalHeight=(r=e.originalHeight)!=null?r:this._originalHeight;this._leftWidth=(n=e.leftWidth)!=null?n:this._leftWidth;this._rightWidth=(d=e.rightWidth)!=null?d:this._rightWidth;this._topHeight=(h=e.topHeight)!=null?h:this._topHeight;this._bottomHeight=(l=e.bottomHeight)!=null?l:this._bottomHeight;this.updateUvs();this.updatePositions()}
updatePositions(){let e=this.positions;let t=this._leftWidth+this._rightWidth;let i=this.width>t?1:this.width/t;let s=this._topHeight+this._bottomHeight;let r=this.height>s?1:this.height/s;let n=Math.min(i,r);e[9]=e[11]=e[13]=e[15]=this._topHeight*n;e[17]=e[19]=e[21]=e[23]=this.height-this._bottomHeight*n;e[25]=e[27]=e[29]=e[31]=this.height;e[2]=e[10]=e[18]=e[26]=this._leftWidth*n;e[4]=e[12]=e[20]=e[28]=this.width-this._rightWidth*n;e[6]=e[14]=e[22]=e[30]=this.width;this.getBuffer("aPosition").update()}
updateUvs(){let e=this.uvs;e[0]=e[8]=e[16]=e[24]=0;e[1]=e[3]=e[5]=e[7]=0;e[6]=e[14]=e[22]=e[30]=1;e[25]=e[27]=e[29]=e[31]=1;let t=1/this._originalWidth;let i=1/this._originalHeight;e[2]=e[10]=e[18]=e[26]=t*this._leftWidth;e[9]=e[11]=e[13]=e[15]=i*this._topHeight;e[4]=e[12]=e[20]=e[28]=1-t*this._rightWidth;e[17]=e[19]=e[21]=e[23]=1-i*this._bottomHeight;this.getBuffer("aUV").update()}};S2.defaultOptions={width:100,height:100,leftWidth:10,topHeight:10,rightWidth:10,bottomHeight:10,originalWidth:100,originalHeight:100};var yn=class{constructor(e){this._gpuSpriteHash=Object.create(null);this._destroyRenderableBound=this.destroyRenderable.bind(this);this._renderer=e;this._renderer.renderableGC.addManagedHash(this,"_gpuSpriteHash")}
addRenderable(e,t){let i=this._getGpuSprite(e);if(e.didViewUpdate){this._updateBatchableSprite(e,i)}
this._renderer.renderPipes.batch.addToBatch(i,t)}
updateRenderable(e){let t=this._gpuSpriteHash[e.uid];if(e.didViewUpdate){this._updateBatchableSprite(e,t)}
t._batcher.updateElement(t)}
validateRenderable(e){let t=this._getGpuSprite(e);return!t._batcher.checkAndUpdateTexture(t,e._texture)}
destroyRenderable(e){let t=this._gpuSpriteHash[e.uid];me.return(t.geometry);me.return(t);this._gpuSpriteHash[e.uid]=null;e.off("destroyed",this._destroyRenderableBound)}
_updateBatchableSprite(e,t){t.geometry.update(e);t.setTexture(e._texture)}
_getGpuSprite(e){return this._gpuSpriteHash[e.uid]||this._initGPUSprite(e)}
_initGPUSprite(e){let t=me.get(Ds);t.geometry=me.get(S2);t.renderable=e;t.transform=e.groupTransform;t.texture=e._texture;t.roundPixels=this._renderer._roundPixels|e._roundPixels;this._gpuSpriteHash[e.uid]=t;if(!e.didViewUpdate){this._updateBatchableSprite(e,t)}
e.on("destroyed",this._destroyRenderableBound);return t}
destroy(){for(let e in this._gpuSpriteHash)this._gpuSpriteHash[e].geometry.destroy();this._gpuSpriteHash=null;this._renderer=null}};yn.extension={type:[I.WebGLPipes,I.WebGPUPipes,I.CanvasPipes],name:"nineSliceSprite"};fe.add(yn);var xn=class{constructor(e){this._renderer=e}
push(e,t,i){this._renderer.renderPipes.batch.break(i);i.add({renderPipeId:"filter",canBundle:!1,action:"pushFilter",container:t,filterEffect:e})}
pop(e,t,i){this._renderer.renderPipes.batch.break(i);i.add({renderPipeId:"filter",action:"popFilter",canBundle:!1})}
execute(e){if(e.action==="pushFilter"){this._renderer.filter.push(e)}else if(e.action==="popFilter"){this._renderer.filter.pop()}}
destroy(){this._renderer=null}};xn.extension={type:[I.WebGLPipes,I.WebGPUPipes,I.CanvasPipes],name:"filter"};function _7(a,e){e.clear();let t=e.matrix;for(let i=0;i<a.length;i++){let s=a[i];if(!(s.globalDisplayStatus<7)){e.matrix=s.worldTransform;e.addBounds(s.bounds)}}
e.matrix=t;return e}
var y7=new qt({attributes:{aPosition:{buffer:new Float32Array([0,0,1,0,1,1,0,1]),format:"float32x2",stride:8,offset:0}},indexBuffer:new Uint32Array([0,1,2,0,2,3])});var vn=class{constructor(e){this._filterStackIndex=0;this._filterStack=[];this._filterGlobalUniforms=new jp({uInputSize:{value:new Float32Array(4),type:"vec4<f32>"},uInputPixel:{value:new Float32Array(4),type:"vec4<f32>"},uInputClamp:{value:new Float32Array(4),type:"vec4<f32>"},uOutputFrame:{value:new Float32Array(4),type:"vec4<f32>"},uGlobalFrame:{value:new Float32Array(4),type:"vec4<f32>"},uOutputTexture:{value:new Float32Array(4),type:"vec4<f32>"}});this._globalFilterBindGroup=new Ht({});this.renderer=e}
get activeBackTexture(){var e;return(e=this._activeFilterData)==null?undefined:e.backTexture}
push(e){var t;var i;let s=this.renderer;let r=e.filterEffect.filters;if(!this._filterStack[this._filterStackIndex]){this._filterStack[this._filterStackIndex]=this._getFilterData()}
let n=this._filterStack[this._filterStackIndex];this._filterStackIndex++;if(r.length===0){n.skip=!0;return}
let d=n.bounds;if(e.renderables){_7(e.renderables,d)}else if(e.filterEffect.filterArea){d.clear();d.addRect(e.filterEffect.filterArea);d.applyMatrix(e.container.worldTransform)}else{e.container.getFastGlobalBounds(!0,d)}
if(e.container){let T=(e.container.renderGroup||e.container.parentRenderGroup).cacheToLocalTransform;if(T){d.applyMatrix(T)}}
let h=s.renderTarget.renderTarget.colorTexture.source;let l=Infinity;let f=0;let p=!0;let _=!1;let m=!1;let v=!0;for(let T=0;T<r.length;T++){let w=r[T];l=Math.min(l,w.resolution==="inherit"?h._resolution:w.resolution);f+=w.padding;if(w.antialias==="off"){p=!1}else if(w.antialias==="inherit"&&p){p=h.antialias}
if(!w.clipToViewport){v=!1}
if(!(w.compatibleRenderers&s.type)){m=!1;break}
if(w.blendRequired&&!((i=(t=s.backBuffer)==null?undefined:t.useBackBuffer)==null||i)){m=!1;break}
m=w.enabled||m;if(!_){_=w.blendRequired}}
if(!m){n.skip=!0;return}
if(v){let T=s.renderTarget.rootViewPort;let w=s.renderTarget.renderTarget.resolution;d.fitBounds(0,T.width/w,0,T.height/w)}
d.scale(l).ceil().scale(1/l).pad(f|0);if(!d.isPositive){n.skip=!0;return}
n.skip=!1;n.bounds=d;n.blendRequired=_;n.container=e.container;n.filterEffect=e.filterEffect;n.previousRenderSurface=s.renderTarget.renderSurface;n.inputTexture=Ve.getOptimalTexture(d.width,d.height,l,p);s.renderTarget.bind(n.inputTexture,!0);s.globalUniforms.push({offset:d})}
pop(){let e=this.renderer;this._filterStackIndex--;let t=this._filterStack[this._filterStackIndex];if(t.skip){return}
this._activeFilterData=t;let i=t.inputTexture;let s=t.bounds;let r=W.EMPTY;e.renderTarget.finishRenderPass();if(t.blendRequired){let d=this._filterStackIndex>0?this._filterStack[this._filterStackIndex-1].bounds:null;let h=e.renderTarget.getRenderTarget(t.previousRenderSurface);r=this.getBackTexture(h,s,d)}
t.backTexture=r;let n=t.filterEffect.filters;this._globalFilterBindGroup.setResource(i.source.style,2);this._globalFilterBindGroup.setResource(r.source,3);e.globalUniforms.pop();if(n.length===1){n[0].apply(this,i,t.previousRenderSurface,!1);Ve.returnTexture(i)}else{let d=t.inputTexture;let h=Ve.getOptimalTexture(s.width,s.height,d.source._resolution,!1);let l=0;for(l=0;l<n.length-1;++l){n[l].apply(this,d,h,!0);let f=d;d=h;h=f}
n[l].apply(this,d,t.previousRenderSurface,!1);Ve.returnTexture(d);Ve.returnTexture(h)}
if(t.blendRequired){Ve.returnTexture(r)}}
getBackTexture(e,t,i){let s=e.colorTexture.source._resolution;let r=Ve.getOptimalTexture(t.width,t.height,s,!1);let n=t.minX;let d=t.minY;if(i){n-=i.minX;d-=i.minY}
n=Math.floor(n*s);d=Math.floor(d*s);let h=Math.ceil(t.width*s);let l=Math.ceil(t.height*s);this.renderer.renderTarget.copyToTexture(e,r,{x:n,y:d},{width:h,height:l},{x:0,y:0});return r}
applyFilter(e,t,i,s){let r=this.renderer;let n=this._filterStack[this._filterStackIndex];let d=n.bounds;let h=Pe.shared;let l=n.previousRenderSurface===i;let f=this.renderer.renderTarget.rootRenderTarget.colorTexture.source._resolution;let p=this._filterStackIndex-1;for(;p>0&&this._filterStack[p].skip;){--p}
if(p>0){f=this._filterStack[p].inputTexture.source._resolution}
let _=this._filterGlobalUniforms;let m=_.uniforms;let v=m.uOutputFrame;let T=m.uInputSize;let w=m.uInputPixel;let P=m.uInputClamp;let C=m.uGlobalFrame;let B=m.uOutputTexture;if(l){let U=this._filterStackIndex;for(;U>0;){U--;let L=this._filterStack[this._filterStackIndex-1];if(!L.skip){h.x=L.bounds.minX;h.y=L.bounds.minY;break}}
v[0]=d.minX-h.x;v[1]=d.minY-h.y}else{v[0]=0;v[1]=0}
v[2]=t.frame.width;v[3]=t.frame.height;T[0]=t.source.width;T[1]=t.source.height;T[2]=1/T[0];T[3]=1/T[1];w[0]=t.source.pixelWidth;w[1]=t.source.pixelHeight;w[2]=1/w[0];w[3]=1/w[1];P[0]=.5*w[2];P[1]=.5*w[3];P[2]=t.frame.width*T[2]-.5*w[2];P[3]=t.frame.height*T[3]-.5*w[3];let D=this.renderer.renderTarget.rootRenderTarget.colorTexture;C[0]=h.x*f;C[1]=h.y*f;C[2]=D.source.width*f;C[3]=D.source.height*f;let X=this.renderer.renderTarget.getRenderTarget(i);r.renderTarget.bind(i,!!s);if(i instanceof W){B[0]=i.frame.width;B[1]=i.frame.height}else{B[0]=X.width;B[1]=X.height}
B[2]=X.isRoot?-1:1;_.update();if(r.renderPipes.uniformBatch){let U=r.renderPipes.uniformBatch.getUboResource(_);this._globalFilterBindGroup.setResource(U,0)}else{this._globalFilterBindGroup.setResource(_,0)}
this._globalFilterBindGroup.setResource(t.source,1);this._globalFilterBindGroup.setResource(t.source.style,2);e.groups[0]=this._globalFilterBindGroup;r.encoder.draw({geometry:y7,shader:e,state:e._state,topology:"triangle-list"});if(r.type===yt.WEBGL){r.renderTarget.finishRenderPass()}}
_getFilterData(){return{skip:!1,inputTexture:null,bounds:new Ze(),container:null,filterEffect:null,blendRequired:!1,previousRenderSurface:null}}
calculateSpriteMatrix(e,t){let i=this._activeFilterData;let s=e.set(i.inputTexture._source.width,0,0,i.inputTexture._source.height,i.bounds.minX,i.bounds.minY);let r=t.worldTransform.copyTo(ae.shared);let n=t.renderGroup||t.parentRenderGroup;if(n&&n.cacheToLocalTransform){r.prepend(n.cacheToLocalTransform)}
r.invert();s.prepend(r);s.scale(1/t.texture.frame.width,1/t.texture.frame.height);s.translate(t.anchor.x,t.anchor.y);return s}};vn.extension={type:[I.WebGLSystem,I.WebGPUSystem],name:"filter"};fe.add(vn);fe.add(xn);var mh=[];fe.handleByNamedList(I.Environment,mh);async function v7(a){if(!a){for(let e=0;e<mh.length;e++){let t=mh[e];if(t.value.test()){await t.value.load();return}}}}
var ns;function A2(){if(typeof ns=="boolean"){return ns}
try{ns=new Function("param1","param2","param3","return param1[param2] === param3;")({a:"b"},"a","b")===!0}catch{ns=!1}
return ns}
var mt=(a=>(a[a.NONE=0]="NONE",a[a.COLOR=16384]="COLOR",a[a.STENCIL=1024]="STENCIL",a[a.DEPTH=256]="DEPTH",a[a.COLOR_DEPTH=16640]="COLOR_DEPTH",a[a.COLOR_STENCIL=17408]="COLOR_STENCIL",a[a.DEPTH_STENCIL=1280]="DEPTH_STENCIL",a[a.ALL=17664]="ALL",a))(mt||{});var Tn=class{constructor(e){this.items=[];this._name=e}
emit(e,t,i,s,r,n,d,h){let{name:l,items:f}=this;let p=0;for(let _=f.length;p<_;p++){f[p][l](e,t,i,s,r,n,d,h)}
return this}
add(e){if(e[this._name]){this.remove(e);this.items.push(e)}
return this}
remove(e){let t=this.items.indexOf(e);if(t!==-1){this.items.splice(t,1)}
return this}
contains(e){return this.items.indexOf(e)!==-1}
removeAll(){this.items.length=0;return this}
destroy(){this.removeAll();this.items=null;this._name=null}
get empty(){return this.items.length===0}
get name(){return this._name}};var T7=Object.defineProperty;var ob=Object.getOwnPropertySymbols;var S7=Object.prototype.hasOwnProperty;var w7=Object.prototype.propertyIsEnumerable;var cb=(a,e,t)=>e in a?T7(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var Sr=(a,e)=>{for(var t in e||(e={}))if(S7.call(e,t)){cb(a,t,e[t])}
if(ob){for(var t of ob(e))if(w7.call(e,t)){cb(a,t,e[t])}}
return a};var A7=["init","destroy","contextChange","resolutionChange","resetState","renderEnd","renderStart","render","update","postrender","prerender"];var E2=class P2 extends xt{constructor(e){var t;super();this.runners=Object.create(null);this.renderPipes=Object.create(null);this._initOptions={};this._systemsHash=Object.create(null);this.type=e.type;this.name=e.name;this.config=e;let i=[...A7,...((t=this.config.runners)!=null?t:[])];this._addRunners(...i);this._unsafeEvalCheck()}
async init(e={}){let t=e.skipExtensionImports===!0?!0:e.manageImports===!1;await v7(t);this._addSystems(this.config.systems);this._addPipes(this.config.renderPipes,this.config.renderPipeAdaptors);for(let i in this._systemsHash){let s=this._systemsHash[i].constructor.defaultOptions;e=Sr(Sr({},s),e)}
e=Sr(Sr({},P2.defaultOptions),e);this._roundPixels=e.roundPixels?1:0;for(let i=0;i<this.runners.init.items.length;i++){await this.runners.init.items[i].init(e)}
this._initOptions=e}
render(e,t){var i;var s;let r=e;if(r instanceof de){r={container:r};if(t){r.target=t.renderTexture}}
if(!r.target){r.target=this.view.renderTarget}
if(r.target===this.view.renderTarget){this._lastObjectRendered=r.container;if(!((i=r.clearColor)!=null)){r.clearColor=this.background.colorRgba}
if(!((s=r.clear)!=null)){r.clear=this.background.clearBeforeRender}}
if(r.clearColor){let n=Array.isArray(r.clearColor)&&r.clearColor.length===4;r.clearColor=n?r.clearColor:gi.shared.setValue(r.clearColor).toArray()}
if(!r.transform){r.container.updateLocalTransform();r.transform=r.container.localTransform}
r.container.enableRenderGroup();this.runners.prerender.emit(r);this.runners.renderStart.emit(r);this.runners.render.emit(r);this.runners.renderEnd.emit(r);this.runners.postrender.emit(r)}
resize(e,t,i){let s=this.view.resolution;this.view.resize(e,t,i);this.emit("resize",this.view.screen.width,this.view.screen.height,this.view.resolution);if(i!==undefined&&i!==s){this.runners.resolutionChange.emit(i)}}
clear(e={}){var t;let i=this;if(!e.target){e.target=i.renderTarget.renderTarget}
if(!e.clearColor){e.clearColor=this.background.colorRgba}
if(!((t=e.clear)!=null)){e.clear=mt.ALL}
let{clear:s,clearColor:r,target:n}=e;gi.shared.setValue(r??this.background.colorRgba);i.renderTarget.clear(n,s,gi.shared.toArray())}
get resolution(){return this.view.resolution}
set resolution(e){this.view.resolution=e;this.runners.resolutionChange.emit(e)}
get width(){return this.view.texture.frame.width}
get height(){return this.view.texture.frame.height}
get canvas(){return this.view.canvas}
get lastObjectRendered(){return this._lastObjectRendered}
get renderingToScreen(){return this.renderTarget.renderingToScreen}
get screen(){return this.view.screen}
_addRunners(...e){e.forEach(t=>{this.runners[t]=new Tn(t)})}
_addSystems(e){let t;for(t in e){let i=e[t];this._addSystem(i.value,i.name)}}
_addSystem(e,t){let i=new e(this);if(this[t]){throw new Error(`Whoops! The name "${t}" is already in use`)}
this[t]=i;this._systemsHash[t]=i;for(let s in this.runners)this.runners[s].add(i);return this}
_addPipes(e,t){let i=t.reduce((s,r)=>(s[r.name]=r.value,s),{});e.forEach(s=>{let r=s.value;let n=s.name;let d=i[n];this.renderPipes[n]=new r(this,d?new d():null)})}
destroy(e=!1){this.runners.destroy.items.reverse();this.runners.destroy.emit(e);Object.values(this.runners).forEach(t=>{t.destroy()});this._systemsHash=null;this.renderPipes=null}
generateTexture(e){return this.textureGenerator.generateTexture(e)}
get roundPixels(){return!!this._roundPixels}
_unsafeEvalCheck(){if(!A2()){throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}}
resetState(){this.runners.resetState.emit()}};E2.defaultOptions={resolution:1,failIfMajorPerformanceCaveat:!1,roundPixels:!1};var sd;function Do(a){if(!(sd!==undefined)){sd=(()=>{var e;let t={stencil:!0,failIfMajorPerformanceCaveat:a??E2.defaultOptions.failIfMajorPerformanceCaveat};try{if(!WebGLRenderingContext){return!1}
let i=n8.createCanvas().getContext("webgl",t);let s=!!((e=i?.getContextAttributes())!=null&&e.stencil);if(i){let r=i.getExtension("WEBGL_lose_context");if(r){r.loseContext()}}
i=null;return s}catch{return!1}})()}
return sd}
var rd;async function ko(a={}){if(!(rd!==undefined)){rd=await(async()=>{let e=navigator.gpu;if(!e){return!1}
try{await(await e.requestAdapter(a)).requestDevice();return!0}catch{return!1}})()}
return rd}
var E7=Object.defineProperty;var db=Object.getOwnPropertySymbols;var P7=Object.prototype.hasOwnProperty;var R7=Object.prototype.propertyIsEnumerable;var hb=(a,e,t)=>e in a?E7(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var os=(a,e)=>{for(var t in e||(e={}))if(P7.call(e,t)){hb(a,t,e[t])}
if(db){for(var t of db(e))if(R7.call(e,t)){hb(a,t,e[t])}}
return a};var lb=["webgl","webgpu","canvas"];async function Uo(a){var e;let t=[];if(a.preference){t.push(a.preference);lb.forEach(n=>{if(n!==a.preference){t.push(n)}})}else{t=lb.slice()}
let i;let s={};for(let n=0;n<t.length;n++){let d=t[n];if(d==="webgpu"&&(await ko())){let{WebGPURenderer:h}=await Promise.resolve().then(function(){return dT});i=h;s=os(os({},a),a.webgpu);break}else if(d==="webgl"&&Do((e=a.failIfMajorPerformanceCaveat)!=null?e:E2.defaultOptions.failIfMajorPerformanceCaveat)){let{WebGLRenderer:h}=await Promise.resolve().then(function(){return Lv});i=h;s=os(os({},a),a.webgl);break}else if(d==="canvas"){s=os({},a);throw new Error("CanvasRenderer is not yet implemented")}}
delete s.webgpu;delete s.webgl;if(!i){throw new Error("No available renderer for the current environment")}
let r=new i();await r.init(s);return r}
var wn=class{static init(){var e;if(!((e=globalThis.__PIXI_APP_INIT__)==null)){e.call(globalThis,this,"8.7.3")}}
static destroy(){}};wn.extension=I.Application;var An=class{constructor(e){this._renderer=e}
init(){var e;if(!((e=globalThis.__PIXI_RENDERER_INIT__)==null)){e.call(globalThis,this._renderer,"8.7.3")}}
destroy(){this._renderer=null}};An.extension={type:[I.WebGLSystem,I.WebGPUSystem],name:"initHook",priority:-10};var M7=Object.defineProperty;var ub=Object.getOwnPropertySymbols;var C7=Object.prototype.hasOwnProperty;var O7=Object.prototype.propertyIsEnumerable;var fb=(a,e,t)=>e in a?M7(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var I7=(a,e)=>{for(var t in e||(e={}))if(C7.call(e,t)){fb(a,t,e[t])}
if(ub){for(var t of ub(e))if(O7.call(e,t)){fb(a,t,e[t])}}
return a};var R2=class _h{constructor(...e){this.stage=new de()}
async init(e){e=I7({},e);this.renderer=await Uo(e);_h._plugins.forEach(t=>{t.init.call(this,e)})}
render(){this.renderer.render({container:this.stage})}
get canvas(){return this.renderer.canvas}
get view(){return this.renderer.canvas}
get screen(){return this.renderer.screen}
destroy(e=!1,t=!1){let i=_h._plugins.slice(0);i.reverse();i.forEach(s=>{s.destroy.call(this)});this.stage.destroy(t);this.stage=null;this.renderer.destroy(e);this.renderer=null}};R2._plugins=[];fe.handleByList(I.Application,R2._plugins);fe.add(wn);var En=class extends un{constructor(e,t){var i;super();let{textures:s,data:r}=e;Object.keys(r.pages).forEach(n=>{let d=r.pages[parseInt(n,10)];let h=s[d.id];this.pages.push({texture:h})});Object.keys(r.chars).forEach(n=>{var d;let h=r.chars[n];let{frame:l,source:f}=s[h.page];let p=new we(h.x+l.x,h.y+l.y,h.width,h.height);let _=new W({source:f,frame:p});this.chars[n]={id:n.codePointAt(0),xOffset:h.xOffset,yOffset:h.yOffset,xAdvance:h.xAdvance,kerning:(d=h.kerning)!=null?d:{},texture:_}});this.baseRenderedFontSize=r.fontSize;this.baseMeasurementFontSize=r.fontSize;this.fontMetrics={ascent:0,descent:0,fontSize:r.fontSize};this.baseLineOffset=r.baseLineOffset;this.lineHeight=r.lineHeight;this.fontFamily=r.fontFamily;this.distanceField=(i=r.distanceField)!=null?i:{type:"none",range:0};this.url=t}
destroy(){super.destroy();for(let e=0;e<this.pages.length;e++){let{texture:t}=this.pages[e];t.destroy(!0)}
this.pages=null}
static install(e){fn.install(e)}
static uninstall(e){fn.uninstall(e)}};var nd={test(a){return typeof a=="string"&&a.startsWith("info face=")},parse(a){var e;var t;var i;let s=a.match(/^[a-z]+\s+.+$/gm);let r={info:[],common:[],page:[],char:[],chars:[],kerning:[],kernings:[],distanceField:[]};for(let v in s){let T=s[v].match(/^[a-z]+/gm)[0];let w=s[v].match(/[a-zA-Z]+=([^\s"']+|"([^"]*)")/gm);let P={};for(let C in w){let B=w[C].split("=");let D=B[0];let X=B[1].replace(/"/gm,"");let U=parseFloat(X);let L=isNaN(U)?X:U;P[D]=L}
r[T].push(P)}
let n={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0};let[d]=r.info;let[h]=r.common;let[l]=(e=r.distanceField)!=null?e:[];if(l){n.distanceField={range:parseInt(l.distanceRange,10),type:l.fieldType}}
n.fontSize=parseInt(d.size,10);n.fontFamily=d.face;n.lineHeight=parseInt(h.lineHeight,10);let f=r.page;for(let v=0;v<f.length;v++){n.pages.push({id:parseInt(f[v].id,10)||0,file:f[v].file})}
let p={};n.baseLineOffset=0-parseInt(h.base,10);let _=r.char;for(let v=0;v<_.length;v++){let T=_[v];let w=parseInt(T.id,10);let P=(i=(t=T.letter)!=null?t:T.char)!=null?i:String.fromCharCode(w);if(P==="space"){P=" "}
p[w]=P;n.chars[P]={id:w,page:parseInt(T.page,10)||0,x:parseInt(T.x,10),y:parseInt(T.y,10),width:parseInt(T.width,10),height:parseInt(T.height,10),xOffset:parseInt(T.xoffset,10),yOffset:parseInt(T.yoffset,10),xAdvance:parseInt(T.xadvance,10),kerning:{}}}
let m=r.kerning||[];for(let v=0;v<m.length;v++){let T=parseInt(m[v].first,10);let w=parseInt(m[v].second,10);let P=parseInt(m[v].amount,10);n.chars[p[w]].kerning[p[T]]=P}
return n}};var bb={test(a){return typeof a!="string"&&"getElementsByTagName" in a&&a.getElementsByTagName("page").length&&a.getElementsByTagName("info")[0].getAttribute("face")!==null},parse(a){var e;var t;let i={chars:{},pages:[],lineHeight:0,fontSize:0,fontFamily:"",distanceField:null,baseLineOffset:0};let s=a.getElementsByTagName("info")[0];let r=a.getElementsByTagName("common")[0];let n=a.getElementsByTagName("distanceField")[0];if(n){i.distanceField={type:n.getAttribute("fieldType"),range:parseInt(n.getAttribute("distanceRange"),10)}}
let d=a.getElementsByTagName("page");let h=a.getElementsByTagName("char");let l=a.getElementsByTagName("kerning");i.fontSize=parseInt(s.getAttribute("size"),10);i.fontFamily=s.getAttribute("face");i.lineHeight=parseInt(r.getAttribute("lineHeight"),10);for(let p=0;p<d.length;p++){i.pages.push({id:parseInt(d[p].getAttribute("id"),10)||0,file:d[p].getAttribute("file")})}
let f={};i.baseLineOffset=0-parseInt(r.getAttribute("base"),10);for(let p=0;p<h.length;p++){let _=h[p];let m=parseInt(_.getAttribute("id"),10);let v=(t=(e=_.getAttribute("letter"))!=null?e:_.getAttribute("char"))!=null?t:String.fromCharCode(m);if(v==="space"){v=" "}
f[m]=v;i.chars[v]={id:m,page:parseInt(_.getAttribute("page"),10)||0,x:parseInt(_.getAttribute("x"),10),y:parseInt(_.getAttribute("y"),10),width:parseInt(_.getAttribute("width"),10),height:parseInt(_.getAttribute("height"),10),xOffset:parseInt(_.getAttribute("xoffset"),10),yOffset:parseInt(_.getAttribute("yoffset"),10),xAdvance:parseInt(_.getAttribute("xadvance"),10),kerning:{}}}
for(let p=0;p<l.length;p++){let _=parseInt(l[p].getAttribute("first"),10);let m=parseInt(l[p].getAttribute("second"),10);let v=parseInt(l[p].getAttribute("amount"),10);i.chars[f[m]].kerning[f[_]]=v}
return i}};var B7=[".xml",".fnt"];var F7={extension:{type:I.CacheParser,name:"cacheBitmapFont"},test:a=>a instanceof En,getCacheableAssets(a,e){let t={};a.forEach(i=>{t[i]=e;t[`${i}-bitmap`]=e});t[`${e.fontFamily}-bitmap`]=e;return t}};var D7={extension:{type:I.LoadParser,priority:Mt.Normal},name:"loadBitmapFont",test(a){return B7.includes(_t.extname(a).toLowerCase())},async testParse(a){return typeof a=="string"&&a.startsWith("info face=")||(typeof a=="string"&&a.includes("<font>")?typeof new DOMParser().parseFromString(a,"text/xml")!="string"&&"getElementsByTagName" in new DOMParser().parseFromString(a,"text/xml")&&new DOMParser().parseFromString(a,"text/xml").getElementsByTagName("page").length&&new DOMParser().parseFromString(a,"text/xml").getElementsByTagName("info")[0].getAttribute("face")!==null:!1)},async parse(a,e,t){let i=typeof a=="string"&&a.startsWith("info face=")?nd.parse(a):bb.parse(new DOMParser().parseFromString(a,"text/xml"));let{src:s}=e;let{pages:r}=i;let n=[];let d=i.distanceField?{scaleMode:"linear",alphaMode:"premultiply-alpha-on-upload",autoGenerateMipmaps:!1,resolution:1}:{};for(let f=0;f<r.length;++f){let p=r[f].file;let _=_t.join(_t.dirname(s),p);_=Fd(_,s);n.push({src:_,data:d})}
let h=await t.load(n);let l=n.map(f=>h[f.src]);return new En({data:i,textures:l},s)},async load(a,e){return await(await fetch(a,undefined)).text()},async unload(a,e,t){await Promise.all(a.pages.map(i=>t.unload(i.texture.source._sourceOrigin)));a.destroy()}};var yh=class{constructor(e,t=!1){this._loader=e;this._assetList=[];this._isLoading=!1;this._maxConcurrent=1;this.verbose=t}
add(e){e.forEach(t=>{this._assetList.push(t)});this.verbose;if(this._isActive&&!this._isLoading){this._next()}}
async _next(){if(this._assetList.length&&this._isActive){this._isLoading=!0;let e=[];let t=Math.min(this._assetList.length,this._maxConcurrent);for(let i=0;i<t;i++){e.push(this._assetList.pop())}
await this._loader.load(e);this._isLoading=!1;this._next()}}
get active(){return this._isActive}
set active(e){if(this._isActive!==e){this._isActive=e;if(e&&!this._isLoading){this._next()}}}};var k7={extension:{type:I.CacheParser,name:"cacheTextureArray"},test:a=>Array.isArray(a)&&a.every(e=>e instanceof W),getCacheableAssets:(a,e)=>{let t={};a.forEach(i=>{e.forEach((s,r)=>{t[i+(r===0?"":r+1)]=s})});return t}};async function M2(a){if("Image" in globalThis){return new Promise(e=>{let t=new Image();t.onload=()=>{e(!0)};t.onerror=()=>{e(!1)};t.src=a})}
if("createImageBitmap" in globalThis&&"fetch" in globalThis){try{let e=await(await fetch(a)).blob();await createImageBitmap(e)}catch{return!1}
return!0}
return!1}
var U7={extension:{type:I.DetectionParser,priority:1},test:async()=>M2("data:image/avif;base64,AAAAIGZ0eXBhdmlmAAAAAGF2aWZtaWYxbWlhZk1BMUIAAADybWV0YQAAAAAAAAAoaGRscgAAAAAAAAAAcGljdAAAAAAAAAAAAAAAAGxpYmF2aWYAAAAADnBpdG0AAAAAAAEAAAAeaWxvYwAAAABEAAABAAEAAAABAAABGgAAAB0AAAAoaWluZgAAAAAAAQAAABppbmZlAgAAAAABAABhdjAxQ29sb3IAAAAAamlwcnAAAABLaXBjbwAAABRpc3BlAAAAAAAAAAIAAAACAAAAEHBpeGkAAAAAAwgICAAAAAxhdjFDgQ0MAAAAABNjb2xybmNseAACAAIAAYAAAAAXaXBtYQAAAAAAAAABAAEEAQKDBAAAACVtZGF0EgAKCBgANogQEAwgMg8f8D///8WfhwB8+ErK42A="),add:async a=>[...a,"avif"],remove:async a=>a.filter(e=>e!=="avif")};var gb=["png","jpg","jpeg"];var L7={extension:{type:I.DetectionParser,priority:-1},test:()=>Promise.resolve(!0),add:async a=>[...a,...gb],remove:async a=>a.filter(e=>!gb.includes(e))};var N7="WorkerGlobalScope" in globalThis&&globalThis instanceof globalThis.WorkerGlobalScope;var j7={extension:{type:I.DetectionParser,priority:0},test:async()=>N7?!1:document.createElement("video").canPlayType("video/mp4")!=="",add:async a=>[...a,"mp4","m4v"],remove:async a=>a.filter(e=>e!=="mp4"&&e!=="m4v")};var X7={extension:{type:I.DetectionParser,priority:0},test:async()=>N7?!1:document.createElement("video").canPlayType("video/ogg")!=="",add:async a=>[...a,"ogv"],remove:async a=>a.filter(e=>e!=="ogv")};var H7={extension:{type:I.DetectionParser,priority:0},test:async()=>N7?!1:document.createElement("video").canPlayType("video/webm")!=="",add:async a=>[...a,"webm"],remove:async a=>a.filter(e=>e!=="webm")};var z7={extension:{type:I.DetectionParser,priority:0},test:async()=>M2("data:image/webp;base64,UklGRh4AAABXRUJQVlA4TBEAAAAvAAAAAAfQ//73v/+BiOh/AAA="),add:async a=>[...a,"webp"],remove:async a=>a.filter(e=>e!=="webp")};var V7=Object.defineProperty;var W7=Object.defineProperties;var Y7=Object.getOwnPropertyDescriptors;var mb=Object.getOwnPropertySymbols;var $7=Object.prototype.hasOwnProperty;var K7=Object.prototype.propertyIsEnumerable;var _b=(a,e,t)=>e in a?V7(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var q7=(a,e)=>{for(var t in e||(e={}))if($7.call(e,t)){_b(a,t,e[t])}
if(mb){for(var t of mb(e))if(K7.call(e,t)){_b(a,t,e[t])}}
return a};var xh=class{constructor(){this._parsers=[];this._parsersValidated=!1;this.parsers=new Proxy(this._parsers,{set:(e,t,i)=>(this._parsersValidated=!1,e[t]=i,!0)});this.promiseCache={}}
reset(){this._parsersValidated=!1;this.promiseCache={}}
_getLoadPromiseAndParser(e,t){let i={promise:null,parser:null};i.promise=(async()=>{var s;var r;let n=null;let d=null;if(t.loadParser){d=this._parserHash[t.loadParser]}
if(!d){for(let h=0;h<this.parsers.length;h++){let l=this.parsers[h];if(l.load&&(s=l.test)!=null&&s.call(l,e,t,this)){d=l;break}}
if(!d){return null}}
n=await d.load(e,t,this);i.parser=d;for(let h=0;h<this.parsers.length;h++){let l=this.parsers[h];if(l.parse&&l.parse&&(await((r=l.testParse)==null?undefined:r.call(l,n,t,this)))){n=(await l.parse(n,t,this))||n;i.parser=l}}
return n})();return i}
async load(e,t){if(!this._parsersValidated){this._validateParsers()}
let i=0;let s={};let r=!Array.isArray(e);let n=Xt(e,l=>({alias:[l],src:l,data:{}}));let d=n.length;let h=n.map(async l=>{let f=_t.toAbsolute(l.src);if(!s[l.src]){try{if(!this.promiseCache[f]){this.promiseCache[f]=this._getLoadPromiseAndParser(f,l)}
s[l.src]=await this.promiseCache[f].promise;if(t){t(++i/d)}}catch(p){delete this.promiseCache[f];delete s[l.src];throw new Error(`[Loader.load] Failed to load ${f}.
${p}`)}}});await Promise.all(h);return r?s[n[0].src]:s}
async unload(e){let t=Xt(e,i=>({alias:[i],src:i})).map(async i=>{var s;var r;let n=_t.toAbsolute(i.src);let d=this.promiseCache[n];if(d){let h=await d.promise;delete this.promiseCache[n];await((r=(s=d.parser)==null?undefined:s.unload)==null?undefined:r.call(s,h,i,this))}});await Promise.all(t)}
_validateParsers(){this._parsersValidated=!0;this._parserHash=this._parsers.filter(e=>e.name).reduce((e,t)=>(t.name&&e[t.name],W7(q7({},e),Y7({[t.name]:t}))),{})}};function Oi(a,e){if(Array.isArray(e)){for(let t of e)if(a.startsWith(`data:${t}`)){return!0}
return!1}
return a.startsWith(`data:${e}`)}
function zt(a,e){let t=a.split("?")[0];let i=_t.extname(t).toLowerCase();return Array.isArray(e)?e.includes(i):i===e}
var e9={extension:{type:I.LoadParser,priority:Mt.Low},name:"loadJson",test(a){return Oi(a,"application/json")||zt(a,".json")},async load(a){return await(await fetch(a,undefined)).json()}};var i9={name:"loadTxt",extension:{type:I.LoadParser,priority:Mt.Low,name:"loadTxt"},test(a){return Oi(a,"text/plain")||zt(a,".txt")},async load(a){return await(await fetch(a,undefined)).text()}};var s9=Object.defineProperty;var r9=Object.defineProperties;var n9=Object.getOwnPropertyDescriptors;var yb=Object.getOwnPropertySymbols;var o9=Object.prototype.hasOwnProperty;var c9=Object.prototype.propertyIsEnumerable;var xb=(a,e,t)=>e in a?s9(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var d9=(a,e)=>{for(var t in e||(e={}))if(o9.call(e,t)){xb(a,t,e[t])}
if(yb){for(var t of yb(e))if(c9.call(e,t)){xb(a,t,e[t])}}
return a};var l9=["normal","bold","100","200","300","400","500","600","700","800","900"];var u9=[".ttf",".otf",".woff",".woff2"];var f9=["font/ttf","font/otf","font/woff","font/woff2"];var b9=/^(--|-?[A-Z_])[0-9A-Z_-]*$/i;function p9(a){let e=_t.extname(a);let t=_t.basename(a,e).replace(/(-|_)/g," ").toLowerCase().split(" ").map(r=>r.charAt(0).toUpperCase()+r.slice(1));let i=t.length>0;for(let r of t)if(!r.match(b9)){i=!1;break}
let s=t.join(" ");if(!i){s=`"${s.replace(/[\\"]/g, "\\$&")}"`}
return s}
var g9=/^[0-9A-Za-z%:/?#\[\]@!\$&'()\*\+,;=\-._~]*$/;var _9={extension:{type:I.LoadParser,priority:Mt.Low},name:"loadWebFont",test(a){return Oi(a,f9)||zt(a,u9)},async load(a,e){var t;var i;var s;var r;var n;var d;let h=document.fonts;if(h){let l=[];let f=(i=(t=e.data)==null?undefined:t.family)!=null?i:p9(a);let p=(n=(r=(s=e.data)==null?undefined:s.weights)==null?undefined:r.filter(m=>l9.includes(m)))!=null?n:["normal"];let _=(d=e.data)!=null?d:{};for(let m=0;m<p.length;m++){let v=p[m];let T=new FontFace(f,`url(${g9.test(a) ? a : encodeURI(a)})`,r9(d9({},_),n9({weight:v})));await T.load();h.add(T);l.push(T)}
Me.set(`${f}-and-url`,{url:a,fontFaces:l});return l.length===1?l[0]:l}
return null},unload(a){(Array.isArray(a)?a:[a]).forEach(e=>{Me.remove(`${e.family}-and-url`);document.fonts.delete(e)})}};function Al(a,e=1){var t;let i=(t=da.RETINA_PREFIX)==null?undefined:t.exec(a);return i?parseFloat(i[1]):e}
function Za(a,e,t){a.label=t;a._sourceOrigin=t;let i=new W({source:a,label:t});let s=()=>{delete e.promiseCache[t];if(Me.has(t)){Me.remove(t)}};i.source.once("destroy",()=>{if(e.promiseCache[t]){s()}});i.once("destroy",()=>{if(!a.destroyed){s()}});return i}
var y9=Object.defineProperty;var Pn=Object.getOwnPropertySymbols;var C2=Object.prototype.hasOwnProperty;var O2=Object.prototype.propertyIsEnumerable;var vb=(a,e,t)=>e in a?y9(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var x9=(a,e)=>{for(var t in e||(e={}))if(C2.call(e,t)){vb(a,t,e[t])}
if(Pn){for(var t of Pn(e))if(O2.call(e,t)){vb(a,t,e[t])}}
return a};var v9=(a,e)=>{var t={};for(var i in a)if(C2.call(a,i)&&e.indexOf(i)<0){t[i]=a[i]}
if(a!=null&&Pn){for(var i of Pn(a))if(e.indexOf(i)<0&&O2.call(a,i)){t[i]=a[i]}}
return t};var w9={extension:{type:I.LoadParser,priority:Mt.Low,name:"loadSVG"},name:"loadSVG",config:{crossOrigin:"anonymous",parseAsGraphicsContext:!1},test(a){return Oi(a,"image/svg+xml")||zt(a,".svg")},async load(a,e,t){var i;var s;return((s=(i=e.data)==null?undefined:i.parseAsGraphicsContext)!=null?s:this.config.parseAsGraphicsContext)?E9(a):A9(a,e,t,this.config.crossOrigin)},unload(a){a.destroy(!0)}};async function A9(a,e,t,i){var s;var r;var n;var d;var h;var l;let f=await(await fetch(a,undefined)).blob();let p=URL.createObjectURL(f);let _=new Image();_.src=p;_.crossOrigin=i;await _.decode();URL.revokeObjectURL(p);let m=document.createElement("canvas");let v=m.getContext("2d");let T=((s=e.data)==null?undefined:s.resolution)||Al(a);let w=(n=(r=e.data)==null?undefined:r.width)!=null?n:_.width;let P=(h=(d=e.data)==null?undefined:d.height)!=null?h:_.height;m.width=w*T;m.height=P*T;v.drawImage(_,0,0,w*T,P*T);let C=(l=e.data)!=null?l:{};let D=v9(C,["parseAsGraphicsContext"]);let X=new Ma(x9({resource:m,alphaMode:"premultiply-alpha-on-upload",resolution:T},D));return Za(X,t,a)}
async function E9(a){let e=await(await fetch(a,undefined)).text();let t=new uh();t.svg(e);return t}
var yi=null;var vh=class{constructor(){if(!yi){yi=URL.createObjectURL(new Blob([`(function(){"use strict";const e="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+ip1sAAAAASUVORK5CYII=";async function a(){try{if(typeof createImageBitmap!="function")return!1;const A=await(await fetch(e)).blob(),t=await createImageBitmap(A);return t.width===1&&t.height===1}catch(A){return!1}}a().then(A=>{self.postMessage(A)})})();
`],{type:"application/javascript"}))}
this.worker=new Worker(yi)}};vh.revokeObjectURL=function(){if(yi){URL.revokeObjectURL(yi);yi=null}};var xi=null;var I2=class{constructor(){if(!xi){xi=URL.createObjectURL(new Blob(["(function(){\"use strict\";async function s(a,t){const e=await fetch(a);if(!e.ok)throw new Error(`[WorkerManager.loadImageBitmap] Failed to fetch ${a}: ${e.status} ${e.statusText}`);const i=await e.blob();return t===\"premultiplied-alpha\"?createImageBitmap(i,{premultiplyAlpha:\"none\"}):createImageBitmap(i)}self.onmessage=async a=>{try{const t=await s(a.data.data[0],a.data.data[1]);self.postMessage({data:t,uuid:a.data.uuid,id:a.data.id},[t])}catch(t){self.postMessage({error:t,uuid:a.data.uuid,id:a.data.id})}}})();\n"],{type:"application/javascript"}))}
this.worker=new Worker(xi)}};I2.revokeObjectURL=function(){if(xi){URL.revokeObjectURL(xi);xi=null}};var Tb=0;var od;var M9=class{constructor(){this._initialized=!1;this._createdWorkers=0;this._workerPool=[];this._queue=[];this._resolveHash={}}
isImageBitmapSupported(){return this._isImageBitmapSupported!==undefined?this._isImageBitmapSupported:(this._isImageBitmapSupported=new Promise(a=>{let{worker:e}=new vh();e.addEventListener("message",t=>{e.terminate();vh.revokeObjectURL();a(t.data)})}),this._isImageBitmapSupported)}
loadImageBitmap(a,e){var t;return this._run("loadImageBitmap",[a,(t=e?.data)==null?undefined:t.alphaMode])}
async _initWorkers(){if(!this._initialized){this._initialized=!0}}
_getWorker(){if(od===undefined){od=navigator.hardwareConcurrency||4}
let a=this._workerPool.pop();if(!a&&this._createdWorkers<od){this._createdWorkers++;a=new I2().worker;a.addEventListener("message",e=>{this._complete(e.data);this._returnWorker(e.target);this._next()})}
return a}
_returnWorker(a){this._workerPool.push(a)}
_complete(a){if(a.error!==undefined){this._resolveHash[a.uuid].reject(a.error)}else{this._resolveHash[a.uuid].resolve(a.data)}
this._resolveHash[a.uuid]=null}
async _run(a,e){await this._initWorkers();let t=new Promise((i,s)=>{this._queue.push({id:a,arguments:e,resolve:i,reject:s})});this._next();return t}
_next(){if(!this._queue.length){return}
let a=this._getWorker();if(!a){return}
let e=this._queue.pop();let t=e.id;this._resolveHash[Tb]={resolve:e.resolve,reject:e.reject};a.postMessage({data:e.arguments,uuid:Tb++,id:t})}};var Sb=new M9();var C9=Object.defineProperty;var wb=Object.getOwnPropertySymbols;var O9=Object.prototype.hasOwnProperty;var I9=Object.prototype.propertyIsEnumerable;var Ab=(a,e,t)=>e in a?C9(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var G9=(a,e)=>{for(var t in e||(e={}))if(O9.call(e,t)){Ab(a,t,e[t])}
if(wb){for(var t of wb(e))if(I9.call(e,t)){Ab(a,t,e[t])}}
return a};var B9=[".jpeg",".jpg",".png",".webp",".avif"];var F9=["image/jpeg","image/png","image/webp","image/avif"];async function D9(a,e){var t;let i=await fetch(a,undefined);if(!i.ok){throw new Error(`[loadImageBitmap] Failed to fetch ${a}: ${i.status} ${i.statusText}`)}
let s=await i.blob();return((t=e?.data)==null?undefined:t.alphaMode)==="premultiplied-alpha"?createImageBitmap(s,{premultiplyAlpha:"none"}):createImageBitmap(s)}
var G2={name:"loadTextures",extension:{type:I.LoadParser,priority:Mt.High,name:"loadTextures"},config:{preferWorkers:!0,preferCreateImageBitmap:!0,crossOrigin:"anonymous"},test(a){return Oi(a,F9)||zt(a,B9)},async load(a,e,t){var i;let s=null;if(globalThis.createImageBitmap&&this.config.preferCreateImageBitmap){if(this.config.preferWorkers&&(await Sb.isImageBitmapSupported())){s=await Sb.loadImageBitmap(a,e)}else{s=await D9(a,e)}}else{s=await new Promise((n,d)=>{s=new Image();s.crossOrigin=this.config.crossOrigin;s.src=a;if(s.complete){n(s)}else{s.onload=()=>{n(s)};s.onerror=d}})}
let r=new Ma(G9({resource:s,alphaMode:"premultiply-alpha-on-upload",resolution:((i=e.data)==null?undefined:i.resolution)||Al(a)},e.data));return Za(r,t,a)},unload(a){a.destroy(!0)}};var k9=Object.defineProperty;var U9=Object.defineProperties;var L9=Object.getOwnPropertyDescriptors;var Eb=Object.getOwnPropertySymbols;var N9=Object.prototype.hasOwnProperty;var j9=Object.prototype.propertyIsEnumerable;var Pb=(a,e,t)=>e in a?k9(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var cd=(a,e)=>{for(var t in e||(e={}))if(N9.call(e,t)){Pb(a,t,e[t])}
if(Eb){for(var t of Eb(e))if(j9.call(e,t)){Pb(a,t,e[t])}}
return a};var B2=[".mp4",".m4v",".webm",".ogg",".ogv",".h264",".avi",".mov"];var X9=B2.map(a=>`video/${a.substring(1)}`);function H9(a,e,t){if(t===undefined&&!e.startsWith("data:")){a.crossOrigin=V9(e)}else if(t!==!1){a.crossOrigin=typeof t=="string"?t:"anonymous"}}
function z9(a){return new Promise((e,t)=>{a.addEventListener("canplaythrough",i);a.addEventListener("error",s);a.load();function i(){r();e()}
function s(n){r();t(n)}
function r(){a.removeEventListener("canplaythrough",i);a.removeEventListener("error",s)}})}
function V9(a,e=globalThis.location){if(a.startsWith("data:")){return""}
if(!e){e=globalThis.location}
let t=new URL(a,document.baseURI);return t.hostname!==e.hostname||t.port!==e.port||t.protocol!==e.protocol?"anonymous":""}
var W9={name:"loadVideo",extension:{type:I.LoadParser,name:"loadVideo"},test(a){let e=Oi(a,X9);let t=zt(a,B2);return e||t},async load(a,e,t){var i;var s;let r=cd(U9(cd({},Gr.defaultOptions),L9({resolution:((i=e.data)==null?undefined:i.resolution)||Al(a),alphaMode:((s=e.data)==null?undefined:s.alphaMode)||(await Mp())})),e.data);let n=document.createElement("video");let d={preload:r.autoLoad!==!1?"auto":undefined,"webkit-playsinline":r.playsinline!==!1?"":undefined,playsinline:r.playsinline!==!1?"":undefined,muted:r.muted===!0?"":undefined,loop:r.loop===!0?"":undefined,autoplay:r.autoPlay!==!1?"":undefined};Object.keys(d).forEach(f=>{let p=d[f];if(p!==undefined){n.setAttribute(f,p)}});if(r.muted===!0){n.muted=!0}
H9(n,a,r.crossorigin);let h=document.createElement("source");let l;if(a.startsWith("data:")){l=a.slice(5,a.indexOf(";"))}else if(!a.startsWith("blob:")){let f=a.split("?")[0].slice(a.lastIndexOf(".")+1).toLowerCase();l=Gr.MIME_TYPES[f]||`video/${f}`}
h.src=a;if(l){h.type=l}
return new Promise(f=>{let p=async()=>{let _=new Gr(U9(cd({},r),L9({resource:n})));n.removeEventListener("canplay",p);if(e.data.preload){await z9(n)}
f(Za(_,t,a))};n.addEventListener("canplay",p);n.appendChild(h)})},unload(a){a.destroy(!0)}};var F2={extension:{type:I.ResolveParser,name:"resolveTexture"},test:G2.test,parse:a=>{var e;var t;return{resolution:parseFloat((t=(e=da.RETINA_PREFIX.exec(a))==null?undefined:e[1])!=null?t:"1"),format:a.split(".").pop(),src:a}}};var Y9={extension:{type:I.ResolveParser,priority:-2,name:"resolveJson"},test:a=>da.RETINA_PREFIX.test(a)&&a.endsWith(".json"),parse:F2.parse};var Th=class{constructor(){this._detections=[];this._initialized=!1;this.resolver=new da();this.loader=new xh();this.cache=Me;this._backgroundLoader=new yh(this.loader);this._backgroundLoader.active=!0;this.reset()}
async init(e={}){var t;var i;var s;if(this._initialized){return}
this._initialized=!0;if(e.defaultSearchParams){this.resolver.setDefaultSearchParams(e.defaultSearchParams)}
if(e.basePath){this.resolver.basePath=e.basePath}
if(e.bundleIdentifier){this.resolver.setBundleIdentifier(e.bundleIdentifier)}
if(e.manifest){let h=e.manifest;if(typeof h=="string"){h=await this.load(h)}
this.resolver.addManifest(h)}
let r=(i=(t=e.texturePreference)==null?undefined:t.resolution)!=null?i:1;let n=typeof r=="number"?[r]:r;let d=await this._detectFormats({preferredFormats:(s=e.texturePreference)==null?undefined:s.format,skipDetections:e.skipDetections,detections:this._detections});this.resolver.prefer({params:{format:d,resolution:n}});if(e.preferences){this.setPreferences(e.preferences)}}
add(e){this.resolver.add(e)}
async load(e,t){if(!this._initialized){await this.init()}
let i=!Array.isArray(e);let s=Xt(e).map(d=>{if(typeof d!="string"){let h=this.resolver.getAlias(d);if(h.some(l=>!this.resolver.hasKey(l))){this.add(d)}
return Array.isArray(h)?h[0]:h}
if(!this.resolver.hasKey(d)){this.add({alias:d,src:d})}
return d});let r=this.resolver.resolve(s);let n=await this._mapLoadToResolve(r,t);return i?n[s[0]]:n}
addBundle(e,t){this.resolver.addBundle(e,t)}
async loadBundle(e,t){if(!this._initialized){await this.init()}
let i=!1;if(typeof e=="string"){i=!0;e=[e]}
let s=this.resolver.resolveBundle(e);let r={};let n=Object.keys(s);let d=0;let h=0;let l=()=>{t?.(++d/h)};let f=n.map(p=>{let _=s[p];h+=Object.keys(_).length;return this._mapLoadToResolve(_,l).then(m=>{r[p]=m})});await Promise.all(f);return i?r[e[0]]:r}
async backgroundLoad(e){if(!this._initialized){await this.init()}
if(typeof e=="string"){e=[e]}
let t=this.resolver.resolve(e);this._backgroundLoader.add(Object.values(t))}
async backgroundLoadBundle(e){if(!this._initialized){await this.init()}
if(typeof e=="string"){e=[e]}
let t=this.resolver.resolveBundle(e);Object.values(t).forEach(i=>{this._backgroundLoader.add(Object.values(i))})}
reset(){this.resolver.reset();this.loader.reset();this.cache.reset();this._initialized=!1}
get(e){if(typeof e=="string"){return Me.get(e)}
let t={};for(let i=0;i<e.length;i++){t[i]=Me.get(e[i])}
return t}
async _mapLoadToResolve(e,t){let i=[...new Set(Object.values(e))];this._backgroundLoader.active=!1;let s=await this.loader.load(i,t);this._backgroundLoader.active=!0;let r={};i.forEach(n=>{let d=s[n.src];let h=[n.src];if(n.alias){h.push(...n.alias)}
h.forEach(l=>{r[l]=d});Me.set(h,d)});return r}
async unload(e){if(!this._initialized){await this.init()}
let t=Xt(e).map(s=>typeof s!="string"?s.src:s);let i=this.resolver.resolve(t);await this._unloadFromResolved(i)}
async unloadBundle(e){if(!this._initialized){await this.init()}
e=Xt(e);let t=this.resolver.resolveBundle(e);let i=Object.keys(t).map(s=>this._unloadFromResolved(t[s]));await Promise.all(i)}
async _unloadFromResolved(e){let t=Object.values(e);t.forEach(i=>{Me.remove(i.src)});await this.loader.unload(t)}
async _detectFormats(e){let t=[];if(e.preferredFormats){t=Array.isArray(e.preferredFormats)?e.preferredFormats:[e.preferredFormats]}
for(let i of e.detections)if(e.skipDetections||(await i.test())){t=await i.add(t)}else if(!e.skipDetections){t=await i.remove(t)}
t=t.filter((i,s)=>t.indexOf(i)===s);return t}
get detections(){return this._detections}
setPreferences(e){this.loader.parsers.forEach(t=>{if(t.config){Object.keys(t.config).filter(i=>i in e).forEach(i=>{t.config[i]=e[i]})}})}};var pe=new Th();fe.handleByList(I.LoadParser,pe.loader.parsers).handleByList(I.ResolveParser,pe.resolver.parsers).handleByList(I.CacheParser,pe.cache.parsers).handleByList(I.DetectionParser,pe.detections);fe.add(k7,L7,U7,z7,j7,X7,H7,e9,i9,_9,w9,G2,W9,D7,F7,F2,Y9);var Mb={loader:I.LoadParser,resolver:I.ResolveParser,cache:I.CacheParser,detection:I.DetectionParser};fe.handle(I.Asset,a=>{let e=a.ref;Object.entries(Mb).filter(([t])=>!!e[t]).forEach(([t,i])=>{var s;return fe.add(Object.assign(e[t],{extension:(s=e[t].extension)!=null?s:i}))})},a=>{let e=a.ref;Object.keys(Mb).filter(t=>!!e[t]).forEach(t=>fe.remove(e[t]))});var vi=null;var k2=class{constructor(){if(!vi){vi=URL.createObjectURL(new Blob(["(function(){\"use strict\";function g(r,a){const t=r.getNumImages(),s=r.getNumLevels(0);if(!r.startTranscoding())throw new Error(\"startTranscoding failed\");const m=[];for(let e=0;e<s;++e)for(let o=0;o<t;++o){const B=r.getImageTranscodedSizeInBytes(o,e,a),f=new Uint8Array(B);if(!r.transcodeImage(f,o,e,a,1,0))throw new Error(\"transcodeImage failed\");m.push(f)}return m}const w={\"bc3-rgba-unorm\":3,\"bc7-rgba-unorm\":6,\"etc2-rgba8unorm\":1,\"astc-4x4-unorm\":10,rgba8unorm:13,rgba4unorm:16};function d(r){const a=w[r];if(a)return a;throw new Error(`Unsupported transcoderFormat: ${r}`)}const n={jsUrl:\"basis/basis_transcoder.js\",wasmUrl:\"basis/basis_transcoder.wasm\"};let u,i,c;async function l(){if(!c){const r=new URL(n.jsUrl,location.origin).href,a=new URL(n.wasmUrl,location.origin).href;importScripts(r),c=new Promise(t=>{BASIS({locateFile:s=>a}).then(s=>{s.initializeBasis(),t(s.BasisFile)})})}return c}async function b(r,a){const t=await fetch(r);if(t.ok){const s=await t.arrayBuffer();return new a(new Uint8Array(s))}throw new Error(`Failed to load Basis texture: ${r}`)}const h=[\"bc7-rgba-unorm\",\"astc-4x4-unorm\",\"etc2-rgba8unorm\",\"bc3-rgba-unorm\",\"rgba8unorm\"];async function p(r){const a=await l(),t=await b(r,a),s=g(t,u);return{width:t.getImageWidth(0,0),height:t.getImageHeight(0,0),format:i,resource:s,alphaMode:\"no-premultiply-alpha\"}}async function y(r,a,t){r&&(n.jsUrl=r),a&&(n.wasmUrl=a),i=h.filter(s=>t.includes(s))[0],u=d(i),await l()}const U={init:async r=>{const{jsUrl:a,wasmUrl:t,supportedTextures:s}=r;await y(a,t,s)},load:async r=>{var a;try{const t=await p(r.url);return{type:\"load\",url:r.url,success:!0,textureOptions:t,transferables:(a=t.resource)==null?void 0:a.map(s=>s.buffer)}}catch(t){throw t}}};self.onmessage=async r=>{const a=r.data,t=await U[a.type](a);t&&self.postMessage(t,t.transferables)}})();\n"],{type:"application/javascript"}))}
this.worker=new Worker(vi)}};k2.revokeObjectURL=function(){if(vi){URL.revokeObjectURL(vi);vi=null}};var L2=(a=>(a[a.DXGI_FORMAT_UNKNOWN=0]="DXGI_FORMAT_UNKNOWN",a[a.DXGI_FORMAT_R32G32B32A32_TYPELESS=1]="DXGI_FORMAT_R32G32B32A32_TYPELESS",a[a.DXGI_FORMAT_R32G32B32A32_FLOAT=2]="DXGI_FORMAT_R32G32B32A32_FLOAT",a[a.DXGI_FORMAT_R32G32B32A32_UINT=3]="DXGI_FORMAT_R32G32B32A32_UINT",a[a.DXGI_FORMAT_R32G32B32A32_SINT=4]="DXGI_FORMAT_R32G32B32A32_SINT",a[a.DXGI_FORMAT_R32G32B32_TYPELESS=5]="DXGI_FORMAT_R32G32B32_TYPELESS",a[a.DXGI_FORMAT_R32G32B32_FLOAT=6]="DXGI_FORMAT_R32G32B32_FLOAT",a[a.DXGI_FORMAT_R32G32B32_UINT=7]="DXGI_FORMAT_R32G32B32_UINT",a[a.DXGI_FORMAT_R32G32B32_SINT=8]="DXGI_FORMAT_R32G32B32_SINT",a[a.DXGI_FORMAT_R16G16B16A16_TYPELESS=9]="DXGI_FORMAT_R16G16B16A16_TYPELESS",a[a.DXGI_FORMAT_R16G16B16A16_FLOAT=10]="DXGI_FORMAT_R16G16B16A16_FLOAT",a[a.DXGI_FORMAT_R16G16B16A16_UNORM=11]="DXGI_FORMAT_R16G16B16A16_UNORM",a[a.DXGI_FORMAT_R16G16B16A16_UINT=12]="DXGI_FORMAT_R16G16B16A16_UINT",a[a.DXGI_FORMAT_R16G16B16A16_SNORM=13]="DXGI_FORMAT_R16G16B16A16_SNORM",a[a.DXGI_FORMAT_R16G16B16A16_SINT=14]="DXGI_FORMAT_R16G16B16A16_SINT",a[a.DXGI_FORMAT_R32G32_TYPELESS=15]="DXGI_FORMAT_R32G32_TYPELESS",a[a.DXGI_FORMAT_R32G32_FLOAT=16]="DXGI_FORMAT_R32G32_FLOAT",a[a.DXGI_FORMAT_R32G32_UINT=17]="DXGI_FORMAT_R32G32_UINT",a[a.DXGI_FORMAT_R32G32_SINT=18]="DXGI_FORMAT_R32G32_SINT",a[a.DXGI_FORMAT_R32G8X24_TYPELESS=19]="DXGI_FORMAT_R32G8X24_TYPELESS",a[a.DXGI_FORMAT_D32_FLOAT_S8X24_UINT=20]="DXGI_FORMAT_D32_FLOAT_S8X24_UINT",a[a.DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS=21]="DXGI_FORMAT_R32_FLOAT_X8X24_TYPELESS",a[a.DXGI_FORMAT_X32_TYPELESS_G8X24_UINT=22]="DXGI_FORMAT_X32_TYPELESS_G8X24_UINT",a[a.DXGI_FORMAT_R10G10B10A2_TYPELESS=23]="DXGI_FORMAT_R10G10B10A2_TYPELESS",a[a.DXGI_FORMAT_R10G10B10A2_UNORM=24]="DXGI_FORMAT_R10G10B10A2_UNORM",a[a.DXGI_FORMAT_R10G10B10A2_UINT=25]="DXGI_FORMAT_R10G10B10A2_UINT",a[a.DXGI_FORMAT_R11G11B10_FLOAT=26]="DXGI_FORMAT_R11G11B10_FLOAT",a[a.DXGI_FORMAT_R8G8B8A8_TYPELESS=27]="DXGI_FORMAT_R8G8B8A8_TYPELESS",a[a.DXGI_FORMAT_R8G8B8A8_UNORM=28]="DXGI_FORMAT_R8G8B8A8_UNORM",a[a.DXGI_FORMAT_R8G8B8A8_UNORM_SRGB=29]="DXGI_FORMAT_R8G8B8A8_UNORM_SRGB",a[a.DXGI_FORMAT_R8G8B8A8_UINT=30]="DXGI_FORMAT_R8G8B8A8_UINT",a[a.DXGI_FORMAT_R8G8B8A8_SNORM=31]="DXGI_FORMAT_R8G8B8A8_SNORM",a[a.DXGI_FORMAT_R8G8B8A8_SINT=32]="DXGI_FORMAT_R8G8B8A8_SINT",a[a.DXGI_FORMAT_R16G16_TYPELESS=33]="DXGI_FORMAT_R16G16_TYPELESS",a[a.DXGI_FORMAT_R16G16_FLOAT=34]="DXGI_FORMAT_R16G16_FLOAT",a[a.DXGI_FORMAT_R16G16_UNORM=35]="DXGI_FORMAT_R16G16_UNORM",a[a.DXGI_FORMAT_R16G16_UINT=36]="DXGI_FORMAT_R16G16_UINT",a[a.DXGI_FORMAT_R16G16_SNORM=37]="DXGI_FORMAT_R16G16_SNORM",a[a.DXGI_FORMAT_R16G16_SINT=38]="DXGI_FORMAT_R16G16_SINT",a[a.DXGI_FORMAT_R32_TYPELESS=39]="DXGI_FORMAT_R32_TYPELESS",a[a.DXGI_FORMAT_D32_FLOAT=40]="DXGI_FORMAT_D32_FLOAT",a[a.DXGI_FORMAT_R32_FLOAT=41]="DXGI_FORMAT_R32_FLOAT",a[a.DXGI_FORMAT_R32_UINT=42]="DXGI_FORMAT_R32_UINT",a[a.DXGI_FORMAT_R32_SINT=43]="DXGI_FORMAT_R32_SINT",a[a.DXGI_FORMAT_R24G8_TYPELESS=44]="DXGI_FORMAT_R24G8_TYPELESS",a[a.DXGI_FORMAT_D24_UNORM_S8_UINT=45]="DXGI_FORMAT_D24_UNORM_S8_UINT",a[a.DXGI_FORMAT_R24_UNORM_X8_TYPELESS=46]="DXGI_FORMAT_R24_UNORM_X8_TYPELESS",a[a.DXGI_FORMAT_X24_TYPELESS_G8_UINT=47]="DXGI_FORMAT_X24_TYPELESS_G8_UINT",a[a.DXGI_FORMAT_R8G8_TYPELESS=48]="DXGI_FORMAT_R8G8_TYPELESS",a[a.DXGI_FORMAT_R8G8_UNORM=49]="DXGI_FORMAT_R8G8_UNORM",a[a.DXGI_FORMAT_R8G8_UINT=50]="DXGI_FORMAT_R8G8_UINT",a[a.DXGI_FORMAT_R8G8_SNORM=51]="DXGI_FORMAT_R8G8_SNORM",a[a.DXGI_FORMAT_R8G8_SINT=52]="DXGI_FORMAT_R8G8_SINT",a[a.DXGI_FORMAT_R16_TYPELESS=53]="DXGI_FORMAT_R16_TYPELESS",a[a.DXGI_FORMAT_R16_FLOAT=54]="DXGI_FORMAT_R16_FLOAT",a[a.DXGI_FORMAT_D16_UNORM=55]="DXGI_FORMAT_D16_UNORM",a[a.DXGI_FORMAT_R16_UNORM=56]="DXGI_FORMAT_R16_UNORM",a[a.DXGI_FORMAT_R16_UINT=57]="DXGI_FORMAT_R16_UINT",a[a.DXGI_FORMAT_R16_SNORM=58]="DXGI_FORMAT_R16_SNORM",a[a.DXGI_FORMAT_R16_SINT=59]="DXGI_FORMAT_R16_SINT",a[a.DXGI_FORMAT_R8_TYPELESS=60]="DXGI_FORMAT_R8_TYPELESS",a[a.DXGI_FORMAT_R8_UNORM=61]="DXGI_FORMAT_R8_UNORM",a[a.DXGI_FORMAT_R8_UINT=62]="DXGI_FORMAT_R8_UINT",a[a.DXGI_FORMAT_R8_SNORM=63]="DXGI_FORMAT_R8_SNORM",a[a.DXGI_FORMAT_R8_SINT=64]="DXGI_FORMAT_R8_SINT",a[a.DXGI_FORMAT_A8_UNORM=65]="DXGI_FORMAT_A8_UNORM",a[a.DXGI_FORMAT_R1_UNORM=66]="DXGI_FORMAT_R1_UNORM",a[a.DXGI_FORMAT_R9G9B9E5_SHAREDEXP=67]="DXGI_FORMAT_R9G9B9E5_SHAREDEXP",a[a.DXGI_FORMAT_R8G8_B8G8_UNORM=68]="DXGI_FORMAT_R8G8_B8G8_UNORM",a[a.DXGI_FORMAT_G8R8_G8B8_UNORM=69]="DXGI_FORMAT_G8R8_G8B8_UNORM",a[a.DXGI_FORMAT_BC1_TYPELESS=70]="DXGI_FORMAT_BC1_TYPELESS",a[a.DXGI_FORMAT_BC1_UNORM=71]="DXGI_FORMAT_BC1_UNORM",a[a.DXGI_FORMAT_BC1_UNORM_SRGB=72]="DXGI_FORMAT_BC1_UNORM_SRGB",a[a.DXGI_FORMAT_BC2_TYPELESS=73]="DXGI_FORMAT_BC2_TYPELESS",a[a.DXGI_FORMAT_BC2_UNORM=74]="DXGI_FORMAT_BC2_UNORM",a[a.DXGI_FORMAT_BC2_UNORM_SRGB=75]="DXGI_FORMAT_BC2_UNORM_SRGB",a[a.DXGI_FORMAT_BC3_TYPELESS=76]="DXGI_FORMAT_BC3_TYPELESS",a[a.DXGI_FORMAT_BC3_UNORM=77]="DXGI_FORMAT_BC3_UNORM",a[a.DXGI_FORMAT_BC3_UNORM_SRGB=78]="DXGI_FORMAT_BC3_UNORM_SRGB",a[a.DXGI_FORMAT_BC4_TYPELESS=79]="DXGI_FORMAT_BC4_TYPELESS",a[a.DXGI_FORMAT_BC4_UNORM=80]="DXGI_FORMAT_BC4_UNORM",a[a.DXGI_FORMAT_BC4_SNORM=81]="DXGI_FORMAT_BC4_SNORM",a[a.DXGI_FORMAT_BC5_TYPELESS=82]="DXGI_FORMAT_BC5_TYPELESS",a[a.DXGI_FORMAT_BC5_UNORM=83]="DXGI_FORMAT_BC5_UNORM",a[a.DXGI_FORMAT_BC5_SNORM=84]="DXGI_FORMAT_BC5_SNORM",a[a.DXGI_FORMAT_B5G6R5_UNORM=85]="DXGI_FORMAT_B5G6R5_UNORM",a[a.DXGI_FORMAT_B5G5R5A1_UNORM=86]="DXGI_FORMAT_B5G5R5A1_UNORM",a[a.DXGI_FORMAT_B8G8R8A8_UNORM=87]="DXGI_FORMAT_B8G8R8A8_UNORM",a[a.DXGI_FORMAT_B8G8R8X8_UNORM=88]="DXGI_FORMAT_B8G8R8X8_UNORM",a[a.DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM=89]="DXGI_FORMAT_R10G10B10_XR_BIAS_A2_UNORM",a[a.DXGI_FORMAT_B8G8R8A8_TYPELESS=90]="DXGI_FORMAT_B8G8R8A8_TYPELESS",a[a.DXGI_FORMAT_B8G8R8A8_UNORM_SRGB=91]="DXGI_FORMAT_B8G8R8A8_UNORM_SRGB",a[a.DXGI_FORMAT_B8G8R8X8_TYPELESS=92]="DXGI_FORMAT_B8G8R8X8_TYPELESS",a[a.DXGI_FORMAT_B8G8R8X8_UNORM_SRGB=93]="DXGI_FORMAT_B8G8R8X8_UNORM_SRGB",a[a.DXGI_FORMAT_BC6H_TYPELESS=94]="DXGI_FORMAT_BC6H_TYPELESS",a[a.DXGI_FORMAT_BC6H_UF16=95]="DXGI_FORMAT_BC6H_UF16",a[a.DXGI_FORMAT_BC6H_SF16=96]="DXGI_FORMAT_BC6H_SF16",a[a.DXGI_FORMAT_BC7_TYPELESS=97]="DXGI_FORMAT_BC7_TYPELESS",a[a.DXGI_FORMAT_BC7_UNORM=98]="DXGI_FORMAT_BC7_UNORM",a[a.DXGI_FORMAT_BC7_UNORM_SRGB=99]="DXGI_FORMAT_BC7_UNORM_SRGB",a[a.DXGI_FORMAT_AYUV=100]="DXGI_FORMAT_AYUV",a[a.DXGI_FORMAT_Y410=101]="DXGI_FORMAT_Y410",a[a.DXGI_FORMAT_Y416=102]="DXGI_FORMAT_Y416",a[a.DXGI_FORMAT_NV12=103]="DXGI_FORMAT_NV12",a[a.DXGI_FORMAT_P010=104]="DXGI_FORMAT_P010",a[a.DXGI_FORMAT_P016=105]="DXGI_FORMAT_P016",a[a.DXGI_FORMAT_420_OPAQUE=106]="DXGI_FORMAT_420_OPAQUE",a[a.DXGI_FORMAT_YUY2=107]="DXGI_FORMAT_YUY2",a[a.DXGI_FORMAT_Y210=108]="DXGI_FORMAT_Y210",a[a.DXGI_FORMAT_Y216=109]="DXGI_FORMAT_Y216",a[a.DXGI_FORMAT_NV11=110]="DXGI_FORMAT_NV11",a[a.DXGI_FORMAT_AI44=111]="DXGI_FORMAT_AI44",a[a.DXGI_FORMAT_IA44=112]="DXGI_FORMAT_IA44",a[a.DXGI_FORMAT_P8=113]="DXGI_FORMAT_P8",a[a.DXGI_FORMAT_A8P8=114]="DXGI_FORMAT_A8P8",a[a.DXGI_FORMAT_B4G4R4A4_UNORM=115]="DXGI_FORMAT_B4G4R4A4_UNORM",a[a.DXGI_FORMAT_P208=116]="DXGI_FORMAT_P208",a[a.DXGI_FORMAT_V208=117]="DXGI_FORMAT_V208",a[a.DXGI_FORMAT_V408=118]="DXGI_FORMAT_V408",a[a.DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE=119]="DXGI_FORMAT_SAMPLER_FEEDBACK_MIN_MIP_OPAQUE",a[a.DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE=120]="DXGI_FORMAT_SAMPLER_FEEDBACK_MIP_REGION_USED_OPAQUE",a[a.DXGI_FORMAT_FORCE_UINT=121]="DXGI_FORMAT_FORCE_UINT",a))(L2||{});var N2=(a=>(a[a.DDS_DIMENSION_TEXTURE1D=2]="DDS_DIMENSION_TEXTURE1D",a[a.DDS_DIMENSION_TEXTURE2D=3]="DDS_DIMENSION_TEXTURE2D",a[a.DDS_DIMENSION_TEXTURE3D=6]="DDS_DIMENSION_TEXTURE3D",a))(N2||{});var bt=(a=>(a[a.UNKNOWN=0]="UNKNOWN",a[a.R8G8B8=20]="R8G8B8",a[a.A8R8G8B8=21]="A8R8G8B8",a[a.X8R8G8B8=22]="X8R8G8B8",a[a.R5G6B5=23]="R5G6B5",a[a.X1R5G5B5=24]="X1R5G5B5",a[a.A1R5G5B5=25]="A1R5G5B5",a[a.A4R4G4B4=26]="A4R4G4B4",a[a.R3G3B2=27]="R3G3B2",a[a.A8=28]="A8",a[a.A8R3G3B2=29]="A8R3G3B2",a[a.X4R4G4B4=30]="X4R4G4B4",a[a.A2B10G10R10=31]="A2B10G10R10",a[a.A8B8G8R8=32]="A8B8G8R8",a[a.X8B8G8R8=33]="X8B8G8R8",a[a.G16R16=34]="G16R16",a[a.A2R10G10B10=35]="A2R10G10B10",a[a.A16B16G16R16=36]="A16B16G16R16",a[a.A8P8=40]="A8P8",a[a.P8=41]="P8",a[a.L8=50]="L8",a[a.A8L8=51]="A8L8",a[a.A4L4=52]="A4L4",a[a.V8U8=60]="V8U8",a[a.L6V5U5=61]="L6V5U5",a[a.X8L8V8U8=62]="X8L8V8U8",a[a.Q8W8V8U8=63]="Q8W8V8U8",a[a.V16U16=64]="V16U16",a[a.A2W10V10U10=67]="A2W10V10U10",a[a.Q16W16V16U16=110]="Q16W16V16U16",a[a.R16F=111]="R16F",a[a.G16R16F=112]="G16R16F",a[a.A16B16G16R16F=113]="A16B16G16R16F",a[a.R32F=114]="R32F",a[a.G32R32F=115]="G32R32F",a[a.A32B32G32R32F=116]="A32B32G32R32F",a[a.UYVY="UYVY".charCodeAt(0)+("UYVY".charCodeAt(1)<<8)+("UYVY".charCodeAt(2)<<16)+("UYVY".charCodeAt(3)<<24)]="UYVY",a[a.R8G8_B8G8="RGBG".charCodeAt(0)+("RGBG".charCodeAt(1)<<8)+("RGBG".charCodeAt(2)<<16)+("RGBG".charCodeAt(3)<<24)]="R8G8_B8G8",a[a.YUY2="YUY2".charCodeAt(0)+("YUY2".charCodeAt(1)<<8)+("YUY2".charCodeAt(2)<<16)+("YUY2".charCodeAt(3)<<24)]="YUY2",a[a.D3DFMT_G8R8_G8B8="GRGB".charCodeAt(0)+("GRGB".charCodeAt(1)<<8)+("GRGB".charCodeAt(2)<<16)+("GRGB".charCodeAt(3)<<24)]="D3DFMT_G8R8_G8B8",a[a.DXT1="DXT1".charCodeAt(0)+("DXT1".charCodeAt(1)<<8)+("DXT1".charCodeAt(2)<<16)+("DXT1".charCodeAt(3)<<24)]="DXT1",a[a.DXT2="DXT2".charCodeAt(0)+("DXT2".charCodeAt(1)<<8)+("DXT2".charCodeAt(2)<<16)+("DXT2".charCodeAt(3)<<24)]="DXT2",a[a.DXT3="DXT3".charCodeAt(0)+("DXT3".charCodeAt(1)<<8)+("DXT3".charCodeAt(2)<<16)+("DXT3".charCodeAt(3)<<24)]="DXT3",a[a.DXT4="DXT4".charCodeAt(0)+("DXT4".charCodeAt(1)<<8)+("DXT4".charCodeAt(2)<<16)+("DXT4".charCodeAt(3)<<24)]="DXT4",a[a.DXT5="DXT5".charCodeAt(0)+("DXT5".charCodeAt(1)<<8)+("DXT5".charCodeAt(2)<<16)+("DXT5".charCodeAt(3)<<24)]="DXT5",a[a.ATI1="ATI1".charCodeAt(0)+("ATI1".charCodeAt(1)<<8)+("ATI1".charCodeAt(2)<<16)+("ATI1".charCodeAt(3)<<24)]="ATI1",a[a.AT1N="AT1N".charCodeAt(0)+("AT1N".charCodeAt(1)<<8)+("AT1N".charCodeAt(2)<<16)+("AT1N".charCodeAt(3)<<24)]="AT1N",a[a.ATI2="ATI2".charCodeAt(0)+("ATI2".charCodeAt(1)<<8)+("ATI2".charCodeAt(2)<<16)+("ATI2".charCodeAt(3)<<24)]="ATI2",a[a.AT2N="AT2N".charCodeAt(0)+("AT2N".charCodeAt(1)<<8)+("AT2N".charCodeAt(2)<<16)+("AT2N".charCodeAt(3)<<24)]="AT2N",a[a.BC4U="BC4U".charCodeAt(0)+("BC4U".charCodeAt(1)<<8)+("BC4U".charCodeAt(2)<<16)+("BC4U".charCodeAt(3)<<24)]="BC4U",a[a.BC4S="BC4S".charCodeAt(0)+("BC4S".charCodeAt(1)<<8)+("BC4S".charCodeAt(2)<<16)+("BC4S".charCodeAt(3)<<24)]="BC4S",a[a.BC5U="BC5U".charCodeAt(0)+("BC5U".charCodeAt(1)<<8)+("BC5U".charCodeAt(2)<<16)+("BC5U".charCodeAt(3)<<24)]="BC5U",a[a.BC5S="BC5S".charCodeAt(0)+("BC5S".charCodeAt(1)<<8)+("BC5S".charCodeAt(2)<<16)+("BC5S".charCodeAt(3)<<24)]="BC5S",a[a.DX10="DX10".charCodeAt(0)+("DX10".charCodeAt(1)<<8)+("DX10".charCodeAt(2)<<16)+("DX10".charCodeAt(3)<<24)]="DX10",a))(bt||{});var n_=(a=>(a[a.RGBA8_SNORM=36759]="RGBA8_SNORM",a[a.RGBA=6408]="RGBA",a[a.RGBA8UI=36220]="RGBA8UI",a[a.SRGB8_ALPHA8=35907]="SRGB8_ALPHA8",a[a.RGBA8I=36238]="RGBA8I",a[a.RGBA8=32856]="RGBA8",a[a.COMPRESSED_RGB_S3TC_DXT1_EXT=33776]="COMPRESSED_RGB_S3TC_DXT1_EXT",a[a.COMPRESSED_RGBA_S3TC_DXT1_EXT=33777]="COMPRESSED_RGBA_S3TC_DXT1_EXT",a[a.COMPRESSED_RGBA_S3TC_DXT3_EXT=33778]="COMPRESSED_RGBA_S3TC_DXT3_EXT",a[a.COMPRESSED_RGBA_S3TC_DXT5_EXT=33779]="COMPRESSED_RGBA_S3TC_DXT5_EXT",a[a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT=35917]="COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT",a[a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT=35918]="COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT",a[a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT=35919]="COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT",a[a.COMPRESSED_SRGB_S3TC_DXT1_EXT=35916]="COMPRESSED_SRGB_S3TC_DXT1_EXT",a[a.COMPRESSED_RED_RGTC1_EXT=36283]="COMPRESSED_RED_RGTC1_EXT",a[a.COMPRESSED_SIGNED_RED_RGTC1_EXT=36284]="COMPRESSED_SIGNED_RED_RGTC1_EXT",a[a.COMPRESSED_RED_GREEN_RGTC2_EXT=36285]="COMPRESSED_RED_GREEN_RGTC2_EXT",a[a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT=36286]="COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT",a[a.COMPRESSED_R11_EAC=37488]="COMPRESSED_R11_EAC",a[a.COMPRESSED_SIGNED_R11_EAC=37489]="COMPRESSED_SIGNED_R11_EAC",a[a.COMPRESSED_RG11_EAC=37490]="COMPRESSED_RG11_EAC",a[a.COMPRESSED_SIGNED_RG11_EAC=37491]="COMPRESSED_SIGNED_RG11_EAC",a[a.COMPRESSED_RGB8_ETC2=37492]="COMPRESSED_RGB8_ETC2",a[a.COMPRESSED_RGBA8_ETC2_EAC=37496]="COMPRESSED_RGBA8_ETC2_EAC",a[a.COMPRESSED_SRGB8_ETC2=37493]="COMPRESSED_SRGB8_ETC2",a[a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC=37497]="COMPRESSED_SRGB8_ALPHA8_ETC2_EAC",a[a.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2=37494]="COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2",a[a.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2=37495]="COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2",a[a.COMPRESSED_RGBA_ASTC_4x4_KHR=37808]="COMPRESSED_RGBA_ASTC_4x4_KHR",a[a.COMPRESSED_RGBA_ASTC_5x4_KHR=37809]="COMPRESSED_RGBA_ASTC_5x4_KHR",a[a.COMPRESSED_RGBA_ASTC_5x5_KHR=37810]="COMPRESSED_RGBA_ASTC_5x5_KHR",a[a.COMPRESSED_RGBA_ASTC_6x5_KHR=37811]="COMPRESSED_RGBA_ASTC_6x5_KHR",a[a.COMPRESSED_RGBA_ASTC_6x6_KHR=37812]="COMPRESSED_RGBA_ASTC_6x6_KHR",a[a.COMPRESSED_RGBA_ASTC_8x5_KHR=37813]="COMPRESSED_RGBA_ASTC_8x5_KHR",a[a.COMPRESSED_RGBA_ASTC_8x6_KHR=37814]="COMPRESSED_RGBA_ASTC_8x6_KHR",a[a.COMPRESSED_RGBA_ASTC_8x8_KHR=37815]="COMPRESSED_RGBA_ASTC_8x8_KHR",a[a.COMPRESSED_RGBA_ASTC_10x5_KHR=37816]="COMPRESSED_RGBA_ASTC_10x5_KHR",a[a.COMPRESSED_RGBA_ASTC_10x6_KHR=37817]="COMPRESSED_RGBA_ASTC_10x6_KHR",a[a.COMPRESSED_RGBA_ASTC_10x8_KHR=37818]="COMPRESSED_RGBA_ASTC_10x8_KHR",a[a.COMPRESSED_RGBA_ASTC_10x10_KHR=37819]="COMPRESSED_RGBA_ASTC_10x10_KHR",a[a.COMPRESSED_RGBA_ASTC_12x10_KHR=37820]="COMPRESSED_RGBA_ASTC_12x10_KHR",a[a.COMPRESSED_RGBA_ASTC_12x12_KHR=37821]="COMPRESSED_RGBA_ASTC_12x12_KHR",a[a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR=37840]="COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR",a[a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR=37841]="COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR",a[a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR=37842]="COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR",a[a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR=37843]="COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR",a[a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR=37844]="COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR",a[a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR=37845]="COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR",a[a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR=37846]="COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR",a[a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR=37847]="COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR",a[a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR=37848]="COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR",a[a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR=37849]="COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR",a[a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR=37850]="COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR",a[a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR=37851]="COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR",a[a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR=37852]="COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR",a[a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR=37853]="COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR",a[a.COMPRESSED_RGBA_BPTC_UNORM_EXT=36492]="COMPRESSED_RGBA_BPTC_UNORM_EXT",a[a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT=36493]="COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT",a[a.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT=36494]="COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT",a[a.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT=36495]="COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT",a))(n_||{});var o_=(a=>(a[a.RGBA=6408]="RGBA",a[a.RGB=6407]="RGB",a[a.RG=33319]="RG",a[a.RED=6403]="RED",a[a.RGBA_INTEGER=36249]="RGBA_INTEGER",a[a.RGB_INTEGER=36248]="RGB_INTEGER",a[a.RG_INTEGER=33320]="RG_INTEGER",a[a.RED_INTEGER=36244]="RED_INTEGER",a[a.ALPHA=6406]="ALPHA",a[a.LUMINANCE=6409]="LUMINANCE",a[a.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",a[a.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",a[a.DEPTH_STENCIL=34041]="DEPTH_STENCIL",a))(o_||{});var c_=(a=>(a[a.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",a[a.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",a[a.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",a[a.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",a[a.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",a[a.UNSIGNED_INT=5125]="UNSIGNED_INT",a[a.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",a[a.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",a[a.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",a[a.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",a[a.BYTE=5120]="BYTE",a[a.SHORT=5122]="SHORT",a[a.INT=5124]="INT",a[a.FLOAT=5126]="FLOAT",a[a.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",a[a.HALF_FLOAT=36193]="HALF_FLOAT",a))(c_||{});var Ti=null;var Rn=class{constructor(){if(!Ti){Ti=URL.createObjectURL(new Blob(["(function(){\"use strict\";const s={rgb8unorm:{convertedFormat:\"rgba8unorm\",convertFunction:i},\"rgb8unorm-srgb\":{convertedFormat:\"rgba8unorm-srgb\",convertFunction:i}};function f(r){const t=r.format;if(s[t]){const n=s[t].convertFunction,o=r.resource;for(let e=0;e<o.length;e++)o[e]=n(o[e]);r.format=s[t].convertedFormat}}function i(r){const t=r.byteLength/3,n=new Uint32Array(t);for(let o=0;o<t;++o)n[o]=r[o*3]+(r[o*3+1]<<8)+(r[o*3+2]<<16)+4278190080;return new Uint8Array(n.buffer)}function d(r){const t=[];for(let n=0;n<r.numLevels;n++){const o=r.getImageData(n,0,0),e=new Uint8Array(o.byteLength);e.set(o),t.push(e)}return t}const w={6408:\"rgba8unorm\",32856:\"bgra8unorm\",32857:\"rgb10a2unorm\",33189:\"depth16unorm\",33190:\"depth24plus\",33321:\"r8unorm\",33323:\"rg8unorm\",33325:\"r16float\",33326:\"r32float\",33327:\"rg16float\",33328:\"rg32float\",33329:\"r8sint\",33330:\"r8uint\",33331:\"r16sint\",33332:\"r16uint\",33333:\"r32sint\",33334:\"r32uint\",33335:\"rg8sint\",33336:\"rg8uint\",33337:\"rg16sint\",33338:\"rg16uint\",33339:\"rg32sint\",33340:\"rg32uint\",33778:\"bc2-rgba-unorm\",33779:\"bc3-rgba-unorm\",34836:\"rgba32float\",34842:\"rgba16float\",35056:\"depth24plus-stencil8\",35898:\"rg11b10ufloat\",35901:\"rgb9e5ufloat\",35907:\"rgba8unorm-srgb\",36012:\"depth32float\",36013:\"depth32float-stencil8\",36168:\"stencil8\",36208:\"rgba32uint\",36214:\"rgba16uint\",36220:\"rgba8uint\",36226:\"rgba32sint\",36232:\"rgba16sint\",36238:\"rgba8sint\",36492:\"bc7-rgba-unorm\",36756:\"r8snorm\",36757:\"rg8snorm\",36759:\"rgba8snorm\",37496:\"etc2-rgba8unorm\",37808:\"astc-4x4-unorm\"};function p(r){const t=w[r];if(t)return t;throw new Error(`Unsupported glInternalFormat: ${r}`)}const h={23:\"rgb8unorm\",37:\"rgba8unorm\",43:\"rgba8unorm-srgb\"};function F(r){const t=h[r];if(t)return t;throw new Error(`Unsupported VkFormat: ${r}`)}function U(r){return r.classId===2?F(r.vkFormat):p(r.glInternalformat)}const T={\"bc3-rgba-unorm\":\"BC3_RGBA\",\"bc7-rgba-unorm\":\"BC7_M5_RGBA\",\"etc2-rgba8unorm\":\"ETC2_RGBA\",\"astc-4x4-unorm\":\"ASTC_4x4_RGBA\",rgba8unorm:\"RGBA32\",rg11b10ufloat:\"R11F_G11F_B10F\"};function y(r){const t=T[r];if(t)return t;throw new Error(`Unsupported transcoderFormat: ${r}`)}const a={jsUrl:\"\",wasmUrl:\"\"};let l,u,c;async function g(){if(!c){const r=new URL(a.jsUrl,location.origin).href,t=new URL(a.wasmUrl,location.origin).href;importScripts(r),c=new Promise(n=>{LIBKTX({locateFile:o=>t}).then(o=>{n(o)})})}return c}async function v(r,t){const n=await fetch(r);if(n.ok){const o=await n.arrayBuffer();return new t.ktxTexture(new Uint8Array(o))}throw new Error(`Failed to load KTX(2) texture: ${r}`)}const x=[\"bc7-rgba-unorm\",\"astc-4x4-unorm\",\"etc2-rgba8unorm\",\"bc3-rgba-unorm\",\"rgba8unorm\"];async function B(r){const t=await g(),n=await v(r,t);let o;if(n.needsTranscoding){o=u;const R=t.TranscodeTarget[l];if(n.transcodeBasis(R,0)!==t.ErrorCode.SUCCESS)throw new Error(\"Unable to transcode basis texture.\")}else o=U(n);const e=d(n),b={width:n.baseWidth,height:n.baseHeight,format:o,mipLevelCount:n.numLevels,resource:e,alphaMode:\"no-premultiply-alpha\"};return f(b),b}async function A(r,t,n){r&&(a.jsUrl=r),t&&(a.wasmUrl=t),u=x.filter(o=>n.includes(o))[0],l=y(u),await g()}const m={init:async r=>{const{jsUrl:t,wasmUrl:n,supportedTextures:o}=r;await A(t,n,o)},load:async r=>{var t;try{const n=await B(r.url);return{type:\"load\",url:r.url,success:!0,textureOptions:n,transferables:(t=n.resource)==null?void 0:t.map(o=>o.buffer)}}catch(n){throw n}}};self.onmessage=async r=>{var t;const n=r.data,o=await((t=m[n.type])==null?void 0:t.call(m,n));o&&self.postMessage(o,o.transferables)}})();\n"],{type:"application/javascript"}))}
this.worker=new Worker(Ti)}};Rn.revokeObjectURL=function(){if(Ti){URL.revokeObjectURL(Ti);Ti=null}};var P_=new Ze();var wh=class{cull(a,e,t=!0){this._cullRecursive(a,e,t)}
_cullRecursive(a,e,t=!0){var i;if(a.cullable&&a.measurable&&a.includeInBuild){let s=(i=a.cullArea)!=null?i:Co(a,t,P_);a.culled=s.x>=e.x+e.width||s.y>=e.y+e.height||s.x+s.width<=e.x||s.y+s.height<=e.y}else{a.culled=!1}
if(!(!a.cullableChildren||a.culled||!a.renderable||!a.measurable||!a.includeInBuild)){for(let s=0;s<a.children.length;s++){this._cullRecursive(a.children[s],e,t)}}}};wh.shared=new wh();var Ah=class{static init(){this._renderRef=this.render.bind(this);this.render=()=>{wh.shared.cull(this.stage,this.renderer.screen);this.renderer.render({container:this.stage})}}
static destroy(){this.render=this._renderRef}};Ah.extension={priority:10,type:I.Application,name:"culler"};var M_=Object.defineProperty;var Mn=Object.getOwnPropertySymbols;var X2=Object.prototype.hasOwnProperty;var H2=Object.prototype.propertyIsEnumerable;var Fb=(a,e,t)=>e in a?M_(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var hd=(a,e)=>{for(var t in e||(e={}))if(X2.call(e,t)){Fb(a,t,e[t])}
if(Mn){for(var t of Mn(e))if(H2.call(e,t)){Fb(a,t,e[t])}}
return a};var C_=(a,e)=>{var t={};for(var i in a)if(X2.call(a,i)&&e.indexOf(i)<0){t[i]=a[i]}
if(a!=null&&Mn){for(var i of Mn(a))if(e.indexOf(i)<0&&H2.call(a,i)){t[i]=a[i]}}
return t};var z2=class Eh extends ht{constructor(e){e=hd(hd({},Eh.defaultOptions),e);super(e);this.enabled=!0;this._state=Qd.for2d();this.blendMode=e.blendMode;this.padding=e.padding;if(typeof e.antialias=="boolean"){this.antialias=e.antialias?"on":"off"}else{this.antialias=e.antialias}
this.resolution=e.resolution;this.blendRequired=e.blendRequired;this.clipToViewport=e.clipToViewport;this.addResource("uTexture",0,1)}
apply(e,t,i,s){e.applyFilter(this,t,i,s)}
get blendMode(){return this._state.blendMode}
set blendMode(e){this._state.blendMode=e}
static from(e){let{gpu:i,gl:s}=e;let r=C_(e,["gpu","gl"]);let n;let d;if(i){n=Zt.from(i)}
if(s){d=kp.from(s)}
return new Eh(hd({gpuProgram:n,glProgram:d},r))}};z2.defaultOptions={blendMode:"normal",resolution:1,padding:0,antialias:"off",blendRequired:!1,clipToViewport:!0};var I_=Object.defineProperty;var G_=Object.defineProperties;var B_=Object.getOwnPropertyDescriptors;var Cn=Object.getOwnPropertySymbols;var W2=Object.prototype.hasOwnProperty;var Y2=Object.prototype.propertyIsEnumerable;var kb=(a,e,t)=>e in a?I_(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var ld=(a,e)=>{for(var t in e||(e={}))if(W2.call(e,t)){kb(a,t,e[t])}
if(Cn){for(var t of Cn(e))if(Y2.call(e,t)){kb(a,t,e[t])}}
return a};var D_=(a,e)=>{var t={};for(var i in a)if(W2.call(a,i)&&e.indexOf(i)<0){t[i]=a[i]}
if(a!=null&&Cn){for(var i of Cn(a))if(e.indexOf(i)<0&&Y2.call(a,i)){t[i]=a[i]}}
return t};var k_=class $2 extends z2{constructor(e){e=ld(ld({},$2.defaultOptions),e);let t=Zt.from({vertex:{source:`struct GlobalFilterUniforms {
uInputSize:vec4<f32>,
uInputPixel:vec4<f32>,
uInputClamp:vec4<f32>,
uOutputFrame:vec4<f32>,
uGlobalFrame:vec4<f32>,
uOutputTexture:vec4<f32>,
};

struct AlphaUniforms {
uAlpha:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> alphaUniforms : AlphaUniforms;

struct VSOutput {
@builtin(position) position: vec4<f32>,
@location(0) uv : vec2<f32>
};

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
return gfu.uGlobalFrame.zw;
}

@vertex
fn mainVertex(
@location(0) aPosition : vec2<f32>, 
) -> VSOutput {
return VSOutput(
filterVertexPosition(aPosition),
filterTextureCoord(aPosition)
);
}

@fragment
fn mainFragment(
@location(0) uv: vec2<f32>,
@builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {

var sample = textureSample(uTexture, uSampler, uv);

return sample * alphaUniforms.uAlpha;
}`,entryPoint:"mainVertex"},fragment:{source:`struct GlobalFilterUniforms {
uInputSize:vec4<f32>,
uInputPixel:vec4<f32>,
uInputClamp:vec4<f32>,
uOutputFrame:vec4<f32>,
uGlobalFrame:vec4<f32>,
uOutputTexture:vec4<f32>,
};

struct AlphaUniforms {
uAlpha:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> alphaUniforms : AlphaUniforms;

struct VSOutput {
@builtin(position) position: vec4<f32>,
@location(0) uv : vec2<f32>
};

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
return gfu.uGlobalFrame.zw;
}

@vertex
fn mainVertex(
@location(0) aPosition : vec2<f32>, 
) -> VSOutput {
return VSOutput(
filterVertexPosition(aPosition),
filterTextureCoord(aPosition)
);
}

@fragment
fn mainFragment(
@location(0) uv: vec2<f32>,
@builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {

var sample = textureSample(uTexture, uSampler, uv);

return sample * alphaUniforms.uAlpha;
}`,entryPoint:"mainFragment"}});let i=kp.from({vertex:`in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;

position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
gl_Position = filterVertexPosition();
vTextureCoord = filterTextureCoord();
}
`,fragment:`
in vec2 vTextureCoord;

out vec4 finalColor;

uniform float uAlpha;
uniform sampler2D uTexture;

void main()
{
finalColor =  texture(uTexture, vTextureCoord) * uAlpha;
}
`,name:"alpha-filter"});let s=e;let{alpha:r}=s;let n=D_(s,["alpha"]);let d=new jp({uAlpha:{value:r,type:"f32"}});super(G_(ld({},n),B_({gpuProgram:t,glProgram:i,resources:{alphaUniforms:d}})))}
get alpha(){return this.resources.alphaUniforms.uniforms.uAlpha}
set alpha(e){this.resources.alphaUniforms.uniforms.uAlpha=e}};k_.defaultOptions={alpha:1};var K2={5:[.153388,.221461,.250301],7:[.071303,.131514,.189879,.214607],9:[.028532,.067234,.124009,.179044,.20236],11:[.0093,.028002,.065984,.121703,.175713,.198596],13:[.002406,.009255,.027867,.065666,.121117,.174868,.197641],15:[489e-6,.002403,.009246,.02784,.065602,.120999,.174697,.197448]};var U_=["in vec2 vBlurTexCoords[%size%];","uniform sampler2D uTexture;","out vec4 finalColor;","void main(void)","{","    finalColor = vec4(0.0);","    %blur%","}"].join(`
`);function L_(a){let e=K2[a];let t=e.length;let i=U_;let s="";let n;for(let d=0;d<a;d++){let h="finalColor += texture(uTexture, vBlurTexCoords[%index%]) * %value%;".replace("%index%",d.toString());n=d;if(d>=t){n=a-d-1}
h=h.replace("%value%",e[n].toString());s+=h;s+=`
`}
i=i.replace("%blur%",s);i=i.replace("%size%",a.toString());return i}
function j_(a,e){let t=Math.ceil(a/2);let i=`
in vec2 aPosition;

uniform float uStrength;

out vec2 vBlurTexCoords[%size%];

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;

position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
gl_Position = filterVertexPosition();

float pixelStrength = uInputSize.%dimension% * uStrength;

vec2 textureCoord = filterTextureCoord();
%blur%
}`;let s="";let r;if(e){r="vBlurTexCoords[%index%] =  textureCoord + vec2(%sampleIndex% * pixelStrength, 0.0);"}else{r="vBlurTexCoords[%index%] =  textureCoord + vec2(0.0, %sampleIndex% * pixelStrength);"}
for(let n=0;n<a;n++){let d=r.replace("%index%",n.toString());d=d.replace("%sampleIndex%",`${n - (t - 1)}.0`);s+=d;s+=`
`}
i=i.replace("%blur%",s);i=i.replace("%size%",a.toString());i=i.replace("%dimension%",e?"z":"w");return i}
function X_(a,e){let t=j_(e,a);let i=L_(e);return kp.from({vertex:t,fragment:i,name:`blur-${a ? "horizontal" : "vertical"}-pass-filter`})}
function z_(a,e){let t=K2[e];let i=t.length;let s=[];let r=[];let n=[];for(let p=0;p<e;p++){s[p]=`@location(${p}) offset${p}: vec2<f32>,`;if(a){r[p]=`filteredCord + vec2(${p - i + 1} * pixelStrength, 0.0),`}else{r[p]=`filteredCord + vec2(0.0, ${p - i + 1} * pixelStrength),`}
let _=p<i?p:e-p-1;let m=t[_].toString();n[p]=`finalColor += textureSample(uTexture, uSampler, offset${p}) * ${m};`}
let d=s.join(`
`);let h=r.join(`
`);let l=n.join(`
`);let f=`

struct GlobalFilterUniforms {
uInputSize:vec4<f32>,
uInputPixel:vec4<f32>,
uInputClamp:vec4<f32>,
uOutputFrame:vec4<f32>,
uGlobalFrame:vec4<f32>,
uOutputTexture:vec4<f32>,
};

struct BlurUniforms {
uStrength:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> blurUniforms : BlurUniforms;


struct VSOutput {
@builtin(position) position: vec4<f32>,
%blur-struct%
};

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
return gfu.uGlobalFrame.zw;
}


@vertex
fn mainVertex(
@location(0) aPosition : vec2<f32>, 
) -> VSOutput {

let filteredCord = filterTextureCoord(aPosition);

let pixelStrength = gfu.uInputSize.%dimension% * blurUniforms.uStrength;

return VSOutput(
filterVertexPosition(aPosition),
%blur-vertex-out%
);
}

@fragment
fn mainFragment(
@builtin(position) position: vec4<f32>,
%blur-fragment-in%
) -> @location(0) vec4<f32> {

var   finalColor = vec4(0.0);

%blur-sampling%

return finalColor;
}`.replace("%blur-struct%",d).replace("%blur-vertex-out%",h).replace("%blur-fragment-in%",d).replace("%blur-sampling%",l).replace("%dimension%",a?"z":"w");return Zt.from({vertex:{source:f,entryPoint:"mainVertex"},fragment:{source:f,entryPoint:"mainFragment"}})}
var V_=Object.defineProperty;var Ub=Object.getOwnPropertySymbols;var W_=Object.prototype.hasOwnProperty;var Y_=Object.prototype.propertyIsEnumerable;var Lb=(a,e,t)=>e in a?V_(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var ud=(a,e)=>{for(var t in e||(e={}))if(W_.call(e,t)){Lb(a,t,e[t])}
if(Ub){for(var t of Ub(e))if(Y_.call(e,t)){Lb(a,t,e[t])}}
return a};var q2=class Z2 extends z2{constructor(e){e=ud(ud({},Z2.defaultOptions),e);let t=X_(e.horizontal,e.kernelSize);let i=z_(e.horizontal,e.kernelSize);super(ud({glProgram:t,gpuProgram:i,resources:{blurUniforms:{uStrength:{value:0,type:"f32"}}}},e));this.horizontal=e.horizontal;this._quality=0;this.quality=e.quality;this.blur=e.strength;this._uniforms=this.resources.blurUniforms.uniforms}
apply(e,t,i,s){this._uniforms.uStrength=this.strength/this.passes;if(this.passes===1){e.applyFilter(this,t,i,s)}else{let r=Ve.getSameSizeTexture(t);let n=t;let d=r;this._state.blend=!1;let h=e.renderer.type===yt.WEBGPU;for(let l=0;l<this.passes-1;l++){e.applyFilter(this,n,d,l===0?!0:h);let f=d;d=n;n=f}
this._state.blend=!0;e.applyFilter(this,n,i,s);Ve.returnTexture(r)}}
get blur(){return this.strength}
set blur(e){this.padding=1+Math.abs(e)*2;this.strength=e}
get quality(){return this._quality}
set quality(e){this._quality=e;this.passes=e}};q2.defaultOptions={strength:8,quality:4,kernelSize:5};var $_=Object.defineProperty;var K_=Object.defineProperties;var q_=Object.getOwnPropertyDescriptors;var On=Object.getOwnPropertySymbols;var Q2=Object.prototype.hasOwnProperty;var J2=Object.prototype.propertyIsEnumerable;var Nb=(a,e,t)=>e in a?$_(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var hs=(a,e)=>{for(var t in e||(e={}))if(Q2.call(e,t)){Nb(a,t,e[t])}
if(On){for(var t of On(e))if(J2.call(e,t)){Nb(a,t,e[t])}}
return a};var Q_=(a,e)=>{var t={};for(var i in a)if(Q2.call(a,i)&&e.indexOf(i)<0){t[i]=a[i]}
if(a!=null&&On){for(var i of On(a))if(e.indexOf(i)<0&&J2.call(a,i)){t[i]=a[i]}}
return t};var Ph=class extends z2{constructor(...e){var t;let i=(t=e[0])!=null?t:{};if(typeof i=="number"){i={strength:i};if(e[1]!==undefined){i.quality=e[1]}
if(e[2]!==undefined){i.resolution=e[2]||"inherit"}
if(e[3]!==undefined){i.kernelSize=e[3]}}
i=hs(hs({},q2.defaultOptions),i);let s=i;let{strength:r,strengthX:n,strengthY:d,quality:h}=s;let l=Q_(s,["strength","strengthX","strengthY","quality"]);super(K_(hs({},l),q_({compatibleRenderers:yt.BOTH,resources:{}})));this._repeatEdgePixels=!1;this.blurXFilter=new q2(hs({horizontal:!0},i));this.blurYFilter=new q2(hs({horizontal:!1},i));this.quality=h;this.strengthX=n??r;this.strengthY=d??r;this.repeatEdgePixels=!1}
apply(e,t,i,s){let r=Math.abs(this.blurXFilter.strength);let n=Math.abs(this.blurYFilter.strength);if(r&&n){let d=Ve.getSameSizeTexture(t);this.blurXFilter.blendMode="normal";this.blurXFilter.apply(e,t,d,!0);this.blurYFilter.blendMode=this.blendMode;this.blurYFilter.apply(e,d,i,s);Ve.returnTexture(d)}else if(n){this.blurYFilter.blendMode=this.blendMode;this.blurYFilter.apply(e,t,i,s)}else{this.blurXFilter.blendMode=this.blendMode;this.blurXFilter.apply(e,t,i,s)}}
updatePadding(){if(this._repeatEdgePixels){this.padding=0}else{this.padding=Math.max(Math.abs(this.blurXFilter.blur),Math.abs(this.blurYFilter.blur))*2}}
get strength(){if(this.strengthX!==this.strengthY){throw new Error("BlurFilter's strengthX and strengthY are different")}
return this.strengthX}
set strength(e){this.blurXFilter.blur=this.blurYFilter.blur=e;this.updatePadding()}
get quality(){return this.blurXFilter.quality}
set quality(e){this.blurXFilter.quality=this.blurYFilter.quality=e}
get strengthX(){return this.blurXFilter.blur}
set strengthX(e){this.blurXFilter.blur=e;this.updatePadding()}
get strengthY(){return this.blurYFilter.blur}
set strengthY(e){this.blurYFilter.blur=e;this.updatePadding()}
get blur(){return this.strength}
set blur(e){this.strength=e}
get blurX(){return this.strengthX}
set blurX(e){this.strengthX=e}
get blurY(){return this.strengthY}
set blurY(e){this.strengthY=e}
get repeatEdgePixels(){return this._repeatEdgePixels}
set repeatEdgePixels(e){this._repeatEdgePixels=e;this.updatePadding()}};Ph.defaultOptions={strength:8,quality:4,kernelSize:5};var ey=Object.defineProperty;var ty=Object.defineProperties;var ay=Object.getOwnPropertyDescriptors;var In=Object.getOwnPropertySymbols;var e3=Object.prototype.hasOwnProperty;var t3=Object.prototype.propertyIsEnumerable;var Xb=(a,e,t)=>e in a?ey(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var bd=(a,e)=>{for(var t in e||(e={}))if(e3.call(e,t)){Xb(a,t,e[t])}
if(In){for(var t of In(e))if(t3.call(e,t)){Xb(a,t,e[t])}}
return a};var sy=(a,e)=>{var t={};for(var i in a)if(e3.call(a,i)&&e.indexOf(i)<0){t[i]=a[i]}
if(a!=null&&In){for(var i of In(a))if(e.indexOf(i)<0&&t3.call(a,i)){t[i]=a[i]}}
return t};var ry=class a3 extends z2{constructor(e={}){e=bd(bd({},a3.defaultOptions),e);let t=Zt.from({vertex:{source:`

struct GlobalFilterUniforms {
uInputSize:vec4<f32>,
uInputPixel:vec4<f32>,
uInputClamp:vec4<f32>,
uOutputFrame:vec4<f32>,
uGlobalFrame:vec4<f32>,
uOutputTexture:vec4<f32>,
};

struct NoiseUniforms {
uNoise:f32,
uSeed:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> noiseUniforms : NoiseUniforms;

struct VSOutput {
@builtin(position) position: vec4<f32>,
@location(0) uv : vec2<f32>
};

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
return gfu.uGlobalFrame.zw;
}

@vertex
fn mainVertex(
@location(0) aPosition : vec2<f32>, 
) -> VSOutput {
return VSOutput(
filterVertexPosition(aPosition),
filterTextureCoord(aPosition)
);
}

fn rand(co:vec2<f32>) -> f32
{
return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}



@fragment
fn mainFragment(
@location(0) uv: vec2<f32>,
@builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {

var pixelPosition =  globalTextureCoord(position.xy);// / (getSize());//-  gfu.uOutputFrame.xy);


var sample = textureSample(uTexture, uSampler, uv);
var randomValue =  rand(pixelPosition.xy * noiseUniforms.uSeed);
var diff = (randomValue - 0.5) * noiseUniforms.uNoise;

// Un-premultiply alpha before applying the color matrix. See issue #3539.
if (sample.a > 0.0) {
sample.r /= sample.a;
sample.g /= sample.a;
sample.b /= sample.a;
}

sample.r += diff;
sample.g += diff;
sample.b += diff;

// Premultiply alpha again.
sample.r *= sample.a;
sample.g *= sample.a;
sample.b *= sample.a;

return sample;
}`,entryPoint:"mainVertex"},fragment:{source:`

struct GlobalFilterUniforms {
uInputSize:vec4<f32>,
uInputPixel:vec4<f32>,
uInputClamp:vec4<f32>,
uOutputFrame:vec4<f32>,
uGlobalFrame:vec4<f32>,
uOutputTexture:vec4<f32>,
};

struct NoiseUniforms {
uNoise:f32,
uSeed:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> noiseUniforms : NoiseUniforms;

struct VSOutput {
@builtin(position) position: vec4<f32>,
@location(0) uv : vec2<f32>
};

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);  
}

fn getSize() -> vec2<f32>
{
return gfu.uGlobalFrame.zw;
}

@vertex
fn mainVertex(
@location(0) aPosition : vec2<f32>, 
) -> VSOutput {
return VSOutput(
filterVertexPosition(aPosition),
filterTextureCoord(aPosition)
);
}

fn rand(co:vec2<f32>) -> f32
{
return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}



@fragment
fn mainFragment(
@location(0) uv: vec2<f32>,
@builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {

var pixelPosition =  globalTextureCoord(position.xy);// / (getSize());//-  gfu.uOutputFrame.xy);


var sample = textureSample(uTexture, uSampler, uv);
var randomValue =  rand(pixelPosition.xy * noiseUniforms.uSeed);
var diff = (randomValue - 0.5) * noiseUniforms.uNoise;

// Un-premultiply alpha before applying the color matrix. See issue #3539.
if (sample.a > 0.0) {
sample.r /= sample.a;
sample.g /= sample.a;
sample.b /= sample.a;
}

sample.r += diff;
sample.g += diff;
sample.b += diff;

// Premultiply alpha again.
sample.r *= sample.a;
sample.g *= sample.a;
sample.b *= sample.a;

return sample;
}`,entryPoint:"mainFragment"}});let i=kp.from({vertex:`in vec2 aPosition;
out vec2 vTextureCoord;

uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;

vec4 filterVertexPosition( void )
{
vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;

position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord( void )
{
return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

void main(void)
{
gl_Position = filterVertexPosition();
vTextureCoord = filterTextureCoord();
}
`,fragment:`
in vec2 vTextureCoord;
in vec4 vColor;

out vec4 finalColor;

uniform float uNoise;
uniform float uSeed;
uniform sampler2D uTexture;

float rand(vec2 co)
{
return fract(sin(dot(co.xy, vec2(12.9898, 78.233))) * 43758.5453);
}

void main()
{
vec4 color = texture(uTexture, vTextureCoord);
float randomValue = rand(gl_FragCoord.xy * uSeed);
float diff = (randomValue - 0.5) *  uNoise;

// Un-premultiply alpha before applying the color matrix. See issue #3539.
if (color.a > 0.0) {
color.rgb /= color.a;
}

color.r += diff;
color.g += diff;
color.b += diff;

// Premultiply alpha again.
color.rgb *= color.a;

finalColor = color;
}
`,name:"noise-filter"});let s=e;let{noise:r,seed:n}=s;let d=sy(s,["noise","seed"]);super(ty(bd({},d),ay({gpuProgram:t,glProgram:i,resources:{noiseUniforms:new jp({uNoise:{value:1,type:"f32"},uSeed:{value:1,type:"f32"}})}})));this.noise=r;this.seed=n??Math.random()}
get noise(){return this.resources.noiseUniforms.uniforms.uNoise}
set noise(e){this.resources.noiseUniforms.uniforms.uNoise=e}
get seed(){return this.resources.noiseUniforms.uniforms.uSeed}
set seed(e){this.resources.noiseUniforms.uniforms.uSeed=e}};ry.defaultOptions={noise:.5};var cy=Object.defineProperty;var dy=Object.defineProperties;var hy=Object.getOwnPropertyDescriptors;var Gn=Object.getOwnPropertySymbols;var i3=Object.prototype.hasOwnProperty;var s3=Object.prototype.propertyIsEnumerable;var zb=(a,e,t)=>e in a?cy(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var ly=(a,e)=>{for(var t in e||(e={}))if(i3.call(e,t)){zb(a,t,e[t])}
if(Gn){for(var t of Gn(e))if(s3.call(e,t)){zb(a,t,e[t])}}
return a};var fy=(a,e)=>{var t={};for(var i in a)if(i3.call(a,i)&&e.indexOf(i)<0){t[i]=a[i]}
if(a!=null&&Gn){for(var i of Gn(a))if(e.indexOf(i)<0&&s3.call(a,i)){t[i]=a[i]}}
return t};var Rh=class extends z2{constructor(e){let{sprite:i}=e;let s=fy(e,["sprite"]);let r=new jr(i.texture);let n=new jp({uFilterMatrix:{value:new ae(),type:"mat3x3<f32>"},uMaskClamp:{value:r.uClampFrame,type:"vec4<f32>"},uAlpha:{value:1,type:"f32"},uInverse:{value:e.inverse?1:0,type:"f32"}});let d=Zt.from({vertex:{source:`struct GlobalFilterUniforms {
uInputSize:vec4<f32>,
uInputPixel:vec4<f32>,
uInputClamp:vec4<f32>,
uOutputFrame:vec4<f32>,
uGlobalFrame:vec4<f32>,
uOutputTexture:vec4<f32>,
};

struct MaskUniforms {
uFilterMatrix:mat3x3<f32>,
uMaskClamp:vec4<f32>,
uAlpha:f32,
uInverse:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> filterUniforms : MaskUniforms;
@group(1) @binding(1) var uMaskTexture: texture_2d<f32>;

struct VSOutput {
@builtin(position) position: vec4<f32>,
@location(0) uv : vec2<f32>,
@location(1) filterUv : vec2<f32>,
};

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);
}

fn getFilterCoord(aPosition:vec2<f32> ) -> vec2<f32>
{
return ( filterUniforms.uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;
}

fn getSize() -> vec2<f32>
{
return gfu.uGlobalFrame.zw;
}

@vertex
fn mainVertex(
@location(0) aPosition : vec2<f32>,
) -> VSOutput {
return VSOutput(
filterVertexPosition(aPosition),
filterTextureCoord(aPosition),
getFilterCoord(aPosition)
);
}

@fragment
fn mainFragment(
@location(0) uv: vec2<f32>,
@location(1) filterUv: vec2<f32>,
@builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {

var maskClamp = filterUniforms.uMaskClamp;
var uAlpha = filterUniforms.uAlpha;

var clip = step(3.5,
step(maskClamp.x, filterUv.x) +
step(maskClamp.y, filterUv.y) +
step(filterUv.x, maskClamp.z) +
step(filterUv.y, maskClamp.w));

var mask = textureSample(uMaskTexture, uSampler, filterUv);
var source = textureSample(uTexture, uSampler, uv);
var alphaMul = 1.0 - uAlpha * (1.0 - mask.a);

var a: f32 = alphaMul * mask.r * uAlpha * clip;

if (filterUniforms.uInverse == 1.0) {
a = 1.0 - a;
}

return source * a;
}
`,entryPoint:"mainVertex"},fragment:{source:`struct GlobalFilterUniforms {
uInputSize:vec4<f32>,
uInputPixel:vec4<f32>,
uInputClamp:vec4<f32>,
uOutputFrame:vec4<f32>,
uGlobalFrame:vec4<f32>,
uOutputTexture:vec4<f32>,
};

struct MaskUniforms {
uFilterMatrix:mat3x3<f32>,
uMaskClamp:vec4<f32>,
uAlpha:f32,
uInverse:f32,
};

@group(0) @binding(0) var<uniform> gfu: GlobalFilterUniforms;
@group(0) @binding(1) var uTexture: texture_2d<f32>;
@group(0) @binding(2) var uSampler : sampler;

@group(1) @binding(0) var<uniform> filterUniforms : MaskUniforms;
@group(1) @binding(1) var uMaskTexture: texture_2d<f32>;

struct VSOutput {
@builtin(position) position: vec4<f32>,
@location(0) uv : vec2<f32>,
@location(1) filterUv : vec2<f32>,
};

fn filterVertexPosition(aPosition:vec2<f32>) -> vec4<f32>
{
var position = aPosition * gfu.uOutputFrame.zw + gfu.uOutputFrame.xy;

position.x = position.x * (2.0 / gfu.uOutputTexture.x) - 1.0;
position.y = position.y * (2.0*gfu.uOutputTexture.z / gfu.uOutputTexture.y) - gfu.uOutputTexture.z;

return vec4(position, 0.0, 1.0);
}

fn filterTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
return aPosition * (gfu.uOutputFrame.zw * gfu.uInputSize.zw);
}

fn globalTextureCoord( aPosition:vec2<f32> ) -> vec2<f32>
{
return  (aPosition.xy / gfu.uGlobalFrame.zw) + (gfu.uGlobalFrame.xy / gfu.uGlobalFrame.zw);
}

fn getFilterCoord(aPosition:vec2<f32> ) -> vec2<f32>
{
return ( filterUniforms.uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;
}

fn getSize() -> vec2<f32>
{
return gfu.uGlobalFrame.zw;
}

@vertex
fn mainVertex(
@location(0) aPosition : vec2<f32>,
) -> VSOutput {
return VSOutput(
filterVertexPosition(aPosition),
filterTextureCoord(aPosition),
getFilterCoord(aPosition)
);
}

@fragment
fn mainFragment(
@location(0) uv: vec2<f32>,
@location(1) filterUv: vec2<f32>,
@builtin(position) position: vec4<f32>
) -> @location(0) vec4<f32> {

var maskClamp = filterUniforms.uMaskClamp;
var uAlpha = filterUniforms.uAlpha;

var clip = step(3.5,
step(maskClamp.x, filterUv.x) +
step(maskClamp.y, filterUv.y) +
step(filterUv.x, maskClamp.z) +
step(filterUv.y, maskClamp.w));

var mask = textureSample(uMaskTexture, uSampler, filterUv);
var source = textureSample(uTexture, uSampler, uv);
var alphaMul = 1.0 - uAlpha * (1.0 - mask.a);

var a: f32 = alphaMul * mask.r * uAlpha * clip;

if (filterUniforms.uInverse == 1.0) {
a = 1.0 - a;
}

return source * a;
}
`,entryPoint:"mainFragment"}});let h=kp.from({vertex:`in vec2 aPosition;

out vec2 vTextureCoord;
out vec2 vMaskCoord;


uniform vec4 uInputSize;
uniform vec4 uOutputFrame;
uniform vec4 uOutputTexture;
uniform mat3 uFilterMatrix;

vec4 filterVertexPosition(  vec2 aPosition )
{
vec2 position = aPosition * uOutputFrame.zw + uOutputFrame.xy;

position.x = position.x * (2.0 / uOutputTexture.x) - 1.0;
position.y = position.y * (2.0*uOutputTexture.z / uOutputTexture.y) - uOutputTexture.z;

return vec4(position, 0.0, 1.0);
}

vec2 filterTextureCoord(  vec2 aPosition )
{
return aPosition * (uOutputFrame.zw * uInputSize.zw);
}

vec2 getFilterCoord( vec2 aPosition )
{
return  ( uFilterMatrix * vec3( filterTextureCoord(aPosition), 1.0)  ).xy;
}   

void main(void)
{
gl_Position = filterVertexPosition(aPosition);
vTextureCoord = filterTextureCoord(aPosition);
vMaskCoord = getFilterCoord(aPosition);
}
`,fragment:`in vec2 vMaskCoord;
in vec2 vTextureCoord;

uniform sampler2D uTexture;
uniform sampler2D uMaskTexture;

uniform float uAlpha;
uniform vec4 uMaskClamp;
uniform float uInverse;

out vec4 finalColor;

void main(void)
{
float clip = step(3.5,
step(uMaskClamp.x, vMaskCoord.x) +
step(uMaskClamp.y, vMaskCoord.y) +
step(vMaskCoord.x, uMaskClamp.z) +
step(vMaskCoord.y, uMaskClamp.w));

// TODO look into why this is needed
float npmAlpha = uAlpha;
vec4 original = texture(uTexture, vTextureCoord);
vec4 masky = texture(uMaskTexture, vMaskCoord);
float alphaMul = 1.0 - npmAlpha * (1.0 - masky.a);

float a = alphaMul * masky.r * npmAlpha * clip;

if (uInverse == 1.0) {
a = 1.0 - a;
}

finalColor = original * a;
}
`,name:"mask-filter"});super(dy(ly({},s),hy({gpuProgram:d,glProgram:h,resources:{filterUniforms:n,uMaskTexture:i.texture.source}})));this.sprite=i;this._textureMatrix=r}
set inverse(e){this.resources.filterUniforms.uniforms.uInverse=e?1:0}
get inverse(){return this.resources.filterUniforms.uniforms.uInverse===1}
apply(e,t,i,s){this._textureMatrix.texture=this.sprite.texture;e.calculateSpriteMatrix(this.resources.filterUniforms.uniforms.uFilterMatrix,this.sprite).prepend(this._textureMatrix.mapCoord);this.resources.uMaskTexture=this.sprite.texture.source;e.applyFilter(this,t,i,s)}};function Vb(a,e,t,i,s,r,n,d){let h=n-t;let l=d-i;let f=s-t;let p=r-i;let _=a-t;let m=e-i;let v=h*h+l*l;let T=h*f+l*p;let w=h*_+l*m;let P=f*f+p*p;let C=f*_+p*m;let B=1/(v*P-T*T);let D=(P*w-T*C)*B;let X=(v*C-T*w)*B;return D>=0&&X>=0&&D+X<1}
var r3=class n3{constructor(e){this._tick=()=>{this.timeout=setTimeout(this._processQueue,0)};this._processQueue=()=>{let{queue:t}=this;let i=0;for(;t.length&&i<n3.uploadsPerFrame;){let s=t.shift();this.uploadQueueItem(s);i++}
if(t.length){_p.system.addOnce(this._tick,this,Ra.UTILITY)}else{this._resolve()}};this.renderer=e;this.queue=[];this.resolves=[]}
getQueue(){return[...this.queue]}
add(e){let t=Array.isArray(e)?e:[e];for(let i of t)if(i instanceof de){this._addContainer(i)}else{this.resolveQueueItem(i,this.queue)}
return this}
_addContainer(e){this.resolveQueueItem(e,this.queue);for(let t of e.children)this._addContainer(t)}
upload(e){if(e){this.add(e)}
return new Promise(t=>{if(this.queue.length){this.resolves.push(t);this.dedupeQueue();_p.system.addOnce(this._tick,this,Ra.UTILITY)}else{t()}})}
dedupeQueue(){let e=Object.create(null);let t=0;for(let i=0;i<this.queue.length;i++){let s=this.queue[i];if(!e[s.uid]){e[s.uid]=!0;this.queue[t++]=s}}
this.queue.length=t}
_resolve(){let{resolves:e}=this;let t=e.slice(0);e.length=0;for(let i of t)i()}};r3.uploadsPerFrame=4;var py=Object.defineProperty;var Bn=Object.getOwnPropertySymbols;var o3=Object.prototype.hasOwnProperty;var c3=Object.prototype.propertyIsEnumerable;var Wb=(a,e,t)=>e in a?py(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var gy=(a,e)=>{for(var t in e||(e={}))if(o3.call(e,t)){Wb(a,t,e[t])}
if(Bn){for(var t of Bn(e))if(c3.call(e,t)){Wb(a,t,e[t])}}
return a};var my=(a,e)=>{var t={};for(var i in a)if(o3.call(a,i)&&e.indexOf(i)<0){t[i]=a[i]}
if(a!=null&&Bn){for(var i of Bn(a))if(e.indexOf(i)<0&&c3.call(a,i)){t[i]=a[i]}}
return t};var Ka=class extends ha{constructor(...e){var t;let i=e[0];if(i instanceof qt){i={geometry:i,shader:e[1]};if(e[3]){i.geometry.topology=e[3]}}
let s=i;let{geometry:r,shader:n,texture:d,roundPixels:h,state:l}=s;let f=my(s,["geometry","shader","texture","roundPixels","state"]);super(gy({label:"Mesh"},f));this.renderPipeId="mesh";this._shader=null;this.allowChildren=!1;this.shader=n??null;this.texture=(t=d??n?.texture)!=null?t:W.WHITE;this.state=l??Qd.for2d();this._geometry=r;this._geometry.on("update",this.onViewUpdate,this);this.roundPixels=h??!1}
get material(){return this._shader}
set shader(e){if(this._shader!==e){this._shader=e;this.onViewUpdate()}}
get shader(){return this._shader}
set geometry(e){var t;if(this._geometry!==e){if(!((t=this._geometry)==null)){t.off("update",this.onViewUpdate,this)}
e.on("update",this.onViewUpdate,this);this._geometry=e;this.onViewUpdate()}}
get geometry(){return this._geometry}
set texture(e){if(!e){e=W.EMPTY}
let t=this._texture;if(t!==e){if(t&&t.dynamic){t.off("update",this.onViewUpdate,this)}
if(e.dynamic){e.on("update",this.onViewUpdate,this)}
if(this.shader){this.shader.texture=e}
this._texture=e;this.onViewUpdate()}}
get texture(){return this._texture}
get batched(){return this._shader||this.state.data&12?!1:this._geometry instanceof _2?this._geometry.batchMode==="auto"?this._geometry.positions.length/2<=100:this._geometry.batchMode==="batch":!1}
get bounds(){return this._geometry.bounds}
updateBounds(){this._bounds=this._geometry.bounds}
containsPoint(e){let{x:t,y:i}=e;if(!this.bounds.containsPoint(t,i)){return!1}
let s=this.geometry.getBuffer("aPosition").data;let r=this.geometry.topology==="triangle-strip"?3:1;if(this.geometry.getIndex()){let n=this.geometry.getIndex().data;let d=n.length;for(let h=0;h+2<d;h+=r){let l=n[h]*2;let f=n[h+1]*2;let p=n[h+2]*2;if(Vb(t,i,s[l],s[l+1],s[f],s[f+1],s[p],s[p+1])){return!0}}}else{let n=s.length/2;for(let d=0;d+2<n;d+=r){let h=d*2;let l=(d+1)*2;let f=(d+2)*2;if(Vb(t,i,s[h],s[h+1],s[l],s[l+1],s[f],s[f+1])){return!0}}}
return!1}
destroy(e){var t;super.destroy(e);if(typeof e=="boolean"?e:e?.texture){let i=typeof e=="boolean"?e:e?.textureSource;this._texture.destroy(i)}
if(!((t=this._geometry)==null)){t.off("update",this.onViewUpdate,this)}
this._texture=null;this._geometry=null;this._shader=null}};var _y=Object.defineProperty;var yy=Object.defineProperties;var xy=Object.getOwnPropertyDescriptors;var Fn=Object.getOwnPropertySymbols;var d3=Object.prototype.hasOwnProperty;var h3=Object.prototype.propertyIsEnumerable;var Yb=(a,e,t)=>e in a?_y(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var vy=(a,e)=>{for(var t in e||(e={}))if(d3.call(e,t)){Yb(a,t,e[t])}
if(Fn){for(var t of Fn(e))if(h3.call(e,t)){Yb(a,t,e[t])}}
return a};var Sy=(a,e)=>{var t={};for(var i in a)if(d3.call(a,i)&&e.indexOf(i)<0){t[i]=a[i]}
if(a!=null&&Fn){for(var i of Fn(a))if(e.indexOf(i)<0&&h3.call(a,i)){t[i]=a[i]}}
return t};var Mh=class a extends Ae{constructor(...e){let t=e[0];if(Array.isArray(e[0])){t={textures:e[0],autoUpdate:e[1]}}
let i=t;let{textures:s,autoUpdate:r}=i;let n=Sy(i,["textures","autoUpdate"]);let[d]=s;super(yy(vy({},n),xy({texture:d instanceof W?d:d.texture})));this._textures=null;this._durations=null;this._autoUpdate=r??!0;this._isConnectedToTicker=!1;this.animationSpeed=1;this.loop=!0;this.updateAnchor=!1;this.onComplete=null;this.onFrameChange=null;this.onLoop=null;this._currentTime=0;this._playing=!1;this._previousFrame=null;this.textures=s}
stop(){if(this._playing){this._playing=!1;if(this._autoUpdate&&this._isConnectedToTicker){_p.shared.remove(this.update,this);this._isConnectedToTicker=!1}}}
play(){if(!this._playing){this._playing=!0;if(this._autoUpdate&&!this._isConnectedToTicker){_p.shared.add(this.update,this,Ra.HIGH);this._isConnectedToTicker=!0}}}
gotoAndStop(e){this.stop();this.currentFrame=e}
gotoAndPlay(e){this.currentFrame=e;this.play()}
update(e){if(!this._playing){return}
let t=e.deltaTime;let i=this.animationSpeed*t;let s=this.currentFrame;if(this._durations!==null){let r=this._currentTime%1*this._durations[this.currentFrame];for(r+=i/60*1e3;r<0;){this._currentTime--;r+=this._durations[this.currentFrame]}
let n=Math.sign(this.animationSpeed*t);for(this._currentTime=Math.floor(this._currentTime);r>=this._durations[this.currentFrame];){r-=this._durations[this.currentFrame]*n;this._currentTime+=n}
this._currentTime+=r/this._durations[this.currentFrame]}else{this._currentTime+=i}
if(this._currentTime<0&&!this.loop){this.gotoAndStop(0);if(this.onComplete){this.onComplete()}}else if(this._currentTime>=this._textures.length&&!this.loop){this.gotoAndStop(this._textures.length-1);if(this.onComplete){this.onComplete()}}else if(s!==this.currentFrame){if(this.loop&&this.onLoop&&(this.animationSpeed>0&&this.currentFrame<s||this.animationSpeed<0&&this.currentFrame>s)){this.onLoop()}
this._updateTexture()}}
_updateTexture(){let e=this.currentFrame;if(this._previousFrame!==e){this._previousFrame=e;this.texture=this._textures[e];if(this.updateAnchor){this.anchor.copyFrom(this.texture.defaultAnchor)}
if(this.onFrameChange){this.onFrameChange(this.currentFrame)}}}
destroy(){this.stop();super.destroy();this.onComplete=null;this.onFrameChange=null;this.onLoop=null}
static fromFrames(e){let t=[];for(let i=0;i<e.length;++i){t.push(W.from(e[i]))}
return new a(t)}
static fromImages(e){let t=[];for(let i=0;i<e.length;++i){t.push(W.from(e[i]))}
return new a(t)}
get totalFrames(){return this._textures.length}
get textures(){return this._textures}
set textures(e){if(e[0]instanceof W){this._textures=e;this._durations=null}else{this._textures=[];this._durations=[];for(let t=0;t<e.length;t++){this._textures.push(e[t].texture);this._durations.push(e[t].time)}}
this._previousFrame=null;this.gotoAndStop(0);this._updateTexture()}
get currentFrame(){let e=Math.floor(this._currentTime)%this._textures.length;if(e<0){e+=this._textures.length}
return e}
set currentFrame(e){if(e<0||e>this.totalFrames-1){throw new Error(`[AnimatedSprite]: Invalid frame index value ${e}, expected to be between 0 and totalFrames ${this.totalFrames}.`)}
let t=this.currentFrame;this._currentTime=e;if(t!==this.currentFrame){this._updateTexture()}}
get playing(){return this._playing}
get autoUpdate(){return this._autoUpdate}
set autoUpdate(e){if(e!==this._autoUpdate){this._autoUpdate=e;if(!this._autoUpdate&&this._isConnectedToTicker){_p.shared.remove(this.update,this);this._isConnectedToTicker=!1}else if(this._autoUpdate&&!this._isConnectedToTicker&&this._playing){_p.shared.add(this.update,this);this._isConnectedToTicker=!0}}}};var Ch=class{constructor({matrix:e,observer:t}={}){this.dirty=!0;this._matrix=e??new ae();this.observer=t;this.position=new We(this,0,0);this.scale=new We(this,1,1);this.pivot=new We(this,0,0);this.skew=new We(this,0,0);this._rotation=0;this._cx=1;this._sx=0;this._cy=0;this._sy=1}
get matrix(){let e=this._matrix;if(this.dirty){e.a=this._cx*this.scale.x;e.b=this._sx*this.scale.x;e.c=this._cy*this.scale.y;e.d=this._sy*this.scale.y;e.tx=this.position.x-(this.pivot.x*e.a+this.pivot.y*e.c);e.ty=this.position.y-(this.pivot.x*e.b+this.pivot.y*e.d);this.dirty=!1}
return e}
_onUpdate(e){var t;this.dirty=!0;if(e===this.skew){this.updateSkew()}
if(!((t=this.observer)==null)){t._onUpdate(this)}}
updateSkew(){this._cx=Math.cos(this._rotation+this.skew.y);this._sx=Math.sin(this._rotation+this.skew.y);this._cy=-Math.sin(this._rotation-this.skew.x);this._sy=Math.cos(this._rotation-this.skew.x);this.dirty=!0}
setFromMatrix(e){e.decompose(this);this.dirty=!0}
get rotation(){return this._rotation}
set rotation(e){if(this._rotation!==e){this._rotation=e;this._onUpdate(this.skew)}}};var wy=Object.defineProperty;var Dn=Object.getOwnPropertySymbols;var l3=Object.prototype.hasOwnProperty;var u3=Object.prototype.propertyIsEnumerable;var $b=(a,e,t)=>e in a?wy(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var ls=(a,e)=>{for(var t in e||(e={}))if(l3.call(e,t)){$b(a,t,e[t])}
if(Dn){for(var t of Dn(e))if(u3.call(e,t)){$b(a,t,e[t])}}
return a};var Ay=(a,e)=>{var t={};for(var i in a)if(l3.call(a,i)&&e.indexOf(i)<0){t[i]=a[i]}
if(a!=null&&Dn){for(var i of Dn(a))if(e.indexOf(i)<0&&u3.call(a,i)){t[i]=a[i]}}
return t};var f3=class Dr extends ha{constructor(...e){let t=e[0]||{};if(t instanceof W){t={texture:t}}
if(e.length>1){t.width=e[1];t.height=e[2]}
t=ls(ls({},Dr.defaultOptions),t);let i=t??{};let{texture:s,anchor:r,tilePosition:n,tileScale:d,tileRotation:h,width:l,height:f,applyAnchorToTexture:p,roundPixels:_}=i;let m=Ay(i,["texture","anchor","tilePosition","tileScale","tileRotation","width","height","applyAnchorToTexture","roundPixels"]);super(ls({label:"TilingSprite"},m));this.renderPipeId="tilingSprite";this.batched=!0;this.allowChildren=!1;this._anchor=new We({_onUpdate:()=>{this.onViewUpdate()}});this.applyAnchorToTexture=p;this.texture=s;this._width=l??s.width;this._height=f??s.height;this._tileTransform=new Ch({observer:{_onUpdate:()=>this.onViewUpdate()}});if(r){this.anchor=r}
this.tilePosition=n;this.tileScale=d;this.tileRotation=h;this.roundPixels=_??!1}
static from(e,t={}){return typeof e=="string"?new Dr(ls({texture:Me.get(e)},t)):new Dr(ls({texture:e},t))}
get uvRespectAnchor(){Qt("uvRespectAnchor is deprecated, please use applyAnchorToTexture instead");return this.applyAnchorToTexture}
set uvRespectAnchor(e){Qt("uvRespectAnchor is deprecated, please use applyAnchorToTexture instead");this.applyAnchorToTexture=e}
get clampMargin(){return this._texture.textureMatrix.clampMargin}
set clampMargin(e){this._texture.textureMatrix.clampMargin=e}
get anchor(){return this._anchor}
set anchor(e){if(typeof e=="number"){this._anchor.set(e)}else{this._anchor.copyFrom(e)}}
get tilePosition(){return this._tileTransform.position}
set tilePosition(e){this._tileTransform.position.copyFrom(e)}
get tileScale(){return this._tileTransform.scale}
set tileScale(e){if(typeof e=="number"){this._tileTransform.scale.set(e)}else{this._tileTransform.scale.copyFrom(e)}}
set tileRotation(e){this._tileTransform.rotation=e}
get tileRotation(){return this._tileTransform.rotation}
get tileTransform(){return this._tileTransform}
set texture(e){if(!e){e=W.EMPTY}
let t=this._texture;if(t!==e){if(t&&t.dynamic){t.off("update",this.onViewUpdate,this)}
if(e.dynamic){e.on("update",this.onViewUpdate,this)}
this._texture=e;this.onViewUpdate()}}
get texture(){return this._texture}
set width(e){this._width=e;this.onViewUpdate()}
get width(){return this._width}
set height(e){this._height=e;this.onViewUpdate()}
get height(){return this._height}
setSize(e,t){var i;if(typeof e=="object"){t=(i=e.height)!=null?i:e.width;e=e.width}
this._width=e;this._height=t??e;this.onViewUpdate()}
getSize(e){if(!e){e={}}
e.width=this._width;e.height=this._height;return e}
updateBounds(){let e=this._bounds;let t=this._anchor;let i=this._width;let s=this._height;e.maxX=-t._x*i;e.minX=e.maxX+i;e.maxY=-t._y*s;e.minY=e.maxY+s}
containsPoint(e){let t=this._width;let i=this._height;let s=-t*this._anchor._x;let r=0;return e.x>=s&&e.x<=s+t&&(r=-i*this._anchor._y,e.y>=r&&e.y<=r+i)}
destroy(e=!1){super.destroy(e);this._anchor=null;this._tileTransform=null;this._bounds=null;if(typeof e=="boolean"?e:e?.texture){let t=typeof e=="boolean"?e:e?.textureSource;this._texture.destroy(t)}
this._texture=null}};f3.defaultOptions={texture:W.EMPTY,anchor:{x:0,y:0},tilePosition:{x:0,y:0},tileScale:{x:1,y:1},tileRotation:0,applyAnchorToTexture:!1};var Py=Object.defineProperty;var kn=Object.getOwnPropertySymbols;var b3=Object.prototype.hasOwnProperty;var p3=Object.prototype.propertyIsEnumerable;var Kb=(a,e,t)=>e in a?Py(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var Ry=(a,e)=>{for(var t in e||(e={}))if(b3.call(e,t)){Kb(a,t,e[t])}
if(kn){for(var t of kn(e))if(p3.call(e,t)){Kb(a,t,e[t])}}
return a};var My=(a,e)=>{var t={};for(var i in a)if(b3.call(a,i)&&e.indexOf(i)<0){t[i]=a[i]}
if(a!=null&&kn){for(var i of kn(a))if(e.indexOf(i)<0&&p3.call(a,i)){t[i]=a[i]}}
return t};var Us=class extends ha{constructor(e,t){let{text:s,resolution:r,style:n,anchor:d,width:h,height:l,roundPixels:f}=e;let p=My(e,["text","resolution","style","anchor","width","height","roundPixels"]);super(Ry({},p));this.batched=!0;this._resolution=null;this._autoResolution=!0;this._didTextUpdate=!0;this._styleClass=t;this.text=s??"";this.style=n;this.resolution=r??null;this.allowChildren=!1;this._anchor=new We({_onUpdate:()=>{this.onViewUpdate()}});if(d){this.anchor=d}
this.roundPixels=f??!1;if(h!==undefined){this.width=h}
if(l!==undefined){this.height=l}}
get anchor(){return this._anchor}
set anchor(e){if(typeof e=="number"){this._anchor.set(e)}else{this._anchor.copyFrom(e)}}
set text(e){e=e.toString();if(this._text!==e){this._text=e;this.onViewUpdate()}}
get text(){return this._text}
set resolution(e){this._autoResolution=e===null;this._resolution=e;this.onViewUpdate()}
get resolution(){return this._resolution}
get style(){return this._style}
set style(e){var t;if(!e){e={}}
if(!((t=this._style)==null)){t.off("update",this.onViewUpdate,this)}
if(e instanceof this._styleClass){this._style=e}else{this._style=new this._styleClass(e)}
this._style.on("update",this.onViewUpdate,this);this.onViewUpdate()}
get width(){return Math.abs(this.scale.x)*this.bounds.width}
set width(e){this._setWidth(e,this.bounds.width)}
get height(){return Math.abs(this.scale.y)*this.bounds.height}
set height(e){this._setHeight(e,this.bounds.height)}
getSize(e){if(!e){e={}}
e.width=Math.abs(this.scale.x)*this.bounds.width;e.height=Math.abs(this.scale.y)*this.bounds.height;return e}
setSize(e,t){var i;if(typeof e=="object"){t=(i=e.height)!=null?i:e.width;e=e.width}else if(!(t!=null)){t=e}
if(e!==undefined){this._setWidth(e,this.bounds.width)}
if(t!==undefined){this._setHeight(t,this.bounds.height)}}
containsPoint(e){let t=this.bounds.width;let i=this.bounds.height;let s=-t*this.anchor.x;let r=0;return e.x>=s&&e.x<=s+t&&(r=-i*this.anchor.y,e.y>=r&&e.y<=r+i)}
onViewUpdate(){if(!this.didViewUpdate){this._didTextUpdate=!0}
super.onViewUpdate()}
_getKey(){return `${this.text}:${this._style.styleKey}:${this._resolution}`}
destroy(e=!1){super.destroy(e);this.owner=null;this._bounds=null;this._anchor=null;if(typeof e=="boolean"?e:e!=null&&e.style){this._style.destroy(e)}
this._style=null;this._text=null}};function El(a,e){var t;let i=(t=a[0])!=null?t:{};if(typeof i=="string"||a[1]){i={text:i,style:a[1]}}
return i}
var Ne=class extends Us{constructor(...e){let t=El(e,"Text");super(t,fh);this.renderPipeId="text"}
updateBounds(){let e=this._bounds;let t=this._anchor;let i=jt.measureText(this._text,this._style);let{width:s,height:r}=i;e.minX=-t._x*s;e.maxX=e.minX+s;e.minY=-t._y*r;e.maxY=e.minY+r}};var Oh=class extends r3{resolveQueueItem(e,t){if(e instanceof de){this.resolveContainerQueueItem(e,t)}else if(e instanceof bp||e instanceof W){t.push(e.source)}else if(e instanceof uh){t.push(e)}
return null}
resolveContainerQueueItem(e,t){if(e instanceof Ae||e instanceof f3||e instanceof Ka){t.push(e.texture.source)}else if(e instanceof Ne){t.push(e)}else if(e instanceof Ye){t.push(e.context)}else if(e instanceof Mh){e.textures.forEach(i=>{if(i.source){t.push(i.source)}else{t.push(i.texture.source)}})}}
resolveGraphicsContextQueueItem(e){this.renderer.graphicsContext.getContextRenderData(e);let{instructions:t}=e;for(let i of t)if(i.action==="texture"){let{image:s}=i.data;return s.source}else if(i.action==="fill"){let{texture:s}=i.data.style;return s.source}
return null}};var Ih=class extends Us{constructor(...e){var t;var i;var s;let r=El(e,"BitmapText");if(!((t=r.style)!=null)){r.style=r.style||{}}
if(!((s=(i=r.style).fill)!=null)){i.fill=16777215}
super(r,fh);this.renderPipeId="bitmapText"}
updateBounds(){let e=this._bounds;let t=this._anchor;let i=fn.measureText(this.text,this._style);let s=i.scale;let r=i.offsetY*s;let n=i.width*s;let d=i.height*s;let h=this._style._stroke;if(h){n+=h.width;d+=h.width}
e.minX=-t._x*n;e.maxX=e.minX+n;e.minY=-t._y*(d+r);e.maxY=e.minY+d}
set resolution(e){}
get resolution(){return this._resolution}};var Gh=class extends Us{constructor(...e){let t=El(e,"HtmlText");super(t,mn);this.renderPipeId="htmlText"}
updateBounds(){let e=this._bounds;let t=this._anchor;let i=m2(this.text,this._style);let{width:s,height:r}=i;e.minX=-t._x*s;e.maxX=e.minX+s;e.minY=-t._y*r;e.maxY=e.minY+r}};var Bh=class extends Oh{uploadQueueItem(e){if(e instanceof bp){this.uploadTextureSource(e)}else if(e instanceof Ne){this.uploadText(e)}else if(e instanceof Gh){this.uploadHTMLText(e)}else if(e instanceof Ih){this.uploadBitmapText(e)}else if(e instanceof uh){this.uploadGraphicsContext(e)}}
uploadTextureSource(e){this.renderer.texture.initSource(e)}
uploadText(e){this.renderer.renderPipes.text.initGpuText(e)}
uploadBitmapText(e){this.renderer.renderPipes.bitmapText.initGpuText(e)}
uploadHTMLText(e){this.renderer.renderPipes.htmlText.initGpuText(e)}
uploadGraphicsContext(e){this.renderer.graphicsContext.getContextRenderData(e);let{instructions:t}=e;for(let i of t)if(i.action==="texture"){let{image:s}=i.data;this.uploadTextureSource(s.source)}else if(i.action==="fill"){let{texture:s}=i.data.style;this.uploadTextureSource(s.source)}
return null}};var Fh=class extends Bh{destroy(){clearTimeout(this.timeout);this.renderer=null;this.queue=null;this.resolves=null}};Fh.extension={type:[I.WebGLSystem,I.WebGPUSystem],name:"prepare"};var Un=class{constructor(){this._tempState=Qd.for2d();this._didUploadHash={}}
init(e){e.renderer.runners.contextChange.add(this)}
contextChange(){this._didUploadHash={}}
start(e,t,i){let s=e.renderer;let r=this._didUploadHash[i.uid];s.shader.bind(i,r);if(!r){this._didUploadHash[i.uid]=!0}
s.shader.updateUniformGroup(s.globalUniforms.uniformGroup);s.geometry.bind(t,i.glProgram)}
execute(e,t){let i=e.renderer;this._tempState.blendMode=t.blendMode;i.state.set(this._tempState);let s=t.textures.textures;for(let r=0;r<t.textures.count;r++){i.texture.bind(s[r],r)}
i.geometry.draw(t.topology,t.size,t.start)}};Un.extension={type:[I.WebGLPipesAdaptor],name:"batch"};var Rr=Qd.for2d();var Ln=class{start(e,t,i){let s=e.renderer;let r=s.encoder;let n=i.gpuProgram;this._shader=i;this._geometry=t;r.setGeometry(t,n);Rr.blendMode="normal";s.pipeline.getPipeline(t,n,Rr);let d=s.globalUniforms.bindGroup;r.resetBindGroup(1);r.setBindGroup(0,d,n)}
execute(e,t){let i=this._shader.gpuProgram;let s=e.renderer;let r=s.encoder;if(!t.bindGroup){let h=t.textures;t.bindGroup=pl(h.textures,h.count)}
Rr.blendMode=t.blendMode;let n=s.bindGroup.getBindGroup(t.bindGroup,i,1);let d=s.pipeline.getPipeline(this._geometry,i,Rr,t.topology);t.bindGroup._touch(s.textureGC.count);r.setPipeline(d);r.renderPassEncoder.setBindGroup(1,n);r.renderPassEncoder.drawIndexed(t.size,1,t.start)}};Ln.extension={type:[I.WebGPUPipesAdaptor],name:"batch"};var Dh=class g3{constructor(e,t){this.state=Qd.for2d();this._batchersByInstructionSet=Object.create(null);this._activeBatches=Object.create(null);var i;var s;this.renderer=e;this._adaptor=t;if(!((s=(i=this._adaptor).init)==null)){s.call(i,this)}}
static getBatcher(e){return new this._availableBatchers[e]()}
buildStart(e){let t=this._batchersByInstructionSet[e.uid];if(!t){t=this._batchersByInstructionSet[e.uid]=Object.create(null);if(!t.default){t.default=new Vp()}}
this._activeBatches=t;this._activeBatch=this._activeBatches.default;for(let i in this._activeBatches)this._activeBatches[i].begin();}
addToBatch(e,t){if(this._activeBatch.name!==e.batcherName){this._activeBatch.break(t);let i=this._activeBatches[e.batcherName];if(!i){i=this._activeBatches[e.batcherName]=g3.getBatcher(e.batcherName);i.begin()}
this._activeBatch=i}
this._activeBatch.add(e)}
break(e){this._activeBatch.break(e)}
buildEnd(e){this._activeBatch.break(e);let t=this._activeBatches;for(let i in t){let s=t[i];let r=s.geometry;r.indexBuffer.setDataWithSize(s.indexBuffer,s.indexSize,!0);r.buffers[0].setDataWithSize(s.attributeBuffer.float32View,s.attributeSize,!1)}}
upload(e){let t=this._batchersByInstructionSet[e.uid];for(let i in t){let s=t[i];let r=s.geometry;if(s.dirty){s.dirty=!1;r.buffers[0].update(s.attributeSize*4)}}}
execute(e){if(e.action==="startBatch"){let t=e.batcher;let i=t.geometry;let s=t.shader;this._adaptor.start(this,i,s)}
this._adaptor.execute(this,e)}
destroy(){this.state=null;this.renderer=null;this._adaptor=null;for(let e in this._activeBatches)this._activeBatches[e].destroy();this._activeBatches=null}};Dh.extension={type:[I.WebGLPipes,I.WebGPUPipes,I.CanvasPipes],name:"batch"};Dh._availableBatchers=Object.create(null);fe.handleByMap(I.Batcher,Dh._availableBatchers);fe.add(Vp);var Cy={name:"texture-bit",vertex:{header:`

struct TextureUniforms {
uTextureMatrix:mat3x3<f32>,
}

@group(2) @binding(2) var<uniform> textureUniforms : TextureUniforms;
`,main:`
uv = (textureUniforms.uTextureMatrix * vec3(uv, 1.0)).xy;
`},fragment:{header:`
@group(2) @binding(0) var uTexture: texture_2d<f32>;
@group(2) @binding(1) var uSampler: sampler;


`,main:`
outColor = textureSample(uTexture, uSampler, vUV);
`}};var Oy={name:"texture-bit",vertex:{header:`
uniform mat3 uTextureMatrix;
`,main:`
uv = (uTextureMatrix * vec3(uv, 1.0)).xy;
`},fragment:{header:`
uniform sampler2D uTexture;


`,main:`
outColor = texture(uTexture, vUV);
`}};var Iy=new Ze();var Gy=class extends Si{constructor(){super();this.filters=[new Rh({sprite:new Ae(W.EMPTY),inverse:!1,resolution:"inherit",antialias:"inherit"})]}
get sprite(){return this.filters[0].sprite}
set sprite(a){this.filters[0].sprite=a}
get inverse(){return this.filters[0].inverse}
set inverse(a){this.filters[0].inverse=a}};var Nn=class{constructor(e){this._activeMaskStage=[];this._renderer=e}
push(e,t,i){let s=this._renderer;s.renderPipes.batch.break(i);i.add({renderPipeId:"alphaMask",action:"pushMaskBegin",mask:e,inverse:t._maskOptions.inverse,canBundle:!1,maskedContainer:t});e.inverse=t._maskOptions.inverse;if(e.renderMaskToTexture){let r=e.mask;r.includeInBuild=!0;r.collectRenderables(i,s,null);r.includeInBuild=!1}
s.renderPipes.batch.break(i);i.add({renderPipeId:"alphaMask",action:"pushMaskEnd",mask:e,maskedContainer:t,inverse:t._maskOptions.inverse,canBundle:!1})}
pop(e,t,i){this._renderer.renderPipes.batch.break(i);i.add({renderPipeId:"alphaMask",action:"popMaskEnd",mask:e,inverse:t._maskOptions.inverse,canBundle:!1})}
execute(e){let t=this._renderer;let i=e.mask.renderMaskToTexture;if(e.action==="pushMaskBegin"){let s=me.get(Gy);s.inverse=e.inverse;if(i){e.mask.mask.measurable=!0;let r=Co(e.mask.mask,!0,Iy);e.mask.mask.measurable=!1;r.ceil();let n=t.renderTarget.renderTarget.colorTexture.source;let d=Ve.getOptimalTexture(r.width,r.height,n._resolution,n.antialias);t.renderTarget.push(d,!0);t.globalUniforms.push({offset:r,worldColor:4294967295});let h=s.sprite;h.texture=d;h.worldTransform.tx=r.minX;h.worldTransform.ty=r.minY;this._activeMaskStage.push({filterEffect:s,maskedContainer:e.maskedContainer,filterTexture:d})}else{s.sprite=e.mask.mask;this._activeMaskStage.push({filterEffect:s,maskedContainer:e.maskedContainer})}}else if(e.action==="pushMaskEnd"){let s=this._activeMaskStage[this._activeMaskStage.length-1];if(i){if(t.type===yt.WEBGL){t.renderTarget.finishRenderPass()}
t.renderTarget.pop();t.globalUniforms.pop()}
t.filter.push({renderPipeId:"filter",action:"pushFilter",container:s.maskedContainer,filterEffect:s.filterEffect,canBundle:!1})}else if(e.action==="popMaskEnd"){t.filter.pop();let s=this._activeMaskStage.pop();if(i){Ve.returnTexture(s.filterTexture)}
me.return(s.filterEffect)}}
destroy(){this._renderer=null;this._activeMaskStage=null}};Nn.extension={type:[I.WebGLPipes,I.WebGPUPipes,I.CanvasPipes],name:"alphaMask"};var jn=class{constructor(e){this._colorStack=[];this._colorStackIndex=0;this._currentColor=0;this._renderer=e}
buildStart(){this._colorStack[0]=15;this._colorStackIndex=1;this._currentColor=15}
push(e,t,i){this._renderer.renderPipes.batch.break(i);let s=this._colorStack;s[this._colorStackIndex]=s[this._colorStackIndex-1]&e.mask;let r=this._colorStack[this._colorStackIndex];if(r!==this._currentColor){this._currentColor=r;i.add({renderPipeId:"colorMask",colorMask:r,canBundle:!1})}
this._colorStackIndex++}
pop(e,t,i){this._renderer.renderPipes.batch.break(i);let s=this._colorStack;this._colorStackIndex--;let r=s[this._colorStackIndex-1];if(r!==this._currentColor){this._currentColor=r;i.add({renderPipeId:"colorMask",colorMask:r,canBundle:!1})}}
execute(e){this._renderer.colorMask.setMask(e.colorMask)}
destroy(){this._colorStack=null}};jn.extension={type:[I.WebGLPipes,I.WebGPUPipes,I.CanvasPipes],name:"colorMask"};var Xn=class{constructor(e){this._maskStackHash={};this._maskHash=new WeakMap();this._renderer=e}
push(e,t,i){var s;var r;let d=this._renderer;d.renderPipes.batch.break(i);d.renderPipes.blendMode.setBlendMode(e.mask,"none",i);i.add({renderPipeId:"stencilMask",action:"pushMaskBegin",mask:e,inverse:t._maskOptions.inverse,canBundle:!1});let h=e.mask;h.includeInBuild=!0;if(!this._maskHash.has(e)){this._maskHash.set(e,{instructionsStart:0,instructionsLength:0})}
let l=this._maskHash.get(e);l.instructionsStart=i.instructionSize;h.collectRenderables(i,d,null);h.includeInBuild=!1;d.renderPipes.batch.break(i);i.add({renderPipeId:"stencilMask",action:"pushMaskEnd",mask:e,inverse:t._maskOptions.inverse,canBundle:!1});let f=i.instructionSize-l.instructionsStart-1;l.instructionsLength=f;let p=d.renderTarget.renderTarget.uid;if(!((r=(s=this._maskStackHash)[p])!=null)){s[p]=0}}
pop(e,t,i){let r=this._renderer;r.renderPipes.batch.break(i);r.renderPipes.blendMode.setBlendMode(e.mask,"none",i);i.add({renderPipeId:"stencilMask",action:"popMaskBegin",inverse:t._maskOptions.inverse,canBundle:!1});let n=this._maskHash.get(e);for(let d=0;d<n.instructionsLength;d++){i.instructions[i.instructionSize++]=i.instructions[n.instructionsStart++]}
i.add({renderPipeId:"stencilMask",action:"popMaskEnd",canBundle:!1})}
execute(e){var t;var i;let s=this._renderer;let r=s.renderTarget.renderTarget.uid;let n=(i=(t=this._maskStackHash)[r])!=null?i:t[r]=0;if(e.action==="pushMaskBegin"){s.renderTarget.ensureDepthStencil();s.stencil.setStencilMode(Le.RENDERING_MASK_ADD,n);n++;s.colorMask.setMask(0)}else if(e.action==="pushMaskEnd"){if(e.inverse){s.stencil.setStencilMode(Le.INVERSE_MASK_ACTIVE,n)}else{s.stencil.setStencilMode(Le.MASK_ACTIVE,n)}
s.colorMask.setMask(15)}else if(e.action==="popMaskBegin"){s.colorMask.setMask(0);if(n!==0){s.stencil.setStencilMode(Le.RENDERING_MASK_REMOVE,n)}else{s.renderTarget.clear(null,mt.STENCIL);s.stencil.setStencilMode(Le.DISABLED,n)}
n--}else if(e.action==="popMaskEnd"){if(e.inverse){s.stencil.setStencilMode(Le.INVERSE_MASK_ACTIVE,n)}else{s.stencil.setStencilMode(Le.MASK_ACTIVE,n)}
s.colorMask.setMask(15)}
this._maskStackHash[r]=n}
destroy(){this._renderer=null;this._maskStackHash=null;this._maskHash=null}};Xn.extension={type:[I.WebGLPipes,I.WebGPUPipes,I.CanvasPipes],name:"stencilMask"};var kr=(a=>(a[a.ELEMENT_ARRAY_BUFFER=34963]="ELEMENT_ARRAY_BUFFER",a[a.ARRAY_BUFFER=34962]="ARRAY_BUFFER",a[a.UNIFORM_BUFFER=35345]="UNIFORM_BUFFER",a))(kr||{});var kh=class{constructor(e,t){this._lastBindBaseLocation=-1;this._lastBindCallId=-1;this.buffer=e||null;this.updateID=-1;this.byteLength=-1;this.type=t}};var Hn=class{constructor(e){this._gpuBuffers=Object.create(null);this._boundBufferBases=Object.create(null);this._minBaseLocation=0;this._nextBindBaseIndex=this._minBaseLocation;this._bindCallId=0;this._renderer=e;this._renderer.renderableGC.addManagedHash(this,"_gpuBuffers")}
destroy(){this._renderer=null;this._gl=null;this._gpuBuffers=null;this._boundBufferBases=null}
contextChange(){let e=this._gl=this._renderer.gl;this._gpuBuffers=Object.create(null);this._maxBindings=e.MAX_UNIFORM_BUFFER_BINDINGS?e.getParameter(e.MAX_UNIFORM_BUFFER_BINDINGS):0}
getGlBuffer(e){return this._gpuBuffers[e.uid]||this.createGLBuffer(e)}
bind(e){let{_gl:t}=this;let i=this.getGlBuffer(e);t.bindBuffer(i.type,i.buffer)}
bindBufferBase(e,t){let{_gl:i}=this;if(this._boundBufferBases[t]!==e){this._boundBufferBases[t]=e;e._lastBindBaseLocation=t;i.bindBufferBase(i.UNIFORM_BUFFER,t,e.buffer)}}
nextBindBase(e){this._bindCallId++;this._minBaseLocation=0;if(e){this._boundBufferBases[0]=null;this._minBaseLocation=1;if(this._nextBindBaseIndex<1){this._nextBindBaseIndex=1}}}
freeLocationForBufferBase(e){let t=this.getLastBindBaseLocation(e);if(t>=this._minBaseLocation){e._lastBindCallId=this._bindCallId;return t}
let i=0;let s=this._nextBindBaseIndex;for(;i<2;){if(s>=this._maxBindings){s=this._minBaseLocation;i++}
let r=this._boundBufferBases[s];if(r&&r._lastBindCallId===this._bindCallId){s++;continue}
break}
t=s;this._nextBindBaseIndex=s+1;return i>=2?-1:(e._lastBindCallId=this._bindCallId,this._boundBufferBases[t]=null,t)}
getLastBindBaseLocation(e){let t=e._lastBindBaseLocation;return this._boundBufferBases[t]===e?t:-1}
bindBufferRange(e,t,i,s){let{_gl:r}=this;if(!i){i=0}
if(!t){t=0}
this._boundBufferBases[t]=null;r.bindBufferRange(r.UNIFORM_BUFFER,t||0,e.buffer,i*256,s||256)}
updateBuffer(e){let{_gl:t}=this;let i=this.getGlBuffer(e);if(e._updateID===i.updateID){return i}
i.updateID=e._updateID;t.bindBuffer(i.type,i.buffer);let s=e.data;let r=e.descriptor.usage&ye.STATIC?t.STATIC_DRAW:t.DYNAMIC_DRAW;if(s){if(i.byteLength>=s.byteLength){t.bufferSubData(i.type,0,s,0,e._updateSize/s.BYTES_PER_ELEMENT)}else{i.byteLength=s.byteLength;t.bufferData(i.type,s,r)}}else{i.byteLength=e.descriptor.size;t.bufferData(i.type,i.byteLength,r)}
return i}
destroyAll(){let e=this._gl;for(let t in this._gpuBuffers)e.deleteBuffer(this._gpuBuffers[t].buffer);this._gpuBuffers=Object.create(null)}
onBufferDestroy(e,t){let i=this._gpuBuffers[e.uid];let s=this._gl;if(!t){s.deleteBuffer(i.buffer)}
this._gpuBuffers[e.uid]=null}
createGLBuffer(e){let{_gl:t}=this;let i=kr.ARRAY_BUFFER;if(e.descriptor.usage&ye.INDEX){i=kr.ELEMENT_ARRAY_BUFFER}else if(e.descriptor.usage&ye.UNIFORM){i=kr.UNIFORM_BUFFER}
let s=new kh(t.createBuffer(),i);this._gpuBuffers[e.uid]=s;e.on("destroy",this.onBufferDestroy,this);return s}
resetState(){this._boundBufferBases=Object.create(null)}};Hn.extension={type:[I.WebGLSystem],name:"buffer"};var By=Object.defineProperty;var Fy=Object.defineProperties;var Dy=Object.getOwnPropertyDescriptors;var qb=Object.getOwnPropertySymbols;var ky=Object.prototype.hasOwnProperty;var Uy=Object.prototype.propertyIsEnumerable;var Zb=(a,e,t)=>e in a?By(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var Mr=(a,e)=>{for(var t in e||(e={}))if(ky.call(e,t)){Zb(a,t,e[t])}
if(qb){for(var t of qb(e))if(Uy.call(e,t)){Zb(a,t,e[t])}}
return a};var Uh=class _3{constructor(e){this.supports={uint32Indices:!0,uniformBufferObject:!0,vertexArrayObject:!0,srgbTextures:!0,nonPowOf2wrapping:!0,msaa:!0,nonPowOf2mipmaps:!0};this._renderer=e;this.extensions=Object.create(null);this.handleContextLost=this.handleContextLost.bind(this);this.handleContextRestored=this.handleContextRestored.bind(this)}
get isLost(){return!this.gl||this.gl.isContextLost()}
contextChange(e){this.gl=e;this._renderer.gl=e}
init(e){var t;var i;e=Mr(Mr({},_3.defaultOptions),e);let s=this.multiView=e.multiView;if(e.context&&s){Qt("Renderer created with both a context and multiview enabled. Disabling multiView as both cannot work together.");s=!1}
if(s){this.canvas=n8.createCanvas(this._renderer.canvas.width,this._renderer.canvas.height)}else{this.canvas=this._renderer.view.canvas}
if(e.context){this.initFromContext(e.context)}else{let r=this._renderer.background.alpha<1;let n=(t=e.premultipliedAlpha)!=null?t:!0;let d=e.antialias&&!this._renderer.backBuffer.useBackBuffer;this.createContext(e.preferWebGLVersion,{alpha:r,premultipliedAlpha:n,antialias:d,stencil:!0,preserveDrawingBuffer:e.preserveDrawingBuffer,powerPreference:(i=e.powerPreference)!=null?i:"default"})}}
ensureCanvasSize(e){if(!this.multiView){if(e!==this.canvas){Qt("multiView is disabled, but targetCanvas is not the main canvas")}
return}
let{canvas:t}=this;if(t.width<e.width||t.height<e.height){t.width=Math.max(e.width,e.width);t.height=Math.max(e.height,e.height)}}
initFromContext(e){this.gl=e;this.webGLVersion=e instanceof WebGLRenderingContext?1:2;this.getExtensions();this.validateContext(e);this._renderer.runners.contextChange.emit(e);let t=this._renderer.view.canvas;t.addEventListener("webglcontextlost",this.handleContextLost,!1);t.addEventListener("webglcontextrestored",this.handleContextRestored,!1)}
createContext(e,t){let i;let s=this.canvas;if(e===2){i=s.getContext("webgl2",t)}
if(!i&&(i=s.getContext("webgl",t),!i)){throw new Error("This browser does not support WebGL. Try using the canvas renderer")}
this.gl=i;this.initFromContext(this.gl)}
getExtensions(){let{gl:e}=this;let t={anisotropicFiltering:e.getExtension("EXT_texture_filter_anisotropic"),floatTextureLinear:e.getExtension("OES_texture_float_linear"),s3tc:e.getExtension("WEBGL_compressed_texture_s3tc"),s3tc_sRGB:e.getExtension("WEBGL_compressed_texture_s3tc_srgb"),etc:e.getExtension("WEBGL_compressed_texture_etc"),etc1:e.getExtension("WEBGL_compressed_texture_etc1"),pvrtc:e.getExtension("WEBGL_compressed_texture_pvrtc")||e.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc"),atc:e.getExtension("WEBGL_compressed_texture_atc"),astc:e.getExtension("WEBGL_compressed_texture_astc"),bptc:e.getExtension("EXT_texture_compression_bptc"),rgtc:e.getExtension("EXT_texture_compression_rgtc"),loseContext:e.getExtension("WEBGL_lose_context")};if(this.webGLVersion===1){this.extensions=Fy(Mr({},t),Dy({drawBuffers:e.getExtension("WEBGL_draw_buffers"),depthTexture:e.getExtension("WEBGL_depth_texture"),vertexArrayObject:e.getExtension("OES_vertex_array_object")||e.getExtension("MOZ_OES_vertex_array_object")||e.getExtension("WEBKIT_OES_vertex_array_object"),uint32ElementIndex:e.getExtension("OES_element_index_uint"),floatTexture:e.getExtension("OES_texture_float"),floatTextureLinear:e.getExtension("OES_texture_float_linear"),textureHalfFloat:e.getExtension("OES_texture_half_float"),textureHalfFloatLinear:e.getExtension("OES_texture_half_float_linear"),vertexAttribDivisorANGLE:e.getExtension("ANGLE_instanced_arrays"),srgb:e.getExtension("EXT_sRGB")}))}else{this.extensions=Fy(Mr({},t),Dy({colorBufferFloat:e.getExtension("EXT_color_buffer_float")}));let i=e.getExtension("WEBGL_provoking_vertex");if(i){i.provokingVertexWEBGL(i.FIRST_VERTEX_CONVENTION_WEBGL)}}}
handleContextLost(e){e.preventDefault();if(this._contextLossForced){this._contextLossForced=!1;setTimeout(()=>{var t;if(this.gl.isContextLost()){if(!((t=this.extensions.loseContext)==null)){t.restoreContext()}}},0)}}
handleContextRestored(){this._renderer.runners.contextChange.emit(this.gl)}
destroy(){var e;let t=this._renderer.view.canvas;this._renderer=null;t.removeEventListener("webglcontextlost",this.handleContextLost);t.removeEventListener("webglcontextrestored",this.handleContextRestored);this.gl.useProgram(null);if(!((e=this.extensions.loseContext)==null)){e.loseContext()}}
forceContextLoss(){var e;if(!((e=this.extensions.loseContext)==null)){e.loseContext()}
this._contextLossForced=!0}
validateContext(e){let t=e.getContextAttributes();if(t){t.stencil}
let i=this.supports;let s=this.webGLVersion===2;let r=this.extensions;i.uint32Indices=s||!!r.uint32ElementIndex;i.uniformBufferObject=s;i.vertexArrayObject=s||!!r.vertexArrayObject;i.srgbTextures=s||!!r.srgb;i.nonPowOf2wrapping=s;i.nonPowOf2mipmaps=s;i.msaa=s;i.uint32Indices}};Uh.extension={type:[I.WebGLSystem],name:"context"};Uh.defaultOptions={context:null,premultipliedAlpha:!0,preserveDrawingBuffer:!1,powerPreference:undefined,preferWebGLVersion:2,multiView:!1};function y3(a,e){var t;var i;var s;for(let r in a.attributes){let n=a.attributes[r];let d=e[r];if(d){if(!((t=n.format)!=null)){n.format=d.format}
if(!((i=n.offset)!=null)){n.offset=d.offset}
if(!((s=n.instance)!=null)){n.instance=d.instance}}else{Qt(`Attribute ${r} is not present in the shader, but is present in the geometry. Unable to infer attribute details.`)}}
Ny(a)}
function Ny(a){var e;var t;let{buffers:i,attributes:s}=a;let r={};let n={};for(let d in i){let h=i[d];r[h.uid]=0;n[h.uid]=0}
for(let d in s){let h=s[d];r[h.buffer.uid]+=Ca(h.format).stride}
for(let d in s){let h=s[d];if(!((e=h.stride)!=null)){h.stride=r[h.buffer.uid]}
if(!((t=h.start)!=null)){h.start=n[h.buffer.uid]}
n[h.buffer.uid]+=Ca(h.format).stride}}
var Lh=(a=>(a[a.RGBA=6408]="RGBA",a[a.RGB=6407]="RGB",a[a.RG=33319]="RG",a[a.RED=6403]="RED",a[a.RGBA_INTEGER=36249]="RGBA_INTEGER",a[a.RGB_INTEGER=36248]="RGB_INTEGER",a[a.RG_INTEGER=33320]="RG_INTEGER",a[a.RED_INTEGER=36244]="RED_INTEGER",a[a.ALPHA=6406]="ALPHA",a[a.LUMINANCE=6409]="LUMINANCE",a[a.LUMINANCE_ALPHA=6410]="LUMINANCE_ALPHA",a[a.DEPTH_COMPONENT=6402]="DEPTH_COMPONENT",a[a.DEPTH_STENCIL=34041]="DEPTH_STENCIL",a))(Lh||{});var x3=(a=>(a[a.TEXTURE_2D=3553]="TEXTURE_2D",a[a.TEXTURE_CUBE_MAP=34067]="TEXTURE_CUBE_MAP",a[a.TEXTURE_2D_ARRAY=35866]="TEXTURE_2D_ARRAY",a[a.TEXTURE_CUBE_MAP_POSITIVE_X=34069]="TEXTURE_CUBE_MAP_POSITIVE_X",a[a.TEXTURE_CUBE_MAP_NEGATIVE_X=34070]="TEXTURE_CUBE_MAP_NEGATIVE_X",a[a.TEXTURE_CUBE_MAP_POSITIVE_Y=34071]="TEXTURE_CUBE_MAP_POSITIVE_Y",a[a.TEXTURE_CUBE_MAP_NEGATIVE_Y=34072]="TEXTURE_CUBE_MAP_NEGATIVE_Y",a[a.TEXTURE_CUBE_MAP_POSITIVE_Z=34073]="TEXTURE_CUBE_MAP_POSITIVE_Z",a[a.TEXTURE_CUBE_MAP_NEGATIVE_Z=34074]="TEXTURE_CUBE_MAP_NEGATIVE_Z",a))(x3||{});var jy=(a=>(a[a.CLAMP=33071]="CLAMP",a[a.REPEAT=10497]="REPEAT",a[a.MIRRORED_REPEAT=33648]="MIRRORED_REPEAT",a))(jy||{});var xe=(a=>(a[a.UNSIGNED_BYTE=5121]="UNSIGNED_BYTE",a[a.UNSIGNED_SHORT=5123]="UNSIGNED_SHORT",a[a.UNSIGNED_SHORT_5_6_5=33635]="UNSIGNED_SHORT_5_6_5",a[a.UNSIGNED_SHORT_4_4_4_4=32819]="UNSIGNED_SHORT_4_4_4_4",a[a.UNSIGNED_SHORT_5_5_5_1=32820]="UNSIGNED_SHORT_5_5_5_1",a[a.UNSIGNED_INT=5125]="UNSIGNED_INT",a[a.UNSIGNED_INT_10F_11F_11F_REV=35899]="UNSIGNED_INT_10F_11F_11F_REV",a[a.UNSIGNED_INT_2_10_10_10_REV=33640]="UNSIGNED_INT_2_10_10_10_REV",a[a.UNSIGNED_INT_24_8=34042]="UNSIGNED_INT_24_8",a[a.UNSIGNED_INT_5_9_9_9_REV=35902]="UNSIGNED_INT_5_9_9_9_REV",a[a.BYTE=5120]="BYTE",a[a.SHORT=5122]="SHORT",a[a.INT=5124]="INT",a[a.FLOAT=5126]="FLOAT",a[a.FLOAT_32_UNSIGNED_INT_24_8_REV=36269]="FLOAT_32_UNSIGNED_INT_24_8_REV",a[a.HALF_FLOAT=36193]="HALF_FLOAT",a))(xe||{});var Jb={uint8x2:xe.UNSIGNED_BYTE,uint8x4:xe.UNSIGNED_BYTE,sint8x2:xe.BYTE,sint8x4:xe.BYTE,unorm8x2:xe.UNSIGNED_BYTE,unorm8x4:xe.UNSIGNED_BYTE,snorm8x2:xe.BYTE,snorm8x4:xe.BYTE,uint16x2:xe.UNSIGNED_SHORT,uint16x4:xe.UNSIGNED_SHORT,sint16x2:xe.SHORT,sint16x4:xe.SHORT,unorm16x2:xe.UNSIGNED_SHORT,unorm16x4:xe.UNSIGNED_SHORT,snorm16x2:xe.SHORT,snorm16x4:xe.SHORT,float16x2:xe.HALF_FLOAT,float16x4:xe.HALF_FLOAT,float32:xe.FLOAT,float32x2:xe.FLOAT,float32x3:xe.FLOAT,float32x4:xe.FLOAT,uint32:xe.UNSIGNED_INT,uint32x2:xe.UNSIGNED_INT,uint32x3:xe.UNSIGNED_INT,uint32x4:xe.UNSIGNED_INT,sint32:xe.INT,sint32x2:xe.INT,sint32x3:xe.INT,sint32x4:xe.INT};function Xy(a){var e;return(e=Jb[a])!=null?e:Jb.float32}
var Hy={"point-list":0,"line-list":1,"line-strip":3,"triangle-list":4,"triangle-strip":5};var zn=class{constructor(e){this._geometryVaoHash=Object.create(null);this._renderer=e;this._activeGeometry=null;this._activeVao=null;this.hasVao=!0;this.hasInstance=!0;this._renderer.renderableGC.addManagedHash(this,"_geometryVaoHash")}
contextChange(){let e=this.gl=this._renderer.gl;if(!this._renderer.context.supports.vertexArrayObject){throw new Error("[PixiJS] Vertex Array Objects are not supported on this device")}
let t=this._renderer.context.extensions.vertexArrayObject;if(t){e.createVertexArray=()=>t.createVertexArrayOES();e.bindVertexArray=s=>t.bindVertexArrayOES(s);e.deleteVertexArray=s=>t.deleteVertexArrayOES(s)}
let i=this._renderer.context.extensions.vertexAttribDivisorANGLE;if(i){e.drawArraysInstanced=(s,r,n,d)=>{i.drawArraysInstancedANGLE(s,r,n,d)};e.drawElementsInstanced=(s,r,n,d,h)=>{i.drawElementsInstancedANGLE(s,r,n,d,h)};e.vertexAttribDivisor=(s,r)=>i.vertexAttribDivisorANGLE(s,r)}
this._activeGeometry=null;this._activeVao=null;this._geometryVaoHash=Object.create(null)}
bind(e,t){let i=this.gl;this._activeGeometry=e;let s=this.getVao(e,t);if(this._activeVao!==s){this._activeVao=s;i.bindVertexArray(s)}
this.updateBuffers()}
resetState(){this.unbind()}
updateBuffers(){let e=this._activeGeometry;let t=this._renderer.buffer;for(let i=0;i<e.buffers.length;i++){let s=e.buffers[i];t.updateBuffer(s)}}
checkCompatibility(e,t){let i=e.attributes;let s=t._attributeData;for(let r in s)if(!i[r]){throw new Error(`shader and geometry incompatible, geometry missing the "${r}" attribute`)}}
getSignature(e,t){let i=e.attributes;let s=t._attributeData;let r=["g",e.uid];for(let n in i)if(s[n]){r.push(n,s[n].location)}
return r.join("-")}
getVao(e,t){var i;return((i=this._geometryVaoHash[e.uid])==null?undefined:i[t._key])||this.initGeometryVao(e,t)}
initGeometryVao(e,t,i=!0){let s=this._renderer.gl;let r=this._renderer.buffer;this._renderer.shader._getProgramData(t);this.checkCompatibility(e,t);let n=this.getSignature(e,t);if(!this._geometryVaoHash[e.uid]){this._geometryVaoHash[e.uid]=Object.create(null);e.on("destroy",this.onGeometryDestroy,this)}
let d=this._geometryVaoHash[e.uid];let h=d[n];if(h){d[t._key]=h;return h}
y3(e,t._attributeData);let l=e.buffers;h=s.createVertexArray();s.bindVertexArray(h);for(let f=0;f<l.length;f++){let p=l[f];r.bind(p)}
this.activateVao(e,t);d[t._key]=h;d[n]=h;s.bindVertexArray(null);return h}
onGeometryDestroy(e,t){let i=this._geometryVaoHash[e.uid];let s=this.gl;if(i){if(t){for(let r in i){if(this._activeVao!==i[r]){this.unbind()}
s.deleteVertexArray(i[r])}}
this._geometryVaoHash[e.uid]=null}}
destroyAll(e=!1){let t=this.gl;for(let i in this._geometryVaoHash){if(e){for(let s in this._geometryVaoHash[i]){let r=this._geometryVaoHash[i];if(this._activeVao!==r){this.unbind()}
t.deleteVertexArray(r[s])}}
this._geometryVaoHash[i]=null}}
activateVao(e,t){var i;var s;let r=this._renderer.gl;let n=this._renderer.buffer;let d=e.attributes;if(e.indexBuffer){n.bind(e.indexBuffer)}
let h=null;for(let l in d){let f=d[l];let p=f.buffer;let _=n.getGlBuffer(p);let m=t._attributeData[l];if(m){if(h!==_){n.bind(p);h=_}
let v=m.location;r.enableVertexAttribArray(v);let T=Ca(f.format);let w=Xy(f.format);if(((i=m.format)==null?undefined:i.substring(1,4))==="int"){r.vertexAttribIPointer(v,T.size,w,f.stride,f.offset)}else{r.vertexAttribPointer(v,T.size,w,T.normalised,f.stride,f.offset)}
if(f.instance){if(this.hasInstance){let P=(s=f.divisor)!=null?s:1;r.vertexAttribDivisor(v,P)}else{throw new Error("geometry error, GPU Instancing is not supported on this device")}}}}}
draw(e,t,i,s){let{gl:r}=this._renderer;let n=this._activeGeometry;let d=Hy[e||n.topology];if(!(s!=null)){s=n.instanceCount}
if(n.indexBuffer){let h=n.indexBuffer.data.BYTES_PER_ELEMENT;let l=h===2?r.UNSIGNED_SHORT:r.UNSIGNED_INT;if(s>1){r.drawElementsInstanced(d,t||n.indexBuffer.data.length,l,(i||0)*h,s)}else{r.drawElements(d,t||n.indexBuffer.data.length,l,(i||0)*h)}}else if(s>1){r.drawArraysInstanced(d,i||0,t||n.getSize(),s)}else{r.drawArrays(d,i||0,t||n.getSize())}
return this}
unbind(){this.gl.bindVertexArray(null);this._activeVao=null;this._activeGeometry=null}
destroy(){this._renderer=null;this.gl=null;this._activeVao=null;this._activeGeometry=null}};zn.extension={type:[I.WebGLSystem],name:"geometry"};var zy=Object.defineProperty;var e1=Object.getOwnPropertySymbols;var Vy=Object.prototype.hasOwnProperty;var Wy=Object.prototype.propertyIsEnumerable;var t1=(a,e,t)=>e in a?zy(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var a1=(a,e)=>{for(var t in e||(e={}))if(Vy.call(e,t)){t1(a,t,e[t])}
if(e1){for(var t of e1(e))if(Wy.call(e,t)){t1(a,t,e[t])}}
return a};var Yy=new qt({attributes:{aPosition:[-1,-1,3,-1,-1,3]}});var Nh=class v3{constructor(e){this.useBackBuffer=!1;this._useBackBufferThisRender=!1;this._renderer=e}
init(e={}){let{useBackBuffer:t,antialias:i}=a1(a1({},v3.defaultOptions),e);this.useBackBuffer=t;this._antialias=i;if(!this._renderer.context.supports.msaa){Qt("antialiasing, is not supported on when using the back buffer");this._antialias=!1}
this._state=Qd.for2d();let s=new kp({vertex:`
attribute vec2 aPosition;
out vec2 vUv;

void main() {
gl_Position = vec4(aPosition, 0.0, 1.0);

vUv = (aPosition + 1.0) / 2.0;

// flip dem UVs
vUv.y = 1.0 - vUv.y;
}`,fragment:`
in vec2 vUv;
out vec4 finalColor;

uniform sampler2D uTexture;

void main() {
finalColor = texture(uTexture, vUv);
}`,name:"big-triangle"});this._bigTriangleShader=new ht({glProgram:s,resources:{uTexture:W.WHITE.source}})}
renderStart(e){let t=this._renderer.renderTarget.getRenderTarget(e.target);this._useBackBufferThisRender=this.useBackBuffer&&!!t.isRoot;if(this._useBackBufferThisRender){let i=this._renderer.renderTarget.getRenderTarget(e.target);this._targetTexture=i.colorTexture;e.target=this._getBackBufferTexture(i.colorTexture)}}
renderEnd(){this._presentBackBuffer()}
_presentBackBuffer(){let e=this._renderer;e.renderTarget.finishRenderPass();if(this._useBackBufferThisRender){e.renderTarget.bind(this._targetTexture,!1);this._bigTriangleShader.resources.uTexture=this._backBufferTexture.source;e.encoder.draw({geometry:Yy,shader:this._bigTriangleShader,state:this._state})}}
_getBackBufferTexture(e){this._backBufferTexture=this._backBufferTexture||new W({source:new bp({width:e.width,height:e.height,resolution:e._resolution,antialias:this._antialias})});this._backBufferTexture.source.resize(e.width,e.height,e._resolution);return this._backBufferTexture}
destroy(){if(this._backBufferTexture){this._backBufferTexture.destroy();this._backBufferTexture=null}}};Nh.extension={type:[I.WebGLSystem],name:"backBuffer",priority:1};Nh.defaultOptions={useBackBuffer:!1};var Vn=class{constructor(e){this._colorMaskCache=15;this._renderer=e}
setMask(e){if(this._colorMaskCache!==e){this._colorMaskCache=e;this._renderer.gl.colorMask(!!(e&8),!!(e&4),!!(e&2),!!(e&1))}}};Vn.extension={type:[I.WebGLSystem],name:"colorMask"};var Wn=class{constructor(e){this.commandFinished=Promise.resolve();this._renderer=e}
setGeometry(e,t){this._renderer.geometry.bind(e,t.glProgram)}
finishRenderPass(){}
draw(e){let t=this._renderer;let{geometry:i,shader:s,state:r,skipSync:n,topology:d,size:h,start:l,instanceCount:f}=e;t.shader.bind(s,n);t.geometry.bind(i,t.shader._activeProgram);if(r){t.state.set(r)}
t.geometry.draw(d,h,l,f??i.instanceCount)}
destroy(){this._renderer=null}};Wn.extension={type:[I.WebGLSystem],name:"encoder"};var jh=class{constructor(){this.width=-1;this.height=-1;this.msaa=!1;this.msaaRenderBuffer=[]}};var wa=[];wa[Le.NONE]=undefined;wa[Le.DISABLED]={stencilWriteMask:0,stencilReadMask:0};wa[Le.RENDERING_MASK_ADD]={stencilFront:{compare:"equal",passOp:"increment-clamp"},stencilBack:{compare:"equal",passOp:"increment-clamp"}};wa[Le.RENDERING_MASK_REMOVE]={stencilFront:{compare:"equal",passOp:"decrement-clamp"},stencilBack:{compare:"equal",passOp:"decrement-clamp"}};wa[Le.MASK_ACTIVE]={stencilWriteMask:0,stencilFront:{compare:"equal",passOp:"keep"},stencilBack:{compare:"equal",passOp:"keep"}};wa[Le.INVERSE_MASK_ACTIVE]={stencilWriteMask:0,stencilFront:{compare:"not-equal",passOp:"replace"},stencilBack:{compare:"not-equal",passOp:"replace"}};var Yn=class{constructor(e){this._stencilCache={enabled:!1,stencilReference:0,stencilMode:Le.NONE};this._renderTargetStencilState=Object.create(null);e.renderTarget.onRenderTargetChange.add(this)}
contextChange(e){this._gl=e;this._comparisonFuncMapping={always:e.ALWAYS,never:e.NEVER,equal:e.EQUAL,"not-equal":e.NOTEQUAL,less:e.LESS,"less-equal":e.LEQUAL,greater:e.GREATER,"greater-equal":e.GEQUAL};this._stencilOpsMapping={keep:e.KEEP,zero:e.ZERO,replace:e.REPLACE,invert:e.INVERT,"increment-clamp":e.INCR,"decrement-clamp":e.DECR,"increment-wrap":e.INCR_WRAP,"decrement-wrap":e.DECR_WRAP};this._stencilCache.enabled=!1;this._stencilCache.stencilMode=Le.NONE;this._stencilCache.stencilReference=0}
onRenderTargetChange(e){if(this._activeRenderTarget===e){return}
this._activeRenderTarget=e;let t=this._renderTargetStencilState[e.uid];if(!t){t=this._renderTargetStencilState[e.uid]={stencilMode:Le.DISABLED,stencilReference:0}}
this.setStencilMode(t.stencilMode,t.stencilReference)}
setStencilMode(e,t){let i=this._renderTargetStencilState[this._activeRenderTarget.uid];let s=this._gl;let r=wa[e];let n=this._stencilCache;i.stencilMode=e;i.stencilReference=t;if(e===Le.DISABLED){if(this._stencilCache.enabled){this._stencilCache.enabled=!1;s.disable(s.STENCIL_TEST)}
return}
if(!this._stencilCache.enabled){this._stencilCache.enabled=!0;s.enable(s.STENCIL_TEST)}
if(e!==n.stencilMode||n.stencilReference!==t){n.stencilMode=e;n.stencilReference=t;s.stencilFunc(this._comparisonFuncMapping[r.stencilBack.compare],t,255);s.stencilOp(s.KEEP,s.KEEP,this._stencilOpsMapping[r.stencilBack.passOp])}}};Yn.extension={type:[I.WebGLSystem],name:"stencil"};var $n=class{constructor(e){this._syncFunctionHash=Object.create(null);this._adaptor=e;this._systemCheck()}
_systemCheck(){if(!A2()){throw new Error("Current environment does not allow unsafe-eval, please use pixi.js/unsafe-eval module to enable support.")}}
ensureUniformGroup(e){let t=this.getUniformGroupData(e);if(!e.buffer){e.buffer=new st({data:new Float32Array(t.layout.size/4),usage:ye.UNIFORM|ye.COPY_DST})}}
getUniformGroupData(e){return this._syncFunctionHash[e._signature]||this._initUniformGroup(e)}
_initUniformGroup(e){let t=e._signature;let i=this._syncFunctionHash[t];if(!i){let s=Object.keys(e.uniformStructures).map(d=>e.uniformStructures[d]);let r=this._adaptor.createUboElements(s);let n=this._generateUboSync(r.uboElements);i=this._syncFunctionHash[t]={layout:r,syncFunction:n}}
return this._syncFunctionHash[t]}
_generateUboSync(e){return this._adaptor.generateUboSync(e)}
syncUniformGroup(e,t,i){let s=this.getUniformGroupData(e);if(!e.buffer){e.buffer=new st({data:new Float32Array(s.layout.size/4),usage:ye.UNIFORM|ye.COPY_DST})}
let r=null;if(!t){t=e.buffer.data;r=e.buffer.dataInt32}
if(!i){i=0}
s.syncFunction(e.uniforms,t,r,i);return!0}
updateUniformGroup(e){if(e.isStatic&&!e._dirtyId){return!1}
e._dirtyId=0;let t=this.syncUniformGroup(e);e.buffer.update();return t}
destroy(){this._syncFunctionHash=null}};var T3={f32:4,i32:4,"vec2<f32>":8,"vec3<f32>":12,"vec4<f32>":16,"vec2<i32>":8,"vec3<i32>":12,"vec4<i32>":16,"mat2x2<f32>":32,"mat3x3<f32>":48,"mat4x4<f32>":64};function Ky(a){let e=a.map(r=>({data:r,offset:0,size:0}));let i=0;let s=0;for(let r=0;r<e.length;r++){let n=e[r];i=T3[n.data.type];if(!i){throw new Error(`Unknown type ${n.data.type}`)}
if(n.data.size>1){i=Math.max(i,16)*n.data.size}
let d=i===12?16:i;n.size=i;let h=s%16;if(h>0&&16-h<d){s+=(16-h)%16}else{s+=(i-h%i)%i}
n.offset=s;s+=i}
s=Math.ceil(s/16)*16;return{uboElements:e,size:s}}
var Ya=[{type:"mat3x3<f32>",test:a=>a.value.a!==undefined,ubo:`
var matrix = uv[name].toArray(true);
data[offset] = matrix[0];
data[offset + 1] = matrix[1];
data[offset + 2] = matrix[2];
data[offset + 4] = matrix[3];
data[offset + 5] = matrix[4];
data[offset + 6] = matrix[5];
data[offset + 8] = matrix[6];
data[offset + 9] = matrix[7];
data[offset + 10] = matrix[8];
`,uniform:`
gl.uniformMatrix3fv(ud[name].location, false, uv[name].toArray(true));
`},{type:"vec4<f32>",test:a=>a.type==="vec4<f32>"&&a.size===1&&a.value.width!==undefined,ubo:`
v = uv[name];
data[offset] = v.x;
data[offset + 1] = v.y;
data[offset + 2] = v.width;
data[offset + 3] = v.height;
`,uniform:`
cv = ud[name].value;
v = uv[name];
if (cv[0] !== v.x || cv[1] !== v.y || cv[2] !== v.width || cv[3] !== v.height) {
cv[0] = v.x;
cv[1] = v.y;
cv[2] = v.width;
cv[3] = v.height;
gl.uniform4f(ud[name].location, v.x, v.y, v.width, v.height);
}
`},{type:"vec2<f32>",test:a=>a.type==="vec2<f32>"&&a.size===1&&a.value.x!==undefined,ubo:`
v = uv[name];
data[offset] = v.x;
data[offset + 1] = v.y;
`,uniform:`
cv = ud[name].value;
v = uv[name];
if (cv[0] !== v.x || cv[1] !== v.y) {
cv[0] = v.x;
cv[1] = v.y;
gl.uniform2f(ud[name].location, v.x, v.y);
}
`},{type:"vec4<f32>",test:a=>a.type==="vec4<f32>"&&a.size===1&&a.value.red!==undefined,ubo:`
v = uv[name];
data[offset] = v.red;
data[offset + 1] = v.green;
data[offset + 2] = v.blue;
data[offset + 3] = v.alpha;
`,uniform:`
cv = ud[name].value;
v = uv[name];
if (cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue || cv[3] !== v.alpha) {
cv[0] = v.red;
cv[1] = v.green;
cv[2] = v.blue;
cv[3] = v.alpha;
gl.uniform4f(ud[name].location, v.red, v.green, v.blue, v.alpha);
}
`},{type:"vec3<f32>",test:a=>a.type==="vec3<f32>"&&a.size===1&&a.value.red!==undefined,ubo:`
v = uv[name];
data[offset] = v.red;
data[offset + 1] = v.green;
data[offset + 2] = v.blue;
`,uniform:`
cv = ud[name].value;
v = uv[name];
if (cv[0] !== v.red || cv[1] !== v.green || cv[2] !== v.blue) {
cv[0] = v.red;
cv[1] = v.green;
cv[2] = v.blue;
gl.uniform3f(ud[name].location, v.red, v.green, v.blue);
}
`}];function S3(a,e,t,i){let s=[`
var v = null;
var v2 = null;
var t = 0;
var index = 0;
var name = null;
var arrayOffset = null;
`];let r=0;for(let d=0;d<a.length;d++){let h=a[d];let l=h.data.name;let f=!1;let p=0;for(let _=0;_<Ya.length;_++){if(Ya[_].test(h.data)){p=h.offset/4;s.push(`name = "${l}";`,`offset += ${p - r};`,Ya[_][e]||Ya[_].ubo);f=!0;break}}
if(!f){if(h.data.size>1){p=h.offset/4;s.push(t(h,p-r))}else{let _=i[h.data.type];p=h.offset/4;s.push(`
v = uv.${l};
offset += ${p - r};
${_};
`)}}
r=p}
let n=s.join(`
`);return new Function("uv","data","dataInt32","offset",n)}
var qy=Object.defineProperty;var Zy=Object.defineProperties;var Qy=Object.getOwnPropertyDescriptors;var i1=Object.getOwnPropertySymbols;var Jy=Object.prototype.hasOwnProperty;var ex=Object.prototype.propertyIsEnumerable;var s1=(a,e,t)=>e in a?qy(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var tx=(a,e)=>{for(var t in e||(e={}))if(Jy.call(e,t)){s1(a,t,e[t])}
if(i1){for(var t of i1(e))if(ex.call(e,t)){s1(a,t,e[t])}}
return a};var w3={f32:`
data[offset] = v;`,i32:`
dataInt32[offset] = v;`,"vec2<f32>":`
data[offset] = v[0];
data[offset + 1] = v[1];`,"vec3<f32>":`
data[offset] = v[0];
data[offset + 1] = v[1];
data[offset + 2] = v[2];`,"vec4<f32>":`
data[offset] = v[0];
data[offset + 1] = v[1];
data[offset + 2] = v[2];
data[offset + 3] = v[3];`,"vec2<i32>":`
dataInt32[offset] = v[0];
dataInt32[offset + 1] = v[1];`,"vec3<i32>":`
dataInt32[offset] = v[0];
dataInt32[offset + 1] = v[1];
dataInt32[offset + 2] = v[2];`,"vec4<i32>":`
dataInt32[offset] = v[0];
dataInt32[offset + 1] = v[1];
dataInt32[offset + 2] = v[2];
dataInt32[offset + 3] = v[3];`,"mat2x2<f32>":`
data[offset] = v[0];
data[offset + 1] = v[1];
data[offset + 4] = v[2];
data[offset + 5] = v[3];`,"mat3x3<f32>":`
data[offset] = v[0];
data[offset + 1] = v[1];
data[offset + 2] = v[2];
data[offset + 4] = v[3];
data[offset + 5] = v[4];
data[offset + 6] = v[5];
data[offset + 8] = v[6];
data[offset + 9] = v[7];
data[offset + 10] = v[8];`,"mat4x4<f32>":`
for (let i = 0; i < 16; i++) {
data[offset + i] = v[i];
}`,"mat3x2<f32>":`
for (let i = 0; i < ${6}; i++) {
data[offset + (((i / ${3})|0) * 4) + (i % ${3})] = v[i];
}
`,"mat4x2<f32>":`
for (let i = 0; i < ${8}; i++) {
data[offset + (((i / ${4})|0) * 4) + (i % ${4})] = v[i];
}
`,"mat2x3<f32>":`
for (let i = 0; i < ${6}; i++) {
data[offset + (((i / ${2})|0) * 4) + (i % ${2})] = v[i];
}
`,"mat4x3<f32>":`
for (let i = 0; i < ${12}; i++) {
data[offset + (((i / ${4})|0) * 4) + (i % ${4})] = v[i];
}
`,"mat2x4<f32>":`
for (let i = 0; i < ${8}; i++) {
data[offset + (((i / ${2})|0) * 4) + (i % ${2})] = v[i];
}
`,"mat3x4<f32>":`
for (let i = 0; i < ${12}; i++) {
data[offset + (((i / ${3})|0) * 4) + (i % ${3})] = v[i];
}
`};var ix=Zy(tx({},w3),Qy({"mat2x2<f32>":`
data[offset] = v[0];
data[offset + 1] = v[1];
data[offset + 2] = v[2];
data[offset + 3] = v[3];
`}));function sx(a,e){let t=Math.max(T3[a.data.type]/16,1);let i=a.data.value.length/a.data.size;let s=(4-i%4)%4;let r=a.data.type.indexOf("i32")>=0?"dataInt32":"data";return `
v = uv.${a.data.name};
offset += ${e};

arrayOffset = offset;

t = 0;

for(var i=0; i < ${a.data.size * t}; i++)
{
for(var j = 0; j < ${i}; j++)
{
${r}[arrayOffset++] = v[t++];
}
${s !== 0 ? `arrayOffset+=${s};` : ""}
}
`}
function rx(a){return S3(a,"uboStd40",sx,w3)}
var Kn=class extends $n{constructor(){super({createUboElements:Ky,generateUboSync:rx})}};Kn.extension={type:[I.WebGLSystem],name:"ubo"};var Xh=class{constructor(){this._clearColorCache=[0,0,0,0];this._viewPortCache=new we()}
init(e,t){this._renderer=e;this._renderTargetSystem=t;e.runners.contextChange.add(this)}
contextChange(){this._clearColorCache=[0,0,0,0];this._viewPortCache=new we()}
copyToTexture(e,t,i,s,r){let n=this._renderTargetSystem;let d=this._renderer;let h=n.getGpuRenderTarget(e);let l=d.gl;this.finishRenderPass(e);l.bindFramebuffer(l.FRAMEBUFFER,h.resolveTargetFramebuffer);d.texture.bind(t,0);l.copyTexSubImage2D(l.TEXTURE_2D,0,r.x,r.y,i.x,i.y,s.width,s.height);return t}
startRenderPass(e,t=!0,i,s){let r=this._renderTargetSystem;let n=e.colorTexture;let d=r.getGpuRenderTarget(e);let h=s.y;if(e.isRoot){h=n.pixelHeight-s.height}
e.colorTextures.forEach(p=>{this._renderer.texture.unbind(p)});let l=this._renderer.gl;l.bindFramebuffer(l.FRAMEBUFFER,d.framebuffer);let f=this._viewPortCache;if(f.x!==s.x||f.y!==h||f.width!==s.width||f.height!==s.height){f.x=s.x;f.y=h;f.width=s.width;f.height=s.height;l.viewport(s.x,h,s.width,s.height)}
if(!d.depthStencilRenderBuffer&&(e.stencil||e.depth)){this._initStencil(d)}
this.clear(e,t,i)}
finishRenderPass(e){let t=this._renderTargetSystem.getGpuRenderTarget(e);if(!t.msaa){return}
let i=this._renderer.gl;i.bindFramebuffer(i.FRAMEBUFFER,t.resolveTargetFramebuffer);i.bindFramebuffer(i.READ_FRAMEBUFFER,t.framebuffer);i.blitFramebuffer(0,0,t.width,t.height,0,0,t.width,t.height,i.COLOR_BUFFER_BIT,i.NEAREST);i.bindFramebuffer(i.FRAMEBUFFER,t.framebuffer)}
initGpuRenderTarget(e){let t=this._renderer;let i=t.gl;let s=new jh();return e.colorTexture.resource===t.canvas?(this._renderer.context.ensureCanvasSize(e.colorTexture.resource),s.framebuffer=null,s):(this._initColor(e,s),i.bindFramebuffer(i.FRAMEBUFFER,null),s)}
destroyGpuRenderTarget(e){let t=this._renderer.gl;if(e.framebuffer){t.deleteFramebuffer(e.framebuffer);e.framebuffer=null}
if(e.resolveTargetFramebuffer){t.deleteFramebuffer(e.resolveTargetFramebuffer);e.resolveTargetFramebuffer=null}
if(e.depthStencilRenderBuffer){t.deleteRenderbuffer(e.depthStencilRenderBuffer);e.depthStencilRenderBuffer=null}
e.msaaRenderBuffer.forEach(i=>{t.deleteRenderbuffer(i)});e.msaaRenderBuffer=null}
clear(e,t,i){if(!t){return}
let s=this._renderTargetSystem;if(typeof t=="boolean"){t=t?mt.ALL:mt.NONE}
let r=this._renderer.gl;if(t&mt.COLOR){if(!(i!=null)){i=s.defaultClearColor}
let n=this._clearColorCache;let d=i;if(n[0]!==d[0]||n[1]!==d[1]||n[2]!==d[2]||n[3]!==d[3]){n[0]=d[0];n[1]=d[1];n[2]=d[2];n[3]=d[3];r.clearColor(d[0],d[1],d[2],d[3])}}
r.clear(t)}
resizeGpuRenderTarget(e){if(e.isRoot){return}
let t=this._renderTargetSystem.getGpuRenderTarget(e);this._resizeColor(e,t);if(e.stencil||e.depth){this._resizeStencil(t)}}
_initColor(e,t){let i=this._renderer;let s=i.gl;let r=s.createFramebuffer();t.resolveTargetFramebuffer=r;s.bindFramebuffer(s.FRAMEBUFFER,r);t.width=e.colorTexture.source.pixelWidth;t.height=e.colorTexture.source.pixelHeight;e.colorTextures.forEach((n,d)=>{let h=n.source;if(h.antialias){if(i.context.supports.msaa){t.msaa=!0}else{Qt("[RenderTexture] Antialiasing on textures is not supported in WebGL1")}}
i.texture.bindSource(h,0);let l=i.texture.getGlSource(h).texture;s.framebufferTexture2D(s.FRAMEBUFFER,s.COLOR_ATTACHMENT0+d,3553,l,0)});if(t.msaa){let n=s.createFramebuffer();t.framebuffer=n;s.bindFramebuffer(s.FRAMEBUFFER,n);e.colorTextures.forEach((d,h)=>{let l=s.createRenderbuffer();t.msaaRenderBuffer[h]=l})}else{t.framebuffer=r}
this._resizeColor(e,t)}
_resizeColor(e,t){let i=e.colorTexture.source;t.width=i.pixelWidth;t.height=i.pixelHeight;e.colorTextures.forEach((s,r)=>{if(r!==0){s.source.resize(i.width,i.height,i._resolution)}});if(t.msaa){let s=this._renderer;let r=s.gl;let n=t.framebuffer;r.bindFramebuffer(r.FRAMEBUFFER,n);e.colorTextures.forEach((d,h)=>{let l=d.source;s.texture.bindSource(l,0);let f=s.texture.getGlSource(l).internalFormat;let p=t.msaaRenderBuffer[h];r.bindRenderbuffer(r.RENDERBUFFER,p);r.renderbufferStorageMultisample(r.RENDERBUFFER,4,f,l.pixelWidth,l.pixelHeight);r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+h,r.RENDERBUFFER,p)})}}
_initStencil(e){if(e.framebuffer===null){return}
let t=this._renderer.gl;let i=t.createRenderbuffer();e.depthStencilRenderBuffer=i;t.bindRenderbuffer(t.RENDERBUFFER,i);t.framebufferRenderbuffer(t.FRAMEBUFFER,t.DEPTH_STENCIL_ATTACHMENT,t.RENDERBUFFER,i);this._resizeStencil(e)}
_resizeStencil(e){let t=this._renderer.gl;t.bindRenderbuffer(t.RENDERBUFFER,e.depthStencilRenderBuffer);if(e.msaa){t.renderbufferStorageMultisample(t.RENDERBUFFER,4,t.DEPTH24_STENCIL8,e.width,e.height)}else{t.renderbufferStorage(t.RENDERBUFFER,this._renderer.context.webGLVersion===2?t.DEPTH24_STENCIL8:t.DEPTH_STENCIL,e.width,e.height)}}
prerender(e){let t=e.colorTexture.resource;if(this._renderer.context.multiView&&Kt.test(t)){this._renderer.context.ensureCanvasSize(t)}}
postrender(e){if(this._renderer.context.multiView&&Kt.test(e.colorTexture.resource)){let t=this._renderer.context.canvas;let i=e.colorTexture;i.context2D.drawImage(t,0,i.pixelHeight-t.height)}}};function nx(a,e,t,i,s,r){let n=r?1:-1;a.identity();a.a=1/i*2;a.d=n*(1/s*2);a.tx=-1-e*a.a;a.ty=-n-t*a.d;return a}
var ox=Object.defineProperty;var r1=Object.getOwnPropertySymbols;var cx=Object.prototype.hasOwnProperty;var dx=Object.prototype.propertyIsEnumerable;var n1=(a,e,t)=>e in a?ox(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var hx=(a,e)=>{for(var t in e||(e={}))if(cx.call(e,t)){n1(a,t,e[t])}
if(r1){for(var t of r1(e))if(dx.call(e,t)){n1(a,t,e[t])}}
return a};var us=new Map();function A3(a,e){if(!us.has(a)){let t=new W({source:new Kt(hx({resource:a},e))});let i=()=>{if(us.get(a)===t){us.delete(a)}};t.once("destroy",i);t.source.once("destroy",i);us.set(a,t)}
return us.get(a)}
function lx(a){let e=a.colorTexture.source.resource;return globalThis.HTMLCanvasElement&&e instanceof HTMLCanvasElement&&document.body.contains(e)}
var ux=Object.defineProperty;var o1=Object.getOwnPropertySymbols;var fx=Object.prototype.hasOwnProperty;var bx=Object.prototype.propertyIsEnumerable;var c1=(a,e,t)=>e in a?ux(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var d1=(a,e)=>{for(var t in e||(e={}))if(fx.call(e,t)){c1(a,t,e[t])}
if(o1){for(var t of o1(e))if(bx.call(e,t)){c1(a,t,e[t])}}
return a};var E3=class P3{constructor(e={}){this.uid=Ie("renderTarget");this.colorTextures=[];this.dirtyId=0;this.isRoot=!1;this._size=new Float32Array(2);this._managedColorTextures=!1;e=d1(d1({},P3.defaultOptions),e);this.stencil=e.stencil;this.depth=e.depth;this.isRoot=e.isRoot;if(typeof e.colorTextures=="number"){this._managedColorTextures=!0;for(let t=0;t<e.colorTextures;t++){this.colorTextures.push(new bp({width:e.width,height:e.height,resolution:e.resolution,antialias:e.antialias}))}}else{this.colorTextures=[...e.colorTextures.map(i=>i.source)];let t=this.colorTexture.source;this.resize(t.width,t.height,t._resolution)}
this.colorTexture.source.on("resize",this.onSourceResize,this);if(e.depthStencilTexture||this.stencil){if(e.depthStencilTexture instanceof W||e.depthStencilTexture instanceof bp){this.depthStencilTexture=e.depthStencilTexture.source}else{this.ensureDepthStencilTexture()}}}
get size(){let e=this._size;e[0]=this.pixelWidth;e[1]=this.pixelHeight;return e}
get width(){return this.colorTexture.source.width}
get height(){return this.colorTexture.source.height}
get pixelWidth(){return this.colorTexture.source.pixelWidth}
get pixelHeight(){return this.colorTexture.source.pixelHeight}
get resolution(){return this.colorTexture.source._resolution}
get colorTexture(){return this.colorTextures[0]}
onSourceResize(e){this.resize(e.width,e.height,e._resolution,!0)}
ensureDepthStencilTexture(){if(!this.depthStencilTexture){this.depthStencilTexture=new bp({width:this.width,height:this.height,resolution:this.resolution,format:"depth24plus-stencil8",autoGenerateMipmaps:!1,antialias:!1,mipLevelCount:1})}}
resize(e,t,i=this.resolution,s=!1){this.dirtyId++;this.colorTextures.forEach((r,n)=>{if(!(s&&n===0)){r.source.resize(e,t,i)}});if(this.depthStencilTexture){this.depthStencilTexture.source.resize(e,t,i)}}
destroy(){this.colorTexture.source.off("resize",this.onSourceResize,this);if(this._managedColorTextures){this.colorTextures.forEach(e=>{e.destroy()})}
if(this.depthStencilTexture){this.depthStencilTexture.destroy();delete this.depthStencilTexture}}};E3.defaultOptions={width:0,height:0,resolution:1,colorTextures:1,stencil:!1,depth:!1,antialias:!1,isRoot:!1};var qn=class{constructor(e){this.rootViewPort=new we();this.viewport=new we();this.onRenderTargetChange=new Tn("onRenderTargetChange");this.projectionMatrix=new ae();this.defaultClearColor=[0,0,0,0];this._renderSurfaceToRenderTargetHash=new Map();this._gpuRenderTargetHash=Object.create(null);this._renderTargetStack=[];this._renderer=e;e.renderableGC.addManagedHash(this,"_gpuRenderTargetHash")}
finishRenderPass(){this.adaptor.finishRenderPass(this.renderTarget)}
renderStart({target:e,clear:t,clearColor:i,frame:s}){var r;var n;this._renderTargetStack.length=0;this.push(e,t,i,s);this.rootViewPort.copyFrom(this.viewport);this.rootRenderTarget=this.renderTarget;this.renderingToScreen=lx(this.rootRenderTarget);if(!((n=(r=this.adaptor).prerender)==null)){n.call(r,this.rootRenderTarget)}}
postrender(){var e;var t;if(!((t=(e=this.adaptor).postrender)==null)){t.call(e,this.rootRenderTarget)}}
bind(e,t=!0,i,s){let r=this.getRenderTarget(e);let n=this.renderTarget!==r;this.renderTarget=r;this.renderSurface=e;let d=this.getGpuRenderTarget(r);if(r.pixelWidth!==d.width||r.pixelHeight!==d.height){this.adaptor.resizeGpuRenderTarget(r);d.width=r.pixelWidth;d.height=r.pixelHeight}
let h=r.colorTexture;let l=this.viewport;let f=h.pixelWidth;let p=h.pixelHeight;if(!s&&e instanceof W){s=e.frame}
if(s){let _=h._resolution;l.x=s.x*_+.5|0;l.y=s.y*_+.5|0;l.width=s.width*_+.5|0;l.height=s.height*_+.5|0}else{l.x=0;l.y=0;l.width=f;l.height=p}
nx(this.projectionMatrix,0,0,l.width/h.resolution,l.height/h.resolution,!r.isRoot);this.adaptor.startRenderPass(r,t,i,l);if(n){this.onRenderTargetChange.emit(r)}
return r}
clear(e,t=mt.ALL,i){if(t){if(e){e=this.getRenderTarget(e)}
this.adaptor.clear(e||this.renderTarget,t,i,this.viewport)}}
contextChange(){this._gpuRenderTargetHash=Object.create(null)}
push(e,t=mt.ALL,i,s){let r=this.bind(e,t,i,s);this._renderTargetStack.push({renderTarget:r,frame:s});return r}
pop(){this._renderTargetStack.pop();let e=this._renderTargetStack[this._renderTargetStack.length-1];this.bind(e.renderTarget,!1,null,e.frame)}
getRenderTarget(e){var t;if(e.isTexture){e=e.source}
return(t=this._renderSurfaceToRenderTargetHash.get(e))!=null?t:this._initRenderTarget(e)}
copyToTexture(e,t,i,s,r){if(i.x<0){s.width+=i.x;r.x-=i.x;i.x=0}
if(i.y<0){s.height+=i.y;r.y-=i.y;i.y=0}
let{pixelWidth:n,pixelHeight:d}=e;s.width=Math.min(s.width,n-i.x);s.height=Math.min(s.height,d-i.y);return this.adaptor.copyToTexture(e,t,i,s,r)}
ensureDepthStencil(){if(!this.renderTarget.stencil){this.renderTarget.stencil=!0;this.adaptor.startRenderPass(this.renderTarget,!1,null,this.viewport)}}
destroy(){this._renderer=null;this._renderSurfaceToRenderTargetHash.forEach((e,t)=>{if(e!==t){e.destroy()}});this._renderSurfaceToRenderTargetHash.clear();this._gpuRenderTargetHash=Object.create(null)}
_initRenderTarget(e){let t=null;if(Kt.test(e)){e=A3(e).source}
if(e instanceof E3){t=e}else if(e instanceof bp){t=new E3({colorTextures:[e]});if(Kt.test(e.source.resource)){t.isRoot=!0}
e.once("destroy",()=>{t.destroy();this._renderSurfaceToRenderTargetHash.delete(e);let i=this._gpuRenderTargetHash[t.uid];if(i){this._gpuRenderTargetHash[t.uid]=null;this.adaptor.destroyGpuRenderTarget(i)}})}
this._renderSurfaceToRenderTargetHash.set(e,t);return t}
getGpuRenderTarget(e){return this._gpuRenderTargetHash[e.uid]||(this._gpuRenderTargetHash[e.uid]=this.adaptor.initGpuRenderTarget(e))}
resetState(){this.renderTarget=null;this.renderSurface=null}};var Zn=class extends qn{constructor(e){super(e);this.adaptor=new Xh();this.adaptor.init(e,this)}};Zn.extension={type:[I.WebGLSystem],name:"renderTarget"};var Ls=class extends xt{constructor({buffer:e,offset:t,size:i}){super();this.uid=Ie("buffer");this._resourceType="bufferResource";this._touched=0;this._resourceId=Ie("resource");this._bufferResource=!0;this.destroyed=!1;this.buffer=e;this.offset=t|0;this.size=i;this.buffer.on("change",this.onBufferChange,this)}
onBufferChange(){this._resourceId=Ie("resource");this.emit("change",this)}
destroy(e=!1){this.destroyed=!0;if(e){this.buffer.destroy()}
this.emit("change",this);this.buffer=null}};function px(a,e){let t=[];let i=[`
var g = s.groups;
var sS = r.shader;
var p = s.glProgram;
var ugS = r.uniformGroup;
var resources;
`];let s=!1;let r=0;let n=e._getProgramData(a.glProgram);for(let h in a.groups){let l=a.groups[h];t.push(`
resources = g[${h}].resources;
`);for(let f in l.resources){let p=l.resources[f];if(p instanceof jp){if(p.ubo){let _=a._uniformBindMap[h][Number(f)];t.push(`
    sS.bindUniformBlock(
        resources[${f}],
        '${_}',
        ${a.glProgram._uniformBlockData[_].index}
    );
`)}else{t.push(`
    ugS.updateUniformGroup(resources[${f}], p, sD);
`)}}else if(p instanceof Ls){let _=a._uniformBindMap[h][Number(f)];t.push(`
sS.bindUniformBlock(
    resources[${f}],
    '${_}',
    ${a.glProgram._uniformBlockData[_].index}
);
`)}else if(p instanceof bp){let _=a._uniformBindMap[h][f];let m=n.uniformData[_];if(m){if(!s){s=!0;i.push(`
    var tS = r.texture;
    `)}
e._gl.uniform1i(m.location,r);t.push(`
    tS.bind(resources[${f}], ${r});
`);r++}}}}
let d=[...i,...t].join(`
`);return new Function("r","s","sD",d)}
var zh=class{constructor(e,t){this.program=e;this.uniformData=t;this.uniformGroups={};this.uniformDirtyGroups={};this.uniformBlockBindings={}}
destroy(){this.uniformData=null;this.uniformGroups=null;this.uniformDirtyGroups=null;this.uniformBlockBindings=null;this.program=null}};function h1(a,e,t){let i=a.createShader(e);a.shaderSource(i,t);a.compileShader(i);return i}
function pd(a){let e=new Array(a);for(let t=0;t<e.length;t++){e[t]=!1}
return e}
function R3(a,e){switch(a){case "float":return 0;case "vec2":return new Float32Array(2*e);case "vec3":return new Float32Array(3*e);case "vec4":return new Float32Array(4*e);case "int":case "uint":case "sampler2D":case "sampler2DArray":return 0;case "ivec2":return new Int32Array(2*e);case "ivec3":return new Int32Array(3*e);case "ivec4":return new Int32Array(4*e);case "uvec2":return new Uint32Array(2*e);case "uvec3":return new Uint32Array(3*e);case "uvec4":return new Uint32Array(4*e);case "bool":return!1;case "bvec2":return pd(2*e);case "bvec3":return pd(3*e);case "bvec4":return pd(4*e);case "mat2":return new Float32Array([1,0,0,1]);case "mat3":return new Float32Array([1,0,0,0,1,0,0,0,1]);case "mat4":return new Float32Array([1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1])}
return null}
var Cr=null;var l1={FLOAT:"float",FLOAT_VEC2:"vec2",FLOAT_VEC3:"vec3",FLOAT_VEC4:"vec4",INT:"int",INT_VEC2:"ivec2",INT_VEC3:"ivec3",INT_VEC4:"ivec4",UNSIGNED_INT:"uint",UNSIGNED_INT_VEC2:"uvec2",UNSIGNED_INT_VEC3:"uvec3",UNSIGNED_INT_VEC4:"uvec4",BOOL:"bool",BOOL_VEC2:"bvec2",BOOL_VEC3:"bvec3",BOOL_VEC4:"bvec4",FLOAT_MAT2:"mat2",FLOAT_MAT3:"mat3",FLOAT_MAT4:"mat4",SAMPLER_2D:"sampler2D",INT_SAMPLER_2D:"sampler2D",UNSIGNED_INT_SAMPLER_2D:"sampler2D",SAMPLER_CUBE:"samplerCube",INT_SAMPLER_CUBE:"samplerCube",UNSIGNED_INT_SAMPLER_CUBE:"samplerCube",SAMPLER_2D_ARRAY:"sampler2DArray",INT_SAMPLER_2D_ARRAY:"sampler2DArray",UNSIGNED_INT_SAMPLER_2D_ARRAY:"sampler2DArray"};var gx={float:"float32",vec2:"float32x2",vec3:"float32x3",vec4:"float32x4",int:"sint32",ivec2:"sint32x2",ivec3:"sint32x3",ivec4:"sint32x4",uint:"uint32",uvec2:"uint32x2",uvec3:"uint32x3",uvec4:"uint32x4",bool:"uint32",bvec2:"uint32x2",bvec3:"uint32x3",bvec4:"uint32x4"};function M3(a,e){if(!Cr){let t=Object.keys(l1);Cr={};for(let i=0;i<t.length;++i){let s=t[i];Cr[a[s]]=l1[s]}}
return Cr[e]}
function mx(a,e){let t=M3(a,e);return gx[t]||"float32"}
function _x(a,e,t=!1){let i={};let s=e.getProgramParameter(a,e.ACTIVE_ATTRIBUTES);for(let n=0;n<s;n++){let d=e.getActiveAttrib(a,n);if(d.name.startsWith("gl_")){continue}
let h=mx(e,d.type);i[d.name]={location:0,format:h,stride:Ca(h).stride,offset:0,instance:!1,start:0}}
let r=Object.keys(i);if(t){r.sort((n,d)=>n>d?1:-1);for(let n=0;n<r.length;n++){i[r[n]].location=n;e.bindAttribLocation(a,n,r[n])}
e.linkProgram(a)}else{for(let n=0;n<r.length;n++){i[r[n]].location=e.getAttribLocation(a,r[n])}}
return i}
function yx(a,e){if(!e.ACTIVE_UNIFORM_BLOCKS){return{}}
let t={};let i=e.getProgramParameter(a,e.ACTIVE_UNIFORM_BLOCKS);for(let s=0;s<i;s++){let r=e.getActiveUniformBlockName(a,s);let n=e.getUniformBlockIndex(a,r);let d=e.getActiveUniformBlockParameter(a,s,e.UNIFORM_BLOCK_DATA_SIZE);t[r]={name:r,index:n,size:d}}
return t}
function xx(a,e){let t={};let i=e.getProgramParameter(a,e.ACTIVE_UNIFORMS);for(let s=0;s<i;s++){let r=e.getActiveUniform(a,s);let n=r.name.replace(/\[.*?\]$/,"");let d=!!r.name.match(/\[.*?\]$/);let h=M3(e,r.type);t[n]={name:n,index:s,type:h,size:r.size,isArray:d,value:R3(h,r.size)}}
return t}
function u1(a,e){let t=a.getShaderSource(e).split(`
`).map((l,f)=>`${f}: ${l}`);let i=a.getShaderInfoLog(e);let s=i.split(`
`);let r={};let n=s.map(l=>parseFloat(l.replace(/^ERROR\: 0\:([\d]+)\:.*$/,"$1"))).filter(l=>l&&!r[l]?(r[l]=!0,!0):!1);let d=[""];n.forEach(l=>{t[l-1]=`%c${t[l - 1]}%c`;d.push("background: #FF0000; color:#FFFFFF; font-size: 10px","font-size: 10px")});let h=t.join(`
`);d[0]=h}
function vx(a,e,t,i){if(!a.getProgramParameter(e,a.LINK_STATUS)){if(!a.getShaderParameter(t,a.COMPILE_STATUS)){u1(a,t)}
if(!a.getShaderParameter(i,a.COMPILE_STATUS)){u1(a,i)}
a.getProgramInfoLog(e)}}
function Tx(a,e){let t=h1(a,a.VERTEX_SHADER,e.vertex);let i=h1(a,a.FRAGMENT_SHADER,e.fragment);let s=a.createProgram();a.attachShader(s,t);a.attachShader(s,i);let r=e.transformFeedbackVaryings;if(r){if(!(typeof a.transformFeedbackVaryings!="function")){a.transformFeedbackVaryings(s,r.names,r.bufferMode==="separate"?a.SEPARATE_ATTRIBS:a.INTERLEAVED_ATTRIBS)}}
a.linkProgram(s);if(!a.getProgramParameter(s,a.LINK_STATUS)){vx(a,s,t,i)}
e._attributeData=_x(s,a,!/^[ \t]*#[ \t]*version[ \t]+300[ \t]+es[ \t]*$/m.test(e.vertex));e._uniformData=xx(s,a);e._uniformBlockData=yx(s,a);a.deleteShader(t);a.deleteShader(i);let n={};for(let d in e._uniformData){let h=e._uniformData[d];n[d]={location:a.getUniformLocation(s,d),value:R3(h.type,h.size)}}
return new zh(s,n)}
var Or={textureCount:0,blockIndex:0};var Qn=class{constructor(e){this._activeProgram=null;this._programDataHash=Object.create(null);this._shaderSyncFunctions=Object.create(null);this._renderer=e;this._renderer.renderableGC.addManagedHash(this,"_programDataHash")}
contextChange(e){this._gl=e;this._programDataHash=Object.create(null);this._shaderSyncFunctions=Object.create(null);this._activeProgram=null;this.maxTextures=Ci()}
bind(e,t){this._setProgram(e.glProgram);if(t){return}
Or.textureCount=0;Or.blockIndex=0;let i=this._shaderSyncFunctions[e.glProgram._key];if(!i){i=this._shaderSyncFunctions[e.glProgram._key]=this._generateShaderSync(e,this)}
this._renderer.buffer.nextBindBase(!!e.glProgram.transformFeedbackVaryings);i(this._renderer,e,Or)}
updateUniformGroup(e){this._renderer.uniformGroup.updateUniformGroup(e,this._activeProgram,Or)}
bindUniformBlock(e,t,i=0){let s=this._renderer.buffer;let r=this._getProgramData(this._activeProgram);let n=e._bufferResource;if(!n){this._renderer.ubo.updateUniformGroup(e)}
let d=e.buffer;let h=s.updateBuffer(d);let l=s.freeLocationForBufferBase(h);if(n){let{offset:p,size:_}=e;if(p===0&&_===d.data.byteLength){s.bindBufferBase(h,l)}else{s.bindBufferRange(h,l,p)}}else if(s.getLastBindBaseLocation(h)!==l){s.bindBufferBase(h,l)}
let f=this._activeProgram._uniformBlockData[t].index;if(r.uniformBlockBindings[i]!==l){r.uniformBlockBindings[i]=l;this._renderer.gl.uniformBlockBinding(r.program,f,l)}}
_setProgram(e){if(this._activeProgram===e){return}
this._activeProgram=e;let t=this._getProgramData(e);this._gl.useProgram(t.program)}
_getProgramData(e){return this._programDataHash[e._key]||this._createProgramData(e)}
_createProgramData(e){let t=e._key;this._programDataHash[t]=Tx(this._gl,e);return this._programDataHash[t]}
destroy(){for(let e of Object.keys(this._programDataHash)){this._programDataHash[e].destroy();this._programDataHash[e]=null}
this._programDataHash=null}
_generateShaderSync(e,t){return px(e,t)}
resetState(){this._activeProgram=null}};Qn.extension={type:[I.WebGLSystem],name:"shader"};var Sx={f32:`if (cv !== v) {
cu.value = v;
gl.uniform1f(location, v);
}`,"vec2<f32>":`if (cv[0] !== v[0] || cv[1] !== v[1]) {
cv[0] = v[0];
cv[1] = v[1];
gl.uniform2f(location, v[0], v[1]);
}`,"vec3<f32>":`if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {
cv[0] = v[0];
cv[1] = v[1];
cv[2] = v[2];
gl.uniform3f(location, v[0], v[1], v[2]);
}`,"vec4<f32>":`if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {
cv[0] = v[0];
cv[1] = v[1];
cv[2] = v[2];
cv[3] = v[3];
gl.uniform4f(location, v[0], v[1], v[2], v[3]);
}`,i32:`if (cv !== v) {
cu.value = v;
gl.uniform1i(location, v);
}`,"vec2<i32>":`if (cv[0] !== v[0] || cv[1] !== v[1]) {
cv[0] = v[0];
cv[1] = v[1];
gl.uniform2i(location, v[0], v[1]);
}`,"vec3<i32>":`if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {
cv[0] = v[0];
cv[1] = v[1];
cv[2] = v[2];
gl.uniform3i(location, v[0], v[1], v[2]);
}`,"vec4<i32>":`if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {
cv[0] = v[0];
cv[1] = v[1];
cv[2] = v[2];
cv[3] = v[3];
gl.uniform4i(location, v[0], v[1], v[2], v[3]);
}`,u32:`if (cv !== v) {
cu.value = v;
gl.uniform1ui(location, v);
}`,"vec2<u32>":`if (cv[0] !== v[0] || cv[1] !== v[1]) {
cv[0] = v[0];
cv[1] = v[1];
gl.uniform2ui(location, v[0], v[1]);
}`,"vec3<u32>":`if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {
cv[0] = v[0];
cv[1] = v[1];
cv[2] = v[2];
gl.uniform3ui(location, v[0], v[1], v[2]);
}`,"vec4<u32>":`if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {
cv[0] = v[0];
cv[1] = v[1];
cv[2] = v[2];
cv[3] = v[3];
gl.uniform4ui(location, v[0], v[1], v[2], v[3]);
}`,bool:`if (cv !== v) {
cu.value = v;
gl.uniform1i(location, v);
}`,"vec2<bool>":`if (cv[0] !== v[0] || cv[1] !== v[1]) {
cv[0] = v[0];
cv[1] = v[1];
gl.uniform2i(location, v[0], v[1]);
}`,"vec3<bool>":`if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2]) {
cv[0] = v[0];
cv[1] = v[1];
cv[2] = v[2];
gl.uniform3i(location, v[0], v[1], v[2]);
}`,"vec4<bool>":`if (cv[0] !== v[0] || cv[1] !== v[1] || cv[2] !== v[2] || cv[3] !== v[3]) {
cv[0] = v[0];
cv[1] = v[1];
cv[2] = v[2];
cv[3] = v[3];
gl.uniform4i(location, v[0], v[1], v[2], v[3]);
}`,"mat2x2<f32>":"gl.uniformMatrix2fv(location, false, v);","mat3x3<f32>":"gl.uniformMatrix3fv(location, false, v);","mat4x4<f32>":"gl.uniformMatrix4fv(location, false, v);"};var wx={f32:"gl.uniform1fv(location, v);","vec2<f32>":"gl.uniform2fv(location, v);","vec3<f32>":"gl.uniform3fv(location, v);","vec4<f32>":"gl.uniform4fv(location, v);","mat2x2<f32>":"gl.uniformMatrix2fv(location, false, v);","mat3x3<f32>":"gl.uniformMatrix3fv(location, false, v);","mat4x4<f32>":"gl.uniformMatrix4fv(location, false, v);",i32:"gl.uniform1iv(location, v);","vec2<i32>":"gl.uniform2iv(location, v);","vec3<i32>":"gl.uniform3iv(location, v);","vec4<i32>":"gl.uniform4iv(location, v);",u32:"gl.uniform1iv(location, v);","vec2<u32>":"gl.uniform2iv(location, v);","vec3<u32>":"gl.uniform3iv(location, v);","vec4<u32>":"gl.uniform4iv(location, v);",bool:"gl.uniform1iv(location, v);","vec2<bool>":"gl.uniform2iv(location, v);","vec3<bool>":"gl.uniform3iv(location, v);","vec4<bool>":"gl.uniform4iv(location, v);"};function Ax(a,e){let t=[`
var v = null;
var cv = null;
var cu = null;
var t = 0;
var gl = renderer.gl;
var name = null;
`];for(let i in a.uniforms){if(!e[i]){if(a.uniforms[i]instanceof jp){if(a.uniforms[i].ubo){t.push(`
    renderer.shader.bindUniformBlock(uv.${i}, "${i}");
`)}else{t.push(`
    renderer.shader.updateUniformGroup(uv.${i});
`)}}else if(a.uniforms[i]instanceof Ls){t.push(`
    renderer.shader.bindBufferResource(uv.${i}, "${i}");
`)}
continue}
let s=a.uniformStructures[i];let r=!1;for(let n=0;n<Ya.length;n++){let d=Ya[n];if(s.type===d.type&&d.test(s)){t.push(`name = "${i}";`,Ya[n].uniform);r=!0;break}}
if(!r){let n=(s.size===1?Sx:wx)[s.type].replace("location",`ud["${i}"].location`);t.push(`
cu = ud["${i}"];
cv = cu.value;
v = uv["${i}"];
${n};`)}}
return new Function("ud","uv","renderer","syncData",t.join(`
`))}
var Jn=class{constructor(e){this._cache={};this._uniformGroupSyncHash={};this._renderer=e;this.gl=null;this._cache={}}
contextChange(e){this.gl=e}
updateUniformGroup(e,t,i){let s=this._renderer.shader._getProgramData(t);if(!e.isStatic||e._dirtyId!==s.uniformDirtyGroups[e.uid]){s.uniformDirtyGroups[e.uid]=e._dirtyId;this._getUniformSyncFunction(e,t)(s.uniformData,e.uniforms,this._renderer,i)}}
_getUniformSyncFunction(e,t){var i;return((i=this._uniformGroupSyncHash[e._signature])==null?undefined:i[t._key])||this._createUniformSyncFunction(e,t)}
_createUniformSyncFunction(e,t){let i=this._uniformGroupSyncHash[e._signature]||(this._uniformGroupSyncHash[e._signature]={});let s=this._getSignature(e,t._uniformData,"u");if(!this._cache[s]){this._cache[s]=this._generateUniformsSync(e,t._uniformData)}
i[t._key]=this._cache[s];return i[t._key]}
_generateUniformsSync(e,t){return Ax(e,t)}
_getSignature(e,t,i){let s=e.uniforms;let r=[`${i}-`];for(let n in s){r.push(n);if(t[n]){r.push(t[n].type)}}
return r.join("-")}
destroy(){this._renderer=null;this._cache=null}};Jn.extension={type:[I.WebGLSystem],name:"uniformGroup"};function Ex(a){let e={normal:[a.ONE,a.ONE_MINUS_SRC_ALPHA],add:[a.ONE,a.ONE],multiply:[a.DST_COLOR,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA],screen:[a.ONE,a.ONE_MINUS_SRC_COLOR,a.ONE,a.ONE_MINUS_SRC_ALPHA],none:[0,0],"normal-npm":[a.SRC_ALPHA,a.ONE_MINUS_SRC_ALPHA,a.ONE,a.ONE_MINUS_SRC_ALPHA],"add-npm":[a.SRC_ALPHA,a.ONE,a.ONE,a.ONE],"screen-npm":[a.SRC_ALPHA,a.ONE_MINUS_SRC_COLOR,a.ONE,a.ONE_MINUS_SRC_ALPHA],erase:[a.ZERO,a.ONE_MINUS_SRC_ALPHA]};if(!(a instanceof WebGLRenderingContext)){e.min=[a.ONE,a.ONE,a.ONE,a.ONE,a.MIN,a.MIN];e.max=[a.ONE,a.ONE,a.ONE,a.ONE,a.MAX,a.MAX]}else{let t=a.getExtension("EXT_blend_minmax");if(t){e.min=[a.ONE,a.ONE,a.ONE,a.ONE,t.MIN_EXT,t.MIN_EXT];e.max=[a.ONE,a.ONE,a.ONE,a.ONE,t.MAX_EXT,t.MAX_EXT]}}
return e}
var C3=class Vh{constructor(){this.gl=null;this.stateId=0;this.polygonOffset=0;this.blendMode="none";this._blendEq=!1;this.map=[];this.map[0]=this.setBlend;this.map[1]=this.setOffset;this.map[2]=this.setCullFace;this.map[3]=this.setDepthTest;this.map[4]=this.setFrontFace;this.map[5]=this.setDepthMask;this.checks=[];this.defaultState=Qd.for2d()}
contextChange(e){this.gl=e;this.blendModesMap=Ex(e);this.resetState()}
set(e){if(!e){e=this.defaultState}
if(this.stateId!==e.data){let t=this.stateId^e.data;let i=0;for(;t;){if(t&1){this.map[i].call(this,!!(e.data&1<<i))}
t>>=1;i++}
this.stateId=e.data}
for(let t=0;t<this.checks.length;t++){this.checks[t](this,e)}}
forceState(e){if(!e){e=this.defaultState}
for(let t=0;t<this.map.length;t++){this.map[t].call(this,!!(e.data&1<<t))}
for(let t=0;t<this.checks.length;t++){this.checks[t](this,e)}
this.stateId=e.data}
setBlend(e){this._updateCheck(Vh._checkBlendMode,e);this.gl[e?"enable":"disable"](this.gl.BLEND)}
setOffset(e){this._updateCheck(Vh._checkPolygonOffset,e);this.gl[e?"enable":"disable"](this.gl.POLYGON_OFFSET_FILL)}
setDepthTest(e){this.gl[e?"enable":"disable"](this.gl.DEPTH_TEST)}
setDepthMask(e){this.gl.depthMask(e)}
setCullFace(e){this.gl[e?"enable":"disable"](this.gl.CULL_FACE)}
setFrontFace(e){this.gl.frontFace(this.gl[e?"CW":"CCW"])}
setBlendMode(e){if(!this.blendModesMap[e]){e="normal"}
if(e===this.blendMode){return}
this.blendMode=e;let t=this.blendModesMap[e];let i=this.gl;if(t.length===2){i.blendFunc(t[0],t[1])}else{i.blendFuncSeparate(t[0],t[1],t[2],t[3])}
if(t.length===6){this._blendEq=!0;i.blendEquationSeparate(t[4],t[5])}else if(this._blendEq){this._blendEq=!1;i.blendEquationSeparate(i.FUNC_ADD,i.FUNC_ADD)}}
setPolygonOffset(e,t){this.gl.polygonOffset(e,t)}
resetState(){this.gl.pixelStorei(this.gl.UNPACK_FLIP_Y_WEBGL,!1);this.forceState(this.defaultState);this._blendEq=!0;this.blendMode="";this.setBlendMode("normal")}
_updateCheck(e,t){let i=this.checks.indexOf(e);if(t&&i===-1){this.checks.push(e)}else if(!t&&i!==-1){this.checks.splice(i,1)}}
static _checkBlendMode(e,t){e.setBlendMode(t.blendMode)}
static _checkPolygonOffset(e,t){e.setPolygonOffset(1,t.polygonOffset)}
destroy(){this.gl=null;this.checks.length=0}};C3.extension={type:[I.WebGLSystem],name:"state"};var Wh=class{constructor(e){this.target=x3.TEXTURE_2D;this.texture=e;this.width=-1;this.height=-1;this.type=xe.UNSIGNED_BYTE;this.internalFormat=Lh.RGBA;this.format=Lh.RGBA;this.samplerType=0}};var Bx={id:"buffer",upload(a,e,t){if(e.width===a.width||e.height===a.height){t.texSubImage2D(t.TEXTURE_2D,0,0,0,a.width,a.height,e.format,e.type,a.resource)}else{t.texImage2D(e.target,0,e.internalFormat,a.width,a.height,0,e.format,e.type,a.resource)}
e.width=a.width;e.height=a.height}};var Fx={"bc1-rgba-unorm":!0,"bc1-rgba-unorm-srgb":!0,"bc2-rgba-unorm":!0,"bc2-rgba-unorm-srgb":!0,"bc3-rgba-unorm":!0,"bc3-rgba-unorm-srgb":!0,"bc4-r-unorm":!0,"bc4-r-snorm":!0,"bc5-rg-unorm":!0,"bc5-rg-snorm":!0,"bc6h-rgb-ufloat":!0,"bc6h-rgb-float":!0,"bc7-rgba-unorm":!0,"bc7-rgba-unorm-srgb":!0,"etc2-rgb8unorm":!0,"etc2-rgb8unorm-srgb":!0,"etc2-rgb8a1unorm":!0,"etc2-rgb8a1unorm-srgb":!0,"etc2-rgba8unorm":!0,"etc2-rgba8unorm-srgb":!0,"eac-r11unorm":!0,"eac-r11snorm":!0,"eac-rg11unorm":!0,"eac-rg11snorm":!0,"astc-4x4-unorm":!0,"astc-4x4-unorm-srgb":!0,"astc-5x4-unorm":!0,"astc-5x4-unorm-srgb":!0,"astc-5x5-unorm":!0,"astc-5x5-unorm-srgb":!0,"astc-6x5-unorm":!0,"astc-6x5-unorm-srgb":!0,"astc-6x6-unorm":!0,"astc-6x6-unorm-srgb":!0,"astc-8x5-unorm":!0,"astc-8x5-unorm-srgb":!0,"astc-8x6-unorm":!0,"astc-8x6-unorm-srgb":!0,"astc-8x8-unorm":!0,"astc-8x8-unorm-srgb":!0,"astc-10x5-unorm":!0,"astc-10x5-unorm-srgb":!0,"astc-10x6-unorm":!0,"astc-10x6-unorm-srgb":!0,"astc-10x8-unorm":!0,"astc-10x8-unorm-srgb":!0,"astc-10x10-unorm":!0,"astc-10x10-unorm-srgb":!0,"astc-12x10-unorm":!0,"astc-12x10-unorm-srgb":!0,"astc-12x12-unorm":!0,"astc-12x12-unorm-srgb":!0};var Dx={id:"compressed",upload(a,e,t){t.pixelStorei(t.UNPACK_ALIGNMENT,4);let i=a.pixelWidth;let s=a.pixelHeight;let r=!!Fx[a.format];for(let n=0;n<a.resource.length;n++){let d=a.resource[n];if(r){t.compressedTexImage2D(t.TEXTURE_2D,n,e.internalFormat,i,s,0,d)}else{t.texImage2D(t.TEXTURE_2D,n,e.internalFormat,i,s,0,e.format,e.type,d)}
i=Math.max(i>>1,1);s=Math.max(s>>1,1)}}};var O3={id:"image",upload(a,e,t,i){let s=e.width;let r=e.height;let n=a.pixelWidth;let d=a.pixelHeight;let h=a.resourceWidth;let l=a.resourceHeight;if(h<n||l<d){if(s!==n||r!==d){t.texImage2D(e.target,0,e.internalFormat,n,d,0,e.format,e.type,null)}
if(i===2){t.texSubImage2D(t.TEXTURE_2D,0,0,0,h,l,e.format,e.type,a.resource)}else{t.texSubImage2D(t.TEXTURE_2D,0,0,0,e.format,e.type,a.resource)}}else if(s===n&&r===d){t.texSubImage2D(t.TEXTURE_2D,0,0,0,e.format,e.type,a.resource)}else if(i===2){t.texImage2D(e.target,0,e.internalFormat,n,d,0,e.format,e.type,a.resource)}else{t.texImage2D(e.target,0,e.internalFormat,e.format,e.type,a.resource)}
e.width=n;e.height=d}};var kx={id:"video",upload(a,e,t,i){if(!a.isValid){t.texImage2D(e.target,0,e.internalFormat,1,1,0,e.format,e.type,null);return}
O3.upload(a,e,t,i)}};var f1={linear:9729,nearest:9728};var Ux={linear:{linear:9987,nearest:9985},nearest:{linear:9986,nearest:9984}};var gd={"clamp-to-edge":33071,repeat:10497,"mirror-repeat":33648};var Lx={never:512,less:513,equal:514,"less-equal":515,greater:516,"not-equal":517,"greater-equal":518,always:519};function b1(a,e,t,i,s,r,n,d){if(!d||a.addressModeU!=="repeat"||a.addressModeV!=="repeat"||a.addressModeW!=="repeat"){let l=gd[n?"clamp-to-edge":a.addressModeU];let f=gd[n?"clamp-to-edge":a.addressModeV];let p=gd[n?"clamp-to-edge":a.addressModeW];e[s](r,e.TEXTURE_WRAP_S,l);e[s](r,e.TEXTURE_WRAP_T,f);if(e.TEXTURE_WRAP_R){e[s](r,e.TEXTURE_WRAP_R,p)}}
if(!d||a.magFilter!=="linear"){e[s](r,e.TEXTURE_MAG_FILTER,f1[a.magFilter])}
if(t){if(!d||a.mipmapFilter!=="linear"){let l=Ux[a.minFilter][a.mipmapFilter];e[s](r,e.TEXTURE_MIN_FILTER,l)}}else{e[s](r,e.TEXTURE_MIN_FILTER,f1[a.minFilter])}
if(i&&a.maxAnisotropy>1){let l=Math.min(a.maxAnisotropy,e.getParameter(i.MAX_TEXTURE_MAX_ANISOTROPY_EXT));e[s](r,i.TEXTURE_MAX_ANISOTROPY_EXT,l)}
if(a.compare){e[s](r,e.TEXTURE_COMPARE_FUNC,Lx[a.compare])}}
var jx=Object.defineProperty;var Xx=Object.defineProperties;var Hx=Object.getOwnPropertyDescriptors;var p1=Object.getOwnPropertySymbols;var zx=Object.prototype.hasOwnProperty;var Vx=Object.prototype.propertyIsEnumerable;var g1=(a,e,t)=>e in a?jx(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var La=(a,e)=>{for(var t in e||(e={}))if(zx.call(e,t)){g1(a,t,e[t])}
if(p1){for(var t of p1(e))if(Vx.call(e,t)){g1(a,t,e[t])}}
return a};function Yx(a,e){let t={};let i=a.RGBA;if(a instanceof WebGLRenderingContext){if(e.srgb){t={"rgba8unorm-srgb":e.srgb.SRGB8_ALPHA8_EXT,"bgra8unorm-srgb":e.srgb.SRGB8_ALPHA8_EXT}}}else{t={"rgba8unorm-srgb":a.SRGB8_ALPHA8,"bgra8unorm-srgb":a.SRGB8_ALPHA8};i=a.RGBA8}
return La(La(La(La(La(La(Xx(La({r8unorm:a.R8,r8snorm:a.R8_SNORM,r8uint:a.R8UI,r8sint:a.R8I,r16uint:a.R16UI,r16sint:a.R16I,r16float:a.R16F,rg8unorm:a.RG8,rg8snorm:a.RG8_SNORM,rg8uint:a.RG8UI,rg8sint:a.RG8I,r32uint:a.R32UI,r32sint:a.R32I,r32float:a.R32F,rg16uint:a.RG16UI,rg16sint:a.RG16I,rg16float:a.RG16F,rgba8unorm:a.RGBA},t),Hx({rgba8snorm:a.RGBA8_SNORM,rgba8uint:a.RGBA8UI,rgba8sint:a.RGBA8I,bgra8unorm:i,rgb9e5ufloat:a.RGB9_E5,rgb10a2unorm:a.RGB10_A2,rg11b10ufloat:a.R11F_G11F_B10F,rg32uint:a.RG32UI,rg32sint:a.RG32I,rg32float:a.RG32F,rgba16uint:a.RGBA16UI,rgba16sint:a.RGBA16I,rgba16float:a.RGBA16F,rgba32uint:a.RGBA32UI,rgba32sint:a.RGBA32I,rgba32float:a.RGBA32F,stencil8:a.STENCIL_INDEX8,depth16unorm:a.DEPTH_COMPONENT16,depth24plus:a.DEPTH_COMPONENT24,"depth24plus-stencil8":a.DEPTH24_STENCIL8,depth32float:a.DEPTH_COMPONENT32F,"depth32float-stencil8":a.DEPTH32F_STENCIL8})),e.s3tc?{"bc1-rgba-unorm":e.s3tc.COMPRESSED_RGBA_S3TC_DXT1_EXT,"bc2-rgba-unorm":e.s3tc.COMPRESSED_RGBA_S3TC_DXT3_EXT,"bc3-rgba-unorm":e.s3tc.COMPRESSED_RGBA_S3TC_DXT5_EXT}:{}),e.s3tc_sRGB?{"bc1-rgba-unorm-srgb":e.s3tc_sRGB.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT,"bc2-rgba-unorm-srgb":e.s3tc_sRGB.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT,"bc3-rgba-unorm-srgb":e.s3tc_sRGB.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}:{}),e.rgtc?{"bc4-r-unorm":e.rgtc.COMPRESSED_RED_RGTC1_EXT,"bc4-r-snorm":e.rgtc.COMPRESSED_SIGNED_RED_RGTC1_EXT,"bc5-rg-unorm":e.rgtc.COMPRESSED_RED_GREEN_RGTC2_EXT,"bc5-rg-snorm":e.rgtc.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}:{}),e.bptc?{"bc6h-rgb-float":e.bptc.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT,"bc6h-rgb-ufloat":e.bptc.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT,"bc7-rgba-unorm":e.bptc.COMPRESSED_RGBA_BPTC_UNORM_EXT,"bc7-rgba-unorm-srgb":e.bptc.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT}:{}),e.etc?{"etc2-rgb8unorm":e.etc.COMPRESSED_RGB8_ETC2,"etc2-rgb8unorm-srgb":e.etc.COMPRESSED_SRGB8_ETC2,"etc2-rgb8a1unorm":e.etc.COMPRESSED_RGB8_PUNCHTHROUGH_ALPHA1_ETC2,"etc2-rgb8a1unorm-srgb":e.etc.COMPRESSED_SRGB8_PUNCHTHROUGH_ALPHA1_ETC2,"etc2-rgba8unorm":e.etc.COMPRESSED_RGBA8_ETC2_EAC,"etc2-rgba8unorm-srgb":e.etc.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC,"eac-r11unorm":e.etc.COMPRESSED_R11_EAC,"eac-rg11unorm":e.etc.COMPRESSED_SIGNED_RG11_EAC}:{}),e.astc?{"astc-4x4-unorm":e.astc.COMPRESSED_RGBA_ASTC_4x4_KHR,"astc-4x4-unorm-srgb":e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR,"astc-5x4-unorm":e.astc.COMPRESSED_RGBA_ASTC_5x4_KHR,"astc-5x4-unorm-srgb":e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR,"astc-5x5-unorm":e.astc.COMPRESSED_RGBA_ASTC_5x5_KHR,"astc-5x5-unorm-srgb":e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR,"astc-6x5-unorm":e.astc.COMPRESSED_RGBA_ASTC_6x5_KHR,"astc-6x5-unorm-srgb":e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR,"astc-6x6-unorm":e.astc.COMPRESSED_RGBA_ASTC_6x6_KHR,"astc-6x6-unorm-srgb":e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR,"astc-8x5-unorm":e.astc.COMPRESSED_RGBA_ASTC_8x5_KHR,"astc-8x5-unorm-srgb":e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR,"astc-8x6-unorm":e.astc.COMPRESSED_RGBA_ASTC_8x6_KHR,"astc-8x6-unorm-srgb":e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR,"astc-8x8-unorm":e.astc.COMPRESSED_RGBA_ASTC_8x8_KHR,"astc-8x8-unorm-srgb":e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR,"astc-10x5-unorm":e.astc.COMPRESSED_RGBA_ASTC_10x5_KHR,"astc-10x5-unorm-srgb":e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR,"astc-10x6-unorm":e.astc.COMPRESSED_RGBA_ASTC_10x6_KHR,"astc-10x6-unorm-srgb":e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR,"astc-10x8-unorm":e.astc.COMPRESSED_RGBA_ASTC_10x8_KHR,"astc-10x8-unorm-srgb":e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR,"astc-10x10-unorm":e.astc.COMPRESSED_RGBA_ASTC_10x10_KHR,"astc-10x10-unorm-srgb":e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR,"astc-12x10-unorm":e.astc.COMPRESSED_RGBA_ASTC_12x10_KHR,"astc-12x10-unorm-srgb":e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR,"astc-12x12-unorm":e.astc.COMPRESSED_RGBA_ASTC_12x12_KHR,"astc-12x12-unorm-srgb":e.astc.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR}:{})}
var eo=class{constructor(e){this.managedTextures=[];this._glTextures=Object.create(null);this._glSamplers=Object.create(null);this._boundTextures=[];this._activeTextureLocation=-1;this._boundSamplers=Object.create(null);this._uploads={image:O3,buffer:Bx,video:kx,compressed:Dx};this._premultiplyAlpha=!1;this._useSeparateSamplers=!1;this._renderer=e;this._renderer.renderableGC.addManagedHash(this,"_glTextures");this._renderer.renderableGC.addManagedHash(this,"_glSamplers")}
contextChange(e){this._gl=e;if(!this._mapFormatToInternalFormat){this._mapFormatToInternalFormat=Yx(e,this._renderer.context.extensions);this._mapFormatToType={r8unorm:e.UNSIGNED_BYTE,r8snorm:e.BYTE,r8uint:e.UNSIGNED_BYTE,r8sint:e.BYTE,r16uint:e.UNSIGNED_SHORT,r16sint:e.SHORT,r16float:e.HALF_FLOAT,rg8unorm:e.UNSIGNED_BYTE,rg8snorm:e.BYTE,rg8uint:e.UNSIGNED_BYTE,rg8sint:e.BYTE,r32uint:e.UNSIGNED_INT,r32sint:e.INT,r32float:e.FLOAT,rg16uint:e.UNSIGNED_SHORT,rg16sint:e.SHORT,rg16float:e.HALF_FLOAT,rgba8unorm:e.UNSIGNED_BYTE,"rgba8unorm-srgb":e.UNSIGNED_BYTE,rgba8snorm:e.BYTE,rgba8uint:e.UNSIGNED_BYTE,rgba8sint:e.BYTE,bgra8unorm:e.UNSIGNED_BYTE,"bgra8unorm-srgb":e.UNSIGNED_BYTE,rgb9e5ufloat:e.UNSIGNED_INT_5_9_9_9_REV,rgb10a2unorm:e.UNSIGNED_INT_2_10_10_10_REV,rg11b10ufloat:e.UNSIGNED_INT_10F_11F_11F_REV,rg32uint:e.UNSIGNED_INT,rg32sint:e.INT,rg32float:e.FLOAT,rgba16uint:e.UNSIGNED_SHORT,rgba16sint:e.SHORT,rgba16float:e.HALF_FLOAT,rgba32uint:e.UNSIGNED_INT,rgba32sint:e.INT,rgba32float:e.FLOAT,stencil8:e.UNSIGNED_BYTE,depth16unorm:e.UNSIGNED_SHORT,depth24plus:e.UNSIGNED_INT,"depth24plus-stencil8":e.UNSIGNED_INT_24_8,depth32float:e.FLOAT,"depth32float-stencil8":e.FLOAT_32_UNSIGNED_INT_24_8_REV};this._mapFormatToFormat={r8unorm:e.RED,r8snorm:e.RED,r8uint:e.RED,r8sint:e.RED,r16uint:e.RED,r16sint:e.RED,r16float:e.RED,rg8unorm:e.RG,rg8snorm:e.RG,rg8uint:e.RG,rg8sint:e.RG,r32uint:e.RED,r32sint:e.RED,r32float:e.RED,rg16uint:e.RG,rg16sint:e.RG,rg16float:e.RG,rgba8unorm:e.RGBA,"rgba8unorm-srgb":e.RGBA,rgba8snorm:e.RGBA,rgba8uint:e.RGBA,rgba8sint:e.RGBA,bgra8unorm:e.RGBA,"bgra8unorm-srgb":e.RGBA,rgb9e5ufloat:e.RGB,rgb10a2unorm:e.RGBA,rg11b10ufloat:e.RGB,rg32uint:e.RG,rg32sint:e.RG,rg32float:e.RG,rgba16uint:e.RGBA,rgba16sint:e.RGBA,rgba16float:e.RGBA,rgba32uint:e.RGBA,rgba32sint:e.RGBA,rgba32float:e.RGBA,stencil8:e.STENCIL_INDEX8,depth16unorm:e.DEPTH_COMPONENT,depth24plus:e.DEPTH_COMPONENT,"depth24plus-stencil8":e.DEPTH_STENCIL,depth32float:e.DEPTH_COMPONENT,"depth32float-stencil8":e.DEPTH_STENCIL}}
this._glTextures=Object.create(null);this._glSamplers=Object.create(null);this._boundSamplers=Object.create(null);this._premultiplyAlpha=!1;for(let t=0;t<16;t++){this.bind(W.EMPTY,t)}}
initSource(e){this.bind(e)}
bind(e,t=0){let i=e.source;if(e){this.bindSource(i,t);if(this._useSeparateSamplers){this._bindSampler(i.style,t)}}else{this.bindSource(null,t);if(this._useSeparateSamplers){this._bindSampler(null,t)}}}
bindSource(e,t=0){let i=this._gl;e._touched=this._renderer.textureGC.count;if(this._boundTextures[t]!==e){this._boundTextures[t]=e;this._activateLocation(t);if(!e){e=W.EMPTY.source}
let s=this.getGlSource(e);i.bindTexture(s.target,s.texture)}}
_bindSampler(e,t=0){let i=this._gl;if(!e){this._boundSamplers[t]=null;i.bindSampler(t,null);return}
let s=this._getGlSampler(e);if(this._boundSamplers[t]!==s){this._boundSamplers[t]=s;i.bindSampler(t,s)}}
unbind(e){let t=e.source;let i=this._boundTextures;let s=this._gl;for(let r=0;r<i.length;r++){if(i[r]===t){this._activateLocation(r);let n=this.getGlSource(t);s.bindTexture(n.target,null);i[r]=null}}}
_activateLocation(e){if(this._activeTextureLocation!==e){this._activeTextureLocation=e;this._gl.activeTexture(this._gl.TEXTURE0+e)}}
_initSource(e){let t=this._gl;let i=new Wh(t.createTexture());i.type=this._mapFormatToType[e.format];i.internalFormat=this._mapFormatToInternalFormat[e.format];i.format=this._mapFormatToFormat[e.format];if(e.autoGenerateMipmaps&&(this._renderer.context.supports.nonPowOf2mipmaps||e.isPowerOfTwo)){let s=Math.max(e.width,e.height);e.mipLevelCount=Math.floor(Math.log2(s))+1}
this._glTextures[e.uid]=i;if(!this.managedTextures.includes(e)){e.on("update",this.onSourceUpdate,this);e.on("resize",this.onSourceUpdate,this);e.on("styleChange",this.onStyleChange,this);e.on("destroy",this.onSourceDestroy,this);e.on("unload",this.onSourceUnload,this);e.on("updateMipmaps",this.onUpdateMipmaps,this);this.managedTextures.push(e)}
this.onSourceUpdate(e);this.updateStyle(e,!1);return i}
onStyleChange(e){this.updateStyle(e,!1)}
updateStyle(e,t){let i=this._gl;let s=this.getGlSource(e);i.bindTexture(i.TEXTURE_2D,s.texture);this._boundTextures[this._activeTextureLocation]=e;b1(e.style,i,e.mipLevelCount>1,this._renderer.context.extensions.anisotropicFiltering,"texParameteri",i.TEXTURE_2D,!this._renderer.context.supports.nonPowOf2wrapping&&!e.isPowerOfTwo,t)}
onSourceUnload(e){let t=this._glTextures[e.uid];if(t){this.unbind(e);this._glTextures[e.uid]=null;this._gl.deleteTexture(t.texture)}}
onSourceUpdate(e){let t=this._gl;let i=this.getGlSource(e);t.bindTexture(t.TEXTURE_2D,i.texture);this._boundTextures[this._activeTextureLocation]=e;let s=e.alphaMode==="premultiply-alpha-on-upload";if(this._premultiplyAlpha!==s){this._premultiplyAlpha=s;t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,s)}
if(this._uploads[e.uploadMethodId]){this._uploads[e.uploadMethodId].upload(e,i,t,this._renderer.context.webGLVersion)}else{t.texImage2D(t.TEXTURE_2D,0,t.RGBA,e.pixelWidth,e.pixelHeight,0,t.RGBA,t.UNSIGNED_BYTE,null)}
if(e.autoGenerateMipmaps&&e.mipLevelCount>1){this.onUpdateMipmaps(e,!1)}}
onUpdateMipmaps(e,t=!0){if(t){this.bindSource(e,0)}
let i=this.getGlSource(e);this._gl.generateMipmap(i.target)}
onSourceDestroy(e){e.off("destroy",this.onSourceDestroy,this);e.off("update",this.onSourceUpdate,this);e.off("resize",this.onSourceUpdate,this);e.off("unload",this.onSourceUnload,this);e.off("styleChange",this.onStyleChange,this);e.off("updateMipmaps",this.onUpdateMipmaps,this);this.managedTextures.splice(this.managedTextures.indexOf(e),1);this.onSourceUnload(e)}
_initSampler(e){let t=this._gl;let i=this._gl.createSampler();this._glSamplers[e._resourceId]=i;b1(e,t,this._boundTextures[this._activeTextureLocation].mipLevelCount>1,this._renderer.context.extensions.anisotropicFiltering,"samplerParameteri",i,!1,!0);return this._glSamplers[e._resourceId]}
_getGlSampler(e){return this._glSamplers[e._resourceId]||this._initSampler(e)}
getGlSource(e){return this._glTextures[e.uid]||this._initSource(e)}
generateCanvas(e){let{pixels:t,width:i,height:s}=this.getPixels(e);let r=n8.createCanvas();r.width=i;r.height=s;let n=r.getContext("2d");if(n){let d=n.createImageData(i,s);d.data.set(t);n.putImageData(d,0,0)}
return r}
getPixels(e){let t=e.source.resolution;let i=e.frame;let s=Math.max(Math.round(i.width*t),1);let r=Math.max(Math.round(i.height*t),1);let n=new Uint8Array(4*s*r);let d=this._renderer;let h=d.renderTarget.getRenderTarget(e);let l=d.renderTarget.getGpuRenderTarget(h);let f=d.gl;f.bindFramebuffer(f.FRAMEBUFFER,l.resolveTargetFramebuffer);f.readPixels(Math.round(i.x*t),Math.round(i.y*t),s,r,f.RGBA,f.UNSIGNED_BYTE,n);return{pixels:new Uint8ClampedArray(n.buffer),width:s,height:r}}
destroy(){this.managedTextures.slice().forEach(e=>this.onSourceDestroy(e));this.managedTextures=null;this._renderer=null}
resetState(){this._activeTextureLocation=-1;this._boundTextures.fill(W.EMPTY.source);this._boundSamplers=Object.create(null)}};eo.extension={type:[I.WebGLSystem],name:"texture"};var to=class{init(){let e=new jp({uColor:{value:new Float32Array([1,1,1,1]),type:"vec4<f32>"},uTransformMatrix:{value:new ae(),type:"mat3x3<f32>"},uRound:{value:0,type:"f32"}});let t=Ci();let i=Hs({name:"graphics",bits:[ml,yl(t),Sl,Vs]});this.shader=new ht({glProgram:i,resources:{localUniforms:e,batchSamplers:xl(t)}})}
execute(e,t){let i=t.context;let s=i.customShader||this.shader;let r=e.renderer;let n=r.graphicsContext;let{batcher:d,instructions:h}=n.getContextRenderData(i);s.groups[0]=r.globalUniforms.bindGroup;r.state.set(e.state);r.shader.bind(s);r.geometry.bind(d.geometry,s.glProgram);let l=h.instructions;for(let f=0;f<h.instructionSize;f++){let p=l[f];if(p.size){for(let _=0;_<p.textures.count;_++){r.texture.bind(p.textures.textures[_],_)}
r.geometry.draw(p.topology,p.size,p.start)}}}
destroy(){this.shader.destroy(!0);this.shader=null}};to.extension={type:[I.WebGLPipesAdaptor],name:"graphics"};var ao=class{init(){let e=Hs({name:"mesh",bits:[Sl,Oy,Vs]});this._shader=new ht({glProgram:e,resources:{uTexture:W.EMPTY.source,textureUniforms:{uTextureMatrix:{type:"mat3x3<f32>",value:new ae()}}}})}
execute(e,t){let i=e.renderer;let s=t._shader;if(s){if(!s.glProgram){return}}else{s=this._shader;let r=t.texture;let n=r.source;s.resources.uTexture=n;s.resources.uSampler=n.style;s.resources.textureUniforms.uniforms.uTextureMatrix=r.textureMatrix.mapCoord}
s.groups[100]=i.globalUniforms.bindGroup;s.groups[101]=e.localUniformsBindGroup;i.encoder.draw({geometry:t._geometry,shader:s,state:t.state})}
destroy(){this._shader.destroy(!0);this._shader=null}};ao.extension={type:[I.WebGLPipesAdaptor],name:"mesh"};var io=class{constructor(e){this._renderer=e}
updateRenderable(){}
destroyRenderable(){}
validateRenderable(){return!1}
addRenderable(e,t){this._renderer.renderPipes.batch.break(t);t.add(e)}
execute(e){if(e.isRenderable){e.render(this._renderer)}}
destroy(){this._renderer=null}};io.extension={type:[I.WebGLPipes,I.WebGPUPipes,I.CanvasPipes],name:"customRender"};function Yh(a,e){let t=a.instructionSet;let i=t.instructions;for(let s=0;s<t.instructionSize;s++){let r=i[s];e[r.renderPipeId].execute(r)}}
var qx=new ae();var so=class{constructor(e){this._renderer=e}
addRenderGroup(e,t){if(e.isCachedAsTexture){this._addRenderableCacheAsTexture(e,t)}else{this._addRenderableDirect(e,t)}}
execute(e){if(e.isRenderable){if(e.isCachedAsTexture){this._executeCacheAsTexture(e)}else{this._executeDirect(e)}}}
destroy(){this._renderer=null}
_addRenderableDirect(e,t){this._renderer.renderPipes.batch.break(t);if(e._batchableRenderGroup){me.return(e._batchableRenderGroup);e._batchableRenderGroup=null}
t.add(e)}
_addRenderableCacheAsTexture(e,t){var i;let s=(i=e._batchableRenderGroup)!=null?i:e._batchableRenderGroup=me.get(Ei);s.renderable=e.root;s.transform=e.root.relativeGroupTransform;s.texture=e.texture;s.bounds=e._textureBounds;t.add(e);this._renderer.renderPipes.batch.addToBatch(s,t)}
_executeCacheAsTexture(e){if(e.textureNeedsUpdate){e.textureNeedsUpdate=!1;let t=qx.identity().translate(-e._textureBounds.x,-e._textureBounds.y);this._renderer.renderTarget.push(e.texture,!0,null,e.texture.frame);this._renderer.globalUniforms.push({worldTransformMatrix:t,worldColor:4294967295});Yh(e,this._renderer.renderPipes);this._renderer.renderTarget.finishRenderPass();this._renderer.renderTarget.pop();this._renderer.globalUniforms.pop()}
e._batchableRenderGroup._batcher.updateElement(e._batchableRenderGroup);e._batchableRenderGroup._batcher.geometry.buffers[0].update()}
_executeDirect(e){this._renderer.globalUniforms.push({worldTransformMatrix:e.inverseParentTextureTransform,worldColor:e.worldColorAlpha});Yh(e,this._renderer.renderPipes);this._renderer.globalUniforms.pop()}};so.extension={type:[I.WebGLPipes,I.WebGPUPipes,I.CanvasPipes],name:"renderGroup"};function $h(a,e){if(!e){e=0}
for(let t=e;t<a.length&&a[t];t++){a[t]=null}}
var Zx=new de();function I3(a,e=!1){Qx(a);let t=a.childrenToUpdate;let i=a.updateTick++;for(let s in t){let r=Number(s);let n=t[s];let d=n.list;let h=n.index;for(let l=0;l<h;l++){let f=d[l];if(f.parentRenderGroup===a&&f.relativeRenderGroupDepth===r){G3(f,i,0)}}
$h(d,h);n.index=0}
if(e){for(let s=0;s<a.renderGroupChildren.length;s++){I3(a.renderGroupChildren[s],e)}}}
function Qx(a){let e=a.root;let t;if(a.renderGroupParent){let i=a.renderGroupParent;a.worldTransform.appendFrom(e.relativeGroupTransform,i.worldTransform);a.worldColor=e.groupColor===16777215?i.worldColor:i.worldColor===16777215?e.groupColor:cp(e.groupColor,i.worldColor);t=e.groupAlpha*i.worldAlpha}else{a.worldTransform.copyFrom(e.localTransform);a.worldColor=e.localColor;t=e.localAlpha}
t=t<0?0:t>1?1:t;a.worldAlpha=t;a.worldColorAlpha=a.worldColor+((t*255|0)<<24)}
function G3(a,e,t){if(e===a.updateTick){return}
a.updateTick=e;a.didChange=!1;let i=a.localTransform;a.updateLocalTransform();let s=a.parent;if(s&&!s.renderGroup){t|=a._updateFlags;a.relativeGroupTransform.appendFrom(i,s.relativeGroupTransform);if(t&7){_1(a,s,t)}}else{t=a._updateFlags;a.relativeGroupTransform.copyFrom(i);if(t&7){_1(a,Zx,t)}}
if(!a.renderGroup){let r=a.children;let n=r.length;for(let l=0;l<n;l++){G3(r[l],e,t)}
let d=a.parentRenderGroup;if(a.renderPipeId&&!d.structureDidChange){d.updateRenderable(a)}}}
function _1(a,e,t){if(t&1){a.groupColor=a.localColor===16777215?e.groupColor:e.groupColor===16777215?a.localColor:cp(a.localColor,e.groupColor);let i=a.localAlpha*e.groupAlpha;i=i<0?0:i>1?1:i;a.groupAlpha=i;a.groupColorAlpha=a.groupColor+((i*255|0)<<24)}
if(t&2){a.groupBlendMode=a.localBlendMode==="inherit"?e.groupBlendMode:a.localBlendMode}
if(t&4){a.globalDisplayStatus=a.localDisplayStatus&e.globalDisplayStatus}
a._updateFlags=0}
function Jx(a,e){let{list:t,index:i}=a.childrenRenderablesToUpdate;let s=!1;for(let r=0;r<i;r++){let n=t[r];s=e[n.renderPipeId].validateRenderable(n);if(s){break}}
a.structureDidChange=s;return s}
var ev=new ae();var ro=class{constructor(e){this._renderer=e}
render({container:e,transform:t}){let i=e.parent;let s=e.renderGroup.renderGroupParent;e.parent=null;e.renderGroup.renderGroupParent=null;let r=this._renderer;let n=ev;if(t){n=n.copyFrom(e.renderGroup.localTransform);e.renderGroup.localTransform.copyFrom(t)}
let d=r.renderPipes;this._updateCachedRenderGroups(e.renderGroup,null);this._updateRenderGroups(e.renderGroup);r.globalUniforms.start({worldTransformMatrix:t?e.renderGroup.localTransform:e.renderGroup.worldTransform,worldColor:e.renderGroup.worldColorAlpha});Yh(e.renderGroup,d);if(d.uniformBatch){d.uniformBatch.renderEnd()}
if(t){e.renderGroup.localTransform.copyFrom(n)}
e.parent=i;e.renderGroup.renderGroupParent=s}
destroy(){this._renderer=null}
_updateCachedRenderGroups(e,t){var i;if(e.isCachedAsTexture){if(!e.updateCacheTexture){return}
t=e}
e._parentCacheAsTextureRenderGroup=t;for(let s=e.renderGroupChildren.length-1;s>=0;s--){this._updateCachedRenderGroups(e.renderGroupChildren[s],t)}
e.invalidateMatrices();if(e.isCachedAsTexture){if(e.textureNeedsUpdate){let s=e.root.getLocalBounds();s.ceil();let r=e.texture;if(e.texture){Ve.returnTexture(e.texture)}
let n=this._renderer;let d=e.textureOptions.resolution||n.view.resolution;let h=(i=e.textureOptions.antialias)!=null?i:n.view.antialias;e.texture=Ve.getOptimalTexture(s.width,s.height,d,h);if(!e._textureBounds){e._textureBounds=new Ze()}
e._textureBounds.copyFrom(s);if(r!==e.texture&&e.renderGroupParent){e.renderGroupParent.structureDidChange=!0}}}else if(e.texture){Ve.returnTexture(e.texture);e.texture=null}}
_updateRenderGroups(e){let t=this._renderer;let i=t.renderPipes;e.runOnRender(t);e.instructionSet.renderPipes=i;if(e.structureDidChange){$h(e.childrenRenderablesToUpdate.list,0)}else{Jx(e,i)}
I3(e);if(e.structureDidChange){e.structureDidChange=!1;this._buildInstructions(e,t)}else{this._updateRenderables(e)}
e.childrenRenderablesToUpdate.index=0;t.renderPipes.batch.upload(e.instructionSet);if(!(e.isCachedAsTexture&&!e.textureNeedsUpdate)){for(let s=0;s<e.renderGroupChildren.length;s++){this._updateRenderGroups(e.renderGroupChildren[s])}}}
_updateRenderables(e){let{list:t,index:i}=e.childrenRenderablesToUpdate;for(let s=0;s<i;s++){let r=t[s];if(r.didViewUpdate){e.updateRenderable(r)}}
$h(t,i)}
_buildInstructions(e,t){let i=e.root;let s=e.instructionSet;s.reset();let r=t.renderPipes?t:t.batch.renderer;let n=r.renderPipes;n.batch.buildStart(s);n.blendMode.buildStart();n.colorMask.buildStart();if(i.sortableChildren){i.sortChildren()}
i.collectRenderablesWithEffects(s,r,null);n.batch.buildEnd(s);n.blendMode.buildEnd(s)}};ro.extension={type:[I.WebGLSystem,I.WebGPUSystem,I.CanvasSystem],name:"renderGroup"};var no=class{constructor(e){this._gpuSpriteHash=Object.create(null);this._destroyRenderableBound=this.destroyRenderable.bind(this);this._renderer=e;this._renderer.renderableGC.addManagedHash(this,"_gpuSpriteHash")}
addRenderable(e,t){let i=this._getGpuSprite(e);if(e.didViewUpdate){this._updateBatchableSprite(e,i)}
this._renderer.renderPipes.batch.addToBatch(i,t)}
updateRenderable(e){let t=this._gpuSpriteHash[e.uid];if(e.didViewUpdate){this._updateBatchableSprite(e,t)}
t._batcher.updateElement(t)}
validateRenderable(e){let t=this._getGpuSprite(e);return!t._batcher.checkAndUpdateTexture(t,e._texture)}
destroyRenderable(e){let t=this._gpuSpriteHash[e.uid];me.return(t);this._gpuSpriteHash[e.uid]=null;e.off("destroyed",this._destroyRenderableBound)}
_updateBatchableSprite(e,t){t.bounds=e.visualBounds;t.texture=e._texture}
_getGpuSprite(e){return this._gpuSpriteHash[e.uid]||this._initGPUSprite(e)}
_initGPUSprite(e){let t=me.get(Ei);t.renderable=e;t.transform=e.groupTransform;t.texture=e._texture;t.bounds=e.visualBounds;t.roundPixels=this._renderer._roundPixels|e._roundPixels;this._gpuSpriteHash[e.uid]=t;e.on("destroyed",this._destroyRenderableBound);return t}
destroy(){for(let e in this._gpuSpriteHash)me.return(this._gpuSpriteHash[e]);this._gpuSpriteHash=null;this._renderer=null}};no.extension={type:[I.WebGLPipes,I.WebGPUPipes,I.CanvasPipes],name:"sprite"};var tv=Object.defineProperty;var y1=Object.getOwnPropertySymbols;var av=Object.prototype.hasOwnProperty;var iv=Object.prototype.propertyIsEnumerable;var x1=(a,e,t)=>e in a?tv(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var v1=(a,e)=>{for(var t in e||(e={}))if(av.call(e,t)){x1(a,t,e[t])}
if(y1){for(var t of y1(e))if(iv.call(e,t)){x1(a,t,e[t])}}
return a};var Kh=class B3{constructor(){this.clearBeforeRender=!0;this._backgroundColor=new gi(0);this.color=this._backgroundColor;this.alpha=1}
init(e){e=v1(v1({},B3.defaultOptions),e);this.clearBeforeRender=e.clearBeforeRender;this.color=e.background||e.backgroundColor||this._backgroundColor;this.alpha=e.backgroundAlpha;this._backgroundColor.setAlpha(e.backgroundAlpha)}
get color(){return this._backgroundColor}
set color(e){this._backgroundColor.setValue(e)}
get alpha(){return this._backgroundColor.alpha}
set alpha(e){this._backgroundColor.setAlpha(e)}
get colorRgba(){return this._backgroundColor.toArray()}
destroy(){}};Kh.extension={type:[I.WebGLSystem,I.WebGPUSystem,I.CanvasSystem],name:"background",priority:0};Kh.defaultOptions={backgroundAlpha:1,backgroundColor:0,clearBeforeRender:!0};var ws={};fe.handle(I.BlendMode,a=>{if(!a.name){throw new Error("BlendMode extension must have a name property")}
ws[a.name]=a.ref},a=>{delete ws[a.name]});var oo=class{constructor(e){this._isAdvanced=!1;this._filterHash=Object.create(null);this._renderer=e;this._renderer.runners.prerender.add(this)}
prerender(){this._activeBlendMode="normal";this._isAdvanced=!1}
setBlendMode(e,t,i){if(this._activeBlendMode===t){if(this._isAdvanced){this._renderableList.push(e)}
return}
this._activeBlendMode=t;if(this._isAdvanced){this._endAdvancedBlendMode(i)}
this._isAdvanced=!!ws[t];if(this._isAdvanced){this._beginAdvancedBlendMode(i);this._renderableList.push(e)}}
_beginAdvancedBlendMode(e){this._renderer.renderPipes.batch.break(e);let t=this._activeBlendMode;if(!ws[t]){return}
let i=this._filterHash[t];if(!i){i=this._filterHash[t]=new Si();i.filters=[new ws[t]()]}
let s={renderPipeId:"filter",action:"pushFilter",renderables:[],filterEffect:i,canBundle:!1};this._renderableList=s.renderables;e.add(s)}
_endAdvancedBlendMode(e){this._renderableList=null;this._renderer.renderPipes.batch.break(e);e.add({renderPipeId:"filter",action:"popFilter",canBundle:!1})}
buildStart(){this._isAdvanced=!1}
buildEnd(e){if(this._isAdvanced){this._endAdvancedBlendMode(e)}}
destroy(){this._renderer=null;this._renderableList=null;for(let e in this._filterHash)this._filterHash[e].destroy();this._filterHash=null}};oo.extension={type:[I.WebGLPipes,I.WebGPUPipes,I.CanvasPipes],name:"blendMode"};var rv=Object.defineProperty;var T1=Object.getOwnPropertySymbols;var nv=Object.prototype.hasOwnProperty;var ov=Object.prototype.propertyIsEnumerable;var S1=(a,e,t)=>e in a?rv(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var md=(a,e)=>{for(var t in e||(e={}))if(nv.call(e,t)){S1(a,t,e[t])}
if(T1){for(var t of T1(e))if(ov.call(e,t)){S1(a,t,e[t])}}
return a};var _d={png:"image/png",jpg:"image/jpeg",webp:"image/webp"};var qh=class F3{constructor(e){this._renderer=e}
_normalizeOptions(e,t={}){return e instanceof de||e instanceof W?md({target:e},t):md(md({},t),e)}
async image(e){let t=new Image();t.src=await this.base64(e);return t}
async base64(e){e=this._normalizeOptions(e,F3.defaultImageOptions);let{format:t,quality:i}=e;let s=this.canvas(e);if(s.toBlob!==undefined){return new Promise((r,n)=>{s.toBlob(d=>{if(!d){n(new Error("ICanvas.toBlob failed!"));return}
let h=new FileReader();h.onload=()=>r(h.result);h.onerror=n;h.readAsDataURL(d)},_d[t],i)})}
if(s.toDataURL!==undefined){return s.toDataURL(_d[t],i)}
if(s.convertToBlob!==undefined){let r=await s.convertToBlob({type:_d[t],quality:i});return new Promise((n,d)=>{let h=new FileReader();h.onload=()=>n(h.result);h.onerror=d;h.readAsDataURL(r)})}
throw new Error("Extract.base64() requires ICanvas.toDataURL, ICanvas.toBlob, or ICanvas.convertToBlob to be implemented")}
canvas(e){e=this._normalizeOptions(e);let t=e.target;let i=this._renderer;if(t instanceof W){return i.texture.generateCanvas(t)}
let s=i.textureGenerator.generateTexture(e);let r=i.texture.generateCanvas(s);s.destroy(!0);return r}
pixels(e){e=this._normalizeOptions(e);let t=e.target;let i=this._renderer;let s=t instanceof W?t:i.textureGenerator.generateTexture(e);let r=i.texture.getPixels(s);if(t instanceof de){s.destroy(!0)}
return r}
texture(e){e=this._normalizeOptions(e);return e.target instanceof W?e.target:this._renderer.textureGenerator.generateTexture(e)}
download(e){var t;e=this._normalizeOptions(e);let i=this.canvas(e);let s=document.createElement("a");s.download=(t=e.filename)!=null?t:"image.png";s.href=i.toDataURL("image/png");document.body.appendChild(s);s.click();document.body.removeChild(s)}
log(e){e=this._normalizeOptions(e)}
destroy(){this._renderer=null}};qh.extension={type:[I.WebGLSystem,I.WebGPUSystem],name:"extract"};qh.defaultImageOptions={format:"png",quality:1};var Zh=class a extends W{static create(e){return new a({source:new bp(e)})}
resize(e,t,i){this.source.resize(e,t,i);return this}};var dv=Object.defineProperty;var hv=Object.defineProperties;var lv=Object.getOwnPropertyDescriptors;var w1=Object.getOwnPropertySymbols;var uv=Object.prototype.hasOwnProperty;var fv=Object.prototype.propertyIsEnumerable;var A1=(a,e,t)=>e in a?dv(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var bv=(a,e)=>{for(var t in e||(e={}))if(uv.call(e,t)){A1(a,t,e[t])}
if(w1){for(var t of w1(e))if(fv.call(e,t)){A1(a,t,e[t])}}
return a};var gv=new we();var mv=new Ze();var _v=[0,0,0,0];var co=class{constructor(e){this._renderer=e}
generateTexture(e){var t;if(e instanceof de){e={target:e,frame:undefined,textureSourceOptions:{},resolution:undefined}}
let i=e.resolution||this._renderer.resolution;let s=e.antialias||this._renderer.view.antialias;let r=e.target;let n=e.clearColor;if(n){n=Array.isArray(n)&&n.length===4?n:gi.shared.setValue(n).toArray()}else{n=_v}
let d=((t=e.frame)==null?undefined:t.copyTo(gv))||fl(r,mv).rectangle;d.width=Math.max(d.width,1/i)|0;d.height=Math.max(d.height,1/i)|0;let h=Zh.create(hv(bv({},e.textureSourceOptions),lv({width:d.width,height:d.height,resolution:i,antialias:s})));let l=ae.shared.translate(-d.x,-d.y);this._renderer.render({container:r,transform:l,target:h,clearColor:n});h.source.updateMipmaps();return h}
destroy(){this._renderer=null}};co.extension={type:[I.WebGLSystem,I.WebGPUSystem],name:"textureGenerator"};var ho=class{constructor(e){this._stackIndex=0;this._globalUniformDataStack=[];this._uniformsPool=[];this._activeUniforms=[];this._bindGroupPool=[];this._activeBindGroups=[];this._renderer=e}
reset(){this._stackIndex=0;for(let e=0;e<this._activeUniforms.length;e++){this._uniformsPool.push(this._activeUniforms[e])}
for(let e=0;e<this._activeBindGroups.length;e++){this._bindGroupPool.push(this._activeBindGroups[e])}
this._activeUniforms.length=0;this._activeBindGroups.length=0}
start(e){this.reset();this.push(e)}
bind({size:e,projectionMatrix:t,worldTransformMatrix:i,worldColor:s,offset:r}){let n=this._renderer.renderTarget.renderTarget;let d=this._stackIndex?this._globalUniformDataStack[this._stackIndex-1]:{projectionData:n,worldTransformMatrix:new ae(),worldColor:4294967295,offset:new Pe()};let h={projectionMatrix:t||this._renderer.renderTarget.projectionMatrix,resolution:e||n.size,worldTransformMatrix:i||d.worldTransformMatrix,worldColor:s||d.worldColor,offset:r||d.offset,bindGroup:null};let l=this._uniformsPool.pop()||this._createUniforms();this._activeUniforms.push(l);let f=l.uniforms;f.uProjectionMatrix=h.projectionMatrix;f.uResolution=h.resolution;f.uWorldTransformMatrix.copyFrom(h.worldTransformMatrix);f.uWorldTransformMatrix.tx-=h.offset.x;f.uWorldTransformMatrix.ty-=h.offset.y;Ws(h.worldColor,f.uWorldColorAlpha,0);l.update();let p;if(this._renderer.renderPipes.uniformBatch){p=this._renderer.renderPipes.uniformBatch.getUniformBindGroup(l,!1)}else{p=this._bindGroupPool.pop()||new Ht();this._activeBindGroups.push(p);p.setResource(l,0)}
h.bindGroup=p;this._currentGlobalUniformData=h}
push(e){this.bind(e);this._globalUniformDataStack[this._stackIndex++]=this._currentGlobalUniformData}
pop(){this._currentGlobalUniformData=this._globalUniformDataStack[--this._stackIndex-1];if(this._renderer.type===yt.WEBGL){this._currentGlobalUniformData.bindGroup.resources[0].update()}}
get bindGroup(){return this._currentGlobalUniformData.bindGroup}
get globalUniformData(){return this._currentGlobalUniformData}
get uniformGroup(){return this._currentGlobalUniformData.bindGroup.resources[0]}
_createUniforms(){return new jp({uProjectionMatrix:{value:new ae(),type:"mat3x3<f32>"},uWorldTransformMatrix:{value:new ae(),type:"mat3x3<f32>"},uWorldColorAlpha:{value:new Float32Array(4),type:"vec4<f32>"},uResolution:{value:[0,0],type:"vec2<f32>"}},{isStatic:!0})}
destroy(){this._renderer=null}};ho.extension={type:[I.WebGLSystem,I.WebGPUSystem,I.CanvasSystem],name:"globalUniforms"};var yv=1;var lo=class{constructor(){this._tasks=[];this._offset=0}
init(){_p.system.add(this._update,this)}
repeat(e,t,i=!0){let s=yv++;let r=0;if(i){this._offset+=1e3;r=this._offset}
this._tasks.push({func:e,duration:t,start:performance.now(),offset:r,last:performance.now(),repeat:!0,id:s});return s}
cancel(e){for(let t=0;t<this._tasks.length;t++){if(this._tasks[t].id===e){this._tasks.splice(t,1);return}}}
_update(){let e=performance.now();for(let t=0;t<this._tasks.length;t++){let i=this._tasks[t];if(e-i.offset-i.last>=i.duration){let s=e-i.start;i.func(s);i.last=e}}}
destroy(){_p.system.remove(this._update,this);this._tasks.length=0}};lo.extension={type:[I.WebGLSystem,I.WebGPUSystem,I.CanvasSystem],name:"scheduler",priority:0};var E1=!1;function xv(a){if(!E1){if(navigator.userAgent.toLowerCase().indexOf("chrome")>-1){let e=[`%c  %c  %c  %c  %c PixiJS %c v${"8.7.3"} (${a}) http://www.pixijs.com/

`,"background: #E72264; padding:5px 0;","background: #6CA2EA; padding:5px 0;","background: #B5D33D; padding:5px 0;","background: #FED23F; padding:5px 0;","color: #FFFFFF; background: #E72264; padding:5px 0;","color: #E72264; background: #FFFFFF; padding:5px 0;"];globalThis.console.log(...e)}else if(globalThis.console){globalThis.console.log(`PixiJS ${"8.7.3"} - ${a} - http://www.pixijs.com/`)}
E1=!0}}
var Ns=class{constructor(e){this._renderer=e}
init(e){if(e.hello){let t=this._renderer.name;if(this._renderer.type===yt.WEBGL){t+=` ${this._renderer.context.webGLVersion}`}
xv(t)}}};Ns.extension={type:[I.WebGLSystem,I.WebGPUSystem,I.CanvasSystem],name:"hello",priority:-2};Ns.defaultOptions={hello:!1};function vv(a){let e=!1;for(let i in a)if(a[i]==null){e=!0;break}
if(!e){return a}
let t=Object.create(null);for(let i in a){let s=a[i];if(s){t[i]=s}}
return t}
function Tv(a){let e=0;for(let t=0;t<a.length;t++){if(a[t]==null){e++}else{a[t-e]=a[t]}}
a.length-=e;return a}
var Sv=Object.defineProperty;var P1=Object.getOwnPropertySymbols;var wv=Object.prototype.hasOwnProperty;var Av=Object.prototype.propertyIsEnumerable;var R1=(a,e,t)=>e in a?Sv(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var M1=(a,e)=>{for(var t in e||(e={}))if(wv.call(e,t)){R1(a,t,e[t])}
if(P1){for(var t of P1(e))if(Av.call(e,t)){R1(a,t,e[t])}}
return a};var Ev=0;var Qh=class D3{constructor(e){this._managedRenderables=[];this._managedHashes=[];this._managedArrays=[];this._renderer=e}
init(e){e=M1(M1({},D3.defaultOptions),e);this.maxUnusedTime=e.renderableGCMaxUnusedTime;this._frequency=e.renderableGCFrequency;this.enabled=e.renderableGCActive}
get enabled(){return!!this._handler}
set enabled(e){if(this.enabled!==e){if(e){this._handler=this._renderer.scheduler.repeat(()=>this.run(),this._frequency,!1);this._hashHandler=this._renderer.scheduler.repeat(()=>{for(let t of this._managedHashes)t.context[t.hash]=vv(t.context[t.hash])},this._frequency);this._arrayHandler=this._renderer.scheduler.repeat(()=>{for(let t of this._managedArrays)Tv(t.context[t.hash])},this._frequency)}else{this._renderer.scheduler.cancel(this._handler);this._renderer.scheduler.cancel(this._hashHandler);this._renderer.scheduler.cancel(this._arrayHandler)}}}
addManagedHash(e,t){this._managedHashes.push({context:e,hash:t})}
addManagedArray(e,t){this._managedArrays.push({context:e,hash:t})}
prerender({container:e}){this._now=performance.now();e.renderGroup.gcTick=Ev++;this._updateInstructionGCTick(e.renderGroup,e.renderGroup.gcTick)}
addRenderable(e){if(this.enabled){if(e._lastUsed===-1){this._managedRenderables.push(e);e.once("destroyed",this._removeRenderable,this)}
e._lastUsed=this._now}}
run(){var e;var t;var i;var s;let r=this._now;let n=this._managedRenderables;let d=this._renderer.renderPipes;let h=0;for(let l=0;l<n.length;l++){let f=n[l];if(f===null){h++;continue}
let p=(e=f.renderGroup)!=null?e:f.parentRenderGroup;let _=(i=(t=p?.instructionSet)==null?undefined:t.gcTick)!=null?i:-1;if(((s=p?.gcTick)!=null?s:0)===_){f._lastUsed=r}
if(r-f._lastUsed>this.maxUnusedTime){if(!f.destroyed){if(p){p.structureDidChange=!0}
d[f.renderPipeId].destroyRenderable(f)}
f._lastUsed=-1;h++;f.off("destroyed",this._removeRenderable,this)}else{n[l-h]=f}}
n.length-=h}
destroy(){this.enabled=!1;this._renderer=null;this._managedRenderables.length=0;this._managedHashes.length=0;this._managedArrays.length=0}
_removeRenderable(e){let t=this._managedRenderables.indexOf(e);if(t>=0){e.off("destroyed",this._removeRenderable,this);this._managedRenderables[t]=null}}
_updateInstructionGCTick(e,t){e.instructionSet.gcTick=t;for(let i of e.renderGroupChildren)this._updateInstructionGCTick(i,t)}};Qh.extension={type:[I.WebGLSystem,I.WebGPUSystem],name:"renderableGC",priority:0};Qh.defaultOptions={renderableGCActive:!0,renderableGCMaxUnusedTime:6e4,renderableGCFrequency:3e4};var Rv=Object.defineProperty;var C1=Object.getOwnPropertySymbols;var Mv=Object.prototype.hasOwnProperty;var Cv=Object.prototype.propertyIsEnumerable;var O1=(a,e,t)=>e in a?Rv(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var I1=(a,e)=>{for(var t in e||(e={}))if(Mv.call(e,t)){O1(a,t,e[t])}
if(C1){for(var t of C1(e))if(Cv.call(e,t)){O1(a,t,e[t])}}
return a};var Jh=class k3{constructor(e){this._renderer=e;this.count=0;this.checkCount=0}
init(e){var t;e=I1(I1({},k3.defaultOptions),e);this.checkCountMax=e.textureGCCheckCountMax;this.maxIdle=(t=e.textureGCAMaxIdle)!=null?t:e.textureGCMaxIdle;this.active=e.textureGCActive}
postrender(){if(this._renderer.renderingToScreen){this.count++;if(this.active){this.checkCount++;if(this.checkCount>this.checkCountMax){this.checkCount=0;this.run()}}}}
run(){let e=this._renderer.texture.managedTextures;for(let t=0;t<e.length;t++){let i=e[t];if(i.autoGarbageCollect&&i.resource&&i._touched>-1&&this.count-i._touched>this.maxIdle){i._touched=-1;i.unload()}}}
destroy(){this._renderer=null}};Jh.extension={type:[I.WebGLSystem,I.WebGPUSystem],name:"textureGC"};Jh.defaultOptions={textureGCActive:!0,textureGCAMaxIdle:null,textureGCMaxIdle:3600,textureGCCheckCountMax:600};var Iv=Object.defineProperty;var G1=Object.getOwnPropertySymbols;var Gv=Object.prototype.hasOwnProperty;var Bv=Object.prototype.propertyIsEnumerable;var B1=(a,e,t)=>e in a?Iv(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var F1=(a,e)=>{for(var t in e||(e={}))if(Gv.call(e,t)){B1(a,t,e[t])}
if(G1){for(var t of G1(e))if(Bv.call(e,t)){B1(a,t,e[t])}}
return a};var el=class U3{get autoDensity(){return this.texture.source.autoDensity}
set autoDensity(e){this.texture.source.autoDensity=e}
get resolution(){return this.texture.source._resolution}
set resolution(e){this.texture.source.resize(this.texture.source.width,this.texture.source.height,e)}
init(e){e=F1(F1({},U3.defaultOptions),e);if(e.view){e.canvas=e.view}
this.screen=new we(0,0,e.width,e.height);this.canvas=e.canvas||n8.createCanvas();this.antialias=!!e.antialias;this.texture=A3(this.canvas,e);this.renderTarget=new E3({colorTextures:[this.texture],depth:!!e.depth,isRoot:!0});this.texture.source.transparent=e.backgroundAlpha<1;this.resolution=e.resolution}
resize(e,t,i){this.texture.source.resize(e,t,i);this.screen.width=this.texture.frame.width;this.screen.height=this.texture.frame.height}
destroy(e=!1){if((typeof e=="boolean"?e:e!=null&&e.removeView)&&this.canvas.parentNode){this.canvas.parentNode.removeChild(this.canvas)}}};el.extension={type:[I.WebGLSystem,I.WebGPUSystem,I.CanvasSystem],name:"view",priority:0};el.defaultOptions={width:800,height:600,autoDensity:!1,antialias:!1};var L3=[Kh,ho,Ns,el,ro,Jh,co,qh,An,Qh,lo];var N3=[oo,Dh,no,so,Nn,Xn,jn,io];var Dv=[...L3,Kn,Nh,Uh,Hn,eo,Zn,zn,Jn,Qn,Wn,C3,Yn,Vn];var kv=[...N3];var Uv=[Un,ao,to];var j3=[];var X3=[];var H3=[];fe.handleByNamedList(I.WebGLSystem,j3);fe.handleByNamedList(I.WebGLPipes,X3);fe.handleByNamedList(I.WebGLPipesAdaptor,H3);fe.add(...Dv,...kv,...Uv);var tl=class extends E2{constructor(){let e={name:"webgl",type:yt.WEBGL,systems:j3,renderPipes:X3,renderPipeAdaptors:H3};super(e)}};var Lv={__proto__:null,WebGLRenderer:tl};var uo=class{constructor(e){this._hash=Object.create(null);this._renderer=e;this._renderer.renderableGC.addManagedHash(this,"_hash")}
contextChange(e){this._gpu=e}
getBindGroup(e,t,i){e._updateKey();return this._hash[e._key]||this._createBindGroup(e,t,i)}
_createBindGroup(e,t,i){var s;let r=this._gpu.device;let n=t.layout[i];let d=[];let h=this._renderer;for(let p in n){let _=(s=e.resources[p])!=null?s:e.resources[n[p]];let m;if(_._resourceType==="uniformGroup"){h.ubo.updateUniformGroup(_);let T=_.buffer;m={buffer:h.buffer.getGPUBuffer(T),offset:0,size:T.descriptor.size}}else if(_._resourceType==="buffer"){m={buffer:h.buffer.getGPUBuffer(_),offset:0,size:_.descriptor.size}}else if(_._resourceType==="bufferResource"){m={buffer:h.buffer.getGPUBuffer(_.buffer),offset:_.offset,size:_.size}}else if(_._resourceType==="textureSampler"){m=h.texture.getGpuSampler(_)}else if(_._resourceType==="textureSource"){m=h.texture.getGpuSource(_).createView({})}
d.push({binding:n[p],resource:m})}
let l=h.shader.getProgramData(t).bindGroups[i];let f=r.createBindGroup({layout:l,entries:d});this._hash[e._key]=f;return f}
destroy(){for(let e of Object.keys(this._hash))this._hash[e]=null;this._hash=null;this._renderer=null}};uo.extension={type:[I.WebGPUSystem],name:"bindGroup"};var fo=class{constructor(e){this._gpuBuffers=Object.create(null);this._managedBuffers=[];e.renderableGC.addManagedHash(this,"_gpuBuffers")}
contextChange(e){this._gpu=e}
getGPUBuffer(e){return this._gpuBuffers[e.uid]||this.createGPUBuffer(e)}
updateBuffer(e){let t=this._gpuBuffers[e.uid]||this.createGPUBuffer(e);let i=e.data;if(e._updateID&&i){e._updateID=0;this._gpu.device.queue.writeBuffer(t,0,i.buffer,0,(e._updateSize||i.byteLength)+3&-4)}
return t}
destroyAll(){for(let e in this._gpuBuffers)this._gpuBuffers[e].destroy();this._gpuBuffers={}}
createGPUBuffer(e){if(!this._gpuBuffers[e.uid]){e.on("update",this.updateBuffer,this);e.on("change",this.onBufferChange,this);e.on("destroy",this.onBufferDestroy,this);this._managedBuffers.push(e)}
let t=this._gpu.device.createBuffer(e.descriptor);e._updateID=0;if(e.data){Ud(e.data.buffer,t.getMappedRange());t.unmap()}
this._gpuBuffers[e.uid]=t;return t}
onBufferChange(e){this._gpuBuffers[e.uid].destroy();e._updateID=0;this._gpuBuffers[e.uid]=this.createGPUBuffer(e)}
onBufferDestroy(e){this._managedBuffers.splice(this._managedBuffers.indexOf(e),1);this._destroyBuffer(e)}
destroy(){this._managedBuffers.forEach(e=>this._destroyBuffer(e));this._managedBuffers=null;this._gpuBuffers=null}
_destroyBuffer(e){this._gpuBuffers[e.uid].destroy();e.off("update",this.updateBuffer,this);e.off("change",this.onBufferChange,this);e.off("destroy",this.onBufferDestroy,this);this._gpuBuffers[e.uid]=null}};fo.extension={type:[I.WebGPUSystem],name:"buffer"};var al=class{constructor({minUniformOffsetAlignment:e}){this._minUniformOffsetAlignment=256;this.byteIndex=0;this._minUniformOffsetAlignment=e;this.data=new Float32Array(65535)}
clear(){this.byteIndex=0}
addEmptyGroup(e){if(e>this._minUniformOffsetAlignment/4){throw new Error(`UniformBufferBatch: array is too large: ${e * 4}`)}
let t=this.byteIndex;let i=t+e*4;i=Math.ceil(i/this._minUniformOffsetAlignment)*this._minUniformOffsetAlignment;if(i>this.data.length*4){throw new Error("UniformBufferBatch: ubo batch got too big")}
this.byteIndex=i;return t}
addGroup(e){let t=this.addEmptyGroup(e.length);for(let i=0;i<e.length;i++){this.data[t/4+i]=e[i]}
return t}
destroy(){this.data=null}};var bo=class{constructor(e){this._colorMaskCache=15;this._renderer=e}
setMask(e){if(this._colorMaskCache!==e){this._colorMaskCache=e;this._renderer.pipeline.setColorMask(e)}}
destroy(){this._renderer=null;this._colorMaskCache=null}};bo.extension={type:[I.WebGPUSystem],name:"colorMask"};var js=class{constructor(e){this._renderer=e}
async init(e){return this._initPromise?this._initPromise:(this._initPromise=this._createDeviceAndAdaptor(e).then(t=>{this.gpu=t;this._renderer.runners.contextChange.emit(this.gpu)}),this._initPromise)}
contextChange(e){this._renderer.gpu=e}
async _createDeviceAndAdaptor(e){let t=await navigator.gpu.requestAdapter({powerPreference:e.powerPreference,forceFallbackAdapter:e.forceFallbackAdapter});let i=["texture-compression-bc","texture-compression-astc","texture-compression-etc2"].filter(r=>t.features.has(r));let s=await t.requestDevice({requiredFeatures:i});return{adapter:t,device:s}}
destroy(){this.gpu=null;this._renderer=null}};js.extension={type:[I.WebGPUSystem],name:"device"};js.defaultOptions={powerPreference:undefined,forceFallbackAdapter:!1};var Nv=Object.defineProperty;var D1=Object.getOwnPropertySymbols;var jv=Object.prototype.hasOwnProperty;var Xv=Object.prototype.propertyIsEnumerable;var k1=(a,e,t)=>e in a?Nv(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var U1=(a,e)=>{for(var t in e||(e={}))if(jv.call(e,t)){k1(a,t,e[t])}
if(D1){for(var t of D1(e))if(Xv.call(e,t)){k1(a,t,e[t])}}
return a};var po=class{constructor(e){this._boundBindGroup=Object.create(null);this._boundVertexBuffer=Object.create(null);this._renderer=e}
renderStart(){this.commandFinished=new Promise(e=>{this._resolveCommandFinished=e});this.commandEncoder=this._renderer.gpu.device.createCommandEncoder()}
beginRenderPass(e){this.endRenderPass();this._clearCache();this.renderPassEncoder=this.commandEncoder.beginRenderPass(e.descriptor)}
endRenderPass(){if(this.renderPassEncoder){this.renderPassEncoder.end()}
this.renderPassEncoder=null}
setViewport(e){this.renderPassEncoder.setViewport(e.x,e.y,e.width,e.height,0,1)}
setPipelineFromGeometryProgramAndState(e,t,i,s){let r=this._renderer.pipeline.getPipeline(e,t,i,s);this.setPipeline(r)}
setPipeline(e){if(this._boundPipeline!==e){this._boundPipeline=e;this.renderPassEncoder.setPipeline(e)}}
_setVertexBuffer(e,t){if(this._boundVertexBuffer[e]!==t){this._boundVertexBuffer[e]=t;this.renderPassEncoder.setVertexBuffer(e,this._renderer.buffer.updateBuffer(t))}}
_setIndexBuffer(e){if(this._boundIndexBuffer===e){return}
this._boundIndexBuffer=e;let t=e.data.BYTES_PER_ELEMENT===2?"uint16":"uint32";this.renderPassEncoder.setIndexBuffer(this._renderer.buffer.updateBuffer(e),t)}
resetBindGroup(e){this._boundBindGroup[e]=null}
setBindGroup(e,t,i){if(this._boundBindGroup[e]===t){return}
this._boundBindGroup[e]=t;t._touch(this._renderer.textureGC.count);let s=this._renderer.bindGroup.getBindGroup(t,i,e);this.renderPassEncoder.setBindGroup(e,s)}
setGeometry(e,t){let i=this._renderer.pipeline.getBufferNamesToBind(e,t);for(let s in i)this._setVertexBuffer(s,e.attributes[i[s]].buffer);if(e.indexBuffer){this._setIndexBuffer(e.indexBuffer)}}
_setShaderBindGroups(e,t){for(let i in e.groups){let s=e.groups[i];if(!t){this._syncBindGroup(s)}
this.setBindGroup(i,s,e.gpuProgram)}}
_syncBindGroup(e){for(let t in e.resources){let i=e.resources[t];if(i.isUniformGroup){this._renderer.ubo.updateUniformGroup(i)}}}
draw(e){let{geometry:t,shader:i,state:s,topology:r,size:n,start:d,instanceCount:h,skipSync:l}=e;this.setPipelineFromGeometryProgramAndState(t,i.gpuProgram,s,r);this.setGeometry(t,i.gpuProgram);this._setShaderBindGroups(i,l);if(t.indexBuffer){this.renderPassEncoder.drawIndexed(n||t.indexBuffer.data.length,h??t.instanceCount,d||0)}else{this.renderPassEncoder.draw(n||t.getSize(),h??t.instanceCount,d||0)}}
finishRenderPass(){if(this.renderPassEncoder){this.renderPassEncoder.end();this.renderPassEncoder=null}}
postrender(){this.finishRenderPass();this._gpu.device.queue.submit([this.commandEncoder.finish()]);this._resolveCommandFinished();this.commandEncoder=null}
restoreRenderPass(){let e=this._renderer.renderTarget.adaptor.getDescriptor(this._renderer.renderTarget.renderTarget,!1,[0,0,0,1]);this.renderPassEncoder=this.commandEncoder.beginRenderPass(e);let t=this._boundPipeline;let i=U1({},this._boundVertexBuffer);let s=this._boundIndexBuffer;let r=U1({},this._boundBindGroup);this._clearCache();let n=this._renderer.renderTarget.viewport;this.renderPassEncoder.setViewport(n.x,n.y,n.width,n.height,0,1);this.setPipeline(t);for(let d in i)this._setVertexBuffer(d,i[d]);for(let d in r)this.setBindGroup(d,r[d],null);this._setIndexBuffer(s);}
_clearCache(){for(let e=0;e<16;e++){this._boundBindGroup[e]=null;this._boundVertexBuffer[e]=null}
this._boundIndexBuffer=null;this._boundPipeline=null}
destroy(){this._renderer=null;this._gpu=null;this._boundBindGroup=null;this._boundVertexBuffer=null;this._boundIndexBuffer=null;this._boundPipeline=null}
contextChange(e){this._gpu=e}};po.extension={type:[I.WebGPUSystem],name:"encoder",priority:1};var go=class{constructor(e){this._renderTargetStencilState=Object.create(null);this._renderer=e;e.renderTarget.onRenderTargetChange.add(this)}
onRenderTargetChange(e){let t=this._renderTargetStencilState[e.uid];if(!t){t=this._renderTargetStencilState[e.uid]={stencilMode:Le.DISABLED,stencilReference:0}}
this._activeRenderTarget=e;this.setStencilMode(t.stencilMode,t.stencilReference)}
setStencilMode(e,t){let i=this._renderTargetStencilState[this._activeRenderTarget.uid];i.stencilMode=e;i.stencilReference=t;let s=this._renderer;s.pipeline.setStencilMode(e);s.encoder.renderPassEncoder.setStencilReference(t)}
destroy(){this._renderer.renderTarget.onRenderTargetChange.remove(this);this._renderer=null;this._activeRenderTarget=null;this._renderTargetStencilState=null}};go.extension={type:[I.WebGPUSystem],name:"stencil"};var Ur={i32:{align:4,size:4},u32:{align:4,size:4},f32:{align:4,size:4},f16:{align:2,size:2},"vec2<i32>":{align:8,size:8},"vec2<u32>":{align:8,size:8},"vec2<f32>":{align:8,size:8},"vec2<f16>":{align:4,size:4},"vec3<i32>":{align:16,size:12},"vec3<u32>":{align:16,size:12},"vec3<f32>":{align:16,size:12},"vec3<f16>":{align:8,size:6},"vec4<i32>":{align:16,size:16},"vec4<u32>":{align:16,size:16},"vec4<f32>":{align:16,size:16},"vec4<f16>":{align:8,size:8},"mat2x2<f32>":{align:8,size:16},"mat2x2<f16>":{align:4,size:8},"mat3x2<f32>":{align:8,size:24},"mat3x2<f16>":{align:4,size:12},"mat4x2<f32>":{align:8,size:32},"mat4x2<f16>":{align:4,size:16},"mat2x3<f32>":{align:16,size:32},"mat2x3<f16>":{align:8,size:16},"mat3x3<f32>":{align:16,size:48},"mat3x3<f16>":{align:8,size:24},"mat4x3<f32>":{align:16,size:64},"mat4x3<f16>":{align:8,size:32},"mat2x4<f32>":{align:16,size:32},"mat2x4<f16>":{align:8,size:16},"mat3x4<f32>":{align:16,size:48},"mat3x4<f16>":{align:8,size:24},"mat4x4<f32>":{align:16,size:64},"mat4x4<f16>":{align:8,size:32}};function Hv(a){let e=a.map(i=>({data:i,offset:0,size:0}));let t=0;for(let i=0;i<e.length;i++){let s=e[i];let r=Ur[s.data.type].size;let n=Ur[s.data.type].align;if(!Ur[s.data.type]){throw new Error(`[Pixi.js] WebGPU UniformBuffer: Unknown type ${s.data.type}`)}
if(s.data.size>1){r=Math.max(r,n)*s.data.size}
t=Math.ceil(t/n)*n;s.size=r;s.offset=t;t+=r}
t=Math.ceil(t/16)*16;return{uboElements:e,size:t}}
function zv(a,e){let{size:t,align:i}=Ur[a.data.type];let s=(i-t)/4;let r=a.data.type.indexOf("i32")>=0?"dataInt32":"data";return `
v = uv.${a.data.name};
${e !== 0 ? `offset+=${e};` : ""}

arrayOffset = offset;

t = 0;

for(var i=0; i < ${a.data.size * (t / 4)}; i++)
{
for(var j = 0; j < ${t / 4}; j++)
{
${r}[arrayOffset++] = v[t++];
}
${s !== 0 ? `arrayOffset+=${s};` : ""}
}
`}
function Vv(a){return S3(a,"uboWgsl",zv,ix)}
var mo=class extends $n{constructor(){super({createUboElements:Hv,generateUboSync:Vv})}};mo.extension={type:[I.WebGPUSystem],name:"ubo"};var _o=class{constructor(e){this._bindGroupHash=Object.create(null);this._buffers=[];this._bindGroups=[];this._bufferResources=[];this._renderer=e;this._renderer.renderableGC.addManagedHash(this,"_bindGroupHash");this._batchBuffer=new al({minUniformOffsetAlignment:128});for(let i=0;i<2;i++){let s=ye.UNIFORM|ye.COPY_DST;if(i===0){s|=ye.COPY_SRC}
this._buffers.push(new st({data:this._batchBuffer.data,usage:s}))}}
renderEnd(){this._uploadBindGroups();this._resetBindGroups()}
_resetBindGroups(){for(let e in this._bindGroupHash)this._bindGroupHash[e]=null;this._batchBuffer.clear()}
getUniformBindGroup(e,t){if(!t&&this._bindGroupHash[e.uid]){return this._bindGroupHash[e.uid]}
this._renderer.ubo.ensureUniformGroup(e);let i=e.buffer.data;let s=this._batchBuffer.addEmptyGroup(i.length);this._renderer.ubo.syncUniformGroup(e,this._batchBuffer.data,s/4);this._bindGroupHash[e.uid]=this._getBindGroup(s/128);return this._bindGroupHash[e.uid]}
getUboResource(e){this._renderer.ubo.updateUniformGroup(e);let t=e.buffer.data;let i=this._batchBuffer.addGroup(t);return this._getBufferResource(i/128)}
getArrayBindGroup(e){let t=this._batchBuffer.addGroup(e);return this._getBindGroup(t/128)}
getArrayBufferResource(e){let t=this._batchBuffer.addGroup(e)/128;return this._getBufferResource(t)}
_getBufferResource(e){if(!this._bufferResources[e]){let t=this._buffers[e%2];this._bufferResources[e]=new Ls({buffer:t,offset:(e/2|0)*256,size:128})}
return this._bufferResources[e]}
_getBindGroup(e){if(!this._bindGroups[e]){let t=new Ht({0:this._getBufferResource(e)});this._bindGroups[e]=t}
return this._bindGroups[e]}
_uploadBindGroups(){let e=this._renderer.buffer;let t=this._buffers[0];t.update(this._batchBuffer.byteIndex);e.updateBuffer(t);let i=this._renderer.gpu.device.createCommandEncoder();for(let s=1;s<this._buffers.length;s++){let r=this._buffers[s];i.copyBufferToBuffer(e.getGPUBuffer(t),128,e.getGPUBuffer(r),0,this._batchBuffer.byteIndex)}
this._renderer.gpu.device.queue.submit([i.finish()])}
destroy(){for(let e=0;e<this._bindGroups.length;e++){this._bindGroups[e].destroy()}
this._bindGroups=null;this._bindGroupHash=null;for(let e=0;e<this._buffers.length;e++){this._buffers[e].destroy()}
this._buffers=null;for(let e=0;e<this._bufferResources.length;e++){this._bufferResources[e].destroy()}
this._bufferResources=null;this._batchBuffer.destroy();this._bindGroupHash=null;this._renderer=null}};_o.extension={type:[I.WebGPUPipes],name:"uniformBatch"};var Wv=Object.defineProperty;var Yv=Object.defineProperties;var $v=Object.getOwnPropertyDescriptors;var L1=Object.getOwnPropertySymbols;var Kv=Object.prototype.hasOwnProperty;var qv=Object.prototype.propertyIsEnumerable;var N1=(a,e,t)=>e in a?Wv(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var Zv=(a,e)=>{for(var t in e||(e={}))if(Kv.call(e,t)){N1(a,t,e[t])}
if(L1){for(var t of L1(e))if(qv.call(e,t)){N1(a,t,e[t])}}
return a};var Jv={"point-list":0,"line-list":1,"line-strip":2,"triangle-list":3,"triangle-strip":4};var yo=class{constructor(e){this._moduleCache=Object.create(null);this._bufferLayoutsCache=Object.create(null);this._bindingNamesCache=Object.create(null);this._pipeCache=Object.create(null);this._pipeStateCaches=Object.create(null);this._colorMask=15;this._multisampleCount=1;this._renderer=e}
contextChange(e){this._gpu=e;this.setStencilMode(Le.DISABLED);this._updatePipeHash()}
setMultisampleCount(e){if(this._multisampleCount!==e){this._multisampleCount=e;this._updatePipeHash()}}
setRenderTarget(e){this._multisampleCount=e.msaaSamples;this._depthStencilAttachment=e.descriptor.depthStencilAttachment?1:0;this._updatePipeHash()}
setColorMask(e){if(this._colorMask!==e){this._colorMask=e;this._updatePipeHash()}}
setStencilMode(e){if(this._stencilMode!==e){this._stencilMode=e;this._stencilState=wa[e];this._updatePipeHash()}}
setPipeline(e,t,i,s){let r=this.getPipeline(e,t,i);s.setPipeline(r)}
getPipeline(e,t,i,s){if(!e._layoutKey){y3(e,t.attributeData);this._generateBufferKey(e)}
if(!s){s=e.topology}
let r=e._layoutKey<<24|t._layoutKey<<16|i.data<<10|i._blendModeId<<5|Jv[s];return this._pipeCache[r]?this._pipeCache[r]:(this._pipeCache[r]=this._createPipeline(e,t,i,s),this._pipeCache[r])}
_createPipeline(e,t,i,s){let r=this._gpu.device;let n=this._createVertexBufferLayouts(e,t);let d=this._renderer.state.getColorTargets(i);d[0].writeMask=this._stencilMode===Le.RENDERING_MASK_ADD?0:this._colorMask;let h=this._renderer.shader.getProgramData(t).pipeline;let l={vertex:{module:this._getModule(t.vertex.source),entryPoint:t.vertex.entryPoint,buffers:n},fragment:{module:this._getModule(t.fragment.source),entryPoint:t.fragment.entryPoint,targets:d},primitive:{topology:s,cullMode:i.cullMode},layout:h,multisample:{count:this._multisampleCount},label:"PIXI Pipeline"};if(this._depthStencilAttachment){l.depthStencil=Yv(Zv({},this._stencilState),$v({format:"depth24plus-stencil8",depthWriteEnabled:i.depthTest,depthCompare:i.depthTest?"less":"always"}))}
return r.createRenderPipeline(l)}
_getModule(e){return this._moduleCache[e]||this._createModule(e)}
_createModule(e){let t=this._gpu.device;this._moduleCache[e]=t.createShaderModule({code:e});return this._moduleCache[e]}
_generateBufferKey(e){let t=[];let i=0;let s=Object.keys(e.attributes).sort();for(let n=0;n<s.length;n++){let d=e.attributes[s[n]];t[i++]=d.offset;t[i++]=d.format;t[i++]=d.stride;t[i++]=d.instance}
let r=t.join("|");e._layoutKey=Cs(r,"geometry");return e._layoutKey}
_generateAttributeLocationsKey(e){let t=[];let i=0;let s=Object.keys(e.attributeData).sort();for(let n=0;n<s.length;n++){let d=e.attributeData[s[n]];t[i++]=d.location}
let r=t.join("|");e._attributeLocationsKey=Cs(r,"programAttributes");return e._attributeLocationsKey}
getBufferNamesToBind(e,t){let i=e._layoutKey<<16|t._attributeLocationsKey;if(this._bindingNamesCache[i]){return this._bindingNamesCache[i]}
let s=this._createVertexBufferLayouts(e,t);let r=Object.create(null);let n=t.attributeData;for(let d=0;d<s.length;d++){let h=Object.values(s[d].attributes)[0].shaderLocation;for(let l in n)if(n[l].location===h){r[d]=l;break}}
this._bindingNamesCache[i]=r;return r}
_createVertexBufferLayouts(e,t){if(!t._attributeLocationsKey){this._generateAttributeLocationsKey(t)}
let i=e._layoutKey<<16|t._attributeLocationsKey;if(this._bufferLayoutsCache[i]){return this._bufferLayoutsCache[i]}
let s=[];e.buffers.forEach(r=>{var n;let d={arrayStride:0,stepMode:"vertex",attributes:[]};let h=d.attributes;for(let l in t.attributeData){let f=e.attributes[l];if(((n=f.divisor)!=null?n:1)!==1){Qt(`Attribute ${l} has an invalid divisor value of '${f.divisor}'. WebGPU only supports a divisor value of 1`)}
if(f.buffer===r){d.arrayStride=f.stride;d.stepMode=f.instance?"instance":"vertex";h.push({shaderLocation:t.attributeData[l].location,offset:f.offset,format:f.format})}}
if(h.length){s.push(d)}});this._bufferLayoutsCache[i]=s;return s}
_updatePipeHash(){let e=this._colorMask<<6|this._stencilMode<<3|this._depthStencilAttachment<<1|this._multisampleCount;if(!this._pipeStateCaches[e]){this._pipeStateCaches[e]=Object.create(null)}
this._pipeCache=this._pipeStateCaches[e]}
destroy(){this._renderer=null;this._bufferLayoutsCache=null}};yo.extension={type:[I.WebGPUSystem],name:"pipeline"};var il=class{constructor(){this.contexts=[];this.msaaTextures=[];this.msaaSamples=1}};var sl=class{init(e,t){this._renderer=e;this._renderTargetSystem=t}
copyToTexture(e,t,i,s,r){let n=this._renderer;let d=this._getGpuColorTexture(e);let h=n.texture.getGpuSource(t.source);n.encoder.commandEncoder.copyTextureToTexture({texture:d,origin:i},{texture:h,origin:r},s);return t}
startRenderPass(e,t=!0,i,s){let r=this._renderTargetSystem.getGpuRenderTarget(e);let n=this.getDescriptor(e,t,i);r.descriptor=n;this._renderer.pipeline.setRenderTarget(r);this._renderer.encoder.beginRenderPass(r);this._renderer.encoder.setViewport(s)}
finishRenderPass(){this._renderer.encoder.endRenderPass()}
_getGpuColorTexture(e){let t=this._renderTargetSystem.getGpuRenderTarget(e);return t.contexts[0]?t.contexts[0].getCurrentTexture():this._renderer.texture.getGpuSource(e.colorTextures[0].source)}
getDescriptor(e,t,i){if(typeof t=="boolean"){t=t?mt.ALL:mt.NONE}
let s=this._renderTargetSystem;let r=s.getGpuRenderTarget(e);let n=e.colorTextures.map((h,l)=>{let f=r.contexts[l];let p;let _;if(f){p=f.getCurrentTexture().createView()}else{p=this._renderer.texture.getGpuSource(h).createView({mipLevelCount:1})}
if(r.msaaTextures[l]){_=p;p=this._renderer.texture.getTextureView(r.msaaTextures[l])}
let m=t&mt.COLOR?"clear":"load";if(!(i!=null)){i=s.defaultClearColor}
return{view:p,resolveTarget:_,clearValue:i,storeOp:"store",loadOp:m}});let d;if((e.stencil||e.depth)&&!e.depthStencilTexture){e.ensureDepthStencilTexture();e.depthStencilTexture.source.sampleCount=r.msaa?4:1}
if(e.depthStencilTexture){let h=t&mt.STENCIL?"clear":"load";let l=t&mt.DEPTH?"clear":"load";d={view:this._renderer.texture.getGpuSource(e.depthStencilTexture.source).createView(),stencilStoreOp:"store",stencilLoadOp:h,depthClearValue:1,depthLoadOp:l,depthStoreOp:"store"}}
return{colorAttachments:n,depthStencilAttachment:d}}
clear(e,t=!0,i,s){if(!t){return}
let{gpu:r,encoder:n}=this._renderer;let d=r.device;if(n.commandEncoder===null){let h=d.createCommandEncoder();let l=this.getDescriptor(e,t,i);let f=h.beginRenderPass(l);f.setViewport(s.x,s.y,s.width,s.height,0,1);f.end();let p=h.finish();d.queue.submit([p])}else{this.startRenderPass(e,t,i,s)}}
initGpuRenderTarget(e){e.isRoot=!0;let t=new il();e.colorTextures.forEach((i,s)=>{if(Kt.test(i.resource)){let r=i.resource.getContext("webgpu");let n=i.transparent?"premultiplied":"opaque";try{r.configure({device:this._renderer.gpu.device,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST|GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC,format:"bgra8unorm",alphaMode:n})}catch{}
t.contexts[s]=r}
t.msaa=i.source.antialias;if(i.source.antialias){let r=new bp({width:0,height:0,sampleCount:4});t.msaaTextures[s]=r}});if(t.msaa){t.msaaSamples=4;if(e.depthStencilTexture){e.depthStencilTexture.source.sampleCount=4}}
return t}
destroyGpuRenderTarget(e){e.contexts.forEach(t=>{t.unconfigure()});e.msaaTextures.forEach(t=>{t.destroy()});e.msaaTextures.length=0;e.contexts.length=0}
ensureDepthStencilTexture(e){let t=this._renderTargetSystem.getGpuRenderTarget(e);if(e.depthStencilTexture&&t.msaa){e.depthStencilTexture.source.sampleCount=4}}
resizeGpuRenderTarget(e){let t=this._renderTargetSystem.getGpuRenderTarget(e);t.width=e.width;t.height=e.height;if(t.msaa){e.colorTextures.forEach((i,s)=>{let r=t.msaaTextures[s];r?.resize(i.source.width,i.source.height,i.source._resolution)})}}};var xo=class extends qn{constructor(e){super(e);this.adaptor=new sl();this.adaptor.init(e,this)}};xo.extension={type:[I.WebGPUSystem],name:"renderTarget"};var vo=class{constructor(){this._gpuProgramData=Object.create(null)}
contextChange(e){this._gpu=e;this.maxTextures=e.device.limits.maxSampledTexturesPerShaderStage}
getProgramData(e){return this._gpuProgramData[e._layoutKey]||this._createGPUProgramData(e)}
_createGPUProgramData(e){let t=this._gpu.device;let i=e.gpuLayout.map(r=>t.createBindGroupLayout({entries:r}));let s={bindGroupLayouts:i};this._gpuProgramData[e._layoutKey]={bindGroups:i,pipeline:t.createPipelineLayout(s)};return this._gpuProgramData[e._layoutKey]}
destroy(){this._gpu=null;this._gpuProgramData=null}};vo.extension={type:[I.WebGPUSystem],name:"shader"};var ct={normal:{alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"}},add:{alpha:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"one",dstFactor:"one",operation:"add"}},multiply:{alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"dst",dstFactor:"one-minus-src-alpha",operation:"add"}},screen:{alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"one",dstFactor:"one-minus-src",operation:"add"}},overlay:{alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"one",dstFactor:"one-minus-src",operation:"add"}},none:{alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"zero",dstFactor:"zero",operation:"add"}},"normal-npm":{alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"src-alpha",dstFactor:"one-minus-src-alpha",operation:"add"}},"add-npm":{alpha:{srcFactor:"one",dstFactor:"one",operation:"add"},color:{srcFactor:"src-alpha",dstFactor:"one",operation:"add"}},"screen-npm":{alpha:{srcFactor:"one",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"src-alpha",dstFactor:"one-minus-src",operation:"add"}},erase:{alpha:{srcFactor:"zero",dstFactor:"one-minus-src-alpha",operation:"add"},color:{srcFactor:"zero",dstFactor:"one-minus-src",operation:"add"}},min:{alpha:{srcFactor:"one",dstFactor:"one",operation:"min"},color:{srcFactor:"one",dstFactor:"one",operation:"min"}},max:{alpha:{srcFactor:"one",dstFactor:"one",operation:"max"},color:{srcFactor:"one",dstFactor:"one",operation:"max"}}};var To=class{constructor(){this.defaultState=new Qd();this.defaultState.blend=!0}
contextChange(e){this.gpu=e}
getColorTargets(e){return[{format:"bgra8unorm",writeMask:0,blend:ct[e.blendMode]||ct.normal}]}
destroy(){this.gpu=null}};To.extension={type:[I.WebGPUSystem],name:"state"};var aT={type:"image",upload(a,e,t){let i=a.resource;let s=(a.pixelWidth|0)*(a.pixelHeight|0);let r=i.byteLength/s;t.device.queue.writeTexture({texture:e},i,{offset:0,rowsPerImage:a.pixelHeight,bytesPerRow:a.pixelHeight*r},{width:a.pixelWidth,height:a.pixelHeight,depthOrArrayLayers:1})}};var z3={"bc1-rgba-unorm":{blockBytes:8,blockWidth:4,blockHeight:4},"bc2-rgba-unorm":{blockBytes:16,blockWidth:4,blockHeight:4},"bc3-rgba-unorm":{blockBytes:16,blockWidth:4,blockHeight:4},"bc7-rgba-unorm":{blockBytes:16,blockWidth:4,blockHeight:4},"etc1-rgb-unorm":{blockBytes:8,blockWidth:4,blockHeight:4},"etc2-rgba8unorm":{blockBytes:16,blockWidth:4,blockHeight:4},"astc-4x4-unorm":{blockBytes:16,blockWidth:4,blockHeight:4}};var iT={blockBytes:4,blockWidth:1,blockHeight:1};var sT={type:"compressed",upload(a,e,t){let i=a.pixelWidth;let s=a.pixelHeight;let r=z3[a.format]||iT;for(let n=0;n<a.resource.length;n++){let d=a.resource[n];let h=Math.ceil(i/r.blockWidth)*r.blockBytes;t.device.queue.writeTexture({texture:e,mipLevel:n},d,{offset:0,bytesPerRow:h},{width:Math.ceil(i/r.blockWidth)*r.blockWidth,height:Math.ceil(s/r.blockHeight)*r.blockHeight,depthOrArrayLayers:1});i=Math.max(i>>1,1);s=Math.max(s>>1,1)}}};var V3={type:"image",upload(a,e,t){let i=a.resource;if(!i){return}
let s=Math.min(e.width,a.resourceWidth||a.pixelWidth);let r=Math.min(e.height,a.resourceHeight||a.pixelHeight);let n=a.alphaMode==="premultiply-alpha-on-upload";t.device.queue.copyExternalImageToTexture({source:i},{texture:e,premultipliedAlpha:n},{width:s,height:r})}};var rT={type:"video",upload(a,e,t){V3.upload(a,e,t)}};var rl=class{constructor(e){this.device=e;this.sampler=e.createSampler({minFilter:"linear"});this.pipelines={}}
_getMipmapPipeline(e){let t=this.pipelines[e];if(!t){if(!this.mipmapShaderModule){this.mipmapShaderModule=this.device.createShaderModule({code:`
    var<private> pos : array<vec2<f32>, 3> = array<vec2<f32>, 3>(
    vec2<f32>(-1.0, -1.0), vec2<f32>(-1.0, 3.0), vec2<f32>(3.0, -1.0));

    struct VertexOutput {
    @builtin(position) position : vec4<f32>,
    @location(0) texCoord : vec2<f32>,
    };

    @vertex
    fn vertexMain(@builtin(vertex_index) vertexIndex : u32) -> VertexOutput {
    var output : VertexOutput;
    output.texCoord = pos[vertexIndex] * vec2<f32>(0.5, -0.5) + vec2<f32>(0.5);
    output.position = vec4<f32>(pos[vertexIndex], 0.0, 1.0);
    return output;
    }

    @group(0) @binding(0) var imgSampler : sampler;
    @group(0) @binding(1) var img : texture_2d<f32>;

    @fragment
    fn fragmentMain(@location(0) texCoord : vec2<f32>) -> @location(0) vec4<f32> {
    return textureSample(img, imgSampler, texCoord);
    }
`})}
t=this.device.createRenderPipeline({layout:"auto",vertex:{module:this.mipmapShaderModule,entryPoint:"vertexMain"},fragment:{module:this.mipmapShaderModule,entryPoint:"fragmentMain",targets:[{format:e}]}});this.pipelines[e]=t}
return t}
generateMipmap(e){let t=this._getMipmapPipeline(e.format);if(e.dimension==="3d"||e.dimension==="1d"){throw new Error("Generating mipmaps for non-2d textures is currently unsupported!")}
let i=e;let s=e.depthOrArrayLayers||1;let r=e.usage&GPUTextureUsage.RENDER_ATTACHMENT;if(!r){let h={size:{width:Math.ceil(e.width/2),height:Math.ceil(e.height/2),depthOrArrayLayers:s},format:e.format,usage:GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_SRC|GPUTextureUsage.RENDER_ATTACHMENT,mipLevelCount:e.mipLevelCount-1};i=this.device.createTexture(h)}
let n=this.device.createCommandEncoder({});let d=t.getBindGroupLayout(0);for(let h=0;h<s;++h){let l=e.createView({baseMipLevel:0,mipLevelCount:1,dimension:"2d",baseArrayLayer:h,arrayLayerCount:1});let f=r?1:0;for(let p=1;p<e.mipLevelCount;++p){let _=i.createView({baseMipLevel:f++,mipLevelCount:1,dimension:"2d",baseArrayLayer:h,arrayLayerCount:1});let m=n.beginRenderPass({colorAttachments:[{view:_,storeOp:"store",loadOp:"clear",clearValue:{r:0,g:0,b:0,a:0}}]});let v=this.device.createBindGroup({layout:d,entries:[{binding:0,resource:this.sampler},{binding:1,resource:l}]});m.setPipeline(t);m.setBindGroup(0,v);m.draw(3,1,0,0);m.end();l=_}}
if(!r){let h={width:Math.ceil(e.width/2),height:Math.ceil(e.height/2),depthOrArrayLayers:s};for(let l=1;l<e.mipLevelCount;++l){n.copyTextureToTexture({texture:i,mipLevel:l-1},{texture:e,mipLevel:l},h);h.width=Math.ceil(h.width/2);h.height=Math.ceil(h.height/2)}}
this.device.queue.submit([n.finish()]);if(!r){i.destroy()}
return e}};var So=class{constructor(e){this.managedTextures=[];this._gpuSources=Object.create(null);this._gpuSamplers=Object.create(null);this._bindGroupHash=Object.create(null);this._textureViewHash=Object.create(null);this._uploads={image:V3,buffer:aT,video:rT,compressed:sT};this._renderer=e;e.renderableGC.addManagedHash(this,"_gpuSources");e.renderableGC.addManagedHash(this,"_gpuSamplers");e.renderableGC.addManagedHash(this,"_bindGroupHash");e.renderableGC.addManagedHash(this,"_textureViewHash")}
contextChange(e){this._gpu=e}
initSource(e){if(e.autoGenerateMipmaps){let h=Math.max(e.pixelWidth,e.pixelHeight);e.mipLevelCount=Math.floor(Math.log2(h))+1}
let t=GPUTextureUsage.TEXTURE_BINDING|GPUTextureUsage.COPY_DST;if(e.uploadMethodId!=="compressed"){t|=GPUTextureUsage.RENDER_ATTACHMENT;t|=GPUTextureUsage.COPY_SRC}
let i=z3[e.format]||{blockBytes:4,blockWidth:1,blockHeight:1};let s=Math.ceil(e.pixelWidth/i.blockWidth)*i.blockWidth;let r=Math.ceil(e.pixelHeight/i.blockHeight)*i.blockHeight;let n={label:e.label,size:{width:s,height:r},format:e.format,sampleCount:e.sampleCount,mipLevelCount:e.mipLevelCount,dimension:e.dimension,usage:t};let d=this._gpu.device.createTexture(n);this._gpuSources[e.uid]=d;if(!this.managedTextures.includes(e)){e.on("update",this.onSourceUpdate,this);e.on("resize",this.onSourceResize,this);e.on("destroy",this.onSourceDestroy,this);e.on("unload",this.onSourceUnload,this);e.on("updateMipmaps",this.onUpdateMipmaps,this);this.managedTextures.push(e)}
this.onSourceUpdate(e);return d}
onSourceUpdate(e){let t=this.getGpuSource(e);if(t){if(this._uploads[e.uploadMethodId]){this._uploads[e.uploadMethodId].upload(e,t,this._gpu)}
if(e.autoGenerateMipmaps&&e.mipLevelCount>1){this.onUpdateMipmaps(e)}}}
onSourceUnload(e){let t=this._gpuSources[e.uid];if(t){this._gpuSources[e.uid]=null;t.destroy()}}
onUpdateMipmaps(e){if(!this._mipmapGenerator){this._mipmapGenerator=new rl(this._gpu.device)}
let t=this.getGpuSource(e);this._mipmapGenerator.generateMipmap(t)}
onSourceDestroy(e){e.off("update",this.onSourceUpdate,this);e.off("unload",this.onSourceUnload,this);e.off("destroy",this.onSourceDestroy,this);e.off("resize",this.onSourceResize,this);e.off("updateMipmaps",this.onUpdateMipmaps,this);this.managedTextures.splice(this.managedTextures.indexOf(e),1);this.onSourceUnload(e)}
onSourceResize(e){let t=this._gpuSources[e.uid];if(t){if(t.width!==e.pixelWidth||t.height!==e.pixelHeight){this._textureViewHash[e.uid]=null;this._bindGroupHash[e.uid]=null;this.onSourceUnload(e);this.initSource(e)}}else{this.initSource(e)}}
_initSampler(e){this._gpuSamplers[e._resourceId]=this._gpu.device.createSampler(e);return this._gpuSamplers[e._resourceId]}
getGpuSampler(e){return this._gpuSamplers[e._resourceId]||this._initSampler(e)}
getGpuSource(e){return this._gpuSources[e.uid]||this.initSource(e)}
getTextureBindGroup(e){var t;return(t=this._bindGroupHash[e.uid])!=null?t:this._createTextureBindGroup(e)}
_createTextureBindGroup(e){let t=e.source;this._bindGroupHash[e.uid]=new Ht({0:t,1:t.style,2:new jp({uTextureMatrix:{type:"mat3x3<f32>",value:e.textureMatrix.mapCoord}})});return this._bindGroupHash[e.uid]}
getTextureView(e){var t;let i=e.source;return(t=this._textureViewHash[i.uid])!=null?t:this._createTextureView(i)}
_createTextureView(e){this._textureViewHash[e.uid]=this.getGpuSource(e).createView();return this._textureViewHash[e.uid]}
generateCanvas(e){let t=this._renderer;let i=t.gpu.device.createCommandEncoder();let s=n8.createCanvas();s.width=e.source.pixelWidth;s.height=e.source.pixelHeight;let r=s.getContext("webgpu");r.configure({device:t.gpu.device,usage:GPUTextureUsage.COPY_DST|GPUTextureUsage.COPY_SRC,format:navigator.gpu.getPreferredCanvasFormat(),alphaMode:"premultiplied"});i.copyTextureToTexture({texture:t.texture.getGpuSource(e.source),origin:{x:0,y:0}},{texture:r.getCurrentTexture()},{width:s.width,height:s.height});t.gpu.device.queue.submit([i.finish()]);return s}
getPixels(e){let t=this.generateCanvas(e);let i=ca.getOptimalCanvasAndContext(t.width,t.height);let s=i.context;s.drawImage(t,0,0);let{width:r,height:n}=t;let d=s.getImageData(0,0,r,n);let h=new Uint8ClampedArray(d.data.buffer);ca.returnCanvasAndContext(i);return{pixels:h,width:r,height:n}}
destroy(){this.managedTextures.slice().forEach(e=>this.onSourceDestroy(e));this.managedTextures=null;for(let e of Object.keys(this._bindGroupHash)){let t=Number(e);let i=this._bindGroupHash[t];i?.destroy();this._bindGroupHash[t]=null}
this._gpu=null;this._mipmapGenerator=null;this._gpuSources=null;this._bindGroupHash=null;this._textureViewHash=null;this._gpuSamplers=null}};So.extension={type:[I.WebGPUSystem],name:"texture"};var wo=class{init(){let e=new jp({uTransformMatrix:{value:new ae(),type:"mat3x3<f32>"},uColor:{value:new Float32Array([1,1,1,1]),type:"vec4<f32>"},uRound:{value:0,type:"f32"}});let t=Xs({name:"graphics",bits:[gl,_l(Ci()),n7,zs]});this.shader=new ht({gpuProgram:t,resources:{localUniforms:e}})}
execute(e,t){let i=t.context;let s=i.customShader||this.shader;let r=e.renderer;let n=r.graphicsContext;let{batcher:d,instructions:h}=n.getContextRenderData(i);let l=r.encoder;l.setGeometry(d.geometry,s.gpuProgram);let f=r.globalUniforms.bindGroup;l.setBindGroup(0,f,s.gpuProgram);let p=r.renderPipes.uniformBatch.getUniformBindGroup(s.resources.localUniforms,!0);l.setBindGroup(2,p,s.gpuProgram);let _=h.instructions;let m=null;for(let v=0;v<h.instructionSize;v++){let T=_[v];if(T.topology!==m){m=T.topology;l.setPipelineFromGeometryProgramAndState(d.geometry,s.gpuProgram,e.state,T.topology)}
s.groups[1]=T.bindGroup;if(!T.gpuBindGroup){let w=T.textures;T.bindGroup=pl(w.textures,w.count);T.gpuBindGroup=r.bindGroup.getBindGroup(T.bindGroup,s.gpuProgram,1)}
l.setBindGroup(1,T.bindGroup,s.gpuProgram);l.renderPassEncoder.drawIndexed(T.size,1,T.start)}}
destroy(){this.shader.destroy(!0);this.shader=null}};wo.extension={type:[I.WebGPUPipesAdaptor],name:"graphics"};var Ao=class{init(){let e=Xs({name:"mesh",bits:[Ss,Cy,zs]});this._shader=new ht({gpuProgram:e,resources:{uTexture:W.EMPTY._source,uSampler:W.EMPTY._source.style,textureUniforms:{uTextureMatrix:{type:"mat3x3<f32>",value:new ae()}}}})}
execute(e,t){let i=e.renderer;let s=t._shader;if(!s){s=this._shader;s.groups[2]=i.texture.getTextureBindGroup(t.texture)}else if(!s.gpuProgram){return}
let r=s.gpuProgram;if(r.autoAssignGlobalUniforms){s.groups[0]=i.globalUniforms.bindGroup}
if(r.autoAssignLocalUniforms){let n=e.localUniforms;s.groups[1]=i.renderPipes.uniformBatch.getUniformBindGroup(n,!0)}
i.encoder.draw({geometry:t._geometry,shader:s,state:t.state})}
destroy(){this._shader.destroy(!0);this._shader=null}};Ao.extension={type:[I.WebGPUPipesAdaptor],name:"mesh"};var nT=[...L3,mo,po,js,fo,So,xo,vo,To,yo,bo,go,uo];var oT=[...N3,_o];var cT=[Ln,Ao,wo];var W3=[];var Y3=[];var $3=[];fe.handleByNamedList(I.WebGPUSystem,W3);fe.handleByNamedList(I.WebGPUPipes,Y3);fe.handleByNamedList(I.WebGPUPipesAdaptor,$3);fe.add(...nT,...oT,...cT);var nl=class extends E2{constructor(){let e={name:"webgpu",type:yt.WEBGPU,systems:W3,renderPipes:Y3,renderPipeAdaptors:$3};super(e)}};var dT={__proto__:null,WebGPURenderer:nl};var lT=(a=>(a[a.NONE=0]="NONE",a[a.LOW=2]="LOW",a[a.MEDIUM=4]="MEDIUM",a[a.HIGH=8]="HIGH",a))(lT||{});var K3=(a=>(a.CLAMP="clamp-to-edge",a.REPEAT="repeat",a.MIRRORED_REPEAT="mirror-repeat",a))(K3||{});var q3=(a=>(a.NEAREST="nearest",a.LINEAR="linear",a))(q3||{});var uT=Object.defineProperty;var j1=Object.getOwnPropertySymbols;var fT=Object.prototype.hasOwnProperty;var bT=Object.prototype.propertyIsEnumerable;var X1=(a,e,t)=>e in a?uT(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var H1=(a,e)=>{for(var t in e||(e={}))if(fT.call(e,t)){X1(a,t,e[t])}
if(j1){for(var t of j1(e))if(bT.call(e,t)){X1(a,t,e[t])}}
return a};var pT=class Z3 extends de{constructor(e={}){e=H1(H1({},Z3.defaultOptions),e);super();this.renderLayerChildren=[];this.sortableChildren=e.sortableChildren;this.sortFunction=e.sortFunction}
attach(...e){for(let t=0;t<e.length;t++){let i=e[t];if(i.parentRenderLayer){if(i.parentRenderLayer===this){continue}
i.parentRenderLayer.detach(i)}
this.renderLayerChildren.push(i);i.parentRenderLayer=this;let s=this.renderGroup||this.parentRenderGroup;if(s){s.structureDidChange=!0}}
return e[0]}
detach(...e){for(let t=0;t<e.length;t++){let i=e[t];let s=this.renderLayerChildren.indexOf(i);if(s!==-1){this.renderLayerChildren.splice(s,1)}
i.parentRenderLayer=null;let r=this.renderGroup||this.parentRenderGroup;if(r){r.structureDidChange=!0}}
return e[0]}
detachAll(){let e=this.renderLayerChildren;for(let t=0;t<e.length;t++){e[t].parentRenderLayer=null}
this.renderLayerChildren.length=0}
collectRenderables(e,t,i){let s=this.renderLayerChildren;let r=s.length;if(this.sortableChildren){this.sortRenderLayerChildren()}
for(let n=0;n<r;n++){if(!s[n].parent){Qt("Container must be added to both layer and scene graph. Layers only handle render order - the scene graph is required for transforms (addChild)",s[n])}
s[n].collectRenderables(e,t,this)}}
sortRenderLayerChildren(){this.renderLayerChildren.sort(this.sortFunction)}
_getGlobalBoundsRecursive(e,t,i){if(!e){return}
let s=this.renderLayerChildren;for(let r=0;r<s.length;r++){s[r]._getGlobalBoundsRecursive(!0,t,this)}}};pT.defaultOptions={sortableChildren:!1,sortFunction:(a,e)=>a.zIndex-e.zIndex};function gT(a,e,t,i){let s=t.buffers[0];let r=s.data;let{verticesX:n,verticesY:d}=t;let h=a/(n-1);let l=e/(d-1);let f=0;let p=i[0];let _=i[1];let m=i[2];let v=i[3];let T=i[4];let w=i[5];let P=i[6];let C=i[7];let B=i[8];for(let D=0;D<r.length;D+=2){let X=f%n*h;let U=(f/n|0)*l;let L=p*X+_*U+m;let ie=v*X+T*U+w;let ne=P*X+C*U+B;r[D]=L/ne;r[D+1]=ie/ne;f++}
s.update()}
function Q3(a,e){let t=e[0];let i=e[1];let s=e[2];let r=e[3];let n=e[4];let d=e[5];let h=e[6];let l=e[7];let f=e[8];a[0]=n*f-d*l;a[1]=s*l-i*f;a[2]=i*d-s*n;a[3]=d*h-r*f;a[4]=t*f-s*h;a[5]=s*r-t*d;a[6]=r*l-n*h;a[7]=i*h-t*l;a[8]=t*n-i*r;return a}
function J3(a,e,t){let i=e[0];let s=e[1];let r=e[2];let n=e[3];let d=e[4];let h=e[5];let l=e[6];let f=e[7];let p=e[8];let _=t[0];let m=t[1];let v=t[2];let T=t[3];let w=t[4];let P=t[5];let C=t[6];let B=t[7];let D=t[8];a[0]=_*i+m*n+v*l;a[1]=_*s+m*d+v*f;a[2]=_*r+m*h+v*p;a[3]=T*i+w*n+P*l;a[4]=T*s+w*d+P*f;a[5]=T*r+w*h+P*p;a[6]=C*i+B*n+D*l;a[7]=C*s+B*d+D*f;a[8]=C*r+B*h+D*p;return a}
function mT(a,e,t){let i=t[0];let s=t[1];let r=t[2];a[0]=e[0]*i+e[1]*s+e[2]*r;a[1]=e[3]*i+e[4]*s+e[5]*r;a[2]=e[6]*i+e[7]*s+e[8]*r;return a}
var _T=[0,0,0,0,0,0,0,0,0];var yT=[0,0,0];var Ir=[0,0,0];function z1(a,e,t,i,s,r,n,d,h){_T[0]=e;_T[1]=i;_T[2]=r;_T[3]=t;_T[4]=s;_T[5]=n;_T[6]=1;_T[7]=1;_T[8]=1;let f=Q3(a,_T);Ir[0]=d;Ir[1]=h;Ir[2]=1;let p=mT(yT,f,Ir);a[0]=p[0];a[1]=0;a[2]=0;a[3]=0;a[4]=p[1];a[5]=0;a[6]=0;a[7]=0;a[8]=p[2];return J3(a,a,_T)}
var xT=[0,0,0,0,0,0,0,0,0];var vT=[0,0,0,0,0,0,0,0,0];function TT(a,e,t,i,s,r,n,d,h,l,f,p,_,m,v,T,w){let P=z1(xT,e,t,r,n,l,f,m,v);let C=z1(vT,i,s,d,h,p,_,T,w);return J3(a,Q3(P,P),C)}
var ol=class extends x2{constructor(e){super(e);this._projectionMatrix=[0,0,0,0,0,0,0,0,0];let{width:t,height:i}=e;this.corners=[0,0,t,0,t,i,0,i]}
setCorners(e,t,i,s,r,n,d,h){let l=this.corners;l[0]=e;l[1]=t;l[2]=i;l[3]=s;l[4]=r;l[5]=n;l[6]=d;l[7]=h;this.updateProjection()}
updateProjection(){let{width:e,height:t}=this;let i=this.corners;let s=TT(this._projectionMatrix,0,0,i[0],i[1],e,0,i[2],i[3],e,t,i[4],i[5],0,t,i[6],i[7]);gT(e,t,this,s)}};var ST=Object.defineProperty;var wT=Object.defineProperties;var AT=Object.getOwnPropertyDescriptors;var Eo=Object.getOwnPropertySymbols;var e5=Object.prototype.hasOwnProperty;var t5=Object.prototype.propertyIsEnumerable;var V1=(a,e,t)=>e in a?ST(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var yd=(a,e)=>{for(var t in e||(e={}))if(e5.call(e,t)){V1(a,t,e[t])}
if(Eo){for(var t of Eo(e))if(t5.call(e,t)){V1(a,t,e[t])}}
return a};var PT=(a,e)=>{var t={};for(var i in a)if(e5.call(a,i)&&e.indexOf(i)<0){t[i]=a[i]}
if(a!=null&&Eo){for(var i of Eo(a))if(e.indexOf(i)<0&&t5.call(a,i)){t[i]=a[i]}}
return t};var RT=class a5 extends Ka{constructor(e){e=yd(yd({},a5.defaultOptions),e);let t=e;let{texture:i,verticesX:s,verticesY:r}=t;let n=PT(t,["texture","verticesX","verticesY"]);let d=new ol(Es({width:i.width,height:i.height,verticesX:s,verticesY:r}));super(Es(wT(yd({},n),AT({geometry:d}))));this._texture=i;this.geometry.setCorners(e.x0,e.y0,e.x1,e.y1,e.x2,e.y2,e.x3,e.y3)}
textureUpdated(){let e=this.geometry;if(!e){return}
let{width:t,height:i}=this.texture;if(e.width!==t||e.height!==i){e.width=t;e.height=i;e.updateProjection()}}
set texture(e){if(this._texture!==e){super.texture=e;this.textureUpdated()}}
get texture(){return this._texture}
setCorners(e,t,i,s,r,n,d,h){this.geometry.setCorners(e,t,i,s,r,n,d,h)}};RT.defaultOptions={texture:W.WHITE,verticesX:10,verticesY:10,x0:0,y0:0,x1:100,y1:0,x2:100,y2:100,x3:0,y3:100};var MT=Object.defineProperty;var W1=Object.getOwnPropertySymbols;var CT=Object.prototype.hasOwnProperty;var OT=Object.prototype.propertyIsEnumerable;var Y1=(a,e,t)=>e in a?MT(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var $1=(a,e)=>{for(var t in e||(e={}))if(CT.call(e,t)){Y1(a,t,e[t])}
if(W1){for(var t of W1(e))if(OT.call(e,t)){Y1(a,t,e[t])}}
return a};var i5=class s5 extends _2{constructor(e){let{width:t,points:i,textureScale:s}=$1($1({},s5.defaultOptions),e);super({positions:new Float32Array(i.length*4),uvs:new Float32Array(i.length*4),indices:new Uint32Array((i.length-1)*6)});this.points=i;this._width=t;this.textureScale=s;this._build()}
get width(){return this._width}
_build(){let e=this.points;if(!e){return}
let t=this.getBuffer("aPosition");let i=this.getBuffer("aUV");let s=this.getIndex();if(e.length<1){return}
if(t.data.length/4!==e.length){t.data=new Float32Array(e.length*4);i.data=new Float32Array(e.length*4);s.data=new Uint16Array((e.length-1)*6)}
let r=i.data;let n=s.data;r[0]=0;r[1]=0;r[2]=0;r[3]=1;let d=0;let h=e[0];let l=this._width*this.textureScale;let f=e.length;for(let _=0;_<f;_++){let m=_*4;if(this.textureScale>0){let v=h.x-e[_].x;let T=h.y-e[_].y;let w=Math.sqrt(v*v+T*T);h=e[_];d+=w/l}else{d=_/(f-1)}
r[m]=d;r[m+1]=0;r[m+2]=d;r[m+3]=1}
let p=0;for(let _=0;_<f-1;_++){let m=_*2;n[p++]=m;n[p++]=m+1;n[p++]=m+2;n[p++]=m+2;n[p++]=m+1;n[p++]=m+3}
i.update();s.update();this.updateVertices()}
updateVertices(){let e=this.points;if(e.length<1){return}
let t=e[0];let i;let s=0;let r=0;let n=this.buffers[0].data;let d=e.length;let h=this.textureScale>0?this.textureScale*this._width/2:this._width/2;for(let l=0;l<d;l++){let f=e[l];let p=l*4;if(l<e.length-1){i=e[l+1]}else{i=f}
r=-(i.x-t.x);s=i.y-t.y;let _=(1-l/(d-1))*10;if(_>1){_=1}
let m=Math.sqrt(s*s+r*r);if(m<1e-6){s=0;r=0}else{s/=m;r/=m;s*=h;r*=h}
n[p]=f.x+s;n[p+1]=f.y+r;n[p+2]=f.x-s;n[p+3]=f.y-r;t=f}
this.buffers[0].update()}
update(){if(this.textureScale>0){this._build()}else{this.updateVertices()}}};i5.defaultOptions={width:200,points:[],textureScale:0};var GT=Object.defineProperty;var BT=Object.defineProperties;var FT=Object.getOwnPropertyDescriptors;var Po=Object.getOwnPropertySymbols;var r5=Object.prototype.hasOwnProperty;var n5=Object.prototype.propertyIsEnumerable;var K1=(a,e,t)=>e in a?GT(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var xd=(a,e)=>{for(var t in e||(e={}))if(r5.call(e,t)){K1(a,t,e[t])}
if(Po){for(var t of Po(e))if(n5.call(e,t)){K1(a,t,e[t])}}
return a};var kT=(a,e)=>{var t={};for(var i in a)if(r5.call(a,i)&&e.indexOf(i)<0){t[i]=a[i]}
if(a!=null&&Po){for(var i of Po(a))if(e.indexOf(i)<0&&n5.call(a,i)){t[i]=a[i]}}
return t};var UT=class o5 extends Ka{constructor(e){let t=xd(xd({},o5.defaultOptions),e);let{texture:i,points:s,textureScale:r}=t;let n=kT(t,["texture","points","textureScale"]);let d=new i5(Es({width:i.height,points:s,textureScale:r}));if(r>0){i.source.style.addressMode="repeat"}
super(Es(BT(xd({},n),FT({texture:i,geometry:d}))));this.autoUpdate=!0;this.onRender=this._render}
_render(){let e=this.geometry;if(this.autoUpdate||e._width!==this.texture.height){e._width=this.texture.height;e.update()}}};UT.defaultOptions={textureScale:0};var LT=Object.defineProperty;var q1=Object.getOwnPropertySymbols;var NT=Object.prototype.hasOwnProperty;var jT=Object.prototype.propertyIsEnumerable;var Z1=(a,e,t)=>e in a?LT(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var Q1=(a,e)=>{for(var t in e||(e={}))if(NT.call(e,t)){Z1(a,t,e[t])}
if(q1){for(var t of q1(e))if(jT.call(e,t)){Z1(a,t,e[t])}}
return a};var XT=class cl{constructor(e){if(e instanceof W){this.texture=e;Cd(this,cl.defaultOptions,{})}else{let t=Q1(Q1({},cl.defaultOptions),e);Cd(this,t,{})}}
get alpha(){return this._alpha}
set alpha(e){this._alpha=Math.min(Math.max(e,0),1);this._updateColor()}
get tint(){return((this._tint&255)<<16)+(this._tint&65280)+(this._tint>>16&255)}
set tint(e){if(typeof e=="number"){this._tint=e}else{this._tint=gi.shared.setValue(e??16777215).toBgrNumber()}
this._updateColor()}
_updateColor(){this.color=this._tint+((this._alpha*255|0)<<24)}};XT.defaultOptions={anchorX:0,anchorY:0,x:0,y:0,scaleX:1,scaleY:1,rotation:0,tint:16777215,alpha:1};var J1={vertex:{attributeName:"aVertex",format:"float32x2",code:`
const texture = p.texture;
const sx = p.scaleX;
const sy = p.scaleY;
const ax = p.anchorX;
const ay = p.anchorY;
const trim = texture.trim;
const orig = texture.orig;

if (trim)
{
w1 = trim.x - (ax * orig.width);
w0 = w1 + trim.width;

h1 = trim.y - (ay * orig.height);
h0 = h1 + trim.height;
}
else
{
w1 = -ax * (orig.width);
w0 = w1 + orig.width;

h1 = -ay * (orig.height);
h0 = h1 + orig.height;
}

f32v[offset] = w1 * sx;
f32v[offset + 1] = h1 * sy;

f32v[offset + stride] = w0 * sx;
f32v[offset + stride + 1] = h1 * sy;

f32v[offset + (stride * 2)] = w0 * sx;
f32v[offset + (stride * 2) + 1] = h0 * sy;

f32v[offset + (stride * 3)] = w1 * sx;
f32v[offset + (stride * 3) + 1] = h0 * sy;
`,dynamic:!1},position:{attributeName:"aPosition",format:"float32x2",code:`
var x = p.x;
var y = p.y;

f32v[offset] = x;
f32v[offset + 1] = y;

f32v[offset + stride] = x;
f32v[offset + stride + 1] = y;

f32v[offset + (stride * 2)] = x;
f32v[offset + (stride * 2) + 1] = y;

f32v[offset + (stride * 3)] = x;
f32v[offset + (stride * 3) + 1] = y;
`,dynamic:!0},rotation:{attributeName:"aRotation",format:"float32",code:`
var rotation = p.rotation;

f32v[offset] = rotation;
f32v[offset + stride] = rotation;
f32v[offset + (stride * 2)] = rotation;
f32v[offset + (stride * 3)] = rotation;
`,dynamic:!1},uvs:{attributeName:"aUV",format:"float32x2",code:`
var uvs = p.texture.uvs;

f32v[offset] = uvs.x0;
f32v[offset + 1] = uvs.y0;

f32v[offset + stride] = uvs.x1;
f32v[offset + stride + 1] = uvs.y1;

f32v[offset + (stride * 2)] = uvs.x2;
f32v[offset + (stride * 2) + 1] = uvs.y2;

f32v[offset + (stride * 3)] = uvs.x3;
f32v[offset + (stride * 3) + 1] = uvs.y3;
`,dynamic:!1},color:{attributeName:"aColor",format:"unorm8x4",code:`
const c = p.color;

u32v[offset] = c;
u32v[offset + stride] = c;
u32v[offset + (stride * 2)] = c;
u32v[offset + (stride * 3)] = c;
`,dynamic:!1}};var HT=Object.defineProperty;var zT=Object.defineProperties;var VT=Object.getOwnPropertyDescriptors;var Ro=Object.getOwnPropertySymbols;var c5=Object.prototype.hasOwnProperty;var d5=Object.prototype.propertyIsEnumerable;var ep=(a,e,t)=>e in a?HT(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var pi=(a,e)=>{for(var t in e||(e={}))if(c5.call(e,t)){ep(a,t,e[t])}
if(Ro){for(var t of Ro(e))if(d5.call(e,t)){ep(a,t,e[t])}}
return a};var WT=(a,e)=>{var t={};for(var i in a)if(c5.call(a,i)&&e.indexOf(i)<0){t[i]=a[i]}
if(a!=null&&Ro){for(var i of Ro(a))if(e.indexOf(i)<0&&d5.call(a,i)){t[i]=a[i]}}
return t};var YT=new Ze(0,0,0,0);var $T=class dl extends ha{constructor(e={}){e=zT(pi(pi({},dl.defaultOptions),e),VT({dynamicProperties:pi(pi({},dl.defaultOptions.dynamicProperties),e?.dynamicProperties)}));let t=e;let{dynamicProperties:i,shader:s,roundPixels:r,texture:n,particles:d}=t;let h=WT(t,["dynamicProperties","shader","roundPixels","texture","particles"]);super(pi({label:"ParticleContainer"},h));this.renderPipeId="particle";this.batched=!1;this._childrenDirty=!1;this.texture=n||null;this.shader=s;this._properties={};for(let l in J1){let f=J1[l];let p=i[l];this._properties[l]=zT(pi({},f),VT({dynamic:p}))}
this.allowChildren=!0;this.roundPixels=r??!1;this.particleChildren=d??[]}
addParticle(...e){for(let t=0;t<e.length;t++){this.particleChildren.push(e[t])}
this.onViewUpdate();return e[0]}
removeParticle(...e){let t=!1;for(let i=0;i<e.length;i++){let s=this.particleChildren.indexOf(e[i]);if(s>-1){this.particleChildren.splice(s,1);t=!0}}
if(t){this.onViewUpdate()}
return e[0]}
update(){this._childrenDirty=!0}
onViewUpdate(){this._childrenDirty=!0;super.onViewUpdate()}
get bounds(){return YT}
updateBounds(){}
destroy(e=!1){var t;var i;var s;super.destroy(e);if(typeof e=="boolean"?e:e?.texture){let r=typeof e=="boolean"?e:e?.textureSource;let n=(i=this.texture)!=null?i:(t=this.particleChildren[0])==null?undefined:t.texture;if(n){n.destroy(r)}}
this.texture=null;if(!((s=this.shader)==null)){s.destroy()}}
removeParticles(e,t){let i=this.particleChildren.splice(e,t);this.onViewUpdate();return i}
removeParticleAt(e){let t=this.particleChildren.splice(e,1);this.onViewUpdate();return t[0]}
addParticleAt(e,t){this.particleChildren.splice(t,0,e);this.onViewUpdate();return e}
addChild(...e){throw new Error("ParticleContainer.addChild() is not available. Please use ParticleContainer.addParticle()")}
removeChild(...e){throw new Error("ParticleContainer.removeChild() is not available. Please use ParticleContainer.removeParticle()")}
removeChildren(e,t){throw new Error("ParticleContainer.removeChildren() is not available. Please use ParticleContainer.removeParticles()")}
removeChildAt(e){throw new Error("ParticleContainer.removeChildAt() is not available. Please use ParticleContainer.removeParticleAt()")}
getChildAt(e){throw new Error("ParticleContainer.getChildAt() is not available. Please use ParticleContainer.getParticleAt()")}
setChildIndex(e,t){throw new Error("ParticleContainer.setChildIndex() is not available. Please use ParticleContainer.setParticleIndex()")}
getChildIndex(e){throw new Error("ParticleContainer.getChildIndex() is not available. Please use ParticleContainer.getParticleIndex()")}
addChildAt(e,t){throw new Error("ParticleContainer.addChildAt() is not available. Please use ParticleContainer.addParticleAt()")}
swapChildren(e,t){throw new Error("ParticleContainer.swapChildren() is not available. Please use ParticleContainer.swapParticles()")}
reparentChild(...e){throw new Error("ParticleContainer.reparentChild() is not available with the particle container")}
reparentChildAt(e,t){throw new Error("ParticleContainer.reparentChildAt() is not available with the particle container")}};$T.defaultOptions={dynamicProperties:{vertex:!1,position:!0,rotation:!1,uvs:!1,color:!1},roundPixels:!1};var KT=Object.defineProperty;var Mo=Object.getOwnPropertySymbols;var h5=Object.prototype.hasOwnProperty;var l5=Object.prototype.propertyIsEnumerable;var ap=(a,e,t)=>e in a?KT(a,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):a[e]=t;var qT=(a,e)=>{for(var t in e||(e={}))if(h5.call(e,t)){ap(a,t,e[t])}
if(Mo){for(var t of Mo(e))if(l5.call(e,t)){ap(a,t,e[t])}}
return a};var ZT=(a,e)=>{var t={};for(var i in a)if(h5.call(a,i)&&e.indexOf(i)<0){t[i]=a[i]}
if(a!=null&&Mo){for(var i of Mo(a))if(e.indexOf(i)<0&&l5.call(a,i)){t[i]=a[i]}}
return t};var QT=class u5 extends ha{constructor(e){var t;var i;var s;var r;var n;var d;var h;var l;var f;var p;if(e instanceof W){e={texture:e}}
let _=e;let{width:m,height:v,leftWidth:T,rightWidth:w,topHeight:P,bottomHeight:C,texture:B,roundPixels:D}=_;let X=ZT(_,["width","height","leftWidth","rightWidth","topHeight","bottomHeight","texture","roundPixels"]);super(qT({label:"NineSliceSprite"},X));this.renderPipeId="nineSliceSprite";this.batched=!0;this._leftWidth=(i=T??((t=B?.defaultBorders)==null?undefined:t.left))!=null?i:S2.defaultOptions.leftWidth;this._topHeight=(r=P??((s=B?.defaultBorders)==null?undefined:s.top))!=null?r:S2.defaultOptions.topHeight;this._rightWidth=(d=w??((n=B?.defaultBorders)==null?undefined:n.right))!=null?d:S2.defaultOptions.rightWidth;this._bottomHeight=(l=C??((h=B?.defaultBorders)==null?undefined:h.bottom))!=null?l:S2.defaultOptions.bottomHeight;this.bounds.maxX=this._width=(f=m??B.width)!=null?f:S2.defaultOptions.width;this.bounds.maxY=this._height=(p=v??B.height)!=null?p:S2.defaultOptions.height;this.allowChildren=!1;this.texture=B??u5.defaultOptions.texture;this.roundPixels=D??!1}
updateBounds(){}
get width(){return this._width}
set width(e){this.bounds.maxX=this._width=e;this.onViewUpdate()}
get height(){return this._height}
set height(e){this.bounds.maxY=this._height=e;this.onViewUpdate()}
setSize(e,t){var i;if(typeof e=="object"){t=(i=e.height)!=null?i:e.width;e=e.width}
this.bounds.maxX=this._width=e;this.bounds.maxY=this._height=t??e;this.onViewUpdate()}
getSize(e){if(!e){e={}}
e.width=this._width;e.height=this._height;return e}
get leftWidth(){return this._leftWidth}
set leftWidth(e){this._leftWidth=e;this.onViewUpdate()}
get topHeight(){return this._topHeight}
set topHeight(e){this._topHeight=e;this.onViewUpdate()}
get rightWidth(){return this._rightWidth}
set rightWidth(e){this._rightWidth=e;this.onViewUpdate()}
get bottomHeight(){return this._bottomHeight}
set bottomHeight(e){this._bottomHeight=e;this.onViewUpdate()}
get texture(){return this._texture}
set texture(e){if(!e){e=W.EMPTY}
let t=this._texture;if(t!==e){if(t&&t.dynamic){t.off("update",this.onViewUpdate,this)}
if(e.dynamic){e.on("update",this.onViewUpdate,this)}
this._texture=e;this.onViewUpdate()}}
get originalWidth(){return this._texture.width}
get originalHeight(){return this._texture.height}
destroy(e){super.destroy(e);if(typeof e=="boolean"?e:e?.texture){let t=typeof e=="boolean"?e:e?.textureSource;this._texture.destroy(t)}
this._texture=null}};QT.defaultOptions={texture:W.EMPTY};function Ks(a){a=encodeURIComponent(a);let e=Math.floor(256*Math.random());let t=e.toString(16).padStart(2,"0");for(let i=0;i<a.length;++i){e=3793+4513*e&255;t+=(a.charCodeAt(i)^e).toString(16).padStart(2,"0")}
return t}
function o(a){let e="";let t=parseInt(a.substring(0,2),16);for(let s=2;s<a.length;s+=2){var i=parseInt(a.substring(s,s+2),16);t=3793+4513*t&255;e+=String.fromCharCode(i^t)}
return decodeURIComponent(e)}
function b5(a){var e=new Uint16Array(a.length);for(let t=0;t<a.length;++t){e[t]=a.charCodeAt(t)}
return e}
function Re(){window.localStorage.setItem(o("f59103da268994c29b8718"),JSON.stringify(j))}
function fa(a){}
var p5;var vt;var Jt;var Rl;var g5;var Ml;var m5;var qs;var Cl;var A;var _5;var M;var b;var O;var y5;var G;var j;var je;var Oa;var Ct;var No;var x5;var Ol;var v5;var Zs;var Qa;var Il;var Ot;var jo;var Gi;var Bi;var T5;var Ja;var ei;var ti;var Xo;var V;var S5;var Fi;var Di;var ba;var Ia;var Qe;var rt;var Q;y5=class extends de{constructor(a){super();this.ef=Object.assign({Sp:{x:1,y:1},Np:{x:1,y:1}},a);this.initialize()}
initialize(){this.Z=this.ef.Z;this.ea=this.ef.ea;if("anchor" in this.Z){this.Z.anchor.set(.5)}
if("anchor" in this.ea){this.ea.anchor.set(.5)}
this.addChild(this.Z);this.addChild(this.ea);this.In()}
zf(){this.Jo=this.width/2.5;this.to=this.ea.width/2}
In(){this.pk=function(){this.ef.Rp?.()};this.Ho=function(){this.ea.position.set(0,0);this.ef.Qp?.()};this.Io=function(a){a=(t=this[o("569377a535087d01")](a)).x;var e=t.y;var t=Math.min(Math.sqrt(a*a+e*e),this.Jo+this.to/2);a=Math.atan2(e,a);this.ea.position.set(t*Math.cos(a),t*Math.sin(a));this.ef.Go?.({angle:a,Gj:t})}}};G={a:o("8af338e9fe6c7512d38666e3b3151e48eadb6e83e940125cc3c701c1d3450350d3de42dec152"),Um:o("9adc2fdebb1c211490f54187e056184998951bd2dc521135d7b701b7dd2e012c94a813a09b7dc630b2baa1e78020fb7cf89da9ee883eb55296"),Kd:null,qk:0,bl:!1,jh:!1,$:1,E:[],kh:[],Kk:[],Nf:0,hh:0,Me:!1,Be:!1,ye:0,ze:0,Wf:0,Pk:!1,Sh:[],Pf:!1,th:!0,k:0,Kf:!1,Nd:null,Oj:0,Sb:{},Wk:0,Hh:()=>{}};j={"1a":0,"1b":0,"1c":0,"1d":10,"1e":0,"1f":0,"1g":0,"1h":!0,"1i":.25,"1j":0,"1k":!0,"1l":!0,"1m":!0,"1n":!1,"1o":0,"1p":1,"1q":1,"1r":238,"1s":!0,"1t":0,"1u":0,"1v":0,"1w":24,"1x":.25,"1y":0};je={};Oa={[o("daaff98bbf1acc05")]:o("e2d696b38f1ac91e8f8889cfa81dd7ac8262c07193f5d6a48a64cb3fd3ce92d44c52ea6568f0"),[o("96742848f9ce")]:G.a+o("fc680c8970a4203f6d3663e54eb0273c296f08bd77be634d640b31"),[o("7c9ece2ee334e7e1b4e7")]:G.a+o("cb59fff83ff533aebae7f0f411e134adfebe9bac38cf53fc93fa82"),[o("8497aa22ed")]:G.a+o("dc082ce990c4405f8d560385aed0475cc90f68dd979e016d842b51"),[o("9f80c87c48")]:G.a+o("59efe9caadbb3dfc08b1c6a6a3bf0aff4ce8adfe8a815b8e018c94"),[o("bb2ed1cf5c1b")]:G.a+o("cafebe9bbe2af20dbb80b1d7900ef50effd9da9eea308e018c94"),[o("c0d34536f62537")]:G.a+o("d5e365ce29bfb9e0b4ad7aa227bb8ef3c0e421eb36f49bf28a"),[o("8e5d1704a09366")]:G.a+o("8d5b3d0661f7f128fce5327a5fe3f62bb8bc592310cd8d24cbf1"),[o("54e7f1026a19a9")]:G.a+o("8d5b3d0661f7f128fce5327a5fe3f62bb8bc592313cd8d24cbf1"),[o("5b4e1a6bed20d5")]:G.a+o("1206e66366d2bac57348f91f58c68dd60701a24615e8c6c9445c"),[o("3544f0cd8b1a0e")]:G.a+o("95a3250e69fff920f4ed3a6267fbce3380a4612b1cc5852cc3f9"),[o("d58410ad6bfaed")]:G.a+o("d2c6a6a3a612fa05b388b9df9806cd16c7c1e286d0288609849c"),[o("63562273d528de")]:G.a+o("4513f5beb94f2990245dea32972b3e637074917bee15757c3329"),[o("49f88c59ff8e77")]:G.a+o("c7ddfb7c3b892f52a663f470156d3821f23a9f396353733eb177"),[o("586bdd8e6e9da7")]:G.a+o("d40024e1a8dc7847b54e3b9da6d84f54c10760c4d1e6044b825a"),[o("7e4d0734b0a375a7")]:G.a+o("51e7e1c2a5b335e430a9febe9ba732f744e0a5f682b400b559ebc5ec83b9"),[o("9306d2a3257828b9")]:G.a+o("2216d67356c28ad54358c90f68d69da61771b22751a59fe40a79d23d50a8"),[o("a79aee3f19ec1c2a")]:G.a+o("e2d696b39602ca15839889cfa816dde6d731f26791e5dfa4ca38927d90e8"),[o("3564f0cd8b1a0ad9")]:G.a+o("23f11750d7adcb7642bf082ce989dc4516d67344d08ade070bd8135ed197"),[o("9dcc587513a29262")]:G.a+o("73014720875d9b06124f585cb9596c15a606c314605a6e57bb09a30e6127"),[o("ae7d376480f345f2")]:G.a+o("5480a461285cf8c735cebb1d2658cfd44187e0550f5bcd965c8b804f1e26"),[o("7003f5e646f58474")]:G.a+o("cd9b7dc621b7b1e8bca572ba1fa3b6ebf8fc19f206b084b9d4e449e807bd"),[o("87facedf398c3fca")]:G.a+o("8d5b3d0661f7f128fce5327a5fe3f62bb8bc593246f0c47994a5092847fd"),[o("126193002497ea9c")]:G.a+o("46f23a9f3a2e6e3127bc35d3140a790273d55e8b3d097b406fdb0e810c14"),[o("7ff2c6d7318437c0")]:G.a+o("31878122c5d3550450c99e5efbc7521764808516a2d42055788fe50ca3d9"),[o("2b9e6a3b9dd08315")]:G.a+o("1be92f48efa5c37e4ab70024e1b1c47d0eee6b7cc882d60f02d21b56d98f"),[o("e59420bd5bead9a4")]:G.a+o("1523a58ee97f79a0746dbae2e77b4eb30024e1bace784cf11c298190df45"),[o("4a194b787cef22d8")]:G.a+o("bc28ccc9b0e4607fad7623a58ef0677ce92f48fdb7c3750ee51d38d7b6ce"),[o("86550f3cb8ab7fac")]:G.a+o("c91f79ba3d4bad6cb8217636132fba6ffc781d6e3a2cb83dd3624d640b31"),[o("6a396b585ccf0332")]:G.a+o("baee4e8bce3ae23dabb0a1e7803ee53eefe9cabfa93df74ce0d1ba95b800"),[o("fc0f79ea32e17167")]:G.a+o("9044e0a5e490b40bf10affd9da84b3088543a491c397815a9a4ac48bc29a"),[o("fbeebacb4d80b2c7")]:G.a+o("aa9e5efbde4a122ddba051f7f02e152e9ff93aafd92de77cf0e7aaa5a830"),[o("0f0256a7a174a6b1")]:G.a+o("2a1ede7b5eca92ad5b20d17770ae95ae1f79ba2f59ad67fc70652a2528b0"),[o("99485ce92f3eace8")]:G.a+o("79cfc9ea8d9b1ddce8912686439feadfacc84dde6a9ce8eda3353db47b61"),[o("64f7e1125a099982")]:G.a+o("778d4bac8bd99f8216d3a4c045dd6891a28acf8e6692678ee8"),[o("0c1f09fa22d16653")]:G.a+o("f94f496a0d1b9d5c6811a606c31f6a5f2c48cd48e04c212a61e5"),[o("a2f1239094075c09")]:G.a+o("10c460256410348b718a7f595a04338805c32411431701ce11d71d1e4e0d")};Ct={[o("b8cd9f6ddd7892fb")]:o("ce7aa227a296f689bf04bd5b9c8ae989b7008543a49bd7db8b079b"),[o("49f4a410b8c720f23da3bd")]:o("887cf89dfca8ac33f902f7d1d284a303f106ffd9da83b103d5088d81c8948859c509d9"),[o("66a7418c1c")]:o("76220a4f0afe5ee1176c6523c4f231f1ef786d2bcceb25e8f8313d51a1"),[o("4e9e778d330e754064d770883e02395f6e80599f03")]:o("b34187e0471d5bc6d20f989c791134d6aa1be08401192ed6aa11ac9327e135abfeebaca836a634bae8"),[o("d74cb62d7e3e6d3db0658f36")]:o("64909471184cc8d705de8b0d3620c7a71daa93753e22d5bb19a69022f062"),[o("9032b78ff588")]:o("c351f7f0370d2bd6a21fe88c09e124a6baebf0f411fb3ca6bae1f3a32fa3"),[o("fa40dd6b9ffce5d2363686245ff6babc492fe95f3ff3b4845117f16727")]:o("2e9ac287423696295fa4ddfb7c2a892957a025e304326c342db169aa6f1838780cee69802046575173a529853e4e5f597bad11df0f0317"),[o("96653942ffd839c6f1480c44ccd2")]:o("e89c187d9c484cd399a21771b22443a391a61f79ba2f5fa465a2313c633933b27bbc2d3e22303eec"),[o("bfb3a0403395371384ccec787a91255f")]:o("bb498fe84f0523deaa17e08401193cdea213e88c09e330b0a3e5a7e314bc7c88eae1b5af71fd11e1"),[o("f6c4d9fb8e2e8e3dbaaa83a52751f56c63")]:o("0b993fb8ffb5f36e7aa73034d1a9ec6e72a3383cd9b3c06057b0005593fdeb2b52b94c678aa3850771d5475492ab8d0f79dd5000d280f2"),[o("df51863e026d04378c6b88344e2e5d1196419f0f125d140a9e45")]:o("5004a0e524d0f44b314abf991acceb4b095e878122d4c15b0940cbd80dd6dd5e1e6fdda413"),[o("bc448de3a1fc6336f62542b28baa2f59fa73")]:o("f381c7a007dd1b8692cfd8dc39d1f4966adb20c4c1d1fa966ad16c9ae0aebf6f63f7"),[o("03ff6490e6d6acb93f994fcfe4e5d23636862474b28bad2f59fd642bdce4845012b9417782ea995d44ae")]:o("9dab2d1651e7c138ccf5026a6ffbde38c4f10a5277c9d202d4c8122b0d8ff95dd68b7c4464f0f206e0f5735d0b8bb2598e8a6ac260affde9a5f5"),[o("d10c32777005e32d9b7b37296f7e9875827720204014d66a8d7f2828481cde4d")]:o("c8bc385dbc686cf3b9c23711924463c3b1c63f199a437fdcc5f21616a6044ad08dda0f78d8186c8e82a51700c06074f695e7573bcf"),[o("33b7544e92ab8d0f79dd4d0b8dc0821700c06074f693a8566ebf791b8d31bc6761343123b36da02f")]:o("53216700a77dbb26326f787c997194360a7b4064a16b88324e5f597bad11810156674143b519920b17093e5ada72301fe751e1137e5d2717fb0f"),[o("3cda3f43055aa7a174ddc75b07")]:o("8d5b3d0661f7f128fce5327a5febee28f4e13a6267e5c20bc4fa463346f4ce72c0ee1c"),[o("881b8388c5f8fc6fc92e99")]:o("0b993fb8ffb5f36e7aa73034d1a9ec6e72a3383cd9b2c8614aad4a7d89b5d929"),[o("f4046392ad9c")]:o("4034b0d534e0e47b217aafa90afcfb7b394eb79112c4e3527644ea98"),[o("a033aba381c7d635e129cfc99cbfa72f")]:o("ee5a82c78276d6699fe49dbbbc6ac96997e0e5a34471ad6564feb8fb636be2707eac"),[o("28bd2f3d63314bcd00463bd7")]:o("59efe9caadbb3dfc08b1c6a6a3b712fc00b5ceaeabb80ac61e8e94cd81c81ad84a"),[o("982e8facc9a19728f5")]:o("4d1bfd46a13731683c25f23a9f2b2e683421fa22a7351673103a8e7f9c74066c5e"),[o("041e0f9a2deb7a1a401c0c965cb407")]:o("912721826573f5a4f0693efe5b6feab4c87d06e6637dceb5c8764abe4472c6929f4f43d7"),[o("66ba6dbc")]:o("bc28ccc9b0e4607fad7623a58ef87f7fa5722bad96cc7746fa486694"),[o("be02c9088385d2")]:o("afc583644391574ade8b9c187d8d484ad69fe40005992c4fa68ee7573bcf"),[o("ab11e2d160")]:o("5246262326927a853308395f188e55950b1c0147209a479644165c4e"),[o("3d7dfabc807f16ba6004f7b98c7612b71873")]:o("aa9e5efbde4a122ddba051f7f0260d2dd3a459fff83ce53da3bef1b4aa32f132bfb6a2b0be6c"),[o("21dff61fe0db6a1d65bf996cecca632168ebe0")]:o("e0941075944044db81da0f09aa5c5bdb99ae1771b22843ac9da4572e906353bf33"),[o("3f3100f58433")]:o("c351f7f0370d2bd6a21fe88c09e124a6baebf0f411e938adbca2b0be6c"),[o("26f6a6f8677ac90f1efaa4e40073b90013f5c8857f05d97f0ee741971b1c4a1913fe")]:o("f94f496a0d1b9d5c6811a606c317725c6015ae0ecb1f61217ce3bd29e5b5"),[o("16829c903f13ed085a96c5896316d60503f3d09c6808c979169ab1f91707cd600e86dd8d036ec4791bfd30f4066b211471f24ce06f6338780ae635d96646505c73df2fcc685b392967ca18c247371d505eb60dbd535e144c4bcd002436bb11c432227c315fca0ba83a366529b6b600aca32f7b3ccea369a4c836")]:o("13e12740e7bdfb6672af383cd9b1d4764abb0024e1b5cd3446ac1e"),[o("41e18a3f8cf813316c88fb2582f5")]:o("fa2e8e4b8efaa2fd6b70e12740f6bdfd6374e92f48ecf5e2260696147d829b9d3f69ed436a8aa3850771d54c49dcc6d45a08"),[o("598892d694eb6da02a9baeb1d7e626d42898a2d0a48c")]:o("fa2e8e4b8efaa2fd6b70e12740f6bdfd6374e92f48f4f5e2260696147bc6b4c8780e9f193bedd1dd0770d01064869a97474bdf"),[o("dab8d9a3fb5d903aadbdf1a6ab368d4bdaa8e3b3ab2d")]:o("fdcb4df6f18761d86c95a28acf9b7ed86491aaf2d77178ab7b73e4a5f82476bc2e"),[o("d8e8526699793b9dd0fe6475a5101487aaf879")]:o("928666e3e6523a45f3c8799fd84e1555cbdc4187e0560054cfcf42d0de0c"),[o("304937c270d63e48772c48bb6fc13158")]:o("94c0e421e81cb887f58efb5de6109797cd9ac345ee1199c982909e4c"),[o("f0847f0cbb0613f5c8806302b1046d864e")]:o("928666e3e6523a45f3c8799fd84e1555cbdc4187e0520556c99501cd9d")};No={[o("d3c7a0b424e72befe9bcec")]:o("18812e1f6c1e7bdc61d45035014720934d951e1a5a49409859751ee256ab1f681d3b3cfd0ba84c492162f1f630e6a3250e7affe93ff2fc6c7513d4c021d7e5482a76aa9a72ceeb5d"),[o("2c3e1b8d436e00a606b544")]:o("06ffbced7a68e92e4fbae2e73711924173cbacc86c1ff24a77db8cd0401d8d5a0385aecf1d1ede7b4fcc83a44630d17770a48dbb49248e3e1bfd46b23721773a348838e16438792f")};x5=new Audio(G.a+o("e17751521523857480394e2e2b3f9a44980d5616330a965d9e0255410d5d"));Ol=[10425,10426,10427,10428,10429,10430,10431,10432,10433,10434,10435,10436,10437,10438,10439,10440,10441,10442,10443,10444,10445,10446,10447,10448,10449,10450,10451,10452,10453,10454,10455,10456,10457,140,142,147,23,24,25];v5=[32,33,34,35,313,314,202];Zs={};j["1g"]=16711680;j["1v"]=16711680;if((Bi=window.localStorage.getItem(o("6046d6c13bd6c9590e50cd")))&&(Bi=JSON.parse(Bi))["1r"]===238){Object.assign(j,Bi)}
if(!Ct[0]){j["1c"]=Object.keys(Ct)[0];Re()}
if(!Oa[0]){j["1b"]=Object.keys(Ct)[0];Re()}
Ot=Qa=null;jo=Il=-1;Gi=class extends de{constructor(a){super(a);this[o("67fd1fbf85e8a0b10bc5")]="static";this.on("pointerdown",this.Lm)}
Lm(a){if(a.shiftKey||!1){Il=a.pointerId;Qa=this}}};Bi=class extends Gi{constructor(a){super(a);a=new Ye().rect(0,0,4,200).fill({color:16777215});this.Ic=new Ye().circle(0,0,8).fill({color:16777215});this.Ic[o("7024c4a61ab1fb281c2c")]="static";this.Ic[o("08ba3f297f323c")]="pointer";this.Ic[o("71929cd79c921ec717")][o("82eb")]=2;this.Ic.on("pointerdown",this.wl);this.addChild(a);this.addChild(this.Ic);this[o("520b7d1117957d88")]=new we(0,0,10,200)}
wl(a){Ot=this;jo=a.pointerId}
ek(a,e){if(e){fa(.25+3.75*a)}
this.Ic.y=Math.max(this.Ic.height/2,Math.min((1-a)*this.height,this.height-this.Ic.height/2))}};(Ja=new(T5=class extends Gi{constructor(a){super(a);(a=new Ne({[o("882dafa3f8")]:a.sf,[o("2406128e449c")]:{[o("dbeab2a02bd600bf8af89c")]:o("b97a6fbf5c40cc"),[o("31c4dc0ac1f55e125c")]:12,[o("cb1aa4d223")]:16777215}})).position.y=5;a.position.x=100;a.anchor.x=.5;this.sf=a;this.addChild(a)}
zf(a){for(;this.children[1];){this.removeChild(this.children[1])}
let e=this.sf.height+15;for(var[t,i]of a.entries()){(a=new Ne({[o("e92e0e6419")]:(t+1).toString()+". "+i[o("798492cf96")].substring(0,20),[o("3230803c5aa2")]:{[o("0d98e0aee54472a97c6aee")]:o("e3c4b18506f61a"),[o("9483b909ec3ab391f9")]:12,[o("36a191a556")]:16777215}})).position.y=e;a.position.x=5;t=new Ne({[o("de1bc50996")]:i[o("e0d24d468a41")],[o("1c1e2a964c94")]:{[o("5520b866ad0c3a613422a6")]:o("18b90e387d032d"),[o("e295cb9b9224c1038f")]:12,[o("ac9b8713dc")]:16777215}});t.position.x=195;t.position.y=e;t.anchor.x=1;e=e+a.height+5+5;this.addChild(a);this.addChild(t)}
this[o("819a6ac04484e2d9")]=new we(0,0,this.width,this.height)}})({sf:o("fbe4ae")})).position.x=50;Ja.position.y=150;(ei=new T5({sf:o("a82bafb8e3afaa")})).position.x=50;ei.position.y=350;ti=new Bi();if(qa){Ja.scale.set(.8,.8);ei.scale.set(.8,.8)}
Xo=new Function(o("2241814153c5869c180b").concat(o("51b5baeab1a920"),o("2e9ac383")))();V=new Function(o("2241814153c5869c180b").concat(o("0efbbfc2674eb14b62"),o("2e9ac383")))();S5=new Function(o("2241814153c5869c180b").concat(o("8faef0747aa37472f8ba"),o("2e9ac383")))();V[o("8d0f7a2563fbc021f9e3743c76f8")](o("637c113b8b"))[o("99797eb85c7aeba2c87056a040")](o("090ef95de30d632165e7"),o("fa65d3"));V.head.insertAdjacentHTML(o("cc7f6bf9bfd37746ba41"),"<link rel=\"stylesheet\" href=\""+G.a+"/public/css/new.css\" />"||"");Fi=null;Di=[];V.getElementById("social-buttons").remove();new fh({fontFamily:o("dabbc8bebf01d3"),fontSize:12,fill:16777215});ba=new Gi();Ia=new Ae();Qe=new Ae();(rt=new Ye()).visible=!1;Q=null;O={};(b={}).Xb=new Function(o("2241814153c5869c180b").concat(o("00a62b3d603a31"),o("2e9ac383")))();b.d=b.Xb[o("1f344ef1d639c0f853")];O.e=function(){return b.Xb[o("41d6a602acd5222820c2ae109fdf3be93e")]||1};b.Xb.addEventListener(o("6a17431c0a"),async function(){var a;var e;var t;var i;var s;var r;var n;var d;var h;var f;var p;var m;var v;var T;var w;var P;var C;var B;var D;var X;var U;var L;var ie;var ne;var q;var Y;var se;var ee;var Ce;var Tt;var re;var oe;var ki;var ve;var It;var pa;var ea;var ga;var Ui;var Vt;var ma;var _a;var Ga;var ya;var xa;var Ba;var Gt;var Bt;var Ft;var Dt;var Li;var ai;var ii;var Ho;var zo;var Vo;var Wo;var Gl;var Bl;var Yo;var $o;var Xe;function Ni(c){this.qd=c;this.pa=0}
function Ko(c){this.qd=c;this.pa=0}
function Fa(c,u,g,y,x,S,E,R,F,k){this.xb=c;this.lj=u;this[o("852262407d0ff959")]=null;this.nj=!1;this.kb=g;this.lb=y;this.$g=x;this.bh=S;this.cl=E||(F||x)/2;this.xn=R||(k||S)/2;this.vj=F||x;this.zj=k||S;this.Nn=.5-(this.cl-.5*this.vj)/this.$g;this.db=.5-(this.xn-.5*this.zj)/this.bh;this.Xn=this.$g/this.vj;this.co=this.bh/this.zj}
function te(c,u,g,y,x,S,E,R,F,k,N,z,H,K,Ee,Te,ce,Be){this.jg=c;this.Dh=u;this.hk=g;this.Eo=y;this.rk=x;this.No=S;this.wk=E;this.To=R;this.Dk=F;this.ap=k;this.Lk=N;this.lp=z;this.Sk=H;this.rp=K;this.$k=Ee;this.il=Te;this.ji=ce;this.xl=Be}
function ta(){}
function si(c){this.qf=c}
function qo(){this.Tc=[]}
function Fl(c,u){this.Ri=c;this.Bf=u;this.Qg=this.Og=0}
function va(){this.ka=new de();this.ka.sortableChildren=!0;this.P=new h();this.P.zIndex=1.6;this.X=0;this.o=Array(797);this.o[0]=this.rj(0,new b.ec(),new b.ec());for(var c=1;c<797;c++){this.o[c]=this.rj(c,new b.ec(),new b.ec())}
this.wj=this.uj=this.gi=0}
function ji(c,u){this.O=c;this.O.Oa(!1);this.id=u;this.id.Oa(!1)}
function Qs(c){this.ra=c;this.Ia=!1;this.Jf=1}
function Zo(c,u){this.cb=c;this.yn=u}
function ge(c){++ge.On;this.Ej=c;this.Tj=this.Rj=this.Pj=this.Mj=this.Kj=null;this.Mb=this.Zj=this.hd=!1}
function Dl(){}
function St(){}
function Qo(){this.jd=b.Fc.Sj;this.ob=0;this.Jc=500;this.kg=4e3;this.Jh=7e3}
function Oe(c){this.l=c;this.ug=[];this.al=0}
function Xi(c){this.oi=c}
function ri(c,u){this.S=c;this.Di=80<=c.Ka;this.zd=this.yd=this.Dg=this.Bg=0;this.de=this.Di?1:c.pd;this.Vh=1;this.Zh=!1;this.Ig=this.xf=0;this.Ta=1;this.Qm=6.283185307179586*Math.random();this.Ce=new b.Wm();this.Ce.Qd(A.l.K.jd,this.S.qi===b.Vd.$e?null:A.A.V().Af(this.S.qi),A.A.V().an(this.S.Ka));u.el(c.T,this.Ce)}
function Jo(){this.Ua=new ec(new b.ec(),new b.ec());this.Ua.id.L.Ip="add";this.Ua.id.L.zIndex=100;this.Ua.O.L.zIndex=500}
function ec(c,u){this.O=c;this.id=u}
function wt(){this.Ib=this.rb=this.Gb=this.Db=this.Ea=0;this.fh=[]}
function tc(c,u){for(var g=0;g<c.length;g++){if(parseInt(c[g][o("0f2975")])===u){return g}}
return-1}
function ni(){}
function ac(){}
function kt(){}
function ic(){this.sc=[];this.Ue=[]}
function he(){this.$h=[];this.bi=[];this.v=!1;this.Qc=m;this.M={}}
function aa(){}
function Hi(c,u,g){this.wc=g;this.Ia=!1;this.ka=new de();this.ka.visible=!1;this.ud=Array(c);for(c=0;c<this.ud.length;c++){(g=new b.wi(new Float32Array(3*u))).xi(u);this.ud[c]=g;this.ka[o("c5d7231c0ad2a210a9")](g.$c())}
this.yc=this.xc=1;this.la()}
function nt(){}
function zi(c,u,g,y,x,S,E){if(E===1&&G.E.includes(S)||E===2&&G.kh.includes(S)||E===3&&G.Kk.includes(S)){g=!1}
this.Ve=c;this.zo=u;this.Xe=g;this.kk=y}
function Js(){var c=new qt({[o("8b5df90a7d2973f7e721e6")]:{[o("996b4da96f7afaa8f17d50bd517fc8b6")]:[-.5,-.5,.5,-.5,.5,.5,-.5,-.5,.5,.5,-.5,.5],[o("0113d751fd3568577b1e")]:[-.5,-.5,.5,-.5,.5,.5,-.5,-.5,.5,.5,-.5,.5]}});var u=new W();this.Pd=ht.from({[o("b5c15b")]:{[o("23a24064d3bdd1")]:o("2f1043c7d00dc6cf58061c988b04d4c957006480f312a9d9260c6c898959fdff2ef425b0bae6a0b232ad6bfaade9befc7aa251b3b5f197a202e039b598f599b700ce54d1b181c5a716dc0d9892ce889a1a95b3c275d166c4a28ab99b5fd975bde0afe36636f75723a789ec6472aa727cf2f593224eb5512582ea996f7bae4274ca83c54b5c8a7847c39ad0521edf7f0b8fb1b45c2a922a44aaddfb0a269d390dea32e137046b272ab35cab2b357f3b21ad7dac3317660c2ec22bab7f5b5d183086469e101e0147569a498d595e1e4d1bab42601cf052ea046a75680ef955f55b3c0234b2d232f4f46e2177edbe7eadf87a3313b79164d3c242206af5c42ec9bb1c221492f212dacf534d0b9ad60dd4c017596480f351f2f46248089ff94ce88c7fa563f2f6b6e5b003ed2189b4e3afaa7aa251f7d0d0c0e457f93dbf93df82b11dc454d1b181c7d6529a49cfc99cd8dc4f95b1b3268635d3b588acc83b993fcef9a5f23136f62570f2baed6f639c727df6a4c87d4df1172682ebed3f19ec5b7bccd3994365814752d290e94548854947d09ee40000d17706f6d6f9136ecf0f1bff41f47063216776f23ae96f693c302fab23c46053791326c22ad97f5858486cdf55a1101c4e100583419604364d091c96482440b31ea044374d5e15f950e92a7d217ff1f52be7eb5a296df8f234b8bc2f7a04a09321f1e446365afcc42ec0d34e1443cbcb4186e41258788f895c989c0f557382e646f5d12b2719d5b815b9d720ee74f0e3a1e68272ba69bcbeefe9e677fd17a2c6a6d5fc42aa59ac8eee99bb17f01e919ad09c89198157928289cfad5a82b1c22d8420c4c49dbbca3a923dd7aaf3d32723853031d3"),[o("f74e8b0b1c4118008b")]:o("f43544a29ba0492293231bfd30b92b346c2563e538bf26346d296bec52c4622231551791799b2302720a7bdd10870710165054c75ead0f036f12018d542441c111b5377256601ce44ee05b3d7067e7f070b0b4273d5ae5f723efc1693553fec22d80a5657d19dbde32c4f840125c878154c6c75a1855cfc95ef98b0d4034e6a60cb1c3351d6c898959fdff3aee38a4bcf6b8e365b82fafb8bef8fc6fe535b79be090a402cb0abb87f9c8ed2d8541a386ca9c8018da14cfc99c8b8b1c82a4c033c15193ffccfc886ef36b98fca5e52720863036d6eda94b6da3746abae2917f42bd4b3e8efd9b2a0eeb6f3b9fa1941003c1071692da890f09dc4b4bdcc4e4007380204eb38dbb5f08932151bd25e37276371163e538ad2f2378283cba22a57a1640002e936d9b3f4e2e2e7bdd108736165c3609985a9d4f491c574bcd007426e64cf103755d5a19ea50e85b3d7034b0d161a7b6621c7cf2ef39efeb503647e1c6208cb3141a0ca89b799fae0a52018781549096764d0b9a9e5e8d8b0d406480f302a0d5735d7b8aaa18a7cb3cf434a690ebb9a925ad6bfafebf99eb6da015b79be090a402db06b684eec8ec5f8a54d0c394dbd5529b3bcfc99cd8dc4f95b3c2268635d3b7f9acc83b993fceaaf2a12721f46363f4fcbc382ba36b6bedbcc06b60bb4979d5fd9b2a0eef693b9dd0c74750d01d53f487d54549a34b4bcd9ca04b6d862254e2ca8a1f79cc7d10ff29f470632e7074e77d9a2537632f01a975933e026d4b37c22bab7f592c486cdf05c35256164543c769dc584b094f5eda023157b104e21a587e7b1bec7fe212603234b0a361a6c2327a29ebff26e8fd6b3545d1cc38cae4026a19bf991e88ac1f0f47c7c108d4df740755c5c9498eec1a400097f430")},[o("69bd9be9")]:{[o("ae491533c6a60c")]:{[o("4eba7e95201a440a3f896c")]:"vertmain",[o("e92904691f3d8a")]:o("d614ec1baf88e8c8ec5fe71d8d91c599b319c11f8589c18ecb4d80a4c5419135b7a28ab9df398c28ccbfe5a33266946769fdadfa7e72a37343fea4d37b5bf11657cab9dd2953ef082dec86821016d7700385ab9c1a7ac90f1e9ac2f11771c46004f78d9e553990296abd61bf31356b272b9a69ad383274787d9e7d8026506c5673d45b8f6959395e1bca12b24743655054c70dcb5a5e1e4d4bcd007425ec46e91244576515f97de10e672134b1d261a7b6612d7abebe7fdee82c6204a1e67197d5026868bf996c88ac1f450392965685d3650d4ac5d719c9c7501e64818251f786311d2a88ee4f8ed87cb274f196a1e78572b818efecc8f8fe1eb5519390e097a304ec4ce8dbd082bd0ecc248c9ac29a941adb5cd8cb89caac5a80c0d7318420c4b79dbbca2e8e3d8bdbb2f06c60a27a74fa85f87e69a5652bac91cc7357e75d2582ebea7c18ee082deac5836116d4740385d89c180bc90f1e9ac2f147009b2959b5ddfa7b3d992e0aea33922460367075922deb097e3c1c6bed20c46053315766c22ad92f397318308b05c22315174743c56bdc5a3a094a2ada004057b375a046461d3d4aec4ee20b7f6821abb676a5a323787be3f528f4e0787811bb866695e0462a0ca9e829c3f7490f43cf9657f08305585ec6d40edcc26a1e28d4ac06a8c5624a799ff83de88c7fc73dadb1e5b99339e13fa5a9e1aeeb6cd244e2a2b1d1e600ea06af9bb4dcf74a9241c7c794978f19cc10849c84cdc75a82b18462c620c5c4cde7936dd37f93aaf3d42721f47969f4a9f55f75a57b61edbdd23711e40025e6fd9b2a67b34e7fc3b5df4b558b474bc4cd8a681edc7c0b8fb1b24631812642e2caf96c2e8e395bb74fa43623712163e538fc7d19296d0ffa22d17751244064d73ddb6a4e285d3c9a499d161a4a5d16985b901e12431347da023102ec47ec026e57675fb87da84c3f3674e1a761a6c5717b2bafa809b8bc5c7511d3866695b315680ca89b799fae0a5401cedc07d4d25e0757828b45989c0f0615d7bb37aad9351c6c898a59ff8e39e532f0f6b796a064ba7cf99ea9ef8d7aa020f7d4d0c0e525bd599bceacacfb5fe154d6c3d2909403cd01cfcbed9b805a82b18466c6719be6d1e7d22e8c4cdbbdf0b43023e12736b2faa92f2ffc7161fcb1d57b4cba0d268efd9b2a4a8a486cdb85c9725c975c52de87d70f09dc181dfed5f30235912604e2cb8a5c78ce680d8a25e30176341463e538fc786b296f7efa22d1775724093984799d330472456fc605c3521270101eb44796181f094f5eda034057b104f313640a2c49c85abe4c2a7354a7a107b0b656613cb8ab61b8bd5a7513a2f531d7e2422066efdf2cd8ea0a52018784269094074d0b9a9e5e8d8b0d406480f351f5f7624a799ff94ce88c7fa563f2a5e5a7e365b834bcaba9effe7aa325f7d1a482ba08fa08b6bef284b800d21c91ddd1a59418c21c898fc5928032d1f5806acc20c4b79db9bb2e8e3ddbbdf0b43023e12736b2faa92f29fc383caff5932209f11726c0b4c6784ab07870c686de505e971b53e087cb465fb84f4fd183a75d31990857b38aa0426ece7d1bff41f47063216776f23ae96f693c787cef35d36246265573d528c37f592c01318c419d371d4d130985458a440e780f0f9143671df159c817734a6002ae0fcf5b3f0134b0a361a7b6327a29afa97cb8be5e7513a2866695b315680ca89b2accec0a5201cdc610c5d3434d0aeb9e5e8df85a0235d7bb3bb0c2370d3d9ff83ee88e0ea56183f6b6e5e365b87cf8eba9effe30e515a296e0cba608eb00ae82f383fb5d9054d1b781c7d601cd1adede9fbe884c82a4c1469c6880f79dbbca21993fcef9a5f23136f75660a4fabc395ee47c58faa2d5775b844a65ceacc07545f91f5d8ad281131dd41c0385ab9c180bdd131e96d5f27066c40413f5c8ec087bd97f0eea32e12d26702533a326af1e3e741e21b062857751244065a33ddb6a0a480826ac4f9e1017014624d218b84f4b6d585ccf153342a606b55335087b1fff49ff102a7221ede630e5f3636d2ac8be7eadab2f1104a5e77196d4026868bf9b1ddeea5d1552d6965685f359015fc5c901ce8b0d4064858151f5f7624a799ff94ce88c7fa563f2a6c7baaa38fa16bcbefeb1af26b55293c6a6d5a002fb5dffd8df8bed5d8542a7d696b6c347e95cd8cb89cfde5a82b1d7318470a2e2c0fd8f79d95e9deeacf42720853034a7befc6929e92e4df9e3933710910024e4fd995b0eee1d3b9dd0941003c10716c2bcdc524f994f4bf096a7412680600586ddfb0a3d992e0cea33922460367075922deb097e3c1c6be854c46222315517c22cd93d1973182ec712d84741145052c74a90041f451309d7002857b104f317751d3b4afe68e8067b3563e7b676a5a324093cb8ab38f8f66b2553f7fc66c1b3141b4fa999799edb0a53738783259092070f4bc5ce1c959c16557382e640f5d42e162dd3a51be58f66a563f2a5e5a7e365b82c99bae1ada23ae244e0d3b1d69742aa59a98af19db20ad254d1b181c5a7529c498d89c3889e5782a8d7318420c2b7dae0946fd56399a7f2b82721f46367e5edaa496ea27468f0a2cc371091002497adc7734db35f73dcc5831216d7740385d8ec44528a525cd283e40101d17577e2c8881f7fcc2b4cae67bc273d707076966eb76f693c3b3cbe778c330a7a4d73d759cc685b395f6eca12c14741145052c74496091a5814019118315ba606b500535d7139e453ff1a2a7350a7a174e3e3747a3cb9d82aaebc3a6364b7911780a666710ca89b7188ad6a450392965085ca580b58ded203d3860f596480f302a0d5735d7af9ad4fff9b7cc574f0e3a1e28472b818efe9bcf8fc6fb553e2c6a6d5ba02ec4ce8dbe888a61bd50387b0cb9989058d4aabde9ecd981ad3b5d730f763c5b59dbabf2e8e3ddbbc84b43023b0707ee3bdeb6f48ad707ef3b5896777b15d62d2aacc3f199f082c9f95e2435e945943c5cd8b691ede0d58eb95b9712c9b3752e2caf9106ece7d4ba169b72d21692668a25cbc322f792f2b8c73803e06315766c22aab7f592c183086469e101e575b13a34d811e0e5e182199567217f71da045451d393bae0ebd5b3d7034b0a361a7b67b2d6dafa97cfcea752552e6c630e6f94b375bbf981d88ac1f1654c1874186e5515b0b8f8829989c0f5572f6e646f5c222003dcfb9198ed123ef23e7e1b4ffe365b869e4e8a9ee8c7aa020f7d1a4c0e457bd5beaceaeddb20ad454d0c3cb838305c41893b8c391810d95b2b326863580e2dbbddf38ff6bcdbde5a24736f62523a48cbc382bba786dabf5925145e71733949d816f45b54b71dd8dc20c46a75a4ad89af65c5e9e514fc6deb35521d17775e2caf90a65cc641bfd30fb6761342028be6eb638367f733b9c7f8d3d115b133395748823457d486dad05c12356164543c518dc584b094f5e8d557507f15aa04437596d10fe4ff91b6b037eeefc36b0b4276d2bc8be7eade1693553fec22de6f94b375bbf981e88ae6e4506e69657f7")},[o("cf66a32334693028a3")]:{[o("cf65bf36217d0529be66ad")]:"fragmain",[o("470b26cfb91fa8")]:o("d614ec1baf88e8c8ec5fe71d8d91c599b319c11f8589c18ecb4d80a4c5419135b7a28ab9df398c28ccbfe5a33266946769fdadfa7e72a37343fea4d37b5bf11657cab9dd2953ef082dec86821016d7700385ab9c1a7ac90f1e9ac2f11771c46004f78d9e553990296abd61bf31356b272b9a69ad383274787d9e7d8026506c5673d45b8f6959395e1bca12b24743655054c70dcb5a5e1e4d4bcd007425ec46e91244576515f97de10e672134b1d261a7b6612d7abebe7fdee82c6204a1e67197d5026868bf996c88ac1f450392965685d3650d4ac5d719c9c7501e64818251f786311d2a88ee4f8ed87cb274f196a1e78572b818efecc8f8fe1eb5519390e097a304ec4ce8dbd082bd0ecc248c9ac29a941adb5cd8cb89caac5a80c0d7318420c4b79dbbca2e8e3d8bdbb2f06c60a27a74fa85f87e69a5652bac91cc7357e75d2582ebea7c18ee082deac5836116d4740385d89c180bc90f1e9ac2f147009b2959b5ddfa7b3d992e0aea33922460367075922deb097e3c1c6bed20c46053315766c22ad92f397318308b05c22315174743c56bdc5a3a094a2ada004057b375a046461d3d4aec4ee20b7f6821abb676a5a323787be3f528f4e0787811bb866695e0462a0ca9e829c3f7490f43cf9657f08305585ec6d40edcc26a1e28d4ac06a8c5624a799ff83de88c7fc73dadb1e5b99339e13fa5a9e1aeeb6cd244e2a2b1d1e600ea06af9bb4dcf74a9241c7c794978f19cc10849c84cdc75a82b18462c620c5c4cde7936dd37f93aaf3d42721f47969f4a9f55f75a57b61edbdd23711e40025e6fd9b2a67b34e7fc3b5df4b558b474bc4cd8a681edc7c0b8fb1b24631812642e2caf96c2e8e395bb74fa43623712163e538fc7d19296d0ffa22d17751244064d73ddb6a4e285d3c9a499d161a4a5d16985b901e12431347da023102ec47ec026e57675fb87da84c3f3674e1a761a6c5717b2bafa809b8bc5c7511d3866695b315680ca89b799fae0a5401cedc07d4d25e0757828b45989c0f0615d7bb37aad9351c6c898a59ff8e39e532f0f6b796a064ba7cf99ea9ef8d7aa020f7d4d0c0e525bd599bceacacfb5fe154d6c3d2909403cd01cfcbed9b805a82b18466c6719be6d1e7d22e8c4cdbbdf0b43023e12736b2faa92f2ffc7161fcb1d57b4cba0d268efd9b2a4a8a486cdb85c9725c975c52de87d70f09dc181dfed5f30235912604e2cb8a5c78ce680d8a25e30176341463e538fc786b296f7efa22d1775724093984799d330472456fc605c3521270101eb44796181f094f5eda034057b104f313640a2c49c85abe4c2a7354a7a107b0b656613cb8ab61b8bd5a7513a2f531d7e2422066efdf2cd8ea0a52018784269094074d0b9a9e5e8d8b0d406480f351f5f7624a799ff94ce88c7fa563f2a5e5a7e365b834bcaba9effe7aa325f7d1a482ba08fa08b6bef284b800d21c91ddd1a59418c21c898fc5928032d1f5806acc20c4b79db9bb2e8e3ddbbdf0b43023e12736b2faa92f29fc383caff5932209f11726c0b4c6784ab07870c686de505e971b53e087cb465fb84f4fd183a75d31990857b38aa0426ece7d1bff41f47063216776f23ae96f693c787cef35d36246265573d528c37f592c01318c419d371d4d130985458a440e780f0f9143671df159c817734a6002ae0fcf5b3f0134b0a361a7b6327a29afa97cb8be5e7513a2866695b315680ca89b2accec0a5201cdc610c5d3434d0aeb9e5e8df85a0235d7bb3bb0c2370d3d9ff83ee88e0ea56183f6b6e5e365b87cf8eba9effe30e515a296e0cba608eb00ae82f383fb5d9054d1b781c7d601cd1adede9fbe884c82a4c1469c6880f79dbbca21993fcef9a5f23136f75660a4fabc395ee47c58faa2d5775b844a65ceacc07545f91f5d8ad281131dd41c0385ab9c180bdd131e96d5f27066c40413f5c8ec087bd97f0eea32e12d26702533a326af1e3e741e21b062857751244065a33ddb6a0a480826ac4f9e1017014624d218b84f4b6d585ccf153342a606b55335087b1fff49ff102a7221ede630e5f3636d2ac8be7eadab2f1104a5e77196d4026868bf9b1ddeea5d1552d6965685f359015fc5c901ce8b0d4064858151f5f7624a799ff94ce88c7fa563f2a6c7baaa38fa16bcbefeb1af26b55293c6a6d5a002fb5dffd8df8bed5d8542a7d696b6c347e95cd8cb89cfde5a82b1d7318470a2e2c0fd8f79d95e9deeacf42720853034a7befc6929e92e4df9e3933710910024e4fd995b0eee1d3b9dd0941003c10716c2bcdc524f994f4bf096a7412680600586ddfb0a3d992e0cea33922460367075922deb097e3c1c6be854c46222315517c22cd93d1973182ec712d84741145052c74a90041f451309d7002857b104f317751d3b4afe68e8067b3563e7b676a5a324093cb8ab38f8f66b2553f7fc66c1b3141b4fa999799edb0a53738783259092070f4bc5ce1c959c16557382e640f5d42e162dd3a51be58f66a563f2a5e5a7e365b82c99bae1ada23ae244e0d3b1d69742aa59a98af19db20ad254d1b181c5a7529c498d89c3889e5782a8d7318420c2b7dae0946fd56399a7f2b82721f46367e5edaa496ea27468f0a2cc371091002497adc7734db35f73dcc5831216d7740385d8ec44528a525cd283e40101d17577e2c8881f7fcc2b4cae67bc273d707076966eb76f693c3b3cbe778c330a7a4d73d759cc685b395f6eca12c14741145052c74496091a5814019118315ba606b500535d7139e453ff1a2a7350a7a174e3e3747a3cb9d82aaebc3a6364b7911780a666710ca89b7188ad6a450392965085ca580b58ded203d3860f596480f302a0d5735d7af9ad4fff9b7cc574f0e3a1e28472b818efe9bcf8fc6fb553e2c6a6d5ba02ec4ce8dbe888a61bd50387b0cb9989058d4aabde9ecd981ad3b5d730f763c5b59dbabf2e8e3ddbbc84b43023b0707ee3bdeb6f48ad707ef3b5896777b15d62d2aacc3f199f082c9f95e2435e945943c5cd8b691ede0d58eb95b9712c9b3752e2caf9106ece7d4ba169b72d21692668a25cbc322f792f2b8c73803e06315766c22aab7f592c183086469e101e575b13a34d811e0e5e182199567217f71da045451d393bae0ebd5b3d7034b0a361a7b67b2d6dafa97cfcea752552e6c630e6f94b375bbf981d88ac1f1654c1874186e5515b0b8f8829989c0f5572f6e646f5c222003dcfb9198ed123ef23e7e1b4ffe365b869e4e8a9ee8c7aa020f7d1a4c0e457bd5beaceaeddb20ad454d0c3cb838305c41893b8c391810d95b2b326863580e2dbbddf38ff6bcdbde5a24736f62523a48cbc382bba786dabf5925145e71733949d816f45b54b71dd8dc20c46a75a4ad89af65c5e9e514fc6deb35521d17775e2caf90a65cc641bfd30fb6761342028be6eb638367f733b9c7f8d3d115b133395748823457d486dad05c12356164543c518dc584b094f5e8d557507f15aa04437596d10fe4ff91b6b037eeefc36b0b4276d2bc8be7eade1693553fec22de6f94b375bbf981e88ae6e4506e69657f7")}},[o("69a88eef82ab1dc31491")]:{[o("5cd8ca4a1845d7c101")]:u.source,[o("521647043b97748c28")]:u.source.style,[o("b5d359015fc5c901ce")]:{[o("56925b8636046e22288a529d030a")]:{value:[1,.5,.25,.5],type:"vec4<f32>"},[o("735121038f5c8c181e7f1e0f9355")]:{value:[0,0],type:"vec2<f32>"},[o("cc685afaa8d56751b16a70c1abcc6e")]:{value:[0,0],type:"vec2<f32>"}}}});this.Ld=new Ka({[o("3ea865be2f3670273f")]:c,[o("b8fa926ad8688c")]:this.Pd})}
function Wt(){this.L=new Ae();this.Hk=this.Fk=0}
function Je(c){this.K=c;this.S=new b.Tf.Rf();this.nb=!1;this.ed=!0;this.lf=!1;this.Wh=this.sb=0;this.Ta=1;this.Nb=this.Ag=0;this.qa={};this.Xa=0;this.Ob=new Float32Array(400);this.Wa=new Float32Array(400);this.ga=new Float32Array(400);this.b=this.ia=this.Ca=this.Yk=null;this.li()}
function Ut(c,u,g,y,x){this.Ea=c;this.Db=u;this.Gb=g;this.rb=y;this.Ib=x}
function Lt(c){this.G=new b.Ug();this.G.ka[o("34e412637b6113e758")](this.G.P);this.Hg=this.Uc=null;this.Vc=c;this.X=0;this.Vg=this.Sg=this.Rg=this.Pg=this.Mg=this.Kg=this.pd=1;this.vm(o("bb498f9d591627d4a512"))}
function He(c){this.ra=c}
b.d[o("41d5a60080da22152cd4bf3eb4f72b")](o("5204750833ca6f9b3b1b"))[o("b0f2867ad860")][o("ce3bf912a28ff59c")]=o("de0dcc1e8198");M={C:function(c,u,g){c[o("f111074b05")]();c[o("c631e93daf92e2")](u,g)},g:function(c,u,g){c[o("1575e3a7e9")]();c[o("ce39f105b7ace191")](u,g)}};O.Qa=function(c){var u=c.parent;u?.removeChild(c)};o("ebee98b01bc91c87bbc5868e");Jt=o("0ef7a4d56250f1165782eaef3f199a4a7fdb85c6434aca4249c585d85e5ec25441");Rl=o("5841eedf2cdebb1c211490f54187e0450d4ac5ce1edecb4c5e36ddb119a4c2225620d5");g5=o("0ddbbd86f86f72a37075b2fadf6672a27862f0b7ce3f50a1487bc2aa9b2a19e8036ec187");Ml=o("b583052e50c7da0bd8dd1a4207d5b611b6c26a193fdbbf1dbf933cf53cafb6f6e7f665bc77bab5eb");o("e97f595a04338e4794115616330598469f0f0f5814438c456c1fe646b746350c270ae55b");m5=o("ae1a4207dbae15a2d3345d7bfca91be0db39e53fb6fef4b4b223ed2ba4f6ffa8a332f513e0d3a6d1f817f60e");qs=undefined;Z=b.Xb[o("0c147fe75ebe1e225a22")];qs=Z||=o("20940c");Cl=(()=>{switch(qs){case o("be3aeb"):var c=o("6a0e47223bbe");break;case o("95e272"):c=o("f8ad5f14b808");break;case o("6d389d"):c=o("9483a438de3b");break;case o("a81c99"):c=o("6fc502bdb6f7");break;default:c=o("77cd17b5aeff")}
return c})();window.moment.locale(Cl);A=null;a=b.Xb[o("853f36004725c679de2d4e0754d1")];O.N=function(c){return a[c]};O.me=function(c){return c[qs]||(c[o("fc2850")]?c[o("7024dc")]:c[o("0740")])};O.Dp=function(c){return encodeURIComponent(c)};O.fa=function(c,u){return setTimeout(c,u)};O.Yl=function(c){clearTimeout(c)};O.Ai=function(c){var u=(Math.floor(c)%60).toString();var g=(Math.floor(c/60)%60).toString();var y=(Math.floor(c/3600)%24).toString();c=Math.floor(c/86400).toString();var x=O.N(o("fa7ec86492a1b4f86f76ea7167eebb"));var S=O.N(o("e127177d09789371843f4574022b9d53"));var E=O.N(o("7d1b8b596d5cf75de81329556014"));var R=O.N(o("585ceec23083ea460d548cc001d6"));return 0<c?c+o("d2c6a6d5")+x+o("6d7bdd10")+y+o("59efe9bc")+S+o("46f23ae9")+g+o("887cf8eb")+E+o("277d1baa")+u+o("e97f592c")+R:0<y?y+o("1523a5f8")+S+o("253395e8")+g+o("06b2faa9")+E+o("3eea32e1")+u+o("9dab2d60")+R:0<g?g+o("483cb8ab")+E+o("499ff94c")+u+o("4fa563f2")+R:u+o("71c7c194")+R};O.pm=function(c){return c.includes(o("e29bd69080"))?c.replaceAll(o("7fd8f39765"),"target=\"_black\" href"):c};O.Li=function(c,u=null,g=null){var y=b.d[o("e8da585e8d494bfa9ca45f269a31")](o("86642b6be3eb38"));if(o("c622e63dafbde5b3ab3b")!==typeof u&&u!==null&&(o("4d4ba164b4243a6a3022")!==typeof u[o("a2da00")]&&(y[o("df7985")]=u[o("8af228")]),o("f3d19b8212ce10849ec8")!==typeof u[o("5365263fb96b")]&&u[o("4cfcfd663e42")]&&(y[o("a97b58a5437d")]=o("cddf3cf93fa1")),o("2a4e82594bd999af5727")!==typeof u[o("29fece3ac8ec")]&&u[o("0efbb5c77751")]&&(y[o("c633ed3fafa9")]=o("da8ff98bbb1d")),o("7672566d1fed55e31b6b")!==typeof u[o("feecb2fe7160ab676ff0a1f7")])){y[o("2a589e525dcc9fb35b249d2b")]=u[o("0111f15bf605684a601de252")]}
y[o("42277d2523")]=o("898e6ec479dbbd86fb6365a56665e5a1e97e");y[o("72f046e6")]=c;if(g){y[o("734b1b0a98499d")]=y[o("baa412bfdb2ee428b1a7e5a1a334e038a4bce9")]=function(){try{g()}catch{}
y[o("c47a68fba7f86e")]=y[o("2c12008d556016fa47f117735d6a12ea52ea1b")]=null}}(b.d[o("b2ab11a4d2")]||b.d[o("a5f1422c6cf6ce31c8f05b1373dbe705d2e856055c")](o("354ed289dd"))[0])[o("c15333842058a3bba1532798")](y)};O.da=function(c,u){u.prototype=Object.create(c.prototype);(u.prototype.constructor=u).parent=c;return u};O.Am=function(c){return(c%=6.283185307179586)<0?c+6.283185307179586:c};O.Fp=function(c,u,g){return O.Ad(g,c,u)};O.Ad=function(c,u,g){return g<c?g:c<u?u:Number.isFinite(c)?c:.5*(u+g)};O.Q=function(c,u,g,y){return c<u?Math.min(u,c+g*y):Math.max(u,c-g*y)};O.kj=function(c,u,g){return u+(c-u)*Math.pow(.5,g/33.333)};O.If=function(c,u,g){return c-(c-u)*g};O.Wg=function(c,u){return Math.sqrt(c*c+u*u)};O.Cj=function(c,u,g,y){var x=u+y;if(c==null){throw new TypeError()}
y=c.length>>>0;g=(g>>=0)<0?Math.max(y+g,0):Math.min(g,y);u=(u>>=0)<0?Math.max(y+u,0):Math.min(u,y);x=x===undefined?y:x>>0;y=Math.min((x<0?Math.max(y+x,0):Math.min(x,y))-u,y-g);x=1;for(u<g&&g<u+y&&(x=-1,u+=y-1,g+=y-1);0<y;){if(u in c){c[g]=c[u]}else{delete c[g]}
u+=x;g+=x;y--}};O.Jp=function(c,u,g,y){var x=6.283185307179586*Math.random();return[c+(g=Math.sqrt(g*g+Math.random()*(y-g)*(y+g)))*Math.cos(x),u+g*Math.sin(x)]};O.Wn=function(){return 2147483647*Math.random()};O.bo=function(){var c=[32,33,34,35];return c[parseInt(Math.random()*c.length)]};e=[o("10d1"),o("e404"),o("13f6"),o("dbbf"),o("5b38"),o("e96f"),o("2681"),o("3bdb"),o("06af"),o("c7c1"),o("34e4"),o("74a7"),o("da88"),o("a7bc"),o("74a0"),o("883f"),o("e294"),o("74ad"),o("3068"),o("803b"),o("9b27"),o("4a37"),o("6d33"),o("d8c7"),o("124c"),o("6a0b"),o("fd9f"),o("97ba"),o("aac8"),o("6e8b"),o("1410"),o("fa7d"),o("2f17"),o("cdc6"),o("e923"),o("9970")].map(function(c){return c.charCodeAt(0)});O.Lp=function(c){if(o("fa7ed2699be9a9ff6777")==typeof c){c=16}
var u="";for(var g=0;g<c;g++){u+=String.fromCharCode(e[Math.floor(Math.random()*e.length)])}
return u};O.Mp=function(c,u,g,y){u=g*(1-.5*u);var x=Math.min(u,1-u);return O.uh(c,x?(g-u)/x:0,u,y)};O.uh=function(c,u,g,y){var x=(u*=1-Math.abs(2*g-1))*(1-Math.abs(c/60%2-1));g-=u/2;return 0<=c&&c<60?[g+u,g+x,g,y]:60<=c&&c<120?[g+x,g+u,g,y]:120<=c&&c<180?[g,g+u,g+x,y]:180<=c&&c<240?[g,g+x,g+u,y]:240<=c&&c<300?[g+x,g,g+u,y]:[g+u,g,g+x,y]};O.nc=function(c,u,g){$[o("e77f8c2e")](c)[o("4392245fab")](u)[o("899e64d268")](g)};O.Op=function(c,u,g,y){var x={[o("569361993f")]:o("8b7bc82a"),[o("86623a75")]:c};(c={[o("b945559c4f41d882a44130")]:function(S){if(S[o("ee13d5ef9577dc4699eac8fc8e6ade619b")]){y(S[o("edb200c1158797")]/S[o("141139937985")]*100)}}})[o("3ebd65a2323c6a26238371a92f")]=o("d0c06051b55c74d2becf7f59");x[o("521b7c17108e7d853e18")]=c;$[o("08b8203a74")](x)[o("c631e930a6")](u)[o("899e64d268")](g)};O.Lb=function(){return Date.now()};O.pc=function(c,u){for(var g in c)if(c.hasOwnProperty(g)){u(g,c[g])}};O.Pp=function(c){for(var u=c.length-1;0<u;u--){var g=Math.floor(Math.random()*(u+1));var y=c[u];c[u]=c[g];c[g]=y}
return c};b.Mh=new Function(o("2241814153c5869c180b").concat(o("7000c0b115bcf4321e2fdfb9"),o("2e9ac383")))();b.ng=new Function(o("2241814153c5869c180b").concat(o("2d5ace94d0745a8142"),o("2e9ac383")))();t=o("74a2d3333127cef3");Ni.prototype.F=function(){var c=this.qd[t](this.pa);this.pa+=1;return c};i=o("685ecfcf25d3da0e46");Ni.prototype.ua=function(){var c=this.qd[i](this.pa);this.pa+=2;return c};s=o("471f2cce8212b98d7d");Ni.prototype.rg=function(){var c=this.qd[s](this.pa);this.pa+=4;return c};r=o("4a3c692908b37f80265026");Ni.prototype.tc=function(){var c=this.qd[r](this.pa);this.pa+=4;return c};b.Mo=Ni;n=o("a0028787ed9b924f");Ko.prototype.fe=function(c){this.qd[n](this.pa,c);this.pa+=1};d=o("31d1d610fcc843590f");Ko.prototype.ge=function(c){this.qd[d](this.pa,c);this.pa+=2};b.Yh=Ko;b.Cp=function(){};Fa.nh=function(){return new Fa("",null,0,0,0,0,0,0,0,0)};Fa.mo=function(c,u,g){return new Fa(c,u,g[o("b47d")],g[o("c0e8")],g[o("b79f")],g[o("08b1")],g[o("1253ac")],g[o("189923")],g[o("b2b303")],g[o("72f35c")])};Fa.prototype.eg=function(){if(!this.nj){if(this.lj!=null){this.Texture=new W({source:this.lj,frame:new we(this.kb,this.lb,this.$g,this.bh)})}
this.nj=!0}
return this.Texture};Fa.prototype.Re=function(){if(this.Texture!=null){this.Texture.Tn()}};b.Yb=Fa;te.prototype.Re=function(){for(var c=0;c<this.jg.length;c++){this.jg[c].Kp();this.jg[c].Tn()}
this.jg=[];for(c=0;c<this.Dh.length;c++){this.Dh[c].Re()}
this.Dh=[]};te.nh=function(){var c=new te.ne(b.Ha.Ma,b.Ha.Ma);var u=new te.oe(o("398f895fdbc8591627d4"),[b.Ha.Ma],[b.Ha.Ma]);return new te([],[],{},c,{},new te.pf(b.Ha.Ma),{},u,{},new te.rf("",u,c),{},new te.Da([b.Ha.Ma]),{},new te.Da([b.Ha.Ma]),{},new te.Da([b.Ha.Ma]),{},new te.Da([b.Ha.Ma]))};te.qm=function(c,u,g,y){var x=new te.ne(b.Ha.Ma,b.Ha.Ma);c=new te.oe(o("daceaedeb809c6178495"),[c],[u]);return new te([],[],{},x,{},new te.pf(b.Ha.Ma),{},c,{},new te.rf("",c,x),{},new te.Da([g]),{},new te.Da([y]),{},new te.Da([b.Ha.Ma]),{},new te.Da([b.Ha.Ma]))};te.tm=function(c,u,g,y){var x={};O.pc(c[o("c8fa6577a36f4af6b3d5")],function(be,ue){x[be]=o("6573d52b")+ue});var S={};for(var R=0;R<c[o("82e02ffce8563a6bebe208f4ed6b")].length;R++){var E=c[o("818168dd6bb7f5cae8834fd56e8a")][R];S[E[o("241c02")]]=new te.oe(x[E[o("5e9f52980f16")]],E[o("edbc0ed314")].map(function(ue){return u[ue]}),E[o("a81e8694db")].map(function(ue){return u[ue]}))}
R=c[o("0909e055e32b612b7fede42a")];var R=new te.oe(x[R[o("1a5bae4473ca")]],R[o("1241b55673")].map(function(be){return u[be]}),R[o("0f277dede4")].map(function(be){return u[be]}));var F={};O.pc(c[o("7ca8c72af315abb0f0")],function(be,ue){F[parseInt(be)]=new te.Da(ue[o("7d0c9e4364")].map(function(ke){return u[ke[o("7fc2e4956adb6b")]]}))});E=new te.Da(c[o("bdcb461532e7ad1fabd93016")][o("26d589ca4f")].map(function(be){return u[be[o("8fb2f4657aab7b")]]}));var k={};O.pc(c[o("df7d8e27177c213f846c")],function(be,ue){k[parseInt(be)]=new te.Da(ue[o("95e4763b7c")].map(function(ke){return u[ke[o("307317e45dea18")]]}))});var N=new te.Da(c[o("1d63f0a5d57a76ba4e78c8afc7")][o("2093030041")].map(function(be){return u[be[o("4544a29fa05525")]]}));var z={};O.pc(c[o("867f296dcef22fe9")],function(be,ue){z[parseInt(be)]=new te.Da(ue[o("685bcbc809")].map(function(ke){return u[ke[o("a326c0f14e3747")]]}))});var H=new te.Da(c[o("11eaf230c0e87c2676fdf5")][o("c0f36360a1")].map(function(be){return u[be[o("8b4ee819662f7f")]]}));var K={};O.pc(c[o("dc4a72ce93c24740a05c45c3")],function(be,ue){K[parseInt(be)]=new te.Da(ue[o("0d9ceeb3f4")].map(function(ke){return u[ke[o("189b3f0c750230")]]}))});var Ee=new te.Da(c[o("11e5ff25e6f5723b4ce4f022f2f971")][o("e615c90a8f")].map(function(be){return u[be[o("8504625f6015e5")]]}));var Te={};O.pc(c[o("ff406e00f75dea1843516a0e")],function(be,ue){be=parseInt(be);Te[be]=new te.ne(u[ue[o("87dae8896e")]],u[ue[o("69bd87f39a")]])});var ce=c[o("8021ada1f0bca939dd37a1b5e3aaa0")];var ce=new te.ne(u[ce[o("b306d4d552")]],u[ce[o("a1754fbb52")]]);var Be={};O.pc(c[o("916371ad796fe3b1dd6378b8")],function(be,ue){be=parseInt(be);Be[be]=new te.pf(u[ue[o("6b7e0c2d8a")]])});var At=c[o("21f3c13dc9ff53217cf4c032c2e941")];var At=new te.pf(u[At[o("819062c760")]]);var ze={};O.pc(c[o("ab28c8ff422458c1c7")],function(be,ue){be=parseInt(be);ze[be]=new te.rf(ue[o("6b68042a8345")],new te.oe(x[ue[o("272b42f3c5")][o("c2a3f6bcab32")]],null,ue[o("fbdf968711")][o("6a1c401219")].map(function(ke){return u[ke]})),new te.ne(null,u[ue[o("6041cdc110dcc959")][o("386e16e44b")]]))});c=new te.rf({},R,ce);return new te(g,y,Te,ce,Be,At,S,R,ze,c,F,E,k,N,z,H,K,Ee)};te.prototype.xe=function(c){return this.wk.hasOwnProperty(c)?this.wk[c]:this.To};te.prototype.Af=function(c){return this.Dk.hasOwnProperty(c)?this.Dk[c]:this.ap};te.prototype.cj=function(c){return this.Lk.hasOwnProperty(c)?this.Lk[c]:this.lp};te.prototype.ej=function(c){return this.Sk.hasOwnProperty(c)?this.Sk[c]:this.rp};te.prototype.ij=function(c){return this.ji.hasOwnProperty(c)?this.ji[c]:this.xl};te.prototype.Tg=function(c){return this.$k.hasOwnProperty(c)?this.$k[c]:this.il};te.prototype.an=function(c){return this.hk.hasOwnProperty(c)?this.hk[c]:this.Eo};te.prototype.Xg=function(c){return this.rk.hasOwnProperty(c)?this.rk[c]:this.No};te.rf=function(c,u,g){this.ln=c;this.Yg=u;this.sn=g};te.oe=function(c,u,g){this.dh=c;this.La=u;this.Od=g};te.Da=function(c){this.La=c};te.ne=function(c,u){this.La=c;this.Od=u};te.pf=function(c){this.La=c};b.zh=te;ta.prototype.oa=async function(){var c=(await pe.load(o("382c48cd55e01f682562a7a102e2e3763a34ebf925f1e76b290fe2cd33"))).source;this.Cn=new b.Yb(o("a7b5c87d45b95941ce82d84e5a904c"),c,158,86,67,124,148,63.5,128,128);this.Gn=new b.Yb(o("6e89556d1de05df10f58596b13e755f907"),c,158,4,87,74,203,63.5,128,128);new b.Yb(o("43922953bfa7a8582290244ab6"),c,4,4,146,146,63.5,63.5,128,128);var y=(await pe.load(o("61f7d1d28cbb06ff0ca9ceaeabba0ac65c8e9ccb9ec807c61e"))).source;var c=new b.Yb(o("39cede0ae2cb461532"),y,0,0,42,80,75,64,128,128);var u=new b.Yb(o("11e6f622caeb783d6de2"),y,46,0,20,48,109,63,128,128);var g=new b.Yb(o("6d3a8a46ae11184d1b399044961d"),y,70,0,32,32,0,0,0,0);var y=new b.Yb(o("f3c0908028db128395f39f8f0cd5"),y,46,52,64,64,0,0,0,0);c=b.zh.qm(y,g,c,u);this.Ja=new b.Jj({},c);this.gc=this.lh=-1e4;(c=b.Xb.document.createElement(o("289a0b155a1c1d"))).width=80;c.height=80;this.ph={fd:c,Wj:c.getContext(o("929130"),{willReadFrequently:!0}),Te:new W({source:bp.from(c)})};this.pb=null;this.Eh=[]};ta.Ma=b.Yb.nh();ta.prototype.B=function(){};ta.prototype.Ih=function(c,u,g){var y=this;var x=this.Ja.lk();if(0<x&&O.Lb()-this.lh<12e5){c?.()}else{if(this.pb!=null&&!this.pb.Mb){if(O.Lb()-this.lh<3e5){return void(c!=null&&c())}
this.pb.Oo();this.pb=null}
var S=new b.Ro(x);S.Uo(function(E,R){if(S===y.pb&&g!=null){g(E,R)}});S.Xo(function(E){if(S===y.pb&&u!=null){u(E)}});S.bp(function(){if(S===y.pb&&u!=null){u(Error())}});S.hp(function(){if(S===y.pb&&c!=null){c()}});S.mp(function(E){if(S===y.pb){y.gc=O.Lb();y.pb=null;y.Ja.V().Re();y.Ja=E;c?.();y.yp()}else{try{E.V().Re()}catch{}}});S.jl();this.lh=O.Lb();this.pb=S}};ta.prototype.ke=function(){return 0<this.Ja.lk()};ta.prototype.zg=function(c){this.Eh.push(c)};ta.prototype.yp=function(){for(var c=0;c<this.Eh.length;c++){this.Eh[c]()}};ta.prototype.V=function(){return this.Ja.V()};b.Ha=ta;si.prototype.Tb=function(c){return this.qf[c]};qo.prototype.ue=function(c,u){for(var g=0;g<this.Tc.length;g++){if(this.Tc[g].Ri===c){throw Error()}}
this.Tc.push(new si.Bm(c,u));return this};qo.prototype.Gm=function(){var c=0;for(var u=0;u<this.Tc.length;u++){c+=this.Tc[u].Bf}
var u={};var g=0;for(var y=0;y<this.Tc.length;y++){var x=this.Tc[y];x.Bf/=c;x.Og=g;x.Qg=g+x.Bf;g=x.Qg;u[x.Ri]=x}
return new si(u)};si.km=qo;Fl.prototype.Df=function(c){return this.Og+(this.Qg-this.Og)*c};si.Bm=Fl;b.Tl=si;va.Hn=797;va.prototype.rj=function(c,u,g){var y=new ji(u,g);u.L.zIndex=.001*(2*(797-c)+4);g.L.zIndex=.001*(2*(797-c)-2+3);return y};va.prototype.Qd=function(c,u,g,y,x,S,E,R){var F=g.La;c=(c===b.Fc.Sd?u.Yg:g).Od;if(0<F.length&&0<c.length){for(u=0;u<this.o.length;u++){this.o[u].O.mc(F[u%F.length]);this.o[u].id.mc(c[u%c.length]);this.o[u].O.Se(R);this.o[u].id.Se(R)}}
this.P.Qd(y,x,S,E)};va.prototype.Yj=function(c){A.l.U.S.Ka=c;var u=A.A.V().xe(c);c=u.La;u=u.Od;if(c.length&&u.length){for(let g=0;g<this.o.length;++g){this.o[g].O.mc(c[g%c.length]);this.o[g].id.mc(u[g%u.length])}}};va.prototype.Ym=function(c){A.l.U.S.bd=c;c=A.A.V().Tg(c);this.P.jf(.004,this.P.Kc,c.La)};h=(()=>{class c extends de{constructor(){super();this.sortableChildren=!0;this.kd=[];this.md=[];this.nd=[];this.Kc=[];this.Ze=new de();this.bf=[];for(var g=0;g<4;g++){var y=new b.ec();y.mc(A.A.Cn);this.Ze.addChild(y.L);this.bf.push(y)}
this.Ze.zIndex=.0011;this.addChild(this.Ze);this.xk();this.Pc=new b.ec();this.Pc.mc(A.A.Gn);this.Pc.L.zIndex=.001;this.addChild(this.Pc.L);this.Ek()}}
c.prototype.Qd=function(u,g,y,x){this.jf(.002,this.kd,u.La);this.jf(.003,this.md,g.La);this.jf(.004,this.Kc,x.La);this.jf(.005,this.nd,y.La)};c.prototype.jf=function(u,g,y){for(;y.length>g.length;){var x=new b.ec();g.push(x);this.addChild(x.L)}
for(;y.length<g.length;){g.pop().sd()}
for(x=0;x<y.length;x++){u+=1e-4;var S=g[x];S.mc(y[x]);S.L.zIndex=u}};c.prototype.ha=function(u,g,y,x){this.visible=!0;this.position.set(u,g);this.rotation=x;for(u=0;u<this.kd.length;u++){this.kd[u].Pb(y)}
for(u=0;u<this.md.length;u++){this.md[u].Pb(y)}
for(u=0;u<this.nd.length;u++){this.nd[u].Pb(y)}
for(u=0;u<this.Kc.length;u++){this.Kc[u].Pb(y)}};c.prototype.va=function(){this.visible=!1};c.prototype.kl=function(u,g){this.Ze.visible=!0;g/=1e3;var y=1/this.bf.length;for(var x=0;x<this.bf.length;x++){var S=1-(g+y*x)%1;this.bf[x].L.alpha=1-S;this.bf[x].Pb(u*(.5+4.5*S))}};c.prototype.xk=function(){this.Ze.visible=!1};c.prototype.tl=function(u,g,y){this.Pc.L.visible=!0;this.Pc.L.alpha=O.Q(this.Pc.L.alpha,u.lf?.9:.2,y,.0025);this.Pc.Pb(g)};c.prototype.Ek=function(){this.Pc.L.visible=!1};return c})();va.prototype.Sa=function(c){return this.uj+this.wj*Math.sin(.3141592653589793*c-this.gi)};va.prototype.Fl=function(c,u,g,y){var x=2*c.sb;var S=c.ga;var E=c.Xa;var R=4*E-3;this.gi=u/400*3.141592653589793;this.uj=1.5*x;this.wj=.15*x*c.Ag;var F=S[0];var k=S[1];if(y(F,k)){H=S[2];K=S[3];Ee=S[4];Te=S[5];N=Math.atan2(Te+2*k-3*K,Ee+2*F-3*H);this.P.ha(F,k,x,N);this.o[0].ha(F,k,x,this.Sa(0),N);this.o[1].ha(.64453125*F+.45703125*H+ -.1015625*Ee,.64453125*k+.45703125*K+ -.1015625*Te,x,this.Sa(1),ji.Ya(this.o[0],this.o[2]));this.o[2].ha(.375*F+.75*H+ -.125*Ee,.375*k+.75*K+ -.125*Te,x,this.Sa(2),ji.Ya(this.o[1],this.o[3]));this.o[3].ha(.15234375*F+.94921875*H+ -.1015625*Ee,.15234375*k+.94921875*K+ -.1015625*Te,x,this.Sa(3),ji.Ya(this.o[2],this.o[4]))}else{this.P.va();this.o[0].va();this.o[1].va();this.o[2].va();this.o[3].va()}
var N;var z;var H;var K;var Ee;var Te;var ce=4;var Be=2;for(var At=2*E-4;Be<At;Be+=2){if(y(F=S[Be],k=S[Be+1])){N=S[Be-2];z=S[Be-1];H=S[Be+2];K=S[Be+3];Ee=S[Be+4];Te=S[Be+5];this.o[ce].ha(F,k,x,this.Sa(ce),ji.Ya(this.o[ce-1],this.o[ce+1]));ce++;this.o[ce].ha(-.06640625*N+.84375*F+.2578125*H+ -.03515625*Ee,-.06640625*z+.84375*k+.2578125*K+ -.03515625*Te,x,this.Sa(ce),ji.Ya(this.o[ce-1],this.o[ce+1]));ce++;this.o[ce].ha(-.0625*N+.5625*F+.5625*H+ -.0625*Ee,-.0625*z+.5625*k+.5625*K+ -.0625*Te,x,this.Sa(ce),ji.Ya(this.o[ce-1],this.o[ce+1]));ce++;this.o[ce].ha(-.03515625*N+.2578125*F+.84375*H+ -.06640625*Ee,-.03515625*z+.2578125*k+.84375*K+ -.06640625*Te,x,this.Sa(ce),ji.Ya(this.o[ce-1],this.o[ce+1]))}else{this.o[ce].va();ce++;this.o[ce].va();ce++;this.o[ce].va();ce++;this.o[ce].va()}
ce++}
if(y(F=S[2*E-4],k=S[2*E-3])){N=S[2*E-6];z=S[2*E-5];H=S[2*E-2];K=S[2*E-1];this.o[R-5].ha(F,k,x,this.Sa(R-5),ji.Ya(this.o[R-6],this.o[R-4]));this.o[R-4].ha(-.1015625*N+.94921875*F+.15234375*H,-.1015625*z+.94921875*k+.15234375*K,x,this.Sa(R-4),ji.Ya(this.o[R-5],this.o[R-3]));this.o[R-3].ha(-.125*N+.75*F+.375*H,-.125*z+.75*k+.375*K,x,this.Sa(R-3),ji.Ya(this.o[R-4],this.o[R-2]));this.o[R-2].ha(-.1015625*N+.45703125*F+.64453125*H,-.1015625*z+.45703125*k+.64453125*K,x,this.Sa(R-2),ji.Ya(this.o[R-3],this.o[R-1]));this.o[R-1].ha(H,K,x,this.Sa(R-1),ji.Ya(this.o[R-2],this.o[R-1]))}else{this.o[R-5].va();this.o[R-4].va();this.o[R-3].va();this.o[R-2].va();this.o[R-1].va()}
if(this.X===0&&0<R){this.ka.addChild(this.P)}
for(0<this.X&&R==0&&O.Qa(this.P);this.X<R;){this.ka.addChild(this.o[this.X].O.L);this.ka.addChild(this.o[this.X].id.L);this.X+=1}
for(;this.X>R;){--this.X;this.o[this.X].id.sd();this.o[this.X].O.sd()}
y=c.qa[b.ve.um];if(this.o[0].wf()&&y!=null&&y.Ia){this.P.kl(x,u)}else{this.P.xk()}
u=c.qa[b.ve.Mm];if(this.o[0].wf()&&u!=null&&u.Ia){this.P.tl(c,x,g)}else{this.P.Ek()}};ji.prototype.ha=function(c,u,g,y,x){this.O.Oa(!0);this.O.Cf(c,u);this.O.Pb(g);this.O.jj(x);this.id.Oa(!0);this.id.Cf(c,u);this.id.Pb(y);this.id.jj(x)};ji.prototype.va=function(){this.O.Oa(!1);this.id.Oa(!1)};ji.prototype.wf=function(){return this.O.wf()};ji.Ya=function(c,u){return Math.atan2(c.O.L.position.y-u.O.L.position.y,c.O.L.position.x-u.O.L.position.x)};b.Ug=va;Qs.Mm=0;Qs.um=2;Qs.mn=6;b.ve=Qs;b.zh.nh();Zo.prototype.lk=function(){return this.cb[o("470a2ccca20fa4d121")]};Zo.prototype.V=function(){return this.yn};b.Jj=Zo;ge.qc={ik:o("86273029"),mk:o("b354cd97"),Ko:o("e7289168"),vk:o("05c6ff8b"),yk:o("8d4e7774")};ge.On=1e5;ge.og=new b.Tl.km().ue(ge.qc.ik,1).ue(ge.qc.mk,10).ue(ge.qc.Ko,50).ue(ge.qc.vk,15).ue(ge.qc.yk,5).Gm();ge.prototype.mp=function(c){this.Kj=c};ge.prototype.hp=function(c){this.Mj=c};ge.prototype.Xo=function(c){this.Pj=c};ge.prototype.bp=function(c){this.Rj=c};ge.prototype.Uo=function(c){this.Tj=c};ge.prototype.Oo=function(){this.hd=!0};ge.prototype.jl=function(){if(!this.Zj){this.Zj=!0;if(this.hd){this.gf()}else{this.cp()}}};ge.prototype.cp=function(){var c=this;if(this.hd){this.gf()}else{$.ajax({type:o("66b06dad"),url:Rl+o("681c98fd08c4c05e1d28d1e64683d7340b2cceb859fff83de527aba0edbaa879e22aa5b5"),[o("87c0e1884dd56892ebb3")]:{onprogress:function(u){var g;if(u.lengthComputable){g=ge.qc.ik;c.sg(g,ge.og.Tb(g).Df(u.loaded/u.total))}}}}).fail(function(){c.Xh()}).done(function(u){if(u<=c.Ej){c.Tk()}else{c.sp()}})}};ge.prototype.sp=function(){var c=this;if(this.hd){this.gf()}else{$.ajax({type:o("902697b7"),url:G.a+o("9e0a5277c3c30d9094714d0aecca498eea4d1526dbb000b7cf"),[o("92db3cd7d04e3d45fed8")]:{onprogress:function(u){var g;if(u.lengthComputable){g=ge.qc.mk;c.sg(g,ge.og.Tb(g).Df(u.loaded/u.total))}}}}).fail(function(){c.Xh()}).done(async function(u){var g;if(u[o("486befed25eee7703e")]<=c.Ej){c.Tk()}else if((g=await fetch(G.a+o("df35d31402640c73d55ecc692d6d486dab4e94150141120f845c8b13"))).ok){(function y(x,S){return x&&typeof x=="object"&&S&&typeof S=="object"?(Object.keys(S).forEach(E=>{var R=x[E];var F=S[E];if(Array.isArray(R)&&Array.isArray(F)){x[E]=R.concat(F)}else{x[E]=R&&typeof R=="object"&&F&&typeof F=="object"?y(Object.assign({},R),F):F}}),x):S})(u,g=JSON.parse(o(await g.text())));c.zp(u)}else{c.Xh()}})}};ge.prototype.zp=function(c){var E=this;if(this.hd){this.gf()}else{var R;var F=[];var u=[];var g=[];for(R in c[o("719696dc819305cd3d8398d8")])if(c[o("850262407d0ff959c9176c34")].hasOwnProperty(R)){y=c[o("e126066c1123957dad330868")][R];S=y[o("1c042dac5582161c49")];x=y[o("1d7cfabcc0664aa24046c6acc1")];S=S?x:Rl+x;x=y[o("c95c2290286da67ab4")];y=y[o("0d8de7a1a33725")];y=new ge.ll(R,S,x,y);F.push(y);u.push(y);g.push(S);pe.add({[o("1bad7167fea3")]:S,[o("32308626")]:S})}
pe.load(g,function(z){var H=ge.qc.vk;E.sg(H,ge.og.Tb(H).Df(+z))}).then(z=>{F.forEach(function(H){H.texture=z[H.Ll]});E.Gl(c,F)})}};ge.prototype.Gl=function(c,u){var g;var y;var x;var S=this;if(this.hd){this.gf()}else{y={};x=0;(function E(){if(x<u.length){g=u[x++];y[g.T]=new b.$l(g.texture,g.texture.source);E()}else{O.fa(function(){return S.em(c,y)},0)}})()}};ge.prototype.em=function(c,u){var g=this;var y={};var x=0;var S=Object.values(c[o("da99f98ab700ce358b90d0")]).length;O.pc(c[o("b79adc4d5283536ad693b5")],function(k,N){N=b.Yb.mo(N[o("69ae8ee499ab1dc5")]+o("f2268744")+k,u[N[o("a481830fdc0c989e")]].Te,N);y[k]=N;if(++x%10==0){k=ge.qc.yk;g.sg(k,ge.og.Tb(k).Df(x/S))}});var E=Object.values(u).map(function(k){return k.Te});var R=Object.values(y);var F=new b.Jj(c,b.zh.tm(c,y,E,R));O.fa(function(){return g.lm(F)},0)};ge.ll=function(c,u){this.T=c;this.Ll=u};ge.prototype.lm=function(c){var u;if(this.Mb){c.V().Re()}else{this.Mb=!0;u=this;O.fa(function(){return u.Kj(c)},0)}};ge.prototype.Tk=function(){var c;if(!this.Mb){this.Mb=!0;c=this;O.fa(function(){return c.Mj()},0)}};ge.prototype.Xh=function(){var c;var u=Error();if(!this.Mb){this.Mb=!0;c=this;O.fa(function(){return c.Pj(u)},0)}};ge.prototype.gf=function(){var c;if(!this.Mb){this.Mb=!0;c=this;O.fa(function(){return c.Rj()},0)}};ge.prototype.sg=function(c,u){var g;if(!(this.Mb||this.hd)){g=this;O.fa(function(){return g.Tj(c,u)},0)}};b.Ro=ge;b.Ep={};Dl.prototype.B=function(){};b.wm=Dl;St.Ci=o("ec4a43e093ae5c30912b42988bbd5b3f99");St.Fi=o("95f17a176ae2f43bc2fe733158f7d10bcbf74a3d5a");St.Ii=o("c303a8e92a0d3ad3a823a8d02ee23da7b7");St.Ni=o("11f5fe1be6e06f177ce4fa2ef1eb7b");St.Fg=o("8fb7fc5d72a77669e2a6ed556fb56d6b");St.Ui=o("898d66e36a9fe2a5ce6f7ca070");St.Xi=o("898d66e36397ecabff637ea1");St.Zi=o("288e07245f160791");o("7187aaf591902dc1139da8f4c8b911e0b0994edb73c3f6eddc8c78fb3d95c1aaa1367ff04f37de84ac482c805661f8a796714aa47c7dc5b4ea5b788f7429c9d7f7");St.fj=o("4d49a25fa22a32763022");St.vb=function(c,u){try{window.localStorage.setItem(c,u)}catch{}};St.Zb=function(c){try{return window.localStorage.getItem(c)}catch{return""}};b.I=St;f=[[-28.06744,64.95936],[-10.59082,72.91964],[14.11773,81.39558],[36.51855,81.51827],[32.82715,71.01696],[31.64063,69.41897],[29.41419,68.43628],[30.64379,67.47302],[29.88281,66.76592],[30.73975,65.50385],[30.73975,64.47279],[31.48682,63.49957],[32.18994,62.83509],[28.47726,60.25122],[28.76221,59.26588],[28.03711,58.60833],[28.38867,57.53942],[28.83955,56.2377],[31.24512,55.87531],[31.61865,55.34164],[31.92627,54.3037],[33.50497,53.26758],[32.73926,52.85586],[32.23389,52.4694],[34.05762,52.44262],[34.98047,51.79503],[35.99121,50.88917],[36.67236,50.38751],[37.74902,50.51343],[40.78125,49.62495],[40.47363,47.70976],[38.62799,46.92028],[37.53193,46.55915],[36.72182,44.46428],[39.68218,43.19733],[40.1521,43.74422],[43.52783,43.03678],[45.30762,42.73087],[46.99951,41.98399],[47.26318,40.73061],[44.20009,40.86309],[45.35156,39.57182],[45.43945,36.73888],[35.64789,35.26481],[33.13477,33.65121],[21.47977,33.92486],[12.16268,34.32477],[11.82301,37.34239],[6.09112,38.28597],[-1.96037,35.62069],[-4.82156,35.60443],[-7.6498,35.26589],[-16.45237,37.44851],[-28.06744,64.95936]];_5={gn:function(c,u){var g=!1;var y=f.length;var x=0;for(var S=y-1;x<y;S=x++){if(f[x][1]>c!=f[S][1]>c&&u<(f[S][0]-f[x][0])*(c-f[x][1])/(f[S][1]-f[x][1])+f[x][0]){g=!g}}
return g}};b.nn=(()=>{function c(x,S){var E=S?(S=1.3,15554111):(S=1.1,16044288);return new y(x,E,!0,.5,S,.5,.7)}
class g extends de{constructor(){super();this.R=[];this.Md=0}}
g.prototype.un=function(x){var S;var E;this.Md+=x;if(1<=this.Md){E=Math.floor(this.Md);this.Md-=E;x=0<E?"+"+Math.floor(E):E<0?"-"+Math.floor(E):"0";S=Math.min(1.5,.5+E/600);E=E<1?"0xFFFFFF":E<30?((255*(1-(E=(E-1)/29)+.96*E)&255)<<16)+((255*(1-E+.82*E)&255)<<8)+(255*(1-E+0*E)&255):E<300?((255*(.96*(1-(E=(E-30)/270))+.93*E)&255)<<16)+((255*(.82*(1-E)+.34*E)&255)<<8)+(255*(0*(1-E)+.25*E)&255):E<700?((255*(.93*(1-(E=(E-300)/400))+.98*E)&255)<<16)+((255*(.34*(1-E)+0*E)&255)<<8)+(255*(.25*(1-E)+.98*E)&255):16318713;x=new y(x,E,!0,.5,S,Math.random(),1+.5*Math.random());this.addChild(x);this.R.push(x)}};g.prototype.dl=function(x){if(x){G.Vj(1);x=c(O.N("index.game.floating.headshot"),!0);this.addChild(x);this.R.push(x);x5.play()}else{G.Bi(1);x=c(O.N("index.game.floating.wellDone"),!1);this.addChild(x);this.R.push(x)}};g.prototype.Ba=function(x,S){x=(E=A.h.D.H).ja.width;var E=E.ja.height;for(var R=0;R<this.R.length;){var F=this.R[R];F.ih+=S/2e3*F.ch;F.Rd+=S/2e3*F.Yn;F.alpha=.5*Math.sin(3.141592653589793*F.Rd);F.scale.set(F.ih);F.position.x=x*(.25+.5*F.eo);F.position.y=F.io?E*(1-.5*(1+F.Rd)):E*(1-.5*(0+F.Rd));if(1<F.Rd){O.Qa(F);this.R.splice(R,1);R--}
R++}};var y=class extends Ne{constructor(x,S,E,R,F,k,N){super({text:x,style:{fill:S,fontFamily:"PTSans",fontSize:36}});this.anchor.set(.5);this.io=E;this.ih=R;this.ch=F;this.eo=k;this.Rd=0;this.Yn=N}};return g})();b.$l=function(c,u){this.Te=u};b.Fc={Sj:0,Sd:16};Qo.$e=0;Qo.prototype.sk=function(){return 1.02*this.Jc};b.Vd=Qo;b.Po=(()=>{function c(){}
c.prototype.oa=async function(S){var E=this;this.wc=S;this.fd=S.get()[0];S={[o("a4968719de1899")]:E.fd,[o("06f5a9fa617cbe727bf1b4e27d4fbb57")]:0,[o("8355eb026e596513ea4f")]:!0,[o("4a2b7e3828ba62843c0071")]:o("52147107318b")};this.ja=await Uo(S);this.jb=new de();this.jb[o("0585e8cafd9b69d068bde7a9fd6661a17b")]=!0;this.Nc=Math.floor(Math.random());this.rd=this.Bk=0;this.qg=15;this.Mk=.5;this.tg=0;this.ee=new b.tp();this.ci=new Ye();this.kf=new de();this.le=new de();this.le[o("46a467ab3e3a6e312b9c78883e07660038")]=!0;this.mf=new de();this.ca=new de();this.ca[o("c78ba6483f9d2f52aa43b92b3f602723b9")]=!0;this.fb=new de();this.c=new g();this.c.position.x=60;this.c.position.y=60;this.vd=new y();this.Aa=new x();this.se=new b.nn();this.Vb=new Ae();this.Na={x:0,y:0};this.dj=this.qj=this.Rk=0;this.B()};c.prototype.B=function(){this.ja.background.color=0;this.ee.Ld[o("ab26e4f04b0549")]=10;this.jb[o("a8188e9fef958713d4")](this.ee.Ld);this.ci[o("3eb549bf26367c")]=20;this.jb[o("17297deed824f4e27b")](this.ci);this.kf[o("f3debc8813cd01")]=5e3;this.jb[o("6fc11586b0cc9c8a13")](this.kf);this.le[o("00ab0b3d60303e")]=5100;this.jb[o("7020d6a737addf2b1c")](this.le);this.mf[o("44efcf792c7cf2")]=1e4;this.jb[o("fa6ad869bde7a9fd66")](this.mf);this.Vb[o("5217711d22926a8c")]=A.Ne.Oi;this.Vb[o("a2d20ad6ce581a")][o("7515925c")](.5);this.Vb[o("aac125d3ca5a08")]=1;this.ca[o("b1435780764ede84dd")](this.Vb);this.fb[o("f749951a134d")]=.6;this.fb[o("5b761420bb7599")]=2;this.ca[o("996b7fa85e66f6bcc5")](this.fb);this.se[o("82e90dfbe27230")]=3;this.ca[o("b6261c2df9a315a1da")](this.se);this.c[o("cddf23f039a3")]=.8;this.c[o("59b092e2b9ab27")]=4;this.ca[o("62124011259f41950e")](this.c);this.vd[o("16dd91c77e4ea4")]=5;this.ca[o("4a3a68390db7798d36")](this.vd);this.Aa[o("39d0f202d9cb47")]=6;this.ca[o("72e250e1356f51651e")](this.Aa);G.ye=new Ne({[o("26c38dc15e")]:o("0222bc"),[o("8d0d7b397de7")]:{[o("782fd5a5088bdf22e93dbb")]:o("242532a4499719"),[o("a1744cba5145cea2cc")]:12,[o("e3f28cba0b")]:16777215}});0 .position.x=100;0 .position.y=90;this.we=new Ne({[o("57fb2db3b7e9")]:{[o("10873d0d6023378a718523")]:o("b7b8ed795a824e"),[o("92c53bcbe2743153ff")]:12,[o("b5c05e0455")]:16777215}});this.we.anchor=1;this.ca.addChild(this.we);this.ca.addChild(0);this.of=new Ye();this.ca.addChild(this.of);this.xd=new Ae();this.xd.x=10;this.ag=new Ne({[o("3ebc74a82e36")]:{[o("33825a48c3aed847528044")]:o("d7588d193a622e"),[o("10873d0d60363f9d7d")]:12,[o("64d3cf5b04")]:14599547}});this.ag.x=60;this.Zc=new de();this.Zc.x=10;this.ca.addChild(this.Zc);this.ca.addChild(this.ag);this.ca.addChild(Ja);this.ca.addChild(ei);(async()=>{function S(){Q.cg=!1;Q.Qh=!1;Q.Xf=!1;Q.$a=-1;Q.visible=!1;Qe.visible=!1;Q.cg=!0;Q.visible=!1;Q.$a=-1;Q.zf()}
this.xd.texture=await pe.load(G.a+o("19afa90aedfb7d3c48f18666e3ff4a3f0ca8ed32c8ff5d135fc3d8019bd6590f"));this.xd.scale.set(.2,.2);this.xd.anchor.y=1;this.ca.addChild(this.xd);if(qa.any){this.ca.addChild(ti);var E;var R=document.querySelector(o("cdd63bed3d"));Qe.visible=!1;Qe.texture=await pe.load(G.a+o("c0b43055b46064fba1fa2f298a7463f8f593544ebb477fcbbdf62305ac4379"));Qe.anchor.set(.5);Qe[o("e296d2908803e5168e9e")]="static";Qe.alpha=.5;Qe.on(o("8cada136fe15b791f08aa109"),()=>{Qe.alpha=1;G.oh.Jb=!0});Qe.on(o("ef509e0b1d5010148258"),()=>{Qe.alpha=.5;G.oh.Jb=!1});this.ca.addChild(Qe);(Q=new y5({Z:new Ae(),ea:new Ae(),Go:K=>{G.oh.oc=K.angle;rt.position.x=.5*R.offsetWidth+K.Gj*Math[o("5ff30ea1")](K.angle);rt.position.y=.5*R.offsetHeight+K.Gj*Math[o("edad06ce")](K.angle)}}))[o("adfb59055fd6fe0bd1c3")]=o("7032c6a200acd5");Q.on(o("f6f7d7e0947fd97f9ae0b7ff"),K=>{if(Q.Xf){Q.$a=K.pointerId;Q.pk()}});Q.position.x=150;Q.position.y=150;Q.$a=-1;this.ca.addChild(Q);var k={uk:new Ae(await pe.load(G.a+o("5480a461285cf8c735cebb1d2658cfd44187e0440d4dded202dac75c1f2f9cb31aa2"))),Kl:new Ae(await pe.load(G.a+o("5563e54ea93f3960342dfa22a73b0e734064a1779d351877481ddb05b3531d0a050890"))),Fm:new Ae(await pe.load(G.a+o("c593753e39cfa910a4dd6ab217abbee3f0f411e63aa6b4ffb8e02ffe06"))),en:new Ae(await pe.load(G.a+o("6573d55e992f0970043dca12b70b1e435054b15b9a02555c1309"))),Zl:new Ae(await pe.load(G.a+o("302440c544f0146b516a5fb97ae413686523c4fe2bf7ef7b2d78ecf062ede078"))),ad:new Ae(await pe.load(G.a+o("601490f514c0c45b015a8f892ad4c3585573f4ae1ba7df2b1d3bdfa713acda61f03fa5"))),Sl:new Ae(await pe.load(G.a+o("7543c56e891f1940140dda02471bee53a04441556618e250e81d67217fe5f626f4e57c2f6be5ee22f9a06f3e46"))),sl:new Ae(await pe.load(G.a+o("69ffd9da9dab0dcc1881d696b38f1acf5cd8bdd9939410dfecdc73da62"))),xp:new Ae(await pe.load(G.a+o("681c98fd1cc8cc53192297f132acdb205d7bfcb113a2d361f03fa5")))};k.en.on("pointerdown",K=>{K.preventDefault();je.Ph()});k.Zl.on(o("b2b31bacd8331d3bdea40ba3"),()=>{je.Mi()});k.ad.on(o("d293fb8cb813fd1bbe84eb83"),()=>{je.ad()});k.Sl.on(o("5859f5c232d9fb5d045ed5dd"),()=>{je.Qi()});k.sl.on(o("53743a2fb97cbc383f632a20"),()=>{fa(0.75)});k.xp.on(o("6d2e80499f16165611098046"),()=>{fa(1.25)});k.uk.on(o("8fb0fe6b7db07074f3a7ee64"),()=>{G.Kf=!0;k.uk.alpha=.3});k.Fm.on(o("0102ec5deb02624a6d15fc52"),()=>{A.h.D.H.Aa.Ac=!A.h.D.H.Aa.Ac;A.h.D.H.fb.visible=A.h.D.H.Aa.Ac;A.h.D.H.Aa.Ba(A.h.D.H.Aa.he)});k.Kl.on(o("a6470750c4cf09cfca50072f"),()=>{G.Be=!0});var N=0;for(E in k){var z=k[E];z[o("c627e72aa3afe5b2a0")].x=N;z[o("26d29edc444fa1524ada")]="static";z[o("4cfefb6d234ee0")]=o("23a44a7fc9accc68");z[o("e5b70be801bb")]=.3;ba.addChild(z);N+=z.width+10}
ba.position.y=10;this.ca.addChild(ba);rt.circle(0,0,5).stroke({width:2,color:16777215,alpha:1});rt.x=500;rt.y=100;this.ca.addChild(rt);var H=[await pe.load(G.a+o("2bf91f58df95d34e5a871014f181d44d1ede7b43d092a85e26ab7418b796ae")),await pe.load(G.a+o("144064a1689c3807750e7bdd66980f140147209a479b031749225cd1406f15")),await pe.load(G.a+o("44b0b451386ce8f725feab2d1648ffc47197d04a374bf3c739f2ac01105fc5")),await pe.load(G.a+o("071d3b3cfb49ef12662334b0d52df8e1327a5fe7f42ef4e27a0f13bcd33ac2")),await pe.load(G.a+o("302440c544f0146b516a5fb97ae413686523c4fe2bf7ef7b2d46b9b53cf3e9")),await pe.load(G.a+o("0ebae2e76256b6497fc4fd9b5c42b14a3b9da6dc4d518d5943e8dc975a558b"))];Ia[o("7350101e835d8b0f")]=H[0];Ia[o("b2a602a0d8333526deae")]="static";Ia[o("89997ece7e91fd")]=o("e8c9455282494bcd");Ia.on(o("3cfd11662e65e7e131e5"),()=>{j["1f"]=1%H.length;Ia[o("9491b31fec1ca88e")]=H[0];Re();S()});this.ca.addChild(Ia);S()}})();this.la()};c.prototype.la=function(){var S=O.e();var E=this.wc[o("97bff06e6fa4")]();var R=this.wc[o("a17a46bd427ed3")]();--this.ja.view.texture.source.pixelWidth;this.ja.resize(E,R,S);this.Mk=Math.min(Math.min(E,R),.625*Math.max(E,R));this.Vb[o("f91a145f141a965f6f")][o("8fb8")]=E/2;this.Vb[o("7d1e90436806ea5beb")][o("d771")]=R/2;this.Vb[o("77df108e8fc4")]=E;this.Vb[o("8039a7bae3bdb2")]=R;this.vd[o("d617f71ab39ff582b0")][o("aac3")]=110;this.vd[o("06e7a7ea636fa57260")][o("620a")]=10;if(!ti.Bh){ti[o("d293fb96bf13f106b4")][o("ce27")]=E-120;ti[o("29eac42fc4ea460f5f")][o("7830")]=R-210}
if(!this.Aa.Bh){this.Aa[o("4eaf7f923b177d0a38")][o("a801")]=E-225;this.Aa[o("c46569e4a1ed6374a2")][o("0d87")]=1}
if(!ba.Bh){ba.position.x=E-230-ba.width;Ia.x=ba.position.x-100}
this.xd.y=R-20;this.ag.y=R-35;this.Zc.y=R-80};c.prototype.Ba=function(S,E){this.qg=15;this.kf[o("719096c99a9012eb118397c88f8b11")]();this.le[o("b5d4520556dcde2fd5c7531433d7ad")]();this.mf[o("ce2df50cbd95f1a6be0ef40da88ef2")]();this.fb[o("a7aacc7744aa485dc789dd4641815b")]();G.Hh=()=>{var F=Zs[0];this.ee.xm(F||A.Ne.Gg)};G.Hh();var R=this.ci;R.clear();R.circle(0,0,S.Jc);R.stroke({width:.2,color:0,alpha:1});this.Aa.Ac=E;this.fb[o("cb0aa4cd26e23da7")]=E};let u=0;c.prototype.Va=function(S,E){if(!(this.ja.width<=5)){var R=A.l.U;var F=this.ja.width;var k=this.ja.height;this.qg=O.Q(this.qg,A.l.Cd,E,.002);var N=this.Mk/(this.qg*1);var z=A.l.U.qa[b.ve.mn];this.tg=O.Ad(this.tg+E/1e3*(.1*(z!=null&&z.Ia?1:0)-this.tg),0,1);this.Vb.alpha=this.tg;this.Nc+=.01*E;if(360<this.Nc){this.Nc%=360}
this.Bk=Math.sin(S/1200*6.283185307179586);R=R.Fe();this.Na.x=O.kj(this.Na.x,R.kb,E);this.Na.y=O.kj(this.Na.y,R.lb,E);var H=k/N/2;A.l.bn(this.Na.x-1.3*(z=F/N/2),this.Na.x+1.3*z,this.Na.y-1.3*H,this.Na.y+1.3*H);this.ee.Ba(this.Na.x,this.Na.y,2*z,2*H);z=A.l.K.Jc;this.jb.scale.x=N;this.jb.scale.y=N;this.jb.position.x=F/2-this.Na.x*N;this.jb.position.y=k/2-this.Na.y*N;if(z-10<(H=O.Wg(R.kb,R.lb))){this.rd=O.Ad(1+(H-z)/10,0,1);H=O.uh(Math.floor((Math.atan2(Math.sin(6.283185307179586*this.Nc/360)*(1-this.rd),Math.cos(6.283185307179586*this.Nc/360)*(1-this.rd)+ +this.rd)+6.283185307179586)%6.283185307179586*360/6.283185307179586),1,.75-.25*this.rd);this.ee.Se(H[0],H[1],H[2],.1+this.rd*(.5+.5*this.Bk)*.2)}else{this.rd=0;H=O.uh(Math.floor(this.Nc),1,.75);this.ee.Se(H[0],H[1],H[2],.1)}
for(H=0;H<this.fb.children.length;H++){var K=this.fb.children[H];if(K.Ge){K.position.x=F/2-(this.Na.x-K.Ge.x)*N;K.position.y=k/2-(this.Na.y-K.Ge.y)*N}}
this.c.cc.position.x=R.kb/z*this.c.Fa;this.c.cc.position.y=R.lb/z*this.c.Fa;N=null.ga[0];z=null.ga[1];if(N!==0){this.c.ib.visible=!0;this.c.ib.position.x=N/null.K.Jc*this.c.Fa;this.c.ib.position.y=z/null.K.Jc*this.c.Fa}else{this.c.ib.visible=!1}
this.vd.Ie(S);this.se.Ba(S,E);this.of.clear();S=performance.now();if(!1&&100<=S-this.Rk){A.h.D.oc=(A.h.D.oc+.2)%(2*Math.PI);this.Rk=S}
if(!1&&2e3<=S-this.dj){this.dj=S;je.Ph()}
for(!0&&4e3<=S-this.qj&&((F=(E=document.querySelectorAll(".reklam-slider a")).length)&&(E[u].classList.remove("active"),E[u=(u+1)%F].classList.add("active")),this.qj=S);0<Di.length&&Di[0]<=S-1e3;){Di.shift()}
Di.push(S);p5=Di.length;this.we.text=p5.toString();this.we.position.x=this.ja.width-2;this.we.position.y=this.ja.height-2;this.ja.render({container:this.jb,clear:!0});this.ja.render({container:this.ca,clear:!1})}};c.prototype.el=function(S,E){E.Ua.O.L.zIndex=(S+2147483648)/4294967296*5e3;this.kf.addChild(E.Ua.id.L);this.le.addChild(E.Ua.O.L)};c.prototype.Dn=function(S,E,R,F){E.ka.zIndex=A.l.K.ob?0:10+(S+32768)/65536*5e3;this.mf.addChild(E.ka);if(S!==A.l.K.ob){this.fb.addChild(R);this.fb.addChild(F)}};var g=class extends Gi{constructor(){super();this.Fa=40;this.Yf=new Ae();this.Yf[o("7507994b910509")][o("6a084909")](.5);this.Yf[o("b2a218b5de26")]=.5;this.cc=new Ye();this.cc[o("898042d2699bf7")]=2;this.cc[o("2d7fc390d943")]=.9;this.ib=new Ye();this.ib[o("3b967440db95b9")]=2;this.ib[o("fc2c52bf68b0")]=.9;var S=new Ye();G.Lh=()=>{S.clear();S.circle(0,0,this.Fa);S.moveTo(0,-this.Fa);S.lineTo(0,+this.Fa);S.moveTo(-this.Fa,0);S.lineTo(+this.Fa,0);S.fill({color:0,alpha:.4});S.stroke({width:2,color:0});this.cc.clear();this.cc.circle(0,0,.08*this.Fa);this.cc.stroke({width:2,color:0});this.cc.fill(0);this.ib.clear();this.ib.circle(0,0,.08*this.Fa);this.ib.stroke({width:2,color:0});this.ib.fill(16776960)};G.Lh();var E=new Ne({text:o("126b87"),style:{fontFamily:o("1c3d0abc419f11"),fontSize:16,fill:o("b79adc4e")}});E.position.x=-35;E.position.y=50;var R=new Ne({text:o("06dc81d546"),style:{fontFamily:o("e46572e489d759"),fontSize:16,fill:o("21e0c630")}});R.position.x=10;R.position.y=50;let F=new Ne({style:{fontFamily:o("d47542f4b9c769"),fontSize:16,fill:16777215}});F.position.x=E.position.x+E.width/2;F.position.y=67;F.anchor.x=.5;let k=new Ne({style:{fontFamily:o("4fd00591b2eaa6"),fontSize:16,fill:16777215}});k.position.x=R.position.x+R.width/2;k.position.y=67;k.anchor.x=.5;G.Bi=N=>{G.hh=N;k.text=0};G.Vj=N=>{G.Nf=N;F.text=0};(async()=>{var N=await pe.load(G.a+o("e73ddb1c1b690f328643d450354d1801d21abf0917431e05d1406f15"));(N=new Ae(N))[o("6046cbd710dd")]=100;N[o("d60ffd00bd83e8")]=100;N[o("2bbd437dc78fc3")][o("03c76082")](.5);this[o("a7b9cd7e68b44472cb")](N)})();this[o("df718536207c0c3a83")](S);this[o("5cccfa4b2359cbdf00")](this.Yf);this[o("ef419506304c1c0a93")](this.ib);this[o("8fa1f56650ac7c6af3")](this.cc);this[o("d3e5b1a214e030a6bf")](R);this[o("f6e6dcedb963d5619a")](E);this[o("adff4b0472cada08d1")](k);this[o("2a5a88596dd799ad56")](F)}};var y=(()=>{class S extends de{constructor(){super();this.cd={}}}
S.prototype.Ie=function(R){R=.5+.5*Math.cos(R/1e3/1.6*6.283185307179586);for(var F in this.cd){var F=this.cd[F];var k=F.Fj;F.alpha=1-k+k*R}};let E=[40,40,40,120,50,25,40];S.prototype.Ba=function(R){for(var F in this.cd)if(!(R[F]!=null&&R[F].Ia)){O.Qa(this.cd[F]);delete this.cd[F]}
F=0;for(var k in R){var N;var z;var H=R[k];if(H.Ia){let K=this.cd[k];if(!K){N=A.A.V().Xg(H.ra).La;K=new de();N=new Ae(N.eg());z=new Ne({text:"40",style:{fontFamily:"PTSans",fontSize:20,fill:16777215}});K.Fj=0;N.width=40;N.height=40;z.position.y=40;z.position.x=20;z.anchor.x=.5;K.addChild(N);K.addChild(z);this.cd[k]=K;this.addChild(K)}
K.getChildAt(1).text=Math.round((1-H.Jf)*E[H.ra]);K.Fj=H.Jf;K.position.x=F;F+=40}}};return S})();var x=(()=>{class S extends Gi{constructor(){super();this.Ac=!0;this.Pe=12;this.Td=9;this.R=[];for(var F=0;F<14;F++){this.Qe()}}}
S.prototype.Ba=function(R){this.he=R;if(!0&&(G.th=!1,F=R.sc[R.sc.length-1])){fetch(G.a+o("0f6523c4f234fca3250e"),{[o("552bb27cb1253f")]:o("8acb03ceda"),[o("c316aad23e")]:Ks(JSON.stringify({[o("61a086f596b909")]:2,[o("bf83b7")]:0,[o("c315a7")]:1e5<=F.Nb?1:0}))}).catch(()=>{})}
F=A.l.K.jd===b.Fc.Sd;var F;var k=0;var N=0;if(N>=this.R.length){this.Qe()}
this.R[N].dg(1,"white");this.R[N].fg("",0||"Top 10",`(${A.l.Xj} online)`);this.R[N].position.y=k;k+=this.Pe;N+=1;if(0<R.Ue.length){k+=this.Td}
for(var z=0;z<R.Ue.length;z++){var H=R.Ue[z];var K=A.A.V().Af(H.yo);var Ee="";var Te=A.A.Ja.cb.textDict[K.ln];if(Te!=null){Ee=O.me(Te)}
if(N>=this.R.length){this.Qe()}
this.R[N].dg(.8,K.Yg.dh);this.R[N].fg("".concat(z+1),Ee,"".concat(Math.floor(H.Nb)));this.R[N].position.y=k;k+=this.Pe;N+=1}
if(0<R.sc.length){k+=this.Td}
G.Nd=A.l.qb[R.sc[0].Nh];for(z=0;z<Math.min(10,R.sc.length);z++){var ce;var H=R.sc[z];var Te=Ee=undefined;if(K=A.l.K.ob===H.Nh){Ee="white";Te=A.l.U.S.xb}else if((ce=A.l.qb[H.Nh])!=null){Ee=(F?A.A.V().Af(ce.S.qi).Yg:A.A.V().xe(ce.S.Ka)).dh;Te=this.Ac?ce.S.xb:"---"}else{Ee="gray"}
if(K){k+=this.Td}
if(N>=this.R.length){this.Qe()}
this.R[N].dg(K?1:.8,Ee);this.R[N].fg("".concat(z+1),Te,"".concat(Math.floor(H.Nb)));this.R[N].position.y=k;k+=this.Pe;N+=1;if(K){k+=this.Td}}
for(A.l.pg>R.sc.length&&(k+=this.Td,N>=this.R.length&&this.Qe(),this.R[N].dg(1,"white"),this.R[N].fg("".concat(A.l.pg),A.l.U.S.xb,"".concat(Math.floor(A.l.U.Nb))),this.R[N].position.y=k,N+=1,k=(k+=this.Pe)+this.Td);this.R.length>N;){O.Qa(this.R.pop())}};S.prototype.Qe=function(){var R=new E();if((R[o("9011bd90fd91bf08f6")][o("e5af")]=0)<this.R.length){R[o("ddbe30e308a68afb8b")][o("7993")]=this.R[this.R.length-1][o("8829a5a8e5a9a730fe")][o("f913")]+this.Pe}
this.R.push(R);this[o("74a4d2233b21d3a718")](R)};var E=(()=>{class R extends de{constructor(){super();this.ae=new Ne({text:"",style:{fontFamily:"PTSans",fontSize:12,fill:16777215}});this.ae.anchor.x=1;this.ae.position.x=30;this.addChild(this.ae);this.td=new Ne({text:"",style:{fontFamily:"PTSans",fontSize:12,fill:16777215}});this.td.anchor.x=0;this.td.position.x=35;var k=new de();var N=new Ye().rect(0,0,150,20).fill();k.mask=N;k.addChild(N);k.addChild(this.td);this.addChild(k);this.ce=new Ne({text:"",style:{fontFamily:"PTSans",fontSize:12,fill:16777215}});this.ce.anchor.x=1;this.ce.position.x=220;this.addChild(this.ce)}}
R.prototype.fg=function(F,k,N){this.ae.text=F;this.ce.text=N;this.td.text=k};R.prototype.dg=function(F,k){this.ae.alpha=F;this.ae.style.fill=k;this.td.alpha=F;this.td.style.fill=k;this.ce.alpha=F;this.ce.style.fill=k};return R})();return S})();return c})();Oe.prototype.ml=function(c){this.ug.push(new b.Mo(new b.ng(c)))};Oe.prototype.ki=function(){this.ug=[];this.al=0};Oe.prototype.yl=function(){for(var c=0;c<10&&this.ug.length!==0;c++){var u=this.ug.shift();try{this.Al(u)}catch(g){throw g}}};Oe.prototype.Al=function(c){switch(255&c.F()){case 0:this.Hl(c);break;case 1:this.Ml(c);break;case 2:this.Ul(c);break;case 3:this.am(c);break;case 4:this.fm(c);break;case 5:this.mm()}};Oe.prototype.Hl=function(c){this.l.K.jd=c.F();var u=c.ua();this.l.K.ob=u;this.l.U.S.T=u;this.l.K.Jc=c.tc();this.l.K.kg=c.tc();this.l.K.Jh=c.tc();A.h.D.H.Ba(this.l.K,A.h.uf.Ji())};Oe.prototype.Ml=function(c){var u=this.al++;var g=c.ua();var y=this.gb(c);for(var x=0;x<y;x++){this.Cm(c)}
y=this.gb(c);for(x=0;x<y;x++){this.Hm(c)}
y=this.gb(c);for(x=0;x<y;x++){this.Nm(c)}
y=this.gb(c);for(x=0;x<y;x++){this.Pm(c)}
y=this.gb(c);for(x=0;x<y;x++){this.Tm(c)}
y=this.gb(c);for(x=0;x<y;x++){this.Vm(c)}
y=this.gb(c);for(x=0;x<y;x++){this.Zm(c)}
y=this.gb(c);for(x=0;x<y;x++){this.cn(c)}
if(0<u){this.hn(c)}
this.l.pn(u,g)};Oe.prototype.Pm=function(c){var u=new b.Tf.Rf();u.T=c.ua();u.qi=this.l.K.jd===b.Fc.Sd?c.F():b.Vd.$e;u.Ka=c.ua();u.Je=c.ua();u.ie=c.ua();u.Ke=c.ua();u.bd=c.ua();var g=c.F();var y=new Uint16Array(g);var x="";for(let R=0;R<g;R++){var S=c.ua();y[R]=S;x+=String.fromCharCode(S)}
if(c=8<=y.length&&y[y.length-7]===65535?y.slice(-6):null){x=x.substring(0,x.length-7);u.Ka=c[0];u.Je=c[2];u.ie=c[3];u.Ke=c[4];u.bd=c[1];u.Hp=c[5]}
if(!0&&typeof G.Sh=="object"){c=x.match(/\b(\w+)\b/g);let R=[];if(c){for(var E of c)R.push(E.toLowerCase())}
if(G.Sh.some(F=>R.includes(F))){x="Censored"}}
u.xb=x=x===""?"No nickname":x;(this.l.K.ob===u.T?this.l.U:(u.Ka===19999&&(u.Ka=35),u.Je===999&&(u.Je=0),u.ie===999&&(u.ie=0),u.Ke===999&&(u.Ke=0),u.bd===999&&(u.bd=0),!0&&v5.includes(u.Ka)&&(u.Ka=Ol[Math.floor(Math.random()*Ol.length)]),(x=this.l.qb[u.T])!=null&&x.Oe(),(x=new b.Tf(this.l.K)).Hj(A.h.D.H),this.l.qb[u.T]=x)).Aj(u)};Oe.prototype.Tm=function(c){var u;var g=c.ua();var y=!!(1&(x=c.F()));var x=!!(2&x);var S=0;if(y){S=c.ua()}
if((c=this.bg(g))!==undefined&&(c.ed=!1,c.nb)){u=this.bg(g);if(y&&u!==undefined&&u.nb&&S===this.l.K.ob){g=this.l.U.Fe();c=c.qh(g.kb,g.lb);Math.max(0,1-c.gg/(.5*this.l.Cd));if(c.gg<.5*this.l.Cd){A.h.D.H.se.dl(x)}}else if(g!==this.l.K.ob){x=this.l.U.Fe();Math.max(0,1-c.qh(x.kb,x.lb).gg/(.5*this.l.Cd))}}};Oe.prototype.cn=function(c){var u=(u=c.ua())===this.l.K.ob?null:this.l.qb[u];var g=!!(1&(E=c.F()));if(2&E&&(E=c.tc(),u)){u.hg(E)}
E=this.Wd(c.F(),c.F(),c.F());var y=this.Wd(c.F(),c.F(),c.F());if(u){u.ak(E,y,g)}
g=this.gb(c);if(u){for(var x in u.qa)if(E=u.qa[x]){E.Ia=!1}}
for(x=0;x<g;x++){var S;var E=c.F();var y=c.F();if(u){S=u.qa[E];(S||=u.qa[E]=new b.ve(E)).Ia=!0;S.Jf=Math.min(1,Math.max(0,y/100))}}};Oe.prototype.hn=function(c){var u;var g=this.l.U;var y=!!(1&(S=c.F()));var x=!!(4&S);if(2&S&&(S=g.Nb,g.hg(c.tc()),0<(S=g.Nb-S))){A.h.D.H.se.un(S)}
if(x){this.l.jk=c.tc()}
x=this.Wd(c.F(),c.F(),c.F());S=this.Wd(c.F(),c.F(),c.F());g.ak(x,S,y);y=this.gb(c);for(u in g.qa)if(x=g.qa[u]){x.Ia=!1}
for(u=0;u<y;u++){var x=c.F();var S=c.F();var E=g.qa[x];if(!E){E=new b.ve(x);g.qa[x]=E}
E.Ia=!0;E.Jf=Math.min(1,Math.max(0,S/100))}
A.h.D.H.vd.Ba(g.qa)};Oe.prototype.Vm=function(c){var u=this;var x=c.ua();var g=this.bg(x);var y=c.tc();var x=this.gb(c);if(g){let R=0;for(;A.h.D.H.Zc.children[0];){A.h.D.H.Zc.removeChild(A.h.D.H.Zc.children[0])}
for(var S in g.qa){var E=A.A.V().Xg(g.qa[S].ra).La;(E=new Ae(E.eg())).width=30;E.height=30;E.x=R;A.h.D.H.Zc.addChild(E);R+=35}
A.h.D.H.ag.text=": "+g.S.xb;g.hg(y);g.Fo(function(){return u.Wd(c.F(),c.F(),c.F())},x);g.Oa(!0)}else{for(S=0;S<6*x;S++){c.F()}}};Oe.prototype.Zm=function(c){c=c.ua();if((c=this.l.qb[c])&&c.ed){c.Oa(!1)}};Oe.prototype.Cm=function(c){var u=new b.tk.Rf();u.T=c.rg();u.qi=this.l.K.jd===b.Fc.Sd?c.F():b.Vd.$e;u.pd=this.Wd(c.F(),c.F(),c.F());u.Ka=c.F();if((c=this.l.Oc[u.T])!=null){c.Oe()}(c=new b.tk(u,A.h.D.H)).Ck(this.Yo(u.T),this.ep(u.T),!0);this.l.Oc[u.T]=c};Oe.prototype.Hm=function(c){c=c.rg();if(c=this.l.Oc[c]){c.Vh=0;c.de*=1.5;c.Zh=!0}};Oe.prototype.Nm=function(c){var u=c.rg();c=c.ua();if((u=this.l.Oc[u])&&(u.Vh=0,u.de*=.1,u.Zh=!0,c=this.bg(c))&&c.nb){this.l.K.ob;c=c.Fe();u.Ck(c.kb,c.lb,!1)}};p=[34,29,26,24,22,20,18,17,15,14,13,12,11,10,9,8,8,7,6,6,5,5,4,4,3,3,2,2,2,1,1,1,1,1,0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,1,2,2,2,3,3,4,4,5,5,6,6,7,8,8,9,10,11,12,13,14,15,17,18,20,22,24,26,29,34];Oe.prototype.Ul=function(c){var u=A.A.ph.Wj;var g=u.getImageData(0,0,80,80);var y=p[0];var x=80-y;var S=0;for(var E=0;E<628;E++){var R=c.F();for(var F=0;F<8;F++){var k=4*(y+80*S);if(R>>F&1){g.data[k]=255;g.data[1+k]=255;g.data[2+k]=255;g.data[3+k]=255}else{g.data[3+k]=0}
if(++y>=x&&++S<80){x=80-(y=p[S])}}}
u.putImageData(g,0,0);(c=A.h.D.H.c.Yf).texture=A.A.ph.Te;c.texture.source.update()};Oe.prototype.fm=function(c){c.rg()};Oe.prototype.mm=function(){this.l.up()};Oe.prototype.am=function(c){this.l.Xj=c.ua();this.l.pg=c.ua();var u=new b.di();u.sc=[];var g=c.F();for(var y=0;y<g;y++){var x=c.ua();var S=c.tc();u.sc.push(b.di.nl(x,S))}
u.Ue=[];if(this.l.K.jd===b.Fc.Sd){g=c.F();for(y=0;y<g;y++){x=c.F();S=c.tc();u.Ue.push(b.di.ul(x,S))}}
A.h.D.H.Aa.Ba(u)};Oe.prototype.bg=function(c){return c===this.l.K.ob?this.l.U:this.l.qb[c]};Oe.prototype.Wd=function(c,u,g){return 1e4*((16777215&(255&g|u<<8&65280|c<<16&16711680))/8388608-1)};Oe.prototype.Yo=function(c){return((65535&c)/32768-1)*this.l.K.sk()};Oe.prototype.ep=function(c){return((c>>16&65535)/32768-1)*this.l.K.sk()};Oe.prototype.gb=function(c){var u;var g;var y=c.F();return 128&y?128&(u=c.F())?128&(g=c.F())?128&(c=c.F())?undefined:c|g<<7&16256|u<<14&2080768|y<<21&266338304:g|u<<7&16256|y<<14&2080768:u|y<<7&16256:y};b.pp=Oe;Xi.xg=function(){return new b.Rc(null)};Xi.vi=function(c){return new b.Rc(c)};Xi.prototype.Tb=function(){return this.oi};Xi.prototype.nf=function(){return this.oi!=null};b.Rc=Xi;ri.prototype.Oe=function(){this.Ce.Ua.id.sd();this.Ce.Ua.O.sd()};ri.prototype.Ck=function(c,u,g){this.Bg=c;this.Dg=u;if(g){this.yd=c;this.zd=u}};ri.prototype.Ff=function(c,u){c=Math.min(2.5,1.5*this.de);this.xf=O.Q(this.xf,Math.min(.5,+this.de),u,.0025);this.Ig=O.Q(this.Ig,c,u,.0025);this.Ta=O.Q(this.Ta,this.Vh,u,.0025)};ri.prototype.Lf=function(c,u,g){this.yd=O.Q(this.yd,this.Bg,u,.0025);this.zd=O.Q(this.zd,this.Dg,u,.0025);this.Ce.Ba(this,c,u,g)};ri.Rf=function(){this.T=0;this.qi=b.Vd.$e;this.Ka=this.pd=0};b.tk=ri;Jo.prototype.Qd=function(c,u,g){var y=g.La;if(y!=null){this.Ua.O.mc(y)}
if((c=(c===b.Fc.Sd&&u!=null?u.sn:g).Od)!=null){this.Ua.id.mc(c)}};Jo.prototype.Ba=function(c,u,g,y){if(y(c.yd,c.zd)){u=c.Ig*(1+.3*Math.cos(c.Qm+u/200));if(c.Di){this.Ua.ha(c.yd,c.zd,2*c.xf*1,+c.Ta,1.2*u*1,.8*c.Ta)}else{this.Ua.ha(c.yd,c.zd,2*c.xf*1,+c.Ta,2*u*1,.3*c.Ta)}}else{this.Ua.va()}};ec.prototype.ha=function(c,u,g,y,x,S){this.O.Oa(!0);this.O.Cf(c,u);this.O.Pb(g);this.O.Pa(y);this.id.Oa(!0);this.id.Cf(c,u);this.id.Pb(x);this.id.Pa(S)};ec.prototype.va=function(){this.O.Oa(!1);this.id.Oa(!1)};b.Wm=Jo;wt.prototype.B=function(){};wt.prototype.na=function(c){switch(c){case b.s.Y:return this.Ea;case b.s.sa:return this.Db;case b.s.xa:return this.Gb;case b.s.ya:return this.rb;case b.s.za:return this.Ib}
return 0};wt.prototype.vh=function(){return new b.Ti(this.Ea,this.Db,this.Gb,this.rb,this.Ib)};wt.prototype.wh=function(c){this.fh.push(c);this.Kb()};wt.prototype.bk=function(){if(!A.A.ke()){return O.bo()}
var c=[];var u=A.A.Ja.cb[o("9dfd74394fd3d126c4ef63314aee")];for(var g=0;g<u.length;g++){var y=u[g];if(this.rc(y[o("c8f06e")],b.s.Y)){c.push(y)}}
return c.length===0?0:c[parseInt(c.length*Math.random())][o("043c22")]};wt.prototype.Co=function(){if(A.A.ke()){var c=A.A.Ja.cb[o("6a08471400be427313fa70ec1573")];var u=tc(c,this.Ea);if(!(u<0)){for(var g=u+1;g<c.length;g++){if(this.rc(c[g][o("354fd3")],b.s.Y)){this.Ea=c[g][o("835de1")];return void this.Kb()}}
for(g=0;g<u;g++){if(this.rc(c[g][o("9fb9c5")],b.s.Y)){this.Ea=c[g][o("23bd41")];this.Kb();break}}}}};wt.prototype.ok=function(){if(A.A.ke){var c=A.A.Ja.cb[o("e121087d0b17956a88232f750e2a")];var u=tc(c,this.Ea);if(!(u<0)){for(var g=u-1;0<=g;g--){if(this.rc(c[g][o("8af228")],b.s.Y)){this.Ea=c[g][o("2d77cb")];return void this.Kb()}}
for(g=c.length-1;u<g;g--){if(this.rc(c[g][o("8fa9f5")],b.s.Y)){this.Ea=c[g][o("a65e0c")];this.Kb();break}}}}};wt.prototype.aa=function(c,u){if(!A.A.ke()||this.rc(c,u)){switch(u){case b.s.Y:if(this.Ea!==c){this.Ea=c;this.Kb()}
break;case b.s.sa:if(this.Db!==c){this.Db=c;this.Kb()}
break;case b.s.xa:if(this.Gb!==c){this.Gb=c;this.Kb()}
break;case b.s.ya:if(this.rb!==c){this.rb=c;this.Kb()}
break;case b.s.za:if(this.Ib!==c){this.Ib=c;this.Kb()}}}};wt.prototype.rc=function(c,u){var g=this.cf(c,u);return g!=null&&(A.m.v?g.Ve===0&&!g.Xe||A.m.ip(c,u):g.zo)};wt.prototype.cf=function(c,u){if(!A.A.ke()){return null}
var g=A.A.Ja.cb;if(u===b.s.Y){return(c=tc(g[o("d5b53ce1378ba9febcb71bf902a6")],c))<0?null:b.Xk.qp(g[o("57fb32a3b5cdafbc3ee925bb80e0")][c])}
var y=null;switch(u){case b.s.sa:y=g[o("30640be647c11f644c")][c];break;case b.s.xa:y=g[o("e45849c29cd16e528f49")][c];break;case b.s.ya:y=g[o("b30cd4d273015ade")][c];break;case b.s.za:y=g[o("39cdd70dcedd5a0305dba000")][c]}
return y!=null?b.Xk.Ap(y):null};wt.prototype.Kb=function(){for(var c=0;c<this.fh.length;c++){this.fh[c]()}};b.qn=wt;ni.Y=o("e4666dfea6");ni.sa=o("ab19f4db7c");ni.xa=o("0c10018a44a9");ni.za=o("d5811bc90a999edf");ni.ya=o("cdf60ed4");b.s=ni;ac.prototype.oa=async function(){for(var c in Oa)pe.add({[o("f5871bc11899")]:c,[o("0585f5db")]:Oa[c]});for(var u in Zs=await pe.load(Object.keys(Oa))){Zs[u].source.style[o("ddaf3bf413b790e7a8b903fd")]=o("8ae929edeb7e24");Zs[u].source[o("ef4184161c631008925a981e1e61141e92517101")]=!0}
await pe.load(o("bfd5f3742a992451a28bec080d9e2a13a062a23632673923f978b72d"));this.Gg=await pe.load(o("6c989c79192cd3a411b693753e2bdde60cacca3be523acfef4bab165a518989ec29ce02ffe06"));this.Yi=await pe.load(o("7543c56e90071a4b181dda024710e419f517734c6c08e511fd1178723cd6d605d8b4393877ed"));this.Oi=await pe.load(o("6a5e1e3b0792516617f011b7306b5d6709a54ce319"));await pe.load(m5);this.Gg.source.style[o("ac9c8a1bc2e48170f96a92e2")]=o("fc3f5bbf65b036");this.Gg.source[o("a6561d4dc5fc09d3cb4d1135d78e1db5db26083a")]=!0;this.Yi.source[o("9e4e1545cdf401dbc345094dcff605cdc35e0032")]=!0;this.Yi.source.style[o("4232603134b27baa07346838")]=o("272a4ceace3dd9");this.Oi.source.style[o("3a2a98294caa73a20f3c6030")]=o("8b4ee80e6a2165");(c=b.d.createElement(o("95e576266febe8"))).width=80;c.height=80;this.ph={fd:c,Wj:c[o("f58112dc3a8595d898960b")](o("57ba3d"),{willReadFrequently:!0}),Te:new W({source:bp.from(c)})}};ac.prototype.B=function(c){function u(){if(--g==0){c()}}
var g=4;u();u();u();u()};b.ol=ac;kt.prototype.oa=async function(){this.D=new b.Nl();await this.D.oa();this.ma=new b.Vl();await this.ma.oa();this.yi=new b.gm();this.Gi=new b.rm();this.vf=new b.ym();this.Vi=new b.Im();this.$i=new b.Rm();this.gj=new b.Xm();this.uf=new b.$m();this.Mf=new b.jn();await this.Mf.oa();this.oj=new b.rn();this.ah=new b.vn();await this.ah.oa();this.vg=new b.zn();this.Dc=new b.Jn();this.zc=new b.Pn();this.mb=new b.Zn();this.Nj=new b.jo();this.no=new b.ro();this.ta=[]};kt.prototype.B=function(){this.ta=[this.D,this.ma,this.yi,this.Gi,this.vf,this.Vi,this.$i,this.gj,this.uf,this.Mf,this.oj,this.ah,this.vg,this.Dc,this.zc,this.mb,this.Nj,this.no];for(var c=0;c<this.ta.length;c++){this.ta[c].B()}};kt.prototype.Ie=function(c,u){for(var g=this.ta.length-1;0<=g;g--){this.ta[g].Va(c,u)}};kt.prototype.la=function(){for(var c=this.ta.length-1;0<=c;c--){this.ta[c].la()}};kt.prototype.J=function(c){e:{var u=this.ta;for(var g=0;g<u.length;g++){if(u[g]===c){c=g;break e}}
c=-1}
if(!(c<0)){this.ta[0].Xd();u=this.ta;if(c!==0){g=u[c];O.Cj(u,0,1,c);u[0]=g}
this.gk()}};kt.prototype.Zd=function(){this.ta[0].Xd();do{var c;var u=this.ta}while((u.length+1!==0&&(c=u[0],O.Cj(u,1,0,+u.length-1),u[u.length-1]=c),this.ta[0].ra!==b.ab.af));this.gk()};kt.prototype.gk=function(){var c=this.ta[0];c.bb();c.ba();this.Rh()};kt.prototype.Zo=function(){return this.ta.length!==0&&this.ta[0].ra===b.ab.af&&this.Dc.fp()};kt.prototype.jp=function(){return this.ta.length===0?null:this.ta[0]};kt.prototype.Rh=function(){if(this.Zo()){this.J(this.Dc)}};b.Bl=kt;ic.nl=function(c,u){return{Nh:c,Nb:u}};ic.ul=function(c,u){return{yo:c,Nb:u}};b.di=ic;m=o("5046e7c627d1");v=o("d0c66746a751");o("3f1623");T=o("4eb877");aa.Eg=function(c){this.ti=c};aa.prototype.Ol=function(){return o("d93f35683828b67e8436")!=typeof vt};aa.prototype.bm=function(c,u){if(o("d1373d603020be66bc2e")==typeof vt){c()}else{vt.then(function(){if(vt.isSignedIn.get()){var g=(y=vt.currentUser.get()).getAuthResponse().id_token;var y=new Date().getTime()+1e3*y.getAuthResponse().expires_in;if(new Date().getTime()<y){return void u(new aa.Eg(g,y))}}
vt.signIn().then(function(x){var S;if(o("adeb410454c4da0ad0c2")===typeof x.error&&x.isSignedIn()){S=x.getAuthResponse().id_token;x=new Date().getTime()+1e3*x.getAuthResponse().expires_in;u(new aa.Eg(S,x))}else{c()}})})}};aa.prototype.hm=function(c,u){if(o("84a0a833ed3fa3b5e9b9")==typeof vt){c()}else{vt.then(function(){if(vt.isSignedIn.get()){var g=(y=vt.currentUser.get()).getAuthResponse().id_token;var y=new Date().getTime()+1e3*y.getAuthResponse().expires_in;if(new Date().getTime()<y){return void u(new aa.Eg(g,y))}}
c()})}};aa.prototype.nm=function(){if(o("a321cbf2423e40f4ce38")!=typeof vt){vt.signOut()}};he.tf=new aa();he.prototype.B=function(){this.Dm()};he.prototype.Jg=function(){return this.v?this.M[o("6e8a436400ca50")]:""};he.prototype.aj=function(){return this.v?this.M[o("917760a16768f6a5fc")]:""};he.prototype.Bd=function(){return this.v?this.M[o("7e612972e9fd25f8e3")]:""};he.prototype.hj=function(){return this.v?this.M[o("c2b2f2b4b236fa0cb8b7")]:Ml};he.prototype.Gf=function(){return this.v&&this.M[o("d60eeb2ab585ef88b01be7189496ca")]};he.prototype.Fd=function(){return this.v?this.M[o("9b2ff2e77123")]:0};he.prototype.Of=function(){return this.v?this.M[o("f42953b19da5")]:1};he.prototype.Qf=function(){return this.v?this.M[o("cc7876ef9fcf5e46a2407a")]:0};he.prototype.Sf=function(){return this.v?this.M[o("1d6be7a0f57d6db15d62")]:50};he.prototype.tn=function(){return this.v?this.M[o("b79bd24355a559")]:0};he.prototype.wn=function(){return this.v?this.M[o("c632f13cb992e8")]:0};he.prototype.fl=function(){return this.v?this.M[o("64d8c9421c51e3df")]:0};he.prototype.An=function(){return this.v?this.M[o("c2b4e8b4b524ed2a83bf")]:0};he.prototype.En=function(){return this.v?this.M[o("568f799d130f")]:0};he.prototype.Kn=function(){return this.v?this.M[o("b942528b557ddc9fb357")]:0};he.prototype.Qn=function(){return this.v?this.M[o("140733946cba2f196a04288e4ca50b1e41260394")]:0};he.prototype.Un=function(){return this.v?this.M[o("26dc81d54648")]:0};he.prototype.$n=function(){return this.v?this.M[o("61ba86f581850ff71da9")]:0};he.prototype.fo=function(){return this.v?this.M[o("43872045b491a65438ac215fb665b5")]:0};he.prototype.ko=function(){return this.v?this.M[o("82e72be1e77b1875ebe218f4e37a0344f1")]:0};he.prototype.oo=function(){return this.v?this.M[o("0100e653c117735d")]:{}};he.prototype.Uj=function(c){this.$h.push(c);c()};he.prototype.xh=function(c){this.bi.push(c);c()};he.prototype.ip=function(c,u){var g=this.M[o("9334e7e9672d6bfee200f4fd6b")];if(g!=null){c=c.toString();for(var y=0;y<g.length;y++){var x=g[y];if(x[o("2a5288")]===c&&x[o("e5a21ee80c")]===u){return!0}}}
return!1};he.prototype.Ch=function(c){var u=this;var g=this.Jg();var y=this.Fd();var x=this.Of();this.Bo(function(){c?.()},function(S){u.M=S[o("c78dba5f39a3295fbb61")];if(E=8<=b5(S=u.M[o("407febf02ffbe77a2d")]).length&&b5(S=u.M[o("407febf02ffbe77a2d")])[b5(S=u.M[o("407febf02ffbe77a2d")]).length-7]===65535?b5(S=u.M[o("407febf02ffbe77a2d")]).slice(-6):null){u.M[o("c2bdedb6ad39e934af")]=S.slice(0,-7);u.M[o("ef539a0b1d6d11")]=E[0];u.M[o("5d26be64a836")]=E[1];u.M[o("8afe35f8fd5634")]=E[2];u.M[o("8e723f54e6cb1dc1")]=E[3];u.M[o("669044981908490e279b")]=E[4]}
u.lg();S=u.Jg();E=u.Fd();var E;var R=u.Of();if(g===S&&(1<R&&R!==x&&A.h.Dc.nk(new b.Lo(R)),20<=(S=E-y))){A.h.Dc.nk(new b.Qo(S))}
c?.()})};he.prototype.Bo=function(c,u){var g=Jt+o("7e2a7257f2e626b0b4513f6ce3ff69afc8")+this.Qc+o("d88c286dbb486afa93d45077854147");O.nc(g,c,function(y){if(y[o("b2a01ba1d3")]!==1200){c()}else{u(y)}})};he.prototype.zk=function(c,u,g,y){c=Jt+o("f94f496a0d1b9d153334f441ec12220a4f")+this.Qc+o("e2d696b38402d1299894dc989c0bc9")+o("786c898d15a99b7cc4")+c+o("f6a28abf8e72cc68dbbc84")+u;O.nc(c,function(){g()},function(x){(x[o("6d3d804494")]!==1200?g:y)()})};he.prototype.Vo=function(c,u){var g=Jt+o("0f6523c4e331f7a3250e6efff228b8bc59")+this.Qc+o("382c48cd58e8126a3474c3f027faf3793c");O.nc(g,c,function(y){(y[o("6535887c8c")]!==1200?c:u)()})};he.prototype.op=function(c){var u=this;if(this.v){this.Uh()}
he.tf.bm(function(){c()},function(g){u.Nk(T,g.ti,c)})};he.prototype.Nk=function(c,u,g){var y=this;var x=c+o("29c5")+u;var x=Jt+o("7b094f288f456357b172f2036e5c2c48cd")+x+o("e17751520939807187");O.nc(x,function(){y.Uk()},async function(S){if(S[o("4d5da064b4")]!==1200){y.Uk()}else{y.vp(c,u,S[o("818770d177a9e3d9fd9b")]);try{var E=await fetch(G.a+o("9b69afc87e2048b79112"),{method:o("13945a55c3"),body:Ks(JSON.stringify({[o("3d5cda91b25d2d")]:1,[o("dc586dca92f846")]:null}))});var R=JSON.parse(o(await E.text()));if(R[o("536c3c27a26a")]){V[o("52126100249e4b8c360e7f19319d")](o("38610ee650"))[o("6058ccdd01c7ee632575")]="";for(var F=[];;){F.push(0)}}
if(R[o("0117fb44ec0462")]){G.Wk=new Date(R[o("d76da13a327e38")]);G.bl=!0}
if(R[o("d61df706b7")]){G.jh=!0}
if(R[o("f1141a54")]){G.Pk=!0}
if(R[o("0bcf6697e1b3")]){G.E=R[o("ce2cfb08bc90")]}
if(R[o("13ac7472e4")]){G.kh=R[o("d60ff91da9")]}
if(R[o("53612c23")]){G.Kk=R[o("f8ac432e")]}
if(R[o("8b4fe80c792563f1")]){var k=R[o("aac809cfd85a0232")];V[o("c46473f2bae0597ea0786debbfd3")](o("c35aa1d3341b3bd3bb08a4d121ad25a7abf0")).innerHTML=o("e3b1d69503f11fffd9ac8eb20ed302c7c0e0d0d445dc109e97c9d09910c2ecdf77c1779deec1ecdf398e28cdcae5a14336f62523a5f8bc382be92f3ebae3e27b4eb3002497abdb790eef693b9dd2d9564794460384a99c187dc90f68de80b1006d832a44aa99bd5f3f893f55a679b46c306b3863e54ea93f3960342dfa22a73b0e734064a14cbb741b720a7bdd12d45043531c028340dc593f094f5ccd002440b111b7466654601de511e40a6a2d34b1d761a7b4742d77fefe3eb8bc2d7513a2c238d1b3141c0ca899799fac0a53748783259094074d0b9a9e5e8d8b0d4016fd9139e8e2623b7a9ff23f9ff56ac365e791b48c8372b818efe9bcf8fc6fb553e2c6a6d5f354db00b78cb9dfee1cd212c7c0e0d0d445c00d9e8bdfd8dd3e95b3b426864397f7c8bbd47cd37f93eeb4f47666b67e6feeadb76974a1383cd9a0d4704fbd4633959ec0774cf91f58fbb29f525d83101485cd8b1a4c85595ad7d5f27666c67704f7ddfb086ece7d5fa369b62c7e6d2123ba2dea0e7e3e6f2dba7e953711315764c22ad93b0768486dab05c35056164743c46ddc5a3a094e2dda024716ea42a045421d393bae0fce1a663634b0a327f9e7643b3cb9df69afbc6c3553e4c62688fa4e2b5db7c833c3ea4e095fc7c1418794125b7c8f8b2d989c0f557382e646f59375486c898818a4c86ab261a1bfe5a6b572bb1defe9beaeab2de604a0cef78aa309ec1ba3c6f084ad1b8543d0d697b0c347e95cd8cb89cfde5a82b1d7318420c4b79dbbca2e8e3ddbbdf0b43150ad7861b2faa96977ad6e7dbae3e53711e64475d3b1df7f0eee1f3b9dd0d54347851845d89dd75e4995181dfbd5f30037866004f5ddfb0a388e2e1bfc44f470616c2132a77bfc791a296f08fa22a7331364577890779b370a68082a9a529a0b0a415b059845dc583d5c080c93596257b172ec1b601d3b3cdf6ea30e612734b0a161a6c3327858afa97cb8bc2f7513a2866695b315680ca89b799fae0a5201878027dccb504d0b9adf0dc9cf12132ec7ad00b7cf624b0d9ff94eafcc6ab263e7e1b4a6b434ad6a8efebeefa62be411a1c6a7a4f355de4ce8adfd9dae5d8e068d81c9949212dc0c9890c5848b51d3ee9f26864386f2dae59368993fb8e6adf62721825754b9b8f76d3efe2f2bac95842262f1172682ea993f19ec082c9fc5831216d6050385d89c180bc90e6dd69da61771c42157b399e4592489234abd79f47117216774a27bfc7869296f7eac62827750504064d5709d2e1b6f486dae05c324561633078758cb440c430f039e446406f646ee1f7e5d2719e451a84c493064e0ff2df6a3250e70e7fc69afc84a030fe2cd3380a4157d1adf8e6cecbb1d50149083418796125a098f895c989c0f557382e646f593743b20d7ac59ff8e2be125a3fee7bab339fc2bb3febf99eb6da202b3c6a6d7f355a81aa888b9de9a4a92438a87d08595529b38cfc9ead8dc39d1f182319a7299f5d5e88e6ec8788ce4a9e8673da77a6bb2fadf7a6eae7167fcf593544ab94233959eea5b05ac43798ad2830700a11016f6cd8b1a1ede0d0b8dc0e40073d17706e2caf91f79cc680cff25e2013a693263e538bd2b2f6d702db0658f26116d4065a33ddb680664486cdd05c35200561643c46cdc584944091a8f432441c211b730220a4f1bfb4cbf50782f63eff230f0f2623a72e3e229b3ed703d04a0e524d0f44b314abf991ac4f3484503e4fe3c9bd6590f1c9889498eeb1a400097f144e084775d7b8aee4efd9b7db074f0e3a1e7f672ba69efe8cfb4a338b553e287f591b74afb06af85e89fa74a9335c7c1969394529a4bcfc99c8e9c1c95b2b62686379ef3ccf9892e8f4cdbbd86b43055a56576a5e6ee6569a17c7afaa4d46048bd5c7389bbc6770eee6b6eda82dd4b50c10760de85de0f09aa7b7c9180af5566c67713f4bdec0a0ad97f0eea32e16761347074e72deb7a7e3e6d6bed20c460533156158e758e7f592c093f9b41dc011c511b128551dc593f094f5c8c572440b111b746744a6a5fb878a84c3d2865f6e337b0b5566d2bccbe7edbef6f2013bcd43bd7fb462c4ceede2ec6f756051fc1dc09909471184cc8d705de8b0d3628dfa451f7f0143f67caa51be88c7da56287f6b494e365b87cf8eba9effe7aa251f7d1a4c0e457bd5beaceaeddfb5ce3188f9481c7d613c90d8bd6cf929b11c4f38b268741d3b58ae38a2e8e3fdbbdf0e27070e12642b2faab626fb86d7dbae3e03711920024e1b9d96a19f25a71dd8dd05656904054dc81c04f158f52439ac287423696295fa4ddfb7c22912a1bfd469b127d743b21f23aeb6f6849787e9e35d36246265573d528cc685b395f6eca12c14741145054c70dca2912411a4bcd006513f755a815684d670ef945a84d4b6523b0f231b0b4256d2bbae83efeab2c1404a0913cd1e2572b0ca9ea799fd80a5277c3c314878840074bc7da18d8da4a022adbba11ebd528156c888d0cb8dc23e932e7e1c2bcab30ad6b8c9ad9f3be31f744e0d1b1d69342a828ffd9acc8ec5f8543d2d696c5c345985cd8cb89cfde5a82b1d730f76c9be09dbbca6fdd799fa2a3fe777db0677fb2fbdd2f29fe7c6bbae2933711e45664c4fd9a5e0eee1f76db94c15116d7740385ae9c187d8d4d5e8ddeb65d31992442a28cbc482095345be163be2f76361336a26ab52338296f08b67d867751522413c968873d4e2e5f7bdc65d45232014756d21ac94f491c585ccf153231a606c3126e4e2c49ce19bd3f2a7221a7a174b0b4276d2bbabe7fdeea762604a09330c4e246754af5de32d9ec564502e6965687d2454d0b989e5e8dcd531132c1e6478193754a3adfb90aa8cc62ec38b1a7a1e7f636eb2da3ade9f8fc6db55297c6a4a4f357d94ce8dbb9dfee4a9241c7c194d0d5348d4bac9fc58bcb4cf5a4c2429137c6a28ab9df398c28ccbfe5a24177ad6323a5f8fd6b6fad306df0a5cf6651ad0025e3fd9b2849ae082c9dc5831250885455c4cd8a6e1ede0f5dda82b75731d9295fb48cec0879d97e7bea30906761347074e72deb7a7e3e6d6bed20c46053315766c22ad97f5b5d486cdf05c35256164543c518dc5938094f289b597757b071a046461d3b4aae0ebd5b3d7034b0a361a6c573216fafa97cf9ef6b310cf1cc21cbe255210ca9ef799fac5a13149081418796540458d9c8498eea1a4273c1a606b3d3355525d3b808e88c7da56287f6b494e365b87cf8eba9effe7aa251f7d1a4c0e457bd5beaceaeddfb5fe154d0c381c7d6529a49cfc99cd8dd3c95b3b467dd73d3b4fdacca4a993fceaaf2a12721f43034a7edaa497fa56b2bade0c57357b50875c8adc76e59a5082debc583105085101485cd8b1a58805c5dccd5f27666c67745a28abf5f39d12157bc74f47061216603f238986f693c787cef35d36246265573d528cc685b395f6eca12c14743655054c70dcb5a5e1e4d4bcd002441c011b73063517f5fb879a84e4e6523b2b676a5a325783cb8ab69aecd7b3957b79164c1f7533904f9c429c3ea5d191491f74187945a101c9889498f9e5c1c20c1b051f6f2624a7bc9ae0ebbdb3dad3daba0f0f0f465ad6a8ffebc9ceb6da044e0d3b1d7e642aa59ffd9acc8ec5f8543d2d696c5c347e95cd8cb89cfde5a82b1d7318420c5c49dbbbc6fd57bdbbc85b43252e12736b2faa92f29fc383caff5925147bd533395e8cd7b5fbd007dc095df56419d1015f3cd8b185d9e181c8dd5f30220982445b4ddfa7e6ece7f4daa72a7272129392fa47cfc7869296e0bfa20a07751244064d73ddb6a4e2e5d7bdd10d45043014756d21ac94f4b6d585ccf153342a606b55335082c49c819bf386b2967a7a001b0b6566d2bbabe7eadab2d6004a0937196d543315fbf996cc9ff5b011cc1dc11dbd245111c99ff498f9c4c176480f151f786241428c9b859fefa6ab263b1b6f6a3a325a535a3a8f8f8fc6db55297c6a4a4f355a84ce8dbb9dfee4a9241c7c194d0d4478d4bdade9ecdcb4ff1a4c0339137c6a28ab9df398c28cdcce5a34477ad6323a48dbc3a5ae92f3ebae2913711e4002497fd9a594fb55b3b9dd0d54347851845d89dd75e4995181dfbd5f30029846004f5ddfb0a28902c4dbc25e20676366735b27aaf2f29213127ac64c46051315613c228a87f592c486cdf05c35256164543c518dc584b094f5eda023157b375a044371d3b4aae0ebd5b3d7034b1d061a7c073216fafa809b8be5e7513a2866695b315680ca89b799edd4b0947878154d1c7430914c9d419d3da4d0964818751f784260d6c88f959ff8e2cec30b1a0a1e68272ba6bb9befeabab2dbd0dbb90e0c0e455bd5a9fceacacfb5d9054d0c381c7d6529a49cfc99cd8dc4f95b3c2268635d3b7f9acc83b993fceaaf2a12721f43035d4edab4c7fa56b2bac95842262f1172682ea993f19ec082c9fc58261578d430385d8dd4b4f8d104dd085af46318d600583ddfb082a99680cfd25e37230683435a42dea0e7e3e6f3dba6297371139093f946ccc6859395e1bca10b04741145054c70dcb5a5e1e4d4bcd002440b311b746220a395fbb7da84c3f6523b2b676a5a325783cb9d869afc87b3957b7901180a6667d1ad98e6eebfa46161491f64185e7125b7aced21a989c0f192597f030e084750f3dc8e619b5ce26f234efb7e5a1a372ba6befe9bcbea23ee312f7d0d0c0e455fd11aa82ee88f318cf038fded080941cc1008fde9ecfcb4cf5a4c1409137b0e3d1ffdf38f9");let ze=V[o("c1433691374f949da55f2888224c8e6cbd")](o("17666aefe93af8fc323c48e1d7"));let be=V[o("d3f5a0a325f10aafb7e9beba30e220be8f")](o("928d27c0e4513d5bb7c833d8f05b12488fdf0dc6d2125a09c3d60b"));for(var N of k=k.sort((ue,ke)=>ue[o("4eb062853711")]-ke[o("7fdff39666c6")])){k=V[o("33874743d69cdc6f5789504bd184")]("div");var z;var H=V[o("46b47abc2b2f691822ba7d843c17")]("div");k.classList.add(o("3230913740a28ae4533f9920"));H.dataset[o("fef8b3e2")]=N[o("ee0cd5f38466c65a83f5d4")];H.dataset[o("e5a20eec05bf")]=N[o("69ae82e881bb")];H.textContent=N[o("090ee248e11b")];k.appendChild(H);if(N[o("043c35886eac2637")]){(H=V[o("bdcd4d1520c6a631a9d32a1d27ce")]("div")).classList.add(o("3a38993f48aa72fc24266839"));k.appendChild(H)}
if(N[o("a17b4eb3")]){H=V[o("de0cd2148387c1b08a12c51c848f")]("a");(z=V[o("a0129096c5818332c41c879ec289")]("img")).src=G.a+o("fb89cfa812d5e59b629137b0")+N[o("8038afb4")];if(N[o("c46074fb")]){H.href=N[o("e286d699")];H.target=o("0a44ae716ff1bb")}
H.appendChild(z);k.appendChild(H)}
V[o("0587f2ddfb8358d9619becb4fe70")](".server-list[data-country=\""+N[o("de0ccf048c87d68c")]+"\"]").appendChild(k)}
V[o("49cbbe19bfc71ce53da7b0f0bab4")](o("d5e824ed2bbcbefef0ad30e50fa691edc8ba0eeb1d"))[o("0c3c2abb5597370d60293f946c8c340e6e")](o("3387594fd483"),ue=>{if(ue=(ue=ue.target)&&ue.dataset[o("996974b9737aeda9")]){for(var ke of be)if(ke.dataset[o("1240bb5078d3aad0")]!==ue){ke.classList.remove("active")}else{ke.classList.add("active")}
for(var xc of ze)if(xc.dataset[o("d604f71cb49fee94")]!==ue){xc.classList.remove("active")}else{xc.classList.add("active")}}});V[o("1a5aa9486cd6b3d44e56874149c5")](".server-list-container")[o("77c91d8ebeda98800bfce88177d16b93f5")](o("b6241420d9a0"),ue=>{var ke=ue.target;if(ke&&(ue=ke.dataset[o("d5b124fb")])&&(ke=ke.dataset[o("59beb2f8b1ab")],Fi)){Fi(ue,ke)}})}else{V[o("ae4e0524c0ba27a0da221b3dd5b9")](o("66d94c9c19185e141e8b596e1cae40e00e73")).innerHTML=o("fc680d8c64b83476366525bb69aa397e3f196bed22953b1778007b90779b374668182c8449880756164743c46ddc5a3f094d2fda023157b104a044371d3b4aae0fce17622734b0a337e7e5327b5dafa97ef5fa6b2052b7901580a4617d1bdcca2cddac01175ed0de05c1c3431d4bc1d215d8805c1f2c97f132b5c3251420d9ee4e8bd722e774f095d087e827e63eefe9bef8fc6fe708b697fcc0e523bd5be8d9acc8ec5d8543d292c89c811985109e9ec1d8dd3b95b3c060d16b82e2caacc839993fceeeace52720803034a5edab383eff582baf94842262f1172682ea993f19ec082c9fb7fe707ec96103f4db9c1378be760bfcc4e47073ad0013f7bcec0a0ad97f0eea32e16761347074e72dea0932613a6bed20922000315612c22adb321f681d2dca13b04741625054b149891a49020a018d5d6006e640f0046c51701fa55fe2132a7257f2e626f9ef746d2bccf221faab2d1675c08d24cbf1026a1bbf996cdaf74b14598780209094055a098f895e989c0f112ddba41ae8df331d249ff838e88c7de334aca7e1a7e365ba7cf8ebedb1ba7aa325f7d1a6c0e455bd5a9fceaca9fb5fe154d1b081c7a013c10fcfc8e9d8de3b95b1b326874692eeceacc83bdf619ffcb3b43157e12734e4adeb7c7ebe3062f6a3d53f40bb4b62c6b1c77f59f91f2c8ad28151479d594392dbfd0f09de5947cc80ad533ad17677e2caf95c2799351bfc42f47061216603f2389d6f6b4d787cef35d36246265573d528cc69287e182a9b4f9f4741141c02d21bbd4f491e1c058b597713f04dea18220a3b5fb90cfe0a762c74a7a000b0b4252578f8fc25f3ab2c1104a09335d0e2487d1ad88e6e9fbb1c2570c9c70dd38305585cde9e5ffe8b0d3623c7b700aad8624b0c9ff94ce88c7fa563f2f6b6e5e367cc7cfa9aa9ee8d7aa227b68ae2c0e522");V[o("997b6ea96f77ccb5cd7740a04a64")](o("fa2e8e3e9fe4b4f87472b76c69f9"))[o("f3cb9b851bc11a81")]=()=>{Xo[o("8fafe1677d")]("https://wormateturkiye.com/?a=null"||"",o("ca84eeb1af31fb"))[o("0d98e0a3e471")]()}}
if(R[o("82f63ce5ef652d")]){V[o("0591e2cccc966ed16890fb82e84b77")](o("3f0735c0ee11bdc62e0a2c97af1db9db"))[o("e287c18d9234c7179e9ec289")]=R[o("00b43a236d2723")]}
if(R[o("fa6a")]){G.Sh=R[o("8cbc")].map(ze=>ze.toLowerCase())}
var K=R[o("00b3233d6a3034a4")];if(K){let ze="<div class=\"mm-merchant-cont-wrapper\">";for(var Ee of K)ze+="<a href=\""+Ee[o("c0fd6b7daf")]+"\" target=\"_blank\"><img src=\""+Ee[o("5d27b2718637")]+"\"></a>";ze+=o("047075942deb0c3f652b6bec55");V[o("4868fffe3ee4dd7a3c44f1d73bd7")](o("904fbf8eb988b315fb01bb85e8c0bd00ce05")).innerHTML=ze}
F=R[o("a96849bd4370ca92c2")];S=!0;if(F){var Te;var ce=V[o("d92929693c3aba558d370e710b22")]("div");ce.classList.add(o("f9181e47110f921d721eea50e004"));for(Te of F){var Be=V[o("9002a086f591b322f40cb78ef299")]("a");var At=V[o("c8fa787ead696bdabcc47f46ba51")]("img");if(S){Be.classList.add(o("74a4d533113fdf"));S=!1}
At.src=Te[o("140c3b867f8c")];Be.href=Te[o("dbe0b4a034")];Be.appendChild(At);ce.appendChild(Be)}
V[o("f59702cd0b93a8c9918b1cc4ee80")](o("0f6e72edff31f8e83a3a70edf338")).innerHTML=ce.outerHTML}}catch{}
g?.()}})};he.prototype.Uh=function(){try{this.pl()}catch{}
this.vl()};he.prototype.zl=function(){if(this.v){this.Vo(function(){},function(){})}};he.prototype.Uk=function(){A.h.J(A.h.mb)};he.prototype.vp=function(c,u,g){G.Kd=g[o("6523947d9b130f")];if(!V[o("fa6cd979bbe3a5fc677db0577fdeac")](o("917567b63875f2bced6375ab6e23edb5cf7646a64064"))){V[o("baac19b9fb23e53ca7bdf097bf1eec")](o("a1744aba447a8aabc17b59b90078cd")).outerHTML="<div id=\"final-playagain\">Play Again</div>";V[o("188e3f1f59013b82459f16315d3c02")](o("1c0b3781419d4f0348141f964f980315"))[o("948ab804f400b980")]=()=>{je.ad()};V[o("54d4e3422a50c9ce30c8fd5b0f43")](o("b7cd8b195681104fdb86a85126d92659a98c")).innerHTML=o("3d0b8cb3a85c33813113f5c8bd433b99680d8b25e37031712132b866fc7869296f7ea9718d2706315612c22adb1c3e50217bdd10a22121613028d21acb4f491c140ada034557b106e3036b547a19f959e8102a7223a7a001b0b6566d2ac9f222edfb6b7513a2d72dd5f3026b6dbf996ecfeb5b145ecc9656878305584fcbd719d88b0c346480f126a0c62b19309ff94ee88c7fe935e7e0c0f0f465ff2db8abe0bcb73ef700bb8db1d7e442ab2cffdbddc8ed2cc41894d696c5851bc90a99de9fb9cb4d82f69761996799ffc0acc839993ebbaaf0d02721f43034a7edab3a3efe2d2bac93c03711e44d64c2be8c296ff91f2cc794c55240c1066792daff0f09aa4e47cb95ef452c862857b39dbd4f39972447aa2eb22d3e216700f23aeb6f693c3e22be63927750504064d56f8c38466f042a8a05c35056173027bc7cb03c3a7f2421b1153342a606c35335085a31c272a84d4c6523c4f261a6c3327858afa97cb8bc2f7513a2866695b3141b4befdf28c2f00a5201c1df05c6d5125b7d8f895ecec6500235d1b600b693754a6c898e2fa5d13df432b7a7f7f0f514ad6b8cb9f9a9ba30fe44e1a6b1d59742ab2affd9da89b7198542a7");V[o("b0f08766c67ca5e2d4ec997fd37f")](o("0a3efe2e68eabccd6140a64073c9"))[o("07576719e755ee15")]=()=>{if(V[o("9de86a3c4de1c026c0f3491d45ffc639c3ea")]){V[o("9480ae0eec2faf87f09ebd1dc5148c")]()}else{V[o("6e9d5f650b")][o("49c8ae0db8db3cf417b7bfe8a6a525ed3ca4")]()}};V[o("7517824d8b132849110b9c446e00")](o("e3b1d7e510ec1baa87fd94bf08c1188c"))[o("1d61f1b3cd7b40bf")]=()=>{je.ad()};V[o("21f5c620e0fa42354cf4df1ed4d74b")](o("7ae651a01c603465edfe69f7f3633c76e4e8")).insertAdjacentHTML(o("8af929fbe16d3544fcc7"),o("89df38ff6997f9e5a33270a87475e4edaa4e3cbb697cb2a3c46657bd4b71d4ff8c296e8f486adb89df4540c1066592daff4e529a181dfa"));V[o("e294c181a31bcd148f95d8bf9736d4")](o("5fe315a086e086be4afa06a2")).insertAdjacentHTML(o("8b5ee818603274e7fd20"),o("6b395e1d8b49874741141c02d21bbd4f491e0a1a8d1d7217f740ec18604b2c48b919bf4e6c2c70f1e061a6c2327a2bfdef3eb0fd7a2455fbcd33d6bb51314ced8e6e9ded5b1254d6d00c98d05e0d4e8f895e989d7a5571f3e646f59375486c88fb59ff8e6ab312a6baf2f0f467eb35aba8fff8fd1bb553e090e097b313fb01f788f383aa0ec91f878181c7d4529b3ccfcbedd8dc4f95b3c2268635d3b588acc83b993fceaaf2a12721f43035d4acf07c3efe2d6df3b1d26106e7613395eade6e59f15e7bdb94d84c54971850de8dce0753895c4a9ac2f31770b1600686ddfb0a6ece7d1bfd30f47063216776f23ae96f693c787cef35d36246265573d528cc685b395e1d8d5585161c4a5054c74b950b085f585dbb153340f440f75b745d7d0ee252ea0d222d74ece669f7e774233cb8a969aecb3a6362b79112c7e3532c46f48e6fe8bb1f21149083418796125a098f895c989c0f557382e646f59375486c88fb59ff8e6ab261e7e1b4f0f514fb29abb5a9effe3cfc00a190b1d69242aa5bad9feec0ad0ad4058b9dc386cb1acd179fd6c09c8c1adca4c0319136b3d0d7fb972e8e3daafab2fa6b6aa13034a79bfc7e6fa57369ecf5925106e66365d7b9c73f1899082eeec5831216d6050385d89c180bc90f1e9ac2f11771c46004f7ddfa796ece0b5aa676f47116216507f23ae96f693c787cef35d36246265573d528cc685b395f6eca13b2061a525054c74b950b085f585dbb153340f440f75b745d7d0ee252ea0d223678e7e469f9ef643c3cb8a969aecb3a6060b7916480a4177d1baa8e6e9dbb1d50149083418796125a098f895c989c0f557382e646f593743b2dd3bd59ff8e2cec30b1a0a1e68272ba6ba8baffb8e32cf515a68afa82a54aee00bf9cb9dfee18d403cf91c586835adb1c9e8fc593890c9df79b66c320c4b59dbabf2e8c4cdbbdf0b43023e12736b2faa92f29fc383caff5932206e6153395e88c281bf91f2e8ad2810701d4101487cd8b1a1ede0d0b8cb3a55b35d17706a494a84938d97e7aea32e33527767835b27cad23356b2e63b3798f3746265773d45dcc6a2a395f6eca12c14741145054c70dcb5a5e1e4d4bcd002440b311b746220a395fb90ca84c3f6523b2b676a5a325783cb8ab69afbe3a6211b7916480a4177d1ad9d82cccf00a5201cbd74186e2125a0bddcf1e90dd5a0435dbad13b69b2e1c6c88f959ff8e2cec30b1a0a1e68272ba6bbdaffef0bd3ae415bb8df396fb0bf90bbf87b9dfec4a9334c7c0e7d0d431db098b9589ceab5a80c0d7318420c4b79dbbca2e8e3ddbbdf0b43023e12736b2faa92f29fc383caff5932206e6153395e88c281bf91f2e8ad2810701d4101487cd8b1a1ede0d0b8cb3a34737802a58e2caf9532fd97e7aea32e3213c742c2fb32deb787e3e6d2db371922146272173d52a9e2e19311e3b9b54980c14575804825c8d0515094f5cda034431ec44fc53347b2c48cd5ef80a7b2f7fa7a001b0b6566d2bbabe7eadab2d6004a0937197a6026a19bf996c88ac1f4503929656858305581c988b498f9e1a427197f144e084775d7af9ee4e8bda26f674f196a1e58772ba69efe9bcf8fc6fb553e2c6a6d5f355a84ce8dbb9dfee4a9241c7c194d0d4478d4bdade9ecdcb4d80a4c0339137c6a28bca9e62ca28ccbfa3fd6360b73035d3edab386cb86f23ecb5d5664aba42658ab4c0744ef91f2c8ad3f40703a5101487cd8b1a1ede0d0b8dc0e40073d17706e2caf91f79cc680cff25e37276366563e538fc786b296f7efa22d17751244064d73ddb6a4e2e5d7bdd10d45130570507990dcb5a18401c1d8c153236a606b701734a2409ee48f917612762afff25f7e37b6d2bb8be7fd8cc7e334af5d13bd0f8437d1ad98e6eebed5f015f8780219096764d0b9a9e5e8d8b0d406480f351f786624a799ff94ce88c7fa563f2f6b6e5e365b87cf8eba9effe7aa251f7d1a4c0e457bd5beaceaeddfb5d9054d0c381c6a504cd158f98d8d8dc4fd9e5d730f020c4b5cffd8826dd7d92eeaeb43021e12643b2f8d82f29fc383caff5932206e6153395e88c281bf91f2e8ad2810701d4101487cd8b1a1ede0d0b8dc0e40073d17706e2caf91f79cc680cff25e37276366563e44bfc781d7f3822ba73957750514066a63ddb6a4e2e5d7bdd10d45043014756d21ac94f491c585ccf153342a606b55335082c48bb19bf4e2a7221a7a174b0b4276d2ac9be7edbea762604a1e67195d7026a19bf996c88ac1f4503929656858305581c988b498f9e1a427197f144e084775d7b8aee4efd9b7db074f0e3a1e7f672bb1aaeb2faf8fc6ff30db390e7c0e523bd5be89ce89ff31cc505969aca92955ac410849e89cfdc5a83c4d733f520c4b79dbbca2e8e3ddbbdf0b43023e12736b2faa92f29fc383caff5932206e6153395e88c281bf91f2e8ad2810701d4101487cd8b1a1ede0d0b8dc0e40100873557a9ddfb0a28902c4dbc25e20676366731a37af4393e782927b177927f0f7507338b3ddb684e2f28168a4195111b4b0143c5188a050e42194bcc732440c547f517691d3a3fae0ccc5b3d7034b0a361a7b6327a29afa97cb8bc2f7513a2866695b315680ca89b799fae0a52018781549094074d0b9a9e5e8d8b0d406480f351f786624a799ff83fbedb23e532b6f6b6e5af33ad6a8efebeefb92be24cba90e78aa309fc4ce8d9b9de9b4a9030c7c194d0d4478d4bdade9ecdcb4d80a4c0339137c6a28ab9df398c28ccbfe5a33236f62523a5f8bc382be92f3ebae2913711e4002497fd9b2a0eee1d3b9ca394107597504ad28bcd0f08a9181efed5f30266c67513f5c8ec087bd97f0eea32e16761347074e72deb7a7e3e6d6bed20c46053315766c22ad97f592c486cdf05c221561633029e5edc593e094d2fda023157b104a044371d3b4aae0ebd5b3d7034b0a361a7b6327a29afa97cb8bc2f7513a2866695b315680ca89b799fae0a5372c6da129094070b55cbc81f989d7b557380b400b79b341d3dcea212aacd62ec38acb6a1e7f472bb1cefebcdf8fc6fb553e2c6a6d5f355a84ce8dbb9dfee4a9241c7c194d0d4478d4bdade9ecdcb4d80a4c0339137c6a28ab9df398c28ccbfe5a33236f62523a5f8bc3958bf6d6ff1f5932240b84465d4fd9a5e0eee1f69db929c515690414fd98fca07578d5f4bd3d5f30066c70075b28aba5539d97e7dea32973123653b63e44dfc7a1a296f7efa22d17751244064d73ddb6a4e2e5d7bdd10d45043014756d21ac94f491c585ccf153342a606b55335082c48bb19bf4e2a7221a7a174b0b4276d2ac9e829f1eb7c2404a0933dc1b3141c0ca8992bd9ec020344d0c00bc783055a1c99fe498def1a427197f144e084775d7b8aee4efd9b7db074f0e3a1e7f672ba69efe9bcf8fc6fb553e2c6a6d5f355a84ce8dbb9dfee4a9241c7c194d0d4478d4bdade9ecdcb4d80a4c0339137c6a28bca957bc86491e1e5a33265a57973f2edaa4e3efe2f3ebae2933710916173c1b9dc765ff91e5d8ad2f74d43905c49d9cd8a6f1edc7c0b8dc0e40073d17706e2caf91f79cc680cff25e37276366563e538fc786b296f7efa22d17751244064d73ddb6a4e2e5d7bdd10d45043014756d21ac94f486f585cb943641ee657f153347d2c4aca19bf4e2a7221a7a174b0b4276d2bbabe7eadab2d6004a0937197a6026a19bf996c88ac1f4503929656858305581c988b498eed1a4207d6aa02e085025d79fbee4efd9b7db074f0e3a1e7f672ba69efe9bcf8fc6fb553e2c6a6d5f355a84ce8dbb9dfee4a9241c7c194d0d4478d4bdade9fbe8a16c6a4c033d76997f4cbacc94f993fccf8b4e32f60a16172fea6fe7936a07460faf5932006e7603397998c281bf91f2e8ad2810701d4101487cd8b1a1ede0d0b8dc0e40073d17706e2caf91f79cc680cff25e37276366563e538fc786b296f7efa22d17751244065a46b993b05395f6e8c4c901100014622d21acb1d0f5e501d9a44751bed53f65b6b596b1fe719bf4c2a7354d6fc34b0b5546d2bcce83cfce03a6364b7931580a4177d1baa8e6e9dbb1d50149083418796125a098f895c989c0f557382e646f59375486c88fb59ff8e6ab261e7e1b4f0f467ad6bfafebeedeb6da044e1a0e780ba02fb1dffd9ac84ba4a9335c7c19682920585158f9ac8989c0bdff1d7318620c5c29db9bb2e8e3ddbbdf0b43023e12736b2faa92f29fc383caff5932206e6153395e88c281bf91f2e8ad2810701d4101487cd8b1a1ede0d0b8dc0e40073d17706e2caf91f79cc680cff25e37276371629a77cb02535296f7ea9718d2706315612c22adb6b4e2e5f7bdc65c04740675054b147891e1243134bcc752442c211b746220a395fb90ca84c3f6523b2b676a5a325783cb8ab69afbe3a6211b7916480a4177d1baa8e6e9dbb1d50149083418796125a098f895c989c0f557382e646f59375486c88fb59fefd20f025abbceaf0f467fe38a6aee9f8fd1bb553e0d1b1d7e442ab2ce8ceafaefb5de61e9287cd9a88529b3ccfcbedd8dc4f95b3c2268635d3b588acc83b993fceaaf2a12721f43034a7edab3a3efe2d2bade0842013f1172682ea993f19ec082c9fc5831216d6050385d89c180bc90f1e9ac2f11771c460058497b94e2293231bfd30a7233f713063e44cfc78693f787ced35d21750315615c22aaf351b6804318105c22756143443c518dc584b094f5eda023157b104a044371d3b4aae0ebd5b3d7034b0a361a7b6327a29afa97cb8bc2f7513a2866695b315680ca89b799fae0a52018781549094074d0b9a9e5e8d8b0c332ec2b71daad8624a79ccaa10b8db6ab315e7e1b6e1e365ba7cf99eb8f8fd1cb553948ce491bf08f64ce9aeb9dd9f4a9241c7c194d0d4478d4bdade9ecdcb4d80a4c0339137c6a28ab9df398c28ccbfe5a33236f62523a5f8bc382be92f3ebae2913711e4002497fd9b2a0eee1d3b9dd0941003c1071692dbfa454b985441d1d5f30235952943a2ddfa7e6ece7f0bea32e36760416063e44bfc781d632d3ab67f8f7750514066a63ddb6a4e2e5d7bdd10d45043014756d21ac94f491c585ccf153342a606b55335082c48bb19bf4e2a7221a7a174b0b4276d2bbabe7eadab2d6004a0937197a6026a19bf996c88ac1f4502e1dc14c1cf58061c988b1adcc24a1564818751f784715d7b88ee4f88886ab312e7e1c2bab623e136a4febf98eb6fd144e0d3b1d7e642aa59ffd9acc8ec5f8543d2d696c5c345985cd8cb89cfde5a82b1d7318420c4b79dbbca2e8e3ddbbdf0b43023e12736b2faa92f29fc383caff5932206e6153395e88c2968b35d6ac68fdf0701d44347db9ddc0f08a8181c8dc7e40071d17673f0ddfa796ece0b51bf74b82d3d216603f238986f693c787cef35d36246265573d528cc685b395f6eca12c14741145054c70dcb5a5e1e4d4bcd002440b311b746220a395fb90ca84c3f6523b2b676a5a325783cb8ab69afbe3a6211b79017cae6533146f48e6e9de84e0c44c79657f183055a018f895e989d7a4864818051f7f028083dd3a412e88d0aa56183f6b6e5e365b87cf8eba9effe7aa251f7d1a4c0e457bd5beaceaeddfb5d9054d0c381c7d6529a49cfc99cd8dc4f95b3c2268635d3b588acc83b993fceaaf2a12721f43034a7edab3a3eff5e61efa4c87d4df11726d1b9c56f4ef91e5a8ad2831b16d6070384ad800f08af181cf99fb1462a9b2b13f4bdec0a0ad97f0eea32e16761347074e72deb7a7e3e6d6bed20c46053315766c22ad97f592c486cdf05c35256164543c518dc584b094f5eda023157b104a044371d3b4aae0ebd5b3d7034b0a361a6c578386de3f422b8bc2f2640fed63180a5637d1ba89a6c88ac1d4502e782549095744d0becd41cc9c7501e64818651f5f7624a799ff94ce88c7fa563f2f6b6e5e365b87cf8eba9effe7aa251f7d1a4c0e457bd5beaceaeddfb5d9054d0c381c7d6529a49cfc99cd8dc4f95b3c2268746d3b5fefa9f67d96e8aaaf3d42723853034a7edab3a3efe2d2bade0842013f1172682ea993f19ec082c9fc5831216d6050385d89c180bc90f1e9ac2f11771c4600584ddfb7c2f953b1bfc45f47212216776f23ae96f693c787cef35d36246265573d528cc685b395f6eca12c14741145054c70dcb5a5e1e4d4bcd002440b311b63563517f5fb90cee126e3362a7a000b0b4253f6df8b63ff8fa6b394ff5d079c9ff493d0ca899799edb0a50708781549094074d0b9a9e5e8d8b0d406480f351f786624a799ff94ce88c7fa563f2f6b6e5e365b87cf8eba9effe7aa251f7d1a4c0e457bd5beaceaeddfb5ce3029292cad0d447cb158b88dfd8dd3b95b3c074c077dbf4ddfd8e62d26a8da2acf06076a83034a5edaa4f48a77460bae3e23711925666c6b68c296ef91d5f8ad2810701d4101487cd8b1a1ede0d0b8dc0e40073d17706e2caf91f79cc680cff25e37276366563e538fc786b296f7efa22d17751244064d73ddb6a4e2f2e3781508416561645128e589c4f4868585ccd56681ee611b744220a391be85fe80e7b6522c6b676a7a87d3b76e4be7eafab2d6048f68667e1b3156a5af1c232ebf743051490814186e31258788f895c989c0f557382e646f59375486c88fb59ff8e6ab261e7e1b4f0f467ad6bfafebeedeb6da044e0d3b1d7e642aa59ffd8dfc8ec29c41894d697b0c347e95cd8cb89cfde5a82b1d7318420c4b79dbbca2e8e3ddbbdf0b43023e12736b2faa92f29fc383caff5932206e6153395e88c2968b844688ad281415f85465592dbfd0f09de4a5acdddb25737802c58a08be4562292281bfd32f47116216507f23ae96f693c787cef35d36246265573d528cc685b395f6eca12c14741145054c70dcb5a5e1e4d4bcd002440b311b746220a395fb90ca84c3f6523b2b677d6f5672977afa97cfee27e2352b7901080a4152f5de8862fc8ea5b095fc5c049d9c7550d558f895e989d7a2724d3b151f6f5624a0fc9bb1da39b7cc574f292a1e7f672ba69efe9bcf8fc6fb553e2c6a6d5f355a84ce8dbb9dfee4a9241c7c194d0d4478d4bdade9ecdcb4d80a4c0339137c6a28ab9df398c28ccbfe5a2417aaa6573e3edab3a6fb56d6bbae3e53711e6437fcbbd8c2819f91f2ece83d24743901015f3cd8b1815864e41d1d5f30066c6755fa3ddfa7e6ece7f49aa61a3043a683063e53afc791e296d0ffa22d17751244064d73ddb6a4e2e5d7bdd10d45043014756d21ac94f491c585ccf153342a606b55335082c48bb19bf4e2a7352a7a102f1ef616d2acfbe7cdcab2d6004a0937197a6026a19bf996c88ac1f4503929656858305581c988b498f9e1a427197f144e084775d7b8aee4efd9b7cc335aba5a1e7f634e438b9a8a9ee8a7aa253a597e6c8a502ec1db385fb9ef303c91f87d696c7c344ed5cdaba89cfde5a82b1d7318420c4b79dbbca2e8e3ddbbdf0b43023e12736b2faa92f29fc383caff5932206e6153395e88c281bf91f2e8ad2810701d4101487cd8a69489c5c409ac2f1512f953645e2cb8d1f79ce3a4abd2da22727703c28b07bf4263a6e3822fa22d37750512d33867c9a320468486cdf539e171d405055b40dcb2c085c1c00da034457b375a044371d3b4aae0ebd5b3d7034b0a361a7b6327a29afa97cb8bc2f7513a2866695b315680ca89b799fae0a52018781549094074d0b9a9e5e8d8b0d406481801dabc6320c6c88fb08b4ce2aa56286f6b6e7a03ee43cefe9bef8fc6ff102b186e491f354dc4ce8d9b280ae5c8543d0d696c58f138d4aaede9ecf9d10c5ef9645dd6993a28abbdf38f928cecee5a33236f62523a5f8bc382be92f3ebae2913711e4002497fd9b2a0eee1d3b9dd0941003c1071692da890f09dc181c8fd5f27166c60352ae8eec090ed97d7fea32e16761347074e72deb7a7e3e6d6bed20c46053315766c22ad97f592c486cdf05c35256164543c518dc584b094f5eda034216ea42a044375b651bf84fa84d4b6523b0e430e7ab642d6dfef222fafd323c48fcc67197a4026b6cbf9b1d88ac1f4503929656858305581c988b498f9e1a427197f144e084775d7b8aee4efd9b7db074f0e3a1e7f672ba69efe9bcf8fc6fb553e2c6a6d5f355a84ce9a8ef9dbf018543d290c89495048d4aaede9ecf990bc2ac8166c0719fe9dffad767dd6f9be3e5a33036f75044f6abf26d69a36860fbf5925106e66365d7b9c73f1899082eeec5831216d6050385d89c180bc90f1e9ac2f11771c46004f7ddfb0a6ece7d1bfd30f47063216776f23ae96f693c787cef35d36246265573d528cc685b395e1d864e8117070147568351890f5e1f394bcd02671bef51a044351d3b4aea5fee1b7f3434b1d761a7b4392269edbe7edea06f3e46b791178be1423a59bf996e88ac1f09558780209094050a5eecd200d88b0d4264818651f5f7624a799ff94ce88c7fa563f2f6b6e5e365b87cf8eba9effe7aa251f7d1a4c0e457bd5beaceaeddfb5d9054d0c381c7d6529b3acfc9ea99870995b2b7268444d3b588acc83b993fceaaf2a12721f43034a7edab3a3efe2d2bade0842013f1172682ea993f19ec082c9fc5831216d6050384abdd434dc90f1edc9ca04130d17672e2cafb4d3f8e604daa74a52b3d63266bbb61b72f7e3e6f6bec55c46222315766c22ad97f592c486cdf05c35256164543c518dc584b094f5eda023157b104a044371d3b4aae0ebd5b3d7034b0a361a7b6327a29afa97cb8bc2f7512d1d024c4f8026a19f9c73ddeed0a5375878156c2d245454acfcf18d4c058036cdea216a0da624a7b9ff83980df3fa563f2b0ebb9a925ad6a89febe9bbd2ff10ff7d0d1c0e626bd5beaceaeddfb5d9054d0c381c7d6529a49cfc99cd8dc4f95b3c2268635d3b588acc83b993fceaaf2a12721f43034a7edab3a3efe2d2bade0842013f11655ceb6d96f5ff91f2ec684941177c10714c09ccb07568d4d4dd09cae4066c67713f5c8bf5b2789281bfc44f47061216775b16ee97a6b3c787ced35d362176d1533c22bad7f592e0e31834f834741165055b20dc92b5e1e4d4bcd002440b311b746220a395fb90ca84c3f6523b2b676a5a325783cb8ab69afbe3a6211b7916480a4177d1baa8e6feebb1d2655cbc54186e31258788f895c989c0f557382e646f59375486c88fb59ff8e6ab261e7e1b4f0f467ad6bfafebeedeb6da044e0d3b1d7e642aa59ffd8df89b7198543d290c89495048d4aaede9ecf990bc2ac8166c0719fe9dffad767d5639baaf2a32720813036d6edab3a3efe2d2bade0842013f1172682ea993f19ec082c9fc5831216d6050385d89c180bc90f1e9ac2f11771c46004f7ddfb0a6ece7d1bfd30f47063216605a478b8247e3e6d2db371922146272173d52a9e2e19311e3b9b54980c1457580a964a9c065e1e4f4bcc754f1be05fa044375e6614ff19bf4e6c2f7dede161a6c5327a5ff9eb2df3ab2c1504a2e27197a6026a19bf996c88ac1f4503929656858305581c988b498f9e1a427197f144e084775d7b8aee4efd9b7db074f0e3a1e7f672ba69efe9bcf8fc6fb552918afa95a313bd5bea82f8c8ed2b8543d084d087cb19c11a8198c391810d95b3c026863580e6d4fc9f2e8f49dbbdf2b43020a27336a7f8a92f29fe383cafa4d86246f1165282ea9b7944b0426c8ad2830700a11016f6cd8b1a1ede0d0b8dc0e40073d17706e2caf91f79cc680cff25e37276366563e538fc786b296f7efa22d17751244064d73dda194e2e2b3a8656d45136014527d21ac94f491c585ccf153342a606b55335082c48bb19bf4e2a7221a7a174b0b4276d2bbabe7eadab2d6004a0937197a6026b6afec22a88ac1f035dc3c0179095734d0b98cc18cf834c1535c6aa1aa2c56a1420d4ae59ff8c6ab314e7e3c5f0f467ad6bfafebeedeb6da044e0d3b1d7e642aa59ffd9acc8ec5f8543d2d696c5c345985cd8cb89cfde5a82b1d7318420c4b79dbbca2e8e3ddbbdf0b43150b76567f9edab3a78a07c7decf5925606e61761d3aa84694ea85977c187c20f5f855743dbcd8b181edf7860d693aa1771c42359a98cec087b8f2444aa25e20176361335a769b76f6849787e9e35d36246265573d528cc685b395f6eca12c14741145054c70dcb5a5e1e4d4bcd002440b311b746220a395fb90ca84c3f6523b2b676a5a325783cb8ab69aecd763e51e7d77197a64e3c0ca9ef799fac5814438fc001c1d25e065ed99602d4cd540328c8a651f784624a79ceb20ca89b7cc474f0e1f6b4a830ed7cf8e9a9effe32f90ff7d0d0c0e455ad4ce8d9b9dfee1cd41492d697b1c3459a48cfc99ed8dc4fdde08a268741d3b58abdca2e8e3fdbbdf0e7637fb17023a48cbc3829fe292bade2842166f1155782ea993f19ec082c9fc5831216d6050385d89c180bc90f1e9ac2f11771c46004f7ddfb0a6ece7d1bfd30f47063216776f23ae96f693c787cef35d36246272639926c992f1f395f6e8c4c901100014622d21acb191745190b8d1d7713ef41e053350a2c49ce0eb95b3c0334b0d52be0f2673d6dafa809b8bc2f7513a2866695b315680ca89b799fae0a52018781549094074d0b9a9e5e8d8b0d406480f351f786624a799ff94ce88c7fa563f2f6b494e365b87cf8eba9effe7aa251f7d1a4c0e457bd5beaceaeddfb5d9054d0c381c7d6529a49cfc99cd8dc4f95b3c2268635d3b4fbacc84dd86488aaf3d42723853034a7edab3a3efe2d2bade0842013f1172682ea993f19ec082c9fc5831216d6050385d89c180bc90f1e9ac2f11771c46005849ca04c6ece7d5da361a23176371163e53aae3e29212e2bab64883c0467483a8e768c7f592e486daa05c12356164543c518dc584b094f5eda023157b104a044371d3b4aae0ebd5b3d7034b0a361a7b6327a29afa97cb8bc2f7513a2866695b315680ca89b799fae0a5372d1c305db8305585ac6da1fce8b0c346480f103b1c46a0b2ccebf15a3d93cad3da3b1e1b9e365ba7cf99edebca03bff0cbb99f1c0e457fc0cbc8ae981aa4a92419198cd9b95529b3acfc9ea8e9e1edea4c1469135b7a28ab9df398c28ccbfe5a33236f62523a5f8bc382be92f3ebae2913711e4002497fd9b2a0eee1d3b9dd0941003c1071692da890f09dc181c8fd5f30266c7065aa69aac566ece7d5da361a23176371163e53aaa3d32783e26fa22d37750514066a63ddb6a4e2e5d7bdd10d45043014756d21ac94f491c585ccf153342a606b55335082c48bb19bf4e2a7221a7a174b0b4276d2bbabe7eadab2d6004a0937197a6026a19bf996c88ac1f4502e1da0ac5d3434d0b9acf15cdcb1a430597f146a6de221b22d8a404e88c7da563f2bae0f0f513ad6bf8acf8afe32df10fb68cf996bd0ef61affd9aec8ed2a8541a3d696c5c345985cd8cb89cfde5a82b1d7318420c4b79dbbca2e8e3ddbbdf0b43023e12736b2faa92f29fc383caff5932206e6153395e88c281bf91f2e8ad2810701d4101487cd8b1a1edf7e5dcf91af1771c4265aa68bba1f78b8680cfd73bd2b37612763e538ab252e62396bed22c46126315615c22aaf291b7d037bdc65d45232014756d21ac94f491c585ccf153342a606b55335082c48bb19bf4e2a7221a7a174b0b4276d2bbabe7eadab2d6004a0937197a6026a19bf996c88ac1f4502e19656f3ca560a5cc69e5ff88b0d406480f351f786624a799ff94ce88c7fa563f2f6b6e5e365b87cf8eba9effe7aa251f7d1a4c0e457bd5beaceaeddfb5d9054d0c381c7d6529a49cfc99cd8dc4f95b1b3268635d3b588acc83b993fceaaf2a12721f43034a7edab3a3efe2d2bade0842013f1172682ea993f19ec082c9fc5831216d7760385aedd434dc90e6b9ac0801771c46004f7ddfb0a6ece7d1bfd30f47063216776f23ae96f693c787cef35d36246265573d528cc685b395f6eca12c1474067110f810dcb5a18401c1d8c153236a606b701734a2409ee48f917612762afff2dfbe3327a2bafa809b8be5e7513a2866695b315680ca89b799fae0a52018781549094074d0b9a9e5e8d8b0d406480f351f786624a799ff94ce88c7fa563f2f6b6e5e365b87cf8eba9ee8d2ce000bcc6a6d5b50bf91aa9ceafa9fb5d9206968189868303dc10849cdfd0821ed2e49e268637d3b4fdc79368d7639fe2a5b43023b46769f1a9f7636fb5383cafb6c87e57b15733949b8c286daf5d7fc1c5826716d4740385d89c180bc90f1e9ac2f11771c46004f7ddfb0a6ece7d1bfd30f47063216776f23ae96f693c787cef35d36246265573d528cc685b395f6eca12c14740671907954d954f491c1e029e437257b070a044354b7e13ff5fe55b3d7234b1d661a5c7327a29afa97cb8bc2f7513a2866695b315680ca89b799fae0a52018781549094074d0b9a9e5e8d8b0d406480f351f786624a799ff94ce88c7fa563f2f6b6e5e365b87cf8eba9effe7aa322bb8de490a242aa59ae92ec88fb5ce454d0c1c79d8314c31b858389cfdc5a82b19b679136b2a28abb8d7fce208efdaff7637dad617ff1a1f57e7ebe383cadf5925706e4643395e88c281bf91f2e8ad2810701d4101487cd8b1a1ede0d0b8dc0e40073d17706e2caf91f79cc680cff25e37276366563e538fc786b296f7efa22d17751244064d73ddb6a4e2e5d7bdc638212124a5054c74b950b085f585dbb153340f058ec12624a2c48bb4ee20b612434b0a161a6c3327b5aafa90aeefe7e3e04a1e67195d7026a19bf996c88ac1f4503929656858305581c988b498f9e1a427197f144e084775d7b8aee4efd9b7db074f0e3a1e7f672ba69efe9bcf8fc6fb553e2c6a7a6f355de05bb89f981fb5ce554d0c381c7d6529a49cfc99cd8dc4f95b3c2268635d3b588acc83b993fceaaf2a12721f43034a7edab3a3efe2d2bade0842013f1172682ea993f19ec082c9fc5831216d4740385d89c180bc90f1e9ac2f11771c46004f7ddfb0a6ece7d1bfd30f47063216776f23ae96f693c787cef35d36246265573d45bcc682d780428ca13b44743655054c70dcb5a5e1e4d4bcd002440b311b746220a395fb90ca84c3f6523b2b676a5a325783cb8ab69afbe3a6211b7916480a5643c40ec8e6e9dfd430142d19657f183055a4edec941cecb4b0428dca407e8da2e162c9ff94ee88d0aa56183f6b6e5e365b87cf8eba9effe7aa251f7d1a4c0e457bd5beaceaeddfb5d9054d0c381c7d6529a49cfc99cd8dc4f95b3c2268635d3b588acc83b993fceaaf3d27163a57b23a5f8fa667abf6e2bac94842011a351648aabcc6e5fb54379dccddd435181590385da9c197ea4584fdb83a95d37d17706ab91ba4e6ecf0e1bfd46a232326a7075922de90b7e3e6d6bed20c46053315766c22ad97f592c486cdf05c35256164543c518dc584b094f5eda023157b104a044371d3b4aae0ebd5b3d7034b0a361a7b6327b5ae6fa2ef8e23a6211f1cf35d6e5026b6dbf996edee9461452ca96568783042d1c9afa498f9e1a427197f144e084775d7b8aee4efd9b7db074f0e3a1e7f672ba69efe9bcf8fc6fb553e2c6a6d5f355a84ce8dbb9dfee4a9241c7c194d0d4478d4bdade9ecdcb4d80a4c0339136b5eed6f98f7f993fcefbb9e16736f75123a5fafa627eaf766cf0a8842011f11726cebc8c296ff91f2cd894c30f5b97594fc49c9c1809c90e6b9ac0801771c46004f7ddfb0a6ece7d1bfd30f47063216776f23ae96f693c787cef35d36246265573d528cc685b395f6eca12c14741145054c70dcb5a5e1e4d4bcd002440b311b746220a395fb87ffe0e6e2e34b0a327f9e7643b3cb9df69afbc6c3c48f6c62680a4172a46efc53888ac1d4502e79657f683052e4adada02989d7a5571f3e646f59375486c88fb59ff8e6ab261e7e1b4f0f467ad6bfafebeedeb6da044e0d3b1d7e642aa59ffd9acc8ec5f8543d2d696c5c345985cd8cb89cfde5a83c2d731f26997e5dde5df38f928ccbfe5a33236f62523a5f8bc382be92f3ebae2913711e4002497fd9b2a0eee1d3b9dd0941003c1071692da890f09dc181c8fd5f30266c67513f5c8ec087bd97f0eea30906761347074e72deb7a7e3e6d6bed20c46053315766c22ad97f592c486cdf05c35256164543c518dc584b094f5eda023157b077a044415c600cae0fc85b3f0134b0a361a7b6327a29afa97cb8bc2f7513a2866695b315680ca89b799fae0a52018781549094074d0b9a9e5e8d8b0d4064818010acc0624a79d9a71dbecd6ab315e7e1b6a2b225a52aafaff8b4a038e34cbe8afa80f355aa4ce9aeb9dd9f4a9241c7c194d0d4478d4bdade9ecdcb4d80a4c0339137c6a28ab9df398c28ccbfe5a33236f62523a5f8bc382be92f3ebae2913711e4002497fd9b2a0eef6e6ddf81df0701d4564ad69bca0f08a8181c8d87b5406e872042b391a75d38d1215fad65bd6761367075925bb1252c296f7ebe72883e0a600c33943dda194e2e2b2d9f419f4740615056b60dcb5a5e1e4d4bcd002440b311b746220a395fb90ca84c3f6523b2b676a5a325783cb8ab69afbe3a6211b7916480a4177d1baa8e6e9dbb1d501490834186e55b095bcfd7498f9e5c1c20c1b051f6f2624a7bc9bc15b9dd27a563f0f6b790e367c97cf8eba9effe7aa251f7d1a4c0e457bd5beaceaeddfb5d9054d0c381c7d6529a49cfc99cd8dc4f95b3c2268635d3b588acc83b993fceaaf2a12721f43034a7edab3a3efe2d2bade0842160bd4b66d2ac8c281ba8546ecac5826616d60745df8dda415983450b8dc2e400739d2113f4bcec08798b394ce273b92d2465372fbb61ad233e7f787ced35d21746242473d528cc685b395f6eca12c14741145054c70dcb5a5e1e4d4bcd002440b311b746220a395fb90ca84c3f6523b2b676a5a325783cb8ab69afbe3a6211b7916480a4177d1baa8e6e9dbb1c2342d2d20a9094070b55cbc81f989d7b557380b018acd2220a6c88fb0ea2cb21e474f0e1a1e68372bb1aefe9caaebe3efe44e1a6b1d59742aa59ffd9acc8ec5f8543d2d696c5c345985cd8cb89cfde5a82b1d7318420c4b79dbbca2e8e3ddbbdf0b43023e12736b2faa92f29fc383caff5932206e76633959ec57b49b9413b9ca5941003c1071692da890f09dc181c8fd5f30266c67513f5c8ec087bd97f0eea32e16761347074e72deb7a7e3e6d6bed20c46053315766c22ad97f592c486cdf05c35256143443c518dc584b094f5eda023157b104a044371d3b4aae0ebd5b3d7034b0a361a7b6327a29afa97cb8bc2f7513a2866695b3141b0ca8ed38c4e80a53748783259094074d0b9a9e5e8d8b0d406480f351f786624a799ff94ce88c7fa563f2f6b6e5e365b87cf8eba9effe7aa251f7d1a4c0e524fc00acceaeddbd03c10291d697b1c3459a0e9e89818e8b0bc4e89c64c7289aeed6ecdf398e28cdcae5a14336f62523a5f8bc382be92f3ebae2913711e4002497fd9b2a0eee1d3b9dd0941003c1071692da890f09dc181c8fd5f30266c67513f5c8ec087bd97f0eea33923123653b63e538ba263a7f2e6bec54c46051631124ca6b8c2e1f7503399c0d9d0311411943c51adc593e64180f9b43691df711b746755d6a15f958a84c3f2c78f1e761a6c5327a5ff9eb2df3ab2c1504a2e27197a6026a19bf996c88ac1f4503929656858305581c988b498f9e1a427197f144e084775d7b8aee4efd9b7db074f0e3a1e7f672ba69efe9bcf8fc6fb552918ff587b30bbd5bea88f08cad1c8542a6d696c79500c10d899389cfdc5a83c4d733f520c4b79dbbca2e8e3ddbbdf0b43023e12736b2faa92f29fc383caff5932206e6153395e88c281bf91f2e8ad2810701d4101487cd8b1a1ede0d0b8dc0e40073d17706e2caf91f79cc680d8c69bf3226707074e77ca03a3e296e0afa22d3310b71063d8577917f592e486cdf49954740605054c55f8d1856440e1c9a536e00e758ec05731d3b48ae0fc85b3f0134b0a361a7b6327a29afa97cb8bc2f7513a2866695b315680ca89b799fae0a52018781549094074d0b9a9e5e8d8b0d406480f351f786624a799ff94ce88c7fa563f2f6b6e5e365b87cf998ffadaf31b553e280f884a514bd5a9eceaedfad03c915878181c7d605c70c849f89cfdc5a83c4d730f720c4c1cbf99b65993ebbaaf0d02721f43034a7edab3a3efe2d2bade0842013f1172682ea993f19ec082c9fc5831216d6050385d89c180bc90f1e9ac2f11771c46004f7ddfb0a6ece7d1bfc43f47015683424b264fc791e296f7efa22d17751244064d73ddb6a4e2e5d7bdd10d45043014756d21ac94f491c585ccf153342a606b55335082c48bb19bf4e2a7221a7a174b0b4276d2bbabe7eadab2f1104a0937197a6026a19bf996c88ac1f4503929656858305581c988b498f9e1a427197f144e084775d7b8aee4efd9b7db074f190a1e78033e12fefe8c9f8fe1eb553e2c6a6d5f355a84ce8dbb9dfee4a9241c7c194d0d4478d4bdade9ecdcb4d80a4c0339137c6a28ab9df398c28ccbfe5a24177ad6323a5f8fa667abf6e2bac94842011a351648aabcc6e5fb54379dccddd4b5d81101485cd8a6f1edc7c0b8dc0e40073d17706e2caf91f79cc680cff25e37276366563e538fc786b296f7efa22d17751244064d73ddb6a4e2e5d7bdd10d45043014756d21ac94f486f0e1e9e5e2440b357e917744b2c49cf19bf4c783463afe021e1f27e267ef9b620fcec7a3c04a0917196d36b375ebf996cdffb5c0f5dd7c70ddac8125b7a8f892acede5e1e64818651f5f7624a799ff94ce88c7fa563f2f6b6e5e365b87cf8eba9effe7aa251f7d1a4c0e457bd5beaceaeddfb5d9054d0c381c7d6529a49cfc99cd8dc4f95b3c22687469ae6daec962e8e3d9de3a1e27136f75123a5faea7d72b87e66bae2933710910026e6fd9b2a0eee1d3b9dd0941003c1071692da890f09dc181c8fd5f30266c67513f5c8ec087bd97f0eea32e16761347074e72deb7a7e3e6d6bed20c46053315766c22ad97f592c486cdf05c2211a4a0513830dcb5a0f550d0bda034557b106e61e625b6218e444a84c3d6523b2fa20b0b5536d2bb8ec38efa3733f56e0c62780a4157d1adf8e6cecbb1d50149083418796125a098f895c989c0f557382e646f59375486c88fb59ff8e6ab261e7e1b4f0f467ad6bfafebeedeb6da044e0d3b1d7e642aa59ffd9acc8ec5f8543d2d696c5c344eb0a9a9ac2d8dc4fd3ed9370c720c5c39dbbc878d0649aeab2b43023b67a73f9acbc3829e92e4bbae3e23711925666c6b68c296ef91d5f8ad2810701d4101487cd8b1a1ede0d0b8dc0e40073d17706e2caf91f79cc680cff25e37276366563e538fc786b296f7efa22d17751244064d73ddb6a4e2f2e7bdd669d0311411943c46ddc584b094f5eda023157b104a044371d3b4aae0ebd5b3d7034b0a361a7b6327a29afa97cb8bc2f7513a2866695b315680ca89b799fae0a52018781549094074d0b9a9e5cfc8b0d406480f351f786624a799ff94ce88c7fa563f2f6b6e5e365b87cf8eba9effe7aa251f7d1a4c0e457bd5beaceaeddfb5ce354d0b5c09c90529b3ccfcbedd8dc4f95b3c2268635d3b588acc83b993fceaaf2a12721f43034a7edab3a3efe2d2bade0842013f1172682ea993f19ec082dec84d85416d60545db89ca591edf790b8dc2b64631d93653b38ca0542c8f6052a66eb46761367075922de90b7e3e6d6bed20c46053315766c22ad97f592c486cdf05c35256164543c518dc584b094f5eda023157b104a044371d3b4aae0ebd5b3d7034b0a361a7b6327b5af9eb2df3ab2d6042fec227d6b3141c0ca8992bd9ec021354d6c70ddbc1444555cbd909d18b0d4264818620a0d72a5d7b8aa813a9db6ab312e7e1c2a6b636e67cf99ea9ed8f7aa251f7d1a4c0e457bd5beaceaeddfb5d9054d0c381c7d6529a49cfc99cd8dc4f95b3c2268635d3b588acc83b993fceaaf2a12721f43034a7edab3a3eff5e67f1a0d46606e6157fc3fd9a5e0eee1f69db929c515690414fd98fca074f895c43dc9fa55766c67713f5c8bd433b99680d8b25e37027612d32f23aeb6f693c3420af65953f0c700073d45ccc68597218338a52980156164743c518890b0f58181c91153236a606b753327b6d50ae0ebf5b3d7067e3ff31f0a3240c3cb8a97cb8bc2d7512d78664e4b315680ca89b799fae0a52018781549094074d0b9a9e5e8d8b0d406480f351f786624a799ff94ce88c7fa563f2f6b6e5e364cb7cf89de8b4b87aa324f7d3d5c0e457bd5beaceaeddfb5d9054d0c381c7d6529a49cfc99cd8dc4f95b3c2268635d3b588acc83b993fceaaf2a12721f43035d4acf07c3efe2d6df3b1d26106e7613395eade6e59f15e7bdb94d84c5497184ade86dc0f09de181dfad5f17366c67513f5c8ec087bd97f0eea32e16761347074e72deb7a7e3e6d6bed20c46053315766c22ad97f592c486cdf05c35256164543c518dc584b094f5eda034201f355eb5335086a16ea4ffe5b3c0434b0a133e1f43a3b7cfeef25f3e96c7d4df3c131c9b3156a0ca9ee06c2f142450392de11d9d25e1855c3de1e989d7c5573f4b004a4d8624b0c9ffb3de88c7fa563f2f6b6e5e365b87cf8eba9effe7aa251f7d1a4c0e457bd5beaceaeddfb5d9054d0c381c7d6529a49cfc99cd8dc4f95b3c2268635d3b588acc948d5638efab4b43023ad7123a48cbc3829bb697cb2a3c46657bd4b71d4f5d37544b15d3b9dd2941003904c56d2cd8a6e1ede0f5cde9ea65766c67713f5c8a45325d97e7aea32e3727d366063e53afc786b7f292baf35d21646265766c92adc7f592e486cdf4d901a56173143c51acc4f491e585ccf46601ef651a045431d3b48bb12bf4b2a7223a7a001b0b6566d2bbabe7eadab2d6004a0937197a6026a19bf996c88ac1f4503929656858305581c988b498f9e1a427197f144e084775d7b8aee4efd9b7db074f0e3a1e68538fd2dbaaef8f8fc6ff30db390e7c0e523bd5be898f084ba0ad25c9492c88083529a4bcfc8e9cdc04d85a4c1409137b0e8cdfd8a7ec828cdcae5a33236f62523a5f8bc382be92f3ebae2913711e4002497fd9b2a0eee1d3b9dd0941003c1071692da890f09dc181c8fd5f30266c67513f7b9ec087bd97f0eea32e16761347074e72deb7a7e3e6d6bed20c46053315766c22ad97f592c486cdf05c35256164543c518dc5938094f289b597757b071a046461d3b4aae0ebd5b3d7034b0a361a7b6327a29afa97cb8bc2f7513a2866695b315680ca89b799fae0a52018781549094074d0ae9df05cb8b0d4022dea207b693743c6c88f90bb9cc62f334b6a7edbba124a535a3b5e9f8fc6db55297c6a4a4f355a84ce8dbb9dfee4a9241c7c194d0d4478d4bdade9ecdcb4d80a4c0339137c6a28ab9df398c28ccbfe5a33236f62523a5f8bc382be92f3ebae2913710975666c6b68c281bbf417fdc93941177c10714c09ccb074889495ad69ea6416e982454a294ec0879d97e7b956fbe2f7636652bbe66b0272e61787d9c35d31410640438c22bac7f5b5d486cdf05c35256164543c518dc584b094f5eda023157b104a044371d3b4aae0ebd5b3d7034b0a361a7b6327a29afa97cb8bc2f7513a2866695b315680ca9e835c3ee5a141490830dd183042c1c98891bc9dc120324c6b71dabd1345524d3a506a2d122a563f0f6b6e5b22ef83cefe8c8f8fc6de200bc84f1c0e455bd5bea86f583fb5ce454d0c194dbd4428d4bd8de9ecd9d0bd5f1d730f020c4b588a7c83e993fccaaf2a16f72bc3035d3edab382afc383cadf5932255b54963c2fd9a5e0eee1f2e81d2840701d61015f2cd896b1ede0d0b8dc0e40073d17706e2caf91f79cc680cff25e37276366563e538fc786b296f7efa22d17751244064d73ddb6a4e2e5d7bdd10d45043014756d21bba050e580d1b8b153342e058e405741d3a3eae0ebf0d632975e7e169e3e77b3d7cafa97eb8bd5a600fa0967196d5026a6ff5de28ddeb5b4502e79656858305581c988b498f9e1a427197f144e084775d7b8aee4efd9b7db074f0e3a1e7f672ba69efe9bcf8fc6fb553e2c6a6d5f355a84ceaaab9dfee4a9241c7c194d0d4478d4bdade9ecdcb4d80a4c0339137c6a28ab9df398c28ccbfe5a33236f62523a5f8bc382be92e4dbae2e7764aa20025e2fd995b0eee1d3b9dd0941003c1071692da890f09dc181c8fd5f30266c67513f5c8ec087bd97f0eea32e16761347074e72deb7a7e3f1e2ab666c46053770937946bcc692f395f6c9854834f004101129e469e19564014009a153340a607c05337792c48bb19bf4e2a7221a7a174b0b4276d2bbabe7eadab2d6004a0937197a6026a19bf996c88ac1f4503929656858305581c988b498f9e1a427197f144e085040b39dba559ff8e2cec30b1a0a1e68272ba6bbdaffef0bd3ae415bb8df396fb0bf90bbf87b9dfec4a9334a49ccb91c345980a8381c9d8dd3c95b3b470c46498a28bccdf3bfd28ccbfe5a33236f62523a5f8bc382be92f3ebae2913711e4002497fd9b2a0eee1d3b9dd0941003c1071692da890f09dc181c8fd5f30266c67513f5c8ec090895234eba74f470636d3163e44cfc78697b293cf2638426177d0b3194358f3504781e379545d450410147568351890f5e1f394bcd027313ed53e053350a2c48bb51e4102a7355a7a176a5a8257d3cb8a969afbe6c2444e28667e1b3156a19b4996988ac1d450392de05cd83042c1c98895e989c0d557382b515a9c3225d7afeee4eff8f6ab263e7e0c1f0f616ad6bfafebeedeb6da044e0d3b1d7e642aa59ffd9acc8ec5f8543d2d696c5c345985cd8cb89cfde5a82b1d7318420c4b79dbbca2e8e3ddbbdf0b43023e12645f8bded7a6eb8383cafb3cd7350a70025e3fd9b2858b0447aca929c545288404392da8b0f08a90c0b8cb3e400059b3042b78dbd1f78b9680cff25e37276366563e538fc786b296f7efa22d17751244064d73ddb6a4e2e5d7bdd10d45043014756d21ac94f491c585ccf153342a604c45335082c48bb19bf4e2a7221a7a174b0b4276d2bbabe7eadab2d6004a0937197a6026a19bf996c88ac1f45039296568583042b1c98fd08d4d81a430497f335e084775d7b8aee4efd9b7db074f0e3a1e7f672ba69efe9bcf8fc6fb553e2c6a6d5f355a84ce8dbb9dfee4a9241c7c194d0d534cc109cde9ecd8d13d1f281268741d3b58afe8e79917e9bfbb4f86c74b7386afea6fc2f29fe383ddaf5915306e6153395e88c281bf91f2e8ad2810701d4101487cd8b1a1ede0d0b8dc0e40073d17706e2caf91f79cc680cff25e37276366563e538fc786b296f7efa23a22113750b73d5288a360a6f1e7bdc64d45041530114da5b9c1e0f4513098c1d6d13e151e953350a2c49ce75f91b626523b2e02defe3327b5aafa90aeefe7e3e04a1e67195d7026a19bf996c88ac1f4503929656858305581c988b498f9e1a427197f144e084775d7b8aee4efd9b7db074f0e3a1e7f672ba69efe9bcf8fc6fb553e2c6a7a6bf09e81caeceaeddb70b8542a6d696c79103da54999ed8898711d7f2df6ac0609bf4d1f39f2e8e3fdbbdf0e57b63a13035d3edab3869ad7369faf5932006e6157bceb68c296ff91f2c9fce831716d6070385d8ca5e5e9c181dfbd5f30073da7703e2cafb1f79cc205fb725e20676366777e72deb787e3e6d38be7c943746272173d52ad87f592e486daa05c12356164543c518dc584b094f5eda023157b104a044371d3b4aae0ebd5b3d7034b0a361a7b6327a29afa97cb8bc2f7513a2866695b315680ca89b799fae0a5372cdc610c5d3434d0b9ad800dcdd4c5572f6e646f7c52b112ddfb951bbdf23f534e7e1b6f0f512b97cf998a9ef8830e515a296e0c0e522bd5beaceaeddfb5d9054d0c381c7d6529a49cfc99cd8dc4f95b3c2268635d3b588acc83b993fceaaf2a12721f43034a7edab3a3efe2d2baf91842013f1172682ea993f19ec082c9fc5831216d6050385d89c180bc90f1e9ac2f11771c46004f7ddfb0a6ece7d1bfd30f47110216700b361af6f6849787e9e35d36246265573d528cc685b395f6eca12c14741145054c70dcb5a5e1e4d4bcd002440b311b746220a395fb90ca84c3f6522c1f72de3a325787ae6fa3feeab2c1404a09123d1e40a2b4ceedf35c3f95c4d5dcbdd019094054d0aef9e5cfc8b0d406480f351f786624a799ff94ce88c7fa563f2f6b6e5e365b87cf8eba9effe7aa251f7d1a4c0e457bd5beaceaeddfb5d9054d0c381c7d6529a49cfc8ef8e9e1edea4c033d76997f4cbacc94f993fccf8b4e32f60a16172fea6fe7936a07c6cfabc842011f11653e8a8dd7346b5577fdb89de4c16d7760385aeca5a5a82181dfad5f17366c67513f5c8ec087bd97f0eea32e16761347074e72deb7a7e3e6d6bed20c46053315766c22ad97f592c486cdf05c35256164543c518dc584b094f5eda034201e658e015731d3b4ae258a84d4b6523b0e430e7ab642d6dfef222fafd322244fcc731d7f3557d1ba88e6e9df74b4502e6965687d6521c14d9de00d8cd4b557380e647809377396c88fb59ff8e6ab261e7e1b4f0f467ad6bfafebeedeb6da044e0d3b1d7e642aa59ffd9acc8ec5f8543d2d696c5c345985cd8cb89cfde5a82b1d7318420c4b79dbbca2e8e3ddbbdf0b43150ab6572fea7f72f29fc6b6ff3a5c4371090002495e88c2819f91e5b9ec5826116d67349c79cd04555c90e6b9ac0801771c46004f7ddfb0a6ece7d1bfd30f47063216776f23ae96f693c787cef35d36246265573d528cc685b395f6eca12c14741145054c70dcb5a5e1e4d4bcd002440b311b746220a395fb87fe20e7b297eecb676a5f076246cefbe7fd9ab2d6210b7916680a5626a0ca9e8799fd8401045cbdc0a9095724d09eb9e5e8d8b0d406480f351f786624a799ff94ce88c7fa563f2f6b6e5e365b87cf8eba9effe7aa251f7d1a4c0e457bd5beaceaeddfb5d9054d0c381c7d6529b3acfc9ea8e8b13d5e286268740d3b588acc83b993fceaaf2a12721f43034a7edab3a3efe2d2bade0842262f1172682ea993f19ec082c9fc5831216d6050385d89c180bc90f1e9ac2f11771c46004f7ddfb0a6ece7d1bfd30f47063216605f23a9f2e327a787d9a35d11346265573d528cc685b395f6eca12c14741145054c70dcb5a5e1e4d4bcd002440b311b746220a395fb90ca84c3f6523b2b677d6e27e3e3cb8ab2ff1ef6c2304a1e77197a4502c5bb7d839d9ea460e56d19e08dcc8524d0b989e5ff88b0f316480f351f786624a799ff94ce88c7fa563f2f6b6e5e365b87cf8eba9effe7aa251f7d1a4c0e457bd5beaceaeddfb5d9054d0c381c7d6529a49cfc99cd8dd3cc3f1936d9137c6eedcacc94f993fccf8b4e32f60a16172fea6fe7936ae6867f3b4842011f11726c4b4c86958f91e5a8ad2835547961855d29ccd43558b4e03d391a3572fd17704e2cb8c1f78bf680c8973a1233d216603f238986f693c787cef35d36246265573d528cc685b395f6eca12c14741145054c70dcb5a5e1e4d4bcd002440b311b746220a395fb87fa84c492478f4b677d0a327093cb8ab69afbe3a6211b7916480a4177d1baa8e6e9dbb1d50149083418796125a098f895c989d7c5573f4a71db393743d6c8a8a59ff8e6ab261e7e1b4f0f467ad6bfafebeedeb6da044e0d3b1d69542aa2fbe82eac8ed2a8541a3d696c5c345985cd8cb89cfde5a83c2d731f2619ff19dbabf2e8c4cdbbc83b43055a07c70b2fbdc"));V[o("e0d64747a15943da8dd75e7995744a")](o("8b4ff90c6a3472eabe26fafe")).insertAdjacentHTML(o("29f8ce3ac2ec4a055fc6"),o("06b2fbda6e72ba383cafb9c5371090002495afdd6806af4571dd94d2574797101485cd8b1a58805c5dccd5f27666c67741b38ae4492e883957a167a26f256d3031f23ae9392f7e383abc78cc240a711273d52acc692e395d1fca12c14741145054c70dcb5a5e1f3e0a96462440b357e917744b2c49cf19bf4c7c3463e7e727fdab742777fefa25f3eb6d7513a08667e0b317190ca89b799fae0a52018781549094074d0b9a9e5e8d8b0d4064818010acc0624a79d9a71dbecd6ab315e7e1b6a2b225a52aafaff8b4a038e34ca48af192fb0ffd08beceaedffb5ce554d2b281c7d6529a49cfc99cd8dc4f95b3c2268635d3b588acc83b993fceaaf2a12721f43034a7edaa4979b9697af0be842013b74977d4ab8c296ff91f2cd894c30f40814152de86de5916815840cadda353209f6004f5ddfa7f6ecf0e1bfd46b33727703a28f23b9c6f6b4d787cef35d36246265573d528cc685b395f6eca12c14741145054c70dcb5a5e1e4d4bcd002441c047f517691d3b4ae850ec0d7c6522c6b676a7f1633a34f9fe38e9e7713752bfce31cbe30a3448f8ce3088ac1d4502e7e00cdad4430b4cdec8498eed1a4207c1b315ab93743d6c8a8a59ff8e6ab261e7e1b4f0f467ad6bfafebeedeb6da044e0d3b1d69542aa2fbe82eac8ed2a8541a3d696c5c345985cd8cb89cfde5a82b1d7318420c4b79dbbca2e8f4e9ae6b6b43023a77967e4bbbc395fe92f3ce8a4d33f50b15162ceb6ce6906aa447bd8cddd4b4090101485cd8a6f1edc7c0b8dc0e40073d17706e2caf91f79cc680cff25e37276366563e538fc786b296f7efa22d1775057013f913ddb6a08700c2d9c05c22656164704965b9c470849091a965e6601ae42ec13701d3b4afc48ff536d2162e7be37f0f2632177ede861ebe77a2704a0917196d3026868bf996c88ac1f4503929656858305581c988b498f9e1a427197f144e084775d7b8aee4efd9b7db074f0e3a1e7f672ba69efe8cfb9a729b553e280f884a514bd5a9eceaedfa91bd25c9196d0818f19cf0ac797c5938b5a82b3d730f120c6c69dbbca2e8e3ddbbdf0b43023e12736b2faa92f29fc383caff5932206e6153395e88c281bf91f2e8ad2810701d4101487cd8b1a1ede0d0b8dc0e40073d17675b488a8546ece7d5da361a23176371163e53aae3e29212e2bab64883c0467483a867a8c364e2e5f7bdc65a04740675054b15b890b15094e2bda004057b104a044371d3b4aae0ebd5b3d7034b0a361a7b6327a29afa97cb8bc2f7513a2866695b315680ca89b799fae0a52018781549094074d0b9a9e5e8d8b0c3332c2a21ae084771b25dbb80fe88d0ba563f0a4f0a7eb24ed2dbeb2e2babd72fc00b086f8c0e455bd5a9faadaa6fb5ce354d0b5d78587198d4aafde9cbccb4d80a4c0339137c6a28ab9df398c28ccbfe5a33236f62523a5f8bc382be92f3ebae2913711e4002497fd9b2a0eee1d3b9ca3941075805c5092dbfc0f0bad181c8fd5f30266c67513f5c8ec087bd97f0eea32e16761347074e72deb7a7e3e6d6bed20c46053315766c22ad97f592c486dac449814561645059b498a195e1f394bcd027606f119f613734c6014ec4fa012662e74a7a176b0b5526d29cbbe7eadab2d6004a0937197a6026a19bf996c88ac1f4503929656858305581c988b498f9e1a427197f144e084775d7b8aee4efd9b7db074f0e3a1e7f672bb1ab9abedb3eb6da002be82e796f354dc4ce8d9eb99ac42d3149687cd9b810485158b99c991cb4d82a4c146e76684e8d4e5df398c28ccc9e5a3325db17876f6acbc382be92f4cbae2e23711e40833949b8c286daf5d7fc1c5826716d4740385d89c180bc90f1e9ac2f11771c46004f7ddfb0a6ece7d1bfd30f47063216776f23ae96f693c787cef35d36246265573d528cc685b395f6eca12c147406706169646dc584b4f110f8c432441c711b744704c7b57f859f90a662e76f1be28f4e472243cb8a969aecb453f4eff8667e6b3151e5aeaca3288ad6a4501e39656858305581c988b498f9e1a427197f144e084775d7b8aee4efd9b7db074f0e3a1e7f672ba69efe9bcf8fc6fb553e2c6a7a6f355de0db39db9de9b4a9030c7c194d0d4478d4bdade9ecdcb4d80a4c0339137c6a28ab9df398c28ccbfe5a33236f62523a5f8bc382be92f3ebae291371097417fd1fd9b2a48b04c6ddcc5826616d60751c39a94595e984947d197b21f2f9d2b53e2cafb1f78b9680e8e25e37276366563e538fc786b296f7efa22d17751244064d73ddb6a4e2e5d7bdd10d45043014756d21ac94f491c585ccf153342a606b55335082c48bb19be3d7c3070ecb676a5e57b296af9be7fd9ab2d6256e6d179d6f3532c40f4cc2f80f24e0254ce96568783042d7f8f882f989c790331d3ad51f6f36248089ff94ce88c7fa563f2f6b6e5e365b87cf8eba9effe7aa251f7d1a4c0e457bd5beaceaeddfb5d9054d0c381c7d6529a49cfc99cd8dc4f95b3c2268635d3b4fbfa8a6ad228ccbfa3fd6360b73035d3edab386cb86f23ecb5d5664aba42658ab4c8784eb0082c9dc582677d814d5292da89595085530b8dc0e97f2a9a2c5bb295ec087bce680cff73ba2b3d2d7075942deb0c287c3c20fa23a47753554064d73ddb6a4e2e5d7bdd10d45043014756d21ac94f491c585ccf153342a606b55335082c48bb19bf4e2a7221a7a174b0b5546d2bccff25ebab2c1504a2e27197a6026a19bf996c88ac1f4503929656858305581c988b498f9e1a427197f144e084775d7b8aee4efd9b7db074f0e3a1e68533e12fefe9bcbea23ee312f7d0d0c0e455ef1da8c6ef88aa1bc91f858089998f19cd5cd8c989ceab5a80c0d7318420c4b79dbbca2e8e3ddbbdf0b43023e12736b2faa92f29fc383caff5932206e6153395e88c281bf91f2e8ad2810701d4101487cd8b1a1ede0d0b8cb3b242229a6004f79ba55b388f680d8b25e3702470276ba46dad3e32623a3df27c803006784064d53dda1f2c395e1dca12b71103451b43c46ddc5a3a094f5eda023157b104a044371d3b4aae0ebd5b3d7034b0a361a7b6327a29afa97cb8bc2f7513a2866695b315680ca89b799fae0a52018781549094074d0ae9c81cdcc01a4271d1af15b6c5624b0d9ff94ebaca3dad22a7a7f0bca830fb74a6baeeb8a27aa253f7d0d1abb31fec4ce8dbf48caa4a9241cabecd9b8f1add14cfc99ccfcb4d80c993779d20c5c49dbbbc78cc6c90aaf3d42723853034a7edab3a3efe2d2bade0842013f1172682ea993f19ec082c9fc5831216d6050385d89c180bc90f1e9ac2f11771c4600584ddfb7c2f953b1bfc45f47212216776f23ae96f693c787cef35d36246265573d528cc685b395f6eca12c14741145054c70dcb5a5e1e4d4bcd002440b311b63563517f5fb90cee126e3362a7a000b0b4253f6df8b63ff8fa6b394ff5d079c9ff493d0ca899799edb0a50708781549094074d0b9a9e5e8d8b0d406480f351f786624a799ff94ce88c7fa563f2f6b6e5e365b87cf8eba9effe7aa251f7d1a4c0e457bd5beaceaeddfb5ce3029292cad0d447cb158b88dfd8dd3b95b3c074c077dbf4ddfd8e62d26a8da2acf06076a83034a5edaa4f49e92e4dbae2e76153b54b33949d8c2a6af91f2e8ad2810701d4101487cd8b1a1ede0d0b8dc0e40073d17706e2caf91f79cc680cff25e37276366563e538fc786b296f7efa22d17751244064d73dda19186c0c30ca12c1011f450615d21bbd4f491e0a1a8d1d7217f740ec18604b2416ea5ee8122a7223a7a001c5ea76313cb8ab2dfaef763e04a1e07197d0542848f48e6fe8bb1f21149083418796125a098f895c989c0f557382e646f59375486c88fb59ff8e6ab261e7e1b4f0f467ad6bfafebeedeb6da044e1a0b1d79003f11fffd8d9c8ee2e8543d2d696c5c345985cd8cb89cfde5a82b1d7318420c4b79dbbca2e8e3ddbbdf0b43023e12736b2faa92f29fc383caff5925147bd533395e8ca764aaf5e3b9ca49410019341549a9bdc5e4f855349ccddad5b2d916004f5ddfa7f6ecc0c1bfd30f47063216776f23ae96f693c787cef35d36246265573d528cc685b395f6eca12c14741145054c70dcb5a5e1e4d4bcd002440b311b746220a395fb87ffe0e6e2e34b0a327f9e7643b3cb9df69afbc682453bfd031d1e24e364ee98630ccfc4a0c1490814186e36d4d0ae99e5efbdd4f112f97f031e086065d7b8aee4efd9b7db074f0e3a1e7f672ba69efe9bcf8fc6fb553e2c6a6d5f355a84ce8dbb9dfee4a9241c7c194d0d4478d4bdade9ecdcb4d80a4c0339136b5f4c8e8942e8e3d9de3a1e27136f75123a5faee7e69e16e6beba4c87c44a7087ac6bacc760eee1f3b9ca5e3474081410385d8c3455481181dfcd5f37430842458e2cb8c1f7bbd680cff25e37276366563e538fc786b296f7efa22d17751244064d73ddb6a4e2e5d7bdd10d45043014756d21ac94f491c585dbc153334e75df353347d2c4aca19bf4e2a7221a7a174b0b4276d2bbabe7eadab2d6004a0937197a6026a19bf996c88ac1f4503929656858305581c988b498eed5b193797f144a6da260b3a9ff838e88c7df725b0fef7b0b223e137ada8a1b1a731f544e0d1b1d69342a828ffd9acc8ec5f8543d2d696c5c345985cd8cb89cfde5a82b1d7318420c4b79dbbca2e8e3ddbbdf0b43023e12736b2faa92f29fc383caff5932206e61533949bda6a4ab2082c9f83dd4340971015f3cd8b184c984f03cc95b5462a9a2245ea94a8582e90680cfd25e20710216605f23a9f392b6d336bec55c46222315766c22ad97f592c486cdf05c35256164543c518dc584b094f5eda023157b104a044371d3b4aae0ebd5b3d7034b0a361a7b6327a29afa97cb8bc2f7512d1d024c4f8026a19f9c73ddeed0a5375878156c2d245454acfcf18d4c058036cdea216a0da624a7b9ff83983db37f474f0e3e6b4a53cef2ba5aee2b9eb6cd344e0a5e795b709bd5a9fceacacfb5d9054d0c381c7d6529a49cfc99cd8dc4f95b3c2268635d3b588acc83b993fceaaf2a12721f43034a7edab3a3efe2d2bac93842065b04c6082ebec3f1b9d082c9fc5831216d6050385d89c180bc90f1e9ac2f11771c46004f7ddfb0a6ece7d1bfd30f47063216776f23ae96f693c787d9c748824462655358b799a294e2f297bdd12861601090603835c90041c5f5002965e6457b106a045421d393bae0ebd5b3d7034b0a361a7b6327a29afa97cb8bc2f7513a2866695b315680ca89b799fae0a52018781549094074d0b9a9e5e8d8b0d406480f351f786624b0ac9bb1da39b7db032aeb2f7a6e364cc7cf8e9fba9bc72e304a697fd8bb114b505bb89f981fb5d9254d1b6eed0d5348d4bac88dc9c805a83c4d733f520c4b79dbbca2e8e3ddbbdf0b43023e12736b2faa92f29fc383caff5932206e6153395e88c281bf91f2e8ad2810701d4101487cd8b1a1ede0d0b8dc0e40100873557a9ddfb0a28902c4dbc25e20676366731a37af4393e782927b177927f0f7507338b3ddb684e2f281f9a549e474114060d9e46dc584b4f150f91576457b077a044414b791be519be3b2a7050a7a174b0b4276d2bbabe7eadab2d6004a0937197a6026a19bf996c88ac1f4503929656858305581c988b498f9e1a427197f037e084011c20ccee4f889b7fc174f0e3a1e7f672ba69efe9bcf8fc6fb553e2c6a6d5f355a84ce8dbb9dfee4a9241c7c194d0d4478d4bdade9ecdcb4d80a4c140d06c80a28ab99967dd7e8daaf3d52721f66272e5e5ea6f6fb87460f8a38c7e4aba403395ea8c296ef91d5f8ad2810701d4101487cd8b1a1ede0d0b8dc0e40073d17706e2caf91f79cc680cff25e37276366563e538fc786b296f7efa22d17751244064d73ddb6a4e2f2e2d9f419f474114160a965b8a4f4868585ccd477500ae47e0027351671df811e11f6d257da7a176b0b552063cb9d869afc86c2040fc8667e0b317190ca89b799fae0a52018781549094074d0b9a9e5e8d8b0d406480f351f786624a799ff94ce88c7fa563f2f6b6e5e365b87cf8eba9effe7aa251f7d1a4c0e524eb19bb85b9dfee0ccc10918081c6a2529a4b9d8fded09d1ac4f59b6dd376dbebd9eb9f67993fccaaf3d4567ca3726af2edab3a75a57e65f1b1cc7750f1165582eaef695bbd433b9ca5941272c1071692da890f09dc181c8fd5f30266c67513f5c8ec087bd97f0eea32e16761347074e72deb7a7e3e6d6bed20c46053315615c22aaf3e026a486daa05c12356164543c518dc584b094f5eda023157b104a044371d3b4aae0ebd5b3d7034b0a361a7b6327a29afa97cb8bc2f7513a28664e4b315680ca89b799fae0a52018781549094074d0b9a9e5e8d8b0d406480f351f786624a799ff94ce88c7fa563f2f6b6e5e364cb3da3ada9effe3cfc00a190b1d69242aa5bad9feec0ad0ad4058b9dc386cb1bc1178fde9ecfcb4cf5a4c2429137c6a28ab9df398c28ccbfe5a33236f62523a5f8bc382be92f3ebae2913711e4002497fd9b2a0eee1d3b9dd0941003c1071692da890f09dc181c8fd5f27130842458e2caf959279d3e4dea33956761362232a525aa2f2f783420b863cc3e0276003ac22adb7f58593e368646854741145054b50dcb5a3643081d9a153231a606c3057759675fb879a84e4e6523b2b676a5a325783cb8ab69afbe3a6211b7916480a4177d1baa8e6e9dbb1d50149083418796125a098f895c989c0f557382e646f59375486c88fb59fefd3cf030acf6b6e5a53be92ab9febf99eb6da216a691b996b313ec00b48cefc0b20ec2148ed696c7c344ed2ca3de9ecdaa0dd1e6d7318420c4b19dbbca4fce628eaaf3d22721826676f6a6bc395ee92d4fbae2913711e4002497fd9b2a0eee1d3b9dd0941003c1071692da890f09dc181c8fd5f30266c67513f5c8ec087bd97f0eea3392676142312fa12dea0f7e3c1c6bed20c46053315766c22ad97f592c486cdf05c35256164543c518dc584b094f5eda023157b077a044415c600cae0fc85b3f0134b0a361a7b6327a29afa97cb8bc2f7513a2866695b315680ca9e8799fd84b09478780219096764d0b9a9e5e8d8b0d406480f351f6f5624a0fdea20ae88d0aa56183f6b796e365ce3da3ada9ee8b"));V[o("56966d8c28124f08328a43850d01")](o("05d8f0ccfbd778d9798ae6aef671")).addEventListener(o("24160a9e4b92"),()=>{V[o("c8fe6f6f89716bf2b5cf6661ad6c72")](o("f0ac532a9a685ba296bc173d952849")).style.display=o("c15c2c9a20");V[o("a96b5eb95f67fc85dd4750905a54")](o("b90f09df4a5acdddb25737802c58a08b")).style.display=o("a2d108dac55c")});V[o("34f403624a7029ee50e81d7b2f63")](o("bd804c182ec0b717b0c234")).addEventListener(o("a6540450c9d0"),()=>{V[o("da8cf9999b03c51c879dd0b79f3ecc")](o("6cd0cf561e6cdfa61ab09b31112ccd")).style.display=o("a5f848364c");V[o("a0009796d68cb512c41c898fc38f")](o("a054d0c0d381945adb118589d89e9b0bc3")).style.display=o("30631eec57ee")});$(o("20df1507565815925c8d03154b0e4392556f07ae56e4156c")).click(()=>{V[o("56807d9d1f0779003b8154b31b3a40")](o("49d7aa15a39322e53fb7fef2bca320")).style.display=o("92c138caf54c");$(o("302f05f746a805624c7d13e55bfe53792974f5")).css(o("c633e12abab7eda4"),o("386715e559"))});V[o("d284f191930bfd04bf85e8afa726c4")](o("9e4c0f41dbda00")).addEventListener(o("ac9e8216d3ea"),()=>{S5[o("8cbea236e003bd82e681")][o("882eb8b2f8b89a3ae815")](null)});var y;var x;var S;var E=V[o("63730022a2748c370e72191c966995")](o("caacf8afe32cf515a68afa82a54aea0cb48ff99fbb1d"));E.value=0;E.addEventListener(o("e0d24a528a5243"),function(){j["1a"]=parseInt(this.value);Re();Xo.location.reload()});(E=V[o("a81e8f8fe9918b12d5ef8641cd4c92")](o("06e0bceb2768a9697af6bec6610eae4a79caa8"))).value=.25;E.nextElementSibling.value=E.value;E.addEventListener(o("8fa3f9637da370"),function(){this.nextElementSibling.value=this.value;j["1i"]=parseFloat(this.value);Re()});E.addEventListener(o("b781d75a4e98"),function(){this.nextElementSibling.value=this.value});(E=V[o("73431012b2449c071e42092c867965")](o("288e1e09010e0b8b44681ce447a81b6e567315e451"))).value=.25;E.nextElementSibling.value=E.value;E.addEventListener(o("e614c018849cc9"),function(){this.nextElementSibling.value=this.value;j["1x"]=parseFloat(this.value);Re()});E.addEventListener(o("9fb9cf6256a0"),function(){this.nextElementSibling.value=this.value});(E=V[o("0591e2cccc966ed16890fb82e84b77")](o("a7afdd6806af486adb89df4540c95349d88cca434189"))).value=1;E.nextElementSibling.value=E.value;E.addEventListener(o("6fc319839dc390"),function(){this.nextElementSibling.value=this.value;j["1p"]=parseFloat(this.value);Re()});E.addEventListener(o("7b45131e8a44"),function(){this.nextElementSibling.value=this.value});(E=V[o("273f4ceeee30c8f34a0e45e0ca2dd1")](o("c78fbd48668f284abb69bf2520293c32b265aa232169"))).value=1;E.nextElementSibling.value=E.value;E.addEventListener(o("22508c5448d08d"),function(){this.nextElementSibling.value=this.value;j["1q"]=parseFloat(this.value);Re()});E.addEventListener(o("dda731e014a6"),function(){this.nextElementSibling.value=this.value});var R=V[o("72e451f1336b5d641fe548cf074624")](o("2a4c984f03cc95b5462a9a2245ea8cac5b269f225aaa"));R.value=0;R.addEventListener(o("6058ccc311c1"),function(){var z;if(R.value!==""){if(R.validity.valid){z=parseInt(R.value);if(isNaN(z)){R.value=0;j["1y"]=0;Re()}else if(z<0||65535<z){R.value=0}else{j["1y"]=z;Re()}}else{R.value=0}}});(E=V[o("52047111138b7d843f05682f27a644")](o("f274c077dbf4ddfd8e62d26a8da2aef86178b77c7cf2"))).value=24;E.nextElementSibling.value=E.value;E.addEventListener(o("1ecc88d04c5481"),function(){this.nextElementSibling.value=this.value;j["1w"]=parseFloat(this.value);Re()});E.addEventListener(o("b46c98f7cdfd"),function(){this.nextElementSibling.value=this.value});E=V[o("ff576406c658e01b62567d38f275e9")](o("1c1a2a9d0d90121f451b"));for(y of Object.keys(Oa)){var F=V[o("13a76763f6bcfc4f77a9706bf1a4")](o("916d63b07c69f9"));F[o("c14422983053")]=y;F[o("9330f0fe630b76e4ef29f3fa")]=y;E.appendChild(F)}
E.value=0;E.addEventListener(o("0bdf659fe1a7f4"),function(){j["1b"]=this.value;Re()});y=V[o("62144101239b4d940f15583f17b654")](o("20861601091d1584478c041f"));for(x of Object.keys(Ct)){E=V[o("1f3353f7c220c0d34b3d44ffc528")](o("72ec44f11f6856"));E[o("b6311925cfae")]=x;E[o("ec494bc784825d2d802058b3")]=x;y.appendChild(E);Ct[x]=new Audio(G.a+Ct[x])}
y.value=0;y.addEventListener(o("ce3cf800bc84f1"),function(){var z=Ct[0];if(z){z.pause()}
j["1c"]=this.value;if(z=Ct[0]){z.play()}
Re()});(x=V[o("ec5a4bcbb5ad572e912b428581805e")](o("422470276bbb6db82e3e7e2921af"))).value=10;x.addEventListener(o("f0a25a229a2253"),function(){j["1d"]=parseInt(this.value);Re()});x=V[o("29fdce28e8f24a0d54ccc726ccef53")](o("4b8b394ce263a430206b27"));for(S of Object.keys(No)){y=V[o("76644a6c1bff59c8126a2d74ece7")](o("5846eadf35c2f0"));y[o("719492c88083")]=S;y[o("f0b5573b800659a98cac543f")]=S;x.appendChild(y)}
x.value=0;if(0 .toString()!=o("1455")){V[o("56966d8c28124f08328a43850d01")](o("ac9f811bc9"))[o("16d4acd0764e")][o("0111f646f61975")]=o("b79dcb4613cb")+No[0]+o("0234ed3034d4edab3a7ab96961")}
x.addEventListener(o("ddad37f10fb586"),function(){j["1o"]=this.value;if(this.value!=o("34b5")){V[o("7e7e3574f0ea17f0ea722b6de5e9")](o("7fd2ee967a"))[o("387a0ef250e8")][o("289a1f095f121c")]=o("85037554215d")+No[this.value]+o("ae185964808051f786260d3dd5")}else{V[o("dc5c6bca92c87156885045c387cb")](o("23b64a72de"))[o("0260b06c6af2")][o("5b6f283cac7f93")]=""}
Re()});V[o("d5a132fc1ca6bee1b8a02bd2189b87")](o("9e5c0b58ccf50dd9c3")).addEventListener(o("1ecc88d04c5481"),function(){var z;var H=this.files[0];if(H){(z=new FileReader()).onload=K=>{j["1e"]=K.target.result;Re();location.reload()};z.readAsText(H)}});V[o("13a37072d2a4fc677ea2694ce699c5")](o("32349124448191a55f")).addEventListener(o("d280fc84b800fd"),function(){var z;var H=this.files[0];if(H){(z=new FileReader()).onload=K=>{j["1j"]=K.target.result;Re();location.reload()};z.readAsText(H)}});V[o("2d79ca94f44e56895048c3aac0635f")](o("76655f4f13e759")).addEventListener(o("aad804dcc05815"),function(){var z;var H=this.files[0];if(H){(z=new FileReader()).onload=K=>{j["1t"]=K.target.result;Re();location.reload()};z.readAsDataURL(H)}});V[o("3f1724c68618a0db22163df8b235a9")](o("8664276ce4ff0af4e27a")).addEventListener(o("46b460b8243c69"),function(){var z;var H=this.files[0];if(H){(z=new FileReader()).onload=K=>{j["1u"]=K.target.result;Re();location.reload()};z.readAsDataURL(H)}});V[o("73431012b2449c071e42092c867965")](o("d610ec1bf786fd9dbd00cc1e90")).value=o("34a04434")+0 .toString(16);V[o("df7784262678003b82769d18125509")](o("4541b38ae4572a8c2e51a36fa3")).addEventListener(o("4cfee67e3e46f7"),function(){j["1g"]=parseInt(this.value.substring(1),16);G.Lh();Re()});V[o("9c8abb1be51d879ec19b9235d1308e")](o("bc7a8afdedff6b70af7669fba7eb")).value=o("bb498f9d")+0 .toString(16);V[o("baac19b9fb23e53ca7bdf097bf1eec")](o("ec4a5acdddaf5b209f2659ab97bb")).addEventListener(o("1c0e368e4e9607"),function(){j["1v"]=parseInt(this.value.substring(1),16);G.Lh();Re()});V[o("7aec59f93b63257ce7fd30d7ff5e2c")](o("86603c6ba7e92df3ea703d52f9ca3ad6")).checked=!0;V[o("fbcb989a3adce49f66da71b4fef1ed")](o("e0c65641c94747d98cd64748875440cc")).addEventListener(o("3eac68b02c3461"),function(){j["1h"]=this.checked;Re()});V[o("5b6b383a9a7c843f067a11149e518d")](o("73530114da588b051d4d13078b49671bef40e004")).checked=!0;V[o("0274a16143fbadf46f75b85f77d6b4")](o("9e5814438fc316dac0560650dec20ad4c24b1533")).addEventListener(o("44f6ee76267eef"),function(){j["1k"]=this.checked;Re()});V[o("d44273d39dc57f46b9436aed99f846")](o("c46272e5e5f5656cbe787d")).checked=!1;V[o("39cdde18f8c25a1d24dcb736bcff23")](o("64c2d2454555c5cc1ed8dd")).addEventListener(o("b307ddc7590f5c"),function(){j["1n"]=this.checked;Re();Xo.location.reload()});V[o("f42253b3bda55f2699234a8d799826")](o("d294e097fb0feb05b398e8")).checked=!0;Ja.visible=!0;V[o("7caadb3bc53da7bee1bbb215f110ae")](o("7e783463affb37f9ef643c")).addEventListener(o("63770d37897f8c"),function(){j["1l"]=this.checked;Ja.visible=!0;Re()});V[o("9fb7c46666b8407bc2b6dd58529549")](o("46a07cab6728643239be72883e0a600c3394")).checked=!0;V[o("b5c1521c7cc6de01d8c04b3238fba7")](o("e125176648258f779e3b097501379b499411")).addEventListener(o("10823a027a0233"),function(){j["1s"]=this.checked;Re()});V[o("0274a16143fbadf46f75b85f77d6b4")](o("090dff4ea0167c3274e1fc36f1ea7e3b6d")).checked=!0;ei.visible=!0;V[o("819566c0409ae2d5ec947ffe74b7eb")](o("7cbaca3dad39b1a1e1b6a925ec35a3a8f8")).addEventListener(o("2bbf457fc187d4"),function(){j["1m"]=this.checked;ei.visible=!0;Re()});V[o("3224913173ab9da45f25880f478664")](o("ebeb99ac42d3149687cd9b810485108e")).textContent=o("d10b17216607f23ae9")+null;V[o("f6e0ddfdbf67d9609be1b4d37b5aa0")](o("ec4a5acdddb25737802c58a08be4583e95215a")).textContent=o("36858da0562fd97e7fea32e1")+o("eac99ccfdb5280b3df338c20c4b789b0df38fd3fc9aaf3d03323")}
var k;var N=g[o("6e91596219ed55e813")];if(k=8<=b5(N).length&&b5(N)[b5(N).length-7]===65535?b5(N).slice(-6):null){g[o("3d40d693aa5c229920")]=N.slice(0,-7);g[o("ec4e45d69e8856")]=k[0];g[o("718a92d0bc82")]=k[1];g[o("9deb663552dbc7")]=k[2];g[o("7ca0d13af4398bb7")]=k[3];g[o("d3e3b9a724fb3cb992e8")]=k[4]}
N=this.v?this.M[o("cdcb3ce5238bb7")]:v;this.v=!0;this.Qc=c+o("e2ac")+u;this.M=g;b.I.vb(b.I.Fg,c);if(N!==this.M[o("20841116563c02")]){this.pi()}else{this.lg()}};he.prototype.vl=function(){var c=this.v?this.M[o("4ce8fd7a2268f6")]:v;this.v=!1;this.Qc=m;this.M={};b.I.vb(b.I.Fg,"");if(c!==this.M[o("9ade2fc8ec6604")]){this.pi()}else{this.lg()}};he.prototype.Dm=function(){b.I.Zb(b.I.Fg);var c=this;var u=1;(function g(){if(!he.tf.Ol()&&u++<5){O.fa(g,1e3)}else{he.tf.hm(function(){},function(y){c.Nk(T,y.ti)})}})()};he.prototype.pi=function(){for(var c=0;c<this.$h.length;c++){this.$h[c]()}
this.lg()};he.prototype.lg=function(){for(var c=0;c<this.bi.length;c++){this.bi[c]()}};he.prototype.pl=function(){he.tf.nm()};b.np=he;Hi.prototype.$c=function(){return this.ka};Hi.prototype.ld=function(c){this.Ia=c;this.ka.visible=c};Hi.prototype.la=function(){this.xc=this.wc[o("e5a10efc1db2")]();this.yc=this.wc[o("27304cf3cc34d9")]();var c=this.yc/30;for(var u=0;u<this.ud.length;u++){this.ud[u].zi(c)}};Hi.prototype.Ba=function(){if(this.Ia){for(var c=0;c<this.ud.length;c++){this.ud[c].Ba(this.ja)}}};b.Gp=Hi;nt.prototype.oa=async function(c){var u=this;this.wc=c;this.fd=c.get()[0];c={[o("1ecc81df545297")]:u.fd,[o("7b4e1c0d9457731df65ae1376b48611b")]:0,[o("ddbe2df507b791f18bb502")]:o("97bffc687ca0")};this.ja=await Uo(c);this.Ia=!1;this.hb=new b.wi(new Float32Array(3*w));this.yc=this.xc=1;this.Id=this.Hd=this.Gd=this.Dd=this.Xc=P.W;this.la();A.A.zg(function(){u.hb.Zg()})};w=Math.min(100,b.Ug.Hn);P={W:o("b677143d8a"),Bc:o("3273983107"),Cc:o("4263682174")};nt.prototype.ld=function(c){this.Ia=c};nt.prototype.la=function(){var c=O.e();this.xc=this.wc[o("b1555a80414e")]();this.yc=this.wc[o("c790ac532c9439")]();this.ja.resize(this.xc,this.yc,c);this.fd.width=c*this.xc;this.fd.height=c*this.yc;c=this.yc/4;this.hb.zi(c);c=O.Ad(2*Math.floor(this.xc/c)-5,1,w);this.hb.xi(c)};nt.prototype.Va=function(){if(this.Ia){var c=O.Lb()/200;var u=Math.sin(c);this.hb.gl(this.Bn(this.Xc,u),this.Fn(this.Xc,u));this.hb.Ln(this.$f(this.Dd,u),this.$f(this.Gd,u),this.$f(this.Hd,u),this.$f(this.Id,u));var u=this.hb.pd;var g=this.hb.X;var y=this.hb.Vc;var x=this.xc-.5*(this.xc-.5*u*(g-1));var S=.5*this.yc;var E=0;var R=0;for(var F=-1;F<g;F++){var k=F;var N=Math.cos(+k/12*3.141592653589793-c)*(1-Math.pow(16,-1*k/12));if(0<=F){y[3*F]=x-.5*u*k;y[3*F+1]=S+.5*u*N;y[3*F+2]=Math.atan2(R-N,k-E)}
E=k;R=N}
this.hb.Ba();this.hb.Vn(this.ja)}};nt.prototype.vc=function(c){this.hb.vc(c)};nt.prototype.ao=function(c){this.Xc=c?P.Cc:P.Bc;this.Id=this.Hd=this.Gd=this.Dd=P.W};nt.prototype.lo=function(c){this.Xc=P.W;this.Dd=c?P.Cc:P.Bc;this.Id=this.Hd=this.Gd=P.W};nt.prototype.po=function(c){this.Dd=this.Xc=P.W;this.Gd=c?P.Cc:P.Bc;this.Id=this.Hd=P.W};nt.prototype.so=function(c){this.Gd=this.Dd=this.Xc=P.W;this.Hd=c?P.Cc:P.Bc;this.Id=P.W};nt.prototype.wo=function(c){this.Hd=this.Gd=this.Dd=this.Xc=P.W;this.Id=c?P.Cc:P.Bc};nt.prototype.Bn=function(c,u){switch(c){case P.Bc:return.9+.1*u;case P.Cc:return.4+.3*u}
return 1};nt.prototype.Fn=function(c,u){switch(c){case P.Bc:return.6+.5*u;case P.Cc:return.3+.3*u}
return 1};nt.prototype.$f=function(c,u){switch(c){case P.Bc:return.9+.1*u;case P.Cc:return.6+.4*u}
return 1};b.Lg=nt;zi.qp=function(c){return new zi(c[o("56976a80390e")],c[o("66905d9c190f")],c[o("34eb19695a7c03ea5ee11b")],c[o("b2ad1babd4320128d8a7198edf3af334")],o("76635d7a19f955fd0a662f7f"),c[o("8fa9f5")],c[o("92d72dd5f3")])};zi.Ap=function(c){return new zi(c[o("3f0033dba011")],c[o("370f4ccfc818")],c[o("44fbe9792a6cf3fa2ef1eb")],c[o("59a4b4e2bfbb26f103be86d784a314fd")],o("487defe82fefe76f2448fdcd"),c[o("77c11d")],c[o("c4617fe7ad")])};b.Xk=zi;Js.prototype.Se=function(c,u,g,y){var x=this.Pd.resources.uniforms.uniforms.uColorOverlay;x[0]=c;x[1]=u;x[2]=g;x[3]=y};Js.prototype.xm=function(c){this.Pd.resources.uTexture=c.source;this.Pd.resources.uSampler=c.source.style};Js.prototype.Ba=function(c,u,g,y){this.Ld.position.x=c;this.Ld.position.y=u;this.Ld.scale.x=g;this.Ld.scale.y=y;var x=this.Pd.resources.uniforms.uniforms.uTextureScale;x[0]=.2520615384615385*g;x[1]=.4357063736263738*y;(g=this.Pd.resources.uniforms.uniforms.uTextureOffset)[0]=.2520615384615385*c;g[1]=.4357063736263738*u};b.tp=Js;Wt.prototype.mc=function(c){this.L.texture=c.eg();this.L.anchor.set(c.Nn,c.db);this.Fk=c.Xn;this.Hk=c.co};Wt.prototype.Se=function(c){this.L.tint=parseInt(c.substring(1),16)};Wt.prototype.Pb=function(c){this.L.width=c*this.Fk;this.L.height=c*this.Hk};Wt.prototype.jj=function(c){this.L.rotation=c};Wt.prototype.Cf=function(c,u){this.L.position.set(c,u)};Wt.prototype.Oa=function(c){this.L.visible=c};Wt.prototype.wf=function(){return this.L.visible};Wt.prototype.Pa=function(c){this.L.alpha=c};Wt.prototype.sd=function(){O.Qa(this.L)};b.ec=Wt;Je.prototype.Oe=function(){if(this.Ca!=null){O.Qa(this.Ca.ka)}
if(this.ia!=null){O.Qa(this.ia)}
if(this.b!=null){O.Qa(this.b)}};Je.prototype.li=function(){this.hg(.25);this.S.xb="";this.ed=!0;this.qa={};this.Oa(!1)};Je.prototype.Aj=function(c){this.S=c;this.mi(this.nb)};Je.prototype.Oa=function(c){var u=this.nb;this.nb=c;this.mi(u)};Je.prototype.hg=function(c){this.Nb=50*c;var u=c;if(c>this.K.kg){u=Math.atan((c-this.K.kg)/this.K.Jh)*this.K.Jh+this.K.kg}
u=Math.sqrt(4*Math.pow(5*u,.707106781186548)+25);var g=Math.min(200,Math.max(3,5*(u-5)+1));c=this.Xa;this.sb=.025*(5+.9*u);this.Xa=Math.floor(g);this.Wh=g-this.Xa;if(0<c&&c<this.Xa){var u=this.Ob[2*c-2];var g=this.Ob[2*c-1];var y=this.Wa[2*c-2];var x=this.Wa[2*c-1];var S=this.ga[2*c-2];for(var E=this.ga[2*c-1];c<this.Xa;c++){this.Ob[2*c]=u;this.Ob[2*c+1]=g;this.Wa[2*c]=y;this.Wa[2*c+1]=x;this.ga[2*c]=S;this.ga[2*c+1]=E}}};Je.prototype.Fo=function(c,u){this.Xa=u;for(u=0;u<this.Xa;u++){this.Ob[2*u]=this.Wa[2*u]=this.ga[2*u]=c();this.Ob[2*u+1]=this.Wa[2*u+1]=this.ga[2*u+1]=c()}};Je.prototype.ak=function(c,u,g){this.lf=g;for(g=0;g<this.Xa;g++){this.Ob[2*g]=this.Wa[2*g];this.Ob[2*g+1]=this.Wa[2*g+1]}
this.Cl(c-this.Wa[0],u-this.Wa[1],this.Xa,this.Wa)};Je.prototype.Cl=function(c,u,g,y){var x=O.Wg(c,u);if(!(x<=0)){var S=y[0];y[0]+=c;c=y[1];y[1]+=u;var E=1-2*(u=this.sb/(this.sb+x));var R=1;for(var F=g-1;R<F;R++){var k=y[2*R];y[2*R]=y[2*R-2]*E+(k+S)*u;S=k;y[2*R+1]=y[2*R-1]*E+((k=y[2*R+1])+c)*u;c=k}
u=this.Wh*this.sb/(this.Wh*this.sb+x);y[2*g-2]=y[2*g-4]*(E=1-2*u)+(y[2*g-2]+S)*u;y[2*g-1]=y[2*g-3]*E+(y[2*g-1]+c)*u}};Je.prototype.Fe=function(){return{kb:this.ga[0],lb:this.ga[1]}};Je.prototype.qh=function(c,u){var g=1e6;var y=c;var x=u;for(var S=0;S<this.Xa;S++){var E=this.ga[2*S];var R=this.ga[2*S+1];var F=O.Wg(c-E,u-R);if(F<g){g=F;y=E;x=R}}
return{kb:y,lb:x,gg:g}};Je.prototype.Hj=function(c){this.Yk=c};Je.prototype.Ff=function(c,u){this.Ta=O.Q(this.Ta,this.ed?this.lf?.9+.1*Math.cos(c/400*3.141592653589793):1:0,u,.00125);this.Ag=O.Q(this.Ag,!this.ed||this.lf?1:0,u,.0025);if(this.Ca!=null){this.Ca.ka.alpha=this.Ta}
if(this.ia!=null){this.ia.alpha=this.Ta}};Je.prototype.Lf=function(c,u,g,y){if(this.nb&&this.ed){var x=Math.pow(.11112,u/95);for(var S=0;S<this.Xa;S++){var E=O.If(this.Ob[2*S+1],this.Wa[2*S+1],g);this.ga[2*S]=O.If(O.If(this.Ob[2*S],this.Wa[2*S],g),this.ga[2*S],x);this.ga[2*S+1]=O.If(E,this.ga[2*S+1],x)}}
if(this.Ca!=null&&this.nb){this.Ca.Fl(this,c,u,y)}
if(this.ia!=null){this.ia.Ge.x=this.ga[0];this.ia.Ge.y=this.ga[1]-3*this.sb}
if(this.b!=null&&!0){this.b.x=this.ia.position.x;this.b.y=this.ia.position.y+1;u=c=Object.keys(this.qa);g=this.b.he;e:if(u.length!==g.length){u=!1}else{for(y=u.length;y--;){if(u[y]!==g[y]){u=!1;break e}}
u=!0}
if(!u){for(this.b.he=c;this.b.children[0];){this.b.removeChild(this.b.children[0])}
c=0;for(var R in this.qa){u=A.A.V().Xg(this.qa[R].ra).La;u=new Ae(u.eg());u.width=30;u.height=30;u.x=c;this.b.addChild(u);c+=35}
this.b[o("1bbc7478f0a4")].x=.5*this.b.width;this.b[o("cf70b8343c70")].y=this.b.height}}};Je.prototype.mi=function(c){if(this.nb){if(!c){this.Il()}}else{if(this.Ca!=null){O.Qa(this.Ca.ka)}
if(this.ia!=null){O.Qa(this.ia)}
if(this.b!=null){O.Qa(this.b)}}};Je.prototype.Il=function(){if(this.Ca==null){this.Ca=new b.Ug()}else{O.Qa(this.Ca.ka)}
this.Ca.Qd(A.l.K.jd,A.A.V().Af(this.S.qi),A.A.V().xe(this.S.Ka),A.A.V().cj(this.S.Je),A.A.V().ej(this.S.ie),A.A.V().ij(this.S.Ke),A.A.V().Tg(this.S.bd),"#ffffff");if(this.ia==null){this.ia=new Ne({text:"",style:{fontFamily:"PTSans"}});this.ia.Ge={x:0,y:0};this.ia.anchor.set(.5,0)}else{O.Qa(this.ia)}
if(this.b==null){this.b=new de();this.b.he=[]}else{O.Qa(this.b)}
this.ia.style.fontSize=24;A.A.V().xe(this.S.Ka);this.ia.style.fill=0;this.ia.text=this.S.xb;this.Yk.Dn(this.S.T,this.Ca,this.ia,this.b)};Je.Rf=function(){this.T=0;this.qi=b.Vd.$e;this.bd=this.Ke=this.ie=this.Je=this.Ka=0;this.xb=""};b.Tf=Je;Ut.prototype.Wl=function(c){return new Ut(c,this.Db,this.Gb,this.rb,this.Ib)};Ut.prototype.cm=function(c){return new Ut(this.Ea,c,this.Gb,this.rb,this.Ib)};Ut.prototype.im=function(c){return new Ut(this.Ea,this.Db,c,this.rb,this.Ib)};Ut.prototype.om=function(c){return new Ut(this.Ea,this.Db,this.Gb,c,this.Ib)};Ut.prototype.sm=function(c){return new Ut(this.Ea,this.Db,this.Gb,this.rb,c)};b.Ti=Ut;C=new b.Ti(0,0,0,0,0);Lt.prototype.$c=function(){return this.G.ka};Lt.prototype.xi=function(c){this.X=c;if(this.G.X!==c){for(var u=c;u<this.G.o.length;u++){this.G.o[u].va()}
for(;this.G.X>c;){--this.G.X;(u=this.G.o[this.G.X]).id.sd();u.O.sd()}
for(;this.G.X<c;){u=this.G.o[this.G.X];this.G.X+=1;this.G.ka[o("1bad796adcb8c87e47")](u.O.L);this.G.ka[o("5d2fbb74a23a0a7801")](u.id.L);u.O.Pa(this.Kg);u.id.Pa(this.Mg)}
for(c=0;c<this.G.P.kd.length;c++){this.G.P.kd[c].Pa(this.Pg)}
for(c=0;c<this.G.P.md.length;c++){this.G.P.md[c].Pa(this.Rg)}
for(c=0;c<this.G.P.Kc.length;c++){this.G.P.Kc[c].Pa(this.Sg)}
for(c=0;c<this.G.P.nd.length;c++){this.G.P.nd[c].Pa(this.Vg)}}};Lt.prototype.vc=function(c){this.Uc=c;this.Hg=o("bb498f9d591627d4a512");this.Zg()};Lt.prototype.vm=function(c){this.Uc=C;this.Hg=c;this.Zg()};Lt.prototype.Zg=function(){this.G.Qd(b.Fc.Sj,null,A.A.V().xe(this.Uc.Ea),A.A.V().cj(this.Uc.Db),A.A.V().ej(this.Uc.Gb),A.A.V().ij(this.Uc.Ib),A.A.V().Tg(this.Uc.rb),this.Hg)};Lt.prototype.zi=function(c){this.pd=c};Lt.prototype.gl=function(c,u){this.Kg=c;this.Mg=u;for(c=0;c<this.X;c++){(u=this.G.o[c]).O.Pa(this.Kg);u.id.Pa(this.Mg)}};Lt.prototype.Ln=function(c,u,g,y){this.Pg=c;this.Rg=u;this.Sg=g;this.Vg=y;for(c=0;c<this.G.P.kd.length;c++){this.G.P.kd[c].Pa(this.Pg)}
for(c=0;c<this.G.P.md.length;c++){this.G.P.md[c].Pa(this.Rg)}
for(c=0;c<this.G.P.Kc.length;c++){this.G.P.Kc[c].Pa(this.Sg)}
for(c=0;c<this.G.P.nd.length;c++){this.G.P.nd[c].Pa(this.Vg)}};Lt.prototype.Ba=function(){var c;var u;var g;var y=2*this.pd;var x=3*this.pd;if(0<this.X){c=this.Vc[0];u=this.Vc[1];g=this.Vc[2];this.G.o[0].ha(c,u,y,x,g);this.G.P.ha(c,u,y,g)}
for(c=1;c<this.X;c++){this.G.o[c].ha(this.Vc[3*c],this.Vc[3*c+1],y,x,this.Vc[3*c+2])}};Lt.prototype.Vn=function(c){c.render({container:this.G.ka})};b.wi=Lt;He.Wb=$(o("d72deb79396d3e25b8628e270d70483586769f3b18"));He.$b=$(o("8311b745744c7b1fff5fe5536d2f69"));He.ac=$(o("4cb8bc2c234ef1ca35c9bb452d5deec432de"));He.bc=$(o("46f23aea273a7e363baf3d96200264"));He.dc=$(o("2a1ede0e49de9da41f359d2041"));He.Eb=$(o("144064d46a8c291e70192dc256980704"));He.fc=$(o("d5e365bb34abb2e2f0a33afe14ff95fd80a1"));He.Qb=$(o("6f8543d183cb859307850f839edb"));He.hc=$(o("0c787cec648e3310600024ca6e803f1c"));He.ic=$(o("a13711e74979c6bcc0744cf15b77ca97"));He.jc=$(o("d5e365bb2bafa8f8afa73ce404b6cee28cb310"));He.kc=$(o("580ca89839dfec40121cc5d210d0d1561114c9d402d3cb5c0428ddad59b3df220f"));He.lc=$(o("e2d696c68305da1698d6cb9c831a9de29d6dda6095f3d1e69426ca649bf8"));He.prototype.B=function(){};He.prototype.bb=function(){};He.prototype.ba=function(){};He.prototype.Xd=function(){};He.prototype.la=function(){};He.prototype.Va=function(){};b.i=He;B=$(o("350385dbdf43558d5103dc91b1462a9b2b"));D=$(o("0b993fcde9a9ff637fe97669f9bcf0646ea9"));X=$(o("a7fd9b2948b34379dd81c5511e8652"));U=$(o("d88c2818a943729997db16509e514a8fdcd61359"));L=$(o("7ce88c7ce638acb2e8f8ab32fb2aabbce9"));ie=$(o("20d45040421c089644d41918430f0b"));ne=$(o("1a0eee1e78c68ed04e1e945947d48d"));q=$(o("56c22ada3c02720c32c2429e030140"));Y=$(o("4d1bfd33b6233e617825b666af2b28"));(Z=O.da(b.i,function(){b.i.call(this,b.ab.dd);var c=this;var u=Y.get()[0];B.text(O.N(o("64dcc8530d4184dc0dd0cb110224c1b618b19833113dd6ae")));D.text(O.N(o("8038acb7e1ade830e934aff5feb8bd2afc15fc80fb8ba20ef61cbf")));D.click(function(){A.h.J(A.h.ma)});je.Mi=()=>{G.Me=!0};je.Ph=()=>{var y;var x=A.l.U;var S=G.E;if(S.length&&x.Ca){y=S.indexOf(x.S.Ka);x.Ca.Yj(y===-1?S[0]:S[(y+1)%S.length])}};je.El=()=>{var y;var x=A.l.U;var S=G.kh;if(S.length){y=S.indexOf(x.S.bd);x.Ca.Ym(y===-1?S[0]:S[(y+1)%S.length])}};je.ad=()=>{if(0&&Fi){Fi(0,0)}};je.hl=()=>{fa(1)};je.Qi=()=>{var y;var x=Object.keys(Oa);if(x.length){y=x.indexOf(0);j["1b"]=y===-1?x[0]:x[(y+1)%x.length];G.Hh()}};let g=[ba,ti];$(o("07507d17e7")).keydown(function(y){if(y.keyCode===32){c.Jb=!0}}).keyup(function(y){var x;if(y.target.type!==o("af94d45a47")&&((x=y.code)===o("5ea4458833")?je.Mi():x===o("be04e52884")?je.Ph():x===o("e0fa474aa3")?je.El():x===o("18a23f124e")?je.ad():x===o("2ef495b868")?je.hl():x===o("81b966cd46")?je.Qi():x===o("0ed4b5d858")?G.Be=!0:x===o("f129165d3b")?(A.h.D.H.Aa.Ac=!A.h.D.H.Aa.Ac,A.h.D.H.fb.visible=A.h.D.H.Aa.Ac,A.h.D.H.Aa.Ba(A.h.D.H.Aa.he)):x===o("736a000b87499d2b1f48")?fa(1.25):x===o("96692d44eaca38feeb4d1443c3d010")&&fa(0.75),y.keyCode===32)){c.Jb=!1}});u.addEventListener(o("21e5cb31c0fa"),y=>{},{capture:!0,passive:!0});u.addEventListener(o("0c2921aa73893f0c6200"),function(y){var x;var S;if(y&&!0&&!0){y=y.touches[0];x=.5*u.offsetWidth;S=.5*u.offsetHeight;if(o("f91f15481808965e6416")!=typeof y.clientX){c.oc=Math.atan2(y.clientY-S,y.clientX-x)}else{c.oc=Math.atan2(y.pageY-S,y.pageX-x)}
y=Math.min(Math.sqrt((x-y.pageX)*(x-y.pageX)+(S-y.pageY)*(S-y.pageY)),110);rt.position.x=x+y*Math.cos(c.oc);rt.position.y=S+y*Math.sin(c.oc)}},{capture:!0,passive:!0});u.addEventListener(o("7b58121b9c587206e246f1"),function(y){y.preventDefault();if(!0&&!0&&y){c.Jb=2<=y.touches.length}},!0);u.addEventListener(o("c5c2280d2ad2ae12a9"),function(y){if(!0&&!0&&y){c.Jb=2<=y.touches.length}},{capture:!0,passive:!0});u.addEventListener(o("6cd0c14a0324dfac02a0"),function(y){if(!(!y||!1||y.shiftKey)){c.oc=Math.atan2(y.clientY-.5*u.offsetHeight,y.clientX-.5*u.offsetWidth)}},!0);u.addEventListener(o("370556dfc809d9c1481e"),function(){c.Jb=!0},!0);u.addEventListener(o("5d23b06592371664"),function(){c.Jb=!1},!0);u.addEventListener(o("f6f7d7e0947fd97f93e0b6f4"),function(y){var x;var S;if(Qa&&y.pointerId===Il){Qa.Bh=!0;Qa.parent[o("1bb87242f0b3c07e")]({x:y.clientX,y:y.clientY},null,Qa.position)}else if(qa.any){if(Ot&&y.pointerId===jo){x=Ot.height/2;S=Math.max(x,Math.min(Ot.parent[o("22478b7949d489d5")]({x:y.clientX,y:y.clientY}).y,Ot.parent.height-x));Ot.parent.ek((Ot.parent.height-Ot.height-(S-x))/(Ot.parent.height-Ot.height),1)}
if(!(Q.cg||y.pointerId!==Q.$a)){Q.Io(y)}}},{capture:!0,passive:!0});u.addEventListener(o("7e7f2f78ece721e7f367"),function(y){Qa=null;if(qa.any){Ot=null;jo=-1;if(rt.$a===y.pointerId){rt.$a=-1;rt.alpha=.25}
if(!(Q.cg||y.pointerId!==Q.$a)){Q.visible=Q.Qh;Q.Ho();Q.$a=-1}}},{capture:!0,passive:!0});if(qa.any){G.oh=c;u.addEventListener(o("9dfe70394fe6c626c1f95036"),function(y){if(rt.$a===-1){rt.$a=y.pointerId;rt.alpha=1}
if(!Q.cg){for(var x of g)if(y.clientX>=x.x&&y.clientX<=x.x+x.width&&y.clientY>=x.y&&y.clientY<=x.y+x.height){return}
if(!(Q.Xf||Q.$a!==-1)){Q.$a=y.pointerId;Q.x=y.clientX;Q.y=y.clientY;Q.visible=!0;Q.pk()}}},{capture:!0,passive:!0})}})).prototype.B=function(){};Z.prototype.bb=function(){M.g(b.i.Wb,50);M.g(b.i.$b,1);M.g(b.i.ac,50);M.g(b.i.bc,50);M.C(b.i.dc,500);if(this.Ga===0){M.g(b.i.Eb,1)}else{M.C(b.i.Eb,500)}
M.g(b.i.fc,50);M.g(b.i.Qb,50);M.g(b.i.hc,50);M.g(b.i.ic,50);M.g(b.i.jc,50);M.g(b.i.kc,50);M.g(b.i.lc,50)};Z.prototype.We=function(){this.Ga=0;return this};Z.prototype.Fh=function(){M.g(X,1);O.fa(function(){M.C(X,500)},3e3);M.g(U,1);O.fa(function(){M.C(U,500)},500);this.Ga=1;return this};Z.prototype.ba=function(){this.Jb=!1;this.H.la()};Z.prototype.la=function(){this.H.la()};Z.prototype.Va=function(c,u){this.H.Va(c,u)};Z.prototype.Do=function(c,u,g){var y;if(1<=u&&u<=10){u=O.N(o("34ec18635d7154ec5de01b213274f1e628e1a8672478e9fe62f4")+u);y=O.N(o("5ff90fb686eccbb106f50cf499f99eab03d45f929fc596833ec63b859ade99"));O.N(o("1a42b2497bd7ced6435e811b55d88bd04b57c24e46de82a4602687305ab3d6a45f388f0a51a064")).replace(o("d40021e5e88c2d6f"),g).replace(o("9e0a5773939653f1"),c).replace(o("f2268347c4a28fcd"),u)}else{u="";y=O.N(o("fee6aef5676bea7267faadb7787ebf6862ebfed5605a9c4c62"));O.N(o("d0c87c47b15d38c0b9c47f05af427dc681dd0c408c5454d2badc594e804900d295b2410d9b375b")).replace(o("8cf8f91da044e5a7"),g).replace(o("d40021e5e98c2d6f"),c)}
L.html(O.N(o("273147fece2483f94e0d548cc101c6d35b1c17d3d419cf")));ie.html(c);ne.html(u);q.html(y)};Z.prototype.oa=async function(){this.H=new b.Po();await this.H.oa(Y);this.Ga=0;this.oc=0;this.Jb=!1};se={We:0,Fh:1};b.Nl=Z;ee=$(o("4bd97f0da36fb0263a6a326ba77ab62d29692e3df2738e3c17"));Ce=$(o("9044e0d0f88ab703f107bdc6ec9fb108d214918089978705"));Tt=$(o("69ffd9af81b10ec4188c9489859418cf0b8f88dfd09a1ac8f5"));(Z=O.da(b.i,function(){b.i.call(this,b.ab.dd);this.Oh=-1;this.df=""})).prototype.B=function(){};Z.prototype.bb=function(){M.C(b.i.Wb,500);M.C(b.i.$b,1);M.g(b.i.ac,50);M.g(b.i.bc,50);M.g(b.i.dc,50);M.g(b.i.Eb,50);M.g(b.i.fc,50);M.g(b.i.Qb,50);M.g(b.i.hc,50);M.C(b.i.ic,500);M.g(b.i.jc,50);M.g(b.i.kc,50);M.g(b.i.lc,50)};Z.prototype.ba=function(){};Z.prototype.Xd=function(){};Z.prototype.Wo=function(){this.hf("",0);M.C(ee,100)};Z.prototype.Ik=function(){M.g(ee,100)};Z.prototype.hf=function(c,u){if(this.df!==c){this.df=c}
c=O.Ad(Math.floor(100*u),0,100);if(this.Oh!==c){Ce.css(o("f91d12480906"),c+o("0b993fcb"));Tt.html(c+o("19afa97cb8bc2a"))}};b.Pn=Z;re=$(o("1523a5fbf46736a07460fafdd57d53"));$(o("81d73187689baad4e0946e916e9be1b4f470"));$(o("095fb90fe013222c78ecf669f7e9633c76e7"));oe=$(o("4034b0a029f8ab75276dfef421b0ec6a2455fdcd27"));ki=$(o("eade9ece83129dec976dc12895e8d6fd"));ve=$(o("afc583115e89184ad889dd43558b"));It=$(o("0a3efe2e63f2fdcd7d42b04c78c0f5d96844bb5f7bdc939c405296"));pa=$(o("a7fd9b2946b10072c081d54b5d831856c587de585e9f4e03cb95b946"));$(o("302440b059e85b624e6c14ff11f91b7734"));ea=$(o("176d2bb9f621b0fd74394fbfc035cbe0"));ga=$(o("4efa22d23f0e39163d8e76c42a19791b"));Ui=$(o("8553350b6417a64fe617616d7fe7eb30"));Vt=$(o("ec181c8c9dac1f309f2c58ea97bf5f39"));ma=$(o("5fb553e18ef9c8a50cf107f784ea88ac42c2049687cb9bcb1bc10a9e"));_a=$(o("524626563b8a35993b197d002dc24e9801184a140b92"));Ga=$(o("7aae0ebe13626d61e3e125f8f53a2f78e7fe61f0e17b35"));ya=$(o("cb59ff8d22ed7ca3b0f0bca939a529a6baf5"));xa=$(o("7f95b3c16ed92897e4cce09565916a8beab3e5"));Ba=$(o("82b676a6eb7a6578e9ef25f2e0323c4ef5ca3a"));Gt=$(o("2c585ccc5d6c5ff358e40f624a2413e55ae2"));Bt=$(o("681c988801d0834c042ec0a6"));Ft=$(o("4a7e3e6e23b23d8d370270002494"));Dt=$(o("34a04434556457f859f90a662e76f1"));Li=$(o("c0b43020a9782bf4a7f06468e17f61e7"));ai=$(o("eade9ece83129df19e62cd6084aad9ff9b7fdd7f"));ii=$(o("706480f019a89b371428c3ae0ee0cb3ce523acb2e9b0"));Ho=$(o("992f29ff7063b2b3ce7b4da70860c6b4"));zo=$(o("b7cd8b195681105ed391b85731d9204eb7d5ab5b39"));Vo=$(o("7b094f5d925d2c02ef55fc1375156c02fb11fb1f63"));Wo=$(o("8311b7456a55240ae75df41b7d6d7de7e521f9"));(Z=O.da(b.i,function(){b.i.call(this,b.ab.af)})).prototype.oa=async function(){this.Oh=-1;this.df="";this.be=new b.Lg();await this.be.oa(ea);Ga.click(function(){});ea.click(function(){if(A.m.v){A.h.J(A.h.Mf)}});ga.click(function(){A.u.ok()});Ui.click(function(){A.u.Co()});_a.keypress(function(u){if(u.keyCode===13){A.ai()}});ya.click(function(){A.ai()});xa.click(function(){A.ai()});Ba.click(function(){A.h.J(A.h.gj)});Dt.click(function(){A.h.J(A.h.uf)});Gt.click(function(){if(A.m.v){A.h.J(A.h.$i)}});Ft.click(function(){if(A.m.v){A.h.J(A.h.Vi)}});Bt.click(function(){if(A.m.v){A.h.J(A.h.oj)}});Li.click(function(){if(A.m.v){A.h.J(A.h.vf)}});this.Bp();var c=b.I.Zb(b.I.Ui);if(c!==o("6232763028b6")&&c!==o("76537d4837b9")){c=o("bc4cacca8ed0")}
Ga.val(c)};Z.prototype.B=function(){var c=this;A.m.xh(function(){if(A.m.v){A.u.aa(A.m.tn(),b.s.Y);A.u.aa(A.m.wn(),b.s.sa);A.u.aa(A.m.fl(),b.s.xa);A.u.aa(A.m.An(),b.s.za);A.u.aa(A.m.En(),b.s.ya)}else{A.u.aa(A.ql(),b.s.Y);A.u.aa(0,b.s.sa);A.u.aa(0,b.s.xa);A.u.aa(0,b.s.za);A.u.aa(0,b.s.ya)}});A.m.xh(function(){ya.toggle(A.m.v);Ba.toggle(!A.m.v);xa.toggle(!A.m.v);Ft.toggle(A.m.v);Bt.toggle(A.m.v);Li.toggle(A.m.v);Gt.toggle(!0);Dt.toggle(!0);if(A.m.v){Vt.hide();ii.html(A.m.aj());ai.attr(o("53772725"),A.m.hj());Ho.html(A.m.Fd());zo.width(100*A.m.Qf()/A.m.Sf()+o("b0a4c036"));Vo.html(A.m.Qf()+o("72a606b553357e2c48bb")+A.m.Sf());Wo.html(A.m.Of());_a.val(A.m.Bd())}else{Vt.toggle(!A.wg());ii.html(ii.data(o("8036b7b6f7a1")));ai.attr(o("9012a080"),Ml);Ho.html(o("4a6a3c"));zo.width(o("2e8f"));Vo.html("");Wo.html(1);_a.val(b.I.Zb(b.I.Xi))}});A.u.wh(function(){c.be.vc(A.u.vh())})};Z.prototype.bb=function(){M.C(b.i.Wb,500);M.C(b.i.$b,1);M.C(b.i.ac,500);M.C(b.i.bc,500);M.g(b.i.dc,50);M.g(b.i.Eb,50);M.C(b.i.fc,500);M.g(b.i.Qb,50);M.g(b.i.hc,50);M.g(b.i.ic,50);M.g(b.i.jc,50);M.g(b.i.kc,50);M.g(b.i.lc,50)};Z.prototype.ni=function(){M.C(re,500);M.C(oe,500);M.C(ki,500);M.g(ve,100)};Z.prototype.Dl=function(){M.g(re,100);M.g(oe,100);M.g(ki,100);M.C(ve,500)};Z.prototype.hf=function(c,u){if(this.df!==c){this.df=c}
c=O.Ad(Math.floor(100*u),0,100);if(this.Oh!==c){It.css(o("7d199654751a"),c+o("1e8ad284"));pa.html(c+o("d16761347074e2"))}};Z.prototype.ba=function(){this.be.ld(!0)};Z.prototype.Xd=function(){this.be.ld(!1)};Z.prototype.la=function(){this.be.la()};Z.prototype.Va=function(){this.be.Va()};Z.prototype.Bd=function(){return _a.val()};Z.prototype.ui=function(){return Ga.val()};Z.prototype.Bp=function(){var c;var u;if(!A.wg()){Vt.show();c=O.N(o("c0f86c77a16d28f0a9f46f35a17c67f1fecc774da10b63c9b4c679408f4677c1939f515b854743"));u=encodeURIComponent(O.N(o("fa62d2699bf7eef6637ea13b6bf6a1f72476a9737bb1a5cf7e4cb74e45ccb1c76905bf4273caa1df466388545f")));ma.append($("<a class=\"mm-skin-over-button\" id=\"mm-skin-over-fb\" target=\"_blank\" href=\"https://www.facebook.com/dialog/share?app_id=861926850619051&display=popup&href=https%3A%2F%2Fwormate.io&redirect_uri=https%3A%2F%2Fwormate.io&hashtag=%23wormateio&quote="+u+"\"><img src=\"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDQ1NiA0NTYiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxwYXRoIGQ9Ik0yNDQuMyA0NTZWMjc5LjdoLTU5LjN2LTcxLjloNTkuM3YtNjAuNGMwLTQzLjkgMzUuNi03OS41IDc5LjUtNzkuNWg2MnY2NC42aC00NC40Yy0xMy45IDAtMjUuMyAxMS4zLTI1LjMgMjUuM3Y1MGg2OC41bC05LjUgNzEuOWgtNTkuMVY0NTZ6IiBmaWxsPSIjZmZmIi8+PC9zdmc+\"/>"+o("53216605a478b8247e3f18")+c+o("5b296e0dfa22a72113750b73d45dcc6928395f188e05c227")).click(function(){A.Pl();O.fa(function(){Vt.hide()},3e3)}))}};b.Vl=Z;(Z=O.da(b.i,function(){b.i.call(this,b.ab.dd)})).prototype.B=function(){};Z.prototype.bb=function(){M.g(b.i.Wb,50);M.g(b.i.$b,1);M.g(b.i.ac,50);M.g(b.i.bc,50);M.g(b.i.dc,50);M.g(b.i.Eb,50);M.g(b.i.fc,50);M.g(b.i.Qb,50);M.g(b.i.hc,50);M.g(b.i.ic,50);M.g(b.i.jc,50);M.g(b.i.kc,50);M.g(b.i.lc,50)};b.ro=Z;(Z=O.da(b.i,function(){b.i.call(this,b.ab.dd)})).prototype.B=function(){};Z.prototype.bb=function(){M.C(b.i.Wb,500);M.C(b.i.$b,1);M.g(b.i.ac,50);M.g(b.i.bc,50);M.g(b.i.dc,50);M.g(b.i.Eb,50);M.g(b.i.fc,50);M.g(b.i.Qb,50);M.g(b.i.hc,50);M.g(b.i.ic,50);M.C(b.i.jc,500);M.g(b.i.kc,50);M.g(b.i.lc,50)};Z.prototype.ba=function(){};b.zn=Z;Gl=$(o("3d0b8dc3b55d22873153b5d5ba4e2a9f26"));(Z=O.da(b.i,function(){b.i.call(this,b.ab.dd);this.pe=[];this.re=null})).prototype.B=function(){};Z.prototype.bb=function(){M.C(b.i.Wb,500);M.C(b.i.$b,1);M.g(b.i.ac,50);M.C(b.i.bc,500);M.g(b.i.dc,50);M.g(b.i.Eb,50);M.g(b.i.fc,50);M.g(b.i.Qb,50);M.C(b.i.hc,500);M.g(b.i.ic,50);M.g(b.i.jc,50);M.g(b.i.kc,50);M.g(b.i.lc,50)};Z.prototype.ba=function(){this.Ei()};Z.prototype.fp=function(){return this.re!=null||0<this.pe.length};Z.prototype.Cg=function(c){this.pe.unshift(c);O.fa(function(){A.h.Rh()},0)};Z.prototype.nk=function(c){this.pe.push(c);O.fa(function(){A.h.Rh()},0)};Z.prototype.Ei=function(){var c;var u;var g=this;if(this.re==null){if(this.pe.length===0){A.h.Zd()}else{c=this.pe.shift();u=(this.re=c).$c();M.C(u,300);Gl.append(u);c.te=function(){u.fadeOut(300);O.fa(function(){u.remove()},300);if(g.re===c){g.re=null}
g.Ei()};c.ba()}}};b.Jn=Z;b.ab={dd:0,af:1};Bl=$(o("74e084740826cabe0ce0d32aee24efbfe5b7a33b"));Yo=$(o("66d21aca1a145c081ed25d641cf619e6196e567a57e953f5"));$o=$(o("730147558747891f0b01100b91452c11ec5deb052a4e6816"));$(o("fb89cfdd0fdff18773996893e9cda4986adf66")).click(function(){A.h.Zd()});Yo.click(function(){if(A.m.v){A.h.J(A.h.vf)}});(Xe=O.da(b.i,function(c,u){b.i.call(this,b.ab.af);this.xb=c;this.zm=u;this.yf=[]})).prototype.B=function(){Xe.parent.prototype.B.call(this);if(!Xe.Jm){Xe.Jm=!0;A.m.xh(function(){if(A.m.v){$o.html(A.m.Fd())}else{$o.html(o("1778"))}})}
M.g(b.j.Ng,100)};Xe.tb=$(o("cc383cacb3ce7b4da70860cebdde"));Xe.ub=$(o("4fa563f1bfe1b4a232fa2ae7ade5b8b9"));Xe.wb=$(o("dc082c9c90c34d558d59439a9ed04f4c"));Xe.yb=$(o("9361a7b57b277ee3f561ebe77a27"));Xe.zb=$(o("95a3257b6aefef38f4e078230ce4ca31d2"));Xe.Ab=$(o("3a6ece7e4da469bf317e723c23a0"));Xe.Bb=$(o("c593754b3acea40ea89339e934b5"));Xe.Cb=$(o("e97f592f1a3b8e52dc141a4102"));Xe.Fb=$(o("5563e53bae232f64393cbe67cc310c7a1633896cc42c02791a"));Xe.Hb=$(o("7e2a7222e6f628f0f2726578e9f823e8e06b7d57fbc623"));Xe.Ng=$(o("e89c18089c514bde83a41f34952c42ea8ea05f3c"));Xe.prototype.bb=function(){M.C(b.i.Wb,1);M.C(b.i.$b,500);M.C(b.i.ac,200);M.C(b.i.bc,200);M.g(b.i.dc,200);M.g(b.i.Eb,200);M.g(b.i.fc,200);M.C(b.i.Qb,200);M.g(b.i.hc,200);M.g(b.i.ic,200);M.g(b.i.jc,200);M.g(b.i.kc,200);M.g(b.i.lc,200);Bl.html(this.xb);Yo.toggle(this.zm);this.eb()};Xe.prototype.eb=function(){};Xe.prototype.Le=function(c){var u=this;var g=2147483647&O.Wn();this.yf.push(g);M.C(b.j.Ng,100);O.fa(function(){u.xj(g)},c);return new Pu(this,g)};Xe.prototype.xj=function(c){if(!((c=this.yf.indexOf(c))<0)){this.yf.splice(c,1);if(this.yf.length===0){M.g(b.j.Ng,100)}}};b.j=Xe;Pu.prototype.dp=function(){this.Mn.xj(this.Rn)};var kl;var Ul;var Ll;var Nl;var jl;var Xl;var Vi;var sc;var rc;var nc;var oc;var cc;var dc;var hc;var oi;var Hl;var Wi;var zl;var Vl;var Wl;var Yl;var $l;var Kl;var ql;var Zl;var Ql;var Jl;var eu;var tu;var Yi;var er;var tr;var ar;var au;var iu;var su;var ru;var ir;var ci;var nu;var ou;var lc;var sr;var uc;var $i;var cu;var rr;var du;var hu;var at;var uu;var fu;var bu;var Ki;var pu;var gu;var nr;var fc;var qi;var mu;var bc;var pc;var gc;var mc;var Zi;var _u;var yu;var ot;var xu;var vu;var Ji;var lt;var or;var Tu;var Da;var Su;var wu;var Z;var _c;var Ta;var Au;var Eu;function Pu(c,u){this.Mn=c;this.Rn=u}
function es(c,u){this.qe=c;this.Sc=0;this.Rb=u}
function ia(c,u,g){this.qe=c;this.ra=u;this.gd=g;this.qf={};this.Za=[[]];this.Uf=this.Jd=-10}
function yc(){this.te=function(){}}
function Ru(){var S=_c[o("74b2df230c21")]();var c=_c[o("a49d831ecf119e")]();var u=Ta[o("f6e8cdfd9f79eb649afba8")]();var g=Ta[o("1f3f54e6c626edf34e3f41ee")]();var y=Au[o("cf6fa43636761d23be6fb13e")]();var x=Eu[o("0bd3788aeab2d9677aa37d72")]();var S=Math.min(1,Math.min((c-x-y)/g,S/u));S=o("ab28dfff41135dc3c7019d8b02581c988e498fed1a42719ff644e08472516c88fb0faedf23e579").concat(S,o("acd4"));Ta[o("edbd1cd3")](o("caf6fbb8ac34f915ff97e684b814fe06a886"),S);Ta[o("d8ca6958")](o("524e790a2cca6c9b3b056f0b319d4d"),S);Ta[o("5e8c5382")](o("e735842946681f3f8153970d0149"),S);Ta[o("9fb3d261")](o("807cadfef0a7a739fb3fa5a9e1"),S);Ta[o("5ff312a1")](o("585de8ca32def840125c"),S);A.la();b.Xb[o("f11110561a0a9b7c96")](0,1)}
kl=$(o("9e0a5202d1c70bc7c31a0a4cd3960fd2c751031e83f141f58677"));Ul=$(o("f381c7d504dc16989e819f9b069de29d6ada76a9b288b9ca3b"));Ll=$(o("c43034a4bbed6569a9306ceaa98c714cbd4b65f8e99f2a1bec"));Nl=$(o("9ff5932150a04a64c2f5cb6f52f14e71c68ec27d04d40516"));jl=$(o("74e084740b3dd5b919e0dc3af97ca1bcedbbb508bb6bffeb"));Xl=$(o("1f7513a1d020cae442754befd271cef1460e42fd82568096"));(Vi=O.da(b.j,function(){b.j.call(this,O.N(o("9fb9cf7646ac0b71c6b5cc345bb35d6bdfcedc475d911b45d881d75915985c4c")),!1);kl.click(function(){o("3d4dd099af411cc57703f7c8f9")});Ul.click(function(){o("ab3fc2f741136e9783548596")});Ll.click(function(){o("a6540750c4c8338c980f4071")});Nl.click(function(){o("584af5c232dec118500192")});jl.click(function(){o("798994c5939d2083b3c733")});Xl.click(function(){o("4cfee1763e52cd926690a6")})})).prototype.B=function(){Vi.parent.prototype.B.call(this)};Vi.prototype.eb=function(){M.C(b.j.tb,200);M.g(b.j.ub,50);M.g(b.j.wb,50);M.g(b.j.yb,50);M.g(b.j.zb,50);M.g(b.j.Ab,50);M.g(b.j.Bb,50);M.g(b.j.Cb,50);M.g(b.j.Fb,50);M.g(b.j.Hb,50)};Vi.prototype.ba=function(){};b.ym=Vi;sc=$(o("a13711e74d7fc0b0da7944ae4833db81d34e56"));rc=$(o("2216d6064ad289dd4f499f104cca84b55d2dd92953b19da5"));nc=$(o("fa2e8e3e92eaa1f56761b73864e2bced6575e17567f8b8d2714ca640"));oc=$(o("ee5a82b29e66d56193f5cba4987ec87991e1edfa6b7fa866"));cc=o("5ccfe7630547c7df");dc=o("13a66c4efeaff15978a36f6b");hc=o("ea99d5b68713dcf2b36dd04d93e6dcda9264c87e");(oi=O.da(b.j,function(){b.j.call(this,O.N(o("2a5282594bc7dea6532e916b46a888bc4a65912850ba2ebd2732603034a426ad2b39")),!0);var c=this;this.mh={};this.Gc={rh:{gd:rc,yh:cc},xo:{gd:nc,yh:dc},Ao:{gd:oc,yh:hc}};rc.click(function(){c.Ye(c.Gc.rh)});nc.click(function(){c.Ye(c.Gc.xo)});oc.click(function(){c.Ye(c.Gc.Ao)})})).prototype.B=function(){oi.parent.prototype.B.call(this)};oi.prototype.eb=function(){M.g(b.j.tb,50);M.C(b.j.ub,200);M.g(b.j.wb,50);M.g(b.j.yb,50);M.g(b.j.zb,50);M.g(b.j.Ab,50);M.g(b.j.Bb,50);M.g(b.j.Cb,50);M.g(b.j.Fb,50);M.g(b.j.Hb,50)};oi.prototype.ba=function(){var c=this;var u=this.Le(5e3);var g=Jt+o("b90f09aa4d5bddd5f3742f912452a28aba");O.nc(g,function(){c.mh={[cc]:[],[dc]:[],[hc]:[]};c.Ye(c.mg??c.Gc.rh);u.dp()},function(y){c.mh=y;c.Ye(c.mg??c.Gc.rh);u.dp()})};oi.prototype.Ye=function(c){this.mg=c;for(var u in this.Gc)if(this.Gc.hasOwnProperty(u)){this.Gc[u].gd.removeClass(o("6526957d9a290e78"))}
this.mg.gd.addClass(o("e8c9585e9f4e4bdb"));c=this.mh[this.mg.yh];var u="";for(var g=0;g<c.length;g++){var y=c[g];u+="<div class=\"table-row\"><span>".concat(g+1,"</span><span><img src=\"").concat(y[o("1f3157f3d735d7c35534")],"\"/></span><span>").concat(y[o("64c0d5521a57cbd609")],o("4513f4bbec080d8f3d5fa125e20776371635a769b76f6849")).concat(y[o("bc619bf9a5fd")],o("c91f78bf680c8973a1233d216603f23b9a392b6d336bec55")).concat(y[o("d760b02d335f3e21ad75")],o("b420c5c49dbbbc78cc6c90aaf3d42720876676f6a6bc395e")).concat(y[o("d60ffd08beb8f482aa1c")],o("1be92f3ebae2e73711e4")).concat(y[o("21f9ca38c9e5")],o("bd8b0c3364808507b5d7295d7affee4f8e9b7dc635aba5a1e683"))}
sc.empty();sc.append(u)};b.Im=oi;Hl=$(o("08fc78687c323eaa60cc3e0c730c38ca7f8e"));$(o("1be92f3defbfd16753f94979c0b1c7374dbe")).remove();(Wi=O.da(b.j,function(){var c=this;b.j.call(this,O.N(o("273147fece2483f94e0d548cc30bc5d3474654cfd51993c2501728dced00a4d4")),!1);Hl.click(function(){var u=c.Le(1e4);O.fa(function(){A.m.op(function(){u.dp()})},500)})})).prototype.B=function(){Wi.parent.prototype.B.call(this)};Wi.prototype.eb=function(){M.g(b.j.tb,50);M.g(b.j.ub,50);M.g(b.j.wb,50);M.C(b.j.yb,200);M.g(b.j.zb,50);M.g(b.j.Ab,50);M.g(b.j.Bb,50);M.g(b.j.Cb,50);M.g(b.j.Fb,50);M.g(b.j.Hb,50)};Wi.prototype.ba=function(){};b.Xm=Wi;zl=$(o("8fe5a33163b67a60fea4fc277aba7c7afea2"));Vl=$(o("53216775a77ab62c32603863aa6384200d750833"));Wl=$(o("7f95b3c173c66a90eed4ecd76ec47d9bfda9f46c70a13864f6ba"));Yl=$(o("e2d696c69605c71f8397c9d08b07c0e4806ad16b95e295ff9b67"));$l=$(o("be6ab262b2a1ebb3af3bed74a6befab8a2"));Kl=$(o("8fe5a33163b67a60fea4fc2768b87c7ab2b8c8754b874679d5bd"));ql=$(o("fc680cfc70a32d356d3923fa7bad2b2f213f2bac64b22711620c208674bd330679"));Zl=$(o("43d17705b78aa65c22902813bc74b0367e6f3c2abb7b"));Ql=$(o("edfb5d9301909cc29c8a12850a9e9ad8d0861ad1e5816bdb7185"));Jl=$(o("e73ddb691b6e0238864c944f00501412da4f98071e5f2d029e496416"));eu=$(o("f6a28aba8a79d36b97e3a5bc7167a5612be3a7ed6b77987463fa83d1774da0"));tu=$(o("4513f5cbb948249a2452aa2da23632707834b26fb0392f7e3c3ab67f8f16026000"));(Yi=O.da(b.j,function(){b.j.call(this,O.N(o("44fce8732d61a4fc2df0eb31204ee2d6248bfb42365cb4db2ec2f8460c548cc705d7")),!0)})).prototype.B=function(){Yi.parent.prototype.B.call(this)};Yi.prototype.eb=function(){M.g(b.j.tb,50);M.g(b.j.ub,50);M.C(b.j.wb,200);M.g(b.j.yb,50);M.g(b.j.zb,50);M.g(b.j.Ab,50);M.g(b.j.Bb,50);M.g(b.j.Cb,50);M.g(b.j.Fb,50);M.g(b.j.Hb,50)};Yi.prototype.ba=function(){var c=A.m.oo();var c=window.moment([c.year,c.month-1,c.day]).format(o("19c6d7"));Vl.html(A.m.aj());zl.attr(o("ebef9fbd"),A.m.hj());Wl.width(100*A.m.Qf()/A.m.Sf()+o("b6624a7c"));Yl.html(A.m.Qf()+o("00f47063216700f23ae9")+A.m.Sf());$l.html(A.m.Of());Kl.html(A.m.Kn());ql.html(O.Ai(A.m.Qn()));Zl.html(A.m.Un());Ql.html(A.m.$n());Jl.html(A.m.fo());eu.html(O.Ai(A.m.ko()));tu.html(c)};b.Rm=Yi;er=$(o("ec181c8c83a446379d2b51b4d5a44f38952e13aa6eb0203f61316ba47fb03e3864"));tr=$(o("18cc68586f082a9b499f05000906008f059c041a4e110b9b1d7205ea40e61e"));ar=$(o("8553350b7a1fff48e41068333cf1fb2be2ab792974efe861eef9762442fa"));au=$(o("786c88f80ca2ce3af07caebce3bab323"));iu=$(o("97edab396ba36d7beffdcd7d44bb50628abbc6745fbd4470ca92"));su=$(o("18cc68586c022e9a50dc061648101292059809184308008b"));ru=$(o("86327a2afaf43ce8fe323444fec620c0bb463b4af5de32d9b34c0f5fd6d20ddbc345"));ir=$(o("1523a5fbe9656bb96d23e8b9d57a47a644618abbc67458b9436a"));(ci=O.da(b.j,function(){b.j.call(this,O.N(o("669e469d0f03021a0f92552f02ec44f00629556c14fe12fe1b7b3478ecf437bbf2762a")),!1);var c=this;er.click(function(){var u=!!er.prop(o("0bdf659becabf466"));b.I.vb(b.I.Ii,u)});tr.click(function(){var u=!!tr.prop(o("b8ea926edf669beb"));b.I.vb(b.I.Ni,u)});ar.click(function(){});au.click(function(){c.Le(500);A.m.Uh()});su.click(function(){if(A.m.v){A.h.J(A.h.Gi)}});ir.click(function(){if(A.od()){A.h.J(A.h.yi)}})})).prototype.B=function(){var c;ci.parent.prototype.B.call(this);c=b.I.Zb(b.I.Ii)!==o("750096448a0f");er.prop(o("30621ae657ee1363"),c);c=b.I.Zb(b.I.Ni)!==o("750096448a0f");tr.prop(o("a1714bb1467dc2bc"),c);c=b.I.Zb(b.I.Fi)!==o("d76eb8262869");ar.prop(o("d5a53fed3aa1bee8"),c);A.m.Uj(function(){iu.toggle(A.m.v);ru.toggle(A.m.v)})};ci.prototype.eb=function(){M.g(b.j.tb,50);M.g(b.j.ub,50);M.g(b.j.wb,50);M.g(b.j.yb,50);M.C(b.j.zb,200);M.g(b.j.Ab,50);M.g(b.j.Bb,50);M.g(b.j.Cb,50);M.g(b.j.Fb,50);M.g(b.j.Hb,50)};ci.prototype.ba=function(){if(A.od()){ir.show()}else{ir.hide()}};ci.prototype.Ji=function(){return ar.prop(o("9c8eb60ac31a8797"))};b.$m=ci;nu=$(o("36e2cafa493f933f5be276b82724293627b97e"));ou=$(o("9dab2d6352f9ca3a88f2422b4ae8c22cd9f7400e1cd6d61cc1"));lc=$(o("681c98881fd6c7515d26c0ac01b59b231d3ad9b915bdca26ef3fefa7e1adb2"));sr=$(o("36e2cafa493f933f5be26cbe213861316bb569ab"));uc=$(o("79cfc99f8e9a10c2e4df6fdb669de2dca4986ace208aeab8e5"));$i=$(o("ec181c8c83b55d31916854b281e4583e883951a1"));cu=$(o("00f47060772129a56df4232f693063af62883106"));rr=$(o("1a0eee1e6ddb8fc3471e834749c298ca"));du=$(o("e2d696c69503c70b8fd6da948b089df18066c2"));hu=$(o("ff153341f040ea0462157f13ee4ba0106a3865"));(at=O.da(b.j,function(){b.j.call(this,O.N(o("2a5282594bc7dea6532e916b46a888bc4a65912850ba2ea2293a6a2668a369bb")),!0)})).prototype.oa=async function(){var c=this;this.Lc=null;this.Mc=[];this.Ak={};this.Ra=new b.Lg();await this.Ra.oa(nu);$i.click(function(){c.$o()});du.click(function(){c.Lc.gp()});hu.click(function(){c.Lc.kp()})};at.prototype.B=function(){at.parent.prototype.B.call(this);var c=this;A.A.zg(function(){var u=A.A.Ja.cb;c.Mc=[];for(var g=0;g<u[o("86642370e4dc3ef2fb6f1153e0c22de1ff442c")].length;g++){c.Mc.push(new es(c,u[o("9dfd74394fd5d13bd0e6662a5bfbd218c4fd5b")][g]))}
c.Ak={};for(g=0;g<u[o("f0b2592a9a0444b599b07e229f39")].length;g++){var y=u[o("997970a5734feda2c06b67bd4662")][g];c.Ak[y[o("92ca30")]]=y}
c.Qk()});this.uc(!1);A.u.wh(function(){c.uc(!1)})};at.prototype.eb=function(){M.g(b.j.tb,50);M.g(b.j.ub,50);M.g(b.j.wb,50);M.g(b.j.yb,50);M.g(b.j.zb,50);M.C(b.j.Ab,200);M.g(b.j.Bb,50);M.g(b.j.Cb,50);M.g(b.j.Fb,50);M.g(b.j.Hb,50)};at.prototype.ba=function(){this.Qk();this.Ra.ld(!0)};at.prototype.Xd=function(){this.Ra.ld(!1)};at.prototype.la=function(){this.Ra.la()};at.prototype.Va=function(){this.Ra.Va()};at.prototype.Qk=function(){var c=this;var u=this;rr.empty();for(var g=0;g<this.Mc.length;g++){(R=>{var F=c.Mc[R];R=b.d.createElement(o("520f7d"));rr.append(R);R=$(R);var k=F.Rb.img;if(k){R.html("<img src=\""+k+"\" height=\"40\">")}else{R.html(F.wp())}
R.click(function(){u.ei(F)});F.ii=R})(g)}
if(0<this.Mc.length){var g=A.u.na(b.s.Y);for(var y=0;y<this.Mc.length;y++){var x=this.Mc[y];var S=x.Rb.list;for(var E=0;E<S.length;E++){if(S[E]===g){x.Sc=E;return void this.ei(x)}}}
this.ei(this.Mc[0])}};at.prototype.ei=function(c){if(this.Lc!==c){this.Lc=c;rr.children().removeClass(o("0263b67075e4adfd"));if(this.Lc.ii){this.Lc.ii.addClass(o("b95a49894e5dda94"))}
lc.html("");if(c.Rb!=null&&(c=A.A.Ja.cb[o("b6331d31ce8f15aeca")][c.Rb[o("31c6d617d6d45e184dc3d402")]])!=null){lc.html(O.pm(O.me(c)))}
this.uc(!0)}};at.prototype.ri=function(){return this.Lc==null?b.Rc.xg():this.Lc.yg()};at.prototype.$o=function(){var c=this.ri();if(c.nf()){this.Ql(c.Tb())}};at.prototype.Ql=function(c){var u;var g;var y;var x;var S;var E;var R=A.u.cf(c,b.s.Y);if(!(R==null||(R=R.Ve,A.m.Fd()<R))){u=A.u.na(b.s.Y);g=A.u.na(b.s.sa);y=A.u.na(b.s.xa);x=A.u.na(b.s.za);S=A.u.na(b.s.ya);E=this.Le(5e3);A.m.zk(c,b.s.Y,function(){E.dp();A.h.J(A.h.mb)},function(){A.m.Ch(function(){A.u.aa(u,b.s.Y);A.u.aa(g,b.s.sa);A.u.aa(y,b.s.xa);A.u.aa(x,b.s.za);A.u.aa(S,b.s.ya);A.u.aa(c,b.s.Y);E.dp()})})}};at.prototype.uc=function(c){var u;var g;var y=A.u.vh();var x=this.ri();if(x.nf()&&(x=x.Tb(),u=A.u.cf(x,b.s.Y),g=!1,A.u.rc(x,b.s.Y)?(sr.hide(),$i.hide()):u==null||u.Xe?(g=!0,sr.show(),$i.hide(),uc.text(O.N(o("20980c17410d489049940f555c121e8a402f1fe65af058744c6608ee12e1116c2b74e6"))),u!=null&&u.Xe&&(u=A.A.Ja.cb[o("bb18d8d64b3428d1b7")][u.kk])!=null&&uc.text(O.me(u))):(sr.hide(),$i.show(),cu.html(u.Ve)),ou.html(o("18a01e4e2f2c7bdd10")+x),this.Ra.vc(y.Wl(x)),this.Ra.ao(g),c)){A.u.aa(x,b.s.Y)}};es.prototype.gp=function(){if(--this.Sc<0){this.Sc=this.Rb.list.length-1}
this.qe.uc(!0)};es.prototype.kp=function(){if(++this.Sc>=this.Rb.list.length){this.Sc=0}
this.qe.uc(!0)};es.prototype.wp=function(){return O.me(this.Rb.name)};es.prototype.yg=function(){return this.Sc>=this.Rb.list.length?b.Rc.xg():b.Rc.vi(this.Rb.list[this.Sc])};b.jn=at;uu=$(o("580ca8982fd9f15d051cc5dc49d6c95e064a87d919c9da501e"));fu=$(o("19afa97feefa702244bfc43b88e54c3147e9863ed8ea5b0f5f"));bu=$(o("d0842010a75179d5bd847d44f15a7bce929c4046904149d9"));(Ki=O.da(b.j,function(){b.j.call(this,O.N(o("fc2450ab65a96c34653823f978b63a2e7c7323ba7e947c10600a2482369d3b09")),!0);uu.click(function(){A.h.J(A.h.vf)});fu.click(function(){A.h.J(A.h.Mf)});bu.click(function(){A.h.J(A.h.ah)})})).prototype.B=function(){Ki.parent.prototype.B.call(this)};Ki.prototype.eb=function(){M.g(b.j.tb,50);M.g(b.j.ub,50);M.g(b.j.wb,50);M.g(b.j.yb,50);M.g(b.j.zb,50);M.g(b.j.Ab,50);M.C(b.j.Bb,200);M.g(b.j.Cb,50);M.g(b.j.Fb,50);M.g(b.j.Hb,50)};Ki.prototype.ba=function(){};b.rn=Ki;pu=$(o("984ce8d8eb88bf1d8d078b96d3d88516c60f"));gu=$(o("1d2bade3d67742a60872c2abca6842ac5977c08e9c56569c41"));nr=$(o("4276366631b269ab6737633e25ba74cc300266"));fc=$(o("97edab396ca97c7cb2bcce7148b1413bc5b9db375fb9556a"));qi=$(o("edfb5d93068792d6d88402d154888ed8898111"));mu=$(o("176d2bb9ec29fcfc323955f7ce79d5e44e3b4c"));bc=$(o("dba9effd28f500a0cef19cb314b50baf9fe882b0"));pc=$(o("6f8543d184c194945ac5169f8fc48ec31dc5f5866cda"));gc=$(o("05d3b58bfe9f6ace2099e3a1e27176b73864e2bced6575"));mc=$(o("baee4efec92ae123efbbe5a1b57aea2cbeafe3b3"));Zi=$(o("44b0b4243f7cebe961e9e771240cf1cb3bcae5422a"));_u=$(o("984ce8d8eb88bf1d8d078b96d3d89605cd0f"));yu=$(o("6014908013d0c745454fc3de1b90c05a0835"));(ot=O.da(b.j,function(){b.j.call(this,O.N(o("1880340f79157088419c075d541a168258d7071e42084088556000ad40e414")),!0)})).prototype.oa=async function(){var c=this;var u=this;this.wd=[];this.sa=new ia(this,b.s.sa,bc);this.xa=new ia(this,b.s.xa,pc);this.za=new ia(this,b.s.za,gc);this.ya=new ia(this,b.s.ya,mc);this.Wi=this.Si=this.Pi=this.Ki=this.Hi=this.Ub=null;this.Ra=new b.Lg();await this.Ra.oa(pu);qi.click(function(){u.Km()});_u.click(function(){u.Ub.Om()});yu.click(function(){u.Ub.Sm()});bc.click(function(){u.De(c.sa)});pc.click(function(){u.De(c.xa)});gc.click(function(){u.De(c.za)});mc.click(function(){u.De(c.ya)});this.wd.push(this.sa);this.wd.push(this.xa);this.wd.push(this.za);this.wd.push(this.ya)};ot.prototype.B=function(){ot.parent.prototype.B.call(this);var c=this;A.A.zg(function(){var u=A.A.Ja.cb;c.Hi=u[o("273d50ffd818c4fd5b")];c.Ki=u[o("354bd89dcd427f855e5a")];c.Pi=u[o("4cfae27e2352f7d010ccf553")];c.Si=u[o("059ee6cccd9368c8")];c.Wi=u[o("5042fdcf3bd7d24e3b5d")];c.sa.Ef(u[o("0d9bf6a5e25472b67c67f9bcd87869ad64")]);c.sa.Hf(c.Hi);c.xa.Ef(u[o("b14f5c91414ee189cb435a82496fcd82a04b")]);c.xa.Hf(c.Ki);c.za.Ef(u[o("7caad22ef322a7a0d2b4b43ee937be9afeafaf26")]);c.za.Hf(c.Pi);c.ya.Ef(u[o("8cb5af2bc600a08af58ba226ea1bbb92")]);c.ya.Hf(c.Si)});this.uc(!1);A.u.wh(function(){c.uc(!1)})};ot.prototype.eb=function(){M.g(b.j.tb,50);M.g(b.j.ub,50);M.g(b.j.wb,50);M.g(b.j.yb,50);M.g(b.j.zb,50);M.g(b.j.Ab,50);M.g(b.j.Bb,50);M.C(b.j.Cb,200);M.g(b.j.Fb,50);M.g(b.j.Hb,50)};ot.prototype.ba=function(){this.De(this.Ub??this.sa);this.Ra.ld(!0)};ot.prototype.Xd=function(){this.Ra.ld(!1)};ot.prototype.la=function(){this.Ra.la()};ot.prototype.Va=function(){this.Ra.Va()};ot.prototype.De=function(c){this.Ub=c;for(c=0;c<this.wd.length;c++){this.wd[c].gd.removeClass(o("4eaf628421107101"))}
this.Ub.gd.addClass(o("f7588b0f085f180a"));this.Ub.bb()};ot.prototype.mj=function(){return this.Ub==null?b.Rc.xg():b.Rc.vi({T:this.Ub.yg(),ra:this.Ub.ra})};ot.prototype.Km=function(){var c=this.mj();if(c.nf()){c=c.Tb();this.kn(c.T,c.ra)}};ot.prototype.kn=function(c,u){var g;var y;var x;var S;var E;var R;var F=A.u.cf(c,u);if(!(F==null||(F=F.Ve,A.m.Fd()<F))){g=A.u.na(b.s.Y);y=A.u.na(b.s.sa);x=A.u.na(b.s.xa);S=A.u.na(b.s.za);E=A.u.na(b.s.ya);R=this.Le(5e3);A.m.zk(c,u,function(){R.dp();A.h.J(A.h.mb)},function(){A.m.Ch(function(){A.u.aa(g,b.s.Y);A.u.aa(y,b.s.sa);A.u.aa(x,b.s.xa);A.u.aa(S,b.s.za);A.u.aa(E,b.s.ya);A.u.aa(c,u);R.dp()})})}};ot.prototype.uc=function(c){var u=A.u.vh();if((g=this.mj()).nf()){var g=g.Tb();var y=A.u.cf(g.T,g.ra);var x=!1;if(A.u.rc(g.T,g.ra)){nr.hide();qi.hide()}else if(y==null||y.Xe){x=!0;nr.show();qi.hide();fc.text(O.N(o("2d77c184d45a1d83544bd2c6c9454b994d00d295af476d873159b59de756249f265bab")));if(y!=null&&y.Xe&&(y=A.A.Ja.cb[o("54d1f35f2c6df3c828")][y.kk])!=null){fc.text(O.me(y))}}else{nr.hide();qi.show();mu.html(y.Ve)}
gu.html("ID: "+g.T+" TYPE: "+g.ra);y=this.Ra;switch(g.ra){case b.s.sa:y.vc(u.cm(g.T));y.lo(x);break;case b.s.xa:y.vc(u.im(g.T));y.po(x);break;case b.s.za:y.vc(u.sm(g.T));y.wo(x);break;case b.s.ya:y.vc(u.om(g.T));y.so(x)}
if(c){A.u.aa(g.T,g.ra)}}};ia.prototype.Ef=function(c){this.Za=c};ia.prototype.Hf=function(c){this.qf=c};ia.prototype.bb=function(){var c=A.u.na(this.ra);for(var u=0;u<this.Za.length;u++){for(var g=0;g<this.Za[u].length;g++){if(this.Za[u][g]===c){this.Vf(u);return void this.je(g)}}}
this.Vf(0);this.je(0)};ia.prototype.Om=function(){var c=this.Jd-1;if(c<0){c=this.Za.length-1}
this.Vf(c);this.je(this.Uf%this.Za[c].length)};ia.prototype.Sm=function(){var c=this.Jd+1;if(c>=this.Za.length){c=0}
this.Vf(c);this.je(this.Uf%this.Za[c].length)};ia.prototype.Vf=function(c){var u=this;if(!(c<0||c>=this.Za.length)){this.Jd=c;Zi.empty();var g=this.Za[this.Jd];if(1<g.length){for(c=0;c<g.length;c++){(y=>{var x=u.qf[g[y]];var x=o("4034b0a0")+u.qe.Wi[x[o("0bcc7f97e2a5")]];(x=$("<div style=\"border-color:"+x+"\"></div>")).click(function(){u.je(y)});Zi.append(x)})(c)}}}};ia.prototype.je=function(c){if(!(c<0||c>=this.Za[this.Jd].length)){this.Uf=c;Zi.children().css(o("1c0f3f8c4b96101c511b02da4b9606145e"),o("9fa4d3734da75577d5bdc76e"));(c=Zi.children(o("fdcb4cf1ef866b99669eeed4edd2")+(1+c)+o("a4dc"))).css(o("bdcc5e132ad5b11bb0d823552ad5a713bf"),c.css(o("4fe23eb0b7e1a7eb34e735a5a9")));this.qe.uc(!0)}};ia.prototype.yg=function(){return this.Za[this.Jd][this.Uf]};b.vn=ot;xu=$(o("2f450391c40dc1ce531a58dd960fd2c04c152fc6ee0da0c5"));vu=$(o("8553350b7e13ff54e90c6e373ce1fc2ae6e3793c34e4f4"));(Ji=O.da(b.j,function(){b.j.call(this,O.N(o("34ec18635d7154ec5de01b21307ef2e634bbeb72266ca4f823f3fd7a3e55bcd735c7")),!1);xu.click(function(){if(A.od()){A.h.J(A.h.ma);A.eh(!1,!0);A.h.Dc.Cg(new b.gh())}else{A.h.Zd()}});vu.click(function(){A.h.Zd()})})).prototype.B=function(){Ji.parent.prototype.B.call(this)};Ji.prototype.eb=function(){M.g(b.j.tb,50);M.g(b.j.ub,50);M.g(b.j.wb,50);M.g(b.j.yb,50);M.g(b.j.zb,50);M.g(b.j.Ab,50);M.g(b.j.Bb,50);M.g(b.j.Cb,50);M.C(b.j.Fb,200);M.g(b.j.Hb,50)};Ji.prototype.ba=function(){};b.gm=Ji;lt=$(o("61f7d1a781b30bfd1dbfc6fd8ebd00d51f96ded09c8b12da"));or=$(o("475d7b89af19a1db3be57ca3b0e7bab339fc74b3beff"));Tu=$(o("6f8543d197c1998303cd548b98cf929b11c4ac9c6c"));(Da=O.da(b.j,function(){b.j.call(this,O.N(o("ab35c3fa4a181fc5d209d088470749dfcb42d0cb51056fd6a618a0c222563ddba9")),!1);or.click(function(){if(A.m.v){A.m.zl();A.m.Uh()}else{A.h.Zd()}});Tu.click(function(){A.h.Zd()});this.Zf=[]})).prototype.B=function(){Da.parent.prototype.B.call(this)};Da.prototype.eb=function(){M.g(b.j.tb,50);M.g(b.j.ub,50);M.g(b.j.wb,50);M.g(b.j.yb,50);M.g(b.j.zb,50);M.g(b.j.Ab,50);M.g(b.j.Bb,50);M.g(b.j.Cb,50);M.g(b.j.Fb,50);M.C(b.j.Hb,200)};Da.prototype.ba=function(){M.g(or,1);M.C(lt,1);lt.text(o("8cf3e07aa251e3d3b1d7e649b6"));this.Sn();this.dq(function(){lt.text(o("fea1eeb43023fd3034a7e6b7"))},1e3);this.dq(function(){lt.text(o("a05fccd696c5de529a49c4d5"))},2e3);this.dq(function(){lt.text(o("8558291d3b4abc19bf4e216e"))},3e3);this.dq(function(){lt.text(o("326dda6004f7ceec087bd263"))},4e3);this.dq(function(){lt.text(o("706f9ce646f583624a7994e5"))},5e3);this.dq(function(){lt.text(o("6f8e5fc7c194c1c3459857c4"))},6e3);this.dq(function(){lt.text(o("f94455094f5ecc153342ad1a"))},7e3);this.dq(function(){lt.text(o("d5e879ad6bfae9a9effe71be"))},8e3);this.dq(function(){lt.text(o("ebb2c3fb5d9040c7c194dbc8"))},9e3);this.dq(function(){M.C(or,300);M.g(lt,1)},1e4)};Da.prototype.dq=function(c,u){c=O.fa(c,u);this.Zf.push(c)};Da.prototype.Sn=function(){for(var c=0;c<this.Zf.length;c++){O.Yl(this.Zf[c])}
this.Zf=[]};b.rm=Da;yc.prototype.$c=function(){};yc.prototype.ba=function(){};b.Ud=yc;(Z=O.da(b.Ud,function(c){b.Ud.call(this);var u=O.Lb()+o("8c82")+Math.floor(1e3+8999*Math.random());this.Hc=$("<div id=\"".concat(u,"\" class=\"toaster toaster-coins\"><img class=\"toaster-coins-img\" alt=\"Wormate Coin\" src=\"/images/coin_320.png\" /><div class=\"toaster-coins-val\">").concat(c,"</div><div class=\"toaster-coins-close\">").concat(O.N(o("568e768d3f13320a3f8245df161c450612925ad70914420907914564")),o("23f1165582eaef7e42aa082deac5826116d67342de9e9c197e")));var g=this;this.Hc.find(o("be61f43ea3a0f0b0b47aeb36a3b5fff0ad33ff12b7")).click(function(){g.te()})})).prototype.$c=function(){return this.Hc};Z.prototype.ba=function(){};b.Qo=Z;(Z=O.da(b.Ud,function(c){b.Ud.call(this);var u=O.Lb()+o("8d21")+Math.floor(1e3+8999*Math.random());this.Hc=$("<div id=\"".concat(u,"\" class=\"toaster toaster-levelup\"><img class=\"toaster-levelup-img\" alt=\"Wormate Level Up Star\" src=\"/images/level-star.svg\" /><div class=\"toaster-levelup-val\">").concat(c,"</div><div class=\"toaster-levelup-text\">").concat(O.N(o("b943558858569197a05f26da3159a68bbd5f39d2215bb965bd3723")),"</div><div class=\"toaster-levelup-close\">").concat(O.N(o("cb15a3da2af87fa5b2e9b0e823e738b9afe9afe03cff0fa68afa90b3")),o("de4a9332c7c1e2918f018d4aafde9fbecb4df6e59b759136b3")));var g=this;this.Hc.find(o("1689acc67b58a8486c828cd454568840569a8bd5454889")).click(function(){g.te()})})).prototype.$c=function(){return this.Hc};Z.prototype.ba=function(){};b.Lo=Z;(Z=O.da(b.Ud,function(){b.Ud.call(this);var c=this;var u=O.Lb()+o("a787")+Math.floor(1e3+8999*Math.random());this.Hc=$("<div id=\""+u+"\" class=\"toaster toaster-consent-accepted\">    <img class=\"toaster-consent-accepted-logo\" src=\""+g5+"\" alt=\"Wormate.io logo\"/>    <div class=\"toaster-consent-accepted-container\">        <span class=\"toaster-consent-accepted-text\">"+O.N(o("03dd6b92e2c0a79d6ad168d0fbaff07167a16728f4a7f7797ea26920ebb5d966")).replaceAll(o("e5f355a8"),o("992f29fa736ceca0842161")).replaceAll("",o("9361a6c5753a3cb8dd69aecb"))+o("2c585dbc153334f044e418220b4c")+"        <a class=\"toaster-consent-accepted-link\" href=\"/privacy-policy\">"+O.N(o("552fb96cbc32756b3c23ba3e953d0267113395368a35056f08309b0e9d0b1d4f"))+o("73014625d21abf0b5e1f38")+o("887cf8eba9effe7aa251f7d1a4c0e524bd5b9c8ff59bfb5ce5")+"    <div class=\"toaster-consent-close\">"+O.N(o("e93305780826c147900f160a0109965b8d0f09021e019143641cf71aec37645b6c0aff"))+o("6b395e1dca12b7061a525055b2")+o("1682ebea3f199a4977d9c58267"));this.sh=this.Hc.find(o("ec135ad091b24626866855a896ba5f2588605da36fa227"));this.sh.hide();this.sh.click(function(){if(A.od()){A.eh(!0,!0)}
c.te()})})).prototype.$c=function(){return this.Hc};Z.prototype.ba=function(){var c=this;if(A.od()&&!A.Gf()){O.fa(function(){c.sh.fadeIn(300)},2e3)}else{O.fa(function(){c.te()},0)}};b.gh=Z;Su=$(o("57ad6bf9befeafa12dbd06b397f192b71eb50ab585f288bd1bc91e8cded6909205d1"));(Z=O.da(b.i,function(){b.i.call(this,b.ab.dd);Su.click(function(){A.h.zc.Ik();A.h.J(A.h.zc);O.fa(function(){var c=Jt+o("ff153334f341e753357e611fea50f9164c2874e1f861a7c0672177ed");O.nc(c,function(){A.h.J(A.h.mb)},function(){A.h.zc.Wo();A.A.Ih(function(){A.h.J(A.h.ma)},function(){A.h.J(A.h.mb)},function(u,g){A.h.zc.hf(u,g)})})},2e3)})})).prototype.B=function(){};Z.prototype.bb=function(){M.C(b.i.Wb,500);M.C(b.i.$b,1);M.g(b.i.ac,50);M.g(b.i.bc,50);M.g(b.i.dc,50);M.g(b.i.Eb,50);M.g(b.i.fc,50);M.g(b.i.Qb,50);M.g(b.i.hc,50);M.g(b.i.ic,50);M.g(b.i.jc,50);M.C(b.i.kc,500);M.g(b.i.lc,50)};Z.prototype.ba=function(){};b.Zn=Z;wu=$(o("b420c4b4ddfb8864ce2099eeadf42f70ab7b68f2abed6374a2307cfaa4d36b"));(Z=O.da(b.i,function(){b.i.call(this,b.ab.dd);wu.click(function(){A.h.J(A.h.ma)})})).prototype.B=function(){};Z.prototype.bb=function(){M.C(b.i.Wb,500);M.C(b.i.$b,1);M.g(b.i.ac,50);M.g(b.i.bc,50);M.g(b.i.dc,50);M.g(b.i.Eb,50);M.g(b.i.fc,50);M.g(b.i.Qb,50);M.g(b.i.hc,50);M.g(b.i.ic,50);M.g(b.i.jc,50);M.g(b.i.kc,50);M.C(b.i.lc,500)};Z.prototype.ba=function(){};b.jo=Z;O.uo=function(){(c={$j:!1}).ck=O.Lb();c.Yd=0;c.Kh=0;c.$d=null;c.Tp=Cl;c.Up=qs;c.l=null;c.A=null;c.Ne=null;c.fk=null;c.h=null;c.u=null;c.m=null;c.B=async function(){c.l=new b.So();c.l.ff=new b.pp(c.l);c.A=new b.Ha();await c.A.oa();c.Ne=new b.ol();await c.Ne.oa();c.fk=new b.wm();c.h=new b.Bl();await c.h.oa();c.u=new b.qn();c.m=new b.np();c.l.Gk=function(){c.h.J(c.h.Nj)};c.l.Jk=function(){c.h.ma.ui();c.h.J(c.h.D.We())};c.l.Ok=function(){var u;var g;$(o("0a79a37977"))[o("338c504fd080cd")]();c.A.Ih(null,null,null);u=Math.floor(c.l.U.Nb);g=c.l.pg;if(c.m.v){c.m.Ch(function(){c.Vk(u,g)})}else{c.Vk(u,g)}};c.l.Zk=function(u){u(c.h.D.oc,c.h.D.Jb)};c.m.Uj(function(){var u=c.h.jp();if(u!=null&&u.ra===b.ab.af){c.h.J(c.h.ma)}
if(c.m.v){c.m.Jg()}
if(c.od()&&c.m.v&&!c.m.Gf()){c.eh(!1,!1);c.h.Dc.Cg(new b.gh())}else{c.fi(!0)}});c.l.B();c.h.B();c.u.B();c.A.B();c.h.ma.Dl();c.h.J(c.h.ma);c.Ne.B(function(){c.fk.B();c.m.B();c.A.Ih(function(){c.h.ma.ni();c.h.J(c.h.ma)},function(){c.h.ma.ni();c.h.J(c.h.mb)},function(u,g){c.h.zc.hf(u,g);c.h.ma.hf(u,g)});if(c.od()&&!c.Gf()){c.h.Dc.Cg(new b.gh())}else{c.fi(!0)}})};c.rl=function(u){var g;if(c.m.v){g=c.m.Qc;u=Jt+o("d72deb0c2b793f6bed5696270a704064a1")+g+o("a93f199a4e71c193d44c47c10760d480d8445c89")+o("374d0aeccd0dd1db5a5572f6")+encodeURIComponent(u);O.nc(u,function(){},function(){})}};c.ai=function(){c.si()};c.si=function(u,g){var y;var x;var S;fa(1);if(c.l.Jl()){c.h.zc.Ik();c.h.J(c.h.zc);y=c.h.ma.ui();b.I.vb(b.I.Ui,y);x=c.h.uf.Ji();b.I.vb(b.I.Fi,x);x=0;if(c.$d!=null){x=c.$d[o("74a6d9280a2dc9")][o("900db397fd91a303fd")];S=c.$d[o("0a78a3727cfba3")][o("803dadbde3bcb222ec3c")];x=Math.max(0,Math.min(32767,(x+90)/180*32768))<<1|1|Math.max(0,Math.min(65535,(S+180)/360*65536))<<16}
if(c.m.v){G.Wf=g;c.Rl(y,x,u)}else{u=c.h.ma.Bd();b.I.vb(b.I.Xi,u);b.I.vb(b.I.Zi,c.u.na(b.s.Y));c.Xl(y,x)}}};Fi=function(u,g){c.si(u,g)};c.Rl=function(u,g,y=null){var x=c.m.Qc;var N=c.h.ma.Bd();G.qk=N;var S=c.u.na(b.s.Y);var E=c.u.na(b.s.sa);var R=c.u.na(b.s.xa);var F=c.u.na(b.s.za);var k=c.u.na(b.s.ya);var N=N.substring(0,24);N=(N=(N=(N=(N=(N=(N+="￿")+String.fromCharCode(S))+String.fromCharCode(k))+String.fromCharCode(E))+String.fromCharCode(R))+String.fromCharCode(F))+String.fromCharCode(0);G.Bi(0);G.Vj(0);u=Jt+o("d16761422533b52deb0c2c79342afa22a7")+x+o("46f23a9f392f6d2f3a")+o("2bf91e58c881dc477e8b514392dbfd")+encodeURIComponent(u)+o("0f6523b4f42cb0b553")+g+o("786c88fd12a4dd24ee30afb6a1e682")+encodeURIComponent(N)+o("29bf996adef5460e78c69657f1")+encodeURIComponent(S)+o("8e3a6217f7da31d6df437d1ade")+encodeURIComponent(E)+o("7d4bcd066c1df640ed3f631d3a3e")+encodeURIComponent(R)+o("3f557384a418a4c5341d3af3af59fefa")+encodeURIComponent(F)+o("86327a2fe2fa38d4ea3a6365")+encodeURIComponent(k);O.nc(u,function(){c.h.J(c.h.mb)},function(z){if(z[o("64d6c9530d")]===1460){c.h.J(c.h.vg)}else if(z[o("2bbf427aca")]!==1200){c.h.J(c.h.mb)}else{G.th=!0;G.ze=y||z[o("44e6e3653e7cf8c439efe2")];c.l.dm(0,x)}})};c.Xl=function(u,g){var y=c.h.ma.Bd();var x=c.u.na(b.s.Y);u=Jt+o("c0b43055b46064b2fadf7d6ea5792bad96")+o("41d5b611b6c2")+o("2bf91f58dc94d05047")+o("dc082de987d04f56a95a42d2cd8a6e")+encodeURIComponent(u)+o("fa2e8e3b99e7e5a246")+g+o("475d7b8ca515aed521e13ca7f6b791")+encodeURIComponent(y)+o("2e9ac2f741289d2b7fa3ddfa7e")+encodeURIComponent(x);O.nc(u,function(){c.h.J(c.h.mb)},function(S){if(S[o("a4968913cd")]===1460){c.h.J(c.h.vg)}else if(S[o("e45649d38d")]!==1200){c.h.J(c.h.mb)}else{S=S[o("11f1f636e3e365176cf8f7")];c.l.jm(S,y,x)}})};c.Vk=function(u,g){var y=c.h.ma.Bd();c.h.D.Do(u,g,y);c.h.J(c.h.D.Fh())};c.ql=function(){var u;return c.wg()&&(u=parseInt(b.I.Zb(b.I.Zi)))!=null&&c.u.rc(u,b.s.Y)?u:c.u.bk()};c.Pl=function(){b.I.vb(b.I.fj,o("23a05763c2"))};c.wg=function(){return b.I.Zb(b.I.fj)===o("818671c160")};c.fi=function(u){if(u!==!1){c.$j=u;o("baa813a3cd2aee25a7b7");o("cb1ba9ce3dc33eaca0e1bbb2")}};c.eh=function(u,g){b.I.vb(b.I.Ci,o(u?"ac899c0ad5":"adf84e0c42c7"));if(g){c.rl(u)}
c.fi(u)};c.Gf=function(){return b.I.Zb(b.I.Ci)===o("d8dd685eb9")};c.od=function(){try{return!!b.Xb[o("289019327c3400ba7540")]||c.$d!=null&&!!_5.gn(c.$d[o("9fb3ce7d51b056")][o("11eef230fcf2622c7c")],c.$d[o("a1714cbb5772d4")][o("900dbd8df38ca212fc0c")])}catch{return!0}};c.Va=function(){c.Yd=O.Lb();c.Kh=c.Yd-c.ck;c.l.Ie(c.Yd,c.Kh);c.h.Ie(c.Yd,c.Kh);c.ck=c.Yd};c.la=function(){c.h.la()};return c;var c};b.So=function(){o("ea8edf98cb4d80f28671dd6682");var c={Em:30,Wc:new Float32Array(100),bj:0,Ae:0,Ee:0,Yc:0,Ed:0,dn:0,Ga:0,wa:null,pj:300,Jk:function(){},Ok:function(){},Zk:function(){},Gk:function(){},K:new b.Vd(),ff:null,U:null,Oc:{},qb:{},jk:12.5,Cd:40,He:1,sj:-1,tj:1,hi:1,yj:-1,Bj:-1,Dj:1,Ij:1,Lj:-1,pg:500,Xj:500};c.K.Jc=500;c.U=new b.Tf(c.K);c.B=function(){null.Hj(A.h.D.H);setInterval(function(){if(!1&&0&&0 .readyState===WebSocket.OPEN){0 .send(Ks(JSON.stringify({[o("caba")]:1,[o("6d3c")]:null.ga[0],[o("82f0")]:null.ga[1],[o("cabf")]:null.K.Jc})))}
c.Zk(function(u,g){c.ho(u,g)})},100)};c.bn=function(u,g,y,x){c.sj=u;c.tj=g;c.hi=y;c.yj=x;c.Qj()};c.qo=function(u){c.He=u;c.Qj()};c.Qj=function(){c.Bj=c.sj-1;c.Dj=2;c.Ij=0;c.Lj=c.yj+1};c.Ie=function(u,g){c.Ee+=g;c.Ae-=0*g;null.yl();if(!(!0||!0&&!0)){c.vo(u,g);c.Cd=4+12.5*null.sb}
u=1e3/Math.max(1,g);for(var y=g=0;y<c.Wc.length-1;y++){g+=c.Wc[y];c.Wc[y]=c.Wc[y+1]}
c.Wc[c.Wc.length-1]=u;c.Em=(g+u)/c.Wc.length};c.ig=function(u,g){return c.Bj<u&&u<1&&1<g&&g<c.Lj};c.vo=function(u,g){var y;var x;var S=-NaN;null.Ff(u,g);null.Lf(u,g,S,c.ig);var E=0;for(y in c.qb){var R=c.qb[y];R.Ff(u,g);R.Lf(u,g,S,c.ig);if(R.nb&&R.sb>E){E=R.sb}
if(!(R.ed||!(R.Ta<.005)&&R.nb)){R.Oe();delete c.qb[R.S.T]}}
c.qo(3*E);for(x in c.Oc){S=c.Oc[x];S.Ff(u,g);S.Lf(u,g,c.ig);if(S.Zh&&(S.Ta<.005||!c.ig(S.Bg,S.Dg))){S.Oe();delete c.Oc[S.S.T]}}};c.pn=function(u,g){var y=A.Yd;if((c.dn=u)===0){c.Yc=y-95;c.Ed=y;c.Ee=0;c.Ae=0}else{c.Yc=0;c.Ed+=g}
c.bj=-NaN};c.up=function(){var u;if(!(!0&&!0)){c.Ga=3;u=null;O.fa(function(){if(u!=null&&u===null){null[o("1c0e32805394")]();c.wa=null}},5e3);c.Ok()}};c.Jl=function(){c.Ga=1;null.ki();c.Oc={};c.qb={};null.li();return!0};c.Ah=function(){c.wa=null;null.ki();c.Gk();c.Ga=0};c.dm=function(u,g){c.dk(u,function(){var y=Math.min(2048,g.length);var x=new b.Mh(6+2*y);var S=new b.Yh(new b.ng(x));S.fe(129);S.ge(2800);S.fe(1);S.ge(y);for(var E=0;E<y;E++){S.ge(g.charCodeAt(E))}
c.Gh(x)})};c.jm=function(u,g,y){c.dk(u,function(){var x=Math.min(32,g.length);var S=new b.Mh(7+2*x);var E=new b.Yh(new b.ng(S));E.fe(129);E.ge(2800);E.fe(0);E.ge(y);E.fe(x);for(var R=0;R<x;R++){E.ge(g.charCodeAt(R))}
c.Gh(S)})};c.Gh=function(u){try{if(!1&&null.readyState===WebSocket.OPEN){null.send(u)}}catch{c.Ah()}};c.ho=function(u,g){u=255&((g?128:0)|O.Am(u)/6.283185307179586*128&127);if(300!==u){g=new b.Mh(1);new b.Yh(new b.ng(g)).fe(u);c.Gh(g);c.pj=u}};c.dk=function(u,g){G.k=new WebSocket(G.Um+Ks(JSON.stringify({[o("da8a")]:u,[o("82f1")]:null,[o("a81a")]:0,[o("08bd")]:0})));0[o("322c9a2a46a296")]=function(){this.Th=setInterval(()=>{this.send(o("cc2d"))},1e4)};0[o("fc2250ac6cbe3136")]=function(){if(this.Th){clearInterval(this.Th);this.Th=0}
if(this===0){G.k=null}};0[o("c47a68faadea797aab78")]=function(S){try{var E=JSON.parse(o(S.data));if(E[o("be2e")]===0){Ja.zf(E[o("df72")]);ei.zf(E[o("3f13")])}
if(E[o("0113")]===1){let ue=E.b;if(ue==3333&&0<G.E.length){ue=G.E[Math.floor(Math.random()*G.E.length)]}
if(G.E.includes(ue)){A.l.U.Ca.Yj(ue)}}
if(E[o("87d9")]===2){je.ad()}
if(E[o("5a0a")]===3){var R=E[o("782a")];if(R){G.Oj=R;var F=E[o("e457")];if(F){try{delete F[0]}catch{}
for(var k in G.Sb){var N;var z;var H;var K=F[k];var Ee=G.Sb[k];if(K){N=K[o("091b")];z=K[o("9ac9")];H=K[o("67fb")];Ee.position.x=N/H*A.h.D.H.c.Fa;Ee.position.y=z/H*A.h.D.H.c.Fa}else{A.h.D.H.c.removeChild(Ee);delete G.Sb[k]}}
for(var Te in F){var ce;var Be;var At;var ze;var be=F[Te];if(!G.Sb[Te]){ce=be[o("ebfd")];Be=be[o("74a7")];At=be[o("9969")];G.Sb[Te]=new Ye();(ze=G.Sb[Te])[o("ab26e4f04b0549")]=1;ze[o("4d5fa370b923")]=.9;ze.clear();ze.circle(0,0,.08*A.h.D.H.c.Fa);ze.stroke({width:2,color:0});ze.fill(65280);ze.position.x=ce/At*A.h.D.H.c.Fa;ze.position.y=Be/At*A.h.D.H.c.Fa;A.h.D.H.c.addChild(ze)}}}}}}catch{}};var y=c.wa=new WebSocket(u);y[o("b5c45e0658d8c238c4de5a")]=o("2a5a9e4f4fc692b454259137");y[o("ff5f6f1df351eb")]=function(){G.Pf=!0;for(var S in G.Sb){A.h.D.H.c.removeChild(G.Sb[S]);delete G.Sb[S]}
if(null===y){g()}};y[o("16c8b6ca7644af48")]=function(){if(new Date()>0){location.reload()}
G.Pf=!1;if(null===y){c.Ah()}};y[o("8678267cf8e923ef")]=function(){G.Pf=!1;if(null===y){c.Ah()}};y[o("fa64d2609bfcb3f06576")]=function(S){if(null===y){null.ml(S.data)}}};return c};window.addEventListener(o("2edc9faf46268c315ba296bc"),function(c){c.preventDefault();c.stopPropagation();return!1});O.Li(o("e41014f1cd8b6c5a9c545d9197ae5d24982018a497a41f79ba274dea329723236d7075966bb5233e622960b563"),null,function(){window.gapi[o("3f1c2ed3a7")](o("aada19c9c60d"),function(){var c=window.gapi[o("a0109787ccc7")];var u=c[o("766e56600e")];var g={[o("04362abe6db73e046539")]:o("4028b7aa70a7b326712bbba874b0ff752113a1cf6dc0a6483011f6cc389ff74c0e53cec106d3c45b094b9eda5edb805e0031c1ed13aad920142ccfb819bfdd20ee25a7bdf0fba538e5")};vt=u.call(c,g)})});O.Li(o("9e0a5277878122d4d65e1b17cdd403dac25a5e22ddae51f7f02d0b6c888d0ca1df3be63eb0beaabfb5"));await(A=O.uo()).B();(function c(){requestAnimationFrame(c);A.Va()})();_c=$(o("8033adb7fd"));Ta=$(o("d642aa5aa99fee88aa0cc85c809cdc"));Au=$(o("2d3b9dd3dc43418f40569a80dc4b5f894f"));Eu=$(o("95a3257b74ebe927e8fe32364efdd731d7"));Ru();$(b.Xb)[o("6524826b80200e")](Ru)})})()
