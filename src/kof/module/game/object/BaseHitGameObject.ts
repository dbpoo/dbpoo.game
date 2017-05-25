class BaseHitGameObject extends BaseMoveGameObject{
	public constructor($controller:BaseController) {
		super($controller);
	}

	public onAttack():boolean{
		if(this.isAttack) {
			return false;
		}

		if(this.isMove) {
			this.stopMove();
		}

		return true;
	}

	public loseHp():void{
		console.log("掉血");
	}

	public die():void{
		this.isDie = true;
	}


}