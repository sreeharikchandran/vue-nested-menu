!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.VueNestedMenu=t()}(this,function(){var e={title:"首頁",children:[{title:"Today's Deals",link:"/",children:[]},{title:"Your Recommendations",link:"/",children:[]},{title:"Shop By Department",children:[{title:"Amazon Music",children:[{title:"Amazon Music Unlimited",link:"/",children:[]},{title:"Prime Music",link:"/",children:[]},{title:"CDs and Vinyl",link:"/",children:[]}]},{title:"Prime Vedios",children:[{title:"All Vedio",link:"/",children:[]},{title:"Included with Prime",link:"/",children:[]},{title:"Rent or Buy",link:"/",children:[]}]},{title:"Treasure Truck",link:"/",children:[]},{title:"Amazon Restaurants",children:[{title:"Thai",link:"/",children:[]},{title:"Chinese",link:"/",children:[]},{title:"American",link:"/",children:[]},{title:"Indian",link:"/",children:[]},{title:"Popular Restaurants",children:[{title:"Popular Restaurants 1",link:"/",children:[]},{title:"Popular Restaurants 2",link:"/",children:[]}]}]}]}]},t={data:function(){return{style_wrapperStyle:{},style_wrapperActiveStyle:{},style_panelStyle:{},style_transitionStyle:{}}},mounted:function(){var e=this.panelWidth,t=this.menuOpenSpeed,n=this.menuSwitchSpeed,i="."+t/10+"s",a="."+n/10+"s",s={width:e+"px",position:"absolute",top:0,left:"-"+e+"px",zIndex:99999,height:"100vh",overflow:"hidden",transition:"left "+i},l={left:0},o={position:"absolute",top:0,zIndex:99999,height:"100vh",width:e+"px",backgroundColor:"#fff"},r={transition:"left "+a};this.style_wrapperStyle=s,this.style_wrapperActiveStyle=l,this.style_panelStyle=o,this.style_transitionStyle=r}},n={data:function(){return{panel_prevPositionStyle:{},panel_stagingPositionStyle:{},panel_nextPositionStyle:{}}},mounted:function(){this.panel_prevPositionStyle=this.$_panelControl_positionSet.prev,this.panel_stagingPositionStyle=this.$_panelControl_positionSet.staging,this.panel_nextPositionStyle=this.$_panelControl_positionSet.next},computed:{$_panelControl_positionSet:function(){return{staging:{left:0},prev:{left:"-"+this.panelWidth+"px"},next:{left:this.panelWidth+"px"}}}},methods:{panel_slideNext:function(){this.panel_stagingPositionStyle=this.$_panelControl_positionSet.prev,this.panel_nextPositionStyle=this.$_panelControl_positionSet.staging},panel_slideBack:function(){this.panel_stagingPositionStyle=this.$_panelControl_positionSet.next,this.panel_prevPositionStyle=this.$_panelControl_positionSet.staging},panel_homingPosition:function(){this.panel_prevPositionStyle=this.$_panelControl_positionSet.prev,this.panel_nextPositionStyle=this.$_panelControl_positionSet.next,this.panel_stagingPositionStyle=this.$_panelControl_positionSet.staging}}},i={data:function(){return{content_prevItem:{},content_currentItem:{},content_nextItem:{},content_parentStack:[]}},methods:{content_setNextItem:function(e){this.content_nextItem=e},content_setPrevItem:function(){this.content_prevItem=this.content_parentStack[this.content_parentStack.length-1]},content_homingItemAfterNext:function(){this.content_prevItem=this.content_currentItem,this.content_currentItem=this.content_nextItem,this.content_nextItem={}},content_homingItemAfterBack:function(){this.content_parentStack.pop(),this.content_currentItem=this.content_prevItem,this.content_nextItem={}},content_pushCurrentToParentStack:function(e){var t=this.content_currentItem;this.content_parentStack.push(t)}}};!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=".svg[data-v-674f72f4] { width: 100%; height: 100%; } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}}();var a={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{staticClass:"svg",staticStyle:{"enable-background":"new 0 0 492.004 492.004"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 492.004 492.004","xml:space":"preserve"}},[n("g",[n("g",[n("path",{attrs:{d:"M382.678,226.804L163.73,7.86C158.666,2.792,151.906,0,144.698,0s-13.968,2.792-19.032,7.86l-16.124,16.12 c-10.492,10.504-10.492,27.576,0,38.064L293.398,245.9l-184.06,184.06c-5.064,5.068-7.86,11.824-7.86,19.028 c0,7.212,2.796,13.968,7.86,19.04l16.124,16.116c5.068,5.068,11.824,7.86,19.032,7.86s13.968-2.792,19.032-7.86L382.678,265 c5.076-5.084,7.864-11.872,7.848-19.088C390.542,238.668,387.754,231.884,382.678,226.804z"}})])])])},staticRenderFns:[],_scopeId:"data-v-674f72f4"};!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=".svg[data-v-0671583d] { width: 100%; height: 100%; } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}}();var s={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{staticClass:"svg",staticStyle:{"enable-background":"new 0 0 492 492"},attrs:{version:"1.1",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 492 492","xml:space":"preserve"}},[n("g",[n("g",[n("path",{attrs:{d:"M198.608,246.104L382.664,62.04c5.068-5.056,7.856-11.816,7.856-19.024c0-7.212-2.788-13.968-7.856-19.032l-16.128-16.12 C361.476,2.792,354.712,0,347.504,0s-13.964,2.792-19.028,7.864L109.328,227.008c-5.084,5.08-7.868,11.868-7.848,19.084 c-0.02,7.248,2.76,14.028,7.848,19.112l218.944,218.932c5.064,5.072,11.82,7.864,19.032,7.864c7.208,0,13.964-2.792,19.032-7.864 l16.124-16.12c10.492-10.492,10.492-27.572,0-38.06L198.608,246.104z"}})])])])},staticRenderFns:[],_scopeId:"data-v-0671583d"};!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=".svg[data-v-d9c658f4] { width: 100%; height: 100%; } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}}();var l={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("svg",{staticStyle:{"enable-background":"new 0 0 53 53"},attrs:{version:"1.1",id:"Capa_1",xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 53 53","xml:space":"preserve"}},[n("g",[n("g",[n("path",{attrs:{d:"M2,13.5h49c1.104,0,2-0.896,2-2s-0.896-2-2-2H2c-1.104,0-2,0.896-2,2S0.896,13.5,2,13.5z"}}),e._v(" "),n("path",{attrs:{d:"M2,28.5h49c1.104,0,2-0.896,2-2s-0.896-2-2-2H2c-1.104,0-2,0.896-2,2S0.896,28.5,2,28.5z"}}),e._v(" "),n("path",{attrs:{d:"M2,43.5h49c1.104,0,2-0.896,2-2s-0.896-2-2-2H2c-1.104,0-2,0.896-2,2S0.896,43.5,2,43.5z"}})])])])},staticRenderFns:[],_scopeId:"data-v-d9c658f4"};!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=".Menu__burger[data-v-510beae4] { width: 30px; height: 30px; cursor: pointer; } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}}();var o={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Menu__burger",on:{click:e.handleBurgerClicked}},[n("MenuIcon")],1)},staticRenderFns:[],_scopeId:"data-v-510beae4",components:{MenuIcon:l},props:{handleBurgerClicked:{type:Function,required:!0}}};!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n=".vmenu-shadow[data-v-e1b9ebe2] { position: fixed; top: 0; left: 0; width: 100%; height: 100%; background-color: #333; opacity: 0.5; z-index: 99997; } .vmenu-fade-enter-active[data-v-e1b9ebe2], .vmenu-fade-leave-active[data-v-e1b9ebe2] { transition: opacity .5s; } .vmenu-fade-enter[data-v-e1b9ebe2], .vmenu-fade-leave-to[data-v-e1b9ebe2] { opacity: 0; } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}}();var r={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"vmenu-fade"}},[e.isActive?n("div",{staticClass:"vmenu-shadow",on:{click:e.handleShadowClicked}}):e._e()])},staticRenderFns:[],_scopeId:"data-v-e1b9ebe2",props:{isActive:{type:Boolean,default:!1},handleShadowClicked:{type:Function,default:function(){}}}};!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style"),n="ul[data-v-2a060565], li[data-v-2a060565] { padding: 0; margin: 0; } .Menu__header[data-v-2a060565] { display: flex; align-items: center; padding-left: 35px; height: 50px; color: #fff; font-size: 16px; background-color: #232f3e; cursor: pointer; } .Menu__header .arrow[data-v-2a060565] { padding-top: 2px; fill: #fff; margin-right: 10px; width: 10px; height: 100%; display: flex; align-items: center; } .Menu__list[data-v-2a060565] { list-style: none; padding-bottom: 2px; } .Menu__list .separator[data-v-2a060565] { border-bottom: 1px solid #d5dbdb; padding: 2px 0 0 0; margin: 0; } .Menu__item[data-v-2a060565] { color: #4a4a4a; padding-left: 35px; height: 45px; display: flex; align-items: center; cursor: pointer; } .Menu__item a[data-v-2a060565] { color: #4a4a4a; text-decoration: none; } .Menu__item .arrow[data-v-2a060565] { padding-top: 2px; padding-left: 15px; display: flex; align-items: center; width: 10px; height: 100%; } ";t.type="text/css",t.styleSheet?t.styleSheet.cssText=n:t.appendChild(document.createTextNode(n)),e.appendChild(t)}}();var c={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"MenuPanel"},[n("div",{staticClass:"Menu__panel",style:[e.functionalityStyle,e.positionStyle,e.isTranslating?e.transitionStyle:{}]},[e.list.name?n("div",{staticClass:"Menu__header",on:{click:e.handleHeaderClicked}},[n("span",{directives:[{name:"show",rawName:"v-show",value:e.showHeaderArrow,expression:"showHeaderArrow"}],staticClass:"arrow"},[n("LeftArrowIcon")],1),e._v(" "+e._s(e.list.name)+" ")]):e._e(),e._v(" "),n("ul",{staticClass:"Menu__list"},e._l(e.list.children,function(t){return n("li",{staticClass:"Menu__item",on:{click:function(n){e.handleItemClicked(t)}}},[t.children.length>0?[n("div",{staticClass:"text"},[e._v(e._s(t.name))]),e._v(" "),n("span",{staticClass:"arrow"},[n("RightArrowIcon")],1)]:n("a",{attrs:{href:t.link}},[n("div",{staticClass:"text"},[e._v(e._s(t.name))])])],2)}))])])},staticRenderFns:[],_scopeId:"data-v-2a060565",components:{RightArrowIcon:a,LeftArrowIcon:s},props:{list:{type:Object,required:!0},positionStyle:{type:Object,required:!0},showHeaderArrow:{type:Boolean,default:!1},isTranslating:{type:Boolean,default:!1},handleHeaderClicked:{type:Function,default:function(){}},handleItemClicked:{type:Function,default:function(){}},functionalityStyle:{type:Object,required:!0},transitionStyle:{type:Object,required:!0}}};!function(){if("undefined"!=typeof document){var e=document.head||document.getElementsByTagName("head")[0],t=document.createElement("style");t.type="text/css",t.styleSheet?t.styleSheet.cssText="":t.appendChild(document.createTextNode("")),e.appendChild(t)}}();var d={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"Menu"},[n("MenuBurger",{attrs:{handleBurgerClicked:e.clickBurger}}),e._v(" "),n("MenuShadow",{attrs:{isActive:e.isActive,handleShadowClicked:e.clickShadow}}),e._v(" "),n("div",{staticClass:"Menu__panel-wrapper",class:{isActive:e.isActive},style:[e.style_wrapperStyle,e.isActive?e.style_wrapperActiveStyle:{}]},[n("MenuPanel",{attrs:{list:e.content_prevItem,functionalityStyle:e.style_panelStyle,positionStyle:e.panel_prevPositionStyle,isTranslating:e.isTranslating,transitionStyle:e.style_transitionStyle,showHeaderArrow:e.prevItemHasParent}}),e._v(" "),n("MenuPanel",{attrs:{list:e.content_currentItem,functionalityStyle:e.style_panelStyle,positionStyle:e.panel_stagingPositionStyle,isTranslating:e.isTranslating,transitionStyle:e.style_transitionStyle,showHeaderArrow:e.currentItemHasParent,handleHeaderClicked:e.clickPrevItem,handleItemClicked:e.clickNextItem}}),e._v(" "),n("MenuPanel",{attrs:{list:e.content_nextItem,functionalityStyle:e.style_panelStyle,positionStyle:e.panel_nextPositionStyle,isTranslating:e.isTranslating,transitionStyle:e.style_transitionStyle,showHeaderArrow:!0}})],1)],1)},staticRenderFns:[],mixins:[t,n,i],components:{RightArrowIcon:a,LeftArrowIcon:s,MenuBurger:o,MenuShadow:r,MenuPanel:c},props:{source:{type:Object,default:function(){return e}},panelWidth:{type:Number,default:300},menuOpenSpeed:{type:Number,default:350},menuSwitchSpeed:{type:Number,default:300}},data:function(){return{isActive:!1,isTranslating:!1}},mounted:function(){this.content_currentItem=this.source},computed:{currentItemHasParent:function(){return this.content_parentStack.length>=1},prevItemHasParent:function(){return this.content_parentStack.length>=2}},watch:{list:function(){this.content_currentItem=this.source}},methods:{clickBurger:function(){this.isActive=!this.isActive},clickShadow:function(){this.isActive=!1},clickNextItem:function(e){this.isTranslating||e.children.length<=0||this.slideToNext(e)},clickPrevItem:function(){!this.isTranslating&&this.currentItemHasParent&&this.slideToPrev()},slideToNext:function(e){var t=this;this.content_setNextItem(e),this.setTranslating(!0),this.$nextTick(function(){t.panel_slideNext()}),this.homingAfterTranslatingNext()},slideToPrev:function(){var e=this;this.content_setPrevItem(),this.setTranslating(!0),this.$nextTick(function(){e.panel_slideBack()}),this.homingAfterTranslatingBack()},homingAfterTranslatingNext:function(){var e=this;setTimeout(function(){e.setTranslating(!1),e.content_pushCurrentToParentStack(),e.panel_homingPosition(),e.content_homingItemAfterNext()},this.menuSwitchSpeed)},homingAfterTranslatingBack:function(){var e=this;setTimeout(function(){e.setTranslating(!1),e.panel_homingPosition(),e.content_homingItemAfterBack()},this.menuSwitchSpeed)},setTranslating:function(e){this.isTranslating=e}}};return{install:function(e,t){e.component("vue-nested-menu",d)}}});
