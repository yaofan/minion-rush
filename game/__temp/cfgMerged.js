var res = {
    start_bg_png : 'start_bg.png',
    start_n_png : 'start_n.png',
    start_s_png : 'start_s.png'
};
var js = js || {};
js.cocos2d_html5 = {
    CCActionManager_js : '../node_modules/cocos2d-html5/lib/CCActionManager.js',
    CCCamera_js : '../node_modules/cocos2d-html5/lib/CCCamera.js',
    CCConfiguration_js : '../node_modules/cocos2d-html5/lib/CCConfiguration.js',
    CCDirector_js : '../node_modules/cocos2d-html5/lib/CCDirector.js',
    CCDrawingPrimitives_js : '../node_modules/cocos2d-html5/lib/CCDrawingPrimitives.js',
    CCLoader_js : '../node_modules/cocos2d-html5/lib/CCLoader.js',
    CCScheduler_js : '../node_modules/cocos2d-html5/lib/CCScheduler.js',
    CCAtlasNode_js : '../node_modules/cocos2d-html5/lib/base_nodes/CCAtlasNode.js',
    CCNode_js : '../node_modules/cocos2d-html5/lib/base_nodes/CCNode.js',
    cc_js : '../node_modules/cocos2d-html5/lib/cc.js',
    cc4publish_js : '../node_modules/cocos2d-html5/lib/cc4publish.js',
    CCAffineTransform_js : '../node_modules/cocos2d-html5/lib/cocoa/CCAffineTransform.js',
    CCGeometry_js : '../node_modules/cocos2d-html5/lib/cocoa/CCGeometry.js',
    CCNS_js : '../node_modules/cocos2d-html5/lib/cocoa/CCNS.js',
    cocos2d_externs_js : '../node_modules/cocos2d-html5/lib/cocos2d_externs.js',
    CCLabelTTF_js : '../node_modules/cocos2d-html5/lib/labelTTF/CCLabelTTF.js',
    CCLayer_js : '../node_modules/cocos2d-html5/lib/layers_nodes/CCLayer.js',
    AppControl_js : '../node_modules/cocos2d-html5/lib/platform/AppControl.js',
    CCApplication_js : '../node_modules/cocos2d-html5/lib/platform/CCApplication.js',
    CCClass_js : '../node_modules/cocos2d-html5/lib/platform/CCClass.js',
    CCCommon_js : '../node_modules/cocos2d-html5/lib/platform/CCCommon.js',
    CCConfig_js : '../node_modules/cocos2d-html5/lib/platform/CCConfig.js',
    CCEGLView_js : '../node_modules/cocos2d-html5/lib/platform/CCEGLView.js',
    CCFileUtils_js : '../node_modules/cocos2d-html5/lib/platform/CCFileUtils.js',
    CCMacro_js : '../node_modules/cocos2d-html5/lib/platform/CCMacro.js',
    CCSAXParser_js : '../node_modules/cocos2d-html5/lib/platform/CCSAXParser.js',
    CCScreen_js : '../node_modules/cocos2d-html5/lib/platform/CCScreen.js',
    CCTypes_js : '../node_modules/cocos2d-html5/lib/platform/CCTypes.js',
    CCVisibleRect_js : '../node_modules/cocos2d-html5/lib/platform/CCVisibleRect.js',
    Sys_js : '../node_modules/cocos2d-html5/lib/platform/Sys.js',
    miniFramework_js : '../node_modules/cocos2d-html5/lib/platform/miniFramework.js',
    CCScene_js : '../node_modules/cocos2d-html5/lib/scenes_nodes/CCScene.js',
    CCAnimation_js : '../node_modules/cocos2d-html5/lib/sprite_nodes/CCAnimation.js',
    CCAnimationCache_js : '../node_modules/cocos2d-html5/lib/sprite_nodes/CCAnimationCache.js',
    CCSprite_js : '../node_modules/cocos2d-html5/lib/sprite_nodes/CCSprite.js',
    CCSpriteBatchNode_js : '../node_modules/cocos2d-html5/lib/sprite_nodes/CCSpriteBatchNode.js',
    CCSpriteFrame_js : '../node_modules/cocos2d-html5/lib/sprite_nodes/CCSpriteFrame.js',
    CCSpriteFrameCache_js : '../node_modules/cocos2d-html5/lib/sprite_nodes/CCSpriteFrameCache.js',
    CCPointExtension_js : '../node_modules/cocos2d-html5/lib/support/CCPointExtension.js',
    CCVertex_js : '../node_modules/cocos2d-html5/lib/support/CCVertex.js',
    TransformUtils_js : '../node_modules/cocos2d-html5/lib/support/TransformUtils.js',
    CCTexture2D_js : '../node_modules/cocos2d-html5/lib/textures/CCTexture2D.js',
    CCTextureAtlas_js : '../node_modules/cocos2d-html5/lib/textures/CCTextureAtlas.js',
    CCTextureCache_js : '../node_modules/cocos2d-html5/lib/textures/CCTextureCache.js',
    BoundingBoxTest_js : '../node_modules/cocos2d-html5/test/ccnode/BoundingBoxTest.js',
    CCNodeTest2_js : '../node_modules/cocos2d-html5/test/ccnode/CCNodeTest2.js',
    CCNodeTest6_js : '../node_modules/cocos2d-html5/test/ccnode/CCNodeTest6.js',
    LabelTTFA8Test_js : '../node_modules/cocos2d-html5/test/labelTTF/LabelTTFA8Test.js',
    LabelTTFAlignment_js : '../node_modules/cocos2d-html5/test/labelTTF/LabelTTFAlignment.js',
    LabelTTFChinese_js : '../node_modules/cocos2d-html5/test/labelTTF/LabelTTFChinese.js',
    LabelTTFMultiline_js : '../node_modules/cocos2d-html5/test/labelTTF/LabelTTFMultiline.js',
    IgnoreAnchorpointTest1_js : '../node_modules/cocos2d-html5/test/layers/IgnoreAnchorpointTest1.js',
    LayerGradientTest_js : '../node_modules/cocos2d-html5/test/layers/LayerGradientTest.js',
    LayerTest1_js : '../node_modules/cocos2d-html5/test/layers/LayerTest1.js',
    ScheduleUsingSchedulerTest_js : '../node_modules/cocos2d-html5/test/scheduler/ScheduleUsingSchedulerTest.js',
    SchedulerAutoremoveTest_js : '../node_modules/cocos2d-html5/test/scheduler/SchedulerAutoremoveTest.js',
    SchedulerPauseResumeTest_js : '../node_modules/cocos2d-html5/test/scheduler/SchedulerPauseResumeTest.js',
    SchedulerUnscheduleAllHardTest_js : '../node_modules/cocos2d-html5/test/scheduler/SchedulerUnscheduleAllHardTest.js',
    SchedulerUnscheduleAllTest_js : '../node_modules/cocos2d-html5/test/scheduler/SchedulerUnscheduleAllTest.js',
    SchedulerUpdateAndCustomTest_js : '../node_modules/cocos2d-html5/test/scheduler/SchedulerUpdateAndCustomTest.js',
    SchedulerUpdateTest_js : '../node_modules/cocos2d-html5/test/scheduler/SchedulerUpdateTest.js',
    Sprite1Test_js : '../node_modules/cocos2d-html5/test/sprite/Sprite1Test.js',
    SpriteBatchNode1Test_js : '../node_modules/cocos2d-html5/test/sprite/SpriteBatchNode1Test.js',
    SpriteColorOpacity_js : '../node_modules/cocos2d-html5/test/sprite/SpriteColorOpacity.js',
    SpriteNilTexture_js : '../node_modules/cocos2d-html5/test/sprite/SpriteNilTexture.js',
    SpriteZOrder_js : '../node_modules/cocos2d-html5/test/sprite/SpriteZOrder.js',
    TextureColorCacheIssue_js : '../node_modules/cocos2d-html5/test/sprite/TextureColorCacheIssue.js'
};
var cc = cc || {};
cc.resCfg = cc.resCfg || {};
var js = js || {};
var resCfg = cc.resCfg;
var jsRes = js.cocos2d_html5;
var TEST_BASE = "__testBase";

resCfg["cocos2d-html5"] = {
    ref : [//Base references for the project.
        jsRes.CCClass_js,
        jsRes.CCGeometry_js,
        jsRes.Sys_js,
        jsRes.CCConfig_js,
        jsRes.miniFramework_js,
        jsRes.CCCommon_js,
        jsRes.CCMacro_js,
        jsRes.CCFileUtils_js,
        jsRes.CCTypes_js,
        jsRes.CCEGLView_js,
        jsRes.CCScreen_js,
        jsRes.CCVisibleRect_js,
        jsRes.CCNS_js,
        jsRes.CCAffineTransform_js,
        jsRes.CCPointExtension_js,
        jsRes.CCVertex_js,
        jsRes.TransformUtils_js,
        jsRes.CCNode_js,
        jsRes.CCAtlasNode_js,
        jsRes.CCTexture2D_js,
        jsRes.CCTextureCache_js,
        jsRes.CCTextureAtlas_js,
        jsRes.CCScene_js,
        jsRes.CCLayer_js,
        jsRes.CCSprite_js,
        jsRes.CCAnimation_js,
        jsRes.CCAnimationCache_js,
        jsRes.CCSpriteFrame_js,
        jsRes.CCSpriteFrameCache_js,
        jsRes.CCSpriteBatchNode_js,
        jsRes.CCConfiguration_js,
        jsRes.CCDirector_js,
        jsRes.CCCamera_js,
        jsRes.CCScheduler_js,
        jsRes.CCLoader_js,
        jsRes.CCDrawingPrimitives_js,
        jsRes.CCApplication_js,
        jsRes.CCSAXParser_js,
        jsRes.AppControl_js,
        jsRes.CCLabelTTF_js,
        jsRes.CCActionManager_js
    ]
};

resCfg[TEST_BASE] = {res : [res.grossini_dance_atlas_png, res.grossinis_sister1_png, res.grossinis_sister2_png, res.grossini_png,
    res.tcc_issue_1_png, res.tcc_issue_1_plist, res.tcc_issue_2_png, res.tcc_issue_2_plist]};

cc.gameModules = [ jsRes.CCNodeTest2_js, jsRes.CCNodeTest6_js, jsRes.BoundingBoxTest_js,
    //--- cc.node tests end
    jsRes.Sprite1Test_js, jsRes.SpriteBatchNode1Test_js, jsRes.SpriteColorOpacity_js, jsRes.SpriteZOrder_js, jsRes.SpriteNilTexture_js, jsRes.TextureColorCacheIssue_js,
    //--- cc.Sprite tests end
    jsRes.SchedulerAutoremoveTest_js, jsRes.SchedulerPauseResumeTest_js, jsRes.SchedulerUnscheduleAllTest_js, jsRes.SchedulerUnscheduleAllHardTest_js,
    jsRes.SchedulerUpdateTest_js, jsRes.SchedulerUpdateAndCustomTest_js, jsRes.ScheduleUsingSchedulerTest_js,
    //--- cc.Scheduler tests end
    jsRes.LayerTest1_js, jsRes.IgnoreAnchorpointTest1_js, jsRes.LayerGradientTest_js,
    //--- Layer tests end
    jsRes.LabelTTFMultiline_js, jsRes.LabelTTFChinese_js, jsRes.LabelTTFA8Test_js, jsRes.LabelTTFAlignment_js
    //--- LabelTTF tests end
];

resCfg[jsRes.Sprite1Test_js] = { layer : "Sprite1Test", title : "Non Batched Sprite" };
resCfg[jsRes.SpriteBatchNode1Test_js] = { layer : "SpriteBatchNode1Test", title : "Batched Sprite" };
resCfg[jsRes.SpriteColorOpacity_js] = { layer : "SpriteColorOpacity", title : "Sprite: Color & Opacity" };
resCfg[jsRes.SpriteZOrder_js] = { layer : "SpriteZOrder", title : "Sprite: Z order" };
resCfg[jsRes.SpriteNilTexture_js] = { layer : "SpriteNilTexture", title : "Sprite without texture -- [opacity and color should work]" };
resCfg[jsRes.TextureColorCacheIssue_js] = { layer : "TextureColorCacheIssue", title : "Texture Color Cache Issue Test -- [You should see two different sprites colored green and blue]" };

resCfg[jsRes.CCNodeTest2_js] = { layer : "CCNodeTest2", title : "anchorPoint and children" };
resCfg[jsRes.CCNodeTest6_js] = { layer : "CCNodeTest6", title : "remove/cleanup with children" };
resCfg[jsRes.BoundingBoxTest_js] = { layer : "BoundingBoxTest", title : "Bounding Box Test -- [Testing getBoundingBox(). See console]" };

resCfg[jsRes.SchedulerAutoremoveTest_js] = { layer : "SchedulerAutoremoveTest", title : "Self-remove an scheduler -- [1 scheduler will be auto Removed in 3 seconds. See console]" };
resCfg[jsRes.SchedulerPauseResumeTest_js] = { layer : "SchedulerPauseResumeTest", title : "Pause / Resume -- [Scheduler should be paused after 3 seconds. See console]" };
resCfg[jsRes.SchedulerUnscheduleAllTest_js] = { layer : "SchedulerUnscheduleAllTest", title : "Unschedule All callbacks -- [All scheduled callbacks will be unscheduled in 4 seconds. See console]" };
resCfg[jsRes.SchedulerUnscheduleAllHardTest_js] = { layer : "SchedulerUnscheduleAllHardTest", title : "Unschedule All callbacks #2 -- [Unschedules all callbacks after 4s. Uses CCScheduler. See console]" };
resCfg[jsRes.SchedulerUpdateTest_js] = { layer : "SchedulerUpdateTest", title : "Schedule update with priority -- [3 scheduled updates. Priority should work. Stops in 4s. See console]" };
resCfg[jsRes.SchedulerUpdateAndCustomTest_js] = { layer : "SchedulerUpdateAndCustomTest", title : "Schedule Update + custom callback -- [Update + custom callback at the same time. Stops in 4s. See console]" };
resCfg[jsRes.ScheduleUsingSchedulerTest_js] = { layer : "ScheduleUsingSchedulerTest", title : "Schedule / Unschedule using Scheduler -- [After 5 seconds all callbacks should be removed]" };

resCfg[jsRes.LayerTest1_js] = { layer : "LayerTest1", title : "ColorLayer resize" };
resCfg[jsRes.IgnoreAnchorpointTest1_js] = { layer : "IgnoreAnchorpointTest1", title : "ignore Anchorpoint Test #1 -- [red:true  green:true]" };
resCfg[jsRes.LayerGradientTest_js] = { layer : "LayerGradientTest", title : "LayerGradient Test" };

resCfg[jsRes.LabelTTFMultiline_js] = { layer : "LabelTTFMultiline", title : "Testing cc.LabelTTF Word Wrap" };
resCfg[jsRes.LabelTTFChinese_js] = { layer : "LabelTTFChinese", title : "Testing cc.LabelTTF with Chinese character" };
resCfg[jsRes.LabelTTFA8Test_js] = { layer : "LabelTTFA8Test", title : "Testing A8 Format" };
resCfg[jsRes.LabelTTFAlignment_js] = { layer : "LabelTTFAlignment", title : "cc.LabelTTF alignment" };
exports.res = res;
exports.resCfg = resCfg;
exports.gameModules = cc.gameModules;
exports.jsRes = js;
var js = js || {};
js.cctouch = {
    CCMouseDispatcher_js : '../node_modules/cctouch/lib/CCMouseDispatcher.js',
    CCTouchDelegateProtocol_js : '../node_modules/cctouch/lib/CCTouchDelegateProtocol.js',
    CCTouchDispatcher_js : '../node_modules/cctouch/lib/CCTouchDispatcher.js',
    CCTouchHandler_js : '../node_modules/cctouch/lib/CCTouchHandler.js',
    MouseTest_js : '../node_modules/cctouch/test/MouseTest.js',
    TouchAllAtOnce_js : '../node_modules/cctouch/test/TouchAllAtOnce.js',
    TouchOneByOneTest_js : '../node_modules/cctouch/test/TouchOneByOneTest.js'
};
var resCfg = cc.resCfg;
var jsRes = js.cctouch;

resCfg["cctouch"] = {
    ref : [
        jsRes.CCTouchDelegateProtocol_js,
        jsRes.CCTouchHandler_js,
        jsRes.CCTouchDispatcher_js,
        jsRes.CCMouseDispatcher_js
    ]//Base references for the project.
};

resCfg[TEST_BASE] = {res: [res.r2_png]};

cc.gameModules = [jsRes.TouchOneByOneTest_js, jsRes.TouchAllAtOnce_js, jsRes.MouseTest_js];

resCfg[jsRes.TouchOneByOneTest_js] = { layer : "TouchOneByOneTest", title : "Touches One by One. Touch the left / right and see console" };
resCfg[jsRes.TouchAllAtOnce_js] = { layer : "TouchAllAtOnce", title : "Touches All At Once. Touch and see console" };
resCfg[jsRes.MouseTest_js] = { layer : "MouseTest", title : "Mouse test. Move mouse and see console" };
exports.res = res;
exports.resCfg = resCfg;
exports.gameModules = cc.gameModules;
exports.jsRes = js;
var js = js || {};
js.ccactions = {
    CCAction_js : '../node_modules/ccactions/lib/CCAction.js',
    CCActionCamera_js : '../node_modules/ccactions/lib/CCActionCamera.js',
    CCActionCatmullRom_js : '../node_modules/ccactions/lib/CCActionCatmullRom.js',
    CCActionEase_js : '../node_modules/ccactions/lib/CCActionEase.js',
    CCActionInstant_js : '../node_modules/ccactions/lib/CCActionInstant.js',
    CCActionInterval_js : '../node_modules/ccactions/lib/CCActionInterval.js',
    CCActionTween_js : '../node_modules/ccactions/lib/CCActionTween.js',
    ActionAnimateTest_js : '../node_modules/ccactions/test/ActionAnimateTest.js',
    ActionBezierTest_js : '../node_modules/ccactions/test/ActionBezierTest.js',
    ActionBezierToCopyTest_js : '../node_modules/ccactions/test/ActionBezierToCopyTest.js',
    ActionBlinkTest_js : '../node_modules/ccactions/test/ActionBlinkTest.js',
    ActionFadeTest_js : '../node_modules/ccactions/test/ActionFadeTest.js',
    ActionJumpTest_js : '../node_modules/ccactions/test/ActionJumpTest.js',
    ActionManualTest_js : '../node_modules/ccactions/test/ActionManualTest.js',
    ActionMoveTest_js : '../node_modules/ccactions/test/ActionMoveTest.js',
    ActionRotateTest_js : '../node_modules/ccactions/test/ActionRotateTest.js',
    ActionRotateXY_js : '../node_modules/ccactions/test/ActionRotateXY.js',
    ActionScaleTest_js : '../node_modules/ccactions/test/ActionScaleTest.js',
    ActionSequence2Test_js : '../node_modules/ccactions/test/ActionSequence2Test.js',
    ActionSequenceTest_js : '../node_modules/ccactions/test/ActionSequenceTest.js',
    ActionSkewRotateScaleTest_js : '../node_modules/ccactions/test/ActionSkewRotateScaleTest.js',
    ActionSkewTest_js : '../node_modules/ccactions/test/ActionSkewTest.js',
    ActionTintTest_js : '../node_modules/ccactions/test/ActionTintTest.js',
    Issue1008Test_js : '../node_modules/ccactions/test/Issue1008Test.js'
};
var resCfg = cc.resCfg;
var jsRes = js.ccactions;

resCfg["ccactions"] = {
    ref : [
        jsRes.CCAction_js,
        jsRes.CCActionInterval_js,
        jsRes.CCActionInstant_js,
        jsRes.CCActionCamera_js,
        jsRes.CCActionEase_js,
        jsRes.CCActionCatmullRom_js,
        jsRes.CCActionTween_js
    ]//Base references for the project.
};

resCfg[TEST_BASE] = {
    res : [
        res.grossini_png,
        res.grossinis_sister1_png,
        res.grossinis_sister2_png,
        res.grossini_dance_1_png,
        res.grossini_dance_2_png,
        res.grossini_dance_3_png,
        res.grossini_dance_4_png,
        res.grossini_dance_5_png,
        res.grossini_dance_6_png,
        res.grossini_dance_7_png,
        res.grossini_dance_8_png,
        res.grossini_dance_9_png,
        res.grossini_dance_10_png,
        res.grossini_dance_11_png,
        res.grossini_dance_12_png,
        res.grossini_dance_13_png,
        res.grossini_dance_14_png,
        res.animations_2_plist,
        res.grossini_dance_png,
        res.grossini_dance_plist,
        res.grossini_blue_png,
        res.grossini_blue_plist,
        res.grossini_family_png,
        res.grossini_family_plist
    ]
};

cc.gameModules = [
    jsRes.ActionManualTest_js, jsRes.ActionMoveTest_js, jsRes.ActionScaleTest_js, jsRes.ActionRotateTest_js,
    jsRes.ActionRotateXY_js, jsRes.ActionSkewTest_js, jsRes.ActionSkewRotateScaleTest_js, jsRes.ActionJumpTest_js,
    jsRes.ActionBezierTest_js, jsRes.ActionBezierToCopyTest_js, jsRes.Issue1008Test_js, jsRes.ActionBlinkTest_js,
    jsRes.ActionFadeTest_js, jsRes.ActionTintTest_js, jsRes.ActionAnimateTest_js, jsRes.ActionSequenceTest_js,
    jsRes.ActionSequence2Test_js
];

resCfg[jsRes.ActionManualTest_js] = {layer : "ActionManualTest", title : "Sprite properties", subTitle : "Manual Transformation"}
resCfg[jsRes.ActionMoveTest_js] = {layer : "ActionMoveTest", title : "cc.MoveTo / cc.MoveBy"}
resCfg[jsRes.ActionScaleTest_js] = {layer : "ActionScaleTest", title : "cc.ScaleTo / cc.ScaleBy"}
resCfg[jsRes.ActionRotateTest_js] = {layer : "ActionRotateTest", title : "cc.RotateTo / cc.RotateBy"}
resCfg[jsRes.ActionRotateXY_js] = {layer : "ActionRotateXY", title : "cc.RotateBy(x,y) / cc.RotateTo(x,y)"}
resCfg[jsRes.ActionSkewTest_js] = {layer : "ActionSkewTest", title : "cc.SkewTo / cc.SkewBy"}
resCfg[jsRes.ActionSkewRotateScaleTest_js] = {layer : "ActionSkewRotateScaleTest", title : "Skew + Rotate + Scale"}
resCfg[jsRes.ActionJumpTest_js] = {layer : "ActionJumpTest", title : "cc.JumpTo / cc.JumpBy", subTitle : "Actions will stop for 0.25s after 2 seconds"}
resCfg[jsRes.ActionBezierTest_js] = {layer : "ActionBezierTest", title : "cc.BezierBy / cc.BezierTo"}
resCfg[jsRes.ActionBezierToCopyTest_js] = {layer : "ActionBezierToCopyTest", title : "cc.BezierTo copy test", subTitle : "Both sprites should move across the same path"}
resCfg[jsRes.Issue1008Test_js] = {layer : "Issue1008Test", title : "Issue 1008", subTitle : "cc.BezierTo + Repeat. See console"}
resCfg[jsRes.ActionBlinkTest_js] = {layer : "ActionBlinkTest", title : "cc.Blink"}
resCfg[jsRes.ActionFadeTest_js] = {layer : "ActionFadeTest", title : "cc.FadeIn / cc.FadeOut"}
resCfg[jsRes.ActionTintTest_js] = {layer : "ActionTintTest", title : "cc.TintTo / cc.TintBy"}
resCfg[jsRes.ActionAnimateTest_js] = {layer : "ActionAnimateTest", title : "Animation Test", subTitle : "Center: Manual animation. Border: using file format animation"}
resCfg[jsRes.ActionSequenceTest_js] = {layer : "ActionSequenceTest", title : "cc.Sequence: Move + Rotate"}
resCfg[jsRes.ActionSequence2Test_js] = {layer : "ActionSequence2Test", title : "Sequence of InstantActions"}
exports.res = res;
exports.resCfg = resCfg;
exports.gameModules = cc.gameModules;
exports.jsRes = js;
var js = js || {};
js.ccmenu = {
    CCMenu_js : '../node_modules/ccmenu/lib/CCMenu.js',
    CCMenuItem_js : '../node_modules/ccmenu/lib/CCMenuItem.js',
    MenuTest_js : '../node_modules/ccmenu/test/MenuTest.js'
};
var resCfg = cc.resCfg;
var jsRes = js.ccmenu;

resCfg["ccmenu"] = {
    ref : [
        jsRes.CCMenuItem_js,
        jsRes.CCMenu_js
    ]//Base references for the project.
};

resCfg[TEST_BASE] = {res : [res.menuitemsprite_png, res.SendScoreButtonPressed_png, res.SendScoreButton_png]};

cc.gameModules = [jsRes.MenuTest_js];

resCfg[jsRes.MenuTest_js] = { layer : "MenuTest", title : "Menu Test" }
exports.res = res;
exports.resCfg = resCfg;
exports.gameModules = cc.gameModules;
exports.jsRes = js;
var js = js || {};
js.cclabel = {
    CCLabelAtlas_js : '../node_modules/cclabel/lib/CCLabelAtlas.js',
    CCLabelBMFont_js : '../node_modules/cclabel/lib/CCLabelBMFont.js',
    BMFontTest_js : '../node_modules/cclabel/test/BMFontTest.js',
    LabelAtlasTest_js : '../node_modules/cclabel/test/LabelAtlasTest.js'
};
var resCfg = cc.resCfg;
var jsRes = js.cclabel;

resCfg["cclabel"] = {
    ref : [
        jsRes.CCLabelAtlas_js,
        jsRes.CCLabelBMFont_js
    ]//Base references for the project.
};

resCfg[TEST_BASE] = {res : [res.markerFelt_fnt, res.markerFelt_png, res.tuffy_bold_italic_charmap_png]};

cc.gameModules = [jsRes.LabelAtlasTest_js, jsRes.BMFontTest_js];

resCfg[jsRes.LabelAtlasTest_js] = { layer : "LabelAtlasTest", title : "Label Atlas Test"};
resCfg[jsRes.BMFontTest_js] = { layer : "BMFontTest", title : "Label BMFont Test"}
exports.res = res;
exports.resCfg = resCfg;
exports.gameModules = cc.gameModules;
exports.jsRes = js;
var js = js || {};
js.ccchipmunk = {
    chipmunk_js : '../node_modules/ccchipmunk/lib/chipmunk.js',
    ChipmunkTest_js : '../node_modules/ccchipmunk/test/ChipmunkTest.js'
};
var resCfg = cc.resCfg;
var jsRes = js.ccchipmunk;

resCfg["ccchipmunk"] = {
    ref : [
        jsRes.chipmunk_js
    ]//Base references for the project.
};

resCfg[TEST_BASE] = {res : [res.grossini_png]};

cc.gameModules = [jsRes.ChipmunkTest_js];

resCfg[jsRes.ChipmunkTest_js] = {layer : "ChipmunkTest", title : "Chipmunk Test"}
exports.res = res;
exports.resCfg = resCfg;
exports.gameModules = cc.gameModules;
exports.jsRes = js;
var js = js || {};
js.ccshapenode = {
    CCDrawNode_js : '../node_modules/ccshapenode/lib/CCDrawNode.js',
    ShapeNodeTest_js : '../node_modules/ccshapenode/test/ShapeNodeTest.js'
};
var resCfg = cc.resCfg;
var jsRes = js.ccshapenode;

resCfg["ccshapenode"] = {
    ref : [
        jsRes.CCDrawNode_js
    ]//Base references for the project.
};

cc.gameModules = [jsRes.ShapeNodeTest_js];

resCfg[jsRes.ShapeNodeTest_js] = { layer : "ShapeNodeTest", title : "ShapeNodeTest" }

exports.res = res;
exports.resCfg = resCfg;
exports.gameModules = cc.gameModules;
exports.jsRes = js;
var js = js || {};
js.ccbox2d = {
    box2d_js : '../node_modules/ccbox2d/lib/box2d.js',
    Box2DTest_js : '../node_modules/ccbox2d/test/Box2DTest.js'
};
var resCfg = cc.resCfg;
var jsRes = js.ccbox2d;

resCfg["ccbox2d"] = {
    ref : [
        jsRes.box2d_js
    ]//Base references for the project.
};

resCfg[TEST_BASE] = {res : [res.blocks_png]};

cc.gameModules = [jsRes.Box2DTest_js];

resCfg[jsRes.Box2DTest_js] = {layer : "Box2DTest", title : "Box2D Test"}
exports.res = res;
exports.resCfg = resCfg;
exports.gameModules = cc.gameModules;
exports.jsRes = js;
var js = js || {};
js.ccphysics = {
    CCPhysicsDebugNode_js : '../node_modules/ccphysics/lib/CCPhysicsDebugNode.js',
    CCPhysicsSprite_js : '../node_modules/ccphysics/lib/CCPhysicsSprite.js',
    PhysicsSpriteTest_js : '../node_modules/ccphysics/test/PhysicsSpriteTest.js'
};
var resCfg = cc.resCfg;
var jsRes = js.ccphysics;

resCfg["ccphysics"] = {
    ref : [
        jsRes.CCPhysicsSprite_js,
        jsRes.CCPhysicsDebugNode_js
    ]//Base references for the project.
};
resCfg[TEST_BASE] = {res : [res.Icon_png]};
cc.gameModules = [jsRes.PhysicsSpriteTest_js];

resCfg[jsRes.PhysicsSpriteTest_js] = { layer : "PhysicsSprite", title : "PhysicsSprite" }
exports.res = res;
exports.resCfg = resCfg;
exports.gameModules = cc.gameModules;
exports.jsRes = js;
var js = js || {};
js.cccliping = {
    CCClippingNode_js : '../node_modules/cccliping/lib/CCClippingNode.js',
    ScrollViewTest_js : '../node_modules/cccliping/test/ScrollViewTest.js',
    SpriteStencilTest_js : '../node_modules/cccliping/test/SpriteStencilTest.js',
    TriangleStencilTest_js : '../node_modules/cccliping/test/TriangleStencilTest.js'
};
var resCfg = cc.resCfg;
var jsRes = js.cccliping;

resCfg["cccliping"] = {
    ref : [
        jsRes.CCClippingNode_js
    ]//Base references for the project.
};

resCfg[TEST_BASE] = {
    res : [res.background2_png]
};

cc.gameModules = [jsRes.ScrollViewTest_js, jsRes.TriangleStencilTest_js, jsRes.SpriteStencilTest_js];

resCfg[jsRes.ScrollViewTest_js] = { layer : "ScrollViewTest", title : "Clipping node", subTitle : "with image scrolling in a rectangle stencil" };
resCfg[jsRes.TriangleStencilTest_js] = { layer : "TriangleStencilTest", title : "Clipping node", subTitle : "with triangle stencil and sprite content" };
resCfg[jsRes.SpriteStencilTest_js] = { layer : "SpriteStencilTest", title : "Clipping node", subTitle : "with sprite stencil and a green triangle as content" };
exports.res = res;
exports.resCfg = resCfg;
exports.gameModules = cc.gameModules;
exports.jsRes = js;
var js = js || {};
js.ccrendertexture = {
    CCRenderTexture_js : '../node_modules/ccrendertexture/lib/CCRenderTexture.js',
    RenderTextureTest_js : '../node_modules/ccrendertexture/test/RenderTextureTest.js'
};
var resCfg = cc.resCfg;
var jsRes = js.ccrendertexture;

resCfg["ccrendertexture"] = {
    ref : [
        jsRes.CCRenderTexture_js
    ]//Base references for the project.
};
resCfg[TEST_BASE] = {res : [res.fire_png]};
cc.gameModules = [jsRes.RenderTextureTest_js];

resCfg[jsRes.RenderTextureTest_js] = { layer : "RenderTextureTest", title : "RenderTextureTest" }
exports.res = res;
exports.resCfg = resCfg;
exports.gameModules = cc.gameModules;
exports.jsRes = js;
var js = js || {};
js.ccprogress = {
    CCActionProgressTimer_js : '../node_modules/ccprogress/lib/CCActionProgressTimer.js',
    CCProgressTimer_js : '../node_modules/ccprogress/lib/CCProgressTimer.js',
    ProgressTimerBarMidTest_js : '../node_modules/ccprogress/test/ProgressTimerBarMidTest.js',
    ProgressTimerBarMidTest2_js : '../node_modules/ccprogress/test/ProgressTimerBarMidTest2.js',
    ProgressTimerHorizontalTest_js : '../node_modules/ccprogress/test/ProgressTimerHorizontalTest.js',
    ProgressTimerRadialTest_js : '../node_modules/ccprogress/test/ProgressTimerRadialTest.js',
    ProgressTimerVerticalTest_js : '../node_modules/ccprogress/test/ProgressTimerVerticalTest.js'
};
var resCfg = cc.resCfg;
var jsRes = js.ccprogress;

resCfg["ccprogress"] = {
    ref : [
        jsRes.CCProgressTimer_js,
        jsRes.CCActionProgressTimer_js
    ]//Base references for the project.
};
resCfg[TEST_BASE] = {res : [res.powered_png]};
cc.gameModules = [jsRes.ProgressTimerRadialTest_js,jsRes.ProgressTimerHorizontalTest_js,jsRes.ProgressTimerVerticalTest_js,jsRes.ProgressTimerBarMidTest_js,jsRes.ProgressTimerBarMidTest2_js];

resCfg[jsRes.ProgressTimerRadialTest_js] = { layer : "ProgressTimerRadial", title : "ProgressTimerRadial" }
resCfg[jsRes.ProgressTimerHorizontalTest_js] = { layer : "ProgressTimerHorizontal", title : "ProgressTimerHorizontal" }
resCfg[jsRes.ProgressTimerVerticalTest_js] = { layer : "ProgressTimerVertical", title : "ProgressTimerVertical" }
resCfg[jsRes.ProgressTimerBarMidTest_js] = { layer : "ProgressTimerBarMid", title : "ProgressTimerBarMid" }
resCfg[jsRes.ProgressTimerBarMidTest2_js] = { layer : "ProgressTimerBarMid2", title : "ProgressTimerBarMid2" }
exports.res = res;
exports.resCfg = resCfg;
exports.gameModules = cc.gameModules;
exports.jsRes = js;
var js = js || {};
js.ccgui = {
    CCControl_js : '../node_modules/ccgui/lib/CCControlExtension/CCControl.js',
    CCControlButton_js : '../node_modules/ccgui/lib/CCControlExtension/CCControlButton.js',
    CCControlColourPicker_js : '../node_modules/ccgui/lib/CCControlExtension/CCControlColourPicker.js',
    CCControlHuePicker_js : '../node_modules/ccgui/lib/CCControlExtension/CCControlHuePicker.js',
    CCControlPotentiometer_js : '../node_modules/ccgui/lib/CCControlExtension/CCControlPotentiometer.js',
    CCControlSaturationBrightnessPicker_js : '../node_modules/ccgui/lib/CCControlExtension/CCControlSaturationBrightnessPicker.js',
    CCControlSlider_js : '../node_modules/ccgui/lib/CCControlExtension/CCControlSlider.js',
    CCControlStepper_js : '../node_modules/ccgui/lib/CCControlExtension/CCControlStepper.js',
    CCControlSwitch_js : '../node_modules/ccgui/lib/CCControlExtension/CCControlSwitch.js',
    CCControlUtils_js : '../node_modules/ccgui/lib/CCControlExtension/CCControlUtils.js',
    CCInvocation_js : '../node_modules/ccgui/lib/CCControlExtension/CCInvocation.js',
    CCMenuPassive_js : '../node_modules/ccgui/lib/CCControlExtension/CCMenuPassive.js',
    CCScale9Sprite_js : '../node_modules/ccgui/lib/CCControlExtension/CCScale9Sprite.js',
    CCScrollView_js : '../node_modules/ccgui/lib/CCScrollView/CCScrollView.js',
    CCSorting_js : '../node_modules/ccgui/lib/CCScrollView/CCSorting.js',
    CCTableView_js : '../node_modules/ccgui/lib/CCScrollView/CCTableView.js',
    ButtonEventTest_js : '../node_modules/ccgui/test/ButtonEventTest.js',
    ButtonStylingTest_js : '../node_modules/ccgui/test/ButtonStylingTest.js',
    ColorPickerTest_js : '../node_modules/ccgui/test/ColorPickerTest.js',
    ControlSliderTest_js : '../node_modules/ccgui/test/ControlSliderTest.js',
    GuiTest_js : '../node_modules/ccgui/test/GuiTest.js',
    PotentiometerTest_js : '../node_modules/ccgui/test/PotentiometerTest.js',
    S9SpriteFromBatchNodeTest_js : '../node_modules/ccgui/test/S9SpriteFromBatchNodeTest.js',
    S9SpriteFromSpriteSheetTest_js : '../node_modules/ccgui/test/S9SpriteFromSpriteSheetTest.js',
    StepperTest_js : '../node_modules/ccgui/test/StepperTest.js',
    SwitchButtonTest_js : '../node_modules/ccgui/test/SwitchButtonTest.js',
    TableViewTest_js : '../node_modules/ccgui/test/TableViewTest.js',
    VariableSizeButtonsTest_js : '../node_modules/ccgui/test/VariableSizeButtonsTest.js'
};
var resCfg = cc.resCfg;
var jsRes = js.ccgui;

resCfg["ccgui"] = {
    ref : [
        jsRes.CCControl_js,
        jsRes.CCControlButton_js,
        jsRes.CCControlUtils_js,
        jsRes.CCInvocation_js,
        jsRes.CCScale9Sprite_js,
        jsRes.CCMenuPassive_js,
        jsRes.CCControlSaturationBrightnessPicker_js,
        jsRes.CCControlHuePicker_js,
        jsRes.CCControlColourPicker_js,
        jsRes.CCControlSlider_js,
        jsRes.CCControlSwitch_js,
        jsRes.CCControlStepper_js,
        jsRes.CCControlPotentiometer_js,
        jsRes.CCScrollView_js,
        jsRes.CCSorting_js,
        jsRes.CCTableView_js
    ]//Base references for the project.
};

resCfg[TEST_BASE] = {
    ref: [jsRes.GuiTest_js],
    res: [
        res.background_png,
        res.sliderProgress_png,
        res.sliderThumb_png,
        res.sliderTrack_png,
        res.CCControlColourPickerSpriteSheet_plist,
        res.CCControlColourPickerSpriteSheet_png,
        res.buttonBackground_png,
        res.switch_mask_png,
        res.switch_off_png,
        res.switch_on_png,
        res.switch_thumb_png,
        res.potentiometerButton_png,
        res.potentiometerProgress_png,
        res.potentiometerTrack_png,
        res.stepper_minus_png,
        res.stepper_plus_png,
        res.button_png,
        res.buttonHighlighted_png,
        res.blocks9_png,
        res.blocks9ss_png,
        res.blocks9ss_plist
    ]
};

cc.gameModules = [
    jsRes.ControlSliderTest_js,
    jsRes.ColorPickerTest_js,
    jsRes.SwitchButtonTest_js,
    jsRes.PotentiometerTest_js,
    jsRes.StepperTest_js,
    jsRes.VariableSizeButtonsTest_js,
    jsRes.ButtonEventTest_js,
    jsRes.ButtonStylingTest_js,
    jsRes.S9SpriteFromSpriteSheetTest_js,
    jsRes.S9SpriteFromBatchNodeTest_js,
    jsRes.TableViewTest_js
];

resCfg[jsRes.ControlSliderTest_js] = { layer : "ControlSliderTest", title : "GUI Slider" };
resCfg[jsRes.ColorPickerTest_js] = { layer : "ColorPickerTest", title : "GUI Color Picker" };
resCfg[jsRes.SwitchButtonTest_js] = { layer : "SwitchButtonTest", title : "GUI Switch Button" };
resCfg[jsRes.PotentiometerTest_js] = { layer : "PotentiometerTest", title : "GUI Potentiometer" };
resCfg[jsRes.StepperTest_js] = { layer : "StepperTest", title : "GUI Stepper" };
resCfg[jsRes.VariableSizeButtonsTest_js] = { layer : "VariableSizeButtonsTest", title : "GUI Various Sized Buttons" };
resCfg[jsRes.ButtonEventTest_js] = { layer : "ButtonEventTest", title : "GUI Button Events" };
resCfg[jsRes.ButtonStylingTest_js] = { layer : "ButtonStylingTest", title : "GUI Button Styling" };
resCfg[jsRes.S9SpriteFromSpriteSheetTest_js] = { layer : "S9SpriteFromSpriteSheetTest", title : "GUI Scale9Sprite", subTitle: "Loaded from sprite sheet (stored rotated)" };
resCfg[jsRes.S9SpriteFromBatchNodeTest_js] = { layer : "S9SpriteFromBatchNodeTest", title : "GUI Scale9Sprite", subTitle: "Created empty and updated from sprite batch node" };
resCfg[jsRes.TableViewTest_js] = { layer : "TableViewTest", title : "GUI Table View" };
exports.res = res;
exports.resCfg = resCfg;
exports.gameModules = cc.gameModules;
exports.jsRes = js;
var js = js || {};
js.cctextinput = {
    CCIMEDispatcher_js : '../node_modules/cctextinput/lib/CCIMEDispatcher.js',
    CCTextFieldTTF_js : '../node_modules/cctextinput/lib/CCTextFieldTTF.js',
    TextFieldTTFDefaultTest_js : '../node_modules/cctextinput/test/TextFieldTTFDefaultTest.js'
};
var resCfg = cc.resCfg;
var jsRes = js.cctextinput;


resCfg["cctextinput"] = {
    ref : [
        jsRes.CCIMEDispatcher_js,
        jsRes.CCTextFieldTTF_js
    ]//Base references for the project.
};

cc.gameModules = [jsRes.TextFieldTTFDefaultTest_js];

resCfg[jsRes.TextFieldTTFDefaultTest_js] = { layer : "TextFieldTTFDefaultTest", title : "TextFieldTTF Default Test" }
exports.res = res;
exports.resCfg = resCfg;
exports.gameModules = cc.gameModules;
exports.jsRes = js;
var js = js || {};
js.cccompress = {
    ZipUtils_js : '../node_modules/cccompress/lib/ZipUtils.js',
    base64_js : '../node_modules/cccompress/lib/base64.js',
    gzip_js : '../node_modules/cccompress/lib/gzip.js',
    zlib_min_js : '../node_modules/cccompress/lib/zlib.min.js',
    CompressTest_js : '../node_modules/cccompress/test/CompressTest.js'
};
var resCfg = cc.resCfg;
var jsRes = js.cccompress;

resCfg["cccompress"] = {
    ref : [
        jsRes.ZipUtils_js,
        jsRes.base64_js,
        jsRes.gzip_js,
        jsRes.zlib_min_js
    ]//Base references for the project.
};

cc.gameModules = [jsRes.CompressTest_js];

resCfg[jsRes.CompressTest_js] = {layer : "CompressTest", title : "Compress Test"}
exports.res = res;
exports.resCfg = resCfg;
exports.gameModules = cc.gameModules;
exports.jsRes = js;
var js = js || {};
js.cctilemap = {
    CCTGAlib_js : '../node_modules/cctilemap/lib/CCTGAlib.js',
    CCTMXLayer_js : '../node_modules/cctilemap/lib/CCTMXLayer.js',
    CCTMXObjectGroup_js : '../node_modules/cctilemap/lib/CCTMXObjectGroup.js',
    CCTMXTiledMap_js : '../node_modules/cctilemap/lib/CCTMXTiledMap.js',
    CCTMXXMLParser_js : '../node_modules/cctilemap/lib/CCTMXXMLParser.js',
    CCTileMapAtlas_js : '../node_modules/cctilemap/lib/CCTileMapAtlas.js',
    TMXHexTest_js : '../node_modules/cctilemap/test/TMXHexTest.js',
    TMXIsoObjectsTest_js : '../node_modules/cctilemap/test/TMXIsoObjectsTest.js',
    TMXIsoTest_js : '../node_modules/cctilemap/test/TMXIsoTest.js',
    TMXIsoZorder_js : '../node_modules/cctilemap/test/TMXIsoZorder.js',
    TMXOrthoFlipRunTimeTest_js : '../node_modules/cctilemap/test/TMXOrthoFlipRunTimeTest.js',
    TMXOrthoObjectsTest_js : '../node_modules/cctilemap/test/TMXOrthoObjectsTest.js',
    TMXOrthoTest_js : '../node_modules/cctilemap/test/TMXOrthoTest.js',
    TMXOrthoTest2_js : '../node_modules/cctilemap/test/TMXOrthoTest2.js',
    TMXOrthoTest3_js : '../node_modules/cctilemap/test/TMXOrthoTest3.js',
    TMXOrthoTest4_js : '../node_modules/cctilemap/test/TMXOrthoTest4.js',
    TMXOrthoZorder_js : '../node_modules/cctilemap/test/TMXOrthoZorder.js',
    TMXReadWriteTest_js : '../node_modules/cctilemap/test/TMXReadWriteTest.js',
    TMXTilePropertyTest_js : '../node_modules/cctilemap/test/TMXTilePropertyTest.js',
    TMXUncompressedTest_js : '../node_modules/cctilemap/test/TMXUncompressedTest.js'
};
var resCfg = cc.resCfg;
var jsRes = js.cctilemap;

resCfg["cctilemap"] = {
    ref : [
        jsRes.CCTGAlib_js,
        jsRes.CCTMXTiledMap_js,
        jsRes.CCTMXXMLParser_js,
        jsRes.CCTMXObjectGroup_js,
        jsRes.CCTMXLayer_js
    ]//Base references for the project.
};

resCfg[TEST_BASE] = {res: [res.ortho_test1_png, res.orthogonal_test1_tmx, res.orthogonal_test1_tsx, res.fixed_ortho_test2_png, res.orthogonal_test2_tmx,
    res.tmw_desert_spacing_png, res.orthogonal_test3_tmx, res.orthogonal_test4_tmx, res.hexa_tiles_png, res.hexa_test_tmx, res.iso_test_png, res.iso_test_tmx,
    res.iso_test2_png, res.iso_test2_uncompressed_tmx, res.ortho_objects_tmx, res.iso_png, res.iso_test_objectgroup_tmx, res.iso_test_zorder_tmx,
    res.grossinis_sister1_png, res.orthogonal_test_vertexz_tmx, res.ortho_tile_property_tmx, res.iso_test2_png, res.ortho_rotation_test_tmx]};

cc.gameModules = [jsRes.TMXOrthoTest_js, jsRes.TMXOrthoTest3_js, jsRes.TMXOrthoTest4_js, jsRes.TMXReadWriteTest_js, jsRes.TMXHexTest_js, jsRes.TMXIsoTest_js,
    jsRes.TMXUncompressedTest_js, jsRes.TMXOrthoObjectsTest_js, jsRes.TMXIsoObjectsTest_js, jsRes.TMXIsoZorder_js, jsRes.TMXOrthoZorder_js, jsRes.TMXTilePropertyTest_js,
    jsRes.TMXOrthoFlipRunTimeTest_js];

resCfg[jsRes.TMXOrthoTest_js] = { layer : "TMXOrthoTest", title : "TMX Ortho test" };
resCfg[jsRes.TMXOrthoTest2_js] = { layer : "TMXOrthoTest2", title : "TMX Orthogonal test 2" };
resCfg[jsRes.TMXOrthoTest3_js] = { layer : "TMXOrthoTest3", title : "TMX anchorPoint test" };
resCfg[jsRes.TMXOrthoTest4_js] = { layer : "TMXOrthoTest4", title : "TMX width/height test" };
resCfg[jsRes.TMXReadWriteTest_js] = { layer : "TMXReadWriteTest", title : "TMX Read/Write test" };
resCfg[jsRes.TMXHexTest_js] = { layer : "TMXHexTest", title : "TMX Hex test" };
resCfg[jsRes.TMXIsoTest_js] = { layer : "TMXIsoTest", title : "TMX Isometric test 0" };
resCfg[jsRes.TMXUncompressedTest_js] = { layer : "TMXUncompressedTest", title : "TMX Uncompressed test" };
resCfg[jsRes.TMXOrthoObjectsTest_js] = { layer : "TMXOrthoObjectsTest", title : "TMX Ortho object test -- [You should see a white box around the 3 platforms]" };
resCfg[jsRes.TMXIsoObjectsTest_js] = { layer : "TMXIsoObjectsTest", title : "TMX Iso object test -- [You need to parse them manually. See bug #810]" };
resCfg[jsRes.TMXIsoZorder_js] = { layer : "TMXIsoZorder", title : "TMX Iso Zorder -- [Sprite should hide behind the trees]" };
resCfg[jsRes.TMXOrthoZorder_js] = { layer : "TMXOrthoZorder", title : "TMX Ortho Zorder -- [Sprite should hide behind the trees]" };
resCfg[jsRes.TMXTilePropertyTest_js] = { layer : "TMXTilePropertyTest", title : "TMX Tile Property Test -- [In the console you should see tile properties]" };
resCfg[jsRes.TMXOrthoFlipRunTimeTest_js] = { layer : "TMXOrthoFlipRunTimeTest", title : "TMX tile flip run time test -- [in 2 sec bottom left tiles will flip]" };
exports.res = res;
exports.resCfg = resCfg;
exports.gameModules = cc.gameModules;
exports.jsRes = js;
var js = js || {};
js.ccaudio = {
    SimpleAudioEngine_js : '../node_modules/ccaudio/lib/SimpleAudioEngine.js',
    AudioEffectTest_js : '../node_modules/ccaudio/test/AudioEffectTest.js',
    MusicTest_js : '../node_modules/ccaudio/test/MusicTest.js'
};
var resCfg = cc.resCfg;
var jsRes = js.ccaudio;

resCfg["ccaudio"] = {
    ref : [
        jsRes.SimpleAudioEngine_js
    ]//Base references for the project.
};

resCfg[TEST_BASE] = {res : [res.background_mp3, res.effect2_mp3]}

cc.gameModules = [jsRes.MusicTest_js, jsRes.AudioEffectTest_js];

resCfg[jsRes.MusicTest_js] = {layer : "MusicTest", title : "Music Test"}
resCfg[jsRes.AudioEffectTest_js] = {layer : "AudioEffectTest", title : "Audio Effect Test"}
exports.res = res;
exports.resCfg = resCfg;
exports.gameModules = cc.gameModules;
exports.jsRes = js;
var js = js || {};
js.ccparticle = {
    CCFormatHelper_js : '../node_modules/ccparticle/lib/CCFormatHelper.js',
    CCPNGReader_js : '../node_modules/ccparticle/lib/CCPNGReader.js',
    CCParticleBatchNode_js : '../node_modules/ccparticle/lib/CCParticleBatchNode.js',
    CCParticleExamples_js : '../node_modules/ccparticle/lib/CCParticleExamples.js',
    CCParticleSystem_js : '../node_modules/ccparticle/lib/CCParticleSystem.js',
    CCTIFFReader_js : '../node_modules/ccparticle/lib/CCTIFFReader.js',
    ExplodeRingTest_js : '../node_modules/ccparticle/test/ExplodeRingTest.js',
    FireTest_js : '../node_modules/ccparticle/test/FireTest.js',
    FlowerTest_js : '../node_modules/ccparticle/test/FlowerTest.js',
    ParticleTest_js : '../node_modules/ccparticle/test/ParticleTest.js',
    PhoenixTest_js : '../node_modules/ccparticle/test/PhoenixTest.js',
    SnowTest_js : '../node_modules/ccparticle/test/SnowTest.js',
    VaryingSizeTest_js : '../node_modules/ccparticle/test/VaryingSizeTest.js'
};
var resCfg = cc.resCfg;
var jsRes = js.ccparticle;

resCfg["ccparticle"] = {
    ref : [
        jsRes.CCFormatHelper_js,
        jsRes.CCPNGReader_js,
        jsRes.CCTIFFReader_js,
        jsRes.CCParticleSystem_js,
        jsRes.CCParticleExamples_js,
        jsRes.CCParticleBatchNode_js
    ]//Base references for the project.
};

resCfg[TEST_BASE] = {
    ref : [jsRes.ParticleTest_js],
    res : [res.stars_png, res.background3_png, res.fire_png, res.snow_png, res.Phoenix_plist, res.ExplodingRing_plist]
};

cc.gameModules = [jsRes.FlowerTest_js, jsRes.FireTest_js, jsRes.SnowTest_js, jsRes.PhoenixTest_js, jsRes.ExplodeRingTest_js, jsRes.VaryingSizeTest_js];

resCfg[jsRes.FlowerTest_js] = { layer : "FlowerTest", title : "Particle Flower Test" };
resCfg[jsRes.FireTest_js] = { layer : "FireTest", title : "Particle Fire Test" };
resCfg[jsRes.SnowTest_js] = { layer : "SnowTest", title : "Particle Snow Test" };
resCfg[jsRes.ExplodeRingTest_js] = { layer : "ExplodeRingTest", title : "Particle Exploding Ring Test" };
resCfg[jsRes.PhoenixTest_js] = { layer : "PhoenixTest", title : "Particle Phoenix Test" };
resCfg[jsRes.VaryingSizeTest_js] = { layer : "VaryingSizeTest", title : "Particle Varing Size Test" };
exports.res = res;
exports.resCfg = resCfg;
exports.gameModules = cc.gameModules;
exports.jsRes = js;
var js = js || {};
js.cocostudio = {
    CCActionFrame_js : '../node_modules/cocostudio/lib/Action/CCActionFrame.js',
    CCActionManager_js : '../node_modules/cocostudio/lib/Action/CCActionManager.js',
    CCActionNode_js : '../node_modules/cocostudio/lib/Action/CCActionNode.js',
    CCActionObject_js : '../node_modules/cocostudio/lib/Action/CCActionObject.js',
    CCArmature_js : '../node_modules/cocostudio/lib/Armature/CCArmature.js',
    CCBone_js : '../node_modules/cocostudio/lib/Armature/CCBone.js',
    CCArmatureAnimation_js : '../node_modules/cocostudio/lib/Armature/animation/CCArmatureAnimation.js',
    CCProcessBase_js : '../node_modules/cocostudio/lib/Armature/animation/CCProcessBase.js',
    CCTween_js : '../node_modules/cocostudio/lib/Armature/animation/CCTween.js',
    CCDatas_js : '../node_modules/cocostudio/lib/Armature/datas/CCDatas.js',
    CCBatchNode_js : '../node_modules/cocostudio/lib/Armature/display/CCBatchNode.js',
    CCDecorativeDisplay_js : '../node_modules/cocostudio/lib/Armature/display/CCDecorativeDisplay.js',
    CCDisplayFactory_js : '../node_modules/cocostudio/lib/Armature/display/CCDisplayFactory.js',
    CCDisplayManager_js : '../node_modules/cocostudio/lib/Armature/display/CCDisplayManager.js',
    CCSkin_js : '../node_modules/cocostudio/lib/Armature/display/CCSkin.js',
    CCColliderDetector_js : '../node_modules/cocostudio/lib/Armature/physics/CCColliderDetector.js',
    CCArmatureDataManager_js : '../node_modules/cocostudio/lib/Armature/utils/CCArmatureDataManager.js',
    CCArmatureDefine_js : '../node_modules/cocostudio/lib/Armature/utils/CCArmatureDefine.js',
    CCDataReaderHelper_js : '../node_modules/cocostudio/lib/Armature/utils/CCDataReaderHelper.js',
    CCSpriteFrameCacheHelper_js : '../node_modules/cocostudio/lib/Armature/utils/CCSpriteFrameCacheHelper.js',
    CCTransformHelp_js : '../node_modules/cocostudio/lib/Armature/utils/CCTransformHelp.js',
    CCTweenFunction_js : '../node_modules/cocostudio/lib/Armature/utils/CCTweenFunction.js',
    CCUtilMath_js : '../node_modules/cocostudio/lib/Armature/utils/CCUtilMath.js',
    CocoStudio_js : '../node_modules/cocostudio/lib/CocoStudio.js',
    CCComAttribute_js : '../node_modules/cocostudio/lib/Components/CCComAttribute.js',
    CCComAudio_js : '../node_modules/cocostudio/lib/Components/CCComAudio.js',
    CCComController_js : '../node_modules/cocostudio/lib/Components/CCComController.js',
    CCComRender_js : '../node_modules/cocostudio/lib/Components/CCComRender.js',
    CCComponent_js : '../node_modules/cocostudio/lib/Components/CCComponent.js',
    CCComponentContainer_js : '../node_modules/cocostudio/lib/Components/CCComponentContainer.js',
    UIWidget_js : '../node_modules/cocostudio/lib/GUI/BaseClasses/UIWidget.js',
    UILayout_js : '../node_modules/cocostudio/lib/GUI/Layouts/UILayout.js',
    UILayoutDefine_js : '../node_modules/cocostudio/lib/GUI/Layouts/UILayoutDefine.js',
    UILayoutParameter_js : '../node_modules/cocostudio/lib/GUI/Layouts/UILayoutParameter.js',
    CocosGUI_js : '../node_modules/cocostudio/lib/GUI/System/CocosGUI.js',
    UIHelper_js : '../node_modules/cocostudio/lib/GUI/System/UIHelper.js',
    UILayer_js : '../node_modules/cocostudio/lib/GUI/System/UILayer.js',
    CompatibleClasses_js : '../node_modules/cocostudio/lib/GUI/UIWidgets/Compatible/CompatibleClasses.js',
    UIListView_js : '../node_modules/cocostudio/lib/GUI/UIWidgets/ScrollWidget/UIListView.js',
    UIPageView_js : '../node_modules/cocostudio/lib/GUI/UIWidgets/ScrollWidget/UIPageView.js',
    UIScrollView_js : '../node_modules/cocostudio/lib/GUI/UIWidgets/ScrollWidget/UIScrollView.js',
    UIButton_js : '../node_modules/cocostudio/lib/GUI/UIWidgets/UIButton.js',
    UICheckBox_js : '../node_modules/cocostudio/lib/GUI/UIWidgets/UICheckBox.js',
    UIImageView_js : '../node_modules/cocostudio/lib/GUI/UIWidgets/UIImageView.js',
    UILabel_js : '../node_modules/cocostudio/lib/GUI/UIWidgets/UILabel.js',
    UILabelAtlas_js : '../node_modules/cocostudio/lib/GUI/UIWidgets/UILabelAtlas.js',
    UILabelBMFont_js : '../node_modules/cocostudio/lib/GUI/UIWidgets/UILabelBMFont.js',
    UILoadingBar_js : '../node_modules/cocostudio/lib/GUI/UIWidgets/UILoadingBar.js',
    UISlider_js : '../node_modules/cocostudio/lib/GUI/UIWidgets/UISlider.js',
    UISwitch_js : '../node_modules/cocostudio/lib/GUI/UIWidgets/UISwitch.js',
    UITextField_js : '../node_modules/cocostudio/lib/GUI/UIWidgets/UITextField.js',
    GUIReader_js : '../node_modules/cocostudio/lib/Reader/GUIReader.js',
    SceneReader_js : '../node_modules/cocostudio/lib/Reader/SceneReader.js',
    ObjectFactory_js : '../node_modules/cocostudio/lib/Trigger/ObjectFactory.js',
    TriggerBase_js : '../node_modules/cocostudio/lib/Trigger/TriggerBase.js',
    TriggerMng_js : '../node_modules/cocostudio/lib/Trigger/TriggerMng.js',
    TriggerObj_js : '../node_modules/cocostudio/lib/Trigger/TriggerObj.js',
    ArmatureTest_js : '../node_modules/cocostudio/test/ArmatureTest.js',
    GUIButtonTest_js : '../node_modules/cocostudio/test/GUIButtonTest.js',
    GUICheckBoxTest_js : '../node_modules/cocostudio/test/GUICheckBoxTest.js',
    GUIEditorTest_js : '../node_modules/cocostudio/test/GUIEditorTest.js',
    SceneTest_js : '../node_modules/cocostudio/test/SceneTest.js'
};
var resCfg = cc.resCfg;
var jsRes = js.cocostudio;

resCfg["cocostudio"] = {
    ref : [
        jsRes.CCComponent_js,
        jsRes.CCComponentContainer_js,
        jsRes.CocoStudio_js,
        // CocoStudio Armature
        jsRes.CCArmatureDefine_js,
        jsRes.CCDataReaderHelper_js,
        jsRes.CCSpriteFrameCacheHelper_js,
        jsRes.CCTransformHelp_js,
        jsRes.CCTweenFunction_js,
        jsRes.CCUtilMath_js,
        jsRes.CCArmatureDataManager_js,
        jsRes.CCDatas_js,
        jsRes.CCDecorativeDisplay_js,
        jsRes.CCDisplayFactory_js,
        jsRes.CCDisplayManager_js,
        jsRes.CCSkin_js,
        jsRes.CCProcessBase_js,
        jsRes.CCArmatureAnimation_js,
        jsRes.CCTween_js,
        jsRes.CCColliderDetector_js,
        jsRes.CCArmature_js,
        jsRes.CCBone_js,
        // CocoStudio Action
        jsRes.CCActionFrame_js,
        jsRes.CCActionManager_js,
        jsRes.CCActionNode_js,
        jsRes.CCActionObject_js,
        // CocoStudio Components
        jsRes.CCComAttribute_js,
        jsRes.CCComAudio_js,
        jsRes.CCComController_js,
        jsRes.CCComRender_js,
        // CocoStudio GUI
        jsRes.UIWidget_js,
        jsRes.UILayout_js,
        jsRes.UILayoutParameter_js,
        jsRes.UILayoutDefine_js,
        jsRes.CocosGUI_js,
        jsRes.UIHelper_js,
        jsRes.UILayer_js,
        jsRes.UIButton_js,
        jsRes.UICheckBox_js,
        jsRes.UIImageView_js,
        jsRes.UILabel_js,
        jsRes.UILabelAtlas_js,
        jsRes.UILabelBMFont_js,
        jsRes.UILoadingBar_js,
        jsRes.UISlider_js,
        jsRes.UISwitch_js,
        jsRes.UITextField_js,
        jsRes.CompatibleClasses_js,
        jsRes.UIScrollView_js,
        jsRes.UIListView_js,
        jsRes.UIPageView_js,
        jsRes.GUIReader_js,
        jsRes.SceneReader_js,
        jsRes.ObjectFactory_js,
        jsRes.TriggerBase_js,
        jsRes.TriggerMng_js,
        jsRes.TriggerObj_js
    ]//Base references for the project.
};

resCfg[TEST_BASE] = {res : [
    res.Cowboy_ExportJson,
    res.Cowboy0_plist,
    res.Cowboy0_png,
    res.buttonNormal_png,
    res.buttonPressed_png,
    res.check_box_active_png ,
    res.check_box_active_disable_png ,
    res.check_box_normal_png ,
    res.check_box_normal_disable_png ,
    res.check_box_normal_press_png ,
    res.gui_json,
    res.labelatlas_png,
    res.Blowfish_ExportJson,
    res.Blowfish0_plist ,
    res.Blowfish0_png ,
    res.Butterflyfish_ExportJson ,
    res.Butterflyfish0_plist,
    res.Butterflyfish0_png,
    res.FishJoy2_json ,
    res.startMenuBG_png ,
    res.music_logo_mp3 ,
    res.music_logo_wav,
    res.qipao01_plist ,
    res.qipao01_png ,
    res.starMenuButton01_png ,
    res.starMenuButton02_png ,
    res.ui_logo_001_hd_png,
    res.startMenu_1_json
]};

cc.gameModules = [jsRes.ArmatureTest_js,jsRes.GUIEditorTest_js,jsRes.GUIButtonTest_js,jsRes.GUICheckBoxTest_js,jsRes.SceneTest_js];

resCfg[jsRes.ArmatureTest_js] = {layer : "ArmatureTest", title : "CocoStudio Armature Test"};
resCfg[jsRes.GUIEditorTest_js] = {layer : "GUIEditorTest", title: "GUI Editor Test"};
resCfg[jsRes.GUIButtonTest_js] = {layer : "GUIButtonTest", title : "GUI Button Test"};
resCfg[jsRes.GUICheckBoxTest_js] = {layer : "GUICheckBoxTest", title : "GUI CheckBox Test"};
resCfg[jsRes.SceneTest_js] = {layer : "SceneTest", title : "CocoStudio Scene Test"};
exports.res = res;
exports.resCfg = resCfg;
exports.gameModules = cc.gameModules;
exports.jsRes = js;
var js = js || {};
js.ccaccelerometer = {
    CCAccelerometer_js : 'node_modules/ccaccelerometer/lib/CCAccelerometer.js',
    AccelerometerTest_js : 'node_modules/ccaccelerometer/test/AccelerometerTest.js'
};
var resCfg = cc.resCfg;
var jsRes = js.ccaccelerometer;

resCfg["ccaccelerometer"] = {
    ref : [
        jsRes.CCAccelerometer_js
    ]//Base references for the project.
};

resCfg[TEST_BASE] = {res : [res.r2_png]};

cc.gameModules = [jsRes.AccelerometerTest_js];

resCfg[jsRes.AccelerometerTest_js] = { layer : "AccelerometerTest", title : "Accelerometer Test" }
exports.res = res;
exports.resCfg = resCfg;
exports.gameModules = cc.gameModules;
exports.jsRes = js;
var js = js || {};
js.cckazmath = {
    mat4stack_js : '../node_modules/cckazmath/lib/GL/mat4stack.js',
    matrix_js : '../node_modules/cckazmath/lib/GL/matrix.js',
    aabb_js : '../node_modules/cckazmath/lib/aabb.js',
    mat3_js : '../node_modules/cckazmath/lib/mat3.js',
    mat4_js : '../node_modules/cckazmath/lib/mat4.js',
    plane_js : '../node_modules/cckazmath/lib/plane.js',
    quaternion_js : '../node_modules/cckazmath/lib/quaternion.js',
    ray2_js : '../node_modules/cckazmath/lib/ray2.js',
    utility_js : '../node_modules/cckazmath/lib/utility.js',
    vec2_js : '../node_modules/cckazmath/lib/vec2.js',
    vec3_js : '../node_modules/cckazmath/lib/vec3.js',
    vec4_js : '../node_modules/cckazmath/lib/vec4.js',
    KazmathTest_js : '../node_modules/cckazmath/test/KazmathTest.js'
};
var resCfg = cc.resCfg;
var jsRes = js.cckazmath;

resCfg["cckazmath"] = {
    ref : [
        jsRes.utility_js,
        jsRes.vec2_js,
        jsRes.vec3_js,
        jsRes.vec4_js,
        jsRes.ray2_js,
        jsRes.mat3_js,
        jsRes.mat4_js,
        jsRes.plane_js,
        jsRes.quaternion_js,
        jsRes.aabb_js,
        jsRes.mat4stack_js,
        jsRes.matrix_js
    ]//Base references for the project.
};

cc.gameModules = [jsRes.KazmathTest_js];

resCfg[jsRes.KazmathTest_js] = {layer : "KazmathTest", title : "Kazmath Test"}
exports.res = res;
exports.resCfg = resCfg;
exports.gameModules = cc.gameModules;
exports.jsRes = js;
var js = js || {};
js.ccshaders = {
    CCGLProgram_js : '../node_modules/ccshaders/lib/CCGLProgram.js',
    CCGLStateCache_js : '../node_modules/ccshaders/lib/CCGLStateCache.js',
    CCShaderCache_js : '../node_modules/ccshaders/lib/CCShaderCache.js',
    CCShaders_js : '../node_modules/ccshaders/lib/CCShaders.js',
    GLNodeWebGLAPITest_js : '../node_modules/ccshaders/test/GLNodeWebGLAPITest.js',
    ShaderMandelbrotTest_js : '../node_modules/ccshaders/test/ShaderMandelbrotTest.js'
};
var resCfg = cc.resCfg;
var jsRes = js.ccshaders;

resCfg["ccshaders"] = {
    ref : [
        jsRes.CCShaders_js,
        jsRes.CCShaderCache_js,
        jsRes.CCGLProgram_js,
        jsRes.CCGLStateCache_js
    ]//Base references for the project.
};
resCfg[TEST_BASE] = {res : [res.example_ColorBars_fsh,res.example_ColorBars_vsh, res.example_Mandelbrot_fsh, res.example_Mandelbrot_vsh]};
cc.gameModules = [jsRes.ShaderMandelbrotTest_js, jsRes.GLNodeWebGLAPITest_js];

resCfg[jsRes.ShaderMandelbrotTest_js] = { layer : "ShaderMandelbrotTest", title : "Shader Mandelbrot Test" };
resCfg[jsRes.GLNodeWebGLAPITest_js] = { layer : "GLNodeWebGLAPITest", title : "GLNode + WebGL API" };
exports.res = res;
exports.resCfg = resCfg;
exports.gameModules = cc.gameModules;
exports.jsRes = js;
var js = js || {};
js.cceffects = {
    CCGrabber_js : '../node_modules/cceffects/lib/CCGrabber.js',
    CCGrid_js : '../node_modules/cceffects/lib/CCGrid.js',
    EffectsTest_js : '../node_modules/cceffects/test/EffectsTest.js'
};
var resCfg = cc.resCfg;
var jsRes = js.cceffects;

resCfg["cceffects"] = {
    ref : [
        jsRes.CCGrid_js,
        jsRes.CCGrabber_js
    ]//Base references for the project.
};

cc.gameModules = [jsRes.EffectsTest_js];

resCfg[jsRes.EffectsTest_js] = {layer : "EffectsTest", title : "Effects Test"}
exports.res = res;
exports.resCfg = resCfg;
exports.gameModules = cc.gameModules;
exports.jsRes = js;
var js = js || {};
js.ccactions3d = {
    CCActionGrid_js : 'node_modules/ccactions3d/lib/CCActionGrid.js',
    CCActionGrid3D_js : 'node_modules/ccactions3d/lib/CCActionGrid3D.js',
    CCActionPageTurn3D_js : 'node_modules/ccactions3d/lib/CCActionPageTurn3D.js',
    CCActionTiledGrid_js : 'node_modules/ccactions3d/lib/CCActionTiledGrid.js',
    Actions3dTestLayer_js : 'node_modules/ccactions3d/test/Actions3dTestLayer.js',
    FlipXTest_js : 'node_modules/ccactions3d/test/FlipXTest.js',
    FlipYTest_js : 'node_modules/ccactions3d/test/FlipYTest.js',
    Lens3DTest_js : 'node_modules/ccactions3d/test/Lens3DTest.js',
    LiquidTest_js : 'node_modules/ccactions3d/test/LiquidTest.js',
    Ripple3DTest_js : 'node_modules/ccactions3d/test/Ripple3DTest.js',
    Shaky3DTest_js : 'node_modules/ccactions3d/test/Shaky3DTest.js',
    ShakyTiles3DTest_js : 'node_modules/ccactions3d/test/ShakyTiles3DTest.js',
    TwirlTest_js : 'node_modules/ccactions3d/test/TwirlTest.js',
    Waves3DTest_js : 'node_modules/ccactions3d/test/Waves3DTest.js',
    WavesTest_js : 'node_modules/ccactions3d/test/WavesTest.js'
};
var resCfg = cc.resCfg;
var jsRes = js.ccactions3d;

resCfg["ccactions3d"] = {
    ref : [
        jsRes.CCActionGrid_js,
        jsRes.CCActionGrid3D_js,
        jsRes.CCActionTiledGrid_js,
        jsRes.CCActionPageTurn3D_js
    ]//Base references for the project.
};

resCfg[TEST_BASE] = {
    ref : [jsRes.Actions3dTestLayer_js],
    res : [
        res.background3_png,
        res.grossinis_sister1_png,
        res.grossinis_sister2_png
    ]
};

cc.gameModules = [
    jsRes.Shaky3DTest_js, jsRes.Waves3DTest_js, jsRes.FlipXTest_js, jsRes.FlipYTest_js,
    jsRes.Lens3DTest_js, jsRes.Ripple3DTest_js, jsRes.LiquidTest_js, jsRes.WavesTest_js,
    jsRes.TwirlTest_js, jsRes.ShakyTiles3DTest_js
];

resCfg[jsRes.Shaky3DTest_js] = {layer : "Shaky3DTest", title : "Shaky 3D"};
resCfg[jsRes.Waves3DTest_js] = {layer : "Waves3DTest", title : "Waves 3D"};
resCfg[jsRes.FlipXTest_js] = {layer : "FlipXTest", title : "FlipX3D"};
resCfg[jsRes.FlipYTest_js] = {layer : "FlipYTest", title : "FlipY3D"};
resCfg[jsRes.Lens3DTest_js] = {layer : "Lens3DTest", title : "Lens3D"};
resCfg[jsRes.Ripple3DTest_js] = {layer : "Ripple3DTest", title : "Ripple3D"};
resCfg[jsRes.LiquidTest_js] = {layer : "LiquidTest", title : "Liquid"};
resCfg[jsRes.WavesTest_js] = {layer : "WavesTest", title : "Waves"};
resCfg[jsRes.TwirlTest_js] = {layer : "TwirlTest", title : "Twirl"};
resCfg[jsRes.ShakyTiles3DTest_js] = {layer : "ShakyTiles3DTest", title : "ShakyTiles3D"};
exports.res = res;
exports.resCfg = resCfg;
exports.gameModules = cc.gameModules;
exports.jsRes = js;
var js = js || {};
js.cckeyboard = {
    CCKeyboardDelegate_js : 'node_modules/cckeyboard/lib/CCKeyboardDelegate.js',
    CCKeyboardDispatcher_js : 'node_modules/cckeyboard/lib/CCKeyboardDispatcher.js',
    KeyboardTest_js : 'node_modules/cckeyboard/test/KeyboardTest.js'
};
var resCfg = cc.resCfg;
var jsRes = js.cckeyboard;

resCfg["cckeyboard"] = {
    ref : [
        jsRes.CCKeyboardDelegate_js,
        jsRes.CCKeyboardDispatcher_js
    ]//Base references for the project.
}

cc.gameModules = [jsRes.KeyboardTest_js];

resCfg[jsRes.KeyboardTest_js] = { layer : "KeyboardTest", title : "Keyboard Event Test" }
exports.res = res;
exports.resCfg = resCfg;
exports.gameModules = cc.gameModules;
exports.jsRes = js;
var js = js || {};
js.ccmotionstreak = {
    CCMotionStreak_js : 'node_modules/ccmotionstreak/lib/CCMotionStreak.js',
    MotionStreakTest_js : 'node_modules/ccmotionstreak/test/MotionStreakTest.js'
};
var resCfg = cc.resCfg;
var jsRes = js.ccmotionstreak;

resCfg["ccmotionstreak"] = {
    ref : [
        jsRes.CCMotionStreak_js
    ]//Base references for the project.
};

resCfg[TEST_BASE] = {res : [res.streak_png, res.Icon_png]};

cc.gameModules = [jsRes.MotionStreakTest_js];

resCfg[jsRes.MotionStreakTest_js] = { layer : "MotionStreakTest", title : "Motion Streak Test" }
exports.res = res;
exports.resCfg = resCfg;
exports.gameModules = cc.gameModules;
exports.jsRes = js;
var js = js || {};
js.ccparallax = {
    CCParallaxNode_js : 'node_modules/ccparallax/lib/CCParallaxNode.js',
    ParallaxTest_js : 'node_modules/ccparallax/test/ParallaxTest.js'
};
var resCfg = cc.resCfg;
var jsRes = js.ccparallax;

resCfg["ccparallax"] = {
    ref : [
        jsRes.CCParallaxNode_js
    ]//Base references for the project.
};

resCfg[TEST_BASE] = {res : [res.background_png, res.orthogonal_test2_png, res.powered_png]};

cc.gameModules = [jsRes.ParallaxTest_js];

resCfg[jsRes.ParallaxTest_js] = { layer : "ParallaxTest", title : "Parallax Layers Test (Drag scene)" }
exports.res = res;
exports.resCfg = resCfg;
exports.gameModules = cc.gameModules;
exports.jsRes = js;
var js = js || {};
js.cctransitions = {
    CCTransition_js : 'node_modules/cctransitions/lib/CCTransition.js',
    CCTransitionPageTurn_js : 'node_modules/cctransitions/lib/CCTransitionPageTurn.js',
    CCTransitionProgress_js : 'node_modules/cctransitions/lib/CCTransitionProgress.js',
    JumpZoomTransitionTest_js : 'node_modules/cctransitions/test/JumpZoomTransitionTest.js',
    TransitionRadialCCWTest_js : 'node_modules/cctransitions/test/TransitionRadialCCWTest.js'
};
var resCfg = cc.resCfg;
var jsRes = js.cctransitions;

resCfg["cctransitions"] = {
    ref : [
        jsRes.CCTransition_js,
        jsRes.CCTransitionProgress_js,
        jsRes.CCTransitionPageTurn_js
    ]//Base references for the project.
};

resCfg[TEST_BASE] = {res: [res.background1_png, res.background2_png]};

cc.gameModules = [jsRes.JumpZoomTransitionTest_js, jsRes.TransitionRadialCCWTest_js];

resCfg[jsRes.JumpZoomTransitionTest_js] = { layer : "JumpZoomTransitionTest", title : "JumpZoomTransition Test" };
resCfg[jsRes.TransitionRadialCCWTest_js] = { layer : "TransitionRadialCCWTest", title : "TransitionRadialCCW Test" };
exports.res = res;
exports.resCfg = resCfg;
exports.gameModules = cc.gameModules;
exports.jsRes = js;
var js = js || {};
js.cocosbuilder = {
    CCBAnimationManager_js : 'node_modules/cocosbuilder/lib/CCBAnimationManager.js',
    CCBKeyframe_js : 'node_modules/cocosbuilder/lib/CCBKeyframe.js',
    CCBReader_js : 'node_modules/cocosbuilder/lib/CCBReader.js',
    CCBReaderUtil_js : 'node_modules/cocosbuilder/lib/CCBReaderUtil.js',
    CCBRelativePositioning_js : 'node_modules/cocosbuilder/lib/CCBRelativePositioning.js',
    CCBSequence_js : 'node_modules/cocosbuilder/lib/CCBSequence.js',
    CCBValue_js : 'node_modules/cocosbuilder/lib/CCBValue.js',
    CCControlLoader_js : 'node_modules/cocosbuilder/lib/CCControlLoader.js',
    CCNodeLoader_js : 'node_modules/cocosbuilder/lib/CCNodeLoader.js',
    CCNodeLoaderLibrary_js : 'node_modules/cocosbuilder/lib/CCNodeLoaderLibrary.js',
    CCSpriteLoader_js : 'node_modules/cocosbuilder/lib/CCSpriteLoader.js',
    CocosBuilderTest_js : 'node_modules/cocosbuilder/test/CocosBuilderTest.js'
};
var resCfg = cc.resCfg;
var jsRes = js.cocosbuilder;

resCfg["cocosbuilder"] = {
    ref : [
        jsRes.CCNodeLoader_js,
        jsRes.CCBReaderUtil_js,
        jsRes.CCControlLoader_js,
        jsRes.CCSpriteLoader_js,
        jsRes.CCNodeLoaderLibrary_js,
        jsRes.CCBReader_js,
        jsRes.CCBValue_js,
        jsRes.CCBKeyframe_js,
        jsRes.CCBSequence_js,
        jsRes.CCBRelativePositioning_js,
        jsRes.CCBAnimationManager_js
    ]//Base references for the project.
};

resCfg[TEST_BASE] = {res: [res.animated_grossini_plist, res.animated_grossini_png, res.btn_a_0_png, res.btn_a_1_png, res.btn_a_2_png, res.btn_b_0_png,
    res.btn_b_1_png, res.btn_b_2_png, res.btn_back_0_png, res.btn_back_1_png, res.btn_test_0_png, res.btn_test_1_png, res.btn_test_2_png, res.burst_png,
    res.TestAnimations_ccbi, res.TestAnimationsSub_ccbi, res.TestButtons_ccbi, res.TestHeader_ccbi, res.TestLabels_ccbi, res.TestMenus_ccbi,
    res.TestParticleSystems_ccbi, res.TestScrollViews_ccbi, res.TestScrollViewsContentA_ccbi,res.TestSprites_ccbi, res.TestTimelineCallback_ccbi,
    res.ccbParticleStars_png,res.fileLookup_plist,res.flower_jpg,res.gem_0_wav,res.gem_1_wav,res.grossini_generic_plist,res.grossini_generic_png,
    res.HelloCocosBuilder_ccbi,res.jungle_left_png,res.jungle_right_png,res.jungle_png, res.logo_icon_png,res.logo_png,res.markerfelt24shadow_fnt,
    res.markerfelt24shadow_png, res.particle_fire_png,res.particle_smoke_png, res.particle_snow_png,res.particle_stars_png,res.scale_9_demo_png]};

cc.gameModules = [jsRes.CocosBuilderTest_js];

resCfg[jsRes.CocosBuilderTest_js] = { layer : "CocosBuilderTest", title : "CocosBuilder Test" };
exports.res = res;
exports.resCfg = resCfg;
exports.gameModules = cc.gameModules;
exports.jsRes = js;
var js = js || {};
js.cceditbox = {
    CCEditBox_js : 'node_modules/cceditbox/lib/CCEditBox.js',
    CCdomNode_js : 'node_modules/cceditbox/lib/CCdomNode.js',
    EditBoxTest_js : 'node_modules/cceditbox/test/EditBoxTest.js'
};
var resCfg = cc.resCfg;
var jsRes = js.cceditbox;

resCfg["cceditbox"] = {
    ref : [
        jsRes.CCdomNode_js,
        jsRes.CCEditBox_js
    ]//Base references for the project.
};

resCfg[TEST_BASE] = {
    res : [res.green_edit_png, res.orange_edit_png, res.yellow_edit_png]
};

cc.gameModules = [jsRes.EditBoxTest_js];

resCfg[jsRes.EditBoxTest_js] = { layer : "EditBoxTest", title : "Edit box test" };
exports.res = res;
exports.resCfg = resCfg;
exports.gameModules = cc.gameModules;
exports.jsRes = js;
var js = js || {};
js.ccpluginx = {
    SocialFacebook_js : 'node_modules/ccpluginx/lib/plugins/SocialFacebook.js',
    SocialQQWeibo_js : 'node_modules/ccpluginx/lib/plugins/SocialQQWeibo.js',
    SocialQzone_js : 'node_modules/ccpluginx/lib/plugins/SocialQzone.js',
    SocialTwitter_js : 'node_modules/ccpluginx/lib/plugins/SocialTwitter.js',
    SocialWeibo_js : 'node_modules/ccpluginx/lib/plugins/SocialWeibo.js',
    Config_js : 'node_modules/ccpluginx/lib/protocols/Config.js',
    PluginFactory_js : 'node_modules/ccpluginx/lib/protocols/PluginFactory.js',
    PluginManager_js : 'node_modules/ccpluginx/lib/protocols/PluginManager.js',
    PluginProtocol_js : 'node_modules/ccpluginx/lib/protocols/PluginProtocol.js',
    PluginUtils_js : 'node_modules/ccpluginx/lib/protocols/PluginUtils.js',
    ProtocolSocial_js : 'node_modules/ccpluginx/lib/protocols/ProtocolSocial.js',
    cocos2d_js : 'node_modules/ccpluginx/lib/samples/HelloSocial/cocos2d.js',
    main_js : 'node_modules/ccpluginx/lib/samples/HelloSocial/main.js',
    MySocialManager_js : 'node_modules/ccpluginx/lib/samples/HelloSocial/src/MySocialManager.js',
    myApp_js : 'node_modules/ccpluginx/lib/samples/HelloSocial/src/myApp.js',
    resource_js : 'node_modules/ccpluginx/lib/samples/HelloSocial/src/resource.js',
    PluginXTest_js : 'node_modules/ccpluginx/test/PluginXTest.js'
};
var resCfg = cc.resCfg;
var jsRes = js.ccpluginx;

resCfg["ccpluginx"] = {
    ref : [
        jsRes.Config_js,
        jsRes.PluginUtils_js,
        jsRes.PluginProtocol_js,
        jsRes.ProtocolSocial_js,
        jsRes.PluginFactory_js,
        jsRes.PluginManager_js,
        jsRes.SocialWeibo_js,
        jsRes.SocialQQWeibo_js,
        jsRes.SocialQzone_js,
        jsRes.SocialTwitter_js,
        jsRes.SocialFacebook_js
    ]//Base references for the project.
};

cc.gameModules = [jsRes.PluginXTest_js];

resCfg[jsRes.PluginXTest_js] = {layer : "PluginXTest", title : "PluginX Test"}
exports.res = res;
exports.resCfg = resCfg;
exports.gameModules = cc.gameModules;
exports.jsRes = js;
var js = js || {};
js.game = {
    AnimationLayer_js : './src/AnimationLayer.js',
    BackgroundLayer_js : './src/BackgroundLayer.js',
    PlayScene_js : './src/PlayScene.js',
    StartLayer_js : './src/StartLayer.js',
    StartScene_js : './src/StartScene.js',
    StatusLayer_js : './src/StatusLayer.js'
};
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
exports.res = res;
exports.resCfg = resCfg;
exports.gameModules = cc.gameModules;
exports.jsRes = js;
