class GameController extends BaseController {
	private gameView:GameView;
	private gameUIView:GameUIView;

	public constructor() {
		super();
		console.log("创建Game&UI");
		// 加载游戏层
		this.gameView = new GameView(this, LayerManager.Game_Main);
        App.ViewManager.register(ViewConst.Game, this.gameView);

		// 加载游戏UI层
		this.gameUIView = new GameUIView(this, LayerManager.UI_Main);
        App.ViewManager.register(ViewConst.GameUI, this.gameUIView);

		
	}
}