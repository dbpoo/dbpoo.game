class LoginController extends BaseController{
	private loginView:LoginView;

	public constructor() {
		super();
		console.log("创建Login")
		this.loginView = new LoginView(this, LayerManager.UI_Main);
		App.ViewManager.register(ViewConst.Login, this.loginView);
	}

}