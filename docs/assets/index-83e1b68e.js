(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=t(r);fetch(r.href,s)}})();var Vy=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function I_(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var O_={exports:{}},qu={},F_={exports:{}},Ge={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Qa=Symbol.for("react.element"),Gy=Symbol.for("react.portal"),Wy=Symbol.for("react.fragment"),jy=Symbol.for("react.strict_mode"),Xy=Symbol.for("react.profiler"),Yy=Symbol.for("react.provider"),qy=Symbol.for("react.context"),$y=Symbol.for("react.forward_ref"),Ky=Symbol.for("react.suspense"),Zy=Symbol.for("react.memo"),Qy=Symbol.for("react.lazy"),Ip=Symbol.iterator;function Jy(n){return n===null||typeof n!="object"?null:(n=Ip&&n[Ip]||n["@@iterator"],typeof n=="function"?n:null)}var k_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},z_=Object.assign,B_={};function Fo(n,e,t){this.props=n,this.context=e,this.refs=B_,this.updater=t||k_}Fo.prototype.isReactComponent={};Fo.prototype.setState=function(n,e){if(typeof n!="object"&&typeof n!="function"&&n!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,n,e,"setState")};Fo.prototype.forceUpdate=function(n){this.updater.enqueueForceUpdate(this,n,"forceUpdate")};function H_(){}H_.prototype=Fo.prototype;function ah(n,e,t){this.props=n,this.context=e,this.refs=B_,this.updater=t||k_}var lh=ah.prototype=new H_;lh.constructor=ah;z_(lh,Fo.prototype);lh.isPureReactComponent=!0;var Op=Array.isArray,V_=Object.prototype.hasOwnProperty,uh={current:null},G_={key:!0,ref:!0,__self:!0,__source:!0};function W_(n,e,t){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)V_.call(e,i)&&!G_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=t;else if(1<a){for(var l=Array(a),u=0;u<a;u++)l[u]=arguments[u+2];r.children=l}if(n&&n.defaultProps)for(i in a=n.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:Qa,type:n,key:s,ref:o,props:r,_owner:uh.current}}function eS(n,e){return{$$typeof:Qa,type:n.type,key:e,ref:n.ref,props:n.props,_owner:n._owner}}function ch(n){return typeof n=="object"&&n!==null&&n.$$typeof===Qa}function tS(n){var e={"=":"=0",":":"=2"};return"$"+n.replace(/[=:]/g,function(t){return e[t]})}var Fp=/\/+/g;function Tc(n,e){return typeof n=="object"&&n!==null&&n.key!=null?tS(""+n.key):e.toString(36)}function Kl(n,e,t,i,r){var s=typeof n;(s==="undefined"||s==="boolean")&&(n=null);var o=!1;if(n===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(n.$$typeof){case Qa:case Gy:o=!0}}if(o)return o=n,r=r(o),n=i===""?"."+Tc(o,0):i,Op(r)?(t="",n!=null&&(t=n.replace(Fp,"$&/")+"/"),Kl(r,e,t,"",function(u){return u})):r!=null&&(ch(r)&&(r=eS(r,t+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(Fp,"$&/")+"/")+n)),e.push(r)),1;if(o=0,i=i===""?".":i+":",Op(n))for(var a=0;a<n.length;a++){s=n[a];var l=i+Tc(s,a);o+=Kl(s,e,t,l,r)}else if(l=Jy(n),typeof l=="function")for(n=l.call(n),a=0;!(s=n.next()).done;)s=s.value,l=i+Tc(s,a++),o+=Kl(s,e,t,l,r);else if(s==="object")throw e=String(n),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(n).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function cl(n,e,t){if(n==null)return n;var i=[],r=0;return Kl(n,i,"","",function(s){return e.call(t,s,r++)}),i}function nS(n){if(n._status===-1){var e=n._result;e=e(),e.then(function(t){(n._status===0||n._status===-1)&&(n._status=1,n._result=t)},function(t){(n._status===0||n._status===-1)&&(n._status=2,n._result=t)}),n._status===-1&&(n._status=0,n._result=e)}if(n._status===1)return n._result.default;throw n._result}var on={current:null},Zl={transition:null},iS={ReactCurrentDispatcher:on,ReactCurrentBatchConfig:Zl,ReactCurrentOwner:uh};Ge.Children={map:cl,forEach:function(n,e,t){cl(n,function(){e.apply(this,arguments)},t)},count:function(n){var e=0;return cl(n,function(){e++}),e},toArray:function(n){return cl(n,function(e){return e})||[]},only:function(n){if(!ch(n))throw Error("React.Children.only expected to receive a single React element child.");return n}};Ge.Component=Fo;Ge.Fragment=Wy;Ge.Profiler=Xy;Ge.PureComponent=ah;Ge.StrictMode=jy;Ge.Suspense=Ky;Ge.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=iS;Ge.cloneElement=function(n,e,t){if(n==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+n+".");var i=z_({},n.props),r=n.key,s=n.ref,o=n._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=uh.current),e.key!==void 0&&(r=""+e.key),n.type&&n.type.defaultProps)var a=n.type.defaultProps;for(l in e)V_.call(e,l)&&!G_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=t;else if(1<l){a=Array(l);for(var u=0;u<l;u++)a[u]=arguments[u+2];i.children=a}return{$$typeof:Qa,type:n.type,key:r,ref:s,props:i,_owner:o}};Ge.createContext=function(n){return n={$$typeof:qy,_currentValue:n,_currentValue2:n,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},n.Provider={$$typeof:Yy,_context:n},n.Consumer=n};Ge.createElement=W_;Ge.createFactory=function(n){var e=W_.bind(null,n);return e.type=n,e};Ge.createRef=function(){return{current:null}};Ge.forwardRef=function(n){return{$$typeof:$y,render:n}};Ge.isValidElement=ch;Ge.lazy=function(n){return{$$typeof:Qy,_payload:{_status:-1,_result:n},_init:nS}};Ge.memo=function(n,e){return{$$typeof:Zy,type:n,compare:e===void 0?null:e}};Ge.startTransition=function(n){var e=Zl.transition;Zl.transition={};try{n()}finally{Zl.transition=e}};Ge.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.")};Ge.useCallback=function(n,e){return on.current.useCallback(n,e)};Ge.useContext=function(n){return on.current.useContext(n)};Ge.useDebugValue=function(){};Ge.useDeferredValue=function(n){return on.current.useDeferredValue(n)};Ge.useEffect=function(n,e){return on.current.useEffect(n,e)};Ge.useId=function(){return on.current.useId()};Ge.useImperativeHandle=function(n,e,t){return on.current.useImperativeHandle(n,e,t)};Ge.useInsertionEffect=function(n,e){return on.current.useInsertionEffect(n,e)};Ge.useLayoutEffect=function(n,e){return on.current.useLayoutEffect(n,e)};Ge.useMemo=function(n,e){return on.current.useMemo(n,e)};Ge.useReducer=function(n,e,t){return on.current.useReducer(n,e,t)};Ge.useRef=function(n){return on.current.useRef(n)};Ge.useState=function(n){return on.current.useState(n)};Ge.useSyncExternalStore=function(n,e,t){return on.current.useSyncExternalStore(n,e,t)};Ge.useTransition=function(){return on.current.useTransition()};Ge.version="18.2.0";F_.exports=Ge;var pe=F_.exports;const rS=I_(pe);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var sS=pe,oS=Symbol.for("react.element"),aS=Symbol.for("react.fragment"),lS=Object.prototype.hasOwnProperty,uS=sS.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,cS={key:!0,ref:!0,__self:!0,__source:!0};function j_(n,e,t){var i,r={},s=null,o=null;t!==void 0&&(s=""+t),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)lS.call(e,i)&&!cS.hasOwnProperty(i)&&(r[i]=e[i]);if(n&&n.defaultProps)for(i in e=n.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:oS,type:n,key:s,ref:o,props:r,_owner:uS.current}}qu.Fragment=aS;qu.jsx=j_;qu.jsxs=j_;O_.exports=qu;var k=O_.exports,Bf={},X_={exports:{}},Un={},Y_={exports:{}},q_={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(n){function e(D,X){var G=D.length;D.push(X);e:for(;0<G;){var se=G-1>>>1,F=D[se];if(0<r(F,X))D[se]=X,D[G]=F,G=se;else break e}}function t(D){return D.length===0?null:D[0]}function i(D){if(D.length===0)return null;var X=D[0],G=D.pop();if(G!==X){D[0]=G;e:for(var se=0,F=D.length,ee=F>>>1;se<ee;){var K=2*(se+1)-1,re=D[K],le=K+1,de=D[le];if(0>r(re,G))le<F&&0>r(de,re)?(D[se]=de,D[le]=G,se=le):(D[se]=re,D[K]=G,se=K);else if(le<F&&0>r(de,G))D[se]=de,D[le]=G,se=le;else break e}}return X}function r(D,X){var G=D.sortIndex-X.sortIndex;return G!==0?G:D.id-X.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;n.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();n.unstable_now=function(){return o.now()-a}}var l=[],u=[],c=1,d=null,h=3,p=!1,v=!1,g=!1,m=typeof setTimeout=="function"?setTimeout:null,f=typeof clearTimeout=="function"?clearTimeout:null,_=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function x(D){for(var X=t(u);X!==null;){if(X.callback===null)i(u);else if(X.startTime<=D)i(u),X.sortIndex=X.expirationTime,e(l,X);else break;X=t(u)}}function y(D){if(g=!1,x(D),!v)if(t(l)!==null)v=!0,$(S);else{var X=t(u);X!==null&&W(y,X.startTime-D)}}function S(D,X){v=!1,g&&(g=!1,f(C),C=-1),p=!0;var G=h;try{for(x(X),d=t(l);d!==null&&(!(d.expirationTime>X)||D&&!U());){var se=d.callback;if(typeof se=="function"){d.callback=null,h=d.priorityLevel;var F=se(d.expirationTime<=X);X=n.unstable_now(),typeof F=="function"?d.callback=F:d===t(l)&&i(l),x(X)}else i(l);d=t(l)}if(d!==null)var ee=!0;else{var K=t(u);K!==null&&W(y,K.startTime-X),ee=!1}return ee}finally{d=null,h=G,p=!1}}var E=!1,A=null,C=-1,M=5,T=-1;function U(){return!(n.unstable_now()-T<M)}function O(){if(A!==null){var D=n.unstable_now();T=D;var X=!0;try{X=A(!0,D)}finally{X?L():(E=!1,A=null)}}else E=!1}var L;if(typeof _=="function")L=function(){_(O)};else if(typeof MessageChannel<"u"){var N=new MessageChannel,z=N.port2;N.port1.onmessage=O,L=function(){z.postMessage(null)}}else L=function(){m(O,0)};function $(D){A=D,E||(E=!0,L())}function W(D,X){C=m(function(){D(n.unstable_now())},X)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(D){D.callback=null},n.unstable_continueExecution=function(){v||p||(v=!0,$(S))},n.unstable_forceFrameRate=function(D){0>D||125<D?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<D?Math.floor(1e3/D):5},n.unstable_getCurrentPriorityLevel=function(){return h},n.unstable_getFirstCallbackNode=function(){return t(l)},n.unstable_next=function(D){switch(h){case 1:case 2:case 3:var X=3;break;default:X=h}var G=h;h=X;try{return D()}finally{h=G}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(D,X){switch(D){case 1:case 2:case 3:case 4:case 5:break;default:D=3}var G=h;h=D;try{return X()}finally{h=G}},n.unstable_scheduleCallback=function(D,X,G){var se=n.unstable_now();switch(typeof G=="object"&&G!==null?(G=G.delay,G=typeof G=="number"&&0<G?se+G:se):G=se,D){case 1:var F=-1;break;case 2:F=250;break;case 5:F=1073741823;break;case 4:F=1e4;break;default:F=5e3}return F=G+F,D={id:c++,callback:X,priorityLevel:D,startTime:G,expirationTime:F,sortIndex:-1},G>se?(D.sortIndex=G,e(u,D),t(l)===null&&D===t(u)&&(g?(f(C),C=-1):g=!0,W(y,G-se))):(D.sortIndex=F,e(l,D),v||p||(v=!0,$(S))),D},n.unstable_shouldYield=U,n.unstable_wrapCallback=function(D){var X=h;return function(){var G=h;h=X;try{return D.apply(this,arguments)}finally{h=G}}}})(q_);Y_.exports=q_;var fS=Y_.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $_=pe,Ln=fS;function ne(n){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+n,t=1;t<arguments.length;t++)e+="&args[]="+encodeURIComponent(arguments[t]);return"Minified React error #"+n+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var K_=new Set,Ta={};function Ms(n,e){So(n,e),So(n+"Capture",e)}function So(n,e){for(Ta[n]=e,n=0;n<e.length;n++)K_.add(e[n])}var Wi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),Hf=Object.prototype.hasOwnProperty,dS=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,kp={},zp={};function hS(n){return Hf.call(zp,n)?!0:Hf.call(kp,n)?!1:dS.test(n)?zp[n]=!0:(kp[n]=!0,!1)}function pS(n,e,t,i){if(t!==null&&t.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:t!==null?!t.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function mS(n,e,t,i){if(e===null||typeof e>"u"||pS(n,e,t,i))return!0;if(i)return!1;if(t!==null)switch(t.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function an(n,e,t,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=t,this.propertyName=n,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Ht={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){Ht[n]=new an(n,0,!1,n,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var e=n[0];Ht[e]=new an(e,1,!1,n[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(n){Ht[n]=new an(n,2,!1,n.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){Ht[n]=new an(n,2,!1,n,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){Ht[n]=new an(n,3,!1,n.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(n){Ht[n]=new an(n,3,!0,n,null,!1,!1)});["capture","download"].forEach(function(n){Ht[n]=new an(n,4,!1,n,null,!1,!1)});["cols","rows","size","span"].forEach(function(n){Ht[n]=new an(n,6,!1,n,null,!1,!1)});["rowSpan","start"].forEach(function(n){Ht[n]=new an(n,5,!1,n.toLowerCase(),null,!1,!1)});var fh=/[\-:]([a-z])/g;function dh(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var e=n.replace(fh,dh);Ht[e]=new an(e,1,!1,n,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var e=n.replace(fh,dh);Ht[e]=new an(e,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(n){var e=n.replace(fh,dh);Ht[e]=new an(e,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(n){Ht[n]=new an(n,1,!1,n.toLowerCase(),null,!1,!1)});Ht.xlinkHref=new an("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(n){Ht[n]=new an(n,1,!1,n.toLowerCase(),null,!0,!0)});function hh(n,e,t,i){var r=Ht.hasOwnProperty(e)?Ht[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(mS(e,t,r,i)&&(t=null),i||r===null?hS(e)&&(t===null?n.removeAttribute(e):n.setAttribute(e,""+t)):r.mustUseProperty?n[r.propertyName]=t===null?r.type===3?!1:"":t:(e=r.attributeName,i=r.attributeNamespace,t===null?n.removeAttribute(e):(r=r.type,t=r===3||r===4&&t===!0?"":""+t,i?n.setAttributeNS(i,e,t):n.setAttribute(e,t))))}var Ki=$_.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,fl=Symbol.for("react.element"),Ys=Symbol.for("react.portal"),qs=Symbol.for("react.fragment"),ph=Symbol.for("react.strict_mode"),Vf=Symbol.for("react.profiler"),Z_=Symbol.for("react.provider"),Q_=Symbol.for("react.context"),mh=Symbol.for("react.forward_ref"),Gf=Symbol.for("react.suspense"),Wf=Symbol.for("react.suspense_list"),gh=Symbol.for("react.memo"),nr=Symbol.for("react.lazy"),J_=Symbol.for("react.offscreen"),Bp=Symbol.iterator;function Wo(n){return n===null||typeof n!="object"?null:(n=Bp&&n[Bp]||n["@@iterator"],typeof n=="function"?n:null)}var ft=Object.assign,wc;function ra(n){if(wc===void 0)try{throw Error()}catch(t){var e=t.stack.trim().match(/\n( *(at )?)/);wc=e&&e[1]||""}return`
`+wc+n}var Ac=!1;function Cc(n,e){if(!n||Ac)return"";Ac=!0;var t=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(u){var i=u}Reflect.construct(n,[],e)}else{try{e.call()}catch(u){i=u}n.call(e.prototype)}else{try{throw Error()}catch(u){i=u}n()}}catch(u){if(u&&i&&typeof u.stack=="string"){for(var r=u.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return n.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",n.displayName)),l}while(1<=o&&0<=a);break}}}finally{Ac=!1,Error.prepareStackTrace=t}return(n=n?n.displayName||n.name:"")?ra(n):""}function gS(n){switch(n.tag){case 5:return ra(n.type);case 16:return ra("Lazy");case 13:return ra("Suspense");case 19:return ra("SuspenseList");case 0:case 2:case 15:return n=Cc(n.type,!1),n;case 11:return n=Cc(n.type.render,!1),n;case 1:return n=Cc(n.type,!0),n;default:return""}}function jf(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case qs:return"Fragment";case Ys:return"Portal";case Vf:return"Profiler";case ph:return"StrictMode";case Gf:return"Suspense";case Wf:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case Q_:return(n.displayName||"Context")+".Consumer";case Z_:return(n._context.displayName||"Context")+".Provider";case mh:var e=n.render;return n=n.displayName,n||(n=e.displayName||e.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case gh:return e=n.displayName||null,e!==null?e:jf(n.type)||"Memo";case nr:e=n._payload,n=n._init;try{return jf(n(e))}catch{}}return null}function _S(n){var e=n.type;switch(n.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=e.render,n=n.displayName||n.name||"",e.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return jf(e);case 8:return e===ph?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ar(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function e0(n){var e=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function vS(n){var e=e0(n)?"checked":"value",t=Object.getOwnPropertyDescriptor(n.constructor.prototype,e),i=""+n[e];if(!n.hasOwnProperty(e)&&typeof t<"u"&&typeof t.get=="function"&&typeof t.set=="function"){var r=t.get,s=t.set;return Object.defineProperty(n,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(n,e,{enumerable:t.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){n._valueTracker=null,delete n[e]}}}}function dl(n){n._valueTracker||(n._valueTracker=vS(n))}function t0(n){if(!n)return!1;var e=n._valueTracker;if(!e)return!0;var t=e.getValue(),i="";return n&&(i=e0(n)?n.checked?"true":"false":n.value),n=i,n!==t?(e.setValue(n),!0):!1}function hu(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Xf(n,e){var t=e.checked;return ft({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:t??n._wrapperState.initialChecked})}function Hp(n,e){var t=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;t=Ar(e.value!=null?e.value:t),n._wrapperState={initialChecked:i,initialValue:t,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function n0(n,e){e=e.checked,e!=null&&hh(n,"checked",e,!1)}function Yf(n,e){n0(n,e);var t=Ar(e.value),i=e.type;if(t!=null)i==="number"?(t===0&&n.value===""||n.value!=t)&&(n.value=""+t):n.value!==""+t&&(n.value=""+t);else if(i==="submit"||i==="reset"){n.removeAttribute("value");return}e.hasOwnProperty("value")?qf(n,e.type,t):e.hasOwnProperty("defaultValue")&&qf(n,e.type,Ar(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(n.defaultChecked=!!e.defaultChecked)}function Vp(n,e,t){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+n._wrapperState.initialValue,t||e===n.value||(n.value=e),n.defaultValue=e}t=n.name,t!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,t!==""&&(n.name=t)}function qf(n,e,t){(e!=="number"||hu(n.ownerDocument)!==n)&&(t==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+t&&(n.defaultValue=""+t))}var sa=Array.isArray;function lo(n,e,t,i){if(n=n.options,e){e={};for(var r=0;r<t.length;r++)e["$"+t[r]]=!0;for(t=0;t<n.length;t++)r=e.hasOwnProperty("$"+n[t].value),n[t].selected!==r&&(n[t].selected=r),r&&i&&(n[t].defaultSelected=!0)}else{for(t=""+Ar(t),e=null,r=0;r<n.length;r++){if(n[r].value===t){n[r].selected=!0,i&&(n[r].defaultSelected=!0);return}e!==null||n[r].disabled||(e=n[r])}e!==null&&(e.selected=!0)}}function $f(n,e){if(e.dangerouslySetInnerHTML!=null)throw Error(ne(91));return ft({},e,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Gp(n,e){var t=e.value;if(t==null){if(t=e.children,e=e.defaultValue,t!=null){if(e!=null)throw Error(ne(92));if(sa(t)){if(1<t.length)throw Error(ne(93));t=t[0]}e=t}e==null&&(e=""),t=e}n._wrapperState={initialValue:Ar(t)}}function i0(n,e){var t=Ar(e.value),i=Ar(e.defaultValue);t!=null&&(t=""+t,t!==n.value&&(n.value=t),e.defaultValue==null&&n.defaultValue!==t&&(n.defaultValue=t)),i!=null&&(n.defaultValue=""+i)}function Wp(n){var e=n.textContent;e===n._wrapperState.initialValue&&e!==""&&e!==null&&(n.value=e)}function r0(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function Kf(n,e){return n==null||n==="http://www.w3.org/1999/xhtml"?r0(e):n==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var hl,s0=function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,t,i,r){MSApp.execUnsafeLocalFunction(function(){return n(e,t,i,r)})}:n}(function(n,e){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=e;else{for(hl=hl||document.createElement("div"),hl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=hl.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;e.firstChild;)n.appendChild(e.firstChild)}});function wa(n,e){if(e){var t=n.firstChild;if(t&&t===n.lastChild&&t.nodeType===3){t.nodeValue=e;return}}n.textContent=e}var fa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},xS=["Webkit","ms","Moz","O"];Object.keys(fa).forEach(function(n){xS.forEach(function(e){e=e+n.charAt(0).toUpperCase()+n.substring(1),fa[e]=fa[n]})});function o0(n,e,t){return e==null||typeof e=="boolean"||e===""?"":t||typeof e!="number"||e===0||fa.hasOwnProperty(n)&&fa[n]?(""+e).trim():e+"px"}function a0(n,e){n=n.style;for(var t in e)if(e.hasOwnProperty(t)){var i=t.indexOf("--")===0,r=o0(t,e[t],i);t==="float"&&(t="cssFloat"),i?n.setProperty(t,r):n[t]=r}}var yS=ft({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Zf(n,e){if(e){if(yS[n]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(ne(137,n));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(ne(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(ne(61))}if(e.style!=null&&typeof e.style!="object")throw Error(ne(62))}}function Qf(n,e){if(n.indexOf("-")===-1)return typeof e.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Jf=null;function _h(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var ed=null,uo=null,co=null;function jp(n){if(n=tl(n)){if(typeof ed!="function")throw Error(ne(280));var e=n.stateNode;e&&(e=Ju(e),ed(n.stateNode,n.type,e))}}function l0(n){uo?co?co.push(n):co=[n]:uo=n}function u0(){if(uo){var n=uo,e=co;if(co=uo=null,jp(n),e)for(n=0;n<e.length;n++)jp(e[n])}}function c0(n,e){return n(e)}function f0(){}var Rc=!1;function d0(n,e,t){if(Rc)return n(e,t);Rc=!0;try{return c0(n,e,t)}finally{Rc=!1,(uo!==null||co!==null)&&(f0(),u0())}}function Aa(n,e){var t=n.stateNode;if(t===null)return null;var i=Ju(t);if(i===null)return null;t=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(n=n.type,i=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!i;break e;default:n=!1}if(n)return null;if(t&&typeof t!="function")throw Error(ne(231,e,typeof t));return t}var td=!1;if(Wi)try{var jo={};Object.defineProperty(jo,"passive",{get:function(){td=!0}}),window.addEventListener("test",jo,jo),window.removeEventListener("test",jo,jo)}catch{td=!1}function SS(n,e,t,i,r,s,o,a,l){var u=Array.prototype.slice.call(arguments,3);try{e.apply(t,u)}catch(c){this.onError(c)}}var da=!1,pu=null,mu=!1,nd=null,MS={onError:function(n){da=!0,pu=n}};function ES(n,e,t,i,r,s,o,a,l){da=!1,pu=null,SS.apply(MS,arguments)}function TS(n,e,t,i,r,s,o,a,l){if(ES.apply(this,arguments),da){if(da){var u=pu;da=!1,pu=null}else throw Error(ne(198));mu||(mu=!0,nd=u)}}function Es(n){var e=n,t=n;if(n.alternate)for(;e.return;)e=e.return;else{n=e;do e=n,e.flags&4098&&(t=e.return),n=e.return;while(n)}return e.tag===3?t:null}function h0(n){if(n.tag===13){var e=n.memoizedState;if(e===null&&(n=n.alternate,n!==null&&(e=n.memoizedState)),e!==null)return e.dehydrated}return null}function Xp(n){if(Es(n)!==n)throw Error(ne(188))}function wS(n){var e=n.alternate;if(!e){if(e=Es(n),e===null)throw Error(ne(188));return e!==n?null:n}for(var t=n,i=e;;){var r=t.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){t=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===t)return Xp(r),n;if(s===i)return Xp(r),e;s=s.sibling}throw Error(ne(188))}if(t.return!==i.return)t=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===t){o=!0,t=r,i=s;break}if(a===i){o=!0,i=r,t=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===t){o=!0,t=s,i=r;break}if(a===i){o=!0,i=s,t=r;break}a=a.sibling}if(!o)throw Error(ne(189))}}if(t.alternate!==i)throw Error(ne(190))}if(t.tag!==3)throw Error(ne(188));return t.stateNode.current===t?n:e}function p0(n){return n=wS(n),n!==null?m0(n):null}function m0(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var e=m0(n);if(e!==null)return e;n=n.sibling}return null}var g0=Ln.unstable_scheduleCallback,Yp=Ln.unstable_cancelCallback,AS=Ln.unstable_shouldYield,CS=Ln.unstable_requestPaint,xt=Ln.unstable_now,RS=Ln.unstable_getCurrentPriorityLevel,vh=Ln.unstable_ImmediatePriority,_0=Ln.unstable_UserBlockingPriority,gu=Ln.unstable_NormalPriority,bS=Ln.unstable_LowPriority,v0=Ln.unstable_IdlePriority,$u=null,vi=null;function PS(n){if(vi&&typeof vi.onCommitFiberRoot=="function")try{vi.onCommitFiberRoot($u,n,void 0,(n.current.flags&128)===128)}catch{}}var ai=Math.clz32?Math.clz32:US,LS=Math.log,DS=Math.LN2;function US(n){return n>>>=0,n===0?32:31-(LS(n)/DS|0)|0}var pl=64,ml=4194304;function oa(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function _u(n,e){var t=n.pendingLanes;if(t===0)return 0;var i=0,r=n.suspendedLanes,s=n.pingedLanes,o=t&268435455;if(o!==0){var a=o&~r;a!==0?i=oa(a):(s&=o,s!==0&&(i=oa(s)))}else o=t&~r,o!==0?i=oa(o):s!==0&&(i=oa(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=t&16),e=n.entangledLanes,e!==0)for(n=n.entanglements,e&=i;0<e;)t=31-ai(e),r=1<<t,i|=n[t],e&=~r;return i}function NS(n,e){switch(n){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function IS(n,e){for(var t=n.suspendedLanes,i=n.pingedLanes,r=n.expirationTimes,s=n.pendingLanes;0<s;){var o=31-ai(s),a=1<<o,l=r[o];l===-1?(!(a&t)||a&i)&&(r[o]=NS(a,e)):l<=e&&(n.expiredLanes|=a),s&=~a}}function id(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function x0(){var n=pl;return pl<<=1,!(pl&4194240)&&(pl=64),n}function bc(n){for(var e=[],t=0;31>t;t++)e.push(n);return e}function Ja(n,e,t){n.pendingLanes|=e,e!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,e=31-ai(e),n[e]=t}function OS(n,e){var t=n.pendingLanes&~e;n.pendingLanes=e,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=e,n.mutableReadLanes&=e,n.entangledLanes&=e,e=n.entanglements;var i=n.eventTimes;for(n=n.expirationTimes;0<t;){var r=31-ai(t),s=1<<r;e[r]=0,i[r]=-1,n[r]=-1,t&=~s}}function xh(n,e){var t=n.entangledLanes|=e;for(n=n.entanglements;t;){var i=31-ai(t),r=1<<i;r&e|n[i]&e&&(n[i]|=e),t&=~r}}var Ze=0;function y0(n){return n&=-n,1<n?4<n?n&268435455?16:536870912:4:1}var S0,yh,M0,E0,T0,rd=!1,gl=[],pr=null,mr=null,gr=null,Ca=new Map,Ra=new Map,rr=[],FS="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function qp(n,e){switch(n){case"focusin":case"focusout":pr=null;break;case"dragenter":case"dragleave":mr=null;break;case"mouseover":case"mouseout":gr=null;break;case"pointerover":case"pointerout":Ca.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ra.delete(e.pointerId)}}function Xo(n,e,t,i,r,s){return n===null||n.nativeEvent!==s?(n={blockedOn:e,domEventName:t,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=tl(e),e!==null&&yh(e)),n):(n.eventSystemFlags|=i,e=n.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),n)}function kS(n,e,t,i,r){switch(e){case"focusin":return pr=Xo(pr,n,e,t,i,r),!0;case"dragenter":return mr=Xo(mr,n,e,t,i,r),!0;case"mouseover":return gr=Xo(gr,n,e,t,i,r),!0;case"pointerover":var s=r.pointerId;return Ca.set(s,Xo(Ca.get(s)||null,n,e,t,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ra.set(s,Xo(Ra.get(s)||null,n,e,t,i,r)),!0}return!1}function w0(n){var e=Qr(n.target);if(e!==null){var t=Es(e);if(t!==null){if(e=t.tag,e===13){if(e=h0(t),e!==null){n.blockedOn=e,T0(n.priority,function(){M0(t)});return}}else if(e===3&&t.stateNode.current.memoizedState.isDehydrated){n.blockedOn=t.tag===3?t.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Ql(n){if(n.blockedOn!==null)return!1;for(var e=n.targetContainers;0<e.length;){var t=sd(n.domEventName,n.eventSystemFlags,e[0],n.nativeEvent);if(t===null){t=n.nativeEvent;var i=new t.constructor(t.type,t);Jf=i,t.target.dispatchEvent(i),Jf=null}else return e=tl(t),e!==null&&yh(e),n.blockedOn=t,!1;e.shift()}return!0}function $p(n,e,t){Ql(n)&&t.delete(e)}function zS(){rd=!1,pr!==null&&Ql(pr)&&(pr=null),mr!==null&&Ql(mr)&&(mr=null),gr!==null&&Ql(gr)&&(gr=null),Ca.forEach($p),Ra.forEach($p)}function Yo(n,e){n.blockedOn===e&&(n.blockedOn=null,rd||(rd=!0,Ln.unstable_scheduleCallback(Ln.unstable_NormalPriority,zS)))}function ba(n){function e(r){return Yo(r,n)}if(0<gl.length){Yo(gl[0],n);for(var t=1;t<gl.length;t++){var i=gl[t];i.blockedOn===n&&(i.blockedOn=null)}}for(pr!==null&&Yo(pr,n),mr!==null&&Yo(mr,n),gr!==null&&Yo(gr,n),Ca.forEach(e),Ra.forEach(e),t=0;t<rr.length;t++)i=rr[t],i.blockedOn===n&&(i.blockedOn=null);for(;0<rr.length&&(t=rr[0],t.blockedOn===null);)w0(t),t.blockedOn===null&&rr.shift()}var fo=Ki.ReactCurrentBatchConfig,vu=!0;function BS(n,e,t,i){var r=Ze,s=fo.transition;fo.transition=null;try{Ze=1,Sh(n,e,t,i)}finally{Ze=r,fo.transition=s}}function HS(n,e,t,i){var r=Ze,s=fo.transition;fo.transition=null;try{Ze=4,Sh(n,e,t,i)}finally{Ze=r,fo.transition=s}}function Sh(n,e,t,i){if(vu){var r=sd(n,e,t,i);if(r===null)zc(n,e,i,xu,t),qp(n,i);else if(kS(r,n,e,t,i))i.stopPropagation();else if(qp(n,i),e&4&&-1<FS.indexOf(n)){for(;r!==null;){var s=tl(r);if(s!==null&&S0(s),s=sd(n,e,t,i),s===null&&zc(n,e,i,xu,t),s===r)break;r=s}r!==null&&i.stopPropagation()}else zc(n,e,i,null,t)}}var xu=null;function sd(n,e,t,i){if(xu=null,n=_h(i),n=Qr(n),n!==null)if(e=Es(n),e===null)n=null;else if(t=e.tag,t===13){if(n=h0(e),n!==null)return n;n=null}else if(t===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;n=null}else e!==n&&(n=null);return xu=n,null}function A0(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(RS()){case vh:return 1;case _0:return 4;case gu:case bS:return 16;case v0:return 536870912;default:return 16}default:return 16}}var or=null,Mh=null,Jl=null;function C0(){if(Jl)return Jl;var n,e=Mh,t=e.length,i,r="value"in or?or.value:or.textContent,s=r.length;for(n=0;n<t&&e[n]===r[n];n++);var o=t-n;for(i=1;i<=o&&e[t-i]===r[s-i];i++);return Jl=r.slice(n,1<i?1-i:void 0)}function eu(n){var e=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&e===13&&(n=13)):n=e,n===10&&(n=13),32<=n||n===13?n:0}function _l(){return!0}function Kp(){return!1}function Nn(n){function e(t,i,r,s,o){this._reactName=t,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in n)n.hasOwnProperty(a)&&(t=n[a],this[a]=t?t(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?_l:Kp,this.isPropagationStopped=Kp,this}return ft(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var t=this.nativeEvent;t&&(t.preventDefault?t.preventDefault():typeof t.returnValue!="unknown"&&(t.returnValue=!1),this.isDefaultPrevented=_l)},stopPropagation:function(){var t=this.nativeEvent;t&&(t.stopPropagation?t.stopPropagation():typeof t.cancelBubble!="unknown"&&(t.cancelBubble=!0),this.isPropagationStopped=_l)},persist:function(){},isPersistent:_l}),e}var ko={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Eh=Nn(ko),el=ft({},ko,{view:0,detail:0}),VS=Nn(el),Pc,Lc,qo,Ku=ft({},el,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Th,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==qo&&(qo&&n.type==="mousemove"?(Pc=n.screenX-qo.screenX,Lc=n.screenY-qo.screenY):Lc=Pc=0,qo=n),Pc)},movementY:function(n){return"movementY"in n?n.movementY:Lc}}),Zp=Nn(Ku),GS=ft({},Ku,{dataTransfer:0}),WS=Nn(GS),jS=ft({},el,{relatedTarget:0}),Dc=Nn(jS),XS=ft({},ko,{animationName:0,elapsedTime:0,pseudoElement:0}),YS=Nn(XS),qS=ft({},ko,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),$S=Nn(qS),KS=ft({},ko,{data:0}),Qp=Nn(KS),ZS={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},QS={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},JS={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function eM(n){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(n):(n=JS[n])?!!e[n]:!1}function Th(){return eM}var tM=ft({},el,{key:function(n){if(n.key){var e=ZS[n.key]||n.key;if(e!=="Unidentified")return e}return n.type==="keypress"?(n=eu(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?QS[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Th,charCode:function(n){return n.type==="keypress"?eu(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?eu(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),nM=Nn(tM),iM=ft({},Ku,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jp=Nn(iM),rM=ft({},el,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Th}),sM=Nn(rM),oM=ft({},ko,{propertyName:0,elapsedTime:0,pseudoElement:0}),aM=Nn(oM),lM=ft({},Ku,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),uM=Nn(lM),cM=[9,13,27,32],wh=Wi&&"CompositionEvent"in window,ha=null;Wi&&"documentMode"in document&&(ha=document.documentMode);var fM=Wi&&"TextEvent"in window&&!ha,R0=Wi&&(!wh||ha&&8<ha&&11>=ha),em=String.fromCharCode(32),tm=!1;function b0(n,e){switch(n){case"keyup":return cM.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function P0(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var $s=!1;function dM(n,e){switch(n){case"compositionend":return P0(e);case"keypress":return e.which!==32?null:(tm=!0,em);case"textInput":return n=e.data,n===em&&tm?null:n;default:return null}}function hM(n,e){if($s)return n==="compositionend"||!wh&&b0(n,e)?(n=C0(),Jl=Mh=or=null,$s=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return R0&&e.locale!=="ko"?null:e.data;default:return null}}var pM={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function nm(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e==="input"?!!pM[n.type]:e==="textarea"}function L0(n,e,t,i){l0(i),e=yu(e,"onChange"),0<e.length&&(t=new Eh("onChange","change",null,t,i),n.push({event:t,listeners:e}))}var pa=null,Pa=null;function mM(n){V0(n,0)}function Zu(n){var e=Qs(n);if(t0(e))return n}function gM(n,e){if(n==="change")return e}var D0=!1;if(Wi){var Uc;if(Wi){var Nc="oninput"in document;if(!Nc){var im=document.createElement("div");im.setAttribute("oninput","return;"),Nc=typeof im.oninput=="function"}Uc=Nc}else Uc=!1;D0=Uc&&(!document.documentMode||9<document.documentMode)}function rm(){pa&&(pa.detachEvent("onpropertychange",U0),Pa=pa=null)}function U0(n){if(n.propertyName==="value"&&Zu(Pa)){var e=[];L0(e,Pa,n,_h(n)),d0(mM,e)}}function _M(n,e,t){n==="focusin"?(rm(),pa=e,Pa=t,pa.attachEvent("onpropertychange",U0)):n==="focusout"&&rm()}function vM(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Zu(Pa)}function xM(n,e){if(n==="click")return Zu(e)}function yM(n,e){if(n==="input"||n==="change")return Zu(e)}function SM(n,e){return n===e&&(n!==0||1/n===1/e)||n!==n&&e!==e}var ci=typeof Object.is=="function"?Object.is:SM;function La(n,e){if(ci(n,e))return!0;if(typeof n!="object"||n===null||typeof e!="object"||e===null)return!1;var t=Object.keys(n),i=Object.keys(e);if(t.length!==i.length)return!1;for(i=0;i<t.length;i++){var r=t[i];if(!Hf.call(e,r)||!ci(n[r],e[r]))return!1}return!0}function sm(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function om(n,e){var t=sm(n);n=0;for(var i;t;){if(t.nodeType===3){if(i=n+t.textContent.length,n<=e&&i>=e)return{node:t,offset:e-n};n=i}e:{for(;t;){if(t.nextSibling){t=t.nextSibling;break e}t=t.parentNode}t=void 0}t=sm(t)}}function N0(n,e){return n&&e?n===e?!0:n&&n.nodeType===3?!1:e&&e.nodeType===3?N0(n,e.parentNode):"contains"in n?n.contains(e):n.compareDocumentPosition?!!(n.compareDocumentPosition(e)&16):!1:!1}function I0(){for(var n=window,e=hu();e instanceof n.HTMLIFrameElement;){try{var t=typeof e.contentWindow.location.href=="string"}catch{t=!1}if(t)n=e.contentWindow;else break;e=hu(n.document)}return e}function Ah(n){var e=n&&n.nodeName&&n.nodeName.toLowerCase();return e&&(e==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||e==="textarea"||n.contentEditable==="true")}function MM(n){var e=I0(),t=n.focusedElem,i=n.selectionRange;if(e!==t&&t&&t.ownerDocument&&N0(t.ownerDocument.documentElement,t)){if(i!==null&&Ah(t)){if(e=i.start,n=i.end,n===void 0&&(n=e),"selectionStart"in t)t.selectionStart=e,t.selectionEnd=Math.min(n,t.value.length);else if(n=(e=t.ownerDocument||document)&&e.defaultView||window,n.getSelection){n=n.getSelection();var r=t.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!n.extend&&s>i&&(r=i,i=s,s=r),r=om(t,s);var o=om(t,i);r&&o&&(n.rangeCount!==1||n.anchorNode!==r.node||n.anchorOffset!==r.offset||n.focusNode!==o.node||n.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),n.removeAllRanges(),s>i?(n.addRange(e),n.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),n.addRange(e)))}}for(e=[],n=t;n=n.parentNode;)n.nodeType===1&&e.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof t.focus=="function"&&t.focus(),t=0;t<e.length;t++)n=e[t],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var EM=Wi&&"documentMode"in document&&11>=document.documentMode,Ks=null,od=null,ma=null,ad=!1;function am(n,e,t){var i=t.window===t?t.document:t.nodeType===9?t:t.ownerDocument;ad||Ks==null||Ks!==hu(i)||(i=Ks,"selectionStart"in i&&Ah(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ma&&La(ma,i)||(ma=i,i=yu(od,"onSelect"),0<i.length&&(e=new Eh("onSelect","select",null,e,t),n.push({event:e,listeners:i}),e.target=Ks)))}function vl(n,e){var t={};return t[n.toLowerCase()]=e.toLowerCase(),t["Webkit"+n]="webkit"+e,t["Moz"+n]="moz"+e,t}var Zs={animationend:vl("Animation","AnimationEnd"),animationiteration:vl("Animation","AnimationIteration"),animationstart:vl("Animation","AnimationStart"),transitionend:vl("Transition","TransitionEnd")},Ic={},O0={};Wi&&(O0=document.createElement("div").style,"AnimationEvent"in window||(delete Zs.animationend.animation,delete Zs.animationiteration.animation,delete Zs.animationstart.animation),"TransitionEvent"in window||delete Zs.transitionend.transition);function Qu(n){if(Ic[n])return Ic[n];if(!Zs[n])return n;var e=Zs[n],t;for(t in e)if(e.hasOwnProperty(t)&&t in O0)return Ic[n]=e[t];return n}var F0=Qu("animationend"),k0=Qu("animationiteration"),z0=Qu("animationstart"),B0=Qu("transitionend"),H0=new Map,lm="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Dr(n,e){H0.set(n,e),Ms(e,[n])}for(var Oc=0;Oc<lm.length;Oc++){var Fc=lm[Oc],TM=Fc.toLowerCase(),wM=Fc[0].toUpperCase()+Fc.slice(1);Dr(TM,"on"+wM)}Dr(F0,"onAnimationEnd");Dr(k0,"onAnimationIteration");Dr(z0,"onAnimationStart");Dr("dblclick","onDoubleClick");Dr("focusin","onFocus");Dr("focusout","onBlur");Dr(B0,"onTransitionEnd");So("onMouseEnter",["mouseout","mouseover"]);So("onMouseLeave",["mouseout","mouseover"]);So("onPointerEnter",["pointerout","pointerover"]);So("onPointerLeave",["pointerout","pointerover"]);Ms("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Ms("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Ms("onBeforeInput",["compositionend","keypress","textInput","paste"]);Ms("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Ms("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Ms("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var aa="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),AM=new Set("cancel close invalid load scroll toggle".split(" ").concat(aa));function um(n,e,t){var i=n.type||"unknown-event";n.currentTarget=t,TS(i,e,void 0,n),n.currentTarget=null}function V0(n,e){e=(e&4)!==0;for(var t=0;t<n.length;t++){var i=n[t],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,u=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;um(r,a,u),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,u=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;um(r,a,u),s=l}}}if(mu)throw n=nd,mu=!1,nd=null,n}function it(n,e){var t=e[dd];t===void 0&&(t=e[dd]=new Set);var i=n+"__bubble";t.has(i)||(G0(e,n,2,!1),t.add(i))}function kc(n,e,t){var i=0;e&&(i|=4),G0(t,n,i,e)}var xl="_reactListening"+Math.random().toString(36).slice(2);function Da(n){if(!n[xl]){n[xl]=!0,K_.forEach(function(t){t!=="selectionchange"&&(AM.has(t)||kc(t,!1,n),kc(t,!0,n))});var e=n.nodeType===9?n:n.ownerDocument;e===null||e[xl]||(e[xl]=!0,kc("selectionchange",!1,e))}}function G0(n,e,t,i){switch(A0(e)){case 1:var r=BS;break;case 4:r=HS;break;default:r=Sh}t=r.bind(null,e,t,n),r=void 0,!td||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?n.addEventListener(e,t,{capture:!0,passive:r}):n.addEventListener(e,t,!0):r!==void 0?n.addEventListener(e,t,{passive:r}):n.addEventListener(e,t,!1)}function zc(n,e,t,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=Qr(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}d0(function(){var u=s,c=_h(t),d=[];e:{var h=H0.get(n);if(h!==void 0){var p=Eh,v=n;switch(n){case"keypress":if(eu(t)===0)break e;case"keydown":case"keyup":p=nM;break;case"focusin":v="focus",p=Dc;break;case"focusout":v="blur",p=Dc;break;case"beforeblur":case"afterblur":p=Dc;break;case"click":if(t.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Zp;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=WS;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=sM;break;case F0:case k0:case z0:p=YS;break;case B0:p=aM;break;case"scroll":p=VS;break;case"wheel":p=uM;break;case"copy":case"cut":case"paste":p=$S;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Jp}var g=(e&4)!==0,m=!g&&n==="scroll",f=g?h!==null?h+"Capture":null:h;g=[];for(var _=u,x;_!==null;){x=_;var y=x.stateNode;if(x.tag===5&&y!==null&&(x=y,f!==null&&(y=Aa(_,f),y!=null&&g.push(Ua(_,y,x)))),m)break;_=_.return}0<g.length&&(h=new p(h,v,null,t,c),d.push({event:h,listeners:g}))}}if(!(e&7)){e:{if(h=n==="mouseover"||n==="pointerover",p=n==="mouseout"||n==="pointerout",h&&t!==Jf&&(v=t.relatedTarget||t.fromElement)&&(Qr(v)||v[ji]))break e;if((p||h)&&(h=c.window===c?c:(h=c.ownerDocument)?h.defaultView||h.parentWindow:window,p?(v=t.relatedTarget||t.toElement,p=u,v=v?Qr(v):null,v!==null&&(m=Es(v),v!==m||v.tag!==5&&v.tag!==6)&&(v=null)):(p=null,v=u),p!==v)){if(g=Zp,y="onMouseLeave",f="onMouseEnter",_="mouse",(n==="pointerout"||n==="pointerover")&&(g=Jp,y="onPointerLeave",f="onPointerEnter",_="pointer"),m=p==null?h:Qs(p),x=v==null?h:Qs(v),h=new g(y,_+"leave",p,t,c),h.target=m,h.relatedTarget=x,y=null,Qr(c)===u&&(g=new g(f,_+"enter",v,t,c),g.target=x,g.relatedTarget=m,y=g),m=y,p&&v)t:{for(g=p,f=v,_=0,x=g;x;x=As(x))_++;for(x=0,y=f;y;y=As(y))x++;for(;0<_-x;)g=As(g),_--;for(;0<x-_;)f=As(f),x--;for(;_--;){if(g===f||f!==null&&g===f.alternate)break t;g=As(g),f=As(f)}g=null}else g=null;p!==null&&cm(d,h,p,g,!1),v!==null&&m!==null&&cm(d,m,v,g,!0)}}e:{if(h=u?Qs(u):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var S=gM;else if(nm(h))if(D0)S=yM;else{S=vM;var E=_M}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(S=xM);if(S&&(S=S(n,u))){L0(d,S,t,c);break e}E&&E(n,h,u),n==="focusout"&&(E=h._wrapperState)&&E.controlled&&h.type==="number"&&qf(h,"number",h.value)}switch(E=u?Qs(u):window,n){case"focusin":(nm(E)||E.contentEditable==="true")&&(Ks=E,od=u,ma=null);break;case"focusout":ma=od=Ks=null;break;case"mousedown":ad=!0;break;case"contextmenu":case"mouseup":case"dragend":ad=!1,am(d,t,c);break;case"selectionchange":if(EM)break;case"keydown":case"keyup":am(d,t,c)}var A;if(wh)e:{switch(n){case"compositionstart":var C="onCompositionStart";break e;case"compositionend":C="onCompositionEnd";break e;case"compositionupdate":C="onCompositionUpdate";break e}C=void 0}else $s?b0(n,t)&&(C="onCompositionEnd"):n==="keydown"&&t.keyCode===229&&(C="onCompositionStart");C&&(R0&&t.locale!=="ko"&&($s||C!=="onCompositionStart"?C==="onCompositionEnd"&&$s&&(A=C0()):(or=c,Mh="value"in or?or.value:or.textContent,$s=!0)),E=yu(u,C),0<E.length&&(C=new Qp(C,n,null,t,c),d.push({event:C,listeners:E}),A?C.data=A:(A=P0(t),A!==null&&(C.data=A)))),(A=fM?dM(n,t):hM(n,t))&&(u=yu(u,"onBeforeInput"),0<u.length&&(c=new Qp("onBeforeInput","beforeinput",null,t,c),d.push({event:c,listeners:u}),c.data=A))}V0(d,e)})}function Ua(n,e,t){return{instance:n,listener:e,currentTarget:t}}function yu(n,e){for(var t=e+"Capture",i=[];n!==null;){var r=n,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Aa(n,t),s!=null&&i.unshift(Ua(n,s,r)),s=Aa(n,e),s!=null&&i.push(Ua(n,s,r))),n=n.return}return i}function As(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function cm(n,e,t,i,r){for(var s=e._reactName,o=[];t!==null&&t!==i;){var a=t,l=a.alternate,u=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&u!==null&&(a=u,r?(l=Aa(t,s),l!=null&&o.unshift(Ua(t,l,a))):r||(l=Aa(t,s),l!=null&&o.push(Ua(t,l,a)))),t=t.return}o.length!==0&&n.push({event:e,listeners:o})}var CM=/\r\n?/g,RM=/\u0000|\uFFFD/g;function fm(n){return(typeof n=="string"?n:""+n).replace(CM,`
`).replace(RM,"")}function yl(n,e,t){if(e=fm(e),fm(n)!==e&&t)throw Error(ne(425))}function Su(){}var ld=null,ud=null;function cd(n,e){return n==="textarea"||n==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var fd=typeof setTimeout=="function"?setTimeout:void 0,bM=typeof clearTimeout=="function"?clearTimeout:void 0,dm=typeof Promise=="function"?Promise:void 0,PM=typeof queueMicrotask=="function"?queueMicrotask:typeof dm<"u"?function(n){return dm.resolve(null).then(n).catch(LM)}:fd;function LM(n){setTimeout(function(){throw n})}function Bc(n,e){var t=e,i=0;do{var r=t.nextSibling;if(n.removeChild(t),r&&r.nodeType===8)if(t=r.data,t==="/$"){if(i===0){n.removeChild(r),ba(e);return}i--}else t!=="$"&&t!=="$?"&&t!=="$!"||i++;t=r}while(t);ba(e)}function _r(n){for(;n!=null;n=n.nextSibling){var e=n.nodeType;if(e===1||e===3)break;if(e===8){if(e=n.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return n}function hm(n){n=n.previousSibling;for(var e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="$"||t==="$!"||t==="$?"){if(e===0)return n;e--}else t==="/$"&&e++}n=n.previousSibling}return null}var zo=Math.random().toString(36).slice(2),mi="__reactFiber$"+zo,Na="__reactProps$"+zo,ji="__reactContainer$"+zo,dd="__reactEvents$"+zo,DM="__reactListeners$"+zo,UM="__reactHandles$"+zo;function Qr(n){var e=n[mi];if(e)return e;for(var t=n.parentNode;t;){if(e=t[ji]||t[mi]){if(t=e.alternate,e.child!==null||t!==null&&t.child!==null)for(n=hm(n);n!==null;){if(t=n[mi])return t;n=hm(n)}return e}n=t,t=n.parentNode}return null}function tl(n){return n=n[mi]||n[ji],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Qs(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(ne(33))}function Ju(n){return n[Na]||null}var hd=[],Js=-1;function Ur(n){return{current:n}}function rt(n){0>Js||(n.current=hd[Js],hd[Js]=null,Js--)}function tt(n,e){Js++,hd[Js]=n.current,n.current=e}var Cr={},Kt=Ur(Cr),cn=Ur(!1),hs=Cr;function Mo(n,e){var t=n.type.contextTypes;if(!t)return Cr;var i=n.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in t)r[s]=e[s];return i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=e,n.__reactInternalMemoizedMaskedChildContext=r),r}function fn(n){return n=n.childContextTypes,n!=null}function Mu(){rt(cn),rt(Kt)}function pm(n,e,t){if(Kt.current!==Cr)throw Error(ne(168));tt(Kt,e),tt(cn,t)}function W0(n,e,t){var i=n.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return t;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(ne(108,_S(n)||"Unknown",r));return ft({},t,i)}function Eu(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Cr,hs=Kt.current,tt(Kt,n),tt(cn,cn.current),!0}function mm(n,e,t){var i=n.stateNode;if(!i)throw Error(ne(169));t?(n=W0(n,e,hs),i.__reactInternalMemoizedMergedChildContext=n,rt(cn),rt(Kt),tt(Kt,n)):rt(cn),tt(cn,t)}var Ii=null,ec=!1,Hc=!1;function j0(n){Ii===null?Ii=[n]:Ii.push(n)}function NM(n){ec=!0,j0(n)}function Nr(){if(!Hc&&Ii!==null){Hc=!0;var n=0,e=Ze;try{var t=Ii;for(Ze=1;n<t.length;n++){var i=t[n];do i=i(!0);while(i!==null)}Ii=null,ec=!1}catch(r){throw Ii!==null&&(Ii=Ii.slice(n+1)),g0(vh,Nr),r}finally{Ze=e,Hc=!1}}return null}var eo=[],to=0,Tu=null,wu=0,kn=[],zn=0,ps=null,ki=1,zi="";function Xr(n,e){eo[to++]=wu,eo[to++]=Tu,Tu=n,wu=e}function X0(n,e,t){kn[zn++]=ki,kn[zn++]=zi,kn[zn++]=ps,ps=n;var i=ki;n=zi;var r=32-ai(i)-1;i&=~(1<<r),t+=1;var s=32-ai(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,ki=1<<32-ai(e)+r|t<<r|i,zi=s+n}else ki=1<<s|t<<r|i,zi=n}function Ch(n){n.return!==null&&(Xr(n,1),X0(n,1,0))}function Rh(n){for(;n===Tu;)Tu=eo[--to],eo[to]=null,wu=eo[--to],eo[to]=null;for(;n===ps;)ps=kn[--zn],kn[zn]=null,zi=kn[--zn],kn[zn]=null,ki=kn[--zn],kn[zn]=null}var Rn=null,Cn=null,st=!1,ii=null;function Y0(n,e){var t=Hn(5,null,null,0);t.elementType="DELETED",t.stateNode=e,t.return=n,e=n.deletions,e===null?(n.deletions=[t],n.flags|=16):e.push(t)}function gm(n,e){switch(n.tag){case 5:var t=n.type;return e=e.nodeType!==1||t.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(n.stateNode=e,Rn=n,Cn=_r(e.firstChild),!0):!1;case 6:return e=n.pendingProps===""||e.nodeType!==3?null:e,e!==null?(n.stateNode=e,Rn=n,Cn=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(t=ps!==null?{id:ki,overflow:zi}:null,n.memoizedState={dehydrated:e,treeContext:t,retryLane:1073741824},t=Hn(18,null,null,0),t.stateNode=e,t.return=n,n.child=t,Rn=n,Cn=null,!0):!1;default:return!1}}function pd(n){return(n.mode&1)!==0&&(n.flags&128)===0}function md(n){if(st){var e=Cn;if(e){var t=e;if(!gm(n,e)){if(pd(n))throw Error(ne(418));e=_r(t.nextSibling);var i=Rn;e&&gm(n,e)?Y0(i,t):(n.flags=n.flags&-4097|2,st=!1,Rn=n)}}else{if(pd(n))throw Error(ne(418));n.flags=n.flags&-4097|2,st=!1,Rn=n}}}function _m(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Rn=n}function Sl(n){if(n!==Rn)return!1;if(!st)return _m(n),st=!0,!1;var e;if((e=n.tag!==3)&&!(e=n.tag!==5)&&(e=n.type,e=e!=="head"&&e!=="body"&&!cd(n.type,n.memoizedProps)),e&&(e=Cn)){if(pd(n))throw q0(),Error(ne(418));for(;e;)Y0(n,e),e=_r(e.nextSibling)}if(_m(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(ne(317));e:{for(n=n.nextSibling,e=0;n;){if(n.nodeType===8){var t=n.data;if(t==="/$"){if(e===0){Cn=_r(n.nextSibling);break e}e--}else t!=="$"&&t!=="$!"&&t!=="$?"||e++}n=n.nextSibling}Cn=null}}else Cn=Rn?_r(n.stateNode.nextSibling):null;return!0}function q0(){for(var n=Cn;n;)n=_r(n.nextSibling)}function Eo(){Cn=Rn=null,st=!1}function bh(n){ii===null?ii=[n]:ii.push(n)}var IM=Ki.ReactCurrentBatchConfig;function ti(n,e){if(n&&n.defaultProps){e=ft({},e),n=n.defaultProps;for(var t in n)e[t]===void 0&&(e[t]=n[t]);return e}return e}var Au=Ur(null),Cu=null,no=null,Ph=null;function Lh(){Ph=no=Cu=null}function Dh(n){var e=Au.current;rt(Au),n._currentValue=e}function gd(n,e,t){for(;n!==null;){var i=n.alternate;if((n.childLanes&e)!==e?(n.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),n===t)break;n=n.return}}function ho(n,e){Cu=n,Ph=no=null,n=n.dependencies,n!==null&&n.firstContext!==null&&(n.lanes&e&&(un=!0),n.firstContext=null)}function Xn(n){var e=n._currentValue;if(Ph!==n)if(n={context:n,memoizedValue:e,next:null},no===null){if(Cu===null)throw Error(ne(308));no=n,Cu.dependencies={lanes:0,firstContext:n}}else no=no.next=n;return e}var Jr=null;function Uh(n){Jr===null?Jr=[n]:Jr.push(n)}function $0(n,e,t,i){var r=e.interleaved;return r===null?(t.next=t,Uh(e)):(t.next=r.next,r.next=t),e.interleaved=t,Xi(n,i)}function Xi(n,e){n.lanes|=e;var t=n.alternate;for(t!==null&&(t.lanes|=e),t=n,n=n.return;n!==null;)n.childLanes|=e,t=n.alternate,t!==null&&(t.childLanes|=e),t=n,n=n.return;return t.tag===3?t.stateNode:null}var ir=!1;function Nh(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function K0(n,e){n=n.updateQueue,e.updateQueue===n&&(e.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function Vi(n,e){return{eventTime:n,lane:e,tag:0,payload:null,callback:null,next:null}}function vr(n,e,t){var i=n.updateQueue;if(i===null)return null;if(i=i.shared,Xe&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Xi(n,t)}return r=i.interleaved,r===null?(e.next=e,Uh(i)):(e.next=r.next,r.next=e),i.interleaved=e,Xi(n,t)}function tu(n,e,t){if(e=e.updateQueue,e!==null&&(e=e.shared,(t&4194240)!==0)){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,xh(n,t)}}function vm(n,e){var t=n.updateQueue,i=n.alternate;if(i!==null&&(i=i.updateQueue,t===i)){var r=null,s=null;if(t=t.firstBaseUpdate,t!==null){do{var o={eventTime:t.eventTime,lane:t.lane,tag:t.tag,payload:t.payload,callback:t.callback,next:null};s===null?r=s=o:s=s.next=o,t=t.next}while(t!==null);s===null?r=s=e:s=s.next=e}else r=s=e;t={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},n.updateQueue=t;return}n=t.lastBaseUpdate,n===null?t.firstBaseUpdate=e:n.next=e,t.lastBaseUpdate=e}function Ru(n,e,t,i){var r=n.updateQueue;ir=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,u=l.next;l.next=null,o===null?s=u:o.next=u,o=l;var c=n.alternate;c!==null&&(c=c.updateQueue,a=c.lastBaseUpdate,a!==o&&(a===null?c.firstBaseUpdate=u:a.next=u,c.lastBaseUpdate=l))}if(s!==null){var d=r.baseState;o=0,c=u=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){c!==null&&(c=c.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var v=n,g=a;switch(h=e,p=t,g.tag){case 1:if(v=g.payload,typeof v=="function"){d=v.call(p,d,h);break e}d=v;break e;case 3:v.flags=v.flags&-65537|128;case 0:if(v=g.payload,h=typeof v=="function"?v.call(p,d,h):v,h==null)break e;d=ft({},d,h);break e;case 2:ir=!0}}a.callback!==null&&a.lane!==0&&(n.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},c===null?(u=c=p,l=d):c=c.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(1);if(c===null&&(l=d),r.baseState=l,r.firstBaseUpdate=u,r.lastBaseUpdate=c,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);gs|=o,n.lanes=o,n.memoizedState=d}}function xm(n,e,t){if(n=e.effects,e.effects=null,n!==null)for(e=0;e<n.length;e++){var i=n[e],r=i.callback;if(r!==null){if(i.callback=null,i=t,typeof r!="function")throw Error(ne(191,r));r.call(i)}}}var Z0=new $_.Component().refs;function _d(n,e,t,i){e=n.memoizedState,t=t(i,e),t=t==null?e:ft({},e,t),n.memoizedState=t,n.lanes===0&&(n.updateQueue.baseState=t)}var tc={isMounted:function(n){return(n=n._reactInternals)?Es(n)===n:!1},enqueueSetState:function(n,e,t){n=n._reactInternals;var i=sn(),r=yr(n),s=Vi(i,r);s.payload=e,t!=null&&(s.callback=t),e=vr(n,s,r),e!==null&&(li(e,n,r,i),tu(e,n,r))},enqueueReplaceState:function(n,e,t){n=n._reactInternals;var i=sn(),r=yr(n),s=Vi(i,r);s.tag=1,s.payload=e,t!=null&&(s.callback=t),e=vr(n,s,r),e!==null&&(li(e,n,r,i),tu(e,n,r))},enqueueForceUpdate:function(n,e){n=n._reactInternals;var t=sn(),i=yr(n),r=Vi(t,i);r.tag=2,e!=null&&(r.callback=e),e=vr(n,r,i),e!==null&&(li(e,n,i,t),tu(e,n,i))}};function ym(n,e,t,i,r,s,o){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!La(t,i)||!La(r,s):!0}function Q0(n,e,t){var i=!1,r=Cr,s=e.contextType;return typeof s=="object"&&s!==null?s=Xn(s):(r=fn(e)?hs:Kt.current,i=e.contextTypes,s=(i=i!=null)?Mo(n,r):Cr),e=new e(t,s),n.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=tc,n.stateNode=e,e._reactInternals=n,i&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=s),e}function Sm(n,e,t,i){n=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(t,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(t,i),e.state!==n&&tc.enqueueReplaceState(e,e.state,null)}function vd(n,e,t,i){var r=n.stateNode;r.props=t,r.state=n.memoizedState,r.refs=Z0,Nh(n);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Xn(s):(s=fn(e)?hs:Kt.current,r.context=Mo(n,s)),r.state=n.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(_d(n,e,s,t),r.state=n.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&tc.enqueueReplaceState(r,r.state,null),Ru(n,t,r,i),r.state=n.memoizedState),typeof r.componentDidMount=="function"&&(n.flags|=4194308)}function $o(n,e,t){if(n=t.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(t._owner){if(t=t._owner,t){if(t.tag!==1)throw Error(ne(309));var i=t.stateNode}if(!i)throw Error(ne(147,n));var r=i,s=""+n;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;a===Z0&&(a=r.refs={}),o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof n!="string")throw Error(ne(284));if(!t._owner)throw Error(ne(290,n))}return n}function Ml(n,e){throw n=Object.prototype.toString.call(e),Error(ne(31,n==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":n))}function Mm(n){var e=n._init;return e(n._payload)}function J0(n){function e(f,_){if(n){var x=f.deletions;x===null?(f.deletions=[_],f.flags|=16):x.push(_)}}function t(f,_){if(!n)return null;for(;_!==null;)e(f,_),_=_.sibling;return null}function i(f,_){for(f=new Map;_!==null;)_.key!==null?f.set(_.key,_):f.set(_.index,_),_=_.sibling;return f}function r(f,_){return f=Sr(f,_),f.index=0,f.sibling=null,f}function s(f,_,x){return f.index=x,n?(x=f.alternate,x!==null?(x=x.index,x<_?(f.flags|=2,_):x):(f.flags|=2,_)):(f.flags|=1048576,_)}function o(f){return n&&f.alternate===null&&(f.flags|=2),f}function a(f,_,x,y){return _===null||_.tag!==6?(_=qc(x,f.mode,y),_.return=f,_):(_=r(_,x),_.return=f,_)}function l(f,_,x,y){var S=x.type;return S===qs?c(f,_,x.props.children,y,x.key):_!==null&&(_.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===nr&&Mm(S)===_.type)?(y=r(_,x.props),y.ref=$o(f,_,x),y.return=f,y):(y=au(x.type,x.key,x.props,null,f.mode,y),y.ref=$o(f,_,x),y.return=f,y)}function u(f,_,x,y){return _===null||_.tag!==4||_.stateNode.containerInfo!==x.containerInfo||_.stateNode.implementation!==x.implementation?(_=$c(x,f.mode,y),_.return=f,_):(_=r(_,x.children||[]),_.return=f,_)}function c(f,_,x,y,S){return _===null||_.tag!==7?(_=is(x,f.mode,y,S),_.return=f,_):(_=r(_,x),_.return=f,_)}function d(f,_,x){if(typeof _=="string"&&_!==""||typeof _=="number")return _=qc(""+_,f.mode,x),_.return=f,_;if(typeof _=="object"&&_!==null){switch(_.$$typeof){case fl:return x=au(_.type,_.key,_.props,null,f.mode,x),x.ref=$o(f,null,_),x.return=f,x;case Ys:return _=$c(_,f.mode,x),_.return=f,_;case nr:var y=_._init;return d(f,y(_._payload),x)}if(sa(_)||Wo(_))return _=is(_,f.mode,x,null),_.return=f,_;Ml(f,_)}return null}function h(f,_,x,y){var S=_!==null?_.key:null;if(typeof x=="string"&&x!==""||typeof x=="number")return S!==null?null:a(f,_,""+x,y);if(typeof x=="object"&&x!==null){switch(x.$$typeof){case fl:return x.key===S?l(f,_,x,y):null;case Ys:return x.key===S?u(f,_,x,y):null;case nr:return S=x._init,h(f,_,S(x._payload),y)}if(sa(x)||Wo(x))return S!==null?null:c(f,_,x,y,null);Ml(f,x)}return null}function p(f,_,x,y,S){if(typeof y=="string"&&y!==""||typeof y=="number")return f=f.get(x)||null,a(_,f,""+y,S);if(typeof y=="object"&&y!==null){switch(y.$$typeof){case fl:return f=f.get(y.key===null?x:y.key)||null,l(_,f,y,S);case Ys:return f=f.get(y.key===null?x:y.key)||null,u(_,f,y,S);case nr:var E=y._init;return p(f,_,x,E(y._payload),S)}if(sa(y)||Wo(y))return f=f.get(x)||null,c(_,f,y,S,null);Ml(_,y)}return null}function v(f,_,x,y){for(var S=null,E=null,A=_,C=_=0,M=null;A!==null&&C<x.length;C++){A.index>C?(M=A,A=null):M=A.sibling;var T=h(f,A,x[C],y);if(T===null){A===null&&(A=M);break}n&&A&&T.alternate===null&&e(f,A),_=s(T,_,C),E===null?S=T:E.sibling=T,E=T,A=M}if(C===x.length)return t(f,A),st&&Xr(f,C),S;if(A===null){for(;C<x.length;C++)A=d(f,x[C],y),A!==null&&(_=s(A,_,C),E===null?S=A:E.sibling=A,E=A);return st&&Xr(f,C),S}for(A=i(f,A);C<x.length;C++)M=p(A,f,C,x[C],y),M!==null&&(n&&M.alternate!==null&&A.delete(M.key===null?C:M.key),_=s(M,_,C),E===null?S=M:E.sibling=M,E=M);return n&&A.forEach(function(U){return e(f,U)}),st&&Xr(f,C),S}function g(f,_,x,y){var S=Wo(x);if(typeof S!="function")throw Error(ne(150));if(x=S.call(x),x==null)throw Error(ne(151));for(var E=S=null,A=_,C=_=0,M=null,T=x.next();A!==null&&!T.done;C++,T=x.next()){A.index>C?(M=A,A=null):M=A.sibling;var U=h(f,A,T.value,y);if(U===null){A===null&&(A=M);break}n&&A&&U.alternate===null&&e(f,A),_=s(U,_,C),E===null?S=U:E.sibling=U,E=U,A=M}if(T.done)return t(f,A),st&&Xr(f,C),S;if(A===null){for(;!T.done;C++,T=x.next())T=d(f,T.value,y),T!==null&&(_=s(T,_,C),E===null?S=T:E.sibling=T,E=T);return st&&Xr(f,C),S}for(A=i(f,A);!T.done;C++,T=x.next())T=p(A,f,C,T.value,y),T!==null&&(n&&T.alternate!==null&&A.delete(T.key===null?C:T.key),_=s(T,_,C),E===null?S=T:E.sibling=T,E=T);return n&&A.forEach(function(O){return e(f,O)}),st&&Xr(f,C),S}function m(f,_,x,y){if(typeof x=="object"&&x!==null&&x.type===qs&&x.key===null&&(x=x.props.children),typeof x=="object"&&x!==null){switch(x.$$typeof){case fl:e:{for(var S=x.key,E=_;E!==null;){if(E.key===S){if(S=x.type,S===qs){if(E.tag===7){t(f,E.sibling),_=r(E,x.props.children),_.return=f,f=_;break e}}else if(E.elementType===S||typeof S=="object"&&S!==null&&S.$$typeof===nr&&Mm(S)===E.type){t(f,E.sibling),_=r(E,x.props),_.ref=$o(f,E,x),_.return=f,f=_;break e}t(f,E);break}else e(f,E);E=E.sibling}x.type===qs?(_=is(x.props.children,f.mode,y,x.key),_.return=f,f=_):(y=au(x.type,x.key,x.props,null,f.mode,y),y.ref=$o(f,_,x),y.return=f,f=y)}return o(f);case Ys:e:{for(E=x.key;_!==null;){if(_.key===E)if(_.tag===4&&_.stateNode.containerInfo===x.containerInfo&&_.stateNode.implementation===x.implementation){t(f,_.sibling),_=r(_,x.children||[]),_.return=f,f=_;break e}else{t(f,_);break}else e(f,_);_=_.sibling}_=$c(x,f.mode,y),_.return=f,f=_}return o(f);case nr:return E=x._init,m(f,_,E(x._payload),y)}if(sa(x))return v(f,_,x,y);if(Wo(x))return g(f,_,x,y);Ml(f,x)}return typeof x=="string"&&x!==""||typeof x=="number"?(x=""+x,_!==null&&_.tag===6?(t(f,_.sibling),_=r(_,x),_.return=f,f=_):(t(f,_),_=qc(x,f.mode,y),_.return=f,f=_),o(f)):t(f,_)}return m}var To=J0(!0),ev=J0(!1),nl={},xi=Ur(nl),Ia=Ur(nl),Oa=Ur(nl);function es(n){if(n===nl)throw Error(ne(174));return n}function Ih(n,e){switch(tt(Oa,e),tt(Ia,n),tt(xi,nl),n=e.nodeType,n){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:Kf(null,"");break;default:n=n===8?e.parentNode:e,e=n.namespaceURI||null,n=n.tagName,e=Kf(e,n)}rt(xi),tt(xi,e)}function wo(){rt(xi),rt(Ia),rt(Oa)}function tv(n){es(Oa.current);var e=es(xi.current),t=Kf(e,n.type);e!==t&&(tt(Ia,n),tt(xi,t))}function Oh(n){Ia.current===n&&(rt(xi),rt(Ia))}var at=Ur(0);function bu(n){for(var e=n;e!==null;){if(e.tag===13){var t=e.memoizedState;if(t!==null&&(t=t.dehydrated,t===null||t.data==="$?"||t.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var Vc=[];function Fh(){for(var n=0;n<Vc.length;n++)Vc[n]._workInProgressVersionPrimary=null;Vc.length=0}var nu=Ki.ReactCurrentDispatcher,Gc=Ki.ReactCurrentBatchConfig,ms=0,ct=null,Ct=null,It=null,Pu=!1,ga=!1,Fa=0,OM=0;function Vt(){throw Error(ne(321))}function kh(n,e){if(e===null)return!1;for(var t=0;t<e.length&&t<n.length;t++)if(!ci(n[t],e[t]))return!1;return!0}function zh(n,e,t,i,r,s){if(ms=s,ct=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,nu.current=n===null||n.memoizedState===null?BM:HM,n=t(i,r),ga){s=0;do{if(ga=!1,Fa=0,25<=s)throw Error(ne(301));s+=1,It=Ct=null,e.updateQueue=null,nu.current=VM,n=t(i,r)}while(ga)}if(nu.current=Lu,e=Ct!==null&&Ct.next!==null,ms=0,It=Ct=ct=null,Pu=!1,e)throw Error(ne(300));return n}function Bh(){var n=Fa!==0;return Fa=0,n}function hi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return It===null?ct.memoizedState=It=n:It=It.next=n,It}function Yn(){if(Ct===null){var n=ct.alternate;n=n!==null?n.memoizedState:null}else n=Ct.next;var e=It===null?ct.memoizedState:It.next;if(e!==null)It=e,Ct=n;else{if(n===null)throw Error(ne(310));Ct=n,n={memoizedState:Ct.memoizedState,baseState:Ct.baseState,baseQueue:Ct.baseQueue,queue:Ct.queue,next:null},It===null?ct.memoizedState=It=n:It=It.next=n}return It}function ka(n,e){return typeof e=="function"?e(n):e}function Wc(n){var e=Yn(),t=e.queue;if(t===null)throw Error(ne(311));t.lastRenderedReducer=n;var i=Ct,r=i.baseQueue,s=t.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,t.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,u=s;do{var c=u.lane;if((ms&c)===c)l!==null&&(l=l.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),i=u.hasEagerState?u.eagerState:n(i,u.action);else{var d={lane:c,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};l===null?(a=l=d,o=i):l=l.next=d,ct.lanes|=c,gs|=c}u=u.next}while(u!==null&&u!==s);l===null?o=i:l.next=a,ci(i,e.memoizedState)||(un=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,t.lastRenderedState=i}if(n=t.interleaved,n!==null){r=n;do s=r.lane,ct.lanes|=s,gs|=s,r=r.next;while(r!==n)}else r===null&&(t.lanes=0);return[e.memoizedState,t.dispatch]}function jc(n){var e=Yn(),t=e.queue;if(t===null)throw Error(ne(311));t.lastRenderedReducer=n;var i=t.dispatch,r=t.pending,s=e.memoizedState;if(r!==null){t.pending=null;var o=r=r.next;do s=n(s,o.action),o=o.next;while(o!==r);ci(s,e.memoizedState)||(un=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),t.lastRenderedState=s}return[s,i]}function nv(){}function iv(n,e){var t=ct,i=Yn(),r=e(),s=!ci(i.memoizedState,r);if(s&&(i.memoizedState=r,un=!0),i=i.queue,Hh(ov.bind(null,t,i,n),[n]),i.getSnapshot!==e||s||It!==null&&It.memoizedState.tag&1){if(t.flags|=2048,za(9,sv.bind(null,t,i,r,e),void 0,null),Ot===null)throw Error(ne(349));ms&30||rv(t,e,r)}return r}function rv(n,e,t){n.flags|=16384,n={getSnapshot:e,value:t},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.stores=[n]):(t=e.stores,t===null?e.stores=[n]:t.push(n))}function sv(n,e,t,i){e.value=t,e.getSnapshot=i,av(e)&&lv(n)}function ov(n,e,t){return t(function(){av(e)&&lv(n)})}function av(n){var e=n.getSnapshot;n=n.value;try{var t=e();return!ci(n,t)}catch{return!0}}function lv(n){var e=Xi(n,1);e!==null&&li(e,n,1,-1)}function Em(n){var e=hi();return typeof n=="function"&&(n=n()),e.memoizedState=e.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ka,lastRenderedState:n},e.queue=n,n=n.dispatch=zM.bind(null,ct,n),[e.memoizedState,n]}function za(n,e,t,i){return n={tag:n,create:e,destroy:t,deps:i,next:null},e=ct.updateQueue,e===null?(e={lastEffect:null,stores:null},ct.updateQueue=e,e.lastEffect=n.next=n):(t=e.lastEffect,t===null?e.lastEffect=n.next=n:(i=t.next,t.next=n,n.next=i,e.lastEffect=n)),n}function uv(){return Yn().memoizedState}function iu(n,e,t,i){var r=hi();ct.flags|=n,r.memoizedState=za(1|e,t,void 0,i===void 0?null:i)}function nc(n,e,t,i){var r=Yn();i=i===void 0?null:i;var s=void 0;if(Ct!==null){var o=Ct.memoizedState;if(s=o.destroy,i!==null&&kh(i,o.deps)){r.memoizedState=za(e,t,s,i);return}}ct.flags|=n,r.memoizedState=za(1|e,t,s,i)}function Tm(n,e){return iu(8390656,8,n,e)}function Hh(n,e){return nc(2048,8,n,e)}function cv(n,e){return nc(4,2,n,e)}function fv(n,e){return nc(4,4,n,e)}function dv(n,e){if(typeof e=="function")return n=n(),e(n),function(){e(null)};if(e!=null)return n=n(),e.current=n,function(){e.current=null}}function hv(n,e,t){return t=t!=null?t.concat([n]):null,nc(4,4,dv.bind(null,e,n),t)}function Vh(){}function pv(n,e){var t=Yn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&kh(e,i[1])?i[0]:(t.memoizedState=[n,e],n)}function mv(n,e){var t=Yn();e=e===void 0?null:e;var i=t.memoizedState;return i!==null&&e!==null&&kh(e,i[1])?i[0]:(n=n(),t.memoizedState=[n,e],n)}function gv(n,e,t){return ms&21?(ci(t,e)||(t=x0(),ct.lanes|=t,gs|=t,n.baseState=!0),e):(n.baseState&&(n.baseState=!1,un=!0),n.memoizedState=t)}function FM(n,e){var t=Ze;Ze=t!==0&&4>t?t:4,n(!0);var i=Gc.transition;Gc.transition={};try{n(!1),e()}finally{Ze=t,Gc.transition=i}}function _v(){return Yn().memoizedState}function kM(n,e,t){var i=yr(n);if(t={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null},vv(n))xv(e,t);else if(t=$0(n,e,t,i),t!==null){var r=sn();li(t,n,i,r),yv(t,e,i)}}function zM(n,e,t){var i=yr(n),r={lane:i,action:t,hasEagerState:!1,eagerState:null,next:null};if(vv(n))xv(e,r);else{var s=n.alternate;if(n.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,t);if(r.hasEagerState=!0,r.eagerState=a,ci(a,o)){var l=e.interleaved;l===null?(r.next=r,Uh(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}t=$0(n,e,r,i),t!==null&&(r=sn(),li(t,n,i,r),yv(t,e,i))}}function vv(n){var e=n.alternate;return n===ct||e!==null&&e===ct}function xv(n,e){ga=Pu=!0;var t=n.pending;t===null?e.next=e:(e.next=t.next,t.next=e),n.pending=e}function yv(n,e,t){if(t&4194240){var i=e.lanes;i&=n.pendingLanes,t|=i,e.lanes=t,xh(n,t)}}var Lu={readContext:Xn,useCallback:Vt,useContext:Vt,useEffect:Vt,useImperativeHandle:Vt,useInsertionEffect:Vt,useLayoutEffect:Vt,useMemo:Vt,useReducer:Vt,useRef:Vt,useState:Vt,useDebugValue:Vt,useDeferredValue:Vt,useTransition:Vt,useMutableSource:Vt,useSyncExternalStore:Vt,useId:Vt,unstable_isNewReconciler:!1},BM={readContext:Xn,useCallback:function(n,e){return hi().memoizedState=[n,e===void 0?null:e],n},useContext:Xn,useEffect:Tm,useImperativeHandle:function(n,e,t){return t=t!=null?t.concat([n]):null,iu(4194308,4,dv.bind(null,e,n),t)},useLayoutEffect:function(n,e){return iu(4194308,4,n,e)},useInsertionEffect:function(n,e){return iu(4,2,n,e)},useMemo:function(n,e){var t=hi();return e=e===void 0?null:e,n=n(),t.memoizedState=[n,e],n},useReducer:function(n,e,t){var i=hi();return e=t!==void 0?t(e):e,i.memoizedState=i.baseState=e,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:e},i.queue=n,n=n.dispatch=kM.bind(null,ct,n),[i.memoizedState,n]},useRef:function(n){var e=hi();return n={current:n},e.memoizedState=n},useState:Em,useDebugValue:Vh,useDeferredValue:function(n){return hi().memoizedState=n},useTransition:function(){var n=Em(!1),e=n[0];return n=FM.bind(null,n[1]),hi().memoizedState=n,[e,n]},useMutableSource:function(){},useSyncExternalStore:function(n,e,t){var i=ct,r=hi();if(st){if(t===void 0)throw Error(ne(407));t=t()}else{if(t=e(),Ot===null)throw Error(ne(349));ms&30||rv(i,e,t)}r.memoizedState=t;var s={value:t,getSnapshot:e};return r.queue=s,Tm(ov.bind(null,i,s,n),[n]),i.flags|=2048,za(9,sv.bind(null,i,s,t,e),void 0,null),t},useId:function(){var n=hi(),e=Ot.identifierPrefix;if(st){var t=zi,i=ki;t=(i&~(1<<32-ai(i)-1)).toString(32)+t,e=":"+e+"R"+t,t=Fa++,0<t&&(e+="H"+t.toString(32)),e+=":"}else t=OM++,e=":"+e+"r"+t.toString(32)+":";return n.memoizedState=e},unstable_isNewReconciler:!1},HM={readContext:Xn,useCallback:pv,useContext:Xn,useEffect:Hh,useImperativeHandle:hv,useInsertionEffect:cv,useLayoutEffect:fv,useMemo:mv,useReducer:Wc,useRef:uv,useState:function(){return Wc(ka)},useDebugValue:Vh,useDeferredValue:function(n){var e=Yn();return gv(e,Ct.memoizedState,n)},useTransition:function(){var n=Wc(ka)[0],e=Yn().memoizedState;return[n,e]},useMutableSource:nv,useSyncExternalStore:iv,useId:_v,unstable_isNewReconciler:!1},VM={readContext:Xn,useCallback:pv,useContext:Xn,useEffect:Hh,useImperativeHandle:hv,useInsertionEffect:cv,useLayoutEffect:fv,useMemo:mv,useReducer:jc,useRef:uv,useState:function(){return jc(ka)},useDebugValue:Vh,useDeferredValue:function(n){var e=Yn();return Ct===null?e.memoizedState=n:gv(e,Ct.memoizedState,n)},useTransition:function(){var n=jc(ka)[0],e=Yn().memoizedState;return[n,e]},useMutableSource:nv,useSyncExternalStore:iv,useId:_v,unstable_isNewReconciler:!1};function Ao(n,e){try{var t="",i=e;do t+=gS(i),i=i.return;while(i);var r=t}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:n,source:e,stack:r,digest:null}}function Xc(n,e,t){return{value:n,source:null,stack:t??null,digest:e??null}}function xd(n,e){try{console.error(e.value)}catch(t){setTimeout(function(){throw t})}}var GM=typeof WeakMap=="function"?WeakMap:Map;function Sv(n,e,t){t=Vi(-1,t),t.tag=3,t.payload={element:null};var i=e.value;return t.callback=function(){Uu||(Uu=!0,bd=i),xd(n,e)},t}function Mv(n,e,t){t=Vi(-1,t),t.tag=3;var i=n.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;t.payload=function(){return i(r)},t.callback=function(){xd(n,e)}}var s=n.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(t.callback=function(){xd(n,e),typeof i!="function"&&(xr===null?xr=new Set([this]):xr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),t}function wm(n,e,t){var i=n.pingCache;if(i===null){i=n.pingCache=new GM;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(t)||(r.add(t),n=iE.bind(null,n,e,t),e.then(n,n))}function Am(n){do{var e;if((e=n.tag===13)&&(e=n.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return n;n=n.return}while(n!==null);return null}function Cm(n,e,t,i,r){return n.mode&1?(n.flags|=65536,n.lanes=r,n):(n===e?n.flags|=65536:(n.flags|=128,t.flags|=131072,t.flags&=-52805,t.tag===1&&(t.alternate===null?t.tag=17:(e=Vi(-1,1),e.tag=2,vr(t,e,1))),t.lanes|=1),n)}var WM=Ki.ReactCurrentOwner,un=!1;function en(n,e,t,i){e.child=n===null?ev(e,null,t,i):To(e,n.child,t,i)}function Rm(n,e,t,i,r){t=t.render;var s=e.ref;return ho(e,r),i=zh(n,e,t,i,s,r),t=Bh(),n!==null&&!un?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Yi(n,e,r)):(st&&t&&Ch(e),e.flags|=1,en(n,e,i,r),e.child)}function bm(n,e,t,i,r){if(n===null){var s=t.type;return typeof s=="function"&&!Kh(s)&&s.defaultProps===void 0&&t.compare===null&&t.defaultProps===void 0?(e.tag=15,e.type=s,Ev(n,e,s,i,r)):(n=au(t.type,null,i,e,e.mode,r),n.ref=e.ref,n.return=e,e.child=n)}if(s=n.child,!(n.lanes&r)){var o=s.memoizedProps;if(t=t.compare,t=t!==null?t:La,t(o,i)&&n.ref===e.ref)return Yi(n,e,r)}return e.flags|=1,n=Sr(s,i),n.ref=e.ref,n.return=e,e.child=n}function Ev(n,e,t,i,r){if(n!==null){var s=n.memoizedProps;if(La(s,i)&&n.ref===e.ref)if(un=!1,e.pendingProps=i=s,(n.lanes&r)!==0)n.flags&131072&&(un=!0);else return e.lanes=n.lanes,Yi(n,e,r)}return yd(n,e,t,i,r)}function Tv(n,e,t){var i=e.pendingProps,r=i.children,s=n!==null?n.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},tt(ro,En),En|=t;else{if(!(t&1073741824))return n=s!==null?s.baseLanes|t:t,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:n,cachePool:null,transitions:null},e.updateQueue=null,tt(ro,En),En|=n,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:t,tt(ro,En),En|=i}else s!==null?(i=s.baseLanes|t,e.memoizedState=null):i=t,tt(ro,En),En|=i;return en(n,e,r,t),e.child}function wv(n,e){var t=e.ref;(n===null&&t!==null||n!==null&&n.ref!==t)&&(e.flags|=512,e.flags|=2097152)}function yd(n,e,t,i,r){var s=fn(t)?hs:Kt.current;return s=Mo(e,s),ho(e,r),t=zh(n,e,t,i,s,r),i=Bh(),n!==null&&!un?(e.updateQueue=n.updateQueue,e.flags&=-2053,n.lanes&=~r,Yi(n,e,r)):(st&&i&&Ch(e),e.flags|=1,en(n,e,t,r),e.child)}function Pm(n,e,t,i,r){if(fn(t)){var s=!0;Eu(e)}else s=!1;if(ho(e,r),e.stateNode===null)ru(n,e),Q0(e,t,i),vd(e,t,i,r),i=!0;else if(n===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,u=t.contextType;typeof u=="object"&&u!==null?u=Xn(u):(u=fn(t)?hs:Kt.current,u=Mo(e,u));var c=t.getDerivedStateFromProps,d=typeof c=="function"||typeof o.getSnapshotBeforeUpdate=="function";d||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==u)&&Sm(e,o,i,u),ir=!1;var h=e.memoizedState;o.state=h,Ru(e,i,o,r),l=e.memoizedState,a!==i||h!==l||cn.current||ir?(typeof c=="function"&&(_d(e,t,c,i),l=e.memoizedState),(a=ir||ym(e,t,a,i,h,l,u))?(d||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=u,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,K0(n,e),a=e.memoizedProps,u=e.type===e.elementType?a:ti(e.type,a),o.props=u,d=e.pendingProps,h=o.context,l=t.contextType,typeof l=="object"&&l!==null?l=Xn(l):(l=fn(t)?hs:Kt.current,l=Mo(e,l));var p=t.getDerivedStateFromProps;(c=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==d||h!==l)&&Sm(e,o,i,l),ir=!1,h=e.memoizedState,o.state=h,Ru(e,i,o,r);var v=e.memoizedState;a!==d||h!==v||cn.current||ir?(typeof p=="function"&&(_d(e,t,p,i),v=e.memoizedState),(u=ir||ym(e,t,u,i,h,v,l)||!1)?(c||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,v,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,v,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=v),o.props=i,o.state=v,o.context=l,i=u):(typeof o.componentDidUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===n.memoizedProps&&h===n.memoizedState||(e.flags|=1024),i=!1)}return Sd(n,e,t,i,s,r)}function Sd(n,e,t,i,r,s){wv(n,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&mm(e,t,!1),Yi(n,e,s);i=e.stateNode,WM.current=e;var a=o&&typeof t.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,n!==null&&o?(e.child=To(e,n.child,null,s),e.child=To(e,null,a,s)):en(n,e,a,s),e.memoizedState=i.state,r&&mm(e,t,!0),e.child}function Av(n){var e=n.stateNode;e.pendingContext?pm(n,e.pendingContext,e.pendingContext!==e.context):e.context&&pm(n,e.context,!1),Ih(n,e.containerInfo)}function Lm(n,e,t,i,r){return Eo(),bh(r),e.flags|=256,en(n,e,t,i),e.child}var Md={dehydrated:null,treeContext:null,retryLane:0};function Ed(n){return{baseLanes:n,cachePool:null,transitions:null}}function Cv(n,e,t){var i=e.pendingProps,r=at.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=n!==null&&n.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(n===null||n.memoizedState!==null)&&(r|=1),tt(at,r&1),n===null)return md(e),n=e.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?(e.mode&1?n.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,n=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=sc(o,i,0,null),n=is(n,i,t,null),s.return=e,n.return=e,s.sibling=n,e.child=s,e.child.memoizedState=Ed(t),e.memoizedState=Md,n):Gh(e,o));if(r=n.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return jM(n,e,o,i,a,r,t);if(s){s=i.fallback,o=e.mode,r=n.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Sr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Sr(a,s):(s=is(s,o,t,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=n.child.memoizedState,o=o===null?Ed(t):{baseLanes:o.baseLanes|t,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=n.childLanes&~t,e.memoizedState=Md,i}return s=n.child,n=s.sibling,i=Sr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=t),i.return=e,i.sibling=null,n!==null&&(t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)),e.child=i,e.memoizedState=null,i}function Gh(n,e){return e=sc({mode:"visible",children:e},n.mode,0,null),e.return=n,n.child=e}function El(n,e,t,i){return i!==null&&bh(i),To(e,n.child,null,t),n=Gh(e,e.pendingProps.children),n.flags|=2,e.memoizedState=null,n}function jM(n,e,t,i,r,s,o){if(t)return e.flags&256?(e.flags&=-257,i=Xc(Error(ne(422))),El(n,e,o,i)):e.memoizedState!==null?(e.child=n.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=sc({mode:"visible",children:i.children},r,0,null),s=is(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&To(e,n.child,null,o),e.child.memoizedState=Ed(o),e.memoizedState=Md,s);if(!(e.mode&1))return El(n,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(ne(419)),i=Xc(s,i,void 0),El(n,e,o,i)}if(a=(o&n.childLanes)!==0,un||a){if(i=Ot,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Xi(n,r),li(i,n,r,-1))}return $h(),i=Xc(Error(ne(421))),El(n,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=n.child,e=rE.bind(null,n),r._reactRetry=e,null):(n=s.treeContext,Cn=_r(r.nextSibling),Rn=e,st=!0,ii=null,n!==null&&(kn[zn++]=ki,kn[zn++]=zi,kn[zn++]=ps,ki=n.id,zi=n.overflow,ps=e),e=Gh(e,i.children),e.flags|=4096,e)}function Dm(n,e,t){n.lanes|=e;var i=n.alternate;i!==null&&(i.lanes|=e),gd(n.return,e,t)}function Yc(n,e,t,i,r){var s=n.memoizedState;s===null?n.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:t,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=t,s.tailMode=r)}function Rv(n,e,t){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(en(n,e,i.children,t),i=at.current,i&2)i=i&1|2,e.flags|=128;else{if(n!==null&&n.flags&128)e:for(n=e.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Dm(n,t,e);else if(n.tag===19)Dm(n,t,e);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break e;for(;n.sibling===null;){if(n.return===null||n.return===e)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}i&=1}if(tt(at,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(t=e.child,r=null;t!==null;)n=t.alternate,n!==null&&bu(n)===null&&(r=t),t=t.sibling;t=r,t===null?(r=e.child,e.child=null):(r=t.sibling,t.sibling=null),Yc(e,!1,r,t,s);break;case"backwards":for(t=null,r=e.child,e.child=null;r!==null;){if(n=r.alternate,n!==null&&bu(n)===null){e.child=r;break}n=r.sibling,r.sibling=t,t=r,r=n}Yc(e,!0,t,null,s);break;case"together":Yc(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function ru(n,e){!(e.mode&1)&&n!==null&&(n.alternate=null,e.alternate=null,e.flags|=2)}function Yi(n,e,t){if(n!==null&&(e.dependencies=n.dependencies),gs|=e.lanes,!(t&e.childLanes))return null;if(n!==null&&e.child!==n.child)throw Error(ne(153));if(e.child!==null){for(n=e.child,t=Sr(n,n.pendingProps),e.child=t,t.return=e;n.sibling!==null;)n=n.sibling,t=t.sibling=Sr(n,n.pendingProps),t.return=e;t.sibling=null}return e.child}function XM(n,e,t){switch(e.tag){case 3:Av(e),Eo();break;case 5:tv(e);break;case 1:fn(e.type)&&Eu(e);break;case 4:Ih(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;tt(Au,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(tt(at,at.current&1),e.flags|=128,null):t&e.child.childLanes?Cv(n,e,t):(tt(at,at.current&1),n=Yi(n,e,t),n!==null?n.sibling:null);tt(at,at.current&1);break;case 19:if(i=(t&e.childLanes)!==0,n.flags&128){if(i)return Rv(n,e,t);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),tt(at,at.current),i)break;return null;case 22:case 23:return e.lanes=0,Tv(n,e,t)}return Yi(n,e,t)}var bv,Td,Pv,Lv;bv=function(n,e){for(var t=e.child;t!==null;){if(t.tag===5||t.tag===6)n.appendChild(t.stateNode);else if(t.tag!==4&&t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return;t=t.return}t.sibling.return=t.return,t=t.sibling}};Td=function(){};Pv=function(n,e,t,i){var r=n.memoizedProps;if(r!==i){n=e.stateNode,es(xi.current);var s=null;switch(t){case"input":r=Xf(n,r),i=Xf(n,i),s=[];break;case"select":r=ft({},r,{value:void 0}),i=ft({},i,{value:void 0}),s=[];break;case"textarea":r=$f(n,r),i=$f(n,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(n.onclick=Su)}Zf(t,i);var o;t=null;for(u in r)if(!i.hasOwnProperty(u)&&r.hasOwnProperty(u)&&r[u]!=null)if(u==="style"){var a=r[u];for(o in a)a.hasOwnProperty(o)&&(t||(t={}),t[o]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(Ta.hasOwnProperty(u)?s||(s=[]):(s=s||[]).push(u,null));for(u in i){var l=i[u];if(a=r!=null?r[u]:void 0,i.hasOwnProperty(u)&&l!==a&&(l!=null||a!=null))if(u==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(t||(t={}),t[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(t||(t={}),t[o]=l[o])}else t||(s||(s=[]),s.push(u,t)),t=l;else u==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(u,l)):u==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(u,""+l):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(Ta.hasOwnProperty(u)?(l!=null&&u==="onScroll"&&it("scroll",n),s||a===l||(s=[])):(s=s||[]).push(u,l))}t&&(s=s||[]).push("style",t);var u=s;(e.updateQueue=u)&&(e.flags|=4)}};Lv=function(n,e,t,i){t!==i&&(e.flags|=4)};function Ko(n,e){if(!st)switch(n.tailMode){case"hidden":e=n.tail;for(var t=null;e!==null;)e.alternate!==null&&(t=e),e=e.sibling;t===null?n.tail=null:t.sibling=null;break;case"collapsed":t=n.tail;for(var i=null;t!==null;)t.alternate!==null&&(i=t),t=t.sibling;i===null?e||n.tail===null?n.tail=null:n.tail.sibling=null:i.sibling=null}}function Gt(n){var e=n.alternate!==null&&n.alternate.child===n.child,t=0,i=0;if(e)for(var r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=n,r=r.sibling;else for(r=n.child;r!==null;)t|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=n,r=r.sibling;return n.subtreeFlags|=i,n.childLanes=t,e}function YM(n,e,t){var i=e.pendingProps;switch(Rh(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Gt(e),null;case 1:return fn(e.type)&&Mu(),Gt(e),null;case 3:return i=e.stateNode,wo(),rt(cn),rt(Kt),Fh(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(n===null||n.child===null)&&(Sl(e)?e.flags|=4:n===null||n.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ii!==null&&(Dd(ii),ii=null))),Td(n,e),Gt(e),null;case 5:Oh(e);var r=es(Oa.current);if(t=e.type,n!==null&&e.stateNode!=null)Pv(n,e,t,i,r),n.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(ne(166));return Gt(e),null}if(n=es(xi.current),Sl(e)){i=e.stateNode,t=e.type;var s=e.memoizedProps;switch(i[mi]=e,i[Na]=s,n=(e.mode&1)!==0,t){case"dialog":it("cancel",i),it("close",i);break;case"iframe":case"object":case"embed":it("load",i);break;case"video":case"audio":for(r=0;r<aa.length;r++)it(aa[r],i);break;case"source":it("error",i);break;case"img":case"image":case"link":it("error",i),it("load",i);break;case"details":it("toggle",i);break;case"input":Hp(i,s),it("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},it("invalid",i);break;case"textarea":Gp(i,s),it("invalid",i)}Zf(t,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&yl(i.textContent,a,n),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&yl(i.textContent,a,n),r=["children",""+a]):Ta.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&it("scroll",i)}switch(t){case"input":dl(i),Vp(i,s,!0);break;case"textarea":dl(i),Wp(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Su)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=r0(t)),n==="http://www.w3.org/1999/xhtml"?t==="script"?(n=o.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof i.is=="string"?n=o.createElement(t,{is:i.is}):(n=o.createElement(t),t==="select"&&(o=n,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):n=o.createElementNS(n,t),n[mi]=e,n[Na]=i,bv(n,e,!1,!1),e.stateNode=n;e:{switch(o=Qf(t,i),t){case"dialog":it("cancel",n),it("close",n),r=i;break;case"iframe":case"object":case"embed":it("load",n),r=i;break;case"video":case"audio":for(r=0;r<aa.length;r++)it(aa[r],n);r=i;break;case"source":it("error",n),r=i;break;case"img":case"image":case"link":it("error",n),it("load",n),r=i;break;case"details":it("toggle",n),r=i;break;case"input":Hp(n,i),r=Xf(n,i),it("invalid",n);break;case"option":r=i;break;case"select":n._wrapperState={wasMultiple:!!i.multiple},r=ft({},i,{value:void 0}),it("invalid",n);break;case"textarea":Gp(n,i),r=$f(n,i),it("invalid",n);break;default:r=i}Zf(t,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?a0(n,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&s0(n,l)):s==="children"?typeof l=="string"?(t!=="textarea"||l!=="")&&wa(n,l):typeof l=="number"&&wa(n,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(Ta.hasOwnProperty(s)?l!=null&&s==="onScroll"&&it("scroll",n):l!=null&&hh(n,s,l,o))}switch(t){case"input":dl(n),Vp(n,i,!1);break;case"textarea":dl(n),Wp(n);break;case"option":i.value!=null&&n.setAttribute("value",""+Ar(i.value));break;case"select":n.multiple=!!i.multiple,s=i.value,s!=null?lo(n,!!i.multiple,s,!1):i.defaultValue!=null&&lo(n,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(n.onclick=Su)}switch(t){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return Gt(e),null;case 6:if(n&&e.stateNode!=null)Lv(n,e,n.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(ne(166));if(t=es(Oa.current),es(xi.current),Sl(e)){if(i=e.stateNode,t=e.memoizedProps,i[mi]=e,(s=i.nodeValue!==t)&&(n=Rn,n!==null))switch(n.tag){case 3:yl(i.nodeValue,t,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&yl(i.nodeValue,t,(n.mode&1)!==0)}s&&(e.flags|=4)}else i=(t.nodeType===9?t:t.ownerDocument).createTextNode(i),i[mi]=e,e.stateNode=i}return Gt(e),null;case 13:if(rt(at),i=e.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(st&&Cn!==null&&e.mode&1&&!(e.flags&128))q0(),Eo(),e.flags|=98560,s=!1;else if(s=Sl(e),i!==null&&i.dehydrated!==null){if(n===null){if(!s)throw Error(ne(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(ne(317));s[mi]=e}else Eo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;Gt(e),s=!1}else ii!==null&&(Dd(ii),ii=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=t,e):(i=i!==null,i!==(n!==null&&n.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(n===null||at.current&1?Rt===0&&(Rt=3):$h())),e.updateQueue!==null&&(e.flags|=4),Gt(e),null);case 4:return wo(),Td(n,e),n===null&&Da(e.stateNode.containerInfo),Gt(e),null;case 10:return Dh(e.type._context),Gt(e),null;case 17:return fn(e.type)&&Mu(),Gt(e),null;case 19:if(rt(at),s=e.memoizedState,s===null)return Gt(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ko(s,!1);else{if(Rt!==0||n!==null&&n.flags&128)for(n=e.child;n!==null;){if(o=bu(n),o!==null){for(e.flags|=128,Ko(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=t,t=e.child;t!==null;)s=t,n=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=n,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,n=o.dependencies,s.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),t=t.sibling;return tt(at,at.current&1|2),e.child}n=n.sibling}s.tail!==null&&xt()>Co&&(e.flags|=128,i=!0,Ko(s,!1),e.lanes=4194304)}else{if(!i)if(n=bu(o),n!==null){if(e.flags|=128,i=!0,t=n.updateQueue,t!==null&&(e.updateQueue=t,e.flags|=4),Ko(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!st)return Gt(e),null}else 2*xt()-s.renderingStartTime>Co&&t!==1073741824&&(e.flags|=128,i=!0,Ko(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(t=s.last,t!==null?t.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=xt(),e.sibling=null,t=at.current,tt(at,i?t&1|2:t&1),e):(Gt(e),null);case 22:case 23:return qh(),i=e.memoizedState!==null,n!==null&&n.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?En&1073741824&&(Gt(e),e.subtreeFlags&6&&(e.flags|=8192)):Gt(e),null;case 24:return null;case 25:return null}throw Error(ne(156,e.tag))}function qM(n,e){switch(Rh(e),e.tag){case 1:return fn(e.type)&&Mu(),n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 3:return wo(),rt(cn),rt(Kt),Fh(),n=e.flags,n&65536&&!(n&128)?(e.flags=n&-65537|128,e):null;case 5:return Oh(e),null;case 13:if(rt(at),n=e.memoizedState,n!==null&&n.dehydrated!==null){if(e.alternate===null)throw Error(ne(340));Eo()}return n=e.flags,n&65536?(e.flags=n&-65537|128,e):null;case 19:return rt(at),null;case 4:return wo(),null;case 10:return Dh(e.type._context),null;case 22:case 23:return qh(),null;case 24:return null;default:return null}}var Tl=!1,Xt=!1,$M=typeof WeakSet=="function"?WeakSet:Set,ge=null;function io(n,e){var t=n.ref;if(t!==null)if(typeof t=="function")try{t(null)}catch(i){pt(n,e,i)}else t.current=null}function wd(n,e,t){try{t()}catch(i){pt(n,e,i)}}var Um=!1;function KM(n,e){if(ld=vu,n=I0(),Ah(n)){if("selectionStart"in n)var t={start:n.selectionStart,end:n.selectionEnd};else e:{t=(t=n.ownerDocument)&&t.defaultView||window;var i=t.getSelection&&t.getSelection();if(i&&i.rangeCount!==0){t=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{t.nodeType,s.nodeType}catch{t=null;break e}var o=0,a=-1,l=-1,u=0,c=0,d=n,h=null;t:for(;;){for(var p;d!==t||r!==0&&d.nodeType!==3||(a=o+r),d!==s||i!==0&&d.nodeType!==3||(l=o+i),d.nodeType===3&&(o+=d.nodeValue.length),(p=d.firstChild)!==null;)h=d,d=p;for(;;){if(d===n)break t;if(h===t&&++u===r&&(a=o),h===s&&++c===i&&(l=o),(p=d.nextSibling)!==null)break;d=h,h=d.parentNode}d=p}t=a===-1||l===-1?null:{start:a,end:l}}else t=null}t=t||{start:0,end:0}}else t=null;for(ud={focusedElem:n,selectionRange:t},vu=!1,ge=e;ge!==null;)if(e=ge,n=e.child,(e.subtreeFlags&1028)!==0&&n!==null)n.return=e,ge=n;else for(;ge!==null;){e=ge;try{var v=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(v!==null){var g=v.memoizedProps,m=v.memoizedState,f=e.stateNode,_=f.getSnapshotBeforeUpdate(e.elementType===e.type?g:ti(e.type,g),m);f.__reactInternalSnapshotBeforeUpdate=_}break;case 3:var x=e.stateNode.containerInfo;x.nodeType===1?x.textContent="":x.nodeType===9&&x.documentElement&&x.removeChild(x.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(ne(163))}}catch(y){pt(e,e.return,y)}if(n=e.sibling,n!==null){n.return=e.return,ge=n;break}ge=e.return}return v=Um,Um=!1,v}function _a(n,e,t){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&n)===n){var s=r.destroy;r.destroy=void 0,s!==void 0&&wd(e,t,s)}r=r.next}while(r!==i)}}function ic(n,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var t=e=e.next;do{if((t.tag&n)===n){var i=t.create;t.destroy=i()}t=t.next}while(t!==e)}}function Ad(n){var e=n.ref;if(e!==null){var t=n.stateNode;switch(n.tag){case 5:n=t;break;default:n=t}typeof e=="function"?e(n):e.current=n}}function Dv(n){var e=n.alternate;e!==null&&(n.alternate=null,Dv(e)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(e=n.stateNode,e!==null&&(delete e[mi],delete e[Na],delete e[dd],delete e[DM],delete e[UM])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Uv(n){return n.tag===5||n.tag===3||n.tag===4}function Nm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Uv(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Cd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.nodeType===8?t.parentNode.insertBefore(n,e):t.insertBefore(n,e):(t.nodeType===8?(e=t.parentNode,e.insertBefore(n,t)):(e=t,e.appendChild(n)),t=t._reactRootContainer,t!=null||e.onclick!==null||(e.onclick=Su));else if(i!==4&&(n=n.child,n!==null))for(Cd(n,e,t),n=n.sibling;n!==null;)Cd(n,e,t),n=n.sibling}function Rd(n,e,t){var i=n.tag;if(i===5||i===6)n=n.stateNode,e?t.insertBefore(n,e):t.appendChild(n);else if(i!==4&&(n=n.child,n!==null))for(Rd(n,e,t),n=n.sibling;n!==null;)Rd(n,e,t),n=n.sibling}var kt=null,ni=!1;function Zi(n,e,t){for(t=t.child;t!==null;)Nv(n,e,t),t=t.sibling}function Nv(n,e,t){if(vi&&typeof vi.onCommitFiberUnmount=="function")try{vi.onCommitFiberUnmount($u,t)}catch{}switch(t.tag){case 5:Xt||io(t,e);case 6:var i=kt,r=ni;kt=null,Zi(n,e,t),kt=i,ni=r,kt!==null&&(ni?(n=kt,t=t.stateNode,n.nodeType===8?n.parentNode.removeChild(t):n.removeChild(t)):kt.removeChild(t.stateNode));break;case 18:kt!==null&&(ni?(n=kt,t=t.stateNode,n.nodeType===8?Bc(n.parentNode,t):n.nodeType===1&&Bc(n,t),ba(n)):Bc(kt,t.stateNode));break;case 4:i=kt,r=ni,kt=t.stateNode.containerInfo,ni=!0,Zi(n,e,t),kt=i,ni=r;break;case 0:case 11:case 14:case 15:if(!Xt&&(i=t.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&wd(t,e,o),r=r.next}while(r!==i)}Zi(n,e,t);break;case 1:if(!Xt&&(io(t,e),i=t.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=t.memoizedProps,i.state=t.memoizedState,i.componentWillUnmount()}catch(a){pt(t,e,a)}Zi(n,e,t);break;case 21:Zi(n,e,t);break;case 22:t.mode&1?(Xt=(i=Xt)||t.memoizedState!==null,Zi(n,e,t),Xt=i):Zi(n,e,t);break;default:Zi(n,e,t)}}function Im(n){var e=n.updateQueue;if(e!==null){n.updateQueue=null;var t=n.stateNode;t===null&&(t=n.stateNode=new $M),e.forEach(function(i){var r=sE.bind(null,n,i);t.has(i)||(t.add(i),i.then(r,r))})}}function Kn(n,e){var t=e.deletions;if(t!==null)for(var i=0;i<t.length;i++){var r=t[i];try{var s=n,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:kt=a.stateNode,ni=!1;break e;case 3:kt=a.stateNode.containerInfo,ni=!0;break e;case 4:kt=a.stateNode.containerInfo,ni=!0;break e}a=a.return}if(kt===null)throw Error(ne(160));Nv(s,o,r),kt=null,ni=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(u){pt(r,e,u)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Iv(e,n),e=e.sibling}function Iv(n,e){var t=n.alternate,i=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Kn(e,n),di(n),i&4){try{_a(3,n,n.return),ic(3,n)}catch(g){pt(n,n.return,g)}try{_a(5,n,n.return)}catch(g){pt(n,n.return,g)}}break;case 1:Kn(e,n),di(n),i&512&&t!==null&&io(t,t.return);break;case 5:if(Kn(e,n),di(n),i&512&&t!==null&&io(t,t.return),n.flags&32){var r=n.stateNode;try{wa(r,"")}catch(g){pt(n,n.return,g)}}if(i&4&&(r=n.stateNode,r!=null)){var s=n.memoizedProps,o=t!==null?t.memoizedProps:s,a=n.type,l=n.updateQueue;if(n.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&n0(r,s),Qf(a,o);var u=Qf(a,s);for(o=0;o<l.length;o+=2){var c=l[o],d=l[o+1];c==="style"?a0(r,d):c==="dangerouslySetInnerHTML"?s0(r,d):c==="children"?wa(r,d):hh(r,c,d,u)}switch(a){case"input":Yf(r,s);break;case"textarea":i0(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?lo(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?lo(r,!!s.multiple,s.defaultValue,!0):lo(r,!!s.multiple,s.multiple?[]:"",!1))}r[Na]=s}catch(g){pt(n,n.return,g)}}break;case 6:if(Kn(e,n),di(n),i&4){if(n.stateNode===null)throw Error(ne(162));r=n.stateNode,s=n.memoizedProps;try{r.nodeValue=s}catch(g){pt(n,n.return,g)}}break;case 3:if(Kn(e,n),di(n),i&4&&t!==null&&t.memoizedState.isDehydrated)try{ba(e.containerInfo)}catch(g){pt(n,n.return,g)}break;case 4:Kn(e,n),di(n);break;case 13:Kn(e,n),di(n),r=n.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(Xh=xt())),i&4&&Im(n);break;case 22:if(c=t!==null&&t.memoizedState!==null,n.mode&1?(Xt=(u=Xt)||c,Kn(e,n),Xt=u):Kn(e,n),di(n),i&8192){if(u=n.memoizedState!==null,(n.stateNode.isHidden=u)&&!c&&n.mode&1)for(ge=n,c=n.child;c!==null;){for(d=ge=c;ge!==null;){switch(h=ge,p=h.child,h.tag){case 0:case 11:case 14:case 15:_a(4,h,h.return);break;case 1:io(h,h.return);var v=h.stateNode;if(typeof v.componentWillUnmount=="function"){i=h,t=h.return;try{e=i,v.props=e.memoizedProps,v.state=e.memoizedState,v.componentWillUnmount()}catch(g){pt(i,t,g)}}break;case 5:io(h,h.return);break;case 22:if(h.memoizedState!==null){Fm(d);continue}}p!==null?(p.return=h,ge=p):Fm(d)}c=c.sibling}e:for(c=null,d=n;;){if(d.tag===5){if(c===null){c=d;try{r=d.stateNode,u?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=d.stateNode,l=d.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=o0("display",o))}catch(g){pt(n,n.return,g)}}}else if(d.tag===6){if(c===null)try{d.stateNode.nodeValue=u?"":d.memoizedProps}catch(g){pt(n,n.return,g)}}else if((d.tag!==22&&d.tag!==23||d.memoizedState===null||d===n)&&d.child!==null){d.child.return=d,d=d.child;continue}if(d===n)break e;for(;d.sibling===null;){if(d.return===null||d.return===n)break e;c===d&&(c=null),d=d.return}c===d&&(c=null),d.sibling.return=d.return,d=d.sibling}}break;case 19:Kn(e,n),di(n),i&4&&Im(n);break;case 21:break;default:Kn(e,n),di(n)}}function di(n){var e=n.flags;if(e&2){try{e:{for(var t=n.return;t!==null;){if(Uv(t)){var i=t;break e}t=t.return}throw Error(ne(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(wa(r,""),i.flags&=-33);var s=Nm(n);Rd(n,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=Nm(n);Cd(n,a,o);break;default:throw Error(ne(161))}}catch(l){pt(n,n.return,l)}n.flags&=-3}e&4096&&(n.flags&=-4097)}function ZM(n,e,t){ge=n,Ov(n)}function Ov(n,e,t){for(var i=(n.mode&1)!==0;ge!==null;){var r=ge,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Tl;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||Xt;a=Tl;var u=Xt;if(Tl=o,(Xt=l)&&!u)for(ge=r;ge!==null;)o=ge,l=o.child,o.tag===22&&o.memoizedState!==null?km(r):l!==null?(l.return=o,ge=l):km(r);for(;s!==null;)ge=s,Ov(s),s=s.sibling;ge=r,Tl=a,Xt=u}Om(n)}else r.subtreeFlags&8772&&s!==null?(s.return=r,ge=s):Om(n)}}function Om(n){for(;ge!==null;){var e=ge;if(e.flags&8772){var t=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:Xt||ic(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!Xt)if(t===null)i.componentDidMount();else{var r=e.elementType===e.type?t.memoizedProps:ti(e.type,t.memoizedProps);i.componentDidUpdate(r,t.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&xm(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(t=null,e.child!==null)switch(e.child.tag){case 5:t=e.child.stateNode;break;case 1:t=e.child.stateNode}xm(e,o,t)}break;case 5:var a=e.stateNode;if(t===null&&e.flags&4){t=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&t.focus();break;case"img":l.src&&(t.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var u=e.alternate;if(u!==null){var c=u.memoizedState;if(c!==null){var d=c.dehydrated;d!==null&&ba(d)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(ne(163))}Xt||e.flags&512&&Ad(e)}catch(h){pt(e,e.return,h)}}if(e===n){ge=null;break}if(t=e.sibling,t!==null){t.return=e.return,ge=t;break}ge=e.return}}function Fm(n){for(;ge!==null;){var e=ge;if(e===n){ge=null;break}var t=e.sibling;if(t!==null){t.return=e.return,ge=t;break}ge=e.return}}function km(n){for(;ge!==null;){var e=ge;try{switch(e.tag){case 0:case 11:case 15:var t=e.return;try{ic(4,e)}catch(l){pt(e,t,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){pt(e,r,l)}}var s=e.return;try{Ad(e)}catch(l){pt(e,s,l)}break;case 5:var o=e.return;try{Ad(e)}catch(l){pt(e,o,l)}}}catch(l){pt(e,e.return,l)}if(e===n){ge=null;break}var a=e.sibling;if(a!==null){a.return=e.return,ge=a;break}ge=e.return}}var QM=Math.ceil,Du=Ki.ReactCurrentDispatcher,Wh=Ki.ReactCurrentOwner,jn=Ki.ReactCurrentBatchConfig,Xe=0,Ot=null,Tt=null,Bt=0,En=0,ro=Ur(0),Rt=0,Ba=null,gs=0,rc=0,jh=0,va=null,ln=null,Xh=0,Co=1/0,Ui=null,Uu=!1,bd=null,xr=null,wl=!1,ar=null,Nu=0,xa=0,Pd=null,su=-1,ou=0;function sn(){return Xe&6?xt():su!==-1?su:su=xt()}function yr(n){return n.mode&1?Xe&2&&Bt!==0?Bt&-Bt:IM.transition!==null?(ou===0&&(ou=x0()),ou):(n=Ze,n!==0||(n=window.event,n=n===void 0?16:A0(n.type)),n):1}function li(n,e,t,i){if(50<xa)throw xa=0,Pd=null,Error(ne(185));Ja(n,t,i),(!(Xe&2)||n!==Ot)&&(n===Ot&&(!(Xe&2)&&(rc|=t),Rt===4&&sr(n,Bt)),dn(n,i),t===1&&Xe===0&&!(e.mode&1)&&(Co=xt()+500,ec&&Nr()))}function dn(n,e){var t=n.callbackNode;IS(n,e);var i=_u(n,n===Ot?Bt:0);if(i===0)t!==null&&Yp(t),n.callbackNode=null,n.callbackPriority=0;else if(e=i&-i,n.callbackPriority!==e){if(t!=null&&Yp(t),e===1)n.tag===0?NM(zm.bind(null,n)):j0(zm.bind(null,n)),PM(function(){!(Xe&6)&&Nr()}),t=null;else{switch(y0(i)){case 1:t=vh;break;case 4:t=_0;break;case 16:t=gu;break;case 536870912:t=v0;break;default:t=gu}t=Wv(t,Fv.bind(null,n))}n.callbackPriority=e,n.callbackNode=t}}function Fv(n,e){if(su=-1,ou=0,Xe&6)throw Error(ne(327));var t=n.callbackNode;if(po()&&n.callbackNode!==t)return null;var i=_u(n,n===Ot?Bt:0);if(i===0)return null;if(i&30||i&n.expiredLanes||e)e=Iu(n,i);else{e=i;var r=Xe;Xe|=2;var s=zv();(Ot!==n||Bt!==e)&&(Ui=null,Co=xt()+500,ns(n,e));do try{tE();break}catch(a){kv(n,a)}while(1);Lh(),Du.current=s,Xe=r,Tt!==null?e=0:(Ot=null,Bt=0,e=Rt)}if(e!==0){if(e===2&&(r=id(n),r!==0&&(i=r,e=Ld(n,r))),e===1)throw t=Ba,ns(n,0),sr(n,i),dn(n,xt()),t;if(e===6)sr(n,i);else{if(r=n.current.alternate,!(i&30)&&!JM(r)&&(e=Iu(n,i),e===2&&(s=id(n),s!==0&&(i=s,e=Ld(n,s))),e===1))throw t=Ba,ns(n,0),sr(n,i),dn(n,xt()),t;switch(n.finishedWork=r,n.finishedLanes=i,e){case 0:case 1:throw Error(ne(345));case 2:Yr(n,ln,Ui);break;case 3:if(sr(n,i),(i&130023424)===i&&(e=Xh+500-xt(),10<e)){if(_u(n,0)!==0)break;if(r=n.suspendedLanes,(r&i)!==i){sn(),n.pingedLanes|=n.suspendedLanes&r;break}n.timeoutHandle=fd(Yr.bind(null,n,ln,Ui),e);break}Yr(n,ln,Ui);break;case 4:if(sr(n,i),(i&4194240)===i)break;for(e=n.eventTimes,r=-1;0<i;){var o=31-ai(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=xt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*QM(i/1960))-i,10<i){n.timeoutHandle=fd(Yr.bind(null,n,ln,Ui),i);break}Yr(n,ln,Ui);break;case 5:Yr(n,ln,Ui);break;default:throw Error(ne(329))}}}return dn(n,xt()),n.callbackNode===t?Fv.bind(null,n):null}function Ld(n,e){var t=va;return n.current.memoizedState.isDehydrated&&(ns(n,e).flags|=256),n=Iu(n,e),n!==2&&(e=ln,ln=t,e!==null&&Dd(e)),n}function Dd(n){ln===null?ln=n:ln.push.apply(ln,n)}function JM(n){for(var e=n;;){if(e.flags&16384){var t=e.updateQueue;if(t!==null&&(t=t.stores,t!==null))for(var i=0;i<t.length;i++){var r=t[i],s=r.getSnapshot;r=r.value;try{if(!ci(s(),r))return!1}catch{return!1}}}if(t=e.child,e.subtreeFlags&16384&&t!==null)t.return=e,e=t;else{if(e===n)break;for(;e.sibling===null;){if(e.return===null||e.return===n)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function sr(n,e){for(e&=~jh,e&=~rc,n.suspendedLanes|=e,n.pingedLanes&=~e,n=n.expirationTimes;0<e;){var t=31-ai(e),i=1<<t;n[t]=-1,e&=~i}}function zm(n){if(Xe&6)throw Error(ne(327));po();var e=_u(n,0);if(!(e&1))return dn(n,xt()),null;var t=Iu(n,e);if(n.tag!==0&&t===2){var i=id(n);i!==0&&(e=i,t=Ld(n,i))}if(t===1)throw t=Ba,ns(n,0),sr(n,e),dn(n,xt()),t;if(t===6)throw Error(ne(345));return n.finishedWork=n.current.alternate,n.finishedLanes=e,Yr(n,ln,Ui),dn(n,xt()),null}function Yh(n,e){var t=Xe;Xe|=1;try{return n(e)}finally{Xe=t,Xe===0&&(Co=xt()+500,ec&&Nr())}}function _s(n){ar!==null&&ar.tag===0&&!(Xe&6)&&po();var e=Xe;Xe|=1;var t=jn.transition,i=Ze;try{if(jn.transition=null,Ze=1,n)return n()}finally{Ze=i,jn.transition=t,Xe=e,!(Xe&6)&&Nr()}}function qh(){En=ro.current,rt(ro)}function ns(n,e){n.finishedWork=null,n.finishedLanes=0;var t=n.timeoutHandle;if(t!==-1&&(n.timeoutHandle=-1,bM(t)),Tt!==null)for(t=Tt.return;t!==null;){var i=t;switch(Rh(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Mu();break;case 3:wo(),rt(cn),rt(Kt),Fh();break;case 5:Oh(i);break;case 4:wo();break;case 13:rt(at);break;case 19:rt(at);break;case 10:Dh(i.type._context);break;case 22:case 23:qh()}t=t.return}if(Ot=n,Tt=n=Sr(n.current,null),Bt=En=e,Rt=0,Ba=null,jh=rc=gs=0,ln=va=null,Jr!==null){for(e=0;e<Jr.length;e++)if(t=Jr[e],i=t.interleaved,i!==null){t.interleaved=null;var r=i.next,s=t.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}t.pending=i}Jr=null}return n}function kv(n,e){do{var t=Tt;try{if(Lh(),nu.current=Lu,Pu){for(var i=ct.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Pu=!1}if(ms=0,It=Ct=ct=null,ga=!1,Fa=0,Wh.current=null,t===null||t.return===null){Rt=1,Ba=e,Tt=null;break}e:{var s=n,o=t.return,a=t,l=e;if(e=Bt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var u=l,c=a,d=c.tag;if(!(c.mode&1)&&(d===0||d===11||d===15)){var h=c.alternate;h?(c.updateQueue=h.updateQueue,c.memoizedState=h.memoizedState,c.lanes=h.lanes):(c.updateQueue=null,c.memoizedState=null)}var p=Am(o);if(p!==null){p.flags&=-257,Cm(p,o,a,s,e),p.mode&1&&wm(s,u,e),e=p,l=u;var v=e.updateQueue;if(v===null){var g=new Set;g.add(l),e.updateQueue=g}else v.add(l);break e}else{if(!(e&1)){wm(s,u,e),$h();break e}l=Error(ne(426))}}else if(st&&a.mode&1){var m=Am(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),Cm(m,o,a,s,e),bh(Ao(l,a));break e}}s=l=Ao(l,a),Rt!==4&&(Rt=2),va===null?va=[s]:va.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var f=Sv(s,l,e);vm(s,f);break e;case 1:a=l;var _=s.type,x=s.stateNode;if(!(s.flags&128)&&(typeof _.getDerivedStateFromError=="function"||x!==null&&typeof x.componentDidCatch=="function"&&(xr===null||!xr.has(x)))){s.flags|=65536,e&=-e,s.lanes|=e;var y=Mv(s,a,e);vm(s,y);break e}}s=s.return}while(s!==null)}Hv(t)}catch(S){e=S,Tt===t&&t!==null&&(Tt=t=t.return);continue}break}while(1)}function zv(){var n=Du.current;return Du.current=Lu,n===null?Lu:n}function $h(){(Rt===0||Rt===3||Rt===2)&&(Rt=4),Ot===null||!(gs&268435455)&&!(rc&268435455)||sr(Ot,Bt)}function Iu(n,e){var t=Xe;Xe|=2;var i=zv();(Ot!==n||Bt!==e)&&(Ui=null,ns(n,e));do try{eE();break}catch(r){kv(n,r)}while(1);if(Lh(),Xe=t,Du.current=i,Tt!==null)throw Error(ne(261));return Ot=null,Bt=0,Rt}function eE(){for(;Tt!==null;)Bv(Tt)}function tE(){for(;Tt!==null&&!AS();)Bv(Tt)}function Bv(n){var e=Gv(n.alternate,n,En);n.memoizedProps=n.pendingProps,e===null?Hv(n):Tt=e,Wh.current=null}function Hv(n){var e=n;do{var t=e.alternate;if(n=e.return,e.flags&32768){if(t=qM(t,e),t!==null){t.flags&=32767,Tt=t;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Rt=6,Tt=null;return}}else if(t=YM(t,e,En),t!==null){Tt=t;return}if(e=e.sibling,e!==null){Tt=e;return}Tt=e=n}while(e!==null);Rt===0&&(Rt=5)}function Yr(n,e,t){var i=Ze,r=jn.transition;try{jn.transition=null,Ze=1,nE(n,e,t,i)}finally{jn.transition=r,Ze=i}return null}function nE(n,e,t,i){do po();while(ar!==null);if(Xe&6)throw Error(ne(327));t=n.finishedWork;var r=n.finishedLanes;if(t===null)return null;if(n.finishedWork=null,n.finishedLanes=0,t===n.current)throw Error(ne(177));n.callbackNode=null,n.callbackPriority=0;var s=t.lanes|t.childLanes;if(OS(n,s),n===Ot&&(Tt=Ot=null,Bt=0),!(t.subtreeFlags&2064)&&!(t.flags&2064)||wl||(wl=!0,Wv(gu,function(){return po(),null})),s=(t.flags&15990)!==0,t.subtreeFlags&15990||s){s=jn.transition,jn.transition=null;var o=Ze;Ze=1;var a=Xe;Xe|=4,Wh.current=null,KM(n,t),Iv(t,n),MM(ud),vu=!!ld,ud=ld=null,n.current=t,ZM(t),CS(),Xe=a,Ze=o,jn.transition=s}else n.current=t;if(wl&&(wl=!1,ar=n,Nu=r),s=n.pendingLanes,s===0&&(xr=null),PS(t.stateNode),dn(n,xt()),e!==null)for(i=n.onRecoverableError,t=0;t<e.length;t++)r=e[t],i(r.value,{componentStack:r.stack,digest:r.digest});if(Uu)throw Uu=!1,n=bd,bd=null,n;return Nu&1&&n.tag!==0&&po(),s=n.pendingLanes,s&1?n===Pd?xa++:(xa=0,Pd=n):xa=0,Nr(),null}function po(){if(ar!==null){var n=y0(Nu),e=jn.transition,t=Ze;try{if(jn.transition=null,Ze=16>n?16:n,ar===null)var i=!1;else{if(n=ar,ar=null,Nu=0,Xe&6)throw Error(ne(331));var r=Xe;for(Xe|=4,ge=n.current;ge!==null;){var s=ge,o=s.child;if(ge.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var u=a[l];for(ge=u;ge!==null;){var c=ge;switch(c.tag){case 0:case 11:case 15:_a(8,c,s)}var d=c.child;if(d!==null)d.return=c,ge=d;else for(;ge!==null;){c=ge;var h=c.sibling,p=c.return;if(Dv(c),c===u){ge=null;break}if(h!==null){h.return=p,ge=h;break}ge=p}}}var v=s.alternate;if(v!==null){var g=v.child;if(g!==null){v.child=null;do{var m=g.sibling;g.sibling=null,g=m}while(g!==null)}}ge=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,ge=o;else e:for(;ge!==null;){if(s=ge,s.flags&2048)switch(s.tag){case 0:case 11:case 15:_a(9,s,s.return)}var f=s.sibling;if(f!==null){f.return=s.return,ge=f;break e}ge=s.return}}var _=n.current;for(ge=_;ge!==null;){o=ge;var x=o.child;if(o.subtreeFlags&2064&&x!==null)x.return=o,ge=x;else e:for(o=_;ge!==null;){if(a=ge,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:ic(9,a)}}catch(S){pt(a,a.return,S)}if(a===o){ge=null;break e}var y=a.sibling;if(y!==null){y.return=a.return,ge=y;break e}ge=a.return}}if(Xe=r,Nr(),vi&&typeof vi.onPostCommitFiberRoot=="function")try{vi.onPostCommitFiberRoot($u,n)}catch{}i=!0}return i}finally{Ze=t,jn.transition=e}}return!1}function Bm(n,e,t){e=Ao(t,e),e=Sv(n,e,1),n=vr(n,e,1),e=sn(),n!==null&&(Ja(n,1,e),dn(n,e))}function pt(n,e,t){if(n.tag===3)Bm(n,n,t);else for(;e!==null;){if(e.tag===3){Bm(e,n,t);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(xr===null||!xr.has(i))){n=Ao(t,n),n=Mv(e,n,1),e=vr(e,n,1),n=sn(),e!==null&&(Ja(e,1,n),dn(e,n));break}}e=e.return}}function iE(n,e,t){var i=n.pingCache;i!==null&&i.delete(e),e=sn(),n.pingedLanes|=n.suspendedLanes&t,Ot===n&&(Bt&t)===t&&(Rt===4||Rt===3&&(Bt&130023424)===Bt&&500>xt()-Xh?ns(n,0):jh|=t),dn(n,e)}function Vv(n,e){e===0&&(n.mode&1?(e=ml,ml<<=1,!(ml&130023424)&&(ml=4194304)):e=1);var t=sn();n=Xi(n,e),n!==null&&(Ja(n,e,t),dn(n,t))}function rE(n){var e=n.memoizedState,t=0;e!==null&&(t=e.retryLane),Vv(n,t)}function sE(n,e){var t=0;switch(n.tag){case 13:var i=n.stateNode,r=n.memoizedState;r!==null&&(t=r.retryLane);break;case 19:i=n.stateNode;break;default:throw Error(ne(314))}i!==null&&i.delete(e),Vv(n,t)}var Gv;Gv=function(n,e,t){if(n!==null)if(n.memoizedProps!==e.pendingProps||cn.current)un=!0;else{if(!(n.lanes&t)&&!(e.flags&128))return un=!1,XM(n,e,t);un=!!(n.flags&131072)}else un=!1,st&&e.flags&1048576&&X0(e,wu,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;ru(n,e),n=e.pendingProps;var r=Mo(e,Kt.current);ho(e,t),r=zh(null,e,i,n,r,t);var s=Bh();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,fn(i)?(s=!0,Eu(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,Nh(e),r.updater=tc,e.stateNode=r,r._reactInternals=e,vd(e,i,n,t),e=Sd(null,e,i,!0,s,t)):(e.tag=0,st&&s&&Ch(e),en(null,e,r,t),e=e.child),e;case 16:i=e.elementType;e:{switch(ru(n,e),n=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=aE(i),n=ti(i,n),r){case 0:e=yd(null,e,i,n,t);break e;case 1:e=Pm(null,e,i,n,t);break e;case 11:e=Rm(null,e,i,n,t);break e;case 14:e=bm(null,e,i,ti(i.type,n),t);break e}throw Error(ne(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),yd(n,e,i,r,t);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Pm(n,e,i,r,t);case 3:e:{if(Av(e),n===null)throw Error(ne(387));i=e.pendingProps,s=e.memoizedState,r=s.element,K0(n,e),Ru(e,i,null,t);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=Ao(Error(ne(423)),e),e=Lm(n,e,i,t,r);break e}else if(i!==r){r=Ao(Error(ne(424)),e),e=Lm(n,e,i,t,r);break e}else for(Cn=_r(e.stateNode.containerInfo.firstChild),Rn=e,st=!0,ii=null,t=ev(e,null,i,t),e.child=t;t;)t.flags=t.flags&-3|4096,t=t.sibling;else{if(Eo(),i===r){e=Yi(n,e,t);break e}en(n,e,i,t)}e=e.child}return e;case 5:return tv(e),n===null&&md(e),i=e.type,r=e.pendingProps,s=n!==null?n.memoizedProps:null,o=r.children,cd(i,r)?o=null:s!==null&&cd(i,s)&&(e.flags|=32),wv(n,e),en(n,e,o,t),e.child;case 6:return n===null&&md(e),null;case 13:return Cv(n,e,t);case 4:return Ih(e,e.stateNode.containerInfo),i=e.pendingProps,n===null?e.child=To(e,null,i,t):en(n,e,i,t),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),Rm(n,e,i,r,t);case 7:return en(n,e,e.pendingProps,t),e.child;case 8:return en(n,e,e.pendingProps.children,t),e.child;case 12:return en(n,e,e.pendingProps.children,t),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,tt(Au,i._currentValue),i._currentValue=o,s!==null)if(ci(s.value,o)){if(s.children===r.children&&!cn.current){e=Yi(n,e,t);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Vi(-1,t&-t),l.tag=2;var u=s.updateQueue;if(u!==null){u=u.shared;var c=u.pending;c===null?l.next=l:(l.next=c.next,c.next=l),u.pending=l}}s.lanes|=t,l=s.alternate,l!==null&&(l.lanes|=t),gd(s.return,t,e),a.lanes|=t;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(ne(341));o.lanes|=t,a=o.alternate,a!==null&&(a.lanes|=t),gd(o,t,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}en(n,e,r.children,t),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ho(e,t),r=Xn(r),i=i(r),e.flags|=1,en(n,e,i,t),e.child;case 14:return i=e.type,r=ti(i,e.pendingProps),r=ti(i.type,r),bm(n,e,i,r,t);case 15:return Ev(n,e,e.type,e.pendingProps,t);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ti(i,r),ru(n,e),e.tag=1,fn(i)?(n=!0,Eu(e)):n=!1,ho(e,t),Q0(e,i,r),vd(e,i,r,t),Sd(null,e,i,!0,n,t);case 19:return Rv(n,e,t);case 22:return Tv(n,e,t)}throw Error(ne(156,e.tag))};function Wv(n,e){return g0(n,e)}function oE(n,e,t,i){this.tag=n,this.key=t,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Hn(n,e,t,i){return new oE(n,e,t,i)}function Kh(n){return n=n.prototype,!(!n||!n.isReactComponent)}function aE(n){if(typeof n=="function")return Kh(n)?1:0;if(n!=null){if(n=n.$$typeof,n===mh)return 11;if(n===gh)return 14}return 2}function Sr(n,e){var t=n.alternate;return t===null?(t=Hn(n.tag,e,n.key,n.mode),t.elementType=n.elementType,t.type=n.type,t.stateNode=n.stateNode,t.alternate=n,n.alternate=t):(t.pendingProps=e,t.type=n.type,t.flags=0,t.subtreeFlags=0,t.deletions=null),t.flags=n.flags&14680064,t.childLanes=n.childLanes,t.lanes=n.lanes,t.child=n.child,t.memoizedProps=n.memoizedProps,t.memoizedState=n.memoizedState,t.updateQueue=n.updateQueue,e=n.dependencies,t.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},t.sibling=n.sibling,t.index=n.index,t.ref=n.ref,t}function au(n,e,t,i,r,s){var o=2;if(i=n,typeof n=="function")Kh(n)&&(o=1);else if(typeof n=="string")o=5;else e:switch(n){case qs:return is(t.children,r,s,e);case ph:o=8,r|=8;break;case Vf:return n=Hn(12,t,e,r|2),n.elementType=Vf,n.lanes=s,n;case Gf:return n=Hn(13,t,e,r),n.elementType=Gf,n.lanes=s,n;case Wf:return n=Hn(19,t,e,r),n.elementType=Wf,n.lanes=s,n;case J_:return sc(t,r,s,e);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case Z_:o=10;break e;case Q_:o=9;break e;case mh:o=11;break e;case gh:o=14;break e;case nr:o=16,i=null;break e}throw Error(ne(130,n==null?n:typeof n,""))}return e=Hn(o,t,e,r),e.elementType=n,e.type=i,e.lanes=s,e}function is(n,e,t,i){return n=Hn(7,n,i,e),n.lanes=t,n}function sc(n,e,t,i){return n=Hn(22,n,i,e),n.elementType=J_,n.lanes=t,n.stateNode={isHidden:!1},n}function qc(n,e,t){return n=Hn(6,n,null,e),n.lanes=t,n}function $c(n,e,t){return e=Hn(4,n.children!==null?n.children:[],n.key,e),e.lanes=t,e.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},e}function lE(n,e,t,i,r){this.tag=e,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=bc(0),this.expirationTimes=bc(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=bc(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function Zh(n,e,t,i,r,s,o,a,l){return n=new lE(n,e,t,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=Hn(3,null,null,e),n.current=s,s.stateNode=n,s.memoizedState={element:i,isDehydrated:t,cache:null,transitions:null,pendingSuspenseBoundaries:null},Nh(s),n}function uE(n,e,t){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Ys,key:i==null?null:""+i,children:n,containerInfo:e,implementation:t}}function jv(n){if(!n)return Cr;n=n._reactInternals;e:{if(Es(n)!==n||n.tag!==1)throw Error(ne(170));var e=n;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(fn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(ne(171))}if(n.tag===1){var t=n.type;if(fn(t))return W0(n,t,e)}return e}function Xv(n,e,t,i,r,s,o,a,l){return n=Zh(t,i,!0,n,r,s,o,a,l),n.context=jv(null),t=n.current,i=sn(),r=yr(t),s=Vi(i,r),s.callback=e??null,vr(t,s,r),n.current.lanes=r,Ja(n,r,i),dn(n,i),n}function oc(n,e,t,i){var r=e.current,s=sn(),o=yr(r);return t=jv(t),e.context===null?e.context=t:e.pendingContext=t,e=Vi(s,o),e.payload={element:n},i=i===void 0?null:i,i!==null&&(e.callback=i),n=vr(r,e,o),n!==null&&(li(n,r,o,s),tu(n,r,o)),o}function Ou(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Hm(n,e){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var t=n.retryLane;n.retryLane=t!==0&&t<e?t:e}}function Qh(n,e){Hm(n,e),(n=n.alternate)&&Hm(n,e)}function cE(){return null}var Yv=typeof reportError=="function"?reportError:function(n){console.error(n)};function Jh(n){this._internalRoot=n}ac.prototype.render=Jh.prototype.render=function(n){var e=this._internalRoot;if(e===null)throw Error(ne(409));oc(n,e,null,null)};ac.prototype.unmount=Jh.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var e=n.containerInfo;_s(function(){oc(null,n,null,null)}),e[ji]=null}};function ac(n){this._internalRoot=n}ac.prototype.unstable_scheduleHydration=function(n){if(n){var e=E0();n={blockedOn:null,target:n,priority:e};for(var t=0;t<rr.length&&e!==0&&e<rr[t].priority;t++);rr.splice(t,0,n),t===0&&w0(n)}};function ep(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function lc(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function Vm(){}function fE(n,e,t,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var u=Ou(o);s.call(u)}}var o=Xv(e,i,n,0,null,!1,!1,"",Vm);return n._reactRootContainer=o,n[ji]=o.current,Da(n.nodeType===8?n.parentNode:n),_s(),o}for(;r=n.lastChild;)n.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var u=Ou(l);a.call(u)}}var l=Zh(n,0,!1,null,null,!1,!1,"",Vm);return n._reactRootContainer=l,n[ji]=l.current,Da(n.nodeType===8?n.parentNode:n),_s(function(){oc(e,l,t,i)}),l}function uc(n,e,t,i,r){var s=t._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=Ou(o);a.call(l)}}oc(e,o,n,r)}else o=fE(t,e,n,r,i);return Ou(o)}S0=function(n){switch(n.tag){case 3:var e=n.stateNode;if(e.current.memoizedState.isDehydrated){var t=oa(e.pendingLanes);t!==0&&(xh(e,t|1),dn(e,xt()),!(Xe&6)&&(Co=xt()+500,Nr()))}break;case 13:_s(function(){var i=Xi(n,1);if(i!==null){var r=sn();li(i,n,1,r)}}),Qh(n,1)}};yh=function(n){if(n.tag===13){var e=Xi(n,134217728);if(e!==null){var t=sn();li(e,n,134217728,t)}Qh(n,134217728)}};M0=function(n){if(n.tag===13){var e=yr(n),t=Xi(n,e);if(t!==null){var i=sn();li(t,n,e,i)}Qh(n,e)}};E0=function(){return Ze};T0=function(n,e){var t=Ze;try{return Ze=n,e()}finally{Ze=t}};ed=function(n,e,t){switch(e){case"input":if(Yf(n,t),e=t.name,t.type==="radio"&&e!=null){for(t=n;t.parentNode;)t=t.parentNode;for(t=t.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<t.length;e++){var i=t[e];if(i!==n&&i.form===n.form){var r=Ju(i);if(!r)throw Error(ne(90));t0(i),Yf(i,r)}}}break;case"textarea":i0(n,t);break;case"select":e=t.value,e!=null&&lo(n,!!t.multiple,e,!1)}};c0=Yh;f0=_s;var dE={usingClientEntryPoint:!1,Events:[tl,Qs,Ju,l0,u0,Yh]},Zo={findFiberByHostInstance:Qr,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"},hE={bundleType:Zo.bundleType,version:Zo.version,rendererPackageName:Zo.rendererPackageName,rendererConfig:Zo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:Ki.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=p0(n),n===null?null:n.stateNode},findFiberByHostInstance:Zo.findFiberByHostInstance||cE,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Al.isDisabled&&Al.supportsFiber)try{$u=Al.inject(hE),vi=Al}catch{}}Un.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=dE;Un.createPortal=function(n,e){var t=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ep(e))throw Error(ne(200));return uE(n,e,null,t)};Un.createRoot=function(n,e){if(!ep(n))throw Error(ne(299));var t=!1,i="",r=Yv;return e!=null&&(e.unstable_strictMode===!0&&(t=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=Zh(n,1,!1,null,null,t,!1,i,r),n[ji]=e.current,Da(n.nodeType===8?n.parentNode:n),new Jh(e)};Un.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var e=n._reactInternals;if(e===void 0)throw typeof n.render=="function"?Error(ne(188)):(n=Object.keys(n).join(","),Error(ne(268,n)));return n=p0(e),n=n===null?null:n.stateNode,n};Un.flushSync=function(n){return _s(n)};Un.hydrate=function(n,e,t){if(!lc(e))throw Error(ne(200));return uc(null,n,e,!0,t)};Un.hydrateRoot=function(n,e,t){if(!ep(n))throw Error(ne(405));var i=t!=null&&t.hydratedSources||null,r=!1,s="",o=Yv;if(t!=null&&(t.unstable_strictMode===!0&&(r=!0),t.identifierPrefix!==void 0&&(s=t.identifierPrefix),t.onRecoverableError!==void 0&&(o=t.onRecoverableError)),e=Xv(e,null,n,1,t??null,r,!1,s,o),n[ji]=e.current,Da(n),i)for(n=0;n<i.length;n++)t=i[n],r=t._getVersion,r=r(t._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[t,r]:e.mutableSourceEagerHydrationData.push(t,r);return new ac(e)};Un.render=function(n,e,t){if(!lc(e))throw Error(ne(200));return uc(null,n,e,!1,t)};Un.unmountComponentAtNode=function(n){if(!lc(n))throw Error(ne(40));return n._reactRootContainer?(_s(function(){uc(null,null,n,!1,function(){n._reactRootContainer=null,n[ji]=null})}),!0):!1};Un.unstable_batchedUpdates=Yh;Un.unstable_renderSubtreeIntoContainer=function(n,e,t,i){if(!lc(t))throw Error(ne(200));if(n==null||n._reactInternals===void 0)throw Error(ne(38));return uc(n,e,t,!1,i)};Un.version="18.2.0-next-9e3b772b8-20220608";function qv(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(qv)}catch(n){console.error(n)}}qv(),X_.exports=Un;var pE=X_.exports,Gm=pE;Bf.createRoot=Gm.createRoot,Bf.hydrateRoot=Gm.hydrateRoot;/**
 * @remix-run/router v1.6.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ha(){return Ha=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Ha.apply(this,arguments)}var lr;(function(n){n.Pop="POP",n.Push="PUSH",n.Replace="REPLACE"})(lr||(lr={}));const Wm="popstate";function mE(n){n===void 0&&(n={});function e(i,r){let{pathname:s,search:o,hash:a}=i.location;return Ud("",{pathname:s,search:o,hash:a},r.state&&r.state.usr||null,r.state&&r.state.key||"default")}function t(i,r){return typeof r=="string"?r:$v(r)}return _E(e,t,null,n)}function bt(n,e){if(n===!1||n===null||typeof n>"u")throw new Error(e)}function tp(n,e){if(!n){typeof console<"u"&&console.warn(e);try{throw new Error(e)}catch{}}}function gE(){return Math.random().toString(36).substr(2,8)}function jm(n,e){return{usr:n.state,key:n.key,idx:e}}function Ud(n,e,t,i){return t===void 0&&(t=null),Ha({pathname:typeof n=="string"?n:n.pathname,search:"",hash:""},typeof e=="string"?Bo(e):e,{state:t,key:e&&e.key||i||gE()})}function $v(n){let{pathname:e="/",search:t="",hash:i=""}=n;return t&&t!=="?"&&(e+=t.charAt(0)==="?"?t:"?"+t),i&&i!=="#"&&(e+=i.charAt(0)==="#"?i:"#"+i),e}function Bo(n){let e={};if(n){let t=n.indexOf("#");t>=0&&(e.hash=n.substr(t),n=n.substr(0,t));let i=n.indexOf("?");i>=0&&(e.search=n.substr(i),n=n.substr(0,i)),n&&(e.pathname=n)}return e}function _E(n,e,t,i){i===void 0&&(i={});let{window:r=document.defaultView,v5Compat:s=!1}=i,o=r.history,a=lr.Pop,l=null,u=c();u==null&&(u=0,o.replaceState(Ha({},o.state,{idx:u}),""));function c(){return(o.state||{idx:null}).idx}function d(){a=lr.Pop;let m=c(),f=m==null?null:m-u;u=m,l&&l({action:a,location:g.location,delta:f})}function h(m,f){a=lr.Push;let _=Ud(g.location,m,f);t&&t(_,m),u=c()+1;let x=jm(_,u),y=g.createHref(_);try{o.pushState(x,"",y)}catch{r.location.assign(y)}s&&l&&l({action:a,location:g.location,delta:1})}function p(m,f){a=lr.Replace;let _=Ud(g.location,m,f);t&&t(_,m),u=c();let x=jm(_,u),y=g.createHref(_);o.replaceState(x,"",y),s&&l&&l({action:a,location:g.location,delta:0})}function v(m){let f=r.location.origin!=="null"?r.location.origin:r.location.href,_=typeof m=="string"?m:$v(m);return bt(f,"No window.location.(origin|href) available to create URL for href: "+_),new URL(_,f)}let g={get action(){return a},get location(){return n(r,o)},listen(m){if(l)throw new Error("A history only accepts one active listener");return r.addEventListener(Wm,d),l=m,()=>{r.removeEventListener(Wm,d),l=null}},createHref(m){return e(r,m)},createURL:v,encodeLocation(m){let f=v(m);return{pathname:f.pathname,search:f.search,hash:f.hash}},push:h,replace:p,go(m){return o.go(m)}};return g}var Xm;(function(n){n.data="data",n.deferred="deferred",n.redirect="redirect",n.error="error"})(Xm||(Xm={}));function vE(n,e,t){t===void 0&&(t="/");let i=typeof e=="string"?Bo(e):e,r=Qv(i.pathname||"/",t);if(r==null)return null;let s=Kv(n);xE(s);let o=null;for(let a=0;o==null&&a<s.length;++a)o=RE(s[a],LE(r));return o}function Kv(n,e,t,i){e===void 0&&(e=[]),t===void 0&&(t=[]),i===void 0&&(i="");let r=(s,o,a)=>{let l={relativePath:a===void 0?s.path||"":a,caseSensitive:s.caseSensitive===!0,childrenIndex:o,route:s};l.relativePath.startsWith("/")&&(bt(l.relativePath.startsWith(i),'Absolute route path "'+l.relativePath+'" nested under path '+('"'+i+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),l.relativePath=l.relativePath.slice(i.length));let u=rs([i,l.relativePath]),c=t.concat(l);s.children&&s.children.length>0&&(bt(s.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),Kv(s.children,e,c,u)),!(s.path==null&&!s.index)&&e.push({path:u,score:AE(u,s.index),routesMeta:c})};return n.forEach((s,o)=>{var a;if(s.path===""||!((a=s.path)!=null&&a.includes("?")))r(s,o);else for(let l of Zv(s.path))r(s,o,l)}),e}function Zv(n){let e=n.split("/");if(e.length===0)return[];let[t,...i]=e,r=t.endsWith("?"),s=t.replace(/\?$/,"");if(i.length===0)return r?[s,""]:[s];let o=Zv(i.join("/")),a=[];return a.push(...o.map(l=>l===""?s:[s,l].join("/"))),r&&a.push(...o),a.map(l=>n.startsWith("/")&&l===""?"/":l)}function xE(n){n.sort((e,t)=>e.score!==t.score?t.score-e.score:CE(e.routesMeta.map(i=>i.childrenIndex),t.routesMeta.map(i=>i.childrenIndex)))}const yE=/^:\w+$/,SE=3,ME=2,EE=1,TE=10,wE=-2,Ym=n=>n==="*";function AE(n,e){let t=n.split("/"),i=t.length;return t.some(Ym)&&(i+=wE),e&&(i+=ME),t.filter(r=>!Ym(r)).reduce((r,s)=>r+(yE.test(s)?SE:s===""?EE:TE),i)}function CE(n,e){return n.length===e.length&&n.slice(0,-1).every((i,r)=>i===e[r])?n[n.length-1]-e[e.length-1]:0}function RE(n,e){let{routesMeta:t}=n,i={},r="/",s=[];for(let o=0;o<t.length;++o){let a=t[o],l=o===t.length-1,u=r==="/"?e:e.slice(r.length)||"/",c=bE({path:a.relativePath,caseSensitive:a.caseSensitive,end:l},u);if(!c)return null;Object.assign(i,c.params);let d=a.route;s.push({params:i,pathname:rs([r,c.pathname]),pathnameBase:FE(rs([r,c.pathnameBase])),route:d}),c.pathnameBase!=="/"&&(r=rs([r,c.pathnameBase]))}return s}function bE(n,e){typeof n=="string"&&(n={path:n,caseSensitive:!1,end:!0});let[t,i]=PE(n.path,n.caseSensitive,n.end),r=e.match(t);if(!r)return null;let s=r[0],o=s.replace(/(.)\/+$/,"$1"),a=r.slice(1);return{params:i.reduce((u,c,d)=>{if(c==="*"){let h=a[d]||"";o=s.slice(0,s.length-h.length).replace(/(.)\/+$/,"$1")}return u[c]=DE(a[d]||"",c),u},{}),pathname:s,pathnameBase:o,pattern:n}}function PE(n,e,t){e===void 0&&(e=!1),t===void 0&&(t=!0),tp(n==="*"||!n.endsWith("*")||n.endsWith("/*"),'Route path "'+n+'" will be treated as if it were '+('"'+n.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+n.replace(/\*$/,"/*")+'".'));let i=[],r="^"+n.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^$?{}|()[\]]/g,"\\$&").replace(/\/:(\w+)/g,(o,a)=>(i.push(a),"/([^\\/]+)"));return n.endsWith("*")?(i.push("*"),r+=n==="*"||n==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):t?r+="\\/*$":n!==""&&n!=="/"&&(r+="(?:(?=\\/|$))"),[new RegExp(r,e?void 0:"i"),i]}function LE(n){try{return decodeURI(n)}catch(e){return tp(!1,'The URL path "'+n+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+e+").")),n}}function DE(n,e){try{return decodeURIComponent(n)}catch(t){return tp(!1,'The value for the URL param "'+e+'" will not be decoded because'+(' the string "'+n+'" is a malformed URL segment. This is probably')+(" due to a bad percent encoding ("+t+").")),n}}function Qv(n,e){if(e==="/")return n;if(!n.toLowerCase().startsWith(e.toLowerCase()))return null;let t=e.endsWith("/")?e.length-1:e.length,i=n.charAt(t);return i&&i!=="/"?null:n.slice(t)||"/"}function UE(n,e){e===void 0&&(e="/");let{pathname:t,search:i="",hash:r=""}=typeof n=="string"?Bo(n):n;return{pathname:t?t.startsWith("/")?t:NE(t,e):e,search:kE(i),hash:zE(r)}}function NE(n,e){let t=e.replace(/\/+$/,"").split("/");return n.split("/").forEach(r=>{r===".."?t.length>1&&t.pop():r!=="."&&t.push(r)}),t.length>1?t.join("/"):"/"}function Kc(n,e,t,i){return"Cannot include a '"+n+"' character in a manually specified "+("`to."+e+"` field ["+JSON.stringify(i)+"].  Please separate it out to the ")+("`to."+t+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function IE(n){return n.filter((e,t)=>t===0||e.route.path&&e.route.path.length>0)}function OE(n,e,t,i){i===void 0&&(i=!1);let r;typeof n=="string"?r=Bo(n):(r=Ha({},n),bt(!r.pathname||!r.pathname.includes("?"),Kc("?","pathname","search",r)),bt(!r.pathname||!r.pathname.includes("#"),Kc("#","pathname","hash",r)),bt(!r.search||!r.search.includes("#"),Kc("#","search","hash",r)));let s=n===""||r.pathname==="",o=s?"/":r.pathname,a;if(i||o==null)a=t;else{let d=e.length-1;if(o.startsWith("..")){let h=o.split("/");for(;h[0]==="..";)h.shift(),d-=1;r.pathname=h.join("/")}a=d>=0?e[d]:"/"}let l=UE(r,a),u=o&&o!=="/"&&o.endsWith("/"),c=(s||o===".")&&t.endsWith("/");return!l.pathname.endsWith("/")&&(u||c)&&(l.pathname+="/"),l}const rs=n=>n.join("/").replace(/\/\/+/g,"/"),FE=n=>n.replace(/\/+$/,"").replace(/^\/*/,"/"),kE=n=>!n||n==="?"?"":n.startsWith("?")?n:"?"+n,zE=n=>!n||n==="#"?"":n.startsWith("#")?n:"#"+n;function BE(n){return n!=null&&typeof n.status=="number"&&typeof n.statusText=="string"&&typeof n.internal=="boolean"&&"data"in n}const Jv=["post","put","patch","delete"];new Set(Jv);const HE=["get",...Jv];new Set(HE);/**
 * React Router v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Fu(){return Fu=Object.assign?Object.assign.bind():function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(n[i]=t[i])}return n},Fu.apply(this,arguments)}const np=pe.createContext(null),VE=pe.createContext(null),cc=pe.createContext(null),fc=pe.createContext(null),Ho=pe.createContext({outlet:null,matches:[],isDataRoute:!1}),ex=pe.createContext(null);function dc(){return pe.useContext(fc)!=null}function ip(){return dc()||bt(!1),pe.useContext(fc).location}function tx(n){pe.useContext(cc).static||pe.useLayoutEffect(n)}function hc(){let{isDataRoute:n}=pe.useContext(Ho);return n?t1():GE()}function GE(){dc()||bt(!1);let n=pe.useContext(np),{basename:e,navigator:t}=pe.useContext(cc),{matches:i}=pe.useContext(Ho),{pathname:r}=ip(),s=JSON.stringify(IE(i).map(l=>l.pathnameBase)),o=pe.useRef(!1);return tx(()=>{o.current=!0}),pe.useCallback(function(l,u){if(u===void 0&&(u={}),!o.current)return;if(typeof l=="number"){t.go(l);return}let c=OE(l,JSON.parse(s),r,u.relative==="path");n==null&&e!=="/"&&(c.pathname=c.pathname==="/"?e:rs([e,c.pathname])),(u.replace?t.replace:t.push)(c,u.state,u)},[e,t,s,r,n])}function WE(n,e){return jE(n,e)}function jE(n,e,t){dc()||bt(!1);let{navigator:i}=pe.useContext(cc),{matches:r}=pe.useContext(Ho),s=r[r.length-1],o=s?s.params:{};s&&s.pathname;let a=s?s.pathnameBase:"/";s&&s.route;let l=ip(),u;if(e){var c;let g=typeof e=="string"?Bo(e):e;a==="/"||(c=g.pathname)!=null&&c.startsWith(a)||bt(!1),u=g}else u=l;let d=u.pathname||"/",h=a==="/"?d:d.slice(a.length)||"/",p=vE(n,{pathname:h}),v=KE(p&&p.map(g=>Object.assign({},g,{params:Object.assign({},o,g.params),pathname:rs([a,i.encodeLocation?i.encodeLocation(g.pathname).pathname:g.pathname]),pathnameBase:g.pathnameBase==="/"?a:rs([a,i.encodeLocation?i.encodeLocation(g.pathnameBase).pathname:g.pathnameBase])})),r,t);return e&&v?pe.createElement(fc.Provider,{value:{location:Fu({pathname:"/",search:"",hash:"",state:null,key:"default"},u),navigationType:lr.Pop}},v):v}function XE(){let n=e1(),e=BE(n)?n.status+" "+n.statusText:n instanceof Error?n.message:JSON.stringify(n),t=n instanceof Error?n.stack:null,r={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"},s=null;return pe.createElement(pe.Fragment,null,pe.createElement("h2",null,"Unexpected Application Error!"),pe.createElement("h3",{style:{fontStyle:"italic"}},e),t?pe.createElement("pre",{style:r},t):null,s)}const YE=pe.createElement(XE,null);class qE extends pe.Component{constructor(e){super(e),this.state={location:e.location,revalidation:e.revalidation,error:e.error}}static getDerivedStateFromError(e){return{error:e}}static getDerivedStateFromProps(e,t){return t.location!==e.location||t.revalidation!=="idle"&&e.revalidation==="idle"?{error:e.error,location:e.location,revalidation:e.revalidation}:{error:e.error||t.error,location:t.location,revalidation:e.revalidation||t.revalidation}}componentDidCatch(e,t){console.error("React Router caught the following error during render",e,t)}render(){return this.state.error?pe.createElement(Ho.Provider,{value:this.props.routeContext},pe.createElement(ex.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function $E(n){let{routeContext:e,match:t,children:i}=n,r=pe.useContext(np);return r&&r.static&&r.staticContext&&(t.route.errorElement||t.route.ErrorBoundary)&&(r.staticContext._deepestRenderedBoundaryId=t.route.id),pe.createElement(Ho.Provider,{value:e},i)}function KE(n,e,t){var i;if(e===void 0&&(e=[]),t===void 0&&(t=null),n==null){var r;if((r=t)!=null&&r.errors)n=t.matches;else return null}let s=n,o=(i=t)==null?void 0:i.errors;if(o!=null){let a=s.findIndex(l=>l.route.id&&(o==null?void 0:o[l.route.id]));a>=0||bt(!1),s=s.slice(0,Math.min(s.length,a+1))}return s.reduceRight((a,l,u)=>{let c=l.route.id?o==null?void 0:o[l.route.id]:null,d=null;t&&(d=l.route.errorElement||YE);let h=e.concat(s.slice(0,u+1)),p=()=>{let v;return c?v=d:l.route.Component?v=pe.createElement(l.route.Component,null):l.route.element?v=l.route.element:v=a,pe.createElement($E,{match:l,routeContext:{outlet:a,matches:h,isDataRoute:t!=null},children:v})};return t&&(l.route.ErrorBoundary||l.route.errorElement||u===0)?pe.createElement(qE,{location:t.location,revalidation:t.revalidation,component:d,error:c,children:p(),routeContext:{outlet:null,matches:h,isDataRoute:!0}}):p()},null)}var Nd;(function(n){n.UseBlocker="useBlocker",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate"})(Nd||(Nd={}));var Va;(function(n){n.UseBlocker="useBlocker",n.UseLoaderData="useLoaderData",n.UseActionData="useActionData",n.UseRouteError="useRouteError",n.UseNavigation="useNavigation",n.UseRouteLoaderData="useRouteLoaderData",n.UseMatches="useMatches",n.UseRevalidator="useRevalidator",n.UseNavigateStable="useNavigate",n.UseRouteId="useRouteId"})(Va||(Va={}));function ZE(n){let e=pe.useContext(np);return e||bt(!1),e}function QE(n){let e=pe.useContext(VE);return e||bt(!1),e}function JE(n){let e=pe.useContext(Ho);return e||bt(!1),e}function nx(n){let e=JE(),t=e.matches[e.matches.length-1];return t.route.id||bt(!1),t.route.id}function e1(){var n;let e=pe.useContext(ex),t=QE(Va.UseRouteError),i=nx(Va.UseRouteError);return e||((n=t.errors)==null?void 0:n[i])}function t1(){let{router:n}=ZE(Nd.UseNavigateStable),e=nx(Va.UseNavigateStable),t=pe.useRef(!1);return tx(()=>{t.current=!0}),pe.useCallback(function(r,s){s===void 0&&(s={}),t.current&&(typeof r=="number"?n.navigate(r):n.navigate(r,Fu({fromRouteId:e},s)))},[n,e])}function lu(n){bt(!1)}function n1(n){let{basename:e="/",children:t=null,location:i,navigationType:r=lr.Pop,navigator:s,static:o=!1}=n;dc()&&bt(!1);let a=e.replace(/^\/*/,"/"),l=pe.useMemo(()=>({basename:a,navigator:s,static:o}),[a,s,o]);typeof i=="string"&&(i=Bo(i));let{pathname:u="/",search:c="",hash:d="",state:h=null,key:p="default"}=i,v=pe.useMemo(()=>{let g=Qv(u,a);return g==null?null:{location:{pathname:g,search:c,hash:d,state:h,key:p},navigationType:r}},[a,u,c,d,h,p,r]);return v==null?null:pe.createElement(cc.Provider,{value:l},pe.createElement(fc.Provider,{children:t,value:v}))}function i1(n){let{children:e,location:t}=n;return WE(Id(e),t)}var qm;(function(n){n[n.pending=0]="pending",n[n.success=1]="success",n[n.error=2]="error"})(qm||(qm={}));new Promise(()=>{});function Id(n,e){e===void 0&&(e=[]);let t=[];return pe.Children.forEach(n,(i,r)=>{if(!pe.isValidElement(i))return;let s=[...e,r];if(i.type===pe.Fragment){t.push.apply(t,Id(i.props.children,s));return}i.type!==lu&&bt(!1),!i.props.index||!i.props.children||bt(!1);let o={id:i.props.id||s.join("-"),caseSensitive:i.props.caseSensitive,element:i.props.element,Component:i.props.Component,index:i.props.index,path:i.props.path,loader:i.props.loader,action:i.props.action,errorElement:i.props.errorElement,ErrorBoundary:i.props.ErrorBoundary,hasErrorBoundary:i.props.ErrorBoundary!=null||i.props.errorElement!=null,shouldRevalidate:i.props.shouldRevalidate,handle:i.props.handle,lazy:i.props.lazy};i.props.children&&(o.children=Id(i.props.children,s)),t.push(o)}),t}/**
 * React Router DOM v6.11.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function r1(n){let{basename:e,children:t,window:i}=n,r=pe.useRef();r.current==null&&(r.current=mE({window:i,v5Compat:!0}));let s=r.current,[o,a]=pe.useState({action:s.action,location:s.location});return pe.useLayoutEffect(()=>s.listen(a),[s]),pe.createElement(n1,{basename:e,children:t,location:o.location,navigationType:o.action,navigator:s})}var $m;(function(n){n.UseScrollRestoration="useScrollRestoration",n.UseSubmitImpl="useSubmitImpl",n.UseFetcher="useFetcher"})($m||($m={}));var Km;(function(n){n.UseFetchers="useFetchers",n.UseScrollRestoration="useScrollRestoration"})(Km||(Km={}));const mo=({text:n,path:e,iconClass:t,setNavOpen:i})=>{const r=hc(),s=window.location.pathname;return k.jsxs("div",{onClick:()=>{r(e),i&&i(!1)},className:s==e?"nav-item nav-item-br":"nav-item",style:{fontWeight:"600"},children:[k.jsx("i",{className:t}),k.jsx("p",{children:n})]})},s1=()=>k.jsxs("nav",{children:[k.jsx(mo,{text:"/ ",path:"/",iconClass:"fa-sharp fa-solid fa-house"}),k.jsx(mo,{text:"/  about",path:"/about",iconClass:"fa-solid fa-address-card"}),k.jsx(mo,{text:"/  contact",path:"/contact",iconClass:"fa-sharp fa-solid fa-envelope"})]}),o1=()=>{const[n,e]=pe.useState(!1);return pe.useEffect(()=>{const t=document.querySelector("#htmlTag");n?t.style.overflow="hidden":t.style.overflow="auto"},[n]),k.jsxs(k.Fragment,{children:[n&&k.jsx("div",{className:"nav-small-background",onClick:()=>e(!1)}),k.jsxs("div",{className:"navSmall-container",children:[k.jsx("i",{className:"fa-solid fa-bars navTogglerIcon",onClick:()=>e(!0)}),k.jsxs("div",{className:"items-container",style:{left:n?"-20px":"-260px"},children:[k.jsx("i",{className:"fa-solid fa-arrow-right closeNavIcon",onClick:()=>e(!1)}),k.jsx(mo,{setNavOpen:e,text:"/  home",path:"/",iconClass:"fa-sharp fa-solid fa-house"}),k.jsx(mo,{setNavOpen:e,text:"/  about",path:"/about",iconClass:"fa-solid fa-address-card"}),k.jsx(mo,{setNavOpen:e,text:"/  contact",path:"/contact",iconClass:"fa-sharp fa-solid fa-envelope"})]})]})]})};function ix(){const[n,e]=pe.useState(window.innerWidth<540);return pe.useEffect(()=>{window.addEventListener("resize",t);function t(){window.innerWidth<540?e(!1):e(!0)}return t(),()=>{window.removeEventListener("resize",t)}},[]),{isMobile:n}}function a1(){const n=document.getElementsByTagName("body")[0],[e,t]=pe.useState(!1);function i(){t(r=>!r),localStorage.setItem("lightmode",JSON.stringify(e)),n.classList.toggle("lightmode")}return pe.useEffect(()=>{const r=JSON.parse(localStorage.getItem("lightmode"));r&&(n.classList.add("lightmode"),t(r))},[]),pe.useEffect(()=>{localStorage.setItem("lightmode",JSON.stringify(e))},[e]),{body:n,toggleLightmode:i,isLightMode:e}}const l1=()=>{const{isMobile:n}=ix(),{toggleLightmode:e,isLightMode:t}=a1(),i=hc(),r=ip();return k.jsxs("header",{style:{height:n?"90px":"74px"},children:[n?k.jsx(s1,{}):k.jsx(o1,{}),!n&&r.pathname!=="/"&&k.jsx("img",{src:"../avatar.png",onClick:()=>i("/"),alt:"my personal image",draggable:!1,className:"nav-small-image"}),k.jsx("div",{className:"theme-toggler",children:t?k.jsx("img",{src:"../vectors/moon.svg",onClick:e}):k.jsx("img",{src:"../vectors/sun.png",style:{width:"35px"},onClick:e})})]})};const rp=({text:n,path:e,iconClass:t})=>{const i=hc();return k.jsxs("button",{className:"button",onClick:()=>i(e),children:[k.jsx("span",{children:n}),k.jsx("i",{className:t,style:{marginLeft:"0.4em"}}),k.jsx("div",{className:"border full-rounded"})]})};function u1(){window.open("https://www.linkedin.com/company/kubrik-digital/?trk=public_profile_experience-item_profile-section-card_subtitle-click&originalSubdomain=ar")}const c1=()=>k.jsxs("div",{className:"profile-container",children:[k.jsxs("div",{className:"profile-picture",children:[k.jsx("img",{src:"../avatar.png",alt:"my personal image!",width:"174px",draggable:!1}),k.jsxs("div",{className:"profile-status",children:[k.jsx("div",{className:"status"}),k.jsxs("p",{className:"profile-status-p",children:[" Working at ",k.jsx("b",{style:{cursor:"pointer"},onClick:u1,children:"  Kubrik"})]})]})]}),k.jsxs("div",{className:"profile-data",children:[k.jsx("h1",{children:"Vittorio Pugliese"}),k.jsx("p",{children:"Web development and innovation passionate."}),k.jsx("div",{className:"profile-buttons",children:k.jsx("a",{href:"./Vittorio-Pugliese-Resume.pdf",download:!0,children:k.jsx(rp,{text:"Download Resume",resume:!0,iconClass:"fa-solid fa-paperclip"})})})]})]}),Od=({project:n,miniBox:e})=>k.jsx("div",{className:"project-techno-icons",children:n.tech.map((t,i)=>k.jsx("img",{src:`./vectors/${t}.svg`,loading:"lazy",draggable:!1,alt:t,style:{position:"relative",fontSize:t=="angular"?"1.4em":"1em",bottom:t=="angular"?"1px":"0px",width:e?"0.8em":"1em"},className:t},t+i))}),f1=({project:n})=>{const{isMobile:e}=ix();return k.jsxs("div",{className:"project-box","data-aos":"fade-up",onClick:()=>{window.open(n.link)},children:[k.jsx("div",{className:"project-image-container",children:k.jsx("img",{src:n.image,alt:"project-image",draggable:!1})}),k.jsxs("div",{className:"project-info",children:[e?k.jsx("div",{children:k.jsx("h3",{children:n.title})}):k.jsxs("div",{style:{display:"flex",flexDirection:"row",justifyContent:"space-between"},children:[k.jsx("h3",{children:n.title}),k.jsx(Od,{project:n})]}),k.jsx("p",{children:n.description}),e&&k.jsx(Od,{project:n}),!e&&k.jsx("hr",{})]})]})};const Rr=({iconClass:n,title:e,aperture:t})=>k.jsx("div",{className:"section-title","data-aos":"fade-right",children:k.jsxs("div",{children:[!t&&k.jsx("i",{className:n}),t&&k.jsx("img",{className:"react",src:"./vectors/aperture.svg"}),k.jsx("h2",{children:e})]})}),d1=[{title:"GPTherapist",description:"Talk about your problems with an OpenAi's GPT-based therapist trained with experienced psycologist data. App interactions costs credits, initially there're 1000 free.",image:"./project-images/image1.png",tech:["react","javascript","openai"],link:"https://gptherapist.vittoriop.dev"},{title:"NFTorio",description:"Digital market. Watch, listen and buy my personal list of images and music NFT's. Integrated Crypto payments. Includes a built-in music player made with vanilla JS.",image:"./project-images/image2.png",tech:["html","css","javascript"],link:"https://nftorio.vittoriop.dev"}],h1=()=>k.jsxs("section",{className:"projects-section-container",children:[k.jsx(Rr,{iconClass:"fa-solid fa-layer-group",title:"Main Projects"}),k.jsx("div",{className:"projects-container",children:d1.map(n=>k.jsx(f1,{project:n},n.title))})]}),p1=({project:n})=>k.jsxs("div",{className:"project-card","data-aos":n.aos,onClick:()=>{window.open(n.link)},children:[k.jsxs("div",{className:"card-header",children:[k.jsx("h3",{children:n.title}),k.jsx("i",{className:"openlinkicon fa-solid fa-arrow-up-right-from-square"})]}),k.jsx("p",{children:n.description}),k.jsx("div",{className:"card-icons",children:k.jsx(Od,{project:n,miniBox:!0})})]});const m1=[{title:"drumpads",description:"Assign a letter and a sound to a pad, then play the drums like an expert!",link:"https://drumpads.vittoriop.dev/",tech:["html","css","javascript"],aos:"fade-right"},{title:"TopCloud",description:"Music page where you can create an account and upload your own music.",link:"https://topcloud-9b8d4.web.app/",tech:["angular","typescript","firebase"],aos:"fade-left"},{title:"dsf representations",description:"Presentation card to a recognized salesman.",link:"https://dsfrepresentaciones.com/",tech:["html","css","javascript"],aos:"fade-right"},{title:"breaking bad quotes",description:"Simple page to get quotes from Breaking Bad's characters.",link:"https://breakingquotes.vittoriop.dev/",tech:["react","breakingbad"],aos:"fade-left"},{title:"Previous Portfolio",description:"My own old portfolio page made with vanilla JS.",link:"https://vittoriop.dev/",tech:["html","css","javascript"],aos:"fade-right"}],g1=()=>k.jsx("div",{children:k.jsxs("section",{className:"more-projects-section",children:[k.jsx(Rr,{iconClass:"fa-solid fa-network-wired",title:"More Projects"}),k.jsx("div",{className:"more-projects-container",children:m1.map(n=>k.jsx(p1,{project:n},n.title))})]})}),_1=({tech:n,techSelected:e,techHover:t})=>{const[i,r]=pe.useState();function s(a){const c=a.target.src.split("/")[4].split(".")[0];r(c),t(n.desc),e(n.desc)}function o(){r(null),t(null)}return k.jsxs("div",{className:"tech-slide-image",children:[k.jsx("img",{className:"carrousel-image",draggable:"false",src:`./tech-logos/${n.name}.webp`,onMouseOver:a=>s(a),onMouseLeave:a=>o(),style:{scale:i==n.name?"1.05":"1"}}),k.jsx("p",{style:{opacity:i==n.name?"1":"0"},children:n.name})]})};const v1=()=>{pe.useState();const[n,e]=pe.useState("Hover a tech to see a description..."),[t,i]=pe.useState(0),r=[{name:"HTML",desc:"Hypertext markup language, it gives structure to the page. This works with 'Tags'."},{name:"CSS",desc:"Responsible for giving Style to the page. This works whit classes."},{name:"JavaScript",desc:"Programming language that allows you to put logic onto web pages."},{name:"Git",desc:"Source code management tool. It's used to control the versions of the page."},{name:"TypeScript",desc:"Superset of JavaScript that adds static typing to the language."},{name:"Angular",desc:"Front-end framework by Google. Used for building dynamic and scalable apps."},{name:"RxJS",desc:"Reactive programming library. It allows working with asynchronous data streams."},{name:"React",desc:"JavaScript library by Meta that's used for building user interfaces."},{name:"Tailwind",desc:"CSS framework that works with classes."},{name:"Firebase",desc:"Application development software. Databases, user registration & more."},{name:"NodeJS",desc:"A JS runtime environment that allows JS to be run on the server-side."}];function s(o){e(o)}return k.jsxs("section",{className:"carousel",children:[k.jsx(Rr,{iconClass:"fa-solid fa-microchip",title:"Technologies I use"}),k.jsxs("p",{className:"tech-desc",style:{opacity:t?"1":"0"},children:[" ",n," "]}),k.jsx("div",{className:"slider",children:k.jsx("div",{className:"slide-track",children:k.jsx("div",{className:"slide",children:r.map((o,a)=>k.jsx(_1,{tech:o,techHover:l=>i(l),techSelected:s},a*a))})})})]})};/**
 * @license
 * Copyright 2010-2023 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const sp="153",Cs={LEFT:0,MIDDLE:1,RIGHT:2,ROTATE:0,DOLLY:1,PAN:2},Rs={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},x1=0,Zm=1,y1=2,rx=1,S1=2,Di=3,br=0,hn=1,Fi=2,Mr=0,go=1,Qm=2,Jm=3,eg=4,M1=5,Xs=100,E1=101,T1=102,tg=103,ng=104,w1=200,A1=201,C1=202,R1=203,sx=204,ox=205,b1=206,P1=207,L1=208,D1=209,U1=210,N1=0,I1=1,O1=2,Fd=3,F1=4,k1=5,z1=6,B1=7,ax=0,H1=1,V1=2,Gi=0,G1=1,W1=2,j1=3,X1=4,Y1=5,lx=300,Ro=301,bo=302,kd=303,zd=304,pc=306,Bd=1e3,si=1001,Hd=1002,tn=1003,ig=1004,Zc=1005,Bn=1006,q1=1007,Ga=1008,Er=1009,$1=1010,K1=1011,op=1012,ux=1013,ur=1014,cr=1015,Wa=1016,cx=1017,fx=1018,ss=1020,Z1=1021,oi=1023,Q1=1024,J1=1025,os=1026,Po=1027,eT=1028,dx=1029,tT=1030,hx=1031,px=1033,Qc=33776,Jc=33777,ef=33778,tf=33779,rg=35840,sg=35841,og=35842,ag=35843,nT=36196,lg=37492,ug=37496,cg=37808,fg=37809,dg=37810,hg=37811,pg=37812,mg=37813,gg=37814,_g=37815,vg=37816,xg=37817,yg=37818,Sg=37819,Mg=37820,Eg=37821,nf=36492,iT=36283,Tg=36284,wg=36285,Ag=36286,mx=3e3,as=3001,rT=3200,sT=3201,gx=0,oT=1,ls="",Fe="srgb",Ei="srgb-linear",_x="display-p3",rf=7680,aT=519,lT=512,uT=513,cT=514,fT=515,dT=516,hT=517,pT=518,mT=519,Cg=35044,Rg="300 es",Vd=1035,Bi=2e3,ku=2001;class Ts{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(t)===-1&&i[e].push(t)}hasEventListener(e,t){if(this._listeners===void 0)return!1;const i=this._listeners;return i[e]!==void 0&&i[e].indexOf(t)!==-1}removeEventListener(e,t){if(this._listeners===void 0)return;const r=this._listeners[e];if(r!==void 0){const s=r.indexOf(t);s!==-1&&r.splice(s,1)}}dispatchEvent(e){if(this._listeners===void 0)return;const i=this._listeners[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const Wt=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],sf=Math.PI/180,Gd=180/Math.PI;function il(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Wt[n&255]+Wt[n>>8&255]+Wt[n>>16&255]+Wt[n>>24&255]+"-"+Wt[e&255]+Wt[e>>8&255]+"-"+Wt[e>>16&15|64]+Wt[e>>24&255]+"-"+Wt[t&63|128]+Wt[t>>8&255]+"-"+Wt[t>>16&255]+Wt[t>>24&255]+Wt[i&255]+Wt[i>>8&255]+Wt[i>>16&255]+Wt[i>>24&255]).toLowerCase()}function nn(n,e,t){return Math.max(e,Math.min(t,n))}function gT(n,e){return(n%e+e)%e}function of(n,e,t){return(1-t)*n+t*e}function bg(n){return(n&n-1)===0&&n!==0}function Wd(n){return Math.pow(2,Math.floor(Math.log(n)/Math.LN2))}function Cl(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("Invalid component type.")}}function yn(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("Invalid component type.")}}class Ie{constructor(e=0,t=0){Ie.prototype.isVector2=!0,this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,i=this.y,r=e.elements;return this.x=r[0]*t+r[3]*i+r[6],this.y=r[1]*t+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y;return t*t+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const i=Math.cos(t),r=Math.sin(t),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Be{constructor(e,t,i,r,s,o,a,l,u){Be.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u)}set(e,t,i,r,s,o,a,l,u){const c=this.elements;return c[0]=e,c[1]=r,c[2]=a,c[3]=t,c[4]=s,c[5]=l,c[6]=i,c[7]=o,c[8]=u,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],this}extractBasis(e,t,i){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[3],l=i[6],u=i[1],c=i[4],d=i[7],h=i[2],p=i[5],v=i[8],g=r[0],m=r[3],f=r[6],_=r[1],x=r[4],y=r[7],S=r[2],E=r[5],A=r[8];return s[0]=o*g+a*_+l*S,s[3]=o*m+a*x+l*E,s[6]=o*f+a*y+l*A,s[1]=u*g+c*_+d*S,s[4]=u*m+c*x+d*E,s[7]=u*f+c*y+d*A,s[2]=h*g+p*_+v*S,s[5]=h*m+p*x+v*E,s[8]=h*f+p*y+v*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8];return t*o*c-t*a*u-i*s*c+i*a*l+r*s*u-r*o*l}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=c*o-a*u,h=a*l-c*s,p=u*s-o*l,v=t*d+i*h+r*p;if(v===0)return this.set(0,0,0,0,0,0,0,0,0);const g=1/v;return e[0]=d*g,e[1]=(r*u-c*i)*g,e[2]=(a*i-r*o)*g,e[3]=h*g,e[4]=(c*t-r*l)*g,e[5]=(r*s-a*t)*g,e[6]=p*g,e[7]=(i*l-u*t)*g,e[8]=(o*t-i*s)*g,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,i,r,s,o,a){const l=Math.cos(s),u=Math.sin(s);return this.set(i*l,i*u,-i*(l*o+u*a)+o+e,-r*u,r*l,-r*(-u*o+l*a)+a+t,0,0,1),this}scale(e,t){return this.premultiply(af.makeScale(e,t)),this}rotate(e){return this.premultiply(af.makeRotation(-e)),this}translate(e,t){return this.premultiply(af.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,i,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<9;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<9;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const af=new Be;function vx(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function zu(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}const Pg={};function ya(n){n in Pg||(Pg[n]=!0,console.warn(n))}function _o(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function lf(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}const _T=new Be().fromArray([.8224621,.0331941,.0170827,.177538,.9668058,.0723974,-1e-7,1e-7,.9105199]),vT=new Be().fromArray([1.2249401,-.0420569,-.0196376,-.2249404,1.0420571,-.0786361,1e-7,0,1.0982735]);function xT(n){return n.convertSRGBToLinear().applyMatrix3(vT)}function yT(n){return n.applyMatrix3(_T).convertLinearToSRGB()}const ST={[Ei]:n=>n,[Fe]:n=>n.convertSRGBToLinear(),[_x]:xT},MT={[Ei]:n=>n,[Fe]:n=>n.convertLinearToSRGB(),[_x]:yT},Zn={enabled:!0,get legacyMode(){return console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),!this.enabled},set legacyMode(n){console.warn("THREE.ColorManagement: .legacyMode=false renamed to .enabled=true in r150."),this.enabled=!n},get workingColorSpace(){return Ei},set workingColorSpace(n){console.warn("THREE.ColorManagement: .workingColorSpace is readonly.")},convert:function(n,e,t){if(this.enabled===!1||e===t||!e||!t)return n;const i=ST[e],r=MT[t];if(i===void 0||r===void 0)throw new Error(`Unsupported color space conversion, "${e}" to "${t}".`);return r(i(n))},fromWorkingColorSpace:function(n,e){return this.convert(n,this.workingColorSpace,e)},toWorkingColorSpace:function(n,e){return this.convert(n,e,this.workingColorSpace)}};let bs;class xx{static getDataURL(e){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let t;if(e instanceof HTMLCanvasElement)t=e;else{bs===void 0&&(bs=zu("canvas")),bs.width=e.width,bs.height=e.height;const i=bs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),t=bs}return t.width>2048||t.height>2048?(console.warn("THREE.ImageUtils.getDataURL: Image converted to jpg for performance reasons",e),t.toDataURL("image/jpeg",.6)):t.toDataURL("image/png")}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=zu("canvas");t.width=e.width,t.height=e.height;const i=t.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=_o(s[o]/255)*255;return i.putImageData(r,0,0),t}else if(e.data){const t=e.data.slice(0);for(let i=0;i<t.length;i++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[i]=Math.floor(_o(t[i]/255)*255):t[i]=_o(t[i]);return{data:t,width:e.width,height:e.height}}else return console.warn("THREE.ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let ET=0;class yx{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:ET++}),this.uuid=il(),this.data=e,this.version=0}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(uf(r[o].image)):s.push(uf(r[o]))}else s=uf(r);i.url=s}return t||(e.images[this.uuid]=i),i}}function uf(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?xx.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(console.warn("THREE.Texture: Unable to serialize Texture."),{})}let TT=0;class bn extends Ts{constructor(e=bn.DEFAULT_IMAGE,t=bn.DEFAULT_MAPPING,i=si,r=si,s=Bn,o=Ga,a=oi,l=Er,u=bn.DEFAULT_ANISOTROPY,c=ls){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:TT++}),this.uuid=il(),this.name="",this.source=new yx(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=u,this.format=a,this.internalFormat=null,this.type=l,this.offset=new Ie(0,0),this.repeat=new Ie(1,1),this.center=new Ie(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new Be,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,typeof c=="string"?this.colorSpace=c:(ya("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=c===as?Fe:ls),this.userData={},this.version=0,this.onUpdate=null,this.isRenderTargetTexture=!1,this.needsPMREMUpdate=!1}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.6,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),t||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==lx)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Bd:e.x=e.x-Math.floor(e.x);break;case si:e.x=e.x<0?0:1;break;case Hd:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Bd:e.y=e.y-Math.floor(e.y);break;case si:e.y=e.y<0?0:1;break;case Hd:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}get encoding(){return ya("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace===Fe?as:mx}set encoding(e){ya("THREE.Texture: Property .encoding has been replaced by .colorSpace."),this.colorSpace=e===as?Fe:ls}}bn.DEFAULT_IMAGE=null;bn.DEFAULT_MAPPING=lx;bn.DEFAULT_ANISOTROPY=1;class ot{constructor(e=0,t=0,i=0,r=1){ot.prototype.isVector4=!0,this.x=e,this.y=t,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,i,r){return this.x=e,this.y=t,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*t+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*t+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*t+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*t+o[7]*i+o[11]*r+o[15]*s,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,i,r,s;const l=e.elements,u=l[0],c=l[4],d=l[8],h=l[1],p=l[5],v=l[9],g=l[2],m=l[6],f=l[10];if(Math.abs(c-h)<.01&&Math.abs(d-g)<.01&&Math.abs(v-m)<.01){if(Math.abs(c+h)<.1&&Math.abs(d+g)<.1&&Math.abs(v+m)<.1&&Math.abs(u+p+f-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const x=(u+1)/2,y=(p+1)/2,S=(f+1)/2,E=(c+h)/4,A=(d+g)/4,C=(v+m)/4;return x>y&&x>S?x<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(x),r=E/i,s=A/i):y>S?y<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(y),i=E/r,s=C/r):S<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(S),i=A/s,r=C/s),this.set(i,r,s,t),this}let _=Math.sqrt((m-v)*(m-v)+(d-g)*(d-g)+(h-c)*(h-c));return Math.abs(_)<.001&&(_=1),this.x=(m-v)/_,this.y=(d-g)/_,this.z=(h-c)/_,this.w=Math.acos((u+p+f-1)/2),this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this.w=Math.max(e.w,Math.min(t.w,this.w)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this.w=Math.max(e,Math.min(t,this.w)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this.w=this.w<0?Math.ceil(this.w):Math.floor(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this.w=e.w+(t.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class vs extends Ts{constructor(e=1,t=1,i={}){super(),this.isWebGLRenderTarget=!0,this.width=e,this.height=t,this.depth=1,this.scissor=new ot(0,0,e,t),this.scissorTest=!1,this.viewport=new ot(0,0,e,t);const r={width:e,height:t,depth:1};i.encoding!==void 0&&(ya("THREE.WebGLRenderTarget: option.encoding has been replaced by option.colorSpace."),i.colorSpace=i.encoding===as?Fe:ls),this.texture=new bn(r,i.mapping,i.wrapS,i.wrapT,i.magFilter,i.minFilter,i.format,i.type,i.anisotropy,i.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.flipY=!1,this.texture.generateMipmaps=i.generateMipmaps!==void 0?i.generateMipmaps:!1,this.texture.internalFormat=i.internalFormat!==void 0?i.internalFormat:null,this.texture.minFilter=i.minFilter!==void 0?i.minFilter:Bn,this.depthBuffer=i.depthBuffer!==void 0?i.depthBuffer:!0,this.stencilBuffer=i.stencilBuffer!==void 0?i.stencilBuffer:!1,this.depthTexture=i.depthTexture!==void 0?i.depthTexture:null,this.samples=i.samples!==void 0?i.samples:0}setSize(e,t,i=1){(this.width!==e||this.height!==t||this.depth!==i)&&(this.width=e,this.height=t,this.depth=i,this.texture.image.width=e,this.texture.image.height=t,this.texture.image.depth=i,this.dispose()),this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.texture=e.texture.clone(),this.texture.isRenderTargetTexture=!0;const t=Object.assign({},e.texture.image);return this.texture.source=new yx(t),this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Sx extends bn{constructor(e=null,t=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class wT extends bn{constructor(e=null,t=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:i,depth:r},this.magFilter=tn,this.minFilter=tn,this.wrapR=si,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class xs{constructor(e=0,t=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=i,this._w=r}static slerpFlat(e,t,i,r,s,o,a){let l=i[r+0],u=i[r+1],c=i[r+2],d=i[r+3];const h=s[o+0],p=s[o+1],v=s[o+2],g=s[o+3];if(a===0){e[t+0]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d;return}if(a===1){e[t+0]=h,e[t+1]=p,e[t+2]=v,e[t+3]=g;return}if(d!==g||l!==h||u!==p||c!==v){let m=1-a;const f=l*h+u*p+c*v+d*g,_=f>=0?1:-1,x=1-f*f;if(x>Number.EPSILON){const S=Math.sqrt(x),E=Math.atan2(S,f*_);m=Math.sin(m*E)/S,a=Math.sin(a*E)/S}const y=a*_;if(l=l*m+h*y,u=u*m+p*y,c=c*m+v*y,d=d*m+g*y,m===1-a){const S=1/Math.sqrt(l*l+u*u+c*c+d*d);l*=S,u*=S,c*=S,d*=S}}e[t]=l,e[t+1]=u,e[t+2]=c,e[t+3]=d}static multiplyQuaternionsFlat(e,t,i,r,s,o){const a=i[r],l=i[r+1],u=i[r+2],c=i[r+3],d=s[o],h=s[o+1],p=s[o+2],v=s[o+3];return e[t]=a*v+c*d+l*p-u*h,e[t+1]=l*v+c*h+u*d-a*p,e[t+2]=u*v+c*p+a*h-l*d,e[t+3]=c*v-a*d-l*h-u*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,i,r){return this._x=e,this._y=t,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,u=a(i/2),c=a(r/2),d=a(s/2),h=l(i/2),p=l(r/2),v=l(s/2);switch(o){case"XYZ":this._x=h*c*d+u*p*v,this._y=u*p*d-h*c*v,this._z=u*c*v+h*p*d,this._w=u*c*d-h*p*v;break;case"YXZ":this._x=h*c*d+u*p*v,this._y=u*p*d-h*c*v,this._z=u*c*v-h*p*d,this._w=u*c*d+h*p*v;break;case"ZXY":this._x=h*c*d-u*p*v,this._y=u*p*d+h*c*v,this._z=u*c*v+h*p*d,this._w=u*c*d-h*p*v;break;case"ZYX":this._x=h*c*d-u*p*v,this._y=u*p*d+h*c*v,this._z=u*c*v-h*p*d,this._w=u*c*d+h*p*v;break;case"YZX":this._x=h*c*d+u*p*v,this._y=u*p*d+h*c*v,this._z=u*c*v-h*p*d,this._w=u*c*d-h*p*v;break;case"XZY":this._x=h*c*d-u*p*v,this._y=u*p*d-h*c*v,this._z=u*c*v+h*p*d,this._w=u*c*d+h*p*v;break;default:console.warn("THREE.Quaternion: .setFromEuler() encountered an unknown order: "+o)}return t!==!1&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const i=t/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,i=t[0],r=t[4],s=t[8],o=t[1],a=t[5],l=t[9],u=t[2],c=t[6],d=t[10],h=i+a+d;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(c-l)*p,this._y=(s-u)*p,this._z=(o-r)*p}else if(i>a&&i>d){const p=2*Math.sqrt(1+i-a-d);this._w=(c-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+u)/p}else if(a>d){const p=2*Math.sqrt(1+a-i-d);this._w=(s-u)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+c)/p}else{const p=2*Math.sqrt(1+d-i-a);this._w=(o-r)/p,this._x=(s+u)/p,this._y=(l+c)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let i=e.dot(t)+1;return i<Number.EPSILON?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nn(this.dot(e),-1,1)))}rotateTowards(e,t){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,t/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const i=e._x,r=e._y,s=e._z,o=e._w,a=t._x,l=t._y,u=t._z,c=t._w;return this._x=i*c+o*a+r*u-s*l,this._y=r*c+o*l+s*a-i*u,this._z=s*c+o*u+i*l-r*a,this._w=o*c-i*a-r*l-s*u,this._onChangeCallback(),this}slerp(e,t){if(t===0)return this;if(t===1)return this.copy(e);const i=this._x,r=this._y,s=this._z,o=this._w;let a=o*e._w+i*e._x+r*e._y+s*e._z;if(a<0?(this._w=-e._w,this._x=-e._x,this._y=-e._y,this._z=-e._z,a=-a):this.copy(e),a>=1)return this._w=o,this._x=i,this._y=r,this._z=s,this;const l=1-a*a;if(l<=Number.EPSILON){const p=1-t;return this._w=p*o+t*this._w,this._x=p*i+t*this._x,this._y=p*r+t*this._y,this._z=p*s+t*this._z,this.normalize(),this._onChangeCallback(),this}const u=Math.sqrt(l),c=Math.atan2(u,a),d=Math.sin((1-t)*c)/u,h=Math.sin(t*c)/u;return this._w=o*d+this._w*h,this._x=i*d+this._x*h,this._y=r*d+this._y*h,this._z=s*d+this._z*h,this._onChangeCallback(),this}slerpQuaternions(e,t,i){return this.copy(e).slerp(t,i)}random(){const e=Math.random(),t=Math.sqrt(1-e),i=Math.sqrt(e),r=2*Math.PI*Math.random(),s=2*Math.PI*Math.random();return this.set(t*Math.cos(r),i*Math.sin(s),i*Math.cos(s),t*Math.sin(r))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class B{constructor(e=0,t=0,i=0){B.prototype.isVector3=!0,this.x=e,this.y=t,this.z=i}set(e,t,i){return i===void 0&&(i=this.z),this.x=e,this.y=t,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Lg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Lg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[3]*i+s[6]*r,this.y=s[1]*t+s[4]*i+s[7]*r,this.z=s[2]*t+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*t+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*t+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*t+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*t+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const t=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,u=l*t+o*r-a*i,c=l*i+a*t-s*r,d=l*r+s*i-o*t,h=-s*t-o*i-a*r;return this.x=u*l+h*-s+c*-a-d*-o,this.y=c*l+h*-o+d*-s-u*-a,this.z=d*l+h*-a+u*-o-c*-s,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*t+s[4]*i+s[8]*r,this.y=s[1]*t+s[5]*i+s[9]*r,this.z=s[2]*t+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Math.max(e.x,Math.min(t.x,this.x)),this.y=Math.max(e.y,Math.min(t.y,this.y)),this.z=Math.max(e.z,Math.min(t.z,this.z)),this}clampScalar(e,t){return this.x=Math.max(e,Math.min(t,this.x)),this.y=Math.max(e,Math.min(t,this.y)),this.z=Math.max(e,Math.min(t,this.z)),this}clampLength(e,t){const i=this.length();return this.divideScalar(i||1).multiplyScalar(Math.max(e,Math.min(t,i)))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=this.x<0?Math.ceil(this.x):Math.floor(this.x),this.y=this.y<0?Math.ceil(this.y):Math.floor(this.y),this.z=this.z<0?Math.ceil(this.z):Math.floor(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,i){return this.x=e.x+(t.x-e.x)*i,this.y=e.y+(t.y-e.y)*i,this.z=e.z+(t.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const i=e.x,r=e.y,s=e.z,o=t.x,a=t.y,l=t.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const i=e.dot(this)/t;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return cf.copy(this).projectOnVector(e),this.sub(cf)}reflect(e){return this.sub(cf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const i=this.dot(e)/t;return Math.acos(nn(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return t*t+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,i){const r=Math.sin(t)*e;return this.x=r*Math.sin(i),this.y=Math.cos(t)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,i){return this.x=e*Math.sin(t),this.y=i,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=i,this.z=r,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=(Math.random()-.5)*2,t=Math.random()*Math.PI*2,i=Math.sqrt(1-e**2);return this.x=i*Math.cos(t),this.y=i*Math.sin(t),this.z=e,this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const cf=new B,Lg=new xs;class rl{constructor(e=new B(1/0,1/0,1/0),t=new B(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t+=3)this.expandByPoint(Ci.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,i=e.count;t<i;t++)this.expandByPoint(Ci.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,i=e.length;t<i;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const i=Ci.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){if(e.updateWorldMatrix(!1,!1),e.boundingBox!==void 0)e.boundingBox===null&&e.computeBoundingBox(),Ps.copy(e.boundingBox),Ps.applyMatrix4(e.matrixWorld),this.union(Ps);else{const r=e.geometry;if(r!==void 0)if(t&&r.attributes!==void 0&&r.attributes.position!==void 0){const s=r.attributes.position;for(let o=0,a=s.count;o<a;o++)Ci.fromBufferAttribute(s,o).applyMatrix4(e.matrixWorld),this.expandByPoint(Ci)}else r.boundingBox===null&&r.computeBoundingBox(),Ps.copy(r.boundingBox),Ps.applyMatrix4(e.matrixWorld),this.union(Ps)}const i=e.children;for(let r=0,s=i.length;r<s;r++)this.expandByObject(i[r],t);return this}containsPoint(e){return!(e.x<this.min.x||e.x>this.max.x||e.y<this.min.y||e.y>this.max.y||e.z<this.min.z||e.z>this.max.z)}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return!(e.max.x<this.min.x||e.min.x>this.max.x||e.max.y<this.min.y||e.min.y>this.max.y||e.max.z<this.min.z||e.min.z>this.max.z)}intersectsSphere(e){return this.clampPoint(e.center,Ci),Ci.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,i;return e.normal.x>0?(t=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),t<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Qo),Rl.subVectors(this.max,Qo),Ls.subVectors(e.a,Qo),Ds.subVectors(e.b,Qo),Us.subVectors(e.c,Qo),Qi.subVectors(Ds,Ls),Ji.subVectors(Us,Ds),Br.subVectors(Ls,Us);let t=[0,-Qi.z,Qi.y,0,-Ji.z,Ji.y,0,-Br.z,Br.y,Qi.z,0,-Qi.x,Ji.z,0,-Ji.x,Br.z,0,-Br.x,-Qi.y,Qi.x,0,-Ji.y,Ji.x,0,-Br.y,Br.x,0];return!ff(t,Ls,Ds,Us,Rl)||(t=[1,0,0,0,1,0,0,0,1],!ff(t,Ls,Ds,Us,Rl))?!1:(bl.crossVectors(Qi,Ji),t=[bl.x,bl.y,bl.z],ff(t,Ls,Ds,Us,Rl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Ci).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Ci).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ai[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ai[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ai[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ai[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ai[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ai[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ai[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ai[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ai),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}}const Ai=[new B,new B,new B,new B,new B,new B,new B,new B],Ci=new B,Ps=new rl,Ls=new B,Ds=new B,Us=new B,Qi=new B,Ji=new B,Br=new B,Qo=new B,Rl=new B,bl=new B,Hr=new B;function ff(n,e,t,i,r){for(let s=0,o=n.length-3;s<=o;s+=3){Hr.fromArray(n,s);const a=r.x*Math.abs(Hr.x)+r.y*Math.abs(Hr.y)+r.z*Math.abs(Hr.z),l=e.dot(Hr),u=t.dot(Hr),c=i.dot(Hr);if(Math.max(-Math.max(l,u,c),Math.min(l,u,c))>a)return!1}return!0}const AT=new rl,Jo=new B,df=new B;class ap{constructor(e=new B,t=-1){this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const i=this.center;t!==void 0?i.copy(t):AT.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const i=this.center.distanceToSquared(e);return t.copy(e),i>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Jo.subVectors(e,this.center);const t=Jo.lengthSq();if(t>this.radius*this.radius){const i=Math.sqrt(t),r=(i-this.radius)*.5;this.center.addScaledVector(Jo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(df.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Jo.copy(e.center).add(df)),this.expandByPoint(Jo.copy(e.center).sub(df))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}}const Ri=new B,hf=new B,Pl=new B,er=new B,pf=new B,Ll=new B,mf=new B;class CT{constructor(e=new B,t=new B(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ri)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const i=t.dot(this.direction);return i<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ri.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ri.copy(this.origin).addScaledVector(this.direction,t),Ri.distanceToSquared(e))}distanceSqToSegment(e,t,i,r){hf.copy(e).add(t).multiplyScalar(.5),Pl.copy(t).sub(e).normalize(),er.copy(this.origin).sub(hf);const s=e.distanceTo(t)*.5,o=-this.direction.dot(Pl),a=er.dot(this.direction),l=-er.dot(Pl),u=er.lengthSq(),c=Math.abs(1-o*o);let d,h,p,v;if(c>0)if(d=o*l-a,h=o*a-l,v=s*c,d>=0)if(h>=-v)if(h<=v){const g=1/c;d*=g,h*=g,p=d*(d+o*h+2*a)+h*(o*d+h+2*l)+u}else h=s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h=-s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;else h<=-v?(d=Math.max(0,-(-o*s+a)),h=d>0?-s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u):h<=v?(d=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+u):(d=Math.max(0,-(o*s+a)),h=d>0?s:Math.min(Math.max(-s,-l),s),p=-d*d+h*(h+2*l)+u);else h=o>0?-s:s,d=Math.max(0,-(o*h+a)),p=-d*d+h*(h+2*l)+u;return i&&i.copy(this.origin).addScaledVector(this.direction,d),r&&r.copy(hf).addScaledVector(Pl,h),p}intersectSphere(e,t){Ri.subVectors(e.center,this.origin);const i=Ri.dot(this.direction),r=Ri.dot(Ri)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,t):this.at(a,t)}intersectsSphere(e){return this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/t;return i>=0?i:null}intersectPlane(e,t){const i=this.distanceToPlane(e);return i===null?null:this.at(i,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let i,r,s,o,a,l;const u=1/this.direction.x,c=1/this.direction.y,d=1/this.direction.z,h=this.origin;return u>=0?(i=(e.min.x-h.x)*u,r=(e.max.x-h.x)*u):(i=(e.max.x-h.x)*u,r=(e.min.x-h.x)*u),c>=0?(s=(e.min.y-h.y)*c,o=(e.max.y-h.y)*c):(s=(e.max.y-h.y)*c,o=(e.min.y-h.y)*c),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),d>=0?(a=(e.min.z-h.z)*d,l=(e.max.z-h.z)*d):(a=(e.max.z-h.z)*d,l=(e.min.z-h.z)*d),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,t)}intersectsBox(e){return this.intersectBox(e,Ri)!==null}intersectTriangle(e,t,i,r,s){pf.subVectors(t,e),Ll.subVectors(i,e),mf.crossVectors(pf,Ll);let o=this.direction.dot(mf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;er.subVectors(this.origin,e);const l=a*this.direction.dot(Ll.crossVectors(er,Ll));if(l<0)return null;const u=a*this.direction.dot(pf.cross(er));if(u<0||l+u>o)return null;const c=-a*er.dot(mf);return c<0?null:this.at(c/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class wt{constructor(e,t,i,r,s,o,a,l,u,c,d,h,p,v,g,m){wt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,i,r,s,o,a,l,u,c,d,h,p,v,g,m)}set(e,t,i,r,s,o,a,l,u,c,d,h,p,v,g,m){const f=this.elements;return f[0]=e,f[4]=t,f[8]=i,f[12]=r,f[1]=s,f[5]=o,f[9]=a,f[13]=l,f[2]=u,f[6]=c,f[10]=d,f[14]=h,f[3]=p,f[7]=v,f[11]=g,f[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new wt().fromArray(this.elements)}copy(e){const t=this.elements,i=e.elements;return t[0]=i[0],t[1]=i[1],t[2]=i[2],t[3]=i[3],t[4]=i[4],t[5]=i[5],t[6]=i[6],t[7]=i[7],t[8]=i[8],t[9]=i[9],t[10]=i[10],t[11]=i[11],t[12]=i[12],t[13]=i[13],t[14]=i[14],t[15]=i[15],this}copyPosition(e){const t=this.elements,i=e.elements;return t[12]=i[12],t[13]=i[13],t[14]=i[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,i){return e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this}makeBasis(e,t,i){return this.set(e.x,t.x,i.x,0,e.y,t.y,i.y,0,e.z,t.z,i.z,0,0,0,0,1),this}extractRotation(e){const t=this.elements,i=e.elements,r=1/Ns.setFromMatrixColumn(e,0).length(),s=1/Ns.setFromMatrixColumn(e,1).length(),o=1/Ns.setFromMatrixColumn(e,2).length();return t[0]=i[0]*r,t[1]=i[1]*r,t[2]=i[2]*r,t[3]=0,t[4]=i[4]*s,t[5]=i[5]*s,t[6]=i[6]*s,t[7]=0,t[8]=i[8]*o,t[9]=i[9]*o,t[10]=i[10]*o,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),u=Math.sin(r),c=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=o*c,p=o*d,v=a*c,g=a*d;t[0]=l*c,t[4]=-l*d,t[8]=u,t[1]=p+v*u,t[5]=h-g*u,t[9]=-a*l,t[2]=g-h*u,t[6]=v+p*u,t[10]=o*l}else if(e.order==="YXZ"){const h=l*c,p=l*d,v=u*c,g=u*d;t[0]=h+g*a,t[4]=v*a-p,t[8]=o*u,t[1]=o*d,t[5]=o*c,t[9]=-a,t[2]=p*a-v,t[6]=g+h*a,t[10]=o*l}else if(e.order==="ZXY"){const h=l*c,p=l*d,v=u*c,g=u*d;t[0]=h-g*a,t[4]=-o*d,t[8]=v+p*a,t[1]=p+v*a,t[5]=o*c,t[9]=g-h*a,t[2]=-o*u,t[6]=a,t[10]=o*l}else if(e.order==="ZYX"){const h=o*c,p=o*d,v=a*c,g=a*d;t[0]=l*c,t[4]=v*u-p,t[8]=h*u+g,t[1]=l*d,t[5]=g*u+h,t[9]=p*u-v,t[2]=-u,t[6]=a*l,t[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*u,v=a*l,g=a*u;t[0]=l*c,t[4]=g-h*d,t[8]=v*d+p,t[1]=d,t[5]=o*c,t[9]=-a*c,t[2]=-u*c,t[6]=p*d+v,t[10]=h-g*d}else if(e.order==="XZY"){const h=o*l,p=o*u,v=a*l,g=a*u;t[0]=l*c,t[4]=-d,t[8]=u*c,t[1]=h*d+g,t[5]=o*c,t[9]=p*d-v,t[2]=v*d-p,t[6]=a*c,t[10]=g*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(RT,e,bT)}lookAt(e,t,i){const r=this.elements;return Sn.subVectors(e,t),Sn.lengthSq()===0&&(Sn.z=1),Sn.normalize(),tr.crossVectors(i,Sn),tr.lengthSq()===0&&(Math.abs(i.z)===1?Sn.x+=1e-4:Sn.z+=1e-4,Sn.normalize(),tr.crossVectors(i,Sn)),tr.normalize(),Dl.crossVectors(Sn,tr),r[0]=tr.x,r[4]=Dl.x,r[8]=Sn.x,r[1]=tr.y,r[5]=Dl.y,r[9]=Sn.y,r[2]=tr.z,r[6]=Dl.z,r[10]=Sn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const i=e.elements,r=t.elements,s=this.elements,o=i[0],a=i[4],l=i[8],u=i[12],c=i[1],d=i[5],h=i[9],p=i[13],v=i[2],g=i[6],m=i[10],f=i[14],_=i[3],x=i[7],y=i[11],S=i[15],E=r[0],A=r[4],C=r[8],M=r[12],T=r[1],U=r[5],O=r[9],L=r[13],N=r[2],z=r[6],$=r[10],W=r[14],D=r[3],X=r[7],G=r[11],se=r[15];return s[0]=o*E+a*T+l*N+u*D,s[4]=o*A+a*U+l*z+u*X,s[8]=o*C+a*O+l*$+u*G,s[12]=o*M+a*L+l*W+u*se,s[1]=c*E+d*T+h*N+p*D,s[5]=c*A+d*U+h*z+p*X,s[9]=c*C+d*O+h*$+p*G,s[13]=c*M+d*L+h*W+p*se,s[2]=v*E+g*T+m*N+f*D,s[6]=v*A+g*U+m*z+f*X,s[10]=v*C+g*O+m*$+f*G,s[14]=v*M+g*L+m*W+f*se,s[3]=_*E+x*T+y*N+S*D,s[7]=_*A+x*U+y*z+S*X,s[11]=_*C+x*O+y*$+S*G,s[15]=_*M+x*L+y*W+S*se,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],u=e[13],c=e[2],d=e[6],h=e[10],p=e[14],v=e[3],g=e[7],m=e[11],f=e[15];return v*(+s*l*d-r*u*d-s*a*h+i*u*h+r*a*p-i*l*p)+g*(+t*l*p-t*u*h+s*o*h-r*o*p+r*u*c-s*l*c)+m*(+t*u*d-t*a*p-s*o*d+i*o*p+s*a*c-i*u*c)+f*(-r*a*c-t*l*d+t*a*h+r*o*d-i*o*h+i*l*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=t,r[14]=i),this}invert(){const e=this.elements,t=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],u=e[7],c=e[8],d=e[9],h=e[10],p=e[11],v=e[12],g=e[13],m=e[14],f=e[15],_=d*m*u-g*h*u+g*l*p-a*m*p-d*l*f+a*h*f,x=v*h*u-c*m*u-v*l*p+o*m*p+c*l*f-o*h*f,y=c*g*u-v*d*u+v*a*p-o*g*p-c*a*f+o*d*f,S=v*d*l-c*g*l-v*a*h+o*g*h+c*a*m-o*d*m,E=t*_+i*x+r*y+s*S;if(E===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const A=1/E;return e[0]=_*A,e[1]=(g*h*s-d*m*s-g*r*p+i*m*p+d*r*f-i*h*f)*A,e[2]=(a*m*s-g*l*s+g*r*u-i*m*u-a*r*f+i*l*f)*A,e[3]=(d*l*s-a*h*s-d*r*u+i*h*u+a*r*p-i*l*p)*A,e[4]=x*A,e[5]=(c*m*s-v*h*s+v*r*p-t*m*p-c*r*f+t*h*f)*A,e[6]=(v*l*s-o*m*s-v*r*u+t*m*u+o*r*f-t*l*f)*A,e[7]=(o*h*s-c*l*s+c*r*u-t*h*u-o*r*p+t*l*p)*A,e[8]=y*A,e[9]=(v*d*s-c*g*s-v*i*p+t*g*p+c*i*f-t*d*f)*A,e[10]=(o*g*s-v*a*s+v*i*u-t*g*u-o*i*f+t*a*f)*A,e[11]=(c*a*s-o*d*s-c*i*u+t*d*u+o*i*p-t*a*p)*A,e[12]=S*A,e[13]=(c*g*r-v*d*r+v*i*h-t*g*h-c*i*m+t*d*m)*A,e[14]=(v*a*r-o*g*r-v*i*l+t*g*l+o*i*m-t*a*m)*A,e[15]=(o*d*r-c*a*r+c*i*l-t*d*l-o*i*h+t*a*h)*A,this}scale(e){const t=this.elements,i=e.x,r=e.y,s=e.z;return t[0]*=i,t[4]*=r,t[8]*=s,t[1]*=i,t[5]*=r,t[9]*=s,t[2]*=i,t[6]*=r,t[10]*=s,t[3]*=i,t[7]*=r,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,i,r))}makeTranslation(e,t,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,i,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,t,-i,0,0,i,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,0,i,0,0,1,0,0,-i,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),i=Math.sin(e);return this.set(t,-i,0,0,i,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const i=Math.cos(t),r=Math.sin(t),s=1-i,o=e.x,a=e.y,l=e.z,u=s*o,c=s*a;return this.set(u*o+i,u*a-r*l,u*l+r*a,0,u*a+r*l,c*a+i,c*l-r*o,0,u*l-r*a,c*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,t,i){return this.set(e,0,0,0,0,t,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,t,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,t,r,1,0,0,0,0,1),this}compose(e,t,i){const r=this.elements,s=t._x,o=t._y,a=t._z,l=t._w,u=s+s,c=o+o,d=a+a,h=s*u,p=s*c,v=s*d,g=o*c,m=o*d,f=a*d,_=l*u,x=l*c,y=l*d,S=i.x,E=i.y,A=i.z;return r[0]=(1-(g+f))*S,r[1]=(p+y)*S,r[2]=(v-x)*S,r[3]=0,r[4]=(p-y)*E,r[5]=(1-(h+f))*E,r[6]=(m+_)*E,r[7]=0,r[8]=(v+x)*A,r[9]=(m-_)*A,r[10]=(1-(h+g))*A,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,t,i){const r=this.elements;let s=Ns.set(r[0],r[1],r[2]).length();const o=Ns.set(r[4],r[5],r[6]).length(),a=Ns.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),e.x=r[12],e.y=r[13],e.z=r[14],Qn.copy(this);const u=1/s,c=1/o,d=1/a;return Qn.elements[0]*=u,Qn.elements[1]*=u,Qn.elements[2]*=u,Qn.elements[4]*=c,Qn.elements[5]*=c,Qn.elements[6]*=c,Qn.elements[8]*=d,Qn.elements[9]*=d,Qn.elements[10]*=d,t.setFromRotationMatrix(Qn),i.x=s,i.y=o,i.z=a,this}makePerspective(e,t,i,r,s,o,a=Bi){const l=this.elements,u=2*s/(t-e),c=2*s/(i-r),d=(t+e)/(t-e),h=(i+r)/(i-r);let p,v;if(a===Bi)p=-(o+s)/(o-s),v=-2*o*s/(o-s);else if(a===ku)p=-o/(o-s),v=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return l[0]=u,l[4]=0,l[8]=d,l[12]=0,l[1]=0,l[5]=c,l[9]=h,l[13]=0,l[2]=0,l[6]=0,l[10]=p,l[14]=v,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,i,r,s,o,a=Bi){const l=this.elements,u=1/(t-e),c=1/(i-r),d=1/(o-s),h=(t+e)*u,p=(i+r)*c;let v,g;if(a===Bi)v=(o+s)*d,g=-2*d;else if(a===ku)v=s*d,g=-1*d;else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return l[0]=2*u,l[4]=0,l[8]=0,l[12]=-h,l[1]=0,l[5]=2*c,l[9]=0,l[13]=-p,l[2]=0,l[6]=0,l[10]=g,l[14]=-v,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,i=e.elements;for(let r=0;r<16;r++)if(t[r]!==i[r])return!1;return!0}fromArray(e,t=0){for(let i=0;i<16;i++)this.elements[i]=e[i+t];return this}toArray(e=[],t=0){const i=this.elements;return e[t]=i[0],e[t+1]=i[1],e[t+2]=i[2],e[t+3]=i[3],e[t+4]=i[4],e[t+5]=i[5],e[t+6]=i[6],e[t+7]=i[7],e[t+8]=i[8],e[t+9]=i[9],e[t+10]=i[10],e[t+11]=i[11],e[t+12]=i[12],e[t+13]=i[13],e[t+14]=i[14],e[t+15]=i[15],e}}const Ns=new B,Qn=new wt,RT=new B(0,0,0),bT=new B(1,1,1),tr=new B,Dl=new B,Sn=new B,Dg=new wt,Ug=new xs;class mc{constructor(e=0,t=0,i=0,r=mc.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,i,r=this._order){return this._x=e,this._y=t,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],u=r[5],c=r[9],d=r[2],h=r[6],p=r[10];switch(t){case"XYZ":this._y=Math.asin(nn(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-c,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,u),this._z=0);break;case"YXZ":this._x=Math.asin(-nn(c,-1,1)),Math.abs(c)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,u)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(nn(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,p),this._z=Math.atan2(-o,u)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-nn(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,u));break;case"YZX":this._z=Math.asin(nn(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-c,u),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-nn(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,u),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-c,p),this._y=0);break;default:console.warn("THREE.Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,i){return Dg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dg,t,i)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ug.setFromEuler(this),this.setFromQuaternion(Ug,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}mc.DEFAULT_ORDER="XYZ";class Mx{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let PT=0;const Ng=new B,Is=new xs,bi=new wt,Ul=new B,ea=new B,LT=new B,DT=new xs,Ig=new B(1,0,0),Og=new B(0,1,0),Fg=new B(0,0,1),UT={type:"added"},kg={type:"removed"};class pn extends Ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:PT++}),this.uuid=il(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=pn.DEFAULT_UP.clone();const e=new B,t=new mc,i=new xs,r=new B(1,1,1);function s(){i.setFromEuler(t,!1)}function o(){t.setFromQuaternion(i,void 0,!1)}t._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new wt},normalMatrix:{value:new Be}}),this.matrix=new wt,this.matrixWorld=new wt,this.matrixAutoUpdate=pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.matrixWorldAutoUpdate=pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.layers=new Mx,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.userData={}}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.multiply(Is),this}rotateOnWorldAxis(e,t){return Is.setFromAxisAngle(e,t),this.quaternion.premultiply(Is),this}rotateX(e){return this.rotateOnAxis(Ig,e)}rotateY(e){return this.rotateOnAxis(Og,e)}rotateZ(e){return this.rotateOnAxis(Fg,e)}translateOnAxis(e,t){return Ng.copy(e).applyQuaternion(this.quaternion),this.position.add(Ng.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Ig,e)}translateY(e){return this.translateOnAxis(Og,e)}translateZ(e){return this.translateOnAxis(Fg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(bi.copy(this.matrixWorld).invert())}lookAt(e,t,i){e.isVector3?Ul.copy(e):Ul.set(e,t,i);const r=this.parent;this.updateWorldMatrix(!0,!1),ea.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?bi.lookAt(ea,Ul,this.up):bi.lookAt(Ul,ea,this.up),this.quaternion.setFromRotationMatrix(bi),r&&(bi.extractRotation(r.matrixWorld),Is.setFromRotationMatrix(bi),this.quaternion.premultiply(Is.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(console.error("THREE.Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.parent!==null&&e.parent.remove(e),e.parent=this,this.children.push(e),e.dispatchEvent(UT)):console.error("THREE.Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(kg)),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){for(let e=0;e<this.children.length;e++){const t=this.children[e];t.parent=null,t.dispatchEvent(kg)}return this.children.length=0,this}attach(e){return this.updateWorldMatrix(!0,!1),bi.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),bi.multiply(e.parent.matrixWorld)),e.applyMatrix4(bi),this.add(e),e.updateWorldMatrix(!1,!0),this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,t);if(o!==void 0)return o}}getObjectsByProperty(e,t){let i=[];this[e]===t&&i.push(this);for(let r=0,s=this.children.length;r<s;r++){const o=this.children[r].getObjectsByProperty(e,t);o.length>0&&(i=i.concat(o))}return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,e,LT),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(ea,DT,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}traverse(e){e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let i=0,r=t.length;i<r;i++)t[i].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let i=0,r=t.length;i<r;i++){const s=t[i];(s.matrixWorldAutoUpdate===!0||e===!0)&&s.updateMatrixWorld(e)}}updateWorldMatrix(e,t){const i=this.parent;if(e===!0&&i!==null&&i.matrixWorldAutoUpdate===!0&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix),t===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++){const a=r[s];a.matrixWorldAutoUpdate===!0&&a.updateWorldMatrix(!1,!0)}}}toJSON(e){const t=e===void 0||typeof e=="string",i={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.6,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let u=0,c=l.length;u<c;u++){const d=l[u];s(e.shapes,d)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,u=this.material.length;l<u;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(t){const a=o(e.geometries),l=o(e.materials),u=o(e.textures),c=o(e.images),d=o(e.shapes),h=o(e.skeletons),p=o(e.animations),v=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),u.length>0&&(i.textures=u),c.length>0&&(i.images=c),d.length>0&&(i.shapes=d),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),v.length>0&&(i.nodes=v)}return i.object=r,i;function o(a){const l=[];for(const u in a){const c=a[u];delete c.metadata,l.push(c)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations,this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}pn.DEFAULT_UP=new B(0,1,0);pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const Jn=new B,Pi=new B,gf=new B,Li=new B,Os=new B,Fs=new B,zg=new B,_f=new B,vf=new B,xf=new B;let Nl=!1;class ri{constructor(e=new B,t=new B,i=new B){this.a=e,this.b=t,this.c=i}static getNormal(e,t,i,r){r.subVectors(i,t),Jn.subVectors(e,t),r.cross(Jn);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,t,i,r,s){Jn.subVectors(r,t),Pi.subVectors(i,t),gf.subVectors(e,t);const o=Jn.dot(Jn),a=Jn.dot(Pi),l=Jn.dot(gf),u=Pi.dot(Pi),c=Pi.dot(gf),d=o*u-a*a;if(d===0)return s.set(-2,-1,-1);const h=1/d,p=(u*l-a*c)*h,v=(o*c-a*l)*h;return s.set(1-p-v,v,p)}static containsPoint(e,t,i,r){return this.getBarycoord(e,t,i,r,Li),Li.x>=0&&Li.y>=0&&Li.x+Li.y<=1}static getUV(e,t,i,r,s,o,a,l){return Nl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Nl=!0),this.getInterpolation(e,t,i,r,s,o,a,l)}static getInterpolation(e,t,i,r,s,o,a,l){return this.getBarycoord(e,t,i,r,Li),l.setScalar(0),l.addScaledVector(s,Li.x),l.addScaledVector(o,Li.y),l.addScaledVector(a,Li.z),l}static isFrontFacing(e,t,i,r){return Jn.subVectors(i,t),Pi.subVectors(e,t),Jn.cross(Pi).dot(r)<0}set(e,t,i){return this.a.copy(e),this.b.copy(t),this.c.copy(i),this}setFromPointsAndIndices(e,t,i,r){return this.a.copy(e[t]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,t,i,r){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Jn.subVectors(this.c,this.b),Pi.subVectors(this.a,this.b),Jn.cross(Pi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ri.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ri.getBarycoord(e,this.a,this.b,this.c,t)}getUV(e,t,i,r,s){return Nl===!1&&(console.warn("THREE.Triangle.getUV() has been renamed to THREE.Triangle.getInterpolation()."),Nl=!0),ri.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}getInterpolation(e,t,i,r,s){return ri.getInterpolation(e,this.a,this.b,this.c,t,i,r,s)}containsPoint(e){return ri.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ri.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const i=this.a,r=this.b,s=this.c;let o,a;Os.subVectors(r,i),Fs.subVectors(s,i),_f.subVectors(e,i);const l=Os.dot(_f),u=Fs.dot(_f);if(l<=0&&u<=0)return t.copy(i);vf.subVectors(e,r);const c=Os.dot(vf),d=Fs.dot(vf);if(c>=0&&d<=c)return t.copy(r);const h=l*d-c*u;if(h<=0&&l>=0&&c<=0)return o=l/(l-c),t.copy(i).addScaledVector(Os,o);xf.subVectors(e,s);const p=Os.dot(xf),v=Fs.dot(xf);if(v>=0&&p<=v)return t.copy(s);const g=p*u-l*v;if(g<=0&&u>=0&&v<=0)return a=u/(u-v),t.copy(i).addScaledVector(Fs,a);const m=c*v-p*d;if(m<=0&&d-c>=0&&p-v>=0)return zg.subVectors(s,r),a=(d-c)/(d-c+(p-v)),t.copy(r).addScaledVector(zg,a);const f=1/(m+g+h);return o=g*f,a=h*f,t.copy(i).addScaledVector(Os,o).addScaledVector(Fs,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}let NT=0;class sl extends Ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:NT++}),this.uuid=il(),this.name="",this.type="Material",this.blending=go,this.side=br,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.blendSrc=sx,this.blendDst=ox,this.blendEquation=Xs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.depthFunc=Fd,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=aT,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=rf,this.stencilZFail=rf,this.stencilZPass=rf,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBuild(){}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const i=e[t];if(i===void 0){console.warn(`THREE.Material: parameter '${t}' has value of undefined.`);continue}const r=this[t];if(r===void 0){console.warn(`THREE.Material: '${t}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[t]=i}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const i={metadata:{version:4.6,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==go&&(i.blending=this.blending),this.side!==br&&(i.side=this.side),this.vertexColors&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=this.transparent),i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.stencilWrite=this.stencilWrite,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaToCoverage===!0&&(i.alphaToCoverage=this.alphaToCoverage),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=this.premultipliedAlpha),this.forceSinglePass===!0&&(i.forceSinglePass=this.forceSinglePass),this.wireframe===!0&&(i.wireframe=this.wireframe),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=this.flatShading),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(t){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let i=null;if(t!==null){const r=t.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=t[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ex={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ei={h:0,s:0,l:0},Il={h:0,s:0,l:0};function yf(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class Qe{constructor(e,t,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,i)}set(e,t,i){if(t===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,t,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Fe){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Zn.toWorkingColorSpace(this,t),this}setRGB(e,t,i,r=Zn.workingColorSpace){return this.r=e,this.g=t,this.b=i,Zn.toWorkingColorSpace(this,r),this}setHSL(e,t,i,r=Zn.workingColorSpace){if(e=gT(e,1),t=nn(t,0,1),i=nn(i,0,1),t===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+t):i+t-i*t,o=2*i-s;this.r=yf(o,s,e+1/3),this.g=yf(o,s,e),this.b=yf(o,s,e-1/3)}return Zn.toWorkingColorSpace(this,r),this}setStyle(e,t=Fe){function i(s){s!==void 0&&parseFloat(s)<1&&console.warn("THREE.Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:console.warn("THREE.Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(o===6)return this.setHex(parseInt(s,16),t);console.warn("THREE.Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Fe){const i=Ex[e.toLowerCase()];return i!==void 0?this.setHex(i,t):console.warn("THREE.Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=_o(e.r),this.g=_o(e.g),this.b=_o(e.b),this}copyLinearToSRGB(e){return this.r=lf(e.r),this.g=lf(e.g),this.b=lf(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Fe){return Zn.fromWorkingColorSpace(jt.copy(this),e),Math.round(nn(jt.r*255,0,255))*65536+Math.round(nn(jt.g*255,0,255))*256+Math.round(nn(jt.b*255,0,255))}getHexString(e=Fe){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Zn.workingColorSpace){Zn.fromWorkingColorSpace(jt.copy(this),t);const i=jt.r,r=jt.g,s=jt.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,u;const c=(a+o)/2;if(a===o)l=0,u=0;else{const d=o-a;switch(u=c<=.5?d/(o+a):d/(2-o-a),o){case i:l=(r-s)/d+(r<s?6:0);break;case r:l=(s-i)/d+2;break;case s:l=(i-r)/d+4;break}l/=6}return e.h=l,e.s=u,e.l=c,e}getRGB(e,t=Zn.workingColorSpace){return Zn.fromWorkingColorSpace(jt.copy(this),t),e.r=jt.r,e.g=jt.g,e.b=jt.b,e}getStyle(e=Fe){Zn.fromWorkingColorSpace(jt.copy(this),e);const t=jt.r,i=jt.g,r=jt.b;return e!==Fe?`color(${e} ${t.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,t,i){return this.getHSL(ei),ei.h+=e,ei.s+=t,ei.l+=i,this.setHSL(ei.h,ei.s,ei.l),this}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,i){return this.r=e.r+(t.r-e.r)*i,this.g=e.g+(t.g-e.g)*i,this.b=e.b+(t.b-e.b)*i,this}lerpHSL(e,t){this.getHSL(ei),e.getHSL(Il);const i=of(ei.h,Il.h,t),r=of(ei.s,Il.s,t),s=of(ei.l,Il.l,t);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*t+s[3]*i+s[6]*r,this.g=s[1]*t+s[4]*i+s[7]*r,this.b=s[2]*t+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jt=new Qe;Qe.NAMES=Ex;class Tx extends sl{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Qe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.combine=ax,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Mt=new B,Ol=new Ie;class yi{constructor(e,t,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=i,this.usage=Cg,this.updateRange={offset:0,count:-1},this.gpuType=cr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,i){e*=this.itemSize,i*=t.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=t.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,i=this.count;t<i;t++)Ol.fromBufferAttribute(this,t),Ol.applyMatrix3(e),this.setXY(t,Ol.x,Ol.y);else if(this.itemSize===3)for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix3(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyMatrix4(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyMatrix4(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}applyNormalMatrix(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.applyNormalMatrix(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}transformDirection(e){for(let t=0,i=this.count;t<i;t++)Mt.fromBufferAttribute(this,t),Mt.transformDirection(e),this.setXYZ(t,Mt.x,Mt.y,Mt.z);return this}set(e,t=0){return this.array.set(e,t),this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Cl(t,this.array)),t}setX(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Cl(t,this.array)),t}setY(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Cl(t,this.array)),t}setZ(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Cl(t,this.array)),t}setW(e,t){return this.normalized&&(t=yn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,i){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),i=yn(i,this.array)),this.array[e+0]=t,this.array[e+1]=i,this}setXYZ(e,t,i,r){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),i=yn(i,this.array),r=yn(r,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,t,i,r,s){return e*=this.itemSize,this.normalized&&(t=yn(t,this.array),i=yn(i,this.array),r=yn(r,this.array),s=yn(s,this.array)),this.array[e+0]=t,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==Cg&&(e.usage=this.usage),(this.updateRange.offset!==0||this.updateRange.count!==-1)&&(e.updateRange=this.updateRange),e}copyColorsArray(){console.error("THREE.BufferAttribute: copyColorsArray() was removed in r144.")}copyVector2sArray(){console.error("THREE.BufferAttribute: copyVector2sArray() was removed in r144.")}copyVector3sArray(){console.error("THREE.BufferAttribute: copyVector3sArray() was removed in r144.")}copyVector4sArray(){console.error("THREE.BufferAttribute: copyVector4sArray() was removed in r144.")}}class wx extends yi{constructor(e,t,i){super(new Uint16Array(e),t,i)}}class Ax extends yi{constructor(e,t,i){super(new Uint32Array(e),t,i)}}class Si extends yi{constructor(e,t,i){super(new Float32Array(e),t,i)}}let IT=0;const In=new wt,Sf=new pn,ks=new B,Mn=new rl,ta=new rl,Nt=new B;class Ir extends Ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:IT++}),this.uuid=il(),this.name="",this.type="BufferGeometry",this.index=null,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(vx(e)?Ax:wx)(e,1):this.index=e,this}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,i=0){this.groups.push({start:e,count:t,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new Be().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return In.makeRotationFromQuaternion(e),this.applyMatrix4(In),this}rotateX(e){return In.makeRotationX(e),this.applyMatrix4(In),this}rotateY(e){return In.makeRotationY(e),this.applyMatrix4(In),this}rotateZ(e){return In.makeRotationZ(e),this.applyMatrix4(In),this}translate(e,t,i){return In.makeTranslation(e,t,i),this.applyMatrix4(In),this}scale(e,t,i){return In.makeScale(e,t,i),this.applyMatrix4(In),this}lookAt(e){return Sf.lookAt(e),Sf.updateMatrix(),this.applyMatrix4(Sf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ks).negate(),this.translate(ks.x,ks.y,ks.z),this}setFromPoints(e){const t=[];for(let i=0,r=e.length;i<r;i++){const s=e[i];t.push(s.x,s.y,s.z||0)}return this.setAttribute("position",new Si(t,3)),this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new rl);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingBox.set(new B(-1/0,-1/0,-1/0),new B(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let i=0,r=t.length;i<r;i++){const s=t[i];Mn.setFromBufferAttribute(s),this.morphTargetsRelative?(Nt.addVectors(this.boundingBox.min,Mn.min),this.boundingBox.expandByPoint(Nt),Nt.addVectors(this.boundingBox.max,Mn.max),this.boundingBox.expandByPoint(Nt)):(this.boundingBox.expandByPoint(Mn.min),this.boundingBox.expandByPoint(Mn.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&console.error('THREE.BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ap);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){console.error('THREE.BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere. Alternatively set "mesh.frustumCulled" to "false".',this),this.boundingSphere.set(new B,1/0);return}if(e){const i=this.boundingSphere.center;if(Mn.setFromBufferAttribute(e),t)for(let s=0,o=t.length;s<o;s++){const a=t[s];ta.setFromBufferAttribute(a),this.morphTargetsRelative?(Nt.addVectors(Mn.min,ta.min),Mn.expandByPoint(Nt),Nt.addVectors(Mn.max,ta.max),Mn.expandByPoint(Nt)):(Mn.expandByPoint(ta.min),Mn.expandByPoint(ta.max))}Mn.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Nt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Nt));if(t)for(let s=0,o=t.length;s<o;s++){const a=t[s],l=this.morphTargetsRelative;for(let u=0,c=a.count;u<c;u++)Nt.fromBufferAttribute(a,u),l&&(ks.fromBufferAttribute(e,u),Nt.add(ks)),r=Math.max(r,i.distanceToSquared(Nt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&console.error('THREE.BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){console.error("THREE.BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=e.array,r=t.position.array,s=t.normal.array,o=t.uv.array,a=r.length/3;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new yi(new Float32Array(4*a),4));const l=this.getAttribute("tangent").array,u=[],c=[];for(let T=0;T<a;T++)u[T]=new B,c[T]=new B;const d=new B,h=new B,p=new B,v=new Ie,g=new Ie,m=new Ie,f=new B,_=new B;function x(T,U,O){d.fromArray(r,T*3),h.fromArray(r,U*3),p.fromArray(r,O*3),v.fromArray(o,T*2),g.fromArray(o,U*2),m.fromArray(o,O*2),h.sub(d),p.sub(d),g.sub(v),m.sub(v);const L=1/(g.x*m.y-m.x*g.y);isFinite(L)&&(f.copy(h).multiplyScalar(m.y).addScaledVector(p,-g.y).multiplyScalar(L),_.copy(p).multiplyScalar(g.x).addScaledVector(h,-m.x).multiplyScalar(L),u[T].add(f),u[U].add(f),u[O].add(f),c[T].add(_),c[U].add(_),c[O].add(_))}let y=this.groups;y.length===0&&(y=[{start:0,count:i.length}]);for(let T=0,U=y.length;T<U;++T){const O=y[T],L=O.start,N=O.count;for(let z=L,$=L+N;z<$;z+=3)x(i[z+0],i[z+1],i[z+2])}const S=new B,E=new B,A=new B,C=new B;function M(T){A.fromArray(s,T*3),C.copy(A);const U=u[T];S.copy(U),S.sub(A.multiplyScalar(A.dot(U))).normalize(),E.crossVectors(C,U);const L=E.dot(c[T])<0?-1:1;l[T*4]=S.x,l[T*4+1]=S.y,l[T*4+2]=S.z,l[T*4+3]=L}for(let T=0,U=y.length;T<U;++T){const O=y[T],L=O.start,N=O.count;for(let z=L,$=L+N;z<$;z+=3)M(i[z+0]),M(i[z+1]),M(i[z+2])}}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new yi(new Float32Array(t.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new B,s=new B,o=new B,a=new B,l=new B,u=new B,c=new B,d=new B;if(e)for(let h=0,p=e.count;h<p;h+=3){const v=e.getX(h+0),g=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(t,v),s.fromBufferAttribute(t,g),o.fromBufferAttribute(t,m),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),a.fromBufferAttribute(i,v),l.fromBufferAttribute(i,g),u.fromBufferAttribute(i,m),a.add(c),l.add(c),u.add(c),i.setXYZ(v,a.x,a.y,a.z),i.setXYZ(g,l.x,l.y,l.z),i.setXYZ(m,u.x,u.y,u.z)}else for(let h=0,p=t.count;h<p;h+=3)r.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),o.fromBufferAttribute(t,h+2),c.subVectors(o,s),d.subVectors(r,s),c.cross(d),i.setXYZ(h+0,c.x,c.y,c.z),i.setXYZ(h+1,c.x,c.y,c.z),i.setXYZ(h+2,c.x,c.y,c.z);this.normalizeNormals(),i.needsUpdate=!0}}merge(){return console.error("THREE.BufferGeometry.merge() has been removed. Use THREE.BufferGeometryUtils.mergeGeometries() instead."),this}normalizeNormals(){const e=this.attributes.normal;for(let t=0,i=e.count;t<i;t++)Nt.fromBufferAttribute(e,t),Nt.normalize(),e.setXYZ(t,Nt.x,Nt.y,Nt.z)}toNonIndexed(){function e(a,l){const u=a.array,c=a.itemSize,d=a.normalized,h=new u.constructor(l.length*c);let p=0,v=0;for(let g=0,m=l.length;g<m;g++){a.isInterleavedBufferAttribute?p=l[g]*a.data.stride+a.offset:p=l[g]*c;for(let f=0;f<c;f++)h[v++]=u[p++]}return new yi(h,c,d)}if(this.index===null)return console.warn("THREE.BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Ir,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],u=e(l,i);t.setAttribute(a,u)}const s=this.morphAttributes;for(const a in s){const l=[],u=s[a];for(let c=0,d=u.length;c<d;c++){const h=u[c],p=e(h,i);l.push(p)}t.morphAttributes[a]=l}t.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const u=o[a];t.addGroup(u.start,u.count,u.materialIndex)}return t}toJSON(){const e={metadata:{version:4.6,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const u in l)l[u]!==void 0&&(e[u]=l[u]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const i=this.attributes;for(const l in i){const u=i[l];e.data.attributes[l]=u.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const u=this.morphAttributes[l],c=[];for(let d=0,h=u.length;d<h;d++){const p=u[d];c.push(p.toJSON(e.data))}c.length>0&&(r[l]=c,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere={center:a.center.toArray(),radius:a.radius}),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone(t));const r=e.attributes;for(const u in r){const c=r[u];this.setAttribute(u,c.clone(t))}const s=e.morphAttributes;for(const u in s){const c=[],d=s[u];for(let h=0,p=d.length;h<p;h++)c.push(d[h].clone(t));this.morphAttributes[u]=c}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let u=0,c=o.length;u<c;u++){const d=o[u];this.addGroup(d.start,d.count,d.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Bg=new wt,Vr=new CT,Fl=new ap,Hg=new B,zs=new B,Bs=new B,Hs=new B,Mf=new B,kl=new B,zl=new Ie,Bl=new Ie,Hl=new Ie,Vg=new B,Gg=new B,Wg=new B,Vl=new B,Gl=new B;class Hi extends pn{constructor(e=new Ir,t=new Tx){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,i=Object.keys(t);if(i.length>0){const r=t[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,t){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;t.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){kl.set(0,0,0);for(let l=0,u=s.length;l<u;l++){const c=a[l],d=s[l];c!==0&&(Mf.fromBufferAttribute(d,e),o?kl.addScaledVector(Mf,c):kl.addScaledVector(Mf.sub(t),c))}t.add(kl)}return t}raycast(e,t){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Fl.copy(i.boundingSphere),Fl.applyMatrix4(s),Vr.copy(e.ray).recast(e.near),!(Fl.containsPoint(Vr.origin)===!1&&(Vr.intersectSphere(Fl,Hg)===null||Vr.origin.distanceToSquared(Hg)>(e.far-e.near)**2))&&(Bg.copy(s).invert(),Vr.copy(e.ray).applyMatrix4(Bg),!(i.boundingBox!==null&&Vr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,t,Vr)))}_computeIntersections(e,t,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,u=s.attributes.uv,c=s.attributes.uv1,d=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let v=0,g=h.length;v<g;v++){const m=h[v],f=o[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,S=x;y<S;y+=3){const E=a.getX(y),A=a.getX(y+1),C=a.getX(y+2);r=Wl(this,f,e,i,u,c,d,E,A,C),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),g=Math.min(a.count,p.start+p.count);for(let m=v,f=g;m<f;m+=3){const _=a.getX(m),x=a.getX(m+1),y=a.getX(m+2);r=Wl(this,o,e,i,u,c,d,_,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let v=0,g=h.length;v<g;v++){const m=h[v],f=o[m.materialIndex],_=Math.max(m.start,p.start),x=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let y=_,S=x;y<S;y+=3){const E=y,A=y+1,C=y+2;r=Wl(this,f,e,i,u,c,d,E,A,C),r&&(r.faceIndex=Math.floor(y/3),r.face.materialIndex=m.materialIndex,t.push(r))}}else{const v=Math.max(0,p.start),g=Math.min(l.count,p.start+p.count);for(let m=v,f=g;m<f;m+=3){const _=m,x=m+1,y=m+2;r=Wl(this,o,e,i,u,c,d,_,x,y),r&&(r.faceIndex=Math.floor(m/3),t.push(r))}}}}function OT(n,e,t,i,r,s,o,a){let l;if(e.side===hn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===br,a),l===null)return null;Gl.copy(a),Gl.applyMatrix4(n.matrixWorld);const u=t.ray.origin.distanceTo(Gl);return u<t.near||u>t.far?null:{distance:u,point:Gl.clone(),object:n}}function Wl(n,e,t,i,r,s,o,a,l,u){n.getVertexPosition(a,zs),n.getVertexPosition(l,Bs),n.getVertexPosition(u,Hs);const c=OT(n,e,t,i,zs,Bs,Hs,Vl);if(c){r&&(zl.fromBufferAttribute(r,a),Bl.fromBufferAttribute(r,l),Hl.fromBufferAttribute(r,u),c.uv=ri.getInterpolation(Vl,zs,Bs,Hs,zl,Bl,Hl,new Ie)),s&&(zl.fromBufferAttribute(s,a),Bl.fromBufferAttribute(s,l),Hl.fromBufferAttribute(s,u),c.uv1=ri.getInterpolation(Vl,zs,Bs,Hs,zl,Bl,Hl,new Ie),c.uv2=c.uv1),o&&(Vg.fromBufferAttribute(o,a),Gg.fromBufferAttribute(o,l),Wg.fromBufferAttribute(o,u),c.normal=ri.getInterpolation(Vl,zs,Bs,Hs,Vg,Gg,Wg,new B),c.normal.dot(i.direction)>0&&c.normal.multiplyScalar(-1));const d={a,b:l,c:u,normal:new B,materialIndex:0};ri.getNormal(zs,Bs,Hs,d.normal),c.face=d}return c}class ol extends Ir{constructor(e=1,t=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],u=[],c=[],d=[];let h=0,p=0;v("z","y","x",-1,-1,i,t,e,o,s,0),v("z","y","x",1,-1,i,t,-e,o,s,1),v("x","z","y",1,1,e,i,t,r,o,2),v("x","z","y",1,-1,e,i,-t,r,o,3),v("x","y","z",1,-1,e,t,i,r,s,4),v("x","y","z",-1,-1,e,t,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Si(u,3)),this.setAttribute("normal",new Si(c,3)),this.setAttribute("uv",new Si(d,2));function v(g,m,f,_,x,y,S,E,A,C,M){const T=y/A,U=S/C,O=y/2,L=S/2,N=E/2,z=A+1,$=C+1;let W=0,D=0;const X=new B;for(let G=0;G<$;G++){const se=G*U-L;for(let F=0;F<z;F++){const ee=F*T-O;X[g]=ee*_,X[m]=se*x,X[f]=N,u.push(X.x,X.y,X.z),X[g]=0,X[m]=0,X[f]=E>0?1:-1,c.push(X.x,X.y,X.z),d.push(F/A),d.push(1-G/C),W+=1}}for(let G=0;G<C;G++)for(let se=0;se<A;se++){const F=h+se+z*G,ee=h+se+z*(G+1),K=h+(se+1)+z*(G+1),re=h+(se+1)+z*G;l.push(F,ee,re),l.push(ee,K,re),D+=6}a.addGroup(p,D,M),p+=D,h+=W}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ol(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function Lo(n){const e={};for(const t in n){e[t]={};for(const i in n[t]){const r=n[t][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(console.warn("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][i]=null):e[t][i]=r.clone():Array.isArray(r)?e[t][i]=r.slice():e[t][i]=r}}return e}function Jt(n){const e={};for(let t=0;t<n.length;t++){const i=Lo(n[t]);for(const r in i)e[r]=i[r]}return e}function FT(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Cx(n){return n.getRenderTarget()===null?n.outputColorSpace:Ei}const kT={clone:Lo,merge:Jt};var zT=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,BT=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ys extends sl{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=zT,this.fragmentShader=BT,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={derivatives:!1,fragDepth:!1,drawBuffers:!1,shaderTextureLOD:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Lo(e.uniforms),this.uniformsGroups=FT(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?t.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?t.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?t.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?t.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?t.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?t.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?t.uniforms[r]={type:"m4",value:o.toArray()}:t.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(t.extensions=i),t}}class Rx extends pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new wt,this.projectionMatrix=new wt,this.projectionMatrixInverse=new wt,this.coordinateSystem=Bi}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(-t[8],-t[9],-t[10]).normalize()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,t){super.updateWorldMatrix(e,t),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}class wn extends Rx{constructor(e=50,t=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Gd*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(sf*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Gd*2*Math.atan(Math.tan(sf*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}setViewOffset(e,t,i,r,s,o){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(sf*.5*this.fov)/this.zoom,i=2*t,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,u=o.fullHeight;s+=o.offsetX*r/l,t-=o.offsetY*i/u,r*=o.width/l,i*=o.height/u}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,t,t-i,e,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}const Vs=-90,Gs=1;class HT extends pn{constructor(e,t,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null;const r=new wn(Vs,Gs,e,t);r.layers=this.layers,this.add(r);const s=new wn(Vs,Gs,e,t);s.layers=this.layers,this.add(s);const o=new wn(Vs,Gs,e,t);o.layers=this.layers,this.add(o);const a=new wn(Vs,Gs,e,t);a.layers=this.layers,this.add(a);const l=new wn(Vs,Gs,e,t);l.layers=this.layers,this.add(l);const u=new wn(Vs,Gs,e,t);u.layers=this.layers,this.add(u)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[i,r,s,o,a,l]=t;for(const u of t)this.remove(u);if(e===Bi)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===ku)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const u of t)this.add(u),u.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const i=this.renderTarget;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[r,s,o,a,l,u]=this.children,c=e.getRenderTarget(),d=e.toneMapping,h=e.xr.enabled;e.toneMapping=Gi,e.xr.enabled=!1;const p=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0),e.render(t,r),e.setRenderTarget(i,1),e.render(t,s),e.setRenderTarget(i,2),e.render(t,o),e.setRenderTarget(i,3),e.render(t,a),e.setRenderTarget(i,4),e.render(t,l),i.texture.generateMipmaps=p,e.setRenderTarget(i,5),e.render(t,u),e.setRenderTarget(c),e.toneMapping=d,e.xr.enabled=h,i.texture.needsPMREMUpdate=!0}}class bx extends bn{constructor(e,t,i,r,s,o,a,l,u,c){e=e!==void 0?e:[],t=t!==void 0?t:Ro,super(e,t,i,r,s,o,a,l,u,c),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class VT extends vs{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];t.encoding!==void 0&&(ya("THREE.WebGLCubeRenderTarget: option.encoding has been replaced by option.colorSpace."),t.colorSpace=t.encoding===as?Fe:ls),this.texture=new bx(r,t.mapping,t.wrapS,t.wrapT,t.magFilter,t.minFilter,t.format,t.type,t.anisotropy,t.colorSpace),this.texture.isRenderTargetTexture=!0,this.texture.generateMipmaps=t.generateMipmaps!==void 0?t.generateMipmaps:!1,this.texture.minFilter=t.minFilter!==void 0?t.minFilter:Bn}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new ol(5,5,5),s=new ys({name:"CubemapFromEquirect",uniforms:Lo(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:hn,blending:Mr});s.uniforms.tEquirect.value=t;const o=new Hi(r,s),a=t.minFilter;return t.minFilter===Ga&&(t.minFilter=Bn),new HT(1,10,this).update(e,o),t.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,t,i,r){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(t,i,r);e.setRenderTarget(s)}}const Ef=new B,GT=new B,WT=new Be;class qr{constructor(e=new B(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,i,r){return this.normal.set(e,t,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,i){const r=Ef.subVectors(i,t).cross(GT.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t){const i=e.delta(Ef),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:t.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const t=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return t<0&&i>0||i<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const i=t||WT.getNormalMatrix(e),r=this.coplanarPoint(Ef).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Gr=new ap,jl=new B;class lp{constructor(e=new qr,t=new qr,i=new qr,r=new qr,s=new qr,o=new qr){this.planes=[e,t,i,r,s,o]}set(e,t,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(t),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const t=this.planes;for(let i=0;i<6;i++)t[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,t=Bi){const i=this.planes,r=e.elements,s=r[0],o=r[1],a=r[2],l=r[3],u=r[4],c=r[5],d=r[6],h=r[7],p=r[8],v=r[9],g=r[10],m=r[11],f=r[12],_=r[13],x=r[14],y=r[15];if(i[0].setComponents(l-s,h-u,m-p,y-f).normalize(),i[1].setComponents(l+s,h+u,m+p,y+f).normalize(),i[2].setComponents(l+o,h+c,m+v,y+_).normalize(),i[3].setComponents(l-o,h-c,m-v,y-_).normalize(),i[4].setComponents(l-a,h-d,m-g,y-x).normalize(),t===Bi)i[5].setComponents(l+a,h+d,m+g,y+x).normalize();else if(t===ku)i[5].setComponents(a,d,g,x).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Gr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Gr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Gr)}intersectsSprite(e){return Gr.center.set(0,0,0),Gr.radius=.7071067811865476,Gr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Gr)}intersectsSphere(e){const t=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const t=this.planes;for(let i=0;i<6;i++){const r=t[i];if(jl.x=r.normal.x>0?e.max.x:e.min.x,jl.y=r.normal.y>0?e.max.y:e.min.y,jl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(jl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let i=0;i<6;i++)if(t[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}function Px(){let n=null,e=!1,t=null,i=null;function r(s,o){t(s,o),i=n.requestAnimationFrame(r)}return{start:function(){e!==!0&&t!==null&&(i=n.requestAnimationFrame(r),e=!0)},stop:function(){n.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){n=s}}}function jT(n,e){const t=e.isWebGL2,i=new WeakMap;function r(u,c){const d=u.array,h=u.usage,p=n.createBuffer();n.bindBuffer(c,p),n.bufferData(c,d,h),u.onUploadCallback();let v;if(d instanceof Float32Array)v=n.FLOAT;else if(d instanceof Uint16Array)if(u.isFloat16BufferAttribute)if(t)v=n.HALF_FLOAT;else throw new Error("THREE.WebGLAttributes: Usage of Float16BufferAttribute requires WebGL2.");else v=n.UNSIGNED_SHORT;else if(d instanceof Int16Array)v=n.SHORT;else if(d instanceof Uint32Array)v=n.UNSIGNED_INT;else if(d instanceof Int32Array)v=n.INT;else if(d instanceof Int8Array)v=n.BYTE;else if(d instanceof Uint8Array)v=n.UNSIGNED_BYTE;else if(d instanceof Uint8ClampedArray)v=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+d);return{buffer:p,type:v,bytesPerElement:d.BYTES_PER_ELEMENT,version:u.version}}function s(u,c,d){const h=c.array,p=c.updateRange;n.bindBuffer(d,u),p.count===-1?n.bufferSubData(d,0,h):(t?n.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h,p.offset,p.count):n.bufferSubData(d,p.offset*h.BYTES_PER_ELEMENT,h.subarray(p.offset,p.offset+p.count)),p.count=-1),c.onUploadCallback()}function o(u){return u.isInterleavedBufferAttribute&&(u=u.data),i.get(u)}function a(u){u.isInterleavedBufferAttribute&&(u=u.data);const c=i.get(u);c&&(n.deleteBuffer(c.buffer),i.delete(u))}function l(u,c){if(u.isGLBufferAttribute){const h=i.get(u);(!h||h.version<u.version)&&i.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}u.isInterleavedBufferAttribute&&(u=u.data);const d=i.get(u);d===void 0?i.set(u,r(u,c)):d.version<u.version&&(s(d.buffer,u,c),d.version=u.version)}return{get:o,remove:a,update:l}}class up extends Ir{constructor(e=1,t=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:i,heightSegments:r};const s=e/2,o=t/2,a=Math.floor(i),l=Math.floor(r),u=a+1,c=l+1,d=e/a,h=t/l,p=[],v=[],g=[],m=[];for(let f=0;f<c;f++){const _=f*h-o;for(let x=0;x<u;x++){const y=x*d-s;v.push(y,-_,0),g.push(0,0,1),m.push(x/a),m.push(1-f/l)}}for(let f=0;f<l;f++)for(let _=0;_<a;_++){const x=_+u*f,y=_+u*(f+1),S=_+1+u*(f+1),E=_+1+u*f;p.push(x,y,E),p.push(y,S,E)}this.setIndex(p),this.setAttribute("position",new Si(v,3)),this.setAttribute("normal",new Si(g,3)),this.setAttribute("uv",new Si(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new up(e.width,e.height,e.widthSegments,e.heightSegments)}}var XT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,YT=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,qT=`#ifdef USE_ALPHATEST
	if ( diffuseColor.a < alphaTest ) discard;
#endif`,$T=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,KT=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometry.normal, geometry.viewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,ZT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,QT="vec3 transformed = vec3( position );",JT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,ew=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,tw=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			 return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float R21 = R12;
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,nw=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = dFdx( surf_pos.xyz );
		vec3 vSigmaY = dFdy( surf_pos.xyz );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,iw=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#pragma unroll_loop_start
	for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
		plane = clippingPlanes[ i ];
		if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
	}
	#pragma unroll_loop_end
	#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
		bool clipped = true;
		#pragma unroll_loop_start
		for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
		}
		#pragma unroll_loop_end
		if ( clipped ) discard;
	#endif
#endif`,rw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,sw=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,ow=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,aw=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,lw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,uw=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	varying vec3 vColor;
#endif`,cw=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif`,fw=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
struct GeometricContext {
	vec3 position;
	vec3 normal;
	vec3 viewDir;
#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal;
#endif
};
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
mat3 transposeMat3( const in mat3 m ) {
	mat3 tmp;
	tmp[ 0 ] = vec3( m[ 0 ].x, m[ 1 ].x, m[ 2 ].x );
	tmp[ 1 ] = vec3( m[ 0 ].y, m[ 1 ].y, m[ 2 ].y );
	tmp[ 2 ] = vec3( m[ 0 ].z, m[ 1 ].z, m[ 2 ].z );
	return tmp;
}
float luminance( const in vec3 rgb ) {
	const vec3 weights = vec3( 0.2126729, 0.7151522, 0.0721750 );
	return dot( weights, rgb );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,dw=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_v0 0.339
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_v1 0.276
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_v4 0.046
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_v5 0.016
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_v6 0.0038
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,hw=`vec3 transformedNormal = objectNormal;
#ifdef USE_INSTANCING
	mat3 m = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( m[ 0 ], m[ 0 ] ), dot( m[ 1 ], m[ 1 ] ), dot( m[ 2 ], m[ 2 ] ) );
	transformedNormal = m * transformedNormal;
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	vec3 transformedTangent = ( modelViewMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,pw=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,mw=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,gw=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,_w=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,vw="gl_FragColor = linearToOutputTexel( gl_FragColor );",xw=`vec4 LinearToLinear( in vec4 value ) {
	return value;
}
vec4 LinearTosRGB( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,yw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,Sw=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
	
#endif`,Mw=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Ew=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Tw=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,ww=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Aw=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Cw=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,Rw=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,bw=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Pw=`#ifdef USE_LIGHTMAP
	vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
	vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
	reflectedLight.indirectDiffuse += lightMapIrradiance;
#endif`,Lw=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Dw=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Uw=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in GeometricContext geometry, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Nw=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
uniform vec3 lightProbe[ 9 ];
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	#if defined ( LEGACY_LIGHTS )
		if ( cutoffDistance > 0.0 && decayExponent > 0.0 ) {
			return pow( saturate( - lightDistance / cutoffDistance + 1.0 ), decayExponent );
		}
		return 1.0;
	#else
		float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
		if ( cutoffDistance > 0.0 ) {
			distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
		}
		return distanceFalloff;
	#endif
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, const in GeometricContext geometry, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometry.position;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in GeometricContext geometry, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometry.position;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Iw=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, roughness * roughness) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Ow=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Fw=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometry.normal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in GeometricContext geometry, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,kw=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,zw=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometry.viewDir, geometry.normal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in GeometricContext geometry, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,Bw=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb * ( 1.0 - metalnessFactor );
vec3 dxy = max( abs( dFdx( geometryNormal ) ), abs( dFdy( geometryNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = mix( min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = mix( vec3( 0.04 ), diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.07, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	anisotropyV /= material.anisotropy;
	material.anisotropy = saturate( material.anisotropy );
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x - tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x + tbn[ 0 ] * anisotropyV.y;
#endif`,Hw=`struct PhysicalMaterial {
	vec3 diffuseColor;
	float roughness;
	vec3 specularColor;
	float specularF90;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecular = vec3( 0.0 );
vec3 sheenSpecular = vec3( 0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return saturate(v);
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColor;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transposeMat3( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float a = roughness < 0.25 ? -339.2 * r2 + 161.4 * roughness - 25.9 : -8.48 * r2 + 14.3 * roughness - 9.95;
	float b = roughness < 0.25 ? 44.0 * r2 - 23.7 * roughness + 3.26 : 1.97 * r2 - 3.27 * roughness + 0.72;
	float DG = exp( a * dotNV + b ) + ( roughness < 0.25 ? 0.0 : 0.1 * ( roughness - 0.25 ) );
	return saturate( DG * RECIPROCAL_PI );
}
vec2 DFGApprox( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	const vec4 c0 = vec4( - 1, - 0.0275, - 0.572, 0.022 );
	const vec4 c1 = vec4( 1, 0.0425, 1.04, - 0.04 );
	vec4 r = roughness * c0 + c1;
	float a004 = min( r.x * r.x, exp2( - 9.28 * dotNV ) ) * r.x + r.y;
	vec2 fab = vec2( - 1.04, 1.04 ) * a004 + r.zw;
	return fab;
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	vec2 fab = DFGApprox( normal, viewDir, roughness );
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometry.normal;
		vec3 viewDir = geometry.viewDir;
		vec3 position = geometry.position;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColor * t2.x + ( vec3( 1.0 ) - material.specularColor ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseColor * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometry.normal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometry.clearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecular += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometry.viewDir, geometry.clearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * BRDF_Sheen( directLight.direction, geometry.viewDir, geometry.normal, material.sheenColor, material.sheenRoughness );
	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX( directLight.direction, geometry.viewDir, geometry.normal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in GeometricContext geometry, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecular += clearcoatRadiance * EnvironmentBRDF( geometry.clearcoatNormal, geometry.viewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecular += irradiance * material.sheenColor * IBLSheenBRDF( geometry.normal, geometry.viewDir, material.sheenRoughness );
	#endif
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnel, material.roughness, singleScattering, multiScattering );
	#else
		computeMultiscattering( geometry.normal, geometry.viewDir, material.specularColor, material.specularF90, material.roughness, singleScattering, multiScattering );
	#endif
	vec3 totalScattering = singleScattering + multiScattering;
	vec3 diffuse = material.diffuseColor * ( 1.0 - max( max( totalScattering.r, totalScattering.g ), totalScattering.b ) );
	reflectedLight.indirectSpecular += radiance * singleScattering;
	reflectedLight.indirectSpecular += multiScattering * cosineWeightedIrradiance;
	reflectedLight.indirectDiffuse += diffuse * cosineWeightedIrradiance;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Vw=`
GeometricContext geometry;
geometry.position = - vViewPosition;
geometry.normal = normal;
geometry.viewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
#ifdef USE_CLEARCOAT
	geometry.clearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometry.viewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnel = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometry, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, geometry, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometry, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	irradiance += getLightProbeIrradiance( lightProbe, geometry.normal );
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometry.normal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Gw=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometry.normal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometry.viewDir, geometry.normal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometry.viewDir, geometry.normal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometry.viewDir, geometry.clearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Ww=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometry, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometry, material, reflectedLight );
#endif`,jw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	gl_FragDepthEXT = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Xw=`#if defined( USE_LOGDEPTHBUF ) && defined( USE_LOGDEPTHBUF_EXT )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Yw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		varying float vFragDepth;
		varying float vIsPerspective;
	#else
		uniform float logDepthBufFC;
	#endif
#endif`,qw=`#ifdef USE_LOGDEPTHBUF
	#ifdef USE_LOGDEPTHBUF_EXT
		vFragDepth = 1.0 + gl_Position.w;
		vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
	#else
		if ( isPerspectiveMatrix( projectionMatrix ) ) {
			gl_Position.z = log2( max( EPSILON, gl_Position.w + 1.0 ) ) * logDepthBufFC - 1.0;
			gl_Position.z *= gl_Position.w;
		}
	#endif
#endif`,$w=`#ifdef USE_MAP
	diffuseColor *= texture2D( map, vMapUv );
#endif`,Kw=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,Zw=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Qw=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Jw=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,eA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,tA=`#if defined( USE_MORPHCOLORS ) && defined( MORPHTARGETS_TEXTURE )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,nA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		objectNormal += morphNormal0 * morphTargetInfluences[ 0 ];
		objectNormal += morphNormal1 * morphTargetInfluences[ 1 ];
		objectNormal += morphNormal2 * morphTargetInfluences[ 2 ];
		objectNormal += morphNormal3 * morphTargetInfluences[ 3 ];
	#endif
#endif`,iA=`#ifdef USE_MORPHTARGETS
	uniform float morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
		uniform sampler2DArray morphTargetsTexture;
		uniform ivec2 morphTargetsTextureSize;
		vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
			int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
			int y = texelIndex / morphTargetsTextureSize.x;
			int x = texelIndex - y * morphTargetsTextureSize.x;
			ivec3 morphUV = ivec3( x, y, morphTargetIndex );
			return texelFetch( morphTargetsTexture, morphUV, 0 );
		}
	#else
		#ifndef USE_MORPHNORMALS
			uniform float morphTargetInfluences[ 8 ];
		#else
			uniform float morphTargetInfluences[ 4 ];
		#endif
	#endif
#endif`,rA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	#ifdef MORPHTARGETS_TEXTURE
		for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
			if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
		}
	#else
		transformed += morphTarget0 * morphTargetInfluences[ 0 ];
		transformed += morphTarget1 * morphTargetInfluences[ 1 ];
		transformed += morphTarget2 * morphTargetInfluences[ 2 ];
		transformed += morphTarget3 * morphTargetInfluences[ 3 ];
		#ifndef USE_MORPHNORMALS
			transformed += morphTarget4 * morphTargetInfluences[ 4 ];
			transformed += morphTarget5 * morphTargetInfluences[ 5 ];
			transformed += morphTarget6 * morphTargetInfluences[ 6 ];
			transformed += morphTarget7 * morphTargetInfluences[ 7 ];
		#endif
	#endif
#endif`,sA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal, vNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 geometryNormal = normal;`,oA=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,aA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,lA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,uA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,cA=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,fA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = geometryNormal;
#endif`,dA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,hA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,pA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,mA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,gA=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;
const vec3 PackFactors = vec3( 256. * 256. * 256., 256. * 256., 256. );
const vec4 UnpackFactors = UnpackDownscale / vec4( PackFactors, 1. );
const float ShiftRight8 = 1. / 256.;
vec4 packDepthToRGBA( const in float v ) {
	vec4 r = vec4( fract( v * PackFactors ), v );
	r.yzw -= r.xyz * ShiftRight8;	return r * PackUpscale;
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors );
}
vec2 packDepthToRG( in highp float v ) {
	return packDepthToRGBA( v ).yx;
}
float unpackRGToDepth( const in highp vec2 v ) {
	return unpackRGBAToDepth( vec4( v.xy, 0.0, 0.0 ) );
}
vec4 pack2HalfToRGBA( vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,_A=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,vA=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,xA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,yA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,SA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,MA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,EA=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform sampler2D pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	float texture2DCompare( sampler2D depths, vec2 uv, float compare ) {
		return step( compare, unpackRGBAToDepth( texture2D( depths, uv ) ) );
	}
	vec2 texture2DDistribution( sampler2D shadow, vec2 uv ) {
		return unpackRGBATo2Half( texture2D( shadow, uv ) );
	}
	float VSMShadow (sampler2D shadow, vec2 uv, float compare ){
		float occlusion = 1.0;
		vec2 distribution = texture2DDistribution( shadow, uv );
		float hard_shadow = step( compare , distribution.x );
		if (hard_shadow != 1.0 ) {
			float distance = compare - distribution.x ;
			float variance = max( 0.00000, distribution.y * distribution.y );
			float softness_probability = variance / (variance + distance * distance );			softness_probability = clamp( ( softness_probability - 0.3 ) / ( 0.95 - 0.3 ), 0.0, 1.0 );			occlusion = clamp( max( hard_shadow, softness_probability ), 0.0, 1.0 );
		}
		return occlusion;
	}
	float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
		float shadow = 1.0;
		shadowCoord.xyz /= shadowCoord.w;
		shadowCoord.z += shadowBias;
		bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
		bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
		if ( frustumTest ) {
		#if defined( SHADOWMAP_TYPE_PCF )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx0 = - texelSize.x * shadowRadius;
			float dy0 = - texelSize.y * shadowRadius;
			float dx1 = + texelSize.x * shadowRadius;
			float dy1 = + texelSize.y * shadowRadius;
			float dx2 = dx0 / 2.0;
			float dy2 = dy0 / 2.0;
			float dx3 = dx1 / 2.0;
			float dy3 = dy1 / 2.0;
			shadow = (
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy2 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx2, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx3, dy3 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( 0.0, dy1 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, shadowCoord.xy + vec2( dx1, dy1 ), shadowCoord.z )
			) * ( 1.0 / 17.0 );
		#elif defined( SHADOWMAP_TYPE_PCF_SOFT )
			vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
			float dx = texelSize.x;
			float dy = texelSize.y;
			vec2 uv = shadowCoord.xy;
			vec2 f = fract( uv * shadowMapSize + 0.5 );
			uv -= f * texelSize;
			shadow = (
				texture2DCompare( shadowMap, uv, shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( dx, 0.0 ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + vec2( 0.0, dy ), shadowCoord.z ) +
				texture2DCompare( shadowMap, uv + texelSize, shadowCoord.z ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, 0.0 ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 0.0 ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( -dx, dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, dy ), shadowCoord.z ),
					 f.x ) +
				mix( texture2DCompare( shadowMap, uv + vec2( 0.0, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( 0.0, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( texture2DCompare( shadowMap, uv + vec2( dx, -dy ), shadowCoord.z ),
					 texture2DCompare( shadowMap, uv + vec2( dx, 2.0 * dy ), shadowCoord.z ),
					 f.y ) +
				mix( mix( texture2DCompare( shadowMap, uv + vec2( -dx, -dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, -dy ), shadowCoord.z ),
						  f.x ),
					 mix( texture2DCompare( shadowMap, uv + vec2( -dx, 2.0 * dy ), shadowCoord.z ),
						  texture2DCompare( shadowMap, uv + vec2( 2.0 * dx, 2.0 * dy ), shadowCoord.z ),
						  f.x ),
					 f.y )
			) * ( 1.0 / 9.0 );
		#elif defined( SHADOWMAP_TYPE_VSM )
			shadow = VSMShadow( shadowMap, shadowCoord.xy, shadowCoord.z );
		#else
			shadow = texture2DCompare( shadowMap, shadowCoord.xy, shadowCoord.z );
		#endif
		}
		return shadow;
	}
	vec2 cubeToUV( vec3 v, float texelSizeY ) {
		vec3 absV = abs( v );
		float scaleToCube = 1.0 / max( absV.x, max( absV.y, absV.z ) );
		absV *= scaleToCube;
		v *= scaleToCube * ( 1.0 - 2.0 * texelSizeY );
		vec2 planar = v.xy;
		float almostATexel = 1.5 * texelSizeY;
		float almostOne = 1.0 - almostATexel;
		if ( absV.z >= almostOne ) {
			if ( v.z > 0.0 )
				planar.x = 4.0 - v.x;
		} else if ( absV.x >= almostOne ) {
			float signX = sign( v.x );
			planar.x = v.z * signX + 2.0 * signX;
		} else if ( absV.y >= almostOne ) {
			float signY = sign( v.y );
			planar.x = v.x + 2.0 * signY + 2.0;
			planar.y = v.z * signY - 2.0;
		}
		return vec2( 0.125, 0.25 ) * planar + vec2( 0.375, 0.75 );
	}
	float getPointShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		vec2 texelSize = vec2( 1.0 ) / ( shadowMapSize * vec2( 4.0, 2.0 ) );
		vec3 lightToPosition = shadowCoord.xyz;
		float dp = ( length( lightToPosition ) - shadowCameraNear ) / ( shadowCameraFar - shadowCameraNear );		dp += shadowBias;
		vec3 bd3D = normalize( lightToPosition );
		#if defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_PCF_SOFT ) || defined( SHADOWMAP_TYPE_VSM )
			vec2 offset = vec2( - 1, 1 ) * shadowRadius * texelSize.y;
			return (
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yyx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxy, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.xxx, texelSize.y ), dp ) +
				texture2DCompare( shadowMap, cubeToUV( bd3D + offset.yxx, texelSize.y ), dp )
			) * ( 1.0 / 9.0 );
		#else
			return texture2DCompare( shadowMap, cubeToUV( bd3D, texelSize.y ), dp );
		#endif
	}
#endif`,TA=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,wA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,AA=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,CA=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,RA=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	uniform int boneTextureSize;
	mat4 getBoneMatrix( const in float i ) {
		float j = i * 4.0;
		float x = mod( j, float( boneTextureSize ) );
		float y = floor( j / float( boneTextureSize ) );
		float dx = 1.0 / float( boneTextureSize );
		float dy = 1.0 / float( boneTextureSize );
		y = dy * ( y + 0.5 );
		vec4 v1 = texture2D( boneTexture, vec2( dx * ( x + 0.5 ), y ) );
		vec4 v2 = texture2D( boneTexture, vec2( dx * ( x + 1.5 ), y ) );
		vec4 v3 = texture2D( boneTexture, vec2( dx * ( x + 2.5 ), y ) );
		vec4 v4 = texture2D( boneTexture, vec2( dx * ( x + 3.5 ), y ) );
		mat4 bone = mat4( v1, v2, v3, v4 );
		return bone;
	}
#endif`,bA=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,PA=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,LA=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,DA=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,UA=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,NA=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 OptimizedCineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,IA=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseColor, material.specularColor, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,OA=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
		vec3 refractedRayExit = position + transmissionRay;
		vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
		vec2 refractionCoords = ndcPos.xy / ndcPos.w;
		refractionCoords += 1.0;
		refractionCoords /= 2.0;
		vec4 transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
		vec3 transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,FA=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,kA=`#ifdef USE_UV
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,zA=`#ifdef USE_UV
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,BA=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const HA=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,VA=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,GA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,WA=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,jA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,XA=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,YA=`#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,qA=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <logdepthbuf_fragment>
	float fragCoordZ = 0.5 * vHighPrecisionZW[0] / vHighPrecisionZW[1] + 0.5;
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#endif
}`,$A=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <skinbase_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,KA=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( 1.0 );
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = packDepthToRGBA( dist );
}`,ZA=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,QA=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
}`,JA=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,eC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,tC=`#include <common>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,nC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,rC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,sC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,oC=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,aC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,lC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <packing>
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( packNormalToRGB( normal ), opacity );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,uC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,cC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,fC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,dC=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
		float sheenEnergyComp = 1.0 - 0.157 * max3( material.sheenColor );
		outgoingLight = outgoingLight * sheenEnergyComp + sheenSpecular;
	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;
	#endif
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,hC=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,pC=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <packing>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec4 diffuseColor = vec4( diffuse, opacity );
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,mC=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,gC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,_C=`#include <common>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,vC=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <packing>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,xC=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix * vec4( 0.0, 0.0, 0.0, 1.0 );
	vec2 scale;
	scale.x = length( vec3( modelMatrix[ 0 ].x, modelMatrix[ 0 ].y, modelMatrix[ 0 ].z ) );
	scale.y = length( vec3( modelMatrix[ 1 ].x, modelMatrix[ 1 ].y, modelMatrix[ 1 ].z ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,yC=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <output_fragment>
	#include <tonemapping_fragment>
	#include <encodings_fragment>
	#include <fog_fragment>
}`,ke={alphamap_fragment:XT,alphamap_pars_fragment:YT,alphatest_fragment:qT,alphatest_pars_fragment:$T,aomap_fragment:KT,aomap_pars_fragment:ZT,begin_vertex:QT,beginnormal_vertex:JT,bsdfs:ew,iridescence_fragment:tw,bumpmap_pars_fragment:nw,clipping_planes_fragment:iw,clipping_planes_pars_fragment:rw,clipping_planes_pars_vertex:sw,clipping_planes_vertex:ow,color_fragment:aw,color_pars_fragment:lw,color_pars_vertex:uw,color_vertex:cw,common:fw,cube_uv_reflection_fragment:dw,defaultnormal_vertex:hw,displacementmap_pars_vertex:pw,displacementmap_vertex:mw,emissivemap_fragment:gw,emissivemap_pars_fragment:_w,encodings_fragment:vw,encodings_pars_fragment:xw,envmap_fragment:yw,envmap_common_pars_fragment:Sw,envmap_pars_fragment:Mw,envmap_pars_vertex:Ew,envmap_physical_pars_fragment:Iw,envmap_vertex:Tw,fog_vertex:ww,fog_pars_vertex:Aw,fog_fragment:Cw,fog_pars_fragment:Rw,gradientmap_pars_fragment:bw,lightmap_fragment:Pw,lightmap_pars_fragment:Lw,lights_lambert_fragment:Dw,lights_lambert_pars_fragment:Uw,lights_pars_begin:Nw,lights_toon_fragment:Ow,lights_toon_pars_fragment:Fw,lights_phong_fragment:kw,lights_phong_pars_fragment:zw,lights_physical_fragment:Bw,lights_physical_pars_fragment:Hw,lights_fragment_begin:Vw,lights_fragment_maps:Gw,lights_fragment_end:Ww,logdepthbuf_fragment:jw,logdepthbuf_pars_fragment:Xw,logdepthbuf_pars_vertex:Yw,logdepthbuf_vertex:qw,map_fragment:$w,map_pars_fragment:Kw,map_particle_fragment:Zw,map_particle_pars_fragment:Qw,metalnessmap_fragment:Jw,metalnessmap_pars_fragment:eA,morphcolor_vertex:tA,morphnormal_vertex:nA,morphtarget_pars_vertex:iA,morphtarget_vertex:rA,normal_fragment_begin:sA,normal_fragment_maps:oA,normal_pars_fragment:aA,normal_pars_vertex:lA,normal_vertex:uA,normalmap_pars_fragment:cA,clearcoat_normal_fragment_begin:fA,clearcoat_normal_fragment_maps:dA,clearcoat_pars_fragment:hA,iridescence_pars_fragment:pA,output_fragment:mA,packing:gA,premultiplied_alpha_fragment:_A,project_vertex:vA,dithering_fragment:xA,dithering_pars_fragment:yA,roughnessmap_fragment:SA,roughnessmap_pars_fragment:MA,shadowmap_pars_fragment:EA,shadowmap_pars_vertex:TA,shadowmap_vertex:wA,shadowmask_pars_fragment:AA,skinbase_vertex:CA,skinning_pars_vertex:RA,skinning_vertex:bA,skinnormal_vertex:PA,specularmap_fragment:LA,specularmap_pars_fragment:DA,tonemapping_fragment:UA,tonemapping_pars_fragment:NA,transmission_fragment:IA,transmission_pars_fragment:OA,uv_pars_fragment:FA,uv_pars_vertex:kA,uv_vertex:zA,worldpos_vertex:BA,background_vert:HA,background_frag:VA,backgroundCube_vert:GA,backgroundCube_frag:WA,cube_vert:jA,cube_frag:XA,depth_vert:YA,depth_frag:qA,distanceRGBA_vert:$A,distanceRGBA_frag:KA,equirect_vert:ZA,equirect_frag:QA,linedashed_vert:JA,linedashed_frag:eC,meshbasic_vert:tC,meshbasic_frag:nC,meshlambert_vert:iC,meshlambert_frag:rC,meshmatcap_vert:sC,meshmatcap_frag:oC,meshnormal_vert:aC,meshnormal_frag:lC,meshphong_vert:uC,meshphong_frag:cC,meshphysical_vert:fC,meshphysical_frag:dC,meshtoon_vert:hC,meshtoon_frag:pC,points_vert:mC,points_frag:gC,shadow_vert:_C,shadow_frag:vC,sprite_vert:xC,sprite_frag:yC},fe={common:{diffuse:{value:new Qe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new Be}},envmap:{envMap:{value:null},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new Be}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new Be}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new Be},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new Be},normalScale:{value:new Ie(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new Be},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new Be}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new Be}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new Be}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Qe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new Qe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0},uvTransform:{value:new Be}},sprite:{diffuse:{value:new Qe(16777215)},opacity:{value:1},center:{value:new Ie(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new Be},alphaMap:{value:null},alphaMapTransform:{value:new Be},alphaTest:{value:0}}},pi={basic:{uniforms:Jt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.fog]),vertexShader:ke.meshbasic_vert,fragmentShader:ke.meshbasic_frag},lambert:{uniforms:Jt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:ke.meshlambert_vert,fragmentShader:ke.meshlambert_frag},phong:{uniforms:Jt([fe.common,fe.specularmap,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,fe.lights,{emissive:{value:new Qe(0)},specular:{value:new Qe(1118481)},shininess:{value:30}}]),vertexShader:ke.meshphong_vert,fragmentShader:ke.meshphong_frag},standard:{uniforms:Jt([fe.common,fe.envmap,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.roughnessmap,fe.metalnessmap,fe.fog,fe.lights,{emissive:{value:new Qe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag},toon:{uniforms:Jt([fe.common,fe.aomap,fe.lightmap,fe.emissivemap,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.gradientmap,fe.fog,fe.lights,{emissive:{value:new Qe(0)}}]),vertexShader:ke.meshtoon_vert,fragmentShader:ke.meshtoon_frag},matcap:{uniforms:Jt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,fe.fog,{matcap:{value:null}}]),vertexShader:ke.meshmatcap_vert,fragmentShader:ke.meshmatcap_frag},points:{uniforms:Jt([fe.points,fe.fog]),vertexShader:ke.points_vert,fragmentShader:ke.points_frag},dashed:{uniforms:Jt([fe.common,fe.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ke.linedashed_vert,fragmentShader:ke.linedashed_frag},depth:{uniforms:Jt([fe.common,fe.displacementmap]),vertexShader:ke.depth_vert,fragmentShader:ke.depth_frag},normal:{uniforms:Jt([fe.common,fe.bumpmap,fe.normalmap,fe.displacementmap,{opacity:{value:1}}]),vertexShader:ke.meshnormal_vert,fragmentShader:ke.meshnormal_frag},sprite:{uniforms:Jt([fe.sprite,fe.fog]),vertexShader:ke.sprite_vert,fragmentShader:ke.sprite_frag},background:{uniforms:{uvTransform:{value:new Be},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ke.background_vert,fragmentShader:ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1}},vertexShader:ke.backgroundCube_vert,fragmentShader:ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ke.cube_vert,fragmentShader:ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ke.equirect_vert,fragmentShader:ke.equirect_frag},distanceRGBA:{uniforms:Jt([fe.common,fe.displacementmap,{referencePosition:{value:new B},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ke.distanceRGBA_vert,fragmentShader:ke.distanceRGBA_frag},shadow:{uniforms:Jt([fe.lights,fe.fog,{color:{value:new Qe(0)},opacity:{value:1}}]),vertexShader:ke.shadow_vert,fragmentShader:ke.shadow_frag}};pi.physical={uniforms:Jt([pi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new Be},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new Be},clearcoatNormalScale:{value:new Ie(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new Be},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new Be},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new Be},sheen:{value:0},sheenColor:{value:new Qe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new Be},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new Be},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new Be},transmissionSamplerSize:{value:new Ie},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new Be},attenuationDistance:{value:0},attenuationColor:{value:new Qe(0)},specularColor:{value:new Qe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new Be},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new Be},anisotropyVector:{value:new Ie},anisotropyMap:{value:null},anisotropyMapTransform:{value:new Be}}]),vertexShader:ke.meshphysical_vert,fragmentShader:ke.meshphysical_frag};const Xl={r:0,b:0,g:0};function SC(n,e,t,i,r,s,o){const a=new Qe(0);let l=s===!0?0:1,u,c,d=null,h=0,p=null;function v(m,f){let _=!1,x=f.isScene===!0?f.background:null;switch(x&&x.isTexture&&(x=(f.backgroundBlurriness>0?t:e).get(x)),x===null?g(a,l):x&&x.isColor&&(g(x,1),_=!0),n.xr.getEnvironmentBlendMode()){case"opaque":_=!0;break;case"additive":i.buffers.color.setClear(0,0,0,1,o),_=!0;break;case"alpha-blend":i.buffers.color.setClear(0,0,0,0,o),_=!0;break}(n.autoClear||_)&&n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil),x&&(x.isCubeTexture||x.mapping===pc)?(c===void 0&&(c=new Hi(new ol(1,1,1),new ys({name:"BackgroundCubeMaterial",uniforms:Lo(pi.backgroundCube.uniforms),vertexShader:pi.backgroundCube.vertexShader,fragmentShader:pi.backgroundCube.fragmentShader,side:hn,depthTest:!1,depthWrite:!1,fog:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,A,C){this.matrixWorld.copyPosition(C.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(c)),c.material.uniforms.envMap.value=x,c.material.uniforms.flipEnvMap.value=x.isCubeTexture&&x.isRenderTargetTexture===!1?-1:1,c.material.uniforms.backgroundBlurriness.value=f.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,c.material.toneMapped=x.colorSpace!==Fe,(d!==x||h!==x.version||p!==n.toneMapping)&&(c.material.needsUpdate=!0,d=x,h=x.version,p=n.toneMapping),c.layers.enableAll(),m.unshift(c,c.geometry,c.material,0,0,null)):x&&x.isTexture&&(u===void 0&&(u=new Hi(new up(2,2),new ys({name:"BackgroundMaterial",uniforms:Lo(pi.background.uniforms),vertexShader:pi.background.vertexShader,fragmentShader:pi.background.fragmentShader,side:br,depthTest:!1,depthWrite:!1,fog:!1})),u.geometry.deleteAttribute("normal"),Object.defineProperty(u.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(u)),u.material.uniforms.t2D.value=x,u.material.uniforms.backgroundIntensity.value=f.backgroundIntensity,u.material.toneMapped=x.colorSpace!==Fe,x.matrixAutoUpdate===!0&&x.updateMatrix(),u.material.uniforms.uvTransform.value.copy(x.matrix),(d!==x||h!==x.version||p!==n.toneMapping)&&(u.material.needsUpdate=!0,d=x,h=x.version,p=n.toneMapping),u.layers.enableAll(),m.unshift(u,u.geometry,u.material,0,0,null))}function g(m,f){m.getRGB(Xl,Cx(n)),i.buffers.color.setClear(Xl.r,Xl.g,Xl.b,f,o)}return{getClearColor:function(){return a},setClearColor:function(m,f=1){a.set(m),l=f,g(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(m){l=m,g(a,l)},render:v}}function MC(n,e,t,i){const r=n.getParameter(n.MAX_VERTEX_ATTRIBS),s=i.isWebGL2?null:e.get("OES_vertex_array_object"),o=i.isWebGL2||s!==null,a={},l=m(null);let u=l,c=!1;function d(N,z,$,W,D){let X=!1;if(o){const G=g(W,$,z);u!==G&&(u=G,p(u.object)),X=f(N,W,$,D),X&&_(N,W,$,D)}else{const G=z.wireframe===!0;(u.geometry!==W.id||u.program!==$.id||u.wireframe!==G)&&(u.geometry=W.id,u.program=$.id,u.wireframe=G,X=!0)}D!==null&&t.update(D,n.ELEMENT_ARRAY_BUFFER),(X||c)&&(c=!1,C(N,z,$,W),D!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(D).buffer))}function h(){return i.isWebGL2?n.createVertexArray():s.createVertexArrayOES()}function p(N){return i.isWebGL2?n.bindVertexArray(N):s.bindVertexArrayOES(N)}function v(N){return i.isWebGL2?n.deleteVertexArray(N):s.deleteVertexArrayOES(N)}function g(N,z,$){const W=$.wireframe===!0;let D=a[N.id];D===void 0&&(D={},a[N.id]=D);let X=D[z.id];X===void 0&&(X={},D[z.id]=X);let G=X[W];return G===void 0&&(G=m(h()),X[W]=G),G}function m(N){const z=[],$=[],W=[];for(let D=0;D<r;D++)z[D]=0,$[D]=0,W[D]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:z,enabledAttributes:$,attributeDivisors:W,object:N,attributes:{},index:null}}function f(N,z,$,W){const D=u.attributes,X=z.attributes;let G=0;const se=$.getAttributes();for(const F in se)if(se[F].location>=0){const K=D[F];let re=X[F];if(re===void 0&&(F==="instanceMatrix"&&N.instanceMatrix&&(re=N.instanceMatrix),F==="instanceColor"&&N.instanceColor&&(re=N.instanceColor)),K===void 0||K.attribute!==re||re&&K.data!==re.data)return!0;G++}return u.attributesNum!==G||u.index!==W}function _(N,z,$,W){const D={},X=z.attributes;let G=0;const se=$.getAttributes();for(const F in se)if(se[F].location>=0){let K=X[F];K===void 0&&(F==="instanceMatrix"&&N.instanceMatrix&&(K=N.instanceMatrix),F==="instanceColor"&&N.instanceColor&&(K=N.instanceColor));const re={};re.attribute=K,K&&K.data&&(re.data=K.data),D[F]=re,G++}u.attributes=D,u.attributesNum=G,u.index=W}function x(){const N=u.newAttributes;for(let z=0,$=N.length;z<$;z++)N[z]=0}function y(N){S(N,0)}function S(N,z){const $=u.newAttributes,W=u.enabledAttributes,D=u.attributeDivisors;$[N]=1,W[N]===0&&(n.enableVertexAttribArray(N),W[N]=1),D[N]!==z&&((i.isWebGL2?n:e.get("ANGLE_instanced_arrays"))[i.isWebGL2?"vertexAttribDivisor":"vertexAttribDivisorANGLE"](N,z),D[N]=z)}function E(){const N=u.newAttributes,z=u.enabledAttributes;for(let $=0,W=z.length;$<W;$++)z[$]!==N[$]&&(n.disableVertexAttribArray($),z[$]=0)}function A(N,z,$,W,D,X,G){G===!0?n.vertexAttribIPointer(N,z,$,D,X):n.vertexAttribPointer(N,z,$,W,D,X)}function C(N,z,$,W){if(i.isWebGL2===!1&&(N.isInstancedMesh||W.isInstancedBufferGeometry)&&e.get("ANGLE_instanced_arrays")===null)return;x();const D=W.attributes,X=$.getAttributes(),G=z.defaultAttributeValues;for(const se in X){const F=X[se];if(F.location>=0){let ee=D[se];if(ee===void 0&&(se==="instanceMatrix"&&N.instanceMatrix&&(ee=N.instanceMatrix),se==="instanceColor"&&N.instanceColor&&(ee=N.instanceColor)),ee!==void 0){const K=ee.normalized,re=ee.itemSize,le=t.get(ee);if(le===void 0)continue;const de=le.buffer,Me=le.type,ye=le.bytesPerElement,$e=i.isWebGL2===!0&&(Me===n.INT||Me===n.UNSIGNED_INT||ee.gpuType===ux);if(ee.isInterleavedBufferAttribute){const be=ee.data,H=be.stride,De=ee.offset;if(be.isInstancedInterleavedBuffer){for(let ue=0;ue<F.locationSize;ue++)S(F.location+ue,be.meshPerAttribute);N.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=be.meshPerAttribute*be.count)}else for(let ue=0;ue<F.locationSize;ue++)y(F.location+ue);n.bindBuffer(n.ARRAY_BUFFER,de);for(let ue=0;ue<F.locationSize;ue++)A(F.location+ue,re/F.locationSize,Me,K,H*ye,(De+re/F.locationSize*ue)*ye,$e)}else{if(ee.isInstancedBufferAttribute){for(let be=0;be<F.locationSize;be++)S(F.location+be,ee.meshPerAttribute);N.isInstancedMesh!==!0&&W._maxInstanceCount===void 0&&(W._maxInstanceCount=ee.meshPerAttribute*ee.count)}else for(let be=0;be<F.locationSize;be++)y(F.location+be);n.bindBuffer(n.ARRAY_BUFFER,de);for(let be=0;be<F.locationSize;be++)A(F.location+be,re/F.locationSize,Me,K,re*ye,re/F.locationSize*be*ye,$e)}}else if(G!==void 0){const K=G[se];if(K!==void 0)switch(K.length){case 2:n.vertexAttrib2fv(F.location,K);break;case 3:n.vertexAttrib3fv(F.location,K);break;case 4:n.vertexAttrib4fv(F.location,K);break;default:n.vertexAttrib1fv(F.location,K)}}}}E()}function M(){O();for(const N in a){const z=a[N];for(const $ in z){const W=z[$];for(const D in W)v(W[D].object),delete W[D];delete z[$]}delete a[N]}}function T(N){if(a[N.id]===void 0)return;const z=a[N.id];for(const $ in z){const W=z[$];for(const D in W)v(W[D].object),delete W[D];delete z[$]}delete a[N.id]}function U(N){for(const z in a){const $=a[z];if($[N.id]===void 0)continue;const W=$[N.id];for(const D in W)v(W[D].object),delete W[D];delete $[N.id]}}function O(){L(),c=!0,u!==l&&(u=l,p(u.object))}function L(){l.geometry=null,l.program=null,l.wireframe=!1}return{setup:d,reset:O,resetDefaultState:L,dispose:M,releaseStatesOfGeometry:T,releaseStatesOfProgram:U,initAttributes:x,enableAttribute:y,disableUnusedAttributes:E}}function EC(n,e,t,i){const r=i.isWebGL2;let s;function o(u){s=u}function a(u,c){n.drawArrays(s,u,c),t.update(c,s,1)}function l(u,c,d){if(d===0)return;let h,p;if(r)h=n,p="drawArraysInstanced";else if(h=e.get("ANGLE_instanced_arrays"),p="drawArraysInstancedANGLE",h===null){console.error("THREE.WebGLBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}h[p](s,u,c,d),t.update(c,s,d)}this.setMode=o,this.render=a,this.renderInstances=l}function TC(n,e,t){let i;function r(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function s(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}const o=typeof WebGL2RenderingContext<"u"&&n.constructor.name==="WebGL2RenderingContext";let a=t.precision!==void 0?t.precision:"highp";const l=s(a);l!==a&&(console.warn("THREE.WebGLRenderer:",a,"not supported, using",l,"instead."),a=l);const u=o||e.has("WEBGL_draw_buffers"),c=t.logarithmicDepthBuffer===!0,d=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),h=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),p=n.getParameter(n.MAX_TEXTURE_SIZE),v=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),g=n.getParameter(n.MAX_VERTEX_ATTRIBS),m=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),f=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),x=h>0,y=o||e.has("OES_texture_float"),S=x&&y,E=o?n.getParameter(n.MAX_SAMPLES):0;return{isWebGL2:o,drawBuffers:u,getMaxAnisotropy:r,getMaxPrecision:s,precision:a,logarithmicDepthBuffer:c,maxTextures:d,maxVertexTextures:h,maxTextureSize:p,maxCubemapSize:v,maxAttributes:g,maxVertexUniforms:m,maxVaryings:f,maxFragmentUniforms:_,vertexTextures:x,floatFragmentTextures:y,floatVertexTextures:S,maxSamples:E}}function wC(n){const e=this;let t=null,i=0,r=!1,s=!1;const o=new qr,a=new Be,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const p=d.length!==0||h||i!==0||r;return r=h,i=d.length,p},this.beginShadows=function(){s=!0,c(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=c(d,h,0)},this.setState=function(d,h,p){const v=d.clippingPlanes,g=d.clipIntersection,m=d.clipShadows,f=n.get(d);if(!r||v===null||v.length===0||s&&!m)s?c(null):u();else{const _=s?0:i,x=_*4;let y=f.clippingState||null;l.value=y,y=c(v,h,x,p);for(let S=0;S!==x;++S)y[S]=t[S];f.clippingState=y,this.numIntersection=g?this.numPlanes:0,this.numPlanes+=_}};function u(){l.value!==t&&(l.value=t,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function c(d,h,p,v){const g=d!==null?d.length:0;let m=null;if(g!==0){if(m=l.value,v!==!0||m===null){const f=p+g*4,_=h.matrixWorldInverse;a.getNormalMatrix(_),(m===null||m.length<f)&&(m=new Float32Array(f));for(let x=0,y=p;x!==g;++x,y+=4)o.copy(d[x]).applyMatrix4(_,a),o.normal.toArray(m,y),m[y+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=g,e.numIntersection=0,m}}function AC(n){let e=new WeakMap;function t(o,a){return a===kd?o.mapping=Ro:a===zd&&(o.mapping=bo),o}function i(o){if(o&&o.isTexture&&o.isRenderTargetTexture===!1){const a=o.mapping;if(a===kd||a===zd)if(e.has(o)){const l=e.get(o).texture;return t(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const u=new VT(l.height/2);return u.fromEquirectangularTexture(n,o),e.set(o,u),o.addEventListener("dispose",r),t(u.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}class CC extends Rx{constructor(e=-1,t=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+t,l=r-t;if(this.view!==null&&this.view.enabled){const u=(this.right-this.left)/this.view.fullWidth/this.zoom,c=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=u*this.view.offsetX,o=s+u*this.view.width,a-=c*this.view.offsetY,l=a-c*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}const so=4,jg=[.125,.215,.35,.446,.526,.582],Zr=20,Tf=new CC,Xg=new Qe;let wf=null;const $r=(1+Math.sqrt(5))/2,Ws=1/$r,Yg=[new B(1,1,1),new B(-1,1,1),new B(1,1,-1),new B(-1,1,-1),new B(0,$r,Ws),new B(0,$r,-Ws),new B(Ws,0,$r),new B(-Ws,0,$r),new B($r,Ws,0),new B(-$r,Ws,0)];class qg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._lodPlanes=[],this._sizeLods=[],this._sigmas=[],this._blurMaterial=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._compileMaterial(this._blurMaterial)}fromScene(e,t=0,i=.1,r=100){wf=this._renderer.getRenderTarget(),this._setSize(256);const s=this._allocateTargets();return s.depthBuffer=!0,this._sceneToCubeUV(e,i,r,s),t>0&&this._blur(s,0,0,t),this._applyPMREM(s),this._cleanup(s),s}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Zg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Kg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose()}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodPlanes.length;e++)this._lodPlanes[e].dispose()}_cleanup(e){this._renderer.setRenderTarget(wf),e.scissorTest=!1,Yl(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ro||e.mapping===bo?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),wf=this._renderer.getRenderTarget();const i=t||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,i={magFilter:Bn,minFilter:Bn,generateMipmaps:!1,type:Wa,format:oi,colorSpace:Ei,depthBuffer:!1},r=$g(e,t,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$g(e,t,i);const{_lodMax:s}=this;({sizeLods:this._sizeLods,lodPlanes:this._lodPlanes,sigmas:this._sigmas}=RC(s)),this._blurMaterial=bC(s,e,t)}return r}_compileMaterial(e){const t=new Hi(this._lodPlanes[0],e);this._renderer.compile(t,Tf)}_sceneToCubeUV(e,t,i,r){const a=new wn(90,1,t,i),l=[1,-1,1,1,1,1],u=[1,1,1,-1,-1,-1],c=this._renderer,d=c.autoClear,h=c.toneMapping;c.getClearColor(Xg),c.toneMapping=Gi,c.autoClear=!1;const p=new Tx({name:"PMREM.Background",side:hn,depthWrite:!1,depthTest:!1}),v=new Hi(new ol,p);let g=!1;const m=e.background;m?m.isColor&&(p.color.copy(m),e.background=null,g=!0):(p.color.copy(Xg),g=!0);for(let f=0;f<6;f++){const _=f%3;_===0?(a.up.set(0,l[f],0),a.lookAt(u[f],0,0)):_===1?(a.up.set(0,0,l[f]),a.lookAt(0,u[f],0)):(a.up.set(0,l[f],0),a.lookAt(0,0,u[f]));const x=this._cubeSize;Yl(r,_*x,f>2?x:0,x,x),c.setRenderTarget(r),g&&c.render(v,a),c.render(e,a)}v.geometry.dispose(),v.material.dispose(),c.toneMapping=h,c.autoClear=d,e.background=m}_textureToCubeUV(e,t){const i=this._renderer,r=e.mapping===Ro||e.mapping===bo;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=Zg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Kg());const s=r?this._cubemapMaterial:this._equirectMaterial,o=new Hi(this._lodPlanes[0],s),a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Yl(t,0,0,3*l,2*l),i.setRenderTarget(t),i.render(o,Tf)}_applyPMREM(e){const t=this._renderer,i=t.autoClear;t.autoClear=!1;for(let r=1;r<this._lodPlanes.length;r++){const s=Math.sqrt(this._sigmas[r]*this._sigmas[r]-this._sigmas[r-1]*this._sigmas[r-1]),o=Yg[(r-1)%Yg.length];this._blur(e,r-1,r,s,o)}t.autoClear=i}_blur(e,t,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,t,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,t,i,r,s,o,a){const l=this._renderer,u=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&console.error("blur direction must be either latitudinal or longitudinal!");const c=3,d=new Hi(this._lodPlanes[r],u),h=u.uniforms,p=this._sizeLods[i]-1,v=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*Zr-1),g=s/v,m=isFinite(s)?1+Math.floor(c*g):Zr;m>Zr&&console.warn(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${Zr}`);const f=[];let _=0;for(let A=0;A<Zr;++A){const C=A/g,M=Math.exp(-C*C/2);f.push(M),A===0?_+=M:A<m&&(_+=2*M)}for(let A=0;A<f.length;A++)f[A]=f[A]/_;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=f,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:x}=this;h.dTheta.value=v,h.mipInt.value=x-i;const y=this._sizeLods[r],S=3*y*(r>x-so?r-x+so:0),E=4*(this._cubeSize-y);Yl(t,S,E,3*y,2*y),l.setRenderTarget(t),l.render(d,Tf)}}function RC(n){const e=[],t=[],i=[];let r=n;const s=n-so+1+jg.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);t.push(a);let l=1/a;o>n-so?l=jg[o-n+so-1]:o===0&&(l=0),i.push(l);const u=1/(a-2),c=-u,d=1+u,h=[c,c,d,c,d,d,c,c,d,d,c,d],p=6,v=6,g=3,m=2,f=1,_=new Float32Array(g*v*p),x=new Float32Array(m*v*p),y=new Float32Array(f*v*p);for(let E=0;E<p;E++){const A=E%3*2/3-1,C=E>2?0:-1,M=[A,C,0,A+2/3,C,0,A+2/3,C+1,0,A,C,0,A+2/3,C+1,0,A,C+1,0];_.set(M,g*v*E),x.set(h,m*v*E);const T=[E,E,E,E,E,E];y.set(T,f*v*E)}const S=new Ir;S.setAttribute("position",new yi(_,g)),S.setAttribute("uv",new yi(x,m)),S.setAttribute("faceIndex",new yi(y,f)),e.push(S),r>so&&r--}return{lodPlanes:e,sizeLods:t,sigmas:i}}function $g(n,e,t){const i=new vs(n,e,t);return i.texture.mapping=pc,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Yl(n,e,t,i,r){n.viewport.set(e,t,i,r),n.scissor.set(e,t,i,r)}function bC(n,e,t){const i=new Float32Array(Zr),r=new B(0,1,0);return new ys({name:"SphericalGaussianBlur",defines:{n:Zr,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Kg(){return new ys({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function Zg(){return new ys({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:cp(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Mr,depthTest:!1,depthWrite:!1})}function cp(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function PC(n){let e=new WeakMap,t=null;function i(a){if(a&&a.isTexture){const l=a.mapping,u=l===kd||l===zd,c=l===Ro||l===bo;if(u||c)if(a.isRenderTargetTexture&&a.needsPMREMUpdate===!0){a.needsPMREMUpdate=!1;let d=e.get(a);return t===null&&(t=new qg(n)),d=u?t.fromEquirectangular(a,d):t.fromCubemap(a,d),e.set(a,d),d.texture}else{if(e.has(a))return e.get(a).texture;{const d=a.image;if(u&&d&&d.height>0||c&&d&&r(d)){t===null&&(t=new qg(n));const h=u?t.fromEquirectangular(a):t.fromCubemap(a);return e.set(a,h),a.addEventListener("dispose",s),h.texture}else return null}}}return a}function r(a){let l=0;const u=6;for(let c=0;c<u;c++)a[c]!==void 0&&l++;return l===u}function s(a){const l=a.target;l.removeEventListener("dispose",s);const u=e.get(l);u!==void 0&&(e.delete(l),u.dispose())}function o(){e=new WeakMap,t!==null&&(t.dispose(),t=null)}return{get:i,dispose:o}}function LC(n){const e={};function t(i){if(e[i]!==void 0)return e[i];let r;switch(i){case"WEBGL_depth_texture":r=n.getExtension("WEBGL_depth_texture")||n.getExtension("MOZ_WEBGL_depth_texture")||n.getExtension("WEBKIT_WEBGL_depth_texture");break;case"EXT_texture_filter_anisotropic":r=n.getExtension("EXT_texture_filter_anisotropic")||n.getExtension("MOZ_EXT_texture_filter_anisotropic")||n.getExtension("WEBKIT_EXT_texture_filter_anisotropic");break;case"WEBGL_compressed_texture_s3tc":r=n.getExtension("WEBGL_compressed_texture_s3tc")||n.getExtension("MOZ_WEBGL_compressed_texture_s3tc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_s3tc");break;case"WEBGL_compressed_texture_pvrtc":r=n.getExtension("WEBGL_compressed_texture_pvrtc")||n.getExtension("WEBKIT_WEBGL_compressed_texture_pvrtc");break;default:r=n.getExtension(i)}return e[i]=r,r}return{has:function(i){return t(i)!==null},init:function(i){i.isWebGL2?t("EXT_color_buffer_float"):(t("WEBGL_depth_texture"),t("OES_texture_float"),t("OES_texture_half_float"),t("OES_texture_half_float_linear"),t("OES_standard_derivatives"),t("OES_element_index_uint"),t("OES_vertex_array_object"),t("ANGLE_instanced_arrays")),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture")},get:function(i){const r=t(i);return r===null&&console.warn("THREE.WebGLRenderer: "+i+" extension not supported."),r}}}function DC(n,e,t,i){const r={},s=new WeakMap;function o(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const v in h.attributes)e.remove(h.attributes[v]);for(const v in h.morphAttributes){const g=h.morphAttributes[v];for(let m=0,f=g.length;m<f;m++)e.remove(g[m])}h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function a(d,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,t.memory.geometries++),h}function l(d){const h=d.attributes;for(const v in h)e.update(h[v],n.ARRAY_BUFFER);const p=d.morphAttributes;for(const v in p){const g=p[v];for(let m=0,f=g.length;m<f;m++)e.update(g[m],n.ARRAY_BUFFER)}}function u(d){const h=[],p=d.index,v=d.attributes.position;let g=0;if(p!==null){const _=p.array;g=p.version;for(let x=0,y=_.length;x<y;x+=3){const S=_[x+0],E=_[x+1],A=_[x+2];h.push(S,E,E,A,A,S)}}else{const _=v.array;g=v.version;for(let x=0,y=_.length/3-1;x<y;x+=3){const S=x+0,E=x+1,A=x+2;h.push(S,E,E,A,A,S)}}const m=new(vx(h)?Ax:wx)(h,1);m.version=g;const f=s.get(d);f&&e.remove(f),s.set(d,m)}function c(d){const h=s.get(d);if(h){const p=d.index;p!==null&&h.version<p.version&&u(d)}else u(d);return s.get(d)}return{get:a,update:l,getWireframeAttribute:c}}function UC(n,e,t,i){const r=i.isWebGL2;let s;function o(h){s=h}let a,l;function u(h){a=h.type,l=h.bytesPerElement}function c(h,p){n.drawElements(s,p,a,h*l),t.update(p,s,1)}function d(h,p,v){if(v===0)return;let g,m;if(r)g=n,m="drawElementsInstanced";else if(g=e.get("ANGLE_instanced_arrays"),m="drawElementsInstancedANGLE",g===null){console.error("THREE.WebGLIndexedBufferRenderer: using THREE.InstancedBufferGeometry but hardware does not support extension ANGLE_instanced_arrays.");return}g[m](s,p,a,h*l,v),t.update(p,s,v)}this.setMode=o,this.setIndex=u,this.render=c,this.renderInstances=d}function NC(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(t.calls++,o){case n.TRIANGLES:t.triangles+=a*(s/3);break;case n.LINES:t.lines+=a*(s/2);break;case n.LINE_STRIP:t.lines+=a*(s-1);break;case n.LINE_LOOP:t.lines+=a*s;break;case n.POINTS:t.points+=a*s;break;default:console.error("THREE.WebGLInfo: Unknown draw mode:",o);break}}function r(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:r,update:i}}function IC(n,e){return n[0]-e[0]}function OC(n,e){return Math.abs(e[1])-Math.abs(n[1])}function FC(n,e,t){const i={},r=new Float32Array(8),s=new WeakMap,o=new ot,a=[];for(let u=0;u<8;u++)a[u]=[u,0];function l(u,c,d){const h=u.morphTargetInfluences;if(e.isWebGL2===!0){const v=c.morphAttributes.position||c.morphAttributes.normal||c.morphAttributes.color,g=v!==void 0?v.length:0;let m=s.get(c);if(m===void 0||m.count!==g){let z=function(){L.dispose(),s.delete(c),c.removeEventListener("dispose",z)};var p=z;m!==void 0&&m.texture.dispose();const x=c.morphAttributes.position!==void 0,y=c.morphAttributes.normal!==void 0,S=c.morphAttributes.color!==void 0,E=c.morphAttributes.position||[],A=c.morphAttributes.normal||[],C=c.morphAttributes.color||[];let M=0;x===!0&&(M=1),y===!0&&(M=2),S===!0&&(M=3);let T=c.attributes.position.count*M,U=1;T>e.maxTextureSize&&(U=Math.ceil(T/e.maxTextureSize),T=e.maxTextureSize);const O=new Float32Array(T*U*4*g),L=new Sx(O,T,U,g);L.type=cr,L.needsUpdate=!0;const N=M*4;for(let $=0;$<g;$++){const W=E[$],D=A[$],X=C[$],G=T*U*4*$;for(let se=0;se<W.count;se++){const F=se*N;x===!0&&(o.fromBufferAttribute(W,se),O[G+F+0]=o.x,O[G+F+1]=o.y,O[G+F+2]=o.z,O[G+F+3]=0),y===!0&&(o.fromBufferAttribute(D,se),O[G+F+4]=o.x,O[G+F+5]=o.y,O[G+F+6]=o.z,O[G+F+7]=0),S===!0&&(o.fromBufferAttribute(X,se),O[G+F+8]=o.x,O[G+F+9]=o.y,O[G+F+10]=o.z,O[G+F+11]=X.itemSize===4?o.w:1)}}m={count:g,texture:L,size:new Ie(T,U)},s.set(c,m),c.addEventListener("dispose",z)}let f=0;for(let x=0;x<h.length;x++)f+=h[x];const _=c.morphTargetsRelative?1:1-f;d.getUniforms().setValue(n,"morphTargetBaseInfluence",_),d.getUniforms().setValue(n,"morphTargetInfluences",h),d.getUniforms().setValue(n,"morphTargetsTexture",m.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",m.size)}else{const v=h===void 0?0:h.length;let g=i[c.id];if(g===void 0||g.length!==v){g=[];for(let y=0;y<v;y++)g[y]=[y,0];i[c.id]=g}for(let y=0;y<v;y++){const S=g[y];S[0]=y,S[1]=h[y]}g.sort(OC);for(let y=0;y<8;y++)y<v&&g[y][1]?(a[y][0]=g[y][0],a[y][1]=g[y][1]):(a[y][0]=Number.MAX_SAFE_INTEGER,a[y][1]=0);a.sort(IC);const m=c.morphAttributes.position,f=c.morphAttributes.normal;let _=0;for(let y=0;y<8;y++){const S=a[y],E=S[0],A=S[1];E!==Number.MAX_SAFE_INTEGER&&A?(m&&c.getAttribute("morphTarget"+y)!==m[E]&&c.setAttribute("morphTarget"+y,m[E]),f&&c.getAttribute("morphNormal"+y)!==f[E]&&c.setAttribute("morphNormal"+y,f[E]),r[y]=A,_+=A):(m&&c.hasAttribute("morphTarget"+y)===!0&&c.deleteAttribute("morphTarget"+y),f&&c.hasAttribute("morphNormal"+y)===!0&&c.deleteAttribute("morphNormal"+y),r[y]=0)}const x=c.morphTargetsRelative?1:1-_;d.getUniforms().setValue(n,"morphTargetBaseInfluence",x),d.getUniforms().setValue(n,"morphTargetInfluences",r)}}return{update:l}}function kC(n,e,t,i){let r=new WeakMap;function s(l){const u=i.render.frame,c=l.geometry,d=e.get(l,c);return r.get(d)!==u&&(e.update(d),r.set(d,u)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),t.update(l.instanceMatrix,n.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,n.ARRAY_BUFFER)),d}function o(){r=new WeakMap}function a(l){const u=l.target;u.removeEventListener("dispose",a),t.remove(u.instanceMatrix),u.instanceColor!==null&&t.remove(u.instanceColor)}return{update:s,dispose:o}}const Lx=new bn,Dx=new Sx,Ux=new wT,Nx=new bx,Qg=[],Jg=[],e_=new Float32Array(16),t_=new Float32Array(9),n_=new Float32Array(4);function Vo(n,e,t){const i=n[0];if(i<=0||i>0)return n;const r=e*t;let s=Qg[r];if(s===void 0&&(s=new Float32Array(r),Qg[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=t,n[o].toArray(s,a)}return s}function Pt(n,e){if(n.length!==e.length)return!1;for(let t=0,i=n.length;t<i;t++)if(n[t]!==e[t])return!1;return!0}function Lt(n,e){for(let t=0,i=e.length;t<i;t++)n[t]=e[t]}function gc(n,e){let t=Jg[e];t===void 0&&(t=new Int32Array(e),Jg[e]=t);for(let i=0;i!==e;++i)t[i]=n.allocateTextureUnit();return t}function zC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function BC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2fv(this.addr,e),Lt(t,e)}}function HC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pt(t,e))return;n.uniform3fv(this.addr,e),Lt(t,e)}}function VC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4fv(this.addr,e),Lt(t,e)}}function GC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;n_.set(i),n.uniformMatrix2fv(this.addr,!1,n_),Lt(t,i)}}function WC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;t_.set(i),n.uniformMatrix3fv(this.addr,!1,t_),Lt(t,i)}}function jC(n,e){const t=this.cache,i=e.elements;if(i===void 0){if(Pt(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),Lt(t,e)}else{if(Pt(t,i))return;e_.set(i),n.uniformMatrix4fv(this.addr,!1,e_),Lt(t,i)}}function XC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function YC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2iv(this.addr,e),Lt(t,e)}}function qC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3iv(this.addr,e),Lt(t,e)}}function $C(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4iv(this.addr,e),Lt(t,e)}}function KC(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function ZC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pt(t,e))return;n.uniform2uiv(this.addr,e),Lt(t,e)}}function QC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pt(t,e))return;n.uniform3uiv(this.addr,e),Lt(t,e)}}function JC(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pt(t,e))return;n.uniform4uiv(this.addr,e),Lt(t,e)}}function eR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2D(e||Lx,r)}function tR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture3D(e||Ux,r)}function nR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTextureCube(e||Nx,r)}function iR(n,e,t){const i=this.cache,r=t.allocateTextureUnit();i[0]!==r&&(n.uniform1i(this.addr,r),i[0]=r),t.setTexture2DArray(e||Dx,r)}function rR(n){switch(n){case 5126:return zC;case 35664:return BC;case 35665:return HC;case 35666:return VC;case 35674:return GC;case 35675:return WC;case 35676:return jC;case 5124:case 35670:return XC;case 35667:case 35671:return YC;case 35668:case 35672:return qC;case 35669:case 35673:return $C;case 5125:return KC;case 36294:return ZC;case 36295:return QC;case 36296:return JC;case 35678:case 36198:case 36298:case 36306:case 35682:return eR;case 35679:case 36299:case 36307:return tR;case 35680:case 36300:case 36308:case 36293:return nR;case 36289:case 36303:case 36311:case 36292:return iR}}function sR(n,e){n.uniform1fv(this.addr,e)}function oR(n,e){const t=Vo(e,this.size,2);n.uniform2fv(this.addr,t)}function aR(n,e){const t=Vo(e,this.size,3);n.uniform3fv(this.addr,t)}function lR(n,e){const t=Vo(e,this.size,4);n.uniform4fv(this.addr,t)}function uR(n,e){const t=Vo(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function cR(n,e){const t=Vo(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function fR(n,e){const t=Vo(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function dR(n,e){n.uniform1iv(this.addr,e)}function hR(n,e){n.uniform2iv(this.addr,e)}function pR(n,e){n.uniform3iv(this.addr,e)}function mR(n,e){n.uniform4iv(this.addr,e)}function gR(n,e){n.uniform1uiv(this.addr,e)}function _R(n,e){n.uniform2uiv(this.addr,e)}function vR(n,e){n.uniform3uiv(this.addr,e)}function xR(n,e){n.uniform4uiv(this.addr,e)}function yR(n,e,t){const i=this.cache,r=e.length,s=gc(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)t.setTexture2D(e[o]||Lx,s[o])}function SR(n,e,t){const i=this.cache,r=e.length,s=gc(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)t.setTexture3D(e[o]||Ux,s[o])}function MR(n,e,t){const i=this.cache,r=e.length,s=gc(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)t.setTextureCube(e[o]||Nx,s[o])}function ER(n,e,t){const i=this.cache,r=e.length,s=gc(t,r);Pt(i,s)||(n.uniform1iv(this.addr,s),Lt(i,s));for(let o=0;o!==r;++o)t.setTexture2DArray(e[o]||Dx,s[o])}function TR(n){switch(n){case 5126:return sR;case 35664:return oR;case 35665:return aR;case 35666:return lR;case 35674:return uR;case 35675:return cR;case 35676:return fR;case 5124:case 35670:return dR;case 35667:case 35671:return hR;case 35668:case 35672:return pR;case 35669:case 35673:return mR;case 5125:return gR;case 36294:return _R;case 36295:return vR;case 36296:return xR;case 35678:case 36198:case 36298:case 36306:case 35682:return yR;case 35679:case 36299:case 36307:return SR;case 35680:case 36300:case 36308:case 36293:return MR;case 36289:case 36303:case 36311:case 36292:return ER}}class wR{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.setValue=rR(t.type)}}class AR{constructor(e,t,i){this.id=e,this.addr=i,this.cache=[],this.size=t.size,this.setValue=TR(t.type)}}class CR{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,t[a.id],i)}}}const Af=/(\w+)(\])?(\[|\.)?/g;function i_(n,e){n.seq.push(e),n.map[e.id]=e}function RR(n,e,t){const i=n.name,r=i.length;for(Af.lastIndex=0;;){const s=Af.exec(i),o=Af.lastIndex;let a=s[1];const l=s[2]==="]",u=s[3];if(l&&(a=a|0),u===void 0||u==="["&&o+2===r){i_(t,u===void 0?new wR(a,n,e):new AR(a,n,e));break}else{let d=t.map[a];d===void 0&&(d=new CR(a),i_(t,d)),t=d}}}class uu{constructor(e,t){this.seq=[],this.map={};const i=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let r=0;r<i;++r){const s=e.getActiveUniform(t,r),o=e.getUniformLocation(t,s.name);RR(s,o,this)}}setValue(e,t,i,r){const s=this.map[t];s!==void 0&&s.setValue(e,i,r)}setOptional(e,t,i){const r=t[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,t,i,r){for(let s=0,o=t.length;s!==o;++s){const a=t[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,t){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in t&&i.push(o)}return i}}function r_(n,e,t){const i=n.createShader(e);return n.shaderSource(i,t),n.compileShader(i),i}let bR=0;function PR(n,e){const t=n.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${t[o]}`)}return i.join(`
`)}function LR(n){switch(n){case Ei:return["Linear","( value )"];case Fe:return["sRGB","( value )"];default:return console.warn("THREE.WebGLProgram: Unsupported color space:",n),["Linear","( value )"]}}function s_(n,e,t){const i=n.getShaderParameter(e,n.COMPILE_STATUS),r=n.getShaderInfoLog(e).trim();if(i&&r==="")return"";const s=/ERROR: 0:(\d+)/.exec(r);if(s){const o=parseInt(s[1]);return t.toUpperCase()+`

`+r+`

`+PR(n.getShaderSource(e),o)}else return r}function DR(n,e){const t=LR(e);return"vec4 "+n+"( vec4 value ) { return LinearTo"+t[0]+t[1]+"; }"}function UR(n,e){let t;switch(e){case G1:t="Linear";break;case W1:t="Reinhard";break;case j1:t="OptimizedCineon";break;case X1:t="ACESFilmic";break;case Y1:t="Custom";break;default:console.warn("THREE.WebGLProgram: Unsupported toneMapping:",e),t="Linear"}return"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}function NR(n){return[n.extensionDerivatives||n.envMapCubeUVHeight||n.bumpMap||n.normalMapTangentSpace||n.clearcoatNormalMap||n.flatShading||n.shaderID==="physical"?"#extension GL_OES_standard_derivatives : enable":"",(n.extensionFragDepth||n.logarithmicDepthBuffer)&&n.rendererExtensionFragDepth?"#extension GL_EXT_frag_depth : enable":"",n.extensionDrawBuffers&&n.rendererExtensionDrawBuffers?"#extension GL_EXT_draw_buffers : require":"",(n.extensionShaderTextureLOD||n.envMap||n.transmission)&&n.rendererExtensionShaderTextureLod?"#extension GL_EXT_shader_texture_lod : enable":""].filter(la).join(`
`)}function IR(n){const e=[];for(const t in n){const i=n[t];i!==!1&&e.push("#define "+t+" "+i)}return e.join(`
`)}function OR(n,e){const t={},i=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=n.getActiveAttrib(e,r),o=s.name;let a=1;s.type===n.FLOAT_MAT2&&(a=2),s.type===n.FLOAT_MAT3&&(a=3),s.type===n.FLOAT_MAT4&&(a=4),t[o]={type:s.type,location:n.getAttribLocation(e,o),locationSize:a}}return t}function la(n){return n!==""}function o_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function a_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const FR=/^[ \t]*#include +<([\w\d./]+)>/gm;function jd(n){return n.replace(FR,kR)}function kR(n,e){const t=ke[e];if(t===void 0)throw new Error("Can not resolve #include <"+e+">");return jd(t)}const zR=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function l_(n){return n.replace(zR,BR)}function BR(n,e,t,i){let r="";for(let s=parseInt(e);s<parseInt(t);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function u_(n){let e="precision "+n.precision+` float;
precision `+n.precision+" int;";return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}function HR(n){let e="SHADOWMAP_TYPE_BASIC";return n.shadowMapType===rx?e="SHADOWMAP_TYPE_PCF":n.shadowMapType===S1?e="SHADOWMAP_TYPE_PCF_SOFT":n.shadowMapType===Di&&(e="SHADOWMAP_TYPE_VSM"),e}function VR(n){let e="ENVMAP_TYPE_CUBE";if(n.envMap)switch(n.envMapMode){case Ro:case bo:e="ENVMAP_TYPE_CUBE";break;case pc:e="ENVMAP_TYPE_CUBE_UV";break}return e}function GR(n){let e="ENVMAP_MODE_REFLECTION";if(n.envMap)switch(n.envMapMode){case bo:e="ENVMAP_MODE_REFRACTION";break}return e}function WR(n){let e="ENVMAP_BLENDING_NONE";if(n.envMap)switch(n.combine){case ax:e="ENVMAP_BLENDING_MULTIPLY";break;case H1:e="ENVMAP_BLENDING_MIX";break;case V1:e="ENVMAP_BLENDING_ADD";break}return e}function jR(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),7*16)),texelHeight:i,maxMip:t}}function XR(n,e,t,i){const r=n.getContext(),s=t.defines;let o=t.vertexShader,a=t.fragmentShader;const l=HR(t),u=VR(t),c=GR(t),d=WR(t),h=jR(t),p=t.isWebGL2?"":NR(t),v=IR(s),g=r.createProgram();let m,f,_=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(la).join(`
`),m.length>0&&(m+=`
`),f=[p,"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v].filter(la).join(`
`),f.length>0&&(f+=`
`)):(m=[u_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+c:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors&&t.isWebGL2?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE":"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0&&t.isWebGL2?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#if ( defined( USE_MORPHTARGETS ) && ! defined( MORPHTARGETS_TEXTURE ) )","	attribute vec3 morphTarget0;","	attribute vec3 morphTarget1;","	attribute vec3 morphTarget2;","	attribute vec3 morphTarget3;","	#ifdef USE_MORPHNORMALS","		attribute vec3 morphNormal0;","		attribute vec3 morphNormal1;","		attribute vec3 morphNormal2;","		attribute vec3 morphNormal3;","	#else","		attribute vec3 morphTarget4;","		attribute vec3 morphTarget5;","		attribute vec3 morphTarget6;","		attribute vec3 morphTarget7;","	#endif","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(la).join(`
`),f=[p,u_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,v,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+u:"",t.envMap?"#define "+c:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+l:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.useLegacyLights?"#define LEGACY_LIGHTS":"",t.logarithmicDepthBuffer?"#define USE_LOGDEPTHBUF":"",t.logarithmicDepthBuffer&&t.rendererExtensionFragDepth?"#define USE_LOGDEPTHBUF_EXT":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Gi?"#define TONE_MAPPING":"",t.toneMapping!==Gi?ke.tonemapping_pars_fragment:"",t.toneMapping!==Gi?UR("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",ke.encodings_pars_fragment,DR("linearToOutputTexel",t.outputColorSpace),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(la).join(`
`)),o=jd(o),o=o_(o,t),o=a_(o,t),a=jd(a),a=o_(a,t),a=a_(a,t),o=l_(o),a=l_(a),t.isWebGL2&&t.isRawShaderMaterial!==!0&&(_=`#version 300 es
`,m=["precision mediump sampler2DArray;","#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,f=["#define varying in",t.glslVersion===Rg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+f);const x=_+m+o,y=_+f+a,S=r_(r,r.VERTEX_SHADER,x),E=r_(r,r.FRAGMENT_SHADER,y);if(r.attachShader(g,S),r.attachShader(g,E),t.index0AttributeName!==void 0?r.bindAttribLocation(g,0,t.index0AttributeName):t.morphTargets===!0&&r.bindAttribLocation(g,0,"position"),r.linkProgram(g),n.debug.checkShaderErrors){const M=r.getProgramInfoLog(g).trim(),T=r.getShaderInfoLog(S).trim(),U=r.getShaderInfoLog(E).trim();let O=!0,L=!0;if(r.getProgramParameter(g,r.LINK_STATUS)===!1)if(O=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(r,g,S,E);else{const N=s_(r,S,"vertex"),z=s_(r,E,"fragment");console.error("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(g,r.VALIDATE_STATUS)+`

Program Info Log: `+M+`
`+N+`
`+z)}else M!==""?console.warn("THREE.WebGLProgram: Program Info Log:",M):(T===""||U==="")&&(L=!1);L&&(this.diagnostics={runnable:O,programLog:M,vertexShader:{log:T,prefix:m},fragmentShader:{log:U,prefix:f}})}r.deleteShader(S),r.deleteShader(E);let A;this.getUniforms=function(){return A===void 0&&(A=new uu(r,g)),A};let C;return this.getAttributes=function(){return C===void 0&&(C=OR(r,g)),C},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(g),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=bR++,this.cacheKey=e,this.usedTimes=1,this.program=g,this.vertexShader=S,this.fragmentShader=E,this}let YR=0;class qR{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const t=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(t),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const i of t)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let i=t.get(e);return i===void 0&&(i=new Set,t.set(e,i)),i}_getShaderStage(e){const t=this.shaderCache;let i=t.get(e);return i===void 0&&(i=new $R(e),t.set(e,i)),i}}class $R{constructor(e){this.id=YR++,this.code=e,this.usedTimes=0}}function KR(n,e,t,i,r,s,o){const a=new Mx,l=new qR,u=[],c=r.isWebGL2,d=r.logarithmicDepthBuffer,h=r.vertexTextures;let p=r.precision;const v={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distanceRGBA",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(M){return M===0?"uv":`uv${M}`}function m(M,T,U,O,L){const N=O.fog,z=L.geometry,$=M.isMeshStandardMaterial?O.environment:null,W=(M.isMeshStandardMaterial?t:e).get(M.envMap||$),D=W&&W.mapping===pc?W.image.height:null,X=v[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&console.warn("THREE.WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const G=z.morphAttributes.position||z.morphAttributes.normal||z.morphAttributes.color,se=G!==void 0?G.length:0;let F=0;z.morphAttributes.position!==void 0&&(F=1),z.morphAttributes.normal!==void 0&&(F=2),z.morphAttributes.color!==void 0&&(F=3);let ee,K,re,le;if(X){const yt=pi[X];ee=yt.vertexShader,K=yt.fragmentShader}else ee=M.vertexShader,K=M.fragmentShader,l.update(M),re=l.getVertexShaderID(M),le=l.getFragmentShaderID(M);const de=n.getRenderTarget(),Me=L.isInstancedMesh===!0,ye=!!M.map,$e=!!M.matcap,be=!!W,H=!!M.aoMap,De=!!M.lightMap,ue=!!M.bumpMap,we=!!M.normalMap,Ee=!!M.displacementMap,Ke=!!M.emissiveMap,ze=!!M.metalnessMap,Ue=!!M.roughnessMap,qe=M.anisotropy>0,At=M.clearcoat>0,Dt=M.iridescence>0,b=M.sheen>0,w=M.transmission>0,Z=qe&&!!M.anisotropyMap,ae=At&&!!M.clearcoatMap,oe=At&&!!M.clearcoatNormalMap,P=At&&!!M.clearcoatRoughnessMap,te=Dt&&!!M.iridescenceMap,ie=Dt&&!!M.iridescenceThicknessMap,q=b&&!!M.sheenColorMap,xe=b&&!!M.sheenRoughnessMap,Ae=!!M.specularMap,Te=!!M.specularColorMap,Se=!!M.specularIntensityMap,_e=w&&!!M.transmissionMap,Re=w&&!!M.thicknessMap,Ve=!!M.gradientMap,I=!!M.alphaMap,he=M.alphaTest>0,Y=!!M.extensions,ce=!!z.attributes.uv1,me=!!z.attributes.uv2,Ye=!!z.attributes.uv3;return{isWebGL2:c,shaderID:X,shaderType:M.type,shaderName:M.name,vertexShader:ee,fragmentShader:K,defines:M.defines,customVertexShaderID:re,customFragmentShaderID:le,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,instancing:Me,instancingColor:Me&&L.instanceColor!==null,supportsVertexTextures:h,outputColorSpace:de===null?n.outputColorSpace:de.isXRRenderTarget===!0?de.texture.colorSpace:Ei,map:ye,matcap:$e,envMap:be,envMapMode:be&&W.mapping,envMapCubeUVHeight:D,aoMap:H,lightMap:De,bumpMap:ue,normalMap:we,displacementMap:h&&Ee,emissiveMap:Ke,normalMapObjectSpace:we&&M.normalMapType===oT,normalMapTangentSpace:we&&M.normalMapType===gx,metalnessMap:ze,roughnessMap:Ue,anisotropy:qe,anisotropyMap:Z,clearcoat:At,clearcoatMap:ae,clearcoatNormalMap:oe,clearcoatRoughnessMap:P,iridescence:Dt,iridescenceMap:te,iridescenceThicknessMap:ie,sheen:b,sheenColorMap:q,sheenRoughnessMap:xe,specularMap:Ae,specularColorMap:Te,specularIntensityMap:Se,transmission:w,transmissionMap:_e,thicknessMap:Re,gradientMap:Ve,opaque:M.transparent===!1&&M.blending===go,alphaMap:I,alphaTest:he,combine:M.combine,mapUv:ye&&g(M.map.channel),aoMapUv:H&&g(M.aoMap.channel),lightMapUv:De&&g(M.lightMap.channel),bumpMapUv:ue&&g(M.bumpMap.channel),normalMapUv:we&&g(M.normalMap.channel),displacementMapUv:Ee&&g(M.displacementMap.channel),emissiveMapUv:Ke&&g(M.emissiveMap.channel),metalnessMapUv:ze&&g(M.metalnessMap.channel),roughnessMapUv:Ue&&g(M.roughnessMap.channel),anisotropyMapUv:Z&&g(M.anisotropyMap.channel),clearcoatMapUv:ae&&g(M.clearcoatMap.channel),clearcoatNormalMapUv:oe&&g(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:P&&g(M.clearcoatRoughnessMap.channel),iridescenceMapUv:te&&g(M.iridescenceMap.channel),iridescenceThicknessMapUv:ie&&g(M.iridescenceThicknessMap.channel),sheenColorMapUv:q&&g(M.sheenColorMap.channel),sheenRoughnessMapUv:xe&&g(M.sheenRoughnessMap.channel),specularMapUv:Ae&&g(M.specularMap.channel),specularColorMapUv:Te&&g(M.specularColorMap.channel),specularIntensityMapUv:Se&&g(M.specularIntensityMap.channel),transmissionMapUv:_e&&g(M.transmissionMap.channel),thicknessMapUv:Re&&g(M.thicknessMap.channel),alphaMapUv:I&&g(M.alphaMap.channel),vertexTangents:!!z.attributes.tangent&&(we||qe),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!z.attributes.color&&z.attributes.color.itemSize===4,vertexUv1s:ce,vertexUv2s:me,vertexUv3s:Ye,pointsUvs:L.isPoints===!0&&!!z.attributes.uv&&(ye||I),fog:!!N,useFog:M.fog===!0,fogExp2:N&&N.isFogExp2,flatShading:M.flatShading===!0,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:d,skinning:L.isSkinnedMesh===!0,morphTargets:z.morphAttributes.position!==void 0,morphNormals:z.morphAttributes.normal!==void 0,morphColors:z.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:F,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:n.shadowMap.enabled&&U.length>0,shadowMapType:n.shadowMap.type,toneMapping:M.toneMapped?n.toneMapping:Gi,useLegacyLights:n.useLegacyLights,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Fi,flipSided:M.side===hn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionDerivatives:Y&&M.extensions.derivatives===!0,extensionFragDepth:Y&&M.extensions.fragDepth===!0,extensionDrawBuffers:Y&&M.extensions.drawBuffers===!0,extensionShaderTextureLOD:Y&&M.extensions.shaderTextureLOD===!0,rendererExtensionFragDepth:c||i.has("EXT_frag_depth"),rendererExtensionDrawBuffers:c||i.has("WEBGL_draw_buffers"),rendererExtensionShaderTextureLod:c||i.has("EXT_shader_texture_lod"),customProgramCacheKey:M.customProgramCacheKey()}}function f(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const U in M.defines)T.push(U),T.push(M.defines[U]);return M.isRawShaderMaterial===!1&&(_(T,M),x(T,M),T.push(n.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function _(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function x(M,T){a.disableAll(),T.isWebGL2&&a.enable(0),T.supportsVertexTextures&&a.enable(1),T.instancing&&a.enable(2),T.instancingColor&&a.enable(3),T.matcap&&a.enable(4),T.envMap&&a.enable(5),T.normalMapObjectSpace&&a.enable(6),T.normalMapTangentSpace&&a.enable(7),T.clearcoat&&a.enable(8),T.iridescence&&a.enable(9),T.alphaTest&&a.enable(10),T.vertexColors&&a.enable(11),T.vertexAlphas&&a.enable(12),T.vertexUv1s&&a.enable(13),T.vertexUv2s&&a.enable(14),T.vertexUv3s&&a.enable(15),T.vertexTangents&&a.enable(16),T.anisotropy&&a.enable(17),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.skinning&&a.enable(4),T.morphTargets&&a.enable(5),T.morphNormals&&a.enable(6),T.morphColors&&a.enable(7),T.premultipliedAlpha&&a.enable(8),T.shadowMapEnabled&&a.enable(9),T.useLegacyLights&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),M.push(a.mask)}function y(M){const T=v[M.type];let U;if(T){const O=pi[T];U=kT.clone(O.uniforms)}else U=M.uniforms;return U}function S(M,T){let U;for(let O=0,L=u.length;O<L;O++){const N=u[O];if(N.cacheKey===T){U=N,++U.usedTimes;break}}return U===void 0&&(U=new XR(n,T,M,s),u.push(U)),U}function E(M){if(--M.usedTimes===0){const T=u.indexOf(M);u[T]=u[u.length-1],u.pop(),M.destroy()}}function A(M){l.remove(M)}function C(){l.dispose()}return{getParameters:m,getProgramCacheKey:f,getUniforms:y,acquireProgram:S,releaseProgram:E,releaseShaderCache:A,programs:u,dispose:C}}function ZR(){let n=new WeakMap;function e(s){let o=n.get(s);return o===void 0&&(o={},n.set(s,o)),o}function t(s){n.delete(s)}function i(s,o,a){n.get(s)[o]=a}function r(){n=new WeakMap}return{get:e,remove:t,update:i,dispose:r}}function QR(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.z!==e.z?n.z-e.z:n.id-e.id}function c_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function f_(){const n=[];let e=0;const t=[],i=[],r=[];function s(){e=0,t.length=0,i.length=0,r.length=0}function o(d,h,p,v,g,m){let f=n[e];return f===void 0?(f={id:d.id,object:d,geometry:h,material:p,groupOrder:v,renderOrder:d.renderOrder,z:g,group:m},n[e]=f):(f.id=d.id,f.object=d,f.geometry=h,f.material=p,f.groupOrder=v,f.renderOrder=d.renderOrder,f.z=g,f.group=m),e++,f}function a(d,h,p,v,g,m){const f=o(d,h,p,v,g,m);p.transmission>0?i.push(f):p.transparent===!0?r.push(f):t.push(f)}function l(d,h,p,v,g,m){const f=o(d,h,p,v,g,m);p.transmission>0?i.unshift(f):p.transparent===!0?r.unshift(f):t.unshift(f)}function u(d,h){t.length>1&&t.sort(d||QR),i.length>1&&i.sort(h||c_),r.length>1&&r.sort(h||c_)}function c(){for(let d=e,h=n.length;d<h;d++){const p=n[d];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:t,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:c,sort:u}}function JR(){let n=new WeakMap;function e(i,r){const s=n.get(i);let o;return s===void 0?(o=new f_,n.set(i,[o])):r>=s.length?(o=new f_,s.push(o)):o=s[r],o}function t(){n=new WeakMap}return{get:e,dispose:t}}function eb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={direction:new B,color:new Qe};break;case"SpotLight":t={position:new B,direction:new B,color:new Qe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new B,color:new Qe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new B,skyColor:new Qe,groundColor:new Qe};break;case"RectAreaLight":t={color:new Qe,position:new B,halfWidth:new B,halfHeight:new B};break}return n[e.id]=t,t}}}function tb(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"DirectionalLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"SpotLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie};break;case"PointLight":t={shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new Ie,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let nb=0;function ib(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function rb(n,e){const t=new eb,i=tb(),r={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0};for(let c=0;c<9;c++)r.probe.push(new B);const s=new B,o=new wt,a=new wt;function l(c,d){let h=0,p=0,v=0;for(let U=0;U<9;U++)r.probe[U].set(0,0,0);let g=0,m=0,f=0,_=0,x=0,y=0,S=0,E=0,A=0,C=0;c.sort(ib);const M=d===!0?Math.PI:1;for(let U=0,O=c.length;U<O;U++){const L=c[U],N=L.color,z=L.intensity,$=L.distance,W=L.shadow&&L.shadow.map?L.shadow.map.texture:null;if(L.isAmbientLight)h+=N.r*z*M,p+=N.g*z*M,v+=N.b*z*M;else if(L.isLightProbe)for(let D=0;D<9;D++)r.probe[D].addScaledVector(L.sh.coefficients[D],z);else if(L.isDirectionalLight){const D=t.get(L);if(D.color.copy(L.color).multiplyScalar(L.intensity*M),L.castShadow){const X=L.shadow,G=i.get(L);G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,r.directionalShadow[g]=G,r.directionalShadowMap[g]=W,r.directionalShadowMatrix[g]=L.shadow.matrix,y++}r.directional[g]=D,g++}else if(L.isSpotLight){const D=t.get(L);D.position.setFromMatrixPosition(L.matrixWorld),D.color.copy(N).multiplyScalar(z*M),D.distance=$,D.coneCos=Math.cos(L.angle),D.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),D.decay=L.decay,r.spot[f]=D;const X=L.shadow;if(L.map&&(r.spotLightMap[A]=L.map,A++,X.updateMatrices(L),L.castShadow&&C++),r.spotLightMatrix[f]=X.matrix,L.castShadow){const G=i.get(L);G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,r.spotShadow[f]=G,r.spotShadowMap[f]=W,E++}f++}else if(L.isRectAreaLight){const D=t.get(L);D.color.copy(N).multiplyScalar(z),D.halfWidth.set(L.width*.5,0,0),D.halfHeight.set(0,L.height*.5,0),r.rectArea[_]=D,_++}else if(L.isPointLight){const D=t.get(L);if(D.color.copy(L.color).multiplyScalar(L.intensity*M),D.distance=L.distance,D.decay=L.decay,L.castShadow){const X=L.shadow,G=i.get(L);G.shadowBias=X.bias,G.shadowNormalBias=X.normalBias,G.shadowRadius=X.radius,G.shadowMapSize=X.mapSize,G.shadowCameraNear=X.camera.near,G.shadowCameraFar=X.camera.far,r.pointShadow[m]=G,r.pointShadowMap[m]=W,r.pointShadowMatrix[m]=L.shadow.matrix,S++}r.point[m]=D,m++}else if(L.isHemisphereLight){const D=t.get(L);D.skyColor.copy(L.color).multiplyScalar(z*M),D.groundColor.copy(L.groundColor).multiplyScalar(z*M),r.hemi[x]=D,x++}}_>0&&(e.isWebGL2||n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_FLOAT_1,r.rectAreaLTC2=fe.LTC_FLOAT_2):n.has("OES_texture_half_float_linear")===!0?(r.rectAreaLTC1=fe.LTC_HALF_1,r.rectAreaLTC2=fe.LTC_HALF_2):console.error("THREE.WebGLRenderer: Unable to use RectAreaLight. Missing WebGL extensions.")),r.ambient[0]=h,r.ambient[1]=p,r.ambient[2]=v;const T=r.hash;(T.directionalLength!==g||T.pointLength!==m||T.spotLength!==f||T.rectAreaLength!==_||T.hemiLength!==x||T.numDirectionalShadows!==y||T.numPointShadows!==S||T.numSpotShadows!==E||T.numSpotMaps!==A)&&(r.directional.length=g,r.spot.length=f,r.rectArea.length=_,r.point.length=m,r.hemi.length=x,r.directionalShadow.length=y,r.directionalShadowMap.length=y,r.pointShadow.length=S,r.pointShadowMap.length=S,r.spotShadow.length=E,r.spotShadowMap.length=E,r.directionalShadowMatrix.length=y,r.pointShadowMatrix.length=S,r.spotLightMatrix.length=E+A-C,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=C,T.directionalLength=g,T.pointLength=m,T.spotLength=f,T.rectAreaLength=_,T.hemiLength=x,T.numDirectionalShadows=y,T.numPointShadows=S,T.numSpotShadows=E,T.numSpotMaps=A,r.version=nb++)}function u(c,d){let h=0,p=0,v=0,g=0,m=0;const f=d.matrixWorldInverse;for(let _=0,x=c.length;_<x;_++){const y=c[_];if(y.isDirectionalLight){const S=r.directional[h];S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),h++}else if(y.isSpotLight){const S=r.spot[v];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(f),S.direction.setFromMatrixPosition(y.matrixWorld),s.setFromMatrixPosition(y.target.matrixWorld),S.direction.sub(s),S.direction.transformDirection(f),v++}else if(y.isRectAreaLight){const S=r.rectArea[g];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(f),a.identity(),o.copy(y.matrixWorld),o.premultiply(f),a.extractRotation(o),S.halfWidth.set(y.width*.5,0,0),S.halfHeight.set(0,y.height*.5,0),S.halfWidth.applyMatrix4(a),S.halfHeight.applyMatrix4(a),g++}else if(y.isPointLight){const S=r.point[p];S.position.setFromMatrixPosition(y.matrixWorld),S.position.applyMatrix4(f),p++}else if(y.isHemisphereLight){const S=r.hemi[m];S.direction.setFromMatrixPosition(y.matrixWorld),S.direction.transformDirection(f),m++}}}return{setup:l,setupView:u,state:r}}function d_(n,e){const t=new rb(n,e),i=[],r=[];function s(){i.length=0,r.length=0}function o(d){i.push(d)}function a(d){r.push(d)}function l(d){t.setup(i,d)}function u(d){t.setupView(i,d)}return{init:s,state:{lightsArray:i,shadowsArray:r,lights:t},setupLights:l,setupLightsView:u,pushLight:o,pushShadow:a}}function sb(n,e){let t=new WeakMap;function i(s,o=0){const a=t.get(s);let l;return a===void 0?(l=new d_(n,e),t.set(s,[l])):o>=a.length?(l=new d_(n,e),a.push(l)):l=a[o],l}function r(){t=new WeakMap}return{get:i,dispose:r}}class ob extends sl{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=rT,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class ab extends sl{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const lb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ub=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
#include <packing>
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = unpackRGBATo2Half( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ) );
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = unpackRGBAToDepth( texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ) );
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( squared_mean - mean * mean );
	gl_FragColor = pack2HalfToRGBA( vec2( mean, std_dev ) );
}`;function cb(n,e,t){let i=new lp;const r=new Ie,s=new Ie,o=new ot,a=new ob({depthPacking:sT}),l=new ab,u={},c=t.maxTextureSize,d={[br]:hn,[hn]:br,[Fi]:Fi},h=new ys({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new Ie},radius:{value:4}},vertexShader:lb,fragmentShader:ub}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const v=new Ir;v.setAttribute("position",new yi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const g=new Hi(v,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=rx;let f=this.type;this.render=function(S,E,A){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;const C=n.getRenderTarget(),M=n.getActiveCubeFace(),T=n.getActiveMipmapLevel(),U=n.state;U.setBlending(Mr),U.buffers.color.setClear(1,1,1,1),U.buffers.depth.setTest(!0),U.setScissorTest(!1);const O=f!==Di&&this.type===Di,L=f===Di&&this.type!==Di;for(let N=0,z=S.length;N<z;N++){const $=S[N],W=$.shadow;if(W===void 0){console.warn("THREE.WebGLShadowMap:",$,"has no shadow.");continue}if(W.autoUpdate===!1&&W.needsUpdate===!1)continue;r.copy(W.mapSize);const D=W.getFrameExtents();if(r.multiply(D),s.copy(W.mapSize),(r.x>c||r.y>c)&&(r.x>c&&(s.x=Math.floor(c/D.x),r.x=s.x*D.x,W.mapSize.x=s.x),r.y>c&&(s.y=Math.floor(c/D.y),r.y=s.y*D.y,W.mapSize.y=s.y)),W.map===null||O===!0||L===!0){const G=this.type!==Di?{minFilter:tn,magFilter:tn}:{};W.map!==null&&W.map.dispose(),W.map=new vs(r.x,r.y,G),W.map.texture.name=$.name+".shadowMap",W.camera.updateProjectionMatrix()}n.setRenderTarget(W.map),n.clear();const X=W.getViewportCount();for(let G=0;G<X;G++){const se=W.getViewport(G);o.set(s.x*se.x,s.y*se.y,s.x*se.z,s.y*se.w),U.viewport(o),W.updateMatrices($,G),i=W.getFrustum(),y(E,A,W.camera,$,this.type)}W.isPointLightShadow!==!0&&this.type===Di&&_(W,A),W.needsUpdate=!1}f=this.type,m.needsUpdate=!1,n.setRenderTarget(C,M,T)};function _(S,E){const A=e.update(g);h.defines.VSM_SAMPLES!==S.blurSamples&&(h.defines.VSM_SAMPLES=S.blurSamples,p.defines.VSM_SAMPLES=S.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),S.mapPass===null&&(S.mapPass=new vs(r.x,r.y)),h.uniforms.shadow_pass.value=S.map.texture,h.uniforms.resolution.value=S.mapSize,h.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(E,null,A,h,g,null),p.uniforms.shadow_pass.value=S.mapPass.texture,p.uniforms.resolution.value=S.mapSize,p.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(E,null,A,p,g,null)}function x(S,E,A,C){let M=null;const T=A.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(T!==void 0)M=T;else if(M=A.isPointLight===!0?l:a,n.localClippingEnabled&&E.clipShadows===!0&&Array.isArray(E.clippingPlanes)&&E.clippingPlanes.length!==0||E.displacementMap&&E.displacementScale!==0||E.alphaMap&&E.alphaTest>0||E.map&&E.alphaTest>0){const U=M.uuid,O=E.uuid;let L=u[U];L===void 0&&(L={},u[U]=L);let N=L[O];N===void 0&&(N=M.clone(),L[O]=N),M=N}if(M.visible=E.visible,M.wireframe=E.wireframe,C===Di?M.side=E.shadowSide!==null?E.shadowSide:E.side:M.side=E.shadowSide!==null?E.shadowSide:d[E.side],M.alphaMap=E.alphaMap,M.alphaTest=E.alphaTest,M.map=E.map,M.clipShadows=E.clipShadows,M.clippingPlanes=E.clippingPlanes,M.clipIntersection=E.clipIntersection,M.displacementMap=E.displacementMap,M.displacementScale=E.displacementScale,M.displacementBias=E.displacementBias,M.wireframeLinewidth=E.wireframeLinewidth,M.linewidth=E.linewidth,A.isPointLight===!0&&M.isMeshDistanceMaterial===!0){const U=n.properties.get(M);U.light=A}return M}function y(S,E,A,C,M){if(S.visible===!1)return;if(S.layers.test(E.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&M===Di)&&(!S.frustumCulled||i.intersectsObject(S))){S.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,S.matrixWorld);const O=e.update(S),L=S.material;if(Array.isArray(L)){const N=O.groups;for(let z=0,$=N.length;z<$;z++){const W=N[z],D=L[W.materialIndex];if(D&&D.visible){const X=x(S,D,C,M);n.renderBufferDirect(A,null,O,X,S,W)}}}else if(L.visible){const N=x(S,L,C,M);n.renderBufferDirect(A,null,O,N,S,null)}}const U=S.children;for(let O=0,L=U.length;O<L;O++)y(U[O],E,A,C,M)}}function fb(n,e,t){const i=t.isWebGL2;function r(){let I=!1;const he=new ot;let Y=null;const ce=new ot(0,0,0,0);return{setMask:function(me){Y!==me&&!I&&(n.colorMask(me,me,me,me),Y=me)},setLocked:function(me){I=me},setClear:function(me,Ye,dt,yt,Fr){Fr===!0&&(me*=yt,Ye*=yt,dt*=yt),he.set(me,Ye,dt,yt),ce.equals(he)===!1&&(n.clearColor(me,Ye,dt,yt),ce.copy(he))},reset:function(){I=!1,Y=null,ce.set(-1,0,0,0)}}}function s(){let I=!1,he=null,Y=null,ce=null;return{setTest:function(me){me?de(n.DEPTH_TEST):Me(n.DEPTH_TEST)},setMask:function(me){he!==me&&!I&&(n.depthMask(me),he=me)},setFunc:function(me){if(Y!==me){switch(me){case N1:n.depthFunc(n.NEVER);break;case I1:n.depthFunc(n.ALWAYS);break;case O1:n.depthFunc(n.LESS);break;case Fd:n.depthFunc(n.LEQUAL);break;case F1:n.depthFunc(n.EQUAL);break;case k1:n.depthFunc(n.GEQUAL);break;case z1:n.depthFunc(n.GREATER);break;case B1:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Y=me}},setLocked:function(me){I=me},setClear:function(me){ce!==me&&(n.clearDepth(me),ce=me)},reset:function(){I=!1,he=null,Y=null,ce=null}}}function o(){let I=!1,he=null,Y=null,ce=null,me=null,Ye=null,dt=null,yt=null,Fr=null;return{setTest:function(ht){I||(ht?de(n.STENCIL_TEST):Me(n.STENCIL_TEST))},setMask:function(ht){he!==ht&&!I&&(n.stencilMask(ht),he=ht)},setFunc:function(ht,fi,Zt){(Y!==ht||ce!==fi||me!==Zt)&&(n.stencilFunc(ht,fi,Zt),Y=ht,ce=fi,me=Zt)},setOp:function(ht,fi,Zt){(Ye!==ht||dt!==fi||yt!==Zt)&&(n.stencilOp(ht,fi,Zt),Ye=ht,dt=fi,yt=Zt)},setLocked:function(ht){I=ht},setClear:function(ht){Fr!==ht&&(n.clearStencil(ht),Fr=ht)},reset:function(){I=!1,he=null,Y=null,ce=null,me=null,Ye=null,dt=null,yt=null,Fr=null}}}const a=new r,l=new s,u=new o,c=new WeakMap,d=new WeakMap;let h={},p={},v=new WeakMap,g=[],m=null,f=!1,_=null,x=null,y=null,S=null,E=null,A=null,C=null,M=!1,T=null,U=null,O=null,L=null,N=null;const z=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let $=!1,W=0;const D=n.getParameter(n.VERSION);D.indexOf("WebGL")!==-1?(W=parseFloat(/^WebGL (\d)/.exec(D)[1]),$=W>=1):D.indexOf("OpenGL ES")!==-1&&(W=parseFloat(/^OpenGL ES (\d)/.exec(D)[1]),$=W>=2);let X=null,G={};const se=n.getParameter(n.SCISSOR_BOX),F=n.getParameter(n.VIEWPORT),ee=new ot().fromArray(se),K=new ot().fromArray(F);function re(I,he,Y,ce){const me=new Uint8Array(4),Ye=n.createTexture();n.bindTexture(I,Ye),n.texParameteri(I,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(I,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let dt=0;dt<Y;dt++)i&&(I===n.TEXTURE_3D||I===n.TEXTURE_2D_ARRAY)?n.texImage3D(he,0,n.RGBA,1,1,ce,0,n.RGBA,n.UNSIGNED_BYTE,me):n.texImage2D(he+dt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,me);return Ye}const le={};le[n.TEXTURE_2D]=re(n.TEXTURE_2D,n.TEXTURE_2D,1),le[n.TEXTURE_CUBE_MAP]=re(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),i&&(le[n.TEXTURE_2D_ARRAY]=re(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),le[n.TEXTURE_3D]=re(n.TEXTURE_3D,n.TEXTURE_3D,1,1)),a.setClear(0,0,0,1),l.setClear(1),u.setClear(0),de(n.DEPTH_TEST),l.setFunc(Fd),Ee(!1),Ke(Zm),de(n.CULL_FACE),ue(Mr);function de(I){h[I]!==!0&&(n.enable(I),h[I]=!0)}function Me(I){h[I]!==!1&&(n.disable(I),h[I]=!1)}function ye(I,he){return p[I]!==he?(n.bindFramebuffer(I,he),p[I]=he,i&&(I===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=he),I===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=he)),!0):!1}function $e(I,he){let Y=g,ce=!1;if(I)if(Y=v.get(he),Y===void 0&&(Y=[],v.set(he,Y)),I.isWebGLMultipleRenderTargets){const me=I.texture;if(Y.length!==me.length||Y[0]!==n.COLOR_ATTACHMENT0){for(let Ye=0,dt=me.length;Ye<dt;Ye++)Y[Ye]=n.COLOR_ATTACHMENT0+Ye;Y.length=me.length,ce=!0}}else Y[0]!==n.COLOR_ATTACHMENT0&&(Y[0]=n.COLOR_ATTACHMENT0,ce=!0);else Y[0]!==n.BACK&&(Y[0]=n.BACK,ce=!0);ce&&(t.isWebGL2?n.drawBuffers(Y):e.get("WEBGL_draw_buffers").drawBuffersWEBGL(Y))}function be(I){return m!==I?(n.useProgram(I),m=I,!0):!1}const H={[Xs]:n.FUNC_ADD,[E1]:n.FUNC_SUBTRACT,[T1]:n.FUNC_REVERSE_SUBTRACT};if(i)H[tg]=n.MIN,H[ng]=n.MAX;else{const I=e.get("EXT_blend_minmax");I!==null&&(H[tg]=I.MIN_EXT,H[ng]=I.MAX_EXT)}const De={[w1]:n.ZERO,[A1]:n.ONE,[C1]:n.SRC_COLOR,[sx]:n.SRC_ALPHA,[U1]:n.SRC_ALPHA_SATURATE,[L1]:n.DST_COLOR,[b1]:n.DST_ALPHA,[R1]:n.ONE_MINUS_SRC_COLOR,[ox]:n.ONE_MINUS_SRC_ALPHA,[D1]:n.ONE_MINUS_DST_COLOR,[P1]:n.ONE_MINUS_DST_ALPHA};function ue(I,he,Y,ce,me,Ye,dt,yt){if(I===Mr){f===!0&&(Me(n.BLEND),f=!1);return}if(f===!1&&(de(n.BLEND),f=!0),I!==M1){if(I!==_||yt!==M){if((x!==Xs||E!==Xs)&&(n.blendEquation(n.FUNC_ADD),x=Xs,E=Xs),yt)switch(I){case go:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qm:n.blendFunc(n.ONE,n.ONE);break;case Jm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case eg:n.blendFuncSeparate(n.ZERO,n.SRC_COLOR,n.ZERO,n.SRC_ALPHA);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}else switch(I){case go:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Qm:n.blendFunc(n.SRC_ALPHA,n.ONE);break;case Jm:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case eg:n.blendFunc(n.ZERO,n.SRC_COLOR);break;default:console.error("THREE.WebGLState: Invalid blending: ",I);break}y=null,S=null,A=null,C=null,_=I,M=yt}return}me=me||he,Ye=Ye||Y,dt=dt||ce,(he!==x||me!==E)&&(n.blendEquationSeparate(H[he],H[me]),x=he,E=me),(Y!==y||ce!==S||Ye!==A||dt!==C)&&(n.blendFuncSeparate(De[Y],De[ce],De[Ye],De[dt]),y=Y,S=ce,A=Ye,C=dt),_=I,M=!1}function we(I,he){I.side===Fi?Me(n.CULL_FACE):de(n.CULL_FACE);let Y=I.side===hn;he&&(Y=!Y),Ee(Y),I.blending===go&&I.transparent===!1?ue(Mr):ue(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.premultipliedAlpha),l.setFunc(I.depthFunc),l.setTest(I.depthTest),l.setMask(I.depthWrite),a.setMask(I.colorWrite);const ce=I.stencilWrite;u.setTest(ce),ce&&(u.setMask(I.stencilWriteMask),u.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),u.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),Ue(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?de(n.SAMPLE_ALPHA_TO_COVERAGE):Me(n.SAMPLE_ALPHA_TO_COVERAGE)}function Ee(I){T!==I&&(I?n.frontFace(n.CW):n.frontFace(n.CCW),T=I)}function Ke(I){I!==x1?(de(n.CULL_FACE),I!==U&&(I===Zm?n.cullFace(n.BACK):I===y1?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Me(n.CULL_FACE),U=I}function ze(I){I!==O&&($&&n.lineWidth(I),O=I)}function Ue(I,he,Y){I?(de(n.POLYGON_OFFSET_FILL),(L!==he||N!==Y)&&(n.polygonOffset(he,Y),L=he,N=Y)):Me(n.POLYGON_OFFSET_FILL)}function qe(I){I?de(n.SCISSOR_TEST):Me(n.SCISSOR_TEST)}function At(I){I===void 0&&(I=n.TEXTURE0+z-1),X!==I&&(n.activeTexture(I),X=I)}function Dt(I,he,Y){Y===void 0&&(X===null?Y=n.TEXTURE0+z-1:Y=X);let ce=G[Y];ce===void 0&&(ce={type:void 0,texture:void 0},G[Y]=ce),(ce.type!==I||ce.texture!==he)&&(X!==Y&&(n.activeTexture(Y),X=Y),n.bindTexture(I,he||le[I]),ce.type=I,ce.texture=he)}function b(){const I=G[X];I!==void 0&&I.type!==void 0&&(n.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function w(){try{n.compressedTexImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Z(){try{n.compressedTexImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ae(){try{n.texSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function oe(){try{n.texSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function P(){try{n.compressedTexSubImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function te(){try{n.compressedTexSubImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function ie(){try{n.texStorage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function q(){try{n.texStorage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function xe(){try{n.texImage2D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Ae(){try{n.texImage3D.apply(n,arguments)}catch(I){console.error("THREE.WebGLState:",I)}}function Te(I){ee.equals(I)===!1&&(n.scissor(I.x,I.y,I.z,I.w),ee.copy(I))}function Se(I){K.equals(I)===!1&&(n.viewport(I.x,I.y,I.z,I.w),K.copy(I))}function _e(I,he){let Y=d.get(he);Y===void 0&&(Y=new WeakMap,d.set(he,Y));let ce=Y.get(I);ce===void 0&&(ce=n.getUniformBlockIndex(he,I.name),Y.set(I,ce))}function Re(I,he){const ce=d.get(he).get(I);c.get(he)!==ce&&(n.uniformBlockBinding(he,ce,I.__bindingPointIndex),c.set(he,ce))}function Ve(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),i===!0&&(n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null)),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),h={},X=null,G={},p={},v=new WeakMap,g=[],m=null,f=!1,_=null,x=null,y=null,S=null,E=null,A=null,C=null,M=!1,T=null,U=null,O=null,L=null,N=null,ee.set(0,0,n.canvas.width,n.canvas.height),K.set(0,0,n.canvas.width,n.canvas.height),a.reset(),l.reset(),u.reset()}return{buffers:{color:a,depth:l,stencil:u},enable:de,disable:Me,bindFramebuffer:ye,drawBuffers:$e,useProgram:be,setBlending:ue,setMaterial:we,setFlipSided:Ee,setCullFace:Ke,setLineWidth:ze,setPolygonOffset:Ue,setScissorTest:qe,activeTexture:At,bindTexture:Dt,unbindTexture:b,compressedTexImage2D:w,compressedTexImage3D:Z,texImage2D:xe,texImage3D:Ae,updateUBOMapping:_e,uniformBlockBinding:Re,texStorage2D:ie,texStorage3D:q,texSubImage2D:ae,texSubImage3D:oe,compressedTexSubImage2D:P,compressedTexSubImage3D:te,scissor:Te,viewport:Se,reset:Ve}}function db(n,e,t,i,r,s,o){const a=r.isWebGL2,l=r.maxTextures,u=r.maxCubemapSize,c=r.maxTextureSize,d=r.maxSamples,h=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,p=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),v=new WeakMap;let g;const m=new WeakMap;let f=!1;try{f=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(b,w){return f?new OffscreenCanvas(b,w):zu("canvas")}function x(b,w,Z,ae){let oe=1;if((b.width>ae||b.height>ae)&&(oe=ae/Math.max(b.width,b.height)),oe<1||w===!0)if(typeof HTMLImageElement<"u"&&b instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&b instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&b instanceof ImageBitmap){const P=w?Wd:Math.floor,te=P(oe*b.width),ie=P(oe*b.height);g===void 0&&(g=_(te,ie));const q=Z?_(te,ie):g;return q.width=te,q.height=ie,q.getContext("2d").drawImage(b,0,0,te,ie),console.warn("THREE.WebGLRenderer: Texture has been resized from ("+b.width+"x"+b.height+") to ("+te+"x"+ie+")."),q}else return"data"in b&&console.warn("THREE.WebGLRenderer: Image in DataTexture is too big ("+b.width+"x"+b.height+")."),b;return b}function y(b){return bg(b.width)&&bg(b.height)}function S(b){return a?!1:b.wrapS!==si||b.wrapT!==si||b.minFilter!==tn&&b.minFilter!==Bn}function E(b,w){return b.generateMipmaps&&w&&b.minFilter!==tn&&b.minFilter!==Bn}function A(b){n.generateMipmap(b)}function C(b,w,Z,ae,oe=!1){if(a===!1)return w;if(b!==null){if(n[b]!==void 0)return n[b];console.warn("THREE.WebGLRenderer: Attempt to use non-existing WebGL internal format '"+b+"'")}let P=w;return w===n.RED&&(Z===n.FLOAT&&(P=n.R32F),Z===n.HALF_FLOAT&&(P=n.R16F),Z===n.UNSIGNED_BYTE&&(P=n.R8)),w===n.RG&&(Z===n.FLOAT&&(P=n.RG32F),Z===n.HALF_FLOAT&&(P=n.RG16F),Z===n.UNSIGNED_BYTE&&(P=n.RG8)),w===n.RGBA&&(Z===n.FLOAT&&(P=n.RGBA32F),Z===n.HALF_FLOAT&&(P=n.RGBA16F),Z===n.UNSIGNED_BYTE&&(P=ae===Fe&&oe===!1?n.SRGB8_ALPHA8:n.RGBA8),Z===n.UNSIGNED_SHORT_4_4_4_4&&(P=n.RGBA4),Z===n.UNSIGNED_SHORT_5_5_5_1&&(P=n.RGB5_A1)),(P===n.R16F||P===n.R32F||P===n.RG16F||P===n.RG32F||P===n.RGBA16F||P===n.RGBA32F)&&e.get("EXT_color_buffer_float"),P}function M(b,w,Z){return E(b,Z)===!0||b.isFramebufferTexture&&b.minFilter!==tn&&b.minFilter!==Bn?Math.log2(Math.max(w.width,w.height))+1:b.mipmaps!==void 0&&b.mipmaps.length>0?b.mipmaps.length:b.isCompressedTexture&&Array.isArray(b.image)?w.mipmaps.length:1}function T(b){return b===tn||b===ig||b===Zc?n.NEAREST:n.LINEAR}function U(b){const w=b.target;w.removeEventListener("dispose",U),L(w),w.isVideoTexture&&v.delete(w)}function O(b){const w=b.target;w.removeEventListener("dispose",O),z(w)}function L(b){const w=i.get(b);if(w.__webglInit===void 0)return;const Z=b.source,ae=m.get(Z);if(ae){const oe=ae[w.__cacheKey];oe.usedTimes--,oe.usedTimes===0&&N(b),Object.keys(ae).length===0&&m.delete(Z)}i.remove(b)}function N(b){const w=i.get(b);n.deleteTexture(w.__webglTexture);const Z=b.source,ae=m.get(Z);delete ae[w.__cacheKey],o.memory.textures--}function z(b){const w=b.texture,Z=i.get(b),ae=i.get(w);if(ae.__webglTexture!==void 0&&(n.deleteTexture(ae.__webglTexture),o.memory.textures--),b.depthTexture&&b.depthTexture.dispose(),b.isWebGLCubeRenderTarget)for(let oe=0;oe<6;oe++)n.deleteFramebuffer(Z.__webglFramebuffer[oe]),Z.__webglDepthbuffer&&n.deleteRenderbuffer(Z.__webglDepthbuffer[oe]);else{if(n.deleteFramebuffer(Z.__webglFramebuffer),Z.__webglDepthbuffer&&n.deleteRenderbuffer(Z.__webglDepthbuffer),Z.__webglMultisampledFramebuffer&&n.deleteFramebuffer(Z.__webglMultisampledFramebuffer),Z.__webglColorRenderbuffer)for(let oe=0;oe<Z.__webglColorRenderbuffer.length;oe++)Z.__webglColorRenderbuffer[oe]&&n.deleteRenderbuffer(Z.__webglColorRenderbuffer[oe]);Z.__webglDepthRenderbuffer&&n.deleteRenderbuffer(Z.__webglDepthRenderbuffer)}if(b.isWebGLMultipleRenderTargets)for(let oe=0,P=w.length;oe<P;oe++){const te=i.get(w[oe]);te.__webglTexture&&(n.deleteTexture(te.__webglTexture),o.memory.textures--),i.remove(w[oe])}i.remove(w),i.remove(b)}let $=0;function W(){$=0}function D(){const b=$;return b>=l&&console.warn("THREE.WebGLTextures: Trying to use "+b+" texture units while this GPU supports only "+l),$+=1,b}function X(b){const w=[];return w.push(b.wrapS),w.push(b.wrapT),w.push(b.wrapR||0),w.push(b.magFilter),w.push(b.minFilter),w.push(b.anisotropy),w.push(b.internalFormat),w.push(b.format),w.push(b.type),w.push(b.generateMipmaps),w.push(b.premultiplyAlpha),w.push(b.flipY),w.push(b.unpackAlignment),w.push(b.colorSpace),w.join()}function G(b,w){const Z=i.get(b);if(b.isVideoTexture&&At(b),b.isRenderTargetTexture===!1&&b.version>0&&Z.__version!==b.version){const ae=b.image;if(ae===null)console.warn("THREE.WebGLRenderer: Texture marked for update but no image data found.");else if(ae.complete===!1)console.warn("THREE.WebGLRenderer: Texture marked for update but image is incomplete");else{ye(Z,b,w);return}}t.bindTexture(n.TEXTURE_2D,Z.__webglTexture,n.TEXTURE0+w)}function se(b,w){const Z=i.get(b);if(b.version>0&&Z.__version!==b.version){ye(Z,b,w);return}t.bindTexture(n.TEXTURE_2D_ARRAY,Z.__webglTexture,n.TEXTURE0+w)}function F(b,w){const Z=i.get(b);if(b.version>0&&Z.__version!==b.version){ye(Z,b,w);return}t.bindTexture(n.TEXTURE_3D,Z.__webglTexture,n.TEXTURE0+w)}function ee(b,w){const Z=i.get(b);if(b.version>0&&Z.__version!==b.version){$e(Z,b,w);return}t.bindTexture(n.TEXTURE_CUBE_MAP,Z.__webglTexture,n.TEXTURE0+w)}const K={[Bd]:n.REPEAT,[si]:n.CLAMP_TO_EDGE,[Hd]:n.MIRRORED_REPEAT},re={[tn]:n.NEAREST,[ig]:n.NEAREST_MIPMAP_NEAREST,[Zc]:n.NEAREST_MIPMAP_LINEAR,[Bn]:n.LINEAR,[q1]:n.LINEAR_MIPMAP_NEAREST,[Ga]:n.LINEAR_MIPMAP_LINEAR},le={[lT]:n.NEVER,[mT]:n.ALWAYS,[uT]:n.LESS,[fT]:n.LEQUAL,[cT]:n.EQUAL,[pT]:n.GEQUAL,[dT]:n.GREATER,[hT]:n.NOTEQUAL};function de(b,w,Z){if(Z?(n.texParameteri(b,n.TEXTURE_WRAP_S,K[w.wrapS]),n.texParameteri(b,n.TEXTURE_WRAP_T,K[w.wrapT]),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,K[w.wrapR]),n.texParameteri(b,n.TEXTURE_MAG_FILTER,re[w.magFilter]),n.texParameteri(b,n.TEXTURE_MIN_FILTER,re[w.minFilter])):(n.texParameteri(b,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(b,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE),(b===n.TEXTURE_3D||b===n.TEXTURE_2D_ARRAY)&&n.texParameteri(b,n.TEXTURE_WRAP_R,n.CLAMP_TO_EDGE),(w.wrapS!==si||w.wrapT!==si)&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.wrapS and Texture.wrapT should be set to THREE.ClampToEdgeWrapping."),n.texParameteri(b,n.TEXTURE_MAG_FILTER,T(w.magFilter)),n.texParameteri(b,n.TEXTURE_MIN_FILTER,T(w.minFilter)),w.minFilter!==tn&&w.minFilter!==Bn&&console.warn("THREE.WebGLRenderer: Texture is not power of two. Texture.minFilter should be set to THREE.NearestFilter or THREE.LinearFilter.")),w.compareFunction&&(n.texParameteri(b,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(b,n.TEXTURE_COMPARE_FUNC,le[w.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){const ae=e.get("EXT_texture_filter_anisotropic");if(w.magFilter===tn||w.minFilter!==Zc&&w.minFilter!==Ga||w.type===cr&&e.has("OES_texture_float_linear")===!1||a===!1&&w.type===Wa&&e.has("OES_texture_half_float_linear")===!1)return;(w.anisotropy>1||i.get(w).__currentAnisotropy)&&(n.texParameterf(b,ae.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(w.anisotropy,r.getMaxAnisotropy())),i.get(w).__currentAnisotropy=w.anisotropy)}}function Me(b,w){let Z=!1;b.__webglInit===void 0&&(b.__webglInit=!0,w.addEventListener("dispose",U));const ae=w.source;let oe=m.get(ae);oe===void 0&&(oe={},m.set(ae,oe));const P=X(w);if(P!==b.__cacheKey){oe[P]===void 0&&(oe[P]={texture:n.createTexture(),usedTimes:0},o.memory.textures++,Z=!0),oe[P].usedTimes++;const te=oe[b.__cacheKey];te!==void 0&&(oe[b.__cacheKey].usedTimes--,te.usedTimes===0&&N(w)),b.__cacheKey=P,b.__webglTexture=oe[P].texture}return Z}function ye(b,w,Z){let ae=n.TEXTURE_2D;(w.isDataArrayTexture||w.isCompressedArrayTexture)&&(ae=n.TEXTURE_2D_ARRAY),w.isData3DTexture&&(ae=n.TEXTURE_3D);const oe=Me(b,w),P=w.source;t.bindTexture(ae,b.__webglTexture,n.TEXTURE0+Z);const te=i.get(P);if(P.version!==te.__version||oe===!0){t.activeTexture(n.TEXTURE0+Z),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const ie=S(w)&&y(w.image)===!1;let q=x(w.image,ie,!1,c);q=Dt(w,q);const xe=y(q)||a,Ae=s.convert(w.format,w.colorSpace);let Te=s.convert(w.type),Se=C(w.internalFormat,Ae,Te,w.colorSpace);de(ae,w,xe);let _e;const Re=w.mipmaps,Ve=a&&w.isVideoTexture!==!0,I=te.__version===void 0||oe===!0,he=M(w,q,xe);if(w.isDepthTexture)Se=n.DEPTH_COMPONENT,a?w.type===cr?Se=n.DEPTH_COMPONENT32F:w.type===ur?Se=n.DEPTH_COMPONENT24:w.type===ss?Se=n.DEPTH24_STENCIL8:Se=n.DEPTH_COMPONENT16:w.type===cr&&console.error("WebGLRenderer: Floating point depth texture requires WebGL2."),w.format===os&&Se===n.DEPTH_COMPONENT&&w.type!==op&&w.type!==ur&&(console.warn("THREE.WebGLRenderer: Use UnsignedShortType or UnsignedIntType for DepthFormat DepthTexture."),w.type=ur,Te=s.convert(w.type)),w.format===Po&&Se===n.DEPTH_COMPONENT&&(Se=n.DEPTH_STENCIL,w.type!==ss&&(console.warn("THREE.WebGLRenderer: Use UnsignedInt248Type for DepthStencilFormat DepthTexture."),w.type=ss,Te=s.convert(w.type))),I&&(Ve?t.texStorage2D(n.TEXTURE_2D,1,Se,q.width,q.height):t.texImage2D(n.TEXTURE_2D,0,Se,q.width,q.height,0,Ae,Te,null));else if(w.isDataTexture)if(Re.length>0&&xe){Ve&&I&&t.texStorage2D(n.TEXTURE_2D,he,Se,Re[0].width,Re[0].height);for(let Y=0,ce=Re.length;Y<ce;Y++)_e=Re[Y],Ve?t.texSubImage2D(n.TEXTURE_2D,Y,0,0,_e.width,_e.height,Ae,Te,_e.data):t.texImage2D(n.TEXTURE_2D,Y,Se,_e.width,_e.height,0,Ae,Te,_e.data);w.generateMipmaps=!1}else Ve?(I&&t.texStorage2D(n.TEXTURE_2D,he,Se,q.width,q.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,q.width,q.height,Ae,Te,q.data)):t.texImage2D(n.TEXTURE_2D,0,Se,q.width,q.height,0,Ae,Te,q.data);else if(w.isCompressedTexture)if(w.isCompressedArrayTexture){Ve&&I&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Se,Re[0].width,Re[0].height,q.depth);for(let Y=0,ce=Re.length;Y<ce;Y++)_e=Re[Y],w.format!==oi?Ae!==null?Ve?t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,_e.width,_e.height,q.depth,Ae,_e.data,0,0):t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,Y,Se,_e.width,_e.height,q.depth,0,_e.data,0,0):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage3D(n.TEXTURE_2D_ARRAY,Y,0,0,0,_e.width,_e.height,q.depth,Ae,Te,_e.data):t.texImage3D(n.TEXTURE_2D_ARRAY,Y,Se,_e.width,_e.height,q.depth,0,Ae,Te,_e.data)}else{Ve&&I&&t.texStorage2D(n.TEXTURE_2D,he,Se,Re[0].width,Re[0].height);for(let Y=0,ce=Re.length;Y<ce;Y++)_e=Re[Y],w.format!==oi?Ae!==null?Ve?t.compressedTexSubImage2D(n.TEXTURE_2D,Y,0,0,_e.width,_e.height,Ae,_e.data):t.compressedTexImage2D(n.TEXTURE_2D,Y,Se,_e.width,_e.height,0,_e.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Ve?t.texSubImage2D(n.TEXTURE_2D,Y,0,0,_e.width,_e.height,Ae,Te,_e.data):t.texImage2D(n.TEXTURE_2D,Y,Se,_e.width,_e.height,0,Ae,Te,_e.data)}else if(w.isDataArrayTexture)Ve?(I&&t.texStorage3D(n.TEXTURE_2D_ARRAY,he,Se,q.width,q.height,q.depth),t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,q.width,q.height,q.depth,Ae,Te,q.data)):t.texImage3D(n.TEXTURE_2D_ARRAY,0,Se,q.width,q.height,q.depth,0,Ae,Te,q.data);else if(w.isData3DTexture)Ve?(I&&t.texStorage3D(n.TEXTURE_3D,he,Se,q.width,q.height,q.depth),t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,q.width,q.height,q.depth,Ae,Te,q.data)):t.texImage3D(n.TEXTURE_3D,0,Se,q.width,q.height,q.depth,0,Ae,Te,q.data);else if(w.isFramebufferTexture){if(I)if(Ve)t.texStorage2D(n.TEXTURE_2D,he,Se,q.width,q.height);else{let Y=q.width,ce=q.height;for(let me=0;me<he;me++)t.texImage2D(n.TEXTURE_2D,me,Se,Y,ce,0,Ae,Te,null),Y>>=1,ce>>=1}}else if(Re.length>0&&xe){Ve&&I&&t.texStorage2D(n.TEXTURE_2D,he,Se,Re[0].width,Re[0].height);for(let Y=0,ce=Re.length;Y<ce;Y++)_e=Re[Y],Ve?t.texSubImage2D(n.TEXTURE_2D,Y,0,0,Ae,Te,_e):t.texImage2D(n.TEXTURE_2D,Y,Se,Ae,Te,_e);w.generateMipmaps=!1}else Ve?(I&&t.texStorage2D(n.TEXTURE_2D,he,Se,q.width,q.height),t.texSubImage2D(n.TEXTURE_2D,0,0,0,Ae,Te,q)):t.texImage2D(n.TEXTURE_2D,0,Se,Ae,Te,q);E(w,xe)&&A(ae),te.__version=P.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function $e(b,w,Z){if(w.image.length!==6)return;const ae=Me(b,w),oe=w.source;t.bindTexture(n.TEXTURE_CUBE_MAP,b.__webglTexture,n.TEXTURE0+Z);const P=i.get(oe);if(oe.version!==P.__version||ae===!0){t.activeTexture(n.TEXTURE0+Z),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,w.flipY),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,w.premultiplyAlpha),n.pixelStorei(n.UNPACK_ALIGNMENT,w.unpackAlignment),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.NONE);const te=w.isCompressedTexture||w.image[0].isCompressedTexture,ie=w.image[0]&&w.image[0].isDataTexture,q=[];for(let Y=0;Y<6;Y++)!te&&!ie?q[Y]=x(w.image[Y],!1,!0,u):q[Y]=ie?w.image[Y].image:w.image[Y],q[Y]=Dt(w,q[Y]);const xe=q[0],Ae=y(xe)||a,Te=s.convert(w.format,w.colorSpace),Se=s.convert(w.type),_e=C(w.internalFormat,Te,Se,w.colorSpace),Re=a&&w.isVideoTexture!==!0,Ve=P.__version===void 0||ae===!0;let I=M(w,xe,Ae);de(n.TEXTURE_CUBE_MAP,w,Ae);let he;if(te){Re&&Ve&&t.texStorage2D(n.TEXTURE_CUBE_MAP,I,_e,xe.width,xe.height);for(let Y=0;Y<6;Y++){he=q[Y].mipmaps;for(let ce=0;ce<he.length;ce++){const me=he[ce];w.format!==oi?Te!==null?Re?t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce,0,0,me.width,me.height,Te,me.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce,_e,me.width,me.height,0,me.data):console.warn("THREE.WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Re?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce,0,0,me.width,me.height,Te,Se,me.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce,_e,me.width,me.height,0,Te,Se,me.data)}}}else{he=w.mipmaps,Re&&Ve&&(he.length>0&&I++,t.texStorage2D(n.TEXTURE_CUBE_MAP,I,_e,q[0].width,q[0].height));for(let Y=0;Y<6;Y++)if(ie){Re?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,q[Y].width,q[Y].height,Te,Se,q[Y].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,_e,q[Y].width,q[Y].height,0,Te,Se,q[Y].data);for(let ce=0;ce<he.length;ce++){const Ye=he[ce].image[Y].image;Re?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce+1,0,0,Ye.width,Ye.height,Te,Se,Ye.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce+1,_e,Ye.width,Ye.height,0,Te,Se,Ye.data)}}else{Re?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,0,0,Te,Se,q[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,0,_e,Te,Se,q[Y]);for(let ce=0;ce<he.length;ce++){const me=he[ce];Re?t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce+1,0,0,Te,Se,me.image[Y]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Y,ce+1,_e,Te,Se,me.image[Y])}}}E(w,Ae)&&A(n.TEXTURE_CUBE_MAP),P.__version=oe.version,w.onUpdate&&w.onUpdate(w)}b.__version=w.version}function be(b,w,Z,ae,oe){const P=s.convert(Z.format,Z.colorSpace),te=s.convert(Z.type),ie=C(Z.internalFormat,P,te,Z.colorSpace);i.get(w).__hasExternalTextures||(oe===n.TEXTURE_3D||oe===n.TEXTURE_2D_ARRAY?t.texImage3D(oe,0,ie,w.width,w.height,w.depth,0,P,te,null):t.texImage2D(oe,0,ie,w.width,w.height,0,P,te,null)),t.bindFramebuffer(n.FRAMEBUFFER,b),qe(w)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ae,oe,i.get(Z).__webglTexture,0,Ue(w)):(oe===n.TEXTURE_2D||oe>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&oe<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ae,oe,i.get(Z).__webglTexture,0),t.bindFramebuffer(n.FRAMEBUFFER,null)}function H(b,w,Z){if(n.bindRenderbuffer(n.RENDERBUFFER,b),w.depthBuffer&&!w.stencilBuffer){let ae=n.DEPTH_COMPONENT16;if(Z||qe(w)){const oe=w.depthTexture;oe&&oe.isDepthTexture&&(oe.type===cr?ae=n.DEPTH_COMPONENT32F:oe.type===ur&&(ae=n.DEPTH_COMPONENT24));const P=Ue(w);qe(w)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,P,ae,w.width,w.height):n.renderbufferStorageMultisample(n.RENDERBUFFER,P,ae,w.width,w.height)}else n.renderbufferStorage(n.RENDERBUFFER,ae,w.width,w.height);n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.RENDERBUFFER,b)}else if(w.depthBuffer&&w.stencilBuffer){const ae=Ue(w);Z&&qe(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,ae,n.DEPTH24_STENCIL8,w.width,w.height):qe(w)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,ae,n.DEPTH24_STENCIL8,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,n.DEPTH_STENCIL,w.width,w.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.RENDERBUFFER,b)}else{const ae=w.isWebGLMultipleRenderTargets===!0?w.texture:[w.texture];for(let oe=0;oe<ae.length;oe++){const P=ae[oe],te=s.convert(P.format,P.colorSpace),ie=s.convert(P.type),q=C(P.internalFormat,te,ie,P.colorSpace),xe=Ue(w);Z&&qe(w)===!1?n.renderbufferStorageMultisample(n.RENDERBUFFER,xe,q,w.width,w.height):qe(w)?h.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,xe,q,w.width,w.height):n.renderbufferStorage(n.RENDERBUFFER,q,w.width,w.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function De(b,w){if(w&&w.isWebGLCubeRenderTarget)throw new Error("Depth Texture with cube render targets is not supported");if(t.bindFramebuffer(n.FRAMEBUFFER,b),!(w.depthTexture&&w.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");(!i.get(w.depthTexture).__webglTexture||w.depthTexture.image.width!==w.width||w.depthTexture.image.height!==w.height)&&(w.depthTexture.image.width=w.width,w.depthTexture.image.height=w.height,w.depthTexture.needsUpdate=!0),G(w.depthTexture,0);const ae=i.get(w.depthTexture).__webglTexture,oe=Ue(w);if(w.depthTexture.format===os)qe(w)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_ATTACHMENT,n.TEXTURE_2D,ae,0);else if(w.depthTexture.format===Po)qe(w)?h.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0,oe):n.framebufferTexture2D(n.FRAMEBUFFER,n.DEPTH_STENCIL_ATTACHMENT,n.TEXTURE_2D,ae,0);else throw new Error("Unknown depthTexture format")}function ue(b){const w=i.get(b),Z=b.isWebGLCubeRenderTarget===!0;if(b.depthTexture&&!w.__autoAllocateDepthBuffer){if(Z)throw new Error("target.depthTexture not supported in Cube render targets");De(w.__webglFramebuffer,b)}else if(Z){w.__webglDepthbuffer=[];for(let ae=0;ae<6;ae++)t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer[ae]),w.__webglDepthbuffer[ae]=n.createRenderbuffer(),H(w.__webglDepthbuffer[ae],b,!1)}else t.bindFramebuffer(n.FRAMEBUFFER,w.__webglFramebuffer),w.__webglDepthbuffer=n.createRenderbuffer(),H(w.__webglDepthbuffer,b,!1);t.bindFramebuffer(n.FRAMEBUFFER,null)}function we(b,w,Z){const ae=i.get(b);w!==void 0&&be(ae.__webglFramebuffer,b,b.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D),Z!==void 0&&ue(b)}function Ee(b){const w=b.texture,Z=i.get(b),ae=i.get(w);b.addEventListener("dispose",O),b.isWebGLMultipleRenderTargets!==!0&&(ae.__webglTexture===void 0&&(ae.__webglTexture=n.createTexture()),ae.__version=w.version,o.memory.textures++);const oe=b.isWebGLCubeRenderTarget===!0,P=b.isWebGLMultipleRenderTargets===!0,te=y(b)||a;if(oe){Z.__webglFramebuffer=[];for(let ie=0;ie<6;ie++)Z.__webglFramebuffer[ie]=n.createFramebuffer()}else{if(Z.__webglFramebuffer=n.createFramebuffer(),P)if(r.drawBuffers){const ie=b.texture;for(let q=0,xe=ie.length;q<xe;q++){const Ae=i.get(ie[q]);Ae.__webglTexture===void 0&&(Ae.__webglTexture=n.createTexture(),o.memory.textures++)}}else console.warn("THREE.WebGLRenderer: WebGLMultipleRenderTargets can only be used with WebGL2 or WEBGL_draw_buffers extension.");if(a&&b.samples>0&&qe(b)===!1){const ie=P?w:[w];Z.__webglMultisampledFramebuffer=n.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let q=0;q<ie.length;q++){const xe=ie[q];Z.__webglColorRenderbuffer[q]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,Z.__webglColorRenderbuffer[q]);const Ae=s.convert(xe.format,xe.colorSpace),Te=s.convert(xe.type),Se=C(xe.internalFormat,Ae,Te,xe.colorSpace,b.isXRRenderTarget===!0),_e=Ue(b);n.renderbufferStorageMultisample(n.RENDERBUFFER,_e,Se,b.width,b.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+q,n.RENDERBUFFER,Z.__webglColorRenderbuffer[q])}n.bindRenderbuffer(n.RENDERBUFFER,null),b.depthBuffer&&(Z.__webglDepthRenderbuffer=n.createRenderbuffer(),H(Z.__webglDepthRenderbuffer,b,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(oe){t.bindTexture(n.TEXTURE_CUBE_MAP,ae.__webglTexture),de(n.TEXTURE_CUBE_MAP,w,te);for(let ie=0;ie<6;ie++)be(Z.__webglFramebuffer[ie],b,w,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ie);E(w,te)&&A(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(P){const ie=b.texture;for(let q=0,xe=ie.length;q<xe;q++){const Ae=ie[q],Te=i.get(Ae);t.bindTexture(n.TEXTURE_2D,Te.__webglTexture),de(n.TEXTURE_2D,Ae,te),be(Z.__webglFramebuffer,b,Ae,n.COLOR_ATTACHMENT0+q,n.TEXTURE_2D),E(Ae,te)&&A(n.TEXTURE_2D)}t.unbindTexture()}else{let ie=n.TEXTURE_2D;(b.isWebGL3DRenderTarget||b.isWebGLArrayRenderTarget)&&(a?ie=b.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY:console.error("THREE.WebGLTextures: THREE.Data3DTexture and THREE.DataArrayTexture only supported with WebGL2.")),t.bindTexture(ie,ae.__webglTexture),de(ie,w,te),be(Z.__webglFramebuffer,b,w,n.COLOR_ATTACHMENT0,ie),E(w,te)&&A(ie),t.unbindTexture()}b.depthBuffer&&ue(b)}function Ke(b){const w=y(b)||a,Z=b.isWebGLMultipleRenderTargets===!0?b.texture:[b.texture];for(let ae=0,oe=Z.length;ae<oe;ae++){const P=Z[ae];if(E(P,w)){const te=b.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:n.TEXTURE_2D,ie=i.get(P).__webglTexture;t.bindTexture(te,ie),A(te),t.unbindTexture()}}}function ze(b){if(a&&b.samples>0&&qe(b)===!1){const w=b.isWebGLMultipleRenderTargets?b.texture:[b.texture],Z=b.width,ae=b.height;let oe=n.COLOR_BUFFER_BIT;const P=[],te=b.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,ie=i.get(b),q=b.isWebGLMultipleRenderTargets===!0;if(q)for(let xe=0;xe<w.length;xe++)t.bindFramebuffer(n.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,ie.__webglMultisampledFramebuffer),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ie.__webglFramebuffer);for(let xe=0;xe<w.length;xe++){P.push(n.COLOR_ATTACHMENT0+xe),b.depthBuffer&&P.push(te);const Ae=ie.__ignoreDepthValues!==void 0?ie.__ignoreDepthValues:!1;if(Ae===!1&&(b.depthBuffer&&(oe|=n.DEPTH_BUFFER_BIT),b.stencilBuffer&&(oe|=n.STENCIL_BUFFER_BIT)),q&&n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,ie.__webglColorRenderbuffer[xe]),Ae===!0&&(n.invalidateFramebuffer(n.READ_FRAMEBUFFER,[te]),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[te])),q){const Te=i.get(w[xe]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Te,0)}n.blitFramebuffer(0,0,Z,ae,0,0,Z,ae,oe,n.NEAREST),p&&n.invalidateFramebuffer(n.READ_FRAMEBUFFER,P)}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),q)for(let xe=0;xe<w.length;xe++){t.bindFramebuffer(n.FRAMEBUFFER,ie.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.RENDERBUFFER,ie.__webglColorRenderbuffer[xe]);const Ae=i.get(w[xe]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,ie.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xe,n.TEXTURE_2D,Ae,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,ie.__webglMultisampledFramebuffer)}}function Ue(b){return Math.min(d,b.samples)}function qe(b){const w=i.get(b);return a&&b.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&w.__useRenderToTexture!==!1}function At(b){const w=o.render.frame;v.get(b)!==w&&(v.set(b,w),b.update())}function Dt(b,w){const Z=b.colorSpace,ae=b.format,oe=b.type;return b.isCompressedTexture===!0||b.format===Vd||Z!==Ei&&Z!==ls&&(Z===Fe?a===!1?e.has("EXT_sRGB")===!0&&ae===oi?(b.format=Vd,b.minFilter=Bn,b.generateMipmaps=!1):w=xx.sRGBToLinear(w):(ae!==oi||oe!==Er)&&console.warn("THREE.WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):console.error("THREE.WebGLTextures: Unsupported texture color space:",Z)),w}this.allocateTextureUnit=D,this.resetTextureUnits=W,this.setTexture2D=G,this.setTexture2DArray=se,this.setTexture3D=F,this.setTextureCube=ee,this.rebindTextures=we,this.setupRenderTarget=Ee,this.updateRenderTargetMipmap=Ke,this.updateMultisampleRenderTarget=ze,this.setupDepthRenderbuffer=ue,this.setupFrameBufferTexture=be,this.useMultisampledRTT=qe}function hb(n,e,t){const i=t.isWebGL2;function r(s,o=ls){let a;if(s===Er)return n.UNSIGNED_BYTE;if(s===cx)return n.UNSIGNED_SHORT_4_4_4_4;if(s===fx)return n.UNSIGNED_SHORT_5_5_5_1;if(s===$1)return n.BYTE;if(s===K1)return n.SHORT;if(s===op)return n.UNSIGNED_SHORT;if(s===ux)return n.INT;if(s===ur)return n.UNSIGNED_INT;if(s===cr)return n.FLOAT;if(s===Wa)return i?n.HALF_FLOAT:(a=e.get("OES_texture_half_float"),a!==null?a.HALF_FLOAT_OES:null);if(s===Z1)return n.ALPHA;if(s===oi)return n.RGBA;if(s===Q1)return n.LUMINANCE;if(s===J1)return n.LUMINANCE_ALPHA;if(s===os)return n.DEPTH_COMPONENT;if(s===Po)return n.DEPTH_STENCIL;if(s===Vd)return a=e.get("EXT_sRGB"),a!==null?a.SRGB_ALPHA_EXT:null;if(s===eT)return n.RED;if(s===dx)return n.RED_INTEGER;if(s===tT)return n.RG;if(s===hx)return n.RG_INTEGER;if(s===px)return n.RGBA_INTEGER;if(s===Qc||s===Jc||s===ef||s===tf)if(o===Fe)if(a=e.get("WEBGL_compressed_texture_s3tc_srgb"),a!==null){if(s===Qc)return a.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(s===Jc)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(s===ef)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(s===tf)return a.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(a=e.get("WEBGL_compressed_texture_s3tc"),a!==null){if(s===Qc)return a.COMPRESSED_RGB_S3TC_DXT1_EXT;if(s===Jc)return a.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(s===ef)return a.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(s===tf)return a.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(s===rg||s===sg||s===og||s===ag)if(a=e.get("WEBGL_compressed_texture_pvrtc"),a!==null){if(s===rg)return a.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(s===sg)return a.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(s===og)return a.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(s===ag)return a.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(s===nT)return a=e.get("WEBGL_compressed_texture_etc1"),a!==null?a.COMPRESSED_RGB_ETC1_WEBGL:null;if(s===lg||s===ug)if(a=e.get("WEBGL_compressed_texture_etc"),a!==null){if(s===lg)return o===Fe?a.COMPRESSED_SRGB8_ETC2:a.COMPRESSED_RGB8_ETC2;if(s===ug)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:a.COMPRESSED_RGBA8_ETC2_EAC}else return null;if(s===cg||s===fg||s===dg||s===hg||s===pg||s===mg||s===gg||s===_g||s===vg||s===xg||s===yg||s===Sg||s===Mg||s===Eg)if(a=e.get("WEBGL_compressed_texture_astc"),a!==null){if(s===cg)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:a.COMPRESSED_RGBA_ASTC_4x4_KHR;if(s===fg)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:a.COMPRESSED_RGBA_ASTC_5x4_KHR;if(s===dg)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:a.COMPRESSED_RGBA_ASTC_5x5_KHR;if(s===hg)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:a.COMPRESSED_RGBA_ASTC_6x5_KHR;if(s===pg)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:a.COMPRESSED_RGBA_ASTC_6x6_KHR;if(s===mg)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:a.COMPRESSED_RGBA_ASTC_8x5_KHR;if(s===gg)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:a.COMPRESSED_RGBA_ASTC_8x6_KHR;if(s===_g)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:a.COMPRESSED_RGBA_ASTC_8x8_KHR;if(s===vg)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:a.COMPRESSED_RGBA_ASTC_10x5_KHR;if(s===xg)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:a.COMPRESSED_RGBA_ASTC_10x6_KHR;if(s===yg)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:a.COMPRESSED_RGBA_ASTC_10x8_KHR;if(s===Sg)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:a.COMPRESSED_RGBA_ASTC_10x10_KHR;if(s===Mg)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:a.COMPRESSED_RGBA_ASTC_12x10_KHR;if(s===Eg)return o===Fe?a.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:a.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(s===nf)if(a=e.get("EXT_texture_compression_bptc"),a!==null){if(s===nf)return o===Fe?a.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:a.COMPRESSED_RGBA_BPTC_UNORM_EXT}else return null;if(s===iT||s===Tg||s===wg||s===Ag)if(a=e.get("EXT_texture_compression_rgtc"),a!==null){if(s===nf)return a.COMPRESSED_RED_RGTC1_EXT;if(s===Tg)return a.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(s===wg)return a.COMPRESSED_RED_GREEN_RGTC2_EXT;if(s===Ag)return a.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return s===ss?i?n.UNSIGNED_INT_24_8:(a=e.get("WEBGL_depth_texture"),a!==null?a.UNSIGNED_INT_24_8_WEBGL:null):n[s]!==void 0?n[s]:null}return{convert:r}}class pb extends wn{constructor(e=[]){super(),this.isArrayCamera=!0,this.cameras=e}}class ql extends pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mb={type:"move"};class Cf{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new ql,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new ql,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new B,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new B),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new ql,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new B,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new B),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const i of e.hand.values())this._getHandJoint(t,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,u=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(u&&e.hand){o=!0;for(const g of e.hand.values()){const m=t.getJointPose(g,i),f=this._getHandJoint(u,g);m!==null&&(f.matrix.fromArray(m.transform.matrix),f.matrix.decompose(f.position,f.rotation,f.scale),f.matrixWorldNeedsUpdate=!0,f.jointRadius=m.radius),f.visible=m!==null}const c=u.joints["index-finger-tip"],d=u.joints["thumb-tip"],h=c.position.distanceTo(d.position),p=.02,v=.005;u.inputState.pinching&&h>p+v?(u.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!u.inputState.pinching&&h<=p-v&&(u.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=t.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mb)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),u!==null&&(u.visible=o!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const i=new ql;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[t.jointName]=i,e.add(i)}return e.joints[t.jointName]}}class gb extends bn{constructor(e,t,i,r,s,o,a,l,u,c){if(c=c!==void 0?c:os,c!==os&&c!==Po)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");i===void 0&&c===os&&(i=ur),i===void 0&&c===Po&&(i=ss),super(null,r,s,o,a,l,c,i,u),this.isDepthTexture=!0,this.image={width:e,height:t},this.magFilter=a!==void 0?a:tn,this.minFilter=l!==void 0?l:tn,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return this.compareFunction!==null&&(t.compareFunction=this.compareFunction),t}}class _b extends Ts{constructor(e,t){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,u=null,c=null,d=null,h=null,p=null,v=null;const g=t.getContextAttributes();let m=null,f=null;const _=[],x=[];let y=null;const S=new wn;S.layers.enable(1),S.viewport=new ot;const E=new wn;E.layers.enable(2),E.viewport=new ot;const A=[S,E],C=new pb;C.layers.enable(1),C.layers.enable(2);let M=null,T=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getCamera=function(){},this.setUserCamera=function(F){y=F},this.getController=function(F){let ee=_[F];return ee===void 0&&(ee=new Cf,_[F]=ee),ee.getTargetRaySpace()},this.getControllerGrip=function(F){let ee=_[F];return ee===void 0&&(ee=new Cf,_[F]=ee),ee.getGripSpace()},this.getHand=function(F){let ee=_[F];return ee===void 0&&(ee=new Cf,_[F]=ee),ee.getHandSpace()};function U(F){const ee=x.indexOf(F.inputSource);if(ee===-1)return;const K=_[ee];K!==void 0&&(K.update(F.inputSource,F.frame,u||o),K.dispatchEvent({type:F.type,data:F.inputSource}))}function O(){r.removeEventListener("select",U),r.removeEventListener("selectstart",U),r.removeEventListener("selectend",U),r.removeEventListener("squeeze",U),r.removeEventListener("squeezestart",U),r.removeEventListener("squeezeend",U),r.removeEventListener("end",O),r.removeEventListener("inputsourceschange",L);for(let F=0;F<_.length;F++){const ee=x[F];ee!==null&&(x[F]=null,_[F].disconnect(ee))}M=null,T=null,e.setRenderTarget(m),p=null,h=null,d=null,r=null,f=null,se.stop(),i.isPresenting=!1,i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(F){s=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(F){a=F,i.isPresenting===!0&&console.warn("THREE.WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return u||o},this.setReferenceSpace=function(F){u=F},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return d},this.getFrame=function(){return v},this.getSession=function(){return r},this.setSession=async function(F){if(r=F,r!==null){if(m=e.getRenderTarget(),r.addEventListener("select",U),r.addEventListener("selectstart",U),r.addEventListener("selectend",U),r.addEventListener("squeeze",U),r.addEventListener("squeezestart",U),r.addEventListener("squeezeend",U),r.addEventListener("end",O),r.addEventListener("inputsourceschange",L),g.xrCompatible!==!0&&await t.makeXRCompatible(),r.renderState.layers===void 0||e.capabilities.isWebGL2===!1){const ee={antialias:r.renderState.layers===void 0?g.antialias:!0,alpha:!0,depth:g.depth,stencil:g.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,t,ee),r.updateRenderState({baseLayer:p}),f=new vs(p.framebufferWidth,p.framebufferHeight,{format:oi,type:Er,colorSpace:e.outputColorSpace,stencilBuffer:g.stencil})}else{let ee=null,K=null,re=null;g.depth&&(re=g.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ee=g.stencil?Po:os,K=g.stencil?ss:ur);const le={colorFormat:t.RGBA8,depthFormat:re,scaleFactor:s};d=new XRWebGLBinding(r,t),h=d.createProjectionLayer(le),r.updateRenderState({layers:[h]}),f=new vs(h.textureWidth,h.textureHeight,{format:oi,type:Er,depthTexture:new gb(h.textureWidth,h.textureHeight,K,void 0,void 0,void 0,void 0,void 0,void 0,ee),stencilBuffer:g.stencil,colorSpace:e.outputColorSpace,samples:g.antialias?4:0});const de=e.properties.get(f);de.__ignoreDepthValues=h.ignoreDepthValues}f.isXRRenderTarget=!0,this.setFoveation(l),u=null,o=await r.requestReferenceSpace(a),se.setContext(r),se.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode};function L(F){for(let ee=0;ee<F.removed.length;ee++){const K=F.removed[ee],re=x.indexOf(K);re>=0&&(x[re]=null,_[re].disconnect(K))}for(let ee=0;ee<F.added.length;ee++){const K=F.added[ee];let re=x.indexOf(K);if(re===-1){for(let de=0;de<_.length;de++)if(de>=x.length){x.push(K),re=de;break}else if(x[de]===null){x[de]=K,re=de;break}if(re===-1)break}const le=_[re];le&&le.connect(K)}}const N=new B,z=new B;function $(F,ee,K){N.setFromMatrixPosition(ee.matrixWorld),z.setFromMatrixPosition(K.matrixWorld);const re=N.distanceTo(z),le=ee.projectionMatrix.elements,de=K.projectionMatrix.elements,Me=le[14]/(le[10]-1),ye=le[14]/(le[10]+1),$e=(le[9]+1)/le[5],be=(le[9]-1)/le[5],H=(le[8]-1)/le[0],De=(de[8]+1)/de[0],ue=Me*H,we=Me*De,Ee=re/(-H+De),Ke=Ee*-H;ee.matrixWorld.decompose(F.position,F.quaternion,F.scale),F.translateX(Ke),F.translateZ(Ee),F.matrixWorld.compose(F.position,F.quaternion,F.scale),F.matrixWorldInverse.copy(F.matrixWorld).invert();const ze=Me+Ee,Ue=ye+Ee,qe=ue-Ke,At=we+(re-Ke),Dt=$e*ye/Ue*ze,b=be*ye/Ue*ze;F.projectionMatrix.makePerspective(qe,At,Dt,b,ze,Ue),F.projectionMatrixInverse.copy(F.projectionMatrix).invert()}function W(F,ee){ee===null?F.matrixWorld.copy(F.matrix):F.matrixWorld.multiplyMatrices(ee.matrixWorld,F.matrix),F.matrixWorldInverse.copy(F.matrixWorld).invert()}this.updateCameraXR=function(F){if(r===null)return F;y&&(F=y),C.near=E.near=S.near=F.near,C.far=E.far=S.far=F.far,(M!==C.near||T!==C.far)&&(r.updateRenderState({depthNear:C.near,depthFar:C.far}),M=C.near,T=C.far);const ee=F.parent,K=C.cameras;W(C,ee);for(let re=0;re<K.length;re++)W(K[re],ee);return K.length===2?$(C,S,E):C.projectionMatrix.copy(S.projectionMatrix),y&&D(C,ee),C};function D(F,ee){const K=y;ee===null?K.matrix.copy(F.matrixWorld):(K.matrix.copy(ee.matrixWorld),K.matrix.invert(),K.matrix.multiply(F.matrixWorld)),K.matrix.decompose(K.position,K.quaternion,K.scale),K.updateMatrixWorld(!0);const re=K.children;for(let le=0,de=re.length;le<de;le++)re[le].updateMatrixWorld(!0);K.projectionMatrix.copy(F.projectionMatrix),K.projectionMatrixInverse.copy(F.projectionMatrixInverse),K.isPerspectiveCamera&&(K.fov=Gd*2*Math.atan(1/K.projectionMatrix.elements[5]),K.zoom=1)}this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(F){l=F,h!==null&&(h.fixedFoveation=F),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=F)};let X=null;function G(F,ee){if(c=ee.getViewerPose(u||o),v=ee,c!==null){const K=c.views;p!==null&&(e.setRenderTargetFramebuffer(f,p.framebuffer),e.setRenderTarget(f));let re=!1;K.length!==C.cameras.length&&(C.cameras.length=0,re=!0);for(let le=0;le<K.length;le++){const de=K[le];let Me=null;if(p!==null)Me=p.getViewport(de);else{const $e=d.getViewSubImage(h,de);Me=$e.viewport,le===0&&(e.setRenderTargetTextures(f,$e.colorTexture,h.ignoreDepthValues?void 0:$e.depthStencilTexture),e.setRenderTarget(f))}let ye=A[le];ye===void 0&&(ye=new wn,ye.layers.enable(le),ye.viewport=new ot,A[le]=ye),ye.matrix.fromArray(de.transform.matrix),ye.matrix.decompose(ye.position,ye.quaternion,ye.scale),ye.projectionMatrix.fromArray(de.projectionMatrix),ye.projectionMatrixInverse.copy(ye.projectionMatrix).invert(),ye.viewport.set(Me.x,Me.y,Me.width,Me.height),le===0&&(C.matrix.copy(ye.matrix),C.matrix.decompose(C.position,C.quaternion,C.scale)),re===!0&&C.cameras.push(ye)}}for(let K=0;K<_.length;K++){const re=x[K],le=_[K];re!==null&&le!==void 0&&le.update(re,ee,u||o)}X&&X(F,ee),ee.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ee}),v=null}const se=new Px;se.setAnimationLoop(G),this.setAnimationLoop=function(F){X=F},this.dispose=function(){}}}function vb(n,e){function t(m,f){m.matrixAutoUpdate===!0&&m.updateMatrix(),f.value.copy(m.matrix)}function i(m,f){f.color.getRGB(m.fogColor.value,Cx(n)),f.isFog?(m.fogNear.value=f.near,m.fogFar.value=f.far):f.isFogExp2&&(m.fogDensity.value=f.density)}function r(m,f,_,x,y){f.isMeshBasicMaterial||f.isMeshLambertMaterial?s(m,f):f.isMeshToonMaterial?(s(m,f),d(m,f)):f.isMeshPhongMaterial?(s(m,f),c(m,f)):f.isMeshStandardMaterial?(s(m,f),h(m,f),f.isMeshPhysicalMaterial&&p(m,f,y)):f.isMeshMatcapMaterial?(s(m,f),v(m,f)):f.isMeshDepthMaterial?s(m,f):f.isMeshDistanceMaterial?(s(m,f),g(m,f)):f.isMeshNormalMaterial?s(m,f):f.isLineBasicMaterial?(o(m,f),f.isLineDashedMaterial&&a(m,f)):f.isPointsMaterial?l(m,f,_,x):f.isSpriteMaterial?u(m,f):f.isShadowMaterial?(m.color.value.copy(f.color),m.opacity.value=f.opacity):f.isShaderMaterial&&(f.uniformsNeedUpdate=!1)}function s(m,f){m.opacity.value=f.opacity,f.color&&m.diffuse.value.copy(f.color),f.emissive&&m.emissive.value.copy(f.emissive).multiplyScalar(f.emissiveIntensity),f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.bumpMap&&(m.bumpMap.value=f.bumpMap,t(f.bumpMap,m.bumpMapTransform),m.bumpScale.value=f.bumpScale,f.side===hn&&(m.bumpScale.value*=-1)),f.normalMap&&(m.normalMap.value=f.normalMap,t(f.normalMap,m.normalMapTransform),m.normalScale.value.copy(f.normalScale),f.side===hn&&m.normalScale.value.negate()),f.displacementMap&&(m.displacementMap.value=f.displacementMap,t(f.displacementMap,m.displacementMapTransform),m.displacementScale.value=f.displacementScale,m.displacementBias.value=f.displacementBias),f.emissiveMap&&(m.emissiveMap.value=f.emissiveMap,t(f.emissiveMap,m.emissiveMapTransform)),f.specularMap&&(m.specularMap.value=f.specularMap,t(f.specularMap,m.specularMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest);const _=e.get(f).envMap;if(_&&(m.envMap.value=_,m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=f.reflectivity,m.ior.value=f.ior,m.refractionRatio.value=f.refractionRatio),f.lightMap){m.lightMap.value=f.lightMap;const x=n.useLegacyLights===!0?Math.PI:1;m.lightMapIntensity.value=f.lightMapIntensity*x,t(f.lightMap,m.lightMapTransform)}f.aoMap&&(m.aoMap.value=f.aoMap,m.aoMapIntensity.value=f.aoMapIntensity,t(f.aoMap,m.aoMapTransform))}function o(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform))}function a(m,f){m.dashSize.value=f.dashSize,m.totalSize.value=f.dashSize+f.gapSize,m.scale.value=f.scale}function l(m,f,_,x){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.size.value=f.size*_,m.scale.value=x*.5,f.map&&(m.map.value=f.map,t(f.map,m.uvTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function u(m,f){m.diffuse.value.copy(f.color),m.opacity.value=f.opacity,m.rotation.value=f.rotation,f.map&&(m.map.value=f.map,t(f.map,m.mapTransform)),f.alphaMap&&(m.alphaMap.value=f.alphaMap,t(f.alphaMap,m.alphaMapTransform)),f.alphaTest>0&&(m.alphaTest.value=f.alphaTest)}function c(m,f){m.specular.value.copy(f.specular),m.shininess.value=Math.max(f.shininess,1e-4)}function d(m,f){f.gradientMap&&(m.gradientMap.value=f.gradientMap)}function h(m,f){m.metalness.value=f.metalness,f.metalnessMap&&(m.metalnessMap.value=f.metalnessMap,t(f.metalnessMap,m.metalnessMapTransform)),m.roughness.value=f.roughness,f.roughnessMap&&(m.roughnessMap.value=f.roughnessMap,t(f.roughnessMap,m.roughnessMapTransform)),e.get(f).envMap&&(m.envMapIntensity.value=f.envMapIntensity)}function p(m,f,_){m.ior.value=f.ior,f.sheen>0&&(m.sheenColor.value.copy(f.sheenColor).multiplyScalar(f.sheen),m.sheenRoughness.value=f.sheenRoughness,f.sheenColorMap&&(m.sheenColorMap.value=f.sheenColorMap,t(f.sheenColorMap,m.sheenColorMapTransform)),f.sheenRoughnessMap&&(m.sheenRoughnessMap.value=f.sheenRoughnessMap,t(f.sheenRoughnessMap,m.sheenRoughnessMapTransform))),f.clearcoat>0&&(m.clearcoat.value=f.clearcoat,m.clearcoatRoughness.value=f.clearcoatRoughness,f.clearcoatMap&&(m.clearcoatMap.value=f.clearcoatMap,t(f.clearcoatMap,m.clearcoatMapTransform)),f.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=f.clearcoatRoughnessMap,t(f.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),f.clearcoatNormalMap&&(m.clearcoatNormalMap.value=f.clearcoatNormalMap,t(f.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(f.clearcoatNormalScale),f.side===hn&&m.clearcoatNormalScale.value.negate())),f.iridescence>0&&(m.iridescence.value=f.iridescence,m.iridescenceIOR.value=f.iridescenceIOR,m.iridescenceThicknessMinimum.value=f.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=f.iridescenceThicknessRange[1],f.iridescenceMap&&(m.iridescenceMap.value=f.iridescenceMap,t(f.iridescenceMap,m.iridescenceMapTransform)),f.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=f.iridescenceThicknessMap,t(f.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),f.transmission>0&&(m.transmission.value=f.transmission,m.transmissionSamplerMap.value=_.texture,m.transmissionSamplerSize.value.set(_.width,_.height),f.transmissionMap&&(m.transmissionMap.value=f.transmissionMap,t(f.transmissionMap,m.transmissionMapTransform)),m.thickness.value=f.thickness,f.thicknessMap&&(m.thicknessMap.value=f.thicknessMap,t(f.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=f.attenuationDistance,m.attenuationColor.value.copy(f.attenuationColor)),f.anisotropy>0&&(m.anisotropyVector.value.set(f.anisotropy*Math.cos(f.anisotropyRotation),f.anisotropy*Math.sin(f.anisotropyRotation)),f.anisotropyMap&&(m.anisotropyMap.value=f.anisotropyMap,t(f.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=f.specularIntensity,m.specularColor.value.copy(f.specularColor),f.specularColorMap&&(m.specularColorMap.value=f.specularColorMap,t(f.specularColorMap,m.specularColorMapTransform)),f.specularIntensityMap&&(m.specularIntensityMap.value=f.specularIntensityMap,t(f.specularIntensityMap,m.specularIntensityMapTransform))}function v(m,f){f.matcap&&(m.matcap.value=f.matcap)}function g(m,f){const _=e.get(f).light;m.referencePosition.value.setFromMatrixPosition(_.matrixWorld),m.nearDistance.value=_.shadow.camera.near,m.farDistance.value=_.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function xb(n,e,t,i){let r={},s={},o=[];const a=t.isWebGL2?n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS):0;function l(_,x){const y=x.program;i.uniformBlockBinding(_,y)}function u(_,x){let y=r[_.id];y===void 0&&(v(_),y=c(_),r[_.id]=y,_.addEventListener("dispose",m));const S=x.program;i.updateUBOMapping(_,S);const E=e.render.frame;s[_.id]!==E&&(h(_),s[_.id]=E)}function c(_){const x=d();_.__bindingPointIndex=x;const y=n.createBuffer(),S=_.__size,E=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,y),n.bufferData(n.UNIFORM_BUFFER,S,E),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,x,y),y}function d(){for(let _=0;_<a;_++)if(o.indexOf(_)===-1)return o.push(_),_;return console.error("THREE.WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(_){const x=r[_.id],y=_.uniforms,S=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,x);for(let E=0,A=y.length;E<A;E++){const C=y[E];if(p(C,E,S)===!0){const M=C.__offset,T=Array.isArray(C.value)?C.value:[C.value];let U=0;for(let O=0;O<T.length;O++){const L=T[O],N=g(L);typeof L=="number"?(C.__data[0]=L,n.bufferSubData(n.UNIFORM_BUFFER,M+U,C.__data)):L.isMatrix3?(C.__data[0]=L.elements[0],C.__data[1]=L.elements[1],C.__data[2]=L.elements[2],C.__data[3]=L.elements[0],C.__data[4]=L.elements[3],C.__data[5]=L.elements[4],C.__data[6]=L.elements[5],C.__data[7]=L.elements[0],C.__data[8]=L.elements[6],C.__data[9]=L.elements[7],C.__data[10]=L.elements[8],C.__data[11]=L.elements[0]):(L.toArray(C.__data,U),U+=N.storage/Float32Array.BYTES_PER_ELEMENT)}n.bufferSubData(n.UNIFORM_BUFFER,M,C.__data)}}n.bindBuffer(n.UNIFORM_BUFFER,null)}function p(_,x,y){const S=_.value;if(y[x]===void 0){if(typeof S=="number")y[x]=S;else{const E=Array.isArray(S)?S:[S],A=[];for(let C=0;C<E.length;C++)A.push(E[C].clone());y[x]=A}return!0}else if(typeof S=="number"){if(y[x]!==S)return y[x]=S,!0}else{const E=Array.isArray(y[x])?y[x]:[y[x]],A=Array.isArray(S)?S:[S];for(let C=0;C<E.length;C++){const M=E[C];if(M.equals(A[C])===!1)return M.copy(A[C]),!0}}return!1}function v(_){const x=_.uniforms;let y=0;const S=16;let E=0;for(let A=0,C=x.length;A<C;A++){const M=x[A],T={boundary:0,storage:0},U=Array.isArray(M.value)?M.value:[M.value];for(let O=0,L=U.length;O<L;O++){const N=U[O],z=g(N);T.boundary+=z.boundary,T.storage+=z.storage}if(M.__data=new Float32Array(T.storage/Float32Array.BYTES_PER_ELEMENT),M.__offset=y,A>0){E=y%S;const O=S-E;E!==0&&O-T.boundary<0&&(y+=S-E,M.__offset=y)}y+=T.storage}return E=y%S,E>0&&(y+=S-E),_.__size=y,_.__cache={},this}function g(_){const x={boundary:0,storage:0};return typeof _=="number"?(x.boundary=4,x.storage=4):_.isVector2?(x.boundary=8,x.storage=8):_.isVector3||_.isColor?(x.boundary=16,x.storage=12):_.isVector4?(x.boundary=16,x.storage=16):_.isMatrix3?(x.boundary=48,x.storage=48):_.isMatrix4?(x.boundary=64,x.storage=64):_.isTexture?console.warn("THREE.WebGLRenderer: Texture samplers can not be part of an uniforms group."):console.warn("THREE.WebGLRenderer: Unsupported uniform value type.",_),x}function m(_){const x=_.target;x.removeEventListener("dispose",m);const y=o.indexOf(x.__bindingPointIndex);o.splice(y,1),n.deleteBuffer(r[x.id]),delete r[x.id],delete s[x.id]}function f(){for(const _ in r)n.deleteBuffer(r[_]);o=[],r={},s={}}return{bind:l,update:u,dispose:f}}function yb(){const n=zu("canvas");return n.style.display="block",n}class Ix{constructor(e={}){const{canvas:t=yb(),context:i=null,depth:r=!0,stencil:s=!0,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:u=!1,powerPreference:c="default",failIfMajorPerformanceCaveat:d=!1}=e;this.isWebGLRenderer=!0;let h;i!==null?h=i.getContextAttributes().alpha:h=o;const p=new Uint32Array(4),v=new Int32Array(4);let g=null,m=null;const f=[],_=[];this.domElement=t,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.outputColorSpace=Fe,this.useLegacyLights=!0,this.toneMapping=Gi,this.toneMappingExposure=1;const x=this;let y=!1,S=0,E=0,A=null,C=-1,M=null;const T=new ot,U=new ot;let O=null;const L=new Qe(0);let N=0,z=t.width,$=t.height,W=1,D=null,X=null;const G=new ot(0,0,z,$),se=new ot(0,0,z,$);let F=!1;const ee=new lp;let K=!1,re=!1,le=null;const de=new wt,Me=new Ie,ye=new B,$e={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};function be(){return A===null?W:1}let H=i;function De(R,j){for(let Q=0;Q<R.length;Q++){const V=R[Q],J=t.getContext(V,j);if(J!==null)return J}return null}try{const R={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:u,powerPreference:c,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${sp}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",Y,!1),t.addEventListener("webglcontextcreationerror",ce,!1),H===null){const j=["webgl2","webgl","experimental-webgl"];if(x.isWebGL1Renderer===!0&&j.shift(),H=De(j,R),H===null)throw De(j)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}H instanceof WebGLRenderingContext&&console.warn("THREE.WebGLRenderer: WebGL 1 support was deprecated in r153 and will be removed in r163."),H.getShaderPrecisionFormat===void 0&&(H.getShaderPrecisionFormat=function(){return{rangeMin:1,rangeMax:1,precision:1}})}catch(R){throw console.error("THREE.WebGLRenderer: "+R.message),R}let ue,we,Ee,Ke,ze,Ue,qe,At,Dt,b,w,Z,ae,oe,P,te,ie,q,xe,Ae,Te,Se,_e,Re;function Ve(){ue=new LC(H),we=new TC(H,ue,e),ue.init(we),Se=new hb(H,ue,we),Ee=new fb(H,ue,we),Ke=new NC(H),ze=new ZR,Ue=new db(H,ue,Ee,ze,we,Se,Ke),qe=new AC(x),At=new PC(x),Dt=new jT(H,we),_e=new MC(H,ue,Dt,we),b=new DC(H,Dt,Ke,_e),w=new kC(H,b,Dt,Ke),xe=new FC(H,we,Ue),te=new wC(ze),Z=new KR(x,qe,At,ue,we,_e,te),ae=new vb(x,ze),oe=new JR,P=new sb(ue,we),q=new SC(x,qe,At,Ee,w,h,l),ie=new cb(x,w,we),Re=new xb(H,Ke,we,Ee),Ae=new EC(H,ue,Ke,we),Te=new UC(H,ue,Ke,we),Ke.programs=Z.programs,x.capabilities=we,x.extensions=ue,x.properties=ze,x.renderLists=oe,x.shadowMap=ie,x.state=Ee,x.info=Ke}Ve();const I=new _b(x,H);this.xr=I,this.getContext=function(){return H},this.getContextAttributes=function(){return H.getContextAttributes()},this.forceContextLoss=function(){const R=ue.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=ue.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return W},this.setPixelRatio=function(R){R!==void 0&&(W=R,this.setSize(z,$,!1))},this.getSize=function(R){return R.set(z,$)},this.setSize=function(R,j,Q=!0){if(I.isPresenting){console.warn("THREE.WebGLRenderer: Can't change size while VR device is presenting.");return}z=R,$=j,t.width=Math.floor(R*W),t.height=Math.floor(j*W),Q===!0&&(t.style.width=R+"px",t.style.height=j+"px"),this.setViewport(0,0,R,j)},this.getDrawingBufferSize=function(R){return R.set(z*W,$*W).floor()},this.setDrawingBufferSize=function(R,j,Q){z=R,$=j,W=Q,t.width=Math.floor(R*Q),t.height=Math.floor(j*Q),this.setViewport(0,0,R,j)},this.getCurrentViewport=function(R){return R.copy(T)},this.getViewport=function(R){return R.copy(G)},this.setViewport=function(R,j,Q,V){R.isVector4?G.set(R.x,R.y,R.z,R.w):G.set(R,j,Q,V),Ee.viewport(T.copy(G).multiplyScalar(W).floor())},this.getScissor=function(R){return R.copy(se)},this.setScissor=function(R,j,Q,V){R.isVector4?se.set(R.x,R.y,R.z,R.w):se.set(R,j,Q,V),Ee.scissor(U.copy(se).multiplyScalar(W).floor())},this.getScissorTest=function(){return F},this.setScissorTest=function(R){Ee.setScissorTest(F=R)},this.setOpaqueSort=function(R){D=R},this.setTransparentSort=function(R){X=R},this.getClearColor=function(R){return R.copy(q.getClearColor())},this.setClearColor=function(){q.setClearColor.apply(q,arguments)},this.getClearAlpha=function(){return q.getClearAlpha()},this.setClearAlpha=function(){q.setClearAlpha.apply(q,arguments)},this.clear=function(R=!0,j=!0,Q=!0){let V=0;if(R){let J=!1;if(A!==null){const ve=A.texture.format;J=ve===px||ve===hx||ve===dx}if(J){const ve=A.texture.type,Ce=ve===Er||ve===ur||ve===op||ve===ss||ve===cx||ve===fx,Pe=q.getClearColor(),Le=q.getClearAlpha(),He=Pe.r,Ne=Pe.g,Oe=Pe.b,nt=ze.get(A).__webglFramebuffer;Ce?(p[0]=He,p[1]=Ne,p[2]=Oe,p[3]=Le,H.clearBufferuiv(H.COLOR,nt,p)):(v[0]=He,v[1]=Ne,v[2]=Oe,v[3]=Le,H.clearBufferiv(H.COLOR,nt,v))}else V|=H.COLOR_BUFFER_BIT}j&&(V|=H.DEPTH_BUFFER_BIT),Q&&(V|=H.STENCIL_BUFFER_BIT),H.clear(V)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",Y,!1),t.removeEventListener("webglcontextcreationerror",ce,!1),oe.dispose(),P.dispose(),ze.dispose(),qe.dispose(),At.dispose(),w.dispose(),_e.dispose(),Re.dispose(),Z.dispose(),I.dispose(),I.removeEventListener("sessionstart",ht),I.removeEventListener("sessionend",fi),le&&(le.dispose(),le=null),Zt.stop()};function he(R){R.preventDefault(),console.log("THREE.WebGLRenderer: Context Lost."),y=!0}function Y(){console.log("THREE.WebGLRenderer: Context Restored."),y=!1;const R=Ke.autoReset,j=ie.enabled,Q=ie.autoUpdate,V=ie.needsUpdate,J=ie.type;Ve(),Ke.autoReset=R,ie.enabled=j,ie.autoUpdate=Q,ie.needsUpdate=V,ie.type=J}function ce(R){console.error("THREE.WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function me(R){const j=R.target;j.removeEventListener("dispose",me),Ye(j)}function Ye(R){dt(R),ze.remove(R)}function dt(R){const j=ze.get(R).programs;j!==void 0&&(j.forEach(function(Q){Z.releaseProgram(Q)}),R.isShaderMaterial&&Z.releaseShaderCache(R))}this.renderBufferDirect=function(R,j,Q,V,J,ve){j===null&&(j=$e);const Ce=J.isMesh&&J.matrixWorld.determinant()<0,Pe=ky(R,j,Q,V,J);Ee.setMaterial(V,Ce);let Le=Q.index,He=1;V.wireframe===!0&&(Le=b.getWireframeAttribute(Q),He=2);const Ne=Q.drawRange,Oe=Q.attributes.position;let nt=Ne.start*He,_t=(Ne.start+Ne.count)*He;ve!==null&&(nt=Math.max(nt,ve.start*He),_t=Math.min(_t,(ve.start+ve.count)*He)),Le!==null?(nt=Math.max(nt,0),_t=Math.min(_t,Le.count)):Oe!=null&&(nt=Math.max(nt,0),_t=Math.min(_t,Oe.count));const $n=_t-nt;if($n<0||$n===1/0)return;_e.setup(J,V,Pe,Q,Le);let wi,St=Ae;if(Le!==null&&(wi=Dt.get(Le),St=Te,St.setIndex(wi)),J.isMesh)V.wireframe===!0?(Ee.setLineWidth(V.wireframeLinewidth*be()),St.setMode(H.LINES)):St.setMode(H.TRIANGLES);else if(J.isLine){let je=V.linewidth;je===void 0&&(je=1),Ee.setLineWidth(je*be()),J.isLineSegments?St.setMode(H.LINES):J.isLineLoop?St.setMode(H.LINE_LOOP):St.setMode(H.LINE_STRIP)}else J.isPoints?St.setMode(H.POINTS):J.isSprite&&St.setMode(H.TRIANGLES);if(J.isInstancedMesh)St.renderInstances(nt,$n,J.count);else if(Q.isInstancedBufferGeometry){const je=Q._maxInstanceCount!==void 0?Q._maxInstanceCount:1/0,yc=Math.min(Q.instanceCount,je);St.renderInstances(nt,$n,yc)}else St.render(nt,$n)},this.compile=function(R,j){function Q(V,J,ve){V.transparent===!0&&V.side===Fi&&V.forceSinglePass===!1?(V.side=hn,V.needsUpdate=!0,ul(V,J,ve),V.side=br,V.needsUpdate=!0,ul(V,J,ve),V.side=Fi):ul(V,J,ve)}m=P.get(R),m.init(),_.push(m),R.traverseVisible(function(V){V.isLight&&V.layers.test(j.layers)&&(m.pushLight(V),V.castShadow&&m.pushShadow(V))}),m.setupLights(x.useLegacyLights),R.traverse(function(V){const J=V.material;if(J)if(Array.isArray(J))for(let ve=0;ve<J.length;ve++){const Ce=J[ve];Q(Ce,R,V)}else Q(J,R,V)}),_.pop(),m=null};let yt=null;function Fr(R){yt&&yt(R)}function ht(){Zt.stop()}function fi(){Zt.start()}const Zt=new Px;Zt.setAnimationLoop(Fr),typeof self<"u"&&Zt.setContext(self),this.setAnimationLoop=function(R){yt=R,I.setAnimationLoop(R),R===null?Zt.stop():Zt.start()},I.addEventListener("sessionstart",ht),I.addEventListener("sessionend",fi),this.render=function(R,j){if(j!==void 0&&j.isCamera!==!0){console.error("THREE.WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(y===!0)return;R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),j.parent===null&&j.matrixWorldAutoUpdate===!0&&j.updateMatrixWorld(),I.enabled===!0&&I.isPresenting===!0&&(j=I.updateCameraXR(j)),R.isScene===!0&&R.onBeforeRender(x,R,j,A),m=P.get(R,_.length),m.init(),_.push(m),de.multiplyMatrices(j.projectionMatrix,j.matrixWorldInverse),ee.setFromProjectionMatrix(de),re=this.localClippingEnabled,K=te.init(this.clippingPlanes,re),g=oe.get(R,f.length),g.init(),f.push(g),bp(R,j,0,x.sortObjects),g.finish(),x.sortObjects===!0&&g.sort(D,X),K===!0&&te.beginShadows();const Q=m.state.shadowsArray;if(ie.render(Q,R,j),K===!0&&te.endShadows(),this.info.autoReset===!0&&this.info.reset(),this.info.render.frame++,q.render(g,R),m.setupLights(x.useLegacyLights),j.isArrayCamera){const V=j.cameras;for(let J=0,ve=V.length;J<ve;J++){const Ce=V[J];Pp(g,R,Ce,Ce.viewport)}}else Pp(g,R,j);A!==null&&(Ue.updateMultisampleRenderTarget(A),Ue.updateRenderTargetMipmap(A)),R.isScene===!0&&R.onAfterRender(x,R,j),_e.resetDefaultState(),C=-1,M=null,_.pop(),_.length>0?m=_[_.length-1]:m=null,f.pop(),f.length>0?g=f[f.length-1]:g=null};function bp(R,j,Q,V){if(R.visible===!1)return;if(R.layers.test(j.layers)){if(R.isGroup)Q=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(j);else if(R.isLight)m.pushLight(R),R.castShadow&&m.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||ee.intersectsSprite(R)){V&&ye.setFromMatrixPosition(R.matrixWorld).applyMatrix4(de);const Ce=w.update(R),Pe=R.material;Pe.visible&&g.push(R,Ce,Pe,Q,ye.z,null)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||ee.intersectsObject(R))){R.isSkinnedMesh&&R.skeleton.frame!==Ke.render.frame&&(R.skeleton.update(),R.skeleton.frame=Ke.render.frame);const Ce=w.update(R),Pe=R.material;if(V&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),ye.copy(R.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),ye.copy(Ce.boundingSphere.center)),ye.applyMatrix4(R.matrixWorld).applyMatrix4(de)),Array.isArray(Pe)){const Le=Ce.groups;for(let He=0,Ne=Le.length;He<Ne;He++){const Oe=Le[He],nt=Pe[Oe.materialIndex];nt&&nt.visible&&g.push(R,Ce,nt,Q,ye.z,Oe)}}else Pe.visible&&g.push(R,Ce,Pe,Q,ye.z,null)}}const ve=R.children;for(let Ce=0,Pe=ve.length;Ce<Pe;Ce++)bp(ve[Ce],j,Q,V)}function Pp(R,j,Q,V){const J=R.opaque,ve=R.transmissive,Ce=R.transparent;m.setupLightsView(Q),K===!0&&te.setGlobalState(x.clippingPlanes,Q),ve.length>0&&Fy(J,ve,j,Q),V&&Ee.viewport(T.copy(V)),J.length>0&&ll(J,j,Q),ve.length>0&&ll(ve,j,Q),Ce.length>0&&ll(Ce,j,Q),Ee.buffers.depth.setTest(!0),Ee.buffers.depth.setMask(!0),Ee.buffers.color.setMask(!0),Ee.setPolygonOffset(!1)}function Fy(R,j,Q,V){const J=we.isWebGL2;le===null&&(le=new vs(1,1,{generateMipmaps:!0,type:ue.has("EXT_color_buffer_half_float")?Wa:Er,minFilter:Ga,samples:J&&a===!0?4:0})),x.getDrawingBufferSize(Me),J?le.setSize(Me.x,Me.y):le.setSize(Wd(Me.x),Wd(Me.y));const ve=x.getRenderTarget();x.setRenderTarget(le),x.getClearColor(L),N=x.getClearAlpha(),N<1&&x.setClearColor(16777215,.5),x.clear();const Ce=x.toneMapping;x.toneMapping=Gi,ll(R,Q,V),Ue.updateMultisampleRenderTarget(le),Ue.updateRenderTargetMipmap(le);let Pe=!1;for(let Le=0,He=j.length;Le<He;Le++){const Ne=j[Le],Oe=Ne.object,nt=Ne.geometry,_t=Ne.material,$n=Ne.group;if(_t.side===Fi&&Oe.layers.test(V.layers)){const wi=_t.side;_t.side=hn,_t.needsUpdate=!0,Lp(Oe,Q,V,nt,_t,$n),_t.side=wi,_t.needsUpdate=!0,Pe=!0}}Pe===!0&&(Ue.updateMultisampleRenderTarget(le),Ue.updateRenderTargetMipmap(le)),x.setRenderTarget(ve),x.setClearColor(L,N),x.toneMapping=Ce}function ll(R,j,Q){const V=j.isScene===!0?j.overrideMaterial:null;for(let J=0,ve=R.length;J<ve;J++){const Ce=R[J],Pe=Ce.object,Le=Ce.geometry,He=V===null?Ce.material:V,Ne=Ce.group;Pe.layers.test(Q.layers)&&Lp(Pe,j,Q,Le,He,Ne)}}function Lp(R,j,Q,V,J,ve){R.onBeforeRender(x,j,Q,V,J,ve),R.modelViewMatrix.multiplyMatrices(Q.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),J.onBeforeRender(x,j,Q,V,R,ve),J.transparent===!0&&J.side===Fi&&J.forceSinglePass===!1?(J.side=hn,J.needsUpdate=!0,x.renderBufferDirect(Q,j,V,J,R,ve),J.side=br,J.needsUpdate=!0,x.renderBufferDirect(Q,j,V,J,R,ve),J.side=Fi):x.renderBufferDirect(Q,j,V,J,R,ve),R.onAfterRender(x,j,Q,V,J,ve)}function ul(R,j,Q){j.isScene!==!0&&(j=$e);const V=ze.get(R),J=m.state.lights,ve=m.state.shadowsArray,Ce=J.state.version,Pe=Z.getParameters(R,J.state,ve,j,Q),Le=Z.getProgramCacheKey(Pe);let He=V.programs;V.environment=R.isMeshStandardMaterial?j.environment:null,V.fog=j.fog,V.envMap=(R.isMeshStandardMaterial?At:qe).get(R.envMap||V.environment),He===void 0&&(R.addEventListener("dispose",me),He=new Map,V.programs=He);let Ne=He.get(Le);if(Ne!==void 0){if(V.currentProgram===Ne&&V.lightsStateVersion===Ce)return Dp(R,Pe),Ne}else Pe.uniforms=Z.getUniforms(R),R.onBuild(Q,Pe,x),R.onBeforeCompile(Pe,x),Ne=Z.acquireProgram(Pe,Le),He.set(Le,Ne),V.uniforms=Pe.uniforms;const Oe=V.uniforms;(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Oe.clippingPlanes=te.uniform),Dp(R,Pe),V.needsLights=By(R),V.lightsStateVersion=Ce,V.needsLights&&(Oe.ambientLightColor.value=J.state.ambient,Oe.lightProbe.value=J.state.probe,Oe.directionalLights.value=J.state.directional,Oe.directionalLightShadows.value=J.state.directionalShadow,Oe.spotLights.value=J.state.spot,Oe.spotLightShadows.value=J.state.spotShadow,Oe.rectAreaLights.value=J.state.rectArea,Oe.ltc_1.value=J.state.rectAreaLTC1,Oe.ltc_2.value=J.state.rectAreaLTC2,Oe.pointLights.value=J.state.point,Oe.pointLightShadows.value=J.state.pointShadow,Oe.hemisphereLights.value=J.state.hemi,Oe.directionalShadowMap.value=J.state.directionalShadowMap,Oe.directionalShadowMatrix.value=J.state.directionalShadowMatrix,Oe.spotShadowMap.value=J.state.spotShadowMap,Oe.spotLightMatrix.value=J.state.spotLightMatrix,Oe.spotLightMap.value=J.state.spotLightMap,Oe.pointShadowMap.value=J.state.pointShadowMap,Oe.pointShadowMatrix.value=J.state.pointShadowMatrix);const nt=Ne.getUniforms(),_t=uu.seqWithValue(nt.seq,Oe);return V.currentProgram=Ne,V.uniformsList=_t,Ne}function Dp(R,j){const Q=ze.get(R);Q.outputColorSpace=j.outputColorSpace,Q.instancing=j.instancing,Q.skinning=j.skinning,Q.morphTargets=j.morphTargets,Q.morphNormals=j.morphNormals,Q.morphColors=j.morphColors,Q.morphTargetsCount=j.morphTargetsCount,Q.numClippingPlanes=j.numClippingPlanes,Q.numIntersection=j.numClipIntersection,Q.vertexAlphas=j.vertexAlphas,Q.vertexTangents=j.vertexTangents,Q.toneMapping=j.toneMapping}function ky(R,j,Q,V,J){j.isScene!==!0&&(j=$e),Ue.resetTextureUnits();const ve=j.fog,Ce=V.isMeshStandardMaterial?j.environment:null,Pe=A===null?x.outputColorSpace:A.isXRRenderTarget===!0?A.texture.colorSpace:Ei,Le=(V.isMeshStandardMaterial?At:qe).get(V.envMap||Ce),He=V.vertexColors===!0&&!!Q.attributes.color&&Q.attributes.color.itemSize===4,Ne=!!Q.attributes.tangent&&(!!V.normalMap||V.anisotropy>0),Oe=!!Q.morphAttributes.position,nt=!!Q.morphAttributes.normal,_t=!!Q.morphAttributes.color,$n=V.toneMapped?x.toneMapping:Gi,wi=Q.morphAttributes.position||Q.morphAttributes.normal||Q.morphAttributes.color,St=wi!==void 0?wi.length:0,je=ze.get(V),yc=m.state.lights;if(K===!0&&(re===!0||R!==M)){const xn=R===M&&V.id===C;te.setState(V,R,xn)}let Ut=!1;V.version===je.__version?(je.needsLights&&je.lightsStateVersion!==yc.state.version||je.outputColorSpace!==Pe||J.isInstancedMesh&&je.instancing===!1||!J.isInstancedMesh&&je.instancing===!0||J.isSkinnedMesh&&je.skinning===!1||!J.isSkinnedMesh&&je.skinning===!0||je.envMap!==Le||V.fog===!0&&je.fog!==ve||je.numClippingPlanes!==void 0&&(je.numClippingPlanes!==te.numPlanes||je.numIntersection!==te.numIntersection)||je.vertexAlphas!==He||je.vertexTangents!==Ne||je.morphTargets!==Oe||je.morphNormals!==nt||je.morphColors!==_t||je.toneMapping!==$n||we.isWebGL2===!0&&je.morphTargetsCount!==St)&&(Ut=!0):(Ut=!0,je.__version=V.version);let kr=je.currentProgram;Ut===!0&&(kr=ul(V,j,J));let Up=!1,Go=!1,Sc=!1;const Qt=kr.getUniforms(),zr=je.uniforms;if(Ee.useProgram(kr.program)&&(Up=!0,Go=!0,Sc=!0),V.id!==C&&(C=V.id,Go=!0),Up||M!==R){if(Qt.setValue(H,"projectionMatrix",R.projectionMatrix),we.logarithmicDepthBuffer&&Qt.setValue(H,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),M!==R&&(M=R,Go=!0,Sc=!0),V.isShaderMaterial||V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshStandardMaterial||V.envMap){const xn=Qt.map.cameraPosition;xn!==void 0&&xn.setValue(H,ye.setFromMatrixPosition(R.matrixWorld))}(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial)&&Qt.setValue(H,"isOrthographic",R.isOrthographicCamera===!0),(V.isMeshPhongMaterial||V.isMeshToonMaterial||V.isMeshLambertMaterial||V.isMeshBasicMaterial||V.isMeshStandardMaterial||V.isShaderMaterial||V.isShadowMaterial||J.isSkinnedMesh)&&Qt.setValue(H,"viewMatrix",R.matrixWorldInverse)}if(J.isSkinnedMesh){Qt.setOptional(H,J,"bindMatrix"),Qt.setOptional(H,J,"bindMatrixInverse");const xn=J.skeleton;xn&&(we.floatVertexTextures?(xn.boneTexture===null&&xn.computeBoneTexture(),Qt.setValue(H,"boneTexture",xn.boneTexture,Ue),Qt.setValue(H,"boneTextureSize",xn.boneTextureSize)):console.warn("THREE.WebGLRenderer: SkinnedMesh can only be used with WebGL 2. With WebGL 1 OES_texture_float and vertex textures support is required."))}const Mc=Q.morphAttributes;if((Mc.position!==void 0||Mc.normal!==void 0||Mc.color!==void 0&&we.isWebGL2===!0)&&xe.update(J,Q,kr),(Go||je.receiveShadow!==J.receiveShadow)&&(je.receiveShadow=J.receiveShadow,Qt.setValue(H,"receiveShadow",J.receiveShadow)),V.isMeshGouraudMaterial&&V.envMap!==null&&(zr.envMap.value=Le,zr.flipEnvMap.value=Le.isCubeTexture&&Le.isRenderTargetTexture===!1?-1:1),Go&&(Qt.setValue(H,"toneMappingExposure",x.toneMappingExposure),je.needsLights&&zy(zr,Sc),ve&&V.fog===!0&&ae.refreshFogUniforms(zr,ve),ae.refreshMaterialUniforms(zr,V,W,$,le),uu.upload(H,je.uniformsList,zr,Ue)),V.isShaderMaterial&&V.uniformsNeedUpdate===!0&&(uu.upload(H,je.uniformsList,zr,Ue),V.uniformsNeedUpdate=!1),V.isSpriteMaterial&&Qt.setValue(H,"center",J.center),Qt.setValue(H,"modelViewMatrix",J.modelViewMatrix),Qt.setValue(H,"normalMatrix",J.normalMatrix),Qt.setValue(H,"modelMatrix",J.matrixWorld),V.isShaderMaterial||V.isRawShaderMaterial){const xn=V.uniformsGroups;for(let Ec=0,Hy=xn.length;Ec<Hy;Ec++)if(we.isWebGL2){const Np=xn[Ec];Re.update(Np,kr),Re.bind(Np,kr)}else console.warn("THREE.WebGLRenderer: Uniform Buffer Objects can only be used with WebGL 2.")}return kr}function zy(R,j){R.ambientLightColor.needsUpdate=j,R.lightProbe.needsUpdate=j,R.directionalLights.needsUpdate=j,R.directionalLightShadows.needsUpdate=j,R.pointLights.needsUpdate=j,R.pointLightShadows.needsUpdate=j,R.spotLights.needsUpdate=j,R.spotLightShadows.needsUpdate=j,R.rectAreaLights.needsUpdate=j,R.hemisphereLights.needsUpdate=j}function By(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return S},this.getActiveMipmapLevel=function(){return E},this.getRenderTarget=function(){return A},this.setRenderTargetTextures=function(R,j,Q){ze.get(R.texture).__webglTexture=j,ze.get(R.depthTexture).__webglTexture=Q;const V=ze.get(R);V.__hasExternalTextures=!0,V.__hasExternalTextures&&(V.__autoAllocateDepthBuffer=Q===void 0,V.__autoAllocateDepthBuffer||ue.has("WEBGL_multisampled_render_to_texture")===!0&&(console.warn("THREE.WebGLRenderer: Render-to-texture extension was disabled because an external texture was provided"),V.__useRenderToTexture=!1))},this.setRenderTargetFramebuffer=function(R,j){const Q=ze.get(R);Q.__webglFramebuffer=j,Q.__useDefaultFramebuffer=j===void 0},this.setRenderTarget=function(R,j=0,Q=0){A=R,S=j,E=Q;let V=!0,J=null,ve=!1,Ce=!1;if(R){const Le=ze.get(R);Le.__useDefaultFramebuffer!==void 0?(Ee.bindFramebuffer(H.FRAMEBUFFER,null),V=!1):Le.__webglFramebuffer===void 0?Ue.setupRenderTarget(R):Le.__hasExternalTextures&&Ue.rebindTextures(R,ze.get(R.texture).__webglTexture,ze.get(R.depthTexture).__webglTexture);const He=R.texture;(He.isData3DTexture||He.isDataArrayTexture||He.isCompressedArrayTexture)&&(Ce=!0);const Ne=ze.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(J=Ne[j],ve=!0):we.isWebGL2&&R.samples>0&&Ue.useMultisampledRTT(R)===!1?J=ze.get(R).__webglMultisampledFramebuffer:J=Ne,T.copy(R.viewport),U.copy(R.scissor),O=R.scissorTest}else T.copy(G).multiplyScalar(W).floor(),U.copy(se).multiplyScalar(W).floor(),O=F;if(Ee.bindFramebuffer(H.FRAMEBUFFER,J)&&we.drawBuffers&&V&&Ee.drawBuffers(R,J),Ee.viewport(T),Ee.scissor(U),Ee.setScissorTest(O),ve){const Le=ze.get(R.texture);H.framebufferTexture2D(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,H.TEXTURE_CUBE_MAP_POSITIVE_X+j,Le.__webglTexture,Q)}else if(Ce){const Le=ze.get(R.texture),He=j||0;H.framebufferTextureLayer(H.FRAMEBUFFER,H.COLOR_ATTACHMENT0,Le.__webglTexture,Q||0,He)}C=-1},this.readRenderTargetPixels=function(R,j,Q,V,J,ve,Ce){if(!(R&&R.isWebGLRenderTarget)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Pe=ze.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ce!==void 0&&(Pe=Pe[Ce]),Pe){Ee.bindFramebuffer(H.FRAMEBUFFER,Pe);try{const Le=R.texture,He=Le.format,Ne=Le.type;if(He!==oi&&Se.convert(He)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_FORMAT)){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}const Oe=Ne===Wa&&(ue.has("EXT_color_buffer_half_float")||we.isWebGL2&&ue.has("EXT_color_buffer_float"));if(Ne!==Er&&Se.convert(Ne)!==H.getParameter(H.IMPLEMENTATION_COLOR_READ_TYPE)&&!(Ne===cr&&(we.isWebGL2||ue.has("OES_texture_float")||ue.has("WEBGL_color_buffer_float")))&&!Oe){console.error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}j>=0&&j<=R.width-V&&Q>=0&&Q<=R.height-J&&H.readPixels(j,Q,V,J,Se.convert(He),Se.convert(Ne),ve)}finally{const Le=A!==null?ze.get(A).__webglFramebuffer:null;Ee.bindFramebuffer(H.FRAMEBUFFER,Le)}}},this.copyFramebufferToTexture=function(R,j,Q=0){const V=Math.pow(2,-Q),J=Math.floor(j.image.width*V),ve=Math.floor(j.image.height*V);Ue.setTexture2D(j,0),H.copyTexSubImage2D(H.TEXTURE_2D,Q,0,0,R.x,R.y,J,ve),Ee.unbindTexture()},this.copyTextureToTexture=function(R,j,Q,V=0){const J=j.image.width,ve=j.image.height,Ce=Se.convert(Q.format),Pe=Se.convert(Q.type);Ue.setTexture2D(Q,0),H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,Q.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,Q.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,Q.unpackAlignment),j.isDataTexture?H.texSubImage2D(H.TEXTURE_2D,V,R.x,R.y,J,ve,Ce,Pe,j.image.data):j.isCompressedTexture?H.compressedTexSubImage2D(H.TEXTURE_2D,V,R.x,R.y,j.mipmaps[0].width,j.mipmaps[0].height,Ce,j.mipmaps[0].data):H.texSubImage2D(H.TEXTURE_2D,V,R.x,R.y,Ce,Pe,j.image),V===0&&Q.generateMipmaps&&H.generateMipmap(H.TEXTURE_2D),Ee.unbindTexture()},this.copyTextureToTexture3D=function(R,j,Q,V,J=0){if(x.isWebGL1Renderer){console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: can only be used with WebGL2.");return}const ve=R.max.x-R.min.x+1,Ce=R.max.y-R.min.y+1,Pe=R.max.z-R.min.z+1,Le=Se.convert(V.format),He=Se.convert(V.type);let Ne;if(V.isData3DTexture)Ue.setTexture3D(V,0),Ne=H.TEXTURE_3D;else if(V.isDataArrayTexture)Ue.setTexture2DArray(V,0),Ne=H.TEXTURE_2D_ARRAY;else{console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: only supports THREE.DataTexture3D and THREE.DataTexture2DArray.");return}H.pixelStorei(H.UNPACK_FLIP_Y_WEBGL,V.flipY),H.pixelStorei(H.UNPACK_PREMULTIPLY_ALPHA_WEBGL,V.premultiplyAlpha),H.pixelStorei(H.UNPACK_ALIGNMENT,V.unpackAlignment);const Oe=H.getParameter(H.UNPACK_ROW_LENGTH),nt=H.getParameter(H.UNPACK_IMAGE_HEIGHT),_t=H.getParameter(H.UNPACK_SKIP_PIXELS),$n=H.getParameter(H.UNPACK_SKIP_ROWS),wi=H.getParameter(H.UNPACK_SKIP_IMAGES),St=Q.isCompressedTexture?Q.mipmaps[0]:Q.image;H.pixelStorei(H.UNPACK_ROW_LENGTH,St.width),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,St.height),H.pixelStorei(H.UNPACK_SKIP_PIXELS,R.min.x),H.pixelStorei(H.UNPACK_SKIP_ROWS,R.min.y),H.pixelStorei(H.UNPACK_SKIP_IMAGES,R.min.z),Q.isDataTexture||Q.isData3DTexture?H.texSubImage3D(Ne,J,j.x,j.y,j.z,ve,Ce,Pe,Le,He,St.data):Q.isCompressedArrayTexture?(console.warn("THREE.WebGLRenderer.copyTextureToTexture3D: untested support for compressed srcTexture."),H.compressedTexSubImage3D(Ne,J,j.x,j.y,j.z,ve,Ce,Pe,Le,St.data)):H.texSubImage3D(Ne,J,j.x,j.y,j.z,ve,Ce,Pe,Le,He,St),H.pixelStorei(H.UNPACK_ROW_LENGTH,Oe),H.pixelStorei(H.UNPACK_IMAGE_HEIGHT,nt),H.pixelStorei(H.UNPACK_SKIP_PIXELS,_t),H.pixelStorei(H.UNPACK_SKIP_ROWS,$n),H.pixelStorei(H.UNPACK_SKIP_IMAGES,wi),J===0&&V.generateMipmaps&&H.generateMipmap(Ne),Ee.unbindTexture()},this.initTexture=function(R){R.isCubeTexture?Ue.setTextureCube(R,0):R.isData3DTexture?Ue.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?Ue.setTexture2DArray(R,0):Ue.setTexture2D(R,0),Ee.unbindTexture()},this.resetState=function(){S=0,E=0,A=null,Ee.reset(),_e.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Bi}get physicallyCorrectLights(){return console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),!this.useLegacyLights}set physicallyCorrectLights(e){console.warn("THREE.WebGLRenderer: the property .physicallyCorrectLights has been removed. Set renderer.useLegacyLights instead."),this.useLegacyLights=!e}get outputEncoding(){return console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace===Fe?as:mx}set outputEncoding(e){console.warn("THREE.WebGLRenderer: Property .outputEncoding has been removed. Use .outputColorSpace instead."),this.outputColorSpace=e===as?Fe:Ei}}class Sb extends Ix{}Sb.prototype.isWebGL1Renderer=!0;class Mb extends pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(t.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(t.object.backgroundIntensity=this.backgroundIntensity),t}get autoUpdate(){return console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate}set autoUpdate(e){console.warn("THREE.Scene: autoUpdate was renamed to matrixWorldAutoUpdate in r144."),this.matrixWorldAutoUpdate=e}}class fp extends Ir{constructor(e=1,t=32,i=16,r=0,s=Math.PI*2,o=0,a=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:i,phiStart:r,phiLength:s,thetaStart:o,thetaLength:a},t=Math.max(3,Math.floor(t)),i=Math.max(2,Math.floor(i));const l=Math.min(o+a,Math.PI);let u=0;const c=[],d=new B,h=new B,p=[],v=[],g=[],m=[];for(let f=0;f<=i;f++){const _=[],x=f/i;let y=0;f===0&&o===0?y=.5/t:f===i&&l===Math.PI&&(y=-.5/t);for(let S=0;S<=t;S++){const E=S/t;d.x=-e*Math.cos(r+E*s)*Math.sin(o+x*a),d.y=e*Math.cos(o+x*a),d.z=e*Math.sin(r+E*s)*Math.sin(o+x*a),v.push(d.x,d.y,d.z),h.copy(d).normalize(),g.push(h.x,h.y,h.z),m.push(E+y,1-x),_.push(u++)}c.push(_)}for(let f=0;f<i;f++)for(let _=0;_<t;_++){const x=c[f][_+1],y=c[f][_],S=c[f+1][_],E=c[f+1][_+1];(f!==0||o>0)&&p.push(x,y,E),(f!==i-1||l<Math.PI)&&p.push(y,S,E)}this.setIndex(p),this.setAttribute("position",new Si(v,3)),this.setAttribute("normal",new Si(g,3)),this.setAttribute("uv",new Si(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new fp(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Eb extends sl{constructor(e){super(),this.isMeshStandardMaterial=!0,this.defines={STANDARD:""},this.type="MeshStandardMaterial",this.color=new Qe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Qe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=gx,this.normalScale=new Ie(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Tb extends pn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Qe(e),this.intensity=t}dispose(){}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,this.groundColor!==void 0&&(t.object.groundColor=this.groundColor.getHex()),this.distance!==void 0&&(t.object.distance=this.distance),this.angle!==void 0&&(t.object.angle=this.angle),this.decay!==void 0&&(t.object.decay=this.decay),this.penumbra!==void 0&&(t.object.penumbra=this.penumbra),this.shadow!==void 0&&(t.object.shadow=this.shadow.toJSON()),t}}const Rf=new wt,h_=new B,p_=new B;class wb{constructor(e){this.camera=e,this.bias=0,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new Ie(512,512),this.map=null,this.mapPass=null,this.matrix=new wt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new lp,this._frameExtents=new Ie(1,1),this._viewportCount=1,this._viewports=[new ot(0,0,1,1)]}getViewportCount(){return this._viewportCount}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera,i=this.matrix;h_.setFromMatrixPosition(e.matrixWorld),t.position.copy(h_),p_.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(p_),t.updateMatrixWorld(),Rf.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),this._frustum.setFromProjectionMatrix(Rf),i.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),i.multiply(Rf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.bias=e.bias,this.radius=e.radius,this.mapSize.copy(e.mapSize),this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return this.bias!==0&&(e.bias=this.bias),this.normalBias!==0&&(e.normalBias=this.normalBias),this.radius!==1&&(e.radius=this.radius),(this.mapSize.x!==512||this.mapSize.y!==512)&&(e.mapSize=this.mapSize.toArray()),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const m_=new wt,na=new B,bf=new B;class Ab extends wb{constructor(){super(new wn(90,1,.5,500)),this.isPointLightShadow=!0,this._frameExtents=new Ie(4,2),this._viewportCount=6,this._viewports=[new ot(2,1,1,1),new ot(0,1,1,1),new ot(3,1,1,1),new ot(1,1,1,1),new ot(3,0,1,1),new ot(1,0,1,1)],this._cubeDirections=[new B(1,0,0),new B(-1,0,0),new B(0,0,1),new B(0,0,-1),new B(0,1,0),new B(0,-1,0)],this._cubeUps=[new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,1,0),new B(0,0,1),new B(0,0,-1)]}updateMatrices(e,t=0){const i=this.camera,r=this.matrix,s=e.distance||i.far;s!==i.far&&(i.far=s,i.updateProjectionMatrix()),na.setFromMatrixPosition(e.matrixWorld),i.position.copy(na),bf.copy(i.position),bf.add(this._cubeDirections[t]),i.up.copy(this._cubeUps[t]),i.lookAt(bf),i.updateMatrixWorld(),r.makeTranslation(-na.x,-na.y,-na.z),m_.multiplyMatrices(i.projectionMatrix,i.matrixWorldInverse),this._frustum.setFromProjectionMatrix(m_)}}class Cb extends Tb{constructor(e,t,i=0,r=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=r,this.shadow=new Ab}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}}class g_{constructor(e=1,t=0,i=0){return this.radius=e,this.phi=t,this.theta=i,this}set(e,t,i){return this.radius=e,this.phi=t,this.theta=i,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Math.max(1e-6,Math.min(Math.PI-1e-6,this.phi)),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,i){return this.radius=Math.sqrt(e*e+t*t+i*i),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,i),this.phi=Math.acos(nn(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:sp}}));typeof window<"u"&&(window.__THREE__?console.warn("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=sp);const __={type:"change"},Pf={type:"start"},v_={type:"end"};class Rb extends Ts{constructor(e,t){super(),this.object=e,this.domElement=t,this.domElement.style.touchAction="none",this.enabled=!0,this.target=new B,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Cs.ROTATE,MIDDLE:Cs.DOLLY,RIGHT:Cs.PAN},this.touches={ONE:Rs.ROTATE,TWO:Rs.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return a.phi},this.getAzimuthalAngle=function(){return a.theta},this.getDistance=function(){return this.object.position.distanceTo(this.target)},this.listenToKeyEvents=function(P){P.addEventListener("keydown",qe),this._domElementKeyEvents=P},this.stopListenToKeyEvents=function(){this._domElementKeyEvents.removeEventListener("keydown",qe),this._domElementKeyEvents=null},this.saveState=function(){i.target0.copy(i.target),i.position0.copy(i.object.position),i.zoom0=i.object.zoom},this.reset=function(){i.target.copy(i.target0),i.object.position.copy(i.position0),i.object.zoom=i.zoom0,i.object.updateProjectionMatrix(),i.dispatchEvent(__),i.update(),s=r.NONE},this.update=function(){const P=new B,te=new xs().setFromUnitVectors(e.up,new B(0,1,0)),ie=te.clone().invert(),q=new B,xe=new xs,Ae=new B,Te=2*Math.PI;return function(){const _e=i.object.position;P.copy(_e).sub(i.target),P.applyQuaternion(te),a.setFromVector3(P),i.autoRotate&&s===r.NONE&&M(A()),i.enableDamping?(a.theta+=l.theta*i.dampingFactor,a.phi+=l.phi*i.dampingFactor):(a.theta+=l.theta,a.phi+=l.phi);let Re=i.minAzimuthAngle,Ve=i.maxAzimuthAngle;return isFinite(Re)&&isFinite(Ve)&&(Re<-Math.PI?Re+=Te:Re>Math.PI&&(Re-=Te),Ve<-Math.PI?Ve+=Te:Ve>Math.PI&&(Ve-=Te),Re<=Ve?a.theta=Math.max(Re,Math.min(Ve,a.theta)):a.theta=a.theta>(Re+Ve)/2?Math.max(Re,a.theta):Math.min(Ve,a.theta)),a.phi=Math.max(i.minPolarAngle,Math.min(i.maxPolarAngle,a.phi)),a.makeSafe(),a.radius*=u,a.radius=Math.max(i.minDistance,Math.min(i.maxDistance,a.radius)),i.enableDamping===!0?i.target.addScaledVector(c,i.dampingFactor):i.target.add(c),P.setFromSpherical(a),P.applyQuaternion(ie),_e.copy(i.target).add(P),i.object.lookAt(i.target),i.enableDamping===!0?(l.theta*=1-i.dampingFactor,l.phi*=1-i.dampingFactor,c.multiplyScalar(1-i.dampingFactor)):(l.set(0,0,0),c.set(0,0,0)),u=1,d||q.distanceToSquared(i.object.position)>o||8*(1-xe.dot(i.object.quaternion))>o||Ae.distanceToSquared(i.target)>0?(i.dispatchEvent(__),q.copy(i.object.position),xe.copy(i.object.quaternion),Ae.copy(i.target),d=!1,!0):!1}}(),this.dispose=function(){i.domElement.removeEventListener("contextmenu",b),i.domElement.removeEventListener("pointerdown",ue),i.domElement.removeEventListener("pointercancel",Ee),i.domElement.removeEventListener("wheel",Ue),i.domElement.removeEventListener("pointermove",we),i.domElement.removeEventListener("pointerup",Ee),i._domElementKeyEvents!==null&&(i._domElementKeyEvents.removeEventListener("keydown",qe),i._domElementKeyEvents=null)};const i=this,r={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6};let s=r.NONE;const o=1e-6,a=new g_,l=new g_;let u=1;const c=new B;let d=!1;const h=new Ie,p=new Ie,v=new Ie,g=new Ie,m=new Ie,f=new Ie,_=new Ie,x=new Ie,y=new Ie,S=[],E={};function A(){return 2*Math.PI/60/60*i.autoRotateSpeed}function C(){return Math.pow(.95,i.zoomSpeed)}function M(P){l.theta-=P}function T(P){l.phi-=P}const U=function(){const P=new B;return function(ie,q){P.setFromMatrixColumn(q,0),P.multiplyScalar(-ie),c.add(P)}}(),O=function(){const P=new B;return function(ie,q){i.screenSpacePanning===!0?P.setFromMatrixColumn(q,1):(P.setFromMatrixColumn(q,0),P.crossVectors(i.object.up,P)),P.multiplyScalar(ie),c.add(P)}}(),L=function(){const P=new B;return function(ie,q){const xe=i.domElement;if(i.object.isPerspectiveCamera){const Ae=i.object.position;P.copy(Ae).sub(i.target);let Te=P.length();Te*=Math.tan(i.object.fov/2*Math.PI/180),U(2*ie*Te/xe.clientHeight,i.object.matrix),O(2*q*Te/xe.clientHeight,i.object.matrix)}else i.object.isOrthographicCamera?(U(ie*(i.object.right-i.object.left)/i.object.zoom/xe.clientWidth,i.object.matrix),O(q*(i.object.top-i.object.bottom)/i.object.zoom/xe.clientHeight,i.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),i.enablePan=!1)}}();function N(P){i.object.isPerspectiveCamera?u/=P:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom*P)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function z(P){i.object.isPerspectiveCamera?u*=P:i.object.isOrthographicCamera?(i.object.zoom=Math.max(i.minZoom,Math.min(i.maxZoom,i.object.zoom/P)),i.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),i.enableZoom=!1)}function $(P){h.set(P.clientX,P.clientY)}function W(P){_.set(P.clientX,P.clientY)}function D(P){g.set(P.clientX,P.clientY)}function X(P){p.set(P.clientX,P.clientY),v.subVectors(p,h).multiplyScalar(i.rotateSpeed);const te=i.domElement;M(2*Math.PI*v.x/te.clientHeight),T(2*Math.PI*v.y/te.clientHeight),h.copy(p),i.update()}function G(P){x.set(P.clientX,P.clientY),y.subVectors(x,_),y.y>0?N(C()):y.y<0&&z(C()),_.copy(x),i.update()}function se(P){m.set(P.clientX,P.clientY),f.subVectors(m,g).multiplyScalar(i.panSpeed),L(f.x,f.y),g.copy(m),i.update()}function F(P){P.deltaY<0?z(C()):P.deltaY>0&&N(C()),i.update()}function ee(P){let te=!1;switch(P.code){case i.keys.UP:P.ctrlKey||P.metaKey||P.shiftKey?T(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):L(0,i.keyPanSpeed),te=!0;break;case i.keys.BOTTOM:P.ctrlKey||P.metaKey||P.shiftKey?T(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):L(0,-i.keyPanSpeed),te=!0;break;case i.keys.LEFT:P.ctrlKey||P.metaKey||P.shiftKey?M(2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):L(i.keyPanSpeed,0),te=!0;break;case i.keys.RIGHT:P.ctrlKey||P.metaKey||P.shiftKey?M(-2*Math.PI*i.rotateSpeed/i.domElement.clientHeight):L(-i.keyPanSpeed,0),te=!0;break}te&&(P.preventDefault(),i.update())}function K(){if(S.length===1)h.set(S[0].pageX,S[0].pageY);else{const P=.5*(S[0].pageX+S[1].pageX),te=.5*(S[0].pageY+S[1].pageY);h.set(P,te)}}function re(){if(S.length===1)g.set(S[0].pageX,S[0].pageY);else{const P=.5*(S[0].pageX+S[1].pageX),te=.5*(S[0].pageY+S[1].pageY);g.set(P,te)}}function le(){const P=S[0].pageX-S[1].pageX,te=S[0].pageY-S[1].pageY,ie=Math.sqrt(P*P+te*te);_.set(0,ie)}function de(){i.enableZoom&&le(),i.enablePan&&re()}function Me(){i.enableZoom&&le(),i.enableRotate&&K()}function ye(P){if(S.length==1)p.set(P.pageX,P.pageY);else{const ie=oe(P),q=.5*(P.pageX+ie.x),xe=.5*(P.pageY+ie.y);p.set(q,xe)}v.subVectors(p,h).multiplyScalar(i.rotateSpeed);const te=i.domElement;M(2*Math.PI*v.x/te.clientHeight),T(2*Math.PI*v.y/te.clientHeight),h.copy(p)}function $e(P){if(S.length===1)m.set(P.pageX,P.pageY);else{const te=oe(P),ie=.5*(P.pageX+te.x),q=.5*(P.pageY+te.y);m.set(ie,q)}f.subVectors(m,g).multiplyScalar(i.panSpeed),L(f.x,f.y),g.copy(m)}function be(P){const te=oe(P),ie=P.pageX-te.x,q=P.pageY-te.y,xe=Math.sqrt(ie*ie+q*q);x.set(0,xe),y.set(0,Math.pow(x.y/_.y,i.zoomSpeed)),N(y.y),_.copy(x)}function H(P){i.enableZoom&&be(P),i.enablePan&&$e(P)}function De(P){i.enableZoom&&be(P),i.enableRotate&&ye(P)}function ue(P){i.enabled!==!1&&(S.length===0&&(i.domElement.setPointerCapture(P.pointerId),i.domElement.addEventListener("pointermove",we),i.domElement.addEventListener("pointerup",Ee)),w(P),P.pointerType==="touch"?At(P):Ke(P))}function we(P){i.enabled!==!1&&(P.pointerType==="touch"?Dt(P):ze(P))}function Ee(P){Z(P),S.length===0&&(i.domElement.releasePointerCapture(P.pointerId),i.domElement.removeEventListener("pointermove",we),i.domElement.removeEventListener("pointerup",Ee)),i.dispatchEvent(v_),s=r.NONE}function Ke(P){let te;switch(P.button){case 0:te=i.mouseButtons.LEFT;break;case 1:te=i.mouseButtons.MIDDLE;break;case 2:te=i.mouseButtons.RIGHT;break;default:te=-1}switch(te){case Cs.DOLLY:if(i.enableZoom===!1)return;W(P),s=r.DOLLY;break;case Cs.ROTATE:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enablePan===!1)return;D(P),s=r.PAN}else{if(i.enableRotate===!1)return;$(P),s=r.ROTATE}break;case Cs.PAN:if(P.ctrlKey||P.metaKey||P.shiftKey){if(i.enableRotate===!1)return;$(P),s=r.ROTATE}else{if(i.enablePan===!1)return;D(P),s=r.PAN}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Pf)}function ze(P){switch(s){case r.ROTATE:if(i.enableRotate===!1)return;X(P);break;case r.DOLLY:if(i.enableZoom===!1)return;G(P);break;case r.PAN:if(i.enablePan===!1)return;se(P);break}}function Ue(P){i.enabled===!1||i.enableZoom===!1||s!==r.NONE||(P.preventDefault(),i.dispatchEvent(Pf),F(P),i.dispatchEvent(v_))}function qe(P){i.enabled===!1||i.enablePan===!1||ee(P)}function At(P){switch(ae(P),S.length){case 1:switch(i.touches.ONE){case Rs.ROTATE:if(i.enableRotate===!1)return;K(),s=r.TOUCH_ROTATE;break;case Rs.PAN:if(i.enablePan===!1)return;re(),s=r.TOUCH_PAN;break;default:s=r.NONE}break;case 2:switch(i.touches.TWO){case Rs.DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;de(),s=r.TOUCH_DOLLY_PAN;break;case Rs.DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;Me(),s=r.TOUCH_DOLLY_ROTATE;break;default:s=r.NONE}break;default:s=r.NONE}s!==r.NONE&&i.dispatchEvent(Pf)}function Dt(P){switch(ae(P),s){case r.TOUCH_ROTATE:if(i.enableRotate===!1)return;ye(P),i.update();break;case r.TOUCH_PAN:if(i.enablePan===!1)return;$e(P),i.update();break;case r.TOUCH_DOLLY_PAN:if(i.enableZoom===!1&&i.enablePan===!1)return;H(P),i.update();break;case r.TOUCH_DOLLY_ROTATE:if(i.enableZoom===!1&&i.enableRotate===!1)return;De(P),i.update();break;default:s=r.NONE}}function b(P){i.enabled!==!1&&P.preventDefault()}function w(P){S.push(P)}function Z(P){delete E[P.pointerId];for(let te=0;te<S.length;te++)if(S[te].pointerId==P.pointerId){S.splice(te,1);return}}function ae(P){let te=E[P.pointerId];te===void 0&&(te=new Ie,E[P.pointerId]=te),te.set(P.pageX,P.pageY)}function oe(P){const te=P.pointerId===S[0].pointerId?S[1]:S[0];return E[te.pointerId]}i.domElement.addEventListener("contextmenu",b),i.domElement.addEventListener("pointerdown",ue),i.domElement.addEventListener("pointercancel",Ee),i.domElement.addEventListener("wheel",Ue,{passive:!1}),this.update()}}function Ni(n){if(n===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return n}function Ox(n,e){n.prototype=Object.create(e.prototype),n.prototype.constructor=n,n.__proto__=e}/*!
 * GSAP 3.12.1
 * https://greensock.com
 *
 * @license Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var Pn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Do={duration:.5,overwrite:!1,delay:0},dp,qt,mt,Vn=1e8,et=1/Vn,Xd=Math.PI*2,bb=Xd/4,Pb=0,Fx=Math.sqrt,Lb=Math.cos,Db=Math.sin,Ft=function(e){return typeof e=="string"},gt=function(e){return typeof e=="function"},qi=function(e){return typeof e=="number"},hp=function(e){return typeof e>"u"},Ti=function(e){return typeof e=="object"},mn=function(e){return e!==!1},pp=function(){return typeof window<"u"},$l=function(e){return gt(e)||Ft(e)},kx=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},$t=Array.isArray,Yd=/(?:-?\.?\d|\.)+/gi,zx=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,oo=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Lf=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,Bx=/[+-]=-?[.\d]+/,Hx=/[^,'"\[\]\s]+/gi,Ub=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,lt,Fn,qd,mp,Dn={},Bu={},Vx,Gx=function(e){return(Bu=Ss(e,Dn))&&vn},gp=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Hu=function(e,t){return!t&&console.warn(e)},Wx=function(e,t){return e&&(Dn[e]=t)&&Bu&&(Bu[e]=t)||Dn},ja=function(){return 0},Nb={suppressEvents:!0,isStart:!0,kill:!1},cu={suppressEvents:!0,kill:!1},Ib={suppressEvents:!0},_p={},Tr=[],$d={},jx,Tn={},Df={},x_=30,fu=[],vp="",xp=function(e){var t=e[0],i,r;if(Ti(t)||gt(t)||(e=[e]),!(i=(t._gsap||{}).harness)){for(r=fu.length;r--&&!fu[r].targetTest(t););i=fu[r]}for(r=e.length;r--;)e[r]&&(e[r]._gsap||(e[r]._gsap=new my(e[r],i)))||e.splice(r,1);return e},us=function(e){return e._gsap||xp(Gn(e))[0]._gsap},Xx=function(e,t,i){return(i=e[t])&&gt(i)?e[t]():hp(i)&&e.getAttribute&&e.getAttribute(t)||i},gn=function(e,t){return(e=e.split(",")).forEach(t)||e},vt=function(e){return Math.round(e*1e5)/1e5||0},zt=function(e){return Math.round(e*1e7)/1e7||0},vo=function(e,t){var i=t.charAt(0),r=parseFloat(t.substr(2));return e=parseFloat(e),i==="+"?e+r:i==="-"?e-r:i==="*"?e*r:e/r},Ob=function(e,t){for(var i=t.length,r=0;e.indexOf(t[r])<0&&++r<i;);return r<i},Vu=function(){var e=Tr.length,t=Tr.slice(0),i,r;for($d={},Tr.length=0,i=0;i<e;i++)r=t[i],r&&r._lazy&&(r.render(r._lazy[0],r._lazy[1],!0)._lazy=0)},Yx=function(e,t,i,r){Tr.length&&!qt&&Vu(),e.render(t,i,r||qt&&t<0&&(e._initted||e._startAt)),Tr.length&&!qt&&Vu()},qx=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Hx).length<2?t:Ft(e)?e.trim():e},$x=function(e){return e},qn=function(e,t){for(var i in t)i in e||(e[i]=t[i]);return e},Fb=function(e){return function(t,i){for(var r in i)r in t||r==="duration"&&e||r==="ease"||(t[r]=i[r])}},Ss=function(e,t){for(var i in t)e[i]=t[i];return e},y_=function n(e,t){for(var i in t)i!=="__proto__"&&i!=="constructor"&&i!=="prototype"&&(e[i]=Ti(t[i])?n(e[i]||(e[i]={}),t[i]):t[i]);return e},Gu=function(e,t){var i={},r;for(r in e)r in t||(i[r]=e[r]);return i},Sa=function(e){var t=e.parent||lt,i=e.keyframes?Fb($t(e.keyframes)):qn;if(mn(e.inherit))for(;t;)i(e,t.vars.defaults),t=t.parent||t._dp;return e},kb=function(e,t){for(var i=e.length,r=i===t.length;r&&i--&&e[i]===t[i];);return i<0},Kx=function(e,t,i,r,s){i===void 0&&(i="_first"),r===void 0&&(r="_last");var o=e[r],a;if(s)for(a=t[s];o&&o[s]>a;)o=o._prev;return o?(t._next=o._next,o._next=t):(t._next=e[i],e[i]=t),t._next?t._next._prev=t:e[r]=t,t._prev=o,t.parent=t._dp=e,t},_c=function(e,t,i,r){i===void 0&&(i="_first"),r===void 0&&(r="_last");var s=t._prev,o=t._next;s?s._next=o:e[i]===t&&(e[i]=o),o?o._prev=s:e[r]===t&&(e[r]=s),t._next=t._prev=t.parent=null},Pr=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},cs=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var i=e;i;)i._dirty=1,i=i.parent;return e},zb=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Kd=function(e,t,i,r){return e._startAt&&(qt?e._startAt.revert(cu):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,r))},Bb=function n(e){return!e||e._ts&&n(e.parent)},S_=function(e){return e._repeat?Uo(e._tTime,e=e.duration()+e._rDelay)*e:0},Uo=function(e,t){var i=Math.floor(e/=t);return e&&i===e?i-1:i},Wu=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},vc=function(e){return e._end=zt(e._start+(e._tDur/Math.abs(e._ts||e._rts||et)||0))},xc=function(e,t){var i=e._dp;return i&&i.smoothChildTiming&&e._ts&&(e._start=zt(i._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),vc(e),i._dirty||cs(i,e)),e},Zx=function(e,t){var i;if((t._time||t._initted&&!t._dur)&&(i=Wu(e.rawTime(),t),(!t._dur||al(0,t.totalDuration(),i)-t._tTime>et)&&t.render(i,!0)),cs(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(i=e;i._dp;)i.rawTime()>=0&&i.totalTime(i._tTime),i=i._dp;e._zTime=-et}},gi=function(e,t,i,r){return t.parent&&Pr(t),t._start=zt((qi(i)?i:i||e!==lt?On(e,i,t):e._time)+t._delay),t._end=zt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Kx(e,t,"_first","_last",e._sort?"_start":0),Zd(t)||(e._recent=t),r||Zx(e,t),e._ts<0&&xc(e,e._tTime),e},Qx=function(e,t){return(Dn.ScrollTrigger||gp("scrollTrigger",t))&&Dn.ScrollTrigger.create(t,e)},Jx=function(e,t,i,r,s){if(Sp(e,t,s),!e._initted)return 1;if(!i&&e._pt&&!qt&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&jx!==An.frame)return Tr.push(e),e._lazy=[s,r],1},Hb=function n(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||n(t))},Zd=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},Vb=function(e,t,i,r){var s=e.ratio,o=t<0||!t&&(!e._start&&Hb(e)&&!(!e._initted&&Zd(e))||(e._ts<0||e._dp._ts<0)&&!Zd(e))?0:1,a=e._rDelay,l=0,u,c,d;if(a&&e._repeat&&(l=al(0,e._tDur,t),c=Uo(l,a),e._yoyo&&c&1&&(o=1-o),c!==Uo(e._tTime,a)&&(s=1-o,e.vars.repeatRefresh&&e._initted&&e.invalidate())),o!==s||qt||r||e._zTime===et||!t&&e._zTime){if(!e._initted&&Jx(e,t,r,i,l))return;for(d=e._zTime,e._zTime=t||(i?et:0),i||(i=t&&!d),e.ratio=o,e._from&&(o=1-o),e._time=0,e._tTime=l,u=e._pt;u;)u.r(o,u.d),u=u._next;t<0&&Kd(e,t,i,!0),e._onUpdate&&!i&&Wn(e,"onUpdate"),l&&e._repeat&&!i&&e.parent&&Wn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===o&&(o&&Pr(e,1),!i&&!qt&&(Wn(e,o?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},Gb=function(e,t,i){var r;if(i>t)for(r=e._first;r&&r._start<=i;){if(r.data==="isPause"&&r._start>t)return r;r=r._next}else for(r=e._last;r&&r._start>=i;){if(r.data==="isPause"&&r._start<t)return r;r=r._prev}},No=function(e,t,i,r){var s=e._repeat,o=zt(t)||0,a=e._tTime/e._tDur;return a&&!r&&(e._time*=o/e._dur),e._dur=o,e._tDur=s?s<0?1e10:zt(o*(s+1)+e._rDelay*s):o,a>0&&!r&&xc(e,e._tTime=e._tDur*a),e.parent&&vc(e),i||cs(e.parent,e),e},M_=function(e){return e instanceof rn?cs(e):No(e,e._dur)},Wb={_start:0,endTime:ja,totalDuration:ja},On=function n(e,t,i){var r=e.labels,s=e._recent||Wb,o=e.duration()>=Vn?s.endTime(!1):e._dur,a,l,u;return Ft(t)&&(isNaN(t)||t in r)?(l=t.charAt(0),u=t.substr(-1)==="%",a=t.indexOf("="),l==="<"||l===">"?(a>=0&&(t=t.replace(/=/,"")),(l==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(u?(a<0?s:i).totalDuration()/100:1)):a<0?(t in r||(r[t]=o),r[t]):(l=parseFloat(t.charAt(a-1)+t.substr(a+1)),u&&i&&(l=l/100*($t(i)?i[0]:i).totalDuration()),a>1?n(e,t.substr(0,a-1),i)+l:o+l)):t==null?o:+t},Ma=function(e,t,i){var r=qi(t[1]),s=(r?2:1)+(e<2?0:1),o=t[s],a,l;if(r&&(o.duration=t[1]),o.parent=i,e){for(a=o,l=i;l&&!("immediateRender"in a);)a=l.vars.defaults||{},l=mn(l.vars.inherit)&&l.parent;o.immediateRender=mn(a.immediateRender),e<2?o.runBackwards=1:o.startAt=t[s-1]}return new Et(t[0],o,t[s+1])},Or=function(e,t){return e||e===0?t(e):t},al=function(e,t,i){return i<e?e:i>t?t:i},Yt=function(e,t){return!Ft(e)||!(t=Ub.exec(e))?"":t[1]},jb=function(e,t,i){return Or(i,function(r){return al(e,t,r)})},Qd=[].slice,ey=function(e,t){return e&&Ti(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ti(e[0]))&&!e.nodeType&&e!==Fn},Xb=function(e,t,i){return i===void 0&&(i=[]),e.forEach(function(r){var s;return Ft(r)&&!t||ey(r,1)?(s=i).push.apply(s,Gn(r)):i.push(r)})||i},Gn=function(e,t,i){return mt&&!t&&mt.selector?mt.selector(e):Ft(e)&&!i&&(qd||!Io())?Qd.call((t||mp).querySelectorAll(e),0):$t(e)?Xb(e,i):ey(e)?Qd.call(e,0):e?[e]:[]},Jd=function(e){return e=Gn(e)[0]||Hu("Invalid scope")||{},function(t){var i=e.current||e.nativeElement||e;return Gn(t,i.querySelectorAll?i:i===e?Hu("Invalid scope")||mp.createElement("div"):e)}},ty=function(e){return e.sort(function(){return .5-Math.random()})},ny=function(e){if(gt(e))return e;var t=Ti(e)?e:{each:e},i=fs(t.ease),r=t.from||0,s=parseFloat(t.base)||0,o={},a=r>0&&r<1,l=isNaN(r)||a,u=t.axis,c=r,d=r;return Ft(r)?c=d={center:.5,edges:.5,end:1}[r]||0:!a&&l&&(c=r[0],d=r[1]),function(h,p,v){var g=(v||t).length,m=o[g],f,_,x,y,S,E,A,C,M;if(!m){if(M=t.grid==="auto"?0:(t.grid||[1,Vn])[1],!M){for(A=-Vn;A<(A=v[M++].getBoundingClientRect().left)&&M<g;);M--}for(m=o[g]=[],f=l?Math.min(M,g)*c-.5:r%M,_=M===Vn?0:l?g*d/M-.5:r/M|0,A=0,C=Vn,E=0;E<g;E++)x=E%M-f,y=_-(E/M|0),m[E]=S=u?Math.abs(u==="y"?y:x):Fx(x*x+y*y),S>A&&(A=S),S<C&&(C=S);r==="random"&&ty(m),m.max=A-C,m.min=C,m.v=g=(parseFloat(t.amount)||parseFloat(t.each)*(M>g?g-1:u?u==="y"?g/M:M:Math.max(M,g/M))||0)*(r==="edges"?-1:1),m.b=g<0?s-g:s,m.u=Yt(t.amount||t.each)||0,i=i&&g<0?dy(i):i}return g=(m[h]-m.min)/m.max||0,zt(m.b+(i?i(g):g)*m.v)+m.u}},eh=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(i){var r=zt(Math.round(parseFloat(i)/e)*e*t);return(r-r%1)/t+(qi(i)?0:Yt(i))}},iy=function(e,t){var i=$t(e),r,s;return!i&&Ti(e)&&(r=i=e.radius||Vn,e.values?(e=Gn(e.values),(s=!qi(e[0]))&&(r*=r)):e=eh(e.increment)),Or(t,i?gt(e)?function(o){return s=e(o),Math.abs(s-o)<=r?s:o}:function(o){for(var a=parseFloat(s?o.x:o),l=parseFloat(s?o.y:0),u=Vn,c=0,d=e.length,h,p;d--;)s?(h=e[d].x-a,p=e[d].y-l,h=h*h+p*p):h=Math.abs(e[d]-a),h<u&&(u=h,c=d);return c=!r||u<=r?e[c]:o,s||c===o||qi(o)?c:c+Yt(o)}:eh(e))},ry=function(e,t,i,r){return Or($t(e)?!t:i===!0?!!(i=0):!r,function(){return $t(e)?e[~~(Math.random()*e.length)]:(i=i||1e-5)&&(r=i<1?Math.pow(10,(i+"").length-2):1)&&Math.floor(Math.round((e-i/2+Math.random()*(t-e+i*.99))/i)*i*r)/r})},Yb=function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];return function(r){return t.reduce(function(s,o){return o(s)},r)}},qb=function(e,t){return function(i){return e(parseFloat(i))+(t||Yt(i))}},$b=function(e,t,i){return oy(e,t,0,1,i)},sy=function(e,t,i){return Or(i,function(r){return e[~~t(r)]})},Kb=function n(e,t,i){var r=t-e;return $t(e)?sy(e,n(0,e.length),t):Or(i,function(s){return(r+(s-e)%r)%r+e})},Zb=function n(e,t,i){var r=t-e,s=r*2;return $t(e)?sy(e,n(0,e.length-1),t):Or(i,function(o){return o=(s+(o-e)%s)%s||0,e+(o>r?s-o:o)})},Xa=function(e){for(var t=0,i="",r,s,o,a;~(r=e.indexOf("random(",t));)o=e.indexOf(")",r),a=e.charAt(r+7)==="[",s=e.substr(r+7,o-r-7).match(a?Hx:Yd),i+=e.substr(t,r-t)+ry(a?s:+s[0],a?0:+s[1],+s[2]||1e-5),t=o+1;return i+e.substr(t,e.length-t)},oy=function(e,t,i,r,s){var o=t-e,a=r-i;return Or(s,function(l){return i+((l-e)/o*a||0)})},Qb=function n(e,t,i,r){var s=isNaN(e+t)?0:function(p){return(1-p)*e+p*t};if(!s){var o=Ft(e),a={},l,u,c,d,h;if(i===!0&&(r=1)&&(i=null),o)e={p:e},t={p:t};else if($t(e)&&!$t(t)){for(c=[],d=e.length,h=d-2,u=1;u<d;u++)c.push(n(e[u-1],e[u]));d--,s=function(v){v*=d;var g=Math.min(h,~~v);return c[g](v-g)},i=t}else r||(e=Ss($t(e)?[]:{},e));if(!c){for(l in t)yp.call(a,e,l,"get",t[l]);s=function(v){return Tp(v,a)||(o?e.p:e)}}}return Or(i,s)},E_=function(e,t,i){var r=e.labels,s=Vn,o,a,l;for(o in r)a=r[o]-t,a<0==!!i&&a&&s>(a=Math.abs(a))&&(l=o,s=a);return l},Wn=function(e,t,i){var r=e.vars,s=r[t],o=mt,a=e._ctx,l,u,c;if(s)return l=r[t+"Params"],u=r.callbackScope||e,i&&Tr.length&&Vu(),a&&(mt=a),c=l?s.apply(u,l):s.call(u),mt=o,c},ua=function(e){return Pr(e),e.scrollTrigger&&e.scrollTrigger.kill(!!qt),e.progress()<1&&Wn(e,"onInterrupt"),e},ao,ay=[],ly=function(e){if(pp()&&e){e=!e.name&&e.default||e;var t=e.name,i=gt(e),r=t&&!i&&e.init?function(){this._props=[]}:e,s={init:ja,render:Tp,add:yp,kill:pP,modifier:hP,rawVars:0},o={targetTest:0,get:0,getSetter:Ep,aliases:{},register:0};if(Io(),e!==r){if(Tn[t])return;qn(r,qn(Gu(e,s),o)),Ss(r.prototype,Ss(s,Gu(e,o))),Tn[r.prop=t]=r,e.targetTest&&(fu.push(r),_p[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}Wx(t,r),e.register&&e.register(vn,r,_n)}else e&&ay.push(e)},Je=255,ca={aqua:[0,Je,Je],lime:[0,Je,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,Je],navy:[0,0,128],white:[Je,Je,Je],olive:[128,128,0],yellow:[Je,Je,0],orange:[Je,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[Je,0,0],pink:[Je,192,203],cyan:[0,Je,Je],transparent:[Je,Je,Je,0]},Uf=function(e,t,i){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(i-t)*e*6:e<.5?i:e*3<2?t+(i-t)*(2/3-e)*6:t)*Je+.5|0},uy=function(e,t,i){var r=e?qi(e)?[e>>16,e>>8&Je,e&Je]:0:ca.black,s,o,a,l,u,c,d,h,p,v;if(!r){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ca[e])r=ca[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),o=e.charAt(2),a=e.charAt(3),e="#"+s+s+o+o+a+a+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return r=parseInt(e.substr(1,6),16),[r>>16,r>>8&Je,r&Je,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),r=[e>>16,e>>8&Je,e&Je]}else if(e.substr(0,3)==="hsl"){if(r=v=e.match(Yd),!t)l=+r[0]%360/360,u=+r[1]/100,c=+r[2]/100,o=c<=.5?c*(u+1):c+u-c*u,s=c*2-o,r.length>3&&(r[3]*=1),r[0]=Uf(l+1/3,s,o),r[1]=Uf(l,s,o),r[2]=Uf(l-1/3,s,o);else if(~e.indexOf("="))return r=e.match(zx),i&&r.length<4&&(r[3]=1),r}else r=e.match(Yd)||ca.transparent;r=r.map(Number)}return t&&!v&&(s=r[0]/Je,o=r[1]/Je,a=r[2]/Je,d=Math.max(s,o,a),h=Math.min(s,o,a),c=(d+h)/2,d===h?l=u=0:(p=d-h,u=c>.5?p/(2-d-h):p/(d+h),l=d===s?(o-a)/p+(o<a?6:0):d===o?(a-s)/p+2:(s-o)/p+4,l*=60),r[0]=~~(l+.5),r[1]=~~(u*100+.5),r[2]=~~(c*100+.5)),i&&r.length<4&&(r[3]=1),r},cy=function(e){var t=[],i=[],r=-1;return e.split(wr).forEach(function(s){var o=s.match(oo)||[];t.push.apply(t,o),i.push(r+=o.length+1)}),t.c=i,t},T_=function(e,t,i){var r="",s=(e+r).match(wr),o=t?"hsla(":"rgba(",a=0,l,u,c,d;if(!s)return e;if(s=s.map(function(h){return(h=uy(h,t,1))&&o+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),i&&(c=cy(e),l=i.c,l.join(r)!==c.c.join(r)))for(u=e.replace(wr,"1").split(oo),d=u.length-1;a<d;a++)r+=u[a]+(~l.indexOf(a)?s.shift()||o+"0,0,0,0)":(c.length?c:s.length?s:i).shift());if(!u)for(u=e.split(wr),d=u.length-1;a<d;a++)r+=u[a]+s[a];return r+u[d]},wr=function(){var n="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ca)n+="|"+e+"\\b";return new RegExp(n+")","gi")}(),Jb=/hsl[a]?\(/,fy=function(e){var t=e.join(" "),i;if(wr.lastIndex=0,wr.test(t))return i=Jb.test(t),e[1]=T_(e[1],i),e[0]=T_(e[0],i,cy(e[1])),!0},Ya,An=function(){var n=Date.now,e=500,t=33,i=n(),r=i,s=1e3/240,o=s,a=[],l,u,c,d,h,p,v=function g(m){var f=n()-r,_=m===!0,x,y,S,E;if(f>e&&(i+=f-t),r+=f,S=r-i,x=S-o,(x>0||_)&&(E=++d.frame,h=S-d.time*1e3,d.time=S=S/1e3,o+=x+(x>=s?4:s-x),y=1),_||(l=u(g)),y)for(p=0;p<a.length;p++)a[p](S,h,E,m)};return d={time:0,frame:0,tick:function(){v(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){Vx&&(!qd&&pp()&&(Fn=qd=window,mp=Fn.document||{},Dn.gsap=vn,(Fn.gsapVersions||(Fn.gsapVersions=[])).push(vn.version),Gx(Bu||Fn.GreenSockGlobals||!Fn.gsap&&Fn||{}),c=Fn.requestAnimationFrame,ay.forEach(ly)),l&&d.sleep(),u=c||function(m){return setTimeout(m,o-d.time*1e3+1|0)},Ya=1,v(2))},sleep:function(){(c?Fn.cancelAnimationFrame:clearTimeout)(l),Ya=0,u=ja},lagSmoothing:function(m,f){e=m||1/0,t=Math.min(f||33,e)},fps:function(m){s=1e3/(m||240),o=d.time*1e3+s},add:function(m,f,_){var x=f?function(y,S,E,A){m(y,S,E,A),d.remove(x)}:m;return d.remove(m),a[_?"unshift":"push"](x),Io(),x},remove:function(m,f){~(f=a.indexOf(m))&&a.splice(f,1)&&p>=f&&p--},_listeners:a},d}(),Io=function(){return!Ya&&An.wake()},We={},eP=/^[\d.\-M][\d.\-,\s]/,tP=/["']/g,nP=function(e){for(var t={},i=e.substr(1,e.length-3).split(":"),r=i[0],s=1,o=i.length,a,l,u;s<o;s++)l=i[s],a=s!==o-1?l.lastIndexOf(","):l.length,u=l.substr(0,a),t[r]=isNaN(u)?u.replace(tP,"").trim():+u,r=l.substr(a+1).trim();return t},iP=function(e){var t=e.indexOf("(")+1,i=e.indexOf(")"),r=e.indexOf("(",t);return e.substring(t,~r&&r<i?e.indexOf(")",i+1):i)},rP=function(e){var t=(e+"").split("("),i=We[t[0]];return i&&t.length>1&&i.config?i.config.apply(null,~e.indexOf("{")?[nP(t[1])]:iP(e).split(",").map(qx)):We._CE&&eP.test(e)?We._CE("",e):i},dy=function(e){return function(t){return 1-e(1-t)}},hy=function n(e,t){for(var i=e._first,r;i;)i instanceof rn?n(i,t):i.vars.yoyoEase&&(!i._yoyo||!i._repeat)&&i._yoyo!==t&&(i.timeline?n(i.timeline,t):(r=i._ease,i._ease=i._yEase,i._yEase=r,i._yoyo=t)),i=i._next},fs=function(e,t){return e&&(gt(e)?e:We[e]||rP(e))||t},ws=function(e,t,i,r){i===void 0&&(i=function(l){return 1-t(1-l)}),r===void 0&&(r=function(l){return l<.5?t(l*2)/2:1-t((1-l)*2)/2});var s={easeIn:t,easeOut:i,easeInOut:r},o;return gn(e,function(a){We[a]=Dn[a]=s,We[o=a.toLowerCase()]=i;for(var l in s)We[o+(l==="easeIn"?".in":l==="easeOut"?".out":".inOut")]=We[a+"."+l]=s[l]}),s},py=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Nf=function n(e,t,i){var r=t>=1?t:1,s=(i||(e?.3:.45))/(t<1?t:1),o=s/Xd*(Math.asin(1/r)||0),a=function(c){return c===1?1:r*Math.pow(2,-10*c)*Db((c-o)*s)+1},l=e==="out"?a:e==="in"?function(u){return 1-a(1-u)}:py(a);return s=Xd/s,l.config=function(u,c){return n(e,u,c)},l},If=function n(e,t){t===void 0&&(t=1.70158);var i=function(o){return o?--o*o*((t+1)*o+t)+1:0},r=e==="out"?i:e==="in"?function(s){return 1-i(1-s)}:py(i);return r.config=function(s){return n(e,s)},r};gn("Linear,Quad,Cubic,Quart,Quint,Strong",function(n,e){var t=e<5?e+1:e;ws(n+",Power"+(t-1),e?function(i){return Math.pow(i,t)}:function(i){return i},function(i){return 1-Math.pow(1-i,t)},function(i){return i<.5?Math.pow(i*2,t)/2:1-Math.pow((1-i)*2,t)/2})});We.Linear.easeNone=We.none=We.Linear.easeIn;ws("Elastic",Nf("in"),Nf("out"),Nf());(function(n,e){var t=1/e,i=2*t,r=2.5*t,s=function(a){return a<t?n*a*a:a<i?n*Math.pow(a-1.5/e,2)+.75:a<r?n*(a-=2.25/e)*a+.9375:n*Math.pow(a-2.625/e,2)+.984375};ws("Bounce",function(o){return 1-s(1-o)},s)})(7.5625,2.75);ws("Expo",function(n){return n?Math.pow(2,10*(n-1)):0});ws("Circ",function(n){return-(Fx(1-n*n)-1)});ws("Sine",function(n){return n===1?1:-Lb(n*bb)+1});ws("Back",If("in"),If("out"),If());We.SteppedEase=We.steps=Dn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var i=1/e,r=e+(t?0:1),s=t?1:0,o=1-et;return function(a){return((r*al(0,o,a)|0)+s)*i}}};Do.ease=We["quad.out"];gn("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(n){return vp+=n+","+n+"Params,"});var my=function(e,t){this.id=Pb++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Xx,this.set=t?t.getSetter:Ep},qa=function(){function n(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,No(this,+t.duration,1,1),this.data=t.data,mt&&(this._ctx=mt,mt.data.push(this)),Ya||An.wake()}var e=n.prototype;return e.delay=function(i){return i||i===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+i-this._delay),this._delay=i,this):this._delay},e.duration=function(i){return arguments.length?this.totalDuration(this._repeat>0?i+(i+this._rDelay)*this._repeat:i):this.totalDuration()&&this._dur},e.totalDuration=function(i){return arguments.length?(this._dirty=0,No(this,this._repeat<0?i:(i-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(i,r){if(Io(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(xc(this,i),!s._dp||s.parent||Zx(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&i<this._tDur||this._ts<0&&i>0||!this._tDur&&!i)&&gi(this._dp,this,this._start-this._delay)}return(this._tTime!==i||!this._dur&&!r||this._initted&&Math.abs(this._zTime)===et||!i&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=i),Yx(this,i,r)),this},e.time=function(i,r){return arguments.length?this.totalTime(Math.min(this.totalDuration(),i+S_(this))%(this._dur+this._rDelay)||(i?this._dur:0),r):this._time},e.totalProgress=function(i,r){return arguments.length?this.totalTime(this.totalDuration()*i,r):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.ratio},e.progress=function(i,r){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-i:i)+S_(this),r):this.duration()?Math.min(1,this._time/this._dur):this.ratio},e.iteration=function(i,r){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(i-1)*s,r):this._repeat?Uo(this._tTime,s)+1:1},e.timeScale=function(i){if(!arguments.length)return this._rts===-et?0:this._rts;if(this._rts===i)return this;var r=this.parent&&this._ts?Wu(this.parent._time,this):this._tTime;return this._rts=+i||0,this._ts=this._ps||i===-et?0:this._rts,this.totalTime(al(-Math.abs(this._delay),this._tDur,r),!0),vc(this),zb(this)},e.paused=function(i){return arguments.length?(this._ps!==i&&(this._ps=i,i?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Io(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==et&&(this._tTime-=et)))),this):this._ps},e.startTime=function(i){if(arguments.length){this._start=i;var r=this.parent||this._dp;return r&&(r._sort||!this.parent)&&gi(r,this,i-this._delay),this}return this._start},e.endTime=function(i){return this._start+(mn(i)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(i){var r=this.parent||this._dp;return r?i&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?Wu(r.rawTime(i),this):this._tTime:this._tTime},e.revert=function(i){i===void 0&&(i=Ib);var r=qt;return qt=i,(this._initted||this._startAt)&&(this.timeline&&this.timeline.revert(i),this.totalTime(-.01,i.suppressEvents)),this.data!=="nested"&&i.kill!==!1&&this.kill(),qt=r,this},e.globalTime=function(i){for(var r=this,s=arguments.length?i:r.rawTime();r;)s=r._start+s/(r._ts||1),r=r._dp;return!this.parent&&this._sat?this._sat.vars.immediateRender?-1:this._sat.globalTime(i):s},e.repeat=function(i){return arguments.length?(this._repeat=i===1/0?-2:i,M_(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(i){if(arguments.length){var r=this._time;return this._rDelay=i,M_(this),r?this.time(r):this}return this._rDelay},e.yoyo=function(i){return arguments.length?(this._yoyo=i,this):this._yoyo},e.seek=function(i,r){return this.totalTime(On(this,i),mn(r))},e.restart=function(i,r){return this.play().totalTime(i?-this._delay:0,mn(r))},e.play=function(i,r){return i!=null&&this.seek(i,r),this.reversed(!1).paused(!1)},e.reverse=function(i,r){return i!=null&&this.seek(i||this.totalDuration(),r),this.reversed(!0).paused(!1)},e.pause=function(i,r){return i!=null&&this.seek(i,r),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(i){return arguments.length?(!!i!==this.reversed()&&this.timeScale(-this._rts||(i?-et:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-et,this},e.isActive=function(){var i=this.parent||this._dp,r=this._start,s;return!!(!i||this._ts&&this._initted&&i.isActive()&&(s=i.rawTime(!0))>=r&&s<this.endTime(!0)-et)},e.eventCallback=function(i,r,s){var o=this.vars;return arguments.length>1?(r?(o[i]=r,s&&(o[i+"Params"]=s),i==="onUpdate"&&(this._onUpdate=r)):delete o[i],this):o[i]},e.then=function(i){var r=this;return new Promise(function(s){var o=gt(i)?i:$x,a=function(){var u=r.then;r.then=null,gt(o)&&(o=o(r))&&(o.then||o===r)&&(r.then=u),s(o),r.then=u};r._initted&&r.totalProgress()===1&&r._ts>=0||!r._tTime&&r._ts<0?a():r._prom=a})},e.kill=function(){ua(this)},n}();qn(qa.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-et,_prom:0,_ps:!1,_rts:1});var rn=function(n){Ox(e,n);function e(i,r){var s;return i===void 0&&(i={}),s=n.call(this,i)||this,s.labels={},s.smoothChildTiming=!!i.smoothChildTiming,s.autoRemoveChildren=!!i.autoRemoveChildren,s._sort=mn(i.sortChildren),lt&&gi(i.parent||lt,Ni(s),r),i.reversed&&s.reverse(),i.paused&&s.paused(!0),i.scrollTrigger&&Qx(Ni(s),i.scrollTrigger),s}var t=e.prototype;return t.to=function(r,s,o){return Ma(0,arguments,this),this},t.from=function(r,s,o){return Ma(1,arguments,this),this},t.fromTo=function(r,s,o,a){return Ma(2,arguments,this),this},t.set=function(r,s,o){return s.duration=0,s.parent=this,Sa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Et(r,s,On(this,o),1),this},t.call=function(r,s,o){return gi(this,Et.delayedCall(0,r,s),o)},t.staggerTo=function(r,s,o,a,l,u,c){return o.duration=s,o.stagger=o.stagger||a,o.onComplete=u,o.onCompleteParams=c,o.parent=this,new Et(r,o,On(this,l)),this},t.staggerFrom=function(r,s,o,a,l,u,c){return o.runBackwards=1,Sa(o).immediateRender=mn(o.immediateRender),this.staggerTo(r,s,o,a,l,u,c)},t.staggerFromTo=function(r,s,o,a,l,u,c,d){return a.startAt=o,Sa(a).immediateRender=mn(a.immediateRender),this.staggerTo(r,s,a,l,u,c,d)},t.render=function(r,s,o){var a=this._time,l=this._dirty?this.totalDuration():this._tDur,u=this._dur,c=r<=0?0:zt(r),d=this._zTime<0!=r<0&&(this._initted||!u),h,p,v,g,m,f,_,x,y,S,E,A;if(this!==lt&&c>l&&r>=0&&(c=l),c!==this._tTime||o||d){if(a!==this._time&&u&&(c+=this._time-a,r+=this._time-a),h=c,y=this._start,x=this._ts,f=!x,d&&(u||(a=this._zTime),(r||!s)&&(this._zTime=r)),this._repeat){if(E=this._yoyo,m=u+this._rDelay,this._repeat<-1&&r<0)return this.totalTime(m*100+r,s,o);if(h=zt(c%m),c===l?(g=this._repeat,h=u):(g=~~(c/m),g&&g===c/m&&(h=u,g--),h>u&&(h=u)),S=Uo(this._tTime,m),!a&&this._tTime&&S!==g&&this._tTime-S*m-this._dur<=0&&(S=g),E&&g&1&&(h=u-h,A=1),g!==S&&!this._lock){var C=E&&S&1,M=C===(E&&g&1);if(g<S&&(C=!C),a=C?0:u,this._lock=1,this.render(a||(A?0:zt(g*m)),s,!u)._lock=0,this._tTime=c,!s&&this.parent&&Wn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1),a&&a!==this._time||f!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(u=this._dur,l=this._tDur,M&&(this._lock=2,a=C?u:-1e-4,this.render(a,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!f)return this;hy(this,A)}}if(this._hasPause&&!this._forcing&&this._lock<2&&(_=Gb(this,zt(a),zt(h)),_&&(c-=h-(h=_._start))),this._tTime=c,this._time=h,this._act=!x,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=r,a=0),!a&&h&&!s&&!g&&(Wn(this,"onStart"),this._tTime!==c))return this;if(h>=a&&r>=0)for(p=this._first;p;){if(v=p._next,(p._act||h>=p._start)&&p._ts&&_!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(h-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(h-p._start)*p._ts,s,o),h!==this._time||!this._ts&&!f){_=0,v&&(c+=this._zTime=-et);break}}p=v}else{p=this._last;for(var T=r<0?r:h;p;){if(v=p._prev,(p._act||T<=p._end)&&p._ts&&_!==p){if(p.parent!==this)return this.render(r,s,o);if(p.render(p._ts>0?(T-p._start)*p._ts:(p._dirty?p.totalDuration():p._tDur)+(T-p._start)*p._ts,s,o||qt&&(p._initted||p._startAt)),h!==this._time||!this._ts&&!f){_=0,v&&(c+=this._zTime=T?-et:et);break}}p=v}}if(_&&!s&&(this.pause(),_.render(h>=a?0:-et)._zTime=h>=a?1:-1,this._ts))return this._start=y,vc(this),this.render(r,s,o);this._onUpdate&&!s&&Wn(this,"onUpdate",!0),(c===l&&this._tTime>=this.totalDuration()||!c&&a)&&(y===this._start||Math.abs(x)!==Math.abs(this._ts))&&(this._lock||((r||!u)&&(c===l&&this._ts>0||!c&&this._ts<0)&&Pr(this,1),!s&&!(r<0&&!a)&&(c||a||!l)&&(Wn(this,c===l&&r>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(c<l&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(r,s){var o=this;if(qi(s)||(s=On(this,s,r)),!(r instanceof qa)){if($t(r))return r.forEach(function(a){return o.add(a,s)}),this;if(Ft(r))return this.addLabel(r,s);if(gt(r))r=Et.delayedCall(0,r);else return this}return this!==r?gi(this,r,s):this},t.getChildren=function(r,s,o,a){r===void 0&&(r=!0),s===void 0&&(s=!0),o===void 0&&(o=!0),a===void 0&&(a=-Vn);for(var l=[],u=this._first;u;)u._start>=a&&(u instanceof Et?s&&l.push(u):(o&&l.push(u),r&&l.push.apply(l,u.getChildren(!0,s,o)))),u=u._next;return l},t.getById=function(r){for(var s=this.getChildren(1,1,1),o=s.length;o--;)if(s[o].vars.id===r)return s[o]},t.remove=function(r){return Ft(r)?this.removeLabel(r):gt(r)?this.killTweensOf(r):(_c(this,r),r===this._recent&&(this._recent=this._last),cs(this))},t.totalTime=function(r,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=zt(An.time-(this._ts>0?r/this._ts:(this.totalDuration()-r)/-this._ts))),n.prototype.totalTime.call(this,r,s),this._forcing=0,this):this._tTime},t.addLabel=function(r,s){return this.labels[r]=On(this,s),this},t.removeLabel=function(r){return delete this.labels[r],this},t.addPause=function(r,s,o){var a=Et.delayedCall(0,s||ja,o);return a.data="isPause",this._hasPause=1,gi(this,a,On(this,r))},t.removePause=function(r){var s=this._first;for(r=On(this,r);s;)s._start===r&&s.data==="isPause"&&Pr(s),s=s._next},t.killTweensOf=function(r,s,o){for(var a=this.getTweensOf(r,o),l=a.length;l--;)fr!==a[l]&&a[l].kill(r,s);return this},t.getTweensOf=function(r,s){for(var o=[],a=Gn(r),l=this._first,u=qi(s),c;l;)l instanceof Et?Ob(l._targets,a)&&(u?(!fr||l._initted&&l._ts)&&l.globalTime(0)<=s&&l.globalTime(l.totalDuration())>s:!s||l.isActive())&&o.push(l):(c=l.getTweensOf(a,s)).length&&o.push.apply(o,c),l=l._next;return o},t.tweenTo=function(r,s){s=s||{};var o=this,a=On(o,r),l=s,u=l.startAt,c=l.onStart,d=l.onStartParams,h=l.immediateRender,p,v=Et.to(o,qn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:a,overwrite:"auto",duration:s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale())||et,onStart:function(){if(o.pause(),!p){var m=s.duration||Math.abs((a-(u&&"time"in u?u.time:o._time))/o.timeScale());v._dur!==m&&No(v,m,0,1).render(v._time,!0,!0),p=1}c&&c.apply(v,d||[])}},s));return h?v.render(0):v},t.tweenFromTo=function(r,s,o){return this.tweenTo(s,qn({startAt:{time:On(this,r)}},o))},t.recent=function(){return this._recent},t.nextLabel=function(r){return r===void 0&&(r=this._time),E_(this,On(this,r))},t.previousLabel=function(r){return r===void 0&&(r=this._time),E_(this,On(this,r),1)},t.currentLabel=function(r){return arguments.length?this.seek(r,!0):this.previousLabel(this._time+et)},t.shiftChildren=function(r,s,o){o===void 0&&(o=0);for(var a=this._first,l=this.labels,u;a;)a._start>=o&&(a._start+=r,a._end+=r),a=a._next;if(s)for(u in l)l[u]>=o&&(l[u]+=r);return cs(this)},t.invalidate=function(r){var s=this._first;for(this._lock=0;s;)s.invalidate(r),s=s._next;return n.prototype.invalidate.call(this,r)},t.clear=function(r){r===void 0&&(r=!0);for(var s=this._first,o;s;)o=s._next,this.remove(s),s=o;return this._dp&&(this._time=this._tTime=this._pTime=0),r&&(this.labels={}),cs(this)},t.totalDuration=function(r){var s=0,o=this,a=o._last,l=Vn,u,c,d;if(arguments.length)return o.timeScale((o._repeat<0?o.duration():o.totalDuration())/(o.reversed()?-r:r));if(o._dirty){for(d=o.parent;a;)u=a._prev,a._dirty&&a.totalDuration(),c=a._start,c>l&&o._sort&&a._ts&&!o._lock?(o._lock=1,gi(o,a,c-a._delay,1)._lock=0):l=c,c<0&&a._ts&&(s-=c,(!d&&!o._dp||d&&d.smoothChildTiming)&&(o._start+=c/o._ts,o._time-=c,o._tTime-=c),o.shiftChildren(-c,!1,-1/0),l=0),a._end>s&&a._ts&&(s=a._end),a=u;No(o,o===lt&&o._time>s?o._time:s,1,1),o._dirty=0}return o._tDur},e.updateRoot=function(r){if(lt._ts&&(Yx(lt,Wu(r,lt)),jx=An.frame),An.frame>=x_){x_+=Pn.autoSleep||120;var s=lt._first;if((!s||!s._ts)&&Pn.autoSleep&&An._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||An.sleep()}}},e}(qa);qn(rn.prototype,{_lock:0,_hasPause:0,_forcing:0});var sP=function(e,t,i,r,s,o,a){var l=new _n(this._pt,e,t,0,1,Sy,null,s),u=0,c=0,d,h,p,v,g,m,f,_;for(l.b=i,l.e=r,i+="",r+="",(f=~r.indexOf("random("))&&(r=Xa(r)),o&&(_=[i,r],o(_,e,t),i=_[0],r=_[1]),h=i.match(Lf)||[];d=Lf.exec(r);)v=d[0],g=r.substring(u,d.index),p?p=(p+1)%5:g.substr(-5)==="rgba("&&(p=1),v!==h[c++]&&(m=parseFloat(h[c-1])||0,l._pt={_next:l._pt,p:g||c===1?g:",",s:m,c:v.charAt(1)==="="?vo(m,v)-m:parseFloat(v)-m,m:p&&p<4?Math.round:0},u=Lf.lastIndex);return l.c=u<r.length?r.substring(u,r.length):"",l.fp=a,(Bx.test(r)||f)&&(l.e=0),this._pt=l,l},yp=function(e,t,i,r,s,o,a,l,u,c){gt(r)&&(r=r(s||0,e,o));var d=e[t],h=i!=="get"?i:gt(d)?u?e[t.indexOf("set")||!gt(e["get"+t.substr(3)])?t:"get"+t.substr(3)](u):e[t]():d,p=gt(d)?u?cP:xy:Mp,v;if(Ft(r)&&(~r.indexOf("random(")&&(r=Xa(r)),r.charAt(1)==="="&&(v=vo(h,r)+(Yt(h)||0),(v||v===0)&&(r=v))),!c||h!==r||th)return!isNaN(h*r)&&r!==""?(v=new _n(this._pt,e,t,+h||0,r-(h||0),typeof d=="boolean"?dP:yy,0,p),u&&(v.fp=u),a&&v.modifier(a,this,e),this._pt=v):(!d&&!(t in e)&&gp(t,r),sP.call(this,e,t,h,r,p,l||Pn.stringFilter,u))},oP=function(e,t,i,r,s){if(gt(e)&&(e=Ea(e,s,t,i,r)),!Ti(e)||e.style&&e.nodeType||$t(e)||kx(e))return Ft(e)?Ea(e,s,t,i,r):e;var o={},a;for(a in e)o[a]=Ea(e[a],s,t,i,r);return o},gy=function(e,t,i,r,s,o){var a,l,u,c;if(Tn[e]&&(a=new Tn[e]).init(s,a.rawVars?t[e]:oP(t[e],r,s,o,i),i,r,o)!==!1&&(i._pt=l=new _n(i._pt,s,e,0,1,a.render,a,0,a.priority),i!==ao))for(u=i._ptLookup[i._targets.indexOf(s)],c=a._props.length;c--;)u[a._props[c]]=l;return a},fr,th,Sp=function n(e,t,i){var r=e.vars,s=r.ease,o=r.startAt,a=r.immediateRender,l=r.lazy,u=r.onUpdate,c=r.onUpdateParams,d=r.callbackScope,h=r.runBackwards,p=r.yoyoEase,v=r.keyframes,g=r.autoRevert,m=e._dur,f=e._startAt,_=e._targets,x=e.parent,y=x&&x.data==="nested"?x.vars.targets:_,S=e._overwrite==="auto"&&!dp,E=e.timeline,A,C,M,T,U,O,L,N,z,$,W,D,X;if(E&&(!v||!s)&&(s="none"),e._ease=fs(s,Do.ease),e._yEase=p?dy(fs(p===!0?s:p,Do.ease)):0,p&&e._yoyo&&!e._repeat&&(p=e._yEase,e._yEase=e._ease,e._ease=p),e._from=!E&&!!r.runBackwards,!E||v&&!r.stagger){if(N=_[0]?us(_[0]).harness:0,D=N&&r[N.prop],A=Gu(r,_p),f&&(f._zTime<0&&f.progress(1),t<0&&h&&a&&!g?f.render(-1,!0):f.revert(h&&m?cu:Nb),f._lazy=0),o){if(Pr(e._startAt=Et.set(_,qn({data:"isStart",overwrite:!1,parent:x,immediateRender:!0,lazy:!f&&mn(l),startAt:null,delay:0,onUpdate:u,onUpdateParams:c,callbackScope:d,stagger:0},o))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(qt||!a&&!g)&&e._startAt.revert(cu),a&&m&&t<=0&&i<=0){t&&(e._zTime=t);return}}else if(h&&m&&!f){if(t&&(a=!1),M=qn({overwrite:!1,data:"isFromStart",lazy:a&&!f&&mn(l),immediateRender:a,stagger:0,parent:x},A),D&&(M[N.prop]=D),Pr(e._startAt=Et.set(_,M)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(qt?e._startAt.revert(cu):e._startAt.render(-1,!0)),e._zTime=t,!a)n(e._startAt,et,et);else if(!t)return}for(e._pt=e._ptCache=0,l=m&&mn(l)||l&&!m,C=0;C<_.length;C++){if(U=_[C],L=U._gsap||xp(_)[C]._gsap,e._ptLookup[C]=$={},$d[L.id]&&Tr.length&&Vu(),W=y===_?C:y.indexOf(U),N&&(z=new N).init(U,D||A,e,W,y)!==!1&&(e._pt=T=new _n(e._pt,U,z.name,0,1,z.render,z,0,z.priority),z._props.forEach(function(G){$[G]=T}),z.priority&&(O=1)),!N||D)for(M in A)Tn[M]&&(z=gy(M,A,e,W,U,y))?z.priority&&(O=1):$[M]=T=yp.call(e,U,M,"get",A[M],W,y,0,r.stringFilter);e._op&&e._op[C]&&e.kill(U,e._op[C]),S&&e._pt&&(fr=e,lt.killTweensOf(U,$,e.globalTime(t)),X=!e.parent,fr=0),e._pt&&l&&($d[L.id]=1)}O&&My(e),e._onInit&&e._onInit(e)}e._onUpdate=u,e._initted=(!e._op||e._pt)&&!X,v&&t<=0&&E.render(Vn,!0,!0)},aP=function(e,t,i,r,s,o,a){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],u,c,d,h;if(!l)for(l=e._ptCache[t]=[],d=e._ptLookup,h=e._targets.length;h--;){if(u=d[h][t],u&&u.d&&u.d._pt)for(u=u.d._pt;u&&u.p!==t&&u.fp!==t;)u=u._next;if(!u)return th=1,e.vars[t]="+=0",Sp(e,a),th=0,1;l.push(u)}for(h=l.length;h--;)c=l[h],u=c._pt||c,u.s=(r||r===0)&&!s?r:u.s+(r||0)+o*u.c,u.c=i-u.s,c.e&&(c.e=vt(i)+Yt(c.e)),c.b&&(c.b=u.s+Yt(c.b))},lP=function(e,t){var i=e[0]?us(e[0]).harness:0,r=i&&i.aliases,s,o,a,l;if(!r)return t;s=Ss({},t);for(o in r)if(o in s)for(l=r[o].split(","),a=l.length;a--;)s[l[a]]=s[o];return s},uP=function(e,t,i,r){var s=t.ease||r||"power1.inOut",o,a;if($t(t))a=i[e]||(i[e]=[]),t.forEach(function(l,u){return a.push({t:u/(t.length-1)*100,v:l,e:s})});else for(o in t)a=i[o]||(i[o]=[]),o==="ease"||a.push({t:parseFloat(e),v:t[o],e:s})},Ea=function(e,t,i,r,s){return gt(e)?e.call(t,i,r,s):Ft(e)&&~e.indexOf("random(")?Xa(e):e},_y=vp+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,autoRevert",vy={};gn(_y+",id,stagger,delay,duration,paused,scrollTrigger",function(n){return vy[n]=1});var Et=function(n){Ox(e,n);function e(i,r,s,o){var a;typeof r=="number"&&(s.duration=r,r=s,s=null),a=n.call(this,o?r:Sa(r))||this;var l=a.vars,u=l.duration,c=l.delay,d=l.immediateRender,h=l.stagger,p=l.overwrite,v=l.keyframes,g=l.defaults,m=l.scrollTrigger,f=l.yoyoEase,_=r.parent||lt,x=($t(i)||kx(i)?qi(i[0]):"length"in r)?[i]:Gn(i),y,S,E,A,C,M,T,U;if(a._targets=x.length?xp(x):Hu("GSAP target "+i+" not found. https://greensock.com",!Pn.nullTargetWarn)||[],a._ptLookup=[],a._overwrite=p,v||h||$l(u)||$l(c)){if(r=a.vars,y=a.timeline=new rn({data:"nested",defaults:g||{},targets:_&&_.data==="nested"?_.vars.targets:x}),y.kill(),y.parent=y._dp=Ni(a),y._start=0,h||$l(u)||$l(c)){if(A=x.length,T=h&&ny(h),Ti(h))for(C in h)~_y.indexOf(C)&&(U||(U={}),U[C]=h[C]);for(S=0;S<A;S++)E=Gu(r,vy),E.stagger=0,f&&(E.yoyoEase=f),U&&Ss(E,U),M=x[S],E.duration=+Ea(u,Ni(a),S,M,x),E.delay=(+Ea(c,Ni(a),S,M,x)||0)-a._delay,!h&&A===1&&E.delay&&(a._delay=c=E.delay,a._start+=c,E.delay=0),y.to(M,E,T?T(S,M,x):0),y._ease=We.none;y.duration()?u=c=0:a.timeline=0}else if(v){Sa(qn(y.vars.defaults,{ease:"none"})),y._ease=fs(v.ease||r.ease||"none");var O=0,L,N,z;if($t(v))v.forEach(function($){return y.to(x,$,">")}),y.duration();else{E={};for(C in v)C==="ease"||C==="easeEach"||uP(C,v[C],E,v.easeEach);for(C in E)for(L=E[C].sort(function($,W){return $.t-W.t}),O=0,S=0;S<L.length;S++)N=L[S],z={ease:N.e,duration:(N.t-(S?L[S-1].t:0))/100*u},z[C]=N.v,y.to(x,z,O),O+=z.duration;y.duration()<u&&y.to({},{duration:u-y.duration()})}}u||a.duration(u=y.duration())}else a.timeline=0;return p===!0&&!dp&&(fr=Ni(a),lt.killTweensOf(x),fr=0),gi(_,Ni(a),s),r.reversed&&a.reverse(),r.paused&&a.paused(!0),(d||!u&&!v&&a._start===zt(_._time)&&mn(d)&&Bb(Ni(a))&&_.data!=="nested")&&(a._tTime=-et,a.render(Math.max(0,-c)||0)),m&&Qx(Ni(a),m),a}var t=e.prototype;return t.render=function(r,s,o){var a=this._time,l=this._tDur,u=this._dur,c=r<0,d=r>l-et&&!c?l:r<et?0:r,h,p,v,g,m,f,_,x,y;if(!u)Vb(this,r,s,o);else if(d!==this._tTime||!r||o||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==c){if(h=d,x=this.timeline,this._repeat){if(g=u+this._rDelay,this._repeat<-1&&c)return this.totalTime(g*100+r,s,o);if(h=zt(d%g),d===l?(v=this._repeat,h=u):(v=~~(d/g),v&&v===d/g&&(h=u,v--),h>u&&(h=u)),f=this._yoyo&&v&1,f&&(y=this._yEase,h=u-h),m=Uo(this._tTime,g),h===a&&!o&&this._initted)return this._tTime=d,this;v!==m&&(x&&this._yEase&&hy(x,f),this.vars.repeatRefresh&&!f&&!this._lock&&(this._lock=o=1,this.render(zt(g*v),!0).invalidate()._lock=0))}if(!this._initted){if(Jx(this,c?r:h,o,s,d))return this._tTime=0,this;if(a!==this._time)return this;if(u!==this._dur)return this.render(r,s,o)}if(this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),this.ratio=_=(y||this._ease)(h/u),this._from&&(this.ratio=_=1-_),h&&!a&&!s&&!v&&(Wn(this,"onStart"),this._tTime!==d))return this;for(p=this._pt;p;)p.r(_,p.d),p=p._next;x&&x.render(r<0?r:!h&&f?-et:x._dur*x._ease(h/this._dur),s,o)||this._startAt&&(this._zTime=r),this._onUpdate&&!s&&(c&&Kd(this,r,s,o),Wn(this,"onUpdate")),this._repeat&&v!==m&&this.vars.onRepeat&&!s&&this.parent&&Wn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(c&&!this._onUpdate&&Kd(this,r,!0,!0),(r||!u)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&Pr(this,1),!s&&!(c&&!a)&&(d||a||f)&&(Wn(this,d===l?"onComplete":"onReverseComplete",!0),this._prom&&!(d<l&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(r){return(!r||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(r),n.prototype.invalidate.call(this,r)},t.resetTo=function(r,s,o,a){Ya||An.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),u;return this._initted||Sp(this,l),u=this._ease(l/this._dur),aP(this,r,s,o,a,u,l)?this.resetTo(r,s,o,a):(xc(this,0),this.parent||Kx(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(r,s){if(s===void 0&&(s="all"),!r&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?ua(this):this;if(this.timeline){var o=this.timeline.totalDuration();return this.timeline.killTweensOf(r,s,fr&&fr.vars.overwrite!==!0)._first||ua(this),this.parent&&o!==this.timeline.totalDuration()&&No(this,this._dur*this.timeline._tDur/o,0,1),this}var a=this._targets,l=r?Gn(r):a,u=this._ptLookup,c=this._pt,d,h,p,v,g,m,f;if((!s||s==="all")&&kb(a,l))return s==="all"&&(this._pt=0),ua(this);for(d=this._op=this._op||[],s!=="all"&&(Ft(s)&&(g={},gn(s,function(_){return g[_]=1}),s=g),s=lP(a,s)),f=a.length;f--;)if(~l.indexOf(a[f])){h=u[f],s==="all"?(d[f]=s,v=h,p={}):(p=d[f]=d[f]||{},v=s);for(g in v)m=h&&h[g],m&&((!("kill"in m.d)||m.d.kill(g)===!0)&&_c(this,m,"_pt"),delete h[g]),p!=="all"&&(p[g]=1)}return this._initted&&!this._pt&&c&&ua(this),this},e.to=function(r,s){return new e(r,s,arguments[2])},e.from=function(r,s){return Ma(1,arguments)},e.delayedCall=function(r,s,o,a){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:r,onComplete:s,onReverseComplete:s,onCompleteParams:o,onReverseCompleteParams:o,callbackScope:a})},e.fromTo=function(r,s,o){return Ma(2,arguments)},e.set=function(r,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(r,s)},e.killTweensOf=function(r,s,o){return lt.killTweensOf(r,s,o)},e}(qa);qn(Et.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});gn("staggerTo,staggerFrom,staggerFromTo",function(n){Et[n]=function(){var e=new rn,t=Qd.call(arguments,0);return t.splice(n==="staggerFromTo"?5:4,0,0),e[n].apply(e,t)}});var Mp=function(e,t,i){return e[t]=i},xy=function(e,t,i){return e[t](i)},cP=function(e,t,i,r){return e[t](r.fp,i)},fP=function(e,t,i){return e.setAttribute(t,i)},Ep=function(e,t){return gt(e[t])?xy:hp(e[t])&&e.setAttribute?fP:Mp},yy=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},dP=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},Sy=function(e,t){var i=t._pt,r="";if(!e&&t.b)r=t.b;else if(e===1&&t.e)r=t.e;else{for(;i;)r=i.p+(i.m?i.m(i.s+i.c*e):Math.round((i.s+i.c*e)*1e4)/1e4)+r,i=i._next;r+=t.c}t.set(t.t,t.p,r,t)},Tp=function(e,t){for(var i=t._pt;i;)i.r(e,i.d),i=i._next},hP=function(e,t,i,r){for(var s=this._pt,o;s;)o=s._next,s.p===r&&s.modifier(e,t,i),s=o},pP=function(e){for(var t=this._pt,i,r;t;)r=t._next,t.p===e&&!t.op||t.op===e?_c(this,t,"_pt"):t.dep||(i=1),t=r;return!i},mP=function(e,t,i,r){r.mSet(e,t,r.m.call(r.tween,i,r.mt),r)},My=function(e){for(var t=e._pt,i,r,s,o;t;){for(i=t._next,r=s;r&&r.pr>t.pr;)r=r._next;(t._prev=r?r._prev:o)?t._prev._next=t:s=t,(t._next=r)?r._prev=t:o=t,t=i}e._pt=s},_n=function(){function n(t,i,r,s,o,a,l,u,c){this.t=i,this.s=s,this.c=o,this.p=r,this.r=a||yy,this.d=l||this,this.set=u||Mp,this.pr=c||0,this._next=t,t&&(t._prev=this)}var e=n.prototype;return e.modifier=function(i,r,s){this.mSet=this.mSet||this.set,this.set=mP,this.m=i,this.mt=s,this.tween=r},n}();gn(vp+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger",function(n){return _p[n]=1});Dn.TweenMax=Dn.TweenLite=Et;Dn.TimelineLite=Dn.TimelineMax=rn;lt=new rn({sortChildren:!1,defaults:Do,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Pn.stringFilter=fy;var ds=[],du={},gP=[],w_=0,_P=0,Of=function(e){return(du[e]||gP).map(function(t){return t()})},nh=function(){var e=Date.now(),t=[];e-w_>2&&(Of("matchMediaInit"),ds.forEach(function(i){var r=i.queries,s=i.conditions,o,a,l,u;for(a in r)o=Fn.matchMedia(r[a]).matches,o&&(l=1),o!==s[a]&&(s[a]=o,u=1);u&&(i.revert(),l&&t.push(i))}),Of("matchMediaRevert"),t.forEach(function(i){return i.onMatch(i)}),w_=e,Of("matchMedia"))},Ey=function(){function n(t,i){this.selector=i&&Jd(i),this.data=[],this._r=[],this.isReverted=!1,this.id=_P++,t&&this.add(t)}var e=n.prototype;return e.add=function(i,r,s){gt(i)&&(s=r,r=i,i=gt);var o=this,a=function(){var u=mt,c=o.selector,d;return u&&u!==o&&u.data.push(o),s&&(o.selector=Jd(s)),mt=o,d=r.apply(o,arguments),gt(d)&&o._r.push(d),mt=u,o.selector=c,o.isReverted=!1,d};return o.last=a,i===gt?a(o):i?o[i]=a:a},e.ignore=function(i){var r=mt;mt=null,i(this),mt=r},e.getTweens=function(){var i=[];return this.data.forEach(function(r){return r instanceof n?i.push.apply(i,r.getTweens()):r instanceof Et&&!(r.parent&&r.parent.data==="nested")&&i.push(r)}),i},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(i,r){var s=this;if(i){var o=this.getTweens();this.data.forEach(function(l){l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(u){return o.splice(o.indexOf(u),1)}))}),o.map(function(l){return{g:l.globalTime(0),t:l}}).sort(function(l,u){return u.g-l.g||-1}).forEach(function(l){return l.t.revert(i)}),this.data.forEach(function(l){return l instanceof rn?l.data!=="nested"&&l.kill():!(l instanceof Et)&&l.revert&&l.revert(i)}),this._r.forEach(function(l){return l(i,s)}),this.isReverted=!0}else this.data.forEach(function(l){return l.kill&&l.kill()});if(this.clear(),r)for(var a=ds.length;a--;)ds[a].id===this.id&&ds.splice(a,1)},e.revert=function(i){this.kill(i||{})},n}(),vP=function(){function n(t){this.contexts=[],this.scope=t}var e=n.prototype;return e.add=function(i,r,s){Ti(i)||(i={matches:i});var o=new Ey(0,s||this.scope),a=o.conditions={},l,u,c;mt&&!o.selector&&(o.selector=mt.selector),this.contexts.push(o),r=o.add("onMatch",r),o.queries=i;for(u in i)u==="all"?c=1:(l=Fn.matchMedia(i[u]),l&&(ds.indexOf(o)<0&&ds.push(o),(a[u]=l.matches)&&(c=1),l.addListener?l.addListener(nh):l.addEventListener("change",nh)));return c&&r(o),this},e.revert=function(i){this.kill(i||{})},e.kill=function(i){this.contexts.forEach(function(r){return r.kill(i,!0)})},n}(),ju={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),i=0;i<e;i++)t[i]=arguments[i];t.forEach(function(r){return ly(r)})},timeline:function(e){return new rn(e)},getTweensOf:function(e,t){return lt.getTweensOf(e,t)},getProperty:function(e,t,i,r){Ft(e)&&(e=Gn(e)[0]);var s=us(e||{}).get,o=i?$x:qx;return i==="native"&&(i=""),e&&(t?o((Tn[t]&&Tn[t].get||s)(e,t,i,r)):function(a,l,u){return o((Tn[a]&&Tn[a].get||s)(e,a,l,u))})},quickSetter:function(e,t,i){if(e=Gn(e),e.length>1){var r=e.map(function(c){return vn.quickSetter(c,t,i)}),s=r.length;return function(c){for(var d=s;d--;)r[d](c)}}e=e[0]||{};var o=Tn[t],a=us(e),l=a.harness&&(a.harness.aliases||{})[t]||t,u=o?function(c){var d=new o;ao._pt=0,d.init(e,i?c+i:c,ao,0,[e]),d.render(1,d),ao._pt&&Tp(1,ao)}:a.set(e,l);return o?u:function(c){return u(e,l,i?c+i:c,a,1)}},quickTo:function(e,t,i){var r,s=vn.to(e,Ss((r={},r[t]="+=0.1",r.paused=!0,r),i||{})),o=function(l,u,c){return s.resetTo(t,l,u,c)};return o.tween=s,o},isTweening:function(e){return lt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=fs(e.ease,Do.ease)),y_(Do,e||{})},config:function(e){return y_(Pn,e||{})},registerEffect:function(e){var t=e.name,i=e.effect,r=e.plugins,s=e.defaults,o=e.extendTimeline;(r||"").split(",").forEach(function(a){return a&&!Tn[a]&&!Dn[a]&&Hu(t+" effect requires "+a+" plugin.")}),Df[t]=function(a,l,u){return i(Gn(a),qn(l||{},s),u)},o&&(rn.prototype[t]=function(a,l,u){return this.add(Df[t](a,Ti(l)?l:(u=l)&&{},this),u)})},registerEase:function(e,t){We[e]=fs(t)},parseEase:function(e,t){return arguments.length?fs(e,t):We},getById:function(e){return lt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var i=new rn(e),r,s;for(i.smoothChildTiming=mn(e.smoothChildTiming),lt.remove(i),i._dp=0,i._time=i._tTime=lt._time,r=lt._first;r;)s=r._next,(t||!(!r._dur&&r instanceof Et&&r.vars.onComplete===r._targets[0]))&&gi(i,r,r._start-r._delay),r=s;return gi(lt,i,0),i},context:function(e,t){return e?new Ey(e,t):mt},matchMedia:function(e){return new vP(e)},matchMediaRefresh:function(){return ds.forEach(function(e){var t=e.conditions,i,r;for(r in t)t[r]&&(t[r]=!1,i=1);i&&e.revert()})||nh()},addEventListener:function(e,t){var i=du[e]||(du[e]=[]);~i.indexOf(t)||i.push(t)},removeEventListener:function(e,t){var i=du[e],r=i&&i.indexOf(t);r>=0&&i.splice(r,1)},utils:{wrap:Kb,wrapYoyo:Zb,distribute:ny,random:ry,snap:iy,normalize:$b,getUnit:Yt,clamp:jb,splitColor:uy,toArray:Gn,selector:Jd,mapRange:oy,pipe:Yb,unitize:qb,interpolate:Qb,shuffle:ty},install:Gx,effects:Df,ticker:An,updateRoot:rn.updateRoot,plugins:Tn,globalTimeline:lt,core:{PropTween:_n,globals:Wx,Tween:Et,Timeline:rn,Animation:qa,getCache:us,_removeLinkedListItem:_c,reverting:function(){return qt},context:function(e){return e&&mt&&(mt.data.push(e),e._ctx=mt),mt},suppressOverwrites:function(e){return dp=e}}};gn("to,from,fromTo,delayedCall,set,killTweensOf",function(n){return ju[n]=Et[n]});An.add(rn.updateRoot);ao=ju.to({},{duration:0});var xP=function(e,t){for(var i=e._pt;i&&i.p!==t&&i.op!==t&&i.fp!==t;)i=i._next;return i},yP=function(e,t){var i=e._targets,r,s,o;for(r in t)for(s=i.length;s--;)o=e._ptLookup[s][r],o&&(o=o.d)&&(o._pt&&(o=xP(o,r)),o&&o.modifier&&o.modifier(t[r],e,i[s],r))},Ff=function(e,t){return{name:e,rawVars:1,init:function(r,s,o){o._onInit=function(a){var l,u;if(Ft(s)&&(l={},gn(s,function(c){return l[c]=1}),s=l),t){l={};for(u in s)l[u]=t(s[u]);s=l}yP(a,s)}}}},vn=ju.registerPlugin({name:"attr",init:function(e,t,i,r,s){var o,a,l;this.tween=i;for(o in t)l=e.getAttribute(o)||"",a=this.add(e,"setAttribute",(l||0)+"",t[o],r,s,0,0,o),a.op=o,a.b=l,this._props.push(o)},render:function(e,t){for(var i=t._pt;i;)qt?i.set(i.t,i.p,i.b,i):i.r(e,i.d),i=i._next}},{name:"endArray",init:function(e,t){for(var i=t.length;i--;)this.add(e,i,e[i]||0,t[i],0,0,0,0,0,1)}},Ff("roundProps",eh),Ff("modifiers"),Ff("snap",iy))||ju;Et.version=rn.version=vn.version="3.12.1";Vx=1;pp()&&Io();We.Power0;We.Power1;We.Power2;We.Power3;We.Power4;We.Linear;We.Quad;We.Cubic;We.Quart;We.Quint;We.Strong;We.Elastic;We.Back;We.SteppedEase;We.Bounce;We.Sine;We.Expo;We.Circ;/*!
 * CSSPlugin 3.12.1
 * https://greensock.com
 *
 * Copyright 2008-2023, GreenSock. All rights reserved.
 * Subject to the terms at https://greensock.com/standard-license or for
 * Club GreenSock members, the agreement issued with that membership.
 * @author: Jack Doyle, jack@greensock.com
*/var A_,dr,xo,wp,ts,C_,Ap,SP=function(){return typeof window<"u"},$i={},Kr=180/Math.PI,yo=Math.PI/180,js=Math.atan2,R_=1e8,Cp=/([A-Z])/g,MP=/(left|right|width|margin|padding|x)/i,EP=/[\s,\(]\S/,_i={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},ih=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},TP=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},wP=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},AP=function(e,t){var i=t.s+t.c*e;t.set(t.t,t.p,~~(i+(i<0?-.5:.5))+t.u,t)},Ty=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},wy=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},CP=function(e,t,i){return e.style[t]=i},RP=function(e,t,i){return e.style.setProperty(t,i)},bP=function(e,t,i){return e._gsap[t]=i},PP=function(e,t,i){return e._gsap.scaleX=e._gsap.scaleY=i},LP=function(e,t,i,r,s){var o=e._gsap;o.scaleX=o.scaleY=i,o.renderTransform(s,o)},DP=function(e,t,i,r,s){var o=e._gsap;o[t]=i,o.renderTransform(s,o)},ut="transform",ui=ut+"Origin",UP=function n(e,t){var i=this,r=this.target,s=r.style;if(e in $i&&s){if(this.tfm=this.tfm||{},e!=="transform")e=_i[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return i.tfm[o]=Oi(r,o)}):this.tfm[e]=r._gsap.x?r._gsap[e]:Oi(r,e);else return _i.transform.split(",").forEach(function(o){return n.call(i,o,t)});if(this.props.indexOf(ut)>=0)return;r._gsap.svg&&(this.svgo=r.getAttribute("data-svg-origin"),this.props.push(ui,t,"")),e=ut}(s||t)&&this.props.push(e,t,s[e])},Ay=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},NP=function(){var e=this.props,t=this.target,i=t.style,r=t._gsap,s,o;for(s=0;s<e.length;s+=3)e[s+1]?t[e[s]]=e[s+2]:e[s+2]?i[e[s]]=e[s+2]:i.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(Cp,"-$1").toLowerCase());if(this.tfm){for(o in this.tfm)r[o]=this.tfm[o];r.svg&&(r.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Ap(),(!s||!s.isStart)&&!i[ut]&&(Ay(i),r.uncache=1)}},Cy=function(e,t){var i={target:e,props:[],revert:NP,save:UP};return e._gsap||vn.core.getCache(e),t&&t.split(",").forEach(function(r){return i.save(r)}),i},Ry,rh=function(e,t){var i=dr.createElementNS?dr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):dr.createElement(e);return i.style?i:dr.createElement(e)},Mi=function n(e,t,i){var r=getComputedStyle(e);return r[t]||r.getPropertyValue(t.replace(Cp,"-$1").toLowerCase())||r.getPropertyValue(t)||!i&&n(e,Oo(t)||t,1)||""},b_="O,Moz,ms,Ms,Webkit".split(","),Oo=function(e,t,i){var r=t||ts,s=r.style,o=5;if(e in s&&!i)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);o--&&!(b_[o]+e in s););return o<0?null:(o===3?"ms":o>=0?b_[o]:"")+e},sh=function(){SP()&&window.document&&(A_=window,dr=A_.document,xo=dr.documentElement,ts=rh("div")||{style:{}},rh("div"),ut=Oo(ut),ui=ut+"Origin",ts.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",Ry=!!Oo("perspective"),Ap=vn.core.reverting,wp=1)},kf=function n(e){var t=rh("svg",this.ownerSVGElement&&this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=this.parentNode,r=this.nextSibling,s=this.style.cssText,o;if(xo.appendChild(t),t.appendChild(this),this.style.display="block",e)try{o=this.getBBox(),this._gsapBBox=this.getBBox,this.getBBox=n}catch{}else this._gsapBBox&&(o=this._gsapBBox());return i&&(r?i.insertBefore(this,r):i.appendChild(this)),xo.removeChild(t),this.style.cssText=s,o},P_=function(e,t){for(var i=t.length;i--;)if(e.hasAttribute(t[i]))return e.getAttribute(t[i])},by=function(e){var t;try{t=e.getBBox()}catch{t=kf.call(e,!0)}return t&&(t.width||t.height)||e.getBBox===kf||(t=kf.call(e,!0)),t&&!t.width&&!t.x&&!t.y?{x:+P_(e,["x","cx","x1"])||0,y:+P_(e,["y","cy","y1"])||0,width:0,height:0}:t},Py=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&by(e))},$a=function(e,t){if(t){var i=e.style;t in $i&&t!==ui&&(t=ut),i.removeProperty?((t.substr(0,2)==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),i.removeProperty(t.replace(Cp,"-$1").toLowerCase())):i.removeAttribute(t)}},hr=function(e,t,i,r,s,o){var a=new _n(e._pt,t,i,0,1,o?wy:Ty);return e._pt=a,a.b=r,a.e=s,e._props.push(i),a},L_={deg:1,rad:1,turn:1},IP={grid:1,flex:1},Lr=function n(e,t,i,r){var s=parseFloat(i)||0,o=(i+"").trim().substr((s+"").length)||"px",a=ts.style,l=MP.test(t),u=e.tagName.toLowerCase()==="svg",c=(u?"client":"offset")+(l?"Width":"Height"),d=100,h=r==="px",p=r==="%",v,g,m,f;return r===o||!s||L_[r]||L_[o]?s:(o!=="px"&&!h&&(s=n(e,t,i,"px")),f=e.getCTM&&Py(e),(p||o==="%")&&($i[t]||~t.indexOf("adius"))?(v=f?e.getBBox()[l?"width":"height"]:e[c],vt(p?s/v*d:s/100*v)):(a[l?"width":"height"]=d+(h?o:r),g=~t.indexOf("adius")||r==="em"&&e.appendChild&&!u?e:e.parentNode,f&&(g=(e.ownerSVGElement||{}).parentNode),(!g||g===dr||!g.appendChild)&&(g=dr.body),m=g._gsap,m&&p&&m.width&&l&&m.time===An.time&&!m.uncache?vt(s/m.width*d):((p||o==="%")&&!IP[Mi(g,"display")]&&(a.position=Mi(e,"position")),g===e&&(a.position="static"),g.appendChild(ts),v=ts[c],g.removeChild(ts),a.position="absolute",l&&p&&(m=us(g),m.time=An.time,m.width=g[c]),vt(h?v*s/d:v&&s?d/v*s:0))))},Oi=function(e,t,i,r){var s;return wp||sh(),t in _i&&t!=="transform"&&(t=_i[t],~t.indexOf(",")&&(t=t.split(",")[0])),$i[t]&&t!=="transform"?(s=Za(e,r),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:Yu(Mi(e,ui))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||r||~(s+"").indexOf("calc("))&&(s=Xu[t]&&Xu[t](e,t,i)||Mi(e,t)||Xx(e,t)||(t==="opacity"?1:0))),i&&!~(s+"").trim().indexOf(" ")?Lr(e,t,s,i)+i:s},OP=function(e,t,i,r){if(!i||i==="none"){var s=Oo(t,e,1),o=s&&Mi(e,s,1);o&&o!==i?(t=s,i=o):t==="borderColor"&&(i=Mi(e,"borderTopColor"))}var a=new _n(this._pt,e.style,t,0,1,Sy),l=0,u=0,c,d,h,p,v,g,m,f,_,x,y,S;if(a.b=i,a.e=r,i+="",r+="",r==="auto"&&(e.style[t]=r,r=Mi(e,t)||r,e.style[t]=i),c=[i,r],fy(c),i=c[0],r=c[1],h=i.match(oo)||[],S=r.match(oo)||[],S.length){for(;d=oo.exec(r);)m=d[0],_=r.substring(l,d.index),v?v=(v+1)%5:(_.substr(-5)==="rgba("||_.substr(-5)==="hsla(")&&(v=1),m!==(g=h[u++]||"")&&(p=parseFloat(g)||0,y=g.substr((p+"").length),m.charAt(1)==="="&&(m=vo(p,m)+y),f=parseFloat(m),x=m.substr((f+"").length),l=oo.lastIndex-x.length,x||(x=x||Pn.units[t]||y,l===r.length&&(r+=x,a.e+=x)),y!==x&&(p=Lr(e,t,g,x)||0),a._pt={_next:a._pt,p:_||u===1?_:",",s:p,c:f-p,m:v&&v<4||t==="zIndex"?Math.round:0});a.c=l<r.length?r.substring(l,r.length):""}else a.r=t==="display"&&r==="none"?wy:Ty;return Bx.test(r)&&(a.e=0),this._pt=a,a},D_={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},FP=function(e){var t=e.split(" "),i=t[0],r=t[1]||"50%";return(i==="top"||i==="bottom"||r==="left"||r==="right")&&(e=i,i=r,r=e),t[0]=D_[i]||i,t[1]=D_[r]||r,t.join(" ")},kP=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var i=t.t,r=i.style,s=t.u,o=i._gsap,a,l,u;if(s==="all"||s===!0)r.cssText="",l=1;else for(s=s.split(","),u=s.length;--u>-1;)a=s[u],$i[a]&&(l=1,a=a==="transformOrigin"?ui:ut),$a(i,a);l&&($a(i,ut),o&&(o.svg&&i.removeAttribute("transform"),Za(i,1),o.uncache=1,Ay(r)))}},Xu={clearProps:function(e,t,i,r,s){if(s.data!=="isFromStart"){var o=e._pt=new _n(e._pt,t,i,0,0,kP);return o.u=r,o.pr=-10,o.tween=s,e._props.push(i),1}}},Ka=[1,0,0,1,0,0],Ly={},Dy=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},U_=function(e){var t=Mi(e,ut);return Dy(t)?Ka:t.substr(7).match(zx).map(vt)},Rp=function(e,t){var i=e._gsap||us(e),r=e.style,s=U_(e),o,a,l,u;return i.svg&&e.getAttribute("transform")?(l=e.transform.baseVal.consolidate().matrix,s=[l.a,l.b,l.c,l.d,l.e,l.f],s.join(",")==="1,0,0,1,0,0"?Ka:s):(s===Ka&&!e.offsetParent&&e!==xo&&!i.svg&&(l=r.display,r.display="block",o=e.parentNode,(!o||!e.offsetParent)&&(u=1,a=e.nextElementSibling,xo.appendChild(e)),s=U_(e),l?r.display=l:$a(e,"display"),u&&(a?o.insertBefore(e,a):o?o.appendChild(e):xo.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},oh=function(e,t,i,r,s,o){var a=e._gsap,l=s||Rp(e,!0),u=a.xOrigin||0,c=a.yOrigin||0,d=a.xOffset||0,h=a.yOffset||0,p=l[0],v=l[1],g=l[2],m=l[3],f=l[4],_=l[5],x=t.split(" "),y=parseFloat(x[0])||0,S=parseFloat(x[1])||0,E,A,C,M;i?l!==Ka&&(A=p*m-v*g)&&(C=y*(m/A)+S*(-g/A)+(g*_-m*f)/A,M=y*(-v/A)+S*(p/A)-(p*_-v*f)/A,y=C,S=M):(E=by(e),y=E.x+(~x[0].indexOf("%")?y/100*E.width:y),S=E.y+(~(x[1]||x[0]).indexOf("%")?S/100*E.height:S)),r||r!==!1&&a.smooth?(f=y-u,_=S-c,a.xOffset=d+(f*p+_*g)-f,a.yOffset=h+(f*v+_*m)-_):a.xOffset=a.yOffset=0,a.xOrigin=y,a.yOrigin=S,a.smooth=!!r,a.origin=t,a.originIsAbsolute=!!i,e.style[ui]="0px 0px",o&&(hr(o,a,"xOrigin",u,y),hr(o,a,"yOrigin",c,S),hr(o,a,"xOffset",d,a.xOffset),hr(o,a,"yOffset",h,a.yOffset)),e.setAttribute("data-svg-origin",y+" "+S)},Za=function(e,t){var i=e._gsap||new my(e);if("x"in i&&!t&&!i.uncache)return i;var r=e.style,s=i.scaleX<0,o="px",a="deg",l=getComputedStyle(e),u=Mi(e,ui)||"0",c,d,h,p,v,g,m,f,_,x,y,S,E,A,C,M,T,U,O,L,N,z,$,W,D,X,G,se,F,ee,K,re;return c=d=h=g=m=f=_=x=y=0,p=v=1,i.svg=!!(e.getCTM&&Py(e)),l.translate&&((l.translate!=="none"||l.scale!=="none"||l.rotate!=="none")&&(r[ut]=(l.translate!=="none"?"translate3d("+(l.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(l.rotate!=="none"?"rotate("+l.rotate+") ":"")+(l.scale!=="none"?"scale("+l.scale.split(" ").join(",")+") ":"")+(l[ut]!=="none"?l[ut]:"")),r.scale=r.rotate=r.translate="none"),A=Rp(e,i.svg),i.svg&&(i.uncache?(D=e.getBBox(),u=i.xOrigin-D.x+"px "+(i.yOrigin-D.y)+"px",W=""):W=!t&&e.getAttribute("data-svg-origin"),oh(e,W||u,!!W||i.originIsAbsolute,i.smooth!==!1,A)),S=i.xOrigin||0,E=i.yOrigin||0,A!==Ka&&(U=A[0],O=A[1],L=A[2],N=A[3],c=z=A[4],d=$=A[5],A.length===6?(p=Math.sqrt(U*U+O*O),v=Math.sqrt(N*N+L*L),g=U||O?js(O,U)*Kr:0,_=L||N?js(L,N)*Kr+g:0,_&&(v*=Math.abs(Math.cos(_*yo))),i.svg&&(c-=S-(S*U+E*L),d-=E-(S*O+E*N))):(re=A[6],ee=A[7],G=A[8],se=A[9],F=A[10],K=A[11],c=A[12],d=A[13],h=A[14],C=js(re,F),m=C*Kr,C&&(M=Math.cos(-C),T=Math.sin(-C),W=z*M+G*T,D=$*M+se*T,X=re*M+F*T,G=z*-T+G*M,se=$*-T+se*M,F=re*-T+F*M,K=ee*-T+K*M,z=W,$=D,re=X),C=js(-L,F),f=C*Kr,C&&(M=Math.cos(-C),T=Math.sin(-C),W=U*M-G*T,D=O*M-se*T,X=L*M-F*T,K=N*T+K*M,U=W,O=D,L=X),C=js(O,U),g=C*Kr,C&&(M=Math.cos(C),T=Math.sin(C),W=U*M+O*T,D=z*M+$*T,O=O*M-U*T,$=$*M-z*T,U=W,z=D),m&&Math.abs(m)+Math.abs(g)>359.9&&(m=g=0,f=180-f),p=vt(Math.sqrt(U*U+O*O+L*L)),v=vt(Math.sqrt($*$+re*re)),C=js(z,$),_=Math.abs(C)>2e-4?C*Kr:0,y=K?1/(K<0?-K:K):0),i.svg&&(W=e.getAttribute("transform"),i.forceCSS=e.setAttribute("transform","")||!Dy(Mi(e,ut)),W&&e.setAttribute("transform",W))),Math.abs(_)>90&&Math.abs(_)<270&&(s?(p*=-1,_+=g<=0?180:-180,g+=g<=0?180:-180):(v*=-1,_+=_<=0?180:-180)),t=t||i.uncache,i.x=c-((i.xPercent=c&&(!t&&i.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-c)?-50:0)))?e.offsetWidth*i.xPercent/100:0)+o,i.y=d-((i.yPercent=d&&(!t&&i.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*i.yPercent/100:0)+o,i.z=h+o,i.scaleX=vt(p),i.scaleY=vt(v),i.rotation=vt(g)+a,i.rotationX=vt(m)+a,i.rotationY=vt(f)+a,i.skewX=_+a,i.skewY=x+a,i.transformPerspective=y+o,(i.zOrigin=parseFloat(u.split(" ")[2])||0)&&(r[ui]=Yu(u)),i.xOffset=i.yOffset=0,i.force3D=Pn.force3D,i.renderTransform=i.svg?BP:Ry?Uy:zP,i.uncache=0,i},Yu=function(e){return(e=e.split(" "))[0]+" "+e[1]},zf=function(e,t,i){var r=Yt(t);return vt(parseFloat(t)+parseFloat(Lr(e,"x",i+"px",r)))+r},zP=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,Uy(e,t)},Wr="0deg",ia="0px",jr=") ",Uy=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.z,u=i.rotation,c=i.rotationY,d=i.rotationX,h=i.skewX,p=i.skewY,v=i.scaleX,g=i.scaleY,m=i.transformPerspective,f=i.force3D,_=i.target,x=i.zOrigin,y="",S=f==="auto"&&e&&e!==1||f===!0;if(x&&(d!==Wr||c!==Wr)){var E=parseFloat(c)*yo,A=Math.sin(E),C=Math.cos(E),M;E=parseFloat(d)*yo,M=Math.cos(E),o=zf(_,o,A*M*-x),a=zf(_,a,-Math.sin(E)*-x),l=zf(_,l,C*M*-x+x)}m!==ia&&(y+="perspective("+m+jr),(r||s)&&(y+="translate("+r+"%, "+s+"%) "),(S||o!==ia||a!==ia||l!==ia)&&(y+=l!==ia||S?"translate3d("+o+", "+a+", "+l+") ":"translate("+o+", "+a+jr),u!==Wr&&(y+="rotate("+u+jr),c!==Wr&&(y+="rotateY("+c+jr),d!==Wr&&(y+="rotateX("+d+jr),(h!==Wr||p!==Wr)&&(y+="skew("+h+", "+p+jr),(v!==1||g!==1)&&(y+="scale("+v+", "+g+jr),_.style[ut]=y||"translate(0, 0)"},BP=function(e,t){var i=t||this,r=i.xPercent,s=i.yPercent,o=i.x,a=i.y,l=i.rotation,u=i.skewX,c=i.skewY,d=i.scaleX,h=i.scaleY,p=i.target,v=i.xOrigin,g=i.yOrigin,m=i.xOffset,f=i.yOffset,_=i.forceCSS,x=parseFloat(o),y=parseFloat(a),S,E,A,C,M;l=parseFloat(l),u=parseFloat(u),c=parseFloat(c),c&&(c=parseFloat(c),u+=c,l+=c),l||u?(l*=yo,u*=yo,S=Math.cos(l)*d,E=Math.sin(l)*d,A=Math.sin(l-u)*-h,C=Math.cos(l-u)*h,u&&(c*=yo,M=Math.tan(u-c),M=Math.sqrt(1+M*M),A*=M,C*=M,c&&(M=Math.tan(c),M=Math.sqrt(1+M*M),S*=M,E*=M)),S=vt(S),E=vt(E),A=vt(A),C=vt(C)):(S=d,C=h,E=A=0),(x&&!~(o+"").indexOf("px")||y&&!~(a+"").indexOf("px"))&&(x=Lr(p,"x",o,"px"),y=Lr(p,"y",a,"px")),(v||g||m||f)&&(x=vt(x+v-(v*S+g*A)+m),y=vt(y+g-(v*E+g*C)+f)),(r||s)&&(M=p.getBBox(),x=vt(x+r/100*M.width),y=vt(y+s/100*M.height)),M="matrix("+S+","+E+","+A+","+C+","+x+","+y+")",p.setAttribute("transform",M),_&&(p.style[ut]=M)},HP=function(e,t,i,r,s){var o=360,a=Ft(s),l=parseFloat(s)*(a&&~s.indexOf("rad")?Kr:1),u=l-r,c=r+u+"deg",d,h;return a&&(d=s.split("_")[1],d==="short"&&(u%=o,u!==u%(o/2)&&(u+=u<0?o:-o)),d==="cw"&&u<0?u=(u+o*R_)%o-~~(u/o)*o:d==="ccw"&&u>0&&(u=(u-o*R_)%o-~~(u/o)*o)),e._pt=h=new _n(e._pt,t,i,r,u,TP),h.e=c,h.u="deg",e._props.push(i),h},N_=function(e,t){for(var i in t)e[i]=t[i];return e},VP=function(e,t,i){var r=N_({},i._gsap),s="perspective,force3D,transformOrigin,svgOrigin",o=i.style,a,l,u,c,d,h,p,v;r.svg?(u=i.getAttribute("transform"),i.setAttribute("transform",""),o[ut]=t,a=Za(i,1),$a(i,ut),i.setAttribute("transform",u)):(u=getComputedStyle(i)[ut],o[ut]=t,a=Za(i,1),o[ut]=u);for(l in $i)u=r[l],c=a[l],u!==c&&s.indexOf(l)<0&&(p=Yt(u),v=Yt(c),d=p!==v?Lr(i,l,u,v):parseFloat(u),h=parseFloat(c),e._pt=new _n(e._pt,a,l,d,h-d,ih),e._pt.u=v||0,e._props.push(l));N_(a,r)};gn("padding,margin,Width,Radius",function(n,e){var t="Top",i="Right",r="Bottom",s="Left",o=(e<3?[t,i,r,s]:[t+s,t+i,r+i,r+s]).map(function(a){return e<2?n+a:"border"+a+n});Xu[e>1?"border"+n:n]=function(a,l,u,c,d){var h,p;if(arguments.length<4)return h=o.map(function(v){return Oi(a,v,u)}),p=h.join(" "),p.split(h[0]).length===5?h[0]:p;h=(c+"").split(" "),p={},o.forEach(function(v,g){return p[v]=h[g]=h[g]||h[(g-1)/2|0]}),a.init(l,p,d)}});var Ny={name:"css",register:sh,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,i,r,s){var o=this._props,a=e.style,l=i.vars.startAt,u,c,d,h,p,v,g,m,f,_,x,y,S,E,A,C;wp||sh(),this.styles=this.styles||Cy(e),C=this.styles.props,this.tween=i;for(g in t)if(g!=="autoRound"&&(c=t[g],!(Tn[g]&&gy(g,t,i,r,e,s)))){if(p=typeof c,v=Xu[g],p==="function"&&(c=c.call(i,r,e,s),p=typeof c),p==="string"&&~c.indexOf("random(")&&(c=Xa(c)),v)v(this,e,g,c,i)&&(A=1);else if(g.substr(0,2)==="--")u=(getComputedStyle(e).getPropertyValue(g)+"").trim(),c+="",wr.lastIndex=0,wr.test(u)||(m=Yt(u),f=Yt(c)),f?m!==f&&(u=Lr(e,g,u,f)+f):m&&(c+=m),this.add(a,"setProperty",u,c,r,s,0,0,g),o.push(g),C.push(g,0,a[g]);else if(p!=="undefined"){if(l&&g in l?(u=typeof l[g]=="function"?l[g].call(i,r,e,s):l[g],Ft(u)&&~u.indexOf("random(")&&(u=Xa(u)),Yt(u+"")||(u+=Pn.units[g]||Yt(Oi(e,g))||""),(u+"").charAt(1)==="="&&(u=Oi(e,g))):u=Oi(e,g),h=parseFloat(u),_=p==="string"&&c.charAt(1)==="="&&c.substr(0,2),_&&(c=c.substr(2)),d=parseFloat(c),g in _i&&(g==="autoAlpha"&&(h===1&&Oi(e,"visibility")==="hidden"&&d&&(h=0),C.push("visibility",0,a.visibility),hr(this,a,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),g!=="scale"&&g!=="transform"&&(g=_i[g],~g.indexOf(",")&&(g=g.split(",")[0]))),x=g in $i,x){if(this.styles.save(g),y||(S=e._gsap,S.renderTransform&&!t.parseTransform||Za(e,t.parseTransform),E=t.smoothOrigin!==!1&&S.smooth,y=this._pt=new _n(this._pt,a,ut,0,1,S.renderTransform,S,0,-1),y.dep=1),g==="scale")this._pt=new _n(this._pt,S,"scaleY",S.scaleY,(_?vo(S.scaleY,_+d):d)-S.scaleY||0,ih),this._pt.u=0,o.push("scaleY",g),g+="X";else if(g==="transformOrigin"){C.push(ui,0,a[ui]),c=FP(c),S.svg?oh(e,c,0,E,0,this):(f=parseFloat(c.split(" ")[2])||0,f!==S.zOrigin&&hr(this,S,"zOrigin",S.zOrigin,f),hr(this,a,g,Yu(u),Yu(c)));continue}else if(g==="svgOrigin"){oh(e,c,1,E,0,this);continue}else if(g in Ly){HP(this,S,g,h,_?vo(h,_+c):c);continue}else if(g==="smoothOrigin"){hr(this,S,"smooth",S.smooth,c);continue}else if(g==="force3D"){S[g]=c;continue}else if(g==="transform"){VP(this,c,e);continue}}else g in a||(g=Oo(g)||g);if(x||(d||d===0)&&(h||h===0)&&!EP.test(c)&&g in a)m=(u+"").substr((h+"").length),d||(d=0),f=Yt(c)||(g in Pn.units?Pn.units[g]:m),m!==f&&(h=Lr(e,g,u,f)),this._pt=new _n(this._pt,x?S:a,g,h,(_?vo(h,_+d):d)-h,!x&&(f==="px"||g==="zIndex")&&t.autoRound!==!1?AP:ih),this._pt.u=f||0,m!==f&&f!=="%"&&(this._pt.b=u,this._pt.r=wP);else if(g in a)OP.call(this,e,g,u,_?_+c:c);else if(g in e)this.add(e,g,u||e[g],_?_+c:c,r,s);else if(g!=="parseTransform"){gp(g,c);continue}x||(g in a?C.push(g,0,a[g]):C.push(g,1,u||e[g])),o.push(g)}}A&&My(this)},render:function(e,t){if(t.tween._time||!Ap())for(var i=t._pt;i;)i.r(e,i.d),i=i._next;else t.styles.revert()},get:Oi,aliases:_i,getSetter:function(e,t,i){var r=_i[t];return r&&r.indexOf(",")<0&&(t=r),t in $i&&t!==ui&&(e._gsap.x||Oi(e,"x"))?i&&C_===i?t==="scale"?PP:bP:(C_=i||{})&&(t==="scale"?LP:DP):e.style&&!hp(e.style[t])?CP:~t.indexOf("-")?RP:Ep(e,t)},core:{_removeProperty:$a,_getMatrix:Rp}};vn.utils.checkPrefix=Oo;vn.core.getStyleSaver=Cy;(function(n,e,t,i){var r=gn(n+","+e+","+t,function(s){$i[s]=1});gn(e,function(s){Pn.units[s]="deg",Ly[s]=1}),_i[r[13]]=n+","+e,gn(i,function(s){var o=s.split(":");_i[o[1]]=r[o[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");gn("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(n){Pn.units[n]="px"});vn.registerPlugin(Ny);var Iy=vn.registerPlugin(Ny)||vn;Iy.core.Tween;const GP=()=>{const n=pe.useRef(null);return pe.useEffect(()=>{let e;const t=new Mb,i=new fp(2,64,64),r=new Eb({color:"#ffe095"}),s=new Hi(i,r);t.add(s);const o={width:window.innerWidth/1.74,height:400},a=new Cb(16777215,1,100);a.position.set(0,10,10),t.add(a);const l=new wn(45,o.width/o.height,.1,100);l.position.z=10,t.add(l);const u=new Ix({canvas:n.current});u.setSize(o.width,o.height),u.setClearColor("#171717"),u.setPixelRatio(2);const c=new Rb(l,u.domElement);c.enableDamping=!0,c.enablePan=!1,c.enableZoom=!1,c.autoRotate=!0;const d=()=>{u.render(t,l)},h=()=>{c.update(),d(),e=window.requestAnimationFrame(h)};h(),Iy.timeline({defaults:{duration:1}}).fromTo(s.scale,{z:0,x:0,y:0},{z:1,x:1,y:1});const v=()=>{o.width=window.innerWidth/1.74,o.height=400,l.aspect=o.width/o.height,l.updateProjectionMatrix(),u.setSize(o.width,o.height),d()};return window.addEventListener("resize",v),()=>{window.removeEventListener("resize",v),window.cancelAnimationFrame(e)}},[]),k.jsx(k.Fragment,{children:k.jsx("div",{className:"three-container",children:k.jsx("canvas",{ref:n,className:"webgl"})})})},WP=()=>(pe.useEffect(()=>{window.scroll(0,0)},[]),k.jsxs("main",{children:[k.jsx(c1,{}),k.jsx("hr",{}),k.jsx(GP,{}),k.jsx("hr",{}),k.jsx(h1,{}),k.jsx(v1,{}),k.jsx(g1,{}),k.jsx("div",{className:"button-container",children:k.jsx(rp,{text:"About me",path:"/about",iconClass:"fa-solid fa-arrow-right"})})]})),jP=({exp:n})=>k.jsxs("div",{className:"exp-card",children:[k.jsx("h3",{children:n.title}),k.jsx("p",{children:n.date}),k.jsx("ul",{children:n.jobItems.map((e,t)=>k.jsx("li",{children:e},t*2))})]});const XP=()=>{const[n,e]=pe.useState(!1);return k.jsxs(k.Fragment,{children:[k.jsx(Rr,{iconClass:"fa-solid fa-certificate",title:"Certificates"}),k.jsx("p",{style:{margin:"0.2em 0em 1em 0em"},children:" There are some of my certifications... "}),k.jsxs("div",{className:"certificates-container",children:[k.jsx("img",{src:"./certificates\\1.webp",alt:"freeCodeCamp Certificate"}),k.jsx("img",{src:"./certificates\\3.webp",alt:"freeCodeCamp Certificate"}),n&&k.jsxs(k.Fragment,{children:[k.jsx("img",{src:"./certificates\\2.webp",alt:"freeCodeCamp Certificate"}),k.jsx("img",{src:"./certificates\\4.webp",alt:"freeCodeCamp Certificate"}),k.jsx("img",{src:"./certificates\\5.webp",alt:"freeCodeCamp Certificate"})]})]}),k.jsx("p",{style:{cursor:"pointer",textAlign:"center",marginTop:"1em"},onClick:()=>e(t=>!t),children:n?"Show less...":"Show more..."})]})};function YP(){window.open("https://www.linkedin.com/company/kubrik-digital/?trk=public_profile_experience-item_profile-section-card_subtitle-click&originalSubdomain=ar")}const qP=[{title:"FrontEnd development - Kubrik Digital",date:"Sep 2022 - Today",jobItems:["Developing an intuitive and efficient administration dashboard using Angular and RxJs for managing accounting and finance of businesses.","Designing an attractive and user-friendly interface using tools like Figma and implemented styles using Angular Material.","Creation of reusable components using good coding practices."]},{title:"Virtual Card - DSF Representations",date:"Apr 2022",jobItems:["My client, a businessman, wanted to expand his business and establish an online presence. As a result, he approached me to create a virtual card that would serve as a representation of his company. The page includes various contact details and a list of his products ."]},{title:"Journey Begins...",date:"Jan 2021",jobItems:["By beeing interested in Web Development, I started to do some research and learned the basics about HTML, CSS and JavaScript.",'Some of the projects I made are in the "More Projects" section.']}],$P=()=>(hc(),pe.useEffect(()=>{window.scroll(0,0)},[]),k.jsxs("section",{className:"about-section-container",children:[k.jsx(Rr,{aperture:!0,title:"About me"}),k.jsxs("p",{children:["My name is ",k.jsx("b",{className:"b",children:"Vittorio Pugliese"})," and I'm a software developer based in Buenos Aires, Argentina. Since very young I was passionate about computers and music, but around the beginning of 2021 I started learning Web Development by my own.",k.jsx("br",{}),"I'm currently working at"," ",k.jsxs("b",{onClick:YP,className:"b",style:{cursor:"pointer"},children:["Kubrik Digital"," "]}),"with ",k.jsx("b",{style:{color:"#ec4242"},children:" Angular "})," but also learning"," ",k.jsx("b",{style:{color:"#448de7"},children:" React"}),"."]}),k.jsxs("div",{className:"experience-container",children:[k.jsx(Rr,{iconClass:"fa-solid fa-dumbbell",title:"Experience"}),qP.map(n=>k.jsx(jP,{exp:n},n.title))]}),k.jsx(XP,{}),k.jsx("div",{className:"button-container",children:k.jsx(rp,{text:"Contact me",path:"/contact",iconClass:"fa-solid fa-arrow-right"})})]})),KP=({social:n})=>k.jsx("a",{href:n.link,target:"_blank","data-aos":"fade-up",children:k.jsxs("div",{className:"social",children:[k.jsx("i",{style:{color:n.color},className:`fa-brands fa-${n.name.toLowerCase()}`}),k.jsx("p",{style:{color:n.color},children:n.name})]})}),ZP=[{name:"LinkedIn",color:"#466cf4",link:"https://www.linkedin.com/in/vittoopugliese/"},{name:"GitHub",color:"#d5d5d5",link:"https://github.com/vittoopugliese"},{name:"Twitter",color:"#549ef9",link:"https://twitter.com/vittoopugliese"},{name:"SoundCloud",color:"#f09c34",link:"https://soundcloud.com/vittoopugliese"}],QP=()=>{const[n,e]=pe.useState(1);pe.useEffect(()=>(window.scroll(0,0),setInterval(()=>{e(i=>i+1)},1250),()=>{clearInterval()}),[]);function t(i=1){return i>7&&e(1),{background:`var(--gradient${i})`}}return k.jsxs("div",{"data-aos":"fade-up",className:"contactContainer",children:[k.jsx(Rr,{iconClass:"fa-solid fa-address-book",title:"Contact Me"}),k.jsx("a",{href:"mailto:vittoopugliesedev@gmail.com",children:k.jsxs("button",{className:"email-button",style:t(n),children:[k.jsx("i",{className:"fa-solid fa-envelope-open-text"}),k.jsx("p",{children:"Send me an Email"})]})}),k.jsx(Rr,{iconClass:"fa-solid fa-at",title:"Social Media"}),k.jsx("div",{className:"socials-container",children:ZP.map(i=>k.jsx(KP,{social:i},i.name))})]})};var Oy={exports:{}};(function(n,e){(function(t,i){n.exports=i()})(Vy,function(){return function(t){function i(s){if(r[s])return r[s].exports;var o=r[s]={exports:{},id:s,loaded:!1};return t[s].call(o.exports,o,o.exports,i),o.loaded=!0,o.exports}var r={};return i.m=t,i.c=r,i.p="dist/",i(0)}([function(t,i,r){function s(N){return N&&N.__esModule?N:{default:N}}var o=Object.assign||function(N){for(var z=1;z<arguments.length;z++){var $=arguments[z];for(var W in $)Object.prototype.hasOwnProperty.call($,W)&&(N[W]=$[W])}return N},a=r(1),l=(s(a),r(6)),u=s(l),c=r(7),d=s(c),h=r(8),p=s(h),v=r(9),g=s(v),m=r(10),f=s(m),_=r(11),x=s(_),y=r(14),S=s(y),E=[],A=!1,C={offset:120,delay:0,easing:"ease",duration:400,disable:!1,once:!1,startEvent:"DOMContentLoaded",throttleDelay:99,debounceDelay:50,disableMutationObserver:!1},M=function(){var N=arguments.length>0&&arguments[0]!==void 0&&arguments[0];if(N&&(A=!0),A)return E=(0,x.default)(E,C),(0,f.default)(E,C.once),E},T=function(){E=(0,S.default)(),M()},U=function(){E.forEach(function(N,z){N.node.removeAttribute("data-aos"),N.node.removeAttribute("data-aos-easing"),N.node.removeAttribute("data-aos-duration"),N.node.removeAttribute("data-aos-delay")})},O=function(N){return N===!0||N==="mobile"&&g.default.mobile()||N==="phone"&&g.default.phone()||N==="tablet"&&g.default.tablet()||typeof N=="function"&&N()===!0},L=function(N){C=o(C,N),E=(0,S.default)();var z=document.all&&!window.atob;return O(C.disable)||z?U():(C.disableMutationObserver||p.default.isSupported()||(console.info(`
      aos: MutationObserver is not supported on this browser,
      code mutations observing has been disabled.
      You may have to call "refreshHard()" by yourself.
    `),C.disableMutationObserver=!0),document.querySelector("body").setAttribute("data-aos-easing",C.easing),document.querySelector("body").setAttribute("data-aos-duration",C.duration),document.querySelector("body").setAttribute("data-aos-delay",C.delay),C.startEvent==="DOMContentLoaded"&&["complete","interactive"].indexOf(document.readyState)>-1?M(!0):C.startEvent==="load"?window.addEventListener(C.startEvent,function(){M(!0)}):document.addEventListener(C.startEvent,function(){M(!0)}),window.addEventListener("resize",(0,d.default)(M,C.debounceDelay,!0)),window.addEventListener("orientationchange",(0,d.default)(M,C.debounceDelay,!0)),window.addEventListener("scroll",(0,u.default)(function(){(0,f.default)(E,C.once)},C.throttleDelay)),C.disableMutationObserver||p.default.ready("[data-aos]",T),E)};t.exports={init:L,refresh:M,refreshHard:T}},function(t,i){},,,,,function(t,i){(function(r){function s(O,L,N){function z(ue){var we=K,Ee=re;return K=re=void 0,$e=ue,de=O.apply(Ee,we)}function $(ue){return $e=ue,Me=setTimeout(X,L),be?z(ue):de}function W(ue){var we=ue-ye,Ee=ue-$e,Ke=L-we;return H?T(Ke,le-Ee):Ke}function D(ue){var we=ue-ye,Ee=ue-$e;return ye===void 0||we>=L||we<0||H&&Ee>=le}function X(){var ue=U();return D(ue)?G(ue):void(Me=setTimeout(X,W(ue)))}function G(ue){return Me=void 0,De&&K?z(ue):(K=re=void 0,de)}function se(){Me!==void 0&&clearTimeout(Me),$e=0,K=ye=re=Me=void 0}function F(){return Me===void 0?de:G(U())}function ee(){var ue=U(),we=D(ue);if(K=arguments,re=this,ye=ue,we){if(Me===void 0)return $(ye);if(H)return Me=setTimeout(X,L),z(ye)}return Me===void 0&&(Me=setTimeout(X,L)),de}var K,re,le,de,Me,ye,$e=0,be=!1,H=!1,De=!0;if(typeof O!="function")throw new TypeError(h);return L=c(L)||0,a(N)&&(be=!!N.leading,H="maxWait"in N,le=H?M(c(N.maxWait)||0,L):le,De="trailing"in N?!!N.trailing:De),ee.cancel=se,ee.flush=F,ee}function o(O,L,N){var z=!0,$=!0;if(typeof O!="function")throw new TypeError(h);return a(N)&&(z="leading"in N?!!N.leading:z,$="trailing"in N?!!N.trailing:$),s(O,L,{leading:z,maxWait:L,trailing:$})}function a(O){var L=typeof O>"u"?"undefined":d(O);return!!O&&(L=="object"||L=="function")}function l(O){return!!O&&(typeof O>"u"?"undefined":d(O))=="object"}function u(O){return(typeof O>"u"?"undefined":d(O))=="symbol"||l(O)&&C.call(O)==v}function c(O){if(typeof O=="number")return O;if(u(O))return p;if(a(O)){var L=typeof O.valueOf=="function"?O.valueOf():O;O=a(L)?L+"":L}if(typeof O!="string")return O===0?O:+O;O=O.replace(g,"");var N=f.test(O);return N||_.test(O)?x(O.slice(2),N?2:8):m.test(O)?p:+O}var d=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(O){return typeof O}:function(O){return O&&typeof Symbol=="function"&&O.constructor===Symbol&&O!==Symbol.prototype?"symbol":typeof O},h="Expected a function",p=NaN,v="[object Symbol]",g=/^\s+|\s+$/g,m=/^[-+]0x[0-9a-f]+$/i,f=/^0b[01]+$/i,_=/^0o[0-7]+$/i,x=parseInt,y=(typeof r>"u"?"undefined":d(r))=="object"&&r&&r.Object===Object&&r,S=(typeof self>"u"?"undefined":d(self))=="object"&&self&&self.Object===Object&&self,E=y||S||Function("return this")(),A=Object.prototype,C=A.toString,M=Math.max,T=Math.min,U=function(){return E.Date.now()};t.exports=o}).call(i,function(){return this}())},function(t,i){(function(r){function s(U,O,L){function N(De){var ue=ee,we=K;return ee=K=void 0,ye=De,le=U.apply(we,ue)}function z(De){return ye=De,de=setTimeout(D,O),$e?N(De):le}function $(De){var ue=De-Me,we=De-ye,Ee=O-ue;return be?M(Ee,re-we):Ee}function W(De){var ue=De-Me,we=De-ye;return Me===void 0||ue>=O||ue<0||be&&we>=re}function D(){var De=T();return W(De)?X(De):void(de=setTimeout(D,$(De)))}function X(De){return de=void 0,H&&ee?N(De):(ee=K=void 0,le)}function G(){de!==void 0&&clearTimeout(de),ye=0,ee=Me=K=de=void 0}function se(){return de===void 0?le:X(T())}function F(){var De=T(),ue=W(De);if(ee=arguments,K=this,Me=De,ue){if(de===void 0)return z(Me);if(be)return de=setTimeout(D,O),N(Me)}return de===void 0&&(de=setTimeout(D,O)),le}var ee,K,re,le,de,Me,ye=0,$e=!1,be=!1,H=!0;if(typeof U!="function")throw new TypeError(d);return O=u(O)||0,o(L)&&($e=!!L.leading,be="maxWait"in L,re=be?C(u(L.maxWait)||0,O):re,H="trailing"in L?!!L.trailing:H),F.cancel=G,F.flush=se,F}function o(U){var O=typeof U>"u"?"undefined":c(U);return!!U&&(O=="object"||O=="function")}function a(U){return!!U&&(typeof U>"u"?"undefined":c(U))=="object"}function l(U){return(typeof U>"u"?"undefined":c(U))=="symbol"||a(U)&&A.call(U)==p}function u(U){if(typeof U=="number")return U;if(l(U))return h;if(o(U)){var O=typeof U.valueOf=="function"?U.valueOf():U;U=o(O)?O+"":O}if(typeof U!="string")return U===0?U:+U;U=U.replace(v,"");var L=m.test(U);return L||f.test(U)?_(U.slice(2),L?2:8):g.test(U)?h:+U}var c=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(U){return typeof U}:function(U){return U&&typeof Symbol=="function"&&U.constructor===Symbol&&U!==Symbol.prototype?"symbol":typeof U},d="Expected a function",h=NaN,p="[object Symbol]",v=/^\s+|\s+$/g,g=/^[-+]0x[0-9a-f]+$/i,m=/^0b[01]+$/i,f=/^0o[0-7]+$/i,_=parseInt,x=(typeof r>"u"?"undefined":c(r))=="object"&&r&&r.Object===Object&&r,y=(typeof self>"u"?"undefined":c(self))=="object"&&self&&self.Object===Object&&self,S=x||y||Function("return this")(),E=Object.prototype,A=E.toString,C=Math.max,M=Math.min,T=function(){return S.Date.now()};t.exports=s}).call(i,function(){return this}())},function(t,i){function r(c){var d=void 0,h=void 0;for(d=0;d<c.length;d+=1)if(h=c[d],h.dataset&&h.dataset.aos||h.children&&r(h.children))return!0;return!1}function s(){return window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver}function o(){return!!s()}function a(c,d){var h=window.document,p=s(),v=new p(l);u=d,v.observe(h.documentElement,{childList:!0,subtree:!0,removedNodes:!0})}function l(c){c&&c.forEach(function(d){var h=Array.prototype.slice.call(d.addedNodes),p=Array.prototype.slice.call(d.removedNodes),v=h.concat(p);if(r(v))return u()})}Object.defineProperty(i,"__esModule",{value:!0});var u=function(){};i.default={isSupported:o,ready:a}},function(t,i){function r(h,p){if(!(h instanceof p))throw new TypeError("Cannot call a class as a function")}function s(){return navigator.userAgent||navigator.vendor||window.opera||""}Object.defineProperty(i,"__esModule",{value:!0});var o=function(){function h(p,v){for(var g=0;g<v.length;g++){var m=v[g];m.enumerable=m.enumerable||!1,m.configurable=!0,"value"in m&&(m.writable=!0),Object.defineProperty(p,m.key,m)}}return function(p,v,g){return v&&h(p.prototype,v),g&&h(p,g),p}}(),a=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,l=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,u=/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,c=/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,d=function(){function h(){r(this,h)}return o(h,[{key:"phone",value:function(){var p=s();return!(!a.test(p)&&!l.test(p.substr(0,4)))}},{key:"mobile",value:function(){var p=s();return!(!u.test(p)&&!c.test(p.substr(0,4)))}},{key:"tablet",value:function(){return this.mobile()&&!this.phone()}}]),h}();i.default=new d},function(t,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(o,a,l){var u=o.node.getAttribute("data-aos-once");a>o.position?o.node.classList.add("aos-animate"):typeof u<"u"&&(u==="false"||!l&&u!=="true")&&o.node.classList.remove("aos-animate")},s=function(o,a){var l=window.pageYOffset,u=window.innerHeight;o.forEach(function(c,d){r(c,u+l,a)})};i.default=s},function(t,i,r){function s(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(i,"__esModule",{value:!0});var o=r(12),a=s(o),l=function(u,c){return u.forEach(function(d,h){d.node.classList.add("aos-init"),d.position=(0,a.default)(d.node,c.offset)}),u};i.default=l},function(t,i,r){function s(u){return u&&u.__esModule?u:{default:u}}Object.defineProperty(i,"__esModule",{value:!0});var o=r(13),a=s(o),l=function(u,c){var d=0,h=0,p=window.innerHeight,v={offset:u.getAttribute("data-aos-offset"),anchor:u.getAttribute("data-aos-anchor"),anchorPlacement:u.getAttribute("data-aos-anchor-placement")};switch(v.offset&&!isNaN(v.offset)&&(h=parseInt(v.offset)),v.anchor&&document.querySelectorAll(v.anchor)&&(u=document.querySelectorAll(v.anchor)[0]),d=(0,a.default)(u).top,v.anchorPlacement){case"top-bottom":break;case"center-bottom":d+=u.offsetHeight/2;break;case"bottom-bottom":d+=u.offsetHeight;break;case"top-center":d+=p/2;break;case"bottom-center":d+=p/2+u.offsetHeight;break;case"center-center":d+=p/2+u.offsetHeight/2;break;case"top-top":d+=p;break;case"bottom-top":d+=u.offsetHeight+p;break;case"center-top":d+=u.offsetHeight/2+p}return v.anchorPlacement||v.offset||isNaN(c)||(h=c),d+h};i.default=l},function(t,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(s){for(var o=0,a=0;s&&!isNaN(s.offsetLeft)&&!isNaN(s.offsetTop);)o+=s.offsetLeft-(s.tagName!="BODY"?s.scrollLeft:0),a+=s.offsetTop-(s.tagName!="BODY"?s.scrollTop:0),s=s.offsetParent;return{top:a,left:o}};i.default=r},function(t,i){Object.defineProperty(i,"__esModule",{value:!0});var r=function(s){return s=s||document.querySelectorAll("[data-aos]"),Array.prototype.map.call(s,function(o){return{node:o}})};i.default=r}])})})(Oy);var JP=Oy.exports;const e2=I_(JP);const t2=({size:n})=>k.jsx("img",{alt:"preloadImg",draggable:"false",className:"loading-spinner",style:{width:`${n}em`,height:`${n}em`},src:"./vectors/spinner.svg"}),n2=()=>k.jsx(k.Fragment,{children:k.jsxs("div",{className:"page-load-content",children:[k.jsx("h1",{children:"Loading Porfolio..."}),k.jsx("div",{className:"loadem",children:k.jsx(t2,{size:"6"})})]})});function i2(){const[n,e]=pe.useState(!0);return pe.useEffect(()=>{e2.init(),setTimeout(()=>{e(!1)},1250)},[]),k.jsx(k.Fragment,{children:n?k.jsx(n2,{}):k.jsx(r1,{children:k.jsxs("div",{className:"appContainer","data-aos":"fade-up",children:[k.jsx(l1,{"data-aos":"fade-down"}),k.jsxs(i1,{children:[k.jsx(lu,{path:"/",element:k.jsx(WP,{})}),k.jsx(lu,{path:"/about",element:k.jsx($P,{})}),k.jsx(lu,{path:"/contact",element:k.jsx(QP,{})})]})]})})})}Bf.createRoot(document.getElementById("root")).render(k.jsx(rS.StrictMode,{children:k.jsx(i2,{})}));
