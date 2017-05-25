class BaseMoveGameObject extends BaseGameObject{

    private currState:string;
    private speed:number;
    private speedX:number;
    private speedY:number;
    private endX:number;
    private endY:number;
    private radian:number;

    public isCommand:boolean;

	public constructor($controller:BaseController) {
        super($controller);
    }

    public init():void{
        super.init();
        this.speed = 0;
        this.speedX = 0;
        this.speedY = 0;
        this.endX = 0;
        this.endY = 0;
        this.alpha = 1;
        this.isCommand = false;
    }

    public destory():void{
        super.destory();
    }

    public update(time:number):void{
        super.update(time);
        var func:string = "state_" + this.currState;
        if(this.currState){
            this[func](time);
        }
    }

    /**
     * 停止状态
     */
    public state_stand(time:number):void{
        
    }

    /**
     * 移动状态
     */
    public state_move(time:number):void{
        var useSpeed:number = this.speed/(1000/60) * time;
        this.radian = App.MathUtils.getRadian2(this.x, this.y, this.endX, this.endY);
        this.speedX = Math.cos(this.radian) * useSpeed;
        this.speedY = Math.sin(this.radian) * useSpeed * 0.65;
        var gotoX:number = this.x + this.speedX;
        var gotoY:number = this.y + this.speedY;
        if(this.x > GameData.MIN_X && this.x < GameData.MAX_X){
            this.stopMove();
            return;
            // if(!this.isCommand){
            //     this.stopMove();
            //     return;
            // }
        }
        
        this.x = gotoX;
        this.y = gotoY;
    }

    /**
     * 攻击状态
     */
    public state_attack(time:number):void{
        // console.log("攻击状态");
    }

    /**
     * 移动
     */
    public moveTo($speed:number, $endX:number, $endY:number):void{
        this.speed = $speed;
        this.endX = $endX;
        this.endY = $endY;
    }

    public stopMove():void{
        this.speed = 0;
        this.isCommand = false;
        this.gotoAttack();
    }

    // 行走到某个点
    public walkTo($speed:number, $endX:number, $endY:number):void {
        this.moveTo($speed, $endX, $endY);
        this.gotoMove();
    }

    public command_in(speed:number, toX:number, toY:number):void{
        this.isCommand = true;
        this.walkTo(speed, toX, toY);
    }

    public gotoStand():void{
        this.currState = BaseMoveGameObject.ACTION_STAND;
        this.armature.play(BaseMoveGameObject.ACTION_STAND, 0);
    }

    public gotoMove():void{
        this.currState = BaseMoveGameObject.ACTION_MOVE;
        this.armature.play(BaseMoveGameObject.ACTION_MOVE, 0);
    }

    public gotoAttack():void{
        this.currState = BaseMoveGameObject.ACTION_ATTACK;
        this.armature.play(BaseMoveGameObject.ACTION_ATTACK, 0);
    }

    public get isStand():boolean {
        return this.currState == BaseMoveGameObject.ACTION_STAND;
    }

    public get isAttack():boolean{
        return this.currState == BaseMoveGameObject.ACTION_ATTACK;
    }

    public get isMove():boolean{
        return this.currState == BaseMoveGameObject.ACTION_MOVE;
    }
    

}