(this["webpackJsonpmickey-hacktoon"]=this["webpackJsonpmickey-hacktoon"]||[]).push([[0],{55:function(e,t,a){"use strict";a.r(t);var c=a(0),n=a(17),i=a.n(n),s=a(25),r=a(7),j=a(77),o=a(78),h=a(79),d=a(75),l=a(80),b=a(71),m=a(69),O=Object(m.a)((function(){return{Logo:{width:"55px",marginRight:"2%"},NavBar:{marginBottom:"2%",backgroundColor:"#090b13",padding:"2%"},Grid:{display:"flex"},Image:{height:"400px"}}})),x=a.p+"static/media/logo.c243e7e3.png",u=a(72),g=a(73),f=a(74),p=a(76),v=a(81),k=a(2),w=function(e){var t=O();return Object(k.jsx)(b.a,{item:!0,xs:12,sm:6,md:4,children:Object(k.jsxs)(u.a,{children:[Object(k.jsx)(g.a,{className:t.Image,image:e.image,title:"Cartoon title"}),Object(k.jsx)(f.a,{children:Object(k.jsx)(d.a,{children:e.title})}),Object(k.jsx)(p.a,{children:Object(k.jsx)(v.a,{variant:"contained",color:"primary",children:"Know more"})})]})})},y=function(){var e=O();return Object(k.jsxs)(k.Fragment,{children:[Object(k.jsx)(j.a,{}),Object(k.jsx)(o.a,{position:"relative",className:e.NavBar,children:Object(k.jsxs)(h.a,{children:[Object(k.jsx)("img",{src:x,className:e.Logo,alt:"mickey logo"}),Object(k.jsx)(d.a,{variant:"h3",children:"Mickey-Hacktoon"})]})}),Object(k.jsxs)("main",{className:"main_div",children:[Object(k.jsx)("div",{children:Object(k.jsx)(l.a,{children:Object(k.jsxs)(b.a,{container:!0,spacing:4,children:[Object(k.jsx)(w,{image:"https://media.tenor.com/images/cd00080ba0fd57ad0bce235519c96962/tenor.gif",title:"test title"}),Object(k.jsx)(w,{image:"https://media.tenor.com/images/9c3a07f1220085f8fe461f0a161a972f/tenor.gif",title:"test title"}),Object(k.jsx)(w,{image:"https://media1.tenor.com/images/4390dff2b1976f1dad4da5b5ab2e474f/tenor.gif?itemid=15538485",title:"test title"})]})})}),Object(k.jsx)("br",{}),Object(k.jsx)("div",{children:Object(k.jsx)(l.a,{children:Object(k.jsx)(d.a,{variant:"h2",align:"center",children:Object(k.jsx)(s.b,{to:"/game",children:"Play game"})})})}),Object(k.jsx)("br",{}),Object(k.jsx)("div",{children:Object(k.jsx)(l.a,{children:Object(k.jsx)(d.a,{variant:"h2",children:"About Mickey Mouse:"})})}),Object(k.jsx)("br",{}),Object(k.jsx)("div",{children:Object(k.jsxs)(l.a,{children:[Object(k.jsx)(d.a,{variant:"h2",children:"Our team - Mickey"}),Object(k.jsx)(d.a,{variant:"subtitle1",children:"Monesh Goyal"}),Object(k.jsx)(d.a,{variant:"subtitle1",children:"Bala Yokesh Mani"}),Object(k.jsx)(d.a,{variant:"subtitle1",children:"Cheng Yang"})]})})]}),Object(k.jsx)("footer",{className:"footer"})]})},N=a(31),M=a(32),B=function(){var e=Object(c.useState)([]),t=Object(M.a)(e,2),a=t[0],n=t[1],i=Object(c.useState)([]),s=Object(M.a)(i,2),r=s[0],j=s[1],o=[{id:1,name:"balbasaur"},{id:8,name:"wartotle"},{id:9,name:"blastoise"},{id:6,name:"charizard"}],h=[].concat(o,o);return Object(c.useEffect)((function(){if(!(a<2)){var e=h[a[0]],t=h[a[1]];t&&e.id===t.id&&j([].concat(Object(N.a)(r),[e.id])),2===a.length&&setTimeout((function(){return n([])}),1e3)}}),[a]),Object(k.jsxs)("div",{className:"App",children:[Object(k.jsxs)("div",{children:[Object(k.jsx)("h1",{children:"Rule:"}),Object(k.jsx)("h1",{children:"The objective is to collect the most pairs of cards."}),Object(k.jsx)("h1",{children:"When the game starts, Shuffle the cards and lay them on the table, face down, in rows."}),Object(k.jsx)("h1",{children:"On each turn, a player turns over any two cards (one at a time) and keeps them and gain one point if the cards match"}),Object(k.jsx)("h1",{children:"When a player turns over two cards that do not match, the game will be over."}),Object(k.jsx)("h1",{children:"The trick is to remember which cards are where."}),Object(k.jsx)("h1",{children:"Rules:"}),Object(k.jsx)("h2",{children:"The objective is to collect the most pairs of cards."}),Object(k.jsx)("h2",{children:"When the game starts, Shuffle the cards and lay them on the table, face down, in rows."}),Object(k.jsx)("h2",{children:"On each turn, a player turns over any two cards (one at a time) and keeps them and gain one point if the cards match"}),Object(k.jsx)("h2",{children:"When a player turns over two cards that do not match, the game will be over."}),Object(k.jsx)("h2",{children:"The trick is to remember which cards are where."})]}),Object(k.jsx)("div",{className:"cards",children:h.map((function(e,t){var c=!1;return a.includes(t)&&(c=!0),r.includes(e.id)&&(c=!0),Object(k.jsx)("div",{className:"pokemon-card ".concat(c?"flipped":""," "),onClick:function(){return function(e){n((function(t){return[].concat(Object(N.a)(t),[e])}))}(t)},children:Object(k.jsxs)("div",{className:"inner",children:[Object(k.jsx)("div",{className:"front",children:Object(k.jsx)("img",{src:"".concat("https://pokeres.bastionbot.org/images/pokemon","/").concat(e.id,".png"),alt:"pokemon-name",width:"100"})}),Object(k.jsx)("div",{className:"back"})]})},t)}))})]})},T=function(){return Object(k.jsxs)(s.a,{children:[Object(k.jsx)(r.a,{path:"/",exact:!0,component:y}),Object(k.jsx)(r.a,{path:"/game",component:B})]})};i.a.render(Object(k.jsx)(T,{}),document.getElementById("root"))}},[[55,1,2]]]);
//# sourceMappingURL=main.7f48588b.chunk.js.map