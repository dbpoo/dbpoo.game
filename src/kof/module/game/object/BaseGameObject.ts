class BaseGameObject extends egret.DisplayObjectContainer{
	public static ACTION_STAND:string = "stand";
    public static ACTION_MOVE:string = "move";
    public static ACTION_ATTACK:string = "attack";
    public static ACTION_JUMP:string = "jump";
    public static ACTION_LAND:string = "land";
    public static ACTION_HURT:string = "hurt";

	private originX:number = 0;
    private originY:number = 0;

	public controller:BaseController;
	public armature:DragonBonesArmatureContainer;

	public hp:number;
	public isDie:boolean;

	public constructor($controller:BaseController) {
		super();
		this.armature = new DragonBonesArmatureContainer();
        this.addChild(this.armature);

		this.controller = $controller;
	}

	public init():void{
		this.hp = 300;
		this.isDie = false;
		App.TimerManager.doFrame(1, 0, this.onFrame, this);
	}

	public destory():void{
        this.armature.stop();
        App.TimerManager.remove(this.onFrame, this);
        App.DisplayUtils.removeFromParent(this);
        ObjectPool.push(this);
    }

	private onFrame(time:number):void{
		this.update(time);
		this.setPos();
	}

	public update(time:number):void{

	}

	public setPos():void{
		if(this.$getX() != this.originX) {
			this.$setX(this.originX);
		}
		if(this.$getY() != this.originY) {
			this.$setY(this.originY);
		}
	}

	public set x(value:number) {
        this.originX = value;
    }

	public set y(value:number) {
        this.originY = value;
    }

	public get x():number {
        return this.originX;
    }

    public get y():number {
        return this.originY;
    }
	
}