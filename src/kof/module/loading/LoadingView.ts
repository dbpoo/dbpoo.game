class LoadingView extends BaseEuiView{
    public constructor($controller:BaseController, $parent:eui.Group) {
        super($controller, $parent);

        this.skinName = "resource/skins/LoadingSkin.exml";
    }

    public txtMsg:eui.Label;

    public setProgress(current:number, total:number):void {
        this.txtMsg.text = "资源加载中..." + current + "/" + total;
    }
}