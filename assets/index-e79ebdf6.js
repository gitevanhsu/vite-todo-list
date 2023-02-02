function VS(t,e){for(var n=0;n<e.length;n++){const r=e[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in t)){const s=Object.getOwnPropertyDescriptor(r,i);s&&Object.defineProperty(t,i,s.get?s:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}))}(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerpolicy&&(s.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?s.credentials="include":i.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=n(i);fetch(i.href,s)}})();function BS(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var xo={},jS={get exports(){return xo},set exports(t){xo=t}},Vu={},b={},zS={get exports(){return b},set exports(t){b=t}},ue={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fa=Symbol.for("react.element"),HS=Symbol.for("react.portal"),WS=Symbol.for("react.fragment"),qS=Symbol.for("react.strict_mode"),KS=Symbol.for("react.profiler"),GS=Symbol.for("react.provider"),QS=Symbol.for("react.context"),XS=Symbol.for("react.forward_ref"),YS=Symbol.for("react.suspense"),JS=Symbol.for("react.memo"),ZS=Symbol.for("react.lazy"),Dm=Symbol.iterator;function eT(t){return t===null||typeof t!="object"?null:(t=Dm&&t[Dm]||t["@@iterator"],typeof t=="function"?t:null)}var Nv={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},Pv=Object.assign,Ov={};function Is(t,e,n){this.props=t,this.context=e,this.refs=Ov,this.updater=n||Nv}Is.prototype.isReactComponent={};Is.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Is.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Lv(){}Lv.prototype=Is.prototype;function yf(t,e,n){this.props=t,this.context=e,this.refs=Ov,this.updater=n||Nv}var vf=yf.prototype=new Lv;vf.constructor=yf;Pv(vf,Is.prototype);vf.isPureReactComponent=!0;var Nm=Array.isArray,bv=Object.prototype.hasOwnProperty,wf={current:null},Mv={key:!0,ref:!0,__self:!0,__source:!0};function $v(t,e,n){var r,i={},s=null,o=null;if(e!=null)for(r in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)bv.call(e,r)&&!Mv.hasOwnProperty(r)&&(i[r]=e[r]);var a=arguments.length-2;if(a===1)i.children=n;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];i.children=l}if(t&&t.defaultProps)for(r in a=t.defaultProps,a)i[r]===void 0&&(i[r]=a[r]);return{$$typeof:fa,type:t,key:s,ref:o,props:i,_owner:wf.current}}function tT(t,e){return{$$typeof:fa,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Ef(t){return typeof t=="object"&&t!==null&&t.$$typeof===fa}function nT(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var Pm=/\/+/g;function Vc(t,e){return typeof t=="object"&&t!==null&&t.key!=null?nT(""+t.key):e.toString(36)}function Sl(t,e,n,r,i){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case fa:case HS:o=!0}}if(o)return o=t,i=i(o),t=r===""?"."+Vc(o,0):r,Nm(i)?(n="",t!=null&&(n=t.replace(Pm,"$&/")+"/"),Sl(i,e,n,"",function(u){return u})):i!=null&&(Ef(i)&&(i=tT(i,n+(!i.key||o&&o.key===i.key?"":(""+i.key).replace(Pm,"$&/")+"/")+t)),e.push(i)),1;if(o=0,r=r===""?".":r+":",Nm(t))for(var a=0;a<t.length;a++){s=t[a];var l=r+Vc(s,a);o+=Sl(s,e,n,l,i)}else if(l=eT(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=r+Vc(s,a++),o+=Sl(s,e,n,l,i);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function Xa(t,e,n){if(t==null)return t;var r=[],i=0;return Sl(t,r,"","",function(s){return e.call(n,s,i++)}),r}function rT(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var xt={current:null},Tl={transition:null},iT={ReactCurrentDispatcher:xt,ReactCurrentBatchConfig:Tl,ReactCurrentOwner:wf};ue.Children={map:Xa,forEach:function(t,e,n){Xa(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return Xa(t,function(){e++}),e},toArray:function(t){return Xa(t,function(e){return e})||[]},only:function(t){if(!Ef(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};ue.Component=Is;ue.Fragment=WS;ue.Profiler=KS;ue.PureComponent=yf;ue.StrictMode=qS;ue.Suspense=YS;ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iT;ue.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var r=Pv({},t.props),i=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=wf.current),e.key!==void 0&&(i=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)bv.call(e,l)&&!Mv.hasOwnProperty(l)&&(r[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)r.children=n;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];r.children=a}return{$$typeof:fa,type:t.type,key:i,ref:s,props:r,_owner:o}};ue.createContext=function(t){return t={$$typeof:QS,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:GS,_context:t},t.Consumer=t};ue.createElement=$v;ue.createFactory=function(t){var e=$v.bind(null,t);return e.type=t,e};ue.createRef=function(){return{current:null}};ue.forwardRef=function(t){return{$$typeof:XS,render:t}};ue.isValidElement=Ef;ue.lazy=function(t){return{$$typeof:ZS,_payload:{_status:-1,_result:t},_init:rT}};ue.memo=function(t,e){return{$$typeof:JS,type:t,compare:e===void 0?null:e}};ue.startTransition=function(t){var e=Tl.transition;Tl.transition={};try{t()}finally{Tl.transition=e}};ue.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};ue.useCallback=function(t,e){return xt.current.useCallback(t,e)};ue.useContext=function(t){return xt.current.useContext(t)};ue.useDebugValue=function(){};ue.useDeferredValue=function(t){return xt.current.useDeferredValue(t)};ue.useEffect=function(t,e){return xt.current.useEffect(t,e)};ue.useId=function(){return xt.current.useId()};ue.useImperativeHandle=function(t,e,n){return xt.current.useImperativeHandle(t,e,n)};ue.useInsertionEffect=function(t,e){return xt.current.useInsertionEffect(t,e)};ue.useLayoutEffect=function(t,e){return xt.current.useLayoutEffect(t,e)};ue.useMemo=function(t,e){return xt.current.useMemo(t,e)};ue.useReducer=function(t,e,n){return xt.current.useReducer(t,e,n)};ue.useRef=function(t){return xt.current.useRef(t)};ue.useState=function(t){return xt.current.useState(t)};ue.useSyncExternalStore=function(t,e,n){return xt.current.useSyncExternalStore(t,e,n)};ue.useTransition=function(){return xt.current.useTransition()};ue.version="18.2.0";(function(t){t.exports=ue})(zS);const fn=BS(b),Fh=VS({__proto__:null,default:fn},[b]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sT=b,oT=Symbol.for("react.element"),aT=Symbol.for("react.fragment"),lT=Object.prototype.hasOwnProperty,uT=sT.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,cT={key:!0,ref:!0,__self:!0,__source:!0};function Uv(t,e,n){var r,i={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(r in e)lT.call(e,r)&&!cT.hasOwnProperty(r)&&(i[r]=e[r]);if(t&&t.defaultProps)for(r in e=t.defaultProps,e)i[r]===void 0&&(i[r]=e[r]);return{$$typeof:oT,type:t,key:s,ref:o,props:i,_owner:uT.current}}Vu.Fragment=aT;Vu.jsx=Uv;Vu.jsxs=Uv;(function(t){t.exports=Vu})(jS);const Fv=xo.Fragment,z=xo.jsx,je=xo.jsxs;var Vh={},Bh={},hT={get exports(){return Bh},set exports(t){Bh=t}},Kt={},jh={},dT={get exports(){return jh},set exports(t){jh=t}},Vv={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,K){var Z=P.length;P.push(K);e:for(;0<Z;){var ve=Z-1>>>1,Ae=P[ve];if(0<i(Ae,K))P[ve]=K,P[Z]=Ae,Z=ve;else break e}}function n(P){return P.length===0?null:P[0]}function r(P){if(P.length===0)return null;var K=P[0],Z=P.pop();if(Z!==K){P[0]=Z;e:for(var ve=0,Ae=P.length,rr=Ae>>>1;ve<rr;){var sn=2*(ve+1)-1,on=P[sn],Nt=sn+1,Qt=P[Nt];if(0>i(on,Z))Nt<Ae&&0>i(Qt,on)?(P[ve]=Qt,P[Nt]=Z,ve=Nt):(P[ve]=on,P[sn]=Z,ve=sn);else if(Nt<Ae&&0>i(Qt,Z))P[ve]=Qt,P[Nt]=Z,ve=Nt;else break e}}return K}function i(P,K){var Z=P.sortIndex-K.sortIndex;return Z!==0?Z:P.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],u=[],h=1,d=null,c=3,f=!1,g=!1,E=!1,C=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,p=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function y(P){for(var K=n(u);K!==null;){if(K.callback===null)r(u);else if(K.startTime<=P)r(u),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(u)}}function S(P){if(E=!1,y(P),!g)if(n(l)!==null)g=!0,rt(x);else{var K=n(u);K!==null&&rn(S,K.startTime-P)}}function x(P,K){g=!1,E&&(E=!1,m(M),M=-1),f=!0;var Z=c;try{for(y(K),d=n(l);d!==null&&(!(d.expirationTime>K)||P&&!q());){var ve=d.callback;if(typeof ve=="function"){d.callback=null,c=d.priorityLevel;var Ae=ve(d.expirationTime<=K);K=t.unstable_now(),typeof Ae=="function"?d.callback=Ae:d===n(l)&&r(l),y(K)}else r(l);d=n(l)}if(d!==null)var rr=!0;else{var sn=n(u);sn!==null&&rn(S,sn.startTime-K),rr=!1}return rr}finally{d=null,c=Z,f=!1}}var O=!1,L=null,M=-1,J=5,W=-1;function q(){return!(t.unstable_now()-W<J)}function ae(){if(L!==null){var P=t.unstable_now();W=P;var K=!0;try{K=L(!0,P)}finally{K?de():(O=!1,L=null)}}else O=!1}var de;if(typeof p=="function")de=function(){p(ae)};else if(typeof MessageChannel<"u"){var fe=new MessageChannel,Ye=fe.port2;fe.port1.onmessage=ae,de=function(){Ye.postMessage(null)}}else de=function(){C(ae,0)};function rt(P){L=P,O||(O=!0,de())}function rn(P,K){M=C(function(){P(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){g||f||(g=!0,rt(x))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):J=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return c},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(c){case 1:case 2:case 3:var K=3;break;default:K=c}var Z=c;c=K;try{return P()}finally{c=Z}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,K){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Z=c;c=P;try{return K()}finally{c=Z}},t.unstable_scheduleCallback=function(P,K,Z){var ve=t.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?ve+Z:ve):Z=ve,P){case 1:var Ae=-1;break;case 2:Ae=250;break;case 5:Ae=1073741823;break;case 4:Ae=1e4;break;default:Ae=5e3}return Ae=Z+Ae,P={id:h++,callback:K,priorityLevel:P,startTime:Z,expirationTime:Ae,sortIndex:-1},Z>ve?(P.sortIndex=Z,e(u,P),n(l)===null&&P===n(u)&&(E?(m(M),M=-1):E=!0,rn(S,Z-ve))):(P.sortIndex=Ae,e(l,P),g||f||(g=!0,rt(x))),P},t.unstable_shouldYield=q,t.unstable_wrapCallback=function(P){var K=c;return function(){var Z=c;c=K;try{return P.apply(this,arguments)}finally{c=Z}}}})(Vv);(function(t){t.exports=Vv})(dT);/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Bv=b,Wt=jh;function R(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var jv=new Set,Do={};function Ti(t,e){cs(t,e),cs(t+"Capture",e)}function cs(t,e){for(Do[t]=e,t=0;t<e.length;t++)jv.add(e[t])}var qn=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),zh=Object.prototype.hasOwnProperty,fT=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Om={},Lm={};function pT(t){return zh.call(Lm,t)?!0:zh.call(Om,t)?!1:fT.test(t)?Lm[t]=!0:(Om[t]=!0,!1)}function mT(t,e,n,r){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function gT(t,e,n,r){if(e===null||typeof e>"u"||mT(t,e,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function Dt(t,e,n,r,i,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var ut={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){ut[t]=new Dt(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];ut[e]=new Dt(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){ut[t]=new Dt(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){ut[t]=new Dt(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){ut[t]=new Dt(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){ut[t]=new Dt(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){ut[t]=new Dt(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){ut[t]=new Dt(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){ut[t]=new Dt(t,5,!1,t.toLowerCase(),null,!1,!1)});var _f=/[\-:]([a-z])/g;function Sf(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(_f,Sf);ut[e]=new Dt(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(_f,Sf);ut[e]=new Dt(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(_f,Sf);ut[e]=new Dt(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){ut[t]=new Dt(t,1,!1,t.toLowerCase(),null,!1,!1)});ut.xlinkHref=new Dt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){ut[t]=new Dt(t,1,!1,t.toLowerCase(),null,!0,!0)});function Tf(t,e,n,r){var i=ut.hasOwnProperty(e)?ut[e]:null;(i!==null?i.type!==0:r||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(gT(e,n,i,r)&&(n=null),r||i===null?pT(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):i.mustUseProperty?t[i.propertyName]=n===null?i.type===3?!1:"":n:(e=i.attributeName,r=i.attributeNamespace,n===null?t.removeAttribute(e):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?t.setAttributeNS(r,e,n):t.setAttribute(e,n))))}var tr=Bv.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Ya=Symbol.for("react.element"),bi=Symbol.for("react.portal"),Mi=Symbol.for("react.fragment"),kf=Symbol.for("react.strict_mode"),Hh=Symbol.for("react.profiler"),zv=Symbol.for("react.provider"),Hv=Symbol.for("react.context"),If=Symbol.for("react.forward_ref"),Wh=Symbol.for("react.suspense"),qh=Symbol.for("react.suspense_list"),Cf=Symbol.for("react.memo"),or=Symbol.for("react.lazy"),Wv=Symbol.for("react.offscreen"),bm=Symbol.iterator;function Bs(t){return t===null||typeof t!="object"?null:(t=bm&&t[bm]||t["@@iterator"],typeof t=="function"?t:null)}var Ne=Object.assign,Bc;function to(t){if(Bc===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);Bc=e&&e[1]||""}return`
`+Bc+t}var jc=!1;function zc(t,e){if(!t||jc)return"";jc=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var r=u}Reflect.construct(t,[],e)}else{try{e.call()}catch(u){r=u}t.call(e.prototype)}else{try{throw Error()}catch(u){r=u}t()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),s=r.stack.split(`
`),o=i.length-1,a=s.length-1;1<=o&&0<=a&&i[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(i[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||i[o]!==s[a]){var l=`
`+i[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{jc=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?to(t):""}function yT(t){switch(t.tag){case 5:return to(t.type);case 16:return to("Lazy");case 13:return to("Suspense");case 19:return to("SuspenseList");case 0:case 2:case 15:return t=zc(t.type,!1),t;case 11:return t=zc(t.type.render,!1),t;case 1:return t=zc(t.type,!0),t;default:return""}}function Kh(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case Mi:return"Fragment";case bi:return"Portal";case Hh:return"Profiler";case kf:return"StrictMode";case Wh:return"Suspense";case qh:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case Hv:return(t.displayName||"Context")+".Consumer";case zv:return(t._context.displayName||"Context")+".Provider";case If:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Cf:return e=t.displayName||null,e!==null?e:Kh(t.type)||"Memo";case or:e=t._payload,t=t._init;try{return Kh(t(e))}catch{}}return null}function vT(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Kh(e);case 8:return e===kf?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function xr(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function qv(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function wT(t){var e=qv(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),r=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return i.call(this)},set:function(o){r=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(o){r=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function Ja(t){t._valueTracker||(t._valueTracker=wT(t))}function Kv(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),r="";return t&&(r=qv(t)?t.checked?"true":"false":t.value),t=r,t!==n?(e.setValue(t),!0):!1}function jl(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function Gh(t,e){var n=e.checked;return Ne({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function Mm(t,e){var n=e.defaultValue==null?"":e.defaultValue,r=e.checked!=null?e.checked:e.defaultChecked;n=xr(e.value!=null?e.value:n),t._wrapperState={initialChecked:r,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function Gv(t,e){e=e.checked,e!=null&&Tf(t,"checked",e,!1)}function Qh(t,e){Gv(t,e);var n=xr(e.value),r=e.type;if(n!=null)r==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(r==="submit"||r==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?Xh(t,e.type,n):e.hasOwnProperty("defaultValue")&&Xh(t,e.type,xr(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function $m(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var r=e.type;if(!(r!=="submit"&&r!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function Xh(t,e,n){(e!=="number"||jl(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var no=Array.isArray;function Yi(t,e,n,r){if(t=t.options,e){e={};for(var i=0;i<n.length;i++)e["$"+n[i]]=!0;for(n=0;n<t.length;n++)i=e.hasOwnProperty("$"+t[n].value),t[n].selected!==i&&(t[n].selected=i),i&&r&&(t[n].defaultSelected=!0)}else{for(n=""+xr(n),e=null,i=0;i<t.length;i++){if(t[i].value===n){t[i].selected=!0,r&&(t[i].defaultSelected=!0);return}e!==null||t[i].disabled||(e=t[i])}e!==null&&(e.selected=!0)}}function Yh(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(R(91));return Ne({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function Um(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(R(92));if(no(n)){if(1<n.length)throw Error(R(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:xr(n)}}function Qv(t,e){var n=xr(e.value),r=xr(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),r!=null&&(t.defaultValue=""+r)}function Fm(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function Xv(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Jh(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?Xv(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var Za,Yv=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,r,i){MSApp.execUnsafeLocalFunction(function(){return t(e,n,r,i)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(Za=Za||document.createElement("div"),Za.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=Za.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function No(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var ho={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},ET=["Webkit","ms","Moz","O"];Object.keys(ho).forEach(function(t){ET.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),ho[e]=ho[t]})});function Jv(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||ho.hasOwnProperty(t)&&ho[t]?(""+e).trim():e+"px"}function Zv(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=Jv(n,e[n],r);n==="float"&&(n="cssFloat"),r?t.setProperty(n,i):t[n]=i}}var _T=Ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zh(t,e){if(e){if(_T[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(R(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(R(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(R(61))}if(e.style!=null&&typeof e.style!="object")throw Error(R(62))}}function ed(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var td=null;function Rf(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var nd=null,Ji=null,Zi=null;function Vm(t){if(t=ga(t)){if(typeof nd!="function")throw Error(R(280));var e=t.stateNode;e&&(e=Wu(e),nd(t.stateNode,t.type,e))}}function e0(t){Ji?Zi?Zi.push(t):Zi=[t]:Ji=t}function t0(){if(Ji){var t=Ji,e=Zi;if(Zi=Ji=null,Vm(t),e)for(t=0;t<e.length;t++)Vm(e[t])}}function n0(t,e){return t(e)}function r0(){}var Hc=!1;function i0(t,e,n){if(Hc)return t(e,n);Hc=!0;try{return n0(t,e,n)}finally{Hc=!1,(Ji!==null||Zi!==null)&&(r0(),t0())}}function Po(t,e){var n=t.stateNode;if(n===null)return null;var r=Wu(n);if(r===null)return null;n=r[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(t=t.type,r=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!r;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(R(231,e,typeof n));return n}var rd=!1;if(qn)try{var js={};Object.defineProperty(js,"passive",{get:function(){rd=!0}}),window.addEventListener("test",js,js),window.removeEventListener("test",js,js)}catch{rd=!1}function ST(t,e,n,r,i,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(n,u)}catch(h){this.onError(h)}}var fo=!1,zl=null,Hl=!1,id=null,TT={onError:function(t){fo=!0,zl=t}};function kT(t,e,n,r,i,s,o,a,l){fo=!1,zl=null,ST.apply(TT,arguments)}function IT(t,e,n,r,i,s,o,a,l){if(kT.apply(this,arguments),fo){if(fo){var u=zl;fo=!1,zl=null}else throw Error(R(198));Hl||(Hl=!0,id=u)}}function ki(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function s0(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function Bm(t){if(ki(t)!==t)throw Error(R(188))}function CT(t){var e=t.alternate;if(!e){if(e=ki(t),e===null)throw Error(R(188));return e!==t?null:t}for(var n=t,r=e;;){var i=n.return;if(i===null)break;var s=i.alternate;if(s===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===s.child){for(s=i.child;s;){if(s===n)return Bm(i),t;if(s===r)return Bm(i),e;s=s.sibling}throw Error(R(188))}if(n.return!==r.return)n=i,r=s;else{for(var o=!1,a=i.child;a;){if(a===n){o=!0,n=i,r=s;break}if(a===r){o=!0,r=i,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,r=i;break}if(a===r){o=!0,r=s,n=i;break}a=a.sibling}if(!o)throw Error(R(189))}}if(n.alternate!==r)throw Error(R(190))}if(n.tag!==3)throw Error(R(188));return n.stateNode.current===n?t:e}function o0(t){return t=CT(t),t!==null?a0(t):null}function a0(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=a0(t);if(e!==null)return e;t=t.sibling}return null}var l0=Wt.unstable_scheduleCallback,jm=Wt.unstable_cancelCallback,RT=Wt.unstable_shouldYield,AT=Wt.unstable_requestPaint,Me=Wt.unstable_now,xT=Wt.unstable_getCurrentPriorityLevel,Af=Wt.unstable_ImmediatePriority,u0=Wt.unstable_UserBlockingPriority,Wl=Wt.unstable_NormalPriority,DT=Wt.unstable_LowPriority,c0=Wt.unstable_IdlePriority,Bu=null,Cn=null;function NT(t){if(Cn&&typeof Cn.onCommitFiberRoot=="function")try{Cn.onCommitFiberRoot(Bu,t,void 0,(t.current.flags&128)===128)}catch{}}var mn=Math.clz32?Math.clz32:LT,PT=Math.log,OT=Math.LN2;function LT(t){return t>>>=0,t===0?32:31-(PT(t)/OT|0)|0}var el=64,tl=4194304;function ro(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function ql(t,e){var n=t.pendingLanes;if(n===0)return 0;var r=0,i=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~i;a!==0?r=ro(a):(s&=o,s!==0&&(r=ro(s)))}else o=n&~i,o!==0?r=ro(o):s!==0&&(r=ro(s));if(r===0)return 0;if(e!==0&&e!==r&&!(e&i)&&(i=r&-r,s=e&-e,i>=s||i===16&&(s&4194240)!==0))return e;if(r&4&&(r|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=r;0<e;)n=31-mn(e),i=1<<n,r|=t[n],e&=~i;return r}function bT(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function MT(t,e){for(var n=t.suspendedLanes,r=t.pingedLanes,i=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-mn(s),a=1<<o,l=i[o];l===-1?(!(a&n)||a&r)&&(i[o]=bT(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function sd(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function h0(){var t=el;return el<<=1,!(el&4194240)&&(el=64),t}function Wc(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function pa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-mn(e),t[e]=n}function $T(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var r=t.eventTimes;for(t=t.expirationTimes;0<n;){var i=31-mn(n),s=1<<i;e[i]=0,r[i]=-1,t[i]=-1,n&=~s}}function xf(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var r=31-mn(n),i=1<<r;i&e|t[r]&e&&(t[r]|=e),n&=~i}}var ye=0;function d0(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var f0,Df,p0,m0,g0,od=!1,nl=[],yr=null,vr=null,wr=null,Oo=new Map,Lo=new Map,lr=[],UT="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function zm(t,e){switch(t){case"focusin":case"focusout":yr=null;break;case"dragenter":case"dragleave":vr=null;break;case"mouseover":case"mouseout":wr=null;break;case"pointerover":case"pointerout":Oo.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Lo.delete(e.pointerId)}}function zs(t,e,n,r,i,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:r,nativeEvent:s,targetContainers:[i]},e!==null&&(e=ga(e),e!==null&&Df(e)),t):(t.eventSystemFlags|=r,e=t.targetContainers,i!==null&&e.indexOf(i)===-1&&e.push(i),t)}function FT(t,e,n,r,i){switch(e){case"focusin":return yr=zs(yr,t,e,n,r,i),!0;case"dragenter":return vr=zs(vr,t,e,n,r,i),!0;case"mouseover":return wr=zs(wr,t,e,n,r,i),!0;case"pointerover":var s=i.pointerId;return Oo.set(s,zs(Oo.get(s)||null,t,e,n,r,i)),!0;case"gotpointercapture":return s=i.pointerId,Lo.set(s,zs(Lo.get(s)||null,t,e,n,r,i)),!0}return!1}function y0(t){var e=Xr(t.target);if(e!==null){var n=ki(e);if(n!==null){if(e=n.tag,e===13){if(e=s0(n),e!==null){t.blockedOn=e,g0(t.priority,function(){p0(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function kl(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=ad(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var r=new n.constructor(n.type,n);td=r,n.target.dispatchEvent(r),td=null}else return e=ga(n),e!==null&&Df(e),t.blockedOn=n,!1;e.shift()}return!0}function Hm(t,e,n){kl(t)&&n.delete(e)}function VT(){od=!1,yr!==null&&kl(yr)&&(yr=null),vr!==null&&kl(vr)&&(vr=null),wr!==null&&kl(wr)&&(wr=null),Oo.forEach(Hm),Lo.forEach(Hm)}function Hs(t,e){t.blockedOn===e&&(t.blockedOn=null,od||(od=!0,Wt.unstable_scheduleCallback(Wt.unstable_NormalPriority,VT)))}function bo(t){function e(i){return Hs(i,t)}if(0<nl.length){Hs(nl[0],t);for(var n=1;n<nl.length;n++){var r=nl[n];r.blockedOn===t&&(r.blockedOn=null)}}for(yr!==null&&Hs(yr,t),vr!==null&&Hs(vr,t),wr!==null&&Hs(wr,t),Oo.forEach(e),Lo.forEach(e),n=0;n<lr.length;n++)r=lr[n],r.blockedOn===t&&(r.blockedOn=null);for(;0<lr.length&&(n=lr[0],n.blockedOn===null);)y0(n),n.blockedOn===null&&lr.shift()}var es=tr.ReactCurrentBatchConfig,Kl=!0;function BT(t,e,n,r){var i=ye,s=es.transition;es.transition=null;try{ye=1,Nf(t,e,n,r)}finally{ye=i,es.transition=s}}function jT(t,e,n,r){var i=ye,s=es.transition;es.transition=null;try{ye=4,Nf(t,e,n,r)}finally{ye=i,es.transition=s}}function Nf(t,e,n,r){if(Kl){var i=ad(t,e,n,r);if(i===null)th(t,e,r,Gl,n),zm(t,r);else if(FT(i,t,e,n,r))r.stopPropagation();else if(zm(t,r),e&4&&-1<UT.indexOf(t)){for(;i!==null;){var s=ga(i);if(s!==null&&f0(s),s=ad(t,e,n,r),s===null&&th(t,e,r,Gl,n),s===i)break;i=s}i!==null&&r.stopPropagation()}else th(t,e,r,null,n)}}var Gl=null;function ad(t,e,n,r){if(Gl=null,t=Rf(r),t=Xr(t),t!==null)if(e=ki(t),e===null)t=null;else if(n=e.tag,n===13){if(t=s0(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Gl=t,null}function v0(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xT()){case Af:return 1;case u0:return 4;case Wl:case DT:return 16;case c0:return 536870912;default:return 16}default:return 16}}var mr=null,Pf=null,Il=null;function w0(){if(Il)return Il;var t,e=Pf,n=e.length,r,i="value"in mr?mr.value:mr.textContent,s=i.length;for(t=0;t<n&&e[t]===i[t];t++);var o=n-t;for(r=1;r<=o&&e[n-r]===i[s-r];r++);return Il=i.slice(t,1<r?1-r:void 0)}function Cl(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function rl(){return!0}function Wm(){return!1}function Gt(t){function e(n,r,i,s,o){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?rl:Wm,this.isPropagationStopped=Wm,this}return Ne(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=rl)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=rl)},persist:function(){},isPersistent:rl}),e}var Cs={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Of=Gt(Cs),ma=Ne({},Cs,{view:0,detail:0}),zT=Gt(ma),qc,Kc,Ws,ju=Ne({},ma,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Lf,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Ws&&(Ws&&t.type==="mousemove"?(qc=t.screenX-Ws.screenX,Kc=t.screenY-Ws.screenY):Kc=qc=0,Ws=t),qc)},movementY:function(t){return"movementY"in t?t.movementY:Kc}}),qm=Gt(ju),HT=Ne({},ju,{dataTransfer:0}),WT=Gt(HT),qT=Ne({},ma,{relatedTarget:0}),Gc=Gt(qT),KT=Ne({},Cs,{animationName:0,elapsedTime:0,pseudoElement:0}),GT=Gt(KT),QT=Ne({},Cs,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),XT=Gt(QT),YT=Ne({},Cs,{data:0}),Km=Gt(YT),JT={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},ZT={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},ek={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function tk(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=ek[t])?!!e[t]:!1}function Lf(){return tk}var nk=Ne({},ma,{key:function(t){if(t.key){var e=JT[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=Cl(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?ZT[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Lf,charCode:function(t){return t.type==="keypress"?Cl(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?Cl(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),rk=Gt(nk),ik=Ne({},ju,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Gm=Gt(ik),sk=Ne({},ma,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Lf}),ok=Gt(sk),ak=Ne({},Cs,{propertyName:0,elapsedTime:0,pseudoElement:0}),lk=Gt(ak),uk=Ne({},ju,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),ck=Gt(uk),hk=[9,13,27,32],bf=qn&&"CompositionEvent"in window,po=null;qn&&"documentMode"in document&&(po=document.documentMode);var dk=qn&&"TextEvent"in window&&!po,E0=qn&&(!bf||po&&8<po&&11>=po),Qm=String.fromCharCode(32),Xm=!1;function _0(t,e){switch(t){case"keyup":return hk.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function S0(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var $i=!1;function fk(t,e){switch(t){case"compositionend":return S0(e);case"keypress":return e.which!==32?null:(Xm=!0,Qm);case"textInput":return t=e.data,t===Qm&&Xm?null:t;default:return null}}function pk(t,e){if($i)return t==="compositionend"||!bf&&_0(t,e)?(t=w0(),Il=Pf=mr=null,$i=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return E0&&e.locale!=="ko"?null:e.data;default:return null}}var mk={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ym(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!mk[t.type]:e==="textarea"}function T0(t,e,n,r){e0(r),e=Ql(e,"onChange"),0<e.length&&(n=new Of("onChange","change",null,n,r),t.push({event:n,listeners:e}))}var mo=null,Mo=null;function gk(t){L0(t,0)}function zu(t){var e=Vi(t);if(Kv(e))return t}function yk(t,e){if(t==="change")return e}var k0=!1;if(qn){var Qc;if(qn){var Xc="oninput"in document;if(!Xc){var Jm=document.createElement("div");Jm.setAttribute("oninput","return;"),Xc=typeof Jm.oninput=="function"}Qc=Xc}else Qc=!1;k0=Qc&&(!document.documentMode||9<document.documentMode)}function Zm(){mo&&(mo.detachEvent("onpropertychange",I0),Mo=mo=null)}function I0(t){if(t.propertyName==="value"&&zu(Mo)){var e=[];T0(e,Mo,t,Rf(t)),i0(gk,e)}}function vk(t,e,n){t==="focusin"?(Zm(),mo=e,Mo=n,mo.attachEvent("onpropertychange",I0)):t==="focusout"&&Zm()}function wk(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return zu(Mo)}function Ek(t,e){if(t==="click")return zu(e)}function _k(t,e){if(t==="input"||t==="change")return zu(e)}function Sk(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var yn=typeof Object.is=="function"?Object.is:Sk;function $o(t,e){if(yn(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!zh.call(e,i)||!yn(t[i],e[i]))return!1}return!0}function eg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function tg(t,e){var n=eg(t);t=0;for(var r;n;){if(n.nodeType===3){if(r=t+n.textContent.length,t<=e&&r>=e)return{node:n,offset:e-t};t=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=eg(n)}}function C0(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?C0(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function R0(){for(var t=window,e=jl();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=jl(t.document)}return e}function Mf(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function Tk(t){var e=R0(),n=t.focusedElem,r=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&C0(n.ownerDocument.documentElement,n)){if(r!==null&&Mf(n)){if(e=r.start,t=r.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var i=n.textContent.length,s=Math.min(r.start,i);r=r.end===void 0?s:Math.min(r.end,i),!t.extend&&s>r&&(i=r,r=s,s=i),i=tg(n,s);var o=tg(n,r);i&&o&&(t.rangeCount!==1||t.anchorNode!==i.node||t.anchorOffset!==i.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(i.node,i.offset),t.removeAllRanges(),s>r?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var kk=qn&&"documentMode"in document&&11>=document.documentMode,Ui=null,ld=null,go=null,ud=!1;function ng(t,e,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;ud||Ui==null||Ui!==jl(r)||(r=Ui,"selectionStart"in r&&Mf(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),go&&$o(go,r)||(go=r,r=Ql(ld,"onSelect"),0<r.length&&(e=new Of("onSelect","select",null,e,n),t.push({event:e,listeners:r}),e.target=Ui)))}function il(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Fi={animationend:il("Animation","AnimationEnd"),animationiteration:il("Animation","AnimationIteration"),animationstart:il("Animation","AnimationStart"),transitionend:il("Transition","TransitionEnd")},Yc={},A0={};qn&&(A0=document.createElement("div").style,"AnimationEvent"in window||(delete Fi.animationend.animation,delete Fi.animationiteration.animation,delete Fi.animationstart.animation),"TransitionEvent"in window||delete Fi.transitionend.transition);function Hu(t){if(Yc[t])return Yc[t];if(!Fi[t])return t;var e=Fi[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in A0)return Yc[t]=e[n];return t}var x0=Hu("animationend"),D0=Hu("animationiteration"),N0=Hu("animationstart"),P0=Hu("transitionend"),O0=new Map,rg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(t,e){O0.set(t,e),Ti(e,[t])}for(var Jc=0;Jc<rg.length;Jc++){var Zc=rg[Jc],Ik=Zc.toLowerCase(),Ck=Zc[0].toUpperCase()+Zc.slice(1);Mr(Ik,"on"+Ck)}Mr(x0,"onAnimationEnd");Mr(D0,"onAnimationIteration");Mr(N0,"onAnimationStart");Mr("dblclick","onDoubleClick");Mr("focusin","onFocus");Mr("focusout","onBlur");Mr(P0,"onTransitionEnd");cs("onMouseEnter",["mouseout","mouseover"]);cs("onMouseLeave",["mouseout","mouseover"]);cs("onPointerEnter",["pointerout","pointerover"]);cs("onPointerLeave",["pointerout","pointerover"]);Ti("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ti("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ti("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ti("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ti("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ti("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var io="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Rk=new Set("cancel close invalid load scroll toggle".split(" ").concat(io));function ig(t,e,n){var r=t.type||"unknown-event";t.currentTarget=n,IT(r,e,void 0,t),t.currentTarget=null}function L0(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var r=t[n],i=r.event;r=r.listeners;e:{var s=void 0;if(e)for(var o=r.length-1;0<=o;o--){var a=r[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&i.isPropagationStopped())break e;ig(i,a,u),s=l}else for(o=0;o<r.length;o++){if(a=r[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&i.isPropagationStopped())break e;ig(i,a,u),s=l}}}if(Hl)throw t=id,Hl=!1,id=null,t}function Te(t,e){var n=e[pd];n===void 0&&(n=e[pd]=new Set);var r=t+"__bubble";n.has(r)||(b0(e,t,2,!1),n.add(r))}function eh(t,e,n){var r=0;e&&(r|=4),b0(n,t,r,e)}var sl="_reactListening"+Math.random().toString(36).slice(2);function Uo(t){if(!t[sl]){t[sl]=!0,jv.forEach(function(n){n!=="selectionchange"&&(Rk.has(n)||eh(n,!1,t),eh(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[sl]||(e[sl]=!0,eh("selectionchange",!1,e))}}function b0(t,e,n,r){switch(v0(e)){case 1:var i=BT;break;case 4:i=jT;break;default:i=Nf}n=i.bind(null,e,n,t),i=void 0,!rd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(i=!0),r?i!==void 0?t.addEventListener(e,n,{capture:!0,passive:i}):t.addEventListener(e,n,!0):i!==void 0?t.addEventListener(e,n,{passive:i}):t.addEventListener(e,n,!1)}function th(t,e,n,r,i){var s=r;if(!(e&1)&&!(e&2)&&r!==null)e:for(;;){if(r===null)return;var o=r.tag;if(o===3||o===4){var a=r.stateNode.containerInfo;if(a===i||a.nodeType===8&&a.parentNode===i)break;if(o===4)for(o=r.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===i||l.nodeType===8&&l.parentNode===i))return;o=o.return}for(;a!==null;){if(o=Xr(a),o===null)return;if(l=o.tag,l===5||l===6){r=s=o;continue e}a=a.parentNode}}r=r.return}i0(function(){var u=s,h=Rf(n),d=[];e:{var c=O0.get(t);if(c!==void 0){var f=Of,g=t;switch(t){case"keypress":if(Cl(n)===0)break e;case"keydown":case"keyup":f=rk;break;case"focusin":g="focus",f=Gc;break;case"focusout":g="blur",f=Gc;break;case"beforeblur":case"afterblur":f=Gc;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":f=qm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":f=WT;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":f=ok;break;case x0:case D0:case N0:f=GT;break;case P0:f=lk;break;case"scroll":f=zT;break;case"wheel":f=ck;break;case"copy":case"cut":case"paste":f=XT;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":f=Gm}var E=(e&4)!==0,C=!E&&t==="scroll",m=E?c!==null?c+"Capture":null:c;E=[];for(var p=u,y;p!==null;){y=p;var S=y.stateNode;if(y.tag===5&&S!==null&&(y=S,m!==null&&(S=Po(p,m),S!=null&&E.push(Fo(p,S,y)))),C)break;p=p.return}0<E.length&&(c=new f(c,g,null,n,h),d.push({event:c,listeners:E}))}}if(!(e&7)){e:{if(c=t==="mouseover"||t==="pointerover",f=t==="mouseout"||t==="pointerout",c&&n!==td&&(g=n.relatedTarget||n.fromElement)&&(Xr(g)||g[Kn]))break e;if((f||c)&&(c=h.window===h?h:(c=h.ownerDocument)?c.defaultView||c.parentWindow:window,f?(g=n.relatedTarget||n.toElement,f=u,g=g?Xr(g):null,g!==null&&(C=ki(g),g!==C||g.tag!==5&&g.tag!==6)&&(g=null)):(f=null,g=u),f!==g)){if(E=qm,S="onMouseLeave",m="onMouseEnter",p="mouse",(t==="pointerout"||t==="pointerover")&&(E=Gm,S="onPointerLeave",m="onPointerEnter",p="pointer"),C=f==null?c:Vi(f),y=g==null?c:Vi(g),c=new E(S,p+"leave",f,n,h),c.target=C,c.relatedTarget=y,S=null,Xr(h)===u&&(E=new E(m,p+"enter",g,n,h),E.target=y,E.relatedTarget=C,S=E),C=S,f&&g)t:{for(E=f,m=g,p=0,y=E;y;y=Ni(y))p++;for(y=0,S=m;S;S=Ni(S))y++;for(;0<p-y;)E=Ni(E),p--;for(;0<y-p;)m=Ni(m),y--;for(;p--;){if(E===m||m!==null&&E===m.alternate)break t;E=Ni(E),m=Ni(m)}E=null}else E=null;f!==null&&sg(d,c,f,E,!1),g!==null&&C!==null&&sg(d,C,g,E,!0)}}e:{if(c=u?Vi(u):window,f=c.nodeName&&c.nodeName.toLowerCase(),f==="select"||f==="input"&&c.type==="file")var x=yk;else if(Ym(c))if(k0)x=_k;else{x=wk;var O=vk}else(f=c.nodeName)&&f.toLowerCase()==="input"&&(c.type==="checkbox"||c.type==="radio")&&(x=Ek);if(x&&(x=x(t,u))){T0(d,x,n,h);break e}O&&O(t,c,u),t==="focusout"&&(O=c._wrapperState)&&O.controlled&&c.type==="number"&&Xh(c,"number",c.value)}switch(O=u?Vi(u):window,t){case"focusin":(Ym(O)||O.contentEditable==="true")&&(Ui=O,ld=u,go=null);break;case"focusout":go=ld=Ui=null;break;case"mousedown":ud=!0;break;case"contextmenu":case"mouseup":case"dragend":ud=!1,ng(d,n,h);break;case"selectionchange":if(kk)break;case"keydown":case"keyup":ng(d,n,h)}var L;if(bf)e:{switch(t){case"compositionstart":var M="onCompositionStart";break e;case"compositionend":M="onCompositionEnd";break e;case"compositionupdate":M="onCompositionUpdate";break e}M=void 0}else $i?_0(t,n)&&(M="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(M="onCompositionStart");M&&(E0&&n.locale!=="ko"&&($i||M!=="onCompositionStart"?M==="onCompositionEnd"&&$i&&(L=w0()):(mr=h,Pf="value"in mr?mr.value:mr.textContent,$i=!0)),O=Ql(u,M),0<O.length&&(M=new Km(M,t,null,n,h),d.push({event:M,listeners:O}),L?M.data=L:(L=S0(n),L!==null&&(M.data=L)))),(L=dk?fk(t,n):pk(t,n))&&(u=Ql(u,"onBeforeInput"),0<u.length&&(h=new Km("onBeforeInput","beforeinput",null,n,h),d.push({event:h,listeners:u}),h.data=L))}L0(d,e)})}function Fo(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ql(t,e){for(var n=e+"Capture",r=[];t!==null;){var i=t,s=i.stateNode;i.tag===5&&s!==null&&(i=s,s=Po(t,n),s!=null&&r.unshift(Fo(t,s,i)),s=Po(t,e),s!=null&&r.push(Fo(t,s,i))),t=t.return}return r}function Ni(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function sg(t,e,n,r,i){for(var s=e._reactName,o=[];n!==null&&n!==r;){var a=n,l=a.alternate,u=a.stateNode;if(l!==null&&l===r)break;a.tag===5&&u!==null&&(a=u,i?(l=Po(n,s),l!=null&&o.unshift(Fo(n,l,a))):i||(l=Po(n,s),l!=null&&o.push(Fo(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var Ak=/\r\n?/g,xk=/\u0000|\uFFFD/g;function og(t){return(typeof t=="string"?t:""+t).replace(Ak,`
`).replace(xk,"")}function ol(t,e,n){if(e=og(e),og(t)!==e&&n)throw Error(R(425))}function Xl(){}var cd=null,hd=null;function dd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fd=typeof setTimeout=="function"?setTimeout:void 0,Dk=typeof clearTimeout=="function"?clearTimeout:void 0,ag=typeof Promise=="function"?Promise:void 0,Nk=typeof queueMicrotask=="function"?queueMicrotask:typeof ag<"u"?function(t){return ag.resolve(null).then(t).catch(Pk)}:fd;function Pk(t){setTimeout(function(){throw t})}function nh(t,e){var n=e,r=0;do{var i=n.nextSibling;if(t.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){t.removeChild(i),bo(e);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);bo(e)}function Er(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function lg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Rs=Math.random().toString(36).slice(2),Sn="__reactFiber$"+Rs,Vo="__reactProps$"+Rs,Kn="__reactContainer$"+Rs,pd="__reactEvents$"+Rs,Ok="__reactListeners$"+Rs,Lk="__reactHandles$"+Rs;function Xr(t){var e=t[Sn];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Kn]||n[Sn]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=lg(t);t!==null;){if(n=t[Sn])return n;t=lg(t)}return e}t=n,n=t.parentNode}return null}function ga(t){return t=t[Sn]||t[Kn],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function Vi(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(R(33))}function Wu(t){return t[Vo]||null}var md=[],Bi=-1;function $r(t){return{current:t}}function ke(t){0>Bi||(t.current=md[Bi],md[Bi]=null,Bi--)}function _e(t,e){Bi++,md[Bi]=t.current,t.current=e}var Dr={},Et=$r(Dr),bt=$r(!1),ci=Dr;function hs(t,e){var n=t.type.contextTypes;if(!n)return Dr;var r=t.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===e)return r.__reactInternalMemoizedMaskedChildContext;var i={},s;for(s in n)i[s]=e[s];return r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=i),i}function Mt(t){return t=t.childContextTypes,t!=null}function Yl(){ke(bt),ke(Et)}function ug(t,e,n){if(Et.current!==Dr)throw Error(R(168));_e(Et,e),_e(bt,n)}function M0(t,e,n){var r=t.stateNode;if(e=e.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in e))throw Error(R(108,vT(t)||"Unknown",i));return Ne({},n,r)}function Jl(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Dr,ci=Et.current,_e(Et,t),_e(bt,bt.current),!0}function cg(t,e,n){var r=t.stateNode;if(!r)throw Error(R(169));n?(t=M0(t,e,ci),r.__reactInternalMemoizedMergedChildContext=t,ke(bt),ke(Et),_e(Et,t)):ke(bt),_e(bt,n)}var Fn=null,qu=!1,rh=!1;function $0(t){Fn===null?Fn=[t]:Fn.push(t)}function bk(t){qu=!0,$0(t)}function Ur(){if(!rh&&Fn!==null){rh=!0;var t=0,e=ye;try{var n=Fn;for(ye=1;t<n.length;t++){var r=n[t];do r=r(!0);while(r!==null)}Fn=null,qu=!1}catch(i){throw Fn!==null&&(Fn=Fn.slice(t+1)),l0(Af,Ur),i}finally{ye=e,rh=!1}}return null}var ji=[],zi=0,Zl=null,eu=0,Yt=[],Jt=0,hi=null,Vn=1,Bn="";function Hr(t,e){ji[zi++]=eu,ji[zi++]=Zl,Zl=t,eu=e}function U0(t,e,n){Yt[Jt++]=Vn,Yt[Jt++]=Bn,Yt[Jt++]=hi,hi=t;var r=Vn;t=Bn;var i=32-mn(r)-1;r&=~(1<<i),n+=1;var s=32-mn(e)+i;if(30<s){var o=i-i%5;s=(r&(1<<o)-1).toString(32),r>>=o,i-=o,Vn=1<<32-mn(e)+i|n<<i|r,Bn=s+t}else Vn=1<<s|n<<i|r,Bn=t}function $f(t){t.return!==null&&(Hr(t,1),U0(t,1,0))}function Uf(t){for(;t===Zl;)Zl=ji[--zi],ji[zi]=null,eu=ji[--zi],ji[zi]=null;for(;t===hi;)hi=Yt[--Jt],Yt[Jt]=null,Bn=Yt[--Jt],Yt[Jt]=null,Vn=Yt[--Jt],Yt[Jt]=null}var zt=null,Vt=null,Ce=!1,dn=null;function F0(t,e){var n=Zt(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function hg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,zt=t,Vt=Er(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,zt=t,Vt=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=hi!==null?{id:Vn,overflow:Bn}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=Zt(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,zt=t,Vt=null,!0):!1;default:return!1}}function gd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function yd(t){if(Ce){var e=Vt;if(e){var n=e;if(!hg(t,e)){if(gd(t))throw Error(R(418));e=Er(n.nextSibling);var r=zt;e&&hg(t,e)?F0(r,n):(t.flags=t.flags&-4097|2,Ce=!1,zt=t)}}else{if(gd(t))throw Error(R(418));t.flags=t.flags&-4097|2,Ce=!1,zt=t}}}function dg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;zt=t}function al(t){if(t!==zt)return!1;if(!Ce)return dg(t),Ce=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!dd(t.type,t.memoizedProps)),e&&(e=Vt)){if(gd(t))throw V0(),Error(R(418));for(;e;)F0(t,e),e=Er(e.nextSibling)}if(dg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(R(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){Vt=Er(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}Vt=null}}else Vt=zt?Er(t.stateNode.nextSibling):null;return!0}function V0(){for(var t=Vt;t;)t=Er(t.nextSibling)}function ds(){Vt=zt=null,Ce=!1}function Ff(t){dn===null?dn=[t]:dn.push(t)}var Mk=tr.ReactCurrentBatchConfig;function cn(t,e){if(t&&t.defaultProps){e=Ne({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}var tu=$r(null),nu=null,Hi=null,Vf=null;function Bf(){Vf=Hi=nu=null}function jf(t){var e=tu.current;ke(tu),t._currentValue=e}function vd(t,e,n){for(;t!==null;){var r=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,r!==null&&(r.childLanes|=e)):r!==null&&(r.childLanes&e)!==e&&(r.childLanes|=e),t===n)break;t=t.return}}function ts(t,e){nu=t,Vf=Hi=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Lt=!0),t.firstContext=null)}function tn(t){var e=t._currentValue;if(Vf!==t)if(t={context:t,memoizedValue:e,next:null},Hi===null){if(nu===null)throw Error(R(308));Hi=t,nu.dependencies={lanes:0,firstContext:t}}else Hi=Hi.next=t;return e}var Yr=null;function zf(t){Yr===null?Yr=[t]:Yr.push(t)}function B0(t,e,n,r){var i=e.interleaved;return i===null?(n.next=n,zf(e)):(n.next=i.next,i.next=n),e.interleaved=n,Gn(t,r)}function Gn(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var ar=!1;function Hf(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function j0(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Wn(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function _r(t,e,n){var r=t.updateQueue;if(r===null)return null;if(r=r.shared,pe&2){var i=r.pending;return i===null?e.next=e:(e.next=i.next,i.next=e),r.pending=e,Gn(t,n)}return i=r.interleaved,i===null?(e.next=e,zf(r)):(e.next=i.next,i.next=e),r.interleaved=e,Gn(t,n)}function Rl(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,xf(t,n)}}function fg(t,e){var n=t.updateQueue,r=t.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?i=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?i=s=e:s=s.next=e}else i=s=e;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:s,shared:r.shared,effects:r.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function ru(t,e,n,r){var i=t.updateQueue;ar=!1;var s=i.firstBaseUpdate,o=i.lastBaseUpdate,a=i.shared.pending;if(a!==null){i.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var h=t.alternate;h!==null&&(h=h.updateQueue,a=h.lastBaseUpdate,a!==o&&(a===null?h.firstBaseUpdate=u:a.next=u,h.lastBaseUpdate=l))}if(s!==null){var d=i.baseState;o=0,h=u=l=null,a=s;do{var c=a.lane,f=a.eventTime;if((r&c)===c){h!==null&&(h=h.next={eventTime:f,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,E=a;switch(c=e,f=n,E.tag){case 1:if(g=E.payload,typeof g=="function"){d=g.call(f,d,c);break e}d=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=E.payload,c=typeof g=="function"?g.call(f,d,c):g,c==null)break e;d=Ne({},d,c);break e;case 2:ar=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,c=i.effects,c===null?i.effects=[a]:c.push(a))}else f={eventTime:f,lane:c,tag:a.tag,payload:a.payload,callback:a.callback,next:null},h===null?(u=h=f,l=d):h=h.next=f,o|=c;if(a=a.next,a===null){if(a=i.shared.pending,a===null)break;c=a,a=c.next,c.next=null,i.lastBaseUpdate=c,i.shared.pending=null}}while(1);if(h===null&&(l=d),i.baseState=l,i.firstBaseUpdate=u,i.lastBaseUpdate=h,e=i.shared.interleaved,e!==null){i=e;do o|=i.lane,i=i.next;while(i!==e)}else s===null&&(i.shared.lanes=0);fi|=o,t.lanes=o,t.memoizedState=d}}function pg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var r=t[e],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(R(191,i));i.call(r)}}}var z0=new Bv.Component().refs;function wd(t,e,n,r){e=t.memoizedState,n=n(r,e),n=n==null?e:Ne({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var Ku={isMounted:function(t){return(t=t._reactInternals)?ki(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var r=At(),i=Tr(t),s=Wn(r,i);s.payload=e,n!=null&&(s.callback=n),e=_r(t,s,i),e!==null&&(gn(e,t,i,r),Rl(e,t,i))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var r=At(),i=Tr(t),s=Wn(r,i);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=_r(t,s,i),e!==null&&(gn(e,t,i,r),Rl(e,t,i))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=At(),r=Tr(t),i=Wn(n,r);i.tag=2,e!=null&&(i.callback=e),e=_r(t,i,r),e!==null&&(gn(e,t,r,n),Rl(e,t,r))}};function mg(t,e,n,r,i,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(r,s,o):e.prototype&&e.prototype.isPureReactComponent?!$o(n,r)||!$o(i,s):!0}function H0(t,e,n){var r=!1,i=Dr,s=e.contextType;return typeof s=="object"&&s!==null?s=tn(s):(i=Mt(e)?ci:Et.current,r=e.contextTypes,s=(r=r!=null)?hs(t,i):Dr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=Ku,t.stateNode=e,e._reactInternals=t,r&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=i,t.__reactInternalMemoizedMaskedChildContext=s),e}function gg(t,e,n,r){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,r),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,r),e.state!==t&&Ku.enqueueReplaceState(e,e.state,null)}function Ed(t,e,n,r){var i=t.stateNode;i.props=n,i.state=t.memoizedState,i.refs=z0,Hf(t);var s=e.contextType;typeof s=="object"&&s!==null?i.context=tn(s):(s=Mt(e)?ci:Et.current,i.context=hs(t,s)),i.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(wd(t,e,s,n),i.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(e=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),e!==i.state&&Ku.enqueueReplaceState(i,i.state,null),ru(t,n,i,r),i.state=t.memoizedState),typeof i.componentDidMount=="function"&&(t.flags|=4194308)}function qs(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(R(309));var r=n.stateNode}if(!r)throw Error(R(147,t));var i=r,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=i.refs;a===z0&&(a=i.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(R(284));if(!n._owner)throw Error(R(290,t))}return t}function ll(t,e){throw t=Object.prototype.toString.call(e),Error(R(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function yg(t){var e=t._init;return e(t._payload)}function W0(t){function e(m,p){if(t){var y=m.deletions;y===null?(m.deletions=[p],m.flags|=16):y.push(p)}}function n(m,p){if(!t)return null;for(;p!==null;)e(m,p),p=p.sibling;return null}function r(m,p){for(m=new Map;p!==null;)p.key!==null?m.set(p.key,p):m.set(p.index,p),p=p.sibling;return m}function i(m,p){return m=kr(m,p),m.index=0,m.sibling=null,m}function s(m,p,y){return m.index=y,t?(y=m.alternate,y!==null?(y=y.index,y<p?(m.flags|=2,p):y):(m.flags|=2,p)):(m.flags|=1048576,p)}function o(m){return t&&m.alternate===null&&(m.flags|=2),m}function a(m,p,y,S){return p===null||p.tag!==6?(p=ch(y,m.mode,S),p.return=m,p):(p=i(p,y),p.return=m,p)}function l(m,p,y,S){var x=y.type;return x===Mi?h(m,p,y.props.children,S,y.key):p!==null&&(p.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===or&&yg(x)===p.type)?(S=i(p,y.props),S.ref=qs(m,p,y),S.return=m,S):(S=Ol(y.type,y.key,y.props,null,m.mode,S),S.ref=qs(m,p,y),S.return=m,S)}function u(m,p,y,S){return p===null||p.tag!==4||p.stateNode.containerInfo!==y.containerInfo||p.stateNode.implementation!==y.implementation?(p=hh(y,m.mode,S),p.return=m,p):(p=i(p,y.children||[]),p.return=m,p)}function h(m,p,y,S,x){return p===null||p.tag!==7?(p=si(y,m.mode,S,x),p.return=m,p):(p=i(p,y),p.return=m,p)}function d(m,p,y){if(typeof p=="string"&&p!==""||typeof p=="number")return p=ch(""+p,m.mode,y),p.return=m,p;if(typeof p=="object"&&p!==null){switch(p.$$typeof){case Ya:return y=Ol(p.type,p.key,p.props,null,m.mode,y),y.ref=qs(m,null,p),y.return=m,y;case bi:return p=hh(p,m.mode,y),p.return=m,p;case or:var S=p._init;return d(m,S(p._payload),y)}if(no(p)||Bs(p))return p=si(p,m.mode,y,null),p.return=m,p;ll(m,p)}return null}function c(m,p,y,S){var x=p!==null?p.key:null;if(typeof y=="string"&&y!==""||typeof y=="number")return x!==null?null:a(m,p,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case Ya:return y.key===x?l(m,p,y,S):null;case bi:return y.key===x?u(m,p,y,S):null;case or:return x=y._init,c(m,p,x(y._payload),S)}if(no(y)||Bs(y))return x!==null?null:h(m,p,y,S,null);ll(m,y)}return null}function f(m,p,y,S,x){if(typeof S=="string"&&S!==""||typeof S=="number")return m=m.get(y)||null,a(p,m,""+S,x);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case Ya:return m=m.get(S.key===null?y:S.key)||null,l(p,m,S,x);case bi:return m=m.get(S.key===null?y:S.key)||null,u(p,m,S,x);case or:var O=S._init;return f(m,p,y,O(S._payload),x)}if(no(S)||Bs(S))return m=m.get(y)||null,h(p,m,S,x,null);ll(p,S)}return null}function g(m,p,y,S){for(var x=null,O=null,L=p,M=p=0,J=null;L!==null&&M<y.length;M++){L.index>M?(J=L,L=null):J=L.sibling;var W=c(m,L,y[M],S);if(W===null){L===null&&(L=J);break}t&&L&&W.alternate===null&&e(m,L),p=s(W,p,M),O===null?x=W:O.sibling=W,O=W,L=J}if(M===y.length)return n(m,L),Ce&&Hr(m,M),x;if(L===null){for(;M<y.length;M++)L=d(m,y[M],S),L!==null&&(p=s(L,p,M),O===null?x=L:O.sibling=L,O=L);return Ce&&Hr(m,M),x}for(L=r(m,L);M<y.length;M++)J=f(L,m,M,y[M],S),J!==null&&(t&&J.alternate!==null&&L.delete(J.key===null?M:J.key),p=s(J,p,M),O===null?x=J:O.sibling=J,O=J);return t&&L.forEach(function(q){return e(m,q)}),Ce&&Hr(m,M),x}function E(m,p,y,S){var x=Bs(y);if(typeof x!="function")throw Error(R(150));if(y=x.call(y),y==null)throw Error(R(151));for(var O=x=null,L=p,M=p=0,J=null,W=y.next();L!==null&&!W.done;M++,W=y.next()){L.index>M?(J=L,L=null):J=L.sibling;var q=c(m,L,W.value,S);if(q===null){L===null&&(L=J);break}t&&L&&q.alternate===null&&e(m,L),p=s(q,p,M),O===null?x=q:O.sibling=q,O=q,L=J}if(W.done)return n(m,L),Ce&&Hr(m,M),x;if(L===null){for(;!W.done;M++,W=y.next())W=d(m,W.value,S),W!==null&&(p=s(W,p,M),O===null?x=W:O.sibling=W,O=W);return Ce&&Hr(m,M),x}for(L=r(m,L);!W.done;M++,W=y.next())W=f(L,m,M,W.value,S),W!==null&&(t&&W.alternate!==null&&L.delete(W.key===null?M:W.key),p=s(W,p,M),O===null?x=W:O.sibling=W,O=W);return t&&L.forEach(function(ae){return e(m,ae)}),Ce&&Hr(m,M),x}function C(m,p,y,S){if(typeof y=="object"&&y!==null&&y.type===Mi&&y.key===null&&(y=y.props.children),typeof y=="object"&&y!==null){switch(y.$$typeof){case Ya:e:{for(var x=y.key,O=p;O!==null;){if(O.key===x){if(x=y.type,x===Mi){if(O.tag===7){n(m,O.sibling),p=i(O,y.props.children),p.return=m,m=p;break e}}else if(O.elementType===x||typeof x=="object"&&x!==null&&x.$$typeof===or&&yg(x)===O.type){n(m,O.sibling),p=i(O,y.props),p.ref=qs(m,O,y),p.return=m,m=p;break e}n(m,O);break}else e(m,O);O=O.sibling}y.type===Mi?(p=si(y.props.children,m.mode,S,y.key),p.return=m,m=p):(S=Ol(y.type,y.key,y.props,null,m.mode,S),S.ref=qs(m,p,y),S.return=m,m=S)}return o(m);case bi:e:{for(O=y.key;p!==null;){if(p.key===O)if(p.tag===4&&p.stateNode.containerInfo===y.containerInfo&&p.stateNode.implementation===y.implementation){n(m,p.sibling),p=i(p,y.children||[]),p.return=m,m=p;break e}else{n(m,p);break}else e(m,p);p=p.sibling}p=hh(y,m.mode,S),p.return=m,m=p}return o(m);case or:return O=y._init,C(m,p,O(y._payload),S)}if(no(y))return g(m,p,y,S);if(Bs(y))return E(m,p,y,S);ll(m,y)}return typeof y=="string"&&y!==""||typeof y=="number"?(y=""+y,p!==null&&p.tag===6?(n(m,p.sibling),p=i(p,y),p.return=m,m=p):(n(m,p),p=ch(y,m.mode,S),p.return=m,m=p),o(m)):n(m,p)}return C}var fs=W0(!0),q0=W0(!1),ya={},Rn=$r(ya),Bo=$r(ya),jo=$r(ya);function Jr(t){if(t===ya)throw Error(R(174));return t}function Wf(t,e){switch(_e(jo,e),_e(Bo,t),_e(Rn,ya),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Jh(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=Jh(e,t)}ke(Rn),_e(Rn,e)}function ps(){ke(Rn),ke(Bo),ke(jo)}function K0(t){Jr(jo.current);var e=Jr(Rn.current),n=Jh(e,t.type);e!==n&&(_e(Bo,t),_e(Rn,n))}function qf(t){Bo.current===t&&(ke(Rn),ke(Bo))}var xe=$r(0);function iu(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var ih=[];function Kf(){for(var t=0;t<ih.length;t++)ih[t]._workInProgressVersionPrimary=null;ih.length=0}var Al=tr.ReactCurrentDispatcher,sh=tr.ReactCurrentBatchConfig,di=0,De=null,We=null,Ze=null,su=!1,yo=!1,zo=0,$k=0;function dt(){throw Error(R(321))}function Gf(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!yn(t[n],e[n]))return!1;return!0}function Qf(t,e,n,r,i,s){if(di=s,De=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,Al.current=t===null||t.memoizedState===null?Bk:jk,t=n(r,i),yo){s=0;do{if(yo=!1,zo=0,25<=s)throw Error(R(301));s+=1,Ze=We=null,e.updateQueue=null,Al.current=zk,t=n(r,i)}while(yo)}if(Al.current=ou,e=We!==null&&We.next!==null,di=0,Ze=We=De=null,su=!1,e)throw Error(R(300));return t}function Xf(){var t=zo!==0;return zo=0,t}function _n(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ze===null?De.memoizedState=Ze=t:Ze=Ze.next=t,Ze}function nn(){if(We===null){var t=De.alternate;t=t!==null?t.memoizedState:null}else t=We.next;var e=Ze===null?De.memoizedState:Ze.next;if(e!==null)Ze=e,We=t;else{if(t===null)throw Error(R(310));We=t,t={memoizedState:We.memoizedState,baseState:We.baseState,baseQueue:We.baseQueue,queue:We.queue,next:null},Ze===null?De.memoizedState=Ze=t:Ze=Ze.next=t}return Ze}function Ho(t,e){return typeof e=="function"?e(t):e}function oh(t){var e=nn(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=We,i=r.baseQueue,s=n.pending;if(s!==null){if(i!==null){var o=i.next;i.next=s.next,s.next=o}r.baseQueue=i=s,n.pending=null}if(i!==null){s=i.next,r=r.baseState;var a=o=null,l=null,u=s;do{var h=u.lane;if((di&h)===h)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:t(r,u.action);else{var d={lane:h,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=r):l=l.next=d,De.lanes|=h,fi|=h}u=u.next}while(u!==null&&u!==s);l===null?o=r:l.next=a,yn(r,e.memoizedState)||(Lt=!0),e.memoizedState=r,e.baseState=o,e.baseQueue=l,n.lastRenderedState=r}if(t=n.interleaved,t!==null){i=t;do s=i.lane,De.lanes|=s,fi|=s,i=i.next;while(i!==t)}else i===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function ah(t){var e=nn(),n=e.queue;if(n===null)throw Error(R(311));n.lastRenderedReducer=t;var r=n.dispatch,i=n.pending,s=e.memoizedState;if(i!==null){n.pending=null;var o=i=i.next;do s=t(s,o.action),o=o.next;while(o!==i);yn(s,e.memoizedState)||(Lt=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,r]}function G0(){}function Q0(t,e){var n=De,r=nn(),i=e(),s=!yn(r.memoizedState,i);if(s&&(r.memoizedState=i,Lt=!0),r=r.queue,Yf(J0.bind(null,n,r,t),[t]),r.getSnapshot!==e||s||Ze!==null&&Ze.memoizedState.tag&1){if(n.flags|=2048,Wo(9,Y0.bind(null,n,r,i,e),void 0,null),et===null)throw Error(R(349));di&30||X0(n,e,i)}return i}function X0(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=De.updateQueue,e===null?(e={lastEffect:null,stores:null},De.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function Y0(t,e,n,r){e.value=n,e.getSnapshot=r,Z0(e)&&ew(t)}function J0(t,e,n){return n(function(){Z0(e)&&ew(t)})}function Z0(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!yn(t,n)}catch{return!0}}function ew(t){var e=Gn(t,1);e!==null&&gn(e,t,1,-1)}function vg(t){var e=_n();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ho,lastRenderedState:t},e.queue=t,t=t.dispatch=Vk.bind(null,De,t),[e.memoizedState,t]}function Wo(t,e,n,r){return t={tag:t,create:e,destroy:n,deps:r,next:null},e=De.updateQueue,e===null?(e={lastEffect:null,stores:null},De.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(r=n.next,n.next=t,t.next=r,e.lastEffect=t)),t}function tw(){return nn().memoizedState}function xl(t,e,n,r){var i=_n();De.flags|=t,i.memoizedState=Wo(1|e,n,void 0,r===void 0?null:r)}function Gu(t,e,n,r){var i=nn();r=r===void 0?null:r;var s=void 0;if(We!==null){var o=We.memoizedState;if(s=o.destroy,r!==null&&Gf(r,o.deps)){i.memoizedState=Wo(e,n,s,r);return}}De.flags|=t,i.memoizedState=Wo(1|e,n,s,r)}function wg(t,e){return xl(8390656,8,t,e)}function Yf(t,e){return Gu(2048,8,t,e)}function nw(t,e){return Gu(4,2,t,e)}function rw(t,e){return Gu(4,4,t,e)}function iw(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function sw(t,e,n){return n=n!=null?n.concat([t]):null,Gu(4,4,iw.bind(null,e,t),n)}function Jf(){}function ow(t,e){var n=nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gf(e,r[1])?r[0]:(n.memoizedState=[t,e],t)}function aw(t,e){var n=nn();e=e===void 0?null:e;var r=n.memoizedState;return r!==null&&e!==null&&Gf(e,r[1])?r[0]:(t=t(),n.memoizedState=[t,e],t)}function lw(t,e,n){return di&21?(yn(n,e)||(n=h0(),De.lanes|=n,fi|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Lt=!0),t.memoizedState=n)}function Uk(t,e){var n=ye;ye=n!==0&&4>n?n:4,t(!0);var r=sh.transition;sh.transition={};try{t(!1),e()}finally{ye=n,sh.transition=r}}function uw(){return nn().memoizedState}function Fk(t,e,n){var r=Tr(t);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},cw(t))hw(e,n);else if(n=B0(t,e,n,r),n!==null){var i=At();gn(n,t,r,i),dw(n,e,r)}}function Vk(t,e,n){var r=Tr(t),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(cw(t))hw(e,i);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(i.hasEagerState=!0,i.eagerState=a,yn(a,o)){var l=e.interleaved;l===null?(i.next=i,zf(e)):(i.next=l.next,l.next=i),e.interleaved=i;return}}catch{}finally{}n=B0(t,e,i,r),n!==null&&(i=At(),gn(n,t,r,i),dw(n,e,r))}}function cw(t){var e=t.alternate;return t===De||e!==null&&e===De}function hw(t,e){yo=su=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function dw(t,e,n){if(n&4194240){var r=e.lanes;r&=t.pendingLanes,n|=r,e.lanes=n,xf(t,n)}}var ou={readContext:tn,useCallback:dt,useContext:dt,useEffect:dt,useImperativeHandle:dt,useInsertionEffect:dt,useLayoutEffect:dt,useMemo:dt,useReducer:dt,useRef:dt,useState:dt,useDebugValue:dt,useDeferredValue:dt,useTransition:dt,useMutableSource:dt,useSyncExternalStore:dt,useId:dt,unstable_isNewReconciler:!1},Bk={readContext:tn,useCallback:function(t,e){return _n().memoizedState=[t,e===void 0?null:e],t},useContext:tn,useEffect:wg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,xl(4194308,4,iw.bind(null,e,t),n)},useLayoutEffect:function(t,e){return xl(4194308,4,t,e)},useInsertionEffect:function(t,e){return xl(4,2,t,e)},useMemo:function(t,e){var n=_n();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var r=_n();return e=n!==void 0?n(e):e,r.memoizedState=r.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},r.queue=t,t=t.dispatch=Fk.bind(null,De,t),[r.memoizedState,t]},useRef:function(t){var e=_n();return t={current:t},e.memoizedState=t},useState:vg,useDebugValue:Jf,useDeferredValue:function(t){return _n().memoizedState=t},useTransition:function(){var t=vg(!1),e=t[0];return t=Uk.bind(null,t[1]),_n().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var r=De,i=_n();if(Ce){if(n===void 0)throw Error(R(407));n=n()}else{if(n=e(),et===null)throw Error(R(349));di&30||X0(r,e,n)}i.memoizedState=n;var s={value:n,getSnapshot:e};return i.queue=s,wg(J0.bind(null,r,s,t),[t]),r.flags|=2048,Wo(9,Y0.bind(null,r,s,n,e),void 0,null),n},useId:function(){var t=_n(),e=et.identifierPrefix;if(Ce){var n=Bn,r=Vn;n=(r&~(1<<32-mn(r)-1)).toString(32)+n,e=":"+e+"R"+n,n=zo++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=$k++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},jk={readContext:tn,useCallback:ow,useContext:tn,useEffect:Yf,useImperativeHandle:sw,useInsertionEffect:nw,useLayoutEffect:rw,useMemo:aw,useReducer:oh,useRef:tw,useState:function(){return oh(Ho)},useDebugValue:Jf,useDeferredValue:function(t){var e=nn();return lw(e,We.memoizedState,t)},useTransition:function(){var t=oh(Ho)[0],e=nn().memoizedState;return[t,e]},useMutableSource:G0,useSyncExternalStore:Q0,useId:uw,unstable_isNewReconciler:!1},zk={readContext:tn,useCallback:ow,useContext:tn,useEffect:Yf,useImperativeHandle:sw,useInsertionEffect:nw,useLayoutEffect:rw,useMemo:aw,useReducer:ah,useRef:tw,useState:function(){return ah(Ho)},useDebugValue:Jf,useDeferredValue:function(t){var e=nn();return We===null?e.memoizedState=t:lw(e,We.memoizedState,t)},useTransition:function(){var t=ah(Ho)[0],e=nn().memoizedState;return[t,e]},useMutableSource:G0,useSyncExternalStore:Q0,useId:uw,unstable_isNewReconciler:!1};function ms(t,e){try{var n="",r=e;do n+=yT(r),r=r.return;while(r);var i=n}catch(s){i=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:i,digest:null}}function lh(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function _d(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var Hk=typeof WeakMap=="function"?WeakMap:Map;function fw(t,e,n){n=Wn(-1,n),n.tag=3,n.payload={element:null};var r=e.value;return n.callback=function(){lu||(lu=!0,Nd=r),_d(t,e)},n}function pw(t,e,n){n=Wn(-1,n),n.tag=3;var r=t.type.getDerivedStateFromError;if(typeof r=="function"){var i=e.value;n.payload=function(){return r(i)},n.callback=function(){_d(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){_d(t,e),typeof r!="function"&&(Sr===null?Sr=new Set([this]):Sr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Eg(t,e,n){var r=t.pingCache;if(r===null){r=t.pingCache=new Hk;var i=new Set;r.set(e,i)}else i=r.get(e),i===void 0&&(i=new Set,r.set(e,i));i.has(n)||(i.add(n),t=iI.bind(null,t,e,n),e.then(t,t))}function _g(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function Sg(t,e,n,r,i){return t.mode&1?(t.flags|=65536,t.lanes=i,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Wn(-1,1),e.tag=2,_r(n,e,1))),n.lanes|=1),t)}var Wk=tr.ReactCurrentOwner,Lt=!1;function It(t,e,n,r){e.child=t===null?q0(e,null,n,r):fs(e,t.child,n,r)}function Tg(t,e,n,r,i){n=n.render;var s=e.ref;return ts(e,i),r=Qf(t,e,n,r,s,i),n=Xf(),t!==null&&!Lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Qn(t,e,i)):(Ce&&n&&$f(e),e.flags|=1,It(t,e,r,i),e.child)}function kg(t,e,n,r,i){if(t===null){var s=n.type;return typeof s=="function"&&!op(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,mw(t,e,s,r,i)):(t=Ol(n.type,null,r,e,e.mode,i),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&i)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:$o,n(o,r)&&t.ref===e.ref)return Qn(t,e,i)}return e.flags|=1,t=kr(s,r),t.ref=e.ref,t.return=e,e.child=t}function mw(t,e,n,r,i){if(t!==null){var s=t.memoizedProps;if($o(s,r)&&t.ref===e.ref)if(Lt=!1,e.pendingProps=r=s,(t.lanes&i)!==0)t.flags&131072&&(Lt=!0);else return e.lanes=t.lanes,Qn(t,e,i)}return Sd(t,e,n,r,i)}function gw(t,e,n){var r=e.pendingProps,i=r.children,s=t!==null?t.memoizedState:null;if(r.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_e(qi,Ft),Ft|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_e(qi,Ft),Ft|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=s!==null?s.baseLanes:n,_e(qi,Ft),Ft|=r}else s!==null?(r=s.baseLanes|n,e.memoizedState=null):r=n,_e(qi,Ft),Ft|=r;return It(t,e,i,n),e.child}function yw(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Sd(t,e,n,r,i){var s=Mt(n)?ci:Et.current;return s=hs(e,s),ts(e,i),n=Qf(t,e,n,r,s,i),r=Xf(),t!==null&&!Lt?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~i,Qn(t,e,i)):(Ce&&r&&$f(e),e.flags|=1,It(t,e,n,i),e.child)}function Ig(t,e,n,r,i){if(Mt(n)){var s=!0;Jl(e)}else s=!1;if(ts(e,i),e.stateNode===null)Dl(t,e),H0(e,n,r),Ed(e,n,r,i),r=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=n.contextType;typeof u=="object"&&u!==null?u=tn(u):(u=Mt(n)?ci:Et.current,u=hs(e,u));var h=n.getDerivedStateFromProps,d=typeof h=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==r||l!==u)&&gg(e,o,r,u),ar=!1;var c=e.memoizedState;o.state=c,ru(e,r,o,i),l=e.memoizedState,a!==r||c!==l||bt.current||ar?(typeof h=="function"&&(wd(e,n,h,r),l=e.memoizedState),(a=ar||mg(e,n,a,r,c,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=r,e.memoizedState=l),o.props=r,o.state=l,o.context=u,r=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),r=!1)}else{o=e.stateNode,j0(t,e),a=e.memoizedProps,u=e.type===e.elementType?a:cn(e.type,a),o.props=u,d=e.pendingProps,c=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=tn(l):(l=Mt(n)?ci:Et.current,l=hs(e,l));var f=n.getDerivedStateFromProps;(h=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||c!==l)&&gg(e,o,r,l),ar=!1,c=e.memoizedState,o.state=c,ru(e,r,o,i);var g=e.memoizedState;a!==d||c!==g||bt.current||ar?(typeof f=="function"&&(wd(e,n,f,r),g=e.memoizedState),(u=ar||mg(e,n,u,r,c,g,l)||!1)?(h||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(r,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(r,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),e.memoizedProps=r,e.memoizedState=g),o.props=r,o.state=g,o.context=l,r=u):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&c===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&c===t.memoizedState||(e.flags|=1024),r=!1)}return Td(t,e,n,r,s,i)}function Td(t,e,n,r,i,s){yw(t,e);var o=(e.flags&128)!==0;if(!r&&!o)return i&&cg(e,n,!1),Qn(t,e,s);r=e.stateNode,Wk.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:r.render();return e.flags|=1,t!==null&&o?(e.child=fs(e,t.child,null,s),e.child=fs(e,null,a,s)):It(t,e,a,s),e.memoizedState=r.state,i&&cg(e,n,!0),e.child}function vw(t){var e=t.stateNode;e.pendingContext?ug(t,e.pendingContext,e.pendingContext!==e.context):e.context&&ug(t,e.context,!1),Wf(t,e.containerInfo)}function Cg(t,e,n,r,i){return ds(),Ff(i),e.flags|=256,It(t,e,n,r),e.child}var kd={dehydrated:null,treeContext:null,retryLane:0};function Id(t){return{baseLanes:t,cachePool:null,transitions:null}}function ww(t,e,n){var r=e.pendingProps,i=xe.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(i&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(i|=1),_e(xe,i&1),t===null)return yd(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=r.children,t=r.fallback,s?(r=e.mode,s=e.child,o={mode:"hidden",children:o},!(r&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=Yu(o,r,0,null),t=si(t,r,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Id(n),e.memoizedState=kd,t):Zf(e,o));if(i=t.memoizedState,i!==null&&(a=i.dehydrated,a!==null))return qk(t,e,o,r,a,i,n);if(s){s=r.fallback,o=e.mode,i=t.child,a=i.sibling;var l={mode:"hidden",children:r.children};return!(o&1)&&e.child!==i?(r=e.child,r.childLanes=0,r.pendingProps=l,e.deletions=null):(r=kr(i,l),r.subtreeFlags=i.subtreeFlags&14680064),a!==null?s=kr(a,s):(s=si(s,o,n,null),s.flags|=2),s.return=e,r.return=e,r.sibling=s,e.child=r,r=s,s=e.child,o=t.child.memoizedState,o=o===null?Id(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=kd,r}return s=t.child,t=s.sibling,r=kr(s,{mode:"visible",children:r.children}),!(e.mode&1)&&(r.lanes=n),r.return=e,r.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=r,e.memoizedState=null,r}function Zf(t,e){return e=Yu({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function ul(t,e,n,r){return r!==null&&Ff(r),fs(e,t.child,null,n),t=Zf(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function qk(t,e,n,r,i,s,o){if(n)return e.flags&256?(e.flags&=-257,r=lh(Error(R(422))),ul(t,e,o,r)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=r.fallback,i=e.mode,r=Yu({mode:"visible",children:r.children},i,0,null),s=si(s,i,o,null),s.flags|=2,r.return=e,s.return=e,r.sibling=s,e.child=r,e.mode&1&&fs(e,t.child,null,o),e.child.memoizedState=Id(o),e.memoizedState=kd,s);if(!(e.mode&1))return ul(t,e,o,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var a=r.dgst;return r=a,s=Error(R(419)),r=lh(s,r,void 0),ul(t,e,o,r)}if(a=(o&t.childLanes)!==0,Lt||a){if(r=et,r!==null){switch(o&-o){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|o)?0:i,i!==0&&i!==s.retryLane&&(s.retryLane=i,Gn(t,i),gn(r,t,i,-1))}return sp(),r=lh(Error(R(421))),ul(t,e,o,r)}return i.data==="$?"?(e.flags|=128,e.child=t.child,e=sI.bind(null,t),i._reactRetry=e,null):(t=s.treeContext,Vt=Er(i.nextSibling),zt=e,Ce=!0,dn=null,t!==null&&(Yt[Jt++]=Vn,Yt[Jt++]=Bn,Yt[Jt++]=hi,Vn=t.id,Bn=t.overflow,hi=e),e=Zf(e,r.children),e.flags|=4096,e)}function Rg(t,e,n){t.lanes|=e;var r=t.alternate;r!==null&&(r.lanes|=e),vd(t.return,e,n)}function uh(t,e,n,r,i){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=r,s.tail=n,s.tailMode=i)}function Ew(t,e,n){var r=e.pendingProps,i=r.revealOrder,s=r.tail;if(It(t,e,r.children,n),r=xe.current,r&2)r=r&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&Rg(t,n,e);else if(t.tag===19)Rg(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}r&=1}if(_e(xe,r),!(e.mode&1))e.memoizedState=null;else switch(i){case"forwards":for(n=e.child,i=null;n!==null;)t=n.alternate,t!==null&&iu(t)===null&&(i=n),n=n.sibling;n=i,n===null?(i=e.child,e.child=null):(i=n.sibling,n.sibling=null),uh(e,!1,i,n,s);break;case"backwards":for(n=null,i=e.child,e.child=null;i!==null;){if(t=i.alternate,t!==null&&iu(t)===null){e.child=i;break}t=i.sibling,i.sibling=n,n=i,i=t}uh(e,!0,n,null,s);break;case"together":uh(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function Dl(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function Qn(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),fi|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(R(153));if(e.child!==null){for(t=e.child,n=kr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=kr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function Kk(t,e,n){switch(e.tag){case 3:vw(e),ds();break;case 5:K0(e);break;case 1:Mt(e.type)&&Jl(e);break;case 4:Wf(e,e.stateNode.containerInfo);break;case 10:var r=e.type._context,i=e.memoizedProps.value;_e(tu,r._currentValue),r._currentValue=i;break;case 13:if(r=e.memoizedState,r!==null)return r.dehydrated!==null?(_e(xe,xe.current&1),e.flags|=128,null):n&e.child.childLanes?ww(t,e,n):(_e(xe,xe.current&1),t=Qn(t,e,n),t!==null?t.sibling:null);_e(xe,xe.current&1);break;case 19:if(r=(n&e.childLanes)!==0,t.flags&128){if(r)return Ew(t,e,n);e.flags|=128}if(i=e.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),_e(xe,xe.current),r)break;return null;case 22:case 23:return e.lanes=0,gw(t,e,n)}return Qn(t,e,n)}var _w,Cd,Sw,Tw;_w=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Cd=function(){};Sw=function(t,e,n,r){var i=t.memoizedProps;if(i!==r){t=e.stateNode,Jr(Rn.current);var s=null;switch(n){case"input":i=Gh(t,i),r=Gh(t,r),s=[];break;case"select":i=Ne({},i,{value:void 0}),r=Ne({},r,{value:void 0}),s=[];break;case"textarea":i=Yh(t,i),r=Yh(t,r),s=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(t.onclick=Xl)}Zh(n,r);var o;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var a=i[u];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Do.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in r){var l=r[u];if(a=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(u,n)),n=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Do.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&Te("scroll",t),s||a===l||(s=[])):(s=s||[]).push(u,l))}n&&(s=s||[]).push("style",n);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Tw=function(t,e,n,r){n!==r&&(e.flags|=4)};function Ks(t,e){if(!Ce)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:r.sibling=null}}function ft(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,r=0;if(e)for(var i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=t,i=i.sibling;else for(i=t.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=t,i=i.sibling;return t.subtreeFlags|=r,t.childLanes=n,e}function Gk(t,e,n){var r=e.pendingProps;switch(Uf(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return ft(e),null;case 1:return Mt(e.type)&&Yl(),ft(e),null;case 3:return r=e.stateNode,ps(),ke(bt),ke(Et),Kf(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(t===null||t.child===null)&&(al(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,dn!==null&&(Ld(dn),dn=null))),Cd(t,e),ft(e),null;case 5:qf(e);var i=Jr(jo.current);if(n=e.type,t!==null&&e.stateNode!=null)Sw(t,e,n,r,i),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!r){if(e.stateNode===null)throw Error(R(166));return ft(e),null}if(t=Jr(Rn.current),al(e)){r=e.stateNode,n=e.type;var s=e.memoizedProps;switch(r[Sn]=e,r[Vo]=s,t=(e.mode&1)!==0,n){case"dialog":Te("cancel",r),Te("close",r);break;case"iframe":case"object":case"embed":Te("load",r);break;case"video":case"audio":for(i=0;i<io.length;i++)Te(io[i],r);break;case"source":Te("error",r);break;case"img":case"image":case"link":Te("error",r),Te("load",r);break;case"details":Te("toggle",r);break;case"input":Mm(r,s),Te("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!s.multiple},Te("invalid",r);break;case"textarea":Um(r,s),Te("invalid",r)}Zh(n,s),i=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?r.textContent!==a&&(s.suppressHydrationWarning!==!0&&ol(r.textContent,a,t),i=["children",a]):typeof a=="number"&&r.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&ol(r.textContent,a,t),i=["children",""+a]):Do.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&Te("scroll",r)}switch(n){case"input":Ja(r),$m(r,s,!0);break;case"textarea":Ja(r),Fm(r);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(r.onclick=Xl)}r=i,e.updateQueue=r,r!==null&&(e.flags|=4)}else{o=i.nodeType===9?i:i.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=Xv(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof r.is=="string"?t=o.createElement(n,{is:r.is}):(t=o.createElement(n),n==="select"&&(o=t,r.multiple?o.multiple=!0:r.size&&(o.size=r.size))):t=o.createElementNS(t,n),t[Sn]=e,t[Vo]=r,_w(t,e,!1,!1),e.stateNode=t;e:{switch(o=ed(n,r),n){case"dialog":Te("cancel",t),Te("close",t),i=r;break;case"iframe":case"object":case"embed":Te("load",t),i=r;break;case"video":case"audio":for(i=0;i<io.length;i++)Te(io[i],t);i=r;break;case"source":Te("error",t),i=r;break;case"img":case"image":case"link":Te("error",t),Te("load",t),i=r;break;case"details":Te("toggle",t),i=r;break;case"input":Mm(t,r),i=Gh(t,r),Te("invalid",t);break;case"option":i=r;break;case"select":t._wrapperState={wasMultiple:!!r.multiple},i=Ne({},r,{value:void 0}),Te("invalid",t);break;case"textarea":Um(t,r),i=Yh(t,r),Te("invalid",t);break;default:i=r}Zh(n,i),a=i;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?Zv(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&Yv(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&No(t,l):typeof l=="number"&&No(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Do.hasOwnProperty(s)?l!=null&&s==="onScroll"&&Te("scroll",t):l!=null&&Tf(t,s,l,o))}switch(n){case"input":Ja(t),$m(t,r,!1);break;case"textarea":Ja(t),Fm(t);break;case"option":r.value!=null&&t.setAttribute("value",""+xr(r.value));break;case"select":t.multiple=!!r.multiple,s=r.value,s!=null?Yi(t,!!r.multiple,s,!1):r.defaultValue!=null&&Yi(t,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(t.onclick=Xl)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return ft(e),null;case 6:if(t&&e.stateNode!=null)Tw(t,e,t.memoizedProps,r);else{if(typeof r!="string"&&e.stateNode===null)throw Error(R(166));if(n=Jr(jo.current),Jr(Rn.current),al(e)){if(r=e.stateNode,n=e.memoizedProps,r[Sn]=e,(s=r.nodeValue!==n)&&(t=zt,t!==null))switch(t.tag){case 3:ol(r.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&ol(r.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Sn]=e,e.stateNode=r}return ft(e),null;case 13:if(ke(xe),r=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Ce&&Vt!==null&&e.mode&1&&!(e.flags&128))V0(),ds(),e.flags|=98560,s=!1;else if(s=al(e),r!==null&&r.dehydrated!==null){if(t===null){if(!s)throw Error(R(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(R(317));s[Sn]=e}else ds(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;ft(e),s=!1}else dn!==null&&(Ld(dn),dn=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(r=r!==null,r!==(t!==null&&t.memoizedState!==null)&&r&&(e.child.flags|=8192,e.mode&1&&(t===null||xe.current&1?Ke===0&&(Ke=3):sp())),e.updateQueue!==null&&(e.flags|=4),ft(e),null);case 4:return ps(),Cd(t,e),t===null&&Uo(e.stateNode.containerInfo),ft(e),null;case 10:return jf(e.type._context),ft(e),null;case 17:return Mt(e.type)&&Yl(),ft(e),null;case 19:if(ke(xe),s=e.memoizedState,s===null)return ft(e),null;if(r=(e.flags&128)!==0,o=s.rendering,o===null)if(r)Ks(s,!1);else{if(Ke!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=iu(t),o!==null){for(e.flags|=128,Ks(s,!1),r=o.updateQueue,r!==null&&(e.updateQueue=r,e.flags|=4),e.subtreeFlags=0,r=n,n=e.child;n!==null;)s=n,t=r,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _e(xe,xe.current&1|2),e.child}t=t.sibling}s.tail!==null&&Me()>gs&&(e.flags|=128,r=!0,Ks(s,!1),e.lanes=4194304)}else{if(!r)if(t=iu(o),t!==null){if(e.flags|=128,r=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ks(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Ce)return ft(e),null}else 2*Me()-s.renderingStartTime>gs&&n!==1073741824&&(e.flags|=128,r=!0,Ks(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Me(),e.sibling=null,n=xe.current,_e(xe,r?n&1|2:n&1),e):(ft(e),null);case 22:case 23:return ip(),r=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==r&&(e.flags|=8192),r&&e.mode&1?Ft&1073741824&&(ft(e),e.subtreeFlags&6&&(e.flags|=8192)):ft(e),null;case 24:return null;case 25:return null}throw Error(R(156,e.tag))}function Qk(t,e){switch(Uf(e),e.tag){case 1:return Mt(e.type)&&Yl(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return ps(),ke(bt),ke(Et),Kf(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return qf(e),null;case 13:if(ke(xe),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(R(340));ds()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return ke(xe),null;case 4:return ps(),null;case 10:return jf(e.type._context),null;case 22:case 23:return ip(),null;case 24:return null;default:return null}}var cl=!1,mt=!1,Xk=typeof WeakSet=="function"?WeakSet:Set,F=null;function Wi(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Pe(t,e,r)}else n.current=null}function Rd(t,e,n){try{n()}catch(r){Pe(t,e,r)}}var Ag=!1;function Yk(t,e){if(cd=Kl,t=R0(),Mf(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,s=r.focusNode;r=r.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,u=0,h=0,d=t,c=null;t:for(;;){for(var f;d!==n||i!==0&&d.nodeType!==3||(a=o+i),d!==s||r!==0&&d.nodeType!==3||(l=o+r),d.nodeType===3&&(o+=d.nodeValue.length),(f=d.firstChild)!==null;)c=d,d=f;for(;;){if(d===t)break t;if(c===n&&++u===i&&(a=o),c===s&&++h===r&&(l=o),(f=d.nextSibling)!==null)break;d=c,c=d.parentNode}d=f}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(hd={focusedElem:t,selectionRange:n},Kl=!1,F=e;F!==null;)if(e=F,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,F=t;else for(;F!==null;){e=F;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var E=g.memoizedProps,C=g.memoizedState,m=e.stateNode,p=m.getSnapshotBeforeUpdate(e.elementType===e.type?E:cn(e.type,E),C);m.__reactInternalSnapshotBeforeUpdate=p}break;case 3:var y=e.stateNode.containerInfo;y.nodeType===1?y.textContent="":y.nodeType===9&&y.documentElement&&y.removeChild(y.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(R(163))}}catch(S){Pe(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,F=t;break}F=e.return}return g=Ag,Ag=!1,g}function vo(t,e,n){var r=e.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&t)===t){var s=i.destroy;i.destroy=void 0,s!==void 0&&Rd(e,n,s)}i=i.next}while(i!==r)}}function Qu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var r=n.create;n.destroy=r()}n=n.next}while(n!==e)}}function Ad(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function kw(t){var e=t.alternate;e!==null&&(t.alternate=null,kw(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Sn],delete e[Vo],delete e[pd],delete e[Ok],delete e[Lk])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function Iw(t){return t.tag===5||t.tag===3||t.tag===4}function xg(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||Iw(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function xd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Xl));else if(r!==4&&(t=t.child,t!==null))for(xd(t,e,n),t=t.sibling;t!==null;)xd(t,e,n),t=t.sibling}function Dd(t,e,n){var r=t.tag;if(r===5||r===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(r!==4&&(t=t.child,t!==null))for(Dd(t,e,n),t=t.sibling;t!==null;)Dd(t,e,n),t=t.sibling}var it=null,hn=!1;function ir(t,e,n){for(n=n.child;n!==null;)Cw(t,e,n),n=n.sibling}function Cw(t,e,n){if(Cn&&typeof Cn.onCommitFiberUnmount=="function")try{Cn.onCommitFiberUnmount(Bu,n)}catch{}switch(n.tag){case 5:mt||Wi(n,e);case 6:var r=it,i=hn;it=null,ir(t,e,n),it=r,hn=i,it!==null&&(hn?(t=it,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):it.removeChild(n.stateNode));break;case 18:it!==null&&(hn?(t=it,n=n.stateNode,t.nodeType===8?nh(t.parentNode,n):t.nodeType===1&&nh(t,n),bo(t)):nh(it,n.stateNode));break;case 4:r=it,i=hn,it=n.stateNode.containerInfo,hn=!0,ir(t,e,n),it=r,hn=i;break;case 0:case 11:case 14:case 15:if(!mt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var s=i,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&Rd(n,e,o),i=i.next}while(i!==r)}ir(t,e,n);break;case 1:if(!mt&&(Wi(n,e),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(a){Pe(n,e,a)}ir(t,e,n);break;case 21:ir(t,e,n);break;case 22:n.mode&1?(mt=(r=mt)||n.memoizedState!==null,ir(t,e,n),mt=r):ir(t,e,n);break;default:ir(t,e,n)}}function Dg(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new Xk),e.forEach(function(r){var i=oI.bind(null,t,r);n.has(r)||(n.add(r),r.then(i,i))})}}function un(t,e){var n=e.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:it=a.stateNode,hn=!1;break e;case 3:it=a.stateNode.containerInfo,hn=!0;break e;case 4:it=a.stateNode.containerInfo,hn=!0;break e}a=a.return}if(it===null)throw Error(R(160));Cw(s,o,i),it=null,hn=!1;var l=i.alternate;l!==null&&(l.return=null),i.return=null}catch(u){Pe(i,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Rw(e,t),e=e.sibling}function Rw(t,e){var n=t.alternate,r=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(un(e,t),wn(t),r&4){try{vo(3,t,t.return),Qu(3,t)}catch(E){Pe(t,t.return,E)}try{vo(5,t,t.return)}catch(E){Pe(t,t.return,E)}}break;case 1:un(e,t),wn(t),r&512&&n!==null&&Wi(n,n.return);break;case 5:if(un(e,t),wn(t),r&512&&n!==null&&Wi(n,n.return),t.flags&32){var i=t.stateNode;try{No(i,"")}catch(E){Pe(t,t.return,E)}}if(r&4&&(i=t.stateNode,i!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&Gv(i,s),ed(a,o);var u=ed(a,s);for(o=0;o<l.length;o+=2){var h=l[o],d=l[o+1];h==="style"?Zv(i,d):h==="dangerouslySetInnerHTML"?Yv(i,d):h==="children"?No(i,d):Tf(i,h,d,u)}switch(a){case"input":Qh(i,s);break;case"textarea":Qv(i,s);break;case"select":var c=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!s.multiple;var f=s.value;f!=null?Yi(i,!!s.multiple,f,!1):c!==!!s.multiple&&(s.defaultValue!=null?Yi(i,!!s.multiple,s.defaultValue,!0):Yi(i,!!s.multiple,s.multiple?[]:"",!1))}i[Vo]=s}catch(E){Pe(t,t.return,E)}}break;case 6:if(un(e,t),wn(t),r&4){if(t.stateNode===null)throw Error(R(162));i=t.stateNode,s=t.memoizedProps;try{i.nodeValue=s}catch(E){Pe(t,t.return,E)}}break;case 3:if(un(e,t),wn(t),r&4&&n!==null&&n.memoizedState.isDehydrated)try{bo(e.containerInfo)}catch(E){Pe(t,t.return,E)}break;case 4:un(e,t),wn(t);break;case 13:un(e,t),wn(t),i=t.child,i.flags&8192&&(s=i.memoizedState!==null,i.stateNode.isHidden=s,!s||i.alternate!==null&&i.alternate.memoizedState!==null||(np=Me())),r&4&&Dg(t);break;case 22:if(h=n!==null&&n.memoizedState!==null,t.mode&1?(mt=(u=mt)||h,un(e,t),mt=u):un(e,t),wn(t),r&8192){if(u=t.memoizedState!==null,(t.stateNode.isHidden=u)&&!h&&t.mode&1)for(F=t,h=t.child;h!==null;){for(d=F=h;F!==null;){switch(c=F,f=c.child,c.tag){case 0:case 11:case 14:case 15:vo(4,c,c.return);break;case 1:Wi(c,c.return);var g=c.stateNode;if(typeof g.componentWillUnmount=="function"){r=c,n=c.return;try{e=r,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(E){Pe(r,n,E)}}break;case 5:Wi(c,c.return);break;case 22:if(c.memoizedState!==null){Pg(d);continue}}f!==null?(f.return=c,F=f):Pg(d)}h=h.sibling}e:for(h=null,d=t;;){if(d.tag===5){if(h===null){h=d;try{i=d.stateNode,u?(s=i.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=Jv("display",o))}catch(E){Pe(t,t.return,E)}}}else if(d.tag===6){if(h===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(E){Pe(t,t.return,E)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===t)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===t)break e;for(;d.sibling===null;){if(d.return===null||d.return===t)break e;h===d&&(h=null),d=d.return}h===d&&(h=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:un(e,t),wn(t),r&4&&Dg(t);break;case 21:break;default:un(e,t),wn(t)}}function wn(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(Iw(n)){var r=n;break e}n=n.return}throw Error(R(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(No(i,""),r.flags&=-33);var s=xg(t);Dd(t,s,i);break;case 3:case 4:var o=r.stateNode.containerInfo,a=xg(t);xd(t,a,o);break;default:throw Error(R(161))}}catch(l){Pe(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function Jk(t,e,n){F=t,Aw(t)}function Aw(t,e,n){for(var r=(t.mode&1)!==0;F!==null;){var i=F,s=i.child;if(i.tag===22&&r){var o=i.memoizedState!==null||cl;if(!o){var a=i.alternate,l=a!==null&&a.memoizedState!==null||mt;a=cl;var u=mt;if(cl=o,(mt=l)&&!u)for(F=i;F!==null;)o=F,l=o.child,o.tag===22&&o.memoizedState!==null?Og(i):l!==null?(l.return=o,F=l):Og(i);for(;s!==null;)F=s,Aw(s),s=s.sibling;F=i,cl=a,mt=u}Ng(t)}else i.subtreeFlags&8772&&s!==null?(s.return=i,F=s):Ng(t)}}function Ng(t){for(;F!==null;){var e=F;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:mt||Qu(5,e);break;case 1:var r=e.stateNode;if(e.flags&4&&!mt)if(n===null)r.componentDidMount();else{var i=e.elementType===e.type?n.memoizedProps:cn(e.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&pg(e,s,r);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}pg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var h=u.memoizedState;if(h!==null){var d=h.dehydrated;d!==null&&bo(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(R(163))}mt||e.flags&512&&Ad(e)}catch(c){Pe(e,e.return,c)}}if(e===t){F=null;break}if(n=e.sibling,n!==null){n.return=e.return,F=n;break}F=e.return}}function Pg(t){for(;F!==null;){var e=F;if(e===t){F=null;break}var n=e.sibling;if(n!==null){n.return=e.return,F=n;break}F=e.return}}function Og(t){for(;F!==null;){var e=F;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{Qu(4,e)}catch(l){Pe(e,n,l)}break;case 1:var r=e.stateNode;if(typeof r.componentDidMount=="function"){var i=e.return;try{r.componentDidMount()}catch(l){Pe(e,i,l)}}var s=e.return;try{Ad(e)}catch(l){Pe(e,s,l)}break;case 5:var o=e.return;try{Ad(e)}catch(l){Pe(e,o,l)}}}catch(l){Pe(e,e.return,l)}if(e===t){F=null;break}var a=e.sibling;if(a!==null){a.return=e.return,F=a;break}F=e.return}}var Zk=Math.ceil,au=tr.ReactCurrentDispatcher,ep=tr.ReactCurrentOwner,en=tr.ReactCurrentBatchConfig,pe=0,et=null,ze=null,at=0,Ft=0,qi=$r(0),Ke=0,qo=null,fi=0,Xu=0,tp=0,wo=null,Pt=null,np=0,gs=1/0,Un=null,lu=!1,Nd=null,Sr=null,hl=!1,gr=null,uu=0,Eo=0,Pd=null,Nl=-1,Pl=0;function At(){return pe&6?Me():Nl!==-1?Nl:Nl=Me()}function Tr(t){return t.mode&1?pe&2&&at!==0?at&-at:Mk.transition!==null?(Pl===0&&(Pl=h0()),Pl):(t=ye,t!==0||(t=window.event,t=t===void 0?16:v0(t.type)),t):1}function gn(t,e,n,r){if(50<Eo)throw Eo=0,Pd=null,Error(R(185));pa(t,n,r),(!(pe&2)||t!==et)&&(t===et&&(!(pe&2)&&(Xu|=n),Ke===4&&ur(t,at)),$t(t,r),n===1&&pe===0&&!(e.mode&1)&&(gs=Me()+500,qu&&Ur()))}function $t(t,e){var n=t.callbackNode;MT(t,e);var r=ql(t,t===et?at:0);if(r===0)n!==null&&jm(n),t.callbackNode=null,t.callbackPriority=0;else if(e=r&-r,t.callbackPriority!==e){if(n!=null&&jm(n),e===1)t.tag===0?bk(Lg.bind(null,t)):$0(Lg.bind(null,t)),Nk(function(){!(pe&6)&&Ur()}),n=null;else{switch(d0(r)){case 1:n=Af;break;case 4:n=u0;break;case 16:n=Wl;break;case 536870912:n=c0;break;default:n=Wl}n=Mw(n,xw.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function xw(t,e){if(Nl=-1,Pl=0,pe&6)throw Error(R(327));var n=t.callbackNode;if(ns()&&t.callbackNode!==n)return null;var r=ql(t,t===et?at:0);if(r===0)return null;if(r&30||r&t.expiredLanes||e)e=cu(t,r);else{e=r;var i=pe;pe|=2;var s=Nw();(et!==t||at!==e)&&(Un=null,gs=Me()+500,ii(t,e));do try{nI();break}catch(a){Dw(t,a)}while(1);Bf(),au.current=s,pe=i,ze!==null?e=0:(et=null,at=0,e=Ke)}if(e!==0){if(e===2&&(i=sd(t),i!==0&&(r=i,e=Od(t,i))),e===1)throw n=qo,ii(t,0),ur(t,r),$t(t,Me()),n;if(e===6)ur(t,r);else{if(i=t.current.alternate,!(r&30)&&!eI(i)&&(e=cu(t,r),e===2&&(s=sd(t),s!==0&&(r=s,e=Od(t,s))),e===1))throw n=qo,ii(t,0),ur(t,r),$t(t,Me()),n;switch(t.finishedWork=i,t.finishedLanes=r,e){case 0:case 1:throw Error(R(345));case 2:Wr(t,Pt,Un);break;case 3:if(ur(t,r),(r&130023424)===r&&(e=np+500-Me(),10<e)){if(ql(t,0)!==0)break;if(i=t.suspendedLanes,(i&r)!==r){At(),t.pingedLanes|=t.suspendedLanes&i;break}t.timeoutHandle=fd(Wr.bind(null,t,Pt,Un),e);break}Wr(t,Pt,Un);break;case 4:if(ur(t,r),(r&4194240)===r)break;for(e=t.eventTimes,i=-1;0<r;){var o=31-mn(r);s=1<<o,o=e[o],o>i&&(i=o),r&=~s}if(r=i,r=Me()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*Zk(r/1960))-r,10<r){t.timeoutHandle=fd(Wr.bind(null,t,Pt,Un),r);break}Wr(t,Pt,Un);break;case 5:Wr(t,Pt,Un);break;default:throw Error(R(329))}}}return $t(t,Me()),t.callbackNode===n?xw.bind(null,t):null}function Od(t,e){var n=wo;return t.current.memoizedState.isDehydrated&&(ii(t,e).flags|=256),t=cu(t,e),t!==2&&(e=Pt,Pt=n,e!==null&&Ld(e)),t}function Ld(t){Pt===null?Pt=t:Pt.push.apply(Pt,t)}function eI(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],s=i.getSnapshot;i=i.value;try{if(!yn(s(),i))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function ur(t,e){for(e&=~tp,e&=~Xu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-mn(e),r=1<<n;t[n]=-1,e&=~r}}function Lg(t){if(pe&6)throw Error(R(327));ns();var e=ql(t,0);if(!(e&1))return $t(t,Me()),null;var n=cu(t,e);if(t.tag!==0&&n===2){var r=sd(t);r!==0&&(e=r,n=Od(t,r))}if(n===1)throw n=qo,ii(t,0),ur(t,e),$t(t,Me()),n;if(n===6)throw Error(R(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Wr(t,Pt,Un),$t(t,Me()),null}function rp(t,e){var n=pe;pe|=1;try{return t(e)}finally{pe=n,pe===0&&(gs=Me()+500,qu&&Ur())}}function pi(t){gr!==null&&gr.tag===0&&!(pe&6)&&ns();var e=pe;pe|=1;var n=en.transition,r=ye;try{if(en.transition=null,ye=1,t)return t()}finally{ye=r,en.transition=n,pe=e,!(pe&6)&&Ur()}}function ip(){Ft=qi.current,ke(qi)}function ii(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,Dk(n)),ze!==null)for(n=ze.return;n!==null;){var r=n;switch(Uf(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Yl();break;case 3:ps(),ke(bt),ke(Et),Kf();break;case 5:qf(r);break;case 4:ps();break;case 13:ke(xe);break;case 19:ke(xe);break;case 10:jf(r.type._context);break;case 22:case 23:ip()}n=n.return}if(et=t,ze=t=kr(t.current,null),at=Ft=e,Ke=0,qo=null,tp=Xu=fi=0,Pt=wo=null,Yr!==null){for(e=0;e<Yr.length;e++)if(n=Yr[e],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,s=n.pending;if(s!==null){var o=s.next;s.next=i,r.next=o}n.pending=r}Yr=null}return t}function Dw(t,e){do{var n=ze;try{if(Bf(),Al.current=ou,su){for(var r=De.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}su=!1}if(di=0,Ze=We=De=null,yo=!1,zo=0,ep.current=null,n===null||n.return===null){Ke=1,qo=e,ze=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=at,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,h=a,d=h.tag;if(!(h.mode&1)&&(d===0||d===11||d===15)){var c=h.alternate;c?(h.updateQueue=c.updateQueue,h.memoizedState=c.memoizedState,h.lanes=c.lanes):(h.updateQueue=null,h.memoizedState=null)}var f=_g(o);if(f!==null){f.flags&=-257,Sg(f,o,a,s,e),f.mode&1&&Eg(s,u,e),e=f,l=u;var g=e.updateQueue;if(g===null){var E=new Set;E.add(l),e.updateQueue=E}else g.add(l);break e}else{if(!(e&1)){Eg(s,u,e),sp();break e}l=Error(R(426))}}else if(Ce&&a.mode&1){var C=_g(o);if(C!==null){!(C.flags&65536)&&(C.flags|=256),Sg(C,o,a,s,e),Ff(ms(l,a));break e}}s=l=ms(l,a),Ke!==4&&(Ke=2),wo===null?wo=[s]:wo.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var m=fw(s,l,e);fg(s,m);break e;case 1:a=l;var p=s.type,y=s.stateNode;if(!(s.flags&128)&&(typeof p.getDerivedStateFromError=="function"||y!==null&&typeof y.componentDidCatch=="function"&&(Sr===null||!Sr.has(y)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=pw(s,a,e);fg(s,S);break e}}s=s.return}while(s!==null)}Ow(n)}catch(x){e=x,ze===n&&n!==null&&(ze=n=n.return);continue}break}while(1)}function Nw(){var t=au.current;return au.current=ou,t===null?ou:t}function sp(){(Ke===0||Ke===3||Ke===2)&&(Ke=4),et===null||!(fi&268435455)&&!(Xu&268435455)||ur(et,at)}function cu(t,e){var n=pe;pe|=2;var r=Nw();(et!==t||at!==e)&&(Un=null,ii(t,e));do try{tI();break}catch(i){Dw(t,i)}while(1);if(Bf(),pe=n,au.current=r,ze!==null)throw Error(R(261));return et=null,at=0,Ke}function tI(){for(;ze!==null;)Pw(ze)}function nI(){for(;ze!==null&&!RT();)Pw(ze)}function Pw(t){var e=bw(t.alternate,t,Ft);t.memoizedProps=t.pendingProps,e===null?Ow(t):ze=e,ep.current=null}function Ow(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=Qk(n,e),n!==null){n.flags&=32767,ze=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Ke=6,ze=null;return}}else if(n=Gk(n,e,Ft),n!==null){ze=n;return}if(e=e.sibling,e!==null){ze=e;return}ze=e=t}while(e!==null);Ke===0&&(Ke=5)}function Wr(t,e,n){var r=ye,i=en.transition;try{en.transition=null,ye=1,rI(t,e,n,r)}finally{en.transition=i,ye=r}return null}function rI(t,e,n,r){do ns();while(gr!==null);if(pe&6)throw Error(R(327));n=t.finishedWork;var i=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(R(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if($T(t,s),t===et&&(ze=et=null,at=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||hl||(hl=!0,Mw(Wl,function(){return ns(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=en.transition,en.transition=null;var o=ye;ye=1;var a=pe;pe|=4,ep.current=null,Yk(t,n),Rw(n,t),Tk(hd),Kl=!!cd,hd=cd=null,t.current=n,Jk(n),AT(),pe=a,ye=o,en.transition=s}else t.current=n;if(hl&&(hl=!1,gr=t,uu=i),s=t.pendingLanes,s===0&&(Sr=null),NT(n.stateNode),$t(t,Me()),e!==null)for(r=t.onRecoverableError,n=0;n<e.length;n++)i=e[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(lu)throw lu=!1,t=Nd,Nd=null,t;return uu&1&&t.tag!==0&&ns(),s=t.pendingLanes,s&1?t===Pd?Eo++:(Eo=0,Pd=t):Eo=0,Ur(),null}function ns(){if(gr!==null){var t=d0(uu),e=en.transition,n=ye;try{if(en.transition=null,ye=16>t?16:t,gr===null)var r=!1;else{if(t=gr,gr=null,uu=0,pe&6)throw Error(R(331));var i=pe;for(pe|=4,F=t.current;F!==null;){var s=F,o=s.child;if(F.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(F=u;F!==null;){var h=F;switch(h.tag){case 0:case 11:case 15:vo(8,h,s)}var d=h.child;if(d!==null)d.return=h,F=d;else for(;F!==null;){h=F;var c=h.sibling,f=h.return;if(kw(h),h===u){F=null;break}if(c!==null){c.return=f,F=c;break}F=f}}}var g=s.alternate;if(g!==null){var E=g.child;if(E!==null){g.child=null;do{var C=E.sibling;E.sibling=null,E=C}while(E!==null)}}F=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,F=o;else e:for(;F!==null;){if(s=F,s.flags&2048)switch(s.tag){case 0:case 11:case 15:vo(9,s,s.return)}var m=s.sibling;if(m!==null){m.return=s.return,F=m;break e}F=s.return}}var p=t.current;for(F=p;F!==null;){o=F;var y=o.child;if(o.subtreeFlags&2064&&y!==null)y.return=o,F=y;else e:for(o=p;F!==null;){if(a=F,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:Qu(9,a)}}catch(x){Pe(a,a.return,x)}if(a===o){F=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,F=S;break e}F=a.return}}if(pe=i,Ur(),Cn&&typeof Cn.onPostCommitFiberRoot=="function")try{Cn.onPostCommitFiberRoot(Bu,t)}catch{}r=!0}return r}finally{ye=n,en.transition=e}}return!1}function bg(t,e,n){e=ms(n,e),e=fw(t,e,1),t=_r(t,e,1),e=At(),t!==null&&(pa(t,1,e),$t(t,e))}function Pe(t,e,n){if(t.tag===3)bg(t,t,n);else for(;e!==null;){if(e.tag===3){bg(e,t,n);break}else if(e.tag===1){var r=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Sr===null||!Sr.has(r))){t=ms(n,t),t=pw(e,t,1),e=_r(e,t,1),t=At(),e!==null&&(pa(e,1,t),$t(e,t));break}}e=e.return}}function iI(t,e,n){var r=t.pingCache;r!==null&&r.delete(e),e=At(),t.pingedLanes|=t.suspendedLanes&n,et===t&&(at&n)===n&&(Ke===4||Ke===3&&(at&130023424)===at&&500>Me()-np?ii(t,0):tp|=n),$t(t,e)}function Lw(t,e){e===0&&(t.mode&1?(e=tl,tl<<=1,!(tl&130023424)&&(tl=4194304)):e=1);var n=At();t=Gn(t,e),t!==null&&(pa(t,e,n),$t(t,n))}function sI(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Lw(t,n)}function oI(t,e){var n=0;switch(t.tag){case 13:var r=t.stateNode,i=t.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=t.stateNode;break;default:throw Error(R(314))}r!==null&&r.delete(e),Lw(t,n)}var bw;bw=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||bt.current)Lt=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Lt=!1,Kk(t,e,n);Lt=!!(t.flags&131072)}else Lt=!1,Ce&&e.flags&1048576&&U0(e,eu,e.index);switch(e.lanes=0,e.tag){case 2:var r=e.type;Dl(t,e),t=e.pendingProps;var i=hs(e,Et.current);ts(e,n),i=Qf(null,e,r,t,i,n);var s=Xf();return e.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,Mt(r)?(s=!0,Jl(e)):s=!1,e.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,Hf(e),i.updater=Ku,e.stateNode=i,i._reactInternals=e,Ed(e,r,t,n),e=Td(null,e,r,!0,s,n)):(e.tag=0,Ce&&s&&$f(e),It(null,e,i,n),e=e.child),e;case 16:r=e.elementType;e:{switch(Dl(t,e),t=e.pendingProps,i=r._init,r=i(r._payload),e.type=r,i=e.tag=lI(r),t=cn(r,t),i){case 0:e=Sd(null,e,r,t,n);break e;case 1:e=Ig(null,e,r,t,n);break e;case 11:e=Tg(null,e,r,t,n);break e;case 14:e=kg(null,e,r,cn(r.type,t),n);break e}throw Error(R(306,r,""))}return e;case 0:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),Sd(t,e,r,i,n);case 1:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),Ig(t,e,r,i,n);case 3:e:{if(vw(e),t===null)throw Error(R(387));r=e.pendingProps,s=e.memoizedState,i=s.element,j0(t,e),ru(e,r,null,n);var o=e.memoizedState;if(r=o.element,s.isDehydrated)if(s={element:r,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){i=ms(Error(R(423)),e),e=Cg(t,e,r,n,i);break e}else if(r!==i){i=ms(Error(R(424)),e),e=Cg(t,e,r,n,i);break e}else for(Vt=Er(e.stateNode.containerInfo.firstChild),zt=e,Ce=!0,dn=null,n=q0(e,null,r,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(ds(),r===i){e=Qn(t,e,n);break e}It(t,e,r,n)}e=e.child}return e;case 5:return K0(e),t===null&&yd(e),r=e.type,i=e.pendingProps,s=t!==null?t.memoizedProps:null,o=i.children,dd(r,i)?o=null:s!==null&&dd(r,s)&&(e.flags|=32),yw(t,e),It(t,e,o,n),e.child;case 6:return t===null&&yd(e),null;case 13:return ww(t,e,n);case 4:return Wf(e,e.stateNode.containerInfo),r=e.pendingProps,t===null?e.child=fs(e,null,r,n):It(t,e,r,n),e.child;case 11:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),Tg(t,e,r,i,n);case 7:return It(t,e,e.pendingProps,n),e.child;case 8:return It(t,e,e.pendingProps.children,n),e.child;case 12:return It(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(r=e.type._context,i=e.pendingProps,s=e.memoizedProps,o=i.value,_e(tu,r._currentValue),r._currentValue=o,s!==null)if(yn(s.value,o)){if(s.children===i.children&&!bt.current){e=Qn(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===r){if(s.tag===1){l=Wn(-1,n&-n),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var h=u.pending;h===null?l.next=l:(l.next=h.next,h.next=l),u.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),vd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(R(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),vd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}It(t,e,i.children,n),e=e.child}return e;case 9:return i=e.type,r=e.pendingProps.children,ts(e,n),i=tn(i),r=r(i),e.flags|=1,It(t,e,r,n),e.child;case 14:return r=e.type,i=cn(r,e.pendingProps),i=cn(r.type,i),kg(t,e,r,i,n);case 15:return mw(t,e,e.type,e.pendingProps,n);case 17:return r=e.type,i=e.pendingProps,i=e.elementType===r?i:cn(r,i),Dl(t,e),e.tag=1,Mt(r)?(t=!0,Jl(e)):t=!1,ts(e,n),H0(e,r,i),Ed(e,r,i,n),Td(null,e,r,!0,t,n);case 19:return Ew(t,e,n);case 22:return gw(t,e,n)}throw Error(R(156,e.tag))};function Mw(t,e){return l0(t,e)}function aI(t,e,n,r){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Zt(t,e,n,r){return new aI(t,e,n,r)}function op(t){return t=t.prototype,!(!t||!t.isReactComponent)}function lI(t){if(typeof t=="function")return op(t)?1:0;if(t!=null){if(t=t.$$typeof,t===If)return 11;if(t===Cf)return 14}return 2}function kr(t,e){var n=t.alternate;return n===null?(n=Zt(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function Ol(t,e,n,r,i,s){var o=2;if(r=t,typeof t=="function")op(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case Mi:return si(n.children,i,s,e);case kf:o=8,i|=8;break;case Hh:return t=Zt(12,n,e,i|2),t.elementType=Hh,t.lanes=s,t;case Wh:return t=Zt(13,n,e,i),t.elementType=Wh,t.lanes=s,t;case qh:return t=Zt(19,n,e,i),t.elementType=qh,t.lanes=s,t;case Wv:return Yu(n,i,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case zv:o=10;break e;case Hv:o=9;break e;case If:o=11;break e;case Cf:o=14;break e;case or:o=16,r=null;break e}throw Error(R(130,t==null?t:typeof t,""))}return e=Zt(o,n,e,i),e.elementType=t,e.type=r,e.lanes=s,e}function si(t,e,n,r){return t=Zt(7,t,r,e),t.lanes=n,t}function Yu(t,e,n,r){return t=Zt(22,t,r,e),t.elementType=Wv,t.lanes=n,t.stateNode={isHidden:!1},t}function ch(t,e,n){return t=Zt(6,t,null,e),t.lanes=n,t}function hh(t,e,n){return e=Zt(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function uI(t,e,n,r,i){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wc(0),this.expirationTimes=Wc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wc(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function ap(t,e,n,r,i,s,o,a,l){return t=new uI(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Zt(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Hf(s),t}function cI(t,e,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:bi,key:r==null?null:""+r,children:t,containerInfo:e,implementation:n}}function $w(t){if(!t)return Dr;t=t._reactInternals;e:{if(ki(t)!==t||t.tag!==1)throw Error(R(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(Mt(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(R(171))}if(t.tag===1){var n=t.type;if(Mt(n))return M0(t,n,e)}return e}function Uw(t,e,n,r,i,s,o,a,l){return t=ap(n,r,!0,t,i,s,o,a,l),t.context=$w(null),n=t.current,r=At(),i=Tr(n),s=Wn(r,i),s.callback=e??null,_r(n,s,i),t.current.lanes=i,pa(t,i,r),$t(t,r),t}function Ju(t,e,n,r){var i=e.current,s=At(),o=Tr(i);return n=$w(n),e.context===null?e.context=n:e.pendingContext=n,e=Wn(s,o),e.payload={element:t},r=r===void 0?null:r,r!==null&&(e.callback=r),t=_r(i,e,o),t!==null&&(gn(t,i,o,s),Rl(t,i,o)),o}function hu(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function Mg(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function lp(t,e){Mg(t,e),(t=t.alternate)&&Mg(t,e)}function hI(){return null}var Fw=typeof reportError=="function"?reportError:function(t){console.error(t)};function up(t){this._internalRoot=t}Zu.prototype.render=up.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(R(409));Ju(t,e,null,null)};Zu.prototype.unmount=up.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;pi(function(){Ju(null,t,null,null)}),e[Kn]=null}};function Zu(t){this._internalRoot=t}Zu.prototype.unstable_scheduleHydration=function(t){if(t){var e=m0();t={blockedOn:null,target:t,priority:e};for(var n=0;n<lr.length&&e!==0&&e<lr[n].priority;n++);lr.splice(n,0,t),n===0&&y0(t)}};function cp(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function ec(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function $g(){}function dI(t,e,n,r,i){if(i){if(typeof r=="function"){var s=r;r=function(){var u=hu(o);s.call(u)}}var o=Uw(e,r,t,0,null,!1,!1,"",$g);return t._reactRootContainer=o,t[Kn]=o.current,Uo(t.nodeType===8?t.parentNode:t),pi(),o}for(;i=t.lastChild;)t.removeChild(i);if(typeof r=="function"){var a=r;r=function(){var u=hu(l);a.call(u)}}var l=ap(t,0,!1,null,null,!1,!1,"",$g);return t._reactRootContainer=l,t[Kn]=l.current,Uo(t.nodeType===8?t.parentNode:t),pi(function(){Ju(e,l,n,r)}),l}function tc(t,e,n,r,i){var s=n._reactRootContainer;if(s){var o=s;if(typeof i=="function"){var a=i;i=function(){var l=hu(o);a.call(l)}}Ju(e,o,t,i)}else o=dI(n,e,t,i,r);return hu(o)}f0=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ro(e.pendingLanes);n!==0&&(xf(e,n|1),$t(e,Me()),!(pe&6)&&(gs=Me()+500,Ur()))}break;case 13:pi(function(){var r=Gn(t,1);if(r!==null){var i=At();gn(r,t,1,i)}}),lp(t,1)}};Df=function(t){if(t.tag===13){var e=Gn(t,134217728);if(e!==null){var n=At();gn(e,t,134217728,n)}lp(t,134217728)}};p0=function(t){if(t.tag===13){var e=Tr(t),n=Gn(t,e);if(n!==null){var r=At();gn(n,t,e,r)}lp(t,e)}};m0=function(){return ye};g0=function(t,e){var n=ye;try{return ye=t,e()}finally{ye=n}};nd=function(t,e,n){switch(e){case"input":if(Qh(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var r=n[e];if(r!==t&&r.form===t.form){var i=Wu(r);if(!i)throw Error(R(90));Kv(r),Qh(r,i)}}}break;case"textarea":Qv(t,n);break;case"select":e=n.value,e!=null&&Yi(t,!!n.multiple,e,!1)}};n0=rp;r0=pi;var fI={usingClientEntryPoint:!1,Events:[ga,Vi,Wu,e0,t0,rp]},Gs={findFiberByHostInstance:Xr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},pI={bundleType:Gs.bundleType,version:Gs.version,rendererPackageName:Gs.rendererPackageName,rendererConfig:Gs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:tr.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=o0(t),t===null?null:t.stateNode},findFiberByHostInstance:Gs.findFiberByHostInstance||hI,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!dl.isDisabled&&dl.supportsFiber)try{Bu=dl.inject(pI),Cn=dl}catch{}}Kt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=fI;Kt.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!cp(e))throw Error(R(200));return cI(t,e,null,n)};Kt.createRoot=function(t,e){if(!cp(t))throw Error(R(299));var n=!1,r="",i=Fw;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(r=e.identifierPrefix),e.onRecoverableError!==void 0&&(i=e.onRecoverableError)),e=ap(t,1,!1,null,null,n,!1,r,i),t[Kn]=e.current,Uo(t.nodeType===8?t.parentNode:t),new up(e)};Kt.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(R(188)):(t=Object.keys(t).join(","),Error(R(268,t)));return t=o0(e),t=t===null?null:t.stateNode,t};Kt.flushSync=function(t){return pi(t)};Kt.hydrate=function(t,e,n){if(!ec(e))throw Error(R(200));return tc(null,t,e,!0,n)};Kt.hydrateRoot=function(t,e,n){if(!cp(t))throw Error(R(405));var r=n!=null&&n.hydratedSources||null,i=!1,s="",o=Fw;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Uw(e,null,t,1,n??null,i,!1,s,o),t[Kn]=e.current,Uo(t),r)for(t=0;t<r.length;t++)n=r[t],i=n._getVersion,i=i(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,i]:e.mutableSourceEagerHydrationData.push(n,i);return new Zu(e)};Kt.render=function(t,e,n){if(!ec(e))throw Error(R(200));return tc(null,t,e,!1,n)};Kt.unmountComponentAtNode=function(t){if(!ec(t))throw Error(R(40));return t._reactRootContainer?(pi(function(){tc(null,null,t,!1,function(){t._reactRootContainer=null,t[Kn]=null})}),!0):!1};Kt.unstable_batchedUpdates=rp;Kt.unstable_renderSubtreeIntoContainer=function(t,e,n,r){if(!ec(n))throw Error(R(200));if(t==null||t._reactInternals===void 0)throw Error(R(38));return tc(t,e,n,!1,r)};Kt.version="18.2.0-next-9e3b772b8-20220608";(function(t){function e(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(n){console.error(n)}}e(),t.exports=Kt})(hT);var Ug=Bh;Vh.createRoot=Ug.createRoot,Vh.hydrateRoot=Ug.hydrateRoot;/**
 * @remix-run/router v1.2.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ee(){return Ee=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Ee.apply(this,arguments)}var Fe;(function(t){t.Pop="POP",t.Push="PUSH",t.Replace="REPLACE"})(Fe||(Fe={}));const Fg="popstate";function mI(t){t===void 0&&(t={});function e(r,i){let{pathname:s,search:o,hash:a}=r.location;return Ko("",{pathname:s,search:o,hash:a},i.state&&i.state.usr||null,i.state&&i.state.key||"default")}function n(r,i){return typeof i=="string"?i:Nr(i)}return yI(e,n,null,t)}function se(t,e){if(t===!1||t===null||typeof t>"u")throw new Error(e)}function gI(){return Math.random().toString(36).substr(2,8)}function Vg(t){return{usr:t.state,key:t.key}}function Ko(t,e,n,r){return n===void 0&&(n=null),Ee({pathname:typeof t=="string"?t:t.pathname,search:"",hash:""},typeof e=="string"?nr(e):e,{state:n,key:e&&e.key||r||gI()})}function Nr(t){let{pathname:e="/",search:n="",hash:r=""}=t;return n&&n!=="?"&&(e+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(e+=r.charAt(0)==="#"?r:"#"+r),e}function nr(t){let e={};if(t){let n=t.indexOf("#");n>=0&&(e.hash=t.substr(n),t=t.substr(0,n));let r=t.indexOf("?");r>=0&&(e.search=t.substr(r),t=t.substr(0,r)),t&&(e.pathname=t)}return e}function Go(t){let e=typeof window<"u"&&typeof window.location<"u"&&window.location.origin!=="null"?window.location.origin:window.location.href,n=typeof t=="string"?t:Nr(t);return se(e,"No window.location.(origin|href) available to create URL for href: "+n),new URL(n,e)}function yI(t,e,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:s=!1}=r,o=i.history,a=Fe.Pop,l=null;function u(){a=Fe.Pop,l&&l({action:a,location:c.location})}function h(f,g){a=Fe.Push;let E=Ko(c.location,f,g);n&&n(E,f);let C=Vg(E),m=c.createHref(E);try{o.pushState(C,"",m)}catch{i.location.assign(m)}s&&l&&l({action:a,location:c.location})}function d(f,g){a=Fe.Replace;let E=Ko(c.location,f,g);n&&n(E,f);let C=Vg(E),m=c.createHref(E);o.replaceState(C,"",m),s&&l&&l({action:a,location:c.location})}let c={get action(){return a},get location(){return t(i,o)},listen(f){if(l)throw new Error("A history only accepts one active listener");return i.addEventListener(Fg,u),l=f,()=>{i.removeEventListener(Fg,u),l=null}},createHref(f){return e(i,f)},encodeLocation(f){let g=Go(typeof f=="string"?f:Nr(f));return{pathname:g.pathname,search:g.search,hash:g.hash}},push:h,replace:d,go(f){return o.go(f)}};return c}var st;(function(t){t.data="data",t.deferred="deferred",t.redirect="redirect",t.error="error"})(st||(st={}));function vI(t){return t.index===!0}function Vw(t,e,n){return e===void 0&&(e=[]),n===void 0&&(n=new Set),t.map((r,i)=>{let s=[...e,i],o=typeof r.id=="string"?r.id:s.join("-");return se(r.index!==!0||!r.children,"Cannot specify children on an index route"),se(!n.has(o),'Found a route id collision on id "'+o+`".  Route id's must be globally unique within Data Router usages`),n.add(o),vI(r)?Ee({},r,{id:o}):Ee({},r,{id:o,children:r.children?Vw(r.children,s,n):void 0})})}function so(t,e,n){n===void 0&&(n="/");let r=typeof e=="string"?nr(e):e,i=zw(r.pathname||"/",n);if(i==null)return null;let s=Bw(t);wI(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=AI(s[a],NI(i));return o}function Bw(t,e,n,r){e===void 0&&(e=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(se(l.relativePath.startsWith(r),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(r.length));let u=Ir([r,l.relativePath]),h=n.concat(l);s.children&&s.children.length>0&&(se(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Bw(s.children,e,h,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:CI(u,s.index),routesMeta:h})};return t.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))i(s,o);else for(let l of jw(s.path))i(s,o,l)}),e}function jw(t){let e=t.split("/");if(e.length===0)return[];let[n,...r]=e,i=n.endsWith("?"),s=n.replace(/\?$/,"");if(r.length===0)return i?[s,""]:[s];let o=jw(r.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),i&&a.push(...o),a.map(l=>t.startsWith("/")&&l===""?"/":l)}function wI(t){t.sort((e,n)=>e.score!==n.score?n.score-e.score:RI(e.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const EI=/^:\w+$/,_I=3,SI=2,TI=1,kI=10,II=-2,Bg=t=>t==="*";function CI(t,e){let n=t.split("/"),r=n.length;return n.some(Bg)&&(r+=II),e&&(r+=SI),n.filter(i=>!Bg(i)).reduce((i,s)=>i+(EI.test(s)?_I:s===""?TI:kI),r)}function RI(t,e){return t.length===e.length&&t.slice(0,-1).every((r,i)=>r===e[i])?t[t.length-1]-e[e.length-1]:0}function AI(t,e){let{routesMeta:n}=t,r={},i="/",s=[];for(let o=0;o<n.length;++o){let a=n[o],l=o===n.length-1,u=i==="/"?e:e.slice(i.length)||"/",h=xI({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!h)return null;Object.assign(r,h.params);let d=a.route;s.push({params:r,pathname:Ir([i,h.pathname]),pathnameBase:bI(Ir([i,h.pathnameBase])),route:d}),h.pathnameBase!=="/"&&(i=Ir([i,h.pathnameBase]))}return s}function xI(t,e){typeof t=="string"&&(t={path:t,caseSensitive:!1,end:!0});let[n,r]=DI(t.path,t.caseSensitive,t.end),i=e.match(n);if(!i)return null;let s=i[0],o=s.replace(/(.)\/+$/,"$1"),a=i.slice(1);return{params:r.reduce((u,h,d)=>{if(h==="*"){let c=a[d]||"";o=s.slice(0,s.length-c.length).replace(/(.)\/+$/,"$1")}return u[h]=PI(a[d]||"",h),u},{}),pathname:s,pathnameBase:o,pattern:t}}function DI(t,e,n){e===void 0&&(e=!1),n===void 0&&(n=!0),hp(t==="*"||!t.endsWith("*")||t.endsWith("/*"),'Route path "'+t+'" will be treated as if it were '+('"'+t.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+t.replace(/\*$/,"/*")+'".'));let r=[],i="^"+t.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(r.push(a),"/([^\\/]+)"));return t.endsWith("*")?(r.push("*"),i+=t==="*"||t==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":t!==""&&t!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,e?void 0:"i"),r]}function NI(t){try{return decodeURI(t)}catch(e){return hp(!1,'The URL path "'+t+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),t}}function PI(t,e){try{return decodeURIComponent(t)}catch(n){return hp(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+t+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+n+").")),t}}function zw(t,e){if(e==="/")return t;if(!t.toLowerCase().startsWith(e.toLowerCase()))return null;let n=e.endsWith("/")?e.length-1:e.length,r=t.charAt(n);return r&&r!=="/"?null:t.slice(n)||"/"}function hp(t,e){if(!t){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function OI(t,e){e===void 0&&(e="/");let{pathname:n,search:r="",hash:i=""}=typeof t=="string"?nr(t):t;return{pathname:n?n.startsWith("/")?n:LI(n,e):e,search:MI(r),hash:$I(i)}}function LI(t,e){let n=e.replace(/\/+$/,"").split("/");return t.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function dh(t,e,n,r){return"Cannot include a '"+t+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function dp(t){return t.filter((e,n)=>n===0||e.route.path&&e.route.path.length>0)}function Hw(t,e,n,r){r===void 0&&(r=!1);let i;typeof t=="string"?i=nr(t):(i=Ee({},t),se(!i.pathname||!i.pathname.includes("?"),dh("?","pathname","search",i)),se(!i.pathname||!i.pathname.includes("#"),dh("#","pathname","hash",i)),se(!i.search||!i.search.includes("#"),dh("#","search","hash",i)));let s=t===""||i.pathname==="",o=s?"/":i.pathname,a;if(r||o==null)a=n;else{let d=e.length-1;if(o.startsWith("..")){let c=o.split("/");for(;c[0]==="..";)c.shift(),d-=1;i.pathname=c.join("/")}a=d>=0?e[d]:"/"}let l=OI(i,a),u=o&&o!=="/"&&o.endsWith("/"),h=(s||o===".")&&n.endsWith("/");return!l.pathname.endsWith("/")&&(u||h)&&(l.pathname+="/"),l}const Ir=t=>t.join("/").replace(/\/\/+/g,"/"),bI=t=>t.replace(/\/+$/,"").replace(/^\/*/,"/"),MI=t=>!t||t==="?"?"":t.startsWith("?")?t:"?"+t,$I=t=>!t||t==="#"?"":t.startsWith("#")?t:"#"+t;class jg extends Error{}class UI{constructor(e){this.pendingKeys=new Set,this.subscriber=void 0,se(e&&typeof e=="object"&&!Array.isArray(e),"defer() only accepts plain objects");let n;this.abortPromise=new Promise((i,s)=>n=s),this.controller=new AbortController;let r=()=>n(new jg("Deferred data aborted"));this.unlistenAbortSignal=()=>this.controller.signal.removeEventListener("abort",r),this.controller.signal.addEventListener("abort",r),this.data=Object.entries(e).reduce((i,s)=>{let[o,a]=s;return Object.assign(i,{[o]:this.trackPromise(o,a)})},{})}trackPromise(e,n){if(!(n instanceof Promise))return n;this.pendingKeys.add(e);let r=Promise.race([n,this.abortPromise]).then(i=>this.onSettle(r,e,null,i),i=>this.onSettle(r,e,i));return r.catch(()=>{}),Object.defineProperty(r,"_tracked",{get:()=>!0}),r}onSettle(e,n,r,i){if(this.controller.signal.aborted&&r instanceof jg)return this.unlistenAbortSignal(),Object.defineProperty(e,"_error",{get:()=>r}),Promise.reject(r);this.pendingKeys.delete(n),this.done&&this.unlistenAbortSignal();const s=this.subscriber;return r?(Object.defineProperty(e,"_error",{get:()=>r}),s&&s(!1),Promise.reject(r)):(Object.defineProperty(e,"_data",{get:()=>i}),s&&s(!1),i)}subscribe(e){this.subscriber=e}cancel(){this.controller.abort(),this.pendingKeys.forEach((n,r)=>this.pendingKeys.delete(r));let e=this.subscriber;e&&e(!0)}async resolveData(e){let n=!1;if(!this.done){let r=()=>this.cancel();e.addEventListener("abort",r),n=await new Promise(i=>{this.subscribe(s=>{e.removeEventListener("abort",r),(s||this.done)&&i(s)})})}return n}get done(){return this.pendingKeys.size===0}get unwrappedData(){return se(this.data!==null&&this.done,"Can only unwrap data on initialized and settled deferreds"),Object.entries(this.data).reduce((e,n)=>{let[r,i]=n;return Object.assign(e,{[r]:VI(i)})},{})}}function FI(t){return t instanceof Promise&&t._tracked===!0}function VI(t){if(!FI(t))return t;if(t._error)throw t._error;return t._data}class nc{constructor(e,n,r,i){i===void 0&&(i=!1),this.status=e,this.statusText=n||"",this.internal=i,r instanceof Error?(this.data=r.toString(),this.error=r):this.data=r}}function Ww(t){return t instanceof nc}const qw=["post","put","patch","delete"],BI=new Set(qw),jI=["get",...qw],zI=new Set(jI),HI=new Set([301,302,303,307,308]),WI=new Set([307,308]),fh={state:"idle",location:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},qI={state:"idle",data:void 0,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},KI=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",GI=!KI;function QI(t){se(t.routes.length>0,"You must provide a non-empty routes array to createRouter");let e=Vw(t.routes),n=null,r=new Set,i=null,s=null,o=null,a=t.hydrationData!=null,l=so(e,t.history.location,t.basename),u=null;if(l==null){let _=Gr(404,{pathname:t.history.location.pathname}),{matches:w,route:T}=Gg(e);l=w,u={[T.id]:_}}let h=!l.some(_=>_.route.loader)||t.hydrationData!=null,d,c={historyAction:t.history.action,location:t.history.location,matches:l,initialized:h,navigation:fh,restoreScrollPosition:t.hydrationData!=null?!1:null,preventScrollReset:!1,revalidation:"idle",loaderData:t.hydrationData&&t.hydrationData.loaderData||{},actionData:t.hydrationData&&t.hydrationData.actionData||null,errors:t.hydrationData&&t.hydrationData.errors||u,fetchers:new Map},f=Fe.Pop,g=!1,E,C=!1,m=!1,p=[],y=[],S=new Map,x=0,O=-1,L=new Map,M=new Set,J=new Map,W=new Map;function q(){return n=t.history.listen(_=>{let{action:w,location:T}=_;return P(w,T)}),c.initialized||P(Fe.Pop,c.location),d}function ae(){n&&n(),r.clear(),E&&E.abort(),c.fetchers.forEach((_,w)=>Ms(w))}function de(_){return r.add(_),()=>r.delete(_)}function fe(_){c=Ee({},c,_),r.forEach(w=>w(c))}function Ye(_,w){var T;let U=c.actionData!=null&&c.navigation.formMethod!=null&&Qr(c.navigation.formMethod)&&c.navigation.state==="loading"&&((T=_.state)==null?void 0:T._isRedirect)!==!0,N;w.actionData?Object.keys(w.actionData).length>0?N=w.actionData:N=null:U?N=c.actionData:N=null;let ie=w.loaderData?Kg(c.loaderData,w.loaderData,w.matches||[],w.errors):c.loaderData;fe(Ee({},w,{actionData:N,loaderData:ie,historyAction:f,location:_,initialized:!0,navigation:fh,revalidation:"idle",restoreScrollPosition:c.navigation.formData?!1:$(_,w.matches||c.matches),preventScrollReset:g})),C||f===Fe.Pop||(f===Fe.Push?t.history.push(_,_.state):f===Fe.Replace&&t.history.replace(_,_.state)),f=Fe.Pop,g=!1,C=!1,m=!1,p=[],y=[]}async function rt(_,w){if(typeof _=="number"){t.history.go(_);return}let{path:T,submission:U,error:N}=zg(_,w),ie=Ko(c.location,T,w&&w.state);ie=Ee({},ie,t.history.encodeLocation(ie));let ne=w&&w.replace!=null?w.replace:void 0,oe=Fe.Push;ne===!0?oe=Fe.Replace:ne===!1||U!=null&&Qr(U.formMethod)&&U.formAction===c.location.pathname+c.location.search&&(oe=Fe.Replace);let ee=w&&"preventScrollReset"in w?w.preventScrollReset===!0:void 0;return await P(oe,ie,{submission:U,pendingError:N,preventScrollReset:ee,replace:w&&w.replace})}function rn(){if(Qt(),fe({revalidation:"loading"}),c.navigation.state!=="submitting"){if(c.navigation.state==="idle"){P(c.historyAction,c.location,{startUninterruptedRevalidation:!0});return}P(f||c.historyAction,c.navigation.location,{overrideNavigation:c.navigation})}}async function P(_,w,T){E&&E.abort(),E=null,f=_,C=(T&&T.startUninterruptedRevalidation)===!0,I(c.location,c.matches),g=(T&&T.preventScrollReset)===!0;let U=T&&T.overrideNavigation,N=so(e,w,t.basename);if(!N){let we=Gr(404,{pathname:w.pathname}),{matches:an,route:ln}=Gg(e);v(),Ye(w,{matches:an,loaderData:{},errors:{[ln.id]:we}});return}if(eC(c.location,w)){Ye(w,{matches:N});return}E=new AbortController;let ie=Xs(w,E.signal,T&&T.submission),ne,oe;if(T&&T.pendingError)oe={[Ki(N).route.id]:T.pendingError};else if(T&&T.submission&&Qr(T.submission.formMethod)){let we=await K(ie,w,T.submission,N,{replace:T.replace});if(we.shortCircuited)return;ne=we.pendingActionData,oe=we.pendingActionError,U=Ee({state:"loading",location:w},T.submission),ie=new Request(ie.url,{signal:ie.signal})}let{shortCircuited:ee,loaderData:$e,errors:ce}=await Z(ie,w,N,U,T&&T.submission,T&&T.replace,ne,oe);ee||(E=null,Ye(w,Ee({matches:N},ne?{actionData:ne}:{},{loaderData:$e,errors:ce})))}async function K(_,w,T,U,N){Qt();let ie=Ee({state:"submitting",location:w},T);fe({navigation:ie});let ne,oe=Jg(U,w);if(!oe.route.action)ne={type:st.error,error:Gr(405,{method:_.method,pathname:w.pathname,routeId:oe.route.id})};else if(ne=await Qs("action",_,oe,U,d.basename),_.signal.aborted)return{shortCircuited:!0};if(rs(ne)){let ee;return N&&N.replace!=null?ee=N.replace:ee=ne.location===c.location.pathname+c.location.search,await on(c,ne,{submission:T,replace:ee}),{shortCircuited:!0}}if(_o(ne)){let ee=Ki(U,oe.route.id);return(N&&N.replace)!==!0&&(f=Fe.Push),{pendingActionData:{},pendingActionError:{[ee.route.id]:ne.error}}}if(Zr(ne))throw new Error("defer() is not supported in actions");return{pendingActionData:{[oe.route.id]:ne.data}}}async function Z(_,w,T,U,N,ie,ne,oe){let ee=U;ee||(ee=Ee({state:"loading",location:w,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},N));let $e=N||(ee.formMethod&&ee.formAction&&ee.formData&&ee.formEncType?{formMethod:ee.formMethod,formAction:ee.formAction,formData:ee.formData,formEncType:ee.formEncType}:void 0),[ce,we]=Hg(c,T,$e,w,m,p,y,ne,oe,J);if(v(ht=>!(T&&T.some(Ut=>Ut.route.id===ht))||ce&&ce.some(Ut=>Ut.route.id===ht)),ce.length===0&&we.length===0)return Ye(w,Ee({matches:T,loaderData:{},errors:oe||null},ne?{actionData:ne}:{})),{shortCircuited:!0};if(!C){we.forEach(Ut=>{let[jr]=Ut,Fs=c.fetchers.get(jr),Vs={state:"loading",data:Fs&&Fs.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};c.fetchers.set(jr,Vs)});let ht=ne||c.actionData;fe(Ee({navigation:ee},ht?Object.keys(ht).length===0?{actionData:null}:{actionData:ht}:{},we.length>0?{fetchers:new Map(c.fetchers)}:{}))}O=++x,we.forEach(ht=>{let[Ut]=ht;return S.set(Ut,E)});let{results:an,loaderResults:ln,fetcherResults:Us}=await Nt(c.matches,T,ce,we,_);if(_.signal.aborted)return{shortCircuited:!0};we.forEach(ht=>{let[Ut]=ht;return S.delete(Ut)});let Ga=Qg(an);if(Ga)return await on(c,Ga,{replace:ie}),{shortCircuited:!0};let{loaderData:Qa,errors:Di}=qg(c,T,ce,ln,oe,we,Us,W);W.forEach((ht,Ut)=>{ht.subscribe(jr=>{(jr||ht.done)&&W.delete(Ut)})}),qa();let Fc=Ka(O);return Ee({loaderData:Qa,errors:Di},Fc||we.length>0?{fetchers:new Map(c.fetchers)}:{})}function ve(_){return c.fetchers.get(_)||qI}function Ae(_,w,T,U){if(GI)throw new Error("router.fetch() was called during the server render, but it shouldn't be. You are likely calling a useFetcher() method in the body of your component. Try moving it to a useEffect or a callback.");S.has(_)&&xi(_);let N=so(e,T,t.basename);if(!N){Ai(_,w,Gr(404,{pathname:T}));return}let{path:ie,submission:ne}=zg(T,U,!0),oe=Jg(N,ie);if(ne&&Qr(ne.formMethod)){rr(_,w,ie,oe,N,ne);return}J.set(_,[ie,oe,N]),sn(_,w,ie,oe,N,ne)}async function rr(_,w,T,U,N,ie){if(Qt(),J.delete(_),!U.route.action){let Mn=Gr(405,{method:ie.formMethod,pathname:T,routeId:w});Ai(_,w,Mn);return}let ne=c.fetchers.get(_),oe=Ee({state:"submitting"},ie,{data:ne&&ne.data," _hasFetcherDoneAnything ":!0});c.fetchers.set(_,oe),fe({fetchers:new Map(c.fetchers)});let ee=new AbortController,$e=Xs(T,ee.signal,ie);S.set(_,ee);let ce=await Qs("action",$e,U,N,d.basename);if($e.signal.aborted){S.get(_)===ee&&S.delete(_);return}if(rs(ce)){S.delete(_),M.add(_);let Mn=Ee({state:"loading"},ie,{data:void 0," _hasFetcherDoneAnything ":!0});return c.fetchers.set(_,Mn),fe({fetchers:new Map(c.fetchers)}),on(c,ce,{isFetchActionRedirect:!0})}if(_o(ce)){Ai(_,w,ce.error);return}Zr(ce)&&se(!1,"defer() is not supported in actions");let we=c.navigation.location||c.location,an=Xs(we,ee.signal),ln=c.navigation.state!=="idle"?so(e,c.navigation.location,t.basename):c.matches;se(ln,"Didn't find any matches after fetcher action");let Us=++x;L.set(_,Us);let Ga=Ee({state:"loading",data:ce.data},ie,{" _hasFetcherDoneAnything ":!0});c.fetchers.set(_,Ga);let[Qa,Di]=Hg(c,ln,ie,we,m,p,y,{[U.route.id]:ce.data},void 0,J);Di.filter(Mn=>{let[zr]=Mn;return zr!==_}).forEach(Mn=>{let[zr]=Mn,xm=c.fetchers.get(zr),FS={state:"loading",data:xm&&xm.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};c.fetchers.set(zr,FS),S.set(zr,ee)}),fe({fetchers:new Map(c.fetchers)});let{results:Fc,loaderResults:ht,fetcherResults:Ut}=await Nt(c.matches,ln,Qa,Di,an);if(ee.signal.aborted)return;L.delete(_),S.delete(_),Di.forEach(Mn=>{let[zr]=Mn;return S.delete(zr)});let jr=Qg(Fc);if(jr)return on(c,jr);let{loaderData:Fs,errors:Vs}=qg(c,c.matches,Qa,ht,void 0,Di,Ut,W),$S={state:"idle",data:ce.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};c.fetchers.set(_,$S);let US=Ka(Us);c.navigation.state==="loading"&&Us>O?(se(f,"Expected pending action"),E&&E.abort(),Ye(c.navigation.location,{matches:ln,loaderData:Fs,errors:Vs,fetchers:new Map(c.fetchers)})):(fe(Ee({errors:Vs,loaderData:Kg(c.loaderData,Fs,ln,Vs)},US?{fetchers:new Map(c.fetchers)}:{})),m=!1)}async function sn(_,w,T,U,N,ie){let ne=c.fetchers.get(_),oe=Ee({state:"loading",formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0},ie,{data:ne&&ne.data," _hasFetcherDoneAnything ":!0});c.fetchers.set(_,oe),fe({fetchers:new Map(c.fetchers)});let ee=new AbortController,$e=Xs(T,ee.signal);S.set(_,ee);let ce=await Qs("loader",$e,U,N,d.basename);if(Zr(ce)&&(ce=await Xw(ce,$e.signal,!0)||ce),S.get(_)===ee&&S.delete(_),$e.signal.aborted)return;if(rs(ce)){await on(c,ce);return}if(_o(ce)){let an=Ki(c.matches,w);c.fetchers.delete(_),fe({fetchers:new Map(c.fetchers),errors:{[an.route.id]:ce.error}});return}se(!Zr(ce),"Unhandled fetcher deferred data");let we={state:"idle",data:ce.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};c.fetchers.set(_,we),fe({fetchers:new Map(c.fetchers)})}async function on(_,w,T){var U;let{submission:N,replace:ie,isFetchActionRedirect:ne}=T===void 0?{}:T;w.revalidate&&(m=!0);let oe=Ko(_.location,w.location,Ee({_isRedirect:!0},ne?{_isFetchActionRedirect:!0}:{}));if(se(oe,"Expected a location on the redirect navigation"),typeof((U=window)==null?void 0:U.location)<"u"){let ln=Go(w.location).origin;if(window.location.origin!==ln){ie?window.location.replace(w.location):window.location.assign(w.location);return}}E=null;let ee=ie===!0?Fe.Replace:Fe.Push,{formMethod:$e,formAction:ce,formEncType:we,formData:an}=_.navigation;!N&&$e&&ce&&an&&we&&(N={formMethod:$e,formAction:ce,formEncType:we,formData:an}),WI.has(w.status)&&N&&Qr(N.formMethod)?await P(ee,oe,{submission:Ee({},N,{formAction:w.location})}):await P(ee,oe,{overrideNavigation:{state:"loading",location:oe,formMethod:N?N.formMethod:void 0,formAction:N?N.formAction:void 0,formEncType:N?N.formEncType:void 0,formData:N?N.formData:void 0}})}async function Nt(_,w,T,U,N){let ie=await Promise.all([...T.map(ee=>Qs("loader",N,ee,w,d.basename)),...U.map(ee=>{let[,$e,ce,we]=ee;return Qs("loader",Xs($e,N.signal),ce,we,d.basename)})]),ne=ie.slice(0,T.length),oe=ie.slice(T.length);return await Promise.all([Xg(_,T,ne,N.signal,!1,c.loaderData),Xg(_,U.map(ee=>{let[,,$e]=ee;return $e}),oe,N.signal,!0)]),{results:ie,loaderResults:ne,fetcherResults:oe}}function Qt(){m=!0,p.push(...v()),J.forEach((_,w)=>{S.has(w)&&(y.push(w),xi(w))})}function Ai(_,w,T){let U=Ki(c.matches,w);Ms(_),fe({errors:{[U.route.id]:T},fetchers:new Map(c.fetchers)})}function Ms(_){S.has(_)&&xi(_),J.delete(_),L.delete(_),M.delete(_),c.fetchers.delete(_)}function xi(_){let w=S.get(_);se(w,"Expected fetch controller: "+_),w.abort(),S.delete(_)}function $s(_){for(let w of _){let U={state:"idle",data:ve(w).data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};c.fetchers.set(w,U)}}function qa(){let _=[];for(let w of M){let T=c.fetchers.get(w);se(T,"Expected fetcher: "+w),T.state==="loading"&&(M.delete(w),_.push(w))}$s(_)}function Ka(_){let w=[];for(let[T,U]of L)if(U<_){let N=c.fetchers.get(T);se(N,"Expected fetcher: "+T),N.state==="loading"&&(xi(T),L.delete(T),w.push(T))}return $s(w),w.length>0}function v(_){let w=[];return W.forEach((T,U)=>{(!_||_(U))&&(T.cancel(),w.push(U),W.delete(U))}),w}function k(_,w,T){if(i=_,o=w,s=T||(U=>U.key),!a&&c.navigation===fh){a=!0;let U=$(c.location,c.matches);U!=null&&fe({restoreScrollPosition:U})}return()=>{i=null,o=null,s=null}}function I(_,w){if(i&&s&&o){let T=w.map(N=>Yg(N,c.loaderData)),U=s(_,T)||_.key;i[U]=o()}}function $(_,w){if(i&&s&&o){let T=w.map(ie=>Yg(ie,c.loaderData)),U=s(_,T)||_.key,N=i[U];if(typeof N=="number")return N}return null}return d={get basename(){return t.basename},get state(){return c},get routes(){return e},initialize:q,subscribe:de,enableScrollRestoration:k,navigate:rt,fetch:Ae,revalidate:rn,createHref:_=>t.history.createHref(_),encodeLocation:_=>t.history.encodeLocation(_),getFetcher:ve,deleteFetcher:Ms,dispose:ae,_internalFetchControllers:S,_internalActiveDeferreds:W},d}function XI(t){return t!=null&&"formData"in t}function zg(t,e,n){n===void 0&&(n=!1);let r=typeof t=="string"?t:Nr(t);if(!e||!XI(e))return{path:r};if(e.formMethod&&!nC(e.formMethod))return{path:r,error:Gr(405,{method:e.formMethod})};let i;if(e.formData&&(i={formMethod:e.formMethod||"get",formAction:Qw(r),formEncType:e&&e.formEncType||"application/x-www-form-urlencoded",formData:e.formData},Qr(i.formMethod)))return{path:r,submission:i};let s=nr(r);try{let o=Gw(e.formData);n&&s.search&&Yw(s.search)&&o.append("index",""),s.search="?"+o}catch{return{path:r,error:Gr(400)}}return{path:Nr(s),submission:i}}function YI(t,e){let n=t;if(e){let r=t.findIndex(i=>i.route.id===e);r>=0&&(n=t.slice(0,r))}return n}function Hg(t,e,n,r,i,s,o,a,l,u){let h=l?Object.values(l)[0]:a?Object.values(a)[0]:void 0,d=l?Object.keys(l)[0]:void 0,f=YI(e,d).filter((E,C)=>E.route.loader!=null&&(JI(t.loaderData,t.matches[C],E)||s.some(m=>m===E.route.id)||Wg(t.location,t.matches[C],n,r,E,i,h))),g=[];return u&&u.forEach((E,C)=>{let[m,p,y]=E;o.includes(C)?g.push([C,m,p,y]):i&&Wg(m,p,n,m,p,i,h)&&g.push([C,m,p,y])}),[f,g]}function JI(t,e,n){let r=!e||n.route.id!==e.route.id,i=t[n.route.id]===void 0;return r||i}function Kw(t,e){let n=t.route.path;return t.pathname!==e.pathname||n&&n.endsWith("*")&&t.params["*"]!==e.params["*"]}function Wg(t,e,n,r,i,s,o){let a=Go(t),l=e.params,u=Go(r),h=i.params,d=Kw(e,i)||a.toString()===u.toString()||a.search!==u.search||s;if(i.route.shouldRevalidate){let c=i.route.shouldRevalidate(Ee({currentUrl:a,currentParams:l,nextUrl:u,nextParams:h},n,{actionResult:o,defaultShouldRevalidate:d}));if(typeof c=="boolean")return c}return d}async function Qs(t,e,n,r,i,s,o,a){i===void 0&&(i="/"),s===void 0&&(s=!1),o===void 0&&(o=!1);let l,u,h,d=new Promise((f,g)=>h=g),c=()=>h();e.signal.addEventListener("abort",c);try{let f=n.route[t];se(f,"Could not find the "+t+' to run on the "'+n.route.id+'" route'),u=await Promise.race([f({request:e,params:n.params,context:a}),d]),se(u!==void 0,"You defined "+(t==="action"?"an action":"a loader")+" for route "+('"'+n.route.id+"\" but didn't return anything from your `"+t+"` ")+"function. Please return a value or `null`.")}catch(f){l=st.error,u=f}finally{e.signal.removeEventListener("abort",c)}if(tC(u)){let f=u.status;if(HI.has(f)){let C=u.headers.get("Location");if(se(C,"Redirects returned/thrown from loaders/actions must have a Location header"),!(/^[a-z+]+:\/\//i.test(C)||C.startsWith("//"))){let p=r.slice(0,r.indexOf(n)+1),y=dp(p).map(x=>x.pathnameBase),S=Hw(C,y,new URL(e.url).pathname);if(se(Nr(S),"Unable to resolve redirect location: "+C),i){let x=S.pathname;S.pathname=x==="/"?i:Ir([i,x])}C=Nr(S)}if(s)throw u.headers.set("Location",C),u;return{type:st.redirect,status:f,location:C,revalidate:u.headers.get("X-Remix-Revalidate")!==null}}if(o)throw{type:l||st.data,response:u};let g,E=u.headers.get("Content-Type");return E&&/\bapplication\/json\b/.test(E)?g=await u.json():g=await u.text(),l===st.error?{type:l,error:new nc(f,u.statusText,g),headers:u.headers}:{type:st.data,data:g,statusCode:u.status,headers:u.headers}}return l===st.error?{type:l,error:u}:u instanceof UI?{type:st.deferred,deferredData:u}:{type:st.data,data:u}}function Xs(t,e,n){let r=Go(Qw(t)).toString(),i={signal:e};if(n&&Qr(n.formMethod)){let{formMethod:s,formEncType:o,formData:a}=n;i.method=s.toUpperCase(),i.body=o==="application/x-www-form-urlencoded"?Gw(a):a}return new Request(r,i)}function Gw(t){let e=new URLSearchParams;for(let[n,r]of t.entries())se(typeof r=="string",'File inputs are not supported with encType "application/x-www-form-urlencoded", please use "multipart/form-data" instead.'),e.append(n,r);return e}function ZI(t,e,n,r,i){let s={},o=null,a,l=!1,u={};return n.forEach((h,d)=>{let c=e[d].route.id;if(se(!rs(h),"Cannot handle redirect results in processLoaderData"),_o(h)){let f=Ki(t,c),g=h.error;r&&(g=Object.values(r)[0],r=void 0),o=o||{},o[f.route.id]==null&&(o[f.route.id]=g),s[c]=void 0,l||(l=!0,a=Ww(h.error)?h.error.status:500),h.headers&&(u[c]=h.headers)}else Zr(h)?(i&&i.set(c,h.deferredData),s[c]=h.deferredData.data):(s[c]=h.data,h.statusCode!=null&&h.statusCode!==200&&!l&&(a=h.statusCode),h.headers&&(u[c]=h.headers))}),r&&(o=r,s[Object.keys(r)[0]]=void 0),{loaderData:s,errors:o,statusCode:a||200,loaderHeaders:u}}function qg(t,e,n,r,i,s,o,a){let{loaderData:l,errors:u}=ZI(e,n,r,i,a);for(let h=0;h<s.length;h++){let[d,,c]=s[h];se(o!==void 0&&o[h]!==void 0,"Did not find corresponding fetcher result");let f=o[h];if(_o(f)){let g=Ki(t.matches,c.route.id);u&&u[g.route.id]||(u=Ee({},u,{[g.route.id]:f.error})),t.fetchers.delete(d)}else{if(rs(f))throw new Error("Unhandled fetcher revalidation redirect");if(Zr(f))throw new Error("Unhandled fetcher deferred data");{let g={state:"idle",data:f.data,formMethod:void 0,formAction:void 0,formEncType:void 0,formData:void 0," _hasFetcherDoneAnything ":!0};t.fetchers.set(d,g)}}}return{loaderData:l,errors:u}}function Kg(t,e,n,r){let i=Ee({},e);for(let s of n){let o=s.route.id;if(e.hasOwnProperty(o)?e[o]!==void 0&&(i[o]=e[o]):t[o]!==void 0&&(i[o]=t[o]),r&&r.hasOwnProperty(o))break}return i}function Ki(t,e){return(e?t.slice(0,t.findIndex(r=>r.route.id===e)+1):[...t]).reverse().find(r=>r.route.hasErrorBoundary===!0)||t[0]}function Gg(t){let e=t.find(n=>n.index||!n.path||n.path==="/")||{id:"__shim-error-route__"};return{matches:[{params:{},pathname:"",pathnameBase:"",route:e}],route:e}}function Gr(t,e){let{pathname:n,routeId:r,method:i}=e===void 0?{}:e,s="Unknown Server Error",o="Unknown @remix-run/router error";return t===400?(s="Bad Request",i&&n&&r?o="You made a "+i+' request to "'+n+'" but '+('did not provide a `loader` for route "'+r+'", ')+"so there is no way to handle the request.":o="Cannot submit binary form data using GET"):t===403?(s="Forbidden",o='Route "'+r+'" does not match URL "'+n+'"'):t===404?(s="Not Found",o='No route matches URL "'+n+'"'):t===405&&(s="Method Not Allowed",i&&n&&r?o="You made a "+i.toUpperCase()+' request to "'+n+'" but '+('did not provide an `action` for route "'+r+'", ')+"so there is no way to handle the request.":i&&(o='Invalid request method "'+i.toUpperCase()+'"')),new nc(t||500,s,new Error(o),!0)}function Qg(t){for(let e=t.length-1;e>=0;e--){let n=t[e];if(rs(n))return n}}function Qw(t){let e=typeof t=="string"?nr(t):t;return Nr(Ee({},e,{hash:""}))}function eC(t,e){return t.pathname===e.pathname&&t.search===e.search&&t.hash!==e.hash}function Zr(t){return t.type===st.deferred}function _o(t){return t.type===st.error}function rs(t){return(t&&t.type)===st.redirect}function tC(t){return t!=null&&typeof t.status=="number"&&typeof t.statusText=="string"&&typeof t.headers=="object"&&typeof t.body<"u"}function nC(t){return zI.has(t)}function Qr(t){return BI.has(t)}async function Xg(t,e,n,r,i,s){for(let o=0;o<n.length;o++){let a=n[o],l=e[o],u=t.find(d=>d.route.id===l.route.id),h=u!=null&&!Kw(u,l)&&(s&&s[l.route.id])!==void 0;Zr(a)&&(i||h)&&await Xw(a,r,i).then(d=>{d&&(n[o]=d||n[o])})}}async function Xw(t,e,n){if(n===void 0&&(n=!1),!await t.deferredData.resolveData(e)){if(n)try{return{type:st.data,data:t.deferredData.unwrappedData}}catch(i){return{type:st.error,error:i}}return{type:st.data,data:t.deferredData.data}}}function Yw(t){return new URLSearchParams(t).getAll("index").some(e=>e==="")}function Yg(t,e){let{route:n,pathname:r,params:i}=t;return{id:n.id,pathname:r,params:i,data:e[n.id],handle:n.handle}}function Jg(t,e){let n=typeof e=="string"?nr(e).search:e.search;if(t[t.length-1].route.index&&Yw(n||""))return t[t.length-1];let r=dp(t);return r[r.length-1]}/**
 * React Router v6.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function du(){return du=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},du.apply(this,arguments)}function rC(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}const iC=typeof Object.is=="function"?Object.is:rC,{useState:sC,useEffect:oC,useLayoutEffect:aC,useDebugValue:lC}=Fh;function uC(t,e,n){const r=e(),[{inst:i},s]=sC({inst:{value:r,getSnapshot:e}});return aC(()=>{i.value=r,i.getSnapshot=e,ph(i)&&s({inst:i})},[t,r,e]),oC(()=>(ph(i)&&s({inst:i}),t(()=>{ph(i)&&s({inst:i})})),[t]),lC(r),r}function ph(t){const e=t.getSnapshot,n=t.value;try{const r=e();return!iC(n,r)}catch{return!0}}function cC(t,e,n){return e()}const hC=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u",dC=!hC,fC=dC?cC:uC,pC="useSyncExternalStore"in Fh?(t=>t.useSyncExternalStore)(Fh):fC,mC=b.createContext(null),Jw=b.createContext(null),rc=b.createContext(null),fp=b.createContext(null),ic=b.createContext(null),va=b.createContext({outlet:null,matches:[]}),Zw=b.createContext(null);function wa(){return b.useContext(ic)!=null}function e1(){return wa()||se(!1),b.useContext(ic).location}function t1(){wa()||se(!1);let{basename:t,navigator:e}=b.useContext(fp),{matches:n}=b.useContext(va),{pathname:r}=e1(),i=JSON.stringify(dp(n).map(a=>a.pathnameBase)),s=b.useRef(!1);return b.useEffect(()=>{s.current=!0}),b.useCallback(function(a,l){if(l===void 0&&(l={}),!s.current)return;if(typeof a=="number"){e.go(a);return}let u=Hw(a,JSON.parse(i),r,l.relative==="path");t!=="/"&&(u.pathname=u.pathname==="/"?t:Ir([t,u.pathname])),(l.replace?e.replace:e.push)(u,l.state,l)},[t,e,i,r])}function gC(t,e){wa()||se(!1);let{navigator:n}=b.useContext(fp),r=b.useContext(rc),{matches:i}=b.useContext(va),s=i[i.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=e1(),u;if(e){var h;let E=typeof e=="string"?nr(e):e;a==="/"||(h=E.pathname)!=null&&h.startsWith(a)||se(!1),u=E}else u=l;let d=u.pathname||"/",c=a==="/"?d:d.slice(a.length)||"/",f=so(t,{pathname:c}),g=EC(f&&f.map(E=>Object.assign({},E,{params:Object.assign({},o,E.params),pathname:Ir([a,n.encodeLocation?n.encodeLocation(E.pathname).pathname:E.pathname]),pathnameBase:E.pathnameBase==="/"?a:Ir([a,n.encodeLocation?n.encodeLocation(E.pathnameBase).pathname:E.pathnameBase])})),i,r||void 0);return e&&g?b.createElement(ic.Provider,{value:{location:du({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:Fe.Pop}},g):g}function yC(){let t=kC(),e=Ww(t)?t.status+" "+t.statusText:t instanceof Error?t.message:JSON.stringify(t),n=t instanceof Error?t.stack:null,r="rgba(200,200,200, 0.5)",i={padding:"0.5rem",backgroundColor:r},s={padding:"2px 4px",backgroundColor:r};return b.createElement(b.Fragment,null,b.createElement("h2",null,"Unhandled Thrown Error!"),b.createElement("h3",{style:{fontStyle:"italic"}},e),n?b.createElement("pre",{style:i},n):null,b.createElement("p",null,"💿 Hey developer 👋"),b.createElement("p",null,"You can provide a way better UX than this when your app throws errors by providing your own ",b.createElement("code",{style:s},"errorElement")," props on ",b.createElement("code",{style:s},"<Route>")))}class vC extends b.Component{constructor(e){super(e),this.state={location:e.location,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,n){return n.location!==e.location?{error:e.error,location:e.location}:{error:e.error||n.error,location:n.location}}componentDidCatch(e,n){console.error("React Router caught the following error during render",e,n)}render(){return this.state.error?b.createElement(va.Provider,{value:this.props.routeContext},b.createElement(Zw.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function wC(t){let{routeContext:e,match:n,children:r}=t,i=b.useContext(mC);return i&&n.route.errorElement&&(i._deepestRenderedBoundaryId=n.route.id),b.createElement(va.Provider,{value:e},r)}function EC(t,e,n){if(e===void 0&&(e=[]),t==null)if(n!=null&&n.errors)t=n.matches;else return null;let r=t,i=n==null?void 0:n.errors;if(i!=null){let s=r.findIndex(o=>o.route.id&&(i==null?void 0:i[o.route.id]));s>=0||se(!1),r=r.slice(0,Math.min(r.length,s+1))}return r.reduceRight((s,o,a)=>{let l=o.route.id?i==null?void 0:i[o.route.id]:null,u=n?o.route.errorElement||b.createElement(yC,null):null,h=e.concat(r.slice(0,a+1)),d=()=>b.createElement(wC,{match:o,routeContext:{outlet:s,matches:h}},l?u:o.route.element!==void 0?o.route.element:s);return n&&(o.route.errorElement||a===0)?b.createElement(vC,{location:n.location,component:u,error:l,children:d(),routeContext:{outlet:null,matches:h}}):d()},null)}var Zg;(function(t){t.UseRevalidator="useRevalidator"})(Zg||(Zg={}));var fu;(function(t){t.UseLoaderData="useLoaderData",t.UseActionData="useActionData",t.UseRouteError="useRouteError",t.UseNavigation="useNavigation",t.UseRouteLoaderData="useRouteLoaderData",t.UseMatches="useMatches",t.UseRevalidator="useRevalidator"})(fu||(fu={}));function _C(t){let e=b.useContext(rc);return e||se(!1),e}function SC(t){let e=b.useContext(va);return e||se(!1),e}function TC(t){let e=SC(),n=e.matches[e.matches.length-1];return n.route.id||se(!1),n.route.id}function kC(){var t;let e=b.useContext(Zw),n=_C(fu.UseRouteError),r=TC(fu.UseRouteError);return e||((t=n.errors)==null?void 0:t[r])}function IC(t){let{fallbackElement:e,router:n}=t,r=pC(n.subscribe,()=>n.state,()=>n.state),i=b.useMemo(()=>({createHref:n.createHref,encodeLocation:n.encodeLocation,go:o=>n.navigate(o),push:(o,a,l)=>n.navigate(o,{state:a,preventScrollReset:l==null?void 0:l.preventScrollReset}),replace:(o,a,l)=>n.navigate(o,{replace:!0,state:a,preventScrollReset:l==null?void 0:l.preventScrollReset})}),[n]),s=n.basename||"/";return b.createElement(Jw.Provider,{value:{router:n,navigator:i,static:!1,basename:s}},b.createElement(rc.Provider,{value:r},b.createElement(RC,{basename:n.basename,location:n.state.location,navigationType:n.state.historyAction,navigator:i},n.state.initialized?b.createElement(AC,null):e)))}function n1(t){let{to:e,replace:n,state:r,relative:i}=t;wa()||se(!1);let s=b.useContext(rc),o=t1();return b.useEffect(()=>{s&&s.navigation.state!=="idle"||o(e,{replace:n,state:r,relative:i})}),null}function CC(t){se(!1)}function RC(t){let{basename:e="/",children:n=null,location:r,navigationType:i=Fe.Pop,navigator:s,static:o=!1}=t;wa()&&se(!1);let a=e.replace(/^\/*/,"/"),l=b.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof r=="string"&&(r=nr(r));let{pathname:u="/",search:h="",hash:d="",state:c=null,key:f="default"}=r,g=b.useMemo(()=>{let E=zw(u,a);return E==null?null:{pathname:E,search:h,hash:d,state:c,key:f}},[a,u,h,d,c,f]);return g==null?null:b.createElement(fp.Provider,{value:l},b.createElement(ic.Provider,{children:n,value:{location:g,navigationType:i}}))}function AC(t){let{children:e,location:n}=t,r=b.useContext(Jw),i=r&&!e?r.router.routes:bd(e);return gC(i,n)}var ey;(function(t){t[t.pending=0]="pending",t[t.success=1]="success",t[t.error=2]="error"})(ey||(ey={}));new Promise(()=>{});function bd(t,e){e===void 0&&(e=[]);let n=[];return b.Children.forEach(t,(r,i)=>{if(!b.isValidElement(r))return;if(r.type===b.Fragment){n.push.apply(n,bd(r.props.children,e));return}r.type!==CC&&se(!1),!r.props.index||!r.props.children||se(!1);let s=[...e,i],o={id:r.props.id||s.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,hasErrorBoundary:r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle};r.props.children&&(o.children=bd(r.props.children,s)),n.push(o)}),n}function r1(t){return t.map(e=>{let n=du({},e);return n.hasErrorBoundary==null&&(n.hasErrorBoundary=n.errorElement!=null),n.children&&(n.children=r1(n.children)),n})}/**
 * React Router DOM v6.6.1
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Md(){return Md=Object.assign?Object.assign.bind():function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},Md.apply(this,arguments)}function xC(t,e){return QI({basename:e==null?void 0:e.basename,history:mI({window:e==null?void 0:e.window}),hydrationData:(e==null?void 0:e.hydrationData)||DC(),routes:r1(t)}).initialize()}function DC(){var t;let e=(t=window)==null?void 0:t.__staticRouterHydrationData;return e&&e.errors&&(e=Md({},e,{errors:NC(e.errors)})),e}function NC(t){if(!t)return null;let e=Object.entries(t),n={};for(let[r,i]of e)if(i&&i.__type==="RouteErrorResponse")n[r]=new nc(i.status,i.statusText,i.data,i.internal===!0);else if(i&&i.__type==="Error"){let s=new Error(i.message);s.stack="",n[r]=s}else n[r]=i;return n}var ty;(function(t){t.UseScrollRestoration="useScrollRestoration",t.UseSubmitImpl="useSubmitImpl",t.UseFetcher="useFetcher"})(ty||(ty={}));var ny;(function(t){t.UseFetchers="useFetchers",t.UseScrollRestoration="useScrollRestoration"})(ny||(ny={}));/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const i1=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},PC=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],l=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(l>>10)),e[r++]=String.fromCharCode(56320+(l&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},s1={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,l=i+2<t.length,u=l?t[i+2]:0,h=s>>2,d=(s&3)<<4|a>>4;let c=(a&15)<<2|u>>6,f=u&63;l||(f=64,o||(c=64)),r.push(n[h],n[d],n[c],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i1(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):PC(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw Error();const c=s<<2|a>>4;if(r.push(c),u!==64){const f=a<<4&240|u>>2;if(r.push(f),d!==64){const g=u<<6&192|d;r.push(g)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},OC=function(t){const e=i1(t);return s1.encodeByteArray(e,!0)},pu=function(t){return OC(t).replace(/\./g,"")},o1=function(t){try{return s1.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function LC(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bC=()=>LC().__FIREBASE_DEFAULTS__,MC=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},$C=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&o1(t[1]);return e&&JSON.parse(e)},sc=()=>{try{return bC()||MC()||$C()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},a1=t=>{var e,n;return(n=(e=sc())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},l1=t=>{const e=a1(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},UC=()=>{var t;return(t=sc())===null||t===void 0?void 0:t.config},u1=t=>{var e;return(e=sc())===null||e===void 0?void 0:e[`_${t}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FC{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c1(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t),a="";return[pu(JSON.stringify(n)),pu(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _t(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function VC(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_t())}function BC(){var t;const e=(t=sc())===null||t===void 0?void 0:t.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function jC(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function zC(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function HC(){const t=_t();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function WC(){try{return typeof indexedDB=="object"}catch{return!1}}function qC(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const KC="FirebaseError";class bn extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=KC,Object.setPrototypeOf(this,bn.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Ea.prototype.create)}}class Ea{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?GC(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new bn(i,a,r)}}function GC(t,e){return t.replace(QC,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const QC=/\{\$([^}]+)}/g;function XC(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function mu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(ry(s)&&ry(o)){if(!mu(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function ry(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _a(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function oo(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function ao(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function YC(t,e){const n=new JC(t,e);return n.subscribe.bind(n)}class JC{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ZC(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=mh),i.error===void 0&&(i.error=mh),i.complete===void 0&&(i.complete=mh);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ZC(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function mh(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(t){return t&&t._delegate?t._delegate:t}class Pr{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eR{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new FC;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(nR(e))try{this.getOrInitializeService({instanceIdentifier:qr})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=qr){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=qr){return this.instances.has(e)}getOptions(e=qr){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:tR(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=qr){return this.component?this.component.multipleInstances?e:qr:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function tR(t){return t===qr?void 0:t}function nR(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rR{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new eR(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var me;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(me||(me={}));const iR={debug:me.DEBUG,verbose:me.VERBOSE,info:me.INFO,warn:me.WARN,error:me.ERROR,silent:me.SILENT},sR=me.INFO,oR={[me.DEBUG]:"log",[me.VERBOSE]:"log",[me.INFO]:"info",[me.WARN]:"warn",[me.ERROR]:"error"},aR=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=oR[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class pp{constructor(e){this.name=e,this._logLevel=sR,this._logHandler=aR,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in me))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?iR[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,me.DEBUG,...e),this._logHandler(this,me.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,me.VERBOSE,...e),this._logHandler(this,me.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,me.INFO,...e),this._logHandler(this,me.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,me.WARN,...e),this._logHandler(this,me.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,me.ERROR,...e),this._logHandler(this,me.ERROR,...e)}}const lR=(t,e)=>e.some(n=>t instanceof n);let iy,sy;function uR(){return iy||(iy=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function cR(){return sy||(sy=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h1=new WeakMap,$d=new WeakMap,d1=new WeakMap,gh=new WeakMap,mp=new WeakMap;function hR(t){const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("success",s),t.removeEventListener("error",o)},s=()=>{n(Cr(t.result)),i()},o=()=>{r(t.error),i()};t.addEventListener("success",s),t.addEventListener("error",o)});return e.then(n=>{n instanceof IDBCursor&&h1.set(n,t)}).catch(()=>{}),mp.set(e,t),e}function dR(t){if($d.has(t))return;const e=new Promise((n,r)=>{const i=()=>{t.removeEventListener("complete",s),t.removeEventListener("error",o),t.removeEventListener("abort",o)},s=()=>{n(),i()},o=()=>{r(t.error||new DOMException("AbortError","AbortError")),i()};t.addEventListener("complete",s),t.addEventListener("error",o),t.addEventListener("abort",o)});$d.set(t,e)}let Ud={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return $d.get(t);if(e==="objectStoreNames")return t.objectStoreNames||d1.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Cr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function fR(t){Ud=t(Ud)}function pR(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(yh(this),e,...n);return d1.set(r,e.sort?e.sort():[e]),Cr(r)}:cR().includes(t)?function(...e){return t.apply(yh(this),e),Cr(h1.get(this))}:function(...e){return Cr(t.apply(yh(this),e))}}function mR(t){return typeof t=="function"?pR(t):(t instanceof IDBTransaction&&dR(t),lR(t,uR())?new Proxy(t,Ud):t)}function Cr(t){if(t instanceof IDBRequest)return hR(t);if(gh.has(t))return gh.get(t);const e=mR(t);return e!==t&&(gh.set(t,e),mp.set(e,t)),e}const yh=t=>mp.get(t);function gR(t,e,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(t,e),a=Cr(o);return r&&o.addEventListener("upgradeneeded",l=>{r(Cr(o.result),l.oldVersion,l.newVersion,Cr(o.transaction))}),n&&o.addEventListener("blocked",()=>n()),a.then(l=>{s&&l.addEventListener("close",()=>s()),i&&l.addEventListener("versionchange",()=>i())}).catch(()=>{}),a}const yR=["get","getKey","getAll","getAllKeys","count"],vR=["put","add","delete","clear"],vh=new Map;function oy(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(vh.get(e))return vh.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,i=vR.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(i||yR.includes(n)))return;const s=async function(o,...a){const l=this.transaction(o,i?"readwrite":"readonly");let u=l.store;return r&&(u=u.index(a.shift())),(await Promise.all([u[n](...a),i&&l.done]))[0]};return vh.set(e,s),s}fR(t=>({...t,get:(e,n,r)=>oy(e,n)||t.get(e,n,r),has:(e,n)=>!!oy(e,n)||t.has(e,n)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wR{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ER(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ER(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fd="@firebase/app",ay="0.9.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mi=new pp("@firebase/app"),_R="@firebase/app-compat",SR="@firebase/analytics-compat",TR="@firebase/analytics",kR="@firebase/app-check-compat",IR="@firebase/app-check",CR="@firebase/auth",RR="@firebase/auth-compat",AR="@firebase/database",xR="@firebase/database-compat",DR="@firebase/functions",NR="@firebase/functions-compat",PR="@firebase/installations",OR="@firebase/installations-compat",LR="@firebase/messaging",bR="@firebase/messaging-compat",MR="@firebase/performance",$R="@firebase/performance-compat",UR="@firebase/remote-config",FR="@firebase/remote-config-compat",VR="@firebase/storage",BR="@firebase/storage-compat",jR="@firebase/firestore",zR="@firebase/firestore-compat",HR="firebase",WR="9.16.0";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd="[DEFAULT]",qR={[Fd]:"fire-core",[_R]:"fire-core-compat",[TR]:"fire-analytics",[SR]:"fire-analytics-compat",[IR]:"fire-app-check",[kR]:"fire-app-check-compat",[CR]:"fire-auth",[RR]:"fire-auth-compat",[AR]:"fire-rtdb",[xR]:"fire-rtdb-compat",[DR]:"fire-fn",[NR]:"fire-fn-compat",[PR]:"fire-iid",[OR]:"fire-iid-compat",[LR]:"fire-fcm",[bR]:"fire-fcm-compat",[MR]:"fire-perf",[$R]:"fire-perf-compat",[UR]:"fire-rc",[FR]:"fire-rc-compat",[VR]:"fire-gcs",[BR]:"fire-gcs-compat",[jR]:"fire-fst",[zR]:"fire-fst-compat","fire-js":"fire-js",[HR]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu=new Map,Bd=new Map;function KR(t,e){try{t.container.addComponent(e)}catch(n){mi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function gi(t){const e=t.name;if(Bd.has(e))return mi.debug(`There were multiple attempts to register component ${e}.`),!1;Bd.set(e,t);for(const n of gu.values())KR(n,t);return!0}function oc(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const GR={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Rr=new Ea("app","Firebase",GR);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QR{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Pr("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Rr.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const As=WR;function f1(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Vd,automaticDataCollectionEnabled:!1},e),i=r.name;if(typeof i!="string"||!i)throw Rr.create("bad-app-name",{appName:String(i)});if(n||(n=UC()),!n)throw Rr.create("no-options");const s=gu.get(i);if(s){if(mu(n,s.options)&&mu(r,s.config))return s;throw Rr.create("duplicate-app",{appName:i})}const o=new rR(i);for(const l of Bd.values())o.addComponent(l);const a=new QR(n,r,o);return gu.set(i,a),a}function gp(t=Vd){const e=gu.get(t);if(!e&&t===Vd)return f1();if(!e)throw Rr.create("no-app",{appName:t});return e}function An(t,e,n){var r;let i=(r=qR[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),mi.warn(a.join(" "));return}gi(new Pr(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const XR="firebase-heartbeat-database",YR=1,Qo="firebase-heartbeat-store";let wh=null;function p1(){return wh||(wh=gR(XR,YR,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Qo)}}}).catch(t=>{throw Rr.create("idb-open",{originalErrorMessage:t.message})})),wh}async function JR(t){try{return(await p1()).transaction(Qo).objectStore(Qo).get(m1(t))}catch(e){if(e instanceof bn)mi.warn(e.message);else{const n=Rr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});mi.warn(n.message)}}}async function ly(t,e){try{const r=(await p1()).transaction(Qo,"readwrite");return await r.objectStore(Qo).put(e,m1(t)),r.done}catch(n){if(n instanceof bn)mi.warn(n.message);else{const r=Rr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});mi.warn(r.message)}}}function m1(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ZR=1024,eA=30*24*60*60*1e3;class tA{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new rA(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=uy();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=eA}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=uy(),{heartbeatsToSend:n,unsentEntries:r}=nA(this._heartbeatsCache.heartbeats),i=pu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function uy(){return new Date().toISOString().substring(0,10)}function nA(t,e=ZR){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),cy(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),cy(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class rA{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return WC()?qC().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await JR(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ly(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return ly(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function cy(t){return pu(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iA(t){gi(new Pr("platform-logger",e=>new wR(e),"PRIVATE")),gi(new Pr("heartbeat",e=>new tA(e),"PRIVATE")),An(Fd,ay,t),An(Fd,ay,"esm2017"),An("fire-js","")}iA("");function yp(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function g1(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const sA=g1,y1=new Ea("auth","Firebase",g1());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hy=new pp("@firebase/auth");function Ll(t,...e){hy.logLevel<=me.ERROR&&hy.error(`Auth (${As}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vn(t,...e){throw vp(t,...e)}function xn(t,...e){return vp(t,...e)}function oA(t,e,n){const r=Object.assign(Object.assign({},sA()),{[e]:n});return new Ea("auth","Firebase",r).create(e,{appName:t.name})}function vp(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return y1.create(t,...e)}function Q(t,e,...n){if(!t)throw vp(e,...n)}function jn(t){const e="INTERNAL ASSERTION FAILED: "+t;throw Ll(e),new Error(e)}function Xn(t,e){t||jn(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dy=new Map;function zn(t){Xn(t instanceof Function,"Expected a class definition");let e=dy.get(t);return e?(Xn(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,dy.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function aA(t,e){const n=oc(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(mu(s,e??{}))return i;vn(i,"already-initialized")}return n.initialize({options:e})}function lA(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(zn);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jd(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function uA(){return fy()==="http:"||fy()==="https:"}function fy(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cA(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(uA()||jC()||"connection"in navigator)?navigator.onLine:!0}function hA(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sa{constructor(e,n){this.shortDelay=e,this.longDelay=n,Xn(n>e,"Short delay should be less than long delay!"),this.isMobile=VC()||zC()}get(){return cA()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wp(t,e){Xn(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class v1{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;jn("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;jn("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;jn("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dA={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fA=new Sa(3e4,6e4);function Ta(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function ka(t,e,n,r,i={}){return w1(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=_a(Object.assign({key:t.config.apiKey},o)).slice(1),l=await t._getAdditionalHeaders();return l["Content-Type"]="application/json",t.languageCode&&(l["X-Firebase-Locale"]=t.languageCode),v1.fetch()(E1(t,t.config.apiHost,n,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},s))})}async function w1(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},dA),e);try{const i=new pA(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw fl(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[l,u]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw fl(t,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw fl(t,"email-already-in-use",o);if(l==="USER_DISABLED")throw fl(t,"user-disabled",o);const h=r[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw oA(t,h,u);vn(t,h)}}catch(i){if(i instanceof bn)throw i;vn(t,"network-request-failed")}}async function Ia(t,e,n,r,i={}){const s=await ka(t,e,n,r,i);return"mfaPendingCredential"in s&&vn(t,"multi-factor-auth-required",{_serverResponse:s}),s}function E1(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?wp(t.config,i):`${t.config.apiScheme}://${i}`}class pA{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(xn(this.auth,"network-request-failed")),fA.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function fl(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=xn(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mA(t,e){return ka(t,"POST","/v1/accounts:delete",e)}async function gA(t,e){return ka(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function So(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function yA(t,e=!1){const n=He(t),r=await n.getIdToken(e),i=Ep(r);Q(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:So(Eh(i.auth_time)),issuedAtTime:So(Eh(i.iat)),expirationTime:So(Eh(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Eh(t){return Number(t)*1e3}function Ep(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return Ll("JWT malformed, contained fewer than 3 sections"),null;try{const i=o1(n);return i?JSON.parse(i):(Ll("Failed to decode base64 JWT payload"),null)}catch(i){return Ll("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function vA(t){const e=Ep(t);return Q(e,"internal-error"),Q(typeof e.exp<"u","internal-error"),Q(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xo(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof bn&&wA(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function wA({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class EA{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _1{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=So(this.lastLoginAt),this.creationTime=So(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function yu(t){var e;const n=t.auth,r=await t.getIdToken(),i=await Xo(t,gA(n,{idToken:r}));Q(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?TA(s.providerUserInfo):[],a=SA(t.providerData,o),l=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),h=l?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new _1(s.createdAt,s.lastLoginAt),isAnonymous:h};Object.assign(t,d)}async function _A(t){const e=He(t);await yu(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function SA(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function TA(t){return t.map(e=>{var{providerId:n}=e,r=yp(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kA(t,e){const n=await w1(t,{},async()=>{const r=_a({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=E1(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",v1.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){Q(e.idToken,"internal-error"),Q(typeof e.idToken<"u","internal-error"),Q(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):vA(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return Q(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await kA(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new Yo;return r&&(Q(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(Q(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(Q(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Yo,this.toJSON())}_performRefresh(){return jn("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(t,e){Q(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class oi{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=yp(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new EA(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new _1(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await Xo(this,this.stsTokenManager.getToken(this.auth,e));return Q(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return yA(this,e)}reload(){return _A(this)}_assign(e){this!==e&&(Q(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new oi(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){Q(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await yu(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await Xo(this,mA(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,l,u,h;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,c=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,g=(o=n.photoURL)!==null&&o!==void 0?o:void 0,E=(a=n.tenantId)!==null&&a!==void 0?a:void 0,C=(l=n._redirectEventId)!==null&&l!==void 0?l:void 0,m=(u=n.createdAt)!==null&&u!==void 0?u:void 0,p=(h=n.lastLoginAt)!==null&&h!==void 0?h:void 0,{uid:y,emailVerified:S,isAnonymous:x,providerData:O,stsTokenManager:L}=n;Q(y&&L,e,"internal-error");const M=Yo.fromJSON(this.name,L);Q(typeof y=="string",e,"internal-error"),sr(d,e.name),sr(c,e.name),Q(typeof S=="boolean",e,"internal-error"),Q(typeof x=="boolean",e,"internal-error"),sr(f,e.name),sr(g,e.name),sr(E,e.name),sr(C,e.name),sr(m,e.name),sr(p,e.name);const J=new oi({uid:y,auth:e,email:c,emailVerified:S,displayName:d,isAnonymous:x,photoURL:g,phoneNumber:f,tenantId:E,stsTokenManager:M,createdAt:m,lastLoginAt:p});return O&&Array.isArray(O)&&(J.providerData=O.map(W=>Object.assign({},W))),C&&(J._redirectEventId=C),J}static async _fromIdTokenResponse(e,n,r=!1){const i=new Yo;i.updateFromServerResponse(n);const s=new oi({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await yu(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S1{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}S1.type="NONE";const py=S1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bl(t,e,n){return`firebase:${t}:${e}:${n}`}class is{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=bl(this.userKey,i.apiKey,s),this.fullPersistenceKey=bl("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?oi._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new is(zn(py),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||zn(py);const o=bl(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const h=await u._get(o);if(h){const d=oi._fromJSON(e,h);u!==s&&(a=d),s=u;break}}catch{}const l=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!l.length?new is(s,e,r):(s=l[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new is(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function my(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(I1(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(T1(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(R1(e))return"Blackberry";if(A1(e))return"Webos";if(_p(e))return"Safari";if((e.includes("chrome/")||k1(e))&&!e.includes("edge/"))return"Chrome";if(C1(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function T1(t=_t()){return/firefox\//i.test(t)}function _p(t=_t()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function k1(t=_t()){return/crios\//i.test(t)}function I1(t=_t()){return/iemobile/i.test(t)}function C1(t=_t()){return/android/i.test(t)}function R1(t=_t()){return/blackberry/i.test(t)}function A1(t=_t()){return/webos/i.test(t)}function ac(t=_t()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function IA(t=_t()){var e;return ac(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function CA(){return HC()&&document.documentMode===10}function x1(t=_t()){return ac(t)||C1(t)||A1(t)||R1(t)||/windows phone/i.test(t)||I1(t)}function RA(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D1(t,e=[]){let n;switch(t){case"Browser":n=my(_t());break;case"Worker":n=`${my(_t())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${As}/${r}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class AA{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=s=>new Promise((o,a)=>{try{const l=e(s);o(l)}catch(l){a(l)}});r.onAbort=n,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const i of n)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xA{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new gy(this),this.idTokenSubscription=new gy(this),this.beforeStateQueue=new AA(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=y1,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=zn(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await is.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,a=i==null?void 0:i._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(i=l.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return Q(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await yu(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=hA()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?He(e):null;return n&&Q(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&Q(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(zn(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Ea("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&zn(e)||this._popupRedirectResolver;Q(n,this,"argument-error"),this.redirectPersistenceManager=await is.create(this,[zn(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return Q(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return Q(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=D1(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Ca(t){return He(t)}class gy{constructor(e){this.auth=e,this.observer=null,this.addObserver=YC(n=>this.observer=n)}get next(){return Q(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function DA(t,e,n){const r=Ca(t);Q(r._canInitEmulator,r,"emulator-config-failed"),Q(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const i=!!(n!=null&&n.disableWarnings),s=N1(e),{host:o,port:a}=NA(e),l=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${l}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||PA()}function N1(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function NA(t){const e=N1(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:yy(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:yy(o)}}}function yy(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function PA(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return jn("not implemented")}_getIdTokenResponse(e){return jn("not implemented")}_linkToIdToken(e,n){return jn("not implemented")}_getReauthenticationResolver(e){return jn("not implemented")}}async function OA(t,e){return ka(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function LA(t,e){return Ia(t,"POST","/v1/accounts:signInWithPassword",Ta(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bA(t,e){return Ia(t,"POST","/v1/accounts:signInWithEmailLink",Ta(t,e))}async function MA(t,e){return Ia(t,"POST","/v1/accounts:signInWithEmailLink",Ta(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jo extends Sp{constructor(e,n,r,i=null){super("password",r),this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Jo(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Jo(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if(n!=null&&n.email&&(n!=null&&n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return LA(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return bA(e,{email:this._email,oobCode:this._password});default:vn(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return OA(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return MA(e,{idToken:n,email:this._email,oobCode:this._password});default:vn(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ss(t,e){return Ia(t,"POST","/v1/accounts:signInWithIdp",Ta(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $A="http://localhost";class yi extends Sp{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new yi(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):vn("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=yp(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new yi(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return ss(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,ss(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,ss(e,n)}buildRequest(){const e={requestUri:$A,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=_a(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UA(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function FA(t){const e=oo(ao(t)).link,n=e?oo(ao(e)).deep_link_id:null,r=oo(ao(t)).deep_link_id;return(r?oo(ao(r)).link:null)||r||n||e||t}class Tp{constructor(e){var n,r,i,s,o,a;const l=oo(ao(e)),u=(n=l.apiKey)!==null&&n!==void 0?n:null,h=(r=l.oobCode)!==null&&r!==void 0?r:null,d=UA((i=l.mode)!==null&&i!==void 0?i:null);Q(u&&h&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=h,this.continueUrl=(s=l.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=l.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=l.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=FA(e);try{return new Tp(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xs{constructor(){this.providerId=xs.PROVIDER_ID}static credential(e,n){return Jo._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Tp.parseLink(n);return Q(r,"argument-error"),Jo._fromEmailAndCode(e,r.code,r.tenantId)}}xs.PROVIDER_ID="password";xs.EMAIL_PASSWORD_SIGN_IN_METHOD="password";xs.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class P1{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra extends P1{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr extends Ra{constructor(){super("facebook.com")}static credential(e){return yi._fromParams({providerId:cr.PROVIDER_ID,signInMethod:cr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return cr.credentialFromTaggedObject(e)}static credentialFromError(e){return cr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return cr.credential(e.oauthAccessToken)}catch{return null}}}cr.FACEBOOK_SIGN_IN_METHOD="facebook.com";cr.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr extends Ra{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return yi._fromParams({providerId:hr.PROVIDER_ID,signInMethod:hr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return hr.credentialFromTaggedObject(e)}static credentialFromError(e){return hr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return hr.credential(n,r)}catch{return null}}}hr.GOOGLE_SIGN_IN_METHOD="google.com";hr.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr extends Ra{constructor(){super("github.com")}static credential(e){return yi._fromParams({providerId:dr.PROVIDER_ID,signInMethod:dr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return dr.credentialFromTaggedObject(e)}static credentialFromError(e){return dr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return dr.credential(e.oauthAccessToken)}catch{return null}}}dr.GITHUB_SIGN_IN_METHOD="github.com";dr.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr extends Ra{constructor(){super("twitter.com")}static credential(e,n){return yi._fromParams({providerId:fr.PROVIDER_ID,signInMethod:fr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return fr.credentialFromTaggedObject(e)}static credentialFromError(e){return fr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return fr.credential(n,r)}catch{return null}}}fr.TWITTER_SIGN_IN_METHOD="twitter.com";fr.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function VA(t,e){return Ia(t,"POST","/v1/accounts:signUp",Ta(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await oi._fromIdTokenResponse(e,r,i),o=vy(r);return new vi({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=vy(r);return new vi({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function vy(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu extends bn{constructor(e,n,r,i){var s;super(n.code,n.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,vu.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new vu(e,n,r,i)}}function O1(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?vu._fromErrorAndOperation(t,s,e,r):s})}async function BA(t,e,n=!1){const r=await Xo(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return vi._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jA(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await Xo(t,O1(r,i,e,t),n);Q(s.idToken,r,"internal-error");const o=Ep(s.idToken);Q(o,r,"internal-error");const{sub:a}=o;return Q(t.uid===a,r,"user-mismatch"),vi._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&vn(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function L1(t,e,n=!1){const r="signIn",i=await O1(t,r,e),s=await vi._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function zA(t,e){return L1(Ca(t),e)}async function HA(t,e,n){const r=Ca(t),i=await VA(r,{returnSecureToken:!0,email:e,password:n}),s=await vi._fromIdTokenResponse(r,"signIn",i);return await r._updateCurrentUser(s.user),s}function WA(t,e,n){return zA(He(t),xs.credential(e,n))}function qA(t,e,n,r){return He(t).onIdTokenChanged(e,n,r)}function KA(t,e,n){return He(t).beforeAuthStateChanged(e,n)}function GA(t,e,n,r){return He(t).onAuthStateChanged(e,n,r)}function QA(t){return He(t).signOut()}const wu="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b1{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(wu,"1"),this.storage.removeItem(wu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function XA(){const t=_t();return _p(t)||ac(t)}const YA=1e3,JA=10;class M1 extends b1{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=XA()&&RA(),this.fallbackToPolling=x1(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);CA()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,JA):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},YA)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}M1.type="LOCAL";const ZA=M1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $1 extends b1{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}$1.type="SESSION";const U1=$1;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ex(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lc{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new lc(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),l=await ex(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:l})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}lc.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kp(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tx{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,l)=>{const u=kp("",20);i.port1.start();const h=setTimeout(()=>{l(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const c=d;if(c.data.eventId===u)switch(c.data.status){case"ack":clearTimeout(h),s=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(c.data.response);break;default:clearTimeout(h),clearTimeout(s),l(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(){return window}function nx(t){Dn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F1(){return typeof Dn().WorkerGlobalScope<"u"&&typeof Dn().importScripts=="function"}async function rx(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function ix(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function sx(){return F1()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const V1="firebaseLocalStorageDb",ox=1,Eu="firebaseLocalStorage",B1="fbase_key";class Aa{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function uc(t,e){return t.transaction([Eu],e?"readwrite":"readonly").objectStore(Eu)}function ax(){const t=indexedDB.deleteDatabase(V1);return new Aa(t).toPromise()}function zd(){const t=indexedDB.open(V1,ox);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Eu,{keyPath:B1})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Eu)?e(r):(r.close(),await ax(),e(await zd()))})})}async function wy(t,e,n){const r=uc(t,!0).put({[B1]:e,value:n});return new Aa(r).toPromise()}async function lx(t,e){const n=uc(t,!1).get(e),r=await new Aa(n).toPromise();return r===void 0?null:r.value}function Ey(t,e){const n=uc(t,!0).delete(e);return new Aa(n).toPromise()}const ux=800,cx=3;class j1{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await zd(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>cx)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return F1()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=lc._getInstance(sx()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await rx(),!this.activeServiceWorker)return;this.sender=new tx(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||ix()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await zd();return await wy(e,wu,"1"),await Ey(e,wu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>wy(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>lx(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Ey(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=uc(i,!1).getAll();return new Aa(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ux)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}j1.type="LOCAL";const hx=j1;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dx(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function fx(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=xn("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",dx().appendChild(r)})}function px(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new Sa(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mx(t,e){return e?zn(e):(Q(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip extends Sp{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return ss(e,this._buildIdpRequest())}_linkToIdToken(e,n){return ss(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return ss(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function gx(t){return L1(t.auth,new Ip(t),t.bypassAuthState)}function yx(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),jA(n,new Ip(t),t.bypassAuthState)}async function vx(t){const{auth:e,user:n}=t;return Q(n,e,"internal-error"),BA(n,new Ip(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z1{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return gx;case"linkViaPopup":case"linkViaRedirect":return vx;case"reauthViaPopup":case"reauthViaRedirect":return yx;default:vn(this.auth,"internal-error")}}resolve(e){Xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Xn(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wx=new Sa(2e3,1e4);class Gi extends z1{constructor(e,n,r,i,s){super(e,n,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Gi.currentPopupAction&&Gi.currentPopupAction.cancel(),Gi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return Q(e,this.auth,"internal-error"),e}async onExecution(){Xn(this.filter.length===1,"Popup operations only handle one event");const e=kp();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(xn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(xn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Gi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(xn(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,wx.get())};e()}}Gi.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ex="pendingRedirect",Ml=new Map;class _x extends z1{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=Ml.get(this.auth._key());if(!e){try{const r=await Sx(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Ml.set(this.auth._key(),e)}return this.bypassAuthState||Ml.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Sx(t,e){const n=Ix(e),r=kx(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function Tx(t,e){Ml.set(t._key(),e)}function kx(t){return zn(t._redirectPersistence)}function Ix(t){return bl(Ex,t.config.apiKey,t.name)}async function Cx(t,e,n=!1){const r=Ca(t),i=mx(r,e),o=await new _x(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rx=10*60*1e3;class Ax{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!xx(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!H1(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(xn(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Rx&&this.cachedEventUids.clear(),this.cachedEventUids.has(_y(e))}saveEventToCache(e){this.cachedEventUids.add(_y(e)),this.lastProcessedEventTime=Date.now()}}function _y(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function H1({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function xx(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return H1(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Dx(t,e={}){return ka(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nx=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Px=/^https?/;async function Ox(t){if(t.config.emulator)return;const{authorizedDomains:e}=await Dx(t);for(const n of e)try{if(Lx(n))return}catch{}vn(t,"unauthorized-domain")}function Lx(t){const e=jd(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!Px.test(n))return!1;if(Nx.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bx=new Sa(3e4,6e4);function Sy(){const t=Dn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Mx(t){return new Promise((e,n)=>{var r,i,s;function o(){Sy(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Sy(),n(xn(t,"network-request-failed"))},timeout:bx.get()})}if(!((i=(r=Dn().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=Dn().gapi)===null||s===void 0)&&s.load)o();else{const a=px("iframefcb");return Dn()[a]=()=>{gapi.load?o():n(xn(t,"network-request-failed"))},fx(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>n(l))}}).catch(e=>{throw $l=null,e})}let $l=null;function $x(t){return $l=$l||Mx(t),$l}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ux=new Sa(5e3,15e3),Fx="__/auth/iframe",Vx="emulator/auth/iframe",Bx={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},jx=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function zx(t){const e=t.config;Q(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?wp(e,Vx):`https://${t.config.authDomain}/${Fx}`,r={apiKey:e.apiKey,appName:t.name,v:As},i=jx.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${_a(r).slice(1)}`}async function Hx(t){const e=await $x(t),n=Dn().gapi;return Q(n,t,"internal-error"),e.open({where:document.body,url:zx(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Bx,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=xn(t,"network-request-failed"),a=Dn().setTimeout(()=>{s(o)},Ux.get());function l(){Dn().clearTimeout(a),i(r)}r.ping(l).then(l,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wx={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qx=500,Kx=600,Gx="_blank",Qx="http://localhost";class Ty{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Xx(t,e,n,r=qx,i=Kx){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const l=Object.assign(Object.assign({},Wx),{width:r.toString(),height:i.toString(),top:s,left:o}),u=_t().toLowerCase();n&&(a=k1(u)?Gx:n),T1(u)&&(e=e||Qx,l.scrollbars="yes");const h=Object.entries(l).reduce((c,[f,g])=>`${c}${f}=${g},`,"");if(IA(u)&&a!=="_self")return Yx(e||"",a),new Ty(null);const d=window.open(e||"",a,h);Q(d,t,"popup-blocked");try{d.focus()}catch{}return new Ty(d)}function Yx(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jx="__/auth/handler",Zx="emulator/auth/handler";function ky(t,e,n,r,i,s){Q(t.config.authDomain,t,"auth-domain-config-required"),Q(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:As,eventId:i};if(e instanceof P1){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",XC(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[l,u]of Object.entries(s||{}))o[l]=u}if(e instanceof Ra){const l=e.getScopes().filter(u=>u!=="");l.length>0&&(o.scopes=l.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const l of Object.keys(a))a[l]===void 0&&delete a[l];return`${eD(t)}?${_a(a).slice(1)}`}function eD({config:t}){return t.emulator?wp(t,Zx):`https://${t.authDomain}/${Jx}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _h="webStorageSupport";class tD{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=U1,this._completeRedirectFn=Cx,this._overrideRedirectResult=Tx}async _openPopup(e,n,r,i){var s;Xn((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=ky(e,n,r,jd(),i);return Xx(e,o,kp())}async _openRedirect(e,n,r,i){return await this._originValidation(e),nx(ky(e,n,r,jd(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Xn(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Hx(e),r=new Ax(e);return n.register("authEvent",i=>(Q(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_h,{type:_h},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[_h];o!==void 0&&n(!!o),vn(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=Ox(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return x1()||_p()||ac()}}const nD=tD;var Iy="@firebase/auth",Cy="0.21.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rD{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){Q(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iD(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function sD(t){gi(new Pr("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,l)=>{Q(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),Q(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:D1(t)},h=new xA(a,l,u);return lA(h,n),h})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),gi(new Pr("auth-internal",e=>{const n=Ca(e.getProvider("auth").getImmediate());return(r=>new rD(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),An(Iy,Cy,iD(t)),An(Iy,Cy,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oD=5*60,aD=u1("authIdTokenMaxAge")||oD;let Ry=null;const lD=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>aD)return;const i=n==null?void 0:n.token;Ry!==i&&(Ry=i,await fetch(t,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function uD(t=gp()){const e=oc(t,"auth");if(e.isInitialized())return e.getImmediate();const n=aA(t,{popupRedirectResolver:nD,persistence:[hx,ZA,U1]}),r=u1("authTokenSyncURL");if(r){const s=lD(r);KA(n,s,()=>s(n.currentUser)),qA(n,o=>s(o))}const i=a1("auth");return i&&DA(n,`http://${i}`),n}sD("Browser");const cD="/vite-todo-list/logo_lg.png",hD="/vite-todo-list/logo.png";function W1({isBig:t}){return z("div",{className:t?"":"h-full",children:z("img",{src:t?cD:hD,alt:"Logo",className:"h-full"})})}const dD={member:{name:"",uid:"",isSign:!1,url:""},setMember:()=>{}},Ds=b.createContext(dD);function fD({clickHandler:t}){return z("button",{className:"ml-5",type:"button",onClick:t,children:"登出"})}var pD="firebase",mD="9.16.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */An(pD,mD,"app");var gD=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},B,Cp=Cp||{},X=gD||self;function _u(){}function cc(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function xa(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function yD(t){return Object.prototype.hasOwnProperty.call(t,Sh)&&t[Sh]||(t[Sh]=++vD)}var Sh="closure_uid_"+(1e9*Math.random()>>>0),vD=0;function wD(t,e,n){return t.call.apply(t.bind,arguments)}function ED(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),t.apply(e,i)}}return function(){return t.apply(e,arguments)}}function vt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?vt=wD:vt=ED,vt.apply(null,arguments)}function pl(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function ct(t,e){function n(){}n.prototype=e.prototype,t.X=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Wb=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return e.prototype[i].apply(r,o)}}function Fr(){this.s=this.s,this.o=this.o}var _D=0;Fr.prototype.s=!1;Fr.prototype.na=function(){!this.s&&(this.s=!0,this.M(),_D!=0)&&yD(this)};Fr.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const q1=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Rp(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function Ay(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(cc(r)){const i=t.length||0,s=r.length||0;t.length=i+s;for(let o=0;o<s;o++)t[i+o]=r[o]}else t.push(r)}}function wt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}wt.prototype.h=function(){this.defaultPrevented=!0};var SD=function(){if(!X.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{X.addEventListener("test",_u,e),X.removeEventListener("test",_u,e)}catch{}return t}();function Su(t){return/^[\s\xa0]*$/.test(t)}var xy=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function Th(t,e){return t<e?-1:t>e?1:0}function hc(){var t=X.navigator;return t&&(t=t.userAgent)?t:""}function Tn(t){return hc().indexOf(t)!=-1}function Ap(t){return Ap[" "](t),t}Ap[" "]=_u;function TD(t){var e=CD;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}var kD=Tn("Opera"),ys=Tn("Trident")||Tn("MSIE"),K1=Tn("Edge"),Hd=K1||ys,G1=Tn("Gecko")&&!(hc().toLowerCase().indexOf("webkit")!=-1&&!Tn("Edge"))&&!(Tn("Trident")||Tn("MSIE"))&&!Tn("Edge"),ID=hc().toLowerCase().indexOf("webkit")!=-1&&!Tn("Edge");function Q1(){var t=X.document;return t?t.documentMode:void 0}var Tu;e:{var kh="",Ih=function(){var t=hc();if(G1)return/rv:([^\);]+)(\)|;)/.exec(t);if(K1)return/Edge\/([\d\.]+)/.exec(t);if(ys)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(ID)return/WebKit\/(\S+)/.exec(t);if(kD)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(Ih&&(kh=Ih?Ih[1]:""),ys){var Ch=Q1();if(Ch!=null&&Ch>parseFloat(kh)){Tu=String(Ch);break e}}Tu=kh}var CD={};function RD(){return TD(function(){let t=0;const e=xy(String(Tu)).split("."),n=xy("9").split("."),r=Math.max(e.length,n.length);for(let o=0;t==0&&o<r;o++){var i=e[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],i[0].length==0&&s[0].length==0)break;t=Th(i[1].length==0?0:parseInt(i[1],10),s[1].length==0?0:parseInt(s[1],10))||Th(i[2].length==0,s[2].length==0)||Th(i[2],s[2]),i=i[3],s=s[3]}while(t==0)}return 0<=t})}var Wd;if(X.document&&ys){var Dy=Q1();Wd=Dy||parseInt(Tu,10)||void 0}else Wd=void 0;var AD=Wd;function Zo(t,e){if(wt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(G1){e:{try{Ap(e.nodeName);var i=!0;break e}catch{}i=!1}i||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:xD[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Zo.X.h.call(this)}}ct(Zo,wt);var xD={2:"touch",3:"pen",4:"mouse"};Zo.prototype.h=function(){Zo.X.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Da="closure_listenable_"+(1e6*Math.random()|0),DD=0;function ND(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ha=i,this.key=++DD,this.ba=this.ea=!1}function dc(t){t.ba=!0,t.listener=null,t.proxy=null,t.src=null,t.ha=null}function xp(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function X1(t){const e={};for(const n in t)e[n]=t[n];return e}const Ny="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Y1(t,e){let n,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(n in r)t[n]=r[n];for(let s=0;s<Ny.length;s++)n=Ny[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function fc(t){this.src=t,this.g={},this.h=0}fc.prototype.add=function(t,e,n,r,i){var s=t.toString();t=this.g[s],t||(t=this.g[s]=[],this.h++);var o=Kd(t,e,r,i);return-1<o?(e=t[o],n||(e.ea=!1)):(e=new ND(e,this.src,s,!!r,i),e.ea=n,t.push(e)),e};function qd(t,e){var n=e.type;if(n in t.g){var r=t.g[n],i=q1(r,e),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(dc(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Kd(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ba&&s.listener==e&&s.capture==!!n&&s.ha==r)return i}return-1}var Dp="closure_lm_"+(1e6*Math.random()|0),Rh={};function J1(t,e,n,r,i){if(r&&r.once)return eE(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)J1(t,e[s],n,r,i);return null}return n=Op(n),t&&t[Da]?t.N(e,n,xa(r)?!!r.capture:!!r,i):Z1(t,e,n,!1,r,i)}function Z1(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=xa(i)?!!i.capture:!!i,a=Pp(t);if(a||(t[Dp]=a=new fc(t)),n=a.add(e,n,r,o,s),n.proxy)return n;if(r=PD(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)SD||(i=o),i===void 0&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(nE(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function PD(){function t(n){return e.call(t.src,t.listener,n)}const e=OD;return t}function eE(t,e,n,r,i){if(Array.isArray(e)){for(var s=0;s<e.length;s++)eE(t,e[s],n,r,i);return null}return n=Op(n),t&&t[Da]?t.O(e,n,xa(r)?!!r.capture:!!r,i):Z1(t,e,n,!0,r,i)}function tE(t,e,n,r,i){if(Array.isArray(e))for(var s=0;s<e.length;s++)tE(t,e[s],n,r,i);else r=xa(r)?!!r.capture:!!r,n=Op(n),t&&t[Da]?(t=t.i,e=String(e).toString(),e in t.g&&(s=t.g[e],n=Kd(s,n,r,i),-1<n&&(dc(s[n]),Array.prototype.splice.call(s,n,1),s.length==0&&(delete t.g[e],t.h--)))):t&&(t=Pp(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Kd(e,n,r,i)),(n=-1<t?e[t]:null)&&Np(n))}function Np(t){if(typeof t!="number"&&t&&!t.ba){var e=t.src;if(e&&e[Da])qd(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(nE(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Pp(e))?(qd(n,t),n.h==0&&(n.src=null,e[Dp]=null)):dc(t)}}}function nE(t){return t in Rh?Rh[t]:Rh[t]="on"+t}function OD(t,e){if(t.ba)t=!0;else{e=new Zo(e,this);var n=t.listener,r=t.ha||t.src;t.ea&&Np(t),t=n.call(r,e)}return t}function Pp(t){return t=t[Dp],t instanceof fc?t:null}var Ah="__closure_events_fn_"+(1e9*Math.random()>>>0);function Op(t){return typeof t=="function"?t:(t[Ah]||(t[Ah]=function(e){return t.handleEvent(e)}),t[Ah])}function tt(){Fr.call(this),this.i=new fc(this),this.P=this,this.I=null}ct(tt,Fr);tt.prototype[Da]=!0;tt.prototype.removeEventListener=function(t,e,n,r){tE(this,t,e,n,r)};function lt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,typeof e=="string")e=new wt(e,t);else if(e instanceof wt)e.target=e.target||t;else{var i=e;e=new wt(r,t),Y1(e,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=ml(o,r,!0,e)&&i}if(o=e.g=t,i=ml(o,r,!0,e)&&i,i=ml(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)o=e.g=n[s],i=ml(o,r,!1,e)&&i}tt.prototype.M=function(){if(tt.X.M.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)dc(n[r]);delete t.g[e],t.h--}}this.I=null};tt.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};tt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function ml(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,l=o.ha||o.src;o.ea&&qd(t.i,o),i=a.call(l,r)!==!1&&i}}return i&&!r.defaultPrevented}var Lp=X.JSON.stringify;function LD(){var t=sE;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class bD{constructor(){this.h=this.g=null}add(e,n){const r=rE.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var rE=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new MD,t=>t.reset());class MD{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function $D(t){X.setTimeout(()=>{throw t},0)}function iE(t,e){Gd||UD(),Qd||(Gd(),Qd=!0),sE.add(t,e)}var Gd;function UD(){var t=X.Promise.resolve(void 0);Gd=function(){t.then(FD)}}var Qd=!1,sE=new bD;function FD(){for(var t;t=LD();){try{t.h.call(t.g)}catch(n){$D(n)}var e=rE;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Qd=!1}function pc(t,e){tt.call(this),this.h=t||1,this.g=e||X,this.j=vt(this.lb,this),this.l=Date.now()}ct(pc,tt);B=pc.prototype;B.ca=!1;B.R=null;B.lb=function(){if(this.ca){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-t):(this.R&&(this.g.clearTimeout(this.R),this.R=null),lt(this,"tick"),this.ca&&(bp(this),this.start()))}};B.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function bp(t){t.ca=!1,t.R&&(t.g.clearTimeout(t.R),t.R=null)}B.M=function(){pc.X.M.call(this),bp(this),delete this.g};function Mp(t,e,n){if(typeof t=="function")n&&(t=vt(t,n));else if(t&&typeof t.handleEvent=="function")t=vt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:X.setTimeout(t,e||0)}function oE(t){t.g=Mp(()=>{t.g=null,t.i&&(t.i=!1,oE(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class VD extends Fr{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:oE(this)}M(){super.M(),this.g&&(X.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ea(t){Fr.call(this),this.h=t,this.g={}}ct(ea,Fr);var Py=[];function aE(t,e,n,r){Array.isArray(n)||(n&&(Py[0]=n.toString()),n=Py);for(var i=0;i<n.length;i++){var s=J1(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function lE(t){xp(t.g,function(e,n){this.g.hasOwnProperty(n)&&Np(e)},t),t.g={}}ea.prototype.M=function(){ea.X.M.call(this),lE(this)};ea.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function mc(){this.g=!0}mc.prototype.Aa=function(){this.g=!1};function BD(t,e,n,r,i,s){t.info(function(){if(t.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var u=a[l].split("=");if(1<u.length){var h=u[0];u=u[1];var d=h.split("_");o=2<=d.length&&d[1]=="type"?o+(h+"="+u+"&"):o+(h+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+`
`+n+`
`+o})}function jD(t,e,n,r,i,s,o){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+`
`+n+`
`+s+" "+o})}function Qi(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+HD(t,n)+(r?" "+r:"")})}function zD(t,e){t.info(function(){return"TIMEOUT: "+e})}mc.prototype.info=function(){};function HD(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Lp(n)}catch{return e}}var Ii={},Oy=null;function gc(){return Oy=Oy||new tt}Ii.Pa="serverreachability";function uE(t){wt.call(this,Ii.Pa,t)}ct(uE,wt);function ta(t){const e=gc();lt(e,new uE(e))}Ii.STAT_EVENT="statevent";function cE(t,e){wt.call(this,Ii.STAT_EVENT,t),this.stat=e}ct(cE,wt);function Rt(t){const e=gc();lt(e,new cE(e,t))}Ii.Qa="timingevent";function hE(t,e){wt.call(this,Ii.Qa,t),this.size=e}ct(hE,wt);function Na(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return X.setTimeout(function(){t()},e)}var yc={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},dE={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function $p(){}$p.prototype.h=null;function Ly(t){return t.h||(t.h=t.i())}function fE(){}var Pa={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function Up(){wt.call(this,"d")}ct(Up,wt);function Fp(){wt.call(this,"c")}ct(Fp,wt);var Xd;function vc(){}ct(vc,$p);vc.prototype.g=function(){return new XMLHttpRequest};vc.prototype.i=function(){return{}};Xd=new vc;function Oa(t,e,n,r){this.l=t,this.j=e,this.m=n,this.U=r||1,this.S=new ea(this),this.O=WD,t=Hd?125:void 0,this.T=new pc(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new pE}function pE(){this.i=null,this.g="",this.h=!1}var WD=45e3,Yd={},ku={};B=Oa.prototype;B.setTimeout=function(t){this.O=t};function Jd(t,e,n){t.K=1,t.v=Ec(Yn(e)),t.s=n,t.P=!0,mE(t,null)}function mE(t,e){t.F=Date.now(),La(t),t.A=Yn(t.v);var n=t.A,r=t.U;Array.isArray(r)||(r=[String(r)]),TE(n.i,"t",r),t.C=0,n=t.l.H,t.h=new pE,t.g=HE(t.l,n?e:null,!t.s),0<t.N&&(t.L=new VD(vt(t.La,t,t.g),t.N)),aE(t.S,t.g,"readystatechange",t.ib),e=t.H?X1(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.da(t.A,t.u,t.s,e)):(t.u="GET",t.g.da(t.A,t.u,null,e)),ta(),BD(t.j,t.u,t.A,t.m,t.U,t.s)}B.ib=function(t){t=t.target;const e=this.L;e&&Hn(t)==3?e.l():this.La(t)};B.La=function(t){try{if(t==this.g)e:{const h=Hn(this.g);var e=this.g.Ea();const d=this.g.aa();if(!(3>h)&&(h!=3||Hd||this.g&&(this.h.h||this.g.fa()||Uy(this.g)))){this.I||h!=4||e==7||(e==8||0>=d?ta(3):ta(2)),wc(this);var n=this.g.aa();this.Y=n;t:if(gE(this)){var r=Uy(this.g);t="";var i=r.length,s=Hn(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){ei(this),To(this);var o="";break t}this.h.i=new X.TextDecoder}for(e=0;e<i;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:s&&e==i-1});r.splice(0,i),this.h.g+=t,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=n==200,jD(this.j,this.u,this.A,this.m,this.U,h,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Su(a)){var u=a;break t}}u=null}if(n=u)Qi(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Zd(this,n);else{this.i=!1,this.o=3,Rt(12),ei(this),To(this);break e}}this.P?(yE(this,h,o),Hd&&this.i&&h==3&&(aE(this.S,this.T,"tick",this.hb),this.T.start())):(Qi(this.j,this.m,o,null),Zd(this,o)),h==4&&ei(this),this.i&&!this.I&&(h==4?VE(this.l,this):(this.i=!1,La(this)))}else n==400&&0<o.indexOf("Unknown SID")?(this.o=3,Rt(12)):(this.o=0,Rt(13)),ei(this),To(this)}}}catch{}finally{}};function gE(t){return t.g?t.u=="GET"&&t.K!=2&&t.l.Da:!1}function yE(t,e,n){let r=!0,i;for(;!t.I&&t.C<n.length;)if(i=qD(t,n),i==ku){e==4&&(t.o=4,Rt(14),r=!1),Qi(t.j,t.m,null,"[Incomplete Response]");break}else if(i==Yd){t.o=4,Rt(15),Qi(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else Qi(t.j,t.m,i,null),Zd(t,i);gE(t)&&i!=ku&&i!=Yd&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Rt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.$&&(t.$=!0,e=t.l,e.g==t&&e.$&&!e.K&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),qp(e),e.K=!0,Rt(11))):(Qi(t.j,t.m,n,"[Invalid Chunked Response]"),ei(t),To(t))}B.hb=function(){if(this.g){var t=Hn(this.g),e=this.g.fa();this.C<e.length&&(wc(this),yE(this,t,e),this.i&&t!=4&&La(this))}};function qD(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?ku:(n=Number(e.substring(n,r)),isNaN(n)?Yd:(r+=1,r+n>e.length?ku:(e=e.substr(r,n),t.C=r+n,e)))}B.cancel=function(){this.I=!0,ei(this)};function La(t){t.V=Date.now()+t.O,vE(t,t.O)}function vE(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Na(vt(t.gb,t),e)}function wc(t){t.B&&(X.clearTimeout(t.B),t.B=null)}B.gb=function(){this.B=null;const t=Date.now();0<=t-this.V?(zD(this.j,this.A),this.K!=2&&(ta(),Rt(17)),ei(this),this.o=2,To(this)):vE(this,this.V-t)};function To(t){t.l.G==0||t.I||VE(t.l,t)}function ei(t){wc(t);var e=t.L;e&&typeof e.na=="function"&&e.na(),t.L=null,bp(t.T),lE(t.S),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Zd(t,e){try{var n=t.l;if(n.G!=0&&(n.g==t||ef(n.h,t))){if(!t.J&&ef(n.h,t)&&n.G==3){try{var r=n.Fa.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){e:if(!n.u){if(n.g)if(n.g.F+3e3<t.F)Ru(n),Tc(n);else break e;Wp(n),Rt(18)}}else n.Ba=i[1],0<n.Ba-n.T&&37500>i[2]&&n.L&&n.A==0&&!n.v&&(n.v=Na(vt(n.cb,n),6e3));if(1>=CE(n.h)&&n.ja){try{n.ja()}catch{}n.ja=void 0}}else ti(n,11)}else if((t.J||n.g==t)&&Ru(n),!Su(e))for(i=n.Fa.g.parse(e),e=0;e<i.length;e++){let u=i[e];if(n.T=u[0],u=u[1],n.G==2)if(u[0]=="c"){n.I=u[1],n.ka=u[2];const h=u[3];h!=null&&(n.ma=h,n.j.info("VER="+n.ma));const d=u[4];d!=null&&(n.Ca=d,n.j.info("SVER="+n.Ca));const c=u[5];c!=null&&typeof c=="number"&&0<c&&(r=1.5*c,n.J=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const f=t.g;if(f){const g=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(g){var s=r.h;s.g||g.indexOf("spdy")==-1&&g.indexOf("quic")==-1&&g.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Vp(s,s.h),s.h=null))}if(r.D){const E=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;E&&(r.za=E,Re(r.F,r.D,E))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-t.F,n.j.info("Handshake RTT: "+n.P+"ms")),r=n;var o=t;if(r.sa=zE(r,r.H?r.ka:null,r.V),o.J){RE(r.h,o);var a=o,l=r.J;l&&a.setTimeout(l),a.B&&(wc(a),La(a)),r.g=o}else UE(r);0<n.i.length&&kc(n)}else u[0]!="stop"&&u[0]!="close"||ti(n,7);else n.G==3&&(u[0]=="stop"||u[0]=="close"?u[0]=="stop"?ti(n,7):Hp(n):u[0]!="noop"&&n.l&&n.l.wa(u),n.A=0)}}ta(4)}catch{}}function KD(t){if(t.W&&typeof t.W=="function")return t.W();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(cc(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function GD(t){if(t.oa&&typeof t.oa=="function")return t.oa();if(!t.W||typeof t.W!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(cc(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function wE(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(cc(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=GD(t),r=KD(t),i=r.length,s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}var EE=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function QD(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function ai(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof ai){this.h=e!==void 0?e:t.h,Iu(this,t.j),this.s=t.s,this.g=t.g,Cu(this,t.m),this.l=t.l,e=t.i;var n=new na;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),by(this,n),this.o=t.o}else t&&(n=String(t).match(EE))?(this.h=!!e,Iu(this,n[1]||"",!0),this.s=lo(n[2]||""),this.g=lo(n[3]||"",!0),Cu(this,n[4]),this.l=lo(n[5]||"",!0),by(this,n[6]||"",!0),this.o=lo(n[7]||"")):(this.h=!!e,this.i=new na(null,this.h))}ai.prototype.toString=function(){var t=[],e=this.j;e&&t.push(uo(e,My,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(uo(e,My,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(uo(n,n.charAt(0)=="/"?JD:YD,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",uo(n,eN)),t.join("")};function Yn(t){return new ai(t)}function Iu(t,e,n){t.j=n?lo(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Cu(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function by(t,e,n){e instanceof na?(t.i=e,tN(t.i,t.h)):(n||(e=uo(e,ZD)),t.i=new na(e,t.h))}function Re(t,e,n){t.i.set(e,n)}function Ec(t){return Re(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function lo(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function uo(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,XD),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function XD(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var My=/[#\/\?@]/g,YD=/[#\?:]/g,JD=/[#\?]/g,ZD=/[#\?@]/g,eN=/#/g;function na(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Vr(t){t.g||(t.g=new Map,t.h=0,t.i&&QD(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}B=na.prototype;B.add=function(t,e){Vr(this),this.i=null,t=Ns(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function _E(t,e){Vr(t),e=Ns(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function SE(t,e){return Vr(t),e=Ns(t,e),t.g.has(e)}B.forEach=function(t,e){Vr(this),this.g.forEach(function(n,r){n.forEach(function(i){t.call(e,i,r,this)},this)},this)};B.oa=function(){Vr(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const i=t[r];for(let s=0;s<i.length;s++)n.push(e[r])}return n};B.W=function(t){Vr(this);let e=[];if(typeof t=="string")SE(this,t)&&(e=e.concat(this.g.get(Ns(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};B.set=function(t,e){return Vr(this),this.i=null,t=Ns(this,t),SE(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};B.get=function(t,e){return t?(t=this.W(t),0<t.length?String(t[0]):e):e};function TE(t,e,n){_E(t,e),0<n.length&&(t.i=null,t.g.set(Ns(t,e),Rp(n)),t.h+=n.length)}B.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const s=encodeURIComponent(String(r)),o=this.W(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),t.push(i)}}return this.i=t.join("&")};function Ns(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function tN(t,e){e&&!t.j&&(Vr(t),t.i=null,t.g.forEach(function(n,r){var i=r.toLowerCase();r!=i&&(_E(this,r),TE(this,i,n))},t)),t.j=e}var nN=class{constructor(e,n){this.h=e,this.g=n}};function kE(t){this.l=t||rN,X.PerformanceNavigationTiming?(t=X.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(X.g&&X.g.Ga&&X.g.Ga()&&X.g.Ga().$b),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var rN=10;function IE(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function CE(t){return t.h?1:t.g?t.g.size:0}function ef(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Vp(t,e){t.g?t.g.add(e):t.h=e}function RE(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}kE.prototype.cancel=function(){if(this.i=AE(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function AE(t){if(t.h!=null)return t.i.concat(t.h.D);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.D);return e}return Rp(t.i)}function Bp(){}Bp.prototype.stringify=function(t){return X.JSON.stringify(t,void 0)};Bp.prototype.parse=function(t){return X.JSON.parse(t,void 0)};function iN(){this.g=new Bp}function sN(t,e,n){const r=n||"";try{wE(t,function(i,s){let o=i;xa(i)&&(o=Lp(i)),e.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw e.push(r+"type="+encodeURIComponent("_badmap")),i}}function oN(t,e){const n=new mc;if(X.Image){const r=new Image;r.onload=pl(gl,n,r,"TestLoadImage: loaded",!0,e),r.onerror=pl(gl,n,r,"TestLoadImage: error",!1,e),r.onabort=pl(gl,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=pl(gl,n,r,"TestLoadImage: timeout",!1,e),X.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function gl(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch{}}function ba(t){this.l=t.ac||null,this.j=t.jb||!1}ct(ba,$p);ba.prototype.g=function(){return new _c(this.l,this.j)};ba.prototype.i=function(t){return function(){return t}}({});function _c(t,e){tt.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=jp,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}ct(_c,tt);var jp=0;B=_c.prototype;B.open=function(t,e){if(this.readyState!=jp)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,ra(this)};B.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||X).fetch(new Request(this.B,e)).then(this.Wa.bind(this),this.ga.bind(this))};B.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Ma(this)),this.readyState=jp};B.Wa=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,ra(this)),this.g&&(this.readyState=3,ra(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if(typeof X.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;xE(this)}else t.text().then(this.Va.bind(this),this.ga.bind(this))};function xE(t){t.j.read().then(t.Ta.bind(t)).catch(t.ga.bind(t))}B.Ta=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?Ma(this):ra(this),this.readyState==3&&xE(this)}};B.Va=function(t){this.g&&(this.response=this.responseText=t,Ma(this))};B.Ua=function(t){this.g&&(this.response=t,Ma(this))};B.ga=function(){this.g&&Ma(this)};function Ma(t){t.readyState=4,t.l=null,t.j=null,t.A=null,ra(t)}B.setRequestHeader=function(t,e){this.v.append(t,e)};B.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};B.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function ra(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(_c.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var aN=X.JSON.parse;function Le(t){tt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=DE,this.K=this.L=!1}ct(Le,tt);var DE="",lN=/^https?$/i,uN=["POST","PUT"];B=Le.prototype;B.Ka=function(t){this.L=t};B.da=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():Xd.g(),this.C=this.u?Ly(this.u):Ly(Xd),this.g.onreadystatechange=vt(this.Ha,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(s){$y(this,s);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())n.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(s=>s.toLowerCase()=="content-type"),i=X.FormData&&t instanceof X.FormData,!(0<=q1(uN,e))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of n)this.g.setRequestHeader(s,o);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{OE(this),0<this.B&&((this.K=cN(this.g))?(this.g.timeout=this.B,this.g.ontimeout=vt(this.qa,this)):this.A=Mp(this.qa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(s){$y(this,s)}};function cN(t){return ys&&RD()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}B.qa=function(){typeof Cp<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,lt(this,"timeout"),this.abort(8))};function $y(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,NE(t),Sc(t)}function NE(t){t.D||(t.D=!0,lt(t,"complete"),lt(t,"error"))}B.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,lt(this,"complete"),lt(this,"abort"),Sc(this))};B.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Sc(this,!0)),Le.X.M.call(this)};B.Ha=function(){this.s||(this.F||this.v||this.l?PE(this):this.fb())};B.fb=function(){PE(this)};function PE(t){if(t.h&&typeof Cp<"u"&&(!t.C[1]||Hn(t)!=4||t.aa()!=2)){if(t.v&&Hn(t)==4)Mp(t.Ha,0,t);else if(lt(t,"readystatechange"),Hn(t)==4){t.h=!1;try{const a=t.aa();e:switch(a){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=a===0){var i=String(t.H).match(EE)[1]||null;if(!i&&X.self&&X.self.location){var s=X.self.location.protocol;i=s.substr(0,s.length-1)}r=!lN.test(i?i.toLowerCase():"")}n=r}if(n)lt(t,"complete"),lt(t,"success");else{t.m=6;try{var o=2<Hn(t)?t.g.statusText:""}catch{o=""}t.j=o+" ["+t.aa()+"]",NE(t)}}finally{Sc(t)}}}}function Sc(t,e){if(t.g){OE(t);const n=t.g,r=t.C[0]?_u:null;t.g=null,t.C=null,e||lt(t,"ready");try{n.onreadystatechange=r}catch{}}}function OE(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(X.clearTimeout(t.A),t.A=null)}function Hn(t){return t.g?t.g.readyState:0}B.aa=function(){try{return 2<Hn(this)?this.g.status:-1}catch{return-1}};B.fa=function(){try{return this.g?this.g.responseText:""}catch{return""}};B.Sa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),aN(e)}};function Uy(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case DE:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}B.Ea=function(){return this.m};B.Oa=function(){return typeof this.j=="string"?this.j:String(this.j)};function LE(t){let e="";return xp(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function zp(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=LE(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Re(t,e,n))}function Ys(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function bE(t){this.Ca=0,this.i=[],this.j=new mc,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Ys("failFast",!1,t),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Ys("baseRetryDelayMs",5e3,t),this.bb=Ys("retryDelaySeedMs",1e4,t),this.$a=Ys("forwardChannelMaxRetries",2,t),this.ta=Ys("forwardChannelRequestTimeoutMs",2e4,t),this.ra=t&&t.xmlHttpFactory||void 0,this.Da=t&&t.Zb||!1,this.J=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.I="",this.h=new kE(t&&t.concurrentRequestLimit),this.Fa=new iN,this.O=t&&t.fastHandshake||!1,this.N=t&&t.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=t&&t.Xb||!1,t&&t.Aa&&this.j.Aa(),t&&t.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&t&&t.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}B=bE.prototype;B.ma=8;B.G=1;function Hp(t){if(ME(t),t.G==3){var e=t.U++,n=Yn(t.F);Re(n,"SID",t.I),Re(n,"RID",e),Re(n,"TYPE","terminate"),$a(t,n),e=new Oa(t,t.j,e,void 0),e.K=2,e.v=Ec(Yn(n)),n=!1,X.navigator&&X.navigator.sendBeacon&&(n=X.navigator.sendBeacon(e.v.toString(),"")),!n&&X.Image&&(new Image().src=e.v,n=!0),n||(e.g=HE(e.l,null),e.g.da(e.v)),e.F=Date.now(),La(e)}jE(t)}function Tc(t){t.g&&(qp(t),t.g.cancel(),t.g=null)}function ME(t){Tc(t),t.u&&(X.clearTimeout(t.u),t.u=null),Ru(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&X.clearTimeout(t.m),t.m=null)}function kc(t){IE(t.h)||t.m||(t.m=!0,iE(t.Ja,t),t.C=0)}function hN(t,e){return CE(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.D.concat(t.i),!0):t.G==1||t.G==2||t.C>=(t.Za?0:t.$a)?!1:(t.m=Na(vt(t.Ja,t,e),BE(t,t.C)),t.C++,!0)}B.Ja=function(t){if(this.m)if(this.m=null,this.G==1){if(!t){this.U=Math.floor(1e5*Math.random()),t=this.U++;const i=new Oa(this,this.j,t,void 0);let s=this.s;if(this.S&&(s?(s=X1(s),Y1(s,this.S)):s=this.S),this.o!==null||this.N||(i.H=s,s=null),this.O)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=$E(this,i,e),n=Yn(this.F),Re(n,"RID",t),Re(n,"CVER",22),this.D&&Re(n,"X-HTTP-Session-Id",this.D),$a(this,n),s&&(this.N?e="headers="+encodeURIComponent(String(LE(s)))+"&"+e:this.o&&zp(n,this.o,s)),Vp(this.h,i),this.Ya&&Re(n,"TYPE","init"),this.O?(Re(n,"$req",e),Re(n,"SID","null"),i.Z=!0,Jd(i,n,null)):Jd(i,n,e),this.G=2}}else this.G==3&&(t?Fy(this,t):this.i.length==0||IE(this.h)||Fy(this))};function Fy(t,e){var n;e?n=e.m:n=t.U++;const r=Yn(t.F);Re(r,"SID",t.I),Re(r,"RID",n),Re(r,"AID",t.T),$a(t,r),t.o&&t.s&&zp(r,t.o,t.s),n=new Oa(t,t.j,n,t.C+1),t.o===null&&(n.H=t.s),e&&(t.i=e.D.concat(t.i)),e=$E(t,n,1e3),n.setTimeout(Math.round(.5*t.ta)+Math.round(.5*t.ta*Math.random())),Vp(t.h,n),Jd(n,r,e)}function $a(t,e){t.ia&&xp(t.ia,function(n,r){Re(e,r,n)}),t.l&&wE({},function(n,r){Re(e,r,n)})}function $E(t,e,n){n=Math.min(t.i.length,n);var r=t.l?vt(t.l.Ra,t.l,t):null;e:{var i=t.i;let s=-1;for(;;){const o=["count="+n];s==-1?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let l=0;l<n;l++){let u=i[l].h;const h=i[l].g;if(u-=s,0>u)s=Math.max(0,i[l].h-100),a=!1;else try{sN(h,o,"req"+u+"_")}catch{r&&r(h)}}if(a){r=o.join("&");break e}}}return t=t.i.splice(0,n),e.D=t,r}function UE(t){t.g||t.u||(t.Z=1,iE(t.Ia,t),t.A=0)}function Wp(t){return t.g||t.u||3<=t.A?!1:(t.Z++,t.u=Na(vt(t.Ia,t),BE(t,t.A)),t.A++,!0)}B.Ia=function(){if(this.u=null,FE(this),this.$&&!(this.K||this.g==null||0>=this.P)){var t=2*this.P;this.j.info("BP detection timer enabled: "+t),this.B=Na(vt(this.eb,this),t)}};B.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,Rt(10),Tc(this),FE(this))};function qp(t){t.B!=null&&(X.clearTimeout(t.B),t.B=null)}function FE(t){t.g=new Oa(t,t.j,"rpc",t.Z),t.o===null&&(t.g.H=t.s),t.g.N=0;var e=Yn(t.sa);Re(e,"RID","rpc"),Re(e,"SID",t.I),Re(e,"CI",t.L?"0":"1"),Re(e,"AID",t.T),Re(e,"TYPE","xmlhttp"),$a(t,e),t.o&&t.s&&zp(e,t.o,t.s),t.J&&t.g.setTimeout(t.J);var n=t.g;t=t.ka,n.K=1,n.v=Ec(Yn(e)),n.s=null,n.P=!0,mE(n,t)}B.cb=function(){this.v!=null&&(this.v=null,Tc(this),Wp(this),Rt(19))};function Ru(t){t.v!=null&&(X.clearTimeout(t.v),t.v=null)}function VE(t,e){var n=null;if(t.g==e){Ru(t),qp(t),t.g=null;var r=2}else if(ef(t.h,e))n=e.D,RE(t.h,e),r=1;else return;if(t.G!=0){if(t.pa=e.Y,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;r=gc(),lt(r,new hE(r,n)),kc(t)}else UE(t);else if(i=e.o,i==3||i==0&&0<t.pa||!(r==1&&hN(t,e)||r==2&&Wp(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),i){case 1:ti(t,5);break;case 4:ti(t,10);break;case 3:ti(t,6);break;default:ti(t,2)}}}function BE(t,e){let n=t.Xa+Math.floor(Math.random()*t.bb);return t.l||(n*=2),n*e}function ti(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=vt(t.kb,t);n||(n=new ai("//www.google.com/images/cleardot.gif"),X.location&&X.location.protocol=="http"||Iu(n,"https"),Ec(n)),oN(n.toString(),r)}else Rt(2);t.G=0,t.l&&t.l.va(e),jE(t),ME(t)}B.kb=function(t){t?(this.j.info("Successfully pinged google.com"),Rt(2)):(this.j.info("Failed to ping google.com"),Rt(1))};function jE(t){if(t.G=0,t.la=[],t.l){const e=AE(t.h);(e.length!=0||t.i.length!=0)&&(Ay(t.la,e),Ay(t.la,t.i),t.h.i.length=0,Rp(t.i),t.i.length=0),t.l.ua()}}function zE(t,e,n){var r=n instanceof ai?Yn(n):new ai(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Cu(r,r.m);else{var i=X.location;r=i.protocol,e=e?e+"."+i.hostname:i.hostname,i=+i.port;var s=new ai(null,void 0);r&&Iu(s,r),e&&(s.g=e),i&&Cu(s,i),n&&(s.l=n),r=s}return n=t.D,e=t.za,n&&e&&Re(r,n,e),Re(r,"VER",t.ma),$a(t,r),r}function HE(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Da&&!t.ra?new Le(new ba({jb:!0})):new Le(t.ra),e.Ka(t.H),e}function WE(){}B=WE.prototype;B.xa=function(){};B.wa=function(){};B.va=function(){};B.ua=function(){};B.Ra=function(){};function Au(){if(ys&&!(10<=Number(AD)))throw Error("Environmental error: no available transport.")}Au.prototype.g=function(t,e){return new qt(t,e)};function qt(t,e){tt.call(this),this.g=new bE(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.S=t,(t=e&&e.Yb)&&!Su(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Su(e)&&(this.g.D=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new Ps(this)}ct(qt,tt);qt.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;Rt(0),t.V=e,t.ia=n||{},t.L=t.Y,t.F=zE(t,null,t.V),kc(t)};qt.prototype.close=function(){Hp(this.g)};qt.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=Lp(t),t=n);e.i.push(new nN(e.ab++,t)),e.G==3&&kc(e)};qt.prototype.M=function(){this.g.l=null,delete this.j,Hp(this.g),delete this.g,qt.X.M.call(this)};function qE(t){Up.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}ct(qE,Up);function KE(){Fp.call(this),this.status=1}ct(KE,Fp);function Ps(t){this.g=t}ct(Ps,WE);Ps.prototype.xa=function(){lt(this.g,"a")};Ps.prototype.wa=function(t){lt(this.g,new qE(t))};Ps.prototype.va=function(t){lt(this.g,new KE)};Ps.prototype.ua=function(){lt(this.g,"b")};Au.prototype.createWebChannel=Au.prototype.g;qt.prototype.send=qt.prototype.u;qt.prototype.open=qt.prototype.m;qt.prototype.close=qt.prototype.close;yc.NO_ERROR=0;yc.TIMEOUT=8;yc.HTTP_ERROR=6;dE.COMPLETE="complete";fE.EventType=Pa;Pa.OPEN="a";Pa.CLOSE="b";Pa.ERROR="c";Pa.MESSAGE="d";tt.prototype.listen=tt.prototype.N;Le.prototype.listenOnce=Le.prototype.O;Le.prototype.getLastError=Le.prototype.Oa;Le.prototype.getLastErrorCode=Le.prototype.Ea;Le.prototype.getStatus=Le.prototype.aa;Le.prototype.getResponseJson=Le.prototype.Sa;Le.prototype.getResponseText=Le.prototype.fa;Le.prototype.send=Le.prototype.da;Le.prototype.setWithCredentials=Le.prototype.Ka;var dN=function(){return new Au},fN=function(){return gc()},xh=yc,pN=dE,mN=Ii,Vy={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},gN=ba,yl=fE,yN=Le;const By="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pt{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}pt.UNAUTHENTICATED=new pt(null),pt.GOOGLE_CREDENTIALS=new pt("google-credentials-uid"),pt.FIRST_PARTY=new pt("first-party-uid"),pt.MOCK_USER=new pt("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Os="9.16.0";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi=new pp("@firebase/firestore");function jy(){return wi.logLevel}function j(t,...e){if(wi.logLevel<=me.DEBUG){const n=e.map(Kp);wi.debug(`Firestore (${Os}): ${t}`,...n)}}function Jn(t,...e){if(wi.logLevel<=me.ERROR){const n=e.map(Kp);wi.error(`Firestore (${Os}): ${t}`,...n)}}function tf(t,...e){if(wi.logLevel<=me.WARN){const n=e.map(Kp);wi.warn(`Firestore (${Os}): ${t}`,...n)}}function Kp(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*   http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/var e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t="Unexpected state"){const e=`FIRESTORE (${Os}) INTERNAL ASSERTION FAILED: `+t;throw Jn(e),new Error(e)}function Se(t,e){t||Y()}function re(t,e){return t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const D={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class G extends bn{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GE{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class vN{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(pt.UNAUTHENTICATED))}shutdown(){}}class wN{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class EN{constructor(e){this.t=e,this.currentUser=pt.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const i=l=>this.i!==r?(r=this.i,n(l)):Promise.resolve();let s=new Ar;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Ar,e.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const l=s;e.enqueueRetryable(async()=>{await l.promise,await i(this.currentUser)})},a=l=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=l,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(l=>a(l)),setTimeout(()=>{if(!this.auth){const l=this.t.getImmediate({optional:!0});l?a(l):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Ar)}},0),o()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(Se(typeof r.accessToken=="string"),new GE(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Se(e===null||typeof e=="string"),new pt(e)}}class _N{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i,this.type="FirstParty",this.user=pt.FIRST_PARTY,this.p=new Map}I(){return this.g?this.g():(Se(!(typeof this.h!="object"||this.h===null||!this.h.auth||!this.h.auth.getAuthHeaderValueForFirstParty)),this.h.auth.getAuthHeaderValueForFirstParty([]))}get headers(){this.p.set("X-Goog-AuthUser",this.l);const e=this.I();return e&&this.p.set("Authorization",e),this.m&&this.p.set("X-Goog-Iam-Authorization-Token",this.m),this.p}}class SN{constructor(e,n,r,i){this.h=e,this.l=n,this.m=r,this.g=i}getToken(){return Promise.resolve(new _N(this.h,this.l,this.m,this.g))}start(e,n){e.enqueueRetryable(()=>n(pt.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class TN{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class kN{constructor(e){this.T=e,this.forceRefresh=!1,this.appCheck=null,this.A=null}start(e,n){const r=s=>{s.error!=null&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.A;return this.A=s.token,j("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?n(s.token):Promise.resolve()};this.o=s=>{e.enqueueRetryable(()=>r(s))};const i=s=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.T.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.T.getImmediate({optional:!0});s?i(s):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(Se(typeof n.token=="string"),this.A=n.token,new TN(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function IN(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class QE{static R(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const i=IN(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<n&&(r+=e.charAt(i[s]%e.length))}return r}}function ge(t,e){return t<e?-1:t>e?1:0}function vs(t,e,n){return t.length===e.length&&t.every((r,i)=>n(r,e[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new G(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new G(D.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new G(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new G(D.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return Ge.fromMillis(Date.now())}static fromDate(e){return Ge.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new Ge(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ge(this.nanoseconds,e.nanoseconds):ge(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te{constructor(e){this.timestamp=e}static fromTimestamp(e){return new te(e)}static min(){return new te(new Ge(0,0))}static max(){return new te(new Ge(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,n,r){n===void 0?n=0:n>e.length&&Y(),r===void 0?r=e.length-n:r>e.length-n&&Y(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return ia.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof ia?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let i=0;i<r;i++){const s=e.get(i),o=n.get(i);if(s<o)return-1;if(s>o)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class Oe extends ia{construct(e,n,r){return new Oe(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new G(D.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(i=>i.length>0))}return new Oe(n)}static emptyPath(){return new Oe([])}}const CN=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class yt extends ia{construct(e,n,r){return new yt(e,n,r)}static isValidIdentifier(e){return CN.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),yt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new yt(["__name__"])}static fromServerFormat(e){const n=[];let r="",i=0;const s=()=>{if(r.length===0)throw new G(D.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let o=!1;for(;i<e.length;){const a=e[i];if(a==="\\"){if(i+1===e.length)throw new G(D.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const l=e[i+1];if(l!=="\\"&&l!=="."&&l!=="`")throw new G(D.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=l,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new G(D.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new yt(n)}static emptyPath(){return new yt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H{constructor(e){this.path=e}static fromPath(e){return new H(Oe.fromString(e))}static fromName(e){return new H(Oe.fromString(e).popFirst(5))}static empty(){return new H(Oe.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&Oe.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return Oe.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new H(new Oe(e.slice()))}}function RN(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,i=te.fromTimestamp(r===1e9?new Ge(n+1,0):new Ge(n,r));return new Or(i,H.empty(),e)}function AN(t){return new Or(t.readTime,t.key,-1)}class Or{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new Or(te.min(),H.empty(),-1)}static max(){return new Or(te.max(),H.empty(),-1)}}function xN(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=H.comparator(t.documentKey,e.documentKey),n!==0?n:ge(t.largestBatchId,e.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const DN="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class NN{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ua(t){if(t.code!==D.FAILED_PRECONDITION||t.message!==DN)throw t;j("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&Y(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new A((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(e,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(n,s).next(r,i)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof A?n:A.resolve(n)}catch(n){return A.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):A.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):A.reject(n)}static resolve(e){return new A((n,r)=>{n(e)})}static reject(e){return new A((n,r)=>{r(e)})}static waitFor(e){return new A((n,r)=>{let i=0,s=0,o=!1;e.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&n()},l=>r(l))}),o=!0,s===i&&n()})}static or(e){let n=A.resolve(!1);for(const r of e)n=n.next(i=>i?A.resolve(i):r());return n}static forEach(e,n){const r=[];return e.forEach((i,s)=>{r.push(n.call(this,i,s))}),this.waitFor(r)}static mapArray(e,n){return new A((r,i)=>{const s=e.length,o=new Array(s);let a=0;for(let l=0;l<s;l++){const u=l;n(e[u]).next(h=>{o[u]=h,++a,a===s&&r(o)},h=>i(h))}})}static doWhile(e,n){return new A((r,i)=>{const s=()=>{e()===!0?n().next(()=>{s()},i):r()};s()})}}function Fa(t){return t.name==="IndexedDbTransactionError"}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gp{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ut(r),this.ct=r=>n.writeSequenceNumber(r))}ut(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ct&&this.ct(e),e}}Gp.at=-1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PN{constructor(e,n,r,i,s,o,a,l){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.useFetchStreams=l}}class sa{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new sa("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof sa&&e.projectId===this.projectId&&e.database===this.database}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zy(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function Ci(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function XE(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ic(t){return t==null}function xu(t){return t===0&&1/t==-1/0}function ON(t){return typeof t=="number"&&Number.isInteger(t)&&!xu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(e){this.binaryString=e}static fromBase64String(e){const n=atob(e);return new St(n)}static fromUint8Array(e){const n=function(r){let i="";for(let s=0;s<r.length;++s)i+=String.fromCharCode(r[s]);return i}(e);return new St(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ge(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}St.EMPTY_BYTE_STRING=new St("");const LN=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Lr(t){if(Se(!!t),typeof t=="string"){let e=0;const n=LN.exec(t);if(Se(!!n),n[1]){let i=n[1];i=(i+"000000000").substr(0,9),e=Number(i)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Ve(t.seconds),nanos:Ve(t.nanos)}}function Ve(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function ws(t){return typeof t=="string"?St.fromBase64String(t):St.fromUint8Array(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function YE(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function JE(t){const e=t.mapValue.fields.__previous_value__;return YE(e)?JE(e):e}function oa(t){const e=Lr(t.mapValue.fields.__local_write_time__.timestampValue);return new Ge(e.seconds,e.nanos)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vl={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Ei(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?YE(t)?4:bN(t)?9007199254740991:10:Y()}function On(t,e){if(t===e)return!0;const n=Ei(t);if(n!==Ei(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return oa(t).isEqual(oa(e));case 3:return function(r,i){if(typeof r.timestampValue=="string"&&typeof i.timestampValue=="string"&&r.timestampValue.length===i.timestampValue.length)return r.timestampValue===i.timestampValue;const s=Lr(r.timestampValue),o=Lr(i.timestampValue);return s.seconds===o.seconds&&s.nanos===o.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,i){return ws(r.bytesValue).isEqual(ws(i.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,i){return Ve(r.geoPointValue.latitude)===Ve(i.geoPointValue.latitude)&&Ve(r.geoPointValue.longitude)===Ve(i.geoPointValue.longitude)}(t,e);case 2:return function(r,i){if("integerValue"in r&&"integerValue"in i)return Ve(r.integerValue)===Ve(i.integerValue);if("doubleValue"in r&&"doubleValue"in i){const s=Ve(r.doubleValue),o=Ve(i.doubleValue);return s===o?xu(s)===xu(o):isNaN(s)&&isNaN(o)}return!1}(t,e);case 9:return vs(t.arrayValue.values||[],e.arrayValue.values||[],On);case 10:return function(r,i){const s=r.mapValue.fields||{},o=i.mapValue.fields||{};if(zy(s)!==zy(o))return!1;for(const a in s)if(s.hasOwnProperty(a)&&(o[a]===void 0||!On(s[a],o[a])))return!1;return!0}(t,e);default:return Y()}}function aa(t,e){return(t.values||[]).find(n=>On(n,e))!==void 0}function Es(t,e){if(t===e)return 0;const n=Ei(t),r=Ei(e);if(n!==r)return ge(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ge(t.booleanValue,e.booleanValue);case 2:return function(i,s){const o=Ve(i.integerValue||i.doubleValue),a=Ve(s.integerValue||s.doubleValue);return o<a?-1:o>a?1:o===a?0:isNaN(o)?isNaN(a)?0:-1:1}(t,e);case 3:return Hy(t.timestampValue,e.timestampValue);case 4:return Hy(oa(t),oa(e));case 5:return ge(t.stringValue,e.stringValue);case 6:return function(i,s){const o=ws(i),a=ws(s);return o.compareTo(a)}(t.bytesValue,e.bytesValue);case 7:return function(i,s){const o=i.split("/"),a=s.split("/");for(let l=0;l<o.length&&l<a.length;l++){const u=ge(o[l],a[l]);if(u!==0)return u}return ge(o.length,a.length)}(t.referenceValue,e.referenceValue);case 8:return function(i,s){const o=ge(Ve(i.latitude),Ve(s.latitude));return o!==0?o:ge(Ve(i.longitude),Ve(s.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(i,s){const o=i.values||[],a=s.values||[];for(let l=0;l<o.length&&l<a.length;++l){const u=Es(o[l],a[l]);if(u)return u}return ge(o.length,a.length)}(t.arrayValue,e.arrayValue);case 10:return function(i,s){if(i===vl.mapValue&&s===vl.mapValue)return 0;if(i===vl.mapValue)return 1;if(s===vl.mapValue)return-1;const o=i.fields||{},a=Object.keys(o),l=s.fields||{},u=Object.keys(l);a.sort(),u.sort();for(let h=0;h<a.length&&h<u.length;++h){const d=ge(a[h],u[h]);if(d!==0)return d;const c=Es(o[a[h]],l[u[h]]);if(c!==0)return c}return ge(a.length,u.length)}(t.mapValue,e.mapValue);default:throw Y()}}function Hy(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return ge(t,e);const n=Lr(t),r=Lr(e),i=ge(n.seconds,r.seconds);return i!==0?i:ge(n.nanos,r.nanos)}function _s(t){return nf(t)}function nf(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const i=Lr(r);return`time(${i.seconds},${i.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?ws(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,H.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let i="[",s=!0;for(const o of r.values||[])s?s=!1:i+=",",i+=nf(o);return i+"]"}(t.arrayValue):"mapValue"in t?function(r){const i=Object.keys(r.fields||{}).sort();let s="{",o=!0;for(const a of i)o?o=!1:s+=",",s+=`${a}:${nf(r.fields[a])}`;return s+"}"}(t.mapValue):Y();var e,n}function rf(t){return!!t&&"integerValue"in t}function Qp(t){return!!t&&"arrayValue"in t}function Wy(t){return!!t&&"nullValue"in t}function qy(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function Ul(t){return!!t&&"mapValue"in t}function ko(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return Ci(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=ko(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ko(t.arrayValue.values[n]);return e}return Object.assign({},t)}function bN(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,n){this.position=e,this.inclusive=n}}function Ky(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(s.field.isKeyField()?r=H.comparator(H.fromName(o.referenceValue),n.key):r=Es(o,n.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Gy(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!On(t.position[n],e.position[n]))return!1;return!0}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ZE{}class qe extends ZE{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new $N(e,n,r):n==="array-contains"?new VN(e,r):n==="in"?new BN(e,r):n==="not-in"?new jN(e,r):n==="array-contains-any"?new zN(e,r):new qe(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new UN(e,r):new FN(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(Es(n,this.value)):n!==null&&Ei(this.value)===Ei(n)&&this.matchesComparison(Es(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return Y()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class Ln extends ZE{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new Ln(e,n)}matches(e){return e_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function e_(t){return t.op==="and"}function t_(t){return MN(t)&&e_(t)}function MN(t){for(const e of t.filters)if(e instanceof Ln)return!1;return!0}function sf(t){if(t instanceof qe)return t.field.canonicalString()+t.op.toString()+_s(t.value);if(t_(t))return t.filters.map(e=>sf(e)).join(",");{const e=t.filters.map(n=>sf(n)).join(",");return`${t.op}(${e})`}}function n_(t,e){return t instanceof qe?function(n,r){return r instanceof qe&&n.op===r.op&&n.field.isEqual(r.field)&&On(n.value,r.value)}(t,e):t instanceof Ln?function(n,r){return r instanceof Ln&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((i,s,o)=>i&&n_(s,r.filters[o]),!0):!1}(t,e):void Y()}function r_(t){return t instanceof qe?function(e){return`${e.field.canonicalString()} ${e.op} ${_s(e.value)}`}(t):t instanceof Ln?function(e){return e.op.toString()+" {"+e.getFilters().map(r_).join(" ,")+"}"}(t):"Filter"}class $N extends qe{constructor(e,n,r){super(e,n,r),this.key=H.fromName(r.referenceValue)}matches(e){const n=H.comparator(e.key,this.key);return this.matchesComparison(n)}}class UN extends qe{constructor(e,n){super(e,"in",n),this.keys=i_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class FN extends qe{constructor(e,n){super(e,"not-in",n),this.keys=i_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function i_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>H.fromName(r.referenceValue))}class VN extends qe{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return Qp(n)&&aa(n.arrayValue,this.value)}}class BN extends qe{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&aa(this.value.arrayValue,n)}}class jN extends qe{constructor(e,n){super(e,"not-in",n)}matches(e){if(aa(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!aa(this.value.arrayValue,n)}}class zN extends qe{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!Qp(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>aa(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Io{constructor(e,n="asc"){this.field=e,this.dir=n}}function HN(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe{constructor(e,n){this.comparator=e,this.root=n||ot.EMPTY}insert(e,n){return new Xe(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,ot.BLACK,null,null))}remove(e){return new Xe(this.comparator,this.root.remove(e,this.comparator).copy(null,null,ot.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(e,r.key);if(i===0)return n+r.left.size;i<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new wl(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new wl(this.root,e,this.comparator,!1)}getReverseIterator(){return new wl(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new wl(this.root,e,this.comparator,!0)}}class wl{constructor(e,n,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=n?r(e.key,n):1,n&&i&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(s===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class ot{constructor(e,n,r,i,s){this.key=e,this.value=n,this.color=r??ot.RED,this.left=i??ot.EMPTY,this.right=s??ot.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,i,s){return new ot(e??this.key,n??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let i=this;const s=r(e,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(e,n,r),null):s===0?i.copy(null,n,null,null,null):i.copy(null,null,null,null,i.right.insert(e,n,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return ot.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,i=this;if(n(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,n),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),n(e,i.key)===0){if(i.right.isEmpty())return ot.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,n))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,ot.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,ot.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw Y();const e=this.left.check();if(e!==this.right.check())throw Y();return e+(this.isRed()?0:1)}}ot.EMPTY=null,ot.RED=!0,ot.BLACK=!1;ot.EMPTY=new class{constructor(){this.size=0}get key(){throw Y()}get value(){throw Y()}get color(){throw Y()}get left(){throw Y()}get right(){throw Y()}copy(t,e,n,r,i){return this}insert(t,e,n){return new ot(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qe{constructor(e){this.comparator=e,this.data=new Xe(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,e[1])>=0)return;n(i.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new Qy(this.data.getIterator())}getIteratorFrom(e){return new Qy(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof Qe)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new Qe(this.comparator);return n.data=e,n}}class Qy{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e){this.fields=e,e.sort(yt.comparator)}static empty(){return new Bt([])}unionWith(e){let n=new Qe(yt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Bt(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return vs(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ot{constructor(e){this.value=e}static empty(){return new Ot({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!Ul(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=ko(n)}setAll(e){let n=yt.emptyPath(),r={},i=[];e.forEach((o,a)=>{if(!n.isImmediateParentOf(a)){const l=this.getFieldsMap(n);this.applyChanges(l,r,i),r={},i=[],n=a.popLast()}o?r[a.lastSegment()]=ko(o):i.push(a.lastSegment())});const s=this.getFieldsMap(n);this.applyChanges(s,r,i)}delete(e){const n=this.field(e.popLast());Ul(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return On(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let i=n.mapValue.fields[e.get(r)];Ul(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=i),n=i}return n.mapValue.fields}applyChanges(e,n,r){Ci(n,(i,s)=>e[i]=s);for(const i of r)delete e[i]}clone(){return new Ot(ko(this.value))}}function s_(t){const e=[];return Ci(t.fields,(n,r)=>{const i=new yt([n]);if(Ul(r)){const s=s_(r.mapValue).fields;if(s.length===0)e.push(i);else for(const o of s)e.push(i.child(o))}else e.push(i)}),new Bt(e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,n,r,i,s,o,a){this.key=e,this.documentType=n,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(e){return new gt(e,0,te.min(),te.min(),te.min(),Ot.empty(),0)}static newFoundDocument(e,n,r,i){return new gt(e,1,n,te.min(),r,i,0)}static newNoDocument(e,n){return new gt(e,2,n,te.min(),te.min(),Ot.empty(),0)}static newUnknownDocument(e,n){return new gt(e,3,n,te.min(),te.min(),Ot.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(te.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Ot.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Ot.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=te.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof gt&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new gt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WN{constructor(e,n=null,r=[],i=[],s=null,o=null,a=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ft=null}}function Xy(t,e=null,n=[],r=[],i=null,s=null,o=null){return new WN(t,e,n,r,i,s,o)}function Xp(t){const e=re(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>sf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(i){return i.field.canonicalString()+i.dir}(r)).join(","),Ic(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>_s(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>_s(r)).join(",")),e.ft=n}return e.ft}function Yp(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!HN(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!n_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Gy(t.startAt,e.startAt)&&Gy(t.endAt,e.endAt)}function of(t){return H.isDocumentKey(t.path)&&t.collectionGroup===null&&t.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cc{constructor(e,n=null,r=[],i=[],s=null,o="F",a=null,l=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=l,this.dt=null,this._t=null,this.startAt,this.endAt}}function qN(t,e,n,r,i,s,o,a){return new Cc(t,e,n,r,i,s,o,a)}function Jp(t){return new Cc(t)}function Yy(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function KN(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function GN(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function QN(t){return t.collectionGroup!==null}function os(t){const e=re(t);if(e.dt===null){e.dt=[];const n=GN(e),r=KN(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new Io(n)),e.dt.push(new Io(yt.keyField(),"asc"));else{let i=!1;for(const s of e.explicitOrderBy)e.dt.push(s),s.field.isKeyField()&&(i=!0);if(!i){const s=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new Io(yt.keyField(),s))}}}return e.dt}function Zn(t){const e=re(t);if(!e._t)if(e.limitType==="F")e._t=Xy(e.path,e.collectionGroup,os(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const s of os(e)){const o=s.dir==="desc"?"asc":"desc";n.push(new Io(s.field,o))}const r=e.endAt?new Du(e.endAt.position,e.endAt.inclusive):null,i=e.startAt?new Du(e.startAt.position,e.startAt.inclusive):null;e._t=Xy(e.path,e.collectionGroup,n,e.filters,e.limit,r,i)}return e._t}function af(t,e,n){return new Cc(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function Rc(t,e){return Yp(Zn(t),Zn(e))&&t.limitType===e.limitType}function o_(t){return`${Xp(Zn(t))}|lt:${t.limitType}`}function lf(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>r_(r)).join(", ")}]`),Ic(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(i){return`${i.field.canonicalString()} (${i.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>_s(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>_s(r)).join(",")),`Target(${n})`}(Zn(t))}; limitType=${t.limitType})`}function Zp(t,e){return e.isFoundDocument()&&function(n,r){const i=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(i):H.isDocumentKey(n.path)?n.path.isEqual(i):n.path.isImmediateParentOf(i)}(t,e)&&function(n,r){for(const i of os(n))if(!i.field.isKeyField()&&r.data.field(i.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const i of n.filters)if(!i.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(i,s,o){const a=Ky(i,s,o);return i.inclusive?a<=0:a<0}(n.startAt,os(n),r)||n.endAt&&!function(i,s,o){const a=Ky(i,s,o);return i.inclusive?a>=0:a>0}(n.endAt,os(n),r))}(t,e)}function XN(t){return t.collectionGroup||(t.path.length%2==1?t.path.lastSegment():t.path.get(t.path.length-2))}function a_(t){return(e,n)=>{let r=!1;for(const i of os(t)){const s=YN(i,e,n);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function YN(t,e,n){const r=t.field.isKeyField()?H.comparator(e.key,n.key):function(i,s,o){const a=s.data.field(i),l=o.data.field(i);return a!==null&&l!==null?Es(a,l):Y()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return Y()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function l_(t,e){if(t.wt){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:xu(e)?"-0":e}}function u_(t){return{integerValue:""+t}}function JN(t,e){return ON(e)?u_(e):l_(t,e)}/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ac{constructor(){this._=void 0}}function ZN(t,e,n){return t instanceof Nu?function(r,i){const s={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return i&&(s.fields.__previous_value__=i),{mapValue:s}}(n,e):t instanceof la?h_(t,e):t instanceof ua?d_(t,e):function(r,i){const s=c_(r,i),o=Jy(s)+Jy(r.gt);return rf(s)&&rf(r.gt)?u_(o):l_(r.yt,o)}(t,e)}function eP(t,e,n){return t instanceof la?h_(t,e):t instanceof ua?d_(t,e):n}function c_(t,e){return t instanceof Pu?rf(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Nu extends Ac{}class la extends Ac{constructor(e){super(),this.elements=e}}function h_(t,e){const n=f_(e);for(const r of t.elements)n.some(i=>On(i,r))||n.push(r);return{arrayValue:{values:n}}}class ua extends Ac{constructor(e){super(),this.elements=e}}function d_(t,e){let n=f_(e);for(const r of t.elements)n=n.filter(i=>!On(i,r));return{arrayValue:{values:n}}}class Pu extends Ac{constructor(e,n){super(),this.yt=e,this.gt=n}}function Jy(t){return Ve(t.integerValue||t.doubleValue)}function f_(t){return Qp(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function tP(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof la&&r instanceof la||n instanceof ua&&r instanceof ua?vs(n.elements,r.elements,On):n instanceof Pu&&r instanceof Pu?On(n.gt,r.gt):n instanceof Nu&&r instanceof Nu}(t.transform,e.transform)}class nP{constructor(e,n){this.version=e,this.transformResults=n}}class Nn{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new Nn}static exists(e){return new Nn(void 0,e)}static updateTime(e){return new Nn(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Fl(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class xc{}function p_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new g_(t.key,Nn.none()):new Va(t.key,t.data,Nn.none());{const n=t.data,r=Ot.empty();let i=new Qe(yt.comparator);for(let s of e.fields)if(!i.has(s)){let o=n.field(s);o===null&&s.length>1&&(s=s.popLast(),o=n.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Br(t.key,r,new Bt(i.toArray()),Nn.none())}}function rP(t,e,n){t instanceof Va?function(r,i,s){const o=r.value.clone(),a=ev(r.fieldTransforms,i,s.transformResults);o.setAll(a),i.convertToFoundDocument(s.version,o).setHasCommittedMutations()}(t,e,n):t instanceof Br?function(r,i,s){if(!Fl(r.precondition,i))return void i.convertToUnknownDocument(s.version);const o=ev(r.fieldTransforms,i,s.transformResults),a=i.data;a.setAll(m_(r)),a.setAll(o),i.convertToFoundDocument(s.version,a).setHasCommittedMutations()}(t,e,n):function(r,i,s){i.convertToNoDocument(s.version).setHasCommittedMutations()}(0,e,n)}function Co(t,e,n,r){return t instanceof Va?function(i,s,o,a){if(!Fl(i.precondition,s))return o;const l=i.value.clone(),u=tv(i.fieldTransforms,a,s);return l.setAll(u),s.convertToFoundDocument(s.version,l).setHasLocalMutations(),null}(t,e,n,r):t instanceof Br?function(i,s,o,a){if(!Fl(i.precondition,s))return o;const l=tv(i.fieldTransforms,a,s),u=s.data;return u.setAll(m_(i)),u.setAll(l),s.convertToFoundDocument(s.version,u).setHasLocalMutations(),o===null?null:o.unionWith(i.fieldMask.fields).unionWith(i.fieldTransforms.map(h=>h.field))}(t,e,n,r):function(i,s,o){return Fl(i.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):o}(t,e,n)}function iP(t,e){let n=null;for(const r of t.fieldTransforms){const i=e.data.field(r.field),s=c_(r.transform,i||null);s!=null&&(n===null&&(n=Ot.empty()),n.set(r.field,s))}return n||null}function Zy(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&vs(n,r,(i,s)=>tP(i,s))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class Va extends xc{constructor(e,n,r,i=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Br extends xc{constructor(e,n,r,i,s=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function m_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function ev(t,e,n){const r=new Map;Se(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,eP(o,a,n[i]))}return r}function tv(t,e,n){const r=new Map;for(const i of t){const s=i.transform,o=n.data.field(i.field);r.set(i.field,ZN(s,o,e))}return r}class g_ extends xc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class sP extends xc{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oP{constructor(e){this.count=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Ue,he;function aP(t){switch(t){default:return Y();case D.CANCELLED:case D.UNKNOWN:case D.DEADLINE_EXCEEDED:case D.RESOURCE_EXHAUSTED:case D.INTERNAL:case D.UNAVAILABLE:case D.UNAUTHENTICATED:return!1;case D.INVALID_ARGUMENT:case D.NOT_FOUND:case D.ALREADY_EXISTS:case D.PERMISSION_DENIED:case D.FAILED_PRECONDITION:case D.ABORTED:case D.OUT_OF_RANGE:case D.UNIMPLEMENTED:case D.DATA_LOSS:return!0}}function y_(t){if(t===void 0)return Jn("GRPC error has no .code"),D.UNKNOWN;switch(t){case Ue.OK:return D.OK;case Ue.CANCELLED:return D.CANCELLED;case Ue.UNKNOWN:return D.UNKNOWN;case Ue.DEADLINE_EXCEEDED:return D.DEADLINE_EXCEEDED;case Ue.RESOURCE_EXHAUSTED:return D.RESOURCE_EXHAUSTED;case Ue.INTERNAL:return D.INTERNAL;case Ue.UNAVAILABLE:return D.UNAVAILABLE;case Ue.UNAUTHENTICATED:return D.UNAUTHENTICATED;case Ue.INVALID_ARGUMENT:return D.INVALID_ARGUMENT;case Ue.NOT_FOUND:return D.NOT_FOUND;case Ue.ALREADY_EXISTS:return D.ALREADY_EXISTS;case Ue.PERMISSION_DENIED:return D.PERMISSION_DENIED;case Ue.FAILED_PRECONDITION:return D.FAILED_PRECONDITION;case Ue.ABORTED:return D.ABORTED;case Ue.OUT_OF_RANGE:return D.OUT_OF_RANGE;case Ue.UNIMPLEMENTED:return D.UNIMPLEMENTED;case Ue.DATA_LOSS:return D.DATA_LOSS;default:return Y()}}(he=Ue||(Ue={}))[he.OK=0]="OK",he[he.CANCELLED=1]="CANCELLED",he[he.UNKNOWN=2]="UNKNOWN",he[he.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",he[he.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",he[he.NOT_FOUND=5]="NOT_FOUND",he[he.ALREADY_EXISTS=6]="ALREADY_EXISTS",he[he.PERMISSION_DENIED=7]="PERMISSION_DENIED",he[he.UNAUTHENTICATED=16]="UNAUTHENTICATED",he[he.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",he[he.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",he[he.ABORTED=10]="ABORTED",he[he.OUT_OF_RANGE=11]="OUT_OF_RANGE",he[he.UNIMPLEMENTED=12]="UNIMPLEMENTED",he[he.INTERNAL=13]="INTERNAL",he[he.UNAVAILABLE=14]="UNAVAILABLE",he[he.DATA_LOSS=15]="DATA_LOSS";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,e))return s}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),i=this.inner[r];if(i===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],e))return void(i[s]=[e,n]);i.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return r.length===1?delete this.inner[n]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(e){Ci(this.inner,(n,r)=>{for(const[i,s]of r)e(i,s)})}isEmpty(){return XE(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lP=new Xe(H.comparator);function er(){return lP}const v_=new Xe(H.comparator);function co(...t){let e=v_;for(const n of t)e=e.insert(n.key,n);return e}function w_(t){let e=v_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function ni(){return Ro()}function E_(){return Ro()}function Ro(){return new Ls(t=>t.toString(),(t,e)=>t.isEqual(e))}const uP=new Xe(H.comparator),cP=new Qe(H.comparator);function le(...t){let e=cP;for(const n of t)e=e.add(n);return e}const hP=new Qe(ge);function __(){return hP}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dc{constructor(e,n,r,i,s){this.snapshotVersion=e,this.targetChanges=n,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,n,r){const i=new Map;return i.set(e,Ba.createSynthesizedTargetChangeForCurrentChange(e,n,r)),new Dc(te.min(),i,__(),er(),le())}}class Ba{constructor(e,n,r,i,s){this.resumeToken=e,this.current=n,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,n,r){return new Ba(r,n,le(),le(),le())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,n,r,i){this.It=e,this.removedTargetIds=n,this.key=r,this.Tt=i}}class S_{constructor(e,n){this.targetId=e,this.Et=n}}class T_{constructor(e,n,r=St.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=n,this.resumeToken=r,this.cause=i}}class nv{constructor(){this.At=0,this.Rt=iv(),this.bt=St.EMPTY_BYTE_STRING,this.Pt=!1,this.vt=!0}get current(){return this.Pt}get resumeToken(){return this.bt}get Vt(){return this.At!==0}get St(){return this.vt}Dt(e){e.approximateByteSize()>0&&(this.vt=!0,this.bt=e)}Ct(){let e=le(),n=le(),r=le();return this.Rt.forEach((i,s)=>{switch(s){case 0:e=e.add(i);break;case 2:n=n.add(i);break;case 1:r=r.add(i);break;default:Y()}}),new Ba(this.bt,this.Pt,e,n,r)}xt(){this.vt=!1,this.Rt=iv()}Nt(e,n){this.vt=!0,this.Rt=this.Rt.insert(e,n)}kt(e){this.vt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}Mt(){this.At-=1}Ft(){this.vt=!0,this.Pt=!0}}class dP{constructor(e){this.$t=e,this.Bt=new Map,this.Lt=er(),this.qt=rv(),this.Ut=new Qe(ge)}Kt(e){for(const n of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(n,e.Tt):this.Qt(n,e.key,e.Tt);for(const n of e.removedTargetIds)this.Qt(n,e.key,e.Tt)}jt(e){this.forEachTarget(e,n=>{const r=this.Wt(n);switch(e.state){case 0:this.zt(n)&&r.Dt(e.resumeToken);break;case 1:r.Mt(),r.Vt||r.xt(),r.Dt(e.resumeToken);break;case 2:r.Mt(),r.Vt||this.removeTarget(n);break;case 3:this.zt(n)&&(r.Ft(),r.Dt(e.resumeToken));break;case 4:this.zt(n)&&(this.Ht(n),r.Dt(e.resumeToken));break;default:Y()}})}forEachTarget(e,n){e.targetIds.length>0?e.targetIds.forEach(n):this.Bt.forEach((r,i)=>{this.zt(i)&&n(i)})}Jt(e){const n=e.targetId,r=e.Et.count,i=this.Yt(n);if(i){const s=i.target;if(of(s))if(r===0){const o=new H(s.path);this.Qt(n,o,gt.newNoDocument(o,te.min()))}else Se(r===1);else this.Xt(n)!==r&&(this.Ht(n),this.Ut=this.Ut.add(n))}}Zt(e){const n=new Map;this.Bt.forEach((s,o)=>{const a=this.Yt(o);if(a){if(s.current&&of(a.target)){const l=new H(a.target.path);this.Lt.get(l)!==null||this.te(o,l)||this.Qt(o,l,gt.newNoDocument(l,e))}s.St&&(n.set(o,s.Ct()),s.xt())}});let r=le();this.qt.forEach((s,o)=>{let a=!0;o.forEachWhile(l=>{const u=this.Yt(l);return!u||u.purpose===2||(a=!1,!1)}),a&&(r=r.add(s))}),this.Lt.forEach((s,o)=>o.setReadTime(e));const i=new Dc(e,n,this.Ut,this.Lt,r);return this.Lt=er(),this.qt=rv(),this.Ut=new Qe(ge),i}Gt(e,n){if(!this.zt(e))return;const r=this.te(e,n.key)?2:0;this.Wt(e).Nt(n.key,r),this.Lt=this.Lt.insert(n.key,n),this.qt=this.qt.insert(n.key,this.ee(n.key).add(e))}Qt(e,n,r){if(!this.zt(e))return;const i=this.Wt(e);this.te(e,n)?i.Nt(n,1):i.kt(n),this.qt=this.qt.insert(n,this.ee(n).delete(e)),r&&(this.Lt=this.Lt.insert(n,r))}removeTarget(e){this.Bt.delete(e)}Xt(e){const n=this.Wt(e).Ct();return this.$t.getRemoteKeysForTarget(e).size+n.addedDocuments.size-n.removedDocuments.size}Ot(e){this.Wt(e).Ot()}Wt(e){let n=this.Bt.get(e);return n||(n=new nv,this.Bt.set(e,n)),n}ee(e){let n=this.qt.get(e);return n||(n=new Qe(ge),this.qt=this.qt.insert(e,n)),n}zt(e){const n=this.Yt(e)!==null;return n||j("WatchChangeAggregator","Detected inactive target",e),n}Yt(e){const n=this.Bt.get(e);return n&&n.Vt?null:this.$t.ne(e)}Ht(e){this.Bt.set(e,new nv),this.$t.getRemoteKeysForTarget(e).forEach(n=>{this.Qt(e,n,null)})}te(e,n){return this.$t.getRemoteKeysForTarget(e).has(n)}}function rv(){return new Xe(H.comparator)}function iv(){return new Xe(H.comparator)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fP=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),pP=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),mP=(()=>({and:"AND",or:"OR"}))();class gP{constructor(e,n){this.databaseId=e,this.wt=n}}function Ou(t,e){return t.wt?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function k_(t,e){return t.wt?e.toBase64():e.toUint8Array()}function yP(t,e){return Ou(t,e.toTimestamp())}function Pn(t){return Se(!!t),te.fromTimestamp(function(e){const n=Lr(e);return new Ge(n.seconds,n.nanos)}(t))}function em(t,e){return function(n){return new Oe(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function I_(t){const e=Oe.fromString(t);return Se(x_(e)),e}function uf(t,e){return em(t.databaseId,e.path)}function Dh(t,e){const n=I_(e);if(n.get(1)!==t.databaseId.projectId)throw new G(D.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new G(D.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new H(C_(n))}function cf(t,e){return em(t.databaseId,e)}function vP(t){const e=I_(t);return e.length===4?Oe.emptyPath():C_(e)}function hf(t){return new Oe(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function C_(t){return Se(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function sv(t,e,n){return{name:uf(t,e),fields:n.value.mapValue.fields}}function wP(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:Y()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(l,u){return l.wt?(Se(u===void 0||typeof u=="string"),St.fromBase64String(u||"")):(Se(u===void 0||u instanceof Uint8Array),St.fromUint8Array(u||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(l){const u=l.code===void 0?D.UNKNOWN:y_(l.code);return new G(u,l.message||"")}(o);n=new T_(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=Dh(t,r.document.name),s=Pn(r.document.updateTime),o=r.document.createTime?Pn(r.document.createTime):te.min(),a=new Ot({mapValue:{fields:r.document.fields}}),l=gt.newFoundDocument(i,s,o,a),u=r.targetIds||[],h=r.removedTargetIds||[];n=new Vl(u,h,l.key,l)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=Dh(t,r.document),s=r.readTime?Pn(r.readTime):te.min(),o=gt.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Vl([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=Dh(t,r.document),s=r.removedTargetIds||[];n=new Vl([],s,i,null)}else{if(!("filter"in e))return Y();{e.filter;const r=e.filter;r.targetId;const i=r.count||0,s=new oP(i),o=r.targetId;n=new S_(o,s)}}return n}function EP(t,e){let n;if(e instanceof Va)n={update:sv(t,e.key,e.value)};else if(e instanceof g_)n={delete:uf(t,e.key)};else if(e instanceof Br)n={update:sv(t,e.key,e.data),updateMask:xP(e.fieldMask)};else{if(!(e instanceof sP))return Y();n={verify:uf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(i,s){const o=s.transform;if(o instanceof Nu)return{fieldPath:s.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(o instanceof la)return{fieldPath:s.field.canonicalString(),appendMissingElements:{values:o.elements}};if(o instanceof ua)return{fieldPath:s.field.canonicalString(),removeAllFromArray:{values:o.elements}};if(o instanceof Pu)return{fieldPath:s.field.canonicalString(),increment:o.gt};throw Y()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,i){return i.updateTime!==void 0?{updateTime:yP(r,i.updateTime)}:i.exists!==void 0?{exists:i.exists}:Y()}(t,e.precondition)),n}function _P(t,e){return t&&t.length>0?(Se(e!==void 0),t.map(n=>function(r,i){let s=r.updateTime?Pn(r.updateTime):Pn(i);return s.isEqual(te.min())&&(s=Pn(i)),new nP(s,r.transformResults||[])}(n,e))):[]}function SP(t,e){return{documents:[cf(t,e.path)]}}function TP(t,e){const n={structuredQuery:{}},r=e.path;e.collectionGroup!==null?(n.parent=cf(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=cf(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(l){if(l.length!==0)return A_(Ln.create(l,"and"))}(e.filters);i&&(n.structuredQuery.where=i);const s=function(l){if(l.length!==0)return l.map(u=>function(h){return{field:Oi(h.field),direction:CP(h.dir)}}(u))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(l,u){return l.wt||Ic(u)?u:{value:u}}(t,e.limit);var a;return o!==null&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt={before:(a=e.startAt).inclusive,values:a.position}),e.endAt&&(n.structuredQuery.endAt=function(l){return{before:!l.inclusive,values:l.position}}(e.endAt)),n}function kP(t){let e=vP(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Se(r===1);const h=n.from[0];h.allDescendants?i=h.collectionId:e=e.child(h.collectionId)}let s=[];n.where&&(s=function(h){const d=R_(h);return d instanceof Ln&&t_(d)?d.getFilters():[d]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(h=>function(d){return new Io(Li(d.field),function(c){switch(c){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(d.direction))}(h)));let a=null;n.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,Ic(d)?null:d}(n.limit));let l=null;n.startAt&&(l=function(h){const d=!!h.before,c=h.values||[];return new Du(c,d)}(n.startAt));let u=null;return n.endAt&&(u=function(h){const d=!h.before,c=h.values||[];return new Du(c,d)}(n.endAt)),qN(e,i,o,s,a,"F",l,u)}function IP(t,e){const n=function(r,i){switch(i){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Y()}}(0,e.purpose);return n==null?null:{"goog-listen-tags":n}}function R_(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=Li(e.unaryFilter.field);return qe.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=Li(e.unaryFilter.field);return qe.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Li(e.unaryFilter.field);return qe.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Li(e.unaryFilter.field);return qe.create(s,"!=",{nullValue:"NULL_VALUE"});default:return Y()}}(t):t.fieldFilter!==void 0?function(e){return qe.create(Li(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Y()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return Ln.create(e.compositeFilter.filters.map(n=>R_(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return Y()}}(e.compositeFilter.op))}(t):Y()}function CP(t){return fP[t]}function RP(t){return pP[t]}function AP(t){return mP[t]}function Oi(t){return{fieldPath:t.canonicalString()}}function Li(t){return yt.fromServerFormat(t.fieldPath)}function A_(t){return t instanceof qe?function(e){if(e.op==="=="){if(qy(e.value))return{unaryFilter:{field:Oi(e.field),op:"IS_NAN"}};if(Wy(e.value))return{unaryFilter:{field:Oi(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(qy(e.value))return{unaryFilter:{field:Oi(e.field),op:"IS_NOT_NAN"}};if(Wy(e.value))return{unaryFilter:{field:Oi(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Oi(e.field),op:RP(e.op),value:e.value}}}(t):t instanceof Ln?function(e){const n=e.getFilters().map(r=>A_(r));return n.length===1?n[0]:{compositeFilter:{op:AP(e.op),filters:n}}}(t):Y()}function xP(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function x_(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class DP{constructor(e,n,r,i){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(e.key)&&rP(s,e,r[i])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=Co(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=Co(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=E_();return this.mutations.forEach(i=>{const s=e.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=n.has(i.key)?null:a;const l=p_(o,a);l!==null&&r.set(i.key,l),o.isValidDocument()||o.convertToNoDocument(te.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),le())}isEqual(e){return this.batchId===e.batchId&&vs(this.mutations,e.mutations,(n,r)=>Zy(n,r))&&vs(this.baseMutations,e.baseMutations,(n,r)=>Zy(n,r))}}class tm{constructor(e,n,r,i){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=i}static from(e,n,r){Se(e.mutations.length===r.length);let i=uP;const s=e.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new tm(e,n,r,i)}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class NP{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{constructor(e,n,r,i,s=te.min(),o=te.min(),a=St.EMPTY_BYTE_STRING){this.target=e,this.targetId=n,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a}withSequenceNumber(e){return new li(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,n){return new li(this.target,this.targetId,this.purpose,this.sequenceNumber,n,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new li(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class PP{constructor(e){this.ie=e}}function OP(t){const e=kP({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?af(e,e.limit,"L"):e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class LP{constructor(){this.Je=new bP}addToCollectionParentIndex(e,n){return this.Je.add(n),A.resolve()}getCollectionParents(e,n){return A.resolve(this.Je.getEntries(n))}addFieldIndex(e,n){return A.resolve()}deleteFieldIndex(e,n){return A.resolve()}getDocumentsMatchingTarget(e,n){return A.resolve(null)}getIndexType(e,n){return A.resolve(0)}getFieldIndexes(e,n){return A.resolve([])}getNextCollectionGroupToUpdate(e){return A.resolve(null)}getMinOffset(e,n){return A.resolve(Or.min())}getMinOffsetFromCollectionGroup(e,n){return A.resolve(Or.min())}updateCollectionGroup(e,n,r){return A.resolve()}updateIndexEntries(e,n){return A.resolve()}}class bP{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n]||new Qe(Oe.comparator),s=!i.has(r);return this.index[n]=i.add(r),s}has(e){const n=e.lastSegment(),r=e.popLast(),i=this.index[n];return i&&i.has(r)}getEntries(e){return(this.index[e]||new Qe(Oe.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e){this.bn=e}next(){return this.bn+=2,this.bn}static Pn(){return new Ss(0)}static vn(){return new Ss(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class MP{constructor(){this.changes=new Ls(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,gt.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?A.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $P{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class UP{constructor(e,n,r,i){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=i}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(i=>(r=i,this.remoteDocumentCache.getEntry(e,n))).next(i=>(r!==null&&Co(r.mutation,i,Bt.empty(),Ge.now()),i))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,le()).next(()=>r))}getLocalViewOfDocuments(e,n,r=le()){const i=ni();return this.populateOverlays(e,i,n).next(()=>this.computeViews(e,n,i,r).next(s=>{let o=co();return s.forEach((a,l)=>{o=o.insert(a,l.overlayedDocument)}),o}))}getOverlayedDocuments(e,n){const r=ni();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,le()))}populateOverlays(e,n,r){const i=[];return r.forEach(s=>{n.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(e,i).next(s=>{s.forEach((o,a)=>{n.set(o,a)})})}computeViews(e,n,r,i){let s=er();const o=Ro(),a=Ro();return n.forEach((l,u)=>{const h=r.get(u.key);i.has(u.key)&&(h===void 0||h.mutation instanceof Br)?s=s.insert(u.key,u):h!==void 0?(o.set(u.key,h.mutation.getFieldMask()),Co(h.mutation,u,h.mutation.getFieldMask(),Ge.now())):o.set(u.key,Bt.empty())}),this.recalculateAndSaveOverlays(e,s).next(l=>(l.forEach((u,h)=>o.set(u,h)),n.forEach((u,h)=>{var d;return a.set(u,new $P(h,(d=o.get(u))!==null&&d!==void 0?d:null))}),a))}recalculateAndSaveOverlays(e,n){const r=Ro();let i=new Xe((o,a)=>o-a),s=le();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(o=>{for(const a of o)a.keys().forEach(l=>{const u=n.get(l);if(u===null)return;let h=r.get(l)||Bt.empty();h=a.applyToLocalView(u,h),r.set(l,h);const d=(i.get(a.batchId)||le()).add(l);i=i.insert(a.batchId,d)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const l=a.getNext(),u=l.key,h=l.value,d=E_();h.forEach(c=>{if(!s.has(c)){const f=p_(n.get(c),r.get(c));f!==null&&d.set(c,f),s=s.add(c)}}),o.push(this.documentOverlayCache.saveOverlays(e,u,d))}return A.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(i){return H.isDocumentKey(i.path)&&i.collectionGroup===null&&i.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):QN(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,i-s.size):A.resolve(ni());let a=-1,l=s;return o.next(u=>A.forEach(u,(h,d)=>(a<d.largestBatchId&&(a=d.largestBatchId),s.get(h)?A.resolve():this.remoteDocumentCache.getEntry(e,h).next(c=>{l=l.insert(h,c)}))).next(()=>this.populateOverlays(e,u,s)).next(()=>this.computeViews(e,l,u,le())).next(h=>({batchId:a,changes:w_(h)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new H(n)).next(r=>{let i=co();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const i=n.collectionGroup;let s=co();return this.indexManager.getCollectionParents(e,i).next(o=>A.forEach(o,a=>{const l=function(u,h){return new Cc(h,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt)}(n,a.child(i));return this.getDocumentsMatchingCollectionQuery(e,l,r).next(u=>{u.forEach((h,d)=>{s=s.insert(h,d)})})}).next(()=>s))}getDocumentsMatchingCollectionQuery(e,n,r){let i;return this.remoteDocumentCache.getAllFromCollection(e,n.path,r).next(s=>(i=s,this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId))).next(s=>{s.forEach((a,l)=>{const u=l.getKey();i.get(u)===null&&(i=i.insert(u,gt.newInvalidDocument(u)))});let o=co();return i.forEach((a,l)=>{const u=s.get(a);u!==void 0&&Co(u.mutation,l,Bt.empty(),Ge.now()),Zp(n,l)&&(o=o.insert(a,l))}),o})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class FP{constructor(e){this.yt=e,this.Zn=new Map,this.ts=new Map}getBundleMetadata(e,n){return A.resolve(this.Zn.get(n))}saveBundleMetadata(e,n){var r;return this.Zn.set(n.id,{id:(r=n).id,version:r.version,createTime:Pn(r.createTime)}),A.resolve()}getNamedQuery(e,n){return A.resolve(this.ts.get(n))}saveNamedQuery(e,n){return this.ts.set(n.name,function(r){return{name:r.name,query:OP(r.bundledQuery),readTime:Pn(r.readTime)}}(n)),A.resolve()}}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class VP{constructor(){this.overlays=new Xe(H.comparator),this.es=new Map}getOverlay(e,n){return A.resolve(this.overlays.get(n))}getOverlays(e,n){const r=ni();return A.forEach(n,i=>this.getOverlay(e,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((i,s)=>{this.oe(e,n,s)}),A.resolve()}removeOverlaysForBatchId(e,n,r){const i=this.es.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.es.delete(r)),A.resolve()}getOverlaysForCollection(e,n,r){const i=ni(),s=n.length+1,o=new H(n.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const l=a.getNext().value,u=l.getKey();if(!n.isPrefixOf(u.path))break;u.path.length===s&&l.largestBatchId>r&&i.set(l.getKey(),l)}return A.resolve(i)}getOverlaysForCollectionGroup(e,n,r,i){let s=new Xe((u,h)=>u-h);const o=this.overlays.getIterator();for(;o.hasNext();){const u=o.getNext().value;if(u.getKey().getCollectionGroup()===n&&u.largestBatchId>r){let h=s.get(u.largestBatchId);h===null&&(h=ni(),s=s.insert(u.largestBatchId,h)),h.set(u.getKey(),u)}}const a=ni(),l=s.getIterator();for(;l.hasNext()&&(l.getNext().value.forEach((u,h)=>a.set(u,h)),!(a.size()>=i)););return A.resolve(a)}oe(e,n,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.es.get(i.largestBatchId).delete(r.key);this.es.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new NP(n,r));let s=this.es.get(n);s===void 0&&(s=le(),this.es.set(n,s)),this.es.set(n,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nm{constructor(){this.ns=new Qe(Je.ss),this.rs=new Qe(Je.os)}isEmpty(){return this.ns.isEmpty()}addReference(e,n){const r=new Je(e,n);this.ns=this.ns.add(r),this.rs=this.rs.add(r)}us(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.cs(new Je(e,n))}hs(e,n){e.forEach(r=>this.removeReference(r,n))}ls(e){const n=new H(new Oe([])),r=new Je(n,e),i=new Je(n,e+1),s=[];return this.rs.forEachInRange([r,i],o=>{this.cs(o),s.push(o.key)}),s}fs(){this.ns.forEach(e=>this.cs(e))}cs(e){this.ns=this.ns.delete(e),this.rs=this.rs.delete(e)}ds(e){const n=new H(new Oe([])),r=new Je(n,e),i=new Je(n,e+1);let s=le();return this.rs.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(e){const n=new Je(e,0),r=this.ns.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class Je{constructor(e,n){this.key=e,this._s=n}static ss(e,n){return H.comparator(e.key,n.key)||ge(e._s,n._s)}static os(e,n){return ge(e._s,n._s)||H.comparator(e.key,n.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class BP{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.ws=1,this.gs=new Qe(Je.ss)}checkEmpty(e){return A.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,i){const s=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new DP(s,n,r,i);this.mutationQueue.push(o);for(const a of i)this.gs=this.gs.add(new Je(a.key,s)),this.indexManager.addToCollectionParentIndex(e,a.key.path.popLast());return A.resolve(o)}lookupMutationBatch(e,n){return A.resolve(this.ys(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,i=this.ps(r),s=i<0?0:i;return A.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return A.resolve(this.mutationQueue.length===0?-1:this.ws-1)}getAllMutationBatches(e){return A.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new Je(n,0),i=new Je(n,Number.POSITIVE_INFINITY),s=[];return this.gs.forEachInRange([r,i],o=>{const a=this.ys(o._s);s.push(a)}),A.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new Qe(ge);return n.forEach(i=>{const s=new Je(i,0),o=new Je(i,Number.POSITIVE_INFINITY);this.gs.forEachInRange([s,o],a=>{r=r.add(a._s)})}),A.resolve(this.Is(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,i=r.length+1;let s=r;H.isDocumentKey(s)||(s=s.child(""));const o=new Je(new H(s),0);let a=new Qe(ge);return this.gs.forEachWhile(l=>{const u=l.key.path;return!!r.isPrefixOf(u)&&(u.length===i&&(a=a.add(l._s)),!0)},o),A.resolve(this.Is(a))}Is(e){const n=[];return e.forEach(r=>{const i=this.ys(r);i!==null&&n.push(i)}),n}removeMutationBatch(e,n){Se(this.Ts(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.gs;return A.forEach(n.mutations,i=>{const s=new Je(i.key,n.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)}).next(()=>{this.gs=r})}An(e){}containsKey(e,n){const r=new Je(n,0),i=this.gs.firstAfterOrEqual(r);return A.resolve(n.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,A.resolve()}Ts(e,n){return this.ps(e)}ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}ys(e){const n=this.ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jP{constructor(e){this.Es=e,this.docs=new Xe(H.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,i=this.docs.get(r),s=i?i.size:0,o=this.Es(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return A.resolve(r?r.document.mutableCopy():gt.newInvalidDocument(n))}getEntries(e,n){let r=er();return n.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():gt.newInvalidDocument(i))}),A.resolve(r)}getAllFromCollection(e,n,r){let i=er();const s=new H(n.child("")),o=this.docs.getIteratorFrom(s);for(;o.hasNext();){const{key:a,value:{document:l}}=o.getNext();if(!n.isPrefixOf(a.path))break;a.path.length>n.length+1||xN(AN(l),r)<=0||(i=i.insert(l.key,l.mutableCopy()))}return A.resolve(i)}getAllFromCollectionGroup(e,n,r,i){Y()}As(e,n){return A.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new zP(this)}getSize(e){return A.resolve(this.size)}}class zP extends MP{constructor(e){super(),this.Yn=e}applyChanges(e){const n=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?n.push(this.Yn.addEntry(e,i)):this.Yn.removeEntry(r)}),A.waitFor(n)}getFromCache(e,n){return this.Yn.getEntry(e,n)}getAllFromCache(e,n){return this.Yn.getEntries(e,n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class HP{constructor(e){this.persistence=e,this.Rs=new Ls(n=>Xp(n),Yp),this.lastRemoteSnapshotVersion=te.min(),this.highestTargetId=0,this.bs=0,this.Ps=new nm,this.targetCount=0,this.vs=Ss.Pn()}forEachTarget(e,n){return this.Rs.forEach((r,i)=>n(i)),A.resolve()}getLastRemoteSnapshotVersion(e){return A.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return A.resolve(this.bs)}allocateTargetId(e){return this.highestTargetId=this.vs.next(),A.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.bs&&(this.bs=n),A.resolve()}Dn(e){this.Rs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.vs=new Ss(n),this.highestTargetId=n),e.sequenceNumber>this.bs&&(this.bs=e.sequenceNumber)}addTargetData(e,n){return this.Dn(n),this.targetCount+=1,A.resolve()}updateTargetData(e,n){return this.Dn(n),A.resolve()}removeTargetData(e,n){return this.Rs.delete(n.target),this.Ps.ls(n.targetId),this.targetCount-=1,A.resolve()}removeTargets(e,n,r){let i=0;const s=[];return this.Rs.forEach((o,a)=>{a.sequenceNumber<=n&&r.get(a.targetId)===null&&(this.Rs.delete(o),s.push(this.removeMatchingKeysForTargetId(e,a.targetId)),i++)}),A.waitFor(s).next(()=>i)}getTargetCount(e){return A.resolve(this.targetCount)}getTargetData(e,n){const r=this.Rs.get(n)||null;return A.resolve(r)}addMatchingKeys(e,n,r){return this.Ps.us(n,r),A.resolve()}removeMatchingKeys(e,n,r){this.Ps.hs(n,r);const i=this.persistence.referenceDelegate,s=[];return i&&n.forEach(o=>{s.push(i.markPotentiallyOrphaned(e,o))}),A.waitFor(s)}removeMatchingKeysForTargetId(e,n){return this.Ps.ls(n),A.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ps.ds(n);return A.resolve(r)}containsKey(e,n){return A.resolve(this.Ps.containsKey(n))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class WP{constructor(e,n){this.Vs={},this.overlays={},this.Ss=new Gp(0),this.Ds=!1,this.Ds=!0,this.referenceDelegate=e(this),this.Cs=new HP(this),this.indexManager=new LP,this.remoteDocumentCache=function(r){return new jP(r)}(r=>this.referenceDelegate.xs(r)),this.yt=new PP(n),this.Ns=new FP(this.yt)}start(){return Promise.resolve()}shutdown(){return this.Ds=!1,Promise.resolve()}get started(){return this.Ds}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new VP,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Vs[e.toKey()];return r||(r=new BP(n,this.referenceDelegate),this.Vs[e.toKey()]=r),r}getTargetCache(){return this.Cs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ns}runTransaction(e,n,r){j("MemoryPersistence","Starting transaction:",e);const i=new qP(this.Ss.next());return this.referenceDelegate.ks(),r(i).next(s=>this.referenceDelegate.Os(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Ms(e,n){return A.or(Object.values(this.Vs).map(r=>()=>r.containsKey(e,n)))}}class qP extends NN{constructor(e){super(),this.currentSequenceNumber=e}}class rm{constructor(e){this.persistence=e,this.Fs=new nm,this.$s=null}static Bs(e){return new rm(e)}get Ls(){if(this.$s)return this.$s;throw Y()}addReference(e,n,r){return this.Fs.addReference(r,n),this.Ls.delete(r.toString()),A.resolve()}removeReference(e,n,r){return this.Fs.removeReference(r,n),this.Ls.add(r.toString()),A.resolve()}markPotentiallyOrphaned(e,n){return this.Ls.add(n.toString()),A.resolve()}removeTarget(e,n){this.Fs.ls(n.targetId).forEach(i=>this.Ls.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(i=>{i.forEach(s=>this.Ls.add(s.toString()))}).next(()=>r.removeTargetData(e,n))}ks(){this.$s=new Set}Os(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return A.forEach(this.Ls,r=>{const i=H.fromPath(r);return this.qs(e,i).next(s=>{s||n.removeEntry(i,te.min())})}).next(()=>(this.$s=null,n.apply(e)))}updateLimboDocument(e,n){return this.qs(e,n).next(r=>{r?this.Ls.delete(n.toString()):this.Ls.add(n.toString())})}xs(e){return 0}qs(e,n){return A.or([()=>A.resolve(this.Fs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ms(e,n)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class im{constructor(e,n,r,i){this.targetId=e,this.fromCache=n,this.Si=r,this.Di=i}static Ci(e,n){let r=le(),i=le();for(const s of n.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new im(e,n.fromCache,r,i)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class KP{constructor(){this.xi=!1}initialize(e,n){this.Ni=e,this.indexManager=n,this.xi=!0}getDocumentsMatchingQuery(e,n,r,i){return this.ki(e,n).next(s=>s||this.Oi(e,n,i,r)).next(s=>s||this.Mi(e,n))}ki(e,n){if(Yy(n))return A.resolve(null);let r=Zn(n);return this.indexManager.getIndexType(e,r).next(i=>i===0?null:(n.limit!==null&&i===1&&(n=af(n,null,"F"),r=Zn(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(s=>{const o=le(...s);return this.Ni.getDocuments(e,o).next(a=>this.indexManager.getMinOffset(e,r).next(l=>{const u=this.Fi(n,a);return this.$i(n,u,o,l.readTime)?this.ki(e,af(n,null,"F")):this.Bi(e,u,n,l)}))})))}Oi(e,n,r,i){return Yy(n)||i.isEqual(te.min())?this.Mi(e,n):this.Ni.getDocuments(e,r).next(s=>{const o=this.Fi(n,s);return this.$i(n,o,r,i)?this.Mi(e,n):(jy()<=me.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),lf(n)),this.Bi(e,o,n,RN(i,-1)))})}Fi(e,n){let r=new Qe(a_(e));return n.forEach((i,s)=>{Zp(e,s)&&(r=r.add(s))}),r}$i(e,n,r,i){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const s=e.limitType==="F"?n.last():n.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Mi(e,n){return jy()<=me.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",lf(n)),this.Ni.getDocumentsMatchingQuery(e,n,Or.min())}Bi(e,n,r,i){return this.Ni.getDocumentsMatchingQuery(e,r,i).next(s=>(n.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class GP{constructor(e,n,r,i){this.persistence=e,this.Li=n,this.yt=i,this.qi=new Xe(ge),this.Ui=new Ls(s=>Xp(s),Yp),this.Ki=new Map,this.Gi=e.getRemoteDocumentCache(),this.Cs=e.getTargetCache(),this.Ns=e.getBundleCache(),this.Qi(r)}Qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new UP(this.Gi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Gi.setIndexManager(this.indexManager),this.Li.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.qi))}}function QP(t,e,n,r){return new GP(t,e,n,r)}async function D_(t,e){const n=re(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let i;return n.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,n.Qi(e),n.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let l=le();for(const u of i){o.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}for(const u of s){a.push(u.batchId);for(const h of u.mutations)l=l.add(h.key)}return n.localDocuments.getDocuments(r,l).next(u=>({ji:u,removedBatchIds:o,addedBatchIds:a}))})})}function XP(t,e){const n=re(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=e.batch.keys(),s=n.Gi.newChangeBuffer({trackRemovals:!0});return function(o,a,l,u){const h=l.batch,d=h.keys();let c=A.resolve();return d.forEach(f=>{c=c.next(()=>u.getEntry(a,f)).next(g=>{const E=l.docVersions.get(f);Se(E!==null),g.version.compareTo(E)<0&&(h.applyToRemoteDocument(g,l),g.isValidDocument()&&(g.setReadTime(l.commitVersion),u.addEntry(g)))})}),c.next(()=>o.mutationQueue.removeMutationBatch(a,h))}(n,r,e,s).next(()=>s.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,i,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(o){let a=le();for(let l=0;l<o.mutationResults.length;++l)o.mutationResults[l].transformResults.length>0&&(a=a.add(o.batch.mutations[l].key));return a}(e))).next(()=>n.localDocuments.getDocuments(r,i))})}function N_(t){const e=re(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Cs.getLastRemoteSnapshotVersion(n))}function YP(t,e){const n=re(t),r=e.snapshotVersion;let i=n.qi;return n.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=n.Gi.newChangeBuffer({trackRemovals:!0});i=n.qi;const a=[];e.targetChanges.forEach((h,d)=>{const c=i.get(d);if(!c)return;a.push(n.Cs.removeMatchingKeys(s,h.removedDocuments,d).next(()=>n.Cs.addMatchingKeys(s,h.addedDocuments,d)));let f=c.withSequenceNumber(s.currentSequenceNumber);e.targetMismatches.has(d)?f=f.withResumeToken(St.EMPTY_BYTE_STRING,te.min()).withLastLimboFreeSnapshotVersion(te.min()):h.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(h.resumeToken,r)),i=i.insert(d,f),function(g,E,C){return g.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-g.snapshotVersion.toMicroseconds()>=3e8?!0:C.addedDocuments.size+C.modifiedDocuments.size+C.removedDocuments.size>0}(c,f,h)&&a.push(n.Cs.updateTargetData(s,f))});let l=er(),u=le();if(e.documentUpdates.forEach(h=>{e.resolvedLimboDocuments.has(h)&&a.push(n.persistence.referenceDelegate.updateLimboDocument(s,h))}),a.push(JP(s,o,e.documentUpdates).next(h=>{l=h.Wi,u=h.zi})),!r.isEqual(te.min())){const h=n.Cs.getLastRemoteSnapshotVersion(s).next(d=>n.Cs.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(h)}return A.waitFor(a).next(()=>o.apply(s)).next(()=>n.localDocuments.getLocalViewOfDocuments(s,l,u)).next(()=>l)}).then(s=>(n.qi=i,s))}function JP(t,e,n){let r=le(),i=le();return n.forEach(s=>r=r.add(s)),e.getEntries(t,r).next(s=>{let o=er();return n.forEach((a,l)=>{const u=s.get(a);l.isFoundDocument()!==u.isFoundDocument()&&(i=i.add(a)),l.isNoDocument()&&l.version.isEqual(te.min())?(e.removeEntry(a,l.readTime),o=o.insert(a,l)):!u.isValidDocument()||l.version.compareTo(u.version)>0||l.version.compareTo(u.version)===0&&u.hasPendingWrites?(e.addEntry(l),o=o.insert(a,l)):j("LocalStore","Ignoring outdated watch update for ",a,". Current version:",u.version," Watch version:",l.version)}),{Wi:o,zi:i}})}function ZP(t,e){const n=re(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}function eO(t,e){const n=re(t);return n.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return n.Cs.getTargetData(r,e).next(s=>s?(i=s,A.resolve(i)):n.Cs.allocateTargetId(r).next(o=>(i=new li(e,o,0,r.currentSequenceNumber),n.Cs.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=n.qi.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.qi=n.qi.insert(r.targetId,r),n.Ui.set(e,r.targetId)),r})}async function df(t,e,n){const r=re(t),i=r.qi.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Fa(o))throw o;j("LocalStore",`Failed to update sequence numbers for target ${e}: ${o}`)}r.qi=r.qi.remove(e),r.Ui.delete(i.target)}function ov(t,e,n){const r=re(t);let i=te.min(),s=le();return r.persistence.runTransaction("Execute query","readonly",o=>function(a,l,u){const h=re(a),d=h.Ui.get(u);return d!==void 0?A.resolve(h.qi.get(d)):h.Cs.getTargetData(l,u)}(r,o,Zn(e)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.Cs.getMatchingKeysForTargetId(o,a.targetId).next(l=>{s=l})}).next(()=>r.Li.getDocumentsMatchingQuery(o,e,n?i:te.min(),n?s:le())).next(a=>(tO(r,XN(e),a),{documents:a,Hi:s})))}function tO(t,e,n){let r=t.Ki.get(e)||te.min();n.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),t.Ki.set(e,r)}class av{constructor(){this.activeTargetIds=__()}er(e){this.activeTargetIds=this.activeTargetIds.add(e)}nr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}tr(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class nO{constructor(){this.Lr=new av,this.qr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Lr.er(e),this.qr[e]||"not-current"}updateQueryState(e,n,r){this.qr[e]=n}removeLocalQueryTarget(e){this.Lr.nr(e)}isLocalQueryTarget(e){return this.Lr.activeTargetIds.has(e)}clearQueryState(e){delete this.qr[e]}getAllActiveQueryTargets(){return this.Lr.activeTargetIds}isActiveQueryTarget(e){return this.Lr.activeTargetIds.has(e)}start(){return this.Lr=new av,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rO{Ur(e){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lv{constructor(){this.Kr=()=>this.Gr(),this.Qr=()=>this.jr(),this.Wr=[],this.zr()}Ur(e){this.Wr.push(e)}shutdown(){window.removeEventListener("online",this.Kr),window.removeEventListener("offline",this.Qr)}zr(){window.addEventListener("online",this.Kr),window.addEventListener("offline",this.Qr)}Gr(){j("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Wr)e(0)}jr(){j("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Wr)e(1)}static C(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const iO={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sO{constructor(e){this.Hr=e.Hr,this.Jr=e.Jr}Yr(e){this.Xr=e}Zr(e){this.eo=e}onMessage(e){this.no=e}close(){this.Jr()}send(e){this.Hr(e)}so(){this.Xr()}io(e){this.eo(e)}ro(e){this.no(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oO extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.oo=n+"://"+e.host,this.uo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get co(){return!1}ao(e,n,r,i,s){const o=this.ho(e,n);j("RestConnection","Sending: ",o,r);const a={};return this.lo(a,i,s),this.fo(e,o,a,r).then(l=>(j("RestConnection","Received: ",l),l),l=>{throw tf("RestConnection",`${e} failed with error: `,l,"url: ",o,"request:",r),l})}_o(e,n,r,i,s,o){return this.ao(e,n,r,i,s)}lo(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Os,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((i,s)=>e[s]=i),r&&r.headers.forEach((i,s)=>e[s]=i)}ho(e,n){const r=iO[e];return`${this.oo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}fo(e,n,r,i){return new Promise((s,o)=>{const a=new yN;a.setWithCredentials(!0),a.listenOnce(pN.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case xh.NO_ERROR:const u=a.getResponseJson();j("Connection","XHR received:",JSON.stringify(u)),s(u);break;case xh.TIMEOUT:j("Connection",'RPC "'+e+'" timed out'),o(new G(D.DEADLINE_EXCEEDED,"Request time out"));break;case xh.HTTP_ERROR:const h=a.getStatus();if(j("Connection",'RPC "'+e+'" failed with status:',h,"response text:",a.getResponseText()),h>0){let d=a.getResponseJson();Array.isArray(d)&&(d=d[0]);const c=d==null?void 0:d.error;if(c&&c.status&&c.message){const f=function(g){const E=g.toLowerCase().replace(/_/g,"-");return Object.values(D).indexOf(E)>=0?E:D.UNKNOWN}(c.status);o(new G(f,c.message))}else o(new G(D.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new G(D.UNAVAILABLE,"Connection failed."));break;default:Y()}}finally{j("Connection",'RPC "'+e+'" completed.')}});const l=JSON.stringify(i);a.send(n,"POST",l,r,15)})}wo(e,n,r){const i=[this.oo,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=dN(),o=fN(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new gN({})),this.lo(a.initMessageHeaders,n,r),a.encodeInitMessageHeaders=!0;const l=i.join("");j("Connection","Creating WebChannel: "+l,a);const u=s.createWebChannel(l,a);let h=!1,d=!1;const c=new sO({Hr:g=>{d?j("Connection","Not sending because WebChannel is closed:",g):(h||(j("Connection","Opening WebChannel transport."),u.open(),h=!0),j("Connection","WebChannel sending:",g),u.send(g))},Jr:()=>u.close()}),f=(g,E,C)=>{g.listen(E,m=>{try{C(m)}catch(p){setTimeout(()=>{throw p},0)}})};return f(u,yl.EventType.OPEN,()=>{d||j("Connection","WebChannel transport opened.")}),f(u,yl.EventType.CLOSE,()=>{d||(d=!0,j("Connection","WebChannel transport closed"),c.io())}),f(u,yl.EventType.ERROR,g=>{d||(d=!0,tf("Connection","WebChannel transport errored:",g),c.io(new G(D.UNAVAILABLE,"The operation could not be completed")))}),f(u,yl.EventType.MESSAGE,g=>{var E;if(!d){const C=g.data[0];Se(!!C);const m=C,p=m.error||((E=m[0])===null||E===void 0?void 0:E.error);if(p){j("Connection","WebChannel received error:",p);const y=p.status;let S=function(O){const L=Ue[O];if(L!==void 0)return y_(L)}(y),x=p.message;S===void 0&&(S=D.INTERNAL,x="Unknown error status: "+y+" with message "+p.message),d=!0,c.io(new G(S,x)),u.close()}else j("Connection","WebChannel received:",C),c.ro(C)}}),f(o,mN.STAT_EVENT,g=>{g.stat===Vy.PROXY?j("Connection","Detected buffering proxy"):g.stat===Vy.NOPROXY&&j("Connection","Detected no buffering proxy")}),setTimeout(()=>{c.so()},0),c}}function Nh(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(t){return new gP(t,!0)}class P_{constructor(e,n,r=1e3,i=1.5,s=6e4){this.Hs=e,this.timerId=n,this.mo=r,this.yo=i,this.po=s,this.Io=0,this.To=null,this.Eo=Date.now(),this.reset()}reset(){this.Io=0}Ao(){this.Io=this.po}Ro(e){this.cancel();const n=Math.floor(this.Io+this.bo()),r=Math.max(0,Date.now()-this.Eo),i=Math.max(0,n-r);i>0&&j("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Io} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.To=this.Hs.enqueueAfterDelay(this.timerId,i,()=>(this.Eo=Date.now(),e())),this.Io*=this.yo,this.Io<this.mo&&(this.Io=this.mo),this.Io>this.po&&(this.Io=this.po)}Po(){this.To!==null&&(this.To.skipDelay(),this.To=null)}cancel(){this.To!==null&&(this.To.cancel(),this.To=null)}bo(){return(Math.random()-.5)*this.Io}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(e,n,r,i,s,o,a,l){this.Hs=e,this.vo=r,this.Vo=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=l,this.state=0,this.So=0,this.Do=null,this.Co=null,this.stream=null,this.xo=new P_(e,n)}No(){return this.state===1||this.state===5||this.ko()}ko(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Oo()}async stop(){this.No()&&await this.close(0)}Mo(){this.state=0,this.xo.reset()}Fo(){this.ko()&&this.Do===null&&(this.Do=this.Hs.enqueueAfterDelay(this.vo,6e4,()=>this.$o()))}Bo(e){this.Lo(),this.stream.send(e)}async $o(){if(this.ko())return this.close(0)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}qo(){this.Co&&(this.Co.cancel(),this.Co=null)}async close(e,n){this.Lo(),this.qo(),this.xo.cancel(),this.So++,e!==4?this.xo.reset():n&&n.code===D.RESOURCE_EXHAUSTED?(Jn(n.toString()),Jn("Using maximum backoff delay to prevent overloading the backend."),this.xo.Ao()):n&&n.code===D.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Uo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(n)}Uo(){}auth(){this.state=1;const e=this.Ko(this.So),n=this.So;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.So===n&&this.Go(r,i)},r=>{e(()=>{const i=new G(D.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Qo(i)})})}Go(e,n){const r=this.Ko(this.So);this.stream=this.jo(e,n),this.stream.Yr(()=>{r(()=>(this.state=2,this.Co=this.Hs.enqueueAfterDelay(this.Vo,1e4,()=>(this.ko()&&(this.state=3),Promise.resolve())),this.listener.Yr()))}),this.stream.Zr(i=>{r(()=>this.Qo(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Oo(){this.state=5,this.xo.Ro(async()=>{this.state=0,this.start()})}Qo(e){return j("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Ko(e){return n=>{this.Hs.enqueueAndForget(()=>this.So===e?n():(j("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class aO extends O_{constructor(e,n,r,i,s,o){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",n,r,i,o),this.yt=s}jo(e,n){return this.connection.wo("Listen",e,n)}onMessage(e){this.xo.reset();const n=wP(this.yt,e),r=function(i){if(!("targetChange"in i))return te.min();const s=i.targetChange;return s.targetIds&&s.targetIds.length?te.min():s.readTime?Pn(s.readTime):te.min()}(e);return this.listener.Wo(n,r)}zo(e){const n={};n.database=hf(this.yt),n.addTarget=function(i,s){let o;const a=s.target;return o=of(a)?{documents:SP(i,a)}:{query:TP(i,a)},o.targetId=s.targetId,s.resumeToken.approximateByteSize()>0?o.resumeToken=k_(i,s.resumeToken):s.snapshotVersion.compareTo(te.min())>0&&(o.readTime=Ou(i,s.snapshotVersion.toTimestamp())),o}(this.yt,e);const r=IP(this.yt,e);r&&(n.labels=r),this.Bo(n)}Ho(e){const n={};n.database=hf(this.yt),n.removeTarget=e,this.Bo(n)}}class lO extends O_{constructor(e,n,r,i,s,o){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,i,o),this.yt=s,this.Jo=!1}get Yo(){return this.Jo}start(){this.Jo=!1,this.lastStreamToken=void 0,super.start()}Uo(){this.Jo&&this.Xo([])}jo(e,n){return this.connection.wo("Write",e,n)}onMessage(e){if(Se(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Jo){this.xo.reset();const n=_P(e.writeResults,e.commitTime),r=Pn(e.commitTime);return this.listener.Zo(r,n)}return Se(!e.writeResults||e.writeResults.length===0),this.Jo=!0,this.listener.tu()}eu(){const e={};e.database=hf(this.yt),this.Bo(e)}Xo(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>EP(this.yt,r))};this.Bo(n)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uO extends class{}{constructor(e,n,r,i){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.yt=i,this.nu=!1}su(){if(this.nu)throw new G(D.FAILED_PRECONDITION,"The client has already been terminated.")}ao(e,n,r){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.ao(e,n,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new G(D.UNKNOWN,i.toString())})}_o(e,n,r,i){return this.su(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection._o(e,n,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===D.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new G(D.UNKNOWN,s.toString())})}terminate(){this.nu=!0}}class cO{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.iu=0,this.ru=null,this.ou=!0}uu(){this.iu===0&&(this.cu("Unknown"),this.ru=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.ru=null,this.au("Backend didn't respond within 10 seconds."),this.cu("Offline"),Promise.resolve())))}hu(e){this.state==="Online"?this.cu("Unknown"):(this.iu++,this.iu>=1&&(this.lu(),this.au(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.cu("Offline")))}set(e){this.lu(),this.iu=0,e==="Online"&&(this.ou=!1),this.cu(e)}cu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}au(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ou?(Jn(n),this.ou=!1):j("OnlineStateTracker",n)}lu(){this.ru!==null&&(this.ru.cancel(),this.ru=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hO{constructor(e,n,r,i,s){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.fu=[],this.du=new Map,this._u=new Set,this.wu=[],this.mu=s,this.mu.Ur(o=>{r.enqueueAndForget(async()=>{Ri(this)&&(j("RemoteStore","Restarting streams for network reachability change."),await async function(a){const l=re(a);l._u.add(4),await ja(l),l.gu.set("Unknown"),l._u.delete(4),await Pc(l)}(this))})}),this.gu=new cO(r,i)}}async function Pc(t){if(Ri(t))for(const e of t.wu)await e(!0)}async function ja(t){for(const e of t.wu)await e(!1)}function L_(t,e){const n=re(t);n.du.has(e.targetId)||(n.du.set(e.targetId,e),am(n)?om(n):bs(n).ko()&&sm(n,e))}function b_(t,e){const n=re(t),r=bs(n);n.du.delete(e),r.ko()&&M_(n,e),n.du.size===0&&(r.ko()?r.Fo():Ri(n)&&n.gu.set("Unknown"))}function sm(t,e){t.yu.Ot(e.targetId),bs(t).zo(e)}function M_(t,e){t.yu.Ot(e),bs(t).Ho(e)}function om(t){t.yu=new dP({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),ne:e=>t.du.get(e)||null}),bs(t).start(),t.gu.uu()}function am(t){return Ri(t)&&!bs(t).No()&&t.du.size>0}function Ri(t){return re(t)._u.size===0}function $_(t){t.yu=void 0}async function dO(t){t.du.forEach((e,n)=>{sm(t,e)})}async function fO(t,e){$_(t),am(t)?(t.gu.hu(e),om(t)):t.gu.set("Unknown")}async function pO(t,e,n){if(t.gu.set("Online"),e instanceof T_&&e.state===2&&e.cause)try{await async function(r,i){const s=i.cause;for(const o of i.targetIds)r.du.has(o)&&(await r.remoteSyncer.rejectListen(o,s),r.du.delete(o),r.yu.removeTarget(o))}(t,e)}catch(r){j("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),r),await Lu(t,r)}else if(e instanceof Vl?t.yu.Kt(e):e instanceof S_?t.yu.Jt(e):t.yu.jt(e),!n.isEqual(te.min()))try{const r=await N_(t.localStore);n.compareTo(r)>=0&&await function(i,s){const o=i.yu.Zt(s);return o.targetChanges.forEach((a,l)=>{if(a.resumeToken.approximateByteSize()>0){const u=i.du.get(l);u&&i.du.set(l,u.withResumeToken(a.resumeToken,s))}}),o.targetMismatches.forEach(a=>{const l=i.du.get(a);if(!l)return;i.du.set(a,l.withResumeToken(St.EMPTY_BYTE_STRING,l.snapshotVersion)),M_(i,a);const u=new li(l.target,a,1,l.sequenceNumber);sm(i,u)}),i.remoteSyncer.applyRemoteEvent(o)}(t,n)}catch(r){j("RemoteStore","Failed to raise snapshot:",r),await Lu(t,r)}}async function Lu(t,e,n){if(!Fa(e))throw e;t._u.add(1),await ja(t),t.gu.set("Offline"),n||(n=()=>N_(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{j("RemoteStore","Retrying IndexedDB access"),await n(),t._u.delete(1),await Pc(t)})}function U_(t,e){return e().catch(n=>Lu(t,n,e))}async function Oc(t){const e=re(t),n=br(e);let r=e.fu.length>0?e.fu[e.fu.length-1].batchId:-1;for(;mO(e);)try{const i=await ZP(e.localStore,r);if(i===null){e.fu.length===0&&n.Fo();break}r=i.batchId,gO(e,i)}catch(i){await Lu(e,i)}F_(e)&&V_(e)}function mO(t){return Ri(t)&&t.fu.length<10}function gO(t,e){t.fu.push(e);const n=br(t);n.ko()&&n.Yo&&n.Xo(e.mutations)}function F_(t){return Ri(t)&&!br(t).No()&&t.fu.length>0}function V_(t){br(t).start()}async function yO(t){br(t).eu()}async function vO(t){const e=br(t);for(const n of t.fu)e.Xo(n.mutations)}async function wO(t,e,n){const r=t.fu.shift(),i=tm.from(r,e,n);await U_(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await Oc(t)}async function EO(t,e){e&&br(t).Yo&&await async function(n,r){if(i=r.code,aP(i)&&i!==D.ABORTED){const s=n.fu.shift();br(n).Mo(),await U_(n,()=>n.remoteSyncer.rejectFailedWrite(s.batchId,r)),await Oc(n)}var i}(t,e),F_(t)&&V_(t)}async function uv(t,e){const n=re(t);n.asyncQueue.verifyOperationInProgress(),j("RemoteStore","RemoteStore received new credentials");const r=Ri(n);n._u.add(3),await ja(n),r&&n.gu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n._u.delete(3),await Pc(n)}async function _O(t,e){const n=re(t);e?(n._u.delete(2),await Pc(n)):e||(n._u.add(2),await ja(n),n.gu.set("Unknown"))}function bs(t){return t.pu||(t.pu=function(e,n,r){const i=re(e);return i.su(),new aO(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(t.datastore,t.asyncQueue,{Yr:dO.bind(null,t),Zr:fO.bind(null,t),Wo:pO.bind(null,t)}),t.wu.push(async e=>{e?(t.pu.Mo(),am(t)?om(t):t.gu.set("Unknown")):(await t.pu.stop(),$_(t))})),t.pu}function br(t){return t.Iu||(t.Iu=function(e,n,r){const i=re(e);return i.su(),new lO(n,i.connection,i.authCredentials,i.appCheckCredentials,i.yt,r)}(t.datastore,t.asyncQueue,{Yr:yO.bind(null,t),Zr:EO.bind(null,t),tu:vO.bind(null,t),Zo:wO.bind(null,t)}),t.wu.push(async e=>{e?(t.Iu.Mo(),await Oc(t)):(await t.Iu.stop(),t.fu.length>0&&(j("RemoteStore",`Stopping write stream with ${t.fu.length} pending writes`),t.fu=[]))})),t.Iu}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lm{constructor(e,n,r,i,s){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new Ar,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}static createAndSchedule(e,n,r,i,s){const o=Date.now()+r,a=new lm(e,n,o,i,s);return a.start(r),a}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new G(D.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function um(t,e){if(Jn("AsyncQueue",`${e}: ${t}`),Fa(t))return new G(D.UNAVAILABLE,`${e}: ${t}`);throw t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class as{constructor(e){this.comparator=e?(n,r)=>e(n,r)||H.comparator(n.key,r.key):(n,r)=>H.comparator(n.key,r.key),this.keyedMap=co(),this.sortedSet=new Xe(this.comparator)}static emptySet(e){return new as(e.comparator)}has(e){return this.keyedMap.get(e)!=null}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const n=this.keyedMap.get(e);return n?this.sortedSet.indexOf(n):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((n,r)=>(e(n),!1))}add(e){const n=this.delete(e.key);return n.copy(n.keyedMap.insert(e.key,e),n.sortedSet.insert(e,null))}delete(e){const n=this.get(e);return n?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(n)):this}isEqual(e){if(!(e instanceof as)||this.size!==e.size)return!1;const n=this.sortedSet.getIterator(),r=e.sortedSet.getIterator();for(;n.hasNext();){const i=n.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const e=[];return this.forEach(n=>{e.push(n.toString())}),e.length===0?"DocumentSet ()":`DocumentSet (
  `+e.join(`  
`)+`
)`}copy(e,n){const r=new as;return r.comparator=this.comparator,r.keyedMap=e,r.sortedSet=n,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cv{constructor(){this.Tu=new Xe(H.comparator)}track(e){const n=e.doc.key,r=this.Tu.get(n);r?e.type!==0&&r.type===3?this.Tu=this.Tu.insert(n,e):e.type===3&&r.type!==1?this.Tu=this.Tu.insert(n,{type:r.type,doc:e.doc}):e.type===2&&r.type===2?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):e.type===2&&r.type===0?this.Tu=this.Tu.insert(n,{type:0,doc:e.doc}):e.type===1&&r.type===0?this.Tu=this.Tu.remove(n):e.type===1&&r.type===2?this.Tu=this.Tu.insert(n,{type:1,doc:r.doc}):e.type===0&&r.type===1?this.Tu=this.Tu.insert(n,{type:2,doc:e.doc}):Y():this.Tu=this.Tu.insert(n,e)}Eu(){const e=[];return this.Tu.inorderTraversal((n,r)=>{e.push(r)}),e}}class Ts{constructor(e,n,r,i,s,o,a,l,u){this.query=e,this.docs=n,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=l,this.hasCachedResults=u}static fromInitialDocuments(e,n,r,i,s){const o=[];return n.forEach(a=>{o.push({type:0,doc:a})}),new Ts(e,n,as.emptySet(n),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Rc(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const n=this.docChanges,r=e.docChanges;if(n.length!==r.length)return!1;for(let i=0;i<n.length;i++)if(n[i].type!==r[i].type||!n[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class SO{constructor(){this.Au=void 0,this.listeners=[]}}class TO{constructor(){this.queries=new Ls(e=>o_(e),Rc),this.onlineState="Unknown",this.Ru=new Set}}async function kO(t,e){const n=re(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new SO),i)try{s.Au=await n.onListen(r)}catch(o){const a=um(o,`Initialization of query '${lf(e.query)}' failed`);return void e.onError(a)}n.queries.set(r,s),s.listeners.push(e),e.bu(n.onlineState),s.Au&&e.Pu(s.Au)&&cm(n)}async function IO(t,e){const n=re(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const o=s.listeners.indexOf(e);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function CO(t,e){const n=re(t);let r=!1;for(const i of e){const s=i.query,o=n.queries.get(s);if(o){for(const a of o.listeners)a.Pu(i)&&(r=!0);o.Au=i}}r&&cm(n)}function RO(t,e,n){const r=re(t),i=r.queries.get(e);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(e)}function cm(t){t.Ru.forEach(e=>{e.next()})}class AO{constructor(e,n,r){this.query=e,this.vu=n,this.Vu=!1,this.Su=null,this.onlineState="Unknown",this.options=r||{}}Pu(e){if(!this.options.includeMetadataChanges){const r=[];for(const i of e.docChanges)i.type!==3&&r.push(i);e=new Ts(e.query,e.docs,e.oldDocs,r,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let n=!1;return this.Vu?this.Du(e)&&(this.vu.next(e),n=!0):this.Cu(e,this.onlineState)&&(this.xu(e),n=!0),this.Su=e,n}onError(e){this.vu.error(e)}bu(e){this.onlineState=e;let n=!1;return this.Su&&!this.Vu&&this.Cu(this.Su,e)&&(this.xu(this.Su),n=!0),n}Cu(e,n){if(!e.fromCache)return!0;const r=n!=="Offline";return(!this.options.Nu||!r)&&(!e.docs.isEmpty()||e.hasCachedResults||n==="Offline")}Du(e){if(e.docChanges.length>0)return!0;const n=this.Su&&this.Su.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!n)&&this.options.includeMetadataChanges===!0}xu(e){e=Ts.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Vu=!0,this.vu.next(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e){this.key=e}}class j_{constructor(e){this.key=e}}class xO{constructor(e,n){this.query=e,this.qu=n,this.Uu=null,this.hasCachedResults=!1,this.current=!1,this.Ku=le(),this.mutatedKeys=le(),this.Gu=a_(e),this.Qu=new as(this.Gu)}get ju(){return this.qu}Wu(e,n){const r=n?n.zu:new cv,i=n?n.Qu:this.Qu;let s=n?n.mutatedKeys:this.mutatedKeys,o=i,a=!1;const l=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,u=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal((h,d)=>{const c=i.get(h),f=Zp(this.query,d)?d:null,g=!!c&&this.mutatedKeys.has(c.key),E=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let C=!1;c&&f?c.data.isEqual(f.data)?g!==E&&(r.track({type:3,doc:f}),C=!0):this.Hu(c,f)||(r.track({type:2,doc:f}),C=!0,(l&&this.Gu(f,l)>0||u&&this.Gu(f,u)<0)&&(a=!0)):!c&&f?(r.track({type:0,doc:f}),C=!0):c&&!f&&(r.track({type:1,doc:c}),C=!0,(l||u)&&(a=!0)),C&&(f?(o=o.add(f),s=E?s.add(h):s.delete(h)):(o=o.delete(h),s=s.delete(h)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const h=this.query.limitType==="F"?o.last():o.first();o=o.delete(h.key),s=s.delete(h.key),r.track({type:1,doc:h})}return{Qu:o,zu:r,$i:a,mutatedKeys:s}}Hu(e,n){return e.hasLocalMutations&&n.hasCommittedMutations&&!n.hasLocalMutations}applyChanges(e,n,r){const i=this.Qu;this.Qu=e.Qu,this.mutatedKeys=e.mutatedKeys;const s=e.zu.Eu();s.sort((u,h)=>function(d,c){const f=g=>{switch(g){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Y()}};return f(d)-f(c)}(u.type,h.type)||this.Gu(u.doc,h.doc)),this.Ju(r);const o=n?this.Yu():[],a=this.Ku.size===0&&this.current?1:0,l=a!==this.Uu;return this.Uu=a,s.length!==0||l?{snapshot:new Ts(this.query,e.Qu,i,s,e.mutatedKeys,a===0,l,!1,!!r&&r.resumeToken.approximateByteSize()>0),Xu:o}:{Xu:o}}bu(e){return this.current&&e==="Offline"?(this.current=!1,this.applyChanges({Qu:this.Qu,zu:new cv,mutatedKeys:this.mutatedKeys,$i:!1},!1)):{Xu:[]}}Zu(e){return!this.qu.has(e)&&!!this.Qu.has(e)&&!this.Qu.get(e).hasLocalMutations}Ju(e){e&&(e.addedDocuments.forEach(n=>this.qu=this.qu.add(n)),e.modifiedDocuments.forEach(n=>{}),e.removedDocuments.forEach(n=>this.qu=this.qu.delete(n)),this.current=e.current)}Yu(){if(!this.current)return[];const e=this.Ku;this.Ku=le(),this.Qu.forEach(r=>{this.Zu(r.key)&&(this.Ku=this.Ku.add(r.key))});const n=[];return e.forEach(r=>{this.Ku.has(r)||n.push(new j_(r))}),this.Ku.forEach(r=>{e.has(r)||n.push(new B_(r))}),n}tc(e){this.qu=e.Hi,this.Ku=le();const n=this.Wu(e.documents);return this.applyChanges(n,!0)}ec(){return Ts.fromInitialDocuments(this.query,this.Qu,this.mutatedKeys,this.Uu===0,this.hasCachedResults)}}class DO{constructor(e,n,r){this.query=e,this.targetId=n,this.view=r}}class NO{constructor(e){this.key=e,this.nc=!1}}class PO{constructor(e,n,r,i,s,o){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.sc={},this.ic=new Ls(a=>o_(a),Rc),this.rc=new Map,this.oc=new Set,this.uc=new Xe(H.comparator),this.cc=new Map,this.ac=new nm,this.hc={},this.lc=new Map,this.fc=Ss.vn(),this.onlineState="Unknown",this.dc=void 0}get isPrimaryClient(){return this.dc===!0}}async function OO(t,e){const n=zO(t);let r,i;const s=n.ic.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.ec();else{const o=await eO(n.localStore,Zn(e));n.isPrimaryClient&&L_(n.remoteStore,o);const a=n.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await LO(n,e,r,a==="current",o.resumeToken)}return i}async function LO(t,e,n,r,i){t._c=(d,c,f)=>async function(g,E,C,m){let p=E.view.Wu(C);p.$i&&(p=await ov(g.localStore,E.query,!1).then(({documents:x})=>E.view.Wu(x,p)));const y=m&&m.targetChanges.get(E.targetId),S=E.view.applyChanges(p,g.isPrimaryClient,y);return dv(g,E.targetId,S.Xu),S.snapshot}(t,d,c,f);const s=await ov(t.localStore,e,!0),o=new xO(e,s.Hi),a=o.Wu(s.documents),l=Ba.createSynthesizedTargetChangeForCurrentChange(n,r&&t.onlineState!=="Offline",i),u=o.applyChanges(a,t.isPrimaryClient,l);dv(t,n,u.Xu);const h=new DO(e,n,o);return t.ic.set(e,h),t.rc.has(n)?t.rc.get(n).push(e):t.rc.set(n,[e]),u.snapshot}async function bO(t,e){const n=re(t),r=n.ic.get(e),i=n.rc.get(r.targetId);if(i.length>1)return n.rc.set(r.targetId,i.filter(s=>!Rc(s,e))),void n.ic.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await df(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),b_(n.remoteStore,r.targetId),ff(n,r.targetId)}).catch(Ua)):(ff(n,r.targetId),await df(n.localStore,r.targetId,!0))}async function MO(t,e,n){const r=HO(t);try{const i=await function(s,o){const a=re(s),l=Ge.now(),u=o.reduce((c,f)=>c.add(f.key),le());let h,d;return a.persistence.runTransaction("Locally write mutations","readwrite",c=>{let f=er(),g=le();return a.Gi.getEntries(c,u).next(E=>{f=E,f.forEach((C,m)=>{m.isValidDocument()||(g=g.add(C))})}).next(()=>a.localDocuments.getOverlayedDocuments(c,f)).next(E=>{h=E;const C=[];for(const m of o){const p=iP(m,h.get(m.key).overlayedDocument);p!=null&&C.push(new Br(m.key,p,s_(p.value.mapValue),Nn.exists(!0)))}return a.mutationQueue.addMutationBatch(c,l,C,o)}).next(E=>{d=E;const C=E.applyToLocalDocumentSet(h,g);return a.documentOverlayCache.saveOverlays(c,E.batchId,C)})}).then(()=>({batchId:d.batchId,changes:w_(h)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(i.batchId),function(s,o,a){let l=s.hc[s.currentUser.toKey()];l||(l=new Xe(ge)),l=l.insert(o,a),s.hc[s.currentUser.toKey()]=l}(r,i.batchId,n),await za(r,i.changes),await Oc(r.remoteStore)}catch(i){const s=um(i,"Failed to persist write");n.reject(s)}}async function z_(t,e){const n=re(t);try{const r=await YP(n.localStore,e);e.targetChanges.forEach((i,s)=>{const o=n.cc.get(s);o&&(Se(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.nc=!0:i.modifiedDocuments.size>0?Se(o.nc):i.removedDocuments.size>0&&(Se(o.nc),o.nc=!1))}),await za(n,r,e)}catch(r){await Ua(r)}}function hv(t,e,n){const r=re(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const i=[];r.ic.forEach((s,o)=>{const a=o.view.bu(e);a.snapshot&&i.push(a.snapshot)}),function(s,o){const a=re(s);a.onlineState=o;let l=!1;a.queries.forEach((u,h)=>{for(const d of h.listeners)d.bu(o)&&(l=!0)}),l&&cm(a)}(r.eventManager,e),i.length&&r.sc.Wo(i),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function $O(t,e,n){const r=re(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.cc.get(e),s=i&&i.key;if(s){let o=new Xe(H.comparator);o=o.insert(s,gt.newNoDocument(s,te.min()));const a=le().add(s),l=new Dc(te.min(),new Map,new Qe(ge),o,a);await z_(r,l),r.uc=r.uc.remove(s),r.cc.delete(e),hm(r)}else await df(r.localStore,e,!1).then(()=>ff(r,e,n)).catch(Ua)}async function UO(t,e){const n=re(t),r=e.batch.batchId;try{const i=await XP(n.localStore,e);W_(n,r,null),H_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await za(n,i)}catch(i){await Ua(i)}}async function FO(t,e,n){const r=re(t);try{const i=await function(s,o){const a=re(s);return a.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let u;return a.mutationQueue.lookupMutationBatch(l,o).next(h=>(Se(h!==null),u=h.keys(),a.mutationQueue.removeMutationBatch(l,h))).next(()=>a.mutationQueue.performConsistencyCheck(l)).next(()=>a.documentOverlayCache.removeOverlaysForBatchId(l,u,o)).next(()=>a.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,u)).next(()=>a.localDocuments.getDocuments(l,u))})}(r.localStore,e);W_(r,e,n),H_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await za(r,i)}catch(i){await Ua(i)}}function H_(t,e){(t.lc.get(e)||[]).forEach(n=>{n.resolve()}),t.lc.delete(e)}function W_(t,e,n){const r=re(t);let i=r.hc[r.currentUser.toKey()];if(i){const s=i.get(e);s&&(n?s.reject(n):s.resolve(),i=i.remove(e)),r.hc[r.currentUser.toKey()]=i}}function ff(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.rc.get(e))t.ic.delete(r),n&&t.sc.wc(r,n);t.rc.delete(e),t.isPrimaryClient&&t.ac.ls(e).forEach(r=>{t.ac.containsKey(r)||q_(t,r)})}function q_(t,e){t.oc.delete(e.path.canonicalString());const n=t.uc.get(e);n!==null&&(b_(t.remoteStore,n),t.uc=t.uc.remove(e),t.cc.delete(n),hm(t))}function dv(t,e,n){for(const r of n)r instanceof B_?(t.ac.addReference(r.key,e),VO(t,r)):r instanceof j_?(j("SyncEngine","Document no longer in limbo: "+r.key),t.ac.removeReference(r.key,e),t.ac.containsKey(r.key)||q_(t,r.key)):Y()}function VO(t,e){const n=e.key,r=n.path.canonicalString();t.uc.get(n)||t.oc.has(r)||(j("SyncEngine","New document in limbo: "+n),t.oc.add(r),hm(t))}function hm(t){for(;t.oc.size>0&&t.uc.size<t.maxConcurrentLimboResolutions;){const e=t.oc.values().next().value;t.oc.delete(e);const n=new H(Oe.fromString(e)),r=t.fc.next();t.cc.set(r,new NO(n)),t.uc=t.uc.insert(n,r),L_(t.remoteStore,new li(Zn(Jp(n.path)),r,2,Gp.at))}}async function za(t,e,n){const r=re(t),i=[],s=[],o=[];r.ic.isEmpty()||(r.ic.forEach((a,l)=>{o.push(r._c(l,e,n).then(u=>{if((u||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(l.targetId,u!=null&&u.fromCache?"not-current":"current"),u){i.push(u);const h=im.Ci(l.targetId,u);s.push(h)}}))}),await Promise.all(o),r.sc.Wo(i),await async function(a,l){const u=re(a);try{await u.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>A.forEach(l,d=>A.forEach(d.Si,c=>u.persistence.referenceDelegate.addReference(h,d.targetId,c)).next(()=>A.forEach(d.Di,c=>u.persistence.referenceDelegate.removeReference(h,d.targetId,c)))))}catch(h){if(!Fa(h))throw h;j("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const c=u.qi.get(d),f=c.snapshotVersion,g=c.withLastLimboFreeSnapshotVersion(f);u.qi=u.qi.insert(d,g)}}}(r.localStore,s))}async function BO(t,e){const n=re(t);if(!n.currentUser.isEqual(e)){j("SyncEngine","User change. New user:",e.toKey());const r=await D_(n.localStore,e);n.currentUser=e,function(i,s){i.lc.forEach(o=>{o.forEach(a=>{a.reject(new G(D.CANCELLED,s))})}),i.lc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await za(n,r.ji)}}function jO(t,e){const n=re(t),r=n.cc.get(e);if(r&&r.nc)return le().add(r.key);{let i=le();const s=n.rc.get(e);if(!s)return i;for(const o of s){const a=n.ic.get(o);i=i.unionWith(a.view.ju)}return i}}function zO(t){const e=re(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=z_.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=jO.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=$O.bind(null,e),e.sc.Wo=CO.bind(null,e.eventManager),e.sc.wc=RO.bind(null,e.eventManager),e}function HO(t){const e=re(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=UO.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=FO.bind(null,e),e}class WO{constructor(){this.synchronizeTabs=!1}async initialize(e){this.yt=Nc(e.databaseInfo.databaseId),this.sharedClientState=this.gc(e),this.persistence=this.yc(e),await this.persistence.start(),this.localStore=this.Ic(e),this.gcScheduler=this.Tc(e,this.localStore),this.indexBackfillerScheduler=this.Ec(e,this.localStore)}Tc(e,n){return null}Ec(e,n){return null}Ic(e){return QP(this.persistence,new KP,e.initialUser,this.yt)}yc(e){return new WP(rm.Bs,this.yt)}gc(e){return new nO}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class qO{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>hv(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=BO.bind(null,this.syncEngine),await _O(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new TO}createDatastore(e){const n=Nc(e.databaseInfo.databaseId),r=(i=e.databaseInfo,new oO(i));var i;return function(s,o,a,l){return new uO(s,o,a,l)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,i=e.asyncQueue,s=a=>hv(this.syncEngine,a,0),o=lv.C()?new lv:new rO,new hO(n,r,i,s,o);var n,r,i,s,o}createSyncEngine(e,n){return function(r,i,s,o,a,l,u){const h=new PO(r,i,s,o,a,l);return u&&(h.dc=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=re(e);j("RemoteStore","RemoteStore shutting down."),n._u.add(5),await ja(n),n.mu.shutdown(),n.gu.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function KO(t,e,n){if(!n)throw new G(D.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function GO(t,e,n,r){if(e===!0&&r===!0)throw new G(D.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function fv(t){if(!H.isDocumentKey(t))throw new G(D.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function dm(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":Y()}function _i(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new G(D.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=dm(t);throw new G(D.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pv=new Map;class mv{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new G(D.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new G(D.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,GO("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fm{constructor(e,n,r,i){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new mv({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new G(D.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new G(D.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new mv(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new vN;switch(n.type){case"gapi":const r=n.client;return new SN(r,n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new G(D.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=pv.get(e);n&&(j("ComponentProvider","Removing Datastore"),pv.delete(e),n.terminate())}(this),Promise.resolve()}}function QO(t,e,n,r={}){var i;const s=(t=_i(t,fm))._getSettings();if(s.host!=="firestore.googleapis.com"&&s.host!==e&&tf("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},s),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let o,a;if(typeof r.mockUserToken=="string")o=r.mockUserToken,a=pt.MOCK_USER;else{o=c1(r.mockUserToken,(i=t._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new G(D.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");a=new pt(l)}t._authCredentials=new wN(new GE(o,a))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ht{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ca(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Ht(this.firestore,e,this._key)}}class pm{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new pm(this.firestore,e,this._query)}}class ca extends pm{constructor(e,n,r){super(e,n,Jp(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Ht(this.firestore,null,new H(e))}withConverter(e){return new ca(this.firestore,e,this._path)}}function ha(t,e,...n){if(t=He(t),arguments.length===1&&(e=QE.R()),KO("doc","path",e),t instanceof fm){const r=Oe.fromString(e,...n);return fv(r),new Ht(t,null,new H(r))}{if(!(t instanceof Ht||t instanceof ca))throw new G(D.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(Oe.fromString(e,...n));return fv(r),new Ht(t.firestore,t instanceof ca?t.converter:null,new H(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class XO{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Rc(this.observer.next,e)}error(e){this.observer.error?this.Rc(this.observer.error,e):Jn("Uncaught Error in snapshot listener:",e.toString())}bc(){this.muted=!0}Rc(e,n){this.muted||setTimeout(()=>{this.muted||e(n)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class YO{constructor(e,n,r,i){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=i,this.user=pt.UNAUTHENTICATED,this.clientId=QE.R(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{j("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(j("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new G(D.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ar;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=um(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function JO(t,e){t.asyncQueue.verifyOperationInProgress(),j("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async i=>{r.isEqual(i)||(await D_(e.localStore,i),r=i)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function ZO(t,e){t.asyncQueue.verifyOperationInProgress();const n=await eL(t);j("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(i=>uv(e.remoteStore,i)),t.setAppCheckTokenChangeListener((i,s)=>uv(e.remoteStore,s)),t.onlineComponents=e}async function eL(t){return t.offlineComponents||(j("FirestoreClient","Using default OfflineComponentProvider"),await JO(t,new WO)),t.offlineComponents}async function K_(t){return t.onlineComponents||(j("FirestoreClient","Using default OnlineComponentProvider"),await ZO(t,new qO)),t.onlineComponents}function tL(t){return K_(t).then(e=>e.syncEngine)}async function nL(t){const e=await K_(t),n=e.eventManager;return n.onListen=OO.bind(null,e.syncEngine),n.onUnlisten=bO.bind(null,e.syncEngine),n}function rL(t,e,n={}){const r=new Ar;return t.asyncQueue.enqueueAndForget(async()=>function(i,s,o,a,l){const u=new XO({next:d=>{s.enqueueAndForget(()=>IO(i,h));const c=d.docs.has(o);!c&&d.fromCache?l.reject(new G(D.UNAVAILABLE,"Failed to get document because the client is offline.")):c&&d.fromCache&&a&&a.source==="server"?l.reject(new G(D.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new AO(Jp(o.path),u,{includeMetadataChanges:!0,Nu:!0});return kO(i,h)}(await nL(t),t.asyncQueue,e,n,r)),r.promise}class iL{constructor(){this.Bc=Promise.resolve(),this.Lc=[],this.qc=!1,this.Uc=[],this.Kc=null,this.Gc=!1,this.Qc=!1,this.jc=[],this.xo=new P_(this,"async_queue_retry"),this.Wc=()=>{const n=Nh();n&&j("AsyncQueue","Visibility state changed to "+n.visibilityState),this.xo.Po()};const e=Nh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Wc)}get isShuttingDown(){return this.qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.zc(),this.Hc(e)}enterRestrictedMode(e){if(!this.qc){this.qc=!0,this.Qc=e||!1;const n=Nh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Wc)}}enqueue(e){if(this.zc(),this.qc)return new Promise(()=>{});const n=new Ar;return this.Hc(()=>this.qc&&this.Qc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Lc.push(e),this.Jc()))}async Jc(){if(this.Lc.length!==0){try{await this.Lc[0](),this.Lc.shift(),this.xo.reset()}catch(e){if(!Fa(e))throw e;j("AsyncQueue","Operation failed with retryable error: "+e)}this.Lc.length>0&&this.xo.Ro(()=>this.Jc())}}Hc(e){const n=this.Bc.then(()=>(this.Gc=!0,e().catch(r=>{this.Kc=r,this.Gc=!1;const i=function(s){let o=s.message||"";return s.stack&&(o=s.stack.includes(s.message)?s.stack:s.message+`
`+s.stack),o}(r);throw Jn("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.Gc=!1,r))));return this.Bc=n,n}enqueueAfterDelay(e,n,r){this.zc(),this.jc.indexOf(e)>-1&&(n=0);const i=lm.createAndSchedule(this,e,n,r,s=>this.Yc(s));return this.Uc.push(i),i}zc(){this.Kc&&Y()}verifyOperationInProgress(){}async Xc(){let e;do e=this.Bc,await e;while(e!==this.Bc)}Zc(e){for(const n of this.Uc)if(n.timerId===e)return!0;return!1}ta(e){return this.Xc().then(()=>{this.Uc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.Uc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.Xc()})}ea(e){this.jc.push(e)}Yc(e){const n=this.Uc.indexOf(e);this.Uc.splice(n,1)}}class Lc extends fm{constructor(e,n,r,i){super(e,n,r,i),this.type="firestore",this._queue=new iL,this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||Q_(this),this._firestoreClient.terminate()}}function sL(t,e){const n=typeof t=="object"?t:gp(),r=typeof t=="string"?t:e||"(default)",i=oc(n,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=l1("firestore");s&&QO(i,...s)}return i}function G_(t){return t._firestoreClient||Q_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Q_(t){var e;const n=t._freezeSettings(),r=function(i,s,o,a){return new PN(i,s,o,a.host,a.ssl,a.experimentalForceLongPolling,a.experimentalAutoDetectLongPolling,a.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new YO(t._authCredentials,t._appCheckCredentials,t._queue,r)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){this._byteString=e}static fromBase64String(e){try{return new ks(St.fromBase64String(e))}catch(n){throw new G(D.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new ks(St.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new G(D.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new yt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e){this._methodName=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gm{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new G(D.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new G(D.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ge(this._lat,e._lat)||ge(this._long,e._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const oL=/^__.*__$/;class aL{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new Br(e,this.data,this.fieldMask,n,this.fieldTransforms):new Va(e,this.data,n,this.fieldTransforms)}}class X_{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return new Br(e,this.data,this.fieldMask,n,this.fieldTransforms)}}function Y_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Y()}}class ym{constructor(e,n,r,i,s,o){this.settings=e,this.databaseId=n,this.yt=r,this.ignoreUndefinedProperties=i,s===void 0&&this.na(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get sa(){return this.settings.sa}ia(e){return new ym(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.yt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ra(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.ua(e),i}ca(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),i=this.ia({path:r,oa:!1});return i.na(),i}aa(e){return this.ia({path:void 0,oa:!0})}ha(e){return bu(e,this.settings.methodName,this.settings.la||!1,this.path,this.settings.fa)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}na(){if(this.path)for(let e=0;e<this.path.length;e++)this.ua(this.path.get(e))}ua(e){if(e.length===0)throw this.ha("Document fields must not be empty");if(Y_(this.sa)&&oL.test(e))throw this.ha('Document fields cannot begin and end with "__"')}}class lL{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.yt=r||Nc(e)}da(e,n,r,i=!1){return new ym({sa:e,methodName:n,fa:r,path:yt.emptyPath(),oa:!1,la:i},this.databaseId,this.yt,this.ignoreUndefinedProperties)}}function J_(t){const e=t._freezeSettings(),n=Nc(t._databaseId);return new lL(t._databaseId,!!e.ignoreUndefinedProperties,n)}function uL(t,e,n,r,i,s={}){const o=t.da(s.merge||s.mergeFields?2:0,e,n,i);vm("Data must be an object, but it was:",o,r);const a=Z_(r,o);let l,u;if(s.merge)l=new Bt(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const h=[];for(const d of s.mergeFields){const c=pf(e,d,n);if(!o.contains(c))throw new G(D.INVALID_ARGUMENT,`Field '${c}' is specified in your field mask but missing from your input data.`);tS(h,c)||h.push(c)}l=new Bt(h),u=o.fieldTransforms.filter(d=>l.covers(d.field))}else l=null,u=o.fieldTransforms;return new aL(new Ot(a),l,u)}class Mc extends mm{_toFieldTransform(e){if(e.sa!==2)throw e.sa===1?e.ha(`${this._methodName}() can only appear at the top level of your update data`):e.ha(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Mc}}function cL(t,e,n,r){const i=t.da(1,e,n);vm("Data must be an object, but it was:",i,r);const s=[],o=Ot.empty();Ci(r,(l,u)=>{const h=wm(e,l,n);u=He(u);const d=i.ca(h);if(u instanceof Mc)s.push(h);else{const c=$c(u,d);c!=null&&(s.push(h),o.set(h,c))}});const a=new Bt(s);return new X_(o,a,i.fieldTransforms)}function hL(t,e,n,r,i,s){const o=t.da(1,e,n),a=[pf(e,r,n)],l=[i];if(s.length%2!=0)throw new G(D.INVALID_ARGUMENT,`Function ${e}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let c=0;c<s.length;c+=2)a.push(pf(e,s[c])),l.push(s[c+1]);const u=[],h=Ot.empty();for(let c=a.length-1;c>=0;--c)if(!tS(u,a[c])){const f=a[c];let g=l[c];g=He(g);const E=o.ca(f);if(g instanceof Mc)u.push(f);else{const C=$c(g,E);C!=null&&(u.push(f),h.set(f,C))}}const d=new Bt(u);return new X_(h,d,o.fieldTransforms)}function $c(t,e){if(eS(t=He(t)))return vm("Unsupported field value:",e,t),Z_(t,e);if(t instanceof mm)return function(n,r){if(!Y_(r.sa))throw r.ha(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r.ha(`${n._methodName}() is not currently supported inside arrays`);const i=n._toFieldTransform(r);i&&r.fieldTransforms.push(i)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.oa&&e.sa!==4)throw e.ha("Nested arrays are not supported");return function(n,r){const i=[];let s=0;for(const o of n){let a=$c(o,r.aa(s));a==null&&(a={nullValue:"NULL_VALUE"}),i.push(a),s++}return{arrayValue:{values:i}}}(t,e)}return function(n,r){if((n=He(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return JN(r.yt,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const i=Ge.fromDate(n);return{timestampValue:Ou(r.yt,i)}}if(n instanceof Ge){const i=new Ge(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:Ou(r.yt,i)}}if(n instanceof gm)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof ks)return{bytesValue:k_(r.yt,n._byteString)};if(n instanceof Ht){const i=r.databaseId,s=n.firestore._databaseId;if(!s.isEqual(i))throw r.ha(`Document reference is for database ${s.projectId}/${s.database} but should be for database ${i.projectId}/${i.database}`);return{referenceValue:em(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r.ha(`Unsupported field value: ${dm(n)}`)}(t,e)}function Z_(t,e){const n={};return XE(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):Ci(t,(r,i)=>{const s=$c(i,e.ra(r));s!=null&&(n[r]=s)}),{mapValue:{fields:n}}}function eS(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof Ge||t instanceof gm||t instanceof ks||t instanceof Ht||t instanceof mm)}function vm(t,e,n){if(!eS(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=dm(n);throw r==="an object"?e.ha(t+" a custom object"):e.ha(t+" "+r)}}function pf(t,e,n){if((e=He(e))instanceof bc)return e._internalPath;if(typeof e=="string")return wm(t,e);throw bu("Field path arguments must be of type string or ",t,!1,void 0,n)}const dL=new RegExp("[~\\*/\\[\\]]");function wm(t,e,n){if(e.search(dL)>=0)throw bu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new bc(...e.split("."))._internalPath}catch{throw bu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function bu(t,e,n,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new G(D.INVALID_ARGUMENT,a+t+l)}function tS(t,e){return t.some(n=>n.isEqual(e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nS{constructor(e,n,r,i,s){this._firestore=e,this._userDataWriter=n,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Ht(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const e=new fL(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const n=this._document.data.field(rS("DocumentSnapshot.get",e));if(n!==null)return this._userDataWriter.convertValue(n)}}}class fL extends nS{data(){return super.data()}}function rS(t,e){return typeof e=="string"?wm(t,e):e instanceof bc?e._internalPath:e._delegate._internalPath}class pL{convertValue(e,n="none"){switch(Ei(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ve(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,n);case 5:return e.stringValue;case 6:return this.convertBytes(ws(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,n);case 10:return this.convertObject(e.mapValue,n);default:throw Y()}}convertObject(e,n){const r={};return Ci(e.fields,(i,s)=>{r[i]=this.convertValue(s,n)}),r}convertGeoPoint(e){return new gm(Ve(e.latitude),Ve(e.longitude))}convertArray(e,n){return(e.values||[]).map(r=>this.convertValue(r,n))}convertServerTimestamp(e,n){switch(n){case"previous":const r=JE(e);return r==null?null:this.convertValue(r,n);case"estimate":return this.convertTimestamp(oa(e));default:return null}}convertTimestamp(e){const n=Lr(e);return new Ge(n.seconds,n.nanos)}convertDocumentKey(e,n){const r=Oe.fromString(e);Se(x_(r));const i=new sa(r.get(1),r.get(3)),s=new H(r.popFirst(5));return i.isEqual(n)||Jn(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${n.projectId}/${n.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function mL(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gL{constructor(e,n){this.hasPendingWrites=e,this.fromCache=n}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class iS extends nS{constructor(e,n,r,i,s,o){super(e,n,r,i,o),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const n=new yL(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(n,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,n={}){if(this._document){const r=this._document.data.field(rS("DocumentSnapshot.get",e));if(r!==null)return this._userDataWriter.convertValue(r,n.serverTimestamps)}}}class yL extends iS{data(e={}){return super.data(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sS(t){t=_i(t,Ht);const e=_i(t.firestore,Lc);return rL(G_(e),t._key).then(n=>EL(e,t,n))}class vL extends pL{constructor(e){super(),this.firestore=e}convertBytes(e){return new ks(e)}convertReference(e){const n=this.convertDocumentKey(e,this.firestore._databaseId);return new Ht(this.firestore,null,n)}}function gv(t,e,n){t=_i(t,Ht);const r=_i(t.firestore,Lc),i=mL(t.converter,e,n);return oS(r,[uL(J_(r),"setDoc",t._key,i,t.converter!==null,n).toMutation(t._key,Nn.none())])}function wL(t,e,n,...r){t=_i(t,Ht);const i=_i(t.firestore,Lc),s=J_(i);let o;return o=typeof(e=He(e))=="string"||e instanceof bc?hL(s,"updateDoc",t._key,e,n,r):cL(s,"updateDoc",t._key,e),oS(i,[o.toMutation(t._key,Nn.exists(!0))])}function oS(t,e){return function(n,r){const i=new Ar;return n.asyncQueue.enqueueAndForget(async()=>MO(await tL(n),r,i)),i.promise}(G_(t),e)}function EL(t,e,n){const r=n.docs.get(e._key),i=new vL(t);return new iS(t,i,e._key,r,new gL(n.hasPendingWrites,n.fromCache),e.converter)}(function(t,e=!0){(function(n){Os=n})(As),gi(new Pr("firestore",(n,{instanceIdentifier:r,options:i})=>{const s=n.getProvider("app").getImmediate(),o=new Lc(new EN(n.getProvider("auth-internal")),new kN(n.getProvider("app-check-internal")),function(a,l){if(!Object.prototype.hasOwnProperty.apply(a.options,["projectId"]))throw new G(D.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new sa(a.options.projectId,l)}(s,r),s);return i=Object.assign({useFetchStreams:e},i),o._setSettings(i),o},"PUBLIC").setMultipleInstances(!0)),An(By,"3.8.1",t),An(By,"3.8.1","esm2017")})();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const aS="firebasestorage.googleapis.com",lS="storageBucket",_L=2*60*1e3,SL=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends bn{constructor(e,n,r=0){super(Ph(e),`Firebase Storage: ${n} (${Ph(e)})`),this.status_=r,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,be.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Ph(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}function Ph(t){return"storage/"+t}function Em(){const t="An unknown error occurred, please check the error payload for server response.";return new be("unknown",t)}function TL(t){return new be("object-not-found","Object '"+t+"' does not exist.")}function kL(t){return new be("quota-exceeded","Quota for bucket '"+t+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function IL(){const t="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new be("unauthenticated",t)}function CL(){return new be("unauthorized-app","This app does not have permission to access Firebase Storage on this project.")}function RL(t){return new be("unauthorized","User does not have permission to access '"+t+"'.")}function AL(){return new be("retry-limit-exceeded","Max retry time for operation exceeded, please try again.")}function xL(){return new be("canceled","User canceled the upload/download.")}function DL(t){return new be("invalid-url","Invalid URL '"+t+"'.")}function NL(t){return new be("invalid-default-bucket","Invalid default bucket '"+t+"'.")}function PL(){return new be("no-default-bucket","No default bucket found. Did you set the '"+lS+"' property when initializing the app?")}function OL(){return new be("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function LL(){return new be("no-download-url","The given file does not have any download URLs.")}function bL(t){return new be("unsupported-environment",`${t} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function mf(t){return new be("invalid-argument",t)}function uS(){return new be("app-deleted","The Firebase app was deleted.")}function ML(t){return new be("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function Ao(t,e){return new be("invalid-format","String does not match format '"+t+"': "+e)}function Js(t){throw new be("internal-error","Internal error: "+t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jt{constructor(e,n){this.bucket=e,this.path_=n}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,n){let r;try{r=jt.makeFromUrl(e,n)}catch{return new jt(e,"")}if(r.path==="")return r;throw NL(e)}static makeFromUrl(e,n){let r=null;const i="([A-Za-z0-9.\\-_]+)";function s(S){S.path.charAt(S.path.length-1)==="/"&&(S.path_=S.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+i+o,"i"),l={bucket:1,path:3};function u(S){S.path_=decodeURIComponent(S.path)}const h="v[A-Za-z0-9_]+",d=n.replace(/[.]/g,"\\."),c="(/([^?#]*).*)?$",f=new RegExp(`^https?://${d}/${h}/b/${i}/o${c}`,"i"),g={bucket:1,path:3},E=n===aS?"(?:storage.googleapis.com|storage.cloud.google.com)":n,C="([^?#]*)",m=new RegExp(`^https?://${E}/${i}/${C}`,"i"),y=[{regex:a,indices:l,postModify:s},{regex:f,indices:g,postModify:u},{regex:m,indices:{bucket:1,path:2},postModify:u}];for(let S=0;S<y.length;S++){const x=y[S],O=x.regex.exec(e);if(O){const L=O[x.indices.bucket];let M=O[x.indices.path];M||(M=""),r=new jt(L,M),x.postModify(r);break}}if(r==null)throw DL(e);return r}}class $L{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function UL(t,e,n){let r=1,i=null,s=null,o=!1,a=0;function l(){return a===2}let u=!1;function h(...C){u||(u=!0,e.apply(null,C))}function d(C){i=setTimeout(()=>{i=null,t(f,l())},C)}function c(){s&&clearTimeout(s)}function f(C,...m){if(u){c();return}if(C){c(),h.call(null,C,...m);return}if(l()||o){c(),h.call(null,C,...m);return}r<64&&(r*=2);let y;a===1?(a=2,y=0):y=(r+Math.random())*1e3,d(y)}let g=!1;function E(C){g||(g=!0,c(),!u&&(i!==null?(C||(a=2),clearTimeout(i),d(0)):C||(a=1)))}return d(0),s=setTimeout(()=>{o=!0,E(!0)},n),E}function FL(t){t(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function VL(t){return t!==void 0}function BL(t){return typeof t=="object"&&!Array.isArray(t)}function _m(t){return typeof t=="string"||t instanceof String}function yv(t){return Sm()&&t instanceof Blob}function Sm(){return typeof Blob<"u"&&!BC()}function vv(t,e,n,r){if(r<e)throw mf(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw mf(`Invalid value for '${t}'. Expected ${n} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Tm(t,e,n){let r=e;return n==null&&(r=`https://${e}`),`${n}://${r}/v0${t}`}function cS(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){const i=e(r)+"="+e(t[r]);n=n+i+"&"}return n=n.slice(0,-1),n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ui;(function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"})(ui||(ui={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jL(t,e){const n=t>=500&&t<600,i=[408,429].indexOf(t)!==-1,s=e.indexOf(t)!==-1;return n||i||s}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zL{constructor(e,n,r,i,s,o,a,l,u,h,d,c=!0){this.url_=e,this.method_=n,this.headers_=r,this.body_=i,this.successCodes_=s,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=u,this.progressCallback_=h,this.connectionFactory_=d,this.retry=c,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,g)=>{this.resolve_=f,this.reject_=g,this.start_()})}start_(){const e=(r,i)=>{if(i){r(!1,new El(!1,null,!0));return}const s=this.connectionFactory_();this.pendingConnection_=s;const o=a=>{const l=a.loaded,u=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,u)};this.progressCallback_!==null&&s.addUploadProgressListener(o),s.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&s.removeUploadProgressListener(o),this.pendingConnection_=null;const a=s.getErrorCode()===ui.NO_ERROR,l=s.getStatus();if(!a||jL(l,this.additionalRetryCodes_)&&this.retry){const h=s.getErrorCode()===ui.ABORT;r(!1,new El(!1,null,h));return}const u=this.successCodes_.indexOf(l)!==-1;r(!0,new El(u,s))})},n=(r,i)=>{const s=this.resolve_,o=this.reject_,a=i.connection;if(i.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());VL(l)?s(l):s()}catch(l){o(l)}else if(a!==null){const l=Em();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(i.canceled){const l=this.appDelete_?uS():xL();o(l)}else{const l=AL();o(l)}};this.canceled_?n(!1,new El(!1,null,!0)):this.backoffId_=UL(e,n,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&FL(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class El{constructor(e,n,r){this.wasSuccessCode=e,this.connection=n,this.canceled=!!r}}function HL(t,e){e!==null&&e.length>0&&(t.Authorization="Firebase "+e)}function WL(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function qL(t,e){e&&(t["X-Firebase-GMPID"]=e)}function KL(t,e){e!==null&&(t["X-Firebase-AppCheck"]=e)}function GL(t,e,n,r,i,s,o=!0){const a=cS(t.urlParams),l=t.url+a,u=Object.assign({},t.headers);return qL(u,e),HL(u,n),WL(u,s),KL(u,r),new zL(l,t.method,u,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function QL(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function XL(...t){const e=QL();if(e!==void 0){const n=new e;for(let r=0;r<t.length;r++)n.append(t[r]);return n.getBlob()}else{if(Sm())return new Blob(t);throw new be("unsupported-environment","This browser doesn't seem to support creating Blobs")}}function YL(t,e,n){return t.webkitSlice?t.webkitSlice(e,n):t.mozSlice?t.mozSlice(e,n):t.slice?t.slice(e,n):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function JL(t){if(typeof atob>"u")throw bL("base-64");return atob(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Oh{constructor(e,n){this.data=e,this.contentType=n||null}}function ZL(t,e){switch(t){case kn.RAW:return new Oh(hS(e));case kn.BASE64:case kn.BASE64URL:return new Oh(dS(t,e));case kn.DATA_URL:return new Oh(tb(e),nb(e))}throw Em()}function hS(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|r&63);else if((r&64512)===55296)if(!(n<t.length-1&&(t.charCodeAt(n+1)&64512)===56320))e.push(239,191,189);else{const s=r,o=t.charCodeAt(++n);r=65536|(s&1023)<<10|o&1023,e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63)}else(r&64512)===56320?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|r&63)}return new Uint8Array(e)}function eb(t){let e;try{e=decodeURIComponent(t)}catch{throw Ao(kn.DATA_URL,"Malformed data URL.")}return hS(e)}function dS(t,e){switch(t){case kn.BASE64:{const i=e.indexOf("-")!==-1,s=e.indexOf("_")!==-1;if(i||s)throw Ao(t,"Invalid character '"+(i?"-":"_")+"' found: is it base64url encoded?");break}case kn.BASE64URL:{const i=e.indexOf("+")!==-1,s=e.indexOf("/")!==-1;if(i||s)throw Ao(t,"Invalid character '"+(i?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=JL(e)}catch(i){throw i.message.includes("polyfill")?i:Ao(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let i=0;i<n.length;i++)r[i]=n.charCodeAt(i);return r}class fS{constructor(e){this.base64=!1,this.contentType=null;const n=e.match(/^data:([^,]+)?,/);if(n===null)throw Ao(kn.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const r=n[1]||null;r!=null&&(this.base64=rb(r,";base64"),this.contentType=this.base64?r.substring(0,r.length-7):r),this.rest=e.substring(e.indexOf(",")+1)}}function tb(t){const e=new fS(t);return e.base64?dS(kn.BASE64,e.rest):eb(e.rest)}function nb(t){return new fS(t).contentType}function rb(t,e){return t.length>=e.length?t.substring(t.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,n){let r=0,i="";yv(e)?(this.data_=e,r=e.size,i=e.type):e instanceof ArrayBuffer?(n?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),r=this.data_.length):e instanceof Uint8Array&&(n?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),r=e.length),this.size_=r,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,n){if(yv(this.data_)){const r=this.data_,i=YL(r,e,n);return i===null?null:new pr(i)}else{const r=new Uint8Array(this.data_.buffer,e,n-e);return new pr(r,!0)}}static getBlob(...e){if(Sm()){const n=e.map(r=>r instanceof pr?r.data_:r);return new pr(XL.apply(null,n))}else{const n=e.map(o=>_m(o)?ZL(kn.RAW,o).data:o.data_);let r=0;n.forEach(o=>{r+=o.byteLength});const i=new Uint8Array(r);let s=0;return n.forEach(o=>{for(let a=0;a<o.length;a++)i[s++]=o[a]}),new pr(i,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pS(t){let e;try{e=JSON.parse(t)}catch{return null}return BL(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ib(t){if(t.length===0)return null;const e=t.lastIndexOf("/");return e===-1?"":t.slice(0,e)}function sb(t,e){const n=e.split("/").filter(r=>r.length>0).join("/");return t.length===0?n:t+"/"+n}function mS(t){const e=t.lastIndexOf("/",t.length-2);return e===-1?t:t.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ob(t,e){return e}class Tt{constructor(e,n,r,i){this.server=e,this.local=n||e,this.writable=!!r,this.xform=i||ob}}let _l=null;function ab(t){return!_m(t)||t.length<2?t:mS(t)}function gS(){if(_l)return _l;const t=[];t.push(new Tt("bucket")),t.push(new Tt("generation")),t.push(new Tt("metageneration")),t.push(new Tt("name","fullPath",!0));function e(s,o){return ab(o)}const n=new Tt("name");n.xform=e,t.push(n);function r(s,o){return o!==void 0?Number(o):o}const i=new Tt("size");return i.xform=r,t.push(i),t.push(new Tt("timeCreated")),t.push(new Tt("updated")),t.push(new Tt("md5Hash",null,!0)),t.push(new Tt("cacheControl",null,!0)),t.push(new Tt("contentDisposition",null,!0)),t.push(new Tt("contentEncoding",null,!0)),t.push(new Tt("contentLanguage",null,!0)),t.push(new Tt("contentType",null,!0)),t.push(new Tt("metadata","customMetadata",!0)),_l=t,_l}function lb(t,e){function n(){const r=t.bucket,i=t.fullPath,s=new jt(r,i);return e._makeStorageReference(s)}Object.defineProperty(t,"ref",{get:n})}function ub(t,e,n){const r={};r.type="file";const i=n.length;for(let s=0;s<i;s++){const o=n[s];r[o.local]=o.xform(r,e[o.server])}return lb(r,t),r}function yS(t,e,n){const r=pS(e);return r===null?null:ub(t,r,n)}function cb(t,e,n,r){const i=pS(e);if(i===null||!_m(i.downloadTokens))return null;const s=i.downloadTokens;if(s.length===0)return null;const o=encodeURIComponent;return s.split(",").map(u=>{const h=t.bucket,d=t.fullPath,c="/b/"+o(h)+"/o/"+o(d),f=Tm(c,n,r),g=cS({alt:"media",token:u});return f+g})[0]}function hb(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const s=e[i];s.writable&&(n[s.server]=t[s.local])}return JSON.stringify(n)}class vS{constructor(e,n,r,i){this.url=e,this.method=n,this.handler=r,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wS(t){if(!t)throw Em()}function db(t,e){function n(r,i){const s=yS(t,i,e);return wS(s!==null),s}return n}function fb(t,e){function n(r,i){const s=yS(t,i,e);return wS(s!==null),cb(s,i,t.host,t._protocol)}return n}function ES(t){function e(n,r){let i;return n.getStatus()===401?n.getErrorText().includes("Firebase App Check token is invalid")?i=CL():i=IL():n.getStatus()===402?i=kL(t.bucket):n.getStatus()===403?i=RL(t.path):i=r,i.status=n.getStatus(),i.serverResponse=r.serverResponse,i}return e}function pb(t){const e=ES(t);function n(r,i){let s=e(r,i);return r.getStatus()===404&&(s=TL(t.path)),s.serverResponse=i.serverResponse,s}return n}function mb(t,e,n){const r=e.fullServerUrl(),i=Tm(r,t.host,t._protocol),s="GET",o=t.maxOperationRetryTime,a=new vS(i,s,fb(t,n),o);return a.errorHandler=pb(e),a}function gb(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}function yb(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=gb(null,e)),r}function vb(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let y="";for(let S=0;S<2;S++)y=y+Math.random().toString().slice(2);return y}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const u=yb(e,r,i),h=hb(u,n),d="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+h+`\r
--`+l+`\r
Content-Type: `+u.contentType+`\r
\r
`,c=`\r
--`+l+"--",f=pr.getBlob(d,r,c);if(f===null)throw OL();const g={name:u.fullPath},E=Tm(s,t.host,t._protocol),C="POST",m=t.maxUploadRetryTime,p=new vS(E,C,db(t,n),m);return p.urlParams=g,p.headers=o,p.body=f.uploadData(),p.errorHandler=ES(e),p}class wb{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=ui.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=ui.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=ui.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,n,r,i){if(this.sent_)throw Js("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(n,e,!0),i!==void 0)for(const s in i)i.hasOwnProperty(s)&&this.xhr_.setRequestHeader(s,i[s].toString());return r!==void 0?this.xhr_.send(r):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Js("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Js("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Js("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Js("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Eb extends wb{initXhr(){this.xhr_.responseType="text"}}function _S(){return new Eb}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(e,n){this._service=e,n instanceof jt?this._location=n:this._location=jt.makeFromUrl(n,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,n){return new Si(e,n)}get root(){const e=new jt(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return mS(this._location.path)}get storage(){return this._service}get parent(){const e=ib(this._location.path);if(e===null)return null;const n=new jt(this._location.bucket,e);return new Si(this._service,n)}_throwIfRoot(e){if(this._location.path==="")throw ML(e)}}function _b(t,e,n){t._throwIfRoot("uploadBytes");const r=vb(t.storage,t._location,gS(),new pr(e,!0),n);return t.storage.makeRequestWithTokens(r,_S).then(i=>({metadata:i,ref:t}))}function Sb(t){t._throwIfRoot("getDownloadURL");const e=mb(t.storage,t._location,gS());return t.storage.makeRequestWithTokens(e,_S).then(n=>{if(n===null)throw LL();return n})}function Tb(t,e){const n=sb(t._location.path,e),r=new jt(t._location.bucket,n);return new Si(t.storage,r)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kb(t){return/^[A-Za-z]+:\/\//.test(t)}function Ib(t,e){return new Si(t,e)}function SS(t,e){if(t instanceof km){const n=t;if(n._bucket==null)throw PL();const r=new Si(n,n._bucket);return e!=null?SS(r,e):r}else return e!==void 0?Tb(t,e):t}function Cb(t,e){if(e&&kb(e)){if(t instanceof km)return Ib(t,e);throw mf("To use ref(service, url), the first argument must be a Storage instance.")}else return SS(t,e)}function wv(t,e){const n=e==null?void 0:e[lS];return n==null?null:jt.makeFromBucketSpec(n,t)}function Rb(t,e,n,r={}){t.host=`${e}:${n}`,t._protocol="http";const{mockUserToken:i}=r;i&&(t._overrideAuthToken=typeof i=="string"?i:c1(i,t.app.options.projectId))}class km{constructor(e,n,r,i,s){this.app=e,this._authProvider=n,this._appCheckProvider=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host=aS,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=_L,this._maxUploadRetryTime=SL,this._requests=new Set,i!=null?this._bucket=jt.makeFromBucketSpec(i,this._host):this._bucket=wv(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=jt.makeFromBucketSpec(this._url,e):this._bucket=wv(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){vv("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){vv("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const n=await e.getToken();if(n!==null)return n.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new Si(this,e)}_makeRequest(e,n,r,i,s=!0){if(this._deleted)return new $L(uS());{const o=GL(e,this._appId,r,i,n,this._firebaseVersion,s);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,n){const[r,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,n,r,i).getPromise()}}const Ev="@firebase/storage",_v="0.10.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const TS="storage";function Ab(t,e,n){return t=He(t),_b(t,e,n)}function xb(t){return t=He(t),Sb(t)}function kS(t,e){return t=He(t),Cb(t,e)}function Db(t=gp(),e){t=He(t);const r=oc(t,TS).getImmediate({identifier:e}),i=l1("storage");return i&&Nb(r,...i),r}function Nb(t,e,n,r={}){Rb(t,e,n,r)}function Pb(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new km(n,r,i,e,As)}function Ob(){gi(new Pr(TS,Pb,"PUBLIC").setMultipleInstances(!0)),An(Ev,_v,""),An(Ev,_v,"esm2017")}Ob();const Lb={apiKey:"AIzaSyB0-_zacpUv4UgS4nRnV59LJTljLfhP7TE",authDomain:"vite-todo-53d02.firebaseapp.com",projectId:"vite-todo-53d02",storageBucket:"vite-todo-53d02.appspot.com",messagingSenderId:"664005411065",appId:"1:664005411065:web:628c0faecbe5aacb896228",measurementId:"G-KHD5F05BWD"},IS=f1(Lb),da=sL(IS),bb=Db(IS),Mb=kS(bb,"image"),Uc=uD(),$b=async(t,e)=>{if(!e)return"";const n=kS(Mb,t),r=await Ab(n,e);return await xb(r.ref)},Ub=async({name:t,email:e,password:n,url:r},i)=>{try{const s=await HA(Uc,e,n),{uid:o}=s.user;await gv(ha(da,"works",o),{todoList:[],stickyList:[]}),await gv(ha(da,"members",o),{name:t,email:e,password:n,uid:o,url:r}),i({name:t,uid:o,url:r,isSign:!0})}catch(s){console.log(s)}},Fb=async({email:t,password:e})=>{await WA(Uc,t,e)},Vb=()=>QA(Uc),Bb=async t=>(await sS(ha(da,"members",t))).data(),jb=async t=>{const e=await sS(ha(da,"works",t)),{todoList:n}=e.data();return n},Zs=async(t,e)=>{await wL(ha(da,"works",t),{todoList:e})};function CS(){const{member:t,setMember:e}=b.useContext(Ds),n=()=>{Vb(),e({name:"",uid:"",url:"",isSign:!1})};return je("header",{className:"absolute top-0 w-full h-[50px] px-[20px] py-[10px] flex items-center justify-between",children:[z(W1,{isBig:!1}),je("div",{className:"flex items-center",children:[t.url&&z("img",{src:t.url,alt:"avatar",className:"w-[40px] h-[40px] mr-[10px] rounded-full"}),je("div",{className:"font-semibold hidden sm:block",children:[t.name,"的代辦"]}),z(fD,{clickHandler:n})]})]})}function RS(){return z("footer",{className:"w-full absolute bottom-0 text-center bg-gray-100 h-5 leading-5",children:"© 2023 Yang-Min, Hsu"})}var Ha=t=>t.type==="checkbox",Xi=t=>t instanceof Date,Ct=t=>t==null;const AS=t=>typeof t=="object";var nt=t=>!Ct(t)&&!Array.isArray(t)&&AS(t)&&!Xi(t),zb=t=>nt(t)&&t.target?Ha(t.target)?t.target.checked:t.target.value:t,Hb=t=>t.substring(0,t.search(/\.\d+(\.|$)/))||t,Wb=(t,e)=>t.has(Hb(e)),Wa=t=>Array.isArray(t)?t.filter(Boolean):[],Be=t=>t===void 0,V=(t,e,n)=>{if(!e||!nt(t))return n;const r=Wa(e.split(/[,[\].]+?/)).reduce((i,s)=>Ct(i)?i:i[s],t);return Be(r)||r===t?Be(t[e])?n:t[e]:r};const Sv={BLUR:"blur",FOCUS_OUT:"focusout",CHANGE:"change"},pn={onBlur:"onBlur",onChange:"onChange",onSubmit:"onSubmit",onTouched:"onTouched",all:"all"},$n={max:"max",min:"min",maxLength:"maxLength",minLength:"minLength",pattern:"pattern",required:"required",validate:"validate"};fn.createContext(null);var qb=(t,e,n,r=!0)=>{const i={defaultValues:e._defaultValues};for(const s in t)Object.defineProperty(i,s,{get:()=>{const o=s;return e._proxyFormState[o]!==pn.all&&(e._proxyFormState[o]=!r||pn.all),n&&(n[o]=!0),t[o]}});return i},Xt=t=>nt(t)&&!Object.keys(t).length,Kb=(t,e,n)=>{const{name:r,...i}=t;return Xt(i)||Object.keys(i).length>=Object.keys(e).length||Object.keys(i).find(s=>e[s]===(!n||pn.all))},Lh=t=>Array.isArray(t)?t:[t];function Gb(t){const e=fn.useRef(t);e.current=t,fn.useEffect(()=>{const n=!t.disabled&&e.current.subject.subscribe({next:e.current.next});return()=>{n&&n.unsubscribe()}},[t.disabled])}var In=t=>typeof t=="string",Qb=(t,e,n,r,i)=>In(t)?(r&&e.watch.add(t),V(n,t,i)):Array.isArray(t)?t.map(s=>(r&&e.watch.add(s),V(n,s))):(r&&(e.watchAll=!0),n),Xb=t=>{const e=t.constructor&&t.constructor.prototype;return nt(e)&&e.hasOwnProperty("isPrototypeOf")},Im=typeof window<"u"&&typeof window.HTMLElement<"u"&&typeof document<"u";function Kr(t){let e;const n=Array.isArray(t);if(t instanceof Date)e=new Date(t);else if(t instanceof Set)e=new Set(t);else if(!(Im&&(t instanceof Blob||t instanceof FileList))&&(n||nt(t)))if(e=n?[]:{},!Array.isArray(t)&&!Xb(t))e=t;else for(const r in t)e[r]=Kr(t[r]);else return t;return e}var Yb=(t,e,n,r,i)=>e?{...n[t],types:{...n[t]&&n[t].types?n[t].types:{},[r]:i||!0}}:{},Cm=t=>/^\w*$/.test(t),xS=t=>Wa(t.replace(/["|']|\]/g,"").split(/\.|\[/));function Ie(t,e,n){let r=-1;const i=Cm(e)?[e]:xS(e),s=i.length,o=s-1;for(;++r<s;){const a=i[r];let l=n;if(r!==o){const u=t[a];l=nt(u)||Array.isArray(u)?u:isNaN(+i[r+1])?{}:[]}t[a]=l,t=t[a]}return t}const gf=(t,e,n)=>{for(const r of n||Object.keys(t)){const i=V(t,r);if(i){const{_f:s,...o}=i;if(s&&e(s.name)){if(s.ref.focus){s.ref.focus();break}else if(s.refs&&s.refs[0].focus){s.refs[0].focus();break}}else nt(o)&&gf(o,e)}}};var Tv=t=>({isOnSubmit:!t||t===pn.onSubmit,isOnBlur:t===pn.onBlur,isOnChange:t===pn.onChange,isOnAll:t===pn.all,isOnTouch:t===pn.onTouched}),kv=(t,e,n)=>!n&&(e.watchAll||e.watch.has(t)||[...e.watch].some(r=>t.startsWith(r)&&/^\.\w+/.test(t.slice(r.length)))),Jb=(t,e,n)=>{const r=Wa(V(t,n));return Ie(r,"root",e[n]),Ie(t,n,r),t},ls=t=>typeof t=="boolean",Rm=t=>t.type==="file",us=t=>typeof t=="function",Mu=t=>{if(!Im)return!1;const e=t?t.ownerDocument:0;return t instanceof(e&&e.defaultView?e.defaultView.HTMLElement:HTMLElement)},Bl=t=>In(t)||fn.isValidElement(t),Am=t=>t.type==="radio",$u=t=>t instanceof RegExp;const Iv={value:!1,isValid:!1},Cv={value:!0,isValid:!0};var DS=t=>{if(Array.isArray(t)){if(t.length>1){const e=t.filter(n=>n&&n.checked&&!n.disabled).map(n=>n.value);return{value:e,isValid:!!e.length}}return t[0].checked&&!t[0].disabled?t[0].attributes&&!Be(t[0].attributes.value)?Be(t[0].value)||t[0].value===""?Cv:{value:t[0].value,isValid:!0}:Cv:Iv}return Iv};const Rv={isValid:!1,value:null};var NS=t=>Array.isArray(t)?t.reduce((e,n)=>n&&n.checked&&!n.disabled?{isValid:!0,value:n.value}:e,Rv):Rv;function Av(t,e,n="validate"){if(Bl(t)||Array.isArray(t)&&t.every(Bl)||ls(t)&&!t)return{type:n,message:Bl(t)?t:"",ref:e}}var Pi=t=>nt(t)&&!$u(t)?t:{value:t,message:""},xv=async(t,e,n,r,i)=>{const{ref:s,refs:o,required:a,maxLength:l,minLength:u,min:h,max:d,pattern:c,validate:f,name:g,valueAsNumber:E,mount:C,disabled:m}=t._f;if(!C||m)return{};const p=o?o[0]:s,y=q=>{r&&p.reportValidity&&(p.setCustomValidity(ls(q)?"":q||""),p.reportValidity())},S={},x=Am(s),O=Ha(s),L=x||O,M=(E||Rm(s))&&Be(s.value)&&Be(e)||Mu(s)&&s.value===""||e===""||Array.isArray(e)&&!e.length,J=Yb.bind(null,g,n,S),W=(q,ae,de,fe=$n.maxLength,Ye=$n.minLength)=>{const rt=q?ae:de;S[g]={type:q?fe:Ye,message:rt,ref:s,...J(q?fe:Ye,rt)}};if(i?!Array.isArray(e)||!e.length:a&&(!L&&(M||Ct(e))||ls(e)&&!e||O&&!DS(o).isValid||x&&!NS(o).isValid)){const{value:q,message:ae}=Bl(a)?{value:!!a,message:a}:Pi(a);if(q&&(S[g]={type:$n.required,message:ae,ref:p,...J($n.required,ae)},!n))return y(ae),S}if(!M&&(!Ct(h)||!Ct(d))){let q,ae;const de=Pi(d),fe=Pi(h);if(!Ct(e)&&!isNaN(e)){const Ye=s.valueAsNumber||e&&+e;Ct(de.value)||(q=Ye>de.value),Ct(fe.value)||(ae=Ye<fe.value)}else{const Ye=s.valueAsDate||new Date(e),rt=K=>new Date(new Date().toDateString()+" "+K),rn=s.type=="time",P=s.type=="week";In(de.value)&&e&&(q=rn?rt(e)>rt(de.value):P?e>de.value:Ye>new Date(de.value)),In(fe.value)&&e&&(ae=rn?rt(e)<rt(fe.value):P?e<fe.value:Ye<new Date(fe.value))}if((q||ae)&&(W(!!q,de.message,fe.message,$n.max,$n.min),!n))return y(S[g].message),S}if((l||u)&&!M&&(In(e)||i&&Array.isArray(e))){const q=Pi(l),ae=Pi(u),de=!Ct(q.value)&&e.length>q.value,fe=!Ct(ae.value)&&e.length<ae.value;if((de||fe)&&(W(de,q.message,ae.message),!n))return y(S[g].message),S}if(c&&!M&&In(e)){const{value:q,message:ae}=Pi(c);if($u(q)&&!e.match(q)&&(S[g]={type:$n.pattern,message:ae,ref:s,...J($n.pattern,ae)},!n))return y(ae),S}if(f){if(us(f)){const q=await f(e),ae=Av(q,p);if(ae&&(S[g]={...ae,...J($n.validate,ae.message)},!n))return y(ae.message),S}else if(nt(f)){let q={};for(const ae in f){if(!Xt(q)&&!n)break;const de=Av(await f[ae](e),p,ae);de&&(q={...de,...J(ae,de.message)},y(de.message),n&&(S[g]=q))}if(!Xt(q)&&(S[g]={ref:p,...q},!n))return S}}return y(!0),S};function Zb(t,e){const n=e.slice(0,-1).length;let r=0;for(;r<n;)t=Be(t)?r++:t[e[r++]];return t}function eM(t){for(const e in t)if(!Be(t[e]))return!1;return!0}function kt(t,e){const n=Cm(e)?[e]:xS(e),r=n.length==1?t:Zb(t,n),i=n[n.length-1];let s;r&&delete r[i];for(let o=0;o<n.slice(0,-1).length;o++){let a=-1,l;const u=n.slice(0,-(o+1)),h=u.length-1;for(o>0&&(s=t);++a<u.length;){const d=u[a];l=l?l[d]:t[d],h===a&&(nt(l)&&Xt(l)||Array.isArray(l)&&eM(l))&&(s?delete s[d]:delete t[d]),s=l}}return t}function bh(){let t=[];return{get observers(){return t},next:i=>{for(const s of t)s.next(i)},subscribe:i=>(t.push(i),{unsubscribe:()=>{t=t.filter(s=>s!==i)}}),unsubscribe:()=>{t=[]}}}var Uu=t=>Ct(t)||!AS(t);function ri(t,e){if(Uu(t)||Uu(e))return t===e;if(Xi(t)&&Xi(e))return t.getTime()===e.getTime();const n=Object.keys(t),r=Object.keys(e);if(n.length!==r.length)return!1;for(const i of n){const s=t[i];if(!r.includes(i))return!1;if(i!=="ref"){const o=e[i];if(Xi(s)&&Xi(o)||nt(s)&&nt(o)||Array.isArray(s)&&Array.isArray(o)?!ri(s,o):s!==o)return!1}}return!0}var PS=t=>t.type==="select-multiple",tM=t=>Am(t)||Ha(t),Mh=t=>Mu(t)&&t.isConnected,OS=t=>{for(const e in t)if(us(t[e]))return!0;return!1};function Fu(t,e={}){const n=Array.isArray(t);if(nt(t)||n)for(const r in t)Array.isArray(t[r])||nt(t[r])&&!OS(t[r])?(e[r]=Array.isArray(t[r])?[]:{},Fu(t[r],e[r])):Ct(t[r])||(e[r]=!0);return e}function LS(t,e,n){const r=Array.isArray(t);if(nt(t)||r)for(const i in t)Array.isArray(t[i])||nt(t[i])&&!OS(t[i])?Be(e)||Uu(n[i])?n[i]=Array.isArray(t[i])?Fu(t[i],[]):{...Fu(t[i])}:LS(t[i],Ct(e)?{}:e[i],n[i]):ri(t[i],e[i])?delete n[i]:n[i]=!0;return n}var $h=(t,e)=>LS(t,e,Fu(e)),bS=(t,{valueAsNumber:e,valueAsDate:n,setValueAs:r})=>Be(t)?t:e?t===""?NaN:t&&+t:n&&In(t)?new Date(t):r?r(t):t;function Uh(t){const e=t.ref;if(!(t.refs?t.refs.every(n=>n.disabled):e.disabled))return Rm(e)?e.files:Am(e)?NS(t.refs).value:PS(e)?[...e.selectedOptions].map(({value:n})=>n):Ha(e)?DS(t.refs).value:bS(Be(e.value)?t.ref.value:e.value,t)}var nM=(t,e,n,r)=>{const i={};for(const s of t){const o=V(e,s);o&&Ie(i,s,o._f)}return{criteriaMode:n,names:[...t],fields:i,shouldUseNativeValidation:r}},eo=t=>Be(t)?t:$u(t)?t.source:nt(t)?$u(t.value)?t.value.source:t.value:t,rM=t=>t.mount&&(t.required||t.min||t.max||t.maxLength||t.minLength||t.pattern||t.validate);function Dv(t,e,n){const r=V(t,n);if(r||Cm(n))return{error:r,name:n};const i=n.split(".");for(;i.length;){const s=i.join("."),o=V(e,s),a=V(t,s);if(o&&!Array.isArray(o)&&n!==s)return{name:n};if(a&&a.type)return{name:s,error:a};i.pop()}return{name:n}}var iM=(t,e,n,r,i)=>i.isOnAll?!1:!n&&i.isOnTouch?!(e||t):(n?r.isOnBlur:i.isOnBlur)?!t:(n?r.isOnChange:i.isOnChange)?t:!0,sM=(t,e)=>!Wa(V(t,e)).length&&kt(t,e);const oM={mode:pn.onSubmit,reValidateMode:pn.onChange,shouldFocusError:!0};function aM(t={},e){let n={...oM,...t};const r=t.resetOptions&&t.resetOptions.keepDirtyValues;let i={submitCount:0,isDirty:!1,isLoading:!0,isValidating:!1,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,touchedFields:{},dirtyFields:{},errors:{}},s={},o=nt(n.defaultValues)?Kr(n.defaultValues)||{}:{},a=n.shouldUnregister?{}:Kr(o),l={action:!1,mount:!1,watch:!1},u={mount:new Set,unMount:new Set,array:new Set,watch:new Set},h,d=0;const c={isDirty:!1,dirtyFields:!1,touchedFields:!1,isValidating:!1,isValid:!1,errors:!1},f={watch:bh(),array:bh(),state:bh()},g=Tv(n.mode),E=Tv(n.reValidateMode),C=n.criteriaMode===pn.all,m=v=>k=>{clearTimeout(d),d=window.setTimeout(v,k)},p=async()=>{if(c.isValid){const v=n.resolver?Xt((await J()).errors):await q(s,!0);v!==i.isValid&&(i.isValid=v,f.state.next({isValid:v}))}},y=v=>c.isValidating&&f.state.next({isValidating:v}),S=(v,k=[],I,$,_=!0,w=!0)=>{if($&&I){if(l.action=!0,w&&Array.isArray(V(s,v))){const T=I(V(s,v),$.argA,$.argB);_&&Ie(s,v,T)}if(w&&Array.isArray(V(i.errors,v))){const T=I(V(i.errors,v),$.argA,$.argB);_&&Ie(i.errors,v,T),sM(i.errors,v)}if(c.touchedFields&&w&&Array.isArray(V(i.touchedFields,v))){const T=I(V(i.touchedFields,v),$.argA,$.argB);_&&Ie(i.touchedFields,v,T)}c.dirtyFields&&(i.dirtyFields=$h(o,a)),f.state.next({name:v,isDirty:de(v,k),dirtyFields:i.dirtyFields,errors:i.errors,isValid:i.isValid})}else Ie(a,v,k)},x=(v,k)=>{Ie(i.errors,v,k),f.state.next({errors:i.errors})},O=(v,k,I,$)=>{const _=V(s,v);if(_){const w=V(a,v,Be(I)?V(o,v):I);Be(w)||$&&$.defaultChecked||k?Ie(a,v,k?w:Uh(_._f)):rt(v,w),l.mount&&p()}},L=(v,k,I,$,_)=>{let w=!1,T=!1;const U={name:v};if(!I||$){c.isDirty&&(T=i.isDirty,i.isDirty=U.isDirty=de(),w=T!==U.isDirty);const N=ri(V(o,v),k);T=V(i.dirtyFields,v),N?kt(i.dirtyFields,v):Ie(i.dirtyFields,v,!0),U.dirtyFields=i.dirtyFields,w=w||c.dirtyFields&&T!==!N}if(I){const N=V(i.touchedFields,v);N||(Ie(i.touchedFields,v,I),U.touchedFields=i.touchedFields,w=w||c.touchedFields&&N!==I)}return w&&_&&f.state.next(U),w?U:{}},M=(v,k,I,$)=>{const _=V(i.errors,v),w=c.isValid&&ls(k)&&i.isValid!==k;if(t.delayError&&I?(h=m(()=>x(v,I)),h(t.delayError)):(clearTimeout(d),h=null,I?Ie(i.errors,v,I):kt(i.errors,v)),(I?!ri(_,I):_)||!Xt($)||w){const T={...$,...w&&ls(k)?{isValid:k}:{},errors:i.errors,name:v};i={...i,...T},f.state.next(T)}y(!1)},J=async v=>await n.resolver(a,n.context,nM(v||u.mount,s,n.criteriaMode,n.shouldUseNativeValidation)),W=async v=>{const{errors:k}=await J();if(v)for(const I of v){const $=V(k,I);$?Ie(i.errors,I,$):kt(i.errors,I)}else i.errors=k;return k},q=async(v,k,I={valid:!0})=>{for(const $ in v){const _=v[$];if(_){const{_f:w,...T}=_;if(w){const U=u.array.has(w.name),N=await xv(_,V(a,w.name),C,n.shouldUseNativeValidation,U);if(N[w.name]&&(I.valid=!1,k))break;!k&&(V(N,w.name)?U?Jb(i.errors,N,w.name):Ie(i.errors,w.name,N[w.name]):kt(i.errors,w.name))}T&&await q(T,k,I)}}return I.valid},ae=()=>{for(const v of u.unMount){const k=V(s,v);k&&(k._f.refs?k._f.refs.every(I=>!Mh(I)):!Mh(k._f.ref))&&Nt(v)}u.unMount=new Set},de=(v,k)=>(v&&k&&Ie(a,v,k),!ri(ve(),o)),fe=(v,k,I)=>Qb(v,u,{...l.mount?a:Be(k)?o:In(v)?{[v]:k}:k},I,k),Ye=v=>Wa(V(l.mount?a:o,v,t.shouldUnregister?V(o,v,[]):[])),rt=(v,k,I={})=>{const $=V(s,v);let _=k;if($){const w=$._f;w&&(!w.disabled&&Ie(a,v,bS(k,w)),_=Mu(w.ref)&&Ct(k)?"":k,PS(w.ref)?[...w.ref.options].forEach(T=>T.selected=_.includes(T.value)):w.refs?Ha(w.ref)?w.refs.length>1?w.refs.forEach(T=>(!T.defaultChecked||!T.disabled)&&(T.checked=Array.isArray(_)?!!_.find(U=>U===T.value):_===T.value)):w.refs[0]&&(w.refs[0].checked=!!_):w.refs.forEach(T=>T.checked=T.value===_):Rm(w.ref)?w.ref.value="":(w.ref.value=_,w.ref.type||f.watch.next({name:v})))}(I.shouldDirty||I.shouldTouch)&&L(v,_,I.shouldTouch,I.shouldDirty,!0),I.shouldValidate&&Z(v)},rn=(v,k,I)=>{for(const $ in k){const _=k[$],w=`${v}.${$}`,T=V(s,w);(u.array.has(v)||!Uu(_)||T&&!T._f)&&!Xi(_)?rn(w,_,I):rt(w,_,I)}},P=(v,k,I={})=>{const $=V(s,v),_=u.array.has(v),w=Kr(k);Ie(a,v,w),_?(f.array.next({name:v,values:a}),(c.isDirty||c.dirtyFields)&&I.shouldDirty&&(i.dirtyFields=$h(o,a),f.state.next({name:v,dirtyFields:i.dirtyFields,isDirty:de(v,w)}))):$&&!$._f&&!Ct(w)?rn(v,w,I):rt(v,w,I),kv(v,u)&&f.state.next({}),f.watch.next({name:v}),!l.mount&&e()},K=async v=>{const k=v.target;let I=k.name;const $=V(s,I),_=()=>k.type?Uh($._f):zb(v);if($){let w,T;const U=_(),N=v.type===Sv.BLUR||v.type===Sv.FOCUS_OUT,ie=!rM($._f)&&!n.resolver&&!V(i.errors,I)&&!$._f.deps||iM(N,V(i.touchedFields,I),i.isSubmitted,E,g),ne=kv(I,u,N);Ie(a,I,U),N?($._f.onBlur&&$._f.onBlur(v),h&&h(0)):$._f.onChange&&$._f.onChange(v);const oe=L(I,U,N,!1),ee=!Xt(oe)||ne;if(!N&&f.watch.next({name:I,type:v.type}),ie)return c.isValid&&p(),ee&&f.state.next({name:I,...ne?{}:oe});if(!N&&ne&&f.state.next({}),y(!0),n.resolver){const{errors:$e}=await J([I]),ce=Dv(i.errors,s,I),we=Dv($e,s,ce.name||I);w=we.error,I=we.name,T=Xt($e)}else w=(await xv($,V(a,I),C,n.shouldUseNativeValidation))[I],w?T=!1:c.isValid&&(T=await q(s,!0));$._f.deps&&Z($._f.deps),M(I,T,w,oe)}},Z=async(v,k={})=>{let I,$;const _=Lh(v);if(y(!0),n.resolver){const w=await W(Be(v)?v:_);I=Xt(w),$=v?!_.some(T=>V(w,T)):I}else v?($=(await Promise.all(_.map(async w=>{const T=V(s,w);return await q(T&&T._f?{[w]:T}:T)}))).every(Boolean),!(!$&&!i.isValid)&&p()):$=I=await q(s);return f.state.next({...!In(v)||c.isValid&&I!==i.isValid?{}:{name:v},...n.resolver||!v?{isValid:I}:{},errors:i.errors,isValidating:!1}),k.shouldFocus&&!$&&gf(s,w=>w&&V(i.errors,w),v?_:u.mount),$},ve=v=>{const k={...o,...l.mount?a:{}};return Be(v)?k:In(v)?V(k,v):v.map(I=>V(k,I))},Ae=(v,k)=>({invalid:!!V((k||i).errors,v),isDirty:!!V((k||i).dirtyFields,v),isTouched:!!V((k||i).touchedFields,v),error:V((k||i).errors,v)}),rr=v=>{v?Lh(v).forEach(k=>kt(i.errors,k)):i.errors={},f.state.next({errors:i.errors})},sn=(v,k,I)=>{const $=(V(s,v,{_f:{}})._f||{}).ref;Ie(i.errors,v,{...k,ref:$}),f.state.next({name:v,errors:i.errors,isValid:!1}),I&&I.shouldFocus&&$&&$.focus&&$.focus()},on=(v,k)=>us(v)?f.watch.subscribe({next:I=>v(fe(void 0,k),I)}):fe(v,k,!0),Nt=(v,k={})=>{for(const I of v?Lh(v):u.mount)u.mount.delete(I),u.array.delete(I),V(s,I)&&(k.keepValue||(kt(s,I),kt(a,I)),!k.keepError&&kt(i.errors,I),!k.keepDirty&&kt(i.dirtyFields,I),!k.keepTouched&&kt(i.touchedFields,I),!n.shouldUnregister&&!k.keepDefaultValue&&kt(o,I));f.watch.next({}),f.state.next({...i,...k.keepDirty?{isDirty:de()}:{}}),!k.keepIsValid&&p()},Qt=(v,k={})=>{let I=V(s,v);const $=ls(k.disabled);return Ie(s,v,{...I||{},_f:{...I&&I._f?I._f:{ref:{name:v}},name:v,mount:!0,...k}}),u.mount.add(v),I?$&&Ie(a,v,k.disabled?void 0:V(a,v,Uh(I._f))):O(v,!0,k.value),{...$?{disabled:k.disabled}:{},...n.shouldUseNativeValidation?{required:!!k.required,min:eo(k.min),max:eo(k.max),minLength:eo(k.minLength),maxLength:eo(k.maxLength),pattern:eo(k.pattern)}:{},name:v,onChange:K,onBlur:K,ref:_=>{if(_){Qt(v,k),I=V(s,v);const w=Be(_.value)&&_.querySelectorAll&&_.querySelectorAll("input,select,textarea")[0]||_,T=tM(w),U=I._f.refs||[];if(T?U.find(N=>N===w):w===I._f.ref)return;Ie(s,v,{_f:{...I._f,...T?{refs:[...U.filter(Mh),w,...Array.isArray(V(o,v))?[{}]:[]],ref:{type:w.type,name:v}}:{ref:w}}}),O(v,!1,void 0,w)}else I=V(s,v,{}),I._f&&(I._f.mount=!1),(n.shouldUnregister||k.shouldUnregister)&&!(Wb(u.array,v)&&l.action)&&u.unMount.add(v)}}},Ai=()=>n.shouldFocusError&&gf(s,v=>v&&V(i.errors,v),u.mount),Ms=(v,k)=>async I=>{I&&(I.preventDefault&&I.preventDefault(),I.persist&&I.persist());let $=!0,_=Kr(a);f.state.next({isSubmitting:!0});try{if(n.resolver){const{errors:w,values:T}=await J();i.errors=w,_=T}else await q(s);Xt(i.errors)?(f.state.next({errors:{},isSubmitting:!0}),await v(_,I)):(k&&await k({...i.errors},I),Ai())}catch(w){throw $=!1,w}finally{i.isSubmitted=!0,f.state.next({isSubmitted:!0,isSubmitting:!1,isSubmitSuccessful:Xt(i.errors)&&$,submitCount:i.submitCount+1,errors:i.errors})}},xi=(v,k={})=>{V(s,v)&&(Be(k.defaultValue)?P(v,V(o,v)):(P(v,k.defaultValue),Ie(o,v,k.defaultValue)),k.keepTouched||kt(i.touchedFields,v),k.keepDirty||(kt(i.dirtyFields,v),i.isDirty=k.defaultValue?de(v,V(o,v)):de()),k.keepError||(kt(i.errors,v),c.isValid&&p()),f.state.next({...i}))},$s=(v,k={})=>{const I=v||o,$=Kr(I),_=v&&!Xt(v)?$:o;if(k.keepDefaultValues||(o=I),!k.keepValues){if(k.keepDirtyValues||r)for(const w of u.mount)V(i.dirtyFields,w)?Ie(_,w,V(a,w)):P(w,V(_,w));else{if(Im&&Be(v))for(const w of u.mount){const T=V(s,w);if(T&&T._f){const U=Array.isArray(T._f.refs)?T._f.refs[0]:T._f.ref;if(Mu(U)){const N=U.closest("form");if(N){N.reset();break}}}}s={}}a=t.shouldUnregister?k.keepDefaultValues?Kr(o):{}:$,f.array.next({values:_}),f.watch.next({values:_})}u={mount:new Set,unMount:new Set,array:new Set,watch:new Set,watchAll:!1,focus:""},!l.mount&&e(),l.mount=!c.isValid||!!k.keepIsValid,l.watch=!!t.shouldUnregister,f.state.next({submitCount:k.keepSubmitCount?i.submitCount:0,isDirty:k.keepDirty||k.keepDirtyValues?i.isDirty:!!(k.keepDefaultValues&&!ri(v,o)),isSubmitted:k.keepIsSubmitted?i.isSubmitted:!1,dirtyFields:k.keepDirty||k.keepDirtyValues?i.dirtyFields:k.keepDefaultValues&&v?$h(o,v):{},touchedFields:k.keepTouched?i.touchedFields:{},errors:k.keepErrors?i.errors:{},isSubmitting:!1,isSubmitSuccessful:!1})},qa=(v,k)=>$s(us(v)?v(a):v,k),Ka=(v,k={})=>{const I=V(s,v),$=I&&I._f;if($){const _=$.refs?$.refs[0]:$.ref;_.focus&&(_.focus(),k.shouldSelect&&_.select())}};return us(n.defaultValues)&&n.defaultValues().then(v=>{qa(v,n.resetOptions),f.state.next({isLoading:!1})}),{control:{register:Qt,unregister:Nt,getFieldState:Ae,_executeSchema:J,_focusError:Ai,_getWatch:fe,_getDirty:de,_updateValid:p,_removeUnmounted:ae,_updateFieldArray:S,_getFieldArray:Ye,_reset:$s,_subjects:f,_proxyFormState:c,get _fields(){return s},get _formValues(){return a},get _stateFlags(){return l},set _stateFlags(v){l=v},get _defaultValues(){return o},get _names(){return u},set _names(v){u=v},get _formState(){return i},set _formState(v){i=v},get _options(){return n},set _options(v){n={...n,...v}}},trigger:Z,register:Qt,handleSubmit:Ms,watch:on,setValue:P,getValues:ve,reset:qa,resetField:xi,clearErrors:rr,unregister:Nt,setError:sn,setFocus:Ka,getFieldState:Ae}}function lM(t={}){const e=fn.useRef(),[n,r]=fn.useState({isDirty:!1,isValidating:!1,isLoading:!0,isSubmitted:!1,isSubmitting:!1,isSubmitSuccessful:!1,isValid:!1,submitCount:0,dirtyFields:{},touchedFields:{},errors:{},defaultValues:us(t.defaultValues)?void 0:t.defaultValues});e.current||(e.current={...aM(t,()=>r(s=>({...s}))),formState:n});const i=e.current.control;return i._options=t,Gb({subject:i._subjects.state,next:s=>{Kb(s,i._proxyFormState,!0)&&(i._formState={...i._formState,...s},r({...i._formState}))}}),fn.useEffect(()=>{i._stateFlags.mount||(i._proxyFormState.isValid&&i._updateValid(),i._stateFlags.mount=!0),i._stateFlags.watch&&(i._stateFlags.watch=!1,i._subjects.state.next({})),i._removeUnmounted()}),fn.useEffect(()=>{t.values&&!ri(t.values,i._defaultValues)&&i._reset(t.values,i._options.resetOptions)},[t.values,i]),fn.useEffect(()=>{n.submitCount&&i._focusError()},[i,n.submitCount]),e.current.formState=qb(n,i),e.current}const En={email:{title:"請輸入Email",verify:/^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/,error:"請輸入正確 email",type:"text",accept:"",placeHolder:"請輸入Email",require:!0,minLength:1},name:{title:"請輸入您的暱稱",verify:/^[^ ]*$/,error:"請勿輸入空白",type:"text",accept:"",placeHolder:"請輸入您的暱稱",require:!0,minLength:1},password:{title:"請輸入密碼",verify:/^[^ ]*$/,error:"密碼至少6位數",type:"password",accept:"",placeHolder:"請輸入密碼",require:!0,minLength:6},checkPassword:{title:"請再次輸入密碼",verify:/^[^ ]*$/,error:"密碼至少6位數",type:"password",accept:"",placeHolder:"請輸入密碼",require:!0,minLength:6},photo:{title:"可選擇是否上傳照片",verify:/./,error:"",type:"file",accept:"image/*",placeHolder:"",require:!1,minLength:1}};function MS({formData:t,submitHandler:e,isSignUp:n}){const{register:r,handleSubmit:i,reset:s,watch:o,formState:a,formState:{errors:l}}=lM(),[u,h]=b.useState("");b.useEffect(()=>{a.isSubmitSuccessful&&s(t.reduce((c,f)=>(c[f]="",c),{}))},[t,a,s]);const d=c=>{c.target.files&&(c.target.files[0]?h(URL.createObjectURL(c.target.files[0])):h(""))};return je("form",{onSubmit:i(e),className:"text-center",children:[t.map(c=>{var f,g,E,C;return je("div",{className:"text-left my-[20px]",children:[z("p",{className:"font-semibold text-sm mb-1",children:En[c].title}),z("input",{accept:En[c].accept,type:En[c].type,placeholder:En[c].placeHolder,...r(c,{required:{value:En[c].require,message:En[c].error},pattern:En[c].verify,minLength:{value:En[c].minLength,message:"密碼至少6位數"},validate:c==="checkPassword"?m=>{if(o("password")!==m)return"Your passwords do no match"}:void 0}),className:"w-full py-[12px] px-[16px] rounded-[10px]",autoComplete:c.includes("password")?"on":"",onChange:c==="photo"?d:()=>{}}),((f=l[c])==null?void 0:f.type)==="required"&&z("p",{className:"text-red-600",children:En[c].error}),((g=l[c])==null?void 0:g.type)==="pattern"&&z("p",{className:"text-red-600",children:En[c].error}),((E=l[c])==null?void 0:E.type)==="minLength"&&z("p",{className:"text-red-600",children:"密碼至少六位數"}),((C=l[c])==null?void 0:C.type)==="validate"&&z("p",{className:"text-red-600",children:"密碼不同"})]},c)}),u&&z("img",{src:u,alt:"upload-file",className:"max-w-[100px] max-h-[100px] pb-[12px] mt-[-20px]"}),z("button",{type:"submit",className:"w-[160px] h-[47px] rounded-[10px] bg-stone-800 text-white text-center",children:n?"註冊帳號":"登入"})]})}const uM=["email","password"];function cM(){return je(Fv,{children:[z("h1",{className:"font-bold text-2xl",children:"最實用的線上代辦事項服務"}),z(MS,{formData:uM,submitHandler:Fb,isSignUp:!1})]})}const hM=["email","name","password","checkPassword","photo"];function dM(){const{setMember:t}=b.useContext(Ds);return je(Fv,{children:[z("h1",{className:"font-bold text-2xl",children:"註冊帳號"}),z(MS,{formData:hM,submitHandler:async n=>{const{name:r,email:i,password:s,photo:o}=n,a=await $b(i,o[0]);Ub({name:r,email:i,password:s,url:a},t)},isSignUp:!0})]})}const fM="/vite-todo-list/img.png";function pM(){const{member:t}=b.useContext(Ds),[e,n]=b.useState(!1),r=()=>n(s=>!s),i=t1();return b.useEffect(()=>{t.isSign?i("todo"):i("/")},[i,t]),je("div",{className:"relative min-h-screen pt-[50px] pb-[20px] my-home-bg flex flex-col justify-center",children:[t.isSign&&z(CS,{}),je("main",{className:"h-full flex flex-col md:flex-row items-center justify-center",children:[je("div",{className:"flex flex-col items-center",children:[z(W1,{isBig:!0}),z("img",{src:fM,alt:"Home",className:"mt-[20px] hidden md:inline-block"})]}),je("div",{className:"w-[300px] flex flex-col lg:ml-[150px] md:ml-[50px] ml-0 mt-5 text-center md:text-left",children:[e?z(dM,{}):z(cM,{}),z("button",{className:"block w-[160px] h-[47px] mx-auto text-center",type:"button",onClick:r,children:e?"登入":"註冊帳號"})]})]}),z(RS,{})]})}const mM="/vite-todo-list/plus 1.png",gM="/vite-todo-list/vector-x.png";function yM({todo:t,completed:e,id:n,triggerCompleted:r,removeItem:i}){return je("li",{className:"flex items-center justify-between",children:[z("div",{className:"py-[15px] border-b w-full overflow-auto","aria-hidden":"true",onClick:()=>r(n),children:je("label",{htmlFor:t,className:"flex items-center cursor-pointer",children:[z("input",{id:n,readOnly:!0,type:"checkbox",value:"true",checked:e,className:"w-[20px] h-[20px] mr-[16px] cursor-pointer"}),z("span",{className:`${e&&"line-through"}`,children:t})]})}),z("img",{"aria-hidden":"true",onClick:()=>i(n),src:gM,alt:"x",className:"w-[14px] h-[14px] mx-[17px] cursor-pointer"})]})}function vM({tab:t,todoList:e,triggerCompleted:n,removeItem:r}){let i=[];return t===1?i=e.filter(s=>!s.completed):t===2?i=e.filter(s=>s.completed):i=e,z("ul",{className:"pl-[24px] min-h-[300px] max-h-[300px] overflow-auto",children:i.length>0?i.map(s=>{const{todo:o,completed:a,id:l}=s;return z(yM,{id:l,todo:o,completed:a,triggerCompleted:n,removeItem:r},l)}):z("li",{className:"flex items-center justify-between",children:z("div",{className:"py-[15px] border-b w-full font-bold",children:"此欄位無項目"})})})}function wM({tabItem:t,currentTab:e,index:n,setTab:r}){return z("li",{"aria-hidden":"true",onClick:()=>r(n),className:`w-[33.33333%] text-center py-[15px] cursor-pointer ${e?"border-b-[2px] border-black":"border-b text-gray-400"}`,children:z("p",{children:t})})}const EM=["全部","待完成","已完成"];function _M(){const{member:t}=b.useContext(Ds),[e,n]=b.useState(""),[r,i]=b.useState([]),[s,o]=b.useState(0);b.useEffect(()=>{t.uid&&jb(t.uid).then(f=>i(f))},[t.uid]);const a=f=>{n(f.target.value)},l=f=>{if(f.key==="Enter"){if(e.trim()===""){alert("尚未輸入內容");return}const g=[...r,{todo:e,completed:!1,id:crypto.randomUUID()}];i(g),n(""),Zs(t.uid,g)}},u=()=>{if(e.trim()===""){alert("尚未輸入內容");return}const f=[...r,{todo:e,completed:!1,id:crypto.randomUUID()}];i(f),n(""),Zs(t.uid,f)},h=f=>{const g=r.map(E=>E.id===f?{...E,completed:!E.completed}:E);i(g),Zs(t.uid,g)},d=f=>{const g=r.filter(E=>E.id!==f);i(g),Zs(t.uid,g)},c=()=>{const f=r.filter(g=>!g.completed);i(f),Zs(t.uid,f)};return je("div",{className:"relative min-h-screen pt-[50px] pb-[20px] my-todo-bg flex flex-col justify-center",children:[t.isSign&&z(CS,{}),je("main",{className:"flex flex-col justify-center items-center",children:[je("div",{className:"relative flex items-center sm:w-[500px] w-[311px]",children:[z("input",{type:"text",placeholder:"請輸入待辦事項",className:"rounded-[10px] px-[16px] py-[12px] w-full",value:e,onChange:a,onKeyPress:l}),z("div",{"aria-hidden":"true",onClick:u,className:"absolute right-[4px]",children:z("img",{src:mM,alt:"plus",className:"cursor-pointer"})})]}),je("div",{className:"sm:w-[500px] w-[311px] bg-white rounded-[10px] shadow-md mt-[16px] text-gray-700 text-sm",children:[z("ul",{className:"flex font-semibold",children:EM.map((f,g)=>z(wM,{tabItem:f,currentTab:s===g,index:g,setTab:o},f))}),je("div",{children:[z(vM,{tab:s,todoList:r,triggerCompleted:h,removeItem:d}),je("div",{className:"flex items-center justify-between ml-[24px] mr-[48px] pt-[25px] pb-[32px]",children:[je("p",{children:[r.filter(f=>f.completed).length,"個已完成項目"]}),z("button",{onClick:c,type:"button",className:"text-gray-400 cursor-pointer",children:"清除已完成項目"})]})]})]})]}),z(RS,{})]})}function SM({children:t}){const{member:e}=b.useContext(Ds);return e.isSign?t:z(n1,{to:"/",replace:!0})}const TM=xC([{path:"/",element:z(pM,{})},{path:"/todo",element:z(SM,{children:z(_M,{})})},{path:"*",element:z(n1,{to:"/",replace:!0})}],{basename:"/vite-todo-list/"});function kM({children:t}){const[e,n]=b.useState({name:"王小明",uid:"",isSign:!1,url:""});b.useEffect(()=>{const i=GA(Uc,s=>{s&&Bb(s.uid).then(o=>{n({...o,isSign:!0})})});return()=>{i()}},[]);const r=b.useMemo(()=>({member:e,setMember:n}),[e]);return z(Ds.Provider,{value:r,children:t})}function IM(){return z(fn.StrictMode,{children:z(kM,{children:z(IC,{router:TM})})})}Vh.createRoot(document.getElementById("root")).render(z(IM,{}));
