import{J as s,S as a,i as e,s as r,e as i,t as n,c as t,a as c,g as o,d as u,f as b,F as g,h as p,G as d,K as l}from"../chunks/vendor-28b90dc0.js";const m={subscribe:a=>(()=>{const a=s("__svelte__");return{page:{subscribe:a.page.subscribe},navigating:{subscribe:a.navigating.subscribe},get preloading(){return console.error("stores.preloading is deprecated; use stores.navigating instead"),{subscribe:a.navigating.subscribe}},session:a.session}})().page.subscribe(a)};function v(s){let a,e,r,l=s[0].params.nama+"";return{c(){a=i("h1"),e=n("Hai "),r=n(l)},l(s){a=t(s,"H1",{});var i=c(a);e=o(i,"Hai "),r=o(i,l),i.forEach(u)},m(s,i){b(s,a,i),g(a,e),g(a,r)},p(s,[a]){1&a&&l!==(l=s[0].params.nama+"")&&p(r,l)},i:d,o:d,d(s){s&&u(a)}}}function f(s,a,e){let r;return l(s,m,(s=>e(0,r=s))),[r]}export default class extends a{constructor(s){super(),e(this,s,f,v,r,{})}}