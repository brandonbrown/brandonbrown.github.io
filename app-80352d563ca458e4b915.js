webpackJsonp([0xd2a57dc1d883],{112:function(n,e,o){"use strict";function t(n,e,o){var t=u.map(function(o){if(o.plugin[n]){var t=o.plugin[n](e,o.options);return t}});return t=t.filter(function(n){return"undefined"!=typeof n}),t.length>0?t:o?[o]:[]}function r(n,e,o){return u.reduce(function(o,t){return t.plugin[n]?o.then(function(){return t.plugin[n](e,t.options)}):o},Promise.resolve())}e.__esModule=!0,e.apiRunner=t,e.apiRunnerAsync=r;var u=[{plugin:o(488),options:{plugins:[],trackingId:"UA-46993813-1"}},{plugin:o(490),options:{plugins:[]}},{plugin:o(492),options:{plugins:[],pathToConfigModule:"src/utils/typography"}}]},307:function(n,e,o){"use strict";e.components={"component---node-modules-gatsby-plugin-offline-app-shell-js":o(429),"component---src-templates-bkmk-post-js":o(443),"component---src-templates-blog-post-js":o(444),"component---src-pages-404-js":o(431),"component---src-pages-about-js":o(432),"component---src-pages-bkmks-js":o(433),"component---src-pages-creating-js":o(434),"component---src-pages-index-js":o(435),"component---src-pages-listening-js":o(437),"component---src-pages-listening-covers-js":o(436),"component---src-pages-reading-js":o(438),"component---src-pages-teaching-js":o(439),"component---src-pages-training-js":o(440),"component---src-pages-watching-js":o(441),"component---src-pages-writing-js":o(442)},e.json={"layout-index.json":o(445),"offline-plugin-app-shell-fallback.json":o(469),"bkmks-15.json":o(456),"writing-5-basics-for-beginners.json":o(475),"bkmks-14.json":o(455),"bkmks-13.json":o(454),"bkmks-12.json":o(453),"bkmks-11.json":o(452),"bkmks-10.json":o(451),"writing-december-daily-design.json":o(478),"bkmks-9.json":o(464),"bkmks-8.json":o(463),"writing-weekend-build-water-tracker-ui.json":o(483),"bkmks-7.json":o(462),"bkmks-6.json":o(461),"bkmks-5.json":o(460),"bkmks-4.json":o(459),"bkmks-3.json":o(458),"bkmks-2.json":o(457),"bkmks-1.json":o(450),"writing-web-people.json":o(482),"writing-the-fast-app.json":o(481),"writing-personal-training.json":o(480),"writing-athleanx.json":o(476),"writing-coffee-and-success.json":o(477),"writing-world-cup-fitness-inspiration.json":o(484),"writing-design-your-life.json":o(479),"writing-yourfirststeps-part-3.json":o(487),"writing-yourfirststeps-part-2.json":o(486),"writing-yourfirststeps-part-1.json":o(485),"404.json":o(446),"about.json":o(448),"bkmks.json":o(449),"creating.json":o(465),"index.json":o(466),"listening.json":o(467),"listening-covers.json":o(468),"reading.json":o(470),"teaching.json":o(471),"training.json":o(472),"watching.json":o(473),"writing.json":o(474),"404-html.json":o(447)},e.layouts={"layout---index":o(430)}},308:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}function r(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function u(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function a(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):n.__proto__=e)}e.__esModule=!0;var s=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},i=o(2),c=t(i),l=o(8),p=t(l),f=o(243),m=t(f),d=o(91),g=t(d),h=o(112),y=o(653),k=t(y),j=function(n){var e=n.children;return c.default.createElement("div",null,e())},b=function(n){function e(o){r(this,e);var t=u(this,n.call(this)),a=o.location;return m.default.getPage(a.pathname)||(a=s({},a,{pathname:"/404.html"})),t.state={location:a,pageResources:m.default.getResourcesForPathname(a.pathname)},t}return a(e,n),e.prototype.componentWillReceiveProps=function(n){var e=this;if(this.state.location.pathname!==n.location.pathname){var o=m.default.getResourcesForPathname(n.location.pathname);if(o)this.setState({location:n.location,pageResources:o});else{var t=n.location;m.default.getPage(t.pathname)||(t=s({},t,{pathname:"/404.html"})),m.default.getResourcesForPathname(t.pathname,function(n){e.setState({location:t,pageResources:n})})}}},e.prototype.componentDidMount=function(){var n=this;g.default.on("onPostLoadPageResources",function(e){m.default.getPage(n.state.location.pathname)&&e.page.path===m.default.getPage(n.state.location.pathname).path&&n.setState({pageResources:e.pageResources})})},e.prototype.shouldComponentUpdate=function(n,e){return!e.pageResources||(!(this.state.pageResources||!e.pageResources)||(this.state.pageResources.component!==e.pageResources.component||(this.state.pageResources.json!==e.pageResources.json||(!(this.state.location.key===e.location.key||!e.pageResources.page||!e.pageResources.page.matchPath&&!e.pageResources.page.path)||(0,k.default)(this,n,e)))))},e.prototype.render=function(){var n=(0,h.apiRunner)("replaceComponentRenderer",{props:s({},this.props,{pageResources:this.state.pageResources}),loader:f.publicLoader}),e=n[0];return this.props.page?this.state.pageResources?e||(0,i.createElement)(this.state.pageResources.component,s({key:this.props.location.pathname},this.props,this.state.pageResources.json)):null:this.props.layout?e||(0,i.createElement)(this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:j,s({key:this.state.pageResources&&this.state.pageResources.layout?this.state.pageResources.layout:"DefaultLayout"},this.props)):null},e}(c.default.Component);b.propTypes={page:p.default.bool,layout:p.default.bool,location:p.default.object},e.default=b,n.exports=e.default},91:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(548),u=t(r),a=(0,u.default)();n.exports=a},309:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(111),u=o(244),a=t(u),s={};n.exports=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return function(o){var t=decodeURIComponent(o),u=(0,a.default)(t,e);if(u.split("#").length>1&&(u=u.split("#").slice(0,-1).join("")),u.split("?").length>1&&(u=u.split("?").slice(0,-1).join("")),s[u])return s[u];var i=void 0;return n.some(function(n){if(n.matchPath){if((0,r.matchPath)(u,{path:n.path})||(0,r.matchPath)(u,{path:n.matchPath}))return i=n,s[u]=n,!0}else{if((0,r.matchPath)(u,{path:n.path,exact:!0}))return i=n,s[u]=n,!0;if((0,r.matchPath)(u,{path:n.path+"index.html"}))return i=n,s[u]=n,!0}return!1}),i}}},310:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(500),u=t(r),a=o(112),s=(0,a.apiRunner)("replaceHistory"),i=s[0],c=i||(0,u.default)();n.exports=c},447:function(n,e,o){o(1),n.exports=function(n){return o.e(0xa2868bfb69fc,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(504)})})}},446:function(n,e,o){o(1),n.exports=function(n){return o.e(0xe70826b53c04,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(505)})})}},448:function(n,e,o){o(1),n.exports=function(n){return o.e(0xf927f8900006,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(506)})})}},450:function(n,e,o){o(1),n.exports=function(n){return o.e(72966409593433,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(507)})})}},451:function(n,e,o){o(1),n.exports=function(n){return o.e(0x670d2deebe4d,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(508)})})}},452:function(n,e,o){o(1),n.exports=function(n){return o.e(42504723675669,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(509)})})}},453:function(n,e,o){o(1),n.exports=function(n){return o.e(0x6f9d3516408d,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(510)})})}},454:function(n,e,o){o(1),n.exports=function(n){return o.e(0x7cfef8a460b4,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(511)})})}},455:function(n,e,o){o(1),n.exports=function(n){return o.e(0xb927524c6fd1,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(512)})})}},456:function(n,e,o){o(1),n.exports=function(n){return o.e(31947339502611,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(513)})})}},457:function(n,e,o){o(1),n.exports=function(n){return o.e(2708344054198,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(514)})})}},458:function(n,e,o){o(1),n.exports=function(n){return o.e(0xa3bdbeb1e779,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(515)})})}},459:function(n,e,o){o(1),n.exports=function(n){return o.e(0x948a75117525,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(516)})})}},460:function(n,e,o){o(1),n.exports=function(n){return o.e(80570425293034,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(517)})})}},461:function(n,e,o){o(1),n.exports=function(n){return o.e(0xd60a9b09455e,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(518)})})}},462:function(n,e,o){o(1),n.exports=function(n){return o.e(0x655835fbb7b8,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(519)})})}},463:function(n,e,o){o(1),n.exports=function(n){return o.e(58549395411729,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(520)})})}},464:function(n,e,o){o(1),n.exports=function(n){return o.e(41052211655911,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(521)})})}},449:function(n,e,o){o(1),n.exports=function(n){return o.e(0x898fa232259f,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(522)})})}},465:function(n,e,o){o(1),n.exports=function(n){return o.e(0xcd5f95189c11,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(523)})})}},466:function(n,e,o){o(1),n.exports=function(n){return o.e(0x81b8806e4260,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(524)})})}},445:function(n,e,o){o(1),n.exports=function(n){return o.e(60335399758886,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(162)})})}},468:function(n,e,o){o(1),n.exports=function(n){return o.e(0xe1d8cba67f14,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(525)})})}},467:function(n,e,o){o(1),n.exports=function(n){return o.e(0xabde43faaf1d,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(526)})})}},469:function(n,e,o){o(1),n.exports=function(n){return o.e(0xbf4c176e203a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(527)})})}},470:function(n,e,o){o(1),n.exports=function(n){return o.e(0x60aa62ce7305,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(528)})})}},471:function(n,e,o){o(1),n.exports=function(n){return o.e(0x9affe2d730fb,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(529)})})}},472:function(n,e,o){o(1),n.exports=function(n){return o.e(24489777881196,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(530)})})}},473:function(n,e,o){o(1),n.exports=function(n){return o.e(0xd1fb2bb73561,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(531)})})}},475:function(n,e,o){o(1),n.exports=function(n){return o.e(0xb7abc480ac99,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(532)})})}},476:function(n,e,o){o(1),n.exports=function(n){return o.e(77279769640414,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(533)})})}},477:function(n,e,o){o(1),n.exports=function(n){return o.e(93149972065120,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(534)})})}},478:function(n,e,o){o(1),n.exports=function(n){return o.e(0xad649b3f64b7,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(535)})})}},479:function(n,e,o){o(1),n.exports=function(n){return o.e(80475136541607,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(536)})})}},480:function(n,e,o){o(1),n.exports=function(n){return o.e(0xc379a5952d5d,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(537)})})}},481:function(n,e,o){o(1),n.exports=function(n){return o.e(0x84d93253b9fa,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(538)})})}},482:function(n,e,o){o(1),n.exports=function(n){return o.e(93489961761991,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(539)})})}},483:function(n,e,o){o(1),n.exports=function(n){return o.e(0xec011e726e49,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(540)})})}},484:function(n,e,o){o(1),n.exports=function(n){return o.e(0xb441f31d0581,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(541)})})}},485:function(n,e,o){o(1),n.exports=function(n){return o.e(0xe66c1d147a89,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(542)})})}},486:function(n,e,o){o(1),n.exports=function(n){return o.e(58007523613094,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(543)})})}},487:function(n,e,o){o(1),n.exports=function(n){return o.e(0x9e99b9b5a2d5,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(544)})})}},474:function(n,e,o){o(1),n.exports=function(n){return o.e(0x8d3eaf8386d0,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(545)})})}},430:function(n,e,o){o(1),n.exports=function(n){return o.e(0x67ef26645b2a,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(311)})})}},243:function(n,e,o){(function(n){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}e.__esModule=!0,e.publicLoader=void 0;var r=o(2),u=(t(r),o(309)),a=t(u),s=o(91),i=t(s),c=o(244),l=t(c),p=void 0,f={},m={},d={},g={},h={},y=[],k=[],j={},b="",x=[],C={},N=function(n){return n&&n.default||n},w=void 0,v=!0,R=[],_={},P={},E=5;w=o(312)({getNextQueuedResources:function(){return x.slice(-1)[0]},createResourceDownload:function(n){T(n,function(){x=x.filter(function(e){return e!==n}),w.onResourcedFinished(n)})}}),i.default.on("onPreLoadPageResources",function(n){w.onPreLoadPageResources(n)}),i.default.on("onPostLoadPageResources",function(n){w.onPostLoadPageResources(n)});var O=function(n,e){return C[n]>C[e]?1:C[n]<C[e]?-1:0},L=function(n,e){return j[n]>j[e]?1:j[n]<j[e]?-1:0},T=function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};if(g[e])n.nextTick(function(){o(null,g[e])});else{var t=void 0;t="component---"===e.slice(0,12)?m.components[e]:"layout---"===e.slice(0,9)?m.layouts[e]:m.json[e],t(function(n,t){g[e]=t,R.push({resource:e,succeeded:!n}),P[e]||(P[e]=n),R=R.slice(-E),o(n,t)})}},S=function(e,o){h[e]?n.nextTick(function(){o(null,h[e])}):P[e]?n.nextTick(function(){o(P[e])}):T(e,function(n,t){if(n)o(n);else{var r=N(t());h[e]=r,o(n,r)}})},A=function(){var n=navigator.onLine;if("boolean"==typeof n)return n;var e=R.find(function(n){return n.succeeded});return!!e},D=function(n,e){console.log(e),_[n]||(_[n]=e),A()&&window.location.pathname.replace(/\/$/g,"")!==n.replace(/\/$/g,"")&&(window.location.pathname=n)},M=1,U={empty:function(){k=[],j={},C={},x=[],y=[],b=""},addPagesArray:function(n){y=n,p=(0,a.default)(n,b)},addDevRequires:function(n){f=n},addProdRequires:function(n){m=n},dequeue:function(){return k.pop()},enqueue:function(n){var e=(0,l.default)(n,b);if(!y.some(function(n){return n.path===e}))return!1;var o=1/M;M+=1,j[e]?j[e]+=1:j[e]=1,U.has(e)||k.unshift(e),k.sort(L);var t=p(e);return t.jsonName&&(C[t.jsonName]?C[t.jsonName]+=1+o:C[t.jsonName]=1+o,x.indexOf(t.jsonName)!==-1||g[t.jsonName]||x.unshift(t.jsonName)),t.componentChunkName&&(C[t.componentChunkName]?C[t.componentChunkName]+=1+o:C[t.componentChunkName]=1+o,x.indexOf(t.componentChunkName)!==-1||g[t.jsonName]||x.unshift(t.componentChunkName)),x.sort(O),w.onNewResourcesAdded(),!0},getResources:function(){return{resourcesArray:x,resourcesCount:C}},getPages:function(){return{pathArray:k,pathCount:j}},getPage:function(n){return p(n)},has:function(n){return k.some(function(e){return e===n})},getResourcesForPathname:function(e){var o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){};v&&navigator&&navigator.serviceWorker&&navigator.serviceWorker.controller&&"activated"===navigator.serviceWorker.controller.state&&(p(e)||navigator.serviceWorker.getRegistrations().then(function(n){if(n.length){for(var e=n,o=Array.isArray(e),t=0,e=o?e:e[Symbol.iterator]();;){var r;if(o){if(t>=e.length)break;r=e[t++]}else{if(t=e.next(),t.done)break;r=t.value}var u=r;u.unregister()}window.location.reload()}})),v=!1;if(_[e])return D(e,'Previously detected load failure for "'+e+'"'),o();var t=p(e);if(!t)return D(e,"A page wasn't found for \""+e+'"'),o();if(e=t.path,d[e])return n.nextTick(function(){o(d[e]),i.default.emit("onPostLoadPageResources",{page:t,pageResources:d[e]})}),d[e];i.default.emit("onPreLoadPageResources",{path:e});var r=void 0,u=void 0,a=void 0,s=function(){if(r&&u&&(!t.layoutComponentChunkName||a)){d[e]={component:r,json:u,layout:a,page:t};var n={component:r,json:u,layout:a,page:t};o(n),i.default.emit("onPostLoadPageResources",{page:t,pageResources:n})}};return S(t.componentChunkName,function(n,e){n&&D(t.path,"Loading the component for "+t.path+" failed"),r=e,s()}),S(t.jsonName,function(n,e){n&&D(t.path,"Loading the JSON for "+t.path+" failed"),u=e,s()}),void(t.layoutComponentChunkName&&S(t.layout,function(n,e){n&&D(t.path,"Loading the Layout for "+t.path+" failed"),a=e,s()}))},peek:function(n){return k.slice(-1)[0]},length:function(){return k.length},indexOf:function(n){return k.length-k.indexOf(n)-1}};e.publicLoader={getResourcesForPathname:U.getResourcesForPathname};e.default=U}).call(e,o(52))},546:function(n,e){n.exports=[{componentChunkName:"component---node-modules-gatsby-plugin-offline-app-shell-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"offline-plugin-app-shell-fallback.json",path:"/offline-plugin-app-shell-fallback/"},{componentChunkName:"component---src-templates-bkmk-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"bkmks-15.json",path:"/bkmks/15/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"writing-5-basics-for-beginners.json",path:"/writing/5-basics-for-beginners/"},{componentChunkName:"component---src-templates-bkmk-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"bkmks-14.json",path:"/bkmks/14/"},{componentChunkName:"component---src-templates-bkmk-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"bkmks-13.json",path:"/bkmks/13/"},{componentChunkName:"component---src-templates-bkmk-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"bkmks-12.json",path:"/bkmks/12/"},{componentChunkName:"component---src-templates-bkmk-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"bkmks-11.json",path:"/bkmks/11/"},{componentChunkName:"component---src-templates-bkmk-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"bkmks-10.json",path:"/bkmks/10/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"writing-december-daily-design.json",path:"/writing/december-daily-design/"},{componentChunkName:"component---src-templates-bkmk-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"bkmks-9.json",path:"/bkmks/9/"},{componentChunkName:"component---src-templates-bkmk-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"bkmks-8.json",path:"/bkmks/8/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"writing-weekend-build-water-tracker-ui.json",path:"/writing/weekend-build-water-tracker-ui/"},{componentChunkName:"component---src-templates-bkmk-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"bkmks-7.json",path:"/bkmks/7/"},{componentChunkName:"component---src-templates-bkmk-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"bkmks-6.json",path:"/bkmks/6/"},{componentChunkName:"component---src-templates-bkmk-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"bkmks-5.json",path:"/bkmks/5/"},{componentChunkName:"component---src-templates-bkmk-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"bkmks-4.json",path:"/bkmks/4/"},{componentChunkName:"component---src-templates-bkmk-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"bkmks-3.json",path:"/bkmks/3/"},{componentChunkName:"component---src-templates-bkmk-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"bkmks-2.json",path:"/bkmks/2/"},{componentChunkName:"component---src-templates-bkmk-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"bkmks-1.json",path:"/bkmks/1/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"writing-web-people.json",path:"/writing/web-people/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"writing-the-fast-app.json",path:"/writing/the-fast-app/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"writing-personal-training.json",path:"/writing/personal-training/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"writing-athleanx.json",path:"/writing/athleanx/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"writing-coffee-and-success.json",path:"/writing/coffee-and-success/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"writing-world-cup-fitness-inspiration.json",path:"/writing/world-cup-fitness-inspiration/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"writing-design-your-life.json",path:"/writing/design-your-life/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"writing-yourfirststeps-part-3.json",path:"/writing/yourfirststeps-part3/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"writing-yourfirststeps-part-2.json",path:"/writing/yourfirststeps-part2/"},{componentChunkName:"component---src-templates-blog-post-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"writing-yourfirststeps-part-1.json",path:"/writing/yourfirststeps-part1/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404.json",path:"/404/"},{componentChunkName:"component---src-pages-about-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"about.json",path:"/about/"},{componentChunkName:"component---src-pages-bkmks-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"bkmks.json",path:"/bkmks/"},{componentChunkName:"component---src-pages-creating-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"creating.json",path:"/creating/"},{componentChunkName:"component---src-pages-index-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"index.json",path:"/"},{componentChunkName:"component---src-pages-listening-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"listening.json",path:"/listening/"},{componentChunkName:"component---src-pages-listening-covers-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"listening-covers.json",path:"/listeningCovers/"},{componentChunkName:"component---src-pages-reading-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"reading.json",path:"/reading/"},{componentChunkName:"component---src-pages-teaching-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"teaching.json",path:"/teaching/"},{componentChunkName:"component---src-pages-training-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"training.json",path:"/training/"},{componentChunkName:"component---src-pages-watching-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"watching.json",path:"/watching/"},{componentChunkName:"component---src-pages-writing-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"writing.json",path:"/writing/"},{componentChunkName:"component---src-pages-404-js",layout:"layout---index",layoutComponentChunkName:"component---src-layouts-index-js",jsonName:"404-html.json",path:"/404.html"}]},312:function(n,e){"use strict";n.exports=function(n){var e=n.getNextQueuedResources,o=n.createResourceDownload,t=[],r=[],u=function(){var n=e();n&&(r.push(n),o(n))},a=function(n){switch(n.type){case"RESOURCE_FINISHED":r=r.filter(function(e){return e!==n.payload});break;case"ON_PRE_LOAD_PAGE_RESOURCES":t.push(n.payload.path);break;case"ON_POST_LOAD_PAGE_RESOURCES":t=t.filter(function(e){return e!==n.payload.page.path});break;case"ON_NEW_RESOURCES_ADDED":}setTimeout(function(){0===r.length&&0===t.length&&u()},0)};return{onResourcedFinished:function(n){a({type:"RESOURCE_FINISHED",payload:n})},onPreLoadPageResources:function(n){a({type:"ON_PRE_LOAD_PAGE_RESOURCES",payload:n})},onPostLoadPageResources:function(n){a({type:"ON_POST_LOAD_PAGE_RESOURCES",payload:n})},onNewResourcesAdded:function(){a({type:"ON_NEW_RESOURCES_ADDED"})},getState:function(){return{pagesLoading:t,resourcesDownloading:r}},empty:function(){t=[],r=[]}}}},0:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=Object.assign||function(n){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(n[t]=o[t])}return n},u=o(112),a=o(2),s=t(a),i=o(275),c=t(i),l=o(111),p=o(496),f=o(416),m=t(f),d=o(22),g=o(310),h=t(g),y=o(91),k=t(y),j=o(546),b=t(j),x=o(547),C=t(x),N=o(308),w=t(N),v=o(307),R=t(v),_=o(243),P=t(_);o(340),window.___history=h.default,window.___emitter=k.default,P.default.addPagesArray(b.default),P.default.addProdRequires(R.default),window.asyncRequires=R.default,window.___loader=P.default,window.matchPath=l.matchPath;var E=C.default.reduce(function(n,e){return n[e.fromPath]=e,n},{}),O=function(n){var e=E[n];return null!=e&&(h.default.replace(e.toPath),!0)};O(window.location.pathname),(0,u.apiRunnerAsync)("onClientEntry").then(function(){function n(n){window.___history&&i!==!1||(window.___history=n,i=!0,n.listen(function(n,e){O(n.pathname)||setTimeout(function(){(0,u.apiRunner)("onRouteUpdate",{location:n,action:e})},0)}))}function e(n,e){var o=e.location.pathname,t=(0,u.apiRunner)("shouldUpdateScroll",{prevRouterProps:n,pathname:o});if(t.length>0)return t[0];if(n){var r=n.location.pathname;if(r===o)return!1}return!0}(0,u.apiRunner)("registerServiceWorker").length>0&&o(313);var t=function(n,e){function o(n){n.page.path===P.default.getPage(r).path&&(k.default.off("onPostLoadPageResources",o),clearTimeout(i),s(t))}var t=(0,d.createLocation)(n,null,null,h.default.location),r=t.pathname,u=E[r];u&&(r=u.toPath);var a=window.location;if(a.pathname!==t.pathname||a.search!==t.search||a.hash!==t.hash){var s=e?window.___history.replace:window.___history.push,i=setTimeout(function(){k.default.off("onPostLoadPageResources",o),k.default.emit("onDelayedLoadPageResources",{pathname:r}),s(t)},1e3);P.default.getResourcesForPathname(r)?(clearTimeout(i),s(t)):k.default.on("onPostLoadPageResources",o)}};window.___push=function(n){return t(n,!1)},window.___replace=function(n){return t(n,!0)},window.___navigateTo=window.___push,(0,u.apiRunner)("onRouteUpdate",{location:h.default.location,action:h.default.action});var i=!1,f=(0,u.apiRunner)("replaceRouterComponent",{history:h.default})[0],g=function(n){var e=n.children;return s.default.createElement(l.Router,{history:h.default},e)},y=(0,l.withRouter)(w.default);P.default.getResourcesForPathname(window.location.pathname,function(){var o=function(){return(0,a.createElement)(f?f:g,null,(0,a.createElement)(p.ScrollContext,{shouldUpdateScroll:e},(0,a.createElement)(y,{layout:!0,children:function(e){return(0,a.createElement)(l.Route,{render:function(o){n(o.history);var t=e?e:o;return P.default.getPage(t.location.pathname)?(0,a.createElement)(w.default,r({page:!0},t)):(0,a.createElement)(w.default,{page:!0,location:{pathname:"/404.html"}})}})}})))},t=(0,u.apiRunner)("wrapRootComponent",{Root:o},o)[0],i=(0,u.apiRunner)("replaceHydrateFunction",void 0,c.default.render)[0];(0,m.default)(function(){return i(s.default.createElement(t,null),"undefined"!=typeof window?document.getElementById("___gatsby"):void 0,function(){(0,u.apiRunner)("onInitialClientRender")})})})})},547:function(n,e){n.exports=[]},313:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(91),u=t(r),a="/";"serviceWorker"in navigator&&navigator.serviceWorker.register(a+"sw.js").then(function(n){n.addEventListener("updatefound",function(){var e=n.installing;console.log("installingWorker",e),e.addEventListener("statechange",function(){switch(e.state){case"installed":navigator.serviceWorker.controller?window.location.reload():(console.log("Content is now available offline!"),u.default.emit("sw:installed"));break;case"redundant":console.error("The installing service worker became redundant.")}})})}).catch(function(n){console.error("Error during service worker registration:",n)})},244:function(n,e){"use strict";e.__esModule=!0,e.default=function(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return n.substr(0,e.length)===e?n.slice(e.length):n;
},n.exports=e.default},60:function(n,e){function o(n){return n&&n.__esModule?n:{default:n}}n.exports=o},416:function(n,e,o){!function(e,o){n.exports=o()}("domready",function(){var n,e=[],o=document,t=o.documentElement.doScroll,r="DOMContentLoaded",u=(t?/^loaded|^c/:/^loaded|^i|^c/).test(o.readyState);return u||o.addEventListener(r,n=function(){for(o.removeEventListener(r,n),u=1;n=e.shift();)n()}),function(n){u?setTimeout(n,0):e.push(n)}})},1:function(n,e,o){"use strict";function t(){function n(n){var e=t.lastChild;return"SCRIPT"!==e.tagName?void("undefined"!=typeof console&&console.warn&&console.warn("Script is not a script",e)):void(e.onload=e.onerror=function(){e.onload=e.onerror=null,setTimeout(n,0)})}var e,t=document.querySelector("head"),r=o.e,u=o.s;o.e=function(t,a){var s=!1,i=!0,c=function(n){a&&(a(o,n),a=null)};return!u&&e&&e[t]?void c(!0):(r(t,function(){s||(s=!0,i?setTimeout(function(){c()}):c())}),void(s||(i=!1,n(function(){s||(s=!0,u?u[t]=void 0:(e||(e={}),e[t]=!0),c(!0))}))))}}t()},488:function(n,e,o){"use strict";e.onRouteUpdate=function(n){var e=n.location;if("function"==typeof ga){if(e&&"undefined"!=typeof window.excludeGAPaths&&window.excludeGAPaths.some(function(n){return n.test(e.pathname)}))return;window.ga("set","page",e?e.pathname+e.search+e.hash:void 0),window.ga("send","pageview")}}},429:function(n,e,o){o(1),n.exports=function(n){return o.e(99219681209289,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(489)})})}},490:function(n,e){"use strict";e.registerServiceWorker=function(){return!0}},491:function(n,e,o){n.exports=o(9)},492:function(n,e,o){"use strict";function t(n){return n&&n.__esModule?n:{default:n}}var r=o(491);t(r);e.onClientEntry=function(){}},548:function(n,e){function o(n){return n=n||Object.create(null),{on:function(e,o){(n[e]||(n[e]=[])).push(o)},off:function(e,o){n[e]&&n[e].splice(n[e].indexOf(o)>>>0,1)},emit:function(e,o){(n[e]||[]).slice().map(function(n){n(o)}),(n["*"]||[]).slice().map(function(n){n(e,o)})}}}n.exports=o},52:function(n,e){function o(){throw new Error("setTimeout has not been defined")}function t(){throw new Error("clearTimeout has not been defined")}function r(n){if(l===setTimeout)return setTimeout(n,0);if((l===o||!l)&&setTimeout)return l=setTimeout,setTimeout(n,0);try{return l(n,0)}catch(e){try{return l.call(null,n,0)}catch(e){return l.call(this,n,0)}}}function u(n){if(p===clearTimeout)return clearTimeout(n);if((p===t||!p)&&clearTimeout)return p=clearTimeout,clearTimeout(n);try{return p(n)}catch(e){try{return p.call(null,n)}catch(e){return p.call(this,n)}}}function a(){g&&m&&(g=!1,m.length?d=m.concat(d):h=-1,d.length&&s())}function s(){if(!g){var n=r(a);g=!0;for(var e=d.length;e;){for(m=d,d=[];++h<e;)m&&m[h].run();h=-1,e=d.length}m=null,g=!1,u(n)}}function i(n,e){this.fun=n,this.array=e}function c(){}var l,p,f=n.exports={};!function(){try{l="function"==typeof setTimeout?setTimeout:o}catch(n){l=o}try{p="function"==typeof clearTimeout?clearTimeout:t}catch(n){p=t}}();var m,d=[],g=!1,h=-1;f.nextTick=function(n){var e=new Array(arguments.length-1);if(arguments.length>1)for(var o=1;o<arguments.length;o++)e[o-1]=arguments[o];d.push(new i(n,e)),1!==d.length||g||r(s)},i.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(n){return[]},f.binding=function(n){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(n){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},653:function(n,e){"use strict";function o(n,e){for(var o in n)if(!(o in e))return!0;for(var t in e)if(n[t]!==e[t])return!0;return!1}e.__esModule=!0,e.default=function(n,e,t){return o(n.props,e)||o(n.state,t)},n.exports=e.default},431:function(n,e,o){o(1),n.exports=function(n){return o.e(0x9427c64ab85d,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(317)})})}},432:function(n,e,o){o(1),n.exports=function(n){return o.e(0xefeaa6d1881d,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(318)})})}},433:function(n,e,o){o(1),n.exports=function(n){return o.e(0xa890432d6a93,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(319)})})}},434:function(n,e,o){o(1),n.exports=function(n){return o.e(0xf8736f258178,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(320)})})}},435:function(n,e,o){o(1),n.exports=function(n){return o.e(35783957827783,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(321)})})}},437:function(n,e,o){o(1),n.exports=function(n){return o.e(89693379388046,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(322)})})}},436:function(n,e,o){o(1),n.exports=function(n){return o.e(9711824714589,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(323)})})}},438:function(n,e,o){o(1),n.exports=function(n){return o.e(47301250561866,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(324)})})}},439:function(n,e,o){o(1),n.exports=function(n){return o.e(72535408073075,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(325)})})}},440:function(n,e,o){o(1),n.exports=function(n){return o.e(1520471504850,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(326)})})}},441:function(n,e,o){o(1),n.exports=function(n){return o.e(0xacb9ad920ce1,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(327)})})}},442:function(n,e,o){o(1),n.exports=function(n){return o.e(0xa27c644eea74,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(328)})})}},443:function(n,e,o){o(1),n.exports=function(n){return o.e(0xe3b4b433a934,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(329)})})}},444:function(n,e,o){o(1),n.exports=function(n){return o.e(0x620f737b6699,function(e,t){t?(console.log("bundle loading error",t),n(!0)):n(null,function(){return o(330)})})}}});
//# sourceMappingURL=app-80352d563ca458e4b915.js.map