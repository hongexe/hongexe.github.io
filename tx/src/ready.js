var ReadyLayer = cc.Layer.extend({
	readySprite:null,
	goSprite:null,

    init:function () {
        this._super();

        var tip1 = cc.Sprite.create("res/main/tip1.png");
        tip1.setPosition(320, 593);
        this.addChild(tip1);

        var tip2 = cc.Sprite.create("res/main/tip2.png");
        tip2.setPosition(511, 313);
        this.addChild(tip2);

        this.readySprite = cc.Sprite.create("res/main/ready.png");
        this.readySprite.setPosition(329, 653);
        this.readySprite.setVisible(false);
        this.readySprite.setScale(0);
        this.addChild(this.readySprite, 1);

        this.goSprite = cc.Sprite.create("res/main/go.png");
        this.goSprite.setPosition(319, 667);
        this.goSprite.setVisible(false);
        this.addChild(this.goSprite, 2);

        this.setAnchorPoint(0, 0);

        return true;
    }
});