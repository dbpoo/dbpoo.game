class LoginView extends BaseEuiView{

	public constructor($controller:BaseController, $parent:eui.Group) {
        super($controller, $parent);
        this.skinName = "resource/skins/LoginSkin.exml";
    }

    private groupLogin: eui.Group;
    private groupSelect: eui.Group;
    private btnLogin: eui.Button;
    private heroBtn01: eui.Image;
    private heroBtn02: eui.Image;
    private heroBtn03: eui.Image;
    private selectActor: eui.Image;
    private backBtn: eui.Button;
    private createBtn: eui.Button;

    public initUI(){
        super.initUI();
        this.groupLogin.visible = true;
        this.groupSelect.visible = false;
        this.btnLogin.addEventListener(egret.TouchEvent.TOUCH_TAP, this.btnLoginHandler,this);
        this.heroBtn01.addEventListener(egret.TouchEvent.TOUCH_TAP, this.heroSelectHandler, this);
        this.heroBtn02.addEventListener(egret.TouchEvent.TOUCH_TAP, this.heroSelectHandler, this);
        this.heroBtn03.addEventListener(egret.TouchEvent.TOUCH_TAP, this.heroSelectHandler, this);
        this.backBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.backBtnHandler, this);
        this.createBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.createBtnHandler, this);
    }

    private btnLoginHandler(evt:egret.TouchEvent):void {
        this.showSelect();
        this.selectActor.source = this.heroBtn01.name;
    }

    private heroSelectHandler(evt:egret.TouchEvent) {
        let currentName = evt.currentTarget.name;
        this.selectActor.source = currentName;
    }

    private backBtnHandler(evt:egret.TouchEvent) {
        this.showLogin();
    }

    private showLogin():void {
        this.groupLogin.visible = true;
        this.groupSelect.visible = false;
    }

    private showSelect():void {
        this.groupLogin.visible = false;
        this.groupSelect.visible = true;
    }

    private createBtnHandler():void{
        new GameRes();
    }

}