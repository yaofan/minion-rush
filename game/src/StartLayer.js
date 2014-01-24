/****************************************************************************
 Copyright (c) 2010-2012 cocos2d-x.org
 Copyright (c) 2008-2010 Ricardo Quesada
 Copyright (c) 2011      Zynga Inc.

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/

var StartLayer = cc.Layer.extend({
    init: function () {
        this._super();

        Director = cc.Director.getInstance();
        WinSize = Director.getWinSize();
        PosCenter = cc.p(WinSize.width / 2, WinSize.height / 2);

        var layerBG = cc.LayerColor.create(cc.c4b(255, 255, 255, 255));
        this.addChild(layerBG);
        var spriteMinion = cc.Sprite.create(res.start_bg_png);
        spriteMinion.setPosition(PosCenter);

        this.addChild(spriteMinion);

        var StartBtn = cc.MenuItemSprite.create(cc.Sprite.create(res.start_n_png), cc.Sprite.create(res.start_s_png), this.startGame, this);
        StartBtn.setScale(0.5);
        var menu = cc.Menu.create(StartBtn);
        menu.setPosition(cc.p(WinSize.width - 80, WinSize.height - 30));
        this.addChild(menu);
    },
    startGame: function () {
        Director.replaceScene(new PlayScene());
    }
});

StartLayer.create = function(args){
    var layer = new StartLayer();
    layer.init();
    return layer;
};
