(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const d of document.querySelectorAll('link[rel="modulepreload"]'))n(d);new MutationObserver(d=>{for(const u of d)if(u.type==="childList")for(const m of u.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&n(m)}).observe(document,{childList:!0,subtree:!0});function i(d){const u={};return d.integrity&&(u.integrity=d.integrity),d.referrerPolicy&&(u.referrerPolicy=d.referrerPolicy),d.crossOrigin==="use-credentials"?u.credentials="include":d.crossOrigin==="anonymous"?u.credentials="omit":u.credentials="same-origin",u}function n(d){if(d.ep)return;d.ep=!0;const u=i(d);fetch(d.href,u)}})();function M(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var R={exports:{}};(function(t){var e=Object.prototype.hasOwnProperty,i="~";function n(){}Object.create&&(n.prototype=Object.create(null),new n().__proto__||(i=!1));function d(p,o,h){this.fn=p,this.context=o,this.once=h||!1}function u(p,o,h,l,T){if(typeof h!="function")throw new TypeError("The listener must be a function");var g=new d(h,l||p,T),f=i?i+o:o;return p._events[f]?p._events[f].fn?p._events[f]=[p._events[f],g]:p._events[f].push(g):(p._events[f]=g,p._eventsCount++),p}function m(p,o){--p._eventsCount===0?p._events=new n:delete p._events[o]}function a(){this._events=new n,this._eventsCount=0}a.prototype.eventNames=function(){var o=[],h,l;if(this._eventsCount===0)return o;for(l in h=this._events)e.call(h,l)&&o.push(i?l.slice(1):l);return Object.getOwnPropertySymbols?o.concat(Object.getOwnPropertySymbols(h)):o},a.prototype.listeners=function(o){var h=i?i+o:o,l=this._events[h];if(!l)return[];if(l.fn)return[l.fn];for(var T=0,g=l.length,f=new Array(g);T<g;T++)f[T]=l[T].fn;return f},a.prototype.listenerCount=function(o){var h=i?i+o:o,l=this._events[h];return l?l.fn?1:l.length:0},a.prototype.emit=function(o,h,l,T,g,f){var O=i?i+o:o;if(!this._events[O])return!1;var r=this._events[O],_=arguments.length,P,c;if(r.fn){switch(r.once&&this.removeListener(o,r.fn,void 0,!0),_){case 1:return r.fn.call(r.context),!0;case 2:return r.fn.call(r.context,h),!0;case 3:return r.fn.call(r.context,h,l),!0;case 4:return r.fn.call(r.context,h,l,T),!0;case 5:return r.fn.call(r.context,h,l,T,g),!0;case 6:return r.fn.call(r.context,h,l,T,g,f),!0}for(c=1,P=new Array(_-1);c<_;c++)P[c-1]=arguments[c];r.fn.apply(r.context,P)}else{var S=r.length,b;for(c=0;c<S;c++)switch(r[c].once&&this.removeListener(o,r[c].fn,void 0,!0),_){case 1:r[c].fn.call(r[c].context);break;case 2:r[c].fn.call(r[c].context,h);break;case 3:r[c].fn.call(r[c].context,h,l);break;case 4:r[c].fn.call(r[c].context,h,l,T);break;default:if(!P)for(b=1,P=new Array(_-1);b<_;b++)P[b-1]=arguments[b];r[c].fn.apply(r[c].context,P)}}return!0},a.prototype.on=function(o,h,l){return u(this,o,h,l,!1)},a.prototype.once=function(o,h,l){return u(this,o,h,l,!0)},a.prototype.removeListener=function(o,h,l,T){var g=i?i+o:o;if(!this._events[g])return this;if(!h)return m(this,g),this;var f=this._events[g];if(f.fn)f.fn===h&&(!T||f.once)&&(!l||f.context===l)&&m(this,g);else{for(var O=0,r=[],_=f.length;O<_;O++)(f[O].fn!==h||T&&!f[O].once||l&&f[O].context!==l)&&r.push(f[O]);r.length?this._events[g]=r.length===1?r[0]:r:m(this,g)}return this},a.prototype.removeAllListeners=function(o){var h;return o?(h=i?i+o:o,this._events[h]&&m(this,h)):(this._events=new n,this._eventsCount=0),this},a.prototype.off=a.prototype.removeListener,a.prototype.addListener=a.prototype.on,a.prefixed=i,a.EventEmitter=a,t.exports=a})(R);var A=R.exports;const C=M(A),s=class extends C{constructor({element:t,minContentHeight:e=s.DEFAULTS.minContentHeight,minContentWidth:i=s.DEFAULTS.minContentWidth,snapThreshold:n=s.DEFAULTS.snapThreshold,controlsThreshold:d=s.DEFAULTS.controlsThreshold,clickDetectionThreshold:u=s.DEFAULTS.clickDetectionThreshold,stack:m=!1}){if(super(),this.window=window,this.engaged=!1,this.controlsActive=!1,this.over=!1,this.dragging=!1,this.resizing=!1,this.down=!1,this.parentMouseX=0,this.parentMouseY=0,this.offsetX=0,this.offsetY=0,this.computed=!1,this.cursorSet=!1,this.controls={left:!1,right:!1,top:!1,bottom:!1},this.downMouseX=0,this.downMouseY=0,this.onMouseOver=(a,p=!1)=>{var o;this.over||s.activeInstance&&s.activeInstance!==this||(!this.stack&&!p&&((o=s.__ENGAGED_STACK__.at(-1))==null||o.onMouseOut(a,!0),s.__ENGAGED_STACK__.push(this)),this.setOverState(!0),this.element.addEventListener("mouseleave",this.onMouseOut),this.element.addEventListener("mousemove",this.onMouseMove),this.element.addEventListener("mousedown",this.onMouseDown))},this.onMouseOut=(a,p=!1)=>{var o;this.over&&(this.element.removeEventListener("mouseleave",this.onMouseOut),this.element.removeEventListener("mousemove",this.onMouseMove),this.element.removeEventListener("mousedown",this.onMouseDown),this.setOverState(!1),this.resetControlPoints(),!this.stack&&!p&&(s.__ENGAGED_STACK__.pop(),(o=s.__ENGAGED_STACK__.at(-1))==null||o.onMouseOver(a,!0)))},this.onMouseDown=a=>{a.preventDefault(),this.element.removeEventListener("mouseleave",this.onMouseOut),this.element.removeEventListener("mousemove",this.onMouseMove),this.element.removeEventListener("mousedown",this.onMouseDown),this.element.removeEventListener("mouseenter",this.onMouseOver),this.down=!0,s.activeInstance=this,this.downPosition={box:{...this.position.box},fullBox:{...this.position.fullBox},rect:{...this.position.rect},borders:{...this.position.borders},margins:{...this.position.margins},paddings:{...this.position.paddings},visualBox:{...this.position.visualBox}},this.offsetX=this.parentMouseX-this.position.rect.left,this.offsetY=this.parentMouseY-this.position.rect.top,this.downMouseX=this.parentMouseX,this.downMouseY=this.parentMouseY,this.dragging=!this.controlsActive,this.resizing=this.controlsActive,this.element.setAttribute(s.ATTRIBUTES.DOWN,""),this.dragging&&this.element.setAttribute(s.ATTRIBUTES.DRAG,""),this.emit(s.EVENTS.DOWN,this),this.window.addEventListener("mousemove",this.onMouseMove),this.window.addEventListener("mouseup",this.onMouseUp)},this.onMouseUp=a=>{this.window.removeEventListener("mouseup",this.onMouseUp),this.window.removeEventListener("mousemove",this.onMouseMove),this.element.addEventListener("mouseleave",this.onMouseOut),this.element.addEventListener("mousemove",this.onMouseMove),this.element.addEventListener("mousedown",this.onMouseDown),this.element.addEventListener("mouseenter",this.onMouseOver),this.down=!1,a.preventDefault(),s.activeInstance=null,this.down=!1,this.dragging=!1,this.element.removeAttribute(s.ATTRIBUTES.DOWN),this.element.removeAttribute(s.ATTRIBUTES.DRAG),this.element.removeAttribute(s.ATTRIBUTES.RESIZE),this.emit(s.EVENTS.UP,this),this.isClick()&&this.emit(s.EVENTS.CLICK,this)},this.onMouseMove=a=>{this.parentPosition=this.getComputedParentPosition(),this.position=this.getComputedElementPosition(),this.parentMouseX=a.pageX-this.parentPosition.offsetLeft,this.parentMouseY=a.pageY-this.parentPosition.offsetTop,this.down?this.dragging?this.drag():this.reSize():(this.updateControlPointsState(),this.updateCursorStyle())},this.minContentHeight=e,this.minContentWidth=i,this.snapThreshold=n,this.controlsThreshold=d,this.element=t,this.stack=m,this.element.__overdrag=this,this.clickDetectionThreshold=u,!this.element.offsetParent)throw new Error(s.ERROR.NO_PARENT);this.parentElement=this.element.offsetParent,this.element.addEventListener("mouseenter",this.onMouseOver),this.parentPosition=this.getComputedParentPosition(),this.position=this.getComputedElementPosition(),this.downPosition=this.position}_getInt(t){return parseInt(t||"0")}emit(t,...e){return super.emit.apply(this,[s.EVENTS.UPDATE,this]),super.emit.apply(this,[t,...e])}getComputedParentPosition(){const t=this.parentElement.getBoundingClientRect(),e=getComputedStyle(this.parentElement),i={top:this._getInt(e.paddingTop),right:this._getInt(e.paddingRight),bottom:this._getInt(e.paddingBottom),left:this._getInt(e.paddingLeft)};return{box:{width:this._getInt(e.width),height:this._getInt(e.height)},paddings:i,offsetLeft:t.left+this._getInt(e.borderLeftWidth)+i.left,offsetTop:t.top+this._getInt(e.borderTopWidth)+i.top}}getComputedElementPosition(){const t=getComputedStyle(this.element),e={top:this._getInt(t.marginTop),right:this._getInt(t.marginRight),bottom:this._getInt(t.marginBottom),left:this._getInt(t.marginLeft)},i={top:this._getInt(t.borderTopWidth),right:this._getInt(t.borderRightWidth),bottom:this._getInt(t.borderBottomWidth),left:this._getInt(t.borderLeftWidth)},n={top:this._getInt(t.paddingTop),right:this._getInt(t.paddingRight),bottom:this._getInt(t.paddingBottom),left:this._getInt(t.paddingLeft)},d=this._getInt(t.top),u=this._getInt(t.left),m=this._getInt(t.width),a=this._getInt(t.height),p=m+i.right+i.left+n.right+n.left+e.right+e.left,o=a+i.top+i.bottom+n.top+n.bottom+e.top+e.bottom;return{rect:{top:d,left:u,right:u+p,bottom:d+o},box:{width:m,height:a},visualBox:{width:m+i.right+i.left+n.right+n.left,height:a+i.top+i.bottom+n.top+n.bottom},fullBox:{width:p,height:o},margins:e,borders:i,paddings:n}}isClick(){return Math.abs(this.parentMouseX-this.downMouseX)<this.clickDetectionThreshold&&Math.abs(this.parentMouseY-this.downMouseY)<this.clickDetectionThreshold}isControlPointActive(){return this.over&&(this.controls.left||this.controls.right||this.controls.top||this.controls.bottom)}setOverState(t){this.over=t,t?(this.element.setAttribute(s.ATTRIBUTES.OVER,""),this.emit(s.EVENTS.OVER,this)):(this.element.removeAttribute(s.ATTRIBUTES.OVER),this.emit(s.EVENTS.OUT,this))}resetControlPoints(){const t=this.controlsActive;this.controlsActive=this.controls.left=this.controls.right=this.controls.top=this.controls.bottom=!1,t!==this.controlsActive&&(this.element.removeAttribute(s.ATTRIBUTES.CONTROLS),this.emit(s.EVENTS.CONTROLS_INACTIVE,this))}updateControlPointsState(){const t=JSON.stringify(this.controls);this.controls.left=Math.abs(this.parentMouseX-this.position.rect.left-this.position.margins.left+this.parentPosition.paddings.left)<=this.controlsThreshold,this.controls.right=Math.abs(this.parentMouseX-this.position.rect.right+this.position.margins.right+this.parentPosition.paddings.left)<=this.controlsThreshold,this.controls.top=Math.abs(this.parentMouseY-this.position.rect.top-this.position.margins.top+this.parentPosition.paddings.top)<=this.controlsThreshold,this.controls.bottom=Math.abs(this.parentMouseY-this.position.rect.bottom+this.position.margins.bottom+this.parentPosition.paddings.top)<=this.controlsThreshold;const e=this.controls.left||this.controls.right||this.controls.top||this.controls.bottom;e&&t!==JSON.stringify(this.controls)?(this.controlsActive=!0,this.element.setAttribute(s.ATTRIBUTES.CONTROLS,Object.keys(this.controls).filter(i=>this.controls[i]).join("-")),this.emit(s.EVENTS.CONTROLS_ACTIVE,this)):e||this.resetControlPoints()}updateCursorStyle(){let t=null;this.controls.top&&this.controls.left?t=s.CURSOR.TOP_LEFT:this.controls.bottom&&this.controls.right?t=s.CURSOR.BOTTOM_RIGHT:this.controls.bottom&&this.controls.left?t=s.CURSOR.BOTTOM_LEFT:this.controls.top&&this.controls.right?t=s.CURSOR.TOP_RIGHT:this.controls.top?t=s.CURSOR.TOP:this.controls.bottom?t=s.CURSOR.BOTTOM:this.controls.left?t=s.CURSOR.LEFT:this.controls.right?t=s.CURSOR.RIGHT:this.over&&(t=s.CURSOR.OVER),this.element.style.setProperty("cursor",t)}reSize(){let t=!1;this.controls.top&&(t=this.movePointTop()||t),this.controls.bottom&&(t=this.movePointBottom()||t),this.controls.left&&(t=this.movePointLeft()||t),this.controls.right&&(t=this.movePointRight()||t),t&&(this.emit(s.EVENTS.RESIZE,this),this.element.setAttribute(s.ATTRIBUTES.RESIZE,Object.keys(this.controls).filter(e=>this.controls[e]).join("-")))}assignPosition(t){const e={top:this.position.rect.top,left:this.position.rect.left,width:this.position.box.width,height:this.position.box.height,...t};this.position={...this.position,rect:{...this.position.rect,top:e.top,left:e.left},box:{...this.position.box,width:e.width,height:e.height}},this.element.style.left=`${e.left}px`,this.element.style.top=`${e.top}px`,this.element.style.width=`${e.width}px`,this.element.style.height=`${e.height}px`,this.element.setAttribute("width",`${e.width}`),this.element.setAttribute("height",`${e.height}`)}movePointRight(){const t=this.parentPosition.box.width-this.position.rect.left+this.parentPosition.paddings.right,e=this.position.fullBox.width-this.position.box.width,i=this.minContentWidth+e;let n=Math.max(i,Math.min(this.parentMouseX-this.downPosition.rect.left+(this.downPosition.fullBox.width-this.offsetX),t));return n=n>=t-this.snapThreshold?t:n,n=n-e,n!==this.position.box.width?(this.assignPosition({width:n}),this.emit(s.EVENTS.CONTROL_RIGHT_UPDATE,this),!0):!1}movePointBottom(){const t=this.parentPosition.box.height-this.position.rect.top+this.parentPosition.paddings.bottom,e=this.position.fullBox.height-this.position.box.height,i=this.minContentHeight+e;let n=Math.max(i,Math.min(this.parentMouseY-this.downPosition.rect.top+(this.downPosition.fullBox.height-this.offsetY),t));return n=n>=t-this.snapThreshold?t:n,n=n-e,n!==this.position.box.height?(this.assignPosition({height:n}),this.emit(s.EVENTS.CONTROL_BOTTOM_UPDATE,this),!0):!1}movePointLeft(){const t=this.position.fullBox.width-this.position.box.width,e=this.minContentWidth+t;let i=Math.max(this.parentPosition.paddings.left,Math.min(this.parentMouseX-this.offsetX,this.downPosition.rect.right-e));i=i<this.snapThreshold+this.parentPosition.paddings.left?this.parentPosition.paddings.left:i;const n=Math.max(e,this.downPosition.rect.right-i)-t;return i!==this.position.rect.left?(this.assignPosition({width:n,left:i}),this.emit(s.EVENTS.CONTROL_LEFT_UPDATE,this),!0):!1}movePointTop(){const t=this.position.fullBox.height-this.position.box.height,e=this.minContentHeight+t;let i=Math.max(this.parentPosition.paddings.top,Math.min(this.parentMouseY-this.offsetY,this.downPosition.rect.bottom-e));i=i<this.snapThreshold+this.parentPosition.paddings.top?this.parentPosition.paddings.top:i;const n=Math.max(e,this.downPosition.rect.bottom-i)-t;return i!==this.position.rect.top?(this.assignPosition({height:n,top:i}),this.emit(s.EVENTS.CONTROL_TOP_UPDATE,this),!0):!1}drag(){let t=this.parentMouseX-this.offsetX,e=this.parentMouseY-this.offsetY;t=t<=this.snapThreshold+this.parentPosition.paddings.left?this.parentPosition.paddings.left:t+this.position.fullBox.width>=this.parentPosition.paddings.left+this.parentPosition.box.width-this.snapThreshold?this.parentPosition.paddings.left+this.parentPosition.box.width-this.position.fullBox.width:t,e=e<=this.snapThreshold+this.parentPosition.paddings.top?this.parentPosition.paddings.top:e+this.position.fullBox.height>=this.parentPosition.paddings.top+this.parentPosition.box.height-this.snapThreshold?this.parentPosition.paddings.top+this.parentPosition.box.height-this.position.fullBox.height:e,(this.position.rect.right!==t||this.position.rect.top!==e)&&(this.assignPosition({left:t,top:e}),this.element.setAttribute(s.ATTRIBUTES.DRAG,""),this.emit(s.EVENTS.DRAG,this))}};let E=s;E.__ENGAGED_STACK__=[];E.ERROR={NO_PARENT:"Element must have an offset parent with position relative or absolute)"};E.DEFAULTS={snapThreshold:16,controlsThreshold:16,minContentHeight:50,minContentWidth:50,clickDetectionThreshold:5};E.ATTRIBUTES={CONTROLS:"data-overdrag-controls",OVER:"data-overdrag-over",DOWN:"data-overdrag-down",DRAG:"data-overdrag-drag",RESIZE:"data-overdrag-resize"};E.CURSOR={LEFT:"w-resize",RIGHT:"e-resize",TOP:"n-resize",BOTTOM:"s-resize",TOP_LEFT:"nw-resize",TOP_RIGHT:"ne-resize",BOTTOM_LEFT:"sw-resize",BOTTOM_RIGHT:"se-resize",OVER:"grab",DEFAULT:"default"};E.EVENTS={DOWN:"down",UP:"up",CLICK:"click",DRAG:"drag",OVER:"over",OUT:"out",CONTROLS_ACTIVE:"controls-active",CONTROLS_INACTIVE:"controls-inactive",CONTROL_RIGHT_UPDATE:"control-right-update",CONTROL_LEFT_UPDATE:"control-left-update",CONTROL_TOP_UPDATE:"control-top-update",CONTROL_BOTTOM_UPDATE:"control-bottom-update",RESIZE:"resize",UPDATE:"update"};E.activeInstance=null;const L=document.querySelectorAll(".overdrag");L.forEach(t=>{const e=new E({element:t});e.element.data=e.element.querySelector(".data"),e.on("update",w),w(e),e.on(E.EVENTS.CLICK,()=>console.log("click",e))});function w(t){t.element.data.innerHTML=`
    ${v("controls",t.controlsActive.toString())}
    ${v("dragging",t.dragging.toString())}
    ${v("over",t.over.toString())}
    ${v("down",t.down.toString())} 
    ${v("resizing",t.resizing.toString())} 
    ${v("top",t.position.rect.top.toString())}
    ${v("left",t.position.rect.left.toString())}  
    ${v("width",t.position.box.width.toString())}
    ${v("height",t.position.box.height.toString())}  
    ${v("control",t.element.getAttribute(E.ATTRIBUTES.CONTROLS)||"")}  
  `}function v(t,e){return`<div>${t}: ${e}</div>`}