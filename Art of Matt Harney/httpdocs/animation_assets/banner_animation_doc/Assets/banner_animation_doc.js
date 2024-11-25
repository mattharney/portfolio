(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"banner_animation_doc_atlas_", frames: [[0,2376,1400,635],[0,1643,1300,731],[0,825,1300,816],[0,0,1300,823]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.callister_hull_close = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.daedalus = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.train_back = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.train_main_front = function() {
	this.spriteSheet = ss["banner_animation_doc_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Tween3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.daedalus();
	this.instance.parent = this;
	this.instance.setTransform(-617,-346.9,0.949,0.949);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-617,-346.9,1234,693.9);


(lib.trainFront = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.train_main_front();
	this.instance.parent = this;
	this.instance.setTransform(-650,-411.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-650,-411.5,1300,823);


(lib.Symbol2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.train_back();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.Symbol2, new cjs.Rectangle(0,0,1300,816), null);


(lib.blackmirror = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.callister_hull_close();
	this.instance.parent = this;
	this.instance.setTransform(-700,-317.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-700,-317.5,1400,635);


(lib.black_mirror = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.blackmirror("synched",0);
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-700,-317.5,1400,635);


// stage content:
(lib.banner_animation_doc = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.trainFront("synched",0);
	this.instance.parent = this;
	this.instance.setTransform(614,359.5);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1).to({y:358.6,alpha:0.053},0).wait(1).to({y:357.8,alpha:0.105},0).wait(1).to({y:356.9,alpha:0.158},0).wait(1).to({y:356.1,alpha:0.211},0).wait(1).to({y:355.2,alpha:0.263},0).wait(1).to({y:354.3,alpha:0.316},0).wait(1).to({y:353.5,alpha:0.368},0).wait(1).to({y:352.6,alpha:0.421},0).wait(1).to({y:351.7,alpha:0.474},0).wait(1).to({y:350.9,alpha:0.526},0).wait(1).to({y:350,alpha:0.579},0).wait(1).to({y:349.2,alpha:0.632},0).wait(1).to({y:348.3,alpha:0.684},0).wait(1).to({y:347.4,alpha:0.737},0).wait(1).to({y:346.6,alpha:0.789},0).wait(1).to({y:345.7,alpha:0.842},0).wait(1).to({y:344.9,alpha:0.895},0).wait(1).to({y:344,alpha:0.947},0).wait(1).to({y:343.1,alpha:1},0).wait(1).to({y:342.3},0).wait(1).to({y:341.4},0).wait(1).to({y:340.6},0).wait(1).to({y:339.7},0).wait(1).to({y:338.8},0).wait(1).to({y:338},0).wait(1).to({y:337.1},0).wait(1).to({y:336.2},0).wait(1).to({y:335.4},0).wait(1).to({y:334.5},0).wait(1).to({y:333.7},0).wait(1).to({y:332.8},0).wait(1).to({y:331.9},0).wait(1).to({y:331.1},0).wait(1).to({y:330.2},0).wait(1).to({y:329.4},0).wait(1).to({y:328.5},0).wait(1).to({y:327.6},0).wait(1).to({y:326.8},0).wait(1).to({y:325.9},0).wait(1).to({y:325.1},0).wait(1).to({y:324.2},0).wait(1).to({y:323.3},0).wait(1).to({y:322.5},0).wait(1).to({y:321.6},0).wait(1).to({y:320.7},0).wait(1).to({y:319.9},0).wait(1).to({y:319},0).wait(1).to({y:318.2},0).wait(1).to({y:317.3},0).wait(1).to({y:316.4},0).wait(1).to({y:315.6},0).wait(1).to({y:314.7},0).wait(1).to({y:313.9},0).wait(1).to({y:313},0).wait(1).to({y:312.1},0).wait(1).to({y:311.3},0).wait(1).to({y:310.4},0).wait(1).to({y:309.6},0).wait(1).to({y:308.7},0).wait(1).to({y:307.8},0).wait(1).to({y:307},0).wait(1).to({y:306.1},0).wait(1).to({y:305.2},0).wait(1).to({y:304.4},0).wait(1).to({y:303.5},0).wait(1).to({y:302.7},0).wait(1).to({y:301.8},0).wait(1).to({y:300.9},0).wait(1).to({y:300.1},0).wait(1).to({y:299.2},0).wait(1).to({y:298.4},0).wait(1).to({y:297.5},0).wait(1).to({y:296.6},0).wait(1).to({y:295.8},0).wait(1).to({y:294.9},0).wait(1).to({y:294.1},0).wait(1).to({y:293.2},0).wait(1).to({y:292.3},0).wait(1).to({y:291.5},0).wait(1).to({y:290.6},0).wait(1).to({y:289.7},0).wait(1).to({y:288.9},0).wait(1).to({y:288},0).wait(1).to({y:287.2},0).wait(1).to({y:286.3},0).wait(1).to({y:285.4},0).wait(1).to({y:284.6},0).wait(1).to({y:283.7},0).wait(1).to({y:282.9},0).wait(1).to({y:282},0).wait(1).to({y:281.1},0).wait(1).to({y:280.3},0).wait(1).to({y:279.4},0).wait(1).to({y:278.6},0).wait(1).to({y:277.7},0).wait(1).to({y:276.8},0).wait(1).to({y:276},0).wait(1).to({y:275.1},0).wait(1).to({y:274.2},0).wait(1).to({y:273.4},0).wait(1).to({y:272.5},0).wait(1).to({y:271.7},0).wait(1).to({y:270.8},0).wait(1).to({y:269.9},0).wait(1).to({y:269.1},0).wait(1).to({y:268.2},0).wait(1).to({y:267.4},0).wait(1).to({y:266.5},0).wait(1).to({y:265.6},0).wait(1).to({y:264.8},0).wait(1).to({y:263.9,alpha:0.95},0).wait(1).to({y:263.1,alpha:0.9},0).wait(1).to({y:262.2,alpha:0.85},0).wait(1).to({y:261.3,alpha:0.8},0).wait(1).to({y:260.5,alpha:0.75},0).wait(1).to({y:259.6,alpha:0.7},0).wait(1).to({y:258.7,alpha:0.65},0).wait(1).to({y:257.9,alpha:0.6},0).wait(1).to({y:257,alpha:0.55},0).wait(1).to({y:256.2,alpha:0.5},0).wait(1).to({y:255.3,alpha:0.45},0).wait(1).to({y:254.4,alpha:0.4},0).wait(1).to({y:253.6,alpha:0.35},0).wait(1).to({y:252.7,alpha:0.3},0).wait(1).to({y:251.9,alpha:0.25},0).wait(1).to({y:251,alpha:0.2},0).wait(1).to({y:250.1,alpha:0.15},0).wait(1).to({y:249.3,alpha:0.1},0).wait(1).to({y:248.4,alpha:0.05},0).wait(1).to({y:247.6,alpha:0},0).to({_off:true},1).wait(315));

	// Layer 2
	this.instance_1 = new lib.Symbol2();
	this.instance_1.parent = this;
	this.instance_1.setTransform(650,182,1,1,0,0,0,650,408);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(109).to({_off:false},0).wait(1).to({y:182.8},0).wait(1).to({y:183.6},0).wait(1).to({y:184.3},0).wait(1).to({y:185.1},0).wait(1).to({y:185.9},0).wait(1).to({y:186.6},0).wait(1).to({y:187.4},0).wait(1).to({y:188.2},0).wait(1).to({y:188.9},0).wait(1).to({y:189.7},0).wait(1).to({y:190.5},0).wait(1).to({y:191.2},0).wait(1).to({y:192},0).wait(1).to({y:192.8},0).wait(1).to({y:193.5},0).wait(1).to({y:194.3},0).wait(1).to({y:195.1},0).wait(1).to({y:195.8},0).wait(1).to({y:196.6},0).wait(1).to({y:197.4},0).wait(1).to({y:198.1},0).wait(1).to({y:198.9},0).wait(1).to({y:199.7},0).wait(1).to({y:200.4},0).wait(1).to({y:201.2},0).wait(1).to({y:202},0).wait(1).to({y:202.7},0).wait(1).to({y:203.5},0).wait(1).to({y:204.3},0).wait(1).to({y:205},0).wait(1).to({y:205.8},0).wait(1).to({y:206.6},0).wait(1).to({y:207.3},0).wait(1).to({y:208.1},0).wait(1).to({y:208.9},0).wait(1).to({y:209.6},0).wait(1).to({y:210.4},0).wait(1).to({y:211.2},0).wait(1).to({y:211.9},0).wait(1).to({y:212.7},0).wait(1).to({y:213.5},0).wait(1).to({y:214.2},0).wait(1).to({y:215},0).wait(1).to({y:215.8},0).wait(1).to({y:216.5},0).wait(1).to({y:217.3},0).wait(1).to({y:218.1},0).wait(1).to({y:218.8},0).wait(1).to({y:219.6},0).wait(1).to({y:220.4},0).wait(1).to({y:221.1},0).wait(1).to({y:221.9},0).wait(1).to({y:222.7},0).wait(1).to({y:223.4},0).wait(1).to({y:224.2},0).wait(1).to({y:225},0).wait(1).to({y:225.7},0).wait(1).to({y:226.5},0).wait(1).to({y:227.3},0).wait(1).to({y:228},0).wait(1).to({y:228.8},0).wait(1).to({y:229.5},0).wait(1).to({y:230.3},0).wait(1).to({y:231.1},0).wait(1).to({y:231.8},0).wait(1).to({y:232.6},0).wait(1).to({y:233.4},0).wait(1).to({y:234.1},0).wait(1).to({y:234.9},0).wait(1).to({y:235.7},0).wait(1).to({y:236.4},0).wait(1).to({y:237.2},0).wait(1).to({y:238},0).wait(1).to({y:238.7},0).wait(1).to({y:239.5},0).wait(1).to({y:240.3},0).wait(1).to({y:241},0).wait(1).to({y:241.8},0).wait(1).to({y:242.6},0).wait(1).to({y:243.3},0).wait(1).to({y:244.1},0).wait(1).to({y:244.9},0).wait(1).to({y:245.6},0).wait(1).to({y:246.4},0).wait(1).to({y:247.2},0).wait(1).to({y:247.9},0).wait(1).to({y:248.7},0).wait(1).to({y:249.5},0).wait(1).to({y:250.2},0).wait(1).to({y:251},0).wait(1).to({y:251.8},0).wait(1).to({y:252.5},0).wait(1).to({y:253.3},0).wait(1).to({y:254.1},0).wait(1).to({y:254.8},0).wait(1).to({y:255.6},0).wait(1).to({y:256.4},0).wait(1).to({y:257.1},0).wait(1).to({y:257.9},0).wait(1).to({y:258.7},0).wait(1).to({y:259.4},0).wait(1).to({y:260.2},0).wait(1).to({y:261,alpha:0.955},0).wait(1).to({y:261.7,alpha:0.909},0).wait(1).to({y:262.5,alpha:0.864},0).wait(1).to({y:263.3,alpha:0.818},0).wait(1).to({y:264,alpha:0.773},0).wait(1).to({y:264.8,alpha:0.727},0).wait(1).to({y:265.6,alpha:0.682},0).wait(1).to({y:266.3,alpha:0.636},0).wait(1).to({y:267.1,alpha:0.591},0).wait(1).to({y:267.9,alpha:0.545},0).wait(1).to({y:268.6,alpha:0.5},0).wait(1).to({y:269.4,alpha:0.455},0).wait(1).to({y:270.2,alpha:0.409},0).wait(1).to({y:270.9,alpha:0.364},0).wait(1).to({y:271.7,alpha:0.318},0).wait(1).to({y:272.5,alpha:0.273},0).wait(1).to({y:273.2,alpha:0.227},0).wait(1).to({y:274,alpha:0.182},0).wait(1).to({y:274.8,alpha:0.136},0).wait(1).to({y:275.5,alpha:0.091},0).wait(1).to({y:276.3,alpha:0.045},0).wait(1).to({y:277,alpha:0},0).to({_off:true},1).wait(212));

	// Layer 3
	this.instance_2 = new lib.black_mirror("synched",0);
	this.instance_2.parent = this;
	this.instance_2.setTransform(630,180.5);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(210).to({_off:false},0).to({scaleX:0.91,scaleY:0.91,x:619.6},105).to({scaleX:0.89,scaleY:0.89,x:617,alpha:0},26).to({_off:true},1).wait(104));

	// Layer 4
	this.instance_3 = new lib.daedalus();
	this.instance_3.parent = this;
	this.instance_3.setTransform(-1,-52,0.949,0.949);

	this.instance_4 = new lib.Tween3("synched",0);
	this.instance_4.parent = this;
	this.instance_4.setTransform(616,295);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_3}]},299).to({state:[{t:this.instance_4}]},15).to({state:[{t:this.instance_4}]},108).to({state:[{t:this.instance_4}]},23).wait(1));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(314).to({_off:false},0).to({x:616.8,y:204.9},108).to({x:617,y:177,alpha:0},23).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(579,98,1300,823);
// library properties:
lib.properties = {
	id: '695784A1D5D4DE48A3FDCCB682CA803B',
	width: 1230,
	height: 300,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/banner_animation_doc_atlas_.png", id:"banner_animation_doc_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['695784A1D5D4DE48A3FDCCB682CA803B'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;