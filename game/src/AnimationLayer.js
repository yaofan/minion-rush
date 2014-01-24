var AnimationLayer = cc.Layer.extend({
    minion: null,
    space: null,
    body: null,
    shape: null,
    ctor: function (space) {
        this._super();

        this.space = space;
        this.space.iterations = 60;
        this.space.gravity = cp.v(0, -500);
        this.space.sleepTimeThreshold = 0.5;
        this.space.collisionSlop = 0.5;
        this.space.sleepTimeThreshold = 0.5;
        this.init();
    },
    init: function () {
        this._super();

        this.minion = cc.Sprite.create();
        this.minion.setTextureRect(cc.rect(0, 0, 20, 20));
        this.minion.setColor(cc.YELLOW);
        this.addChild(this.minion);
        var contentSize = this.minion.getContentSize();

        this.body = new cp.Body(1, cp.momentForBox(1, contentSize.width, contentSize.height));
        this.body.p = cc.p(50, 50 + contentSize.height /2);
        this.body.applyImpulse(cp.v(150, 0), cp.v(0, 0));

        var rock = this.space.addBody(this.body);
        rock.setPos(cp.v(500, 100));
        rock.setAngle(1);
        shape = this.space.addShape(new cp.BoxShape(rock, contentSize.width, contentSize.height));
        shape.setFriction(0.3);
        shape.setElasticity(0.3);

        this.shape = new cp.BoxShape(this.body, contentSize.width, contentSize.height);
        this.space.addShape(this.shape);




        this.scheduleUpdate();

    },

    update: function (dt) {

    }
});