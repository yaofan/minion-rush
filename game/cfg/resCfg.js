var resCfg = cc.resCfg;
var jsRes = js.game;

resCfg["game"] = {
    ref : []//Base references for the project.
};

cc.gameModules = [jsRes.StartScene_js, jsRes.PlayScene_js];//Game modules

resCfg[jsRes.StartScene_js] = {
    //MyLayer.js is the reference of myApp.js.
    //myApp.js does not need to care about the implement of of MyLayer.js, including its resources and references.
    //What you need to care about is just the interface of MyLayer.js for others.
    ref : [jsRes.StartLayer_js]
};

resCfg[jsRes.StartLayer_js] = {
    res : [res.start_bg_png,res.start_n_png,res.start_s_png],//Resources to preLoad.
    ref : [jsRes.PlayScene_js],
    layer : "StartLayer",  //This is for test unit, others like "scene", "sprite" and so on.
    args : {}           //Arguments for "MyLayer.create" for example. Works only in test unit mode.
};

resCfg[jsRes.PlayScene_js] = {
    ref : [jsRes.BackgroundLayer_js, jsRes.AnimationLayer_js, jsRes.StatusLayer_js]
};

resCfg[jsRes.AnimationLayer_js] = {
    ref: []
}