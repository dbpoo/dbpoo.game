class GameScene extends BaseScene{
    /**
     * 构造函数
     */
    public constructor(){
        super();
        console.log("初始化Game&UI");
    }

    /**
     * 进入Scene调用
     */
    public onEnter():void{
        super.onEnter();

        this.addLayerAt(LayerManager.Game_Main, 0);
        this.addLayerAt(LayerManager.UI_Main, 1);
        
        App.ViewManager.open(ViewConst.Game);
        App.ViewManager.open(ViewConst.GameUI);

        //播放背景音乐
        // App.SoundManager.playBg("sound_bg");
    }

    /**
     * 退出Scene调用
     */
    public onExit():void{
        super.onExit();
    }
}
