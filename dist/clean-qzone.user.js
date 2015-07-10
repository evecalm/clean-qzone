// ==UserScript==
// @name           Clean Qzone
// @namespace      com.saiya.clean-qzone
// @description    Remove all Qzone ads, make your Qzone center clean and clear.
// @match          http://user.qzone.qq.com/*
// @include        http://user.qzone.qq.com/*
// @updateURL      https://raw.githubusercontent.com/evecalm/clean-qzone/master/dist/clean-qzone.meta.js
// @downloadURL    https://raw.githubusercontent.com/evecalm/clean-qzone/master/dist/clean-qzone.user.js
// @version        0.0.14
// ==/UserScript==
// source code: https://github.com/evecalm/clean-qzone
var adscount,debounce,doRemoveDynamicMoments,doUXOpt,getParent,injectStyle,leftSidebar,mainFeed,onKeyPress,onMScroll,pageContent,removeDynamicMoments,removeSingleMoment,rightSidebar,throttle;debounce=function(a,b,c){var d;return d=null,(isNaN(c)||0>c)&&(c=200),isNaN(b)||(b>0&&(c=b),b=void 0),function(){clearTimeout(d),d=setTimeout(function(){null!=a&&a.call(b)},c)}},throttle=function(a,b,c){var d,e;return d=!1,e=null,(isNaN(c)||0>c)&&(c=200),isNaN(b)||(b>0&&(c=+b),b=void 0),function(){var f,g;f=+new Date,d===!1&&(d=f),g=c-(f-d),clearTimeout(e),0>=g?(null!=a&&a.call(b),c=!1):e=setTimeout(function(){null!=a&&a.call(b)},g)}},getParent=function(a,b){for(;a;){if(a.classList.contains(b))return a;a=a.parentElement}},injectStyle=function(){var a,b;b="isa-qzone-style",document.getElementById(b)||(a=document.createElement("style"),a.id=b,a.setAttribute("type","text/css"),a.innerText='[data-url^="http://c.gdt.qq.com"],.gdtads_box,.ck-act,.icenter-right-ad,.fn_paipai,.mod-side-nav-recently-used,.hot-msg,.msg-channel-wrapper,.user-vip-info,.gb_ad_tearing_angle,.icon_app_new,.fn_accessLog_tips,.qz-app-flag,.icon-new-fun,.hotbar_wrap,.icon-red-dot,.sn-radio{display:none !important}.cq-fixed-sidebar{position:fixed;width:170px;top:41px}.cq-hide{display:none !important}.cq-fullwidth{-webkit-transition:width .3s linear;transition:width .3s linear;width:100% !important}.cq-fullwidth .img-box-row-wrap .img-box-row{display:inline !important}.cq-fullwidth .img-box-row-wrap .img-box-row+.img-box-row{margin-left:4px}.yosemite .background-container{background:none}.yosemite .mod-side-nav{box-shadow:0 0 1px rgba(0,0,0,0.07);background-color:#f9f9f9;border:1px solid #e9e9e9}',document.head.appendChild(a))},pageContent=document.getElementById("pageContent"),leftSidebar=document.querySelector(".mod-side-nav-message"),rightSidebar=document.querySelector(".col-main-sidebar"),mainFeed=document.querySelector(".col-main-feed"),onMScroll=function(){var a,b;b=pageContent.getBoundingClientRect().top,leftSidebar.classList[41>=b?"add":"remove"]("cq-fixed-sidebar"),a=-1750>=b?"add":"remove",rightSidebar.classList[a]("cq-hide"),mainFeed.classList[a]("cq-fullwidth")},onKeyPress=function(a){var b,c;a.metaKey&&13===a.keyCode&&(c=getParent(a.target,"qz-poster-inner"))&&(b=c.querySelector(".btn-post"),null!=b&&b.click())},doUXOpt=function(){var a;a=throttle(onMScroll),a(),window.addEventListener("scroll",a),~navigator.userAgent.indexOf("OS X")&&pageContent.addEventListener("keydown",function(a){a.target.classList.contains("textarea")&&onKeyPress(a)},!0)},adscount=0,removeDynamicMoments=function(){var a,b;b=[".votestar",".buy-info",'[href="http://user.qzone.qq.com/20050606"]'],a=document.querySelectorAll(b.join(",")),Array.prototype.forEach.call(a,removeSingleMoment)},removeSingleMoment=function(a){(a=getParent(a,"f-single"))&&(console.log("remove ads(NO."+ ++adscount+"): "+a.innerText),a.parentElement&&a.parentElement.removeChild(a),a=null)},doRemoveDynamicMoments=function(){var a;a=debounce(removeDynamicMoments),a(),document.getElementById("main_feed_container").addEventListener("DOMSubtreeModified",a)},function(){document.querySelector(".mod-side-nav-message")&&(injectStyle(),doRemoveDynamicMoments(),doUXOpt())}();