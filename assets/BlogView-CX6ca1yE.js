import{d as m,r as d,b as w,c as e,a as t,w as k,v as B,e as $,F as v,f as p,o as s,t as _,_ as f,g as h,h as b,i as S,u as x,R as V}from"./index-DxjesfLk.js";import{g as C,l as I,f as L}from"./blogLoader-f9a2nd35.js";const T={class:"blog-search"},M={class:"search-input"},N={class:"category-filter"},P=["value"],D=m({__name:"BlogSearch",emits:["search"],setup(y,{emit:a}){const l=d(""),o=d(""),n=d([]),c=a;function r(){c("search",{term:l.value,category:o.value})}return w(async()=>{n.value=await C()}),(g,u)=>(s(),e("div",T,[t("div",M,[k(t("input",{"onUpdate:modelValue":u[0]||(u[0]=i=>l.value=i),type:"text",placeholder:"搜索文章...",onInput:r},null,544),[[B,l.value]])]),t("div",N,[k(t("select",{"onUpdate:modelValue":u[1]||(u[1]=i=>o.value=i),onChange:r},[u[2]||(u[2]=t("option",{value:""},"全部分类",-1)),(s(!0),e(v,null,p(n.value,i=>(s(),e("option",{key:i,value:i},_(i),9,P))),128))],544),[[$,o.value]])])]))}}),F=f(D,[["__scopeId","data-v-3af11fa1"]]),R={class:"blog-list"},U={key:0,class:"no-posts"},A={key:1,class:"blog-grid"},E={class:"post-card"},j={class:"post-meta"},q={class:"date"},z={class:"categories"},G={class:"post-keywords"},H=m({__name:"BlogList",props:{posts:{}},setup(y){return(a,l)=>(s(),e("div",R,[a.posts.length===0?(s(),e("div",U," 没有找到符合条件的文章 ")):(s(),e("div",A,[(s(!0),e(v,null,p(a.posts,o=>(s(),e("div",{key:o.id,class:"blog-item"},[t("article",E,[t("h2",null,[h(x(V),{to:`/blog/${o.id}`},{default:b(()=>[S(_(o.title),1)]),_:2},1032,["to"])]),t("div",j,[t("span",q,_(o.date),1),t("div",z,[(s(!0),e(v,null,p(o.categories,(n,c)=>(s(),e("span",{key:c,class:"category"},_(n),1))),128))])]),t("div",G,[(s(!0),e(v,null,p(o.keywords,(n,c)=>(s(),e("span",{key:c,class:"keyword"}," #"+_(n),1))),128))])])]))),128))]))]))}}),J=f(H,[["__scopeId","data-v-607564a0"]]),K={class:"blog-view"},O={class:"blog-container"},Q=m({__name:"BlogView",setup(y){const a=d([]),l=d([]),o=d(""),n=d("");w(async()=>{a.value=await I(),l.value=[...a.value]});function c(r){o.value=r.term,n.value=r.category,l.value=L(a.value,r.term,r.category)}return(r,g)=>(s(),e("div",K,[g[0]||(g[0]=t("h1",null,"博客文章",-1)),h(F,{onSearch:c}),t("div",O,[h(J,{posts:l.value},null,8,["posts"])])]))}}),Y=f(Q,[["__scopeId","data-v-9cc093e7"]]);export{Y as default};
