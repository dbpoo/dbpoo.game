class BaseFrameGameObject extends BaseHitGameObject{
	public attackConfig:any;

	public constructor($controller:BaseController) {
        super($controller);
    }

	public initFrameData($dragonBonesDataName:string):void{
        // this.attackConfig = RES.getRes("attack_json")[$dragonBonesDataName];
        // if(this.attackConfig){
        //     this.armature.addFrameCallFunc(this.armatureEventHandle, this);
        // }
    }
}