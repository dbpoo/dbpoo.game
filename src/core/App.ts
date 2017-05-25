class App {

    /**
     * 模块管理类
     * @type {ControllerManager}
     */
    public static get ControllerManager():ControllerManager {
        return ControllerManager.getInstance();
    }

	/**
	 * ViewManager
	 */
	public static get ViewManager():ViewManager {
		return ViewManager.getInstance();
	}

    /**
     * 场景管理类
     * @type {SceneManager}
     */
    public static get SceneManager():SceneManager {
        return SceneManager.getInstance();
    }

    /**
     * 调试工具
     * @type {DebugUtils}
     */
    public static get DebugUtils():DebugUtils {
        return DebugUtils.getInstance();
    }

    /**
     * 统一的计时器和帧刷管理类
     * @type {TimerManager}
     */
    public static get TimerManager():TimerManager {
        return TimerManager.getInstance();
    }

	/**
	 * DisplayUtils
	 */
	public static get DisplayUtils():DisplayUtils {
		return DisplayUtils.getInstance();
	}

	/**
     * 数学计算工具类
     * @type {MathUtils}
     */
    public static get MathUtils():MathUtils {
        return MathUtils.getInstance();
    }

    /**
     * 随机数工具类
     * @type {RandomUtils}
     */
    public static get RandomUtils():RandomUtils {
        return RandomUtils.getInstance();
    }

    /**
     * 音乐管理类
     */
    public static get SoundManager():SoundManager {
        return SoundManager.getInstance();
    }

    /**
     * 通用Loading动画
     * @returns {any}
     * @constructor
     */
    public static get EasyLoading():EasyLoading {
        return EasyLoading.getInstance();
    }

	/**
     * Stage操作相关工具类
     */
    public static get StageUtils():StageUtils {
        return StageUtils.getInstance();
    }

	/**
     * 资源加载工具类
     */
    public static get ResourceUtils():ResourceUtils {
        return ResourceUtils.getInstance();
    }

    /**
     * DragonBones工厂类
     * @returns {any}
     * @constructor
     */
    public static get DragonBonesFactory():DragonBonesFactory {
        return DragonBonesFactory.getInstance();
    }

    /**
     * 初始化函数
     * @constructor
     */
    public static Init():void {
       
    }


}