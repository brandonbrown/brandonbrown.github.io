webpackJsonp([0xd2a57dc1d883],{94:function(n,e,t){"use strict";function o(n,e,t){var o=u.map(function(t){if(t.plugin[n]){var o=t.plugin[n](e,t.options);return o}});return o=o.filter(function(n){return"undefined"!=typeof n}),o.length>0?o:t?[t]:[]}function r(n,e,t){return u.reduce(function(t,o){return o.plugin[n]?t.then(function(){return o.plugin[n](e,o.options)}):t},Promise.resolve())}e.__esModule=!0,e.apiRunner=o,e.apiRunnerAsync=r;var u=[{plugin:t(403),options:{plugins:[],trackingId:"UA-46993813-1"}},{plugin:t(405),options:{plugins:[]}},{plugin:t(407),options:{plugins:[],pathToConfigModule:"src/utils/typography"}}]},247:function(n,e,t){"use strict";e.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":t(371),"component---src-templates-blog-post-js":t(380),"component---src-pages-404-js":t(373),"component---src-pages-index-js":t(374),"component---src-pages-listening-js":t(375),"component---src-pages-reading-js":t(376),"component---src-pages-sharing-js":t(377),"component---src-pages-watching-js":t(378),"component---src-pages-writing-js":t(379)},e.json={"layout-index.json":t(381),"offline-plugin-app-shell-fallback.json":t(386),"writing-bookmarks-2.json":t(393),"writing-bookmarks-1.json":t(392),"writing-web-people.json":t(398),"writing-the-fast-app.json":t(397),"writing-personal-training.json":t(396),"writing-athleanx.json":t(391),"writing-coffee-and-success.json":t(394),"writing-world-cup-fitness-inspiration.json":t(399),"writing-design-your-life.json":t(395),"writing-yourfirststeps-part-3.json":t(402),"writing-yourfirststeps-part-2.json":t(401),"writing-yourfirststeps-part-1.json":t(400),"404.json":t(382),"index.json":t(384),"listening.json":t(385),"reading.json":t(387),"sharing.json":t(388),"watching.json":t(389),"writing.json":t(390),"404-html.json":t(383)},e.layouts={"layout---index":t(372)}},248:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function u(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function a(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var i=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},s=t(2),c=o(s),l=t(8),f=o(l),p=t(158),d=o(p),m=t(67),g=o(m),h=t(94),y=t(650),j=o(y),w=function(n){var e=n.children;return c.default.createElement("div",null,e())},x=function(n){function e(t){r(this,e);var o=u(this,n.call(this)),a=t.location;return d.default.getPage(a.pathname)||(a=i({},a,{pathname:"/404.html"})),o.state={location:a,pageResources:d.default.getResourcesForPathname(a.pathname)},o}return a(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var t=d.default.getResourcesForPathname(n.location.pathname);if(t)this.setState({location:n.location,pageResources:t});else{var o=n.location;d.default.getPage(o.pathname)||(o=i({},o,{pathname:"/404.html"})),d.default.getResourcesForPathname(o.pathname,function(n){e.setState({location:o,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;g.default.on("onPostLoadPageResources",function(e){d.default.getPage(n.state.location.pathname)&&e.page.path===d.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||(!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path)||(0,j.default)(this,n,e)))))},e.prototype.render=function(){var n=(0,h.apiRunner)("replaceComponentRenderer",{props:i({},this.props,{pageResources:this.state.pageResources}),loader:p.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,s.createElement)(this.state.pageResources.component,i({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,s.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:w,i({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);x.propTypes={page:f.default.bool,layout:f.default.bool,location:f.default.object},e.default=x,n.exports=e.default},67:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(547),u=o(r),a=(0,u.default)();n.exports=a},249:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(93),u=t(159),a=o(u),i={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(t){var o=decodeURIComponent(t),u=(0,a.default)(o,e);if(u.split("#").length>1&&(u=u.split("#").slice(0,-1).join("")),u.split("?").length>1&&(u=u.split("?").slice(0,-1).join("")),i[u])return i[u];var s=void 0;return n.some(function(n){if(n.matchPath){if((0,r.matchPath)(u,{path:n.path})||(0,r.matchPath)(u,{path:n.matchPath}))return s=n,i[u]=n,!0}else{if((0,r.matchPath)(u,{path:n.path,exact:!0}))return s=n,i[u]=n,!0;if((0,r.matchPath)(u,{path:n.path+"index.html"}))return s=n,i[u]=n,!0}return!1}),s}}},250:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(120),u=o(r),a=t(94),i=(0,a.apiRunner)("replaceHistory"),s=i[0],c=s||(0,u.default)();n.exports=c},383:function(n,e,t){t(3),n.exports=function(n){return t.e(0xa2868bfb69fc,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(414)})})}},382:function(n,e,t){t(3),n.exports=function(n){return t.e(0xe70826b53c04,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(415)})})}},384:function(n,e,t){t(3),n.exports=function(n){return t.e(0x81b8806e4260,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(416)})})}},381:function(n,e,t){t(3),n.exports=function(n){return t.e(60335399758886,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(123)})})}},385:function(n,e,t){t(3),n.exports=function(n){return t.e(0xabde43faaf1d,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(417)})})}},386:function(n,e,t){t(3),n.exports=function(n){return t.e(0xbf4c176e203a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(418)})})}},387:function(n,e,t){t(3),n.exports=function(n){return t.e(0x60aa62ce7305,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(419)})})}},388:function(n,e,t){t(3),n.exports=function(n){return t.e(0xc5b163c124ab,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(420)})})}},389:function(n,e,t){t(3),n.exports=function(n){return t.e(0xd1fb2bb73561,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(421)})})}},391:function(n,e,t){t(3),n.exports=function(n){return t.e(77279769640414,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(422)})})}},392:function(n,e,t){t(3),n.exports=function(n){return t.e(0x78c364f09c56,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(423)})})}},393:function(n,e,t){t(3),n.exports=function(n){return t.e(0xadb9d8ffb970,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(424)})})}},394:function(n,e,t){t(3),n.exports=function(n){return t.e(93149972065120,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(425)})})}},395:function(n,e,t){t(3),n.exports=function(n){return t.e(80475136541607,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(426)})})}},396:function(n,e,t){t(3),n.exports=function(n){return t.e(0xc379a5952d5d,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(427)})})}},397:function(n,e,t){t(3),n.exports=function(n){return t.e(0x84d93253b9fa,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(428)})})}},398:function(n,e,t){t(3),n.exports=function(n){return t.e(93489961761991,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(429)})})}},399:function(n,e,t){t(3),n.exports=function(n){return t.e(0xb441f31d0581,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(430)})})}},400:function(n,e,t){t(3),n.exports=function(n){return t.e(0xe66c1d147a89,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(431)})})}},401:function(n,e,t){t(3),n.exports=function(n){return t.e(58007523613094,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(432)})})}},402:function(n,e,t){t(3),n.exports=function(n){return t.e(0x9e99b9b5a2d5,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(433)})})}},390:function(n,e,t){t(3),n.exports=function(n){return t.e(0x8d3eaf8386d0,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(434)})})}},372:function(n,e,t){t(3),n.exports=function(n){return t.e(0x67ef26645b2a,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(251)})})}},158:function(n,e,t){(function(n){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var r=t(2),u=(o(r),t(249)),a=o(u),i=t(67),s=o(i),c=t(159),l=o(c),f=void 0,p={},d={},m={},g={},h={},y=[],j=[],w={},x="",v=[],b={},R=function(n){return n&&n.default||n},C=void 0,k=!0,N=[],_={},P={},E=5;C=t(252)({getNextQueuedResources:function(){return v.slice(-1)[0]},createResourceDownload:function(n){T(n,function(){v=v.filter(function(e){return e!==n}),C.onResourcedFinished(n)})}}),s.default.on("onPreLoadPageResources",function(n){C.onPreLoadPageResources(n)}),s.default.on("onPostLoadPageResources",function(n){C.onPostLoadPageResources(n)});var O=function(n,e){return b[n]>b[e]?1:b[n]<b[e]?-1:0},L=function(n,e){return w[n]>w[e]?1:w[n]<w[e]?-1:0},T=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(g[e])n.nextTick(function(){t(null,g[e])});else{var o=void 0;o="component---"===e.slice(0,12)?d.components[e]:"layout---"===e.slice(0,9)?d.layouts[e]:d.json[e],o(function(n,o){g[e]=o,N.push({resource:e,succeeded:!n}),P[e]||(P[e]=n),N=N.slice(-E),t(n,o)})}},S=function(e,t){h[e]?n.nextTick(function(){t(null,h[e])}):P[e]?n.nextTick(function(){t(P[e])}):T(e,function(n,o){if(n)t(n);else{var r=R(o());h[e]=r,t(n,r)}})},A=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=N.find(function(n){return n.succeeded});return!!e},D=function(n,e){console.log(e),_[n]||(_[n]=e),A()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},M=1,U={empty:function(){j=[],w={},b={},v=[],y=[],x=""},addPagesArray:function(n){y=n,f=(0,a.default)(n,x)},addDevRequires:function(n){p=n},addProdRequires:function(n){d=n},dequeue:function(){return j.pop()},enqueue:function(n){var e=(0,l.default)(n,x);if(!y.some(function(n){return n.path===e}))return!1;var t=1/M;M+=1,w[e]?w[e]+=1:w[e]=1,U.has(e)||j.unshift(e),j.sort(L);var o=f(e);return o.jsonName&&(b[o.jsonName]?b[o.jsonName]+=1+t:b[o.jsonName]=1+t,v.indexOf(o.jsonName)!==-1||g[o.jsonName]||v.unshift(o.jsonName)),o.componentChunkName&&(b[o.componentChunkName]?b[o.componentChunkName]+=1+t:b[o.componentChunkName]=1+t,v.indexOf(o.componentChunkName)!==-1||g[o.jsonName]||v.unshift(o.componentChunkName)),v.sort(O),C.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:v,resourcesCount:b}},getPages:function(){return{pathArray:j,pathCount:w}},getPage:function(n){return f(n)},has:function(n){return j.some(function(e){return e===n})},getResourcesForPathname:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};k&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(f(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,t=Array.isArray(e),o=0,e=t?e:e[Symbol.iterator]();;){var r;if(t){if(o>=e.length)break;r=e[o++]}else{if(o=e.next(),o.done)break;r=o.value}var u=r;u.unregister()}window.location.reload()}})),k=!1;if(_[e])return D(e,'Previously detected load failure for "'+e+'"'),t();var o=f(e);if(!o)return D(e,"A page wasn't found for \""+e+'"'),t();if(e=o.path,m[e])return n.nextTick(function(){t(m[e]),s.default.emit("onPostLoadPageResources",{page:o,pageResources:m[e]})}),m[e];s.default.emit("onPreLoadPageResources",{path:e});var r=void 0,u=void 0,a=void 0,i=function(){if(r&&u&&(!o.layoutComponentChunkName||a)){m[e]={component:r,json:u,layout:a,page:o};var n={component:r,json:u,layout:a,page:o};t(n),s.default.emit("onPostLoadPageResources",{page:o,pageResources:n})}};return S(o.componentChunkName,function(n,e){n&&D(o.path,"Loading the component for "+o.path+" failed"),r=e,i()}),S(o.jsonName,function(n,e){n&&D(o.path,"Loading the JSON for "+o.path+" failed"),u=e,i()}),void(o.layoutComponentChunkName&&S(o.layout,function(n,e){n&&D(o.path,"Loading the Layout for "+o.path+" failed"),a=e,i()}))},peek:function(n){return j.slice(-1)[0]},length:function(){return j.length},indexOf:function(n){return j.length-j.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:U.getResourcesForPathname};e.default=U}).call(e,t(137))},435:function(n,e){n.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"writing-bookmarks-2.json",path:"/writing/bookmarks-2/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"writing-bookmarks-1.json",path:"/writing/bookmarks-1/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"writing-web-people.json",path:"/writing/web-people/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"writing-the-fast-app.json",path:"/writing/the-fast-app/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"writing-personal-training.json",path:"/writing/personal-training/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"writing-athleanx.json",path:"/writing/athleanx/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"writing-coffee-and-success.json",path:"/writing/coffee-and-success/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"writing-world-cup-fitness-inspiration.json",path:"/writing/world-cup-fitness-inspiration/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"writing-design-your-life.json",path:"/writing/design-your-life/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"writing-yourfirststeps-part-3.json",path:"/writing/yourfirststeps-part3/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"writing-yourfirststeps-part-2.json",path:"/writing/yourfirststeps-part2/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"writing-yourfirststeps-part-1.json",path:"/writing/yourfirststeps-part1/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-listening-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"listening.json",path:"/listening/"},{componentChunkName:"component---src-pages-reading-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"reading.json",path:"/reading/"},{componentChunkName:"component---src-pages-sharing-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"sharing.json",path:"/sharing/"},{componentChunkName:"component---src-pages-watching-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"watching.json",path:"/watching/"},{componentChunkName:"component---src-pages-writing-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"writing.json",path:"/writing/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},252:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,t=n.createResourceDownload,o=[],r=[],u=function(){var n=e();n&&(r.push(n),t(n))},a=function(n){switch(n.type){case"RESOURCE_FINISHED":r=r.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":o.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":o=o.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===o.length&&u()},0)};return{onResourcedFinished:function(n){a({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){a({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){a({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){a({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:o,resourcesDownloading:r}},empty:function(){o=[],r=[]}}}},0:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(n[o]=t[o])}return n},u=t(94),a=t(2),i=o(a),s=t(216),c=o(s),l=t(93),f=t(411),p=t(355),d=o(p),m=t(122),g=t(250),h=o(g),y=t(67),j=o(y),w=t(435),x=o(w),v=t(436),b=o(v),R=t(248),C=o(R),k=t(247),N=o(k),_=t(158),P=o(_);t(277),window.___history=h.default,window.___emitter=j.default,P.default.addPagesArray(x.default),P.default.addProdRequires(N.default),window.asyncRequires=N.default,window.___loader=P.default,window.matchPath=l.matchPath;var E=b.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),O=function(n){var e=E[n];return null!=e&&(h.default.replace(e.toPath),!0)};O(window.location.pathname),(0,u.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&s!==!1||(window.___history=n,s=!0,n.listen(function(n,e){O(n.pathname)||setTimeout(function(){(0,u.apiRunner)("onRouteUpdate",{location:n,action:e})},0)}))}function e(n,e){var t=e.location.pathname,o=(0,u.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:t});if(o.length>0)return o[0];if(n){var r=n.location.pathname;if(r===t)return!1}return!0}(0,u.apiRunner)("registerServiceWorker").length>0&&t(253);var o=function(n){function e(n){n.page.path===P.default.getPage(o).path&&(j.default.off("onPostLoadPageResources",e),clearTimeout(a),window.___history.push(t))}var t=(0,m.createLocation)(n,null,null,h.default.location),o=t.pathname,r=E[o];r&&(o=r.toPath);var u=window.location;if(u.pathname!==t.pathname||u.search!==t.search||u.hash!==t.hash){var a=setTimeout(function(){j.default.off("onPostLoadPageResources",e),j.default.emit("onDelayedLoadPageResources",{pathname:o}),window.___history.push(t)},1e3);P.default.getResourcesForPathname(o)?(clearTimeout(a),window.___history.push(t)):j.default.on("onPostLoadPageResources",e)}};window.___navigateTo=o,(0,u.apiRunner)("onRouteUpdate",{location:h.default.location,action:h.default.action});var s=!1,p=(0,u.apiRunner)("replaceRouterComponent",{history:h.default})[0],g=function(n){var e=n.children;return i.default.createElement(l.Router,{history:h.default},e)},y=(0,l.withRouter)(C.default);P.default.getResourcesForPathname(window.location.pathname,function(){var t=function(){return(0,a.createElement)(p?p:g,null,(0,a.createElement)(f.ScrollContext,{shouldUpdateScroll:e},(0,a.createElement)(y,{layout:!0,children:function(e){return(0,a.createElement)(l.Route,{render:function(t){n(t.history);var o=e?e:t;return P.default.getPage(o.location.pathname)?(0,a.createElement)(C.default,r({page:!0},o)):(0,a.createElement)(C.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},o=(0,u.apiRunner)("wrapRootComponent",{Root:t},t)[0];(0,d.default)(function(){return c.default.render(i.default.createElement(o,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,u.apiRunner)("onInitialClientRender")})})})})},436:function(n,e){n.exports=[]},253:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(67),u=o(r),a="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(a+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),u.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},159:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n},n.exports=e.default},355:function(n,e,t){!function(e,t){n.exports=t()}("domready",function(){var n,e=[],t=document,o=t.documentElement.doScroll,r="DOMContentLoaded",u=(o?/^loaded|^c/:/^loaded|^i|^c/).test(t.readyState);return u||t.addEventListener(r,n=function(){for(t.removeEventListener(r,n),u=1;n=e.shift();)n()}),function(n){u?setTimeout(n,0):e.push(n)}})},3:function(n,e,t){"use strict";function o(){function n(n){var e=o.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,o=document.querySelector("head"),r=t.e,u=t.s;t.e=function(o,a){var i=!1,s=!0,c=function(n){a&&(a(t,n),a=null)};return!u&&e&&e[o]?void c(!0):(r(o,function(){i||(i=!0,s?setTimeout(function(){c()}):c())}),void(i||(s=!1,n(function(){i||(i=!0,u?u[o]=void 0:(e||(e={}),e[o]=!0),c(!0))}))))}}o()},403:function(n,e,t){"use strict";e.onRouteUpdate=function(n){var e=n.location;if("function"==typeof ga){if(e&&"undefined"!=typeof window.excludeGAPaths&&window.excludeGAPaths.some(function(n){return n.test(e.pathname)}))return;window.ga("set","page",e?e.pathname+e.search+e.hash:void 0),window.ga("send","pageview")}}},371:function(n,e,t){t(3),n.exports=function(n){return t.e(99219681209289,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(404)})})}},405:function(n,e){"use strict";e.registerServiceWorker=function(){return!0}},406:function(n,e,t){n.exports=t(20)},407:function(n,e,t){"use strict";function o(n){return n&&n.__esModule?n:{default:n}}var r=t(406);o(r);e.onClientEntry=function(){}},547:function(n,e){function t(n){return n=n||Object.create(null),{on:function(e,t){(n[e]||(n[e]=[])).push(t)},off:function(e,t){n[e]&&n[e].splice(n[e].indexOf(t)>>>0,1)},emit:function(e,t){(n[e]||[]).slice().map(function(n){n(t)}),(n["*"]||[]).slice().map(function(n){n(e,t)})}}}n.exports=t},137:function(n,e){function t(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function r(n){if(l===setTimeout)return setTimeout(n,0);if((l===t||!l)&&setTimeout)return l=setTimeout,setTimeout(n,0);try{return l(n,0)}catch(e){try{return l.call(null,n,0)}catch(e){return l.call(this,n,0)}}}function u(n){if(f===clearTimeout)return clearTimeout(n);if((f===o||!f)&&clearTimeout)return f=clearTimeout,clearTimeout(n);try{return f(n)}catch(e){try{return f.call(null,n)}catch(e){return f.call(this,n)}}}function a(){g&&d&&(g=!1,d.length?m=d.concat(m):h=-1,m.length&&i())}function i(){if(!g){var n=r(a);g=!0;for(var e=m.length;e;){for(d=m,m=[];++h<e;)d&&d[h].run();h=-1,e=m.length}d=null,g=!1,u(n)}}function s(n,e){this.fun=n,this.array=e}function c(){}var l,f,p=n.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:t}catch(n){l=t}try{f="function"==typeof clearTimeout?clearTimeout:o}catch(n){f=o}}();var d,m=[],g=!1,h=-1;p.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var t=1;t<arguments.length;t++)e[t-1]=arguments[t];m.push(new s(n,e)),1!==m.length||g||r(i)},s.prototype.run=function(){this.fun.apply(null,this.array)},p.title="browser",p.browser=!0,p.env={},p.argv=[],p.version="",p.versions={},p.on=c,p.addListener=c,p.once=c,p.off=c,p.removeListener=c,p.removeAllListeners=c,p.emit=c,p.prependListener=c,p.prependOnceListener=c,p.listeners=function(n){return[]},p.binding=function(n){throw new Error("process.binding is not supported")},p.cwd=function(){return"/"},p.chdir=function(n){throw new Error("process.chdir is not supported")},p.umask=function(){return 0}},650:function(n,e){"use strict";function t(n,e){for(var t in n)if(!(t in e))return!0;for(var o in e)if(n[o]!==e[o])return!0;return!1}e.__esModule=!0,e.default=function(n,e,o){return t(n.props,e)||t(n.state,o)},n.exports=e.default},373:function(n,e,t){t(3),n.exports=function(n){return t.e(0x9427c64ab85d,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(257)})})}},374:function(n,e,t){t(3),n.exports=function(n){return t.e(35783957827783,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(258)})})}},375:function(n,e,t){t(3),n.exports=function(n){return t.e(89693379388046,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(259)})})}},376:function(n,e,t){t(3),n.exports=function(n){return t.e(47301250561866,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(260)})})}},377:function(n,e,t){t(3),n.exports=function(n){return t.e(0xa205a60d67b5,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(261)})})}},378:function(n,e,t){t(3),n.exports=function(n){return t.e(0xacb9ad920ce1,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(262)})})}},379:function(n,e,t){t(3),n.exports=function(n){return t.e(0xa27c644eea74,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(263)})})}},380:function(n,e,t){t(3),n.exports=function(n){return t.e(0x620f737b6699,function(e,o){o?(console.log("bundle loading error",o),n(!0)):n(null,function(){return t(264)})})}}});
//# sourceMappingURL=app-4aab4436c009f30e6284.js.map