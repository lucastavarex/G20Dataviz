import{s as d,n as m,e as f}from"../chunks/scheduler.f15d49e4.js";import{S as _,i as h,g as v,m as u,h as $,j as x,n as p,f as b,a as E,x as l,o as g}from"../chunks/index.e4d51664.js";import{d as S}from"../chunks/singletons.88d516f5.js";const j=()=>{const t=S;return{page:{subscribe:t.page.subscribe},navigating:{subscribe:t.navigating.subscribe},updated:t.updated}},q={subscribe(t){return j().page.subscribe(t)}};function y(t){let e,r=t[0].status+"",n,o,i=t[0].error.message+"",c;return{c(){e=v("h1"),n=u(r),o=u(": "),c=u(i)},l(a){e=$(a,"H1",{});var s=x(e);n=p(s,r),o=p(s,": "),c=p(s,i),s.forEach(b)},m(a,s){E(a,e,s),l(e,n),l(e,o),l(e,c)},p(a,[s]){s&1&&r!==(r=a[0].status+"")&&g(n,r),s&1&&i!==(i=a[0].error.message+"")&&g(c,i)},i:m,o:m,d(a){a&&b(e)}}}function C(t,e,r){let n;return f(t,q,o=>r(0,n=o)),[n]}let z=class extends _{constructor(e){super(),h(this,e,C,y,d,{})}};export{z as component};
