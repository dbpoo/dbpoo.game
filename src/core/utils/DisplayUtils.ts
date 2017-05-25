/**
 * 显示对象工具类
 */
class DisplayUtils extends BaseClass{
	public constructor() {
		super();
	}

	/**
	 * 创建一个Bitmap
     * @param resName resource.json中配置的name
     * @returns {egret.Bitmap}
	 */
	public createBitmap(resName:string):egret.Bitmap {
		let result:egret.Bitmap = new egret.Bitmap();
		let texture:egret.Texture = RES.getRes(resName);
		result.texture = texture;
		return result;
	}

	/**
	 * 创建一张GUI的图片
     * @param resName
     * @returns {egret.Bitmap}
	 */
	public createEuiImage(resName:string):eui.Image {
        let result:eui.Image = new eui.Image();
        let texture:egret.Texture = RES.getRes(resName);
        result.source = texture;
        return result;
    }

	/**
     * 从父级移除child
     * @param child
     */
    public removeFromParent(child:egret.DisplayObject) {
        if (child.parent == null)
            return;

        child.parent.removeChild(child);
    }

}