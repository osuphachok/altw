(function(b){var a=(function(){var o={bcClass:"sf-breadcrumb",menuClass:"sf-js-enabled",anchorClass:"sf-with-ul",menuArrowClass:"sf-arrows"},e=(function(){var c=/iPhone|iPad|iPod/i.test(navigator.userAgent);if(c){b(window).load(function(){b("body").children().on("click",b.noop)})}return c})(),j=(function(){var c=document.documentElement.style;return("behavior" in c&&"fill" in c&&/iemobile/i.test(navigator.userAgent))})(),l=function(r,s){var c=o.menuClass;if(s.cssArrows){c+=" "+o.menuArrowClass}r.toggleClass(c)},q=function(c,r){return c.find("li."+r.pathClass).slice(0,r.pathLevels).addClass(r.hoverClass+" "+o.bcClass).filter(function(){return(b(this).children(r.popUpSelector).hide().show().length)}).removeClass(r.pathClass)},m=function(c){c.children("a").toggleClass(o.anchorClass)},f=function(c){var r=c.css("ms-touch-action");r=(r==="pan-y")?"auto":"pan-y";c.css("ms-touch-action",r)},i=function(s,t){var c="li:has("+t.popUpSelector+")";if(b.fn.hoverIntent&&!t.disableHI){s.hoverIntent(k,g,c)}else{s.on("mouseenter.superfish",c,k).on("mouseleave.superfish",c,g)}var r="MSPointerDown.superfish";if(!e){r+=" touchend.superfish"}if(j){r+=" mousedown.superfish"}s.on("focusin.superfish","li",k).on("focusout.superfish","li",g).on(r,"a",t,h)},h=function(s){var r=b(this),c=r.siblings(s.data.popUpSelector);if(c.length>0&&c.is(":hidden")){r.one("click.superfish",false);if(s.type==="MSPointerDown"){r.trigger("focus")}else{b.proxy(k,r.parent("li"))()}}},k=function(){var c=b(this),r=n(c);clearTimeout(r.sfTimer);c.siblings().superfish("hide").end().superfish("show")},g=function(){var c=b(this),r=n(c);if(e){b.proxy(p,c,r)()}else{clearTimeout(r.sfTimer);r.sfTimer=setTimeout(b.proxy(p,c,r),r.delay)}},p=function(c){c.retainPath=(b.inArray(this[0],c.$path)>-1);this.superfish("hide");if(!this.parents("."+c.hoverClass).length){c.onIdle.call(d(this));if(c.$path.length){b.proxy(k,c.$path)()}}},d=function(c){return c.closest("."+o.menuClass)},n=function(c){return d(c).data("sf-options")};return{hide:function(r){if(this.length){var u=this,v=n(u);if(!v){return this}var s=(v.retainPath===true)?v.$path:"",c=u.find("li."+v.hoverClass).add(this).not(s).removeClass(v.hoverClass).children(v.popUpSelector),t=v.speedOut;if(r){c.show();t=0}v.retainPath=false;v.onBeforeHide.call(c);c.stop(true,true).animate(v.animationOut,t,function(){var w=b(this);v.onHide.call(w)})}return this},show:function(){var s=n(this);if(!s){return this}var r=this.addClass(s.hoverClass),c=r.children(s.popUpSelector);s.onBeforeShow.call(c);c.stop(true,true).animate(s.animation,s.speed,function(){s.onShow.call(c)});return this},destroy:function(){return this.each(function(){var r=b(this),s=r.data("sf-options"),c;if(!s){return false}c=r.find(s.popUpSelector).parent("li");clearTimeout(s.sfTimer);l(r,s);m(c);f(r);r.off(".superfish").off(".hoverIntent");c.children(s.popUpSelector).attr("style",function(t,u){return u.replace(/display[^;]+;?/g,"")});s.$path.removeClass(s.hoverClass+" "+o.bcClass).addClass(s.pathClass);r.find("."+s.hoverClass).removeClass(s.hoverClass);s.onDestroy.call(r);r.removeData("sf-options")})},init:function(c){return this.each(function(){var s=b(this);if(s.data("sf-options")){return false}var t=b.extend({},b.fn.superfish.defaults,c),r=s.find(t.popUpSelector).parent("li");t.$path=q(s,t);s.data("sf-options",t);l(s,t);m(r);f(s);i(s,t);r.not("."+o.bcClass).superfish("hide",true);t.onInit.call(this)})}}})();b.fn.superfish=function(d,c){if(a[d]){return a[d].apply(this,Array.prototype.slice.call(arguments,1))}else{if(typeof d==="object"||!d){return a.init.apply(this,arguments)}else{return b.error("Method "+d+" does not exist on jQuery.fn.superfish")}}};b.fn.superfish.defaults={popUpSelector:"ul,.sf-mega",hoverClass:"sfHover",pathClass:"overrideThisToUse",pathLevels:1,delay:800,animation:{opacity:"show"},animationOut:{opacity:"hide"},speed:"normal",speedOut:"fast",cssArrows:true,disableHI:false,onInit:b.noop,onBeforeShow:b.noop,onShow:b.noop,onBeforeHide:b.noop,onHide:b.noop,onIdle:b.noop,onDestroy:b.noop};b.fn.extend({hideSuperfishUl:a.hide,showSuperfishUl:a.show})})(jQuery);