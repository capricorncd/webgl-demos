var PIXI=PIXI||{};PIXI.Strip=function(t,e,i){PIXI.DisplayObjectContainer.call(this),this.texture=t,this.blendMode=PIXI.blendModes.NORMAL,console.log("STRIP!: "+t);try{this.uvs=new Float32Array([0,1,1,1,1,0,0,1]),this.verticies=new Float32Array([0,0,0,0,0,0,0,0,0]),this.colors=new Float32Array([1,1,1,1]),this.indices=new Uint16Array([0,1,2,3])}catch(t){this.uvs=[0,1,1,1,1,0,0,1],this.verticies=[0,0,0,0,0,0,0,0,0],this.colors=[1,1,1,1],this.indices=[0,1,2,3]}this.width=e,this.height=i,t.baseTexture.hasLoaded?(this.width=this.texture.frame.width,this.height=this.texture.frame.height,this.updateFrame=!0):(this.onTextureUpdateBind=this.onTextureUpdate.bind(this),this.texture.addEventListener("update",this.onTextureUpdateBind)),this.renderable=!0},PIXI.Strip.constructor=PIXI.Strip,PIXI.Strip.prototype=Object.create(PIXI.DisplayObjectContainer.prototype),PIXI.Strip.prototype.setTexture=function(t){this.texture=t,this.width=t.frame.width,this.height=t.frame.height,this.updateFrame=!0},PIXI.Strip.prototype.onTextureUpdate=function(t){this.updateFrame=!0};