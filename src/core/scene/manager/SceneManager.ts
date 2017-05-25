class SceneManager extends BaseClass{
	private _scenes:any;
    private _currScene:number;

	public constructor() {
		super();
		this._scenes = {};
	}

	/**
     * 注册Scene
     * @param key Scene唯一标识
     * @param scene Scene对象
     */
    public register(key:number, scene:BaseScene):void {
        this._scenes[key] = scene;
    }


    /**
     * 切换场景
     * @param key 场景唯一标识
     */
    public runScene(key:number):void {
        var nowScene:BaseScene = this._scenes[key];
        if (nowScene == null) {
            return;
        }

        var oldScene:BaseScene = this._scenes[this._currScene];
        if (oldScene) {
            oldScene.onExit();
        }

        nowScene.onEnter();
        this._currScene = key;
    }

}