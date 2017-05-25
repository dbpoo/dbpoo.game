class GameUIView extends BaseEuiView{

	private gameInfo:egret.Bitmap;

	public constructor(controller:BaseController, parent:eui.Group) {
		super(controller, parent);
		
		this.skinName = "resource/skins/GameUISkin.exml";
	}

	public initUI():void{
		super.initUI();
		
	}

}