(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"3aVm":function(t,e,n){"use strict";var r=n("ERkP"),o=n.n(r),i=n("jvFD"),s=n.n(i),a=(n("iOjB"),o.a.createElement),f=function(t){var e=t.pathname;return a("header",null,a(s.a,{href:"/"},a("a",{className:"/"===e?"is-active":""},"Home"))," ",a(s.a,{href:"/about"},a("a",{className:"/about"===e?"is-active":""},"About")))},u=o.a.createElement;e.a=function(t){var e=t.children;return u("main",null,u(f,null),e)}},AwPv:function(t,e,n){var r=n("IFjL");r(r.P+r.R,"Map",{toJSON:n("KIy9")("Map")})},EfDG:function(t,e,n){"use strict";var r=n("zCrM"),o=n("S5Zg");t.exports=n("HKkr")("Map",(function(t){return function(){return t(this,arguments.length>0?arguments[0]:void 0)}}),{get:function(t){var e=r.getEntry(o(this,"Map"),t);return e&&e.v},set:function(t,e){return r.def(o(this,"Map"),0===t?0:t,e)}},r,!0)},"F//K":function(t,e,n){n("dUHx"),n("/r3m"),n("Fk9O"),n("EfDG"),n("AwPv"),n("SZul"),n("Lwwr"),t.exports=n("rFq9").Map},JeHL:function(t,e,n){t.exports=n("F//K")},KIy9:function(t,e,n){var r=n("M25K"),o=n("qiY+");t.exports=function(t){return function(){if(r(this)!=t)throw TypeError(t+"#toJSON isn't generic");return o(this)}}},KeDb:function(t,e,n){"use strict";var r=n("E1+a"),o=n("Z05o"),i=n("OY2S"),s=n("zBsc"),a=n("wt0f"),f=n("JeHL"),u=n("lpv4"),c=n("5Tpg");e.__esModule=!0,e.default=void 0;var l,p=n("EfWO"),h=c(n("ERkP")),v=u(n("7xIC")),d=n("fvxO");function _(t){return t&&"object"===typeof t?(0,d.formatWithValidation)(t):t}var w=new f,y=window.IntersectionObserver,g={};function k(){return l||(y?l=new y((function(t){t.forEach((function(t){if(w.has(t.target)){var e=w.get(t.target);(t.isIntersecting||t.intersectionRatio>0)&&(l.unobserve(t.target),w.delete(t.target),e())}}))}),{rootMargin:"200px"}):void 0)}var m=function(t){function e(t){var n;return r(this,e),(n=i(this,s(e).call(this,t))).p=void 0,n.cleanUpListeners=function(){},n.formatUrls=function(t){var e=null,n=null,r=null;return function(o,i){if(r&&o===e&&i===n)return r;var s=t(o,i);return e=o,n=i,r=s,s}}((function(t,e){return{href:_(t),as:e?_(e):e}})),n.linkClicked=function(t){var e=t.currentTarget,r=e.nodeName,o=e.target;if("A"!==r||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var i=n.formatUrls(n.props.href,n.props.as),s=i.href,a=i.as;if(function(t){var e=(0,p.parse)(t,!1,!0),n=(0,p.parse)((0,d.getLocationOrigin)(),!1,!0);return!e.host||e.protocol===n.protocol&&e.host===n.host}(s)){var f=window.location.pathname;s=(0,p.resolve)(f,s),a=a?(0,p.resolve)(f,a):s,t.preventDefault();var u=n.props.scroll;null==u&&(u=a.indexOf("#")<0),v.default[n.props.replace?"replace":"push"](s,a,{shallow:n.props.shallow}).then((function(t){t&&u&&(window.scrollTo(0,0),document.body.focus())}))}}},n.p=!1!==t.prefetch,n}return a(e,t),o(e,[{key:"componentWillUnmount",value:function(){this.cleanUpListeners()}},{key:"getHref",value:function(){var t=window.location.pathname,e=this.formatUrls(this.props.href,this.props.as).href;return(0,p.resolve)(t,e)}},{key:"handleRef",value:function(t){var e=this,n=g[this.getHref()];this.p&&y&&t&&t.tagName&&(this.cleanUpListeners(),n||(this.cleanUpListeners=function(t,e){var n=k();return n?(n.observe(t),w.set(t,e),function(){try{n.unobserve(t)}catch(e){console.error(e)}w.delete(t)}):function(){}}(t,(function(){e.prefetch()}))))}},{key:"prefetch",value:function(){if(this.p){var t=this.getHref();v.default.prefetch(t),g[t]=!0}}},{key:"render",value:function(){var t=this,e=this.props.children,n=this.formatUrls(this.props.href,this.props.as),r=n.href,o=n.as;"string"===typeof e&&(e=h.default.createElement("a",null,e));var i=h.Children.only(e),s={ref:function(e){t.handleRef(e),i&&"object"===typeof i&&i.ref&&("function"===typeof i.ref?i.ref(e):"object"===typeof i.ref&&(i.ref.current=e))},onMouseEnter:function(e){i.props&&"function"===typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),t.prefetch()},onClick:function(e){i.props&&"function"===typeof i.props.onClick&&i.props.onClick(e),e.defaultPrevented||t.linkClicked(e)}};return!this.props.passHref&&("a"!==i.type||"href"in i.props)||(s.href=o||r),h.default.cloneElement(i,s)}}]),e}(h.Component);e.default=m},Lwwr:function(t,e,n){n("zjhQ")("Map")},RNiq:function(t,e,n){"use strict";n.r(e);var r=n("ERkP"),o=n.n(r),i=n("3aVm"),s=o.a.createElement;e.default=function(){return s(i.a,null,s("p",{className:"text-blue-500 text-4xl text-center"},"Index Page"))}},SZul:function(t,e,n){n("iaOj")("Map")},cbTx:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n("RNiq")}])},jvFD:function(t,e,n){t.exports=n("KeDb")},"qiY+":function(t,e,n){var r=n("9v8s");t.exports=function(t,e){var n=[];return r(t,!1,n.push,n,e),n}},zCrM:function(t,e,n){"use strict";var r=n("UwCj").f,o=n("yew7"),i=n("qa3O"),s=n("dWRk"),a=n("s0lH"),f=n("9v8s"),u=n("S49y"),c=n("MIMp"),l=n("Jn7W"),p=n("ObEa"),h=n("aRFn").fastKey,v=n("S5Zg"),d=p?"_s":"size",_=function(t,e){var n,r=h(e);if("F"!==r)return t._i[r];for(n=t._f;n;n=n.n)if(n.k==e)return n};t.exports={getConstructor:function(t,e,n,u){var c=t((function(t,r){a(t,c,e,"_i"),t._t=e,t._i=o(null),t._f=void 0,t._l=void 0,t[d]=0,void 0!=r&&f(r,n,t[u],t)}));return i(c.prototype,{clear:function(){for(var t=v(this,e),n=t._i,r=t._f;r;r=r.n)r.r=!0,r.p&&(r.p=r.p.n=void 0),delete n[r.i];t._f=t._l=void 0,t[d]=0},delete:function(t){var n=v(this,e),r=_(n,t);if(r){var o=r.n,i=r.p;delete n._i[r.i],r.r=!0,i&&(i.n=o),o&&(o.p=i),n._f==r&&(n._f=o),n._l==r&&(n._l=i),n[d]--}return!!r},forEach:function(t){v(this,e);for(var n,r=s(t,arguments.length>1?arguments[1]:void 0,3);n=n?n.n:this._f;)for(r(n.v,n.k,this);n&&n.r;)n=n.p},has:function(t){return!!_(v(this,e),t)}}),p&&r(c.prototype,"size",{get:function(){return v(this,e)[d]}}),c},def:function(t,e,n){var r,o,i=_(t,e);return i?i.v=n:(t._l=i={i:o=h(e,!0),k:e,v:n,p:r=t._l,n:void 0,r:!1},t._f||(t._f=i),r&&(r.n=i),t[d]++,"F"!==o&&(t._i[o]=i)),t},getEntry:_,setStrong:function(t,e,n){u(t,e,(function(t,n){this._t=v(t,e),this._k=n,this._l=void 0}),(function(){for(var t=this._k,e=this._l;e&&e.r;)e=e.p;return this._t&&(this._l=e=e?e.n:this._t._f)?c(0,"keys"==t?e.k:"values"==t?e.v:[e.k,e.v]):(this._t=void 0,c(1))}),n?"entries":"values",!n,!0),l(e)}}}},[["cbTx",1,2,0,3]]]);