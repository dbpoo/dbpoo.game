class GameRes {
	public constructor(){
        var groupName:string = "preload";
        var subGroups:Array<string> = ["common", "game"];
        App.ResourceUtils.loadGroups(groupName, subGroups, this.onResourceLoadComplete, this.onResourceLoadProgress, this);
    }

    /**
     * 资源组加载完成
     */
    private onResourceLoadComplete():void {
        this.initModule();
        App.Init();

        //音乐音效处理
        App.SoundManager.setBgOn(true);
        App.SoundManager.setEffectOn(true);

        this.initBattleDragonBones();
        App.SceneManager.runScene(SceneConsts.GAME);
    }

    /**
     * 资源组加载进度
     */
    private onResourceLoadProgress(itemsLoaded:number, itemsTotal:number):void {
        App.ControllerManager.applyFunc(ControllerConst.Loading, LoadingConst.SetProgress, itemsLoaded, itemsTotal);
    }

    /**
     * 初始化所有模块
     */
    private initModule():void{
        App.ControllerManager.register(ControllerConst.Game, new GameController());
    }

    /**
     * 初始化战斗使用的动画
     */
    private initBattleDragonBones():void{
        var arr:Array<string> = ["huowu","tufei1"];
        for(var i:number=0, len:number=arr.length; i<len; i++){
            var dbName:string = arr[i];
            var skeletonData:any = RES.getRes(dbName+"_ske_json");
            var texturePng:egret.Texture = RES.getRes(dbName+"_tex_png");
            var textureData:any = RES.getRes(dbName+"_tex_json");
            App.DragonBonesFactory.initArmatureFile(skeletonData, texturePng, textureData);
        }
    }
}