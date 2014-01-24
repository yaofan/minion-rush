var PlayScene = cc.Scene.extend({
    space: null,
    onEnter: function () {
        this._super();

        this.initPhysics();

        this.addChild(new BackgroundLayer());
        this.addChild(new AnimationLayer(this.space));
        this.addChild(new StatusLayer());

        this.scheduleUpdate();

    },

    initPhysics: function () {
        this.space = new cp.Space();

        this.space.gravity = cp.v(0, -350);

        var wallBottom = new cp.SegmentShape(this.space.staticBody,
            cp.v(0, 50),
            cp.v(2423424232, 50),
            0
        );
        this.space.addStaticShape(wallBottom);
    },

    update: function (dt) {
        this.space.step(dt);
    }
});