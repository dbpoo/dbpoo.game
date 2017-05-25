class Main extends egret.DisplayObjectContainer {
    public constructor() {
        super();

        this.addEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);
    }

    private onAddToStage(event: egret.Event) {
        this.removeEventListener(egret.Event.ADDED_TO_STAGE, this.onAddToStage, this);

        this.stage.registerImplementation("eui.IAssetAdapter",new AssetAdapter());
        this.stage.registerImplementation("eui.IThemeAdapter",new ThemeAdapter());

        // 初始化
        this.initScene();
        this.initModule();

        //设置加载进度界面
        App.SceneManager.runScene(SceneConsts.LOADING);

        //加载资源
        this.loadResVersionComplate();
    }

    private loadResVersionComplate():void {
        //初始化Resource资源加载库
        App.ResourceUtils.addConfig("resource/default.res.json", "resource/");
        // App.ResourceUtils.addConfig("resource/resource_core.json", "resource/");
        // App.ResourceUtils.addConfig("resource/resource_ui.json", "resource/");
        // App.ResourceUtils.addConfig("resource/resource_battle.json", "resource/");
        App.ResourceUtils.loadConfig(this.onConfigComplete, this);
    }

    /**
     * 配置文件加载完成,开始预加载preload资源组。
     */
    private onConfigComplete():void {
        //加载皮肤主题配置文件,可以手动修改这个文件。替换默认皮肤。
        var theme = new eui.Theme("resource/default.thm.json",this.stage);
        theme.addEventListener(eui.UIEvent.COMPLETE,this.onThemeLoadComplete,this);
    }

    /**
     * 主题文件加载完成
     */
    private onThemeLoadComplete(): void {
        new LoginRes();
    }

    /**
     * 初始化所有场景
     */
    private initScene() {
        App.SceneManager.register(SceneConsts.LOADING, new LoadingScene());
        App.SceneManager.register(SceneConsts.LOGIN, new LoginScene());
        App.SceneManager.register(SceneConsts.GAME, new GameScene());
    }

    /**
     * 初始化所有模块
     */
    private initModule() {
        App.ControllerManager.register(ControllerConst.Loading, new LoadingController());
    }

}