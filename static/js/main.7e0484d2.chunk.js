(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,t,n){e.exports=n.p+"static/media/empty-poster.b9aba793.png"},17:function(e,t,n){e.exports=n(31)},24:function(e,t,n){},25:function(e,t,n){},26:function(e,t,n){},27:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(4),c=n.n(i),o=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function s(e,t){navigator.serviceWorker.register(e).then(function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See http://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}}).catch(function(e){console.error("Error during service worker registration:",e)})}var u=n(3),l=n(6),m=n(10),d=n(9),f=n(33),p=n(7),v=n(1),_=n.n(v),b=n(14),h=n(2),g=n(15),w="https://api.themoviedb.org/3/movie",E="3b07521ea25bf66106a9525b3054c8e9",N={ratingTitle:"IMDb",metaScoreTitle:"Critics",trailerTitle:"Trailer",trailerSite:"YouTube",directorTitle:"Producer",actorsTitle:"Cast"},y=n(13),k={singleSlider:{defaultOverview:"The overview is empty.",defaultYear:2020,defaultDirector:"The producer is unknown.",defaultActors:"Actors are unknown.",defaultImdbRating:"-",defaultPoster:n.n(y).a}},x=function(e){return fetch(e,{method:"GET"}).then(function(e){return e.json()}).then(function(e){return e}).catch(function(e){return e})},O=function(){var e=Object(h.a)(_.a.mark(function e(t){var n,a;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(w).concat("/now_playing","?").concat("region=").concat("UA","&").concat("language=").concat("en-EN","&").concat("api_key=").concat(E),a="".concat(n,"&").concat("page=").concat(2),e.next=4,Promise.all([x(n),x("".concat(a))]).then(function(e){var n=Object(b.a)(e,2),a=n[0],r=n[1],i=a.results,c=r.results,o=c.slice(0,c.length-2);i.concat(o).forEach(function(e){e.poster=e.poster_path?"".concat("https://image.tmdb.org/t/p/original").concat(e.poster_path):null,t.push(e)})}).catch(function(e){return e});case 4:return e.abrupt("return",t);case 5:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),j=function(){var e=Object(h.a)(_.a.mark(function e(t){var n,a;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=N.trailerSite,a=t.map(function(){var e=Object(h.a)(_.a.mark(function e(t){var a,r,i,c,o,s,u;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.id,r="".concat(w,"/").concat(a,"?").concat("api_key=").concat(E,"&").concat("append_to_response=").concat("external_ids,videos","&").concat("language=").concat("en-EN"),e.next=4,x(r);case 4:return i=e.sent,c=i.videos.results,o="",(s=c.length)>0&&(u=c[s-1],o=u.site===n?"".concat("https://www.youtube.com/watch","?").concat("v=").concat(u.key):o),e.abrupt("return",Object(p.a)(Object(p.a)({},t),{},{imdb_id:i.imdb_id,trailer_url:o,genres:i.genres}));case 10:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",t.length?Promise.all(a):t);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),S=function(){var e=Object(h.a)(_.a.mark(function e(t){var n,a,r,i;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a=(n=k.singleSlider).defaultImdbRating,r=n.defaultActors,i=t.map(function(){var e=Object(h.a)(_.a.mark(function e(t){var n,i,c,o;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.imdb_id,i="".concat("https://www.omdbapi.com/","?").concat("i=").concat(n,"&").concat("apikey=").concat("55018c43"),c="N/A",e.next=5,x(i);case 5:return(o=e.sent).imdbRating=isNaN(o.imdbRating)?a:o.imdbRating,o.Actors=o.Actors===c?r:o.Actors,e.abrupt("return",Object(p.a)(Object(p.a)({},t),{},{imdbRating:o.imdbRating,director:o.Director,actors:o.Actors,metascore:o.Metascore,year:o.Year}));case 9:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}()),e.abrupt("return",t.length?Promise.all(i):t);case 3:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),R=function(){var e=Object(h.a)(_.a.mark(function e(t){return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t.sort(function(e,t){return e.imdbRating>t.imdbRating?-1:e.imdbRating<t.imdbRating?1:0}),e.abrupt("return",t);case 2:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),T=function(){var e=Object(h.a)(_.a.mark(function e(t){return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,n){JSON.stringify(t),e(t)}));case 1:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),A=function(){var e=Object(h.a)(_.a.mark(function e(){return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",new Promise(function(e,t){new g.a(".swiper-container",{effect:"coverflow",centeredSlides:!0,slidesPerView:"auto",mousewheel:!0,keyboard:!0,grabCursor:!0,longSwipesRatio:1,coverflowEffect:{rotate:20,stretch:0,depth:100,modifier:1,slideShadows:!1},on:{init:function(){e(!1)}}})}));case 1:case"end":return e.stop()}},e)}));return function(){return e.apply(this,arguments)}}(),P=function(){var e=Object(h.a)(_.a.mark(function e(t){var n,a,r,i,c;return _.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,O(t);case 2:return n=e.sent,e.next=5,j(n);case 5:return a=e.sent,e.next=8,S(a);case 8:return r=e.sent,e.next=11,R(r);case 11:return i=e.sent,e.next=14,T(i);case 14:return c=e.sent,e.abrupt("return",c);case 16:case"end":return e.stop()}},e)}));return function(t){return e.apply(this,arguments)}}(),C=(n(23),n(24),{12:"adventures",14:"fantasy",16:"animation",18:"drama",27:"horror",28:"action",35:"comedy",36:"history",37:"western-film",53:"thriller",80:"crime",99:"documentary",878:"science-fiction",9648:"mystery",10402:"music",10749:"romance",10751:"family",10752:"war",10770:"show"}),W=function(e){return"item__genre-icon item__genre-icon--".concat(C[e]||"default")},D=function(e){var t=e.genres,n=e.size;return r.a.createElement("div",{className:"item__sidebar item__genre-box item__genre-box--".concat(n)},t.map(function(e){var t=e.id,n=e.name;return r.a.createElement("div",{key:t,className:"item__genre-element"},r.a.createElement("div",{className:W(t)}),r.a.createElement("div",{className:"item__genre-name"},n))}))};D.defaultProps={genres:[],size:"sm"};var I=D,L=(n(25),k.singleSlider),M=L.defaultOverview,z=L.defaultYear,U=L.defaultDirector,Y=L.defaultActors,J=L.defaultPoster,B=L.defaultImdbRating,q=N.ratingTitle,F=N.metaScoreTitle,G=N.trailerTitle,V=N.trailerSite,$=N.directorTitle,H=N.actorsTitle,K=function(e){var t=e.movie,n=t.genres,a=t.poster,i=t.title,c=t.year,o=t.imdbRating,s=t.metascore,u=t.trailer_url,l=t.director,m=t.actors,d=t.overview;return r.a.createElement("div",{className:"swiper-slide item"},r.a.createElement("div",{className:"item__description item__title"},r.a.createElement("span",null,"".concat(i," (").concat(c||z,")"))),r.a.createElement("div",{className:"item__img"},r.a.createElement("img",{src:a,alt:"Poster"}),r.a.createElement("div",{className:"item__shadow item__shadow--left"}),r.a.createElement("div",{className:"item__shadow item__shadow--right"}),r.a.createElement("div",{className:"item__description item__marks"},r.a.createElement("div",{className:" item__sidebar item__sidebar--imdb"},r.a.createElement("span",{className:"item__sidebar-title"},q),r.a.createElement("span",{className:"item__sidebar-number"},o)),!isNaN(s)&&r.a.createElement("div",{className:"item__sidebar item__sidebar--metascore"},r.a.createElement("span",{className:"item__sidebar-title item__sidebar-title--sm"},F),r.a.createElement("span",{className:"item__sidebar-number"},"".concat(s,"%"))),u.length>0&&r.a.createElement("div",{className:"item__sidebar item__sidebar--trailer"},r.a.createElement("span",{className:"item__sidebar-title item__sidebar-title--sm"},G),r.a.createElement("span",{className:"item__sidebar-icon item__sidebar-icon--youtube"}),r.a.createElement("a",{className:"item__sidebar-link",href:u,target:"_blank",rel:"noopener noreferrer"},V)),n.length>0&&r.a.createElement("div",{className:"item__genre"},r.a.createElement(I,{genres:n,size:"sm"}),r.a.createElement(I,{genres:n,size:"lg"})))),r.a.createElement("div",{className:"item__description item__bottom"},r.a.createElement("div",{className:"item__cast"},r.a.createElement("span",{className:"item__director"},$,": ",r.a.createElement("span",null,l||U)),r.a.createElement("span",{className:"item__actors"},H,": ",r.a.createElement("span",null,m||Y))),r.a.createElement("div",{className:"item__overview"},r.a.createElement("span",null,d||M))))};K.defaultProps={movie:{genres:[],poster:J,year:z,imdbRating:B,metascore:0,trailer_url:"",director:U,actors:Y,overview:M}};var Q=K,X=function(e){var t=e.movies;return r.a.createElement("div",{className:"swiper-container"},r.a.createElement("div",{className:"swiper-wrapper"},t.map(function(e){return r.a.createElement(Q,{key:e.id,movie:e})})))};X.defaultProps={movies:[]};var Z=X,ee=(n(26),function(){return r.a.createElement("div",{className:"loader"},r.a.createElement("div",{className:"loader__spinner"},r.a.createElement("div",{className:"loader__spinner-square"})))}),te=(n(27),function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(u.a)(this,n);for(var a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={movies:[],contentLoading:!0},e.setupSlider=function(){A().then(function(t){return e.setState({contentLoading:t})}).catch(function(e){return e})},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=this.state.movies;P(t).then(function(t){return e.setState({movies:t})}).then(function(){return e.setupSlider()}).catch(function(e){return e})}},{key:"render",value:function(){var e=this.state,t=e.contentLoading,n=e.movies;return r.a.createElement(r.a.Fragment,null,r.a.createElement(f.a,{in:t,timeout:500,classNames:"animation",unmountOnExit:!0},r.a.createElement(ee,null)),r.a.createElement(f.a,{in:!t,timeout:1e3,classNames:"animation"},r.a.createElement("div",{className:"content"},r.a.createElement(Z,{movies:n}))))}}]),n}(a.Component));n(30);c.a.render(r.a.createElement(te,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Movies",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",function(){var t="".concat("/Movies","/service-worker.js");o?(function(e,t){fetch(e).then(function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then(function(e){e.unregister().then(function(){window.location.reload()})}):s(e,t)}).catch(function(){console.log("No internet connection found. App is running in offline mode.")})}(t,e),navigator.serviceWorker.ready.then(function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit http://bit.ly/CRA-PWA")})):s(t,e)})}}()}},[[17,1,2]]]);
//# sourceMappingURL=main.7e0484d2.chunk.js.map