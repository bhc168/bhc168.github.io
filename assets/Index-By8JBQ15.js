import{d as e,u as a,a as t,b as n,t as u,c as l,_ as r,e as o,f as s,w as c,i,h as v,g as d,j as f,k as p,L as m,l as b,m as g,n as y,r as h,o as _,p as S,q as w,s as O,v as V,x as B,y as F,z as j,A as E,B as k,C as P}from"./index-GUbjAaGy.js";
/**
 * tdesign v1.9.9
 * (c) 2024 tdesign
 * @license MIT
 */
/**
 * tdesign v1.9.9
 * (c) 2024 tdesign
 * @license MIT
 */
function T(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}var z=b(e({name:"TSwitch",props:function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?T(Object(t),!0).forEach((function(a){s(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):T(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},{customValue:{type:Array},disabled:{type:Boolean,default:void 0},label:{type:[Array,Function],default:function(){return[]}},loading:Boolean,size:{type:String,default:"medium",validator:function(e){return!e||["small","medium","large"].includes(e)}},value:{type:[String,Number,Boolean],default:void 0},modelValue:{type:[String,Number,Boolean],default:void 0},defaultValue:{type:[String,Number,Boolean]},onChange:Function}),setup:function(e,b){var g=b.slots,y=a(),h=t("switch"),_=n(),S=_.STATUS,w=_.SIZE,O=u(e),V=O.value,B=O.modelValue,F=l(V,B,e.defaultValue,e.onChange),j=r(F,2),E=j[0],k=j[1],P=o((function(){return!(e.customValue&&e.customValue.length>0)||e.customValue[0]})),T=o((function(){return!!(e.customValue&&e.customValue.length>1)&&e.customValue[1]}));function z(a){y.value||e.loading||function(e){var a=E.value===P.value?T.value:P.value;k(a,{e:e})}(a)}var A=o((function(){return["".concat(h.value),w.value[e.size],s(s(s({},S.value.disabled,y.value),S.value.loading,e.loading),S.value.checked,E.value===P.value||e.modelValue===P.value)]})),C=o((function(){return["".concat(h.value,"__handle"),s(s({},S.value.disabled,y.value),S.value.loading,e.loading)]})),D=o((function(){return["".concat(h.value,"__content"),w.value[e.size],s({},S.value.disabled,y.value)]}));c(E,(function(a){if(e.customValue&&e.customValue.length&&!e.customValue.includes(a))throw new Error("value is not in ".concat(JSON.stringify(e.customValue)))}),{immediate:!0});var I=o((function(){if(i(e.label))return e.label(v,{value:E.value});if(d(e.label))return e.label;if(f(e.label)&&e.label.length){var a=E.value===P.value?e.label[0]:e.label[1];if(!a)return;if(d(a))return a;if(i(a))return a(v)}return g.label?g.label({value:E.value}):null}));return function(){var a,t;return e.loading?t=p(m,{size:"small"},null):I.value&&(a=I.value),p("div",{class:A.value,disabled:y.value,onClick:z},[p("span",{class:C.value},[t]),p("div",{class:D.value},[a])])}}}));
/**
 * tdesign v1.9.9
 * (c) 2024 tdesign
 * @license MIT
 */var A=b(e({name:"TCard",props:{actions:{type:[String,Function]},avatar:{type:[String,Function]},bordered:{type:Boolean,default:!0},content:{type:[String,Function]},cover:{type:[String,Function]},default:{type:[String,Function]},description:{type:[String,Function]},footer:{type:[String,Function]},header:{type:[String,Function]},headerBordered:Boolean,hoverShadow:Boolean,loading:{type:[Boolean,Function],default:!1},loadingProps:{type:Object},shadow:Boolean,size:{type:String,default:"medium",validator:function(e){return!e||["medium","small"].includes(e)}},status:{type:String,default:""},subtitle:{type:[String,Function]},theme:{type:String,default:"normal",validator:function(e){return!e||["normal","poster1","poster2"].includes(e)}},title:{type:[String,Function]}},setup:function(e,a){var u=a.slots,l=y(),r=t("card"),s=n().SIZE,c=o((function(){var a=[r.value];return"small"===e.size&&a.push("".concat(s.value[e.size])),e.bordered&&a.push("".concat(r.value,"--bordered")),e.shadow&&a.push("".concat(r.value,"--shadow")),e.hoverShadow&&a.push("".concat(r.value,"--shadow-hover")),a})),i=o((function(){var a=["".concat(r.value,"__header")];return e.headerBordered?a.concat("".concat(r.value,"__title--bordered")):["".concat(r.value,"__header")]})),v=t("card__header-wrapper"),f=t("card__avatar"),b=t("card__title"),h=t("card__subtitle"),_=t("card__description"),S=t("card__actions"),w=t("card__body"),O=t("card__cover"),V=t("card__footer"),B=t("card__footer-wrapper"),F=o((function(){return"poster2"===e.theme})),j=o((function(){return e.title||u.title})),E=o((function(){return e.header||u.header})),k=o((function(){return e.subtitle||u.subtitle})),P=o((function(){return e.avatar||u.avatar})),T=o((function(){return e.description||u.description})),z=o((function(){return e.status||u.status})),A=o((function(){return e.actions||u.actions})),C=o((function(){return e.footer||u.footer})),D=o((function(){return e.cover||u.cover})),I=o((function(){return e.loading||u.loading})),x=o((function(){return e.content||u.content||e.default||u.default})),N=o((function(){return E.value||j.value||k.value||T.value||P.value||z.value&&F.value||A.value&&!F.value})),L=o((function(){return C.value||A.value&&F.value}));return function(){var a,t,n=p("div",{class:c.value},[N.value?E.value?p("div",{class:i.value},[l("header")]):p("div",{class:i.value},[p("div",{class:v.value},[P.value&&p("div",{class:f.value},[l("avatar")]),p("div",null,[j.value&&p("div",{class:b.value},[l("title")]),k.value&&p("div",{class:h.value},[l("subtitle")]),T.value&&p("p",{class:_.value},[l("description")])])]),A.value&&!F.value&&p("div",{class:S.value},[l("actions")]),z.value&&p("div",{class:S.value},[l("status")])]):null,D.value?(a=d(e.cover),p("div",{class:O.value},[a?p("img",{src:e.cover},null):l("cover")])):null,x.value&&p("div",{class:w.value},[l("default")||l("content")]),L.value&&p("div",{class:V.value},[p("div",{class:B.value},[l("footer")]),A.value&&F.value&&p("div",{class:S.value},[l("actions")])])]);return I.value?l("loading")||p(m,e.loadingProps,"function"==typeof(t=n)||"[object Object]"===Object.prototype.toString.call(t)&&!g(t)?n:{default:function(){return[n]}}):n}}}));
/**
 * tdesign v1.9.9
 * (c) 2024 tdesign
 * @license MIT
 */const C="/assets/15%E5%88%86%E9%92%9F-Bqw2iXRA.mp3",D="/assets/30%E5%88%86%E9%92%9F-CCYby6Wu.mp3",I="/assets/60%E5%88%86%E9%92%9F-AHCgYfWZ.mp3",x=(e=>(F("data-v-3fe687f9"),e=e(),j(),e))((()=>V("span",null,"提示：",-1))),N=E(e({__name:"Time",setup(e){const a=h(!0),t=h((new Date).toLocaleTimeString()),n=()=>{if(t.value=(new Date).toLocaleTimeString(),!1===a.value)return;const e=t.value.split(":");let n="";switch(`${e[0]}:${e[1]}:${e[2]}`){case"09:12:00":case"09:42:00":case"13:57:00":case"21:12:00":case"21:42:00":case"22:12:00":case"22:42:00":n=C;break;case"09:26:00":case"10:42:00":case"13:42:00":case"14:42:00":case"21:26:00":case"22:26:00":n=D;break;case"09:56:00":case"14:11:00":case"21:56:00":n=I;break;case"11:11:00":n="/assets/2%E5%B0%8F%E6%97%B6-BST9T4O4.mp3";break;case"11:11:03":n="/assets/4%E5%B0%8F%E6%97%B6-Dpoh68I5.mp3";break;case"14:35:00":n="/assets/%E9%80%89%E8%82%A1-Duh1VyVU.mp3";break;default:n=""}""!=n&&u(n)},u=e=>{new Audio(e).play()};return _((()=>{const e=setInterval(n,1e3);S((()=>clearInterval(e)))})),n(),(e,n)=>{const u=z;return w(),O("div",null,[x,p(u,{modelValue:a.value,"onUpdate:modelValue":n[0]||(n[0]=e=>a.value=e)},null,8,["modelValue"]),V("span",null,B(t.value),1)])}}}),[["__scopeId","data-v-3fe687f9"]]),L=e({__name:"Index",setup:e=>(e,a)=>{const t=A;return w(),k(t,null,{default:P((()=>[p(N)])),_:1})}});export{L as default};
