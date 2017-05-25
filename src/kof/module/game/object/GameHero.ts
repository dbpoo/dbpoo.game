class GameHero extends BaseFrameGameObject{

	// private effectArmature:DragonBonesArmatureContainer;

	public constructor($controller:BaseController) {
		super($controller);
		console.log("创建英雄");
		this.createArmature();
	}

	public createArmature():void{
		
		this.armature.register(App.DragonBonesFactory.makeArmature("huowu", "huowu", 1), [
			BaseGameObject.ACTION_STAND,
			BaseGameObject.ACTION_MOVE,
			BaseGameObject.ACTION_ATTACK
		])
		
		
		this.armature.addCompleteCallFunc(this.armaturePlayEnd, this);
	}

	public init():void{
		super.init();
		this.gotoStand();
	}

	public destory():void{
		super.destory();
		// this.removeEffect();
	}

	public armaturePlayEnd(e:dragonBones.AnimationEvent, animationName:string):void{
		console.log(1);
	}


	public gotoStand():void{
		super.gotoStand();
		// this.removeEffect();
	}

	// private removeEffect():void{
    //     this.effectArmature.stop();
    //     App.DisplayUtils.removeFromParent(this.effectArmature);
    // }

    // private playEffect(actionName:string):void{
    //     if(this.effectArmature.play(actionName, 1)){
    //         this.addChild(this.effectArmature);
    //     }else{
    //         this.removeEffect();
    //     }
    // }

}