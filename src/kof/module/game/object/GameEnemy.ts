class GameEnemy extends BaseFrameGameObject{

	public constructor($controller:BaseController) {
		super($controller);
		console.log("创建敌人");
		this.createArmature();
	}

	public createArmature():void{
		
		this.armature.register(App.DragonBonesFactory.makeArmature("tufei1", "tufei1", 1), [
			BaseGameObject.ACTION_MOVE,
			GameEnemy.ACTION_ATTACK
		])
		
		
		this.armature.addCompleteCallFunc(this.armaturePlayEnd, this);
	}

	public init():void{
		super.init();
		this.gotoStand();
	}

	public armaturePlayEnd(e:dragonBones.AnimationEvent, animationName:string):void{
		console.log(e);
	}

	public gotoStand():void{
		super.gotoStand();
	}

	public gotoAttack():void{
        super.gotoAttack();
        this.playAttackArmature();
    }

    public playAttackArmature():void{
        this.armature.play(GameEnemy.ACTION_ATTACK, 1);
    }
}