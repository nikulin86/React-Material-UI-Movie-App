(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{104:function(e,t,a){},136:function(e,t,a){},137:function(e,t,a){},138:function(e,t,a){},159:function(e,t,a){},164:function(e,t,a){},165:function(e,t,a){},169:function(e,t,a){},170:function(e,t,a){},171:function(e,t,a){},206:function(e,t,a){},207:function(e,t,a){},208:function(e,t,a){},209:function(e,t,a){},210:function(e,t,a){},211:function(e,t,a){},212:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a(31),s=a.n(c),r=(a(136),a(14)),i=(a(137),a(138),a(1)),o=function(){return Object(i.jsx)("div",{className:"header",children:Object(i.jsx)("span",{onClick:function(){return window.scroll(0,0)},className:"headerTitle",children:"React & Material UI Movies App"})})},l=a(279),j=a(16),d=a.n(j),u=a(19),b=a(9),p=a(20),O=a.n(p),m=(a(159),"https://image.tmdb.org/t/p/w300"),h="https://www.movienewz.com/img/films/poster-holder.jpg",v=a(275),f=a(21),x=function(e){var t=e.id,a=e.poster,n=e.title,c=e.date,s=e.media_type,r=e.vote_average,o=e.overview;return Object(i.jsx)("div",{children:Object(i.jsx)(f.b,{to:"/content",state:{title:n,id:t,poster:a,date:c,media_type:s,vote_average:r,overview:o},children:Object(i.jsxs)("div",{className:"media",children:[Object(i.jsx)(v.a,{badgeContent:r,color:r>7?"primary":"secondary"}),Object(i.jsx)("img",{className:"poster",src:a?"".concat(m,"/").concat(a):h,alt:n}),Object(i.jsx)("b",{className:"title",children:n}),Object(i.jsx)("span",{className:"subTitle",children:"tv"===s?"\u0421\u0435\u0440\u0438\u0430\u043b":"\u0424\u0438\u043b\u044c\u043c"}),Object(i.jsx)("span",{className:"date",children:c})]})})})},g=(a(164),a(273)),_=a(119),y=a(267),N=Object(_.a)({palette:{type:"dark"}}),w=function(e){var t=e.setPage,a=e.numberOfPages,n=void 0===a?10:a;e.numOfPages;return Object(i.jsx)("div",{style:{width:"100%",display:"flex",justifyContent:"center",marginTop:10},children:Object(i.jsx)(y.a,{theme:N,children:Object(i.jsx)(g.a,{count:n,onChange:function(e){return a=e.target.textContent,t(a),void window.scroll(0,0);var a},hideNextButton:!0,hidePrevButton:!0,color:"primary"})})})},k=function(){var e=Object(n.useState)(1),t=Object(b.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),r=Object(b.a)(s,2),o=r[0],l=r[1],j=function(){var e=Object(u.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://api.themoviedb.org/3/trending/all/day?api_key=".concat("6e8a4db6687e07519bd1210d9b867a0e","&language=ru-RU&page=").concat(a));case 2:t=e.sent,n=t.data,l(n.results);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){j()}),[a]),Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{className:"pageTitle",children:"\u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435"}),Object(i.jsx)("div",{className:"trending",children:o&&o.map((function(e){return Object(i.jsx)(x,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:e.media_type,vote_average:e.vote_average},e.id)}))}),Object(i.jsx)(w,{setPage:c})]})},S=(a(165),a(17)),P=a(278),R=function(e){var t=e.setGenres,a=e.setSelectedGenres,c=e.genres,s=e.selectedGenres,r=e.setPage,o=e.type,l=function(){var e=Object(u.a)(d.a.mark((function e(){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://api.themoviedb.org/3/genre/".concat(o,"/list?api_key=").concat("6e8a4db6687e07519bd1210d9b867a0e","&language=ru-RU"));case 2:a=e.sent,n=a.data,t(n.genres);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){return l(),function(){t({})}}),[]),Object(i.jsxs)("div",{style:{padding:"6px 0"},children:[s&&s.map((function(e){return Object(i.jsx)(P.a,{label:e.name,style:{margin:6},clickable:!0,size:"small",color:"primary",onDelete:function(){return function(e){a(s.filter((function(t){return t.id!==e.id}))),t([].concat(Object(S.a)(c),[e])),r(1)}(e)}},e.id)})),c&&c.map((function(e){return Object(i.jsx)(P.a,{label:e.name,style:{margin:6},clickable:!0,size:"small",onClick:function(){return function(e){a([].concat(Object(S.a)(s),[e])),t(c.filter((function(t){return t.id!==e.id}))),r(1)}(e)}},e.id)}))]})},C=function(e){return e.length<1?"":e.map((function(e){return e.id})).reduce((function(e,t){return e+","+t}))},U=function(){var e=Object(n.useState)([]),t=Object(b.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(),r=Object(b.a)(s,2),o=r[0],l=r[1],j=Object(n.useState)([]),p=Object(b.a)(j,2),m=p[0],h=p[1],v=Object(n.useState)([]),f=Object(b.a)(v,2),g=f[0],_=f[1],y=Object(n.useState)(1),N=Object(b.a)(y,2),k=N[0],S=N[1],P=C(m),U=function(){var e=Object(u.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("\n      https://api.themoviedb.org/3/discover/movie?api_key=".concat("6e8a4db6687e07519bd1210d9b867a0e","&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=false&page=").concat(k,"&with_genres=").concat(P));case 2:t=e.sent,a=t.data,c(a.results),l(a.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){U()}),[k,P]),Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{className:"pageTitle",children:"\u0424\u0438\u043b\u044c\u043c\u044b"}),Object(i.jsx)(R,{setGenres:_,setSelectedGenres:h,genres:g,selectedGenres:m,setPage:S,type:"movie"}),Object(i.jsx)("div",{className:"movies",children:a&&a.map((function(e){return Object(i.jsx)(x,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:"movie",vote_average:e.vote_average,overview:e.overview},e.id)}))}),o>1&&Object(i.jsx)(w,{setPage:S,numberOfPages:o})]})},E=a(271),G=a(277),I=a(272),T=a(270),z=a(23),M=a(74),B=a.n(M),W=function(){var e=Object(n.useState)(0),t=Object(b.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)(1),r=Object(b.a)(s,2),o=r[0],l=r[1],j=Object(n.useState)(""),p=Object(b.a)(j,2),m=p[0],h=p[1],v=Object(n.useState)(),f=Object(b.a)(v,2),g=f[0],y=f[1],N=Object(n.useState)(),k=Object(b.a)(N,2),S=k[0],P=k[1],R=Object(_.b)({palette:{type:"dark",primary:{main:"#fff"}}}),C=function(){var e=Object(u.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("\n        https://api.themoviedb.org/3/search/".concat(a?"tv":"movie","?api_key=").concat("6e8a4db6687e07519bd1210d9b867a0e","&language=ru-RU&query=").concat(m,"&page=").concat(o,"&include_adult=false"));case 2:t=e.sent,n=t.data,y(n.results),P(n.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){window.scroll(0,0),C()}),[a,o]),Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{className:"pageTitle",children:"\u041f\u043e\u0438\u0441\u043a"}),Object(i.jsxs)(z.c,{theme:R,children:[Object(i.jsxs)("div",{style:{display:"flex",margin:"15px 0"},children:[Object(i.jsx)(E.a,{label:"\u041f\u043e\u0438\u0441\u043a",style:{flex:1},className:"serchbox",variant:"filled",onChange:function(e){return h(e.target.value)}}),Object(i.jsx)(G.a,{variant:"contained",style:{marginLeft:10},onClick:C,onTap:C,children:Object(i.jsx)(B.a,{})})]}),Object(i.jsxs)(I.a,{value:a,indicatorColor:"primary",textColor:"primary",onChange:function(e,t){c(t),l(1)},style:{paddingBottom:5},children:[Object(i.jsx)(T.a,{style:{width:"50%"},label:"\u041f\u043e\u0438\u0441\u043a \u0444\u0438\u043b\u044c\u043c\u043e\u0432"}),Object(i.jsx)(T.a,{style:{width:"50%"},label:"\u041f\u043e\u0438\u0441\u043a \u0441\u0435\u0440\u0438\u0430\u043b\u043e\u0432"})]})]}),Object(i.jsxs)("div",{className:"trending",children:[g&&g.map((function(e){return Object(i.jsx)(x,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:a?"tv":"movie",vote_average:e.vote_average},e.key)})),m&&!g&&(a?Object(i.jsx)("h2",{children:"\u041d\u0435 \u043d\u0430\u0448\u043b\u043e\u0441\u044c \u0441\u0435\u0440\u0438\u0430\u043b\u043e\u0432"}):Object(i.jsx)("h2",{children:"\u041d\u0435 \u043d\u0430\u0448\u043b\u043e\u0441\u044c \u0444\u0438\u043b\u044c\u043c\u043e\u0432"}))]}),S>1&&Object(i.jsx)(w,{setPage:l,numOfPages:S})]})},A=(a(169),function(){var e=Object(n.useState)(1),t=Object(b.a)(e,2),a=t[0],c=t[1],s=Object(n.useState)([]),r=Object(b.a)(s,2),o=r[0],l=r[1],j=Object(n.useState)(),p=Object(b.a)(j,2),m=p[0],h=p[1],v=Object(n.useState)([]),f=Object(b.a)(v,2),g=f[0],_=f[1],y=Object(n.useState)([]),N=Object(b.a)(y,2),k=N[0],S=N[1],P=C(g),U=function(){var e=Object(u.a)(d.a.mark((function e(){var t,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("\n        https://api.themoviedb.org/3/discover/tv?api_key=".concat("6e8a4db6687e07519bd1210d9b867a0e","&language=ru-RU&sort_by=popularity.desc&include_adult=false&include_video=false&page=").concat(a,"&with_genres=").concat(P));case 2:t=e.sent,n=t.data,l(n.results),h(n.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){U()}),[a,P]),Object(i.jsxs)("div",{children:[Object(i.jsx)("span",{className:"pageTitle",children:"\u0421\u0435\u0440\u0438\u0430\u043b\u044b"}),Object(i.jsx)(R,{setGenres:S,setSelectedGenres:_,genres:k,selectedGenres:g,setPage:c,type:"tv"}),Object(i.jsx)("div",{className:"tvSeries",children:o&&o.map((function(e){return Object(i.jsx)(x,{id:e.id,poster:e.poster_path,title:e.title||e.name,date:e.first_air_date||e.release_date,media_type:"tv",vote_average:e.vote_average},e.id)}))}),m>1&&Object(i.jsx)(w,{setPage:c,numberOfPages:m})]})});a(170);var D=function(e){var t=e.name,a=e.profile_path,n=e.id,c=e.popularity;return Object(i.jsx)(f.b,{to:"/bio",state:{id:n,name:t,profile_path:a},children:Object(i.jsxs)("div",{className:"personCard",children:[Object(i.jsx)("img",{className:"poster",src:a?"".concat(m,"/").concat(a):h,alt:t}),Object(i.jsx)("div",{className:"person-name",children:t}),Object(i.jsxs)("div",{className:"person-popularity",children:["\u0420\u0435\u0439\u0442\u0438\u043d\u0433 ",c]})]})})};var F=function(e){e.name;var t=Object(n.useState)([]),a=Object(b.a)(t,2),c=a[0],s=a[1],r=Object(n.useState)(),o=Object(b.a)(r,2),l=o[0],j=o[1],p=Object(n.useState)(1),m=Object(b.a)(p,2),h=m[0],v=m[1],f=function(){var e=Object(u.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://api.themoviedb.org/3/person/popular?api_key=".concat("6e8a4db6687e07519bd1210d9b867a0e","&language=ru-RU&page=").concat(h));case 2:t=e.sent,a=t.data,s(a.results),j(a.total_pages);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){f()}),[h]),Object(i.jsxs)("div",{className:"personCardWrapper",children:[c&&c.map((function(e){return Object(i.jsx)(D,{name:e.name,profile_path:e.profile_path,id:e.id,popularity:e.popularity,known_for:e.known_for.map((function(e){return e.first_air_date}))})})),l>1&&Object(i.jsx)(w,{setPage:v,numberOfPages:l})]})},J=a(114),$=a.n(J),q=(a(171),a(113)),H=a.n(q),L=(a(205),a(104),a(206),function(e){return e.preventDefault()});var K=function(e){var t=e.id,a=e.name,n=e.profile_path;return Object(i.jsx)("div",{className:"carousel-wrapper",children:Object(i.jsx)(f.b,{to:"/bio",state:{id:t,name:a,profile_path:n},children:Object(i.jsxs)("div",{className:"carouselItem",children:[Object(i.jsx)("img",{src:n?"".concat("https://image.tmdb.org/t/p/w185","/").concat(n):"https://upload.wikimedia.org/wikipedia/en/6/60/No_Picture.jpg",alt:a,className:"carouselItem__img",onDragStart:L}),Object(i.jsx)("b",{className:"carouselItem__txt",children:a})]})})})},Q=function(e){var t=e.media_type,a=e.id,c=Object(n.useState)(),s=Object(b.a)(c,2),r=s[0],o=s[1],l=function(){var e=Object(u.a)(d.a.mark((function e(){var n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://api.themoviedb.org/3/".concat(t,"/").concat(a,"/credits?api_key=").concat("6e8a4db6687e07519bd1210d9b867a0e","&language=ru-RU"));case 2:n=e.sent,c=n.data,o(c.cast);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();Object(n.useEffect)((function(){l()}),[]);var j=r&&r.map((function(e){return Object(i.jsx)(K,{id:e.id,name:e.name,profile_path:e.profile_path})}));return Object(i.jsx)(H.a,{autoPlay:!0,stagePadding:!0,paddingRight:!0,autoHeight:!0,responsive:{550:{items:2},700:{items:3},900:{items:4},1300:{items:6}},infinite:!0,autoPlayInterval:2e3,disableButtonsControls:!0,mouseTracking:!0,items:j})};a(207);var V=function(e){e.overview;var t=e.homepage,a=(e.poster_path,e.budget),n=e.production_companies,c=e.revenue,s=e.runtime;return e.vote_count,e.vote_average,Object(i.jsxs)("div",{className:"content-about",children:[Object(i.jsxs)("div",{className:"content-about__budget",children:["\u0411\u044e\u0434\u0436\u0435\u0442 \u043a\u0430\u0440\u0442\u0438\u043d\u044b: ",a," $"]}),Object(i.jsxs)("div",{className:"content-about__revenue",children:["\u0421\u0431\u043e\u0440\u044b: ",c," $"]}),Object(i.jsxs)("div",{className:"content-about__time",children:["\u0412\u0440\u0435\u043c\u044f: ",s," \u043c\u0438\u043d"]}),Object(i.jsxs)("div",{className:"companies-wrapper",children:[Object(i.jsx)("div",{className:"content-about__companies",children:n.map((function(e){return Object(i.jsxs)("div",{className:"company",children:["\u0421\u0442\u0443\u0434\u0438\u044f ",e.name]},e.id)}))}),Object(i.jsx)("div",{className:"content-about__img",children:n.map((function(e){return Object(i.jsx)("img",{src:e.logo_path&&"".concat("https://image.tmdb.org/t/p/w92","/").concat(e.logo_path),alt:""},e.id)}))})]}),Object(i.jsxs)("div",{className:"content-about__web",children:["\u041e\u0444\u0438\u0446\u0438\u0430\u043b\u044c\u043d\u044b\u0439 \u0432\u0435\u0431-\u0441\u0430\u0439\u0442: ",Object(i.jsx)("a",{href:t,target:"_blank",rel:"noreferrer",children:t})]})]})};var X=function(){var e=Object(r.e)().state,t=e.id,a=e.title,c=e.poster,s=e.date,o=e.media_type,j=e.overview,p=Object(n.useState)(),v=Object(b.a)(p,2),f=v[0],x=v[1],g=Object(n.useState)(),_=Object(b.a)(g,2),y=_[0],N=_[1],w=function(){var e=Object(u.a)(d.a.mark((function e(){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://api.themoviedb.org/3/".concat(o,"/").concat(t,"?api_key=").concat("6e8a4db6687e07519bd1210d9b867a0e","&language=ru-RU"));case 2:a=e.sent,n=a.data,x(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),k=function(){var e=Object(u.a)(d.a.mark((function e(){var a,n,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("https://api.themoviedb.org/3/".concat(o,"/").concat(t,"/videos?api_key=").concat("6e8a4db6687e07519bd1210d9b867a0e","&language=ru-RU"));case 2:n=e.sent,c=n.data,N(null===(a=c.results[0])||void 0===a?void 0:a.key);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){k(),w(),window.scroll(0,0)}),[]),Object(i.jsx)(l.a,{maxWidth:"xl",children:Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"wrapper-content__top",children:[Object(i.jsx)("div",{className:"conten-left",children:Object(i.jsx)("img",{className:"content-left__img",src:c?"".concat(m,"/").concat(c):h,alt:""})}),Object(i.jsx)("div",{className:"content-right",children:Object(i.jsxs)("div",{className:"content-right__wrapper",children:[Object(i.jsx)("h1",{className:"content-right__title",children:a}),f&&Object(i.jsx)("div",{className:"content-right__subtitle",children:f.tagline}),f&&f.production_countries.map((function(e){return Object(i.jsxs)("h2",{className:"content-right__country",children:["\u0421\u0442\u0440\u0430\u043d\u0430: ",e.name]},e.id)})),f&&f.genres.map((function(e){return Object(i.jsxs)("h3",{className:"content-right__genres",children:["\u0416\u0430\u043d\u0440: ",e.name]},e.id)})),Object(i.jsxs)("h3",{className:"content-right__date",children:["\u0414\u0430\u0442\u0430 \u0432\u044b\u0445\u043e\u0434\u0430: ",s]}),Object(i.jsx)("p",{className:"content-right__description",children:j})]})})]}),Object(i.jsx)("div",{className:"about",children:f&&Object(i.jsx)(V,{id:t,homepage:f.homepage,poster_path:f.poster_path,budget:f.budget,production_companies:f.production_companies,revenue:f.revenue,runtime:f.runtime,vote_average:f.vote_average,vote_count:f.vote_count})}),Object(i.jsxs)("div",{className:"wrapper-content__bottom",children:[Object(i.jsx)("div",{className:"carousel",children:Object(i.jsx)(Q,{media_type:o,id:t})}),Object(i.jsx)("div",{className:"button-wrapper",children:Object(i.jsx)(G.a,{className:"content-button",variant:"contained",startIcon:Object(i.jsx)($.a,{}),color:"secondary",target:"__blank",href:"https://www.youtube.com/watch?v=".concat(y),children:"\u041f\u043e\u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u0442\u0440\u0435\u0439\u043b\u0435\u0440"})})]})]})})};a(208),a(209);var Y=function(e){var t=e.title;return e.release_date,Object(i.jsx)("div",{children:Object(i.jsx)("ul",{children:Object(i.jsx)("li",{children:t})})})},Z=function(){var e=Object(r.e)().state,t=e.id,a=e.name,c=Object(n.useState)(),s=Object(b.a)(c,2),o=s[0],l=s[1],j=Object(n.useState)(),p=Object(b.a)(j,2),v=p[0],f=p[1],x=function(){var e=Object(u.a)(d.a.mark((function e(){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("\n    https://api.themoviedb.org/3/person/".concat(t,"?api_key=").concat("6e8a4db6687e07519bd1210d9b867a0e","&language=ru-RU\n"));case 2:a=e.sent,n=a.data,l(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),g=function(){var e=Object(u.a)(d.a.mark((function e(){var a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O.a.get("\n        https://api.themoviedb.org/3/person/".concat(t,"/movie_credits?api_key=").concat("6e8a4db6687e07519bd1210d9b867a0e","&language=ru-RU"));case 2:a=e.sent,n=a.data,f(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){x(),g()}),[]),Object(i.jsxs)("div",{className:"bio-wrapper",children:[Object(i.jsxs)("div",{className:"bio-top",children:[Object(i.jsx)("div",{className:"bio-top__left",children:Object(i.jsx)("img",{className:"person-photo",src:o&&o.profile_path?"".concat(m,"/").concat(o.profile_path):h,alt:""})}),Object(i.jsxs)("div",{className:"bio-top__right",children:[Object(i.jsx)("div",{className:"person-name",children:a}),Object(i.jsxs)("div",{className:"person-birthday",children:["\u0414\u0430\u0442\u0430 \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f: ",o&&o.birthday]}),Object(i.jsxs)("div",{className:"person-place_of_birth",children:["\u041c\u0435\u0441\u0442\u043e \u0440\u043e\u0436\u0434\u0435\u043d\u0438\u044f: ",o&&o.place_of_birth]}),Object(i.jsxs)("div",{className:"person-cast",children:[Object(i.jsx)("div",{className:"person-cast__title",children:"\u0424\u0438\u043b\u044c\u043c\u043e\u0433\u0440\u0430\u0444\u0438\u044f:"}),v&&v.cast.map((function(e){return Object(i.jsx)(Y,{title:e.title,release_date:e.release_date},e.id)}))]})]})]}),Object(i.jsx)("div",{className:"bio-bottom",children:o&&Object(i.jsx)("p",{className:"bio-biography",children:o.biography})})]})},ee=a(115),te=a.n(ee),ae=a(116),ne=a.n(ae),ce=a(117),se=a.n(ce),re=a(118),ie=a.n(re),oe=(a(210),function(){return Object(i.jsx)("div",{children:Object(i.jsxs)("div",{className:"navWrapper",children:[Object(i.jsx)("div",{className:"nav",children:Object(i.jsxs)(f.c,{to:"/React-Material-UI-Movie-App",className:"nav-link",children:[Object(i.jsx)("div",{className:"nav-icon",children:Object(i.jsx)(te.a,{fontSize:"large"})}),Object(i.jsx)("span",{children:"\u0422\u0440\u0435\u043d\u0434\u044b"})]})}),Object(i.jsx)("div",{className:"nav",children:Object(i.jsxs)(f.c,{to:"/movies",className:"nav-link",children:[Object(i.jsxs)("div",{className:"nav-icon",children:[" ",Object(i.jsx)(ne.a,{fontSize:"large"})]}),Object(i.jsx)("span",{children:"\u0424\u0438\u043b\u044c\u043c\u044b"}),"   "]})}),Object(i.jsx)("div",{className:"nav",children:Object(i.jsxs)(f.c,{to:"/series",className:"nav-link",children:[Object(i.jsx)("div",{className:"nav-icon",children:Object(i.jsx)(se.a,{fontSize:"large"})}),Object(i.jsx)("span",{children:" \u0421\u0435\u0440\u0438\u0430\u043b\u044b"})]})}),Object(i.jsx)("div",{className:"nav",children:Object(i.jsxs)(f.c,{to:"/person",className:"nav-link",children:[Object(i.jsx)("div",{className:"nav-icon",children:Object(i.jsx)(ie.a,{fontSize:"large"})}),Object(i.jsx)("span",{children:" \u041f\u043e\u043f\u0443\u043b\u044f\u0440\u043d\u044b\u0435 \u043b\u044e\u0434\u0438 "})]})}),Object(i.jsx)("div",{className:"nav",children:Object(i.jsxs)(f.c,{to:"/search",className:"nav-link",children:[Object(i.jsxs)("div",{className:"nav-icon",children:["   ",Object(i.jsx)(B.a,{fontSize:"large"})]}),Object(i.jsx)("span",{children:"\u041f\u043e\u0438\u0441\u043a"})," "]})})]})})});a(211);var le=function(){return Object(i.jsx)("div",{className:"footer",children:Object(i.jsx)(oe,{})})};var je=function(){return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(o,{}),Object(i.jsx)("div",{className:"app",children:Object(i.jsx)(l.a,{maxWidth:"xxl",children:Object(i.jsxs)(r.c,{children:[Object(i.jsx)(r.a,{exact:!0,path:"/React-Material-UI-Movie-App",element:Object(i.jsx)(k,{})}),Object(i.jsx)(r.a,{path:"/movies",element:Object(i.jsx)(U,{})}),Object(i.jsx)(r.a,{path:"/series",element:Object(i.jsx)(A,{})}),Object(i.jsx)(r.a,{path:"/search",element:Object(i.jsx)(W,{})}),Object(i.jsx)(r.a,{path:"/content",element:Object(i.jsx)(X,{})}),Object(i.jsx)(r.a,{path:"/person",element:Object(i.jsx)(F,{})}),Object(i.jsx)(r.a,{path:"/bio",element:Object(i.jsx)(Z,{})}),Object(i.jsx)(r.a,{element:Object(i.jsx)(D,{})})]})})}),Object(i.jsx)(le,{})]})};s.a.render(Object(i.jsx)(f.a,{children:Object(i.jsx)(je,{})}),document.getElementById("root"))}},[[212,1,2]]]);
//# sourceMappingURL=main.7696b4b8.chunk.js.map