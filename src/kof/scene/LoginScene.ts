class LoginScene extends BaseScene{
    public constructor(){
        super();
        console.log("初始化Login");
    }

    /**
     * 进入Scene调用
     */
    public onEnter():void{
        super.onEnter();
       
        //添加该Scene使用的层级
        this.addLayer(LayerManager.UI_Main);

        //初始打开Login页面
        App.ViewManager.open(ViewConst.Login);

        //播放背景音乐
        // App.SoundManager.playBg("bg_sound");
    }

    /**
     * 退出Scene调用
     */
    public onExit():void{
        super.onExit();
    }
}