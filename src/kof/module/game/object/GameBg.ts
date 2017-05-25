class GameBg extends BaseGameObject{
	private bgTop:egret.Bitmap;
	private bgTopCopy:egret.Bitmap;
	private bgMiddle:egret.Bitmap;
	private bgMiddleCopy:egret.Bitmap;
	private bgBottom:egret.Bitmap;
	private bgBottomCopy:egret.Bitmap;
	private bgSpeed1:number = 1;
	private bgSpeed2:number = 2;

	public constructor($controller:BaseController) {
		super($controller);
		console.log("创建背景");

		this.bgBottom = App.DisplayUtils.createBitmap("map_zhulin_bottom");
        this.addChild(this.bgBottom);
		this.bgBottomCopy = App.DisplayUtils.createBitmap("map_zhulin_bottom");
		this.bgBottomCopy.x = this.bgBottom.width;
        this.addChild(this.bgBottomCopy);
		this.bgMiddle = App.DisplayUtils.createBitmap("map_zhulin_middle");
        this.addChild(this.bgMiddle);
		this.bgMiddleCopy = App.DisplayUtils.createBitmap("map_zhulin_middle");
		this.bgMiddleCopy.x = this.bgMiddle.width;
        this.addChild(this.bgMiddleCopy);

		this.bgTop = App.DisplayUtils.createBitmap("map_zhulin_top");
		this.bgTop.y = this.bgMiddle.height;
        this.addChild(this.bgTop);
		this.bgTopCopy = App.DisplayUtils.createBitmap("map_zhulin_top");
		this.bgTopCopy.y = this.bgMiddle.height;
		this.bgTopCopy.x = this.bgTop.width;
        this.addChild(this.bgTopCopy);
	}

	public init():void{
		super.init();
	}

	public run():void{
		App.TimerManager.doFrame(1, 0, this.bgUpdate, this);
	}

	public stop():void{
		App.TimerManager.remove(this.bgUpdate, this);
	}

	private bgUpdate():void{
		this.bgBottom.x -= this.bgSpeed1;
		this.bgBottomCopy.x -= this.bgSpeed1;
		if(this.bgBottom.x <= -this.bgBottom.width) {
			this.bgBottom.x = this.bgBottomCopy.x + this.bgBottom.width;
		}
		if(this.bgBottomCopy.x <= -this.bgBottom.width) {
			this.bgBottomCopy.x = this.bgBottom.x + this.bgBottom.width;
		}
		
		this.bgMiddle.x -= this.bgSpeed2;
		this.bgMiddleCopy.x -= this.bgSpeed2;
		this.bgTop.x -= this.bgSpeed2;
		this.bgTopCopy.x -= this.bgSpeed2;
		if(this.bgMiddle.x <= -this.bgMiddle.width) {
			this.bgMiddle.x = this.bgMiddleCopy.x + this.bgMiddle.width;
		}
		if(this.bgMiddleCopy.x <= -this.bgMiddle.width) {
			this.bgMiddleCopy.x = this.bgMiddle.x + this.bgMiddle.width;
		}
		if(this.bgTop.x <= -this.bgTop.width) {
			this.bgTop.x = this.bgTopCopy.x + this.bgTop.width;
		}
		if(this.bgTopCopy.x <= -this.bgTop.width) {
			this.bgTopCopy.x = this.bgTop.x + this.bgTop.width;
		}
	}

}