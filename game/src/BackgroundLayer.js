var BackgroundLayer = cc.Layer.extend({
    ctor: function () {
        this._super();

        this.init();
    },
    init: function () {
        this._super();

        var layerBg = cc.LayerColor.create(cc.c4b(255, 255, 255, 100));
        this.addChild(layerBg);
    }
});