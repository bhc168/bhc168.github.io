import{d as e,u as a,a as t,b as n,t as l,c as u,_ as r,e as o,f as i,w as c,i as s,h as v,g as d,j as f,k as p,L as m,l as g,m as b,n as h,r as y,o as _,p as S,q as w,s as O,v as V,x as j,y as B,z as F,B as D,A as T,C as L,D as P,E as z}from"./index-BtVQ01Pt.js";
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
function C(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}var U=g(e({name:"TSwitch",props:function(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?C(Object(t),!0).forEach((function(a){i(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):C(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}({},{customValue:{type:Array},disabled:{type:Boolean,default:void 0},label:{type:[Array,Function],default:function(){return[]}},loading:Boolean,size:{type:String,default:"medium",validator:function(e){return!e||["small","medium","large"].includes(e)}},value:{type:[String,Number,Boolean],default:void 0},modelValue:{type:[String,Number,Boolean],default:void 0},defaultValue:{type:[String,Number,Boolean]},onChange:Function}),setup:function(e,g){var b=g.slots,h=a(),y=t("switch"),_=n(),S=_.STATUS,w=_.SIZE,O=l(e),V=O.value,j=O.modelValue,B=u(V,j,e.defaultValue,e.onChange),F=r(B,2),D=F[0],T=F[1],L=o((function(){return!(e.customValue&&e.customValue.length>0)||e.customValue[0]})),P=o((function(){return!!(e.customValue&&e.customValue.length>1)&&e.customValue[1]}));function z(a){h.value||e.loading||function(e){var a=D.value===L.value?P.value:L.value;T(a,{e:e})}(a)}var C=o((function(){return["".concat(y.value),w.value[e.size],i(i(i({},S.value.disabled,h.value),S.value.loading,e.loading),S.value.checked,D.value===L.value||e.modelValue===L.value)]})),U=o((function(){return["".concat(y.value,"__handle"),i(i({},S.value.disabled,h.value),S.value.loading,e.loading)]})),A=o((function(){return["".concat(y.value,"__content"),w.value[e.size],i({},S.value.disabled,h.value)]}));c(D,(function(a){if(e.customValue&&e.customValue.length&&!e.customValue.includes(a))throw new Error("value is not in ".concat(JSON.stringify(e.customValue)))}),{immediate:!0});var I=o((function(){if(s(e.label))return e.label(v,{value:D.value});if(d(e.label))return e.label;if(f(e.label)&&e.label.length){var a=D.value===L.value?e.label[0]:e.label[1];if(!a)return;if(d(a))return a;if(s(a))return a(v)}return b.label?b.label({value:D.value}):null}));return function(){var a,t;return e.loading?t=p(m,{size:"small"},null):I.value&&(a=I.value),p("div",{class:C.value,disabled:h.value,onClick:z},[p("span",{class:U.value},[t]),p("div",{class:A.value},[a])])}}}));
/**
 * tdesign v1.9.9
 * (c) 2024 tdesign
 * @license MIT
 */var A=g(e({name:"TCard",props:{actions:{type:[String,Function]},avatar:{type:[String,Function]},bordered:{type:Boolean,default:!0},content:{type:[String,Function]},cover:{type:[String,Function]},default:{type:[String,Function]},description:{type:[String,Function]},footer:{type:[String,Function]},header:{type:[String,Function]},headerBordered:Boolean,hoverShadow:Boolean,loading:{type:[Boolean,Function],default:!1},loadingProps:{type:Object},shadow:Boolean,size:{type:String,default:"medium",validator:function(e){return!e||["medium","small"].includes(e)}},status:{type:String,default:""},subtitle:{type:[String,Function]},theme:{type:String,default:"normal",validator:function(e){return!e||["normal","poster1","poster2"].includes(e)}},title:{type:[String,Function]}},setup:function(e,a){var l=a.slots,u=h(),r=t("card"),i=n().SIZE,c=o((function(){var a=[r.value];return"small"===e.size&&a.push("".concat(i.value[e.size])),e.bordered&&a.push("".concat(r.value,"--bordered")),e.shadow&&a.push("".concat(r.value,"--shadow")),e.hoverShadow&&a.push("".concat(r.value,"--shadow-hover")),a})),s=o((function(){var a=["".concat(r.value,"__header")];return e.headerBordered?a.concat("".concat(r.value,"__title--bordered")):["".concat(r.value,"__header")]})),v=t("card__header-wrapper"),f=t("card__avatar"),g=t("card__title"),y=t("card__subtitle"),_=t("card__description"),S=t("card__actions"),w=t("card__body"),O=t("card__cover"),V=t("card__footer"),j=t("card__footer-wrapper"),B=o((function(){return"poster2"===e.theme})),F=o((function(){return e.title||l.title})),D=o((function(){return e.header||l.header})),T=o((function(){return e.subtitle||l.subtitle})),L=o((function(){return e.avatar||l.avatar})),P=o((function(){return e.description||l.description})),z=o((function(){return e.status||l.status})),C=o((function(){return e.actions||l.actions})),U=o((function(){return e.footer||l.footer})),A=o((function(){return e.cover||l.cover})),I=o((function(){return e.loading||l.loading})),R=o((function(){return e.content||l.content||e.default||l.default})),E=o((function(){return D.value||F.value||T.value||P.value||L.value||z.value&&B.value||C.value&&!B.value})),k=o((function(){return U.value||C.value&&B.value}));return function(){var a,t,n=p("div",{class:c.value},[E.value?D.value?p("div",{class:s.value},[u("header")]):p("div",{class:s.value},[p("div",{class:v.value},[L.value&&p("div",{class:f.value},[u("avatar")]),p("div",null,[F.value&&p("div",{class:g.value},[u("title")]),T.value&&p("div",{class:y.value},[u("subtitle")]),P.value&&p("p",{class:_.value},[u("description")])])]),C.value&&!B.value&&p("div",{class:S.value},[u("actions")]),z.value&&p("div",{class:S.value},[u("status")])]):null,A.value?(a=d(e.cover),p("div",{class:O.value},[a?p("img",{src:e.cover},null):u("cover")])):null,R.value&&p("div",{class:w.value},[u("default")||u("content")]),k.value&&p("div",{class:V.value},[p("div",{class:j.value},[u("footer")]),C.value&&B.value&&p("div",{class:S.value},[u("actions")])])]);return I.value?u("loading")||p(m,e.loadingProps,"function"==typeof(t=n)||"[object Object]"===Object.prototype.toString.call(t)&&!b(t)?n:{default:function(){return[n]}}):n}}}));
/**
 * tdesign v1.9.9
 * (c) 2024 tdesign
 * @license MIT
 */const I=""+new URL("15分钟-Bqw2iXRA.mp3",import.meta.url).href,R=""+new URL("30分钟-CCYby6Wu.mp3",import.meta.url).href,E=""+new URL("60分钟-AHCgYfWZ.mp3",import.meta.url).href,k=""+new URL("2小时-BST9T4O4.mp3",import.meta.url).href,x=""+new URL("4小时-Dpoh68I5.mp3",import.meta.url).href,N=""+new URL("选股-Duh1VyVU.mp3",import.meta.url).href,Z=(e=>(T("data-v-3795b6f6"),e=e(),L(),e))((()=>V("span",null,"提示：",-1))),q=P(e({__name:"Time",setup(e){const a={"09:12:01":I,"09:28:01":R,"09:42:01":I,"09:56:01":E,"10:42:01":R,"11:11:01":k,"11:11:05":x,"13:42:01":R,"13:57:01":I,"14:11:01":E,"14:42:01":R,"21:12:01":I,"21:26:01":R,"21:42:01":I,"21:56:01":E,"22:12:01":I,"22:26:01":R,"22:42:01":I,"00:42:01":I,"14:35:01":N},t=y(!0),n=y((new Date).toLocaleTimeString()),l=()=>{if(!1===t.value)return;n.value=(new Date).toLocaleTimeString();let e=a[n.value]||"";""!==e&&(u(e),console.log(`${n.value} 触发了 ${e}`))},u=e=>{new Audio(e).play()},r=()=>{const e=new Date((new Date).getTime()+3e3).toLocaleTimeString();a[e]=E,console.log(a)};return _((()=>{const e=setInterval(l,1e3);S((()=>clearInterval(e)))})),l(),(e,a)=>{const l=U,u=D;return w(),O("div",null,[Z,p(l,{modelValue:t.value,"onUpdate:modelValue":a[0]||(a[0]=e=>t.value=e)},null,8,["modelValue"]),V("span",null,j(n.value),1),p(u,{onClick:r,size:"small"},{default:B((()=>[F("测试")])),_:1})])}}}),[["__scopeId","data-v-3795b6f6"]]),W=e({__name:"Index",setup:e=>(e,a)=>{const t=A;return w(),z(t,null,{default:B((()=>[p(q)])),_:1})}});export{W as default};