class GameView extends BaseSpriteView {
	private controller:BaseController;
	// private speed:number = 10;
	private bg:GameBg;
	private hero:GameHero;
	private enemys:Array<GameEnemy>;
	private objectContainer:egret.DisplayObjectContainer;
	
	public constructor($controller:BaseController, $parent:egret.DisplayObjectContainer) {
		super($controller, $parent);
        this.controller = $controller;
	}

	public initUI():void {
		super.initUI();

		GameData.MIN_X = 180;
        GameData.MAX_X = 450;
		GameData.MIN_Y = 500;
        GameData.MAX_Y = 700;

		// 创建背景
		this.createBg();

		this.objectContainer = new egret.DisplayObjectContainer();
        this.addChild(this.objectContainer);
		
		// 初始化敌人
		this.enemys = new Array<GameEnemy>();
		for (var i:number = 0; i < 4; i++) {
			var enemy:GameEnemy = ObjectPool.pop("GameEnemy", this.controller);
			enemy.init();
			this.enemys.push(enemy);
		}
		while (this.enemys.length) {
            this.enemys.pop().destory();
        }

		// 创建敌人
		this.startCreateEnemy();

		// 创建主角
		this.createHero();

		App.TimerManager.doTimer(3, 0, this.sortGameObjs, this);
	}

	private createBg():void{
		this.bg = ObjectPool.pop("GameBg", this.controller);
		this.addChild(this.bg);
	}

	private createHero():void{
		this.hero = ObjectPool.pop("GameHero", this.controller);
		this.hero.init();
		this.hero.x = 0;
		this.hero.y = 600;
		this.objectContainer.addChild(this.hero);
		
		var gotoX:number = 200;
		var gotoY:number = 600;
		this.hero.command_in(3, gotoX, gotoY);
	}

	private startCreateEnemy():void{
		this.enemys.length = 0;
		App.TimerManager.doTimer(100, 0, this.createEnemy, this);
	}

	private createEnemy():void{
		this.enemys.push(this.createEnemySingle("GameEnemy"));
		if(this.enemys.length >= 4) {
			App.TimerManager.remove(this.createEnemy, this);
		}
	}

	private createEnemySingle(clsName:string):GameEnemy {
		var initY:number = App.RandomUtils.limit(GameData.MIN_Y, GameData.MAX_Y);
		var enemy:GameEnemy = ObjectPool.pop(clsName, this.controller);
		enemy.init();
		enemy.x = App.StageUtils.getWidth();
        enemy.y = initY;
		enemy.setPos();
		enemy.scaleX = -1;
		this.objectContainer.addChild(enemy);

		var gotoX:number = App.StageUtils.getWidth() - 200;
		var gotoY:number = initY;
		enemy.command_in(3, gotoX, gotoY);
		return enemy;
	}

	private sortGameObjs():void {
        this.objectContainer.$children.sort(this.sortF);
    }

	private sortF(d1:BaseGameObject, d2:BaseGameObject):number {
        if (d1.y > d2.y) {
            return 1;
        } else if (d1.y < d2.y) {
            return -1;
        } else {
            return 0;
        }
    }

}