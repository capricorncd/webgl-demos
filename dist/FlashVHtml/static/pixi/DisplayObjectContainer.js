var PIXI=PIXI||{};PIXI.DisplayObjectContainer=function(){PIXI.DisplayObject.call(this),this.children=[],this.renderable=!1},PIXI.DisplayObjectContainer.constructor=PIXI.DisplayObjectContainer,PIXI.DisplayObjectContainer.prototype=Object.create(PIXI.DisplayObject.prototype),PIXI.DisplayObjectContainer.prototype.addChild=function(t){null!=t.parent&&t.parent.removeChild(t),t.parent=this,t.childIndex=this.children.length,this.children.push(t),this.stage&&this.stage.__addChild(t)},PIXI.DisplayObjectContainer.prototype.addChildAt=function(t,e){if(!(e>=0&&e<=this.children.length))throw new Error(t+" The index supplied is out of bounds "+this);null!=t.parent&&t.parent.removeChild(t),e==this.children.length?this.children.push(t):this.children.splice(e,0,t),t.parent=this,t.childIndex=e;for(var i=this.children.length,h=e;h<i;h++)this.children[h].childIndex=h;this.stage&&this.stage.__addChild(t)},PIXI.DisplayObjectContainer.prototype.removeChild=function(t){var e=this.children.indexOf(t);if(-1===e)throw new Error(t+" The supplied DisplayObject must be a child of the caller "+this);this.stage&&this.stage.__removeChild(t),t.parent=void 0,this.children.splice(e,1);for(var i=e,h=this.children.length;i<h;i++)this.children[i].childIndex-=1},PIXI.DisplayObjectContainer.prototype.updateTransform=function(){if(this.visible){PIXI.DisplayObject.prototype.updateTransform.call(this);for(var t=0,e=this.children.length;t<e;t++)this.children[t].updateTransform()}};