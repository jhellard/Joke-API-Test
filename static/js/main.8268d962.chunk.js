(this["webpackJsonpjoke-site"]=this["webpackJsonpjoke-site"]||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var o=t(0),a=t.n(o),r=t(3),i=t.n(r),s=(t(13),t(4)),c=t(5),l=t(7),u=t(6),f=t(1),h=t.n(f),m=function(e){var n=e.grabJokes;return a.a.createElement("div",{className:"buttons"},a.a.createElement("button",{onClick:function(){return n("Programming")}},"Programming Joke"),a.a.createElement("button",{onClick:function(){return n("Miscellaneous")}},"Misc Joke"),a.a.createElement("button",{onClick:function(){return n("Dark")}},"Dark Joke"))},k=(t(14),function(e){Object(l.a)(t,e);var n=Object(u.a)(t);function t(e){var o;return Object(s.a)(this,t),(o=n.call(this,e)).grabJokes=function(e){fetch("https://sv443.net/jokeapi/v2/joke/"+e).then((function(e){return e.json()})).then((function(e){return o.setState({joke:e,isPending:!1})}))},o.state={joke:[],isPending:!0},o}return Object(c.a)(t,[{key:"render",value:function(){var e=this.state,n=e.joke,t=e.isPending;return a.a.createElement("div",{className:"wrapper"},t?a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",null,a.a.createElement(h.a,{options:{wrapperClassName:"choose",cursorClassName:"flicker span",strings:"Choose your joke...",autoStart:!0}})),a.a.createElement(m,{grabJokes:this.grabJokes})):n.joke?a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",{className:"joke"},n.joke),a.a.createElement(m,{grabJokes:this.grabJokes})):a.a.createElement(a.a.Fragment,null,a.a.createElement("h1",{className:"joke"},n.setup),a.a.createElement(h.a,{options:{wrapperClassName:"span",cursorClassName:"flicker span",strings:n.delivery,autoStart:!0}}),a.a.createElement(m,{grabJokes:this.grabJokes})),a.a.createElement("p",{className:"footer"},"Made by: ",a.a.createElement("a",{href:"https://github.com/JHellard"},"Joshua Hellard")))}}]),t}(o.Component)),d=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function g(e,n){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),n&&n.onUpdate&&n.onUpdate(e)):(console.log("Content is cached for offline use."),n&&n.onSuccess&&n.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(a.a.createElement(a.a.StrictMode,null,a.a.createElement(k,null)),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("/Joke-API-Test",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var n="".concat("/Joke-API-Test","/service-worker.js");d?(!function(e,n){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):g(e,n)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(n,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):g(n,e)}))}}()},8:function(e,n,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.8268d962.chunk.js.map